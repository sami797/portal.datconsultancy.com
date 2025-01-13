"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[5539],{

/***/ 44394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ Switch)
/* harmony export */ });
/* harmony import */ var C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89379);
/* harmony import */ var C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80045);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92759);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25933);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9950);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38266);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44414);
const _excluded=["onChange","checked","recordId","allowChange"];const Switch=_ref=>{let{onChange,checked,recordId,allowChange=true}=_ref,rest=(0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(_ref,_excluded);const[buttonState,setButtonState]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({loading:false,checked:false});const onSwitchChange=checked=>{if(allowChange===true){setButtonState((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)({},buttonState),{},{loading:true}));onChange(checked,recordId,rest).then(res=>{setButtonState((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)({},buttonState),{},{checked:checked,loading:false}));antd__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay.success(res.data.message);}).catch(err=>{setButtonState((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)({},buttonState),{},{loading:false}));let serverErrors=(0,_helpers__WEBPACK_IMPORTED_MODULE_5__/* .errorHandler */ .r)(err);if(typeof serverErrors.message==="string"){antd__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay.error(serverErrors.message);}else{antd__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay.error("Something went wrong");}});}else{antd__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay.error("You don't have permission to change this record, please contact your admin.");}};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{setButtonState((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)({},buttonState),{},{checked:checked}));},[checked]);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{checked:buttonState.checked,onChange:onSwitchChange,loading:buttonState.loading});};

/***/ }),

/***/ 5539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SiteSettings_PagesSection)
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
// EXTERNAL MODULE: ./src/helpers/common.ts
var common = __webpack_require__(88132);
// EXTERNAL MODULE: ./src/Components/Atoms/ServerErrorHandler/index.tsx
var ServerErrorHandler = __webpack_require__(13321);
// EXTERNAL MODULE: ./src/helpers/error-handler.ts
var error_handler = __webpack_require__(38266);
// EXTERNAL MODULE: ./src/Modules/PagesSection/index.ts
var PagesSection = __webpack_require__(11193);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/SiteSettings/PagesSection/modal.tsx
const SitePagesSectionModal=props=>{var _recordData$data;const{openModal,onCancel,type,record,reloadTableData,permissions:{createSitePagesSection,updateSitePagesSection}}=props;const[form]=es_form/* default */.A.useForm();const module=(0,react.useMemo)(()=>new PagesSection/* PagesSectionModule */.e(),[]);const[recordData,setRecordData]=(0,react.useState)();const handleErrors=err=>{const error=(0,error_handler/* errorHandler */.r)(err);if(typeof error.message=="string"){setRecordData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},recordData),{},{error:error.message}));}else{let errData=(0,ServerErrorHandler/* HandleServerErrors */.p)(error.message,[]);form.setFields(errData);setRecordData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},recordData),{},{error:""}));}};const handleAlertClose=()=>{setRecordData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},recordData),{},{error:""}));};const getDataBySlug=(0,react.useCallback)(()=>{module.getRecordById(record).then(res=>{if(res.data&&res.data.data){form.setFieldsValue((0,objectSpread2/* default */.A)({},res.data.data));setRecordData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},res.data),{},{loading:false}));}}).catch(err=>{handleErrors(err);});},[form,record,module]);(0,react.useEffect)(()=>{if(type==="edit"){setRecordData({loading:true});// fetch data by slug or id
getDataBySlug();// fetch the countries
}else{// fetch the countries
form.resetFields();}},[openModal,type,form,getDataBySlug]);const handleSlugChange=_ref=>{let{target}=_ref;let slug=(0,common/* slugifyString */.Dv)(target.value);form.setFieldsValue({slug:slug});};const onFinish=formValues=>{setRecordData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},recordData),{},{buttonLoading:true}));const formData=formValues;switch(type){case"edit":{if(updateSitePagesSection===true){module.updateRecord(formData,recordData===null||recordData===void 0?void 0:recordData.data.id).then(res=>{reloadTableData();onCancel();setRecordData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{loading:false}));}).catch(err=>{handleErrors(err);setRecordData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{loading:false}));});}else{setRecordData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{buttonLoading:false}));message/* default */.Ay.error("You don't have permission to update this record");}break;}case"new":{if(createSitePagesSection===true){module.createRecord(formData).then(res=>{reloadTableData();onCancel();setRecordData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{buttonLoading:false}));}).catch(err=>{handleErrors(err);setRecordData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{buttonLoading:false}));});}else{setRecordData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{buttonLoading:false}));message/* default */.Ay.error("You don't have permission to create new record");}break;}}};return/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomModal */.jo,{visible:openModal,closable:true,onCancel:onCancel,titleText:type==="edit"?"Edit Pages Section":"Add New Pages Section",showFooter:false,children:recordData!==null&&recordData!==void 0&&recordData.loading?/*#__PURE__*/(0,jsx_runtime.jsx)(Skeletons/* default */.A,{items:10}):/*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.A,{className:styles_module/* default */.A.form,onFinish:onFinish,form:form,children:[(recordData===null||recordData===void 0?void 0:recordData.error)&&/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomErrorAlert */.WZ,{description:recordData===null||recordData===void 0?void 0:recordData.error,isClosable:true,onClose:handleAlertClose}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"title",rules:[{required:true,message:"Please name a section"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{size:"w100",label:"Title",asterisk:true,type:"text"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"slug",rules:[{required:true,message:"Please add a slug"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{onChange:handleSlugChange,size:"w100",label:"Slug",asterisk:true,type:"text"})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"description",rules:[{required:false}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{size:"w100",label:"Description",type:"textArea",defaultValue:recordData===null||recordData===void 0?void 0:(_recordData$data=recordData.data)===null||_recordData$data===void 0?void 0:_recordData$data.description})})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"isPublished",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomSelect */.Ae,{label:"Published",options:[{value:true,label:"Yes"},{value:false,label:"No"}]})})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.footer,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{size:"normal",fontSize:"sm",onClick:onCancel,type:"plain",children:"Cancel"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{type:"primary",size:"normal",fontSize:"sm",htmlType:"submit",loading:recordData===null||recordData===void 0?void 0:recordData.buttonLoading,children:"Submit"})]})]})});};
// EXTERNAL MODULE: ./node_modules/antd/es/typography/index.js + 15 modules
var typography = __webpack_require__(30377);
// EXTERNAL MODULE: ./node_modules/antd/es/popconfirm/index.js + 1 modules
var popconfirm = __webpack_require__(56231);
// EXTERNAL MODULE: ./node_modules/antd/es/table/index.js + 96 modules
var table = __webpack_require__(41821);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DeleteOutlined.js
var DeleteOutlined = __webpack_require__(78433);
// EXTERNAL MODULE: ./src/Components/Atoms/Switch/index.tsx
var Switch = __webpack_require__(44394);
// EXTERNAL MODULE: ./src/Modules/PagesSectionContent/permissions.ts
var PagesSectionContent_permissions = __webpack_require__(9766);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(98341);
;// ./src/Components/Organisms/SiteSettings/PagesSection/table-columns.tsx
const{Paragraph}=typography/* default */.A;const ActionComponent=props=>{const{record,onEditIconClick,reloadTableData,permissions:{deleteSitePagesSection}}=props;const[actionState,setActionState]=(0,react.useState)({confirmLoading:false,openPopConfirm:false});const module=(0,react.useMemo)(()=>new PagesSection/* PagesSectionModule */.e(),[]);const handleDelete=()=>{setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{confirmLoading:true}));if(deleteSitePagesSection===false){message/* default */.Ay.error("You don't have permission to delete this record, please contact your admin.");setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{openPopConfirm:false}));return;}module.deleteRecord(record.id).then(_res=>{setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{openPopConfirm:false,confirmLoading:false}));reloadTableData();}).catch(_err=>{setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{confirmLoading:false}));});};const showPopconfirm=()=>{setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{openPopConfirm:true}));};return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.actions,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{onClick:()=>onEditIconClick(record),children:/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:"/images/editicon.svg",alt:""})}),/*#__PURE__*/(0,jsx_runtime.jsx)(popconfirm/* default */.A,{open:actionState.openPopConfirm,placement:"top",title:"Are you sure?",onConfirm:handleDelete,onCancel:()=>setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{openPopConfirm:false})),okButtonProps:{loading:actionState.confirmLoading},okText:"Yes",cancelText:"No",onOpenChange:visible=>{if(!visible){setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{openPopConfirm:false}));}},children:/*#__PURE__*/(0,jsx_runtime.jsx)(DeleteOutlined/* default */.A,{className:styles_module/* default */.A.bg__red,onClick:showPopconfirm})})]});};function TableComponent(props){const{tableData,tableLoading,onEditIconClick,reloadTableData}=props;const{userPermissions}=(0,es/* useSelector */.d4)(state=>state.usersReducer);const permissions=userPermissions;const{updateSitePagesSection,readSitePagesContent}=permissions;const module=new PagesSection/* PagesSectionModule */.e();const onIsPublishedChange=(checked,recordId)=>{return module.updateRecord({isPublished:checked},recordId);};const onHasMultipleItemsChange=(checked,recordId)=>{if(checked){return module.allowMultiples(recordId);}else{return module.disallowMultiples(recordId);}};const columns=[{title:"S.No",dataIndex:"index",key:"index",render:(_text,_record,index)=>index+1,width:"5%"},{title:"Title",dataIndex:"title",key:"title",render:(text,record)=>{return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{className:"mb-0 font-size-normal",children:text}),/*#__PURE__*/(0,jsx_runtime.jsx)(Paragraph,{title:record.slug,ellipsis:{rows:1,expandable:false},copyable:{text:record.slug},className:"font-size-sm color-dark-sub mb-0",children:record.slug}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"mb-0 font-size-sm color-dark-sub",children:record===null||record===void 0?void 0:record.description})]});}},{title:"Pages Content",key:"pageContent",render:(_checked,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:readSitePagesContent===true?/*#__PURE__*/(0,jsx_runtime.jsx)("a",{href:"/siteSettings/pages-section/content?sectionId=".concat(record.id),target:"_blank",rel:"noreferrer",children:"Manage Content"}):null})},{title:"Allow Multiple Content",dataIndex:"hasMultipleItems",key:"hasMultipleItems",render:(checked,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)(Switch/* Switch */.d,{checked:checked,onChange:onHasMultipleItemsChange,recordId:record.id,allowChange:updateSitePagesSection})},{title:"Published",dataIndex:"isPublished",key:"isPublished",render:(checked,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)(Switch/* Switch */.d,{checked:checked,onChange:onIsPublishedChange,recordId:record.id,allowChange:updateSitePagesSection})},{title:"Actions",dataIndex:"actions",key:"actions",render:(_text,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)(ActionComponent,{record:record,onEditIconClick:onEditIconClick,reloadTableData:reloadTableData,permissions:permissions})}];return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module/* default */.A.antdTableWrapper,children:/*#__PURE__*/(0,jsx_runtime.jsx)(table/* default */.A,{sticky:true,dataSource:tableData,columns:columns,pagination:false,scroll:{x:991},loading:tableLoading,rowKey:record=>"site-pages-section-".concat(record.id)})});}
// EXTERNAL MODULE: ./src/helpers/useDebounce.ts
var useDebounce = __webpack_require__(28173);
// EXTERNAL MODULE: ./src/Modules/PagesSection/permissions.ts
var PagesSection_permissions = __webpack_require__(78753);
// EXTERNAL MODULE: ./src/Components/Atoms/ErrorCodes/index.tsx + 1 modules
var ErrorCodes = __webpack_require__(36250);
;// ./src/Components/Organisms/SiteSettings/PagesSection/index.tsx
const breadCrumbsData=[{text:"Home",isLink:true,path:"/"},{isLink:true,text:"Site Settings",path:"/siteSettings"},{isLink:true,text:"Site Pages",path:"/siteSettings/site-pages"},{isLink:false,text:"Site Pages Section"}];function SitePagesSection(){// available permissions for this module
const permissionSlug=(0,common/* getPermissionSlugs */.AH)(PagesSection_permissions/* PagesSectionPermissionsEnum */.L);permissionSlug.push(PagesSectionContent_permissions/* PagesContentPermissionsEnum */.z.READ);const{userPermissions}=(0,es/* useSelector */.d4)(state=>state.usersReducer);const permissions=userPermissions;const{readSitePagesSection,createSitePagesSection,updateSitePagesSection}=permissions;const[currentEditType,setcurrentEditType]=(0,react.useState)({editType:"new",recordId:0,openModal:false});const module=new PagesSection/* PagesSectionModule */.e();const[moduleData,setModuleData]=(0,react.useState)({isLoading:false,error:{},data:[]});const[searchTerm,setSearchTerm]=(0,react.useState)("");const debouncedSearchTerm=(0,useDebounce/* useDebounce */.d)(searchTerm,500);const[searchResult,setSearchResult]=(0,react.useState)();const onSearch=event=>{const value=event.currentTarget.value;setSearchTerm(value);};// event handle  to open and close modal
const handleClick=()=>{if(createSitePagesSection===false){message/* default */.Ay.error("You don't have permission to create new record");return;}setcurrentEditType((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},currentEditType),{},{openModal:!currentEditType.openModal,editType:"new"}));};const onEditIconClick=record=>{if(updateSitePagesSection===false){message/* default */.Ay.error("You don't have permission to update this record");return;}setcurrentEditType((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},currentEditType),{},{editType:"edit",recordId:record.id,openModal:true}));};const reloadTableData=()=>{setModuleData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},moduleData),{},{loading:true}));module.getAllRecords().then(res=>{setModuleData(res.data);}).catch(err=>{});};(0,react.useEffect)(()=>{reloadTableData();},[]);// Search functionality for the table
const assignSearchResult=(0,react.useCallback)(()=>{if(debouncedSearchTerm){const data=moduleData===null||moduleData===void 0?void 0:moduleData.data;const result=data.filter(ele=>{return ele.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase());});setSearchResult(result);}else{setSearchResult(undefined);}},[debouncedSearchTerm,moduleData===null||moduleData===void 0?void 0:moduleData.data]);(0,react.useEffect)(()=>{assignSearchResult();},[assignSearchResult]);return/*#__PURE__*/(0,jsx_runtime.jsxs)(SiteSettings["default"],{permissionSlug:permissionSlug,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* PageHeader */.zY,{heading:"Site Pages Section",buttonText:"Add new section",onButtonClick:handleClick,breadCrumbData:breadCrumbsData,showAdd:createSitePagesSection===true?true:false,filters:readSitePagesSection===true?/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{placeHolder:"Search...",icon:/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:"/images/searchIcon.svg",alt:"Search Icon"}),size:"w100",className:"py-1",value:searchTerm,onChange:onSearch})})}):null}),readSitePagesSection===true&&/*#__PURE__*/(0,jsx_runtime.jsx)(TableComponent,{tableData:searchResult||(moduleData===null||moduleData===void 0?void 0:moduleData.data),tableLoading:moduleData.loading,onEditIconClick:onEditIconClick,reloadTableData:reloadTableData}),readSitePagesSection===false&&/*#__PURE__*/(0,jsx_runtime.jsx)(ErrorCodes/* ErrorCode403 */.$t,{mainMessage:"You don't have permission to view this data"}),currentEditType.openModal&&/*#__PURE__*/(0,jsx_runtime.jsx)(SitePagesSectionModal,{record:currentEditType.recordId,type:currentEditType.editType,reloadTableData:reloadTableData,onCancel:handleClick,openModal:currentEditType.openModal,permissions:permissions})]});}/* harmony default export */ const SiteSettings_PagesSection = (SitePagesSection);

/***/ }),

/***/ 9766:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ PagesContentPermissionsEnum)
/* harmony export */ });
let PagesContentPermissionsEnum=/*#__PURE__*/function(PagesContentPermissionsEnum){PagesContentPermissionsEnum["CREATE"]="createSitePagesContent";PagesContentPermissionsEnum["UPDATE"]="updateSitePagesContent";PagesContentPermissionsEnum["DELETE"]="deleteSitePagesContent";PagesContentPermissionsEnum["READ"]="readSitePagesContent";return PagesContentPermissionsEnum;}({});

/***/ }),

/***/ 11193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ PagesSectionModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
/* harmony import */ var _Common_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21073);
class PagesSectionModule{constructor(){this.endPoint="site-pages-section";this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(this.endPoint+"/",data,{headers:_Common_config__WEBPACK_IMPORTED_MODULE_1__/* .FormDataHeader */ .Y});};this.getAllRecords=queryData=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint,{params:queryData});};this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/").concat(id,"?all=true"));};this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/").concat(id),data,{headers:_Common_config__WEBPACK_IMPORTED_MODULE_1__/* .FormDataHeader */ .Y});};this.allowMultiples=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/allowMultiples/").concat(id));};this.disallowMultiples=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/disallowMultiples/").concat(id));};this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete("".concat(this.endPoint,"/").concat(id));};}}

/***/ }),

/***/ 78753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ PagesSectionPermissionsEnum)
/* harmony export */ });
let PagesSectionPermissionsEnum=/*#__PURE__*/function(PagesSectionPermissionsEnum){PagesSectionPermissionsEnum["CREATE"]="createSitePagesSection";PagesSectionPermissionsEnum["UPDATE"]="updateSitePagesSection";PagesSectionPermissionsEnum["DELETE"]="deleteSitePagesSection";PagesSectionPermissionsEnum["READ"]="readSitePagesSection";return PagesSectionPermissionsEnum;}({});

/***/ })

}]);