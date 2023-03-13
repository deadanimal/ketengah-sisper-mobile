(self["webpackChunkSisper"] = self["webpackChunkSisper"] || []).push([["src_app_aduan_aduanmain_senaraiaduan_senaraiaduan_module_ts"],{

/***/ 82952:
/*!*****************************************************************************!*\
  !*** ./src/app/aduan/aduanmain/senaraiaduan/senaraiaduan-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SenaraiaduanPageRoutingModule": () => (/* binding */ SenaraiaduanPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _senaraiaduan_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./senaraiaduan.page */ 40761);




const routes = [
    {
        path: '',
        component: _senaraiaduan_page__WEBPACK_IMPORTED_MODULE_0__.SenaraiaduanPage
    }
];
let SenaraiaduanPageRoutingModule = class SenaraiaduanPageRoutingModule {
};
SenaraiaduanPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SenaraiaduanPageRoutingModule);



/***/ }),

/***/ 30249:
/*!*********************************************************************!*\
  !*** ./src/app/aduan/aduanmain/senaraiaduan/senaraiaduan.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "SenaraiaduanPageModule": () => (/* binding */ SenaraiaduanPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _senaraiaduan_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./senaraiaduan-routing.module */ 82952);
/* harmony import */ var _senaraiaduan_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./senaraiaduan.page */ 40761);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 84236);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 40830);










function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let SenaraiaduanPageModule = class SenaraiaduanPageModule {
};
SenaraiaduanPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _senaraiaduan_routing_module__WEBPACK_IMPORTED_MODULE_0__.SenaraiaduanPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient]
                }
            })
        ],
        declarations: [_senaraiaduan_page__WEBPACK_IMPORTED_MODULE_1__.SenaraiaduanPage]
    })
], SenaraiaduanPageModule);



/***/ }),

/***/ 40761:
/*!*******************************************************************!*\
  !*** ./src/app/aduan/aduanmain/senaraiaduan/senaraiaduan.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SenaraiaduanPage": () => (/* binding */ SenaraiaduanPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_senaraiaduan_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./senaraiaduan.page.html */ 88970);
/* harmony import */ var _senaraiaduan_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./senaraiaduan.page.scss */ 16977);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_services_aduan_aduan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/aduan/aduan.service */ 47743);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/native-storage/ngx */ 34113);









let SenaraiaduanPage = class SenaraiaduanPage {
    constructor(location, router, aduanService, alertController, loadingController, nativeStorage) {
        this.location = location;
        this.router = router;
        this.aduanService = aduanService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.nativeStorage = nativeStorage;
        this.AduanList = [];
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            yield this.nativeStorage.getItem('user').then(data => {
                this.userid = data.value.user_id;
            }, error => console.error(error));
            yield this.aduanService.getbyid(this.userid).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                console.log(res);
                this.AduanList = res;
                this.AduanList.forEach(element => {
                    if (element.status == 0) {
                        element.statdet = "Tiada Status";
                    }
                    else if (element.status == 1) {
                        element.statdet = "Belum Dibaiki";
                    }
                    else if (element.status == 2) {
                        element.statdet = "Dibaiki Sebahagian";
                    }
                    else if (element.status == 3) {
                        element.statdet = "Sudah Dibaiki";
                    }
                    else if (element.status == 4) {
                        element.statdet = "Kontrak";
                    }
                    else if (element.status == 5) {
                        element.statdet = "Semakan";
                    }
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
        });
    }
    back() {
        this.location.back();
    }
    viewaduan(data) {
        let navigationExtras = {
            state: {
                aduan: data
            }
        };
        this.router.navigate(['/main/tabs/aduan/aduanmain/view'], navigationExtras);
    }
};
SenaraiaduanPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _shared_services_aduan_aduan_service__WEBPACK_IMPORTED_MODULE_2__.AduanService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__.NativeStorage }
];
SenaraiaduanPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-senaraiaduan',
        template: _raw_loader_senaraiaduan_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_senaraiaduan_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SenaraiaduanPage);



/***/ }),

/***/ 16977:
/*!*********************************************************************!*\
  !*** ./src/app/aduan/aduanmain/senaraiaduan/senaraiaduan.page.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container2 {\n  padding-top: 50px;\n  height: 650px;\n}\n\n.headerbox {\n  padding: 0px 40px 30px 40px;\n}\n\n.label {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 19px;\n  line-height: 28px;\n  color: #3D2C7C;\n  padding-bottom: 20px;\n}\n\n.cardaduan2 {\n  background: #FFFFFF;\n  border: 1px solid #F7FAFD;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 8px rgba(73, 87, 184, 0.2);\n  border-radius: 10px;\n  width: 100%;\n  height: 171px;\n  display: inline-block;\n  padding: 10px 30px;\n}\n\n.cardhead {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 15px;\n  letter-spacing: -0.165px;\n  color: #494949;\n  text-align: left;\n  padding: 9px 0px;\n}\n\n.carddetail {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  letter-spacing: -0.165px;\n  color: #3D2C7C;\n  text-align: left;\n  padding: 9px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbmFyYWlhZHVhbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNKIiwiZmlsZSI6InNlbmFyYWlhZHVhbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyMiB7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgaGVpZ2h0OiA2NTBweDtcbn1cblxuLmhlYWRlcmJveCB7XG4gICAgcGFkZGluZzogMHB4IDQwcHggMzBweCA0MHB4O1xufVxuXG4ubGFiZWwge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBjb2xvcjogIzNEMkM3QztcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLmNhcmRhZHVhbjIge1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Y3RkFGRDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYmEoNzMsIDg3LCAxODQsIDAuMik7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE3MXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XG59XG5cbi5jYXJkaGVhZCB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4xNjVweDtcbiAgICBjb2xvcjogIzQ5NDk0OTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDlweCAwcHg7XG59XG5cbi5jYXJkZGV0YWlsIHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjE2NXB4O1xuICAgIGNvbG9yOiAjM0QyQzdDO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogOXB4IDBweDtcbn0iXX0= */");

/***/ }),

/***/ 88970:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/aduan/aduanmain/senaraiaduan/senaraiaduan.page.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"main\">\n    <div class=\"container\">\n      <div class=\"header\">\n        <ion-icon name=\"chevron-back-outline\" style=\"float: left;\" (click)=\"back()\"></ion-icon>\n        <span class=\"headertxt\">{{ 'aduan.aduan' | translate }}</span>\n      </div>\n      <div style=\"padding-top: 40px;\">\n        <ion-img src=\"../../assets/icon/aduan.png\" class=\"icontetapan\"></ion-img>\n      </div>\n    </div>\n  </div>\n  <div class=\"main2\">\n    <div class=\"container2\">\n      <div class=\"headerbox\">\n        <div class=\"label\">{{ 'aduan.senarai' | translate }}</div>\n        <div *ngFor=\"let item of AduanList\">\n          <div class=\"cardaduan2\" (click)=\"viewaduan(item)\">\n            <div class=\"cardhead\">{{ 'aduan.kategori' | translate }}</div>\n            <div class=\"carddetail\">{{item.kategori}} - {{item.kategorilist.kategori}}</div>\n            <div class=\"cardhead\">{{ 'aduan.status' | translate }}</div>\n            <div class=\"carddetail\">{{item.statdet}}<span style=\"float: right;\">></span></div>\n          </div>\n          <div style=\"height: 10px;\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_aduan_aduanmain_senaraiaduan_senaraiaduan_module_ts.js.map