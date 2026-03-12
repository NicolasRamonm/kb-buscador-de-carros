import { Suspense } from "react";
import { CarResultsFeature } from "@/components/features/car-results/CarResultsFeature";

export default function ResultadosPage() {
  return (
    <Suspense>
      <CarResultsFeature />
    </Suspense>
  );
}
