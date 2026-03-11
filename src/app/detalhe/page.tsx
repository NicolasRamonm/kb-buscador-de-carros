import { Suspense } from "react";
import { CarDetailFeature } from "@/components/features/car-detail/CarDetailFeature";

export default function DetalhePage() {
  return (
    <Suspense>
      <CarDetailFeature />
    </Suspense>
  );
}
