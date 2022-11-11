import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import dayjs from 'dayjs';
import { PaginationParams } from 'src/common/interfaces/pagination.interface';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';
import { Repository } from 'typeorm';
import { Student } from '../../student/entities/student.entity';
import { Evaluation } from '../entities/evaluation.entity';
import { EvaluationOrderBy } from '../enums/order-by.enum';
import { CreateFragilityDTO } from './dto/create-fragility.dto';
import { FragilitySchema } from './dto/fragility.dto';
import { GetAllFragilityDTO } from './dto/get-all-fragility.dto';
import { GetFragilityDTO } from './dto/get-fragility.dto';
import { UpdateFragilityDTO } from './dto/update-fragility.dto';
import { FragilityFactory } from './fragility.factory';
import calculateActivityDifficultLastWeekFrequency from './helpers/activity-difficult-last-week-frequency';
import calculateIPAO from './helpers/calculate-ipao';
import calculateLooseWeight from './helpers/calculate-loose-weight';
import calculateWalkingTest from './helpers/calculate-walking-test';
import calculateHandgripStrength from './helpers/calculateHandgripStrength';
import { IFragility } from './interfaces/fragility.interface';

@Injectable()
export class FragilityStrategy {
  @InjectRepository(Evaluation)
  private readonly evaluationRepository: Repository<Evaluation>;

  constructor(private readonly fragilityFactory: FragilityFactory) {}

  private recalculateResult(input: Partial<IFragility>) {
    const {
      sex,
      activityDifficultLastWeekFrequency,
      KeepGoingDifficultLastWeekFrequency,
      walkingDays,
      walkingMinutesPerDay,
      moderateActivityDays,
      moderateActivityMinutesPerDay,
      vigorousActivityDays,
      vigorousActivityMinutesPerDay,
      weight,
      time,
      stature,
      handgripStrength,
      imc,
    } = input;

    const calculatedLooseWeight = calculateLooseWeight({ weight });
    const calculatedActivityDifficultLastWeekFrequency =
      calculateActivityDifficultLastWeekFrequency({
        activityDifficultLastWeekFrequency,
        KeepGoingDifficultLastWeekFrequency,
      });
    const calculatedHandgripStrength = calculateHandgripStrength({
      handgripStrength,
      imc,
      sex,
    });
    const calculatedWalkingTest = calculateWalkingTest({ time, stature, sex });

    const { mets1, mets2, mets3, metsTotal, kcal } = calculateIPAO({
      walkingDays,
      walkingMinutesPerDay,
      moderateActivityDays,
      moderateActivityMinutesPerDay,
      vigorousActivityDays,
      vigorousActivityMinutesPerDay,
      weight,
    });

    const result =
      calculatedLooseWeight +
      calculatedActivityDifficultLastWeekFrequency +
      calculatedHandgripStrength +
      calculatedWalkingTest;

    return { result, mets1, mets2, mets3, metsTotal, kcal };
  }

  private validateResult(input: Partial<IFragility>): boolean {
    const { result, mets1, mets2, mets3, metsTotal, kcal } =
      this.recalculateResult(input);

    return true;
  }

  async create(
    input: CreateFragilityDTO,
    user: User,
    type: string,
    student: Student,
  ): Promise<GetFragilityDTO> {
    const {
      sex: studentSex,
      birthDate,
      stature: height,
      breed: race,
    } = student;

    const sex = studentSex === 'H' ? 'Homem' : 'Mulher';
    const age = dayjs(new Date()).diff(birthDate, 'year');

    const {
      date,
      weight,
      measuredMuscleMass,
      estimatedMuscleMass,
      walkingSpeed,
      handGripStrength,
      muscleMassIndex,
      calfCircumference,
      result,
      hasSarcopenia,
    } = input;

    const validation = FragilitySchema.validate(input);

    if (validation?.error) {
      throw new BadRequestException(validation.error.message);
    }

    const isResultValid = this.validateResult(hasSarcopenia, {
      sex,
      age,
      weight,
      race,
      height,
      measuredMuscleMass,
      walkingSpeed,
      handGripStrength,
      muscleMassIndex,
      calfCircumference,
      result,
    });

    if (!isResultValid) {
      throw new BadRequestException(
        'Resultado da avaliação inválido de acordo com os dados repassados!',
      );
    }

    const data: CreateFragilityDTO = {
      date,
      weight,
      measuredMuscleMass,
      estimatedMuscleMass,
      walkingSpeed,
      handGripStrength,
      muscleMassIndex,
      calfCircumference,
      result,
      hasSarcopenia,
    };

    return await this.fragilityFactory.create(data, user, type, student);
  }

  async update(
    id: string,
    type: string,
    input: UpdateFragilityDTO,
  ): Promise<GetFragilityDTO> {
    const validation = FragilitySchema.validate(input);

    if (validation?.error) {
      throw new BadRequestException(validation.error.message);
    }

    const evaluation = await this.evaluationRepository.findOne({
      where: { id, deletedAt: null },
      relations: ['fields', 'student'],
    });

    if (!evaluation) {
      throw new NotFoundException(`Avaliação com o id ${id} não encontrada.`);
    }

    const { sex: studentSex, birthDate, stature: height } = evaluation.student;

    const sex = studentSex === 'H' ? 'Homem' : 'Mulher';
    const age = dayjs(new Date()).diff(birthDate, 'year');
    const race = '';

    const {
      date,
      weight,
      measuredMuscleMass,
      estimatedMuscleMass,
      walkingSpeed,
      handGripStrength,
      muscleMassIndex,
      calfCircumference,
      result,
      hasSarcopenia,
    } = input;

    const isResultValid = this.validateResult(hasSarcopenia, {
      sex,
      age,
      weight,
      race,
      height,
      measuredMuscleMass,
      walkingSpeed,
      handGripStrength,
      muscleMassIndex,
      calfCircumference,
      result,
    });

    if (!isResultValid)
      throw new BadRequestException(
        'Resultado da avaliação inválido de acordo com os dados repassados!',
      );

    const newData: UpdateFragilityDTO = {
      date,
      weight,
      measuredMuscleMass,
      estimatedMuscleMass,
      walkingSpeed,
      handGripStrength,
      muscleMassIndex,
      calfCircumference,
      result,
      hasSarcopenia,
    };

    return await this.fragilityFactory.update(id, type, newData, evaluation);
  }

  async getAll(
    orderBy: EvaluationOrderBy,
    paginationParams: PaginationParams,
    studentID: string,
  ): Promise<GetAllFragilityDTO> {
    const evaluations = await this.fragilityFactory.getAll(
      orderBy,
      paginationParams,
      studentID,
    );

    const returnedData: GetAllFragilityDTO = {
      evaluations,
      count: evaluations.length,
    };

    return returnedData;
  }

  async getByID(id: string): Promise<GetFragilityDTO> {
    const evaluation = await this.evaluationRepository.findOne({
      where: { id, deletedAt: null },
      relations: ['fields'],
    });

    if (!evaluation) {
      throw new NotFoundException(`Avaliação com id ${id} não encontrada`);
    }

    return this.fragilityFactory.getOne(evaluation);
  }
}
