/**
 * Namefully module
 *
 * Created on March 26, 2020
 * @author Ralph Florent <ralflornt@gmail.com>
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NamefullyComponent } from './namefully.component';

@NgModule({
    imports: [CommonModule],
    declarations: [NamefullyComponent],
    exports: [NamefullyComponent]
})
export class NamefullyModule {}
