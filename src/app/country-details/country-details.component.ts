import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CountriesServiceService } from '../countries-service.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  private country: Country;

  constructor(private route: ActivatedRoute, private countryService: CountriesServiceService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const args = (<any>params);
      if (args.params && args.params.alpha3Code && args.params.alpha3Code !== 'null') {
        this.countryService.getCountryDetailsByCode(args.params.alpha3Code)
        .subscribe((res) => {
          this.country = new Country(
            (<any>res).name,
            (<any>res).capital,
            (<any>res).region,
            (<any>res).subregion,
            (<any>res).population,
            (<any>res).area,
            (<any>res).alpha3Code,
          );
        });
      }
    });
  }
}

export class Country {

  constructor(
    private name: string,
    private capital: string,
    private region: string,
    private subregion: string,
    private population: number,
    private area: number,
    private alpha3Code: string,
  ) { }
}
