import { Pipe, PipeTransform } from '@angular/core'
import { Namefully, Config, Name, JsonName, Parser } from 'namefully'
import { executeInnerMethod, MethodOf } from './namefully-utils'

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
 *    {{ 'John Joe Smith' | namefully : null : 'zip' : ['middleName'] }}
 */
@Pipe({ name: 'namefully' })
export class NamefullyPipe implements PipeTransform {
    /**
     * Formats the name as specified
     */
    transform(
        raw: string | string[] | Name[] | JsonName | Parser,
        options?: Partial<Config>,
        method?: MethodOf<Namefully>,
        args?: any[],
    ): string {
        const name = new Namefully(raw, options)
        return executeInnerMethod(name, name[method ?? 'birthName'], args)
    }
}
