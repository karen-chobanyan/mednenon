import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {FreeRiskAssessmentResultComponent} from './pages/free-risk-assessment-result/free-risk-assessment-result.component';

import {AdvocateOpinionComponent} from './pages/advocate-opinion/advocate-opinion.component';
import { AdvocateCalendarComponent } from './pages/advocate-calendar/advocate-calendar.component';
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'free-risk-assessment-result',
    component: FreeRiskAssessmentResultComponent,
  },
  {
    path: 'advocate-opinion',
    component: AdvocateOpinionComponent,
  },
  {
    path: 'advocate-calendar',
    component: AdvocateCalendarComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdvocateRoutingModule {}
