import { Inject, Injectable, Logger } from '@nestjs/common';
import { Cron, NestSchedule } from 'nest-schedule';
import { JsonFetcherService } from './json-fetcher.service';
import { Story } from '../models/story';
import { ArticlesService } from './articles.service';
import { pluck } from 'rxjs/operators';
import { Article } from '../models/article';

@Injectable()
export class ScheduleService extends NestSchedule {
  private readonly logger = new Logger(ScheduleService.name);

  @Inject('JsonFetcherService')
  private readonly jsonFetcher: JsonFetcherService;

  @Inject('ArticlesService')
  private readonly articlesService: ArticlesService;

  // Every 10 seconds
  @Cron('*/10 * * * * *', { key: 'test-key' })
  async downloadLatestArtciles() {
    this.jsonFetcher
      .fetch<Story>('https://www.stuff.co.nz/_json')
      .pipe<Article[]>(pluck('stories'))
      .subscribe(articles => articles.forEach(article => this.articlesService.create(article)));
  }
}
