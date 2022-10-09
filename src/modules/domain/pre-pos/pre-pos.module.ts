import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrePos } from './entities/pre-pos.entity';
import { PrePosController } from './pre-pos.controller';
import { PrePosService } from './pre-pos.service';

@Module({
  imports: [TypeOrmModule.forFeature([PrePos])],
  controllers: [PrePosController],
  providers: [PrePosService],
  exports: [TypeOrmModule],
})
export class PrePosModule {}
