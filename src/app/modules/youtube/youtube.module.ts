import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubeRoutingModule } from './youtube-routing.module';
import { YoutubeComponent } from './youtube.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NavItemsComponent } from './side-bar/nav-items/nav-items.component';
import {MatIconModule} from '@angular/material/icon';
import { NavSearchComponent } from './nav-bar/nav-search/nav-search.component';
import { CategorySelectorComponent } from './category-selector/category-selector.component';
import { SharedModule } from 'src/app/core/shared/shared/shared.module';


@NgModule({
  declarations: [
    YoutubeComponent,
    NavBarComponent,
    SideBarComponent,
    NavItemsComponent,
    NavSearchComponent,
    CategorySelectorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    YoutubeRoutingModule,
    MatIconModule
  ]
})
export class YoutubeModule { }
