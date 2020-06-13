import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-menclothing',
  templateUrl: './menclothing.page.html',
  styleUrls: ['./menclothing.page.scss'],
})
export class MenclothingPage{
  private mencloths;
  private total;

  constructor(public router : Router, public productsservice : ProductsService) { 
    this.mencloths=productsservice.getmencloths();
    console.log('products', this.mencloths);

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
