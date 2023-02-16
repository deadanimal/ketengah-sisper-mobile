(self["webpackChunkSisper"] = self["webpackChunkSisper"] || []).push([["src_app_bayaran_resit_resit_module_ts"],{

/***/ 79291:
/*!*******************************************************!*\
  !*** ./src/app/bayaran/resit/resit-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResitPageRoutingModule": () => (/* binding */ ResitPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _resit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resit.page */ 6537);




const routes = [
    {
        path: '',
        component: _resit_page__WEBPACK_IMPORTED_MODULE_0__.ResitPage
    }
];
let ResitPageRoutingModule = class ResitPageRoutingModule {
};
ResitPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ResitPageRoutingModule);



/***/ }),

/***/ 74870:
/*!***********************************************!*\
  !*** ./src/app/bayaran/resit/resit.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "ResitPageModule": () => (/* binding */ ResitPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _resit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resit-routing.module */ 79291);
/* harmony import */ var _resit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resit.page */ 6537);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 84236);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 40830);










function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let ResitPageModule = class ResitPageModule {
};
ResitPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _resit_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResitPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient]
                }
            })
        ],
        declarations: [_resit_page__WEBPACK_IMPORTED_MODULE_1__.ResitPage]
    })
], ResitPageModule);



/***/ }),

/***/ 6537:
/*!*********************************************!*\
  !*** ./src/app/bayaran/resit/resit.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResitPage": () => (/* binding */ ResitPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_resit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./resit.page.html */ 2547);
/* harmony import */ var _resit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resit.page.scss */ 25737);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/pdf-generator/ngx */ 37961);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_pay_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pay.service */ 15809);










let ResitPage = class ResitPage {
    constructor(location, route, router, pdfGenerator, http, loadingController, paymentService) {
        this.location = location;
        this.route = route;
        this.router = router;
        this.pdfGenerator = pdfGenerator;
        this.http = http;
        this.loadingController = loadingController;
        this.paymentService = paymentService;
    }
    ngOnInit() {
        // this.presentLoading()
        console.log("in resiiiiiittttt");
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
    cetak(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log(id);
            var content = document.getElementById('pdf' + id).innerHTML;
            let options = {
                documentSize: 'A4',
                type: 'share',
                // landscape: 'portrait',
                fileName: 'eSisper_Tempahan.pdf'
            };
            yield this.pdfGenerator.fromData(content, options)
                .then((base64) => {
                console.log('OK', base64);
            }).catch((error) => {
                console.log('error', error);
            });
        });
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Loading Payment ...',
                duration: 2000,
                spinner: 'bubbles'
            });
            yield loading.present();
        });
    }
};
ResitPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_2__.PDFGenerator },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: src_app_pay_service__WEBPACK_IMPORTED_MODULE_3__.PaymentService }
];
ResitPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-resit',
        template: _raw_loader_resit_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_resit_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ResitPage);



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

/***/ 25737:
/*!***********************************************!*\
  !*** ./src/app/bayaran/resit/resit.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container2 {\n  padding-top: 50px;\n  padding: 50px 25px 20px 10px;\n  height: 180px;\n}\n\n.container3 {\n  padding: 30px 20px;\n  height: 700px;\n}\n\n.headresit {\n  color: black;\n}\n\nspan {\n  color: #3e4d3e;\n}\n\n.card {\n  background: #FFFFFF;\n  box-shadow: 4px 0px 8px rgba(73, 87, 184, 0.2), 0px 4px 8px rgba(73, 87, 184, 0.2);\n  border-radius: 10px;\n  height: 300px;\n  color: black;\n  padding: 20px;\n}\n\n.button {\n  background-color: #3D2C7C;\n  height: 40px;\n  width: 100%;\n  border-radius: 10px;\n  margin: auto;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 21px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2l0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFDQTtFQUNFLGNBQUE7QUFFRjs7QUFDQTtFQUNJLG1CQUFBO0VBQ0Esa0ZBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUVKOztBQUNBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFFSiIsImZpbGUiOiJyZXNpdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyMiB7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIHBhZGRpbmc6IDUwcHggMjVweCAyMHB4IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyMyB7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDcwMHB4O1xyXG59XHJcblxyXG4uaGVhZHJlc2l0IHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5zcGFue1xyXG4gIGNvbG9yOiByZ2IoNjIsIDc3LCA2Mik7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3gtc2hhZG93OiA0cHggMHB4IDhweCByZ2JhKDczLCA4NywgMTg0LCAwLjIpLCAwcHggNHB4IDhweCByZ2JhKDczLCA4NywgMTg0LCAwLjIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRDJDN0M7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 2547:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bayaran/resit/resit.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"main\">\r\n    <div class=\"container2\">\r\n      <div class=\"header\">\r\n        <ion-icon name=\"chevron-back-outline\" style=\"float: left;\" (click)=\"back()\"></ion-icon>\r\n        <span class=\"headertxt\" style=\"width:70%;margin: auto;display: inline-block;\">{{ 'bayaran.resit' | translate\r\n          }}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"headresit\">\r\n    <span>Thank You,</span><br>\r\n    <span>Here's your receipt.</span>\r\n  </div>\r\n\r\n\r\n  <ng-container *ngIf=\"reciept\">\r\n    <ion-grid fixed>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"6\"><span>Status</span></ion-col>\r\n        <ion-col size=\"6\"> <span>{{reciept.message}}</span> </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"6\"> <span>Transaction ID</span></ion-col>\r\n        <ion-col size=\"6\"><span>{{reciept.transaction_id}}</span></ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"6\"><span>Reference ID:</span></ion-col>\r\n        <ion-col size=\"6\"><span>{{reciept.reference_id}}</span></ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"6\"><span>Amount</span></ion-col>\r\n        <ion-col size=\"6\"><span style=\"color: red;\">{{reciept.amount}}</span></ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"6\"><span>Timestamp:</span></ion-col>\r\n        <ion-col size=\"6\"><span>{{reciept.transaction_timestamp}}</span></ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"6\"><span>Buyer Bank Name:</span></ion-col>\r\n        <ion-col size=\"6\"><span>{{reciept.buyer_bank_name}}</span></ion-col>\r\n      </ion-row>\r\n\r\n\r\n    </ion-grid>\r\n\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"paymentService.reciept.value !== {}\">\r\n\r\n    <p>{{paymentService.reciept.value |json}}</p>\r\n\r\n  </ng-container>\r\n\r\n  <h1>Doneeeeeee</h1>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_bayaran_resit_resit_module_ts.js.map