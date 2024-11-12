import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TripListComponent } from './components/trip-list/trip-list.component';
import { AddTripComponent } from './components/add-trip/add-trip.component';
import { SingleTripComponent } from './components/single-trip/single-trip.component';

export const routes: Routes = [
    {path:'',component:DashboardComponent},
    {path:'dashboard',component:DashboardComponent},

    {path:'add-trip',component:AddTripComponent},
    {path:'trip/:id',component:SingleTripComponent},
  
];
