import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-senaraiaduan',
  templateUrl: './senaraiaduan.page.html',
  styleUrls: ['./senaraiaduan.page.scss'],
})
export class SenaraiaduanPage implements OnInit {

  constructor(
    private location: Location,
  ) { }

  AduanList = [
    {
      kategori:"01 - PINTU",
      status:"SEDANG DIBAIKI"
    },
    {
      kategori:"01 - PINTU",
      status:"SEDANG DIBAIKI"
    },
    {
      kategori:"01 - PINTU",
      status:"SEDANG DIBAIKI"
    },
    {
      kategori:"01 - PINTU",
      status:"SEDANG DIBAIKI"
    },
  ];

  ngOnInit() {
  }

  back(){
    this.location.back();
  }

}
