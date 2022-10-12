import { Test, TestingModule } from '@nestjs/testing';
import { TestBatteriesFieldController } from './test-batteries_field.controller';
import { TestBatteriesFieldService } from './test-batteries_field.service';

describe('TestBatteriesFieldController', () => {
  let controller: TestBatteriesFieldController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestBatteriesFieldController],
      providers: [TestBatteriesFieldService],
    }).compile();

    controller = module.get<TestBatteriesFieldController>(
      TestBatteriesFieldController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
