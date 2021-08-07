import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReparationsService } from './reparations.service';
import { ReparationsController } from './reparations.controller';
import { Reparation } from './reparation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Reparation])],
  providers: [ReparationsService],
  controllers: [ReparationsController],
})

export class ReparationsModule { } 
