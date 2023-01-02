/**
 * App module for the demo
 */
import { Component, NgModule, OnInit } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Namefully, NameOrder } from 'namefully'

import { NamefullyModule, NamefullyService } from '../src/public-api'

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
