"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[4185],{

/***/ 87031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S: () => (/* binding */ CardShimmer)
});

// EXTERNAL MODULE: ./node_modules/antd/es/skeleton/index.js + 11 modules
var skeleton = __webpack_require__(46005);
;// ./src/Components/Atoms/CardShimmer/styles.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"card":"styles_card__k61KP"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Atoms/CardShimmer/index.tsx
const CardShimmer=()=>{return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.card,children:/*#__PURE__*/(0,jsx_runtime.jsx)(skeleton/* default */.A,{active:true})});};

/***/ }),

/***/ 3851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Details)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(42074);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(98341);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/ArrowLeftOutlined.js + 1 modules
var ArrowLeftOutlined = __webpack_require__(35821);
// EXTERNAL MODULE: ./src/Components/Atoms/ErrorCodes/index.tsx + 1 modules
var ErrorCodes = __webpack_require__(36250);
// EXTERNAL MODULE: ./src/Components/Templates/Layout/index.tsx + 28 modules
var Layout = __webpack_require__(81168);
// EXTERNAL MODULE: ./src/hooks/index.ts + 5 modules
var hooks = __webpack_require__(91970);
// EXTERNAL MODULE: ./src/Modules/Client/index.ts
var Client = __webpack_require__(97097);
// EXTERNAL MODULE: ./src/Modules/Client/permissions.ts
var Client_permissions = __webpack_require__(4209);
// EXTERNAL MODULE: ./node_modules/antd/es/typography/index.js + 15 modules
var typography = __webpack_require__(30377);
// EXTERNAL MODULE: ./node_modules/antd/es/avatar/index.js + 3 modules
var avatar = __webpack_require__(75871);
;// ./src/Components/Organisms/Dashboard/Clients/Details/styles.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"container":"styles_container__3pZbv","back":"styles_back__MV-qZ","client":"styles_client__7FxY+","client_background":"styles_client_background__Zth6Y","client_content":"styles_client_content__KKjCC","client_content_name":"styles_client_content_name__u4SMW","client_content_email":"styles_client_content_email__GTvxx","client_content_phone":"styles_client_content_phone__+HXYi","client_content_extra":"styles_client_content_extra__qwnm6"});
// EXTERNAL MODULE: ./src/helpers/constants.ts
var constants = __webpack_require__(65944);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/UserOutlined.js + 1 modules
var UserOutlined = __webpack_require__(79378);
// EXTERNAL MODULE: ./src/Components/Icons/index.tsx + 58 modules
var Icons = __webpack_require__(63668);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/Dashboard/Clients/Details/overview.tsx
const{Paragraph}=typography/* default */.A;const ClientDetailsOverview=_ref=>{let{client}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.client,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.client_background}),/*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default */.A,{size:100,src:"".concat(constants/* RESOURCE_BASE_URL */.to).concat(client===null||client===void 0?void 0:client.logo),icon:/*#__PURE__*/(0,jsx_runtime.jsx)(UserOutlined/* default */.A,{}),className:styles_module.client_avatar}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.client_content,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:styles_module.client_content_name,children:client===null||client===void 0?void 0:client.name}),(client===null||client===void 0?void 0:client.email)&&/*#__PURE__*/(0,jsx_runtime.jsxs)("a",{className:styles_module.client_content_email,href:"mailto:".concat(client===null||client===void 0?void 0:client.email),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Icons/* EnvelopeIcon */.u6,{width:18,height:18}),/*#__PURE__*/(0,jsx_runtime.jsx)(Paragraph,{ellipsis:{rows:1,expandable:false},copyable:{text:client===null||client===void 0?void 0:client.email},className:"mb-1",children:client===null||client===void 0?void 0:client.email})]}),(client===null||client===void 0?void 0:client.phone)&&/*#__PURE__*/(0,jsx_runtime.jsxs)("a",{className:styles_module.client_content_phone,href:"tel:".concat((client===null||client===void 0?void 0:client.phoneCode)||"971").concat(client===null||client===void 0?void 0:client.phone),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Icons/* PhoneIcon */.Es,{width:18,height:18}),/*#__PURE__*/(0,jsx_runtime.jsx)(Paragraph,{ellipsis:{rows:1,expandable:false},copyable:{text:"+".concat((client===null||client===void 0?void 0:client.phoneCode)||"971").concat(client===null||client===void 0?void 0:client.phone)},className:"mb-1",children:"+".concat((client===null||client===void 0?void 0:client.phoneCode)||"971").concat(client===null||client===void 0?void 0:client.phone)})]})]})]});};/* harmony default export */ const overview = (ClientDetailsOverview);
// EXTERNAL MODULE: ./node_modules/antd/es/segmented/index.js + 2 modules
var segmented = __webpack_require__(84649);
// EXTERNAL MODULE: ./src/Components/Atoms/Headings/index.tsx
var Headings = __webpack_require__(35751);
// EXTERNAL MODULE: ./src/Modules/Project/index.ts
var Project = __webpack_require__(50167);
// EXTERNAL MODULE: ./src/Components/Organisms/Projects/Card/index.tsx + 1 modules
var Card = __webpack_require__(56052);
// EXTERNAL MODULE: ./src/Modules/ProjectState/index.ts
var ProjectState = __webpack_require__(45732);
// EXTERNAL MODULE: ./src/Components/Atoms/Pagination/index.tsx + 1 modules
var Pagination = __webpack_require__(6742);
// EXTERNAL MODULE: ./src/Components/Atoms/CardShimmer/index.tsx + 1 modules
var CardShimmer = __webpack_require__(87031);
// EXTERNAL MODULE: ./src/Components/Atoms/CustomEmpty/index.tsx
var CustomEmpty = __webpack_require__(49758);
;// ./src/Components/Organisms/Dashboard/Clients/Details/Projects/index.tsx
const ClientProjects=_ref=>{let{clientId}=_ref;const{userPermissions}=(0,es/* useSelector */.d4)(state=>state.usersReducer);const permissions=userPermissions;const{readProject}=permissions;const module=(0,react.useMemo)(()=>new Project/* ProjectModule */.K(),[]);const projectStateModule=(0,react.useMemo)(()=>new ProjectState/* ProjectStateModule */.j(),[]);const condition=(0,react.useMemo)(()=>clientId>0&&readProject===true,[readProject,clientId]);const{data,onRefresh,meta,loading}=(0,hooks/* useConditionFetchData */.P6)({method:module.getAllRecords,initialQuery:{clientId,perPage:10,isClosed:false},condition});const{data:projectStates}=(0,hooks/* useConditionFetchData */.P6)({method:()=>projectStateModule.getPublishedRecords({perPage:100}),condition});return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:readProject===true&&/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"d-flex align-center",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",weight:"bold",className:"mr-2",children:"Projects"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{overflow:"auto"},children:/*#__PURE__*/(0,jsx_runtime.jsx)(segmented/* default */.A,{defaultValue:"isClosed",options:[{label:'All',value:'all'},{label:'Active',value:'isClosed'}],onChange:value=>{if(value==='all')return onRefresh({clientId,perPage:10});onRefresh({isClosed:false,clientId,perPage:10});}})})]}),!data&&loading&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{display:"flex",flexWrap:"wrap",width:"100%",gap:10,justifyContent:"center"},children:Array(3).fill(0).map((_item,index)=>/*#__PURE__*/(0,jsx_runtime.jsx)(CardShimmer/* CardShimmer */.S,{},"shimmerItem-".concat(index)))}),!loading&&(data===null||data===void 0?void 0:data.length)===0&&/*#__PURE__*/(0,jsx_runtime.jsx)(CustomEmpty/* default */.A,{description:"No Projects Found"}),data&&(data===null||data===void 0?void 0:data.length)>0&&/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Card/* default */.A,{data:{allProjects:data,onRefresh:()=>onRefresh({clientId,perPage:10}),projectStates:projectStates},permissions:permissions}),/*#__PURE__*/(0,jsx_runtime.jsx)(Pagination/* Pagination */.d,{total:(meta===null||meta===void 0?void 0:meta.total)||0,current:(meta===null||meta===void 0?void 0:meta.page)||1,defaultPageSize:(meta===null||meta===void 0?void 0:meta.pageCount)||10,pageSizeOptions:[10,20,50,100],onChange:(page,perPage)=>{onRefresh({page,perPage,clientId});}})]})]})});};/* harmony default export */ const Projects = (ClientProjects);
// EXTERNAL MODULE: ./src/helpers/commonEnums.ts
var commonEnums = __webpack_require__(2360);
// EXTERNAL MODULE: ./src/Modules/Quotation/index.ts
var Quotation = __webpack_require__(83480);
// EXTERNAL MODULE: ./src/Components/Organisms/Quotations/Card/index.tsx + 2 modules
var Quotations_Card = __webpack_require__(50179);
;// ./src/Components/Organisms/Dashboard/Clients/Details/Quotations/index.tsx
var SegmentedValues=/*#__PURE__*/function(SegmentedValues){SegmentedValues["all"]="all";SegmentedValues["active"]="active";SegmentedValues["confirmed"]="confirmed";SegmentedValues["rejected"]="rejected";SegmentedValues["draft"]="draft";SegmentedValues["revised"]="revised";return SegmentedValues;}(SegmentedValues||{});// Status Filters
const statusValues={all:undefined,active:[commonEnums/* QuotationStatus */.xP.New,commonEnums/* QuotationStatus */.xP.Sent],confirmed:[commonEnums/* QuotationStatus */.xP.Confirmed],rejected:[commonEnums/* QuotationStatus */.xP.Rejected],draft:[commonEnums/* QuotationStatus */.xP.New],revised:[commonEnums/* QuotationStatus */.xP.Revised]};const ClientQuotations=_ref=>{let{clientId}=_ref;const{userPermissions}=(0,es/* useSelector */.d4)(state=>state.usersReducer);const permissions=userPermissions;const{readQuotation}=permissions;const module=(0,react.useMemo)(()=>new Quotation/* QuotationModule */.v(),[]);const condition=(0,react.useMemo)(()=>clientId&&readQuotation===true,[readQuotation,clientId]);const{data,loading,meta,onRefresh}=(0,hooks/* useConditionFetchData */.P6)({method:module.getAllRecords,initialQuery:{clientId,__status:statusValues.active},condition});const{drawer,setDrawer}=(0,hooks/* useQuotationDrawer */.V1)();// Create Project Modal State
const{newProject,setNewProject}=(0,hooks/* useNewProjectModal */.QZ)();return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:readQuotation===true&&/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"d-flex align-center",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",weight:"bold",className:"mr-2",children:"Quotations"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{overflow:"auto"},children:/*#__PURE__*/(0,jsx_runtime.jsx)(segmented/* default */.A,{defaultValue:"active",options:[{label:'All',value:'all'},{label:'Active',value:'active'}],onChange:value=>{if(value==='all')return onRefresh({clientId,perPage:10});const _value=value;onRefresh({__status:statusValues[_value],clientId,perPage:10});}})})]}),!data&&loading&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{display:"flex",flexWrap:"wrap",width:"100%",gap:10,justifyContent:"center"},children:Array(3).fill(0).map((_item,index)=>/*#__PURE__*/(0,jsx_runtime.jsx)(CardShimmer/* CardShimmer */.S,{},"shimmerItem-".concat(index)))}),!loading&&(data===null||data===void 0?void 0:data.length)===0&&/*#__PURE__*/(0,jsx_runtime.jsx)(CustomEmpty/* default */.A,{description:"No Quotations Found"}),data&&(data===null||data===void 0?void 0:data.length)>0&&/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Quotations_Card/* default */.A,{permissions:permissions,data:{allQuotation:data,onRefresh:()=>onRefresh({clientId,onlyGovernmentFees:true})},quotationDrawer:drawer,setQuotationDrawer:setDrawer,setNewProject:setNewProject,newProject:newProject}),/*#__PURE__*/(0,jsx_runtime.jsx)(Pagination/* Pagination */.d,{total:(meta===null||meta===void 0?void 0:meta.total)||0,current:(meta===null||meta===void 0?void 0:meta.page)||1,defaultPageSize:(meta===null||meta===void 0?void 0:meta.pageCount)||10,pageSizeOptions:[10,20,50,100],onChange:(page,perPage)=>{onRefresh({page,perPage,clientId});}})]})]})});};/* harmony default export */ const Quotations = (ClientQuotations);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 1 modules
var message = __webpack_require__(92759);
// EXTERNAL MODULE: ./src/Modules/Invoice/index.ts
var Invoice = __webpack_require__(49925);
;// ./src/Components/Organisms/Dashboard/Clients/Details/Invoice/styles.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const Invoice_styles_module = ({"badge":"styles_badge__Q2x9p","actionButtons":"styles_actionButtons__Zd+Xp"});
// EXTERNAL MODULE: ./src/Components/Organisms/Invoice/table-columns.tsx + 3 modules
var table_columns = __webpack_require__(56946);
// EXTERNAL MODULE: ./src/Components/Organisms/Invoice/Drawer/index.tsx + 3 modules
var Drawer = __webpack_require__(53822);
// EXTERNAL MODULE: ./src/Components/Organisms/Invoice/Notes/index.tsx + 1 modules
var Notes = __webpack_require__(31538);
;// ./src/Components/Organisms/Dashboard/Clients/Details/Invoice/index.tsx
const{Paragraph: Invoice_Paragraph}=typography/* default */.A;var Invoice_SegmentedValues=/*#__PURE__*/function(SegmentedValues){SegmentedValues["all"]="all";SegmentedValues["active"]="active";SegmentedValues["paid"]="paid";SegmentedValues["canceled"]="canceled";SegmentedValues["draft"]="draft";return SegmentedValues;}(Invoice_SegmentedValues||{});// Status Filters
const Invoice_statusValues={all:undefined,active:[commonEnums/* InvoiceStatus */.Sx.Generated,commonEnums/* InvoiceStatus */.Sx.Sent],paid:[commonEnums/* InvoiceStatus */.Sx.Paid],canceled:[commonEnums/* InvoiceStatus */.Sx.Canceled],draft:[commonEnums/* InvoiceStatus */.Sx.Generated]};const ClientInvoice=_ref=>{let{clientId}=_ref;const{userPermissions}=(0,es/* useSelector */.d4)(state=>state.usersReducer);const permissions=userPermissions;const{readInvoice}=permissions;const module=(0,react.useMemo)(()=>new Invoice/* InvoiceModule */.O(),[]);const condition=(0,react.useMemo)(()=>clientId>0&&readInvoice===true,[readInvoice,clientId]);const{data,loading,onRefresh,meta}=(0,hooks/* useConditionFetchData */.P6)({method:module.getAllRecords,initialQuery:{clientId,__status:Invoice_statusValues[Invoice_SegmentedValues.active],perPage:10},condition:condition});// drawer state
const{drawer,setDrawer}=(0,hooks/* useInvoiceDrawer */.C9)();const[openNotesModal,setOpenNotesModal]=(0,react.useState)({type:"notes",recordId:0,open:false});const onEditIconClick=recordId=>{if(permissions.updateInvoice===false){message/* default */.Ay.error("You don't have permission to update record");return;}setDrawer({open:true,id:recordId,type:"edit",projectId:0});};const onAddNoteClick=record=>{if(permissions.updateInvoice===false){message/* default */.Ay.error("You don't have permission to add notes");return;}setOpenNotesModal({type:"notes",open:true,recordId:record===null||record===void 0?void 0:record.id});};return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[readInvoice===true&&/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"d-flex align-center",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",weight:"bold",className:"mr-2",children:"Invoices"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{overflow:"auto"},children:/*#__PURE__*/(0,jsx_runtime.jsx)(segmented/* default */.A,{defaultValue:"active",options:[{label:'All',value:'all'},{label:'Active',value:'active'}],onChange:value=>{if(value==='all')return onRefresh({clientId});const _value=value;onRefresh({__status:Invoice_statusValues[_value],clientId});}})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Invoice_styles_module.antdTableWrapper,children:/*#__PURE__*/(0,jsx_runtime.jsx)(table_columns/* default */.A,{tableData:data||[],tableLoading:loading,permissions:permissions,setDrawer:setDrawer,onEditIconClick:onEditIconClick,onAddNoteClick:onAddNoteClick,reloadTableData:()=>{onRefresh({clientId,__status:Invoice_statusValues[Invoice_SegmentedValues.active]});}})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Pagination/* Pagination */.d,{total:(meta===null||meta===void 0?void 0:meta.total)||0,current:(meta===null||meta===void 0?void 0:meta.page)||1,defaultPageSize:(meta===null||meta===void 0?void 0:meta.pageCount)||10,pageSizeOptions:[10,20,50,100],onChange:(page,perPage)=>{onRefresh({page,perPage,clientId});}})]}),drawer.open&&/*#__PURE__*/(0,jsx_runtime.jsx)(Drawer/* default */.A,{drawer:drawer,setDrawer:setDrawer,onRefresh:onRefresh,permissions:permissions}),openNotesModal.open&&/*#__PURE__*/(0,jsx_runtime.jsx)(Notes/* default */.A,{open:openNotesModal.open,permissions:permissions,invoiceId:openNotesModal.recordId,onRefresh:onRefresh,onCancel:()=>{setOpenNotesModal({type:"new",recordId:0,open:false});}})]});};/* harmony default export */ const Details_Invoice = (ClientInvoice);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./src/Modules/Transactions/index.ts
var Transactions = __webpack_require__(54475);
// EXTERNAL MODULE: ./src/Components/Organisms/Transactions/table-columns.tsx + 4 modules
var Transactions_table_columns = __webpack_require__(53939);
;// ./src/Components/Organisms/Dashboard/Clients/Details/Transactions/index.tsx
var Transactions_SegmentedValues=/*#__PURE__*/function(SegmentedValues){SegmentedValues["all"]="all";SegmentedValues["sent_to_client"]="sent_to_client";SegmentedValues["pending_payment"]="pending_payment";SegmentedValues["paid"]="paid";SegmentedValues["canceled"]="canceled";return SegmentedValues;}(Transactions_SegmentedValues||{});// Status Filters
const Transactions_statusValues={all:undefined,sent_to_client:[commonEnums/* TransactionStatus */.x8["Sent to client"]],pending_payment:[commonEnums/* TransactionStatus */.x8["Pending payment"],commonEnums/* TransactionStatus */.x8["Sent to client"]],paid:[commonEnums/* TransactionStatus */.x8.Paid],canceled:[commonEnums/* TransactionStatus */.x8.Canceled]};const ClientGovernmentFees=_ref=>{let{clientId}=_ref;const{userPermissions}=(0,es/* useSelector */.d4)(state=>state.usersReducer);const permissions=userPermissions;const{readTransaction,updateTransaction}=permissions;const module=(0,react.useMemo)(()=>new Transactions/* TransactionsModule */.c(),[]);const[modalOpen,setModalOpen]=(0,react.useState)({type:"new",recordId:0,open:false});const condition=(0,react.useMemo)(()=>clientId&&readTransaction===true,[readTransaction,clientId]);const{data,loading,onRefresh,meta}=(0,hooks/* useConditionFetchData */.P6)({method:module.getAllRecords,initialQuery:{clientId,onlyGovernmentFees:true},condition});const onEditIconClick=record=>{if(updateTransaction===false){message/* default */.Ay.error("You don't have permission to update this record");return;}setModalOpen((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},modalOpen),{},{open:!modalOpen.open,type:"edit",recordId:record.id}));};return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:readTransaction===true&&/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"d-flex align-center",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",weight:"bold",className:"mr-2",children:"Government Fees"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{overflow:"auto"},children:/*#__PURE__*/(0,jsx_runtime.jsx)(segmented/* default */.A,{defaultValue:"active",options:[{label:'All',value:'all'},{label:'Active',value:'active'}],onChange:value=>{if(value==='all')return onRefresh({clientId,perPage:10});const _value=value;onRefresh({__status:Transactions_statusValues[_value],clientId,perPage:10});}})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Transactions_table_columns/* default */.A,{tableData:data||[],tableLoading:loading,onEditIconClick:onEditIconClick,reloadTableData:onRefresh,permissions:permissions}),/*#__PURE__*/(0,jsx_runtime.jsx)(Pagination/* Pagination */.d,{total:(meta===null||meta===void 0?void 0:meta.total)||0,current:(meta===null||meta===void 0?void 0:meta.page)||1,defaultPageSize:(meta===null||meta===void 0?void 0:meta.pageCount)||10,pageSizeOptions:[10,20,50,100],onChange:(page,perPage)=>{onRefresh({page,perPage,clientId});}})]})});};/* harmony default export */ const Details_Transactions = (ClientGovernmentFees);
// EXTERNAL MODULE: ./src/Modules/Invoice/permissions.ts
var Invoice_permissions = __webpack_require__(92325);
// EXTERNAL MODULE: ./src/Modules/Project/permissions.ts
var Project_permissions = __webpack_require__(31203);
// EXTERNAL MODULE: ./src/Modules/Quotation/permissions.ts
var Quotation_permissions = __webpack_require__(95700);
// EXTERNAL MODULE: ./src/Modules/Transactions/permissions.ts
var Transactions_permissions = __webpack_require__(735);
// EXTERNAL MODULE: ./src/helpers/common.ts
var common = __webpack_require__(88132);
;// ./src/Components/Organisms/Dashboard/Clients/Details/index.tsx
const ClientsDetails=()=>{// available permissions for this module
const permissionSlug=(0,common/* getPermissionSlugs */.AH)(Client_permissions/* ClientPermissionsEnum */.j);const invoicePermissionSlug=(0,common/* getPermissionSlugs */.AH)(Invoice_permissions/* InvoicePermissionsEnum */.x);const projectsPermissionSlug=(0,common/* getPermissionSlugs */.AH)(Project_permissions/* ProjectPermissionsEnum */.l);const quotationsPermissionSlug=(0,common/* getPermissionSlugs */.AH)(Quotation_permissions/* QuotationPermissionsEnum */.Y);const transactionsPermissionSlug=(0,common/* getPermissionSlugs */.AH)(Transactions_permissions/* TransactionsPermissionsEnum */.t);const allPermissionsSlug=[...permissionSlug,...invoicePermissionSlug,...projectsPermissionSlug,...quotationsPermissionSlug,...transactionsPermissionSlug];const{userPermissions}=(0,es/* useSelector */.d4)(state=>state.usersReducer);const permissions=userPermissions;const{readClient}=permissions;const[searchParams]=(0,dist/* useSearchParams */.ok)();const recordId=searchParams.get("id");const module=(0,react.useMemo)(()=>new Client/* ClientModule */.u(),[]);const{data}=(0,hooks/* useFetchData */.Gs)({method:()=>module.getRecordById(Number(recordId))});return/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.A,{permissionSlug:allPermissionsSlug,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.container,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(dist/* Link */.N_,{className:styles_module.back,to:"/clients",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(ArrowLeftOutlined/* default */.A,{style:{fontSize:20,display:"flex"}}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:"Back"})]}),readClient===true&&/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(overview,{client:data}),/*#__PURE__*/(0,jsx_runtime.jsx)(Projects,{clientId:Number(recordId)}),/*#__PURE__*/(0,jsx_runtime.jsx)(Quotations,{clientId:Number(recordId)}),/*#__PURE__*/(0,jsx_runtime.jsx)(Details_Invoice,{clientId:Number(recordId)}),/*#__PURE__*/(0,jsx_runtime.jsx)(Details_Transactions,{clientId:Number(recordId)})]})]}),readClient===false&&/*#__PURE__*/(0,jsx_runtime.jsx)(ErrorCodes/* ErrorCode403 */.$t,{mainMessage:"You don't have permission to view this data"})]});};/* harmony default export */ const Details = (ClientsDetails);

/***/ }),

/***/ 73209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9950);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28429);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92759);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57811);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56231);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90582);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(78433);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(72906);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82369);
/* harmony import */ var _modules_Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50167);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44414);
const ActionsDropdown=_ref=>{let{item,onRefresh,permissions}=_ref;const navigate=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__/* .useNavigate */ .Zp)();const[dropdownOpen,setDropdownOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});const[deleteConfirmation,setDeleteConfirmation]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);const module=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>new _modules_Project__WEBPACK_IMPORTED_MODULE_2__/* .ProjectModule */ .K(),[]);/**Function to delete a project
 * @param {number} id id of the project to be deleted
 */const onDelete=id=>{if((permissions===null||permissions===void 0?void 0:permissions.deleteProject)===true){module.deleteRecord(id).then(()=>{onRefresh();}).catch(err=>{const errorMessages=err.response.data.message||"Something went wrong!";antd__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay.error(errorMessages);});}else{antd__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay.error("You don't have permission to delete this project, Please contact your admin");}};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{trigger:['click'],open:dropdownOpen[item.id],onOpenChange:open=>setDropdownOpen({[item.id]:open}),menu:{items:[{label:'Edit',key:'edit',icon:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,{}),onClick:e=>{e.domEvent.preventDefault();navigate("/projects/edit?id=".concat(item.id));}},{label:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,{title:"Are you sure to delete this project?",onConfirm:()=>{onDelete(item.id);// Close the dropdown and delete confirmation
setDeleteConfirmation(false);setDropdownOpen({[item.id]:false});},okText:"Yes",cancelText:"No",placement:"bottom",open:deleteConfirmation,onOpenChange:open=>setDeleteConfirmation(open),children:"Delete"}),key:'delete',icon:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{}),danger:true,onClick:e=>{e.domEvent.preventDefault();setDeleteConfirmation(!deleteConfirmation);}}]},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.project_item_header_actions_more,onClick:e=>e.preventDefault()})});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionsDropdown);

/***/ }),

/***/ 56052:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Card)
});

// EXTERNAL MODULE: ./node_modules/antd/es/tag/index.js + 1 modules
var tag = __webpack_require__(12916);
// EXTERNAL MODULE: ./node_modules/antd/es/avatar/index.js + 3 modules
var avatar = __webpack_require__(75871);
// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js
var tooltip = __webpack_require__(81541);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/UserOutlined.js + 1 modules
var UserOutlined = __webpack_require__(79378);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/FileOutlined.js
var FileOutlined = __webpack_require__(56272);
// EXTERNAL MODULE: ./src/helpers/commonEnums.ts
var commonEnums = __webpack_require__(2360);
// EXTERNAL MODULE: ./src/helpers/dateHandler.ts
var dateHandler = __webpack_require__(98933);
// EXTERNAL MODULE: ./src/helpers/constants.ts
var constants = __webpack_require__(65944);
// EXTERNAL MODULE: ./src/Components/Organisms/Projects/Card/actions.tsx
var actions = __webpack_require__(73209);
// EXTERNAL MODULE: ./node_modules/antd/es/popover/index.js
var popover = __webpack_require__(65059);
// EXTERNAL MODULE: ./src/Components/Organisms/Projects/Card/styles.module.scss
var styles_module = __webpack_require__(82369);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/Projects/Card/members-tooltip.tsx
const MembersTooltip=props=>{var _memberInCharge$User,_memberInCharge$User2;const{memberInCharge,supportEngineers,allClients,children}=props;return/*#__PURE__*/(0,jsx_runtime.jsx)(popover/* default */.A,{trigger:"hover",content:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.project_item_footer_members_popover,children:[(memberInCharge===null||memberInCharge===void 0?void 0:memberInCharge.User)&&/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.project_item_footer_members_popover_item,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{className:styles_module/* default */.A.project_item_footer_members_popover_item_title,children:"Project Incharge"}),/*#__PURE__*/(0,jsx_runtime.jsx)("br",{}),"".concat(memberInCharge===null||memberInCharge===void 0?void 0:(_memberInCharge$User=memberInCharge.User)===null||_memberInCharge$User===void 0?void 0:_memberInCharge$User.firstName," ").concat(memberInCharge===null||memberInCharge===void 0?void 0:(_memberInCharge$User2=memberInCharge.User)===null||_memberInCharge$User2===void 0?void 0:_memberInCharge$User2.lastName)]}),(supportEngineers===null||supportEngineers===void 0?void 0:supportEngineers.length)>0&&/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.project_item_footer_members_popover_item,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{className:styles_module/* default */.A.project_item_footer_members_popover_item_title,children:"Support Engineers"}),supportEngineers===null||supportEngineers===void 0?void 0:supportEngineers.map((member,idx)=>/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:"".concat(idx+1,". ").concat(member.User.firstName," ").concat(member.User.lastName)},"support-engineer-".concat(idx)))]}),(allClients===null||allClients===void 0?void 0:allClients.length)>0&&/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.project_item_footer_members_popover_item,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{className:styles_module/* default */.A.project_item_footer_members_popover_item_title,children:"Clients"}),allClients===null||allClients===void 0?void 0:allClients.map((member,idx)=>/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:["".concat(idx+1,". ").concat(member.Client.name),member.isRepresentative===true&&/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:"(Representative)"})]},"client-".concat(idx)))]})]}),children:children});};/* harmony default export */ const members_tooltip = (MembersTooltip);
// EXTERNAL MODULE: ./src/Components/Organisms/Projects/Details/Sections/States/index.tsx + 1 modules
var States = __webpack_require__(71708);
;// ./src/Components/Organisms/Projects/Card/index.tsx
const ProjectsCard=_ref=>{let{data,permissions}=_ref;const{onRefresh,allProjects,projectStates}=data;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module/* default */.A.projects,children:allProjects.map(item=>{var _item$_count,_item$_count2;const{ProjectMembers,ProjectClient}=item;const memberInCharge=ProjectMembers===null||ProjectMembers===void 0?void 0:ProjectMembers.find(member=>member.projectRole===commonEnums/* ProjectRoleEnum */.b2.projectIncharge);const supportEngineers=ProjectMembers===null||ProjectMembers===void 0?void 0:ProjectMembers.filter(member=>member.projectRole===commonEnums/* ProjectRoleEnum */.b2.supportEngineers);const allClients=ProjectClient;return/*#__PURE__*/(0,jsx_runtime.jsxs)("a",{// Use a unique identifier for the key
href:"/projects/".concat(item.slug,"?id=").concat(item.id),className:styles_module/* default */.A.project_item,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.project_item_header,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.project_item_header_left,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:styles_module/* default */.A.project_item_header_id,children:item.referenceNumber}),/*#__PURE__*/(0,jsx_runtime.jsx)(tag/* default */.A,{className:styles_module/* default */.A.project_item_header_priority,color:commonEnums/* taskPriority */.sh[item.priority].color,children:commonEnums/* taskPriority */.sh[item.priority].title})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.project_item_header_actions,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(States/* default */.A,{permissions:permissions,data:{projectStates:projectStates,project:{data:item,onRefresh:onRefresh}},style:{padding:'3px 5px'}}),/*#__PURE__*/(0,jsx_runtime.jsx)(actions/* default */.A,{item:item,onRefresh:onRefresh,permissions:permissions})]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module/* default */.A.project_item_body,children:/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{className:styles_module/* default */.A.project_item_body_title,children:item.title})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.project_item_footer,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.project_item_footer_left,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(members_tooltip,{allClients:allClients,memberInCharge:memberInCharge,supportEngineers:supportEngineers,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.project_item_footer_members,children:[(memberInCharge===null||memberInCharge===void 0?void 0:memberInCharge.User)&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module/* default */.A.project_item_footer_members_incharge,children:/*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default */.A,{size:25,style:{border:'1px solid var(--color-light-200)'},src:"".concat(constants/* RESOURCE_BASE_URL */.to).concat(memberInCharge.User.profile),icon:/*#__PURE__*/(0,jsx_runtime.jsx)(UserOutlined/* default */.A,{})})}),(supportEngineers===null||supportEngineers===void 0?void 0:supportEngineers.length)>0&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module/* default */.A.project_item_footer_members_support,children:/*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default.Group */.A.Group,{children:supportEngineers.map(member=>/*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default */.A,{size:25,style:{border:'1px solid var(--color-light-200)',marginTop:'5px'},src:"".concat(constants/* RESOURCE_BASE_URL */.to).concat(member.User.profile),icon:/*#__PURE__*/(0,jsx_runtime.jsx)(UserOutlined/* default */.A,{})},member.User.id))})}),(allClients===null||allClients===void 0?void 0:allClients.length)>0&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module/* default */.A.project_item_footer_members_clients,children:/*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default.Group */.A.Group,{children:allClients.map(client=>/*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default */.A,{size:25,style:{border:'1px solid var(--color-light-200)'},src:"".concat(constants/* RESOURCE_BASE_URL */.to).concat(client.Client.logo),icon:/*#__PURE__*/(0,jsx_runtime.jsx)(UserOutlined/* default */.A,{})},client.Client.id))})})]})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.project_item_footer_date,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:styles_module/* default */.A.project_item_footer_date_start,children:(0,dateHandler/* convertDate */.ic)(item.startDate,'M dd,yy')}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:styles_module/* default */.A.project_item_footer_date_separator,children:"-"}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:styles_module/* default */.A.project_item_footer_date_end,children:(0,dateHandler/* convertDate */.ic)(item.endDate,'M dd,yy')})]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module/* default */.A.project_item_footer_counts,children:/*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.A,{title:"".concat((_item$_count=item._count)===null||_item$_count===void 0?void 0:_item$_count.Resources," Files in this project"),placement:"left",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{className:styles_module/* default */.A.project_item_footer_counts_files,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(FileOutlined/* default */.A,{style:{color:'var(--color-light-300)'}}),(_item$_count2=item._count)===null||_item$_count2===void 0?void 0:_item$_count2.Resources]})})})]})]},item.id);})});};/* harmony default export */ const Card = (ProjectsCard);

/***/ }),

/***/ 71708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ States)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./node_modules/antd/es/typography/index.js + 15 modules
var typography = __webpack_require__(30377);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 1 modules
var message = __webpack_require__(92759);
// EXTERNAL MODULE: ./node_modules/antd/es/dropdown/index.js
var dropdown = __webpack_require__(57811);
// EXTERNAL MODULE: ./node_modules/antd/es/divider/index.js
var divider = __webpack_require__(40895);
// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js
var tooltip = __webpack_require__(81541);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DownOutlined.js
var DownOutlined = __webpack_require__(73022);
// EXTERNAL MODULE: ./src/Modules/Project/index.ts
var Project = __webpack_require__(50167);
;// ./src/Components/Organisms/Projects/Details/Sections/States/styles.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"dropdownOverlay":"styles_dropdownOverlay__8pes8","dropdownContainer":"styles_dropdownContainer__LqiO1","searchContainer":"styles_searchContainer__Xk+nm","searchInput":"styles_searchInput__-3cFL"});
// EXTERNAL MODULE: ./src/Components/Atoms/Input/index.tsx + 2 modules
var Input = __webpack_require__(58516);
// EXTERNAL MODULE: ./src/Components/Atoms/CustomEmpty/index.tsx
var CustomEmpty = __webpack_require__(49758);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/Projects/Details/Sections/States/index.tsx
const{Text}=typography/* default */.A;/** Change States component */const ChangeStates=_ref=>{var _searchedStates$data,_project$ProjectState2,_project$ProjectState3,_project$ProjectState4,_project$ProjectState5;let{data,permissions,style}=_ref;const{projectStates,project:{data:project,onRefresh}}=data;const module=(0,react.useMemo)(()=>new Project/* ProjectModule */.K(),[]);const[searchedStates,setSearchedStates]=(0,react.useState)({data:projectStates,query:''});const onStatesChange=stateId=>{const updateData={projectId:project.id,projectStateId:stateId};if(permissions.updateProject===true){module.updateProjectStatus(updateData).then(res=>{const{data}=res;message/* default */.Ay.success((data===null||data===void 0?void 0:data.message)||'States changed successfully');onRefresh();}).catch(err=>{var _err$response,_err$response$data;const errorMessages=err===null||err===void 0?void 0:(_err$response=err.response)===null||_err$response===void 0?void 0:(_err$response$data=_err$response.data)===null||_err$response$data===void 0?void 0:_err$response$data.message;message/* default */.Ay.error(errorMessages||'Something went wrong');});}else{message/* default */.Ay.error('You do not have permission to update project States, please contact your administrator');}};(0,react.useEffect)(()=>{setSearchedStates({data:projectStates,query:''});},[projectStates]);return/*#__PURE__*/(0,jsx_runtime.jsx)(dropdown/* default */.A,{trigger:['click'],menu:{items:(_searchedStates$data=searchedStates.data)===null||_searchedStates$data===void 0?void 0:_searchedStates$data.map(state=>{var _project$ProjectState;return{key:"state-".concat(state.id),label:state.title,onClick:()=>onStatesChange(state.id),disabled:state.id===(project===null||project===void 0?void 0:(_project$ProjectState=project.ProjectState)===null||_project$ProjectState===void 0?void 0:_project$ProjectState.id)};})},overlayClassName:styles_module.dropdownOverlay,dropdownRender:menu=>{var _searchedStates$data2;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.dropdownContainer,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.searchContainer,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Input/* default */.A,{placeHolder:"Search",size:"w100",value:searchedStates.query,onChange:e=>{var _value$trim;const value=e.target.value||'';const query=value===null||value===void 0?void 0:(_value$trim=value.trim())===null||_value$trim===void 0?void 0:_value$trim.toLowerCase();const filteredStates=projectStates.filter(state=>state.title.toLowerCase().includes(query));setSearchedStates({data:filteredStates,query});},className:styles_module.searchInput})}),/*#__PURE__*/(0,jsx_runtime.jsx)(divider/* default */.A,{style:{marginBottom:10,marginTop:0}}),menu,!((_searchedStates$data2=searchedStates.data)!==null&&_searchedStates$data2!==void 0&&_searchedStates$data2.length)&&/*#__PURE__*/(0,jsx_runtime.jsx)(CustomEmpty/* default */.A,{description:"No data found"})]});},children:/*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.A,{title:project===null||project===void 0?void 0:(_project$ProjectState2=project.ProjectState)===null||_project$ProjectState2===void 0?void 0:_project$ProjectState2.title,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:(0,objectSpread2/* default */.A)({display:"flex",alignItems:"center",background:"".concat(project===null||project===void 0?void 0:(_project$ProjectState3=project.ProjectState)===null||_project$ProjectState3===void 0?void 0:_project$ProjectState3.bgColor),cursor:"pointer",color:"".concat((project===null||project===void 0?void 0:(_project$ProjectState4=project.ProjectState)===null||_project$ProjectState4===void 0?void 0:_project$ProjectState4.textColor)||"var(--color-dark-sub"),padding:"5px 10px",borderRadius:"5px",fontSize:"14px",// add no wrap to prevent text overflow
whiteSpace:"nowrap"},style),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{style:{overflow:"hidden",textOverflow:"ellipsis",display:"inline-block",maxWidth:window.innerWidth>1500?"30ch":"15ch"},children:(project===null||project===void 0?void 0:(_project$ProjectState5=project.ProjectState)===null||_project$ProjectState5===void 0?void 0:_project$ProjectState5.title)||'Select States'}),/*#__PURE__*/(0,jsx_runtime.jsx)(DownOutlined/* default */.A,{style:{marginLeft:5}})]})})});};/* harmony default export */ const States = (ChangeStates);

/***/ }),

/***/ 39799:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57811);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80737);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73022);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98018);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44414);
const CardDropDown=props=>{const{label,children,placement}=props;const overlay=/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.dropdown,children:children});return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{trigger:['click'],dropdownRender:()=>overlay,placement:placement,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.dropdownTrigger,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{children:label}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,{})]})});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardDropDown);

/***/ }),

/***/ 88374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(89379);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9950);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4132);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(10678);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(92759);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(32645);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(17811);
/* harmony import */ var _atoms_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58516);
/* harmony import */ var _atoms_Select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39590);
/* harmony import */ var _modules_Organization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42361);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91970);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8313);
/* harmony import */ var _atoms_Input_textarea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30386);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59051);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modules_Quotation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(83480);
/* harmony import */ var _helpers_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(88132);
/* harmony import */ var _modules_ProjectType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(12975);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(44414);
const{RangePicker}=antd__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A;const deadlineOptions=[{label:'7 days',value:"7_days"},{label:'15 days',value:"15_days"},{label:'30 days',value:"30_days"},{label:'45 days',value:"45_days"},{label:'90 days',value:"90_days"},{label:'Custom',value:"custom"}];/* Create Project Modal */const NewProject=props=>{const{setNewProject,newProject,onRefresh,permissions}=props;const{updateQuotation}=permissions;const[form]=antd__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A.useForm();const orgModule=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>new _modules_Organization__WEBPACK_IMPORTED_MODULE_3__/* .OrganizationModule */ .I(),[]);const module=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>new _modules_Quotation__WEBPACK_IMPORTED_MODULE_8__/* .QuotationModule */ .v(),[]);const projectTypeModule=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>new _modules_ProjectType__WEBPACK_IMPORTED_MODULE_10__/* .ProjectTypeModule */ .g(),[]);const[deadline,setDeadline]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();const[deadlineDates,setDeadlineDates]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({startDate:"",endDate:""});const{data:orgData}=(0,hooks__WEBPACK_IMPORTED_MODULE_4__/* .useConditionFetchData */ .P6)({method:orgModule.findPublished,condition:newProject===null||newProject===void 0?void 0:newProject.isOpen});const{data:projectTypeData}=(0,hooks__WEBPACK_IMPORTED_MODULE_4__/* .useConditionFetchData */ .P6)({method:projectTypeModule.getPublishRecords,condition:newProject===null||newProject===void 0?void 0:newProject.isOpen,initialQuery:{perPage:100}});const onFinish=values=>{setNewProject(prev=>(0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)({},prev),{},{loading:true}));const date=new Date();let startDate=moment__WEBPACK_IMPORTED_MODULE_7___default()(date).format("YYYY-MM-DD");let endDate="";switch(values.deadlineValue){case"7_days":{endDate=moment__WEBPACK_IMPORTED_MODULE_7___default()(date).add(7,"days").format("YYYY-MM-DD");break;}case"15_days":{endDate=moment__WEBPACK_IMPORTED_MODULE_7___default()(date).add(15,"days").format("YYYY-MM-DD");break;}case"30_days":{endDate=moment__WEBPACK_IMPORTED_MODULE_7___default()(date).add(30,"days").format("YYYY-MM-DD");break;}case"45_days":{endDate=moment__WEBPACK_IMPORTED_MODULE_7___default()(date).add(45,"days").format("YYYY-MM-DD");break;}case"90_days":{endDate=moment__WEBPACK_IMPORTED_MODULE_7___default()(date).add(90,"days").format("YYYY-MM-DD");break;}case"custom":{startDate=deadlineDates.startDate;endDate=deadlineDates.endDate;}}delete values.deadlineValue;delete values.rangePicker;const finalValues=(0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)({},values),{},{quoteId:newProject===null||newProject===void 0?void 0:newProject.quoteId,startDate,endDate});if(updateQuotation===true){module.autoCreateFromApprovedQuotation(finalValues).then(res=>{var _res$data;antd__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Ay.success((res===null||res===void 0?void 0:(_res$data=res.data)===null||_res$data===void 0?void 0:_res$data.message)||"Project created successfully");onRefresh();setNewProject(prev=>(0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)({},prev),{},{isOpen:false}));}).catch(err=>{const errMessage=(0,_helpers_common__WEBPACK_IMPORTED_MODULE_9__/* .handleError */ .H4)(err);antd__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Ay.error(errMessage||"Something went wrong");}).finally(()=>{setNewProject(prev=>(0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)({},prev),{},{loading:false}));});}else{antd__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Ay.error("You don't have permission to create project, please contact your admin");}};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(antd__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A,{title:"Create Project",open:newProject===null||newProject===void 0?void 0:newProject.isOpen,okText:"Create",cancelText:"Cancel",destroyOnClose:true,okButtonProps:{loading:newProject===null||newProject===void 0?void 0:newProject.loading},onOk:()=>form.submit(),zIndex:10000,onCancel:()=>{setNewProject({isOpen:false,quoteId:0,loading:false,submissionById:0,projectTypeId:0});}// Prevent modal from opening the drawer when clicked inside modal
,wrapProps:{onClick:e=>e.stopPropagation()},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A,{form:form,onFinish:onFinish,name:"create-project-form",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(antd__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A.Item,{name:"title",rules:[{required:true,message:'Please input project title!'}],children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_atoms_Input__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{type:"text",placeHolder:"Enter project title",label:"Project Title",size:"w100",asterisk:true,autoSize:{minRows:2,maxRows:6}})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(antd__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A.Item,{name:"submissionById",initialValue:(newProject===null||newProject===void 0?void 0:newProject.submissionById)||undefined,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_atoms_Select__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{disabled:newProject!==null&&newProject!==void 0&&newProject.submissionById?true:false,label:"Submission By",options:orgData===null||orgData===void 0?void 0:orgData.map(item=>({label:item.name,value:item.id}))})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(antd__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A.Item,{name:"projectTypeId",initialValue:(newProject===null||newProject===void 0?void 0:newProject.projectTypeId)||undefined,rules:[{required:true,message:"Please select project type"}],children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_atoms_Select__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{label:"Project Type",asterisk:true,placeholder:"Select Project Type",options:projectTypeData===null||projectTypeData===void 0?void 0:projectTypeData.map(item=>{return{value:item.id,label:item.title};})})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("label",{className:"font-size-sm",children:["Deadline  ",/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span",{className:"color-red-yp",children:"*"})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div",{style:{flexDirection:'column',fontSize:'var(--font-size-sm)',gap:0},children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(antd__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A.Item,{name:"deadlineValue",rules:[{required:true,message:"Please select deadline"}],children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(antd__WEBPACK_IMPORTED_MODULE_17__/* ["default"].Group */ .Ay.Group,{optionType:"button",onChange:_ref=>{let{target}=_ref;return setDeadline(target.value);},children:deadlineOptions.map((item,index)=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(antd__WEBPACK_IMPORTED_MODULE_17__/* ["default"].Button */ .Ay.Button,{value:item.value,children:item.label},index))})}),deadline==="custom"&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(antd__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A.Item,{name:"rangePicker",rules:[{required:true,message:"Please select deadline"}],children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(RangePicker,{onChange:date=>{if((date===null||date===void 0?void 0:date.length)===2){var _date$,_date$2;setDeadlineDates({startDate:((_date$=date[0])===null||_date$===void 0?void 0:_date$.format("YYYY-MM-DD"))||"",endDate:((_date$2=date[1])===null||_date$2===void 0?void 0:_date$2.format("YYYY-MM-DD"))||""});}},dropdownClassName:_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.date_picker_dropdown})})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(antd__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A.Item,{name:"instructions",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_atoms_Input_textarea__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{placeholder:"Enter instructions",label:"Instructions",autoSize:{minRows:2,maxRows:6}})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(antd__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A.Item,{name:"xeroReference",help:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("small",{className:"color-yellow-dark",children:"CAUTION: Do not add XERO reference if you are not sure about it."}),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_atoms_Input__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{type:"text",placeHolder:"Enter Project Xero Reference",label:"Project Xero Reference",size:"w100"})})]})});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewProject);

/***/ }),

/***/ 75492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(89379);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9950);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92759);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56231);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(48538);
/* harmony import */ var _helpers_commonEnums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2360);
/* harmony import */ var _helpers_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88132);
/* harmony import */ var _modules_Quotation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83480);
/* harmony import */ var _atoms___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9394);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44414);
const QuotationStatusComp=props=>{const{item,onRefresh,permissions,setDrawer,setNewProject}=props;const{updateQuotation}=permissions;const module=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>new _modules_Quotation__WEBPACK_IMPORTED_MODULE_3__/* .QuotationModule */ .v(),[]);/** This function is used to create project from approved quotation
   * @param values The values to be passed to the api
   * project and `existing` will link the quotation to an existing project
   */const onCreateProjectFromQuotation=values=>{if(updateQuotation===true){module.autoCreateFromApprovedQuotation(values).then(()=>{antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay.success("Quotation linked to project successfully");onRefresh();}).catch(err=>{const errMessage=(0,_helpers_common__WEBPACK_IMPORTED_MODULE_2__/* .handleError */ .H4)(err);antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay.error(errMessage||"Something went wrong");});}else{antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay.error("You don't have permission to link quotation to project, please contact your administrator");}};const onChangeQuotationStatus=(id,status)=>{if(updateQuotation===true){module.changeStatus(id,status).then(res=>{var _res$data;antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay.success((res===null||res===void 0?void 0:(_res$data=res.data)===null||_res$data===void 0?void 0:_res$data.message)||"Quotation status updated successfully");onRefresh();}).catch(err=>{const errorMessage=(0,_helpers_common__WEBPACK_IMPORTED_MODULE_2__/* .handleError */ .H4)(err);antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay.error(errorMessage||"Something went wrong");});}else{antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay.error("You don't have permission to update quotation status");}};/** This function is used to mark quotation as sent */const markAsSent=id=>{if(updateQuotation===true){module.markAsSent(id).then(res=>{var _res$data2;antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay.success((res===null||res===void 0?void 0:(_res$data2=res.data)===null||_res$data2===void 0?void 0:_res$data2.message)||"Quotation marked as sent successfully");onRefresh();}).catch(err=>{const errorMessage=(0,_helpers_common__WEBPACK_IMPORTED_MODULE_2__/* .handleError */ .H4)(err);antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay.error(errorMessage||"Something went wrong");});}else{antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay.error("You don't have permission to mark quotation as sent");}};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"d-flex flex-column align-center font-size-sm color-dark-800",children:[(item===null||item===void 0?void 0:item.status)!==_helpers_commonEnums__WEBPACK_IMPORTED_MODULE_1__/* .QuotationStatus */ .xP['New']&&(item===null||item===void 0?void 0:item.status)!==_helpers_commonEnums__WEBPACK_IMPORTED_MODULE_1__/* .QuotationStatus */ .xP['Sent']&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{children:_helpers_commonEnums__WEBPACK_IMPORTED_MODULE_1__/* .QuotationStatus */ .xP[item===null||item===void 0?void 0:item.status]}),(item===null||item===void 0?void 0:item.status)===_helpers_commonEnums__WEBPACK_IMPORTED_MODULE_1__/* .QuotationStatus */ .xP['New']&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_atoms___WEBPACK_IMPORTED_MODULE_4__/* .DropdownWithLabel */ .g_,{trigger:["click"],size:"small",type:"ghost",label:"Submit Now",onClick:e=>{e.stopPropagation();setDrawer(prev=>(0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)({},prev),{},{open:true,quoteId:item===null||item===void 0?void 0:item.id,type:"preview",quotation:item}));},items:[{label:"Mark as sent",value:"markAsSent"}].map((option,index)=>{return{key:"option-".concat(index),label:option.label,onClick:()=>markAsSent(item===null||item===void 0?void 0:item.id)};})}),(item===null||item===void 0?void 0:item.status)===_helpers_commonEnums__WEBPACK_IMPORTED_MODULE_1__/* .QuotationStatus */ .xP['Sent']&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"d-flex",children:[item.projectId>0?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,{title:"Approving this quotation will link it to the existing project. Are you sure?",okText:"Yes",cancelText:"No",placement:"bottomRight",zIndex:10000,onCancel:e=>e===null||e===void 0?void 0:e.stopPropagation(),onConfirm:e=>{e===null||e===void 0?void 0:e.stopPropagation();const values={quoteId:item===null||item===void 0?void 0:item.id,title:"Existing Project"};onCreateProjectFromQuotation(values);},destroyTooltipOnHide:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{type:"ghost",size:"small",style:{fontSize:'0.7rem',borderColor:'var(--color-primary-main)',color:'var(--color-primary-main)'},onClick:e=>e.stopPropagation(),children:"Approve"})}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{type:"ghost",size:"small",style:{fontSize:'0.8rem',borderColor:'var(--color-primary-main)',color:'var(--color-primary-main)'},onClick:e=>{var _item$Lead,_item$Lead$Submission,_item$Lead2,_item$Lead2$ProjectTy;e.stopPropagation();// close drawer
setDrawer(prev=>(0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)({},prev),{},{open:false}));setNewProject&&setNewProject({isOpen:true,quoteId:item===null||item===void 0?void 0:item.id,loading:false,submissionById:item===null||item===void 0?void 0:(_item$Lead=item.Lead)===null||_item$Lead===void 0?void 0:(_item$Lead$Submission=_item$Lead.SubmissionBy)===null||_item$Lead$Submission===void 0?void 0:_item$Lead$Submission.id,projectTypeId:item===null||item===void 0?void 0:(_item$Lead2=item.Lead)===null||_item$Lead2===void 0?void 0:(_item$Lead2$ProjectTy=_item$Lead2.ProjectType)===null||_item$Lead2$ProjectTy===void 0?void 0:_item$Lead2$ProjectTy.id});},children:"Approve"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{type:"ghost",size:"small",style:{fontSize:'0.8rem',borderColor:"#FFA000",color:"#FFA000"},className:"ml-1",onClick:e=>{e===null||e===void 0?void 0:e.stopPropagation();setDrawer(prev=>(0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)({},prev),{},{open:true,quoteId:item===null||item===void 0?void 0:item.id,type:"revise",quotation:item}));},children:"Revise & Resend"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,{title:"Are you sure you want to reject this quotation?",okText:"Yes",cancelText:"No",placement:"bottomRight",onCancel:e=>e===null||e===void 0?void 0:e.stopPropagation(),onConfirm:e=>{e===null||e===void 0?void 0:e.stopPropagation();onChangeQuotationStatus(item===null||item===void 0?void 0:item.id,_helpers_commonEnums__WEBPACK_IMPORTED_MODULE_1__/* .QuotationStatus */ .xP.Rejected);},destroyTooltipOnHide:true,zIndex:10000,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{type:"ghost",size:"small",danger:true,className:"ml-1",style:{fontSize:'0.8rem'},onClick:e=>e.stopPropagation(),children:"Reject"})})]})]});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuotationStatusComp);

/***/ }),

/***/ 42361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ OrganizationModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
/* harmony import */ var _modules_Common_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21073);
class OrganizationModule{constructor(){this.endPoint="organization";/**Get all organization records
     * @param query - query params
     */this.getAllRecords=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint,{params:query});};/**Get all organization records
     * @param query - query params
     */this.findPublished=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint+"/find-published",{params:query});};/**Get organization record by id
     * @param id - organization id
     */this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/").concat(id));};/**Delete organization record
    * @param id - organization id
    */this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete("".concat(this.endPoint,"/").concat(id));};/**Create new organization record
     * @param data - organization data
     */this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(this.endPoint,data,{headers:_modules_Common_config__WEBPACK_IMPORTED_MODULE_1__/* .FormDataHeader */ .Y});};/**Update organization record
    * @param data - organization data
    * @param id - organization id
    */this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/").concat(id),data,{headers:_modules_Common_config__WEBPACK_IMPORTED_MODULE_1__/* .FormDataHeader */ .Y});};this.getTenants=()=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("xero/getTenants");};}}

/***/ }),

/***/ 45732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ ProjectStateModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
class ProjectStateModule{constructor(){this.endPoint="project-state";this.getAllRecords=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint,{params:query});};this.getPublishedRecords=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/find-published"),{params:query});};this.getAllStates=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/find-published-states"));};this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint+"/"+id);};this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete(this.endPoint+"/"+id);};this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(this.endPoint,data);};this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch(this.endPoint+"/"+id,data);};}}

/***/ }),

/***/ 35821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ icons_ArrowLeftOutlined)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
;// ./node_modules/@ant-design/icons-svg/es/asn/ArrowLeftOutlined.js
// This icon file is generated automatically.
var ArrowLeftOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"
      }
    }]
  },
  "name": "arrow-left",
  "theme": "outlined"
};
/* harmony default export */ const asn_ArrowLeftOutlined = (ArrowLeftOutlined);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 5 modules
var AntdIcon = __webpack_require__(61187);
;// ./node_modules/@ant-design/icons/es/icons/ArrowLeftOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var ArrowLeftOutlined_ArrowLeftOutlined = function ArrowLeftOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.A, (0,esm_extends/* default */.A)({}, props, {
    ref: ref,
    icon: asn_ArrowLeftOutlined
  }));
};
if (false) {}
/* harmony default export */ const icons_ArrowLeftOutlined = (/*#__PURE__*/react.forwardRef(ArrowLeftOutlined_ArrowLeftOutlined));

/***/ }),

/***/ 56272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58168);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9950);
/* harmony import */ var _ant_design_icons_svg_es_asn_FileOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62259);
/* harmony import */ var _components_AntdIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61187);

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var FileOutlined = function FileOutlined(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_AntdIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({}, props, {
    ref: ref,
    icon: _ant_design_icons_svg_es_asn_FileOutlined__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A
  }));
};
if (false) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(FileOutlined));

/***/ }),

/***/ 53387:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ icons_PlusCircleOutlined)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
;// ./node_modules/@ant-design/icons-svg/es/asn/PlusCircleOutlined.js
// This icon file is generated automatically.
var PlusCircleOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
      }
    }]
  },
  "name": "plus-circle",
  "theme": "outlined"
};
/* harmony default export */ const asn_PlusCircleOutlined = (PlusCircleOutlined);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 5 modules
var AntdIcon = __webpack_require__(61187);
;// ./node_modules/@ant-design/icons/es/icons/PlusCircleOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var PlusCircleOutlined_PlusCircleOutlined = function PlusCircleOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.A, (0,esm_extends/* default */.A)({}, props, {
    ref: ref,
    icon: asn_PlusCircleOutlined
  }));
};
if (false) {}
/* harmony default export */ const icons_PlusCircleOutlined = (/*#__PURE__*/react.forwardRef(PlusCircleOutlined_PlusCircleOutlined));

/***/ }),

/***/ 82369:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"projects":"styles_projects__z9Zfo","project_item":"styles_project_item__GJPNS","project_item_header":"styles_project_item_header__m+X6J","project_item_header_left":"styles_project_item_header_left__ICs5g","project_item_header_actions":"styles_project_item_header_actions__xp5ac","project_item_header_actions_status":"styles_project_item_header_actions_status__SEBNS","project_item_header_actions_more":"styles_project_item_header_actions_more__dteLT","project_item_body":"styles_project_item_body__H3frM","project_item_header_id":"styles_project_item_header_id__mne7U","project_item_header_priority":"styles_project_item_header_priority__LY6jN","project_item_body_title":"styles_project_item_body_title__lgNuR","project_item_footer":"styles_project_item_footer__EvGoD","project_item_footer_left":"styles_project_item_footer_left__eouKZ","project_item_footer_members":"styles_project_item_footer_members__xvdDV","project_item_footer_members_popover":"styles_project_item_footer_members_popover__Qw4ax","project_item_footer_members_popover_item":"styles_project_item_footer_members_popover_item__cJFm1","project_item_footer_members_popover_item_title":"styles_project_item_footer_members_popover_item_title__6l2Iy","project_item_footer_date":"styles_project_item_footer_date__TJSsL","project_item_footer_date_separator":"styles_project_item_footer_date_separator__GhL33","project_item_footer_counts":"styles_project_item_footer_counts__ZjPdK","project_item_footer_counts_files":"styles_project_item_footer_counts_files__vM5fj","project_item_footer_counts_comments":"styles_project_item_footer_counts_comments__Bf1J0"});

/***/ }),

/***/ 98018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"quotations":"styles_quotations__rk8Mx","quotation_item":"styles_quotation_item__gBBS1","quotation_item_header":"styles_quotation_item_header__RlTQ9","quotation_item_header_left":"styles_quotation_item_header_left__pyHAw","quotation_item_header_actions":"styles_quotation_item_header_actions__0C6+1","quotation_item_header_actions_items":"styles_quotation_item_header_actions_items__GHeeE","quotation_item_header_actions_status":"styles_quotation_item_header_actions_status__WMiMx","quotation_item_header_actions_more":"styles_quotation_item_header_actions_more__Ypl05","quotation_item_header_title":"styles_quotation_item_header_title__WEbGh","quotation_item_header_email":"styles_quotation_item_header_email__0wnrg","quotation_item_header_phone":"styles_quotation_item_header_phone__VJmk4","quotation_item_cards":"styles_quotation_item_cards__QAxLQ","quotation_item_body":"styles_quotation_item_body__-vJ9F","dropdownTrigger":"styles_dropdownTrigger__P196e","dropdown":"styles_dropdown__AuZJF","table_column":"styles_table_column__yIPX8","accordianItem":"styles_accordianItem__mGtOr"});

/***/ }),

/***/ 8313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"quotation_container":"styles_quotation_container__si67h","quotation_title":"styles_quotation_title__jKEcv","rte_editor":"styles_rte_editor__oykTb","error":"styles_error__J7Vw7","accordianItem":"styles_accordianItem__7gueQ","dropdown":"styles_dropdown__jROyD","overlay":"styles_overlay__fl8IU","overlay_item":"styles_overlay_item__F9DNq","overlay_popConfirm":"styles_overlay_popConfirm__d7ZzO","disabledButton":"styles_disabledButton__OweTF","tabs":"styles_tabs__gbjy2","message":"styles_message__R2RlV","date_picker_dropdown":"styles_date_picker_dropdown__RwZa8"});

/***/ })

}]);