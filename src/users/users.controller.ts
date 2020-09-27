import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { usersDto } from './dto/users.dto'
import { Users } from './models/user.entity'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
    constructor(private readonly UsersService: UsersService) {}

    @Post()
    create(@Body() createUsersDto: usersDto): Promise<Users>{
        return this.UsersService.create(createUsersDto);
    }

    @Get()
    findAll(): Promise<Users[]>{
        return this.UsersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id:string): Promise<Users> {
        return this.UsersService.findOne(id);
    }

    @Put()
    update(@Body() Users: Users): Promise<Users>{
        return this.UsersService.update(Users);
    }
}
