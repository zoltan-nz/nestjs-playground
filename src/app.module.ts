import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { JsonFetcherService } from './services/json-fetcher.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [JsonFetcherService],
})
export class AppModule {}
