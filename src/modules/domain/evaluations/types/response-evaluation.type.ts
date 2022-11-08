import { GetBodyCompositionDto } from '../body-composition/dto/get-body-composition.dto';
import { GetCardiorespiratoryCapacityDto } from '../cardiorespiratory-capacity/dto/get-cardiorespiratory-capacity.dto';
import { GetBalanceDto } from '../balance/dto/get-balance.dto';

export type ResponseEvaluation =
  | GetCardiorespiratoryCapacityDto
  | GetBalanceDto
  | GetBodyCompositionDto;
