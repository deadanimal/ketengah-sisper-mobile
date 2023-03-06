(self["webpackChunkSisper"] = self["webpackChunkSisper"] || []).push([["src_app_tempahkemudahan_sejarah_view_view_module_ts"],{

/***/ 17124:
/*!*********************************************************************!*\
  !*** ./src/app/tempahkemudahan/sejarah/view/view-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewPageRoutingModule": () => (/* binding */ ViewPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _view_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.page */ 48454);




const routes = [
    {
        path: '',
        component: _view_page__WEBPACK_IMPORTED_MODULE_0__.ViewPage
    }
];
let ViewPageRoutingModule = class ViewPageRoutingModule {
};
ViewPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ViewPageRoutingModule);



/***/ }),

/***/ 77159:
/*!*************************************************************!*\
  !*** ./src/app/tempahkemudahan/sejarah/view/view.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "ViewPageModule": () => (/* binding */ ViewPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _view_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-routing.module */ 17124);
/* harmony import */ var _view_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.page */ 48454);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 84236);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 40830);










function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let ViewPageModule = class ViewPageModule {
};
ViewPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _view_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViewPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient]
                }
            }),
        ],
        declarations: [_view_page__WEBPACK_IMPORTED_MODULE_1__.ViewPage]
    })
], ViewPageModule);



/***/ }),

/***/ 48454:
/*!***********************************************************!*\
  !*** ./src/app/tempahkemudahan/sejarah/view/view.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewPage": () => (/* binding */ ViewPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_view_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./view.page.html */ 85160);
/* harmony import */ var _view_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.page.scss */ 81170);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);






let ViewPage = class ViewPage {
    constructor(location, route, router) {
        this.location = location;
        this.route = route;
        this.router = router;
        this.jenis = 0;
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.tempahan = this.router.getCurrentNavigation().extras.state.tempahan;
                console.log(this.tempahan);
            }
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            if (this.tempahan.dewan_id != null) {
                this.jenis = 1;
            }
            else if (this.tempahan.alat_court_id != null) {
                this.jenis = 2;
                this.tempahan.tempat = "Alatan";
            }
            else {
                this.jenis = 3;
                var time = this.tempahan.time.split(",");
                var alltime = [];
                yield time.forEach(function (value) {
                    alltime.push(value);
                });
                console.log(alltime);
                this.tempahan.time_from = alltime[0] + ':00';
                this.tempahan.time_to = alltime[alltime.length - 1]++;
                this.tempahan.time_to = alltime[alltime.length - 1] + ':00';
            }
        });
    }
    back() {
        this.location.back();
    }
};
ViewPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
ViewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-view',
        template: _raw_loader_view_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_view_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ViewPage);



/***/ }),

/***/ 81170:
/*!*************************************************************!*\
  !*** ./src/app/tempahkemudahan/sejarah/view/view.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container2 {\n  padding: 50px 30px;\n  height: 650px;\n  text-align: center;\n}\n\n.detail {\n  background: #FFFFFF;\n  border: 1px solid #F7FAFD;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 8px rgba(73, 87, 184, 0.2);\n  border-radius: 17px;\n  padding: 20px 20px;\n}\n\n.card {\n  padding: 15px 10px;\n}\n\n.cardhead {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 15px;\n  letter-spacing: -0.165px;\n  color: #494949;\n  text-align: left;\n  padding: 3px 0px;\n}\n\n.carddetail {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  letter-spacing: -0.165px;\n  color: #3D2C7C;\n  text-align: left;\n  padding: 3px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLDhDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoidmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyMiB7XG4gICAgcGFkZGluZzogNTBweCAzMHB4O1xuICAgIGhlaWdodDogNjUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGV0YWlsIHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGN0ZBRkQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDhweCByZ2JhKDczLCA4NywgMTg0LCAwLjIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDE3cHg7XG4gICAgcGFkZGluZzogMjBweCAyMHB4O1xufVxuXG4uY2FyZCB7XG4gICAgcGFkZGluZzogMTVweCAxMHB4O1xufVxuXG4uY2FyZGhlYWQge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMTY1cHg7XG4gICAgY29sb3I6ICM0OTQ5NDk7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAzcHggMHB4O1xufVxuXG4uY2FyZGRldGFpbCB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4xNjVweDtcbiAgICBjb2xvcjogIzNEMkM3QztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDNweCAwcHg7XG59Il19 */");

/***/ }),

/***/ 85160:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tempahkemudahan/sejarah/view/view.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"main\">\n    <div class=\"container\">\n      <div class=\"header\">\n        <ion-icon name=\"chevron-back-outline\" style=\"float: left;\" (click)=\"back()\"></ion-icon>\n        <span class=\"headertxt\">\n          <div style=\"width:350px;margin: auto;\">\n            ({{ 'sejarah.sejarah' | translate }})</div></span>\n      </div>\n      <div style=\"padding-top: 40px;\">\n        <ion-img src=\"../../assets/icon/SejarahHead.png\" class=\"icontetapan\"></ion-img>\n      </div>\n    </div>\n  </div>\n  <div class=\"main2\">\n    <div class=\"container2\">\n      <div class=\"detail\">\n        <div class=\"card\">\n          <div class=\"cardhead\">{{ 'sejarah.fasiliti' | translate }}</div>\n          <div class=\"carddetail\">{{tempahan.tempat}}</div>\n        </div>\n        <div class=\"card\" *ngIf=\"jenis != 2\">\n          <div class=\"cardhead\">{{ 'sejarah.lokasi' | translate }}</div>\n          <div class=\"carddetail\">{{tempahan.lokasinama}}</div>\n        </div>\n        <div class=\"card\" *ngIf=\"jenis != 2\">\n          <div class=\"cardhead\" *ngIf=\"jenis == 1\">{{ 'sejarah.dewan' | translate }}</div>\n          <div class=\"cardhead\" *ngIf=\"jenis == 3\">{{ 'sejarah.gelangang' | translate }}</div>\n          <div class=\"carddetail\">{{tempahan.namatempat}}</div>\n        </div>\n        <div class=\"card\">\n          <div class=\"cardhead\">{{ 'sejarah.tarikh' | translate }}</div>\n          <div class=\"carddetail\">{{tempahan.date_from}} - {{tempahan.date_to}}</div>\n        </div>\n        <div class=\"card\" *ngIf=\"jenis != 1 && jenis != 2\">\n          <div class=\"cardhead\">{{ 'sejarah.masa' | translate }}</div>\n          <div class=\"carddetail\">{{tempahan.time_from}} - {{tempahan.time_to}}</div>\n        </div>\n        <div class=\"card\" *ngIf=\"jenis != 1 && jenis != 3\">\n          <div class=\"cardhead\">{{ 'sejarah.qty' | translate }}</div>\n          <div class=\"carddetail\">{{tempahan.qty}}</div>\n        </div>\n        <div class=\"card\">\n          <div class=\"cardhead\">{{ 'sejarah.jumlah' | translate }}</div>\n          <div class=\"carddetail\">{{tempahan.amaun}}</div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tempahkemudahan_sejarah_view_view_module_ts.js.map