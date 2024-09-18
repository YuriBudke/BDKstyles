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
    },
    {
      id: 6,
      name: 'CALÇA CARGO',
      imageUrl: 'https://images.tcdn.com.br/img/img_prod/735068/calca_cargo_koloni_ripstop_khaki_2849_1_e49c102e8357000657ba0e6ed02f07eb.jpeg',
      description: 'Calça no estilo cargo',
      price: 150.00,
      sizes: ['38', '40', '42', '44'],
      colors: ['Bege', 'Preto']
    },
    {
      id: 7,
      name: 'CASACO CAPTIVE',
      imageUrl: 'https://images.tcdn.com.br/img/img_prod/680475/moletom_captive_mente_fertil_cloud_15214_1_6de102c21dba10203580a81ee69343cc.png',
      description: 'Casaco de alta qualidade - MC Kevin',
      price: 340.00,
      sizes: ['P', 'M', 'G', 'GG'],
      colors: ['Preto', 'Branco', 'Cinza']
    },
    {
      id: 8,
      name: 'CASACO SUFGANG',
      imageUrl: 'https://princeofstreets.fbitsstatic.net/img/p/moletom-sufgang-joker-arabic-preto-152116/343802-1.jpg?w=550&h=550&v=no-change&qs=ignore',
      description: 'Casaco de alta qualidade - Chronic',
      price: 350.00,
      sizes: ['P', 'M', 'G', 'GG'],
      colors: ['Preto', 'Branco', 'Cinza']
    }
    
  ];

  constructor(private router: Router) {}

  selectProduct(productId: number) {
    this.router.navigate(['/product', productId]);
  }
}