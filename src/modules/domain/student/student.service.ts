import { Injectable, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { User } from '../../infrastructure/user/entities/user.entity';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {
  @InjectRepository(Student)
  private readonly studentRepository: Repository<Student>;

  async create(
    createStudentDto: CreateStudentDto,
    user: User,
  ): Promise<Student> {
    const student = this.studentRepository.create({
      ...createStudentDto,
      user: user,
    });

    return await this.studentRepository.save(student);
  }

  async findOne(id: string) {
    return await this.studentRepository.findOneBy({ id });
  }

  async delete(
    id: string,
    updateStudentDto: UpdateStudentDto,
    user: User,
  ): Promise<Student> {
    let student = await this.studentRepository.findOne({
      where: { id: id },
    });
    if (!user) throw new ForbiddenException('Usuário não logado');
    student = await this.studentRepository.findOneBy({ id: id });
    updateStudentDto.flag = false;
    student.flag = updateStudentDto.flag;

    return await this.studentRepository.save(student);
  }

  async update(
    id: string,
    updateStudentDto: UpdateStudentDto,
  ): Promise<Student> {
    let student = await this.studentRepository.findOne({
      where: { id: id },
    });
    student = await this.studentRepository.findOneBy({ id: id });
    const {name, breed, stature, contact, healthPlan, emergencyContact, address, birthDate, flag} = updateStudentDto;

    student.name = name? name : student.name;
    student.breed = breed? breed : student.breed;
    student.stature = stature? stature : student.stature;
    student.contact = contact? contact : student.contact;
    student.healthPlan = healthPlan? healthPlan : student.healthPlan;
    student.emergencyContact = emergencyContact? emergencyContact : student.emergencyContact;
    student.address = address? address : student.address;
    student.birthDate = birthDate? birthDate : student.birthDate;
    student.flag = flag? flag : student.flag;

    return await this.studentRepository.save(student);
  }

  async findAll(
    id: string,
  ): Promise<Student[]> {
    let student = await this.studentRepository.find({
      relations: {
        user: true
      },
      where: {
        user: {
          id: id
        }
      },
    });
    return student;
  }
}
