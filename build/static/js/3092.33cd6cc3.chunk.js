"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[3092],{

/***/ 43092:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ BulkUploadFormat)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./src/Components/Templates/SiteSettings/index.tsx
var SiteSettings = __webpack_require__(16181);
// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 18 modules
var es_form = __webpack_require__(10678);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 1 modules
var message = __webpack_require__(92759);
// EXTERNAL MODULE: ./src/Components/Atoms/index.tsx + 12 modules
var Atoms = __webpack_require__(9394);
// EXTERNAL MODULE: ./src/Components/Organisms/SiteSettings/Common/styles.module.scss
var styles_module = __webpack_require__(41394);
// EXTERNAL MODULE: ./src/Components/Organisms/Skeletons/index.tsx
var Skeletons = __webpack_require__(70619);
// EXTERNAL MODULE: ./src/Components/Atoms/ServerErrorHandler/index.tsx
var ServerErrorHandler = __webpack_require__(13321);
// EXTERNAL MODULE: ./src/helpers/error-handler.ts
var error_handler = __webpack_require__(38266);
// EXTERNAL MODULE: ./src/Modules/BulkUploadFormat/Format/index.ts
var Format = __webpack_require__(3502);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/SiteSettings/BulkUploadFormat/modal.tsx
const SiteBulkUploadFormatModal=props=>{var _recordData$data2,_recordData$data3;const{openModal,onCancel,type,record,reloadTableData,permissions:{createBulkUploadFormat,updateBulkUploadFormat}}=props;const[form]=es_form/* default */.A.useForm();const module=(0,react.useMemo)(()=>new Format/* BulkUploadFormatModule */.Z(),[]);const[recordData,setRecordData]=(0,react.useState)();const handleErrors=err=>{const error=(0,error_handler/* errorHandler */.r)(err);if(typeof error.message=="string"){setRecordData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},recordData),{},{error:error.message}));}else{let errData=(0,ServerErrorHandler/* HandleServerErrors */.p)(error.message,[]);form.setFields(errData);setRecordData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},recordData),{},{error:""}));}};const handleAlertClose=()=>{setRecordData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},recordData),{},{error:""}));};// on finish for the form
const onFinish=formValues=>{setRecordData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},recordData),{},{buttonLoading:true}));switch(type){case"edit":{if(updateBulkUploadFormat===true){var _recordData$data;module.updateRecord(formValues,recordData===null||recordData===void 0?void 0:(_recordData$data=recordData.data)===null||_recordData$data===void 0?void 0:_recordData$data.id).then(res=>{reloadTableData();onCancel();setRecordData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{buttonLoading:false}));}).catch(err=>{handleErrors(err);setRecordData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{buttonLoading:false}));});}else{setRecordData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{buttonLoading:false}));message/* default */.Ay.error("You don't have permission to update bulk upload format");}break;}case"new":{if(createBulkUploadFormat===true){module.createRecord(formValues).then(res=>{reloadTableData();onCancel();setRecordData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{buttonLoading:false}));}).catch(err=>{handleErrors(err);setRecordData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{buttonLoading:false}));});}else{setRecordData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{buttonLoading:false}));message/* default */.Ay.error("You don't have permission to create bulk upload format");}break;}};};// get data by id for edit
const getDataBySlug=(0,react.useCallback)(()=>{setRecordData({loading:true});module.getRecordById(record).then(res=>{var _res$data;const data=res===null||res===void 0?void 0:(_res$data=res.data)===null||_res$data===void 0?void 0:_res$data.data;if(res.data&&data){form.setFieldsValue((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},data),{},{format:JSON.stringify(data===null||data===void 0?void 0:data.format),sample:JSON.stringify(data===null||data===void 0?void 0:data.sample)}));setRecordData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},res.data),{},{loading:false}));}}).catch(err=>{handleErrors(err);});},[form,record,module]);(0,react.useEffect)(()=>{if(type==="edit"){getDataBySlug();}else{form.resetFields();}},[type,form,getDataBySlug]);return/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomModal */.jo,{visible:openModal,closable:true,onCancel:onCancel,titleText:type==="edit"?"Edit Bulk Upload Format ":"Add New Bulk Upload Format",showFooter:false,children:recordData!==null&&recordData!==void 0&&recordData.loading?/*#__PURE__*/(0,jsx_runtime.jsx)(Skeletons/* default */.A,{items:10}):/*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.A,{className:styles_module/* default */.A.form,onFinish:onFinish,form:form,children:[(recordData===null||recordData===void 0?void 0:recordData.error)&&/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomErrorAlert */.WZ,{description:recordData===null||recordData===void 0?void 0:recordData.error,isClosable:true,onClose:handleAlertClose}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"title",rules:[{required:true,message:"Please add a title"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{size:"w100",label:"Title",asterisk:true,type:"text"})})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"comment",rules:[{required:false,message:"Please add a comment"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{size:"w100",label:"Comment",type:"text"})})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"format",rules:[{validator:(rule,value)=>{if(value){try{JSON.parse(value);return Promise.resolve();}catch(e){return Promise.reject("Please enter a valid JSON");}}rule.required=true;rule.message="Please add a format";return Promise.reject(rule.message);}}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{size:"w100",label:"Format",asterisk:true,type:"textArea",defaultValue:JSON.stringify(recordData===null||recordData===void 0?void 0:(_recordData$data2=recordData.data)===null||_recordData$data2===void 0?void 0:_recordData$data2.format,null,2)})})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"sample",rules:[{validator:(rule,value)=>{if(value){try{JSON.parse(value);return Promise.resolve();}catch(e){return Promise.reject("Please enter a valid JSON");}}rule.required=true;rule.message="Please add a sample";return Promise.reject(rule.message);}}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{size:"w100",label:"Sample",asterisk:true,type:"textArea",defaultValue:JSON.stringify(recordData===null||recordData===void 0?void 0:(_recordData$data3=recordData.data)===null||_recordData$data3===void 0?void 0:_recordData$data3.sample,null,2)})})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.footer,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{size:"normal",fontSize:"sm",onClick:onCancel,type:"plain",children:"Cancel"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{type:"primary",size:"normal",fontSize:"sm",htmlType:"submit",loading:recordData===null||recordData===void 0?void 0:recordData.buttonLoading,children:"Submit"})]})]})});};
// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 5 modules
var input = __webpack_require__(16330);
// EXTERNAL MODULE: ./node_modules/antd/es/popconfirm/index.js + 1 modules
var popconfirm = __webpack_require__(56231);
// EXTERNAL MODULE: ./node_modules/antd/es/table/index.js + 96 modules
var table = __webpack_require__(41821);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DeleteOutlined.js
var DeleteOutlined = __webpack_require__(78433);
// EXTERNAL MODULE: ./src/Components/Atoms/Headings/index.tsx
var Headings = __webpack_require__(35751);
// EXTERNAL MODULE: ./src/helpers/dateHandler.ts
var dateHandler = __webpack_require__(98933);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(98341);
;// ./src/Components/Organisms/SiteSettings/BulkUploadFormat/table-columns.tsx
const{TextArea}=input/* default */.A;const ActionComponent=props=>{const{record,onEditIconClick,reloadTableData,permissions:{deleteBulkUploadFormat}}=props;const[actionState,setActionState]=(0,react.useState)({confirmLoading:false,openPopConfirm:false});const module=(0,react.useMemo)(()=>new Format/* BulkUploadFormatModule */.Z(),[]);const handleDelete=()=>{setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{confirmLoading:true}));if(deleteBulkUploadFormat===false){message/* default */.Ay.error("You don't have permission to delete this record, please contact your admin.");setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{openPopConfirm:false}));return;}module.deleteRecord(record.id).then(res=>{setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{openPopConfirm:false,confirmLoading:false}));reloadTableData();}).catch(err=>{setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{confirmLoading:false}));});};const showPopconfirm=()=>{setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{openPopConfirm:true}));};return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.actions,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{onClick:()=>onEditIconClick(record),children:/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:"/images/editicon.svg",alt:""})}),/*#__PURE__*/(0,jsx_runtime.jsx)(popconfirm/* default */.A,{open:actionState.openPopConfirm,placement:"top",title:"Are you sure?",onConfirm:handleDelete,onCancel:()=>setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{openPopConfirm:false})),okButtonProps:{loading:actionState.confirmLoading},okText:"Yes",cancelText:"No",onOpenChange:visible=>{if(!visible){setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{openPopConfirm:false}));}},children:/*#__PURE__*/(0,jsx_runtime.jsx)(DeleteOutlined/* default */.A,{className:styles_module/* default */.A.bg__red,onClick:showPopconfirm})})]});};function TableComponent(props){const{tableData,tableLoading,onEditIconClick,reloadTableData}=props;const{userPermissions}=(0,es/* useSelector */.d4)(state=>state.usersReducer);const permissions=userPermissions;const columns=[{title:"S.No",dataIndex:"index",key:"index",render:(text,record,index)=>index+1,width:"5%"},{title:"Title",dataIndex:"title",key:"title",render:(title,record)=>/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:title}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"xs",children:"ID: ".concat(record.id)})]})},{title:"Comments",dataIndex:"comment",key:"comment",render:comment=>/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:comment})},{title:"Format",dataIndex:"format",key:"format",render:(format,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)(TextArea,{rows:4,value:JSON.stringify(record.format,null,2)})},{title:"Sample",dataIndex:"sample",key:"sample",render:(sample,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)(TextArea,{rows:4,value:JSON.stringify(record.sample,null,2)})},{title:"Date Added",dataIndex:"addedDate",key:"addedDate",render:addedDate=>/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:(0,dateHandler/* convertDate */.ic)(addedDate,"dd M,yy")})},{title:"Actions",dataIndex:"actions",key:"actions",render:(text,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)(ActionComponent,{record:record,onEditIconClick:onEditIconClick,reloadTableData:reloadTableData,permissions:permissions})}];return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module/* default */.A.antdTableWrapper,children:/*#__PURE__*/(0,jsx_runtime.jsx)(table/* default */.A,{sticky:true,dataSource:tableData,columns:columns,pagination:false,scroll:{x:991},loading:tableLoading,rowKey:record=>"site-prop-bulk-upload-".concat(record.id)})});}
// EXTERNAL MODULE: ./src/helpers/useDebounce.ts
var useDebounce = __webpack_require__(28173);
;// ./src/Modules/BulkUploadFormat/Format/permissions.ts
let BulkUploadFormatPermissionsEnum=/*#__PURE__*/function(BulkUploadFormatPermissionsEnum){BulkUploadFormatPermissionsEnum["CREATE"]="createBulkUploadFormat";BulkUploadFormatPermissionsEnum["UPDATE"]="updateBulkUploadFormat";BulkUploadFormatPermissionsEnum["DELETE"]="deleteBulkUploadFormat";BulkUploadFormatPermissionsEnum["READ"]="readBulkUploadFormat";return BulkUploadFormatPermissionsEnum;}({});
// EXTERNAL MODULE: ./src/Components/Atoms/ErrorCodes/index.tsx + 1 modules
var ErrorCodes = __webpack_require__(36250);
// EXTERNAL MODULE: ./src/helpers/common.ts
var common = __webpack_require__(88132);
;// ./src/Components/Organisms/SiteSettings/BulkUploadFormat/index.tsx
// import styles from "./styles.module.scss";
const breadCrumbsData=[{text:"Home",isLink:true,path:"/"},{isLink:true,text:"Site Settings",path:"/siteSettings"},{isLink:false,text:"Bulk Upload Format"}];// type SelectedFiltersTypes = {
// 	type: string;
// 	slug: string;
// 	locationUrl: string;
// 	country: number;
// }
function BulkUploadFormatSettings(){var _moduleData$meta,_moduleData$meta2,_moduleData$meta3,_moduleData$meta4;// available permissions for this module
const permissionSlug=(0,common/* getPermissionSlugs */.AH)(BulkUploadFormatPermissionsEnum);const{userPermissions}=(0,es/* useSelector */.d4)(state=>state.usersReducer);const permissions=userPermissions;const{readBulkUploadFormat,createBulkUploadFormat,updateBulkUploadFormat}=permissions;const[currentEditType,setcurrentEditType]=(0,react.useState)({editType:"new",recordId:0,openModal:false});const module=(0,react.useMemo)(()=>new Format/* BulkUploadFormatModule */.Z(),[]);const[searchTerm,setSearchTerm]=(0,react.useState)("");const debouncedSearchTerm=(0,useDebounce/* useDebounce */.d)(searchTerm,500);// const [selectedFilters, setSelectedFilters] = useState<SelectedFiltersTypes>({
// 	type: "",
// 	slug: "",
// 	country: 0,
// 	locationUrl: "",
// });
// const [reset, setReset] = useState<boolean>(false);
// const onSelected = (event: any) => {
// 	const { name, value } = event?.target
// 	// set the selected value in the state 
// 	setSelectedFilters({
// 		...selectedFilters,
// 		[name]: value
// 	});
// }
// const onSearch = (event: FormEvent<HTMLInputElement>) => {
// 	const value = event.currentTarget.value
// 	setSearchTerm(value);
// }
// const onUpdate = useCallback(() => {
// 	const data = {
// 		type: selectedFilters.type || undefined,
// 		slug: selectedFilters.slug || undefined,
// 		locationUrl: selectedFilters.locationUrl ? [selectedFilters.locationUrl] : undefined,
// 		country: selectedFilters.country > 0 ? selectedFilters.country : undefined,
// 	}
// 	// get the data from the api
// 	module.getAllRecords(data).then((response) => {
// 		setModuleData({
// 			...moduleData,
// 			loading: false,
// 			data: response.data?.data,
// 		});
// 	});
// }, [selectedFilters, module])
const[moduleData,setModuleData]=(0,react.useState)({isLoading:false,error:{},data:[]});const onCancelClick=()=>{if(createBulkUploadFormat===false){message/* default */.Ay.error("You don't have permission to create new record");return;}setcurrentEditType((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},currentEditType),{},{openModal:!currentEditType.openModal,editType:"new"}));};const onEditIconClick=record=>{if(updateBulkUploadFormat===false){message/* default */.Ay.error("You don't have permission to update this record");return;}setcurrentEditType((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},currentEditType),{},{editType:"edit",recordId:record.id,openModal:true}));};const reloadTableData=(0,react.useCallback)(query=>{setModuleData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},moduleData),{},{loading:true}));module.getAllRecords(query).then(res=>{setModuleData(res.data);}).catch(err=>{var _err$response,_err$response$data;message/* default */.Ay.error((_err$response=err.response)===null||_err$response===void 0?void 0:(_err$response$data=_err$response.data)===null||_err$response$data===void 0?void 0:_err$response$data.message);});},[moduleData,module]);// Search Effect 
(0,react.useEffect)(()=>{if(debouncedSearchTerm){reloadTableData({name:debouncedSearchTerm});}else{reloadTableData();}},[debouncedSearchTerm]);const onPaginationChange=(0,react.useCallback)((page,pageSize)=>{setModuleData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},moduleData),{},{loading:true}));const params={page,perPage:pageSize,// type: selectedFilters.type || undefined,
// slug: selectedFilters.slug || undefined,
// locationUrl: selectedFilters.locationUrl ? [selectedFilters.locationUrl] : undefined,
// country: selectedFilters.country > 0 ? selectedFilters.country : undefined,
name:debouncedSearchTerm||undefined};module.getAllRecords(params).then(res=>{setModuleData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},res.data),{},{loading:false}));}).catch(err=>{setModuleData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},moduleData),{},{loading:false}));});},[moduleData,module]);// useEffect(() => {
// 	if (reset) {
// 		onUpdate();
// 	}
// 	// after 2 seconds set reset clicked state to false
// 	const timer = setTimeout(() => {
// 		setReset(false)
// 	}, 2000);
// 	return () => clearTimeout(timer);
// }, [reset, selectedFilters, onUpdate])
return/*#__PURE__*/(0,jsx_runtime.jsxs)(SiteSettings["default"],{permissionSlug:permissionSlug,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* PageHeader */.zY,{heading:"Bulk Upload Format",buttonText:"New Upload Format",onButtonClick:onCancelClick,breadCrumbData:breadCrumbsData,showAdd:createBulkUploadFormat===true?true:false// filters={
// 	<div>
// 		<div>
// 			<CustomInput
// 				placeHolder='Search...'
// 				icon={<img src="/images/searchIcon.svg" alt="Search Icon" />}
// 				size="w100"
// 				value={searchTerm}
// 				onChange={onSearch}
// 			/>
// 		</div>
// 		<div>
// 			<CustomFilter
// 				type="input"
// 				label="Slug"
// 				name="slug"
// 				value={String(selectedFilters?.slug)}
// 				onChange={onSelected}
// 				onReset={() => {
// 					setReset(true)
// 					setSelectedFilters({ ...selectedFilters, slug: "" })
// 				}}
// 				onUpdate={onUpdate}
// 			/>
// 		</div>
// 		<div>
// 			<CustomFilter
// 				type="input"
// 				label="Location Url"
// 				name="locationUrl"
// 				value={String(selectedFilters?.locationUrl)}
// 				onChange={onSelected}
// 				onReset={() => {
// 					setReset(true)
// 					setSelectedFilters({ ...selectedFilters, locationUrl: "" })
// 				}}
// 				onUpdate={onUpdate}
// 			/>
// 		</div>
// 	</div>
// }
}),readBulkUploadFormat===true&&/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TableComponent,{tableData:moduleData===null||moduleData===void 0?void 0:moduleData.data,tableLoading:moduleData.loading,onEditIconClick:onEditIconClick,reloadTableData:reloadTableData}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Pagination */.dK,{total:moduleData===null||moduleData===void 0?void 0:(_moduleData$meta=moduleData.meta)===null||_moduleData$meta===void 0?void 0:_moduleData$meta.total,current:moduleData===null||moduleData===void 0?void 0:(_moduleData$meta2=moduleData.meta)===null||_moduleData$meta2===void 0?void 0:_moduleData$meta2.page,defaultPageSize:moduleData!==null&&moduleData!==void 0&&(_moduleData$meta3=moduleData.meta)!==null&&_moduleData$meta3!==void 0&&_moduleData$meta3.perPage?moduleData===null||moduleData===void 0?void 0:(_moduleData$meta4=moduleData.meta)===null||_moduleData$meta4===void 0?void 0:_moduleData$meta4.perPage:10,pageSizeOptions:[10,20,50,100],onChange:onPaginationChange})]}),readBulkUploadFormat===false&&/*#__PURE__*/(0,jsx_runtime.jsx)(ErrorCodes/* ErrorCode403 */.$t,{mainMessage:"You don't have permission to view this data"}),currentEditType.openModal&&/*#__PURE__*/(0,jsx_runtime.jsx)(SiteBulkUploadFormatModal,{record:currentEditType.recordId,type:currentEditType.editType,reloadTableData:()=>{var _moduleData$meta5,_moduleData$meta6;return reloadTableData({page:moduleData===null||moduleData===void 0?void 0:(_moduleData$meta5=moduleData.meta)===null||_moduleData$meta5===void 0?void 0:_moduleData$meta5.page,perPage:moduleData===null||moduleData===void 0?void 0:(_moduleData$meta6=moduleData.meta)===null||_moduleData$meta6===void 0?void 0:_moduleData$meta6.perPage// type: selectedFilters.type || undefined,
// slug: selectedFilters.slug || undefined,
// locationUrl: selectedFilters.locationUrl ? [selectedFilters.locationUrl] : undefined,
// country: selectedFilters.country > 0 ? selectedFilters.country : undefined,
});},onCancel:onCancelClick,openModal:currentEditType.openModal,permissions:permissions})]});}/* harmony default export */ const BulkUploadFormat = (BulkUploadFormatSettings);

/***/ }),

/***/ 3502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ BulkUploadFormatModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
class BulkUploadFormatModule{constructor(){this.endPoint="bulk-upload-format";this.getAllRecords=queryData=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint,{params:queryData});};this.getAllPublishedRecords=queryData=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint+"/find-published",{params:queryData});};this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/").concat(id));};this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete("".concat(this.endPoint,"/").concat(id));};this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(this.endPoint+"/",data);};this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/").concat(id),data);};}}

/***/ })

}]);