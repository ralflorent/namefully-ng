/**
 * Namefully service
 *
 * Created on July 09, 2020
 * @author Ralph Florent <ralflornt@gmail.com>
 */
import { Injectable, Inject } from '@angular/core';
import { Namefully, Config, Name, Nama, Fullname } from 'namefully';
import { ConfigToken, CONFIG_TOKEN } from './namefully-config';

/**
 * Inject this service into your Angular component to handle person names
 *
 * @usageNotes
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
 * // in the AppComponent.ts
 * ```ts
 * @Component({ template: `<p>{{ superName.shorten() }}</p>` })
 * class AppComponent implements OnInit {
 *   name = 'Mr Smith John Joe PhD';
 *   superName: Namefully;
 *
 *   constructor(private service: NamefullyService) {}
 *
 *   ngOnInit(): void {
 *       this.superName = this.service.build(
 *           this.name,
 *            // override forRoot config here
 *           );
 *       }
 *   }
 *  ```
 */
@Injectable({ providedIn: 'root' })
export class NamefullyService {
    /**
     * Holds a json-like copy of the preset configuration injected by Angular
     */
    private readonly config: Config;

    constructor(@Inject(CONFIG_TOKEN) configToken: ConfigToken) {
        this.config = {
            ...configToken.default,
            ...configToken.custom,
        };
    }

    /**
     * Builds `Namefully`
     * @param raw data to construct the name parts of a full name
     * @param inlineConfig inline config to override preset forRoot(config)
     */
    build(
        raw: string | string[] | Name[] | Nama | Fullname,
        inlineConfig?: Partial<Config>
    ): Namefully {
        return new Namefully(raw, inlineConfig || this.config);
    }
}
