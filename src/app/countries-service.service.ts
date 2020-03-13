import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { EventEmitter } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class CountriesServiceService {

  public selectedCountryCode: string;
  public onCountryChnaged: EventEmitter;

  constructor(private http: HttpClient) {
  }

  setSelectedCountry(countryCode: string) {
    this.selectedCountryCode = countryCode;
    this.onCountryChnaged.emit(this.selectedCountryCode);
  }

  getCountryList() {
    return this.http.get('https://restcountries.eu/rest/v2/all?fields=name;alpha3Code');
  }

  getCountryDetailsByCode(code: string) {
    return this.http.get('https://restcountries.eu/rest/v2/alpha/' + code);
  }
}
