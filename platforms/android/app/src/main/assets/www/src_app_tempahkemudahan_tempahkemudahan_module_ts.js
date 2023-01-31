(self["webpackChunkkkr_pothole"] = self["webpackChunkkkr_pothole"] || []).push([["src_app_tempahkemudahan_tempahkemudahan_module_ts"],{

/***/ 42700:
/*!*******************************************************************!*\
  !*** ./src/app/tempahkemudahan/tempahkemudahan-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TempahkemudahanPageRoutingModule": () => (/* binding */ TempahkemudahanPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tempahkemudahan_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tempahkemudahan.page */ 3386);




const routes = [
    {
        path: '',
        component: _tempahkemudahan_page__WEBPACK_IMPORTED_MODULE_0__.TempahkemudahanPage
    },
    {
        path: 'dewan',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tempahkemudahan_dewan_dewan_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dewan/dewan.module */ 24574)).then(m => m.DewanPageModule)
    },
    {
        path: 'alatan',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tempahkemudahan_alatan_alatan_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./alatan/alatan.module */ 74295)).then(m => m.AlatanPageModule)
    },
    {
        path: 'fasiliti',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tempahkemudahan_fasiliti_fasiliti_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./fasiliti/fasiliti.module */ 46339)).then(m => m.FasilitiPageModule)
    },
    {
        path: 'sejarah',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tempahkemudahan_sejarah_sejarah_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./sejarah/sejarah.module */ 45046)).then(m => m.SejarahPageModule)
    },
    {
        path: 'sejarah',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tempahkemudahan_sejarah_sejarah_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./sejarah/sejarah.module */ 45046)).then(m => m.SejarahPageModule)
    }
];
let TempahkemudahanPageRoutingModule = class TempahkemudahanPageRoutingModule {
};
TempahkemudahanPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TempahkemudahanPageRoutingModule);



/***/ }),

/***/ 624:
/*!***********************************************************!*\
  !*** ./src/app/tempahkemudahan/tempahkemudahan.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "TempahkemudahanPageModule": () => (/* binding */ TempahkemudahanPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _tempahkemudahan_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tempahkemudahan-routing.module */ 42700);
/* harmony import */ var _tempahkemudahan_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tempahkemudahan.page */ 3386);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 84236);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 40830);










function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let TempahkemudahanPageModule = class TempahkemudahanPageModule {
};
TempahkemudahanPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _tempahkemudahan_routing_module__WEBPACK_IMPORTED_MODULE_0__.TempahkemudahanPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient]
                }
            })
        ],
        declarations: [_tempahkemudahan_page__WEBPACK_IMPORTED_MODULE_1__.TempahkemudahanPage]
    })
], TempahkemudahanPageModule);



/***/ }),

/***/ 3386:
/*!*********************************************************!*\
  !*** ./src/app/tempahkemudahan/tempahkemudahan.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TempahkemudahanPage": () => (/* binding */ TempahkemudahanPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tempahkemudahan_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tempahkemudahan.page.html */ 99021);
/* harmony import */ var _tempahkemudahan_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tempahkemudahan.page.scss */ 41749);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);






let TempahkemudahanPage = class TempahkemudahanPage {
    constructor(location, router) {
        this.location = location;
        this.router = router;
    }
    ngOnInit() {
    }
    back() {
        this.location.back();
    }
    dewan() {
        this.router.navigate(['main/tabs/tempahkemudahan/dewan']);
    }
    alatan() {
        this.router.navigate(['main/tabs/tempahkemudahan/alatan']);
    }
    fasiliti() {
        this.router.navigate(['main/tabs/tempahkemudahan/fasiliti']);
    }
    sejarah() {
        this.router.navigate(['main/tabs/tempahkemudahan/sejarah']);
    }
};
TempahkemudahanPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
TempahkemudahanPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-tempahkemudahan',
        template: _raw_loader_tempahkemudahan_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tempahkemudahan_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TempahkemudahanPage);



/***/ }),

/***/ 41749:
/*!***********************************************************!*\
  !*** ./src/app/tempahkemudahan/tempahkemudahan.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container2 {\n  padding-top: 100px;\n  height: 650px;\n  text-align: center;\n}\n\n.cardaduan {\n  background: #FFFFFF;\n  border: 1px solid #F7FAFD;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 8px rgba(73, 87, 184, 0.2);\n  border-radius: 10px;\n  width: 143px;\n  height: 171px;\n  margin: auto;\n  display: inline-block;\n  padding: 30px 10px;\n}\n\n.cardicon {\n  width: 64px;\n  height: 64px;\n  margin: auto;\n}\n\n.cardword {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 130%;\n  text-align: center;\n  letter-spacing: -0.165px;\n  color: #000000;\n  padding-top: 20px;\n}\n\n.container2 {\n  padding-top: 100px;\n  height: 650px;\n  text-align: center;\n}\n\n.cardaduan {\n  background: #FFFFFF;\n  border: 1px solid #F7FAFD;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 8px rgba(73, 87, 184, 0.2);\n  border-radius: 10px;\n  width: 143px;\n  height: 171px;\n  margin: auto;\n  display: inline-block;\n  padding: 30px 10px;\n}\n\n.cardicon {\n  width: 64px;\n  height: 64px;\n  margin: auto;\n}\n\n.cardword {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 130%;\n  text-align: center;\n  letter-spacing: -0.165px;\n  color: #000000;\n  padding-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBhaGtlbXVkYWhhbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsOENBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQ0E7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUVGIiwiZmlsZSI6InRlbXBhaGtlbXVkYWhhbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyMiB7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgaGVpZ2h0OiA2NTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZGFkdWFuIHtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm9yZGVyOiAxcHggc29saWQgI0Y3RkFGRDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggcmdiYSg3MywgODcsIDE4NCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDE0M3B4O1xuICBoZWlnaHQ6IDE3MXB4O1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMzBweCAxMHB4O1xufVxuXG4uY2FyZGljb24ge1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2NHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5jYXJkd29yZCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTMwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMTY1cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbi5jb250YWluZXIyIHtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBoZWlnaHQ6IDY1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJkYWR1YW4ge1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRjdGQUZEO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDhweCByZ2JhKDczLCA4NywgMTg0LCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogMTQzcHg7XG4gIGhlaWdodDogMTcxcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAzMHB4IDEwcHg7XG59XG5cbi5jYXJkaWNvbiB7XG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmNhcmR3b3JkIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxMzAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4xNjVweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuIl19 */");

/***/ }),

/***/ 99021:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tempahkemudahan/tempahkemudahan.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-content>\n  <div class=\"main\">\n    <div class=\"container\">\n      <div class=\"header\">\n        <ion-icon name=\"chevron-back-outline\" style=\"float: left;\" (click)=\"back()\"></ion-icon>\n        <span class=\"headertxt\">{{ 'tempat_kemudahan.tempahK' | translate }}</span>\n      </div>\n      <div style=\"padding-top: 40px;\">\n        <ion-img src=\"../../assets/icon/tempatkemudahan.png\" class=\"icontetapan\"></ion-img>\n      </div>\n    </div>\n  </div>\n  <div class=\"main2\">\n    <div class=\"container2\">\n      <div class=\"cardaduan\" (click)=\"dewan()\">\n        <ion-img src=\"../../assets/icon/dewan.png\" class=\"cardicon\"></ion-img>\n        <div class=\"cardword\">{{ 'tempat_kemudahan.dewan' | translate }}</div>\n      </div>\n      <span style=\"padding:0px 10px;\"></span>\n      <div class=\"cardaduan\" (click)=\"alatan()\">\n        <ion-img src=\"../../assets/icon/alatan.png\" class=\"cardicon\"></ion-img>\n        <div class=\"cardword\">{{ 'tempat_kemudahan.alatan' | translate }}</div>\n      </div>\n      <div style=\"height: 30px;\"></div>\n\n      <div class=\"cardaduan\" (click)=\"fasiliti()\">\n        <ion-img src=\"../../assets/icon/fasiliti.png\" class=\"cardicon\"></ion-img>\n        <div class=\"cardword\">{{ 'tempat_kemudahan.fasiliti' | translate }}</div>\n      </div>\n      <span style=\"padding:0px 10px;\"></span>\n      <div class=\"cardaduan\" (click)=\"sejarah()\">\n        <ion-img src=\"../../assets/icon/sejarahTempahan.png\" class=\"cardicon\"></ion-img>\n        <div class=\"cardword\">{{ 'tempat_kemudahan.sejarahTempahan' | translate }}</div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tempahkemudahan_tempahkemudahan_module_ts.js.map