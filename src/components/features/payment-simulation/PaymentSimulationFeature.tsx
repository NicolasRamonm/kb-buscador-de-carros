"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Send } from "lucide-react";
import { BackNav } from "@/components/blocks/BackNav";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";
import { getCarByIndex, getAllCars } from "@/lib/cars";
import { SIMULATION_DEFAULTS } from "@/config/constants";
import clsx from "clsx";

type SimTab = "financiamento" | "consorcio";

export function PaymentSimulationFeature() {
  const params = useSearchParams();
  const idParam = params.get("id");
  const carIndex = idParam ? parseInt(idParam, 10) : 1;
  const car = getCarByIndex(carIndex) ?? getAllCars()[0];

  const [activeTab, setActiveTab] = useState<SimTab>("financiamento");
  const [entry, setEntry] = useState<number>(SIMULATION_DEFAULTS.entryAmount);
  const [term, setTerm] = useState<number>(SIMULATION_DEFAULTS.termMonths);
  const [income, setIncome] = useState<number>(SIMULATION_DEFAULTS.monthlyIncome);
  const [maxPercent, setMaxPercent] = useState<number>(SIMULATION_DEFAULTS.maxIncomePercent);

  const simulation = useMemo(() => {
    if (!car) return null;
    const financed = car.Price - entry;
    const monthlyRate = SIMULATION_DEFAULTS.annualInterestRate / 12;
    const monthly =
      (financed * monthlyRate * Math.pow(1 + monthlyRate, term)) /
      (Math.pow(1 + monthlyRate, term) - 1);
    const incomeLimit = income * (maxPercent / 100);
    const withinLimit = monthly <= incomeLimit;
    return { monthly: Math.round(monthly), withinLimit, incomeLimit };
  }, [car, entry, term, income, maxPercent]);

  const [flashKey, setFlashKey] = useState(0);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setFlashKey((k) => k + 1);
  }, [simulation?.monthly]);

  if (!car || !simulation) return null;

  const fullTitle = `${car.Name} ${car.Model}`;

  return (
    <div className="flex flex-col gap-6 px-[72px] pb-10 pt-6">
      {/* Header */}
      <header className="flex items-center justify-between">
        <BackNav href={`/detalhe?id=${carIndex}`} label="Voltar para o carro" />
        <h1 className="text-lg font-bold text-gray-900">
          Simule como chegar nesse carro
        </h1>
        <Badge variant="info">
          Veja como esse carro cabe no seu bolso
        </Badge>
      </header>

      {/* Content */}
      <div className="flex gap-8">
        {/* Left column */}
        <div className="flex flex-1 flex-col gap-4">
          {/* Car summary card */}
          <Card className="flex flex-col gap-2 rounded-2xl p-4">
            <h2 className="text-base font-semibold text-gray-900">
              {fullTitle}
            </h2>
            <p className="text-[13px] text-gray-600">
              {car.year ?? "—"} &bull;{" "}
              {car.mileage != null
                ? `${car.mileage.toLocaleString("pt-BR")} km`
                : "— km"}{" "}
              &bull; {car.transmission ?? "—"} &bull; {car.fuel ?? "—"}
            </p>
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-bold text-blue-600">
                {formatPrice(car.Price)}
              </span>
              <span className="text-xs text-gray-500">
                Confira as condições de pagamento
              </span>
            </div>
          </Card>

          {/* Tabs */}
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("financiamento")}
              className={clsx(
                "rounded-full px-4 py-2 text-[13px] font-semibold transition-colors",
                activeTab === "financiamento"
                  ? "bg-blue-600 text-white"
                  : "border border-purple-200 bg-purple-50 text-purple-900"
              )}
            >
              Financiamento
            </button>
            <button
              onClick={() => setActiveTab("consorcio")}
              className={clsx(
                "rounded-full px-4 py-2 text-[13px] font-medium transition-colors",
                activeTab === "consorcio"
                  ? "bg-blue-600 text-white"
                  : "border border-purple-200 bg-purple-50 text-purple-900"
              )}
            >
              Consórcio
            </button>
          </div>

          {/* Form card */}
          <Card className="flex flex-col gap-3.5 rounded-2xl p-4">
            <div className="flex gap-3">
              <div className="flex-1">
                <Input
                  label="Entrada (opcional)"
                  value={`R$ ${entry.toLocaleString("pt-BR")}`}
                  onChange={(e) => {
                    const num = parseInt(e.target.value.replace(/\D/g, ""), 10);
                    if (!isNaN(num)) setEntry(num);
                  }}
                />
              </div>
              <div className="flex-1">
                <Input
                  label="Prazo (meses)"
                  value={String(term)}
                  onChange={(e) => {
                    const num = parseInt(e.target.value, 10);
                    if (!isNaN(num)) setTerm(num);
                  }}
                />
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-1">
                <Input
                  label="Renda mensal aproximada"
                  value={`R$ ${income.toLocaleString("pt-BR")}`}
                  onChange={(e) => {
                    const num = parseInt(e.target.value.replace(/\D/g, ""), 10);
                    if (!isNaN(num)) setIncome(num);
                  }}
                />
              </div>
              <div className="flex-1">
                <Input
                  label="Comprometimento máximo da renda"
                  value={`${maxPercent}%`}
                  onChange={(e) => {
                    const num = parseInt(e.target.value.replace(/\D/g, ""), 10);
                    if (!isNaN(num) && num <= 100) setMaxPercent(num);
                  }}
                />
              </div>
            </div>
            <p className="text-[11px] text-gray-500">
              Esses valores são apenas para simulação. A aprovação depende da
              análise dos bancos parceiros.
            </p>
          </Card>
        </div>

        {/* Right column */}
        <div className="flex w-[360px] shrink-0 flex-col gap-4">
          <Card
            key={flashKey}
            className={clsx(
              "flex flex-col gap-2.5 rounded-2xl p-[18px] transition-shadow",
              flashKey > 0 && "animate-highlight-flash"
            )}
            shadow="lg"
          >
            <span className="text-xs font-semibold text-blue-600">
              Simulação de financiamento
            </span>
            <span className="text-[22px] font-bold text-gray-900">
              {formatPrice(simulation.monthly)}/mês
            </span>
            <span className="text-xs text-gray-600">
              em {term}x &bull; Entrada de {formatPrice(entry)}
            </span>
            <span
              className={clsx(
                "text-xs",
                simulation.withinLimit ? "text-green-600" : "text-red-500"
              )}
            >
              {simulation.withinLimit
                ? "Fica dentro do limite de 30% da sua renda estimada."
                : "Ultrapassa o limite de 30% da sua renda estimada."}
            </span>
          </Card>

          <Card className="flex flex-col gap-2 rounded-2xl border border-purple-200 bg-purple-100 p-4">
            <span className="text-xs font-semibold text-purple-900">
              Integração com instituições financeiras
            </span>
            <p className="text-[12px] leading-relaxed text-gray-800">
              Chamar API de instituições financeiras que façam sentido para
              integração em uma implementação futura.
            </p>
            <p className="text-[11px] text-gray-600">
              Em uma versão real do sistema, esta área será conectada a APIs
              oficiais de bancos e financeiras para trazer ofertas, prazos e
              condições reais de financiamento e consórcio.
            </p>
          </Card>

          <div className="flex">
            <Button className="gap-2 w-full" fullWidth>
              <Send size={16} />
              Avançar para falar com a loja
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
