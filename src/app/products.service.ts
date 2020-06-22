import { Injectable } from '@angular/core';
import {HttpClientModule,HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private menwear = [];
  private womenwear = [];
  private accessories = [];
  private electronics = [];
  private cookware = [];
  private booksandstationery = [];
  
  
  private cart=[];
  public producturl="http://localhost:8081";
 constructor(public httpclient:HttpClient) { }

 getmenwear()
  {
    console.log('name',this.menwear);
    return this.httpclient.get(this.producturl+'/getmenwear');
  }

  getwomenwear()
  {
    console.log('name',this.womenwear);
    return this.httpclient.get(this.producturl+'/getwomenwear');
  }
  getaccessories()
  {
    console.log('name',this.accessories);
    return this.httpclient.get(this.producturl+'/getaccessories');
  }
  getelectronics()
  {
    console.log('name',this.electronics);
    return this.httpclient.get(this.producturl+'/getelectronics');
  }
  getcookware()
  {
    console.log('name',this.cookware);
    return this.httpclient.get(this.producturl+'/getcookware');
  }
  getbooksandstationery()
  {
    console.log('name',this.booksandstationery);
    return this.httpclient.get(this.producturl+'/getbooksandstationery');
  }
  
  addtocart(product){
    return this.httpclient.post("this.producturl+'/addproduct'",product);
  }
  getcart(){
    console.log('cartinfo',this.cart);
    return this.httpclient.get(this.producturl+'/getcart');
  }
  removeProduct(product){
    for(let [index, p] of this.cart.entries()){
      if(p.name === product.name){
        this.cart.splice(index, 1);
      }
    }
  }
}
