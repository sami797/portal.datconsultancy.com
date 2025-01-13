"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[6052],{

/***/ 33671:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Dashboard_Notifications)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 1 modules
var message = __webpack_require__(92759);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(98341);
// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 18 modules
var es_form = __webpack_require__(10678);
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
// EXTERNAL MODULE: ./src/helpers/useDebounce.ts
var useDebounce = __webpack_require__(28173);
// EXTERNAL MODULE: ./src/Modules/User/index.ts
var User = __webpack_require__(47645);
// EXTERNAL MODULE: ./src/Modules/Notification/index.ts
var Notification = __webpack_require__(91297);
// EXTERNAL MODULE: ./src/helpers/commonEnums.ts
var commonEnums = __webpack_require__(2360);
// EXTERNAL MODULE: ./src/helpers/common.ts
var common = __webpack_require__(88132);
// EXTERNAL MODULE: ./src/Modules/Department/index.ts
var Department = __webpack_require__(98924);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/Dashboard/Notifications/modal.tsx
const NotificationModal=props=>{var _recordData$data,_recordData$data$Depa;const{openModal,onCancel,type,record,reloadTableData,permissions:{createNotification}}=props;const[form]=es_form/* default */.A.useForm();const module=new Notification/* NotificationModule */.C();const[recordData,setRecordData]=(0,react.useState)();const[notificationType,setNotificationType]=(0,react.useState)("broadcast");//user search
const[searchTermUser,setSearchTermUser]=(0,react.useState)("");const debouncedSearchTermUser=(0,useDebounce/* useDebounce */.d)(searchTermUser,500);const[users,setUsers]=(0,react.useState)([]);const userModule=(0,react.useMemo)(()=>new User/* UserModule */.U(),[]);const onUserSearch=(0,react.useCallback)(()=>{if(debouncedSearchTermUser){userModule.getAllRecords({name:debouncedSearchTermUser}).then(res=>{setUsers(prev=>{var _res$data,_res$data$data;// if the data is already present in the state, then don't add it again
const filteredData=res===null||res===void 0?void 0:(_res$data=res.data)===null||_res$data===void 0?void 0:(_res$data$data=_res$data.data)===null||_res$data$data===void 0?void 0:_res$data$data.filter(item=>{return!(prev!==null&&prev!==void 0&&prev.find(prevItem=>prevItem.id===item.id));});// add the new data to the existing data
return[...prev,...filteredData];});}).catch(err=>{message/* default */.Ay.error(err.response.data.message);});}},[debouncedSearchTermUser]);(0,react.useEffect)(()=>{onUserSearch();},[onUserSearch]);//department
const[searchTermDepartment,setSearchTermDepartment]=(0,react.useState)("");const debouncedSearchTermDepartment=(0,useDebounce/* useDebounce */.d)(searchTermDepartment,500);const[departments,setDepartments]=(0,react.useState)([]);const departmentModule=(0,react.useMemo)(()=>new Department/* DepartmentModule */.d(),[]);const onDepartmentSearch=(0,react.useCallback)(()=>{if(debouncedSearchTermDepartment||departments.length===0){departmentModule.getAllPublishedRecords({name:debouncedSearchTermDepartment}).then(res=>{setDepartments(prev=>{var _res$data2,_res$data2$data;// if the data is already present in the state, then don't add it again
const filteredData=res===null||res===void 0?void 0:(_res$data2=res.data)===null||_res$data2===void 0?void 0:(_res$data2$data=_res$data2.data)===null||_res$data2$data===void 0?void 0:_res$data2$data.filter(item=>{return!(prev!==null&&prev!==void 0&&prev.find(prevItem=>prevItem.id===item.id));});// add the new data to the existing data
return[...prev,...filteredData];});}).catch(err=>{message/* default */.Ay.error(err.response.data.message);});}},[debouncedSearchTermDepartment]);(0,react.useEffect)(()=>{onDepartmentSearch();},[onDepartmentSearch]);const handleErrors=err=>{const error=(0,error_handler/* errorHandler */.r)(err);if(typeof error.message=="string"){setRecordData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},recordData),{},{error:error.message}));}else{let errData=(0,ServerErrorHandler/* HandleServerErrors */.p)(error.message,[]);form.setFields(errData);setRecordData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},recordData),{},{error:""}));}};const handleAlertClose=()=>{setRecordData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},recordData),{},{error:""}));};(0,react.useEffect)(()=>{form.resetFields();},[]);const onFinish=formValues=>{console.log('here',formValues);// setRecordData({ ...recordData, buttonLoading: true });
const formData=new FormData();const excludeFields=["file","type","userIds"];Object.entries(formValues).forEach(ele=>{if(!excludeFields.includes(ele[0])){formData.append(ele[0],ele[1]);}});if(formValues["file"]&&typeof formValues["file"]!=="string"&&formValues["file"]["fileList"].length>0){formData.append("file",formValues["file"]["fileList"][0]["originFileObj"]);}formData.append("type",notificationType);if(formValues.userIds){let userIds=form.getFieldValue("userIds")[0];userIds.forEach((ele,index)=>{formData.append("userIds["+index+"]",ele);});}if(createNotification===true){module.createRecord(formData).then(res=>{reloadTableData();onCancel();setRecordData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{buttonLoading:false}));}).catch(err=>{handleErrors(err);setRecordData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{buttonLoading:false}));});}else{setRecordData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{buttonLoading:false}));message/* default */.Ay.error("You don't have permission to create this record");}};return/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomModal */.jo,{visible:openModal,closable:true,onCancel:onCancel,titleText:"Add New Announcement",showFooter:false,children:recordData!==null&&recordData!==void 0&&recordData.loading?/*#__PURE__*/(0,jsx_runtime.jsx)(Skeletons/* default */.A,{items:3}):/*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.A,{className:styles_module/* default */.A.form,onFinish:onFinish,form:form,children:[(recordData===null||recordData===void 0?void 0:recordData.error)&&/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomErrorAlert */.WZ,{description:recordData===null||recordData===void 0?void 0:recordData.error,isClosable:true,onClose:handleAlertClose}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"type",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomSelect */.Ae,{asterisk:true,label:"Announcement Type",options:Object.keys(commonEnums/* NotificationType */._n).map(key=>({label:(0,common/* capitalize */.ZH)(key),value:key})),defaultValue:"broadcast",placeholder:"Select Announcement Type",onChange:val=>setNotificationType(val)})})}),notificationType==="user"&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.A.Item,{name:"userIds",rules:[{required:true,message:"Please select an employee"}],children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("label",{className:"font-size-sm",children:["Employee  ",/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"color-red-yp",children:"*"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.A,{mode:"multiple",allowClear:true,style:{width:"100%"},placeholder:"Search for the employee",className:"selectAntdCustom",onChange:value=>form.setFieldsValue({userIds:[value]}),showSearch:true,onSearch:value=>setSearchTermUser(value),optionFilterProp:"label",options:users===null||users===void 0?void 0:users.map(item=>{return{label:item.firstName+" "+item.lastName,value:item.id};}),notFoundContent:/*#__PURE__*/(0,jsx_runtime.jsx)(empty/* default */.A,{image:"https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg",imageStyle:{height:100},description:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:"No data found, Please search for the employee"})})})]})}),notificationType==="department"&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.A.Item,{name:"departmentId",rules:[{required:true,message:"Please select a department"}],children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("label",{className:"font-size-sm",children:["Department  ",/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"color-red-yp",children:"*"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.A,{allowClear:true,style:{width:"100%"},defaultValue:recordData===null||recordData===void 0?void 0:(_recordData$data=recordData.data)===null||_recordData$data===void 0?void 0:(_recordData$data$Depa=_recordData$data.Department)===null||_recordData$data$Depa===void 0?void 0:_recordData$data$Depa.id,placeholder:"Search for the department",className:"selectAntdCustom",onChange:value=>form.setFieldsValue({departmentId:value}),showSearch:true,onSearch:value=>setSearchTermDepartment(value),optionFilterProp:"label",options:departments===null||departments===void 0?void 0:departments.map(item=>{return{label:item.title,value:item.id};}),notFoundContent:/*#__PURE__*/(0,jsx_runtime.jsx)(empty/* default */.A,{image:"https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg",imageStyle:{height:100},description:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:"No data found, Please search for the department"})})})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:'message',rules:[{required:true,message:"Please provide message"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{asterisk:true,size:"w100",label:"Message",type:"textArea",autoSize:{minRows:2},placeHolder:"Enter message"})})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* ImageUploader */.GA,{name:"file",required:false})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"d-flex justify-end",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{size:"normal",fontSize:"sm",onClick:onCancel,type:"plain",children:"Cancel"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{type:"primary",size:"normal",fontSize:"sm",htmlType:"submit",loading:recordData===null||recordData===void 0?void 0:recordData.buttonLoading,children:"Add Announcement"})]})]})});};
// EXTERNAL MODULE: ./node_modules/antd/es/avatar/index.js + 3 modules
var avatar = __webpack_require__(75871);
// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js
var tooltip = __webpack_require__(81541);
// EXTERNAL MODULE: ./node_modules/antd/es/table/index.js + 96 modules
var table = __webpack_require__(41821);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/UserOutlined.js + 1 modules
var UserOutlined = __webpack_require__(79378);
// EXTERNAL MODULE: ./src/Components/Atoms/Headings/index.tsx
var Headings = __webpack_require__(35751);
// EXTERNAL MODULE: ./src/helpers/dateHandler.ts
var dateHandler = __webpack_require__(98933);
// EXTERNAL MODULE: ./src/Modules/Biometrics/index.ts
var Biometrics = __webpack_require__(64573);
// EXTERNAL MODULE: ./src/helpers/constants.ts
var constants = __webpack_require__(65944);
;// ./src/Components/Organisms/Dashboard/Notifications/table-columns.tsx
function TableComponent(props){const{tableData,tableLoading,onEditIconClick,reloadTableData,meta,filters}=props;const{userPermissions}=(0,es/* useSelector */.d4)(state=>state.usersReducer);const permissions=userPermissions;const module=new Biometrics/* BiometricModule */.H();const columns=[{title:"S.No",dataIndex:"index",key:"index",render:(text,record,index)=>index+1,width:"5%"},{title:"Message",dataIndex:"message",key:"message",render:text=>/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",weight:"bold",children:text})},{title:"Added date",dataIndex:"addedDate",key:"addedDate",render:text=>/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",weight:"bold",children:(0,dateHandler/* convertDate */.ic)(text,"dd M,yy")})})},{title:"Type",dataIndex:"type",key:"type",render:text=>/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",weight:"bold",children:(0,common/* capitalize */.ZH)(text)})},{title:"Subscribers",dataIndex:"subscribers",key:"subscribers",render:(text,record)=>{var _record$Subscribers,_record$Department;return record.type==="user"?/*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default.Group */.A.Group,{maxCount:5,children:record===null||record===void 0?void 0:(_record$Subscribers=record.Subscribers)===null||_record$Subscribers===void 0?void 0:_record$Subscribers.map(member=>{var _member$User,_member$User2,_member$User3,_member$User4;return/*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.A,{title:"".concat(member===null||member===void 0?void 0:(_member$User2=member.User)===null||_member$User2===void 0?void 0:_member$User2.firstName," ").concat(member===null||member===void 0?void 0:(_member$User3=member.User)===null||_member$User3===void 0?void 0:_member$User3.lastName),children:/*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default */.A,{size:25,style:{border:'0.5px solid var(--color-light-200)'},src:constants/* RESOURCE_BASE_URL */.to+(member===null||member===void 0?void 0:(_member$User4=member.User)===null||_member$User4===void 0?void 0:_member$User4.profile),icon:/*#__PURE__*/(0,jsx_runtime.jsx)(UserOutlined/* default */.A,{})})},member===null||member===void 0?void 0:(_member$User=member.User)===null||_member$User===void 0?void 0:_member$User.uuid);})}):record.type==="department"?/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",weight:"bold",children:(record===null||record===void 0?void 0:(_record$Department=record.Department)===null||_record$Department===void 0?void 0:_record$Department.title)+" Department"}):/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",weight:"bold",children:"All Employees"});}}];return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module/* default */.A.antdTableWrapper,children:/*#__PURE__*/(0,jsx_runtime.jsx)(table/* default */.A,{sticky:true,dataSource:tableData,columns:columns,pagination:{current:meta===null||meta===void 0?void 0:meta.page,total:meta===null||meta===void 0?void 0:meta.total,hideOnSinglePage:true,pageSize:meta===null||meta===void 0?void 0:meta.perPage,onChange(page,pageSize){reloadTableData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},filters),{},{page:page,perPage:pageSize}));}},scroll:{x:991},loading:tableLoading,rowKey:record=>"biometric-type-".concat(record.id)})});}
// EXTERNAL MODULE: ./src/Components/Atoms/ErrorCodes/index.tsx + 1 modules
var ErrorCodes = __webpack_require__(36250);
// EXTERNAL MODULE: ./src/Components/Templates/Layout/index.tsx + 28 modules
var Layout = __webpack_require__(81168);
// EXTERNAL MODULE: ./src/hooks/index.ts + 5 modules
var hooks = __webpack_require__(91970);
// EXTERNAL MODULE: ./src/Modules/Notification/permissions.ts
var Notification_permissions = __webpack_require__(38569);
;// ./src/Components/Organisms/Dashboard/Notifications/index.tsx
const breadCrumbsData=[{text:"Home",isLink:true,path:"/"},{isLink:false,text:"Notifications"}];function Notifications(){// available permissions for this module
const permissionSlug=(0,common/* getPermissionSlugs */.AH)(Notification_permissions/* NotificationPermissionsEnum */.z);const{userPermissions}=(0,es/* useSelector */.d4)(state=>state.usersReducer);const permissions=userPermissions;const{readNotification,createNotification}=permissions;const[currentEditType,setCurrentEditType]=(0,react.useState)({editType:"new",recordId:0,openModal:false});const[filters,setFilters]=(0,react.useState)({page:1,perPage:10});const module=new Notification/* NotificationModule */.C();const{data,onRefresh,setData,loading,meta}=(0,hooks/* useFetchData */.Gs)({method:module.getAnnouncements,initialQuery:(0,objectSpread2/* default */.A)({},filters)});const onCancelClick=()=>{if(createNotification===false){message/* default */.Ay.error("You don't have permission to create new record");return;}setCurrentEditType((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},currentEditType),{},{openModal:!currentEditType.openModal,editType:"new"}));};return/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.A,{permissionSlug:permissionSlug,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* PageHeader */.zY,{heading:"Announcements",buttonText:"Add Announcement",onButtonClick:onCancelClick,breadCrumbData:breadCrumbsData,showAdd:createNotification===true?true:false}),readNotification===true&&/*#__PURE__*/(0,jsx_runtime.jsx)(TableComponent,{tableData:data,tableLoading:loading,onEditIconClick:()=>{},reloadTableData:onRefresh,meta:meta,filters:filters}),readNotification===false&&/*#__PURE__*/(0,jsx_runtime.jsx)(ErrorCodes/* ErrorCode403 */.$t,{mainMessage:"You don't have permission to view this data"}),currentEditType.openModal&&/*#__PURE__*/(0,jsx_runtime.jsx)(NotificationModal,{record:currentEditType.recordId,type:currentEditType.editType,reloadTableData:onRefresh,onCancel:onCancelClick,openModal:currentEditType.openModal,permissions:permissions})]});}/* harmony default export */ const Dashboard_Notifications = (Notifications);

/***/ }),

/***/ 64573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ BiometricModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
class BiometricModule{constructor(){this.endPoint="biometrics";/** Get all Biometric records
     * @param query - query params
     */this.getAllRecords=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint,{params:query});};/**Get Biometric record by id
     * @param id - Biometric id
     */this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/").concat(id));};/**Find published Biometric records
     * @param query - query params
     */this.findPublished=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/published"),{params:query});};/**Delete Biometric record
    * @param id - Biometric id
    */this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete("".concat(this.endPoint,"/").concat(id));};/**Create new Biometric record
     * @param data - Biometric data
     */this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(this.endPoint,data);};/**Update Biometric record
    * @param data - Biometric data
    * @param id - Biometric id
    */this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/").concat(id),data);};}}

/***/ }),

/***/ 98924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ DepartmentModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
class DepartmentModule{constructor(){this.endPoint="department";this.getAllRecords=queryData=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint,{params:queryData});};this.getAllPublishedRecords=queryData=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint+"/find-published",{params:queryData});};this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint+"/"+id);};this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete(this.endPoint+"/"+id);};this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(this.endPoint,data);};this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch(this.endPoint+"/"+id,data);};}}

/***/ })

}]);