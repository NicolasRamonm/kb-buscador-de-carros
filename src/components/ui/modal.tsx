"use client";

import { type ReactNode, useEffect } from "react";
import { X } from "lucide-react";
import clsx from "clsx";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ open, onClose, children }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className={clsx(
        "fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      )}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[520px] rounded-[20px] bg-white p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex justify-end">
          <button
            onClick={onClose}
            className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200"
          >
            <X size={14} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
