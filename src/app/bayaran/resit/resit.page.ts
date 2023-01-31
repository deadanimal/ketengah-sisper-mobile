import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ActivatedRoute, Router } from '@angular/router';
import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { PaymentService } from 'src/app/pay.service';

@Component({
  selector: 'app-resit',
  templateUrl: './resit.page.html',
  styleUrls: ['./resit.page.scss'],
})
export class ResitPage implements OnInit {

  data: any;
  // data = [
  //   {"id": 1,
  //   "tarikh_resit": 1,
  //   "no_resit": 1,
  //   "noakaun": 1,
  //   "no_ic_pemilik": 1,
  //   "kodbayaran": 1}
  // ];

  src: any;

  reciept: any;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private pdfGenerator: PDFGenerator,
    private http: HttpClient,
    private loadingController: LoadingController,
    public paymentService: PaymentService

  ) {

  }

  ngOnInit() {
    // this.presentLoading()

    console.log("in resiiiiiittttt")

    this.http.get(`https://ketengah-api.prototype.com.my/api/fpx/transaction/status/${this.paymentService.refId.value}`).subscribe(resp => {
      this.reciept = resp;
      this.paymentService.reciept.next(resp);


      console.table(this.reciept);
    });

    this.reciept = this.paymentService.reciept.value;




  }

  back() {
    this.router.navigate(['main/tabs/home']);
  }

  async cetak(id) {
    console.log(id);
    var content = document.getElementById('pdf' + id).innerHTML;
    let options = {
      documentSize: 'A4',
      type: 'share',
      // landscape: 'portrait',
      fileName: 'eSisper_Tempahan.pdf'
    };
    await this.pdfGenerator.fromData(content, options)
      .then((base64) => {
        console.log('OK', base64);
      }).catch((error) => {
        console.log('error', error);
      });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Loading Payment ...',
      duration: 2000,
      spinner: 'bubbles'
    });
    await loading.present();
  }
}
