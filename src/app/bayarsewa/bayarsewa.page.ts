import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-bayarsewa',
  templateUrl: './bayarsewa.page.html',
  styleUrls: ['./bayarsewa.page.scss'],
})
export class BayarsewaPage implements OnInit {

  AduanList = [
    {
      noacc:'test',
      address:'test',
      jum:"20.20"
    }
  ];

  jumlah = '20.20';
  jumcount = 1;

  constructor(
    private location: Location,
  ) { }

  ngOnInit() {
  }

  back(){
    this.location.back();
  }

}
