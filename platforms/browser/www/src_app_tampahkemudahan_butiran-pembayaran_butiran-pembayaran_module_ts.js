(self["webpackChunkSisper"] = self["webpackChunkSisper"] || []).push([["src_app_tampahkemudahan_butiran-pembayaran_butiran-pembayaran_module_ts"],{

/***/ 10419:
/*!**************************************************************!*\
  !*** ./src/app/shared/services/fasiliti/fasiliti.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FasilitiService": () => (/* binding */ FasilitiService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);





let FasilitiService = class FasilitiService {
    constructor(http) {
        this.http = http;
        this.rates = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
        this.currentCourt = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('none');
    }
    getfutsal() {
        var AlatanURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "futsal";
        return this.http.get(AlatanURL);
    }
    getbadminton() {
        var AlatanURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "badminton";
        return this.http.get(AlatanURL);
    }
    getFasilities() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "fasiliti";
        return this.http.get(url);
    }
};
FasilitiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
FasilitiService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], FasilitiService);



/***/ }),

/***/ 84491:
/*!*****************************************************************************************!*\
  !*** ./src/app/tampahkemudahan/butiran-pembayaran/butiran-pembayaran-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButiranPembayaranPageRoutingModule": () => (/* binding */ ButiranPembayaranPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _butiran_pembayaran_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./butiran-pembayaran.page */ 54635);




const routes = [
    {
        path: '',
        component: _butiran_pembayaran_page__WEBPACK_IMPORTED_MODULE_0__.ButiranPembayaranPage
    }
];
let ButiranPembayaranPageRoutingModule = class ButiranPembayaranPageRoutingModule {
};
ButiranPembayaranPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ButiranPembayaranPageRoutingModule);



/***/ }),

/***/ 93285:
/*!*********************************************************************************!*\
  !*** ./src/app/tampahkemudahan/butiran-pembayaran/butiran-pembayaran.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButiranPembayaranPageModule": () => (/* binding */ ButiranPembayaranPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _butiran_pembayaran_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./butiran-pembayaran-routing.module */ 84491);
/* harmony import */ var _butiran_pembayaran_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./butiran-pembayaran.page */ 54635);







let ButiranPembayaranPageModule = class ButiranPembayaranPageModule {
};
ButiranPembayaranPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _butiran_pembayaran_routing_module__WEBPACK_IMPORTED_MODULE_0__.ButiranPembayaranPageRoutingModule
        ],
        declarations: [_butiran_pembayaran_page__WEBPACK_IMPORTED_MODULE_1__.ButiranPembayaranPage]
    })
], ButiranPembayaranPageModule);



/***/ }),

/***/ 54635:
/*!*******************************************************************************!*\
  !*** ./src/app/tampahkemudahan/butiran-pembayaran/butiran-pembayaran.page.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButiranPembayaranPage": () => (/* binding */ ButiranPembayaranPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_butiran_pembayaran_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./butiran-pembayaran.page.html */ 62876);
/* harmony import */ var _butiran_pembayaran_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./butiran-pembayaran.page.scss */ 92411);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_shared_services_fasiliti_fasiliti_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/fasiliti/fasiliti.service */ 10419);







let ButiranPembayaranPage = class ButiranPembayaranPage {
    constructor(location, route, router, fasilitiService) {
        this.location = location;
        this.route = route;
        this.router = router;
        this.fasilitiService = fasilitiService;
    }
    ngOnInit() {
        this.data = this.router.getCurrentNavigation().extras.state.data;
        this.court = this.fasilitiService.currentCourt.value;
        console.log("payment details ", this.data);
    }
    back() {
        this.location.back();
    }
    bayar() {
        this.router.navigate(['main/tabs/bayaran']);
    }
};
ButiranPembayaranPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_shared_services_fasiliti_fasiliti_service__WEBPACK_IMPORTED_MODULE_2__.FasilitiService }
];
ButiranPembayaranPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-butiran-pembayaran',
        template: _raw_loader_butiran_pembayaran_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_butiran_pembayaran_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ButiranPembayaranPage);



/***/ }),

/***/ 92411:
/*!*********************************************************************************!*\
  !*** ./src/app/tampahkemudahan/butiran-pembayaran/butiran-pembayaran.page.scss ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".info {\n  margin-top: 20px;\n  color: #3D2C7C;\n  margin-left: 25%;\n}\n\n.container2 {\n  padding-top: 30px;\n  height: 650px;\n  text-align: center;\n}\n\n.label {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #494949;\n  padding: 10px 0px;\n}\n\n.select {\n  width: 100%;\n  height: 45px;\n  background: #FFFFFF;\n  border: 1px solid #3D2C7C;\n  box-sizing: border-box;\n  border-radius: 9px;\n  --placeholder-color:#494949 !important;\n  box-shadow: inset -4px -4px 9px rgba(255, 255, 255, 0.6), inset 4px 4px 14px #C5D7EE;\n  padding: 0px 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: left;\n}\n\n.button {\n  background-color: #3D2C7C;\n  border: 1pt solid #3D2C7C;\n  height: 48px;\n  width: 100%;\n  border-radius: 10px;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 21px;\n}\n\nul.ks-cboxtags {\n  list-style: none;\n  padding: 5px;\n}\n\nul.ks-cboxtags li {\n  display: inline;\n}\n\nul.ks-cboxtags li label {\n  display: inline-block;\n  background-color: rgba(255, 255, 255, 0.9);\n  border: 2px solid rgba(139, 139, 139, 0.3);\n  color: #adadad;\n  border-radius: 25px;\n  white-space: nowrap;\n  margin: 3px 0px;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  transition: all 0.2s;\n}\n\nul.ks-cboxtags li label {\n  padding: 8px 12px;\n  cursor: pointer;\n}\n\nul.ks-cboxtags li input[type=checkbox]:checked + label {\n  border: 2px solid #3D2C7C;\n  background-color: #12bbd4;\n  color: #fff;\n  transition: 0.2s;\n}\n\nul.ks-cboxtags li input[type=checkbox] {\n  display: absolute;\n}\n\nul.ks-cboxtags li input[type=checkbox] {\n  position: absolute;\n  opacity: 0;\n}\n\nul.ks-cboxtags li input[type=checkbox]:focus + label {\n  border: 2px solid #3D2C7C;\n}\n\nul.ks-cboxtags li input[type=radio]:checked + label {\n  border: 2px solid #3D2C7C;\n  background-color: #12bbd4;\n  color: #fff;\n  transition: all 0.2s;\n}\n\nul.ks-cboxtags li input[type=radio] {\n  display: absolute;\n}\n\nul.ks-cboxtags li input[type=radio] {\n  position: absolute;\n  opacity: 0;\n}\n\nul.ks-cboxtags li input[type=radio]:focus + label {\n  border: 2px solid #3D2C7C;\n}\n\n.two-columns {\n  width: 300px;\n  height: 400px;\n  border: 1px solid;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dGlyYW4tcGVtYmF5YXJhbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0Esb0ZBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDQSxlQUFBO0FBRUE7O0FBQUE7RUFDRSxxQkFBQTtFQUNBLDBDQUFBO0VBQ0EsMENBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBR0EsaUJBQUE7RUFDQSx3Q0FBQTtFQUNBLG9CQUFBO0FBR0Y7O0FBQUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFHRjs7QUFBQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFBQTtFQUNBLGlCQUFBO0FBR0E7O0FBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFHQTs7QUFBQTtFQUNBLHlCQUFBO0FBR0E7O0FBQUE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FBR0Y7O0FBQUE7RUFDQSxpQkFBQTtBQUdBOztBQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBR0E7O0FBQUE7RUFDQSx5QkFBQTtBQUdBOztBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUVBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGNBQUE7QUFFRiIsImZpbGUiOiJidXRpcmFuLXBlbWJheWFyYW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZm97XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGNvbG9yOiAjM0QyQzdDO1xuICBtYXJnaW4tbGVmdDogMjUlO1xufVxuXG4uY29udGFpbmVyMiB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBoZWlnaHQ6IDY1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sYWJlbCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgY29sb3I6ICM0OTQ5NDk7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xufVxuXG4uc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDVweDtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzNEMkM3QztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiM0OTQ5NDkgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogaW5zZXQgLTRweCAtNHB4IDlweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiksIGluc2V0IDRweCA0cHggMTRweCAjQzVEN0VFO1xuICBwYWRkaW5nOiAwcHggMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0QyQzdDO1xuICBib3JkZXI6IDFwdCBzb2xpZCAjM0QyQzdDO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG59XG5cbnVsLmtzLWNib3h0YWdzIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogNXB4O1xufVxudWwua3MtY2JveHRhZ3MgbGl7XG5kaXNwbGF5OiBpbmxpbmU7XG59XG51bC5rcy1jYm94dGFncyBsaSBsYWJlbHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC45KTtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxMzksIDEzOSwgMTM5LCAuMyk7XG4gIGNvbG9yOiAjYWRhZGFkO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtYXJnaW46IDNweCAwcHg7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogYWxsIC4ycztcbn1cblxudWwua3MtY2JveHRhZ3MgbGkgbGFiZWwge1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG51bC5rcy1jYm94dGFncyBsaSBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIGxhYmVsIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzNEMkM3QztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyYmJkNDtcbiAgY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IC4ycztcbn1cblxudWwua3MtY2JveHRhZ3MgbGkgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbmRpc3BsYXk6IGFic29sdXRlO1xufVxuXG51bC5rcy1jYm94dGFncyBsaSBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xucG9zaXRpb246IGFic29sdXRlO1xub3BhY2l0eTogMDtcbn1cblxudWwua3MtY2JveHRhZ3MgbGkgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmZvY3VzICsgbGFiZWwge1xuYm9yZGVyOiAycHggc29saWQgIzNEMkM3Qztcbn1cblxudWwua3MtY2JveHRhZ3MgbGkgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMzRDJDN0M7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMmJiZDQ7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xufVxuXG51bC5rcy1jYm94dGFncyBsaSBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuZGlzcGxheTogYWJzb2x1dGU7XG59XG5cbnVsLmtzLWNib3h0YWdzIGxpIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG5wb3NpdGlvbjogYWJzb2x1dGU7XG5vcGFjaXR5OiAwO1xufVxuXG51bC5rcy1jYm94dGFncyBsaSBpbnB1dFt0eXBlPVwicmFkaW9cIl06Zm9jdXMgKyBsYWJlbCB7XG5ib3JkZXI6IDJweCBzb2xpZCAjM0QyQzdDO1xufVxuXG4udHdvLWNvbHVtbnN7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG5cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4iXX0= */");

/***/ }),

/***/ 62876:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tampahkemudahan/butiran-pembayaran/butiran-pembayaran.page.html ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ion-content>\n    <div class=\"main\">\n      <div class=\"container\">\n        <div class=\"header\">\n          <ion-icon name=\"chevron-back-outline\" style=\"float: left;\" (click)=\"back()\"></ion-icon>\n          <span class=\"headertxt\">\n            <div style=\"width:fit-content;margin: auto;\">\n              Butiran Pembayaran</div>\n          </span>\n        </div>\n        <div style=\"padding-top: 40px;\">\n          <ion-img src=\"../../assets/icon/fasilitiHead.png\" class=\"icontetapan\"></ion-img>\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"info\" style=\"margin-left:15%\">\n\n      <div>\n        <label style=\"margin-bottom: 12px; font-size: 12px;\">Tempahan</label><br>\n        <span style=\"margin-bottom: 18px; \">{{data.fasiliti}} - {{court}}</span><br>\n        <label style=\"margin-bottom: 12px; font-size: 12px;\" for=\"\">Tarikh</label><br>\n        <span style=\"margin-bottom: 18px\">{{data.tarikh}}</span><br>\n        <label for=\"\" style=\"margin-bottom: 8px; font-size: 12px;\">Masa</label><br>\n        <span style=\"margin-bottom: 30px; \">{{data.masa.split(',')[0] }}:00 -\n          {{data.masa.split(',')[data.masa.split(',').length -1] }}:00</span><br>\n      </div>\n    </div>\n\n    <div style=\"marign-top: 50px; margin-left: 50px;\">\n\n      <span style=\"font-size: 11px; color: black;\">JUMLAH KESELURUHAN (RM)</span>\n\n      <span style=\"font-size: 30px; font-weight: bolder; color: #D23330;\">\n        {{data.rate * data.masa.split(',').length}}</span>\n\n\n    </div>\n\n    <div style=\"display :flex; justify-content: center; align-items: center\">\n      <button style=\"margin-top: 50px; width: 250px; \" ion-button class=\" button\" (click)=\"bayar()\">Bayar (1)</button>\n    </div>\n\n\n  </ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_tampahkemudahan_butiran-pembayaran_butiran-pembayaran_module_ts.js.map