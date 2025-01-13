"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[6524],{

/***/ 38714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9950);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2557);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52765);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57811);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80737);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73022);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28662);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44414);
const MoreCustomFilters=_ref=>{let{options,onChange,value}=_ref;const[visible,setVisible]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);const overlay=/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"pa-3",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.Group,{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.checkboxGroup,options:options,onChange:value=>{onChange(value);setVisible(false);},value:value})})});return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,{trigger:['click'],open:visible,onOpenChange:visible=>setVisible(visible),dropdownRender:()=>overlay,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.label,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:"More Filters"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,{})]})})})});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MoreCustomFilters);

/***/ }),

/***/ 83584:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ CountryModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
/* harmony import */ var _Common_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21073);
class CountryModule{constructor(){this.endPoint="country";this.allEndpoint="country/all";this.getAllRecords=()=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.allEndpoint);};this.getAvailableRecords=()=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/available-country"));};this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/").concat(id));};this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete("".concat(this.endPoint,"/").concat(id));};this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(this.endPoint+"/",data,{headers:_Common_config__WEBPACK_IMPORTED_MODULE_1__/* .FormDataHeader */ .Y});};this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/").concat(id),data,{headers:_Common_config__WEBPACK_IMPORTED_MODULE_1__/* .FormDataHeader */ .Y});};}}

/***/ }),

/***/ 81471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ EnquiryModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
/* harmony import */ var _modules_Common_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21073);
class EnquiryModule{constructor(){this.endPoint="enquiry";/**Get all enquiry records
     * @param query - query params
     */this.getAllRecords=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint,{params:query});};/**Get enquiry record by id
     * @param id - enquiry id
     */this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/find/").concat(id));};/**Find Duplicate Company
     * @param id - enquiry id
     */this.findDuplicateCompany=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/findDuplicateCompany/").concat(id));};/**Create new enquiry record
     * @param data - enquiry data
     */this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(this.endPoint,data);};/**Auto Create Lead
     * @param data - lead data
     */this.autoCreateLead=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(this.endPoint+"/autoCreateLeadFromEnquiry",data);};/**Update enquiry record
     * @param data - enquiry data
     * @param id - enquiry id
     */this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/update/").concat(id),data);};/**Change enquiry status
     * @param id - enquiry id
     * @param status - enquiry status
     */this.changeStatus=(id,status)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/changeStatus/").concat(id),{status});};/**Get enquiry logs
     * @param id - enquiry id
     * @param query - query params
     */this.getLogsById=(id,query)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/logs/").concat(id),{params:query});};/**Add note to enquiry
     * @param id - enquiry id
     * @param data - note data
     * @property `data.note` - note text
     * @property `data.isConcern` - is concern note
     */this.addNote=(id,data)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post("".concat(this.endPoint,"/addNote/").concat(id),data);};/** Get Note by id 
     * @param id - note id
    */this.getNoteById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/notes/").concat(id));};/**Assign Lead
     * @param data.assignedToId - user id
     * @param id - enquiry id
     */this.assignLead=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/assignLead/").concat(id),data);};/**Assign Enquiry to a user
     * @param data.assignedToId - user id
     * @param id - enquiry id
     */this.assignEnquiry=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/assignEnquiry/").concat(id),data);};/**Delete enquiry record
     * @param id - enquiry id
     */this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete("".concat(this.endPoint,"/remove/").concat(id));};/**Remove note from enquiry
     * @param id - Note id
     */this.removeNote=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete("".concat(this.endPoint,"/removeNote/").concat(id));};/** Upload enquiry file
     * @property `file` - file to upload
     * @property `enquiryId` - enquiry id
     */this.uploadFile=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post("".concat(this.endPoint,"/uploadEnquiryDocuments"),data,{headers:_modules_Common_config__WEBPACK_IMPORTED_MODULE_1__/* .FormDataHeader */ .Y});};/** Remove enquiry file by id
     * @param id - file id
     */this.removeFile=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete("".concat(this.endPoint,"/removeDocument/").concat(id));};/**Mark Concern As Resolved
     * @param id - note id
     */this.markConcernAsResolved=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/markConcernAsResolved/").concat(id));};/** Get Enquiry Statuses Total Counts */this.getCounts=()=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/getCounts"));};}}

/***/ }),

/***/ 12975:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ ProjectTypeModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
class ProjectTypeModule{constructor(){this.endPoint="project-type";/**Get all project type records
  * @param query - query params
  */this.getAllRecords=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint,{params:query});};/**Get all publish project type records
  * @param query - query params
  */this.getPublishRecords=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/find-published"),{params:query});};/**Get project type record by id
  * @param id - project type id
  */this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint+"/"+id);};this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete(this.endPoint+"/"+id);};this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(this.endPoint,data);};this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch(this.endPoint+"/"+id,data);};}}

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

/***/ 29008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58168);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9950);
/* harmony import */ var _ant_design_icons_svg_es_asn_LoadingOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21293);
/* harmony import */ var _components_AntdIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61187);

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var LoadingOutlined = function LoadingOutlined(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_AntdIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({}, props, {
    ref: ref,
    icon: _ant_design_icons_svg_es_asn_LoadingOutlined__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A
  }));
};
if (false) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(LoadingOutlined));

/***/ }),

/***/ 84649:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ segmented)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(64467);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(82284);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(48383);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(5544);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(80045);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useMergedState.js
var useMergedState = __webpack_require__(71207);
// EXTERNAL MODULE: ./node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(41929);
// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__(15207);
// EXTERNAL MODULE: ./node_modules/rc-motion/es/index.js + 12 modules
var es = __webpack_require__(87418);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useLayoutEffect.js
var useLayoutEffect = __webpack_require__(13511);
;// ./node_modules/rc-segmented/es/MotionThumb.js







var calcThumbStyle = function calcThumbStyle(targetElement) {
  return targetElement ? {
    left: targetElement.offsetLeft,
    right: targetElement.parentElement.clientWidth - targetElement.clientWidth - targetElement.offsetLeft,
    width: targetElement.clientWidth
  } : null;
};
var toPX = function toPX(value) {
  return value !== undefined ? "".concat(value, "px") : undefined;
};
function MotionThumb(props) {
  var prefixCls = props.prefixCls,
    containerRef = props.containerRef,
    value = props.value,
    getValueIndex = props.getValueIndex,
    motionName = props.motionName,
    onMotionStart = props.onMotionStart,
    onMotionEnd = props.onMotionEnd,
    direction = props.direction;
  var thumbRef = react.useRef(null);
  var _React$useState = react.useState(value),
    _React$useState2 = (0,slicedToArray/* default */.A)(_React$useState, 2),
    prevValue = _React$useState2[0],
    setPrevValue = _React$useState2[1];

  // =========================== Effect ===========================
  var findValueElement = function findValueElement(val) {
    var _containerRef$current;
    var index = getValueIndex(val);
    var ele = (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.querySelectorAll(".".concat(prefixCls, "-item"))[index];
    return (ele === null || ele === void 0 ? void 0 : ele.offsetParent) && ele;
  };
  var _React$useState3 = react.useState(null),
    _React$useState4 = (0,slicedToArray/* default */.A)(_React$useState3, 2),
    prevStyle = _React$useState4[0],
    setPrevStyle = _React$useState4[1];
  var _React$useState5 = react.useState(null),
    _React$useState6 = (0,slicedToArray/* default */.A)(_React$useState5, 2),
    nextStyle = _React$useState6[0],
    setNextStyle = _React$useState6[1];
  (0,useLayoutEffect/* default */.A)(function () {
    if (prevValue !== value) {
      var prev = findValueElement(prevValue);
      var next = findValueElement(value);
      var calcPrevStyle = calcThumbStyle(prev);
      var calcNextStyle = calcThumbStyle(next);
      setPrevValue(value);
      setPrevStyle(calcPrevStyle);
      setNextStyle(calcNextStyle);
      if (prev && next) {
        onMotionStart();
      } else {
        onMotionEnd();
      }
    }
  }, [value]);
  var thumbStart = react.useMemo(function () {
    return direction === 'rtl' ? toPX(-(prevStyle === null || prevStyle === void 0 ? void 0 : prevStyle.right)) : toPX(prevStyle === null || prevStyle === void 0 ? void 0 : prevStyle.left);
  }, [direction, prevStyle]);
  var thumbActive = react.useMemo(function () {
    return direction === 'rtl' ? toPX(-(nextStyle === null || nextStyle === void 0 ? void 0 : nextStyle.right)) : toPX(nextStyle === null || nextStyle === void 0 ? void 0 : nextStyle.left);
  }, [direction, nextStyle]);

  // =========================== Motion ===========================
  var onAppearStart = function onAppearStart() {
    return {
      transform: "translateX(var(--thumb-start-left))",
      width: "var(--thumb-start-width)"
    };
  };
  var onAppearActive = function onAppearActive() {
    return {
      transform: "translateX(var(--thumb-active-left))",
      width: "var(--thumb-active-width)"
    };
  };
  var onAppearEnd = function onAppearEnd() {
    setPrevStyle(null);
    setNextStyle(null);
    onMotionEnd();
  };

  // =========================== Render ===========================
  // No need motion when nothing exist in queue
  if (!prevStyle || !nextStyle) {
    return null;
  }
  return /*#__PURE__*/react.createElement(es/* default */.Ay, {
    visible: true,
    motionName: motionName,
    motionAppear: true,
    onAppearStart: onAppearStart,
    onAppearActive: onAppearActive,
    onAppearEnd: onAppearEnd
  }, function (_ref, ref) {
    var motionClassName = _ref.className,
      motionStyle = _ref.style;
    var mergedStyle = (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, motionStyle), {}, {
      '--thumb-start-left': thumbStart,
      '--thumb-start-width': toPX(prevStyle === null || prevStyle === void 0 ? void 0 : prevStyle.width),
      '--thumb-active-left': thumbActive,
      '--thumb-active-width': toPX(nextStyle === null || nextStyle === void 0 ? void 0 : nextStyle.width)
    });

    // It's little ugly which should be refactor when @umi/test update to latest jsdom
    var motionProps = {
      ref: (0,es_ref/* composeRef */.K4)(thumbRef, ref),
      style: mergedStyle,
      className: classnames_default()("".concat(prefixCls, "-thumb"), motionClassName)
    };
    if (false) {}
    return /*#__PURE__*/react.createElement("div", motionProps);
  });
}
;// ./node_modules/rc-segmented/es/index.js






var _excluded = ["prefixCls", "direction", "options", "disabled", "defaultValue", "value", "onChange", "className", "motionName"];






function getValidTitle(option) {
  if (typeof option.title !== 'undefined') {
    return option.title;
  }

  // read `label` when title is `undefined`
  if ((0,esm_typeof/* default */.A)(option.label) !== 'object') {
    var _option$label;
    return (_option$label = option.label) === null || _option$label === void 0 ? void 0 : _option$label.toString();
  }
}
function normalizeOptions(options) {
  return options.map(function (option) {
    if ((0,esm_typeof/* default */.A)(option) === 'object' && option !== null) {
      var validTitle = getValidTitle(option);
      return (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, option), {}, {
        title: validTitle
      });
    }
    return {
      label: option === null || option === void 0 ? void 0 : option.toString(),
      title: option === null || option === void 0 ? void 0 : option.toString(),
      value: option
    };
  });
}
var InternalSegmentedOption = function InternalSegmentedOption(_ref) {
  var prefixCls = _ref.prefixCls,
    className = _ref.className,
    disabled = _ref.disabled,
    checked = _ref.checked,
    label = _ref.label,
    title = _ref.title,
    value = _ref.value,
    onChange = _ref.onChange;
  var handleChange = function handleChange(event) {
    if (disabled) {
      return;
    }
    onChange(event, value);
  };
  return /*#__PURE__*/react.createElement("label", {
    className: classnames_default()(className, (0,defineProperty/* default */.A)({}, "".concat(prefixCls, "-item-disabled"), disabled))
  }, /*#__PURE__*/react.createElement("input", {
    className: "".concat(prefixCls, "-item-input"),
    type: "radio",
    disabled: disabled,
    checked: checked,
    onChange: handleChange
  }), /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-item-label"),
    title: title
  }, label));
};
var Segmented = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _segmentedOptions$, _classNames2;
  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-segmented' : _props$prefixCls,
    direction = props.direction,
    options = props.options,
    disabled = props.disabled,
    defaultValue = props.defaultValue,
    value = props.value,
    onChange = props.onChange,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$motionName = props.motionName,
    motionName = _props$motionName === void 0 ? 'thumb-motion' : _props$motionName,
    restProps = (0,objectWithoutProperties/* default */.A)(props, _excluded);
  var containerRef = react.useRef(null);
  var mergedRef = react.useMemo(function () {
    return (0,es_ref/* composeRef */.K4)(containerRef, ref);
  }, [containerRef, ref]);
  var segmentedOptions = react.useMemo(function () {
    return normalizeOptions(options);
  }, [options]);

  // Note: We should not auto switch value when value not exist in options
  // which may break single source of truth.
  var _useMergedState = (0,useMergedState/* default */.A)((_segmentedOptions$ = segmentedOptions[0]) === null || _segmentedOptions$ === void 0 ? void 0 : _segmentedOptions$.value, {
      value: value,
      defaultValue: defaultValue
    }),
    _useMergedState2 = (0,slicedToArray/* default */.A)(_useMergedState, 2),
    rawValue = _useMergedState2[0],
    setRawValue = _useMergedState2[1];

  // ======================= Change ========================
  var _React$useState = react.useState(false),
    _React$useState2 = (0,slicedToArray/* default */.A)(_React$useState, 2),
    thumbShow = _React$useState2[0],
    setThumbShow = _React$useState2[1];
  var handleChange = function handleChange(event, val) {
    if (disabled) {
      return;
    }
    setRawValue(val);
    onChange === null || onChange === void 0 ? void 0 : onChange(val);
  };
  var divProps = (0,omit/* default */.A)(restProps, ['children']);
  return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.A)({}, divProps, {
    className: classnames_default()(prefixCls, (_classNames2 = {}, (0,defineProperty/* default */.A)(_classNames2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0,defineProperty/* default */.A)(_classNames2, "".concat(prefixCls, "-disabled"), disabled), _classNames2), className),
    ref: mergedRef
  }), /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-group")
  }, /*#__PURE__*/react.createElement(MotionThumb, {
    prefixCls: prefixCls,
    value: rawValue,
    containerRef: containerRef,
    motionName: "".concat(prefixCls, "-").concat(motionName),
    direction: direction,
    getValueIndex: function getValueIndex(val) {
      return segmentedOptions.findIndex(function (n) {
        return n.value === val;
      });
    },
    onMotionStart: function onMotionStart() {
      setThumbShow(true);
    },
    onMotionEnd: function onMotionEnd() {
      setThumbShow(false);
    }
  }), segmentedOptions.map(function (segmentedOption) {
    return /*#__PURE__*/react.createElement(InternalSegmentedOption, (0,esm_extends/* default */.A)({
      key: segmentedOption.value,
      prefixCls: prefixCls,
      className: classnames_default()(segmentedOption.className, "".concat(prefixCls, "-item"), (0,defineProperty/* default */.A)({}, "".concat(prefixCls, "-item-selected"), segmentedOption.value === rawValue && !thumbShow)),
      checked: segmentedOption.value === rawValue,
      onChange: handleChange
    }, segmentedOption, {
      disabled: !!disabled || !!segmentedOption.disabled
    }));
  })));
});
Segmented.displayName = 'Segmented';
Segmented.defaultProps = {
  options: []
};
/* harmony default export */ const rc_segmented_es = (Segmented);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(5741);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/SizeContext.js
var SizeContext = __webpack_require__(87126);
;// ./node_modules/antd/es/segmented/index.js



var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





function isSegmentedLabeledOptionWithIcon(option) {
  return (0,esm_typeof/* default */.A)(option) === 'object' && !!(option === null || option === void 0 ? void 0 : option.icon);
}
var segmented_Segmented = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _classNames;
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    block = props.block,
    _props$options = props.options,
    options = _props$options === void 0 ? [] : _props$options,
    _props$size = props.size,
    customSize = _props$size === void 0 ? 'middle' : _props$size,
    restProps = __rest(props, ["prefixCls", "className", "block", "options", "size"]);
  var _React$useContext = react.useContext(context/* ConfigContext */.QO),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var prefixCls = getPrefixCls('segmented', customizePrefixCls);
  // ===================== Size =====================
  var size = react.useContext(SizeContext/* default */.A);
  var mergedSize = customSize || size;
  // syntactic sugar to support `icon` for Segmented Item
  var extendedOptions = react.useMemo(function () {
    return options.map(function (option) {
      if (isSegmentedLabeledOptionWithIcon(option)) {
        var icon = option.icon,
          label = option.label,
          restOption = __rest(option, ["icon", "label"]);
        return (0,esm_extends/* default */.A)((0,esm_extends/* default */.A)({}, restOption), {
          label: /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("span", {
            className: "".concat(prefixCls, "-item-icon")
          }, icon), label && /*#__PURE__*/react.createElement("span", null, label))
        });
      }
      return option;
    });
  }, [options, prefixCls]);
  return /*#__PURE__*/react.createElement(rc_segmented_es, (0,esm_extends/* default */.A)({}, restProps, {
    className: classnames_default()(className, (_classNames = {}, (0,defineProperty/* default */.A)(_classNames, "".concat(prefixCls, "-block"), block), (0,defineProperty/* default */.A)(_classNames, "".concat(prefixCls, "-sm"), mergedSize === 'small'), (0,defineProperty/* default */.A)(_classNames, "".concat(prefixCls, "-lg"), mergedSize === 'large'), _classNames)),
    options: extendedOptions,
    ref: ref,
    prefixCls: prefixCls,
    direction: direction
  }));
});
if (false) {}
/* harmony default export */ const segmented = (segmented_Segmented);

/***/ })

}]);