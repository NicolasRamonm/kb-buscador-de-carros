import { type InputHTMLAttributes } from "react";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, className, id, ...props }: InputProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={inputId}
          className="text-xs font-normal text-gray-600"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={clsx(
          "rounded-[10px] border border-gray-200 bg-gray-50 px-3 py-2 text-[13px] text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400",
          className
        )}
        {...props}
      />
    </div>
  );
}
