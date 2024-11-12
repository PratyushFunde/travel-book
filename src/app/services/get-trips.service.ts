import { Injectable } from '@angular/core';
import { Trip } from '../interfaces/trip.interface';

@Injectable({
  providedIn: 'root'
})
export class GetTripsService {
  constructor() { }

  trips:Trip[]=[
  {id:'trip',title:"Title 1",subtitle:'Subtitle',places:['A','B','C'],date:'10/10/10',description:"Lorem5"},
  {id:'2',title: "Title 1",subtitle:'Subtitle', places: ['New York', 'Los Angeles', 'Chicago'], date: '10 10 10', description: "Lorem ipsum dolor sit amet 1" },
  {id:'3',title: "Title 2",subtitle:'Subtitle', places: ['Houston', 'Phoenix', 'Philadelphia'], date: '11 11 11', description: "Lorem ipsum dolor sit amet 2" },
  {id:'4',title: "Title 3",subtitle:'Subtitle', places: ['San Antonio', 'San Diego', 'Dallas'], date: '12 12 12', description: "Lorem ipsum dolor sit amet 3" },
  {id:'5',title: "Title 4",subtitle:'Subtitle', places: ['San Jose', 'Austin', 'Jacksonville'], date: '01 01 13', description: "Lorem ipsum dolor sit amet 4" },
  {id:'6',title: "Title 5",subtitle:'Subtitle', places: ['Fort Worth', 'Columbus', 'Charlotte'], date: '02 02 14', description: "Lorem ipsum dolor sit amet 5" },
  {id:'7',title: "Title 6",subtitle:'Subtitle', places: ['San Francisco', 'Indianapolis', 'Seattle'], date: '03 03 15', description: "Lorem ipsum dolor sit amet 6" },
  {id:'8',title: "Title 7",subtitle:'Subtitle', places: ['Denver', 'Washington', 'Boston'], date: '04 04 16', description: "Lorem ipsum dolor sit amet 7" },
  {id:'9',title: "Title 8",subtitle:'Subtitle', places: ['El Paso', 'Nashville', 'Detroit'], date: '05 05 17', description: "Lorem ipsum dolor sit amet 8" },
  {id:'10',title: "Title 9",subtitle:'Subtitle', places: ['Portland', 'Las Vegas', 'Memphis'], date: '06 06 18', description: "Lorem ipsum dolor sit amet 9" },
  {id:'11',title: "Title 10",subtitle:'Subtitle', places: ['Louisville', 'Baltimore', 'Milwaukee'], date: '07 07 19', description: "Lorem ipsum dolor sit amet 10" },
  {id:'12',title: "Title 10",subtitle:'Subtitle', places: ['Louisville', 'Baltimore', 'Milwaukee'], date: '07 07 19', description: "Lorem ipsum dolor sit amet 10" },
];
  
  addTrip(obj:Trip){
    this.trips.unshift(obj)
  }



}
