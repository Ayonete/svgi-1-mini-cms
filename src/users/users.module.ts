import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesModule } from './modules/roles/roles.module';
import { PermissionsModule } from './modules/permissions/permissions.module';
import { Profile } from './models/profile.entity';
import { Users } from './models/user.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([Users, Profile]), RolesModule, PermissionsModule
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
