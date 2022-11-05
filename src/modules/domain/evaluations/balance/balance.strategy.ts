import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/modules/infrastructure/user/entities/user.entity";
import { Repository } from "typeorm";
import { Student } from "../../student/entities/student.entity";
import { Evaluation } from "../entities/evaluation.entity";
import { BalanceFactory } from "./balance.factory";
import { BalanceSchema } from "./dto/balance.dto";
import { CreateBalanceDto } from "./dto/create-balance.dto";
import { GetBalanceDto } from "./dto/get-balance.dto";

@Injectable()
export class BalanceStrategy {
    @InjectRepository(Evaluation)
    private readonly evaluationsRepository: Repository<Evaluation>;
    
    constructor(
        private readonly balanceFactory: BalanceFactory,
    ) {}

    async create(
        input: CreateBalanceDto,
        user: User,
        type: string,
        student: Student,
    ): Promise<GetBalanceDto> {
        const validate = BalanceSchema.validate(input)
        
        if (validate?.error) {
            throw new Error(validate.error.message)
        }

        const { date, campo1, campo2, campo3, campo4, campo5, campo6, campo7, campo8,
                campo9, campo10, campo11, campo12, campo13, campo14, result } = input

        const data: CreateBalanceDto = {
            date,
            campo1,
            campo2,
            campo3,
            campo4,
            campo5,
            campo6,
            campo7,
            campo8,
            campo9,
            campo10,
            campo11,
            campo12,
            campo13,
            campo14,
            result,
        }

        return await this.balanceFactory.create(
            data,
            user,
            student,
            type,
        );
    }
}