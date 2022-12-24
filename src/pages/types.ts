export interface Datum {
  id: number;
  brand: string;
}
export interface iModels {
  fipe_code: string;
  model: string;
  years: string;
}
export interface iInfo {
  brand: string;
  model: string;
  reference: string;
  years: Year[];
}

export interface Year {
  year_id: string;
  model_year: string;
  fuel: Fuel;
  price: number;
}

export enum Fuel {
  Gasolina = "Gasolina",
}
