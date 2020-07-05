/**
 * Namefully pipe
 *
 * Created on March 26, 2020
 * @author Ralph Florent <ralflornt@gmail.com>
 */
import { Pipe, PipeTransform } from '@angular/core';
import { Namefully, Config, Name, Nama, Fullname } from 'namefully';

/**
 * Handles a person name in the Latin alphabet from an Angular-pipe perspective.
 *
 * @see {@link https://angular.io/guide/pipes|Pipes} by Angular for further info
 * on how to use pipes.
 *
 * @usageNotes
 *     raw | namefully : options : method : args
 *
 * @example
 * Let's say we want to compress the name `John Joe Smith` to `John J. Smith`:
 *    {{ 'John Joe Smith' | namefully : {'orderedBy': 'firstname'} : 'compress' : [10, 'middlename'] }}
 */
@Pipe({
    name: 'namefully'
})
export class NamefullyPipe implements PipeTransform {
    /**
     * Formats the name as specified
     * @param raw data element of different shapes
     * @param {Partial<Config>} [options] parameters to customize how to render the name
     * @param {string} [method] name of a specific method to call to display a name part
     * @param {any[]} [args] a list of arguments for a given method
     */
    transform(
        raw: string | string[] | Name[] | Nama | Fullname,
        options?: Partial<Config>,
        method?: keyof Namefully,
        args?: any[]
    ): string {
        const name = new Namefully(raw, options);
        return this.getContent(name, name[method || 'birth'], args);
    }

    private getContent(context: any, fn: (params?: any) => any, vargs: any[]): string {
        const content = fn.apply(context, vargs);
        return Array.isArray(content) ? content.join(' ') : content;
    }
}
