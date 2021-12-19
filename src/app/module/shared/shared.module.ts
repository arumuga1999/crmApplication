import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { GridComponent } from './grid/grid.component';
import { ContactService } from './service/contact/contact.service';
import { SortDirective } from './directive/sort/sort.directive';
import { GetColorPipe } from './pipe/color/get-color.pipe';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CardComponent,
    GridComponent,
    SortDirective,
    GetColorPipe,
    FormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    CardComponent,
    GridComponent,
    FormComponent
  ],
  providers:[
    ContactService
  ]
})
export class SharedModule { }
