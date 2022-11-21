import { BaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';
import { Evaluation } from '../../evaluations/entities/evaluation.entity';
import { Exclude } from 'class-transformer';

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

  @Column({ type: 'real' })
  stature: number;

  @Column({ type: 'real' })
  weight: number;

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
  note: string;

  @Column()
  flag: boolean;

  @ManyToOne(() => User, (user) => user.students)
  user: User;

  @OneToMany(() => Evaluation, (evaluation) => evaluation.student)
  @JoinColumn()
  @Exclude()
  evaluations: Evaluation[];
}
