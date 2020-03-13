import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LanguageListRoutingModule } from './language-list-routing.module';
import { LanguageListComponent } from './language-list.component';


@NgModule({
  declarations: [LanguageListComponent],
  imports: [
    CommonModule,
    LanguageListRoutingModule
  ]
})
export class LanguageListModule { }
