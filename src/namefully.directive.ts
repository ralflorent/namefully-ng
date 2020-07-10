/**
 * Namefully Directive
 *
 * Created on July 10, 2020
 * @author Ralph Florent <ralflornt@gmail.com>
 */
import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Namefully, Name, Nama, Fullname, Config } from 'namefully';
import { executeInnerMethod } from './namefully-utils';

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
 * class AppComponent implements OnInit {
 *    name = 'Mr Smith John Joe PhD'
 *    options = { orderedBy: 'lastname' }
 *    method = 'shorten'
 *    args = ['firstname']
 *    ngOnInit(): void {}
 * }
 * ```
 * @see https://angular.io/guide/attribute-directives
 */
@Directive({ selector: '[ngxNamefully]'})
export class NamefullyDirective implements AfterViewInit {

    @Input('ngxNamefully') raw: string | string[] | Name[] | Nama | Fullname;
    // tslint:disable-next-line:no-input-rename
    @Input('nfOptions') options?: Partial<Config>;
    // tslint:disable-next-line:no-input-rename
    @Input('nfMethod') method?: keyof Namefully;
    // tslint:disable-next-line:no-input-rename
    @Input('nfArgs') args?: any[];

    constructor(private elRef: ElementRef<HTMLElement>) {}

    ngAfterViewInit() {
        const name = new Namefully(this.raw, this.options);
        this.elRef.nativeElement.innerHTML = executeInnerMethod(
            name,
            name[this.method || 'birth'],
            this.args
        );
    }
}
