"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[5620],{

/***/ 15620:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28429);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44414);
const ResourcesViewer=()=>{const params=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__/* .useParams */ .g)();const location=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__/* .useLocation */ .zy)();const query=new URLSearchParams(location.search);let authKey=query.get('authKey');let fileKey=params["*"];if(!fileKey){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:"Key not found"});}let resourceUrl=_services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* .BASE_URL */ .C+"resources/all/"+fileKey;if(authKey){resourceUrl=resourceUrl+"?authKey="+authKey;}else{const fileLocationParts=fileKey.split('/');const accessType=fileLocationParts[0];if(accessType!=="public"){const access_token=localStorage.getItem("access_token");if(!access_token){let currentUrl=encodeURIComponent(window.location.href);window.location.href="/login?redirectUrl="+currentUrl;}resourceUrl=resourceUrl+"?authKey="+access_token;}}return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("iframe",{style:{height:'100vh',width:'100vw',border:"none",backgroundColor:'white'},src:resourceUrl,title:"Resource Viewer"});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResourcesViewer);

/***/ })

}]);