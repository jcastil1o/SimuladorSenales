export const SPEED_OF_LIGHT = 299_792_458;

export function wavelength(frequencyMHz: number): number {
  if (frequencyMHz <= 0) throw new Error("La frecuencia debe ser mayor que cero");
  return SPEED_OF_LIGHT / (frequencyMHz * 1_000_000);
}

export function fspl(distanceKm: number, frequencyMHz: number): number {
  if (distanceKm <= 0) throw new Error("La distancia debe ser mayor que cero");
  if (frequencyMHz <= 0) throw new Error("La frecuencia debe ser mayor que cero");
  return 32.44 + 20 * Math.log10(distanceKm) + 20 * Math.log10(frequencyMHz);
}

export function homogeneousMaterialLoss(alphaDbPerMeter: number | null, thicknessM: number): number {
  if (alphaDbPerMeter === null || alphaDbPerMeter < 0 || thicknessM < 0) return 0;
  return alphaDbPerMeter * thicknessM;
}

export function receivedPower(input: { ptDbm: number; gtDbi?: number; grDbi?: number; fsplDb: number; materialLossDb?: number; additionalLossDb?: number }): number {
  return input.ptDbm + (input.gtDbi ?? 0) + (input.grDbi ?? 0) - input.fsplDb - (input.materialLossDb ?? 0) - (input.additionalLossDb ?? 0);
}
