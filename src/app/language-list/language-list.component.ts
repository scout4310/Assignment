import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesServiceService, Country } from '../countries-service.service';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.css']
})
export class LanguageListComponent implements OnInit {

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
