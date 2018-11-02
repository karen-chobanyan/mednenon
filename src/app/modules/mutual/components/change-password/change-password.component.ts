import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { getUserType, getFromLocalStorage } from '../../../../shared/utils/local-storage';
import { UserService } from '../../../../core/services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePass: FormGroup;
  private user:any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ChangePasswordComponent>,
    private userservice: UserService,
  ) { }

  ngOnInit() {
    this.user = getFromLocalStorage('user');
    this.changePass = new FormGroup({
      oldpass:new FormControl('', Validators.required),
      newpass: new FormControl('', Validators.required),
      repeatpass:new FormControl('', Validators.required),
    })
  }

  changePassword(pass){
    console.log();
    
    if (this.changePass.valid){
      let oldp = pass.controls['oldpass'].value;
      if (pass.controls['newpass'].value === pass.controls['repeatpass'].value) {
        console.log(pass.controls['newpass'].value);
        
        this.userservice.changePassword( this.user.UserID, oldp, pass.controls['repeatpass'].value)
        .subscribe(res => {
          console.log(res);
          
        })
      }
      console.log(pass);
      
    }
  }

}
