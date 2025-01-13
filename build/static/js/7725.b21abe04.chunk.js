"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[7725],{

/***/ 97725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SiteSettings_Feedback)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./src/Components/Templates/SiteSettings/index.tsx
var SiteSettings = __webpack_require__(16181);
// EXTERNAL MODULE: ./node_modules/antd/es/typography/index.js + 15 modules
var typography = __webpack_require__(30377);
// EXTERNAL MODULE: ./node_modules/antd/es/rate/index.js + 5 modules
var rate = __webpack_require__(56350);
// EXTERNAL MODULE: ./node_modules/antd/es/table/index.js + 96 modules
var table = __webpack_require__(41821);
// EXTERNAL MODULE: ./src/Components/Organisms/SiteSettings/Common/styles.module.scss
var styles_module = __webpack_require__(41394);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/SiteSettings/Feedback/table-columns.tsx
const{Paragraph}=typography/* default */.A;function TableComponent(props){const{tableData,tableLoading}=props;const columns=[{title:"S.No",dataIndex:"index",key:"index",render:(text,record,index)=>index+1,width:"5%"},{title:"Name",dataIndex:"name",key:"name",render:(text,record)=>{var _record$AddedBy,_record$AddedBy2;return record!==null&&record!==void 0&&record.AddedBy?/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.A,{color:"dark-main",style:{fontWeight:'bold',color:'var(--color-dark-main)'},children:(record===null||record===void 0?void 0:(_record$AddedBy=record.AddedBy)===null||_record$AddedBy===void 0?void 0:_record$AddedBy.firstName)+" "+(record===null||record===void 0?void 0:(_record$AddedBy2=record.AddedBy)===null||_record$AddedBy2===void 0?void 0:_record$AddedBy2.lastName)}):"";}},{title:"Rating",dataIndex:"rating",key:"rating",render:text=>/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(rate/* default */.A,{value:text,disabled:true})})},{title:"Comment",dataIndex:"comment",key:"comment",render:text=>/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Paragraph,{ellipsis:{rows:1,expandable:true,symbol:'more'},style:{color:'var(--color-dark-main)'},children:text})})}];return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module/* default */.A.antdTableWrapper,children:/*#__PURE__*/(0,jsx_runtime.jsx)(table/* default */.A,{sticky:true,dataSource:tableData,columns:columns// pagination={t}
,scroll:{x:991},loading:tableLoading,rowKey:record=>"feedback-".concat(record.id)})});}
// EXTERNAL MODULE: ./src/Components/Atoms/index.tsx + 12 modules
var Atoms = __webpack_require__(9394);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(98341);
// EXTERNAL MODULE: ./src/Components/Atoms/ErrorCodes/index.tsx + 1 modules
var ErrorCodes = __webpack_require__(36250);
;// ./src/Modules/Feedback/permissions.ts
let FeedbackPermissionsEnum=/*#__PURE__*/function(FeedbackPermissionsEnum){FeedbackPermissionsEnum["READ"]="readFeedback";return FeedbackPermissionsEnum;}({});
// EXTERNAL MODULE: ./src/Modules/Feedback/index.ts
var Feedback = __webpack_require__(2321);
// EXTERNAL MODULE: ./src/helpers/common.ts
var common = __webpack_require__(88132);
;// ./src/Components/Organisms/SiteSettings/Feedback/index.tsx
const breadCrumbsData=[{text:"Home",isLink:true,path:"/"},{isLink:true,text:"Site Settings",path:"/siteSettings"},{isLink:false,text:"Feedback"}];function Feedback_Feedback(){// available permissions for this module
const permissionSlug=(0,common/* getPermissionSlugs */.AH)(FeedbackPermissionsEnum);const{userPermissions}=(0,es/* useSelector */.d4)(state=>state.usersReducer);const permissions=userPermissions;const{readFeedback}=permissions;const[isLoading,setIsLoading]=(0,react.useState)(false);const[currentEditType,setcurrentEditType]=(0,react.useState)({editType:"new",recordId:0,openModal:false});const module=new Feedback/* FeedbackModule */.i();const[moduleData,setModuleData]=(0,react.useState)({data:[]});const onCancelClick=()=>{setcurrentEditType((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},currentEditType),{},{openModal:!currentEditType.openModal,editType:"new"}));};const reloadTableData=()=>{setIsLoading(true);setModuleData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},moduleData),{},{loading:true}));module.getAllRecords().then(res=>{console.log(res.data,'sads');setModuleData(res);setIsLoading(false);}).catch(err=>{setIsLoading(false);return;});};(0,react.useEffect)(()=>{reloadTableData();},[]);return/*#__PURE__*/(0,jsx_runtime.jsxs)(SiteSettings["default"],{permissionSlug:permissionSlug,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* PageHeader */.zY,{heading:"Feedback",buttonText:"Add Feedback",onButtonClick:onCancelClick,breadCrumbData:breadCrumbsData}),readFeedback===true&&/*#__PURE__*/(0,jsx_runtime.jsx)(TableComponent,{tableData:moduleData.data.data,tableLoading:isLoading,onEditIconClick:()=>{},reloadTableData:reloadTableData}),readFeedback===false&&/*#__PURE__*/(0,jsx_runtime.jsx)(ErrorCodes/* ErrorCode403 */.$t,{mainMessage:"You don't have permission to view this data"})]});}/* harmony default export */ const SiteSettings_Feedback = (Feedback_Feedback);

/***/ })

}]);