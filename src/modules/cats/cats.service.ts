import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './cat.interface';
import { CreateCatDto } from './create-cat.dto';
import {createResData} from '../../utils/common';

@Injectable()
export class CatsService {
  constructor(
    @InjectModel('Cat') private readonly catModel: Model<Cat>,
    @InjectModel('CatOne') private readonly catOneModel: Model<Cat>,
  ) {}

  public async create(createCatDto: CreateCatDto) {
    const createdCat = new this.catModel(createCatDto);
    const result = await createdCat.save();
    return createResData( result, '0', '', true);
  }

  public async findAll() {
    const result = await this.catModel.find().exec();
    const resultOne = await this.catOneModel.find().exec();
    return createResData( [...result, ...resultOne], '0', '', true);
  }

  public async deleteByName() {
    const result = await this.catModel.deleteMany({
      name: 'xiaomiao1',
    });
    return createResData( result, '0', '', true);
  }
}
