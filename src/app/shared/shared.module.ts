import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

// Pipes
import { PriceFormatPipe } from '../pipes/price-format.pipe';
import { StockStatusPipe } from '../pipes/stock-status.pipe';

// Directives
import { HighlightDirective } from '../directives/highlight.directive';
import { FadeInDirective } from '../directives/fade-in.directive';

@NgModule({
  declarations: [
    PriceFormatPipe,
    StockStatusPipe,
    HighlightDirective,
    FadeInDirective
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    PriceFormatPipe,
    StockStatusPipe,
    HighlightDirective,
    FadeInDirective,
    CommonModule,
    IonicModule
  ]
})
export class SharedModule { }