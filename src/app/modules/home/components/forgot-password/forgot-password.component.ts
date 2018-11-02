import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../../../core/services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPassword: FormGroup;
  constructor(
    private authService: UserService,
  ) { }

  ngOnInit() {
    this.forgotPassword = new FormGroup({
      userEmail: new FormControl('', [Validators.required, Validators.email]),
      lastName: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
    })
  }

  sendPassword(pass){
    if(this.forgotPassword.valid) {
        this.authService.createNewPassword(pass.value).subscribe(res => {
          
        })
    }    
  }
}
