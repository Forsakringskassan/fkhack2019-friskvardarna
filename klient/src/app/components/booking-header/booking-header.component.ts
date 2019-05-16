import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service'
import { _Event, Booking } from '../../classes'

@Component({
  selector: 'app-booking-header',
  templateUrl: './booking-header.component.html',
  styleUrls: ['./booking-header.component.css']
})
export class BookingHeaderComponent implements OnInit {

  constructor(private eventService: EventService) { }
  user;
  events: _Event[];
  bookings: Booking[];

  ngOnInit() {
    this.user = {
        name: "Robert",
        id: 5
      }
    this.eventService.getEvents().subscribe(events => {
      this.events = events;
      for (let i = 0; i < this.events.length; i++) {
        this.events[i].eventdate = this.events[i].eventdate.substring(5, 7) + "/" + this.events[i].eventdate.substring(8, 10)
        this.events[i].eventday = this.translateDay(this.events[i].eventday);
      }
    });
    this.eventService.getUsersBookings(this.user.id).subscribe(bookings => {
      this.bookings = bookings;
    })
  }

  translateDay(day: string): string {
    switch (day) {
      case "MON":
        return "Mån";
      case "TUE":
        return "Tis";
      case "WEN":
        return "Ons";
      case "THU":
        return "Tor";
      case "FRI":
        return "Fre";
      case "SAT":
        return "Lör";
      case "SUN":
        return "Sön";
      default:
        return "ERROR";
    }
  }
}
