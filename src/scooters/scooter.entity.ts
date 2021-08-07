import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}
