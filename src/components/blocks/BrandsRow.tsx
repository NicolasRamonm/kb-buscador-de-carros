"use client";

import clsx from "clsx";
import { BRANDS } from "@/config/constants";

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
          return (
            <button
              key={brand}
              onClick={() => onSelect?.(brand)}
              className={clsx(
                "group flex flex-col items-center justify-center rounded-full bg-white transition-all",
                "h-[120px] w-[120px] border-2 border-gray-200 hover:border-blue-600 hover:shadow-md hover:scale-105"
              )}
            >
              <span
                className={clsx(
                  "text-center text-xs font-bold text-gray-900 group-hover:text-blue-600"
                )}
              >
                {brand}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
