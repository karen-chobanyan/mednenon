import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { HomeComponent} from './pages/home/home.component';
import { HomeRoutingModule} from './home-routing.module';
import { QuestionComponent } from './components/question/question.component';
import { RegisterComponent } from './components/register/register.component';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AskAnythingService } from '../../core/services/askAnything.service';
import { AuthService } from '../../core/services/auth.service';
import { UserService } from '../../core/services/user.service';
import {
  MatFormFieldModule,
  MatOptionModule,
  MatInputModule,
  MatSelectModule,
  MatTabsModule,
  MatDialogModule
} from '@angular/material';
import { LoginComponent } from './components/login/login.component';
import { AdvocacyComponent } from './components/advocacy/advocacy.component';
import { PersonalizedTumorBoardComponent } from './components/personalized-tumor-board/personalized-tumor-board.component';
import { RiskAssessmentComponent } from './components/risk-assessment/risk-assessment.component';
import { HttpClientModule } from '@angular/common/http';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { UserStatusComponent } from './components/user-status/user-status.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatSelectModule,
    HomeRoutingModule,
    MatDialogModule,
    MatTabsModule,
    MatListModule,
    MatFormFieldModule,
    MatOptionModule,
    FlexLayoutModule,
    HttpClientModule,
    MatInputModule,
  ],
  declarations: [
    HomeComponent,
    QuestionComponent,
    RegisterComponent,
    LoginComponent,
    AdvocacyComponent,
    PersonalizedTumorBoardComponent,
    RiskAssessmentComponent,
    ForgotPasswordComponent,
    UserStatusComponent,
  ],
  entryComponents: [
    RegisterComponent,
    QuestionComponent,
    LoginComponent,
    ForgotPasswordComponent,
    AdvocacyComponent,
    PersonalizedTumorBoardComponent,
    RiskAssessmentComponent,
    UserStatusComponent
  ],
  providers: [
    AskAnythingService,
    AuthService,
    UserService
  ]
})
export class HomeModule {
}
