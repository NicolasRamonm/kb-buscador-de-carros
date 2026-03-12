import { Suspense } from "react";
import { CarResultsFeature } from "@/components/features/car-results/CarResultsFeature";
import { PageSkeleton } from "@/components/ui/page-skeleton";

export default function ResultadosPage() {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <CarResultsFeature />
    </Suspense>
  );
}
