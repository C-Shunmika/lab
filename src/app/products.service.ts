import { Injectable } from '@angular/core';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

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
    console.log("add cart info",product);
    this.sendPostRequest(product).subscribe((response)=>    {
      console.log(response);
    });
    
  }
  sendPostRequest(product):Observable<any> {
    console.log("Send post request");
    return this.httpclient.post("http://127.0.0.1:8081/addproduct", product);
  }
  getcart(){
    console.log('cartinfo',this.cart);
    return this.httpclient.get(this.producturl+'/getcart');
  }
  removeProduct(product){
    console.log("removing from cart");
    return this.httpclient.get(this.producturl+'/removecart');
  }
}
