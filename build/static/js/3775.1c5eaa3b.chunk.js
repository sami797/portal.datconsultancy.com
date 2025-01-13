"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[3775],{

/***/ 73775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Dashboard_HelpCenter)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./src/Modules/FAQCategory/index.ts
var FAQCategory = __webpack_require__(67174);
// EXTERNAL MODULE: ./src/Components/Templates/Layout/index.tsx + 28 modules
var Layout = __webpack_require__(81168);
// EXTERNAL MODULE: ./src/Components/Organisms/Skeletons/index.tsx
var Skeletons = __webpack_require__(70619);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(42074);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 1 modules
var message = __webpack_require__(92759);
// EXTERNAL MODULE: ./node_modules/antd/es/card/index.js + 3 modules
var card = __webpack_require__(2557);
// EXTERNAL MODULE: ./node_modules/antd/es/empty/index.js + 2 modules
var empty = __webpack_require__(90247);
// EXTERNAL MODULE: ./node_modules/antd/es/dropdown/index.js
var dropdown = __webpack_require__(57811);
// EXTERNAL MODULE: ./src/Components/Atoms/index.tsx + 12 modules
var Atoms = __webpack_require__(9394);
// EXTERNAL MODULE: ./src/helpers/useDebounce.ts
var useDebounce = __webpack_require__(28173);
// EXTERNAL MODULE: ./src/Modules/FAQs/index.ts
var FAQs = __webpack_require__(7739);
// EXTERNAL MODULE: ./src/Components/Organisms/Dashboard/HelpCenter/styles.module.scss
var styles_module = __webpack_require__(47217);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/Dashboard/HelpCenter/header.tsx
const Header=()=>{var _searchResult$data,_searchResult$data2;const faqsModule=(0,react.useMemo)(()=>new FAQs/* FAQModule */.v(),[]);const[searchTerm,setSearchTerm]=(0,react.useState)("");const debouncedSearchTerm=(0,useDebounce/* useDebounce */.d)(searchTerm,500);const[searchResult,setSearchResult]=(0,react.useState)({loading:false,data:[]});const onSearch=event=>{const value=event.currentTarget.value;setSearchTerm(value);};const GetSearchResult=(0,react.useCallback)(()=>{if(debouncedSearchTerm){setSearchResult((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},searchResult),{},{loading:true}));faqsModule.getAllPublishedRecords({title:debouncedSearchTerm}).then(res=>{setSearchResult((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},res.data),{},{loading:false}));}).catch(error=>{var _error$response,_error$response$data;message/* default */.Ay.error(error===null||error===void 0?void 0:(_error$response=error.response)===null||_error$response===void 0?void 0:(_error$response$data=_error$response.data)===null||_error$response$data===void 0?void 0:_error$response$data.message);setSearchResult((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},searchResult),{},{loading:false}));});}},[debouncedSearchTerm,faqsModule]);(0,react.useEffect)(()=>{GetSearchResult();},[GetSearchResult]);// search overlay
const overlay=/*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.A,{className:styles_module/* default */.A.overlay+'pa-5',children:debouncedSearchTerm&&searchResult.loading?/*#__PURE__*/(0,jsx_runtime.jsx)(Skeletons/* default */.A,{items:2,fullWidth:true}):debouncedSearchTerm&&((_searchResult$data=searchResult.data)===null||_searchResult$data===void 0?void 0:_searchResult$data.length)>0?/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module/* default */.A.searchResult,children:(_searchResult$data2=searchResult.data)===null||_searchResult$data2===void 0?void 0:_searchResult$data2.map(item=>/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{paddingLeft:12},children:/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Link */.N_,{to:"/help-center/".concat(item.slug,"#").concat(item===null||item===void 0?void 0:item.slug),title:item.title,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{children:[item.title,"sad"]})})},item.title)},"faqs-search-result-".concat(item.id)))}):/*#__PURE__*/(0,jsx_runtime.jsx)(empty/* default */.A,{className:"py-2",description:/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{children:["No Results",/*#__PURE__*/(0,jsx_runtime.jsx)("br",{}),"Please search what you are looking for."]})})});return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.header,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h1",{className:"color-dark-main font-weight-bold mb-0",children:"Help Center"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"color-dark-main font-weight-bold font-size-sm",children:"Search our knowledge base or browse categories below."}),/*#__PURE__*/(0,jsx_runtime.jsx)(dropdown/* default */.A,{dropdownRender:()=>overlay,trigger:["click"],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{placeHolder:"Search our help center articles",icon:/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:"/images/searchIcon.svg",alt:"Search Icon"}),size:"w100",className:"py-2",value:searchTerm,onChange:onSearch})})]});};/* harmony default export */ const header = (Header);
// EXTERNAL MODULE: ./src/Components/Organisms/Dashboard/HelpCenter/Section/index.tsx + 2 modules
var Section = __webpack_require__(72815);
;// ./src/Components/Organisms/Dashboard/HelpCenter/index.tsx
const HelpCenter=()=>{var _faqCategory$data;const faqCategoryModule=(0,react.useMemo)(()=>new FAQCategory/* FAQCategoryModule */.F(),[]);const[faqCategory,setFaqCategory]=(0,react.useState)({loading:false,error:{},data:[]});const getFAQCategoryData=(0,react.useCallback)(()=>{faqCategoryModule.getAllPublishedRecords().then(res=>{var _res$data;if(res.data&&(_res$data=res.data)!==null&&_res$data!==void 0&&_res$data.data){setFaqCategory((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},res.data),{},{loading:false}));}});},[faqCategoryModule]);(0,react.useEffect)(()=>{getFAQCategoryData();},[getFAQCategoryData]);return/*#__PURE__*/(0,jsx_runtime.jsx)(Layout/* default */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.helpCenterWrapper,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(header,{}),faqCategory.loading?/*#__PURE__*/(0,jsx_runtime.jsx)(Skeletons/* default */.A,{items:8}):/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module/* default */.A.category,children:faqCategory===null||faqCategory===void 0?void 0:(_faqCategory$data=faqCategory.data)===null||_faqCategory$data===void 0?void 0:_faqCategory$data.map((item,index)=>/*#__PURE__*/(0,jsx_runtime.jsx)(Section/* CategoryCard */.r,{heading:item.title,subCategory:item.ChildCategory},"help-center-category".concat(index)))}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"mt-10",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Section/* ContactCard */.n,{})})]})});};/* harmony default export */ const Dashboard_HelpCenter = (HelpCenter);

/***/ })

}]);