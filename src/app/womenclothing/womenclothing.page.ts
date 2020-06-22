import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-womenclothing',
  templateUrl: './womenclothing.page.html',
  styleUrls: ['./womenclothing.page.scss'],
})
export class WomenclothingPage {
  private womenwear;
  private total;

  constructor(public router : Router , public productsservice : ProductsService) {
    productsservice.getwomenwear().subscribe((response)=>
    {console.log('products',response);
    this.womenwear=response;
  })}

   addtocart(product){
    this.productsservice.addtocart(product);
    this.productsservice.getcart();
    
  }
  
  navtocategory(){
    this.router.navigate(['categories']);
  }


}
