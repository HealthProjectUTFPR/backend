import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';
import { Repository } from 'typeorm';
import { Evaluation } from '../entities/evaluation.entity';
import { Field, StringToDataType } from '../entities/field.entity';
import { CardiorespiratoryCapacityDto } from './dto/cardiorespiratoryCapacity.dto';

@Injectable()
export class CardiorespiratoryCapacityFactory {
  @InjectRepository(Evaluation)
  private readonly evaluationsRepository: Repository<Evaluation>;

  private parseFieldsToString(data: Partial<CardiorespiratoryCapacityDto>) {
    const values = Object.entries(data);
    const inputs = [];

    values.forEach(([key, value]) => {
      let type: string = typeof value;
      if (type === 'number') type = Number.isInteger(value) ? 'int' : 'float';

      inputs.push({
        name: key,
        value: String(value),
        dataType: StringToDataType[type],
      });
    });

    return inputs;
  }

  async createOrUpdate(
    input: CardiorespiratoryCapacityDto,
    user: User,
  ): Promise<string> {
    const { result, ...rest } = input;

    const inputs = this.parseFieldsToString(rest);

    console.log('user', inputs, result);

    return 'teste';
  }
}
