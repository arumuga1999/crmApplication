import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    redirectTo:'main',
    pathMatch:'full'    
  },
  {
    path:'main',
    loadChildren: () => import('./module/contact-manager/contact-manager.module').then(m=>m.ContactManagerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
