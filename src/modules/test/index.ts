import { Module } from '@nestjs/common';
import { TestController } from './controller';
import { TestServer } from './service';

@Module({
  controllers: [TestController],
  providers: [TestServer],
})
export default class TestModule {}
