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

@NgModule({
    imports: [CommonModule],
    declarations: [NamefullyComponent, NamefullyPipe],
    exports: [NamefullyComponent, NamefullyPipe]
})
export class NamefullyModule {}
