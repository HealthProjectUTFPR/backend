import { BaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Student extends BaseEntity {
  @Column()
  name: string;

  @Column()
  sex: string;

  @Column()
  breed: string;

  @Column()
  stature: number;

  @Column()
  contact: string;

  @Column()
  healthPlan: string;

  @Column()
  emergencyContact: string;

  @Column()
  address: string;
}
