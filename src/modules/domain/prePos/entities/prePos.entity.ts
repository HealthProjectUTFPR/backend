import { BaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class PrePos extends BaseEntity {
  @Column()
  date: Date;

  @Column({nullable:true})
  horarioPos: Date;

  @Column({nullable:true})
  horarioPre: Date;
 
  @Column({nullable:true})
  pasPre: number;
 
  @Column({nullable:true})
  pasPos: number;

  @Column({nullable:true})
  padPre: number;
 
  @Column({nullable:true})
  padPos: number;

  @Column({nullable:true})
  glicemiaPre: number;
 
  @Column({nullable:true})
  glicemiaPos: number;

  @Column({nullable:true})
  horarioTreino: number;

  @Column({nullable:true})
  pseEPre: number;

  @Column({nullable:true})
  pseEPos: number;

  @Column({nullable:true})
  observacao: string;

}
