import { Injectable } from "@angular/core";
import { Staff } from "../models/staff";

@Injectable()
export class StaffService {
  staff: Staff[] = [
    new Staff(
      "Serika",
      "Certified Instructor of Thai Yoga Massage",
      "../assets/staff/Tina-7333.jpg"
    ),
    new Staff(
      "Mika",
      "Professional masters of Thai massage",
      "../assets/staff/Patty-4.jpg"
    ),
    new Staff(
      "Longwei",
      "Master of Chinese massage Gouache",
      "../assets/staff/Robbie-7677.jpg"
    ),
    new Staff(
      "Yoshe",
      "Master of Chinese massage Gouache",
      "../assets/staff/Wandee-6.jpg"
    ),
    new Staff(
      "Ling",
      "Professional masters of Thai massage",
      "../assets/staff/Robbie-7677.jpg"
    ),
    new Staff(
      "Noriko",
      "Certified Instructor of Thai Yoga Massage",
      "../assets/staff/JOy-7412.jpg"
    ),
    new Staff(
      "Shanti",
      "Certified Instructor of Thai Yoga Massage",
      "../assets/staff/Patty-4.jpg"
    ),
    new Staff(
      "Chi",
      "Professional masters of Thai massage",
      "../assets/staff/June-2.jpg"
    )
  ];

  getAllMembers() {
    return this.staff;
  }
}
