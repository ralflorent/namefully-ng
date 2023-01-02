# @namefully/ng

[![npm version][version-img]][version-url]
[![CI build][ci-img]][ci-url]
[![MIT License][license-img]][license-url]

## Description

[namefully][namefully-url]'s [Angular](https://angular.io/) version.
[Try it live](https://stackblitz.com/edit/namefully-ng).

## Installation

```bash
npm i @namefully/ng
```

## Dependencies

- namefully ^1.2.0

## Peer Dependencies

- Angular

## Usage

```ts
import { Component, NgModule, OnInit } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Namefully, NameOrder } from 'namefully'

import { NamefullyModule, NamefullyService } from '@namefully/ng'

@Component({
    selector: 'app-root',
    template: `
        <h1>Welcome to Namefully</h1>
        <p>
            Using component: Hello,
            <ngx-namefully [raw]="name" [method]="'shorten'">! </ngx-namefully>!
        </p>
        <p>Using pipe: Hello, {{ name | namefully : null : 'shorten' }}!</p>
        <p>Using service: Hello, {{ superName.shorten() }}!</p>
        <p>
            Using directive: Hello,
            <span [ngxNamefully]="name" nfMethod="shorten"> </span>!
        </p>
    `,
})
class AppComponent implements OnInit {
    name = 'Mr Smith John Joe PhD'
    superName: Namefully

    constructor(private service: NamefullyService) {}

    ngOnInit(): void {
        this.superName = this.service.build(
            this.name,
            /* override forRoot config here */
        )
    }
}

@NgModule({
    imports: [BrowserModule, NamefullyModule.forRoot({ orderedBy: NameOrder.LAST_NAME })],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}
```

## Demo

To view a demo:

- clone or download a copy of the repository.
- install the dependencies using `npm install`
- finally, run `npm start`

The last command will bootstrap a demo by running a local web server. Use a
browser and type the following web address `localhost:4200` to load the content.

### Read more

As this is a wrapper of the core utility, visit the [main page][namefully-url]
to learn more about its key features, configurations, limitations, and APIs.

## Author

Developed by [Ralph Florent](https://github.com/ralflorent).

## License

The underlying content of this project is licensed under [MIT](LICENSE).

<!-- References -->

[namefully-url]: https://github.com/ralflorent/namefully
[version-img]: https://img.shields.io/npm/v/@namefully/ng
[version-url]: https://www.npmjs.com/package/@namefully/ng
[ci-img]: https://github.com/ralflorent/namefully-ng/workflows/build/badge.svg
[ci-url]: https://github.com/ralflorent/namefully-ng/actions/workflows/config.yml
[license-img]: https://img.shields.io/npm/l/@namefully/ng
[license-url]: https://opensource.org/licenses/MIT
