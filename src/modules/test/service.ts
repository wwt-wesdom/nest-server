import { Injectable} from '@nestjs/common';
import {createResData} from '../../utils/common';

@Injectable()
export class TestServer {
  public async getHello() {
    return createResData( 'hello world', '0', '', true);
  }
}
