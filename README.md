# NestJS Playground

## Yarn Scripts

Install packages:

```shell
$ yarn
```

| yarn script      | Description                                        |
| ---------------- | -------------------------------------------------- |
| `yarn build`     | Run TypeScript compiler with `tsconfig.build.json` |
| `yarn format`    | Prettier                                           |
| `yarn start`     | Run `src/main.ts` with ts-node                     |
| `yarn start:dev` | Run `nodemon` with watch                           |
| `yarn lint`      | Run `tslint` with fix                              |
| `yarn test`      | Run jest (with coverage, e2e)                      |

### Develop in watch mode

Run the following commands in separated terminal:

```
$ yarn build --watch
$ yarn start:dev
$ yarn test:watch
```

## Requirements

- [ ] Download data from a [json](https://www.stuff.co.nz/_json) file periodically.
- [x] Mock remote server response with [`moxios`](https://github.com/axios/moxios).
- [ ] Connect to MongoDB database.
- [ ] Create a snapshot from the periodically downloaded data in the database with a timestamp.
- [ ] Provide an `/api/stories` endpoint for query data from MongoDB.
- [ ] The endpoint is graphql compatible.

## Notes

- Using `axios` to download data, wrap it with Observable. Use `pipe` and `map` to get the real response before it passed to the controller.
- Use [`moxios`](https://github.com/axios/moxios) for mocking external api requests.

## A NestJS Project

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>
