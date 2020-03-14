import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { CountryDetailsComponent } from './country-details/country-details.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'Home/CountryDetails',
    pathMatch: 'full'
  },
  {
    path: 'Home',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'CountryDetails',
        pathMatch: 'full'
      },
      {
        path: 'CountryDetails',
        component: CountryDetailsComponent
      },
      {
        path: 'LanguageList',
        loadChildren: () => import('./language-list/language-list.module').then(m => m.LanguageListModule)
      },
      {
        path: 'CurrencyList',
        loadChildren: () => import('./currency-list/currency-list.module').then(m => m.CurrencyListModule)
      },
      {
        path: '**',
        redirectTo: 'CountryDetails',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'Home/CountryDetails/null',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
