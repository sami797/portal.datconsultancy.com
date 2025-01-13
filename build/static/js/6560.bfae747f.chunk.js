"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[6560],{

/***/ 87031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S: () => (/* binding */ CardShimmer)
});

// EXTERNAL MODULE: ./node_modules/antd/es/skeleton/index.js + 11 modules
var skeleton = __webpack_require__(46005);
;// ./src/Components/Atoms/CardShimmer/styles.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"card":"styles_card__k61KP"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Atoms/CardShimmer/index.tsx
const CardShimmer=()=>{return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.card,children:/*#__PURE__*/(0,jsx_runtime.jsx)(skeleton/* default */.A,{active:true})});};

/***/ }),

/***/ 7982:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyServices_TechSupport)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./src/Components/Atoms/index.tsx + 12 modules
var Atoms = __webpack_require__(9394);
// EXTERNAL MODULE: ./src/Components/Templates/Layout/index.tsx + 28 modules
var Layout = __webpack_require__(81168);
;// ./src/Components/Organisms/Dashboard/MyServices/TechSupport/styles.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"container":"styles_container__aCgQC","card":"styles_card__6l9vc","cardBody":"styles_cardBody__RMa9n","cardBodyTop":"styles_cardBodyTop__ANmKm","topRight":"styles_topRight__YOpb9","file":"styles_file__NA4qS","cardTitle":"styles_cardTitle__FbsIP","status":"styles_status__4nJPK","cardBodyMiddle":"styles_cardBodyMiddle__JL+j1","purpose":"styles_purpose__FuBcH","cardBodyEnd":"styles_cardBodyEnd__FPqbJ","dateWrap":"styles_dateWrap__uXqsn","fromDate":"styles_fromDate__s+TEx","bold":"styles_bold__doZZb","date":"styles_date__amuqa"});
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./node_modules/antd/es/pagination/index.js + 12 modules
var pagination = __webpack_require__(24575);
// EXTERNAL MODULE: ./src/hooks/index.ts + 5 modules
var hooks = __webpack_require__(91970);
// EXTERNAL MODULE: ./src/Components/Organisms/Dashboard/MyServices/TechSupport/create.tsx
var create = __webpack_require__(51550);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(98341);
// EXTERNAL MODULE: ./node_modules/antd/es/typography/index.js + 15 modules
var typography = __webpack_require__(30377);
// EXTERNAL MODULE: ./node_modules/antd/es/card/index.js + 3 modules
var card = __webpack_require__(2557);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/FileOutlined.js
var FileOutlined = __webpack_require__(56272);
// EXTERNAL MODULE: ./src/helpers/commonEnums.ts
var commonEnums = __webpack_require__(2360);
// EXTERNAL MODULE: ./src/helpers/dateHandler.ts
var dateHandler = __webpack_require__(98933);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/Dashboard/MyServices/TechSupport/card.tsx
const{Paragraph}=typography/* default */.A;const TechSupportCard=_ref=>{let{task,isFullWidth,onClick}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.A,{onClick:onClick,hoverable:true,bodyStyle:{height:'100%'},className:"".concat(styles_module.card," ").concat(isFullWidth?styles_module.fullWidth:''),children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.cardBody,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.cardBodyTop,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.cardTitle,children:["TCH-",task.id]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.topRight,children:[task._count.Resources>0&&/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.file,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(FileOutlined/* default */.A,{}),"\xA0",task._count.Resources]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.status,style:{backgroundColor:commonEnums/* taskColumnLabelsColors */.H7[task===null||task===void 0?void 0:task.status]},children:commonEnums/* techSupportColumnLabels */.V8[task.status]})]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Paragraph,{ellipsis:{rows:2},className:styles_module.cardBodyMiddle,children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.purpose,children:task.title})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.cardBodyEnd,children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.date,children:(0,dateHandler/* convertDate */.ic)(task.addedDate,"dd M,yy")})})]})});};
// EXTERNAL MODULE: ./src/Components/Atoms/CardShimmer/index.tsx + 1 modules
var CardShimmer = __webpack_require__(87031);
// EXTERNAL MODULE: ./src/Modules/Task/permissions.ts
var Task_permissions = __webpack_require__(15659);
// EXTERNAL MODULE: ./src/Modules/Task/index.ts
var Task = __webpack_require__(12671);
// EXTERNAL MODULE: ./src/Components/Organisms/Dashboard/SupportBoard/TaskDetailsModal/index.tsx + 2 modules
var TaskDetailsModal = __webpack_require__(73656);
// EXTERNAL MODULE: ./src/helpers/common.ts
var common = __webpack_require__(88132);
;// ./src/Components/Organisms/Dashboard/MyServices/TechSupport/index.tsx
const breadCrumbsData=[{text:"Home",isLink:true,path:"/"},{isLink:true,text:"My Services",path:"/myservices"},{isLink:false,text:"Tech Support Request"}];const TechSupport=()=>{// available permissions for the properties page
const permissionSlug=(0,common/* getPermissionSlugs */.AH)(Task_permissions/* TaskPermissionsEnum */.X);const{userPermissions}=(0,es/* useSelector */.d4)(state=>state.usersReducer);const permissions=userPermissions;const[selectedTask,setSelectedTask]=(0,react.useState)();const[openDetailModal,setOpenDetailModal]=(0,react.useState)(false);const[currentEditType,setcurrentEditType]=(0,react.useState)({recordId:0,openModal:false});const[filters,setFilters]=(0,react.useState)({page:1,perPage:6,type:"assignedTask"});const module=(0,react.useMemo)(()=>new Task/* TaskModule */._(),[]);const{data,onRefresh,setData,loading,meta}=(0,hooks/* useFetchData */.Gs)({method:module.getTechSupportRequest,initialQuery:(0,objectSpread2/* default */.A)({},filters)});const onCancelClick=()=>{setcurrentEditType((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},currentEditType),{},{openModal:!currentEditType.openModal}));};return/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.A,{permissionSlug:permissionSlug,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* PageHeader */.zY,{heading:"Tech Support Request",breadCrumbData:breadCrumbsData,showAdd:true,buttonText:"New Request",onButtonClick:onCancelClick}),/*#__PURE__*/(0,jsx_runtime.jsx)("section",{className:styles_module.container,children:loading?[...new Array(6)].map((_,index)=>/*#__PURE__*/(0,jsx_runtime.jsx)(CardShimmer/* CardShimmer */.S,{},"shimmer".concat(index))):(data===null||data===void 0?void 0:data.length)!==0?data===null||data===void 0?void 0:data.map((task,index)=>/*#__PURE__*/(0,jsx_runtime.jsx)(TechSupportCard,{onClick:()=>{setSelectedTask(task.id);setOpenDetailModal(!openDetailModal);},task:task},index)):/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{margin:'auto'},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomEmpty */.ZX,{description:"No requests found for the given filters"})})}),/*#__PURE__*/(0,jsx_runtime.jsx)(pagination/* default */.A,{hideOnSinglePage:true,current:meta===null||meta===void 0?void 0:meta.page,total:meta===null||meta===void 0?void 0:meta.total,pageSize:(meta===null||meta===void 0?void 0:meta.perPage)||0,onChange:(page,pageSize)=>{onRefresh((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},filters),{},{page:page,perPage:pageSize}));},style:{alignSelf:"flex-end"}}),/*#__PURE__*/(0,jsx_runtime.jsx)(create/* TechSupportModal */.n,{reloadTableData:onRefresh,onCancel:onCancelClick,openModal:currentEditType.openModal,permissions:permissions}),selectedTask&&/*#__PURE__*/(0,jsx_runtime.jsx)(TaskDetailsModal/* TaskDetailsModal */.H,{openModal:openDetailModal,onCancel:()=>{setOpenDetailModal(!openDetailModal);},id:selectedTask,onUpdate:onRefresh})]});};/* harmony default export */ const MyServices_TechSupport = (TechSupport);

/***/ }),

/***/ 78887:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58168);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9950);
/* harmony import */ var _ant_design_icons_svg_es_asn_CopyOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55712);
/* harmony import */ var _components_AntdIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61187);

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var CopyOutlined = function CopyOutlined(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_AntdIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({}, props, {
    ref: ref,
    icon: _ant_design_icons_svg_es_asn_CopyOutlined__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A
  }));
};
if (false) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(CopyOutlined));

/***/ }),

/***/ 56272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58168);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9950);
/* harmony import */ var _ant_design_icons_svg_es_asn_FileOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62259);
/* harmony import */ var _components_AntdIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61187);

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var FileOutlined = function FileOutlined(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_AntdIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({}, props, {
    ref: ref,
    icon: _ant_design_icons_svg_es_asn_FileOutlined__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A
  }));
};
if (false) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(FileOutlined));

/***/ }),

/***/ 31023:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ icons_FolderTwoTone)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
;// ./node_modules/@ant-design/icons-svg/es/asn/FolderTwoTone.js
// This icon file is generated automatically.
var FolderTwoTone = {
  "icon": function render(primaryColor, secondaryColor) {
    return {
      "tag": "svg",
      "attrs": {
        "viewBox": "64 64 896 896",
        "focusable": "false"
      },
      "children": [{
        "tag": "path",
        "attrs": {
          "d": "M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z",
          "fill": primaryColor
        }
      }, {
        "tag": "path",
        "attrs": {
          "d": "M372.5 256H184v512h656V370.4H492.1z",
          "fill": secondaryColor
        }
      }]
    };
  },
  "name": "folder",
  "theme": "twotone"
};
/* harmony default export */ const asn_FolderTwoTone = (FolderTwoTone);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 5 modules
var AntdIcon = __webpack_require__(61187);
;// ./node_modules/@ant-design/icons/es/icons/FolderTwoTone.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var FolderTwoTone_FolderTwoTone = function FolderTwoTone(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.A, (0,esm_extends/* default */.A)({}, props, {
    ref: ref,
    icon: asn_FolderTwoTone
  }));
};
if (false) {}
/* harmony default export */ const icons_FolderTwoTone = (/*#__PURE__*/react.forwardRef(FolderTwoTone_FolderTwoTone));

/***/ }),

/***/ 78188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58168);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9950);
/* harmony import */ var _ant_design_icons_svg_es_asn_PaperClipOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21053);
/* harmony import */ var _components_AntdIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61187);

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var PaperClipOutlined = function PaperClipOutlined(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_AntdIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({}, props, {
    ref: ref,
    icon: _ant_design_icons_svg_es_asn_PaperClipOutlined__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A
  }));
};
if (false) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(PaperClipOutlined));

/***/ }),

/***/ 4228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ icons_ShareAltOutlined)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
;// ./node_modules/@ant-design/icons-svg/es/asn/ShareAltOutlined.js
// This icon file is generated automatically.
var ShareAltOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M752 664c-28.5 0-54.8 10-75.4 26.7L469.4 540.8a160.68 160.68 0 000-57.6l207.2-149.9C697.2 350 723.5 360 752 360c66.2 0 120-53.8 120-120s-53.8-120-120-120-120 53.8-120 120c0 11.6 1.6 22.7 4.7 33.3L439.9 415.8C410.7 377.1 364.3 352 312 352c-88.4 0-160 71.6-160 160s71.6 160 160 160c52.3 0 98.7-25.1 127.9-63.8l196.8 142.5c-3.1 10.6-4.7 21.8-4.7 33.3 0 66.2 53.8 120 120 120s120-53.8 120-120-53.8-120-120-120zm0-476c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52zM312 600c-48.5 0-88-39.5-88-88s39.5-88 88-88 88 39.5 88 88-39.5 88-88 88zm440 236c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52z"
      }
    }]
  },
  "name": "share-alt",
  "theme": "outlined"
};
/* harmony default export */ const asn_ShareAltOutlined = (ShareAltOutlined);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 5 modules
var AntdIcon = __webpack_require__(61187);
;// ./node_modules/@ant-design/icons/es/icons/ShareAltOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var ShareAltOutlined_ShareAltOutlined = function ShareAltOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.A, (0,esm_extends/* default */.A)({}, props, {
    ref: ref,
    icon: asn_ShareAltOutlined
  }));
};
if (false) {}
/* harmony default export */ const icons_ShareAltOutlined = (/*#__PURE__*/react.forwardRef(ShareAltOutlined_ShareAltOutlined));

/***/ }),

/***/ 53983:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ icons_WhatsAppOutlined)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
;// ./node_modules/@ant-design/icons-svg/es/asn/WhatsAppOutlined.js
// This icon file is generated automatically.
var WhatsAppOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "defs",
      "attrs": {},
      "children": [{
        "tag": "style",
        "attrs": {}
      }]
    }, {
      "tag": "path",
      "attrs": {
        "d": "M713.5 599.9c-10.9-5.6-65.2-32.2-75.3-35.8-10.1-3.8-17.5-5.6-24.8 5.6-7.4 11.1-28.4 35.8-35 43.3-6.4 7.4-12.9 8.3-23.8 2.8-64.8-32.4-107.3-57.8-150-131.1-11.3-19.5 11.3-18.1 32.4-60.2 3.6-7.4 1.8-13.7-1-19.3-2.8-5.6-24.8-59.8-34-81.9-8.9-21.5-18.1-18.5-24.8-18.9-6.4-.4-13.7-.4-21.1-.4-7.4 0-19.3 2.8-29.4 13.7-10.1 11.1-38.6 37.8-38.6 92s39.5 106.7 44.9 114.1c5.6 7.4 77.7 118.6 188.4 166.5 70 30.2 97.4 32.8 132.4 27.6 21.3-3.2 65.2-26.6 74.3-52.5 9.1-25.8 9.1-47.9 6.4-52.5-2.7-4.9-10.1-7.7-21-13z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "d": "M925.2 338.4c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"
      }
    }]
  },
  "name": "whats-app",
  "theme": "outlined"
};
/* harmony default export */ const asn_WhatsAppOutlined = (WhatsAppOutlined);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 5 modules
var AntdIcon = __webpack_require__(61187);
;// ./node_modules/@ant-design/icons/es/icons/WhatsAppOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var WhatsAppOutlined_WhatsAppOutlined = function WhatsAppOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.A, (0,esm_extends/* default */.A)({}, props, {
    ref: ref,
    icon: asn_WhatsAppOutlined
  }));
};
if (false) {}
/* harmony default export */ const icons_WhatsAppOutlined = (/*#__PURE__*/react.forwardRef(WhatsAppOutlined_WhatsAppOutlined));

/***/ })

}]);