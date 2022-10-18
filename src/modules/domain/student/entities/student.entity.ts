import { BaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';
import { PrePos } from '../../pre-pos/entities/pre-pos.entity';
import { PrePosModule } from '../../pre-pos/pre-pos.module';
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

  @Column()
  flag: boolean;

  @ManyToOne(() => User, (user) => user.students)
  user: User;

  @OneToMany(() => PrePos, (prepos) => prepos.student)
  prepos: PrePos[];
}
