import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Scooter } from './scooter.entity';

@Injectable()
export class ScootersService {

    constructor(@InjectRepository(Scooter) private ScootersRepository: Repository<Scooter>) { }
/**request typeorm  */
    async getScooters(): Promise<Scooter[]> {
        return await this.ScootersRepository.find();
    }

    async getScooter(_id: number): Promise<Scooter[]> {
        return await this.ScootersRepository.find({
            select: ["nomcourt", "description", "prix"],
            where: [{ "id": _id }]
        });
    }

    async createScooter(Scooter: Scooter) {
        this.ScootersRepository.insert(Scooter)
    }

    async updateScooter(Scooter: Scooter) {
        this.ScootersRepository.save(Scooter)
    }

    async deleteScooter(Scooter: Scooter) {
        this.ScootersRepository.delete(Scooter);
    }
}
