import { Component ,Input} from '@angular/core';
import { Trip } from '../../interfaces/trip.interface';
// import { Router } from 'express';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip',
  standalone: true,
  imports: [],
  templateUrl: './trip.component.html',
  styleUrl: './trip.component.scss'
})
export class TripComponent {
  @Input()data!:Trip ;

  constructor(private router:Router){}


  viewTrip(id: string) {
    this.router.navigate(['/trip', id]);
  }

}
