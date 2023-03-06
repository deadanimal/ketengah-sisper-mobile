(self["webpackChunkSisper"] = self["webpackChunkSisper"] || []).push([["src_app_sebutharga_sebutharga_module_ts"],{

/***/ 89126:
/*!*********************************************************!*\
  !*** ./src/app/sebutharga/sebutharga-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SebuthargaPageRoutingModule": () => (/* binding */ SebuthargaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _sebutharga_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sebutharga.page */ 88846);




const routes = [
    {
        path: '',
        component: _sebutharga_page__WEBPACK_IMPORTED_MODULE_0__.SebuthargaPage
    }
];
let SebuthargaPageRoutingModule = class SebuthargaPageRoutingModule {
};
SebuthargaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SebuthargaPageRoutingModule);



/***/ }),

/***/ 53024:
/*!*************************************************!*\
  !*** ./src/app/sebutharga/sebutharga.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SebuthargaPageModule": () => (/* binding */ SebuthargaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _sebutharga_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sebutharga-routing.module */ 89126);
/* harmony import */ var _sebutharga_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sebutharga.page */ 88846);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 84236);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.module */ 36747);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);










let SebuthargaPageModule = class SebuthargaPageModule {
};
SebuthargaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _sebutharga_routing_module__WEBPACK_IMPORTED_MODULE_0__.SebuthargaPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateLoader,
                    useFactory: _app_module__WEBPACK_IMPORTED_MODULE_2__.createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient]
                }
            }),
        ],
        declarations: [_sebutharga_page__WEBPACK_IMPORTED_MODULE_1__.SebuthargaPage]
    })
], SebuthargaPageModule);



/***/ }),

/***/ 88846:
/*!***********************************************!*\
  !*** ./src/app/sebutharga/sebutharga.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SebuthargaPage": () => (/* binding */ SebuthargaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_sebutharga_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sebutharga.page.html */ 77233);
/* harmony import */ var _sebutharga_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sebutharga.page.scss */ 72489);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/native-storage/ngx */ 34113);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _pay_pay_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pay/pay.page */ 48941);
/* harmony import */ var _shared_services_lain_lain_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/lain/lain.service */ 62803);











let SebuthargaPage = class SebuthargaPage {
    constructor(location, fb, loadingController, alertController, lainService, router, nativeStorage, modalController) {
        this.location = location;
        this.fb = fb;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.lainService = lainService;
        this.router = router;
        this.nativeStorage = nativeStorage;
        this.modalController = modalController;
    }
    back() {
        this.location.back();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            yield this.nativeStorage.getItem('user').then(data => {
                this.user = data.value;
            }, error => console.error(error));
            yield this.lainService.getdd().subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                console.log(res);
                this.ddUrusan = res;
                yield loading.dismiss();
            }), (res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
    pay() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _pay_pay_page__WEBPACK_IMPORTED_MODULE_3__.PayPage,
                componentProps: { value: 123 }
            });
            yield modal.present();
        });
    }
};
SebuthargaPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _shared_services_lain_lain_service__WEBPACK_IMPORTED_MODULE_4__.LainService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__.NativeStorage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController }
];
SebuthargaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-sebutharga',
        template: _raw_loader_sebutharga_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sebutharga_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SebuthargaPage);



/***/ }),

/***/ 72489:
/*!*************************************************!*\
  !*** ./src/app/sebutharga/sebutharga.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container2 {\n  padding-top: 50px;\n  height: 650px;\n  text-align: left;\n}\n\n.selects {\n  width: 100%;\n  height: 45px;\n  background: #FFFFFF;\n  border: 1px solid #3D2C7C;\n  box-sizing: border-box;\n  border-radius: 9px;\n  --placeholder-color:#494949 !important;\n  box-shadow: inset -4px -4px 9px rgba(255, 255, 255, 0.6), inset 4px 4px 14px #C5D7EE;\n  padding: 0px 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: left;\n  color: black;\n}\n\n.cardaduan {\n  background: #FFFFFF;\n  border: 1px solid #F7FAFD;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 8px rgba(73, 87, 184, 0.2);\n  border-radius: 10px;\n  width: 143px;\n  height: 171px;\n  margin: auto;\n  display: inline-block;\n  padding: 30px 10px;\n}\n\n.cardicon {\n  width: 64px;\n  height: 64px;\n  margin: auto;\n}\n\n.headerbox {\n  padding: 0px 20px 0px 20px;\n}\n\n.select {\n  width: 100%;\n  background: #FFFFFF;\n  border: 1px solid #3D2C7C;\n  box-sizing: border-box;\n  border-radius: 9px;\n  --placeholder-color:#494949;\n}\n\n.label1 {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #494949;\n}\n\n.descbox {\n  padding: 40px 60px 40px 60px;\n}\n\n.textarea {\n  width: 90%;\n  background: #FFFFFF;\n  border: 1px solid #3D2C7C;\n  box-shadow: inset -4px -4px 9px rgba(255, 255, 255, 0.6), inset 4px 4px 14px #C5D7EE;\n  border-radius: 9px;\n  padding: 20px;\n  color: black;\n}\n\n.button {\n  background-color: #3D2C7C;\n  height: 48px;\n  width: 100%;\n  border-radius: 10px;\n  margin: auto;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 21px;\n}\n\n.container2 {\n  padding-top: 50px;\n  height: 650px;\n}\n\n.headerbox {\n  padding: 0px 20px 0px 20px;\n}\n\n.select {\n  width: 100%;\n  background: #FFFFFF;\n  border: 1px solid #3D2C7C;\n  box-sizing: border-box;\n  border-radius: 9px;\n  --placeholder-color:#494949;\n}\n\n.label {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #494949;\n}\n\n.descbox {\n  padding: 40px 60px 40px 60px;\n}\n\n.textarea {\n  width: 100%;\n  background: #FFFFFF;\n  border: 1px solid #3D2C7C;\n  box-shadow: inset -4px -4px 9px rgba(255, 255, 255, 0.6), inset 4px 4px 14px #C5D7EE;\n  border-radius: 9px;\n  padding: 20px;\n  color: black;\n}\n\n.bgbulat {\n  border-radius: 50%;\n  width: 40px !important;\n  background: #EAE4FF;\n}\n\n.bayaran {\n  outline: 0;\n  border-width: 0 0 2px;\n  color: #D23330;\n  width: 100%;\n  background: #FFFFFF;\n  font-size: 30px;\n  font-weight: 800;\n}\n\n.bayaran::placeholder {\n  color: #D23330;\n}\n\n.info {\n  margin-top: 20px;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 21px;\n  color: #494949;\n  display: grid;\n  grid-template-columns: 200px 200px;\n  color: blue;\n}\n\n.centered {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 25%;\n  margin-right: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYnV0aGFyZ2EucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLG9GQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsOENBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBR0E7RUFDRSw0QkFBQTtBQUFGOztBQUdBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxvRkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLDBCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUdBO0VBQ0UsNEJBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0ZBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFJQTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7QUFERjs7QUFLQTtFQUVFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFFQSxhQUFBO0VBQ0Qsa0NBQUE7RUFDQSxXQUFBO0FBSkQ7O0FBUUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFMRiIsImZpbGUiOiJzZWJ1dGhhcmdhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIyIHtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIGhlaWdodDogNjUwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5zZWxlY3RzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDVweDtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzNEMkM3QztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiM0OTQ5NDkgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogaW5zZXQgLTRweCAtNHB4IDlweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiksIGluc2V0IDRweCA0cHggMTRweCAjQzVEN0VFO1xuICBwYWRkaW5nOiAwcHggMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmNhcmRhZHVhbiB7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGN0ZBRkQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYmEoNzMsIDg3LCAxODQsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiAxNDNweDtcbiAgaGVpZ2h0OiAxNzFweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDMwcHggMTBweDtcbn1cblxuLmNhcmRpY29uIHtcbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNjRweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uaGVhZGVyYm94IHtcbiAgcGFkZGluZzogMHB4IDIwcHggMHB4IDIwcHg7XG59XG5cbi5zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzNEMkM3QztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiM0OTQ5NDk7XG59XG5cbi5sYWJlbDEge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGNvbG9yOiAjNDk0OTQ5O1xufVxuXG5cbi5kZXNjYm94IHtcbiAgcGFkZGluZzogNDBweCA2MHB4IDQwcHggNjBweDtcbn1cblxuLnRleHRhcmVhIHtcbiAgd2lkdGg6IDkwJTtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzNEMkM3QztcbiAgYm94LXNoYWRvdzogaW5zZXQgLTRweCAtNHB4IDlweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiksIGluc2V0IDRweCA0cHggMTRweCAjQzVEN0VFO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIHBhZGRpbmc6MjBweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNEMkM3QztcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOmF1dG87XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjFweDtcbn1cbi5jb250YWluZXIyIHtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIGhlaWdodDogNjUwcHg7XG59XG5cbi5oZWFkZXJib3gge1xuICBwYWRkaW5nOiAwcHggMjBweCAwcHggMjBweDtcbn1cblxuLnNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3JkZXI6IDFweCBzb2xpZCAjM0QyQzdDO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IzQ5NDk0OTtcbn1cblxuLmxhYmVsIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBjb2xvcjogIzQ5NDk0OTtcbiAgLy8gcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4uZGVzY2JveCB7XG4gIHBhZGRpbmc6IDQwcHggNjBweCA0MHB4IDYwcHg7XG59XG5cbi50ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3JkZXI6IDFweCBzb2xpZCAjM0QyQzdDO1xuICBib3gtc2hhZG93OiBpbnNldCAtNHB4IC00cHggOXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSwgaW5zZXQgNHB4IDRweCAxNHB4ICNDNUQ3RUU7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgcGFkZGluZzoyMHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5iZ2J1bGF0IHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNDBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjRUFFNEZGO1xuICAvLyBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIC8vIHdpZHRoOiA2MCU7XG59XG4uYmF5YXJhbiB7XG4gIG91dGxpbmU6IDA7XG4gIGJvcmRlci13aWR0aDogMCAwIDJweDtcbiAgY29sb3I6ICNEMjMzMzA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5iYXlhcmFuOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjRDIzMzMwO1xufVxuXG5cbi5pbmZve1xuXG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjFweDtcbiAgY29sb3I6ICM0OTQ5NDk7XG5cbiAgZGlzcGxheTogZ3JpZDtcbiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDIwMHB4IDtcbiBjb2xvcjogYmx1ZTtcblxufVxuXG4uY2VudGVyZWR7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMjUlO1xuICBtYXJnaW4tcmlnaHQ6IDI1JTtcblxufVxuIl19 */");

/***/ }),

/***/ 77233:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sebutharga/sebutharga.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n\n  <div class=\"main\">\n    <div class=\"container\">\n      <div class=\"header\">\n        <ion-icon name=\"chevron-back-outline\" style=\"float: left;\" (click)=\"back()\"></ion-icon>\n        <span class=\"headertxt\">Sebutharga / Tender</span>\n      </div>\n      <div style=\"padding-top: 40px;\">\n        <ion-img src=\"../../assets/icon/tender.png\" class=\"icontetapan \"></ion-img>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"main2\">\n    <div class=\"container2\">\n      <div class=\"headerbox\">\n        <div class=\"descbox\">\n          <form>\n\n\n            <div class=\"label\">{{ 'lain.urusan' | translate }}</div>\n            <div style=\"height: 10px;\"></div>\n            <ion-select okText=\"{{ 'semak.ok' | translate }}\" cancelText=\"{{ 'semak.cancel' | translate }}\"\n              class=\"select\" (ionChange)=\"Check($event);\">\n              <ion-select-option *ngFor=\"let urusan of ddUrusan; let i = index\" [value]=\"urusan.id\">\n                {{urusan.urusan}}\n              </ion-select-option>\n            </ion-select>\n\n            <div style=\"height: 10px;\"></div>\n            <div class=\"label1\">Alamat</div>\n            <input type=\"text\" class=\"selects\">\n            <div style=\"height: 10px;\"></div>\n            <div class=\"label1\">{{ 'lain.catatan' | translate }}</div>\n\n\n            <textarea class=\"textarea\" rows=\"7\" cols=\"50\"></textarea>\n            <div style=\"height: 10px;\"></div>\n\n\n\n            <button ion-button class=\"button\">Simpan </button>\n\n\n          </form>\n\n          <div class=\"centered\">\n            <div class=\"info\">\n\n              <div class=\"item\">Urusan</div>\n              <div class=\"item\">info</div>\n\n              <div class=\"item\">Catatan</div>\n              <div class=\"item\">info</div>\n\n\n              <div class=\"item\">Amaun </div>\n              <div class=\"item\">info</div>\n\n\n              <div class=\"item\">title</div>\n              <div class=\"item\">info</div>\n\n\n\n\n            </div>\n          </div>\n          <button ion-button class=\"button\" (click)=\"pay()\">Bayar </button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_sebutharga_sebutharga_module_ts.js.map