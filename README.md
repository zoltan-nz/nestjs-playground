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

## A NestJS Project

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>
