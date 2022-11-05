import { GetCardiorespiratoryCapacityDto } from '../cardiorespiratory-capacity/dto/get-cardiorespiratory-capacity.dto';
import { GetSarcopeniaDto } from '../sarcopenia/dto/get-sarcopenia.dto';

export type ResponseEvaluation =
  | GetCardiorespiratoryCapacityDto
  | GetSarcopeniaDto;
