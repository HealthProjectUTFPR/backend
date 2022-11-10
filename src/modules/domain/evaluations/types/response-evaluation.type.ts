import { GetBodyCompositionDto } from '../body-composition/dto/get-body-composition.dto';
import { GetCardiorespiratoryCapacityDto } from '../cardiorespiratory-capacity/dto/get-cardiorespiratory-capacity.dto';
import { GetSarcopeniaDto } from '../sarcopenia/dto/get-sarcopenia.dto';
import { GetBalanceDto } from '../balance/dto/get-balance.dto';
import { GetAvdDto } from '../avd/dto/get-avd.dto';

export type ResponseEvaluation =
  | GetSarcopeniaDto
  | GetCardiorespiratoryCapacityDto
  | GetAvdDto
  | GetBalanceDto
  | GetBodyCompositionDto;
