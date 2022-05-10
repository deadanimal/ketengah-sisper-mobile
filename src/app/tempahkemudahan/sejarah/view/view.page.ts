import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {

  tempahan:any;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.tempahan = this.router.getCurrentNavigation().extras.state.tempahan;
        console.log(this.tempahan);  
      }
    });
  }

  ngOnInit() {
  }

  back(){
    this.location.back();
  }
}
