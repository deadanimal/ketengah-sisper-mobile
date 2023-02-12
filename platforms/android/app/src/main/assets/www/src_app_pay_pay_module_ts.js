(self["webpackChunkSisper"] = self["webpackChunkSisper"] || []).push([["src_app_pay_pay_module_ts"],{

/***/ 2737:
/*!*******************************************!*\
  !*** ./src/app/pay/pay-routing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PayPageRoutingModule": () => (/* binding */ PayPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _pay_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pay.page */ 48941);




const routes = [
    {
        path: '',
        component: _pay_page__WEBPACK_IMPORTED_MODULE_0__.PayPage
    }
];
let PayPageRoutingModule = class PayPageRoutingModule {
};
PayPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PayPageRoutingModule);



/***/ }),

/***/ 59485:
/*!***********************************!*\
  !*** ./src/app/pay/pay.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PayPageModule": () => (/* binding */ PayPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _pay_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pay-routing.module */ 2737);
/* harmony import */ var _pay_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pay.page */ 48941);
/* harmony import */ var _confirm_pay_confirm_pay_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../confirm-pay/confirm-pay.component */ 67030);








let PayPageModule = class PayPageModule {
};
PayPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _pay_routing_module__WEBPACK_IMPORTED_MODULE_0__.PayPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        ],
        declarations: [_pay_page__WEBPACK_IMPORTED_MODULE_1__.PayPage, _confirm_pay_confirm_pay_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmPayComponent],
    })
], PayPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pay_pay_module_ts.js.map