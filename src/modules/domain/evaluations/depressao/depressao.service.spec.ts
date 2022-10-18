import { Test, TestingModule } from '@nestjs/testing';
import { DepressaoService } from './depressao.service';

describe('DepressaoService', () => {
  let service: DepressaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DepressaoService],
    }).compile();

    service = module.get<DepressaoService>(DepressaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
