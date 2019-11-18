import { Component, OnInit } from '@angular/core';

export interface SimulationBasicDetail {
  id: number;
  cycles: number;
  result: string;
}

const ELEMENT_DATA: SimulationBasicDetail[] = [
  {id: 1, result: 'Hydrogen', cycles: 1.0079},
  {id: 2, result: 'Helium', cycles: 4.0026},
  {id: 3, result: 'Lithium', cycles: 6.941},
  {id: 4, result: 'Beryllium', cycles: 9.0122},
  {id: 5, result: 'Boron', cycles: 10.811},
  {id: 6, result: 'Carbon', cycles: 12.0107},
  {id: 7, result: 'Nitrogen', cycles: 14.0067},
  {id: 8, result: 'Oxygen', cycles: 15.9994},
  {id: 9, result: 'Fluorine', cycles: 18.9984},
  {id: 10, result: 'Neon', cycles: 20.1797,}
];

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'result', 'cycles', 'detail'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
