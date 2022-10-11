import { PartialType } from '@nestjs/mapped-types';
import { CreateSarcopeniaDto } from './create-sarcopenia.dto';

export class UpdateSarcopeniaDto extends PartialType(CreateSarcopeniaDto) {}
