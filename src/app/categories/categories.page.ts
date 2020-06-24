import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  private total;
  private username;

  constructor(public router: Router,public actroute: ActivatedRoute, public productsservice : ProductsService) 
  { 
    this.actroute.queryParams.subscribe(params =>
    { 
      this.username = params['user'];
      console.log("Categories page constructor "+this.username);
    })
  }

  ngOnInit() {
  }
  navtowomenclothing(){
    this.router.navigate(['womenclothing'],{queryParams:{user:this.username||'Default'}});
    
  }
  navtomenclothing(){
    this.router.navigate(['menclothing'],{queryParams:{user:this.username||'Default'}});
    
  }
  navtoaccessories(){
    this.router.navigate(['accessories'],{queryParams:{user:this.username||'Default'}});
    
  }
  navtoelectronics(){
    this.router.navigate(['electronics'],{queryParams:{user:this.username||'Default'}});
    
  }
  navtocookware(){
    this.router.navigate(['cookware'],{queryParams:{user:this.username||'Default'}});
    
  }
  navtobooksandstationery(){
    this.router.navigate(['booksandstationery'],{queryParams:{user:this.username||'Default'}});
    
  }
  navtocart(){
    this.router.navigate(['mycart'],{queryParams:{user:this.username||'Default'}});
    
  }


}
