"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[79],{

/***/ 10079:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Dashboard_UserRating)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./src/Components/Atoms/index.tsx + 12 modules
var Atoms = __webpack_require__(9394);
// EXTERNAL MODULE: ./src/Components/Organisms/Skeletons/index.tsx
var Skeletons = __webpack_require__(70619);
// EXTERNAL MODULE: ./node_modules/antd/es/rate/index.js + 5 modules
var rate = __webpack_require__(56350);
// EXTERNAL MODULE: ./node_modules/antd/es/table/index.js + 96 modules
var table = __webpack_require__(41821);
// EXTERNAL MODULE: ./src/helpers/dateHandler.ts
var dateHandler = __webpack_require__(98933);
// EXTERNAL MODULE: ./src/Components/Icons/index.tsx + 58 modules
var Icons = __webpack_require__(63668);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/Dashboard/UserRating/table-columns.tsx
// import { UserRatingHelpType, UserRatingStatus } from "../../../../helpers/commonEnums";
function TableComponent(props){const{tableData,tableLoading,emptyText}=props;const columns=[{title:"S.No",dataIndex:"index",key:"index",render:(_text,_record,index)=>index+1,width:"60px"},{title:'Rated By',dataIndex:"ratedBy",key:"ratedBy",render:(_ratedBy,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"d-flex",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"my-auto",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",children:"".concat(record.name)}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"d-flex mt-1",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Icons/* CalenderIcon */.e$,{className:"mr-2"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-sub",size:"sm",children:"".concat((0,dateHandler/* convertDate */.ic)(record.addedDate,"dd MM yy"))})]})]})}),width:"13%"},{title:'Rated To',dataIndex:"user",key:"user",render:user=>/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"d-flex",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"my-auto",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",children:"Agent: ".concat(user.firstName," ").concat(user.lastName)}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-sub",size:"sm",children:"Org: ".concat(user.Organization.name)}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-sub",size:"sm",children:"UserID: ".concat(user.id)})]})}),width:"15%"},{title:'Message',dataIndex:"message",key:"message",render:message=>/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",children:message}),width:"15%"},{title:'Rating',dataIndex:"rating",key:"rating",render:rating=>/*#__PURE__*/(0,jsx_runtime.jsx)(rate/* default */.A,{defaultValue:rating,allowHalf:true,disabled:true,style:{fontSize:"16px"}})},{title:'Property Link',dataIndex:"propertyLink",key:"propertyLink",className:"text-center",render:propertyLink=>/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)("a",{href:propertyLink,target:"_blank",rel:"noreferrer",title:"View Property On Main Website (Users Website)",children:["View",/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",height:"16px",width:"17px",className:"ml-1",children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"})})]})})},{title:'Reference Number',dataIndex:"referenceNumber",key:"referenceNumber",className:'text-center',render:referenceNumber=>/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",children:referenceNumber})}// {
//     title: 'Status',
//     dataIndex: "status",
//     key: "status",
//     className: 'text-center',
//     render: (status: number) => (
//         <Typography color="dark-main" size="sm">
//             {UserRatingStatus[status]}
//         </Typography>
//     ),
// },
// {
//     title: 'Help Type',
//     dataIndex: "helpType",
//     key: "helpType",
//     className: 'text-center',
//     render: (helpType: number) => (
//         <Typography color="dark-main" size="sm">
//             {UserRatingHelpType[helpType]}
//         </Typography>
//     ),
// },
];return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(table/* default */.A,{sticky:true,dataSource:tableData,columns:columns,pagination:false,scroll:{x:991},loading:tableLoading,rowKey:record=>"user-rating-".concat(record.id),locale:{emptyText:emptyText}})});}
// EXTERNAL MODULE: ./src/Modules/UserRating/index.ts
var UserRating = __webpack_require__(79888);
// EXTERNAL MODULE: ./src/Components/Organisms/Common/styles.module.scss
var styles_module = __webpack_require__(96019);
// EXTERNAL MODULE: ./src/Components/Templates/Layout/index.tsx + 28 modules
var Layout = __webpack_require__(81168);
// EXTERNAL MODULE: ./src/helpers/common.ts
var common = __webpack_require__(88132);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 1 modules
var message = __webpack_require__(92759);
// EXTERNAL MODULE: ./src/Modules/UserRating/permissions.ts
var UserRating_permissions = __webpack_require__(60908);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(98341);
// EXTERNAL MODULE: ./src/Components/Atoms/ErrorCodes/index.tsx + 1 modules
var ErrorCodes = __webpack_require__(36250);
;// ./src/Components/Organisms/Dashboard/UserRating/index.tsx
// import { UserRatingStatusString } from "../../../../helpers/commonEnums";
const breadCrumbsData=[{text:"Home",isLink:true,path:"/"},{isLink:false,text:"User Ratings"}];const UserRatingDashboard=()=>{var _moduleData$meta3,_moduleData$meta4,_moduleData$meta5,_moduleData$meta6;// available permissions for the properties page
const permissionSlug=(0,common/* getPermissionSlugs */.AH)(UserRating_permissions/* UserRatingPermissionsEnum */.O);const{userPermissions}=(0,es/* useSelector */.d4)(state=>state.usersReducer);const permissions=userPermissions;const{readUserRating}=permissions;const[moduleData,setModuleData]=(0,react.useState)({loading:false,data:[]});const[selectedFilters,setSelectedFilters]=(0,react.useState)({status:"",dateRange:[""],propertyId:0,agentId:0,propertyLink:""});const[reset,setReset]=(0,react.useState)(false);const module=(0,react.useMemo)(()=>new UserRating/* UserRatingModule */.l(),[]);const onSelected=event=>{const{name,value}=event===null||event===void 0?void 0:event.target;if(name==="agentId"||name==="propertyId"){const isValidNumber=(0,common/* isNumber */.Et)(value);if(!isValidNumber){let label="";switch(name){case"agentId":{label="Agent ID";break;}case"propertyId":{label="Property ID";break;}}message/* default */.Ay.error("".concat(label," should be a number"));return;}}// set the selected value in the state 
setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{[name]:value}));};const onReset=(0,react.useCallback)((name,value)=>{if(name){setReset(true);setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{[name]:value}));}},[selectedFilters]);const onUpdate=(0,react.useCallback)(()=>{var _selectedFilters$date,_selectedFilters$date2;const fromDateString=((_selectedFilters$date=selectedFilters.dateRange)===null||_selectedFilters$date===void 0?void 0:_selectedFilters$date[0])||"";const toDateString=((_selectedFilters$date2=selectedFilters.dateRange)===null||_selectedFilters$date2===void 0?void 0:_selectedFilters$date2[1])||"";const fromDate=fromDateString?(0,dateHandler/* convertDate */.ic)(fromDateString,"yy-mm-dd"):undefined;const toDate=toDateString?(0,dateHandler/* convertDate */.ic)(toDateString,"yy-mm-dd"):undefined;const data={status:selectedFilters.status?selectedFilters.status:undefined,propertyId:Number(selectedFilters.propertyId)>0?Number(selectedFilters.propertyId):undefined,agentId:Number(selectedFilters.agentId)>0?Number(selectedFilters.agentId):undefined,propertyLink:selectedFilters.propertyLink?selectedFilters.propertyLink:undefined,fromDate:fromDate,toDate:toDate};// get the data from the api
module.getAllRecords(data).then(response=>{var _response$data,_response$data2;setModuleData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},moduleData),{},{loading:false,data:(_response$data=response.data)===null||_response$data===void 0?void 0:_response$data.data,meta:(_response$data2=response.data)===null||_response$data2===void 0?void 0:_response$data2.meta}));});},[selectedFilters,module]);const onPaginationChange=(0,react.useCallback)((page,pageSize)=>{var _selectedFilters$date3,_selectedFilters$date4;setModuleData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},moduleData),{},{loading:true}));const fromDateString=((_selectedFilters$date3=selectedFilters.dateRange)===null||_selectedFilters$date3===void 0?void 0:_selectedFilters$date3[0])||"";const toDateString=((_selectedFilters$date4=selectedFilters.dateRange)===null||_selectedFilters$date4===void 0?void 0:_selectedFilters$date4[1])||"";const fromDate=fromDateString?(0,dateHandler/* convertDate */.ic)(fromDateString,"yy-mm-dd"):undefined;const toDate=toDateString?(0,dateHandler/* convertDate */.ic)(toDateString,"yy-mm-dd"):undefined;const params={page:page,perPage:pageSize,status:selectedFilters.status?selectedFilters.status:undefined,propertyId:Number(selectedFilters.propertyId)>0?Number(selectedFilters.propertyId):undefined,agentId:Number(selectedFilters.agentId)>0?Number(selectedFilters.agentId):undefined,propertyLink:selectedFilters.propertyLink?selectedFilters.propertyLink:undefined,fromDate:fromDate,toDate:toDate};module.getAllRecords(params).then(res=>{setModuleData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},res.data),{},{loading:false}));}).catch(err=>{setModuleData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},moduleData),{},{loading:false}));});},[selectedFilters,module]);(0,react.useEffect)(()=>{if(reset){onUpdate();}// after 2 seconds set reset clicked state to false
const timer=setTimeout(()=>{setReset(false);},2000);return()=>clearTimeout(timer);},[reset,selectedFilters,onUpdate]);const reloadTableData=(0,react.useCallback)(query=>{module.getAllRecords(query).then(res=>{setModuleData(res.data);}).catch(err=>{});},[module]);(0,react.useEffect)(()=>{setModuleData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},moduleData),{},{loading:true}));reloadTableData();},[]);const reloadTableDataWithFilters=(0,react.useCallback)(()=>{var _selectedFilters$date5,_selectedFilters$date6,_moduleData$meta,_moduleData$meta2;const fromDateString=((_selectedFilters$date5=selectedFilters.dateRange)===null||_selectedFilters$date5===void 0?void 0:_selectedFilters$date5[0])||"";const toDateString=((_selectedFilters$date6=selectedFilters.dateRange)===null||_selectedFilters$date6===void 0?void 0:_selectedFilters$date6[1])||"";const fromDate=fromDateString?(0,dateHandler/* convertDate */.ic)(fromDateString,"yy-mm-dd"):undefined;const toDate=toDateString?(0,dateHandler/* convertDate */.ic)(toDateString,"yy-mm-dd"):undefined;reloadTableData({perPage:(moduleData===null||moduleData===void 0?void 0:(_moduleData$meta=moduleData.meta)===null||_moduleData$meta===void 0?void 0:_moduleData$meta.perPage)||10,page:(moduleData===null||moduleData===void 0?void 0:(_moduleData$meta2=moduleData.meta)===null||_moduleData$meta2===void 0?void 0:_moduleData$meta2.page)||1,status:selectedFilters.status?selectedFilters.status:undefined,propertyId:Number(selectedFilters.propertyId)>0?Number(selectedFilters.propertyId):undefined,agentId:Number(selectedFilters.agentId)>0?Number(selectedFilters.agentId):undefined,propertyLink:selectedFilters.propertyLink?selectedFilters.propertyLink:undefined,fromDate:fromDate,toDate:toDate});},[moduleData,selectedFilters]);//TODO: add permissions 
return/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.A,{permissionSlug:permissionSlug,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* PageHeader */.zY,{heading:"User Ratings",breadCrumbData:breadCrumbsData,filters:readUserRating?/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.filterWrapper,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"radio",label:"Status",name:"status",options:[],value:String(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.status),onChange:onSelected,onReset:()=>onReset("status",""),onUpdate:onUpdate})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"input",label:"Agent ID",name:"agentId",value:(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.agentId)>0?String(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.agentId):"",onChange:onSelected,onReset:()=>onReset("agentId",0),onUpdate:onUpdate})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"input",label:"Property Link",name:"propertyLink",value:String(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.propertyLink),onChange:onSelected,onReset:()=>onReset("propertyLink",""),onUpdate:onUpdate})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"input",label:"Property ID",name:"propertyId",value:Number(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.propertyId)>0?String(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.propertyId):"",onChange:onSelected,onReset:()=>onReset("propertyId",0),onUpdate:onUpdate})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"datepicker",label:"Date",name:"dateRange",onChange:value=>{setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{dateRange:value}));},onReset:()=>onReset("dateRange",[]),onUpdate:onUpdate})})]}):null}),moduleData.loading?/*#__PURE__*/(0,jsx_runtime.jsx)(Skeletons/* default */.A,{items:5,fullWidth:true}):/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[readUserRating===true&&/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module/* default */.A.antdTableWrapper,children:/*#__PURE__*/(0,jsx_runtime.jsx)(TableComponent,{tableData:moduleData===null||moduleData===void 0?void 0:moduleData.data,tableLoading:moduleData===null||moduleData===void 0?void 0:moduleData.loading,reloadTableData:reloadTableDataWithFilters,onEditIconClick:()=>{}})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Pagination */.dK,{total:moduleData===null||moduleData===void 0?void 0:(_moduleData$meta3=moduleData.meta)===null||_moduleData$meta3===void 0?void 0:_moduleData$meta3.total,current:moduleData===null||moduleData===void 0?void 0:(_moduleData$meta4=moduleData.meta)===null||_moduleData$meta4===void 0?void 0:_moduleData$meta4.page,defaultPageSize:moduleData!==null&&moduleData!==void 0&&(_moduleData$meta5=moduleData.meta)!==null&&_moduleData$meta5!==void 0&&_moduleData$meta5.perPage?moduleData===null||moduleData===void 0?void 0:(_moduleData$meta6=moduleData.meta)===null||_moduleData$meta6===void 0?void 0:_moduleData$meta6.perPage:10,pageSizeOptions:[10,20,50,100],onChange:onPaginationChange})]}),readUserRating===false&&/*#__PURE__*/(0,jsx_runtime.jsx)(ErrorCodes/* ErrorCode403 */.$t,{mainMessage:"You don't have permission to view this data"})]})]});};/* harmony default export */ const Dashboard_UserRating = (UserRatingDashboard);

/***/ }),

/***/ 79888:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ UserRatingModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
class UserRatingModule{constructor(){this.endPoint="user-rating";this.getAllRecords=queryData=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint,{params:queryData});};this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/").concat(id));};this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(this.endPoint+"/",data);};this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/").concat(id),data);};this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete("".concat(this.endPoint,"/").concat(id));};}}

/***/ }),

/***/ 60908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ UserRatingPermissionsEnum)
/* harmony export */ });
let UserRatingPermissionsEnum=/*#__PURE__*/function(UserRatingPermissionsEnum){UserRatingPermissionsEnum["CREATE"]="createUserRating";UserRatingPermissionsEnum["UPDATE"]="updateUserRating";UserRatingPermissionsEnum["DELETE"]="deleteUserRating";UserRatingPermissionsEnum["READ"]="readUserRating";return UserRatingPermissionsEnum;}({});

/***/ })

}]);