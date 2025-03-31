export class NumberHelper {
  static toMoney(value: number): string {
    return new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    }).format(value);
  }
}
