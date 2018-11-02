import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MutualProfileRoutingModule } from './mutual-profile-routing.module';
import { ManageProfileComponent } from './pages/manage-profile/manage-profile.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule } from "@angular/forms";
import { MutualModule } from '../mutual/mutual.module';
import { PatientService } from '../../core/services/patient.service';
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
    MutualModule,
    MutualProfileRoutingModule,
    MatFormFieldModule,
    MatOptionModule,
    MatInputModule,
    HttpClientModule,
    MatSelectModule,
    MatTabsModule,
    MatToolbarModule,
    MatDialogModule, 
    MatCheckboxModule,
    FlexLayoutModule,
    FormsModule
  ],
  declarations: [
    ManageProfileComponent,
  ],
  exports: [
    ManageProfileComponent
  ],
  providers: [PatientService]
})
export class ManageProfileModule { }
