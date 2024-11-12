import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetTripsService } from '../../services/get-trips.service';
import { Trip } from '../../interfaces/trip.interface';
import { NgFor ,DatePipe} from '@angular/common';
import { format } from 'date-fns';


@Component({
  selector: 'app-single-trip',
  standalone: true,
  imports: [NgFor],
  templateUrl: './single-trip.component.html',
  styleUrls:   ['./single-trip.component.scss']
})
export class SingleTripComponent {

  constructor(private route: ActivatedRoute,private subService:GetTripsService) { }

  trips=this.subService.trips;

  tripId: string | undefined;
  trip: any;
  ngOnInit(): void {
    // Get the trip ID from the route
    this.tripId = this.route.snapshot.paramMap.get('id') as string;
    
    // Find the trip details by ID
    this.trip = this.trips.find(t => t.id == this.tripId);
    console.log(this.trips)
    console.log(this.trip)

   

    

  }

}