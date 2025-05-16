import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // Inject the service
  housingService: HousingService = inject(HousingService);

  // Property to hold the housing locations
  housingLocationList: HousingLocation[] = [];

  // Base URL if needed elsewhere
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  // Use constructor to initialize the housingLocationList from service
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}