import { ServiceGallery } from "../models/service-gallery";
import { Injectable } from "@angular/core";

@Injectable()
export class ServiceGalleryService {
  information: ServiceGallery[] = [
    new ServiceGallery(
      "Royal Thai Massage",
      "Royal Thai massage was developed specifically to treat Thai royalty and thus involves particular skill and expertise. During a treatment many specialised massage techniques are applied, as well as gentle physical adjustments. Royal Thai massage is beneficial for overall health.",
      "../assets/service/6.jpg",
      "Head & Shoulder Massage",
      "Our head massage treatments include massage of the back, arms, shoulders and neck. Head massage and face massage make up the main part of this very popular treatment.",
      "../assets/service/1.jpg"
    ),
    new ServiceGallery(
      "Hot Herbal Compress Steam",
      "Pre-packed bundles of herbs; shipped directly from Thailand by Nattaya, are heated using a purposed designed steamer, just enough to release the beneficial oils of the herbs which are then applied to the relevant parts of the body.",
      "../assets/service/2.jpg",
      "Hot Stone Massage",
      "An authentic Thai hot stone massage however, uses the hot stones to their true potential, as the stones; following strategic placement, are then re-heated and used in conjunction with hot oils to massage from the feet to the upper torso using the traditional Thai massage method, thus generating a deeper heat into the muscles.",
      "../assets/service/4.jpg"
    ),
    new ServiceGallery(
      "Foot Massage",
      "Thai Foot Massage is relaxing yet highly invigorating. The uniqueness of Thai Foot Massage is its ability to include the receiver and giver in its benefits. Both come out feeling more open, stretched, refreshed and balanced.",
      "../assets/service/5.jpg",
      "Traditional Thai Massage",
      "Traditional Thai massage rarely uses oils or lotions, and the recipient remains clothed during a treatment. There is constant body contact between the practitioner and client, but rather than rubbing on muscles, the body is compressed, pulled, stretched and rocked in order to clear energy blockages and relieve tension.",
      "../assets/service/7.jpg"
    )
  ];

  getAllInformation() {
    return this.information;
  }
}
