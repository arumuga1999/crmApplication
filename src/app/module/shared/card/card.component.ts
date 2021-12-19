import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { CommonService } from '../service/common/common.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{

  @Input() formItem: any
  @Input() myForm:FormGroup
  @Input() readOnly;
  form: FormGroup

  constructor(private rootFormGroup: FormGroupDirective,private fb:FormBuilder,private commonService:CommonService) {
   
    this.form = this.rootFormGroup.control
  }

  ngOnInit(): void {
    console.log(this.myForm)
   // throw new Error('Method not implemented.');
  }

  public getSection = (dynamicForms:any) =>{
    
    let formGroup:FormGroup=this.fb.group({});

    dynamicForms.forEach(formItem => {

      const formControl = this.fb.control(formItem.value, formItem.validators)
      formGroup.addControl(formItem.id, formControl)

    })    

    return formGroup;
  }

  public addArrayForm = (form1) =>{        
    this.getDynamicGrp.push(this.getSection(this.formItem.fields))        
  }

  public remove = (i,formArray) =>{
      this.getDynamicGrp.removeAt(i)
  }

  get getDynamicGrp (){
    return <FormArray> this.myForm.get(this.formItem.id) as FormArray
  }

  get fieldValue (){
    return <any> this.myForm.get(this.formItem.id).value;
  }

}
