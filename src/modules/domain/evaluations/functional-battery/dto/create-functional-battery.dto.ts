import { ApiProperty } from '@nestjs/swagger';
import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';

export class CreateFunctionalBatteryDto {
    @ApiProperty()
    @JoiSchema(Joi.date().required())
    date: Date;

    @ApiProperty()
    @JoiSchema(Joi.number().required())
    sitGetUpResult: number;

    @ApiProperty()
    @JoiSchema(Joi.number().required())
    sitGetUpPercent: number;

    @ApiProperty()
    @JoiSchema(Joi.string().required())
    sitGetUpClassification: string;

    @ApiProperty()
    @JoiSchema(Joi.number().required())
    elbowFlexionResult: number;

    @ApiProperty()
    @JoiSchema(Joi.number().required())
    elbowFlexionPercent: number;

    @ApiProperty()
    @JoiSchema(Joi.string().required())
    elbowFlexionClassification: string;

    @ApiProperty()
    @JoiSchema(Joi.number().required())
    stationaryMarchResult: number;

    @ApiProperty()
    @JoiSchema(Joi.number().required())
    stationaryMarchPercent: number;

    @ApiProperty()
    @JoiSchema(Joi.string().required())
    stationaryMarchClassification: string;

    @ApiProperty()
    @JoiSchema(Joi.number().required())
    sitFeetResult: number;

    @ApiProperty()
    @JoiSchema(Joi.number().required())
    sitFeetPercent: number;

    @ApiProperty()
    @JoiSchema(Joi.string().required())
    sitFeetClassification: string;

    @ApiProperty()
    @JoiSchema(Joi.number().required())
    TUGResult: number;

    @ApiProperty()
    @JoiSchema(Joi.number().required())
    TUGPercent: number;

    @ApiProperty()
    @JoiSchema(Joi.string().required())
    TUGClassification: string;
    
    @ApiProperty()
    @JoiSchema(Joi.number().required())
    getBackResult: number;

    @ApiProperty()
    @JoiSchema(Joi.number().required())
    getBackPercent: number;

    @ApiProperty()
    @JoiSchema(Joi.string().required())
    getBackClassification: string;

    @ApiProperty()
    @JoiSchema(Joi.string().required())
    result: string;

}
