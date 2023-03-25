import { Component } from '@angular/core';
import { categories, Category } from 'src/items/categories';
import { products } from 'src/items/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  items = products;
  categories = categories;
  allItems = this.items;

  handleCategory(category: string) {
    this.allItems = this.items.filter((item: { category: Category }) => item.category.name === category);
  }
}
