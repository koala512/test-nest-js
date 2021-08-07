import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScootersService } from './scooters.service';
import { ScootersController } from './scooters.controller';
import { Scooter} from './scooter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Scooter])],
  providers: [ScootersService],
  controllers: [ScootersController],
})

export class ScootersModule { } 