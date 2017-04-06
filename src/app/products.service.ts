import { Injectable } from '@angular/core';
import {Category, Product} from './product';

@Injectable()
export class ProductsService {
  private products: Product[] = [{
    id: 1,
    name: 'Cool shirt',
    description: 'This shirt can be bought',
    price: 12,
    isAvailable: true,
    quantity: 1,
    category: Category.PANTS
  }];

  constructor() { }
  get(): any {
    return this.products;
  }
}
