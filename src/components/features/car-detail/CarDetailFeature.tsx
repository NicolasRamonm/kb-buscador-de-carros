"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Heart, MapPin } from "lucide-react";
import { BackNav } from "@/components/blocks/BackNav";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { formatPrice } from "@/lib/format";
import { getCarByIndex, getAllCars } from "@/lib/cars";
import { FinanceModal } from "./FinanceModal";

export function CarDetailFeature() {
  const params = useSearchParams();
  const idParam = params.get("id");
  const carIndex = idParam ? parseInt(idParam, 10) : 1;
  const car = getCarByIndex(carIndex) ?? getAllCars()[0];

  const [showModal, setShowModal] = useState(false);

  if (!car) return null;

  const fullTitle = `${car.Name} ${car.Model}`;
  const carId = car.id;
  const imageUrls =
    carId != null
      ? [1, 2, 3].map(
          (idx) => `/img/${carId}/${idx}.png`
        )
      : [car.Image].filter(Boolean);

  return (
    <>
      <div className="flex flex-col gap-6 px-[72px] pb-10 pt-6">
        {/* Header */}
        <header className="flex items-center justify-between">
          <BackNav href="/resultados" label="Voltar para resultados" />
          <div className="flex items-center gap-2">
            <Badge variant="success">Recomendado pela IA</Badge>
            <button className="text-gray-400 hover:text-gray-600">
              <Heart size={20} />
            </button>
          </div>
        </header>

        {/* Main layout: media + info */}
        <div className="flex gap-8">
          {/* Media column */}
          <div className="flex w-[640px] shrink-0 flex-col gap-3">
            {car.Image ? (
              <img
                src={car.Image}
                alt={fullTitle}
                className="h-[360px] w-full rounded-2xl object-cover"
              />
            ) : (
              <div className="h-[360px] w-full rounded-2xl bg-gray-200" />
            )}
            <div className="flex gap-2">
              {imageUrls.map((url, idx) => (
                <div key={url} className="h-20 flex-1">
                  <img
                    src={url}
                    alt={`${fullTitle} imagem ${idx + 1}`}
                    className="h-full w-full rounded-xl object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display =
                        "none";
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Info column */}
          <div className="flex flex-1 flex-col gap-4">
            <h1 className="text-[22px] font-bold text-gray-900">
              {fullTitle}
            </h1>
            <p className="text-sm text-gray-600">
              {car.year ?? "—"} &bull;{" "}
              {car.mileage != null
                ? `${car.mileage.toLocaleString("pt-BR")} km`
                : "— km"}{" "}
              &bull; {car.transmission ?? "—"} &bull; {car.fuel ?? "—"}
            </p>

            {/* Price box */}
            <Card className="flex flex-col gap-1 rounded-xl border border-gray-200 p-3.5 shadow-none">
              <span className="text-xs text-gray-500">Preço à vista</span>
              <span className="text-2xl font-bold text-blue-600">
                {formatPrice(car.Price)}
              </span>
              <span className="text-xs text-gray-600">
                Consulte condições de financiamento
              </span>
            </Card>

            {/* Action buttons */}
            <div className="flex flex-col gap-2">
              <Button size="lg">Comprar</Button>

              <div className="flex flex-col gap-2 pt-6">
                <Button
                  variant="ghost"
                  className="self-start border border-blue-200 !bg-blue-50 text-blue-700 hover:border-blue-300 hover:!bg-blue-100 hover:text-blue-800"
                  onClick={() => setShowModal(true)}
                >
                  Simular financiamento
                </Button>
                <Button
                  variant="ghost"
                  className="self-start border border-purple-200 bg-purple-50 text-purple-900 hover:bg-purple-100"
                  onClick={() => setShowModal(true)}
                >
                  Simular consórcio
                </Button>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-1.5">
              <MapPin size={16} className="text-gray-400" />
              <span className="text-[13px] text-gray-600">
                Loja AutoCenter &bull; {car.Location}
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gray-200" />

        {/* Bottom sections: specs + AI notes */}
        <div className="flex gap-8">
          {/* Specs */}
          <div className="flex flex-1 flex-col gap-3">
            <h2 className="text-base font-semibold text-gray-900">
              Detalhes do veículo
            </h2>
            <div className="flex gap-6">
              <div className="flex flex-1 flex-col gap-2">
                <span className="text-[13px] text-gray-600">
                  Ano: {car.year ?? "—"}
                </span>
                <span className="text-[13px] text-gray-600">
                  Quilometragem:{" "}
                  {car.mileage != null
                    ? `${car.mileage.toLocaleString("pt-BR")} km`
                    : "—"}
                </span>
                <span className="text-[13px] text-gray-600">
                  Câmbio: {car.transmission ?? "—"}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <span className="text-[13px] text-gray-600">
                  Combustível: {car.fuel ?? "—"}
                </span>
                <span className="text-[13px] text-gray-600">Cor: Branco</span>
                <span className="text-[13px] text-gray-600">Portas: 4</span>
              </div>
            </div>
          </div>

          {/* AI notes */}
          <div className="flex flex-1 flex-col gap-3">
            <h2 className="text-base font-semibold text-gray-900">
              O que a IA considerou
            </h2>
            <Card className="rounded-xl border border-gray-200 p-3.5 shadow-none">
              <p className="text-[13px] leading-6 text-gray-600">
                Com base no seu uso diário na cidade, necessidade de conforto e
                bom consumo, este {car.Model}{car.year ? ` ${car.year}` : ""}{car.transmission ? ` ${car.transmission.toLowerCase()}` : ""} foi classificado
                como uma das melhores combinações de custo-benefício do estoque.
              </p>
            </Card>
          </div>
        </div>
      </div>

      <FinanceModal
        open={showModal}
        onClose={() => setShowModal(false)}
        carId={carIndex}
      />
    </>
  );
}
