import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesServiceService } from '../countries-service.service';
import { Country } from '../country-details/country-details.component';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent implements OnInit {

  public currencies: any[];

  constructor(private route: ActivatedRoute, private countryService: CountriesServiceService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const args = (<any>params);
      if (args.params && args.params.alpha3Code && args.params.alpha3Code !== 'null') {
        this.countryService.getCountryDetailsByCode(args.params.alpha3Code)
        .subscribe((res) => {
          this.currencies = (<any>res).currencies;
          console.log(this.currencies);
        });
      }
    });
  }

}
