import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private mencloths = [
    { id: 1, name: 'Shirts', price: '899.0'},
    { id: 2, name: 'Jeans', price: '999.0'},
    { id: 3, name: 'Trousers', price: '849.0'},
    { id: 4, name: 'T-Shirts', price: '399.0'},
    { id: 5, name: 'Dhotis', price: '499.0'},
    { id: 6, name: 'Coats', price: '899.0'},
  ];
  private womencloths = [
    { id: 1, name: 'Saree', price: '1200.0'},
    { id: 2, name: 'Jeans', price: '999.0'},
    { id: 3, name: 'Kurthis', price: '349.0'},
    { id: 4, name: 'lehenga', price: '1400.0'},
    { id: 5, name: 'Leggings', price: '200.0'},
    { id: 6, name: 'Frocks', price: '289.0'},
  ];
  private accessories = [
    { id: 1, name: 'Handbags', price: '700.0'},
    { id: 2, name: 'Wallet', price: '350.0'},
    { id: 3, name: 'jewellery', price: '599.0'},
    { id: 4, name: 'Watch', price: '1000.0'},
    { id: 5, name: 'Sneakers', price: '559.0'},
    { id: 6, name: 'Flipflops', price: '250.0'},
  ];
  private electronics = [
    { id: 1, name: 'Smart Phone', price: '12999.0'},
    { id: 2, name: 'Pendrives', price: '450.0'},
    { id: 3, name: 'Laptops', price: '42500.0'},
    { id: 4, name: 'Headphones', price: '450.0'},
    { id: 5, name: 'Power banks', price: '3500.0'},
    { id: 6, name: 'Chargers', price: '500.0'},
  ];
  private cookwares = [
    { id: 1, name: 'Cup and Saucer set', price: '5500.0'},
    { id: 2, name: 'Non-Stick cookware set', price: '4599.0'},
    { id: 3, name: 'Microwave Oven', price: '8999.0'},
    { id: 4, name: 'Grill Pan', price: '500.0'},
    { id: 5, name: 'Baking tray', price: '350.0'},
    { id: 6, name: 'Dinner plates', price: '550.0'},
  ];
  private booksandstationeries = [
    { id: 1, name: 'Unposted Letter', price: '289.0'},
    { id: 2, name: 'Roller ball pen', price: '20.0'},
    { id: 3, name: 'Quantitative aptitude', price: '789.0'},
    { id: 4, name: 'Pencil', price: '5.0'},
    { id: 5, name: 'Corrector Pens', price: '50.0'},
    { id: 6, name: 'Sherlock Holmes', price: '250.0'},
  ];

  private cart=[];

  constructor() { }

  getmencloths()
  {
    console.log('name',this.mencloths);
    return this.mencloths;
  }
  getwomencloths()
  {
    console.log('name',this.womencloths);
    return this.womencloths;
  }
  getaccessories()
  {
    console.log('name',this.accessories);
    return this.accessories;
  }
  getelectronics()
  {
    console.log('name',this.electronics);
    return this.electronics;
  }
  getcookwares()
  {
    console.log('name',this.cookwares);
    return this.cookwares;
  }
  getbooksandstationeries()
  {
    console.log('name',this.booksandstationeries);
    return this.booksandstationeries;
  }
  
  addtocart(product){
    this.cart.push(product);
  }
  getcart(){
    console.log('cartinfo',this.cart);
    return this.cart;
  }
  removeProduct(product){
    for(let [index, p] of this.cart.entries()){
      if(p.name === product.name){
        this.cart.splice(index, 1);
      }
    }
  }
}
