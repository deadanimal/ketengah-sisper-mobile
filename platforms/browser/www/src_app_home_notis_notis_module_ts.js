(self["webpackChunkkkr_pothole"] = self["webpackChunkkkr_pothole"] || []).push([["src_app_home_notis_notis_module_ts"],{

/***/ 76557:
/*!****************************************************!*\
  !*** ./src/app/home/notis/notis-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotisPageRoutingModule": () => (/* binding */ NotisPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _notis_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notis.page */ 28012);




const routes = [
    {
        path: '',
        component: _notis_page__WEBPACK_IMPORTED_MODULE_0__.NotisPage
    }
];
let NotisPageRoutingModule = class NotisPageRoutingModule {
};
NotisPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NotisPageRoutingModule);



/***/ }),

/***/ 45858:
/*!********************************************!*\
  !*** ./src/app/home/notis/notis.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "NotisPageModule": () => (/* binding */ NotisPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _notis_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notis-routing.module */ 76557);
/* harmony import */ var _notis_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notis.page */ 28012);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 84236);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/http-loader */ 40830);
/* harmony import */ var _shared_modals_viewnotis_viewnotis_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/modals/viewnotis/viewnotis.module */ 69730);











function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let NotisPageModule = class NotisPageModule {
};
NotisPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _notis_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotisPageRoutingModule,
            _shared_modals_viewnotis_viewnotis_module__WEBPACK_IMPORTED_MODULE_2__.ViewnotisPageModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient]
                }
            })
        ],
        declarations: [_notis_page__WEBPACK_IMPORTED_MODULE_1__.NotisPage]
    })
], NotisPageModule);



/***/ }),

/***/ 28012:
/*!******************************************!*\
  !*** ./src/app/home/notis/notis.page.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotisPage": () => (/* binding */ NotisPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_notis_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./notis.page.html */ 15834);
/* harmony import */ var _notis_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notis.page.scss */ 32969);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _shared_modals_viewnotis_viewnotis_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/modals/viewnotis/viewnotis.page */ 14527);
/* harmony import */ var _shared_services_notis_notis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/notis/notis.service */ 64338);
/* harmony import */ var _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/native-storage/ngx */ 34113);











let NotisPage = class NotisPage {
    constructor(location, route, router, modalController, notisService, alertController, loadingController, nativeStorage) {
        this.location = location;
        this.route = route;
        this.router = router;
        this.modalController = modalController;
        this.notisService = notisService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.nativeStorage = nativeStorage;
        this.deleteall = false;
        this.checkall = false;
        this.checkBoxList = [];
        this.route.queryParams.subscribe((params) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.router.getCurrentNavigation().extras.state) {
                this.checkBoxList = this.router.getCurrentNavigation().extras.state.notis;
                yield this.checkBoxList.forEach(function (value) {
                    return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                        var date = new Date(value.created_at);
                        var month = date.getMonth() + 1;
                        value.date = date.getDate() + '/' + month + '/' + date.getFullYear();
                    });
                });
                console.log('list', this.checkBoxList);
            }
        }));
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.nativeStorage.getItem('user').then(data => {
                console.log(data);
                this.user = data.value;
            }, error => console.error(error));
        });
    }
    back() {
        this.location.back();
    }
    deletehist() {
        if (this.deleteall == true) {
            this.deleteall = false;
        }
        else {
            this.deleteall = true;
        }
    }
    deleteone(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            // console.log(id);
            const loading = yield this.loadingController.create();
            yield loading.present();
            yield this.notisService.softdelete(id, this.user.user_id).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                // console.log(res);
                var foundIndex = this.checkBoxList.findIndex(x => x.id == res.id);
                this.checkBoxList.splice(foundIndex, 1);
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
    deleteallbtn() {
        var self = this;
        this.checkBoxList.forEach(function (value) {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                if (value.selected == true) {
                    yield self.deleteone(value.id);
                }
            });
        });
    }
    checkAll(event) {
        // console.log(event.target.checked);
        if (event.target.checked == false) {
            this.checkBoxList.forEach(function (value) {
                value.selected = true;
            });
        }
        else {
            this.checkBoxList.forEach(function (value) {
                value.selected = false;
            });
        }
        console.log(this.checkBoxList);
    }
    openModal(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            // console.log(data);
            if (data.id != undefined && data.id != null) {
                if (data.view == false) {
                    yield this.notisService.viewid(data.id, this.user.user_id).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                        res.view = true;
                        console.log('res', res);
                        var date = new Date(res.created_at);
                        var month = date.getMonth() + 1;
                        res.date = date.getDate() + '/' + month + '/' + date.getFullYear();
                        var foundIndex = this.checkBoxList.findIndex(x => x.id == res.id);
                        this.checkBoxList[foundIndex] = res;
                        console.log('checklist', this.checkBoxList);
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
                }
            }
            const modal = yield this.modalController.create({
                component: _shared_modals_viewnotis_viewnotis_page__WEBPACK_IMPORTED_MODULE_2__.ViewnotisPage,
                cssClass: 'small-modal',
                backdropDismiss: true,
                componentProps: {
                    "title": data.tajuk,
                    "body": data.keterangan
                }
            });
            yield loading.dismiss();
            return yield modal.present();
        });
    }
};
NotisPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _shared_services_notis_notis_service__WEBPACK_IMPORTED_MODULE_3__.NotisService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__.NativeStorage }
];
NotisPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-notis',
        template: _raw_loader_notis_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_notis_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NotisPage);



/***/ }),

/***/ 32969:
/*!********************************************!*\
  !*** ./src/app/home/notis/notis.page.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container2 {\n  padding-top: 50px;\n  padding: 50px 25px 20px 10px;\n  height: 180px;\n}\n\n.container3 {\n  padding: 30px 10px 20px 10px;\n  height: 700px;\n}\n\n.icondeletehist {\n  height: 21px;\n  width: 21px;\n  display: inline-block;\n  margin-right: 0;\n}\n\n.icondelete {\n  height: 25px;\n  width: 25px;\n  display: inline-block;\n}\n\n.notistitleactive {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 14px;\n  letter-spacing: 0.02em;\n  color: #D23330;\n}\n\n.notisbodyactive {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 14px;\n  letter-spacing: 0.02em;\n  color: #494949;\n  opacity: 0.5;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  /* number of lines to show */\n  line-clamp: 1;\n  -webkit-box-orient: vertical;\n}\n\n.notisdate {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 11px;\n  line-height: 14px;\n  letter-spacing: 0.02em;\n  color: #494949;\n  opacity: 0.5;\n  padding-left: 10px;\n}\n\nion-checkbox {\n  --background: #C5C4C4;\n  --checkmark-color: #3D2C7C;\n  --background-checked: #3D2C7C;\n  opacity: 1;\n}\n\ninput[type=checkbox]::before, input[type=checkbox]::after {\n  background: #C5C4C4;\n  background-color: #C5C4C4;\n  color: #C5C4C4;\n}\n\ninput[type=checkbox]:checked {\n  background: #3D2C7C;\n  color: #3D2C7C;\n  background-color: #3D2C7C;\n  content: \"\";\n  background-image: none;\n}\n\n.semua {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 19px;\n  line-height: 14px;\n  letter-spacing: 0.02em;\n  color: #494949;\n  padding: 20px 10px 40px 30px !important;\n}\n\n.button {\n  background-color: #3D2C7C;\n  border: 1pt solid #3D2C7C;\n  height: 48px;\n  width: 70%;\n  border-radius: 10px;\n  margin: auto;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 21px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSw0QkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQXVCLDRCQUFBO0VBQ2YsYUFBQTtFQUNSLDRCQUFBO0FBQ0o7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0FBQUo7O0FBR0E7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSx1Q0FBQTtBQUFKOztBQUdBO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUFKIiwiZmlsZSI6Im5vdGlzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIyIHtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICBwYWRkaW5nOiA1MHB4IDI1cHggMjBweCAxMHB4O1xuICAgIGhlaWdodDogMTgwcHg7XG59XG5cbi5jb250YWluZXIzIHtcbiAgICBwYWRkaW5nOiAzMHB4IDEwcHggMjBweCAxMHB4O1xuICAgIGhlaWdodDogNzAwcHg7XG59XG5cbi5pY29uZGVsZXRlaGlzdCB7XG4gICAgaGVpZ2h0OiAyMXB4O1xuICAgIHdpZHRoOiAyMXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgLy8gZmxvYXQ6IHJpZ2h0O1xufVxuXG4uaWNvbmRlbGV0ZSB7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLm5vdGlzdGl0bGVhY3RpdmUge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICAgIGNvbG9yOiAjRDIzMzMwO1xufVxuXG4ubm90aXNib2R5YWN0aXZlIHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgICBjb2xvcjogIzQ5NDk0OTtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7IC8qIG51bWJlciBvZiBsaW5lcyB0byBzaG93ICovXG4gICAgICAgICAgICBsaW5lLWNsYW1wOiAxOyBcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIC8vIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuXG4ubm90aXNkYXRlIHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgICBjb2xvcjogIzQ5NDk0OTtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24tY2hlY2tib3gge1xuICAgIC0tYmFja2dyb3VuZDogI0M1QzRDNDtcbiAgICAtLWNoZWNrbWFyay1jb2xvcjogIzNEMkM3QztcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzNEMkM3QztcbiAgICBvcGFjaXR5OiAxO1xufVxuXG5pbnB1dFt0eXBlPWNoZWNrYm94XTo6YmVmb3JlLCBpbnB1dFt0eXBlPWNoZWNrYm94XTo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6ICNDNUM0QzQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M1QzRDNDtcbiAgICBjb2xvcjogI0M1QzRDNDtcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCB7XG4gICAgYmFja2dyb3VuZDogIzNEMkM3QztcbiAgICBjb2xvcjogIzNEMkM3QztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0QyQzdDO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbn1cblxuLnNlbXVhIHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgICBjb2xvcjogIzQ5NDk0OTtcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHggNDBweCAzMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRDJDN0M7XG4gICAgYm9yZGVyOiAxcHQgc29saWQgIzNEMkM3QztcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbjphdXRvO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMjFweDtcbn0iXX0= */");

/***/ }),

/***/ 15834:
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/notis/notis.page.html ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"main\">\n    <div class=\"container2\">\n      <div class=\"header\">\n        <ion-icon name=\"chevron-back-outline\" style=\"float: left;\" (click)=\"back()\"></ion-icon>\n        <span class=\"headertxt\" style=\"width:70%;margin: auto;display: inline-block;\">{{ 'notis.notisumum' | translate }}</span>\n        <ion-img src=\"../../assets/icon/delete.png\" class=\"icondeletehist\" style=\"float: right;\" (click)=\"deletehist()\"></ion-img>\n      </div>\n    </div>\n  </div>\n  <div class=\"main2\">\n    <div class=\"container3\">\n      <div class=\"semua\" *ngIf=\"deleteall == true\">\n        Pilih Semua\n        <div style=\"float: right;\"><ion-checkbox style=\"margin-right:20px;\" (click)=\"checkAll($event)\"></ion-checkbox></div>\n      </div>\n      <div *ngFor=\"let item of checkBoxList;let i=index\" style=\"padding-bottom:20px\">\n        <ion-item-sliding *ngIf=\"item.view == false\">\n          <ion-item style=\"background-color: white;\">  \n            <table style=\"border-bottom: 0.7px solid #E8E8E8; height: 58px;width: 100%;\">\n              <colgroup>\n                <col style=\"width: 10%;\">\n                <col style=\"width: 60%;\">\n                <col style=\"width: 30%;\">\n              </colgroup>\n              <tr>\n                <td (click)=\"openModal(item)\" rowspan=\"2\" style=\"padding:30px 20px\"><ion-img src=\"../../assets/icon/notinew.png\" class=\"icondelete\"></ion-img></td>\n                <td (click)=\"openModal(item)\" class=\"notistitleactive\">{{item.tajuk}}</td>\n                <td rowspan=\"2\" class=\"notisdate\"><span *ngIf=\"i != 0\">{{item.date}} &nbsp;</span>\n                  <input type=\"checkbox\" *ngIf=\"deleteall == true\" style=\"display: inline-block;margin:0;opacity:1\" [(ngModel)]=\"item.selected\"></td>\n              </tr>\n              <tr>\n                <td (click)=\"openModal(item)\" class=\"notisbodyactive\">{{item.keterangan}}</td>\n              </tr>\n            </table>\n          </ion-item>   \n          <ion-item-options side=\"end\" *ngIf=\"item.id != undefined && item.id != null\">\n            <ion-item-option color=\"danger\" style=\"padding: 0px 10px;\"><ion-img src=\"../../assets/icon/delete.png\" class=\"icondelete\" (click)=\"deleteone(item.id)\"></ion-img></ion-item-option>\n          </ion-item-options>  \n        </ion-item-sliding>\n        <ion-item-sliding *ngIf=\"item.view == true\">\n          <ion-item style=\"background-color: white;\">  \n            <table style=\"border-bottom: 0.7px solid #E8E8E8; height: 58px;width: 100%;\">\n              <colgroup>\n                <col style=\"width: 10%;\">\n                <col style=\"width: 60%;\">\n                <col style=\"width: 30%;\">\n              </colgroup>\n              <tr>\n                <td (click)=\"openModal(item)\" rowspan=\"2\" style=\"padding:30px 20px; height:100%;\"><ion-img src=\"../../assets/icon/notiold.png\" class=\"icondelete\" ></ion-img></td>\n                <td (click)=\"openModal(item)\" class=\"notistitleactive\" style=\"opacity: 0.3; height:100%;\">{{item.tajuk}}</td>\n                <td rowspan=\"2\" class=\"notisdate\" ><span *ngIf=\"i != 0\">{{item.date}} &nbsp;</span>\n                  <input type=\"checkbox\" *ngIf=\"deleteall == true\" style=\"display: inline-block;margin:0;opacity:1\" [(ngModel)]=\"item.selected\">\n                </td>\n              </tr>\n              <tr>\n                <td (click)=\"openModal(item)\" class=\"notisbodyactive\" style=\"height:100%;\">{{item.keterangan}}</td>\n              </tr>\n            </table>\n          </ion-item>   \n          <ion-item-options side=\"end\">\n            <ion-item-option color=\"danger\" style=\"padding: 0px 10px;\" (click)=\"deleteone(item.id)\"><ion-img src=\"../../assets/icon/delete.png\" class=\"icondelete\" ></ion-img></ion-item-option>\n          </ion-item-options>  \n        </ion-item-sliding>\n      </div>\n      <div style=\"width: 100%; text-align: center; padding: 20px 0px;\" *ngIf=\"deleteall == true\">\n        <button class=\"button\" (click)=\"deleteallbtn()\">{{ 'notis.buang' | translate }}</button>\n      </div>\n    </div> \n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_notis_notis_module_ts.js.map