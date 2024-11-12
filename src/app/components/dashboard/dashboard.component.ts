import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { TripListComponent } from "../trip-list/trip-list.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, TripListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
