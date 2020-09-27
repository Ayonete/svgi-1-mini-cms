import { BaseAbstractEntity } from "src/global/base-abstract.entity";
import { Column, Entity, Generated, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryColumn } from "typeorm";
//import { Roles } from "../modules/roles/models/roles.entity";
import { Profile } from "./profile.entity"

@Entity()
export class Users extends BaseAbstractEntity{

    @Generated("uuid")
    uuid: string;

    @Column()
    firstname: string

    @Column()
    middleName: string;

    @Column()
    lastName: string;

    @Column()
    commonName: string;

    @Column()
    gender: string;

    @Column()
    dateOfBirth: Date;

    @Column()
    isActive: boolean;

    @Column()
    primaryEmailAddress: string;

    @Column()
    isPrimaryEmailAdressVerified: boolean;

    @Column()
    passwordSalt: string;

    @Column()
    passwordHash: string;
    
    @Column()
    isPasswordChangeRequired: boolean;

    @Column()
    resetPasswordToken: string;

    @Column()
    resetPasswordExpiration: Date;

    @Column()
    primaryEmailAddressVerificationToken: Date;

    @Column()
    otpEnabled:boolean;

    @Column()
    otpSecret: string;
    
    @OneToOne(type => Profile)
    @JoinColumn()
    profile: Profile;

    
}