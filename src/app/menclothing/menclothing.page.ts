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
    var postData ={"name":product.name,"price":product.price};
    console.log("men clothing", postData);
    this.productsservice.addtocart(postData);
    
  }
  
  navtocategory(){
    this.router.navigate(['categories']);
  }


}
