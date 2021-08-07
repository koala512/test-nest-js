import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScootersModule } from './scooters/scooters.module';
import { ReparationsModule } from './reparations/reparations.module';
import { Scooter } from './scooters/scooter.entity';
import { Reparation } from './reparations/reparation.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        "type": "mysql",
        "host": "localhost",
        "port": 3306,
        "username": "root",
        "password": "",
        "database": "scooter3000",
        "entities": [Scooter, Reparation], 
        "synchronize": true
      }
    ),
    ScootersModule,
    ReparationsModule
  ],
})
export class AppModule {}



