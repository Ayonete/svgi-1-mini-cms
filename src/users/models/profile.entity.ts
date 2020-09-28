import { BaseAbstractEntity } from "src/global/base-abstract.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm"
import { Users } from  './user.entity'

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

    @JoinColumn()
    @OneToOne(type => Users, users => users.profile, {onDelete: 'CASCADE'})
    users: Users;



}