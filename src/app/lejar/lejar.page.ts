import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-lejar',
  templateUrl: './lejar.page.html',
  styleUrls: ['./lejar.page.scss'],
})
export class LejarPage implements OnInit {

  constructor(
    private location: Location,
  ) { }

  ngOnInit() {
  }

  back(){
    this.location.back();
  }

  aduan() {
    // this.router.navigate(['/main/tabs/aduan/aduanmain']);
  }

  penghargaan() {
    // this.router.navigate(['/main/tabs/aduan/penghargaan']);
  }

}
