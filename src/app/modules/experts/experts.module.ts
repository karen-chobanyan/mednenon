import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpertsDashboardComponent } from './pages/experts-dashboard/experts-dashboard.component';
import { ExpertsRoutingModule } from './experts-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FileUploadModule } from 'ng2-file-upload';
import { HttpService } from '../../core/services/http.service';
import { MutualModule } from './../mutual/mutual.module';
import { PatientService } from '../../core/services/patient.service';
import { ExpertService } from '../../core/services/expert.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatFormFieldModule,
  MatOptionModule,
  MatInputModule,
  MatSelectModule,
  MatTabsModule,
  MatToolbarModule,
  MatDialogModule, 
  MatIconModule,
  MatCheckboxModule
} from '@angular/material';
import { ExpertsOpinionComponent } from './pages/experts-opinion/experts-opinion.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatOptionModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    MatToolbarModule,
    HttpClientModule,
    MatDialogModule, 
    MatCheckboxModule,
    FileUploadModule,
    ExpertsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MutualModule,
    MatIconModule,
  ],
  declarations: [
    ExpertsDashboardComponent,
    ExpertsOpinionComponent,
  ],
  exports: [
    ExpertsOpinionComponent
  ],
  providers: [
    HttpService,
    PatientService,
    ExpertService
  ]
})
export class ExpertsModule { }
