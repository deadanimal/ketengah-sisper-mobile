(self["webpackChunkSisper"] = self["webpackChunkSisper"] || []).push([["src_app_lejar_sewapremis_sewapremis_module_ts"],{

/***/ 5292:
/*!***************************************************************!*\
  !*** ./src/app/lejar/sewapremis/sewapremis-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SewapremisPageRoutingModule": () => (/* binding */ SewapremisPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _sewapremis_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sewapremis.page */ 66035);




const routes = [
    {
        path: '',
        component: _sewapremis_page__WEBPACK_IMPORTED_MODULE_0__.SewapremisPage
    }
];
let SewapremisPageRoutingModule = class SewapremisPageRoutingModule {
};
SewapremisPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SewapremisPageRoutingModule);



/***/ }),

/***/ 21251:
/*!*******************************************************!*\
  !*** ./src/app/lejar/sewapremis/sewapremis.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "SewapremisPageModule": () => (/* binding */ SewapremisPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _sewapremis_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sewapremis-routing.module */ 5292);
/* harmony import */ var _sewapremis_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sewapremis.page */ 66035);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 84236);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 40830);










function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let SewapremisPageModule = class SewapremisPageModule {
};
SewapremisPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _sewapremis_routing_module__WEBPACK_IMPORTED_MODULE_0__.SewapremisPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient]
                }
            })
        ],
        declarations: [_sewapremis_page__WEBPACK_IMPORTED_MODULE_1__.SewapremisPage]
    })
], SewapremisPageModule);



/***/ }),

/***/ 66035:
/*!*****************************************************!*\
  !*** ./src/app/lejar/sewapremis/sewapremis.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SewapremisPage": () => (/* binding */ SewapremisPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_sewapremis_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sewapremis.page.html */ 62281);
/* harmony import */ var _sewapremis_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sewapremis.page.scss */ 98469);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/native-storage/ngx */ 34113);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_shared_services_bayaran_bayaran_bayaran_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/bayaran/bayaran/bayaran.service */ 76290);
/* harmony import */ var _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/pdf-generator/ngx */ 37961);
/* harmony import */ var _shared_modals_lejard_lejard_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/modals/lejard/lejard.page */ 79787);











let SewapremisPage = class SewapremisPage {
    constructor(location, loadingController, alertController, nativeStorage, bayaranService, router, pdfGenerator, modalCtrl) {
        this.location = location;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.nativeStorage = nativeStorage;
        this.bayaranService = bayaranService;
        this.router = router;
        this.pdfGenerator = pdfGenerator;
        this.modalCtrl = modalCtrl;
        this.ddYear = [];
        this.ddMonth = [];
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            yield this.nativeStorage.getItem('user').then(data => {
                this.ddakaun = data.value.premis;
                // var premis = data.value.premis;
                // Array.prototype.push.apply(rumah,premis);
                console.log(this.ddakaun);
            }, error => console.error(error));
            var selectedYear = new Date().getFullYear();
            var startYear = new Date().getFullYear() - 10;
            for (let year = selectedYear; year >= startYear; year--) {
                this.ddYear.push(year);
            }
            console.log(this.ddYear);
            this.ddMonth = [{
                    "id": 1,
                    "name": "January"
                }, {
                    "id": 2,
                    "name": "February"
                }, {
                    "id": 3,
                    "name": "March"
                }, {
                    "id": 4,
                    "name": "April"
                }, {
                    "id": 5,
                    "name": "May"
                }, {
                    "id": 6,
                    "name": "June"
                }, {
                    "id": 7,
                    "name": "July"
                }, {
                    "id": 8,
                    "name": "August"
                }, {
                    "id": 9,
                    "name": "September"
                }, {
                    "id": 10,
                    "name": "October"
                }, {
                    "id": 11,
                    "name": "November"
                }, {
                    "id": 12,
                    "name": "December"
                }];
            console.log(this.ddMonth);
            yield loading.dismiss();
        });
    }
    back() {
        this.location.back();
    }
    hantar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            var noakaun = '';
            var no_kp = '';
            yield this.ddakaun.forEach(element => {
                if (element.id == this.akaun) {
                    noakaun = element.no_akaun_premis;
                    no_kp = element.no_kad_pengenalan;
                    this.selectedakaun = element;
                }
            });
            const formData = new FormData();
            formData.append('noakaun', noakaun);
            formData.append('no_ic', no_kp);
            formData.append('year', this.tahun);
            formData.append('month', this.bulan);
            yield this.bayaranService.lejar(formData).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                console.log(res);
                this.lejardtl = res;
                var data = {
                    "akaun": this.selectedakaun,
                    "lejar": this.lejardtl,
                    "src": 2
                };
                const LejarModal = yield this.createModal(_shared_modals_lejard_lejard_page__WEBPACK_IMPORTED_MODULE_5__.LejardPage, { data });
                yield loading.dismiss();
                yield LejarModal.present();
            }), (res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
    createModal(component, componentProps) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component,
                cssClass: 'lejar-modal',
                componentProps,
                backdropDismiss: true
            });
            return modal;
        });
    }
};
SewapremisPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__.NativeStorage },
    { type: src_app_shared_services_bayaran_bayaran_bayaran_service__WEBPACK_IMPORTED_MODULE_3__.BayaranService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_4__.PDFGenerator },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController }
];
SewapremisPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-sewapremis',
        template: _raw_loader_sewapremis_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sewapremis_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SewapremisPage);



/***/ }),

/***/ 98469:
/*!*******************************************************!*\
  !*** ./src/app/lejar/sewapremis/sewapremis.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container2 {\n  padding-top: 100px;\n  height: 650px;\n  text-align: left;\n}\n\n.cardaduan {\n  background: #FFFFFF;\n  border: 1px solid #F7FAFD;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 8px rgba(73, 87, 184, 0.2);\n  border-radius: 10px;\n  width: 143px;\n  height: 171px;\n  margin: auto;\n  display: inline-block;\n  padding: 30px 10px;\n}\n\n.cardicon {\n  width: 64px;\n  height: 64px;\n  margin: auto;\n}\n\n.container2 {\n  padding-top: 50px;\n  height: 650px;\n}\n\n.headerbox {\n  padding: 0px 20px 0px 20px;\n}\n\n.select {\n  width: 100%;\n  background: #FFFFFF;\n  border: 1px solid #3D2C7C;\n  box-sizing: border-box;\n  border-radius: 9px;\n  --placeholder-color:#494949;\n}\n\n.label1 {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #494949;\n}\n\n.descbox {\n  padding: 40px 60px 40px 60px;\n}\n\n.textarea {\n  width: 90%;\n  background: #FFFFFF;\n  border: 1px solid #3D2C7C;\n  box-shadow: inset -4px -4px 9px rgba(255, 255, 255, 0.6), inset 4px 4px 14px #C5D7EE;\n  border-radius: 9px;\n  padding: 20px;\n  color: black;\n}\n\n.button {\n  background-color: #3D2C7C;\n  height: 48px;\n  width: 100%;\n  border-radius: 10px;\n  margin: auto;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 21px;\n}\n\n.container2 {\n  padding-top: 50px;\n  height: 650px;\n}\n\n.headerbox {\n  padding: 0px 20px 0px 20px;\n}\n\n.select {\n  width: 100%;\n  background: #FFFFFF;\n  border: 1px solid #3D2C7C;\n  box-sizing: border-box;\n  border-radius: 9px;\n  --placeholder-color:#494949;\n}\n\n.label {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #494949;\n  padding-left: 20px;\n}\n\n.descbox {\n  padding: 40px 60px 40px 60px;\n}\n\n.textarea {\n  width: 100%;\n  background: #FFFFFF;\n  border: 1px solid #3D2C7C;\n  box-shadow: inset -4px -4px 9px rgba(255, 255, 255, 0.6), inset 4px 4px 14px #C5D7EE;\n  border-radius: 9px;\n  padding: 20px;\n  color: black;\n}\n\n.bgbulat {\n  border-radius: 50%;\n  width: 40px !important;\n  background: #EAE4FF;\n}\n\n.cetak {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNld2FwcmVtaXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLDhDQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBR0E7RUFDRSw0QkFBQTtBQUFGOztBQUdBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxvRkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLDBCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw0QkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxvRkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUVBO0VBQ0UsWUFBQTtBQUNGIiwiZmlsZSI6InNld2FwcmVtaXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcjIge1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIGhlaWdodDogNjUwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jYXJkYWR1YW4ge1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRjdGQUZEO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDhweCByZ2JhKDczLCA4NywgMTg0LCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogMTQzcHg7XG4gIGhlaWdodDogMTcxcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAzMHB4IDEwcHg7XG59XG5cbi5jYXJkaWNvbiB7XG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmNvbnRhaW5lcjIge1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgaGVpZ2h0OiA2NTBweDtcbn1cblxuLmhlYWRlcmJveCB7XG4gIHBhZGRpbmc6IDBweCAyMHB4IDBweCAyMHB4O1xufVxuXG4uc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzRDJDN0M7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjojNDk0OTQ5O1xufVxuXG4ubGFiZWwxIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBjb2xvcjogIzQ5NDk0OTtcbn1cblxuXG4uZGVzY2JveCB7XG4gIHBhZGRpbmc6IDQwcHggNjBweCA0MHB4IDYwcHg7XG59XG5cbi50ZXh0YXJlYSB7XG4gIHdpZHRoOiA5MCU7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzRDJDN0M7XG4gIGJveC1zaGFkb3c6IGluc2V0IC00cHggLTRweCA5cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpLCBpbnNldCA0cHggNHB4IDE0cHggI0M1RDdFRTtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBwYWRkaW5nOjIwcHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzRDJDN0M7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjphdXRvO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG59XG4uY29udGFpbmVyMiB7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBoZWlnaHQ6IDY1MHB4O1xufVxuXG4uaGVhZGVyYm94IHtcbiAgcGFkZGluZzogMHB4IDIwcHggMHB4IDIwcHg7XG59XG5cbi5zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzNEMkM3QztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiM0OTQ5NDk7XG59XG5cbi5sYWJlbCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgY29sb3I6ICM0OTQ5NDk7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLmRlc2Nib3gge1xuICBwYWRkaW5nOiA0MHB4IDYwcHggNDBweCA2MHB4O1xufVxuXG4udGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzNEMkM3QztcbiAgYm94LXNoYWRvdzogaW5zZXQgLTRweCAtNHB4IDlweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiksIGluc2V0IDRweCA0cHggMTRweCAjQzVEN0VFO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIHBhZGRpbmc6MjBweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmJnYnVsYXQge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA0MHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNFQUU0RkY7XG4gIC8vIHBhZGRpbmctbGVmdDogMjBweDtcbiAgLy8gd2lkdGg6IDYwJTtcbn1cbi5jZXRha3tcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4iXX0= */");

/***/ }),

/***/ 62281:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lejar/sewapremis/sewapremis.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"main\">\n    <div class=\"container\">\n      <div class=\"header\">\n        <ion-icon name=\"chevron-back-outline\" style=\"float: left;\" (click)=\"back()\"></ion-icon>\n        <span class=\"headertxt\" style=\"width: 93%;\">{{ 'lejar.lejar' | translate }}</span>\n        <span class=\"headertxt2\">({{ 'lejar.sewapremis' | translate }})</span>\n      </div>\n      <div style=\"padding-top: 10px;\">\n        <ion-img src=\"../../assets/icon/lejarpremis.png\" class=\"icontetapan\"></ion-img>\n      </div>\n    </div>\n  </div>\n  <div class=\"main2\">\n    <div class=\"container2\">\n      <div class=\"headerbox\">\n        <div class=\"descbox\">\n          <div class=\"label1\" >{{ 'lejar.nama' | translate }}</div>\n          \n          <div style=\"height: 10px;\"></div>\n          <ion-select okText=\"{{ 'semak.ok' | translate }}\" cancelText=\"{{ 'semak.cancel' | translate }}\" class=\"select\" placeholder=\"{{ 'lejar.nama' | translate }}\" [(ngModel)]=\"akaun\">\n            <ion-select-option *ngFor=\"let item of ddakaun\" [value]=\"item.id\">\n              {{item.nama}}\n            </ion-select-option>\n          </ion-select>\n          <div style=\"height: 22px;\"></div>\n          <div class=\"label1\" >{{ 'lejar.tahun' | translate }}</div>\n          <div style=\"height: 10px;\"></div>\n          <ion-select okText=\"{{ 'semak.ok' | translate }}\" cancelText=\"{{ 'semak.cancel' | translate }}\" class=\"select\" placeholder=\"{{ 'lejar.tahun' | translate }}\" [(ngModel)]=\"tahun\">\n            <ion-select-option *ngFor=\"let item of ddYear\" [value]=\"item\">\n              {{item}}\n            </ion-select-option>\n          </ion-select>\n          <div style=\"height: 22px;\"></div>\n          <div class=\"label1\" >{{ 'lejar.bulan' | translate }}</div>\n          <div style=\"height: 10px;\"></div>\n          <ion-select okText=\"{{ 'semak.ok' | translate }}\" cancelText=\"{{ 'semak.cancel' | translate }}\" class=\"select\" placeholder=\"{{ 'lejar.bulan' | translate }}\" [(ngModel)]=\"bulan\">\n            <ion-select-option *ngFor=\"let item of ddMonth\" [value]=\"item.id\">\n              {{item.name}}\n            </ion-select-option>\n          </ion-select>\n\n          <div style=\"padding: 50px 0px;\">\n            <button ion-button class=\"button\" (click)=\"hantar()\">{{ 'lejar.cetak' | translate }}</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_lejar_sewapremis_sewapremis_module_ts.js.map