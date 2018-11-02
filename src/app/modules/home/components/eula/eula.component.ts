import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { UserService } from '../../../../core/services/user.service';
import { getFromLocalStorage, setToLocalStorage } from '../../../../shared/utils/local-storage';

@Component({
  selector: 'app-eula',
  templateUrl: './eula.component.html',
  styleUrls: ['./eula.component.css']
})
export class EulaComponent implements OnInit {
  private user;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EulaComponent>,
    private userService: UserService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.user = getFromLocalStorage('user');
  }

  eulaSubmit() {
    this.userService.AcceptEULA().subscribe(res => {
      this.dialogRef.close({elu: true});
      this.user.EULASignDate = Date();
      setToLocalStorage('user', this.user);
    })    
  }

}
