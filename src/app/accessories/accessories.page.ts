import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.page.html',
  styleUrls: ['./accessories.page.scss'],
})
export class AccessoriesPage {
  private accessories;
  private total;

  constructor(public router : Router, public productsservice : ProductsService) {
    this.accessories=productsservice.getaccessories();
    console.log('products', this.accessories);
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
