"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[5913],{

/***/ 55913:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Dashboard_Diary)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./src/Components/Atoms/index.tsx + 12 modules
var Atoms = __webpack_require__(9394);
// EXTERNAL MODULE: ./src/Components/Templates/Layout/index.tsx + 28 modules
var Layout = __webpack_require__(81168);
;// ./src/Components/Organisms/Dashboard/Diary/styles.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"container":"styles_container__atVIX","card":"styles_card__LNiZF","top":"styles_top__-r3rN","topLeft":"styles_topLeft__nBRxH","nameAndId":"styles_nameAndId__bSPyq","name":"styles_name__J0taN","userid":"styles_userid__-GViL","topRight":"styles_topRight__C6p2o","bottom":"styles_bottom__NNEBS","bottomTop":"styles_bottomTop__9BfWs","bottomBottom":"styles_bottomBottom__Qz5+9","taskBadge":"styles_taskBadge__oqrDX"});
// EXTERNAL MODULE: ./src/hooks/index.ts + 5 modules
var hooks = __webpack_require__(91970);
// EXTERNAL MODULE: ./src/Modules/Diary/permissions.ts
var permissions = __webpack_require__(35258);
// EXTERNAL MODULE: ./src/services/axiosInstance.ts
var axiosInstance = __webpack_require__(83365);
;// ./src/Modules/Diary/index.ts
class DiaryModule{constructor(){this.endPoint="diary";this.getAllRecords=queryData=>{return axiosInstance/* default */.A.get(this.endPoint,{params:queryData});};this.getRecordById=id=>{return axiosInstance/* default */.A.get("".concat(this.endPoint,"/").concat(id,"?all=true"));};this.deleteRecord=id=>{return axiosInstance/* default */.A.delete("".concat(this.endPoint,"/").concat(id));};this.createRecord=data=>{return axiosInstance/* default */.A.post(this.endPoint,data);};this.updateRecord=(data,id)=>{return axiosInstance/* default */.A.patch("".concat(this.endPoint,"/").concat(id),data);};}}
// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js
var tooltip = __webpack_require__(81541);
// EXTERNAL MODULE: ./node_modules/antd/es/avatar/index.js + 3 modules
var avatar = __webpack_require__(75871);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/UserOutlined.js + 1 modules
var UserOutlined = __webpack_require__(79378);
// EXTERNAL MODULE: ./src/helpers/constants.ts
var constants = __webpack_require__(65944);
// EXTERNAL MODULE: ./src/helpers/common.ts
var common = __webpack_require__(88132);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/Dashboard/Diary/index.tsx
const breadCrumbsData=[{text:"Home",isLink:true,path:"/"},{isLink:false,text:"Diary"}];const Diary=()=>{// Retrieve available permissions for the diary page
const permissionSlug=(0,common/* getPermissionSlugs */.AH)(permissions/* DiaryPermissionsEnum */.R);const module=(0,react.useMemo)(()=>new DiaryModule(),[]);const{data,onRefresh,setData,error}=(0,hooks/* useFetchData */.Gs)({method:module.getAllRecords});if(error){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:"Error loading diary records."});// Basic error handling
}return/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.A,{permissionSlug:permissionSlug,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* PageHeader */.zY,{heading:"Diary",breadCrumbData:breadCrumbsData,filters:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{})}),/*#__PURE__*/(0,jsx_runtime.jsx)("section",{className:styles_module.container,children:data===null||data===void 0?void 0:data.map(diary=>{var _diary$user,_diary$user2,_diary$user3,_diary$user4,_diary$user5,_diary$user6,_diary$taskType,_diary$taskType2;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.card,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.top,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.topLeft,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.A,{title:((_diary$user=diary.user)===null||_diary$user===void 0?void 0:_diary$user.firstName)+" "+((_diary$user2=diary.user)===null||_diary$user2===void 0?void 0:_diary$user2.lastName),children:/*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default */.A,{size:50,style:{border:'1px solid var(--color-light-200)'},src:constants/* RESOURCE_BASE_URL */.to+((_diary$user3=diary.user)===null||_diary$user3===void 0?void 0:_diary$user3.profile),icon:/*#__PURE__*/(0,jsx_runtime.jsx)(UserOutlined/* default */.A,{})})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.nameAndId,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.name,children:((_diary$user4=diary.user)===null||_diary$user4===void 0?void 0:_diary$user4.firstName)+" "+((_diary$user5=diary.user)===null||_diary$user5===void 0?void 0:_diary$user5.lastName)}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.userid,children:["STAFF-",(_diary$user6=diary.user)===null||_diary$user6===void 0?void 0:_diary$user6.id]})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.topRight,children:["Total hours: ",diary.noOfHours]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.bottom,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.bottomTop,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.projectHours,children:["Number of hours: ",diary.noOfHours]})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.bottomBottom,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.remarks,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:"Remarks:"}),/*#__PURE__*/(0,jsx_runtime.jsx)("br",{}),diary.remarks]}),((_diary$taskType=diary.taskType)===null||_diary$taskType===void 0?void 0:_diary$taskType.title)&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.taskBadge,children:(_diary$taskType2=diary.taskType)===null||_diary$taskType2===void 0?void 0:_diary$taskType2.title})]})]})]},diary.id);})})]});};/* harmony default export */ const Dashboard_Diary = (Diary);

/***/ }),

/***/ 35258:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ DiaryPermissionsEnum)
/* harmony export */ });
let DiaryPermissionsEnum=/*#__PURE__*/function(DiaryPermissionsEnum){DiaryPermissionsEnum["CREATE"]="createDairy";DiaryPermissionsEnum["UPDATE"]="updateDairy";DiaryPermissionsEnum["DELETE"]="deleteDairy";DiaryPermissionsEnum["READ"]="readDairy";return DiaryPermissionsEnum;}({});

/***/ })

}]);