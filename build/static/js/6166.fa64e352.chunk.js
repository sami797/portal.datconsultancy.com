"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[6166],{

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

/***/ 66166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PagesSectionContent)
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
// EXTERNAL MODULE: ./src/helpers/constants.ts
var constants = __webpack_require__(65944);
// EXTERNAL MODULE: ./src/Components/Atoms/ServerErrorHandler/index.tsx
var ServerErrorHandler = __webpack_require__(13321);
// EXTERNAL MODULE: ./src/helpers/error-handler.ts
var error_handler = __webpack_require__(38266);
// EXTERNAL MODULE: ./src/Modules/Country/index.ts
var Country = __webpack_require__(83584);
// EXTERNAL MODULE: ./src/services/axiosInstance.ts
var axiosInstance = __webpack_require__(83365);
// EXTERNAL MODULE: ./src/Modules/Common/config.ts
var config = __webpack_require__(21073);
;// ./src/Modules/PagesSectionContent/index.ts
class PagesSectionContentModule{constructor(){this.endPoint="site-pages-content";this.createRecord=data=>{return axiosInstance/* default */.A.post(this.endPoint+"/",data,{headers:config/* FormDataHeader */.Y});};this.getAllRecords=queryData=>{return axiosInstance/* default */.A.get(this.endPoint,{params:queryData});};this.getAllRecordsByCategory=categoryId=>{return axiosInstance/* default */.A.get(this.endPoint+"/pageContentByCategory/"+categoryId);};this.getRecordById=id=>{return axiosInstance/* default */.A.get("".concat(this.endPoint,"/").concat(id,"?all=true"));};this.updateRecord=(data,id)=>{return axiosInstance/* default */.A.patch("".concat(this.endPoint,"/").concat(id),data,{headers:config/* FormDataHeader */.Y});};this.deleteRecord=id=>{return axiosInstance/* default */.A.delete("".concat(this.endPoint,"/").concat(id));};}}
// EXTERNAL MODULE: ./src/Modules/PagesSection/index.ts
var PagesSection = __webpack_require__(11193);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(42074);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/SiteSettings/PagesSectionContent/modal.tsx
const SitePagesSectionContentModal=props=>{var _recordData$data,_recordData$data2,_recordData$data3,_recordData$data4,_recordData$data5,_recordData$data6;const{openModal,onCancel,type,record,reloadTableData,permissions:{createSitePagesContent,updateSitePagesContent}}=props;const[form]=es_form/* default */.A.useForm();const module=(0,react.useMemo)(()=>new PagesSectionContentModule(),[]);const countryModule=(0,react.useMemo)(()=>new Country/* CountryModule */.j(),[]);const pagesSectionModule=(0,react.useMemo)(()=>new PagesSection/* PagesSectionModule */.e(),[]);const[recordData,setRecordData]=(0,react.useState)();const[countries,setCountries]=(0,react.useState)([]);const[pagesSectionData,setPagesSectionData]=(0,react.useState)([]);const[searchParams]=(0,dist/* useSearchParams */.ok)();let sectionId=searchParams.get('sectionId');if(sectionId){form.setFieldsValue({pageSectionId:sectionId});}const handleErrors=err=>{const error=(0,error_handler/* errorHandler */.r)(err);if(typeof error.message=="string"){setRecordData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},recordData),{},{error:error.message}));}else{let errData=(0,ServerErrorHandler/* HandleServerErrors */.p)(error.message,[]);form.setFields(errData);setRecordData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},recordData),{},{error:""}));}};const handleAlertClose=()=>{setRecordData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},recordData),{},{error:""}));};const getDataBySlug=(0,react.useCallback)(()=>{module.getRecordById(record).then(res=>{if(res.data&&res.data.data){form.setFieldsValue((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({translations:res.data.data.localization},res.data.data),{},{isPublished:res.data.data.isPublished}));setRecordData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},res.data),{},{loading:false}));}}).catch(err=>{handleErrors(err);});},[form,record,module]);const getCountryList=(0,react.useCallback)(()=>{countryModule.getAllRecords().then(res=>{if(res.data&&res.data.data){setCountries(res.data.data);}});},[countryModule]);const getPagesSectionData=(0,react.useCallback)(()=>{pagesSectionModule.getAllRecords().then(res=>{if(res.data&&res.data.data){setPagesSectionData(res.data.data);}});},[pagesSectionModule]);(0,react.useEffect)(()=>{if(type==="edit"){setRecordData({loading:true});// fetch data by slug or id
getDataBySlug();// fetch the countries
getCountryList();getPagesSectionData();}else{// fetch the countries
getCountryList();getPagesSectionData();form.resetFields();}},[openModal,type,form,getDataBySlug,getCountryList,getPagesSectionData]);const onFinish=formValues=>{setRecordData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},recordData),{},{buttonLoading:true}));const formData=new FormData();const excludeFields=["image","translations"];Object.entries(formValues).forEach(ele=>{if(!excludeFields.includes(ele[0])){formData.append(ele[0],ele[1]);}});if(formValues["image"]&&typeof formValues["image"]!=="string"&&formValues["image"]["fileList"].length>0){formData.append("image",formValues["image"]["fileList"][0]["originFileObj"]);}if(formValues.translations){formValues.translations.forEach((item,index)=>{formData.append("translations[".concat(index+1,"][language]"),item.language);formData.append("translations[".concat(index+1,"][title]"),item.title);formData.append("translations[".concat(index+1,"][highlight]"),item.highlight);formData.append("translations[".concat(index+1,"][description]"),item.description);});}switch(type){case"edit":{if(updateSitePagesContent===true){module.updateRecord(formData,recordData===null||recordData===void 0?void 0:recordData.data.id).then(res=>{reloadTableData();onCancel();setRecordData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{loading:false}));}).catch(err=>{handleErrors(err);setRecordData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{loading:false}));});}else{setRecordData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{loading:false}));message/* default */.Ay.error("You don't have permission to update this record");}break;}case"new":{if(createSitePagesContent===true){module.createRecord(formData).then(res=>{reloadTableData();onCancel();setRecordData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{buttonLoading:false}));}).catch(err=>{handleErrors(err);setRecordData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{buttonLoading:false}));});}else{setRecordData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{loading:false}));message/* default */.Ay.error("You don't have permission to create this record");}break;}}};return/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomModal */.jo,{visible:openModal,size:"900px",closable:true,onCancel:onCancel,titleText:type==="edit"?"Edit Section Content":"Add New Content",showFooter:false,children:recordData!==null&&recordData!==void 0&&recordData.loading?/*#__PURE__*/(0,jsx_runtime.jsx)(Skeletons/* default */.A,{items:10}):/*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.A,{className:styles_module/* default */.A.form,onFinish:onFinish,form:form,children:[(recordData===null||recordData===void 0?void 0:recordData.error)&&/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomErrorAlert */.WZ,{description:recordData===null||recordData===void 0?void 0:recordData.error,isClosable:true,onClose:handleAlertClose}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"countryId",rules:[{required:true,message:"Please Select a country!"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomSelect */.Ae,{label:"Country",placeholder:"Please select country",options:countries===null||countries===void 0?void 0:countries.map(country=>({label:country.name,value:country.id})),asterisk:true})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"pageSectionId",rules:[{required:true,message:"Please select a page section"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomSelect */.Ae,{label:"Page Section",placeholder:"Please select a section",defaultValue:sectionId?sectionId:"",options:pagesSectionData===null||pagesSectionData===void 0?void 0:pagesSectionData.map(section=>({label:section.title,value:section.id.toString()})),asterisk:true})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Localization */.G4,{title:"Page Content",formName:"translations",description:true,highlight:true,form:form,defaultValue:recordData===null||recordData===void 0?void 0:(_recordData$data=recordData.data)===null||_recordData$data===void 0?void 0:_recordData$data.localization}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"imageAlt",rules:[{required:false}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{size:"w100",label:"Image Alt Text",type:"text"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"isPublished",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomSelect */.Ae,{label:"Published",options:[{value:true,label:"Yes"},{value:false,label:"No"}]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"order",rules:[{required:false}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{size:"w100",label:"Order",type:"text"})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* ImageUploader */.GA,{name:"image",defaultFileList:type==="edit"&&recordData&&((_recordData$data2=recordData.data)===null||_recordData$data2===void 0?void 0:_recordData$data2.image)&&[{uid:(_recordData$data3=recordData.data)===null||_recordData$data3===void 0?void 0:_recordData$data3.id,name:(_recordData$data4=recordData.data)!==null&&_recordData$data4!==void 0&&_recordData$data4.image?"..."+((_recordData$data5=recordData.data)===null||_recordData$data5===void 0?void 0:_recordData$data5.image.substr(recordData.data.image.length-20,recordData.data.image.length)):"",status:"done",url:constants/* RESOURCE_BASE_URL */.to+((_recordData$data6=recordData.data)===null||_recordData$data6===void 0?void 0:_recordData$data6.image)}]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.footer,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{size:"normal",fontSize:"sm",onClick:onCancel,type:"plain",children:"Cancel"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{type:"primary",size:"normal",fontSize:"sm",htmlType:"submit",loading:recordData===null||recordData===void 0?void 0:recordData.buttonLoading,children:"Submit"})]})]})});};
// EXTERNAL MODULE: ./node_modules/antd/es/popconfirm/index.js + 1 modules
var popconfirm = __webpack_require__(56231);
// EXTERNAL MODULE: ./node_modules/antd/es/image/index.js + 13 modules
var es_image = __webpack_require__(9206);
// EXTERNAL MODULE: ./node_modules/antd/es/table/index.js + 96 modules
var table = __webpack_require__(41821);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DeleteOutlined.js
var DeleteOutlined = __webpack_require__(78433);
// EXTERNAL MODULE: ./src/Components/Atoms/Headings/index.tsx
var Headings = __webpack_require__(35751);
// EXTERNAL MODULE: ./src/helpers/dateHandler.ts
var dateHandler = __webpack_require__(98933);
// EXTERNAL MODULE: ./src/Components/Atoms/Switch/index.tsx
var Switch = __webpack_require__(44394);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(98341);
;// ./src/Components/Organisms/SiteSettings/PagesSectionContent/table-columns.tsx
const ActionComponent=props=>{const{record,onEditIconClick,reloadTableData,permissions:{deleteSitePagesContent}}=props;const[actionState,setActionState]=(0,react.useState)({confirmLoading:false,openPopConfirm:false});const module=(0,react.useMemo)(()=>new PagesSectionContentModule(),[]);const handleDelete=()=>{setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{confirmLoading:true}));if(deleteSitePagesContent===false){message/* default */.Ay.error("You don't have permission to delete this record, please contact your admin.");setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{openPopConfirm:false}));return;}module.deleteRecord(record.id).then(_res=>{setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{openPopConfirm:false,confirmLoading:false}));reloadTableData();}).catch(_err=>{setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{confirmLoading:false}));});};const showPopconfirm=()=>{setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{openPopConfirm:true}));};return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.actions,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{onClick:()=>onEditIconClick(record),children:/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:"/images/editicon.svg",alt:""})}),/*#__PURE__*/(0,jsx_runtime.jsx)(popconfirm/* default */.A,{open:actionState.openPopConfirm,placement:"top",title:"Are you sure?",onConfirm:handleDelete,onCancel:()=>setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{openPopConfirm:false})),okButtonProps:{loading:actionState.confirmLoading},okText:"Yes",cancelText:"No",onOpenChange:visible=>{if(!visible){setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{openPopConfirm:false}));}},children:/*#__PURE__*/(0,jsx_runtime.jsx)(DeleteOutlined/* default */.A,{className:styles_module/* default */.A.bg__red,onClick:showPopconfirm})})]});};function TableComponent(props){const{tableData,tableLoading,onEditIconClick,reloadTableData}=props;const{userPermissions}=(0,es/* useSelector */.d4)(state=>state.usersReducer);const permissions=userPermissions;const module=new PagesSectionContentModule();const onIsPublishedChange=(checked,recordId)=>{return module.updateRecord({isPublished:checked},recordId);};const columns=[{title:"S.No",dataIndex:"index",key:"index",render:(_text,_record,index)=>index+1,width:"5%"},{title:"Title",dataIndex:"localization",key:"localization",render:(_localization,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",weight:"bold",children:record.localization[0].title})})},{title:"Country",dataIndex:"country",key:"country",render:(_country,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:record!==null&&record!==void 0&&record.country?record===null||record===void 0?void 0:record.country.name:""})},{title:"Image",dataIndex:"image",key:"image",render:(image,record)=>image?/*#__PURE__*/(0,jsx_runtime.jsx)(es_image/* default */.A,{width:50,height:50,src:"".concat(constants/* RESOURCE_BASE_URL */.to).concat(image),alt:record.imageAlt,preview:false,rootClassName:"object-fit-contain"}):/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{})},{title:"Date",dataIndex:"date",key:"date",render:(_date,record)=>/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:"Added: ".concat((0,dateHandler/* convertDate */.ic)(record.addedDate,'MM dd yy'))}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:"Modified: ".concat(record.modifiedDate?(0,dateHandler/* convertDate */.ic)(record===null||record===void 0?void 0:record.modifiedDate,'MM dd yy'):'Not Modified')})]})},{title:"Published",dataIndex:"isPublished",key:"isPublished",render:(checked,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)(Switch/* Switch */.d,{checked:checked,onChange:onIsPublishedChange,recordId:record.id,allowChange:permissions.updateSitePagesContent})},{title:"Actions",dataIndex:"actions",key:"actions",render:(_text,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)(ActionComponent,{record:record,onEditIconClick:onEditIconClick,reloadTableData:reloadTableData,permissions:permissions})}];return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module/* default */.A.antdTableWrapper,children:/*#__PURE__*/(0,jsx_runtime.jsx)(table/* default */.A,{sticky:true,dataSource:tableData,columns:columns,pagination:false,scroll:{x:991},loading:tableLoading,rowKey:record=>"site-pages-content-".concat(record.id)})});}
// EXTERNAL MODULE: ./node_modules/antd/es/select/index.js + 30 modules
var es_select = __webpack_require__(97554);
// EXTERNAL MODULE: ./node_modules/antd/es/empty/index.js + 2 modules
var empty = __webpack_require__(90247);
// EXTERNAL MODULE: ./src/Modules/PagesSectionContent/permissions.ts
var PagesSectionContent_permissions = __webpack_require__(9766);
// EXTERNAL MODULE: ./src/Components/Atoms/ErrorCodes/index.tsx + 1 modules
var ErrorCodes = __webpack_require__(36250);
// EXTERNAL MODULE: ./src/helpers/common.ts
var common = __webpack_require__(88132);
;// ./src/Components/Organisms/SiteSettings/PagesSectionContent/index.tsx
const breadCrumbsData=[{text:"Home",isLink:true,path:"/"},{isLink:true,text:"Site Settings",path:"/siteSettings"},{isLink:true,text:"Site Pages",path:"/siteSettings/site-pages"},{isLink:true,text:"Pages Section",path:"/siteSettings/pages-section"},{isLink:false,text:"Site Pages Section Content"}];function SitePagesSectionContentSettings(){var _sectionModuleData$da;// available permissions for this module
const permissionSlug=(0,common/* getPermissionSlugs */.AH)(PagesSectionContent_permissions/* PagesContentPermissionsEnum */.z);const{userPermissions}=(0,es/* useSelector */.d4)(state=>state.usersReducer);const permissions=userPermissions;const{readSitePagesContent,createSitePagesContent,updateSitePagesContent}=permissions;const[currentEditType,setcurrentEditType]=(0,react.useState)({editType:"new",recordId:0,openModal:false});const module=(0,react.useMemo)(()=>new PagesSectionContentModule(),[]);const sectionModule=(0,react.useMemo)(()=>new PagesSection/* PagesSectionModule */.e(),[]);const[searchParams,setSearchParams]=(0,dist/* useSearchParams */.ok)();let sectionId=Number(searchParams.get('sectionId'));const[moduleData,setModuleData]=(0,react.useState)({isLoading:false,error:{},data:[]});const[sectionModuleData,setSectionModuleData]=(0,react.useState)({isLoading:false,error:{},data:[]});// event handle  to open and close modal
const handleClick=()=>{if(createSitePagesContent===false){message/* default */.Ay.error("You don't have permission to create new record");return;}setcurrentEditType((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},currentEditType),{},{openModal:!currentEditType.openModal,editType:"new"}));};const onEditIconClick=record=>{if(updateSitePagesContent===false){message/* default */.Ay.error("You don't have permission to update this record");return;}setcurrentEditType((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},currentEditType),{},{editType:"edit",recordId:record.id,openModal:true}));};const reloadTableData=()=>{setModuleData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},moduleData),{},{loading:true}));module.getAllRecordsByCategory(sectionId).then(res=>{setModuleData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},moduleData),res.data));}).catch(err=>{});};const getSectionData=()=>{setSectionModuleData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},sectionModuleData),{},{loading:true}));sectionModule.getAllRecords().then(res=>{setSectionModuleData(res.data);}).catch(err=>{});};(0,react.useEffect)(()=>{getSectionData();},[]);(0,react.useEffect)(()=>{reloadTableData();},[sectionId]);// const onPaginationChange = useCallback((page: number, pageSize: number) => {
// 	setModuleData({ ...moduleData, loading: true });
// 	const params = {
// 		page,
// 		perPage: pageSize,
// 	};
// 	module
// 		.getAllRecords(params)
// 		.then((res) => {
// 			setModuleData({ ...res.data, loading: false });
// 		})
// 		.catch((err) => {
// 			setModuleData({ ...moduleData, loading: false });
// 		});
// }, [moduleData, module]);
return/*#__PURE__*/(0,jsx_runtime.jsxs)(SiteSettings["default"],{permissionSlug:permissionSlug,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* PageHeader */.zY,{heading:"Section Content of",buttonText:"Add New Content",onButtonClick:handleClick,breadCrumbData:breadCrumbsData,showAdd:createSitePagesContent===true?true:false,children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.A,{onChange:value=>setSearchParams({sectionId:value.toString()}),className:"w-200",defaultValue:sectionId,placeholder:"Choose section",loading:sectionModuleData.loading,options:sectionModuleData===null||sectionModuleData===void 0?void 0:(_sectionModuleData$da=sectionModuleData.data)===null||_sectionModuleData$da===void 0?void 0:_sectionModuleData$da.map(ele=>{return{label:ele.title,value:ele.id};})})})}),!sectionId?/*#__PURE__*/(0,jsx_runtime.jsx)(empty/* default */.A,{image:"https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg",imageStyle:{height:150},description:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:"Please select a page section to edit its content"})}):/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[readSitePagesContent===true&&/*#__PURE__*/(0,jsx_runtime.jsx)(TableComponent,{tableData:moduleData===null||moduleData===void 0?void 0:moduleData.data.pagesContent,tableLoading:moduleData.loading,onEditIconClick:onEditIconClick,reloadTableData:reloadTableData}),readSitePagesContent===false&&/*#__PURE__*/(0,jsx_runtime.jsx)(ErrorCodes/* ErrorCode403 */.$t,{mainMessage:"You don't have permission to view this data"}),currentEditType.openModal&&/*#__PURE__*/(0,jsx_runtime.jsx)(SitePagesSectionContentModal,{record:currentEditType.recordId,type:currentEditType.editType,reloadTableData:reloadTableData,onCancel:handleClick,openModal:currentEditType.openModal,permissions:permissions})]})]});}/* harmony default export */ const PagesSectionContent = (SitePagesSectionContentSettings);

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

/***/ })

}]);