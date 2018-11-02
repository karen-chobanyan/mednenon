import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ExpertsDashboardComponent } from './pages/experts-dashboard/experts-dashboard.component';
import { ExpertsOpinionComponent } from './pages/experts-opinion/experts-opinion.component';
const routes: Routes = [
  {
    path: '',
    component: ExpertsDashboardComponent,
  },
  {
    path: 'experts-opinion/:id',
    component: ExpertsOpinionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ExpertsRoutingModule {}
