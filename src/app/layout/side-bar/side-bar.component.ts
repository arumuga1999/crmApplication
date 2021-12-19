import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/module/shared/service/common/common.service';
import { SidebarService } from 'src/app/module/shared/service/sidebar/sidebar.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  name = "Angular Toggle Show Hide";
  showMyContainer: boolean = false;

  status: boolean = false;
  statusLink: boolean = false;
  public sidebarOpt: Array<Object> = new Array();
  constructor(private sidebarService:SidebarService,private commonService:CommonService) {
    
   }

  ngOnInit(): void {
    console.log(window.location.pathname)
    
      
    this.sidebarService.getSidebar().subscribe((sidebar)=>{
      this.sidebarOpt = [...sidebar];
      setTimeout(()=>{
        this.activeSidebar()
      },100)
      
    })
  }

  public clickEvent() {
    this.status = !this.status;
    //this.statusLink = !this.statusLink;

    if (this.statusLink) {
      setTimeout(() => {
        this.statusLink = false;
      }, 230);
    } else {
      this.statusLink = true;
    }
  }

  private activeSidebar = () =>{
    console.log("linkCOlor")
    const toggle = document.getElementById('toogle-icon'),
      nav = document.getElementById('nav-bar')
    
    if (toggle && nav) {
      toggle.addEventListener('click', () => {
    
        nav.classList.toggle('show')    
      })
    }

    const linkColor = document.querySelectorAll('.nav_link')    
    function colorLink() {      
      if (linkColor) {

        linkColor.forEach(l => l.classList.remove('active'))
        let id = window.location.pathname.replace(/\//g, "_");
        const activePath = document.querySelector('#'+id)        
        activePath.classList.add('active')

      }

    }

    linkColor.forEach(l => l.addEventListener('click', colorLink))
    colorLink();
  }

  public navigate = (link) =>{
    setTimeout(()=>{
      this.commonService.assignHeader(link);
    },100)    
  }

}
