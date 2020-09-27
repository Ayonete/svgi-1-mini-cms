import { BaseAbstractEntity } from "src/global/base-abstract.entity";
import { Column, Entity, PrimaryColumn } from "typeorm"


@Entity()
export abstract class Profile extends BaseAbstractEntity{
    
    @Column()
    homeAdress: string;

    @Column()
    nationality: string;

    @Column()
    StateOfOrigin: string

    @Column()
    Photo: string
}