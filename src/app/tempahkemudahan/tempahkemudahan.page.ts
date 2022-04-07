import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-tempahkemudahan',
  templateUrl: './tempahkemudahan.page.html',
  styleUrls: ['./tempahkemudahan.page.scss'],
})
export class TempahkemudahanPage implements OnInit {

  constructor(
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
  }

  back(){
    this.location.back();
  }

  dewan(){
    this.router.navigate(['main/tabs/tempahkemudahan/dewan']);
  }
}
