import { Component, OnInit, Input } from "@angular/core";
import { Staff } from "../../models/staff";

@Component({
  selector: "app-member",
  templateUrl: "./member.component.html",
  styleUrls: ["./member.component.css"]
})
export class MemberComponent implements OnInit {
  @Input()
  staff: Staff;
  constructor() {}

  ngOnInit() {}
}
