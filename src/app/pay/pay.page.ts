/* eslint-disable max-len */
import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';
import { ConfirmPayComponent } from '../confirm-pay/confirm-pay.component';
import { PaymentService } from '../pay.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { NavigationExtras, Router } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
@Component({
  selector: 'app-pay',
  templateUrl: './pay.page.html',
  styleUrls: ['./pay.page.scss'],
})
export class PayPage implements OnInit {
  paymentForm: FormGroup;
  responsePage: any;
  paymentRequested = false;
  constructor(
    private formBuilder: FormBuilder,
    private paymentService: PaymentService,
    private modalController: ModalController,
    private iab: InAppBrowser,
    private router: Router,
    private nativeStorage: NativeStorage,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    this.paymentForm = this.formBuilder.group({
      referenceId: ['',],
      customerName: ['', Validators.required],
      amount: ['', Validators.required],
      remark: ['', Validators.required],
      customerEmail: ['', Validators.required],
      additionalInfo: [''],
    });

    // this.paymentForm.patchValue({
    //   referenceId: '123',
    //   customerName: 'John Doe',
    //   amount: 100,
    //   remark: 'Test',
    //   customerEmail: 'ak@gmail.com',
    //   additionalInfo: 'Test',
    // });
  }

  async pay() {
    const data = this.paymentForm.value;

    let ref;
    let browser;
    let navigationExtras: NavigationExtras;

    // eslint-disable-next-line max-len
    this.nativeStorage.getItem('user').then((u) => {

      ref = u.value.user_id + Date.now().toString();
      this.paymentService.refId.next(ref);
      console.log('referenceeeeee', ref);
      console.log('subjecttt', this.paymentService.refId.value);
      console.log("referenceee")
      console.log(u.value)
      const url = `https://ketengah-api.prototype.com.my/fpx/initiate/payment/app/?reference_id=${ref}&customer_email=${data.customerEmail}&amount=${data.amount}&remark=${data.remark}&additional_params=${data.additionalInfo}&customer_name=${data.customerName}`;

      browser = this.iab.create(url, '_blank');
      browser.on('loadstop').subscribe((event) => {
        console.log(event)
        if (event.url.endsWith('callback')) {
          // browser.executeScript({ code: 'document.getElementsByTagName("html")[0].innerHTML' }).then(html => { console.log(html); browser.close(); });
          browser.close();
          this.modalController.dismiss()
          this.router.navigate(['main/tabs/bayaran/resit'], navigationExtras);


        }
      });
    })




  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ConfirmPayComponent,
      componentProps: { value: 123, page: this.responsePage },
    });

    await modal.present();
  }

  close() {
    this.modalController.dismiss()
  }



}
