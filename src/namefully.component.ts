import { Component, Input, OnInit } from '@angular/core'
import { Namefully, Name, JsonName, Parser, Config } from 'namefully'

import { executeInnerMethod, MethodOf } from './namefully-utils'

/**
 * Represents an Angular-based component that wraps up the basic functionality
 * of namefully. Remember, if not satisfied, one can always use some of the core
 * elements exported from `namefully` to fully enjoy the benefits offered by it.
 *
 * @usageNotes
 * ```html
 *     <ngx-namefully
 *          [raw]="..."
 *          [options]="..."
 *          [method]="..."
 *          [args]="..."
 *          >
 *     </ngx-namefully>
 * ```
 *
 * @example
 * - import the module first to your app
 * - then use it with the following props bindings
 * // in the AppModule for example:
 * ```ts
 * import { NamefullyModule } from '@namefully/ng'
 *
 * @NgModule({
 *   imports: [BrowserModule, NamefullyModule.forRoot(...)],
 *   declarations: [AppComponent],
 *   bootstrap: [AppComponent]
 * })
 * export class AppModule {}
 * ```
 *
 * // in the html template:
 * ```html
 *     <ngx-namefully
 *          [raw]="name"
 *          [options]="options"
 *          [method]="method"
 *          [args]="args"
 *          >
 *     </ngx-namefully>
 * ```
 *
 * // in the AppComponent.ts
 * ```ts
 * class AppComponent {
 *    name = 'Mr Smith John Joe PhD'
 *    options = { orderedBy: 'lastName' }
 *    method = 'shorten'
 *    args = []
 * }
 * ```
 */
@Component({
    selector: 'ngx-namefully',
    template: '{{content}}',
})
export class NamefullyComponent implements OnInit {
    @Input() raw: string | string[] | Name[] | JsonName | Parser
    @Input() options?: Partial<Config>
    @Input() method?: MethodOf<Namefully>
    @Input() args?: any[]

    content: string

    ngOnInit(): void {
        const name = new Namefully(this.raw, this.options)
        this.content = executeInnerMethod(name, name[this.method || 'birthName'], this.args)
    }
}
