"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[9490],{

/***/ 79490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Dashboard_MyServices)
});

// EXTERNAL MODULE: ./src/Components/Atoms/index.tsx + 12 modules
var Atoms = __webpack_require__(9394);
// EXTERNAL MODULE: ./src/Components/Templates/Layout/index.tsx + 28 modules
var Layout = __webpack_require__(81168);
;// ./src/Components/Organisms/Dashboard/MyServices/styles.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"container":"styles_container__4uuCY","card":"styles_card__PNauS","cardBody":"styles_cardBody__82rEn","cardTitle":"styles_cardTitle__dkuy0","icon":"styles_icon__hghvD"});
// EXTERNAL MODULE: ./src/Modules/Diary/permissions.ts
var permissions = __webpack_require__(35258);
// EXTERNAL MODULE: ./node_modules/antd/es/card/index.js + 3 modules
var card = __webpack_require__(2557);
// EXTERNAL MODULE: ./src/helpers/commonEnums.ts
var commonEnums = __webpack_require__(2360);
// EXTERNAL MODULE: ./src/helpers/common.ts
var common = __webpack_require__(88132);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/Dashboard/MyServices/index.tsx
const breadCrumbsData=[{text:"Home",isLink:true,path:"/"},{isLink:false,text:"My Services"}];const MyServices=()=>{// available permissions for the properties page
const permissionSlug=(0,common/* getPermissionSlugs */.AH)(permissions/* DiaryPermissionsEnum */.R);return/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.A,{permissionSlug:permissionSlug,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* PageHeader */.zY,{heading:"My Services",breadCrumbData:breadCrumbsData}),/*#__PURE__*/(0,jsx_runtime.jsx)("section",{className:styles_module.container,children:commonEnums/* MyServices */.t$.map((service,index)=>/*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.A,{hoverable:true,className:styles_module.card,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("a",{href:service.link,className:styles_module.cardBody,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("img",{className:styles_module.icon,src:service.icon,alt:"icon"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:styles_module.cardTitle,children:service.title})]})},index))})]});};/* harmony default export */ const Dashboard_MyServices = (MyServices);

/***/ }),

/***/ 35258:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ DiaryPermissionsEnum)
/* harmony export */ });
let DiaryPermissionsEnum=/*#__PURE__*/function(DiaryPermissionsEnum){DiaryPermissionsEnum["CREATE"]="createDairy";DiaryPermissionsEnum["UPDATE"]="updateDairy";DiaryPermissionsEnum["DELETE"]="deleteDairy";DiaryPermissionsEnum["READ"]="readDairy";return DiaryPermissionsEnum;}({});

/***/ })

}]);