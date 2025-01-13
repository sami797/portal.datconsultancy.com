"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[9788],{

/***/ 88895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Organisms_Transactions)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 1 modules
var message = __webpack_require__(92759);
// EXTERNAL MODULE: ./node_modules/antd/es/segmented/index.js + 2 modules
var segmented = __webpack_require__(84649);
// EXTERNAL MODULE: ./src/Components/Templates/Layout/index.tsx + 28 modules
var Layout = __webpack_require__(81168);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(98341);
// EXTERNAL MODULE: ./src/Components/Atoms/index.tsx + 12 modules
var Atoms = __webpack_require__(9394);
// EXTERNAL MODULE: ./src/Components/Atoms/ErrorCodes/index.tsx + 1 modules
var ErrorCodes = __webpack_require__(36250);
// EXTERNAL MODULE: ./src/Modules/Transactions/index.ts
var Transactions = __webpack_require__(54475);
// EXTERNAL MODULE: ./src/Modules/Transactions/permissions.ts
var Transactions_permissions = __webpack_require__(735);
// EXTERNAL MODULE: ./src/Components/Organisms/Transactions/table-columns.tsx + 4 modules
var table_columns = __webpack_require__(53939);
// EXTERNAL MODULE: ./src/hooks/index.ts + 5 modules
var hooks = __webpack_require__(91970);
// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 18 modules
var es_form = __webpack_require__(10678);
// EXTERNAL MODULE: ./node_modules/antd/es/date-picker/index.js + 56 modules
var date_picker = __webpack_require__(4132);
// EXTERNAL MODULE: ./node_modules/antd/es/input-number/index.js + 10 modules
var input_number = __webpack_require__(40202);
// EXTERNAL MODULE: ./src/Components/Organisms/Common/styles.module.scss
var styles_module = __webpack_require__(96019);
// EXTERNAL MODULE: ./src/Modules/Authorities/index.ts
var Authorities = __webpack_require__(62763);
// EXTERNAL MODULE: ./src/helpers/useDebounce.ts
var useDebounce = __webpack_require__(28173);
// EXTERNAL MODULE: ./src/Components/Atoms/Input/textarea.tsx
var Input_textarea = __webpack_require__(30386);
// EXTERNAL MODULE: ./src/helpers/common.ts
var common = __webpack_require__(88132);
// EXTERNAL MODULE: ./src/Modules/Project/index.ts
var Project = __webpack_require__(50167);
// EXTERNAL MODULE: ./src/services/tokenService.ts
var tokenService = __webpack_require__(92966);
// EXTERNAL MODULE: ./src/helpers/options.ts
var options = __webpack_require__(59179);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(59051);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./src/helpers/constants.ts
var constants = __webpack_require__(65944);
// EXTERNAL MODULE: ./src/Modules/Invoice/index.ts
var Invoice = __webpack_require__(49925);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/Transactions/modal.tsx
const TransactionsModal=props=>{const{openModal,onCancel,type,record,projectId,reloadTableData,permissions:{createTransaction,updateTransaction}}=props;const access_token=tokenService/* default */.A.getLocalAccessToken();const[form]=es_form/* default */.A.useForm();const module=(0,react.useMemo)(()=>new Transactions/* TransactionsModule */.c(),[]);const projectModule=(0,react.useMemo)(()=>new Project/* ProjectModule */.K(),[]);const authorityModule=(0,react.useMemo)(()=>new Authorities/* AuthoritiesModule */.O(),[]);const invoiceModule=(0,react.useMemo)(()=>new Invoice/* InvoiceModule */.O(),[]);const{data:government}=(0,hooks/* useConditionFetchData */.P6)({method:()=>module.getRecordById(record),initialQuery:{onlyGovernmentFees:true},condition:type==="edit"&&record!==0});// Project Search Term
const[searchTermProject,setSearchTermProject]=(0,react.useState)("");const debouncedSearchTermProject=(0,useDebounce/* useDebounce */.d)(searchTermProject,500);// Authority Search Term
// const [searchTermAuthority, setSearchTermAuthority] = useState("");
// const debouncedSearchTermAuthority = useDebounce(searchTermAuthority, 500);
// Invoice Search Term
const[searchTermInvoice,setSearchTermInvoice]=(0,react.useState)("");const debouncedSearchTermInvoice=(0,useDebounce/* useDebounce */.d)(searchTermInvoice,500);const[projectOptions,setProjectOptions]=(0,react.useState)([]);const[authorityOptions,setAuthorityOptions]=(0,react.useState)([]);const[invoiceOptions,setInvoiceOptions]=(0,react.useState)([]);const[buttonLoading,setButtonLoading]=(0,react.useState)(false);const onFinish=formValues=>{var _formValues$transacti,_formValues$receipt,_formValues$receipt$f,_formValues$receipt$f2;setButtonLoading(true);const formData=new FormData();const transactionDate=formValues===null||formValues===void 0?void 0:(_formValues$transacti=formValues.transactionDate)===null||_formValues$transacti===void 0?void 0:_formValues$transacti.toISOString();const receipt=formValues===null||formValues===void 0?void 0:(_formValues$receipt=formValues.receipt)===null||_formValues$receipt===void 0?void 0:(_formValues$receipt$f=_formValues$receipt.fileList)===null||_formValues$receipt$f===void 0?void 0:(_formValues$receipt$f2=_formValues$receipt$f[0])===null||_formValues$receipt$f2===void 0?void 0:_formValues$receipt$f2.originFileObj;const data=(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},formValues),{},{transactionDate:transactionDate,receipt:receipt});Object.entries(data).forEach(_ref=>{let[key,value]=_ref;const isFile=key==="receipt"&&typeof value!=="string"&&typeof value!=="number";if(!value)return;if(key==="receipt"&&isFile){formData.append(key,value);}else{formData.append(key,value);}});switch(type){case"new":{if(createTransaction===true){module.createRecord(formData).then(res=>{var _res$data;message/* default */.Ay.success((res===null||res===void 0?void 0:(_res$data=res.data)===null||_res$data===void 0?void 0:_res$data.message)||"Government fee created successfully");reloadTableData();onCancel();}).catch(err=>{const errorMessage=(0,common/* handleError */.H4)(err);message/* default */.Ay.error(errorMessage||"Something went wrong, please try again later.");}).finally(()=>{setButtonLoading(false);});}else{setButtonLoading(false);message/* default */.Ay.error("You don't have permission to create a new record");}break;}case"edit":{if(updateTransaction===true){module.updateRecord(formData,record).then(res=>{reloadTableData();onCancel();}).catch(err=>{const errorMessage=(0,common/* handleError */.H4)(err);message/* default */.Ay.error(errorMessage||"Something went wrong, please try again later.");}).finally(()=>{setButtonLoading(false);});}else{message/* default */.Ay.error("You don't have permission to update this record");}break;}default:{setButtonLoading(false);break;}}};// Project Search
const onProjectSearch=function(){let{title,ids}=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};projectModule.getAllRecords({title:title,ids:ids}).then(res=>{const{data}=res===null||res===void 0?void 0:res.data;setProjectOptions(prev=>{// if the data is already present in the state, then don't add it again
const filteredData=data===null||data===void 0?void 0:data.filter(item=>{return!(prev!==null&&prev!==void 0&&prev.find(prevItem=>prevItem.id===item.id));});// add the new data to the existing data
return[...prev,...filteredData];});}).catch(err=>{const errorMessage=(0,common/* handleError */.H4)(err);message/* default */.Ay.error(errorMessage);});};// Authority Search
const onAuthoritySearch=function(){let{title,id}=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};authorityModule.publishedRecords({title,id,perPage:100}).then(res=>{const{data}=res===null||res===void 0?void 0:res.data;setAuthorityOptions(prev=>{// if the data is already present in the state, then don't add it again
const filteredData=data===null||data===void 0?void 0:data.filter(item=>{return!(prev!==null&&prev!==void 0&&prev.find(prevItem=>prevItem.id===item.id));});// add the new data to the existing data
return[...prev,...filteredData];});}).catch(err=>{const errorMessage=(0,common/* handleError */.H4)(err);message/* default */.Ay.error(errorMessage);});};// Invoice Search
const onInvoiceSearch=function(){let props=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};const{clientId,invoiceNumber,invoiceId}=props;invoiceModule.getAllRecords({clientId,invoiceNumber,id:invoiceId}).then(res=>{const{data}=res===null||res===void 0?void 0:res.data;setInvoiceOptions(data);}).catch(err=>{const errorMessage=(0,common/* handleError */.H4)(err);message/* default */.Ay.error(errorMessage);});};// Project Search Request
(0,react.useEffect)(()=>{if(!debouncedSearchTermProject)return;onProjectSearch({title:debouncedSearchTermProject});},[debouncedSearchTermProject]);// // Authority Search Request
// useEffect(() => {
//   if (!debouncedSearchTermAuthority) return
//   onAuthoritySearch({ title: debouncedSearchTermAuthority })
// }, [debouncedSearchTermAuthority])
// Invoice Search Request
(0,react.useEffect)(()=>{var _project$Client;if(!debouncedSearchTermInvoice)return;const projectId=form.getFieldValue("projectId");const project=projectOptions===null||projectOptions===void 0?void 0:projectOptions.find(item=>item.id===projectId);onInvoiceSearch({invoiceNumber:debouncedSearchTermInvoice,clientId:project===null||project===void 0?void 0:(_project$Client=project.Client)===null||_project$Client===void 0?void 0:_project$Client.id});},[debouncedSearchTermInvoice]);// Get the default project and authority 
(0,react.useEffect)(()=>{if(!government)return;const{authorityId,projectId,invoiceId}=government;if(projectId){onProjectSearch({ids:[projectId]});}if(authorityId){onAuthoritySearch({id:authorityId});}if(invoiceId){onInvoiceSearch({invoiceId});}},[government===null||government===void 0?void 0:government.projectId,government===null||government===void 0?void 0:government.authorityId]);(0,react.useEffect)(()=>{if(type==="edit"&&government){var _government$Invoice;const{projectId,authorityId,transactionDate,transactionReference,amount,status,title,remarks}=government;form.setFieldsValue({projectId:projectId,authorityId:authorityId,title:title,remarks:remarks,transactionDate:moment_default()(transactionDate),transactionReference:transactionReference,amount:amount,status:status,invoiceId:government===null||government===void 0?void 0:(_government$Invoice=government.Invoice)===null||_government$Invoice===void 0?void 0:_government$Invoice.id});}else{form.resetFields();}},[type,government]);// Set the default project if the project id is present in the url and the type is new
(0,react.useEffect)(()=>{if(type==="new"&&projectId){onProjectSearch({ids:[projectId]});form.setFieldsValue({projectId:projectId});}},[projectId]);(0,react.useEffect)(()=>{onAuthoritySearch();},[]);return/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomModal */.jo,{visible:openModal,closable:true,onCancel:onCancel,showFooter:false,titleText:type==="edit"?"Edit Government Fee":"Add Government Fee",children:/*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.A,{className:styles_module/* default */.A.form,onFinish:onFinish,form:form,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"projectId",rules:[{required:true,message:"Please select a project"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* SelectWithSearch */.fd,{label:"Select Project",notFoundDescription:"No projects found., Please search for projects.",onSearch:value=>setSearchTermProject(value),options:projectOptions===null||projectOptions===void 0?void 0:projectOptions.map(item=>({label:"".concat(item.referenceNumber," | ").concat(item.title),value:item.id})),onChange:value=>{var _project$Client2;form.setFieldsValue({projectId:value,invoiceId:undefined});//search for invoices
const project=projectOptions===null||projectOptions===void 0?void 0:projectOptions.find(item=>item.id===value);onInvoiceSearch({clientId:project===null||project===void 0?void 0:(_project$Client2=project.Client)===null||_project$Client2===void 0?void 0:_project$Client2.id});}})})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"invoiceId",help:/*#__PURE__*/(0,jsx_runtime.jsx)("small",{children:"If Invoice is attached, then the status is monitored by invoice status in Xero"}),children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* SelectWithSearch */.fd,{label:"Select Invoice",asterisk:false,notFoundDescription:"No invoices found., Please search for invoices.",onSearch:value=>setSearchTermInvoice(value),options:invoiceOptions===null||invoiceOptions===void 0?void 0:invoiceOptions.map(item=>({label:item.invoiceNumber,value:item.id})),onChange:value=>form.setFieldsValue({invoiceId:value})})})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"authorityId",rules:[{required:true,message:"Please select a authority"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* SelectWithSearch */.fd,{label:"Select Authority",notFoundDescription:"No authority found., Please search for authority.",onSearch:()=>{},options:authorityOptions===null||authorityOptions===void 0?void 0:authorityOptions.map(item=>({label:item.title,value:item.id})),onChange:value=>form.setFieldsValue({authorityId:value})})})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"title",rules:[{required:true,message:"Please add a title"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{label:"Title",asterisk:true,size:"w100"})})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"remarks",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Input_textarea/* default */.A,{label:"Remarks",placeholder:"Add remarks"})})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("label",{style:{width:"100%"},className:"d-flex flex-column font-size-sm color-dark-main",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"d-flex justify-between",children:["Transaction Date ",/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"color-red-yp ml-1",children:"*"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"transactionDate",rules:[{required:true,message:"Please add transaction date"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(date_picker/* default */.A,{style:{width:"100%",border:"2px solid #d9d9d9",borderRadius:"4px"}})})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("label",{style:{width:"100%"},className:"d-flex flex-column font-size-sm color-dark-main",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"d-flex justify-between",children:["Amount ",/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"color-red-yp ml-1",children:"*"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"amount",rules:[{required:true,message:"Please add amount"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(input_number/* default */.A,{placeholder:"Add amount",style:{width:"100%",border:"2px solid #d9d9d9",borderRadius:"4px"}})})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"transactionReference",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{label:"Transaction Reference",size:"w100"})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"status",rules:[{required:true,message:"Please select a status"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomSelect */.Ae,{label:"Status",asterisk:true,options:options/* TransactionStatusOptions */.Fq===null||options/* TransactionStatusOptions */.Fq===void 0?void 0:options/* TransactionStatusOptions */.Fq.map(item=>({label:item.label,value:item.value}))})})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* ImageUploader */.GA,{name:"receipt",title:"Receipt",listType:"picture-card",defaultFileList:type==="edit"&&(government===null||government===void 0?void 0:government.receipt)&&[{uid:"".concat(government===null||government===void 0?void 0:government.id),name:government===null||government===void 0?void 0:government.receipt,status:"done",url:"".concat(constants/* PROTECTED_RESOURCE_BASE_URL */.SO).concat(government.receipt,"?authKey=").concat(access_token)}]||[]})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.footer,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{size:"normal",fontSize:"sm",onClick:onCancel,type:"plain",children:"Cancel"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{type:"primary",size:"normal",fontSize:"sm",htmlType:"submit",loading:buttonLoading,children:"Submit"})]})]})});};
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(42074);
// EXTERNAL MODULE: ./src/Modules/Client/index.ts
var Client = __webpack_require__(97097);
// EXTERNAL MODULE: ./src/helpers/dateHandler.ts
var dateHandler = __webpack_require__(98933);
// EXTERNAL MODULE: ./src/helpers/commonEnums.ts
var commonEnums = __webpack_require__(2360);
;// ./src/Components/Organisms/Transactions/index.tsx
const breadCrumbsData=[{text:"Home",isLink:true,path:"/"},{isLink:false,text:"Government Fees"}];const sortByField=[{label:"Transaction Date",value:"transactionDate"},{label:"Amount",value:"amount"}];const segmentedOptions=[{label:"All",value:"all"},{label:"Sent to client",value:"sent_to_client"},{label:"Pending payment",value:"pending_payment"},{label:"Paid",value:"paid"},{label:"Canceled",value:"canceled"}];// Status Filters
const statusValues={sent_to_client:[commonEnums/* TransactionStatus */.x8["Sent to client"]],pending_payment:[commonEnums/* TransactionStatus */.x8["Pending payment"],commonEnums/* TransactionStatus */.x8["Sent to client"]],paid:[commonEnums/* TransactionStatus */.x8.Paid],canceled:[commonEnums/* TransactionStatus */.x8.Canceled]};const Transactions_Transactions=()=>{var _projectData$data,_clients$data,_authorities$data;// available permissions for this module
const permissionSlug=(0,common/* getPermissionSlugs */.AH)(Transactions_permissions/* TransactionsPermissionsEnum */.t);const{userPermissions}=(0,es/* useSelector */.d4)(state=>state.usersReducer);const permissions=userPermissions;const{readTransaction,createTransaction,updateTransaction}=permissions;const[searchParams,setSearchParams]=(0,dist/* useSearchParams */.ok)();const recordId=searchParams.get("id");const projectId=searchParams.get("projectId");const actionType=searchParams.get("actionType");const module=(0,react.useMemo)(()=>new Transactions/* TransactionsModule */.c(),[]);const projectModule=(0,react.useMemo)(()=>new Project/* ProjectModule */.K(),[]);const clientModule=(0,react.useMemo)(()=>new Client/* ClientModule */.u(),[]);const authorityModule=(0,react.useMemo)(()=>new Authorities/* AuthoritiesModule */.O(),[]);const{data,onRefresh,meta,loading}=(0,hooks/* useFetchData */.Gs)({method:module.getAllRecords,initialQuery:{__status:!actionType?statusValues.pending_payment:undefined,projectId:projectId?Number(projectId):undefined,onlyGovernmentFees:true}});const[segmentedStatus,setSegmentedStatus]=(0,react.useState)("pending_payment");const[modalOpen,setModalOpen]=(0,react.useState)({type:"new",recordId:0,open:false});// selected filters
const[selectedFilters,setSelectedFilters]=(0,react.useState)({dateRange:[""]});const[reset,setReset]=(0,react.useState)(false);// search term for the project search
const[projectSearchTerm,setProjectSearchTerm]=(0,react.useState)(undefined);const debouncedSearchTerm=(0,useDebounce/* useDebounce */.d)(projectSearchTerm,500);// client search term
const[clientTerm,setClientTerm]=(0,react.useState)(undefined);// Search Debounce
const debouncedClientTerm=(0,useDebounce/* useDebounce */.d)(clientTerm,500);// authority search term
const[authorityTerm,setAuthorityTerm]=(0,react.useState)(undefined);// Search Debounce
const debouncedAuthorityTerm=(0,useDebounce/* useDebounce */.d)(authorityTerm,500);// project data
const[projectData,setProjectData]=(0,react.useState)({data:[],loading:false});// client data
const[clients,setClients]=(0,react.useState)({data:[],loading:false});// authority data
const[authorities,setAuthorities]=(0,react.useState)({data:[],loading:false});const onCancelClick=()=>{if(createTransaction===false){message/* default */.Ay.error("You don't have permission to update this record");return;}setModalOpen((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},modalOpen),{},{open:!modalOpen.open,type:"new"}));};const onEditIconClick=record=>{if(updateTransaction===false){message/* default */.Ay.error("You don't have permission to update this record");return;}setModalOpen((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},modalOpen),{},{open:!modalOpen.open,type:"edit",recordId:record.id}));};const onSelected=event=>{const{name,value}=event===null||event===void 0?void 0:event.target;if(name==="clientId"||name==="authorityId"||name==="projectId"){const isValidNumber=(0,common/* isNumber */.Et)(value);if(!isValidNumber){let label="";switch(name){case"clientId":{label="Client ID";break;}case"authorityId":{label="Authority ID";break;}case"projectId":{label="Project ID";break;}}return message/* default */.Ay.error("".concat(label," should be a number"));}}// set the selected value in the state
setSelectedFilters(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{[name]:value}));};const onReset=(0,react.useCallback)((name,value)=>{if(name){setReset(true);setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{[name]:value}));}},[selectedFilters]);const onUpdate=(0,react.useCallback)(query=>{var _selectedFilters$date,_selectedFilters$date2;const fromDateString=((_selectedFilters$date=selectedFilters.dateRange)===null||_selectedFilters$date===void 0?void 0:_selectedFilters$date[0])||"";const toDateString=((_selectedFilters$date2=selectedFilters.dateRange)===null||_selectedFilters$date2===void 0?void 0:_selectedFilters$date2[1])||"";const fromDate=fromDateString?(0,dateHandler/* convertDate */.ic)(fromDateString,"yy-mm-dd"):undefined;const toDate=toDateString?(0,dateHandler/* convertDate */.ic)(toDateString,"yy-mm-dd"):undefined;const data=(0,objectSpread2/* default */.A)({__status:selectedFilters.__status||undefined,fromDate:fromDate,toDate:toDate,clientId:selectedFilters.clientId||undefined,projectId:selectedFilters.projectId||undefined,authorityId:selectedFilters.authorityId||undefined,transactionReference:selectedFilters.transactionReference||undefined,sortOrder:selectedFilters.sortOrder||undefined,sortByField:selectedFilters.sortByField||undefined},query);// get the data from the api
onRefresh(data);},[selectedFilters]);const onPaginationChange=(page,pageSize)=>onUpdate({page,perPage:pageSize});/** Get the search result for the projects */const onSearchProject=_ref=>{let{title,ids}=_ref;setProjectData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{loading:true}));projectModule.getAllRecords({title:title,ids}).then(res=>{const{data}=res===null||res===void 0?void 0:res.data;setProjectData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{data:data,loading:false}));}).finally(()=>{setProjectData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{loading:false}));});};/** Get the search result for the client */const GetSearchClients=(0,react.useCallback)(()=>{if(debouncedClientTerm){setClients(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{loading:true}));clientModule.findPublished({name:debouncedClientTerm}).then(res=>{var _res$data;const data=res===null||res===void 0?void 0:(_res$data=res.data)===null||_res$data===void 0?void 0:_res$data.data;setClients(prev=>{// if the data is already present in the state, then don't add it again
const filteredData=data===null||data===void 0?void 0:data.filter(item=>{var _prev$data;return!(prev!==null&&prev!==void 0&&(_prev$data=prev.data)!==null&&_prev$data!==void 0&&_prev$data.find(prevItem=>prevItem.id===item.id));});// add the new data to the existing data
return{data:[...prev.data,...filteredData],loading:false};});}).catch(err=>{const errorMessage=(0,common/* handleError */.H4)(err);message/* default */.Ay.error(errorMessage||"Something went wrong, please try again later.");setClients(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{loading:false}));});}},[debouncedClientTerm]);/** Get the search result for the authority */const GetSearchAuthorities=(0,react.useCallback)(()=>{if(debouncedAuthorityTerm){setAuthorities(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{loading:true}));authorityModule.getAllRecords({name:debouncedAuthorityTerm}).then(res=>{var _res$data2;const data=res===null||res===void 0?void 0:(_res$data2=res.data)===null||_res$data2===void 0?void 0:_res$data2.data;setAuthorities(prev=>{// if the data is already present in the state, then don't add it again
const filteredData=data===null||data===void 0?void 0:data.filter(item=>{var _prev$data2;return!(prev!==null&&prev!==void 0&&(_prev$data2=prev.data)!==null&&_prev$data2!==void 0&&_prev$data2.find(prevItem=>prevItem.id===item.id));});// add the new data to the existing data
return{data:[...prev.data,...filteredData],loading:false};});}).catch(err=>{const errorMessage=(0,common/* handleError */.H4)(err);message/* default */.Ay.error(errorMessage||"Something went wrong, please try again later.");setAuthorities(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{loading:false}));});}},[debouncedAuthorityTerm]);(0,react.useEffect)(()=>{if(reset){onUpdate();}// after 2 seconds set reset clicked state to false
const timer=setTimeout(()=>{setReset(false);},2000);return()=>clearTimeout(timer);},[reset,selectedFilters,onUpdate]);(0,react.useEffect)(()=>{if(debouncedSearchTerm){onSearchProject({title:debouncedSearchTerm});}},[debouncedSearchTerm]);(0,react.useEffect)(()=>{GetSearchClients();},[GetSearchClients]);(0,react.useEffect)(()=>{GetSearchAuthorities();},[GetSearchAuthorities]);// Open the modal based on the action type
(0,react.useEffect)(()=>{const updateProject=()=>{setSegmentedStatus("all");setSelectedFilters(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{projectId:Number(projectId)}));onSearchProject({ids:[Number(projectId)]});};switch(actionType){case"create":{if(projectId){updateProject();setModalOpen((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},modalOpen),{},{open:true,type:"new",projectId:Number(projectId)}));(0,common/* onRemoveUrlParams */.t3)(["actionType","projectId"],setSearchParams);}break;}case"edit":{if(recordId&&projectId){updateProject();setModalOpen((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},modalOpen),{},{open:true,type:"edit",recordId:Number(recordId),projectId:Number(projectId)}));(0,common/* onRemoveUrlParams */.t3)(["actionType","id","projectId"],setSearchParams);}break;}case"view":{if(recordId&&projectId){updateProject();(0,common/* onRemoveUrlParams */.t3)(["actionType","id","projectId"],setSearchParams);}break;}default:break;}},[actionType,projectId,recordId]);return/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.A,{permissionSlug:permissionSlug,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* PageHeader */.zY,{heading:"Government Fees",buttonText:"Add Government Fee",onButtonClick:onCancelClick,breadCrumbData:breadCrumbsData,showAdd:!!createTransaction,filters:readTransaction?/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{overflow:"auto"},children:/*#__PURE__*/(0,jsx_runtime.jsx)(segmented/* default */.A,{size:"middle",style:{fontSize:"var(--font-size-sm)"},options:segmentedOptions.map(item=>{return (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},item),{},{title:item.label,value:item.value});}),value:segmentedStatus,onChange:value=>{if(value==="all"){onReset("__status","");setSelectedFilters(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{__status:[]}));}else{const _value=value;onUpdate({__status:statusValues[_value]});setSelectedFilters(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{__status:statusValues[_value]}));}setSegmentedStatus(value);}})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"datepicker",label:"Date",name:"dateRange",onChange:value=>setSelectedFilters(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{dateRange:value})),onReset:()=>onReset("dateRange",[]),onUpdate:onUpdate})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"radio",label:"Project",name:"projectId",withSearch:true,options:projectData===null||projectData===void 0?void 0:(_projectData$data=projectData.data)===null||_projectData$data===void 0?void 0:_projectData$data.map(item=>({label:"".concat(item.referenceNumber," | ").concat(item.title),value:"".concat(item.id)})),onChange:onSelected,value:Number(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.projectId)>0?String(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.projectId):"",onReset:()=>{onReset("projectId",0);// reset the search term
setProjectSearchTerm("");},onUpdate:onUpdate// START: For search
,loading:projectData===null||projectData===void 0?void 0:projectData.loading,searchTerm:projectSearchTerm||"",onSearch:event=>setProjectSearchTerm(event.currentTarget.value)// END: For search
,defaultValue:Number(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.projectId)>0?String(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.projectId):""})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"radio",label:"Client",name:"clientId",withSearch:true,options:clients===null||clients===void 0?void 0:(_clients$data=clients.data)===null||_clients$data===void 0?void 0:_clients$data.map(item=>{return{label:item.name,value:"".concat(item.id)};}),onChange:onSelected,value:Number(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.clientId)>0?String(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.clientId):"",onReset:()=>{onReset("clientId",0);// reset the search term
setClientTerm("");},onUpdate:onUpdate// START: For search
,loading:clients===null||clients===void 0?void 0:clients.loading,searchTerm:clientTerm||"",onSearch:event=>setClientTerm(event.currentTarget.value)// END: For search
})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"radio",label:"Authority",name:"authorityId",withSearch:true,options:authorities===null||authorities===void 0?void 0:(_authorities$data=authorities.data)===null||_authorities$data===void 0?void 0:_authorities$data.map(item=>{return{label:item.title,value:"".concat(item.id)};}),onChange:onSelected,value:Number(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.authorityId)>0?String(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.authorityId):"",onReset:()=>{onReset("authorityId",0);// reset the search term
setAuthorityTerm("");},onUpdate:onUpdate// START: For search
,loading:authorities===null||authorities===void 0?void 0:authorities.loading,searchTerm:authorityTerm||"",onSearch:event=>setAuthorityTerm(event.currentTarget.value)// END: For search
})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"input",label:"Reference",name:"transactionReference",value:selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.transactionReference,onChange:onSelected,onReset:()=>onReset("transactionReference",""),onUpdate:onUpdate})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{marginLeft:"auto",marginRight:"0px"},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"radio",label:"Sort By",name:"sortByField",options:sortByField,value:selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.sortByField,onChange:onSelected,onReset:()=>onReset("sortByField",""),onUpdate:onUpdate,withSort:true})})]}):null}),readTransaction===true&&/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(table_columns/* default */.A,{tableData:data,tableLoading:loading,onEditIconClick:onEditIconClick,reloadTableData:onRefresh,permissions:permissions}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Pagination */.dK,{total:meta===null||meta===void 0?void 0:meta.total,current:meta===null||meta===void 0?void 0:meta.page,defaultPageSize:meta!==null&&meta!==void 0&&meta.perPage?meta===null||meta===void 0?void 0:meta.perPage:10,pageSizeOptions:[10,20,50,100],onChange:onPaginationChange})]}),readTransaction===false&&/*#__PURE__*/(0,jsx_runtime.jsx)(ErrorCodes/* ErrorCode403 */.$t,{mainMessage:"You don't have permission to view this data"}),modalOpen.open&&/*#__PURE__*/(0,jsx_runtime.jsx)(TransactionsModal,{type:modalOpen.type,openModal:modalOpen.open,record:modalOpen.recordId,projectId:modalOpen.projectId,onCancel:onCancelClick,reloadTableData:()=>onUpdate(),permissions:permissions})]});};/* harmony default export */ const Organisms_Transactions = (Transactions_Transactions);

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

/***/ 49925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ InvoiceModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
/* harmony import */ var _modules_Common_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21073);
class InvoiceModule{constructor(){this.endPoint="invoice";/**Get all Invoice records
     * @param query - query params
     */this.getAllRecords=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint,{params:query});};/**Get Invoice record by id
     * @param id - Invoice id
     */this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/findOne/").concat(id));};/**Create new Invoice record
     * @param data - Invoice data
     */this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(this.endPoint,data,{headers:_modules_Common_config__WEBPACK_IMPORTED_MODULE_1__/* .FormDataHeader */ .Y});};/**Update Invoice record
     * @param data - Invoice data
     * @param id - Invoice id
     */this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/updateOne/").concat(id),data,{headers:_modules_Common_config__WEBPACK_IMPORTED_MODULE_1__/* .FormDataHeader */ .Y});};/**Submit Invoice by id
     * @param id - Invoice id
     */this.submitInvoice=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/submitInvoice/").concat(id));};/**Change Invoice status
     * @param id - Invoice id
     * @param status - Invoice status
     */this.changeStatus=(id,data)=>{console.log(data);return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/changeStatus/").concat(id),data);};/**Delete Invoice record
     * @param id - Invoice id
     */this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete("".concat(this.endPoint,"/remove/").concat(id));};/** Mark As Sent 
     * @param id - Invoice id
    */this.markAsSent=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/markAsSent/").concat(id));};/**Prepare Unique Quote Number */this.prepareUniqueInvoiceNumber=()=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/prepareUniqueInvoiceNumber"));};/** Check for duplicacy */this.checkForDuplicacy=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/checkForDuplicacy"),{params:query});};/** Quick Update
     * @param id - Invoice id
     * @param data - Invoice data
     * @param projectId - project id
     */this.quickUpdate=(id,data)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/quickUpdate/").concat(id),data);};/**Add note to enquiry
   * @param id - enquiry id
   * @param data - note data
   * @property `data.note` - note text
   * @property `data.isConcern` - is concern note
   */this.addNote=(id,data)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post("".concat(this.endPoint,"/addNote/").concat(id),data);};/** Get Note by id 
     * @param id - note id
    */this.getNoteById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/notes/").concat(id));};/**Remove note from enquiry
    * @param id - Note id
    */this.removeNote=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete("".concat(this.endPoint,"/removeNote/").concat(id));};/**Get enquiry logs
    * @param id - enquiry id
    * @param query - query params
    */this.getLogsById=(id,query)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/logs/").concat(id),{params:query});};/**Mark Concern As Resolved
     * @param id - note id
     */this.markConcernAsResolved=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/markConcernAsResolved/").concat(id));};/** Get Invoice Statuses Total Counts */this.getCounts=()=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/getCounts"));};}}

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

/***/ })

}]);