import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent
{
  title = 'producto-angular-example';

  constructor()
  {
    const total = this.getTotalPrice();
    console.log(total);
  }

  products: Product[] =
  [
    {code: "457hkns8", name: "Pack Palmeritas", price: 1.80, units: 2},
    {code: "457hkns9", name: "Palmera individual", price: 0.80, units: 1}
  ];

  getTotalPrice(): number{
    let total = 0;
    for (let i = 0; i < this.products.length; i++)
    {
      total += this.products[i].price * this.products[i].units;
    }
    return total;
  }
}
