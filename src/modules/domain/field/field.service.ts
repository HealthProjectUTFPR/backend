import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PaginationParams, PaginationResult } from "src/common/interfaces/pagination.interface";
import { Repository } from "typeorm";
import { Field } from "./entities/field.entity";
import { CreateFieldDto } from "./dto/create-field.dto";
import { UpdateFieldDto } from "./dto/update-field.dto";

@Injectable()
export class FieldService {
    @InjectRepository(Field)
    private readonly fieldsRepository: Repository<Field>;
    
    async create(
        createFieldDto: CreateFieldDto,
    ): Promise<Field> {
        const newField = this.fieldsRepository.create({
            ...createFieldDto,
            evaluationField: { id: createFieldDto.evaluationFieldId },
            testBatteriesField: { id: createFieldDto.testBatteriesFieldId },
        });
        return await this.fieldsRepository.save(newField);
    }

    async findAll(
        paginationParams: PaginationParams,
    ): Promise<PaginationResult<Field>> {
        const fields = await this.fieldsRepository.findAndCount({
            skip: (paginationParams.page - 1) * paginationParams.limit,
            take: paginationParams.limit,
            relations : ["evaluationField", "testBatteriesField"],
        });

        const meta = {
            itemsPerPage: +paginationParams.limit,
            totalItems: +fields[1],
            currentPage: +paginationParams.page,
            totalPages: +Math.ceil(fields[1] / paginationParams.limit),
        };

        return {
            data: fields[0],
            meta: meta,
        };
    }

    async findOne(id: string): Promise<Field> {
        const field = await this.fieldsRepository.findOne({
            where: { id: id },
        });
        return field;
    }

    async update(
        id: string,
        updateFieldDto: UpdateFieldDto,
    ): Promise<Field> {
        let field = await this.fieldsRepository.findOne({
            where: { id: id },
        });
        await this.fieldsRepository.update(id, updateFieldDto);
        field = await this.fieldsRepository.findOneBy({ id: id });

        return field;
    }

    async remove(id: string): Promise<Field> {
        const field = await this.fieldsRepository.findOne({
            where: { id: id },
        });
        await this.fieldsRepository.delete(id);
        return field;
    }

}