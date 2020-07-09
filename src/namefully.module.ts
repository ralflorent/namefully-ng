/**
 * Namefully module
 *
 * Created on March 26, 2020
 * @author Ralph Florent <ralflornt@gmail.com>
 */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Config, CONFIG } from 'namefully';
import { NamefullyComponent } from './namefully.component';
import { NamefullyPipe } from './namefully.pipe';
import { CONFIG_TOKEN } from './namefully-config';

/**
 * Exposes a widget feature module comprising 3 Angular-based elements:
 *  - a component: NamefullyComponent
 *  - a pipe: NamefullyPipe
 *  - a service: NamefullyService
 *
 * See the doc comment to see how to use each one of them.
 */
@NgModule({
    declarations: [NamefullyComponent, NamefullyPipe],
    exports: [NamefullyComponent, NamefullyPipe]
})
export class NamefullyModule {
    static forRoot(config: Partial<Config> = {}): ModuleWithProviders<NamefullyModule> {
        return {
            ngModule: NamefullyModule,
            providers: [
                {
                    provide: CONFIG_TOKEN,
                    useValue: {
                        default: CONFIG, // default defined by Namefully
                        custom: config // custom defined by user
                    }
                }
            ]
        };
    }

}
