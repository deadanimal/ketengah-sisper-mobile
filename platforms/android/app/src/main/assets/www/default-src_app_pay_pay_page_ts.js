(self["webpackChunkSisper"] = self["webpackChunkSisper"] || []).push([["default-src_app_pay_pay_page_ts"],{

/***/ 67030:
/*!******************************************************!*\
  !*** ./src/app/confirm-pay/confirm-pay.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmPayComponent": () => (/* binding */ ConfirmPayComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_confirm_pay_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./confirm-pay.component.html */ 6546);
/* harmony import */ var _confirm_pay_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm-pay.component.scss */ 43064);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);






let ConfirmPayComponent = class ConfirmPayComponent {
    constructor(sanitizer, modalController) {
        this.sanitizer = sanitizer;
        this.modalController = modalController;
    }
    ngOnInit() {
        this.transformHtml(this.page);
    }
    transformHtml(htmlTextWithStyle) {
        this.sanitizer.bypassSecurityTrustHtml(htmlTextWithStyle);
        this.sanitizer.bypassSecurityTrustScript(htmlTextWithStyle);
    }
    ngAfterViewInit() {
        const doc = this.iframe.nativeElement.contentDocument ||
            this.iframe.nativeElement.contentWindow;
        doc.open();
        doc.write(this.page);
        doc.close();
    }
    close() {
        this.modalController.dismiss();
    }
};
ConfirmPayComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController }
];
ConfirmPayComponent.propDecorators = {
    iframe: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['iframe',] }]
};
ConfirmPayComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-confirm-pay',
        template: _raw_loader_confirm_pay_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_confirm_pay_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ConfirmPayComponent);



/***/ }),

/***/ 15809:
/*!********************************!*\
  !*** ./src/app/pay.service.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentService": () => (/* binding */ PaymentService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 26215);

/* eslint-disable @typescript-eslint/naming-convention */



let PaymentService = class PaymentService {
    constructor(http) {
        this.http = http;
        this.reciept = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
        this.refId = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.url = 'https://ketengah-api.prototype.com.my/fpx/initiate/payment/app/test';
    }
    submitPayment(paymentDetails) {
        console.log(paymentDetails, 'success');
        this.refId.next(paymentDetails.referenceId);
        return this.http.get(this.url, {
            params: {
                reference_id: paymentDetails.referenceId,
                customer_email: paymentDetails.customerEmail,
                amount: paymentDetails.amount,
                additional_params: paymentDetails.additionalInfo,
                remark: paymentDetails.remark,
                customer_name: paymentDetails.customerName,
            },
        });
    }
};
PaymentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
PaymentService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], PaymentService);



/***/ }),

/***/ 48941:
/*!*********************************!*\
  !*** ./src/app/pay/pay.page.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PayPage": () => (/* binding */ PayPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_pay_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./pay.page.html */ 57068);
/* harmony import */ var _pay_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pay.page.scss */ 50101);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _confirm_pay_confirm_pay_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../confirm-pay/confirm-pay.component */ 67030);
/* harmony import */ var _pay_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pay.service */ 15809);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 53760);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/native-storage/ngx */ 34113);



/* eslint-disable max-len */








let PayPage = class PayPage {
    constructor(formBuilder, paymentService, modalController, iab, router, nativeStorage, ngZone) {
        this.formBuilder = formBuilder;
        this.paymentService = paymentService;
        this.modalController = modalController;
        this.iab = iab;
        this.router = router;
        this.nativeStorage = nativeStorage;
        this.ngZone = ngZone;
        this.paymentRequested = false;
    }
    ngOnInit() {
        this.paymentForm = this.formBuilder.group({
            referenceId: ['',],
            customerName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            remark: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            customerEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
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
    pay() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const data = this.paymentForm.value;
            let ref;
            let browser;
            let navigationExtras;
            // eslint-disable-next-line max-len
            this.nativeStorage.getItem('user').then((u) => {
                ref = u.value.user_id + Date.now().toString();
                this.paymentService.refId.next(ref);
                console.log('referenceeeeee', ref);
                console.log('subjecttt', this.paymentService.refId.value);
                console.log("referenceee");
                console.log(u.value);
                const url = `https://ketengah-api.prototype.com.my/fpx/initiate/payment/app/?reference_id=${ref}&customer_email=${data.customerEmail}&amount=${data.amount}&remark=${data.remark}&additional_params=${data.additionalInfo}&customer_name=${data.customerName}`;
                browser = this.iab.create(url, '_blank');
                browser.on('loadstop').subscribe((event) => {
                    console.log(event);
                    if (event.url.endsWith('callback')) {
                        // browser.executeScript({ code: 'document.getElementsByTagName("html")[0].innerHTML' }).then(html => { console.log(html); browser.close(); });
                        browser.close();
                        this.modalController.dismiss();
                        this.router.navigate(['main/tabs/bayaran/resit'], navigationExtras);
                    }
                });
            });
        });
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _confirm_pay_confirm_pay_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmPayComponent,
                componentProps: { value: 123, page: this.responsePage },
            });
            yield modal.present();
        });
    }
    close() {
        this.modalController.dismiss();
    }
};
PayPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _pay_service__WEBPACK_IMPORTED_MODULE_3__.PaymentService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__.InAppBrowser },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__.NativeStorage },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone }
];
PayPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-pay',
        template: _raw_loader_pay_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_pay_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PayPage);



/***/ }),

/***/ 43064:
/*!********************************************************!*\
  !*** ./src/app/confirm-pay/confirm-pay.component.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtLXBheS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 50101:
/*!***********************************!*\
  !*** ./src/app/pay/pay.page.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("form {\n  margin-top: 0.5rem;\n}\n\n.boxwhite {\n  color: #3D2C7C;\n  padding: 25px 0px 0px 0px;\n  font-size: 16px;\n  width: 80%;\n  margin: auto;\n}\n\n.input {\n  color: black;\n  display: inline-block;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBREYiLCJmaWxlIjoicGF5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuZm9ybSB7XHJcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG59XHJcblxyXG4uYm94d2hpdGUge1xyXG4gIGNvbG9yOiAjM0QyQzdDO1xyXG4gIHBhZGRpbmc6IDI1cHggMHB4IDBweCAwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luOmF1dG87XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 6546:
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/confirm-pay/confirm-pay.component.html ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"secondary\">\r\n      <ion-button (click)=\"close()\">\r\n        <ion-icon slot=\"start\" name=\"close\"></ion-icon>\r\n        close\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Confirm payment</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <iframe #iframe height=\"100%\" width=\"100%\" frameborder=\"0\"></iframe>\r\n</ion-content>\r\n");

/***/ }),

/***/ 57068:
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pay/pay.page.html ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"close()\">\r\n        <ion-icon slot=\"start\" name=\"close\"></ion-icon>\r\n        Close\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>pay</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"paymentForm\" (ngSubmit)=\"pay()\">\r\n    <!-- create ionic form with referene number, customer name,  email, amount  ,remark , additional params  -->\r\n\r\n\r\n    <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\r\n      Customer Name<br>\r\n      <ion-input formControlName=\"customerName\" type=\"text\" class=\"input\"></ion-input>\r\n    </div>\r\n\r\n    <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\r\n      Customer Email<br>\r\n      <ion-input formControlName=\"customerEmail\" type=\"text\" class=\"input\"></ion-input>\r\n    </div>\r\n\r\n    <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\r\n      Amount<br>\r\n      <ion-input formControlName=\"amount\" type=\"text\" class=\"input\"></ion-input>\r\n    </div>\r\n\r\n    <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\r\n      Remark<br>\r\n      <ion-input formControlName=\"remark\" type=\"text\" class=\"input\"></ion-input>\r\n    </div>\r\n\r\n\r\n\r\n    <ion-button expand=\"block\" type=\"submit\" [disabled]=\"!paymentForm.valid\">Pay</ion-button>\r\n  </form>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_pay_pay_page_ts.js.map