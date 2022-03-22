import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from '@angular/router';
import { AduanService } from '../../shared/services/aduan/aduan.service';

@Component({
  selector: 'app-aduanmain',
  templateUrl: './aduanmain.page.html',
  styleUrls: ['./aduanmain.page.scss'],
})
export class AduanmainPage implements OnInit {

  constructor(
    private location: Location,
    private router: Router,
    private aduanService: AduanService,
  ) { }

  aduancount = 4;

  ngOnInit() {
    
  }

  back(){
    this.location.back();
  }

  tambah() {
    this.router.navigate(['/main/tabs/aduan/aduanmain/tambah']);
  }

  senaraiaduan() {
    this.router.navigate(['/main/tabs/aduan/aduanmain/senarai']);
  }
}
