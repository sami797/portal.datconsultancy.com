"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[2478],{

/***/ 42478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Details)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./src/Components/Templates/Layout/index.tsx + 28 modules
var Layout = __webpack_require__(81168);
// EXTERNAL MODULE: ./node_modules/antd/es/collapse/index.js + 6 modules
var collapse = __webpack_require__(98412);
// EXTERNAL MODULE: ./node_modules/@ant-design/pro-layout/es/components/PageHeader/index.js + 14 modules
var PageHeader = __webpack_require__(12266);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var dist = __webpack_require__(28429);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var react_router_dom_dist = __webpack_require__(42074);
// EXTERNAL MODULE: ./src/Components/Atoms/BreadCrumbs/index.tsx
var BreadCrumbs = __webpack_require__(64160);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/LinkOutlined.js + 1 modules
var LinkOutlined = __webpack_require__(26142);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/Dashboard/HelpCenter/Details/details.tsx
const{Panel}=collapse/* default */.A;const FAQDetails=_ref=>{let{breadCrumbData,pageHeading,faqC,drawerHelp}=_ref;const navigate=(0,dist/* useNavigate */.Zp)();return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[!drawerHelp&&/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(BreadCrumbs/* default */.A,{separator:">",data:breadCrumbData}),/*#__PURE__*/(0,jsx_runtime.jsx)(PageHeader/* PageHeader */.z,{onBack:()=>navigate('/help-center'),title:pageHeading,className:'pa-0 py-2'})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{display:'flex',flexDirection:'column',gap:'1rem'},children:faqC===null||faqC===void 0?void 0:faqC.Faqs.map((faq,index)=>/*#__PURE__*/(0,jsx_runtime.jsxs)(react_router_dom_dist/* Link */.N_,{style:{border:'1px solid var(--color-light-50)',borderRadius:'0.25rem',padding:'0.5rem',color:'var(--color-dark-main)'},to:"/help-center/".concat(faqC.slug,"/").concat(faq.slug),title:faq===null||faq===void 0?void 0:faq.title,children:[faq.title,/*#__PURE__*/(0,jsx_runtime.jsx)(LinkOutlined/* default */.A,{style:{float:'right'}})]},"help-center-category-faq".concat(index)))})]});};/* harmony default export */ const details = (FAQDetails);
// EXTERNAL MODULE: ./src/Components/Organisms/Dashboard/HelpCenter/styles.module.scss
var styles_module = __webpack_require__(47217);
// EXTERNAL MODULE: ./src/Components/Organisms/Skeletons/index.tsx
var Skeletons = __webpack_require__(70619);
// EXTERNAL MODULE: ./src/Modules/FAQCategory/index.ts
var FAQCategory = __webpack_require__(67174);
;// ./src/Components/Organisms/Dashboard/HelpCenter/Details/index.tsx
const HelpCenter=()=>{//get the slug from the path name
const slug=window.location.pathname.split('/')[2];const module=(0,react.useMemo)(()=>new FAQCategory/* FAQCategoryModule */.F(),[]);const[faq,setFaq]=(0,react.useState)({loading:true,error:{},data:undefined});const[pageHeader,setPageHeader]=(0,react.useState)('');const getFAQDetailsData=(0,react.useCallback)(()=>{if(slug){module.getRecordBySlug(slug).then(res=>{var _res$data;if(res.data&&(_res$data=res.data)!==null&&_res$data!==void 0&&_res$data.data){var _res$data2,_res$data2$data;setFaq((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},res.data),{},{loading:false}));setPageHeader((_res$data2=res.data)===null||_res$data2===void 0?void 0:(_res$data2$data=_res$data2.data)===null||_res$data2$data===void 0?void 0:_res$data2$data.title);}}).catch(err=>{console.error('Error getting faq details data',err===null||err===void 0?void 0:err.message);});}},[module,slug]);(0,react.useEffect)(()=>{getFAQDetailsData();},[getFAQDetailsData]);const breadCrumbData=[{isLink:true,text:'Home',path:'/'},{isLink:true,text:'Help Center',path:'/help-center'},{isLink:false,text:pageHeader}];return/*#__PURE__*/(0,jsx_runtime.jsx)(Layout/* default */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module/* default */.A.helpCenterWrapper,children:faq.loading?/*#__PURE__*/(0,jsx_runtime.jsx)(Skeletons/* default */.A,{items:10}):/*#__PURE__*/(0,jsx_runtime.jsx)(details,{pageHeading:pageHeader,breadCrumbData:breadCrumbData,faqC:faq===null||faq===void 0?void 0:faq.data})})});};/* harmony default export */ const Details = (HelpCenter);

/***/ })

}]);