/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  reciept: BehaviorSubject<any> = new BehaviorSubject({});
  refId: BehaviorSubject<string> = new BehaviorSubject('');
  url = 'https://ketengah-api.prototype.com.my/fpx/initiate/payment/app/test';
  constructor(private http: HttpClient) { }

  submitPayment(paymentDetails: PaymentDetails) {
    console.log(paymentDetails, 'success');
    this.refId.next(paymentDetails.referenceId)


    return this.http.get(
      this.url,
      {
        params: {
          reference_id: paymentDetails.referenceId,
          customer_email: paymentDetails.customerEmail,
          amount: paymentDetails.amount,
          additional_params: paymentDetails.additionalInfo,
          remark: paymentDetails.remark,
          customer_name: paymentDetails.customerName,
        },

      }

    );
  }
}

export interface PaymentDetails {
  referenceId: string;
  customerName: string;
  customerEmail: string;
  remark: string;
  additionalInfo: string;
  amount: number;
}
