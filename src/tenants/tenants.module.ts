import { Module } from '@nestjs/common';
import { TenantsController } from './tenants.controller';
import { TenantsService } from './tenants.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThemesModule } from './modules/themes/themes.module'
import { ThemesService } from './modules/themes/themes.service'
import { BillingsModule } from './modules/billings/billings.module'
import { CustomTheme } from './models/custom-theme.entity'
import { Tenant } from './models/tenant.entity'
import { Theme } from './modules/themes/models/themes.entity'

@Module({
  imports: [
   TypeOrmModule.forFeature([Tenant, CustomTheme]), 
   ThemesModule, BillingsModule],
  controllers: [TenantsController],
  providers: [TenantsService]
})
export class TenantsModule {}
