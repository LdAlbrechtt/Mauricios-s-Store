import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../interfaces/product.interface';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  product: Product | null = null;
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadProduct(parseInt(id));
    }
  }

  loadProduct(id: number) {
    this.productService.getProduct(id).subscribe(
      (data) => {
        this.product = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error loading product:', error);
        this.loading = false;
      }
    );
  }

  async addToCart() {
    if (this.product) {
      this.cartService.addToCart(this.product);
      const toast = await this.toastController.create({
        message: 'Product added to cart!',
        duration: 2000,
        position: 'bottom'
      });
      toast.present();
    }
  }
}