export type Operador = "+" | "−" | "×" | "÷";

export type EstatCalculadora = {
  pantalla: string;
  anterior: number | null;
  operador: Operador | null;
  novaEntrada: boolean;
};
