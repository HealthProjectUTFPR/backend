import { Module } from "@nestjs/common";
import { TestBatteriesService } from "./test-batteries.service";
import { TestBatteriesController } from "./test-batteries.controller";

@Module({
    controllers: [TestBatteriesController],
    providers: [TestBatteriesService]
})
export class TestBatteriesModule {}