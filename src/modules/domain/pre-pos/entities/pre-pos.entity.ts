import { Exclude } from 'class-transformer';
import { BaseEntity } from 'src/common/entities/base.entity';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from '../../category/entities/category.entity';

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
  pasPro: number;

  @Column()
  padPre: number;
 
  @Column()
  padPro: number;

  @Column()
  glicemiaPre: number;
 
  @Column()
  glicemiaPro: number;

  @Column()
  horarioTreino: number;

  @Column()
  pseE: number;

  @Column()
  observacao: string;

}
