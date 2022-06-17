import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-lejar',
  templateUrl: './lejar.page.html',
  styleUrls: ['./lejar.page.scss'],
})
export class LejarPage implements OnInit {

  constructor(
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
  }

  back(){
    this.location.back();
  }

  sewarumah() {
    this.router.navigate(['/main/tabs/lejar/sewarumah']);
  }

  sewapremis() {
    this.router.navigate(['/main/tabs/lejar/sewapremis']);
  }

}
