import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductItemController } from './product/product-item.controller';

@Module({
  imports: [],
  controllers: [AppController, ProductItemController],
  providers: [AppService],
})
export class AppModule {}
