import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonService } from '../../shared/service/common/common.service';
import { ContactService } from '../../shared/service/contact/contact.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  public viewType : String = "card";
  public data:Array<Object> = new Array();
  public source:Array<Object> = new Array();
  public color:Array<Object> = new Array();
  public routeSubscription: Subscription;
  public urlPath:String = new String();
  public pageLabel:String=new String();
  public pageConfig:Object = new Object();
  public currentRouter:Object = new Object();

  constructor(private contactService:ContactService,private commonservice:CommonService,private activatedRoute: ActivatedRoute,private router:Router) { 
    this.routeSubscription = this.activatedRoute.params.subscribe((name) => {
      console.log(name,this.router.url)    
      this.pageConfig = {...name}  
      this.urlPath = this.router.url;
      this.commonservice.getSource().subscribe((src)=>{
        this.currentRouter = src[name['name']];
        this.pageLabel = src[name['name']].label;
      })
    });
  }

  ngOnInit(): void {
    
    //this.activeView();        
    this.contactService.getColor().subscribe((color)=>{
      this.color = [...color];
    })
    this.contactService.getSource().subscribe((meta)=>{
      this.source = [...meta]
      this.contactService.getContent().subscribe((data)=>{
        this.data = [...data];
      })

    })
    
  }


  public navigate = () : void =>{
    this.commonservice.pushHeader({
      label:this.pageLabel+'(detail)',
      path:window.location.pathname+'/detail',
      type:'listpage'
    })
  }

  public navigateRoute = (arg) : void =>
  {
    if(arg['type'] != 'delete'){
      this.commonservice.pushHeader({
        label:this.pageLabel+'(detail)',
        path:window.location.pathname+'/detail',
        type:'listpage'
      })
      this.router.navigate([this.urlPath+arg['url']])
    }    
  }

  /*public activeView = () => {

    const activeColor = document.querySelectorAll('.view_icon')

    function colorLink() {

      if (activeColor) {

        activeColor.forEach(l => l.classList.remove('active'))
        this.classList.add('active')

      }

    }

    activeColor.forEach(l => l.addEventListener('click', colorLink))

  }*/

}
