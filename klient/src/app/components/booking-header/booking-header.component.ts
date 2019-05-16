import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-booking-header',
  templateUrl: './booking-header.component.html',
  styleUrls: ['./booking-header.component.css']
})
export class BookingHeaderComponent implements OnInit {

  constructor() { }
  user;
  text1: string;
  text2: string;
  text3: string;

  ngOnInit() {
    this.user = {
        name: "Simon"
      }

      this.text1 = "Sundsvall";
      this.text2 = "Stockholm";
      this.text3 = "Karlskrona";
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

}
