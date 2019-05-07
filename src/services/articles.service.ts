import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { Article } from '../models/article';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ArticlesService {
  constructor(@InjectModel('Article') private readonly articleModel: Model<Article>) {}

  async create(article: Article): Promise<Article> {
    return new this.articleModel(article).save();
  }
}
