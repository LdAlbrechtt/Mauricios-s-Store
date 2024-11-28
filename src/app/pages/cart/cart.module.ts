import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartPage } from './cart.page';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: CartPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CartPage]
})
export class CartPageModule {}