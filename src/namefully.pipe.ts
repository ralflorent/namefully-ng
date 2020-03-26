/**
 * Namefully pipe
 *
 * Created on March 26, 2020
 * @author Ralph Florent <ralflornt@gmail.com>
 */
import { Pipe, PipeTransform } from '@angular/core';

import { Namefully, Config } from 'namefully'

@Pipe({
    name: 'namefully'
})
export class NamefullyPipe implements PipeTransform {
    transform(
        raw: string,
        options?: Partial<Config>,
        method?: 'px' | 'sx' | 'fn' | 'ln' | 'mn' | 'full' | 'inits',
        args?: any[]
    ): string {
        const name = new Namefully(raw, options);
        return this.getContent(name, name[method || 'full'], args);
    }

    private getContent(context: any, fn: (params?: any) => any, vargs: any[]): string {
        const content = fn.apply(context, vargs);
        return Array.isArray(content) ? content.join(' ') : content;
    }
}
