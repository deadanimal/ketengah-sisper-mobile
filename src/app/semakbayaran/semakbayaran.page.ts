import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-semakbayaran',
  templateUrl: './semakbayaran.page.html',
  styleUrls: ['./semakbayaran.page.scss'],
})
export class SemakbayaranPage implements OnInit {

  constructor(
    private location: Location,
  ) { }

  ngOnInit() {

  }

  back(){
    this.location.back();
  }

}
