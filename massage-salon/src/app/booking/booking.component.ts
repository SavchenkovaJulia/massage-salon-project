import { Component, OnInit } from "@angular/core";
import { Reservation } from "../models/reservation";
import { FormControl } from "@angular/forms";
import { Http } from "@angular/http";
import Swal from "sweetalert2";

@Component({
  selector: "app-booking",
  templateUrl: "./booking.component.html",
  styleUrls: ["./booking.component.css"]
})
export class BookingComponent implements OnInit {
  public onFormSubmit({
    value,
    valid
  }: {
    value: Reservation;
    valid: boolean;
  }) {
    this.reservation = value;
    console.log(this.reservation);
    console.log("valid: " + valid);
  }

  private treatment: string[];
  private duration: string[];
  private time: string[];

  private reservation: Reservation;
  constructor(private http: Http) {}

  onSubmit() {
    this.http
      .post("http://localhost:3000/reservation", this.reservation)
      .subscribe(res => {
        if (res.status == 200)
          Swal({
            type: "success",
            title: "Reservation is done!",
            showConfirmButton: false,
            timer: 1500
          });
        console.log(res);
      });
  }

  ngOnInit() {
    this.treatment = [
      "Traditional Thai Massage",
      "Royal Thai Massage",
      "Hot Herbal Compress Steam",
      "Foot Massage",
      "Head & Shoulder Massage",
      "Hot Stone Massage"
    ];
    this.duration = ["30 Min.", "1 Hour", "1.5 Hour"];
    this.time = [
      "9 AM",
      "10 AM",
      "11 AM",
      "12 PM",
      "1 PM",
      "2 PM",
      "3 PM",
      "4 PM",
      "5 PM",
      "6 PM",
      "7 PM"
    ];
    this.reservation = new Reservation({
      name: "",
      surname: "",
      email: "",
      phone: "",
      treatment: this.treatment[0],
      duration: this.duration[0],
      date: "",
      time: this.time[0],
      comment: ""
    });
  }
}
