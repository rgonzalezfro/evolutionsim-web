import { Component, OnInit } from '@angular/core';

export interface SimulationDetail {
  property: string;
  description: string;
  result: any;
}

const ELEMENT_DATA: SimulationDetail[] = [
  {property:'Neon', description: 'Hydrogen', result: 1.0079},
  {property:'Neon', description: 'Helium', result: 4.0026},
  {property:'Neon', description: 'Lithium', result: 6.941},
  {property:'Neon', description: 'Beryllium', result: 9.0122},
  {property:'Neon', description: 'Boron', result: 10.811},
  {property:'Neon', description: 'Carbon', result: 12.0107},
  {property:'Neon', description: 'Nitrogen', result: 14.0067},
  {property:'Neon', description: 'Oxygen', result: 15.9994},
  {property:'Neon', description: 'Fluorine', result: 18.9984},
  {property:'Neon', description: 'Neon', result: 20.1797}
];


@Component({
  selector: 'app-simulation-detail',
  templateUrl: './simulation-detail.component.html',
  styleUrls: ['./simulation-detail.component.scss']
})
export class SimulationDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['description', 'result', 'detail'];
  dataSource = ELEMENT_DATA;

}
