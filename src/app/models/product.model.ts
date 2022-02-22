export class Product{
  name: string;
  code: string;
  price: number;
  units: number;

  constructor(name: string, code: string, price: number, units: number)
  {
    this.name = name;
    this.code = code;
    this.price = price;
    this.units = units;
  }
}
