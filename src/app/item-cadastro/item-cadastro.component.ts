import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-cadastro',
  templateUrl: './item-cadastro.component.html',
  styleUrls: ['./item-cadastro.component.css']
})
export class ItemCadastroComponent implements OnInit {

  //Testes antes de consumir os serviços da API-VAI
  itens = [
    { nome:"SALAME ITALIANO", descricao:"SALAME ITALIANO FATIADO SEARA 100G", preco: 7.94, categoria:"FRIOS", dataAquisicao: new Date()},
    { nome:"QUEIJO MINAS ", descricao:"PADRÃO TIROLEZ PEDAÇO 500G", preco: 29.45 , categoria:"FRIOS", dataAquisicao: new Date()}
  ]

  constructor() { }

  ngOnInit() {
  }

}
