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
  text1: string;
  text2: string;
  text3: string;

  events: _Event[];
  bookings: Booking[];


  ngOnInit() {
    this.user = {
        name: "Simon"
      }

      this.text1 = "Sundsvall";
      this.text2 = "Stockholm";
      this.text3 = "Karlskrona";

      this.user = {
        name: "Robert",
        id: 5
      }
    this.eventService.getEvents().subscribe(events => {
      this.events = events;
      for (let i = 0; i < this.events.length; i++) {
        this.events[i].eventdate = this.events[i].eventdate.substring(8, 10) + "/" + this.events[i].eventdate.substring(5, 7)
        this.events[i].eventday = this.translateDay(this.events[i].eventday);
      }
    });
    this.eventService.getUsersBookings(this.user.id).subscribe(bookings => {
      this.bookings = bookings;
    })
  }

  onClick1(): void {
    if(this.text1 == "Sundsvall"){
      this.text2 = "Sundsvall";
      this.text1 = "Stockholm";
    } else if(this.text1 == "Stockholm"){
      this.text1 = "Sundsvall";
      this.text2 = "Stockholm";
    }

    
  }

  onClick2(): void {
    if(this.text1 == "Sundsvall"){
      this.text3 = "Sundsvall";
      this.text1 = "Karlskrona";
    } else if(this.text1 == "Karlskrona"){
      this.text1 = "Sundsvall";
      this.text3 = "Karlskrona";
    }
  }

  translateDay(day: string): string {
    switch (day) {
      case "MON":
        return "Mån";
      case "TUE":
        return "Tis";
      case "WED":
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
