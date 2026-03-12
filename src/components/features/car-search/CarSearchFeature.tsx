"use client";

import { useRouter } from "next/navigation";
import { HeroSearchIA } from "@/components/blocks/HeroSearchIA";
import { BrandsRow } from "@/components/blocks/BrandsRow";
import { CarGrid } from "@/components/blocks/CarGrid";
import { getCatalogCars } from "@/lib/cars";

export function CarSearchFeature() {
  const router = useRouter();
  const cars = getCatalogCars();

  const handleSearch = (query: string, userState?: string, useAI: boolean = true) => {
    const params = new URLSearchParams({ q: query });
    if (userState) params.set("state", userState);
    if (!useAI) params.set("mode", "simple");
    router.push(`/resultados?${params.toString()}`);
  };

  const handleSeeAll = () => {
    router.push("/resultados");
  };

  const handleBrandSelect = (brand: string) => {
    router.push(`/resultados?brand=${encodeURIComponent(brand)}`);
  };

  return (
    <div className="flex flex-col">
      {/* Hero section */}
      <section className="flex items-center justify-center bg-background px-12 py-12">
        <HeroSearchIA onSearch={handleSearch} />
      </section>

      {/* Brands section */}
      <section className="bg-background px-12 py-10">
        <BrandsRow onSelect={handleBrandSelect} />
      </section>

      {/* Cars grid section */}
      <section className="bg-background px-12 py-10 pb-12">
        <CarGrid cars={cars} onSeeAll={handleSeeAll} />
      </section>
    </div>
  );
}
