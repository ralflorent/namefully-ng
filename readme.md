# @namefully/ng

[![npm version][version-img]][version-url]
[![CircleCI][circleci-img]][circleci-url]
[![GPL-3.0 License][license-img]][license-url]

## Description

[namefully][namefully-url]'s [Angular](https://angular.io/) version.

## Installation

```bash
npm i @namefully/ng
```

## Dependencies

- namefully ^1.0.6

## Peer Dependencies

- Angular

## Usage

```ts
import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NamefullyModule } from '@namefully/ng';

@Component({
    selector: 'app-root',
    template: `
        <h1> Welcome to Namefully </h1>
        <a>
            <ng-namefully
                [raw]="name"
                [options]="options"
                [method]="method"
                [args]="args"
                >
            </ng-namefully>
        </a>
        <p>Hello, {{ name | namefully : options : 'fn' }}!</p>
    `
})
class AppComponent implements OnInit {
    name = 'Mr Smith John Joe PhD'
    options = { orderedBy: 'lastname' }
    method = 'shorten'
    args = ['firstname']
    ngOnInit(): void {}
}

@NgModule({
    imports: [BrowserModule, NamefullyModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
```

## Demo

To view a demo:

- clone or download a copy of the repository.
- install the dependencies `npm install`
- finally, run `npm start`

The last command will bootstrap a demo by running a local web server. Use a
browser and type the following web address `localhost:4200` to load the content.

### Read more

As this is a wrapper of the core utility, visit the [main page][namefully-url]
to learn more about its key features, configurations, limitations, and API.

## Author

Developed by [Ralph Florent](https://github.com/ralflorent).

## License

The underlying content of this project is licensed under [GPL-3.0](LICENSE).

[namefully-url]: https://github.com/ralflorent/namefully

[version-img]: https://img.shields.io/npm/v/@namefully/ng
[version-url]: https://www.npmjs.com/package/@namefully/ng
[circleci-img]: https://circleci.com/gh/ralflorent/namefully-ng.svg?style=shield
[circleci-url]: https://circleci.com/gh/ralflorent/namefully-ng
[license-img]: https://img.shields.io/npm/l/@namefully/ng
[license-url]: http://www.gnu.org/licenses/gpl-3.0.en.html
