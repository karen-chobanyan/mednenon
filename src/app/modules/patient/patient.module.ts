import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PatientRoutingModule} from './patient-routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { PatientScreenComponent } from './pages/patient-screen/patient-screen.component';
import { ManagePatientComponent } from './components/manage-patient/manage-patient.component';
import { AddExpertsComponent } from './components/add-experts/add-experts.component';
import { HttpService } from '../../core/services/http.service';
import { AdvocateService } from '../../core/services/advocate.service';
import { PatientService } from '../../core/services/patient.service';
import { PartnerService } from '../../core/services/partner.service';
import { HttpClientModule } from '@angular/common/http';
import { ExpertsModule } from '../experts/experts.module';

import {
  MatFormFieldModule,
  MatOptionModule,
  MatInputModule,
  MatSelectModule,
  MatTabsModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSortModule,
  MatDialogModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatOptionModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatTabsModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatDialogModule,
    PatientRoutingModule,
    HttpClientModule,
    ExpertsModule
  ],
  entryComponents: [
    ManagePatientComponent,
    AddExpertsComponent,
    PatientScreenComponent,
  ],
  declarations: [
    PatientScreenComponent,
    ManagePatientComponent,
    AddExpertsComponent,
  ],
  exports:[
    PatientScreenComponent
  ],
  providers: [
    HttpService,
    AdvocateService,
    PatientService,
    PartnerService
  ]
})
export class PatientModule {
}
