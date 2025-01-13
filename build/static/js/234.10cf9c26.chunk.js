(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[234],{

/***/ 41834:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


// This icon file is generated automatically.
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var ArrowLeftOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"
      }
    }]
  },
  "name": "arrow-left",
  "theme": "outlined"
};
exports["default"] = ArrowLeftOutlined;

/***/ }),

/***/ 40445:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


// This icon file is generated automatically.
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var ArrowRightOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"
      }
    }]
  },
  "name": "arrow-right",
  "theme": "outlined"
};
exports["default"] = ArrowRightOutlined;

/***/ }),

/***/ 9760:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _ArrowLeftOutlined = _interopRequireDefault(__webpack_require__(5945));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}
var _default = _ArrowLeftOutlined;
exports["default"] = _default;
module.exports = _default;

/***/ }),

/***/ 33995:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _ArrowRightOutlined = _interopRequireDefault(__webpack_require__(24720));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}
var _default = _ArrowRightOutlined;
exports["default"] = _default;
module.exports = _default;

/***/ }),

/***/ 46953:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(24994);
var _typeof = __webpack_require__(73738);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(94634));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(85715));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(43693));
var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(91847));
var React = _interopRequireWildcard(__webpack_require__(9950));
var _classnames = _interopRequireDefault(__webpack_require__(48383));
var _colors = __webpack_require__(53321);
var _Context = _interopRequireDefault(__webpack_require__(59112));
var _IconBase = _interopRequireDefault(__webpack_require__(44859));
var _twoTonePrimaryColor = __webpack_require__(46720);
var _utils = __webpack_require__(31683);
var _excluded = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
// Initial setting
// should move it to antd main repo?
(0, _twoTonePrimaryColor.setTwoToneColor)(_colors.blue.primary);

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/34757#issuecomment-488848720

var Icon = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames;
  var className = props.className,
    icon = props.icon,
    spin = props.spin,
    rotate = props.rotate,
    tabIndex = props.tabIndex,
    onClick = props.onClick,
    twoToneColor = props.twoToneColor,
    restProps = (0, _objectWithoutProperties2.default)(props, _excluded);
  var _React$useContext = React.useContext(_Context.default),
    _React$useContext$pre = _React$useContext.prefixCls,
    prefixCls = _React$useContext$pre === void 0 ? 'anticon' : _React$useContext$pre,
    rootClassName = _React$useContext.rootClassName;
  var classString = (0, _classnames.default)(rootClassName, prefixCls, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-").concat(icon.name), !!icon.name), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-spin"), !!spin || icon.name === 'loading'), _classNames), className);
  var iconTabIndex = tabIndex;
  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }
  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : undefined;
  var _normalizeTwoToneColo = (0, _utils.normalizeTwoToneColors)(twoToneColor),
    _normalizeTwoToneColo2 = (0, _slicedToArray2.default)(_normalizeTwoToneColo, 2),
    primaryColor = _normalizeTwoToneColo2[0],
    secondaryColor = _normalizeTwoToneColo2[1];
  return /*#__PURE__*/React.createElement("span", (0, _extends2.default)({
    role: "img",
    "aria-label": icon.name
  }, restProps, {
    ref: ref,
    tabIndex: iconTabIndex,
    onClick: onClick,
    className: classString
  }), /*#__PURE__*/React.createElement(_IconBase.default, {
    icon: icon,
    primaryColor: primaryColor,
    secondaryColor: secondaryColor,
    style: svgStyle
  }));
});
Icon.displayName = 'AntdIcon';
Icon.getTwoToneColor = _twoTonePrimaryColor.getTwoToneColor;
Icon.setTwoToneColor = _twoTonePrimaryColor.setTwoToneColor;
var _default = Icon;
exports["default"] = _default;

/***/ }),

/***/ 59112:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = __webpack_require__(9950);
var IconContext = /*#__PURE__*/(0, _react.createContext)({});
var _default = IconContext;
exports["default"] = _default;

/***/ }),

/***/ 44859:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(24994);
var _typeof = __webpack_require__(73738);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(91847));
var _objectSpread2 = _interopRequireDefault(__webpack_require__(12897));
var React = _interopRequireWildcard(__webpack_require__(9950));
var _utils = __webpack_require__(31683);
var _excluded = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"];
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
var twoToneColorPalette = {
  primaryColor: '#333',
  secondaryColor: '#E6E6E6',
  calculated: false
};
function setTwoToneColors(_ref) {
  var primaryColor = _ref.primaryColor,
    secondaryColor = _ref.secondaryColor;
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor = secondaryColor || (0, _utils.getSecondaryColor)(primaryColor);
  twoToneColorPalette.calculated = !!secondaryColor;
}
function getTwoToneColors() {
  return (0, _objectSpread2.default)({}, twoToneColorPalette);
}
var IconBase = function IconBase(props) {
  var icon = props.icon,
    className = props.className,
    onClick = props.onClick,
    style = props.style,
    primaryColor = props.primaryColor,
    secondaryColor = props.secondaryColor,
    restProps = (0, _objectWithoutProperties2.default)(props, _excluded);
  var svgRef = React.useRef();
  var colors = twoToneColorPalette;
  if (primaryColor) {
    colors = {
      primaryColor: primaryColor,
      secondaryColor: secondaryColor || (0, _utils.getSecondaryColor)(primaryColor)
    };
  }
  (0, _utils.useInsertStyles)(svgRef);
  (0, _utils.warning)((0, _utils.isIconDefinition)(icon), "icon should be icon definiton, but got ".concat(icon));
  if (!(0, _utils.isIconDefinition)(icon)) {
    return null;
  }
  var target = icon;
  if (target && typeof target.icon === 'function') {
    target = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, target), {}, {
      icon: target.icon(colors.primaryColor, colors.secondaryColor)
    });
  }
  return (0, _utils.generate)(target.icon, "svg-".concat(target.name), (0, _objectSpread2.default)((0, _objectSpread2.default)({
    className: className,
    onClick: onClick,
    style: style,
    'data-icon': target.name,
    width: '1em',
    height: '1em',
    fill: 'currentColor',
    'aria-hidden': 'true'
  }, restProps), {}, {
    ref: svgRef
  }));
};
IconBase.displayName = 'IconReact';
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;
var _default = IconBase;
exports["default"] = _default;

/***/ }),

/***/ 46720:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(24994);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getTwoToneColor = getTwoToneColor;
exports.setTwoToneColor = setTwoToneColor;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(85715));
var _IconBase = _interopRequireDefault(__webpack_require__(44859));
var _utils = __webpack_require__(31683);
function setTwoToneColor(twoToneColor) {
  var _normalizeTwoToneColo = (0, _utils.normalizeTwoToneColors)(twoToneColor),
    _normalizeTwoToneColo2 = (0, _slicedToArray2.default)(_normalizeTwoToneColo, 2),
    primaryColor = _normalizeTwoToneColo2[0],
    secondaryColor = _normalizeTwoToneColo2[1];
  return _IconBase.default.setTwoToneColors({
    primaryColor: primaryColor,
    secondaryColor: secondaryColor
  });
}
function getTwoToneColor() {
  var colors = _IconBase.default.getTwoToneColors();
  if (!colors.calculated) {
    return colors.primaryColor;
  }
  return [colors.primaryColor, colors.secondaryColor];
}

/***/ }),

/***/ 5945:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(24994);
var _typeof = __webpack_require__(73738);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(94634));
var React = _interopRequireWildcard(__webpack_require__(9950));
var _ArrowLeftOutlined = _interopRequireDefault(__webpack_require__(41834));
var _AntdIcon = _interopRequireDefault(__webpack_require__(46953));
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

var ArrowLeftOutlined = function ArrowLeftOutlined(props, ref) {
  return /*#__PURE__*/React.createElement(_AntdIcon.default, (0, _extends2.default)({}, props, {
    ref: ref,
    icon: _ArrowLeftOutlined.default
  }));
};
if (false) {}
var _default = /*#__PURE__*/React.forwardRef(ArrowLeftOutlined);
exports["default"] = _default;

/***/ }),

/***/ 24720:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(24994);
var _typeof = __webpack_require__(73738);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(94634));
var React = _interopRequireWildcard(__webpack_require__(9950));
var _ArrowRightOutlined = _interopRequireDefault(__webpack_require__(40445));
var _AntdIcon = _interopRequireDefault(__webpack_require__(46953));
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

var ArrowRightOutlined = function ArrowRightOutlined(props, ref) {
  return /*#__PURE__*/React.createElement(_AntdIcon.default, (0, _extends2.default)({}, props, {
    ref: ref,
    icon: _ArrowRightOutlined.default
  }));
};
if (false) {}
var _default = /*#__PURE__*/React.forwardRef(ArrowRightOutlined);
exports["default"] = _default;

/***/ }),

/***/ 31683:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(24994);
var _typeof3 = __webpack_require__(73738);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.generate = generate;
exports.getSecondaryColor = getSecondaryColor;
exports.iconStyles = void 0;
exports.isIconDefinition = isIconDefinition;
exports.normalizeAttrs = normalizeAttrs;
exports.normalizeTwoToneColors = normalizeTwoToneColors;
exports.useInsertStyles = exports.svgBaseProps = void 0;
exports.warning = warning;
var _objectSpread2 = _interopRequireDefault(__webpack_require__(12897));
var _typeof2 = _interopRequireDefault(__webpack_require__(73738));
var _colors = __webpack_require__(53321);
var _react = _interopRequireWildcard(__webpack_require__(9950));
var _warning = _interopRequireDefault(__webpack_require__(32691));
var _dynamicCSS = __webpack_require__(67906);
var _shadow = __webpack_require__(20590);
var _Context = _interopRequireDefault(__webpack_require__(59112));
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function warning(valid, message) {
  (0, _warning.default)(valid, "[@ant-design/icons] ".concat(message));
}
function isIconDefinition(target) {
  return (0, _typeof2.default)(target) === 'object' && typeof target.name === 'string' && typeof target.theme === 'string' && ((0, _typeof2.default)(target.icon) === 'object' || typeof target.icon === 'function');
}
function normalizeAttrs() {
  var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.keys(attrs).reduce(function (acc, key) {
    var val = attrs[key];
    switch (key) {
      case 'class':
        acc.className = val;
        delete acc.class;
        break;
      default:
        acc[key] = val;
    }
    return acc;
  }, {});
}
function generate(node, key, rootProps) {
  if (!rootProps) {
    return /*#__PURE__*/_react.default.createElement(node.tag, (0, _objectSpread2.default)({
      key: key
    }, normalizeAttrs(node.attrs)), (node.children || []).map(function (child, index) {
      return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
    }));
  }
  return /*#__PURE__*/_react.default.createElement(node.tag, (0, _objectSpread2.default)((0, _objectSpread2.default)({
    key: key
  }, normalizeAttrs(node.attrs)), rootProps), (node.children || []).map(function (child, index) {
    return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
  }));
}
function getSecondaryColor(primaryColor) {
  // choose the second color
  return (0, _colors.generate)(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
  if (!twoToneColor) {
    return [];
  }
  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
}

// These props make sure that the SVG behaviours like general text.
// Reference: https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
var svgBaseProps = {
  width: '1em',
  height: '1em',
  fill: 'currentColor',
  'aria-hidden': 'true',
  focusable: 'false'
};
exports.svgBaseProps = svgBaseProps;
var iconStyles = "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
exports.iconStyles = iconStyles;
var useInsertStyles = function useInsertStyles(eleRef) {
  var _useContext = (0, _react.useContext)(_Context.default),
    csp = _useContext.csp,
    prefixCls = _useContext.prefixCls;
  var mergedStyleStr = iconStyles;
  if (prefixCls) {
    mergedStyleStr = mergedStyleStr.replace(/anticon/g, prefixCls);
  }
  (0, _react.useEffect)(function () {
    var ele = eleRef.current;
    var shadowRoot = (0, _shadow.getShadowRoot)(ele);
    (0, _dynamicCSS.updateCSS)(mergedStyleStr, '@ant-design-icons', {
      prepend: true,
      csp: csp,
      attachTo: shadowRoot
    });
  }, []);
};
exports.useInsertStyles = useInsertStyles;

/***/ }),

/***/ 12266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: () => (/* binding */ PageHeader)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(64467);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(5544);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/ArrowLeftOutlined.js
var ArrowLeftOutlined = __webpack_require__(9760);
var ArrowLeftOutlined_default = /*#__PURE__*/__webpack_require__.n(ArrowLeftOutlined);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/ArrowRightOutlined.js
var ArrowRightOutlined = __webpack_require__(33995);
var ArrowRightOutlined_default = /*#__PURE__*/__webpack_require__.n(ArrowRightOutlined);
// EXTERNAL MODULE: ./node_modules/antd/es/breadcrumb/index.js + 3 modules
var es_breadcrumb = __webpack_require__(73414);
// EXTERNAL MODULE: ./node_modules/antd/es/avatar/index.js + 3 modules
var es_avatar = __webpack_require__(75871);
// EXTERNAL MODULE: ./node_modules/antd/es/space/index.js + 1 modules
var space = __webpack_require__(80737);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/index.js + 2 modules
var config_provider = __webpack_require__(98022);
;// ./node_modules/antd/es/style/default.less
const default_namespaceObject = __webpack_require__.p + "static/media/default.003f90b383291c3b90da.less";
;// ./node_modules/antd/es/breadcrumb/style/index.less
const style_namespaceObject = __webpack_require__.p + "static/media/index.512735b3dccd7d4b3088.less";
;// ./node_modules/antd/es/dropdown/style/index.less
const dropdown_style_namespaceObject = __webpack_require__.p + "static/media/index.512735b3dccd7d4b3088.less";
;// ./node_modules/antd/es/button/style/index.less
const button_style_namespaceObject = __webpack_require__.p + "static/media/index.512735b3dccd7d4b3088.less";
;// ./node_modules/antd/es/button/style/index.js


// deps-lint-skip: space
;// ./node_modules/antd/es/menu/style/index.less
const menu_style_namespaceObject = __webpack_require__.p + "static/media/index.512735b3dccd7d4b3088.less";
;// ./node_modules/antd/es/tooltip/style/index.less
const tooltip_style_namespaceObject = __webpack_require__.p + "static/media/index.512735b3dccd7d4b3088.less";
;// ./node_modules/antd/es/tooltip/style/index.js


;// ./node_modules/antd/es/menu/style/index.js


// style dependencies
// deps-lint-skip: layout

;// ./node_modules/antd/es/space/style/index.less
const space_style_namespaceObject = __webpack_require__.p + "static/media/index.512735b3dccd7d4b3088.less";
;// ./node_modules/antd/es/space/style/index.js


;// ./node_modules/antd/es/dropdown/style/index.js


// style dependencies



;// ./node_modules/antd/es/breadcrumb/style/index.js


// style dependencies


// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(48383);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-resize-observer/es/index.js + 4 modules
var es = __webpack_require__(37978);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./node_modules/@ant-design/pro-provider/es/useStyle/index.js + 33 modules
var useStyle = __webpack_require__(60359);
;// ./node_modules/@ant-design/pro-layout/es/components/PageHeader/style/index.js



var textOverflowEllipsis = function textOverflowEllipsis() {
  return {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  };
};
var genPageHeaderStyle = function genPageHeaderStyle(token) {
  var _extra, _objectSpread4;
  return (0,defineProperty/* default */.A)({}, token.componentCls, (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, useStyle/* resetComponent */.dF === null || useStyle/* resetComponent */.dF === void 0 ? void 0 : (0,useStyle/* resetComponent */.dF)(token)), {}, (_objectSpread4 = {
    position: 'relative',
    backgroundColor: token.pageHeaderBgGhost,
    paddingBlock: token.pageHeaderPaddingVertical + 2,
    paddingInline: token.pageHeaderPadding,
    '& &-has-breadcrumb': {
      paddingBlockStart: token.pageHeaderPaddingBreadCrumb
    },
    '& &-has-footer': {
      paddingBlockEnd: 0
    },
    '& &-back': (0,defineProperty/* default */.A)({
      marginInlineEnd: token.margin,
      fontSize: 16,
      lineHeight: 1,
      '&-button': (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({
        fontSize: 16
      }, useStyle/* operationUnit */.Y1 === null || useStyle/* operationUnit */.Y1 === void 0 ? void 0 : (0,useStyle/* operationUnit */.Y1)(token)), {}, {
        color: token.pageHeaderColorBack,
        cursor: 'pointer'
      })
    }, "".concat(token.componentCls, "-rlt &"), {
      float: 'right',
      marginInlineEnd: 0,
      marginInlineStart: 0
    })
  }, (0,defineProperty/* default */.A)(_objectSpread4, "& ".concat('ant', "-divider-vertical"), {
    height: 14,
    marginBlock: 0,
    marginInline: token.marginSM,
    verticalAlign: 'middle'
  }), (0,defineProperty/* default */.A)(_objectSpread4, "& &-breadcrumb + &-heading", {
    marginBlockStart: token.marginXS
  }), (0,defineProperty/* default */.A)(_objectSpread4, '& &-heading', {
    display: 'flex',
    justifyContent: 'space-between',
    '&-left': {
      display: 'flex',
      alignItems: 'center',
      marginBlock: token.marginXS / 2,
      marginInlineEnd: 0,
      marginInlineStart: 0,
      overflow: 'hidden'
    },
    '&-title': (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({
      marginInlineEnd: token.marginSM,
      marginBlockEnd: 0,
      color: token.colorTextHeading,
      fontWeight: 600,
      fontSize: token.pageHeaderFontSizeHeaderTitle,
      lineHeight: token.controlHeight + 'px'
    }, textOverflowEllipsis()), {}, (0,defineProperty/* default */.A)({}, "".concat(token.componentCls, "-rlt &"), {
      marginInlineEnd: 0,
      marginInlineStart: token.marginSM
    })),
    '&-avatar': (0,defineProperty/* default */.A)({
      marginInlineEnd: token.marginSM
    }, "".concat(token.componentCls, "-rlt &"), {
      float: 'right',
      marginInlineEnd: 0,
      marginInlineStart: token.marginSM
    }),
    '&-tags': (0,defineProperty/* default */.A)({}, "".concat(token.componentCls, "-rlt &"), {
      float: 'right'
    }),
    '&-sub-title': (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({
      marginInlineEnd: token.marginSM,
      color: token.colorTextSecondary,
      fontSize: token.pageHeaderFontSizeHeaderSubTitle,
      lineHeight: token.lineHeight
    }, textOverflowEllipsis()), {}, (0,defineProperty/* default */.A)({}, "".concat(token.componentCls, "-rlt &"), {
      float: 'right',
      marginInlineEnd: 0,
      marginInlineStart: 12
    })),
    '&-extra': (_extra = {
      marginBlock: token.marginXS / 2,
      marginInlineEnd: 0,
      marginInlineStart: 0,
      whiteSpace: 'nowrap',
      '> *': (0,defineProperty/* default */.A)({
        'white-space': 'unset'
      }, "".concat(token.componentCls, "-rlt &"), {
        marginInlineEnd: token.marginSM,
        marginInlineStart: 0
      })
    }, (0,defineProperty/* default */.A)(_extra, "".concat(token.componentCls, "-rlt &"), {
      float: 'left'
    }), (0,defineProperty/* default */.A)(_extra, '*:first-child', (0,defineProperty/* default */.A)({}, "".concat(token.componentCls, "-rlt &"), {
      marginInlineEnd: 0
    })), _extra)
  }), (0,defineProperty/* default */.A)(_objectSpread4, '&-content', {
    paddingBlockStart: token.pageHeaderPaddingContentPadding
  }), (0,defineProperty/* default */.A)(_objectSpread4, '&-footer', {
    marginBlockStart: token.margin
  }), (0,defineProperty/* default */.A)(_objectSpread4, '&-compact &-heading', {
    flexWrap: 'wrap'
  }), (0,defineProperty/* default */.A)(_objectSpread4, '&-wide', {
    maxWidth: 1152,
    margin: '0 auto'
  }), (0,defineProperty/* default */.A)(_objectSpread4, '&-rtl', {
    direction: 'rtl'
  }), _objectSpread4)));
};
function style_useStyle(prefixCls) {
  return (0,useStyle/* useStyle */.X3)('ProLayoutPageHeader', function (token) {
    var proCardToken = (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, token), {}, {
      componentCls: ".".concat(prefixCls),
      pageHeaderBgGhost: 'transparent',
      pageHeaderPadding: 16,
      pageHeaderPaddingVertical: 4,
      pageHeaderPaddingBreadCrumb: token.paddingSM,
      pageHeaderColorBack: token.colorTextHeading,
      pageHeaderFontSizeHeaderTitle: token.fontSizeHeading4,
      pageHeaderFontSizeHeaderSubTitle: 14,
      pageHeaderPaddingContentPadding: token.paddingSM
    });
    return [genPageHeaderStyle(proCardToken)];
  });
}
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./node_modules/@ant-design/pro-layout/es/components/PageHeader/index.js













var renderBack = function renderBack(prefixCls, hashId, backIcon, onBack) {
  if (!backIcon || !onBack) {
    return null;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "".concat(prefixCls, "-back ").concat(hashId).trim(),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      role: "button",
      onClick: function onClick(e) {
        onBack === null || onBack === void 0 ? void 0 : onBack(e);
      },
      className: "".concat(prefixCls, "-back-button ").concat(hashId).trim(),
      "aria-label": "back",
      children: backIcon
    })
  });
};
var renderBreadcrumb = function renderBreadcrumb(breadcrumb, prefixCls) {
  var _breadcrumb$items;
  if (!((_breadcrumb$items = breadcrumb.items) !== null && _breadcrumb$items !== void 0 && _breadcrumb$items.length)) return null;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(es_breadcrumb/* default */.A, (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, breadcrumb), {}, {
    className: classnames_default()("".concat(prefixCls, "-breadcrumb"), breadcrumb.className)
  }));
};
var getBackIcon = function getBackIcon(props) {
  var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ltr';
  if (props.backIcon !== undefined) {
    return props.backIcon;
  }
  return direction === 'rtl' ? /*#__PURE__*/(0,jsx_runtime.jsx)((ArrowRightOutlined_default()), {}) : /*#__PURE__*/(0,jsx_runtime.jsx)((ArrowLeftOutlined_default()), {});
};
var renderTitle = function renderTitle(prefixCls, props) {
  var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'ltr';
  var hashId = arguments.length > 3 ? arguments[3] : undefined;
  var title = props.title,
    avatar = props.avatar,
    subTitle = props.subTitle,
    tags = props.tags,
    extra = props.extra,
    onBack = props.onBack;
  var headingPrefixCls = "".concat(prefixCls, "-heading");
  var hasHeading = title || subTitle || tags || extra;
  // If there is nothing, return a null
  if (!hasHeading) {
    return null;
  }
  var backIcon = getBackIcon(props, direction);
  var backIconDom = renderBack(prefixCls, hashId, backIcon, onBack);
  var hasTitle = backIconDom || avatar || hasHeading;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: headingPrefixCls + ' ' + hashId,
    children: [hasTitle && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "".concat(headingPrefixCls, "-left ").concat(hashId).trim(),
      children: [backIconDom, avatar && /*#__PURE__*/(0,jsx_runtime.jsx)(es_avatar/* default */.A, (0,objectSpread2/* default */.A)({
        className: classnames_default()("".concat(headingPrefixCls, "-avatar"), hashId, avatar.className)
      }, avatar)), title && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: "".concat(headingPrefixCls, "-title ").concat(hashId).trim(),
        title: typeof title === 'string' ? title : undefined,
        children: title
      }), subTitle && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: "".concat(headingPrefixCls, "-sub-title ").concat(hashId).trim(),
        title: typeof subTitle === 'string' ? subTitle : undefined,
        children: subTitle
      }), tags && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: "".concat(headingPrefixCls, "-tags ").concat(hashId).trim(),
        children: tags
      })]
    }), extra && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      className: "".concat(headingPrefixCls, "-extra ").concat(hashId).trim(),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(space/* default */.A, {
        children: extra
      })
    })]
  });
};
var renderFooter = function renderFooter(prefixCls, footer, hashId) {
  if (footer) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "".concat(prefixCls, "-footer ").concat(hashId).trim(),
      children: footer
    });
  }
  return null;
};
var renderChildren = function renderChildren(prefixCls, children, hashId) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "".concat(prefixCls, "-content ").concat(hashId).trim(),
    children: children
  });
};
var PageHeader = function PageHeader(props) {
  var _breadcrumbRender, _classNames;
  var _React$useState = react.useState(false),
    _React$useState2 = (0,slicedToArray/* default */.A)(_React$useState, 2),
    compact = _React$useState2[0],
    updateCompact = _React$useState2[1];
  var onResize = function onResize(_ref) {
    var width = _ref.width;
    updateCompact(width < 768);
  };
  var _React$useContext = react.useContext(config_provider/* default.ConfigContext */.Ay.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var customizePrefixCls = props.prefixCls,
    style = props.style,
    footer = props.footer,
    children = props.children,
    breadcrumb = props.breadcrumb,
    breadcrumbRender = props.breadcrumbRender,
    customizeClassName = props.className,
    contentWidth = props.contentWidth;
  var prefixCls = getPrefixCls('page-header', customizePrefixCls);
  var _useStyle = style_useStyle(prefixCls),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var getDefaultBreadcrumbDom = function getDefaultBreadcrumbDom() {
    if (breadcrumb && !(breadcrumb !== null && breadcrumb !== void 0 && breadcrumb.items) && breadcrumb !== null && breadcrumb !== void 0 && breadcrumb.routes) {
      // @ts-ignore
      breadcrumb.items = breadcrumb.routes;
    }
    if (breadcrumb !== null && breadcrumb !== void 0 && breadcrumb.items) {
      return renderBreadcrumb(breadcrumb, prefixCls);
    }
    return null;
  };
  var defaultBreadcrumbDom = getDefaultBreadcrumbDom();
  var isBreadcrumbComponent = breadcrumb && 'props' in breadcrumb;

  // support breadcrumbRender function
  var breadcrumbRenderDomFromProps = (_breadcrumbRender = breadcrumbRender === null || breadcrumbRender === void 0 ? void 0 : breadcrumbRender((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, props), {}, {
    prefixCls: prefixCls
  }), defaultBreadcrumbDom)) !== null && _breadcrumbRender !== void 0 ? _breadcrumbRender : defaultBreadcrumbDom;
  var breadcrumbDom = isBreadcrumbComponent ? breadcrumb : breadcrumbRenderDomFromProps;
  var className = classnames_default()(prefixCls, hashId, customizeClassName, (_classNames = {}, (0,defineProperty/* default */.A)(_classNames, "".concat(prefixCls, "-has-breadcrumb"), !!breadcrumbDom), (0,defineProperty/* default */.A)(_classNames, "".concat(prefixCls, "-has-footer"), !!footer), (0,defineProperty/* default */.A)(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0,defineProperty/* default */.A)(_classNames, "".concat(prefixCls, "-compact"), compact), (0,defineProperty/* default */.A)(_classNames, "".concat(prefixCls, "-wide"), contentWidth === 'Fixed'), (0,defineProperty/* default */.A)(_classNames, "".concat(prefixCls, "-ghost"), true), _classNames));
  var title = renderTitle(prefixCls, props, direction, hashId);
  var childDom = children && renderChildren(prefixCls, children, hashId);
  var footerDom = renderFooter(prefixCls, footer, hashId);
  if (!breadcrumbDom && !title && !footerDom && !childDom) {
    return null;
  }
  return wrapSSR( /*#__PURE__*/(0,jsx_runtime.jsx)(es["default"], {
    onResize: onResize,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: className,
      style: style,
      children: [breadcrumbDom, title, childDom, footerDom]
    })
  }));
};


/***/ }),

/***/ 66499:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = canUseDom;
function canUseDom() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}

/***/ }),

/***/ 11099:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = contains;
function contains(root, n) {
  if (!root) {
    return false;
  }

  // Use native if support
  if (root.contains) {
    return root.contains(n);
  }

  // `document.contains` not support with IE11
  var node = n;
  while (node) {
    if (node === root) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}

/***/ }),

/***/ 67906:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = (__webpack_require__(24994)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.clearContainerCache = clearContainerCache;
exports.injectCSS = injectCSS;
exports.removeCSS = removeCSS;
exports.updateCSS = updateCSS;
var _canUseDom = _interopRequireDefault(__webpack_require__(66499));
var _contains = _interopRequireDefault(__webpack_require__(11099));
var APPEND_ORDER = 'data-rc-order';
var MARK_KEY = "rc-util-key";
var containerCache = new Map();
function getMark() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    mark = _ref.mark;
  if (mark) {
    return mark.startsWith('data-') ? mark : "data-".concat(mark);
  }
  return MARK_KEY;
}
function getContainer(option) {
  if (option.attachTo) {
    return option.attachTo;
  }
  var head = document.querySelector('head');
  return head || document.body;
}
function getOrder(prepend) {
  if (prepend === 'queue') {
    return 'prependQueue';
  }
  return prepend ? 'prepend' : 'append';
}

/**
 * Find style which inject by rc-util
 */
function findStyles(container) {
  return Array.from((containerCache.get(container) || container).children).filter(function (node) {
    return node.tagName === 'STYLE';
  });
}
function injectCSS(css) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!(0, _canUseDom.default)()) {
    return null;
  }
  var csp = option.csp,
    prepend = option.prepend;
  var styleNode = document.createElement('style');
  styleNode.setAttribute(APPEND_ORDER, getOrder(prepend));
  if (csp !== null && csp !== void 0 && csp.nonce) {
    styleNode.nonce = csp === null || csp === void 0 ? void 0 : csp.nonce;
  }
  styleNode.innerHTML = css;
  var container = getContainer(option);
  var firstChild = container.firstChild;
  if (prepend) {
    // If is queue `prepend`, it will prepend first style and then append rest style
    if (prepend === 'queue') {
      var existStyle = findStyles(container).filter(function (node) {
        return ['prepend', 'prependQueue'].includes(node.getAttribute(APPEND_ORDER));
      });
      if (existStyle.length) {
        container.insertBefore(styleNode, existStyle[existStyle.length - 1].nextSibling);
        return styleNode;
      }
    }

    // Use `insertBefore` as `prepend`
    container.insertBefore(styleNode, firstChild);
  } else {
    container.appendChild(styleNode);
  }
  return styleNode;
}
function findExistNode(key) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var container = getContainer(option);
  return findStyles(container).find(function (node) {
    return node.getAttribute(getMark(option)) === key;
  });
}
function removeCSS(key) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var existNode = findExistNode(key, option);
  if (existNode) {
    var container = getContainer(option);
    container.removeChild(existNode);
  }
}

/**
 * qiankun will inject `appendChild` to insert into other
 */
function syncRealContainer(container, option) {
  var cachedRealContainer = containerCache.get(container);

  // Find real container when not cached or cached container removed
  if (!cachedRealContainer || !(0, _contains.default)(document, cachedRealContainer)) {
    var placeholderStyle = injectCSS('', option);
    var parentNode = placeholderStyle.parentNode;
    containerCache.set(container, parentNode);
    container.removeChild(placeholderStyle);
  }
}

/**
 * manually clear container cache to avoid global cache in unit testes
 */
function clearContainerCache() {
  containerCache.clear();
}
function updateCSS(css, key) {
  var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var container = getContainer(option);

  // Sync real parent
  syncRealContainer(container, option);
  var existNode = findExistNode(key, option);
  if (existNode) {
    var _option$csp, _option$csp2;
    if ((_option$csp = option.csp) !== null && _option$csp !== void 0 && _option$csp.nonce && existNode.nonce !== ((_option$csp2 = option.csp) === null || _option$csp2 === void 0 ? void 0 : _option$csp2.nonce)) {
      var _option$csp3;
      existNode.nonce = (_option$csp3 = option.csp) === null || _option$csp3 === void 0 ? void 0 : _option$csp3.nonce;
    }
    if (existNode.innerHTML !== css) {
      existNode.innerHTML = css;
    }
    return existNode;
  }
  var newNode = injectCSS(css, option);
  newNode.setAttribute(getMark(option), key);
  return newNode;
}

/***/ }),

/***/ 20590:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getShadowRoot = getShadowRoot;
exports.inShadow = inShadow;
function getRoot(ele) {
  var _ele$getRootNode;
  return ele === null || ele === void 0 ? void 0 : (_ele$getRootNode = ele.getRootNode) === null || _ele$getRootNode === void 0 ? void 0 : _ele$getRootNode.call(ele);
}

/**
 * Check if is in shadowRoot
 */
function inShadow(ele) {
  return getRoot(ele) !== (ele === null || ele === void 0 ? void 0 : ele.ownerDocument);
}

/**
 * Return shadowRoot if possible
 */
function getShadowRoot(ele) {
  return inShadow(ele) ? getRoot(ele) : null;
}

/***/ }),

/***/ 32691:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.call = call;
exports["default"] = void 0;
exports.note = note;
exports.noteOnce = noteOnce;
exports.preMessage = void 0;
exports.resetWarned = resetWarned;
exports.warning = warning;
exports.warningOnce = warningOnce;
/* eslint-disable no-console */
var warned = {};
var preWarningFns = [];

/**
 * Pre warning enable you to parse content before console.error.
 * Modify to null will prevent warning.
 */
var preMessage = function preMessage(fn) {
  preWarningFns.push(fn);
};
exports.preMessage = preMessage;
function warning(valid, message) {
  // Support uglify
  if (false) { var finalMessage; }
}
function note(valid, message) {
  // Support uglify
  if (false) { var finalMessage; }
}
function resetWarned() {
  warned = {};
}
function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}
function warningOnce(valid, message) {
  call(warning, valid, message);
}
function noteOnce(valid, message) {
  call(note, valid, message);
}
warningOnce.preMessage = preMessage;
warningOnce.resetWarned = resetWarned;
warningOnce.noteOnce = noteOnce;
var _default = warningOnce;
/* eslint-enable */
exports["default"] = _default;

/***/ }),

/***/ 70079:
/***/ ((module) => {

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 92987:
/***/ ((module) => {

function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 43693:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toPropertyKey = __webpack_require__(77736);
function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 94634:
/***/ ((module) => {

function _extends() {
  return module.exports = _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _extends.apply(null, arguments);
}
module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 24994:
/***/ ((module) => {

function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    "default": e
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 81156:
/***/ ((module) => {

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 47752:
/***/ ((module) => {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 12897:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(43693);
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
module.exports = _objectSpread2, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 91847:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var objectWithoutPropertiesLoose = __webpack_require__(54893);
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
module.exports = _objectWithoutProperties, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 54893:
/***/ ((module) => {

function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.includes(n)) continue;
    t[n] = r[n];
  }
  return t;
}
module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 85715:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithHoles = __webpack_require__(92987);
var iterableToArrayLimit = __webpack_require__(81156);
var unsupportedIterableToArray = __webpack_require__(17122);
var nonIterableRest = __webpack_require__(47752);
function _slicedToArray(r, e) {
  return arrayWithHoles(r) || iterableToArrayLimit(r, e) || unsupportedIterableToArray(r, e) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 89045:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(73738)["default"]);
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 77736:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(73738)["default"]);
var toPrimitive = __webpack_require__(89045);
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 73738:
/***/ ((module) => {

function _typeof(o) {
  "@babel/helpers - typeof";

  return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 17122:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(70079);
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? arrayLikeToArray(r, a) : void 0;
  }
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })

}]);