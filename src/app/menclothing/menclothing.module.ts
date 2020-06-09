import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenclothingPageRoutingModule } from './menclothing-routing.module';

import { MenclothingPage } from './menclothing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenclothingPageRoutingModule
  ],
  declarations: [MenclothingPage]
})
export class MenclothingPageModule {}
