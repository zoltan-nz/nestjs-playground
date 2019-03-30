import { Test, TestingModule } from '@nestjs/testing';
import { JsonFetcherService } from './json-fetcher.service';
import { HttpModule } from '@nestjs/common';

describe('JsonFetcherService', () => {
  let service: JsonFetcherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [JsonFetcherService],
    }).compile();

    service = module.get<JsonFetcherService>(JsonFetcherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should have httpService injected', () => {
    expect(service).toHaveProperty('httpService');
  });
});
