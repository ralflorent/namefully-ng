/**
 * Namefully component
 *
 * Created on March 26, 2020
 * @author Ralph Florent <ralflornt@gmail.com>
 */
import { Component, Input, OnInit } from '@angular/core';
import { Namefully, Name, Nama, Config } from 'namefully';

/**
 * Represents an Angular-based component that wraps up the basic functionality
 * of namefully. Remember, if not satisfied, one can always use some of the core
 * elements exported from `namefully` to fully enjoy the benefits offered by it.
 *
 * @param raw data element of different shapes
 * @param {Partial<Config>} [options] parameters to customize how to render the name
 * @param {string} [method] name of a specific method to call to display a name part
 * @param {any[]} [args] a list of arguments for a given method
 *
 * @usageNotes
 * ```html
 *     <ng-namefully
 *          [raw]="..."
 *          [options]="..."
 *          [method]="..."
 *          [args]="..."
 *          >
 *     </ng-namefully>
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
 *   imports: [BrowserModule, NamefullyModule],
 *   declarations: [AppComponent],
 *   bootstrap: [AppComponent]
 * })
 * export class AppModule {}
 * ```
 *
 * // in the html template:
 * ```html
 *     <ng-namefully
 *          [raw]="name"
 *          [options]="options"
 *          [method]="method"
 *          [args]="args"
 *          >
 *     </ng-namefully>
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
 */
@Component({
    selector: 'ng-namefully',
    template: '{{content}}'
})
export class NamefullyComponent implements OnInit {
    @Input() raw: string | string[] | Name[] | Nama;
    @Input() options?: Partial<Config>;
    @Input() method?: keyof Namefully;
    @Input() args?: any[];

    content: string;

    ngOnInit(): void {
        const name = new Namefully(this.raw, this.options);
        this.content = this.getContent(name, name[this.method || 'full'], this.args);
    }

    private getContent(context: any, fn: (params?: any) => any, vargs: any[]): string {
        const content = fn.apply(context, vargs);
        return Array.isArray(content) ? content.join(' ') : content;
    }
}
