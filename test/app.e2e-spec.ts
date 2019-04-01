import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { constants as HTTP2_CONSTANTS } from 'http2';
import { todosApiMockData } from './mocks/todos.mock';
import { articlesApiMockData } from './mocks/articles.mock';
import moxios = require('moxios');

describe('AppController (e2e)', () => {
  let app;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    moxios.install();
  });

  afterEach(async () => {
    moxios.uninstall();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect('Content-Type', /text/)
      .expect(HTTP2_CONSTANTS.HTTP_STATUS_OK)
      .expect('The app is running...');
  });

  it('/todos/ (GET)', () => {
    moxios.stubRequest(/.*todos/, { status: 200, response: JSON.stringify(todosApiMockData.slice(0, 5)) });

    return request(app.getHttpServer())
      .get('/todos/')
      .set('accept', 'json')
      .expect('Content-Type', /json/)
      .expect(HTTP2_CONSTANTS.HTTP_STATUS_OK)
      .expect(todosApiMockData.slice(0, 5));
  });

  it('/todos/1 (GET)', () => {
    moxios.stubRequest(/.*todos\/1/, { status: 200, response: JSON.stringify(todosApiMockData[0]) });

    return request(app.getHttpServer())
      .get('/todos/1')
      .set('accept', 'json')
      .expect('Content-Type', /json/)
      .expect(HTTP2_CONSTANTS.HTTP_STATUS_OK)
      .expect(todosApiMockData[0]);
  });

  it('/articles/ (GET)', () => {
    moxios.stubRequest(/.*_json/, { status: 200, response: JSON.stringify(articlesApiMockData) });

    return request(app.getHttpServer())
      .get('/articles')
      .set('accept', 'json')
      .expect('Content-Type', /json/)
      .expect(HTTP2_CONSTANTS.HTTP_STATUS_OK)
      .expect(articlesApiMockData);
  });
});
