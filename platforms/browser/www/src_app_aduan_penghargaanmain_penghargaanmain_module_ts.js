(self["webpackChunkSisper"] = self["webpackChunkSisper"] || []).push([["src_app_aduan_penghargaanmain_penghargaanmain_module_ts"],{

/***/ 33818:
/*!*************************************************************************!*\
  !*** ./src/app/aduan/penghargaanmain/penghargaanmain-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PenghargaanmainPageRoutingModule": () => (/* binding */ PenghargaanmainPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _penghargaanmain_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./penghargaanmain.page */ 16096);




const routes = [
    {
        path: '',
        component: _penghargaanmain_page__WEBPACK_IMPORTED_MODULE_0__.PenghargaanmainPage
    }
];
let PenghargaanmainPageRoutingModule = class PenghargaanmainPageRoutingModule {
};
PenghargaanmainPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PenghargaanmainPageRoutingModule);



/***/ }),

/***/ 48894:
/*!*****************************************************************!*\
  !*** ./src/app/aduan/penghargaanmain/penghargaanmain.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "PenghargaanmainPageModule": () => (/* binding */ PenghargaanmainPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _penghargaanmain_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./penghargaanmain-routing.module */ 33818);
/* harmony import */ var _penghargaanmain_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./penghargaanmain.page */ 16096);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 84236);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 40830);










function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let PenghargaanmainPageModule = class PenghargaanmainPageModule {
};
PenghargaanmainPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _penghargaanmain_routing_module__WEBPACK_IMPORTED_MODULE_0__.PenghargaanmainPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient]
                }
            }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_penghargaanmain_page__WEBPACK_IMPORTED_MODULE_1__.PenghargaanmainPage]
    })
], PenghargaanmainPageModule);



/***/ }),

/***/ 16096:
/*!***************************************************************!*\
  !*** ./src/app/aduan/penghargaanmain/penghargaanmain.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PenghargaanmainPage": () => (/* binding */ PenghargaanmainPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_penghargaanmain_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./penghargaanmain.page.html */ 91504);
/* harmony import */ var _penghargaanmain_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./penghargaanmain.page.scss */ 17103);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _shared_services_penghargaan_penghargaan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/penghargaan/penghargaan.service */ 37189);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/native-storage/ngx */ 34113);










let PenghargaanmainPage = class PenghargaanmainPage {
    constructor(location, router, penghargaanService, alertController, loadingController, formBuilder, nativeStorage) {
        this.location = location;
        this.router = router;
        this.penghargaanService = penghargaanService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.formBuilder = formBuilder;
        this.nativeStorage = nativeStorage;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            yield this.nativeStorage.getItem('user').then(data => {
                this.user = data.value;
                loading.dismiss();
            }, error => console.error(error));
        });
    }
    back() {
        this.location.back();
    }
    hantar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            const formData = new FormData();
            formData.append('user_id', this.user.user_id);
            formData.append('user_name', this.user.name);
            formData.append('penghargaan', this.PenghargaanVal);
            yield this.penghargaanService.add(formData).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                console.log(res);
                yield loading.dismiss();
                const alert = yield this.alertController.create({
                    header: 'Success',
                    message: 'Hantaran anda telah berjaya Terima Kasih',
                    buttons: ['OK'],
                });
                alert.present();
                this.router.navigate(['/main/tabs/aduan']);
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
};
PenghargaanmainPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _shared_services_penghargaan_penghargaan_service__WEBPACK_IMPORTED_MODULE_2__.PenghargaanService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__.NativeStorage }
];
PenghargaanmainPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-penghargaanmain',
        template: _raw_loader_penghargaanmain_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_penghargaanmain_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PenghargaanmainPage);



/***/ }),

/***/ 17103:
/*!*****************************************************************!*\
  !*** ./src/app/aduan/penghargaanmain/penghargaanmain.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container2 {\n  padding-top: 50px;\n  height: 600px;\n}\n\n.headerbox {\n  padding: 0px 20px 0px 20px;\n}\n\n.label {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #494949;\n  padding-left: 20px;\n}\n\n.textarea {\n  width: 100%;\n  background: #FFFFFF;\n  border: 1px solid #3D2C7C;\n  box-shadow: inset -4px -4px 9px rgba(255, 255, 255, 0.6), inset 4px 4px 14px #C5D7EE;\n  border-radius: 9px;\n  padding: 20px;\n  color: black;\n}\n\n.button {\n  background-color: #3D2C7C;\n  height: 48px;\n  width: 100%;\n  border-radius: 10px;\n  margin: auto;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 21px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlbmdoYXJnYWFubWFpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLDBCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0ZBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUNKIiwiZmlsZSI6InBlbmdoYXJnYWFubWFpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyMiB7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXJib3gge1xyXG4gICAgcGFkZGluZzogMHB4IDIwcHggMHB4IDIwcHg7XHJcbn1cclxuXHJcbi5sYWJlbCB7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgY29sb3I6ICM0OTQ5NDk7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi50ZXh0YXJlYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjM0QyQzdDO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTRweCAtNHB4IDlweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiksIGluc2V0IDRweCA0cHggMTRweCAjQzVEN0VFO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgcGFkZGluZzoyMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRDJDN0M7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxufSJdfQ== */");

/***/ }),

/***/ 91504:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/aduan/penghargaanmain/penghargaanmain.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"main\">\r\n    <div class=\"container\">\r\n      <div class=\"header\">\r\n        <ion-icon name=\"chevron-back-outline\" style=\"float: left;\" (click)=\"back()\"></ion-icon>\r\n        <span class=\"headertxt\">{{ 'penghargaan.penghargaan' | translate }}</span>\r\n      </div>\r\n      <div style=\"padding-top: 40px;\">\r\n        <ion-img src=\"../../assets/icon/penghargaan.png\" class=\"icontetapan\"></ion-img>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"main2\">\r\n    <div class=\"container2\">\r\n      <div class=\"headerbox\">\r\n        <div class=\"label\">{{ 'penghargaan.silaisi' | translate }}.</div>\r\n        <div style=\"padding:60px 60px\">\r\n          <textarea class=\"textarea\" rows=\"7\" cols=\"50\" [(ngModel)]=\"PenghargaanVal\"></textarea>\r\n        </div>\r\n      </div>\r\n      <div style=\"padding: 50px 50px;\">\r\n        <button ion-button class=\"button\" (click)=\"hantar()\">{{ 'aduan.hantar' | translate }}</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_aduan_penghargaanmain_penghargaanmain_module_ts.js.map