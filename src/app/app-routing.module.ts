import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'
import { CreateFormComponent } from './create-form/create-form.component'
import { RecordsComponent } from './records/records.component'
import { SimulationDetailComponent } from './simulation-detail/simulation-detail.component'
import { SimulationDetailValueComponent } from './simulation-detail-value/simulation-detail-value.component'


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'create', component: CreateFormComponent },
  { path: 'records', component: RecordsComponent },
  { path: 'simulation/:id', component: SimulationDetailComponent },
  { path: 'simulation/:id/graphic/:property', component: SimulationDetailValueComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
