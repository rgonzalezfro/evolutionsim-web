import { Component, OnInit, Input } from '@angular/core';
import { DashboadCard } from '../model/dashboardCard'

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss']
})
export class DashboardCardComponent implements OnInit {

  @Input('card') cardDetail: DashboadCard;

  title: string;
  subtitle: string;
  description: string;
  action: string;
  link: string;

  constructor() { }

  ngOnInit() {
    if (this.cardDetail) {
      this.title = this.cardDetail.Title;
      this.subtitle = this.cardDetail.Subtitle;
      this.description = this.cardDetail.Description;
      this.action = this.cardDetail.Action;
      this.link = this.cardDetail.Link;
    }
  }

}
