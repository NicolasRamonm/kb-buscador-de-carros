import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface BackNavProps {
  href: string;
  label: string;
}

export function BackNav({ href, label }: BackNavProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-[13px] font-medium text-blue-600 hover:text-blue-700"
    >
      <ArrowLeft size={18} />
      {label}
    </Link>
  );
}
