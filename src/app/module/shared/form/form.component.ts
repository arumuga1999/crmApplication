import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { CommonService } from '../service/common/common.service';
import { ContactService } from '../service/contact/contact.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() config: Object = {};
  public myForm: FormGroup;
  public dynamicFormFields: Array<Object> = new Array();
  public currentForm: Object = new Object();
  public data = {}
  public readonly: boolean = false;
  //generated= false;

  constructor(private fb: FormBuilder, private commonService: CommonService, private contactService: ContactService) {
    //this.form = this.rootFormGroup.control
  }

  ngOnInit(): void {

    this.myForm = this.fb.group({})
    this.currentForm = this.commonService.breadCrumbs[this.commonService.breadCrumbs.length - 1];
    console.log(this.config,"dfasfdasfdasf")

    this.contactService.getFormData().subscribe((data) => {
      this.data = { ...data };
      console.log(this.config,"dfasfdasfdasf")  
      this.contactService.getContactForm().subscribe((formdata) => {

        if (this.config['type'] == 'view') {                          
          this.readonly = true;
        }

        this.dynamicFormFields = [...formdata];
        this.addF(this.dynamicFormFields)
  
        if (this.config['type'] !== 'create') {
          this.myForm.setValue(Object.assign(this.myForm.value, this.data));
        }                
  
      })

    });    


  }

  public addF = (dynamicForms) => {

    dynamicForms.forEach(formItem => {

      if (formItem.type !== 'section' && formItem.type !== 'sectionArray') {
        const formControl = this.fb.control(formItem.value, formItem.validators)
        this.myForm.addControl(formItem.id, formControl)
      }

      else if (formItem.type == 'section') {

        this.myForm.addControl(formItem.id, this.getSection(formItem.fields))

      }

      else if (formItem.type == 'sectionArray') {

        const dynamicArr = this.getSection(formItem.fields)
        let grpArray = new Array();

        if (this.data?.[formItem.id]?.length) {

          this.data[formItem.id].map((e) => grpArray.push(dynamicArr));

        } else {

          grpArray.push(dynamicArr)

        }

        const formarray = this.fb.array(grpArray, [])
        this.myForm.addControl(formItem.id, formarray)
        formItem['formGrp'] = dynamicArr
      }

    })

    console.log(this.myForm, "FOrmmmmm");
  }

  public getSection = (dynamicForms: any) => {

    let formGroup: FormGroup = this.fb.group({});

    dynamicForms.forEach(formItem => {

      const formControl = this.fb.control(formItem.value, formItem.validators)
      formGroup.addControl(formItem.id, formControl)

    })

    return formGroup;
  }

  public submit = () => {
    console.log(this.myForm)
  }
}
