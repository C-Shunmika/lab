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
  private username;

  constructor(public router : Router ,public actroute: ActivatedRoute , public productsservice : ProductsService) {

    this.actroute.queryParams.subscribe(params =>
      { 
        this.username = params['user'];
       console.log(this.username);
      })

    productsservice.getcart().subscribe((response)=>
    {console.log('cart information',response);
    this.carts=response;
  })}
  
  removeProduct(product){
    this.productsservice.removeProduct(product);
  }
  navtocategory(){
    this.router.navigate(['categories'],{queryParams:{user:this.username||'Default'}});
  }
  
  
}
