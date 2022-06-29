import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubeRoutingModule } from './youtube-routing.module';
import { YoutubeComponent } from './youtube.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NavItemsComponent } from './side-bar/nav-items/nav-items.component';
import { MatIconModule} from '@angular/material/icon';
import { NavSearchComponent } from './nav-bar/nav-search/nav-search.component';
import { CategorySelectorComponent } from './nav-bar/category-selector/category-selector.component';
import { SharedModule } from 'src/app/core/shared/shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ToggleMenuComponent } from './nav-bar/toggle-menu/toggle-menu.component';
import { CategoryItemComponent } from './nav-bar/toggle-menu/category-item/category-item.component';
import { PremiumAddComponent } from './home/premium-add/premium-add.component';
import { SmallVideoCardComponent } from './home/small-video-card/small-video-card.component';
import { WatchComponent } from './watch/watch.component';


@NgModule({
  declarations: [
    YoutubeComponent,
    NavBarComponent,
    SideBarComponent,
    NavItemsComponent,
    NavSearchComponent,
    CategorySelectorComponent,
    HomeComponent,
    ToggleMenuComponent,
    CategoryItemComponent,
    PremiumAddComponent,
    SmallVideoCardComponent,
    WatchComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    YoutubeRoutingModule,
    MatIconModule
  ]
})
export class YoutubeModule { }
