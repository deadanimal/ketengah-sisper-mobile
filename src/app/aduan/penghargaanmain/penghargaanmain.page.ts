import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-penghargaanmain',
  templateUrl: './penghargaanmain.page.html',
  styleUrls: ['./penghargaanmain.page.scss'],
})
export class PenghargaanmainPage implements OnInit {

  constructor(
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
  }

  back(){
    this.location.back();
  }

  hantar() {
    
  }

}
