import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-tambahaduan',
  templateUrl: './tambahaduan.page.html',
  styleUrls: ['./tambahaduan.page.scss'],
})
export class TambahaduanPage implements OnInit {

  constructor(
    private location: Location,
  ) { }

  ngOnInit() {
  }

  back(){
    this.location.back();
  }

  hantar() {
    
  }
}
