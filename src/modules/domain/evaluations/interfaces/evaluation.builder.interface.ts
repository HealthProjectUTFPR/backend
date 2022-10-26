import { TestBatteries } from '../entities/test-batteries.entity';

export interface IField {
  value: number | string | boolean | Date;
}

export interface IEvaluationBuilder {
  produceFields(fields: IField[]): void;
  produceBatteryTests(batteryTests: TestBatteries[]): void;
  produceEvaluation(name: string, result: string): void;
}
