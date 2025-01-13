"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[2509],{

/***/ 2509:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Faq)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./src/Components/Templates/Layout/index.tsx + 28 modules
var Layout = __webpack_require__(81168);
// EXTERNAL MODULE: ./node_modules/@ant-design/pro-layout/es/components/PageHeader/index.js + 14 modules
var PageHeader = __webpack_require__(12266);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var dist = __webpack_require__(28429);
// EXTERNAL MODULE: ./src/Components/Atoms/BreadCrumbs/index.tsx
var BreadCrumbs = __webpack_require__(64160);
;// ./src/Components/Organisms/Dashboard/HelpCenter/Faq/style.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const style_module = ({"faqWrap":"style_faqWrap__k8EiD"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/Dashboard/HelpCenter/Faq/details.tsx
const FAQDetailsComponent=_ref=>{let{breadCrumbData,pageHeading,faq,drawerHelp}=_ref;const navigate=(0,dist/* useNavigate */.Zp)();return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[!drawerHelp&&/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(BreadCrumbs/* default */.A,{separator:">",data:breadCrumbData}),/*#__PURE__*/(0,jsx_runtime.jsx)(PageHeader/* PageHeader */.z,{onBack:()=>navigate('/help-center/'+(faq===null||faq===void 0?void 0:faq.FaqsCategory.slug)),title:pageHeading,className:'pa-0 py-2'})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:style_module.faqWrap,children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"mx-5 color-dark-sub dangerouslySetWrap faqsWrap",dangerouslySetInnerHTML:{__html:(faq===null||faq===void 0?void 0:faq.description)||""}})})]});};/* harmony default export */ const details = (FAQDetailsComponent);
// EXTERNAL MODULE: ./src/Components/Organisms/Dashboard/HelpCenter/styles.module.scss
var styles_module = __webpack_require__(47217);
// EXTERNAL MODULE: ./src/Components/Organisms/Skeletons/index.tsx
var Skeletons = __webpack_require__(70619);
// EXTERNAL MODULE: ./src/Modules/FAQs/index.ts
var FAQs = __webpack_require__(7739);
;// ./src/Components/Organisms/Dashboard/HelpCenter/Faq/index.tsx
const FAQDetails=()=>{var _faq$data,_faq$data2;//get the slug from the path name
const slug=window.location.pathname.split('/')[3];const module=(0,react.useMemo)(()=>new FAQs/* FAQModule */.v(),[]);const[faq,setFaq]=(0,react.useState)({loading:true,error:{},data:undefined});const[pageHeader,setPageHeader]=(0,react.useState)('');const getFAQDetailsData=(0,react.useCallback)(()=>{if(slug){module.getRecordBySlug(slug).then(res=>{var _res$data;if(res.data&&(_res$data=res.data)!==null&&_res$data!==void 0&&_res$data.data){var _res$data2,_res$data2$data;setFaq((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},res.data),{},{loading:false}));setPageHeader((_res$data2=res.data)===null||_res$data2===void 0?void 0:(_res$data2$data=_res$data2.data)===null||_res$data2$data===void 0?void 0:_res$data2$data.title);}}).catch(err=>{console.error('Error getting faq details data',err===null||err===void 0?void 0:err.message);});}},[module,slug]);(0,react.useEffect)(()=>{getFAQDetailsData();},[getFAQDetailsData]);const breadCrumbData=[{isLink:true,text:'Home',path:'/'},{isLink:true,text:'Help Center',path:'/help-center'},{isLink:true,text:((_faq$data=faq.data)===null||_faq$data===void 0?void 0:_faq$data.FaqsCategory.title)||"",path:"/help-center/"+((_faq$data2=faq.data)===null||_faq$data2===void 0?void 0:_faq$data2.FaqsCategory.slug)},{isLink:false,text:pageHeader}];return/*#__PURE__*/(0,jsx_runtime.jsx)(Layout/* default */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module/* default */.A.helpCenterWrapper,children:faq.loading?/*#__PURE__*/(0,jsx_runtime.jsx)(Skeletons/* default */.A,{items:10}):/*#__PURE__*/(0,jsx_runtime.jsx)(details,{pageHeading:pageHeader,breadCrumbData:breadCrumbData,faq:faq===null||faq===void 0?void 0:faq.data})})});};/* harmony default export */ const Faq = (FAQDetails);

/***/ })

}]);