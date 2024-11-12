import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { TripComponent } from "../trip/trip.component";
import { GetTripsService } from '../../services/get-trips.service';
import { trigger, transition, style, animate,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-trip-list',
  standalone: true,
  imports: [TripComponent,NgFor],
  templateUrl: './trip-list.component.html',
  styleUrl: './trip-list.component.scss',
 
})
export class TripListComponent {
 constructor(private subService:GetTripsService){}

 items=this.subService.trips;


 currentIndex = 0;
 itemsPerPage = 3;

 getVisibleItems() {
  return this.items.slice(this.currentIndex, this.currentIndex + this.itemsPerPage);
}

nextItems() {
  if (this.currentIndex + this.itemsPerPage < this.items.length) {
    this.currentIndex += this.itemsPerPage;
  }
}

prevItems() {
  if (this.currentIndex > 0) {
    this.currentIndex -= this.itemsPerPage;
  }
}

}
