"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[352],{

/***/ 50352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ViewSMSLogs)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./src/Components/Atoms/index.tsx + 12 modules
var Atoms = __webpack_require__(9394);
// EXTERNAL MODULE: ./src/Components/Templates/SiteSettings/index.tsx
var SiteSettings = __webpack_require__(16181);
// EXTERNAL MODULE: ./node_modules/antd/es/table/index.js + 96 modules
var table = __webpack_require__(41821);
// EXTERNAL MODULE: ./src/helpers/common.ts
var common = __webpack_require__(88132);
// EXTERNAL MODULE: ./src/helpers/dateHandler.ts
var dateHandler = __webpack_require__(98933);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/SiteSettings/ViewSMSLogs/table-columns.tsx
function TableComponent(props){const{tableData,tableLoading}=props;const columns=[{title:"S.No",dataIndex:"index",key:"index",render:(text,record,index)=>index+1,width:"60px"},{title:'Gateway',dataIndex:"gateway",key:"gateway",render:gateway=>/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",children:gateway})},{title:'Message',dataIndex:"message",key:"message",render:message=>/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",children:message})},{title:'Mobile Number',dataIndex:"number",key:"number",render:number=>/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",children:number})},{title:'Sent Date',className:'text-center',dataIndex:"sentDate",key:"sentDate",render:sentDate=>/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",children:(0,dateHandler/* convertDate */.ic)(sentDate,"dd M,yy-t")})},{title:'Status',dataIndex:"status",key:"status",render:status=>/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",children:"".concat((0,common/* capitalize */.ZH)(status))})}];return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(table/* default */.A,{sticky:true,dataSource:tableData,columns:columns,pagination:false,scroll:{x:991},loading:tableLoading// rowKey={(record) => `sms-logs-${record.id!}`}
})});}
// EXTERNAL MODULE: ./src/Components/Organisms/Common/styles.module.scss
var styles_module = __webpack_require__(96019);
// EXTERNAL MODULE: ./src/Modules/SMS/index.ts
var SMS = __webpack_require__(88175);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 1 modules
var message = __webpack_require__(92759);
;// ./src/Components/Organisms/SiteSettings/ViewSMSLogs/index.tsx
const breadCrumbsData=[{text:"Home",isLink:true,path:"/"},{text:"Site Settings",isLink:true,path:"/siteSettings"},{isLink:false,text:"SMS Logs"}];const SiteSMSLogs=()=>{var _moduleData$meta,_moduleData$meta2,_moduleData$meta3,_moduleData$meta4;const[moduleData,setModuleData]=(0,react.useState)({loading:false,data:[]});const module=(0,react.useMemo)(()=>new SMS/* SMSModule */.g(),[]);const[selectedFilters,setSelectedFilters]=(0,react.useState)({message:'',userId:0,gateway:'',number:'',status:''});const[reset,setReset]=(0,react.useState)(false);const onSelected=event=>{const{name,value}=event===null||event===void 0?void 0:event.target;if(name==="userId"||name==="number"){const isValidNumber=(0,common/* isNumber */.Et)(value);if(!isValidNumber){let label="";switch(name){case"userId":{label="User ID";break;}case"number":{label="Phone Number";break;}}return message/* default */.Ay.error("".concat(label," should be a number"));}}// set the selected value in the state 
setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{[name]:value}));};const getModuleData=(0,react.useCallback)(async()=>{setModuleData({loading:true});module.getLogs().then(res=>{setModuleData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},res.data),{},{loading:false}));}).catch(err=>{setModuleData({loading:false});});},[module]);(0,react.useEffect)(()=>{getModuleData();},[getModuleData]);const onUpdate=(0,react.useCallback)(()=>{var _selectedFilters$date,_selectedFilters$date2;const fromDateString=((_selectedFilters$date=selectedFilters.dateRange)===null||_selectedFilters$date===void 0?void 0:_selectedFilters$date[0])||"";const toDateString=((_selectedFilters$date2=selectedFilters.dateRange)===null||_selectedFilters$date2===void 0?void 0:_selectedFilters$date2[1])||"";const fromDate=fromDateString?(0,dateHandler/* convertDate */.ic)(fromDateString,"yy-mm-dd"):undefined;const toDate=toDateString?(0,dateHandler/* convertDate */.ic)(toDateString,"yy-mm-dd"):undefined;const data={status:(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.status)||undefined,message:(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.message)||undefined,userId:(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.userId)||undefined,gateway:(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.gateway)||undefined,number:(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.number)||undefined,fromDate:fromDate,toDate:toDate};// get the data from the api
module.getLogs(data).then(res=>{setModuleData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},res.data),{},{loading:false}));}).catch(err=>{setModuleData({loading:false});});},[selectedFilters,module]);const onReset=(0,react.useCallback)((name,value)=>{if(name){setReset(true);setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{[name]:value}));}},[selectedFilters]);const onPaginationChange=(0,react.useCallback)((page,pageSize)=>{var _selectedFilters$date3,_selectedFilters$date4;setModuleData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},moduleData),{},{loading:true}));const fromDateString=((_selectedFilters$date3=selectedFilters.dateRange)===null||_selectedFilters$date3===void 0?void 0:_selectedFilters$date3[0])||"";const toDateString=((_selectedFilters$date4=selectedFilters.dateRange)===null||_selectedFilters$date4===void 0?void 0:_selectedFilters$date4[1])||"";const fromDate=fromDateString?(0,dateHandler/* convertDate */.ic)(fromDateString,"yy-mm-dd"):undefined;const toDate=toDateString?(0,dateHandler/* convertDate */.ic)(toDateString,"yy-mm-dd"):undefined;const params={page:page,perPage:pageSize,status:(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.status)||undefined,message:(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.message)||undefined,userId:(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.userId)||undefined,gateway:(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.gateway)||undefined,number:(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.number)||undefined,fromDate:fromDate,toDate:toDate};module.getLogs(params).then(res=>{setModuleData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},res.data),{},{loading:false}));}).catch(err=>{setModuleData({loading:false});});},[module,selectedFilters,moduleData]);(0,react.useEffect)(()=>{if(reset){onUpdate();}// after 2 seconds set reset clicked state to false
const timer=setTimeout(()=>{setReset(false);},2000);return()=>clearTimeout(timer);},[reset,selectedFilters,onUpdate]);return/*#__PURE__*/(0,jsx_runtime.jsxs)(SiteSettings["default"],{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* PageHeader */.zY,{heading:"SMS Logs",breadCrumbData:breadCrumbsData,filters:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"datepicker",label:"Date",name:"dateRange",onChange:value=>{setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{dateRange:value}));},onReset:()=>onReset("dateRange",[]),onUpdate:onUpdate})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"input",label:"User ID",name:"userId",value:selectedFilters!==null&&selectedFilters!==void 0&&selectedFilters.userId?String(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.userId):"",onChange:onSelected,onReset:()=>{setReset(true);setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{userId:0}));},onUpdate:onUpdate})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"input",label:"Gateway",name:"gateway",value:selectedFilters!==null&&selectedFilters!==void 0&&selectedFilters.gateway?String(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.gateway):"",onChange:onSelected,onReset:()=>{setReset(true);setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{gateway:""}));},onUpdate:onUpdate})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"input",label:"Number",name:"number",value:selectedFilters!==null&&selectedFilters!==void 0&&selectedFilters.number?String(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.number):"",onChange:onSelected,onReset:()=>{setReset(true);setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{number:""}));},onUpdate:onUpdate})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"input",label:"Message",name:"message",value:selectedFilters!==null&&selectedFilters!==void 0&&selectedFilters.message?String(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.message):"",onChange:onSelected,onReset:()=>{setReset(true);setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{message:""}));},onUpdate:onUpdate})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"input",label:"Status",name:"status",value:selectedFilters!==null&&selectedFilters!==void 0&&selectedFilters.status?String(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.status):"",onChange:onSelected,onReset:()=>{setReset(true);setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{status:""}));},onUpdate:onUpdate})})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module/* default */.A.antdTableWrapper,children:/*#__PURE__*/(0,jsx_runtime.jsx)(TableComponent,{tableData:moduleData===null||moduleData===void 0?void 0:moduleData.data,tableLoading:moduleData.loading})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Pagination */.dK,{total:moduleData===null||moduleData===void 0?void 0:(_moduleData$meta=moduleData.meta)===null||_moduleData$meta===void 0?void 0:_moduleData$meta.total,current:moduleData===null||moduleData===void 0?void 0:(_moduleData$meta2=moduleData.meta)===null||_moduleData$meta2===void 0?void 0:_moduleData$meta2.page,defaultPageSize:moduleData!==null&&moduleData!==void 0&&(_moduleData$meta3=moduleData.meta)!==null&&_moduleData$meta3!==void 0&&_moduleData$meta3.perPage?moduleData===null||moduleData===void 0?void 0:(_moduleData$meta4=moduleData.meta)===null||_moduleData$meta4===void 0?void 0:_moduleData$meta4.perPage:10,pageSizeOptions:[10,20,50,100],onChange:onPaginationChange})]});};/* harmony default export */ const ViewSMSLogs = (SiteSMSLogs);

/***/ }),

/***/ 88175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ SMSModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
class SMSModule{constructor(){this.endPoint="sms";this.getAllRecords=()=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint);};this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/").concat(id));};this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete("".concat(this.endPoint,"/").concat(id));};this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(this.endPoint+"/",data);};this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/").concat(id),data);};//make default sms gateway
this.makeDefault=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/makeDefaultSMSGateway/").concat(id));};/** Read sms logs */this.getLogs=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/readSmsSentLogs"),{params:query});};}}

/***/ })

}]);