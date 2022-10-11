import { Controller } from '@nestjs/common';
import { EvaluationFieldService } from './evaluation_field.service';

@Controller('evaluation-field')
export class EvaluationFieldController {
  constructor(
    private readonly evaluationFieldService: EvaluationFieldService,
  ) {}
}
