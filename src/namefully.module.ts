import { NgModule, ModuleWithProviders } from '@angular/core'
import { Config } from 'namefully'

import { NamefullyComponent } from './namefully.component'
import { NamefullyPipe } from './namefully.pipe'
import { NamefullyDirective } from './namefully.directive'
import { CONFIG_TOKEN } from './namefully-config'

/**
 * Exposes a widget feature module comprising 4 Angular-based elements:
 *  - a component: <ngx-namefully></ngx-namefully>
 *  - a pipe: {{ ... | namefully }}
 *  - a service: NamefullyService
 *  - an attribute directive: [ngxNamefully]
 *
 * See the code documentation to see how to use each one of them.
 */
@NgModule({
    declarations: [NamefullyComponent, NamefullyPipe, NamefullyDirective],
    exports: [NamefullyComponent, NamefullyPipe, NamefullyDirective],
})
export class NamefullyModule {
    static forRoot(config?: Partial<Config>): ModuleWithProviders<NamefullyModule> {
        return {
            ngModule: NamefullyModule,
            providers: [
                {
                    provide: CONFIG_TOKEN,
                    useValue: {
                        default: Config.create(), // default defined by Namefully
                        custom: config, // custom defined by user
                    },
                },
            ],
        }
    }
}
