import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {
  dados:any =  [
    {nome:"GIT",descricao :"git ru loren"},
    {nome:"GIT2",descricao :"git ru loren2"},
    {nome:"GIT3",descricao :"git ru loren3"}
    

    

  ];

  constructor() { }

  ngOnInit() {
  }

}
