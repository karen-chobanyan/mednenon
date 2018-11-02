import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-personalized-tumor-board',
  templateUrl: './personalized-tumor-board.component.html',
  styleUrls: ['./personalized-tumor-board.component.css']
})
export class PersonalizedTumorBoardComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<PersonalizedTumorBoardComponent>,
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
