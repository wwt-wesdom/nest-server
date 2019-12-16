import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { CatSchema } from './cat.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'CatOne', schema: CatSchema }, { name: 'Cat', schema: CatSchema }])],
  controllers: [CatsController],
  providers: [CatsService],
})
export default class CatsModule {}
