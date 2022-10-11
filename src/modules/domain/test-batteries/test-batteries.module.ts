import { Module } from "@nestjs/common";
import { TestBatteriesService } from "./test-batteries.service";
import { TestBatteriesController } from "./test-batteries.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TestBatteries } from "./entities/test-batteries.entity";
import { Field } from "../field/entities/field.entity";
import { Evaluation } from "../evaluations/base/entities/evaluation.entity";
import { User } from "src/modules/infrastructure/user/entities/user.entity";
import { TestBatteriesField } from "../test-batteries_field/entities/test-batteries_field.entity";


@Module({
    imports: [TypeOrmModule.forFeature([TestBatteries, Field, Evaluation, User, TestBatteriesField])],
    controllers: [TestBatteriesController],
    providers: [TestBatteriesService],
    exports: [TypeOrmModule],
})
export class TestBatteriesModule {}