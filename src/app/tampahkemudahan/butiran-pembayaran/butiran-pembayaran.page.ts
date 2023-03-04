import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-butiran-pembayaran',
  templateUrl: './butiran-pembayaran.page.html',
  styleUrls: ['./butiran-pembayaran.page.scss'],
})
export class ButiranPembayaranPage implements OnInit {
  data
  constructor(private location: Location, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.data = this.router.getCurrentNavigation().extras.state.data;
    console.log("payment details ", this.data);
  }

  back() {
    this.location.back();
  }

  bayar() {
    this.router.navigate(['main/tabs/bayaran']);

  }


}
