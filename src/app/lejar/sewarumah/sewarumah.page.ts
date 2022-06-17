import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-sewarumah',
  templateUrl: './sewarumah.page.html',
  styleUrls: ['./sewarumah.page.scss'],
})
export class SewarumahPage implements OnInit {

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
