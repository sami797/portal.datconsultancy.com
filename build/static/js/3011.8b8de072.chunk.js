"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[3011],{

/***/ 23011:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Orders)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 18 modules
var es_form = __webpack_require__(10678);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 1 modules
var message = __webpack_require__(92759);
// EXTERNAL MODULE: ./node_modules/antd/es/radio/index.js + 4 modules
var es_radio = __webpack_require__(17811);
// EXTERNAL MODULE: ./src/Components/Atoms/index.tsx + 12 modules
var Atoms = __webpack_require__(9394);
// EXTERNAL MODULE: ./src/Components/Organisms/Common/styles.module.scss
var styles_module = __webpack_require__(96019);
;// ./src/Components/Organisms/SiteSettings/Orders/styles.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const Orders_styles_module = ({"orderItem":"styles_orderItem__nim7W","selected":"styles_selected__dAY4R","total":"styles_total__zMu+3","success":"styles_success__W9TPX","stats":"styles_stats__-NUfQ"});
// EXTERNAL MODULE: ./src/Components/Organisms/Skeletons/index.tsx
var Skeletons = __webpack_require__(70619);
// EXTERNAL MODULE: ./src/Components/Atoms/ServerErrorHandler/index.tsx
var ServerErrorHandler = __webpack_require__(13321);
// EXTERNAL MODULE: ./src/helpers/error-handler.ts
var error_handler = __webpack_require__(38266);
// EXTERNAL MODULE: ./src/services/axiosInstance.ts
var axiosInstance = __webpack_require__(83365);
;// ./src/Modules/OrganizationCreditPackage/index.ts
class OrgCreditsPackageModule{constructor(){this.endPoint="organization-credit-package";// create organization credit package
this.createRecord=data=>{return axiosInstance/* default */.A.post(this.endPoint+"/",data);};// credits top up
this.createTopUp=data=>{return axiosInstance/* default */.A.post("".concat(this.endPoint,"/topup-credits"),data);};/**create payment link using the order id or used to retrieve 
	 * the payment link and the corresponding data for the order */this.createPaymentLinkById=orderId=>{return axiosInstance/* default */.A.post("".concat(this.endPoint,"/generate-payment-link/").concat(orderId));};/** find my subscriptions data */this.getAllRecords=()=>{return axiosInstance/* default */.A.get("".concat(this.endPoint,"/find-my-subscriptions"));};/** get all organization subscriptions */this.getAllOrgSubscriptions=queryData=>{return axiosInstance/* default */.A.get("".concat(this.endPoint,"/findAll"),{params:queryData});};// get credit package by id
this.getRecordById=id=>{return axiosInstance/* default */.A.get("".concat(this.endPoint,"/").concat(id));};// get the packages of the organization by the id
this.getOrgPackageById=id=>{return axiosInstance/* default */.A.get("".concat(this.endPoint,"/find-packages-of-organization/").concat(id));};/** get my balance */this.getMyBalance=()=>{return axiosInstance/* default */.A.get("".concat(this.endPoint,"/find-my-balance"));};// submit successful transaction by cart id
this.submitTransactionById=cartId=>{return axiosInstance/* default */.A.post("".concat(this.endPoint,"/submitTelrTransaction/").concat(cartId));};// update credit package by id
this.updateRecord=(data,id)=>{return axiosInstance/* default */.A.patch("".concat(this.endPoint,"/").concat(id),data);};// update credit package subscription by id
this.updateSubscriptionById=id=>{return axiosInstance/* default */.A.get("".concat(this.endPoint,"/unsubscribe/").concat(id));};// validate coupon code
this.validateCouponCode=data=>{return axiosInstance/* default */.A.post("".concat(this.endPoint,"/validate-coupon-code"),data);};}}
// EXTERNAL MODULE: ./src/Modules/CreditsPackage/index.ts
var CreditsPackage = __webpack_require__(86560);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/SiteSettings/Orders/modal.tsx
const AgentOrdersModal=props=>{var _recordData$data;const{openModal,onCancel,type,reloadTableData}=props;const[form]=es_form/* default */.A.useForm();// credit packages module
const creditPackageModule=(0,react.useMemo)(()=>new CreditsPackage/* CreditsPackageModule */.l(),[]);// Organization Credit packages module
const orgCreditPackageModule=(0,react.useMemo)(()=>new OrgCreditsPackageModule(),[]);// credit package data
const[recordData,setRecordData]=(0,react.useState)({loading:true,error:{},data:[]});const[packageSelected,setPackageSelected]=(0,react.useState)();const[userCouponCode,setUserCouponCode]=(0,react.useState)('');const[amount,setAmount]=(0,react.useState)();// count down timer
const[count,setCount]=(0,react.useState)(0);const[timer,setTimer]=(0,react.useState)(null);const handleErrors=err=>{const error=(0,error_handler/* errorHandler */.r)(err);if(typeof error.message=="string"){setRecordData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},recordData),{},{error:error.message}));}else{let errData=(0,ServerErrorHandler/* HandleServerErrors */.p)(error.message,[]);form.setFields(errData);setRecordData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},recordData),{},{error:""}));}};const handleAlertClose=()=>{setRecordData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},recordData),{},{error:""}));};const getCreditPackageRecords=(0,react.useCallback)(()=>{creditPackageModule.getAllPublished().then(res=>{if(res.data&&res.data.data){setRecordData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},res.data),{},{loading:false}));}}).catch(err=>{console.error('Error getting credit packages',err===null||err===void 0?void 0:err.message);});},[creditPackageModule]);(0,react.useEffect)(()=>{getCreditPackageRecords();},[getCreditPackageRecords]);const onPackageSelected=event=>{const value=event.target.value;setPackageSelected(value);// 5% VAT
const VAT=value.amount*5/100;// set the total amount and VAT values
setAmount({vat:VAT,total:value.amount+VAT});};// Apply Discount
const handleApplyDiscount=async()=>{if((packageSelected===null||packageSelected===void 0?void 0:packageSelected.id)===0||!packageSelected){message/* default */.Ay.error('Please select a package');}else if(!userCouponCode){message/* default */.Ay.error('Please add coupon code');}else{const data={couponCode:userCouponCode,creditPackageId:packageSelected===null||packageSelected===void 0?void 0:packageSelected.id};await orgCreditPackageModule.validateCouponCode(data).then(res=>{var _res$data,_res$data2;const response=(_res$data=res.data)===null||_res$data===void 0?void 0:_res$data.data;message/* default */.Ay.success((_res$data2=res.data)===null||_res$data2===void 0?void 0:_res$data2.message);const DiscountCalc=()=>{const amount=packageSelected===null||packageSelected===void 0?void 0:packageSelected.amount;if((response===null||response===void 0?void 0:response.discountType)==="percentage"){//	Calculate discount
const discountAmount=response.value/100*amount;// calculate total amount after discount
const total=amount-discountAmount;// caculate VAT
const VAT=total*5/100;// total amount to be paid after discount and VAT
const totalWithVat=total+VAT;setAmount({discount:discountAmount,vat:VAT,total:totalWithVat});}else if((response===null||response===void 0?void 0:response.discountType)==="flat"){const discountAmount=(response===null||response===void 0?void 0:response.value)>amount?amount-1:response===null||response===void 0?void 0:response.value;// calculate total amount after discount
const total=amount-discountAmount;// calculate VAT
const VAT=total*5/100;// total amount to be paid after discount and VAT
const totalWithVat=total+VAT;setAmount({discount:discountAmount,vat:VAT,total:totalWithVat});}};// call discount function
DiscountCalc();// close the error message
handleAlertClose();}).catch(err=>{handleErrors(err);form.setFieldsValue({couponCode:''});});}};// Remove the Discount
const handleRemoveDiscount=()=>{setUserCouponCode('');form.setFieldsValue({couponCode:''});const amount=packageSelected===null||packageSelected===void 0?void 0:packageSelected.amount;const VAT=amount*5/100;setAmount({vat:VAT,total:amount+VAT});};const onFinish=formValues=>{setRecordData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},recordData),{},{buttonLoading:true}));const data={couponCode:userCouponCode,creditPackageId:packageSelected===null||packageSelected===void 0?void 0:packageSelected.id};orgCreditPackageModule.createRecord(data).then(res=>{// set count down timer to 3 seconds
setCount(3);reloadTableData();setRecordData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{buttonLoading:false}));// redirect to payment page after 3 seconds
setInterval(()=>{var _res$data3;window.location.href="/payment?id=".concat((_res$data3=res.data)===null||_res$data3===void 0?void 0:_res$data3.data.id);onCancel();},3000);}).catch(err=>{handleErrors(err);setRecordData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{buttonLoading:false}));});};(0,react.useEffect)(()=>{if(count>0){setTimer(setTimeout(()=>setCount(count-1),1000));}else{clearTimeout(timer);}},[count]);return/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomModal */.jo,{visible:openModal,closable:true,onCancel:onCancel,titleText:type==="edit"?"Edit Order":"Add New Order",showFooter:false,children:recordData!==null&&recordData!==void 0&&recordData.loading?/*#__PURE__*/(0,jsx_runtime.jsx)(Skeletons/* default */.A,{items:10}):/*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.A,{className:styles_module/* default */.A.form,onFinish:onFinish,form:form,children:[(recordData===null||recordData===void 0?void 0:recordData.error)&&/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomErrorAlert */.WZ,{description:recordData===null||recordData===void 0?void 0:recordData.error,isClosable:true,onClose:handleAlertClose}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"mb-4",children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_radio/* default.Group */.Ay.Group,{name:"package",children:recordData===null||recordData===void 0?void 0:(_recordData$data=recordData.data)===null||_recordData$data===void 0?void 0:_recordData$data.map(item=>/*#__PURE__*/(0,jsx_runtime.jsx)("label",{children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"".concat(Orders_styles_module.orderItem," ").concat((packageSelected===null||packageSelected===void 0?void 0:packageSelected.id)===item.id?Orders_styles_module.selected:''),children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"py-2 d-flex",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_radio/* default */.Ay,{value:item,onChange:onPackageSelected,className:"my-auto pr-3"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"my-auto",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"color-dark-main font-size-lg",children:item.localization.map(ele=>ele.title)}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"color-dark-sub font-size-sm mb-1",children:item.localization.map(ele=>ele.description)})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"ml-auto mr-0 pr-2 my-auto",style:{textAlign:'right'},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{className:"font-size-sm",children:[item.credits," Credits ",item.packageType==='monthly'?'/per month':'']}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{className:"font-size-md color-dark-main mb-0",children:["AED ",item.amount.toFixed(2)]})]})]})})},item.id))})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"couponCode",rules:[{required:false}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{size:"sm",label:"Have Coupon?",type:"text",onChange:e=>setUserCouponCode(e.currentTarget.value),disabled:amount!==null&&amount!==void 0&&amount.discount?true:false})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"mt-5 d-flex",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{size:"normal",fontSize:"sm",type:"primary",onClick:handleApplyDiscount,disabled:amount!==null&&amount!==void 0&&amount.discount?true:false,children:amount!==null&&amount!==void 0&&amount.discount?"Coupon Applied":"Apply Coupon"}),(amount===null||amount===void 0?void 0:amount.discount)&&/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{size:"normal",fontSize:"sm",type:"danger",onClick:handleRemoveDiscount,children:"Remove Coupon"})]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:Orders_styles_module.total,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{children:["Order Amount: AED ",packageSelected!==null&&packageSelected!==void 0&&packageSelected.amount?packageSelected===null||packageSelected===void 0?void 0:packageSelected.amount.toFixed(2):0]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{children:["Discount Applied: AED ",amount!==null&&amount!==void 0&&amount.discount?amount===null||amount===void 0?void 0:amount.discount.toFixed(2):0]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{children:["VAT (5%): AED ",amount!==null&&amount!==void 0&&amount.vat?amount.vat.toFixed(2):0]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{className:"font-size-md color-dark-main",children:["Total Amount:  AED ",amount!==null&&amount!==void 0&&amount.total?amount===null||amount===void 0?void 0:amount.total.toFixed(2):0]})]})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.footer,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{size:"normal",fontSize:"sm",onClick:onCancel,type:"plain",children:"Cancel"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{type:"primary",size:"normal",fontSize:"sm",htmlType:"submit",loading:recordData===null||recordData===void 0?void 0:recordData.buttonLoading,disabled:!packageSelected?true:false,children:count===0?"Continue":"Proceeding to payment in "+count})]})]})});};
// EXTERNAL MODULE: ./node_modules/antd/es/tag/index.js + 1 modules
var tag = __webpack_require__(12916);
// EXTERNAL MODULE: ./node_modules/antd/es/table/index.js + 96 modules
var table = __webpack_require__(41821);
// EXTERNAL MODULE: ./src/Components/Atoms/Headings/index.tsx
var Headings = __webpack_require__(35751);
// EXTERNAL MODULE: ./src/helpers/dateHandler.ts
var dateHandler = __webpack_require__(98933);
// EXTERNAL MODULE: ./src/helpers/common.ts
var common = __webpack_require__(88132);
;// ./src/Components/Organisms/SiteSettings/Orders/table-columns.tsx
// import { OrganizationCreditPackageStatus } from "../../../../helpers/commonEnums";
// import Componentstyles from './styles.module.scss'
// import { RESOURCE_BASE_URL } from "../../../../helpers/constants";
// const ActionComponent = (props: { record: Role } & ActionComponentProps) => {
// 	const { record, onEditIconClick, reloadTableData } = props;
// 	const [actionState, setActionState] = useState({
// 		confirmLoading: false,
// 		openPopConfirm: false,
// 	});
// 	const module = useMemo(() => new RolesModule(), []);
// 	const handleDelete = () => {
// 		setActionState({
// 			...actionState,
// 			confirmLoading: true,
// 		});
// 		module
// 			.deleteRecord(record.id)
// 			.then((res) => {
// 				setActionState({
// 					...actionState,
// 					openPopConfirm: false,
// 					confirmLoading: false,
// 				});
// 				reloadTableData();
// 			})
// 			.catch((err) => {
// 				setActionState({
// 					...actionState,
// 					confirmLoading: false,
// 				});
// 			});
// 	};
// 	const showPopconfirm = () => {
// 		setActionState({
// 			...actionState,
// 			openPopConfirm: true,
// 		});
// 	};
// 	return (
// 		<div className={styles.actions}>
// 			<span onClick={() => onEditIconClick(record)}>
// 				<img src="/images/editicon.svg" alt="" />
// 			</span>
// 			<Popconfirm
// 				visible={actionState.openPopConfirm}
// 				placement="top"
// 				title="Are you sure?"
// 				onConfirm={handleDelete}
// 				onCancel={() => setActionState({ ...actionState, openPopConfirm: false })}
// 				okButtonProps={{ loading: actionState.confirmLoading }}
// 				okText="Yes"
// 				cancelText="No"
// 			>
// 				<DeleteOutlined className={styles.bg__red} onClick={showPopconfirm} />
// 			</Popconfirm>
// 		</div>
// 	);
// };
function TableComponent(props){const{tableData,tableLoading}=props;const columns=[{title:"S.No",dataIndex:"index",key:"index",render:(text,record,index)=>index+1,width:"60px"},{title:"Organization",dataIndex:"organization",key:"organization",render:organization=>/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"d-flex",children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"ml-2 my-auto",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"xs",children:"".concat(organization===null||organization===void 0?void 0:organization.name)})})})})},{title:"Package",dataIndex:"package",key:"package",render:(text,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",children:"".concat(record.creditPackage.localization.map(item=>item.title))})},{title:"Amount Paid",dataIndex:"amount",key:"amount",render:(amount,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:(0,common/* formatCurrency */.vv)(amount)})},{title:"Credits",dataIndex:"credits",key:"credits",render:(credits,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:"".concat(credits," credits ").concat(record.creditPackage.packageType==='monthly'?'/per month':'')})},{title:"Date Added",dataIndex:"addedDate",key:"addedDate",render:addedDate=>/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:(0,dateHandler/* convertDate */.ic)(addedDate,"dd M,yy")})},{title:"Expiry Date",dataIndex:"expiresAt",key:"expiresAt",render:expiresAt=>/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:(0,dateHandler/* convertDate */.ic)(expiresAt,"dd M,yy")})},{title:"Status",className:'text-center',dataIndex:"status",key:"status",render:status=>/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"text-center",children:status===3&&/*#__PURE__*/(0,jsx_runtime.jsx)(tag/* default */.A,{color:"#ffcc00",children:"refund request"})})}];return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module/* default */.A.antdTableWrapper,children:/*#__PURE__*/(0,jsx_runtime.jsx)(table/* default */.A,{sticky:true,dataSource:tableData,columns:columns,pagination:false,scroll:{x:991},loading:tableLoading,rowKey:record=>"CreditsPackage-".concat(record.id)})});}
;// ./src/Modules/OrganizationCreditPackage/permissions.ts
let OrgCreditPackagePermissionsEnum=/*#__PURE__*/function(OrgCreditPackagePermissionsEnum){OrgCreditPackagePermissionsEnum["SUBSCRIBE"]="subscribeOrganizationCreditPackage";OrgCreditPackagePermissionsEnum["UPDATE"]="updateOrganizationCreditPackage";OrgCreditPackagePermissionsEnum["UNSUBSCRIBE"]="unsubscribeOrganizationCreditPackage";OrgCreditPackagePermissionsEnum["READ"]="readOrganizationCreditPackage";OrgCreditPackagePermissionsEnum["READ_BALANCE"]="readBalanceOrganizationCreditPackage";OrgCreditPackagePermissionsEnum["READ_OTHER_ORG_PACKAGES"]="readOtherOrganizationCreditPackage";OrgCreditPackagePermissionsEnum["TOPUP_CREDITS"]="topupCredits";return OrgCreditPackagePermissionsEnum;}({});
// EXTERNAL MODULE: ./src/Components/Templates/SiteSettings/index.tsx
var SiteSettings = __webpack_require__(16181);
;// ./src/Components/Organisms/SiteSettings/Orders/index.tsx
const breadCrumbsData=[{text:"Home",isLink:true,path:"/"},{isLink:true,text:"Site Settings",path:"/siteSettings"},{isLink:false,text:"Orders"}];function SiteOrders(){var _moduleData$meta,_moduleData$meta2,_moduleData$meta3,_moduleData$meta4;// available permissions for the properties page
const permissionSlug=(0,common/* getPermissionSlugs */.AH)(OrgCreditPackagePermissionsEnum);const[currentEditType,setcurrentEditType]=(0,react.useState)({editType:"new",recordId:0,openModal:false});// Organization Credit packages module
const module=(0,react.useMemo)(()=>new OrgCreditsPackageModule(),[]);const[moduleData,setModuleData]=(0,react.useState)({loading:false,error:{},data:[]});const[selectedFilters,setSelectedFilters]=(0,react.useState)({organizationId:0,creditPackageId:0,status:0,dateRange:[""]});const[reset,setReset]=(0,react.useState)(false);const onSelected=event=>{const{name,value}=event===null||event===void 0?void 0:event.target;if(name==="organizationId"||name==="creditPackageId"||name==="status"){const isValidNumber=(0,common/* isNumber */.Et)(value);if(!isValidNumber){let label="";switch(name){case"organizationId":{label="Organization ID";break;}case"creditPackageId":{label="Credit Package ID";break;}case"status":{label="Status";break;}}return message/* default */.Ay.error("".concat(label," should be a number"));}}// set the selected value in the state 
setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{[name]:value}));};const onReset=(0,react.useCallback)((name,value)=>{if(name){setReset(true);setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{[name]:value}));}},[selectedFilters]);const onCancelClick=()=>{setcurrentEditType((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},currentEditType),{},{openModal:!currentEditType.openModal,editType:"new"}));};const onEditIconClick=record=>{setcurrentEditType((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},currentEditType),{},{editType:"edit",recordId:record.id,openModal:true}));};const reloadTableData=(0,react.useCallback)(query=>{setModuleData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},moduleData),{},{loading:true}));module.getAllOrgSubscriptions(query).then(res=>{setModuleData((0,objectSpread2/* default */.A)({},res.data));}).catch(err=>{message/* default */.Ay.error(err.response.data.message);});},[module,moduleData]);const onUpdate=(0,react.useCallback)(()=>{var _selectedFilters$date,_selectedFilters$date2;const fromDateString=((_selectedFilters$date=selectedFilters.dateRange)===null||_selectedFilters$date===void 0?void 0:_selectedFilters$date[0])||"";const toDateString=((_selectedFilters$date2=selectedFilters.dateRange)===null||_selectedFilters$date2===void 0?void 0:_selectedFilters$date2[1])||"";const fromDate=fromDateString?(0,dateHandler/* convertDate */.ic)(fromDateString,"yy-mm-dd"):undefined;const toDate=toDateString?(0,dateHandler/* convertDate */.ic)(toDateString,"yy-mm-dd"):undefined;const data={organizationId:selectedFilters.organizationId>0?selectedFilters.organizationId:undefined,creditPackageId:selectedFilters.creditPackageId>0?selectedFilters.creditPackageId:undefined,status:selectedFilters.status>0?selectedFilters.status:undefined,fromDate:fromDate,toDate:toDate};// get the data from the api
reloadTableData(data);},[selectedFilters]);const onPaginationChange=(0,react.useCallback)((page,pageSize)=>{var _selectedFilters$date3,_selectedFilters$date4;const fromDateString=((_selectedFilters$date3=selectedFilters.dateRange)===null||_selectedFilters$date3===void 0?void 0:_selectedFilters$date3[0])||"";const toDateString=((_selectedFilters$date4=selectedFilters.dateRange)===null||_selectedFilters$date4===void 0?void 0:_selectedFilters$date4[1])||"";const fromDate=fromDateString?(0,dateHandler/* convertDate */.ic)(fromDateString,"yy-mm-dd"):undefined;const toDate=toDateString?(0,dateHandler/* convertDate */.ic)(toDateString,"yy-mm-dd"):undefined;const params={page:page,perPage:pageSize,organizationId:selectedFilters.organizationId>0?selectedFilters.organizationId:undefined,creditPackageId:selectedFilters.creditPackageId>0?selectedFilters.creditPackageId:undefined,status:selectedFilters.status>0?selectedFilters.status:undefined,fromDate:fromDate,toDate:toDate};reloadTableData(params);},[selectedFilters]);(0,react.useEffect)(()=>{reloadTableData();},[]);(0,react.useEffect)(()=>{if(reset){onUpdate();}// after 2 seconds set reset clicked state to false
const timer=setTimeout(()=>{setReset(false);},2000);return()=>clearTimeout(timer);},[reset,selectedFilters,onUpdate]);return/*#__PURE__*/(0,jsx_runtime.jsxs)(SiteSettings["default"],{permissionSlug:permissionSlug,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* PageHeader */.zY,{heading:"Orders",breadCrumbData:breadCrumbsData,filters:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"input",label:"Organization ID",name:"organizationId",value:Number(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.organizationId)>0?String(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.organizationId):"",onChange:onSelected,onReset:()=>onReset("organizationId",0),onUpdate:onUpdate})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"input",label:"Credit Package ID",name:"creditPackageId",value:Number(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.creditPackageId)>0?String(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.creditPackageId):"",onChange:onSelected,onReset:()=>onReset("creditPackageId",0),onUpdate:onUpdate})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"datepicker",label:"Date",name:"dateRange",onChange:value=>{setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{dateRange:value}));},onReset:()=>onReset("dateRange",[]),onUpdate:onUpdate})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"radio",label:"Status",name:"status",value:selectedFilters!==null&&selectedFilters!==void 0&&selectedFilters.status?String(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.status):"",onChange:onSelected,onReset:()=>onReset("status",0),onUpdate:onUpdate,options:Object.entries([]).map(_ref=>{let[key,value]=_ref;return{label:(0,common/* capitalize */.ZH)(key),value:String(value)};})})})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableComponent,{tableData:moduleData.data,tableLoading:moduleData.loading,onEditIconClick:onEditIconClick,reloadTableData:reloadTableData}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Pagination */.dK,{total:moduleData===null||moduleData===void 0?void 0:(_moduleData$meta=moduleData.meta)===null||_moduleData$meta===void 0?void 0:_moduleData$meta.total,current:moduleData===null||moduleData===void 0?void 0:(_moduleData$meta2=moduleData.meta)===null||_moduleData$meta2===void 0?void 0:_moduleData$meta2.page,defaultPageSize:moduleData!==null&&moduleData!==void 0&&(_moduleData$meta3=moduleData.meta)!==null&&_moduleData$meta3!==void 0&&_moduleData$meta3.perPage?moduleData===null||moduleData===void 0?void 0:(_moduleData$meta4=moduleData.meta)===null||_moduleData$meta4===void 0?void 0:_moduleData$meta4.perPage:10,pageSizeOptions:[10,20,50,100],onChange:onPaginationChange}),currentEditType.openModal&&/*#__PURE__*/(0,jsx_runtime.jsx)(AgentOrdersModal,{type:currentEditType.editType,reloadTableData:reloadTableData,onCancel:onCancelClick,openModal:currentEditType.openModal})]});}/* harmony default export */ const Orders = (SiteOrders);

/***/ }),

/***/ 86560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ CreditsPackagePromotion),
/* harmony export */   l: () => (/* binding */ CreditsPackageModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
/* harmony import */ var _Common_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21073);
class CreditsPackageModule{constructor(){this.endPoint="credit-package";this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(this.endPoint+"/",data,{headers:_Common_config__WEBPACK_IMPORTED_MODULE_1__/* .FormDataHeader */ .Y});};this.getAllRecords=()=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint);};this.getAllPublished=()=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint+"/findPublished");};this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/").concat(id,"?all=true"));};this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/").concat(id),data,{headers:_Common_config__WEBPACK_IMPORTED_MODULE_1__/* .FormDataHeader */ .Y});};this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete("".concat(this.endPoint,"/").concat(id));};}}class CreditsPackagePromotion{constructor(){this.endPoint="credit-package-promotions";this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(this.endPoint+"/",data);};this.getAllRecords=()=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint);};this.getRecordById=promotionId=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/").concat(promotionId));};this.deleteMultipleRecords=(promotionId,packageIds)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete("".concat(this.endPoint,"/removeMultiple/").concat(promotionId),{params:{packageIds}});};this.deleteRecordById=(promotionId,creditPackageId)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete("".concat(this.endPoint,"/").concat(promotionId,"/").concat(creditPackageId));};this.updateRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch(this.endPoint+"/",data);};}}

/***/ })

}]);