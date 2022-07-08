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
  jenis=0;

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

  async ngOnInit() {
    if(this.tempahan.dewan_id != null){
      this.jenis = 1;
    }else if(this.tempahan.alat_court_id != null){
      this.jenis = 2;
      this.tempahan.tempat = "Alatan";
    }else{
      this.jenis = 3;
      var time = this.tempahan.time.split(",");
      var alltime = [];
      await time.forEach(function (value) {
        alltime.push(value);
      });
      console.log(alltime);
      this.tempahan.time_from = alltime[0] + ':00';
      this.tempahan.time_to = alltime[alltime.length-1] ++;
      this.tempahan.time_to = alltime[alltime.length-1] + ':00';

    }
  }

  back(){
    this.location.back();
  }
}
