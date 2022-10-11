import { Field } from 'src/modules/domain/field/entities/field.entity';
import { TestBatteries } from 'src/modules/domain/test-batteries/entities/test-batteries.entity';
import { Sarcopenia } from '../../sarcopenia/entities/sarcopenia.entity';

export interface EvaluationBuilder {
  produceFields(fields: Field[]): void;
  produceBatteryTests(batteryTests: TestBatteries): void;
  produceEvaluation(sarcopeniaEvaluation: Sarcopenia): void;
}
