import { Component, OnInit, Inject } from '@angular/core';
import { getFromLocalStorage, setToLocalStorage } from '../../../../shared/utils/local-storage';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { UserService } from '../../../../core/services/user.service';

@Component({
  selector: 'app-user-status',
  templateUrl: './user-status.component.html',
  styleUrls: ['./user-status.component.css']
})
export class UserStatusComponent implements OnInit {
  private user:any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<UserStatusComponent>,
    private userService: UserService,
    public dialog: MatDialog,

  ) { }

  ngOnInit() {
    this.user = getFromLocalStorage('user');

  }

}
