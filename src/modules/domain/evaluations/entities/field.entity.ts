import { BaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Evaluation } from './evaluation.entity';
import { TestBatteries } from './test-batteries.entity';

export enum DataType {
  Dt_int = 'int',
  Dt_string = 'string',
  Dt_float = 'float',
  Dt_boolean = 'boolean',
  Dt_date = 'date',
}

@Entity()
export class Field extends BaseEntity {
  @Column()
  name: string;

  @Column({ default: '' })
  value: string;

  // @Column({
  //   type: 'enum',
  //   enum: DataType,
  //   default: DataType.Dt_string,
  // })
  // dataType: DataType;

  @ManyToOne(() => Evaluation, (evaluation) => evaluation.fields)
  evaluationField: Evaluation;

  @ManyToOne(() => TestBatteries, (testBatteries) => testBatteries.fields)
  testBatteriesField: TestBatteries;
}
