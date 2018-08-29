import { Component, OnInit } from "@angular/core";
import { Staff } from "../models/staff";
import { StaffService } from "../services/staff.service";

@Component({
  selector: "app-staff",
  templateUrl: "./staff.component.html",
  styleUrls: ["./staff.component.css"]
})
export class StaffComponent implements OnInit {
  staff: Staff[] = [];
  constructor(private StaffService: StaffService) {}

  ngOnInit() {
    this.staff = this.StaffService.getAllMembers();
    window.scrollTo(500, 200);
  }
}
