"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[3781],{

/***/ 43781:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SiteSettings_SiteMap)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 5 modules
var input = __webpack_require__(16330);
// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 18 modules
var es_form = __webpack_require__(10678);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 1 modules
var message = __webpack_require__(92759);
// EXTERNAL MODULE: ./src/Components/Templates/SiteSettings/index.tsx
var SiteSettings = __webpack_require__(16181);
// EXTERNAL MODULE: ./src/Components/Atoms/index.tsx + 12 modules
var Atoms = __webpack_require__(9394);
// EXTERNAL MODULE: ./src/services/axiosInstance.ts
var axiosInstance = __webpack_require__(83365);
;// ./src/Modules/SiteMap/index.ts
class SiteMapModule{constructor(){this.endpoint="resources";this.getAllRecords=()=>{return axiosInstance/* default */.A.get("".concat(this.endpoint,"/read-sitemap"));};this.updateRecord=data=>{return (0,axiosInstance/* default */.A)({url:"".concat(this.endpoint,"/update-sitemap"),method:"PATCH",data:data,headers:{"Content-Type":"application/json"}});};}}
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/SiteSettings/SiteMap/index.tsx
const{TextArea}=input/* default */.A;const breadCrumbsData=[{text:"Home",isLink:true,path:"/"},{isLink:true,text:"Site Settings",path:"/siteSettings"},{isLink:false,text:"Site Map"}];function SiteMap(){const module=new SiteMapModule();const[form]=es_form/* default */.A.useForm();const[moduleData,setModuleData]=(0,react.useState)({isLoading:false,error:{},data:[]});const reloadTableData=(0,react.useCallback)(()=>{setModuleData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},moduleData),{},{loading:true}));module.getAllRecords().then(res=>{var _res$data;setModuleData(res.data);form.setFieldsValue({data:(_res$data=res.data)===null||_res$data===void 0?void 0:_res$data.data});}).catch(err=>{var _err$response,_err$response$data;const errorMessage=(err===null||err===void 0?void 0:(_err$response=err.response)===null||_err$response===void 0?void 0:(_err$response$data=_err$response.data)===null||_err$response$data===void 0?void 0:_err$response$data.message)||"Something went wrong";message/* default */.Ay.error(errorMessage);});},[module]);(0,react.useEffect)(()=>{reloadTableData();},[]);const onFinish=formValues=>{setModuleData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},moduleData),{},{buttonLoading:true}));module.updateRecord(formValues).then(res=>{setModuleData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},moduleData),{},{buttonLoading:false}));message/* default */.Ay.success("Site Map updated successfully");}).catch(err=>{var _err$response2,_err$response2$data;const errorMessage=(err===null||err===void 0?void 0:(_err$response2=err.response)===null||_err$response2===void 0?void 0:(_err$response2$data=_err$response2.data)===null||_err$response2$data===void 0?void 0:_err$response2$data.message)||"Something went wrong";message/* default */.Ay.error(errorMessage);setModuleData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},moduleData),{},{buttonLoading:false}));});};return/*#__PURE__*/(0,jsx_runtime.jsxs)(SiteSettings["default"],{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* PageHeader */.zY,{heading:"Site Map",breadCrumbData:breadCrumbsData}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.A,{onFinish:onFinish,form:form,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"data",rules:[{required:true,message:'Please input Site Map!'}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(TextArea,{rows:30,placeholder:"Paste Site Map here......"})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"mt-5 d-flex justify-end",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{type:"primary",fontSize:"sm",htmlType:"submit",loading:moduleData===null||moduleData===void 0?void 0:moduleData.buttonLoading,children:"Save"})})]})})]});}/* harmony default export */ const SiteSettings_SiteMap = (SiteMap);

/***/ })

}]);