import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonService } from '../../shared/service/common/common.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit,OnDestroy{
  
  public routeSubscription: Subscription;
  public pageConfig :Object= new Object();

  constructor(private commonService:CommonService,private activatedRoute: ActivatedRoute,private router:Router) {
    this.routeSubscription = this.activatedRoute.params.subscribe((name) => {
      this.pageConfig = {...name};      
    });

   }
  
  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
      this.commonService.sliceLinks()
  }

}
