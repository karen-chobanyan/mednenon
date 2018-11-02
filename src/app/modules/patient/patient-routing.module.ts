import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { PatientScreenComponent } from './pages/patient-screen/patient-screen.component';
import { FreeRiskAssessmentResultComponent } from '../advocate/pages/free-risk-assessment-result/free-risk-assessment-result.component';
// import { PatientListComponent } from './pages/patient-list/patient-list.component';

const routes: Routes = [
  {
    path: ':id',
    component: PatientScreenComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class PatientRoutingModule {}
