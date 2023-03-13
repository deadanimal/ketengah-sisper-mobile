(self["webpackChunkSisper"] = self["webpackChunkSisper"] || []).push([["src_app_akaun_perumahan_perumahan_module_ts"],{

/***/ 386:
/*!*************************************************************!*\
  !*** ./src/app/akaun/perumahan/perumahan-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerumahanPageRoutingModule": () => (/* binding */ PerumahanPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _perumahan_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perumahan.page */ 93599);




const routes = [
    {
        path: '',
        component: _perumahan_page__WEBPACK_IMPORTED_MODULE_0__.PerumahanPage
    },
    {
        path: 'form',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_akaun_perumahan_form_form_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./form/form.module */ 76578)).then(m => m.FormPageModule)
    }
];
let PerumahanPageRoutingModule = class PerumahanPageRoutingModule {
};
PerumahanPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PerumahanPageRoutingModule);



/***/ }),

/***/ 70455:
/*!*****************************************************!*\
  !*** ./src/app/akaun/perumahan/perumahan.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "PerumahanPageModule": () => (/* binding */ PerumahanPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _perumahan_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perumahan-routing.module */ 386);
/* harmony import */ var _perumahan_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perumahan.page */ 93599);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 84236);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 40830);










function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let PerumahanPageModule = class PerumahanPageModule {
};
PerumahanPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _perumahan_routing_module__WEBPACK_IMPORTED_MODULE_0__.PerumahanPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient]
                }
            })
        ],
        declarations: [_perumahan_page__WEBPACK_IMPORTED_MODULE_1__.PerumahanPage]
    })
], PerumahanPageModule);



/***/ }),

/***/ 93599:
/*!***************************************************!*\
  !*** ./src/app/akaun/perumahan/perumahan.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerumahanPage": () => (/* binding */ PerumahanPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_perumahan_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./perumahan.page.html */ 31121);
/* harmony import */ var _perumahan_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perumahan.page.scss */ 51157);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);






let PerumahanPage = class PerumahanPage {
    constructor(location, router) {
        this.location = location;
        this.router = router;
    }
    ngOnInit() {
    }
    back() {
        this.location.back();
    }
    akaunyes() {
        let navigationExtras = {
            state: {
                source: 'yes'
            }
        };
        this.router.navigate(['main/tabs/akaun/perumahan/form'], navigationExtras);
    }
    akaunno() {
        let navigationExtras = {
            state: {
                source: 'no'
            }
        };
        this.router.navigate(['main/tabs/akaun/perumahan/form'], navigationExtras);
    }
};
PerumahanPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
PerumahanPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-perumahan',
        template: _raw_loader_perumahan_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_perumahan_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PerumahanPage);



/***/ }),

/***/ 51157:
/*!*****************************************************!*\
  !*** ./src/app/akaun/perumahan/perumahan.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container2 {\n  padding-top: 45px;\n  height: 650px;\n  text-align: center;\n}\n\n.bodyhead {\n  font-weight: 500;\n  font-size: 19px;\n  color: #3D2C7C;\n}\n\n.maincomp {\n  height: 100%;\n  width: 100%;\n  text-align: left;\n  padding: 0px 30px;\n}\n\n.headerbody {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.02em;\n  color: #494949;\n  width: 70%;\n}\n\n.cardyes {\n  background: #7054D9;\n  box-shadow: 0px 4px 8px rgba(73, 87, 184, 0.2);\n  border-radius: 17px;\n  height: 100px;\n  width: 90%;\n  text-align: left;\n  padding: 10px 25px;\n}\n\n.cardno {\n  background: #3D2C7C;\n  box-shadow: 0px 4px 8px rgba(73, 87, 184, 0.2);\n  border-radius: 17px;\n  height: 100px;\n  width: 90%;\n  text-align: left;\n  padding: 10px 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcnVtYWhhbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsOENBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSw4Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0oiLCJmaWxlIjoicGVydW1haGFuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIyIHtcbiAgICBwYWRkaW5nLXRvcDogNDVweDtcbiAgICBoZWlnaHQ6IDY1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJvZHloZWFkIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICBjb2xvcjogIzNEMkM3Qztcbn1cblxuLm1haW5jb21wIHtcbiAgICBoZWlnaHQ6IDEwMCU7IFxuICAgIHdpZHRoOiAxMDAlOyBcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDBweCAzMHB4O1xufVxuXG4uaGVhZGVyYm9keSB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgICBjb2xvcjogIzQ5NDk0OTtcbiAgICB3aWR0aDogNzAlO1xufVxuXG4uY2FyZHllcyB7XG4gICAgYmFja2dyb3VuZDogIzcwNTREOTtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDhweCByZ2JhKDczLCA4NywgMTg0LCAwLjIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDE3cHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogOTAlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogMTBweCAyNXB4O1xufVxuXG4uY2FyZG5vIHtcbiAgICBiYWNrZ3JvdW5kOiAjM0QyQzdDO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYmEoNzMsIDg3LCAxODQsIDAuMik7XG4gICAgYm9yZGVyLXJhZGl1czogMTdweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAxMHB4IDI1cHg7XG59Il19 */");

/***/ }),

/***/ 31121:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/akaun/perumahan/perumahan.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"main\">\n    <div class=\"container\">\n      <div class=\"header\">\n        <ion-icon name=\"chevron-back-outline\" style=\"float: left;\" (click)=\"back()\"></ion-icon>\n        <span class=\"headertxt\">{{ 'akaun.tambahakaun' | translate }}</span>\n      </div>\n      <div style=\"padding-top: 40px;\">\n        <ion-img src=\"../../assets/icon/homerumah.png\" class=\"icontetapan\"></ion-img>\n      </div>\n    </div>\n  </div>\n  <div class=\"main2\">\n    <div class=\"container2\">\n      <div class=\"maincomp\">\n        <div class=\"bodyhead\">{{ 'akaun.tambahakaun' | translate }}</div>\n        <div style=\"height:10px;\"></div>\n        <div class=\"headerbody\">{{ 'akaun.desc' | translate }}</div>\n        <div style=\"height:60px;\"></div>\n        <div class=\"cardyes\" (click)=\"akaunyes()\">{{ 'akaun.yes' | translate }}, <br>{{ 'akaun.tambahyes' | translate }}</div>\n        <div style=\"height: 20px;\"></div>\n        <div class=\"cardno\" (click)=\"akaunno()\">{{ 'akaun.no' | translate }}, <br>{{ 'akaun.tambahno' | translate }}</div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_akaun_perumahan_perumahan_module_ts.js.map