import { GetCardiorespiratoryCapacityDto } from '../cardiorespiratory-capacity/dto/get-cardiorespiratory-capacity.dto';
import { GetAvdDto } from '../avd/dto/get-avd.dto';

export type ResponseEvaluation =    
    | GetCardiorespiratoryCapacityDto 
    | GetAvdDto;
