(self["webpackChunkkkr_pothole"] = self["webpackChunkkkr_pothole"] || []).push([["default-src_app_admin_aduan_aduanview_aduanview_module_ts"],{

/***/ 77272:
/*!*******************************************************************!*\
  !*** ./src/app/admin/aduan/aduanview/aduanview-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AduanviewPageRoutingModule": () => (/* binding */ AduanviewPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _aduanview_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aduanview.page */ 11987);




const routes = [
    {
        path: '',
        component: _aduanview_page__WEBPACK_IMPORTED_MODULE_0__.AduanviewPage
    }
];
let AduanviewPageRoutingModule = class AduanviewPageRoutingModule {
};
AduanviewPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AduanviewPageRoutingModule);



/***/ }),

/***/ 57625:
/*!***********************************************************!*\
  !*** ./src/app/admin/aduan/aduanview/aduanview.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "AduanviewPageModule": () => (/* binding */ AduanviewPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _aduanview_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aduanview-routing.module */ 77272);
/* harmony import */ var _aduanview_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aduanview.page */ 11987);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 84236);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 40830);










function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let AduanviewPageModule = class AduanviewPageModule {
};
AduanviewPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _aduanview_routing_module__WEBPACK_IMPORTED_MODULE_0__.AduanviewPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient]
                }
            })
        ],
        declarations: [_aduanview_page__WEBPACK_IMPORTED_MODULE_1__.AduanviewPage]
    })
], AduanviewPageModule);



/***/ }),

/***/ 11987:
/*!*********************************************************!*\
  !*** ./src/app/admin/aduan/aduanview/aduanview.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AduanviewPage": () => (/* binding */ AduanviewPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_aduanview_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./aduanview.page.html */ 3543);
/* harmony import */ var _aduanview_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aduanview.page.scss */ 12172);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_shared_modals_adminmenu_adminmenu_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/modals/adminmenu/adminmenu.page */ 18037);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_shared_services_aduan_aduan_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/aduan/aduan.service */ 47743);









let AduanviewPage = class AduanviewPage {
    constructor(location, modalController, route, router, aduanService, alertController, loadingController) {
        this.location = location;
        this.modalController = modalController;
        this.route = route;
        this.router = router;
        this.aduanService = aduanService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.ddStatus = [
            {
                id: 0,
                text: 'Tiada Status'
            },
            {
                id: 1,
                text: 'Belum Dibaiki'
            },
            {
                id: 2,
                text: 'Dibaiki Sebahagian'
            },
            {
                id: 3,
                text: 'Sudah Dibaiki'
            },
            {
                id: 4,
                text: 'Kontrak'
            },
            {
                id: 5,
                text: 'Semakan'
            }
        ];
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                var temp = this.router.getCurrentNavigation().extras.state.aduan;
                console.log(temp);
                this.aduan = temp;
            }
        });
    }
    ngOnInit() {
    }
    back() {
        this.location.back();
    }
    adminmenu() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_shared_modals_adminmenu_adminmenu_page__WEBPACK_IMPORTED_MODULE_2__.AdminmenuPage,
                cssClass: 'menu-modal',
                backdropDismiss: true
            });
            return yield modal.present();
        });
    }
    hantar(id, status) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            var data = {
                id: id,
                status: status
            };
            console.log(data);
            yield this.aduanService.updateStat(data).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                yield loading.dismiss();
                console.log(res);
                this.router.navigate(['main/admin/aduan']);
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
};
AduanviewPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_shared_services_aduan_aduan_service__WEBPACK_IMPORTED_MODULE_3__.AduanService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController }
];
AduanviewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-aduanview',
        template: _raw_loader_aduanview_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_aduanview_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AduanviewPage);



/***/ }),

/***/ 12172:
/*!***********************************************************!*\
  !*** ./src/app/admin/aduan/aduanview/aduanview.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container2 {\n  padding-top: 50px;\n  padding: 50px 25px 20px 10px;\n  height: 180px;\n}\n\n.container3 {\n  padding: 50px 30px 20px 30px;\n  height: 700px;\n}\n\n.detail {\n  background: #FFFFFF;\n  border: 1px solid #F7FAFD;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 8px rgba(73, 87, 184, 0.2);\n  border-radius: 17px;\n  padding: 20px 20px;\n}\n\n.card {\n  padding: 15px 10px;\n}\n\n.cardhead {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 15px;\n  letter-spacing: -0.165px;\n  color: #494949;\n  text-align: left;\n  padding: 3px 0px;\n}\n\n.carddetail {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  letter-spacing: -0.165px;\n  color: #3D2C7C;\n  text-align: left;\n  padding: 3px 0px;\n}\n\n.button {\n  background-color: #3D2C7C;\n  height: 48px;\n  width: 90%;\n  border-radius: 10px;\n  margin: auto;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 21px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkdWFudmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksNEJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4Q0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDSiIsImZpbGUiOiJhZHVhbnZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcjIge1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgIHBhZGRpbmc6IDUwcHggMjVweCAyMHB4IDEwcHg7XG4gICAgaGVpZ2h0OiAxODBweDtcbn1cblxuLmNvbnRhaW5lcjMge1xuICAgIHBhZGRpbmc6IDUwcHggMzBweCAyMHB4IDMwcHg7XG4gICAgaGVpZ2h0OiA3MDBweDtcbn1cblxuLmRldGFpbCB7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRjdGQUZEO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggcmdiYSg3MywgODcsIDE4NCwgMC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xuICAgIHBhZGRpbmc6IDIwcHggMjBweDtcbn1cblxuLmNhcmQge1xuICAgIHBhZGRpbmc6IDE1cHggMTBweDtcbn1cblxuLmNhcmRoZWFkIHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjE2NXB4O1xuICAgIGNvbG9yOiAjNDk0OTQ5O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogM3B4IDBweDtcbn1cblxuLmNhcmRkZXRhaWwge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMTY1cHg7XG4gICAgY29sb3I6ICMzRDJDN0M7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAzcHggMHB4O1xufVxuXG4uYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0QyQzdDO1xuICAgIGhlaWdodDogNDhweDtcbiAgICB3aWR0aDogOTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luOmF1dG87XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xufSJdfQ== */");

/***/ }),

/***/ 3543:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/aduan/aduanview/aduanview.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"main\">\n    <div class=\"container2\">\n      <div class=\"header\">\n        <ion-icon name=\"chevron-back-outline\" style=\"float: left;\" (click)=\"back()\"></ion-icon>\n        <span class=\"headertxt\">{{ 'aduan.aduan' | translate }}</span>\n        <ion-img src=\"../../assets/icon/adminmenu.png\" style=\"position: absolute;top: 50px;right: 20px;\" class=\"iconnoti\" (click)=\"adminmenu()\"></ion-img>\n      </div>\n    </div>\n  </div>\n  <div class=\"main2\">\n    <div class=\"container3\">\n      <div class=\"detail\">\n        <div class=\"card\">\n          <div class=\"cardhead\">{{ 'aduan.tarikh' | translate }}</div>\n          <div class=\"carddetail\">{{aduan.date}}</div>\n        </div>\n        <div class=\"card\">\n          <div class=\"cardhead\">{{ 'aduan.katerosak' | translate }}</div>\n          <div class=\"carddetail\">{{aduan.katedet.kategori_id}} - {{aduan.katedet.kategori}}</div>\n        </div>\n        <div class=\"card\">\n          <div class=\"cardhead\">{{ 'aduan.jenisrosak' | translate }}</div>\n          <div class=\"carddetail\">{{aduan.katedet.kerosakan_id}} - {{aduan.katedet.kerosakan}}</div>\n        </div>\n        <div class=\"card\">\n          <div class=\"cardhead\">{{ 'aduan.catatan' | translate }}</div>\n          <div class=\"carddetail\">{{aduan.catatan}}</div>\n        </div>\n        <div class=\"card\">\n          <div class=\"cardhead\">{{ 'aduan.status' | translate }}</div>\n          <div class=\"carddetail\">\n            <ion-select okText=\"{{ 'semak.ok' | translate }}\" cancelText=\"{{ 'semak.cancel' | translate }}\" class=\"select\" placeholder=\"{{ 'aduan.pilihrosak' | translate }}\" [(ngModel)]=\"aduan.status\">\n              <ion-select-option *ngFor=\"let status of ddStatus; let i = index\" [value]=\"status.id\">\n                {{status.text}}\n              </ion-select-option>\n          </ion-select>\n        </div>\n        </div>\n      </div>\n      <div style=\"padding-top: 40px;text-align: center;\"><button ion-button class=\"button\" (click)=\"hantar(aduan.id,aduan.status)\">{{ 'aduan.hantar' | translate }}</button></div>\n      \n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_admin_aduan_aduanview_aduanview_module_ts.js.map