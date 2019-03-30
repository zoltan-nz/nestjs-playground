import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { JsonFetcherService } from '../services/json-fetcher.service';
import { HttpModule } from '@nestjs/common';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [AppController],
      providers: [JsonFetcherService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "The app is running..."', () => {
      expect(appController.sayHello()).toBe('The app is running...');
    });
  });
});
