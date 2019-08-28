import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import { UsuarioService } from '../services/usuario/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

      usuario:any = "";
      nomeUser: string = "";



  constructor(private storege:Storage) { 

  }

  ngOnInit() { 
      this.storege.get("usuario").then((dados)=>{
          //console.log(dados);
          this.usuario = dados;
          this.nomeUser = dados.nome;

      });


  }

}
