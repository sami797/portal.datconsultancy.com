"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[4002],{

/***/ 54002:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Dashboard_CompanyAssets)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 18 modules
var es_form = __webpack_require__(10678);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 1 modules
var message = __webpack_require__(92759);
// EXTERNAL MODULE: ./node_modules/antd/es/select/index.js + 30 modules
var es_select = __webpack_require__(97554);
// EXTERNAL MODULE: ./node_modules/antd/es/empty/index.js + 2 modules
var empty = __webpack_require__(90247);
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
// EXTERNAL MODULE: ./src/Modules/CompanyAsset/index.ts
var CompanyAsset = __webpack_require__(23803);
// EXTERNAL MODULE: ./src/helpers/commonEnums.ts
var commonEnums = __webpack_require__(2360);
// EXTERNAL MODULE: ./src/helpers/common.ts
var common = __webpack_require__(88132);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/Dashboard/CompanyAssets/modal.tsx
const CompanyAssetModal=props=>{var _recordData$data,_Object$entries;const{openModal,onCancel,type,record,reloadTableData,permissions:{createCompanyAsset,updateCompanyAsset}}=props;const[form]=es_form/* default */.A.useForm();const module=new CompanyAsset/* CompanyAssetModule */.q();const[recordData,setRecordData]=(0,react.useState)();const handleErrors=err=>{const error=(0,error_handler/* errorHandler */.r)(err);if(typeof error.message=="string"){setRecordData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},recordData),{},{error:error.message}));}else{let errData=(0,ServerErrorHandler/* HandleServerErrors */.p)(error.message,[]);form.setFields(errData);setRecordData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},recordData),{},{error:""}));}};const handleAlertClose=()=>{setRecordData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},recordData),{},{error:""}));};const getDataBySlug=(0,react.useCallback)(()=>{module.getRecordById(record).then(res=>{if(res.data&&res.data.data){form.setFieldsValue((0,objectSpread2/* default */.A)({},res.data.data));setRecordData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},res.data),{},{loading:false}));}}).catch(err=>{handleErrors(err);});},[form,record,module]);(0,react.useEffect)(()=>{if(type==="edit"){setRecordData({loading:true});getDataBySlug();}else{form.resetFields();}},[]);const onFinish=formValues=>{setRecordData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},recordData),{},{buttonLoading:true}));switch(type){case"edit":{if(updateCompanyAsset===true){module.updateRecord(formValues,record).then(res=>{reloadTableData();onCancel();setRecordData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{buttonLoading:false}));}).catch(err=>{handleErrors(err);setRecordData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{buttonLoading:false}));});}else{setRecordData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{buttonLoading:false}));message/* default */.Ay.error("You don't have permission to update this record");}break;}case"new":{if(createCompanyAsset===true){module.createRecord(formValues).then(res=>{reloadTableData();onCancel();setRecordData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{buttonLoading:false}));}).catch(err=>{handleErrors(err);setRecordData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{buttonLoading:false}));});}else{setRecordData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{buttonLoading:false}));message/* default */.Ay.error("You don't have permission to create this record");}break;}}};return/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomModal */.jo,{visible:openModal,closable:true,onCancel:onCancel,titleText:type==="edit"?"Edit Asset":"Add New Asset",showFooter:false,children:recordData!==null&&recordData!==void 0&&recordData.loading?/*#__PURE__*/(0,jsx_runtime.jsx)(Skeletons/* default */.A,{items:3}):/*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.A,{className:styles_module/* default */.A.form,onFinish:onFinish,form:form,children:[(recordData===null||recordData===void 0?void 0:recordData.error)&&/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomErrorAlert */.WZ,{description:recordData===null||recordData===void 0?void 0:recordData.error,isClosable:true,onClose:handleAlertClose}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"assetName",rules:[{required:true,message:"Please add a name"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{size:"w100",label:"Name",asterisk:true,type:"text",placeHolder:"Enter asset name"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"assetDetail",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{size:"w100",label:"Detail",type:"text"})})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"code",rules:[{required:true,message:"Please add a code"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{size:"w100",label:"Code",asterisk:true,type:"text",placeHolder:"Enter code"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"quantity",rules:[{required:true,message:"Please add quantity"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{size:"w100",label:"Quantity",type:"number",asterisk:true,defaultValue:type==="edit"?recordData===null||recordData===void 0?void 0:recordData.data.quantity:undefined})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.A.Item,{name:"type",rules:[{required:true,message:"Please select a department"}],children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("label",{className:"font-size-sm",children:["Type  ",/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"color-red-yp",children:"*"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.A,{allowClear:true,style:{width:"100%"},defaultValue:recordData===null||recordData===void 0?void 0:(_recordData$data=recordData.data)===null||_recordData$data===void 0?void 0:_recordData$data.type,placeholder:"Search for the asset type",className:"selectAntdCustom",onChange:value=>form.setFieldsValue({type:value}),showSearch:true,onSearch:value=>{},optionFilterProp:"label",options:(_Object$entries=Object.entries(commonEnums/* CompanyAssetTypeEnum */.$H))===null||_Object$entries===void 0?void 0:_Object$entries.map(_ref=>{let[key,value]=_ref;return{label:(0,common/* capitalize */.ZH)(key.replace("_"," ")),value:Number(value)};}),notFoundContent:/*#__PURE__*/(0,jsx_runtime.jsx)(empty/* default */.A,{image:"https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg",imageStyle:{height:100},description:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:"No data found, Please search for the type"})})})]})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"d-flex justify-end",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{size:"normal",fontSize:"sm",onClick:onCancel,type:"plain",children:"Cancel"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{type:"primary",size:"normal",fontSize:"sm",htmlType:"submit",loading:recordData===null||recordData===void 0?void 0:recordData.buttonLoading,children:type==="edit"?"Edit Asset":"Add Asset"})]})]})});};
// EXTERNAL MODULE: ./node_modules/antd/es/popconfirm/index.js + 1 modules
var popconfirm = __webpack_require__(56231);
// EXTERNAL MODULE: ./node_modules/antd/es/table/index.js + 96 modules
var table = __webpack_require__(41821);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DeleteOutlined.js
var DeleteOutlined = __webpack_require__(78433);
// EXTERNAL MODULE: ./src/Components/Atoms/Headings/index.tsx
var Headings = __webpack_require__(35751);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(98341);
;// ./src/Components/Organisms/Dashboard/CompanyAssets/table-columns.tsx
const ActionComponent=props=>{const{record,onEditIconClick,reloadTableData,permissions:{deleteCompanyAsset}}=props;const[actionState,setActionState]=(0,react.useState)({confirmLoading:false,openPopConfirm:false});const module=new CompanyAsset/* CompanyAssetModule */.q();const handleDelete=()=>{setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{confirmLoading:true}));if(deleteCompanyAsset===false){message/* default */.Ay.error("You don't have permission to delete this record, please contact your admin.");setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{openPopConfirm:false}));return;}module.deleteRecord(record.id).then(res=>{setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{openPopConfirm:false,confirmLoading:false}));reloadTableData();}).catch(err=>{setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{confirmLoading:false}));});};const showPopconfirm=()=>{setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{openPopConfirm:true}));};return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.actions,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{onClick:()=>onEditIconClick(record),children:/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:"/images/editicon.svg",alt:""})}),/*#__PURE__*/(0,jsx_runtime.jsx)(popconfirm/* default */.A,{open:actionState.openPopConfirm,placement:"top",title:"Are you sure?",onConfirm:handleDelete,onCancel:()=>setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{openPopConfirm:false})),okButtonProps:{loading:actionState.confirmLoading},okText:"Yes",cancelText:"No",onOpenChange:visible=>{if(!visible){setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{openPopConfirm:false}));}},children:/*#__PURE__*/(0,jsx_runtime.jsx)(DeleteOutlined/* default */.A,{className:styles_module/* default */.A.bg__red,onClick:showPopconfirm})})]});};function TableComponent(props){const{tableData,tableLoading,onEditIconClick,reloadTableData,meta,filters}=props;const{userPermissions}=(0,es/* useSelector */.d4)(state=>state.usersReducer);const permissions=userPermissions;const module=new CompanyAsset/* CompanyAssetModule */.q();const columns=[{title:"S.No",dataIndex:"index",key:"index",render:(text,record,index)=>index+1,width:"5%"},{title:"Name",dataIndex:"assetName",key:"assetName",render:(text,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",weight:"bold",children:record.assetName})},{title:"Detail",dataIndex:"assetDetail",key:"assetDetail",render:(text,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",weight:"bold",children:text})})},{title:"Code",dataIndex:"code",key:"code",render:(text,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",weight:"bold",children:text})})},{title:"Quantity",dataIndex:"quantity",key:"quantity",render:(text,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",weight:"bold",children:text})})},{title:"Actions",dataIndex:"actions",key:"actions",render:(text,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)(ActionComponent,{record:record,onEditIconClick:onEditIconClick,reloadTableData:reloadTableData,permissions:permissions})}];return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module/* default */.A.antdTableWrapper,children:/*#__PURE__*/(0,jsx_runtime.jsx)(table/* default */.A,{sticky:true,dataSource:tableData,columns:columns,scroll:{x:991},loading:tableLoading,rowKey:record=>"project-type-".concat(record.id),pagination:{current:meta===null||meta===void 0?void 0:meta.page,total:meta===null||meta===void 0?void 0:meta.total,hideOnSinglePage:true,pageSize:meta===null||meta===void 0?void 0:meta.perPage,onChange(page,pageSize){reloadTableData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},filters),{},{page:page,perPage:pageSize}));}}})});}
// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 5 modules
var input = __webpack_require__(16330);
// EXTERNAL MODULE: ./src/Components/Atoms/ErrorCodes/index.tsx + 1 modules
var ErrorCodes = __webpack_require__(36250);
// EXTERNAL MODULE: ./src/Modules/CompanyAsset/permissions.ts
var CompanyAsset_permissions = __webpack_require__(16975);
// EXTERNAL MODULE: ./src/Components/Templates/Layout/index.tsx + 28 modules
var Layout = __webpack_require__(81168);
// EXTERNAL MODULE: ./src/hooks/index.ts + 5 modules
var hooks = __webpack_require__(91970);
// EXTERNAL MODULE: ./src/helpers/useDebounce.ts
var useDebounce = __webpack_require__(28173);
;// ./src/Components/Organisms/Dashboard/CompanyAssets/index.tsx
const breadCrumbsData=[{text:"Home",isLink:true,path:"/"},{isLink:false,text:"Company Assets"}];function CompanyAssets(){// available permissions for this module
const permissionSlug=(0,common/* getPermissionSlugs */.AH)(CompanyAsset_permissions/* CompanyAssetPermissionsEnum */.L);const{userPermissions}=(0,es/* useSelector */.d4)(state=>state.usersReducer);const permissions=userPermissions;const{readCompanyAsset,createCompanyAsset,updateCompanyAsset}=permissions;const[filters,setFilters]=(0,react.useState)({code:undefined,assetName:undefined,type:undefined,page:1,perPage:10});const[currentEditType,setcurrentEditType]=(0,react.useState)({editType:"new",recordId:0,openModal:false});const debouncedName=(0,useDebounce/* useDebounce */.d)(filters.assetName,500);(0,react.useEffect)(()=>{onRefresh(filters);},[debouncedName]);const module=new CompanyAsset/* CompanyAssetModule */.q();const{data,onRefresh,setData,loading,meta}=(0,hooks/* useFetchData */.Gs)({method:module.getAllRecords,initialQuery:(0,objectSpread2/* default */.A)({},filters)});const onCancelClick=()=>{if(createCompanyAsset===false){message/* default */.Ay.error("You don't have permission to create new record");return;}setcurrentEditType((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},currentEditType),{},{openModal:!currentEditType.openModal,editType:"new"}));};const onEditIconClick=record=>{if(updateCompanyAsset===false){message/* default */.Ay.error("You don't have permission to update this record");return;}setcurrentEditType((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},currentEditType),{},{editType:"edit",recordId:record.id,openModal:true}));};return/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.A,{permissionSlug:permissionSlug,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* PageHeader */.zY,{heading:"Company Assets",buttonText:"Add Asset",onButtonClick:onCancelClick,breadCrumbData:breadCrumbsData,showAdd:createCompanyAsset===true?true:false,filters:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.A,{type:"input",placeholder:"Asset Name",name:"assetName",onChange:event=>{const _temp=(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},filters),{},{assetName:event.target.value});setFilters(_temp);},value:filters.assetName,allowClear:true,style:{border:'1.5px solid var(--color-border)',borderRadius:'0.25rem'},prefix:/*#__PURE__*/(0,jsx_runtime.jsx)("img",{style:{padding:'0rem 0.5rem'},src:"/images/searchIcon.svg",alt:""})})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"input",label:"Code",name:"code",withSearch:false,onChange:event=>{const _temp=(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},filters),{},{code:event.target.value});setFilters(_temp);},value:filters.code,onReset:()=>{const _temp=(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},filters),{},{code:undefined});setFilters(_temp);onRefresh(_temp);},onUpdate:()=>onRefresh(filters)})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"radio",label:"Type",name:"type",withSearch:false,options:Object.entries(commonEnums/* CompanyAssetTypeEnum */.$H).map(_ref=>{let[key,value]=_ref;return{label:(0,common/* capitalize */.ZH)(key===null||key===void 0?void 0:key.replaceAll("_"," ")),value:value};}),onChange:event=>{const _temp=(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},filters),{},{type:event.target.value});setFilters(_temp);},value:filters.type,onReset:()=>{const _temp=(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},filters),{},{type:undefined});setFilters(_temp);onRefresh(_temp);},onUpdate:()=>onRefresh(filters)})})]})}),readCompanyAsset===true&&/*#__PURE__*/(0,jsx_runtime.jsx)(TableComponent,{tableData:data,tableLoading:loading,onEditIconClick:onEditIconClick,reloadTableData:onRefresh,meta:meta,filters:filters}),readCompanyAsset===false&&/*#__PURE__*/(0,jsx_runtime.jsx)(ErrorCodes/* ErrorCode403 */.$t,{mainMessage:"You don't have permission to view this data"}),currentEditType.openModal&&/*#__PURE__*/(0,jsx_runtime.jsx)(CompanyAssetModal,{record:currentEditType.recordId,type:currentEditType.editType,reloadTableData:()=>onRefresh(),onCancel:onCancelClick,openModal:currentEditType.openModal,permissions:permissions})]});}/* harmony default export */ const Dashboard_CompanyAssets = (CompanyAssets);

/***/ }),

/***/ 23803:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ })

}]);