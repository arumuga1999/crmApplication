import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public routeSubscription: Subscription;
  constructor(private activatedRoute: ActivatedRoute) { 
    this.routeSubscription = this.activatedRoute.params.subscribe((name) => {
      console.log(name)
    });
  }

  ngOnInit(): void {
  }

}
