export type Material = {
  name: string;
  alphaDbPerMeter: number | null;
  model: "homogeneous" | "shielding";
  reference: string;
  conditions: string;
};

export const materials: Material[] = [
  { name: "Concreto reforzado", alphaDbPerMeter: null, model: "homogeneous", reference: "Pendiente de fuente técnica verificable", conditions: "No especificadas" },
  { name: "Ladrillo", alphaDbPerMeter: null, model: "homogeneous", reference: "Pendiente de fuente técnica verificable", conditions: "No especificadas" },
  { name: "Malla de acero", alphaDbPerMeter: null, model: "shielding", reference: "Requiere datos de pérdida de inserción/blindaje", conditions: "Depende de abertura, orientación y frecuencia" },
];
