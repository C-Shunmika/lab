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
        console.log("My cart page constructor "+this.username);
       // productsservice.getcart(this.username).subscribe((response)=>
    //{console.log('cart information',response);
    //this.carts=response;
     // })
     this.getcartinfo();
  })}
  getcartinfo(){
    this.productsservice.getcart(this.username).subscribe((response)=>{
      this.carts=response;
    });
  }
  
  removeProduct(product){
    console.log("Remove product from my cart page "+product.name+ ", user -"+product.username)
    this.productsservice.removeProduct(product).subscribe((response)=>
    {
      console.log('remove product respons-->'+JSON.stringify(response));

    })
    this.getcartinfo();
  }
  navtocategory(){
    this.router.navigate(['categories'],{queryParams:{user:this.username||'Default'}});
  }
  
  
}
