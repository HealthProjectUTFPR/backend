import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationResponseDto } from 'src/common/dtos/pagination.dto';
import { PaginationParams } from 'src/common/interfaces/pagination.interface';
import { Repository } from 'typeorm';
import { CreateTestBatteriesDto } from './dto/create-test-batteries.dto';
import { TestBatteries } from './entities/test-batteries.entity';

@Injectable()
export class TestBatteriesService {
  @InjectRepository(TestBatteries)
  private readonly testBatteriesRepository: Repository<TestBatteries>;

  async create(
    createTestBatteriesDto: CreateTestBatteriesDto,
  ): Promise<TestBatteries> {
    const testBatteries = this.testBatteriesRepository.create({
      ...createTestBatteriesDto,
      evaluations: { id: createTestBatteriesDto.evaluationsId },
    });
    await this.testBatteriesRepository.save(testBatteries);
    return testBatteries;
  }

  async findAll(
    paginationParams: PaginationParams,
  ): Promise<PaginationResponseDto<TestBatteries>> {
    const testBaterries = await this.testBatteriesRepository.findAndCount({
      skip: (paginationParams.page - 1) * paginationParams.limit,
      take: paginationParams.limit,
      relations: ['fields', 'evaluations'],
    });

    const meta = {
      itemsPerPage: +paginationParams.limit,
      totalItems: +testBaterries[1],
      currentPage: +paginationParams.page,
      totalPages: +Math.ceil(testBaterries[1] / paginationParams.limit),
    };

    return {
      data: testBaterries[0],
      meta: meta,
    };
  }

  async findOne(id: string): Promise<TestBatteries> {
    const testBatteries = await this.testBatteriesRepository.findOne({
      where: { id: id },
    });
    return testBatteries;
  }

  async update(
    id: string,
    updateTestBatteriesDto: CreateTestBatteriesDto,
  ): Promise<TestBatteries> {
    let testBatteries = await this.testBatteriesRepository.findOne({
      where: { id: id },
    });
    await this.testBatteriesRepository.update(id, updateTestBatteriesDto);
    testBatteries = await this.testBatteriesRepository.findOneBy({ id: id });

    return testBatteries;
  }
}
