import { Reparation } from 'src/reparations/reparation.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Scooter {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    nomcourt:string;

    @Column({ length: 250 })
    description:string;

    @Column({ length: 25 })
    prix:string;
    
    @OneToMany(() => Reparation, reparation => reparation.scooter)
                     reparation: Reparation[];
}
