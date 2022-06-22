import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ActivatedRoute, Router } from '@angular/router';
import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';

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

  src:any;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private pdfGenerator: PDFGenerator
  ) { 
    this.route.queryParams.subscribe(async params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.data;
        console.log('data',this.data);
        this.src = this.router.getCurrentNavigation().extras.state.src;
      }
    });
  }

  ngOnInit() {
    console.log('data',this.data);
  }

  back(){
    this.router.navigate(['main/tabs/home']);
  }

  async cetak(id){
    console.log(id);
    var content = document.getElementById('pdf'+id).innerHTML;
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
}
