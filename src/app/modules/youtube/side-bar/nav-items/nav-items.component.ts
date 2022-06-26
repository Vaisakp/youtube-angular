import { Component, Input, OnInit } from '@angular/core';
import { SideNavItem } from 'src/app/core/interfaces/side-nav-item';

@Component({
  selector: 'app-nav-items',
  templateUrl: './nav-items.component.html',
  styleUrls: ['./nav-items.component.css']
})
export class NavItemsComponent implements OnInit {
  @Input() itemData: SideNavItem = {name: "", class: ""};
  constructor() { }
  ngOnInit(): void {
  }

}
