import { BaseAbstractEntity } from "src/global/base-abstract.entity";
import { Column, Entity, Generated, JoinColumn, JoinTable, ManyToMany, ManyToOne } from "typeorm";
import { Users } from "src/users/models/user.entity";
import { Roles } from "src/users/modules/roles/models/roles.entity"

@Entity()
export class Permissions extends BaseAbstractEntity{

    @Column()
    name: string;

    @Column()
    description: string;

    @ManyToMany(type => Users)
    @JoinTable()
    role: Roles[];
}