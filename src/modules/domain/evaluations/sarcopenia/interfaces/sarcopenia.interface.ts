export interface ISarcopenia {
  sex: string;

  age: number;

  weight: number;

  race: string;

  height: number;

  measuredMuscleMass?: number;

  walkingSpeed: number;

  handGripStrength: number;

  calfCircumference: number;

  muscleMassIndex: number;

  result: string;
}

export interface ISarcopeniaResult {
  title: string;

  description: string;

  type: string;

  hasSarcopenia: boolean;
}
