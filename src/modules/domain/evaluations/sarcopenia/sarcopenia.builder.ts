import { parseType } from 'src/common/utils/parse-type.util';
import { Field } from '../../field/entities/field.entity';
import { ISarcopenia } from './entities/sarcopenia.entity';
import { ISarcopeniaBuilder } from './interfaces/sarcopenia.builder.interface';

export class SarcopeniaBuilder implements ISarcopeniaBuilder {
  private sarcopenia: ISarcopenia;

  constructor() {
    this.sarcopenia = <ISarcopenia>{};
  }

  produceEvaluation(name: string, result: boolean): void {
    this.sarcopenia.name = name;
    this.sarcopenia.result = result;
  }

  produceFields(fields: Field[]): void {
    const typedFields = fields.map((field) => ({
      ...field,
      value: parseType(field.dataType, field.value),
    }));

    this.sarcopenia.fields = typedFields;
  }
}
