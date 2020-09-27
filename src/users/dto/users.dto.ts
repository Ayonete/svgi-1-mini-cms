import { CreateBaseAbstractDto } from "src/global/create-base-abstract.dto";

export class usersDto extends CreateBaseAbstractDto  {
    readonly firstname: string
    readonly middleName: string;
    readonly lastName: string;
    readonly commonName: string;
    readonly gender: string;
    readonly dateOfBirth: Date;
    readonly isActive: boolean;
    readonly primaryEmailAddress: string;
    readonly isPrimaryEmailAdressVerified: boolean;
    readonly passwordSalt: string;
    readonly passwordHash: string;
    readonly isPasswordChangeRequired: boolean;
    readonly resetPasswordToken: string;
    readonly resetPasswordExpiration: Date;
    readonly primaryEmailAddressVerificationToken: Date;
    readonly otpEnabled:boolean;
    readonly otpSecret: string;

}