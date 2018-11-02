import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getFromLocalStorage } from '../../../../shared/utils/local-storage';
import { ManageProfileComponent } from '../../../mutual-manage-profile/pages/manage-profile/manage-profile.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user:any;
  constructor(public router: Router,) { }

  ngOnInit() {
    this.user = getFromLocalStorage('user');  
  }  
  newRequest(){
    this.router.navigate(['partner/partner-new-request']);
  }

}
