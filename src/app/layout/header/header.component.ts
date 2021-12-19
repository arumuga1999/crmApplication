import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/module/shared/service/common/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public header:Array<Object> = new Array();
  constructor(private commonservice:CommonService) { }

  ngOnInit(): void {
    this.commonservice.linkEmitter.subscribe((data)=>{
      this.header = [...data];
      console.log(data)
    })
  }

}
