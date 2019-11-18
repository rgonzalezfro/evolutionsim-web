import { Component, OnInit } from '@angular/core';

export interface Alimentacion {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {

  alimentacion: Alimentacion[] = [
    {value: 'omn', viewValue: 'Omnívoro'},
    {value: 'crn', viewValue: 'Carnívoro'},
    {value: 'hrv', viewValue: 'Hervívoro'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
