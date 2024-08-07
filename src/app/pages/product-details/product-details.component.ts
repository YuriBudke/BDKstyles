import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface Product {
  id: number;
  name: string;
  imageUrl: string;
  imageUrl2: string
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
}

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: 'CAMISETA CHRONIC',
      imageUrl: 'https://static.cdnlive.com.br/uploads/707/produto/17213032163907_zoom.jpg',
      imageUrl2: 'https://static.cdnlive.com.br/uploads/707/unidade/17213032177032_zoom.jpg',
      description: 'Camiseta original da marca Chronic',
      price: 90.00,
      sizes: ['P', 'M', 'G', 'GG'],
      colors: ['Preto', 'Branco', 'Cinza']
    },
    {
      id: 2,
      name: 'CAMISETA SUFGANG',
      imageUrl: 'https://droper-media.us-southeast-1.linodeobjects.com/1152023174042154.webp',
      imageUrl2: 'https://droper-media.us-southeast-1.linodeobjects.com/1152023174038170.webp',
      description: 'Camiseta original da marca Sufgang',
      price: 150.00,
      sizes: ['P', 'M', 'G', 'GG'],
      colors: ['Preto', 'Branco', 'Cinza']
    },
    {
      id: 3,
      name: 'CAMISETA CYCLONE',
      imageUrl: 'https://cyclone.vtexassets.com/arquivos/ids/252650-1200-auto?v=638491249510970000&width=1200&height=auto&aspect=true',
      imageUrl2: 'https://cyclone.vtexassets.com/arquivos/ids/252651-1200-auto?v=638491249717970000&width=1200&height=auto&aspect=true',
      description: 'Camiseta original da marca Cyclone',
      price: 120.00,
      sizes: ['P', 'M', 'G', 'GG'],
      colors: ['Preto', 'Branco', 'Cinza']
    },
    {
      id: 4,
      name: 'CAMISETA VLONE',
      imageUrl: 'https://www.voxsneakers.com/cdn/shop/files/Pop-Smoke-x-Vlone-Faith-T-shirt-Black-2-removebg-preview1.png?v=1692979847&width=493',
      imageUrl2: 'https://www.voxsneakers.com/cdn/shop/files/Pop-Smoke-x-Vlone-Faith-T-shirt-Black-removebg-preview1.png?v=1692979847&width=493',
      description: 'Camiseta original e limitada da marca Vlone',
      price: 590.00,
      sizes: ['P', 'M', 'G', 'GG'],
      colors: ['Preto', 'Branco', 'Cinza']
    },
    {
      id: 5,
      name: 'CALÇA CHRONIC',
      imageUrl: 'https://static.cdnlive.com.br/uploads/707/unidade/17074008516331_zoom.jpg',
      imageUrl2: 'https://static.cdnlive.com.br/uploads/707/produto/17074008482520_zoom.jpg',
      description: 'Calça cargo da marca Chronic',
      price: 89.99,
      sizes: ['38', '40', '42', '44'],
      colors: ['Azul', 'Preto']
    }
  ];
  
  product: Product | undefined;
  selectedSize: string | undefined;
  selectedColor: string | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.products.find(p => p.id === productId);
  }

  addToCart() {
    if (this.product && this.selectedSize && this.selectedColor) {
      // Adicionar ao carrinho (lógica pode ser implementada)
      this.router.navigate(['/cart']);
    }
  }

  buyNow() {
    if (this.product && this.selectedSize && this.selectedColor) {
      // Compra direta (lógica pode ser implementada)
      this.router.navigate(['/cart']);
    }
  }
}