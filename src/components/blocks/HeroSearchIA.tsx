"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { Chip } from "@/components/ui/chip";
import { Button } from "@/components/ui/button";
import { CAR_TYPES } from "@/config/constants";

interface HeroSearchIAProps {
  onSearch: (query: string) => void;
}

export function HeroSearchIA({ onSearch }: HeroSearchIAProps) {
  const [query, setQuery] = useState("");
  const [activeType, setActiveType] = useState("Todos");

  const handleSubmit = () => {
    onSearch(query || "Carro confortável para família na cidade");
  };

  return (
    <div className="w-full max-w-[780px] rounded-2xl bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] md:px-10">
      <div className="flex flex-col gap-5">
        {/* Suggestion row */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-lg md:text-xl font-semibold text-gray-900">
            Buscar
          </span>
          <Sparkles size={20} className="text-violet-600" />
          <span className="text-base font-medium text-blue-600">
            Corolla 2020 automático branco
          </span>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap items-center gap-2.5">
          {CAR_TYPES.map((type) => (
            <Chip
              key={type}
              active={type === activeType}
              onClick={() => setActiveType(type)}
            >
              {type}
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
