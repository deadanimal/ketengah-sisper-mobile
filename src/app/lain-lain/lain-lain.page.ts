import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-lain-lain',
  templateUrl: './lain-lain.page.html',
  styleUrls: ['./lain-lain.page.scss'],
})
export class LainLainPage implements OnInit {

  constructor(
    private location: Location,
  ) { }

  ngOnInit() {
  }

  back(){
    this.location.back();
  }

}
