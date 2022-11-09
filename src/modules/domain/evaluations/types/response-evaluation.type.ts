import { GetBodyCompositionDto } from '../body-composition/dto/get-body-composition.dto';
import { GetCardiorespiratoryCapacityDto } from '../cardiorespiratory-capacity/dto/get-cardiorespiratory-capacity.dto';
import { GetMiniCognitionDto } from '../mini-cognition/dto/get-mini-cognition.dto';

export type ResponseEvaluation =
  | GetCardiorespiratoryCapacityDto
  | GetBodyCompositionDto
  | GetMiniCognitionDto;
