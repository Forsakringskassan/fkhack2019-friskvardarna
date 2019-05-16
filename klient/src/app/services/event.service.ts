import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {_Event, Booking} from '../classes'

@Injectable({
  providedIn: 'root'
})
export class EventService {
  url: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };


  constructor(private http: HttpClient) {
    this.url = "http://192.168.32.140:8080";
  }

  getEvents(): Observable<_Event[]> {
    let url = this.url + "/events/location/1"
    return this.http.get<_Event[]>(url);
  }

  getEvent(eventid: number): Observable<_Event> {
    let url = this.url + "/events/" + String(eventid);
    return this.http.get<_Event>(url);
  }

  getUsersBookings(user: number): Observable<Booking[]> {
    let url = this.url + "/bookings/user/" + String(user);
    return this.http.get<Booking[]>(url);
  }

  postBooking(booking: Booking): void {
    let url = this.url + "/bookings"
    this.http.post(url, booking, this.httpOptions);
  }
}
