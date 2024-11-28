import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockStatus'
})
export class StockStatusPipe implements PipeTransform {
  transform(count: number): string {
    if (count > 10) return 'In Stock';
    if (count > 0) return 'Low Stock';
    return 'Out of Stock';
  }
}