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
  private username;

  constructor(public router : Router ,public actroute: ActivatedRoute, public productsservice : ProductsService) {

    this.actroute.queryParams.subscribe(params =>
      { 
        this.username = params['user'];
       console.log(this.username);
      })
      
    productsservice.getelectronics().subscribe((response)=>
    {console.log('products',response);
    this.electronics=response;
  })}

  
  addtocart(product){

    var postData ={"name":product.name,"price":product.price,"username":this.username};
    console.log("electronics", postData);
    this.productsservice.addtocart(postData);
    
  }
 
  navtocategory(){
    this.router.navigate(['categories'],{queryParams:{user:this.username||'Default'}});
  }
  navtocart(){
    this.router.navigate(['mycart'],{queryParams:{user:this.username||'Default'}});
    
  }


}
