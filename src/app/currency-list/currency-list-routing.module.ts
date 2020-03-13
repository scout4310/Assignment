import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrencyListComponent } from './currency-list.component';

const routes: Routes = [{ path: '', component: CurrencyListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrencyListRoutingModule { }
