import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WomenclothingPage } from './womenclothing.page';

const routes: Routes = [
  {
    path: '',
    component: WomenclothingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WomenclothingPageRoutingModule {}
