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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container2 {\n  padding-top: 50px;\n  height: 650px;\n  text-align: left;\n}\n\n.selects {\n  width: 100%;\n  height: 45px;\n  background: #FFFFFF;\n  border: 1px solid #3D2C7C;\n  box-sizing: border-box;\n  border-radius: 9px;\n  --placeholder-color:#494949 !important;\n  box-shadow: inset -4px -4px 9px rgba(255, 255, 255, 0.6), inset 4px 4px 14px #C5D7EE;\n  padding: 0px 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: left;\n  color: black;\n}\n\n.cardaduan {\n  background: #FFFFFF;\n  border: 1px solid #F7FAFD;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 8px rgba(73, 87, 184, 0.2);\n  border-radius: 10px;\n  width: 143px;\n  height: 171px;\n  margin: auto;\n  display: inline-block;\n  padding: 30px 10px;\n}\n\n.cardicon {\n  width: 64px;\n  height: 64px;\n  margin: auto;\n}\n\n.headerbox {\n  padding: 0px 20px 0px 20px;\n}\n\n.select {\n  width: 100%;\n  background: #FFFFFF;\n  border: 1px solid #3D2C7C;\n  box-sizing: border-box;\n  border-radius: 9px;\n  --placeholder-color:#494949;\n}\n\n.label1 {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #494949;\n}\n\n.descbox {\n  padding: 40px 60px 40px 60px;\n}\n\n.textarea {\n  width: 90%;\n  background: #FFFFFF;\n  border: 1px solid #3D2C7C;\n  box-shadow: inset -4px -4px 9px rgba(255, 255, 255, 0.6), inset 4px 4px 14px #C5D7EE;\n  border-radius: 9px;\n  padding: 20px;\n  color: black;\n}\n\n.button {\n  background-color: #3D2C7C;\n  height: 48px;\n  width: 100%;\n  border-radius: 10px;\n  margin: auto;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 21px;\n}\n\n.container2 {\n  padding-top: 50px;\n  height: 650px;\n}\n\n.headerbox {\n  padding: 0px 20px 0px 20px;\n}\n\n.select {\n  width: 100%;\n  background: #FFFFFF;\n  border: 1px solid #3D2C7C;\n  box-sizing: border-box;\n  border-radius: 9px;\n  --placeholder-color:#494949;\n}\n\n.label {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #494949;\n}\n\n.descbox {\n  padding: 40px 60px 40px 60px;\n}\n\n.textarea {\n  width: 100%;\n  background: #FFFFFF;\n  border: 1px solid #3D2C7C;\n  box-shadow: inset -4px -4px 9px rgba(255, 255, 255, 0.6), inset 4px 4px 14px #C5D7EE;\n  border-radius: 9px;\n  padding: 20px;\n  color: black;\n}\n\n.bgbulat {\n  border-radius: 50%;\n  width: 40px !important;\n  background: #EAE4FF;\n}\n\n.bayaran {\n  outline: 0;\n  border-width: 0 0 2px;\n  color: #D23330;\n  width: 100%;\n  background: #FFFFFF;\n  font-size: 30px;\n  font-weight: 800;\n}\n\n.bayaran::placeholder {\n  color: #D23330;\n}\n\n.info {\n  margin-top: 20px;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 21px;\n  color: #494949;\n  display: grid;\n  grid-template-columns: 200px 200px;\n  color: blue;\n}\n\n.centered {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 25%;\n  margin-right: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYnV0aGFyZ2EucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLG9GQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsOENBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBR0E7RUFDRSw0QkFBQTtBQUFGOztBQUdBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxvRkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLDBCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUdBO0VBQ0UsNEJBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0ZBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFJQTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7QUFERjs7QUFLQTtFQUVFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFFQSxhQUFBO0VBQ0Qsa0NBQUE7RUFDQSxXQUFBO0FBSkQ7O0FBUUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFMRiIsImZpbGUiOiJzZWJ1dGhhcmdhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIyIHtcclxuICBwYWRkaW5nLXRvcDogNTBweDtcclxuICBoZWlnaHQ6IDY1MHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5zZWxlY3RzIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjM0QyQzdDO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IzQ5NDk0OSAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IC00cHggLTRweCA5cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpLCBpbnNldCA0cHggNHB4IDE0cHggI0M1RDdFRTtcclxuICBwYWRkaW5nOiAwcHggMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5jYXJkYWR1YW4ge1xyXG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0Y3RkFGRDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYmEoNzMsIDg3LCAxODQsIDAuMik7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB3aWR0aDogMTQzcHg7XHJcbiAgaGVpZ2h0OiAxNzFweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDMwcHggMTBweDtcclxufVxyXG5cclxuLmNhcmRpY29uIHtcclxuICB3aWR0aDogNjRweDtcclxuICBoZWlnaHQ6IDY0cHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uaGVhZGVyYm94IHtcclxuICBwYWRkaW5nOiAwcHggMjBweCAwcHggMjBweDtcclxufVxyXG5cclxuLnNlbGVjdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjM0QyQzdDO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IzQ5NDk0OTtcclxufVxyXG5cclxuLmxhYmVsMSB7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgY29sb3I6ICM0OTQ5NDk7XHJcbn1cclxuXHJcblxyXG4uZGVzY2JveCB7XHJcbiAgcGFkZGluZzogNDBweCA2MHB4IDQwcHggNjBweDtcclxufVxyXG5cclxuLnRleHRhcmVhIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzNEMkM3QztcclxuICBib3gtc2hhZG93OiBpbnNldCAtNHB4IC00cHggOXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSwgaW5zZXQgNHB4IDRweCAxNHB4ICNDNUQ3RUU7XHJcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gIHBhZGRpbmc6MjBweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzRDJDN0M7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luOmF1dG87XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG59XHJcbi5jb250YWluZXIyIHtcclxuICBwYWRkaW5nLXRvcDogNTBweDtcclxuICBoZWlnaHQ6IDY1MHB4O1xyXG59XHJcblxyXG4uaGVhZGVyYm94IHtcclxuICBwYWRkaW5nOiAwcHggMjBweCAwcHggMjBweDtcclxufVxyXG5cclxuLnNlbGVjdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjM0QyQzdDO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IzQ5NDk0OTtcclxufVxyXG5cclxuLmxhYmVsIHtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBjb2xvcjogIzQ5NDk0OTtcclxuICAvLyBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5kZXNjYm94IHtcclxuICBwYWRkaW5nOiA0MHB4IDYwcHggNDBweCA2MHB4O1xyXG59XHJcblxyXG4udGV4dGFyZWEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzNEMkM3QztcclxuICBib3gtc2hhZG93OiBpbnNldCAtNHB4IC00cHggOXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSwgaW5zZXQgNHB4IDRweCAxNHB4ICNDNUQ3RUU7XHJcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gIHBhZGRpbmc6MjBweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5iZ2J1bGF0IHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDQwcHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiAjRUFFNEZGO1xyXG4gIC8vIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAvLyB3aWR0aDogNjAlO1xyXG59XHJcbi5iYXlhcmFuIHtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGJvcmRlci13aWR0aDogMCAwIDJweDtcclxuICBjb2xvcjogI0QyMzMzMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4uYmF5YXJhbjo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjRDIzMzMwO1xyXG59XHJcblxyXG5cclxuLmluZm97XHJcblxyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gIGNvbG9yOiAjNDk0OTQ5O1xyXG5cclxuICBkaXNwbGF5OiBncmlkO1xyXG4gZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAyMDBweCA7XHJcbiBjb2xvcjogYmx1ZTtcclxuXHJcbn1cclxuXHJcbi5jZW50ZXJlZHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICBtYXJnaW4tcmlnaHQ6IDI1JTtcclxuXHJcbn1cclxuIl19 */");

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