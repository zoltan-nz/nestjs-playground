import { Test, TestingModule } from '@nestjs/testing';
import { ArticlesService } from './articles.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleSchema } from '../schemas/article.schema';

describe('ArticlesService', () => {
  let service: ArticlesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [MongooseModule.forFeature([{ name: 'Article', schema: ArticleSchema }])],
      providers: [ArticlesService],
    }).compile();

    service = module.get<ArticlesService>(ArticlesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
