import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EventService } from '../../services/event.service'
import { _Event, Booking } from '../../classes';

@Component({
  selector: 'app-booking-button',
  templateUrl: './booking-button.component.html',
  styleUrls: ['./booking-button.component.css']
})
export class BookingButtonComponent implements OnInit, OnChanges {

  @Input() event: _Event;
  @Input() bookings: Booking[];
  @Input() userid: number;
  text: string;
  booked: boolean;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.updateText();
    this.booked = false;
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      if (propName === "event" && changes[propName].currentValue != undefined && this.bookings != undefined) {
        this.updateButton(this.bookings);
      }
      else if (propName === "bookings" && changes[propName].currentValue != undefined && this.event != undefined) {
        this.updateButton(changes[propName].currentValue);
      }
    }
  }

  updateButton(bookings): void {
    console.log("updating booked")
    console.log(bookings)
    this.booked = false;
    this.updateText();
    for (let i = 0; i < bookings.length; i++) {
      if (bookings[i].event === this.event.id) {
        console.log("booked is true");
        this.booked = true;
        this.updateText();
      }
    }
  }

  onClick(): void {
    console.log(this.booked)
    if (!this.booked) {
      let booking: Booking = {
        id: undefined,
        event: this.event.id,
        userid: this.userid,
        tstamp: undefined
      }
      // Funkar inte!
      // this.eventService.postBooking(booking);
      this.event.bookings++;
    }
    else {
      this.event.bookings--;
    }
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
