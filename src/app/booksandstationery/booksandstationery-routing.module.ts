import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksandstationeryPage } from './booksandstationery.page';

const routes: Routes = [
  {
    path: '',
    component: BooksandstationeryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksandstationeryPageRoutingModule {}
