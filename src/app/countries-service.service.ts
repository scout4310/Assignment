import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { EventEmitter } from 'protractor';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesServiceService {

  public country: Country;
  public countryChanged = new Subject<Country>();
  currentCountry = this.countryChanged.asObservable();

  constructor(private http: HttpClient) {
  }

  setSelectedCountry(countryCode: string) {
    this.setSelectedCountryByCode(countryCode);
  }

  getCountryList() {
    return this.http.get('https://restcountries.eu/rest/v2/all?fields=name;alpha3Code');
  }

  setSelectedCountryByCode(code: string) {
    this.http.get('https://restcountries.eu/rest/v2/alpha/' + code)
    .subscribe((res) => {
      this.country = new Country(
        (<any>res).name,
        (<any>res).capital,
        (<any>res).region,
        (<any>res).subregion,
        (<any>res).population,
        (<any>res).area,
        (<any>res).alpha3Code,
        (<any>res).languages,
        (<any>res).currencies,
      );
      this.countryChanged.next(this.country);
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
    private languages: number,
    private currencies: string,
  ) { }
}