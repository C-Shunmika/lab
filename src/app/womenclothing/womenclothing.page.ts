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
    var postData ={"name":product.name,"price":product.price};
    console.log("women clothing", postData);
    this.productsservice.addtocart(postData);
    
  }
  
  navtocategory(){
    this.router.navigate(['categories']);
  }


}
