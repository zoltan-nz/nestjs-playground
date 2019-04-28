import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { JsonFetcherService } from './services/json-fetcher.service';
import { ScheduleModule } from 'nest-schedule';
import { ScheduleService } from './services/schedule.service';
import { getModelToken, MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from 'nestjs-config';
import { ArticlesService } from './services/articles.service';
import * as path from 'path';
import { articleSchema } from './schemas/article.schema';
import { Article } from './models/article';

@Module({
  imports: [
    ConfigModule.load(path.resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),
    HttpModule,
    ScheduleModule.register(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({ uri: config.get('mongodb.mongoServerAddress'), useNewUrlParser: true }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([{ name: 'Article', schema: articleSchema }]),
  ],
  controllers: [AppController],
  providers: [
    JsonFetcherService,
    ScheduleService,
    ArticlesService,
    { provide: getModelToken('ArticleModel'), useValue: articleSchema },
  ],
})
export class AppModule {}
