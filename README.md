# banca-pueyo-front

## Table of Content
* [Introduction](#introduction)
* [Installation](#installation)
* [Start](#start)
* [Testing](#testing)
* [Production](#production)

## Introduction
Elements used in this project:
* [TypeScript](http://www.typescriptlang.org/) for the base language
  * with [Typings](https://github.com/typings/typings) for TypeScript definition manager
* [Gulp](http://gulpjs.com/) for workflow (from *serve*, *watch*, *compile*, *test* to *build*)
* [Bower](http://bower.io/) for front-end package manager
* [NPM](https://www.npmjs.com/) for angular2 & dev-tooling package manager
* [Live Server](https://github.com/tapio/live-server) for development server & reload capability
* [SystemJS](https://github.com/systemjs/systemjs) for module loader
* [Karma](http://karma-runner.github.io/) for test-runner
* [Jasmine](http://jasmine.github.io/) for test framework
* [Istanbul](https://github.com/gotwarlost/istanbul) for test coverage
  * with [Remap Istanbul](https://github.com/SitePen/remap-istanbul) for remapping Javascript to TypeScript coverage
* [SystemJS Builder](https://github.com/systemjs/builder) for module bundling in production

## Installation
Firstly, you need to have [Node.js](https://nodejs.org/en/) 
- Support from v0.12.10 (LTS) or higher 
- For v4, please use v4.3.x (LTS) or higher (**highly** recommended)
- For v5, please use v5.6.x or higher, here is [why](https://nodejs.org/en/blog/vulnerability/february-2016-security-releases/)

> You need v4.x or higher for [Protractor](https://angular.github.io/protractor/#/)

Then, install these packages globally (if they're not already in your system):   
```bash
npm install -g gulp bower
```

After that, just run:
```bash
npm install
```
and to install bower dependencies:
```bash
bower install
```

## Start
To start up the server, run:   
`gulp` or `gulp serve-dev`

Every changes to the file will refresh the browser automatically
and it'll also compile your changed TypeScripts files to Javascript files.

## Testing

### Unit testing
Run:
```bash
gulp test
```
and it'll compile all TypeScript files, start Karma, then remap Istanbul coverage so that it shows TypeScript coverage, not the transpiled Javascript coverage.

### Coverage
To see the generated Coverage report, just open the index.html file in a browser. 
The route to the generated index is `report/remap/html-report/index.html`.

### E2E testing
Firstly start the server:
```
gulp serve-dev
```
To begin testing, run:
```bash
gulp e2e
```
and it'll compile all E2E spec files in `/test/e2e/*.spec.ts`, boot up Selenium server then launches Chrome browser.

## Production
> All build tasks will run the `gulp test`, the bundle will only be created if the test passed.

To create a production build run:
```bash
gulp build
```
or to create production build and then serve it using `live-server`, run:
```bash
gulp serve-build
```
It uses [SystemJS Builder](https://github.com/systemjs/builder) to bundle the application so it's ready for production use
