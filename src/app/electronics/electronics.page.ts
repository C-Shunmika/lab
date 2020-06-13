import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.page.html',
  styleUrls: ['./electronics.page.scss'],
})
export class ElectronicsPage {
  private electronics;
  private total;

  constructor(public router : Router, public productsservice : ProductsService) { 
    this.electronics=productsservice.getelectronics();
    console.log('products', this.electronics);
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
