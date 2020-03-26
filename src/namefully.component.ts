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
    template: '<span>{{ content }}</span>'
})
export class NamefullyComponent implements OnInit {
    @Input() raw: string | string[] | Name[] | Nama;
    @Input() options: Partial<Config>;

    content: string;

    ngOnInit(): void {
        const name = new Namefully(this.raw, this.options);
        this.content = name.full();
    }
}
