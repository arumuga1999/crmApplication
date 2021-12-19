import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SIDEBAR } from 'src/app/util/common';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }

  getSidebar () :Observable<any> {
      return of(SIDEBAR);
  }
}
