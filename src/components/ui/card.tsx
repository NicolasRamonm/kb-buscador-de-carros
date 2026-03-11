import { type HTMLAttributes } from "react";
import clsx from "clsx";

type Shadow = "sm" | "md" | "lg";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  shadow?: Shadow;
}

const shadowStyles: Record<Shadow, string> = {
  sm: "shadow-[0_2px_8px_rgba(0,0,0,0.05)]",
  md: "shadow-[0_4px_12px_rgba(0,0,0,0.06)]",
  lg: "shadow-[0_8px_20px_rgba(0,0,0,0.08)]",
};

export function Card({
  shadow = "sm",
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl bg-white",
        shadowStyles[shadow],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
