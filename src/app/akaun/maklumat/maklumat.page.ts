import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-maklumat',
  templateUrl: './maklumat.page.html',
  styleUrls: ['./maklumat.page.scss'],
})
export class MaklumatPage implements OnInit {

  data: any;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe(async params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.data;
        console.log('data',this.data);
      }
    });
  }

  ngOnInit() {
  }

  back(){
    this.location.back();
  }

  bayar(){
    
  }
}
