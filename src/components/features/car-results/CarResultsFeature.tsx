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

  const displayCars: Array<{ Name: string; Model: string; Price: number; Location: string; index: number; isRecommended: boolean; year?: number; mileage?: number; transmission?: string; fuel?: string }> =
    aiResult
      ? aiResult.cars.map((car) => ({
          Name: car.brand,
          Model: car.model,
          Price: car.price,
          Location: car.location,
          index: car.index,
          isRecommended: aiResult.recommendation?.car.id === car.id,
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
        }));

  const filtered = displayCars.filter(
    (car) => car.Price >= priceRange[0] && car.Price <= priceRange[1]
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
                className="flex gap-4 p-3"
                shadow="md"
              >
                <div className="h-[140px] w-[220px] shrink-0 rounded-xl bg-gray-200" />
                <div className="flex flex-1 flex-col gap-1.5">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-[15px] font-semibold text-gray-900">
                      {car.Name} {car.Model}
                    </h3>
                    {car.isRecommended && (
                      <Badge variant="success">Recomendado pela IA</Badge>
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
                      <span className="text-base font-bold text-blue-600">
                        {formatPrice(car.Price)}
                      </span>
                      <span className="text-[11px] text-gray-500">
                        {car.Location}
                      </span>
                    </div>
                    <Link href={`/detalhe?id=${car.index}`}>
                      <Button size="sm">Ver detalhes</Button>
                    </Link>
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
    </div>
  );
}
