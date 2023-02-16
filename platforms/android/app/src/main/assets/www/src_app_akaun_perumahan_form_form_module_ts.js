(self["webpackChunkSisper"] = self["webpackChunkSisper"] || []).push([["src_app_akaun_perumahan_form_form_module_ts"],{

/***/ 85169:
/*!*************************************************************!*\
  !*** ./src/app/akaun/perumahan/form/form-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormPageRoutingModule": () => (/* binding */ FormPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _form_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.page */ 78994);




const routes = [
    {
        path: '',
        component: _form_page__WEBPACK_IMPORTED_MODULE_0__.FormPage
    }
];
let FormPageRoutingModule = class FormPageRoutingModule {
};
FormPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FormPageRoutingModule);



/***/ }),

/***/ 76578:
/*!*****************************************************!*\
  !*** ./src/app/akaun/perumahan/form/form.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "FormPageModule": () => (/* binding */ FormPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _form_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-routing.module */ 85169);
/* harmony import */ var _form_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.page */ 78994);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 84236);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 40830);










function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let FormPageModule = class FormPageModule {
};
FormPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _form_routing_module__WEBPACK_IMPORTED_MODULE_0__.FormPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient]
                }
            })
        ],
        declarations: [_form_page__WEBPACK_IMPORTED_MODULE_1__.FormPage]
    })
], FormPageModule);



/***/ }),

/***/ 78994:
/*!***************************************************!*\
  !*** ./src/app/akaun/perumahan/form/form.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormPage": () => (/* binding */ FormPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_form_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./form.page.html */ 587);
/* harmony import */ var _form_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.page.scss */ 15881);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/native-storage/ngx */ 34113);
/* harmony import */ var _shared_services_akaun_perumahan_perumahan_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/akaun/perumahan/perumahan.service */ 96082);









let FormPage = class FormPage {
    constructor(route, router, location, loadingController, nativeStorage, perumahanService, alertController) {
        this.route = route;
        this.router = router;
        this.location = location;
        this.loadingController = loadingController;
        this.nativeStorage = nativeStorage;
        this.perumahanService = perumahanService;
        this.alertController = alertController;
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.src = this.router.getCurrentNavigation().extras.state.source;
                console.log(this.src);
            }
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            yield this.nativeStorage.getItem('user').then(data => {
                this.user = data.value;
                console.log(this.user);
            }, error => console.error(error));
            yield loading.dismiss();
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
            formData.append('no_akaun_rumah', this.noakaun);
            formData.append('nama_akaun', this.namaakaun);
            if (this.src == 'no') {
                formData.append('no_ic', this.nokp);
            }
            else {
                formData.append('no_ic', this.user.no_ic);
            }
            yield this.perumahanService.add(formData).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                console.log(res);
                yield loading.dismiss();
                if (res == 1) {
                    this.alerterror('API Error');
                }
                else if (res == 2) {
                    this.alerterror('Akaun Tidak Dijumpai');
                }
                else {
                    this.user.perumahan.push(res);
                    this.nativeStorage.setItem('user', { value: this.user });
                    this.clearform();
                    this.router.navigate(['/main/tabs/home']);
                }
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
    clearform() {
        this.nokp = '';
        this.noakaun = '';
        this.namaakaun = '';
        this.src = '';
    }
    alerterror(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Loading failed',
                message: msg,
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
};
FormPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__.NativeStorage },
    { type: _shared_services_akaun_perumahan_perumahan_service__WEBPACK_IMPORTED_MODULE_3__.PerumahanService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController }
];
FormPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-form',
        template: _raw_loader_form_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_form_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FormPage);



/***/ }),

/***/ 15881:
/*!*****************************************************!*\
  !*** ./src/app/akaun/perumahan/form/form.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container2 {\n  padding-top: 45px;\n  height: 650px;\n  text-align: left;\n}\n\n.label {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #494949;\n  padding: 10px 0px;\n}\n\n.select {\n  width: 100%;\n  height: 45px;\n  background: #FFFFFF;\n  border: 1px solid #3D2C7C;\n  box-sizing: border-box;\n  border-radius: 9px;\n  --placeholder-color:#494949 !important;\n  box-shadow: inset -4px -4px 9px rgba(255, 255, 255, 0.6), inset 4px 4px 14px #C5D7EE;\n  padding: 0px 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: left;\n}\n\n.button {\n  background-color: #3D2C7C;\n  border: 1pt solid #3D2C7C;\n  height: 48px;\n  width: 100%;\n  border-radius: 10px;\n  margin: auto;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 21px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0Esb0ZBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDSiIsImZpbGUiOiJmb3JtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIyIHtcclxuICAgIHBhZGRpbmctdG9wOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiA2NTBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5sYWJlbCB7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgY29sb3I6ICM0OTQ5NDk7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxufVxyXG5cclxuLnNlbGVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjM0QyQzdDO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IzQ5NDk0OSAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTRweCAtNHB4IDlweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiksIGluc2V0IDRweCA0cHggMTRweCAjQzVEN0VFO1xyXG4gICAgcGFkZGluZzogMHB4IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0QyQzdDO1xyXG4gICAgYm9yZGVyOiAxcHQgc29saWQgIzNEMkM3QztcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG59Il19 */");

/***/ }),

/***/ 587:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/akaun/perumahan/form/form.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"main\">\r\n    <div class=\"container\">\r\n      <div class=\"header\">\r\n        <ion-icon name=\"chevron-back-outline\" style=\"float: left;\" (click)=\"back()\"></ion-icon>\r\n        <span class=\"headertxt\">{{ 'akaun.tambahakaun' | translate }}</span>\r\n      </div>\r\n      <div style=\"padding-top: 40px;\">\r\n        <ion-img src=\"../../assets/icon/homerumah.png\" class=\"icontetapan\"></ion-img>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"main2\">\r\n    <div class=\"container2\">\r\n      <div style=\"padding:0px 60px;\">\r\n        <div *ngIf=\"src == 'no'\">\r\n          <div class=\"label\">{{ 'akaun.nokp' | translate }}</div>\r\n          <input class=\"select\" [(ngModel)]=\"nokp\">\r\n          <div style=\"height: 20px;\"></div>\r\n        </div>\r\n        <div class=\"label\">{{ 'akaun.noakaun' | translate }}</div>\r\n        <input class=\"select\" [(ngModel)]=\"noakaun\">\r\n        <div style=\"height: 20px;\"></div>\r\n        <div class=\"label\">{{ 'akaun.namaakaun' | translate }}</div>\r\n        <input class=\"select\" [(ngModel)]=\"namaakaun\">\r\n        <div style=\"height: 50px;\"></div>\r\n        <button ion-button class=\"button\" (click)=\"hantar()\">{{ 'hantar' | translate }}</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_akaun_perumahan_form_form_module_ts.js.map