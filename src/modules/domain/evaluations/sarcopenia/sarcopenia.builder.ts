import { parseType } from 'src/common/utils/parse-type.util';
import { Field } from '../../field/entities/field.entity';
import { TestBatteries } from '../../test-batteries/entities/test-batteries.entity';
import { EvaluationBuilder } from '../base/interfaces/evaluation.builder.interface';
import { Sarcopenia } from './entities/sarcopenia.entity';

export class SarcopeniaBuilder implements EvaluationBuilder {
  private sarcopenia: Sarcopenia;

  constructor() {
    this.sarcopenia = new Sarcopenia();
  }
  produceBatteryTests(batteryTests: TestBatteries): void {
    throw new Error('Method not implemented.');
  }
  produceEvaluation(sarcopeniaEvaluation: Sarcopenia): void {
    throw new Error('Method not implemented.');
  }

  produceFields(fields: Field[]): void {
    this.sarcopenia.fields = fields.map((field) => ({
      ...field,
      value: parseType(field.dataType, field.value),
    }));
  }

  produceBatteryTests(batteryTests: TestBatteries): void {
    this.sarcopenia.batteryTests = batteryTests;
  }

  produceEvaluation(sarcopeniaEvaluation: Sarcopenia): void {}
}
