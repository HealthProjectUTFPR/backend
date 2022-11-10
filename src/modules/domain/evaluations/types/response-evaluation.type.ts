import { GetBodyCompositionDto } from '../body-composition/dto/get-body-composition.dto';
import { GetCardiorespiratoryCapacityDto } from '../cardiorespiratory-capacity/dto/get-cardiorespiratory-capacity.dto';
import { GetBalanceDto } from '../balance/dto/get-balance.dto';
import { GetAvdDto } from '../avd/dto/get-avd.dto';
import { GetDepressionDto } from '../depression/dto/get-depression.dto';

export type ResponseEvaluation =
  | GetCardiorespiratoryCapacityDto
  | GetAvdDto
  | GetBalanceDto
  | GetBodyCompositionDto
  | GetDepressionDto;
