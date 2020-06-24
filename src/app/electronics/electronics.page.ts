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

  constructor(public router : Router , public productsservice : ProductsService) {
    productsservice.getelectronics().subscribe((response)=>
    {console.log('products',response);
    this.electronics=response;
  })}

  addtocart(product){
    var postData ={"name":product.name,"price":product.price};
    console.log("electronics", postData);
    this.productsservice.addtocart(postData);
    
  }
 
  navtocategory(){
    this.router.navigate(['categories']);
  }

}
