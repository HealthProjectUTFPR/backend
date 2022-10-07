import { BaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity, ManyToMany } from 'typeorm';
import { Evaluation } from '../../evaluation/entities/evaluation.entity';
import { TestBatteries } from '../../test-batteries/entities/test-batteries.entity';

export enum DataType {
    dt_int     = 'int',
    dt_string  = 'string',
    dt_float   = 'float',
    dt_boolean = 'boolean',
    dt_date    = 'date',
}

@Entity()
export class Field extends BaseEntity {
    @Column()
    name: string;

    @Column()
    value: string;

    @Column({
        type: 'enum',
        enum: DataType,
        default: DataType.dt_string,
    })
    role: DataType;

    @ManyToMany(() => Evaluation, evaluation => evaluation.fields)
    evaluations: Evaluation[];

    @ManyToMany(() => TestBatteries, testBatteries => testBatteries.fields)
    testBatteries: TestBatteries[];
}