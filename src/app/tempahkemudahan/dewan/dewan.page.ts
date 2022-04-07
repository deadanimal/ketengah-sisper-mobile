import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-dewan',
  templateUrl: './dewan.page.html',
  styleUrls: ['./dewan.page.scss'],
})
export class DewanPage implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
  }

  back(){
    this.location.back();
  }

}
