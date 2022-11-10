import { ApiProperty } from '@nestjs/swagger';
import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';

export class CreateFunctionalBatteryDto {
    @ApiProperty()
    @JoiSchema(Joi.date().required())
    date: Date;

    @ApiProperty()
    @JoiSchema(Joi.number().required())
    sitGetUp: number;

    @ApiProperty()
    @JoiSchema(Joi.number().required())
    elbowFlexion: number;

    @ApiProperty()
    @JoiSchema(Joi.number().required())
    stationaryMarch: number;

    @ApiProperty()
    @JoiSchema(Joi.number().required())
    sitFeet: number;

    @ApiProperty()
    @JoiSchema(Joi.number().required())
    TUG: number;

    @ApiProperty()
    @JoiSchema(Joi.string().required())
    result: string;

    @ApiProperty()
    @JoiSchema(Joi.number().required())
    getBack: number;
}
