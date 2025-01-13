"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[6577],{

/***/ 26577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ BiometricsBulkUploadJob)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 18 modules
var es_form = __webpack_require__(10678);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 1 modules
var message = __webpack_require__(92759);
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
// EXTERNAL MODULE: ./src/Modules/BulkUploadFormat/Job/index.ts
var Job = __webpack_require__(27684);
// EXTERNAL MODULE: ./src/helpers/constants.ts
var constants = __webpack_require__(65944);
// EXTERNAL MODULE: ./src/Modules/BulkUploadFormat/Format/index.ts
var Format = __webpack_require__(3502);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/Dashboard/BiometricsBulkUploadJob/modal.tsx
const SitePropertyBulkUploadJobModal=props=>{var _recordData$data2,_recordData$data3,_recordData$data3$fil,_recordData$data3$fil2;const{openModal,onCancel,type,record,reloadTableData,permissions:{createBiometricsJob,updateBiometricsJob}}=props;const[form]=es_form/* default */.A.useForm();const module=(0,react.useMemo)(()=>new Job/* BiometricsBulkUploadJobModule */.W(),[]);const uploadFormatModule=(0,react.useMemo)(()=>new Format/* BulkUploadFormatModule */.Z(),[]);const[recordData,setRecordData]=(0,react.useState)();const[uploadFormats,setUploadFormats]=(0,react.useState)([]);const handleErrors=err=>{const error=(0,error_handler/* errorHandler */.r)(err);if(typeof error.message=="string"){setRecordData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},recordData),{},{error:error.message}));}else{let errData=(0,ServerErrorHandler/* HandleServerErrors */.p)(error.message,[]);form.setFields(errData);setRecordData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},recordData),{},{error:""}));}};const handleAlertClose=()=>{setRecordData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},recordData),{},{error:""}));};// on finish for the form
const onFinish=formValues=>{setRecordData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},recordData),{},{buttonLoading:true}));const formData=new FormData();if(type==="new"){const excludeFields=["file"];Object.entries(formValues).forEach(ele=>{if(!excludeFields.includes(ele[0])){formData.append(ele[0],ele[1]);}});if(formValues["file"]&&typeof formValues["file"]!=="string"&&formValues["file"]["fileList"].length>0){formData.append("file",formValues["file"]["fileList"][0]["originFileObj"]);}}switch(type){case"edit":{if(updateBiometricsJob===true){var _recordData$data;module.updateRecord(formValues,recordData===null||recordData===void 0?void 0:(_recordData$data=recordData.data)===null||_recordData$data===void 0?void 0:_recordData$data.id).then(res=>{reloadTableData();onCancel();setRecordData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{buttonLoading:false}));}).catch(err=>{handleErrors(err);setRecordData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{buttonLoading:false}));});}else{setRecordData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{buttonLoading:false}));message/* default */.Ay.error("You don't have permission to update bulk upload job");}break;}case"new":{if(createBiometricsJob===true){module.createRecord(formData).then(res=>{reloadTableData();onCancel();setRecordData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{buttonLoading:false}));}).catch(err=>{handleErrors(err);setRecordData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{buttonLoading:false}));});}else{setRecordData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{buttonLoading:false}));message/* default */.Ay.error("You don't have permission to create bulk upload job");}break;}}};const getUploadFormats=(0,react.useCallback)(()=>{uploadFormatModule.getAllPublishedRecords().then(res=>{var _res$data;setUploadFormats(res===null||res===void 0?void 0:(_res$data=res.data)===null||_res$data===void 0?void 0:_res$data.data);}).catch(err=>{message/* default */.Ay.error(err.response.data.message);});},[uploadFormatModule]);// get data by id for edit
const getDataBySlug=(0,react.useCallback)(()=>{setRecordData({loading:true});module.getRecordById(record).then(res=>{var _res$data2,_res$data2$data,_res$data3;const organization=res===null||res===void 0?void 0:(_res$data2=res.data)===null||_res$data2===void 0?void 0:(_res$data2$data=_res$data2.data)===null||_res$data2$data===void 0?void 0:_res$data2$data.organization;const data=res===null||res===void 0?void 0:(_res$data3=res.data)===null||_res$data3===void 0?void 0:_res$data3.data;setRecordData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},res.data),{},{loading:false}));form.setFieldsValue((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},data),{},{organizationId:organization===null||organization===void 0?void 0:organization.id}));}).catch(err=>{handleErrors(err);});},[form,record,module]);(0,react.useEffect)(()=>{if(type==="edit"){getDataBySlug();// get the upload formats
getUploadFormats();}else{form.resetFields();// get the upload formats
getUploadFormats();}},[type,form]);return/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomModal */.jo,{visible:openModal,closable:true,onCancel:onCancel,titleText:type==="edit"?"Edit Bulk Upload Job":"Add New Bulk Upload Job",showFooter:false,children:recordData!==null&&recordData!==void 0&&recordData.loading?/*#__PURE__*/(0,jsx_runtime.jsx)(Skeletons/* default */.A,{items:10}):/*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.A,{className:styles_module/* default */.A.form,onFinish:onFinish,form:form,children:[(recordData===null||recordData===void 0?void 0:recordData.error)&&/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomErrorAlert */.WZ,{description:recordData===null||recordData===void 0?void 0:recordData.error,isClosable:true,onClose:handleAlertClose}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"title",rules:[{required:true,message:"Please add a title"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{size:"w100",label:"Title",asterisk:true,type:"text"})})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"uploadFormatId",rules:[{required:true,message:"Please add upload format id"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomSelect */.Ae,{label:"Upload Format",asterisk:true,options:uploadFormats===null||uploadFormats===void 0?void 0:uploadFormats.map(item=>({label:item===null||item===void 0?void 0:item.title,value:item===null||item===void 0?void 0:item.id}))})})}),type==="new"&&/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* ImageUploader */.GA,{name:"file"// accept only json file
,accept:".json,.xlsx,.csv"}),type==="edit"&&/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"flex flex-col",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("label",{className:"font-size-normal",children:"File:"}),/*#__PURE__*/(0,jsx_runtime.jsx)("a",{href:"".concat(constants/* RESOURCE_BASE_URL */.to).concat(recordData===null||recordData===void 0?void 0:(_recordData$data2=recordData.data)===null||_recordData$data2===void 0?void 0:_recordData$data2.file),target:"_blank",rel:"noopener noreferrer",className:"color-blue-yp font-size-normal",children:recordData===null||recordData===void 0?void 0:(_recordData$data3=recordData.data)===null||_recordData$data3===void 0?void 0:(_recordData$data3$fil=_recordData$data3.file)===null||_recordData$data3$fil===void 0?void 0:(_recordData$data3$fil2=_recordData$data3$fil.split("public/bulk-upload/"))===null||_recordData$data3$fil2===void 0?void 0:_recordData$data3$fil2.pop()})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.footer,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{size:"normal",fontSize:"sm",onClick:onCancel,type:"plain",children:"Cancel"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{type:"primary",size:"normal",fontSize:"sm",htmlType:"submit",loading:recordData===null||recordData===void 0?void 0:recordData.buttonLoading,children:"Submit"})]})]})});};
// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 5 modules
var input = __webpack_require__(16330);
// EXTERNAL MODULE: ./node_modules/antd/es/popconfirm/index.js + 1 modules
var popconfirm = __webpack_require__(56231);
// EXTERNAL MODULE: ./node_modules/antd/es/spin/index.js
var spin = __webpack_require__(90650);
// EXTERNAL MODULE: ./node_modules/antd/es/table/index.js + 96 modules
var table = __webpack_require__(41821);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DeleteOutlined.js
var DeleteOutlined = __webpack_require__(78433);
// EXTERNAL MODULE: ./src/Components/Atoms/Headings/index.tsx
var Headings = __webpack_require__(35751);
// EXTERNAL MODULE: ./src/Modules/BulkUploadFormat/Job/types.ts
var types = __webpack_require__(1045);
// EXTERNAL MODULE: ./src/helpers/dateHandler.ts
var dateHandler = __webpack_require__(98933);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(98341);
// EXTERNAL MODULE: ./src/services/axiosInstance.ts
var axiosInstance = __webpack_require__(83365);
// EXTERNAL MODULE: ./src/services/tokenService.ts
var tokenService = __webpack_require__(92966);
;// ./src/Components/Organisms/Dashboard/BiometricsBulkUploadJob/table-columns.tsx
const{TextArea}=input/* default */.A;const ActionComponent=props=>{const{record,onEditIconClick,reloadTableData,permissions:{deleteBiometricsJob}}=props;const[actionState,setActionState]=(0,react.useState)({confirmLoading:false,openPopConfirm:false});const module=(0,react.useMemo)(()=>new Job/* BiometricsBulkUploadJobModule */.W(),[]);const handleDelete=()=>{setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{confirmLoading:true}));if(deleteBiometricsJob===false){message/* default */.Ay.error("You don't have permission to delete this record, please contact your admin.");setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{openPopConfirm:false}));return;}module.deleteRecord(record.id).then(_res=>{setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{openPopConfirm:false,confirmLoading:false}));reloadTableData();}).catch(_err=>{setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{confirmLoading:false}));});};const showPopconfirm=()=>{setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{openPopConfirm:true}));};return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.actions,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{onClick:()=>onEditIconClick(record),children:/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:"/images/editicon.svg",alt:""})}),/*#__PURE__*/(0,jsx_runtime.jsx)(popconfirm/* default */.A,{open:actionState.openPopConfirm,placement:"top",title:"Are you sure?",onConfirm:handleDelete,onCancel:()=>setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{openPopConfirm:false})),okButtonProps:{loading:actionState.confirmLoading},okText:"Yes",cancelText:"No",onOpenChange:visible=>{if(!visible){setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{openPopConfirm:false}));}},children:/*#__PURE__*/(0,jsx_runtime.jsx)(DeleteOutlined/* default */.A,{className:styles_module/* default */.A.bg__red,onClick:showPopconfirm})})]});};const Status=props=>{const{record,reloadTableData}=props;const[isProcessing,setIsProcessing]=(0,react.useState)(false);const module=(0,react.useMemo)(()=>new Job/* BiometricsBulkUploadJobModule */.W(),[]);(0,react.useEffect)(()=>{if(record.status===types/* BiometricsJobStatus */.j.processing&&!isProcessing){setIsProcessing(true);}},[record.status]);const onProccessNowClick=()=>{setIsProcessing(true);module.getProcessById(record.id).then(_res=>{message/* default */.Ay.success("Processing started");reloadTableData();}).catch(err=>{var _err$response,_err$response$data;console.error(err===null||err===void 0?void 0:(_err$response=err.response)===null||_err$response===void 0?void 0:(_err$response$data=_err$response.data)===null||_err$response$data===void 0?void 0:_err$response$data.message);});};const onStopProccessClick=()=>{module.stopProcess(record.id).then(_res=>{message/* default */.Ay.success("Job stopped");reloadTableData();}).catch(err=>{var _err$response2,_err$response2$data;console.error(err===null||err===void 0?void 0:(_err$response2=err.response)===null||_err$response2===void 0?void 0:(_err$response2$data=_err$response2.data)===null||_err$response2$data===void 0?void 0:_err$response2$data.message);});};const showStatus=()=>{if(record.status===types/* BiometricsJobStatus */.j.completed){return/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:"Processed"});}else{if(isProcessing){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"text-center",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(spin/* default */.A,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:"Processing in background, you can close the tab"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{onClick:onStopProccessClick,size:"xs",type:"outlined",style:{margin:"auto"},children:"Stop"})]});}else{return/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{onClick:onProccessNowClick,size:"xs",type:"outlined",children:"Process Now"});}}};return showStatus();};function TableComponent(props){const{tableData,tableLoading,onEditIconClick,reloadTableData}=props;const{userPermissions}=(0,es/* useSelector */.d4)(state=>state.usersReducer);const permissions=userPermissions;const access_token=tokenService/* default */.A.getLocalAccessToken();const columns=[{title:"S.No",dataIndex:"index",key:"index",render:(_text,_record,index)=>index+1,width:"5%"},{title:"Title",dataIndex:"title",key:"title",render:(title,record)=>/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:title}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"xs",children:"ID: ".concat(record.id)}),/*#__PURE__*/(0,jsx_runtime.jsx)("a",{href:"".concat(axiosInstance/* BASE_URL */.C,"resources/all/").concat(record.file,"?authKey=").concat(access_token),target:"_blank",rel:"noreferrer",children:"Preview"})]})},{title:"Failed Report",dataIndex:"failedReport",key:"failedReport",render:(_failedReport,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)(TextArea,{rows:4,value:JSON.stringify(record.failedReport,null,2)}),width:"300px"},{title:"Status",dataIndex:"processed",key:"processed",render:(_processed,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Status,{record:record,reloadTableData:reloadTableData})}),className:"text-center"},{title:"Date",dataIndex:"addedDate",key:"addedDate",render:(addedDate,record)=>/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:"Added: ".concat((0,dateHandler/* convertDate */.ic)(addedDate,"dd M,yy"))}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:"Processed: ".concat((0,dateHandler/* convertDate */.ic)(record.processeStartDate,"dd M,yy"))})]})},{title:"Others",dataIndex:"others",key:"others",render:(_others,record)=>/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:"Success: ".concat(record.success)}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:"Failed: ".concat(record.failed)}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:"Total records: ".concat(record.totalRecords)})]})},{title:"Actions",dataIndex:"actions",key:"actions",render:(_text,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)(ActionComponent,{record:record,onEditIconClick:onEditIconClick,reloadTableData:reloadTableData,permissions:permissions})}];return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module/* default */.A.antdTableWrapper,children:/*#__PURE__*/(0,jsx_runtime.jsx)(table/* default */.A,{sticky:true,dataSource:tableData,columns:columns,pagination:false,scroll:{x:991},loading:tableLoading,rowKey:record=>"site-prop-bulk-upload-".concat(record.id)})});}
// EXTERNAL MODULE: ./src/helpers/useDebounce.ts
var useDebounce = __webpack_require__(28173);
// EXTERNAL MODULE: ./src/Modules/BulkUploadFormat/Job/permissions.ts
var Job_permissions = __webpack_require__(69064);
// EXTERNAL MODULE: ./src/Components/Atoms/ErrorCodes/index.tsx + 1 modules
var ErrorCodes = __webpack_require__(36250);
// EXTERNAL MODULE: ./src/Components/Templates/Layout/index.tsx + 28 modules
var Layout = __webpack_require__(81168);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(42074);
// EXTERNAL MODULE: ./src/helpers/common.ts
var common = __webpack_require__(88132);
;// ./src/Components/Organisms/Dashboard/BiometricsBulkUploadJob/index.tsx
// import styles from "./styles.module.scss";
const breadCrumbsData=[{text:"Home",isLink:true,path:"/"},{isLink:true,text:"Biometrics",path:"/biometrics"},{isLink:false,text:"Biometrics Bulk Upload Job"}];// type SelectedFiltersTypes = {
// 	type: string;
// 	slug: string;
// 	locationUrl: string;
// 	country: number;
// }
function BiometricsBulkUploadJobSettings(){var _moduleData$meta,_moduleData$meta2,_moduleData$meta3,_moduleData$meta4;// available permissions for this module
const permissionSlug=(0,common/* getPermissionSlugs */.AH)(Job_permissions/* BulkUploadJobPermissionsEnum */.Y);const{userPermissions}=(0,es/* useSelector */.d4)(state=>state.usersReducer);const[searchParams,setSearchParams]=(0,dist/* useSearchParams */.ok)();const permissions=userPermissions;const{readBiometricsJob,createBiometricsJob,updateBiometricsJob}=permissions;const[currentEditType,setcurrentEditType]=(0,react.useState)({editType:"new",recordId:0,openModal:searchParams.get("openModal")==="true"?true:false});const module=(0,react.useMemo)(()=>new Job/* BiometricsBulkUploadJobModule */.W(),[]);const[searchTerm,setSearchTerm]=(0,react.useState)("");const debouncedSearchTerm=(0,useDebounce/* useDebounce */.d)(searchTerm,500);// const [selectedFilters, setSelectedFilters] = useState<SelectedFiltersTypes>({
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
const[moduleData,setModuleData]=(0,react.useState)({isLoading:false,error:{},data:[]});const onCancelClick=()=>{if(createBiometricsJob===false){message/* default */.Ay.error("You don't have permission to create new record");return;}setcurrentEditType((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},currentEditType),{},{openModal:!currentEditType.openModal,editType:"new"}));};const onEditIconClick=record=>{if(updateBiometricsJob===false){message/* default */.Ay.error("You don't have permission to update this record");return;}setcurrentEditType((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},currentEditType),{},{editType:"edit",recordId:record.id,openModal:true}));};const reloadTableData=(0,react.useCallback)(query=>{setModuleData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},moduleData),{},{loading:true}));module.getAllRecords(query).then(res=>{setModuleData(res.data);}).catch(err=>{var _err$response,_err$response$data;message/* default */.Ay.error((_err$response=err.response)===null||_err$response===void 0?void 0:(_err$response$data=_err$response.data)===null||_err$response$data===void 0?void 0:_err$response$data.message);});},[moduleData,module]);// Search Effect 
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
(0,react.useEffect)(()=>{searchParams.set("openModal",currentEditType.openModal.toString());setSearchParams(searchParams);},[currentEditType.openModal]);return/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.A,{permissionSlug:permissionSlug,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* PageHeader */.zY,{heading:"Biometrics Bulk Upload Job",buttonText:"New Upload Job",onButtonClick:onCancelClick,breadCrumbData:breadCrumbsData,showAdd:createBiometricsJob===true?true:false// filters={
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
}),readBiometricsJob===true&&/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TableComponent,{tableData:moduleData===null||moduleData===void 0?void 0:moduleData.data,tableLoading:moduleData.loading,onEditIconClick:onEditIconClick,reloadTableData:reloadTableData}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Pagination */.dK,{total:moduleData===null||moduleData===void 0?void 0:(_moduleData$meta=moduleData.meta)===null||_moduleData$meta===void 0?void 0:_moduleData$meta.total,current:moduleData===null||moduleData===void 0?void 0:(_moduleData$meta2=moduleData.meta)===null||_moduleData$meta2===void 0?void 0:_moduleData$meta2.page,defaultPageSize:moduleData!==null&&moduleData!==void 0&&(_moduleData$meta3=moduleData.meta)!==null&&_moduleData$meta3!==void 0&&_moduleData$meta3.perPage?moduleData===null||moduleData===void 0?void 0:(_moduleData$meta4=moduleData.meta)===null||_moduleData$meta4===void 0?void 0:_moduleData$meta4.perPage:10,pageSizeOptions:[10,20,50,100],onChange:onPaginationChange})]}),readBiometricsJob===false&&/*#__PURE__*/(0,jsx_runtime.jsx)(ErrorCodes/* ErrorCode403 */.$t,{mainMessage:"You don't have permission to view this data"}),currentEditType.openModal&&/*#__PURE__*/(0,jsx_runtime.jsx)(SitePropertyBulkUploadJobModal,{record:currentEditType.recordId,type:currentEditType.editType,reloadTableData:()=>{var _moduleData$meta5,_moduleData$meta6;return reloadTableData({page:moduleData===null||moduleData===void 0?void 0:(_moduleData$meta5=moduleData.meta)===null||_moduleData$meta5===void 0?void 0:_moduleData$meta5.page,perPage:moduleData===null||moduleData===void 0?void 0:(_moduleData$meta6=moduleData.meta)===null||_moduleData$meta6===void 0?void 0:_moduleData$meta6.perPage// type: selectedFilters.type || undefined,
// slug: selectedFilters.slug || undefined,
// locationUrl: selectedFilters.locationUrl ? [selectedFilters.locationUrl] : undefined,
// country: selectedFilters.country > 0 ? selectedFilters.country : undefined,
});},onCancel:onCancelClick,openModal:currentEditType.openModal,permissions:permissions})]});}/* harmony default export */ const BiometricsBulkUploadJob = (BiometricsBulkUploadJobSettings);

/***/ }),

/***/ 3502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ BulkUploadFormatModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
class BulkUploadFormatModule{constructor(){this.endPoint="bulk-upload-format";this.getAllRecords=queryData=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint,{params:queryData});};this.getAllPublishedRecords=queryData=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint+"/find-published",{params:queryData});};this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/").concat(id));};this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete("".concat(this.endPoint,"/").concat(id));};this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(this.endPoint+"/",data);};this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/").concat(id),data);};}}

/***/ }),

/***/ 27684:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ BiometricsBulkUploadJobModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
/* harmony import */ var _Common_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21073);
class BiometricsBulkUploadJobModule{constructor(){this.endPoint="biometrics-job";this.getAllRecords=queryData=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint,{params:queryData});};this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/").concat(id));};/**Get process by id
     * @param id - process id
     */this.getProcessById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/process/").concat(id));};this.stopProcess=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/stop/").concat(id));};this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete("".concat(this.endPoint,"/").concat(id));};this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(this.endPoint+"/",data,{headers:_Common_config__WEBPACK_IMPORTED_MODULE_1__/* .FormDataHeader */ .Y});};this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/").concat(id),data);};}}

/***/ }),

/***/ 69064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ BulkUploadJobPermissionsEnum)
/* harmony export */ });
let BulkUploadJobPermissionsEnum=/*#__PURE__*/function(BulkUploadJobPermissionsEnum){BulkUploadJobPermissionsEnum["CREATE"]="createBiometricsJob";BulkUploadJobPermissionsEnum["UPDATE"]="updateBiometricsJob";BulkUploadJobPermissionsEnum["DELETE"]="deleteBiometricsJob";BulkUploadJobPermissionsEnum["READ"]="readBiometricsJob";BulkUploadJobPermissionsEnum["ROLLBACK"]="rollbackBiometricsJob";return BulkUploadJobPermissionsEnum;}({});

/***/ }),

/***/ 1045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ BiometricsJobStatus)
/* harmony export */ });
let BiometricsJobStatus=/*#__PURE__*/function(BiometricsJobStatus){BiometricsJobStatus[BiometricsJobStatus["new"]=1]="new";BiometricsJobStatus[BiometricsJobStatus["processing"]=2]="processing";BiometricsJobStatus[BiometricsJobStatus["completed"]=3]="completed";BiometricsJobStatus[BiometricsJobStatus["failed"]=4]="failed";BiometricsJobStatus[BiometricsJobStatus["rollback"]=5]="rollback";BiometricsJobStatus[BiometricsJobStatus["force_stopped"]=6]="force_stopped";return BiometricsJobStatus;}({});

/***/ })

}]);