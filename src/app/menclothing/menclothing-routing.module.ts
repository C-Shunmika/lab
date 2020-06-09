import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenclothingPage } from './menclothing.page';

const routes: Routes = [
  {
    path: '',
    component: MenclothingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenclothingPageRoutingModule {}
