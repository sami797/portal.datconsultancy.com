"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[2010],{

/***/ 52010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ViewSystemLogs)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./src/Components/Atoms/index.tsx + 12 modules
var Atoms = __webpack_require__(9394);
// EXTERNAL MODULE: ./src/Components/Templates/SiteSettings/index.tsx
var SiteSettings = __webpack_require__(16181);
// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 5 modules
var input = __webpack_require__(16330);
// EXTERNAL MODULE: ./node_modules/antd/es/table/index.js + 96 modules
var table = __webpack_require__(41821);
// EXTERNAL MODULE: ./src/helpers/dateHandler.ts
var dateHandler = __webpack_require__(98933);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/SiteSettings/ViewSystemLogs/table-columns.tsx
const{TextArea}=input/* default */.A;function TableComponent(props){const{tableData,tableLoading}=props;const columns=[{title:"S.No",dataIndex:"index",key:"index",render:(text,record,index)=>index+1,width:"60px"},{title:'Table',dataIndex:"table",key:"table",render:(table,record)=>/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",children:"Name: ".concat(table)}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",children:"Column Key: ".concat(record.tableColumnKey)}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",children:"Column Value: ".concat(record.tableColumnValue)})]})},{title:'User Meta',dataIndex:"addedById",key:"addedById",render:(addedById,record)=>/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",children:"User ID: ".concat(addedById)}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",children:"Organization ID: ".concat(record.organizationId||"N/A")}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",children:"Country ID: ".concat(record.countryId||"N/A")})]})},{title:'Controller Name',dataIndex:"controllerName",key:"controllerName",render:controllerName=>/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",children:controllerName})},{title:'Action',dataIndex:"actionType",key:"actionType",render:(actionType,record)=>/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",children:"Type: ".concat(actionType)}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",children:"Message: ".concat(record.message)}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",children:"Endpoint: ".concat(record.endPoint)})]})},{title:'Date Added',className:'text-center',dataIndex:"addedDate",key:"addedDate",render:addedDate=>/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",children:(0,dateHandler/* convertDate */.ic)(addedDate,"dd M,yy-t")})},{title:'Data',dataIndex:"data",key:"data",render:data=>/*#__PURE__*/(0,jsx_runtime.jsx)(TextArea,{rows:4,value:JSON.stringify(data,null,2)})}];return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(table/* default */.A,{sticky:true,dataSource:tableData,columns:columns,pagination:false,scroll:{x:991},loading:tableLoading})});}
// EXTERNAL MODULE: ./src/Components/Organisms/Common/styles.module.scss
var styles_module = __webpack_require__(96019);
// EXTERNAL MODULE: ./src/Modules/Default/index.ts
var Default = __webpack_require__(49463);
// EXTERNAL MODULE: ./src/helpers/common.ts
var common = __webpack_require__(88132);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 1 modules
var message = __webpack_require__(92759);
;// ./src/Components/Organisms/SiteSettings/ViewSystemLogs/index.tsx
const breadCrumbsData=[{text:"Home",isLink:true,path:"/"},{text:"Site Settings",isLink:true,path:"/siteSettings"},{isLink:false,text:"System Logs"}];const SystemLogs=()=>{var _moduleData$meta,_moduleData$meta2,_moduleData$meta3,_moduleData$meta4;const[moduleData,setModuleData]=(0,react.useState)({loading:false,data:[]});const module=(0,react.useMemo)(()=>new Default/* DefaultModule */.y(),[]);const[selectedFilters,setSelectedFilters]=(0,react.useState)({table:'',tableColumnKey:'',tableColumnValue:'',organizationId:0,addedById:0});const[reset,setReset]=(0,react.useState)(false);const onSelected=event=>{const{name,value}=event===null||event===void 0?void 0:event.target;if(name==="organizationId"||name==="addedById"){const isValidNumber=(0,common/* isNumber */.Et)(value);if(!isValidNumber){let label="";switch(name){case"organizationId":{label="Organization ID";break;}case"addedById":{label="User ID";break;}}return message/* default */.Ay.error("".concat(label," should be a number"));}}// set the selected value in the state 
setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{[name]:value}));};const getModuleData=(0,react.useCallback)(async()=>{setModuleData({loading:true});module.getSystemLogs().then(res=>{setModuleData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},res.data),{},{loading:false}));}).catch(err=>{setModuleData({loading:false});});},[module]);(0,react.useEffect)(()=>{getModuleData();},[getModuleData]);const onUpdate=(0,react.useCallback)(()=>{var _selectedFilters$date,_selectedFilters$date2;const fromDateString=((_selectedFilters$date=selectedFilters.dateRange)===null||_selectedFilters$date===void 0?void 0:_selectedFilters$date[0])||"";const toDateString=((_selectedFilters$date2=selectedFilters.dateRange)===null||_selectedFilters$date2===void 0?void 0:_selectedFilters$date2[1])||"";const fromDate=fromDateString?(0,dateHandler/* convertDate */.ic)(fromDateString,"yy-mm-dd"):undefined;const toDate=toDateString?(0,dateHandler/* convertDate */.ic)(toDateString,"yy-mm-dd"):undefined;const data={table:selectedFilters.table||undefined,tableColumnKey:selectedFilters.tableColumnKey||undefined,tableColumnValue:selectedFilters.tableColumnValue||undefined,organizationId:selectedFilters.organizationId>0?selectedFilters.organizationId:undefined,addedById:selectedFilters.addedById>0?selectedFilters.addedById:undefined,fromDate:fromDate,toDate:toDate};// get the data from the api
module.getSystemLogs(data).then(res=>{setModuleData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},res.data),{},{loading:false}));}).catch(err=>{setModuleData({loading:false});});},[selectedFilters,module]);const onReset=(0,react.useCallback)((name,value)=>{if(name){setReset(true);setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{[name]:value}));}},[selectedFilters]);const onPaginationChange=(0,react.useCallback)((page,pageSize)=>{var _selectedFilters$date3,_selectedFilters$date4;setModuleData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},moduleData),{},{loading:true}));const fromDateString=((_selectedFilters$date3=selectedFilters.dateRange)===null||_selectedFilters$date3===void 0?void 0:_selectedFilters$date3[0])||"";const toDateString=((_selectedFilters$date4=selectedFilters.dateRange)===null||_selectedFilters$date4===void 0?void 0:_selectedFilters$date4[1])||"";const fromDate=fromDateString?(0,dateHandler/* convertDate */.ic)(fromDateString,"yy-mm-dd"):undefined;const toDate=toDateString?(0,dateHandler/* convertDate */.ic)(toDateString,"yy-mm-dd"):undefined;const params={page:page,perPage:pageSize,table:selectedFilters.table||undefined,tableColumnKey:selectedFilters.tableColumnKey||undefined,tableColumnValue:selectedFilters.tableColumnValue||undefined,organizationId:selectedFilters.organizationId>0?selectedFilters.organizationId:undefined,addedById:selectedFilters.addedById>0?selectedFilters.addedById:undefined,fromDate:fromDate,toDate:toDate};module.getSystemLogs(params).then(res=>{setModuleData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},res.data),{},{loading:false}));}).catch(err=>{setModuleData({loading:false});});},[module,selectedFilters,moduleData]);(0,react.useEffect)(()=>{if(reset){onUpdate();}// after 2 seconds set reset clicked state to false
const timer=setTimeout(()=>{setReset(false);},2000);return()=>clearTimeout(timer);},[reset,selectedFilters,onUpdate]);return/*#__PURE__*/(0,jsx_runtime.jsxs)(SiteSettings["default"],{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* PageHeader */.zY,{heading:"System Logs",breadCrumbData:breadCrumbsData,filters:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"datepicker",label:"Date",name:"dateRange",onChange:value=>{setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{dateRange:value}));},onReset:()=>onReset("dateRange",[]),onUpdate:onUpdate})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"input",label:"Table",name:"table",value:selectedFilters!==null&&selectedFilters!==void 0&&selectedFilters.table?String(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.table):"",onChange:onSelected,onReset:()=>{setReset(true);setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{table:""}));},onUpdate:onUpdate})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"input",label:"Table Column Key",name:"tableColumnKey",value:selectedFilters!==null&&selectedFilters!==void 0&&selectedFilters.tableColumnKey?String(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.tableColumnKey):"",onChange:onSelected,onReset:()=>{setReset(true);setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{tableColumnKey:""}));},onUpdate:onUpdate})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"input",label:"Table Column Value",name:"tableColumnValue",value:selectedFilters!==null&&selectedFilters!==void 0&&selectedFilters.tableColumnValue?String(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.tableColumnValue):"",onChange:onSelected,onReset:()=>{setReset(true);setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{tableColumnValue:""}));},onUpdate:onUpdate})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"input",label:"Organization Id",name:"organizationId",value:selectedFilters!==null&&selectedFilters!==void 0&&selectedFilters.organizationId?String(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.organizationId):"",onChange:onSelected,onReset:()=>{setReset(true);setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{organizationId:0}));},onUpdate:onUpdate})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"input",label:"User Id",name:"addedById",value:selectedFilters!==null&&selectedFilters!==void 0&&selectedFilters.addedById?String(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.addedById):"",onChange:onSelected,onReset:()=>{setReset(true);setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{addedById:0}));},onUpdate:onUpdate})})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module/* default */.A.antdTableWrapper,children:/*#__PURE__*/(0,jsx_runtime.jsx)(TableComponent,{tableData:moduleData===null||moduleData===void 0?void 0:moduleData.data,tableLoading:moduleData.loading})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Pagination */.dK,{total:moduleData===null||moduleData===void 0?void 0:(_moduleData$meta=moduleData.meta)===null||_moduleData$meta===void 0?void 0:_moduleData$meta.total,current:moduleData===null||moduleData===void 0?void 0:(_moduleData$meta2=moduleData.meta)===null||_moduleData$meta2===void 0?void 0:_moduleData$meta2.page,defaultPageSize:moduleData!==null&&moduleData!==void 0&&(_moduleData$meta3=moduleData.meta)!==null&&_moduleData$meta3!==void 0&&_moduleData$meta3.perPage?moduleData===null||moduleData===void 0?void 0:(_moduleData$meta4=moduleData.meta)===null||_moduleData$meta4===void 0?void 0:_moduleData$meta4.perPage:10,pageSizeOptions:[10,20,50,100],onChange:onPaginationChange})]});};/* harmony default export */ const ViewSystemLogs = (SystemLogs);

/***/ }),

/***/ 49463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ DefaultModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
class DefaultModule{constructor(){this.mail="mail";this.systemLogs="system-logs";/** Get Mail Logs */this.getMailLogs=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.mail,"/readMailSentLogs"),{params:query});};/** Get System Logs */this.getSystemLogs=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.systemLogs,"/readSystemLogs"),{params:query});};}}

/***/ })

}]);