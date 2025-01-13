(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[8131],{

/***/ 87031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

/***/ 49885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ EmployeeRequests_ManageCashAdvance)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./src/Components/Atoms/index.tsx + 12 modules
var Atoms = __webpack_require__(9394);
// EXTERNAL MODULE: ./src/Components/Templates/Layout/index.tsx + 28 modules
var Layout = __webpack_require__(81168);
;// ./src/Components/Organisms/Dashboard/EmployeeRequests/ManageCashAdvance/styles.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"container":"styles_container__jWAqe","onlyMyTask":"styles_onlyMyTask__wJyZG"});
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./node_modules/antd/es/date-picker/index.js + 56 modules
var date_picker = __webpack_require__(4132);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 1 modules
var message = __webpack_require__(92759);
// EXTERNAL MODULE: ./node_modules/antd/es/pagination/index.js + 12 modules
var pagination = __webpack_require__(24575);
// EXTERNAL MODULE: ./src/hooks/index.ts + 5 modules
var hooks = __webpack_require__(91970);
// EXTERNAL MODULE: ./src/Modules/CashAdvance/index.ts
var CashAdvance = __webpack_require__(59125);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(98341);
// EXTERNAL MODULE: ./src/Modules/CashAdvance/permissions.ts
var CashAdvance_permissions = __webpack_require__(82709);
// EXTERNAL MODULE: ./src/helpers/useDebounce.ts
var useDebounce = __webpack_require__(28173);
// EXTERNAL MODULE: ./src/Modules/User/index.ts
var User = __webpack_require__(47645);
// EXTERNAL MODULE: ./src/Components/Organisms/Dashboard/MyServices/CashAdvance/CashAdvanceDrawer/index.tsx + 1 modules
var CashAdvanceDrawer = __webpack_require__(69493);
// EXTERNAL MODULE: ./src/Components/Organisms/Dashboard/MyServices/CashAdvance/card.tsx
var card = __webpack_require__(22128);
// EXTERNAL MODULE: ./src/helpers/commonEnums.ts
var commonEnums = __webpack_require__(2360);
// EXTERNAL MODULE: ./src/helpers/common.ts
var common = __webpack_require__(88132);
// EXTERNAL MODULE: ./src/Components/Atoms/CardShimmer/index.tsx + 1 modules
var CardShimmer = __webpack_require__(87031);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/Dashboard/EmployeeRequests/ManageCashAdvance/index.tsx
const{RangePicker}=date_picker/* default */.A;const breadCrumbsData=[{text:"Home",isLink:true,path:"/"},{isLink:true,text:"Employee Requests",path:"/employee-requests/?all"},{isLink:false,text:"Cash Advance Request"}];const ManageCashAdvance=()=>{var _filters$userId,_filters$status;// available permissions for the properties page
const permissionSlug=(0,common/* getPermissionSlugs */.AH)(CashAdvance_permissions/* CashAdvancePermissionsEnum */.H);const{userPermissions}=(0,es/* useSelector */.d4)(state=>state.usersReducer);const permissions=userPermissions;const{createCashAdvance}=permissions;const[filters,setFilters]=(0,react.useState)({userId:undefined,fetchOpenRequest:true,status:undefined,fromDate:undefined,toDate:undefined,page:1,perPage:6});const[currentEditType,setcurrentEditType]=(0,react.useState)({recordId:0});const[openDrawer,setOpenDrawer]=(0,react.useState)(false);const module=(0,react.useMemo)(()=>new CashAdvance/* CashAdvanceModule */.g(),[]);const{data,onRefresh,setData,loading,meta}=(0,hooks/* useFetchData */.Gs)({method:module.getAllRecords,initialQuery:{perPage:filters.perPage,page:filters.page,fetchOpenRequest:true}});//user search
const[searchTermUser,setSearchTermUser]=(0,react.useState)("");const debouncedSearchTermUser=(0,useDebounce/* useDebounce */.d)(searchTermUser,500);const[users,setUsers]=(0,react.useState)([]);const userModule=(0,react.useMemo)(()=>new User/* UserModule */.U(),[]);const onUserSearch=(0,react.useCallback)(()=>{if(debouncedSearchTermUser){userModule.getAllRecords({name:debouncedSearchTermUser}).then(res=>{setUsers(prev=>{var _res$data,_res$data$data;// if the data is already present in the state, then don't add it again
const filteredData=res===null||res===void 0?void 0:(_res$data=res.data)===null||_res$data===void 0?void 0:(_res$data$data=_res$data.data)===null||_res$data$data===void 0?void 0:_res$data$data.filter(item=>{return!(prev!==null&&prev!==void 0&&prev.find(prevItem=>prevItem.id===item.id));});// add the new data to the existing data
return[...prev,...filteredData];});}).catch(err=>{message/* default */.Ay.error(err.response.data.message);});}},[debouncedSearchTermUser]);(0,react.useEffect)(()=>{onUserSearch();},[onUserSearch]);return/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.A,{permissionSlug:permissionSlug,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* PageHeader */.zY,{heading:"Cash Advance Request",breadCrumbData:breadCrumbsData,filters:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{marginTop:'1.5rem'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"radio",label:"User",name:"userId",withSearch:true,options:users===null||users===void 0?void 0:users.map(item=>({label:item.firstName+" "+item.lastName,value:item.id.toString()})),onChange:event=>{const _temp=(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},filters),{},{userId:event.target.value});setFilters(_temp);},value:(_filters$userId=filters.userId)===null||_filters$userId===void 0?void 0:_filters$userId.toString(),onReset:()=>{const _temp=(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},filters),{},{userId:undefined});setFilters(_temp);onRefresh(_temp);// Reset search term
setSearchTermUser("");},onUpdate:()=>onRefresh(filters)// START: For search
// loading={clients.loading}
,searchTerm:searchTermUser,onSearch:event=>setSearchTermUser(event.currentTarget.value)// END: For search
})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"radio",label:"Status",name:"status",withSearch:false,options:Object.entries(commonEnums/* CashAdvanceStatus */.Q0).map(_ref=>{let[key,value]=_ref;return{label:(0,common/* capitalize */.ZH)(value.status.replaceAll("_"," ")),value:key};}),onChange:event=>{const _temp=(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},filters),{},{status:event.target.value});setFilters(_temp);},value:(_filters$status=filters.status)===null||_filters$status===void 0?void 0:_filters$status.toString(),onReset:()=>{const _temp=(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},filters),{},{status:undefined});setFilters(_temp);onRefresh(_temp);},onUpdate:()=>onRefresh(filters)})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"datepicker",label:"Date",name:"dateRange",onChange:values=>{var _values$,_values$$_d,_values$2,_values$2$_d;const _temp=(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},filters),{},{fromDate:values?(_values$=values[0])===null||_values$===void 0?void 0:(_values$$_d=_values$._d)===null||_values$$_d===void 0?void 0:_values$$_d.toISOString().substring(0,10):undefined,toDate:values?(_values$2=values[1])===null||_values$2===void 0?void 0:(_values$2$_d=_values$2._d)===null||_values$2$_d===void 0?void 0:_values$2$_d.toISOString().substring(0,10):undefined});setFilters(_temp);},onReset:()=>{const _temp=(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},filters),{},{fromDate:undefined,toDate:undefined});setFilters(_temp);onRefresh(_temp);},onUpdate:()=>onRefresh(filters)})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{backgroundColor:filters.fetchOpenRequest?"var(--color-dark-main)":undefined,color:filters.fetchOpenRequest?"var(--color-inactive)":undefined},onClick:()=>{const _temp=(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},filters),{},{fetchOpenRequest:filters.fetchOpenRequest?undefined:true});setFilters(_temp);onRefresh(_temp);},className:styles_module.onlyMyTask,children:"Open Requests Only"})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)("section",{className:styles_module.container,children:loading?[...new Array(6)].map((_,index)=>/*#__PURE__*/(0,jsx_runtime.jsx)(CardShimmer/* CardShimmer */.S,{},"shimmer".concat(index))):(data===null||data===void 0?void 0:data.length)!==0?data===null||data===void 0?void 0:data.map((cashAdvance,index)=>/*#__PURE__*/(0,jsx_runtime.jsx)(card/* CashAdvanceCard */.a,{cashAdvance:cashAdvance,onClick:()=>{setcurrentEditType((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},currentEditType),{},{recordId:cashAdvance.id}));setOpenDrawer(true);}},index)):/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{margin:'auto'},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomEmpty */.ZX,{description:"No requests found for the given filters, please modify the search criteria"})})}),/*#__PURE__*/(0,jsx_runtime.jsx)(pagination/* default */.A,{hideOnSinglePage:true,current:meta===null||meta===void 0?void 0:meta.page,total:meta===null||meta===void 0?void 0:meta.total,pageSize:(meta===null||meta===void 0?void 0:meta.perPage)||0,onChange:(page,pageSize)=>{onRefresh((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},filters),{},{page:page,perPage:pageSize}));},style:{alignSelf:"flex-end"}}),openDrawer&&/*#__PURE__*/(0,jsx_runtime.jsx)(CashAdvanceDrawer/* CashAdvanceDrawer */.x,{openDrawer:openDrawer,onClose:()=>setOpenDrawer(false),permissions:permissions,record:currentEditType.recordId,reloadTableData:onRefresh})]});};/* harmony default export */ const EmployeeRequests_ManageCashAdvance = (ManageCashAdvance);

/***/ }),

/***/ 69493:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

"use strict";
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

/***/ 59125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 46173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"styles_container__PUkty","card":"styles_card__FwWeX","cardBody":"styles_cardBody__ENNUY","cardBodyTop":"styles_cardBodyTop__ENF0O","topRight":"styles_topRight__LfSmA","status":"styles_status__yDW5T","file":"styles_file__uW6BB","cardTitle":"styles_cardTitle__ZjKTL","cardBodyMiddle":"styles_cardBodyMiddle__ODcbi","purpose":"styles_purpose__x8kGf","cardBodyEnd":"styles_cardBodyEnd__tvkc-","amountWrap":"styles_amountWrap__QTo9Q","requestAmount":"styles_requestAmount__4X3OT","strike":"styles_strike__R0sHK","approvedAmount":"styles_approvedAmount__Vpy9G","date":"styles_date__fXzoY","fullWidth":"styles_fullWidth__GGjtG"});

/***/ }),

/***/ 17640:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 45618:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 97492:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 31815:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 89052:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 82787:
/***/ (() => {

/* (ignored) */

/***/ })

}]);