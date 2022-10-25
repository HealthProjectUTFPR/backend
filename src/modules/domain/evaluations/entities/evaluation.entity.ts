import { Exclude } from 'class-transformer';
import { BaseEntity } from 'src/common/entities/base.entity';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Field } from './field.entity';
import { TestBatteries } from './test-batteries.entity';

@Entity()
export class Evaluation extends BaseEntity {
  @Column()
  name: string;

  @Column()
  result: string;

  @OneToMany(() => Field, (field) => field.evaluation)
  fields?: Field[];

  @ManyToOne(() => User, (user) => user.evaluations)
  @JoinColumn()
  @Exclude()
  createdBy: User;

  @OneToMany(() => TestBatteries, (testBatteries) => testBatteries.evaluations)
  @JoinTable()
  testBatteries?: TestBatteries[];
}
