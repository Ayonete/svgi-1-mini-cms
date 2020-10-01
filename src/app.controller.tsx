import { Controller, Get, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';

import { Reply } from './global/custom.interfaces';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
/* 
  @Get()
 // @Render('base.html')
  getHello(): string {
    return this.appService.getHello();
  }*/


  @Get()
  home(@Res() reply: Reply){

    reply.view('guest-website/home.html', {title: 'SVGI-1 Mini CMS Home', homeActive: 'true'})
  }
} 
