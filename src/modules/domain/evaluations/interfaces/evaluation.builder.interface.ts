import { TestBatteries } from 'src/modules/domain/test-batteries/entities/test-batteries.entity';

export interface IField {
  value: number | string | boolean | Date;
}

export interface IEvaluationBuilder {
  produceFields(fields: IField[]): void;
  produceBatteryTests(batteryTests: TestBatteries[]): void;
  produceEvaluation(name: string, result: string): void;
}
