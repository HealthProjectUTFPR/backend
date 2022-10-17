import { BaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity } from 'typeorm';

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

}
