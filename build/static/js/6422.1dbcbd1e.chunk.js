"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[6422],{

/***/ 16457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ TableComponent)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(41821);
/* harmony import */ var _Atoms_Headings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35751);
/* harmony import */ var _Common_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96019);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98341);
/* harmony import */ var _helpers_dateHandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(98933);
/* harmony import */ var _helpers_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88132);
/* harmony import */ var _helpers_commonEnums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2360);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59051);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44414);
function TableComponent(props){var _tableData$workingHou,_tableData$workingHou2;const{tableData,tableLoading,onEditIconClick,reloadTableData,emptyText}=props;const{userPermissions}=(0,react_redux__WEBPACK_IMPORTED_MODULE_2__/* .useSelector */ .d4)(state=>state.usersReducer);const permissions=userPermissions;let holidays=[];(_tableData$workingHou=tableData.workingHour)===null||_tableData$workingHou===void 0?void 0:(_tableData$workingHou2=_tableData$workingHou.hours)===null||_tableData$workingHou2===void 0?void 0:_tableData$workingHou2.forEach(ele=>{if(ele.closed){holidays.push(ele.day);}});const columns=[{title:"S.No",dataIndex:"index",key:"index",render:(text,record,index)=>index+1,width:"7.5%"},{title:"Date",dataIndex:"day",key:"day",render:(text,record)=>{var _record$ModifiedBy,_record$ModifiedBy2;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"d-flex",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Atoms_Headings__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{className:"cursor-pointer",color:onEditIconClick?"primary-main":"dark-main",size:"sm",weight:"bold",onClick:()=>{if(onEditIconClick)onEditIconClick(record.recordId?"edit":"new",text,record.recordId);},children:(0,_helpers_dateHandler__WEBPACK_IMPORTED_MODULE_7__/* .convertDate */ .ic)(text,"dd M,yy")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("small",{className:"pl-2 color-dark-sub",children:"\n\t\t\t\t\t".concat(record.checkIn?"["+moment__WEBPACK_IMPORTED_MODULE_5___default()(record.checkIn).format("hh:mm A"):"","\n\t\t\t\t\t").concat(record.checkOut?" - "+moment__WEBPACK_IMPORTED_MODULE_5___default()(record.checkOut).format("hh:mm A")+"]":"","\n\t\t\t\t\t")})]}),record.ModifiedBy&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("small",{style:{color:'var(--color-dark-sub)',fontSize:"0.6rem"},children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{children:"Modified on "}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span",{children:[" ",record.modifiedDate&&(0,_helpers_dateHandler__WEBPACK_IMPORTED_MODULE_7__/* .convertDate */ .ic)(record.modifiedDate,"dd M,yy")]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{children:" by "}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"inline-block",children:((_record$ModifiedBy=record.ModifiedBy)===null||_record$ModifiedBy===void 0?void 0:_record$ModifiedBy.firstName)+" "+((_record$ModifiedBy2=record.ModifiedBy)===null||_record$ModifiedBy2===void 0?void 0:_record$ModifiedBy2.lastName)+" "})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{})]});},width:"250px"},{title:"Day",dataIndex:"day",key:"day",render:text=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Atoms_Headings__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{color:"dark-main",size:"sm",weight:"bold",children:_helpers_dateHandler__WEBPACK_IMPORTED_MODULE_7__/* .weekDays */ .Mq[new Date(text).getDay()]})},{title:"Hours worked",dataIndex:"hoursWorked",key:"hoursWorked",render:text=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Atoms_Headings__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{color:"dark-main",size:"sm",weight:"bold",children:text?text+" hours":"N/A"})})},{title:"Status",dataIndex:"status",key:"status",render:(text,record)=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Atoms_Headings__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{style:{color:_helpers_commonEnums__WEBPACK_IMPORTED_MODULE_4__/* .attendanceStatusColor */ .$g[text-1]},size:"sm",weight:"bold",children:(0,_helpers_common__WEBPACK_IMPORTED_MODULE_3__/* .isDateGreaterThan */ .uh)(new Date(),record.day)?"-":(0,_helpers_common__WEBPACK_IMPORTED_MODULE_3__/* .capitalize */ .ZH)(_helpers_commonEnums__WEBPACK_IMPORTED_MODULE_4__/* .AttendanceStatus */ .qg[text])})})},{title:"Pro Rated Deduction",dataIndex:"proRatedDeduction",key:"proRatedDeduction",render:text=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Atoms_Headings__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{color:"dark-main",size:"sm",weight:"bold",children:text})})},{title:"Note",dataIndex:"note",key:"note",render:text=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Atoms_Headings__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{color:"dark-main",size:"xs",weight:"normal",children:text})}),width:"200px"},permissions.updateAttendance?{title:"Actions",dataIndex:"actions",key:"actions",render:(text,record)=>permissions.updateAttendance&&!(0,_helpers_common__WEBPACK_IMPORTED_MODULE_3__/* .isDateGreaterThan */ .uh)(new Date(),record.day)&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{className:_Common_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.actions,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{onClick:()=>{if(onEditIconClick)onEditIconClick(record.recordId?"edit":"new",record.day,record.recordId);},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img",{src:"/images/editicon.svg",alt:""})})}),width:"100px"}:{}];return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{style:{maxHeight:"calc(100vh - 80px)",clear:"both",maxWidth:"100%",overflow:"auto"},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,{sticky:true,dataSource:tableData===null||tableData===void 0?void 0:tableData.attendanceData,columns:columns,scroll:{x:991},pagination:false,loading:tableLoading,rowKey:record=>"Attendance-type-".concat(record.day),locale:{emptyText}})});}

/***/ }),

/***/ 46422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Dashboard_Payroll)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 18 modules
var es_form = __webpack_require__(10678);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 1 modules
var message = __webpack_require__(92759);
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
// EXTERNAL MODULE: ./src/services/axiosInstance.ts
var axiosInstance = __webpack_require__(83365);
;// ./src/Modules/Payroll/index.ts
class PayrollModule{constructor(){this.endPoint="payroll";/**Get all Biometric records
	 * @param query - query params
	 */this.getAllRecords=query=>{return axiosInstance/* default */.A.get(this.endPoint,{params:query});};this.getRecordById=id=>{return axiosInstance/* default */.A.get(axiosInstance/* BASE_URL */.C+this.endPoint+"/findOne/"+id);};this.deleteRecord=id=>{return axiosInstance/* default */.A.delete(axiosInstance/* BASE_URL */.C+this.endPoint+"/"+id);};this.createRecord=data=>{return axiosInstance/* default */.A.post(axiosInstance/* BASE_URL */.C+this.endPoint,data);};this.updateRecord=(data,id)=>{return axiosInstance/* default */.A.patch(axiosInstance/* BASE_URL */.C+this.endPoint+"/update/"+id,data);};this.markAsPaid=data=>{return axiosInstance/* default */.A.patch(axiosInstance/* BASE_URL */.C+this.endPoint+"/markAsPaid",data);};this.recalculateRecord=id=>{return axiosInstance/* default */.A.patch(axiosInstance/* BASE_URL */.C+this.endPoint+"/recalculate/"+id);};this.generateReport=data=>{return axiosInstance/* default */.A.post("".concat(this.endPoint,"/generateReport"),data,{responseType:'blob'});};}}
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/Dashboard/Payroll/modal.tsx
const PayrollModal=props=>{var _recordData$data;const{openModal,onCancel,type,record,reloadTableData,permissions:{updatePayroll}}=props;const[form]=es_form/* default */.A.useForm();const module=new PayrollModule();const[recordData,setRecordData]=(0,react.useState)();const handleErrors=err=>{const error=(0,error_handler/* errorHandler */.r)(err);if(typeof error.message=="string"){setRecordData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},recordData),{},{error:error.message}));}else{let errData=(0,ServerErrorHandler/* HandleServerErrors */.p)(error.message,[]);form.setFields(errData);setRecordData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},recordData),{},{error:""}));}};const handleAlertClose=()=>{setRecordData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},recordData),{},{error:""}));};const getDataBySlug=(0,react.useCallback)(()=>{module.getRecordById(record).then(res=>{if(res.data&&res.data.data){form.setFieldsValue((0,objectSpread2/* default */.A)({},res.data.data));setRecordData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},res.data),{},{loading:false}));}}).catch(err=>{handleErrors(err);});},[form,record,module]);(0,react.useEffect)(()=>{if(type==="edit"){setRecordData({loading:true});getDataBySlug();}else{form.resetFields();}},[]);const onFinish=formValues=>{setRecordData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},recordData),{},{buttonLoading:true}));if(updatePayroll===true){module.updateRecord(formValues,record).then(res=>{reloadTableData();onCancel();setRecordData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{buttonLoading:false}));}).catch(err=>{handleErrors(err);setRecordData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{buttonLoading:false}));});}else{setRecordData(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{buttonLoading:false}));message/* default */.Ay.error("You don't have permission to update this record");}};return/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomModal */.jo,{visible:openModal,closable:true,onCancel:onCancel,titleText:"Manual Correction",showFooter:false,children:recordData!==null&&recordData!==void 0&&recordData.loading?/*#__PURE__*/(0,jsx_runtime.jsx)(Skeletons/* default */.A,{items:3}):/*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.A,{className:styles_module/* default */.A.form,onFinish:onFinish,form:form,children:[(recordData===null||recordData===void 0?void 0:recordData.error)&&/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomErrorAlert */.WZ,{description:recordData===null||recordData===void 0?void 0:recordData.error,isClosable:true,onClose:handleAlertClose}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"manualCorrection",rules:[{required:true,message:"Please add amount"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{size:"w100",label:"Amount",type:"number",asterisk:true,defaultValue:recordData===null||recordData===void 0?void 0:(_recordData$data=recordData.data)===null||_recordData$data===void 0?void 0:_recordData$data.manualCorrection})})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"note",rules:[{required:true,message:"Please add a note"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{size:"w100",label:"Note",asterisk:true,type:"text",placeHolder:"Enter note"})})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"d-flex justify-end",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{size:"normal",fontSize:"sm",onClick:onCancel,type:"plain",children:"Cancel"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{type:"primary",size:"normal",fontSize:"sm",htmlType:"submit",loading:recordData===null||recordData===void 0?void 0:recordData.buttonLoading,children:type==="edit"?"Edit Asset":"Add Asset"})]})]})});};
// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js
var tooltip = __webpack_require__(81541);
// EXTERNAL MODULE: ./node_modules/antd/es/popconfirm/index.js + 1 modules
var popconfirm = __webpack_require__(56231);
// EXTERNAL MODULE: ./node_modules/antd/es/dropdown/index.js
var dropdown = __webpack_require__(57811);
// EXTERNAL MODULE: ./node_modules/antd/es/tag/index.js + 1 modules
var tag = __webpack_require__(12916);
// EXTERNAL MODULE: ./node_modules/antd/es/spin/index.js
var spin = __webpack_require__(90650);
// EXTERNAL MODULE: ./node_modules/antd/es/popover/index.js
var popover = __webpack_require__(65059);
// EXTERNAL MODULE: ./node_modules/antd/es/table/index.js + 96 modules
var table = __webpack_require__(41821);
// EXTERNAL MODULE: ./node_modules/antd/es/drawer/index.js + 6 modules
var es_drawer = __webpack_require__(73780);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(48538);
// EXTERNAL MODULE: ./node_modules/antd/es/collapse/index.js + 6 modules
var collapse = __webpack_require__(98412);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
;// ./node_modules/@ant-design/icons-svg/es/asn/DollarCircleOutlined.js
// This icon file is generated automatically.
var DollarCircleOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm47.7-395.2l-25.4-5.9V348.6c38 5.2 61.5 29 65.5 58.2.5 4 3.9 6.9 7.9 6.9h44.9c4.7 0 8.4-4.1 8-8.8-6.1-62.3-57.4-102.3-125.9-109.2V263c0-4.4-3.6-8-8-8h-28.1c-4.4 0-8 3.6-8 8v33c-70.8 6.9-126.2 46-126.2 119 0 67.6 49.8 100.2 102.1 112.7l24.7 6.3v142.7c-44.2-5.9-69-29.5-74.1-61.3-.6-3.8-4-6.6-7.9-6.6H363c-4.7 0-8.4 4-8 8.7 4.5 55 46.2 105.6 135.2 112.1V761c0 4.4 3.6 8 8 8h28.4c4.4 0 8-3.6 8-8.1l-.2-31.7c78.3-6.9 134.3-48.8 134.3-124-.1-69.4-44.2-100.4-109-116.4zm-68.6-16.2c-5.6-1.6-10.3-3.1-15-5-33.8-12.2-49.5-31.9-49.5-57.3 0-36.3 27.5-57 64.5-61.7v124zM534.3 677V543.3c3.1.9 5.9 1.6 8.8 2.2 47.3 14.4 63.2 34.4 63.2 65.1 0 39.1-29.4 62.6-72 66.4z"
      }
    }]
  },
  "name": "dollar-circle",
  "theme": "outlined"
};
/* harmony default export */ const asn_DollarCircleOutlined = (DollarCircleOutlined);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 5 modules
var AntdIcon = __webpack_require__(61187);
;// ./node_modules/@ant-design/icons/es/icons/DollarCircleOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var DollarCircleOutlined_DollarCircleOutlined = function DollarCircleOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.A, (0,esm_extends/* default */.A)({}, props, {
    ref: ref,
    icon: asn_DollarCircleOutlined
  }));
};
if (false) {}
/* harmony default export */ const icons_DollarCircleOutlined = (/*#__PURE__*/react.forwardRef(DollarCircleOutlined_DollarCircleOutlined));
;// ./node_modules/@ant-design/icons-svg/es/asn/CalculatorOutlined.js
// This icon file is generated automatically.
var CalculatorOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M251.2 387H320v68.8c0 1.8 1.8 3.2 4 3.2h48c2.2 0 4-1.4 4-3.3V387h68.8c1.8 0 3.2-1.8 3.2-4v-48c0-2.2-1.4-4-3.3-4H376v-68.8c0-1.8-1.8-3.2-4-3.2h-48c-2.2 0-4 1.4-4 3.2V331h-68.8c-1.8 0-3.2 1.8-3.2 4v48c0 2.2 1.4 4 3.2 4zm328 0h193.6c1.8 0 3.2-1.8 3.2-4v-48c0-2.2-1.4-4-3.3-4H579.2c-1.8 0-3.2 1.8-3.2 4v48c0 2.2 1.4 4 3.2 4zm0 265h193.6c1.8 0 3.2-1.8 3.2-4v-48c0-2.2-1.4-4-3.3-4H579.2c-1.8 0-3.2 1.8-3.2 4v48c0 2.2 1.4 4 3.2 4zm0 104h193.6c1.8 0 3.2-1.8 3.2-4v-48c0-2.2-1.4-4-3.3-4H579.2c-1.8 0-3.2 1.8-3.2 4v48c0 2.2 1.4 4 3.2 4zm-195.7-81l61.2-74.9c4.3-5.2.7-13.1-5.9-13.1H388c-2.3 0-4.5 1-5.9 2.9l-34 41.6-34-41.6a7.85 7.85 0 00-5.9-2.9h-50.9c-6.6 0-10.2 7.9-5.9 13.1l61.2 74.9-62.7 76.8c-4.4 5.2-.8 13.1 5.8 13.1h50.8c2.3 0 4.5-1 5.9-2.9l35.5-43.5 35.5 43.5c1.5 1.8 3.7 2.9 5.9 2.9h50.8c6.6 0 10.2-7.9 5.9-13.1L383.5 675zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-36 732H180V180h664v664z"
      }
    }]
  },
  "name": "calculator",
  "theme": "outlined"
};
/* harmony default export */ const asn_CalculatorOutlined = (CalculatorOutlined);
;// ./node_modules/@ant-design/icons/es/icons/CalculatorOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var CalculatorOutlined_CalculatorOutlined = function CalculatorOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.A, (0,esm_extends/* default */.A)({}, props, {
    ref: ref,
    icon: asn_CalculatorOutlined
  }));
};
if (false) {}
/* harmony default export */ const icons_CalculatorOutlined = (/*#__PURE__*/react.forwardRef(CalculatorOutlined_CalculatorOutlined));
;// ./node_modules/@ant-design/icons-svg/es/asn/ExportOutlined.js
// This icon file is generated automatically.
var ExportOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zm18.6-251.7L765 393.7c-5.3-4.2-13-.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z"
      }
    }]
  },
  "name": "export",
  "theme": "outlined"
};
/* harmony default export */ const asn_ExportOutlined = (ExportOutlined);
;// ./node_modules/@ant-design/icons/es/icons/ExportOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var ExportOutlined_ExportOutlined = function ExportOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.A, (0,esm_extends/* default */.A)({}, props, {
    ref: ref,
    icon: asn_ExportOutlined
  }));
};
if (false) {}
/* harmony default export */ const icons_ExportOutlined = (/*#__PURE__*/react.forwardRef(ExportOutlined_ExportOutlined));
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CheckOutlined.js
var CheckOutlined = __webpack_require__(65472);
// EXTERNAL MODULE: ./src/Components/Atoms/Headings/index.tsx
var Headings = __webpack_require__(35751);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(98341);
// EXTERNAL MODULE: ./src/helpers/common.ts
var common = __webpack_require__(88132);
// EXTERNAL MODULE: ./src/helpers/dateHandler.ts
var dateHandler = __webpack_require__(98933);
;// ./src/Components/Organisms/Dashboard/Payroll/style.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const style_module = ({"forgotPasswordImg":"style_forgotPasswordImg__Vaqm7","dropdown":"style_dropdown__W37J0","overlay":"style_overlay__6e-BM","overlay_item":"style_overlay_item__rALvi","disabledButton":"style_disabledButton__0HtUi","profileScoreWrap":"style_profileScoreWrap__+7t2+","scoreOverlay":"style_scoreOverlay__QC6a+","cardWrap":"style_cardWrap__-fN8N","card":"style_card__Tn3ol","card__green":"style_card__green__HTkCk","card__info":"style_card__info__zycAA","drawerElement":"style_drawerElement__aEeT7"});
// EXTERNAL MODULE: ./src/Components/Icons/index.tsx + 58 modules
var Icons = __webpack_require__(63668);
// EXTERNAL MODULE: ./src/helpers/commonEnums.ts
var commonEnums = __webpack_require__(2360);
// EXTERNAL MODULE: ./node_modules/react-csv/index.js
var react_csv = __webpack_require__(46411);
// EXTERNAL MODULE: ./src/Modules/Attendance/index.ts
var Attendance = __webpack_require__(33965);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(59051);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./src/Components/Organisms/Dashboard/Attendance/table-columns.tsx
var table_columns = __webpack_require__(16457);
// EXTERNAL MODULE: ./src/hooks/index.ts + 5 modules
var hooks = __webpack_require__(91970);
// EXTERNAL MODULE: ./src/Components/Atoms/CustomEmpty/index.tsx
var CustomEmpty = __webpack_require__(49758);
;// ./src/Components/Organisms/Dashboard/Payroll/table-columns.tsx
const ActionComponent=props=>{const{record,onEditIconClick,reloadTableData,permissions:{deletePayroll,updatePayroll,readPayroll}}=props;const[isClicked,setIsClicked]=(0,react.useState)(false);const[excelData,setExcelData]=(0,react.useState)([]);const module=new PayrollModule();const getExcelData=(0,react.useCallback)(async()=>{const module=new Attendance/* AttendanceModule */.E();if(isClicked)module.getUserAttendance({year:moment_default()(record===null||record===void 0?void 0:record.PayrollCycle.toDate).year(),month:moment_default()(record===null||record===void 0?void 0:record.PayrollCycle.fromDate).add(10,'d').month(),userId:record===null||record===void 0?void 0:record.User.id}).then(res=>{if(res.data.data&&res.data.data.attendanceData.length>0){var _res$data,_res$data$data;const _data=(_res$data=res.data)===null||_res$data===void 0?void 0:(_res$data$data=_res$data.data)===null||_res$data$data===void 0?void 0:_res$data$data.attendanceData.map(item=>{return{date:(0,dateHandler/* convertDate */.ic)(item===null||item===void 0?void 0:item.day,"dd MM,yy"),day:dateHandler/* weekDays */.Mq[new Date(item.day).getDay()],hours:item===null||item===void 0?void 0:item.hoursWorked,status:(0,common/* capitalize */.ZH)(commonEnums/* AttendanceStatus */.qg[item.status]),proRatedDeduction:item.proRatedDeduction,note:item.note};});setExcelData(_data);}}).catch(err=>console.log(err));},[record.id,isClicked]);// headers for the excel export
const headers=[{label:"Date",key:"date"},{label:"Day",key:"day"},{label:"Hours",key:"hours"},{label:"Status",key:"status"},{label:"Pro Rated Deduction",key:"proRatedDeduction"},{label:"Note",key:"note"}];(0,react.useEffect)(()=>{getExcelData();},[getExcelData]);const handleMarkAsPaid=()=>{if(updatePayroll===false){message/* default */.Ay.error("You don't have permission to update this record, please contact your admin.");return;}module.markAsPaid({ids:[record.id]}).then(res=>{reloadTableData();}).catch(err=>{});};const handleRecalculate=()=>{if(updatePayroll===false){message/* default */.Ay.error("You don't have permission to update this record, please contact your admin.");return;}module.recalculateRecord(record.id).then(res=>{reloadTableData();}).catch(err=>{var _err$response,_err$response$data;message/* default */.Ay.error(err===null||err===void 0?void 0:(_err$response=err.response)===null||_err$response===void 0?void 0:(_err$response$data=_err$response.data)===null||_err$response$data===void 0?void 0:_err$response$data.message);});};const items=[{key:'1',label:updatePayroll&&/*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.A,{title:"Edit",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"".concat(styles_module/* default */.A.actions," ").concat(style_module.overlay_card_item),onClick:()=>onEditIconClick(record),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:"/images/editicon.svg",alt:""})}),"Manual correction"]})})},{key:'2',label:updatePayroll&&/*#__PURE__*/(0,jsx_runtime.jsx)(popconfirm/* default */.A,{placement:"top",title:"Are you sure?",onConfirm:handleMarkAsPaid,okText:"Yes",cancelText:"No",children:/*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.A,{title:"Mark as paid",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"".concat(styles_module/* default */.A.actions," ").concat(style_module.overlay_card_item),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(icons_DollarCircleOutlined,{style:{color:"white"}}),"Mark as paid"]})})})},{key:'3',label:updatePayroll&&/*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.A,{title:"Recalculate",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"".concat(styles_module/* default */.A.actions," ").concat(style_module.overlay_card_item),onClick:handleRecalculate,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(icons_CalculatorOutlined,{style:{color:"white"}}),"Recalculate"]})})},{key:'4',label:readPayroll&&/*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.A,{title:"Export to Excel",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"".concat(styles_module/* default */.A.actions," ").concat(style_module.overlay_card_item),onClick:()=>{getExcelData();},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(icons_ExportOutlined,{style:{color:"white"}}),/*#__PURE__*/(0,jsx_runtime.jsx)(react_csv.CSVLink,{filename:"Payroll"+" "+(record.User.firstName+" "+record.User.lastName),headers:headers,data:excelData,onClick:getExcelData,children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{style:{color:'black'},children:"Export to Excel"})})]})})}];return/*#__PURE__*/(0,jsx_runtime.jsx)(dropdown/* default */.A,{menu:{items},trigger:["click"],children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{onClick:()=>{setIsClicked(true);},style:{cursor:"pointer",padding:'5px'},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Icons/* MoreIcon */.Z4,{height:25,width:25,color:"#7e869a"})})});};function TableComponentPayroll(props){var _drawer$selected,_drawer$selected2,_drawer$selected3,_drawer$selected4,_drawer$selected5,_moment$add,_drawer$selected6,_drawer$selected6$Pay,_drawer$selected7,_drawer$selected9,_drawer$selected10,_drawer$selected11,_drawer$selected12,_drawer$selected13,_drawer$selected14,_drawer$selected15,_drawer$selected16,_drawer$selected17,_drawer$selected18,_drawer$selected19,_drawer$selected20,_drawer$selected21,_drawer$selected22,_drawer$selected23,_drawer$selected24,_drawer$selected25;const{tableData,tableLoading,onEditIconClick,reloadTableData,meta,filters}=props;const{userPermissions}=(0,es/* useSelector */.d4)(state=>state.usersReducer);const permissions=userPermissions;const[drawer,setDrawer]=(0,react.useState)({open:false,selected:undefined});const payrollModule=new PayrollModule();const handleMarkAsPaid=id=>{if(id)payrollModule.markAsPaid({ids:[id]}).then(res=>{reloadTableData();setDrawer((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},drawer),{},{selected:(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},drawer.selected),{},{paid:true})}));}).catch(err=>{});};const module=new Attendance/* AttendanceModule */.E();const{data,onRefresh,setData,loading}=(0,hooks/* useConditionFetchData */.P6)({method:module.findUserAttendanceForPayroll,initialQuery:{fromDate:(_drawer$selected=drawer.selected)===null||_drawer$selected===void 0?void 0:_drawer$selected.PayrollCycle.fromDate,toDate:(_drawer$selected2=drawer.selected)===null||_drawer$selected2===void 0?void 0:_drawer$selected2.PayrollCycle.toDate,userId:(_drawer$selected3=drawer.selected)===null||_drawer$selected3===void 0?void 0:_drawer$selected3.User.id},condition:drawer===null||drawer===void 0?void 0:drawer.selected});const columns=[{title:"S.No",dataIndex:"index",key:"index",render:(text,record,index)=>index+1,width:"80px"},{title:"Employee",dataIndex:"employee",key:"employee",render:(employee,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:record.User.firstName+" "+record.User.lastName}),width:"200px"},{title:"Period",dataIndex:"fromDate",key:"fromDate",render:(fromDate,record)=>/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{display:'flex',gap:'0.5rem',alignItems:'center'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:(0,dateHandler/* convertDate */.ic)(record.PayrollCycle.fromDate,"dd M,yy")+" - "+(0,dateHandler/* convertDate */.ic)(record.PayrollCycle.toDate,"dd M,yy")}),(0,common/* isDateInRange */.Dm)(new Date(),record.PayrollCycle.fromDate,record.PayrollCycle.toDate)?/*#__PURE__*/(0,jsx_runtime.jsx)(tag/* default */.A,{color:"green",children:"Current"}):null]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{className:"cursor-pointer",size:"sm",color:"primary-main",onClick:()=>setDrawer({selected:record,open:true}),children:"View Report"})]}),width:"180px"},{title:"Status",dataIndex:"status",key:"status",render:(status,record)=>record.processing?/*#__PURE__*/(0,jsx_runtime.jsx)(spin/* default */.A,{}):/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:record.paid?"primary-main":"dark-sub",size:"sm",children:record.paid?"Paid":"Not paid"}),width:"100px"},{title:"Deductions",dataIndex:"Deductions",key:"Deductions",render:(Deductions,record)=>Deductions.length?/*#__PURE__*/(0,jsx_runtime.jsx)(popover/* default */.A,{content:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"font-size-sm",children:Deductions.map(deduction=>/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[deduction.title,":  ",deduction.amount.toFixed(2)," AED"]}))}),title:"Deductions",children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:'var(--font-size-sm)',color:'var(--color-primary-main)',cursor:'pointer'},children:Deductions.length+" deductions"})}):/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:"No deductions"}),width:"160px"},{title:"Summary",dataIndex:"summary",key:"summary",render:(summary,record)=>/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:"Total days in cycle: "+record.totalDays}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:"Working days: "+record.totalWorkingDays}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:"Days worked: "+record.totalDaysWorked}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:"Lates: "+record.totalLates}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:"Incompletes: "+record.totalIncompletes}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:"Absences: "+record.totalAbsences}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:"Deduction from leave credits: "+record.toBeDeductedFromLeaveCredits}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:"Deduction from salary: "+record.toBeDeductedFromCurrentSalary})]}),width:"280px"},{title:"Payment",dataIndex:"payment",key:"payment",render:(payment,record)=>/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:"Salary: "+record.salaryAmount+" AED"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:"Manual Correction: "+record.manualCorrection+" AED"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:"Other amount: "+record.otherAmount+" AED"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:record.totalDeduction?"red-yp":"dark-sub",size:"sm",children:"Deductions: "+(0,common/* formatCurrency */.vv)(record.totalDeduction)}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",weight:"bold",children:"Receivable: "+(0,common/* formatCurrency */.vv)(record.totalReceivable)})]}),width:"280px"},{title:"Date",dataIndex:"addedDate",key:"addedDate",render:(addedDate,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:"Added: ".concat((0,dateHandler/* convertDate */.ic)(addedDate,"dd M,yy"))})}),width:"100px"},{title:"Actions",dataIndex:"actions",key:"actions",render:(text,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)(ActionComponent,{record:record,onEditIconClick:onEditIconClick,reloadTableData:reloadTableData,permissions:permissions}),width:"100px"}];return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.antdTableWrapper,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(table/* default */.A,{sticky:true,dataSource:tableData,columns:columns,pagination:{current:meta===null||meta===void 0?void 0:meta.page,total:meta===null||meta===void 0?void 0:meta.total,hideOnSinglePage:true,pageSize:meta===null||meta===void 0?void 0:meta.perPage,onChange(page,pageSize){reloadTableData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},filters),{},{page:page,perPage:pageSize}));}},scroll:{x:991},loading:tableLoading,rowKey:record=>"Payroll-".concat(record.id)}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_drawer/* default */.A,{width:window.innerWidth>768?"75%":"100%",title:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{display:'flex',justifyContent:'space-between',alignItems:'center'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:"Payroll Report of "+((_drawer$selected4=drawer.selected)===null||_drawer$selected4===void 0?void 0:_drawer$selected4.User.firstName)+" "+((_drawer$selected5=drawer.selected)===null||_drawer$selected5===void 0?void 0:_drawer$selected5.User.lastName)+" for the Month of "+dateHandler/* months */.US[(_moment$add=moment_default()(drawer===null||drawer===void 0?void 0:(_drawer$selected6=drawer.selected)===null||_drawer$selected6===void 0?void 0:(_drawer$selected6$Pay=_drawer$selected6.PayrollCycle)===null||_drawer$selected6$Pay===void 0?void 0:_drawer$selected6$Pay.fromDate).add(10,'d'))===null||_moment$add===void 0?void 0:_moment$add.month()][1]}),(_drawer$selected7=drawer.selected)!==null&&_drawer$selected7!==void 0&&_drawer$selected7.paid?/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{className:"color-primary-main",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(CheckOutlined/* default */.A,{})," Paid"]}):/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.A,{onClick:()=>{var _drawer$selected8;return handleMarkAsPaid((_drawer$selected8=drawer.selected)===null||_drawer$selected8===void 0?void 0:_drawer$selected8.id);},size:"small",children:"Mark as paid"})]}),placement:"right",onClose:()=>setDrawer((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},drawer),{},{open:false})),open:drawer.open,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{padding:'1rem 0 0 1rem',display:'flex',gap:'1rem'},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{//  width: '25%', 
width:window.innerWidth>768?'25%':'100%',marginTop:'1rem'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"normal",weight:"bold",style:{marginBottom:'1rem'},children:"Summary"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:style_module.drawerElement,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:"Total days in cycle: "})," ",/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:(_drawer$selected9=drawer.selected)===null||_drawer$selected9===void 0?void 0:_drawer$selected9.totalDays})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:style_module.drawerElement,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:"Working days: "})," ",/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:(_drawer$selected10=drawer.selected)===null||_drawer$selected10===void 0?void 0:_drawer$selected10.totalWorkingDays})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:style_module.drawerElement,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:"Days worked: "})," ",/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:(_drawer$selected11=drawer.selected)===null||_drawer$selected11===void 0?void 0:_drawer$selected11.totalDaysWorked})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:style_module.drawerElement,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:"Lates: "})," ",/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:(_drawer$selected12=drawer.selected)===null||_drawer$selected12===void 0?void 0:_drawer$selected12.totalLates})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:style_module.drawerElement,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:"Incompletes: "})," ",/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:((_drawer$selected13=drawer.selected)===null||_drawer$selected13===void 0?void 0:_drawer$selected13.totalIncompletes)+" days"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:style_module.drawerElement,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:"Absences: "})," ",/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:(_drawer$selected14=drawer.selected)===null||_drawer$selected14===void 0?void 0:_drawer$selected14.totalAbsences})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:style_module.drawerElement,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:"Deduction from leave credits: "})," ",/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:(_drawer$selected15=drawer.selected)===null||_drawer$selected15===void 0?void 0:_drawer$selected15.toBeDeductedFromLeaveCredits})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:style_module.drawerElement,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:"Deduction from salary: "})," ",/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:((_drawer$selected16=drawer.selected)===null||_drawer$selected16===void 0?void 0:_drawer$selected16.toBeDeductedFromCurrentSalary)+" days"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"normal",weight:"bold",style:{margin:'3rem 0 1rem 0'},children:"Payment"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:style_module.drawerElement,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:"Salary: "})," ",/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:((_drawer$selected17=drawer.selected)===null||_drawer$selected17===void 0?void 0:_drawer$selected17.salaryAmount)+" AED"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:style_module.drawerElement,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:"Manual Correction: "})," ",/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:((_drawer$selected18=drawer.selected)===null||_drawer$selected18===void 0?void 0:_drawer$selected18.manualCorrection)+" AED"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:style_module.drawerElement,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:"Other amount: "})," ",/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:((_drawer$selected19=drawer.selected)===null||_drawer$selected19===void 0?void 0:_drawer$selected19.otherAmount)+" AED"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:style_module.drawerElement,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:(_drawer$selected20=drawer.selected)!==null&&_drawer$selected20!==void 0&&_drawer$selected20.totalDeduction?"red-yp":"dark-sub",size:"sm",children:"Deductions: "})," ",/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:(_drawer$selected21=drawer.selected)!==null&&_drawer$selected21!==void 0&&_drawer$selected21.totalDeduction?"red-yp":"dark-sub",size:"sm",children:((_drawer$selected22=drawer.selected)===null||_drawer$selected22===void 0?void 0:_drawer$selected22.totalDeduction.toFixed(2))+" AED"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:style_module.drawerElement,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",weight:"bold",children:"Receivable: "})," ",/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",weight:"bold",children:((_drawer$selected23=drawer.selected)===null||_drawer$selected23===void 0?void 0:_drawer$selected23.totalReceivable.toFixed(2))+" AED"})]}),((_drawer$selected24=drawer.selected)===null||_drawer$selected24===void 0?void 0:_drawer$selected24.Deductions.length)&&/*#__PURE__*/(0,jsx_runtime.jsx)(collapse/* default */.A,{style:{margin:'3rem 0 1rem 0'},defaultActiveKey:['0'],children:/*#__PURE__*/(0,jsx_runtime.jsx)(collapse/* default */.A.Panel,{header:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{padding:'0 0.25rem'},children:"Deductions"}),children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{padding:'0.5rem'},className:"font-size-sm color-dark-sub",children:(_drawer$selected25=drawer.selected)===null||_drawer$selected25===void 0?void 0:_drawer$selected25.Deductions.map(deduction=>/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:["- ",deduction.title,":  ",deduction.amount.toFixed(2)," AED"]}))})},"0")})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{width:'75%'},children:/*#__PURE__*/(0,jsx_runtime.jsx)(table_columns/* default */.A,{tableData:data?data:{},tableLoading:loading,reloadTableData:()=>{},emptyText:/*#__PURE__*/(0,jsx_runtime.jsx)(CustomEmpty/* default */.A,{description:"No records found"})})})]})})]});}
// EXTERNAL MODULE: ./node_modules/antd/es/select/index.js + 30 modules
var es_select = __webpack_require__(97554);
// EXTERNAL MODULE: ./node_modules/antd/es/empty/index.js + 2 modules
var empty = __webpack_require__(90247);
// EXTERNAL MODULE: ./src/Components/Atoms/ErrorCodes/index.tsx + 1 modules
var ErrorCodes = __webpack_require__(36250);
// EXTERNAL MODULE: ./src/Modules/Payroll/permissions.ts
var Payroll_permissions = __webpack_require__(3911);
// EXTERNAL MODULE: ./src/Components/Templates/Layout/index.tsx + 28 modules
var Layout = __webpack_require__(81168);
// EXTERNAL MODULE: ./src/helpers/useDebounce.ts
var useDebounce = __webpack_require__(28173);
// EXTERNAL MODULE: ./src/Modules/User/index.ts
var User = __webpack_require__(47645);
// EXTERNAL MODULE: ./src/Modules/PayrollCycle/index.ts
var PayrollCycle = __webpack_require__(86735);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/wrapRegExp.js
var wrapRegExp = __webpack_require__(36140);
// EXTERNAL MODULE: ./node_modules/antd/es/modal/index.js + 7 modules
var modal = __webpack_require__(32645);
// EXTERNAL MODULE: ./src/Components/Atoms/Select/index.tsx + 1 modules
var Select = __webpack_require__(39590);
// EXTERNAL MODULE: ./src/helpers/options.ts
var options = __webpack_require__(59179);
;// ./src/Modules/Payroll/types.ts
let ReportType=/*#__PURE__*/function(ReportType){ReportType["all"]="all";ReportType["users"]="users";ReportType["department"]="department";ReportType["organization"]="organization";return ReportType;}({});
// EXTERNAL MODULE: ./src/Modules/Department/index.ts
var Department = __webpack_require__(98924);
// EXTERNAL MODULE: ./src/Modules/Organization/index.ts
var Organization = __webpack_require__(42361);
;// ./src/Components/Organisms/Dashboard/Payroll/Export/index.tsx
const PayrollExport=props=>{var _users$data,_departments$data,_organizations$data;const{isModalOpen,setIsModalOpen}=props;const[form]=es_form/* default */.A.useForm();const[reportType,setReportType]=(0,react.useState)("all");const[isLoading,setIsLoading]=(0,react.useState)(false);const module=(0,react.useMemo)(()=>new PayrollModule(),[]);const payrollCycleModule=(0,react.useMemo)(()=>new PayrollCycle/* PayrollCycleModule */.s(),[]);const usersModule=(0,react.useMemo)(()=>new User/* UserModule */.U(),[]);const departmentModule=(0,react.useMemo)(()=>new Department/* DepartmentModule */.d(),[]);const organizationModule=(0,react.useMemo)(()=>new Organization/* OrganizationModule */.I(),[]);const[usersTerm,setUserTerms]=(0,react.useState)("");const[users,setUsers]=(0,react.useState)({loading:false,data:[]});const debouncedUsersTerm=(0,useDebounce/* useDebounce */.d)(usersTerm,500);const{data:payrollCycleData}=(0,hooks/* useFetchData */.Gs)({method:()=>payrollCycleModule.getAllRecords()});const[departments,setDepartments]=(0,react.useState)({loading:false,data:[]});const[organizations,setOrganizations]=(0,react.useState)({loading:false,data:[]});const onSubmit=async values=>{try{setIsLoading(true);const response=await module.generateReport(values);const disposition=response.headers['content-disposition'];const matches=/*#__PURE__*/(0,wrapRegExp/* default */.A)(/filename=(.*)/,{filename:1}).exec(disposition);const filename=matches&&matches.groups&&matches.groups.filename?matches.groups.filename:'downloaded_file.xlsx';message/* default */.Ay.success("Report downloaded successfully");const url=window.URL.createObjectURL(new Blob([response.data]));const a=document.createElement('a');a.href=url;a.download=filename;document.body.appendChild(a);a.click();document.body.removeChild(a);window.URL.revokeObjectURL(url);}catch(error){const errorMessage=(0,common/* handleError */.H4)(error);message/* default */.Ay.error(errorMessage||"Something went wrong while downloading the file");}finally{setIsLoading(false);}};const GetUsers=name=>{setUsers(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{loading:true}));const{getAllRecords}=usersModule;getAllRecords({name}).then(res=>{const{data}=res.data;setUsers(prev=>{// if the data is already present in the state, then don't add it again
const filteredData=data===null||data===void 0?void 0:data.filter(item=>{return!(prev!==null&&prev!==void 0&&prev.data.find(prevItem=>(prevItem===null||prevItem===void 0?void 0:prevItem.id)===item.id));});// add the new data to the existing data
return{data:[...prev.data,...filteredData],loading:false};});}).catch(err=>{const errorMessage=(0,common/* handleError */.H4)(err);message/* default */.Ay.error(errorMessage||"Something went wrong");setUsers(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{loading:false}));});};const GetDepartments=(0,react.useCallback)(()=>{setDepartments(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{loading:true}));const{getAllRecords}=departmentModule;getAllRecords().then(res=>{const data=res.data.data;setDepartments(prev=>{// if the data is already present in the state, then don't add it again
const filteredData=data===null||data===void 0?void 0:data.filter(item=>{return!(prev!==null&&prev!==void 0&&prev.data.find(prevItem=>(prevItem===null||prevItem===void 0?void 0:prevItem.id)===item.id));});// add the new data to the existing data
return{data:[...prev.data,...filteredData],loading:false};});}).catch(err=>{const errorMessage=(0,common/* handleError */.H4)(err);message/* default */.Ay.error(errorMessage||"Something went wrong");setDepartments(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{loading:false}));});},[departmentModule]);const GetOrganizations=(0,react.useCallback)(()=>{setOrganizations(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{loading:true}));const{getAllRecords}=organizationModule;getAllRecords().then(res=>{const{data}=res===null||res===void 0?void 0:res.data;setOrganizations(prev=>{// if the data is already present in the state, then don't add it again
const filteredData=data===null||data===void 0?void 0:data.filter(item=>{return!(prev!==null&&prev!==void 0&&prev.data.find(prevItem=>(prevItem===null||prevItem===void 0?void 0:prevItem.id)===item.id));});// add the new data to the existing data
return{data:[...prev.data,...filteredData],loading:false};});}).catch(err=>{const errorMessage=(0,common/* handleError */.H4)(err);message/* default */.Ay.error(errorMessage||"Something went wrong");setOrganizations(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{loading:false}));});},[organizationModule]);const handleReportTypeChange=(0,react.useCallback)(reportType=>{setReportType(reportType);if(reportType===ReportType.department&&departments.data.length===0){GetDepartments();}if(reportType===ReportType.organization&&organizations.data.length===0){GetOrganizations();}},[GetDepartments,GetOrganizations,departments.data.length,organizations.data.length]);(0,react.useEffect)(()=>{if(debouncedUsersTerm!==""){GetUsers(debouncedUsersTerm);}},[debouncedUsersTerm]);return/*#__PURE__*/(0,jsx_runtime.jsx)(modal/* default */.A,{title:"Export to Excel",open:isModalOpen,onCancel:()=>setIsModalOpen(false),okText:"Export",okButtonProps:{form:"export_form",htmlType:"submit",loading:isLoading},children:/*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.A,{layout:"vertical",form:form,onFinish:onSubmit,name:"export_form",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"payrollCycleId",requiredMark:"optional",style:{marginBottom:10},rules:[{required:true,message:'Please select a payroll cycle'}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Select/* default */.A,{options:(payrollCycleData===null||payrollCycleData===void 0?void 0:payrollCycleData.filter(ele=>ele.processed).map(item=>({label:"".concat((0,dateHandler/* convertDate */.ic)(item.fromDate,'dd M,yy')," - ").concat((0,dateHandler/* convertDate */.ic)(item.toDate,'dd M,yy')),value:"".concat(item.id)})))||[],label:"Payroll Cycle"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"reportType",requiredMark:"optional",style:{marginBottom:10},rules:[{required:true,message:'Please select a report type'}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Select/* default */.A,{label:"Report Type",options:(0,options/* getOptionsFromEnum */.uf)(ReportType).map(item=>({label:(0,common/* capitalize */.ZH)(item===null||item===void 0?void 0:item.label),value:item===null||item===void 0?void 0:item.value})),value:reportType,onChange:reportType=>handleReportTypeChange(reportType)})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"mt-3",children:[reportType===ReportType.users&&/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"userIds",requiredMark:"optional",rules:[{required:true,message:'Please select a user'}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* SelectWithSearch */.fd,{asterisk:false,label:"Users",loading:users===null||users===void 0?void 0:users.loading,mode:"multiple",options:users===null||users===void 0?void 0:(_users$data=users.data)===null||_users$data===void 0?void 0:_users$data.map(user=>({label:"".concat(user===null||user===void 0?void 0:user.firstName," ").concat(user===null||user===void 0?void 0:user.lastName),value:"".concat(user===null||user===void 0?void 0:user.id)})),onSearch:value=>setUserTerms(value),notFoundDescription:"".concat(usersTerm&&!users.loading?"No employees found, modify your search and try again":"Search for employees to generate report for")})}),reportType===ReportType.department&&/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"departmentId",requiredMark:"optional",rules:[{required:true,message:'Please select a department'}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* SelectWithSearch */.fd,{asterisk:false,label:"Departments",loading:departments===null||departments===void 0?void 0:departments.loading,options:departments===null||departments===void 0?void 0:(_departments$data=departments.data)===null||_departments$data===void 0?void 0:_departments$data.map(department=>({label:department===null||department===void 0?void 0:department.title,value:"".concat(department===null||department===void 0?void 0:department.id)})),onSearch:()=>{}})})]}),reportType===ReportType.organization&&/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"organizationId",requiredMark:"optional",rules:[{required:true,message:'Please select an organization'}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* SelectWithSearch */.fd,{asterisk:false,label:"Organizations",loading:organizations===null||organizations===void 0?void 0:organizations.loading,options:organizations===null||organizations===void 0?void 0:(_organizations$data=organizations.data)===null||_organizations$data===void 0?void 0:_organizations$data.map(organization=>({label:organization===null||organization===void 0?void 0:organization.name,value:"".concat(organization===null||organization===void 0?void 0:organization.id)})),onSearch:()=>{}})})]})});};/* harmony default export */ const Export = (PayrollExport);
;// ./src/Components/Organisms/Dashboard/Payroll/index.tsx
const breadCrumbsData=[{text:"Home",isLink:true,path:"/"},{isLink:false,text:"Payroll"}];function Payroll(){const[excelData,setExcelData]=(0,react.useState)([]);// available permissions for this module
const permissionSlug=(0,common/* getPermissionSlugs */.AH)(Payroll_permissions/* PayrollPermissionsEnum */.r);const{userPermissions}=(0,es/* useSelector */.d4)(state=>state.usersReducer);const permissions=userPermissions;const{readPayroll,updatePayroll,readAllPayroll}=permissions;const[currentEditType,setcurrentEditType]=(0,react.useState)({editType:"new",recordId:0,openModal:false});const[isModalOpen,setIsModalOpen]=(0,react.useState)(false);const module=new PayrollModule();const payrollCycleModule=new PayrollCycle/* PayrollCycleModule */.s();const{data:payrollCycle}=(0,hooks/* useFetchData */.Gs)({method:payrollCycleModule.getAllRecords,initialQuery:{perPage:500}});const[filters,setFilters]=(0,react.useState)({userId:undefined,fromDate:undefined,toDate:undefined,payrollCycleId:undefined,page:1,perPage:10});const{data,onRefresh,setData,loading,meta}=(0,hooks/* useFetchData */.Gs)({method:module.getAllRecords,initialQuery:(0,objectSpread2/* default */.A)({},filters)});const onSelected=event=>{const{name,value}=event.target;const numberValues=[{key:"clientId",name:"Client"},{key:"projectRole",name:"Project Role"}];if(numberValues.some(item=>item.key===name)){const isValidNumber=(0,common/* isNumber */.Et)(value);if(!isValidNumber){var _numberValues$find;message/* default */.Ay.error("".concat((_numberValues$find=numberValues.find(item=>item.key===name))===null||_numberValues$find===void 0?void 0:_numberValues$find.name," should be a number"));return;}}// set the selected value in the state
setFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},filters),{},{[name]:value}));};const[reset,setReset]=(0,react.useState)(false);const onReset=(0,react.useCallback)((name,value)=>{if(name){setReset(true);setFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},filters),{},{[name]:value}));}},[filters]);//   useEffect(() => {
// 	if (reset) {
// 	  onUpdate();
// 	}
// 	// after 2 seconds set reset clicked state to false
// 	const timer = setTimeout(() => {
// 	  setReset(false);
// 	}, 2000);
// 	return () => clearTimeout(timer);
//   }, [reset]);
const onCancelClick=()=>{setcurrentEditType((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},currentEditType),{},{openModal:!currentEditType.openModal,editType:"new"}));};const onEditIconClick=record=>{if(updatePayroll===false){message/* default */.Ay.error("You don't have permission to update this record");return;}setcurrentEditType((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},currentEditType),{},{editType:"edit",recordId:record.id,openModal:true}));};//user search
const[searchTermUser,setSearchTermUser]=(0,react.useState)("");const debouncedSearchTermUser=(0,useDebounce/* useDebounce */.d)(searchTermUser,500);const[users,setUsers]=(0,react.useState)([]);const userModule=(0,react.useMemo)(()=>new User/* UserModule */.U(),[]);const onUserSearch=(0,react.useCallback)(()=>{if(debouncedSearchTermUser){userModule.getAllRecords({name:debouncedSearchTermUser}).then(res=>{setUsers(prev=>{var _res$data,_res$data$data;// if the data is already present in the state, then don't add it again
const filteredData=res===null||res===void 0?void 0:(_res$data=res.data)===null||_res$data===void 0?void 0:(_res$data$data=_res$data.data)===null||_res$data$data===void 0?void 0:_res$data$data.filter(item=>{return!(prev!==null&&prev!==void 0&&prev.find(prevItem=>prevItem.id===item.id));});// add the new data to the existing data
return[...prev,...filteredData];});}).catch(err=>{message/* default */.Ay.error(err.response.data.message);});}else if(filters.userId){userModule.getRecordById(filters.userId).then(res=>{var _res$data2;setUsers([res===null||res===void 0?void 0:(_res$data2=res.data)===null||_res$data2===void 0?void 0:_res$data2.data]);}).catch(err=>{message/* default */.Ay.error(err.response.data.message);});}},[debouncedSearchTermUser]);(0,react.useEffect)(()=>{onUserSearch();},[onUserSearch,filters.userId]);//excel
const getExcelData=(0,react.useCallback)(()=>{if(data&&data.length>0){const _data=data===null||data===void 0?void 0:data.map(item=>{return{date:(0,dateHandler/* convertDate */.ic)(item.addedDate,"dd M,yy"),employee:item.User.firstName+" "+item.User.lastName,fromDate:(0,dateHandler/* convertDate */.ic)(item.PayrollCycle.fromDate,"dd M,yy"),toDate:(0,dateHandler/* convertDate */.ic)(item.PayrollCycle.toDate,"dd M,yy"),status:item.paid?"Paid":"Not paid",totalWorkingDays:item.totalWorkingDays,totalDaysWorked:item.totalDaysWorked,totalLates:item.totalLates,totalIncompletes:item.totalIncompletes,totalAbsences:item.totalAbsences,toBeDeductedFromLeaveCredits:item.toBeDeductedFromLeaveCredits,toBeDeductedFromCurrentSalary:item.toBeDeductedFromCurrentSalary,salaryAmount:item.salaryAmount,manualCorrection:item.manualCorrection,otherAmount:item.otherAmount,totalDeduction:item.totalDeduction,totalReceivable:item.totalReceivable};});setExcelData(_data);}},[data]);(0,react.useEffect)(()=>{getExcelData();},[getExcelData]);// headers for the excel export
const headers=[{label:"Date",key:"date"},{label:"Employee",key:"employee"},{label:"From Date",key:"fromDate"},{label:"To Date",key:"toDate"},{label:"Status",key:"status"},{label:"Working Days",key:"totalWorkingDays"},{label:"Days Worked",key:"totalDaysWorked"},{label:"Lates",key:"totalLates"},{label:"Incomplete Days",key:"totalIncompletes"},{label:"Absences",key:"totalAbsences"},{label:"Deducted From Leave Credits",key:"toBeDeductedFromLeaveCredits"},{label:"Deducted From Current Salary",key:"toBeDeductedFromCurrentSalary"},{label:"Salary",key:"salaryAmount"},{label:"Manual Correction",key:"manualCorrection"},{label:"Other Amount",key:"otherAmount"},{label:"Total Deduction",key:"totalDeduction"},{label:"Receivable",key:"totalReceivable"}];return/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.A,{permissionSlug:permissionSlug,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* PageHeader */.zY,{heading:"Payroll"// buttonText="Add Payroll"
// onButtonClick={onCancelClick}
,breadCrumbData:breadCrumbsData// showAdd={createPayroll === true ? true : false}
,excelExport:/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.A,{style:{marginRight:15,display:"flex",alignItems:"center"},onClick:()=>setIsModalOpen(true),icon:/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"none",viewBox:"0 0 24 24",className:"mr-1",children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{fill:"#42526E",d:"M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zm1.06 10.33c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9.31l-7.72 7.72c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 010-1.06l7.72-7.72h-3.02c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.83c.41 0 .75.34.75.75v4.83z"})}),children:"Export to Excel"}),filters:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[readAllPayroll&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.A,{allowClear:true,placeholder:"Search for the employee",className:"selectAntdCustom",onChange:value=>{const _temp=(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},filters),{},{userId:value});setFilters(_temp);onRefresh(_temp);},value:filters.userId?filters.userId:undefined,showSearch:true,onSearch:value=>setSearchTermUser(value),optionFilterProp:"label",options:users===null||users===void 0?void 0:users.map(item=>{return{label:item.firstName+" "+item.lastName,value:item.id};}),notFoundContent:/*#__PURE__*/(0,jsx_runtime.jsx)(empty/* default */.A,{image:"https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg",imageStyle:{height:100},description:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:"No data found, Please search for the employee"})})})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.A,{options:(payrollCycle===null||payrollCycle===void 0?void 0:payrollCycle.map(state=>({label:"".concat((0,dateHandler/* convertDate */.ic)(state.fromDate,'dd M,yy')," - ").concat((0,dateHandler/* convertDate */.ic)(state.toDate,'dd M,yy')),value:"".concat(state.id)})))||[],placeholder:"Payroll Cycle",showSearch:true,allowClear:true,optionFilterProp:"label",style:{width:"200px"},className:"selectAntdCustom",onClear:()=>{const _temp=(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},filters),{},{payrollCycleId:undefined});setFilters(_temp);onRefresh(_temp);},onSelect:value=>{const _temp=(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},filters),{},{payrollCycleId:value});setFilters(_temp);onRefresh(_temp);}})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"datepicker",label:"Date",name:"dateRange",onChange:values=>{var _values$,_values$$_d,_values$2,_values$2$_d;const _temp=(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},filters),{},{fromDate:values?(_values$=values[0])===null||_values$===void 0?void 0:(_values$$_d=_values$._d)===null||_values$$_d===void 0?void 0:_values$$_d.toISOString().substring(0,10):undefined,toDate:values?(_values$2=values[1])===null||_values$2===void 0?void 0:(_values$2$_d=_values$2._d)===null||_values$2$_d===void 0?void 0:_values$2$_d.toISOString().substring(0,10):undefined});setFilters(_temp);},onReset:()=>{const _temp=(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},filters),{},{fromDate:undefined,toDate:undefined});setFilters(_temp);onRefresh(_temp);},onUpdate:()=>onRefresh(filters)})]})}),readPayroll===true&&data&&/*#__PURE__*/(0,jsx_runtime.jsx)(TableComponentPayroll,{tableData:data,tableLoading:loading,onEditIconClick:onEditIconClick,reloadTableData:onRefresh,meta:meta,filters:filters}),readPayroll===false&&/*#__PURE__*/(0,jsx_runtime.jsx)(ErrorCodes/* ErrorCode403 */.$t,{mainMessage:"You don't have permission to view this data"}),currentEditType.openModal&&/*#__PURE__*/(0,jsx_runtime.jsx)(PayrollModal,{record:currentEditType.recordId,type:currentEditType.editType,reloadTableData:onRefresh,onCancel:onCancelClick,openModal:currentEditType.openModal,permissions:permissions}),isModalOpen&&/*#__PURE__*/(0,jsx_runtime.jsx)(Export,{isModalOpen:isModalOpen,setIsModalOpen:setIsModalOpen})]});}/* harmony default export */ const Dashboard_Payroll = (Payroll);

/***/ }),

/***/ 33965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ AttendanceModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
class AttendanceModule{constructor(){this.endPoint="attendance";/**Get all Attendance records
     * @param query - query params
     */this.getAllRecords=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint,{params:query});};/**Get Attendance record by id
     * @param id - Attendance id
     */this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/").concat(id));};/**Get Attendance record by id
     * @param id - Attendance id
     */this.getUserAttendance=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint+"/getUserAttendance",{params:query});};/**Get Attendance record by id
     * @param id - Attendance id
     */this.findUserAttendanceForPayroll=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint+"/findUserAttendanceForPayroll",{params:query});};/**Find published Attendance records
     * @param query - query params
     */this.findPublished=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/published"),{params:query});};/**Delete Attendance record
    * @param id - Attendance id
    */this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete("".concat(this.endPoint,"/").concat(id));};/**Create new Attendance record
     * @param data - Attendance data
     */this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(this.endPoint,data);};/**Update Attendance record
    * @param data - Attendance data
    * @param id - Attendance id
    */this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/").concat(id),data);};this.generateReport=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post("".concat(this.endPoint,"/generateReport"),data,{responseType:'blob'});};}}

/***/ }),

/***/ 98924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ DepartmentModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
class DepartmentModule{constructor(){this.endPoint="department";this.getAllRecords=queryData=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint,{params:queryData});};this.getAllPublishedRecords=queryData=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint+"/find-published",{params:queryData});};this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint+"/"+id);};this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete(this.endPoint+"/"+id);};this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(this.endPoint,data);};this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch(this.endPoint+"/"+id,data);};}}

/***/ }),

/***/ 42361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ OrganizationModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
/* harmony import */ var _modules_Common_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21073);
class OrganizationModule{constructor(){this.endPoint="organization";/**Get all organization records
     * @param query - query params
     */this.getAllRecords=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint,{params:query});};/**Get all organization records
     * @param query - query params
     */this.findPublished=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint+"/find-published",{params:query});};/**Get organization record by id
     * @param id - organization id
     */this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/").concat(id));};/**Delete organization record
    * @param id - organization id
    */this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete("".concat(this.endPoint,"/").concat(id));};/**Create new organization record
     * @param data - organization data
     */this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(this.endPoint,data,{headers:_modules_Common_config__WEBPACK_IMPORTED_MODULE_1__/* .FormDataHeader */ .Y});};/**Update organization record
    * @param data - organization data
    * @param id - organization id
    */this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/").concat(id),data,{headers:_modules_Common_config__WEBPACK_IMPORTED_MODULE_1__/* .FormDataHeader */ .Y});};this.getTenants=()=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("xero/getTenants");};}}

/***/ }),

/***/ 86735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ PayrollCycleModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
class PayrollCycleModule{constructor(){this.endPoint="payroll-cycle";/**Get all Biometric records
	 * @param query - query params
	 */this.getAllRecords=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint,{params:query});};this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* .BASE_URL */ .C+this.endPoint+"/"+id);};this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* .BASE_URL */ .C+this.endPoint+"/"+id);};this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* .BASE_URL */ .C+this.endPoint,data);};this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* .BASE_URL */ .C+this.endPoint+"/"+id,data);};this.processRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* .BASE_URL */ .C+this.endPoint+"/process/"+id);};}}

/***/ }),

/***/ 59179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fq: () => (/* binding */ TransactionStatusOptions),
/* harmony export */   GV: () => (/* binding */ ClientStatusOptions),
/* harmony export */   jD: () => (/* binding */ QuotationTypeOptions),
/* harmony export */   ln: () => (/* binding */ FinanceStatusOptions),
/* harmony export */   uf: () => (/* binding */ getOptionsFromEnum),
/* harmony export */   yB: () => (/* binding */ PaymentScheduleOptions)
/* harmony export */ });
/* harmony import */ var _commonEnums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2360);
/** Used to get options from enum object */const getOptionsFromEnum=enumObject=>{const enumEntries=Object.entries(enumObject);const options=enumEntries.filter(_ref=>{let[key]=_ref;return isNaN(Number(key));}).map(_ref2=>{let[key,value]=_ref2;return{label:key,value:value};});return options;};/** Finance Status Options */const FinanceStatusOptions=getOptionsFromEnum(_commonEnums__WEBPACK_IMPORTED_MODULE_0__/* .PermitFinanceStatus */ .cY);/** Client Status Options */const ClientStatusOptions=getOptionsFromEnum(_commonEnums__WEBPACK_IMPORTED_MODULE_0__/* .PermitClientStatus */ .Vn);/** Government Transaction Status Options */const TransactionStatusOptions=getOptionsFromEnum(_commonEnums__WEBPACK_IMPORTED_MODULE_0__/* .TransactionStatus */ .x8);/** Quotation Type Options */const QuotationTypeOptions=getOptionsFromEnum(_commonEnums__WEBPACK_IMPORTED_MODULE_0__/* .QuotationTypeEnum */ .eE);/** Supervision Payment Schedule Options */const PaymentScheduleOptions=getOptionsFromEnum(_commonEnums__WEBPACK_IMPORTED_MODULE_0__/* .SupervisionPaymentSchedule */ .ve);

/***/ }),

/***/ 36140:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _wrapRegExp)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82284);
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63662);
/* harmony import */ var _inherits_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85501);



function _wrapRegExp() {
  _wrapRegExp = function _wrapRegExp(e, r) {
    return new BabelRegExp(e, void 0, r);
  };
  var e = RegExp.prototype,
    r = new WeakMap();
  function BabelRegExp(e, t, p) {
    var o = RegExp(e, t);
    return r.set(o, p || r.get(e)), (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(o, BabelRegExp.prototype);
  }
  function buildGroups(e, t) {
    var p = r.get(t);
    return Object.keys(p).reduce(function (r, t) {
      var o = p[t];
      if ("number" == typeof o) r[t] = e[o];else {
        for (var i = 0; void 0 === e[o[i]] && i + 1 < o.length;) i++;
        r[t] = e[o[i]];
      }
      return r;
    }, Object.create(null));
  }
  return (0,_inherits_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function (r) {
    var t = e.exec.call(this, r);
    if (t) {
      t.groups = buildGroups(t, this);
      var p = t.indices;
      p && (p.groups = buildGroups(p, this));
    }
    return t;
  }, BabelRegExp.prototype[Symbol.replace] = function (t, p) {
    if ("string" == typeof p) {
      var o = r.get(this);
      return e[Symbol.replace].call(this, t, p.replace(/\$<([^>]+)>/g, function (e, r) {
        var t = o[r];
        return "$" + (Array.isArray(t) ? t.join("$") : t);
      }));
    }
    if ("function" == typeof p) {
      var i = this;
      return e[Symbol.replace].call(this, t, function () {
        var e = arguments;
        return "object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(e[e.length - 1]) && (e = [].slice.call(e)).push(buildGroups(e, i)), p.apply(this, e);
      });
    }
    return e[Symbol.replace].call(this, t, p);
  }, _wrapRegExp.apply(this, arguments);
}


/***/ })

}]);