/**
 * Entrypoint for demo
 *
 * Created on March 26, 2020
 * @author Ralph Florent <ralflornt@gmail.com>
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app';

/**
 * Zone JS is required by default for Angular itself.
 */
import 'zone.js/dist/zone';  // Included with Angular CLI.

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.error(err));
