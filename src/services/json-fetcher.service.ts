import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs/operators';

@Injectable()
export class JsonFetcherService {
  constructor(private readonly httpService: HttpService) {}

  fetch(url: string): Observable<AxiosResponse<any>> {
    return this.httpService.get(url).pipe(map(response => response.data));
  }
}
