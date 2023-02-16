(self["webpackChunkSisper"] = self["webpackChunkSisper"] || []).push([["src_app_bayarsewa_bayarsewa_module_ts"],{

/***/ 26256:
/*!*******************************************************!*\
  !*** ./src/app/bayarsewa/bayarsewa-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BayarsewaPageRoutingModule": () => (/* binding */ BayarsewaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _bayarsewa_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bayarsewa.page */ 75394);




const routes = [
    {
        path: '',
        component: _bayarsewa_page__WEBPACK_IMPORTED_MODULE_0__.BayarsewaPage
    }
];
let BayarsewaPageRoutingModule = class BayarsewaPageRoutingModule {
};
BayarsewaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BayarsewaPageRoutingModule);



/***/ }),

/***/ 94934:
/*!***********************************************!*\
  !*** ./src/app/bayarsewa/bayarsewa.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "BayarsewaPageModule": () => (/* binding */ BayarsewaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _bayarsewa_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bayarsewa-routing.module */ 26256);
/* harmony import */ var _bayarsewa_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bayarsewa.page */ 75394);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 84236);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 40830);










function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let BayarsewaPageModule = class BayarsewaPageModule {
};
BayarsewaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _bayarsewa_routing_module__WEBPACK_IMPORTED_MODULE_0__.BayarsewaPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient]
                }
            })
        ],
        declarations: [_bayarsewa_page__WEBPACK_IMPORTED_MODULE_1__.BayarsewaPage]
    })
], BayarsewaPageModule);



/***/ }),

/***/ 75394:
/*!*********************************************!*\
  !*** ./src/app/bayarsewa/bayarsewa.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BayarsewaPage": () => (/* binding */ BayarsewaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_bayarsewa_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./bayarsewa.page.html */ 86068);
/* harmony import */ var _bayarsewa_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bayarsewa.page.scss */ 3030);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/native-storage/ngx */ 34113);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);








let BayarsewaPage = class BayarsewaPage {
    constructor(location, loadingController, nativeStorage, router) {
        this.location = location;
        this.loadingController = loadingController;
        this.nativeStorage = nativeStorage;
        this.router = router;
        this.AkaunList = [];
        this.jumlah = 0;
        this.jumcount = 0;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            this.AkaunList = [];
            this.jumlah = 0;
            this.jumcount = 0;
            yield this.nativeStorage.getItem('user').then(data => {
                this.user = data.value;
                this.user.perumahan.forEach(element => {
                    element.check = true;
                    this.AkaunList.push(element);
                    this.jumcount = this.jumcount + 1;
                    this.jumlah = element.jumlahbyr + this.jumlah;
                });
                this.user.premis.forEach(element => {
                    element.check = true;
                    this.AkaunList.push(element);
                    this.jumcount = this.jumcount + 1;
                    this.jumlah = element.jumlahbyr + this.jumlah;
                });
                console.log(this.AkaunList);
            }, error => console.error(error));
            yield loading.dismiss();
        });
    }
    back() {
        this.location.back();
    }
    bayar() {
        var arr = [];
        var akaun = {};
        this.AkaunList.forEach(element => {
            if (element.check == true) {
                if (element.no_akaun_rumah != undefined) {
                    akaun = {
                        "jenis": 'rumah',
                        "id": element.id,
                        "noakaun": element.no_akaun_rumah,
                        "amaun": element.jumlahbyr,
                        "no_ic_pemilik": element.no_kad_pengenalan
                    };
                }
                else if (element.no_akaun_premis != undefined) {
                    akaun = {
                        "jenis": 'premis',
                        "id": element.id,
                        "noakaun": element.no_akaun_premis,
                        "amaun": element.jumlahbyr,
                        "no_ic_pemilik": element.no_kad_pengenalan
                    };
                }
                arr.push(akaun);
            }
        });
        var data = {
            "src": 1,
            "jumlah": this.jumlah,
            "jumcount": this.jumcount,
            "akaun": arr
        };
        let navigationExtras = {
            state: {
                data: data
            }
        };
        this.router.navigate(['main/tabs/bayaran'], navigationExtras);
    }
    check(data) {
        if (data.check == true) {
            this.jumcount = this.jumcount - 1;
            this.jumlah = this.jumlah - data.jumlahbyr;
        }
        else if (data.check == false) {
            this.jumcount = this.jumcount + 1;
            this.jumlah = this.jumlah + data.jumlahbyr;
        }
        console.log(data.check);
    }
    changejumlah() {
        this.jumlah = 0;
        this.AkaunList.forEach(element => {
            if (element.check == true) {
                this.jumlah = this.jumlah + element.jumlahbyr;
            }
        });
        console.log(this.jumlah);
    }
};
BayarsewaPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__.NativeStorage },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
BayarsewaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-bayarsewa',
        template: _raw_loader_bayarsewa_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_bayarsewa_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BayarsewaPage);



/***/ }),

/***/ 3030:
/*!***********************************************!*\
  !*** ./src/app/bayarsewa/bayarsewa.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container2 {\n  padding-top: 30px;\n  height: 650px;\n}\n\n.headerbox {\n  padding: 0px 40px 30px 40px;\n}\n\n.label {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 19px;\n  line-height: 28px;\n  color: #3D2C7C;\n  padding-bottom: 10px;\n}\n\n.cardaduan2 {\n  background: #FFFFFF;\n  border: 1px solid #F7FAFD;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 8px rgba(73, 87, 184, 0.2);\n  border-radius: 10px;\n  width: 100%;\n  height: 170px;\n  display: inline-block;\n  padding: 10px 20px;\n}\n\n.cardhead {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 15px;\n  line-height: 22px;\n  letter-spacing: -0.165px;\n  color: #3D2C7C;\n  padding: 5px 0px;\n}\n\n.carddetail {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 21px;\n  letter-spacing: -0.165px;\n  color: #494949;\n  padding: 5px 0px;\n}\n\n.cardadd {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 18px;\n  letter-spacing: -0.165px;\n  color: #494949;\n  padding: 0px 0px 5px 0px;\n}\n\n.jum {\n  font-style: normal;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 27px;\n  letter-spacing: -0.165px;\n  color: #D23330;\n  background-color: #FFFFFF;\n  border: none;\n}\n\n.check {\n  --background: #C5C4C4;\n  --background-checked: #009640;\n  opacity: 1;\n}\n\n.total {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 21px;\n  letter-spacing: -0.165px;\n  color: #494949;\n}\n\n.button {\n  background-color: #3D2C7C;\n  height: 48px;\n  width: 100%;\n  border-radius: 10px;\n  margin: auto;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 21px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJheWFyc2V3YS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDSiIsImZpbGUiOiJiYXlhcnNld2EucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcjIge1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDY1MHB4O1xyXG59XHJcblxyXG4uaGVhZGVyYm94IHtcclxuICAgIHBhZGRpbmc6IDBweCA0MHB4IDMwcHggNDBweDtcclxufVxyXG5cclxuLmxhYmVsIHtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIGNvbG9yOiAjM0QyQzdDO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5jYXJkYWR1YW4yIHtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRjdGQUZEO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYmEoNzMsIDg3LCAxODQsIDAuMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE3MHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG59XHJcblxyXG4uY2FyZGhlYWQge1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjE2NXB4O1xyXG4gICAgY29sb3I6ICMzRDJDN0M7XHJcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xyXG59XHJcblxyXG4uY2FyZGRldGFpbCB7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMTY1cHg7XHJcbiAgICBjb2xvcjogIzQ5NDk0OTtcclxuICAgIHBhZGRpbmc6IDVweCAwcHg7XHJcbn1cclxuXHJcbi5jYXJkYWRkIHtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4xNjVweDtcclxuICAgIGNvbG9yOiAjNDk0OTQ5O1xyXG4gICAgcGFkZGluZzogMHB4IDBweCA1cHggMHB4O1xyXG59XHJcblxyXG4uanVtIHtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjdweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4xNjVweDtcclxuICAgIGNvbG9yOiAjRDIzMzMwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmNoZWNrIHtcclxuICAgIC0tYmFja2dyb3VuZDogI0M1QzRDNDtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjMDA5NjQwO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLnRvdGFsIHtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4xNjVweDtcclxuICAgIGNvbG9yOiAjNDk0OTQ5O1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRDJDN0M7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxufSJdfQ== */");

/***/ }),

/***/ 86068:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bayarsewa/bayarsewa.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"main\">\r\n    <div class=\"container\">\r\n      <div class=\"header\">\r\n        <ion-icon name=\"chevron-back-outline\" style=\"float: left;\" (click)=\"back()\"></ion-icon>\r\n        <span class=\"headertxt\">{{ 'sewa.bayarsewa' | translate }}</span>\r\n      </div>\r\n      <div style=\"padding-top: 40px;\">\r\n        <ion-img src=\"../../assets/icon/sewa.png\" class=\"icontetapan\"></ion-img>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"main2\">\r\n    <div class=\"container2\">\r\n      <div class=\"headerbox\">\r\n        <div class=\"label\">{{ 'sewa.pilihakaun' | translate }}</div>\r\n        <div style=\"height: 20px;\"></div>\r\n        <div *ngFor=\"let item of AkaunList\">\r\n          <div class=\"cardaduan2\">\r\n              <div class=\"cardhead\" *ngIf=\"item.no_akaun_rumah != ''\">{{item.no_akaun_rumah}}</div>\r\n              <div class=\"cardhead\" *ngIf=\"item.no_akaun_premis != ''\">{{item.no_akaun_premis}}</div>\r\n              <div class=\"cardadd\">{{item.taman}} {{item.bandar}}</div>\r\n              <div class=\"carddetail\">{{ 'sewa.jumlah' | translate }} (RM)</div>\r\n              <div><div class=\"jum\" style=\"width:70%;border-bottom: 1pt solid black;display: inline-block;\">\r\n                <ion-input type=\"number\" class=\"jum\" [(ngModel)]=\"item.jumlahbyr\" (change)='changejumlah()'></ion-input>\r\n              </div>\r\n              <div style=\"width:30%;display: inline-block;text-align: right;\"><ion-checkbox class=\"check\" [(ngModel)]=\"item.check\" (click)=\"check(item)\"></ion-checkbox></div></div>\r\n          </div>\r\n          <div style=\"height: 20px;\"></div>\r\n        </div>\r\n        <div style=\"height: 20px;\"></div>\r\n        <div class=\"total\" style=\"display: inline-block; width: 80%;\">\r\n          {{'sewa.jumkeseluruhan' | translate}} (RM)\r\n        </div>\r\n        <div class=\"jum\" style=\"display: inline-block; width: 20%;\">{{jumlah}}</div>\r\n        <div style=\"height: 20px;\"></div>\r\n        <button class=\"button\" (click)=\"bayar();\">{{'sewa.bayar' | translate}} ({{jumcount}})</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_bayarsewa_bayarsewa_module_ts.js.map