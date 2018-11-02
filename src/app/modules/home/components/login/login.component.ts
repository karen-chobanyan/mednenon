import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { AuthService } from '../../../../core/services/auth.service';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { EulaComponent } from '../eula/eula.component';
import { Router } from '@angular/router';
import { removeFromLocalStorage, getUserType, clearLocalStorage, getFromLocalStorage } from '../../../../shared/utils/local-storage';
import { error } from 'protractor';
import { UserStatusComponent } from '../../../home/components/user-status/user-status.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userBlocked: any;
  private failAttemps: any;
  private user: any;
  loginForm: FormGroup;
  formError = '';
  errorLogin: boolean;

  constructor(
    public authservice: AuthService,
    public router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<LoginComponent>,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      useremail: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });

  }

  loginsend(form) {
    this.user = getFromLocalStorage('user');
    if (this.loginForm.valid) {
      this.authservice.signInUser(
        form.controls['useremail'].value,
        form.controls['password'].value).subscribe(res => {
          localStorage.setItem('user', JSON.stringify(res));
          this.authservice.isLoggedIN.next(true);
          let local = getUserType();
          if (res.UserStatus === "Inactive") {
            setTimeout(() => {
              let userStatus = this.dialog.open(UserStatusComponent, {});
              userStatus.afterClosed().subscribe(status => {
                if (!status) {
                  console.log(status);
                  clearLocalStorage();
                  this.router.navigate(['/']);
                } else {
                  console.log(status);
                }
              })
            })
          }
          if (local === 'vendor') {
            this.router.navigate(['/partner'])
          } else if (local === 'adminAdvocate') {
            this.router.navigate(['/advocate'])
          } else if (local === 'expert') {
            this.router.navigate(['/experts'])
          }
          this.closeLoginModal()
        }, error => {
          this.showError(error.error.detail);
          if (error.error.Error === "Account is locked") {
            this.userBlocked = error.error.Error;
          } else if (error.error.Error === "Invalid Password") {
            this.failAttemps = error.error.REMAINING_ATTEMPTS;
            this.errorLogin = true;
          } else {
            this.errorLogin = true;
          }
        })
    }
  }

  closeLoginModal(): void {
    this.dialogRef.close();
  }

  showError(error: string) {
    this.formError = error;
    setTimeout(function () {
      this.formError = '';
    }.bind(this), 3000);
  }
  forgotPassword() {
    this.dialog.open(ForgotPasswordComponent, {});
    this.closeLoginModal();
  }
}
