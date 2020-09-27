import { BaseAbstractEntity } from "src/global/base-abstract.entity";
import { Column, Entity, Generated, JoinColumn, JoinTable, ManyToMany, ManyToOne } from "typeorm";
import { Users } from "src/users/models/user.entity";

@Entity()
export class Roles extends BaseAbstractEntity{

    @Column()
    name: string;

    @Column()
    description: string;

    @ManyToMany(type => Users)
    @JoinTable()
    users: Users[];
}
