import { Module } from '@nestjs/common';
import modules from './modules/index';
// import { MongooseModule  } from '@nestjs/mongoose';

@Module({
  imports: [
    ...modules,
  ],
})
/*MongooseModule.forRoot('mongodb://127.0.0.1:27017/cats', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})*/
export class AppModule {}
