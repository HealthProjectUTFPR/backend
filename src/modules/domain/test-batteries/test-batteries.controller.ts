import { Controller } from "@nestjs/common";
import { TestBatteriesService } from "./test-batteries.service";

@Controller("test-batteries")
export class TestBatteriesController {
    constructor(private readonly testBatteriesService: TestBatteriesService) {}
}