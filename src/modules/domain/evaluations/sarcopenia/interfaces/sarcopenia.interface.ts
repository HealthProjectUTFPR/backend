export interface ISarcopenia {
  sex: string;

  age: number;

  weight: number;

  race: string;

  height: number;

  measuredMuscleMass: number;

  walkingSpeed: number;

  handGripStrength: number;

  muscleMassIndex: number;

  calfCircumference: number;
}

export interface ISarcopeniaResult {
  title: string;

  description: string;

  type: string;

  hasSarcopenia: boolean;
}
