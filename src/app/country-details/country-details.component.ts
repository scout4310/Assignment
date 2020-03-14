import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CountriesServiceService, Country } from '../countries-service.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  private country: Country;

  constructor(private route: ActivatedRoute, private countryService: CountriesServiceService) {
    this.countryService.currentCountry.subscribe((country) => {
      this.country = country;
    });
  }

  ngOnInit(): void {
    this.country = this.countryService.country;
  }
}
