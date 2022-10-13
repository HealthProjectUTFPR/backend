import { BaseEntity } from 'src/common/entities/base.entity';
<<<<<<< Updated upstream
import { Column, Entity } from 'typeorm';
=======
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import * as moment from 'moment';

>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
=======

  @Column()
  pseEPro: number;
>>>>>>> Stashed changes

  @Column()
  pseEPro: number;
  
  @Column()
  observacao: string;

}
