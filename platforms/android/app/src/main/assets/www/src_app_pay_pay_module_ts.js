(self["webpackChunkkkr_pothole"] = self["webpackChunkkkr_pothole"] || []).push([["src_app_pay_pay_module_ts"],{

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);

/* eslint-disable @typescript-eslint/naming-convention */


let PaymentService = class PaymentService {
    constructor(http) {
        this.http = http;
        this.url = 'https://ketengah-api.prototype.com.my/fpx/initiate/payment/app/test';
    }
    submitPayment(paymentDetails) {
        console.log(paymentDetails, 'success');
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
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
PaymentService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], PaymentService);



/***/ }),

/***/ 2737:
/*!*******************************************!*\
  !*** ./src/app/pay/pay-routing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PayPageRoutingModule": () => (/* binding */ PayPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _pay_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pay.page */ 48941);




const routes = [
    {
        path: '',
        component: _pay_page__WEBPACK_IMPORTED_MODULE_0__.PayPage
    }
];
let PayPageRoutingModule = class PayPageRoutingModule {
};
PayPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PayPageRoutingModule);



/***/ }),

/***/ 59485:
/*!***********************************!*\
  !*** ./src/app/pay/pay.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PayPageModule": () => (/* binding */ PayPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _pay_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pay-routing.module */ 2737);
/* harmony import */ var _pay_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pay.page */ 48941);
/* harmony import */ var _confirm_pay_confirm_pay_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../confirm-pay/confirm-pay.component */ 67030);








let PayPageModule = class PayPageModule {
};
PayPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _pay_routing_module__WEBPACK_IMPORTED_MODULE_0__.PayPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        ],
        declarations: [_pay_page__WEBPACK_IMPORTED_MODULE_1__.PayPage, _confirm_pay_confirm_pay_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmPayComponent],
    })
], PayPageModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_pay_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./pay.page.html */ 57068);
/* harmony import */ var _pay_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pay.page.scss */ 50101);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _confirm_pay_confirm_pay_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../confirm-pay/confirm-pay.component */ 67030);
/* harmony import */ var _pay_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pay.service */ 15809);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 53760);









let PayPage = class PayPage {
    constructor(formBuilder, paymentService, modalController, iab) {
        this.formBuilder = formBuilder;
        this.paymentService = paymentService;
        this.modalController = modalController;
        this.iab = iab;
        this.paymentRequested = false;
    }
    ngOnInit() {
        this.paymentForm = this.formBuilder.group({
            referenceId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            customerName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            remark: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            customerEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            additionalInfo: [''],
        });
        this.paymentForm.patchValue({
            referenceId: '123',
            customerName: 'John Doe',
            amount: 100,
            remark: 'Test',
            customerEmail: 'ak@gmail.com',
            additionalInfo: 'Test',
        });
    }
    pay() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const data = this.paymentForm.value;
            // eslint-disable-next-line max-len
            const url = `https://ketengah-api.prototype.com.my/fpx/initiate/payment/app/?reference_id=${data.referenceId}&customer_email=${data.customerEmail}&amount=${data.amount}&remark=${data.remark}&additional_params=${data.additionalInfo}&customer_name=${data.customerName}`;
            const browser = this.iab.create(url, '_blank');
            browser.on('loadstop').subscribe((event) => {
                if (event.url.endsWith('.json')) {
                    browser.close();
                }
            });
            // await Browser.open({ url, presentationStyle: 'popover', },);
            //close browser on detect url
        });
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _confirm_pay_confirm_pay_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmPayComponent,
                componentProps: { value: 123, page: this.responsePage },
            });
            yield modal.present();
        });
    }
};
PayPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _pay_service__WEBPACK_IMPORTED_MODULE_3__.PaymentService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__.InAppBrowser }
];
PayPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-item {\n  border-color: #403e39;\n  border-width: thin;\n  border-style: solid;\n  border-radius: 3px;\n  margin-bottom: 0.5rem;\n  margin-left: 0.3rem;\n  margin-right: 0.3rem;\n}\n\nform {\n  margin-top: 0.5rem;\n}\n\nion-content {\n  --background: linear-gradient(\n      rgba(61, 44, 124, 0.9) 27.6%,\n      rgba(201, 87, 121, 0.9) 66.15%,\n      rgba(117, 5, 4, 0.9) 100%\n    ),\n    url(\"/assets/icon/background.png\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFOzs7OztzQ0FBQTtBQU1GIiwiZmlsZSI6InBheS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XG4gIGJvcmRlci1jb2xvcjogIzQwM2UzOTtcbiAgYm9yZGVyLXdpZHRoOiB0aGluO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDAuM3JlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjNyZW07XG59XG5cbmZvcm0ge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICByZ2JhKDYxLCA0NCwgMTI0LCAwLjkpIDI3LjYlLFxuICAgICAgcmdiYSgyMDEsIDg3LCAxMjEsIDAuOSkgNjYuMTUlLFxuICAgICAgcmdiYSgxMTcsIDUsIDQsIDAuOSkgMTAwJVxuICAgICksXG4gICAgdXJsKFwiL2Fzc2V0cy9pY29uL2JhY2tncm91bmQucG5nXCIpO1xufVxuIl19 */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"secondary\">\n      <ion-button (click)=\"close()\">\n        <ion-icon slot=\"start\" name=\"close\"></ion-icon>\n        close\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Confirm payment</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <iframe #iframe height=\"100%\" width=\"100%\" frameborder=\"0\"></iframe>\n</ion-content>\n");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>pay</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"paymentForm\" (ngSubmit)=\"pay()\">\n    <!-- create ionic form with referene number, customer name,  email, amount  ,remark , additional params  -->\n\n    <ion-item fill=\"outline\" mode=\"outline\">\n      <ion-label position=\"floating\">Reference Number</ion-label>\n      <ion-input\n        fill=\"outline\"\n        formControlName=\"referenceId\"\n        type=\"text\"\n      ></ion-input>\n    </ion-item>\n\n    <ion-item fill=\"outline\">\n      <ion-label position=\"floating\">Customer Name</ion-label>\n      <ion-input formControlName=\"customerName\" type=\"text\"></ion-input>\n    </ion-item>\n\n    <ion-item fill=\"outline\">\n      <ion-label position=\"floating\">Customer Email</ion-label>\n      <ion-input formControlName=\"customerEmail\" type=\"text\"></ion-input>\n    </ion-item>\n\n    <ion-item fill=\"outline\">\n      <ion-label position=\"floating\">Amount</ion-label>\n      <ion-input formControlName=\"amount\" type=\"text\"></ion-input>\n    </ion-item>\n\n    <ion-item fill=\"outline\">\n      <ion-label position=\"floating\">Remark</ion-label>\n      <ion-input formControlName=\"remark\" type=\"text\"></ion-input>\n    </ion-item>\n\n    <ion-item fill=\"outline\">\n      <ion-label position=\"floating\">Additional Params</ion-label>\n      <ion-input formControlName=\"additionalInfo\" type=\"text\"></ion-input>\n    </ion-item>\n\n    <ion-button expand=\"block\" type=\"submit\" [disabled]=\"!paymentForm.valid\"\n      >Pay</ion-button\n    >\n  </form>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pay_pay_module_ts.js.map