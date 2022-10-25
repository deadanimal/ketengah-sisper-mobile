(self["webpackChunkkkr_pothole"] = self["webpackChunkkkr_pothole"] || []).push([["src_app_bayarsewa_bayarsewa_module_ts"],{

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
/* harmony import */ var _bayarsewa_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bayarsewa.page.scss */ 45933);
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

/***/ 45933:
/*!***********************************************!*\
  !*** ./src/app/bayarsewa/bayarsewa.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container2 {\n  padding-top: 30px;\n  height: 650px;\n}\n\n.headerbox {\n  padding: 0px 40px 30px 40px;\n}\n\n.label {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 19px;\n  line-height: 28px;\n  color: #3D2C7C;\n  padding-bottom: 10px;\n}\n\n.cardaduan2 {\n  background: #FFFFFF;\n  border: 1px solid #F7FAFD;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 8px rgba(73, 87, 184, 0.2);\n  border-radius: 10px;\n  width: 100%;\n  height: 170px;\n  display: inline-block;\n  padding: 10px 20px;\n}\n\n.cardhead {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 15px;\n  line-height: 22px;\n  letter-spacing: -0.165px;\n  color: #3D2C7C;\n  padding: 5px 0px;\n}\n\n.carddetail {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 21px;\n  letter-spacing: -0.165px;\n  color: #494949;\n  padding: 5px 0px;\n}\n\n.cardadd {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 18px;\n  letter-spacing: -0.165px;\n  color: #494949;\n  padding: 0px 0px 5px 0px;\n}\n\n.jum {\n  font-style: normal;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 27px;\n  letter-spacing: -0.165px;\n  color: #D23330;\n  background-color: #FFFFFF;\n  border: none;\n}\n\n.check {\n  --background: #C5C4C4;\n  --background-checked: #009640;\n  opacity: 1;\n}\n\n.total {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 21px;\n  letter-spacing: -0.165px;\n  color: #494949;\n}\n\n.button {\n  background-color: #3D2C7C;\n  height: 48px;\n  width: 100%;\n  border-radius: 10px;\n  margin: auto;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 21px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJheWFyc2V3YS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDSiIsImZpbGUiOiJiYXlhcnNld2EucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcjIge1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIGhlaWdodDogNjUwcHg7XG59XG5cbi5oZWFkZXJib3gge1xuICAgIHBhZGRpbmc6IDBweCA0MHB4IDMwcHggNDBweDtcbn1cblxuLmxhYmVsIHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgY29sb3I6ICMzRDJDN0M7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5jYXJkYWR1YW4yIHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGN0ZBRkQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDhweCByZ2JhKDczLCA4NywgMTg0LCAwLjIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxNzBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuXG4uY2FyZGhlYWQge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMTY1cHg7XG4gICAgY29sb3I6ICMzRDJDN0M7XG4gICAgcGFkZGluZzogNXB4IDBweDtcbn1cblxuLmNhcmRkZXRhaWwge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMjFweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMTY1cHg7XG4gICAgY29sb3I6ICM0OTQ5NDk7XG4gICAgcGFkZGluZzogNXB4IDBweDtcbn1cblxuLmNhcmRhZGQge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMTY1cHg7XG4gICAgY29sb3I6ICM0OTQ5NDk7XG4gICAgcGFkZGluZzogMHB4IDBweCA1cHggMHB4O1xufVxuXG4uanVtIHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjE2NXB4O1xuICAgIGNvbG9yOiAjRDIzMzMwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4uY2hlY2sge1xuICAgIC0tYmFja2dyb3VuZDogI0M1QzRDNDtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzAwOTY0MDtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4udG90YWwge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMjFweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMTY1cHg7XG4gICAgY29sb3I6ICM0OTQ5NDk7XG59XG5cbi5idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRDJDN0M7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luOmF1dG87XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xufSJdfQ== */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"main\">\n    <div class=\"container\">\n      <div class=\"header\">\n        <ion-icon name=\"chevron-back-outline\" style=\"float: left;\" (click)=\"back()\"></ion-icon>\n        <span class=\"headertxt\">{{ 'sewa.bayarsewa' | translate }}</span>\n      </div>\n      <div style=\"padding-top: 40px;\">\n        <ion-img src=\"../../assets/icon/sewa.png\" class=\"icontetapan\"></ion-img>\n      </div>\n    </div>\n  </div>\n  <div class=\"main2\">\n    <div class=\"container2\">\n      <div class=\"headerbox\">\n        <div class=\"label\">{{ 'sewa.pilihakaun' | translate }}</div>\n        <div style=\"height: 20px;\"></div>\n        <div *ngFor=\"let item of AkaunList\">\n          <div class=\"cardaduan2\">\n              <div class=\"cardhead\" *ngIf=\"item.no_akaun_rumah != ''\">{{item.no_akaun_rumah}}</div>\n              <div class=\"cardhead\" *ngIf=\"item.no_akaun_premis != ''\">{{item.no_akaun_premis}}</div>\n              <div class=\"cardadd\">{{item.taman}} {{item.bandar}}</div>\n              <div class=\"carddetail\">{{ 'sewa.jumlah' | translate }} (RM)</div>\n              <div><div class=\"jum\" style=\"width:70%;border-bottom: 1pt solid black;display: inline-block;\">\n                <ion-input type=\"number\" class=\"jum\" [(ngModel)]=\"item.jumlahbyr\" (change)='changejumlah()'></ion-input>\n              </div>\n              <div style=\"width:30%;display: inline-block;text-align: right;\"><ion-checkbox class=\"check\" [(ngModel)]=\"item.check\" (click)=\"check(item)\"></ion-checkbox></div></div>\n          </div>\n          <div style=\"height: 20px;\"></div>\n        </div>\n        <div style=\"height: 20px;\"></div>\n        <div class=\"total\" style=\"display: inline-block; width: 80%;\">\n          {{'sewa.jumkeseluruhan' | translate}} (RM)\n        </div>\n        <div class=\"jum\" style=\"display: inline-block; width: 20%;\">{{jumlah}}</div>\n        <div style=\"height: 20px;\"></div>\n        <button class=\"button\" (click)=\"bayar();\">{{'sewa.bayar' | translate}} ({{jumcount}})</button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_bayarsewa_bayarsewa_module_ts.js.map