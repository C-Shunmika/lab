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

  constructor(public router : Router , public productsservice : ProductsService) {
    productsservice.getbooksandstationery().subscribe((response)=>
    {console.log('products',response);
    this.booksandstationery=response;
  })}

   addtocart(product){
    this.productsservice.addtocart(product);
    this.productsservice.getcart();
    
  }
 
  navtocategory(){
    this.router.navigate(['categories']);
  }

}
