import { BaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { Evaluation } from '../../evaluation/entities/evaluation.entity';
import { Field } from '../../field/entities/field.entity';

@Entity()
export class TestBatteries extends BaseEntity {
    @Column()
    name: string;

    @ManyToMany(() => Evaluation, evaluation => evaluation.testBatteries)
    evaluations: Evaluation[];

    @ManyToMany(() => Field, field => field.testBatteries)
    @JoinTable()
    fields: Field[];
}