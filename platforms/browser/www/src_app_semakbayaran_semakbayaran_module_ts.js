(self["webpackChunkSisper"] = self["webpackChunkSisper"] || []).push([["src_app_semakbayaran_semakbayaran_module_ts"],{

/***/ 98931:
/*!*************************************************************!*\
  !*** ./src/app/semakbayaran/semakbayaran-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SemakbayaranPageRoutingModule": () => (/* binding */ SemakbayaranPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _semakbayaran_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./semakbayaran.page */ 95675);




const routes = [
    {
        path: '',
        component: _semakbayaran_page__WEBPACK_IMPORTED_MODULE_0__.SemakbayaranPage
    }
];
let SemakbayaranPageRoutingModule = class SemakbayaranPageRoutingModule {
};
SemakbayaranPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SemakbayaranPageRoutingModule);



/***/ }),

/***/ 11479:
/*!*****************************************************!*\
  !*** ./src/app/semakbayaran/semakbayaran.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "SemakbayaranPageModule": () => (/* binding */ SemakbayaranPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _semakbayaran_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./semakbayaran-routing.module */ 98931);
/* harmony import */ var _semakbayaran_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./semakbayaran.page */ 95675);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 84236);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 40830);










function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let SemakbayaranPageModule = class SemakbayaranPageModule {
};
SemakbayaranPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _semakbayaran_routing_module__WEBPACK_IMPORTED_MODULE_0__.SemakbayaranPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient]
                }
            })
        ],
        declarations: [_semakbayaran_page__WEBPACK_IMPORTED_MODULE_1__.SemakbayaranPage]
    })
], SemakbayaranPageModule);



/***/ }),

/***/ 95675:
/*!***************************************************!*\
  !*** ./src/app/semakbayaran/semakbayaran.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SemakbayaranPage": () => (/* binding */ SemakbayaranPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_semakbayaran_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./semakbayaran.page.html */ 60646);
/* harmony import */ var _semakbayaran_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./semakbayaran.page.scss */ 96035);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/native-storage/ngx */ 34113);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_shared_services_bayaran_bayaran_bayaran_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/bayaran/bayaran/bayaran.service */ 76290);








let SemakbayaranPage = class SemakbayaranPage {
    constructor(location, nativeStorage, alertController, loadingController, bayaranService) {
        this.location = location;
        this.nativeStorage = nativeStorage;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.bayaranService = bayaranService;
        this.ddakaun = [];
    }
    ngOnInit() {
    }
    back() {
        this.location.back();
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            yield this.nativeStorage.getItem('user').then(data => {
                console.log('akaun', data.value);
                var rumah = data.value.perumahan;
                var premis = data.value.premis;
                this.ddakaun = [];
                if (rumah != undefined) {
                    rumah.forEach(element => {
                        var temp = 0;
                        var temp2 = 0;
                        if (element.jumlah_tunggakan != "") {
                            temp = parseInt(element.jumlah_tunggakan);
                        }
                        if (element.kadar_sewa != "") {
                            temp2 = parseInt(element.kadar_sewa);
                        }
                        console.log(temp2);
                        element.jumlahbyr = temp + temp2;
                        this.ddakaun.push(element);
                    });
                }
                if (premis != undefined) {
                    premis.forEach(element => {
                        var temp = 0;
                        var temp2 = 0;
                        if (element.jumlah_tunggakan != "") {
                            temp = parseInt(element.jumlah_tunggakan);
                        }
                        if (element.kadar_sewa != "") {
                            temp2 = parseInt(element.kadar_sewa);
                        }
                        console.log(temp2);
                        element.jumlahbyr = temp + temp2;
                        this.ddakaun.push(element);
                    });
                }
                console.log('rumah', rumah);
                console.log('premis', premis);
                console.log('allakaun', this.ddakaun);
                loading.dismiss();
            }, error => console.error(error));
        });
    }
    tukaracc(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log(data);
            if (data != undefined && data != null) {
                const loading = yield this.loadingController.create();
                yield loading.present();
                yield this.bayaranService.getuser(data.id, data).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                    console.log(res);
                    this.bayaranlist = res;
                    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                    this.bayaranlist.forEach(element => {
                        const d = new Date(element.tarikh_bayaran);
                        console.log(monthNames[d.getMonth()]);
                        element.bulan = monthNames[d.getMonth()];
                    });
                    yield loading.dismiss();
                }), (res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                    console.log(res);
                    yield loading.dismiss();
                    const alert = yield this.alertController.create({
                        header: 'Loading failed',
                        message: res.message,
                        buttons: ['OK'],
                    });
                    yield alert.present();
                }));
            }
        });
    }
};
SemakbayaranPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location },
    { type: _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__.NativeStorage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: src_app_shared_services_bayaran_bayaran_bayaran_service__WEBPACK_IMPORTED_MODULE_3__.BayaranService }
];
SemakbayaranPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-semakbayaran',
        template: _raw_loader_semakbayaran_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_semakbayaran_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SemakbayaranPage);



/***/ }),

/***/ 96035:
/*!*****************************************************!*\
  !*** ./src/app/semakbayaran/semakbayaran.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container2 {\n  padding-top: 50px;\n  padding: 50px 10px 20px 10px;\n  height: 180px;\n}\n\n.container3 {\n  padding-top: 50px;\n  padding: 50px 10px 20px 10px;\n  height: 700px;\n}\n\n.labelakaun {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 15px;\n  line-height: 14px;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #494949;\n  padding-bottom: 15px;\n}\n\n.headerbox {\n  padding: 0px 80px 0px 80px;\n}\n\n.select {\n  width: 100%;\n  background: #FFFFFF;\n  border: 1px solid #3D2C7C;\n  box-sizing: border-box;\n  border-radius: 9px;\n}\n\n.bodybox {\n  padding: 50px 20px 30px 20px;\n}\n\n.title {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 19px;\n  line-height: 28px;\n  color: #3D2C7C;\n  padding-bottom: 20px;\n}\n\n.card {\n  background: #FFFFFF;\n  border: 1px solid #F7FAFD;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 8px rgba(73, 87, 184, 0.2);\n  border-radius: 17px;\n  width: 100%;\n  height: 102px;\n  padding: 20px;\n}\n\n.cardhead {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 15px;\n  line-height: 22px;\n  letter-spacing: -0.165px;\n  color: #8B9EB0;\n}\n\n.body1 {\n  display: inline-block;\n  width: 50%;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 21px;\n  letter-spacing: -0.165px;\n  color: #494949;\n  padding-top: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbWFrYmF5YXJhbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSwwQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSw0QkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsOENBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoic2VtYWtiYXlhcmFuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIyIHtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgcGFkZGluZzogNTBweCAxMHB4IDIwcHggMTBweDtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIzIHtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgcGFkZGluZzogNTBweCAxMHB4IDIwcHggMTBweDtcclxuICAgIGhlaWdodDogNzAwcHg7XHJcbn1cclxuXHJcbi5sYWJlbGFrYXVuIHtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGNvbG9yOiAjNDk0OTQ5O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5oZWFkZXJib3gge1xyXG4gICAgcGFkZGluZzogMHB4IDgwcHggMHB4IDgwcHg7XHJcbn1cclxuXHJcbi5zZWxlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzNEMkM3QztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbn1cclxuXHJcbi5ib2R5Ym94IHtcclxuICAgIHBhZGRpbmc6IDUwcHggMjBweCAzMHB4IDIwcHg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICBjb2xvcjogIzNEMkM3QztcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Y3RkFGRDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDhweCByZ2JhKDczLCA4NywgMTg0LCAwLjIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTdweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDJweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5jYXJkaGVhZCB7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMTY1cHg7XHJcbiAgICBjb2xvcjogIzhCOUVCMDtcclxufVxyXG5cclxuLmJvZHkxIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMTY1cHg7XHJcbiAgICBjb2xvcjogIzQ5NDk0OTtcclxuICAgIHBhZGRpbmctdG9wOiA3cHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 60646:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/semakbayaran/semakbayaran.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"main\">\r\n    <div class=\"container2\">\r\n      <div class=\"header\">\r\n        <ion-icon name=\"chevron-back-outline\" style=\"float: left;\" (click)=\"back()\"></ion-icon>\r\n        <span class=\"headertxt\">{{ 'semak.main' | translate }}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"main2\">\r\n    <div class=\"container3\">\r\n      <div class=\"headerbox\">\r\n        <div class=\"labelakaun\">{{ 'semak.akaun' | translate }}</div>\r\n        <ion-select okText=\"{{ 'semak.ok' | translate }}\" cancelText=\"{{ 'semak.cancel' | translate }}\" class=\"select\" [(ngModel)]=\"selectedakaun\" (ionChange)=\"tukaracc(selectedakaun)\">\r\n          <ion-select-option *ngFor=\"let item of ddakaun\" [value]=\"item\">\r\n            {{item.nama}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </div>\r\n      <div class=\"bodybox\">\r\n        <div class=\"title\">{{ 'semak.sejbayaran' | translate }}</div>\r\n        <div *ngFor=\"let val of bayaranlist\" style=\"padding: 10px 0px 10px 0px\">\r\n          <div class=\"card\">\r\n            <div class=\"cardhead\">\r\n              {{val.bulan}}\r\n            </div>\r\n            <div class=\"cardbody\">\r\n              <div class=\"body1\">{{val.tarikh_bayaran}}</div>\r\n              <div class=\"body1\" style=\"text-align: right;\">RM {{val.amaun}}</div>\r\n              \r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>  \r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_semakbayaran_semakbayaran_module_ts.js.map