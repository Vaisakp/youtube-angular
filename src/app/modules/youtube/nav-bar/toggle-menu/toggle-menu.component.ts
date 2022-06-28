import { Component, OnInit } from '@angular/core';
import { mainCategoryItems } from 'src/app/core/data/main-category-items';
import { subCategoryItems } from 'src/app/core/data/sub-category-items';
import { CategoryItem } from 'src/app/core/interfaces/category-item';

@Component({
  selector: 'app-toggle-menu',
  templateUrl: './toggle-menu.component.html',
  styleUrls: ['./toggle-menu.component.css']
})
export class ToggleMenuComponent implements OnInit {
  mainCategoryItems: Array<CategoryItem> = mainCategoryItems;
  subCategoryItems: Array<CategoryItem> = subCategoryItems;
  constructor() { }

  ngOnInit(): void {
  }

  hideToggleMenu(){
    document.querySelector('.toggle-menu')?.classList.toggle('toggler-click');
  }
}
