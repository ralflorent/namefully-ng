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
        <h1> Welcome to the Demo </h1>
        <ng-namefully raw='John Smith'> </ng-namefully>
    `
})
class AppComponent implements OnInit {
    ngOnInit(): void {}
}

@NgModule({
    imports: [BrowserModule, NamefullyModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
