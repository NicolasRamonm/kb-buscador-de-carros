"use client";

import clsx from "clsx";
import { BRANDS } from "@/config/constants";

const BRAND_LOGO: Record<string, string> = {
  BYD: "/img/logos/byd.svg",
  Toyota: "/img/logos/toyota.svg",
  Volkswagen: "/img/logos/volkswagen.png",
  Honda: "/img/logos/honda.svg",
  Chevrolet: "/img/logos/chevrolet.png",
  Hyundai: "/img/logos/hyundai.png",
  Renault: "/img/logos/renault.svg",
  Fiat: "/img/logos/fiat.png",
  Jeep: "/img/logos/jeep.svg",
  Peugeot: "/img/logos/peugeot.svg",
};

interface BrandsRowProps {
  selected?: string;
  onSelect?: (brand: string) => void;
}

export function BrandsRow({ selected = "Hyundai", onSelect }: BrandsRowProps) {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-lg font-bold text-gray-900 text-center">
        Busque por Marcas
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {BRANDS.map((brand) => {
          const logo = BRAND_LOGO[brand];
          return (
            <button
              key={brand}
              onClick={() => onSelect?.(brand)}
              className={clsx(
                "group flex items-center justify-center rounded-full bg-white transition-all",
                "h-[120px] w-[120px] border-2 border-gray-200 hover:border-blue-600 hover:shadow-md hover:scale-105"
              )}
            >
              <img
                src={logo ?? ""}
                alt={brand}
                className="h-12 w-12 object-contain"
              />
            </button>
          );
        })}
      </div>
    </section>
  );
}
