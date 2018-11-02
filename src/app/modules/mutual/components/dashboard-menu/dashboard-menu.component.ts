import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import { MatDialog } from '@angular/material';
import { getFromLocalStorage, clearLocalStorage, getUserType } from '../../../../shared/utils/local-storage';
import { Router } from '@angular/router';
import { EulaComponent } from '../../../home/components/eula/eula.component';
import { PhiSignComponent } from '../../../home/components/phi-sign/phi-sign.component';
import { UserService } from '../../../../core/services/user.service';

@Component({
  selector: 'app-dashboard-menu',
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.css']
})
export class DashboardMenuComponent implements OnInit {
  private userProfile: any;
  constructor(
    private router: Router,
    private authservice: AuthService,
    private userServices: UserService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.userProfile = getFromLocalStorage('user');
    this.userServices.CheckSession().subscribe((res:any) => {      
    }, error => {
      // if (res.ServiceStatus === "Error"){
      //   // this.router.navigate(['/'])
      //   console.log(res);
      // }
      console.log(error);
      
      
    });
    if (this.userProfile.EULASignDate == null) {
      setTimeout(() => {
        let eluModal = this.dialog.open(EulaComponent, {});
        eluModal.afterClosed().subscribe(result => {
          if (!result) {
            clearLocalStorage();
            this.router.navigate(['/']);
          } else {
            this.userProfile.EULASignDate = result.date;
          }
        })
      }, 100)
    } else if (this.userProfile.PHISignDate == null) {
      setTimeout(() => {
        let phiModal = this.dialog.open(PhiSignComponent, {});
        phiModal.afterClosed().subscribe(result => {
          if (!result) {
            clearLocalStorage();
            this.router.navigate(['/']);
          } else {
            this.userProfile.PHISignDate = result.date;
          }
        })
      }, 100)
    }
  }

  logout() {
    this.userServices.Logout();    
    clearLocalStorage();
    this.router.navigate(['/'])
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
