import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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

    
}