import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardMenuComponent } from './components/dashboard-menu/dashboard-menu.component';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DefaultImageDirective } from '../../core/directives/default-image.directive';
import { EulaComponent } from '../home/components/eula/eula.component';
import { PhiSignComponent } from '../home/components/phi-sign/phi-sign.component';
import { UserService } from '../../core/services/user.service';

import {
  MatFormFieldModule,
  MatOptionModule,
  MatInputModule,
  MatSelectModule,
  MatTabsModule,
  MatToolbarModule,
  MatDialogModule, 
  MatCheckboxModule,
  MatIconModule
} from '@angular/material';
import { ChangePasswordComponent } from './components/change-password/change-password.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    MatFormFieldModule,
    MatOptionModule,
    MatInputModule,
    MatToolbarModule,
    MatSelectModule,
    MatTabsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    RouterModule
  ],
  declarations: [
    DashboardMenuComponent,
    DefaultImageDirective,
    PhiSignComponent,
    EulaComponent,
    ChangePasswordComponent
  ],
  exports: [
    DashboardMenuComponent,
    DefaultImageDirective,
    
  ],
  entryComponents: [
    PhiSignComponent,
    ChangePasswordComponent,
    EulaComponent
  ],
  providers: [
    AuthService,
    UserService
  ]
})
export class MutualModule { }
