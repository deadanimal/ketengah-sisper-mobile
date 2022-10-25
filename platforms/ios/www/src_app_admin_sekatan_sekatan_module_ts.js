(self["webpackChunkkkr_pothole"] = self["webpackChunkkkr_pothole"] || []).push([["src_app_admin_sekatan_sekatan_module_ts"],{

/***/ 33598:
/*!*********************************************************!*\
  !*** ./src/app/admin/sekatan/sekatan-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SekatanPageRoutingModule": () => (/* binding */ SekatanPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _sekatan_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sekatan.page */ 18604);




const routes = [
    {
        path: '',
        component: _sekatan_page__WEBPACK_IMPORTED_MODULE_0__.SekatanPage
    },
    {
        path: 'form',
        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_admin_sekatan_form_form_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./form/form.module */ 22754)).then(m => m.FormPageModule)
    }
];
let SekatanPageRoutingModule = class SekatanPageRoutingModule {
};
SekatanPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SekatanPageRoutingModule);



/***/ }),

/***/ 9206:
/*!*************************************************!*\
  !*** ./src/app/admin/sekatan/sekatan.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "SekatanPageModule": () => (/* binding */ SekatanPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _sekatan_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sekatan-routing.module */ 33598);
/* harmony import */ var _sekatan_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sekatan.page */ 18604);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 84236);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 40830);










function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let SekatanPageModule = class SekatanPageModule {
};
SekatanPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _sekatan_routing_module__WEBPACK_IMPORTED_MODULE_0__.SekatanPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient]
                }
            })
        ],
        declarations: [_sekatan_page__WEBPACK_IMPORTED_MODULE_1__.SekatanPage]
    })
], SekatanPageModule);



/***/ }),

/***/ 18604:
/*!***********************************************!*\
  !*** ./src/app/admin/sekatan/sekatan.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SekatanPage": () => (/* binding */ SekatanPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_sekatan_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sekatan.page.html */ 67507);
/* harmony import */ var _sekatan_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sekatan.page.scss */ 14582);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_shared_modals_adminmenu_adminmenu_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/modals/adminmenu/adminmenu.page */ 18037);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);








let SekatanPage = class SekatanPage {
    constructor(location, modalController, router) {
        this.location = location;
        this.modalController = modalController;
        this.router = router;
    }
    ngOnInit() {
    }
    back() {
        this.location.back();
    }
    adminmenu() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_shared_modals_adminmenu_adminmenu_page__WEBPACK_IMPORTED_MODULE_2__.AdminmenuPage,
                cssClass: 'menu-modal',
                backdropDismiss: true
            });
            return yield modal.present();
        });
    }
    futsal() {
        let navigationExtras = {
            state: {
                source: '1'
            }
        };
        this.router.navigate(['main/admin/sekatan/form'], navigationExtras);
    }
    badminton() {
        let navigationExtras = {
            state: {
                source: '2'
            }
        };
        this.router.navigate(['main/admin/sekatan/form'], navigationExtras);
    }
    dewan() {
        let navigationExtras = {
            state: {
                source: '3'
            }
        };
        this.router.navigate(['main/admin/sekatan/form'], navigationExtras);
    }
};
SekatanPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
SekatanPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-sekatan',
        template: _raw_loader_sekatan_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sekatan_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SekatanPage);



/***/ }),

/***/ 14582:
/*!*************************************************!*\
  !*** ./src/app/admin/sekatan/sekatan.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container2 {\n  padding-top: 50px;\n  padding: 50px 25px 20px 10px;\n  height: 180px;\n}\n\n.container3 {\n  padding: 100px 0px;\n  text-align: center;\n}\n\n.cardaduan {\n  background: #FFFFFF;\n  border: 1px solid #F7FAFD;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 8px rgba(73, 87, 184, 0.2);\n  border-radius: 10px;\n  width: 143px;\n  height: 171px;\n  margin: auto;\n  display: inline-block;\n  padding: 30px 10px;\n}\n\n.cardicon {\n  width: 64px;\n  height: 64px;\n  margin: auto;\n}\n\n.cardword {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 130%;\n  text-align: center;\n  letter-spacing: -0.165px;\n  color: #000000;\n  padding-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNla2F0YW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLDhDQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQ0oiLCJmaWxlIjoic2VrYXRhbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyMiB7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgcGFkZGluZzogNTBweCAyNXB4IDIwcHggMTBweDtcbiAgICBoZWlnaHQ6IDE4MHB4O1xufVxuXG4uY29udGFpbmVyMyB7XG4gICAgcGFkZGluZzogMTAwcHggMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhcmRhZHVhbiB7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRjdGQUZEO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggcmdiYSg3MywgODcsIDE4NCwgMC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHdpZHRoOiAxNDNweDtcbiAgICBoZWlnaHQ6IDE3MXB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMzBweCAxMHB4O1xuICB9XG4gIFxuICAuY2FyZGljb24ge1xuICAgIHdpZHRoOiA2NHB4O1xuICAgIGhlaWdodDogNjRweDtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbiAgXG4gIC5jYXJkd29yZCB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMzAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMTY1cHg7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gIH0iXX0= */");

/***/ }),

/***/ 67507:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/sekatan/sekatan.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"main\">\n    <div class=\"container2\">\n      <div class=\"header\">\n        <ion-icon name=\"chevron-back-outline\" style=\"float: left;\" (click)=\"back()\"></ion-icon>\n        <span class=\"headertxt\">{{ 'sekatan.tarikh' | translate }}</span>\n        <ion-img src=\"../../assets/icon/adminmenu.png\" style=\"position: absolute;top: 50px;right: 20px;\" class=\"iconnoti\" (click)=\"adminmenu()\"></ion-img>\n      </div>\n    </div>\n  </div>\n  <div class=\"main2\">\n    <div class=\"container3\">\n      <div class=\"cardaduan\" (click)=\"futsal()\">\n        <ion-img src=\"../../assets/icon/futsal.png\" class=\"cardicon\"></ion-img>\n        <div class=\"cardword\">{{ 'sekatan.futsal' | translate }}</div>\n      </div>\n      <span style=\"padding:0px 10px;\"></span>\n      <div class=\"cardaduan\" (click)=\"badminton()\">\n        <ion-img src=\"../../assets/icon/badminton.png\" class=\"cardicon\"></ion-img>\n        <div class=\"cardword\">{{ 'sekatan.badminton' | translate }}</div>\n      </div>\n      <div style=\"height: 30px;\"></div>\n\n      <div class=\"cardaduan\" (click)=\"dewan()\">\n        <ion-img src=\"../../assets/icon/dewan.png\" class=\"cardicon\"></ion-img>\n        <div class=\"cardword\">{{ 'tempat_kemudahan.dewan' | translate }}</div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_admin_sekatan_sekatan_module_ts.js.map