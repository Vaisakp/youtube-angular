import { Component, OnInit } from '@angular/core';
import { sideNavItems } from 'src/app/core/data/side-nav-items';
import { SideNavItem } from 'src/app/core/interfaces/side-nav-item';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  sideNavItems: Array<SideNavItem> = sideNavItems;
  constructor() { }

  ngOnInit(): void {
  }

}
