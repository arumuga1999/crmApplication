import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from '../../shared/service/sidebar/sidebar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private sidebarService:SidebarService,private router:Router) { }
  public sidebarOpt: Array<Object> = new Array();

  ngOnInit(): void {
    this.sidebarService.getSidebar().subscribe((sidebar)=>{
      this.sidebarOpt = [...sidebar];
    });
  }

  public navigate = (url) =>{
    this.router.navigate([url])
  } 
}
