import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-cookware',
  templateUrl: './cookware.page.html',
  styleUrls: ['./cookware.page.scss'],
})
export class CookwarePage  {
  private cookware;
  private total;

  constructor(public router : Router , public productsservice : ProductsService) {
    productsservice.getcookware().subscribe((response)=>
    {console.log('products',response);
    this.cookware=response;
  })}
  
  addtocart(product){
    var postData ={"name":product.name,"price":product.price};
    console.log("cookware", postData);
    this.productsservice.addtocart(postData);
    
  }
 
  navtocategory(){
    this.router.navigate(['categories']);
  }

}
