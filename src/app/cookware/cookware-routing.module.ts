import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CookwarePage } from './cookware.page';

const routes: Routes = [
  {
    path: '',
    component: CookwarePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CookwarePageRoutingModule {}
