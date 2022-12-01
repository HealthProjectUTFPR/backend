import { GetBodyCompositionDto } from '../body-composition/dto/get-body-composition.dto';
import { GetCardiorespiratoryCapacityDto } from '../cardiorespiratory-capacity/dto/get-cardiorespiratory-capacity.dto';
import { GetSarcopeniaDto } from '../sarcopenia/dto/get-sarcopenia.dto';
import { GetBalanceDto } from '../balance/dto/get-balance.dto';
import { GetAvdDto } from '../avd/dto/get-avd.dto';
import { GetFragilityDTO } from '../fragility/dto/get-fragility.dto';
import { GetMiniCognitionDto } from '../mini-cognition/dto/get-mini-cognition.dto';
import { GetDepressionDto } from '../depression/dto/get-depression.dto';

export type ResponseEvaluation =
  | GetSarcopeniaDto
  | GetCardiorespiratoryCapacityDto
  | GetAvdDto
  | GetBalanceDto
  | GetBodyCompositionDto
  | GetFragilityDTO
  | GetDepressionDto
  | GetMiniCognitionDto;
