import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-booksandstationery',
  templateUrl: './booksandstationery.page.html',
  styleUrls: ['./booksandstationery.page.scss'],
})
export class BooksandstationeryPage {
  private booksandstationery;
  private total;
  private username;

  constructor(public router : Router ,public actroute: ActivatedRoute, public productsservice : ProductsService) {

    this.actroute.queryParams.subscribe(params =>
      { 
        this.username = params['user'];
       console.log(this.username);
      })

    productsservice.getbooksandstationery().subscribe((response)=>
    {console.log('products',response);
    this.booksandstationery=response;
  })}

  addtocart(product){
    var postData ={"name":product.name,"price":product.price};
    console.log("books", postData);
    this.productsservice.addtocart(postData);
    
  }
 
  navtocategory(){
    this.router.navigate(['categories'],{queryParams:{user:this.username||'Default'}});
  }
  navtocart(){
    this.router.navigate(['mycart'],{queryParams:{user:this.username||'Default'}});
    
  }

}
