import { BaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity, ManyToMany } from 'typeorm';
import { Category } from '../../category/entities/category.entity';
import { Evaluation } from '../../evaluation/entities/evaluation.entity';
import { TestBatteries } from '../../test-batteries/entities/test-batteries.entity';

export enum DataType {
    Dt_int     = "int",
    Dt_string  = "string",
    Dt_float   = "float",
    Dt_boolean = "boolean",
    Dt_date    = "date",
}

@Entity()
export class Field extends BaseEntity {
    @Column()
    name: string;

    @Column({default: ""})
    value: string;

    @Column({
        type: "enum",
        enum: DataType,
        default: DataType.Dt_string
    })
    dataType: DataType;

    @ManyToMany(() => Evaluation, evaluation => evaluation.fields)
    evaluations: Evaluation[];

    @ManyToMany(() => TestBatteries, testBatteries => testBatteries.fields)
    testBatteries: TestBatteries[];
}