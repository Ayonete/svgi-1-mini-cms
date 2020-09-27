import { Module } from '@nestjs/common';
import { BillingsService } from './billings.service';
import { BillingsController } from './billings.controller';
import { Billing } from './models/billing.entity';
import { TypeOrmModule } from '@nestjs/typeorm'


@Module({
  imports: [TypeOrmModule.forFeature([Billing])],
  providers: [BillingsService],
  controllers: [BillingsController]
})
export class BillingsModule {}
