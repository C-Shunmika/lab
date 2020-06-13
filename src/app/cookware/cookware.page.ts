import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-cookware',
  templateUrl: './cookware.page.html',
  styleUrls: ['./cookware.page.scss'],
})
export class CookwarePage  {
  private cookwares;
  private total;

  constructor(public router : Router, public productsservice : ProductsService) { 
    this.cookwares=productsservice.getwomencloths();
    console.log('products', this.cookwares);
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
