import {CommonModule} from '@angular/common';
import { Component,OnInit} from '@angular/core';
import{Router} from '@angular/router';
import{FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/Forms';
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-edit-trip',
  imports: [CommonModule,ReactiveFormsModule],
  standalone: true,
  templateUrl: './edit-trip.component.html',
  styleUrl: './edit-trip.component.css'
})



export class EditTripComponent {
f: any;
addForm: any;
public editForm!: FormGroup;

trip!: Trip;
submitted = false;
message: string = '';

constructor(
  private formBuilder:FormBuilder,
  private router: Router,
  private tripDataService: TripDataService
){}

ngOnInit(): void {
  // Retrieve stashed trip ID
  const tripCode = localStorage.getItem("tripCode");
  if (!tripCode) {
    alert("Something went wrong; couldn’t find where I stashed tripCode!");
    this.router.navigate(['']);
    return;
  }

  console.log('EditTripComponent::ngOnInit');
  console.log('tripCode:', tripCode);

  // Initialize the edit form
  this.editForm = this.formBuilder.group({
    _id: [],
    code: [tripCode, Validators.required],
    name: ["", Validators.required],
    length: ["", Validators.required],
    start: ["", Validators.required],
    resort: ["", Validators.required],
    perPerson: ["", Validators.required],
    image: ["", Validators.required],
    description: ["", Validators.required]
  });

  // Fetch trip data using the trip code
  this.tripDataService.getTrip(tripCode).subscribe({
    next: (value: any) => {
      if (!value || value.length === 0) {
        this.message = 'No Trip Retrieved!';
      } else {
        this.trip = value[0];
        this.editForm.patchValue(this.trip);
        this.message = `Trip: ${tripCode} retrieved successfully.`;
      }
      console.log(this.message);
    },
    error: (error: any) => {
      console.error('Error retrieving trip:', error);
    }
  });
}

public onSubmit() {
  this.submitted = true;
    if(this.editForm.valid)
{
    this.tripDataService.updateTrip(this.editForm.value)
      .subscribe({
      next: (value: any) => {
      console.log(value);
      this.router.navigate(['']);
},
   error: (error: any) => {
  console.log('Error: ' + error);
 }
})
  }
   

}


}
