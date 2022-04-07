import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-aduanview',
  templateUrl: './aduanview.page.html',
  styleUrls: ['./aduanview.page.scss'],
})
export class AduanviewPage implements OnInit {
  aduan:any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
  ) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.aduan = this.router.getCurrentNavigation().extras.state.aduan;
        var date = new Date(this.aduan.created_at);
        var month = date.getMonth() + 1;
        this.aduan.date = date.getDate()+'/'+month+'/'+date.getFullYear();
      }
    });
  }

  ngOnInit() {
  }

  back(){
    this.location.back();
  }


}
