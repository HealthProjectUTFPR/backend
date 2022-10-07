import { Controller } from '@nestjs/common';
import { TestBatteriesFieldService } from './test-batteries_field.service';

@Controller('test-batteries-field')
export class TestBatteriesFieldController {
  constructor(private readonly testBatteriesFieldService: TestBatteriesFieldService) {}
}
