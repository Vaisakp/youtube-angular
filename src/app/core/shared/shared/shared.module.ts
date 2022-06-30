import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalMouseScrollDirective } from '../../directives/horizontal-mouse-scroll.directive';
import { FormsModule } from '@angular/forms';
import { YouTubePlayerModule } from '@angular/youtube-player';



@NgModule({
  declarations: [
    HorizontalMouseScrollDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    YouTubePlayerModule
  ],
  exports: [
    HorizontalMouseScrollDirective,
    FormsModule,
    YouTubePlayerModule
  ]
})
export class SharedModule { }
