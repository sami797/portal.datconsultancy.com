"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[6356],{

/***/ 56356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_Xero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83302);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9950);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44414);
const XeroConsentCallback=()=>{let xero=new _modules_Xero__WEBPACK_IMPORTED_MODULE_0__/* .XeroModule */ .L();const authenticate=currentURL=>{xero.authenticate(currentURL).then(res=>{window.location.href="/?xero-authentication=successful";});};(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{const currentURL=window.location.href;authenticate(currentURL);},[]);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (XeroConsentCallback);

/***/ })

}]);