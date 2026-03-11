import { type ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export function Chip({
  active = false,
  className,
  children,
  ...props
}: ChipProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors",
        active
          ? "bg-blue-600 text-white"
          : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
