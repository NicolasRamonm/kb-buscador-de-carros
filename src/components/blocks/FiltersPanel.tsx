"use client";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import clsx from "clsx";
import { formatPrice } from "@/lib/format";

interface FiltersPanelProps {
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  maxPrice: number;
  carType: string;
  onCarTypeChange: (type: string) => void;
  onClear: () => void;
}

const TYPE_OPTIONS = ["Sedans", "SUVs"];

export function FiltersPanel({
  priceRange,
  onPriceRangeChange,
  maxPrice,
  carType,
  onCarTypeChange,
  onClear,
}: FiltersPanelProps) {
  return (
    <aside className="flex w-[260px] shrink-0 flex-col gap-4">
      <h3 className="text-sm font-semibold text-gray-900">Filtros</h3>

      {/* Active filter chips */}
      <div className="flex flex-wrap gap-2">
        <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-[11px] text-blue-700">
          Até {formatPrice(priceRange[1])}
        </span>
        <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-[11px] text-blue-700">
          São Paulo e região
        </span>
      </div>

      {/* Price range */}
      <div className="flex flex-col gap-1.5">
        <span className="text-xs text-gray-600">Faixa de preço</span>
        <div className="rounded-[10px] border border-gray-200 bg-white px-2.5 py-2">
          <span className="text-xs text-gray-900">
            {formatPrice(priceRange[0])} a {formatPrice(priceRange[1])}
          </span>
          <div className="mt-2">
            <Slider
              range
              min={0}
              max={maxPrice}
              step={5000}
              value={priceRange}
              onChange={(val) => onPriceRangeChange(val as [number, number])}
              trackStyle={[{ backgroundColor: "#2563EB" }]}
              handleStyle={[
                { borderColor: "#2563EB", backgroundColor: "#fff" },
                { borderColor: "#2563EB", backgroundColor: "#fff" },
              ]}
              railStyle={{ backgroundColor: "#E5E7EB" }}
            />
          </div>
        </div>
      </div>

      {/* Car type */}
      <div className="flex flex-col gap-1.5">
        <span className="text-xs text-gray-600">Tipo de carro</span>
        <div className="flex flex-wrap gap-1.5">
          {TYPE_OPTIONS.map((type) => (
            <button
              key={type}
              onClick={() => onCarTypeChange(type === carType ? "" : type)}
              className={clsx(
                "rounded-full px-2.5 py-1 text-[11px] font-medium transition-colors",
                type === carType
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              )}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={onClear}
        className="text-left text-xs font-medium text-blue-600 hover:text-blue-700"
      >
        Limpar filtros
      </button>
    </aside>
  );
}
