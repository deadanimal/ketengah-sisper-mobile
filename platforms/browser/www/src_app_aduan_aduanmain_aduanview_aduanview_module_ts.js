(self["webpackChunkSisper"] = self["webpackChunkSisper"] || []).push([["src_app_aduan_aduanmain_aduanview_aduanview_module_ts"],{

/***/ 77868:
/*!***********************************************************************!*\
  !*** ./src/app/aduan/aduanmain/aduanview/aduanview-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AduanviewPageRoutingModule": () => (/* binding */ AduanviewPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _aduanview_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aduanview.page */ 78242);




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

/***/ 46014:
/*!***************************************************************!*\
  !*** ./src/app/aduan/aduanmain/aduanview/aduanview.module.ts ***!
  \***************************************************************/
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
/* harmony import */ var _aduanview_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aduanview-routing.module */ 77868);
/* harmony import */ var _aduanview_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aduanview.page */ 78242);
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

/***/ 78242:
/*!*************************************************************!*\
  !*** ./src/app/aduan/aduanmain/aduanview/aduanview.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AduanviewPage": () => (/* binding */ AduanviewPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_aduanview_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./aduanview.page.html */ 23944);
/* harmony import */ var _aduanview_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aduanview.page.scss */ 84424);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);






let AduanviewPage = class AduanviewPage {
    constructor(route, router, location) {
        this.route = route;
        this.router = router;
        this.location = location;
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.aduan = this.router.getCurrentNavigation().extras.state.aduan;
                var date = new Date(this.aduan.created_at);
                var month = date.getMonth() + 1;
                this.aduan.date = date.getDate() + '/' + month + '/' + date.getFullYear();
                if (this.aduan.statdet == undefined) {
                    if (this.aduan.status == 0) {
                        this.aduan.statdet = "Tiada Status";
                    }
                    else if (this.aduan.status == 1) {
                        this.aduan.statdet = "Belum Dibaiki";
                    }
                    else if (this.aduan.status == 2) {
                        this.aduan.statdet = "Dibaiki Sebahagian";
                    }
                    else if (this.aduan.status == 3) {
                        this.aduan.statdet = "Sudah Dibaiki";
                    }
                    else if (this.aduan.status == 4) {
                        this.aduan.statdet = "Kontrak";
                    }
                    else if (this.aduan.status == 5) {
                        this.aduan.statdet = "Semakan";
                    }
                }
            }
        });
    }
    ngOnInit() {
    }
    back() {
        this.location.back();
    }
};
AduanviewPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location }
];
AduanviewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-aduanview',
        template: _raw_loader_aduanview_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_aduanview_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AduanviewPage);



/***/ }),

/***/ 84424:
/*!***************************************************************!*\
  !*** ./src/app/aduan/aduanmain/aduanview/aduanview.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container2 {\n  padding: 50px 30px;\n  height: 650px;\n  text-align: center;\n}\n\n.detail {\n  background: #FFFFFF;\n  border: 1px solid #F7FAFD;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 8px rgba(73, 87, 184, 0.2);\n  border-radius: 17px;\n  padding: 20px 20px;\n}\n\n.card {\n  padding: 15px 10px;\n}\n\n.cardhead {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 15px;\n  letter-spacing: -0.165px;\n  color: #494949;\n  text-align: left;\n  padding: 3px 0px;\n}\n\n.carddetail {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  letter-spacing: -0.165px;\n  color: #3D2C7C;\n  text-align: left;\n  padding: 3px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkdWFudmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsOENBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJhZHVhbnZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcjIge1xuICAgIHBhZGRpbmc6IDUwcHggMzBweDtcbiAgICBoZWlnaHQ6IDY1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRldGFpbCB7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRjdGQUZEO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggcmdiYSg3MywgODcsIDE4NCwgMC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xuICAgIHBhZGRpbmc6IDIwcHggMjBweDtcbn1cblxuLmNhcmQge1xuICAgIHBhZGRpbmc6IDE1cHggMTBweDtcbn1cblxuLmNhcmRoZWFkIHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjE2NXB4O1xuICAgIGNvbG9yOiAjNDk0OTQ5O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogM3B4IDBweDtcbn1cblxuLmNhcmRkZXRhaWwge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMTY1cHg7XG4gICAgY29sb3I6ICMzRDJDN0M7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAzcHggMHB4O1xufSJdfQ== */");

/***/ }),

/***/ 23944:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/aduan/aduanmain/aduanview/aduanview.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"main\">\n    <div class=\"container\">\n      <div class=\"header\">\n        <ion-icon name=\"chevron-back-outline\" style=\"float: left;\" (click)=\"back()\"></ion-icon>\n        <span class=\"headertxt\">{{ 'aduan.butiranaduan' | translate }}</span>\n      </div>\n      <div style=\"padding-top: 40px;\">\n        <ion-img src=\"../../assets/icon/aduan.png\" class=\"icontetapan\"></ion-img>\n      </div>\n    </div>\n  </div>\n  <div class=\"main2\">\n    <div class=\"container2\">\n      <div class=\"detail\">\n        <div class=\"card\">\n          <div class=\"cardhead\">{{ 'aduan.tarikh' | translate }}</div>\n          <div class=\"carddetail\">{{aduan.date}}</div>\n        </div>\n        <div class=\"card\">\n          <div class=\"cardhead\">{{ 'aduan.katerosak' | translate }}</div>\n          <div class=\"carddetail\">{{aduan.kategorilist.kategori_id}} - {{aduan.kategorilist.kategori}}</div>\n        </div>\n        <div class=\"card\">\n          <div class=\"cardhead\">{{ 'aduan.jenisrosak' | translate }}</div>\n          <div class=\"carddetail\">{{aduan.kategorilist.kerosakan_id}} - {{aduan.kategorilist.kerosakan}}</div>\n        </div>\n        <div class=\"card\">\n          <div class=\"cardhead\">{{ 'aduan.catatan' | translate }}</div>\n          <div class=\"carddetail\">{{aduan.catatan}}</div>\n        </div>\n        <div class=\"card\">\n          <div class=\"cardhead\">{{ 'aduan.status' | translate }}</div>\n          <div class=\"carddetail\">{{aduan.statdet}}</div>\n        </div>\n      </div>\n    </div>  \n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_aduan_aduanmain_aduanview_aduanview_module_ts.js.map