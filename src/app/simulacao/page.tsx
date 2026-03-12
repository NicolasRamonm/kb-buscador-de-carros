import { Suspense } from "react";
import { PaymentSimulationFeature } from "@/components/features/payment-simulation/PaymentSimulationFeature";

export default function SimulacaoPage() {
  return (
    <Suspense>
      <PaymentSimulationFeature />
    </Suspense>
  );
}
