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
      <h2 className="text-lg font-bold text-gray-900">Busque por Marcas</h2>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {BRANDS.map((brand) => {
          const isActive = brand === selected;
          return (
            <button
              key={brand}
              onClick={() => onSelect?.(brand)}
              className={clsx(
                "flex flex-col items-center justify-center rounded-full bg-white transition-all",
                isActive
                  ? "h-[120px] w-[120px] border-2 border-blue-600"
                  : "h-[100px] w-[100px] border border-gray-200 hover:border-gray-300"
              )}
            >
              <span
                className={clsx(
                  "text-center text-xs font-bold",
                  isActive ? "text-blue-600" : "text-gray-900"
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
