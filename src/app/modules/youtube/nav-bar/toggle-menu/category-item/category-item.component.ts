import { Component, Input, OnInit } from '@angular/core';
import { CategoryItem } from 'src/app/core/interfaces/category-item';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {
  @Input() itemData: CategoryItem = { name: '', iconName: '' }
  constructor() { }

  ngOnInit(): void {
  }

}
