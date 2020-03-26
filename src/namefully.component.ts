/**
 * Namefully component
 *
 * Created on March 26, 2020
 * @author Ralph Florent <ralflornt@gmail.com>
 */
import { Component, Input, OnInit } from '@angular/core';

import { Namefully, Name, Nama, Config } from 'namefully';

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
