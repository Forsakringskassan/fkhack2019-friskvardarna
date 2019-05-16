import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-booking-button',
  templateUrl: './booking-button.component.html',
  styleUrls: ['./booking-button.component.css']
})
export class BookingButtonComponent implements OnInit {

  @Input() eventId: number;
  @Input() booked: boolean;
  text: string;

  constructor() { }

  ngOnInit() {
    this.updateText();
  }

  onClick(): void {
    this.booked = !this.booked;
    this.updateText();
  }

  updateText(): void {
    if (this.booked) {
      this.text = "Avboka";
    }
    else {
      this.text = "Boka";
    }
  }

}
