import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { UserService } from '../../../../core/services/user.service';
import { getFromLocalStorage, setToLocalStorage } from '../../../../shared/utils/local-storage';

@Component({
  selector: 'app-phi-sign',
  templateUrl: './phi-sign.component.html',
  styleUrls: ['./phi-sign.component.css']
})
export class PhiSignComponent implements OnInit {
  private user;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<PhiSignComponent>,
    private userService: UserService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.user = getFromLocalStorage('user');
  }
  
  phiSubmit(){
    this.userService.AcceptPHI().subscribe(res => {
      this.dialogRef.close({phi: true});
      this.user.PHISignDate = Date();
      setToLocalStorage('user', this.user);      
    })    
  }
}
