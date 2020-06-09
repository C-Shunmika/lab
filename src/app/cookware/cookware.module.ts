import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CookwarePageRoutingModule } from './cookware-routing.module';

import { CookwarePage } from './cookware.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CookwarePageRoutingModule
  ],
  declarations: [CookwarePage]
})
export class CookwarePageModule {}
