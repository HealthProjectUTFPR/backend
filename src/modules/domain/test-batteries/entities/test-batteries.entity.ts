import { BaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity, ManyToMany, OneToMany } from 'typeorm';
import { Evaluation } from '../../evaluation/entities/evaluation.entity';
import { Field } from '../../field/entities/field.entity';

@Entity()
export class TestBatteries extends BaseEntity {
    @Column()
    name: string;

    @OneToMany(() => Field, field => field.testBatteriesField)
    fields: Field[];

    @ManyToMany(() => Evaluation, evaluation => evaluation.testBatteries)
    evaluations: Evaluation[];
}