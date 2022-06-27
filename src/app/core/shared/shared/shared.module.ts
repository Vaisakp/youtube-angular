import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalMouseScrollDirective } from '../../directives/horizontal-mouse-scroll.directive';



@NgModule({
  declarations: [
    HorizontalMouseScrollDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HorizontalMouseScrollDirective
  ]
})
export class SharedModule { }
