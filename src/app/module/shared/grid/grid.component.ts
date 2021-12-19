import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit,OnChanges {

  @Input() source:Object = new Object();
  @Input() data:Array<Object> = new Array();
  @Input() color:Array<Object> = new Array();
  @Input() config:Object = {};
  @Output() navigated:EventEmitter<any> = new EventEmitter<any>();

  constructor(private router: Router) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.config)
  }

  ngOnInit(): void {

  }

  public navigate = (type,event?) =>{      
    this.navigated.emit({url:`/detail/${type}`,type:type})
    //this.router.navigate([`/${this.config['name']}/detail/edit`]);
  }
  public delete = ()=>{

  }
}
