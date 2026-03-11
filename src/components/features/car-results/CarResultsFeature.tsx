"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { BackNav } from "@/components/blocks/BackNav";
import { FiltersPanel } from "@/components/blocks/FiltersPanel";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { formatPrice } from "@/lib/format";
import { findCarsByQuery, getAllCars, searchCarsWithAI } from "@/lib/cars";
import type { SearchResponse, CarResponse } from "@/types/car";

export function CarResultsFeature() {
  const params = useSearchParams();
  const query = params.get("q") ?? "";

  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000]);
  const [carType, setCarType] = useState("");
  const [aiResult, setAiResult] = useState<SearchResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPricePopup, setShowPricePopup] = useState(false);
  const [showDistancePopup, setShowDistancePopup] = useState(false);
  const [showFinancingPopup, setShowFinancingPopup] = useState(false);

  useEffect(() => {
    if (!query) return;
    let cancelled = false;
    setLoading(true);

    searchCarsWithAI(query)
      .then((result) => {
        if (cancelled) return;
        setAiResult(result);
        if (result.appliedFilters.priceRange) {
          setPriceRange(result.appliedFilters.priceRange);
        }
        if (result.popups.priceExceeded) setShowPricePopup(true);
        if (result.popups.distanceWarning) setShowDistancePopup(true);
        if (result.popups.showFinancingPopup) setShowFinancingPopup(true);
      })
      .catch(() => {})
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, [query]);

  const fallbackCars = useMemo(
    () => (query ? findCarsByQuery(query) : getAllCars()),
    [query]
  );

  const specialOfferId = aiResult?.specialOffer?.car.id;

  const displayCars: Array<{ Name: string; Model: string; Price: number; Location: string; index: number; isRecommended: boolean; isSpecialOffer: boolean; year?: number; mileage?: number; transmission?: string; fuel?: string }> =
    aiResult
      ? aiResult.cars.map((car) => ({
          Name: car.brand,
          Model: car.model,
          Price: car.price,
          Location: car.location,
          index: car.index,
          isRecommended: aiResult.recommendation?.car.id === car.id,
          isSpecialOffer: car.id === specialOfferId,
          year: car.year,
          mileage: car.mileage,
          transmission: car.transmission,
          fuel: car.fuel,
        }))
      : fallbackCars.map((car, i) => ({
          Name: car.Name,
          Model: car.Model,
          Price: car.Price,
          Location: car.Location,
          index: i,
          isRecommended: false,
          isSpecialOffer: false,
        }));

  const filtered = displayCars.filter(
    (car) =>
      car.isSpecialOffer ||
      (car.Price >= priceRange[0] && car.Price <= priceRange[1])
  );

  const handleClearFilters = () => {
    setPriceRange([0, 200000]);
    setCarType("");
  };

  return (
    <div className="flex flex-col gap-6 px-[72px] pb-10 pt-6">
      {/* Header */}
      <header className="flex items-center justify-between">
        <BackNav href="/" label="Voltar para busca com IA" />
        <div className="flex flex-1 flex-col gap-1 pl-6" style={{ maxWidth: 640 }}>
          <span className="text-[11px] text-gray-500">Resultados para</span>
          <span className="text-[15px] font-semibold text-gray-900">
            &ldquo;{query || "Carro confortável para família na cidade, até R$ 100.000"}&rdquo;
          </span>
        </div>
        <span className="text-xs text-gray-600">
          {loading ? "Buscando..." : `${filtered.length} carros encontrados`}
        </span>
      </header>

      {/* AI Summary */}
      {aiResult?.aiSummary && (
        <Card className="flex items-start gap-3 border-violet-200 bg-violet-50 p-4">
          <Sparkles size={18} className="mt-0.5 shrink-0 text-violet-600" />
          <p className="text-[13px] leading-relaxed text-gray-800">
            {aiResult.aiSummary}
          </p>
        </Card>
      )}

      {/* Special Offer Card */}
      {aiResult?.specialOffer && (
        <Card className="flex gap-4 border-2 border-amber-300 bg-amber-50 p-4" shadow="md">
          <div className="h-[120px] w-[200px] shrink-0 rounded-xl bg-amber-100" />
          <div className="flex flex-1 flex-col gap-2">
            <div className="flex items-center gap-2">
              <h3 className="text-[15px] font-semibold text-gray-900">
                {aiResult.specialOffer.car.fullName}
              </h3>
              <Badge variant="special">{aiResult.specialOffer.tag}</Badge>
            </div>
            <p className="text-xs text-gray-600">
              {aiResult.specialOffer.car.year} &bull;{" "}
              {aiResult.specialOffer.car.mileage.toLocaleString("pt-BR")} km &bull;{" "}
              {aiResult.specialOffer.car.transmission} &bull;{" "}
              {aiResult.specialOffer.car.fuel}
            </p>
            <div className="mt-auto flex items-center justify-between">
              <div className="flex flex-col gap-0.5">
                <span className="text-base font-bold text-amber-700">
                  {formatPrice(aiResult.specialOffer.car.price)}
                </span>
                <span className="text-[11px] text-gray-500">
                  {aiResult.specialOffer.car.location}
                </span>
              </div>
              <Button
                size="sm"
                className="border-amber-400 bg-amber-600 text-white hover:bg-amber-700"
                onClick={() => setShowFinancingPopup(true)}
              >
                Ver condições
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Content */}
      <div className="flex gap-6">
        <FiltersPanel
          priceRange={priceRange}
          onPriceRangeChange={setPriceRange}
          maxPrice={200000}
          carType={carType}
          onCarTypeChange={setCarType}
          onClear={handleClearFilters}
        />

        <div className="flex flex-1 flex-col gap-4">
          {/* Sort row */}
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-gray-500">
              {aiResult
                ? "Ordenado por relevância da IA"
                : "Ordenado por melhor combinação para você"}
            </span>
            <div className="rounded-full border border-gray-200 bg-white px-2.5 py-1.5">
              <span className="text-[11px] text-gray-700">
                {aiResult ? "Relevância IA" : "Preço (menor primeiro)"}
              </span>
            </div>
          </div>

          {/* Loading state */}
          {loading && (
            <Card className="flex items-center justify-center gap-3 p-8">
              <Sparkles size={20} className="animate-pulse text-violet-600" />
              <span className="text-sm text-gray-600">
                A IA está analisando sua busca...
              </span>
            </Card>
          )}

          {/* Car result cards */}
          {!loading &&
            filtered.map((car) => (
              <Card
                key={`${car.Name}-${car.Model}-${car.index}`}
                className={
                  car.isSpecialOffer
                    ? "flex gap-4 border-2 border-amber-300 bg-amber-50/50 p-3"
                    : "flex gap-4 p-3"
                }
                shadow="md"
              >
                <div
                  className={
                    car.isSpecialOffer
                      ? "h-[140px] w-[220px] shrink-0 rounded-xl bg-amber-100"
                      : "h-[140px] w-[220px] shrink-0 rounded-xl bg-gray-200"
                  }
                />
                <div className="flex flex-1 flex-col gap-1.5">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-[15px] font-semibold text-gray-900">
                      {car.Name} {car.Model}
                    </h3>
                    {car.isRecommended && (
                      <Badge variant="success">Recomendado pela IA</Badge>
                    )}
                    {car.isSpecialOffer && (
                      <Badge variant="special">Condições especiais para você</Badge>
                    )}
                  </div>
                  <p className="text-xs text-gray-600">
                    {car.year ?? 2019} &bull;{" "}
                    {car.mileage ? `${car.mileage.toLocaleString("pt-BR")} km` : "45.000 km"}{" "}
                    &bull; {car.transmission ?? "Automático"} &bull;{" "}
                    {car.fuel ?? "Flex"}
                  </p>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex flex-col gap-0.5">
                      <span
                        className={
                          car.isSpecialOffer
                            ? "text-base font-bold text-amber-700"
                            : "text-base font-bold text-blue-600"
                        }
                      >
                        {formatPrice(car.Price)}
                      </span>
                      <span className="text-[11px] text-gray-500">
                        {car.Location}
                      </span>
                    </div>
                    {car.isSpecialOffer ? (
                      <Button
                        size="sm"
                        className="border-amber-400 bg-amber-600 text-white hover:bg-amber-700"
                        onClick={() => setShowFinancingPopup(true)}
                      >
                        Ver condições
                      </Button>
                    ) : (
                      <Link href={`/detalhe?id=${car.index}`}>
                        <Button size="sm">Ver detalhes</Button>
                      </Link>
                    )}
                  </div>
                </div>
              </Card>
            ))}

          {!loading && filtered.length === 0 && (
            <Card className="p-6 text-center text-sm text-gray-600">
              Nenhum carro encontrado nessa faixa de preço. Ajuste os filtros
              para ver mais opções.
            </Card>
          )}
        </div>
      </div>

      {/* Price exceeded popup */}
      <Modal open={showPricePopup} onClose={() => setShowPricePopup(false)}>
        <div className="flex flex-col gap-4">
          <span className="text-xs font-semibold text-blue-600">
            Aviso de preço
          </span>
          <h2 className="text-xl font-bold text-gray-900">
            O carro está acima do seu orçamento
          </h2>
          {aiResult?.popups.priceExceededData && (
            <p className="text-sm text-gray-600">
              O {aiResult.popups.priceExceededData.carName} custa{" "}
              {formatPrice(aiResult.popups.priceExceededData.actualPrice)}, mas
              seu orçamento era de{" "}
              {formatPrice(aiResult.popups.priceExceededData.requestedMax)}.
              Veja alternativas no resultado!
            </p>
          )}
          <Button onClick={() => setShowPricePopup(false)}>Entendi</Button>
        </div>
      </Modal>

      {/* Distance warning popup */}
      <Modal
        open={showDistancePopup}
        onClose={() => setShowDistancePopup(false)}
      >
        <div className="flex flex-col gap-4">
          <span className="text-xs font-semibold text-blue-600">
            Aviso de distância
          </span>
          <h2 className="text-xl font-bold text-gray-900">
            O carro recomendado está distante
          </h2>
          {aiResult?.popups.distanceWarningData && (
            <p className="text-sm text-gray-600">
              O {aiResult.popups.distanceWarningData.carName} está a{" "}
              {aiResult.popups.distanceWarningData.distanceKm}km de você.
              {aiResult.popups.distanceWarningData.closerAlternative &&
                ` O ${aiResult.popups.distanceWarningData.closerAlternative} é uma opção mais próxima.`}
            </p>
          )}
          <Button onClick={() => setShowDistancePopup(false)}>Entendi</Button>
        </div>
      </Modal>

      {/* Financing / Special Offer popup */}
      <Modal
        open={showFinancingPopup}
        onClose={() => setShowFinancingPopup(false)}
      >
        <div className="flex flex-col gap-4">
          <span className="text-xs font-semibold text-amber-600">
            Condições especiais
          </span>
          <h2 className="text-xl font-bold text-gray-900">
            Condições especiais para você
          </h2>
          {aiResult?.specialOffer && (
            <>
              <p className="text-sm text-gray-600">
                Este modelo está acima da faixa que você buscou, mas nossa IA
                identificou que ele pode caber no seu bolso através de condições
                especiais como consórcio ou financiamento.
              </p>
              <div className="flex items-center justify-between rounded-xl border border-amber-200 bg-amber-50 p-3">
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {aiResult.specialOffer.car.fullName}
                  </p>
                  <p className="text-lg font-bold text-amber-700">
                    {formatPrice(aiResult.specialOffer.car.price)}
                  </p>
                </div>
                {aiResult.popups.priceExceededData && (
                  <div className="text-right">
                    <p className="text-[11px] text-gray-500">Seu orçamento</p>
                    <p className="text-sm font-semibold text-gray-700">
                      {formatPrice(aiResult.popups.priceExceededData.requestedMax)}
                    </p>
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <div className="rounded-xl border border-blue-200 bg-blue-50 p-3">
                  <p className="text-sm font-semibold text-blue-700">
                    Simular financiamento automático
                  </p>
                  <p className="text-xs text-gray-800">
                    Parcelas flexíveis em bancos parceiros.
                  </p>
                </div>
                <div className="rounded-xl border border-purple-200 bg-purple-50 p-3">
                  <p className="text-sm font-semibold text-purple-900">
                    Ver opções de consórcio
                  </p>
                  <p className="text-xs text-gray-800">
                    Consórcio sem juros, com carta de crédito.
                  </p>
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button
                  variant="ghost"
                  onClick={() => setShowFinancingPopup(false)}
                >
                  Fechar
                </Button>
                <Link
                  href={`/simulacao?id=${aiResult.specialOffer.car.index}`}
                >
                  <Button>Simular agora</Button>
                </Link>
              </div>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
}
