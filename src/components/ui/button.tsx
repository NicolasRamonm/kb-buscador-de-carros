import { type ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50",
  ghost: "text-blue-600 hover:bg-blue-50",
  outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-3.5 py-1.5 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  fullWidth,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
