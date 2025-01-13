"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[69],{

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

/***/ 60069:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Tracking)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./src/Components/Atoms/index.tsx + 12 modules
var Atoms = __webpack_require__(9394);
// EXTERNAL MODULE: ./src/Components/Organisms/Skeletons/index.tsx
var Skeletons = __webpack_require__(70619);
// EXTERNAL MODULE: ./node_modules/antd/es/typography/index.js + 15 modules
var typography = __webpack_require__(30377);
// EXTERNAL MODULE: ./node_modules/antd/es/table/index.js + 96 modules
var table = __webpack_require__(41821);
// EXTERNAL MODULE: ./src/helpers/dateHandler.ts
var dateHandler = __webpack_require__(98933);
// EXTERNAL MODULE: ./src/helpers/constants.ts
var constants = __webpack_require__(65944);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/SiteSettings/Leads/Tracking/table-columns.tsx
// import { LeadsSource, PropertyCategories } from "../../../../../helpers/commonEnums";
const{Paragraph}=typography/* default */.A;function TableComponent(props){const{tableData,tableLoading,emptyText}=props;const columns=[{title:"S.No",dataIndex:"index",key:"index",render:(_text,_record,index)=>index+1,width:"60px"},{title:'Slug',dataIndex:"slug",key:"slug",render:(_slug,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"d-flex",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"my-auto",children:[(record===null||record===void 0?void 0:record.slug)&&/*#__PURE__*/(0,jsx_runtime.jsxs)(Paragraph,{title:record.slug,ellipsis:{rows:1,expandable:false},copyable:{text:record.slug},className:"font-size-xs color-dark-sub mb-0 mt-1",children:["Slug:  ",record.slug]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-sub",size:"xs",children:"Added: ".concat((0,dateHandler/* convertDate */.ic)(record===null||record===void 0?void 0:record.addedDate,"dd M,yy-t"))}),(record===null||record===void 0?void 0:record.modifiedDate)&&/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-sub",size:"xs",children:"Modified: ".concat((0,dateHandler/* convertDate */.ic)(record===null||record===void 0?void 0:record.modifiedDate,"dd M,yy-t"))})]})})},// {
//     title: 'Source',
//     dataIndex: "source",
//     key: "source",
//     className: 'text-center',
//     render: (source: keyof typeof LeadsSource) => (
//         <Typography color="dark-main" size="sm">
//             {LeadsSource[source]}
//         </Typography>
//     ),
//     width: "100px",
// },
{title:'Message',dataIndex:"message",key:"message",render:message=>/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",children:message})},{title:'Agent',dataIndex:"agent",key:"agent",render:(_agent,record)=>{var _record$property,_record$property$assi,_record$property$assi2,_record$property$assi3,_record$property$assi4,_record$property$assi5,_record$property$assi6,_record$property$assi7,_record$property$assi8,_record$property$assi9,_record$property$assi10,_record$property$assi11,_record$property$assi12,_record$property$assi13,_record$property$assi14,_record$property$assi15,_record$property$assi16,_record$property$assi17,_record$property$assi18;return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(record===null||record===void 0?void 0:(_record$property=record.property)===null||_record$property===void 0?void 0:_record$property.assignedTo)&&/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Paragraph,{title:"".concat((_record$property$assi=record.property.assignedTo)===null||_record$property$assi===void 0?void 0:_record$property$assi.firstName," ").concat((_record$property$assi2=record.property.assignedTo)===null||_record$property$assi2===void 0?void 0:_record$property$assi2.lastName),ellipsis:{rows:1,expandable:false},copyable:{text:"".concat((_record$property$assi3=record.property.assignedTo)===null||_record$property$assi3===void 0?void 0:_record$property$assi3.firstName," ").concat((_record$property$assi4=record.property.assignedTo)===null||_record$property$assi4===void 0?void 0:_record$property$assi4.lastName)},className:"font-size-xs color-dark-sub mb-0 mt-1",children:["Name: ","".concat((_record$property$assi5=record.property.assignedTo)===null||_record$property$assi5===void 0?void 0:_record$property$assi5.firstName," ").concat((_record$property$assi6=record.property.assignedTo)===null||_record$property$assi6===void 0?void 0:_record$property$assi6.lastName)]}),/*#__PURE__*/(0,jsx_runtime.jsxs)(Paragraph,{title:(_record$property$assi7=record.property.assignedTo)===null||_record$property$assi7===void 0?void 0:_record$property$assi7.email,ellipsis:{rows:1,expandable:false},copyable:{text:(_record$property$assi8=record.property.assignedTo)===null||_record$property$assi8===void 0?void 0:_record$property$assi8.email},className:"font-size-xs color-dark-sub mb-0 mt-1",children:["Email: ",(_record$property$assi9=record.property.assignedTo)===null||_record$property$assi9===void 0?void 0:_record$property$assi9.email]}),/*#__PURE__*/(0,jsx_runtime.jsxs)(Paragraph,{title:"".concat((_record$property$assi10=record.property.assignedTo)===null||_record$property$assi10===void 0?void 0:_record$property$assi10.phoneCode).concat((_record$property$assi11=record.property.assignedTo)===null||_record$property$assi11===void 0?void 0:_record$property$assi11.phone),ellipsis:{rows:1,expandable:false},copyable:{text:"".concat((_record$property$assi12=record.property.assignedTo)===null||_record$property$assi12===void 0?void 0:_record$property$assi12.phoneCode).concat((_record$property$assi13=record.property.assignedTo)===null||_record$property$assi13===void 0?void 0:_record$property$assi13.phone)},className:"font-size-xs color-dark-sub mb-0 mt-1",children:["Phone: ","".concat((_record$property$assi14=record.property.assignedTo)===null||_record$property$assi14===void 0?void 0:_record$property$assi14.phoneCode).concat((_record$property$assi15=record.property.assignedTo)===null||_record$property$assi15===void 0?void 0:_record$property$assi15.phone)]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Paragraph,{title:"".concat((_record$property$assi16=record.property.assignedTo)===null||_record$property$assi16===void 0?void 0:_record$property$assi16.id),ellipsis:{rows:1,expandable:false},copyable:{text:"".concat((_record$property$assi17=record.property.assignedTo)===null||_record$property$assi17===void 0?void 0:_record$property$assi17.id)},className:"font-size-sm color-dark-main mb-0 mt-1",children:"ID: ".concat((_record$property$assi18=record.property.assignedTo)===null||_record$property$assi18===void 0?void 0:_record$property$assi18.id)})]})});}},{title:'Property',dataIndex:"property",key:"property",render:property=>{var _property$localizatio,_property$localizatio2,_property$localizatio3,_property$category,_property$localizatio4;return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(property===null||property===void 0?void 0:property.id)&&/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",children:"ID: ".concat(property===null||property===void 0?void 0:property.id)}),(property===null||property===void 0?void 0:property.localization)&&/*#__PURE__*/(0,jsx_runtime.jsxs)(Paragraph,{title:(_property$localizatio=property.localization[0])===null||_property$localizatio===void 0?void 0:_property$localizatio.title,ellipsis:{rows:1,expandable:false},copyable:{text:(_property$localizatio2=property.localization[0])===null||_property$localizatio2===void 0?void 0:_property$localizatio2.title},className:"font-size-xs color-dark-sub mb-0 mt-1",children:["Name: ",(_property$localizatio3=property.localization[0])===null||_property$localizatio3===void 0?void 0:_property$localizatio3.title]}),(property===null||property===void 0?void 0:(_property$category=property.category)===null||_property$category===void 0?void 0:_property$category.slug)&&/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-sub",size:"xs",children:"\"\""}),(property===null||property===void 0?void 0:property.slug)&&/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"d-flex",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",weight:"bold",children:"View Property:"}),/*#__PURE__*/(0,jsx_runtime.jsx)("a",{href:"".concat(constants/* FRONT_END_URL */.Yb,"/en/property/").concat(property.slug),target:"_blank",rel:"noreferrer",title:(_property$localizatio4=property.localization[0])===null||_property$localizatio4===void 0?void 0:_property$localizatio4.title,children:/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",height:"16px",width:"17px",children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"})})})]})]});}},{title:'User',dataIndex:"userAgent",key:"userAgent",render:(_userAgent,record)=>/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(record===null||record===void 0?void 0:record.userIP)&&/*#__PURE__*/(0,jsx_runtime.jsxs)(Paragraph,{title:record.userIP,ellipsis:{rows:1,expandable:false},copyable:{text:record.userIP},className:"font-size-xs color-dark-sub mb-0 mt-1",children:["IP: ",record.userIP]}),(record===null||record===void 0?void 0:record.userAgent)&&/*#__PURE__*/(0,jsx_runtime.jsxs)(Paragraph,{title:record.userAgent,copyable:{text:record.userAgent},className:"font-size-xs color-dark-sub mb-0 mt-1",children:["User Agent: ",record.userAgent]})]})},{title:'Organisation',dataIndex:"agency",key:"agency",render:(_agency,record)=>{var _record$property2,_record$property3,_record$property3$age,_record$property4,_record$property4$age,_record$property5,_record$property5$age,_record$property6;return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(record===null||record===void 0?void 0:(_record$property2=record.property)===null||_record$property2===void 0?void 0:_record$property2.agency)&&/*#__PURE__*/(0,jsx_runtime.jsxs)(Paragraph,{title:record===null||record===void 0?void 0:(_record$property3=record.property)===null||_record$property3===void 0?void 0:(_record$property3$age=_record$property3.agency)===null||_record$property3$age===void 0?void 0:_record$property3$age.name,ellipsis:{rows:1,expandable:false},copyable:{text:record===null||record===void 0?void 0:(_record$property4=record.property)===null||_record$property4===void 0?void 0:(_record$property4$age=_record$property4.agency)===null||_record$property4$age===void 0?void 0:_record$property4$age.name},className:"font-size-xs color-dark-sub mb-0 mt-1",children:["Name: ",record===null||record===void 0?void 0:(_record$property5=record.property)===null||_record$property5===void 0?void 0:(_record$property5$age=_record$property5.agency)===null||_record$property5$age===void 0?void 0:_record$property5$age.name]}),(record===null||record===void 0?void 0:record.property)&&/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",children:"ID: ".concat(record===null||record===void 0?void 0:(_record$property6=record.property)===null||_record$property6===void 0?void 0:_record$property6.agency.id)})]});}}];return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(table/* default */.A,{sticky:true,dataSource:tableData,columns:columns,pagination:false,scroll:{x:991},loading:tableLoading,rowKey:record=>"leads-tracking-".concat(record.id),locale:{emptyText:emptyText}})});}
// EXTERNAL MODULE: ./src/Modules/Leads/index.ts
var Leads = __webpack_require__(3465);
// EXTERNAL MODULE: ./src/Components/Organisms/SiteSettings/Common/styles.module.scss
var styles_module = __webpack_require__(41394);
// EXTERNAL MODULE: ./src/Modules/Leads/permissions.ts
var permissions = __webpack_require__(79569);
// EXTERNAL MODULE: ./src/Components/Templates/SiteSettings/index.tsx
var SiteSettings = __webpack_require__(16181);
// EXTERNAL MODULE: ./src/helpers/common.ts
var common = __webpack_require__(88132);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 1 modules
var message = __webpack_require__(92759);
// EXTERNAL MODULE: ./src/Modules/PropertyCategory/index.ts
var PropertyCategory = __webpack_require__(90831);
// EXTERNAL MODULE: ./src/Modules/Organization/index.ts
var Organization = __webpack_require__(42361);
// EXTERNAL MODULE: ./src/helpers/useDebounce.ts
var useDebounce = __webpack_require__(28173);
// EXTERNAL MODULE: ./src/Components/Atoms/CustomFilter/more.tsx
var more = __webpack_require__(38714);
;// ./src/Components/Organisms/SiteSettings/Leads/Tracking/index.tsx
// import { LeadsSource, PropertyCategories } from "../../../../../helpers/commonEnums";
const breadCrumbsData=[{text:"Home",isLink:true,path:"/"},{isLink:true,text:"Site Settings",path:"/siteSettings"},{isLink:true,text:"Leads",path:"/siteSettings/leads"},{isLink:false,text:"Tracking"}];const LeadsTrackingSettings=()=>{var _organizationData$dat,_propertyCategories$d,_moduleData$meta3,_moduleData$meta4,_moduleData$meta5,_moduleData$meta6;// available permissions for the properties page
const permissionSlug=(0,common/* getPermissionSlugs */.AH)(permissions/* LeadsPermissionsEnum */.p);const propertyCategoryModule=(0,react.useMemo)(()=>new PropertyCategory/* PropertyCategoryModule */.Y(),[]);const orgModule=(0,react.useMemo)(()=>new Organization/* OrganizationModule */.I(),[]);const[moreFilters,setMoreFilters]=(0,react.useState)([]);const[moduleData,setModuleData]=(0,react.useState)({loading:false,data:[]});const[orgSearchTerm,setOrgSearchTerm]=(0,react.useState)("");const debouncedOrgSearchTerm=(0,useDebounce/* useDebounce */.d)(orgSearchTerm,500);const[organizationData,setOrganizationData]=(0,react.useState)({data:[],loading:false});const[propertyCategories,setPropertyCategories]=(0,react.useState)({data:[],loading:false});const[selectedFilters,setSelectedFilters]=(0,react.useState)({dateRange:[""],propertyId:0,userAgent:"",userIP:"",propertyUrl:"",source:undefined,organizationId:0,propertyCategory:undefined,agentId:0});const[reset,setReset]=(0,react.useState)(false);const leadsModule=(0,react.useMemo)(()=>new Leads/* LeadsModule */.Q(),[]);const onSelected=event=>{const{name,value}=event===null||event===void 0?void 0:event.target;if(name==="organizationId"||name==="propertyId"||name==="agentId"){const isValidNumber=(0,common/* isNumber */.Et)(value);if(!isValidNumber){let label="";switch(name){case"organizationId":{label="Organization ID";break;}case"propertyId":{label="Property ID";break;}case"agentId":{label="Agent ID";break;}}return message/* default */.Ay.error("".concat(label," should be a number"));}}// set the selected value in the state 
setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{[name]:value}));};const onReset=(0,react.useCallback)((name,value)=>{if(name){setReset(true);setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{[name]:value}));}},[selectedFilters]);// get the search result for the organization
const GetSearchResult=(0,react.useCallback)(()=>{if(debouncedOrgSearchTerm){setOrganizationData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{loading:true}));orgModule.findPublished({name:debouncedOrgSearchTerm}).then(res=>{var _res$data;const data=(_res$data=res.data)===null||_res$data===void 0?void 0:_res$data.data;if(data){// remove duplicate data
const uniqueData=data.filter((item,index)=>{return data.findIndex(ele=>ele.id===item.id)===index;});setOrganizationData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{data:uniqueData}));}}).catch(err=>{var _err$response,_err$response$data;message/* default */.Ay.error((err===null||err===void 0?void 0:(_err$response=err.response)===null||_err$response===void 0?void 0:(_err$response$data=_err$response.data)===null||_err$response$data===void 0?void 0:_err$response$data.message)||"Something went wrong");}).finally(()=>{setOrganizationData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{loading:false}));});}},[debouncedOrgSearchTerm,orgModule]);(0,react.useEffect)(()=>{GetSearchResult();},[GetSearchResult]);const getData=(0,react.useCallback)(()=>{propertyCategoryModule.getAllRecords().then(res=>{setPropertyCategories(res.data);}).catch(err=>{setPropertyCategories((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},propertyCategories),{},{loading:false}));});},[propertyCategories]);(0,react.useEffect)(()=>{getData();},[]);const onUpdate=(0,react.useCallback)(()=>{var _selectedFilters$date,_selectedFilters$date2;const fromDateString=((_selectedFilters$date=selectedFilters.dateRange)===null||_selectedFilters$date===void 0?void 0:_selectedFilters$date[0])||"";const toDateString=((_selectedFilters$date2=selectedFilters.dateRange)===null||_selectedFilters$date2===void 0?void 0:_selectedFilters$date2[1])||"";const fromDate=fromDateString?(0,dateHandler/* convertDate */.ic)(fromDateString,"yy-mm-dd"):undefined;const toDate=toDateString?(0,dateHandler/* convertDate */.ic)(toDateString,"yy-mm-dd"):undefined;const data={propertyId:Number(selectedFilters.propertyId)>0?Number(selectedFilters.propertyId):undefined,propertyUrl:selectedFilters.propertyUrl?selectedFilters.propertyUrl:undefined,source:selectedFilters.source?selectedFilters.source:undefined,userAgent:selectedFilters.userAgent?selectedFilters.userAgent:undefined,userIP:selectedFilters.userIP?selectedFilters.userIP:undefined,fromDate:fromDate,toDate:toDate,organizationId:Number(selectedFilters.organizationId)>0?Number(selectedFilters.organizationId):undefined,propertyCategory:selectedFilters.propertyCategory?selectedFilters.propertyCategory:undefined,agentId:Number(selectedFilters.agentId)>0?Number(selectedFilters.agentId):undefined};// get the data from the api
// leadsModule.getTrackingLeads(data).then((response) => {
//     setModuleData({
//         ...moduleData,
//         loading: false,
//         data: response.data?.data,
//         meta: response.data?.meta
//     });
// });
},[selectedFilters,leadsModule]);const onPaginationChange=(0,react.useCallback)((page,pageSize)=>{var _selectedFilters$date3,_selectedFilters$date4;setModuleData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},moduleData),{},{loading:true}));const fromDateString=((_selectedFilters$date3=selectedFilters.dateRange)===null||_selectedFilters$date3===void 0?void 0:_selectedFilters$date3[0])||"";const toDateString=((_selectedFilters$date4=selectedFilters.dateRange)===null||_selectedFilters$date4===void 0?void 0:_selectedFilters$date4[1])||"";const fromDate=fromDateString?(0,dateHandler/* convertDate */.ic)(fromDateString,"yy-mm-dd"):undefined;const toDate=toDateString?(0,dateHandler/* convertDate */.ic)(toDateString,"yy-mm-dd"):undefined;const params={page:page,perPage:pageSize,propertyId:Number(selectedFilters.propertyId)>0?Number(selectedFilters.propertyId):undefined,propertyUrl:selectedFilters.propertyUrl?selectedFilters.propertyUrl:undefined,source:selectedFilters.source?selectedFilters.source:undefined,userAgent:selectedFilters.userAgent?selectedFilters.userAgent:undefined,userIP:selectedFilters.userIP?selectedFilters.userIP:undefined,fromDate:fromDate,toDate:toDate,organizationId:Number(selectedFilters.organizationId)>0?Number(selectedFilters.organizationId):undefined,propertyCategory:selectedFilters.propertyCategory?selectedFilters.propertyCategory:undefined,agentId:Number(selectedFilters.agentId)>0?Number(selectedFilters.agentId):undefined};// leadsModule.getTrackingLeads(params).then((res) => {
//     setModuleData({ ...res.data, loading: false });
// }).catch((err) => {
//     setModuleData({ ...moduleData, loading: false });
// });
},[selectedFilters,leadsModule]);(0,react.useEffect)(()=>{if(reset){onUpdate();}// after 2 seconds set reset clicked state to false
const timer=setTimeout(()=>{setReset(false);},2000);return()=>clearTimeout(timer);},[reset,selectedFilters,onUpdate]);const reloadTableData=(0,react.useCallback)(query=>{// leadsModule.getTrackingLeads(query).then((res) => {
//     setModuleData(res.data);
// }).catch((err) => {
//     setModuleData({ ...moduleData, loading: false });
//     message.error(err?.response?.data?.message || "Something went wrong")
// });
},[leadsModule]);(0,react.useEffect)(()=>{setModuleData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},moduleData),{},{loading:true}));reloadTableData();},[]);const reloadTableDataWithFilters=(0,react.useCallback)(()=>{var _selectedFilters$date5,_selectedFilters$date6,_moduleData$meta,_moduleData$meta2;const fromDateString=((_selectedFilters$date5=selectedFilters.dateRange)===null||_selectedFilters$date5===void 0?void 0:_selectedFilters$date5[0])||"";const toDateString=((_selectedFilters$date6=selectedFilters.dateRange)===null||_selectedFilters$date6===void 0?void 0:_selectedFilters$date6[1])||"";const fromDate=fromDateString?(0,dateHandler/* convertDate */.ic)(fromDateString,"yy-mm-dd"):undefined;const toDate=toDateString?(0,dateHandler/* convertDate */.ic)(toDateString,"yy-mm-dd"):undefined;reloadTableData({perPage:(moduleData===null||moduleData===void 0?void 0:(_moduleData$meta=moduleData.meta)===null||_moduleData$meta===void 0?void 0:_moduleData$meta.perPage)||10,page:(moduleData===null||moduleData===void 0?void 0:(_moduleData$meta2=moduleData.meta)===null||_moduleData$meta2===void 0?void 0:_moduleData$meta2.page)||1,propertyId:Number(selectedFilters.propertyId)>0?Number(selectedFilters.propertyId):undefined,propertyUrl:selectedFilters.propertyUrl?selectedFilters.propertyUrl:undefined,// source: selectedFilters.source ? selectedFilters.source : undefined,
userAgent:selectedFilters.userAgent?selectedFilters.userAgent:undefined,userIP:selectedFilters.userIP?selectedFilters.userIP:undefined,fromDate:fromDate,toDate:toDate,organizationId:Number(selectedFilters.organizationId)>0?Number(selectedFilters.organizationId):undefined,propertyCategory:selectedFilters.propertyCategory?selectedFilters.propertyCategory:undefined,agentId:Number(selectedFilters.agentId)>0?Number(selectedFilters.agentId):undefined});},[moduleData,selectedFilters]);const moreFiltersOptions=[{label:"Organization",value:"organizationId"},{label:"Agent ID",value:"agentId"},{label:"Property URL",value:"propertyUrl"},{label:"Property Category",value:"propertyCategory"}];const moreComponents={organizationId:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"radio",label:"Organization",name:"organizationId",withSearch:true,options:(organizationData===null||organizationData===void 0?void 0:(_organizationData$dat=organizationData.data)===null||_organizationData$dat===void 0?void 0:_organizationData$dat.map(item=>({label:item.name,value:"".concat(item.id)})))||[],onChange:onSelected,value:Number(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.organizationId)>0?String(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.organizationId):"",onReset:()=>{setReset(true);onReset("organizationId",0);// reset the search term
setOrgSearchTerm("");},onUpdate:onUpdate// START: For search
,loading:organizationData===null||organizationData===void 0?void 0:organizationData.loading,searchTerm:orgSearchTerm,onSearch:event=>setOrgSearchTerm(event.currentTarget.value)// END: For search
}),agentId:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"input",label:"Agent ID",name:"agentId",value:(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.agentId)===0?"":String(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.agentId),onChange:onSelected,onReset:()=>onReset("agentId",0),onUpdate:onUpdate}),propertyUrl:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"input",label:"Property URL",name:"propertyUrl",value:String(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.propertyUrl),onChange:onSelected,onReset:()=>onReset("propertyUrl",""),onUpdate:onUpdate}),propertyCategory:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"radio",label:"Property Category",name:"propertyCategory",options:propertyCategories===null||propertyCategories===void 0?void 0:(_propertyCategories$d=propertyCategories.data)===null||_propertyCategories$d===void 0?void 0:_propertyCategories$d.map(item=>({label:item.localization[0].title,value:item.slug})),value:String(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.propertyCategory),onChange:onSelected,onReset:()=>onReset("propertyCategory",""),onUpdate:onUpdate})};return/*#__PURE__*/(0,jsx_runtime.jsxs)(SiteSettings["default"],{permissionSlug:permissionSlug,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* PageHeader */.zY,{heading:"Leads Tracker",breadCrumbData:breadCrumbsData,filters:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.filterWrapper,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"radio",label:"Source",name:"source",options:[],value:String(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.source),onChange:onSelected,onReset:()=>onReset("source",""),onUpdate:onUpdate})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"input",label:"Property ID",name:"propertyId",value:Number(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.propertyId)>0?String(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.propertyId):"",onChange:onSelected,onReset:()=>onReset("propertyId",0),onUpdate:onUpdate})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"input",label:"User Agent",name:"userAgent",value:String(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.userAgent),onChange:onSelected,onReset:()=>onReset("userAgent",""),onUpdate:onUpdate})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"input",label:"User IP",name:"userIP",value:String(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.userIP),onChange:onSelected,onReset:()=>onReset("userIP",""),onUpdate:onUpdate})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"datepicker",label:"Date",name:"dateRange",onChange:value=>{setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{dateRange:value}));},onReset:()=>onReset("dateRange",[]),onUpdate:onUpdate})}),/**  Find the selected filter and render the component based on the name of the filter */Object.keys(moreComponents).map(key=>{return(moreFilters===null||moreFilters===void 0?void 0:moreFilters.includes(key))&&moreComponents[key];}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(more/* default */.A,{options:moreFiltersOptions===null||moreFiltersOptions===void 0?void 0:moreFiltersOptions.map(option=>({label:option.label,value:option.value})),onChange:value=>{setMoreFilters(value);},value:moreFilters})})]})}),moduleData.loading?/*#__PURE__*/(0,jsx_runtime.jsx)(Skeletons/* default */.A,{items:5,fullWidth:true}):/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module/* default */.A.antdTableWrapper,children:/*#__PURE__*/(0,jsx_runtime.jsx)(TableComponent,{tableData:moduleData===null||moduleData===void 0?void 0:moduleData.data,tableLoading:moduleData===null||moduleData===void 0?void 0:moduleData.loading// emptyText={
// 	<Empty
// 		image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
// 		imageStyle={{
// 			height: 200,
// 		}}
// 		description={
// 			<span>
// 				No credits usage history found
// 			</span>
// 		}
// 	>
// 	</Empty>
// }
,reloadTableData:reloadTableDataWithFilters,onEditIconClick:()=>{}})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Pagination */.dK,{total:moduleData===null||moduleData===void 0?void 0:(_moduleData$meta3=moduleData.meta)===null||_moduleData$meta3===void 0?void 0:_moduleData$meta3.total,current:moduleData===null||moduleData===void 0?void 0:(_moduleData$meta4=moduleData.meta)===null||_moduleData$meta4===void 0?void 0:_moduleData$meta4.page,defaultPageSize:moduleData!==null&&moduleData!==void 0&&(_moduleData$meta5=moduleData.meta)!==null&&_moduleData$meta5!==void 0&&_moduleData$meta5.perPage?moduleData===null||moduleData===void 0?void 0:(_moduleData$meta6=moduleData.meta)===null||_moduleData$meta6===void 0?void 0:_moduleData$meta6.perPage:10,pageSizeOptions:[10,20,50,100],onChange:onPaginationChange})]})]});};/* harmony default export */ const Tracking = (LeadsTrackingSettings);

/***/ }),

/***/ 3465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ LeadsModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
/* harmony import */ var _modules_Common_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21073);
class LeadsModule{constructor(){this.endPoint="leads";/**Get all lead records
	 * @param query - query params
	 */this.getAllRecords=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint,{params:query});};/**Get lead record by id
	 * @param id - lead id
	 */this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/").concat(id));};/** Get Note by id 
	 * @param id - note id
	*/this.getNoteById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/notes/").concat(id));};/**Create new lead record
	 * @param data - lead data
	 */this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(this.endPoint+"/",data);};/**Update lead record
   * @param data - lead data
   * @param id - lead id
   */this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/").concat(id),data);};this.addNote=(id,data)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post("".concat(this.endPoint,"/addNote/").concat(id),data);};/**Change lead status
	 * @param id - lead id
	 * @param status - lead status
	 */this.changeStatus=(id,status)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/changeStatus/").concat(id),{status});};/**Add note to lead
	 * @param id - lead id
	 * @param data - note data
	 * @property `data.note` - note text
	 * @property `data.isConcern` - is concern note
	 */ /** Get Note by id
	 * @param id - note id
	*/this.notelogs=(id,query)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/logs/").concat(id),{params:query});};/**Assign Lead
	* @param data.assignedToId - user id
	* @param id - lead id
	*/this.assignLead=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/assignLead/").concat(id),data);};/**Delete record by id
	 * @param id - lead id
	*/this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete("".concat(this.endPoint,"/remove/").concat(id));};/**Remove note from lead
	 * @param id - Note id
	 */this.removeNote=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete("".concat(this.endPoint,"/removeNote/").concat(id));};/** Upload lead file
	 * @property `file` - file to upload
	 * @property `leadId` - lead id
	 */this.uploadFile=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post("".concat(this.endPoint,"/uploadLeadsDocuments"),data,{headers:_modules_Common_config__WEBPACK_IMPORTED_MODULE_1__/* .FormDataHeader */ .Y});};/** Remove lead file by id
	* @param id - file id
	*/this.removeFile=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete("".concat(this.endPoint,"/removeDocument/").concat(id));};/**Mark Concern As Resolved
	 * @param id - note id
	 */this.markConcernAsResolved=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/markConcernAsResolved/").concat(id));};/** Get Lead Statuses Total Counts */this.getCounts=()=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/getCounts"));};}}

/***/ }),

/***/ 42361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ OrganizationModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
/* harmony import */ var _modules_Common_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21073);
class OrganizationModule{constructor(){this.endPoint="organization";/**Get all organization records
     * @param query - query params
     */this.getAllRecords=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint,{params:query});};/**Get all organization records
     * @param query - query params
     */this.findPublished=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint+"/find-published",{params:query});};/**Get organization record by id
     * @param id - organization id
     */this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/").concat(id));};/**Delete organization record
    * @param id - organization id
    */this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete("".concat(this.endPoint,"/").concat(id));};/**Create new organization record
     * @param data - organization data
     */this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(this.endPoint,data,{headers:_modules_Common_config__WEBPACK_IMPORTED_MODULE_1__/* .FormDataHeader */ .Y});};/**Update organization record
    * @param data - organization data
    * @param id - organization id
    */this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/").concat(id),data,{headers:_modules_Common_config__WEBPACK_IMPORTED_MODULE_1__/* .FormDataHeader */ .Y});};this.getTenants=()=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("xero/getTenants");};}}

/***/ }),

/***/ 90831:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ PropertyCategoryModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
class PropertyCategoryModule{constructor(){this.endPoint="project-type";this.getAllRecords=()=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* .BASE_URL */ .C+this.endPoint);};this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* .BASE_URL */ .C+this.endPoint+"/"+id);};this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* .BASE_URL */ .C+this.endPoint+"/"+id);};this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* .BASE_URL */ .C+this.endPoint,data);};this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* .BASE_URL */ .C+this.endPoint+"/"+id,data);};}}

/***/ })

}]);