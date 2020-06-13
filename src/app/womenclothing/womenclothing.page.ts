import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-womenclothing',
  templateUrl: './womenclothing.page.html',
  styleUrls: ['./womenclothing.page.scss'],
})
export class WomenclothingPage {
  private womencloths;
  private total;

  constructor(public router : Router, public productsservice : ProductsService) {
    this.womencloths=productsservice.getwomencloths();
    console.log('products', this.womencloths);
   }
   addtocart(product){
    this.productsservice.addtocart(product);
    this.productsservice.getcart();
    this.total=this.productsservice.getcart().length;
  }
  
  navtocategory(){
    this.router.navigate(['categories']);
  }


}
