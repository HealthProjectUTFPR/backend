import { Test, TestingModule } from '@nestjs/testing';
import { DepressaoController } from './depressao.controller';
import { DepressaoService } from './depressao.service';

describe('DepressaoController', () => {
  let controller: DepressaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DepressaoController],
      providers: [DepressaoService],
    }).compile();

    controller = module.get<DepressaoController>(DepressaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
