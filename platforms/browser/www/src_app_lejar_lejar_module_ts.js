(self["webpackChunkSisper"] = self["webpackChunkSisper"] || []).push([["src_app_lejar_lejar_module_ts"],{

/***/ 57551:
/*!***********************************************!*\
  !*** ./src/app/lejar/lejar-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LejarPageRoutingModule": () => (/* binding */ LejarPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _lejar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lejar.page */ 97356);




const routes = [
    {
        path: '',
        component: _lejar_page__WEBPACK_IMPORTED_MODULE_0__.LejarPage
    },
    {
        path: 'sewarumah',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_modals_lejard_lejard_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_lejar_sewarumah_sewarumah_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sewarumah/sewarumah.module */ 11598)).then(m => m.SewarumahPageModule)
    },
    {
        path: 'sewapremis',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_modals_lejard_lejard_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_lejar_sewapremis_sewapremis_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sewapremis/sewapremis.module */ 21251)).then(m => m.SewapremisPageModule)
    }
];
let LejarPageRoutingModule = class LejarPageRoutingModule {
};
LejarPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LejarPageRoutingModule);



/***/ }),

/***/ 17937:
/*!***************************************!*\
  !*** ./src/app/lejar/lejar.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "LejarPageModule": () => (/* binding */ LejarPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _lejar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lejar-routing.module */ 57551);
/* harmony import */ var _lejar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lejar.page */ 97356);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 84236);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 40830);










function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let LejarPageModule = class LejarPageModule {
};
LejarPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _lejar_routing_module__WEBPACK_IMPORTED_MODULE_0__.LejarPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient]
                }
            })
        ],
        declarations: [_lejar_page__WEBPACK_IMPORTED_MODULE_1__.LejarPage]
    })
], LejarPageModule);



/***/ }),

/***/ 97356:
/*!*************************************!*\
  !*** ./src/app/lejar/lejar.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LejarPage": () => (/* binding */ LejarPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_lejar_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./lejar.page.html */ 7233);
/* harmony import */ var _lejar_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lejar.page.scss */ 24530);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);






let LejarPage = class LejarPage {
    constructor(location, router) {
        this.location = location;
        this.router = router;
    }
    ngOnInit() {
    }
    back() {
        this.location.back();
    }
    sewarumah() {
        this.router.navigate(['/main/tabs/lejar/sewarumah']);
    }
    sewapremis() {
        this.router.navigate(['/main/tabs/lejar/sewapremis']);
    }
};
LejarPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
LejarPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-lejar',
        template: _raw_loader_lejar_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_lejar_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LejarPage);



/***/ }),

/***/ 24530:
/*!***************************************!*\
  !*** ./src/app/lejar/lejar.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container2 {\n  padding-top: 100px;\n  height: 650px;\n  text-align: center;\n}\n\n.cardaduan {\n  background: #FFFFFF;\n  border: 1px solid #F7FAFD;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 8px rgba(73, 87, 184, 0.2);\n  border-radius: 10px;\n  width: 143px;\n  height: 171px;\n  margin: auto;\n  display: inline-block;\n  padding: 30px 10px;\n}\n\n.cardicon {\n  width: 64px;\n  height: 64px;\n  margin: auto;\n}\n\n.cardword {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 130%;\n  text-align: center;\n  letter-spacing: -0.165px;\n  color: #000000;\n  padding-top: 20px;\n}\n\n.container2 {\n  padding-top: 100px;\n  height: 650px;\n  text-align: center;\n}\n\n.cardaduan {\n  background: #FFFFFF;\n  border: 1px solid #F7FAFD;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 8px rgba(73, 87, 184, 0.2);\n  border-radius: 10px;\n  width: 143px;\n  height: 171px;\n  margin: auto;\n  display: inline-block;\n  padding: 30px 10px;\n}\n\n.cardicon {\n  width: 64px;\n  height: 64px;\n  margin: auto;\n}\n\n.cardword {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 130%;\n  text-align: center;\n  letter-spacing: -0.165px;\n  color: #000000;\n  padding-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlamFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLDhDQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFFSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBRUoiLCJmaWxlIjoibGVqYXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcjIge1xyXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICBoZWlnaHQ6IDY1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcmRhZHVhbiB7XHJcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjRjdGQUZEO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggcmdiYSg3MywgODcsIDE4NCwgMC4yKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHdpZHRoOiAxNDNweDtcclxuICBoZWlnaHQ6IDE3MXB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMzBweCAxMHB4O1xyXG59XHJcblxyXG4uY2FyZGljb24ge1xyXG4gIHdpZHRoOiA2NHB4O1xyXG4gIGhlaWdodDogNjRweDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5jYXJkd29yZCB7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxMzAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMTY1cHg7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuLmNvbnRhaW5lcjIge1xyXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiA2NTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcmRhZHVhbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Y3RkFGRDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDhweCByZ2JhKDczLCA4NywgMTg0LCAwLjIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHdpZHRoOiAxNDNweDtcclxuICAgIGhlaWdodDogMTcxcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDEwcHg7XHJcbn1cclxuXHJcbi5jYXJkaWNvbiB7XHJcbiAgICB3aWR0aDogNjRweDtcclxuICAgIGhlaWdodDogNjRweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmNhcmR3b3JkIHtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTMwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4xNjVweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 7233:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lejar/lejar.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\n<ion-content>\r\n  <div class=\"main\">\r\n    <div class=\"container\">\r\n      <div class=\"header\">\r\n        <ion-icon name=\"chevron-back-outline\" style=\"float: left;\" (click)=\"back()\"></ion-icon>\r\n        <span class=\"headertxt\" style=\"width: 93%;\">{{ 'lejar.lejar' | translate }}</span>\r\n      </div>\r\n      <div style=\"padding-top: 40px;\">\r\n        <ion-img src=\"../../assets/icon/lejar.png\" class=\"icontetapan\"></ion-img>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"main2\">\r\n    <div class=\"container2\">\r\n      <div class=\"cardaduan\" (click)=\"sewarumah()\">\r\n        <ion-img src=\"../../assets/icon/psewarumah.png\" class=\"cardicon\"></ion-img>\r\n        <div class=\"cardword\">{{ 'lejar.sewarumah' | translate }}</div>\r\n      </div>\r\n      <span style=\"padding:0px 10px;\"></span>\r\n      <div class=\"cardaduan\" (click)=\"sewapremis()\">\r\n        <ion-img src=\"../../assets/icon/psewapremis.png\" class=\"cardicon\"></ion-img>\r\n        <div class=\"cardword\">{{ 'lejar.sewapremis' | translate }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_lejar_lejar_module_ts.js.map