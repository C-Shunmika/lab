import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-menclothing',
  templateUrl: './menclothing.page.html',
  styleUrls: ['./menclothing.page.scss'],
})
export class MenclothingPage{
  private menwear;
  private total;

  constructor(public router : Router , public productsservice : ProductsService) {
    productsservice.getmenwear().subscribe((response)=>
    {console.log('products',response);
    this.menwear=response;
  })}

  addtocart(product){
    console.log("men clothing", product);
    this.productsservice.addtocart(product);
    
  }
  
  navtocategory(){
    this.router.navigate(['categories']);
  }


}
