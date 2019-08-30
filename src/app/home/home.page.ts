import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
//import { UsuarioService } from '../services/usuario/usuario.service';
import {NavController} from '@ionic/angular';
//import {} from '';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

      usuario:any = "";
      nomeUser: string = "";



  constructor(private storege:Storage, private navCtrl:NavController ) { 

  }

  ngOnInit() { 
      this.storege.get("usuario").then((dados)=>{
          //console.log(dados);
          this.usuario = dados;
          this.nomeUser = dados.nome;

      });
    


  }
  sair(){
    
      this.storege.clear();
      this.navCtrl.navigateRoot("/");


  } 
  eventos(){
      this.navCtrl.navigateForward("/eventos");
  }

}
