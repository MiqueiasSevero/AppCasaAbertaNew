import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {UsuarioService} from '../services/usuario/usuario.service';
import {NavController} from '@ionic/angular';


@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.page.html',
  styleUrls: ['./cadastrar-usuario.page.scss'],
})
export class CadastrarUsuarioPage implements OnInit {

  formularioCadastro: any;



  constructor(private formBuilder:FormBuilder, private usuarioService:UsuarioService, private navCtrl: NavController ) {
       this.formularioCadastro = this.formBuilder.group({
         nome:"",
         email:"",
         password:""
       });
   }
   cadastrarUsuario(dadosCadastro:any){
    const formData = new FormData();
    formData.append("email", dadosCadastro.email);
    formData.append("nome", dadosCadastro.nome);
    formData.append("senha", dadosCadastro.password);


    this.usuarioService.cadastrar(formData).subscribe((data: any) => {
      console.log(data);


      if (data.sucesso){
        this.navCtrl.navigateRoot("/");
      }else{
        alert("usuário não encontrado");
      }

    } )




   }
  ngOnInit() {
  }

}
