import { Test, TestingModule } from '@nestjs/testing';
import { SarcopeniaController } from './sarcopenia.controller';
import { SarcopeniaService } from './sarcopenia.service';

describe('SarcopeniaController', () => {
  let controller: SarcopeniaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SarcopeniaController],
      providers: [SarcopeniaService],
    }).compile();

    controller = module.get<SarcopeniaController>(SarcopeniaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
