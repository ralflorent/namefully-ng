import { InjectionToken } from '@angular/core'
import { Config } from 'namefully'

export interface ConfigToken {
    default: Config
    custom: Partial<Config>
}

export const CONFIG_TOKEN = new InjectionToken<ConfigToken>('ConfigToken')
