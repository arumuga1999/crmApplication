import { EventEmitter, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PAGESOURCE } from 'src/app/util/common';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  breadCrumbs:Array<Object> = new Array();
  detailPage:Object = new Object();
  linkEmitter = new EventEmitter();
  activeEmitter = new EventEmitter();
  constructor() { }

  public getSource () :Observable<{}> {
    return of(PAGESOURCE)
  }

  public pushHeader(link){
    console.log(JSON.parse(JSON.stringify(this.breadCrumbs)))
    this.breadCrumbs = [...this.breadCrumbs,link];
    this.linkEmitter.emit(this.breadCrumbs);
  }

  public assignHeader(link){
    this.breadCrumbs =  [link];
    this.linkEmitter.emit(this.breadCrumbs);
  }

  public sliceLinks(){

    if(this.breadCrumbs?.length){
      this.breadCrumbs.splice(this.breadCrumbs.length-1,1)
    }
    this.linkEmitter.emit(this.breadCrumbs)
  }

}
