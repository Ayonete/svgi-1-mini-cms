import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { usersDto } from'./dto/users.dto'
import { profileDto } from './dto/profile.dto'
import { Users } from './models/user.entity'
import { Profile } from './models/profile.entity'
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

    
    constructor(
        @InjectRepository(Users) private userRespository: Repository<Users>, 
        @InjectRepository(Profile) private profileRepository: Repository<Profile>
    ){}

    async create (createUsersDto: usersDto): Promise<Users>{
        const newUser = this.userRespository.create(createUsersDto);
        return await this.userRespository.save(newUser);
    }

    async findAll(): Promise<Users[]> {
        return await this.userRespository.find();
    }

    async findOne(id: string): Promise<Users> {
        return await this.userRespository.findOne(id)
    }

    async delete(id: string): Promise<void> {
         await this.userRespository.delete(id);
    }

    async remove(Users: Users): Promise<Users> {
        return await this.userRespository.remove(Users)
    }

    async update(Users: Users): Promise<Users>{
        return await this.userRespository.save(Users)
    }
}
