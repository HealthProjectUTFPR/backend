import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';
import { Repository } from 'typeorm';
import { Evaluation } from '../entities/evaluation.entity';
import { Field } from '../entities/field.entity';
import { CardiorespiratoryCapacityDto } from './dto/cardiorespiratoryCapacity.dto';

@Injectable()
export class CardiorespiratoryCapacityFactory {
  @InjectRepository(Evaluation)
  private readonly evaluationsRepository: Repository<Evaluation>;

  @InjectRepository(Field)
  private readonly fieldRepository: Repository<Field>;

  private parseFieldsToString(data: Partial<CardiorespiratoryCapacityDto>) {
    const values = Object.entries(data);
    const inputs = [];

    values.forEach(([key, value]) => {
      let type: string = typeof value;
      if (type === 'number') type = Number.isInteger(value) ? 'int' : 'float';

      inputs.push({
        name: key,
        value: String(value),
        dataType: type,
      });
    });

    return inputs;
  }

  async createOrUpdate(
    input: CardiorespiratoryCapacityDto,
    user: User,
  ): Promise<Evaluation> {
    const { result, ...rest } = input;

    const arrayOfFields = this.parseFieldsToString(rest);

    let evaluation = this.evaluationsRepository.create({
      name: 'Sarcopenia',
      result,
      createdBy: user,
    });

    evaluation = await this.evaluationsRepository.save(evaluation);

    const fields: Field[] = await Promise.all(
      arrayOfFields.map(async (field) => {
        const entityField = this.fieldRepository.create({
          ...field,
          evaluation,
        } as Field);

        return await this.fieldRepository.save(entityField);
      }),
    );

    evaluation.fields = fields;
    const { id } = evaluation;

    await evaluation.save();

    return await this.evaluationsRepository.findOne({
      where: {
        id: id,
      },
      relations: ['fields'],
    });
  }
}
