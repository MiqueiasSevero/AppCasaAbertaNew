import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor( private http: HttpClient ) { }
  login(data: any){
    return this.http.post("http://localhost/CasaAberta_php/objetos/obj_usuario.php",data);

      
  }
  cadastrar(data: any){
    return  this.http.post("http://localhost/CasaAberta_php/objetos/obj_usuario_insert.php",data);
  }
  select
}
