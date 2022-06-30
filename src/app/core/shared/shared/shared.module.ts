import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalMouseScrollDirective } from '../../directives/horizontal-mouse-scroll.directive';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HorizontalMouseScrollDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HorizontalMouseScrollDirective,
    FormsModule
  ]
})
export class SharedModule { }
