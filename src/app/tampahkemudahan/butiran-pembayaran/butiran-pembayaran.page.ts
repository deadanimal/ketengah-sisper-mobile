import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FakeMissingTranslationHandler } from '@ngx-translate/core';
import { FasilitiService } from 'src/app/shared/services/fasiliti/fasiliti.service';

@Component({
  selector: 'app-butiran-pembayaran',
  templateUrl: './butiran-pembayaran.page.html',
  styleUrls: ['./butiran-pembayaran.page.scss'],
})
export class ButiranPembayaranPage implements OnInit {
  data
  court;
  constructor(private location: Location, private route: ActivatedRoute, private router: Router, private fasilitiService: FasilitiService) { }

  ngOnInit() {
    this.data = this.router.getCurrentNavigation().extras.state.data;
    this.court = this.fasilitiService.currentCourt.value;
    console.log("payment details ", this.data);
  }

  back() {
    this.location.back();
  }

  bayar() {
    this.router.navigate(['main/tabs/bayaran']);

  }


}
