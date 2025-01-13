"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[7412],{

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

/***/ 67412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Organisms_Permits)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(42074);
// EXTERNAL MODULE: ./src/Components/Atoms/index.tsx + 12 modules
var Atoms = __webpack_require__(9394);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(98341);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 1 modules
var message = __webpack_require__(92759);
// EXTERNAL MODULE: ./node_modules/antd/es/segmented/index.js + 2 modules
var segmented = __webpack_require__(84649);
// EXTERNAL MODULE: ./src/Components/Atoms/ErrorCodes/index.tsx + 1 modules
var ErrorCodes = __webpack_require__(36250);
// EXTERNAL MODULE: ./src/Modules/Permits/permissions.ts
var Permits_permissions = __webpack_require__(31222);
// EXTERNAL MODULE: ./src/Modules/Permits/index.ts
var Permits = __webpack_require__(30982);
// EXTERNAL MODULE: ./src/Components/Templates/Layout/index.tsx + 28 modules
var Layout = __webpack_require__(81168);
// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js
var tooltip = __webpack_require__(81541);
// EXTERNAL MODULE: ./node_modules/antd/es/table/index.js + 96 modules
var table = __webpack_require__(41821);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/EyeOutlined.js
var EyeOutlined = __webpack_require__(54021);
// EXTERNAL MODULE: ./src/Components/Atoms/Headings/index.tsx
var Headings = __webpack_require__(35751);
// EXTERNAL MODULE: ./node_modules/antd/es/popconfirm/index.js + 1 modules
var popconfirm = __webpack_require__(56231);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DeleteOutlined.js
var DeleteOutlined = __webpack_require__(78433);
// EXTERNAL MODULE: ./src/Components/Organisms/Common/styles.module.scss
var styles_module = __webpack_require__(96019);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/Permits/actions.tsx
const ActionComponent=props=>{const{record,onEditIconClick,reloadTableData,permissions:{deletePermit}}=props;const module=(0,react.useMemo)(()=>new Permits/* PermitsModule */.v(),[]);const[actionState,setActionState]=(0,react.useState)({confirmLoading:false,openPopConfirm:false});const showPopconfirm=()=>setActionState(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{openPopConfirm:true}));const handleDelete=()=>{setActionState(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{confirmLoading:true}));if(deletePermit===false){message/* default */.Ay.error("You don't have permission to delete this record, please contact your admin.");setActionState(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{confirmLoading:false,openPopConfirm:false}));return;}module.deleteRecord(record.id).then(()=>{setActionState(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{openPopConfirm:false,confirmLoading:false}));reloadTableData();}).catch(err=>{var _err$response,_err$response$data;const errorMessage=err===null||err===void 0?void 0:(_err$response=err.response)===null||_err$response===void 0?void 0:(_err$response$data=_err$response.data)===null||_err$response$data===void 0?void 0:_err$response$data.message;message/* default */.Ay.error(errorMessage||"Something went wrong, please try again later.");setActionState(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{confirmLoading:false,openPopConfirm:false}));});};return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.actions,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{onClick:()=>onEditIconClick(record),children:/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:"/images/editicon.svg",alt:"Edit Icon"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(popconfirm/* default */.A,{open:actionState.openPopConfirm,placement:"rightBottom",title:"Are you sure?",onConfirm:handleDelete,onCancel:()=>setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{openPopConfirm:false})),okButtonProps:{loading:actionState.confirmLoading},okText:"Yes",cancelText:"No",onOpenChange:visible=>{if(!visible){setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{openPopConfirm:false}));}},children:/*#__PURE__*/(0,jsx_runtime.jsx)(DeleteOutlined/* default */.A,{className:styles_module/* default */.A.bg__red,onClick:showPopconfirm})})]});};/* harmony default export */ const actions = (ActionComponent);
// EXTERNAL MODULE: ./src/helpers/dateHandler.ts
var dateHandler = __webpack_require__(98933);
// EXTERNAL MODULE: ./src/Components/Icons/external.tsx
var external = __webpack_require__(19642);
// EXTERNAL MODULE: ./src/helpers/common.ts
var common = __webpack_require__(88132);
// EXTERNAL MODULE: ./node_modules/antd/es/card/index.js + 3 modules
var card = __webpack_require__(2557);
// EXTERNAL MODULE: ./node_modules/antd/es/dropdown/index.js
var dropdown = __webpack_require__(57811);
// EXTERNAL MODULE: ./node_modules/antd/es/space/index.js + 1 modules
var space = __webpack_require__(80737);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DownOutlined.js
var DownOutlined = __webpack_require__(73022);
// EXTERNAL MODULE: ./src/helpers/commonEnums.ts
var commonEnums = __webpack_require__(2360);
// EXTERNAL MODULE: ./src/helpers/options.ts
var options = __webpack_require__(59179);
// EXTERNAL MODULE: ./src/Components/Organisms/Permits/styles.module.scss
var Permits_styles_module = __webpack_require__(60388);
;// ./src/Components/Organisms/Permits/status.tsx
const statusEnum={finance:{enum:commonEnums/* PermitFinanceStatus */.cY,options:options/* FinanceStatusOptions */.ln,colors:{[commonEnums/* PermitFinanceStatus */.cY["Pending Payment"]]:"var(--color-yellow-dark)",[commonEnums/* PermitFinanceStatus */.cY.Paid]:"var(--color-primary-main)",[commonEnums/* PermitFinanceStatus */.cY.Canceled]:"var(--color-red-yp)"}},client:{enum:commonEnums/* PermitClientStatus */.Vn,options:options/* ClientStatusOptions */.GV,colors:{[commonEnums/* PermitClientStatus */.Vn["To be sent"]]:"var(--color-yellow-dark)",[commonEnums/* PermitClientStatus */.Vn.Sent]:"var(--color-primary-main)"}}};/** Status Dropdown */const StatusDropdown=props=>{const{status,recordId,reloadTableData,type,permissions:{updatePermit}}=props;const[messageApi,contextHolder]=message/* default */.Ay.useMessage();const module=(0,react.useMemo)(()=>new Permits/* PermitsModule */.v(),[]);const openMessage=data=>{messageApi.open({key:data.key,type:data.type,content:data.content,duration:data.type==="loading"?0:2});};// controls the dropdown visibility
const[visible,setVisible]=(0,react.useState)(false);// handle dropdown menu visibility change event
const onVisibleChange=flag=>setVisible(flag);const onStatusChange=_status=>{if(recordId&&updatePermit===true){openMessage({key:"update",type:"loading",content:"Updating..."});const data={financeStatus:type==="finance"?_status:undefined,clientStatus:type==="client"?_status:undefined};module.updateRecord(data,recordId).then(res=>{var _res$data;if(res!==null&&res!==void 0&&(_res$data=res.data)!==null&&_res$data!==void 0&&_res$data.data){var _res$data2;openMessage({key:"update",type:"success",content:res===null||res===void 0?void 0:(_res$data2=res.data)===null||_res$data2===void 0?void 0:_res$data2.message});setVisible(!visible);reloadTableData();}}).catch(err=>{const errorMessage=(0,common/* handleError */.H4)(err);openMessage({key:"update",type:"error",content:errorMessage});});}else{openMessage({key:"update",type:"error",content:"You don't have permission to change status"});}};const overlay=/*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.A,{className:"".concat(Permits_styles_module/* default */.A.overlay," pa-2"),children:statusEnum[type].options.map((option,index)=>{const value=Number(option.value);const isSelected=status===value;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Permits_styles_module/* default */.A.overlay_item,onClick:()=>{if(!isSelected){onStatusChange(value);}},children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:isSelected?Permits_styles_module/* default */.A.disabledButton:"",style:{width:"100%"},children:option.label})},"Permits-status-".concat(index));})});return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[contextHolder,/*#__PURE__*/(0,jsx_runtime.jsx)(dropdown/* default */.A,{dropdownRender:()=>overlay,trigger:updatePermit===true?["click"]:[],open:updatePermit===true?visible:false,onOpenChange:onVisibleChange,className:Permits_styles_module/* default */.A.dropdown,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.A,{style:{color:statusEnum[type].colors[status],padding:"0.2rem 0.5rem",borderRadius:"0.25rem",fontSize:"0.8rem"},children:[statusEnum[type].enum[status],updatePermit===true&&/*#__PURE__*/(0,jsx_runtime.jsx)(DownOutlined/* default */.A,{})]})})]});};/* harmony default export */ const Permits_status = (StatusDropdown);
// EXTERNAL MODULE: ./src/Components/Organisms/Permits/view-files.tsx
var view_files = __webpack_require__(14234);
;// ./src/Components/Organisms/Permits/table-columns.tsx
const PermitsTable=props=>{const{tableData,tableLoading,onEditIconClick,reloadTableData,permissions}=props;const[permitFiles,setPermitFiles]=(0,react.useState)();const columns=[{title:"S.No",dataIndex:"index",key:"index",render:(_text,_record,index)=>index+1,width:"6%"},{title:"Overview",dataIndex:"title",key:"title",render:(title,record)=>{var _record$_count,_record$_count2,_record$_count3;return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"d-flex justify-between",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",weight:"bold",children:title})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"d-flex justify-between",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",weight:"bold",children:"Authority:"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",className:"ml-1",children:record.Authority.title})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"d-flex justify-between",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",weight:"bold",children:"Remarks:"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",className:"ml-1",children:record.remarks})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"d-flex align-center mt-1",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",className:"cursor-pointer",children:"".concat((record===null||record===void 0?void 0:(_record$_count=record._count)===null||_record$_count===void 0?void 0:_record$_count.Resources)>0?"".concat(record===null||record===void 0?void 0:(_record$_count2=record._count)===null||_record$_count2===void 0?void 0:_record$_count2.Resources," files Attached"):"No Attachments"," ")}),(record===null||record===void 0?void 0:(_record$_count3=record._count)===null||_record$_count3===void 0?void 0:_record$_count3.Resources)>0&&/*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.A,{title:"View Attachments",children:/*#__PURE__*/(0,jsx_runtime.jsx)(EyeOutlined/* default */.A,{className:"ml-2 cursor-pointer",onClick:()=>setPermitFiles({open:true,id:record.id})})})]})]});}},{title:"Project",dataIndex:"Project",key:"Project",render:Project=>/*#__PURE__*/(0,jsx_runtime.jsxs)("a",{href:"/projects/".concat(Project===null||Project===void 0?void 0:Project.slug,"?id=").concat(Project===null||Project===void 0?void 0:Project.id),target:"_blank",rel:"noreferrer",title:"View Project",className:"d-flex align-center",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",children:Project===null||Project===void 0?void 0:Project.title}),/*#__PURE__*/(0,jsx_runtime.jsx)(external/* ExternalIcon */.X,{})]})},{title:"Date/Status",dataIndex:"date",key:"date",render:(_date,record)=>{const isExpired=(0,common/* isDateGreaterThan */.uh)(record===null||record===void 0?void 0:record.expiryDate,new Date().toISOString());// check if it is expiring
const isExpiring=(0,common/* isDateExpiringSoon */.K1)(record===null||record===void 0?void 0:record.expiryDate,30);return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"d-flex justify-between",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",weight:"bold",children:"Approved:"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",className:"ml-1",children:(0,dateHandler/* convertDate */.ic)(record.approvedDate,"MM dd,yy")})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"d-flex justify-between",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",weight:"bold",children:"Expiry:"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",className:"ml-1",children:(0,dateHandler/* convertDate */.ic)(record.expiryDate,"MM dd,yy")})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"d-flex justify-between mt-2",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",weight:"bold",children:"Status:"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{size:"sm",className:"ml-1 ".concat(isExpired?'color-red-yp':'color-primary-main'),children:"".concat(isExpired?'Expired':'Active'," ").concat(!isExpired&&isExpiring?'(Expiring Soon)':'')})]})]});},width:"250px"},{title:"Finance Status",dataIndex:"financeStatus",key:"financeStatus",render:(financeStatus,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)(Permits_status,{type:"finance",recordId:record.id,permissions:permissions,status:financeStatus,reloadTableData:reloadTableData}),width:"150px"},{title:"Client Status",dataIndex:"clientStatus",key:"clientStatus",render:(clientStatus,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)(Permits_status,{type:"client",recordId:record.id,permissions:permissions,status:clientStatus,reloadTableData:reloadTableData}),width:"150px"},{title:"Actions",dataIndex:"actions",key:"actions",render:(_actions,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)(actions,{record:record,onEditIconClick:onEditIconClick,reloadTableData:reloadTableData,permissions:permissions}),width:"120px"}];return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(table/* default */.A,{sticky:true,dataSource:tableData,columns:columns,pagination:false,scroll:{x:991},loading:tableLoading,rowKey:record=>"permit-".concat(record.id)}),(permitFiles===null||permitFiles===void 0?void 0:permitFiles.open)&&/*#__PURE__*/(0,jsx_runtime.jsx)(view_files/* default */.A,{id:permitFiles.id,open:permitFiles.open,onClose:()=>setPermitFiles({open:false,id:0})})]});};/* harmony default export */ const table_columns = (PermitsTable);
// EXTERNAL MODULE: ./src/hooks/index.ts + 5 modules
var hooks = __webpack_require__(91970);
// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 18 modules
var es_form = __webpack_require__(10678);
// EXTERNAL MODULE: ./node_modules/antd/es/date-picker/index.js + 56 modules
var date_picker = __webpack_require__(4132);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(59051);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./src/Modules/Project/index.ts
var Project = __webpack_require__(50167);
// EXTERNAL MODULE: ./src/helpers/useDebounce.ts
var useDebounce = __webpack_require__(28173);
// EXTERNAL MODULE: ./src/Modules/Authorities/index.ts
var Authorities = __webpack_require__(62763);
// EXTERNAL MODULE: ./src/Components/Atoms/Input/textarea.tsx
var Input_textarea = __webpack_require__(30386);
// EXTERNAL MODULE: ./src/helpers/constants.ts
var constants = __webpack_require__(65944);
// EXTERNAL MODULE: ./src/services/tokenService.ts
var tokenService = __webpack_require__(92966);
;// ./src/Components/Organisms/Permits/modal.tsx
const PermitsModal=props=>{var _permit$Resources;const{openModal,onCancel,type,record,projectId,reloadTableData,permissions:{createPermit,updatePermit}}=props;const access_token=tokenService/* default */.A.getLocalAccessToken();const[form]=es_form/* default */.A.useForm();const module=(0,react.useMemo)(()=>new Permits/* PermitsModule */.v(),[]);const projectModule=(0,react.useMemo)(()=>new Project/* ProjectModule */.K(),[]);const authorityModule=(0,react.useMemo)(()=>new Authorities/* AuthoritiesModule */.O(),[]);// Project Search Term
const[searchTermProject,setSearchTermProject]=(0,react.useState)("");const debouncedSearchTermProject=(0,useDebounce/* useDebounce */.d)(searchTermProject,500);// Authority Search Term
const[searchTermAuthority,setSearchTermAuthority]=(0,react.useState)("");const debouncedSearchTermAuthority=(0,useDebounce/* useDebounce */.d)(searchTermAuthority,500);const[projectOptions,setProjectOptions]=(0,react.useState)([]);const[authorityOptions,setAuthorityOptions]=(0,react.useState)([]);const{data:permit}=(0,hooks/* useConditionFetchData */.P6)({method:()=>module.getRecordById(record),condition:type==="edit"&&record!==0});const[buttonLoading,setButtonLoading]=(0,react.useState)(false);const onFinish=formValues=>{var _formValues$expiryDat,_formValues$approvedD,_formValues$files,_formValues$files$fil;setButtonLoading(true);const formData=new FormData();const expiryDate=formValues===null||formValues===void 0?void 0:(_formValues$expiryDat=formValues.expiryDate)===null||_formValues$expiryDat===void 0?void 0:_formValues$expiryDat.toISOString();const approvedDate=formValues===null||formValues===void 0?void 0:(_formValues$approvedD=formValues.approvedDate)===null||_formValues$approvedD===void 0?void 0:_formValues$approvedD.toISOString();const files=formValues===null||formValues===void 0?void 0:(_formValues$files=formValues.files)===null||_formValues$files===void 0?void 0:(_formValues$files$fil=_formValues$files.fileList)===null||_formValues$files$fil===void 0?void 0:_formValues$files$fil.map(item=>item===null||item===void 0?void 0:item.originFileObj);const data=(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},formValues),{},{expiryDate:expiryDate,approvedDate:approvedDate,files:files});Object.entries(data).forEach(_ref=>{let[key,value]=_ref;const isFile=key==="files"&&typeof value!=="string"&&typeof value!=="number";if(!value)return;if(key==="files"&&isFile){value.forEach(item=>{if(!item)return;formData.append("files[]",item);});}else{formData.append(key,value);}});switch(type){case"new":{if(createPermit===true){module.createRecord(formData).then(res=>{var _res$data;message/* default */.Ay.success((res===null||res===void 0?void 0:(_res$data=res.data)===null||_res$data===void 0?void 0:_res$data.message)||"Permit created successfully");reloadTableData();onCancel();}).catch(err=>{const errorMessage=(0,common/* handleError */.H4)(err);message/* default */.Ay.error(errorMessage||"Something went wrong, please try again later.");}).finally(()=>{setButtonLoading(false);});}else{setButtonLoading(false);message/* default */.Ay.error("You don't have permission to create a new record");}break;}case"edit":{if(updatePermit===true){module.updateRecord(formData,record).then(res=>{reloadTableData();onCancel();}).catch(err=>{const errorMessage=(0,common/* handleError */.H4)(err);message/* default */.Ay.error(errorMessage||"Something went wrong, please try again later.");}).finally(()=>{setButtonLoading(false);});}else{message/* default */.Ay.error("You don't have permission to update this record");}break;}default:{setButtonLoading(false);break;}}};(0,react.useEffect)(()=>{if(type==="edit"&&permit){const{projectId,authorityId,expiryDate,approvedDate,financeStatus,clientStatus,title,remarks}=permit;form.setFieldsValue({projectId:projectId,authorityId:authorityId,title:title,remarks:remarks,expiryDate:moment_default()(expiryDate),approvedDate:moment_default()(approvedDate),financeStatus:financeStatus,clientStatus:clientStatus});}else{form.resetFields();}},[type,permit]);// Project Search
const onProjectSearch=function(){let{title,ids}=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};projectModule.getAllRecords({title:title,ids:ids}).then(res=>{const{data}=res===null||res===void 0?void 0:res.data;setProjectOptions(prev=>{// if the data is already present in the state, then don't add it again
const filteredData=data===null||data===void 0?void 0:data.filter(item=>{return!(prev!==null&&prev!==void 0&&prev.find(prevItem=>prevItem.id===item.id));});// add the new data to the existing data
return[...prev,...filteredData];});}).catch(err=>{const errorMessage=(0,common/* handleError */.H4)(err);message/* default */.Ay.error(errorMessage);});};// Authority Search
const onAuthoritySearch=function(){let{title,id}=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};authorityModule.publishedRecords({title,id,perPage:100}).then(res=>{const{data}=res===null||res===void 0?void 0:res.data;setAuthorityOptions(prev=>{// if the data is already present in the state, then don't add it again
const filteredData=data===null||data===void 0?void 0:data.filter(item=>{return!(prev!==null&&prev!==void 0&&prev.find(prevItem=>prevItem.id===item.id));});// add the new data to the existing data
return[...prev,...filteredData];});}).catch(err=>{const errorMessage=(0,common/* handleError */.H4)(err);message/* default */.Ay.error(errorMessage);});};// Project Search Request
(0,react.useEffect)(()=>{if(!debouncedSearchTermProject)return;onProjectSearch({title:debouncedSearchTermProject});},[debouncedSearchTermProject]);// // Authority Search Request
// useEffect(() => {
//   if (!debouncedSearchTermAuthority) return
//   onAuthoritySearch({ title: debouncedSearchTermAuthority })
// }, [debouncedSearchTermAuthority])
// Get the default project and authority 
(0,react.useEffect)(()=>{if(!permit)return;const{authorityId,projectId}=permit;if(projectId){onProjectSearch({ids:[projectId]});}if(authorityId){onAuthoritySearch({id:authorityId});}},[permit===null||permit===void 0?void 0:permit.projectId,permit===null||permit===void 0?void 0:permit.authorityId]);// Set the default project if the project id is present in the url and the type is new
(0,react.useEffect)(()=>{if(type==="new"&&projectId){onProjectSearch({ids:[projectId]});form.setFieldsValue({projectId:projectId});}},[projectId]);(0,react.useEffect)(()=>{onAuthoritySearch();},[]);return/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomModal */.jo,{visible:openModal,closable:true,onCancel:onCancel,showFooter:false,titleText:type==="edit"?"Edit Permit":"Add New Permit",children:/*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.A,{className:styles_module/* default */.A.form,onFinish:onFinish,form:form,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"projectId",rules:[{required:true,message:"Please select a project"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* SelectWithSearch */.fd,{label:"Select Project",notFoundDescription:"No projects found., Please search for projects.",onSearch:value=>setSearchTermProject(value),options:projectOptions===null||projectOptions===void 0?void 0:projectOptions.map(item=>({label:"".concat(item.referenceNumber," | ").concat(item.title),value:item.id})),onChange:value=>form.setFieldsValue({projectId:value})})})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"authorityId",rules:[{required:true,message:"Please select a authority"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* SelectWithSearch */.fd,{label:"Select Authority",notFoundDescription:"No authority found., Please search for authority.",onSearch:value=>setSearchTermAuthority(value),options:authorityOptions===null||authorityOptions===void 0?void 0:authorityOptions.map(item=>({label:item.title,value:item.id})),onChange:value=>form.setFieldsValue({authorityId:value})})})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"title",rules:[{required:true,message:"Please add a title"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{label:"Title",asterisk:true,size:"w100"})})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"remarks",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Input_textarea/* default */.A,{label:"Remarks",placeholder:"Add remarks"})})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("label",{style:{width:"100%"},className:"d-flex flex-column font-size-sm color-dark-main",children:["Approved Date",/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"approvedDate",rules:[{required:true,message:"Please add approved date"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(date_picker/* default */.A,{style:{width:"100%"}})})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("label",{style:{width:"100%"},className:"d-flex flex-column font-size-sm color-dark-main",children:["Expiry Date",/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"expiryDate",rules:[{required:true,message:"Please add expiry date"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(date_picker/* default */.A,{style:{width:"100%"}})})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"financeStatus",rules:[{required:true,message:"Please select a finance status"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomSelect */.Ae,{label:"Finance Status",asterisk:true,options:options/* FinanceStatusOptions */.ln.map(item=>({label:item.label,value:item.value}))})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"clientStatus",rules:[{required:true,message:"Please select a client status"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomSelect */.Ae,{label:"Client Status",asterisk:true,options:options/* ClientStatusOptions */.GV.map(item=>({label:item.label,value:item.value}))})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* ImageUploader */.GA,{name:"files",title:"File",required:type==="new"?true:false,multiple:true,listType:"picture-card",defaultFileList:type==="edit"&&(permit===null||permit===void 0?void 0:permit.Resources)&&(permit===null||permit===void 0?void 0:(_permit$Resources=permit.Resources)===null||_permit$Resources===void 0?void 0:_permit$Resources.map(item=>({uid:"".concat(item===null||item===void 0?void 0:item.id),name:item===null||item===void 0?void 0:item.path,status:"done",url:"".concat(constants/* PROTECTED_RESOURCE_BASE_URL */.SO).concat(item.path,"?authKey=").concat(access_token)})))||[]})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.footer,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{size:"normal",fontSize:"sm",onClick:onCancel,type:"plain",children:"Cancel"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{type:"primary",size:"normal",fontSize:"sm",htmlType:"submit",loading:buttonLoading,children:"Submit"})]})]})});};
// EXTERNAL MODULE: ./src/Modules/Client/index.ts
var Client = __webpack_require__(97097);
;// ./src/Components/Organisms/Permits/index.tsx
const breadCrumbsData=[{text:"Home",isLink:true,path:"/"},{isLink:false,text:"Permits"}];const segmentedOptions=[{label:"All",value:"all"},{label:"Active",value:"onlyActive"},{label:"Expired",value:"onlyExpired"}];const Permits_Permits=()=>{var _projectData$data,_clients$data,_authorities$data;// available permissions for this module
const permissionSlug=(0,common/* getPermissionSlugs */.AH)(Permits_permissions/* PermitsPermissionsEnum */.e);const{userPermissions}=(0,es/* useSelector */.d4)(state=>state.usersReducer);const permissions=userPermissions;const{readPermit,createPermit,updatePermit}=permissions;const[searchParams,setSearchParams]=(0,dist/* useSearchParams */.ok)();const recordId=searchParams.get("id");const projectId=searchParams.get("projectId");const actionType=searchParams.get("actionType");const module=(0,react.useMemo)(()=>new Permits/* PermitsModule */.v(),[]);const projectModule=(0,react.useMemo)(()=>new Project/* ProjectModule */.K(),[]);const clientModule=(0,react.useMemo)(()=>new Client/* ClientModule */.u(),[]);const authorityModule=(0,react.useMemo)(()=>new Authorities/* AuthoritiesModule */.O(),[]);const{data,onRefresh,meta,loading}=(0,hooks/* useFetchData */.Gs)({method:module.getAllRecords,initialQuery:{onlyActive:!actionType?true:undefined,projectId:projectId?Number(projectId):undefined}});const[segmentedStatus,setSegmentedStatus]=(0,react.useState)("onlyActive");const[modalOpen,setModalOpen]=(0,react.useState)({type:"new",recordId:0,open:false});// selected filters
const[selectedFilters,setSelectedFilters]=(0,react.useState)({dateRange:[""]});const[reset,setReset]=(0,react.useState)(false);// search term for the project search
const[projectSearchTerm,setProjectSearchTerm]=(0,react.useState)(undefined);const debouncedSearchTerm=(0,useDebounce/* useDebounce */.d)(projectSearchTerm,500);// client search term
const[clientTerm,setClientTerm]=(0,react.useState)(undefined);// Search Debounce
const debouncedClientTerm=(0,useDebounce/* useDebounce */.d)(clientTerm,500);// authority search term
const[authorityTerm,setAuthorityTerm]=(0,react.useState)(undefined);// Search Debounce
const debouncedAuthorityTerm=(0,useDebounce/* useDebounce */.d)(authorityTerm,500);// project data
const[projectData,setProjectData]=(0,react.useState)({data:[],loading:false});// client data
const[clients,setClients]=(0,react.useState)({data:[],loading:false});// authority data
const[authorities,setAuthorities]=(0,react.useState)({data:[],loading:false});const onCancelClick=()=>{if(createPermit===false){message/* default */.Ay.error("You don't have permission to update this record");return;}setModalOpen((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},modalOpen),{},{open:!modalOpen.open,type:"new"}));};const onEditIconClick=record=>{if(updatePermit===false){message/* default */.Ay.error("You don't have permission to update this record");return;}setModalOpen((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},modalOpen),{},{open:!modalOpen.open,type:"edit",recordId:record.id}));};const onSelected=event=>{const{name,value}=event===null||event===void 0?void 0:event.target;if(name==="clientId"||name==="authorityId"||name==="projectId"){const isValidNumber=(0,common/* isNumber */.Et)(value);if(!isValidNumber){let label="";switch(name){case"clientId":{label="Client ID";break;}case"authorityId":{label="Authority ID";break;}case"projectId":{label="Project ID";break;}}return message/* default */.Ay.error("".concat(label," should be a number"));}}// set the selected value in the state
setSelectedFilters(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{[name]:value}));};const onReset=(0,react.useCallback)((name,value)=>{if(name){setReset(true);setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{[name]:value}));}},[selectedFilters]);const onUpdate=(0,react.useCallback)(query=>{var _selectedFilters$date,_selectedFilters$date2;const fromDateString=((_selectedFilters$date=selectedFilters.dateRange)===null||_selectedFilters$date===void 0?void 0:_selectedFilters$date[0])||"";const toDateString=((_selectedFilters$date2=selectedFilters.dateRange)===null||_selectedFilters$date2===void 0?void 0:_selectedFilters$date2[1])||"";const fromDate=fromDateString?(0,dateHandler/* convertDate */.ic)(fromDateString,"yy-mm-dd"):undefined;const toDate=toDateString?(0,dateHandler/* convertDate */.ic)(toDateString,"yy-mm-dd"):undefined;const data=(0,objectSpread2/* default */.A)({fromDate:fromDate,toDate:toDate,clientId:selectedFilters.clientId||undefined,projectId:selectedFilters.projectId||undefined,authorityId:selectedFilters.authorityId||undefined,financeStatus:selectedFilters.financeStatus||undefined,clientStatus:selectedFilters.clientStatus||undefined,onlyActive:selectedFilters.onlyActive?true:undefined,onlyExpired:selectedFilters.onlyExpired?true:undefined},query);// get the data from the api
onRefresh(data);},[selectedFilters]);const onPaginationChange=(page,pageSize)=>onUpdate({page,perPage:pageSize});/** Get the search result for the projects */const onSearchProject=_ref=>{let{title,ids}=_ref;setProjectData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{loading:true}));projectModule.getAllRecords({title:title,ids}).then(res=>{const{data}=res===null||res===void 0?void 0:res.data;setProjectData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{data:data,loading:false}));}).finally(()=>{setProjectData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{loading:false}));});};/** Get the search result for the client */const GetSearchClients=(0,react.useCallback)(()=>{if(debouncedClientTerm){setClients(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{loading:true}));clientModule.findPublished({name:debouncedClientTerm}).then(res=>{var _res$data;const data=res===null||res===void 0?void 0:(_res$data=res.data)===null||_res$data===void 0?void 0:_res$data.data;setClients(prev=>{// if the data is already present in the state, then don't add it again
const filteredData=data===null||data===void 0?void 0:data.filter(item=>{var _prev$data;return!(prev!==null&&prev!==void 0&&(_prev$data=prev.data)!==null&&_prev$data!==void 0&&_prev$data.find(prevItem=>prevItem.id===item.id));});// add the new data to the existing data
return{data:[...prev.data,...filteredData],loading:false};});}).catch(err=>{const errorMessage=(0,common/* handleError */.H4)(err);message/* default */.Ay.error(errorMessage||"Something went wrong, please try again later.");setClients(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{loading:false}));});}},[debouncedClientTerm]);/** Get the search result for the authority */const GetSearchAuthorities=(0,react.useCallback)(()=>{if(debouncedAuthorityTerm){setAuthorities(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{loading:true}));authorityModule.getAllRecords({name:debouncedAuthorityTerm}).then(res=>{var _res$data2;const data=res===null||res===void 0?void 0:(_res$data2=res.data)===null||_res$data2===void 0?void 0:_res$data2.data;setAuthorities(prev=>{// if the data is already present in the state, then don't add it again
const filteredData=data===null||data===void 0?void 0:data.filter(item=>{var _prev$data2;return!(prev!==null&&prev!==void 0&&(_prev$data2=prev.data)!==null&&_prev$data2!==void 0&&_prev$data2.find(prevItem=>prevItem.id===item.id));});// add the new data to the existing data
return{data:[...prev.data,...filteredData],loading:false};});}).catch(err=>{const errorMessage=(0,common/* handleError */.H4)(err);message/* default */.Ay.error(errorMessage||"Something went wrong, please try again later.");setAuthorities(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{loading:false}));});}},[debouncedAuthorityTerm]);(0,react.useEffect)(()=>{if(reset){onUpdate();}// after 2 seconds set reset clicked state to false
const timer=setTimeout(()=>{setReset(false);},2000);return()=>clearTimeout(timer);},[reset,selectedFilters,onUpdate]);(0,react.useEffect)(()=>{if(debouncedSearchTerm){onSearchProject({title:debouncedSearchTerm});}},[debouncedSearchTerm]);(0,react.useEffect)(()=>{GetSearchClients();},[GetSearchClients]);(0,react.useEffect)(()=>{GetSearchAuthorities();},[GetSearchAuthorities]);// Open the modal based on the action type
(0,react.useEffect)(()=>{const updateProject=()=>{setSegmentedStatus("all");setSelectedFilters(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{projectId:Number(projectId)}));onSearchProject({ids:[Number(projectId)]});};switch(actionType){case"create":{if(projectId){updateProject();setModalOpen((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},modalOpen),{},{open:true,type:"new",projectId:Number(projectId)}));(0,common/* onRemoveUrlParams */.t3)(["actionType","projectId"],setSearchParams);}break;}case"edit":{if(recordId&&projectId){updateProject();setModalOpen((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},modalOpen),{},{open:true,type:"edit",recordId:Number(recordId),projectId:Number(projectId)}));(0,common/* onRemoveUrlParams */.t3)(["actionType","id","projectId"],setSearchParams);}break;}case"view":{if(recordId&&projectId){updateProject();(0,common/* onRemoveUrlParams */.t3)(["actionType","id","projectId"],setSearchParams);}break;}default:break;}},[actionType,projectId,recordId]);return/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.A,{permissionSlug:permissionSlug,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* PageHeader */.zY,{heading:"Permits",buttonText:"Add Permit",onButtonClick:onCancelClick,breadCrumbData:breadCrumbsData,showAdd:!!createPermit,filters:readPermit?/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{overflow:"auto"},children:/*#__PURE__*/(0,jsx_runtime.jsx)(segmented/* default */.A,{size:"middle",value:segmentedStatus,options:segmentedOptions.map(item=>{return (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},item),{},{title:item.label,value:item.value});}),style:{fontSize:"var(--font-size-sm)"},onChange:value=>{if(value==="all"){onUpdate({onlyActive:undefined,onlyExpired:undefined});setSelectedFilters(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{onlyActive:undefined,onlyExpired:undefined}));}else{onReset(value,"");setSelectedFilters(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{onlyActive:value==="onlyActive"?true:undefined,onlyExpired:value==="onlyExpired"?true:undefined}));}setSegmentedStatus(value);}})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"datepicker",label:"Expiry Date",name:"dateRange",onChange:value=>setSelectedFilters(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{dateRange:value})),onReset:()=>onReset("dateRange",[]),onUpdate:onUpdate})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"radio",label:"Project",name:"projectId",withSearch:true,options:projectData===null||projectData===void 0?void 0:(_projectData$data=projectData.data)===null||_projectData$data===void 0?void 0:_projectData$data.map(item=>({label:"".concat(item.referenceNumber," | ").concat(item.title),value:"".concat(item.id)})),onChange:onSelected,value:Number(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.projectId)>0?String(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.projectId):"",onReset:()=>{onReset("projectId",0);// reset the search term
setProjectSearchTerm("");},onUpdate:onUpdate// START: For search
,loading:projectData===null||projectData===void 0?void 0:projectData.loading,searchTerm:projectSearchTerm||"",onSearch:event=>setProjectSearchTerm(event.currentTarget.value)// END: For search
,defaultValue:Number(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.projectId)>0?String(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.projectId):""})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"radio",label:"Client",name:"clientId",withSearch:true,options:clients===null||clients===void 0?void 0:(_clients$data=clients.data)===null||_clients$data===void 0?void 0:_clients$data.map(item=>{return{label:item.name,value:"".concat(item.id)};}),onChange:onSelected,value:Number(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.clientId)>0?String(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.clientId):"",onReset:()=>{onReset("clientId",0);// reset the search term
setClientTerm("");},onUpdate:onUpdate// START: For search
,loading:clients===null||clients===void 0?void 0:clients.loading,searchTerm:clientTerm||"",onSearch:event=>setClientTerm(event.currentTarget.value)// END: For search
})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"radio",label:"Authority",name:"authorityId",withSearch:true,options:authorities===null||authorities===void 0?void 0:(_authorities$data=authorities.data)===null||_authorities$data===void 0?void 0:_authorities$data.map(item=>{return{label:item.title,value:"".concat(item.id)};}),onChange:onSelected,value:Number(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.authorityId)>0?String(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.authorityId):"",onReset:()=>{onReset("authorityId",0);// reset the search term
setAuthorityTerm("");},onUpdate:onUpdate// START: For search
,loading:authorities===null||authorities===void 0?void 0:authorities.loading,searchTerm:authorityTerm||"",onSearch:event=>setAuthorityTerm(event.currentTarget.value)// END: For search
})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"radio",label:"Finance Status",name:"financeStatus",options:options/* FinanceStatusOptions */.ln===null||options/* FinanceStatusOptions */.ln===void 0?void 0:options/* FinanceStatusOptions */.ln.map(option=>({label:option.label,value:option.value})),value:"".concat(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.financeStatus),onChange:onSelected,onReset:()=>onReset("financeStatus",""),onUpdate:onUpdate})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"radio",label:"Client Status",name:"clientStatus",options:options/* ClientStatusOptions */.GV===null||options/* ClientStatusOptions */.GV===void 0?void 0:options/* ClientStatusOptions */.GV.map(option=>({label:option.label,value:option.value})),value:"".concat(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.clientStatus),onChange:onSelected,onReset:()=>onReset("clientStatus",""),onUpdate:onUpdate})})]}):null}),readPermit===true&&/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(table_columns,{tableData:data,tableLoading:loading,onEditIconClick:onEditIconClick,reloadTableData:onRefresh,permissions:permissions}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Pagination */.dK,{total:meta===null||meta===void 0?void 0:meta.total,current:meta===null||meta===void 0?void 0:meta.page,defaultPageSize:meta!==null&&meta!==void 0&&meta.perPage?meta===null||meta===void 0?void 0:meta.perPage:10,pageSizeOptions:[10,20,50,100],onChange:onPaginationChange})]}),readPermit===false&&/*#__PURE__*/(0,jsx_runtime.jsx)(ErrorCodes/* ErrorCode403 */.$t,{mainMessage:"You don't have permission to view this data"}),modalOpen.open&&/*#__PURE__*/(0,jsx_runtime.jsx)(PermitsModal,{type:modalOpen.type,openModal:modalOpen.open,record:modalOpen.recordId,projectId:modalOpen.projectId,onCancel:onCancelClick,reloadTableData:onRefresh,permissions:permissions})]});};/* harmony default export */ const Organisms_Permits = (Permits_Permits);

/***/ }),

/***/ 14234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9950);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(30377);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73780);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(46005);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9206);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(81541);
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65944);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91970);
/* harmony import */ var _modules_Permits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30982);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60388);
/* harmony import */ var _services_tokenService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92966);
/* harmony import */ var _icons_external__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19642);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(44414);
const{Text}=antd__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A;const ViewPermitFiles=props=>{var _data$Resources;const{onClose,open,id}=props;const module=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>new _modules_Permits__WEBPACK_IMPORTED_MODULE_3__/* .PermitsModule */ .v(),[]);const access_token=_services_tokenService__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.getLocalAccessToken();const{data,loading}=(0,hooks__WEBPACK_IMPORTED_MODULE_2__/* .useConditionFetchData */ .P6)({method:()=>module.getRecordById(id),condition:!!id&&open&&id>0});return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(antd__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{open:open,onClose:onClose,width:window.innerWidth>500?500:"100%",title:"".concat(data===null||data===void 0?void 0:data.title," Files"),placement:"right",destroyOnClose:true,bodyStyle:{padding:"0px 25px"},children:loading?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(antd__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,{active:true}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment,{children:data===null||data===void 0?void 0:(_data$Resources=data.Resources)===null||_data$Resources===void 0?void 0:_data$Resources.map((item,idx)=>{var _item$fileType,_item$fileType2;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.permitFiles,children:[(_item$fileType=item.fileType)!==null&&_item$fileType!==void 0&&_item$fileType.includes('image')?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A,{src:"".concat(_helpers_constants__WEBPACK_IMPORTED_MODULE_1__/* .PROTECTED_RESOURCE_BASE_URL */ .SO).concat(item.path,"?authKey=").concat(access_token),alt:item.title,width:100,height:70,style:{borderRadius:5,objectFit:'cover'}}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A,{src:"/images/doc.png",alt:"Document-".concat(idx),width:100,height:70,preview:false,style:{objectFit:'contain'}}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(Text,{ellipsis:{tooltip:item.title},children:item.title||item.name}),!((_item$fileType2=item.fileType)!==null&&_item$fileType2!==void 0&&_item$fileType2.includes('image'))&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(antd__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A,{title:"View Document",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a",{href:"".concat(_helpers_constants__WEBPACK_IMPORTED_MODULE_1__/* .APPLICATION_RESOURCE_BASE_URL */ .Ur).concat(item.path),target:"_blank",rel:"noreferrer",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_icons_external__WEBPACK_IMPORTED_MODULE_6__/* .ExternalIcon */ .X,{})})})]},idx);})})});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewPermitFiles);

/***/ }),

/***/ 62763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ AuthoritiesModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
class AuthoritiesModule{constructor(){this.endPoint="authorities";/**Get all Biometric records
	 * @param query - query params
	 */this.getAllRecords=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint,{params:query});};this.publishedRecords=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/find-published"),{params:query});};this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* .BASE_URL */ .C+this.endPoint+"/"+id);};this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* .BASE_URL */ .C+this.endPoint+"/"+id);};this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* .BASE_URL */ .C+this.endPoint,data);};this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* .BASE_URL */ .C+this.endPoint+"/"+id,data);};}}

/***/ }),

/***/ 97097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ ClientModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
class ClientModule{constructor(){this.endPoint="client";/**Get all Client records
     * @param query - query params
     */this.getAllRecords=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint,{params:query});};/**Get Client record by id
     * @param id - Client id
     */this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/").concat(id));};/**Find published client records
     * @param query - query params
     */this.findPublished=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/find-published"),{params:query});};/**Delete Client record
    * @param id - Client id
    */this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete("".concat(this.endPoint,"/").concat(id));};/**Create new Client record
     * @param data - Client data
     */this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(this.endPoint,data);};/**Update Client record
    * @param data - Client data
    * @param id - Client id
    */this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/").concat(id),data);};}}

/***/ }),

/***/ 30982:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ PermitsModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
/* harmony import */ var _modules_Common_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21073);
class PermitsModule{constructor(){this.endPoint="permits";this.getAllRecords=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint,{params:query});};this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/").concat(id));};this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete("".concat(this.endPoint,"/").concat(id));};this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(this.endPoint,data,{headers:_modules_Common_config__WEBPACK_IMPORTED_MODULE_1__/* .FormDataHeader */ .Y});};this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/").concat(id),data,{headers:_modules_Common_config__WEBPACK_IMPORTED_MODULE_1__/* .FormDataHeader */ .Y});};}}

/***/ }),

/***/ 59179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fq: () => (/* binding */ TransactionStatusOptions),
/* harmony export */   GV: () => (/* binding */ ClientStatusOptions),
/* harmony export */   jD: () => (/* binding */ QuotationTypeOptions),
/* harmony export */   ln: () => (/* binding */ FinanceStatusOptions),
/* harmony export */   uf: () => (/* binding */ getOptionsFromEnum),
/* harmony export */   yB: () => (/* binding */ PaymentScheduleOptions)
/* harmony export */ });
/* harmony import */ var _commonEnums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2360);
/** Used to get options from enum object */const getOptionsFromEnum=enumObject=>{const enumEntries=Object.entries(enumObject);const options=enumEntries.filter(_ref=>{let[key]=_ref;return isNaN(Number(key));}).map(_ref2=>{let[key,value]=_ref2;return{label:key,value:value};});return options;};/** Finance Status Options */const FinanceStatusOptions=getOptionsFromEnum(_commonEnums__WEBPACK_IMPORTED_MODULE_0__/* .PermitFinanceStatus */ .cY);/** Client Status Options */const ClientStatusOptions=getOptionsFromEnum(_commonEnums__WEBPACK_IMPORTED_MODULE_0__/* .PermitClientStatus */ .Vn);/** Government Transaction Status Options */const TransactionStatusOptions=getOptionsFromEnum(_commonEnums__WEBPACK_IMPORTED_MODULE_0__/* .TransactionStatus */ .x8);/** Quotation Type Options */const QuotationTypeOptions=getOptionsFromEnum(_commonEnums__WEBPACK_IMPORTED_MODULE_0__/* .QuotationTypeEnum */ .eE);/** Supervision Payment Schedule Options */const PaymentScheduleOptions=getOptionsFromEnum(_commonEnums__WEBPACK_IMPORTED_MODULE_0__/* .SupervisionPaymentSchedule */ .ve);

/***/ }),

/***/ 54021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58168);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9950);
/* harmony import */ var _ant_design_icons_svg_es_asn_EyeOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2104);
/* harmony import */ var _components_AntdIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61187);

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var EyeOutlined = function EyeOutlined(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_AntdIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({}, props, {
    ref: ref,
    icon: _ant_design_icons_svg_es_asn_EyeOutlined__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A
  }));
};
if (false) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(EyeOutlined));

/***/ }),

/***/ 84649:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ segmented)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(64467);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(82284);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(48383);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(5544);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(80045);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useMergedState.js
var useMergedState = __webpack_require__(71207);
// EXTERNAL MODULE: ./node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(41929);
// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__(15207);
// EXTERNAL MODULE: ./node_modules/rc-motion/es/index.js + 12 modules
var es = __webpack_require__(87418);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useLayoutEffect.js
var useLayoutEffect = __webpack_require__(13511);
;// ./node_modules/rc-segmented/es/MotionThumb.js







var calcThumbStyle = function calcThumbStyle(targetElement) {
  return targetElement ? {
    left: targetElement.offsetLeft,
    right: targetElement.parentElement.clientWidth - targetElement.clientWidth - targetElement.offsetLeft,
    width: targetElement.clientWidth
  } : null;
};
var toPX = function toPX(value) {
  return value !== undefined ? "".concat(value, "px") : undefined;
};
function MotionThumb(props) {
  var prefixCls = props.prefixCls,
    containerRef = props.containerRef,
    value = props.value,
    getValueIndex = props.getValueIndex,
    motionName = props.motionName,
    onMotionStart = props.onMotionStart,
    onMotionEnd = props.onMotionEnd,
    direction = props.direction;
  var thumbRef = react.useRef(null);
  var _React$useState = react.useState(value),
    _React$useState2 = (0,slicedToArray/* default */.A)(_React$useState, 2),
    prevValue = _React$useState2[0],
    setPrevValue = _React$useState2[1];

  // =========================== Effect ===========================
  var findValueElement = function findValueElement(val) {
    var _containerRef$current;
    var index = getValueIndex(val);
    var ele = (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.querySelectorAll(".".concat(prefixCls, "-item"))[index];
    return (ele === null || ele === void 0 ? void 0 : ele.offsetParent) && ele;
  };
  var _React$useState3 = react.useState(null),
    _React$useState4 = (0,slicedToArray/* default */.A)(_React$useState3, 2),
    prevStyle = _React$useState4[0],
    setPrevStyle = _React$useState4[1];
  var _React$useState5 = react.useState(null),
    _React$useState6 = (0,slicedToArray/* default */.A)(_React$useState5, 2),
    nextStyle = _React$useState6[0],
    setNextStyle = _React$useState6[1];
  (0,useLayoutEffect/* default */.A)(function () {
    if (prevValue !== value) {
      var prev = findValueElement(prevValue);
      var next = findValueElement(value);
      var calcPrevStyle = calcThumbStyle(prev);
      var calcNextStyle = calcThumbStyle(next);
      setPrevValue(value);
      setPrevStyle(calcPrevStyle);
      setNextStyle(calcNextStyle);
      if (prev && next) {
        onMotionStart();
      } else {
        onMotionEnd();
      }
    }
  }, [value]);
  var thumbStart = react.useMemo(function () {
    return direction === 'rtl' ? toPX(-(prevStyle === null || prevStyle === void 0 ? void 0 : prevStyle.right)) : toPX(prevStyle === null || prevStyle === void 0 ? void 0 : prevStyle.left);
  }, [direction, prevStyle]);
  var thumbActive = react.useMemo(function () {
    return direction === 'rtl' ? toPX(-(nextStyle === null || nextStyle === void 0 ? void 0 : nextStyle.right)) : toPX(nextStyle === null || nextStyle === void 0 ? void 0 : nextStyle.left);
  }, [direction, nextStyle]);

  // =========================== Motion ===========================
  var onAppearStart = function onAppearStart() {
    return {
      transform: "translateX(var(--thumb-start-left))",
      width: "var(--thumb-start-width)"
    };
  };
  var onAppearActive = function onAppearActive() {
    return {
      transform: "translateX(var(--thumb-active-left))",
      width: "var(--thumb-active-width)"
    };
  };
  var onAppearEnd = function onAppearEnd() {
    setPrevStyle(null);
    setNextStyle(null);
    onMotionEnd();
  };

  // =========================== Render ===========================
  // No need motion when nothing exist in queue
  if (!prevStyle || !nextStyle) {
    return null;
  }
  return /*#__PURE__*/react.createElement(es/* default */.Ay, {
    visible: true,
    motionName: motionName,
    motionAppear: true,
    onAppearStart: onAppearStart,
    onAppearActive: onAppearActive,
    onAppearEnd: onAppearEnd
  }, function (_ref, ref) {
    var motionClassName = _ref.className,
      motionStyle = _ref.style;
    var mergedStyle = (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, motionStyle), {}, {
      '--thumb-start-left': thumbStart,
      '--thumb-start-width': toPX(prevStyle === null || prevStyle === void 0 ? void 0 : prevStyle.width),
      '--thumb-active-left': thumbActive,
      '--thumb-active-width': toPX(nextStyle === null || nextStyle === void 0 ? void 0 : nextStyle.width)
    });

    // It's little ugly which should be refactor when @umi/test update to latest jsdom
    var motionProps = {
      ref: (0,es_ref/* composeRef */.K4)(thumbRef, ref),
      style: mergedStyle,
      className: classnames_default()("".concat(prefixCls, "-thumb"), motionClassName)
    };
    if (false) {}
    return /*#__PURE__*/react.createElement("div", motionProps);
  });
}
;// ./node_modules/rc-segmented/es/index.js






var _excluded = ["prefixCls", "direction", "options", "disabled", "defaultValue", "value", "onChange", "className", "motionName"];






function getValidTitle(option) {
  if (typeof option.title !== 'undefined') {
    return option.title;
  }

  // read `label` when title is `undefined`
  if ((0,esm_typeof/* default */.A)(option.label) !== 'object') {
    var _option$label;
    return (_option$label = option.label) === null || _option$label === void 0 ? void 0 : _option$label.toString();
  }
}
function normalizeOptions(options) {
  return options.map(function (option) {
    if ((0,esm_typeof/* default */.A)(option) === 'object' && option !== null) {
      var validTitle = getValidTitle(option);
      return (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, option), {}, {
        title: validTitle
      });
    }
    return {
      label: option === null || option === void 0 ? void 0 : option.toString(),
      title: option === null || option === void 0 ? void 0 : option.toString(),
      value: option
    };
  });
}
var InternalSegmentedOption = function InternalSegmentedOption(_ref) {
  var prefixCls = _ref.prefixCls,
    className = _ref.className,
    disabled = _ref.disabled,
    checked = _ref.checked,
    label = _ref.label,
    title = _ref.title,
    value = _ref.value,
    onChange = _ref.onChange;
  var handleChange = function handleChange(event) {
    if (disabled) {
      return;
    }
    onChange(event, value);
  };
  return /*#__PURE__*/react.createElement("label", {
    className: classnames_default()(className, (0,defineProperty/* default */.A)({}, "".concat(prefixCls, "-item-disabled"), disabled))
  }, /*#__PURE__*/react.createElement("input", {
    className: "".concat(prefixCls, "-item-input"),
    type: "radio",
    disabled: disabled,
    checked: checked,
    onChange: handleChange
  }), /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-item-label"),
    title: title
  }, label));
};
var Segmented = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _segmentedOptions$, _classNames2;
  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-segmented' : _props$prefixCls,
    direction = props.direction,
    options = props.options,
    disabled = props.disabled,
    defaultValue = props.defaultValue,
    value = props.value,
    onChange = props.onChange,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$motionName = props.motionName,
    motionName = _props$motionName === void 0 ? 'thumb-motion' : _props$motionName,
    restProps = (0,objectWithoutProperties/* default */.A)(props, _excluded);
  var containerRef = react.useRef(null);
  var mergedRef = react.useMemo(function () {
    return (0,es_ref/* composeRef */.K4)(containerRef, ref);
  }, [containerRef, ref]);
  var segmentedOptions = react.useMemo(function () {
    return normalizeOptions(options);
  }, [options]);

  // Note: We should not auto switch value when value not exist in options
  // which may break single source of truth.
  var _useMergedState = (0,useMergedState/* default */.A)((_segmentedOptions$ = segmentedOptions[0]) === null || _segmentedOptions$ === void 0 ? void 0 : _segmentedOptions$.value, {
      value: value,
      defaultValue: defaultValue
    }),
    _useMergedState2 = (0,slicedToArray/* default */.A)(_useMergedState, 2),
    rawValue = _useMergedState2[0],
    setRawValue = _useMergedState2[1];

  // ======================= Change ========================
  var _React$useState = react.useState(false),
    _React$useState2 = (0,slicedToArray/* default */.A)(_React$useState, 2),
    thumbShow = _React$useState2[0],
    setThumbShow = _React$useState2[1];
  var handleChange = function handleChange(event, val) {
    if (disabled) {
      return;
    }
    setRawValue(val);
    onChange === null || onChange === void 0 ? void 0 : onChange(val);
  };
  var divProps = (0,omit/* default */.A)(restProps, ['children']);
  return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.A)({}, divProps, {
    className: classnames_default()(prefixCls, (_classNames2 = {}, (0,defineProperty/* default */.A)(_classNames2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0,defineProperty/* default */.A)(_classNames2, "".concat(prefixCls, "-disabled"), disabled), _classNames2), className),
    ref: mergedRef
  }), /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-group")
  }, /*#__PURE__*/react.createElement(MotionThumb, {
    prefixCls: prefixCls,
    value: rawValue,
    containerRef: containerRef,
    motionName: "".concat(prefixCls, "-").concat(motionName),
    direction: direction,
    getValueIndex: function getValueIndex(val) {
      return segmentedOptions.findIndex(function (n) {
        return n.value === val;
      });
    },
    onMotionStart: function onMotionStart() {
      setThumbShow(true);
    },
    onMotionEnd: function onMotionEnd() {
      setThumbShow(false);
    }
  }), segmentedOptions.map(function (segmentedOption) {
    return /*#__PURE__*/react.createElement(InternalSegmentedOption, (0,esm_extends/* default */.A)({
      key: segmentedOption.value,
      prefixCls: prefixCls,
      className: classnames_default()(segmentedOption.className, "".concat(prefixCls, "-item"), (0,defineProperty/* default */.A)({}, "".concat(prefixCls, "-item-selected"), segmentedOption.value === rawValue && !thumbShow)),
      checked: segmentedOption.value === rawValue,
      onChange: handleChange
    }, segmentedOption, {
      disabled: !!disabled || !!segmentedOption.disabled
    }));
  })));
});
Segmented.displayName = 'Segmented';
Segmented.defaultProps = {
  options: []
};
/* harmony default export */ const rc_segmented_es = (Segmented);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(5741);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/SizeContext.js
var SizeContext = __webpack_require__(87126);
;// ./node_modules/antd/es/segmented/index.js



var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





function isSegmentedLabeledOptionWithIcon(option) {
  return (0,esm_typeof/* default */.A)(option) === 'object' && !!(option === null || option === void 0 ? void 0 : option.icon);
}
var segmented_Segmented = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _classNames;
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    block = props.block,
    _props$options = props.options,
    options = _props$options === void 0 ? [] : _props$options,
    _props$size = props.size,
    customSize = _props$size === void 0 ? 'middle' : _props$size,
    restProps = __rest(props, ["prefixCls", "className", "block", "options", "size"]);
  var _React$useContext = react.useContext(context/* ConfigContext */.QO),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var prefixCls = getPrefixCls('segmented', customizePrefixCls);
  // ===================== Size =====================
  var size = react.useContext(SizeContext/* default */.A);
  var mergedSize = customSize || size;
  // syntactic sugar to support `icon` for Segmented Item
  var extendedOptions = react.useMemo(function () {
    return options.map(function (option) {
      if (isSegmentedLabeledOptionWithIcon(option)) {
        var icon = option.icon,
          label = option.label,
          restOption = __rest(option, ["icon", "label"]);
        return (0,esm_extends/* default */.A)((0,esm_extends/* default */.A)({}, restOption), {
          label: /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("span", {
            className: "".concat(prefixCls, "-item-icon")
          }, icon), label && /*#__PURE__*/react.createElement("span", null, label))
        });
      }
      return option;
    });
  }, [options, prefixCls]);
  return /*#__PURE__*/react.createElement(rc_segmented_es, (0,esm_extends/* default */.A)({}, restProps, {
    className: classnames_default()(className, (_classNames = {}, (0,defineProperty/* default */.A)(_classNames, "".concat(prefixCls, "-block"), block), (0,defineProperty/* default */.A)(_classNames, "".concat(prefixCls, "-sm"), mergedSize === 'small'), (0,defineProperty/* default */.A)(_classNames, "".concat(prefixCls, "-lg"), mergedSize === 'large'), _classNames)),
    options: extendedOptions,
    ref: ref,
    prefixCls: prefixCls,
    direction: direction
  }));
});
if (false) {}
/* harmony default export */ const segmented = (segmented_Segmented);

/***/ }),

/***/ 60388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"opacity_6":"styles_opacity_6__5OVxm","dropdown":"styles_dropdown__A7IWQ","overlay":"styles_overlay__oAOwN","overlay_item":"styles_overlay_item__ngTcL","overlay_popConfirm":"styles_overlay_popConfirm__nIAzy","disabledButton":"styles_disabledButton__X3cYc","permitFiles":"styles_permitFiles__ELSEK","permitFiles__details":"styles_permitFiles__details__gHmpW"});

/***/ })

}]);