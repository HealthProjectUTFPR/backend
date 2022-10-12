import { BaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';

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

  @ManyToOne(() => User, (user) => user.students)
  user: User;
}
