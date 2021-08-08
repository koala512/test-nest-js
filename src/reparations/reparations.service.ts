import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reparation } from './reparation.entity';

@Injectable()
export class ReparationsService {

    constructor(@InjectRepository(Reparation) private ReparationsRepository: Repository<Reparation>) { }
/**request typeorm  */
    async getReparations(): Promise<Reparation[]> {
        return await this.ReparationsRepository.find();
    }

    async getReparation(_id: number): Promise<Reparation[]> {
        return await this.ReparationsRepository.find({
            select: ["nom", "motorisation", "marque", "modele", "kilometrage"],
            where: [{ "id": _id }]
        });
    }

    async createReparation(reparation: Reparation) {
        this.ReparationsRepository.insert(reparation)
    }

    async updateReparation(reparation: Reparation) {
        this.ReparationsRepository.save(reparation)
    }

    async deleteReparation(reparation: Reparation) {
        this.ReparationsRepository.delete(reparation);
    }
}
