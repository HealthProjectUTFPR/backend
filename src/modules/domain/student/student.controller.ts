import {
  Body,
  Controller,
  // Delete,
  // Get,
  Param,
  Patch,
  Post,
  UseGuards,
  ForbiddenException
} from '@nestjs/common';
import { JoiPipe } from 'nestjs-joi';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { JwtAuthGuard } from 'src/modules/infrastructure/auth/auth.guard';
import { User } from '../../infrastructure/user/entities/user.entity';
import { AuthUser } from 'src/common/decorators/auth-user.decorator';
import { Student } from './entities/student.entity';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('student')
@UseGuards(JwtAuthGuard)
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post('create')
  async create(
    @AuthUser() user: User,
    @Body(new JoiPipe({ group: 'CREATE' }))
    createStudentDto: CreateStudentDto,
  ): Promise<Student> {
    if (!user) throw new ForbiddenException('User not logged in');

    return this.studentService.create(createStudentDto, user);
  }

  @Patch('delete/:id')
  async update(
    @AuthUser() user: User,
    @Param('id') id: string,
    @Body(new JoiPipe({ group: 'UPDATE' }))
    updateStudentDto: UpdateStudentDto,
  ): Promise<Student> {
    return await this.studentService.update(id, updateStudentDto, user);
  }
}
