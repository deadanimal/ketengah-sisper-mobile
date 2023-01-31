(self["webpackChunkSisper"] = self["webpackChunkSisper"] || []).push([["src_app_bayaran_kaedah_kaedah_module_ts"],{

/***/ 91723:
/*!*********************************************************!*\
  !*** ./src/app/bayaran/kaedah/kaedah-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KaedahPageRoutingModule": () => (/* binding */ KaedahPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _kaedah_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kaedah.page */ 89349);




const routes = [
    {
        path: '',
        component: _kaedah_page__WEBPACK_IMPORTED_MODULE_0__.KaedahPage
    }
];
let KaedahPageRoutingModule = class KaedahPageRoutingModule {
};
KaedahPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], KaedahPageRoutingModule);



/***/ }),

/***/ 16728:
/*!*************************************************!*\
  !*** ./src/app/bayaran/kaedah/kaedah.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "KaedahPageModule": () => (/* binding */ KaedahPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _kaedah_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kaedah-routing.module */ 91723);
/* harmony import */ var _kaedah_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kaedah.page */ 89349);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 84236);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 40830);










function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let KaedahPageModule = class KaedahPageModule {
};
KaedahPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _kaedah_routing_module__WEBPACK_IMPORTED_MODULE_0__.KaedahPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient]
                }
            })
        ],
        declarations: [_kaedah_page__WEBPACK_IMPORTED_MODULE_1__.KaedahPage],
        providers: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder]
    })
], KaedahPageModule);



/***/ }),

/***/ 89349:
/*!***********************************************!*\
  !*** ./src/app/bayaran/kaedah/kaedah.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KaedahPage": () => (/* binding */ KaedahPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_kaedah_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./kaedah.page.html */ 79603);
/* harmony import */ var _kaedah_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kaedah.page.scss */ 36355);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_shared_services_bayaran_bayaran_bayaran_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/bayaran/bayaran/bayaran.service */ 76290);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/native-storage/ngx */ 34113);
/* harmony import */ var src_app_pay_pay_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pay/pay.page */ 48941);










let KaedahPage = class KaedahPage {
    constructor(location, route, router, bayaranService, loadingController, alertController, nativeStorage, modalController) {
        this.location = location;
        this.route = route;
        this.router = router;
        this.bayaranService = bayaranService;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.nativeStorage = nativeStorage;
        this.modalController = modalController;
        this.route.queryParams.subscribe((params) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.router.getCurrentNavigation().extras.state) {
                this.jumlah = this.router.getCurrentNavigation().extras.state.data.jumlah;
                this.jumcount = this.router.getCurrentNavigation().extras.state.data.jumcount;
                this.akaun = this.router.getCurrentNavigation().extras.state.data.akaun;
                this.src = this.router.getCurrentNavigation().extras.state.data.src;
                const loading = yield this.loadingController.create();
                yield loading.present();
                yield this.nativeStorage.getItem('user').then(data => {
                    this.user = data.value;
                }, error => console.error(error));
                yield loading.dismiss();
                console.log('akaun', this.akaun);
            }
        }));
    }
    ngOnInit() {
        this.kad = '4444';
    }
    back() {
        this.location.back();
    }
    bayar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            const formData = new FormData();
            formData.append('userid', this.user.user_id);
            formData.append('src', this.src);
            if (this.src == 1) {
                formData.append('akaun', JSON.stringify(this.akaun));
                formData.append('jenis_transaksi', '1');
                formData.append('card_detail', '1');
            }
            else if (this.src == 2) {
                formData.append('akaun', JSON.stringify(this.akaun));
                formData.append('jenis_transaksi', '1');
                formData.append('card_detail', '1');
            }
            else {
                // formData.append('bil_premis_id', this.user.user_id);
                // formData.append('bil_rumah_id', this.user.user_id);
                // formData.append('booking_id', this.user.user_id);
                // formData.append('st_id', this.user.user_id);
                // formData.append('no_ic_pemilik', this.user.user_id);
                // formData.append('amaun', this.user.user_id);
                // formData.append('tarikh_bayaran', this.user.user_id);
                // formData.append('status_bayaran', this.user.user_id);
                // formData.append('jenis_transaksi', '2');
                // formData.append('card_detail', '1');
            }
            yield this.bayaranService.add(formData).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                console.log(res);
                yield loading.dismiss();
                let navigationExtras = {
                    state: {
                        data: res,
                        src: this.src
                    }
                };
                // this.router.navigateByUrl('pay')
                this.presentModal();
                // this.router.navigate(['main/tabs/bayaran/resit'], navigationExtras);
            }), (res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                console.log(res);
                yield loading.dismiss();
                const alert = yield this.alertController.create({
                    header: 'Loading failed',
                    message: res.message,
                    buttons: ['OK'],
                });
                yield alert.present();
            }));
        });
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_pay_pay_page__WEBPACK_IMPORTED_MODULE_4__.PayPage,
                componentProps: { value: 123 }
            });
            yield modal.present();
        });
    }
};
KaedahPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_shared_services_bayaran_bayaran_bayaran_service__WEBPACK_IMPORTED_MODULE_2__.BayaranService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__.NativeStorage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController }
];
KaedahPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-kaedah',
        template: _raw_loader_kaedah_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_kaedah_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], KaedahPage);



/***/ }),

/***/ 36355:
/*!*************************************************!*\
  !*** ./src/app/bayaran/kaedah/kaedah.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container2 {\n  padding-top: 50px;\n  padding: 50px 25px 20px 10px;\n  height: 180px;\n}\n\n.container3 {\n  padding: 30px 0px;\n  height: 700px;\n}\n\n.jumlah {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 21px;\n  letter-spacing: -0.165px;\n  color: #8B9EB0;\n}\n\n.jum {\n  font-style: normal;\n  font-weight: 700;\n  font-size: 48px;\n  line-height: 72px;\n  letter-spacing: -0.165px;\n  color: #D23330;\n}\n\n.txtbox {\n  background: #FFFFFF;\n  border: 1px solid #3D2C7C;\n  border-radius: 14px;\n  height: 55px;\n  padding: 15px 10px 8px 25px;\n}\n\n.txtbox2 {\n  background: #FFFFFF;\n  border: 1px solid #3D2C7C;\n  border-radius: 14px;\n  height: 55px;\n  padding: 8px 10px 5px 45px;\n}\n\n.txtbox3 {\n  background: #FFFFFF;\n  border: 1px solid #3D2C7C;\n  border-radius: 14px;\n  height: 55px;\n}\n\n.input {\n  color: black;\n  display: inline-block;\n}\n\n.tambah {\n  background: #3D2C7C;\n  border-radius: 10px;\n  font-size: 30px;\n  height: 40px;\n  width: 50px;\n  text-align: center;\n  vertical-align: middle;\n  display: inline-block;\n}\n\n.wordbox {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  text-align: left;\n  color: #494949;\n}\n\n.button {\n  background-color: #3D2C7C;\n  height: 48px;\n  width: 100%;\n  border-radius: 10px;\n  margin: auto;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 21px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImthZWRhaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0FBQUo7O0FBR0E7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFBSiIsImZpbGUiOiJrYWVkYWgucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcjIge1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgIHBhZGRpbmc6IDUwcHggMjVweCAyMHB4IDEwcHg7XG4gICAgaGVpZ2h0OiAxODBweDtcbn1cblxuLmNvbnRhaW5lcjMge1xuICAgIHBhZGRpbmc6IDMwcHggMHB4O1xuICAgIGhlaWdodDogNzAwcHg7XG59XG5cbi5qdW1sYWgge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMjFweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMTY1cHg7XG4gICAgY29sb3I6ICM4QjlFQjA7XG59XG5cbi5qdW0ge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICBsaW5lLWhlaWdodDogNzJweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMTY1cHg7XG4gICAgY29sb3I6ICNEMjMzMzA7XG59XG5cbi50eHRib3gge1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzNEMkM3QztcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgIGhlaWdodDogNTVweDtcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHggOHB4IDI1cHg7XG59XG5cbi50eHRib3gyIHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzRDJDN0M7XG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgICBoZWlnaHQ6IDU1cHg7XG4gICAgcGFkZGluZzogOHB4IDEwcHggNXB4IDQ1cHg7XG59XG5cbi50eHRib3gzIHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzRDJDN0M7XG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgICBoZWlnaHQ6IDU1cHg7XG59XG5cblxuLmlucHV0IHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4udGFtYmFoIHtcbiAgICBiYWNrZ3JvdW5kOiAjM0QyQzdDO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi53b3JkYm94IHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogIzQ5NDk0OTtcbn1cblxuLmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNEMkM3QztcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW46YXV0bztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XG59Il19 */");

/***/ }),

/***/ 79603:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bayaran/kaedah/kaedah.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"main\">\n    <div class=\"container2\">\n      <div class=\"header\">\n        <ion-icon name=\"chevron-back-outline\" style=\"float: left;\" (click)=\"back()\"></ion-icon>\n        <span class=\"headertxt\" style=\"width:70%;margin: auto;display: inline-block;\">{{ 'bayaran.kaedah' | translate }}</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"main2\">\n    <div class=\"container3\">\n      <div style=\"padding: 0px 40px 20px 40px;\">\n        <div class=\"jumlah\">\n          {{ 'bayaran.jumlah' | translate }} (RM)\n        </div>\n        <div>\n          <div class=\"jum\" style=\"width:70%;border-bottom: 1pt solid black;display: inline-block;\">{{jumlah}}</div>\n        </div>\n      </div>\n      <div class=\"boxgrey\">\n        <div class=\"tetapanword\">{{ 'bayaran.kad' | translate }}</div>\n      </div>\n      <div style=\"height: 20px;\"></div>\n      <div style=\"padding: 0px 40px 20px 40px;\">\n        <div class=\"txtbox\">\n          <div style=\"display:inline-block;padding-right: 30px;\">\n            <ion-checkbox></ion-checkbox>\n          </div>\n          <span class=\"input\" style=\"width:70%;\">&#x25cf;&#x25cf;&#x25cf;&#x25cf; &#x25cf;&#x25cf;&#x25cf;&#x25cf; &#x25cf;&#x25cf;&#x25cf;&#x25cf; {{kad}}</span>\n          <img src=\"../../assets/icon/visa.png\" style=\"display:inline-block;\">\n        </div>\n        <div style=\"height: 10px;\"></div>\n        <div class=\"txtbox2\">\n          <span class=\"input\" style=\"width:82%;\">{{ 'bayaran.tambahkad' | translate }}</span>\n          <div class=\"tambah\">+</div>\n        </div>\n      </div>\n      <div class=\"boxgrey\">\n        <div class=\"tetapanword\">{{ 'bayaran.kaedahlain' | translate }}</div>\n      </div>\n      <div style=\"height: 20px;\"></div>\n      <div style=\"padding: 0px 40px 20px 40px;\">\n        <div class=\"txtbox3\" style=\"padding:15px 10px 8px 25px;\">\n          <table style=\"width: 100%;\">\n            <tr>\n              <td style=\"width:35%;\">\n                <img src=\"../../assets/icon/FPX.png\" style=\"display:inline-block;\">\n              </td>\n              <td style=\"width:65%;\" class=\"wordbox\">Online Banking via FPX</td>\n            </tr>\n          </table>\n        </div>\n        <div style=\"height: 10px;\"></div>\n        <div class=\"txtbox3\" style=\"padding:15px 10px 8px 25px;\">\n          <table style=\"width: 100%;\">\n            <tr>\n              <td style=\"width:35%;\">\n                <img src=\"../../assets/icon/Boost.png\" style=\"display:inline-block;\">\n              </td>\n              <td style=\"width:65%;\" class=\"wordbox\">Boost e-Wallet</td>\n            </tr>\n          </table>\n        </div>\n        <div style=\"height: 10px;\"></div>\n        <div class=\"txtbox3\" style=\"padding:5px 10px 8px 35px;\">\n          <table style=\"width: 100%;\">\n            <tr>\n              <td style=\"width:35%;\">\n                <img src=\"../../assets/icon/TnG.png\" style=\"display:inline-block;\">\n              </td>\n              <td style=\"width:65%;\" class=\"wordbox\">TNG e-Wallet</td>\n            </tr>\n          </table>\n        </div>\n        <div style=\"height: 10px;\"></div>\n        <div class=\"txtbox3\" style=\"padding:8px 10px 8px 30px;\">\n          <table style=\"width: 100%;\">\n            <tr>\n              <td style=\"width:35%;\">\n                <img src=\"../../assets/icon/GrabPay.png\" style=\"display:inline-block;\">\n              </td>\n              <td style=\"width:65%;\" class=\"wordbox\">GrabPay e-Wallet</td>\n            </tr>\n          </table>\n        </div>\n        <div style=\"height: 20px;\"></div>\n        <button class=\"button\" (click)=\"bayar();\">{{'sewa.bayar' | translate}} ({{jumcount}})</button>\n      </div>\n      \n    </div>\n  </div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_bayaran_kaedah_kaedah_module_ts.js.map