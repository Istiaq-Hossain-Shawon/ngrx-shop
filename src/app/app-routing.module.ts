import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'map',
    loadChildren: () =>
      import('./shop-map/shop-map.module').then((m) => m.ShopModule),
  },
  {
    path: 'item',
    loadChildren: () =>
      import('./item/item.module').then((m) => m.ItemModule),
  }

  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
