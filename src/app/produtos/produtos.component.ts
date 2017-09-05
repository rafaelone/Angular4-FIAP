import { Component, OnInit } from '@angular/core';
import { Pizza } from './lista-pizzas/lista-pizzas.model'
@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  pizzas: Pizza[] = [
    {
    id: "1",
    nome: "Mussarela",
    rank: "4.5",
    ingredientes: "Mussarela Scala e tomate fatiado",
    preco: "35,00",
    imagePath: "../../assets/img/mussarela.jpg"
    },
    {
    id: "2",
    nome: "Mussarela",
    rank: "4.5",
    ingredientes: "presunto, ovos e cebola cobertos com mussarela",
    preco: "45,00",
    imagePath: "../../assets/img/portuguesa.jpg"
    },
    {
    id: "3",
    nome: "Caipira",
    rank: "4.5",
    ingredientes: "Filé de frango desfiado, milho e Catupiry",
    preco: "42,00",
    imagePath: "../../assets/img/franco_cartupiry.jpg"
    },

    {
    id: "4",
    nome: "Palmito",
    rank: "4.5",
    ingredientes: "fatias de palmito especial e leve cobertura de mussarela",
    preco: "48,00",
    imagePath: "../../assets/img/palmito.jpg"
    },
    {
    id: "5",
    nome: "Peperoni",
    rank: "4.5",
    ingredientes: "mussarela, peperoni e leve toque de parmesão",
    preco: "39,00",
    imagePath: "../../assets/img/peperoni.jpg"
    },
    {
    id: "6",
    nome: "Toscana",
    rank: "4.5",
    ingredientes: "calabresa moída com cobertura de catupiry",
    preco: "35,00",
    imagePath: "../../assets/img/toscana.jpg"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
