import { Test, TestingModule } from '@nestjs/testing';
import { CardiorespiratoryCapacityStrategy } from './cardiorespiratoryCapacity.strategy';

describe('CardiorespiratoryCapacityStrategy', () => {
  let service: CardiorespiratoryCapacityStrategy;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CardiorespiratoryCapacityStrategy],
    }).compile();

    service = module.get<CardiorespiratoryCapacityStrategy>(
      CardiorespiratoryCapacityStrategy,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
