/**
 * App module for the demo
 *
 * Created on March 26, 2020
 * @author Ralph Florent <ralflornt@gmail.com>
 */
import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NamefullyModule } from '../src/index';

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
