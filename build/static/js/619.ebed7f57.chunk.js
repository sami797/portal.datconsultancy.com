"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[619],{

/***/ 87031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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

/***/ 30386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(89379);
/* harmony import */ var C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80045);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9950);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16330);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81541);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9494);
/* harmony import */ var _input_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16835);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44414);
const _excluded=["label","hint","asterisk","helperText","className"];const{TextArea}=antd__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A;const CustomTextArea=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props,ref)=>{const{label,hint,asterisk,helperText,className}=props,rest=(0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(props,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[label?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("label",{className:_input_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.labelWrap,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:label}),hint?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,{title:hint,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{})}):null,asterisk?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:_input_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.asterisk,children:"*"}):null]}):null,/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TextArea,(0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)({ref:ref},rest),{},{className:"".concat(_input_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A["inpt"]," ").concat(className)})),helperText?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("small",{className:_input_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.helperText,children:helperText}):null]});});CustomTextArea.defaultProps={autoSize:{minRows:4},placeholder:"Enter text here",asterisk:false,hint:""};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomTextArea);

/***/ }),

/***/ 99668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ FileManagement)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 1 modules
var message = __webpack_require__(92759);
// EXTERNAL MODULE: ./node_modules/antd/es/drawer/index.js + 6 modules
var drawer = __webpack_require__(73780);
// EXTERNAL MODULE: ./node_modules/antd/es/skeleton/index.js + 11 modules
var skeleton = __webpack_require__(46005);
// EXTERNAL MODULE: ./node_modules/antd/es/image/index.js + 13 modules
var es_image = __webpack_require__(9206);
// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js
var tooltip = __webpack_require__(81541);
// EXTERNAL MODULE: ./node_modules/antd/es/popconfirm/index.js + 1 modules
var popconfirm = __webpack_require__(56231);
// EXTERNAL MODULE: ./src/services/axiosInstance.ts
var axiosInstance = __webpack_require__(83365);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloudDownloadOutlined.js + 1 modules
var CloudDownloadOutlined = __webpack_require__(40841);
// EXTERNAL MODULE: ./src/Components/Atoms/CustomEmpty/index.tsx
var CustomEmpty = __webpack_require__(49758);
// EXTERNAL MODULE: ./src/Modules/Leads/index.ts
var Leads = __webpack_require__(3465);
// EXTERNAL MODULE: ./src/hooks/index.ts + 5 modules
var hooks = __webpack_require__(91970);
// EXTERNAL MODULE: ./src/helpers/constants.ts
var constants = __webpack_require__(65944);
// EXTERNAL MODULE: ./src/Components/Icons/delete.tsx
var Icons_delete = __webpack_require__(32006);
// EXTERNAL MODULE: ./src/Components/Atoms/ImageUploader/index.tsx
var ImageUploader = __webpack_require__(96747);
// EXTERNAL MODULE: ./src/services/tokenService.ts
var tokenService = __webpack_require__(92966);
;// ./src/Components/Organisms/Leads/FileManagement/styles.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"manage_media_photo":"styles_manage_media_photo__WHgwu","manage_media_photo_image":"styles_manage_media_photo_image__QXJGX","manage_media_photo_content":"styles_manage_media_photo_content__bdh47","media_photo_actions":"styles_media_photo_actions__thIPU"});
// EXTERNAL MODULE: ./src/helpers/common.ts
var common = __webpack_require__(88132);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/Leads/FileManagement/index.tsx
const FilesDrawer=props=>{var _data$Attachments,_data$Attachments2;const{open,onClose,record,permissions,onRefresh}=props;const access_token=tokenService/* default */.A.getLocalAccessToken();const[messageApi,contextHolder]=message/* default */.Ay.useMessage();const module=(0,react.useMemo)(()=>new Leads/* LeadsModule */.Q(),[]);const[preview,setPreview]=(0,react.useState)({image:false,document:false,src:""});// Fetch Data by id
const{data,loading,onRefresh:onRefreshDataById}=(0,hooks/* useConditionFetchData */.P6)({method:()=>module.getRecordById(record===null||record===void 0?void 0:record.id),condition:!!open&&!!(record!==null&&record!==void 0&&record.id)});const[fileList,setFileList]=(0,react.useState)([]);const[upload,setUpload]=(0,react.useState)({status:"normal",progress:{}});const onRemoveFile=id=>{module.removeFile(id).then(res=>{var _res$data;onRefreshDataById();onRefresh();message/* default */.Ay.success((res===null||res===void 0?void 0:(_res$data=res.data)===null||_res$data===void 0?void 0:_res$data.message)||'File removed successfully');});};/** Upload file to server */const fileUpload=async options=>{const{onSuccess,onError,file,filename}=options;const fmData=new FormData();const config={headers:{"content-type":"multipart/form-data"}};fmData.append("files[]",file);fmData.append("leadId",record===null||record===void 0?void 0:record.id.toString());setUpload({status:"active",progress:{[filename]:0}});const onUploadProgress=progressEvent=>{const{loaded,total}=progressEvent;let percent=0;if(total!==null&&total!==undefined){percent=Math.floor(loaded*100/total);}setUpload({status:"active",progress:{[filename]:percent}});};try{// if (permissions.updateLeads === true) {
await axiosInstance/* default */.A.post("leads/uploadLeadsDocuments",fmData,(0,objectSpread2/* default */.A)({onUploadProgress},config));onSuccess&&onSuccess({status:200});setUpload({status:"success",progress:{[filename]:100}});// only refresh when the last file is uploaded
setFileList([]);onRefreshDataById();//after 3 seconds, reset the upload status
setTimeout(()=>{setUpload({status:"normal",progress:{}});},3000);// } else {
//   throw new Error("You do not have permission to upload files")
// }
}catch(err){let errorMessage=(0,common/* handleError */.H4)(err);if(errorMessage==="You do not have permission to upload files"){messageApi.open({key:"permission",type:"error",duration:5,content:errorMessage});}else{messageApi.open({key:"error",type:"error",content:errorMessage});}setUpload({status:"exception",progress:{[filename]:0}});onError&&onError(new Error('Upload failed'));}};return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[contextHolder,/*#__PURE__*/(0,jsx_runtime.jsxs)(drawer/* default */.A,{title:"Attachments",placement:"right",onClose:onClose,open:open,width:window.innerWidth>768?700:"100%",bodyStyle:{padding:"0px 25px"},destroyOnClose:true,style:{zIndex:99999},children:[!loading&&(data===null||data===void 0?void 0:(_data$Attachments=data.Attachments)===null||_data$Attachments===void 0?void 0:_data$Attachments.length)===0&&/*#__PURE__*/(0,jsx_runtime.jsx)(CustomEmpty/* default */.A,{description:"No attachments found",className:"d-flex flex-column"}),loading&&/*#__PURE__*/(0,jsx_runtime.jsx)(skeleton/* default */.A,{active:true}),data===null||data===void 0?void 0:(_data$Attachments2=data.Attachments)===null||_data$Attachments2===void 0?void 0:_data$Attachments2.map((item,idx)=>{var _item$mimeType;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.manage_media_photo,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.manage_media_photo_image,children:[(_item$mimeType=item.mimeType)!==null&&_item$mimeType!==void 0&&_item$mimeType.includes('image')?/*#__PURE__*/(0,jsx_runtime.jsx)(es_image/* default */.A,{src:"".concat(constants/* PROTECTED_RESOURCE_BASE_URL */.SO).concat(item.file,"?authKey=").concat(access_token),alt:item.title,width:100,height:70,style:{borderRadius:5,objectFit:'cover'},preview:{visible:preview.image,src:preview.src,onVisibleChange:visible=>setPreview((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},preview),{},{image:visible,src:"".concat(constants/* PROTECTED_RESOURCE_BASE_URL */.SO).concat(item.file,"?authKey=").concat(access_token)}))}}):/*#__PURE__*/(0,jsx_runtime.jsx)(es_image/* default */.A,{src:"/images/doc.png",alt:"Document-".concat(idx),width:100,height:70,preview:false,style:{objectFit:'contain',cursor:'pointer'},onClick:()=>window.open("".concat(constants/* APPLICATION_RESOURCE_BASE_URL */.Ur).concat(item.file),'_blank')}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.manage_media_photo_content,children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{style:{cursor:'pointer'},className:styles_module.manage_media_photo_name_label,onClick:()=>{var _item$mimeType2;if((_item$mimeType2=item.mimeType)!==null&&_item$mimeType2!==void 0&&_item$mimeType2.includes('image')){setPreview((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},preview),{},{image:true,src:"".concat(constants/* PROTECTED_RESOURCE_BASE_URL */.SO).concat(item.file,"?authKey=").concat(access_token)}));}else{window.open("".concat(constants/* APPLICATION_RESOURCE_BASE_URL */.Ur).concat(item.file),'_blank');}},children:item.title})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.media_photo_actions,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.A,{title:"Download",children:/*#__PURE__*/(0,jsx_runtime.jsx)("a",{href:"".concat(constants/* PROTECTED_RESOURCE_BASE_URL */.SO).concat(item.file,"?authKey=").concat(access_token,"&download=true"),target:"_blank",style:{color:"var(--color-dark-sub)"},download:item.title,rel:"noreferrer",children:/*#__PURE__*/(0,jsx_runtime.jsx)(CloudDownloadOutlined/* default */.A,{style:{fontSize:22,cursor:"pointer",marginTop:5}})})}),/*#__PURE__*/(0,jsx_runtime.jsx)(popconfirm/* default */.A,{title:"Are you sure to delete this file?",onConfirm:()=>onRemoveFile(item.id),okText:"Yes",cancelText:"No",placement:"left",zIndex:99999,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Icons_delete/* DeleteIcon */.d,{cursor:'pointer',width:20})})]})]})},"".concat(item.title,"-").concat(idx));}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"mt-5",children:/*#__PURE__*/(0,jsx_runtime.jsx)(ImageUploader/* default */.A,{title:"Attachments",name:"attachments",multiple:true,fileList:fileList,customRequest:fileUpload,beforeUpload:(_file,fileList)=>{if(fileList.length>0){setFileList(fileList);return true;}return false;},onRemove:file=>{const index=fileList===null||fileList===void 0?void 0:fileList.indexOf(file);const newFileList=fileList===null||fileList===void 0?void 0:fileList.slice();newFileList===null||newFileList===void 0?void 0:newFileList.splice(index,1);setFileList(newFileList);}})})]})]});};/* harmony default export */ const FileManagement = (FilesDrawer);

/***/ }),

/***/ 39799:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57811);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80737);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73022);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98018);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44414);
const CardDropDown=props=>{const{label,children,placement}=props;const overlay=/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.dropdown,children:children});return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{trigger:['click'],dropdownRender:()=>overlay,placement:placement,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.dropdownTrigger,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{children:label}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,{})]})});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardDropDown);

/***/ }),

/***/ 2352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Drawer)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(80045);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./node_modules/antd/es/select/index.js + 30 modules
var es_select = __webpack_require__(97554);
// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 5 modules
var input = __webpack_require__(16330);
// EXTERNAL MODULE: ./node_modules/antd/es/collapse/index.js + 6 modules
var collapse = __webpack_require__(98412);
// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 18 modules
var es_form = __webpack_require__(10678);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 1 modules
var message = __webpack_require__(92759);
// EXTERNAL MODULE: ./node_modules/antd/es/space/index.js + 1 modules
var space = __webpack_require__(80737);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(48538);
// EXTERNAL MODULE: ./node_modules/antd/es/popconfirm/index.js + 1 modules
var popconfirm = __webpack_require__(56231);
// EXTERNAL MODULE: ./node_modules/antd/es/drawer/index.js + 6 modules
var es_drawer = __webpack_require__(73780);
// EXTERNAL MODULE: ./node_modules/antd/es/row/index.js
var row = __webpack_require__(87094);
// EXTERNAL MODULE: ./node_modules/antd/es/col/index.js
var col = __webpack_require__(41988);
// EXTERNAL MODULE: ./node_modules/antd/es/date-picker/index.js + 56 modules
var date_picker = __webpack_require__(4132);
// EXTERNAL MODULE: ./node_modules/antd/es/card/index.js + 3 modules
var card = __webpack_require__(2557);
// EXTERNAL MODULE: ./node_modules/antd/es/input-number/index.js + 10 modules
var input_number = __webpack_require__(40202);
// EXTERNAL MODULE: ./node_modules/antd/es/checkbox/index.js + 2 modules
var es_checkbox = __webpack_require__(52765);
// EXTERNAL MODULE: ./node_modules/antd/es/radio/index.js + 4 modules
var es_radio = __webpack_require__(17811);
// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js
var tooltip = __webpack_require__(81541);
// EXTERNAL MODULE: ./node_modules/antd/es/alert/index.js + 1 modules
var es_alert = __webpack_require__(99985);
// EXTERNAL MODULE: ./node_modules/antd/es/spin/index.js
var spin = __webpack_require__(90650);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/PlusOutlined.js
var PlusOutlined = __webpack_require__(59334);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseOutlined.js
var CloseOutlined = __webpack_require__(45908);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/EditOutlined.js
var EditOutlined = __webpack_require__(90582);
// EXTERNAL MODULE: ./src/Components/Atoms/index.tsx + 12 modules
var Atoms = __webpack_require__(9394);
// EXTERNAL MODULE: ./src/helpers/commonEnums.ts
var commonEnums = __webpack_require__(2360);
// EXTERNAL MODULE: ./src/helpers/common.ts
var common = __webpack_require__(88132);
// EXTERNAL MODULE: ./src/Modules/Quotation/index.ts
var Quotation = __webpack_require__(83480);
// EXTERNAL MODULE: ./src/Modules/Organization/index.ts
var Organization = __webpack_require__(42361);
// EXTERNAL MODULE: ./src/hooks/index.ts + 5 modules
var hooks = __webpack_require__(91970);
// EXTERNAL MODULE: ./src/Components/Atoms/PreviewFile/index.tsx
var PreviewFile = __webpack_require__(10036);
// EXTERNAL MODULE: ./src/Components/Atoms/Input/textarea.tsx
var Input_textarea = __webpack_require__(30386);
// EXTERNAL MODULE: ./src/helpers/useDebounce.ts
var useDebounce = __webpack_require__(28173);
// EXTERNAL MODULE: ./src/Modules/Project/index.ts
var Project = __webpack_require__(50167);
// EXTERNAL MODULE: ./src/Modules/Xero/index.ts
var Xero = __webpack_require__(83302);
// EXTERNAL MODULE: ./src/Components/Organisms/Quotations/status.tsx
var Quotations_status = __webpack_require__(75492);
;// ./src/Components/Organisms/Quotations/Drawer/styles.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"accordianItem":"styles_accordianItem__lLFqX","total":"styles_total__tfRQz","total_item":"styles_total_item__zlcZN","date_picker":"styles_date_picker__FR0mi","circular-select":"styles_circular-select__43i56","z_index":"styles_z_index__-NCD7","date_footer":"styles_date_footer__fl60f"});
// EXTERNAL MODULE: ./src/helpers/constants.ts
var constants = __webpack_require__(65944);
// EXTERNAL MODULE: ./src/services/tokenService.ts
var tokenService = __webpack_require__(92966);
// EXTERNAL MODULE: ./src/Modules/TaxRate/index.ts
var TaxRate = __webpack_require__(20761);
;// ./src/Components/Organisms/Quotations/Drawer/hooks.ts
/** Generates a unique quote number for the quotation */const useQuoteNumber=props=>{const{type,previewData,module,form,drawer}=props;const[quoteNumber,setQuoteNumber]=(0,react.useState)("");(0,react.useMemo)(()=>{if(type==="create"||type==="revise"){const{prepareUniqueQuoteNumber}=module;const params={revisionId:type==="revise"?previewData===null||previewData===void 0?void 0:previewData.id:undefined,leadId:drawer!==null&&drawer!==void 0&&drawer.leadId?drawer.leadId:undefined};prepareUniqueQuoteNumber(params).then(res=>{var _res$data;const data=res===null||res===void 0?void 0:(_res$data=res.data)===null||_res$data===void 0?void 0:_res$data.data;const quoteNumber=data===null||data===void 0?void 0:data.quoteNumber;setQuoteNumber(quoteNumber);form.setFieldValue("quoteNumber",quoteNumber);}).catch(err=>{const errorMessage=(0,common/* handleError */.H4)(err);message/* default */.Ay.error(errorMessage||"Something went wrong");});}},[type,previewData]);return quoteNumber;};/** Checks if the quote number already exists */const useCheckForDuplicateQuoteNumber=props=>{const{type,previewData,module,form,quoteNumber}=props;(0,react.useEffect)(()=>{if((type==="create"||type==="revise"||type==="edit")&&quoteNumber){const{checkForDuplicacy}=module;const params={quoteNumber,excludeId:type==="edit"?previewData===null||previewData===void 0?void 0:previewData.id:undefined};checkForDuplicacy(params).then(res=>{var _res$data2;const{isDuplicate}=res===null||res===void 0?void 0:(_res$data2=res.data)===null||_res$data2===void 0?void 0:_res$data2.data;if(isDuplicate){form.setFields([{name:'quoteNumber',warnings:isDuplicate?["Quote Number already exists"]:[]}]);}}).catch(err=>{const errorMessage=(0,common/* handleError */.H4)(err);message/* default */.Ay.error(errorMessage||"Something went wrong");});}},[type,previewData,quoteNumber]);};/** Pulls the data from Xero */const usePullFromXero=props=>{const{xeroModule,setPreviewData,setDrawer,setPullFromXero,pullFromXero}=props;const onPullFromXero=()=>{setPullFromXero(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{loading:true}));const{getQuotes}=xeroModule;const{xeroTenantId}=pullFromXero;// Only using tenantId to fetch all quotes
// Fetch all quotations for the tenant
getQuotes({tenantId:xeroTenantId}).then(res=>{var _res$data3;const data=res===null||res===void 0?void 0:(_res$data3=res.data)===null||_res$data3===void 0?void 0:_res$data3.data;// Ensure data is an array of quotations before proceeding
if(Array.isArray(data)){setPreviewData(data);// Set all fetched quotes in previewData
// Optionally, you can set the drawer to preview mode
setDrawer(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{type:"preview",quotes:data// Pass all fetched quotes to the drawer
}));}else{message/* default */.Ay.warning("No quotations found.");}}).catch(err=>{const errorMessage=(0,common/* handleError */.H4)(err);message/* default */.Ay.error(errorMessage||"Something went wrong");}).finally(()=>{setPullFromXero(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{loading:false}));});};return onPullFromXero;};/** Calculate the total amount of the quotation */const useCalculateTotal=props=>{const{form,setTotal,taxRateData:tData}=props;let taxRateData=tData;const calculateTotal=async()=>{const supervisionMonthlyCharge=form.getFieldValue('supervisionMonthlyCharge')||0;const milestone=form.getFieldValue('milestone');if(!taxRateData){let taxRateModule=new TaxRate/* TaxRateModule */.Q();let response=await taxRateModule.getAllRecords();taxRateData=response.data.data;}// calculate the unit total
const vatData=new Map();let totalVATAmount=0;let subtotal=0;milestone.forEach(item=>{// remove the decimal places from the quantity and keep only the whole number
const amount=Number(item===null||item===void 0?void 0:item.amount);const quantity=Math.trunc((item===null||item===void 0?void 0:item.quantity)||0);const lineTotal=amount*quantity;subtotal+=lineTotal;let taxRateId=item.taxRateId;if(taxRateId&&taxRateData&&lineTotal>0){let taxData=taxRateData.find(item=>item.id===taxRateId);if(taxData&&taxData.rate>0){let existingVat=vatData.get(taxRateId);let totalVat=existingVat?existingVat.totalVat:0;let lineTax=taxData.rate/100*lineTotal;totalVat+=lineTax;totalVATAmount+=lineTax;vatData.set(taxRateId,{title:taxData.title,vatRate:taxData.rate,totalVat});}}});const total=subtotal+totalVATAmount;setTotal({subtotal,total,vatData,supervisionMonthlyCharge});};return calculateTotal;};/** Search for projects */const useProjectSearch=props=>{const{projectModule,setProjects,debouncedProjectSearchTerm}=props;const{getRecordsInList}=projectModule;/** Make API Call to fetch the projects */const fetchProjects=function(){let{title,ids}=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};getRecordsInList({title,ids}).then(res=>{const{data}=res===null||res===void 0?void 0:res.data;setProjects(prev=>{// if the data is already present in the state, then don't add it again
const filteredData=data===null||data===void 0?void 0:data.filter(item=>{var _prev$data;return!(prev!==null&&prev!==void 0&&(_prev$data=prev.data)!==null&&_prev$data!==void 0&&_prev$data.find(prevItem=>prevItem.id===item.id));});// add the new data to the existing data
return{data:[...prev.data,...filteredData],loading:false};});}).catch(err=>{const errorMessage=(0,common/* handleError */.H4)(err);message/* default */.Ay.error(errorMessage||"Something went wrong, please try again later.");});};/** Prepare the search term and make the API call */const onProjectSearch=()=>{if(debouncedProjectSearchTerm){setProjects(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{loading:true}));fetchProjects({title:debouncedProjectSearchTerm});}};return{onProjectSearch,fetchProjects};};/** Mark the quotation as sent */const useMarkAsSent=props=>{const{permissions,module,onRefresh,successCallback}=props;const markAsSent=id=>{if((permissions===null||permissions===void 0?void 0:permissions.updateQuotation)===true){module.markAsSent(id).then(res=>{var _res$data4;message/* default */.Ay.success((res===null||res===void 0?void 0:(_res$data4=res.data)===null||_res$data4===void 0?void 0:_res$data4.message)||"Quotation marked as sent successfully");onRefresh();successCallback();}).catch(err=>{const errorMessage=(0,common/* handleError */.H4)(err);message/* default */.Ay.error(errorMessage||"Something went wrong");});}else{message/* default */.Ay.error("You don't have permission to mark quotation as sent");}};return markAsSent;};/** Submit the quotation */const useSubmitQuotation=props=>{const{permissions,module,onRefresh,successCallback,setIsLoading,previewData}=props;const onSubmitQuotation=()=>{if(!(previewData!==null&&previewData!==void 0&&previewData.id))return message/* default */.Ay.error("Quotation not found");if((permissions===null||permissions===void 0?void 0:permissions.submitQuotation)===true){const{submitQuotation}=module;submitQuotation(previewData===null||previewData===void 0?void 0:previewData.id).then(()=>{message/* default */.Ay.success("Quotation submitted successfully");onRefresh();successCallback();}).catch(err=>{const errMessage=(0,common/* handleError */.H4)(err);message/* default */.Ay.error(errMessage||"Something went wrong");}).finally(()=>{setIsLoading(false);});}else{message/* default */.Ay.error("You don't have permission to submit quotation");}};return onSubmitQuotation;};/** Used to Get Options from API */const useGetOptions=props=>{const{modules,type,leadId}=props;const{brandingThemeModule,productModule,accountModule,taxRateModule}=modules;const[options,setOptions]=(0,react.useState)({brandingThemeData:null,productData:null,accountData:null,taxRateData:null});(0,react.useEffect)(()=>{const fetchData=async()=>{try{const[taxRateResult,brandingThemeResult,productResult,accountResult]=await Promise.allSettled([taxRateModule.getAllRecords({leadId:leadId?leadId:undefined}),brandingThemeModule.getAllRecords(),productModule.getAllRecords(),accountModule.getAllRecords({leadId:leadId?leadId:undefined})]);const taxRateData=taxRateResult.status==='fulfilled'?taxRateResult.value.data.data:null;const brandingThemeData=brandingThemeResult.status==='fulfilled'?brandingThemeResult.value.data.data:null;const productData=productResult.status==='fulfilled'?productResult.value.data.data:null;const accountData=accountResult.status==='fulfilled'?accountResult.value.data.data:null;setOptions({brandingThemeData,productData,accountData,taxRateData});}catch(error){console.error(error,"Error in fetching options for quotation drawer");}};fetchData();},[brandingThemeModule,productModule,accountModule,taxRateModule]);return options;};
// EXTERNAL MODULE: ./src/helpers/options.ts
var options = __webpack_require__(59179);
// EXTERNAL MODULE: ./src/Modules/BrandingTheme/index.ts
var BrandingTheme = __webpack_require__(65450);
// EXTERNAL MODULE: ./src/Modules/Product/index.ts
var Product = __webpack_require__(80145);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(59051);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
;// ./src/Components/Organisms/Quotations/Drawer/helpers.ts
/** Date preset options for the date picker */const datePresets=[7,14,30,60,90];/** Quotation Item Columns */const quotationItemColumns=[{title:"Products",key:"title",span:3,style:{}},{title:"Title",key:"title",span:6,style:{}},{title:"Quantity",key:"quantity",span:2,style:{}},{title:"Unit Amount",key:"unitAmount",span:3,style:{}},{title:"Account",key:"account",span:4,style:{}},{title:"Tax Rate",key:"tax",span:2,style:{}},{title:"Unit Total",key:"unitTotal",span:3,style:{textAlign:"center"}},{title:"Actions",key:"actions",span:1,style:{}}];/** Initial Milestone Value for the form */const initialMilestoneValue=Array(1).fill({title:'',amount:0,requirePayment:false,quantity:1});/** Get the total amount for a milestone */const getLineTotal=(quantity,amount)=>{if(!quantity||!amount){return (0,common/* formatCurrency */.vv)(0);}return (0,common/* formatCurrency */.vv)(quantity*amount);};
// EXTERNAL MODULE: ./src/Modules/Account/index.ts
var Account = __webpack_require__(64913);
// EXTERNAL MODULE: ./src/Components/Organisms/Leads/FileManagement/index.tsx + 1 modules
var FileManagement = __webpack_require__(99668);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/Quotations/Drawer/index.tsx
const _excluded=["supervisionPaymentSchedule","type"],_excluded2=["key","name"];const{Option}=es_select/* default */.A;const{TextArea}=input/* default */.A;const{Panel}=collapse/* default */.A;const QuotationDrawer=props=>{var _previewData$Lead,_previewData$Lead$Cli,_previewData$Lead2,_previewData$Lead2$Cl,_previewData$Lead3,_previewData$Lead3$Cl,_projects$data,_previewData$Lead4,_previewData$Lead4$Su,_previewData$Quotatio;const{drawer,setDrawer,permissions,onRefresh,setNewProject}=props;const{type,quoteId,submissionById,leadId}=drawer;const access_token=tokenService/* default */.A.getLocalAccessToken();const module=(0,react.useMemo)(()=>new Quotation/* QuotationModule */.v(),[]);const orgModule=(0,react.useMemo)(()=>new Organization/* OrganizationModule */.I(),[]);const projectModule=(0,react.useMemo)(()=>new Project/* ProjectModule */.K(),[]);const xeroModule=(0,react.useMemo)(()=>new Xero/* XeroModule */.L(),[]);const brandingThemeModule=(0,react.useMemo)(()=>new BrandingTheme/* BrandingThemeModule */.P(),[]);const productModule=(0,react.useMemo)(()=>new Product/* ProductModule */.U(),[]);const accountModule=(0,react.useMemo)(()=>new Account/* AccountModule */.O(),[]);const taxRateModule=(0,react.useMemo)(()=>new TaxRate/* TaxRateModule */.Q(),[]);const[form]=es_form/* default */.A.useForm();const{data:orgData}=(0,hooks/* useFetchData */.Gs)({method:orgModule.findPublished});const[previewData,setPreviewData]=(0,react.useState)();const[isLoading,setIsLoading]=(0,react.useState)(false);// Pull from Xero states
const[pullFromXero,setPullFromXero]=(0,react.useState)({data:undefined,init:false,loading:false,quoteNumber:"",xeroTenantId:""});// Quote Number State (for tracking the quote number changes)
const[quoteNumber,setQuoteNumber]=(0,react.useState)("");// Quotation Type States
const[quotationType,setQuotationType]=(0,react.useState)(commonEnums/* QuotationTypeEnum */.eE.Auto);// Supervision Checkbox State
const[checked,setChecked]=(0,react.useState)(false);// Project Searched Result States
const[projects,setProjects]=(0,react.useState)({data:[],loading:false});// Total Amount States
const[total,setTotal]=(0,react.useState)({subtotal:0,total:0,supervisionMonthlyCharge:0});// Supervision Schedule States
const[supervisionSchedule,setSupervisionSchedule]=(0,react.useState)('End of the Month');// Project Search Term
const[projectSearchTerm,setSearchProjectTerm]=(0,react.useState)("");const debouncedProjectSearchTerm=(0,useDebounce/* useDebounce */.d)(projectSearchTerm,500);// Date Picker
const[openDate,setOpenDate]=(0,react.useState)({issueDate:false,expiryDate:false});const[xeroTenants,setXeroTenants]=(0,react.useState)();(0,react.useEffect)(()=>{if(pullFromXero.init){orgModule.getTenants().then(res=>{var _res$data;if(res.data&&(_res$data=res.data)!==null&&_res$data!==void 0&&_res$data.data){setXeroTenants(res.data.data);}}).catch(err=>{console.error("Error while fetching tenants",err===null||err===void 0?void 0:err.message);});}},[pullFromXero.init]);const onClose=()=>{const defaultDrawerValues={open:false,quoteId:undefined,leadId:undefined,submissionById:undefined};setDrawer(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),defaultDrawerValues));setPreviewData(undefined);setIsLoading(false);form.resetFields();};const successCallback=()=>{setChecked(false);onClose();};// Unique Quote Number
const QuoteNumber=useQuoteNumber({type,module,form,previewData:previewData,drawer});// Check for duplicate quote number
useCheckForDuplicateQuoteNumber({type,module,form,quoteNumber,previewData:previewData,drawer});// Pull from Xero
const onPullFromXero=usePullFromXero({xeroModule,setPreviewData,setDrawer,setPullFromXero,pullFromXero});// Calculate Total
// Project Search
const{onProjectSearch,fetchProjects}=useProjectSearch({projectModule,setProjects,debouncedProjectSearchTerm});// Mark Quotation as Sent
const markAsSent=useMarkAsSent({module,permissions,onRefresh,successCallback});// Submit Quotation
const onSubmitQuotation=useSubmitQuotation({module,permissions,onRefresh,successCallback,setIsLoading,previewData:previewData});/** Get options Data */const{brandingThemeData,productData,accountData,taxRateData}=useGetOptions({type,modules:{brandingThemeModule,productModule,accountModule,taxRateModule},leadId:drawer.leadId});const onCalculateTotal=useCalculateTotal({form,setTotal,taxRateData:taxRateData});/**This function is used to create or edit quotation
   * @param values QuotationDrawerFormType
   */const onCreateOrEditQuotation=values=>{var _values$file;setIsLoading(true);const formData=new FormData();const file=values===null||values===void 0?void 0:(_values$file=values.file)===null||_values$file===void 0?void 0:_values$file.file;if(file){formData.append("file",file);}const finalLeadId=values.leadId?values.leadId:drawer.leadId;const finalValues=(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},values),{},{leadId:finalLeadId,file:formData.get("file")});if(!(finalValues!==null&&finalValues!==void 0&&finalValues.file)&&(finalValues===null||finalValues===void 0?void 0:finalValues.type)===commonEnums/* QuotationTypeEnum */.eE.Manual){if(type==="create"||type==="revise"){message/* default */.Ay.error("Please upload quotation file");setIsLoading(false);return;}}/** This function is used to create or revise quotation */const onCreateOrRevise=props=>{const{callback,extra}=props;module===null||module===void 0?void 0:module.createRecord((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},finalValues),extra)).then(res=>{var _res$data2;const data=res===null||res===void 0?void 0:(_res$data2=res.data)===null||_res$data2===void 0?void 0:_res$data2.data;setDrawer(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{type:"preview",quoteId:data===null||data===void 0?void 0:data.id}));onRefresh();callback();}).catch(err=>{const errMessage=(0,common/* handleError */.H4)(err);message/* default */.Ay.error(errMessage||"Something went wrong");}).finally(()=>{setIsLoading(false);});};switch(type){case"create":{if((permissions===null||permissions===void 0?void 0:permissions.createQuotation)===true){onCreateOrRevise({callback:()=>message/* default */.Ay.success("Quotation created successfully")});}else{message/* default */.Ay.error("You don't have permission to create quotation");setIsLoading(false);}break;}case"edit":{if(!(previewData!==null&&previewData!==void 0&&previewData.id))return message/* default */.Ay.error("Quotation not found");if((permissions===null||permissions===void 0?void 0:permissions.updateQuotation)===true){module===null||module===void 0?void 0:module.updateRecord(finalValues,previewData===null||previewData===void 0?void 0:previewData.id).then(res=>{var _res$data3;const data=res===null||res===void 0?void 0:(_res$data3=res.data)===null||_res$data3===void 0?void 0:_res$data3.data;message/* default */.Ay.success("Quotation updated successfully");onRefresh();setDrawer(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{type:"preview",quoteId:data===null||data===void 0?void 0:data.id}));}).catch(err=>{const errMessage=(0,common/* handleError */.H4)(err);message/* default */.Ay.error(errMessage||"Something went wrong");}).finally(()=>{setIsLoading(false);});}break;}case"revise":{if(!(previewData!==null&&previewData!==void 0&&previewData.id))return message/* default */.Ay.error("Quotation not found");if((permissions===null||permissions===void 0?void 0:permissions.createQuotation)===true){onCreateOrRevise({callback:()=>message/* default */.Ay.success("Quotation revised successfully"),extra:{revisedQuotationReferenceId:previewData===null||previewData===void 0?void 0:previewData.id,leadId:previewData===null||previewData===void 0?void 0:previewData.leadId}});}else{message/* default */.Ay.error("You don't have permission to revise quotation");setIsLoading(false);}break;}default:{message/* default */.Ay.error("Something went wrong");setIsLoading(false);break;}}};const[filesDrawer,setFilesDrawer]=(0,react.useState)({open:false,record:null});(0,react.useEffect)(()=>{if(type!=="create"&&quoteId){module.getRecordById(quoteId).then(res=>{var _res$data4;const data=res===null||res===void 0?void 0:(_res$data4=res.data)===null||_res$data4===void 0?void 0:_res$data4.data;setPreviewData(data);setQuotationType(data===null||data===void 0?void 0:data.type);const projectId=data===null||data===void 0?void 0:data.projectId;if(type!=="preview"){fetchProjects({ids:[projectId]});form.setFieldValue("projectId",projectId);}if(type==="edit"||type==="revise"){var _data$Lead,_data$Lead$Submission;form.setFieldsValue((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},data),{},{submissionById:data===null||data===void 0?void 0:(_data$Lead=data.Lead)===null||_data$Lead===void 0?void 0:(_data$Lead$Submission=_data$Lead.SubmissionBy)===null||_data$Lead$Submission===void 0?void 0:_data$Lead$Submission.id,scopeOfWork:data===null||data===void 0?void 0:data.scopeOfWork,milestone:data===null||data===void 0?void 0:data.QuotationMilestone,hasSupervision:data===null||data===void 0?void 0:data.hasSupervision,supervisionMonthlyCharge:data===null||data===void 0?void 0:data.supervisionMonthlyCharge,supervisionPaymentSchedule:data===null||data===void 0?void 0:data.supervisionPaymentSchedule,paymentTerms:data===null||data===void 0?void 0:data.paymentTerms,type:data===null||data===void 0?void 0:data.type,quoteNumber:data===null||data===void 0?void 0:data.quoteNumber,expiryDate:data!==null&&data!==void 0&&data.expiryDate?moment_default()(data===null||data===void 0?void 0:data.expiryDate):undefined,issueDate:data!==null&&data!==void 0&&data.issueDate?moment_default()(data===null||data===void 0?void 0:data.issueDate):undefined}));setChecked(data===null||data===void 0?void 0:data.hasSupervision);onCalculateTotal();}});}},[quoteId,type]);(0,react.useEffect)(()=>{onProjectSearch();},[debouncedProjectSearchTerm]);/** Drawer Extra */const drawerExtra=/*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.A,{children:[(type==="create"||type==="edit"||type==="revise")&&/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[type==="create"&&/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.A,{size:"small",type:"text",onClick:()=>{setPullFromXero(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{init:!(prev!==null&&prev!==void 0&&prev.init),loading:false}));},children:!(pullFromXero!==null&&pullFromXero!==void 0&&pullFromXero.init)?"Pull from Xero":"Create Manually"}),!(pullFromXero!==null&&pullFromXero!==void 0&&pullFromXero.init)&&/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.A,{type:"primary",onClick:()=>form.submit(),loading:isLoading,children:"Preview"})]}),type==="preview"&&/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(previewData===null||previewData===void 0?void 0:previewData.status)===commonEnums/* QuotationStatus */.xP.New&&/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.A,{type:"link",style:{color:"var(--color-dark-main)"},onClick:()=>setDrawer(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{type:"edit",leadId:previewData===null||previewData===void 0?void 0:previewData.leadId})),children:"Edit"}),/*#__PURE__*/(0,jsx_runtime.jsx)(popconfirm/* default */.A,{title:/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["An email will be sent to the client. A copy of it will be sent to you as well.",/*#__PURE__*/(0,jsx_runtime.jsx)("br",{}),"Are you sure you want to submit this quotation?"]}),okText:"Yes",cancelText:"No",placement:"bottomRight",onConfirm:onSubmitQuotation,zIndex:100000,okButtonProps:{loading:isLoading},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* DropdownWithLabel */.g_,{trigger:["click"],size:"middle",type:"primary",label:"Submit Now",overlayStyle:{zIndex:10000},items:[{label:"Mark as sent",value:"1"}].map((option,index)=>{return{key:"option-".concat(index),label:option.label,onClick:()=>markAsSent(previewData===null||previewData===void 0?void 0:previewData.id)};})})})]}),((previewData===null||previewData===void 0?void 0:previewData.status)===commonEnums/* QuotationStatus */.xP.Confirmed||(previewData===null||previewData===void 0?void 0:previewData.status)===commonEnums/* QuotationStatus */.xP.Rejected)&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:commonEnums/* QuotationStatus */.xP[previewData===null||previewData===void 0?void 0:previewData.status]}),(previewData===null||previewData===void 0?void 0:previewData.status)===commonEnums/* QuotationStatus */.xP.Sent&&/*#__PURE__*/(0,jsx_runtime.jsx)(Quotations_status/* default */.A,{item:previewData,setDrawer:setDrawer,onRefresh:onRefresh,permissions:permissions,setNewProject:setNewProject})]})]});return/*#__PURE__*/(0,jsx_runtime.jsxs)(es_drawer/* default */.A,{width:window.innerWidth>1400?1400:"100%",onClose:onClose,open:drawer.open,destroyOnClose:true,zIndex:10000,title:/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[type==="create"&&"Create Quotation",type==="edit"&&"Editing Quotation of ".concat((previewData===null||previewData===void 0?void 0:(_previewData$Lead=previewData.Lead)===null||_previewData$Lead===void 0?void 0:(_previewData$Lead$Cli=_previewData$Lead.Client)===null||_previewData$Lead$Cli===void 0?void 0:_previewData$Lead$Cli.name)||""," - ").concat((previewData===null||previewData===void 0?void 0:previewData.quoteNumber)||""),type==="preview"&&"Previewing Quotation of ".concat((previewData===null||previewData===void 0?void 0:(_previewData$Lead2=previewData.Lead)===null||_previewData$Lead2===void 0?void 0:(_previewData$Lead2$Cl=_previewData$Lead2.Client)===null||_previewData$Lead2$Cl===void 0?void 0:_previewData$Lead2$Cl.name)||""," - ").concat((previewData===null||previewData===void 0?void 0:previewData.quoteNumber)||""),type==="revise"&&"Revising Quotation of ".concat((previewData===null||previewData===void 0?void 0:(_previewData$Lead3=previewData.Lead)===null||_previewData$Lead3===void 0?void 0:(_previewData$Lead3$Cl=_previewData$Lead3.Client)===null||_previewData$Lead3$Cl===void 0?void 0:_previewData$Lead3$Cl.name)||""," - ").concat((previewData===null||previewData===void 0?void 0:previewData.quoteNumber)||"")]}),bodyStyle:{padding:type==="create"||type==="edit"||type==="revise"?25:0,paddingTop:0},extra:drawerExtra,children:[type==="create"||type==="edit"||type==="revise"?/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:!(pullFromXero!==null&&pullFromXero!==void 0&&pullFromXero.init)?/*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.A,{form:form,onFinish:values=>{const{supervisionPaymentSchedule:_supervisionPaymentSchedule,type}=values,rest=(0,objectWithoutProperties/* default */.A)(values,_excluded);const supervisionPaymentSchedule=checked?_supervisionPaymentSchedule||commonEnums/* SupervisionPaymentSchedule */.ve['End of the Month']:undefined;const finalValues=(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},rest),{},{type:type||commonEnums/* QuotationTypeEnum */.eE.Auto,hasSupervision:checked,supervisionPaymentSchedule});onCreateOrEditQuotation(finalValues);},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.A,{gutter:[5,5],children:[/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.A,{span:window.innerWidth>1400&&!(previewData!==null&&previewData!==void 0&&previewData.leadId||leadId)?8:12,children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"quoteNumber",initialValue:QuoteNumber,style:{marginBottom:0},rules:[{required:true,message:'Please enter quotation number!'}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{label:"Quote Number",asterisk:true,placeHolder:"Quote Number",size:"w100",style:{marginTop:1},onChange:e=>{var _e$target;const value=e===null||e===void 0?void 0:(_e$target=e.target)===null||_e$target===void 0?void 0:_e$target.value;setQuoteNumber(value);}})})}),!(previewData!==null&&previewData!==void 0&&previewData.leadId||leadId)&&/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.A,{span:window.innerWidth>1400?8:12,children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"leadId",style:{marginBottom:0},rules:[{required:true,message:"Please select a project"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* SelectWithSearch */.fd,{label:"Project",loading:projects===null||projects===void 0?void 0:projects.loading,onSearch:value=>setSearchProjectTerm(value),options:projects===null||projects===void 0?void 0:(_projects$data=projects.data)===null||_projects$data===void 0?void 0:_projects$data.map(item=>({label:item.title,value:item.leadId}))})})}),/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.A,{span:window.innerWidth>1400&&!(previewData!==null&&previewData!==void 0&&previewData.leadId||leadId)?8:12,children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"brandingThemeId",style:{marginBottom:0},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomSelect */.Ae,{label:"Branding Theme",placeholder:"Select Branding Theme",options:brandingThemeData===null||brandingThemeData===void 0?void 0:brandingThemeData.map(item=>({label:item.title,value:item.id})),onSelect:value=>{const brandingTheme=brandingThemeData===null||brandingThemeData===void 0?void 0:brandingThemeData.find(item=>item.id===value);form.setFieldsValue({paymentTerms:brandingTheme===null||brandingTheme===void 0?void 0:brandingTheme.paymentTerms});}})})})]})}),/*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.A,{gutter:[5,5],children:[/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.A,{span:window.innerWidth>1400?8:12,children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"submissionById",style:{marginBottom:0},initialValue:type==="create"?submissionById:previewData===null||previewData===void 0?void 0:(_previewData$Lead4=previewData.Lead)===null||_previewData$Lead4===void 0?void 0:(_previewData$Lead4$Su=_previewData$Lead4.SubmissionBy)===null||_previewData$Lead4$Su===void 0?void 0:_previewData$Lead4$Su.id,rules:[{required:true,message:'Please select submission by!'}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomSelect */.Ae,{label:"Submission By",asterisk:true,placeholder:"Select Submission By",options:orgData===null||orgData===void 0?void 0:orgData.map(org=>{return{value:(org===null||org===void 0?void 0:org.id)||'',label:org===null||org===void 0?void 0:org.name};})})})}),/*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.A,{span:window.innerWidth>1400?8:12,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("label",{className:"font-size-sm color-dark-main",children:"Issue Date"}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"issueDate",initialValue:moment_default()(),style:{marginBottom:0},children:/*#__PURE__*/(0,jsx_runtime.jsx)(date_picker/* default */.A,{placeholder:"Issue Date",className:styles_module.date_picker,popupClassName:styles_module.z_index,open:openDate.issueDate,showToday:false,onOpenChange:status=>setOpenDate(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{issueDate:status})),renderExtraFooter:()=>/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.date_footer,children:datePresets.map(days=>/*#__PURE__*/(0,jsx_runtime.jsxs)(es_button/* default */.A,{type:"ghost",size:"small",onClick:()=>{const date=moment_default()().subtract(days,'days');form.setFieldsValue({issueDate:date});setOpenDate(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{issueDate:false}));},children:[days," days ago"]},days))})})})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.A,{span:window.innerWidth>1400?8:12,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("label",{className:"font-size-sm color-dark-main",children:"Expiry Date"}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"expiryDate",initialValue:moment_default()().add(14,'days'),style:{marginBottom:5},children:/*#__PURE__*/(0,jsx_runtime.jsx)(date_picker/* default */.A,{placeholder:"Expiry Date",className:styles_module.date_picker,popupClassName:styles_module.z_index,open:openDate.expiryDate,showToday:false,onOpenChange:status=>setOpenDate(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{expiryDate:status})),renderExtraFooter:()=>/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.date_footer,children:datePresets.map(days=>/*#__PURE__*/(0,jsx_runtime.jsxs)(es_button/* default */.A,{type:"ghost",size:"small",onClick:()=>{const date=moment_default()().add(days,'days');form.setFieldsValue({expiryDate:date});setOpenDate(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{expiryDate:false}));},children:["In ",days," days"]},days))})})})]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"scopeOfWork",rules:[{required:true,message:'Please enter scope of work!'}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Input_textarea/* default */.A,{label:"Scope of Work",asterisk:true,autoSize:{minRows:3,maxRows:10},placeholder:"Scope of Work"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.List,{name:"milestone",initialValue:initialMilestoneValue,children:(fields,_ref)=>{let{add,remove}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsxs)(card/* default */.A,{size:"small",className:"mb-2 w-100",headStyle:{padding:"0px 0.5rem",margin:0,backgroundColor:"var(--color-light"},bodyStyle:{overflowX:"auto",overflowY:"hidden"},title:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"d-flex justify-space-between align-center w-100",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",weight:"semi",children:"Quotation Items"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{className:"font-weight-semi font-size-sm color-dark-main cursor-pointer",onClick:()=>add(),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(PlusOutlined/* default */.A,{})," Add More"]})]}),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(row/* default */.A,{gutter:[5,5],style:{minWidth:1400,overflowX:"auto",overflowY:"hidden"},children:quotationItemColumns.map((item,index)=>/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.A,{span:item.span,style:item.style,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"normal",children:item.title})},"quotationItem-".concat(index)))}),fields.map(_ref2=>{let{key,name}=_ref2,restField=(0,objectWithoutProperties/* default */.A)(_ref2,_excluded2);return/*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.A,{gutter:[5,5],style:{minWidth:1400,overflowX:"auto",overflowY:"hidden"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.A,{span:3,children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},restField),{},{name:[name,"productId"],initialValue:undefined,style:{width:"100%",marginBottom:0,marginTop:name===0?0:10},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomSelect */.Ae,{style:{width:"100%"},options:productData===null||productData===void 0?void 0:productData.map(item=>({label:"".concat(item.productCode," - ").concat(item.title),value:item.id})),placeholder:"Select Product",onSelect:value=>{const product=productData===null||productData===void 0?void 0:productData.find(item=>item.id===value);const milestoneData=form.getFieldValue("milestone");const milestone=milestoneData[name];if(product){milestone.amount=product.unitPrice;milestone.taxRateId=product.taxRateId;milestone.accountId=product.accountId;milestone.title=product.description;milestone.quantity=product.quantity||1;}form.setFieldsValue({milestone:milestoneData});onCalculateTotal();}})}))}),/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.A,{span:6,children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},restField),{},{name:[name,"title"],initialValue:"",rules:[{required:true,message:"Missing item title"}],style:{width:"100%",marginBottom:0,marginTop:name===0?0:10},children:/*#__PURE__*/(0,jsx_runtime.jsx)(TextArea,{placeholder:"Title",className:styles_module.gen_border,autoSize:{minRows:1}})}))}),/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.A,{span:2,children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},restField),{},{name:[name,"quantity"],initialValue:1,rules:[{required:true,message:"Missing item quantity"},{pattern:/^[0-9]+$/,message:"Only whole numbers are allowed"}],style:{width:"100%",marginBottom:0,marginTop:name===0?0:10},children:/*#__PURE__*/(0,jsx_runtime.jsx)(input_number/* default */.A,{placeholder:"Quantity",style:{width:"100%"},className:styles_module.gen_border,onChange:onCalculateTotal,parser:value=>value&&value.replace(/\$\s?|(,*)/g,'')||'',step:1,precision:0})}))}),/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.A,{span:3,children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},restField),{},{name:[name,"amount"],initialValue:"",rules:[{required:true,message:"Missing item amount"}],style:{width:"100%",marginBottom:0,marginTop:name===0?0:10},children:/*#__PURE__*/(0,jsx_runtime.jsx)(input_number/* default */.A,{placeholder:"Unit Amount",style:{width:"100%"},className:styles_module.gen_border,onChange:onCalculateTotal})}))}),/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.A,{span:4,children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},restField),{},{name:[name,"accountId"],initialValue:undefined,style:{width:"100%",marginBottom:0,marginTop:name===0?0:10},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomSelect */.Ae,{options:accountData===null||accountData===void 0?void 0:accountData.map(item=>({label:"".concat(item.accountCode," - ").concat(item.title),value:item.id})),placeholder:"Select Account"})}))}),/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.A,{span:2,children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},restField),{},{name:[name,"taxRateId"],initialValue:undefined,style:{width:"100%",marginBottom:0,marginTop:name===0?0:10},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomSelect */.Ae// style={{ width: 130 }} 
,{placeholder:"Select Tax Rate",dropdownStyle:{zIndex:10000},options:taxRateData===null||taxRateData===void 0?void 0:taxRateData.map(item=>({label:item.title,value:item.id})),onSelect:onCalculateTotal})}))}),/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.A,{span:3,style:{display:"flex",justifyContent:"center",marginTop:name===0?10:20},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",weight:"semi",children:"".concat(getLineTotal(form.getFieldValue(["milestone",name,"quantity"]),form.getFieldValue(["milestone",name,"amount"])))})}),/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.A,{span:1,children:name!==0&&/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{type:"danger",size:"normal",fontSize:"sm",disabled:name===0?true:false,onClick:()=>{remove(name);onCalculateTotal();},style:{marginTop:name===0?0:10},children:/*#__PURE__*/(0,jsx_runtime.jsx)(CloseOutlined/* default */.A,{})})})]},key);})]});}}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_checkbox/* default */.A,{checked:checked,className:"mb-2",onChange:e=>{if(e.target.checked===false){// remove the supervisionMonthlyCharge from the total amount if the checkbox is unchecked
form.setFieldsValue({supervisionMonthlyCharge:0});onCalculateTotal();}setChecked(e.target.checked);},children:"Has Supervision"}),checked&&/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"supervisionMonthlyCharge",rules:[{required:true,message:'Please input monthly supervision amount!'}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(input_number/* default */.A,{placeholder:"Enter monthly supervision amount in AED",style:{width:"100%"},onChange:onCalculateTotal,addonAfter:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"supervisionPaymentSchedule",noStyle:true,initialValue:commonEnums/* SupervisionPaymentSchedule */.ve['End of the Month'],children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.A,{style:{width:170},dropdownStyle:{zIndex:10000},className:styles_module.gen_select,onSelect:value=>{// use the value to get the key of the SupervisionPaymentSchedule
const key=Object.keys(commonEnums/* SupervisionPaymentSchedule */.ve).find(key=>{return commonEnums/* SupervisionPaymentSchedule */.ve[key]===value;});if(key){setSupervisionSchedule(key);}},children:options/* PaymentScheduleOptions */.yB.map(option=>/*#__PURE__*/(0,jsx_runtime.jsx)(Option,{value:Number(option.value),children:option.label},"paymentSchedule-".concat(option.value)))})})})})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)(card/* default */.A,{className:styles_module.total,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.total_item,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",children:"Subtotal"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",children:(0,common/* formatCurrency */.vv)(total.subtotal)})]}),total.vatData&&Array.from(total.vatData).map(_ref3=>{let[keys,ele]=_ref3;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.total_item,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",children:"".concat(ele.title," (").concat(ele.vatRate,"%)")}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",children:(0,common/* formatCurrency */.vv)(ele.totalVat)})]},"VAT_DATA".concat(keys));}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.total_item,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",weight:"bolder",children:"Total"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",weight:"bolder",children:(0,common/* formatCurrency */.vv)(total.total)})]}),checked&&/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.total_item,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",children:"Supervision Charge - ".concat(supervisionSchedule)}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",className:"ml-3",children:(0,common/* formatCurrency */.vv)(total.supervisionMonthlyCharge)})]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"paymentTerms",rules:[{required:true,message:'Please enter payment terms!'}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Input_textarea/* default */.A,{placeholder:"Payment Terms",asterisk:true,label:"Payment Terms",autoSize:{minRows:3,maxRows:15}})})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"d-flex justify-space-between",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"type",initialValue:quotationType,label:"Quotation Type",style:{marginBottom:5,marginTop:20},children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_radio/* default.Group */.Ay.Group,{name:"type",buttonStyle:"solid",onChange:e=>setQuotationType(e.target.value),children:options/* QuotationTypeOptions */.jD.map(option=>/*#__PURE__*/(0,jsx_runtime.jsx)(es_radio/* default.Button */.Ay.Button,{value:Number(option.value),children:option.label},"quotationType-".concat(option.value)))})}),previewData!==null&&previewData!==void 0&&previewData.leadId||leadId?/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"d-flex align-center mt-5 mb-5",onClick:()=>{setFilesDrawer({open:true,record:{id:(previewData===null||previewData===void 0?void 0:previewData.leadId)||leadId}});},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"cursor-pointer mb-0",children:"Attatchments"}),/*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.A,{title:"Manage Attachments",children:/*#__PURE__*/(0,jsx_runtime.jsx)(EditOutlined/* default */.A,{className:"ml-2 cursor-pointer"})})]}):/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{})]}),quotationType===commonEnums/* QuotationTypeEnum */.eE.Auto&&/*#__PURE__*/(0,jsx_runtime.jsx)(es_alert/* default */.A,{message:"System will automatically generate quotation based on the above information",type:"warning",style:{marginTop:15}}),quotationType===commonEnums/* QuotationTypeEnum */.eE.Manual&&/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* ImageUploader */.GA,{name:"file",label:"Drag and drop quotation file",defaultFileList:type==="edit"&&(previewData===null||previewData===void 0?void 0:previewData.file)&&[{uid:"".concat(previewData===null||previewData===void 0?void 0:previewData.id),name:previewData===null||previewData===void 0?void 0:previewData.file,status:"done",url:"".concat(constants/* PROTECTED_RESOURCE_BASE_URL */.SO).concat(previewData===null||previewData===void 0?void 0:previewData.file,"?authKey=").concat(access_token)}]||[]})]}):/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{display:'flex',flexWrap:"nowrap",gap:"10px"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.A,{width:"40%",placeholder:"Enter Quotation Number",value:pullFromXero===null||pullFromXero===void 0?void 0:pullFromXero.quoteNumber,onChange:e=>setPullFromXero(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{quoteNumber:e.target.value}))}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.A,{style:{width:"40%"},dropdownStyle:{zIndex:9999999},placeholder:"Choose XERO Tenant connection",onChange:value=>setPullFromXero(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{xeroTenantId:value})),options:xeroTenants===null||xeroTenants===void 0?void 0:xeroTenants.map(ele=>{return{label:ele.tenantName,value:ele.tenantId};})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.A,{type:"primary",style:{width:100},loading:pullFromXero===null||pullFromXero===void 0?void 0:pullFromXero.loading,onClick:onPullFromXero,children:"Pull"})]}),(pullFromXero===null||pullFromXero===void 0?void 0:pullFromXero.loading)&&/*#__PURE__*/(0,jsx_runtime.jsx)(spin/* default */.A,{tip:"Please wait while we are pulling the quotation...",size:"large",style:{height:"80vh"},className:"w-100 d-flex justify-center align-center font-size-lg"})]})}):/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:previewData?/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(collapse/* default */.A,{expandIconPosition:"end",style:{margin:"0px 0.5rem 1rem 0.5rem"},children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Panel,{header:"Details",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",className:"ml-2 mt-2",weight:"bold",children:"Scope of Work"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"mx-2 color-dark-sub ".concat(styles_module.accordianItem),dangerouslySetInnerHTML:{__html:previewData===null||previewData===void 0?void 0:previewData.scopeOfWork}}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",className:"ml-2 mt-2",weight:"bold",children:"Quotation Items"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"color-dark-sub",children:/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{className:"mb-0",children:previewData===null||previewData===void 0?void 0:(_previewData$Quotatio=previewData.QuotationMilestone)===null||_previewData$Quotatio===void 0?void 0:_previewData$Quotatio.map((milestone,index)=>{var _milestone$amount;return/*#__PURE__*/(0,jsx_runtime.jsxs)("li",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"font-weight-normal",children:milestone===null||milestone===void 0?void 0:milestone.title}),/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{className:"ml-2",children:["- ",milestone===null||milestone===void 0?void 0:(_milestone$amount=milestone.amount)===null||_milestone$amount===void 0?void 0:_milestone$amount.toLocaleString()," AED"]})]},"milestone-".concat(index));})})})]},"scopeOfWork")}),/*#__PURE__*/(0,jsx_runtime.jsx)(PreviewFile/* default */.A,{file:previewData===null||previewData===void 0?void 0:previewData.file})]}):/*#__PURE__*/(0,jsx_runtime.jsx)(spin/* default */.A,{tip:"Please wait while we are preparing the quotation...",size:"large",style:{gap:"1rem"},className:"w-100 h-100 d-flex justify-center align-center font-size-lg"})}),filesDrawer.open&&/*#__PURE__*/(0,jsx_runtime.jsx)(FileManagement/* default */.A,{open:filesDrawer.open,record:filesDrawer.record,permissions:permissions,onClose:()=>setFilesDrawer({open:false,record:null}),onRefresh:()=>{// onUpdate({ perPage: meta?.perPage || 10, page: meta?.page || 1 })
// // refresh the status counts
// onRefreshStatusCount();
}})]});};/* harmony default export */ const Drawer = (QuotationDrawer);

/***/ }),

/***/ 88374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(89379);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9950);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4132);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(10678);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(92759);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(32645);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(17811);
/* harmony import */ var _atoms_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58516);
/* harmony import */ var _atoms_Select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39590);
/* harmony import */ var _modules_Organization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42361);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91970);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8313);
/* harmony import */ var _atoms_Input_textarea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30386);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59051);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modules_Quotation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(83480);
/* harmony import */ var _helpers_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(88132);
/* harmony import */ var _modules_ProjectType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(12975);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(44414);
const{RangePicker}=antd__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A;const deadlineOptions=[{label:'7 days',value:"7_days"},{label:'15 days',value:"15_days"},{label:'30 days',value:"30_days"},{label:'45 days',value:"45_days"},{label:'90 days',value:"90_days"},{label:'Custom',value:"custom"}];/* Create Project Modal */const NewProject=props=>{const{setNewProject,newProject,onRefresh,permissions}=props;const{updateQuotation}=permissions;const[form]=antd__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A.useForm();const orgModule=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>new _modules_Organization__WEBPACK_IMPORTED_MODULE_3__/* .OrganizationModule */ .I(),[]);const module=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>new _modules_Quotation__WEBPACK_IMPORTED_MODULE_8__/* .QuotationModule */ .v(),[]);const projectTypeModule=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>new _modules_ProjectType__WEBPACK_IMPORTED_MODULE_10__/* .ProjectTypeModule */ .g(),[]);const[deadline,setDeadline]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();const[deadlineDates,setDeadlineDates]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({startDate:"",endDate:""});const{data:orgData}=(0,hooks__WEBPACK_IMPORTED_MODULE_4__/* .useConditionFetchData */ .P6)({method:orgModule.findPublished,condition:newProject===null||newProject===void 0?void 0:newProject.isOpen});const{data:projectTypeData}=(0,hooks__WEBPACK_IMPORTED_MODULE_4__/* .useConditionFetchData */ .P6)({method:projectTypeModule.getPublishRecords,condition:newProject===null||newProject===void 0?void 0:newProject.isOpen,initialQuery:{perPage:100}});const onFinish=values=>{setNewProject(prev=>(0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)({},prev),{},{loading:true}));const date=new Date();let startDate=moment__WEBPACK_IMPORTED_MODULE_7___default()(date).format("YYYY-MM-DD");let endDate="";switch(values.deadlineValue){case"7_days":{endDate=moment__WEBPACK_IMPORTED_MODULE_7___default()(date).add(7,"days").format("YYYY-MM-DD");break;}case"15_days":{endDate=moment__WEBPACK_IMPORTED_MODULE_7___default()(date).add(15,"days").format("YYYY-MM-DD");break;}case"30_days":{endDate=moment__WEBPACK_IMPORTED_MODULE_7___default()(date).add(30,"days").format("YYYY-MM-DD");break;}case"45_days":{endDate=moment__WEBPACK_IMPORTED_MODULE_7___default()(date).add(45,"days").format("YYYY-MM-DD");break;}case"90_days":{endDate=moment__WEBPACK_IMPORTED_MODULE_7___default()(date).add(90,"days").format("YYYY-MM-DD");break;}case"custom":{startDate=deadlineDates.startDate;endDate=deadlineDates.endDate;}}delete values.deadlineValue;delete values.rangePicker;const finalValues=(0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)({},values),{},{quoteId:newProject===null||newProject===void 0?void 0:newProject.quoteId,startDate,endDate});if(updateQuotation===true){module.autoCreateFromApprovedQuotation(finalValues).then(res=>{var _res$data;antd__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Ay.success((res===null||res===void 0?void 0:(_res$data=res.data)===null||_res$data===void 0?void 0:_res$data.message)||"Project created successfully");onRefresh();setNewProject(prev=>(0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)({},prev),{},{isOpen:false}));}).catch(err=>{const errMessage=(0,_helpers_common__WEBPACK_IMPORTED_MODULE_9__/* .handleError */ .H4)(err);antd__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Ay.error(errMessage||"Something went wrong");}).finally(()=>{setNewProject(prev=>(0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)({},prev),{},{loading:false}));});}else{antd__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Ay.error("You don't have permission to create project, please contact your admin");}};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(antd__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A,{title:"Create Project",open:newProject===null||newProject===void 0?void 0:newProject.isOpen,okText:"Create",cancelText:"Cancel",destroyOnClose:true,okButtonProps:{loading:newProject===null||newProject===void 0?void 0:newProject.loading},onOk:()=>form.submit(),zIndex:10000,onCancel:()=>{setNewProject({isOpen:false,quoteId:0,loading:false,submissionById:0,projectTypeId:0});}// Prevent modal from opening the drawer when clicked inside modal
,wrapProps:{onClick:e=>e.stopPropagation()},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A,{form:form,onFinish:onFinish,name:"create-project-form",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(antd__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A.Item,{name:"title",rules:[{required:true,message:'Please input project title!'}],children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_atoms_Input__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{type:"text",placeHolder:"Enter project title",label:"Project Title",size:"w100",asterisk:true,autoSize:{minRows:2,maxRows:6}})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(antd__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A.Item,{name:"submissionById",initialValue:(newProject===null||newProject===void 0?void 0:newProject.submissionById)||undefined,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_atoms_Select__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{disabled:newProject!==null&&newProject!==void 0&&newProject.submissionById?true:false,label:"Submission By",options:orgData===null||orgData===void 0?void 0:orgData.map(item=>({label:item.name,value:item.id}))})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(antd__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A.Item,{name:"projectTypeId",initialValue:(newProject===null||newProject===void 0?void 0:newProject.projectTypeId)||undefined,rules:[{required:true,message:"Please select project type"}],children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_atoms_Select__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{label:"Project Type",asterisk:true,placeholder:"Select Project Type",options:projectTypeData===null||projectTypeData===void 0?void 0:projectTypeData.map(item=>{return{value:item.id,label:item.title};})})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("label",{className:"font-size-sm",children:["Deadline  ",/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span",{className:"color-red-yp",children:"*"})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div",{style:{flexDirection:'column',fontSize:'var(--font-size-sm)',gap:0},children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(antd__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A.Item,{name:"deadlineValue",rules:[{required:true,message:"Please select deadline"}],children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(antd__WEBPACK_IMPORTED_MODULE_17__/* ["default"].Group */ .Ay.Group,{optionType:"button",onChange:_ref=>{let{target}=_ref;return setDeadline(target.value);},children:deadlineOptions.map((item,index)=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(antd__WEBPACK_IMPORTED_MODULE_17__/* ["default"].Button */ .Ay.Button,{value:item.value,children:item.label},index))})}),deadline==="custom"&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(antd__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A.Item,{name:"rangePicker",rules:[{required:true,message:"Please select deadline"}],children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(RangePicker,{onChange:date=>{if((date===null||date===void 0?void 0:date.length)===2){var _date$,_date$2;setDeadlineDates({startDate:((_date$=date[0])===null||_date$===void 0?void 0:_date$.format("YYYY-MM-DD"))||"",endDate:((_date$2=date[1])===null||_date$2===void 0?void 0:_date$2.format("YYYY-MM-DD"))||""});}},dropdownClassName:_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.date_picker_dropdown})})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(antd__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A.Item,{name:"instructions",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_atoms_Input_textarea__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{placeholder:"Enter instructions",label:"Instructions",autoSize:{minRows:2,maxRows:6}})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(antd__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A.Item,{name:"xeroReference",help:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("small",{className:"color-yellow-dark",children:"CAUTION: Do not add XERO reference if you are not sure about it."}),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_atoms_Input__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{type:"text",placeHolder:"Enter Project Xero Reference",label:"Project Xero Reference",size:"w100"})})]})});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewProject);

/***/ }),

/***/ 75492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(89379);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9950);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92759);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56231);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(48538);
/* harmony import */ var _helpers_commonEnums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2360);
/* harmony import */ var _helpers_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88132);
/* harmony import */ var _modules_Quotation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83480);
/* harmony import */ var _atoms___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9394);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44414);
const QuotationStatusComp=props=>{const{item,onRefresh,permissions,setDrawer,setNewProject}=props;const{updateQuotation}=permissions;const module=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>new _modules_Quotation__WEBPACK_IMPORTED_MODULE_3__/* .QuotationModule */ .v(),[]);/** This function is used to create project from approved quotation
   * @param values The values to be passed to the api
   * project and `existing` will link the quotation to an existing project
   */const onCreateProjectFromQuotation=values=>{if(updateQuotation===true){module.autoCreateFromApprovedQuotation(values).then(()=>{antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay.success("Quotation linked to project successfully");onRefresh();}).catch(err=>{const errMessage=(0,_helpers_common__WEBPACK_IMPORTED_MODULE_2__/* .handleError */ .H4)(err);antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay.error(errMessage||"Something went wrong");});}else{antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay.error("You don't have permission to link quotation to project, please contact your administrator");}};const onChangeQuotationStatus=(id,status)=>{if(updateQuotation===true){module.changeStatus(id,status).then(res=>{var _res$data;antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay.success((res===null||res===void 0?void 0:(_res$data=res.data)===null||_res$data===void 0?void 0:_res$data.message)||"Quotation status updated successfully");onRefresh();}).catch(err=>{const errorMessage=(0,_helpers_common__WEBPACK_IMPORTED_MODULE_2__/* .handleError */ .H4)(err);antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay.error(errorMessage||"Something went wrong");});}else{antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay.error("You don't have permission to update quotation status");}};/** This function is used to mark quotation as sent */const markAsSent=id=>{if(updateQuotation===true){module.markAsSent(id).then(res=>{var _res$data2;antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay.success((res===null||res===void 0?void 0:(_res$data2=res.data)===null||_res$data2===void 0?void 0:_res$data2.message)||"Quotation marked as sent successfully");onRefresh();}).catch(err=>{const errorMessage=(0,_helpers_common__WEBPACK_IMPORTED_MODULE_2__/* .handleError */ .H4)(err);antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay.error(errorMessage||"Something went wrong");});}else{antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay.error("You don't have permission to mark quotation as sent");}};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"d-flex flex-column align-center font-size-sm color-dark-800",children:[(item===null||item===void 0?void 0:item.status)!==_helpers_commonEnums__WEBPACK_IMPORTED_MODULE_1__/* .QuotationStatus */ .xP['New']&&(item===null||item===void 0?void 0:item.status)!==_helpers_commonEnums__WEBPACK_IMPORTED_MODULE_1__/* .QuotationStatus */ .xP['Sent']&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{children:_helpers_commonEnums__WEBPACK_IMPORTED_MODULE_1__/* .QuotationStatus */ .xP[item===null||item===void 0?void 0:item.status]}),(item===null||item===void 0?void 0:item.status)===_helpers_commonEnums__WEBPACK_IMPORTED_MODULE_1__/* .QuotationStatus */ .xP['New']&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_atoms___WEBPACK_IMPORTED_MODULE_4__/* .DropdownWithLabel */ .g_,{trigger:["click"],size:"small",type:"ghost",label:"Submit Now",onClick:e=>{e.stopPropagation();setDrawer(prev=>(0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)({},prev),{},{open:true,quoteId:item===null||item===void 0?void 0:item.id,type:"preview",quotation:item}));},items:[{label:"Mark as sent",value:"markAsSent"}].map((option,index)=>{return{key:"option-".concat(index),label:option.label,onClick:()=>markAsSent(item===null||item===void 0?void 0:item.id)};})}),(item===null||item===void 0?void 0:item.status)===_helpers_commonEnums__WEBPACK_IMPORTED_MODULE_1__/* .QuotationStatus */ .xP['Sent']&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"d-flex",children:[item.projectId>0?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,{title:"Approving this quotation will link it to the existing project. Are you sure?",okText:"Yes",cancelText:"No",placement:"bottomRight",zIndex:10000,onCancel:e=>e===null||e===void 0?void 0:e.stopPropagation(),onConfirm:e=>{e===null||e===void 0?void 0:e.stopPropagation();const values={quoteId:item===null||item===void 0?void 0:item.id,title:"Existing Project"};onCreateProjectFromQuotation(values);},destroyTooltipOnHide:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{type:"ghost",size:"small",style:{fontSize:'0.7rem',borderColor:'var(--color-primary-main)',color:'var(--color-primary-main)'},onClick:e=>e.stopPropagation(),children:"Approve"})}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{type:"ghost",size:"small",style:{fontSize:'0.8rem',borderColor:'var(--color-primary-main)',color:'var(--color-primary-main)'},onClick:e=>{var _item$Lead,_item$Lead$Submission,_item$Lead2,_item$Lead2$ProjectTy;e.stopPropagation();// close drawer
setDrawer(prev=>(0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)({},prev),{},{open:false}));setNewProject&&setNewProject({isOpen:true,quoteId:item===null||item===void 0?void 0:item.id,loading:false,submissionById:item===null||item===void 0?void 0:(_item$Lead=item.Lead)===null||_item$Lead===void 0?void 0:(_item$Lead$Submission=_item$Lead.SubmissionBy)===null||_item$Lead$Submission===void 0?void 0:_item$Lead$Submission.id,projectTypeId:item===null||item===void 0?void 0:(_item$Lead2=item.Lead)===null||_item$Lead2===void 0?void 0:(_item$Lead2$ProjectTy=_item$Lead2.ProjectType)===null||_item$Lead2$ProjectTy===void 0?void 0:_item$Lead2$ProjectTy.id});},children:"Approve"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{type:"ghost",size:"small",style:{fontSize:'0.8rem',borderColor:"#FFA000",color:"#FFA000"},className:"ml-1",onClick:e=>{e===null||e===void 0?void 0:e.stopPropagation();setDrawer(prev=>(0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)({},prev),{},{open:true,quoteId:item===null||item===void 0?void 0:item.id,type:"revise",quotation:item}));},children:"Revise & Resend"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,{title:"Are you sure you want to reject this quotation?",okText:"Yes",cancelText:"No",placement:"bottomRight",onCancel:e=>e===null||e===void 0?void 0:e.stopPropagation(),onConfirm:e=>{e===null||e===void 0?void 0:e.stopPropagation();onChangeQuotationStatus(item===null||item===void 0?void 0:item.id,_helpers_commonEnums__WEBPACK_IMPORTED_MODULE_1__/* .QuotationStatus */ .xP.Rejected);},destroyTooltipOnHide:true,zIndex:10000,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{type:"ghost",size:"small",danger:true,className:"ml-1",style:{fontSize:'0.8rem'},onClick:e=>e.stopPropagation(),children:"Reject"})})]})]});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuotationStatusComp);

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

/***/ 40841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ icons_CloudDownloadOutlined)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
;// ./node_modules/@ant-design/icons-svg/es/asn/CloudDownloadOutlined.js
// This icon file is generated automatically.
var CloudDownloadOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M624 706.3h-74.1V464c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v242.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.7a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "d": "M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7-23.5-24.2-36-56.8-34.9-90.6.9-26.4 9.9-51.2 26.2-72.1 16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0152.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7a123.07 123.07 0 01-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z"
      }
    }]
  },
  "name": "cloud-download",
  "theme": "outlined"
};
/* harmony default export */ const asn_CloudDownloadOutlined = (CloudDownloadOutlined);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 5 modules
var AntdIcon = __webpack_require__(61187);
;// ./node_modules/@ant-design/icons/es/icons/CloudDownloadOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var CloudDownloadOutlined_CloudDownloadOutlined = function CloudDownloadOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.A, (0,esm_extends/* default */.A)({}, props, {
    ref: ref,
    icon: asn_CloudDownloadOutlined
  }));
};
if (false) {}
/* harmony default export */ const icons_CloudDownloadOutlined = (/*#__PURE__*/react.forwardRef(CloudDownloadOutlined_CloudDownloadOutlined));

/***/ }),

/***/ 53387:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ icons_PlusCircleOutlined)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
;// ./node_modules/@ant-design/icons-svg/es/asn/PlusCircleOutlined.js
// This icon file is generated automatically.
var PlusCircleOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
      }
    }]
  },
  "name": "plus-circle",
  "theme": "outlined"
};
/* harmony default export */ const asn_PlusCircleOutlined = (PlusCircleOutlined);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 5 modules
var AntdIcon = __webpack_require__(61187);
;// ./node_modules/@ant-design/icons/es/icons/PlusCircleOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var PlusCircleOutlined_PlusCircleOutlined = function PlusCircleOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.A, (0,esm_extends/* default */.A)({}, props, {
    ref: ref,
    icon: asn_PlusCircleOutlined
  }));
};
if (false) {}
/* harmony default export */ const icons_PlusCircleOutlined = (/*#__PURE__*/react.forwardRef(PlusCircleOutlined_PlusCircleOutlined));

/***/ }),

/***/ 98018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"quotations":"styles_quotations__rk8Mx","quotation_item":"styles_quotation_item__gBBS1","quotation_item_header":"styles_quotation_item_header__RlTQ9","quotation_item_header_left":"styles_quotation_item_header_left__pyHAw","quotation_item_header_actions":"styles_quotation_item_header_actions__0C6+1","quotation_item_header_actions_items":"styles_quotation_item_header_actions_items__GHeeE","quotation_item_header_actions_status":"styles_quotation_item_header_actions_status__WMiMx","quotation_item_header_actions_more":"styles_quotation_item_header_actions_more__Ypl05","quotation_item_header_title":"styles_quotation_item_header_title__WEbGh","quotation_item_header_email":"styles_quotation_item_header_email__0wnrg","quotation_item_header_phone":"styles_quotation_item_header_phone__VJmk4","quotation_item_cards":"styles_quotation_item_cards__QAxLQ","quotation_item_body":"styles_quotation_item_body__-vJ9F","dropdownTrigger":"styles_dropdownTrigger__P196e","dropdown":"styles_dropdown__AuZJF","table_column":"styles_table_column__yIPX8","accordianItem":"styles_accordianItem__mGtOr"});

/***/ }),

/***/ 8313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"quotation_container":"styles_quotation_container__si67h","quotation_title":"styles_quotation_title__jKEcv","rte_editor":"styles_rte_editor__oykTb","error":"styles_error__J7Vw7","accordianItem":"styles_accordianItem__7gueQ","dropdown":"styles_dropdown__jROyD","overlay":"styles_overlay__fl8IU","overlay_item":"styles_overlay_item__F9DNq","overlay_popConfirm":"styles_overlay_popConfirm__d7ZzO","disabledButton":"styles_disabledButton__OweTF","tabs":"styles_tabs__gbjy2","message":"styles_message__R2RlV","date_picker_dropdown":"styles_date_picker_dropdown__RwZa8"});

/***/ })

}]);