import { Component, OnInit } from '@angular/core';
import { categoryList } from 'src/app/core/data/category-list';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  categoryList = categoryList;
  constructor() { }

  ngOnInit(): void {
  }
  showToggleMenu(){
   document.querySelector('.toggle-menu')?.classList.toggle('toggler-click');
  }
}
