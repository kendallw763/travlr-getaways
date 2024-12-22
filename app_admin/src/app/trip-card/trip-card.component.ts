import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router} from '@angular/router';
import {Trip} from '../models/trip';

@Component({
  selector: 'app-trip-card', // Fixed quotes
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css' ] // Fixed typo in "styleUrls"
})
export class TripCardComponent implements OnInit {


  @Input() trip: any; // Removed incorrect syntax from @Input decorator

  constructor(private router: Router) {}
 

  ngOnInit(): void {
    // Initialization logic, if needed
  }

  public editTrip(trip:Trip){
    localStorage.removeItem('tripCode');
    localStorage.setItem('TripCode', 'trip.code');
    this.router.navigate(['edit-trip']);
  }
}


