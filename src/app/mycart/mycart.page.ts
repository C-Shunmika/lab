import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.page.html',
  styleUrls: ['./mycart.page.scss'],
})
export class MycartPage  {
  private carts;
  private total;

  constructor(public router : Router, public productsservice : ProductsService) { 
    this.carts=productsservice.getcart();
    console.log('products', this.carts);
  }
  removeProduct(product){
    this.productsservice.removeProduct(product);
    this.total=this.productsservice.getcart().length;
  }
  navtocategory(){
    this.router.navigate(['categories']);
  }
  
}
