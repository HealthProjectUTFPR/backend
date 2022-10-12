import { BaseEntity } from 'src/common/entities/base.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Field } from '../../field/entities/field.entity';
import { TestBatteries } from '../../test-batteries/entities/test-batteries.entity';

@Entity()
export class Evaluation extends BaseEntity {
  @Column()
  name: string;

  @Column()
  result: string;

  @OneToMany(() => Field, (field) => field.evaluationField)
  fields: Field[];

  @ManyToMany(() => TestBatteries, (testBatteries) => testBatteries.evaluations)
  @JoinTable()
  testBatteries: TestBatteries[];
}
