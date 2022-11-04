import { BaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';

@Entity()
export class Student extends BaseEntity {
  @Column()
  name: string;

  @Column({
    length: 1,
  })
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

  @Column()
  birthDate: Date;

  @Column()
  flag: boolean;

  @ManyToOne(() => User, (user) => user.students)
  user: User;
}
