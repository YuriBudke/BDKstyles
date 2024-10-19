import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovimentacaoService } from '../movimentacao.service';

@Component({
  selector: 'app-movproduto',
  templateUrl: './movproduto.component.html',
  styleUrl: './movproduto.component.scss'
})
export class MovprodutoComponent {
  formulario = new FormGroup({
    id: new FormControl(''),
    dtMovimentacao: new FormControl(''),
    produto: new FormControl(''),
    quantidade: new FormControl(''),
    tipo: new FormControl('')
  })

  constructor (private MovimentacaoService : MovimentacaoService
  ){}
  
  
    onSave () {
      //chama o serviço para gravar as informações no banco de dados
     //armazena o formulario em uma variavel para
     //melhor manipulação
     let dados = this.formulario.value;
     //abre uma conexão asíncrona com o serviço
     this.MovimentacaoService.salvar(dados).subscribe({
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



