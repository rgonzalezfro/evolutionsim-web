import { Component, OnInit } from '@angular/core';

export interface Alimentacion {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {

  selected: number;

  alimentacion: Alimentacion[] = [
    {value: 0, viewValue: 'Omnívoro'},
    {value: 1, viewValue: 'Carnívoro'},
    {value: 2, viewValue: 'Hervívoro'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
