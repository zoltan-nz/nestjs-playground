import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { constants as HTTP2_CONSTANTS } from 'http2';

describe('AppController (e2e)', () => {
  let app;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
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
    return request(app.getHttpServer())
      .get('/todos/')
      .set('accept', 'json')
      .expect('Content-Type', /json/)
      .expect(HTTP2_CONSTANTS.HTTP_STATUS_OK);
  });

  it('/todos/1 (GET)', () => {
    return request(app.getHttpServer())
      .get('/todos/1')
      .set('accept', 'json')
      .expect('Content-Type', /json/)
      .expect(HTTP2_CONSTANTS.HTTP_STATUS_OK);
  });

  it('/articles/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/articles')
      .set('accept', 'json')
      .expect('Content-Type', /json/)
      .expect(HTTP2_CONSTANTS.HTTP_STATUS_OK);
  });
});
