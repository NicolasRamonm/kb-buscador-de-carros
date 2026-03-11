"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { BackNav } from "@/components/blocks/BackNav";
import { FiltersPanel } from "@/components/blocks/FiltersPanel";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";
import { findCarsByQuery, getAllCars } from "@/lib/cars";

export function CarResultsFeature() {
  const params = useSearchParams();
  const query = params.get("q") ?? "";

  const [priceRange, setPriceRange] = useState<[number, number]>([80000, 120000]);
  const [carType, setCarType] = useState("");

  const all = useMemo(
    () => (query ? findCarsByQuery(query) : getAllCars()),
    [query]
  );

  const filtered = all.filter(
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
          {filtered.length} carros encontrados
        </span>
      </header>

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
              Ordenado por melhor combinação para você
            </span>
            <div className="rounded-full border border-gray-200 bg-white px-2.5 py-1.5">
              <span className="text-[11px] text-gray-700">
                Preço (menor primeiro)
              </span>
            </div>
          </div>

          {/* Car result cards */}
          {filtered.map((car, index) => (
            <Card
              key={`${car.Name}-${car.Model}-${index}`}
              className="flex gap-4 p-3"
              shadow="md"
            >
              <div className="h-[140px] w-[220px] shrink-0 rounded-xl bg-gray-200" />
              <div className="flex flex-1 flex-col gap-1.5">
                <div className="flex items-center gap-1.5">
                  <h3 className="text-[15px] font-semibold text-gray-900">
                    {car.Name} {car.Model}
                  </h3>
                  <Badge variant="success">Recomendado pela IA</Badge>
                </div>
                <p className="text-xs text-gray-600">
                  2019 &bull; 45.000 km &bull; Automático &bull; Flex
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
                  <Link href={`/detalhe?id=${index}`}>
                    <Button size="sm">Ver detalhes</Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}

          {filtered.length === 0 && (
            <Card className="p-6 text-center text-sm text-gray-600">
              Nenhum carro encontrado nessa faixa de preço. Ajuste os filtros
              para ver mais opções.
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
