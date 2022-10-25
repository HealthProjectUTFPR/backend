import { DataType } from 'src/modules/domain/evaluations/entities/field.entity';

export const parseType = (type: DataType, value: any) => {
  switch (type) {
    case DataType.Dt_int:
      return parseInt(value);

    case DataType.Dt_string:
      return String(value);

    case DataType.Dt_float:
      return parseFloat(value);

    case DataType.Dt_boolean:
      return Boolean(value);

    case DataType.Dt_date:
      return new Date(value);

    default:
      return value;
  }
};
