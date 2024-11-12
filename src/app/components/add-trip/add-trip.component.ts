import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControlName, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetTripsService } from '../../services/get-trips.service';


@Component({
  selector: 'app-add-trip',
  standalone: true,
  imports: [NgFor,FormsModule,ReactiveFormsModule],
  templateUrl: './add-trip.component.html',
  styleUrl: './add-trip.component.scss'
})
export class AddTripComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder,private subService:GetTripsService) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      places: this.fb.array([], Validators.required),
      date: ['', Validators.required],
      description: ['', Validators.required],
      subtitle:['',Validators.required]
    });
  }

  // Getter for accessing places FormArray
  get places(): FormArray {
    return this.form.get('places') as FormArray;
  }

  // Method to add a new place
  addPlace() {
    this.places.push(this.fb.control(''));
  }

  // Method to remove a place
  removePlace(index: number) {
    this.places.removeAt(index);
  }

  // Submit form data
  onSubmit() {
    if (this.form.valid) {
      const newObjectWithId = { ...this.form.value, id: Date.now().toString() };
      console.log(newObjectWithId);
      this.subService.addTrip(newObjectWithId)
    }
  }

}
