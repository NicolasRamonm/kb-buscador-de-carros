"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, MessageSquare } from "lucide-react";
import clsx from "clsx";

const NAV_LINKS = [
  { href: "/", label: "Procure com IA", match: (p: string) => p === "/" },
  {
    href: "/resultados",
    label: "Todos os carros",
    match: (p: string) => p.startsWith("/resultados"),
  },
] as const;

export function AppTopBar() {
  const pathname = usePathname();

  return (
    <header className="flex h-14 items-center justify-between border-b border-gray-200 bg-white px-16">
      <div className="flex items-center gap-2">
        <Link href="/">
          <div className="h-8 w-8 rounded-2xl bg-blue-600" />
        </Link>
      </div>

      <nav className="flex items-center gap-7">
        {NAV_LINKS.map(({ href, label, match }) => {
          const isActive = match(pathname);
          return (
            <Link
              key={label}
              href={href}
              className={clsx(
                "text-sm transition-colors",
                isActive
                  ? "font-semibold text-blue-600"
                  : "font-medium text-gray-700 hover:text-gray-900"
              )}
            >
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="flex items-center gap-5">
        <button className="text-gray-500 hover:text-gray-700">
          <Heart size={22} />
        </button>
        <button className="text-gray-500 hover:text-gray-700">
          <MessageSquare size={22} />
        </button>
      </div>
    </header>
  );
}
