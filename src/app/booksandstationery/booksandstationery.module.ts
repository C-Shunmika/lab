import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BooksandstationeryPageRoutingModule } from './booksandstationery-routing.module';

import { BooksandstationeryPage } from './booksandstationery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BooksandstationeryPageRoutingModule
  ],
  declarations: [BooksandstationeryPage]
})
export class BooksandstationeryPageModule {}
