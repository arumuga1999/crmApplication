import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactManagerRoutingModule } from './contact-manager-routing.module';
import { ListPageComponent } from './list-page/list-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { ContactManagerComponent } from './contact-manager.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    ListPageComponent,
    DetailsPageComponent,
    ContactManagerComponent,
    DashboardComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    ContactManagerRoutingModule,
    SharedModule
  ]
})
export class ContactManagerModule { }
