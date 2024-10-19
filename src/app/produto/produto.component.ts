import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.scss'
})
export class ProdutoComponent {
  formulario = new FormGroup({
    id: new FormControl(''),
    nome: new FormControl(''),
    tipo: new FormControl(''),
    link: new FormControl(''),
    id_fabricante: new FormControl(''),
    valor: new FormControl(''),
    garantia: new FormControl(''),
    descricao: new FormControl('') 
  })
  constructor (private ProdutoService : ProdutoService
  ){}
  
  
    onSave () {
      //chama o serviço para gravar as informações no banco de dados
     //armazena o formulario em uma variavel para
     //melhor manipulação
     let dados = this.formulario.value;
     //abre uma conexão asíncrona com o serviço
     this.ProdutoService.salvar(dados).subscribe({
      next:(res)=>{
        console.log(res)
      },
      error :(error)=>{
        console.log(error)
  
      }
  
     })
    }
    onCancelar (){
      this.formulario.reset()
    }
}

