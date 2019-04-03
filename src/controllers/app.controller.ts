import { Controller, Get, Param } from '@nestjs/common';
import { JsonFetcherService } from '../services/json-fetcher.service';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly jsonFetcherService: JsonFetcherService) {}

  @Get()
  sayHello(): string {
    return 'The app is running...';
  }

  @Get('todos')
  findAll(): Observable<object> {
    return this.jsonFetcherService.fetch('https://jsonplaceholder.typicode.com/todos');
  }

  @Get('todos/:id')
  findOne(@Param('id') id: number): Observable<object> {
    return this.jsonFetcherService.fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }

  @Get('articles')
  fetchArticles(): Observable<any> {
    return this.jsonFetcherService.fetch('https://www.stuff.co.nz/_json');
  }
}
