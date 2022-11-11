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
  import { FunctionalBatteryFactory } from './functional-battery-factory';
  import { functionalBatterySchema } from './dto/functional-battery.dto';
  import { CreateFunctionalBatteryDto } from './dto/create-functional-battery.dto';
  import { GetFunctionalBatteryDto} from './dto/get-functional-battery.dto';
  import {GetAllFunctionalBatteryDto} from './dto/get-all-functional-battery.dto';
  import { UpdateFunctionalBatteryDto} from './dto/update-functional-battery.dto';
  import { calculatePercentElbowFlexion } from './helpers/elbowFlexion-calculate';
  import { calculatePercentSitFeet } from './helpers/sitFeet-calculate';
  import { calculatePercentTug } from './helpers/tug-calculate';
  import { calculatePercentSitGetUp } from './helpers/SitGetUp-calculate';
  import { calculatePercentGetBack } from './helpers/getBack-calculate';
  import {calculatePercentStationaryMarch} from './helpers/stationaryMarch-calculate';
  import { IFunctionalBattery } from './interface/functional-battery.interface';

@Injectable()
export class FunctionalBatteryStrategy {
    @InjectRepository(Evaluation)
    private readonly evaluationRepository: Repository<Evaluation>;

    constructor(
        private readonly functionalBatteryFactory: FunctionalBatteryFactory,
    ) {}

    // private recalculateResult({
    //     age,
    //     sex,
    //     TUG,
    //     sitFeet,
    //     getBack,
    //     sitGetUp,
    //     stationaryMarch,
    //     elbowFlexion,
    // }:Partial<IFunctionalBattery>){
    //     const percentTUG = calculatePercentTug({age,sex,TUG});
    //     const percentSitFeet = calculatePercentSitFeet ({age,sex,sitFeet});
    //     const percentSitGetUp = calculatePercentSitGetUp({age,sex,sitGetUp});
    //     const percentGetBack = calculatePercentGetBack({age,sex,getBack});
    //     const percentStationaryMarch = calculatePercentStationaryMarch({age,sex,stationaryMarch});
    //     const percentElbowFlexion = calculatePercentElbowFlexion({age,sex,elbowFlexion});

    //     if (percentTUG > 70) {

    //     }
    // } da pra tentar validar um por um

    async create(
        input: CreateFunctionalBatteryDto,
        user: User,
        type: string,
        student: Student,
      ): Promise<GetFunctionalBatteryDto> {
        const validation = functionalBatterySchema.validate(input);
    
        if (validation?.error) {
          throw new BadRequestException(validation.error.message);
        }
    
        const { sex: studentSex, birthDate } = student;
    
        const sex = studentSex === 'H' ? 'Homem' : 'Mulher';
        const age = dayjs(new Date()).diff(birthDate, 'year');
    
        const { date,
                sitGetUpResult, sitGetUpPercent, sitGetUpClassification, 
                elbowFlexionResult, elbowFlexionPercent, elbowFlexionClassification,
                stationaryMarchResult, stationaryMarchPercent, stationaryMarchClassification,
                sitFeetResult, sitFeetPercent, sitFeetClassification,
                TUGResult, TUGPercent, TUGClassification, 
                getBackResult, getBackPercent, getBackClassification,
                result, } = input;
    
        // const isResultValid = this.validateResult(result, {
        //     //     age,
        //     //     sex,
        //     //     TUG,
        //     //     sitFeet,
        //     //     getBack,
        //     //     sitGetUp,
        //     //     stationaryMarch,
        //     //     elbowFlexion,
        // });
    
        // if (!isResultValid)
        //   throw new BadRequestException(
        //     'Resultado inválido',
        //   );
    
        const data: CreateFunctionalBatteryDto = {
          date,
          sitGetUpResult,
          sitGetUpPercent,
          sitGetUpClassification,
          sitFeetResult,
          sitFeetPercent,
          sitFeetClassification,
          elbowFlexionResult,
          elbowFlexionPercent,
          elbowFlexionClassification,
          stationaryMarchResult,
          stationaryMarchPercent,
          stationaryMarchClassification,
          TUGResult,
          TUGPercent,
          TUGClassification,
          result,
          getBackResult,
          getBackPercent,
          getBackClassification,
        };
    
        return await this.functionalBatteryFactory.create(
          data,
          user,
          type,
          student,
        );
      }

      async update(
        id: string,
        type: string,
        input: UpdateFunctionalBatteryDto,
      ): Promise<GetFunctionalBatteryDto> {
        const validation = functionalBatterySchema.validate(input);
    
        // if (validation?.error) {
        //   throw new BadRequestException(validation.error.message);
        // }
    
        const evaluation = await this.evaluationRepository.findOne({
          where: {
            id,
            deletedAt: null,
          },
          relations: ['fields', 'student'],
        });
    
        if (!evaluation) {
          throw new NotFoundException(`Avaliação com id ${id} não encontrada`);
        }
    
        const { sex: studentSex, birthDate } = evaluation.student;
    
        const sex = studentSex === 'H' ? 'Homem' : 'Mulher';
        const age = dayjs(new Date()).diff(birthDate, 'year');
    
        const { date,
          sitGetUpResult, sitGetUpPercent, sitGetUpClassification, 
          elbowFlexionResult, elbowFlexionPercent, elbowFlexionClassification,
          stationaryMarchResult, stationaryMarchPercent, stationaryMarchClassification,
          sitFeetResult, sitFeetPercent, sitFeetClassification,
          TUGResult, TUGPercent, TUGClassification, 
          getBackResult, getBackPercent, getBackClassification,
          result, } = input;
    
        // const isResultValid = this.validateResult(result, {
        //   weight,
        //   finalFC,
        //   time,
        //   age,
        //   sex,
        // });
    
        // if (!isResultValid)
        //   throw new BadRequestException(
        //     'Resultado inválido de acordo com os dados repassados',
        //   );
    
        const newData: UpdateFunctionalBatteryDto = {
          date,
          sitGetUpResult,
          sitGetUpPercent,
          sitGetUpClassification,
          sitFeetResult,
          sitFeetPercent,
          sitFeetClassification,
          elbowFlexionResult,
          elbowFlexionPercent,
          elbowFlexionClassification,
          stationaryMarchResult,
          stationaryMarchPercent,
          stationaryMarchClassification,
          TUGResult,
          TUGPercent,
          TUGClassification,
          result,
          getBackResult,
          getBackPercent,
          getBackClassification,
        };
    
        return await this.functionalBatteryFactory.update(
          id,
          type,
          newData,
          evaluation,
        );
      }
    
      async getAll(
        orderBy: EvaluationOrderBy,
        paginationParams: PaginationParams,
        studentID: string,
      ): Promise<GetAllFunctionalBatteryDto> {
        const evaluations = await this.functionalBatteryFactory.getAll(
          orderBy,
          paginationParams,
          studentID,
        );
    
        const returnedData: GetAllFunctionalBatteryDto = {
          evaluations,
          count: evaluations.length,
        };
    
        return returnedData;
      }
    
      async getByID(id: string): Promise<GetFunctionalBatteryDto> {
        const evaluation = await this.evaluationRepository.findOne({
          where: { id, deletedAt: null },
          relations: ['fields'],
        });
    
        if (!evaluation) {
          throw new NotFoundException(`Avaliação com id ${id} não encontrada`);
        }
    
        return this.functionalBatteryFactory.getOne(evaluation);
      }
    }
    


  