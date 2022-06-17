import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-sewapremis',
  templateUrl: './sewapremis.page.html',
  styleUrls: ['./sewapremis.page.scss'],
})
export class SewapremisPage implements OnInit {

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
