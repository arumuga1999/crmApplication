import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CONTACT,CONTACTMETA, FORMDATA, FORMMETA, STATUSCOLOR } from '../../../../util/contact';




@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  getContent(): Observable<any> {
    return of(CONTACT);
  }

  getSource():Observable<any>{
    return of(CONTACTMETA)
  }

  getColor():Observable<any>{
    return of(STATUSCOLOR)
  }

  getContactForm():Observable<any>{
    return of(FORMMETA)
  }

  getFormData():Observable<any>{
    return of(FORMDATA)
  }

}
