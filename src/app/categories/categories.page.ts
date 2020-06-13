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

  constructor(public router: Router, public productsservice : ProductsService) { }

  ngOnInit() {
  }
  navtowomenclothing(){
    this.router.navigate(['womenclothing']);
  }
  navtomenclothing(){
    this.router.navigate(['menclothing']);
  }
  navtoaccessories(){
    this.router.navigate(['accessories']);
  }
  navtoelectronics(){
    this.router.navigate(['electronics']);
  }
  navtocookware(){
    this.router.navigate(['cookware']);
  }
  navtobooksandstationery(){
    this.router.navigate(['booksandstationery']);
  }
  navtocart(){
    this.router.navigate(['mycart']);
    
  }

}
