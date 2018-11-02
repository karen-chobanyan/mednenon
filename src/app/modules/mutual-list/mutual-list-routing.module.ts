import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { PatientListComponent } from './components/patient-list/patient-list.component';

const routes: Routes = [

  {
    path: '',
    component: PatientListComponent,
  },
  {
    path: ':id',
    component: PatientListComponent,
  },
  {
    path: ':id/:action',
    component: PatientListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class MutualListRoutingModule {}
