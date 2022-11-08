import { GetCardiorespiratoryCapacityDto } from '../cardiorespiratory-capacity/dto/get-cardiorespiratory-capacity.dto';
import { GetMiniCognitionDto } from '../MiniCognition/dto/get-MiniCognition.dto';

export type ResponseEvaluation = GetCardiorespiratoryCapacityDto
                                | GetMiniCognitionDto;
