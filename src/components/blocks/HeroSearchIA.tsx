"use client";

import { useState } from "react";
import clsx from "clsx";
import { Sparkles, MapPin } from "lucide-react";
import { Chip } from "@/components/ui/chip";
import { Button } from "@/components/ui/button";
import { AVAILABLE_STATES } from "@/backend/data/city-state-map";

const STATE_OPTIONS = ["Todos", ...AVAILABLE_STATES] as const;

interface HeroSearchIAProps {
  onSearch: (query: string, userState?: string, useAI?: boolean) => void;
}

export function HeroSearchIA({ onSearch }: HeroSearchIAProps) {
  const [query, setQuery] = useState("");
  const [selectedState, setSelectedState] = useState<string>("Todos");
  const [useAI, setUseAI] = useState<boolean>(true);
  const [isSearching, setIsSearching] = useState(false);

  const handleSubmit = () => {
    if (isSearching) return;
    setIsSearching(true);
    const state = selectedState === "Todos" ? undefined : selectedState;
    const finalQuery =
      useAI ? query || "Carro confortável para família na cidade" : query;
    onSearch(finalQuery, state, useAI);
  };

  return (
    <div className="w-full max-w-[780px] rounded-2xl bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] md:px-10">
      <div className="flex flex-col gap-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-gray-900 md:text-xl">
              Busca de carros
            </span>
            <Sparkles size={20} className="text-violet-600" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-gray-600">
              Buscar com IA
            </span>
            <button
              type="button"
              onClick={() => setUseAI((prev) => !prev)}
              className={clsx(
                "relative inline-flex h-5 w-9 items-center rounded-full transition-colors",
                useAI ? "bg-violet-600" : "bg-gray-300"
              )}
            >
              <span
                className={clsx(
                  "inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition-transform",
                  useAI ? "translate-x-4" : "translate-x-1"
                )}
              />
            </button>
          </div>
        </div>

        {/* State selector */}
        <div className="flex flex-wrap items-center gap-2.5">
          <MapPin size={16} className="shrink-0 text-gray-500" />
          <span className="text-xs font-medium text-gray-600">Estado de busca:</span>
          {STATE_OPTIONS.map((state) => (
            <Chip
              key={state}
              active={state === selectedState}
              onClick={() => setSelectedState(state)}
            >
              {state}
            </Chip>
          ))}
        </div>

        {/* AI search input with gradient border */}
        <div className="rounded-full bg-gradient-to-r from-violet-600 to-blue-600 p-[2px]">
          <div className="flex h-[48px] items-center gap-2.5 rounded-full bg-white px-[18px]">
            <Sparkles size={18} className="shrink-0 text-violet-600" />
            <input
              type="text"
              placeholder="Queria comprar um BYD Dolphin por 80mil"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              className="flex-1 bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Button size="lg" onClick={handleSubmit} loading={isSearching}>
            Buscar
          </Button>
        </div>
      </div>
    </div>
  );
}
