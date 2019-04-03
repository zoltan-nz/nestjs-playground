import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { JsonFetcherService } from './services/json-fetcher.service';
import { ScheduleModule } from 'nest-schedule';
import { ScheduleService } from './services/schedule.service';

@Module({
  imports: [HttpModule, ScheduleModule.register()],
  controllers: [AppController],
  providers: [JsonFetcherService, ScheduleService],
})
export class AppModule {}
