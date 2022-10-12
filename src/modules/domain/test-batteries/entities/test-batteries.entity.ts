import { BaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Evaluation } from '../../evaluations/base/entities/evaluation.entity';
import { Field } from '../../field/entities/field.entity';

@Entity()
export class TestBatteries extends BaseEntity {
  @Column()
  name: string;

  @OneToMany(() => Field, (field) => field.testBatteriesField)
  fields: Field[];

  @ManyToOne(() => Evaluation, (evaluation) => evaluation.testBatteries)
  evaluations: Evaluation;
}
