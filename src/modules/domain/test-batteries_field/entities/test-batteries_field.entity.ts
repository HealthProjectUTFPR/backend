import { BaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class TestBatteriesField extends BaseEntity {
    @Column()
    value: string;
}