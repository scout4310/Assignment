import {Component, OnInit } from '@angular/core';
import { CountriesServiceService, Country } from '../../countries-service.service';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { INavData } from '@coreui/angular';
import { navItems } from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {
  public sidebarMinimized = false;
  public countries: any;
  public selectedCountry: Country;
  public navItems = navItems;
  public loading = false;

  constructor(private countryService: CountriesServiceService, private router: Router, private route: ActivatedRoute) {
    this.countryService.currentCountry.subscribe((country) => {
      this.selectedCountry = country;
      this.loading = false;
    });
  }

  ngOnInit(): void {
    this.countryService.getCountryList().subscribe((res) => {
      this.countries = res;
    });
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  setCountry(countryCode: string ): void {
    this.loading = true;
    this.countryService.setSelectedCountry(countryCode);
  }
}
