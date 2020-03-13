import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyListRoutingModule } from './currency-list-routing.module';
import { CurrencyListComponent } from './currency-list.component';


@NgModule({
  declarations: [CurrencyListComponent],
  imports: [
    CommonModule,
    CurrencyListRoutingModule
  ]
})
export class CurrencyListModule { }
