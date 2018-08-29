import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';



import { AppComponent } from './app.component';
import { StaffComponent } from './staff/staff.component';
import { MemberComponent } from './staff/member/member.component';
import { StaffService } from './services/staff.service';
import { HeaderComponent } from './header/header.component';
import { PricesComponent } from './prices/prices.component';
import { ServiceComponent } from './service/service.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';

import { ServiceGalleryService } from './services/service-gallery.service';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule	} from "@angular/material";
import {MatInputModule} from '@angular/material';


import { ScrollToModule } from 'ng2-scroll-to-el';


const appRouters: Routes = [
  {path: '', component: HomeComponent}, 
  {path: "service", component: ServiceComponent},
  {path: 'prices', component: PricesComponent},
  {path: 'reservation', component: BookingComponent},
  {path: 'staff', component: StaffComponent},
  {path: 'contact', component: FooterComponent},
  ]




@NgModule({
  declarations: [
    AppComponent,
    StaffComponent,
    MemberComponent,
    HeaderComponent,
    PricesComponent,
    ServiceComponent,
    FooterComponent,
    HomeComponent,
    BookingComponent,
    
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatInputModule,
    RouterModule.forRoot(appRouters),
    ScrollToModule.forRoot(),
    HttpModule
  ],
  providers: [StaffService, ServiceGalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
