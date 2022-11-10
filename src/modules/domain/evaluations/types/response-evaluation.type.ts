import { GetBodyCompositionDto } from '../body-composition/dto/get-body-composition.dto';
import { GetCardiorespiratoryCapacityDto } from '../cardiorespiratory-capacity/dto/get-cardiorespiratory-capacity.dto';
import { GetFunctionalBatteryDto } from '../functional-battery/dto/get-functional-battery.dto';

export type ResponseEvaluation =
  | GetCardiorespiratoryCapacityDto
  | GetBodyCompositionDto
  | GetFunctionalBatteryDto
