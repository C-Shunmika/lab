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

  constructor(public router : Router , public productsservice : ProductsService) {
    productsservice.getaccessories().subscribe((response)=>
    {console.log('products',response);
    this.accessories=response;
  })}
  addtocart(product){
    var postData ={"name":product.name,"price":product.price};
    console.log("accessories", postData);
    this.productsservice.addtocart(postData);
    
  }
  
  navtocategory(){
    this.router.navigate(['categories']);
  }

}
