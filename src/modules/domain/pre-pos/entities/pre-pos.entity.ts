import { Exclude } from 'class-transformer';
import { BaseEntity } from 'src/common/entities/base.entity';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne} from 'typeorm';
import { Student } from '../../student/entities/student.entity';

@Entity()
export class PrePos extends BaseEntity {
  @Column()
  date: Date;

  @Column()
  horarioPos: Date;

  @Column()
  horarioPre: Date;
 
  @Column()
  pasPre: number;
 
  @Column()
  pasPos: number;

  @Column()
  padPre: number;
 
  @Column()
  padPos: number;

  @Column()
  glicemiaPre: number;
 
  @Column()
  glicemiaPos: number;

  @Column()
  horarioTreino: number;

  @Column()
  pseEPre: number;

  @Column()
  pseEPos: number;

  @Column()
  observacao: string;

  // @ManyToOne(() => User, (user) => user.prepos)
  @JoinColumn()
  @Exclude()
  createdBy: User;
  
  @ManyToOne(() => Student, (student) => student.prepos)
  @JoinColumn()
  student: Student;

}
