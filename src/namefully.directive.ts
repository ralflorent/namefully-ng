import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core'
import { Namefully, Name, JsonName, Parser, Config } from 'namefully'

import { executeInnerMethod, MethodOf } from './namefully-utils'

/**
 * Represents an Angular-based attribute directive that wraps up namefully's
 * core functionalities. Remember, if not satisfied, you can always use some of
 * of the core elements exported from `namefully` instead.
 *
 * @usageNotes
 * ```html
 *     <p [ngxNamefully]="..."
 *          [nfOptions]="..."
 *          [nfMethod]="..."
 *          [nfArgs]="..."
 *          >
 *     </p>
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
 *     <span [ngxNamefully]="name"
 *          [nfOptions]="options"
 *          [nfMethod]="method"
 *          [nfArgs]="args"
 *          >
 *     </span>
 * ```
 *
 * // in the AppComponent.ts
 * ```ts
 * class AppComponent {
 *    name = 'Mr Smith John Joe PhD'
 *    options = { orderedBy: 'lastname' }
 *    method = 'shorten'
 *    args = []
 * }
 * ```
 * @see https://angular.io/guide/attribute-directives
 */
@Directive({ selector: '[ngxNamefully]' })
export class NamefullyDirective implements AfterViewInit {
    @Input('ngxNamefully') raw: string | string[] | Name[] | JsonName | Parser
    // tslint:disable-next-line:no-input-rename
    @Input('nfOptions') options?: Partial<Config>
    // tslint:disable-next-line:no-input-rename
    @Input('nfMethod') method?: MethodOf<Namefully>
    // tslint:disable-next-line:no-input-rename
    @Input('nfArgs') args?: any[]

    constructor(private elRef: ElementRef<HTMLElement>) {}

    ngAfterViewInit() {
        const name = new Namefully(this.raw, this.options)
        this.elRef.nativeElement.innerHTML = executeInnerMethod(name, name[this.method ?? 'birthName'], this.args)
    }
}
