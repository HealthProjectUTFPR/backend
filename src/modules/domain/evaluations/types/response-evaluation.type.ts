import { GetBodyCompositionDto } from '../body-composition/dto/get-body-composition.dto';
import { GetCardiorespiratoryCapacityDto } from '../cardiorespiratory-capacity/dto/get-cardiorespiratory-capacity.dto';
import { GetAvdDto } from '../avd/dto/get-avd.dto';
import { GetBalanceDto } from '../balance/dto/get-balance.dto';
import { GetMiniCognitionDto } from '../mini-cognition/dto/get-mini-cognition.dto';

export type ResponseEvaluation =
  | GetCardiorespiratoryCapacityDto
  | GetAvdDto
  | GetBalanceDto
  | GetBodyCompositionDto
  | GetMiniCognitionDto;
