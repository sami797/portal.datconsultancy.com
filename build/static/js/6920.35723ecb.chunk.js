"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[6920],{

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

/***/ 32282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyServices_LeaveRequest)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./src/Components/Atoms/index.tsx + 12 modules
var Atoms = __webpack_require__(9394);
// EXTERNAL MODULE: ./src/Components/Templates/Layout/index.tsx + 28 modules
var Layout = __webpack_require__(81168);
// EXTERNAL MODULE: ./src/Components/Organisms/Dashboard/MyServices/LeaveRequest/styles.module.scss
var styles_module = __webpack_require__(68548);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./src/Components/Organisms/Dashboard/MyServices/LeaveRequest/LeaveRequestDrawer/index.tsx + 1 modules
var LeaveRequestDrawer = __webpack_require__(95251);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 1 modules
var message = __webpack_require__(92759);
// EXTERNAL MODULE: ./node_modules/antd/es/pagination/index.js + 12 modules
var pagination = __webpack_require__(24575);
// EXTERNAL MODULE: ./src/hooks/index.ts + 5 modules
var hooks = __webpack_require__(91970);
// EXTERNAL MODULE: ./src/Modules/LeaveRequest/index.ts
var LeaveRequest = __webpack_require__(50982);
// EXTERNAL MODULE: ./node_modules/antd/es/date-picker/index.js + 56 modules
var date_picker = __webpack_require__(4132);
// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 18 modules
var es_form = __webpack_require__(10678);
// EXTERNAL MODULE: ./node_modules/antd/es/select/index.js + 30 modules
var es_select = __webpack_require__(97554);
// EXTERNAL MODULE: ./node_modules/antd/es/empty/index.js + 2 modules
var empty = __webpack_require__(90247);
// EXTERNAL MODULE: ./src/Components/Organisms/Common/styles.module.scss
var Common_styles_module = __webpack_require__(96019);
// EXTERNAL MODULE: ./src/Components/Organisms/Skeletons/index.tsx
var Skeletons = __webpack_require__(70619);
// EXTERNAL MODULE: ./src/Components/Atoms/ServerErrorHandler/index.tsx
var ServerErrorHandler = __webpack_require__(13321);
// EXTERNAL MODULE: ./src/helpers/error-handler.ts
var error_handler = __webpack_require__(38266);
// EXTERNAL MODULE: ./src/Modules/LeaveType/index.ts
var LeaveType = __webpack_require__(41161);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/Dashboard/MyServices/LeaveRequest/create.tsx
const{RangePicker}=date_picker/* default */.A;const LeaveRequestModal=props=>{var _recordData$data;const{openModal,onCancel,reloadTableData,permissions:{createLeaveRequest}}=props;const[form]=es_form/* default */.A.useForm();const module=new LeaveRequest/* LeaveRequestModule */.j();const[recordData,setRecordData]=(0,react.useState)();const leaveTypeModule=new LeaveType/* LeaveTypeModule */.w();const[leaveTypes,setLeaveTypes]=(0,react.useState)([]);const fetchLeaveTypes=(0,react.useCallback)(()=>{leaveTypeModule.getAllPublishedRecords({perPage:100}).then(res=>{setLeaveTypes(res.data.data);}).catch(err=>{message/* default */.Ay.error(err.response.data.message);});},[]);const handleErrors=err=>{const error=(0,error_handler/* errorHandler */.r)(err);if(typeof error.message=="string"){setRecordData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},recordData),{},{error:error.message}));}else{let errData=(0,ServerErrorHandler/* HandleServerErrors */.p)(error.message,[]);form.setFields(errData);setRecordData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},recordData),{},{error:""}));}};const handleAlertClose=()=>{setRecordData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},recordData),{},{error:""}));};(0,react.useEffect)(()=>{form.resetFields();if(leaveTypes.length===0)fetchLeaveTypes();},[openModal]);const onFinish=formValues=>{var _files$fileList;setRecordData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},recordData),{},{buttonLoading:true}));const{files}=formValues;const formData=new FormData();const excludeFields=["files"];Object.entries(formValues).forEach(ele=>{if(!excludeFields.includes(ele[0])){if(ele[0]==="leaveDates"){formData.append("leaveFrom",formValues.leaveDates[0]._d.toISOString());formData.append("leaveTo",formValues.leaveDates[1]._d.toISOString());}else formData.append(ele[0],ele[1]);}});// add files to form data 
const _files=files===null||files===void 0?void 0:(_files$fileList=files.fileList)===null||_files$fileList===void 0?void 0:_files$fileList.map(file=>{return file.originFileObj;});if(_files!==null&&_files!==void 0&&_files.length){for(let i=0;i<_files.length;i++){formData.append('files[]',_files[i]);}}if(createLeaveRequest===true){module.createRecord(formData).then(res=>{reloadTableData();onCancel();setRecordData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{buttonLoading:false}));form.resetFields();}).catch(err=>{handleErrors(err);setRecordData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{buttonLoading:false}));});}else{setRecordData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{buttonLoading:false}));message/* default */.Ay.error("You don't have permission to create this record");}};return/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomModal */.jo,{visible:openModal,closable:true,onCancel:onCancel,titleText:"Add New Request",showFooter:false,children:recordData!==null&&recordData!==void 0&&recordData.loading?/*#__PURE__*/(0,jsx_runtime.jsx)(Skeletons/* default */.A,{items:10}):/*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.A,{className:Common_styles_module/* default */.A.form,onFinish:onFinish,form:form,children:[(recordData===null||recordData===void 0?void 0:recordData.error)&&/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomErrorAlert */.WZ,{description:recordData===null||recordData===void 0?void 0:recordData.error,isClosable:true,onClose:handleAlertClose}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"purpose",rules:[{required:true,message:"Please add a purpose"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{size:"w100",label:"Purpose",asterisk:true,type:"textArea",placeHolder:"Enter Purpose"})})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{flexDirection:'column',gap:0},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{fontSize:'var(--font-size-sm)',color:'var(--color-dark-main)'},children:["Leave dates",/*#__PURE__*/(0,jsx_runtime.jsx)("span",{style:{color:'var(--color-red-yp)'},children:" *"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:'leaveDates',rules:[{required:true,message:"Please enter leave dates."}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(RangePicker,{style:{width:'100%'}})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.A.Item,{name:"leaveTypeId",rules:[{required:true,message:"Please select a leave type"}],children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("label",{className:"font-size-sm color-dark-main",children:["Leave Type  ",/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"color-red-yp",children:"*"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.A,{allowClear:true,style:{width:"100%"},defaultValue:recordData===null||recordData===void 0?void 0:(_recordData$data=recordData.data)===null||_recordData$data===void 0?void 0:_recordData$data.leaveTypeId,placeholder:"Search for the leave type",className:"selectAntdCustom",onChange:value=>form.setFieldsValue({leaveTypeId:value}),showSearch:true,onSearch:value=>{},optionFilterProp:"label",options:leaveTypes===null||leaveTypes===void 0?void 0:leaveTypes.map(item=>{return{label:item.title,value:item.id};}),notFoundContent:/*#__PURE__*/(0,jsx_runtime.jsx)(empty/* default */.A,{image:"https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg",imageStyle:{height:100},description:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:"No data found, Please search for the leave type"})})})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* ImageUploader */.GA,{name:"files",required:false,multiple:true})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"d-flex justify-end mt-4",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{size:"normal",fontSize:"sm",onClick:onCancel,type:"plain",children:"Cancel"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{type:"primary",size:"normal",fontSize:"sm",htmlType:"submit",loading:recordData===null||recordData===void 0?void 0:recordData.buttonLoading,children:"Add Request"})]})]})});};
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(98341);
// EXTERNAL MODULE: ./src/Modules/LeaveRequest/permissions.ts
var LeaveRequest_permissions = __webpack_require__(64854);
// EXTERNAL MODULE: ./src/Components/Organisms/Dashboard/MyServices/LeaveRequest/card.tsx
var card = __webpack_require__(51297);
// EXTERNAL MODULE: ./src/helpers/useDebounce.ts
var useDebounce = __webpack_require__(28173);
// EXTERNAL MODULE: ./src/Modules/User/index.ts
var User = __webpack_require__(47645);
// EXTERNAL MODULE: ./src/Components/Atoms/CardShimmer/index.tsx + 1 modules
var CardShimmer = __webpack_require__(87031);
// EXTERNAL MODULE: ./src/helpers/common.ts
var common = __webpack_require__(88132);
;// ./src/Components/Organisms/Dashboard/MyServices/LeaveRequest/index.tsx
const breadCrumbsData=[{text:"Home",isLink:true,path:"/"},{isLink:true,text:"My Services",path:"/myservices"},{isLink:false,text:"Leave Request"}];const LeaveRequest_LeaveRequest=()=>{// available permissions for the properties page
const permissionSlug=(0,common/* getPermissionSlugs */.AH)(LeaveRequest_permissions/* LeaveRequestPermissionsEnum */.g);const{userPermissions}=(0,es/* useSelector */.d4)(state=>state.usersReducer);const permissions=userPermissions;const{createLeaveRequest,readLeaveRequest}=permissions;const[currentEditType,setcurrentEditType]=(0,react.useState)({recordId:0,openModal:false});const[openDrawer,setOpenDrawer]=(0,react.useState)(false);const[filters,setFilters]=(0,react.useState)({page:1,perPage:6});const module=(0,react.useMemo)(()=>new LeaveRequest/* LeaveRequestModule */.j(),[]);const{data,onRefresh,setData,loading,meta}=(0,hooks/* useFetchData */.Gs)({method:module.getOwnRecords,initialQuery:(0,objectSpread2/* default */.A)({},filters)});const onCancelClick=()=>{if(createLeaveRequest===false){message/* default */.Ay.error("You don't have permission to create new record");return;}setcurrentEditType((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},currentEditType),{},{openModal:!currentEditType.openModal}));};//user search
const[searchTermUser,setSearchTermUser]=(0,react.useState)("");const debouncedSearchTermUser=(0,useDebounce/* useDebounce */.d)(searchTermUser,500);const[users,setUsers]=(0,react.useState)([]);const userModule=(0,react.useMemo)(()=>new User/* UserModule */.U(),[]);const onUserSearch=(0,react.useCallback)(()=>{if(debouncedSearchTermUser){userModule.getAllRecords({name:debouncedSearchTermUser}).then(res=>{setUsers(prev=>{var _res$data,_res$data$data;// if the data is already present in the state, then don't add it again
const filteredData=res===null||res===void 0?void 0:(_res$data=res.data)===null||_res$data===void 0?void 0:(_res$data$data=_res$data.data)===null||_res$data$data===void 0?void 0:_res$data$data.filter(item=>{return!(prev!==null&&prev!==void 0&&prev.find(prevItem=>prevItem.id===item.id));});// add the new data to the existing data
return[...prev,...filteredData];});}).catch(err=>{message/* default */.Ay.error(err.response.data.message);});}},[debouncedSearchTermUser]);(0,react.useEffect)(()=>{onUserSearch();},[onUserSearch]);return/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.A,{permissionSlug:permissionSlug,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* PageHeader */.zY,{heading:"Leave Request",breadCrumbData:breadCrumbsData,showAdd:createLeaveRequest===true?true:false,buttonText:"New Request",onButtonClick:onCancelClick}),/*#__PURE__*/(0,jsx_runtime.jsx)("section",{className:styles_module/* default */.A.container,children:loading?[...new Array(6)].map((_,index)=>/*#__PURE__*/(0,jsx_runtime.jsx)(CardShimmer/* CardShimmer */.S,{},"shimmer".concat(index))):(data===null||data===void 0?void 0:data.length)!==0?data===null||data===void 0?void 0:data.map((leaveRequest,index)=>/*#__PURE__*/(0,jsx_runtime.jsx)(card/* LeaveRequestCard */.Z,{leaveRequest:leaveRequest,onClick:()=>{setcurrentEditType((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},currentEditType),{},{recordId:leaveRequest.id}));setOpenDrawer(true);}},index)):/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{margin:'auto'},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomEmpty */.ZX,{description:"No requests found for the given filters"})})}),/*#__PURE__*/(0,jsx_runtime.jsx)(pagination/* default */.A,{hideOnSinglePage:true,current:meta===null||meta===void 0?void 0:meta.page,total:meta===null||meta===void 0?void 0:meta.total,pageSize:(meta===null||meta===void 0?void 0:meta.perPage)||0,onChange:(page,pageSize)=>{onRefresh((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},filters),{},{page:page,perPage:pageSize}));},style:{alignSelf:"flex-end"}}),openDrawer&&/*#__PURE__*/(0,jsx_runtime.jsx)(LeaveRequestDrawer/* LeaveRequestDrawer */.Y,{openDrawer:openDrawer,onClose:()=>setOpenDrawer(false),permissions:permissions,record:currentEditType.recordId,reloadTableData:onRefresh}),/*#__PURE__*/(0,jsx_runtime.jsx)(LeaveRequestModal,{reloadTableData:onRefresh,onCancel:onCancelClick,openModal:currentEditType.openModal,permissions:permissions})]});};/* harmony default export */ const MyServices_LeaveRequest = (LeaveRequest_LeaveRequest);

/***/ }),

/***/ 41161:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ LeaveTypeModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
class LeaveTypeModule{constructor(){this.endPoint="leave-type";/**Get all Biometric records
	 * @param query - query params
	 */this.getAllRecords=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint,{params:query});};this.getAllPublishedRecords=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint+"/find-published",{params:query});};this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* .BASE_URL */ .C+this.endPoint+"/"+id);};this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* .BASE_URL */ .C+this.endPoint+"/"+id);};this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* .BASE_URL */ .C+this.endPoint,data);};this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* .BASE_URL */ .C+this.endPoint+"/"+id,data);};}}

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

/***/ 62298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ icons_FormOutlined)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
;// ./node_modules/@ant-design/icons-svg/es/asn/FormOutlined.js
// This icon file is generated automatically.
var FormOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M904 512h-56c-4.4 0-8 3.6-8 8v320H184V184h320c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V520c0-4.4-3.6-8-8-8z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "d": "M355.9 534.9L354 653.8c-.1 8.9 7.1 16.2 16 16.2h.4l118-2.9c2-.1 4-.9 5.4-2.3l415.9-415c3.1-3.1 3.1-8.2 0-11.3L785.4 114.3c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-415.8 415a8.3 8.3 0 00-2.3 5.6zm63.5 23.6L779.7 199l45.2 45.1-360.5 359.7-45.7 1.1.7-46.4z"
      }
    }]
  },
  "name": "form",
  "theme": "outlined"
};
/* harmony default export */ const asn_FormOutlined = (FormOutlined);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 5 modules
var AntdIcon = __webpack_require__(61187);
;// ./node_modules/@ant-design/icons/es/icons/FormOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var FormOutlined_FormOutlined = function FormOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.A, (0,esm_extends/* default */.A)({}, props, {
    ref: ref,
    icon: asn_FormOutlined
  }));
};
if (false) {}
/* harmony default export */ const icons_FormOutlined = (/*#__PURE__*/react.forwardRef(FormOutlined_FormOutlined));

/***/ })

}]);