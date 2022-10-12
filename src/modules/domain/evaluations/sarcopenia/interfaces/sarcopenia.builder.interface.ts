import { Field } from 'src/modules/domain/field/entities/field.entity';

export interface ISarcopeniaBuilder {
  produceFields(fields: Field[]): void;

  produceEvaluation(name: string, result: boolean): void;
}
