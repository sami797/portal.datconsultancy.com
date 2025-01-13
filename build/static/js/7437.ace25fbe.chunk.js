(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[7437],{

/***/ 95251:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Y: () => (/* binding */ LeaveRequestDrawer)
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
// EXTERNAL MODULE: ./src/Components/Atoms/index.tsx + 12 modules
var Atoms = __webpack_require__(9394);
;// ./src/Components/Organisms/Dashboard/MyServices/LeaveRequest/LeaveRequestDrawer/styles.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"drawerContainer":"styles_drawerContainer__PQZe+","attachmentsWrap":"styles_attachmentsWrap__tqP9x","attachment":"styles_attachment__+UKqi","amountWrap":"styles_amountWrap__oBO3N","priceText":"styles_priceText__gp5La","resourceWrap":"styles_resourceWrap__OLCPO","hrWrap":"styles_hrWrap__7mfSD","title":"styles_title__y8ofY","hrInputs":"styles_hrInputs__Qi6WK","dateWrap":"styles_dateWrap__HGxRV","fromDate":"styles_fromDate__JgM5e","bold":"styles_bold__5QLtR","footerWrap":"styles_footerWrap__QvWLl","buttonWrap":"styles_buttonWrap__HMwUu","financeWrap":"styles_financeWrap__ILlOW","actionsWrap":"styles_actionsWrap__3Abd7","commentWrap":"styles_commentWrap__EqUGV"});
// EXTERNAL MODULE: ./src/helpers/commonEnums.ts
var commonEnums = __webpack_require__(2360);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./src/hooks/index.ts + 5 modules
var hooks = __webpack_require__(91970);
// EXTERNAL MODULE: ./src/helpers/dateHandler.ts
var dateHandler = __webpack_require__(98933);
// EXTERNAL MODULE: ./src/Modules/LeaveRequest/index.ts
var LeaveRequest = __webpack_require__(50982);
// EXTERNAL MODULE: ./src/services/axiosInstance.ts
var axiosInstance = __webpack_require__(83365);
// EXTERNAL MODULE: ./node_modules/pdfjs-dist/build/pdf.js
var pdf = __webpack_require__(73114);
// EXTERNAL MODULE: ./node_modules/react-pdf/dist/esm/Document.js + 1 modules
var Document = __webpack_require__(39087);
// EXTERNAL MODULE: ./node_modules/react-pdf/dist/esm/Page.js + 12 modules
var Page = __webpack_require__(93852);
// EXTERNAL MODULE: ./src/services/tokenService.ts
var tokenService = __webpack_require__(92966);
// EXTERNAL MODULE: ./src/Modules/User/index.ts
var User = __webpack_require__(47645);
// EXTERNAL MODULE: ./src/helpers/common.ts
var common = __webpack_require__(88132);
// EXTERNAL MODULE: ./src/helpers/constants.ts
var constants = __webpack_require__(65944);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(59051);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/Dashboard/MyServices/LeaveRequest/LeaveRequestDrawer/index.tsx
const{Text}=typography/* default */.A;const LeaveRequestDrawer=_ref=>{var _LeaveRequestStatus$d,_data$RequestBy,_data$RequestBy2,_data$Attachments,_data$AdminActions$,_LeaveRequestStatus$d2,_data$AdminActions$2,_LeaveRequestStatus$d3,_data$AdminActions$3,_data$AdminActions$4;let{openDrawer,onClose,record,permissions,reloadTableData}=_ref;pdf.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(pdf.version,"/pdf.worker.js");const access_token=tokenService/* default */.A.getLocalAccessToken();const[actionBy,setActionBy]=(0,react.useState)();const{readLeaveRequest,leaveRequestHRApproval,leaveRequestProjectManagerApproval}=permissions;const[user,setUser]=(0,react.useState)();const[form]=es_form/* default */.A.useForm();const[isLoading,setisLoading]=(0,react.useState)(false);const module=new LeaveRequest/* LeaveRequestModule */.j();const userModule=new User/* UserModule */.U();const{data,onRefresh}=(0,hooks/* useFetchData */.Gs)({method:()=>module.getRecordById(record)});(0,react.useEffect)(()=>{if((data===null||data===void 0?void 0:data.AdminActions.length)===0&&data.status===1){setActionBy("employee");}else if((data===null||data===void 0?void 0:data.AdminActions.length)===0){setActionBy("manager");}else if(Number(data===null||data===void 0?void 0:data.AdminActions.length)===1){setActionBy("hr");}else if((data===null||data===void 0?void 0:data.AdminActions.length)===2&&data.status===6){setActionBy("rejectedByHr");}else if(Number(data===null||data===void 0?void 0:data.AdminActions.length)>=1){setActionBy("done");}if(data!==null&&data!==void 0&&data.requestById){userModule.getRecordById(data===null||data===void 0?void 0:data.requestById).then(res=>{setUser(res.data.data);});}},[data]);const onFinish=formValues=>{setisLoading(true);if(leaveRequestHRApproval||leaveRequestProjectManagerApproval||readLeaveRequest){//means employee action
if(actionBy==="employee"){module.employeeActionLeaveRequest(record).then(res=>{reloadTableData();setisLoading(false);onRefresh();form.resetFields();}).catch(err=>{message/* default */.Ay.error(err===null||err===void 0?void 0:err.message);setisLoading(false);});}//means manager action
else if(actionBy==="manager"){module.projectManagerActionLeaveRequest({comment:formValues.comment,status:formValues.status},record).then(res=>{reloadTableData();setisLoading(false);onRefresh();form.resetFields();}).catch(err=>{message/* default */.Ay.error(err===null||err===void 0?void 0:err.message);setisLoading(false);});}else if(actionBy==="hr"){module.hrActionLeaveRequest({comment:formValues.comment,status:formValues.status},record).then(res=>{reloadTableData();setisLoading(false);onRefresh();form.resetFields();}).catch(err=>{message/* default */.Ay.error(err===null||err===void 0?void 0:err.message);setisLoading(false);});}}else{message/* default */.Ay.error("You don't have permission to create this record");setisLoading(false);}};return/*#__PURE__*/(0,jsx_runtime.jsx)("section",{className:styles_module.container,children:/*#__PURE__*/(0,jsx_runtime.jsx)(drawer/* default */.A,{title:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"d-flex align-center justify-space-between",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:["LVE-",data===null||data===void 0?void 0:data.id," - (",data!==null&&data!==void 0&&data.status?(0,common/* capitalize */.ZH)((_LeaveRequestStatus$d=commonEnums/* LeaveRequestStatus */.PG[data===null||data===void 0?void 0:data.status])===null||_LeaveRequestStatus$d===void 0?void 0:_LeaveRequestStatus$d.status):"",")"]}),(data===null||data===void 0?void 0:data.status)!==commonEnums/* LeaveRequestEnum */.e4.rejected&&(data===null||data===void 0?void 0:data.status)!==commonEnums/* LeaveRequestEnum */.e4.withdrawn&&moment_default()(new Date()).isBefore(data===null||data===void 0?void 0:data.leaveFrom)?/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{type:"primary",size:"normal",fontSize:"sm",onClick:()=>{module.withdrawLeaveRequest(record).then(()=>{reloadTableData();onRefresh();form.resetFields();onClose();}).catch(err=>{message/* default */.Ay.error(err===null||err===void 0?void 0:err.message);});},children:"Withdraw Request"}):null]}),placement:"right",size:"large",width:window.innerWidth>768?"60%":"100%",onClose:onClose,open:openDrawer,children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A,{className:styles_module.form,onFinish:onFinish,form:form,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.drawerContainer,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{display:'flex',flexDirection:'column',gap:'0.5rem'},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:"Name:"}),"\xA0","".concat((data===null||data===void 0?void 0:(_data$RequestBy=data.RequestBy)===null||_data$RequestBy===void 0?void 0:_data$RequestBy.firstName)||""," ").concat((data===null||data===void 0?void 0:(_data$RequestBy2=data.RequestBy)===null||_data$RequestBy2===void 0?void 0:_data$RequestBy2.lastName)||"")]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:"Date:"}),"\xA0",(0,dateHandler/* convertDate */.ic)((data===null||data===void 0?void 0:data.addedDate)||"","MM dd,yy")]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:"Purpose:"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:'var(--font-size-normal)'},children:data===null||data===void 0?void 0:data.purpose})]}),data!==null&&data!==void 0&&(_data$Attachments=data.Attachments)!==null&&_data$Attachments!==void 0&&_data$Attachments.length?/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.attachmentsWrap,children:data===null||data===void 0?void 0:data.Attachments.map((attachment,index)=>{var _attachment$mimeType;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.attachment,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.resourceWrap,children:[attachment!==null&&attachment!==void 0&&(_attachment$mimeType=attachment.mimeType)!==null&&_attachment$mimeType!==void 0&&_attachment$mimeType.includes("pdf")?/*#__PURE__*/(0,jsx_runtime.jsx)("a",{href:"".concat(constants/* APPLICATION_RESOURCE_BASE_URL */.Ur).concat(attachment===null||attachment===void 0?void 0:attachment.file),target:"_blank",rel:"noreferrer",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Document/* default */.A,{file:"".concat(axiosInstance/* BASE_URL */.C,"resources/all/").concat(attachment.file,"?authKey=").concat(access_token)// onLoadSuccess={onDocumentLoadSuccess}
,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Page/* default */.A,{renderTextLayer:false,pageNumber:1})})}):/*#__PURE__*/(0,jsx_runtime.jsx)(es_image/* default */.A,{style:{objectFit:'cover',borderRadius:'0.25rem 0.25rem 0 0'},width:150,height:100,src:"".concat(axiosInstance/* BASE_URL */.C,"resources/all/").concat(attachment.file,"?authKey=").concat(access_token)}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{padding:'0.25rem 0.5rem',borderRadius:'0.25rem',display:'flex',flexDirection:'column'},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Text,{style:{width:125,fontSize:'var(--font-size-xs)'},strong:true,ellipsis:true,children:attachment===null||attachment===void 0?void 0:attachment.title})})]})},index);})}):null,(data===null||data===void 0?void 0:data.status)===commonEnums/* LeaveRequestEnum */.e4.not_yet_submitted?/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.hrWrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.title,children:"Employee Actions"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.hrInputs,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("b",{style:{fontSize:"var(--font-size-sm)"},children:"Leave dates"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.dateWrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.fromDate,children:(0,dateHandler/* convertDate */.ic)((data===null||data===void 0?void 0:data.leaveFrom)||"","dd MM,yy")}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.fromDate,children:["to ",(0,dateHandler/* convertDate */.ic)((data===null||data===void 0?void 0:data.leaveTo)||"","dd MM,yy")]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.bold,children:["(",(0,dateHandler/* getDifferenceInDays */.EZ)((data===null||data===void 0?void 0:data.leaveFrom)||"",(data===null||data===void 0?void 0:data.leaveTo)||"")+1," days)"]})]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.footerWrap,style:{justifyContent:'flex-end'},children:actionBy==="employee"?/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.buttonWrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{size:"normal",fontSize:"sm",onClick:onClose,type:"plain",children:"Cancel"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{type:"primary",size:"normal",fontSize:"sm",htmlType:"submit",loading:isLoading,children:"Submit Request"})]}):null})]}):null,(data===null||data===void 0?void 0:data.status)!==commonEnums/* LeaveRequestEnum */.e4.not_yet_submitted&&(data===null||data===void 0?void 0:data.status)!==commonEnums/* LeaveRequestEnum */.e4.withdrawn&&actionBy==="manager"?/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.hrWrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.title,children:"Project Manager Actions"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.hrInputs,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("b",{style:{fontSize:"var(--font-size-sm)"},children:"Leave dates"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.dateWrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.fromDate,children:(0,dateHandler/* convertDate */.ic)((data===null||data===void 0?void 0:data.leaveFrom)||"","dd MM,yy")}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.fromDate,children:["to ",(0,dateHandler/* convertDate */.ic)((data===null||data===void 0?void 0:data.leaveTo)||"","dd MM,yy")]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.bold,children:["(",(0,dateHandler/* getDifferenceInDays */.EZ)((data===null||data===void 0?void 0:data.leaveFrom)||"",(data===null||data===void 0?void 0:data.leaveTo)||"")+1," days)"]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.actionsWrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("br",{}),leaveRequestProjectManagerApproval?/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:'status',rules:[{required:true,message:"Please select a status"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_radio/* default.Group */.Ay.Group,{options:commonEnums/* ActionLeaveRequest */.XM,optionType:"button",buttonStyle:"solid"})}):"No action from Project Manager yet"]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.footerWrap,children:[leaveRequestProjectManagerApproval&&/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:'comment',className:styles_module.commentWrap,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{size:"w100",label:/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:"Comment"}),type:"textArea",placeHolder:"Enter comment"})}),!leaveRequestProjectManagerApproval&&/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.priceText,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("b",{style:{fontSize:"var(--font-size-sm)"},children:"Comment"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:data===null||data===void 0?void 0:(_data$AdminActions$=data.AdminActions[0])===null||_data$AdminActions$===void 0?void 0:_data$AdminActions$.comment})]}),leaveRequestProjectManagerApproval&&/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.buttonWrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{size:"normal",fontSize:"sm",onClick:onClose,type:"plain",children:"Cancel"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{type:"primary",size:"normal",fontSize:"sm",htmlType:"submit",loading:isLoading,children:"Save"})]})]})]}):null,actionBy==="rejectedByHr"||(data===null||data===void 0?void 0:data.status)!==commonEnums/* LeaveRequestEnum */.e4.not_yet_submitted&&(data===null||data===void 0?void 0:data.status)!==commonEnums/* LeaveRequestEnum */.e4.rejected&&(data===null||data===void 0?void 0:data.status)!==commonEnums/* LeaveRequestEnum */.e4.withdrawn&&actionBy!=="manager"?/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.hrWrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.title,children:"HR Department Actions"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.hrInputs,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("b",{style:{fontSize:"var(--font-size-sm)"},children:"Leave dates"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.dateWrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.fromDate,children:(0,dateHandler/* convertDate */.ic)((data===null||data===void 0?void 0:data.leaveFrom)||"","dd MM,yy")}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.fromDate,children:["to ",(0,dateHandler/* convertDate */.ic)((data===null||data===void 0?void 0:data.leaveTo)||"","dd MM,yy")]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.bold,children:["(",(0,dateHandler/* getDifferenceInDays */.EZ)((data===null||data===void 0?void 0:data.leaveFrom)||"",(data===null||data===void 0?void 0:data.leaveTo)||"")+1," days)"]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.actionsWrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("br",{}),actionBy==="hr"?leaveRequestHRApproval?/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:'status',rules:[{required:true,message:"Please select a status"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_radio/* default.Group */.Ay.Group,{options:commonEnums/* ActionLeaveRequest */.XM,optionType:"button",buttonStyle:"solid"})}):"No action from HR yet":(actionBy==="rejectedByHr"||actionBy==="done")&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{textTransform:'capitalize',lineHeight:'1rem',// @ts-ignore
color:(_LeaveRequestStatus$d2=commonEnums/* LeaveRequestStatus */.PG[data===null||data===void 0?void 0:(_data$AdminActions$2=data.AdminActions[1])===null||_data$AdminActions$2===void 0?void 0:_data$AdminActions$2.status])===null||_LeaveRequestStatus$d2===void 0?void 0:_LeaveRequestStatus$d2.color},children:(_LeaveRequestStatus$d3=commonEnums/* LeaveRequestStatus */.PG[data===null||data===void 0?void 0:(_data$AdminActions$3=data.AdminActions[1])===null||_data$AdminActions$3===void 0?void 0:_data$AdminActions$3.status])===null||_LeaveRequestStatus$d3===void 0?void 0:_LeaveRequestStatus$d3.status})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.footerWrap,children:[actionBy==="hr"&&leaveRequestHRApproval&&/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.buttonWrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{size:"normal",fontSize:"sm",onClick:onClose,type:"plain",children:"Cancel"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{type:"primary",size:"normal",fontSize:"sm",htmlType:"submit",loading:isLoading,children:"Save"})]}),actionBy==="hr"?leaveRequestHRApproval&&/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:'comment',className:styles_module.commentWrap,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{size:"w100",label:/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:"Comment"}),type:"textArea",placeHolder:"Enter comment"})}):actionBy==="done"&&/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.priceText,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("b",{style:{fontSize:"var(--font-size-sm)"},children:"Comment"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:data===null||data===void 0?void 0:(_data$AdminActions$4=data.AdminActions[1])===null||_data$AdminActions$4===void 0?void 0:_data$AdminActions$4.comment})]}),actionBy==="hr"&&leaveRequestHRApproval&&/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.buttonWrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{size:"normal",fontSize:"sm",onClick:onClose,type:"plain",children:"Cancel"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{type:"primary",size:"normal",fontSize:"sm",htmlType:"submit",loading:isLoading,children:"Save"})]})]})]}):null]})})})});};

/***/ }),

/***/ 51297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ LeaveRequestCard)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30377);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2557);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81541);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56272);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(62298);
/* harmony import */ var _helpers_commonEnums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2360);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68548);
/* harmony import */ var _helpers_dateHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98933);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44414);
const{Paragraph}=antd__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A;const LeaveRequestCard=props=>{var _LeaveRequestStatus$l,_LeaveRequestStatus$l2;const{leaveRequest,onClick,isFullWidth}=props;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,{hoverable:true,onClick:onClick,bodyStyle:{height:'100%'},className:"".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.card," ").concat(isFullWidth?_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.fullWidth:''),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.cardBody,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.cardBodyTop,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.cardTitle,children:["LVE-",leaveRequest.id,/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span",{style:{textTransform:'capitalize'},children:["\xA0(",_helpers_commonEnums__WEBPACK_IMPORTED_MODULE_0__/* .LeaveType */ .CI[leaveRequest.typeOfLeave],")"]})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.topRight,children:[leaveRequest._count.Attachments>0&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.file,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,{}),"\xA0",leaveRequest._count.Attachments]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.status,style:{backgroundColor:(_LeaveRequestStatus$l=_helpers_commonEnums__WEBPACK_IMPORTED_MODULE_0__/* .LeaveRequestStatus */ .PG[leaveRequest===null||leaveRequest===void 0?void 0:leaveRequest.status])===null||_LeaveRequestStatus$l===void 0?void 0:_LeaveRequestStatus$l.color},children:(_LeaveRequestStatus$l2=_helpers_commonEnums__WEBPACK_IMPORTED_MODULE_0__/* .LeaveRequestStatus */ .PG[leaveRequest.status])===null||_LeaveRequestStatus$l2===void 0?void 0:_LeaveRequestStatus$l2.status.replace("_"," ")})]})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.cardBodyMiddle,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Paragraph,{ellipsis:{rows:2},className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.purpose,children:leaveRequest.purpose}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"font-size-sm",children:["Requested by: ",leaveRequest.RequestBy.firstName+" "+leaveRequest.RequestBy.lastName]})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.cardBodyEnd,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.dateWrap,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.fromDate,children:(0,_helpers_dateHandler__WEBPACK_IMPORTED_MODULE_6__/* .convertDate */ .ic)(leaveRequest.leaveFrom,"dd M,yy")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.fromDate,children:["to ",(0,_helpers_dateHandler__WEBPACK_IMPORTED_MODULE_6__/* .convertDate */ .ic)(leaveRequest.leaveTo,"dd M,yy")]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.bold,children:["(",(0,_helpers_dateHandler__WEBPACK_IMPORTED_MODULE_6__/* .getDifferenceInDays */ .EZ)(leaveRequest.leaveFrom,leaveRequest.leaveTo)+1," days)"]})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,{title:"Requested date",className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.date,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,{}),"\xA0\xA0",(0,_helpers_dateHandler__WEBPACK_IMPORTED_MODULE_6__/* .convertDate */ .ic)(leaveRequest.addedDate,"dd M,yy")]})]})]})});};

/***/ }),

/***/ 50982:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ LeaveRequestModule)
/* harmony export */ });
/* harmony import */ var C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89379);
/* harmony import */ var _modules_Common_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21073);
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83365);
class LeaveRequestModule{constructor(){this.endPoint="leave-request";this.getAllRecords=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.get(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ .C+this.endPoint,{params:(0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({sortByField:'order',sortOrder:'asc',perPage:4},query)});};this.getOwnRecords=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.get(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ .C+this.endPoint+"/own",{params:(0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({},query)});};this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.get(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ .C+this.endPoint+"/findOne/"+id);};this.getLeavesRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.get(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ .C+this.endPoint+"/findLeavesReportOfUser/"+id);};this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.delete(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ .C+this.endPoint+"/remove/"+id);};this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.post(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ .C+this.endPoint,data,{headers:_modules_Common_config__WEBPACK_IMPORTED_MODULE_0__/* .FormDataHeader */ .Y});};/**
	 * Update LeaveRequest
	 * @param {number} id - LeaveRequest Id
	 */this.withdrawLeaveRequest=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.patch(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ .C+this.endPoint+"/withdraw/".concat(id));};/**
		 * Update Order
		 * @param {hrActionLeaveRequest} data - Order Number
		 * @param {number} id - Record Id
		 */this.employeeActionLeaveRequest=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.patch(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ .C+this.endPoint+"/submitRequest/".concat(id));};/**
		 * Update Order
		 * @param {hrActionLeaveRequest} data - Order Number
		 * @param {number} id - Record Id
		 */this.hrActionLeaveRequest=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.patch(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ .C+this.endPoint+"/hrAction/".concat(id),data);};/**
		 * Update Order
		 * @param {hrActionLeaveRequest} data - Order Number
		 * @param {number} id - Record Id
		 */this.projectManagerActionLeaveRequest=(data,id)=>{console.log(id,'id');return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.patch(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ .C+this.endPoint+"/projectManagerAction/".concat(id),data);};/**
		 * Update Order
		 * @param {financeActionLeaveRequest} data - Order Number
		 * @param {number} id - Record Id
		 */this.financeActionLeaveRequest=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.patch(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ .C+this.endPoint+"/financeAction/".concat(id),data);};}}

/***/ }),

/***/ 68548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"styles_container__+b74x","card":"styles_card__jPVVz","cardBody":"styles_cardBody__uHpln","cardBodyTop":"styles_cardBodyTop__cnyK5","topRight":"styles_topRight__gpY7u","status":"styles_status__+fK2a","file":"styles_file__8pP0k","cardTitle":"styles_cardTitle__4MP+-","cardBodyMiddle":"styles_cardBodyMiddle__Ujx6q","purpose":"styles_purpose__eyN-k","cardBodyEnd":"styles_cardBodyEnd__SD7Rm","dateWrap":"styles_dateWrap__6oP6f","fromDate":"styles_fromDate__-S8xQ","bold":"styles_bold__reoHM","date":"styles_date__qulWa","fullWidth":"styles_fullWidth__8y-75"});

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