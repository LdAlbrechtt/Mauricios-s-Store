import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductDetailsPage } from './product-details.page';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ProductDetailsPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProductDetailsPage]
})
export class ProductDetailsPageModule {}