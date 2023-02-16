(self["webpackChunkSisper"] = self["webpackChunkSisper"] || []).push([["src_app_aduan_aduanmain_aduanmain_module_ts"],{

/***/ 2115:
/*!*************************************************************!*\
  !*** ./src/app/aduan/aduanmain/aduanmain-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AduanmainPageRoutingModule": () => (/* binding */ AduanmainPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _aduanmain_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aduanmain.page */ 48744);




const routes = [
    {
        path: '',
        component: _aduanmain_page__WEBPACK_IMPORTED_MODULE_0__.AduanmainPage
    },
    {
        path: 'aduanview',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_aduan_aduanmain_aduanview_aduanview_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./aduanview/aduanview.module */ 46014)).then(m => m.AduanviewPageModule)
    }
];
let AduanmainPageRoutingModule = class AduanmainPageRoutingModule {
};
AduanmainPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AduanmainPageRoutingModule);



/***/ }),

/***/ 68720:
/*!*****************************************************!*\
  !*** ./src/app/aduan/aduanmain/aduanmain.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "AduanmainPageModule": () => (/* binding */ AduanmainPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _aduanmain_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aduanmain-routing.module */ 2115);
/* harmony import */ var _aduanmain_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aduanmain.page */ 48744);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 84236);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 40830);










function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let AduanmainPageModule = class AduanmainPageModule {
};
AduanmainPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _aduanmain_routing_module__WEBPACK_IMPORTED_MODULE_0__.AduanmainPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient]
                }
            })
        ],
        declarations: [_aduanmain_page__WEBPACK_IMPORTED_MODULE_1__.AduanmainPage]
    })
], AduanmainPageModule);



/***/ }),

/***/ 48744:
/*!***************************************************!*\
  !*** ./src/app/aduan/aduanmain/aduanmain.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AduanmainPage": () => (/* binding */ AduanmainPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_aduanmain_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./aduanmain.page.html */ 47431);
/* harmony import */ var _aduanmain_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aduanmain.page.scss */ 50189);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_services_aduan_aduan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/aduan/aduan.service */ 47743);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/native-storage/ngx */ 34113);









let AduanmainPage = class AduanmainPage {
    constructor(location, router, aduanService, alertController, loadingController, nativeStorage, route, platform) {
        this.location = location;
        this.router = router;
        this.aduanService = aduanService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.nativeStorage = nativeStorage;
        this.platform = platform;
        this.aduancount = 0;
        this.platform.backButton.subscribeWithPriority(10, () => {
            this.back();
        });
        route.params.subscribe((val) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            yield this.nativeStorage.getItem('user').then(data => {
                this.userid = data.value.user_id;
            }, error => console.error(error));
            console.log(this.userid);
            yield this.aduanService.first(this.userid).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                console.log(res);
                yield loading.dismiss();
                this.aduancount = res[1];
                if (res[0].kategori == undefined) {
                    this.lattKateAduan = false;
                }
                else {
                    this.lattKateAduan = res[0].kategori + ' - ' + res[0].kategorilist.kategori;
                }
                var statdet = '';
                if (res[0].status == 0) {
                    statdet = "Tiada Status";
                }
                else if (res[0].status == 1) {
                    statdet = "Belum Dibaiki";
                }
                else if (res[0].status == 2) {
                    statdet = "Dibaiki Sebahagian";
                }
                else if (res[0].status == 3) {
                    statdet = "Sudah Dibaiki";
                }
                else if (res[0].status == 4) {
                    statdet = "Kontrak";
                }
                else if (res[0].status == 5) {
                    statdet = "Semakan";
                }
                this.lattStatusAduan = statdet;
                this.latestaduan = res[0];
                console.log(this.lattKateAduan);
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
        }));
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
        });
    }
    back() {
        this.location.back();
    }
    tambah() {
        this.router.navigate(['/main/tabs/aduan/aduanmain/tambah']);
    }
    senaraiaduan() {
        this.router.navigate(['/main/tabs/aduan/aduanmain/senarai']);
    }
    aduanview() {
        let navigationExtras = {
            state: {
                aduan: this.latestaduan
            }
        };
        this.router.navigate(['/main/tabs/aduan/aduanmain/view'], navigationExtras);
    }
};
AduanmainPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _shared_services_aduan_aduan_service__WEBPACK_IMPORTED_MODULE_2__.AduanService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__.NativeStorage },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform }
];
AduanmainPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-aduanmain',
        template: _raw_loader_aduanmain_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_aduanmain_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AduanmainPage);



/***/ }),

/***/ 50189:
/*!*****************************************************!*\
  !*** ./src/app/aduan/aduanmain/aduanmain.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container2 {\n  padding-top: 50px;\n  height: 650px;\n  text-align: center;\n}\n\n.cardaduan {\n  background: #FFFFFF;\n  border: 1px solid #F7FAFD;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 8px rgba(73, 87, 184, 0.2);\n  border-radius: 10px;\n  width: 150px;\n  height: 200px;\n  display: inline-block;\n  padding: 30px 10px;\n}\n\n.tambah {\n  width: 45px;\n  height: 45px;\n  margin: auto;\n}\n\n.count {\n  width: 45px;\n  height: 45px;\n  margin: auto;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 40px;\n  text-align: center;\n  color: #3D2C7C;\n}\n\n.cardword {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 130%;\n  text-align: center;\n  letter-spacing: -0.165px;\n  color: #000000;\n  padding-top: 10px;\n}\n\n.tambahdesc {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 10px;\n  align-items: center;\n  text-align: center;\n  color: #494949;\n  padding: 10px 0px;\n  height: 80px;\n}\n\n.cardaduan2 {\n  background: #FFFFFF;\n  border: 1px solid #F7FAFD;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 8px rgba(73, 87, 184, 0.2);\n  border-radius: 10px;\n  width: 310px;\n  height: 171px;\n  display: inline-block;\n  padding: 10px 30px;\n}\n\n.cardhead {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 15px;\n  letter-spacing: -0.165px;\n  color: #494949;\n  text-align: left;\n  padding: 9px 0px;\n}\n\n.carddetail {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  letter-spacing: -0.165px;\n  color: #3D2C7C;\n  text-align: left;\n  padding: 9px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkdWFubWFpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsOENBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLDhDQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoiYWR1YW5tYWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIyIHtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA2NTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcmRhZHVhbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Y3RkFGRDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDhweCByZ2JhKDczLCA4NywgMTg0LCAwLjIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDEwcHg7XHJcbn1cclxuXHJcbi50YW1iYWgge1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5jb3VudCB7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzNEMkM3QztcclxufVxyXG5cclxuLmNhcmR3b3JkIHtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTMwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4xNjVweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi50YW1iYWhkZXNjIHtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM0OTQ5NDk7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgIGhlaWdodDogODBweDtcclxufVxyXG5cclxuLmNhcmRhZHVhbjIge1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGN0ZBRkQ7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggcmdiYSg3MywgODcsIDE4NCwgMC4yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB3aWR0aDogMzEwcHg7XHJcbiAgICBoZWlnaHQ6IDE3MXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG59XHJcblxyXG4uY2FyZGhlYWQge1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4xNjVweDtcclxuICAgIGNvbG9yOiAjNDk0OTQ5O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDlweCAwcHg7XHJcbn1cclxuXHJcbi5jYXJkZGV0YWlsIHtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMTY1cHg7XHJcbiAgICBjb2xvcjogIzNEMkM3QztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiA5cHggMHB4O1xyXG59Il19 */");

/***/ }),

/***/ 47431:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/aduan/aduanmain/aduanmain.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"main\">\r\n    <div class=\"container\">\r\n      <div class=\"header\">\r\n        <ion-icon name=\"chevron-back-outline\" style=\"float: left;\" (click)=\"back()\"></ion-icon>\r\n        <span class=\"headertxt\">{{ 'aduan.aduan' | translate }}</span>\r\n      </div>\r\n      <div style=\"padding-top: 40px;\">\r\n        <ion-img src=\"../../assets/icon/aduan.png\" class=\"icontetapan\"></ion-img>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"main2\">\r\n    <div class=\"container2\">\r\n      <div class=\"cardaduan\" (click)=\"tambah()\">\r\n        <ion-img src=\"../../assets/icon/tambahaduan.png\" class=\"tambah\"></ion-img>\r\n        <div class=\"cardword\">{{ 'aduan.tambah' | translate }}</div>\r\n        <div class=\"tambahdesc\">{{ 'aduan.tambahdesc' | translate }}</div>\r\n      </div>\r\n      <span style=\"padding:0px 10px;\"></span>\r\n      <div class=\"cardaduan\" (click)=\"senaraiaduan()\">\r\n        <div class=\"count\">{{aduancount}}</div>\r\n        <div class=\"cardword\">{{ 'aduan.aduan' | translate }}</div>\r\n        <div class=\"tambahdesc\">{{ 'aduan.aduandesc' | translate }}</div>\r\n      </div>\r\n      <div style=\"height: 20px;\"></div>\r\n      <div *ngIf=\"lattKateAduan != false\" class=\"cardaduan2\" (click)=\"aduanview()\">\r\n        <div class=\"cardhead\">{{ 'aduan.kategori' | translate }}</div>\r\n        <div class=\"carddetail\">{{lattKateAduan}}</div>\r\n        <div class=\"cardhead\">{{ 'aduan.status' | translate }}</div>\r\n        <div class=\"carddetail\">{{lattStatusAduan}}<span style=\"float: right;\">></span></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_aduan_aduanmain_aduanmain_module_ts.js.map