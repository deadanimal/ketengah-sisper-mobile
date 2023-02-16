(self["webpackChunkSisper"] = self["webpackChunkSisper"] || []).push([["src_app_firstime_firstime_module_ts"],{

/***/ 54772:
/*!*****************************************************!*\
  !*** ./src/app/firstime/firstime-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirstimePageRoutingModule": () => (/* binding */ FirstimePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _firstime_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firstime.page */ 63538);




const routes = [
    {
        path: '',
        component: _firstime_page__WEBPACK_IMPORTED_MODULE_0__.FirstimePage
    }
];
let FirstimePageRoutingModule = class FirstimePageRoutingModule {
};
FirstimePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FirstimePageRoutingModule);



/***/ }),

/***/ 93879:
/*!*********************************************!*\
  !*** ./src/app/firstime/firstime.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirstimePageModule": () => (/* binding */ FirstimePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _firstime_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firstime-routing.module */ 54772);
/* harmony import */ var _firstime_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firstime.page */ 63538);







let FirstimePageModule = class FirstimePageModule {
};
FirstimePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _firstime_routing_module__WEBPACK_IMPORTED_MODULE_0__.FirstimePageRoutingModule
        ],
        declarations: [_firstime_page__WEBPACK_IMPORTED_MODULE_1__.FirstimePage]
    })
], FirstimePageModule);



/***/ }),

/***/ 63538:
/*!*******************************************!*\
  !*** ./src/app/firstime/firstime.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirstimePage": () => (/* binding */ FirstimePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_firstime_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./firstime.page.html */ 75351);
/* harmony import */ var _firstime_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firstime.page.scss */ 83200);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/user/user.service */ 34758);







let FirstimePage = class FirstimePage {
    constructor(route, router, userService, loadingController, alertController) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.route.queryParams.subscribe((params) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (this.router.getCurrentNavigation().extras.state) {
                this.user = this.router.getCurrentNavigation().extras.state.user;
                console.log('list', this.user);
            }
        }));
    }
    ngOnInit() {
        console.log('list', this.user);
    }
    verifycode() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            if (this.code == this.user.code) {
                var type = 'code';
                this.userService.update(type, this.user, this.user.user_id).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                    console.log(res);
                    yield loading.dismiss();
                    this.router.navigate(['/main']);
                }), (res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                    console.log(res);
                    yield loading.dismiss();
                    const alert = yield this.alertController.create({
                        header: 'Update failed',
                        message: res.message,
                        buttons: ['OK'],
                    });
                    yield alert.present();
                }));
            }
            else {
                yield loading.dismiss();
                const alert = yield this.alertController.create({
                    header: 'Update failed',
                    message: "Kod yang Diberikan Tidak Tepat",
                    buttons: ['OK'],
                });
                yield alert.present();
            }
        });
    }
};
FirstimePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
FirstimePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-firstime',
        template: _raw_loader_firstime_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_firstime_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FirstimePage);



/***/ }),

/***/ 83200:
/*!*********************************************!*\
  !*** ./src/app/firstime/firstime.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".scroll-content {\n  padding-bottom: 0 !important;\n}\n\npage-login {\n  font-size: 13px;\n}\n\n.input-div {\n  padding-top: 25px;\n}\n\n.input {\n  border: 1pt solid black;\n  padding: 10px 10px 10px 10px;\n  border-radius: 10px;\n  height: 48px;\n  background-color: white;\n  color: black;\n}\n\n.button {\n  background-color: #3D2C7C;\n  height: 48px;\n  width: 100%;\n  border-radius: 10px;\n}\n\n.label {\n  color: white;\n}\n\n.forgotpass {\n  width: 100%;\n  text-align: right;\n  padding: 3px 10px 0px 0px;\n  color: white;\n}\n\n.divall {\n  height: 100%;\n  width: 100%;\n}\n\n.iconsisper {\n  width: 89px;\n  height: 110px;\n  margin: auto;\n  text-align: center;\n  padding-bottom: 15px;\n}\n\n.iconsisper2 {\n  width: 205px;\n  height: 50px;\n  margin: auto;\n  text-align: center;\n}\n\n.loginhead {\n  padding-top: 70px;\n  margin: auto;\n  text-align: center;\n}\n\n.lower-content {\n  padding-top: 150px;\n  text-align: center;\n  width: 100%;\n}\n\n.ketengahword {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 10px;\n  line-height: 15px;\n  letter-spacing: 3px;\n  color: #FFFFFF;\n  width: 100%;\n}\n\nion-content {\n  --background: linear-gradient(rgba(61, 44, 124, .9) 27.6%, rgba(201, 87, 121, .9) 66.15%, rgba(117, 5, 4, .9) 100%), url(\"/assets/icon/background.png\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpcnN0aW1lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0FBQ0o7O0FBRUE7RUFFSSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksdUJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUdBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUdJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBRko7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUZKOztBQUtBO0VBQ0ksdUpBQUE7QUFGSiIsImZpbGUiOiJmaXJzdGltZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nyb2xsLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxuIH1cclxuXHJcbnBhZ2UtbG9naW4ge1xyXG4gICAgLy8gZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcclxuICAgIGZvbnQtc2l6ZToxM3B4O1xyXG59XHJcblxyXG4uaW5wdXQtZGl2IHtcclxuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gICAgYm9yZGVyOiAxcHQgc29saWQgYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRDJDN0M7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5sYWJlbCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5mb3Jnb3RwYXNzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjpyaWdodDtcclxuICAgIHBhZGRpbmc6M3B4IDEwcHggMHB4IDBweDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG4uZGl2YWxsIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaWNvbnNpc3BlciB7XHJcbiAgICB3aWR0aDogODlweDtcclxuICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmljb25zaXNwZXIyIHtcclxuICAgIHdpZHRoOiAyMDVweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ2luaGVhZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogNzBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxvd2VyLWNvbnRlbnQge1xyXG4gICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy8gYm90dG9tOiAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmtldGVuZ2Fod29yZCB7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSg2MSwgNDQsIDEyNCwgLjkpIDI3LjYlLCByZ2JhKDIwMSwgODcsIDEyMSwgLjkpIDY2LjE1JSwgcmdiYSgxMTcsIDUsIDQsIC45KSAxMDAlKSwgdXJsKCcvYXNzZXRzL2ljb24vYmFja2dyb3VuZC5wbmcnKTtcclxufVxyXG5cclxuLy8gLmJhY2tncm91bmQge1xyXG4vLyAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoNjEsIDQ0LCAxMjQsIC45KSAyNy42JSwgcmdiYSgyMDEsIDg3LCAxMjEsIC45KSA2Ni4xNSUsIHJnYmEoMTE3LCA1LCA0LCAuOSkgMTAwJSksIHVybCgnL2Fzc2V0cy9pY29uL2JhY2tncm91bmQucG5nJyk7XHJcbi8vIH1cclxuIl19 */");

/***/ }),

/***/ 75351:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/firstime/firstime.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content padding>\r\n  <div class=\"divall scroll-content\">\r\n    <ion-grid >\r\n      <ion-row>\r\n        <div class=\"loginhead\" style=\"height:200px;\">\r\n          <ion-img class=\"iconsisper\" src=\"../../assets/icon/sisperlogin.png\"></ion-img>\r\n          <ion-img class=\"iconsisper2\" src=\"../../assets/icon/sisperlogin2.png\"></ion-img>\r\n        </div>\r\n      </ion-row>\r\n      <ion-row>\r\n          <div style=\"padding: 50px 50px 10px 50px;width: 100%;\">\r\n            <div class=\"input-div\">\r\n              <label class=\"label\">Kod Pengaktifan</label>\r\n                <div style=\"padding-top: 10px;\">\r\n                  <ion-input type=\"tel\" maxlength=\"6\" minlength=\"6\" class=\"input\" [(ngModel)]=\"code\"></ion-input>\r\n                </div>\r\n            </div>\r\n            <div style=\"padding-top: 35px;\">\r\n              <button ion-button class=\"button\" (click)=\"verifycode()\">Sahkan Akaun</button>\r\n            </div>\r\n          </div>\r\n      </ion-row>  \r\n    </ion-grid>\r\n\r\n        <div class=\"lower-content\">\r\n          <ion-img src=\"../../assets/icon/ketengah.png\" style=\"width: 46.51px;height: 61px;margin-left: auto;\r\n          margin-right: auto;padding-bottom: 10px;\"></ion-img>\r\n          <div class=\"ketengahword\">LEMBAGA KEMAJUAN TERENGGANU TENGAH</div>\r\n        </div>\r\n        \r\n  </div>\r\n  \r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_firstime_firstime_module_ts.js.map