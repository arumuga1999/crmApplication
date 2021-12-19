import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Sort } from 'src/app/util/sort';

@Directive({
  selector: '[appSort]'
})
export class SortDirective {

  @Input() appSort: Array<any>;

  constructor(private targetElement : ElementRef) { }

  @HostListener("click",["$event"])
  sorData(evnt){

    const sort = new Sort();

    const element = this.targetElement.nativeElement;

    const order = element.getAttribute("data-order");

    const type = element.getAttribute("data-type");

    const property = element.getAttribute("data-property");

    //const target = element.getAttribute("data-element");
    const targetElement = evnt?.srcElement;
    const icon = (targetElement && targetElement.id === 'icon_order') ? targetElement : targetElement.querySelector('#icon_order');
    console.log(evnt?.srcElement?.id)
    var listDoc = element?.parentElement?.querySelectorAll('#icon_order')?.forEach(e => {
      e.className = ""      
      e.classList.add("bx");
      e.classList.add("bxs-sort-alt");
    });
    
    if(order == 'desc'){
      this.appSort.sort(sort.sorting(property,order,type));
      element.setAttribute("data-order","asc");
      icon.className = ""      
      icon.classList.add("bx");
      icon.classList.add("bx-caret-down");
    }else{
      this.appSort.sort(sort.sorting(property,order,type));
      element.setAttribute("data-order","desc");
      icon.className = ""      
      icon.classList.add("bx");
      icon.classList.add("bx-caret-up");
      //<i class='bx bx-sort-a-z'></i>
    }    

  }

}
