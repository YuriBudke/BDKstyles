import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Product {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
}

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'CAMISETA CHRONIC',
      imageUrl: 'https://static.cdnlive.com.br/uploads/707/produto/17213032163907_zoom.jpg',
      description: 'Camiseta alta qualidade - Chronic',
      price: 90.00,
      sizes: ['P', 'M', 'G', 'GG'],
      colors: ['Preto', 'Branco', 'Cinza']
    },
    {
      id: 2,
      name: 'CAMISETA SUFGANG',
      imageUrl: 'https://droper-media.us-southeast-1.linodeobjects.com/1152023174042154.webp',
      description: 'Camiseta de alta qualidade - Sufgang (poucas disponíveis)',
      price: 150.00,
      sizes: ['P', 'M', 'G', 'GG'],
      colors: ['Preto', 'Branco', 'Cinza']
    },
    {
      id: 3,
      name: 'CAMISETA CYCLONE',
      imageUrl: 'https://cyclone.vtexassets.com/arquivos/ids/252650-1200-auto?v=638491249510970000&width=1200&height=auto&aspect=true',
      description: 'Camiseta de alta qualidade - Cyclone',
      price: 120.00,
      sizes: ['P', 'M', 'G', 'GG'],
      colors: ['Preto', 'Branco', 'Cinza']
    },
    {
      id: 4,
      name: 'CAMISETA VLONE',
      imageUrl: 'https://www.voxsneakers.com/cdn/shop/files/Pop-Smoke-x-Vlone-Faith-T-shirt-Black-2-removebg-preview1.png?v=1692979847&width=493',
      description: 'Camiseta de alta qualidade - Vlone (EDIÇÃO LIMITADA)',
      price: 590.00,
      sizes: ['P', 'M', 'G', 'GG'],
      colors: ['Preto', 'Branco', 'Cinza']
    },
    {
      id: 5,
      name: 'CALÇA CHRONIC',
      imageUrl: 'https://static.cdnlive.com.br/uploads/556/unidade/17074008283209_detalhe.jpg',
      description: 'Calça Cargo - Chronic',
      price: 200.00,
      sizes: ['38', '40', '42', '44'],
      colors: ['Azul', 'Preto']
    }
  ];

  constructor(private router: Router) {}

  selectProduct(productId: number) {
    this.router.navigate(['/product', productId]);
  }
}