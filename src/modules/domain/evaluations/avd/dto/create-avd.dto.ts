import { ApiProperty } from '@nestjs/swagger';
import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';

export class CreateAvdDto {
    @ApiProperty()
    @JoiSchema(Joi.date().required())
    date: Date;

    @ApiProperty()
    @JoiSchema(Joi.boolean().required())
    bath: boolean;

    @ApiProperty()
    @JoiSchema(Joi.boolean().required())
    dress: boolean;

    @ApiProperty()
    @JoiSchema(Joi.boolean().required())
    bathroom: boolean;

    @ApiProperty()
    @JoiSchema(Joi.boolean().required())
    transfer: boolean;

    @ApiProperty()
    @JoiSchema(Joi.boolean().required())
    salute: boolean;

    @ApiProperty()
    @JoiSchema(Joi.boolean().required())
    feeding: boolean;

    @ApiProperty()
    @JoiSchema(Joi.string().required())
    result: string;
}
