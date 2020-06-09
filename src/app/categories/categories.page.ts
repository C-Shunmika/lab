import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  womenclothing(){
    this.router.navigate(['womenclothing']);
  }
  menclothing(){
    this.router.navigate(['menclothing']);
  }
  accessories(){
    this.router.navigate(['accessories']);
  }
  electronics(){
    this.router.navigate(['electronics']);
  }
  cookware(){
    this.router.navigate(['cookware']);
  }
  booksandstationery(){
    this.router.navigate(['booksandstationery']);
  }
 
  

}
