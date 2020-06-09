import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WomenclothingPageRoutingModule } from './womenclothing-routing.module';

import { WomenclothingPage } from './womenclothing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WomenclothingPageRoutingModule
  ],
  declarations: [WomenclothingPage]
})
export class WomenclothingPageModule {}
