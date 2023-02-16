(self["webpackChunkSisper"] = self["webpackChunkSisper"] || []).push([["src_app_lain-lain_lain-lain_module_ts"],{

/***/ 33772:
/*!*******************************************************!*\
  !*** ./src/app/lain-lain/lain-lain-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LainLainPageRoutingModule": () => (/* binding */ LainLainPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _lain_lain_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lain-lain.page */ 58362);




const routes = [
    {
        path: '',
        component: _lain_lain_page__WEBPACK_IMPORTED_MODULE_0__.LainLainPage
    }
];
let LainLainPageRoutingModule = class LainLainPageRoutingModule {
};
LainLainPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LainLainPageRoutingModule);



/***/ }),

/***/ 84785:
/*!***********************************************!*\
  !*** ./src/app/lain-lain/lain-lain.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "LainLainPageModule": () => (/* binding */ LainLainPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _lain_lain_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lain-lain-routing.module */ 33772);
/* harmony import */ var _lain_lain_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lain-lain.page */ 58362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 84236);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 40830);










function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let LainLainPageModule = class LainLainPageModule {
};
LainLainPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _lain_lain_routing_module__WEBPACK_IMPORTED_MODULE_0__.LainLainPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient]
                }
            }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_lain_lain_page__WEBPACK_IMPORTED_MODULE_1__.LainLainPage]
    })
], LainLainPageModule);



/***/ }),

/***/ 58362:
/*!*********************************************!*\
  !*** ./src/app/lain-lain/lain-lain.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LainLainPage": () => (/* binding */ LainLainPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_lain_lain_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./lain-lain.page.html */ 85458);
/* harmony import */ var _lain_lain_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lain-lain.page.scss */ 76104);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _shared_services_lain_lain_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/lain/lain.service */ 62803);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/native-storage/ngx */ 34113);










let LainLainPage = class LainLainPage {
    constructor(location, fb, loadingController, alertController, lainService, router, nativeStorage) {
        this.location = location;
        this.fb = fb;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.lainService = lainService;
        this.router = router;
        this.nativeStorage = nativeStorage;
        this.showDetails = false;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            yield this.nativeStorage.getItem('user').then(data => {
                this.user = data.value;
            }, error => console.error(error));
            yield this.lainService.getdd().subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                console.log(res);
                this.ddUrusan = res;
                yield loading.dismiss();
            }), (res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                console.log(res);
                yield loading.dismiss();
                const alert = yield this.alertController.create({
                    header: 'Loading failed',
                    message: res.message,
                    buttons: ['OK'],
                });
                yield alert.present();
            }));
        });
    }
    ionViewWillEnter() {
        this.lainform = this.fb.group({
            kod_urusan: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            urusan: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(4)]],
            jumlah_bayar: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]]
        });
    }
    back() {
        this.location.back();
    }
    hantar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            var arr = [];
            var akaun = {};
            yield this.lainService.add(this.lainform.value).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                console.log(res);
                this.jumlah = res.jumlah_bayar;
                akaun = {
                    "id": res.id,
                    "amaun": this.jumlah,
                    "kodbayaran": 'LL' + res.kod_urusan,
                };
                arr.push(akaun);
                var data = {
                    "src": 2,
                    "jumlah": this.jumlah,
                    "jumcount": 1,
                    "akaun": arr
                };
                let navigationExtras = {
                    state: {
                        data: data
                    }
                };
                yield loading.dismiss();
                this.router.navigate(['main/tabs/bayaran'], navigationExtras);
            }), (res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                console.log(res);
                yield loading.dismiss();
                const alert = yield this.alertController.create({
                    header: 'Loading failed',
                    message: res.message,
                    buttons: ['OK'],
                });
                yield alert.present();
            }));
        });
    }
    Check(val) {
        if (val.target.value === 8) {
            this.showDetails = true;
        }
        else {
            this.showDetails = false;
        }
        console.log("the value is " + val.target.value);
        console.log(this.user.tender);
        if (val.detail.value == 8) {
            if (this.user.tender == 0) {
                this.router.navigate(['main/tabs/tender']);
            }
            else if (this.user.tender == 1) {
                this.router.navigate(['main/tabs/tender/tenderDetail']);
            }
        }
    }
    send() {
        this.router.navigateByUrl('sebutharga');
    }
};
LainLainPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _shared_services_lain_lain_service__WEBPACK_IMPORTED_MODULE_2__.LainService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__.NativeStorage }
];
LainLainPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-lain-lain',
        template: _raw_loader_lain_lain_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_lain_lain_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LainLainPage);



/***/ }),

/***/ 76104:
/*!***********************************************!*\
  !*** ./src/app/lain-lain/lain-lain.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container2 {\n  padding-top: 50px;\n  height: 650px;\n  text-align: left;\n}\n\n.selects {\n  width: 100%;\n  height: 45px;\n  background: #FFFFFF;\n  border: 1px solid #3D2C7C;\n  box-sizing: border-box;\n  border-radius: 9px;\n  --placeholder-color:#494949 !important;\n  box-shadow: inset -4px -4px 9px rgba(255, 255, 255, 0.6), inset 4px 4px 14px #C5D7EE;\n  padding: 0px 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: left;\n  color: black;\n}\n\n.cardaduan {\n  background: #FFFFFF;\n  border: 1px solid #F7FAFD;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 8px rgba(73, 87, 184, 0.2);\n  border-radius: 10px;\n  width: 143px;\n  height: 171px;\n  margin: auto;\n  display: inline-block;\n  padding: 30px 10px;\n}\n\n.cardicon {\n  width: 64px;\n  height: 64px;\n  margin: auto;\n}\n\n.headerbox {\n  padding: 0px 20px 0px 20px;\n}\n\n.select {\n  width: 100%;\n  background: #FFFFFF;\n  border: 1px solid #3D2C7C;\n  box-sizing: border-box;\n  border-radius: 9px;\n  --placeholder-color:#494949;\n}\n\n.label1 {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #494949;\n}\n\n.descbox {\n  padding: 40px 60px 40px 60px;\n}\n\n.textarea {\n  width: 90%;\n  background: #FFFFFF;\n  border: 1px solid #3D2C7C;\n  box-shadow: inset -4px -4px 9px rgba(255, 255, 255, 0.6), inset 4px 4px 14px #C5D7EE;\n  border-radius: 9px;\n  padding: 20px;\n  color: black;\n}\n\n.button {\n  background-color: #3D2C7C;\n  height: 48px;\n  width: 100%;\n  border-radius: 10px;\n  margin: auto;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 21px;\n}\n\n.container2 {\n  padding-top: 50px;\n  height: 650px;\n}\n\n.headerbox {\n  padding: 0px 20px 0px 20px;\n}\n\n.select {\n  width: 100%;\n  background: #FFFFFF;\n  border: 1px solid #3D2C7C;\n  box-sizing: border-box;\n  border-radius: 9px;\n  --placeholder-color:#494949;\n}\n\n.label {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #494949;\n}\n\n.descbox {\n  padding: 40px 60px 40px 60px;\n}\n\n.textarea {\n  width: 100%;\n  background: #FFFFFF;\n  border: 1px solid #3D2C7C;\n  box-shadow: inset -4px -4px 9px rgba(255, 255, 255, 0.6), inset 4px 4px 14px #C5D7EE;\n  border-radius: 9px;\n  padding: 20px;\n  color: black;\n}\n\n.bgbulat {\n  border-radius: 50%;\n  width: 40px !important;\n  background: #EAE4FF;\n}\n\n.bayaran {\n  outline: 0;\n  border-width: 0 0 2px;\n  color: #D23330;\n  width: 100%;\n  background: #FFFFFF;\n  font-size: 30px;\n  font-weight: 800;\n}\n\n.bayaran::placeholder {\n  color: #D23330;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhaW4tbGFpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0Esb0ZBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSwwQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFHQTtFQUNFLDRCQUFBO0FBQUY7O0FBR0E7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG9GQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBR0E7RUFDRSw0QkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxvRkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUlBO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtBQURGIiwiZmlsZSI6ImxhaW4tbGFpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyMiB7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgaGVpZ2h0OiA2NTBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uc2VsZWN0cyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzNEMkM3QztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiM0OTQ5NDkgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiBpbnNldCAtNHB4IC00cHggOXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSwgaW5zZXQgNHB4IDRweCAxNHB4ICNDNUQ3RUU7XHJcbiAgcGFkZGluZzogMHB4IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uY2FyZGFkdWFuIHtcclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNGN0ZBRkQ7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3gtc2hhZG93OiAwcHggNHB4IDhweCByZ2JhKDczLCA4NywgMTg0LCAwLjIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgd2lkdGg6IDE0M3B4O1xyXG4gIGhlaWdodDogMTcxcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAzMHB4IDEwcHg7XHJcbn1cclxuXHJcbi5jYXJkaWNvbiB7XHJcbiAgd2lkdGg6IDY0cHg7XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmhlYWRlcmJveCB7XHJcbiAgcGFkZGluZzogMHB4IDIwcHggMHB4IDIwcHg7XHJcbn1cclxuXHJcbi5zZWxlY3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzNEMkM3QztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiM0OTQ5NDk7XHJcbn1cclxuXHJcbi5sYWJlbDEge1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGNvbG9yOiAjNDk0OTQ5O1xyXG59XHJcblxyXG5cclxuLmRlc2Nib3gge1xyXG4gIHBhZGRpbmc6IDQwcHggNjBweCA0MHB4IDYwcHg7XHJcbn1cclxuXHJcbi50ZXh0YXJlYSB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzRDJDN0M7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgLTRweCAtNHB4IDlweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiksIGluc2V0IDRweCA0cHggMTRweCAjQzVEN0VFO1xyXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICBwYWRkaW5nOjIwcHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0QyQzdDO1xyXG4gIGhlaWdodDogNDhweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbjphdXRvO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMjFweDtcclxufVxyXG4uY29udGFpbmVyMiB7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgaGVpZ2h0OiA2NTBweDtcclxufVxyXG5cclxuLmhlYWRlcmJveCB7XHJcbiAgcGFkZGluZzogMHB4IDIwcHggMHB4IDIwcHg7XHJcbn1cclxuXHJcbi5zZWxlY3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzNEMkM3QztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiM0OTQ5NDk7XHJcbn1cclxuXHJcbi5sYWJlbCB7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgY29sb3I6ICM0OTQ5NDk7XHJcbiAgLy8gcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4uZGVzY2JveCB7XHJcbiAgcGFkZGluZzogNDBweCA2MHB4IDQwcHggNjBweDtcclxufVxyXG5cclxuLnRleHRhcmVhIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzRDJDN0M7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgLTRweCAtNHB4IDlweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiksIGluc2V0IDRweCA0cHggMTRweCAjQzVEN0VFO1xyXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICBwYWRkaW5nOjIwcHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uYmdidWxhdCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogI0VBRTRGRjtcclxuICAvLyBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgLy8gd2lkdGg6IDYwJTtcclxufVxyXG4uYmF5YXJhbiB7XHJcbiAgb3V0bGluZTogMDtcclxuICBib3JkZXItd2lkdGg6IDAgMCAycHg7XHJcbiAgY29sb3I6ICNEMjMzMzA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuLmJheWFyYW46OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogI0QyMzMzMDtcclxufVxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ 85458:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lain-lain/lain-lain.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"main\">\r\n    <div class=\"container\">\r\n      <div class=\"header\">\r\n        <ion-icon name=\"chevron-back-outline\" style=\"float: left;\" (click)=\"back()\"></ion-icon>\r\n        <span class=\"headertxt\">{{ 'lain.lain' | translate }}</span>\r\n      </div>\r\n      <div style=\"padding-top: 40px;\">\r\n        <ion-img src=\"../../assets/icon/lain.png\" class=\"icontetapan \"></ion-img>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"main2\">\r\n    <div class=\"container2\">\r\n      <div class=\"headerbox\">\r\n        <div class=\"descbox\">\r\n          <form *ngIf=\"lainform\" [formGroup]=\"lainform\">\r\n            <div class=\"label\">{{ 'lain.urusan' | translate }}</div>\r\n            <div style=\"height: 10px;\"></div>\r\n            <ion-select okText=\"{{ 'semak.ok' | translate }}\" cancelText=\"{{ 'semak.cancel' | translate }}\"\r\n              class=\"select\" formControlName=\"kod_urusan\" (ionChange)=\"Check($event);\">\r\n              <ion-select-option *ngFor=\"let urusan of ddUrusan; let i = index\" [value]=\"urusan.id\">\r\n                {{urusan.urusan}}\r\n              </ion-select-option>\r\n            </ion-select>\r\n            <div *ngIf=\"!showDetails\">\r\n              <div style=\"height: 30px;\"></div>\r\n              <div class=\"label1\">{{ 'lain.catatan' | translate }}</div>\r\n              <div style=\"height: 10px;\"></div>\r\n              <textarea class=\"textarea\" rows=\"7\" cols=\"50\" formControlName=\"urusan\"></textarea>\r\n              <div style=\"height: 30px;\"></div>\r\n              <div class=\"label1\">{{ 'lain.jumlah' | translate }} (RM)</div>\r\n              <div style=\"height: 10px;\"></div>\r\n              <input type=\"number\" class=\"bayaran\" placeholder=\"00.00\" formControlName=\"jumlah_bayar\">\r\n              <div style=\"height: 30px;\"></div>\r\n              <button ion-button class=\"button\" (click)=\"hantar()\">{{ 'bayar' | translate }}</button>\r\n            </div>\r\n\r\n            <div *ngIf=\"showDetails\">\r\n              <div style=\"height: 30px;\"></div>\r\n              <div class=\"label1\">Nama Syankat /Pembali</div>\r\n              <input type=\"text\" class=\"selects\">\r\n\r\n              <div style=\"height: 30px;\"></div>\r\n              <div class=\"label1\">Nombor something byankat</div>\r\n              <input type=\"text\" class=\"selects\">\r\n\r\n              <div style=\"height: 30px;\"></div>\r\n              <div class=\"label1\">Alamat</div>\r\n              <input type=\"text\" class=\"selects\">\r\n\r\n              <div style=\"height: 30px;\"></div>\r\n              <div class=\"label1\">Poskod</div>\r\n              <input type=\"number\" class=\"selects\">\r\n\r\n              <div style=\"height: 30px;\"></div>\r\n              <div class=\"label1\">Bandar</div>\r\n              <input type=\"text\" class=\"selects\">\r\n\r\n              <div style=\"height: 30px;\"></div>\r\n              <div class=\"label1\">Negeri</div>\r\n              <input type=\"text\" class=\"selects\">\r\n\r\n              <div style=\"height: 30px;\"></div>\r\n              <button ion-button class=\"button\" (click)=\"send()\">{{ 'hantar' | translate }}</button>\r\n\r\n\r\n\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_lain-lain_lain-lain_module_ts.js.map