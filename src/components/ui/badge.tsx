import { type HTMLAttributes } from "react";
import clsx from "clsx";

type Variant = "success" | "info" | "purple" | "special";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: Variant;
}

const variantStyles: Record<Variant, string> = {
  success: "bg-green-100 text-green-800",
  info: "bg-indigo-50 text-blue-700",
  purple: "bg-purple-50 text-purple-900",
  special: "bg-amber-100 text-amber-800",
};

export function Badge({
  variant = "info",
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
