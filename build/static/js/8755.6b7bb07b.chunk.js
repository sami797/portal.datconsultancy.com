"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[8755],{

/***/ 78755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AreaUnits)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(98341);
// EXTERNAL MODULE: ./src/Redux/Reducers/AreaUnitReducer/action.ts
var action = __webpack_require__(57964);
// EXTERNAL MODULE: ./src/Components/Templates/SiteSettings/index.tsx
var SiteSettings = __webpack_require__(16181);
// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 18 modules
var es_form = __webpack_require__(10678);
// EXTERNAL MODULE: ./src/Components/Atoms/index.tsx + 12 modules
var Atoms = __webpack_require__(9394);
;// ./src/Components/Organisms/SiteSettings/AreaUnits/styles.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"actions":"styles_actions__WuWNP","bg__red":"styles_bg__red__tvJR6","form":"styles_form__kXx1y","addLanguagesWrap":"styles_addLanguagesWrap__geXds","addLanguages":"styles_addLanguages__p0xLr","footer":"styles_footer__6GrJu"});
// EXTERNAL MODULE: ./src/Components/Organisms/Skeletons/index.tsx
var Skeletons = __webpack_require__(70619);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/SiteSettings/AreaUnits/areaUnitsModal.tsx
const AreaUnitModal=props=>{const{openModal,onCancel,onFinish,buttonLoading,initialValues,type}=props;const dispatch=(0,es/* useDispatch */.wA)();const[form]=es_form/* default */.A.useForm();const{addAreaUnitData,singleAreaUnitData,editAreaUnitData}=(0,es/* useSelector */.d4)(state=>state.areaUnitReducer);const errorData=type==="new"?addAreaUnitData.errorData:editAreaUnitData.errorData;(0,react.useEffect)(()=>{if(type==="edit"){var _singleAreaUnitData$d;form.setFieldsValue((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},singleAreaUnitData.data),{},{isPublished:(_singleAreaUnitData$d=singleAreaUnitData.data)===null||_singleAreaUnitData$d===void 0?void 0:_singleAreaUnitData$d.isPublished}));}else{form.resetFields();}},[type,form,singleAreaUnitData]);(0,react.useEffect)(()=>{if(type==="edit"){dispatch((0,action/* getAreaUnitData */.as)(initialValues.id));}},[dispatch,initialValues.id,type]);return/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomModal */.jo,{visible:openModal,onCancel:onCancel,titleText:type==="edit"?"Edit Area Unit":"Add Area Unit",showFooter:false,children:singleAreaUnitData.loading?/*#__PURE__*/(0,jsx_runtime.jsx)(Skeletons/* default */.A,{items:4}):/*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.A,{className:styles_module.form,onFinish:onFinish,form:form,children:[errorData!==null&&errorData!==void 0&&errorData.statusCode?/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomErrorAlert */.WZ,{description:errorData===null||errorData===void 0?void 0:errorData.message,isClosable:true}):null,/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"name",rules:[{required:true,message:"Please add area unit name"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{size:"w100",label:"Name",asterisk:true,type:"text"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"symbol",rules:[{required:true,message:"Please add  a symbol"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{size:"w100",label:"Symbol",asterisk:true,type:"text"})})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"rate",rules:[{required:true,message:"Please add a rate"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{size:"w100",label:"Rate",asterisk:true,type:"text"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"isPublished",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomSelect */.Ae,{label:"Published",options:[{value:true,label:"Yes"},{value:false,label:"No"}]})})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.footer,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{size:"normal",fontSize:"sm",onClick:onCancel,type:"plain",children:"Cancel"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{type:"primary",size:"normal",fontSize:"sm",htmlType:"submit",loading:buttonLoading,children:"Submit"})]})]})});};
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 1 modules
var message = __webpack_require__(92759);
// EXTERNAL MODULE: ./node_modules/antd/es/popconfirm/index.js + 1 modules
var popconfirm = __webpack_require__(56231);
// EXTERNAL MODULE: ./node_modules/antd/es/switch/index.js + 1 modules
var es_switch = __webpack_require__(25933);
// EXTERNAL MODULE: ./node_modules/antd/es/table/index.js + 96 modules
var table = __webpack_require__(41821);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DeleteOutlined.js
var DeleteOutlined = __webpack_require__(78433);
// EXTERNAL MODULE: ./src/Components/Atoms/Headings/index.tsx
var Headings = __webpack_require__(35751);
;// ./src/Components/Organisms/SiteSettings/AreaUnits/tableColumns.tsx
const ActionComponent=props=>{const{record,openModal,permissions:{deleteAreaUnit:deletePermission,updateAreaUnit:updatePermission}}=props;const dispatch=(0,es/* useDispatch */.wA)();const onDelete=(0,react.useCallback)(id=>{if(deletePermission===false){message/* default */.Ay.error("You don't have permission to delete this record, please contact your admin.");return;}return dispatch((0,action/* deleteAreaUnit */.DF)(id,()=>dispatch((0,action/* getAreaUnitData */.as)())));},[dispatch]);const openEditModal=()=>{if(updatePermission===false){message/* default */.Ay.error("You don't have permission to edit this record, please contact your admin.");return;}openModal(record);};return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.actions,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{onClick:openEditModal,children:/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:"/images/editicon.svg",alt:""})}),/*#__PURE__*/(0,jsx_runtime.jsx)(popconfirm/* default */.A,{placement:"top",title:"Are you sure?",onConfirm:()=>onDelete(record.id),okText:"Yes",cancelText:"No",children:/*#__PURE__*/(0,jsx_runtime.jsx)(DeleteOutlined/* default */.A,{className:styles_module.bg__red})})]});};function TableComponent(props){const{userPermissions}=(0,es/* useSelector */.d4)(state=>state.usersReducer);const permissions=userPermissions;const{tableData,tableLoading,openModal}=props;const dispatch=(0,es/* useDispatch */.wA)();const{editAreaUnitData}=(0,es/* useSelector */.d4)(state=>state.areaUnitReducer);const onPublishChange=(checked,record)=>{if(permissions.updateAreaUnit===false){message/* default */.Ay.error("You don't have permission to edit this record, please contact your admin.");return;}dispatch((0,action/* editAreaUnitDataAction */.kh)({isPublished:checked?true:false},record,()=>{dispatch((0,action/* getAreaUnitData */.as)());}));};const columns=[{title:"S.No",dataIndex:"index",key:"index",render:(text,record,index)=>index+1,width:"5%"},{title:"Name",dataIndex:"name",key:"name",render:text=>/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",weight:"bold",children:text})},{title:"Symbol",dataIndex:"symbol",key:"symbol",render:text=>/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:text})},{title:"Rate",dataIndex:"rate",key:"rate",render:text=>/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:text})},{title:"Published",dataIndex:"isPublished",key:"isPublished",render:(checked,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)(es_switch/* default */.A,{checked:checked,onChange:_checked=>onPublishChange(_checked,record),loading:editAreaUnitData.loading})},{title:"Actions",dataIndex:"actions",key:"actions",render:(text,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)(ActionComponent,{record:record,openModal:openModal,permissions:permissions})}];return/*#__PURE__*/(0,jsx_runtime.jsx)(table/* default */.A,{sticky:true,dataSource:tableData,columns:columns,pagination:false,loading:tableLoading,rowKey:record=>"area-unit-".concat(record.id)});}
;// ./src/Modules/AreaUnits/permissions.ts
let AreaUnitsPermissionsEnum=/*#__PURE__*/function(AreaUnitsPermissionsEnum){AreaUnitsPermissionsEnum["CREATE"]="createAreaUnit";AreaUnitsPermissionsEnum["UPDATE"]="updateAreaUnit";AreaUnitsPermissionsEnum["DELETE"]="deleteAreaUnit";AreaUnitsPermissionsEnum["READ"]="readAreaUnit";return AreaUnitsPermissionsEnum;}({});
// EXTERNAL MODULE: ./src/Components/Atoms/ErrorCodes/index.tsx + 1 modules
var ErrorCodes = __webpack_require__(36250);
// EXTERNAL MODULE: ./src/helpers/common.ts
var common = __webpack_require__(88132);
;// ./src/Components/Organisms/SiteSettings/AreaUnits/index.tsx
const breadCrumbsData=[{text:"Home",isLink:true,path:"/"},{isLink:true,text:"Site Settings",path:"/siteSettings"},{isLink:false,text:"Area Units"}];function AreaUnitSettings(){// available permissions for this page
const permissionSlug=(0,common/* getPermissionSlugs */.AH)(AreaUnitsPermissionsEnum);const{userPermissions}=(0,es/* useSelector */.d4)(state=>state.usersReducer);const permissions=userPermissions;const{readAreaUnit,createAreaUnit,updateAreaUnit}=permissions;const dispatch=(0,es/* useDispatch */.wA)();const[openModal,setOpenModal]=(0,react.useState)(false);const[currentEditType,setcurrentEditType]=(0,react.useState)("new");/** default selected values for editing the data */const defaultEditData=(0,react.useMemo)(()=>({id:0,name:"",symbol:"",rate:0,isPublished:false,isDeleted:false}),[]);const[selectedAreaUnit,setSelectedAreaUnit]=(0,react.useState)(defaultEditData);const{areaUnitData,addAreaUnitData,editAreaUnitData}=(0,es/* useSelector */.d4)(state=>state.areaUnitReducer);(0,react.useEffect)(()=>{dispatch((0,action/* getAreaUnitData */.as)());},[dispatch]);const onCancelClick=(0,react.useCallback)(()=>{if(createAreaUnit===false){message/* default */.Ay.error("You don't have permission to create new record");return;}setcurrentEditType("new");setOpenModal(!openModal);setSelectedAreaUnit(defaultEditData);},[openModal,defaultEditData]);const onEditIconClick=(0,react.useCallback)(record=>{setSelectedAreaUnit(record);setcurrentEditType("edit");setOpenModal(!openModal);},[openModal]);const onFinish=(0,react.useCallback)(obj=>{const formData=obj;switch(currentEditType){case"edit":{if(updateAreaUnit===true){const data=(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},formData),{},{rate:parseFloat(formData.rate)});dispatch((0,action/* editAreaUnitDataAction */.kh)(data,selectedAreaUnit,()=>{dispatch((0,action/* getAreaUnitData */.as)());onCancelClick();}));}else{message/* default */.Ay.error("You don't have permission to update this record");}break;}case"new":{if(createAreaUnit===true){const data=(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},formData),{},{rate:parseFloat(formData.rate)});dispatch((0,action/* addAreaUnitDataAction */.he)(data,()=>{dispatch((0,action/* getAreaUnitData */.as)());onCancelClick();}));}else{message/* default */.Ay.error("You don't have permission to create new record");}break;}}},[currentEditType,dispatch,onCancelClick,selectedAreaUnit]);return/*#__PURE__*/(0,jsx_runtime.jsxs)(SiteSettings["default"],{permissionSlug:permissionSlug,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* PageHeader */.zY,{heading:"Area Units",buttonText:"Add New Area Unit",onButtonClick:onCancelClick,breadCrumbData:breadCrumbsData,showAdd:createAreaUnit===true?true:false}),readAreaUnit===true&&/*#__PURE__*/(0,jsx_runtime.jsx)(TableComponent,{tableData:areaUnitData.data,tableLoading:areaUnitData.loading,openModal:onEditIconClick}),readAreaUnit===false&&/*#__PURE__*/(0,jsx_runtime.jsx)(ErrorCodes/* ErrorCode403 */.$t,{mainMessage:"You don't have permission to view this data"}),/*#__PURE__*/(0,jsx_runtime.jsx)(AreaUnitModal,{initialValues:selectedAreaUnit,type:currentEditType,onFinish:onFinish,onCancel:onCancelClick,openModal:openModal,buttonLoading:addAreaUnitData.loading||editAreaUnitData.loading})]});}/* harmony default export */ const AreaUnits = (AreaUnitSettings);

/***/ }),

/***/ 57964:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DF: () => (/* binding */ deleteAreaUnit),
/* harmony export */   as: () => (/* binding */ getAreaUnitData),
/* harmony export */   he: () => (/* binding */ addAreaUnitDataAction),
/* harmony export */   kh: () => (/* binding */ editAreaUnitDataAction)
/* harmony export */ });
/* harmony import */ var C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89379);
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40541);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38266);
const getAreaUnitData=id=>async(dispatch,getState)=>{const{areaUnitData,singleAreaUnitData}=getState()["areaUnitReducer"];const currentData=id?singleAreaUnitData:areaUnitData;const CURRENT_TYPE=id?_types__WEBPACK_IMPORTED_MODULE_1__/* .GET_SINGLE_AREA_UNIT_DATA */ .Sg:_types__WEBPACK_IMPORTED_MODULE_1__/* .SET_AREA_UNIT_DATA */ .r9;const url=id?"area-unit/".concat(id):'area-unit';dispatch({type:CURRENT_TYPE,payload:(0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({},currentData),{},{loading:true})});try{await _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(url).then(res=>{var _res$data;dispatch({type:CURRENT_TYPE,payload:(0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({},currentData),{},{loading:false,data:res===null||res===void 0?void 0:(_res$data=res.data)===null||_res$data===void 0?void 0:_res$data.data})});}).catch(error=>{const errorData=(0,_helpers__WEBPACK_IMPORTED_MODULE_3__/* .errorHandler */ .r)(error);dispatch({type:CURRENT_TYPE,payload:(0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({},currentData),{},{loading:false,error:true,errorData})});});}catch(error){dispatch({type:CURRENT_TYPE,payload:(0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({},currentData),{},{loading:false,errorData:error})});}};const addAreaUnitDataAction=(data,callback)=>async(dispatch,getState)=>{const{addAreaUnitData}=getState()["areaUnitReducer"];dispatch({type:_types__WEBPACK_IMPORTED_MODULE_1__/* .ADD_AREA_UNIT_DATA */ .UJ,payload:(0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({},addAreaUnitData),{},{loading:true})});try{await _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post("area-unit",data).then(res=>{var _res$data2;dispatch({type:_types__WEBPACK_IMPORTED_MODULE_1__/* .ADD_AREA_UNIT_DATA */ .UJ,payload:(0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({},addAreaUnitData),{},{loading:false,data:res===null||res===void 0?void 0:(_res$data2=res.data)===null||_res$data2===void 0?void 0:_res$data2.data})});callback&&callback();}).catch(error=>{let errorData=(0,_helpers__WEBPACK_IMPORTED_MODULE_3__/* .errorHandler */ .r)(error);dispatch({type:_types__WEBPACK_IMPORTED_MODULE_1__/* .ADD_AREA_UNIT_DATA */ .UJ,payload:(0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({},addAreaUnitData),{},{loading:false,errorData})});setTimeout(()=>{dispatch({type:_types__WEBPACK_IMPORTED_MODULE_1__/* .ADD_AREA_UNIT_DATA */ .UJ,payload:(0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({},addAreaUnitData),{},{loading:false,errorData:{}})});},5000);});}catch(error){dispatch({type:_types__WEBPACK_IMPORTED_MODULE_1__/* .ADD_AREA_UNIT_DATA */ .UJ,payload:(0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({},addAreaUnitData),{},{loading:false,errorData:error})});}};const editAreaUnitDataAction=(data,item,callback)=>async(dispatch,getState)=>{const{editAreaUnitData}=getState()["areaUnitReducer"];dispatch({type:_types__WEBPACK_IMPORTED_MODULE_1__/* .EDIT_AREA_UNIT_DATA */ .Vt,payload:(0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({},editAreaUnitData),{},{loading:true})});try{await _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("area-unit/".concat(item===null||item===void 0?void 0:item.id),data).then(res=>{var _res$data3;dispatch({type:_types__WEBPACK_IMPORTED_MODULE_1__/* .EDIT_AREA_UNIT_DATA */ .Vt,payload:(0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({},editAreaUnitData),{},{loading:false,data:res===null||res===void 0?void 0:(_res$data3=res.data)===null||_res$data3===void 0?void 0:_res$data3.data})});callback&&callback();}).catch(error=>{const errorData=(0,_helpers__WEBPACK_IMPORTED_MODULE_3__/* .errorHandler */ .r)(error);dispatch({type:_types__WEBPACK_IMPORTED_MODULE_1__/* .EDIT_AREA_UNIT_DATA */ .Vt,payload:(0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({},editAreaUnitData),{},{loading:false,errorData})});});}catch(error){dispatch({type:_types__WEBPACK_IMPORTED_MODULE_1__/* .EDIT_AREA_UNIT_DATA */ .Vt,payload:(0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({},editAreaUnitData),{},{loading:false,errorData:error})});}};const deleteAreaUnit=(id,callback)=>async(dispatch,getState)=>{const{deleteAreaUnitData}=getState()["areaUnitReducer"];dispatch({type:_types__WEBPACK_IMPORTED_MODULE_1__/* .DELETE_AREA_UNIT_DATA */ .g_,payload:(0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({},deleteAreaUnitData),{},{loading:true})});try{await _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete("area-unit/".concat(id)).then(res=>{var _res$data4;dispatch({type:_types__WEBPACK_IMPORTED_MODULE_1__/* .DELETE_AREA_UNIT_DATA */ .g_,payload:(0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({},deleteAreaUnitData),{},{loading:false,data:res===null||res===void 0?void 0:(_res$data4=res.data)===null||_res$data4===void 0?void 0:_res$data4.data})});callback&&callback();}).catch(error=>{const errorData=(0,_helpers__WEBPACK_IMPORTED_MODULE_3__/* .errorHandler */ .r)(error);dispatch({type:_types__WEBPACK_IMPORTED_MODULE_1__/* .DELETE_AREA_UNIT_DATA */ .g_,payload:(0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({},deleteAreaUnitData),{},{loading:false,errorData})});});}catch(error){dispatch({type:_types__WEBPACK_IMPORTED_MODULE_1__/* .DELETE_AREA_UNIT_DATA */ .g_,payload:(0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({},deleteAreaUnitData),{},{loading:false,errorData:error})});}};

/***/ })

}]);