"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[8559],{

/***/ 58559:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SiteSettings_Templates)
});

// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 5 modules
var input = __webpack_require__(16330);
// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 18 modules
var es_form = __webpack_require__(10678);
// EXTERNAL MODULE: ./node_modules/antd/es/tabs/index.js + 22 modules
var tabs = __webpack_require__(92555);
// EXTERNAL MODULE: ./src/Components/Templates/SiteSettings/index.tsx
var SiteSettings = __webpack_require__(16181);
// EXTERNAL MODULE: ./src/Components/Atoms/index.tsx + 12 modules
var Atoms = __webpack_require__(9394);
;// ./src/Components/Organisms/SiteSettings/Templates/styles.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"templates":"styles_templates__fE5H-"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/SiteSettings/Templates/index.tsx
const{TextArea}=input/* default */.A;const breadCrumbsData=[{text:"Home",isLink:true,path:"/"},{isLink:true,text:"Site Settings",path:"/siteSettings"},{isLink:false,text:"Template"}];const Templates=()=>{// const module = new SiteMapModule();
const[form]=es_form/* default */.A.useForm();// const [moduleData, setModuleData] = useState<any>({
//     isLoading: false,
//     error: {},
//     data: [],
// });
// const reloadTableData = useCallback(() => {
//     setModuleData({ ...moduleData, loading: true });
//     module.getAllRecords().then((res) => {
//         setModuleData(res.data);
//         form.setFieldsValue({
//             data: res.data?.data,
//         })
//     }).catch((err) => {
//         const errorMessage = err?.response?.data?.message || "Something went wrong"
//         message.error(errorMessage);
//     });
// }, [module]);
// useEffect(() => {
//     reloadTableData();
// }, []);
// const onFinish = (formValues: { data: string }) => {
//     setModuleData({ ...moduleData, buttonLoading: true });
//     module.updateRecord(formValues).then((res) => {
//         setModuleData({ ...moduleData, buttonLoading: false });
//         message.success("Site Map updated successfully");
//     }).catch((err) => {
//         const errorMessage = err?.response?.data?.message || "Something went wrong"
//         message.error(errorMessage);
//         setModuleData({ ...moduleData, buttonLoading: false });
//     });
// }
return/*#__PURE__*/(0,jsx_runtime.jsxs)(SiteSettings["default"],{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* PageHeader */.zY,{heading:"Template",breadCrumbData:breadCrumbsData}),/*#__PURE__*/(0,jsx_runtime.jsxs)(tabs/* default */.A,{type:"card",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(tabs/* default */.A.TabPane,{tab:"Email",children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.templates,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.A,{form:form// onFinish={onFinish}
,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"template",rules:[{required:true,message:"Please select a template"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomSelect */.Ae,{options:[{label:"Template 1",value:"template1"},{label:"Template 2",value:"template2"},{label:"Template 3",value:"template3"}],label:"Template",placeholder:"Select a template",asterisk:true})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* RichTextEditor */.dS,{name:"templateValue",form:form}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomSelect */.Ae,{mode:"tags",options:[{label:"Tag 1",value:"tag1"},{label:"Tag 2",value:"tag2"},{label:"Tag 3",value:"tag3"}],placeholder:"Select user",label:"User",asterisk:true})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"mt-4 d-flex justify-end",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{type:"primary",fontSize:"sm",htmlType:"submit"//loading={moduleData?.buttonLoading}
,children:"Send"})})]})})},"1"),/*#__PURE__*/(0,jsx_runtime.jsx)(tabs/* default */.A.TabPane,{tab:"SMS",children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.templates,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.A,{form:form// onFinish={onFinish}
,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"template",rules:[{required:true,message:"Please select a template"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomSelect */.Ae,{options:[{label:"Template 1",value:"template1"},{label:"Template 2",value:"template2"},{label:"Template 3",value:"template3"}],label:"Template",placeholder:"Select a template",asterisk:true})}),/*#__PURE__*/(0,jsx_runtime.jsx)(TextArea,{rows:4,placeholder:"Enter template",className:"mb-3"}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomSelect */.Ae,{mode:"tags",options:[{label:"Tag 1",value:"tag1"},{label:"Tag 2",value:"tag2"},{label:"Tag 3",value:"tag3"}],placeholder:"Select user",label:"User",asterisk:true})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"mt-4 d-flex justify-end",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{type:"primary",fontSize:"sm",htmlType:"submit"//loading={moduleData?.buttonLoading}
,children:"Send"})})]})})},"2")]})]});};/* harmony default export */ const SiteSettings_Templates = (Templates);

/***/ })

}]);