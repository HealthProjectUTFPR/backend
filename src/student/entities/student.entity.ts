import { BaseEntity } from 'src/common/entities/base.entity';
import { TodoItem } from 'src/modules/domain/todo-item/entities/todo-item.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Student extends BaseEntity {
  @Column()
  name: string;

  @Column()
  sex: string;

  @Column()
  breed: string;

  @Column()
  stature: string;

  @Column()
  contact: string;

  @Column()
  healthPlan: string;

  @Column()
  emergencyContact: string;

  @Column()
  address: string;

  @OneToMany(() => TodoItem, (todoItem) => todoItem.createdBy)
  todoItems: TodoItem[];
}
