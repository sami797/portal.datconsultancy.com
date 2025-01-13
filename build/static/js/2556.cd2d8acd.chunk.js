"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[2556],{

/***/ 10036:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90650);
/* harmony import */ var _atoms_CustomEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49758);
/* harmony import */ var _services_tokenService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92966);
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65944);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44414);
/** Preview File */const PreviewFile=_ref=>{let{file,loading,tip}=_ref;const access_token=_services_tokenService__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.getLocalAccessToken();return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{overflow:"hidden",height:"100%"},children:!loading?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:file?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("iframe",{src:"".concat(_helpers_constants__WEBPACK_IMPORTED_MODULE_2__/* .PROTECTED_RESOURCE_BASE_URL */ .SO).concat(file,"?authKey=").concat(access_token),style:{width:"100%",height:"100%"},title:"Preview File"}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"w-100 h-100 d-flex justify-center align-center font-size-lg",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_atoms_CustomEmpty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{description:"No PDF found"})})}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,{size:"large",style:{gap:"1rem"},className:"w-100 h-100 d-flex justify-center align-center font-size-lg",tip:tip||"Please wait while we are preparing the file..."})});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PreviewFile);

/***/ }),

/***/ 53822:
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
// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 5 modules
var input = __webpack_require__(16330);
// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 18 modules
var es_form = __webpack_require__(10678);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 1 modules
var message = __webpack_require__(92759);
// EXTERNAL MODULE: ./node_modules/antd/es/checkbox/index.js + 2 modules
var es_checkbox = __webpack_require__(52765);
// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js
var tooltip = __webpack_require__(81541);
// EXTERNAL MODULE: ./node_modules/antd/es/table/index.js + 96 modules
var table = __webpack_require__(41821);
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
// EXTERNAL MODULE: ./node_modules/antd/es/radio/index.js + 4 modules
var es_radio = __webpack_require__(17811);
// EXTERNAL MODULE: ./node_modules/antd/es/alert/index.js + 1 modules
var es_alert = __webpack_require__(99985);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CheckOutlined.js
var CheckOutlined = __webpack_require__(65472);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/PlusOutlined.js
var PlusOutlined = __webpack_require__(59334);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseOutlined.js
var CloseOutlined = __webpack_require__(45908);
// EXTERNAL MODULE: ./src/Components/Atoms/index.tsx + 12 modules
var Atoms = __webpack_require__(9394);
// EXTERNAL MODULE: ./src/Components/Atoms/PreviewFile/index.tsx
var PreviewFile = __webpack_require__(10036);
// EXTERNAL MODULE: ./src/helpers/commonEnums.ts
var commonEnums = __webpack_require__(2360);
// EXTERNAL MODULE: ./src/helpers/common.ts
var common = __webpack_require__(88132);
// EXTERNAL MODULE: ./src/Modules/Invoice/index.ts
var Invoice = __webpack_require__(49925);
;// ./src/Components/Organisms/Invoice/Drawer/styles.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"quotation_container":"styles_quotation_container__zPazB","quotation_title":"styles_quotation_title__4Exjx","rte_editor":"styles_rte_editor__l9NBd","error":"styles_error__3XyHc","accordianItem":"styles_accordianItem__Ryznd","total":"styles_total__BdLGd","total_item":"styles_total_item__rvNCZ","date_picker":"styles_date_picker__G-0xz","z_index":"styles_z_index__HQl9S","date_footer":"styles_date_footer__go5ML"});
// EXTERNAL MODULE: ./src/helpers/useDebounce.ts
var useDebounce = __webpack_require__(28173);
// EXTERNAL MODULE: ./src/Modules/Project/index.ts
var Project = __webpack_require__(50167);
// EXTERNAL MODULE: ./src/Modules/Quotation/index.ts
var Quotation = __webpack_require__(83480);
// EXTERNAL MODULE: ./src/Components/Organisms/Invoice/status.tsx
var Invoice_status = __webpack_require__(14270);
// EXTERNAL MODULE: ./src/Modules/BrandingTheme/index.ts
var BrandingTheme = __webpack_require__(65450);
// EXTERNAL MODULE: ./src/Modules/Product/index.ts
var Product = __webpack_require__(80145);
// EXTERNAL MODULE: ./src/Modules/Account/index.ts
var Account = __webpack_require__(64913);
// EXTERNAL MODULE: ./src/Modules/TaxRate/index.ts
var TaxRate = __webpack_require__(20761);
// EXTERNAL MODULE: ./src/hooks/index.ts + 5 modules
var hooks = __webpack_require__(91970);
;// ./src/Components/Organisms/Invoice/Drawer/hooks.ts
/** Generates a unique invoice number */const useInvoiceNumber=props=>{const{type,module,form}=props;const[invoiceNumber,setInvoiceNumber]=(0,react.useState)("");(0,react.useMemo)(()=>{if(type==="create"){const{prepareUniqueInvoiceNumber}=module;prepareUniqueInvoiceNumber().then(res=>{var _res$data;const data=res===null||res===void 0?void 0:(_res$data=res.data)===null||_res$data===void 0?void 0:_res$data.data;const invoiceNumber=data===null||data===void 0?void 0:data.invoiceNumber;setInvoiceNumber(invoiceNumber);form.setFieldValue("invoiceNumber",invoiceNumber);}).catch(err=>{const errorMessage=(0,common/* handleError */.H4)(err);message/* default */.Ay.error(errorMessage||"Something went wrong");});}return invoiceNumber;},[type]);return invoiceNumber;};/** Checks if the invoice number already exists */const useCheckForDuplicateInvoiceNumber=props=>{const{type,module,previewData,form,invoiceNumber}=props;(0,react.useEffect)(()=>{if((type==="create"||type==="edit")&&invoiceNumber){const{checkForDuplicacy}=module;const params={invoiceNumber,excludeId:type==="edit"?previewData===null||previewData===void 0?void 0:previewData.id:undefined};checkForDuplicacy(params).then(res=>{var _res$data2;const{isDuplicate}=res===null||res===void 0?void 0:(_res$data2=res.data)===null||_res$data2===void 0?void 0:_res$data2.data;if(isDuplicate){form.setFields([{name:'invoiceNumber',warnings:isDuplicate?['Invoice number already exists']:[]}]);}}).catch(err=>{const errorMessage=(0,common/* handleError */.H4)(err);message/* default */.Ay.error(errorMessage||"Something went wrong");});}},[type,previewData,invoiceNumber]);};/** Calculate the total amount of the Invoice */const useCalculateTotal=props=>{const{form,setTotal,taxRateData:tData}=props;let taxRateData=tData;const calculateTotal=async()=>{const invoiceItems=form.getFieldValue('invoiceItems');if(!taxRateData){let taxRateModule=new TaxRate/* TaxRateModule */.Q();let response=await taxRateModule.getAllRecords();taxRateData=response.data.data;}// calculate the unit total
const vatData=new Map();let totalVATAmount=0;let subtotal=0;invoiceItems.forEach(item=>{// remove the decimal places from the quantity and keep only the whole number
const amount=Number(item===null||item===void 0?void 0:item.amount);const quantity=Math.trunc((item===null||item===void 0?void 0:item.quantity)||0);const lineTotal=amount*quantity;subtotal+=lineTotal;let taxRateId=item.taxRateId;if(taxRateId&&taxRateData&&lineTotal>0){let taxData=taxRateData.find(item=>item.id===taxRateId);if(taxData&&taxData.rate>0){let existingVat=vatData.get(taxRateId);let totalVat=existingVat?existingVat.totalVat:0;let lineTax=taxData.rate/100*lineTotal;totalVat+=lineTax;totalVATAmount+=lineTax;vatData.set(taxRateId,{title:taxData.title,vatRate:taxData.rate,totalVat});}}});const total=subtotal+totalVATAmount;setTotal({subtotal,total,vatData});};return calculateTotal;};/** Search for projects */const useProjectSearch=props=>{const{projectModule,setProjects,debouncedProjectSearchTerm}=props;const{getRecordsInList}=projectModule;/** Make API Call to fetch the projects */const fetchProjects=function(){let{title,ids}=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};getRecordsInList({title,ids}).then(res=>{const{data}=res===null||res===void 0?void 0:res.data;setProjects(prev=>{// if the data is already present in the state, then don't add it again
const filteredData=data===null||data===void 0?void 0:data.filter(item=>{var _prev$data;return!(prev!==null&&prev!==void 0&&(_prev$data=prev.data)!==null&&_prev$data!==void 0&&_prev$data.find(prevItem=>prevItem.id===item.id));});// add the new data to the existing data
return{data:[...prev.data,...filteredData],loading:false};});}).catch(err=>{const errorMessage=(0,common/* handleError */.H4)(err);message/* default */.Ay.error(errorMessage||"Something went wrong, please try again later.");});};/** Prepare the search term and make the API call */const onProjectSearch=()=>{if(debouncedProjectSearchTerm){setProjects(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{loading:true}));fetchProjects({title:debouncedProjectSearchTerm});}};return{onProjectSearch,fetchProjects};};/** Mark the invoice as sent */const useMarkAsSent=props=>{const{permissions,module,onRefresh,successCallback}=props;const markAsSent=id=>{if((permissions===null||permissions===void 0?void 0:permissions.updateInvoice)===true){module.markAsSent(id).then(res=>{var _res$data3;message/* default */.Ay.success((res===null||res===void 0?void 0:(_res$data3=res.data)===null||_res$data3===void 0?void 0:_res$data3.message)||"Invoice marked as sent successfully");onRefresh();successCallback();}).catch(err=>{const errorMessage=(0,common/* handleError */.H4)(err);message/* default */.Ay.error(errorMessage||"Something went wrong");});}else{message/* default */.Ay.error("You don't have permission to mark invoice as sent");}};return markAsSent;};/** Submit the Invoice */const useSubmitInvoice=props=>{const{permissions,module,onRefresh,successCallback,setIsLoading,previewData}=props;const onSubmitInvoice=()=>{if(!(previewData!==null&&previewData!==void 0&&previewData.id))return message/* default */.Ay.error("Invoice not found");if((permissions===null||permissions===void 0?void 0:permissions.submitInvoice)===true){const{submitInvoice}=module;submitInvoice(previewData===null||previewData===void 0?void 0:previewData.id).then(()=>{message/* default */.Ay.success("Invoice submitted successfully");onRefresh();successCallback();}).catch(err=>{const errMessage=(0,common/* handleError */.H4)(err);message/* default */.Ay.error(errMessage||"Something went wrong");}).finally(()=>{setIsLoading(false);});}else{message/* default */.Ay.error("You don't have permission to submit Invoice");}};return onSubmitInvoice;};/** Used to Get Options from API */const useGetOptions=props=>{const{modules,type}=props;const{brandingThemeModule,productModule,accountModule,taxRateModule}=modules;// get branding theme data
const{data:brandingThemeData}=(0,hooks/* useFetchData */.Gs)({method:brandingThemeModule.getAllRecords});// get product data
const{data:productData}=(0,hooks/* useFetchData */.Gs)({method:productModule.getAllRecords});// get account data
const{data:accountData}=(0,hooks/* useFetchData */.Gs)({method:accountModule.getAllRecords});// get tax rate data
const{data:taxRateData}=(0,hooks/* useFetchData */.Gs)({method:taxRateModule.getAllRecords});return{brandingThemeData,productData,accountData,taxRateData};};const useMilestoneSelection=props=>{const{form,QuotationMilestone,quotation,selectedMilestones,setSelectedMilestones,setChecked,onCalculateTotal}=props;const addOrRemoveItem=_ref=>{let{id,milestone,isChecked,defaultValue}=_ref;const fieldName="invoiceItems";const invoiceItems=form.getFieldValue(fieldName);let firstItemData=form.getFieldValue([fieldName,0]);let formItems=invoiceItems.filter(item=>(item===null||item===void 0?void 0:item.id)!==(milestone===null||milestone===void 0?void 0:milestone.id));if(isChecked){if(milestone){// if the first invoice item is empty, add the first checked milestone to it
// and if it is not empty, add the checked milestone to the end of the array
if(invoiceItems.length===1&&(firstItemData===null||firstItemData===void 0?void 0:firstItemData.title)===""){form.setFieldsValue({[fieldName]:[{title:milestone.title,amount:milestone.amount,id:milestone.id,quantity:milestone.quantity||1}]});}else{form.setFieldsValue({[fieldName]:[...invoiceItems,{title:milestone.title,amount:milestone.amount,id:milestone.id,quantity:milestone.quantity||1}]});}}}else{let newInvoiceItems=invoiceItems.filter(item=>(item===null||item===void 0?void 0:item.id)!==id);if(newInvoiceItems.length===0){newInvoiceItems.push(...defaultValue);}form.setFieldsValue({[fieldName]:newInvoiceItems});}onCalculateTotal();};const defaultValue=[{title:"",amount:null,id:0,quantity:1}];const checkUncheck=(id,isChecked)=>{const milestone=QuotationMilestone===null||QuotationMilestone===void 0?void 0:QuotationMilestone.find(milestone=>milestone.id===id);addOrRemoveItem({id,milestone,isChecked,defaultValue});setSelectedMilestones(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{ids:!isChecked?prev.ids.filter(milestoneId=>milestoneId!==id):[...prev.ids,id]}));};const checkUncheckSupervision=event=>{const isChecked=event.target.checked;const supervisionData={title:"Supervision Charge",amount:quotation===null||quotation===void 0?void 0:quotation.supervisionMonthlyCharge,id:-100};addOrRemoveItem({id:-100,milestone:supervisionData,isChecked,defaultValue});setChecked(isChecked);};return{checkUncheck,checkUncheckSupervision};};
;// ./src/Components/Organisms/Invoice/Drawer/helpers.ts
/** Date preset options for the date picker */const datePresets=[7,14,30,60,90];/** Invoice Item Columns */const invoiceItemColumns=[{title:"Products",key:"title",span:4,style:{}},{title:"Title",key:"title",span:5,style:{}},{title:"Quantity",key:"quantity",span:2,style:{}},{title:"Unit Amount",key:"unitAmount",span:3,style:{}},{title:"Account",key:"account",span:4,style:{}},{title:"Tax Rate",key:"tax",span:2,style:{}},{title:"Unit Total",key:"unitTotal",span:3,style:{textAlign:"center"}},{title:"Actions",key:"actions",span:1,style:{}}];/** Initial Milestone Value for the form */const initialInvoiceValue=Array(1).fill({title:'',amount:undefined,id:'',quantity:1});/** Get the total amount for an invoice item */const getLineTotal=(quantity,amount)=>{if(!quantity||!amount){return (0,common/* formatCurrency */.vv)(0);}return (0,common/* formatCurrency */.vv)(quantity*amount);};
// EXTERNAL MODULE: ./src/helpers/options.ts
var helpers_options = __webpack_require__(59179);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(59051);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/Invoice/Drawer/index.tsx
const _excluded=["key","name"];const{TextArea}=input/* default */.A;const InvoiceDrawer=props=>{var _previewData$Client,_previewData$Client2,_projects$data;const{setDrawer,drawer,onRefresh,permissions}=props;const{id:invoiceId,quotation,type,projectId}=drawer;const module=(0,react.useMemo)(()=>new Invoice/* InvoiceModule */.O(),[]);const projectModule=(0,react.useMemo)(()=>new Project/* ProjectModule */.K(),[]);const quotationModule=(0,react.useMemo)(()=>new Quotation/* QuotationModule */.v(),[]);const brandingThemeModule=(0,react.useMemo)(()=>new BrandingTheme/* BrandingThemeModule */.P(),[]);const productModule=(0,react.useMemo)(()=>new Product/* ProductModule */.U(),[]);const accountModule=(0,react.useMemo)(()=>new Account/* AccountModule */.O(),[]);const taxRateModule=(0,react.useMemo)(()=>new TaxRate/* TaxRateModule */.Q(),[]);const[form]=es_form/* default */.A.useForm();const[QuotationMilestone,setQuotationMilestone]=(0,react.useState)(()=>{return(quotation===null||quotation===void 0?void 0:quotation.QuotationMilestone)||[];});const allCompletedIds=(0,react.useMemo)(()=>{const ids=[];QuotationMilestone===null||QuotationMilestone===void 0?void 0:QuotationMilestone.forEach(milestone=>{if((milestone===null||milestone===void 0?void 0:milestone.status)===commonEnums/* MilestoneStatus */.jY['Invoice Paid']){ids.push(milestone===null||milestone===void 0?void 0:milestone.id);}});return ids;},[QuotationMilestone]);const dataSource=(0,react.useMemo)(()=>{const supervision={id:0,title:"Supervision Charge",amount:quotation===null||quotation===void 0?void 0:quotation.supervisionMonthlyCharge,quotationId:quotation===null||quotation===void 0?void 0:quotation.id,status:0,invoiceId:0,type:"supervision",quantity:1};if(quotation!==null&&quotation!==void 0&&quotation.hasSupervision){// if supervision is not added to the milestones, add it else don't add it again
if(!(QuotationMilestone!==null&&QuotationMilestone!==void 0&&QuotationMilestone.find(milestone=>(milestone===null||milestone===void 0?void 0:milestone.type)==="supervision"))){QuotationMilestone===null||QuotationMilestone===void 0?void 0:QuotationMilestone.push(supervision);}}return QuotationMilestone||[];},[QuotationMilestone,quotation]);// Invoice Number State (for tracking the invoice number changes)
const[invoiceNumber,setInvoiceNumber]=(0,react.useState)("");const[invoiceType,setInvoiceType]=(0,react.useState)(commonEnums/* InvoiceTypeEnum */.RU.Auto);// Project Searched Result
const[projects,setProjects]=(0,react.useState)({data:[],loading:false});// Fetch Quotations
const[fetchedQuotations,setFetchedQuotations]=(0,react.useState)([]);// Supervision Checkbox
const[checked,setChecked]=(0,react.useState)(false);const[previewData,setPreviewData]=(0,react.useState)();const[isLoading,setIsLoading]=(0,react.useState)(false);const[total,setTotal]=(0,react.useState)({subtotal:0,total:0});const[selectedMilestones,setSelectedMilestones]=(0,react.useState)({ids:[],completedIds:allCompletedIds});// Date Picker
const[openDate,setOpenDate]=(0,react.useState)({issueDate:false,expiryDate:false});// Project Search Term
const[projectSearchTerm,setSearchProjectTerm]=(0,react.useState)("");const debouncedProjectSearchTerm=(0,useDebounce/* useDebounce */.d)(projectSearchTerm,500);const onClose=()=>{setDrawer(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{open:false,quoteId:undefined}));setSelectedMilestones({ids:[],completedIds:allCompletedIds});setIsLoading(false);setChecked(false);form.resetFields();};const successCallback=()=>{setChecked(false);onClose();};// Unique Invoice Number
const InvoiceNumber=useInvoiceNumber({type,module,form,previewData:previewData});// Check for duplicate quote number
useCheckForDuplicateInvoiceNumber({type,module,form,invoiceNumber,previewData:previewData});// Calculate Total
// Project Search
const{onProjectSearch}=useProjectSearch({projectModule,setProjects,debouncedProjectSearchTerm});// Mark Invoice as Sent
const markAsSent=useMarkAsSent({module,permissions,onRefresh,successCallback});// Submit Invoice
const onSubmitInvoice=useSubmitInvoice({module,permissions,onRefresh,successCallback,setIsLoading,previewData:previewData});/** Get options Data */const{productData,accountData,taxRateData}=useGetOptions({type,modules:{brandingThemeModule,productModule,accountModule,taxRateModule}});const onCalculateTotal=useCalculateTotal({form,setTotal,taxRateData:taxRateData});const{checkUncheck,checkUncheckSupervision}=useMilestoneSelection({QuotationMilestone,form,selectedMilestones,setSelectedMilestones,onCalculateTotal,setChecked,quotation:quotation});/** This function is used to remove the invoice items that was added from the quotation milestones */const onUpdateInvoiceItems=()=>{const invoiceItems=form.getFieldValue('invoiceItems');const newInvoiceItems=invoiceItems.filter(item=>{if(item!==null&&item!==void 0&&item.id)return false;return true;});if(newInvoiceItems.length===0){form.setFieldsValue({invoiceItems:[{title:"",amount:null,quantity:1}]});}else{form.setFieldsValue({invoiceItems:newInvoiceItems});}};/** This function is used to remove the invoice item */const onRemoveItem=(remove,index)=>{// remove from selected ids if it was selected
setSelectedMilestones((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedMilestones),{},{ids:selectedMilestones.ids.filter(id=>id!==index)}));let deletedItem=form.getFieldValue(["invoiceItems",index,"id"]);if(deletedItem){setSelectedMilestones(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{ids:prev.ids.filter(milestoneId=>milestoneId!==deletedItem)}));}remove(index);onCalculateTotal();};/**This function is used to create invoice for the quotation 
   * @param values InvoiceDrawerFormType
   */const onCreateOrEditInvoice=values=>{var _values$file,_values$expiryDate,_values$issueDate;setIsLoading(true);const formData=new FormData();const file=values===null||values===void 0?void 0:(_values$file=values.file)===null||_values$file===void 0?void 0:_values$file.file;if(file){formData.append("file",file);}const finalValues=(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},values),{},{file:formData.get("file"),quotationId:(values===null||values===void 0?void 0:values.quotationId)||(quotation===null||quotation===void 0?void 0:quotation.id),expiryDate:values===null||values===void 0?void 0:(_values$expiryDate=values.expiryDate)===null||_values$expiryDate===void 0?void 0:_values$expiryDate.format("YYYY-MM-DD"),issueDate:values===null||values===void 0?void 0:(_values$issueDate=values.issueDate)===null||_values$issueDate===void 0?void 0:_values$issueDate.format("YYYY-MM-DD")});if(!(finalValues!==null&&finalValues!==void 0&&finalValues.file)&&(finalValues===null||finalValues===void 0?void 0:finalValues.type)===commonEnums/* InvoiceTypeEnum */.RU.Manual){message/* default */.Ay.error("Please upload invoice file");setIsLoading(false);return;}switch(type){case"create":{if(permissions.createInvoice===true){module===null||module===void 0?void 0:module.createRecord(finalValues).then(res=>{var _res$data;const data=res===null||res===void 0?void 0:(_res$data=res.data)===null||_res$data===void 0?void 0:_res$data.data;if(data!==null&&data!==void 0&&data.file){setPreviewData(data);}message/* default */.Ay.success("Invoice created successfully");onRefresh();setDrawer(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{type:"preview"}));}).catch(err=>{const errMessage=(0,common/* handleError */.H4)(err);message/* default */.Ay.error(errMessage||"Something went wrong");}).finally(()=>{setIsLoading(false);});}else{message/* default */.Ay.error("You don't have permission to create invoice");setIsLoading(false);}break;}case"edit":{if(!(previewData!==null&&previewData!==void 0&&previewData.id))return message/* default */.Ay.error("Invoice not found");module===null||module===void 0?void 0:module.updateRecord(finalValues,previewData===null||previewData===void 0?void 0:previewData.id).then(res=>{var _res$data2;const data=res===null||res===void 0?void 0:(_res$data2=res.data)===null||_res$data2===void 0?void 0:_res$data2.data;if(data!==null&&data!==void 0&&data.file){setPreviewData(data);}message/* default */.Ay.success("Invoice updated successfully");onRefresh();setDrawer(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{type:"preview"}));}).catch(err=>{const errMessage=(0,common/* handleError */.H4)(err);message/* default */.Ay.error(errMessage||"Something went wrong");}).finally(()=>{setIsLoading(false);});break;}default:{message/* default */.Ay.error("Something went wrong");setIsLoading(false);break;}}};/** Get all the quotations for the selected project
   * @param projectId - Project Id
   */const onGetQuotations=(projectId,quoteNumber)=>{if(!projectId)return;const{getAllRecords}=quotationModule;getAllRecords({projectId,quoteNumber:quoteNumber||undefined}).then(res=>{var _res$data3;const data=res===null||res===void 0?void 0:(_res$data3=res.data)===null||_res$data3===void 0?void 0:_res$data3.data;if(data){if(quoteNumber){setFetchedQuotations(prev=>[...prev,...data]);}else{setFetchedQuotations(data);}}}).catch(err=>{const errorMessage=(0,common/* handleError */.H4)(err);message/* default */.Ay.error(errorMessage||"Something went wrong, please try again later.");});};// Get the invoice type options from the enum
const options=(0,helpers_options/* getOptionsFromEnum */.uf)(commonEnums/* InvoiceTypeEnum */.RU);/** This function is used to render the table for the milestones */const milestonesTable=()=>{const columns=[{title:'',dataIndex:'id',key:'id',render(id,record){var _selectedMilestones$c;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"d-flex align-items-center",children:record.type==="supervision"?/*#__PURE__*/(0,jsx_runtime.jsx)(es_checkbox/* default */.A,{checked:checked,className:"mb-2",style:{transform:'scale(1.5)'},onChange:event=>checkUncheckSupervision(event)}):/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(_selectedMilestones$c=selectedMilestones.completedIds)!==null&&_selectedMilestones$c!==void 0&&_selectedMilestones$c.includes(id)?/*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.A,{title:"This milestone is already completed",zIndex:10001,children:/*#__PURE__*/(0,jsx_runtime.jsx)(CheckOutlined/* default */.A,{style:{color:'var(--color-primary-main)',transform:'scale(1.5)'}})}):/*#__PURE__*/(0,jsx_runtime.jsx)(es_checkbox/* default */.A,{checked:selectedMilestones.ids.includes(id),style:{transform:'scale(1.5)'},onChange:event=>checkUncheck(id,event.target.checked)})})});}},{title:'Title',dataIndex:'title',key:'title',render(value){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"d-flex align-items-center",children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:value})});}},{title:'Amount',dataIndex:'amount',key:'amount',render(value){return/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{children:[value," AED"]});}},{title:'Status',dataIndex:'status',key:'status',render(status,record){return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(record===null||record===void 0?void 0:record.type)!=="supervision"&&/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:commonEnums/* MilestoneStatus */.jY[status]})});}}];return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",className:"mb-2",children:"Select the milestones you want to add to the invoice"}),/*#__PURE__*/(0,jsx_runtime.jsx)(table/* default */.A,{columns:columns,dataSource:dataSource,pagination:false,rowKey:record=>record.id,scroll:{x:500}})]});};(0,react.useEffect)(()=>{setSelectedMilestones(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{completedIds:allCompletedIds}));},[allCompletedIds]);(0,react.useEffect)(()=>{onProjectSearch();},[debouncedProjectSearchTerm]);// in edit, check the milestones that are already added to the invoice
(0,react.useEffect)(()=>{if(type==="edit"){const invoiceItems=form.getFieldValue('invoiceItems');const ids=invoiceItems===null||invoiceItems===void 0?void 0:invoiceItems.map(item=>item===null||item===void 0?void 0:item.id);setSelectedMilestones(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{ids:ids||[]}));}},[type]);(0,react.useEffect)(()=>{if(type!=="create"&&invoiceId){module.getRecordById(invoiceId).then(res=>{var _res$data4,_data$Quotation;const data=res===null||res===void 0?void 0:(_res$data4=res.data)===null||_res$data4===void 0?void 0:_res$data4.data;setPreviewData(data);setQuotationMilestone((data===null||data===void 0?void 0:(_data$Quotation=data.Quotation)===null||_data$Quotation===void 0?void 0:_data$Quotation.QuotationMilestone)||[]);if(type==="edit"){form.setFieldsValue((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},data),{},{invoiceItems:data===null||data===void 0?void 0:data.InvoiceItems,type:data===null||data===void 0?void 0:data.type}));onCalculateTotal();}});}},[invoiceId,type]);(0,react.useEffect)(()=>{if(type==="edit"&&taxRateData){onCalculateTotal();}},[taxRateData]);// Fetch the quotations and the project for the selected project when there is a project id
(0,react.useEffect)(()=>{const condition=(type==="create"||type==="edit")&&(projectId||(previewData===null||previewData===void 0?void 0:previewData.projectId));if(condition){var _previewData$Quotatio;projectModule.getRecordsInList({ids:[projectId]}).then(res=>{var _res$data5;const data=res===null||res===void 0?void 0:(_res$data5=res.data)===null||_res$data5===void 0?void 0:_res$data5.data;setProjects(prev=>{// if the data is already present in the state, then don't add it again
const filteredData=data===null||data===void 0?void 0:data.filter(item=>{var _prev$data;return!(prev!==null&&prev!==void 0&&(_prev$data=prev.data)!==null&&_prev$data!==void 0&&_prev$data.find(prevItem=>prevItem.id===item.id));});// add the new data to the existing data
return{data:[...prev.data,...filteredData],loading:false};});form.setFieldValue("projectId",projectId||(previewData===null||previewData===void 0?void 0:previewData.projectId));});onGetQuotations(projectId,String((previewData===null||previewData===void 0?void 0:(_previewData$Quotatio=previewData.Quotation)===null||_previewData$Quotatio===void 0?void 0:_previewData$Quotatio.id)||""));}},[projectId,type,previewData===null||previewData===void 0?void 0:previewData.projectId]);/** Drawer Extra */const drawerExtra=/*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.A,{children:[(type==="create"||type==="edit")&&/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.A,{type:"primary",onClick:()=>form.submit(),loading:isLoading,children:"Preview"}),type==="preview"&&/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(previewData===null||previewData===void 0?void 0:previewData.status)===commonEnums/* InvoiceStatus */.Sx.Generated&&/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.A,{type:"link",style:{color:"var(--color-dark-main)"},onClick:()=>setDrawer(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{type:"edit",id:previewData===null||previewData===void 0?void 0:previewData.id})),children:"Edit"}),/*#__PURE__*/(0,jsx_runtime.jsx)(popconfirm/* default */.A,{title:/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["An email will be sent to the client. A copy of it will be sent to you as well.",/*#__PURE__*/(0,jsx_runtime.jsx)("br",{}),"Are you sure you want to submit this invoice?"]}),okText:"Yes",cancelText:"No",placement:"bottomRight",onConfirm:onSubmitInvoice,okButtonProps:{loading:isLoading},zIndex:99999,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* DropdownWithLabel */.g_,{trigger:["click"],size:"middle",type:"primary",label:"Submit",overlayStyle:{zIndex:10000},items:[{label:"Mark as sent",value:"1"}].map((option,index)=>{return{key:"option-".concat(index),label:option.label,onClick:()=>markAsSent(previewData===null||previewData===void 0?void 0:previewData.id)};})})})]})}),((previewData===null||previewData===void 0?void 0:previewData.status)===commonEnums/* InvoiceStatus */.Sx.Paid||(previewData===null||previewData===void 0?void 0:previewData.status)===commonEnums/* InvoiceStatus */.Sx.Canceled)&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:commonEnums/* InvoiceStatus */.Sx[previewData===null||previewData===void 0?void 0:previewData.status]}),(previewData===null||previewData===void 0?void 0:previewData.status)===commonEnums/* InvoiceStatus */.Sx.Sent&&/*#__PURE__*/(0,jsx_runtime.jsx)(Invoice_status/* default */.A,{item:previewData,setDrawer:setDrawer,onRefresh:onRefresh,permissions:permissions})]});return/*#__PURE__*/(0,jsx_runtime.jsxs)(es_drawer/* default */.A,{width:window.innerWidth>1300?1300:"100%",onClose:onClose,open:drawer.open,destroyOnClose:true,zIndex:9999,title:/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[type==="create"&&"Create Invoice",type==="edit"&&"Editing Invoice of ".concat((previewData===null||previewData===void 0?void 0:(_previewData$Client=previewData.Client)===null||_previewData$Client===void 0?void 0:_previewData$Client.name)||""," - ").concat((previewData===null||previewData===void 0?void 0:previewData.invoiceNumber)||""),type==="preview"&&"Preview Invoice of ".concat((previewData===null||previewData===void 0?void 0:(_previewData$Client2=previewData.Client)===null||_previewData$Client2===void 0?void 0:_previewData$Client2.name)||""," - ").concat((previewData===null||previewData===void 0?void 0:previewData.invoiceNumber)||"")]}),bodyStyle:{padding:type==="create"||type==="edit"?25:0,paddingTop:0},extra:drawerExtra,children:[(type==="create"||type==="edit")&&/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.A,{form:form,onFinish:values=>{var _finalValues$invoiceI;const finalValues=(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},values),{},{type:values.type||commonEnums/* InvoiceTypeEnum */.RU.Auto,hasSupervisionCharge:checked,projectId:(quotation===null||quotation===void 0?void 0:quotation.projectId)||values.projectId,milestoneIds:selectedMilestones.ids});// remove id from invoice items
finalValues.invoiceItems=(_finalValues$invoiceI=finalValues.invoiceItems)===null||_finalValues$invoiceI===void 0?void 0:_finalValues$invoiceI.map(item=>{return (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},item),{},{id:undefined});});onCreateOrEditInvoice(finalValues);},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.A,{gutter:[10,10],children:[/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.A,{span:window.innerWidth>1300&&!(quotation!==null&&quotation!==void 0&&quotation.id)?6:24,children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"invoiceNumber",initialValue:InvoiceNumber,rules:[{required:true,message:'Please enter invoice number!'}],style:{marginBottom:0},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{label:"Invoice Number",asterisk:true,placeHolder:"Invoice Number",size:"w100",style:{marginTop:1},onChange:e=>{var _e$target;const value=e===null||e===void 0?void 0:(_e$target=e.target)===null||_e$target===void 0?void 0:_e$target.value;setInvoiceNumber(value);}})})}),!(quotation!==null&&quotation!==void 0&&quotation.id)&&/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.A,{span:window.innerWidth>1300?6:24,children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"projectId",style:{marginBottom:0},rules:[{required:true,message:"Please select a project"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* SelectWithSearch */.fd,{label:"Project",loading:projects===null||projects===void 0?void 0:projects.loading,onSearch:value=>setSearchProjectTerm(value),options:projects===null||projects===void 0?void 0:(_projects$data=projects.data)===null||_projects$data===void 0?void 0:_projects$data.map(item=>({label:"".concat(item.referenceNumber," | ").concat(item.title),value:item.id})),onSelect:value=>{onGetQuotations(value);// reset the quotation id
form.setFieldsValue({quotationId:undefined});// reset the lestones
setQuotationMilestone([]);// remove the invoice items that was added from the quotation milestones
setSelectedMilestones(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{ids:[]}));onUpdateInvoiceItems();onCalculateTotal();}})})}),/*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.A,{span:window.innerWidth>1300?6:24,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("label",{className:"font-size-sm color-dark-main",children:"Issue Date"}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"issueDate",initialValue:moment_default()(),style:{marginBottom:0},children:/*#__PURE__*/(0,jsx_runtime.jsx)(date_picker/* default */.A,{placeholder:"Issue Date",className:styles_module.date_picker,popupClassName:styles_module.z_index,open:openDate.issueDate,showToday:false,onOpenChange:status=>setOpenDate(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{issueDate:status})),renderExtraFooter:()=>/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.date_footer,children:datePresets.map(days=>/*#__PURE__*/(0,jsx_runtime.jsxs)(es_button/* default */.A,{type:"ghost",size:"small",onClick:()=>{const date=moment_default()().subtract(days,'days');form.setFieldsValue({issueDate:date});setOpenDate(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{issueDate:false}));},children:[days," days ago"]},days))})})})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.A,{span:window.innerWidth>1300?6:24,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("label",{className:"font-size-sm color-dark-main",children:"Expiry Date"}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"expiryDate",initialValue:moment_default()().add(14,'days'),style:{marginBottom:5},children:/*#__PURE__*/(0,jsx_runtime.jsx)(date_picker/* default */.A,{placeholder:"Expiry Date",className:styles_module.date_picker,popupClassName:styles_module.z_index,open:openDate.expiryDate,showToday:false,onOpenChange:status=>setOpenDate(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{expiryDate:status})),renderExtraFooter:()=>/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.date_footer,children:datePresets.map(days=>/*#__PURE__*/(0,jsx_runtime.jsxs)(es_button/* default */.A,{type:"ghost",size:"small",onClick:()=>{const date=moment_default()().add(days,'days');form.setFieldsValue({expiryDate:date});setOpenDate(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{expiryDate:false}));},children:["In ",days," days"]},days))})})})]})]})}),!(quotation!==null&&quotation!==void 0&&quotation.id)&&(fetchedQuotations===null||fetchedQuotations===void 0?void 0:fetchedQuotations.length)>0&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"quotationId",rules:[{required:true,message:"Please select a quotation"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomSelect */.Ae,{label:"Quotation",asterisk:true,options:fetchedQuotations===null||fetchedQuotations===void 0?void 0:fetchedQuotations.map(item=>({label:(item===null||item===void 0?void 0:item.quoteNumber)||"Quote 0".concat(item===null||item===void 0?void 0:item.id),value:item.id})),onSelect:value=>{const quotation=fetchedQuotations===null||fetchedQuotations===void 0?void 0:fetchedQuotations.find(item=>item.id===value);setQuotationMilestone((quotation===null||quotation===void 0?void 0:quotation.QuotationMilestone)||[]);// remove the invoice items that was added from the quotation milestones
setSelectedMilestones(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{ids:[]}));onUpdateInvoiceItems();onCalculateTotal();}})})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"title",rules:[{required:true,message:'Please input the title!'}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{label:"Title",placeHolder:"Title",style:{width:"100%"},asterisk:true})}),(QuotationMilestone===null||QuotationMilestone===void 0?void 0:QuotationMilestone.length)>0&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"my-5",children:milestonesTable()}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.List,{name:"invoiceItems",initialValue:initialInvoiceValue,children:(fields,_ref)=>{let{add,remove}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsxs)(card/* default */.A,{size:"small",className:"mb-2 w-100",headStyle:{padding:"0px 0.5rem",margin:0,backgroundColor:"var(--color-light"},bodyStyle:{overflowX:"auto",overflowY:"hidden"},title:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"d-flex justify-space-between align-center w-100",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",weight:"semi",children:"Invoice Items"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{className:"font-weight-semi font-size-sm color-dark-main cursor-pointer",onClick:()=>add(),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(PlusOutlined/* default */.A,{})," Add More"]})]}),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(row/* default */.A,{gutter:[10,10],style:{minWidth:1300,overflowX:"auto",overflowY:"hidden"},children:invoiceItemColumns.map((item,index)=>/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.A,{span:item.span,style:item.style,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"normal",children:item.title})},"invoiceItem-".concat(index)))}),fields.map(_ref2=>{let{key,name}=_ref2,restField=(0,objectWithoutProperties/* default */.A)(_ref2,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.A,{gutter:[10,10],style:{minWidth:1300,overflowX:"auto",overflowY:"hidden"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.A,{span:4,children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},restField),{},{name:[name,"productId"],initialValue:undefined,style:{width:"100%",marginBottom:0,marginTop:name===0?0:10},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomSelect */.Ae,{options:productData===null||productData===void 0?void 0:productData.map(item=>({label:"".concat(item.productCode," - ").concat(item.title),value:item.id})),placeholder:"Select Product",onSelect:value=>{const product=productData===null||productData===void 0?void 0:productData.find(item=>item.id===value);const invoiceData=form.getFieldValue("invoiceItems");const invoice=invoiceData[name];if(product){invoice.amount=product.unitPrice;invoice.taxRateId=product.taxRateId;invoice.accountId=product.accountId;invoice.title=product.title;invoice.quantity=product.quantity||1;}form.setFieldsValue({invoiceItems:invoiceData});onCalculateTotal();}})}))}),/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.A,{span:5,children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},restField),{},{name:[name,"title"],initialValue:"",rules:[{required:true,message:"Missing item title"}],style:{width:"100%",marginBottom:0,marginTop:name===0?0:10},children:/*#__PURE__*/(0,jsx_runtime.jsx)(TextArea,{placeholder:"Title",className:styles_module.gen_border,autoSize:{minRows:1,maxRows:3}})}))}),/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.A,{span:2,children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},restField),{},{name:[name,"quantity"],initialValue:1,rules:[{required:true,message:"Missing item quantity"},{pattern:/^[0-9]+$/,message:"Only whole numbers are allowed"}],style:{width:"100%",marginBottom:0,marginTop:name===0?0:10},children:/*#__PURE__*/(0,jsx_runtime.jsx)(input_number/* default */.A,{placeholder:"Quantity",style:{width:"100%"},className:styles_module.gen_border,onChange:onCalculateTotal,parser:value=>value&&value.replace(/\$\s?|(,*)/g,'')||'',step:1,precision:0})}))}),/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.A,{span:3,children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},restField),{},{name:[name,"amount"],initialValue:"",rules:[{required:true,message:"Missing item amount"}],style:{width:"100%",marginBottom:0,marginTop:name===0?0:10},children:/*#__PURE__*/(0,jsx_runtime.jsx)(input_number/* default */.A,{placeholder:"Unit Amount",style:{width:"100%"},className:styles_module.gen_border,onChange:onCalculateTotal})}))}),/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.A,{span:4,children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},restField),{},{name:[name,"accountId"],initialValue:undefined,style:{width:"100%",marginBottom:0,marginTop:name===0?0:10},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomSelect */.Ae,{options:accountData===null||accountData===void 0?void 0:accountData.map(item=>({label:"".concat(item.accountCode," - ").concat(item.title),value:item.id})),placeholder:"Select Account"})}))}),/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.A,{span:2,children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},restField),{},{name:[name,"taxRateId"],initialValue:undefined,style:{width:"100%",marginBottom:0,marginTop:name===0?0:10},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomSelect */.Ae,{style:{width:130},placeholder:"Select Tax Rate",dropdownStyle:{zIndex:10000},options:taxRateData===null||taxRateData===void 0?void 0:taxRateData.map(item=>({label:item.title,value:item.id})),onSelect:onCalculateTotal})}))}),/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.A,{span:3,style:{display:"flex",alignItems:"center",justifyContent:"center",marginTop:name===0?0:10},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",weight:"semi",children:"".concat(getLineTotal(form.getFieldValue(["invoiceItems",name,"quantity"]),form.getFieldValue(["invoiceItems",name,"amount"])))})}),/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.A,{span:1,children:name!==0&&/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{type:"danger",size:"normal",fontSize:"sm",disabled:name===0?true:false,onClick:()=>onRemoveItem(remove,name),style:{marginTop:name===0?0:10},children:/*#__PURE__*/(0,jsx_runtime.jsx)(CloseOutlined/* default */.A,{})})})]},key);})]});}}),/*#__PURE__*/(0,jsx_runtime.jsxs)(card/* default */.A,{className:styles_module.total,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.total_item,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",children:"Subtotal"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",children:(0,common/* formatCurrency */.vv)(total.subtotal)})]}),total.vatData&&Array.from(total.vatData).map(_ref3=>{let[keys,ele]=_ref3;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.total_item,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",children:"".concat(ele.title," (").concat(ele.vatRate,"%)")}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",children:(0,common/* formatCurrency */.vv)(ele.totalVat)})]},"VAT_DATA".concat(keys));}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.total_item,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",weight:"bolder",children:"Total"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",weight:"bolder",children:(0,common/* formatCurrency */.vv)(total.total)})]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"type",style:{marginBottom:5,marginTop:20},label:"Invoice Type",initialValue:invoiceType,children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_radio/* default.Group */.Ay.Group,{name:"type",buttonStyle:"solid",onChange:e=>setInvoiceType(e.target.value),children:options.map(option=>/*#__PURE__*/(0,jsx_runtime.jsx)(es_radio/* default.Button */.Ay.Button,{value:Number(option.value),children:option.label},"invoiceType-".concat(option.value)))})}),invoiceType===commonEnums/* InvoiceTypeEnum */.RU.Auto&&/*#__PURE__*/(0,jsx_runtime.jsx)(es_alert/* default */.A,{message:"System will automatically generate invoice based on the above information",type:"warning",style:{marginTop:15}}),invoiceType===commonEnums/* InvoiceTypeEnum */.RU.Manual&&/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* ImageUploader */.GA,{name:"file"})]})}),type==="preview"&&/*#__PURE__*/(0,jsx_runtime.jsx)(PreviewFile/* default */.A,{file:previewData===null||previewData===void 0?void 0:previewData.file,loading:!previewData,tip:"Please wait while we are preparing the invoice..."})]});};/* harmony default export */ const Drawer = (InvoiceDrawer);

/***/ }),

/***/ 14270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9950);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92759);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48538);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56231);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(52765);
/* harmony import */ var _helpers_commonEnums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2360);
/* harmony import */ var _modules_Invoice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49925);
/* harmony import */ var _helpers_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88132);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44414);
const InvoiceStatusComp=props=>{const{item,onRefresh,setDrawer,permissions:{changeInvoiceStatus}}=props;const[messageApi,contextHolder]=antd__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay.useMessage();const[resumeProject,setResumeProject]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);const module=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>new _modules_Invoice__WEBPACK_IMPORTED_MODULE_2__/* .InvoiceModule */ .O(),[]);const openMessage=data=>{messageApi.open({key:data.key,type:data.type,content:data.content,duration:data.type==="loading"?0:2});};const onStatusChange=_status=>{if(item.id&&changeInvoiceStatus===true){openMessage({key:"update",type:"loading",content:"Updating..."});const data={status:_status,resumeProject:resumeProject};module.changeStatus(item.id,data).then(res=>{var _res$data;if(res!==null&&res!==void 0&&(_res$data=res.data)!==null&&_res$data!==void 0&&_res$data.data){var _res$data2;openMessage({key:"update",type:"success",content:res===null||res===void 0?void 0:(_res$data2=res.data)===null||_res$data2===void 0?void 0:_res$data2.message});onRefresh();// close the drawer
setDrawer({type:"create",open:false,id:0});}}).catch(err=>{const errorMessage=(0,_helpers_common__WEBPACK_IMPORTED_MODULE_3__/* .handleError */ .H4)(err);openMessage({key:"update",type:"error",content:errorMessage||"Something went wrong, please try again later."});});}else{openMessage({key:"update",type:"error",content:"You don't have permission to change status"});}};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[contextHolder,/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"d-flex flex-column align-center font-size-sm color-dark-800",children:[(item===null||item===void 0?void 0:item.status)!==_helpers_commonEnums__WEBPACK_IMPORTED_MODULE_1__/* .InvoiceStatus */ .Sx['Generated']&&(item===null||item===void 0?void 0:item.status)!==_helpers_commonEnums__WEBPACK_IMPORTED_MODULE_1__/* .InvoiceStatus */ .Sx['Sent']&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{children:_helpers_commonEnums__WEBPACK_IMPORTED_MODULE_1__/* .InvoiceStatus */ .Sx[item===null||item===void 0?void 0:item.status]}),(item===null||item===void 0?void 0:item.status)===_helpers_commonEnums__WEBPACK_IMPORTED_MODULE_1__/* .InvoiceStatus */ .Sx['Generated']&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{size:"small",type:"ghost",style:{fontSize:'0.7rem'},onClick:e=>{e.stopPropagation();setDrawer({type:"preview",open:true,id:item.id});},children:"Send Invoice"}),(item===null||item===void 0?void 0:item.status)===_helpers_commonEnums__WEBPACK_IMPORTED_MODULE_1__/* .InvoiceStatus */ .Sx['Sent']&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"d-flex",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,{title:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{children:["Are you sure you want to mark this invoice as paid?",/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"mt-2",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,{checked:resumeProject,onChange:e=>{setResumeProject(e.target.checked);},children:"Resume Project"})})]}),okText:"Yes",cancelText:"No",placement:"bottomRight",onConfirm:e=>{e===null||e===void 0?void 0:e.stopPropagation();onStatusChange(_helpers_commonEnums__WEBPACK_IMPORTED_MODULE_1__/* .InvoiceStatus */ .Sx.Paid);},zIndex:10000,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{type:"ghost",size:"small",style:{fontSize:'0.7rem',borderColor:'var(--color-primary-main)',color:'var(--color-primary-main)'},onClick:e=>e.stopPropagation(),children:"Mark as Paid"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,{title:"Are you sure you want to cancel this invoice?",okText:"Yes",cancelText:"No",placement:"bottomRight",onConfirm:e=>{e===null||e===void 0?void 0:e.stopPropagation();onStatusChange(_helpers_commonEnums__WEBPACK_IMPORTED_MODULE_1__/* .InvoiceStatus */ .Sx.Canceled);},onCancel:e=>e===null||e===void 0?void 0:e.stopPropagation(),zIndex:10000,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{type:"ghost",size:"small",danger:true,style:{fontSize:'0.7rem'},className:"ml-1",onClick:e=>e===null||e===void 0?void 0:e.stopPropagation(),children:"Mark as Cancelled"})})]})]})]});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InvoiceStatusComp);

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

/***/ 65450:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ BrandingThemeModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
class BrandingThemeModule{constructor(){this.endPoint="branding-theme";/** Get All Records */this.getAllRecords=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint,{params:query});};/** Get Record By Id */this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/").concat(id));};/** Delete Record By Id */this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete("".concat(this.endPoint,"/").concat(id));};/** Create Record */this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(this.endPoint,data);};/** Update Record */this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/").concat(id),data);};}}

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

/***/ 12975:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ ProjectTypeModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
class ProjectTypeModule{constructor(){this.endPoint="project-type";/**Get all project type records
  * @param query - query params
  */this.getAllRecords=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint,{params:query});};/**Get all publish project type records
  * @param query - query params
  */this.getPublishRecords=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/find-published"),{params:query});};/**Get project type record by id
  * @param id - project type id
  */this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint+"/"+id);};this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete(this.endPoint+"/"+id);};this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(this.endPoint,data);};this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch(this.endPoint+"/"+id,data);};}}

/***/ }),

/***/ 83480:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ QuotationModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
/* harmony import */ var _modules_Common_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21073);
class QuotationModule{constructor(){this.endPoint="quotation";/** Get all quotation records
   * @param query - query params
   */this.getAllRecords=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint,{params:query});};this.fetchTasksAssignedToMe=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/tasks/assignedToMe"),{params:query});};/** Get quotation record by id
   * @param id - quotation id
   */this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/findOne/").concat(id));};/** Create new quotation record
   * @param data - quotation data
   */this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(this.endPoint,data,{headers:_modules_Common_config__WEBPACK_IMPORTED_MODULE_1__/* .FormDataHeader */ .Y});};/** autoCreateFromApprovedQuotation
   * @param {AutoCreateFromApprovedQuotationTypes} data - Data to be created
   */this.autoCreateFromApprovedQuotation=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post("".concat(this.endPoint,"/autoCreateProjectFromApprovedQuotation/"),data);};/** Update quotation record
   * @param data - quotation data
   * @param id - quotation id
   */this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/updateOne/").concat(id),data);};/** Submit quotation by id
   * @param id - quotation id
   */this.submitQuotation=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/submitQuotation/").concat(id));};/** Change quotation status
   * @param id - quotation id
   * @param status - quotation status
   */this.changeStatus=(id,status)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/changeStatus/").concat(id),{status});};/** Delete quotation record
   * @param id - quotation id
   */this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete("".concat(this.endPoint,"/remove/").concat(id));};/** Mark Milestone as completed
   * @param id - milestone id
   */this.completeMilestone=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/completeMilestone/").concat(id));};/** Mark As Sent 
   * @param id - quotation id
   */this.markAsSent=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/markAsSent/").concat(id));};/** Prepare Unique Quote Number */this.prepareUniqueQuoteNumber=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/prepareUniqueQuoteNumber"),{params:query});};/** Check for duplicacy */this.checkForDuplicacy=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/checkForDuplicacy"),{params:query});};/** Quick Update 
   * @param id - quotation id
   * @param data.projectId - project id
   * @param data.submissionById - submission by id
   */this.quickUpdate=(id,data)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/quickUpdate/").concat(id),data);};}async fetchPaymentTermsByProjectId(projectId){try{// Fetch data from API
const response=await this.getAllRecords({projectId});// Log the entire response and response.data to inspect the format
console.log("API Response:",response);console.log("Response Data:",response.data);// Check if response.data is an object with a specific property containing the array
if(response.data&&response.data.data&&Array.isArray(response.data.data)){const quotations=response.data.data;// Extract payment terms from each quotation and flatten the array
const paymentTerms=quotations.flatMap(q=>q.paymentTerms||[]);return paymentTerms;}else{// Handle unexpected data format
console.error("Unexpected response data format:",response);throw new Error("Unexpected response data format");}}catch(error){console.error("Error fetching payment terms:",error);throw error;// Re-throw error for further handling if necessary
}}/** Fetch overall payment status
   * @param query - query params
   */ /** Update overall payment status
   * @param status - payment status
   */}

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

/***/ 90582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58168);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9950);
/* harmony import */ var _ant_design_icons_svg_es_asn_EditOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42701);
/* harmony import */ var _components_AntdIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61187);

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var EditOutlined = function EditOutlined(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_AntdIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({}, props, {
    ref: ref,
    icon: _ant_design_icons_svg_es_asn_EditOutlined__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A
  }));
};
if (false) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(EditOutlined));

/***/ }),

/***/ 72906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ icons_MoreOutlined)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
;// ./node_modules/@ant-design/icons-svg/es/asn/MoreOutlined.js
// This icon file is generated automatically.
var MoreOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M456 231a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0z"
      }
    }]
  },
  "name": "more",
  "theme": "outlined"
};
/* harmony default export */ const asn_MoreOutlined = (MoreOutlined);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 5 modules
var AntdIcon = __webpack_require__(61187);
;// ./node_modules/@ant-design/icons/es/icons/MoreOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var MoreOutlined_MoreOutlined = function MoreOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.A, (0,esm_extends/* default */.A)({}, props, {
    ref: ref,
    icon: asn_MoreOutlined
  }));
};
if (false) {}
/* harmony default export */ const icons_MoreOutlined = (/*#__PURE__*/react.forwardRef(MoreOutlined_MoreOutlined));

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