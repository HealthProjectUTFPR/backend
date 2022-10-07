import { Test, TestingModule } from '@nestjs/testing';
import { TestBatteriesFieldService } from './test-batteries_field.service';

describe('TestBatteriesFieldService', () => {
  let service: TestBatteriesFieldService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestBatteriesFieldService],
    }).compile();

    service = module.get<TestBatteriesFieldService>(TestBatteriesFieldService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
