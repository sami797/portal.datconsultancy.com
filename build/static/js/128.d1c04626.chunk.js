"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[128],{

/***/ 60082:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Dashboard_EmployeeRequests)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./src/Components/Atoms/index.tsx + 12 modules
var Atoms = __webpack_require__(9394);
// EXTERNAL MODULE: ./src/Components/Templates/Layout/index.tsx + 28 modules
var Layout = __webpack_require__(81168);
;// ./src/Components/Organisms/Dashboard/EmployeeRequests/styles.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"container":"styles_container__XjEKj","requestContainer":"styles_requestContainer__6X25K","head":"styles_head__Abz0j","containerTitle":"styles_containerTitle__pksro","cardContainer":"styles_cardContainer__ADgfC"});
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 1 modules
var message = __webpack_require__(92759);
// EXTERNAL MODULE: ./node_modules/antd/es/select/index.js + 30 modules
var es_select = __webpack_require__(97554);
// EXTERNAL MODULE: ./node_modules/antd/es/empty/index.js + 2 modules
var empty = __webpack_require__(90247);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(48538);
// EXTERNAL MODULE: ./node_modules/antd/es/skeleton/index.js + 11 modules
var skeleton = __webpack_require__(46005);
// EXTERNAL MODULE: ./src/hooks/index.ts + 5 modules
var hooks = __webpack_require__(91970);
// EXTERNAL MODULE: ./src/Modules/CarReservation/index.ts
var CarReservation = __webpack_require__(42926);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(98341);
// EXTERNAL MODULE: ./src/Modules/CarReservation/permissions.ts
var permissions = __webpack_require__(35902);
// EXTERNAL MODULE: ./src/Modules/LeaveRequest/index.ts
var LeaveRequest = __webpack_require__(50982);
// EXTERNAL MODULE: ./src/Modules/Reimbursement/index.ts
var Reimbursement = __webpack_require__(48770);
// EXTERNAL MODULE: ./src/Modules/CashAdvance/index.ts
var CashAdvance = __webpack_require__(59125);
// EXTERNAL MODULE: ./src/Components/Organisms/Dashboard/MyServices/CarReservation/CarReservationDrawer/index.tsx + 1 modules
var CarReservationDrawer = __webpack_require__(97251);
// EXTERNAL MODULE: ./src/Components/Organisms/Dashboard/MyServices/CarReservation/card.tsx
var card = __webpack_require__(82393);
// EXTERNAL MODULE: ./src/Components/Organisms/Dashboard/MyServices/LeaveRequest/card.tsx
var LeaveRequest_card = __webpack_require__(51297);
// EXTERNAL MODULE: ./src/Components/Organisms/Dashboard/MyServices/Reimbursement/card.tsx
var Reimbursement_card = __webpack_require__(60415);
// EXTERNAL MODULE: ./src/Components/Organisms/Dashboard/MyServices/CashAdvance/card.tsx
var CashAdvance_card = __webpack_require__(22128);
// EXTERNAL MODULE: ./src/Components/Organisms/Dashboard/MyServices/LeaveRequest/LeaveRequestDrawer/index.tsx + 1 modules
var LeaveRequestDrawer = __webpack_require__(95251);
// EXTERNAL MODULE: ./src/Components/Organisms/Dashboard/MyServices/Reimbursement/ReimbursementDrawer/index.tsx + 1 modules
var ReimbursementDrawer = __webpack_require__(93305);
// EXTERNAL MODULE: ./src/Components/Organisms/Dashboard/MyServices/CashAdvance/CashAdvanceDrawer/index.tsx + 1 modules
var CashAdvanceDrawer = __webpack_require__(69493);
// EXTERNAL MODULE: ./src/Modules/User/index.ts
var User = __webpack_require__(47645);
// EXTERNAL MODULE: ./src/helpers/useDebounce.ts
var useDebounce = __webpack_require__(28173);
// EXTERNAL MODULE: ./node_modules/react-infinite-scroll-component/dist/index.es.js
var index_es = __webpack_require__(50416);
// EXTERNAL MODULE: ./src/helpers/common.ts
var common = __webpack_require__(88132);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/Dashboard/EmployeeRequests/index.tsx
const breadCrumbsData=[{text:"Home",isLink:true,path:"/"},{isLink:true,text:"Employee Requests",path:"/employee-requests"}];const EmployeeRequests=()=>{// available permissions for the properties page
const permissionSlug=(0,common/* getPermissionSlugs */.AH)(permissions/* CarReservationPermissionsEnum */.y);const{userPermissions}=(0,es/* useSelector */.d4)(state=>state.usersReducer);const carReservationPermissions=userPermissions;const leaveRequestPermissions=userPermissions;const reimbursementPermissions=userPermissions;const cashAdvancePermissions=userPermissions;const carReservationModule=(0,react.useMemo)(()=>new CarReservation/* CarReservationModule */.n(),[]);const leaveRequestModule=(0,react.useMemo)(()=>new LeaveRequest/* LeaveRequestModule */.j(),[]);const reimbursementModule=(0,react.useMemo)(()=>new Reimbursement/* ReimbursementModule */.$(),[]);const cashAdvanceModule=(0,react.useMemo)(()=>new CashAdvance/* CashAdvanceModule */.g(),[]);const{data:carReservationData,onRefresh:carReservationRefresh,setData:carReservationSetData,meta:carReservationMeta,setMeta:carReservationSetMeta,loading:carReservationLoading}=(0,hooks/* useFetchData */.Gs)({method:carReservationModule.getAllRecords,initialQuery:{fetchOpenRequest:true}});const{data:leaveRequestData,onRefresh:leaveRequestRefresh,setData:leaveRequestSetData,meta:leaveRequestMeta,setMeta:leaveRequestSetMeta,loading:leaveRequestLoading}=(0,hooks/* useFetchData */.Gs)({method:leaveRequestModule.getAllRecords,initialQuery:{fetchOpenRequest:true}});const{data:reimbursementData,onRefresh:reimbursementRefresh,setData:reimbursementSetData,meta:reimbursementMeta,setMeta:reimbursementSetMeta,loading:reimbursementLoading}=(0,hooks/* useFetchData */.Gs)({method:reimbursementModule.getAllRecords,initialQuery:{fetchOpenRequest:true}});const{data:cashAdvanceData,onRefresh:cashAdvanceRefresh,setData:cashAdvanceSetData,meta:cashAdvanceMeta,setMeta:cashAdvanceSetMeta,loading:cashAdvanceLoading}=(0,hooks/* useFetchData */.Gs)({method:cashAdvanceModule.getAllRecords,initialQuery:{fetchOpenRequest:true}});const[drawer,setDrawer]=(0,react.useState)({carReservation:{open:false,recordId:0,data:carReservationData,title:'Car Reservation Requests',card:(carReservation,onClick)=>(0,card/* CarReservationCard */.V)({carReservation,onClick,isFullWidth:true}),meta:carReservationMeta,setMeta:carReservationSetMeta,setData:carReservationSetData,module:carReservationModule},leaveRequest:{open:false,recordId:0,data:leaveRequestData,title:'Leave Requests',card:(leaveRequest,onClick)=>(0,LeaveRequest_card/* LeaveRequestCard */.Z)({leaveRequest,onClick,isFullWidth:true}),meta:leaveRequestMeta,setMeta:leaveRequestSetMeta,setData:leaveRequestSetData,module:leaveRequestModule},reimbursement:{open:false,recordId:0,data:reimbursementData,title:'Reimbursement Requests',card:(reimbursement,onClick)=>(0,Reimbursement_card/* ReimbursementCard */.x)({reimbursement,onClick,isFullWidth:true}),meta:reimbursementMeta,setMeta:reimbursementSetMeta,setData:reimbursementSetData,module:reimbursementModule},cashAdvance:{open:false,recordId:0,data:cashAdvanceData,title:'Cash Advance Requests',card:(cashAdvance,onClick)=>(0,CashAdvance_card/* CashAdvanceCard */.a)({cashAdvance,onClick,isFullWidth:true}),meta:cashAdvanceMeta,setMeta:cashAdvanceSetMeta,setData:cashAdvanceSetData,module:cashAdvanceModule}});const handleDrawerClose=drawerType=>{setDrawer(prevDrawer=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prevDrawer),{},{[drawerType]:(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prevDrawer[drawerType]),{},{open:false,recordId:0})}));};(0,react.useEffect)(()=>{if(carReservationData&&leaveRequestData&&reimbursementData&&cashAdvanceData){setDrawer({carReservation:(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},drawer.carReservation),{},{data:carReservationData,meta:carReservationMeta}),leaveRequest:(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},drawer.leaveRequest),{},{data:leaveRequestData,meta:leaveRequestMeta}),reimbursement:(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},drawer.reimbursement),{},{data:reimbursementData,meta:reimbursementMeta}),cashAdvance:(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},drawer.cashAdvance),{},{data:cashAdvanceData,meta:cashAdvanceMeta})});}},[carReservationData,leaveRequestData,reimbursementData,cashAdvanceData]);//user search
const[searchTermUser,setSearchTermUser]=(0,react.useState)("");const debouncedSearchTermUser=(0,useDebounce/* useDebounce */.d)(searchTermUser,500);const[users,setUsers]=(0,react.useState)([]);const userModule=(0,react.useMemo)(()=>new User/* UserModule */.U(),[]);const onUserSearch=(0,react.useCallback)(()=>{if(debouncedSearchTermUser){userModule.getAllRecords({name:debouncedSearchTermUser}).then(res=>{setUsers(prev=>{var _res$data,_res$data$data;// if the data is already present in the state, then don't add it again
const filteredData=res===null||res===void 0?void 0:(_res$data=res.data)===null||_res$data===void 0?void 0:(_res$data$data=_res$data.data)===null||_res$data$data===void 0?void 0:_res$data$data.filter(item=>{return!(prev!==null&&prev!==void 0&&prev.find(prevItem=>prevItem.id===item.id));});// add the new data to the existing data
return[...prev,...filteredData];});}).catch(err=>{message/* default */.Ay.error(err.response.data.message);});}},[debouncedSearchTermUser]);(0,react.useEffect)(()=>{onUserSearch();},[onUserSearch]);return/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.A,{permissionSlug:permissionSlug,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* PageHeader */.zY,{heading:"Employee Requests",breadCrumbData:breadCrumbsData,filters:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{marginTop:'1.5rem'},children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{minWidth:"15%"},children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.A,{allowClear:true,placeholder:"Search for the user",className:"selectAntdCustom",onChange:value=>{carReservationRefresh({userId:value});leaveRequestRefresh({userId:value});cashAdvanceRefresh({userId:value});reimbursementRefresh({userId:value});},showSearch:true,onSearch:value=>setSearchTermUser(value),optionFilterProp:"label",options:users===null||users===void 0?void 0:users.map(item=>{return{label:item.firstName+" "+item.lastName,value:item.id};}),notFoundContent:/*#__PURE__*/(0,jsx_runtime.jsx)(empty/* default */.A,{image:"https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg",imageStyle:{height:100},description:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:"No data found, Please search for the manager"})})})})})}),/*#__PURE__*/(0,jsx_runtime.jsx)("section",{className:styles_module.container,children:Object.entries(drawer).map(_ref=>{var _value$data,_value$meta2,_value$meta3;let[key,value]=_ref;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.requestContainer,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.head,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.containerTitle,children:value.title}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.A,{size:"small",href:"/employee-requests/"+value.title.toLowerCase().replaceAll(" ","-"),children:"Manage"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(index_es/* default */.A,{dataLength:((_value$data=value.data)===null||_value$data===void 0?void 0:_value$data.length)||0,next:()=>{var _value$meta;value.module.getAllRecords({page:Number((_value$meta=value.meta)===null||_value$meta===void 0?void 0:_value$meta.page)+1,fetchOpenRequest:true}).then(res=>{value.setData([...value.data,...res.data.data]);value.setMeta(res.data.meta);});},hasMore:Number((_value$meta2=value.meta)===null||_value$meta2===void 0?void 0:_value$meta2.pageCount)>Number((_value$meta3=value.meta)===null||_value$meta3===void 0?void 0:_value$meta3.page),loader:/*#__PURE__*/(0,jsx_runtime.jsx)(skeleton/* default */.A,{active:true}),height:'40vh'// scrollThreshold={0.75}
,className:"infinite-scroll-wrap",children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.cardContainer,children:carReservationLoading||cashAdvanceLoading||leaveRequestLoading||reimbursementLoading?/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{display:'flex',flexDirection:'column',gap:'0.5rem'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(skeleton/* default */.A.Input,{size:"large",active:true,style:{height:'115px',width:'100%',borderRadius:'0.25rem'}}),/*#__PURE__*/(0,jsx_runtime.jsx)(skeleton/* default */.A.Input,{size:"large",active:true,style:{height:'115px',width:'100%',borderRadius:'0.25rem'}})]}):value.data&&value.data.length>0?value.data.map((item,index)=>/*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment,{children:value.card(item,()=>{setDrawer((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},drawer),{},{[key]:(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},drawer[key]),{},{open:true,recordId:item.id})}));})},index)):/*#__PURE__*/(0,jsx_runtime.jsx)(empty/* default */.A,{image:"https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg",imageStyle:{height:100},description:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:"No open requests"})})})})]});})}),drawer.carReservation.open&&/*#__PURE__*/(0,jsx_runtime.jsx)(CarReservationDrawer/* CarReservationDrawer */.a,{openDrawer:drawer.carReservation.open,onClose:()=>handleDrawerClose('carReservation'),permissions:carReservationPermissions,record:drawer.carReservation.recordId,reloadTableData:carReservationRefresh}),drawer.leaveRequest.open&&/*#__PURE__*/(0,jsx_runtime.jsx)(LeaveRequestDrawer/* LeaveRequestDrawer */.Y,{openDrawer:drawer.leaveRequest.open,onClose:()=>handleDrawerClose('leaveRequest'),permissions:leaveRequestPermissions,record:drawer.leaveRequest.recordId,reloadTableData:leaveRequestRefresh}),drawer.reimbursement.open&&/*#__PURE__*/(0,jsx_runtime.jsx)(ReimbursementDrawer/* ReimbursementDrawer */.O,{openDrawer:drawer.reimbursement.open,onClose:()=>handleDrawerClose('reimbursement'),permissions:reimbursementPermissions,record:drawer.reimbursement.recordId,reloadTableData:reimbursementRefresh}),drawer.cashAdvance.open&&/*#__PURE__*/(0,jsx_runtime.jsx)(CashAdvanceDrawer/* CashAdvanceDrawer */.x,{openDrawer:drawer.cashAdvance.open,onClose:()=>handleDrawerClose('cashAdvance'),permissions:cashAdvancePermissions,record:drawer.cashAdvance.recordId,reloadTableData:cashAdvanceRefresh})]});};/* harmony default export */ const Dashboard_EmployeeRequests = (EmployeeRequests);

/***/ }),

/***/ 97251:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  a: () => (/* binding */ CarReservationDrawer)
});

// EXTERNAL MODULE: ./node_modules/antd/es/typography/index.js + 15 modules
var typography = __webpack_require__(30377);
// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 18 modules
var es_form = __webpack_require__(10678);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 1 modules
var message = __webpack_require__(92759);
// EXTERNAL MODULE: ./node_modules/antd/es/drawer/index.js + 6 modules
var drawer = __webpack_require__(73780);
// EXTERNAL MODULE: ./node_modules/antd/es/image/index.js + 13 modules
var es_image = __webpack_require__(9206);
// EXTERNAL MODULE: ./node_modules/antd/es/select/index.js + 30 modules
var es_select = __webpack_require__(97554);
// EXTERNAL MODULE: ./node_modules/antd/es/empty/index.js + 2 modules
var empty = __webpack_require__(90247);
// EXTERNAL MODULE: ./node_modules/antd/es/radio/index.js + 4 modules
var es_radio = __webpack_require__(17811);
// EXTERNAL MODULE: ./src/Components/Atoms/index.tsx + 12 modules
var Atoms = __webpack_require__(9394);
;// ./src/Components/Organisms/Dashboard/MyServices/CarReservation/CarReservationDrawer/styles.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"drawerContainer":"styles_drawerContainer__FVUNP","attachmentsWrap":"styles_attachmentsWrap__bTiEQ","attachment":"styles_attachment__TOAPl","amountWrap":"styles_amountWrap__22LFk","priceText":"styles_priceText__F-LKp","resourceWrap":"styles_resourceWrap__r9oLg","hrWrap":"styles_hrWrap__0hnCw","title":"styles_title__9ZR1Z","hrInputs":"styles_hrInputs__ksQlU","dateWrap":"styles_dateWrap__t+fyn","fromDate":"styles_fromDate__CB4D0","bold":"styles_bold__ksUZE","footerWrap":"styles_footerWrap__q2KzL","buttonWrap":"styles_buttonWrap__q4BAS","financeWrap":"styles_financeWrap__fkhWq","actionsWrap":"styles_actionsWrap__BU1bg"});
// EXTERNAL MODULE: ./src/helpers/commonEnums.ts
var commonEnums = __webpack_require__(2360);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./src/hooks/index.ts + 5 modules
var hooks = __webpack_require__(91970);
// EXTERNAL MODULE: ./src/helpers/dateHandler.ts
var dateHandler = __webpack_require__(98933);
// EXTERNAL MODULE: ./src/Modules/CarReservation/index.ts
var CarReservation = __webpack_require__(42926);
// EXTERNAL MODULE: ./node_modules/pdfjs-dist/build/pdf.js
var pdf = __webpack_require__(73114);
// EXTERNAL MODULE: ./node_modules/react-pdf/dist/esm/Document.js + 1 modules
var Document = __webpack_require__(39087);
// EXTERNAL MODULE: ./node_modules/react-pdf/dist/esm/Page.js + 12 modules
var Page = __webpack_require__(93852);
// EXTERNAL MODULE: ./src/services/axiosInstance.ts
var axiosInstance = __webpack_require__(83365);
// EXTERNAL MODULE: ./src/services/tokenService.ts
var tokenService = __webpack_require__(92966);
// EXTERNAL MODULE: ./src/helpers/constants.ts
var constants = __webpack_require__(65944);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(59051);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./src/Modules/CompanyAsset/index.ts
var CompanyAsset = __webpack_require__(23803);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/Dashboard/MyServices/CarReservation/CarReservationDrawer/index.tsx
const{Text}=typography/* default */.A;const CarReservationDrawer=_ref=>{var _CarReservationReques,_data$RequestBy,_data$RequestBy2,_data$Attachments,_CarReservationReques2,_data$AdminActions$,_data$AdminActions$2;let{openDrawer,onClose,record,permissions,reloadTableData}=_ref;pdf.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(pdf.version,"/pdf.worker.js");// const user = TokenService.getUserData();
const[form]=es_form/* default */.A.useForm();const[isLoading,setisLoading]=(0,react.useState)(false);const[errorMessage,setErrorMessage]=(0,react.useState)("");const module=new CarReservation/* CarReservationModule */.n();const{data,onRefresh}=(0,hooks/* useFetchData */.Gs)({method:()=>module.getRecordById(record)});const access_token=tokenService/* default */.A.getLocalAccessToken();const{updatecarReservationRequest,carReservationRequestHRApproval}=permissions;const onFinish=formValues=>{setisLoading(true);if(updatecarReservationRequest===true){module.hrActionCarReservation({companyCarId:formValues.companyCarId,comment:formValues.comment,status:formValues.status},record).then(()=>{reloadTableData();setisLoading(false);onRefresh();form.resetFields();}).catch(err=>{var _err$response,_err$response$data;message/* default */.Ay.error(err===null||err===void 0?void 0:(_err$response=err.response)===null||_err$response===void 0?void 0:(_err$response$data=_err$response.data)===null||_err$response$data===void 0?void 0:_err$response$data.message);setisLoading(false);});}else{message/* default */.Ay.error("You don't have permission to update this record");setisLoading(false);}};//company cars
const assetModule=new CompanyAsset/* CompanyAssetModule */.q();const{data:companyCars}=(0,hooks/* useFetchData */.Gs)({method:assetModule.getCars});const checkAvailabilityOfCar=companyCarId=>{setErrorMessage("");module.checkAvailability({companyCarId:companyCarId,fromDate:(data===null||data===void 0?void 0:data.fromDate.toString())||"",toDate:(data===null||data===void 0?void 0:data.toDate.toString())||""}).then(res=>{if(res.data.data.isAvailable){return;}else{setErrorMessage("The car is already booked for these dates");}}).catch(()=>{message/* default */.Ay.error("Something went wrong");});};return/*#__PURE__*/(0,jsx_runtime.jsx)("section",{className:styles_module.container,children:/*#__PURE__*/(0,jsx_runtime.jsx)(drawer/* default */.A,{title:"CRR-".concat(data===null||data===void 0?void 0:data.id," - (").concat(data!==null&&data!==void 0&&data.status?(_CarReservationReques=commonEnums/* CarReservationRequestStatus */.KK[data===null||data===void 0?void 0:data.status])===null||_CarReservationReques===void 0?void 0:_CarReservationReques.status:"",")"),placement:"right",size:"large",width:window.innerWidth>768?"60%":"100%",onClose:onClose,open:openDrawer,children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A,{className:styles_module.form,onFinish:onFinish,form:form,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.drawerContainer,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{display:'flex',flexDirection:'column',gap:'0.5rem'},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:"Name:"}),"\xA0","".concat((data===null||data===void 0?void 0:(_data$RequestBy=data.RequestBy)===null||_data$RequestBy===void 0?void 0:_data$RequestBy.firstName)||""," ").concat((data===null||data===void 0?void 0:(_data$RequestBy2=data.RequestBy)===null||_data$RequestBy2===void 0?void 0:_data$RequestBy2.lastName)||"")]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:"Date:"}),"\xA0",(0,dateHandler/* convertDate */.ic)((data===null||data===void 0?void 0:data.addedDate)||"","MM dd,yy")]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:"Purpose:"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:'var(--font-size-normal)'},children:data===null||data===void 0?void 0:data.purpose})]}),data!==null&&data!==void 0&&(_data$Attachments=data.Attachments)!==null&&_data$Attachments!==void 0&&_data$Attachments.length?/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.attachmentsWrap,children:data===null||data===void 0?void 0:data.Attachments.map((attachment,index)=>{var _attachment$mimeType;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.attachment,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.resourceWrap,children:[attachment!==null&&attachment!==void 0&&(_attachment$mimeType=attachment.mimeType)!==null&&_attachment$mimeType!==void 0&&_attachment$mimeType.includes("pdf")?/*#__PURE__*/(0,jsx_runtime.jsx)("a",{href:"".concat(constants/* APPLICATION_RESOURCE_BASE_URL */.Ur).concat(attachment===null||attachment===void 0?void 0:attachment.file),target:"_blank",rel:"noreferrer",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Document/* default */.A,{file:"".concat(axiosInstance/* BASE_URL */.C,"resources/all/").concat(attachment.file,"?authKey=").concat(access_token)// onLoadSuccess={onDocumentLoadSuccess}
,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Page/* default */.A,{renderTextLayer:false,pageNumber:1})})}):/*#__PURE__*/(0,jsx_runtime.jsx)(es_image/* default */.A,{style:{objectFit:'cover',borderRadius:'0.25rem 0.25rem 0 0'},width:150,height:100,src:"".concat(axiosInstance/* BASE_URL */.C,"resources/all/").concat(attachment.file,"?authKey=").concat(access_token)}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{padding:'0.25rem 0.5rem',borderRadius:'0.25rem',display:'flex',flexDirection:'column'},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Text,{style:{width:125,fontSize:'var(--font-size-xs)'},strong:true,ellipsis:true,children:attachment===null||attachment===void 0?void 0:attachment.title})})]})},index);})}):null,(data===null||data===void 0?void 0:data.status)!==commonEnums/* CarReservationEnum */.oF.withdrawn&&/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.hrWrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.title,children:"HR Department Actions"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.hrInputs,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("b",{style:{fontSize:"var(--font-size-sm)"},children:"Reservation date"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.dateWrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.fromDate,children:moment_default()(data===null||data===void 0?void 0:data.fromDate).format("dddd")+", "+(0,dateHandler/* convertDate */.ic)((data===null||data===void 0?void 0:data.fromDate)||"","dd MM,yy")}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.fromDate,children:["(From ",moment_default()(data===null||data===void 0?void 0:data.fromDate).format("LT")]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.fromDate,children:["to ",moment_default()(data===null||data===void 0?void 0:data.toDate).format("LT"),")"]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.actionsWrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("br",{}),!(data!==null&&data!==void 0&&data.AdminActions.find(action=>action.Department.slug==="hr"))?carReservationRequestHRApproval?/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{display:'flex',gap:'1rem',alignItems:'flex-end'},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.A.Item,{name:"companyCarId",rules:[{required:true,message:"Please select a car"}],children:[/*#__PURE__*/(0,jsx_runtime.jsx)("b",{className:"font-size-sm color-dark-main",children:"Company car"}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.A,{allowClear:true,style:{width:"100%"}// defaultValue={recordData?.data?.companyCarId}
,placeholder:"Search for the car",className:"selectAntdCustom",onChange:value=>{form.setFieldsValue({companyCarId:value});checkAvailabilityOfCar(value);},showSearch:true,onSearch:()=>{},optionFilterProp:"label",options:companyCars===null||companyCars===void 0?void 0:companyCars.map(item=>{return{label:item.assetName,value:item.id};}),notFoundContent:/*#__PURE__*/(0,jsx_runtime.jsx)(empty/* default */.A,{image:"https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg",imageStyle:{height:100},description:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:"No data found, Please search for the car"})})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:'status',rules:[{required:true,message:"Please select a status"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_radio/* default.Group */.Ay.Group,{options:commonEnums/* ActionHRCarReservation */.vt,optionType:"button",buttonStyle:"solid"})})]}):"No action from HR yet":/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{textTransform:'capitalize',lineHeight:'1rem'},children:(_CarReservationReques2=commonEnums/* CarReservationRequestStatus */.KK[data===null||data===void 0?void 0:(_data$AdminActions$=data.AdminActions[0])===null||_data$AdminActions$===void 0?void 0:_data$AdminActions$.status])===null||_CarReservationReques2===void 0?void 0:_CarReservationReques2.status}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{color:'var(--color-red-yp)',fontSize:'var(--font-size-xs)'},children:errorMessage})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.footerWrap,children:[!(data!==null&&data!==void 0&&data.AdminActions.find(action=>action.Department.slug==="hr"))?carReservationRequestHRApproval&&/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:'comment',style:{minWidth:'60%',margin:0},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{size:"w100",label:/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:"Comment"}),type:"textArea",autoSize:{minRows:2},placeHolder:"Enter comment"})}):/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.priceText,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("b",{style:{fontSize:"var(--font-size-sm)"},children:"Comment"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:data===null||data===void 0?void 0:(_data$AdminActions$2=data.AdminActions[0])===null||_data$AdminActions$2===void 0?void 0:_data$AdminActions$2.comment})]}),!(data!==null&&data!==void 0&&data.AdminActions.find(action=>action.Department.slug==="hr"))?carReservationRequestHRApproval&&/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.buttonWrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{size:"normal",fontSize:"sm",onClick:onClose,type:"plain",children:"Cancel"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{type:"primary",size:"normal",fontSize:"sm",htmlType:"submit",loading:isLoading,children:"Save"})]}):null]})]})]})})})});};

/***/ }),

/***/ 82393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ CarReservationCard)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30377);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2557);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81541);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56272);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(62298);
/* harmony import */ var _helpers_commonEnums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2360);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57088);
/* harmony import */ var _helpers_dateHandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(98933);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59051);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44414);
const{Paragraph}=antd__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A;const CarReservationCard=props=>{var _CarReservationReques,_CarReservationReques2;const{carReservation,onClick,isFullWidth}=props;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,{hoverable:true,onClick:onClick,bodyStyle:{height:'100%'},className:"".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.card," ").concat(isFullWidth?_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.fullWidth:''),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.cardBody,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.cardBodyTop,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.cardTitle,children:["CRR-",carReservation.id]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.topRight,children:[carReservation._count.Attachments>0&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.file,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{}),"\xA0",carReservation._count.Attachments]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.status,style:{backgroundColor:(_CarReservationReques=_helpers_commonEnums__WEBPACK_IMPORTED_MODULE_0__/* .CarReservationRequestStatus */ .KK[carReservation===null||carReservation===void 0?void 0:carReservation.status])===null||_CarReservationReques===void 0?void 0:_CarReservationReques.color},children:(_CarReservationReques2=_helpers_commonEnums__WEBPACK_IMPORTED_MODULE_0__/* .CarReservationRequestStatus */ .KK[carReservation.status])===null||_CarReservationReques2===void 0?void 0:_CarReservationReques2.status})]})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.cardBodyMiddle,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Paragraph,{ellipsis:{rows:2},className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.purpose,children:carReservation.purpose}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"font-size-sm",children:["Requested by: ",carReservation.RequestBy.firstName+" "+carReservation.RequestBy.lastName]})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.cardBodyEnd,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.dateWrap,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.fromDate,children:moment__WEBPACK_IMPORTED_MODULE_2___default()(carReservation===null||carReservation===void 0?void 0:carReservation.fromDate).format("ddd")+", "+(0,_helpers_dateHandler__WEBPACK_IMPORTED_MODULE_7__/* .convertDate */ .ic)((carReservation===null||carReservation===void 0?void 0:carReservation.fromDate)||"","dd M,yy")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.fromDate,children:["(From ",moment__WEBPACK_IMPORTED_MODULE_2___default()(carReservation===null||carReservation===void 0?void 0:carReservation.fromDate).format("LT")]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.fromDate,children:["to ",moment__WEBPACK_IMPORTED_MODULE_2___default()(carReservation===null||carReservation===void 0?void 0:carReservation.toDate).format("LT"),")"]})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,{title:"Requested date",className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.date,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{}),"\xA0\xA0",(0,_helpers_dateHandler__WEBPACK_IMPORTED_MODULE_7__/* .convertDate */ .ic)(carReservation.addedDate,"dd M,yy")]})]})]})});};

/***/ }),

/***/ 69493:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  x: () => (/* binding */ CashAdvanceDrawer)
});

// EXTERNAL MODULE: ./node_modules/antd/es/typography/index.js + 15 modules
var typography = __webpack_require__(30377);
// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 18 modules
var es_form = __webpack_require__(10678);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 1 modules
var message = __webpack_require__(92759);
// EXTERNAL MODULE: ./node_modules/antd/es/drawer/index.js + 6 modules
var drawer = __webpack_require__(73780);
// EXTERNAL MODULE: ./node_modules/antd/es/image/index.js + 13 modules
var es_image = __webpack_require__(9206);
// EXTERNAL MODULE: ./node_modules/antd/es/radio/index.js + 4 modules
var es_radio = __webpack_require__(17811);
// EXTERNAL MODULE: ./node_modules/antd/es/slider/index.js + 15 modules
var slider = __webpack_require__(80134);
// EXTERNAL MODULE: ./node_modules/antd/es/divider/index.js
var divider = __webpack_require__(40895);
// EXTERNAL MODULE: ./node_modules/antd/es/tag/index.js + 1 modules
var tag = __webpack_require__(12916);
// EXTERNAL MODULE: ./src/Components/Atoms/index.tsx + 12 modules
var Atoms = __webpack_require__(9394);
;// ./src/Components/Organisms/Dashboard/MyServices/CashAdvance/CashAdvanceDrawer/styles.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"drawerContainer":"styles_drawerContainer__EB7Oi","attachmentsWrap":"styles_attachmentsWrap__lOgmN","attachment":"styles_attachment__JeYoV","amountWrap":"styles_amountWrap__+eN7u","priceText":"styles_priceText__tTHYm","resourceWrap":"styles_resourceWrap__f-nua","hrWrap":"styles_hrWrap__o17Ci","title":"styles_title__hENGE","hrInputs":"styles_hrInputs__hxp2p","footerWrap":"styles_footerWrap__11BBV","buttonWrap":"styles_buttonWrap__Ur2s4","financeWrap":"styles_financeWrap__-Upak","actionsWrap":"styles_actionsWrap__ZfIG9"});
// EXTERNAL MODULE: ./src/helpers/commonEnums.ts
var commonEnums = __webpack_require__(2360);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./src/hooks/index.ts + 5 modules
var hooks = __webpack_require__(91970);
// EXTERNAL MODULE: ./src/helpers/dateHandler.ts
var dateHandler = __webpack_require__(98933);
// EXTERNAL MODULE: ./src/Modules/CashAdvance/index.ts
var CashAdvance = __webpack_require__(59125);
// EXTERNAL MODULE: ./node_modules/pdfjs-dist/build/pdf.js
var pdf = __webpack_require__(73114);
// EXTERNAL MODULE: ./node_modules/react-pdf/dist/esm/Document.js + 1 modules
var Document = __webpack_require__(39087);
// EXTERNAL MODULE: ./node_modules/react-pdf/dist/esm/Page.js + 12 modules
var Page = __webpack_require__(93852);
// EXTERNAL MODULE: ./src/services/axiosInstance.ts
var axiosInstance = __webpack_require__(83365);
// EXTERNAL MODULE: ./src/services/tokenService.ts
var tokenService = __webpack_require__(92966);
// EXTERNAL MODULE: ./src/helpers/constants.ts
var constants = __webpack_require__(65944);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/Dashboard/MyServices/CashAdvance/CashAdvanceDrawer/index.tsx
const{Text}=typography/* default */.A;const CashAdvanceDrawer=_ref=>{var _CashAdvanceStatus$da,_data$RequestBy,_data$RequestBy2,_data$Attachments,_CashAdvanceStatus$da2,_data$AdminActions,_data$AdminActions$fi,_data$AdminActions$fi2,_CashAdvanceStatus$da3,_data$AdminActions2,_data$AdminActions2$f,_data$Installments,_data$AdminActions$fi3;let{openDrawer,onClose,record,permissions,reloadTableData}=_ref;pdf.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(pdf.version,"/pdf.worker.js");const access_token=tokenService/* default */.A.getLocalAccessToken();const{updateCashAdvance,cashAdvanceHRApproval,cashAdvanceFinanceApproval}=permissions;// const user = TokenService.getUserData();
const[form]=es_form/* default */.A.useForm();const[isLoading,setisLoading]=(0,react.useState)(false);const module=new CashAdvance/* CashAdvanceModule */.g();const{data,onRefresh}=(0,hooks/* useFetchData */.Gs)({method:()=>module.getRecordById(record)});(0,react.useEffect)(()=>{form.setFieldValue("approvedAmount",data===null||data===void 0?void 0:data.requestAmount);},[data]);const onFinish=formValues=>{setisLoading(true);if(updateCashAdvance||cashAdvanceHRApproval||cashAdvanceFinanceApproval){//means hr action
if(formValues.approvedAmount){module.hrActionCashAdvance({comment:formValues.comment,status:formValues.status,approvedAmount:Number(formValues.approvedAmount)},record).then(res=>{reloadTableData();setisLoading(false);onRefresh();form.resetFields();}).catch(err=>{message/* default */.Ay.error(err===null||err===void 0?void 0:err.message);setisLoading(false);});}else{module.financeActionCashAdvance({comment:formValues.comment,status:formValues.status,numberOfInstallments:formValues!==null&&formValues!==void 0&&formValues.numberOfInstallments?formValues===null||formValues===void 0?void 0:formValues.numberOfInstallments:3},record).then(res=>{reloadTableData();setisLoading(false);onRefresh();form.resetFields();}).catch(err=>{message/* default */.Ay.error(err===null||err===void 0?void 0:err.message);setisLoading(false);});}}else{message/* default */.Ay.error("You don't have permission to create this record");setisLoading(false);}};return/*#__PURE__*/(0,jsx_runtime.jsx)("section",{className:styles_module.container,children:/*#__PURE__*/(0,jsx_runtime.jsx)(drawer/* default */.A,{title:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"d-flex align-center justify-space-between",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:["CSH-",data===null||data===void 0?void 0:data.id," - (",data!==null&&data!==void 0&&data.status?(_CashAdvanceStatus$da=commonEnums/* CashAdvanceStatus */.Q0[data===null||data===void 0?void 0:data.status])===null||_CashAdvanceStatus$da===void 0?void 0:_CashAdvanceStatus$da.status:"",")"]}),(data===null||data===void 0?void 0:data.status)!==commonEnums/* CashAdvanceEnum */.dC.rejected&&(data===null||data===void 0?void 0:data.status)!==commonEnums/* CashAdvanceEnum */.dC.withdrawn&&(data===null||data===void 0?void 0:data.status)!==commonEnums/* CashAdvanceEnum */.dC.paid_and_closed?/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{type:"primary",size:"normal",fontSize:"sm",onClick:()=>{module.withdrawCashAdvance(record).then(()=>{reloadTableData();onRefresh();form.resetFields();onClose();}).catch(err=>{message/* default */.Ay.error(err===null||err===void 0?void 0:err.message);});},children:"Withdraw Request"})}):null]}),placement:"right",size:"large",width:window.innerWidth>768?"60%":"100%",onClose:onClose,open:openDrawer,children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A,{className:styles_module.form,onFinish:onFinish,form:form,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.drawerContainer,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{display:'flex',flexDirection:'column',gap:'0.5rem'},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:"Name:"}),"\xA0","".concat((data===null||data===void 0?void 0:(_data$RequestBy=data.RequestBy)===null||_data$RequestBy===void 0?void 0:_data$RequestBy.firstName)||""," ").concat((data===null||data===void 0?void 0:(_data$RequestBy2=data.RequestBy)===null||_data$RequestBy2===void 0?void 0:_data$RequestBy2.lastName)||"")]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:"Date:"}),"\xA0",(0,dateHandler/* convertDate */.ic)((data===null||data===void 0?void 0:data.addedDate)||"","MM dd,yy")]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:"Purpose:"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:'var(--font-size-normal)'},children:data===null||data===void 0?void 0:data.purpose})]}),data!==null&&data!==void 0&&(_data$Attachments=data.Attachments)!==null&&_data$Attachments!==void 0&&_data$Attachments.length?/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.attachmentsWrap,children:data===null||data===void 0?void 0:data.Attachments.map((attachment,index)=>{var _attachment$mimeType;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.attachment,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.resourceWrap,children:[attachment!==null&&attachment!==void 0&&(_attachment$mimeType=attachment.mimeType)!==null&&_attachment$mimeType!==void 0&&_attachment$mimeType.includes("pdf")?/*#__PURE__*/(0,jsx_runtime.jsx)("a",{href:"".concat(constants/* APPLICATION_RESOURCE_BASE_URL */.Ur).concat(attachment===null||attachment===void 0?void 0:attachment.file),target:"_blank",rel:"noreferrer",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Document/* default */.A,{file:"".concat(axiosInstance/* BASE_URL */.C,"resources/all/").concat(attachment.file,"?authKey=").concat(access_token)// onLoadSuccess={onDocumentLoadSuccess}
,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Page/* default */.A,{renderTextLayer:false,pageNumber:1})})}):/*#__PURE__*/(0,jsx_runtime.jsx)(es_image/* default */.A,{style:{objectFit:'cover',borderRadius:'0.25rem 0.25rem 0 0'},width:150,height:100,src:"".concat(axiosInstance/* BASE_URL */.C,"resources/all/").concat(attachment.file,"?authKey=").concat(access_token)}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{padding:'0.25rem 0.5rem',borderRadius:'0.25rem',display:'flex',flexDirection:'column'},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Text,{style:{width:125,fontSize:'var(--font-size-xs)'},strong:true,ellipsis:true,children:attachment===null||attachment===void 0?void 0:attachment.title})})]})},index);})}):null,(data===null||data===void 0?void 0:data.status)!==commonEnums/* CashAdvanceEnum */.dC.withdrawn&&/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.hrWrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.title,children:"HR Department Actions"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.hrInputs,children:[!(data!==null&&data!==void 0&&data.AdminActions.find(action=>action.Department.slug==="hr"))?cashAdvanceHRApproval?/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("b",{style:{fontSize:"var(--font-size-sm)"},children:"Amount"}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:'approvedAmount',rules:[{required:true,message:"Please enter approved amount."}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{prefix:"AED",size:"w100",asterisk:true,placeHolder:"Enter approved amount"})})]}):"No action from HR yet":/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.actionsWrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("b",{style:{fontSize:"var(--font-size-sm)"},children:"Amount"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{textDecoration:(data===null||data===void 0?void 0:data.approvedAmount)!==(data===null||data===void 0?void 0:data.requestAmount)?'line-through':'unset'},children:["AED ",data===null||data===void 0?void 0:data.requestAmount]}),(data===null||data===void 0?void 0:data.approvedAmount)!==data.requestAmount?/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.approvedAmount,children:["AED ",data===null||data===void 0?void 0:data.approvedAmount]}):null]})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.actionsWrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("br",{}),!(data!==null&&data!==void 0&&data.AdminActions.find(action=>action.Department.slug==="hr"))?cashAdvanceHRApproval&&/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:'status',rules:[{required:true,message:"Please select a status"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_radio/* default.Group */.Ay.Group,{options:commonEnums/* ActionHR */.bL,optionType:"button",buttonStyle:"solid"})}):/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{textTransform:'capitalize',lineHeight:'1rem'},children:(_CashAdvanceStatus$da2=commonEnums/* CashAdvanceStatus */.Q0[data===null||data===void 0?void 0:(_data$AdminActions=data.AdminActions)===null||_data$AdminActions===void 0?void 0:(_data$AdminActions$fi=_data$AdminActions.find(action=>action.Department.slug==="hr"))===null||_data$AdminActions$fi===void 0?void 0:_data$AdminActions$fi.status])===null||_CashAdvanceStatus$da2===void 0?void 0:_CashAdvanceStatus$da2.status})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.footerWrap,children:[!(data!==null&&data!==void 0&&data.AdminActions.find(action=>action.Department.slug==="hr"))?cashAdvanceHRApproval&&/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:'comment',style:{minWidth:'60%',margin:0},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{size:"w100",label:/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:"Comment"}),type:"textArea",placeHolder:"Enter comment"})}):/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.priceText,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("b",{style:{fontSize:"var(--font-size-sm)"},children:"Comment"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:data===null||data===void 0?void 0:(_data$AdminActions$fi2=data.AdminActions.find(action=>action.Department.slug==="hr"))===null||_data$AdminActions$fi2===void 0?void 0:_data$AdminActions$fi2.comment})]}),!(data!==null&&data!==void 0&&data.AdminActions.find(action=>action.Department.slug==="hr"))?cashAdvanceHRApproval&&/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.buttonWrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{size:"normal",fontSize:"sm",onClick:onClose,type:"plain",children:"Cancel"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{type:"primary",size:"normal",fontSize:"sm",htmlType:"submit",loading:isLoading,children:"Save"})]}):null]})]}),(data===null||data===void 0?void 0:data.status)!==commonEnums/* CashAdvanceEnum */.dC.withdrawn&&data!==null&&data!==void 0&&data.AdminActions.find(action=>action.Department.slug==="hr")&&data.status!==commonEnums/* CashAdvanceEnum */.dC.rejected?/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.financeWrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.title,children:"Finance Department Actions"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.actionsWrap,children:[!(data!==null&&data!==void 0&&data.AdminActions.find(action=>action.Department.slug==="finance"))?cashAdvanceFinanceApproval?/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:'status',rules:[{required:true,message:"Please select a status"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_radio/* default.Group */.Ay.Group,{options:commonEnums/* ActionFinance */.Bf,optionType:"button",buttonStyle:"solid"})}):"No action from Finance yet":/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{textTransform:'capitalize',lineHeight:'1rem'},children:(_CashAdvanceStatus$da3=commonEnums/* CashAdvanceStatus */.Q0[data===null||data===void 0?void 0:(_data$AdminActions2=data.AdminActions)===null||_data$AdminActions2===void 0?void 0:(_data$AdminActions2$f=_data$AdminActions2.find(action=>action.Department.slug==="finance"))===null||_data$AdminActions2$f===void 0?void 0:_data$AdminActions2$f.status])===null||_CashAdvanceStatus$da3===void 0?void 0:_CashAdvanceStatus$da3.status}),!(data!==null&&data!==void 0&&data.AdminActions.find(action=>action.Department.slug==="finance"))?cashAdvanceFinanceApproval&&/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("b",{style:{fontSize:"var(--font-size-sm)"},children:"Number of installments"}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"numberOfInstallments",children:/*#__PURE__*/(0,jsx_runtime.jsx)(slider/* default */.A,{marks:commonEnums/* marks */.Z8,defaultValue:3,min:1,max:24})})]}):/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(divider/* default */.A,{}),/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:"Installments:"}),data===null||data===void 0?void 0:(_data$Installments=data.Installments)===null||_data$Installments===void 0?void 0:_data$Installments.map(item=>{var _convertDate;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{display:'flex',gap:'0.5rem'},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{style:{marginBottom:'0.25rem'},children:[(_convertDate=(0,dateHandler/* convertDate */.ic)(item.monthYear,"dd MM,yy"))===null||_convertDate===void 0?void 0:_convertDate.slice(2)," - ",data.installmentAmount," AED"]}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:item.isPaid?/*#__PURE__*/(0,jsx_runtime.jsxs)(tag/* default */.A,{color:"green",children:["Paid on ",(0,dateHandler/* convertDate */.ic)(item.paidDate,"dd MM,yy")]}):/*#__PURE__*/(0,jsx_runtime.jsx)(tag/* default */.A,{children:"To be paid"})})]});})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.footerWrap,children:[!(data!==null&&data!==void 0&&data.AdminActions.find(action=>action.Department.slug==="finance"))?cashAdvanceFinanceApproval&&/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:'comment',style:{minWidth:'60%',margin:0},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{size:"w100",label:/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:"Comment"}),type:"textArea",placeHolder:"Enter comment"})}):/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.priceText,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("b",{style:{fontSize:"var(--font-size-sm)"},children:"Comment"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:data===null||data===void 0?void 0:(_data$AdminActions$fi3=data.AdminActions.find(action=>action.Department.slug==="finance"))===null||_data$AdminActions$fi3===void 0?void 0:_data$AdminActions$fi3.comment})]}),!(data!==null&&data!==void 0&&data.AdminActions.find(action=>action.Department.slug==="finance"))?cashAdvanceFinanceApproval&&/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.buttonWrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{size:"normal",fontSize:"sm",onClick:onClose,type:"plain",children:"Cancel"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{type:"primary",size:"normal",fontSize:"sm",htmlType:"submit",loading:isLoading,children:"Save"})]}):null]})]}):null]})})})});};

/***/ }),

/***/ 22128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ CashAdvanceCard)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30377);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2557);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56272);
/* harmony import */ var _helpers_commonEnums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2360);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46173);
/* harmony import */ var _helpers_dateHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98933);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44414);
const{Paragraph}=antd__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A;const CashAdvanceCard=_ref=>{var _CashAdvanceStatus$ca,_CashAdvanceStatus$ca2;let{cashAdvance,onClick,isFullWidth}=_ref;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,{hoverable:true,onClick:onClick,className:"".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.card," ").concat(isFullWidth?_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.fullWidth:''),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.cardBody,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.cardBodyTop,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.cardTitle,children:["CSH-",cashAdvance.id]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.topRight,children:[cashAdvance._count.Attachments>0&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.file,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,{}),"\xA0",cashAdvance._count.Attachments]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.status,style:{backgroundColor:(_CashAdvanceStatus$ca=_helpers_commonEnums__WEBPACK_IMPORTED_MODULE_0__/* .CashAdvanceStatus */ .Q0[cashAdvance===null||cashAdvance===void 0?void 0:cashAdvance.status])===null||_CashAdvanceStatus$ca===void 0?void 0:_CashAdvanceStatus$ca.color},children:(_CashAdvanceStatus$ca2=_helpers_commonEnums__WEBPACK_IMPORTED_MODULE_0__/* .CashAdvanceStatus */ .Q0[cashAdvance.status])===null||_CashAdvanceStatus$ca2===void 0?void 0:_CashAdvanceStatus$ca2.status.replaceAll("_"," ")})]})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.cardBodyMiddle,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Paragraph,{ellipsis:{rows:2},className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.purpose,children:cashAdvance.purpose}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"font-size-sm",children:["Requested by: ",cashAdvance.RequestBy.firstName+" "+cashAdvance.RequestBy.lastName]})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.cardBodyEnd,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.amountWrap,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.requestAmount+" "+(cashAdvance.approvedAmount&&cashAdvance.approvedAmount!==cashAdvance.requestAmount?_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.strike:undefined),children:["AED ",cashAdvance.requestAmount]}),cashAdvance.approvedAmount&&cashAdvance.approvedAmount!==cashAdvance.requestAmount?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.approvedAmount,children:["AED ",cashAdvance.approvedAmount]}):null]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.date,children:(0,_helpers_dateHandler__WEBPACK_IMPORTED_MODULE_6__/* .convertDate */ .ic)(cashAdvance.addedDate,"dd M,yy")})]})]})});};

/***/ }),

/***/ 93305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  O: () => (/* binding */ ReimbursementDrawer)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/pdfjs-dist/build/pdf.js
var pdf = __webpack_require__(73114);
// EXTERNAL MODULE: ./node_modules/react-pdf/dist/esm/Document.js + 1 modules
var Document = __webpack_require__(39087);
// EXTERNAL MODULE: ./node_modules/react-pdf/dist/esm/Page.js + 12 modules
var Page = __webpack_require__(93852);
// EXTERNAL MODULE: ./node_modules/antd/es/typography/index.js + 15 modules
var typography = __webpack_require__(30377);
// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 18 modules
var es_form = __webpack_require__(10678);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 1 modules
var message = __webpack_require__(92759);
// EXTERNAL MODULE: ./node_modules/antd/es/drawer/index.js + 6 modules
var drawer = __webpack_require__(73780);
// EXTERNAL MODULE: ./node_modules/antd/es/image/index.js + 13 modules
var es_image = __webpack_require__(9206);
// EXTERNAL MODULE: ./node_modules/antd/es/radio/index.js + 4 modules
var es_radio = __webpack_require__(17811);
// EXTERNAL MODULE: ./src/Components/Atoms/index.tsx + 12 modules
var Atoms = __webpack_require__(9394);
;// ./src/Components/Organisms/Dashboard/MyServices/Reimbursement/ReimbursementDrawer/styles.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"drawerContainer":"styles_drawerContainer__7XxQK","hrWrap":"styles_hrWrap__D7jRI","title":"styles_title__5oo09","attachmentsWrap":"styles_attachmentsWrap__RcrUe","attachment":"styles_attachment__nBxi9","amountWrap":"styles_amountWrap__FZNkU","priceText":"styles_priceText__tqMjD","resourceWrap":"styles_resourceWrap__ysFAL","footerWrap":"styles_footerWrap__UKwHI","buttonWrap":"styles_buttonWrap__fy3YJ","financeWrap":"styles_financeWrap__eDSGB","actionsWrap":"styles_actionsWrap__wxs+g"});
// EXTERNAL MODULE: ./src/helpers/commonEnums.ts
var commonEnums = __webpack_require__(2360);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./src/Modules/Reimbursement/index.ts
var Reimbursement = __webpack_require__(48770);
// EXTERNAL MODULE: ./src/hooks/index.ts + 5 modules
var hooks = __webpack_require__(91970);
// EXTERNAL MODULE: ./src/services/axiosInstance.ts
var axiosInstance = __webpack_require__(83365);
// EXTERNAL MODULE: ./src/services/tokenService.ts
var tokenService = __webpack_require__(92966);
// EXTERNAL MODULE: ./src/helpers/dateHandler.ts
var dateHandler = __webpack_require__(98933);
// EXTERNAL MODULE: ./src/helpers/constants.ts
var constants = __webpack_require__(65944);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/Dashboard/MyServices/Reimbursement/ReimbursementDrawer/index.tsx
const{Text}=typography/* default */.A;const ReimbursementDrawer=props=>{var _ReimbursementStatus$,_data$RequestBy,_data$RequestBy2,_data$AdminActions$fi,_data$AdminActions,_data$AdminActions$fi2;const{openDrawer,onClose,record,permissions,reloadTableData}=props;const{reimbursementHRApproval,reimbursementFinanceApproval}=permissions;const user=tokenService/* default */.A.getUserData();const[form]=es_form/* default */.A.useForm();pdf.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(pdf.version,"/pdf.worker.js");const access_token=tokenService/* default */.A.getLocalAccessToken();const[isLoading,setisLoading]=(0,react.useState)(false);const module=new Reimbursement/* ReimbursementModule */.$();const{data,onRefresh}=(0,hooks/* useFetchData */.Gs)({method:()=>module.getRecordById(record)});(0,react.useEffect)(()=>{const _temp={comment:"",reimbursementReceipts:[]};data===null||data===void 0?void 0:data.ReimbursementReceipt.forEach(receipt=>{_temp.reimbursementReceipts.push((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},receipt),{},{approvedAmount:receipt.claimedAmount}));});form.setFieldsValue(_temp);},[data]);const onFinish=formValues=>{setisLoading(true);const _temp={comment:formValues.comment,reimbursementReceipts:[]};if(!formValues.status){var _formValues$reimburse;formValues===null||formValues===void 0?void 0:(_formValues$reimburse=formValues.reimbursementReceipts)===null||_formValues$reimburse===void 0?void 0:_formValues$reimburse.forEach(receipt=>{var _temp$reimbursementRe;(_temp$reimbursementRe=_temp["reimbursementReceipts"])===null||_temp$reimbursementRe===void 0?void 0:_temp$reimbursementRe.push({receiptId:receipt.id,approvedAmount:receipt.approvedAmount,status:receipt.status,comment:receipt.comment});});}if(reimbursementHRApproval||reimbursementFinanceApproval){//means finance action
if(formValues.status){module.financeActionReimbursement({comment:formValues.comment,status:formValues===null||formValues===void 0?void 0:formValues.status},record).then(()=>{reloadTableData();setisLoading(false);onRefresh();}).catch(()=>{message/* default */.Ay.error("Something went wrong");setisLoading(false);});}else{module.hrActionReimbursement(_temp,record).then(()=>{reloadTableData();setisLoading(false);onRefresh();}).catch(()=>{message/* default */.Ay.error("Something went wrong");setisLoading(false);});}}else{message/* default */.Ay.error("You don't have permission to create this record");setisLoading(false);}};return/*#__PURE__*/(0,jsx_runtime.jsx)("section",{className:styles_module.container,children:/*#__PURE__*/(0,jsx_runtime.jsx)(drawer/* default */.A,{title:"RMB-".concat(data===null||data===void 0?void 0:data.id," - (").concat(data!==null&&data!==void 0&&data.status?(_ReimbursementStatus$=commonEnums/* ReimbursementStatus */.ps[data===null||data===void 0?void 0:data.status])===null||_ReimbursementStatus$===void 0?void 0:_ReimbursementStatus$.status:"",")"),placement:"right",size:"large",width:window.innerWidth>768?"60%":"100%",onClose:onClose,open:openDrawer,children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A,{className:styles_module.form,onFinish:onFinish,form:form,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.drawerContainer,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{display:'flex',flexDirection:'column',gap:'0.5rem'},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:"Name:"}),"\xA0","".concat((data===null||data===void 0?void 0:(_data$RequestBy=data.RequestBy)===null||_data$RequestBy===void 0?void 0:_data$RequestBy.firstName)||""," ").concat((data===null||data===void 0?void 0:(_data$RequestBy2=data.RequestBy)===null||_data$RequestBy2===void 0?void 0:_data$RequestBy2.lastName)||"")]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:"Date:"}),"\xA0",(0,dateHandler/* convertDate */.ic)((data===null||data===void 0?void 0:data.addedDate)||"","MM dd,yy")]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:"Purpose:"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:'var(--font-size-normal)'},children:data===null||data===void 0?void 0:data.purpose})]}),(data===null||data===void 0?void 0:data.status)!==commonEnums/* ReimbursementEnum */.i3.withdrawn&&/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.hrWrap,children:[data!==null&&data!==void 0&&data.ReimbursementReceipt?/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.List,{name:"reimbursementReceipts",initialValue:data===null||data===void 0?void 0:data.ReimbursementReceipt,children:(fields,_,_ref)=>{let{errors}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.title,children:"HR Department Actions"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.attachmentsWrap,children:fields.map((_receipt,index)=>{var _data$ReimbursementRe,_data$ReimbursementRe2,_fields$index,_data$ReimbursementRe3,_fields$index2;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.attachment,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.resourceWrap,children:[data!==null&&data!==void 0&&data.ReimbursementReceipt[index].file.includes("pdf")?/*#__PURE__*/(0,jsx_runtime.jsx)("a",{href:"".concat(constants/* APPLICATION_RESOURCE_BASE_URL */.Ur).concat(data===null||data===void 0?void 0:(_data$ReimbursementRe=data.ReimbursementReceipt[index])===null||_data$ReimbursementRe===void 0?void 0:_data$ReimbursementRe.file),target:"_blank",rel:"noreferrer",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Document/* default */.A,{file:"".concat(axiosInstance/* BASE_URL */.C,"resources/all/").concat(data===null||data===void 0?void 0:data.ReimbursementReceipt[index].file,"?authKey=").concat(access_token)// onLoadSuccess={onDocumentLoadSuccess}
,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Page/* default */.A,{renderTextLayer:false,pageNumber:1})})}):/*#__PURE__*/(0,jsx_runtime.jsx)(es_image/* default */.A,{style:{objectFit:'cover',borderRadius:'0.25rem 0.25rem 0 0'},width:150,height:100,src:"".concat(axiosInstance/* BASE_URL */.C,"resources/all/").concat(data===null||data===void 0?void 0:data.ReimbursementReceipt[index].file,"?authKey=").concat(access_token)}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{padding:'0.25rem 0.5rem',borderRadius:'0.25rem',display:'flex',flexDirection:'column'},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Text,{style:{width:125,fontSize:'var(--font-size-xs)'},strong:true,ellipsis:true,children:data===null||data===void 0?void 0:(_data$ReimbursementRe2=data.ReimbursementReceipt[index])===null||_data$ReimbursementRe2===void 0?void 0:_data$ReimbursementRe2.title})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:!(data!==null&&data!==void 0&&data.AdminActions.find(action=>action.Department.slug==="hr"))?/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:reimbursementHRApproval?/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{style:{minWidth:'80%'},name:[(_fields$index=fields[index])===null||_fields$index===void 0?void 0:_fields$index.name,'approvedAmount'],rules:[{required:true,message:"Please add a amount",type:"number"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{prefix:"AED",defaultValue:data===null||data===void 0?void 0:(_data$ReimbursementRe3=data.ReimbursementReceipt[index])===null||_data$ReimbursementRe3===void 0?void 0:_data$ReimbursementRe3.claimedAmount,size:"w100",label:/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:"Amount"}),asterisk:true,type:"number",placeHolder:"Enter amount"})}):"No action from HR yet"}):/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.priceText,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("b",{style:{fontSize:"var(--font-size-sm)"},children:"Amount"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{textDecoration:(data===null||data===void 0?void 0:data.ReimbursementReceipt[index].approvedAmount)!==(data===null||data===void 0?void 0:data.ReimbursementReceipt[index].claimedAmount)?'line-through':'unset'},children:["AED ",data===null||data===void 0?void 0:data.ReimbursementReceipt[index].claimedAmount]}),(data===null||data===void 0?void 0:data.ReimbursementReceipt[index].approvedAmount)!==data.ReimbursementReceipt[index].claimedAmount?/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.approvedAmount,children:["AED ",data===null||data===void 0?void 0:data.ReimbursementReceipt[index].approvedAmount]}):null]})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.buttonWrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("br",{}),!(data!==null&&data!==void 0&&data.AdminActions.find(action=>action.Department.slug==="hr"))?reimbursementHRApproval&&/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:[(_fields$index2=fields[index])===null||_fields$index2===void 0?void 0:_fields$index2.name,'status'],rules:[{required:true,message:"Please select a status"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_radio/* default.Group */.Ay.Group,{options:commonEnums/* ActionHR */.bL,optionType:"button",buttonStyle:"solid"})}):/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{textTransform:'capitalize'},children:commonEnums/* ReimbursementStatus */.ps[data===null||data===void 0?void 0:data.ReimbursementReceipt[index].status].status})]})]},data===null||data===void 0?void 0:data.ReimbursementReceipt[index].id);})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.ErrorList,{errors:errors})]});}}):null,/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.footerWrap,style:reimbursementHRApproval?{borderTop:'1px solid var(--color-border)'}:undefined,children:[!(data!==null&&data!==void 0&&data.AdminActions.find(action=>action.Department.slug==="hr"))?reimbursementHRApproval&&/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:'comment',style:{minWidth:'60%',margin:0},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{size:"w100",label:/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:"Comment"}),type:"textArea",placeHolder:"Enter comment"})}):/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.priceText,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("b",{style:{fontSize:"var(--font-size-sm)"},children:"Comment"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:data===null||data===void 0?void 0:(_data$AdminActions$fi=data.AdminActions.find(action=>action.Department.slug==="hr"))===null||_data$AdminActions$fi===void 0?void 0:_data$AdminActions$fi.comment})]}),!(data!==null&&data!==void 0&&data.AdminActions.find(action=>action.Department.slug==="hr"))?reimbursementHRApproval&&/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.buttonWrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{size:"normal",fontSize:"sm",onClick:onClose,type:"plain",children:"Cancel"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{type:"primary",size:"normal",fontSize:"sm",htmlType:"submit",loading:isLoading,children:"Save"})]}):null]})]}),(data===null||data===void 0?void 0:data.status)!==commonEnums/* ReimbursementEnum */.i3.withdrawn&&data!==null&&data!==void 0&&data.AdminActions.find(action=>action.Department.slug==="hr")?/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.financeWrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.title,children:"Finance Department Actions"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.actionsWrap,children:!(data!==null&&data!==void 0&&data.AdminActions.find(action=>action.Department.slug==="finance"))?reimbursementFinanceApproval?/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:'status',rules:[{required:true,message:"Please select a status"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_radio/* default.Group */.Ay.Group,{options:commonEnums/* ActionFinance */.Bf,optionType:"button",buttonStyle:"solid"})}):"No action from Finance yet":/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{textTransform:'capitalize',lineHeight:'1rem'},children:commonEnums/* ReimbursementStatus */.ps[data===null||data===void 0?void 0:(_data$AdminActions=data.AdminActions)===null||_data$AdminActions===void 0?void 0:_data$AdminActions.find(action=>action.Department.slug==="finance").status].status})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.footerWrap,children:[!(data!==null&&data!==void 0&&data.AdminActions.find(action=>action.Department.slug==="finance"))?reimbursementFinanceApproval&&/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:'comment',style:{minWidth:'60%',margin:0},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{size:"w100",label:/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:"Comment"}),type:"textArea",placeHolder:"Enter comment"})}):/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.priceText,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("b",{style:{fontSize:"var(--font-size-sm)"},children:"Comment"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:data===null||data===void 0?void 0:(_data$AdminActions$fi2=data.AdminActions.find(action=>action.Department.slug==="finance"))===null||_data$AdminActions$fi2===void 0?void 0:_data$AdminActions$fi2.comment})]}),!(data!==null&&data!==void 0&&data.AdminActions.find(action=>action.Department.slug==="finance"))?reimbursementFinanceApproval&&/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.buttonWrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{size:"normal",fontSize:"sm",onClick:onClose,type:"plain",children:"Cancel"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{type:"primary",size:"normal",fontSize:"sm",htmlType:"submit",loading:isLoading,children:"Save"})]}):null]})]}):null]})})})});};

/***/ }),

/***/ 60415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ ReimbursementCard)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30377);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2557);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56272);
/* harmony import */ var _helpers_commonEnums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2360);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70666);
/* harmony import */ var _helpers_dateHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98933);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44414);
const{Paragraph}=antd__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A;const ReimbursementCard=_ref=>{var _ReimbursementStatus$,_ReimbursementStatus$2;let{reimbursement,onClick,isFullWidth}=_ref;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,{hoverable:true,onClick:onClick,bodyStyle:{height:'100%'},className:"".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.card," ").concat(isFullWidth?_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.fullWidth:''),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.cardBody,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.cardBodyTop,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.cardTitle,children:["RMB-",reimbursement.id]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.topRight,children:[reimbursement._count.ReimbursementReceipt>0&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.file,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,{}),"\xA0",reimbursement._count.ReimbursementReceipt]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.status,style:{backgroundColor:(_ReimbursementStatus$=_helpers_commonEnums__WEBPACK_IMPORTED_MODULE_0__/* .ReimbursementStatus */ .ps[reimbursement.status])===null||_ReimbursementStatus$===void 0?void 0:_ReimbursementStatus$.color},children:(_ReimbursementStatus$2=_helpers_commonEnums__WEBPACK_IMPORTED_MODULE_0__/* .ReimbursementStatus */ .ps[reimbursement.status])===null||_ReimbursementStatus$2===void 0?void 0:_ReimbursementStatus$2.status})]})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.cardBodyMiddle,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Paragraph,{ellipsis:{rows:2},className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.purpose,children:reimbursement.purpose}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"font-size-sm",children:["Requested by: ",reimbursement.RequestBy.firstName+" "+reimbursement.RequestBy.lastName]})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.cardBodyEnd,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.amountWrap,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.claimedAmount+" "+(reimbursement.approvedAmount&&reimbursement.approvedAmount!==reimbursement.claimedAmount?_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.strike:undefined),children:["AED ",reimbursement.claimedAmount]}),reimbursement.approvedAmount&&reimbursement.approvedAmount!==reimbursement.claimedAmount?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.approvedAmount,children:["AED ",reimbursement.approvedAmount]}):null]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.date,children:(0,_helpers_dateHandler__WEBPACK_IMPORTED_MODULE_6__/* .convertDate */ .ic)(reimbursement.addedDate,"dd M,yy")})]})]})});};

/***/ }),

/***/ 42926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ CarReservationModule)
/* harmony export */ });
/* harmony import */ var C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89379);
/* harmony import */ var _modules_Common_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21073);
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83365);
class CarReservationModule{constructor(){this.endPoint="car-reservation-request";this.getAllRecords=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.get(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ .C+this.endPoint,{params:(0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({sortByField:'order',sortOrder:'asc',perPage:4},query)});};this.getOwnRecords=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.get(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ .C+this.endPoint+"/own",{params:(0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({},query)});};this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.get(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ .C+this.endPoint+"/findOne/"+id);};this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.delete(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ .C+this.endPoint+"/remove/"+id);};this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.post(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ .C+this.endPoint,data,{headers:_modules_Common_config__WEBPACK_IMPORTED_MODULE_0__/* .FormDataHeader */ .Y});};/**
	 * Update CarReservation
	 * @param {number} id - CarReservation Id
	 */this.withdrawCarReservation=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.patch(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ .C+this.endPoint+"/withdraw/".concat(id));};/**
		 * Update Order
		 * @param {hrActionCarReservation} data - Order Number
		 * @param {number} id - Record Id
		 */this.employeeActionCarReservation=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.patch(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ .C+this.endPoint+"/submitRequest/".concat(id));};/**
		 * Update Order
		 * @param {hrActionCarReservation} data - Order Number
		 * @param {number} id - Record Id
		 */this.hrActionCarReservation=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.patch(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ .C+this.endPoint+"/hrAction/".concat(id),data);};this.checkAvailability=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.patch(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ .C+this.endPoint+"/checkAvailability",data);};}}

/***/ }),

/***/ 59125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ CashAdvanceModule)
/* harmony export */ });
/* harmony import */ var C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89379);
/* harmony import */ var _modules_Common_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21073);
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83365);
class CashAdvanceModule{constructor(){this.endPoint="cash-advance";this.getAllRecords=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.get(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ .C+this.endPoint,{params:(0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({sortByField:'order',sortOrder:'asc',perPage:4},query)});};this.getOwnRecords=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.get(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ .C+this.endPoint+"/own",{params:(0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({},query)});};this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.get(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ .C+this.endPoint+"/findOne/"+id);};this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.delete(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ .C+this.endPoint+"/remove/"+id);};this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.post(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ .C+this.endPoint,data,{headers:_modules_Common_config__WEBPACK_IMPORTED_MODULE_0__/* .FormDataHeader */ .Y});};/**
	 * Update CashAdvance
	 * @param {number} id - Cash Advacne Id
	 */this.withdrawCashAdvance=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.patch(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ .C+this.endPoint+"/withdraw/".concat(id));};/**
		 * Update Order
		 * @param {hrActionCashAdvance} data - Order Number
		 * @param {number} id - Record Id
		 */this.hrActionCashAdvance=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.patch(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ .C+this.endPoint+"/hrAction/".concat(id),data);};/**
		 * Update Order
		 * @param {financeActionCashAdvance} data - Order Number
		 * @param {number} id - Record Id
		 */this.financeActionCashAdvance=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.patch(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ .C+this.endPoint+"/financeAction/".concat(id),data);};}}

/***/ }),

/***/ 23803:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ CompanyAssetModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
class CompanyAssetModule{constructor(){this.endPoint="company-asset";/**Get all CompanyAsset records
     * @param query - query params
     */this.getAllRecords=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint,{params:query});};/**Get all CompanyAsset records
     * @param query - query params
     */this.getCars=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint+"/findCompanyCars",{params:query});};/**Get CompanyAsset record by id
     * @param id - CompanyAsset id
     */this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/").concat(id));};/**Delete CompanyAsset record
    * @param id - CompanyAsset id
    */this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete("".concat(this.endPoint,"/").concat(id));};/**Create new CompanyAsset record
     * @param data - CompanyAsset data
     */this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(this.endPoint,data);};/**Update CompanyAsset record
    * @param data - CompanyAsset data
    * @param id - CompanyAsset id
    */this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/").concat(id),data);};this.allocateResources=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post("".concat(this.endPoint,"/allocate"),data);};this.revokeResources=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete("".concat(this.endPoint,"/revoke/").concat(id));};}}

/***/ }),

/***/ 48770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ ReimbursementModule)
/* harmony export */ });
/* harmony import */ var C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89379);
/* harmony import */ var _modules_Common_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21073);
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83365);
class ReimbursementModule{constructor(){this.endPoint="reimbursement";this.getAllRecords=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.get(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ .C+this.endPoint,{params:(0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({sortByField:'order',sortOrder:'asc',perPage:4},query)});};this.getOwnRecords=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.get(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ .C+this.endPoint+"/own",{params:(0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({},query)});};this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.get(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ .C+this.endPoint+"/findOne/"+id);};this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.delete(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ .C+this.endPoint+"/remove/"+id);};this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.post(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ .C+this.endPoint,data,{headers:_modules_Common_config__WEBPACK_IMPORTED_MODULE_0__/* .FormDataHeader */ .Y});};/**
	 * Update Reimbursement
	 * @param {number} id - Reimubursement Id
	 */this.withdrawReimbursement=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.patch(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ .C+this.endPoint+"/withdraw/".concat(id));};/**
		 * Update Order
		 * @param {hrActionReimbursement} data - Order Number
		 * @param {number} id - Record Id
		 */this.hrActionReimbursement=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.patch(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ .C+this.endPoint+"/hrAction/".concat(id),data);};/**
		 * Update Order
		 * @param {financeActionReimbursement} data - Order Number
		 * @param {number} id - Record Id
		 */this.financeActionReimbursement=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.patch(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ .C+this.endPoint+"/financeAction/".concat(id),data);};}}

/***/ }),

/***/ 62298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ icons_FormOutlined)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
;// ./node_modules/@ant-design/icons-svg/es/asn/FormOutlined.js
// This icon file is generated automatically.
var FormOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M904 512h-56c-4.4 0-8 3.6-8 8v320H184V184h320c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V520c0-4.4-3.6-8-8-8z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "d": "M355.9 534.9L354 653.8c-.1 8.9 7.1 16.2 16 16.2h.4l118-2.9c2-.1 4-.9 5.4-2.3l415.9-415c3.1-3.1 3.1-8.2 0-11.3L785.4 114.3c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-415.8 415a8.3 8.3 0 00-2.3 5.6zm63.5 23.6L779.7 199l45.2 45.1-360.5 359.7-45.7 1.1.7-46.4z"
      }
    }]
  },
  "name": "form",
  "theme": "outlined"
};
/* harmony default export */ const asn_FormOutlined = (FormOutlined);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 5 modules
var AntdIcon = __webpack_require__(61187);
;// ./node_modules/@ant-design/icons/es/icons/FormOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var FormOutlined_FormOutlined = function FormOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.A, (0,esm_extends/* default */.A)({}, props, {
    ref: ref,
    icon: asn_FormOutlined
  }));
};
if (false) {}
/* harmony default export */ const icons_FormOutlined = (/*#__PURE__*/react.forwardRef(FormOutlined_FormOutlined));

/***/ }),

/***/ 50416:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9950);


/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};

/* eslint-disable no-undefined,no-param-reassign,no-shadow */

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param  {Number}    delay          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {Boolean}   [noTrailing]   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
 *                                    the internal counter is reset)
 * @param  {Function}  callback       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                    to `callback` when the throttled-function is executed.
 * @param  {Boolean}   [debounceMode] If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
 *                                    schedule `callback` to execute after `delay` ms.
 *
 * @return {Function}  A new, throttled, function.
 */
function throttle(delay, noTrailing, callback, debounceMode) {
  /*
   * After wrapper has stopped being called, this timeout ensures that
   * `callback` is executed at the proper times in `throttle` and `end`
   * debounce modes.
   */
  var timeoutID;
  var cancelled = false; // Keep track of the last time `callback` was executed.

  var lastExec = 0; // Function to clear existing timeout

  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  } // Function to cancel next exec

  function cancel() {
    clearExistingTimeout();
    cancelled = true;
  } // `noTrailing` defaults to falsy.

  if (typeof noTrailing !== 'boolean') {
    debounceMode = callback;
    callback = noTrailing;
    noTrailing = undefined;
  }
  /*
   * The `wrapper` function encapsulates all of the throttling / debouncing
   * functionality and when executed will limit the rate at which `callback`
   * is executed.
   */

  function wrapper() {
    var self = this;
    var elapsed = Date.now() - lastExec;
    var args = arguments;
    if (cancelled) {
      return;
    } // Execute `callback` and update the `lastExec` timestamp.

    function exec() {
      lastExec = Date.now();
      callback.apply(self, args);
    }
    /*
     * If `debounceMode` is true (at begin) this is used to clear the flag
     * to allow future `callback` executions.
     */

    function clear() {
      timeoutID = undefined;
    }
    if (debounceMode && !timeoutID) {
      /*
       * Since `wrapper` is being called for the first time and
       * `debounceMode` is true (at begin), execute `callback`.
       */
      exec();
    }
    clearExistingTimeout();
    if (debounceMode === undefined && elapsed > delay) {
      /*
       * In throttle mode, if `delay` time has been exceeded, execute
       * `callback`.
       */
      exec();
    } else if (noTrailing !== true) {
      /*
       * In trailing throttle mode, since `delay` time has not been
       * exceeded, schedule `callback` to execute `delay` ms after most
       * recent execution.
       *
       * If `debounceMode` is true (at begin), schedule `clear` to execute
       * after `delay` ms.
       *
       * If `debounceMode` is false (at end), schedule `callback` to
       * execute after `delay` ms.
       */
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
    }
  }
  wrapper.cancel = cancel; // Return the wrapper function.

  return wrapper;
}
var ThresholdUnits = {
  Pixel: 'Pixel',
  Percent: 'Percent'
};
var defaultThreshold = {
  unit: ThresholdUnits.Percent,
  value: 0.8
};
function parseThreshold(scrollThreshold) {
  if (typeof scrollThreshold === 'number') {
    return {
      unit: ThresholdUnits.Percent,
      value: scrollThreshold * 100
    };
  }
  if (typeof scrollThreshold === 'string') {
    if (scrollThreshold.match(/^(\d*(\.\d+)?)px$/)) {
      return {
        unit: ThresholdUnits.Pixel,
        value: parseFloat(scrollThreshold)
      };
    }
    if (scrollThreshold.match(/^(\d*(\.\d+)?)%$/)) {
      return {
        unit: ThresholdUnits.Percent,
        value: parseFloat(scrollThreshold)
      };
    }
    console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...');
    return defaultThreshold;
  }
  console.warn('scrollThreshold should be string or number');
  return defaultThreshold;
}
var InfiniteScroll = /** @class */function (_super) {
  __extends(InfiniteScroll, _super);
  function InfiniteScroll(props) {
    var _this = _super.call(this, props) || this;
    _this.lastScrollTop = 0;
    _this.actionTriggered = false;
    // variables to keep track of pull down behaviour
    _this.startY = 0;
    _this.currentY = 0;
    _this.dragging = false;
    // will be populated in componentDidMount
    // based on the height of the pull down element
    _this.maxPullDownDistance = 0;
    _this.getScrollableTarget = function () {
      if (_this.props.scrollableTarget instanceof HTMLElement) return _this.props.scrollableTarget;
      if (typeof _this.props.scrollableTarget === 'string') {
        return document.getElementById(_this.props.scrollableTarget);
      }
      if (_this.props.scrollableTarget === null) {
        console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      ");
      }
      return null;
    };
    _this.onStart = function (evt) {
      if (_this.lastScrollTop) return;
      _this.dragging = true;
      if (evt instanceof MouseEvent) {
        _this.startY = evt.pageY;
      } else if (evt instanceof TouchEvent) {
        _this.startY = evt.touches[0].pageY;
      }
      _this.currentY = _this.startY;
      if (_this._infScroll) {
        _this._infScroll.style.willChange = 'transform';
        _this._infScroll.style.transition = "transform 0.2s cubic-bezier(0,0,0.31,1)";
      }
    };
    _this.onMove = function (evt) {
      if (!_this.dragging) return;
      if (evt instanceof MouseEvent) {
        _this.currentY = evt.pageY;
      } else if (evt instanceof TouchEvent) {
        _this.currentY = evt.touches[0].pageY;
      }
      // user is scrolling down to up
      if (_this.currentY < _this.startY) return;
      if (_this.currentY - _this.startY >= Number(_this.props.pullDownToRefreshThreshold)) {
        _this.setState({
          pullToRefreshThresholdBreached: true
        });
      }
      // so you can drag upto 1.5 times of the maxPullDownDistance
      if (_this.currentY - _this.startY > _this.maxPullDownDistance * 1.5) return;
      if (_this._infScroll) {
        _this._infScroll.style.overflow = 'visible';
        _this._infScroll.style.transform = "translate3d(0px, " + (_this.currentY - _this.startY) + "px, 0px)";
      }
    };
    _this.onEnd = function () {
      _this.startY = 0;
      _this.currentY = 0;
      _this.dragging = false;
      if (_this.state.pullToRefreshThresholdBreached) {
        _this.props.refreshFunction && _this.props.refreshFunction();
        _this.setState({
          pullToRefreshThresholdBreached: false
        });
      }
      requestAnimationFrame(function () {
        // this._infScroll
        if (_this._infScroll) {
          _this._infScroll.style.overflow = 'auto';
          _this._infScroll.style.transform = 'none';
          _this._infScroll.style.willChange = 'unset';
        }
      });
    };
    _this.onScrollListener = function (event) {
      if (typeof _this.props.onScroll === 'function') {
        // Execute this callback in next tick so that it does not affect the
        // functionality of the library.
        setTimeout(function () {
          return _this.props.onScroll && _this.props.onScroll(event);
        }, 0);
      }
      var target = _this.props.height || _this._scrollableNode ? event.target : document.documentElement.scrollTop ? document.documentElement : document.body;
      // return immediately if the action has already been triggered,
      // prevents multiple triggers.
      if (_this.actionTriggered) return;
      var atBottom = _this.props.inverse ? _this.isElementAtTop(target, _this.props.scrollThreshold) : _this.isElementAtBottom(target, _this.props.scrollThreshold);
      // call the `next` function in the props to trigger the next data fetch
      if (atBottom && _this.props.hasMore) {
        _this.actionTriggered = true;
        _this.setState({
          showLoader: true
        });
        _this.props.next && _this.props.next();
      }
      _this.lastScrollTop = target.scrollTop;
    };
    _this.state = {
      showLoader: false,
      pullToRefreshThresholdBreached: false,
      prevDataLength: props.dataLength
    };
    _this.throttledOnScrollListener = throttle(150, _this.onScrollListener).bind(_this);
    _this.onStart = _this.onStart.bind(_this);
    _this.onMove = _this.onMove.bind(_this);
    _this.onEnd = _this.onEnd.bind(_this);
    return _this;
  }
  InfiniteScroll.prototype.componentDidMount = function () {
    if (typeof this.props.dataLength === 'undefined') {
      throw new Error("mandatory prop \"dataLength\" is missing. The prop is needed" + " when loading more content. Check README.md for usage");
    }
    this._scrollableNode = this.getScrollableTarget();
    this.el = this.props.height ? this._infScroll : this._scrollableNode || window;
    if (this.el) {
      this.el.addEventListener('scroll', this.throttledOnScrollListener);
    }
    if (typeof this.props.initialScrollY === 'number' && this.el && this.el instanceof HTMLElement && this.el.scrollHeight > this.props.initialScrollY) {
      this.el.scrollTo(0, this.props.initialScrollY);
    }
    if (this.props.pullDownToRefresh && this.el) {
      this.el.addEventListener('touchstart', this.onStart);
      this.el.addEventListener('touchmove', this.onMove);
      this.el.addEventListener('touchend', this.onEnd);
      this.el.addEventListener('mousedown', this.onStart);
      this.el.addEventListener('mousemove', this.onMove);
      this.el.addEventListener('mouseup', this.onEnd);
      // get BCR of pullDown element to position it above
      this.maxPullDownDistance = this._pullDown && this._pullDown.firstChild && this._pullDown.firstChild.getBoundingClientRect().height || 0;
      this.forceUpdate();
      if (typeof this.props.refreshFunction !== 'function') {
        throw new Error("Mandatory prop \"refreshFunction\" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage'");
      }
    }
  };
  InfiniteScroll.prototype.componentWillUnmount = function () {
    if (this.el) {
      this.el.removeEventListener('scroll', this.throttledOnScrollListener);
      if (this.props.pullDownToRefresh) {
        this.el.removeEventListener('touchstart', this.onStart);
        this.el.removeEventListener('touchmove', this.onMove);
        this.el.removeEventListener('touchend', this.onEnd);
        this.el.removeEventListener('mousedown', this.onStart);
        this.el.removeEventListener('mousemove', this.onMove);
        this.el.removeEventListener('mouseup', this.onEnd);
      }
    }
  };
  InfiniteScroll.prototype.componentDidUpdate = function (prevProps) {
    // do nothing when dataLength is unchanged
    if (this.props.dataLength === prevProps.dataLength) return;
    this.actionTriggered = false;
    // update state when new data was sent in
    this.setState({
      showLoader: false
    });
  };
  InfiniteScroll.getDerivedStateFromProps = function (nextProps, prevState) {
    var dataLengthChanged = nextProps.dataLength !== prevState.prevDataLength;
    // reset when data changes
    if (dataLengthChanged) {
      return __assign(__assign({}, prevState), {
        prevDataLength: nextProps.dataLength
      });
    }
    return null;
  };
  InfiniteScroll.prototype.isElementAtTop = function (target, scrollThreshold) {
    if (scrollThreshold === void 0) {
      scrollThreshold = 0.8;
    }
    var clientHeight = target === document.body || target === document.documentElement ? window.screen.availHeight : target.clientHeight;
    var threshold = parseThreshold(scrollThreshold);
    if (threshold.unit === ThresholdUnits.Pixel) {
      return target.scrollTop <= threshold.value + clientHeight - target.scrollHeight + 1;
    }
    return target.scrollTop <= threshold.value / 100 + clientHeight - target.scrollHeight + 1;
  };
  InfiniteScroll.prototype.isElementAtBottom = function (target, scrollThreshold) {
    if (scrollThreshold === void 0) {
      scrollThreshold = 0.8;
    }
    var clientHeight = target === document.body || target === document.documentElement ? window.screen.availHeight : target.clientHeight;
    var threshold = parseThreshold(scrollThreshold);
    if (threshold.unit === ThresholdUnits.Pixel) {
      return target.scrollTop + clientHeight >= target.scrollHeight - threshold.value;
    }
    return target.scrollTop + clientHeight >= threshold.value / 100 * target.scrollHeight;
  };
  InfiniteScroll.prototype.render = function () {
    var _this = this;
    var style = __assign({
      height: this.props.height || 'auto',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch'
    }, this.props.style);
    var hasChildren = this.props.hasChildren || !!(this.props.children && this.props.children instanceof Array && this.props.children.length);
    // because heighted infiniteScroll visualy breaks
    // on drag down as overflow becomes visible
    var outerDivStyle = this.props.pullDownToRefresh && this.props.height ? {
      overflow: 'auto'
    } : {};
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: outerDivStyle,
      className: "infinite-scroll-component__outerdiv"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "infinite-scroll-component " + (this.props.className || ''),
      ref: function (infScroll) {
        return _this._infScroll = infScroll;
      },
      style: style
    }, this.props.pullDownToRefresh && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        position: 'relative'
      },
      ref: function (pullDown) {
        return _this._pullDown = pullDown;
      }
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: -1 * this.maxPullDownDistance
      }
    }, this.state.pullToRefreshThresholdBreached ? this.props.releaseToRefreshContent : this.props.pullDownToRefreshContent)), this.props.children, !this.state.showLoader && !hasChildren && this.props.hasMore && this.props.loader, this.state.showLoader && this.props.hasMore && this.props.loader, !this.props.hasMore && this.props.endMessage));
  };
  return InfiniteScroll;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InfiniteScroll);
//# sourceMappingURL=index.es.js.map

/***/ }),

/***/ 57088:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"styles_container__Ibzd5","card":"styles_card__Rop9D","cardBody":"styles_cardBody__eVV9C","cardBodyTop":"styles_cardBodyTop__01Pvn","topRight":"styles_topRight__r5YfC","file":"styles_file__8H8wp","cardTitle":"styles_cardTitle__RP3wo","status":"styles_status__aQvty","cardBodyMiddle":"styles_cardBodyMiddle__kXobY","purpose":"styles_purpose__EIgJq","cardBodyEnd":"styles_cardBodyEnd__fzKUd","dateWrap":"styles_dateWrap__crkuG","fromDate":"styles_fromDate__kwM7M","bold":"styles_bold__PWhoQ","date":"styles_date__P16AH","fullWidth":"styles_fullWidth__5WIwA"});

/***/ }),

/***/ 46173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"styles_container__PUkty","card":"styles_card__FwWeX","cardBody":"styles_cardBody__ENNUY","cardBodyTop":"styles_cardBodyTop__ENF0O","topRight":"styles_topRight__LfSmA","status":"styles_status__yDW5T","file":"styles_file__uW6BB","cardTitle":"styles_cardTitle__ZjKTL","cardBodyMiddle":"styles_cardBodyMiddle__ODcbi","purpose":"styles_purpose__x8kGf","cardBodyEnd":"styles_cardBodyEnd__tvkc-","amountWrap":"styles_amountWrap__QTo9Q","requestAmount":"styles_requestAmount__4X3OT","strike":"styles_strike__R0sHK","approvedAmount":"styles_approvedAmount__Vpy9G","date":"styles_date__fXzoY","fullWidth":"styles_fullWidth__GGjtG"});

/***/ }),

/***/ 70666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"styles_container__LfQEA","card":"styles_card__xlnA+","cardBody":"styles_cardBody__K3hPA","cardBodyTop":"styles_cardBodyTop__IK64B","cardTitle":"styles_cardTitle__xnIbx","topRight":"styles_topRight__9+kuB","status":"styles_status__VRnxj","file":"styles_file__LMFRl","cardBodyMiddle":"styles_cardBodyMiddle__Z37Se","purpose":"styles_purpose__DB-Yr","cardBodyEnd":"styles_cardBodyEnd__Ja7-b","amountWrap":"styles_amountWrap__AoZFN","claimedAmount":"styles_claimedAmount__FWN2r","strike":"styles_strike__Nj53o","approvedAmount":"styles_approvedAmount__-zmcD","date":"styles_date__gnw4s","fullWidth":"styles_fullWidth__rr2+q"});

/***/ })

}]);