import { Component, OnInit } from '@angular/core';
import { getUserType, getFromLocalStorage } from '../../../../shared/utils/local-storage';
import { ChangePasswordComponent } from '../../../mutual/components/change-password/change-password.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-manage-profile',
  templateUrl: './manage-profile.component.html',
  styleUrls: ['./manage-profile.component.css']
})
export class ManageProfileComponent implements OnInit {
  user:any;
  constructor(
    public dialog: MatDialog,

  ) { }

  ngOnInit() {
    this.user = getFromLocalStorage('user')
  }

  changePass(){
    this.dialog.open(ChangePasswordComponent, {});     
  }
  
  getRouterLink() {
    let userType = getUserType();
    if (userType == 'vendor') {
      return '/partner';
    } else if (userType === 'expert') {
      return '/experts';
    } else if (userType === 'adminAdvocate') {
      return '/advocate';
    } else {
      return '/error';
    }
  }
}
