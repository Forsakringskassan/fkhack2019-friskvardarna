import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { _Event, Booking } from '../../classes';

@Component({
  selector: 'app-bokare',
  templateUrl: './bokare.component.html',
  styleUrls: ['./bokare.component.css']
})
export class BokareComponent {

  @Input() events: _Event[];
  @Input() bookings: Booking[];
  @Input() userid: number;

  constructor() { }

  // ngOnChanges(changes: SimpleChanges) {
  //   for (let propName in changes) {
  //     if (propName === "events" && changes[propName] && this.bookings) {
  //       this.updateButtons();
  //     }
  //     else if (propName === "bookings" && changes[propName] && this.events) {
  //       this.updateButtons();
  //     }
  //   }
  // }

  // updateButtons(): void {

  // }

}
