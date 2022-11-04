import { Field } from './entities/field.entity';
import { TestBatteries } from './entities/test-batteries.entity';
import { Evaluation } from './entities/evaluation.entity';
import { IEvaluationBuilder } from './interfaces/evaluation.builder.interface';

export class EvaluationBuilder implements IEvaluationBuilder {
  private evaluation: Evaluation;

  constructor() {
    this.evaluation = new Evaluation();
  }

  produceFields(fields: Field[]): void {
    const strinfyedFields: Field[] = fields.map(
      (field) =>
        ({
          ...field,
          value: field.value as string,
        } as Field),
    );

    this.evaluation.fields = strinfyedFields;
  }

  produceBatteryTests(testBatteries: TestBatteries[]): void {
    testBatteries.forEach((test) =>
      test.fields.map(
        (field) =>
          ({
            ...field,
            value: field.value as string,
          } as Field),
      ),
    );

    this.evaluation.testBatteries = testBatteries;
  }

  produceEvaluation(name: string, result: any): void {
    this.evaluation.name = name;
    this.evaluation.result = result as string;
  }
}
