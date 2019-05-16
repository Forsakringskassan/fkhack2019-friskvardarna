import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bokare',
  templateUrl: './bokare.component.html',
  styleUrls: ['./bokare.component.css']
})
export class BokareComponent implements OnInit {

  constructor() { }
  events;

  ngOnInit() {
    this.events = [{
      dag: "Mån",
      datum: "10/5",
      maxDeltagare: 20,
      deltagare: 5
    },
    {
      dag: "Tis",
      datum: "11/5",
      maxDeltagare: 25,
      deltagare: 6
    }]
  }

}
