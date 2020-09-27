import { BaseAbstractEntity } from "src/global/base-abstract.entity";
import { Column, Entity, Generated, ManyToMany, OneToMany, OneToOne } from "typeorm";
import { Billing } from "../modules/billings/models/billing.entity";
import { Theme } from "../modules/themes/models/themes.entity";
import { CustomTheme } from "./custom-theme.entity";


@Entity()
export class Tenant extends BaseAbstractEntity{

    @Generated("uuid")
    uuid: string;

    @Column({unique: true})
    code: string

    @Column()
    name:string

    @Column()
    contactFirstName:string

    @Column()
    contactLastName:string

    @Column()
    contactTitle:string

    @Column()
    address:string

    @Column()
    email:string

    @Column()
    defaultURLSlug: string

    @Column({nullable: true})
    customURLSlug: string

    @Column()
    dateOfRegistration: Date

    @Column({default: false})
    active: boolean
    
    @OneToOne(type => CustomTheme,CustomTheme => CustomTheme.tenant )
    CustomTheme: CustomTheme

    @ManyToMany(type => Theme)
    theme: Theme

    @OneToMany(type => Billing, billing => billing.Tenant)
    billings: Billing[]

}
