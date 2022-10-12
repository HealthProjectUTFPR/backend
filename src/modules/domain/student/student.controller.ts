import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
// import { JwtAuthGuard } from 'src/modules/infrastructure/auth/auth.guard';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('student')
// @UseGuards(JwtAuthGuard)
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post('create')
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.create(createStudentDto);
  }

  // @Get('get')
  // findAll() {
  //   return this.prePosService.findAll();
  // }

  // @Get('get/:id')
  // findOne(@Param('id') id: string) {
  //   return this.prePosService.findOne(id);
  // }

  // @Patch('update/:id')
  // update(@Param('id') id: string, @Body() updatePrePosDto: UpdatePrePosDto) {
  //   return this.prePosService.update(id, updatePrePosDto);
  // }

  // @Delete('delete/:id')
  // remove(@Param('id') id: string) {
  //   return this.prePosService.remove(id);
  // }
}
