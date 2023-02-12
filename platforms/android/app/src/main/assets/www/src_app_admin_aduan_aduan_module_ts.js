(self["webpackChunkSisper"] = self["webpackChunkSisper"] || []).push([["src_app_admin_aduan_aduan_module_ts"],{

/***/ 95835:
/*!*****************************************************!*\
  !*** ./src/app/admin/aduan/aduan-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AduanPageRoutingModule": () => (/* binding */ AduanPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _aduan_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aduan.page */ 6059);




const routes = [
    {
        path: '',
        component: _aduan_page__WEBPACK_IMPORTED_MODULE_0__.AduanPage
    },
    {
        path: 'aduanlist',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./aduanlist/aduanlist.module */ 61073)).then(m => m.AduanlistPageModule)
    },
    {
        path: 'aduanview',
        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_admin_aduan_aduanview_aduanview_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./aduanview/aduanview.module */ 57625)).then(m => m.AduanviewPageModule)
    }
];
let AduanPageRoutingModule = class AduanPageRoutingModule {
};
AduanPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AduanPageRoutingModule);



/***/ }),

/***/ 49665:
/*!*********************************************!*\
  !*** ./src/app/admin/aduan/aduan.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "AduanPageModule": () => (/* binding */ AduanPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _aduan_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aduan-routing.module */ 95835);
/* harmony import */ var _aduan_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aduan.page */ 6059);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 84236);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 40830);










function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let AduanPageModule = class AduanPageModule {
};
AduanPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _aduan_routing_module__WEBPACK_IMPORTED_MODULE_0__.AduanPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient]
                }
            })
        ],
        declarations: [_aduan_page__WEBPACK_IMPORTED_MODULE_1__.AduanPage]
    })
], AduanPageModule);



/***/ }),

/***/ 6059:
/*!*******************************************!*\
  !*** ./src/app/admin/aduan/aduan.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AduanPage": () => (/* binding */ AduanPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_aduan_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./aduan.page.html */ 33620);
/* harmony import */ var _aduan_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aduan.page.scss */ 12793);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _shared_modals_adminmenu_adminmenu_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/modals/adminmenu/adminmenu.page */ 18037);
/* harmony import */ var src_app_shared_services_aduan_aduan_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/aduan/aduan.service */ 47743);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);









let AduanPage = class AduanPage {
    constructor(location, modalController, aduanService, alertController, loadingController, router) {
        this.location = location;
        this.modalController = modalController;
        this.aduanService = aduanService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.router = router;
        this.aduanfront = {
            status1: {
                count: 0,
                detail: []
            },
            status2: {
                count: 0,
                detail: []
            },
            status3: {
                count: 0,
                detail: []
            },
            status4: {
                count: 0,
                detail: []
            },
            status5: {
                count: 0,
                detail: []
            },
            status6: {
                count: 0,
                detail: []
            }
        };
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
        });
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            yield this.aduanService.getall().subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                var val1 = 0;
                var val2 = 0;
                var val3 = 0;
                var val4 = 0;
                var val5 = 0;
                var val6 = 0;
                var temp1 = [];
                var temp2 = [];
                var temp3 = [];
                var temp4 = [];
                var temp5 = [];
                var temp6 = [];
                yield res.forEach(function (value) {
                    if (value.status == 0) {
                        val1 = val1 + 1;
                        value.statusdet = "Tiada Status";
                        temp1.push(value);
                    }
                    else if (value.status == 1) {
                        val2 = val2 + 1;
                        value.statusdet = "Belum Dibaiki";
                        temp2.push(value);
                    }
                    else if (value.status == 2) {
                        val3 = val3 + 1;
                        value.statusdet = "Dibaiki Sebahagian";
                        temp3.push(value);
                    }
                    else if (value.status == 3) {
                        val4 = val4 + 1;
                        value.statusdet = "Sudah Dibaiki";
                        temp4.push(value);
                    }
                    else if (value.status == 4) {
                        val5 = val5 + 1;
                        value.statusdet = "Kontrak";
                        temp5.push(value);
                    }
                    else if (value.status == 5) {
                        val6 = val6 + 1;
                        value.statusdet = "Semakan";
                        temp6.push(value);
                    }
                });
                this.aduanfront.status1.count = val1;
                this.aduanfront.status1.detail = temp1;
                this.aduanfront.status2.count = val2;
                this.aduanfront.status2.detail = temp2;
                this.aduanfront.status3.count = val3;
                this.aduanfront.status3.detail = temp3;
                this.aduanfront.status4.count = val4;
                this.aduanfront.status4.detail = temp4;
                this.aduanfront.status5.count = val5;
                this.aduanfront.status5.detail = temp5;
                this.aduanfront.status6.count = val6;
                this.aduanfront.status6.detail = temp6;
                yield loading.dismiss();
                console.log('aduanfront', this.aduanfront);
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
    adminmenu() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _shared_modals_adminmenu_adminmenu_page__WEBPACK_IMPORTED_MODULE_2__.AdminmenuPage,
                cssClass: 'menu-modal',
                backdropDismiss: true
            });
            return yield modal.present();
        });
    }
    senaraiaduan(aduan) {
        let navigationExtras = {
            state: {
                aduan: aduan
            }
        };
        this.router.navigate(['main/admin/aduan/aduanlist'], navigationExtras);
    }
};
AduanPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: src_app_shared_services_aduan_aduan_service__WEBPACK_IMPORTED_MODULE_3__.AduanService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
AduanPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-aduan',
        template: _raw_loader_aduan_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_aduan_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AduanPage);



/***/ }),

/***/ 12793:
/*!*********************************************!*\
  !*** ./src/app/admin/aduan/aduan.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container2 {\n  padding-top: 50px;\n  padding: 50px 25px 20px 10px;\n  height: 180px;\n}\n\n.container3 {\n  padding: 30px 20px 20px 20px;\n  height: 700px;\n}\n\n.cardaduan {\n  background: #FFFFFF;\n  border: 1px solid #F7FAFD;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 8px rgba(73, 87, 184, 0.2);\n  border-radius: 10px;\n  display: inline-block;\n  padding: 30px 10px;\n  width: 100%;\n}\n\n.count {\n  width: 45px;\n  height: 45px;\n  margin: auto;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 40px;\n  text-align: center;\n  color: #3D2C7C;\n}\n\n.cardword {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14.5668px;\n  line-height: 22px;\n  align-items: center;\n  color: #3D2C7C;\n  text-align: center;\n}\n\n.desc {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12.139px;\n  line-height: 22px;\n  align-items: center;\n  color: #494949;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkdWFuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSw0QkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLDhDQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDSiIsImZpbGUiOiJhZHVhbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyMiB7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIHBhZGRpbmc6IDUwcHggMjVweCAyMHB4IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyMyB7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHggMjBweCAyMHB4O1xyXG4gICAgaGVpZ2h0OiA3MDBweDtcclxufVxyXG5cclxuLmNhcmRhZHVhbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Y3RkFGRDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDhweCByZ2JhKDczLCA4NywgMTg0LCAwLjIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDMwcHggMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY291bnQge1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMzRDJDN0M7XHJcbn1cclxuXHJcbi5jYXJkd29yZCB7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxNC41NjY4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzNEMkM3QztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmRlc2Mge1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTIuMTM5cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzQ5NDk0OTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */");

/***/ }),

/***/ 33620:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/aduan/aduan.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"main\">\r\n    <div class=\"container2\">\r\n      <div class=\"header\">\r\n        <ion-icon name=\"chevron-back-outline\" style=\"float: left;\" (click)=\"back()\"></ion-icon>\r\n        <span class=\"headertxt\">{{ 'aduan.aduan' | translate }}</span>\r\n        <ion-img src=\"../../assets/icon/adminmenu.png\" style=\"position: absolute;top: 50px;right: 20px;\" class=\"iconnoti\" (click)=\"adminmenu()\"></ion-img>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"main2\">\r\n    <div class=\"container3\">\r\n      <table style=\"width: 100%;\">\r\n        <colgroup>\r\n          <col style=\"width: 50%;\">\r\n          <col style=\"width: 50%;\">\r\n        </colgroup>\r\n        <tr>\r\n          <td style=\"padding: 10px 10px;\">\r\n            <div class=\"cardaduan\" (click)=\"senaraiaduan(aduanfront.status1.detail)\">\r\n              <div class=\"count\">{{aduanfront.status1.count}}</div>\r\n              <div class=\"cardword\">{{ 'aduan.aduan' | translate }}</div>\r\n              <div class=\"desc\">Tiada status</div>\r\n            </div>\r\n          </td>\r\n          <td style=\"padding: 10px 10px;\">\r\n            <div class=\"cardaduan\" (click)=\"senaraiaduan(aduanfront.status2.detail)\">\r\n              <div class=\"count\">{{aduanfront.status2.count}}</div>\r\n              <div class=\"cardword\">{{ 'aduan.aduan' | translate }}</div>\r\n              <div class=\"desc\" style=\"color:#D23330;\">Belum Dibaiki</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td style=\"padding: 10px 10px;\">\r\n            <div class=\"cardaduan\" (click)=\"senaraiaduan(aduanfront.status5.detail)\">\r\n              <div class=\"count\">{{aduanfront.status5.count}}</div>\r\n              <div class=\"cardword\">{{ 'aduan.aduan' | translate }}</div>\r\n              <div class=\"desc\">Kontrak</div>\r\n            </div>\r\n          </td>\r\n          <td style=\"padding: 10px 10px;\">\r\n            <div class=\"cardaduan\" (click)=\"senaraiaduan(aduanfront.status3.detail)\">\r\n              <div class=\"count\">{{aduanfront.status3.count}}</div>\r\n              <div class=\"cardword\">{{ 'aduan.aduan' | translate }}</div>\r\n              <div class=\"desc\" style=\"color:#F6C949;\">Dibaiki Sebahagian</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td style=\"padding: 10px 10px;\">\r\n            <div class=\"cardaduan\" (click)=\"senaraiaduan(aduanfront.status6.detail)\">\r\n              <div class=\"count\">{{aduanfront.status6.count}}</div>\r\n              <div class=\"cardword\">{{ 'aduan.aduan' | translate }}</div>\r\n              <div class=\"desc\">Semakan</div>\r\n            </div>\r\n          </td>\r\n          <td style=\"padding: 10px 10px;\">\r\n            <div class=\"cardaduan\" (click)=\"senaraiaduan(aduanfront.status4.detail)\">\r\n              <div class=\"count\">{{aduanfront.status4.count}}</div>\r\n              <div class=\"cardword\">{{ 'aduan.aduan' | translate }}</div>\r\n              <div class=\"desc\" style=\"color:#009640;\">Sudah Dibaiki</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_admin_aduan_aduan_module_ts.js.map