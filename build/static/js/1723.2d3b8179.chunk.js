"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[1723],{

/***/ 38714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9950);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2557);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52765);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57811);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80737);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73022);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28662);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44414);
const MoreCustomFilters=_ref=>{let{options,onChange,value}=_ref;const[visible,setVisible]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);const overlay=/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"pa-3",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.Group,{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.checkboxGroup,options:options,onChange:value=>{onChange(value);setVisible(false);},value:value})})});return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,{trigger:['click'],open:visible,onOpenChange:visible=>setVisible(visible),dropdownRender:()=>overlay,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.label,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:"More Filters"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,{})]})})})});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MoreCustomFilters);

/***/ }),

/***/ 81723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ViewUserAlerts)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./src/Components/Atoms/index.tsx + 12 modules
var Atoms = __webpack_require__(9394);
// EXTERNAL MODULE: ./src/Components/Templates/SiteSettings/index.tsx
var SiteSettings = __webpack_require__(16181);
// EXTERNAL MODULE: ./node_modules/antd/es/avatar/index.js + 3 modules
var avatar = __webpack_require__(75871);
// EXTERNAL MODULE: ./node_modules/antd/es/list/index.js + 1 modules
var list = __webpack_require__(63611);
// EXTERNAL MODULE: ./node_modules/antd/es/divider/index.js
var divider = __webpack_require__(40895);
// EXTERNAL MODULE: ./node_modules/antd/es/table/index.js + 96 modules
var table = __webpack_require__(41821);
// EXTERNAL MODULE: ./src/helpers/common.ts
var common = __webpack_require__(88132);
// EXTERNAL MODULE: ./src/helpers/constants.ts
var constants = __webpack_require__(65944);
// EXTERNAL MODULE: ./src/helpers/dateHandler.ts
var dateHandler = __webpack_require__(98933);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/SiteSettings/ViewUserAlerts/table-columns.tsx
function TableComponent(props){const{tableData,tableLoading}=props;const columns=[{title:"S.No",dataIndex:"index",key:"index",render:(text,record,index)=>index+1,width:"60px"},{title:'User',dataIndex:"user",key:"user",render:user=>/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"d-flex",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default */.A,{src:user!==null&&user!==void 0&&user.profile?"".concat(constants/* RESOURCE_BASE_URL */.to).concat(user===null||user===void 0?void 0:user.profile):"/images/user.svg",size:"small",className:"my-auto"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-sub",size:"sm",className:"my-auto ml-1",children:"".concat(user===null||user===void 0?void 0:user.firstName," ").concat(user===null||user===void 0?void 0:user.lastName)}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-sub",size:"sm",className:"my-auto ml-1",children:"ID: ".concat(user===null||user===void 0?void 0:user.id)})]})]})},{title:'Country',dataIndex:"country",key:"country",render:country=>/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",children:"".concat(country===null||country===void 0?void 0:country.name)})},{title:'Filters',dataIndex:"filters",key:"filters",render:(filters,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:Object.keys(record===null||record===void 0?void 0:record.filters).map((key,index)=>{var _filters$key,_filters$key2;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(list/* default */.Ay,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(list/* default */.Ay.Item,{children:[((_filters$key=filters[key])===null||_filters$key===void 0?void 0:_filters$key.length)>0||typeof filters[key]==='number'?/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",children:(0,common/* capitalize */.ZH)(key)}):null,!filters[key]?null:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"color-dark-main font-size-sm ml-10 mb-0",children:Array.isArray(filters[key])&&filters[key].length>0?/*#__PURE__*/(0,jsx_runtime.jsx)(list/* default */.Ay,{dataSource:filters[key],renderItem:item=>/*#__PURE__*/(0,jsx_runtime.jsx)(list/* default */.Ay.Item,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",children:item})}),locale:{emptyText:"No ".concat(key," selected")}}):/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",children:filters[key]})})]}),((_filters$key2=filters[key])===null||_filters$key2===void 0?void 0:_filters$key2.length)>0&&index!==Object.keys(filters).length-1?/*#__PURE__*/(0,jsx_runtime.jsx)(divider/* default */.A,{className:"my-0"}):null]})},"filter-".concat(index));})}),width:"30%"},{title:'Date Added',className:'text-center',dataIndex:"addedDate",key:"addedDate",render:(addedDate,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",children:(0,dateHandler/* convertDate */.ic)(addedDate,"dd-mm-yy")})}];return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(table/* default */.A,{sticky:true,dataSource:tableData,columns:columns,pagination:false,scroll:{x:991},loading:tableLoading,rowKey:record=>"user-alerts-view-".concat(record.id)})});}
// EXTERNAL MODULE: ./src/services/axiosInstance.ts
var axiosInstance = __webpack_require__(83365);
;// ./src/Modules/UserAlerts/index.ts
//import { UserAlertsTypes } from "./types";
class UserAlertsModule{constructor(){this.endPoint="user-alerts";this.getAllRecords=query=>{return axiosInstance/* default */.A.get("".concat(this.endPoint),{params:query});};// getAlerts = (alertTypeId: number) => {
//     return apiInstance.get(`${this.endPoint}/${alertTypeId}`);
// }
// getAlertsSettingsBySlug = (alertTypeSlug: string) => {
//     return apiInstance.get(`${this.endPoint}/find-user-alert-by-slug/${alertTypeSlug}`);
// }
// subscribeAlertsUnsubscribe = (data: Partial<UserAlertsTypes>) => {
//     return apiInstance.post(`${this.endPoint}/subscribe-unsubscribe`, data);
// }
this.unsubscribeAlertsAll=()=>{return axiosInstance/* default */.A.patch("".concat(this.endPoint,"/unsubscribe-all"));};}}
// EXTERNAL MODULE: ./src/Components/Organisms/Common/styles.module.scss
var styles_module = __webpack_require__(96019);
// EXTERNAL MODULE: ./src/helpers/propertyEnums.ts
var propertyEnums = __webpack_require__(57352);
// EXTERNAL MODULE: ./src/Modules/PropertyCategory/index.ts
var PropertyCategory = __webpack_require__(90831);
// EXTERNAL MODULE: ./src/Components/Atoms/CustomFilter/more.tsx
var more = __webpack_require__(38714);
// EXTERNAL MODULE: ./src/Modules/Location/index.ts
var Location = __webpack_require__(44137);
// EXTERNAL MODULE: ./src/helpers/useDebounce.ts
var useDebounce = __webpack_require__(28173);
// EXTERNAL MODULE: ./src/Modules/PropertyType/index.ts
var PropertyType = __webpack_require__(51019);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 1 modules
var message = __webpack_require__(92759);
;// ./src/Components/Organisms/SiteSettings/ViewUserAlerts/index.tsx
const breadCrumbsData=[{text:"Home",isLink:true,path:"/"},{text:"Site Settings",isLink:true,path:"/siteSettings"},{isLink:false,text:"User Alerts"}];const SiteUserAlerts=()=>{var _searchResult$data,_moduleData$meta,_moduleData$meta2,_moduleData$meta3,_moduleData$meta4;const[moduleData,setModuleData]=(0,react.useState)({loading:false,data:[]});const module=(0,react.useMemo)(()=>new UserAlertsModule(),[]);const propertyCategory=(0,react.useMemo)(()=>new PropertyCategory/* PropertyCategoryModule */.Y(),[]);const locationModule=(0,react.useMemo)(()=>new Location/* LocationModule */.a(),[]);const propertyTypeModule=(0,react.useMemo)(()=>new PropertyType/* PropertyTypeModule */.c(),[]);const[selectedFilters,setSelectedFilters]=(0,react.useState)({userIds:[]});const[reset,setReset]=(0,react.useState)(false);const[categoryData,setCategoryData]=(0,react.useState)([]);const[moreFilters,setMoreFilters]=(0,react.useState)([]);const[propertyTypeData,setPropertyTypeData]=(0,react.useState)([]);const[searchTerm,setSearchTerm]=(0,react.useState)("");const debouncedSearchTerm=(0,useDebounce/* useDebounce */.d)(searchTerm,500);const[searchResult,setSearchResult]=(0,react.useState)({loading:false,data:[]});const onSearch=event=>{const value=event.currentTarget.value;setSearchTerm(value);};// Name of the fields or filters to validate
const fieldsToValidate=[{name:"userIds",full_name:"User ID"},{name:"minArea",full_name:"Min Area"},{name:"maxArea",full_name:"Max Area"},{name:"minPrice",full_name:"Min Price"},{name:"maxPrice",full_name:"Max Price"}];const onSelected=event=>{const{name,value}=event===null||event===void 0?void 0:event.target;const filter=fieldsToValidate.find(field=>field.name===name);// if the field is in the fieldsToValidate array then validate it
if(filter!==null&&filter!==void 0&&filter.name){// validate the field
const isValidNumber=(0,common/* isNumber */.Et)(value);// if the value is not a valid number then return
if(!isValidNumber){return message/* default */.Ay.error("".concat(filter.full_name," must be a number"));}}// set the selected value in the state 
setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{[name]:value}));};const getModuleData=(0,react.useCallback)(async()=>{setModuleData({loading:true});module.getAllRecords().then(res=>{setModuleData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},res.data),{},{loading:false}));}).catch(err=>{setModuleData({loading:false});});propertyCategory.getAllRecords().then(res=>{setCategoryData(res.data.data);}).catch(err=>{setCategoryData([]);});propertyTypeModule.getAllRecords().then(res=>{setPropertyTypeData(res.data.data);}).catch(err=>{setPropertyTypeData([]);});},[module,propertyCategory,propertyTypeModule]);(0,react.useEffect)(()=>{getModuleData();},[]);const onUpdate=(0,react.useCallback)(()=>{var _selectedFilters$user,_selectedFilters$loca;const data={category:(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.category)||undefined,rentalPeriod:(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.rentalPeriod)||undefined,minPrice:(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.minPrice)||undefined,maxPrice:(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.maxPrice)||undefined,minArea:(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.minArea)||undefined,maxArea:(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.maxArea)||undefined,bedrooms:(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.bedrooms)||undefined,bathrooms:(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.bathrooms)||undefined,userIds:(selectedFilters===null||selectedFilters===void 0?void 0:(_selectedFilters$user=selectedFilters.userIds)===null||_selectedFilters$user===void 0?void 0:_selectedFilters$user.length)>0?[selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.userIds]:undefined,location:(selectedFilters===null||selectedFilters===void 0?void 0:(_selectedFilters$loca=selectedFilters.location)===null||_selectedFilters$loca===void 0?void 0:_selectedFilters$loca.length)>0?selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.location:undefined,type:(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.type)||undefined};// get the data from the api
module.getAllRecords(data).then(res=>{setModuleData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},res.data),{},{loading:false}));}).catch(err=>{setModuleData({loading:false});});},[selectedFilters,module]);const onPaginationChange=(0,react.useCallback)((page,pageSize)=>{var _selectedFilters$user2,_selectedFilters$loca2;setModuleData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},moduleData),{},{loading:true}));const params={page:page,perPage:pageSize,category:(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.category)||undefined,rentalPeriod:(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.rentalPeriod)||undefined,minPrice:(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.minPrice)||undefined,maxPrice:(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.maxPrice)||undefined,minArea:(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.minArea)||undefined,maxArea:(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.maxArea)||undefined,bedrooms:(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.bedrooms)||undefined,bathrooms:(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.bathrooms)||undefined,userIds:(selectedFilters===null||selectedFilters===void 0?void 0:(_selectedFilters$user2=selectedFilters.userIds)===null||_selectedFilters$user2===void 0?void 0:_selectedFilters$user2.length)>0?[selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.userIds]:undefined,location:(selectedFilters===null||selectedFilters===void 0?void 0:(_selectedFilters$loca2=selectedFilters.location)===null||_selectedFilters$loca2===void 0?void 0:_selectedFilters$loca2.length)>0?selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.location:undefined,type:(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.type)||undefined};module.getAllRecords(params).then(res=>{setModuleData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},res.data),{},{loading:false}));}).catch(err=>{setModuleData({loading:false});});},[module,selectedFilters,moduleData]);(0,react.useEffect)(()=>{if(reset){onUpdate();}// after 2 seconds set reset clicked state to false
const timer=setTimeout(()=>{setReset(false);},2000);return()=>clearTimeout(timer);},[reset,selectedFilters,onUpdate]);const GetSearchResult=(0,react.useCallback)(()=>{if(debouncedSearchTerm){setSearchResult((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},searchResult),{},{loading:true}));locationModule.getAllRecords({name:debouncedSearchTerm}).then(res=>{var _res$data;setSearchResult({data:(_res$data=res.data)===null||_res$data===void 0?void 0:_res$data.data,loading:false});}).catch(error=>{setSearchResult((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},searchResult),{},{loading:false}));});}},[debouncedSearchTerm,locationModule]);(0,react.useEffect)(()=>{GetSearchResult();},[GetSearchResult]);const moreFiltersOptions=[{label:"Min Price",value:"minPrice"},{label:"Max Price",value:"maxPrice"},{label:"Min Area",value:"minArea"},{label:"Max Area",value:"maxArea"},{label:"User ID",value:"userIds"}];const moreComponents={userIds:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"input",label:"User ID",name:"userIds",value:selectedFilters!==null&&selectedFilters!==void 0&&selectedFilters.userIds?String(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.userIds):"",onChange:onSelected,onReset:()=>{setReset(true);setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{userIds:[]}));},onUpdate:onUpdate,defaultVisible:true}),minPrice:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"input",label:"Min Price",name:"minPrice",value:selectedFilters!==null&&selectedFilters!==void 0&&selectedFilters.minPrice?String(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.minPrice):"",onChange:onSelected,onReset:()=>{setReset(true);setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{minPrice:0}));},onUpdate:onUpdate,defaultVisible:true}),maxPrice:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"input",label:"Max Price",name:"maxPrice",value:selectedFilters!==null&&selectedFilters!==void 0&&selectedFilters.maxPrice?String(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.maxPrice):"",onChange:onSelected,onReset:()=>{setReset(true);setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{maxPrice:0}));},onUpdate:onUpdate,defaultVisible:true}),minArea:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"input",label:"Min Area",name:"minArea",value:selectedFilters!==null&&selectedFilters!==void 0&&selectedFilters.minArea?String(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.minArea):"",onChange:onSelected,onReset:()=>{setReset(true);setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{minArea:0}));},onUpdate:onUpdate,defaultVisible:true}),maxArea:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"input",label:"Max Area",name:"maxArea",value:selectedFilters!==null&&selectedFilters!==void 0&&selectedFilters.maxArea?String(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.maxArea):"",onChange:onSelected,onReset:()=>{setReset(true);setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{maxArea:0}));},onUpdate:onUpdate,defaultVisible:true})};return/*#__PURE__*/(0,jsx_runtime.jsxs)(SiteSettings["default"],{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* PageHeader */.zY,{heading:"User Alerts",breadCrumbData:breadCrumbsData,filters:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"radio",label:"Category",name:"category",options:categoryData.map(item=>({label:item.localization[0].title,value:item.slug})),value:(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.category)||"",onChange:onSelected,onReset:()=>{setReset(true);setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{category:""}));},onUpdate:onUpdate})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"radio",label:"Rental Period",name:"rentalPeriod",options:Object.entries(propertyEnums/* PropertyPriceType */.$J).map(_ref=>{let[key,value]=_ref;return{label:(0,common/* capitalize */.ZH)(key),value:value};}),value:(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.rentalPeriod)||"",onChange:onSelected,onReset:()=>{setReset(true);setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{rentalPeriod:""}));},onUpdate:onUpdate})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"radio",label:"Property Type",name:"type",options:propertyTypeData===null||propertyTypeData===void 0?void 0:propertyTypeData.map(item=>({label:item.localization[0].title,value:item.slug})),value:(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.type)||"",onChange:onSelected,onReset:()=>{setReset(true);setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{type:""}));},onUpdate:onUpdate})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"multiSelect",label:"Location",name:"location",withSearch:true,options:((_searchResult$data=searchResult.data)===null||_searchResult$data===void 0?void 0:_searchResult$data.map(item=>({label:item.localization[0].name,value:item.url})))||[],onChange:value=>{setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{location:value}));},onReset:()=>{setReset(true);setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{location:[]}));// reset the search term
setSearchTerm("");},onUpdate:onUpdate// START: For search
,loading:searchResult.loading,searchTerm:searchTerm,onSearch:onSearch// END: For search
})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"multiSelect",label:"Bedrooms",name:"bedrooms",options:Object.entries(propertyEnums/* Bedrooms */.Ww).map(_ref2=>{let[key,value]=_ref2;return{label:(0,common/* capitalize */.ZH)(key===null||key===void 0?void 0:key.replace("_"," ")),value:value};}),onChange:value=>{setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{bedrooms:value}));},onReset:()=>{setReset(true);setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{bedrooms:[]}));},onUpdate:onUpdate})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"multiSelect",label:"Bathrooms",name:"bathrooms",options:Object.entries(propertyEnums/* Bathrooms */.sf).map(_ref3=>{let[key,value]=_ref3;return{label:(0,common/* capitalize */.ZH)(key===null||key===void 0?void 0:key.replace("_"," ")),value:value};}),onChange:value=>{setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{bathrooms:value}));},onReset:()=>{setReset(true);setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{bathrooms:[]}));},onUpdate:onUpdate})}),/**  Find the selected filter and render the component based on the name of the filter */Object.keys(moreComponents).map(key=>{return(moreFilters===null||moreFilters===void 0?void 0:moreFilters.includes(key))&&moreComponents[key];}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(more/* default */.A,{options:moreFiltersOptions===null||moreFiltersOptions===void 0?void 0:moreFiltersOptions.map(option=>({label:option.label,value:option.value})),onChange:value=>{setMoreFilters(value);},value:moreFilters})})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module/* default */.A.antdTableWrapper,children:/*#__PURE__*/(0,jsx_runtime.jsx)(TableComponent,{tableData:moduleData===null||moduleData===void 0?void 0:moduleData.data,tableLoading:moduleData.loading})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Pagination */.dK,{total:moduleData===null||moduleData===void 0?void 0:(_moduleData$meta=moduleData.meta)===null||_moduleData$meta===void 0?void 0:_moduleData$meta.total,current:moduleData===null||moduleData===void 0?void 0:(_moduleData$meta2=moduleData.meta)===null||_moduleData$meta2===void 0?void 0:_moduleData$meta2.page,defaultPageSize:moduleData!==null&&moduleData!==void 0&&(_moduleData$meta3=moduleData.meta)!==null&&_moduleData$meta3!==void 0&&_moduleData$meta3.perPage?moduleData===null||moduleData===void 0?void 0:(_moduleData$meta4=moduleData.meta)===null||_moduleData$meta4===void 0?void 0:_moduleData$meta4.perPage:10,pageSizeOptions:[10,20,50,100],onChange:onPaginationChange})]});};/* harmony default export */ const ViewUserAlerts = (SiteUserAlerts);

/***/ }),

/***/ 44137:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ LocationModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
class LocationModule{constructor(){this.endPoint="location";this.getAllRecords=queryData=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint,{params:queryData});};this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/").concat(id));};this.getAllRecordsByLocation=()=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/find-location-in-a-country"));};this.getAllRecordsByLocationId=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/searchLocation/").concat(id));};this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete("".concat(this.endPoint,"/").concat(id));};this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(this.endPoint+"/",data);};this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/").concat(id),data);};}}

/***/ }),

/***/ 90831:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ PropertyCategoryModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
class PropertyCategoryModule{constructor(){this.endPoint="project-type";this.getAllRecords=()=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* .BASE_URL */ .C+this.endPoint);};this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* .BASE_URL */ .C+this.endPoint+"/"+id);};this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* .BASE_URL */ .C+this.endPoint+"/"+id);};this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* .BASE_URL */ .C+this.endPoint,data);};this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* .BASE_URL */ .C+this.endPoint+"/"+id,data);};}}

/***/ }),

/***/ 51019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ PropertyTypeModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
/* harmony import */ var _Common_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21073);
class PropertyTypeModule{constructor(){this.endPoint="property-type";this.getAllRecords=()=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint);};this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/").concat(id,"?all=true"));};this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete("".concat(this.endPoint,"/").concat(id));};this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(this.endPoint+"/",data);};this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/").concat(id),data,{headers:_Common_config__WEBPACK_IMPORTED_MODULE_1__/* .FormDataHeader */ .Y});};}}

/***/ }),

/***/ 57352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $J: () => (/* binding */ PropertyPriceType),
/* harmony export */   Ww: () => (/* binding */ Bedrooms),
/* harmony export */   lC: () => (/* binding */ CompletionStatus),
/* harmony export */   sf: () => (/* binding */ Bathrooms)
/* harmony export */ });
/* unused harmony exports FurnishType, Parking, ChequesCount, PropertyPriceTypeMap */
let FurnishType=/*#__PURE__*/function(FurnishType){FurnishType["furnished"]="furnished";FurnishType["unfurnished"]="unfurnished";FurnishType["partly-furnished"]="partly-furnished";return FurnishType;}({});let Bedrooms=/*#__PURE__*/function(Bedrooms){Bedrooms["Studio"]="studio";Bedrooms["_1"]="1";Bedrooms["_2"]="2";Bedrooms["_3"]="3";Bedrooms["_4"]="4";Bedrooms["_5"]="5";Bedrooms["_6"]="6";Bedrooms["_7"]="7";Bedrooms["_7+"]="7+";Bedrooms["N/A"]="N/A";return Bedrooms;}({});let Bathrooms=/*#__PURE__*/function(Bathrooms){Bathrooms["None"]="none";Bathrooms["_1"]="1";Bathrooms["_2"]="2";Bathrooms["_3"]="3";Bathrooms["_4"]="4";Bathrooms["_5"]="5";Bathrooms["_6"]="6";Bathrooms["_7"]="7";Bathrooms["_7+"]="7+";Bathrooms["N/A"]="N/A";return Bathrooms;}({});let Parking=/*#__PURE__*/function(Parking){Parking["none"]="none";Parking["_1"]="1";Parking["_2"]="2";Parking["_3"]="3";Parking["_4"]="4";Parking["_5"]="5";Parking["_6"]="6";Parking["_7"]="7";Parking["_8"]="8";Parking["_9"]="9";Parking["_10"]="10";Parking["_10+"]="10+";return Parking;}({});let CompletionStatus=/*#__PURE__*/function(CompletionStatus){CompletionStatus["completed"]="completed";CompletionStatus["off-plan"]="off-plan";return CompletionStatus;}({});let ChequesCount=/*#__PURE__*/function(ChequesCount){ChequesCount["1 cheque"]="1";ChequesCount["upto 2 cheques"]="2";ChequesCount["upto 3 cheques"]="3";ChequesCount["upto 4 cheques"]="4";ChequesCount["upto 5 cheques"]="5";ChequesCount["upto 6 cheques"]="6";ChequesCount["upto 12 cheques"]="12";return ChequesCount;}({});let PropertyPriceType=/*#__PURE__*/function(PropertyPriceType){PropertyPriceType["yearly"]="yearly";PropertyPriceType["monthly"]="monthly";PropertyPriceType["weekly"]="weekly";PropertyPriceType["daily"]="daily";return PropertyPriceType;}({});// "fixed" = "fixed",
let PropertyPriceTypeMap=/*#__PURE__*/function(PropertyPriceTypeMap){PropertyPriceTypeMap["yearly"]="yearlyPrice";PropertyPriceTypeMap["monthly"]="monthlyPrice";PropertyPriceTypeMap["weekly"]="weeklyPrice";PropertyPriceTypeMap["daily"]="dailyPrice";PropertyPriceTypeMap["fixed"]="fixedPrice";return PropertyPriceTypeMap;}({});

/***/ }),

/***/ 63611:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  EF: () => (/* binding */ ListContext),
  Ay: () => (/* binding */ list)
});

// UNUSED EXPORTS: ListConsumer

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(60436);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(64467);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(5544);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(82284);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(48383);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(5741);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/defaultRenderEmpty.js
var defaultRenderEmpty = __webpack_require__(45534);
// EXTERNAL MODULE: ./node_modules/antd/es/grid/row.js
var row = __webpack_require__(78786);
// EXTERNAL MODULE: ./node_modules/antd/es/grid/hooks/useBreakpoint.js
var useBreakpoint = __webpack_require__(16661);
// EXTERNAL MODULE: ./node_modules/antd/es/pagination/index.js + 12 modules
var es_pagination = __webpack_require__(24575);
// EXTERNAL MODULE: ./node_modules/antd/es/spin/index.js
var spin = __webpack_require__(90650);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/responsiveObserve.js
var responsiveObserve = __webpack_require__(86557);
// EXTERNAL MODULE: ./node_modules/antd/es/grid/col.js
var col = __webpack_require__(55352);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(39156);
;// ./node_modules/antd/es/list/Item.js


var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};






var Meta = function Meta(_a) {
  var customizePrefixCls = _a.prefixCls,
    className = _a.className,
    avatar = _a.avatar,
    title = _a.title,
    description = _a.description,
    others = __rest(_a, ["prefixCls", "className", "avatar", "title", "description"]);
  var _useContext = (0,react.useContext)(context/* ConfigContext */.QO),
    getPrefixCls = _useContext.getPrefixCls;
  var prefixCls = getPrefixCls('list', customizePrefixCls);
  var classString = classnames_default()("".concat(prefixCls, "-item-meta"), className);
  var content = /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-item-meta-content")
  }, title && /*#__PURE__*/react.createElement("h4", {
    className: "".concat(prefixCls, "-item-meta-title")
  }, title), description && /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-item-meta-description")
  }, description));
  return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.A)({}, others, {
    className: classString
  }), avatar && /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-item-meta-avatar")
  }, avatar), (title || description) && content);
};
var InternalItem = function InternalItem(_a, ref) {
  var customizePrefixCls = _a.prefixCls,
    children = _a.children,
    actions = _a.actions,
    extra = _a.extra,
    className = _a.className,
    colStyle = _a.colStyle,
    others = __rest(_a, ["prefixCls", "children", "actions", "extra", "className", "colStyle"]);
  var _useContext2 = (0,react.useContext)(ListContext),
    grid = _useContext2.grid,
    itemLayout = _useContext2.itemLayout;
  var _useContext3 = (0,react.useContext)(context/* ConfigContext */.QO),
    getPrefixCls = _useContext3.getPrefixCls;
  var isItemContainsTextNodeAndNotSingular = function isItemContainsTextNodeAndNotSingular() {
    var result;
    react.Children.forEach(children, function (element) {
      if (typeof element === 'string') {
        result = true;
      }
    });
    return result && react.Children.count(children) > 1;
  };
  var isFlexMode = function isFlexMode() {
    if (itemLayout === 'vertical') {
      return !!extra;
    }
    return !isItemContainsTextNodeAndNotSingular();
  };
  var prefixCls = getPrefixCls('list', customizePrefixCls);
  var actionsContent = actions && actions.length > 0 && /*#__PURE__*/react.createElement("ul", {
    className: "".concat(prefixCls, "-item-action"),
    key: "actions"
  }, actions.map(function (action, i) {
    return /*#__PURE__*/(
      // eslint-disable-next-line react/no-array-index-key
      react.createElement("li", {
        key: "".concat(prefixCls, "-item-action-").concat(i)
      }, action, i !== actions.length - 1 && /*#__PURE__*/react.createElement("em", {
        className: "".concat(prefixCls, "-item-action-split")
      }))
    );
  }));
  var Element = grid ? 'div' : 'li';
  var itemChildren = /*#__PURE__*/react.createElement(Element, (0,esm_extends/* default */.A)({}, others, !grid ? {
    ref: ref
  } : {}, {
    className: classnames_default()("".concat(prefixCls, "-item"), (0,defineProperty/* default */.A)({}, "".concat(prefixCls, "-item-no-flex"), !isFlexMode()), className)
  }), itemLayout === 'vertical' && extra ? [/*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-item-main"),
    key: "content"
  }, children, actionsContent), /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-item-extra"),
    key: "extra"
  }, extra)] : [children, actionsContent, (0,reactNode/* cloneElement */.Ob)(extra, {
    key: 'extra'
  })]);
  return grid ? /*#__PURE__*/react.createElement(col/* default */.A, {
    ref: ref,
    flex: 1,
    style: colStyle
  }, itemChildren) : itemChildren;
};
var Item = /*#__PURE__*/(0,react.forwardRef)(InternalItem);
Item.Meta = Meta;
/* harmony default export */ const list_Item = (Item);
;// ./node_modules/antd/es/list/index.js





var list_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};










var ListContext = /*#__PURE__*/react.createContext({});
var ListConsumer = ListContext.Consumer;
function List(_a) {
  var _classNames;
  var _a$pagination = _a.pagination,
    pagination = _a$pagination === void 0 ? false : _a$pagination,
    customizePrefixCls = _a.prefixCls,
    _a$bordered = _a.bordered,
    bordered = _a$bordered === void 0 ? false : _a$bordered,
    _a$split = _a.split,
    split = _a$split === void 0 ? true : _a$split,
    className = _a.className,
    children = _a.children,
    itemLayout = _a.itemLayout,
    loadMore = _a.loadMore,
    grid = _a.grid,
    _a$dataSource = _a.dataSource,
    dataSource = _a$dataSource === void 0 ? [] : _a$dataSource,
    size = _a.size,
    header = _a.header,
    footer = _a.footer,
    _a$loading = _a.loading,
    loading = _a$loading === void 0 ? false : _a$loading,
    rowKey = _a.rowKey,
    renderItem = _a.renderItem,
    locale = _a.locale,
    rest = list_rest(_a, ["pagination", "prefixCls", "bordered", "split", "className", "children", "itemLayout", "loadMore", "grid", "dataSource", "size", "header", "footer", "loading", "rowKey", "renderItem", "locale"]);
  var paginationObj = pagination && (0,esm_typeof/* default */.A)(pagination) === 'object' ? pagination : {};
  var _React$useState = react.useState(paginationObj.defaultCurrent || 1),
    _React$useState2 = (0,slicedToArray/* default */.A)(_React$useState, 2),
    paginationCurrent = _React$useState2[0],
    setPaginationCurrent = _React$useState2[1];
  var _React$useState3 = react.useState(paginationObj.defaultPageSize || 10),
    _React$useState4 = (0,slicedToArray/* default */.A)(_React$useState3, 2),
    paginationSize = _React$useState4[0],
    setPaginationSize = _React$useState4[1];
  var _React$useContext = react.useContext(context/* ConfigContext */.QO),
    getPrefixCls = _React$useContext.getPrefixCls,
    renderEmpty = _React$useContext.renderEmpty,
    direction = _React$useContext.direction;
  var defaultPaginationProps = {
    current: 1,
    total: 0
  };
  var triggerPaginationEvent = function triggerPaginationEvent(eventName) {
    return function (page, pageSize) {
      setPaginationCurrent(page);
      setPaginationSize(pageSize);
      if (pagination && pagination[eventName]) {
        pagination[eventName](page, pageSize);
      }
    };
  };
  var onPaginationChange = triggerPaginationEvent('onChange');
  var onPaginationShowSizeChange = triggerPaginationEvent('onShowSizeChange');
  var renderInnerItem = function renderInnerItem(item, index) {
    if (!renderItem) return null;
    var key;
    if (typeof rowKey === 'function') {
      key = rowKey(item);
    } else if (rowKey) {
      key = item[rowKey];
    } else {
      key = item.key;
    }
    if (!key) {
      key = "list-item-".concat(index);
    }
    return /*#__PURE__*/react.createElement(react.Fragment, {
      key: key
    }, renderItem(item, index));
  };
  var isSomethingAfterLastItem = function isSomethingAfterLastItem() {
    return !!(loadMore || pagination || footer);
  };
  var renderEmptyFunc = function renderEmptyFunc(prefixCls, renderEmptyHandler) {
    return /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-empty-text")
    }, locale && locale.emptyText || renderEmptyHandler('List'));
  };
  var prefixCls = getPrefixCls('list', customizePrefixCls);
  var loadingProp = loading;
  if (typeof loadingProp === 'boolean') {
    loadingProp = {
      spinning: loadingProp
    };
  }
  var isLoading = loadingProp && loadingProp.spinning;
  // large => lg
  // small => sm
  var sizeCls = '';
  switch (size) {
    case 'large':
      sizeCls = 'lg';
      break;
    case 'small':
      sizeCls = 'sm';
      break;
    default:
      break;
  }
  var classString = classnames_default()(prefixCls, (_classNames = {}, (0,defineProperty/* default */.A)(_classNames, "".concat(prefixCls, "-vertical"), itemLayout === 'vertical'), (0,defineProperty/* default */.A)(_classNames, "".concat(prefixCls, "-").concat(sizeCls), sizeCls), (0,defineProperty/* default */.A)(_classNames, "".concat(prefixCls, "-split"), split), (0,defineProperty/* default */.A)(_classNames, "".concat(prefixCls, "-bordered"), bordered), (0,defineProperty/* default */.A)(_classNames, "".concat(prefixCls, "-loading"), isLoading), (0,defineProperty/* default */.A)(_classNames, "".concat(prefixCls, "-grid"), !!grid), (0,defineProperty/* default */.A)(_classNames, "".concat(prefixCls, "-something-after-last-item"), isSomethingAfterLastItem()), (0,defineProperty/* default */.A)(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
  var paginationProps = (0,esm_extends/* default */.A)((0,esm_extends/* default */.A)((0,esm_extends/* default */.A)({}, defaultPaginationProps), {
    total: dataSource.length,
    current: paginationCurrent,
    pageSize: paginationSize
  }), pagination || {});
  var largestPage = Math.ceil(paginationProps.total / paginationProps.pageSize);
  if (paginationProps.current > largestPage) {
    paginationProps.current = largestPage;
  }
  var paginationContent = pagination ? /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-pagination")
  }, /*#__PURE__*/react.createElement(es_pagination/* default */.A, (0,esm_extends/* default */.A)({}, paginationProps, {
    onChange: onPaginationChange,
    onShowSizeChange: onPaginationShowSizeChange
  }))) : null;
  var splitDataSource = (0,toConsumableArray/* default */.A)(dataSource);
  if (pagination) {
    if (dataSource.length > (paginationProps.current - 1) * paginationProps.pageSize) {
      splitDataSource = (0,toConsumableArray/* default */.A)(dataSource).splice((paginationProps.current - 1) * paginationProps.pageSize, paginationProps.pageSize);
    }
  }
  var needResponsive = Object.keys(grid || {}).some(function (key) {
    return ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].includes(key);
  });
  var screens = (0,useBreakpoint/* default */.A)(needResponsive);
  var currentBreakpoint = react.useMemo(function () {
    for (var i = 0; i < responsiveObserve/* responsiveArray */.ye.length; i += 1) {
      var breakpoint = responsiveObserve/* responsiveArray */.ye[i];
      if (screens[breakpoint]) {
        return breakpoint;
      }
    }
    return undefined;
  }, [screens]);
  var colStyle = react.useMemo(function () {
    if (!grid) {
      return undefined;
    }
    var columnCount = currentBreakpoint && grid[currentBreakpoint] ? grid[currentBreakpoint] : grid.column;
    if (columnCount) {
      return {
        width: "".concat(100 / columnCount, "%"),
        maxWidth: "".concat(100 / columnCount, "%")
      };
    }
  }, [grid === null || grid === void 0 ? void 0 : grid.column, currentBreakpoint]);
  var childrenContent = isLoading && /*#__PURE__*/react.createElement("div", {
    style: {
      minHeight: 53
    }
  });
  if (splitDataSource.length > 0) {
    var items = splitDataSource.map(function (item, index) {
      return renderInnerItem(item, index);
    });
    childrenContent = grid ? /*#__PURE__*/react.createElement(row/* default */.A, {
      gutter: grid.gutter
    }, react.Children.map(items, function (child) {
      return /*#__PURE__*/react.createElement("div", {
        key: child === null || child === void 0 ? void 0 : child.key,
        style: colStyle
      }, child);
    })) : /*#__PURE__*/react.createElement("ul", {
      className: "".concat(prefixCls, "-items")
    }, items);
  } else if (!children && !isLoading) {
    childrenContent = renderEmptyFunc(prefixCls, renderEmpty || defaultRenderEmpty/* default */.A);
  }
  var paginationPosition = paginationProps.position || 'bottom';
  var contextValue = react.useMemo(function () {
    return {
      grid: grid,
      itemLayout: itemLayout
    };
  }, [JSON.stringify(grid), itemLayout]);
  return /*#__PURE__*/react.createElement(ListContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.A)({
    className: classString
  }, rest), (paginationPosition === 'top' || paginationPosition === 'both') && paginationContent, header && /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-header")
  }, header), /*#__PURE__*/react.createElement(spin/* default */.A, (0,esm_extends/* default */.A)({}, loadingProp), childrenContent, children), footer && /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-footer")
  }, footer), loadMore || (paginationPosition === 'bottom' || paginationPosition === 'both') && paginationContent));
}
List.Item = list_Item;
/* harmony default export */ const list = (List);

/***/ })

}]);