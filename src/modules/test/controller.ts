import { Controller, Get, Post, Body} from '@nestjs/common';
import { TestServer } from './service';

@Controller('test')
export class TestController {
  constructor(private  readonly testServer: TestServer) {}

  @Get('get-hello')
  getHello() {
    return this.testServer.getHello();
  }

  @Post('test-post')
  testPost(@Body() data) {
    return this.testServer.testPost(data);
  }

  @Post('read-file')
  readFile(@Body() data) {
    return this.testServer.readFile(data);
  }
}
