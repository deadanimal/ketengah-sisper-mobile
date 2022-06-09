import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-premis',
  templateUrl: './premis.page.html',
  styleUrls: ['./premis.page.scss'],
})
export class PremisPage implements OnInit {
  
  noakaun: any;
  namaakaun: any;

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
  }

  back(){
    this.location.back();
  }

  hantar(){

  }
}
