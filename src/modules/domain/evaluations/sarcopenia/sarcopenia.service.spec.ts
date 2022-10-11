import { Test, TestingModule } from '@nestjs/testing';
import { SarcopeniaService } from './sarcopenia.service';

describe('SarcopeniaService', () => {
  let service: SarcopeniaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SarcopeniaService],
    }).compile();

    service = module.get<SarcopeniaService>(SarcopeniaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
