"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[7090],{

/***/ 87090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RolePermissions)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(42074);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 1 modules
var message = __webpack_require__(92759);
// EXTERNAL MODULE: ./node_modules/antd/es/skeleton/index.js + 11 modules
var skeleton = __webpack_require__(46005);
// EXTERNAL MODULE: ./src/Components/Atoms/Input/index.tsx + 2 modules
var Input = __webpack_require__(58516);
;// ./src/Components/Organisms/Dashboard/RolePermissions/styles.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"rolePermissionAsideContainer":"styles_rolePermissionAsideContainer__0saXY","active":"styles_active__IShDa","sideBarHeading":"styles_sideBarHeading__f8g0S","adminNavPanelsWrap":"styles_adminNavPanelsWrap__Y16iZ","textWithIcon":"styles_textWithIcon__l2EKj","textWithIcon__rev":"styles_textWithIcon__rev__8CVHQ","collapse":"styles_collapse__HhRYf","collapse__normal":"styles_collapse__normal__2Q5mp","divider":"styles_divider__puZj4","translated":"styles_translated__LbvGi","animateTranslation":"styles_animateTranslation__4kcDw","__translate":"styles___translate__IQllm","negAnimateTranslation":"styles_negAnimateTranslation__JiFJY","__negTranslate":"styles___negTranslate__tZh2-","header":"styles_header__IL2hr","content":"styles_content__ooBUi","contentHeader":"styles_contentHeader__3BwZo","content__layout":"styles_content__layout__UXrnj","content__layout__header":"styles_content__layout__header__k+-3C","content__layout__content":"styles_content__layout__content__v1Dvs","content__layout__footer":"styles_content__layout__footer__oLNju","content__layout__footer__button":"styles_content__layout__footer__button__1H2Aj"});
// EXTERNAL MODULE: ./src/Components/Atoms/Headings/index.tsx
var Headings = __webpack_require__(35751);
// EXTERNAL MODULE: ./src/helpers/useDebounce.ts
var useDebounce = __webpack_require__(28173);
// EXTERNAL MODULE: ./src/helpers/constants.ts
var constants = __webpack_require__(65944);
// EXTERNAL MODULE: ./src/Modules/SystemModules/index.ts
var SystemModules = __webpack_require__(40652);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/Dashboard/RolePermissions/aside.tsx
const RolePermissionsAside=_ref=>{let{moduleId,setModuleId}=_ref;const[searchTerm,setSearchTerm]=(0,react.useState)("");const debouncedSearchTerm=(0,useDebounce/* useDebounce */.d)(searchTerm,500);const module=new SystemModules/* SystemModulesModule */.d();const[navItems,setnavItems]=(0,react.useState)({loading:false,data:[]});const[moduleData,setModuleData]=(0,react.useState)({data:[]});const getTextWithIcon=item=>/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{className:"".concat(styles_module.textWithIcon," ").concat((item===null||item===void 0?void 0:item.id)===moduleId?styles_module.active:""),onClick:()=>setModuleId(item.id?item.id:0),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{}),item.icon?/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:"".concat(constants/* RESOURCE_BASE_URL */.to).concat(item.icon),alt:"",width:15}):null,/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{type:"span",size:"sm",color:"dark-main",children:item.name})]},item.name);const onSearch=(0,react.useCallback)(e=>{setSearchTerm(e.target.value);},[]);(0,react.useEffect)(()=>{setnavItems((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},navItems),{},{loading:true}));module.getAllRecords().then(res=>{if(res.data&&res.data.data){setnavItems((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},navItems),{},{data:res.data.data,loading:false}));setModuleData({data:res.data.data});}}).catch(err=>{setnavItems((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},navItems),{},{loading:false}));message/* default */.Ay.error("Something went wrong");});},[]);// Search functionality
(0,react.useEffect)(()=>{if(debouncedSearchTerm){const filteredData=moduleData.data.filter(item=>{return item.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase());});setnavItems((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},navItems),{},{data:filteredData}));}else{setnavItems((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},navItems),{},{data:moduleData.data}));}},[debouncedSearchTerm]);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.rolePermissionAsideContainer,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Input/* default */.A,{size:"w100",label:"",placeHolder:"Search",icon:/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:"/images/searchIcon.svg",alt:"Search Icon"}),onChange:onSearch}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.adminNavPanelsWrap+" "+styles_module.negAnimateTranslation,children:navItems.loading?/*#__PURE__*/(0,jsx_runtime.jsx)(skeleton/* default */.A,{paragraph:{rows:18}}):navItems.data.map(item=>getTextWithIcon(item))}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.divider})]});};
// EXTERNAL MODULE: ./src/Components/Atoms/index.tsx + 12 modules
var Atoms = __webpack_require__(9394);
// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 18 modules
var es_form = __webpack_require__(10678);
// EXTERNAL MODULE: ./node_modules/antd/es/empty/index.js + 2 modules
var empty = __webpack_require__(90247);
// EXTERNAL MODULE: ./node_modules/antd/es/checkbox/index.js + 2 modules
var es_checkbox = __webpack_require__(52765);
// EXTERNAL MODULE: ./node_modules/antd/es/select/index.js + 30 modules
var es_select = __webpack_require__(97554);
// EXTERNAL MODULE: ./src/Modules/Roles/index.ts
var Roles = __webpack_require__(32027);
// EXTERNAL MODULE: ./src/Components/Organisms/Skeletons/index.tsx
var Skeletons = __webpack_require__(70619);
// EXTERNAL MODULE: ./src/Modules/Permissions/index.ts
var Permissions = __webpack_require__(76506);
// EXTERNAL MODULE: ./src/Components/Icons/index.tsx + 58 modules
var Icons = __webpack_require__(63668);
// EXTERNAL MODULE: ./src/Components/Templates/Layout/index.tsx + 28 modules
var Layout = __webpack_require__(81168);
;// ./src/Components/Organisms/Dashboard/RolePermissions/index.tsx
const AgentRolePermissions=()=>{var _permission$data3,_permission$data4,_permission$data5;const[moduleId,setModuleId]=(0,react.useState)(0);const[checkAll,setCheckAll]=(0,react.useState)(false);const[permission,setPermission]=(0,react.useState)({loading:false});const[searchParams,setSearchParams]=(0,dist/* useSearchParams */.ok)();const roleId=searchParams.get('roleId');const __moduleId=searchParams.get('moduleId');const[roles,setRoles]=(0,react.useState)({data:[],loading:false,selectedId:0});const rolesModule=(0,react.useMemo)(()=>new Roles/* RolesModule */.C(),[]);const systemModule=(0,react.useMemo)(()=>new SystemModules/* SystemModulesModule */.d(),[]);const permissionsModule=(0,react.useMemo)(()=>new Permissions/* PermissionsModule */.h(),[]);const[form]=es_form/* default */.A.useForm();const[privilegesData,setPrivilegesData]=(0,react.useState)({initialData:[],data:{}});const handleSelectAllChange=e=>{var _permission$data;let newData={};(_permission$data=permission.data)===null||_permission$data===void 0?void 0:_permission$data.Permissions.forEach(ele=>{newData[ele.action]=e.target.checked;});setPrivilegesData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},privilegesData),{},{data:newData}));setCheckAll(e.target.checked);form.setFieldsValue(newData);};// update the query params to reflect the selected role and module id
const updateURL=(roleId,moduleId)=>{setSearchParams((0,dist/* createSearchParams */.PI)({roleId:String(roleId),moduleId:String(moduleId)}));};const handleRoleChange=()=>{if(moduleId!==0&&roles.selectedId&&roles.selectedId!==0){permissionsModule.getRolePermissionsByModuleId(roles.selectedId,moduleId).then(res=>{var _res$data,_res$data$data;let defaultPermissionSelected={};res===null||res===void 0?void 0:(_res$data=res.data)===null||_res$data===void 0?void 0:(_res$data$data=_res$data.data)===null||_res$data$data===void 0?void 0:_res$data$data.forEach((item,index)=>defaultPermissionSelected=(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},defaultPermissionSelected),{},{[item.permission.action]:true}));setPrivilegesData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},privilegesData),{},{initialData:res.data.data,data:defaultPermissionSelected}));form.setFieldsValue(defaultPermissionSelected);}).catch(err=>{message/* default */.Ay.error(err.message);});}};const handlePermissionChange=(e,name)=>{form.setFieldsValue({[name]:e.target.checked});setPrivilegesData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},privilegesData),{},{data:(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},privilegesData.data),{},{[name]:e.target.checked})}));if(!e.target.checked){setCheckAll(false);}};const onFinish=()=>{var _permission$data2;if(roles.selectedId===0){message/* default */.Ay.error("Please choose a role");return false;}let permissionIds=[];(_permission$data2=permission.data)===null||_permission$data2===void 0?void 0:_permission$data2.Permissions.forEach(ele=>{if(form.getFieldValue(ele.action)===true){permissionIds.push(ele.id);}});if(permissionIds.length>0){permissionsModule.grantPrivilegesToRole({roleId:roles.selectedId,permissionIds:permissionIds}).then(res=>{var _res$data2;message/* default */.Ay.success((_res$data2=res.data)===null||_res$data2===void 0?void 0:_res$data2.message);}).catch(err=>{message/* default */.Ay.error(err.data.message);});}let deletedIds=[];privilegesData.initialData.forEach(ele=>{if(!permissionIds.includes(ele.permission.id)){deletedIds.push(ele.permission.id);}});if(deletedIds.length>0){permissionsModule.revokePrivilegesFromRole({roleId:roles.selectedId,permissionIds:deletedIds}).then(res=>{var _res$data3;message/* default */.Ay.success((_res$data3=res.data)===null||_res$data3===void 0?void 0:_res$data3.message);}).catch(err=>{message/* default */.Ay.error(err.data.message);});}};(0,react.useEffect)(()=>{if(moduleId&&moduleId!==0&&roles.selectedId&&roles.selectedId!==0){if(roles.selectedId!==Number(roleId)||moduleId!==Number(__moduleId)){updateURL(roles.selectedId,moduleId);}}handleRoleChange();},[moduleId,roles.selectedId]);(0,react.useEffect)(()=>{if(__moduleId){setModuleId(Number(__moduleId));}},[__moduleId]);(0,react.useEffect)(()=>{setRoles((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},roles),{},{selectedId:Number(roleId),loading:true}));rolesModule.getAllRecords().then(res=>{setRoles((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},roles),{},{data:res.data.data,selectedId:Number(roleId),loading:false}));});},[rolesModule]);(0,react.useEffect)(()=>{if(moduleId!==0){setPermission((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},permission),{},{loading:true}));systemModule.getRecordById(moduleId).then(res=>{setPermission({data:res.data.data,loading:false});});}},[moduleId,systemModule]);const getRoleOptions=()=>{var _roles$data;let optionsData=[];roles===null||roles===void 0?void 0:(_roles$data=roles.data)===null||_roles$data===void 0?void 0:_roles$data.map(role=>{if((role===null||role===void 0?void 0:role.visibility)==="organization"){optionsData.push({label:role===null||role===void 0?void 0:role.title,value:role===null||role===void 0?void 0:role.id});}});return optionsData;};return/*#__PURE__*/(0,jsx_runtime.jsx)(Layout/* default */.A,{className:"pa-0",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"d-flex overflow-hidden",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(RolePermissionsAside,{setModuleId:setModuleId,moduleId:moduleId})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"d-flex flex-column w-100",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.header+" d-flex py-4",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"my-auto color-dark-main",children:"You are changing permission of"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"ml-3",children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.A,{onChange:value=>setRoles((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},roles),{},{selectedId:value})),placeholder:"Choose role",allowClear:true,style:{width:200},className:"selectAntdCustom",loading:roles.loading,options:getRoleOptions(),defaultValue:Number(roleId)&&Number(roleId)!==0?Number(roleId):null})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"overflow-auto",children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.content,children:permission.loading?/*#__PURE__*/(0,jsx_runtime.jsx)(Skeletons/* default */.A,{items:16}):moduleId===0||!moduleId?/*#__PURE__*/(0,jsx_runtime.jsx)(empty/* default */.A,{image:"https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg",imageStyle:{height:200},description:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:"Please select a module from the sidebar"})}):/*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.A,{onFinish:onFinish,form:form,className:"w-100",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.contentHeader,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Icons/* BackIcon */.Z3,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{size:"lg",color:"dark-main",weight:"semi",children:"Permissions"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.content__layout,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.content__layout__header,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{size:"md",color:"dark-main",weight:"semi",children:(_permission$data3=permission.data)===null||_permission$data3===void 0?void 0:_permission$data3.name}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{size:"xs",color:"dark-sub",className:"pt-1",children:(_permission$data4=permission.data)===null||_permission$data4===void 0?void 0:_permission$data4.description})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_checkbox/* default */.A,{onChange:handleSelectAllChange,checked:checkAll,className:"scaledCheckbox font-size-sm user-select-none",children:"Select\xA0All"})]}),(_permission$data5=permission.data)===null||_permission$data5===void 0?void 0:_permission$data5.Permissions.map(ele=>{return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"".concat(styles_module.content__layout__header," ").concat(styles_module.content__layout__content),children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{size:"sm",color:"dark-main",weight:"semi",children:ele===null||ele===void 0?void 0:ele.name}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{size:"xs",color:"dark-sub",className:"pt-1",children:ele===null||ele===void 0?void 0:ele.description})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:ele===null||ele===void 0?void 0:ele.action,children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_checkbox/* default */.A,{className:"my-auto scaledCheckbox",onChange:e=>handlePermissionChange(e,ele.action),defaultChecked:privilegesData.data[ele.action],checked:privilegesData.data[ele.action]})})]},"permissions___"+ele.id);})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.content__layout__footer,children:/*#__PURE__*/(0,jsx_runtime.jsx)("button",{type:"submit",className:styles_module.content__layout__footer__button,children:"Save"})})]})})})]})]})});};/* harmony default export */ const RolePermissions = (AgentRolePermissions);

/***/ }),

/***/ 76506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ PermissionsModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
/* harmony import */ var _Common_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21073);
class PermissionsModule{constructor(){this.endPoint="permissions";this.getAllRecords=()=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint);};this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/").concat(id));};this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete("".concat(this.endPoint,"/").concat(id));};this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(this.endPoint+"/",data,{headers:_Common_config__WEBPACK_IMPORTED_MODULE_1__/* .FormDataHeader */ .Y});};this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/").concat(id),data,{headers:_Common_config__WEBPACK_IMPORTED_MODULE_1__/* .FormDataHeader */ .Y});};this.getRolePermissions=roleId=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/getRolePermissions/").concat(roleId));};this.getRolePermissionsByModuleId=(roleId,moduleId)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/getRolePermissions/").concat(roleId,"/").concat(moduleId));};this.grantPrivilegesToRole=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post("".concat(this.endPoint,"/grantPrivilegesToRole"),data);};this.revokePrivilegesFromRole=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post("".concat(this.endPoint,"/revokePrivilegesFromRole"),data);};}}

/***/ }),

/***/ 32027:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ RolesModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
class RolesModule{constructor(){this.endPoint="role";this.getAllRecords=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint,{params:query});};this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/").concat(id,"?all=true"));};this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete("".concat(this.endPoint,"/").concat(id));};this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(this.endPoint+"/",data);};this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/").concat(id),data);};/** Add Elements to Role
 * @param {number} id - The id of the Role
 * @param {number[]} data.elementIds - The ids of the Elements
 */this.addElements=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post("".concat(this.endPoint,"/addDashboardElement/").concat(id),data);};/**
	 * Remove Elements from Role
	 * @param {number} id - The id of the Role
	 * @param {number[]} data.elementIds - The ids of the Elements
	 */this.removeElements=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post("".concat(this.endPoint,"/removeDashboardElement/").concat(id),data);};}}

/***/ }),

/***/ 40652:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ SystemModulesModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
/* harmony import */ var _Common_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21073);
class SystemModulesModule{constructor(){this.endPoint="system-modules";this.getAllRecords=()=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint);};this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/").concat(id));};this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete("".concat(this.endPoint,"/").concat(id));};this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(this.endPoint+"/",data,{headers:_Common_config__WEBPACK_IMPORTED_MODULE_1__/* .FormDataHeader */ .Y});};this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/").concat(id),data,{headers:_Common_config__WEBPACK_IMPORTED_MODULE_1__/* .FormDataHeader */ .Y});};}}

/***/ })

}]);