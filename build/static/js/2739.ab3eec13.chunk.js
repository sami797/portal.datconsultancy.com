"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[2739],{

/***/ 22739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ EligibleRefunds)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./src/Components/Atoms/index.tsx + 12 modules
var Atoms = __webpack_require__(9394);
// EXTERNAL MODULE: ./node_modules/antd/es/empty/index.js + 2 modules
var empty = __webpack_require__(90247);
// EXTERNAL MODULE: ./src/Components/Organisms/Skeletons/index.tsx
var Skeletons = __webpack_require__(70619);
// EXTERNAL MODULE: ./src/Components/Templates/Layout/index.tsx + 28 modules
var Layout = __webpack_require__(81168);
// EXTERNAL MODULE: ./node_modules/antd/es/table/index.js + 96 modules
var table = __webpack_require__(41821);
// EXTERNAL MODULE: ./src/helpers/commonEnums.ts
var commonEnums = __webpack_require__(2360);
// EXTERNAL MODULE: ./src/helpers/constants.ts
var constants = __webpack_require__(65944);
// EXTERNAL MODULE: ./src/helpers/dateHandler.ts
var dateHandler = __webpack_require__(98933);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/Dashboard/CreditTransactions/EligibleRefunds/table-columns.tsx
// import { any } from "../../../../../Modules/Organization/types";
function TableComponent(props){const{tableData,tableLoading,emptyText}=props;const columns=[{title:"S.No",dataIndex:"index",key:"index",render:(text,record,index)=>index+1,width:"60px"},{title:'Agent',dataIndex:"amount",key:"amount",render:(amount,record)=>{var _record$user,_record$user2,_record$user3;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"d-flex",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:"".concat(constants/* RESOURCE_BASE_URL */.to).concat((_record$user=record.user)===null||_record$user===void 0?void 0:_record$user.profile),alt:"profile",style:{width:"30px",height:"30px",borderRadius:"100%",objectFit:"cover"}}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"ml-2 my-auto",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-sub",size:"xs",children:"".concat((_record$user2=record.user)===null||_record$user2===void 0?void 0:_record$user2.firstName," ").concat((_record$user3=record.user)===null||_record$user3===void 0?void 0:_record$user3.lastName)})})]});}},{title:'Property',dataIndex:"property",key:"property",render:(property,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)("a",{href:"".concat(constants/* FRONT_END_URL */.Yb,"/en/property/").concat(property.slug),target:'_blank',rel:"noreferrer",title:property.localization[0].title,className:"color-dark-main font-size-sm d-flex justify-center",children:property.localization[0].title})})},{title:'Credits Spent',dataIndex:"creditsSpent",key:"creditsSpent",className:'text-center',render:(creditsSpent,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"color-dark-main font-size-sm d-flex justify-center",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"\n                        ".concat(commonEnums/* CreditsTransactionType */.vY[record.transactionType]==="debit"?"color-red-yp":"","\n                       ").concat(commonEnums/* CreditsTransactionType */.vY[record.transactionType]==="credit"?"color-green-yp":"","\n                    "),children:[commonEnums/* CreditsTransactionType */.vY[record.transactionType]==="debit"&&"-",commonEnums/* CreditsTransactionType */.vY[record.transactionType]==="credit"&&"+","\xA0","".concat(creditsSpent)]})})},{title:'Eligible Refund',dataIndex:"refundCredits",key:"refundCredits",className:'text-center',render:(refundCredits,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"color-dark-main font-size-sm d-flex justify-center",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"\n                        ".concat(commonEnums/* CreditsTransactionType */.vY[record.transactionType]==="debit"?"color-red-yp":"","\n                       ").concat(commonEnums/* CreditsTransactionType */.vY[record.transactionType]==="credit"?"color-green-yp":"","\n                    "),children:[commonEnums/* CreditsTransactionType */.vY[record.transactionType]==="debit"&&"-",commonEnums/* CreditsTransactionType */.vY[record.transactionType]==="credit"&&"+","\xA0","".concat(refundCredits||0)]})})},{title:'Transaction Date',dataIndex:"transactionDate",key:"transactionDate",render:(transactionDate,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",children:(0,dateHandler/* convertDate */.ic)(transactionDate,"dd M,yy-t")})},{title:'Cancelled Date',dataIndex:"canceledAt",key:"canceledAt",render:(canceledAt,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",children:(0,dateHandler/* convertDate */.ic)(canceledAt,"dd M,yy-t")})},{title:'Reference ID',dataIndex:"referenceId",key:"referenceId",className:'text-center',render:(referenceId,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",children:"".concat(referenceId===null?"":referenceId)})}];return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(table/* default */.A,{sticky:true,dataSource:tableData,columns:columns,pagination:false,scroll:{x:991},loading:tableLoading,rowKey:record=>"saved-searches-view-".concat(record.id),locale:{emptyText:emptyText}})});}
// EXTERNAL MODULE: ./src/Modules/Transactions/permissions.ts
var permissions = __webpack_require__(735);
// EXTERNAL MODULE: ./src/Modules/Organization/index.ts
var Organization = __webpack_require__(42361);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(98341);
// EXTERNAL MODULE: ./src/helpers/common.ts
var common = __webpack_require__(88132);
;// ./src/Components/Organisms/Dashboard/CreditTransactions/EligibleRefunds/index.tsx
const breadCrumbsData=[{text:"Home",isLink:true,path:"/"},{isLink:false,text:"Eligible Credits For Refund"}];const CreditsEligibleForRefund=()=>{// available permissions for the properties page
const permissionSlug=(0,common/* getPermissionSlugs */.AH)(permissions/* TransactionsPermissionsEnum */.t);const{loggedInUserData}=(0,es/* useSelector */.d4)(state=>state.usersReducer);const[moduleData,setModuleData]=(0,react.useState)({loading:false,data:[]});const[credits,setCredits]=(0,react.useState)(0);const organizationModule=(0,react.useMemo)(()=>new Organization/* OrganizationModule */.I(),[]);const getModuleData=(0,react.useCallback)(async()=>{var _loggedInUserData$dat,_loggedInUserData$dat2;setModuleData({loading:true});const organizationId=loggedInUserData===null||loggedInUserData===void 0?void 0:(_loggedInUserData$dat=loggedInUserData.data)===null||_loggedInUserData$dat===void 0?void 0:(_loggedInUserData$dat2=_loggedInUserData$dat.Organization)===null||_loggedInUserData$dat2===void 0?void 0:_loggedInUserData$dat2.id;// if (loggedInUserData?.data && organizationId) {
// 	organizationModule.getEligibleCredit(organizationId).then((res) => {
// 		let totalEligibleCredits = 0;
// 		if (res.data) {
// 			res.data?.data.forEach((item: any) => {
// 				if (item.refundCredits) {
// 					totalEligibleCredits += item.refundCredits;
// 				}
// 			});
// 		}
// 		setCredits(totalEligibleCredits);
// 		setModuleData({ data: res.data?.data, loading: false });
// 	}).catch((err) => {
// 		setModuleData({ loading: false });
// 	});
// }
},[organizationModule,loggedInUserData===null||loggedInUserData===void 0?void 0:loggedInUserData.data]);const onCreditRefund=()=>{var _loggedInUserData$dat3,_loggedInUserData$dat4;const organizationId=loggedInUserData===null||loggedInUserData===void 0?void 0:(_loggedInUserData$dat3=loggedInUserData.data)===null||_loggedInUserData$dat3===void 0?void 0:(_loggedInUserData$dat4=_loggedInUserData$dat3.Organization)===null||_loggedInUserData$dat4===void 0?void 0:_loggedInUserData$dat4.id;// organizationModule.refundCredits(organizationId).then((res) => {
// 	message.success(res.data?.message);
// 	getModuleData();
// }).catch((err) => {
// 	message.error(err?.response?.data?.message);
// });
};(0,react.useEffect)(()=>{getModuleData();},[getModuleData]);return/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.A,{permissionSlug:permissionSlug,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* PageHeader */.zY,{heading:"Eligible Credits For Refund",breadCrumbData:breadCrumbsData,buttonWithoutIcon:true,buttonTooltip:credits<10?"You need at least 10 eligible credits to request for refund":null,buttonText:"Refund Credits",onButtonClick:()=>onCreditRefund(),buttonLoading:moduleData.loading,buttonDisable:credits<10?true:false}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"d-flex justify-end",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{className:"text-success",children:["Total Refundable Credits: ",credits]})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"d-flex overflow-hidden",children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"d-flex flex-column w-100",children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"overflow-auto",children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:moduleData.loading?/*#__PURE__*/(0,jsx_runtime.jsx)(Skeletons/* default */.A,{items:5,fullWidth:true}):/*#__PURE__*/(0,jsx_runtime.jsx)(TableComponent,{tableData:moduleData===null||moduleData===void 0?void 0:moduleData.data,tableLoading:moduleData.loading,emptyText:/*#__PURE__*/(0,jsx_runtime.jsx)(empty/* default */.A,{image:"https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg",imageStyle:{height:150},description:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:"No Eligible Credits For Refund Found"})})})})})})})]});};/* harmony default export */ const EligibleRefunds = (CreditsEligibleForRefund);

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

/***/ })

}]);