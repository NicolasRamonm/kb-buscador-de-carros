import { Suspense } from "react";
import { PaymentSimulationFeature } from "@/components/features/payment-simulation/PaymentSimulationFeature";
import { PageSkeleton } from "@/components/ui/page-skeleton";

export default function SimulacaoPage() {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <PaymentSimulationFeature />
    </Suspense>
  );
}
