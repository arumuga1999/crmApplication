import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactManagerComponent } from './contact-manager.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { ListPageComponent } from './list-page/list-page.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path:'',
    component:ContactManagerComponent,    
    children:[
      {
        path:'',
        redirectTo:'dashboard',
        pathMatch:'full'
      },
      {
        path:'dashboard',
        component:DashboardComponent
      },
      ]
  },  
  {
    path:'data/:name',
    component:ListPageComponent,    
  },{
    path:'data/:name/detail/:type',
    component:DetailsPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactManagerRoutingModule { }
