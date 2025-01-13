"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[7387],{

/***/ 87387:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Dashboard_TaxRate)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 18 modules
var es_form = __webpack_require__(10678);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 1 modules
var message = __webpack_require__(92759);
// EXTERNAL MODULE: ./node_modules/antd/es/input-number/index.js + 10 modules
var input_number = __webpack_require__(40202);
// EXTERNAL MODULE: ./src/Components/Atoms/index.tsx + 12 modules
var Atoms = __webpack_require__(9394);
// EXTERNAL MODULE: ./src/Components/Organisms/Common/styles.module.scss
var styles_module = __webpack_require__(96019);
// EXTERNAL MODULE: ./src/Components/Organisms/Skeletons/index.tsx
var Skeletons = __webpack_require__(70619);
// EXTERNAL MODULE: ./src/Components/Atoms/ServerErrorHandler/index.tsx
var ServerErrorHandler = __webpack_require__(13321);
// EXTERNAL MODULE: ./src/helpers/error-handler.ts
var error_handler = __webpack_require__(38266);
// EXTERNAL MODULE: ./src/Modules/TaxRate/index.ts
var TaxRate = __webpack_require__(20761);
// EXTERNAL MODULE: ./src/Modules/Country/index.ts
var Country = __webpack_require__(83584);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/Dashboard/TaxRate/modal.tsx
const TaxRateModal=props=>{const{openModal,onCancel,type,record,reloadTableData,permissions:{createTaxRate,updateTaxRate},callback}=props;const[form]=es_form/* default */.A.useForm();const module=new TaxRate/* TaxRateModule */.Q();const countryModule=(0,react.useMemo)(()=>new Country/* CountryModule */.j(),[]);const[recordData,setRecordData]=(0,react.useState)();const handleErrors=err=>{const error=(0,error_handler/* errorHandler */.r)(err);if(typeof error.message=="string"){setRecordData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},recordData),{},{error:error.message}));}else{let errData=(0,ServerErrorHandler/* HandleServerErrors */.p)(error.message,[]);form.setFields(errData);setRecordData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},recordData),{},{error:""}));}};const handleAlertClose=()=>{setRecordData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},recordData),{},{error:""}));};const getDataBySlug=(0,react.useCallback)(()=>{module.getRecordById(record).then(res=>{if(res.data&&res.data.data){form.setFieldsValue((0,objectSpread2/* default */.A)({},res.data.data));setRecordData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},res.data),{},{loading:false}));}}).catch(err=>{handleErrors(err);});},[form,record,module]);(0,react.useEffect)(()=>{if(type==="edit"){setRecordData({loading:true});getDataBySlug();}else{form.resetFields();}},[]);const onFinish=formValues=>{setRecordData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},recordData),{},{buttonLoading:true}));switch(type){case"edit":{if(updateTaxRate===true){module.updateRecord(formValues,record).then(res=>{reloadTableData();onCancel();setRecordData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{buttonLoading:false}));}).catch(err=>{handleErrors(err);setRecordData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{buttonLoading:false}));});}else{setRecordData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{buttonLoading:false}));message/* default */.Ay.error("You don't have permission to update this record");}break;}case"new":{if(createTaxRate===true){module.createRecord(formValues).then(res=>{const{data}=res===null||res===void 0?void 0:res.data;reloadTableData();callback&&callback(data===null||data===void 0?void 0:data.id);onCancel();setRecordData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{buttonLoading:false}));}).catch(err=>{handleErrors(err);setRecordData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{buttonLoading:false}));});}else{setRecordData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{buttonLoading:false}));message/* default */.Ay.error("You don't have permission to create this record");}break;}}};return/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomModal */.jo,{visible:openModal,closable:true,onCancel:onCancel,titleText:type==="edit"?"Edit Tax Rate":"Add New Tax Rate",showFooter:false,children:recordData!==null&&recordData!==void 0&&recordData.loading?/*#__PURE__*/(0,jsx_runtime.jsx)(Skeletons/* default */.A,{items:3}):/*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.A,{className:styles_module/* default */.A.form,onFinish:onFinish,form:form,children:[(recordData===null||recordData===void 0?void 0:recordData.error)&&/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomErrorAlert */.WZ,{description:recordData===null||recordData===void 0?void 0:recordData.error,isClosable:true,onClose:handleAlertClose}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"title",rules:[{required:true,message:"Please add a title"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{size:"w100",label:"Title",asterisk:true,type:"text",placeHolder:"Enter TaxRate title"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"taxType",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{size:"w100",label:"Tax Type",type:"text"})}),/*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.A.Item,{name:"rate",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"font-size-sm",children:"Rate"}),/*#__PURE__*/(0,jsx_runtime.jsx)(input_number/* default */.A,{defaultValue:form.getFieldValue("rate"),onChange:value=>{form.setFieldValue("rate",value);},style:{width:'100%',borderRadius:'0.25rem',border:'2px solid var(--color-border)'},type:"number"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"d-flex justify-end",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{size:"normal",fontSize:"sm",onClick:onCancel,type:"plain",children:"Cancel"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{type:"primary",size:"normal",fontSize:"sm",htmlType:"submit",loading:recordData===null||recordData===void 0?void 0:recordData.buttonLoading,children:type==="edit"?"Edit Tax Rate":"Add Tax Rate"})]})]})});};
// EXTERNAL MODULE: ./node_modules/antd/es/popconfirm/index.js + 1 modules
var popconfirm = __webpack_require__(56231);
// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 5 modules
var input = __webpack_require__(16330);
// EXTERNAL MODULE: ./node_modules/antd/es/table/index.js + 96 modules
var table = __webpack_require__(41821);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DeleteOutlined.js
var DeleteOutlined = __webpack_require__(78433);
// EXTERNAL MODULE: ./src/Components/Atoms/Headings/index.tsx
var Headings = __webpack_require__(35751);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(98341);
// EXTERNAL MODULE: ./src/helpers/common.ts
var common = __webpack_require__(88132);
;// ./src/Components/Organisms/Dashboard/TaxRate/table-columns.tsx
const ActionComponent=props=>{const{record,onEditIconClick,reloadTableData,permissions:{deleteTaxRate}}=props;const[actionState,setActionState]=(0,react.useState)({confirmLoading:false,openPopConfirm:false});const module=new TaxRate/* TaxRateModule */.Q();const handleDelete=()=>{setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{confirmLoading:true}));if(deleteTaxRate===false){message/* default */.Ay.error("You don't have permission to delete this record, please contact your admin.");setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{openPopConfirm:false}));return;}module.deleteRecord(record.id).then(res=>{setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{openPopConfirm:false,confirmLoading:false}));reloadTableData();}).catch(err=>{setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{confirmLoading:false}));});};const showPopconfirm=()=>{setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{openPopConfirm:true}));};return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.actions,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{onClick:()=>onEditIconClick(record),children:/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:"/images/editicon.svg",alt:""})}),/*#__PURE__*/(0,jsx_runtime.jsx)(popconfirm/* default */.A,{open:actionState.openPopConfirm,placement:"top",title:"Are you sure?",onConfirm:handleDelete,onCancel:()=>setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{openPopConfirm:false})),okButtonProps:{loading:actionState.confirmLoading},okText:"Yes",cancelText:"No",onOpenChange:visible=>{if(!visible){setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{openPopConfirm:false}));}},children:/*#__PURE__*/(0,jsx_runtime.jsx)(DeleteOutlined/* default */.A,{className:styles_module/* default */.A.bg__red,onClick:showPopconfirm})})]});};function TableComponent(props){const{tableData,tableLoading,onEditIconClick,reloadTableData,meta,filters}=props;const{userPermissions}=(0,es/* useSelector */.d4)(state=>state.usersReducer);const permissions=userPermissions;const[searchTerm,setSearchTerm]=(0,react.useState)("");const[metaT,setMetaT]=(0,react.useState)({page:(meta===null||meta===void 0?void 0:meta.page)||1,perPage:(meta===null||meta===void 0?void 0:meta.perPage)||10});const columns=[{title:"S.No",dataIndex:"index",key:"index",render:(_text,_record,index)=>(0,common/* getTableRowNumber */.YO)(index,metaT),width:"60px"},{title:"Title",dataIndex:"title",key:"title",render:(text,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",weight:"bold",children:record.title})},{title:"Tax Type",dataIndex:"taxType",key:"taxType",render:(text,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",weight:"bold",children:record===null||record===void 0?void 0:record.taxType})})},{title:"Rate",dataIndex:"rate",key:"rate",render:(text,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",weight:"bold",children:record.rate})})},{title:"Actions",dataIndex:"actions",key:"actions",render:(text,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)(ActionComponent,{record:record,onEditIconClick:onEditIconClick,reloadTableData:reloadTableData,permissions:permissions})}];return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.A,{type:"input",placeholder:"Search by title",onChange:event=>{setSearchTerm(event.target.value);},value:filters.name,allowClear:true,style:{border:'1.5px solid var(--color-border)',borderRadius:'0.25rem',width:'25%',marginBottom:'1rem'},prefix:/*#__PURE__*/(0,jsx_runtime.jsx)("img",{style:{padding:'0rem 0.5rem'},src:"/images/searchIcon.svg",alt:""})}),/*#__PURE__*/(0,jsx_runtime.jsx)(table/* default */.A,{sticky:true,dataSource:tableData===null||tableData===void 0?void 0:tableData.filter(item=>{var _item$title,_item$title$toLowerCa;return item===null||item===void 0?void 0:(_item$title=item.title)===null||_item$title===void 0?void 0:(_item$title$toLowerCa=_item$title.toLowerCase())===null||_item$title$toLowerCa===void 0?void 0:_item$title$toLowerCa.includes(searchTerm.toLowerCase());}),columns:columns,scroll:{x:991},loading:tableLoading,rowKey:record=>"TaxRate-".concat(record.id),pagination:{current:meta===null||meta===void 0?void 0:meta.page,total:meta===null||meta===void 0?void 0:meta.total,hideOnSinglePage:true,pageSize:meta===null||meta===void 0?void 0:meta.perPage,onChange(page,pageSize){setMetaT({page:page,perPage:pageSize});}}})]});}
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(48538);
// EXTERNAL MODULE: ./src/Components/Atoms/ErrorCodes/index.tsx + 1 modules
var ErrorCodes = __webpack_require__(36250);
// EXTERNAL MODULE: ./src/Components/Templates/Layout/index.tsx + 28 modules
var Layout = __webpack_require__(81168);
// EXTERNAL MODULE: ./src/hooks/index.ts + 5 modules
var hooks = __webpack_require__(91970);
// EXTERNAL MODULE: ./src/Modules/TaxRate/permissions.ts
var TaxRate_permissions = __webpack_require__(88545);
// EXTERNAL MODULE: ./src/Modules/Xero/index.ts
var Xero = __webpack_require__(83302);
;// ./src/Components/Organisms/Dashboard/TaxRate/index.tsx
const breadCrumbsData=[{text:"Home",isLink:true,path:"/"},{isLink:false,text:"Tax Rate"}];function TaxRate_TaxRate(){const[isLoading,setIsLoading]=(0,react.useState)(false);// available permissions for this module
const permissionSlug=(0,common/* getPermissionSlugs */.AH)(TaxRate_permissions/* TaxRatePermissionsEnum */.r);const{userPermissions}=(0,es/* useSelector */.d4)(state=>state.usersReducer);const permissions=userPermissions;const{readTaxRate,createTaxRate,updateTaxRate}=permissions;const[filters,setFilters]=(0,react.useState)({page:1,perPage:25});const[currentEditType,setcurrentEditType]=(0,react.useState)({editType:"new",recordId:0,openModal:false});const module=new TaxRate/* TaxRateModule */.Q();const xeroModule=new Xero/* XeroModule */.L();const{data,onRefresh,setData,loading,meta}=(0,hooks/* useFetchData */.Gs)({method:module.getAllRecords,initialQuery:(0,objectSpread2/* default */.A)({},filters)});const onCancelClick=()=>{if(createTaxRate===false){message/* default */.Ay.error("You don't have permission to create new record");return;}setcurrentEditType((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},currentEditType),{},{openModal:!currentEditType.openModal,editType:"new"}));};const onEditIconClick=record=>{if(updateTaxRate===false){message/* default */.Ay.error("You don't have permission to update this record");return;}setcurrentEditType((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},currentEditType),{},{editType:"edit",recordId:record.id,openModal:true}));};const SyncWithXero=async()=>{setIsLoading(true);try{await xeroModule.syncTaxRates();message/* default */.Ay.success("Synced successfully");onRefresh();}catch(err){const errorMessage=(0,common/* handleError */.H4)(err);message/* default */.Ay.error(errorMessage||"Something went wrong");}finally{setIsLoading(false);}};return/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.A,{permissionSlug:permissionSlug,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* PageHeader */.zY,{heading:"Tax Rate",buttonText:"Add Tax Rate",onButtonClick:onCancelClick,breadCrumbData:breadCrumbsData,showAdd:createTaxRate===true?true:false,excelExport:/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.A,{loading:isLoading,style:{marginRight:'1rem',height:'2.25rem'},onClick:SyncWithXero,children:"Sync with Xero"})}),readTaxRate===true&&/*#__PURE__*/(0,jsx_runtime.jsx)(TableComponent,{tableData:data,tableLoading:loading,onEditIconClick:onEditIconClick,reloadTableData:onRefresh,meta:meta,filters:filters}),readTaxRate===false&&/*#__PURE__*/(0,jsx_runtime.jsx)(ErrorCodes/* ErrorCode403 */.$t,{mainMessage:"You don't have permission to view this data"}),currentEditType.openModal&&/*#__PURE__*/(0,jsx_runtime.jsx)(TaxRateModal,{record:currentEditType.recordId,type:currentEditType.editType,reloadTableData:()=>onRefresh(),onCancel:onCancelClick,openModal:currentEditType.openModal,permissions:permissions})]});}/* harmony default export */ const Dashboard_TaxRate = (TaxRate_TaxRate);

/***/ }),

/***/ 83584:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ CountryModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
/* harmony import */ var _Common_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21073);
class CountryModule{constructor(){this.endPoint="country";this.allEndpoint="country/all";this.getAllRecords=()=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.allEndpoint);};this.getAvailableRecords=()=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/available-country"));};this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/").concat(id));};this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete("".concat(this.endPoint,"/").concat(id));};this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(this.endPoint+"/",data,{headers:_Common_config__WEBPACK_IMPORTED_MODULE_1__/* .FormDataHeader */ .Y});};this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/").concat(id),data,{headers:_Common_config__WEBPACK_IMPORTED_MODULE_1__/* .FormDataHeader */ .Y});};}}

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