import { Component, OnInit } from '@angular/core';
import { DashboadCard } from '../model/dashboardCard'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cards: DashboadCard[] = [];

  constructor() { }

  ngOnInit() {
    this.loadCards()
  }

  loadCards() {
    this.cards.push({
      Title: 'Nueva simulación',
      Subtitle: 'Crea una nueva simulación',
      Description: 'Selecciona parámetros y simula la evolución de una especie en civilización.      ',
      Action: 'Crear',
      Link:'/create'
    },
    {
      Title: 'Registro de simulaciones',
      Subtitle: 'Ver registro de simulaciones',
      Description: 'Ver la lista de simulaciones terminadas',
      Action: 'Ver',
      Link:'/records'
    });
  }
}