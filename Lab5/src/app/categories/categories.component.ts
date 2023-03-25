import { Component } from '@angular/core';
import { Category, categories } from 'src/items/categories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories: Category[];

  constructor() {
    this.categories = categories;
  }

  handleCategory(category: string) {
    console.log(category);
  }
}
