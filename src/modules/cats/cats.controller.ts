import { Controller, Get, Post, Body} from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private  readonly catsService: CatsService) {}

  @Get('get-cats')
  getCats() {
    return this.catsService.findAll();
  }

  @Post('post-cats')
  postCats(@Body() data) {
    return this.catsService.create(data);
  }

  @Post('delete-cats')
  deleteByName() {
    return this.catsService.deleteByName();
  }
}
