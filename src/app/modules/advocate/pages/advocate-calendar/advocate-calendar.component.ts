import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advocate-calendar',
  templateUrl: './advocate-calendar.component.html',
  styleUrls: ['./advocate-calendar.component.css']
})
export class AdvocateCalendarComponent implements OnInit {
  private advocate = [];
  public advocateData = [];
  constructor() { }

  ngOnInit() {

    this.advocate = 
    [
      {
        name: "Pepper Pots",
        city: "San Francisco, CA",
        position: "Advocate"
      }
    ]
    this.advocateData = this.advocate;
  }

}
