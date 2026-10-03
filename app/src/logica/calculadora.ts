export type Operador = "+" | "−" | "×" | "÷";

export type EstatCalculadora = {
  pantalla: string;
  anterior: number | null;
  operador: Operador | null;
  novaEntrada: boolean;
};

export const estatInicial: EstatCalculadora = {
  pantalla: "0",
  anterior: null,
  operador: null,
  novaEntrada: false,
};

export function aplicaTecla(
  estat: EstatCalculadora,
  tecla: string,
): EstatCalculadora {
  if (tecla === "AC") return { ...estatInicial };
  if (/^[0-9]$/.test(tecla)) {
    const base = estat.novaEntrada ? "0" : estat.pantalla;
    if (base.replace(/[^0-9]/g, "").length >= 12) return estat;
    return {
      ...estat,
      pantalla: base === "0" ? tecla : base + tecla,
      novaEntrada: false,
    };
  }
  return estat;
}
