import { Body, Controller, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { AuthUser } from "src/common/decorators/auth-user.decorator";
import { JwtAuthGuard } from "src/modules/infrastructure/auth/auth.guard";
import { TestBatteriesService } from "./test-batteries.service";
import { User } from "src/modules/infrastructure/user/entities/user.entity";
import { TestBatteries } from "./entities/test-batteries.entity";
import { CreateTestBatteriesDto } from "./dto/create-test-batteries.dto";
import { UpdateTestBatteriesDto } from "./dto/update-test-batteries.dto";
import { JoiPipe } from "nestjs-joi";
import { Pagination } from "src/common/decorators/pagination.decorator";
import { PaginationParams } from "src/common/interfaces/pagination.interface";
import { PaginationResponseDto } from "src/common/dtos/pagination.dto";

@Controller("test-batteries")
@UseGuards(JwtAuthGuard)
export class TestBatteriesController {
    constructor(private readonly testBatteriesService: TestBatteriesService) {}

    @Post("create")
    async create(
        @Body(new JoiPipe({ group: "CREATE" }))
        createTestBatteriesDto: CreateTestBatteriesDto,
    ): Promise<TestBatteries> {
        return await this.testBatteriesService.create(createTestBatteriesDto);
    }

    @Get("list")
    async findAll(
        @Pagination() paginationParams: PaginationParams,
    ): Promise<PaginationResponseDto<TestBatteries>> {
        return new PaginationResponseDto<TestBatteries>(
            await this.testBatteriesService.findAll(paginationParams),
        );
    }

    @Get("get/:id")
    async findOne(
        @Param("id") 
        id: string
        ): Promise<TestBatteries> {
        return await this.testBatteriesService.findOne(id);
    }

    @Patch("update/:id")
    async update(
        @Param("id") id: string,
        @Body(new JoiPipe({ group: "UPDATE" }))
        updateTestBatteriesDto: UpdateTestBatteriesDto,
    ): Promise<TestBatteries> {
        return await this.testBatteriesService.update(id, updateTestBatteriesDto);
    }
    
}