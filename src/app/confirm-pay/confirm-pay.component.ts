import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-confirm-pay',
  templateUrl: './confirm-pay.component.html',
  styleUrls: ['./confirm-pay.component.scss'],
})
export class ConfirmPayComponent implements OnInit, AfterViewInit {
  @ViewChild('iframe') iframe: ElementRef;

  page: any;
  constructor(
    private sanitizer: DomSanitizer,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.transformHtml(this.page);
  }

  transformHtml(htmlTextWithStyle) {
    this.sanitizer.bypassSecurityTrustHtml(htmlTextWithStyle);
    this.sanitizer.bypassSecurityTrustScript(htmlTextWithStyle);
  }

  ngAfterViewInit() {
    const doc =
      this.iframe.nativeElement.contentDocument ||
      this.iframe.nativeElement.contentWindow;
    doc.open();
    doc.write(this.page);
    doc.close();
  }

  close() {
    this.modalController.dismiss();
  }
}
