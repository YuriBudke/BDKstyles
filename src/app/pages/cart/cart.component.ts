import { Component } from '@angular/core';

interface CartItem {
  product: {
    id: number;
    name: string;
    imageUrl: string;
    description: string;
    price: number;
    sizes: string[];
    colors: string[];
  };
  size: string;
  color: string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartItems: CartItem[] = [];

  getTotal() {
    return this.cartItems.reduce((total, item) => total + item.product.price, 0);
  }

  checkout() {
    // Lógica de checkout pode ser implementada
    alert('Compra realizada com sucesso!');
  }
}