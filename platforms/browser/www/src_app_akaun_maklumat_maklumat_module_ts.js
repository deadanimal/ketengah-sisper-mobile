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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container2 {\n  padding-top: 50px;\n  padding: 50px 25px 20px 10px;\n  height: 180px;\n}\n\n.container3 {\n  padding: 40px 0px;\n  height: 700px;\n}\n\n.delete {\n  background-color: transparent !important;\n  display: flex;\n  align-items: right;\n  justify-content: right;\n}\n\n.jumlah {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: -0.165px;\n  color: #494949;\n  text-align: center;\n}\n\n.jumlahrm {\n  font-style: normal;\n  font-weight: 700;\n  font-size: 48px;\n  line-height: 72px;\n  letter-spacing: -0.165px;\n  color: #D23330;\n  text-align: center;\n}\n\n.byrsblm {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 123%;\n  text-align: center;\n  letter-spacing: -0.165px;\n  color: #3D2C7C;\n}\n\n.bilcard {\n  width: 138px;\n  height: 81px;\n  left: 63px;\n  top: 327px;\n  background: #FFFFFF;\n  border: 1px solid #F7FAFD;\n  box-shadow: 0px 4px 8px rgba(73, 87, 184, 0.2);\n  border-radius: 17px;\n  text-align: center;\n  padding-top: 20px;\n  display: inline-block;\n}\n\n.bilinfo {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 21px;\n  letter-spacing: -0.165px;\n  color: #494949;\n  text-align: center;\n}\n\n.bilval {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 21px;\n  letter-spacing: -0.165px;\n  color: #D23330;\n  text-align: center;\n}\n\n.boxwhite {\n  color: #3D2C7C;\n  padding: 25px 0px 0px 0px;\n  font-size: 16px;\n  width: 80%;\n  margin: auto;\n}\n\n.input {\n  color: black;\n  display: inline-block;\n  width: 100%;\n}\n\n.button {\n  background-color: #3D2C7C;\n  border: 1pt solid #3D2C7C;\n  height: 48px;\n  width: 70%;\n  border-radius: 10px;\n  margin: auto;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 21px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ha2x1bWF0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNFLHdDQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOENBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUNKIiwiZmlsZSI6Im1ha2x1bWF0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIyIHtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgcGFkZGluZzogNTBweCAyNXB4IDIwcHggMTBweDtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIzIHtcclxuICAgIHBhZGRpbmc6IDQwcHggMHB4O1xyXG4gICAgaGVpZ2h0OiA3MDBweDtcclxufVxyXG5cclxuLmRlbGV0ZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IHJpZ2h0O1xyXG4gIGp1c3RpZnktY29udGVudDogcmlnaHQ7XHJcbn1cclxuXHJcbi5qdW1sYWgge1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjE2NXB4O1xyXG4gICAgY29sb3I6ICM0OTQ5NDk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5qdW1sYWhybSB7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDcycHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMTY1cHg7XHJcbiAgICBjb2xvcjogI0QyMzMzMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJ5cnNibG0ge1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMjMlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjE2NXB4O1xyXG4gICAgY29sb3I6ICMzRDJDN0M7XHJcbn1cclxuXHJcbi5iaWxjYXJkIHtcclxuICAgIHdpZHRoOiAxMzhweDtcclxuICAgIGhlaWdodDogODFweDtcclxuICAgIGxlZnQ6IDYzcHg7XHJcbiAgICB0b3A6IDMyN3B4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGN0ZBRkQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDhweCByZ2JhKDczLCA4NywgMTg0LCAwLjIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTdweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uYmlsaW5mbyB7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMTY1cHg7XHJcbiAgICBjb2xvcjogIzQ5NDk0OTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJpbHZhbCB7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMTY1cHg7XHJcbiAgICBjb2xvcjogI0QyMzMzMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJveHdoaXRlIHtcclxuICAgIGNvbG9yOiAjM0QyQzdDO1xyXG4gICAgcGFkZGluZzogMjVweCAwcHggMHB4IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46YXV0bztcclxufVxyXG5cclxuLmlucHV0IHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRDJDN0M7XHJcbiAgICBib3JkZXI6IDFwdCBzb2xpZCAjM0QyQzdDO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxufVxyXG5cclxuXHJcbiJdfQ== */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"main\">\r\n    <div class=\"container2\">\r\n      <div class=\"header\">\r\n        <ion-icon name=\"chevron-back-outline\" style=\"float: left;\" (click)=\"back()\"></ion-icon>\r\n        <span class=\"headertxt\" style=\"width:70%;margin: auto;display: inline-block;\">{{ 'akaun.maklumat' | translate\r\n          }}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"main2\">\r\n    <div class=\"delete\">\r\n      <button style=\"height: 50px; width: 100px; background-color: rgb(108, 31, 108); margin-right: 10px;\">\r\n        Kemaskini\r\n      </button>\r\n      <button (click)=\"hapus()\" style=\"height: 50px; width: 100px\">\r\n        Hapus\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"container3\">\r\n      <div class=\"jumlah\">\r\n        {{ 'akaun.jumlah' | translate }}\r\n      </div>\r\n      <div *ngIf=\"jumexist==true\" class=\"jumlahrm\">\r\n        RM {{jumlah}}\r\n      </div>\r\n      <div *ngIf=\"jumexist==false\" class=\"jumlahrm\">\r\n        RM 00.00\r\n      </div>\r\n      <div class=\"byrsblm\">\r\n        {{ 'home.byrsebelum' | translate }} <span style=\"color: #D23330;\">{{bayarsblm}}</span>\r\n      </div>\r\n      <div style=\"padding-top: 25px;\">\r\n        <table style=\"width: 100%;text-align: center;\">\r\n          <colgroup>\r\n            <col style=\"width: 50%;\">\r\n            <col style=\"width: 50%;\">\r\n          </colgroup>\r\n          <tr>\r\n            <td>\r\n              <div class=\"bilcard\">\r\n                <div class=\"bilinfo\">\r\n                  {{ 'akaun.semasa' | translate }}\r\n                </div>\r\n                <div class=\"bilval\">\r\n                  {{data.kadar_sewa}}\r\n                </div>\r\n              </div>\r\n            </td>\r\n            <td>\r\n              <div class=\"bilcard\">\r\n                <div class=\"bilinfo\">\r\n                  {{ 'akaun.tunggak' | translate }}\r\n                </div>\r\n                <div class=\"bilval\">\r\n                  {{data.jumlah_tunggakan}}\r\n                </div>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n      <div style=\"padding-top: 25px;\">\r\n        <div class=\"boxgrey\">\r\n          <div class=\"tetapanword\">{{ 'akaun.maklumat' | translate }}</div>\r\n        </div>\r\n        <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\r\n          {{ 'akaun.nama' | translate }} <br>\r\n          <ion-input type=\"text\" class=\"input\" readonly [value]=\"data.nama_pemilik\"></ion-input>\r\n        </div>\r\n        <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\r\n          {{ 'akaun.bandar' | translate }} <br>\r\n          <ion-input type=\"text\" class=\"input\" readonly [value]=\"data.bandar\"></ion-input>\r\n        </div>\r\n        <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\r\n          {{ 'akaun.nokp2' | translate }} <br>\r\n          <ion-input type=\"text\" class=\"input\" readonly [value]=\"data.no_kad_pengenalan\"></ion-input>\r\n        </div>\r\n        <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\r\n          {{ 'akaun.norumah' | translate }} <br>\r\n          <ion-input type=\"text\" class=\"input\" readonly [value]=\"data.no_rumah\"></ion-input>\r\n        </div>\r\n        <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\r\n          {{ 'akaun.taman' | translate }} <br>\r\n          <ion-input type=\"text\" class=\"input\" readonly [value]=\"data.taman\"></ion-input>\r\n        </div>\r\n        <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\r\n          {{ 'akaun.kate' | translate }} <br>\r\n          <ion-input type=\"text\" class=\"input\" readonly [value]=\"data.kategori\"></ion-input>\r\n        </div>\r\n        <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\r\n          {{ 'akaun.kadarsewa' | translate }} <br>\r\n          <ion-input type=\"text\" class=\"input\" readonly [value]=\"data.kadar_sewa\"></ion-input>\r\n        </div>\r\n        <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\r\n          {{ 'akaun.jenisrumah' | translate }} <br>\r\n          <ion-input type=\"text\" class=\"input\" readonly [value]=\"data.jenis_rumah\"></ion-input>\r\n        </div>\r\n        <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\r\n          {{ 'akaun.tlhbayar' | translate }} <br>\r\n          <ion-input type=\"text\" class=\"input\" readonly [value]=\"data.jumlah_telah_bayar\"></ion-input>\r\n        </div>\r\n        <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\r\n          {{ 'akaun.pinjaman' | translate }} <br>\r\n          <ion-input type=\"text\" class=\"input\" readonly [value]=\"data.jumlah_pinjaman\"></ion-input>\r\n        </div>\r\n        <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\r\n          {{ 'akaun.tunggakan' | translate }} <br>\r\n          <ion-input type=\"text\" class=\"input\" readonly [value]=\"data.jumlah_tunggakan\"></ion-input>\r\n        </div>\r\n        <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\r\n          {{ 'akaun.mulaperjanjian' | translate }} <br>\r\n          <ion-input type=\"text\" class=\"input\" readonly [value]=\"data.tarikh_mula_perjanjian\"></ion-input>\r\n        </div>\r\n        <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\r\n          {{ 'akaun.tamatperjanjian' | translate }} <br>\r\n          <ion-input type=\"text\" class=\"input\" readonly [value]=\"data.tarikh_tamat_perjanjian\"></ion-input>\r\n        </div>\r\n        <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\r\n          {{ 'akaun.baki' | translate }} <br>\r\n          <ion-input type=\"text\" class=\"input\" readonly [value]=\"data.jumlah_baki\"></ion-input>\r\n        </div>\r\n        <div style=\"padding:60px 0px 20px 0px;text-align: center;\">\r\n          <button ion-button class=\"button\" (click)=\"bayar()\">{{ 'bayar' | translate }}(1)</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_akaun_maklumat_maklumat_module_ts.js.map