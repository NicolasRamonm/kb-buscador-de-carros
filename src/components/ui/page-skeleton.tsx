import { Card } from "@/components/ui/card";

export function PageSkeleton() {
  return (
    <div className="flex flex-col gap-6 px-[72px] pb-10 pt-6 animate-pulse">
      <div className="h-4 w-48 rounded bg-gray-200" />
      <div className="flex gap-6">
        <div className="w-[260px] shrink-0">
          <div className="flex flex-col gap-4">
            <div className="h-4 w-20 rounded bg-gray-200" />
            <div className="h-24 rounded-xl bg-gray-100" />
            <div className="h-16 rounded-xl bg-gray-100" />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <Card key={i} className="flex gap-4 p-3" shadow="sm">
              <div className="h-[140px] w-[220px] shrink-0 rounded-xl bg-gray-200" />
              <div className="flex flex-1 flex-col gap-3 py-1">
                <div className="h-4 w-3/5 rounded bg-gray-200" />
                <div className="h-3 w-2/5 rounded bg-gray-100" />
                <div className="mt-auto flex items-center justify-between">
                  <div className="h-4 w-24 rounded bg-gray-200" />
                  <div className="h-8 w-24 rounded-full bg-gray-200" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
