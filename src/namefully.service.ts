/**
 * Namefully service
 *
 * Created on July 09, 2020
 * @author Ralph Florent <ralflornt@gmail.com>
 */
import { Injectable, Inject } from '@angular/core';
import { Namefully, Config, Name, Nama, Fullname } from 'namefully';
import { ConfigToken, CONFIG_TOKEN } from './namefully-config';


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
