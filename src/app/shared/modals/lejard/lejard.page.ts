import { Component, OnInit } from '@angular/core';
import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-lejard',
  templateUrl: './lejard.page.html',
  styleUrls: ['./lejard.page.scss'],
})
export class LejardPage implements OnInit {
  content: string;
  selectedakaun: any;
  lejardtl: any;
  src: any;

  constructor(
    private pdfGenerator: PDFGenerator,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    console.table(this.navParams);
    var data = this.navParams.data.data;
    this.selectedakaun = data.akaun;
    this.lejardtl = data.lejar;
    this.src = data.src;
    console.log(data);
  }

  async download() {
    document.getElementById('tr1').style.display = "table";
    var content = document.getElementById('pdf').innerHTML;
    let options = {
      documentSize: 'A4',
      type: 'share',
      // landscape: 'portrait',
      fileName: 'eSisper_Lejar.pdf'
    };
    await this.pdfGenerator.fromData(content, options)
    .then((base64) => {
      document.getElementById('tr1').style.display = "none";
      console.log('OK', base64);
    }).catch((error) => {
      document.getElementById('tr1').style.display = "none";
      console.log('error', error);
    });
  }

}
