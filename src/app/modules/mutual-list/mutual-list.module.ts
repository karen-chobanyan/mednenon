import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { PatientService } from '../../core/services/patient.service';
import { MutualListRoutingModule } from './mutual-list-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { MutualModule } from '../mutual/mutual.module';
import { PatientModule } from '../patient/patient.module';
import { HttpClientModule } from '@angular/common/http';
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

@NgModule({
  imports: [
    CommonModule,
    MutualListRoutingModule,
    MatFormFieldModule,
    MatOptionModule,
    HttpClientModule,
    RouterModule,
    FlexLayoutModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatTabsModule,
    MatToolbarModule,
    MatDialogModule, 
    MatCheckboxModule,
    MutualModule,
    PatientModule
  ],
  declarations: [
    PatientListComponent,
  ],
  exports: [
    PatientListComponent
  ],
  providers: [PatientService]
})
export class MutualListModule { }
