import Link from "next/link";
import { MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { formatPrice } from "@/lib/format";
import type { Car } from "@/types/car";

interface CarGridProps {
  cars: Car[];
  onSeeAll?: () => void;
}

export function CarGrid({ cars, onSeeAll }: CarGridProps) {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">
          Carros disponíveis
        </h2>
        {onSeeAll && (
          <button
            onClick={onSeeAll}
            className="text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            Ver todos &rarr;
          </button>
        )}
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {cars.map((car, index) => (
          <Link key={`${car.Name}-${car.Model}-${index}`} href={`/detalhe?id=${index}`}>
            <Card className="overflow-hidden transition-shadow hover:shadow-md">
              <div className="h-40 w-full bg-gradient-to-br from-gray-200 to-gray-300" />
              <div className="flex flex-col gap-1.5 px-4 pb-3.5 pt-3.5">
                <h3 className="text-[15px] font-semibold text-gray-900">
                  {car.Name} {car.Model}
                </h3>
                <p className="text-base font-bold text-blue-600">
                  {formatPrice(car.Price)}
                </p>
                <div className="flex items-center gap-1">
                  <MapPin size={14} className="text-gray-400" />
                  <span className="text-xs text-gray-500">{car.Location}</span>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
