import { BaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToMany } from 'typeorm';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';
import { Evaluation } from '../../evaluations/entities/evaluation.entity';
import { Exclude } from 'class-transformer';
import { PrePos } from '../../pre-pos/entities/pre-pos.entity';
import { PrePosModule } from '../../pre-pos/pre-pos.module';
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

  @OneToMany(() => Evaluation, (evaluation) => evaluation.student)
  @JoinColumn()
  @Exclude()
  evaluations: Evaluation[];

  @OneToMany(() => PrePos, (prepos) => prepos.student)
  prepos: PrePos[];
}
