import { Reparation } from 'src/reparations/reparation.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Scooter {
    /**creation primary key bdd */
    @PrimaryGeneratedColumn()
    id: number;
    /**column creation bdd */
    @Column({ length: 25 })
    nomcourt:string;

    @Column({ length: 250 })
    description:string;

    @Column({ length: 25 })
    prix:string;
    reparations: any;
    
    @OneToMany(() => Reparation, reparation => reparation.scooter)
                     reparation: Reparation[];
}
