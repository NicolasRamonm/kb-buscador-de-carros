"use client";

import { useState } from "react";
import { Sparkles, MapPin } from "lucide-react";
import { Chip } from "@/components/ui/chip";
import { Button } from "@/components/ui/button";
import { AVAILABLE_STATES } from "@/backend/data/city-state-map";

const STATE_OPTIONS = ["Todos", ...AVAILABLE_STATES] as const;

interface HeroSearchIAProps {
  onSearch: (query: string, userState?: string) => void;
}

export function HeroSearchIA({ onSearch }: HeroSearchIAProps) {
  const [query, setQuery] = useState("");
  const [selectedState, setSelectedState] = useState<string>("Todos");

  const handleSubmit = () => {
    const state = selectedState === "Todos" ? undefined : selectedState;
    onSearch(query || "Carro confortável para família na cidade", state);
  };

  return (
    <div className="w-full max-w-[780px] rounded-2xl bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] md:px-10">
      <div className="flex flex-col gap-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-lg font-semibold text-gray-900 md:text-xl">
            Buscar com IA
          </span>
          <Sparkles size={20} className="text-violet-600" />
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
              placeholder="Descreva o que você está procurando"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              className="flex-1 bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Button size="lg" onClick={handleSubmit}>
            Ver todas as ofertas
          </Button>
        </div>
      </div>
    </div>
  );
}
