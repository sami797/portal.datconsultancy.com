"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[4226],{

/***/ 24226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ViewRolePermissions)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(42074);
;// ./src/Components/Organisms/SiteSettings/ViewRolePermissions/styles.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"rolePermissionAsideContainer":"styles_rolePermissionAsideContainer__nbrxy","active":"styles_active__7AWwD","sideBarHeading":"styles_sideBarHeading__A8fAm","adminNavPanelsWrap":"styles_adminNavPanelsWrap__LtY8m","textWithIcon":"styles_textWithIcon__lOUfa","textWithIcon__rev":"styles_textWithIcon__rev__RBW6v","collapse":"styles_collapse__dDtne","collapse__normal":"styles_collapse__normal__1IoJD","divider":"styles_divider__a3b2z","translated":"styles_translated__kbLEe","animateTranslation":"styles_animateTranslation__N6Kqa","__translate":"styles___translate__vGd+a","negAnimateTranslation":"styles_negAnimateTranslation__aT7sq","__negTranslate":"styles___negTranslate__pcaRV","header":"styles_header__ZFCGH","content":"styles_content__oHkIT","contentHeader":"styles_contentHeader__tv8cu","content__layout":"styles_content__layout__bho2z","content__layout__header":"styles_content__layout__header__Nuqzo","content__layout__content":"styles_content__layout__content__1S2my","content__layout__footer":"styles_content__layout__footer__0M7l0","content__layout__footer__button":"styles_content__layout__footer__button__buBll","actions":"styles_actions__EfWob","bg__red":"styles_bg__red__1spF3","form":"styles_form__r8Kev","footer":"styles_footer__soSsw","opacity_6":"styles_opacity_6__v3V9F"});
// EXTERNAL MODULE: ./src/Components/Atoms/index.tsx + 12 modules
var Atoms = __webpack_require__(9394);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 1 modules
var message = __webpack_require__(92759);
// EXTERNAL MODULE: ./node_modules/antd/es/empty/index.js + 2 modules
var empty = __webpack_require__(90247);
// EXTERNAL MODULE: ./node_modules/antd/es/select/index.js + 30 modules
var es_select = __webpack_require__(97554);
// EXTERNAL MODULE: ./src/Modules/Roles/index.ts
var Roles = __webpack_require__(32027);
// EXTERNAL MODULE: ./src/Modules/SystemModules/index.ts
var SystemModules = __webpack_require__(40652);
// EXTERNAL MODULE: ./src/Components/Organisms/Skeletons/index.tsx
var Skeletons = __webpack_require__(70619);
// EXTERNAL MODULE: ./src/Modules/Permissions/index.ts
var Permissions = __webpack_require__(76506);
// EXTERNAL MODULE: ./node_modules/antd/es/image/index.js + 13 modules
var es_image = __webpack_require__(9206);
// EXTERNAL MODULE: ./node_modules/antd/es/table/index.js + 96 modules
var table = __webpack_require__(41821);
// EXTERNAL MODULE: ./src/helpers/constants.ts
var constants = __webpack_require__(65944);
// EXTERNAL MODULE: ./src/Components/Icons/index.tsx + 58 modules
var Icons = __webpack_require__(63668);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/SiteSettings/ViewRolePermissions/table-columns.tsx
function TableComponent(props){const{tableData,tableLoading,rolePermissions}=props;const[searchParams]=(0,dist/* useSearchParams */.ok)();const roleId=searchParams.get('roleId');const columns=[{title:"S.No",dataIndex:"index",key:"index",render:(text,record,index)=>index+1,width:"60px"},{title:"Name",dataIndex:"name",key:"name",render:(text,record)=>/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"d-flex",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"w-50",children:record.icon?/*#__PURE__*/(0,jsx_runtime.jsx)(es_image/* default */.A,{width:20,height:20,src:"".concat(constants/* RESOURCE_BASE_URL */.to).concat(record.icon),preview:false,rootClassName:"object-fit-contain"}):/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",weight:"bold",children:text}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"color-light-800 font-size-xs",children:record.description})]})]})},{title:"Permissions",dataIndex:"Permissions",key:"permissions",render:Permissions=>/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:Permissions===null||Permissions===void 0?void 0:Permissions.map(ele=>/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"d-flex",children:rolePermissions.indexOf(ele.action)!==-1?/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"pa-0 ma-0 font-size-sm color-green-yp",children:ele.name}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"ml-2",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Icons/* CheckMarkIcon */.JN,{className:"color-green-yp"})})]}):/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"pa-0 ma-0 font-size-sm color-red-yp ".concat(styles_module.opacity_6),children:ele.name}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"ml-2 ".concat(styles_module.opacity_6),children:/*#__PURE__*/(0,jsx_runtime.jsx)(Icons/* XMarkIcon */.fK,{className:"color-red-yp"})})]})}))})},{title:"Action",dataIndex:"action",key:"action",render:(action,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(dist/* Link */.N_,{to:"/siteSettings/roles/permissions?roleId=".concat(Number(roleId),"&moduleId=").concat(record.id),className:"d-flex",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Icons/* PermissionSettingsIcon */.IW,{className:"my-auto"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-sub",size:"sm",className:"ml-2",children:"Manage Permissions"})]})})}];return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(table/* default */.A,{sticky:true,dataSource:tableData,columns:columns,pagination:false,scroll:{x:991},loading:tableLoading,rowKey:record=>"roles-permission-view-".concat(record.id)})});}
// EXTERNAL MODULE: ./src/Components/Templates/SiteSettings/index.tsx
var SiteSettings = __webpack_require__(16181);
;// ./src/Components/Organisms/SiteSettings/ViewRolePermissions/index.tsx
const breadCrumbsData=[{text:"Home",isLink:true,path:"/"},{isLink:true,text:"Roles",path:"/siteSettings/roles"},{isLink:false,text:"Role Permissions"}];const AgentRolePermissions=()=>{const[moduleId,setModuleId]=(0,react.useState)(0);const[permission,setPermission]=(0,react.useState)({loading:false});const[searchParams,setSearchParams]=(0,dist/* useSearchParams */.ok)();const roleId=searchParams.get('roleId');const __moduleId=searchParams.get('moduleId');// update the query params to reflect the selected role
const updateURL=roleId=>{setSearchParams((0,dist/* createSearchParams */.PI)({roleId:String(roleId)}));};const rolesModule=(0,react.useMemo)(()=>new Roles/* RolesModule */.C(),[]);const systemModule=(0,react.useMemo)(()=>new SystemModules/* SystemModulesModule */.d(),[]);const permissionsModule=(0,react.useMemo)(()=>new Permissions/* PermissionsModule */.h(),[]);const[systemModulesData,setSystemModulesData]=(0,react.useState)({data:[],loading:false});const[roles,setRoles]=(0,react.useState)({data:[],loading:false,selectedId:0});const[privilegesData,setPrivilegesData]=(0,react.useState)([]);const[selectedRoleData,setSelectedRoleData]=(0,react.useState)();const getSystemModules=(0,react.useCallback)(()=>{systemModule.getAllRecords().then(res=>{var _res$data;if(res.data&&(_res$data=res.data)!==null&&_res$data!==void 0&&_res$data.data){setSystemModulesData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},res.data),{},{loading:false}));}});},[roleId]);(0,react.useEffect)(()=>{getSystemModules();},[]);const handleRoleChange=()=>{if(roles.selectedId&&roles.selectedId!==0){permissionsModule.getRolePermissions(roles.selectedId).then(res=>{var _res$data2,_res$data2$data;// loop through the data and get the actions from the permissions array
let actions=(_res$data2=res.data)===null||_res$data2===void 0?void 0:(_res$data2$data=_res$data2.data)===null||_res$data2$data===void 0?void 0:_res$data2$data.map(ele=>{var _ele$Permission;return(_ele$Permission=ele.Permission)===null||_ele$Permission===void 0?void 0:_ele$Permission.action;});setPrivilegesData(actions);updateURL(roles.selectedId);}).catch(err=>{message/* default */.Ay.error(err.message);});}};(0,react.useEffect)(()=>{if(moduleId&&moduleId!==0&&roles.selectedId&&roles.selectedId!==0){updateURL(roles.selectedId);}handleRoleChange();},[moduleId,roles.selectedId]);(0,react.useEffect)(()=>{if(__moduleId){setModuleId(Number(__moduleId));}},[__moduleId]);(0,react.useEffect)(()=>{setRoles((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},roles),{},{selectedId:Number(roleId),loading:true}));rolesModule.getAllRecords().then(res=>{setRoles((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},roles),{},{data:res.data.data,selectedId:Number(roleId),loading:false}));});},[rolesModule]);// find the selected role data using the roleId in the url
const findRoleData=(0,react.useCallback)(()=>{if(Number(roleId)!==0){const roleData=roles.data.find(item=>item.id===Number(roleId));setSelectedRoleData(roleData);}},[roleId,roles.data]);(0,react.useEffect)(()=>{findRoleData();},[findRoleData]);return/*#__PURE__*/(0,jsx_runtime.jsxs)(SiteSettings["default"],{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* PageHeader */.zY,{heading:"Role Permissions",breadCrumbData:breadCrumbsData}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"d-flex overflow-hidden",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"d-flex flex-column w-100",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.header+" d-flex pb-4",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"my-auto color-dark-main",children:"You are viewing permission of"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"ml-3",children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.A,{onChange:value=>setRoles((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},roles),{},{selectedId:value})),placeholder:"Choose role",allowClear:true,style:{width:200},className:"selectAntdCustom",loading:roles.loading,options:roles.data.map(role=>{return{label:role.title,value:role.id};}),defaultValue:Number(roleId)&&Number(roleId)!==0?Number(roleId):null})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"overflow-auto",children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:permission.loading?/*#__PURE__*/(0,jsx_runtime.jsx)(Skeletons/* default */.A,{items:16}):!Number(roleId)||systemModulesData.data.length===0?/*#__PURE__*/(0,jsx_runtime.jsx)(empty/* default */.A,{image:"https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg",imageStyle:{height:200},description:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:"Please select a role to view the associated permissions"})}):/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(TableComponent,{tableData:systemModulesData.data,tableLoading:systemModulesData.loading,rolePermissions:privilegesData,roleData:selectedRoleData})})})})]})})]});};/* harmony default export */ const ViewRolePermissions = (AgentRolePermissions);

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