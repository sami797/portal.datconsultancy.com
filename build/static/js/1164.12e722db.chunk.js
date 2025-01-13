"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[1164],{

/***/ 51412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ CartesianAxis)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9950);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93008);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65565);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72004);
/* harmony import */ var _util_ShallowEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40671);
/* harmony import */ var _container_Layer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(62775);
/* harmony import */ var _component_Text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(37135);
/* harmony import */ var _component_Label__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(71876);
/* harmony import */ var _util_DataUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21570);
/* harmony import */ var _util_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(41958);
/* harmony import */ var _util_ReactUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(675);
/* harmony import */ var _getTicks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82142);
var _excluded = ["viewBox"],
  _excluded2 = ["viewBox"],
  _excluded3 = ["ticks"];
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
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
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : String(i);
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
/**
 * @fileOverview Cartesian Axis
 */













/** The orientation of the axis in correspondence to the chart */

/** A unit to be appended to a value */

/** The formatter function of tick */

var CartesianAxis = /*#__PURE__*/function (_Component) {
  _inherits(CartesianAxis, _Component);
  function CartesianAxis(props) {
    var _this;
    _classCallCheck(this, CartesianAxis);
    _this = _callSuper(this, CartesianAxis, [props]);
    _this.state = {
      fontSize: '',
      letterSpacing: ''
    };
    return _this;
  }
  _createClass(CartesianAxis, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(_ref, nextState) {
      var viewBox = _ref.viewBox,
        restProps = _objectWithoutProperties(_ref, _excluded);
      // props.viewBox is sometimes generated every time -
      // check that specially as object equality is likely to fail
      var _this$props = this.props,
        viewBoxOld = _this$props.viewBox,
        restPropsOld = _objectWithoutProperties(_this$props, _excluded2);
      return !(0,_util_ShallowEqual__WEBPACK_IMPORTED_MODULE_3__/* .shallowEqual */ .b)(viewBox, viewBoxOld) || !(0,_util_ShallowEqual__WEBPACK_IMPORTED_MODULE_3__/* .shallowEqual */ .b)(restProps, restPropsOld) || !(0,_util_ShallowEqual__WEBPACK_IMPORTED_MODULE_3__/* .shallowEqual */ .b)(nextState, this.state);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var htmlLayer = this.layerReference;
      if (!htmlLayer) return;
      var tick = htmlLayer.getElementsByClassName('recharts-cartesian-axis-tick-value')[0];
      if (tick) {
        this.setState({
          fontSize: window.getComputedStyle(tick).fontSize,
          letterSpacing: window.getComputedStyle(tick).letterSpacing
        });
      }
    }

    /**
     * Calculate the coordinates of endpoints in ticks
     * @param  {Object} data The data of a simple tick
     * @return {Object} (x1, y1): The coordinate of endpoint close to tick text
     *  (x2, y2): The coordinate of endpoint close to axis
     */
  }, {
    key: "getTickLineCoord",
    value: function getTickLineCoord(data) {
      var _this$props2 = this.props,
        x = _this$props2.x,
        y = _this$props2.y,
        width = _this$props2.width,
        height = _this$props2.height,
        orientation = _this$props2.orientation,
        tickSize = _this$props2.tickSize,
        mirror = _this$props2.mirror,
        tickMargin = _this$props2.tickMargin;
      var x1, x2, y1, y2, tx, ty;
      var sign = mirror ? -1 : 1;
      var finalTickSize = data.tickSize || tickSize;
      var tickCoord = (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_4__/* .isNumber */ .Et)(data.tickCoord) ? data.tickCoord : data.coordinate;
      switch (orientation) {
        case 'top':
          x1 = x2 = data.coordinate;
          y2 = y + +!mirror * height;
          y1 = y2 - sign * finalTickSize;
          ty = y1 - sign * tickMargin;
          tx = tickCoord;
          break;
        case 'left':
          y1 = y2 = data.coordinate;
          x2 = x + +!mirror * width;
          x1 = x2 - sign * finalTickSize;
          tx = x1 - sign * tickMargin;
          ty = tickCoord;
          break;
        case 'right':
          y1 = y2 = data.coordinate;
          x2 = x + +mirror * width;
          x1 = x2 + sign * finalTickSize;
          tx = x1 + sign * tickMargin;
          ty = tickCoord;
          break;
        default:
          x1 = x2 = data.coordinate;
          y2 = y + +mirror * height;
          y1 = y2 + sign * finalTickSize;
          ty = y1 + sign * tickMargin;
          tx = tickCoord;
          break;
      }
      return {
        line: {
          x1: x1,
          y1: y1,
          x2: x2,
          y2: y2
        },
        tick: {
          x: tx,
          y: ty
        }
      };
    }
  }, {
    key: "getTickTextAnchor",
    value: function getTickTextAnchor() {
      var _this$props3 = this.props,
        orientation = _this$props3.orientation,
        mirror = _this$props3.mirror;
      var textAnchor;
      switch (orientation) {
        case 'left':
          textAnchor = mirror ? 'start' : 'end';
          break;
        case 'right':
          textAnchor = mirror ? 'end' : 'start';
          break;
        default:
          textAnchor = 'middle';
          break;
      }
      return textAnchor;
    }
  }, {
    key: "getTickVerticalAnchor",
    value: function getTickVerticalAnchor() {
      var _this$props4 = this.props,
        orientation = _this$props4.orientation,
        mirror = _this$props4.mirror;
      var verticalAnchor = 'end';
      switch (orientation) {
        case 'left':
        case 'right':
          verticalAnchor = 'middle';
          break;
        case 'top':
          verticalAnchor = mirror ? 'start' : 'end';
          break;
        default:
          verticalAnchor = mirror ? 'end' : 'start';
          break;
      }
      return verticalAnchor;
    }
  }, {
    key: "renderAxisLine",
    value: function renderAxisLine() {
      var _this$props5 = this.props,
        x = _this$props5.x,
        y = _this$props5.y,
        width = _this$props5.width,
        height = _this$props5.height,
        orientation = _this$props5.orientation,
        mirror = _this$props5.mirror,
        axisLine = _this$props5.axisLine;
      var props = _objectSpread(_objectSpread(_objectSpread({}, (0,_util_ReactUtils__WEBPACK_IMPORTED_MODULE_5__/* .filterProps */ .J9)(this.props, false)), (0,_util_ReactUtils__WEBPACK_IMPORTED_MODULE_5__/* .filterProps */ .J9)(axisLine, false)), {}, {
        fill: 'none'
      });
      if (orientation === 'top' || orientation === 'bottom') {
        var needHeight = +(orientation === 'top' && !mirror || orientation === 'bottom' && mirror);
        props = _objectSpread(_objectSpread({}, props), {}, {
          x1: x,
          y1: y + needHeight * height,
          x2: x + width,
          y2: y + needHeight * height
        });
      } else {
        var needWidth = +(orientation === 'left' && !mirror || orientation === 'right' && mirror);
        props = _objectSpread(_objectSpread({}, props), {}, {
          x1: x + needWidth * width,
          y1: y,
          x2: x + needWidth * width,
          y2: y + height
        });
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", _extends({}, props, {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)('recharts-cartesian-axis-line', lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(axisLine, 'className'))
      }));
    }
  }, {
    key: "renderTicks",
    value:
    /**
     * render the ticks
     * @param {Array} ticks The ticks to actually render (overrides what was passed in props)
     * @param {string} fontSize Fontsize to consider for tick spacing
     * @param {string} letterSpacing Letterspacing to consider for tick spacing
     * @return {ReactComponent} renderedTicks
     */
    function renderTicks(ticks, fontSize, letterSpacing) {
      var _this2 = this;
      var _this$props6 = this.props,
        tickLine = _this$props6.tickLine,
        stroke = _this$props6.stroke,
        tick = _this$props6.tick,
        tickFormatter = _this$props6.tickFormatter,
        unit = _this$props6.unit;
      var finalTicks = (0,_getTicks__WEBPACK_IMPORTED_MODULE_7__/* .getTicks */ .f)(_objectSpread(_objectSpread({}, this.props), {}, {
        ticks: ticks
      }), fontSize, letterSpacing);
      var textAnchor = this.getTickTextAnchor();
      var verticalAnchor = this.getTickVerticalAnchor();
      var axisProps = (0,_util_ReactUtils__WEBPACK_IMPORTED_MODULE_5__/* .filterProps */ .J9)(this.props, false);
      var customTickProps = (0,_util_ReactUtils__WEBPACK_IMPORTED_MODULE_5__/* .filterProps */ .J9)(tick, false);
      var tickLineProps = _objectSpread(_objectSpread({}, axisProps), {}, {
        fill: 'none'
      }, (0,_util_ReactUtils__WEBPACK_IMPORTED_MODULE_5__/* .filterProps */ .J9)(tickLine, false));
      var items = finalTicks.map(function (entry, i) {
        var _this2$getTickLineCoo = _this2.getTickLineCoord(entry),
          lineCoord = _this2$getTickLineCoo.line,
          tickCoord = _this2$getTickLineCoo.tick;
        var tickProps = _objectSpread(_objectSpread(_objectSpread(_objectSpread({
          textAnchor: textAnchor,
          verticalAnchor: verticalAnchor
        }, axisProps), {}, {
          stroke: 'none',
          fill: stroke
        }, customTickProps), tickCoord), {}, {
          index: i,
          payload: entry,
          visibleTicksCount: finalTicks.length,
          tickFormatter: tickFormatter
        });
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_container_Layer__WEBPACK_IMPORTED_MODULE_8__/* .Layer */ .W, _extends({
          className: "recharts-cartesian-axis-tick",
          key: "tick-".concat(entry.value, "-").concat(entry.coordinate, "-").concat(entry.tickCoord)
        }, (0,_util_types__WEBPACK_IMPORTED_MODULE_9__/* .adaptEventsOfChild */ .XC)(_this2.props, entry, i)), tickLine && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", _extends({}, tickLineProps, lineCoord, {
          className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)('recharts-cartesian-axis-tick-line', lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(tickLine, 'className'))
        })), tick && CartesianAxis.renderTickItem(tick, tickProps, "".concat(lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default()(tickFormatter) ? tickFormatter(entry.value, i) : entry.value).concat(unit || '')));
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
        className: "recharts-cartesian-axis-ticks"
      }, items);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$props7 = this.props,
        axisLine = _this$props7.axisLine,
        width = _this$props7.width,
        height = _this$props7.height,
        ticksGenerator = _this$props7.ticksGenerator,
        className = _this$props7.className,
        hide = _this$props7.hide;
      if (hide) {
        return null;
      }
      var _this$props8 = this.props,
        ticks = _this$props8.ticks,
        noTicksProps = _objectWithoutProperties(_this$props8, _excluded3);
      var finalTicks = ticks;
      if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default()(ticksGenerator)) {
        finalTicks = ticks && ticks.length > 0 ? ticksGenerator(this.props) : ticksGenerator(noTicksProps);
      }
      if (width <= 0 || height <= 0 || !finalTicks || !finalTicks.length) {
        return null;
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_container_Layer__WEBPACK_IMPORTED_MODULE_8__/* .Layer */ .W, {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)('recharts-cartesian-axis', className),
        ref: function ref(_ref2) {
          _this3.layerReference = _ref2;
        }
      }, axisLine && this.renderAxisLine(), this.renderTicks(finalTicks, this.state.fontSize, this.state.letterSpacing), _component_Label__WEBPACK_IMPORTED_MODULE_10__/* .Label */ .J.renderCallByParent(this.props));
    }
  }], [{
    key: "renderTickItem",
    value: function renderTickItem(option, props, value) {
      var tickItem;
      if ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(option)) {
        tickItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(option, props);
      } else if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default()(option)) {
        tickItem = option(props);
      } else {
        tickItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_Text__WEBPACK_IMPORTED_MODULE_11__/* .Text */ .E, _extends({}, props, {
          className: "recharts-cartesian-axis-tick-value"
        }), value);
      }
      return tickItem;
    }
  }]);
  return CartesianAxis;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
_defineProperty(CartesianAxis, "displayName", 'CartesianAxis');
_defineProperty(CartesianAxis, "defaultProps", {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  // The orientation of axis
  orientation: 'bottom',
  // The ticks
  ticks: [],
  stroke: '#666',
  tickLine: true,
  axisLine: true,
  tick: true,
  mirror: false,
  minTickGap: 5,
  // The width or height of tick
  tickSize: 6,
  tickMargin: 2,
  interval: 'preserveEnd'
});

/***/ }),

/***/ 93245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ CartesianGrid)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9950);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93008);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_LogUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(84824);
/* harmony import */ var _util_DataUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21570);
/* harmony import */ var _util_ReactUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(675);
/* harmony import */ var _util_ChartUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95912);
/* harmony import */ var _getTicks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82142);
/* harmony import */ var _CartesianAxis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51412);
/* harmony import */ var _context_chartLayoutContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74167);
var _excluded = ["x1", "y1", "x2", "y2", "key"],
  _excluded2 = ["offset"];
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
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
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : String(i);
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
/**
 * @fileOverview Cartesian Grid
 */










/**
 * The <CartesianGrid horizontal
 */

var Background = function Background(props) {
  var fill = props.fill;
  if (!fill || fill === 'none') {
    return null;
  }
  var fillOpacity = props.fillOpacity,
    x = props.x,
    y = props.y,
    width = props.width,
    height = props.height;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    x: x,
    y: y,
    width: width,
    height: height,
    stroke: "none",
    fill: fill,
    fillOpacity: fillOpacity,
    className: "recharts-cartesian-grid-bg"
  });
};
function renderLineItem(option, props) {
  var lineItem;
  if ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(option)) {
    // @ts-expect-error typescript does not see the props type when cloning an element
    lineItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(option, props);
  } else if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default()(option)) {
    lineItem = option(props);
  } else {
    var x1 = props.x1,
      y1 = props.y1,
      x2 = props.x2,
      y2 = props.y2,
      key = props.key,
      others = _objectWithoutProperties(props, _excluded);
    var _filterProps = (0,_util_ReactUtils__WEBPACK_IMPORTED_MODULE_2__/* .filterProps */ .J9)(others, false),
      __ = _filterProps.offset,
      restOfFilteredProps = _objectWithoutProperties(_filterProps, _excluded2);
    lineItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", _extends({}, restOfFilteredProps, {
      x1: x1,
      y1: y1,
      x2: x2,
      y2: y2,
      fill: "none",
      key: key
    }));
  }
  return lineItem;
}
function HorizontalGridLines(props) {
  var x = props.x,
    width = props.width,
    _props$horizontal = props.horizontal,
    horizontal = _props$horizontal === void 0 ? true : _props$horizontal,
    horizontalPoints = props.horizontalPoints;
  if (!horizontal || !horizontalPoints || !horizontalPoints.length) {
    return null;
  }
  var items = horizontalPoints.map(function (entry, i) {
    var lineItemProps = _objectSpread(_objectSpread({}, props), {}, {
      x1: x,
      y1: entry,
      x2: x + width,
      y2: entry,
      key: "line-".concat(i),
      index: i
    });
    return renderLineItem(horizontal, lineItemProps);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, items);
}
function VerticalGridLines(props) {
  var y = props.y,
    height = props.height,
    _props$vertical = props.vertical,
    vertical = _props$vertical === void 0 ? true : _props$vertical,
    verticalPoints = props.verticalPoints;
  if (!vertical || !verticalPoints || !verticalPoints.length) {
    return null;
  }
  var items = verticalPoints.map(function (entry, i) {
    var lineItemProps = _objectSpread(_objectSpread({}, props), {}, {
      x1: entry,
      y1: y,
      x2: entry,
      y2: y + height,
      key: "line-".concat(i),
      index: i
    });
    return renderLineItem(vertical, lineItemProps);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, items);
}
function HorizontalStripes(props) {
  var horizontalFill = props.horizontalFill,
    fillOpacity = props.fillOpacity,
    x = props.x,
    y = props.y,
    width = props.width,
    height = props.height,
    horizontalPoints = props.horizontalPoints,
    _props$horizontal2 = props.horizontal,
    horizontal = _props$horizontal2 === void 0 ? true : _props$horizontal2;
  if (!horizontal || !horizontalFill || !horizontalFill.length) {
    return null;
  }

  // Why =y -y? I was trying to find any difference that this makes, with floating point numbers and edge cases but ... nothing.
  var roundedSortedHorizontalPoints = horizontalPoints.map(function (e) {
    return Math.round(e + y - y);
  }).sort(function (a, b) {
    return a - b;
  });
  // Why is this condition `!==` instead of `<=` ?
  if (y !== roundedSortedHorizontalPoints[0]) {
    roundedSortedHorizontalPoints.unshift(0);
  }
  var items = roundedSortedHorizontalPoints.map(function (entry, i) {
    // Why do we strip only the last stripe if it is invisible, and not all invisible stripes?
    var lastStripe = !roundedSortedHorizontalPoints[i + 1];
    var lineHeight = lastStripe ? y + height - entry : roundedSortedHorizontalPoints[i + 1] - entry;
    if (lineHeight <= 0) {
      return null;
    }
    var colorIndex = i % horizontalFill.length;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
      key: "react-".concat(i) // eslint-disable-line react/no-array-index-key
      ,

      y: entry,
      x: x,
      height: lineHeight,
      width: width,
      stroke: "none",
      fill: horizontalFill[colorIndex],
      fillOpacity: fillOpacity,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    className: "recharts-cartesian-gridstripes-horizontal"
  }, items);
}
function VerticalStripes(props) {
  var _props$vertical2 = props.vertical,
    vertical = _props$vertical2 === void 0 ? true : _props$vertical2,
    verticalFill = props.verticalFill,
    fillOpacity = props.fillOpacity,
    x = props.x,
    y = props.y,
    width = props.width,
    height = props.height,
    verticalPoints = props.verticalPoints;
  if (!vertical || !verticalFill || !verticalFill.length) {
    return null;
  }
  var roundedSortedVerticalPoints = verticalPoints.map(function (e) {
    return Math.round(e + x - x);
  }).sort(function (a, b) {
    return a - b;
  });
  if (x !== roundedSortedVerticalPoints[0]) {
    roundedSortedVerticalPoints.unshift(0);
  }
  var items = roundedSortedVerticalPoints.map(function (entry, i) {
    var lastStripe = !roundedSortedVerticalPoints[i + 1];
    var lineWidth = lastStripe ? x + width - entry : roundedSortedVerticalPoints[i + 1] - entry;
    if (lineWidth <= 0) {
      return null;
    }
    var colorIndex = i % verticalFill.length;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
      key: "react-".concat(i) // eslint-disable-line react/no-array-index-key
      ,

      x: entry,
      y: y,
      width: lineWidth,
      height: height,
      stroke: "none",
      fill: verticalFill[colorIndex],
      fillOpacity: fillOpacity,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    className: "recharts-cartesian-gridstripes-vertical"
  }, items);
}
var defaultVerticalCoordinatesGenerator = function defaultVerticalCoordinatesGenerator(_ref, syncWithTicks) {
  var xAxis = _ref.xAxis,
    width = _ref.width,
    height = _ref.height,
    offset = _ref.offset;
  return (0,_util_ChartUtils__WEBPACK_IMPORTED_MODULE_3__/* .getCoordinatesOfGrid */ .PW)((0,_getTicks__WEBPACK_IMPORTED_MODULE_4__/* .getTicks */ .f)(_objectSpread(_objectSpread(_objectSpread({}, _CartesianAxis__WEBPACK_IMPORTED_MODULE_5__/* .CartesianAxis */ .u.defaultProps), xAxis), {}, {
    ticks: (0,_util_ChartUtils__WEBPACK_IMPORTED_MODULE_3__/* .getTicksOfAxis */ .Rh)(xAxis, true),
    viewBox: {
      x: 0,
      y: 0,
      width: width,
      height: height
    }
  })), offset.left, offset.left + offset.width, syncWithTicks);
};
var defaultHorizontalCoordinatesGenerator = function defaultHorizontalCoordinatesGenerator(_ref2, syncWithTicks) {
  var yAxis = _ref2.yAxis,
    width = _ref2.width,
    height = _ref2.height,
    offset = _ref2.offset;
  return (0,_util_ChartUtils__WEBPACK_IMPORTED_MODULE_3__/* .getCoordinatesOfGrid */ .PW)((0,_getTicks__WEBPACK_IMPORTED_MODULE_4__/* .getTicks */ .f)(_objectSpread(_objectSpread(_objectSpread({}, _CartesianAxis__WEBPACK_IMPORTED_MODULE_5__/* .CartesianAxis */ .u.defaultProps), yAxis), {}, {
    ticks: (0,_util_ChartUtils__WEBPACK_IMPORTED_MODULE_3__/* .getTicksOfAxis */ .Rh)(yAxis, true),
    viewBox: {
      x: 0,
      y: 0,
      width: width,
      height: height
    }
  })), offset.top, offset.top + offset.height, syncWithTicks);
};
var defaultProps = {
  horizontal: true,
  vertical: true,
  // The ordinates of horizontal grid lines
  horizontalPoints: [],
  // The abscissas of vertical grid lines
  verticalPoints: [],
  stroke: '#ccc',
  fill: 'none',
  // The fill of colors of grid lines
  verticalFill: [],
  horizontalFill: []
};
function CartesianGrid(props) {
  var _props$stroke, _props$fill, _props$horizontal3, _props$horizontalFill, _props$vertical3, _props$verticalFill;
  var chartWidth = (0,_context_chartLayoutContext__WEBPACK_IMPORTED_MODULE_6__/* .useChartWidth */ .yi)();
  var chartHeight = (0,_context_chartLayoutContext__WEBPACK_IMPORTED_MODULE_6__/* .useChartHeight */ .rY)();
  var offset = (0,_context_chartLayoutContext__WEBPACK_IMPORTED_MODULE_6__/* .useOffset */ .hj)();
  var propsIncludingDefaults = _objectSpread(_objectSpread({}, props), {}, {
    stroke: (_props$stroke = props.stroke) !== null && _props$stroke !== void 0 ? _props$stroke : defaultProps.stroke,
    fill: (_props$fill = props.fill) !== null && _props$fill !== void 0 ? _props$fill : defaultProps.fill,
    horizontal: (_props$horizontal3 = props.horizontal) !== null && _props$horizontal3 !== void 0 ? _props$horizontal3 : defaultProps.horizontal,
    horizontalFill: (_props$horizontalFill = props.horizontalFill) !== null && _props$horizontalFill !== void 0 ? _props$horizontalFill : defaultProps.horizontalFill,
    vertical: (_props$vertical3 = props.vertical) !== null && _props$vertical3 !== void 0 ? _props$vertical3 : defaultProps.vertical,
    verticalFill: (_props$verticalFill = props.verticalFill) !== null && _props$verticalFill !== void 0 ? _props$verticalFill : defaultProps.verticalFill,
    x: (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_7__/* .isNumber */ .Et)(props.x) ? props.x : offset.left,
    y: (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_7__/* .isNumber */ .Et)(props.y) ? props.y : offset.top,
    width: (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_7__/* .isNumber */ .Et)(props.width) ? props.width : offset.width,
    height: (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_7__/* .isNumber */ .Et)(props.height) ? props.height : offset.height
  });
  var x = propsIncludingDefaults.x,
    y = propsIncludingDefaults.y,
    width = propsIncludingDefaults.width,
    height = propsIncludingDefaults.height,
    syncWithTicks = propsIncludingDefaults.syncWithTicks,
    horizontalValues = propsIncludingDefaults.horizontalValues,
    verticalValues = propsIncludingDefaults.verticalValues;

  // @ts-expect-error the scale prop is mixed up - we need to untagle this at some point
  var xAxis = (0,_context_chartLayoutContext__WEBPACK_IMPORTED_MODULE_6__/* .useArbitraryXAxis */ .pj)();
  // @ts-expect-error the scale prop is mixed up - we need to untagle this at some point
  var yAxis = (0,_context_chartLayoutContext__WEBPACK_IMPORTED_MODULE_6__/* .useYAxisWithFiniteDomainOrRandom */ .$G)();
  if (!(0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_7__/* .isNumber */ .Et)(width) || width <= 0 || !(0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_7__/* .isNumber */ .Et)(height) || height <= 0 || !(0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_7__/* .isNumber */ .Et)(x) || x !== +x || !(0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_7__/* .isNumber */ .Et)(y) || y !== +y) {
    return null;
  }

  /*
   * verticalCoordinatesGenerator and horizontalCoordinatesGenerator are defined
   * outside of the propsIncludingDefaults because they were never part of the original props
   * and they were never passed as a prop down to horizontal/vertical custom elements.
   * If we add these two to propsIncludingDefaults then we are changing public API.
   * Not a bad thing per se but also not necessary.
   */
  var verticalCoordinatesGenerator = propsIncludingDefaults.verticalCoordinatesGenerator || defaultVerticalCoordinatesGenerator;
  var horizontalCoordinatesGenerator = propsIncludingDefaults.horizontalCoordinatesGenerator || defaultHorizontalCoordinatesGenerator;
  var horizontalPoints = propsIncludingDefaults.horizontalPoints,
    verticalPoints = propsIncludingDefaults.verticalPoints;

  // No horizontal points are specified
  if ((!horizontalPoints || !horizontalPoints.length) && lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default()(horizontalCoordinatesGenerator)) {
    var isHorizontalValues = horizontalValues && horizontalValues.length;
    var generatorResult = horizontalCoordinatesGenerator({
      yAxis: yAxis ? _objectSpread(_objectSpread({}, yAxis), {}, {
        ticks: isHorizontalValues ? horizontalValues : yAxis.ticks
      }) : undefined,
      width: chartWidth,
      height: chartHeight,
      offset: offset
    }, isHorizontalValues ? true : syncWithTicks);
    (0,_util_LogUtils__WEBPACK_IMPORTED_MODULE_8__/* .warn */ .R)(Array.isArray(generatorResult), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(_typeof(generatorResult), "]"));
    if (Array.isArray(generatorResult)) {
      horizontalPoints = generatorResult;
    }
  }

  // No vertical points are specified
  if ((!verticalPoints || !verticalPoints.length) && lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default()(verticalCoordinatesGenerator)) {
    var isVerticalValues = verticalValues && verticalValues.length;
    var _generatorResult = verticalCoordinatesGenerator({
      xAxis: xAxis ? _objectSpread(_objectSpread({}, xAxis), {}, {
        ticks: isVerticalValues ? verticalValues : xAxis.ticks
      }) : undefined,
      width: chartWidth,
      height: chartHeight,
      offset: offset
    }, isVerticalValues ? true : syncWithTicks);
    (0,_util_LogUtils__WEBPACK_IMPORTED_MODULE_8__/* .warn */ .R)(Array.isArray(_generatorResult), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(_typeof(_generatorResult), "]"));
    if (Array.isArray(_generatorResult)) {
      verticalPoints = _generatorResult;
    }
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    className: "recharts-cartesian-grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Background, {
    fill: propsIncludingDefaults.fill,
    fillOpacity: propsIncludingDefaults.fillOpacity,
    x: propsIncludingDefaults.x,
    y: propsIncludingDefaults.y,
    width: propsIncludingDefaults.width,
    height: propsIncludingDefaults.height
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(HorizontalGridLines, _extends({}, propsIncludingDefaults, {
    offset: offset,
    horizontalPoints: horizontalPoints,
    xAxis: xAxis,
    yAxis: yAxis
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(VerticalGridLines, _extends({}, propsIncludingDefaults, {
    offset: offset,
    verticalPoints: verticalPoints,
    xAxis: xAxis,
    yAxis: yAxis
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(HorizontalStripes, _extends({}, propsIncludingDefaults, {
    horizontalPoints: horizontalPoints
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(VerticalStripes, _extends({}, propsIncludingDefaults, {
    verticalPoints: verticalPoints
  })));
}
CartesianGrid.displayName = 'CartesianGrid';

/***/ }),

/***/ 56473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ Line)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9950);
/* harmony import */ var react_smooth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36217);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93008);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40821);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59418);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(72004);
/* harmony import */ var _shape_Curve__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(76653);
/* harmony import */ var _shape_Dot__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(42143);
/* harmony import */ var _container_Layer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(62775);
/* harmony import */ var _component_LabelList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(67628);
/* harmony import */ var _ErrorBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(99064);
/* harmony import */ var _util_DataUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21570);
/* harmony import */ var _util_ReactUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(675);
/* harmony import */ var _util_Global__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(91792);
/* harmony import */ var _util_ChartUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95912);
var _excluded = ["type", "layout", "connectNulls", "ref"];
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
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
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : String(i);
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
/**
 * @fileOverview Line
 */















var Line = /*#__PURE__*/function (_PureComponent) {
  _inherits(Line, _PureComponent);
  function Line() {
    var _this;
    _classCallCheck(this, Line);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Line, [].concat(args));
    _defineProperty(_assertThisInitialized(_this), "state", {
      isAnimationFinished: true,
      totalLength: 0
    });
    _defineProperty(_assertThisInitialized(_this), "generateSimpleStrokeDasharray", function (totalLength, length) {
      return "".concat(length, "px ").concat(totalLength - length, "px");
    });
    _defineProperty(_assertThisInitialized(_this), "getStrokeDasharray", function (length, totalLength, lines) {
      var lineLength = lines.reduce(function (pre, next) {
        return pre + next;
      });

      // if lineLength is 0 return the default when no strokeDasharray is provided
      if (!lineLength) {
        return _this.generateSimpleStrokeDasharray(totalLength, length);
      }
      var count = Math.floor(length / lineLength);
      var remainLength = length % lineLength;
      var restLength = totalLength - length;
      var remainLines = [];
      for (var i = 0, sum = 0; i < lines.length; sum += lines[i], ++i) {
        if (sum + lines[i] > remainLength) {
          remainLines = [].concat(_toConsumableArray(lines.slice(0, i)), [remainLength - sum]);
          break;
        }
      }
      var emptyLines = remainLines.length % 2 === 0 ? [0, restLength] : [restLength];
      return [].concat(_toConsumableArray(Line.repeat(lines, count)), _toConsumableArray(remainLines), emptyLines).map(function (line) {
        return "".concat(line, "px");
      }).join(', ');
    });
    _defineProperty(_assertThisInitialized(_this), "id", (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_5__/* .uniqueId */ .NF)('recharts-line-'));
    _defineProperty(_assertThisInitialized(_this), "pathRef", function (node) {
      _this.mainCurve = node;
    });
    _defineProperty(_assertThisInitialized(_this), "handleAnimationEnd", function () {
      _this.setState({
        isAnimationFinished: true
      });
      if (_this.props.onAnimationEnd) {
        _this.props.onAnimationEnd();
      }
    });
    _defineProperty(_assertThisInitialized(_this), "handleAnimationStart", function () {
      _this.setState({
        isAnimationFinished: false
      });
      if (_this.props.onAnimationStart) {
        _this.props.onAnimationStart();
      }
    });
    return _this;
  }
  _createClass(Line, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.props.isAnimationActive) {
        return;
      }
      var totalLength = this.getTotalLength();
      this.setState({
        totalLength: totalLength
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (!this.props.isAnimationActive) {
        return;
      }
      var totalLength = this.getTotalLength();
      if (totalLength !== this.state.totalLength) {
        this.setState({
          totalLength: totalLength
        });
      }
    }
  }, {
    key: "getTotalLength",
    value: function getTotalLength() {
      var curveDom = this.mainCurve;
      try {
        return curveDom && curveDom.getTotalLength && curveDom.getTotalLength() || 0;
      } catch (err) {
        return 0;
      }
    }
  }, {
    key: "renderErrorBar",
    value: function renderErrorBar(needClip, clipPathId) {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished) {
        return null;
      }
      var _this$props = this.props,
        points = _this$props.points,
        xAxis = _this$props.xAxis,
        yAxis = _this$props.yAxis,
        layout = _this$props.layout,
        children = _this$props.children;
      var errorBarItems = (0,_util_ReactUtils__WEBPACK_IMPORTED_MODULE_6__/* .findAllByType */ .aS)(children, _ErrorBar__WEBPACK_IMPORTED_MODULE_7__/* .ErrorBar */ .u);
      if (!errorBarItems) {
        return null;
      }
      var dataPointFormatter = function dataPointFormatter(dataPoint, dataKey) {
        return {
          x: dataPoint.x,
          y: dataPoint.y,
          value: dataPoint.value,
          errorVal: (0,_util_ChartUtils__WEBPACK_IMPORTED_MODULE_8__/* .getValueByDataKey */ .kr)(dataPoint.payload, dataKey)
        };
      };
      var errorBarProps = {
        clipPath: needClip ? "url(#clipPath-".concat(clipPathId, ")") : null
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_container_Layer__WEBPACK_IMPORTED_MODULE_9__/* .Layer */ .W, errorBarProps, errorBarItems.map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(item, {
          key: "bar-".concat(item.props.dataKey),
          data: points,
          xAxis: xAxis,
          yAxis: yAxis,
          layout: layout,
          dataPointFormatter: dataPointFormatter
        });
      }));
    }
  }, {
    key: "renderDots",
    value: function renderDots(needClip, clipDot, clipPathId) {
      var isAnimationActive = this.props.isAnimationActive;
      if (isAnimationActive && !this.state.isAnimationFinished) {
        return null;
      }
      var _this$props2 = this.props,
        dot = _this$props2.dot,
        points = _this$props2.points,
        dataKey = _this$props2.dataKey;
      var lineProps = (0,_util_ReactUtils__WEBPACK_IMPORTED_MODULE_6__/* .filterProps */ .J9)(this.props, false);
      var customDotProps = (0,_util_ReactUtils__WEBPACK_IMPORTED_MODULE_6__/* .filterProps */ .J9)(dot, true);
      var dots = points.map(function (entry, i) {
        var dotProps = _objectSpread(_objectSpread(_objectSpread({
          key: "dot-".concat(i),
          r: 3
        }, lineProps), customDotProps), {}, {
          value: entry.value,
          dataKey: dataKey,
          cx: entry.x,
          cy: entry.y,
          index: i,
          payload: entry.payload
        });
        return Line.renderDotItem(dot, dotProps);
      });
      var dotsProps = {
        clipPath: needClip ? "url(#clipPath-".concat(clipDot ? '' : 'dots-').concat(clipPathId, ")") : null
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_container_Layer__WEBPACK_IMPORTED_MODULE_9__/* .Layer */ .W, _extends({
        className: "recharts-line-dots",
        key: "dots"
      }, dotsProps), dots);
    }
  }, {
    key: "renderCurveStatically",
    value: function renderCurveStatically(points, needClip, clipPathId, props) {
      var _this$props3 = this.props,
        type = _this$props3.type,
        layout = _this$props3.layout,
        connectNulls = _this$props3.connectNulls,
        ref = _this$props3.ref,
        others = _objectWithoutProperties(_this$props3, _excluded);
      var curveProps = _objectSpread(_objectSpread(_objectSpread({}, (0,_util_ReactUtils__WEBPACK_IMPORTED_MODULE_6__/* .filterProps */ .J9)(others, true)), {}, {
        fill: 'none',
        className: 'recharts-line-curve',
        clipPath: needClip ? "url(#clipPath-".concat(clipPathId, ")") : null,
        points: points
      }, props), {}, {
        type: type,
        layout: layout,
        connectNulls: connectNulls
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shape_Curve__WEBPACK_IMPORTED_MODULE_10__/* .Curve */ .I, _extends({}, curveProps, {
        pathRef: this.pathRef
      }));
    }
  }, {
    key: "renderCurveWithAnimation",
    value: function renderCurveWithAnimation(needClip, clipPathId) {
      var _this2 = this;
      var _this$props4 = this.props,
        points = _this$props4.points,
        strokeDasharray = _this$props4.strokeDasharray,
        isAnimationActive = _this$props4.isAnimationActive,
        animationBegin = _this$props4.animationBegin,
        animationDuration = _this$props4.animationDuration,
        animationEasing = _this$props4.animationEasing,
        animationId = _this$props4.animationId,
        animateNewValues = _this$props4.animateNewValues,
        width = _this$props4.width,
        height = _this$props4.height;
      var _this$state = this.state,
        prevPoints = _this$state.prevPoints,
        totalLength = _this$state.totalLength;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_smooth__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay, {
        begin: animationBegin,
        duration: animationDuration,
        isActive: isAnimationActive,
        easing: animationEasing,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "line-".concat(animationId),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function (_ref) {
        var t = _ref.t;
        if (prevPoints) {
          var prevPointsDiffFactor = prevPoints.length / points.length;
          var stepData = points.map(function (entry, index) {
            var prevPointIndex = Math.floor(index * prevPointsDiffFactor);
            if (prevPoints[prevPointIndex]) {
              var prev = prevPoints[prevPointIndex];
              var interpolatorX = (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_5__/* .interpolateNumber */ .Dj)(prev.x, entry.x);
              var interpolatorY = (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_5__/* .interpolateNumber */ .Dj)(prev.y, entry.y);
              return _objectSpread(_objectSpread({}, entry), {}, {
                x: interpolatorX(t),
                y: interpolatorY(t)
              });
            }

            // magic number of faking previous x and y location
            if (animateNewValues) {
              var _interpolatorX = (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_5__/* .interpolateNumber */ .Dj)(width * 2, entry.x);
              var _interpolatorY = (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_5__/* .interpolateNumber */ .Dj)(height / 2, entry.y);
              return _objectSpread(_objectSpread({}, entry), {}, {
                x: _interpolatorX(t),
                y: _interpolatorY(t)
              });
            }
            return _objectSpread(_objectSpread({}, entry), {}, {
              x: entry.x,
              y: entry.y
            });
          });
          return _this2.renderCurveStatically(stepData, needClip, clipPathId);
        }
        var interpolator = (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_5__/* .interpolateNumber */ .Dj)(0, totalLength);
        var curLength = interpolator(t);
        var currentStrokeDasharray;
        if (strokeDasharray) {
          var lines = "".concat(strokeDasharray).split(/[,\s]+/gim).map(function (num) {
            return parseFloat(num);
          });
          currentStrokeDasharray = _this2.getStrokeDasharray(curLength, totalLength, lines);
        } else {
          currentStrokeDasharray = _this2.generateSimpleStrokeDasharray(totalLength, curLength);
        }
        return _this2.renderCurveStatically(points, needClip, clipPathId, {
          strokeDasharray: currentStrokeDasharray
        });
      });
    }
  }, {
    key: "renderCurve",
    value: function renderCurve(needClip, clipPathId) {
      var _this$props5 = this.props,
        points = _this$props5.points,
        isAnimationActive = _this$props5.isAnimationActive;
      var _this$state2 = this.state,
        prevPoints = _this$state2.prevPoints,
        totalLength = _this$state2.totalLength;
      if (isAnimationActive && points && points.length && (!prevPoints && totalLength > 0 || !lodash_isEqual__WEBPACK_IMPORTED_MODULE_4___default()(prevPoints, points))) {
        return this.renderCurveWithAnimation(needClip, clipPathId);
      }
      return this.renderCurveStatically(points, needClip, clipPathId);
    }
  }, {
    key: "render",
    value: function render() {
      var _filterProps;
      var _this$props6 = this.props,
        hide = _this$props6.hide,
        dot = _this$props6.dot,
        points = _this$props6.points,
        className = _this$props6.className,
        xAxis = _this$props6.xAxis,
        yAxis = _this$props6.yAxis,
        top = _this$props6.top,
        left = _this$props6.left,
        width = _this$props6.width,
        height = _this$props6.height,
        isAnimationActive = _this$props6.isAnimationActive,
        id = _this$props6.id;
      if (hide || !points || !points.length) {
        return null;
      }
      var isAnimationFinished = this.state.isAnimationFinished;
      var hasSinglePoint = points.length === 1;
      var layerClass = (0,clsx__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)('recharts-line', className);
      var needClipX = xAxis && xAxis.allowDataOverflow;
      var needClipY = yAxis && yAxis.allowDataOverflow;
      var needClip = needClipX || needClipY;
      var clipPathId = lodash_isNil__WEBPACK_IMPORTED_MODULE_3___default()(id) ? this.id : id;
      var _ref2 = (_filterProps = (0,_util_ReactUtils__WEBPACK_IMPORTED_MODULE_6__/* .filterProps */ .J9)(dot, false)) !== null && _filterProps !== void 0 ? _filterProps : {
          r: 3,
          strokeWidth: 2
        },
        _ref2$r = _ref2.r,
        r = _ref2$r === void 0 ? 3 : _ref2$r,
        _ref2$strokeWidth = _ref2.strokeWidth,
        strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
      var _ref3 = (0,_util_ReactUtils__WEBPACK_IMPORTED_MODULE_6__/* .isDotProps */ .ON)(dot) ? dot : {},
        _ref3$clipDot = _ref3.clipDot,
        clipDot = _ref3$clipDot === void 0 ? true : _ref3$clipDot;
      var dotSize = r * 2 + strokeWidth;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_container_Layer__WEBPACK_IMPORTED_MODULE_9__/* .Layer */ .W, {
        className: layerClass
      }, needClipX || needClipY ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("clipPath", {
        id: "clipPath-".concat(clipPathId)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
        x: needClipX ? left : left - width / 2,
        y: needClipY ? top : top - height / 2,
        width: needClipX ? width : width * 2,
        height: needClipY ? height : height * 2
      })), !clipDot && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("clipPath", {
        id: "clipPath-dots-".concat(clipPathId)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
        x: left - dotSize / 2,
        y: top - dotSize / 2,
        width: width + dotSize,
        height: height + dotSize
      }))) : null, !hasSinglePoint && this.renderCurve(needClip, clipPathId), this.renderErrorBar(needClip, clipPathId), (hasSinglePoint || dot) && this.renderDots(needClip, clipDot, clipPathId), (!isAnimationActive || isAnimationFinished) && _component_LabelList__WEBPACK_IMPORTED_MODULE_12__/* .LabelList */ .Z.renderCallByParent(this.props, points));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.animationId !== prevState.prevAnimationId) {
        return {
          prevAnimationId: nextProps.animationId,
          curPoints: nextProps.points,
          prevPoints: prevState.curPoints
        };
      }
      if (nextProps.points !== prevState.curPoints) {
        return {
          curPoints: nextProps.points
        };
      }
      return null;
    }
  }, {
    key: "repeat",
    value: function repeat(lines, count) {
      var linesUnit = lines.length % 2 !== 0 ? [].concat(_toConsumableArray(lines), [0]) : lines;
      var result = [];
      for (var i = 0; i < count; ++i) {
        result = [].concat(_toConsumableArray(result), _toConsumableArray(linesUnit));
      }
      return result;
    }
  }, {
    key: "renderDotItem",
    value: function renderDotItem(option, props) {
      var dotItem;
      if ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(option)) {
        dotItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(option, props);
      } else if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_2___default()(option)) {
        dotItem = option(props);
      } else {
        var className = (0,clsx__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)('recharts-line-dot', typeof option !== 'boolean' ? option.className : '');
        dotItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shape_Dot__WEBPACK_IMPORTED_MODULE_13__/* .Dot */ .c, _extends({}, props, {
          className: className
        }));
      }
      return dotItem;
    }
  }]);
  return Line;
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);
_defineProperty(Line, "displayName", 'Line');
_defineProperty(Line, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  connectNulls: false,
  activeDot: true,
  dot: true,
  legendType: 'line',
  stroke: '#3182bd',
  strokeWidth: 1,
  fill: '#fff',
  points: [],
  isAnimationActive: !_util_Global__WEBPACK_IMPORTED_MODULE_14__/* .Global */ .m.isSsr,
  animateNewValues: true,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: 'ease',
  hide: false,
  label: false
});
/**
 * Compose the data of each group
 * @param {Object} props The props from the component
 * @param  {Object} xAxis   The configuration of x-axis
 * @param  {Object} yAxis   The configuration of y-axis
 * @param  {String} dataKey The unique key of a group
 * @return {Array}  Composed data
 */
_defineProperty(Line, "getComposedData", function (_ref4) {
  var props = _ref4.props,
    xAxis = _ref4.xAxis,
    yAxis = _ref4.yAxis,
    xAxisTicks = _ref4.xAxisTicks,
    yAxisTicks = _ref4.yAxisTicks,
    dataKey = _ref4.dataKey,
    bandSize = _ref4.bandSize,
    displayedData = _ref4.displayedData,
    offset = _ref4.offset;
  var layout = props.layout;
  var points = displayedData.map(function (entry, index) {
    var value = (0,_util_ChartUtils__WEBPACK_IMPORTED_MODULE_8__/* .getValueByDataKey */ .kr)(entry, dataKey);
    if (layout === 'horizontal') {
      return {
        x: (0,_util_ChartUtils__WEBPACK_IMPORTED_MODULE_8__/* .getCateCoordinateOfLine */ .nb)({
          axis: xAxis,
          ticks: xAxisTicks,
          bandSize: bandSize,
          entry: entry,
          index: index
        }),
        y: lodash_isNil__WEBPACK_IMPORTED_MODULE_3___default()(value) ? null : yAxis.scale(value),
        value: value,
        payload: entry
      };
    }
    return {
      x: lodash_isNil__WEBPACK_IMPORTED_MODULE_3___default()(value) ? null : xAxis.scale(value),
      y: (0,_util_ChartUtils__WEBPACK_IMPORTED_MODULE_8__/* .getCateCoordinateOfLine */ .nb)({
        axis: yAxis,
        ticks: yAxisTicks,
        bandSize: bandSize,
        entry: entry,
        index: index
      }),
      value: value,
      payload: entry
    };
  });
  return _objectSpread({
    points: points,
    layout: layout
  }, offset);
});

/***/ }),

/***/ 60158:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ XAxis)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9950);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72004);
/* harmony import */ var _context_chartLayoutContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74167);
/* harmony import */ var _CartesianAxis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51412);
/* harmony import */ var _util_ChartUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95912);
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
/**
 * @fileOverview X Axis
 */







/** Define of XAxis props */

var XAxis = function XAxis(_ref) {
  var xAxisId = _ref.xAxisId;
  var width = (0,_context_chartLayoutContext__WEBPACK_IMPORTED_MODULE_1__/* .useChartWidth */ .yi)();
  var height = (0,_context_chartLayoutContext__WEBPACK_IMPORTED_MODULE_1__/* .useChartHeight */ .rY)();
  var axisOptions = (0,_context_chartLayoutContext__WEBPACK_IMPORTED_MODULE_1__/* .useXAxisOrThrow */ .AF)(xAxisId);
  if (axisOptions == null) {
    return null;
  }
  return /*#__PURE__*/(
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CartesianAxis__WEBPACK_IMPORTED_MODULE_2__/* .CartesianAxis */ .u, _extends({}, axisOptions, {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)("recharts-".concat(axisOptions.axisType, " ").concat(axisOptions.axisType), axisOptions.className),
      viewBox: {
        x: 0,
        y: 0,
        width: width,
        height: height
      },
      ticksGenerator: function ticksGenerator(axis) {
        return (0,_util_ChartUtils__WEBPACK_IMPORTED_MODULE_4__/* .getTicksOfAxis */ .Rh)(axis, true);
      }
    }))
  );
};
XAxis.displayName = 'XAxis';
XAxis.defaultProps = {
  allowDecimals: true,
  hide: false,
  orientation: 'bottom',
  width: 0,
  height: 30,
  mirror: false,
  xAxisId: 0,
  tickCount: 5,
  type: 'category',
  padding: {
    left: 0,
    right: 0
  },
  allowDataOverflow: false,
  scale: 'auto',
  reversed: false,
  allowDuplicatedCategory: true
};

/***/ }),

/***/ 44813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ YAxis)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9950);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72004);
/* harmony import */ var _context_chartLayoutContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74167);
/* harmony import */ var _CartesianAxis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51412);
/* harmony import */ var _util_ChartUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95912);
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
/**
 * @fileOverview Y Axis
 */





var YAxis = function YAxis(_ref) {
  var yAxisId = _ref.yAxisId;
  var width = (0,_context_chartLayoutContext__WEBPACK_IMPORTED_MODULE_1__/* .useChartWidth */ .yi)();
  var height = (0,_context_chartLayoutContext__WEBPACK_IMPORTED_MODULE_1__/* .useChartHeight */ .rY)();
  var axisOptions = (0,_context_chartLayoutContext__WEBPACK_IMPORTED_MODULE_1__/* .useYAxisOrThrow */ .Nk)(yAxisId);
  if (axisOptions == null) {
    return null;
  }
  return /*#__PURE__*/(
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CartesianAxis__WEBPACK_IMPORTED_MODULE_2__/* .CartesianAxis */ .u, _extends({}, axisOptions, {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)("recharts-".concat(axisOptions.axisType, " ").concat(axisOptions.axisType), axisOptions.className),
      viewBox: {
        x: 0,
        y: 0,
        width: width,
        height: height
      },
      ticksGenerator: function ticksGenerator(axis) {
        return (0,_util_ChartUtils__WEBPACK_IMPORTED_MODULE_4__/* .getTicksOfAxis */ .Rh)(axis, true);
      }
    }))
  );
};
YAxis.displayName = 'YAxis';
YAxis.defaultProps = {
  allowDuplicatedCategory: true,
  allowDecimals: true,
  hide: false,
  orientation: 'left',
  width: 60,
  height: 0,
  mirror: false,
  yAxisId: 0,
  tickCount: 5,
  type: 'number',
  padding: {
    top: 0,
    bottom: 0
  },
  allowDataOverflow: false,
  scale: 'auto',
  reversed: false
};

/***/ }),

/***/ 82142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  f: () => (/* binding */ getTicks)
});

// EXTERNAL MODULE: ./node_modules/lodash/isFunction.js
var isFunction = __webpack_require__(93008);
var isFunction_default = /*#__PURE__*/__webpack_require__.n(isFunction);
// EXTERNAL MODULE: ./node_modules/recharts/es6/util/DataUtils.js
var DataUtils = __webpack_require__(21570);
// EXTERNAL MODULE: ./node_modules/recharts/es6/util/DOMUtils.js
var DOMUtils = __webpack_require__(45070);
// EXTERNAL MODULE: ./node_modules/recharts/es6/util/Global.js
var Global = __webpack_require__(91792);
// EXTERNAL MODULE: ./node_modules/recharts/es6/util/CartesianUtils.js
var CartesianUtils = __webpack_require__(71052);
;// ./node_modules/recharts/es6/util/getEveryNthWithCondition.js
/**
 * Given an array and a number N, return a new array which contains every nTh
 * element of the input array. For n below 1, an empty array is returned.
 * If isValid is provided, all candidates must suffice the condition, else undefined is returned.
 * @param {T[]} array An input array.
 * @param {integer} n A number
 * @param {Function} isValid A function to evaluate a candidate form the array
 * @returns {T[]} The result array of the same type as the input array.
 */
function getEveryNthWithCondition(array, n, isValid) {
  if (n < 1) {
    return [];
  }
  if (n === 1 && isValid === undefined) {
    return array;
  }
  var result = [];
  for (var i = 0; i < array.length; i += n) {
    if (isValid === undefined || isValid(array[i]) === true) {
      result.push(array[i]);
    } else {
      return undefined;
    }
  }
  return result;
}
;// ./node_modules/recharts/es6/util/TickUtils.js


function getAngledTickWidth(contentSize, unitSize, angle) {
  var size = {
    width: contentSize.width + unitSize.width,
    height: contentSize.height + unitSize.height
  };
  return (0,CartesianUtils/* getAngledRectangleWidth */.bx)(size, angle);
}
function getTickBoundaries(viewBox, sign, sizeKey) {
  var isWidth = sizeKey === 'width';
  var x = viewBox.x,
    y = viewBox.y,
    width = viewBox.width,
    height = viewBox.height;
  if (sign === 1) {
    return {
      start: isWidth ? x : y,
      end: isWidth ? x + width : y + height
    };
  }
  return {
    start: isWidth ? x + width : y + height,
    end: isWidth ? x : y
  };
}
function isVisible(sign, tickPosition, getSize, start, end) {
  /* Since getSize() is expensive (it reads the ticks' size from the DOM), we do this check first to avoid calculating
   * the tick's size. */
  if (sign * tickPosition < sign * start || sign * tickPosition > sign * end) {
    return false;
  }
  var size = getSize();
  return sign * (tickPosition - sign * size / 2 - start) >= 0 && sign * (tickPosition + sign * size / 2 - end) <= 0;
}
function getNumberIntervalTicks(ticks, interval) {
  return getEveryNthWithCondition(ticks, interval + 1);
}
;// ./node_modules/recharts/es6/cartesian/getEquidistantTicks.js


function getEquidistantTicks(sign, boundaries, getTickSize, ticks, minTickGap) {
  var result = (ticks || []).slice();
  var initialStart = boundaries.start,
    end = boundaries.end;
  var index = 0;
  // Premature optimisation idea 1: Estimate a lower bound, and start from there.
  // For now, start from every tick
  var stepsize = 1;
  var start = initialStart;
  var _loop = function _loop() {
      // Given stepsize, evaluate whether every stepsize-th tick can be shown.
      // If it can not, then increase the stepsize by 1, and try again.

      var entry = ticks === null || ticks === void 0 ? void 0 : ticks[index];

      // Break condition - If we have evaluate all the ticks, then we are done.
      if (entry === undefined) {
        return {
          v: getEveryNthWithCondition(ticks, stepsize)
        };
      }

      // Check if the element collides with the next element
      var i = index;
      var size;
      var getSize = function getSize() {
        if (size === undefined) {
          size = getTickSize(entry, i);
        }
        return size;
      };
      var tickCoord = entry.coordinate;
      // We will always show the first tick.
      var isShow = index === 0 || isVisible(sign, tickCoord, getSize, start, end);
      if (!isShow) {
        // Start all over with a larger stepsize
        index = 0;
        start = initialStart;
        stepsize += 1;
      }
      if (isShow) {
        // If it can be shown, update the start
        start = tickCoord + sign * (getSize() / 2 + minTickGap);
        index += stepsize;
      }
    },
    _ret;
  while (stepsize <= result.length) {
    _ret = _loop();
    if (_ret) return _ret.v;
  }
  return [];
}
;// ./node_modules/recharts/es6/cartesian/getTicks.js
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
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
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : String(i);
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}






function getTicksEnd(sign, boundaries, getTickSize, ticks, minTickGap) {
  var result = (ticks || []).slice();
  var len = result.length;
  var start = boundaries.start;
  var end = boundaries.end;
  var _loop = function _loop(i) {
    var entry = result[i];
    var size;
    var getSize = function getSize() {
      if (size === undefined) {
        size = getTickSize(entry, i);
      }
      return size;
    };
    if (i === len - 1) {
      var gap = sign * (entry.coordinate + sign * getSize() / 2 - end);
      result[i] = entry = _objectSpread(_objectSpread({}, entry), {}, {
        tickCoord: gap > 0 ? entry.coordinate - gap * sign : entry.coordinate
      });
    } else {
      result[i] = entry = _objectSpread(_objectSpread({}, entry), {}, {
        tickCoord: entry.coordinate
      });
    }
    var isShow = isVisible(sign, entry.tickCoord, getSize, start, end);
    if (isShow) {
      end = entry.tickCoord - sign * (getSize() / 2 + minTickGap);
      result[i] = _objectSpread(_objectSpread({}, entry), {}, {
        isShow: true
      });
    }
  };
  for (var i = len - 1; i >= 0; i--) {
    _loop(i);
  }
  return result;
}
function getTicksStart(sign, boundaries, getTickSize, ticks, minTickGap, preserveEnd) {
  var result = (ticks || []).slice();
  var len = result.length;
  var start = boundaries.start,
    end = boundaries.end;
  if (preserveEnd) {
    // Try to guarantee the tail to be displayed
    var tail = ticks[len - 1];
    var tailSize = getTickSize(tail, len - 1);
    var tailGap = sign * (tail.coordinate + sign * tailSize / 2 - end);
    result[len - 1] = tail = _objectSpread(_objectSpread({}, tail), {}, {
      tickCoord: tailGap > 0 ? tail.coordinate - tailGap * sign : tail.coordinate
    });
    var isTailShow = isVisible(sign, tail.tickCoord, function () {
      return tailSize;
    }, start, end);
    if (isTailShow) {
      end = tail.tickCoord - sign * (tailSize / 2 + minTickGap);
      result[len - 1] = _objectSpread(_objectSpread({}, tail), {}, {
        isShow: true
      });
    }
  }
  var count = preserveEnd ? len - 1 : len;
  var _loop2 = function _loop2(i) {
    var entry = result[i];
    var size;
    var getSize = function getSize() {
      if (size === undefined) {
        size = getTickSize(entry, i);
      }
      return size;
    };
    if (i === 0) {
      var gap = sign * (entry.coordinate - sign * getSize() / 2 - start);
      result[i] = entry = _objectSpread(_objectSpread({}, entry), {}, {
        tickCoord: gap < 0 ? entry.coordinate - gap * sign : entry.coordinate
      });
    } else {
      result[i] = entry = _objectSpread(_objectSpread({}, entry), {}, {
        tickCoord: entry.coordinate
      });
    }
    var isShow = isVisible(sign, entry.tickCoord, getSize, start, end);
    if (isShow) {
      start = entry.tickCoord + sign * (getSize() / 2 + minTickGap);
      result[i] = _objectSpread(_objectSpread({}, entry), {}, {
        isShow: true
      });
    }
  };
  for (var i = 0; i < count; i++) {
    _loop2(i);
  }
  return result;
}
function getTicks(props, fontSize, letterSpacing) {
  var tick = props.tick,
    ticks = props.ticks,
    viewBox = props.viewBox,
    minTickGap = props.minTickGap,
    orientation = props.orientation,
    interval = props.interval,
    tickFormatter = props.tickFormatter,
    unit = props.unit,
    angle = props.angle;
  if (!ticks || !ticks.length || !tick) {
    return [];
  }
  if ((0,DataUtils/* isNumber */.Et)(interval) || Global/* Global */.m.isSsr) {
    return getNumberIntervalTicks(ticks, typeof interval === 'number' && (0,DataUtils/* isNumber */.Et)(interval) ? interval : 0);
  }
  var candidates = [];
  var sizeKey = orientation === 'top' || orientation === 'bottom' ? 'width' : 'height';
  var unitSize = unit && sizeKey === 'width' ? (0,DOMUtils/* getStringSize */.Pu)(unit, {
    fontSize: fontSize,
    letterSpacing: letterSpacing
  }) : {
    width: 0,
    height: 0
  };
  var getTickSize = function getTickSize(content, index) {
    var value = isFunction_default()(tickFormatter) ? tickFormatter(content.value, index) : content.value;
    // Recharts only supports angles when sizeKey === 'width'
    return sizeKey === 'width' ? getAngledTickWidth((0,DOMUtils/* getStringSize */.Pu)(value, {
      fontSize: fontSize,
      letterSpacing: letterSpacing
    }), unitSize, angle) : (0,DOMUtils/* getStringSize */.Pu)(value, {
      fontSize: fontSize,
      letterSpacing: letterSpacing
    })[sizeKey];
  };
  var sign = ticks.length >= 2 ? (0,DataUtils/* mathSign */.sA)(ticks[1].coordinate - ticks[0].coordinate) : 1;
  var boundaries = getTickBoundaries(viewBox, sign, sizeKey);
  if (interval === 'equidistantPreserveStart') {
    return getEquidistantTicks(sign, boundaries, getTickSize, ticks, minTickGap);
  }
  if (interval === 'preserveStart' || interval === 'preserveStartEnd') {
    candidates = getTicksStart(sign, boundaries, getTickSize, ticks, minTickGap, interval === 'preserveStartEnd');
  } else {
    candidates = getTicksEnd(sign, boundaries, getTickSize, ticks, minTickGap);
  }
  return candidates.filter(function (entry) {
    return entry.isShow;
  });
}

/***/ }),

/***/ 34508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  X: () => (/* binding */ ComposedChart)
});

// EXTERNAL MODULE: ./node_modules/recharts/es6/chart/generateCategoricalChart.js + 15 modules
var generateCategoricalChart = __webpack_require__(3864);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(72004);
// EXTERNAL MODULE: ./node_modules/react-smooth/es6/index.js + 15 modules
var es6 = __webpack_require__(36217);
// EXTERNAL MODULE: ./node_modules/lodash/isFunction.js
var isFunction = __webpack_require__(93008);
var isFunction_default = /*#__PURE__*/__webpack_require__.n(isFunction);
// EXTERNAL MODULE: ./node_modules/lodash/max.js
var max = __webpack_require__(62780);
var max_default = /*#__PURE__*/__webpack_require__.n(max);
// EXTERNAL MODULE: ./node_modules/lodash/isNil.js
var isNil = __webpack_require__(40821);
var isNil_default = /*#__PURE__*/__webpack_require__.n(isNil);
// EXTERNAL MODULE: ./node_modules/lodash/isNaN.js
var lodash_isNaN = __webpack_require__(21099);
var isNaN_default = /*#__PURE__*/__webpack_require__.n(lodash_isNaN);
// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(59418);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
// EXTERNAL MODULE: ./node_modules/recharts/es6/shape/Curve.js + 13 modules
var Curve = __webpack_require__(76653);
// EXTERNAL MODULE: ./node_modules/recharts/es6/shape/Dot.js
var Dot = __webpack_require__(42143);
// EXTERNAL MODULE: ./node_modules/recharts/es6/container/Layer.js
var Layer = __webpack_require__(62775);
// EXTERNAL MODULE: ./node_modules/recharts/es6/component/LabelList.js
var LabelList = __webpack_require__(67628);
// EXTERNAL MODULE: ./node_modules/recharts/es6/util/Global.js
var Global = __webpack_require__(91792);
// EXTERNAL MODULE: ./node_modules/recharts/es6/util/DataUtils.js
var DataUtils = __webpack_require__(21570);
// EXTERNAL MODULE: ./node_modules/recharts/es6/util/ChartUtils.js + 86 modules
var ChartUtils = __webpack_require__(95912);
// EXTERNAL MODULE: ./node_modules/recharts/es6/util/ReactUtils.js
var ReactUtils = __webpack_require__(675);
;// ./node_modules/recharts/es6/cartesian/Area.js
var _excluded = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"];
var _Area;
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
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
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : String(i);
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
/**
 * @fileOverview Area
 */
















var Area = /*#__PURE__*/function (_PureComponent) {
  _inherits(Area, _PureComponent);
  function Area() {
    var _this;
    _classCallCheck(this, Area);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Area, [].concat(args));
    _defineProperty(_assertThisInitialized(_this), "state", {
      isAnimationFinished: true
    });
    _defineProperty(_assertThisInitialized(_this), "id", (0,DataUtils/* uniqueId */.NF)('recharts-area-'));
    _defineProperty(_assertThisInitialized(_this), "handleAnimationEnd", function () {
      var onAnimationEnd = _this.props.onAnimationEnd;
      _this.setState({
        isAnimationFinished: true
      });
      if (isFunction_default()(onAnimationEnd)) {
        onAnimationEnd();
      }
    });
    _defineProperty(_assertThisInitialized(_this), "handleAnimationStart", function () {
      var onAnimationStart = _this.props.onAnimationStart;
      _this.setState({
        isAnimationFinished: false
      });
      if (isFunction_default()(onAnimationStart)) {
        onAnimationStart();
      }
    });
    return _this;
  }
  _createClass(Area, [{
    key: "renderDots",
    value: function renderDots(needClip, clipDot, clipPathId) {
      var isAnimationActive = this.props.isAnimationActive;
      var isAnimationFinished = this.state.isAnimationFinished;
      if (isAnimationActive && !isAnimationFinished) {
        return null;
      }
      var _this$props = this.props,
        dot = _this$props.dot,
        points = _this$props.points,
        dataKey = _this$props.dataKey;
      var areaProps = (0,ReactUtils/* filterProps */.J9)(this.props, false);
      var customDotProps = (0,ReactUtils/* filterProps */.J9)(dot, true);
      var dots = points.map(function (entry, i) {
        var dotProps = _objectSpread(_objectSpread(_objectSpread({
          key: "dot-".concat(i),
          r: 3
        }, areaProps), customDotProps), {}, {
          index: i,
          cx: entry.x,
          cy: entry.y,
          dataKey: dataKey,
          value: entry.value,
          payload: entry.payload,
          points: points
        });
        return Area.renderDotItem(dot, dotProps);
      });
      var dotsProps = {
        clipPath: needClip ? "url(#clipPath-".concat(clipDot ? '' : 'dots-').concat(clipPathId, ")") : null
      };
      return /*#__PURE__*/react.createElement(Layer/* Layer */.W, _extends({
        className: "recharts-area-dots"
      }, dotsProps), dots);
    }
  }, {
    key: "renderHorizontalRect",
    value: function renderHorizontalRect(alpha) {
      var _this$props2 = this.props,
        baseLine = _this$props2.baseLine,
        points = _this$props2.points,
        strokeWidth = _this$props2.strokeWidth;
      var startX = points[0].x;
      var endX = points[points.length - 1].x;
      var width = alpha * Math.abs(startX - endX);
      var maxY = max_default()(points.map(function (entry) {
        return entry.y || 0;
      }));
      if ((0,DataUtils/* isNumber */.Et)(baseLine) && typeof baseLine === 'number') {
        maxY = Math.max(baseLine, maxY);
      } else if (baseLine && Array.isArray(baseLine) && baseLine.length) {
        maxY = Math.max(max_default()(baseLine.map(function (entry) {
          return entry.y || 0;
        })), maxY);
      }
      if ((0,DataUtils/* isNumber */.Et)(maxY)) {
        return /*#__PURE__*/react.createElement("rect", {
          x: startX < endX ? startX : startX - width,
          y: 0,
          width: width,
          height: Math.floor(maxY + (strokeWidth ? parseInt("".concat(strokeWidth), 10) : 1))
        });
      }
      return null;
    }
  }, {
    key: "renderVerticalRect",
    value: function renderVerticalRect(alpha) {
      var _this$props3 = this.props,
        baseLine = _this$props3.baseLine,
        points = _this$props3.points,
        strokeWidth = _this$props3.strokeWidth;
      var startY = points[0].y;
      var endY = points[points.length - 1].y;
      var height = alpha * Math.abs(startY - endY);
      var maxX = max_default()(points.map(function (entry) {
        return entry.x || 0;
      }));
      if ((0,DataUtils/* isNumber */.Et)(baseLine) && typeof baseLine === 'number') {
        maxX = Math.max(baseLine, maxX);
      } else if (baseLine && Array.isArray(baseLine) && baseLine.length) {
        maxX = Math.max(max_default()(baseLine.map(function (entry) {
          return entry.x || 0;
        })), maxX);
      }
      if ((0,DataUtils/* isNumber */.Et)(maxX)) {
        return /*#__PURE__*/react.createElement("rect", {
          x: 0,
          y: startY < endY ? startY : startY - height,
          width: maxX + (strokeWidth ? parseInt("".concat(strokeWidth), 10) : 1),
          height: Math.floor(height)
        });
      }
      return null;
    }
  }, {
    key: "renderClipRect",
    value: function renderClipRect(alpha) {
      var layout = this.props.layout;
      if (layout === 'vertical') {
        return this.renderVerticalRect(alpha);
      }
      return this.renderHorizontalRect(alpha);
    }
  }, {
    key: "renderAreaStatically",
    value: function renderAreaStatically(points, baseLine, needClip, clipPathId) {
      var _this$props4 = this.props,
        layout = _this$props4.layout,
        type = _this$props4.type,
        stroke = _this$props4.stroke,
        connectNulls = _this$props4.connectNulls,
        isRange = _this$props4.isRange,
        ref = _this$props4.ref,
        others = _objectWithoutProperties(_this$props4, _excluded);
      return /*#__PURE__*/react.createElement(Layer/* Layer */.W, {
        clipPath: needClip ? "url(#clipPath-".concat(clipPathId, ")") : null
      }, /*#__PURE__*/react.createElement(Curve/* Curve */.I, _extends({}, (0,ReactUtils/* filterProps */.J9)(others, true), {
        points: points,
        connectNulls: connectNulls,
        type: type,
        baseLine: baseLine,
        layout: layout,
        stroke: "none",
        className: "recharts-area-area"
      })), stroke !== 'none' && /*#__PURE__*/react.createElement(Curve/* Curve */.I, _extends({}, (0,ReactUtils/* filterProps */.J9)(this.props, false), {
        className: "recharts-area-curve",
        layout: layout,
        type: type,
        connectNulls: connectNulls,
        fill: "none",
        points: points
      })), stroke !== 'none' && isRange && /*#__PURE__*/react.createElement(Curve/* Curve */.I, _extends({}, (0,ReactUtils/* filterProps */.J9)(this.props, false), {
        className: "recharts-area-curve",
        layout: layout,
        type: type,
        connectNulls: connectNulls,
        fill: "none",
        points: baseLine
      })));
    }
  }, {
    key: "renderAreaWithAnimation",
    value: function renderAreaWithAnimation(needClip, clipPathId) {
      var _this2 = this;
      var _this$props5 = this.props,
        points = _this$props5.points,
        baseLine = _this$props5.baseLine,
        isAnimationActive = _this$props5.isAnimationActive,
        animationBegin = _this$props5.animationBegin,
        animationDuration = _this$props5.animationDuration,
        animationEasing = _this$props5.animationEasing,
        animationId = _this$props5.animationId;
      var _this$state = this.state,
        prevPoints = _this$state.prevPoints,
        prevBaseLine = _this$state.prevBaseLine;
      // const clipPathId = isNil(id) ? this.id : id;

      return /*#__PURE__*/react.createElement(es6/* default */.Ay, {
        begin: animationBegin,
        duration: animationDuration,
        isActive: isAnimationActive,
        easing: animationEasing,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "area-".concat(animationId),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function (_ref) {
        var t = _ref.t;
        if (prevPoints) {
          var prevPointsDiffFactor = prevPoints.length / points.length;
          // update animtaion
          var stepPoints = points.map(function (entry, index) {
            var prevPointIndex = Math.floor(index * prevPointsDiffFactor);
            if (prevPoints[prevPointIndex]) {
              var prev = prevPoints[prevPointIndex];
              var interpolatorX = (0,DataUtils/* interpolateNumber */.Dj)(prev.x, entry.x);
              var interpolatorY = (0,DataUtils/* interpolateNumber */.Dj)(prev.y, entry.y);
              return _objectSpread(_objectSpread({}, entry), {}, {
                x: interpolatorX(t),
                y: interpolatorY(t)
              });
            }
            return entry;
          });
          var stepBaseLine;
          if ((0,DataUtils/* isNumber */.Et)(baseLine) && typeof baseLine === 'number') {
            var interpolator = (0,DataUtils/* interpolateNumber */.Dj)(prevBaseLine, baseLine);
            stepBaseLine = interpolator(t);
          } else if (isNil_default()(baseLine) || isNaN_default()(baseLine)) {
            var _interpolator = (0,DataUtils/* interpolateNumber */.Dj)(prevBaseLine, 0);
            stepBaseLine = _interpolator(t);
          } else {
            stepBaseLine = baseLine.map(function (entry, index) {
              var prevPointIndex = Math.floor(index * prevPointsDiffFactor);
              if (prevBaseLine[prevPointIndex]) {
                var prev = prevBaseLine[prevPointIndex];
                var interpolatorX = (0,DataUtils/* interpolateNumber */.Dj)(prev.x, entry.x);
                var interpolatorY = (0,DataUtils/* interpolateNumber */.Dj)(prev.y, entry.y);
                return _objectSpread(_objectSpread({}, entry), {}, {
                  x: interpolatorX(t),
                  y: interpolatorY(t)
                });
              }
              return entry;
            });
          }
          return _this2.renderAreaStatically(stepPoints, stepBaseLine, needClip, clipPathId);
        }
        return /*#__PURE__*/react.createElement(Layer/* Layer */.W, null, /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("clipPath", {
          id: "animationClipPath-".concat(clipPathId)
        }, _this2.renderClipRect(t))), /*#__PURE__*/react.createElement(Layer/* Layer */.W, {
          clipPath: "url(#animationClipPath-".concat(clipPathId, ")")
        }, _this2.renderAreaStatically(points, baseLine, needClip, clipPathId)));
      });
    }
  }, {
    key: "renderArea",
    value: function renderArea(needClip, clipPathId) {
      var _this$props6 = this.props,
        points = _this$props6.points,
        baseLine = _this$props6.baseLine,
        isAnimationActive = _this$props6.isAnimationActive;
      var _this$state2 = this.state,
        prevPoints = _this$state2.prevPoints,
        prevBaseLine = _this$state2.prevBaseLine,
        totalLength = _this$state2.totalLength;
      if (isAnimationActive && points && points.length && (!prevPoints && totalLength > 0 || !isEqual_default()(prevPoints, points) || !isEqual_default()(prevBaseLine, baseLine))) {
        return this.renderAreaWithAnimation(needClip, clipPathId);
      }
      return this.renderAreaStatically(points, baseLine, needClip, clipPathId);
    }
  }, {
    key: "render",
    value: function render() {
      var _filterProps;
      var _this$props7 = this.props,
        hide = _this$props7.hide,
        dot = _this$props7.dot,
        points = _this$props7.points,
        className = _this$props7.className,
        top = _this$props7.top,
        left = _this$props7.left,
        xAxis = _this$props7.xAxis,
        yAxis = _this$props7.yAxis,
        width = _this$props7.width,
        height = _this$props7.height,
        isAnimationActive = _this$props7.isAnimationActive,
        id = _this$props7.id;
      if (hide || !points || !points.length) {
        return null;
      }
      var isAnimationFinished = this.state.isAnimationFinished;
      var hasSinglePoint = points.length === 1;
      var layerClass = (0,clsx/* default */.A)('recharts-area', className);
      var needClipX = xAxis && xAxis.allowDataOverflow;
      var needClipY = yAxis && yAxis.allowDataOverflow;
      var needClip = needClipX || needClipY;
      var clipPathId = isNil_default()(id) ? this.id : id;
      var _ref2 = (_filterProps = (0,ReactUtils/* filterProps */.J9)(dot, false)) !== null && _filterProps !== void 0 ? _filterProps : {
          r: 3,
          strokeWidth: 2
        },
        _ref2$r = _ref2.r,
        r = _ref2$r === void 0 ? 3 : _ref2$r,
        _ref2$strokeWidth = _ref2.strokeWidth,
        strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
      var _ref3 = (0,ReactUtils/* isDotProps */.ON)(dot) ? dot : {},
        _ref3$clipDot = _ref3.clipDot,
        clipDot = _ref3$clipDot === void 0 ? true : _ref3$clipDot;
      var dotSize = r * 2 + strokeWidth;
      return /*#__PURE__*/react.createElement(Layer/* Layer */.W, {
        className: layerClass
      }, needClipX || needClipY ? /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("clipPath", {
        id: "clipPath-".concat(clipPathId)
      }, /*#__PURE__*/react.createElement("rect", {
        x: needClipX ? left : left - width / 2,
        y: needClipY ? top : top - height / 2,
        width: needClipX ? width : width * 2,
        height: needClipY ? height : height * 2
      })), !clipDot && /*#__PURE__*/react.createElement("clipPath", {
        id: "clipPath-dots-".concat(clipPathId)
      }, /*#__PURE__*/react.createElement("rect", {
        x: left - dotSize / 2,
        y: top - dotSize / 2,
        width: width + dotSize,
        height: height + dotSize
      }))) : null, !hasSinglePoint ? this.renderArea(needClip, clipPathId) : null, (dot || hasSinglePoint) && this.renderDots(needClip, clipDot, clipPathId), (!isAnimationActive || isAnimationFinished) && LabelList/* LabelList */.Z.renderCallByParent(this.props, points));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.animationId !== prevState.prevAnimationId) {
        return {
          prevAnimationId: nextProps.animationId,
          curPoints: nextProps.points,
          curBaseLine: nextProps.baseLine,
          prevPoints: prevState.curPoints,
          prevBaseLine: prevState.curBaseLine
        };
      }
      if (nextProps.points !== prevState.curPoints || nextProps.baseLine !== prevState.curBaseLine) {
        return {
          curPoints: nextProps.points,
          curBaseLine: nextProps.baseLine
        };
      }
      return null;
    }
  }]);
  return Area;
}(react.PureComponent);
_Area = Area;
_defineProperty(Area, "displayName", 'Area');
_defineProperty(Area, "defaultProps", {
  stroke: '#3182bd',
  fill: '#3182bd',
  fillOpacity: 0.6,
  xAxisId: 0,
  yAxisId: 0,
  legendType: 'line',
  connectNulls: false,
  // points of area
  points: [],
  dot: false,
  activeDot: true,
  hide: false,
  isAnimationActive: !Global/* Global */.m.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: 'ease'
});
_defineProperty(Area, "getBaseValue", function (props, item, xAxis, yAxis) {
  var layout = props.layout,
    chartBaseValue = props.baseValue;
  var itemBaseValue = item.props.baseValue;

  // The baseValue can be defined both on the AreaChart as well as on the Area.
  // The value for the item takes precedence.
  var baseValue = itemBaseValue !== null && itemBaseValue !== void 0 ? itemBaseValue : chartBaseValue;
  if ((0,DataUtils/* isNumber */.Et)(baseValue) && typeof baseValue === 'number') {
    return baseValue;
  }
  var numericAxis = layout === 'horizontal' ? yAxis : xAxis;
  var domain = numericAxis.scale.domain();
  if (numericAxis.type === 'number') {
    var domainMax = Math.max(domain[0], domain[1]);
    var domainMin = Math.min(domain[0], domain[1]);
    if (baseValue === 'dataMin') {
      return domainMin;
    }
    if (baseValue === 'dataMax') {
      return domainMax;
    }
    return domainMax < 0 ? domainMax : Math.max(Math.min(domain[0], domain[1]), 0);
  }
  if (baseValue === 'dataMin') {
    return domain[0];
  }
  if (baseValue === 'dataMax') {
    return domain[1];
  }
  return domain[0];
});
_defineProperty(Area, "getComposedData", function (_ref4) {
  var props = _ref4.props,
    item = _ref4.item,
    xAxis = _ref4.xAxis,
    yAxis = _ref4.yAxis,
    xAxisTicks = _ref4.xAxisTicks,
    yAxisTicks = _ref4.yAxisTicks,
    bandSize = _ref4.bandSize,
    dataKey = _ref4.dataKey,
    stackedData = _ref4.stackedData,
    dataStartIndex = _ref4.dataStartIndex,
    displayedData = _ref4.displayedData,
    offset = _ref4.offset;
  var layout = props.layout;
  var hasStack = stackedData && stackedData.length;
  var baseValue = _Area.getBaseValue(props, item, xAxis, yAxis);
  var isHorizontalLayout = layout === 'horizontal';
  var isRange = false;
  var points = displayedData.map(function (entry, index) {
    var value;
    if (hasStack) {
      value = stackedData[dataStartIndex + index];
    } else {
      value = (0,ChartUtils/* getValueByDataKey */.kr)(entry, dataKey);
      if (!Array.isArray(value)) {
        value = [baseValue, value];
      } else {
        isRange = true;
      }
    }
    var isBreakPoint = value[1] == null || hasStack && (0,ChartUtils/* getValueByDataKey */.kr)(entry, dataKey) == null;
    if (isHorizontalLayout) {
      return {
        x: (0,ChartUtils/* getCateCoordinateOfLine */.nb)({
          axis: xAxis,
          ticks: xAxisTicks,
          bandSize: bandSize,
          entry: entry,
          index: index
        }),
        y: isBreakPoint ? null : yAxis.scale(value[1]),
        value: value,
        payload: entry
      };
    }
    return {
      x: isBreakPoint ? null : xAxis.scale(value[1]),
      y: (0,ChartUtils/* getCateCoordinateOfLine */.nb)({
        axis: yAxis,
        ticks: yAxisTicks,
        bandSize: bandSize,
        entry: entry,
        index: index
      }),
      value: value,
      payload: entry
    };
  });
  var baseLine;
  if (hasStack || isRange) {
    baseLine = points.map(function (entry) {
      var x = Array.isArray(entry.value) ? entry.value[0] : null;
      if (isHorizontalLayout) {
        return {
          x: entry.x,
          y: x != null && entry.y != null ? yAxis.scale(x) : null
        };
      }
      return {
        x: x != null ? xAxis.scale(x) : null,
        y: entry.y
      };
    });
  } else {
    baseLine = isHorizontalLayout ? yAxis.scale(baseValue) : xAxis.scale(baseValue);
  }
  return _objectSpread({
    points: points,
    baseLine: baseLine,
    layout: layout,
    isRange: isRange
  }, offset);
});
_defineProperty(Area, "renderDotItem", function (option, props) {
  var dotItem;
  if ( /*#__PURE__*/react.isValidElement(option)) {
    dotItem = /*#__PURE__*/react.cloneElement(option, props);
  } else if (isFunction_default()(option)) {
    dotItem = option(props);
  } else {
    var className = (0,clsx/* default */.A)('recharts-area-dot', typeof option !== 'boolean' ? option.className : '');
    dotItem = /*#__PURE__*/react.createElement(Dot/* Dot */.c, _extends({}, props, {
      className: className
    }));
  }
  return dotItem;
});
// EXTERNAL MODULE: ./node_modules/recharts/es6/cartesian/Bar.js + 1 modules
var Bar = __webpack_require__(85706);
// EXTERNAL MODULE: ./node_modules/recharts/es6/cartesian/Line.js
var Line = __webpack_require__(56473);
;// ./node_modules/recharts/es6/cartesian/ZAxis.js
/**
 * @fileOverview Z Axis
 */

var ZAxis = function ZAxis() {
  return null;
};
ZAxis.displayName = 'ZAxis';
ZAxis.defaultProps = {
  zAxisId: 0,
  range: [64, 64],
  scale: 'auto',
  type: 'number'
};
// EXTERNAL MODULE: ./node_modules/recharts/es6/cartesian/ErrorBar.js
var ErrorBar = __webpack_require__(99064);
// EXTERNAL MODULE: ./node_modules/recharts/es6/component/Cell.js
var Cell = __webpack_require__(72528);
// EXTERNAL MODULE: ./node_modules/recharts/es6/util/types.js
var types = __webpack_require__(41958);
// EXTERNAL MODULE: ./node_modules/recharts/es6/shape/Symbols.js + 15 modules
var Symbols = __webpack_require__(86432);
// EXTERNAL MODULE: ./node_modules/recharts/es6/util/ActiveShapeUtils.js + 1 modules
var ActiveShapeUtils = __webpack_require__(30046);
;// ./node_modules/recharts/es6/util/ScatterUtils.js
var ScatterUtils_excluded = ["option", "isActive"];
function ScatterUtils_extends() {
  ScatterUtils_extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return ScatterUtils_extends.apply(this, arguments);
}
function ScatterUtils_objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = ScatterUtils_objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function ScatterUtils_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}



function ScatterSymbol(_ref) {
  var option = _ref.option,
    isActive = _ref.isActive,
    props = ScatterUtils_objectWithoutProperties(_ref, ScatterUtils_excluded);
  if (typeof option === 'string') {
    return /*#__PURE__*/react.createElement(ActiveShapeUtils/* Shape */.yp, ScatterUtils_extends({
      option: /*#__PURE__*/react.createElement(Symbols/* Symbols */.i, ScatterUtils_extends({
        type: option
      }, props)),
      isActive: isActive,
      shapeType: "symbols"
    }, props));
  }
  return /*#__PURE__*/react.createElement(ActiveShapeUtils/* Shape */.yp, ScatterUtils_extends({
    option: option,
    isActive: isActive,
    shapeType: "symbols"
  }, props));
}
;// ./node_modules/recharts/es6/cartesian/Scatter.js
var _Scatter;
function Scatter_typeof(o) {
  "@babel/helpers - typeof";

  return Scatter_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, Scatter_typeof(o);
}
function Scatter_extends() {
  Scatter_extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return Scatter_extends.apply(this, arguments);
}
function Scatter_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function Scatter_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? Scatter_ownKeys(Object(t), !0).forEach(function (r) {
      Scatter_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Scatter_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Scatter_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function Scatter_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, Scatter_toPropertyKey(descriptor.key), descriptor);
  }
}
function Scatter_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) Scatter_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) Scatter_defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function Scatter_callSuper(t, o, e) {
  return o = Scatter_getPrototypeOf(o), Scatter_possibleConstructorReturn(t, Scatter_isNativeReflectConstruct() ? Reflect.construct(o, e || [], Scatter_getPrototypeOf(t).constructor) : o.apply(t, e));
}
function Scatter_possibleConstructorReturn(self, call) {
  if (call && (Scatter_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return Scatter_assertThisInitialized(self);
}
function Scatter_isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (Scatter_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
function Scatter_getPrototypeOf(o) {
  Scatter_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return Scatter_getPrototypeOf(o);
}
function Scatter_assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function Scatter_inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) Scatter_setPrototypeOf(subClass, superClass);
}
function Scatter_setPrototypeOf(o, p) {
  Scatter_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return Scatter_setPrototypeOf(o, p);
}
function Scatter_defineProperty(obj, key, value) {
  key = Scatter_toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function Scatter_toPropertyKey(t) {
  var i = Scatter_toPrimitive(t, "string");
  return "symbol" == Scatter_typeof(i) ? i : String(i);
}
function Scatter_toPrimitive(t, r) {
  if ("object" != Scatter_typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != Scatter_typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
/**
 * @fileOverview Render a group of scatters
 */


















var Scatter = /*#__PURE__*/function (_PureComponent) {
  Scatter_inherits(Scatter, _PureComponent);
  function Scatter() {
    var _this;
    Scatter_classCallCheck(this, Scatter);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = Scatter_callSuper(this, Scatter, [].concat(args));
    Scatter_defineProperty(Scatter_assertThisInitialized(_this), "state", {
      isAnimationFinished: false
    });
    Scatter_defineProperty(Scatter_assertThisInitialized(_this), "handleAnimationEnd", function () {
      _this.setState({
        isAnimationFinished: true
      });
    });
    Scatter_defineProperty(Scatter_assertThisInitialized(_this), "handleAnimationStart", function () {
      _this.setState({
        isAnimationFinished: false
      });
    });
    Scatter_defineProperty(Scatter_assertThisInitialized(_this), "id", (0,DataUtils/* uniqueId */.NF)('recharts-scatter-'));
    return _this;
  }
  Scatter_createClass(Scatter, [{
    key: "renderSymbolsStatically",
    value: function renderSymbolsStatically(points) {
      var _this2 = this;
      var _this$props = this.props,
        shape = _this$props.shape,
        activeShape = _this$props.activeShape,
        activeIndex = _this$props.activeIndex;
      var baseProps = (0,ReactUtils/* filterProps */.J9)(this.props, false);
      return points.map(function (entry, i) {
        var isActive = activeIndex === i;
        var option = isActive ? activeShape : shape;
        var props = Scatter_objectSpread(Scatter_objectSpread({
          key: "symbol-".concat(i)
        }, baseProps), entry);
        return /*#__PURE__*/react.createElement(Layer/* Layer */.W, Scatter_extends({
          className: "recharts-scatter-symbol"
        }, (0,types/* adaptEventsOfChild */.XC)(_this2.props, entry, i), {
          // eslint-disable-next-line react/no-array-index-key
          key: "symbol-".concat(entry === null || entry === void 0 ? void 0 : entry.cx, "-").concat(entry === null || entry === void 0 ? void 0 : entry.cy, "-").concat(entry === null || entry === void 0 ? void 0 : entry.size, "-").concat(i),
          role: "img"
        }), /*#__PURE__*/react.createElement(ScatterSymbol, Scatter_extends({
          option: option,
          isActive: isActive
        }, props)));
      });
    }
  }, {
    key: "renderSymbolsWithAnimation",
    value: function renderSymbolsWithAnimation() {
      var _this3 = this;
      var _this$props2 = this.props,
        points = _this$props2.points,
        isAnimationActive = _this$props2.isAnimationActive,
        animationBegin = _this$props2.animationBegin,
        animationDuration = _this$props2.animationDuration,
        animationEasing = _this$props2.animationEasing,
        animationId = _this$props2.animationId;
      var prevPoints = this.state.prevPoints;
      return /*#__PURE__*/react.createElement(es6/* default */.Ay, {
        begin: animationBegin,
        duration: animationDuration,
        isActive: isAnimationActive,
        easing: animationEasing,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "pie-".concat(animationId),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function (_ref) {
        var t = _ref.t;
        var stepData = points.map(function (entry, index) {
          var prev = prevPoints && prevPoints[index];
          if (prev) {
            var interpolatorCx = (0,DataUtils/* interpolateNumber */.Dj)(prev.cx, entry.cx);
            var interpolatorCy = (0,DataUtils/* interpolateNumber */.Dj)(prev.cy, entry.cy);
            var interpolatorSize = (0,DataUtils/* interpolateNumber */.Dj)(prev.size, entry.size);
            return Scatter_objectSpread(Scatter_objectSpread({}, entry), {}, {
              cx: interpolatorCx(t),
              cy: interpolatorCy(t),
              size: interpolatorSize(t)
            });
          }
          var interpolator = (0,DataUtils/* interpolateNumber */.Dj)(0, entry.size);
          return Scatter_objectSpread(Scatter_objectSpread({}, entry), {}, {
            size: interpolator(t)
          });
        });
        return /*#__PURE__*/react.createElement(Layer/* Layer */.W, null, _this3.renderSymbolsStatically(stepData));
      });
    }
  }, {
    key: "renderSymbols",
    value: function renderSymbols() {
      var _this$props3 = this.props,
        points = _this$props3.points,
        isAnimationActive = _this$props3.isAnimationActive;
      var prevPoints = this.state.prevPoints;
      if (isAnimationActive && points && points.length && (!prevPoints || !isEqual_default()(prevPoints, points))) {
        return this.renderSymbolsWithAnimation();
      }
      return this.renderSymbolsStatically(points);
    }
  }, {
    key: "renderErrorBar",
    value: function renderErrorBar() {
      var isAnimationActive = this.props.isAnimationActive;
      if (isAnimationActive && !this.state.isAnimationFinished) {
        return null;
      }
      var _this$props4 = this.props,
        points = _this$props4.points,
        xAxis = _this$props4.xAxis,
        yAxis = _this$props4.yAxis,
        children = _this$props4.children;
      var errorBarItems = (0,ReactUtils/* findAllByType */.aS)(children, ErrorBar/* ErrorBar */.u);
      if (!errorBarItems) {
        return null;
      }
      return errorBarItems.map(function (item, i) {
        var _item$props = item.props,
          direction = _item$props.direction,
          errorDataKey = _item$props.dataKey;
        return /*#__PURE__*/react.cloneElement(item, {
          key: "".concat(direction, "-").concat(errorDataKey, "-").concat(points[i]),
          data: points,
          xAxis: xAxis,
          yAxis: yAxis,
          layout: direction === 'x' ? 'vertical' : 'horizontal',
          dataPointFormatter: function dataPointFormatter(dataPoint, dataKey) {
            return {
              x: dataPoint.cx,
              y: dataPoint.cy,
              value: direction === 'x' ? +dataPoint.node.x : +dataPoint.node.y,
              errorVal: (0,ChartUtils/* getValueByDataKey */.kr)(dataPoint, dataKey)
            };
          }
        });
      });
    }
  }, {
    key: "renderLine",
    value: function renderLine() {
      var _this$props5 = this.props,
        points = _this$props5.points,
        line = _this$props5.line,
        lineType = _this$props5.lineType,
        lineJointType = _this$props5.lineJointType;
      var scatterProps = (0,ReactUtils/* filterProps */.J9)(this.props, false);
      var customLineProps = (0,ReactUtils/* filterProps */.J9)(line, false);
      var linePoints, lineItem;
      if (lineType === 'joint') {
        linePoints = points.map(function (entry) {
          return {
            x: entry.cx,
            y: entry.cy
          };
        });
      } else if (lineType === 'fitting') {
        var _getLinearRegression = (0,DataUtils/* getLinearRegression */.jG)(points),
          xmin = _getLinearRegression.xmin,
          xmax = _getLinearRegression.xmax,
          a = _getLinearRegression.a,
          b = _getLinearRegression.b;
        var linearExp = function linearExp(x) {
          return a * x + b;
        };
        linePoints = [{
          x: xmin,
          y: linearExp(xmin)
        }, {
          x: xmax,
          y: linearExp(xmax)
        }];
      }
      var lineProps = Scatter_objectSpread(Scatter_objectSpread(Scatter_objectSpread({}, scatterProps), {}, {
        fill: 'none',
        stroke: scatterProps && scatterProps.fill
      }, customLineProps), {}, {
        points: linePoints
      });
      if ( /*#__PURE__*/react.isValidElement(line)) {
        lineItem = /*#__PURE__*/react.cloneElement(line, lineProps);
      } else if (isFunction_default()(line)) {
        lineItem = line(lineProps);
      } else {
        lineItem = /*#__PURE__*/react.createElement(Curve/* Curve */.I, Scatter_extends({}, lineProps, {
          type: lineJointType
        }));
      }
      return /*#__PURE__*/react.createElement(Layer/* Layer */.W, {
        className: "recharts-scatter-line",
        key: "recharts-scatter-line"
      }, lineItem);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
        hide = _this$props6.hide,
        points = _this$props6.points,
        line = _this$props6.line,
        className = _this$props6.className,
        xAxis = _this$props6.xAxis,
        yAxis = _this$props6.yAxis,
        left = _this$props6.left,
        top = _this$props6.top,
        width = _this$props6.width,
        height = _this$props6.height,
        id = _this$props6.id,
        isAnimationActive = _this$props6.isAnimationActive;
      if (hide || !points || !points.length) {
        return null;
      }
      var isAnimationFinished = this.state.isAnimationFinished;
      var layerClass = (0,clsx/* default */.A)('recharts-scatter', className);
      var needClipX = xAxis && xAxis.allowDataOverflow;
      var needClipY = yAxis && yAxis.allowDataOverflow;
      var needClip = needClipX || needClipY;
      var clipPathId = isNil_default()(id) ? this.id : id;
      return /*#__PURE__*/react.createElement(Layer/* Layer */.W, {
        className: layerClass,
        clipPath: needClip ? "url(#clipPath-".concat(clipPathId, ")") : null
      }, needClipX || needClipY ? /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("clipPath", {
        id: "clipPath-".concat(clipPathId)
      }, /*#__PURE__*/react.createElement("rect", {
        x: needClipX ? left : left - width / 2,
        y: needClipY ? top : top - height / 2,
        width: needClipX ? width : width * 2,
        height: needClipY ? height : height * 2
      }))) : null, line && this.renderLine(), this.renderErrorBar(), /*#__PURE__*/react.createElement(Layer/* Layer */.W, {
        key: "recharts-scatter-symbols"
      }, this.renderSymbols()), (!isAnimationActive || isAnimationFinished) && LabelList/* LabelList */.Z.renderCallByParent(this.props, points));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.animationId !== prevState.prevAnimationId) {
        return {
          prevAnimationId: nextProps.animationId,
          curPoints: nextProps.points,
          prevPoints: prevState.curPoints
        };
      }
      if (nextProps.points !== prevState.curPoints) {
        return {
          curPoints: nextProps.points
        };
      }
      return null;
    }
  }]);
  return Scatter;
}(react.PureComponent);
_Scatter = Scatter;
Scatter_defineProperty(Scatter, "displayName", 'Scatter');
Scatter_defineProperty(Scatter, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  zAxisId: 0,
  legendType: 'circle',
  lineType: 'joint',
  lineJointType: 'linear',
  data: [],
  shape: 'circle',
  hide: false,
  isAnimationActive: !Global/* Global */.m.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: 'linear'
});
/**
 * Compose the data of each group
 * @param  {Object} xAxis   The configuration of x-axis
 * @param  {Object} yAxis   The configuration of y-axis
 * @param  {String} dataKey The unique key of a group
 * @return {Array}  Composed data
 */
Scatter_defineProperty(Scatter, "getComposedData", function (_ref2) {
  var xAxis = _ref2.xAxis,
    yAxis = _ref2.yAxis,
    zAxis = _ref2.zAxis,
    item = _ref2.item,
    displayedData = _ref2.displayedData,
    xAxisTicks = _ref2.xAxisTicks,
    yAxisTicks = _ref2.yAxisTicks,
    offset = _ref2.offset;
  var tooltipType = item.props.tooltipType;
  var cells = (0,ReactUtils/* findAllByType */.aS)(item.props.children, Cell/* Cell */.f);
  var xAxisDataKey = isNil_default()(xAxis.dataKey) ? item.props.dataKey : xAxis.dataKey;
  var yAxisDataKey = isNil_default()(yAxis.dataKey) ? item.props.dataKey : yAxis.dataKey;
  var zAxisDataKey = zAxis && zAxis.dataKey;
  var defaultRangeZ = zAxis ? zAxis.range : ZAxis.defaultProps.range;
  var defaultZ = defaultRangeZ && defaultRangeZ[0];
  var xBandSize = xAxis.scale.bandwidth ? xAxis.scale.bandwidth() : 0;
  var yBandSize = yAxis.scale.bandwidth ? yAxis.scale.bandwidth() : 0;
  var points = displayedData.map(function (entry, index) {
    var x = (0,ChartUtils/* getValueByDataKey */.kr)(entry, xAxisDataKey);
    var y = (0,ChartUtils/* getValueByDataKey */.kr)(entry, yAxisDataKey);
    var z = !isNil_default()(zAxisDataKey) && (0,ChartUtils/* getValueByDataKey */.kr)(entry, zAxisDataKey) || '-';
    var tooltipPayload = [{
      name: isNil_default()(xAxis.dataKey) ? item.props.name : xAxis.name || xAxis.dataKey,
      unit: xAxis.unit || '',
      value: x,
      payload: entry,
      dataKey: xAxisDataKey,
      type: tooltipType
    }, {
      name: isNil_default()(yAxis.dataKey) ? item.props.name : yAxis.name || yAxis.dataKey,
      unit: yAxis.unit || '',
      value: y,
      payload: entry,
      dataKey: yAxisDataKey,
      type: tooltipType
    }];
    if (z !== '-') {
      tooltipPayload.push({
        name: zAxis.name || zAxis.dataKey,
        unit: zAxis.unit || '',
        value: z,
        payload: entry,
        dataKey: zAxisDataKey,
        type: tooltipType
      });
    }
    var cx = (0,ChartUtils/* getCateCoordinateOfLine */.nb)({
      axis: xAxis,
      ticks: xAxisTicks,
      bandSize: xBandSize,
      entry: entry,
      index: index,
      dataKey: xAxisDataKey
    });
    var cy = (0,ChartUtils/* getCateCoordinateOfLine */.nb)({
      axis: yAxis,
      ticks: yAxisTicks,
      bandSize: yBandSize,
      entry: entry,
      index: index,
      dataKey: yAxisDataKey
    });
    var size = z !== '-' ? zAxis.scale(z) : defaultZ;
    var radius = Math.sqrt(Math.max(size, 0) / Math.PI);
    return Scatter_objectSpread(Scatter_objectSpread({}, entry), {}, {
      cx: cx,
      cy: cy,
      x: cx - radius,
      y: cy - radius,
      xAxis: xAxis,
      yAxis: yAxis,
      zAxis: zAxis,
      width: 2 * radius,
      height: 2 * radius,
      size: size,
      node: {
        x: x,
        y: y,
        z: z
      },
      tooltipPayload: tooltipPayload,
      tooltipPosition: {
        x: cx,
        y: cy
      },
      payload: entry
    }, cells && cells[index] && cells[index].props);
  });
  return Scatter_objectSpread({
    points: points
  }, offset);
});
// EXTERNAL MODULE: ./node_modules/recharts/es6/cartesian/XAxis.js
var XAxis = __webpack_require__(60158);
// EXTERNAL MODULE: ./node_modules/recharts/es6/cartesian/YAxis.js
var YAxis = __webpack_require__(44813);
// EXTERNAL MODULE: ./node_modules/recharts/es6/util/CartesianUtils.js
var CartesianUtils = __webpack_require__(71052);
;// ./node_modules/recharts/es6/chart/ComposedChart.js
/**
 * @fileOverview Composed Chart
 */









var ComposedChart = (0,generateCategoricalChart/* generateCategoricalChart */.gu)({
  chartName: 'ComposedChart',
  GraphicalChild: [Line/* Line */.N, Area, Bar/* Bar */.y, Scatter],
  axisComponents: [{
    axisType: 'xAxis',
    AxisComp: XAxis/* XAxis */.W
  }, {
    axisType: 'yAxis',
    AxisComp: YAxis/* YAxis */.h
  }, {
    axisType: 'zAxis',
    AxisComp: ZAxis
  }],
  formatAxisMap: CartesianUtils/* formatAxisMap */.pr
});

/***/ }),

/***/ 81095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ ResponsiveContainer)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72004);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9950);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80492);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71093);
/* harmony import */ var _util_DataUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21570);
/* harmony import */ var _util_LogUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84824);
/* harmony import */ var _util_ReactUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(675);
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
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
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : String(i);
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
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
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
/**
 * @fileOverview Wrapper component to make charts adapt to the size of parent * DOM
 */







var ResponsiveContainer = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, ref) {
  var aspect = _ref.aspect,
    _ref$initialDimension = _ref.initialDimension,
    initialDimension = _ref$initialDimension === void 0 ? {
      width: -1,
      height: -1
    } : _ref$initialDimension,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? '100%' : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? '100%' : _ref$height,
    _ref$minWidth = _ref.minWidth,
    minWidth = _ref$minWidth === void 0 ? 0 : _ref$minWidth,
    minHeight = _ref.minHeight,
    maxHeight = _ref.maxHeight,
    children = _ref.children,
    _ref$debounce = _ref.debounce,
    debounce = _ref$debounce === void 0 ? 0 : _ref$debounce,
    id = _ref.id,
    className = _ref.className,
    onResize = _ref.onResize,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style;
  var containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var onResizeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  onResizeRef.current = onResize;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, function () {
    return Object.defineProperty(containerRef.current, 'current', {
      get: function get() {
        // eslint-disable-next-line no-console
        console.warn('The usage of ref.current.current is deprecated and will no longer be supported.');
        return containerRef.current;
      },
      configurable: true
    });
  });
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      containerWidth: initialDimension.width,
      containerHeight: initialDimension.height
    }),
    _useState2 = _slicedToArray(_useState, 2),
    sizes = _useState2[0],
    setSizes = _useState2[1];
  var setContainerSize = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (newWidth, newHeight) {
    setSizes(function (prevState) {
      var roundedWidth = Math.round(newWidth);
      var roundedHeight = Math.round(newHeight);
      if (prevState.containerWidth === roundedWidth && prevState.containerHeight === roundedHeight) {
        return prevState;
      }
      return {
        containerWidth: roundedWidth,
        containerHeight: roundedHeight
      };
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var callback = function callback(entries) {
      var _onResizeRef$current;
      var _entries$0$contentRec = entries[0].contentRect,
        containerWidth = _entries$0$contentRec.width,
        containerHeight = _entries$0$contentRec.height;
      setContainerSize(containerWidth, containerHeight);
      (_onResizeRef$current = onResizeRef.current) === null || _onResizeRef$current === void 0 || _onResizeRef$current.call(onResizeRef, containerWidth, containerHeight);
    };
    if (debounce > 0) {
      callback = lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default()(callback, debounce, {
        trailing: true,
        leading: false
      });
    }
    var observer = new ResizeObserver(callback);
    var _containerRef$current = containerRef.current.getBoundingClientRect(),
      containerWidth = _containerRef$current.width,
      containerHeight = _containerRef$current.height;
    setContainerSize(containerWidth, containerHeight);
    observer.observe(containerRef.current);
    return function () {
      observer.disconnect();
    };
  }, [setContainerSize, debounce]);
  var chartContent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var containerWidth = sizes.containerWidth,
      containerHeight = sizes.containerHeight;
    if (containerWidth < 0 || containerHeight < 0) {
      return null;
    }
    (0,_util_LogUtils__WEBPACK_IMPORTED_MODULE_3__/* .warn */ .R)((0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_4__/* .isPercent */ ._3)(width) || (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_4__/* .isPercent */ ._3)(height), "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.", width, height);
    (0,_util_LogUtils__WEBPACK_IMPORTED_MODULE_3__/* .warn */ .R)(!aspect || aspect > 0, 'The aspect(%s) must be greater than zero.', aspect);
    var calculatedWidth = (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_4__/* .isPercent */ ._3)(width) ? containerWidth : width;
    var calculatedHeight = (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_4__/* .isPercent */ ._3)(height) ? containerHeight : height;
    if (aspect && aspect > 0) {
      // Preserve the desired aspect ratio
      if (calculatedWidth) {
        // Will default to using width for aspect ratio
        calculatedHeight = calculatedWidth / aspect;
      } else if (calculatedHeight) {
        // But we should also take height into consideration
        calculatedWidth = calculatedHeight * aspect;
      }

      // if maxHeight is set, overwrite if calculatedHeight is greater than maxHeight
      if (maxHeight && calculatedHeight > maxHeight) {
        calculatedHeight = maxHeight;
      }
    }
    (0,_util_LogUtils__WEBPACK_IMPORTED_MODULE_3__/* .warn */ .R)(calculatedWidth > 0 || calculatedHeight > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", calculatedWidth, calculatedHeight, width, height, minWidth, minHeight, aspect);
    var isCharts = !Array.isArray(children) && (0,react_is__WEBPACK_IMPORTED_MODULE_2__.isElement)(children) && (0,_util_ReactUtils__WEBPACK_IMPORTED_MODULE_5__/* .getDisplayName */ .Mn)(children.type).endsWith('Chart');
    return react__WEBPACK_IMPORTED_MODULE_0__.Children.map(children, function (child) {
      if ((0,react_is__WEBPACK_IMPORTED_MODULE_2__.isElement)(child)) {
        return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child, _objectSpread({
          width: calculatedWidth,
          height: calculatedHeight
        }, isCharts ? {
          style: _objectSpread({
            height: '100%',
            width: '100%',
            maxHeight: calculatedHeight,
            maxWidth: calculatedWidth
          }, child.props.style)
        } : {}));
      }
      return child;
    });
  }, [aspect, children, height, maxHeight, minHeight, minWidth, sizes, width]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: id ? "".concat(id) : undefined,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)('recharts-responsive-container', className),
    style: _objectSpread(_objectSpread({}, style), {}, {
      width: width,
      height: height,
      minWidth: minWidth,
      minHeight: minHeight,
      maxHeight: maxHeight
    }),
    ref: containerRef
  }, chartContent);
});

/***/ }),

/***/ 72004:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export clsx */
function r(e) {
  var t,
    f,
    n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;else if ("object" == typeof e) if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  } else for (f in e) e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

/***/ }),

/***/ 67033:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ invariant)
/* harmony export */ });
var isProduction = "production" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
  if (condition) {
    return;
  }
  if (isProduction) {
    throw new Error(prefix);
  }
  var provided = typeof message === 'function' ? message() : message;
  var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
  throw new Error(value);
}


/***/ })

}]);