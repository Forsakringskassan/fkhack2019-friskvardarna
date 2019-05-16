import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bokare',
  templateUrl: './bokare.component.html',
  styleUrls: ['./bokare.component.css']
})
export class BokareComponent implements OnInit {

  @Input() events;

  constructor() { }

  ngOnInit() {
    // Mock
    this.events = [{
      id: 1,
      day: "Mån",
      date: "10/5",
      name: "Step",
      time: "11:00",
      maxBookings: 20,
      booked: 5
    },
    {
      id: 2,
      day: "Tis",
      date: "11/5",
      name: "Core",
      time: "11:00",
      maxBookings: 25,
      booked: 6
    }]
  }

}
