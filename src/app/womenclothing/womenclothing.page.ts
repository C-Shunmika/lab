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
  private username;

  constructor(public router : Router ,public actroute: ActivatedRoute, public productsservice : ProductsService) {

    this.actroute.queryParams.subscribe(params =>
      { 
        this.username = params['user'];
       console.log(this.username);
      })

    productsservice.getwomenwear().subscribe((response)=>
    {console.log('products',response);
    this.womenwear=response;
  })}
  
  addtocart(product){

    var postData ={"name":product.name,"price":product.price,"username":this.username};
    console.log("women clothing", postData);
    this.productsservice.addtocart(postData);
    
  }
  
  navtocategory(){
    this.router.navigate(['categories'],{queryParams:{user:this.username||'Default'}});
  }
  navtocart(){
    this.router.navigate(['mycart'],{queryParams:{user:this.username||'Default'}});
    
  }


}
