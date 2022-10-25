(self["webpackChunkkkr_pothole"] = self["webpackChunkkkr_pothole"] || []).push([["src_app_bayaran_resit_resit_module_ts"],{

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_resit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./resit.page.html */ 2547);
/* harmony import */ var _resit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resit.page.scss */ 34762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/pdf-generator/ngx */ 37961);







let ResitPage = class ResitPage {
    constructor(location, route, router, pdfGenerator) {
        this.location = location;
        this.route = route;
        this.router = router;
        this.pdfGenerator = pdfGenerator;
        this.route.queryParams.subscribe((params) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (this.router.getCurrentNavigation().extras.state) {
                this.data = this.router.getCurrentNavigation().extras.state.data;
                console.log('data', this.data);
                this.src = this.router.getCurrentNavigation().extras.state.src;
            }
        }));
    }
    ngOnInit() {
        console.log('data', this.data);
    }
    back() {
        this.router.navigate(['main/tabs/home']);
    }
    cetak(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
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
};
ResitPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_2__.PDFGenerator }
];
ResitPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-resit',
        template: _raw_loader_resit_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_resit_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ResitPage);



/***/ }),

/***/ 34762:
/*!***********************************************!*\
  !*** ./src/app/bayaran/resit/resit.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container2 {\n  padding-top: 50px;\n  padding: 50px 25px 20px 10px;\n  height: 180px;\n}\n\n.container3 {\n  padding: 30px 20px;\n  height: 700px;\n}\n\n.headresit {\n  color: black;\n}\n\n.card {\n  background: #FFFFFF;\n  box-shadow: 4px 0px 8px rgba(73, 87, 184, 0.2), 0px 4px 8px rgba(73, 87, 184, 0.2);\n  border-radius: 10px;\n  height: 300px;\n  color: black;\n  padding: 20px;\n}\n\n.button {\n  background-color: #3D2C7C;\n  height: 40px;\n  width: 100%;\n  border-radius: 10px;\n  margin: auto;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 21px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2l0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0Esa0ZBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDSiIsImZpbGUiOiJyZXNpdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyMiB7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgcGFkZGluZzogNTBweCAyNXB4IDIwcHggMTBweDtcbiAgICBoZWlnaHQ6IDE4MHB4O1xufVxuXG4uY29udGFpbmVyMyB7XG4gICAgcGFkZGluZzogMzBweCAyMHB4O1xuICAgIGhlaWdodDogNzAwcHg7XG59XG5cbi5oZWFkcmVzaXQge1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLmNhcmQge1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm94LXNoYWRvdzogNHB4IDBweCA4cHggcmdiYSg3MywgODcsIDE4NCwgMC4yKSwgMHB4IDRweCA4cHggcmdiYSg3MywgODcsIDE4NCwgMC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRDJDN0M7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luOmF1dG87XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xufSJdfQ== */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"main\">\n    <div class=\"container2\">\n      <div class=\"header\">\n        <ion-icon name=\"chevron-back-outline\" style=\"float: left;\" (click)=\"back()\"></ion-icon>\n        <span class=\"headertxt\" style=\"width:70%;margin: auto;display: inline-block;\">{{ 'bayaran.resit' | translate }}</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"main2\">\n    <div class=\"container3\">\n      <div class=\"headresit\">\n        <span>Thank You,</span><br>\n        <span>Here's your receipt.</span>\n      </div>\n      <div *ngFor=\"let item of data\">\n        <div style=\"height: 20px;\"></div>\n        <div class=\"card\" >\n          <div>\n            <button class=\"button\" (click)=\"cetak(item.id);\">{{'bayaran.cetak' | translate}}</button>\n          </div>\n          <div style=\"height: 20px;\"></div>\n          <div id=\"pdf{{item.id}}\">\n            <table style=\"width: 100%;\">\n              <colgroup>\n                <col style=\"width: 35%;\">\n                <col style=\"width: 65%;\">\n              </colgroup>\n              <tr>\n                <td>Tarikh Resit</td>\n                <td>{{item.tarikh_resit}}</td>\n              </tr>\n              <tr>\n                <td>No Resit</td>\n                <td>{{item.no_resit}}</td>\n              </tr>\n              <tr *ngIf=\"src == 1\">\n                <td>No Akaun</td>\n                <td>{{item.noakaun}}</td>\n              </tr>\n              <tr *ngIf=\"src == 1\">\n                <td>No IC Pemilik</td>\n                <td>{{item.no_ic_pemilik}}</td>\n              </tr>\n              <tr *ngIf=\"src == 2\">\n                <td>Kod Bayaran</td>\n                <td>{{item.kodbayaran}}</td>\n              </tr>\n            </table>\n          </div>\n        </div>\n        <div style=\"height: 20px;\"></div>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_bayaran_resit_resit_module_ts.js.map