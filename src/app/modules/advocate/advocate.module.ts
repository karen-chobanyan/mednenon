import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import { MutualModule } from './../mutual/mutual.module';
import {AdvocateRoutingModule} from './advocate-routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule } from "@angular/forms";
import { ManageProfileModule } from '../mutual-manage-profile/manage-profile.module';
import { ChangePasswordComponent } from '../mutual/components/change-password/change-password.component';
import {
  MatFormFieldModule,
  MatOptionModule,
  MatInputModule,
  MatSelectModule,
  MatTabsModule,
  MatToolbarModule,
  MatDialogModule, 
  MatCheckboxModule,
} from '@angular/material';
import {FreeRiskAssessmentResultComponent} from './pages/free-risk-assessment-result/free-risk-assessment-result.component';

import {ManagePatientComponent} from './components/manage-patient/manage-patient.component';
import { AddExpertsComponent } from './components/add-experts/add-experts.component';
import { AdvocateCalendarComponent } from './pages/advocate-calendar/advocate-calendar.component';
import { AdvocateOpinionComponent } from './pages/advocate-opinion/advocate-opinion.component';
import { AdvocateCalendarBlockComponent } from './components/advocate-calendar-block/advocate-calendar-block.component';
import { 
	IgxCalendarModule,
	IgxDialogModule
 } from "igniteui-angular";
 import { IgxDatePickerModule } from 'igniteui-angular';
 import { HttpService } from '../../core/services/http.service';
 import { AdvocateService } from '../../core/services/advocate.service';
 import { PatientService } from '../../core/services/patient.service';
 import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatOptionModule,
    MatInputModule,
    MatToolbarModule,
    MatSelectModule,
    MatTabsModule,
    MatDialogModule,
    HttpClientModule,
    AdvocateRoutingModule,
    FormsModule,
    IgxDatePickerModule,
    MatCheckboxModule,
    IgxCalendarModule,
    IgxDialogModule,
    MutualModule,
    ManageProfileModule
  ],
  declarations: [
    DashboardComponent,
    FreeRiskAssessmentResultComponent,
    ManagePatientComponent,
    AddExpertsComponent,
    AdvocateCalendarComponent,
    AdvocateOpinionComponent,
    AdvocateCalendarBlockComponent
  ],
  entryComponents: [
    ManagePatientComponent,
    ChangePasswordComponent,
    AddExpertsComponent
  ],
  providers: [
    HttpService,
    AdvocateService,
    PatientService
  ],
  exports: [
    MutualModule,
    ManageProfileModule,
  ]
})
export class AdvocateModule {
}
