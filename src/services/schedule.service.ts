import { Inject, Injectable, Logger } from '@nestjs/common';
import { Cron, NestSchedule } from 'nest-schedule';
import { JsonFetcherService } from './json-fetcher.service';
import { Story } from '../models/story';

@Injectable()
export class ScheduleService extends NestSchedule {
  private readonly logger = new Logger(ScheduleService.name);

  @Inject('JsonFetcherService')
  private readonly jsonFetcher: JsonFetcherService;

  // Every 10 seconds
  @Cron('*/10 * * * * *')
  async downloadFreshArticles() {
    this.logger.log(`executing cron job ${new Date().toLocaleTimeString()}`);
    this.jsonFetcher
      .fetch<Story>('https://www.stuff.co.nz/_json')
      .subscribe(result => console.log(result.stories.map(story => story.id)));
  }
}
