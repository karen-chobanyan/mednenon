import {Component, OnInit, Inject} from '@angular/core';
import {FormGroup, Validators, FormControl} from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AuthService } from '../../../../core/services/auth.service';
import { UserService } from '../../../../core/services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  selected = 'option2';
  registerform: FormGroup;
  public notyficationOpt = {};
  notyficationForm: FormGroup;
  constructor(
      private userService:UserService,
      private authService: AuthService,
      @Inject(MAT_DIALOG_DATA) public data: any,
      public dialogRef: MatDialogRef<RegisterComponent>,
  ) {
  }

  ngOnInit() {
    this.registerform = new FormGroup({
      firstName: new FormControl('', Validators.required),
      middleName: new FormControl(''),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      zipCode: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      notyficationOpt:new FormControl('', Validators.required),
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  sendForm(form) {
    if (this.registerform.valid) {
        this.authService.signUpUser(form.value).subscribe(res => {
          console.log(res);
          
        });
        console.log(form.value);
    }
  }
}
