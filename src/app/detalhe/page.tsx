import { Suspense } from "react";
import { CarDetailFeature } from "@/components/features/car-detail/CarDetailFeature";
import { PageSkeleton } from "@/components/ui/page-skeleton";

export default function DetalhePage() {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <CarDetailFeature />
    </Suspense>
  );
}
