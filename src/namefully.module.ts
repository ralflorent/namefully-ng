/**
 * Namefully module
 *
 * Created on March 26, 2020
 * @author Ralph Florent <ralflornt@gmail.com>
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NamefullyComponent } from './namefully.component';
import { NamefullyPipe } from './namefully.pipe';

/**
 * Exposes a widget feature module comprising two Angular-based elements:
 *  - a component: NamefullyComponent
 *  - a pipe: NamefullyPipe
 *
 * See the doc comment to see how to use each one of them.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [NamefullyComponent, NamefullyPipe],
    exports: [NamefullyComponent, NamefullyPipe]
})
export class NamefullyModule {}
