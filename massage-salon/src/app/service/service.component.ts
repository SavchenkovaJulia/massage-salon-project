import { Component, OnInit } from "@angular/core";
import { ServiceGallery } from "../models/service-gallery";
import { ServiceGalleryService } from "../services/service-gallery.service";

@Component({
  selector: "app-service",
  templateUrl: "./service.component.html",
  styleUrls: ["./service.component.css"]
})
export class ServiceComponent implements OnInit {
  information: ServiceGallery[] = [];

  constructor(private ServiceGalleryService: ServiceGalleryService) {}

  ngOnInit() {
    this.information = this.ServiceGalleryService.getAllInformation();
  }
}
