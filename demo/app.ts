/**
 * App module for the demo
 *
 * Created on March 26, 2020
 * @author Ralph Florent <ralflornt@gmail.com>
 */
import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Namefully } from 'namefully';

import { NamefullyModule, NamefullyService } from '../src/public-api';

@Component({
    selector: 'app-root',
    template: `
        <h1> Welcome to Namefully </h1>
        <p>
            Using component: Hello,
            <ngx-namefully
                [raw]="name"
                [options]="{ orderedBy: 'ln' }"
                [method]="'shorten'"
                >!
            </ngx-namefully>!
        </p>
        <p>Using pipe: Hello,
            {{ name | namefully : { orderedBy:'ln' } : 'shorten' }}!
        </p>
        <p>Using service: Hello, {{ superName.shorten() }}!</p>
        <p>Using directive: Hello,
            <span
                [ngxNamefully]="name"
                [nfOptions]="{ orderedBy: 'ln' }"
                nfMethod="shorten"
            >
            </span>!
        </p>
    `
})
class AppComponent implements OnInit {
    name = 'Mr Smith John Joe PhD';
    superName: Namefully;

    constructor(private service: NamefullyService) {}

    ngOnInit(): void {
        this.superName = this.service.build(
            this.name,
            /* override forRoot config here */
        );
    }
}

@NgModule({
    imports: [
        BrowserModule,
        NamefullyModule.forRoot({ orderedBy: 'lastname' })
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
