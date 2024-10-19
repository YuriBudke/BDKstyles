import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsuarioService } from '../usuario.service';
import { TipoService } from '../services/tipo.service';

@Component({
  selector: 'app-cad-usuario',
  templateUrl: './cad-usuario.component.html',
  styleUrl: './cad-usuario.component.scss'
})
export class CadUsuarioComponent {
  formulario = new FormGroup ({
    ID: new FormControl (''),  
    nome: new FormControl (''),
    sobrenome: new FormControl (''),
    telefone: new FormControl (''),
    email: new FormControl (''),
    tipo: new FormControl ('')

  })
  constructor(
    private UsuarioService : UsuarioService,
    private  tipoService:TipoService
  ){
    this.buscaTipos()
  }
  
  
    onSave () {
      //chama o serviço para gravar as informações no banco de dados
     //armazena o formulario em uma variavel para
     //melhor manipulação
     let dados = this.formulario.value;
     //abre uma conexão asíncrona com o serviço
     this.UsuarioService.salvar(dados).subscribe({
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

    //Busca os tipo e armazena numa variavel
    arrTipos:any[] = [];

    buscaTipos(){
      this.tipoService.getTipos().subscribe({
        next:(res)=>{
          this.arrTipos = res.body;
          console.log(this.arrTipos);

        },
        error:(erro)=>{
          console.log(erro);
        }
        
      })
    }

}

