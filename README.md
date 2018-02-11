# node-typescript-starter

## Description

Starter project to create a library for npm.
Uses **typescript** for types and **mocha** to tests.

## Usage

```bash
git clone git@github.com:chipp972/node-typescript-starter.git myProject
cd myProject
rm -rf .git
git init
npm i
```

Then you should modify the package.json and README.md with your project informations.

## Available commands

Use with `npm run <command>`

* `clean` - remove generated files
* `format` - format all `ts` files
* `lint` - lint source and tests files
* `test` - format, lint, typecheck and run tests with mocha
* `test-only` - run just the tests
* `test:watch` - re-run tests everytime a file changes
* `build` - typecheck and compile source files
* `build:watch` - re-compile sources everytime a file changes

Inspired by [this repo](https://github.com/jsynowiec/node-flowtype-boilerplate/blob/master/__tests__/main.test.js)
