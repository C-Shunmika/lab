import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'department',
    loadChildren: () => import('./department/department.module').then( m => m.DepartmentPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'womenclothing',
    loadChildren: () => import('./womenclothing/womenclothing.module').then( m => m.WomenclothingPageModule)
  },
  {
    path: 'menclothing',
    loadChildren: () => import('./menclothing/menclothing.module').then( m => m.MenclothingPageModule)
  },
  {
    path: 'accessories',
    loadChildren: () => import('./accessories/accessories.module').then( m => m.AccessoriesPageModule)
  },
  {
    path: 'electronics',
    loadChildren: () => import('./electronics/electronics.module').then( m => m.ElectronicsPageModule)
  },
  {
    path: 'cookware',
    loadChildren: () => import('./cookware/cookware.module').then( m => m.CookwarePageModule)
  },
  {
    path: 'booksandstationery',
    loadChildren: () => import('./booksandstationery/booksandstationery.module').then( m => m.BooksandstationeryPageModule)
  },
  {
    path: 'mycart',
    loadChildren: () => import('./mycart/mycart.module').then( m => m.MycartPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
