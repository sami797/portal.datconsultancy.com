"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[8726],{

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

/***/ 68726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Organisms_BrandingTheme)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./src/Components/Atoms/index.tsx + 12 modules
var Atoms = __webpack_require__(9394);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(98341);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 1 modules
var message = __webpack_require__(92759);
// EXTERNAL MODULE: ./src/Components/Atoms/ErrorCodes/index.tsx + 1 modules
var ErrorCodes = __webpack_require__(36250);
// EXTERNAL MODULE: ./src/Modules/BrandingTheme/permissions.ts
var BrandingTheme_permissions = __webpack_require__(66514);
// EXTERNAL MODULE: ./src/Modules/BrandingTheme/index.ts
var BrandingTheme = __webpack_require__(65450);
// EXTERNAL MODULE: ./src/Components/Templates/Layout/index.tsx + 28 modules
var Layout = __webpack_require__(81168);
// EXTERNAL MODULE: ./node_modules/antd/es/table/index.js + 96 modules
var table = __webpack_require__(41821);
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
;// ./src/Components/Organisms/BrandingTheme/actions.tsx
const ActionComponent=props=>{const{record,onEditIconClick,reloadTableData,permissions:{deleteBrandingTheme}}=props;const module=(0,react.useMemo)(()=>new BrandingTheme/* BrandingThemeModule */.P(),[]);const[actionState,setActionState]=(0,react.useState)({confirmLoading:false,openPopConfirm:false});const showPopconfirm=()=>setActionState(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{openPopConfirm:true}));const handleDelete=()=>{setActionState(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{confirmLoading:true}));if(deleteBrandingTheme===false){message/* default */.Ay.error("You don't have permission to delete this record, please contact your admin.");setActionState(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{confirmLoading:false,openPopConfirm:false}));return;}module.deleteRecord(record.id).then(()=>{setActionState(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{openPopConfirm:false,confirmLoading:false}));reloadTableData();}).catch(err=>{var _err$response,_err$response$data;const errorMessage=err===null||err===void 0?void 0:(_err$response=err.response)===null||_err$response===void 0?void 0:(_err$response$data=_err$response.data)===null||_err$response$data===void 0?void 0:_err$response$data.message;message/* default */.Ay.error(errorMessage||"Something went wrong, please try again later.");setActionState(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{confirmLoading:false,openPopConfirm:false}));});};return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.actions,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{onClick:()=>onEditIconClick(record),children:/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:"/images/editicon.svg",alt:"Edit Icon"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(popconfirm/* default */.A,{open:actionState.openPopConfirm,placement:"rightBottom",title:"Are you sure?",onConfirm:handleDelete,onCancel:()=>setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{openPopConfirm:false})),okButtonProps:{loading:actionState.confirmLoading},okText:"Yes",cancelText:"No",onOpenChange:visible=>{if(!visible){setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{openPopConfirm:false}));}},children:/*#__PURE__*/(0,jsx_runtime.jsx)(DeleteOutlined/* default */.A,{className:styles_module/* default */.A.bg__red,onClick:showPopconfirm})})]});};/* harmony default export */ const actions = (ActionComponent);
;// ./src/Components/Organisms/BrandingTheme/table-columns.tsx
const BrandingThemeTable=props=>{const{tableData,tableLoading,onEditIconClick,reloadTableData,permissions}=props;const columns=[{title:"S.No",dataIndex:"index",key:"index",render:(_text,_record,index)=>index+1// width: "6%",
},{title:"Title",dataIndex:"title",key:"title",render:title=>/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",children:title})},{title:"Payment Terms",dataIndex:"paymentTerms",key:"paymentTerms",render:paymentTerms=>/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",children:paymentTerms})},{title:"Actions",dataIndex:"actions",key:"actions",render:(_actions,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)(actions,{record:record,onEditIconClick:onEditIconClick,reloadTableData:reloadTableData,permissions:permissions}),width:"120px"}];return/*#__PURE__*/(0,jsx_runtime.jsx)(table/* default */.A,{sticky:true,dataSource:tableData,columns:columns,pagination:false,scroll:{x:991},loading:tableLoading,rowKey:record=>"branding-theme-".concat(record.id)});};/* harmony default export */ const table_columns = (BrandingThemeTable);
// EXTERNAL MODULE: ./src/hooks/index.ts + 5 modules
var hooks = __webpack_require__(91970);
// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 18 modules
var es_form = __webpack_require__(10678);
// EXTERNAL MODULE: ./src/helpers/common.ts
var common = __webpack_require__(88132);
// EXTERNAL MODULE: ./src/Components/Atoms/Input/textarea.tsx
var Input_textarea = __webpack_require__(30386);
;// ./src/Components/Organisms/BrandingTheme/modal.tsx
const BrandingThemeModal=props=>{const{openModal,onCancel,type,record,reloadTableData,permissions:{createBrandingTheme,updateBrandingTheme}}=props;const[form]=es_form/* default */.A.useForm();const module=(0,react.useMemo)(()=>new BrandingTheme/* BrandingThemeModule */.P(),[]);const{data:brandingTheme}=(0,hooks/* useConditionFetchData */.P6)({method:()=>module.getRecordById(record),condition:type==="edit"&&record!==0});const[buttonLoading,setButtonLoading]=(0,react.useState)(false);const onFinish=formValues=>{setButtonLoading(true);switch(type){case"new":{if(createBrandingTheme===true){module.createRecord(formValues).then(res=>{var _res$data;message/* default */.Ay.success((res===null||res===void 0?void 0:(_res$data=res.data)===null||_res$data===void 0?void 0:_res$data.message)||"Branding theme created successfully");reloadTableData();onCancel();}).catch(err=>{const errorMessage=(0,common/* handleError */.H4)(err);message/* default */.Ay.error(errorMessage||"Something went wrong, please try again later.");}).finally(()=>{setButtonLoading(false);});}else{setButtonLoading(false);message/* default */.Ay.error("You don't have permission to create a new record");}break;}case"edit":{if(updateBrandingTheme===true){module.updateRecord(formValues,record).then(()=>{reloadTableData();onCancel();}).catch(err=>{const errorMessage=(0,common/* handleError */.H4)(err);message/* default */.Ay.error(errorMessage||"Something went wrong, please try again later.");}).finally(()=>{setButtonLoading(false);});}else{message/* default */.Ay.error("You don't have permission to update this record");}break;}default:{setButtonLoading(false);break;}}};(0,react.useEffect)(()=>{if(type==="edit"&&brandingTheme){const{title,paymentTerms}=brandingTheme;form.setFieldsValue({title,paymentTerms});}else{form.resetFields();}},[type,brandingTheme]);return/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomModal */.jo,{visible:openModal,closable:true,onCancel:onCancel,showFooter:false,titleText:type==="edit"?"Edit Branding Theme":"Add New Branding Theme",children:/*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.A,{className:styles_module/* default */.A.form,onFinish:onFinish,form:form,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"title",rules:[{required:true,message:"Please add a title"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{label:"Title",asterisk:true,size:"w100"})})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"paymentTerms",rules:[{required:true,message:"Please add payment terms"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Input_textarea/* default */.A,{label:"Payment Terms",placeholder:"Add Payment Terms"})})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.footer,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{size:"normal",fontSize:"sm",onClick:onCancel,type:"plain",children:"Cancel"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{type:"primary",size:"normal",fontSize:"sm",htmlType:"submit",loading:buttonLoading,children:"Submit"})]})]})});};
;// ./src/Components/Organisms/BrandingTheme/index.tsx
const breadCrumbsData=[{text:"Home",isLink:true,path:"/"},{isLink:false,text:"Branding Theme"}];const BrandingTheme_BrandingTheme=()=>{// available permissions for this module
const permissionSlug=(0,common/* getPermissionSlugs */.AH)(BrandingTheme_permissions/* BrandingThemePermissionsEnum */.e);const{userPermissions}=(0,es/* useSelector */.d4)(state=>state.usersReducer);const permissions=userPermissions;const{readBrandingTheme,createBrandingTheme,updateBrandingTheme}=permissions;const module=(0,react.useMemo)(()=>new BrandingTheme/* BrandingThemeModule */.P(),[]);const{data,onRefresh,loading}=(0,hooks/* useFetchData */.Gs)({method:module.getAllRecords});const[modalOpen,setModalOpen]=(0,react.useState)({type:"new",recordId:0,open:false});const onCancelClick=()=>{if(createBrandingTheme===false){message/* default */.Ay.error("You don't have permission to update this record");return;}setModalOpen((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},modalOpen),{},{open:!modalOpen.open,type:"new"}));};const onEditIconClick=record=>{if(updateBrandingTheme===false){message/* default */.Ay.error("You don't have permission to update this record");return;}setModalOpen((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},modalOpen),{},{open:!modalOpen.open,type:"edit",recordId:record.id}));};return/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.A,{permissionSlug:permissionSlug,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* PageHeader */.zY,{heading:"Branding Theme",buttonText:"Add Branding Theme",onButtonClick:onCancelClick,breadCrumbData:breadCrumbsData,showAdd:!!createBrandingTheme}),readBrandingTheme===true&&/*#__PURE__*/(0,jsx_runtime.jsx)(table_columns,{tableData:data,tableLoading:loading,onEditIconClick:onEditIconClick,reloadTableData:onRefresh,permissions:permissions}),readBrandingTheme===false&&/*#__PURE__*/(0,jsx_runtime.jsx)(ErrorCodes/* ErrorCode403 */.$t,{mainMessage:"You don't have permission to view this data"}),modalOpen.open&&/*#__PURE__*/(0,jsx_runtime.jsx)(BrandingThemeModal,{type:modalOpen.type,openModal:modalOpen.open,record:modalOpen.recordId,onCancel:onCancelClick,reloadTableData:onRefresh,permissions:permissions})]});};/* harmony default export */ const Organisms_BrandingTheme = (BrandingTheme_BrandingTheme);

/***/ }),

/***/ 65450:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ BrandingThemeModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
class BrandingThemeModule{constructor(){this.endPoint="branding-theme";/** Get All Records */this.getAllRecords=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint,{params:query});};/** Get Record By Id */this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/").concat(id));};/** Delete Record By Id */this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete("".concat(this.endPoint,"/").concat(id));};/** Create Record */this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(this.endPoint,data);};/** Update Record */this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/").concat(id),data);};}}

/***/ })

}]);