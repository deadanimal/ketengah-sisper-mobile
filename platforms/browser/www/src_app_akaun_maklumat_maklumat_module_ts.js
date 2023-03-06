(self["webpackChunkSisper"] = self["webpackChunkSisper"] || []).push([["src_app_akaun_maklumat_maklumat_module_ts"],{

/***/ 53541:
/*!***********************************************************!*\
  !*** ./src/app/akaun/maklumat/maklumat-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaklumatPageRoutingModule": () => (/* binding */ MaklumatPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _maklumat_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maklumat.page */ 70921);




const routes = [
    {
        path: '',
        component: _maklumat_page__WEBPACK_IMPORTED_MODULE_0__.MaklumatPage
    }
];
let MaklumatPageRoutingModule = class MaklumatPageRoutingModule {
};
MaklumatPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MaklumatPageRoutingModule);



/***/ }),

/***/ 10778:
/*!***************************************************!*\
  !*** ./src/app/akaun/maklumat/maklumat.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "MaklumatPageModule": () => (/* binding */ MaklumatPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _maklumat_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maklumat-routing.module */ 53541);
/* harmony import */ var _maklumat_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maklumat.page */ 70921);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 84236);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 40830);










function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let MaklumatPageModule = class MaklumatPageModule {
};
MaklumatPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _maklumat_routing_module__WEBPACK_IMPORTED_MODULE_0__.MaklumatPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient]
                }
            })
        ],
        declarations: [_maklumat_page__WEBPACK_IMPORTED_MODULE_1__.MaklumatPage]
    })
], MaklumatPageModule);



/***/ }),

/***/ 70921:
/*!*************************************************!*\
  !*** ./src/app/akaun/maklumat/maklumat.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaklumatPage": () => (/* binding */ MaklumatPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_maklumat_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./maklumat.page.html */ 87766);
/* harmony import */ var _maklumat_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maklumat.page.scss */ 80693);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_shared_services_akaun_perumahan_perumahan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/akaun/perumahan/perumahan.service */ 96082);







let MaklumatPage = class MaklumatPage {
    constructor(location, route, router, perumahanService) {
        this.location = location;
        this.route = route;
        this.router = router;
        this.perumahanService = perumahanService;
        this.jumexist = false;
        this.route.queryParams.subscribe((params) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (this.router.getCurrentNavigation().extras.state) {
                this.data = this.router.getCurrentNavigation().extras.state.data;
                console.log('data', this.data);
                this.jumlah = parseInt(this.data.kadar_sewa) + parseInt(this.data.jumlah_tunggakan);
                if (this.jumlah > 0) {
                    this.jumexist = true;
                }
                let d = new Date();
                d.setMonth(d.getMonth() + 1, 1);
                console.log(d.toLocaleDateString('en-GB'));
                this.bayarsblm = d.toLocaleDateString('en-GB');
                console.log("byrsblm", this.bayarsblm);
            }
        }));
    }
    ngOnInit() {
    }
    back() {
        this.location.back();
    }
    bayar() {
        var arr = [];
        var akaun = {};
        if (this.data.no_akaun_rumah != undefined) {
            akaun = {
                "jenis": 'rumah',
                "id": this.data.id,
                "noakaun": this.data.no_akaun_rumah,
                "amaun": this.jumlah,
                "no_ic_pemilik": this.data.no_kad_pengenalan
            };
        }
        else if (this.data.no_akaun_premis != undefined) {
            akaun = {
                "jenis": 'premis',
                "id": this.data.id,
                "noakaun": this.data.no_akaun_premis,
                "amaun": this.jumlah,
                "no_ic_pemilik": this.data.no_kad_pengenalan
            };
        }
        arr.push(akaun);
        var data = {
            "src": 1,
            "jumlah": this.jumlah,
            "jumcount": 1,
            "akaun": arr
        };
        let navigationExtras = {
            state: {
                data: data
            }
        };
        this.router.navigate(['main/tabs/bayaran'], navigationExtras);
    }
    hapus() {
        this.perumahanService.deleteAkaun(this.data.id).subscribe(res => {
            console.log('res', res);
            this.back();
            console.log('deleting');
        }, error => {
            console.log('error', error);
        });
    }
};
MaklumatPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_shared_services_akaun_perumahan_perumahan_service__WEBPACK_IMPORTED_MODULE_2__.PerumahanService }
];
MaklumatPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-maklumat',
        template: _raw_loader_maklumat_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_maklumat_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MaklumatPage);



/***/ }),

/***/ 80693:
/*!***************************************************!*\
  !*** ./src/app/akaun/maklumat/maklumat.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container2 {\n  padding-top: 50px;\n  padding: 50px 25px 20px 10px;\n  height: 180px;\n}\n\n.container3 {\n  padding: 40px 0px;\n  height: 700px;\n}\n\n.delete {\n  background-color: transparent !important;\n  display: flex;\n  align-items: right;\n  justify-content: right;\n}\n\n.jumlah {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: -0.165px;\n  color: #494949;\n  text-align: center;\n}\n\n.jumlahrm {\n  font-style: normal;\n  font-weight: 700;\n  font-size: 48px;\n  line-height: 72px;\n  letter-spacing: -0.165px;\n  color: #D23330;\n  text-align: center;\n}\n\n.byrsblm {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 123%;\n  text-align: center;\n  letter-spacing: -0.165px;\n  color: #3D2C7C;\n}\n\n.bilcard {\n  width: 138px;\n  height: 81px;\n  left: 63px;\n  top: 327px;\n  background: #FFFFFF;\n  border: 1px solid #F7FAFD;\n  box-shadow: 0px 4px 8px rgba(73, 87, 184, 0.2);\n  border-radius: 17px;\n  text-align: center;\n  padding-top: 20px;\n  display: inline-block;\n}\n\n.bilinfo {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 21px;\n  letter-spacing: -0.165px;\n  color: #494949;\n  text-align: center;\n}\n\n.bilval {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 21px;\n  letter-spacing: -0.165px;\n  color: #D23330;\n  text-align: center;\n}\n\n.boxwhite {\n  color: #3D2C7C;\n  padding: 25px 0px 0px 0px;\n  font-size: 16px;\n  width: 80%;\n  margin: auto;\n}\n\n.input {\n  color: black;\n  display: inline-block;\n  width: 100%;\n}\n\n.button {\n  background-color: #3D2C7C;\n  border: 1pt solid #3D2C7C;\n  height: 48px;\n  width: 70%;\n  border-radius: 10px;\n  margin: auto;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 21px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ha2x1bWF0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNFLHdDQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOENBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUNKIiwiZmlsZSI6Im1ha2x1bWF0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIyIHtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICBwYWRkaW5nOiA1MHB4IDI1cHggMjBweCAxMHB4O1xuICAgIGhlaWdodDogMTgwcHg7XG59XG5cbi5jb250YWluZXIzIHtcbiAgICBwYWRkaW5nOiA0MHB4IDBweDtcbiAgICBoZWlnaHQ6IDcwMHB4O1xufVxuXG4uZGVsZXRle1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogcmlnaHQ7XG4gIGp1c3RpZnktY29udGVudDogcmlnaHQ7XG59XG5cbi5qdW1sYWgge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMTY1cHg7XG4gICAgY29sb3I6ICM0OTQ5NDk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uanVtbGFocm0ge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICBsaW5lLWhlaWdodDogNzJweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMTY1cHg7XG4gICAgY29sb3I6ICNEMjMzMzA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnlyc2JsbSB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMjMlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMTY1cHg7XG4gICAgY29sb3I6ICMzRDJDN0M7XG59XG5cbi5iaWxjYXJkIHtcbiAgICB3aWR0aDogMTM4cHg7XG4gICAgaGVpZ2h0OiA4MXB4O1xuICAgIGxlZnQ6IDYzcHg7XG4gICAgdG9wOiAzMjdweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGN0ZBRkQ7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggcmdiYSg3MywgODcsIDE4NCwgMC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5iaWxpbmZvIHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjE2NXB4O1xuICAgIGNvbG9yOiAjNDk0OTQ5O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJpbHZhbCB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4xNjVweDtcbiAgICBjb2xvcjogI0QyMzMzMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ib3h3aGl0ZSB7XG4gICAgY29sb3I6ICMzRDJDN0M7XG4gICAgcGFkZGluZzogMjVweCAwcHggMHB4IDBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46YXV0bztcbn1cblxuLmlucHV0IHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0QyQzdDO1xuICAgIGJvcmRlcjogMXB0IHNvbGlkICMzRDJDN0M7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIHdpZHRoOiA3MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW46YXV0bztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XG59XG5cblxuIl19 */");

/***/ }),

/***/ 87766:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/akaun/maklumat/maklumat.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"main\">\n    <div class=\"container2\">\n      <div class=\"header\">\n        <ion-icon name=\"chevron-back-outline\" style=\"float: left;\" (click)=\"back()\"></ion-icon>\n        <span class=\"headertxt\" style=\"width:70%;margin: auto;display: inline-block;\">{{ 'akaun.maklumat' | translate\n          }}</span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"main2\">\n    <div class=\"delete\">\n      <button style=\"height: 50px; width: 100px; background-color: rgb(108, 31, 108); margin-right: 10px;\">\n        Kemaskini\n      </button>\n      <button (click)=\"hapus()\" style=\"height: 50px; width: 100px\">\n        Hapus\n      </button>\n    </div>\n\n    <div class=\"container3\">\n      <div class=\"jumlah\">\n        {{ 'akaun.jumlah' | translate }}\n      </div>\n      <div *ngIf=\"jumexist==true\" class=\"jumlahrm\">\n        RM {{jumlah}}\n      </div>\n      <div *ngIf=\"jumexist==false\" class=\"jumlahrm\">\n        RM 00.00\n      </div>\n      <div class=\"byrsblm\">\n        {{ 'home.byrsebelum' | translate }} <span style=\"color: #D23330;\">{{bayarsblm}}</span>\n      </div>\n      <div style=\"padding-top: 25px;\">\n        <table style=\"width: 100%;text-align: center;\">\n          <colgroup>\n            <col style=\"width: 50%;\">\n            <col style=\"width: 50%;\">\n          </colgroup>\n          <tr>\n            <td>\n              <div class=\"bilcard\">\n                <div class=\"bilinfo\">\n                  {{ 'akaun.semasa' | translate }}\n                </div>\n                <div class=\"bilval\">\n                  {{data.kadar_sewa}}\n                </div>\n              </div>\n            </td>\n            <td>\n              <div class=\"bilcard\">\n                <div class=\"bilinfo\">\n                  {{ 'akaun.tunggak' | translate }}\n                </div>\n                <div class=\"bilval\">\n                  {{data.jumlah_tunggakan}}\n                </div>\n              </div>\n            </td>\n          </tr>\n        </table>\n      </div>\n      <div style=\"padding-top: 25px;\">\n        <div class=\"boxgrey\">\n          <div class=\"tetapanword\">{{ 'akaun.maklumat' | translate }}</div>\n        </div>\n        <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\n          {{ 'akaun.nama' | translate }} <br>\n          <ion-input type=\"text\" class=\"input\" readonly [value]=\"data.nama_pemilik\"></ion-input>\n        </div>\n        <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\n          {{ 'akaun.bandar' | translate }} <br>\n          <ion-input type=\"text\" class=\"input\" readonly [value]=\"data.bandar\"></ion-input>\n        </div>\n        <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\n          {{ 'akaun.nokp2' | translate }} <br>\n          <ion-input type=\"text\" class=\"input\" readonly [value]=\"data.no_kad_pengenalan\"></ion-input>\n        </div>\n        <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\n          {{ 'akaun.norumah' | translate }} <br>\n          <ion-input type=\"text\" class=\"input\" readonly [value]=\"data.no_rumah\"></ion-input>\n        </div>\n        <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\n          {{ 'akaun.taman' | translate }} <br>\n          <ion-input type=\"text\" class=\"input\" readonly [value]=\"data.taman\"></ion-input>\n        </div>\n        <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\n          {{ 'akaun.kate' | translate }} <br>\n          <ion-input type=\"text\" class=\"input\" readonly [value]=\"data.kategori\"></ion-input>\n        </div>\n        <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\n          {{ 'akaun.kadarsewa' | translate }} <br>\n          <ion-input type=\"text\" class=\"input\" readonly [value]=\"data.kadar_sewa\"></ion-input>\n        </div>\n        <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\n          {{ 'akaun.jenisrumah' | translate }} <br>\n          <ion-input type=\"text\" class=\"input\" readonly [value]=\"data.jenis_rumah\"></ion-input>\n        </div>\n        <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\n          {{ 'akaun.tlhbayar' | translate }} <br>\n          <ion-input type=\"text\" class=\"input\" readonly [value]=\"data.jumlah_telah_bayar\"></ion-input>\n        </div>\n        <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\n          {{ 'akaun.pinjaman' | translate }} <br>\n          <ion-input type=\"text\" class=\"input\" readonly [value]=\"data.jumlah_pinjaman\"></ion-input>\n        </div>\n        <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\n          {{ 'akaun.tunggakan' | translate }} <br>\n          <ion-input type=\"text\" class=\"input\" readonly [value]=\"data.jumlah_tunggakan\"></ion-input>\n        </div>\n        <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\n          {{ 'akaun.mulaperjanjian' | translate }} <br>\n          <ion-input type=\"text\" class=\"input\" readonly [value]=\"data.tarikh_mula_perjanjian\"></ion-input>\n        </div>\n        <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\n          {{ 'akaun.tamatperjanjian' | translate }} <br>\n          <ion-input type=\"text\" class=\"input\" readonly [value]=\"data.tarikh_tamat_perjanjian\"></ion-input>\n        </div>\n        <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\n          {{ 'akaun.baki' | translate }} <br>\n          <ion-input type=\"text\" class=\"input\" readonly [value]=\"data.jumlah_baki\"></ion-input>\n        </div>\n        <div style=\"padding:60px 0px 20px 0px;text-align: center;\">\n          <button ion-button class=\"button\" (click)=\"bayar()\">{{ 'bayar' | translate }}(1)</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_akaun_maklumat_maklumat_module_ts.js.map