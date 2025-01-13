(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[9292],{

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

/***/ 3230:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ EmployeeRequests_ManageCarReservation)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./src/Components/Atoms/index.tsx + 12 modules
var Atoms = __webpack_require__(9394);
// EXTERNAL MODULE: ./src/Components/Templates/Layout/index.tsx + 28 modules
var Layout = __webpack_require__(81168);
;// ./src/Components/Organisms/Dashboard/EmployeeRequests/ManageCarReservation/styles.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"container":"styles_container__HPiON","onlyMyTask":"styles_onlyMyTask__VHwBg"});
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 1 modules
var message = __webpack_require__(92759);
// EXTERNAL MODULE: ./node_modules/antd/es/pagination/index.js + 12 modules
var pagination = __webpack_require__(24575);
// EXTERNAL MODULE: ./src/hooks/index.ts + 5 modules
var hooks = __webpack_require__(91970);
// EXTERNAL MODULE: ./src/Modules/CarReservation/index.ts
var CarReservation = __webpack_require__(42926);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(98341);
// EXTERNAL MODULE: ./src/Modules/CarReservation/permissions.ts
var CarReservation_permissions = __webpack_require__(35902);
// EXTERNAL MODULE: ./src/helpers/useDebounce.ts
var useDebounce = __webpack_require__(28173);
// EXTERNAL MODULE: ./src/Modules/User/index.ts
var User = __webpack_require__(47645);
// EXTERNAL MODULE: ./src/Components/Organisms/Dashboard/MyServices/CarReservation/CarReservationDrawer/index.tsx + 1 modules
var CarReservationDrawer = __webpack_require__(97251);
// EXTERNAL MODULE: ./src/Components/Organisms/Dashboard/MyServices/CarReservation/card.tsx
var card = __webpack_require__(82393);
// EXTERNAL MODULE: ./src/helpers/commonEnums.ts
var commonEnums = __webpack_require__(2360);
// EXTERNAL MODULE: ./src/helpers/common.ts
var common = __webpack_require__(88132);
// EXTERNAL MODULE: ./src/Components/Atoms/CardShimmer/index.tsx + 1 modules
var CardShimmer = __webpack_require__(87031);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/Dashboard/EmployeeRequests/ManageCarReservation/index.tsx
const breadCrumbsData=[{text:"Home",isLink:true,path:"/"},{isLink:true,text:"Employee Requests",path:"/employee-requests/?all"},{isLink:false,text:"Car Reservation Request"}];const ManageCarReservation=()=>{var _filters$userId,_filters$status;// available permissions for the properties page
const permissionSlug=(0,common/* getPermissionSlugs */.AH)(CarReservation_permissions/* CarReservationPermissionsEnum */.y);const{userPermissions}=(0,es/* useSelector */.d4)(state=>state.usersReducer);const permissions=userPermissions;const[filters,setFilters]=(0,react.useState)({userId:undefined,fetchOpenRequest:true,status:undefined,fromDate:undefined,toDate:undefined,page:1,perPage:6});const[currentEditType,setcurrentEditType]=(0,react.useState)({recordId:0});const[openDrawer,setOpenDrawer]=(0,react.useState)(false);const module=(0,react.useMemo)(()=>new CarReservation/* CarReservationModule */.n(),[]);const{data,onRefresh,loading,meta}=(0,hooks/* useFetchData */.Gs)({method:module.getAllRecords,initialQuery:{perPage:filters.perPage,page:filters.page,fetchOpenRequest:true}});//user search
const[searchTermUser,setSearchTermUser]=(0,react.useState)("");const debouncedSearchTermUser=(0,useDebounce/* useDebounce */.d)(searchTermUser,500);const[users,setUsers]=(0,react.useState)([]);const userModule=(0,react.useMemo)(()=>new User/* UserModule */.U(),[]);const onUserSearch=(0,react.useCallback)(()=>{if(debouncedSearchTermUser){userModule.getAllRecords({name:debouncedSearchTermUser}).then(res=>{setUsers(prev=>{var _res$data,_res$data$data;// if the data is already present in the state, then don't add it again
const filteredData=res===null||res===void 0?void 0:(_res$data=res.data)===null||_res$data===void 0?void 0:(_res$data$data=_res$data.data)===null||_res$data$data===void 0?void 0:_res$data$data.filter(item=>{return!(prev!==null&&prev!==void 0&&prev.find(prevItem=>prevItem.id===item.id));});// add the new data to the existing data
return[...prev,...filteredData];});}).catch(err=>{message/* default */.Ay.error(err.response.data.message);});}},[debouncedSearchTermUser]);(0,react.useEffect)(()=>{onUserSearch();},[onUserSearch]);return/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.A,{permissionSlug:permissionSlug,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* PageHeader */.zY,{heading:"Car Reservation Request",breadCrumbData:breadCrumbsData,filters:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{marginTop:'1.5rem'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"radio",label:"User",name:"userId",withSearch:true,options:users===null||users===void 0?void 0:users.map(item=>({label:item.firstName+" "+item.lastName,value:item.id.toString()})),onChange:event=>{const _temp=(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},filters),{},{userId:event.target.value});setFilters(_temp);},value:(_filters$userId=filters.userId)===null||_filters$userId===void 0?void 0:_filters$userId.toString(),onReset:()=>{const _temp=(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},filters),{},{userId:undefined});setFilters(_temp);onRefresh(_temp);// Reset search term
setSearchTermUser("");},onUpdate:()=>onRefresh(filters)// START: For search
// loading={clients.loading}
,searchTerm:searchTermUser,onSearch:event=>setSearchTermUser(event.currentTarget.value)// END: For search
})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"radio",label:"Status",name:"status",withSearch:false,options:Object.entries(commonEnums/* CarReservationRequestStatus */.KK).map(_ref=>{let[key,value]=_ref;return{label:(0,common/* capitalize */.ZH)(value.status.replaceAll("_"," ")),value:key};}),onChange:event=>{const _temp=(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},filters),{},{status:event.target.value});setFilters(_temp);},value:(_filters$status=filters.status)===null||_filters$status===void 0?void 0:_filters$status.toString(),onReset:()=>{const _temp=(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},filters),{},{status:undefined});setFilters(_temp);onRefresh(_temp);},onUpdate:()=>onRefresh(filters)})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"datepicker",label:"Date",name:"dateRange",onChange:values=>{var _values$,_values$$_d,_values$2,_values$2$_d;const _temp=(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},filters),{},{fromDate:values?(_values$=values[0])===null||_values$===void 0?void 0:(_values$$_d=_values$._d)===null||_values$$_d===void 0?void 0:_values$$_d.toISOString().substring(0,10):undefined,toDate:values?(_values$2=values[1])===null||_values$2===void 0?void 0:(_values$2$_d=_values$2._d)===null||_values$2$_d===void 0?void 0:_values$2$_d.toISOString().substring(0,10):undefined});setFilters(_temp);},onReset:()=>{const _temp=(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},filters),{},{fromDate:undefined,toDate:undefined});setFilters(_temp);onRefresh(_temp);},onUpdate:()=>onRefresh(filters)})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{backgroundColor:filters.fetchOpenRequest?"var(--color-dark-main)":undefined,color:filters.fetchOpenRequest?"var(--color-inactive)":undefined},onClick:()=>{const _temp=(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},filters),{},{fetchOpenRequest:filters.fetchOpenRequest?undefined:true});setFilters(_temp);onRefresh(_temp);},className:styles_module.onlyMyTask,children:"Open Requests Only"})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)("section",{className:styles_module.container,children:loading?[...new Array(6)].map((_,index)=>/*#__PURE__*/(0,jsx_runtime.jsx)(CardShimmer/* CardShimmer */.S,{},"shimmer".concat(index))):(data===null||data===void 0?void 0:data.length)!==0?data===null||data===void 0?void 0:data.map((carReservation,index)=>/*#__PURE__*/(0,jsx_runtime.jsx)(card/* CarReservationCard */.V,{carReservation:carReservation,onClick:()=>{setcurrentEditType((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},currentEditType),{},{recordId:carReservation.id}));setOpenDrawer(true);}},index)):/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{margin:'auto'},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomEmpty */.ZX,{description:"No requests found for the given filters, please modify the search criteria"})})}),/*#__PURE__*/(0,jsx_runtime.jsx)(pagination/* default */.A,{hideOnSinglePage:true,current:meta===null||meta===void 0?void 0:meta.page,total:meta===null||meta===void 0?void 0:meta.total,pageSize:(meta===null||meta===void 0?void 0:meta.perPage)||0,onChange:(page,pageSize)=>{onRefresh((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},filters),{},{page:page,perPage:pageSize}));},style:{alignSelf:"flex-end"}}),openDrawer&&/*#__PURE__*/(0,jsx_runtime.jsx)(CarReservationDrawer/* CarReservationDrawer */.a,{openDrawer:openDrawer,onClose:()=>setOpenDrawer(false),permissions:permissions,record:currentEditType.recordId,reloadTableData:onRefresh})]});};/* harmony default export */ const EmployeeRequests_ManageCarReservation = (ManageCarReservation);

/***/ }),

/***/ 97251:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

"use strict";
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

/***/ 42926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 23803:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 62298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

/***/ 57088:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"styles_container__Ibzd5","card":"styles_card__Rop9D","cardBody":"styles_cardBody__eVV9C","cardBodyTop":"styles_cardBodyTop__01Pvn","topRight":"styles_topRight__r5YfC","file":"styles_file__8H8wp","cardTitle":"styles_cardTitle__RP3wo","status":"styles_status__aQvty","cardBodyMiddle":"styles_cardBodyMiddle__kXobY","purpose":"styles_purpose__EIgJq","cardBodyEnd":"styles_cardBodyEnd__fzKUd","dateWrap":"styles_dateWrap__crkuG","fromDate":"styles_fromDate__kwM7M","bold":"styles_bold__PWhoQ","date":"styles_date__P16AH","fullWidth":"styles_fullWidth__5WIwA"});

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