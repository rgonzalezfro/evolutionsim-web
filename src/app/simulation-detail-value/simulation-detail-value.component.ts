import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-simulation-detail-value',
  templateUrl: './simulation-detail-value.component.html',
  styleUrls: ['./simulation-detail-value.component.scss']
})
export class SimulationDetailValueComponent implements OnInit {

  chart: Chart =[];

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.chart = new Chart('canvas', {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'My First dataset',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [0, 10, 5, 2, 20, 30, 45]
        }]
      },

      // Configuration options go here
      options: {}
    });
  }

}
