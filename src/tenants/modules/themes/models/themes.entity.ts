import { BaseAbstractEntity } from "src/global/base-abstract.entity";
import { CustomTheme } from "src/tenants/models/custom-theme.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, OneToOne } from "typeorm";
import { Tenant } from "../../../models/tenant.entity";
import { Billing } from "../../billings/models/billing.entity";

@Entity()
export class Theme extends BaseAbstractEntity{

    @Column()
    name: string

    @Column()
    description: string
    
    @Column()
    properties: string
    
    @JoinTable()
    @ManyToMany(type => Tenant)
    tenant: Tenant

}