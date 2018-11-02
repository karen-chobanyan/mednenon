import { Component, OnInit } from '@angular/core';
import { MatDialog , MatDialogRef} from '@angular/material';
import { RegisterComponent } from '../../components/register/register.component';
import { QuestionComponent } from '../../components/question/question.component';
import { LoginComponent } from '../../components/login/login.component';
import { AdvocacyComponent } from '../../components/advocacy/advocacy.component';
import { RiskAssessmentComponent } from '../../components/risk-assessment/risk-assessment.component';
import { PersonalizedTumorBoardComponent } from '../../components/personalized-tumor-board/personalized-tumor-board.component'; 
import { AuthService } from '../../../../core/services/auth.service';
import { getFromLocalStorage } from '../../../../shared/utils/local-storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private user:any;

  constructor(
    public dialog: MatDialog,
    public authservice: AuthService
  ) { }

  ngOnInit() {
    this.user = getFromLocalStorage('user') || null;
  }

  getRouterLink(){
    let user = getFromLocalStorage("user");
    if(user){
    let userType = user.UserTypeName;

    if(userType == 'Vendor'){
      return '/partner';
    } else if (user.UserTypeName === 'Expert' && user.IsAdvocate === "1") {
      return '/advocate';
    } else if (user.UserTypeName === 'Expert' ) {
      return '/experts';
    } else {
      return '/error';
    }
  }else{
    return "";
  }
    
  }

  openDialog() {
    this.dialog.open(RegisterComponent, {});
  }
  openLogin(){
    this.dialog.open(LoginComponent, {});
  }
  advocacyPopup(){
    this.dialog.open(AdvocacyComponent, {});
  }
  personilizedPopup(){
    this.dialog.open(PersonalizedTumorBoardComponent, {});
  }
  assessmentPopup(){
    this.dialog.open(RiskAssessmentComponent, {});
  }
}
