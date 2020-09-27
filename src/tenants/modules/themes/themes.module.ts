import { Module } from '@nestjs/common';
import { ThemesService } from './themes.service';
import { ThemesController } from './themes.controller';
import { Theme } from './models/themes.entity';
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([Theme])],
  providers: [ThemesService],
  controllers: [ThemesController]
})
export class ThemesModule {}
