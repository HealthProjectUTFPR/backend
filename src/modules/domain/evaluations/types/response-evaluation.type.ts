import { GetBodyCompositionDto } from '../body-composition/dto/get-body-composition.dto';
import { GetCardiorespiratoryCapacityDto } from '../cardiorespiratory-capacity/dto/get-cardiorespiratory-capacity.dto';
import { GetMiniCognitionDto } from '../MiniCognition/dto/get-MiniCognition.dto';

export type ResponseEvaluation =
  | GetCardiorespiratoryCapacityDto
  | GetBodyCompositionDto
  | GetMiniCognitionDto;
