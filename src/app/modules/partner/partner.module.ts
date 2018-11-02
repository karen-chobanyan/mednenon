import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PartnerRoutingModule } from './partner-routing.module';
import { MutualModule } from './../mutual/mutual.module';
import { FlexLayoutModule} from '@angular/flex-layout';
import { FileUploadModule } from 'ng2-file-upload';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { PatientService } from '../../core/services/patient.service';
import { PartnerService } from '../../core/services/partner.service';
import { MomentModule } from 'angular2-moment';
import {
  MatFormFieldModule,
  MatOptionModule,
  MatInputModule,
  MatNativeDateModule, 
  MatSliderModule,
  MatSelectModule,
  MatDatepickerModule,
  MatTabsModule,
  MatToolbarModule,
  MatDialogModule,  
  MatRadioModule,
  MatIconModule
} from '@angular/material';
import { PartnerNewRequestComponent } from './pages/partner-new-request/partner-new-request.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MomentModule,
    PartnerRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    FileUploadModule,
    MatOptionModule,
    MatInputModule,
    FlexLayoutModule,
    MatSelectModule,
    MatRadioModule,
    MatTabsModule,
    MatToolbarModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MutualModule,
    MatIconModule
  ],
  declarations: [
    DashboardComponent, 
    PartnerNewRequestComponent,
  ],
  exports: [
    MutualModule,
  ],
  providers: [
    PatientService,
    AuthService,
    PartnerService,
  ]
})
export class PartnerModule { }
