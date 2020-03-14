import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesServiceService, Country } from '../countries-service.service';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent implements OnInit {

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
