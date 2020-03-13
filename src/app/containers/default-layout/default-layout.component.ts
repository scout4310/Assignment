import {Component, OnInit } from '@angular/core';
import { CountriesServiceService } from '../../countries-service.service';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { INavData } from '@coreui/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {
  public sidebarMinimized = false;
  public countries: any;
  public selectedCountryCode: string;
  public selectedCountryName: string;
  public selectedRoute: string;
  public navItems: INavData[];

  constructor(private countryService: CountriesServiceService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.countryService.getCountryList().subscribe((res) => {
      this.countries = res;
    });
    this.updateNavRoutes();
  }

  updateNavRoutes() {
    if (this.selectedCountryCode) {
      this.navItems = [
        {
          name: 'Home',
          url: '/Home/CountryDetails/' + this.selectedCountryCode,
          icon: 'icon-drop'
        },
        {
          name: 'Language List',
          url: '/Home/LanguageList/' + this.selectedCountryCode,
          icon: 'icon-drop'
        },
        {
          name: 'Currency List',
          url: '/Home/CurrencyList/' + this.selectedCountryCode,
          icon: 'icon-drop'
        },
      ];
    } else {
      this.navItems = [
        {
          name: 'Home',
          url: '/Home/CountryDetails/null',
          icon: 'icon-drop'
        },
        {
          name: 'Language List',
          url: '/Home/LanguageList/null',
          icon: 'icon-drop'
        },
        {
          name: 'Currency List',
          url: '/Home/CurrencyList/null',
          icon: 'icon-drop'
        },
      ];
    }
    console.log(this.navItems);
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  setCountry(countryName: string, countryCode: string, ): void {
    this.selectedCountryCode = countryCode;
    this.selectedCountryName = countryName;
    this.updateNavRoutes();
    this.router.navigate([this.router.url.substr(0, this.router.url.length - 4) + '/', this.selectedCountryCode]);
  }
}
