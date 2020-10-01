import { CreateBaseAbstractDto } from "src/global/create-base-abstract.dto";
import { IsNotEmpty, IsEmail, IsBoolean } from "class-validator";


export class usersDto extends CreateBaseAbstractDto  {
    @IsNotEmpty()
    readonly firstname: string

    @IsNotEmpty()
    readonly middleName: string;
    
    @IsNotEmpty()
    readonly lastName: string;
    
    @IsNotEmpty()
    readonly commonName: string;
    
    @IsNotEmpty()
    readonly gender: string;
    
    @IsNotEmpty()
    readonly dateOfBirth: Date;
    
    @IsNotEmpty()
    readonly isActive: boolean;
    
    @IsEmail()
    @IsNotEmpty()
    readonly primaryEmailAddress: string;
    
    @IsNotEmpty()
    readonly isPrimaryEmailAdressVerified: boolean;
    
    @IsNotEmpty()
    readonly passwordSalt: string;
    
    @IsNotEmpty()
    readonly passwordHash: string;
    
    @IsNotEmpty()
    @IsBoolean()
    readonly isPasswordChangeRequired: boolean;
    
    @IsNotEmpty()
    readonly resetPasswordToken: string;
   
    @IsNotEmpty()
    readonly resetPasswordExpiration: Date;
    
    @IsNotEmpty()
    @IsEmail()
    readonly primaryEmailAddressVerificationToken: Date;
    
    @IsNotEmpty()
    @IsBoolean()
    readonly otpEnabled:boolean;

    @IsNotEmpty()
    readonly otpSecret: string;

}