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
  private username;

  constructor(public router : Router ,public actroute: ActivatedRoute, public productsservice : ProductsService) {

    this.actroute.queryParams.subscribe(params =>
      { 
        this.username = params['user'];
       console.log(this.username);
      })

    productsservice.getmenwear().subscribe((response)=>
    {console.log('products',response);
    this.menwear=response;
  })}

  addtocart(product){

    var postData ={"name":product.name,"price":product.price,"username":this.username};
    console.log("men clothing", postData);
    this.productsservice.addtocart(postData);
    
  }
  
  navtocategory(){
    this.router.navigate(['categories'],{queryParams:{user:this.username||'Default'}});
  }
  navtocart(){
    this.router.navigate(['mycart'],{queryParams:{user:this.username||'Default'}});
    
  }


}
