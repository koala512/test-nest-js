import { Scooter } from 'src/scooters/scooter.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Reparation {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    nom:string;

    @Column({ length: 50 })
    motorisation:string;

    @Column({ length: 50 })
    marque:string;

    @Column({ length: 50 })
    modele:string;

    @Column({ length: 50 })
    kilometrage:string;

    @ManyToOne(()=> Scooter, scooter => scooter.reparation)
                    scooter: Scooter;

    
}