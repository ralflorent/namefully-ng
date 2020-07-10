/**
 * Namefully pipe
 *
 * Created on March 26, 2020
 * @author Ralph Florent <ralflornt@gmail.com>
 */
import { Pipe, PipeTransform } from '@angular/core';
import { Namefully, Config, Name, Nama, Fullname } from 'namefully';
import { executeInnerMethod } from './namefully-utils';

/**
 * Use Angular pipe to transform (handle) person names
 *
 * @see {@link https://angular.io/guide/pipes|Pipes} by Angular for further info
 * on how to use pipes.
 *
 * @usageNotes
 *     raw | namefully : options : method : args
 *
 * @example
 * Let's say we want to compress the name `John Joe Smith` to `John J. Smith`:
 *    {{ 'John Joe Smith' | namefully : {'orderedBy': 'fn'} : 'zip' : ['mn'] }}
 */
@Pipe({ name: 'namefully' })
export class NamefullyPipe implements PipeTransform {
    /**
     * Formats the name as specified
     */
    transform(
        raw: string | string[] | Name[] | Nama | Fullname,
        options?: Partial<Config>,
        method?: keyof Namefully,
        args?: any[]
    ): string {
        const name = new Namefully(raw, options);
        return executeInnerMethod(name, name[method || 'birth'], args);
    }
}
