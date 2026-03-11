"use client";

import Link from "next/link";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

interface FinanceModalProps {
  open: boolean;
  onClose: () => void;
  carId: number;
}

export function FinanceModal({ open, onClose, carId }: FinanceModalProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex flex-col gap-4">
        <span className="text-xs font-semibold text-blue-600">
          Veja alternativas para caber no bolso
        </span>
        <h2 className="text-xl font-bold text-gray-900">
          Passou do seu orçamento?
        </h2>

        <div className="flex flex-col gap-2.5">
          {/* Financing option */}
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-3">
            <p className="text-sm font-semibold text-blue-700">
              Simular financiamento automático
            </p>
            <p className="text-xs text-gray-800">
              Parcelas flexíveis em bancos parceiros.
            </p>
          </div>

          {/* Consortium option */}
          <div className="rounded-xl border border-purple-200 bg-purple-50 p-3">
            <p className="text-sm font-semibold text-purple-900">
              Ver opções de consórcio
            </p>
            <p className="text-xs text-gray-800">
              Consórcio sem juros, com carta de crédito.
            </p>
          </div>
        </div>

        <div className="flex justify-end">
          <Link href={`/simulacao?id=${carId}`}>
            <Button>Simular agora</Button>
          </Link>
        </div>
      </div>
    </Modal>
  );
}
