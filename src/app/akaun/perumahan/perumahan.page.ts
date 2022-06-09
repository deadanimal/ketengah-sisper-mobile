import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-perumahan',
  templateUrl: './perumahan.page.html',
  styleUrls: ['./perumahan.page.scss'],
})
export class PerumahanPage implements OnInit {

  constructor(
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
  }

  back(){
    this.location.back();
  }

  akaunyes(){
    let navigationExtras: NavigationExtras = {
      state: {
        source: 'yes'
      }
    };
    this.router.navigate(['main/tabs/akaun/perumahan/form'], navigationExtras);
  }

  akaunno(){
    let navigationExtras: NavigationExtras = {
      state: {
        source: 'no'
      }
    };
    this.router.navigate(['main/tabs/akaun/perumahan/form'], navigationExtras);
  }
}
