(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[5069],{

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

/***/ 49719:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ EmployeeRequests_ManageReimbursements)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./src/Components/Atoms/index.tsx + 12 modules
var Atoms = __webpack_require__(9394);
// EXTERNAL MODULE: ./src/Components/Templates/Layout/index.tsx + 28 modules
var Layout = __webpack_require__(81168);
;// ./src/Components/Organisms/Dashboard/EmployeeRequests/ManageReimbursements/styles.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"container":"styles_container__kdRDH","onlyMyTask":"styles_onlyMyTask__1UeBB"});
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
// EXTERNAL MODULE: ./src/Modules/Reimbursement/index.ts
var Reimbursement = __webpack_require__(48770);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(98341);
// EXTERNAL MODULE: ./src/Modules/Reimbursement/permissions.ts
var Reimbursement_permissions = __webpack_require__(70250);
// EXTERNAL MODULE: ./src/helpers/useDebounce.ts
var useDebounce = __webpack_require__(28173);
// EXTERNAL MODULE: ./src/Modules/User/index.ts
var User = __webpack_require__(47645);
// EXTERNAL MODULE: ./src/Components/Organisms/Dashboard/MyServices/Reimbursement/ReimbursementDrawer/index.tsx + 1 modules
var ReimbursementDrawer = __webpack_require__(93305);
// EXTERNAL MODULE: ./src/Components/Organisms/Dashboard/MyServices/Reimbursement/card.tsx
var card = __webpack_require__(60415);
// EXTERNAL MODULE: ./src/helpers/commonEnums.ts
var commonEnums = __webpack_require__(2360);
// EXTERNAL MODULE: ./src/helpers/common.ts
var common = __webpack_require__(88132);
// EXTERNAL MODULE: ./src/Components/Atoms/CardShimmer/index.tsx + 1 modules
var CardShimmer = __webpack_require__(87031);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/Dashboard/EmployeeRequests/ManageReimbursements/index.tsx
const{RangePicker}=date_picker/* default */.A;const breadCrumbsData=[{text:"Home",isLink:true,path:"/"},{isLink:true,text:"Employee Requests",path:"/employee-requests/?all"},{isLink:false,text:"Reimbursements"}];const ManageReimbursements=()=>{var _filters$userId,_filters$status;// available permissions for the properties page
const permissionSlug=(0,common/* getPermissionSlugs */.AH)(Reimbursement_permissions/* ReimbursementPermissionsEnum */.g);const{userPermissions}=(0,es/* useSelector */.d4)(state=>state.usersReducer);const permissions=userPermissions;const{createReimbursement}=permissions;const[filters,setFilters]=(0,react.useState)({userId:undefined,fetchOpenRequest:true,status:undefined,fromDate:undefined,toDate:undefined,page:1,perPage:6});const[currentEditType,setcurrentEditType]=(0,react.useState)({recordId:0});const[openDrawer,setOpenDrawer]=(0,react.useState)(false);const module=(0,react.useMemo)(()=>new Reimbursement/* ReimbursementModule */.$(),[]);const{data,onRefresh,setData,loading,meta}=(0,hooks/* useFetchData */.Gs)({method:module.getAllRecords,initialQuery:{perPage:25,fetchOpenRequest:true}});//user search
const[searchTermUser,setSearchTermUser]=(0,react.useState)("");const debouncedSearchTermUser=(0,useDebounce/* useDebounce */.d)(searchTermUser,500);const[users,setUsers]=(0,react.useState)([]);const userModule=(0,react.useMemo)(()=>new User/* UserModule */.U(),[]);const onUserSearch=(0,react.useCallback)(()=>{if(debouncedSearchTermUser){userModule.getAllRecords({name:debouncedSearchTermUser}).then(res=>{setUsers(prev=>{var _res$data,_res$data$data;// if the data is already present in the state, then don't add it again
const filteredData=res===null||res===void 0?void 0:(_res$data=res.data)===null||_res$data===void 0?void 0:(_res$data$data=_res$data.data)===null||_res$data$data===void 0?void 0:_res$data$data.filter(item=>{return!(prev!==null&&prev!==void 0&&prev.find(prevItem=>prevItem.id===item.id));});// add the new data to the existing data
return[...prev,...filteredData];});}).catch(err=>{message/* default */.Ay.error(err.response.data.message);});}},[debouncedSearchTermUser]);(0,react.useEffect)(()=>{onUserSearch();},[onUserSearch]);return/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.A,{permissionSlug:permissionSlug,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* PageHeader */.zY,{heading:"Reimbursements",breadCrumbData:breadCrumbsData,filters:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{marginTop:'1.5rem'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"radio",label:"User",name:"userId",withSearch:true,options:users===null||users===void 0?void 0:users.map(item=>({label:item.firstName+" "+item.lastName,value:item.id.toString()})),onChange:event=>{const _temp=(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},filters),{},{userId:event.target.value});setFilters(_temp);},value:(_filters$userId=filters.userId)===null||_filters$userId===void 0?void 0:_filters$userId.toString(),onReset:()=>{const _temp=(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},filters),{},{userId:undefined});setFilters(_temp);onRefresh(_temp);// Reset search term
setSearchTermUser("");},onUpdate:()=>onRefresh(filters)// START: For search
// loading={clients.loading}
,searchTerm:searchTermUser,onSearch:event=>setSearchTermUser(event.currentTarget.value)// END: For search
})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"radio",label:"Status",name:"status",withSearch:false,options:Object.entries(commonEnums/* ReimbursementStatus */.ps).map(_ref=>{let[key,value]=_ref;return{label:(0,common/* capitalize */.ZH)(value.status.replaceAll("_"," ")),value:key};}),onChange:event=>{const _temp=(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},filters),{},{status:event.target.value});setFilters(_temp);},value:(_filters$status=filters.status)===null||_filters$status===void 0?void 0:_filters$status.toString(),onReset:()=>{const _temp=(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},filters),{},{status:undefined});setFilters(_temp);onRefresh(_temp);},onUpdate:()=>onRefresh(filters)})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"datepicker",label:"Date",name:"dateRange",onChange:values=>{var _values$,_values$$_d,_values$2,_values$2$_d;const _temp=(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},filters),{},{fromDate:values?(_values$=values[0])===null||_values$===void 0?void 0:(_values$$_d=_values$._d)===null||_values$$_d===void 0?void 0:_values$$_d.toISOString().substring(0,10):undefined,toDate:values?(_values$2=values[1])===null||_values$2===void 0?void 0:(_values$2$_d=_values$2._d)===null||_values$2$_d===void 0?void 0:_values$2$_d.toISOString().substring(0,10):undefined});setFilters(_temp);},onReset:()=>{const _temp=(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},filters),{},{fromDate:undefined,toDate:undefined});setFilters(_temp);onRefresh(_temp);},onUpdate:()=>onRefresh(filters)})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{backgroundColor:filters.fetchOpenRequest?"var(--color-dark-main)":undefined,color:filters.fetchOpenRequest?"var(--color-inactive)":undefined},onClick:()=>{const _temp=(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},filters),{},{fetchOpenRequest:filters.fetchOpenRequest?undefined:true});setFilters(_temp);onRefresh(_temp);},className:styles_module.onlyMyTask,children:"Open Requests Only"})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)("section",{className:styles_module.container,children:loading?[...new Array(6)].map((_,index)=>/*#__PURE__*/(0,jsx_runtime.jsx)(CardShimmer/* CardShimmer */.S,{},"shimmer".concat(index))):(data===null||data===void 0?void 0:data.length)!==0?data===null||data===void 0?void 0:data.map((reimbursement,index)=>/*#__PURE__*/(0,jsx_runtime.jsx)(card/* ReimbursementCard */.x,{reimbursement:reimbursement,onClick:()=>{setcurrentEditType((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},currentEditType),{},{recordId:reimbursement.id}));setOpenDrawer(true);}},index)):/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{margin:'auto'},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomEmpty */.ZX,{description:"No requests found for the given filters, please modify the search criteria"})})}),/*#__PURE__*/(0,jsx_runtime.jsx)(pagination/* default */.A,{hideOnSinglePage:true,current:meta===null||meta===void 0?void 0:meta.page,total:meta===null||meta===void 0?void 0:meta.total,pageSize:(meta===null||meta===void 0?void 0:meta.perPage)||0,onChange:(page,pageSize)=>{onRefresh((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},filters),{},{page:page,perPage:pageSize}));},style:{alignSelf:"flex-end"}}),openDrawer&&/*#__PURE__*/(0,jsx_runtime.jsx)(ReimbursementDrawer/* ReimbursementDrawer */.O,{openDrawer:openDrawer,onClose:()=>setOpenDrawer(false),permissions:permissions,record:currentEditType.recordId,reloadTableData:onRefresh})]});};/* harmony default export */ const EmployeeRequests_ManageReimbursements = (ManageReimbursements);

/***/ }),

/***/ 93305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

"use strict";
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

/***/ 48770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 56272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58168);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9950);
/* harmony import */ var _ant_design_icons_svg_es_asn_FileOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62259);
/* harmony import */ var _components_AntdIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61187);

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var FileOutlined = function FileOutlined(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_AntdIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({}, props, {
    ref: ref,
    icon: _ant_design_icons_svg_es_asn_FileOutlined__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A
  }));
};
if (false) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(FileOutlined));

/***/ }),

/***/ 70666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"styles_container__LfQEA","card":"styles_card__xlnA+","cardBody":"styles_cardBody__K3hPA","cardBodyTop":"styles_cardBodyTop__IK64B","cardTitle":"styles_cardTitle__xnIbx","topRight":"styles_topRight__9+kuB","status":"styles_status__VRnxj","file":"styles_file__LMFRl","cardBodyMiddle":"styles_cardBodyMiddle__Z37Se","purpose":"styles_purpose__DB-Yr","cardBodyEnd":"styles_cardBodyEnd__Ja7-b","amountWrap":"styles_amountWrap__AoZFN","claimedAmount":"styles_claimedAmount__FWN2r","strike":"styles_strike__Nj53o","approvedAmount":"styles_approvedAmount__-zmcD","date":"styles_date__gnw4s","fullWidth":"styles_fullWidth__rr2+q"});

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