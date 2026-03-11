import Link from "next/link";
import { Heart, MessageSquare } from "lucide-react";

export function AppTopBar() {
  return (
    <header className="flex h-14 items-center justify-between border-b border-gray-200 bg-white px-16">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-2xl bg-blue-600" />
      </div>

      <nav className="flex items-center gap-7">
        <Link
          href="/"
          className="text-sm font-medium text-gray-700 hover:text-gray-900"
        >
          Comprar
        </Link>
        <Link
          href="/"
          className="text-sm font-semibold text-blue-600"
        >
          Procure com IA
        </Link>
        <Link
          href="/resultados"
          className="text-sm font-medium text-gray-700 hover:text-gray-900"
        >
          Todos os carros
        </Link>
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
