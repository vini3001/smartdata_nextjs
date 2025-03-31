export class MaskHelper {
  static formatCnpj(cnpj: string): string {
    if (cnpj.length !== 14) {
      throw new Error("O CNPJ deve conter 14 dígitos.");
    }

    const cnpjFormatado = `${cnpj.substring(0, 2)}.${cnpj.substring(
      2,
      5
    )}.${cnpj.substring(5, 8)}/${cnpj.substring(8, 12)}-${cnpj.substring(12)}`;
    return cnpjFormatado;
  }
}
