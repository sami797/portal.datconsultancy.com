"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[3417],{

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

/***/ 83417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Organisms_Product)
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
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(48538);
// EXTERNAL MODULE: ./src/Components/Atoms/ErrorCodes/index.tsx + 1 modules
var ErrorCodes = __webpack_require__(36250);
// EXTERNAL MODULE: ./src/Modules/Product/permissions.ts
var Product_permissions = __webpack_require__(31097);
// EXTERNAL MODULE: ./src/Modules/Product/index.ts
var Modules_Product = __webpack_require__(80145);
// EXTERNAL MODULE: ./src/Components/Templates/Layout/index.tsx + 28 modules
var Layout = __webpack_require__(81168);
// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 5 modules
var input = __webpack_require__(16330);
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
;// ./src/Components/Organisms/Product/actions.tsx
const ActionComponent=props=>{const{record,onEditIconClick,reloadTableData,permissions:{deleteProduct}}=props;const module=(0,react.useMemo)(()=>new Modules_Product/* ProductModule */.U(),[]);const[actionState,setActionState]=(0,react.useState)({confirmLoading:false,openPopConfirm:false});const showPopconfirm=()=>setActionState(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{openPopConfirm:true}));const handleDelete=()=>{setActionState(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{confirmLoading:true}));if(deleteProduct===false){message/* default */.Ay.error("You don't have permission to delete this record, please contact your admin.");setActionState(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{confirmLoading:false,openPopConfirm:false}));return;}module.deleteRecord(record.id).then(()=>{setActionState(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{openPopConfirm:false,confirmLoading:false}));reloadTableData();}).catch(err=>{var _err$response,_err$response$data;const errorMessage=err===null||err===void 0?void 0:(_err$response=err.response)===null||_err$response===void 0?void 0:(_err$response$data=_err$response.data)===null||_err$response$data===void 0?void 0:_err$response$data.message;message/* default */.Ay.error(errorMessage||"Something went wrong, please try again later.");setActionState(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{confirmLoading:false,openPopConfirm:false}));});};return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.actions,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{onClick:()=>onEditIconClick(record),children:/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:"/images/editicon.svg",alt:"Edit Icon"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(popconfirm/* default */.A,{open:actionState.openPopConfirm,placement:"rightBottom",title:"Are you sure?",onConfirm:handleDelete,onCancel:()=>setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{openPopConfirm:false})),okButtonProps:{loading:actionState.confirmLoading},okText:"Yes",cancelText:"No",onOpenChange:visible=>{if(!visible){setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{openPopConfirm:false}));}},children:/*#__PURE__*/(0,jsx_runtime.jsx)(DeleteOutlined/* default */.A,{className:styles_module/* default */.A.bg__red,onClick:showPopconfirm})})]});};/* harmony default export */ const actions = (ActionComponent);
;// ./src/Components/Organisms/Product/table-columns.tsx
const ProductTable=props=>{const{tableData,tableLoading,onEditIconClick,reloadTableData,permissions}=props;const[searchTerm,setSearchTerm]=(0,react.useState)("");const columns=[{title:"S.No",dataIndex:"index",key:"index",render:(_text,_record,index)=>index+1,width:"6%"},{title:"Product Code",dataIndex:"productCode",key:"productCode",render:productCode=>/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",children:productCode})},{title:"Title",dataIndex:"title",key:"title",render:title=>/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",children:title})},{title:"Description",dataIndex:"description",key:"description",render:description=>/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",children:description})},{title:"Quantity",dataIndex:"quantity",key:"quantity",render:quantity=>/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",children:quantity})},{title:"Unit Price",dataIndex:"unitPrice",key:"unitPrice",render:unitPrice=>/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",children:unitPrice})},{title:"Account",dataIndex:"Account",key:"Account",render:Account=>/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",children:Account?"".concat(Account===null||Account===void 0?void 0:Account.accountCode," - ").concat(Account===null||Account===void 0?void 0:Account.title):""})},{title:"Tax Rate",dataIndex:"TaxRate",key:"TaxRate",render:TaxRate=>/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",children:TaxRate?"".concat(TaxRate===null||TaxRate===void 0?void 0:TaxRate.taxType," - ").concat(TaxRate===null||TaxRate===void 0?void 0:TaxRate.title," (").concat(TaxRate===null||TaxRate===void 0?void 0:TaxRate.rate,"%)"):""})},{title:"Actions",dataIndex:"actions",key:"actions",render:(_actions,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)(actions,{record:record,onEditIconClick:onEditIconClick,reloadTableData:reloadTableData,permissions:permissions}),width:"120px"}];return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.A,{type:"input",placeholder:"Search by title",onChange:event=>{setSearchTerm(event.target.value);},allowClear:true,style:{border:'1.5px solid var(--color-border)',borderRadius:'0.25rem',width:'25%',marginBottom:'1rem'},prefix:/*#__PURE__*/(0,jsx_runtime.jsx)("img",{style:{padding:'0rem 0.5rem'},src:"/images/searchIcon.svg",alt:""})}),/*#__PURE__*/(0,jsx_runtime.jsx)(table/* default */.A,{sticky:true,dataSource:tableData===null||tableData===void 0?void 0:tableData.filter(item=>{var _item$title,_item$title$toLowerCa,_item$productCode,_item$productCode$toL;return(item===null||item===void 0?void 0:(_item$title=item.title)===null||_item$title===void 0?void 0:(_item$title$toLowerCa=_item$title.toLowerCase())===null||_item$title$toLowerCa===void 0?void 0:_item$title$toLowerCa.includes(searchTerm.toLowerCase()))||(item===null||item===void 0?void 0:(_item$productCode=item.productCode)===null||_item$productCode===void 0?void 0:(_item$productCode$toL=_item$productCode.toLowerCase())===null||_item$productCode$toL===void 0?void 0:_item$productCode$toL.includes(searchTerm.toLowerCase()));}),columns:columns,pagination:false,scroll:{x:991},loading:tableLoading,rowKey:record=>"product-".concat(record.id)})]});};/* harmony default export */ const table_columns = (ProductTable);
// EXTERNAL MODULE: ./src/hooks/index.ts + 5 modules
var hooks = __webpack_require__(91970);
// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 18 modules
var es_form = __webpack_require__(10678);
// EXTERNAL MODULE: ./src/helpers/common.ts
var common = __webpack_require__(88132);
// EXTERNAL MODULE: ./src/Components/Atoms/Input/textarea.tsx
var Input_textarea = __webpack_require__(30386);
// EXTERNAL MODULE: ./src/Modules/Account/index.ts
var Account = __webpack_require__(64913);
// EXTERNAL MODULE: ./src/Modules/TaxRate/index.ts
var TaxRate = __webpack_require__(20761);
;// ./src/Components/Organisms/Product/modal.tsx
const ProductModal=props=>{const{openModal,onCancel,type,record,reloadTableData,permissions:{createProduct,updateProduct}}=props;const[form]=es_form/* default */.A.useForm();const module=(0,react.useMemo)(()=>new Modules_Product/* ProductModule */.U(),[]);const accountModule=(0,react.useMemo)(()=>new Account/* AccountModule */.O(),[]);const taxRateModule=(0,react.useMemo)(()=>new TaxRate/* TaxRateModule */.Q(),[]);const{data:Product}=(0,hooks/* useConditionFetchData */.P6)({method:()=>module.getRecordById(record),condition:type==="edit"&&record!==0});const{data:accounts}=(0,hooks/* useFetchData */.Gs)({method:()=>accountModule.getAllRecords()});const{data:taxRates}=(0,hooks/* useFetchData */.Gs)({method:()=>taxRateModule.getAllRecords()});const[buttonLoading,setButtonLoading]=(0,react.useState)(false);const onFinish=formValues=>{setButtonLoading(true);switch(type){case"new":{if(createProduct===true){module.createRecord(formValues).then(res=>{var _res$data;message/* default */.Ay.success((res===null||res===void 0?void 0:(_res$data=res.data)===null||_res$data===void 0?void 0:_res$data.message)||"Product created successfully");reloadTableData();onCancel();}).catch(err=>{const errorMessage=(0,common/* handleError */.H4)(err);message/* default */.Ay.error(errorMessage||"Something went wrong, please try again later.");}).finally(()=>{setButtonLoading(false);});}else{setButtonLoading(false);message/* default */.Ay.error("You don't have permission to create a new record");}break;}case"edit":{if(updateProduct===true){module.updateRecord(formValues,record).then(()=>{reloadTableData();onCancel();}).catch(err=>{const errorMessage=(0,common/* handleError */.H4)(err);message/* default */.Ay.error(errorMessage||"Something went wrong, please try again later.");}).finally(()=>{setButtonLoading(false);});}else{message/* default */.Ay.error("You don't have permission to update this record");}break;}default:{setButtonLoading(false);break;}}};(0,react.useEffect)(()=>{if(type==="edit"&&Product){const{title,productCode,description,quantity,unitPrice,accountId,taxRateId}=Product;form.setFieldsValue({title,productCode,description,quantity,unitPrice,accountId,taxRateId});}else{form.resetFields();}},[type,Product]);return/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomModal */.jo,{visible:openModal,closable:true,onCancel:onCancel,showFooter:false,titleText:type==="edit"?"Edit Product":"Add New Product",children:/*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.A,{className:styles_module/* default */.A.form,onFinish:onFinish,form:form,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"productCode",rules:[{required:true,message:"Please add a product code"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{label:"Product Code",asterisk:true,size:"w100"})})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"title",rules:[{required:true,message:"Please add a title"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{label:"Title",asterisk:true,size:"w100"})})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"description",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Input_textarea/* default */.A,{label:"Description",placeholder:"Add a description"})})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"quantity",rules:[{required:true,message:"Please add a quantity"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{label:"Quantity",placeHolder:"Add a quantity",asterisk:true,size:"w100"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"unitPrice",rules:[{required:true,message:"Please add a unit price"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{label:"Unit Price",placeHolder:"Add a unit price",asterisk:true,size:"w100"})})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"accountId",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomSelect */.Ae,{label:"Account",options:accounts===null||accounts===void 0?void 0:accounts.map(account=>({label:account.accountCode+" - "+account.title,value:account.id}))})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"taxRateId",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomSelect */.Ae,{label:"Tax Rate",options:taxRates===null||taxRates===void 0?void 0:taxRates.map(taxRate=>({label:taxRate.taxType+" - "+taxRate.title,value:taxRate.id}))})})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.footer,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{size:"normal",fontSize:"sm",onClick:onCancel,type:"plain",children:"Cancel"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{type:"primary",size:"normal",fontSize:"sm",htmlType:"submit",loading:buttonLoading,children:"Submit"})]})]})});};
// EXTERNAL MODULE: ./src/Modules/Xero/index.ts
var Xero = __webpack_require__(83302);
;// ./src/Components/Organisms/Product/index.tsx
const breadCrumbsData=[{text:"Home",isLink:true,path:"/"},{isLink:false,text:"Product"}];const Product=()=>{// available permissions for this module
const permissionSlug=(0,common/* getPermissionSlugs */.AH)(Product_permissions/* ProductPermissionsEnum */.h);const{userPermissions}=(0,es/* useSelector */.d4)(state=>state.usersReducer);const permissions=userPermissions;const{readProduct,createProduct,updateProduct}=permissions;const module=(0,react.useMemo)(()=>new Modules_Product/* ProductModule */.U(),[]);const xeroModule=(0,react.useMemo)(()=>new Xero/* XeroModule */.L(),[]);const{data,onRefresh,loading}=(0,hooks/* useFetchData */.Gs)({method:module.getAllRecords});const[modalOpen,setModalOpen]=(0,react.useState)({type:"new",recordId:0,open:false});const[isLoading,setIsLoading]=(0,react.useState)(false);const onCancelClick=()=>{if(createProduct===false){message/* default */.Ay.error("You don't have permission to update this record");return;}setModalOpen((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},modalOpen),{},{open:!modalOpen.open,type:"new"}));};const onEditIconClick=record=>{if(updateProduct===false){message/* default */.Ay.error("You don't have permission to update this record");return;}setModalOpen((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},modalOpen),{},{open:!modalOpen.open,type:"edit",recordId:record.id}));};const SyncWithXero=async()=>{setIsLoading(true);try{await xeroModule.syncProducts();message/* default */.Ay.success("Synced successfully");onRefresh();}catch(err){const errorMessage=(0,common/* handleError */.H4)(err);message/* default */.Ay.error(errorMessage||"Something went wrong");}finally{setIsLoading(false);}};return/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.A,{permissionSlug:permissionSlug,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* PageHeader */.zY,{heading:"Product",buttonText:"Add Product",onButtonClick:onCancelClick,breadCrumbData:breadCrumbsData,showAdd:!!createProduct,excelExport:/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.A,{loading:isLoading,style:{marginRight:'1rem',height:'2.25rem'},onClick:SyncWithXero,children:"Sync with Xero"})}),readProduct===true&&/*#__PURE__*/(0,jsx_runtime.jsx)(table_columns,{tableData:data,tableLoading:loading,onEditIconClick:onEditIconClick,reloadTableData:onRefresh,permissions:permissions}),readProduct===false&&/*#__PURE__*/(0,jsx_runtime.jsx)(ErrorCodes/* ErrorCode403 */.$t,{mainMessage:"You don't have permission to view this data"}),modalOpen.open&&/*#__PURE__*/(0,jsx_runtime.jsx)(ProductModal,{type:modalOpen.type,openModal:modalOpen.open,record:modalOpen.recordId,onCancel:onCancelClick,reloadTableData:onRefresh,permissions:permissions})]});};/* harmony default export */ const Organisms_Product = (Product);

/***/ }),

/***/ 64913:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ AccountModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
class AccountModule{constructor(){this.endPoint="account";/**Get all Account records
     * @param query - query params
     */this.getAllRecords=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint,{params:query});};/**Get Account record by id
     * @param id - Account id
     */this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/").concat(id));};/**Delete Account record
    * @param id - Account id
    */this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete("".concat(this.endPoint,"/").concat(id));};/**Create new Account record
     * @param data - Account data
     */this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(this.endPoint,data);};/**Update Account record
    * @param data - Account data
    * @param id - Account id
    */this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/").concat(id),data);};}}

/***/ }),

/***/ 80145:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ ProductModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
class ProductModule{constructor(){this.endPoint="product";/** Get All Records */this.getAllRecords=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint,{params:query});};/**Find published client records
	* @param slug - product slug
	*/this.findByCode=slug=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/find-by-product-code/").concat(slug));};/** Get Record By Id
	 * @param id - Product id
	 */this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/").concat(id));};/** Delete Record By Id
	 * @param id - Product id
	 */this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete("".concat(this.endPoint,"/").concat(id));};/** Create Record 
	 * @param data - Product data
	*/this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(this.endPoint,data);};/** Update Record
	 * @param data - Product data
	 */this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/").concat(id),data);};}}

/***/ }),

/***/ 20761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ TaxRateModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
class TaxRateModule{constructor(){this.endPoint="tax-rate";/**Get all TaxRate records
     * @param query - query params
     */this.getAllRecords=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint,{params:query});};/**Get TaxRate record by id
     * @param id - TaxRate id
     */this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/").concat(id));};/**Delete TaxRate record
    * @param id - TaxRate id
    */this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete("".concat(this.endPoint,"/").concat(id));};/**Create new TaxRate record
     * @param data - TaxRate data
     */this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(this.endPoint,data);};/**Update TaxRate record
    * @param data - TaxRate data
    * @param id - TaxRate id
    */this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/").concat(id),data);};}}

/***/ })

}]);