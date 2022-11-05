import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Evaluation } from "../entities/evaluation.entity";
import { Field } from "../entities/field.entity";
import { Repository } from 'typeorm';
import { CreateBalanceDto } from "./dto/create-balance.dto";
import { GetBalanceDto } from "./dto/get-balance.dto";
import dayjs from "dayjs";
import { IBalance } from "./interface/balance.interface";
import { parseType } from "src/common/utils/parse-type.util";
import { Student } from "../../student/entities/student.entity";
import { User } from "src/modules/infrastructure/user/entities/user.entity";

@Injectable()
export class BalanceFactory {
    @InjectRepository(Evaluation)
    private readonly evaluationRepository: Repository<Evaluation>;

    @InjectRepository(Field)
    private readonly fieldRepository: Repository<Field>;

    private parseFieldsToString(
        data: Partial<CreateBalanceDto>,
    ) {
        const fields = Object.entries(data);
        const inputs = [];
        fields.forEach(([key, value]) => {
            let type: string = typeof value;
            if (type === 'number') type = Number.isInteger(value) ? 'int' : 'float';
            if (type === 'string') type = dayjs(value).isValid() ? 'date' : 'string';
        
            inputs.push({
                name: key,
                value: String(value),
                dataType: type 
            });
        });
        return inputs;
    }

    private parseFieldsToCorrectType(
        data: Evaluation,
      ): GetBalanceDto {
        const { id, name, createdAt, updatedAt, result, deletedAt, fields } = data;
    
        const parsedFields: Partial<IBalance> = {};
    
        fields.forEach(({ name, value, dataType }) => {
            const formattedValue = parseType(dataType, value);
    
            parsedFields[name] = formattedValue;
        });
    
        const { campo1, campo2, campo3, campo4, campo5, campo6, campo7, campo8, campo9, 
                campo10, campo11, campo12, campo13, campo14, date} = parsedFields;
    
        const returnBalance: GetBalanceDto = {
            id,
            name,
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
            createdAt,
            updatedAt,
            deletedAt,
        };
    
        return returnBalance;
    }

    async create(
        input: CreateBalanceDto,
        user: User,
        student: Student,
        type: string,
    ): Promise<GetBalanceDto> {
        const { result, ...rest } = input;

        const fieldsArray = this.parseFieldsToString(rest);

        let evaluation = this.evaluationRepository.create({
            name: type,
            result,
            createdBy: user,
            student,
        });
        
        evaluation = await this.evaluationRepository.save(evaluation);

        const fields: Field[] = await Promise.all(
            fieldsArray.map(async (field) => {
                const newField = this.fieldRepository.create({
                    ...field,
                    evaluation,
                }as Field);
                return await this.fieldRepository.save(newField);
            }),
        );

        evaluation.fields = fields;
        const { id } = evaluation;
        await evaluation.save();

        evaluation = await this.evaluationRepository.findOne({
            where: {
                id: id,
            },
            relations: ['fields'],
        });

        return this.parseFieldsToCorrectType(evaluation);
    }
}