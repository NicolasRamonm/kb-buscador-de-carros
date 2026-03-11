export function formatPrice(value: number): string {
  return `R$ ${value.toLocaleString("pt-BR")}`;
}
