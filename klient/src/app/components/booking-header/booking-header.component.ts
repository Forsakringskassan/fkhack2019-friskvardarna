import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-booking-header',
  templateUrl: './booking-header.component.html',
  styleUrls: ['./booking-header.component.css']
})
export class BookingHeaderComponent implements OnInit {

  constructor() { }
  user;

  ngOnInit() {
    this.user = {
        name: "Robert"
      }
  }

}
