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

} 
  