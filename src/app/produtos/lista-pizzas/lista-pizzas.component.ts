import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from './lista-pizzas.model'
@Component({
  selector: 'app-lista-pizzas',
  templateUrl: './lista-pizzas.component.html',
  styleUrls: ['./lista-pizzas.component.css']
})
export class ListaPizzasComponent implements OnInit {

@Input() pizza: Pizza
  constructor() { }

  ngOnInit() {
  }

}
