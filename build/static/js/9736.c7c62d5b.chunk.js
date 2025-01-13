(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[9736],{

/***/ 5992:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58168);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9950);
/* harmony import */ var _ant_design_icons_svg_es_asn_BarsOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51111);
/* harmony import */ var _components_AntdIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61187);

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var BarsOutlined = function BarsOutlined(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_AntdIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({}, props, {
    ref: ref,
    icon: _ant_design_icons_svg_es_asn_BarsOutlined__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A
  }));
};
if (false) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(BarsOutlined));

/***/ }),

/***/ 10604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58168);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9950);
/* harmony import */ var _ant_design_icons_svg_es_asn_CalendarOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10331);
/* harmony import */ var _components_AntdIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61187);

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var CalendarOutlined = function CalendarOutlined(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_AntdIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({}, props, {
    ref: ref,
    icon: _ant_design_icons_svg_es_asn_CalendarOutlined__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A
  }));
};
if (false) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(CalendarOutlined));

/***/ }),

/***/ 84649:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

/***/ }),

/***/ 87542:
/***/ (function(module) {

!function (e, i) {
   true ? module.exports = i() : 0;
}(this, function () {
  "use strict";

  return function (e, i, t) {
    i.prototype.isBetween = function (e, i, s, f) {
      var n = t(e),
        o = t(i),
        r = "(" === (f = f || "()")[0],
        u = ")" === f[1];
      return (r ? this.isAfter(n, s) : !this.isBefore(n, s)) && (u ? this.isBefore(o, s) : !this.isAfter(o, s)) || (r ? this.isBefore(n, s) : !this.isAfter(n, s)) && (u ? this.isAfter(o, s) : !this.isBefore(o, s));
    };
  };
});

/***/ }),

/***/ 86825:
/***/ (function(module) {

!function (e, t) {
   true ? module.exports = t() : 0;
}(this, function () {
  "use strict";

  return function (e, t) {
    t.prototype.isSameOrAfter = function (e, t) {
      return this.isSame(e, t) || this.isAfter(e, t);
    };
  };
});

/***/ }),

/***/ 84028:
/***/ (function(module) {

!function (e, i) {
   true ? module.exports = i() : 0;
}(this, function () {
  "use strict";

  return function (e, i) {
    i.prototype.isSameOrBefore = function (e, i) {
      return this.isSame(e, i) || this.isBefore(e, i);
    };
  };
});

/***/ }),

/***/ 43978:
/***/ (function(module) {

!function (n, e) {
   true ? module.exports = e() : 0;
}(this, function () {
  "use strict";

  return function (n, e, t) {
    var r = e.prototype,
      o = function (n) {
        return n && (n.indexOf ? n : n.s);
      },
      u = function (n, e, t, r, u) {
        var i = n.name ? n : n.$locale(),
          a = o(i[e]),
          s = o(i[t]),
          f = a || s.map(function (n) {
            return n.slice(0, r);
          });
        if (!u) return f;
        var d = i.weekStart;
        return f.map(function (n, e) {
          return f[(e + (d || 0)) % 7];
        });
      },
      i = function () {
        return t.Ls[t.locale()];
      },
      a = function (n, e) {
        return n.formats[e] || function (n) {
          return n.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function (n, e, t) {
            return e || t.slice(1);
          });
        }(n.formats[e.toUpperCase()]);
      },
      s = function () {
        var n = this;
        return {
          months: function (e) {
            return e ? e.format("MMMM") : u(n, "months");
          },
          monthsShort: function (e) {
            return e ? e.format("MMM") : u(n, "monthsShort", "months", 3);
          },
          firstDayOfWeek: function () {
            return n.$locale().weekStart || 0;
          },
          weekdays: function (e) {
            return e ? e.format("dddd") : u(n, "weekdays");
          },
          weekdaysMin: function (e) {
            return e ? e.format("dd") : u(n, "weekdaysMin", "weekdays", 2);
          },
          weekdaysShort: function (e) {
            return e ? e.format("ddd") : u(n, "weekdaysShort", "weekdays", 3);
          },
          longDateFormat: function (e) {
            return a(n.$locale(), e);
          },
          meridiem: this.$locale().meridiem,
          ordinal: this.$locale().ordinal
        };
      };
    r.localeData = function () {
      return s.bind(this)();
    }, t.localeData = function () {
      var n = i();
      return {
        firstDayOfWeek: function () {
          return n.weekStart || 0;
        },
        weekdays: function () {
          return t.weekdays();
        },
        weekdaysShort: function () {
          return t.weekdaysShort();
        },
        weekdaysMin: function () {
          return t.weekdaysMin();
        },
        months: function () {
          return t.months();
        },
        monthsShort: function () {
          return t.monthsShort();
        },
        longDateFormat: function (e) {
          return a(n, e);
        },
        meridiem: n.meridiem,
        ordinal: n.ordinal
      };
    }, t.months = function () {
      return u(i(), "months");
    }, t.monthsShort = function () {
      return u(i(), "monthsShort", "months", 3);
    }, t.weekdays = function (n) {
      return u(i(), "weekdays", null, null, n);
    }, t.weekdaysShort = function (n) {
      return u(i(), "weekdaysShort", "weekdays", 3, n);
    }, t.weekdaysMin = function (n) {
      return u(i(), "weekdaysMin", "weekdays", 2, n);
    };
  };
});

/***/ }),

/***/ 77588:
/***/ (function(module) {

!function (e, t) {
   true ? module.exports = t() : 0;
}(this, function () {
  "use strict";

  var e = {
    LTS: "h:mm:ss A",
    LT: "h:mm A",
    L: "MM/DD/YYYY",
    LL: "MMMM D, YYYY",
    LLL: "MMMM D, YYYY h:mm A",
    LLLL: "dddd, MMMM D, YYYY h:mm A"
  };
  return function (t, o, n) {
    var r = o.prototype,
      i = r.format;
    n.en.formats = e, r.format = function (t) {
      void 0 === t && (t = "YYYY-MM-DDTHH:mm:ssZ");
      var o = this.$locale().formats,
        n = function (t, o) {
          return t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function (t, n, r) {
            var i = r && r.toUpperCase();
            return n || o[r] || e[r] || o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function (e, t, o) {
              return t || o.slice(1);
            });
          });
        }(t, void 0 === o ? {} : o);
      return i.call(this, n);
    };
  };
});

/***/ }),

/***/ 63158:
/***/ (function(module) {

!function (e, n) {
   true ? module.exports = n() : 0;
}(this, function () {
  "use strict";

  return function (e, n, t) {
    var i = function (e, n) {
      if (!n || !n.length || !n[0] || 1 === n.length && !n[0].length) return null;
      var t;
      1 === n.length && n[0].length > 0 && (n = n[0]);
      t = n[0];
      for (var i = 1; i < n.length; i += 1) n[i].isValid() && !n[i][e](t) || (t = n[i]);
      return t;
    };
    t.max = function () {
      var e = [].slice.call(arguments, 0);
      return i("isAfter", e);
    }, t.min = function () {
      var e = [].slice.call(arguments, 0);
      return i("isBefore", e);
    };
  };
});

/***/ }),

/***/ 36220:
/***/ (function(module) {

!function (t, i) {
   true ? module.exports = i() : 0;
}(this, function () {
  "use strict";

  var t = "minute",
    i = /[+-]\d\d(?::?\d\d)?/g,
    e = /([+-]|\d\d)/g;
  return function (s, f, n) {
    var u = f.prototype;
    n.utc = function (t) {
      var i = {
        date: t,
        utc: !0,
        args: arguments
      };
      return new f(i);
    }, u.utc = function (i) {
      var e = n(this.toDate(), {
        locale: this.$L,
        utc: !0
      });
      return i ? e.add(this.utcOffset(), t) : e;
    }, u.local = function () {
      return n(this.toDate(), {
        locale: this.$L,
        utc: !1
      });
    };
    var o = u.parse;
    u.parse = function (t) {
      t.utc && (this.$u = !0), this.$utils().u(t.$offset) || (this.$offset = t.$offset), o.call(this, t);
    };
    var r = u.init;
    u.init = function () {
      if (this.$u) {
        var t = this.$d;
        this.$y = t.getUTCFullYear(), this.$M = t.getUTCMonth(), this.$D = t.getUTCDate(), this.$W = t.getUTCDay(), this.$H = t.getUTCHours(), this.$m = t.getUTCMinutes(), this.$s = t.getUTCSeconds(), this.$ms = t.getUTCMilliseconds();
      } else r.call(this);
    };
    var a = u.utcOffset;
    u.utcOffset = function (s, f) {
      var n = this.$utils().u;
      if (n(s)) return this.$u ? 0 : n(this.$offset) ? a.call(this) : this.$offset;
      if ("string" == typeof s && (s = function (t) {
        void 0 === t && (t = "");
        var s = t.match(i);
        if (!s) return null;
        var f = ("" + s[0]).match(e) || ["-", 0, 0],
          n = f[0],
          u = 60 * +f[1] + +f[2];
        return 0 === u ? 0 : "+" === n ? u : -u;
      }(s), null === s)) return this;
      var u = Math.abs(s) <= 16 ? 60 * s : s,
        o = this;
      if (f) return o.$offset = u, o.$u = 0 === s, o;
      if (0 !== s) {
        var r = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
        (o = this.local().add(u + r, t)).$offset = u, o.$x.$localOffset = r;
      } else o = this.utc();
      return o;
    };
    var h = u.format;
    u.format = function (t) {
      var i = t || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
      return h.call(this, i);
    }, u.valueOf = function () {
      var t = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
      return this.$d.valueOf() - 6e4 * t;
    }, u.isUTC = function () {
      return !!this.$u;
    }, u.toISOString = function () {
      return this.toDate().toISOString();
    }, u.toString = function () {
      return this.toDate().toUTCString();
    };
    var l = u.toDate;
    u.toDate = function (t) {
      return "s" === t && this.$offset ? n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : l.call(this);
    };
    var c = u.diff;
    u.diff = function (t, i, e) {
      if (t && this.$u === t.$u) return c.call(this, t, i, e);
      var s = this.local(),
        f = n(t).local();
      return c.call(s, f, i, e);
    };
  };
});

/***/ }),

/***/ 10949:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */
var invariant = function (condition, format, a, b, c, d, e, f) {
  if (false) {}
  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }
    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};
module.exports = invariant;

/***/ }),

/***/ 85189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Vv: () => (/* binding */ Calendar$1),
  ye: () => (/* binding */ moment)
});

// UNUSED EXPORTS: DateLocalizer, Navigate, Views, components, dateFnsLocalizer, dayjsLocalizer, globalizeLocalizer, luxonLocalizer, move

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(80045);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(82284);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(23029);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(92901);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(85501);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__(52962);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(5544);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./node_modules/invariant/browser.js
var browser = __webpack_require__(10949);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);
;// ./node_modules/uncontrollable/lib/esm/utils.js

var noop = function noop() {};
function readOnlyPropType(handler, name) {
  return function (props, propName) {
    if (props[propName] !== undefined) {
      if (!props[handler]) {
        return new Error("You have provided a `" + propName + "` prop to `" + name + "` " + ("without an `" + handler + "` handler prop. This will render a read-only field. ") + ("If the field should be mutable use `" + defaultKey(propName) + "`. ") + ("Otherwise, set `" + handler + "`."));
      }
    }
  };
}
function uncontrolledPropTypes(controlledValues, displayName) {
  var propTypes = {};
  Object.keys(controlledValues).forEach(function (prop) {
    // add default propTypes for folks that use runtime checks
    propTypes[defaultKey(prop)] = noop;
    if (false) { var handler; }
  });
  return propTypes;
}
function isProp(props, prop) {
  return props[prop] !== undefined;
}
function defaultKey(key) {
  return 'default' + key.charAt(0).toUpperCase() + key.substr(1);
}
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

function utils_canAcceptRef(component) {
  return !!component && (typeof component !== 'function' || component.prototype && component.prototype.isReactComponent);
}
;// ./node_modules/uncontrollable/lib/esm/hook.js


function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}


function useUncontrolledProp(propValue, defaultValue, handler) {
  var wasPropRef = useRef(propValue !== undefined);
  var _useState = useState(defaultValue),
    stateValue = _useState[0],
    setState = _useState[1];
  var isProp = propValue !== undefined;
  var wasProp = wasPropRef.current;
  wasPropRef.current = isProp;
  /**
   * If a prop switches from controlled to Uncontrolled
   * reset its value to the defaultValue
   */

  if (!isProp && wasProp && stateValue !== defaultValue) {
    setState(defaultValue);
  }
  return [isProp ? propValue : stateValue, useCallback(function (value) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (handler) handler.apply(void 0, [value].concat(args));
    setState(value);
  }, [handler])];
}

function useUncontrolled(props, config) {
  return Object.keys(config).reduce(function (result, fieldName) {
    var _extends2;
    var _ref = result,
      defaultValue = _ref[Utils.defaultKey(fieldName)],
      propsValue = _ref[fieldName],
      rest = _objectWithoutPropertiesLoose(_ref, [Utils.defaultKey(fieldName), fieldName].map(_toPropertyKey));
    var handlerName = config[fieldName];
    var _useUncontrolledProp = useUncontrolledProp(propsValue, defaultValue, props[handlerName]),
      value = _useUncontrolledProp[0],
      handler = _useUncontrolledProp[1];
    return _extends({}, rest, (_extends2 = {}, _extends2[fieldName] = value, _extends2[handlerName] = handler, _extends2));
  }, props);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(77387);
;// ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}
function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}
function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(prevProps, prevState);
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;
function polyfill(Component) {
  var prototype = Component.prototype;
  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }
  if (typeof Component.getDerivedStateFromProps !== 'function' && typeof prototype.getSnapshotBeforeUpdate !== 'function') {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
    var componentName = Component.displayName || Component.name;
    var newApiName = typeof Component.getDerivedStateFromProps === 'function' ? 'getDerivedStateFromProps()' : 'getSnapshotBeforeUpdate()';
    throw Error('Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' + componentName + ' uses ' + newApiName + ' but also contains the following legacy lifecycles:' + (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') + (foundWillReceivePropsName !== null ? '\n  ' + foundWillReceivePropsName : '') + (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') + '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' + 'https://fb.me/react-async-component-lifecycle-hooks');
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error('Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype');
    }
    prototype.componentWillUpdate = componentWillUpdate;
    var componentDidUpdate = prototype.componentDidUpdate;
    prototype.componentDidUpdate = function componentDidUpdatePolyfill(prevProps, prevState, maybeSnapshot) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;
      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }
  return Component;
}

;// ./node_modules/uncontrollable/lib/esm/uncontrollable.js



var _jsxFileName = "/Users/jquense/src/uncontrollable/src/uncontrollable.js";




function uncontrollable(Component, controlledValues, methods) {
  if (methods === void 0) {
    methods = [];
  }
  var displayName = Component.displayName || Component.name || 'Component';
  var canAcceptRef = utils_canAcceptRef(Component);
  var controlledProps = Object.keys(controlledValues);
  var PROPS_TO_OMIT = controlledProps.map(defaultKey);
  !(canAcceptRef || !methods.length) ?  false ? 0 : browser_default()(false) : void 0;
  var UncontrolledComponent = /*#__PURE__*/
  function (_React$Component) {
    (0,inheritsLoose/* default */.A)(UncontrolledComponent, _React$Component);
    function UncontrolledComponent() {
      var _this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.handlers = Object.create(null);
      controlledProps.forEach(function (propName) {
        var handlerName = controlledValues[propName];
        var handleChange = function handleChange(value) {
          if (_this.props[handlerName]) {
            var _this$props;
            _this._notifying = true;
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }
            (_this$props = _this.props)[handlerName].apply(_this$props, [value].concat(args));
            _this._notifying = false;
          }
          if (!_this.unmounted) _this.setState(function (_ref) {
            var _extends2;
            var values = _ref.values;
            return {
              values: (0,esm_extends/* default */.A)(Object.create(null), values, (_extends2 = {}, _extends2[propName] = value, _extends2))
            };
          });
        };
        _this.handlers[handlerName] = handleChange;
      });
      if (methods.length) _this.attachRef = function (ref) {
        _this.inner = ref;
      };
      var values = Object.create(null);
      controlledProps.forEach(function (key) {
        values[key] = _this.props[defaultKey(key)];
      });
      _this.state = {
        values: values,
        prevProps: {}
      };
      return _this;
    }
    var _proto = UncontrolledComponent.prototype;
    _proto.shouldComponentUpdate = function shouldComponentUpdate() {
      //let setState trigger the update
      return !this._notifying;
    };
    UncontrolledComponent.getDerivedStateFromProps = function getDerivedStateFromProps(props, _ref2) {
      var values = _ref2.values,
        prevProps = _ref2.prevProps;
      var nextState = {
        values: (0,esm_extends/* default */.A)(Object.create(null), values),
        prevProps: {}
      };
      controlledProps.forEach(function (key) {
        /**
         * If a prop switches from controlled to Uncontrolled
         * reset its value to the defaultValue
         */
        nextState.prevProps[key] = props[key];
        if (!isProp(props, key) && isProp(prevProps, key)) {
          nextState.values[key] = props[defaultKey(key)];
        }
      });
      return nextState;
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
      this.unmounted = true;
    };
    _proto.render = function render() {
      var _this2 = this;
      var _this$props2 = this.props,
        innerRef = _this$props2.innerRef,
        props = (0,objectWithoutPropertiesLoose/* default */.A)(_this$props2, ["innerRef"]);
      PROPS_TO_OMIT.forEach(function (prop) {
        delete props[prop];
      });
      var newProps = {};
      controlledProps.forEach(function (propName) {
        var propValue = _this2.props[propName];
        newProps[propName] = propValue !== undefined ? propValue : _this2.state.values[propName];
      });
      return react.createElement(Component, (0,esm_extends/* default */.A)({}, props, newProps, this.handlers, {
        ref: innerRef || this.attachRef
      }));
    };
    return UncontrolledComponent;
  }(react.Component);
  polyfill(UncontrolledComponent);
  UncontrolledComponent.displayName = "Uncontrolled(" + displayName + ")";
  UncontrolledComponent.propTypes = (0,esm_extends/* default */.A)({
    innerRef: function innerRef() {}
  }, uncontrolledPropTypes(controlledValues, displayName));
  methods.forEach(function (method) {
    UncontrolledComponent.prototype[method] = function $proxiedMethod() {
      var _this$inner;
      return (_this$inner = this.inner)[method].apply(_this$inner, arguments);
    };
  });
  var WrappedComponent = UncontrolledComponent;
  if (react.forwardRef) {
    WrappedComponent = react.forwardRef(function (props, ref) {
      return react.createElement(UncontrolledComponent, (0,esm_extends/* default */.A)({}, props, {
        innerRef: ref,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }));
    });
    WrappedComponent.propTypes = UncontrolledComponent.propTypes;
  }
  WrappedComponent.ControlledComponent = Component;
  /**
   * useful when wrapping a Component and you want to control
   * everything
   */

  WrappedComponent.deferControlTo = function (newComponent, additions, nextMethods) {
    if (additions === void 0) {
      additions = {};
    }
    return uncontrollable(newComponent, (0,esm_extends/* default */.A)({}, controlledValues, additions), nextMethods);
  };
  return WrappedComponent;
}
;// ./node_modules/uncontrollable/lib/esm/index.js


;// ./node_modules/react-big-calendar/node_modules/clsx/dist/clsx.m.js
function r(e) {
  var t,
    f,
    n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;else if ("object" == typeof e) if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = ""; f < arguments.length;) (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
/* harmony default export */ const clsx_m = (clsx);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(11942);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// ./node_modules/date-arithmetic/index.js
var MILI = 'milliseconds',
  SECONDS = 'seconds',
  MINUTES = 'minutes',
  HOURS = 'hours',
  DAY = 'day',
  WEEK = 'week',
  MONTH = 'month',
  YEAR = 'year',
  DECADE = 'decade',
  CENTURY = 'century';
var multiplierMilli = {
  'milliseconds': 1,
  'seconds': 1000,
  'minutes': 60 * 1000,
  'hours': 60 * 60 * 1000,
  'day': 24 * 60 * 60 * 1000,
  'week': 7 * 24 * 60 * 60 * 1000
};
var multiplierMonth = {
  'month': 1,
  'year': 12,
  'decade': 10 * 12,
  'century': 100 * 12
};
function daysOf(year) {
  return [31, daysInFeb(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
}
function daysInFeb(year) {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ? 29 : 28;
}
function add(d, num, unit) {
  d = new Date(d);
  switch (unit) {
    case MILI:
    case SECONDS:
    case MINUTES:
    case HOURS:
    case DAY:
    case WEEK:
      return addMillis(d, num * multiplierMilli[unit]);
    case MONTH:
    case YEAR:
    case DECADE:
    case CENTURY:
      return addMonths(d, num * multiplierMonth[unit]);
  }
  throw new TypeError('Invalid units: "' + unit + '"');
}
function addMillis(d, num) {
  var nextDate = new Date(+d + num);
  return solveDST(d, nextDate);
}
function addMonths(d, num) {
  var year = d.getFullYear(),
    month = d.getMonth(),
    day = d.getDate(),
    totalMonths = year * 12 + month + num,
    nextYear = Math.trunc(totalMonths / 12),
    nextMonth = totalMonths % 12,
    nextDay = Math.min(day, daysOf(nextYear)[nextMonth]);
  var nextDate = new Date(d);
  nextDate.setFullYear(nextYear);

  // To avoid a bug when sets the Feb month
  // with a date > 28 or date > 29 (leap year)
  nextDate.setDate(1);
  nextDate.setMonth(nextMonth);
  nextDate.setDate(nextDay);
  return nextDate;
}
function solveDST(currentDate, nextDate) {
  var currentOffset = currentDate.getTimezoneOffset(),
    nextOffset = nextDate.getTimezoneOffset();

  // if is DST, add the difference in minutes
  // else the difference is zero
  var diffMinutes = nextOffset - currentOffset;
  return new Date(+nextDate + diffMinutes * multiplierMilli['minutes']);
}
function subtract(d, num, unit) {
  return add(d, -num, unit);
}
function startOf(d, unit, firstOfWeek) {
  d = new Date(d);
  switch (unit) {
    case CENTURY:
    case DECADE:
    case YEAR:
      d = month(d, 0);
    case MONTH:
      d = date(d, 1);
    case WEEK:
    case DAY:
      d = hours(d, 0);
    case HOURS:
      d = minutes(d, 0);
    case MINUTES:
      d = seconds(d, 0);
    case SECONDS:
      d = milliseconds(d, 0);
  }
  if (unit === DECADE) d = subtract(d, year(d) % 10, 'year');
  if (unit === CENTURY) d = subtract(d, year(d) % 100, 'year');
  if (unit === WEEK) d = weekday(d, 0, firstOfWeek);
  return d;
}
function endOf(d, unit, firstOfWeek) {
  d = new Date(d);
  d = startOf(d, unit, firstOfWeek);
  switch (unit) {
    case CENTURY:
    case DECADE:
    case YEAR:
    case MONTH:
    case WEEK:
      d = add(d, 1, unit);
      d = subtract(d, 1, DAY);
      d.setHours(23, 59, 59, 999);
      break;
    case DAY:
      d.setHours(23, 59, 59, 999);
      break;
    case HOURS:
    case MINUTES:
    case SECONDS:
      d = add(d, 1, unit);
      d = subtract(d, 1, MILI);
  }
  return d;
}
var eq = createComparer(function (a, b) {
  return a === b;
});
var neq = createComparer(function (a, b) {
  return a !== b;
});
var gt = createComparer(function (a, b) {
  return a > b;
});
var gte = createComparer(function (a, b) {
  return a >= b;
});
var lt = createComparer(function (a, b) {
  return a < b;
});
var lte = createComparer(function (a, b) {
  return a <= b;
});
function min() {
  return new Date(Math.min.apply(Math, arguments));
}
function max() {
  return new Date(Math.max.apply(Math, arguments));
}
function inRange(day, min, max, unit) {
  unit = unit || 'day';
  return (!min || gte(day, min, unit)) && (!max || lte(day, max, unit));
}
var milliseconds = createAccessor('Milliseconds');
var seconds = createAccessor('Seconds');
var minutes = createAccessor('Minutes');
var hours = createAccessor('Hours');
var day = createAccessor('Day');
var date = createAccessor('Date');
var month = createAccessor('Month');
var year = createAccessor('FullYear');
function decade(d, val) {
  return val === undefined ? year(startOf(d, DECADE)) : add(d, val + 10, YEAR);
}
function century(d, val) {
  return val === undefined ? year(startOf(d, CENTURY)) : add(d, val + 100, YEAR);
}
function weekday(d, val, firstDay) {
  var w = (day(d) + 7 - (firstDay || 0)) % 7;
  return val === undefined ? w : add(d, val - w, DAY);
}
function diff(date1, date2, unit, asFloat) {
  var dividend, divisor, result;
  switch (unit) {
    case MILI:
    case SECONDS:
    case MINUTES:
    case HOURS:
    case DAY:
    case WEEK:
      dividend = date2.getTime() - date1.getTime();
      break;
    case MONTH:
    case YEAR:
    case DECADE:
    case CENTURY:
      dividend = (year(date2) - year(date1)) * 12 + month(date2) - month(date1);
      break;
    default:
      throw new TypeError('Invalid units: "' + unit + '"');
  }
  switch (unit) {
    case MILI:
      divisor = 1;
      break;
    case SECONDS:
      divisor = 1000;
      break;
    case MINUTES:
      divisor = 1000 * 60;
      break;
    case HOURS:
      divisor = 1000 * 60 * 60;
      break;
    case DAY:
      divisor = 1000 * 60 * 60 * 24;
      break;
    case WEEK:
      divisor = 1000 * 60 * 60 * 24 * 7;
      break;
    case MONTH:
      divisor = 1;
      break;
    case YEAR:
      divisor = 12;
      break;
    case DECADE:
      divisor = 120;
      break;
    case CENTURY:
      divisor = 1200;
      break;
    default:
      throw new TypeError('Invalid units: "' + unit + '"');
  }
  result = dividend / divisor;
  return asFloat ? result : Math.round(result);
}
function createAccessor(method) {
  var hourLength = function (method) {
    switch (method) {
      case 'Milliseconds':
        return 3600000;
      case 'Seconds':
        return 3600;
      case 'Minutes':
        return 60;
      case 'Hours':
        return 1;
      default:
        return null;
    }
  }(method);
  return function (d, val) {
    if (val === undefined) return d['get' + method]();
    var dateOut = new Date(d);
    dateOut['set' + method](val);
    if (hourLength && dateOut['get' + method]() != val && (method === 'Hours' || val >= hourLength && dateOut.getHours() - d.getHours() < Math.floor(val / hourLength))) {
      //Skip DST hour, if it occurs
      dateOut['set' + method](val + hourLength);
    }
    return dateOut;
  };
}
function createComparer(operator) {
  return function (a, b, unit) {
    return operator(+startOf(a, unit), +startOf(b, unit));
  };
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(64467);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(60436);
;// ./node_modules/lodash-es/_baseSlice.js
/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
    length = array.length;
  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;
  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}
/* harmony default export */ const _baseSlice = (baseSlice);
;// ./node_modules/lodash-es/eq.js
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq_eq(value, other) {
  return value === other || value !== value && other !== other;
}
/* harmony default export */ const lodash_es_eq = (eq_eq);
;// ./node_modules/lodash-es/_freeGlobal.js
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
/* harmony default export */ const _freeGlobal = (freeGlobal);
;// ./node_modules/lodash-es/_root.js


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();
/* harmony default export */ const _root = (root);
;// ./node_modules/lodash-es/_Symbol.js


/** Built-in value references. */
var _Symbol_Symbol = _root.Symbol;
/* harmony default export */ const _Symbol = (_Symbol_Symbol);
;// ./node_modules/lodash-es/_getRawTag.js


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _getRawTag_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = _getRawTag_hasOwnProperty.call(value, symToStringTag),
    tag = value[symToStringTag];
  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}
  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}
/* harmony default export */ const _getRawTag = (getRawTag);
;// ./node_modules/lodash-es/_objectToString.js
/** Used for built-in method references. */
var _objectToString_objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var _objectToString_nativeObjectToString = _objectToString_objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return _objectToString_nativeObjectToString.call(value);
}
/* harmony default export */ const _objectToString = (objectToString);
;// ./node_modules/lodash-es/_baseGetTag.js




/** `Object#toString` result references. */
var nullTag = '[object Null]',
  undefinedTag = '[object Undefined]';

/** Built-in value references. */
var _baseGetTag_symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return _baseGetTag_symToStringTag && _baseGetTag_symToStringTag in Object(value) ? _getRawTag(value) : _objectToString(value);
}
/* harmony default export */ const _baseGetTag = (baseGetTag);
;// ./node_modules/lodash-es/isObject.js
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}
/* harmony default export */ const lodash_es_isObject = (isObject);
;// ./node_modules/lodash-es/isFunction.js



/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
  funcTag = '[object Function]',
  genTag = '[object GeneratorFunction]',
  proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!lodash_es_isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
/* harmony default export */ const lodash_es_isFunction = (isFunction);
;// ./node_modules/lodash-es/isLength.js
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
/* harmony default export */ const lodash_es_isLength = (isLength);
;// ./node_modules/lodash-es/isArrayLike.js



/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && lodash_es_isLength(value.length) && !lodash_es_isFunction(value);
}
/* harmony default export */ const lodash_es_isArrayLike = (isArrayLike);
;// ./node_modules/lodash-es/_isIndex.js
/** Used as references for various `Number` constants. */
var _isIndex_MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? _isIndex_MAX_SAFE_INTEGER : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
/* harmony default export */ const _isIndex = (isIndex);
;// ./node_modules/lodash-es/_isIterateeCall.js





/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!lodash_es_isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number' ? lodash_es_isArrayLike(object) && _isIndex(index, object.length) : type == 'string' && index in object) {
    return lodash_es_eq(object[index], value);
  }
  return false;
}
/* harmony default export */ const _isIterateeCall = (isIterateeCall);
;// ./node_modules/lodash-es/_trimmedEndIndex.js
/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}
/* harmony default export */ const _trimmedEndIndex = (trimmedEndIndex);
;// ./node_modules/lodash-es/_baseTrim.js


/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string ? string.slice(0, _trimmedEndIndex(string) + 1).replace(reTrimStart, '') : string;
}
/* harmony default export */ const _baseTrim = (baseTrim);
;// ./node_modules/lodash-es/isObjectLike.js
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}
/* harmony default export */ const lodash_es_isObjectLike = (isObjectLike);
;// ./node_modules/lodash-es/isSymbol.js



/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' || lodash_es_isObjectLike(value) && _baseGetTag(value) == symbolTag;
}
/* harmony default export */ const lodash_es_isSymbol = (isSymbol);
;// ./node_modules/lodash-es/toNumber.js




/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (lodash_es_isSymbol(value)) {
    return NAN;
  }
  if (lodash_es_isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = lodash_es_isObject(other) ? other + '' : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = _baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
/* harmony default export */ const lodash_es_toNumber = (toNumber);
;// ./node_modules/lodash-es/toFinite.js


/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
  MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = lodash_es_toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}
/* harmony default export */ const lodash_es_toFinite = (toFinite);
;// ./node_modules/lodash-es/toInteger.js


/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = lodash_es_toFinite(value),
    remainder = result % 1;
  return result === result ? remainder ? result - remainder : result : 0;
}
/* harmony default export */ const lodash_es_toInteger = (toInteger);
;// ./node_modules/lodash-es/chunk.js




/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
  nativeMax = Math.max;

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * _.chunk(['a', 'b', 'c', 'd'], 2);
 * // => [['a', 'b'], ['c', 'd']]
 *
 * _.chunk(['a', 'b', 'c', 'd'], 3);
 * // => [['a', 'b', 'c'], ['d']]
 */
function chunk(array, size, guard) {
  if (guard ? _isIterateeCall(array, size, guard) : size === undefined) {
    size = 1;
  } else {
    size = nativeMax(lodash_es_toInteger(size), 0);
  }
  var length = array == null ? 0 : array.length;
  if (!length || size < 1) {
    return [];
  }
  var index = 0,
    resIndex = 0,
    result = Array(nativeCeil(length / size));
  while (index < length) {
    result[resIndex++] = _baseSlice(array, index, index += size);
  }
  return result;
}
/* harmony default export */ const lodash_es_chunk = (chunk);
;// ./node_modules/dom-helpers/esm/ownerDocument.js
/**
 * Returns the owner document of a given element.
 * 
 * @param node the element
 */
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}
;// ./node_modules/dom-helpers/esm/ownerWindow.js

/**
 * Returns the owner window of a given element.
 * 
 * @param node the element
 */

function ownerWindow(node) {
  var doc = ownerDocument(node);
  return doc && doc.defaultView || window;
}
;// ./node_modules/dom-helpers/esm/getComputedStyle.js

/**
 * Returns one or all computed style properties of an element.
 * 
 * @param node the element
 * @param psuedoElement the style property
 */

function getComputedStyle(node, psuedoElement) {
  return ownerWindow(node).getComputedStyle(node, psuedoElement);
}
;// ./node_modules/dom-helpers/esm/hyphenate.js
var rUpper = /([A-Z])/g;
function hyphenate(string) {
  return string.replace(rUpper, '-$1').toLowerCase();
}
;// ./node_modules/dom-helpers/esm/hyphenateStyle.js
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
 */

var msPattern = /^ms-/;
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}
;// ./node_modules/dom-helpers/esm/isTransform.js
var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function isTransform(value) {
  return !!(value && supportedTransforms.test(value));
}
;// ./node_modules/dom-helpers/esm/css.js



function style(node, property) {
  var css = '';
  var transforms = '';
  if (typeof property === 'string') {
    return node.style.getPropertyValue(hyphenateStyleName(property)) || getComputedStyle(node).getPropertyValue(hyphenateStyleName(property));
  }
  Object.keys(property).forEach(function (key) {
    var value = property[key];
    if (!value && value !== 0) {
      node.style.removeProperty(hyphenateStyleName(key));
    } else if (isTransform(key)) {
      transforms += key + "(" + value + ") ";
    } else {
      css += hyphenateStyleName(key) + ": " + value + ";";
    }
  });
  if (transforms) {
    css += "transform: " + transforms + ";";
  }
  node.style.cssText += ";" + css;
}
/* harmony default export */ const css = (style);
;// ./node_modules/dom-helpers/esm/contains.js
/* eslint-disable no-bitwise, no-cond-assign */

/**
 * Checks if an element contains another given element.
 * 
 * @param context the context element
 * @param node the element to check
 */
function contains(context, node) {
  // HTML DOM and SVG DOM may have different support levels,
  // so we need to check on context instead of a document root element.
  if (context.contains) return context.contains(node);
  if (context.compareDocumentPosition) return context === node || !!(context.compareDocumentPosition(node) & 16);
}
;// ./node_modules/dom-helpers/esm/isDocument.js
function isDocument(element) {
  return 'nodeType' in element && element.nodeType === document.DOCUMENT_NODE;
}
;// ./node_modules/dom-helpers/esm/isWindow.js

function isWindow(node) {
  if ('window' in node && node.window === node) return node;
  if (isDocument(node)) return node.defaultView || false;
  return false;
}
;// ./node_modules/dom-helpers/esm/getScrollAccessor.js

function getscrollAccessor(offset) {
  var prop = offset === 'pageXOffset' ? 'scrollLeft' : 'scrollTop';
  function scrollAccessor(node, val) {
    var win = isWindow(node);
    if (val === undefined) {
      return win ? win[offset] : node[prop];
    }
    if (win) {
      win.scrollTo(win[offset], val);
    } else {
      node[prop] = val;
    }
  }
  return scrollAccessor;
}
;// ./node_modules/dom-helpers/esm/scrollLeft.js

/**
 * Gets or sets the scroll left position of a given element.
 * 
 * @param node the element
 * @param val the position to set
 */

/* harmony default export */ const scrollLeft = (getscrollAccessor('pageXOffset'));
;// ./node_modules/dom-helpers/esm/scrollTop.js

/**
 * Gets or sets the scroll top position of a given element.
 * 
 * @param node the element
 * @param val the position to set
 */

/* harmony default export */ const scrollTop = (getscrollAccessor('pageYOffset'));
;// ./node_modules/dom-helpers/esm/offset.js




/**
 * Returns the offset of a given element, including top and left positions, width and height.
 * 
 * @param node the element
 */

function offset_offset(node) {
  var doc = ownerDocument(node);
  var box = {
    top: 0,
    left: 0,
    height: 0,
    width: 0
  };
  var docElem = doc && doc.documentElement; // Make sure it's not a disconnected DOM node

  if (!docElem || !contains(docElem, node)) return box;
  if (node.getBoundingClientRect !== undefined) box = node.getBoundingClientRect();
  box = {
    top: box.top + scrollTop(docElem) - (docElem.clientTop || 0),
    left: box.left + scrollLeft(docElem) - (docElem.clientLeft || 0),
    width: box.width,
    height: box.height
  };
  return box;
}
;// ./node_modules/dom-helpers/esm/offsetParent.js


var isHTMLElement = function isHTMLElement(e) {
  return !!e && 'offsetParent' in e;
};
function offsetParent_offsetParent(node) {
  var doc = ownerDocument(node);
  var parent = node && node.offsetParent;
  while (isHTMLElement(parent) && parent.nodeName !== 'HTML' && css(parent, 'position') === 'static') {
    parent = parent.offsetParent;
  }
  return parent || doc.documentElement;
}
;// ./node_modules/dom-helpers/esm/position.js






var nodeName = function nodeName(node) {
  return node.nodeName && node.nodeName.toLowerCase();
};
/**
 * Returns the relative position of a given element.
 * 
 * @param node the element
 * @param offsetParent the offset parent
 */

function position_position(node, offsetParent) {
  var parentOffset = {
    top: 0,
    left: 0
  };
  var offset; // Fixed elements are offset from window (parentOffset = {top:0, left: 0},
  // because it is its only offset parent

  if (css(node, 'position') === 'fixed') {
    offset = node.getBoundingClientRect();
  } else {
    var parent = offsetParent || offsetParent_offsetParent(node);
    offset = offset_offset(node);
    if (nodeName(parent) !== 'html') parentOffset = offset_offset(parent);
    var borderTop = String(css(parent, 'borderTopWidth') || 0);
    parentOffset.top += parseInt(borderTop, 10) - scrollTop(parent) || 0;
    var borderLeft = String(css(parent, 'borderLeftWidth') || 0);
    parentOffset.left += parseInt(borderLeft, 10) - scrollLeft(parent) || 0;
  }
  var marginTop = String(css(node, 'marginTop') || 0);
  var marginLeft = String(css(node, 'marginLeft') || 0); // Subtract parent offsets and node margins

  return (0,esm_extends/* default */.A)({}, offset, {
    top: offset.top - parentOffset.top - (parseInt(marginTop, 10) || 0),
    left: offset.left - parentOffset.left - (parseInt(marginLeft, 10) || 0)
  });
}
;// ./node_modules/dom-helpers/esm/canUseDOM.js
/* harmony default export */ const canUseDOM = (!!(typeof window !== 'undefined' && window.document && window.document.createElement));
;// ./node_modules/dom-helpers/esm/animationFrame.js


/* https://github.com/component/raf */
var prev = new Date().getTime();
function fallback(fn) {
  var curr = new Date().getTime();
  var ms = Math.max(0, 16 - (curr - prev));
  var handle = setTimeout(fn, ms);
  prev = curr;
  return handle;
}
var vendors = ['', 'webkit', 'moz', 'o', 'ms'];
var cancelMethod = 'clearTimeout';
var rafImpl = fallback; // eslint-disable-next-line import/no-mutable-exports

var getKey = function getKey(vendor, k) {
  return vendor + (!vendor ? k : k[0].toUpperCase() + k.substr(1)) + "AnimationFrame";
};
if (canUseDOM) {
  vendors.some(function (vendor) {
    var rafMethod = getKey(vendor, 'request');
    if (rafMethod in window) {
      cancelMethod = getKey(vendor, 'cancel'); // @ts-ignore

      rafImpl = function rafImpl(cb) {
        return window[rafMethod](cb);
      };
    }
    return !!rafImpl;
  });
}
var cancel = function cancel(id) {
  // @ts-ignore
  if (typeof window[cancelMethod] === 'function') window[cancelMethod](id);
};
var request = rafImpl;
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(17119);
;// ./node_modules/@restart/hooks/esm/useCallbackRef.js


/**
 * A convenience hook around `useState` designed to be paired with
 * the component [callback ref](https://reactjs.org/docs/refs-and-the-dom.html#callback-refs) api.
 * Callback refs are useful over `useRef()` when you need to respond to the ref being set
 * instead of lazily accessing it in an effect.
 *
 * ```ts
 * const [element, attachRef] = useCallbackRef<HTMLDivElement>()
 *
 * useEffect(() => {
 *   if (!element) return
 *
 *   const calendar = new FullCalendar.Calendar(element)
 *
 *   return () => {
 *     calendar.destroy()
 *   }
 * }, [element])
 *
 * return <div ref={attachRef} />
 * ```
 *
 * @category refs
 */
function useCallbackRef() {
  return (0,react.useState)(null);
}
;// ./node_modules/@restart/hooks/esm/useMergedRefs.js

const toFnRef = ref => !ref || typeof ref === 'function' ? ref : value => {
  ref.current = value;
};
function mergeRefs(refA, refB) {
  const a = toFnRef(refA);
  const b = toFnRef(refB);
  return value => {
    if (a) a(value);
    if (b) b(value);
  };
}

/**
 * Create and returns a single callback ref composed from two other Refs.
 *
 * ```tsx
 * const Button = React.forwardRef((props, ref) => {
 *   const [element, attachRef] = useCallbackRef<HTMLButtonElement>();
 *   const mergedRef = useMergedRefs(ref, attachRef);
 *
 *   return <button ref={mergedRef} {...props}/>
 * })
 * ```
 *
 * @param refA A Callback or mutable Ref
 * @param refB A Callback or mutable Ref
 * @category refs
 */
function useMergedRefs(refA, refB) {
  return (0,react.useMemo)(() => mergeRefs(refA, refB), [refA, refB]);
}
/* harmony default export */ const esm_useMergedRefs = (useMergedRefs);
;// ./node_modules/@popperjs/core/lib/enums.js
var enums_top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [enums_top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var enums_placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
;// ./node_modules/@restart/hooks/esm/useMounted.js


/**
 * Track whether a component is current mounted. Generally less preferable than
 * properlly canceling effects so they don't run after a component is unmounted,
 * but helpful in cases where that isn't feasible, such as a `Promise` resolution.
 *
 * @returns a function that returns the current isMounted state of the component
 *
 * ```ts
 * const [data, setData] = useState(null)
 * const isMounted = useMounted()
 *
 * useEffect(() => {
 *   fetchdata().then((newData) => {
 *      if (isMounted()) {
 *        setData(newData);
 *      }
 *   })
 * })
 * ```
 */
function useMounted() {
  const mounted = (0,react.useRef)(true);
  const isMounted = (0,react.useRef)(() => mounted.current);
  (0,react.useEffect)(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);
  return isMounted.current;
}
;// ./node_modules/@restart/hooks/esm/useSafeState.js



/**
 * `useSafeState` takes the return value of a `useState` hook and wraps the
 * setter to prevent updates onces the component has unmounted. Can used
 * with `useMergeState` and `useStateAsync` as well
 *
 * @param state The return value of a useStateHook
 *
 * ```ts
 * const [show, setShow] = useSafeState(useState(true));
 * ```
 */

function useSafeState(state) {
  const isMounted = useMounted();
  return [state[0], (0,react.useCallback)(nextState => {
    if (!isMounted()) return;
    return state[1](nextState);
  }, [isMounted, state[1]])];
}
/* harmony default export */ const esm_useSafeState = (useSafeState);
;// ./node_modules/@popperjs/core/lib/utils/getBasePlacement.js

function getBasePlacement(placement) {
  return placement.split('-')[0];
}
;// ./node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
;// ./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js

function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function instanceOf_isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

;// ./node_modules/@popperjs/core/lib/utils/math.js
var math_max = Math.max;
var math_min = Math.min;
var round = Math.round;
;// ./node_modules/@popperjs/core/lib/utils/userAgent.js
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function (item) {
      return item.brand + "/" + item.version;
    }).join(' ');
  }
  return navigator.userAgent;
}
;// ./node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js

function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
;// ./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js




function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && instanceOf_isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : window,
    visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width: width,
    height: height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x: x,
    y: y
  };
}
;// ./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
 // Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}
;// ./node_modules/@popperjs/core/lib/dom-utils/contains.js

function contains_contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      } // $FlowFixMe[prop-missing]: need a better way to handle this...

      next = next.parentNode || next.host;
    } while (next);
  } // Give up, the result is false

  return false;
}
;// ./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}
;// ./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js

function getComputedStyle_getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
;// ./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}
;// ./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument :
  // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}
;// ./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js



function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot ||
    // step into the shadow DOM of the parent of a slotted node
    element.parentNode || (
    // DOM Element detected
    isShadowRoot(element) ? element.host : null) ||
    // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback
  );
}
;// ./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js







function getTrueOffsetParent(element) {
  if (!instanceOf_isHTMLElement(element) ||
  // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle_getComputedStyle(element).position === 'fixed') {
    return null;
  }
  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block

function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && instanceOf_isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle_getComputedStyle(element);
    if (elementCss.position === 'fixed') {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (instanceOf_isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle_getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.

function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle_getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle_getComputedStyle(offsetParent).position === 'static')) {
    return window;
  }
  return offsetParent || getContainingBlock(element) || window;
}
;// ./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}
;// ./node_modules/@popperjs/core/lib/utils/within.js

function within(min, value, max) {
  return math_max(min, math_min(value, max));
}
function withinMaxClamp(min, value, max) {
  var v = within(min, value, max);
  return v > max ? max : v;
}
;// ./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
;// ./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
;// ./node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
;// ./node_modules/@popperjs/core/lib/modifiers/arrow.js








 // eslint-disable-next-line import/no-unused-modules

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state,
    name = _ref.name,
    options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';
  if (!arrowElement || !popperOffsets) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? enums_top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}
function effect(_ref2) {
  var state = _ref2.state,
    options = _ref2.options;
  var _options$element = options.element,
    arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;
  if (arrowElement == null) {
    return;
  } // CSS selector

  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains_contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules

/* harmony default export */ const modifiers_arrow = ({
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
});
;// ./node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split('-')[1];
}
;// ./node_modules/@popperjs/core/lib/modifiers/computeStyles.js







 // eslint-disable-next-line import/no-unused-modules

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x,
    y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper = _ref2.popper,
    popperRect = _ref2.popperRect,
    placement = _ref2.placement,
    variation = _ref2.variation,
    offsets = _ref2.offsets,
    position = _ref2.position,
    gpuAcceleration = _ref2.gpuAcceleration,
    adaptive = _ref2.adaptive,
    roundOffsets = _ref2.roundOffsets,
    isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x,
    x = _offsets$x === void 0 ? 0 : _offsets$x,
    _offsets$y = offsets.y,
    y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = enums_top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';
    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);
      if (getComputedStyle_getComputedStyle(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it

    offsetParent = offsetParent;
    if (placement === enums_top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height :
      // $FlowFixMe[prop-missing]
      offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === enums_top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width :
      // $FlowFixMe[prop-missing]
      offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x,
    y: y
  }, getWindow(popper)) : {
    x: x,
    y: y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state,
    options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
    gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
    _options$adaptive = options.adaptive,
    adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
    _options$roundOffsets = options.roundOffsets,
    roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration,
    isFixed: state.options.strategy === 'fixed'
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules

/* harmony default export */ const modifiers_computeStyles = ({
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
});
;// ./node_modules/@popperjs/core/lib/modifiers/eventListeners.js
 // eslint-disable-next-line import/no-unused-modules

var passive = {
  passive: true
};
function eventListeners_effect(_ref) {
  var state = _ref.state,
    instance = _ref.instance,
    options = _ref.options;
  var _options$scroll = options.scroll,
    scroll = _options$scroll === void 0 ? true : _options$scroll,
    _options$resize = options.resize,
    resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }
  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }
  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }
    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules

/* harmony default export */ const eventListeners = ({
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: eventListeners_effect,
  data: {}
});
;// ./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}
;// ./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var getOppositeVariationPlacement_hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return getOppositeVariationPlacement_hash[matched];
  });
}
;// ./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}
;// ./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js



function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
;// ./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js




function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}
;// ./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js




 // Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = math_max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = math_max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle_getComputedStyle(body || html).direction === 'rtl') {
    x += math_max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}
;// ./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle_getComputedStyle(element),
    overflow = _getComputedStyle.overflow,
    overflowX = _getComputedStyle.overflowX,
    overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
;// ./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js




function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }
  if (instanceOf_isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
;// ./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js




/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList :
  // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}
;// ./node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
;// ./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js














function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === 'fixed');
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`

function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle_getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && instanceOf_isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414

  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains_contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents

function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = math_max(rect.top, accRect.top);
    accRect.right = math_min(rect.right, accRect.right);
    accRect.bottom = math_min(rect.bottom, accRect.bottom);
    accRect.left = math_max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
;// ./node_modules/@popperjs/core/lib/utils/computeOffsets.js




function computeOffsets(_ref) {
  var reference = _ref.reference,
    element = _ref.element,
    placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case enums_top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}
;// ./node_modules/@popperjs/core/lib/utils/detectOverflow.js








 // eslint-disable-next-line import/no-unused-modules

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options,
    _options$placement = _options.placement,
    placement = _options$placement === void 0 ? state.placement : _options$placement,
    _options$strategy = _options.strategy,
    strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,
    _options$boundary = _options.boundary,
    boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
    _options$rootBoundary = _options.rootBoundary,
    rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
    _options$elementConte = _options.elementContext,
    elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
    _options$altBoundary = _options.altBoundary,
    altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
    _options$padding = _options.padding,
    padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [enums_top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }
  return overflowOffsets;
}
;// ./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js




function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options,
    placement = _options.placement,
    boundary = _options.boundary,
    rootBoundary = _options.rootBoundary,
    padding = _options.padding,
    flipVariations = _options.flipVariations,
    _options$allowedAutoP = _options.allowedAutoPlacements,
    allowedAutoPlacements = _options$allowedAutoP === void 0 ? enums_placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...

  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}
;// ./node_modules/@popperjs/core/lib/modifiers/flip.js






 // eslint-disable-next-line import/no-unused-modules

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state,
    options = _ref.options,
    name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis,
    checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
    _options$altAxis = options.altAxis,
    checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
    specifiedFallbackPlacements = options.fallbackPlacements,
    padding = options.padding,
    boundary = options.boundary,
    rootBoundary = options.rootBoundary,
    altBoundary = options.altBoundary,
    _options$flipVariatio = options.flipVariations,
    flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
    allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];
  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [enums_top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : enums_top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);
        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break") break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules

/* harmony default export */ const modifiers_flip = ({
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
});
;// ./node_modules/@popperjs/core/lib/modifiers/hide.js


function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [enums_top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state,
    name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules

/* harmony default export */ const modifiers_hide = ({
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
});
;// ./node_modules/@popperjs/core/lib/modifiers/offset.js

 // eslint-disable-next-line import/no-unused-modules

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, enums_top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
      placement: placement
    })) : offset,
    skidding = _ref[0],
    distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state,
    options = _ref2.options,
    name = _ref2.name;
  var _options$offset = options.offset,
    offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = enums_placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
    x = _data$state$placement.x,
    y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules

/* harmony default export */ const modifiers_offset = ({
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
});
;// ./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js

function popperOffsets(_ref) {
  var state = _ref.state,
    name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules

/* harmony default export */ const modifiers_popperOffsets = ({
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
});
;// ./node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
;// ./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js











function preventOverflow(_ref) {
  var state = _ref.state,
    options = _ref.options,
    name = _ref.name;
  var _options$mainAxis = options.mainAxis,
    checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
    _options$altAxis = options.altAxis,
    checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
    boundary = options.boundary,
    rootBoundary = options.rootBoundary,
    altBoundary = options.altBoundary,
    padding = options.padding,
    _options$tether = options.tether,
    tether = _options$tether === void 0 ? true : _options$tether,
    _options$tetherOffset = options.tetherOffset,
    tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === 'y' ? enums_top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = offset + overflow[mainSide];
    var max = offset - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? math_min(min, tetherMin) : min, offset, tether ? math_max(max, tetherMax) : max);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === 'x' ? enums_top : left;
    var _altSide = mainAxis === 'x' ? bottom : right;
    var _offset = popperOffsets[altAxis];
    var _len = altAxis === 'y' ? 'height' : 'width';
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [enums_top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules

/* harmony default export */ const modifiers_preventOverflow = ({
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
});
;// ./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
;// ./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js




function getNodeScroll(node) {
  if (node === getWindow(node) || !instanceOf_isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
;// ./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js








function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.

function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = instanceOf_isHTMLElement(offsetParent);
  var offsetParentIsScaled = instanceOf_isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' ||
    // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (instanceOf_isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
;// ./node_modules/@popperjs/core/lib/utils/orderModifiers.js
 // source: https://stackoverflow.com/questions/49875255

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
;// ./node_modules/@popperjs/core/lib/utils/debounce.js
function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }
    return pending;
  };
}
;// ./node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}
;// ./node_modules/@popperjs/core/lib/createPopper.js









var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions,
    _generatorOptions$def = _generatorOptions.defaultModifiers,
    defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
    _generatorOptions$def2 = _generatorOptions.defaultOptions,
    defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements,
          reference = _state$elements.reference,
          popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          return;
        } // Store the reference and popper rects to be read by modifiers

        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index],
            fn = _state$orderedModifie.fn,
            _state$orderedModifie2 = _state$orderedModifie.options,
            _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
            name = _state$orderedModifie.name;
          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference, popper)) {
      return instance;
    }
    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref) {
        var name = _ref.name,
          _ref$options = _ref.options,
          options = _ref$options === void 0 ? {} : _ref$options,
          effect = _ref.effect;
        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });
          var noopFn = function noopFn() {};
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var createPopper = /*#__PURE__*/(/* unused pure expression or super */ null && (popperGenerator())); // eslint-disable-next-line import/no-unused-modules


;// ./node_modules/react-overlays/esm/popper.js









 // For the common JS build we will turn this file into a bundle with no imports.
// This is b/c the Popper lib is all esm files, and would break in a common js only environment

var popper_createPopper = popperGenerator({
  defaultModifiers: [modifiers_hide, modifiers_popperOffsets, modifiers_computeStyles, eventListeners, modifiers_offset, modifiers_flip, modifiers_preventOverflow, modifiers_arrow]
});

;// ./node_modules/react-overlays/esm/usePopper.js





var initialPopperStyles = function initialPopperStyles(position) {
  return {
    position: position,
    top: '0',
    left: '0',
    opacity: '0',
    pointerEvents: 'none'
  };
};
var disabledApplyStylesModifier = {
  name: 'applyStyles',
  enabled: false
}; // In order to satisfy the current usage of options, including undefined

var ariaDescribedByModifier = {
  name: 'ariaDescribedBy',
  enabled: true,
  phase: 'afterWrite',
  effect: function effect(_ref) {
    var state = _ref.state;
    return function () {
      var _state$elements = state.elements,
        reference = _state$elements.reference,
        popper = _state$elements.popper;
      if ('removeAttribute' in reference) {
        var ids = (reference.getAttribute('aria-describedby') || '').split(',').filter(function (id) {
          return id.trim() !== popper.id;
        });
        if (!ids.length) reference.removeAttribute('aria-describedby');else reference.setAttribute('aria-describedby', ids.join(','));
      }
    };
  },
  fn: function fn(_ref2) {
    var _popper$getAttribute;
    var state = _ref2.state;
    var _state$elements2 = state.elements,
      popper = _state$elements2.popper,
      reference = _state$elements2.reference;
    var role = (_popper$getAttribute = popper.getAttribute('role')) == null ? void 0 : _popper$getAttribute.toLowerCase();
    if (popper.id && role === 'tooltip' && 'setAttribute' in reference) {
      var ids = reference.getAttribute('aria-describedby');
      if (ids && ids.split(',').indexOf(popper.id) !== -1) {
        return;
      }
      reference.setAttribute('aria-describedby', ids ? ids + "," + popper.id : popper.id);
    }
  }
};
var EMPTY_MODIFIERS = [];
/**
 * Position an element relative some reference element using Popper.js
 *
 * @param referenceElement
 * @param popperElement
 * @param {object}      options
 * @param {object=}     options.modifiers Popper.js modifiers
 * @param {boolean=}    options.enabled toggle the popper functionality on/off
 * @param {string=}     options.placement The popper element placement relative to the reference element
 * @param {string=}     options.strategy the positioning strategy
 * @param {boolean=}    options.eventsEnabled have Popper listen on window resize events to reposition the element
 * @param {function=}   options.onCreate called when the popper is created
 * @param {function=}   options.onUpdate called when the popper is updated
 *
 * @returns {UsePopperState} The popper state
 */

function usePopper(referenceElement, popperElement, _temp) {
  var _ref3 = _temp === void 0 ? {} : _temp,
    _ref3$enabled = _ref3.enabled,
    enabled = _ref3$enabled === void 0 ? true : _ref3$enabled,
    _ref3$placement = _ref3.placement,
    placement = _ref3$placement === void 0 ? 'bottom' : _ref3$placement,
    _ref3$strategy = _ref3.strategy,
    strategy = _ref3$strategy === void 0 ? 'absolute' : _ref3$strategy,
    _ref3$modifiers = _ref3.modifiers,
    modifiers = _ref3$modifiers === void 0 ? EMPTY_MODIFIERS : _ref3$modifiers,
    config = (0,objectWithoutPropertiesLoose/* default */.A)(_ref3, ["enabled", "placement", "strategy", "modifiers"]);
  var popperInstanceRef = (0,react.useRef)();
  var update = (0,react.useCallback)(function () {
    var _popperInstanceRef$cu;
    (_popperInstanceRef$cu = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu.update();
  }, []);
  var forceUpdate = (0,react.useCallback)(function () {
    var _popperInstanceRef$cu2;
    (_popperInstanceRef$cu2 = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu2.forceUpdate();
  }, []);
  var _useSafeState = esm_useSafeState((0,react.useState)({
      placement: placement,
      update: update,
      forceUpdate: forceUpdate,
      attributes: {},
      styles: {
        popper: initialPopperStyles(strategy),
        arrow: {}
      }
    })),
    popperState = _useSafeState[0],
    setState = _useSafeState[1];
  var updateModifier = (0,react.useMemo)(function () {
    return {
      name: 'updateStateModifier',
      enabled: true,
      phase: 'write',
      requires: ['computeStyles'],
      fn: function fn(_ref4) {
        var state = _ref4.state;
        var styles = {};
        var attributes = {};
        Object.keys(state.elements).forEach(function (element) {
          styles[element] = state.styles[element];
          attributes[element] = state.attributes[element];
        });
        setState({
          state: state,
          styles: styles,
          attributes: attributes,
          update: update,
          forceUpdate: forceUpdate,
          placement: state.placement
        });
      }
    };
  }, [update, forceUpdate, setState]);
  (0,react.useEffect)(function () {
    if (!popperInstanceRef.current || !enabled) return;
    popperInstanceRef.current.setOptions({
      placement: placement,
      strategy: strategy,
      modifiers: [].concat(modifiers, [updateModifier, disabledApplyStylesModifier])
    }); // intentionally NOT re-running on new modifiers
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [strategy, placement, updateModifier, enabled]);
  (0,react.useEffect)(function () {
    if (!enabled || referenceElement == null || popperElement == null) {
      return undefined;
    }
    popperInstanceRef.current = popper_createPopper(referenceElement, popperElement, (0,esm_extends/* default */.A)({}, config, {
      placement: placement,
      strategy: strategy,
      modifiers: [].concat(modifiers, [ariaDescribedByModifier, updateModifier])
    }));
    return function () {
      if (popperInstanceRef.current != null) {
        popperInstanceRef.current.destroy();
        popperInstanceRef.current = undefined;
        setState(function (s) {
          return (0,esm_extends/* default */.A)({}, s, {
            attributes: {},
            styles: {
              popper: initialPopperStyles(strategy)
            }
          });
        });
      }
    }; // This is only run once to _create_ the popper
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, referenceElement, popperElement]);
  return popperState;
}
/* harmony default export */ const esm_usePopper = (usePopper);
;// ./node_modules/dom-helpers/esm/addEventListener.js
/* eslint-disable no-return-assign */

var optionsSupported = false;
var onceSupported = false;
try {
  var options = {
    get passive() {
      return optionsSupported = true;
    },
    get once() {
      // eslint-disable-next-line no-multi-assign
      return onceSupported = optionsSupported = true;
    }
  };
  if (canUseDOM) {
    window.addEventListener('test', options, options);
    window.removeEventListener('test', options, true);
  }
} catch (e) {
  /* */
}

/**
 * An `addEventListener` ponyfill, supports the `once` option
 * 
 * @param node the element
 * @param eventName the event name
 * @param handle the handler
 * @param options event options
 */
function addEventListener(node, eventName, handler, options) {
  if (options && typeof options !== 'boolean' && !onceSupported) {
    var once = options.once,
      capture = options.capture;
    var wrappedHandler = handler;
    if (!onceSupported && once) {
      wrappedHandler = handler.__once || function onceHandler(event) {
        this.removeEventListener(eventName, onceHandler, capture);
        handler.call(this, event);
      };
      handler.__once = wrappedHandler;
    }
    node.addEventListener(eventName, wrappedHandler, optionsSupported ? options : capture);
  }
  node.addEventListener(eventName, handler, options);
}
/* harmony default export */ const esm_addEventListener = (addEventListener);
;// ./node_modules/dom-helpers/esm/removeEventListener.js
/**
 * A `removeEventListener` ponyfill
 * 
 * @param node the element
 * @param eventName the event name
 * @param handle the handler
 * @param options event options
 */
function removeEventListener(node, eventName, handler, options) {
  var capture = options && typeof options !== 'boolean' ? options.capture : options;
  node.removeEventListener(eventName, handler, capture);
  if (handler.__once) {
    node.removeEventListener(eventName, handler.__once, capture);
  }
}
/* harmony default export */ const esm_removeEventListener = (removeEventListener);
;// ./node_modules/dom-helpers/esm/listen.js


function listen(node, eventName, handler, options) {
  esm_addEventListener(node, eventName, handler, options);
  return function () {
    esm_removeEventListener(node, eventName, handler, options);
  };
}
/* harmony default export */ const esm_listen = (listen);
;// ./node_modules/@restart/hooks/esm/useCommittedRef.js


/**
 * Creates a `Ref` whose value is updated in an effect, ensuring the most recent
 * value is the one rendered with. Generally only required for Concurrent mode usage
 * where previous work in `render()` may be discarded before being used.
 *
 * This is safe to access in an event handler.
 *
 * @param value The `Ref` value
 */
function useCommittedRef(value) {
  const ref = (0,react.useRef)(value);
  (0,react.useEffect)(() => {
    ref.current = value;
  }, [value]);
  return ref;
}
/* harmony default export */ const esm_useCommittedRef = (useCommittedRef);
;// ./node_modules/@restart/hooks/esm/useEventCallback.js


function useEventCallback(fn) {
  const ref = esm_useCommittedRef(fn);
  return (0,react.useCallback)(function () {
    return ref.current && ref.current(...arguments);
  }, [ref]);
}
// EXTERNAL MODULE: ./node_modules/warning/warning.js
var warning = __webpack_require__(2241);
var warning_default = /*#__PURE__*/__webpack_require__.n(warning);
;// ./node_modules/react-overlays/esm/safeFindDOMNode.js

function safeFindDOMNode(componentOrElement) {
  if (componentOrElement && 'setState' in componentOrElement) {
    return react_dom.findDOMNode(componentOrElement);
  }
  return componentOrElement != null ? componentOrElement : null;
}
;// ./node_modules/react-overlays/esm/ownerDocument.js


/* harmony default export */ const esm_ownerDocument = (function (componentOrElement) {
  return ownerDocument(safeFindDOMNode(componentOrElement));
});
;// ./node_modules/react-overlays/esm/useRootClose.js






var escapeKeyCode = 27;
var useRootClose_noop = function noop() {};
function isLeftClickEvent(event) {
  return event.button === 0;
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
var getRefTarget = function getRefTarget(ref) {
  return ref && ('current' in ref ? ref.current : ref);
};

/**
 * The `useRootClose` hook registers your callback on the document
 * when rendered. Powers the `<Overlay/>` component. This is used achieve modal
 * style behavior where your callback is triggered when the user tries to
 * interact with the rest of the document or hits the `esc` key.
 *
 * @param {Ref<HTMLElement>| HTMLElement} ref  The element boundary
 * @param {function} onRootClose
 * @param {object=}  options
 * @param {boolean=} options.disabled
 * @param {string=}  options.clickTrigger The DOM event name (click, mousedown, etc) to attach listeners on
 */
function useRootClose(ref, onRootClose, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
    disabled = _ref.disabled,
    _ref$clickTrigger = _ref.clickTrigger,
    clickTrigger = _ref$clickTrigger === void 0 ? 'click' : _ref$clickTrigger;
  var preventMouseRootCloseRef = (0,react.useRef)(false);
  var onClose = onRootClose || useRootClose_noop;
  var handleMouseCapture = (0,react.useCallback)(function (e) {
    var _e$composedPath$;
    var currentTarget = getRefTarget(ref);
    warning_default()(!!currentTarget, 'RootClose captured a close event but does not have a ref to compare it to. ' + 'useRootClose(), should be passed a ref that resolves to a DOM node');
    preventMouseRootCloseRef.current = !currentTarget || isModifiedEvent(e) || !isLeftClickEvent(e) || !!contains(currentTarget, (_e$composedPath$ = e.composedPath == null ? void 0 : e.composedPath()[0]) != null ? _e$composedPath$ : e.target);
  }, [ref]);
  var handleMouse = useEventCallback(function (e) {
    if (!preventMouseRootCloseRef.current) {
      onClose(e);
    }
  });
  var handleKeyUp = useEventCallback(function (e) {
    if (e.keyCode === escapeKeyCode) {
      onClose(e);
    }
  });
  (0,react.useEffect)(function () {
    if (disabled || ref == null) return undefined; // Store the current event to avoid triggering handlers immediately
    // https://github.com/facebook/react/issues/20074

    var currentEvent = window.event;
    var doc = esm_ownerDocument(getRefTarget(ref)); // Use capture for this listener so it fires before React's listener, to
    // avoid false positives in the contains() check below if the target DOM
    // element is removed in the React mouse callback.

    var removeMouseCaptureListener = esm_listen(doc, clickTrigger, handleMouseCapture, true);
    var removeMouseListener = esm_listen(doc, clickTrigger, function (e) {
      // skip if this event is the same as the one running when we added the handlers
      if (e === currentEvent) {
        currentEvent = undefined;
        return;
      }
      handleMouse(e);
    });
    var removeKeyupListener = esm_listen(doc, 'keyup', function (e) {
      // skip if this event is the same as the one running when we added the handlers
      if (e === currentEvent) {
        currentEvent = undefined;
        return;
      }
      handleKeyUp(e);
    });
    var mobileSafariHackListeners = [];
    if ('ontouchstart' in doc.documentElement) {
      mobileSafariHackListeners = [].slice.call(doc.body.children).map(function (el) {
        return esm_listen(el, 'mousemove', useRootClose_noop);
      });
    }
    return function () {
      removeMouseCaptureListener();
      removeMouseListener();
      removeKeyupListener();
      mobileSafariHackListeners.forEach(function (remove) {
        return remove();
      });
    };
  }, [ref, disabled, clickTrigger, handleMouseCapture, handleMouse, handleKeyUp]);
}
/* harmony default export */ const esm_useRootClose = (useRootClose);
;// ./node_modules/react-overlays/esm/useWaitForDOMRef.js


var resolveContainerRef = function resolveContainerRef(ref) {
  var _ref;
  if (typeof document === 'undefined') return null;
  if (ref == null) return ownerDocument().body;
  if (typeof ref === 'function') ref = ref();
  if (ref && 'current' in ref) ref = ref.current;
  if ((_ref = ref) != null && _ref.nodeType) return ref || null;
  return null;
};
function useWaitForDOMRef(ref, onResolved) {
  var _useState = (0,react.useState)(function () {
      return resolveContainerRef(ref);
    }),
    resolvedRef = _useState[0],
    setRef = _useState[1];
  if (!resolvedRef) {
    var earlyRef = resolveContainerRef(ref);
    if (earlyRef) setRef(earlyRef);
  }
  (0,react.useEffect)(function () {
    if (onResolved && resolvedRef) {
      onResolved(resolvedRef);
    }
  }, [onResolved, resolvedRef]);
  (0,react.useEffect)(function () {
    var nextRef = resolveContainerRef(ref);
    if (nextRef !== resolvedRef) {
      setRef(nextRef);
    }
  }, [ref, resolvedRef]);
  return resolvedRef;
}
;// ./node_modules/react-overlays/esm/mergeOptionsWithPopperConfig.js

function toModifierMap(modifiers) {
  var result = {};
  if (!Array.isArray(modifiers)) {
    return modifiers || result;
  } // eslint-disable-next-line no-unused-expressions

  modifiers == null ? void 0 : modifiers.forEach(function (m) {
    result[m.name] = m;
  });
  return result;
}
function toModifierArray(map) {
  if (map === void 0) {
    map = {};
  }
  if (Array.isArray(map)) return map;
  return Object.keys(map).map(function (k) {
    map[k].name = k;
    return map[k];
  });
}
function mergeOptionsWithPopperConfig(_ref) {
  var _modifiers$preventOve, _modifiers$preventOve2, _modifiers$offset, _modifiers$arrow;
  var enabled = _ref.enabled,
    enableEvents = _ref.enableEvents,
    placement = _ref.placement,
    flip = _ref.flip,
    offset = _ref.offset,
    fixed = _ref.fixed,
    containerPadding = _ref.containerPadding,
    arrowElement = _ref.arrowElement,
    _ref$popperConfig = _ref.popperConfig,
    popperConfig = _ref$popperConfig === void 0 ? {} : _ref$popperConfig;
  var modifiers = toModifierMap(popperConfig.modifiers);
  return (0,esm_extends/* default */.A)({}, popperConfig, {
    placement: placement,
    enabled: enabled,
    strategy: fixed ? 'fixed' : popperConfig.strategy,
    modifiers: toModifierArray((0,esm_extends/* default */.A)({}, modifiers, {
      eventListeners: {
        enabled: enableEvents
      },
      preventOverflow: (0,esm_extends/* default */.A)({}, modifiers.preventOverflow, {
        options: containerPadding ? (0,esm_extends/* default */.A)({
          padding: containerPadding
        }, (_modifiers$preventOve = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve.options) : (_modifiers$preventOve2 = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve2.options
      }),
      offset: {
        options: (0,esm_extends/* default */.A)({
          offset: offset
        }, (_modifiers$offset = modifiers.offset) == null ? void 0 : _modifiers$offset.options)
      },
      arrow: (0,esm_extends/* default */.A)({}, modifiers.arrow, {
        enabled: !!arrowElement,
        options: (0,esm_extends/* default */.A)({}, (_modifiers$arrow = modifiers.arrow) == null ? void 0 : _modifiers$arrow.options, {
          element: arrowElement
        })
      }),
      flip: (0,esm_extends/* default */.A)({
        enabled: !!flip
      }, modifiers.flip)
    }))
  });
}
;// ./node_modules/react-overlays/esm/Overlay.js













/**
 * Built on top of `Popper.js`, the overlay component is
 * great for custom tooltip overlays.
 */
var Overlay = /*#__PURE__*/react.forwardRef(function (props, outerRef) {
  var flip = props.flip,
    offset = props.offset,
    placement = props.placement,
    _props$containerPaddi = props.containerPadding,
    containerPadding = _props$containerPaddi === void 0 ? 5 : _props$containerPaddi,
    _props$popperConfig = props.popperConfig,
    popperConfig = _props$popperConfig === void 0 ? {} : _props$popperConfig,
    Transition = props.transition;
  var _useCallbackRef = useCallbackRef(),
    rootElement = _useCallbackRef[0],
    attachRef = _useCallbackRef[1];
  var _useCallbackRef2 = useCallbackRef(),
    arrowElement = _useCallbackRef2[0],
    attachArrowRef = _useCallbackRef2[1];
  var mergedRef = esm_useMergedRefs(attachRef, outerRef);
  var container = useWaitForDOMRef(props.container);
  var target = useWaitForDOMRef(props.target);
  var _useState = (0,react.useState)(!props.show),
    exited = _useState[0],
    setExited = _useState[1];
  var _usePopper = esm_usePopper(target, rootElement, mergeOptionsWithPopperConfig({
      placement: placement,
      enableEvents: !!props.show,
      containerPadding: containerPadding || 5,
      flip: flip,
      offset: offset,
      arrowElement: arrowElement,
      popperConfig: popperConfig
    })),
    styles = _usePopper.styles,
    attributes = _usePopper.attributes,
    popper = (0,objectWithoutPropertiesLoose/* default */.A)(_usePopper, ["styles", "attributes"]);
  if (props.show) {
    if (exited) setExited(false);
  } else if (!props.transition && !exited) {
    setExited(true);
  }
  var handleHidden = function handleHidden() {
    setExited(true);
    if (props.onExited) {
      props.onExited.apply(props, arguments);
    }
  }; // Don't un-render the overlay while it's transitioning out.

  var mountOverlay = props.show || Transition && !exited;
  esm_useRootClose(rootElement, props.onHide, {
    disabled: !props.rootClose || props.rootCloseDisabled,
    clickTrigger: props.rootCloseEvent
  });
  if (!mountOverlay) {
    // Don't bother showing anything if we don't have to.
    return null;
  }
  var child = props.children((0,esm_extends/* default */.A)({}, popper, {
    show: !!props.show,
    props: (0,esm_extends/* default */.A)({}, attributes.popper, {
      style: styles.popper,
      ref: mergedRef
    }),
    arrowProps: (0,esm_extends/* default */.A)({}, attributes.arrow, {
      style: styles.arrow,
      ref: attachArrowRef
    })
  }));
  if (Transition) {
    var onExit = props.onExit,
      onExiting = props.onExiting,
      onEnter = props.onEnter,
      onEntering = props.onEntering,
      onEntered = props.onEntered;
    child = /*#__PURE__*/react.createElement(Transition, {
      "in": props.show,
      appear: true,
      onExit: onExit,
      onExiting: onExiting,
      onExited: handleHidden,
      onEnter: onEnter,
      onEntering: onEntering,
      onEntered: onEntered
    }, child);
  }
  return container ? /*#__PURE__*/react_dom.createPortal(child, container) : null;
});
Overlay.displayName = 'Overlay';
Overlay.propTypes = {
  /**
   * Set the visibility of the Overlay
   */
  show: (prop_types_default()).bool,
  /** Specify where the overlay element is positioned in relation to the target element */
  placement: prop_types_default().oneOf(enums_placements),
  /**
   * A DOM Element, Ref to an element, or function that returns either. The `target` element is where
   * the overlay is positioned relative to.
   */
  target: (prop_types_default()).any,
  /**
   * A DOM Element, Ref to an element, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: (prop_types_default()).any,
  /**
   * Enables the Popper.js `flip` modifier, allowing the Overlay to
   * automatically adjust it's placement in case of overlap with the viewport or toggle.
   * Refer to the [flip docs](https://popper.js.org/popper-documentation.html#modifiers..flip.enabled) for more info
   */
  flip: (prop_types_default()).bool,
  /**
   * A render prop that returns an element to overlay and position. See
   * the [react-popper documentation](https://github.com/FezVrasta/react-popper#children) for more info.
   *
   * @type {Function ({
   *   show: boolean,
   *   placement: Placement,
   *   update: () => void,
   *   forceUpdate: () => void,
   *   props: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     aria-labelledby: ?string
   *     [string]: string | number,
   *   },
   *   arrowProps: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     [string]: string | number,
   *   },
   * }) => React.Element}
   */
  children: (prop_types_default()).func.isRequired,
  /**
   * Control how much space there is between the edge of the boundary element and overlay.
   * A convenience shortcut to setting `popperConfig.modfiers.preventOverflow.padding`
   */
  containerPadding: (prop_types_default()).number,
  /**
   * A set of popper options and props passed directly to react-popper's Popper component.
   */
  popperConfig: (prop_types_default()).object,
  /**
   * Specify whether the overlay should trigger `onHide` when the user clicks outside the overlay
   */
  rootClose: (prop_types_default()).bool,
  /**
   * Specify event for toggling overlay
   */
  rootCloseEvent: prop_types_default().oneOf(['click', 'mousedown']),
  /**
   * Specify disabled for disable RootCloseWrapper
   */
  rootCloseDisabled: (prop_types_default()).bool,
  /**
   * A Callback fired by the Overlay when it wishes to be hidden.
   *
   * __required__ when `rootClose` is `true`.
   *
   * @type func
   */
  onHide: function onHide(props) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (props.rootClose) {
      var _PropTypes$func;
      return (_PropTypes$func = (prop_types_default()).func).isRequired.apply(_PropTypes$func, [props].concat(args));
    }
    return prop_types_default().func.apply((prop_types_default()), [props].concat(args));
  },
  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component
   * used to animate the overlay as it changes visibility.
   */
  // @ts-ignore
  transition: (prop_types_default()).elementType,
  /**
   * Callback fired before the Overlay transitions in
   */
  onEnter: (prop_types_default()).func,
  /**
   * Callback fired as the Overlay begins to transition in
   */
  onEntering: (prop_types_default()).func,
  /**
   * Callback fired after the Overlay finishes transitioning in
   */
  onEntered: (prop_types_default()).func,
  /**
   * Callback fired right before the Overlay transitions out
   */
  onExit: (prop_types_default()).func,
  /**
   * Callback fired as the Overlay begins to transition out
   */
  onExiting: (prop_types_default()).func,
  /**
   * Callback fired after the Overlay finishes transitioning out
   */
  onExited: (prop_types_default()).func
};
/* harmony default export */ const esm_Overlay = (Overlay);
;// ./node_modules/lodash-es/_listCacheClear.js
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
/* harmony default export */ const _listCacheClear = (listCacheClear);
;// ./node_modules/lodash-es/_assocIndexOf.js


/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (lodash_es_eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
/* harmony default export */ const _assocIndexOf = (assocIndexOf);
;// ./node_modules/lodash-es/_listCacheDelete.js


/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
    index = _assocIndexOf(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
/* harmony default export */ const _listCacheDelete = (listCacheDelete);
;// ./node_modules/lodash-es/_listCacheGet.js


/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
    index = _assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}
/* harmony default export */ const _listCacheGet = (listCacheGet);
;// ./node_modules/lodash-es/_listCacheHas.js


/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}
/* harmony default export */ const _listCacheHas = (listCacheHas);
;// ./node_modules/lodash-es/_listCacheSet.js


/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
    index = _assocIndexOf(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
/* harmony default export */ const _listCacheSet = (listCacheSet);
;// ./node_modules/lodash-es/_ListCache.js






/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
    length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;
/* harmony default export */ const _ListCache = (ListCache);
;// ./node_modules/lodash-es/_stackClear.js


/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache();
  this.size = 0;
}
/* harmony default export */ const _stackClear = (stackClear);
;// ./node_modules/lodash-es/_stackDelete.js
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
    result = data['delete'](key);
  this.size = data.size;
  return result;
}
/* harmony default export */ const _stackDelete = (stackDelete);
;// ./node_modules/lodash-es/_stackGet.js
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}
/* harmony default export */ const _stackGet = (stackGet);
;// ./node_modules/lodash-es/_stackHas.js
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}
/* harmony default export */ const _stackHas = (stackHas);
;// ./node_modules/lodash-es/_coreJsData.js


/** Used to detect overreaching core-js shims. */
var coreJsData = _root['__core-js_shared__'];
/* harmony default export */ const _coreJsData = (coreJsData);
;// ./node_modules/lodash-es/_isMasked.js


/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
/* harmony default export */ const _isMasked = (isMasked);
;// ./node_modules/lodash-es/_toSource.js
/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}
/* harmony default export */ const _toSource = (toSource);
;// ./node_modules/lodash-es/_baseIsNative.js





/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var _baseIsNative_funcProto = Function.prototype,
  _baseIsNative_objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var _baseIsNative_funcToString = _baseIsNative_funcProto.toString;

/** Used to check objects for own properties. */
var _baseIsNative_hasOwnProperty = _baseIsNative_objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + _baseIsNative_funcToString.call(_baseIsNative_hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!lodash_es_isObject(value) || _isMasked(value)) {
    return false;
  }
  var pattern = lodash_es_isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}
/* harmony default export */ const _baseIsNative = (baseIsNative);
;// ./node_modules/lodash-es/_getValue.js
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}
/* harmony default export */ const _getValue = (getValue);
;// ./node_modules/lodash-es/_getNative.js



/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}
/* harmony default export */ const _getNative = (getNative);
;// ./node_modules/lodash-es/_Map.js



/* Built-in method references that are verified to be native. */
var _Map_Map = _getNative(_root, 'Map');
/* harmony default export */ const _Map = (_Map_Map);
;// ./node_modules/lodash-es/_nativeCreate.js


/* Built-in method references that are verified to be native. */
var nativeCreate = _getNative(Object, 'create');
/* harmony default export */ const _nativeCreate = (nativeCreate);
;// ./node_modules/lodash-es/_hashClear.js


/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}
/* harmony default export */ const _hashClear = (hashClear);
;// ./node_modules/lodash-es/_hashDelete.js
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
/* harmony default export */ const _hashDelete = (hashDelete);
;// ./node_modules/lodash-es/_hashGet.js


/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var _hashGet_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _hashGet_hasOwnProperty = _hashGet_objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return _hashGet_hasOwnProperty.call(data, key) ? data[key] : undefined;
}
/* harmony default export */ const _hashGet = (hashGet);
;// ./node_modules/lodash-es/_hashHas.js


/** Used for built-in method references. */
var _hashHas_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _hashHas_hasOwnProperty = _hashHas_objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? data[key] !== undefined : _hashHas_hasOwnProperty.call(data, key);
}
/* harmony default export */ const _hashHas = (hashHas);
;// ./node_modules/lodash-es/_hashSet.js


/** Used to stand-in for `undefined` hash values. */
var _hashSet_HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = _nativeCreate && value === undefined ? _hashSet_HASH_UNDEFINED : value;
  return this;
}
/* harmony default export */ const _hashSet = (hashSet);
;// ./node_modules/lodash-es/_Hash.js






/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
    length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;
/* harmony default export */ const _Hash = (Hash);
;// ./node_modules/lodash-es/_mapCacheClear.js




/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash(),
    'map': new (_Map || _ListCache)(),
    'string': new _Hash()
  };
}
/* harmony default export */ const _mapCacheClear = (mapCacheClear);
;// ./node_modules/lodash-es/_isKeyable.js
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}
/* harmony default export */ const _isKeyable = (isKeyable);
;// ./node_modules/lodash-es/_getMapData.js


/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}
/* harmony default export */ const _getMapData = (getMapData);
;// ./node_modules/lodash-es/_mapCacheDelete.js


/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}
/* harmony default export */ const _mapCacheDelete = (mapCacheDelete);
;// ./node_modules/lodash-es/_mapCacheGet.js


/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}
/* harmony default export */ const _mapCacheGet = (mapCacheGet);
;// ./node_modules/lodash-es/_mapCacheHas.js


/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}
/* harmony default export */ const _mapCacheHas = (mapCacheHas);
;// ./node_modules/lodash-es/_mapCacheSet.js


/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
    size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
/* harmony default export */ const _mapCacheSet = (mapCacheSet);
;// ./node_modules/lodash-es/_MapCache.js






/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
    length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;
/* harmony default export */ const _MapCache = (MapCache);
;// ./node_modules/lodash-es/_stackSet.js




/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache) {
    var pairs = data.__data__;
    if (!_Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
/* harmony default export */ const _stackSet = (stackSet);
;// ./node_modules/lodash-es/_Stack.js







/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new _ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear;
Stack.prototype['delete'] = _stackDelete;
Stack.prototype.get = _stackGet;
Stack.prototype.has = _stackHas;
Stack.prototype.set = _stackSet;
/* harmony default export */ const _Stack = (Stack);
;// ./node_modules/lodash-es/_setCacheAdd.js
/** Used to stand-in for `undefined` hash values. */
var _setCacheAdd_HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, _setCacheAdd_HASH_UNDEFINED);
  return this;
}
/* harmony default export */ const _setCacheAdd = (setCacheAdd);
;// ./node_modules/lodash-es/_setCacheHas.js
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}
/* harmony default export */ const _setCacheHas = (setCacheHas);
;// ./node_modules/lodash-es/_SetCache.js




/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
    length = values == null ? 0 : values.length;
  this.__data__ = new _MapCache();
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd;
SetCache.prototype.has = _setCacheHas;
/* harmony default export */ const _SetCache = (SetCache);
;// ./node_modules/lodash-es/_arraySome.js
/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
    length = array == null ? 0 : array.length;
  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}
/* harmony default export */ const _arraySome = (arraySome);
;// ./node_modules/lodash-es/_cacheHas.js
/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}
/* harmony default export */ const _cacheHas = (cacheHas);
;// ./node_modules/lodash-es/_equalArrays.js




/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
  COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
    arrLength = array.length,
    othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
    result = true,
    seen = bitmask & COMPARE_UNORDERED_FLAG ? new _SetCache() : undefined;
  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
      othValue = other[index];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!_arraySome(other, function (othValue, othIndex) {
        if (!_cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}
/* harmony default export */ const _equalArrays = (equalArrays);
;// ./node_modules/lodash-es/_Uint8Array.js


/** Built-in value references. */
var Uint8Array = _root.Uint8Array;
/* harmony default export */ const _Uint8Array = (Uint8Array);
;// ./node_modules/lodash-es/_mapToArray.js
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
    result = Array(map.size);
  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}
/* harmony default export */ const _mapToArray = (mapToArray);
;// ./node_modules/lodash-es/_setToArray.js
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
    result = Array(set.size);
  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}
/* harmony default export */ const _setToArray = (setToArray);
;// ./node_modules/lodash-es/_equalByTag.js







/** Used to compose bitmasks for value comparisons. */
var _equalByTag_COMPARE_PARTIAL_FLAG = 1,
  _equalByTag_COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
  dateTag = '[object Date]',
  errorTag = '[object Error]',
  mapTag = '[object Map]',
  numberTag = '[object Number]',
  regexpTag = '[object RegExp]',
  setTag = '[object Set]',
  stringTag = '[object String]',
  _equalByTag_symbolTag = '[object Symbol]';
var arrayBufferTag = '[object ArrayBuffer]',
  dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
  symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new _Uint8Array(object), new _Uint8Array(other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return lodash_es_eq(+object, +other);
    case errorTag:
      return object.name == other.name && object.message == other.message;
    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == other + '';
    case mapTag:
      var convert = _mapToArray;
    case setTag:
      var isPartial = bitmask & _equalByTag_COMPARE_PARTIAL_FLAG;
      convert || (convert = _setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= _equalByTag_COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = _equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;
    case _equalByTag_symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
/* harmony default export */ const _equalByTag = (equalByTag);
;// ./node_modules/lodash-es/_arrayPush.js
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
    length = values.length,
    offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}
/* harmony default export */ const _arrayPush = (arrayPush);
;// ./node_modules/lodash-es/isArray.js
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;
/* harmony default export */ const lodash_es_isArray = (isArray);
;// ./node_modules/lodash-es/_baseGetAllKeys.js



/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return lodash_es_isArray(object) ? result : _arrayPush(result, symbolsFunc(object));
}
/* harmony default export */ const _baseGetAllKeys = (baseGetAllKeys);
;// ./node_modules/lodash-es/_arrayFilter.js
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
    length = array == null ? 0 : array.length,
    resIndex = 0,
    result = [];
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
/* harmony default export */ const _arrayFilter = (arrayFilter);
;// ./node_modules/lodash-es/stubArray.js
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}
/* harmony default export */ const lodash_es_stubArray = (stubArray);
;// ./node_modules/lodash-es/_getSymbols.js



/** Used for built-in method references. */
var _getSymbols_objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = _getSymbols_objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? lodash_es_stubArray : function (object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return _arrayFilter(nativeGetSymbols(object), function (symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
/* harmony default export */ const _getSymbols = (getSymbols);
;// ./node_modules/lodash-es/_baseTimes.js
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
    result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
/* harmony default export */ const _baseTimes = (baseTimes);
;// ./node_modules/lodash-es/_baseIsArguments.js



/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return lodash_es_isObjectLike(value) && _baseGetTag(value) == argsTag;
}
/* harmony default export */ const _baseIsArguments = (baseIsArguments);
;// ./node_modules/lodash-es/isArguments.js



/** Used for built-in method references. */
var isArguments_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var isArguments_hasOwnProperty = isArguments_objectProto.hasOwnProperty;

/** Built-in value references. */
var isArguments_propertyIsEnumerable = isArguments_objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function () {
  return arguments;
}()) ? _baseIsArguments : function (value) {
  return lodash_es_isObjectLike(value) && isArguments_hasOwnProperty.call(value, 'callee') && !isArguments_propertyIsEnumerable.call(value, 'callee');
};
/* harmony default export */ const lodash_es_isArguments = (isArguments);
;// ./node_modules/lodash-es/stubFalse.js
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}
/* harmony default export */ const lodash_es_stubFalse = (stubFalse);
;// ./node_modules/lodash-es/isBuffer.js



/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || lodash_es_stubFalse;
/* harmony default export */ const lodash_es_isBuffer = (isBuffer);
;// ./node_modules/lodash-es/_baseIsTypedArray.js




/** `Object#toString` result references. */
var _baseIsTypedArray_argsTag = '[object Arguments]',
  arrayTag = '[object Array]',
  _baseIsTypedArray_boolTag = '[object Boolean]',
  _baseIsTypedArray_dateTag = '[object Date]',
  _baseIsTypedArray_errorTag = '[object Error]',
  _baseIsTypedArray_funcTag = '[object Function]',
  _baseIsTypedArray_mapTag = '[object Map]',
  _baseIsTypedArray_numberTag = '[object Number]',
  objectTag = '[object Object]',
  _baseIsTypedArray_regexpTag = '[object RegExp]',
  _baseIsTypedArray_setTag = '[object Set]',
  _baseIsTypedArray_stringTag = '[object String]',
  weakMapTag = '[object WeakMap]';
var _baseIsTypedArray_arrayBufferTag = '[object ArrayBuffer]',
  _baseIsTypedArray_dataViewTag = '[object DataView]',
  float32Tag = '[object Float32Array]',
  float64Tag = '[object Float64Array]',
  int8Tag = '[object Int8Array]',
  int16Tag = '[object Int16Array]',
  int32Tag = '[object Int32Array]',
  uint8Tag = '[object Uint8Array]',
  uint8ClampedTag = '[object Uint8ClampedArray]',
  uint16Tag = '[object Uint16Array]',
  uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[_baseIsTypedArray_argsTag] = typedArrayTags[arrayTag] = typedArrayTags[_baseIsTypedArray_arrayBufferTag] = typedArrayTags[_baseIsTypedArray_boolTag] = typedArrayTags[_baseIsTypedArray_dataViewTag] = typedArrayTags[_baseIsTypedArray_dateTag] = typedArrayTags[_baseIsTypedArray_errorTag] = typedArrayTags[_baseIsTypedArray_funcTag] = typedArrayTags[_baseIsTypedArray_mapTag] = typedArrayTags[_baseIsTypedArray_numberTag] = typedArrayTags[objectTag] = typedArrayTags[_baseIsTypedArray_regexpTag] = typedArrayTags[_baseIsTypedArray_setTag] = typedArrayTags[_baseIsTypedArray_stringTag] = typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return lodash_es_isObjectLike(value) && lodash_es_isLength(value.length) && !!typedArrayTags[_baseGetTag(value)];
}
/* harmony default export */ const _baseIsTypedArray = (baseIsTypedArray);
;// ./node_modules/lodash-es/_baseUnary.js
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}
/* harmony default export */ const _baseUnary = (baseUnary);
;// ./node_modules/lodash-es/_nodeUtil.js


/** Detect free variable `exports`. */
var _nodeUtil_freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var _nodeUtil_freeModule = _nodeUtil_freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var _nodeUtil_moduleExports = _nodeUtil_freeModule && _nodeUtil_freeModule.exports === _nodeUtil_freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = _nodeUtil_moduleExports && _freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = function () {
  try {
    // Use `util.types` for Node.js 10+.
    var types = _nodeUtil_freeModule && _nodeUtil_freeModule.require && _nodeUtil_freeModule.require('util').types;
    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();
/* harmony default export */ const _nodeUtil = (nodeUtil);
;// ./node_modules/lodash-es/isTypedArray.js




/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;
/* harmony default export */ const lodash_es_isTypedArray = (isTypedArray);
;// ./node_modules/lodash-es/_arrayLikeKeys.js







/** Used for built-in method references. */
var _arrayLikeKeys_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _arrayLikeKeys_hasOwnProperty = _arrayLikeKeys_objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = lodash_es_isArray(value),
    isArg = !isArr && lodash_es_isArguments(value),
    isBuff = !isArr && !isArg && lodash_es_isBuffer(value),
    isType = !isArr && !isArg && !isBuff && lodash_es_isTypedArray(value),
    skipIndexes = isArr || isArg || isBuff || isType,
    result = skipIndexes ? _baseTimes(value.length, String) : [],
    length = result.length;
  for (var key in value) {
    if ((inherited || _arrayLikeKeys_hasOwnProperty.call(value, key)) && !(skipIndexes && (
    // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' ||
    // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') ||
    // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') ||
    // Skip index properties.
    _isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
/* harmony default export */ const _arrayLikeKeys = (arrayLikeKeys);
;// ./node_modules/lodash-es/_isPrototype.js
/** Used for built-in method references. */
var _isPrototype_objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
    proto = typeof Ctor == 'function' && Ctor.prototype || _isPrototype_objectProto;
  return value === proto;
}
/* harmony default export */ const _isPrototype = (isPrototype);
;// ./node_modules/lodash-es/_overArg.js
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}
/* harmony default export */ const _overArg = (overArg);
;// ./node_modules/lodash-es/_nativeKeys.js


/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = _overArg(Object.keys, Object);
/* harmony default export */ const _nativeKeys = (nativeKeys);
;// ./node_modules/lodash-es/_baseKeys.js



/** Used for built-in method references. */
var _baseKeys_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _baseKeys_hasOwnProperty = _baseKeys_objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (_baseKeys_hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}
/* harmony default export */ const _baseKeys = (baseKeys);
;// ./node_modules/lodash-es/keys.js




/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return lodash_es_isArrayLike(object) ? _arrayLikeKeys(object) : _baseKeys(object);
}
/* harmony default export */ const lodash_es_keys = (keys);
;// ./node_modules/lodash-es/_getAllKeys.js




/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return _baseGetAllKeys(object, lodash_es_keys, _getSymbols);
}
/* harmony default export */ const _getAllKeys = (getAllKeys);
;// ./node_modules/lodash-es/_equalObjects.js


/** Used to compose bitmasks for value comparisons. */
var _equalObjects_COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var _equalObjects_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _equalObjects_hasOwnProperty = _equalObjects_objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & _equalObjects_COMPARE_PARTIAL_FLAG,
    objProps = _getAllKeys(object),
    objLength = objProps.length,
    othProps = _getAllKeys(other),
    othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : _equalObjects_hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
      othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
      othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}
/* harmony default export */ const _equalObjects = (equalObjects);
;// ./node_modules/lodash-es/_DataView.js



/* Built-in method references that are verified to be native. */
var DataView = _getNative(_root, 'DataView');
/* harmony default export */ const _DataView = (DataView);
;// ./node_modules/lodash-es/_Promise.js



/* Built-in method references that are verified to be native. */
var _Promise_Promise = _getNative(_root, 'Promise');
/* harmony default export */ const _Promise = (_Promise_Promise);
;// ./node_modules/lodash-es/_Set.js



/* Built-in method references that are verified to be native. */
var _Set_Set = _getNative(_root, 'Set');
/* harmony default export */ const _Set = (_Set_Set);
;// ./node_modules/lodash-es/_WeakMap.js



/* Built-in method references that are verified to be native. */
var WeakMap = _getNative(_root, 'WeakMap');
/* harmony default export */ const _WeakMap = (WeakMap);
;// ./node_modules/lodash-es/_getTag.js








/** `Object#toString` result references. */
var _getTag_mapTag = '[object Map]',
  _getTag_objectTag = '[object Object]',
  promiseTag = '[object Promise]',
  _getTag_setTag = '[object Set]',
  _getTag_weakMapTag = '[object WeakMap]';
var _getTag_dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = _toSource(_DataView),
  mapCtorString = _toSource(_Map),
  promiseCtorString = _toSource(_Promise),
  setCtorString = _toSource(_Set),
  weakMapCtorString = _toSource(_WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if (_DataView && getTag(new _DataView(new ArrayBuffer(1))) != _getTag_dataViewTag || _Map && getTag(new _Map()) != _getTag_mapTag || _Promise && getTag(_Promise.resolve()) != promiseTag || _Set && getTag(new _Set()) != _getTag_setTag || _WeakMap && getTag(new _WeakMap()) != _getTag_weakMapTag) {
  getTag = function (value) {
    var result = _baseGetTag(value),
      Ctor = result == _getTag_objectTag ? value.constructor : undefined,
      ctorString = Ctor ? _toSource(Ctor) : '';
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return _getTag_dataViewTag;
        case mapCtorString:
          return _getTag_mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return _getTag_setTag;
        case weakMapCtorString:
          return _getTag_weakMapTag;
      }
    }
    return result;
  };
}
/* harmony default export */ const _getTag = (getTag);
;// ./node_modules/lodash-es/_baseIsEqualDeep.js









/** Used to compose bitmasks for value comparisons. */
var _baseIsEqualDeep_COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var _baseIsEqualDeep_argsTag = '[object Arguments]',
  _baseIsEqualDeep_arrayTag = '[object Array]',
  _baseIsEqualDeep_objectTag = '[object Object]';

/** Used for built-in method references. */
var _baseIsEqualDeep_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _baseIsEqualDeep_hasOwnProperty = _baseIsEqualDeep_objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = lodash_es_isArray(object),
    othIsArr = lodash_es_isArray(other),
    objTag = objIsArr ? _baseIsEqualDeep_arrayTag : _getTag(object),
    othTag = othIsArr ? _baseIsEqualDeep_arrayTag : _getTag(other);
  objTag = objTag == _baseIsEqualDeep_argsTag ? _baseIsEqualDeep_objectTag : objTag;
  othTag = othTag == _baseIsEqualDeep_argsTag ? _baseIsEqualDeep_objectTag : othTag;
  var objIsObj = objTag == _baseIsEqualDeep_objectTag,
    othIsObj = othTag == _baseIsEqualDeep_objectTag,
    isSameTag = objTag == othTag;
  if (isSameTag && lodash_es_isBuffer(object)) {
    if (!lodash_es_isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new _Stack());
    return objIsArr || lodash_es_isTypedArray(object) ? _equalArrays(object, other, bitmask, customizer, equalFunc, stack) : _equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & _baseIsEqualDeep_COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && _baseIsEqualDeep_hasOwnProperty.call(object, '__wrapped__'),
      othIsWrapped = othIsObj && _baseIsEqualDeep_hasOwnProperty.call(other, '__wrapped__');
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
        othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new _Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new _Stack());
  return _equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
/* harmony default export */ const _baseIsEqualDeep = (baseIsEqualDeep);
;// ./node_modules/lodash-es/_baseIsEqual.js



/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !lodash_es_isObjectLike(value) && !lodash_es_isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return _baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
/* harmony default export */ const _baseIsEqual = (baseIsEqual);
;// ./node_modules/lodash-es/isEqual.js


/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return _baseIsEqual(value, other);
}
/* harmony default export */ const lodash_es_isEqual = (isEqual);
;// ./node_modules/dom-helpers/esm/height.js


/**
 * Returns the height of a given element.
 * 
 * @param node the element
 * @param client whether to use `clientHeight` if possible
 */

function height(node, client) {
  var win = isWindow(node);
  return win ? win.innerHeight : client ? node.clientHeight : offset_offset(node).height;
}
;// ./node_modules/dom-helpers/esm/querySelectorAll.js
var toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);
/**
 * Runs `querySelectorAll` on a given element.
 * 
 * @param element the element
 * @param selector the selector
 */

function qsa(element, selector) {
  return toArray(element.querySelectorAll(selector));
}
;// ./node_modules/dom-helpers/esm/matches.js
var matchesImpl;
/**
 * Checks if a given element matches a selector.
 * 
 * @param node the element
 * @param selector the selector
 */

function matches(node, selector) {
  if (!matchesImpl) {
    var body = document.body;
    var nativeMatch = body.matches || body.matchesSelector || body.webkitMatchesSelector || body.mozMatchesSelector || body.msMatchesSelector;
    matchesImpl = function matchesImpl(n, s) {
      return nativeMatch.call(n, s);
    };
  }
  return matchesImpl(node, selector);
}
;// ./node_modules/dom-helpers/esm/closest.js

/**
 * Returns the closest parent element that matches a given selector.
 * 
 * @param node the reference element
 * @param selector the selector to match
 * @param stopAt stop traversing when this element is found
 */

function closest(node, selector, stopAt) {
  if (node.closest && !stopAt) node.closest(selector);
  var nextNode = node;
  do {
    if (matches(nextNode, selector)) return nextNode;
    nextNode = nextNode.parentElement;
  } while (nextNode && nextNode !== stopAt && nextNode.nodeType === document.ELEMENT_NODE);
  return null;
}
;// ./node_modules/lodash-es/_baseFindIndex.js
/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
    index = fromIndex + (fromRight ? 1 : -1);
  while (fromRight ? index-- : ++index < length) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}
/* harmony default export */ const _baseFindIndex = (baseFindIndex);
;// ./node_modules/lodash-es/_baseIsMatch.js



/** Used to compose bitmasks for value comparisons. */
var _baseIsMatch_COMPARE_PARTIAL_FLAG = 1,
  _baseIsMatch_COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
    length = index,
    noCustomizer = !customizer;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
      objValue = object[key],
      srcValue = data[1];
    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new _Stack();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined ? _baseIsEqual(srcValue, objValue, _baseIsMatch_COMPARE_PARTIAL_FLAG | _baseIsMatch_COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}
/* harmony default export */ const _baseIsMatch = (baseIsMatch);
;// ./node_modules/lodash-es/_isStrictComparable.js


/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !lodash_es_isObject(value);
}
/* harmony default export */ const _isStrictComparable = (isStrictComparable);
;// ./node_modules/lodash-es/_getMatchData.js



/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = lodash_es_keys(object),
    length = result.length;
  while (length--) {
    var key = result[length],
      value = object[key];
    result[length] = [key, value, _isStrictComparable(value)];
  }
  return result;
}
/* harmony default export */ const _getMatchData = (getMatchData);
;// ./node_modules/lodash-es/_matchesStrictComparable.js
/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function (object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
  };
}
/* harmony default export */ const _matchesStrictComparable = (matchesStrictComparable);
;// ./node_modules/lodash-es/_baseMatches.js




/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = _getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return _matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function (object) {
    return object === source || _baseIsMatch(object, source, matchData);
  };
}
/* harmony default export */ const _baseMatches = (baseMatches);
;// ./node_modules/lodash-es/_isKey.js



/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (lodash_es_isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || lodash_es_isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
/* harmony default export */ const _isKey = (isKey);
;// ./node_modules/lodash-es/memoize.js


/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function () {
    var args = arguments,
      key = resolver ? resolver.apply(this, args) : args[0],
      cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || _MapCache)();
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = _MapCache;
/* harmony default export */ const lodash_es_memoize = (memoize);
;// ./node_modules/lodash-es/_memoizeCapped.js


/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = lodash_es_memoize(func, function (key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
/* harmony default export */ const _memoizeCapped = (memoizeCapped);
;// ./node_modules/lodash-es/_stringToPath.js


/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = _memoizeCapped(function (string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function (match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});
/* harmony default export */ const _stringToPath = (stringToPath);
;// ./node_modules/lodash-es/_arrayMap.js
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
    length = array == null ? 0 : array.length,
    result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
/* harmony default export */ const _arrayMap = (arrayMap);
;// ./node_modules/lodash-es/_baseToString.js





/** Used as references for various `Number` constants. */
var _baseToString_INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var _baseToString_symbolProto = _Symbol ? _Symbol.prototype : undefined,
  symbolToString = _baseToString_symbolProto ? _baseToString_symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (lodash_es_isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return _arrayMap(value, baseToString) + '';
  }
  if (lodash_es_isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = value + '';
  return result == '0' && 1 / value == -_baseToString_INFINITY ? '-0' : result;
}
/* harmony default export */ const _baseToString = (baseToString);
;// ./node_modules/lodash-es/toString.js


/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString_toString(value) {
  return value == null ? '' : _baseToString(value);
}
/* harmony default export */ const lodash_es_toString = (toString_toString);
;// ./node_modules/lodash-es/_castPath.js





/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (lodash_es_isArray(value)) {
    return value;
  }
  return _isKey(value, object) ? [value] : _stringToPath(lodash_es_toString(value));
}
/* harmony default export */ const _castPath = (castPath);
;// ./node_modules/lodash-es/_toKey.js


/** Used as references for various `Number` constants. */
var _toKey_INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || lodash_es_isSymbol(value)) {
    return value;
  }
  var result = value + '';
  return result == '0' && 1 / value == -_toKey_INFINITY ? '-0' : result;
}
/* harmony default export */ const _toKey = (toKey);
;// ./node_modules/lodash-es/_baseGet.js



/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = _castPath(path, object);
  var index = 0,
    length = path.length;
  while (object != null && index < length) {
    object = object[_toKey(path[index++])];
  }
  return index && index == length ? object : undefined;
}
/* harmony default export */ const _baseGet = (baseGet);
;// ./node_modules/lodash-es/get.js


/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : _baseGet(object, path);
  return result === undefined ? defaultValue : result;
}
/* harmony default export */ const lodash_es_get = (get);
;// ./node_modules/lodash-es/_baseHasIn.js
/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}
/* harmony default export */ const _baseHasIn = (baseHasIn);
;// ./node_modules/lodash-es/_hasPath.js







/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = _castPath(path, object);
  var index = -1,
    length = path.length,
    result = false;
  while (++index < length) {
    var key = _toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && lodash_es_isLength(length) && _isIndex(key, length) && (lodash_es_isArray(object) || lodash_es_isArguments(object));
}
/* harmony default export */ const _hasPath = (hasPath);
;// ./node_modules/lodash-es/hasIn.js



/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && _hasPath(object, path, _baseHasIn);
}
/* harmony default export */ const lodash_es_hasIn = (hasIn);
;// ./node_modules/lodash-es/_baseMatchesProperty.js








/** Used to compose bitmasks for value comparisons. */
var _baseMatchesProperty_COMPARE_PARTIAL_FLAG = 1,
  _baseMatchesProperty_COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (_isKey(path) && _isStrictComparable(srcValue)) {
    return _matchesStrictComparable(_toKey(path), srcValue);
  }
  return function (object) {
    var objValue = lodash_es_get(object, path);
    return objValue === undefined && objValue === srcValue ? lodash_es_hasIn(object, path) : _baseIsEqual(srcValue, objValue, _baseMatchesProperty_COMPARE_PARTIAL_FLAG | _baseMatchesProperty_COMPARE_UNORDERED_FLAG);
  };
}
/* harmony default export */ const _baseMatchesProperty = (baseMatchesProperty);
;// ./node_modules/lodash-es/identity.js
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}
/* harmony default export */ const lodash_es_identity = (identity);
;// ./node_modules/lodash-es/_baseProperty.js
/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function (object) {
    return object == null ? undefined : object[key];
  };
}
/* harmony default export */ const _baseProperty = (baseProperty);
;// ./node_modules/lodash-es/_basePropertyDeep.js


/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function (object) {
    return _baseGet(object, path);
  };
}
/* harmony default export */ const _basePropertyDeep = (basePropertyDeep);
;// ./node_modules/lodash-es/property.js





/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return _isKey(path) ? _baseProperty(_toKey(path)) : _basePropertyDeep(path);
}
/* harmony default export */ const lodash_es_property = (property);
;// ./node_modules/lodash-es/_baseIteratee.js






/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return lodash_es_identity;
  }
  if (typeof value == 'object') {
    return lodash_es_isArray(value) ? _baseMatchesProperty(value[0], value[1]) : _baseMatches(value);
  }
  return lodash_es_property(value);
}
/* harmony default export */ const _baseIteratee = (baseIteratee);
;// ./node_modules/lodash-es/findIndex.js




/* Built-in method references for those with the same name as other `lodash` methods. */
var findIndex_nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : lodash_es_toInteger(fromIndex);
  if (index < 0) {
    index = findIndex_nativeMax(length + index, 0);
  }
  return _baseFindIndex(array, _baseIteratee(predicate, 3), index);
}
/* harmony default export */ const lodash_es_findIndex = (findIndex);
;// ./node_modules/lodash-es/_baseRange.js
/* Built-in method references for those with the same name as other `lodash` methods. */
var _baseRange_nativeCeil = Math.ceil,
  _baseRange_nativeMax = Math.max;

/**
 * The base implementation of `_.range` and `_.rangeRight` which doesn't
 * coerce arguments.
 *
 * @private
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the range of numbers.
 */
function baseRange(start, end, step, fromRight) {
  var index = -1,
    length = _baseRange_nativeMax(_baseRange_nativeCeil((end - start) / (step || 1)), 0),
    result = Array(length);
  while (length--) {
    result[fromRight ? length : ++index] = start;
    start += step;
  }
  return result;
}
/* harmony default export */ const _baseRange = (baseRange);
;// ./node_modules/lodash-es/_createRange.js




/**
 * Creates a `_.range` or `_.rangeRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new range function.
 */
function createRange(fromRight) {
  return function (start, end, step) {
    if (step && typeof step != 'number' && _isIterateeCall(start, end, step)) {
      end = step = undefined;
    }
    // Ensure the sign of `-0` is preserved.
    start = lodash_es_toFinite(start);
    if (end === undefined) {
      end = start;
      start = 0;
    } else {
      end = lodash_es_toFinite(end);
    }
    step = step === undefined ? start < end ? 1 : -1 : lodash_es_toFinite(step);
    return _baseRange(start, end, step, fromRight);
  };
}
/* harmony default export */ const _createRange = (createRange);
;// ./node_modules/lodash-es/range.js


/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`. A step of `-1` is used if a negative
 * `start` is specified without an `end` or `step`. If `end` is not specified,
 * it's set to `start` with `start` then set to `0`.
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {Array} Returns the range of numbers.
 * @see _.inRange, _.rangeRight
 * @example
 *
 * _.range(4);
 * // => [0, 1, 2, 3]
 *
 * _.range(-4);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * _.range(0, 20, 5);
 * // => [0, 5, 10, 15]
 *
 * _.range(0, -4, -1);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 4, 0);
 * // => [1, 1, 1]
 *
 * _.range(0);
 * // => []
 */
var range = _createRange();
/* harmony default export */ const lodash_es_range = (range);
;// ./node_modules/memoize-one/dist/memoize-one.esm.js
var safeIsNaN = Number.isNaN || function ponyfill(value) {
  return typeof value === 'number' && value !== value;
};
function memoize_one_esm_isEqual(first, second) {
  if (first === second) {
    return true;
  }
  if (safeIsNaN(first) && safeIsNaN(second)) {
    return true;
  }
  return false;
}
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i = 0; i < newInputs.length; i++) {
    if (!memoize_one_esm_isEqual(newInputs[i], lastInputs[i])) {
      return false;
    }
  }
  return true;
}
function memoizeOne(resultFn, isEqual) {
  if (isEqual === void 0) {
    isEqual = areInputsEqual;
  }
  var cache = null;
  function memoized() {
    var newArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }
    if (cache && cache.lastThis === this && isEqual(newArgs, cache.lastArgs)) {
      return cache.lastResult;
    }
    var lastResult = resultFn.apply(this, newArgs);
    cache = {
      lastResult: lastResult,
      lastArgs: newArgs,
      lastThis: this
    };
    return lastResult;
  }
  memoized.clear = function clear() {
    cache = null;
  };
  return memoized;
}

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(9417);
;// ./node_modules/lodash-es/_isFlattenable.js




/** Built-in value references. */
var spreadableSymbol = _Symbol ? _Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return lodash_es_isArray(value) || lodash_es_isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
/* harmony default export */ const _isFlattenable = (isFlattenable);
;// ./node_modules/lodash-es/_baseFlatten.js



/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
    length = array.length;
  predicate || (predicate = _isFlattenable);
  result || (result = []);
  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        _arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}
/* harmony default export */ const _baseFlatten = (baseFlatten);
;// ./node_modules/lodash-es/_createBaseFor.js
/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function (object, iteratee, keysFunc) {
    var index = -1,
      iterable = Object(object),
      props = keysFunc(object),
      length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
/* harmony default export */ const _createBaseFor = (createBaseFor);
;// ./node_modules/lodash-es/_baseFor.js


/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = _createBaseFor();
/* harmony default export */ const _baseFor = (baseFor);
;// ./node_modules/lodash-es/_baseForOwn.js



/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && _baseFor(object, iteratee, lodash_es_keys);
}
/* harmony default export */ const _baseForOwn = (baseForOwn);
;// ./node_modules/lodash-es/_createBaseEach.js


/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function (collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!lodash_es_isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
      index = fromRight ? length : -1,
      iterable = Object(collection);
    while (fromRight ? index-- : ++index < length) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}
/* harmony default export */ const _createBaseEach = (createBaseEach);
;// ./node_modules/lodash-es/_baseEach.js



/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = _createBaseEach(_baseForOwn);
/* harmony default export */ const _baseEach = (baseEach);
;// ./node_modules/lodash-es/_baseMap.js



/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
    result = lodash_es_isArrayLike(collection) ? Array(collection.length) : [];
  _baseEach(collection, function (value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}
/* harmony default export */ const _baseMap = (baseMap);
;// ./node_modules/lodash-es/_baseSortBy.js
/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;
  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}
/* harmony default export */ const _baseSortBy = (baseSortBy);
;// ./node_modules/lodash-es/_compareAscending.js


/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
      valIsNull = value === null,
      valIsReflexive = value === value,
      valIsSymbol = lodash_es_isSymbol(value);
    var othIsDefined = other !== undefined,
      othIsNull = other === null,
      othIsReflexive = other === other,
      othIsSymbol = lodash_es_isSymbol(other);
    if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
      return 1;
    }
    if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}
/* harmony default export */ const _compareAscending = (compareAscending);
;// ./node_modules/lodash-es/_compareMultiple.js


/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
    objCriteria = object.criteria,
    othCriteria = other.criteria,
    length = objCriteria.length,
    ordersLength = orders.length;
  while (++index < length) {
    var result = _compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}
/* harmony default export */ const _compareMultiple = (compareMultiple);
;// ./node_modules/lodash-es/_baseOrderBy.js










/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  if (iteratees.length) {
    iteratees = _arrayMap(iteratees, function (iteratee) {
      if (lodash_es_isArray(iteratee)) {
        return function (value) {
          return _baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
        };
      }
      return iteratee;
    });
  } else {
    iteratees = [lodash_es_identity];
  }
  var index = -1;
  iteratees = _arrayMap(iteratees, _baseUnary(_baseIteratee));
  var result = _baseMap(collection, function (value, key, collection) {
    var criteria = _arrayMap(iteratees, function (iteratee) {
      return iteratee(value);
    });
    return {
      'criteria': criteria,
      'index': ++index,
      'value': value
    };
  });
  return _baseSortBy(result, function (object, other) {
    return _compareMultiple(object, other, orders);
  });
}
/* harmony default export */ const _baseOrderBy = (baseOrderBy);
;// ./node_modules/lodash-es/_apply.js
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
/* harmony default export */ const _apply = (apply);
;// ./node_modules/lodash-es/_overRest.js


/* Built-in method references for those with the same name as other `lodash` methods. */
var _overRest_nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = _overRest_nativeMax(start === undefined ? func.length - 1 : start, 0);
  return function () {
    var args = arguments,
      index = -1,
      length = _overRest_nativeMax(args.length - start, 0),
      array = Array(length);
    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return _apply(func, this, otherArgs);
  };
}
/* harmony default export */ const _overRest = (overRest);
;// ./node_modules/lodash-es/constant.js
/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function () {
    return value;
  };
}
/* harmony default export */ const lodash_es_constant = (constant);
;// ./node_modules/lodash-es/_defineProperty.js

var _defineProperty_defineProperty = function () {
  try {
    var func = _getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();
/* harmony default export */ const lodash_es_defineProperty = (_defineProperty_defineProperty);
;// ./node_modules/lodash-es/_baseSetToString.js




/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !lodash_es_defineProperty ? lodash_es_identity : function (func, string) {
  return lodash_es_defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': lodash_es_constant(string),
    'writable': true
  });
};
/* harmony default export */ const _baseSetToString = (baseSetToString);
;// ./node_modules/lodash-es/_shortOut.js
/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
  HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
    lastCalled = 0;
  return function () {
    var stamp = nativeNow(),
      remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}
/* harmony default export */ const _shortOut = (shortOut);
;// ./node_modules/lodash-es/_setToString.js



/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = _shortOut(_baseSetToString);
/* harmony default export */ const _setToString = (setToString);
;// ./node_modules/lodash-es/_baseRest.js




/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return _setToString(_overRest(func, start, lodash_es_identity), func + '');
}
/* harmony default export */ const _baseRest = (baseRest);
;// ./node_modules/lodash-es/sortBy.js





/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection thru each iteratee. This method
 * performs a stable sort, that is, it preserves the original sort order of
 * equal elements. The iteratees are invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {...(Function|Function[])} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 30 },
 *   { 'user': 'barney', 'age': 34 }
 * ];
 *
 * _.sortBy(users, [function(o) { return o.user; }]);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
 *
 * _.sortBy(users, ['user', 'age']);
 * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
 */
var sortBy = _baseRest(function (collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && _isIterateeCall(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && _isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }
  return _baseOrderBy(collection, _baseFlatten(iteratees, 1), []);
});
/* harmony default export */ const lodash_es_sortBy = (sortBy);
;// ./node_modules/dom-helpers/esm/scrollbarSize.js

var size;
function scrollbarSize(recalc) {
  if (!size && size !== 0 || recalc) {
    if (canUseDOM) {
      var scrollDiv = document.createElement('div');
      scrollDiv.style.position = 'absolute';
      scrollDiv.style.top = '-9999px';
      scrollDiv.style.width = '50px';
      scrollDiv.style.height = '50px';
      scrollDiv.style.overflow = 'scroll';
      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }
  return size;
}
;// ./node_modules/dom-helpers/esm/width.js


/**
 * Returns the width of a given element.
 * 
 * @param node the element
 * @param client whether to use `clientWidth` if possible
 */

function getWidth(node, client) {
  var win = isWindow(node);
  return win ? win.innerWidth : client ? node.clientWidth : offset_offset(node).width;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toArray.js
var esm_toArray = __webpack_require__(87695);
;// ./node_modules/dom-helpers/esm/hasClass.js
/**
 * Checks if a given element has a CSS class.
 * 
 * @param element the element
 * @param className the CSS class name
 */
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
;// ./node_modules/dom-helpers/esm/addClass.js

/**
 * Adds a CSS class to a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!hasClass(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}
;// ./node_modules/dom-helpers/esm/removeClass.js
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}
/**
 * Removes a CSS class from a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */

function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}
;// ./node_modules/lodash-es/_arrayEach.js
/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
    length = array == null ? 0 : array.length;
  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}
/* harmony default export */ const _arrayEach = (arrayEach);
;// ./node_modules/lodash-es/_baseAssignValue.js


/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && lodash_es_defineProperty) {
    lodash_es_defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}
/* harmony default export */ const _baseAssignValue = (baseAssignValue);
;// ./node_modules/lodash-es/_assignValue.js



/** Used for built-in method references. */
var _assignValue_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _assignValue_hasOwnProperty = _assignValue_objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(_assignValue_hasOwnProperty.call(object, key) && lodash_es_eq(objValue, value)) || value === undefined && !(key in object)) {
    _baseAssignValue(object, key, value);
  }
}
/* harmony default export */ const _assignValue = (assignValue);
;// ./node_modules/lodash-es/_copyObject.js



/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1,
    length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      _baseAssignValue(object, key, newValue);
    } else {
      _assignValue(object, key, newValue);
    }
  }
  return object;
}
/* harmony default export */ const _copyObject = (copyObject);
;// ./node_modules/lodash-es/_baseAssign.js



/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && _copyObject(source, lodash_es_keys(source), object);
}
/* harmony default export */ const _baseAssign = (baseAssign);
;// ./node_modules/lodash-es/_nativeKeysIn.js
/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
/* harmony default export */ const _nativeKeysIn = (nativeKeysIn);
;// ./node_modules/lodash-es/_baseKeysIn.js




/** Used for built-in method references. */
var _baseKeysIn_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _baseKeysIn_hasOwnProperty = _baseKeysIn_objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!lodash_es_isObject(object)) {
    return _nativeKeysIn(object);
  }
  var isProto = _isPrototype(object),
    result = [];
  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !_baseKeysIn_hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
/* harmony default export */ const _baseKeysIn = (baseKeysIn);
;// ./node_modules/lodash-es/keysIn.js




/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return lodash_es_isArrayLike(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
}
/* harmony default export */ const lodash_es_keysIn = (keysIn);
;// ./node_modules/lodash-es/_baseAssignIn.js



/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && _copyObject(source, lodash_es_keysIn(source), object);
}
/* harmony default export */ const _baseAssignIn = (baseAssignIn);
;// ./node_modules/lodash-es/_cloneBuffer.js


/** Detect free variable `exports`. */
var _cloneBuffer_freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var _cloneBuffer_freeModule = _cloneBuffer_freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var _cloneBuffer_moduleExports = _cloneBuffer_freeModule && _cloneBuffer_freeModule.exports === _cloneBuffer_freeExports;

/** Built-in value references. */
var _cloneBuffer_Buffer = _cloneBuffer_moduleExports ? _root.Buffer : undefined,
  allocUnsafe = _cloneBuffer_Buffer ? _cloneBuffer_Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
    result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
/* harmony default export */ const _cloneBuffer = (cloneBuffer);
;// ./node_modules/lodash-es/_copyArray.js
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
    length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
/* harmony default export */ const _copyArray = (copyArray);
;// ./node_modules/lodash-es/_copySymbols.js



/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return _copyObject(source, _getSymbols(source), object);
}
/* harmony default export */ const _copySymbols = (copySymbols);
;// ./node_modules/lodash-es/_getPrototype.js


/** Built-in value references. */
var getPrototype = _overArg(Object.getPrototypeOf, Object);
/* harmony default export */ const _getPrototype = (getPrototype);
;// ./node_modules/lodash-es/_getSymbolsIn.js





/* Built-in method references for those with the same name as other `lodash` methods. */
var _getSymbolsIn_nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !_getSymbolsIn_nativeGetSymbols ? lodash_es_stubArray : function (object) {
  var result = [];
  while (object) {
    _arrayPush(result, _getSymbols(object));
    object = _getPrototype(object);
  }
  return result;
};
/* harmony default export */ const _getSymbolsIn = (getSymbolsIn);
;// ./node_modules/lodash-es/_copySymbolsIn.js



/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return _copyObject(source, _getSymbolsIn(source), object);
}
/* harmony default export */ const _copySymbolsIn = (copySymbolsIn);
;// ./node_modules/lodash-es/_getAllKeysIn.js




/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return _baseGetAllKeys(object, lodash_es_keysIn, _getSymbolsIn);
}
/* harmony default export */ const _getAllKeysIn = (getAllKeysIn);
;// ./node_modules/lodash-es/_initCloneArray.js
/** Used for built-in method references. */
var _initCloneArray_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _initCloneArray_hasOwnProperty = _initCloneArray_objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
    result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && _initCloneArray_hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
/* harmony default export */ const _initCloneArray = (initCloneArray);
;// ./node_modules/lodash-es/_cloneArrayBuffer.js


/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
  return result;
}
/* harmony default export */ const _cloneArrayBuffer = (cloneArrayBuffer);
;// ./node_modules/lodash-es/_cloneDataView.js


/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
/* harmony default export */ const _cloneDataView = (cloneDataView);
;// ./node_modules/lodash-es/_cloneRegExp.js
/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
/* harmony default export */ const _cloneRegExp = (cloneRegExp);
;// ./node_modules/lodash-es/_cloneSymbol.js


/** Used to convert symbols to primitives and strings. */
var _cloneSymbol_symbolProto = _Symbol ? _Symbol.prototype : undefined,
  _cloneSymbol_symbolValueOf = _cloneSymbol_symbolProto ? _cloneSymbol_symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return _cloneSymbol_symbolValueOf ? Object(_cloneSymbol_symbolValueOf.call(symbol)) : {};
}
/* harmony default export */ const _cloneSymbol = (cloneSymbol);
;// ./node_modules/lodash-es/_cloneTypedArray.js


/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
/* harmony default export */ const _cloneTypedArray = (cloneTypedArray);
;// ./node_modules/lodash-es/_initCloneByTag.js






/** `Object#toString` result references. */
var _initCloneByTag_boolTag = '[object Boolean]',
  _initCloneByTag_dateTag = '[object Date]',
  _initCloneByTag_mapTag = '[object Map]',
  _initCloneByTag_numberTag = '[object Number]',
  _initCloneByTag_regexpTag = '[object RegExp]',
  _initCloneByTag_setTag = '[object Set]',
  _initCloneByTag_stringTag = '[object String]',
  _initCloneByTag_symbolTag = '[object Symbol]';
var _initCloneByTag_arrayBufferTag = '[object ArrayBuffer]',
  _initCloneByTag_dataViewTag = '[object DataView]',
  _initCloneByTag_float32Tag = '[object Float32Array]',
  _initCloneByTag_float64Tag = '[object Float64Array]',
  _initCloneByTag_int8Tag = '[object Int8Array]',
  _initCloneByTag_int16Tag = '[object Int16Array]',
  _initCloneByTag_int32Tag = '[object Int32Array]',
  _initCloneByTag_uint8Tag = '[object Uint8Array]',
  _initCloneByTag_uint8ClampedTag = '[object Uint8ClampedArray]',
  _initCloneByTag_uint16Tag = '[object Uint16Array]',
  _initCloneByTag_uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case _initCloneByTag_arrayBufferTag:
      return _cloneArrayBuffer(object);
    case _initCloneByTag_boolTag:
    case _initCloneByTag_dateTag:
      return new Ctor(+object);
    case _initCloneByTag_dataViewTag:
      return _cloneDataView(object, isDeep);
    case _initCloneByTag_float32Tag:
    case _initCloneByTag_float64Tag:
    case _initCloneByTag_int8Tag:
    case _initCloneByTag_int16Tag:
    case _initCloneByTag_int32Tag:
    case _initCloneByTag_uint8Tag:
    case _initCloneByTag_uint8ClampedTag:
    case _initCloneByTag_uint16Tag:
    case _initCloneByTag_uint32Tag:
      return _cloneTypedArray(object, isDeep);
    case _initCloneByTag_mapTag:
      return new Ctor();
    case _initCloneByTag_numberTag:
    case _initCloneByTag_stringTag:
      return new Ctor(object);
    case _initCloneByTag_regexpTag:
      return _cloneRegExp(object);
    case _initCloneByTag_setTag:
      return new Ctor();
    case _initCloneByTag_symbolTag:
      return _cloneSymbol(object);
  }
}
/* harmony default export */ const _initCloneByTag = (initCloneByTag);
;// ./node_modules/lodash-es/_baseCreate.js


/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = function () {
  function object() {}
  return function (proto) {
    if (!lodash_es_isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = undefined;
    return result;
  };
}();
/* harmony default export */ const _baseCreate = (baseCreate);
;// ./node_modules/lodash-es/_initCloneObject.js




/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return typeof object.constructor == 'function' && !_isPrototype(object) ? _baseCreate(_getPrototype(object)) : {};
}
/* harmony default export */ const _initCloneObject = (initCloneObject);
;// ./node_modules/lodash-es/_baseIsMap.js



/** `Object#toString` result references. */
var _baseIsMap_mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return lodash_es_isObjectLike(value) && _getTag(value) == _baseIsMap_mapTag;
}
/* harmony default export */ const _baseIsMap = (baseIsMap);
;// ./node_modules/lodash-es/isMap.js




/* Node.js helper references. */
var nodeIsMap = _nodeUtil && _nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? _baseUnary(nodeIsMap) : _baseIsMap;
/* harmony default export */ const lodash_es_isMap = (isMap);
;// ./node_modules/lodash-es/_baseIsSet.js



/** `Object#toString` result references. */
var _baseIsSet_setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return lodash_es_isObjectLike(value) && _getTag(value) == _baseIsSet_setTag;
}
/* harmony default export */ const _baseIsSet = (baseIsSet);
;// ./node_modules/lodash-es/isSet.js




/* Node.js helper references. */
var nodeIsSet = _nodeUtil && _nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? _baseUnary(nodeIsSet) : _baseIsSet;
/* harmony default export */ const lodash_es_isSet = (isSet);
;// ./node_modules/lodash-es/_baseClone.js























/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
  CLONE_FLAT_FLAG = 2,
  CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var _baseClone_argsTag = '[object Arguments]',
  _baseClone_arrayTag = '[object Array]',
  _baseClone_boolTag = '[object Boolean]',
  _baseClone_dateTag = '[object Date]',
  _baseClone_errorTag = '[object Error]',
  _baseClone_funcTag = '[object Function]',
  _baseClone_genTag = '[object GeneratorFunction]',
  _baseClone_mapTag = '[object Map]',
  _baseClone_numberTag = '[object Number]',
  _baseClone_objectTag = '[object Object]',
  _baseClone_regexpTag = '[object RegExp]',
  _baseClone_setTag = '[object Set]',
  _baseClone_stringTag = '[object String]',
  _baseClone_symbolTag = '[object Symbol]',
  _baseClone_weakMapTag = '[object WeakMap]';
var _baseClone_arrayBufferTag = '[object ArrayBuffer]',
  _baseClone_dataViewTag = '[object DataView]',
  _baseClone_float32Tag = '[object Float32Array]',
  _baseClone_float64Tag = '[object Float64Array]',
  _baseClone_int8Tag = '[object Int8Array]',
  _baseClone_int16Tag = '[object Int16Array]',
  _baseClone_int32Tag = '[object Int32Array]',
  _baseClone_uint8Tag = '[object Uint8Array]',
  _baseClone_uint8ClampedTag = '[object Uint8ClampedArray]',
  _baseClone_uint16Tag = '[object Uint16Array]',
  _baseClone_uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[_baseClone_argsTag] = cloneableTags[_baseClone_arrayTag] = cloneableTags[_baseClone_arrayBufferTag] = cloneableTags[_baseClone_dataViewTag] = cloneableTags[_baseClone_boolTag] = cloneableTags[_baseClone_dateTag] = cloneableTags[_baseClone_float32Tag] = cloneableTags[_baseClone_float64Tag] = cloneableTags[_baseClone_int8Tag] = cloneableTags[_baseClone_int16Tag] = cloneableTags[_baseClone_int32Tag] = cloneableTags[_baseClone_mapTag] = cloneableTags[_baseClone_numberTag] = cloneableTags[_baseClone_objectTag] = cloneableTags[_baseClone_regexpTag] = cloneableTags[_baseClone_setTag] = cloneableTags[_baseClone_stringTag] = cloneableTags[_baseClone_symbolTag] = cloneableTags[_baseClone_uint8Tag] = cloneableTags[_baseClone_uint8ClampedTag] = cloneableTags[_baseClone_uint16Tag] = cloneableTags[_baseClone_uint32Tag] = true;
cloneableTags[_baseClone_errorTag] = cloneableTags[_baseClone_funcTag] = cloneableTags[_baseClone_weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
    isDeep = bitmask & CLONE_DEEP_FLAG,
    isFlat = bitmask & CLONE_FLAT_FLAG,
    isFull = bitmask & CLONE_SYMBOLS_FLAG;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!lodash_es_isObject(value)) {
    return value;
  }
  var isArr = lodash_es_isArray(value);
  if (isArr) {
    result = _initCloneArray(value);
    if (!isDeep) {
      return _copyArray(value, result);
    }
  } else {
    var tag = _getTag(value),
      isFunc = tag == _baseClone_funcTag || tag == _baseClone_genTag;
    if (lodash_es_isBuffer(value)) {
      return _cloneBuffer(value, isDeep);
    }
    if (tag == _baseClone_objectTag || tag == _baseClone_argsTag || isFunc && !object) {
      result = isFlat || isFunc ? {} : _initCloneObject(value);
      if (!isDeep) {
        return isFlat ? _copySymbolsIn(value, _baseAssignIn(result, value)) : _copySymbols(value, _baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = _initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new _Stack());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (lodash_es_isSet(value)) {
    value.forEach(function (subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (lodash_es_isMap(value)) {
    value.forEach(function (subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? _getAllKeysIn : _getAllKeys : isFlat ? lodash_es_keysIn : lodash_es_keys;
  var props = isArr ? undefined : keysFunc(value);
  _arrayEach(props || value, function (subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    _assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}
/* harmony default export */ const _baseClone = (baseClone);
;// ./node_modules/lodash-es/last.js
/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}
/* harmony default export */ const lodash_es_last = (last);
;// ./node_modules/lodash-es/_parent.js



/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function _parent_parent(object, path) {
  return path.length < 2 ? object : _baseGet(object, _baseSlice(path, 0, -1));
}
/* harmony default export */ const _parent = (_parent_parent);
;// ./node_modules/lodash-es/_baseUnset.js





/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = _castPath(path, object);
  object = _parent(object, path);
  return object == null || delete object[_toKey(lodash_es_last(path))];
}
/* harmony default export */ const _baseUnset = (baseUnset);
;// ./node_modules/lodash-es/isPlainObject.js




/** `Object#toString` result references. */
var isPlainObject_objectTag = '[object Object]';

/** Used for built-in method references. */
var isPlainObject_funcProto = Function.prototype,
  isPlainObject_objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var isPlainObject_funcToString = isPlainObject_funcProto.toString;

/** Used to check objects for own properties. */
var isPlainObject_hasOwnProperty = isPlainObject_objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = isPlainObject_funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!lodash_es_isObjectLike(value) || _baseGetTag(value) != isPlainObject_objectTag) {
    return false;
  }
  var proto = _getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = isPlainObject_hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && isPlainObject_funcToString.call(Ctor) == objectCtorString;
}
/* harmony default export */ const lodash_es_isPlainObject = (isPlainObject);
;// ./node_modules/lodash-es/_customOmitClone.js


/**
 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
 * objects.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} key The key of the property to inspect.
 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
 */
function customOmitClone(value) {
  return lodash_es_isPlainObject(value) ? undefined : value;
}
/* harmony default export */ const _customOmitClone = (customOmitClone);
;// ./node_modules/lodash-es/flatten.js


/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? _baseFlatten(array, 1) : [];
}
/* harmony default export */ const lodash_es_flatten = (flatten);
;// ./node_modules/lodash-es/_flatRest.js




/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return _setToString(_overRest(func, undefined, lodash_es_flatten), func + '');
}
/* harmony default export */ const _flatRest = (flatRest);
;// ./node_modules/lodash-es/omit.js









/** Used to compose bitmasks for cloning. */
var omit_CLONE_DEEP_FLAG = 1,
  omit_CLONE_FLAT_FLAG = 2,
  omit_CLONE_SYMBOLS_FLAG = 4;

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
var omit = _flatRest(function (object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = _arrayMap(paths, function (path) {
    path = _castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  _copyObject(object, _getAllKeysIn(object), result);
  if (isDeep) {
    result = _baseClone(result, omit_CLONE_DEEP_FLAG | omit_CLONE_FLAT_FLAG | omit_CLONE_SYMBOLS_FLAG, _customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    _baseUnset(result, paths[length]);
  }
  return result;
});
/* harmony default export */ const lodash_es_omit = (omit);
;// ./node_modules/lodash-es/defaults.js





/** Used for built-in method references. */
var defaults_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var defaults_hasOwnProperty = defaults_objectProto.hasOwnProperty;

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var defaults = _baseRest(function (object, sources) {
  object = Object(object);
  var index = -1;
  var length = sources.length;
  var guard = length > 2 ? sources[2] : undefined;
  if (guard && _isIterateeCall(sources[0], sources[1], guard)) {
    length = 1;
  }
  while (++index < length) {
    var source = sources[index];
    var props = lodash_es_keysIn(source);
    var propsIndex = -1;
    var propsLength = props.length;
    while (++propsIndex < propsLength) {
      var key = props[propsIndex];
      var value = object[key];
      if (value === undefined || lodash_es_eq(value, defaults_objectProto[key]) && !defaults_hasOwnProperty.call(object, key)) {
        object[key] = source[key];
      }
    }
  }
  return object;
});
/* harmony default export */ const lodash_es_defaults = (defaults);
;// ./node_modules/lodash-es/transform.js











/**
 * An alternative to `_.reduce`; this method transforms `object` to a new
 * `accumulator` object which is the result of running each of its own
 * enumerable string keyed properties thru `iteratee`, with each invocation
 * potentially mutating the `accumulator` object. If `accumulator` is not
 * provided, a new object with the same `[[Prototype]]` will be used. The
 * iteratee is invoked with four arguments: (accumulator, value, key, object).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 1.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The custom accumulator value.
 * @returns {*} Returns the accumulated value.
 * @example
 *
 * _.transform([2, 3, 4], function(result, n) {
 *   result.push(n *= n);
 *   return n % 2 == 0;
 * }, []);
 * // => [4, 9]
 *
 * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] }
 */
function transform(object, iteratee, accumulator) {
  var isArr = lodash_es_isArray(object),
    isArrLike = isArr || lodash_es_isBuffer(object) || lodash_es_isTypedArray(object);
  iteratee = _baseIteratee(iteratee, 4);
  if (accumulator == null) {
    var Ctor = object && object.constructor;
    if (isArrLike) {
      accumulator = isArr ? new Ctor() : [];
    } else if (lodash_es_isObject(object)) {
      accumulator = lodash_es_isFunction(Ctor) ? _baseCreate(_getPrototype(object)) : {};
    } else {
      accumulator = {};
    }
  }
  (isArrLike ? _arrayEach : _baseForOwn)(object, function (value, index, object) {
    return iteratee(accumulator, value, index, object);
  });
  return accumulator;
}
/* harmony default export */ const lodash_es_transform = (transform);
;// ./node_modules/lodash-es/mapValues.js




/**
 * Creates an object with the same keys as `object` and values generated
 * by running each own enumerable string keyed property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapKeys
 * @example
 *
 * var users = {
 *   'fred':    { 'user': 'fred',    'age': 40 },
 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
 * };
 *
 * _.mapValues(users, function(o) { return o.age; });
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 *
 * // The `_.property` iteratee shorthand.
 * _.mapValues(users, 'age');
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 */
function mapValues(object, iteratee) {
  var result = {};
  iteratee = _baseIteratee(iteratee, 3);
  _baseForOwn(object, function (value, key, object) {
    _baseAssignValue(result, key, iteratee(value, key, object));
  });
  return result;
}
/* harmony default export */ const lodash_es_mapValues = (mapValues);
// EXTERNAL MODULE: ./node_modules/dayjs/plugin/isBetween.js
var plugin_isBetween = __webpack_require__(87542);
// EXTERNAL MODULE: ./node_modules/dayjs/plugin/isSameOrAfter.js
var plugin_isSameOrAfter = __webpack_require__(86825);
// EXTERNAL MODULE: ./node_modules/dayjs/plugin/isSameOrBefore.js
var plugin_isSameOrBefore = __webpack_require__(84028);
// EXTERNAL MODULE: ./node_modules/dayjs/plugin/localeData.js
var plugin_localeData = __webpack_require__(43978);
// EXTERNAL MODULE: ./node_modules/dayjs/plugin/localizedFormat.js
var plugin_localizedFormat = __webpack_require__(77588);
// EXTERNAL MODULE: ./node_modules/dayjs/plugin/minMax.js
var plugin_minMax = __webpack_require__(63158);
// EXTERNAL MODULE: ./node_modules/dayjs/plugin/utc.js
var plugin_utc = __webpack_require__(36220);
;// ./node_modules/react-big-calendar/dist/react-big-calendar.esm.js

















































function NoopWrapper(props) {
  return props.children;
}
var react_big_calendar_esm_navigate = {
  PREVIOUS: 'PREV',
  NEXT: 'NEXT',
  TODAY: 'TODAY',
  DATE: 'DATE'
};
var views = {
  MONTH: 'month',
  WEEK: 'week',
  WORK_WEEK: 'work_week',
  DAY: 'day',
  AGENDA: 'agenda'
};
var viewNames$1 = Object.keys(views).map(function (k) {
  return views[k];
});
prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).func]);
(prop_types_default()).any;
(prop_types_default()).func;

/**
 * accepts either an array of builtin view names:
 *
 * ```
 * views={['month', 'day', 'agenda']}
 * ```
 *
 * or an object hash of the view name and the component (or boolean for builtin)
 *
 * ```
 * views={{
 *   month: true,
 *   week: false,
 *   workweek: WorkWeekViewComponent,
 * }}
 * ```
 */

prop_types_default().oneOfType([prop_types_default().arrayOf(prop_types_default().oneOf(viewNames$1)), prop_types_default().objectOf(function (prop, key) {
  var isBuiltinView = viewNames$1.indexOf(key) !== -1 && typeof prop[key] === 'boolean';
  if (isBuiltinView) {
    return null;
  } else {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }
    return prop_types_default().elementType.apply((prop_types_default()), [prop, key].concat(args));
  }
})]);
prop_types_default().oneOfType([prop_types_default().oneOf(['overlap', 'no-overlap']), (prop_types_default()).func]);
function notify(handler, args) {
  handler && handler.apply(null, [].concat(args));
}

/* eslint no-fallthrough: off */
var MILLI = {
  seconds: 1000,
  minutes: 1000 * 60,
  hours: 1000 * 60 * 60,
  day: 1000 * 60 * 60 * 24
};
function firstVisibleDay(date, localizer) {
  var firstOfMonth = startOf(date, 'month');
  return startOf(firstOfMonth, 'week', localizer.startOfWeek());
}
function lastVisibleDay(date, localizer) {
  var endOfMonth = endOf(date, 'month');
  return endOf(endOfMonth, 'week', localizer.startOfWeek());
}
function visibleDays(date, localizer) {
  var current = firstVisibleDay(date, localizer),
    last = lastVisibleDay(date, localizer),
    days = [];
  while (lte(current, last, 'day')) {
    days.push(current);
    current = add(current, 1, 'day');
  }
  return days;
}
function ceil(date, unit) {
  var floor = startOf(date, unit);
  return eq(floor, date) ? floor : add(floor, 1, unit);
}
function react_big_calendar_esm_range(start, end) {
  var unit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'day';
  var current = start,
    days = [];
  while (lte(current, end, unit)) {
    days.push(current);
    current = add(current, 1, unit);
  }
  return days;
}
function merge(date, time) {
  if (time == null && date == null) return null;
  if (time == null) time = new Date();
  if (date == null) date = new Date();
  date = startOf(date, 'day');
  date = hours(date, hours(time));
  date = minutes(date, minutes(time));
  date = seconds(date, seconds(time));
  return milliseconds(date, milliseconds(time));
}
function isJustDate(date) {
  return hours(date) === 0 && minutes(date) === 0 && seconds(date) === 0 && milliseconds(date) === 0;
}
function react_big_calendar_esm_diff(dateA, dateB, unit) {
  if (!unit || unit === 'milliseconds') return Math.abs(+dateA - +dateB);

  // the .round() handles an edge case
  // with DST where the total won't be exact
  // since one day in the range may be shorter/longer by an hour
  return Math.round(Math.abs(+startOf(dateA, unit) / MILLI[unit] - +startOf(dateB, unit) / MILLI[unit]));
}
var localePropType = prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).func]);
function _format(localizer, formatter, value, format, culture) {
  var result = typeof format === 'function' ? format(value, culture, localizer) : formatter.call(localizer, value, format, culture);
  browser_default()(result == null || typeof result === 'string', '`localizer format(..)` must return a string, null, or undefined');
  return result;
}

/**
 * This date conversion was moved out of TimeSlots.js, to
 * allow for localizer override
 * @param {Date} dt - The date to start from
 * @param {Number} minutesFromMidnight
 * @param {Number} offset
 * @returns {Date}
 */
function getSlotDate(dt, minutesFromMidnight, offset) {
  return new Date(dt.getFullYear(), dt.getMonth(), dt.getDate(), 0, minutesFromMidnight + offset, 0, 0);
}
function getDstOffset(start, end) {
  return start.getTimezoneOffset() - end.getTimezoneOffset();
}

// if the start is on a DST-changing day but *after* the moment of DST
// transition we need to add those extra minutes to our minutesFromMidnight
function getTotalMin(start, end) {
  return react_big_calendar_esm_diff(start, end, 'minutes') + getDstOffset(start, end);
}
function getMinutesFromMidnight(start) {
  var daystart = startOf(start, 'day');
  return react_big_calendar_esm_diff(daystart, start, 'minutes') + getDstOffset(daystart, start);
}

// These two are used by DateSlotMetrics
function continuesPrior(start, first) {
  return lt(start, first, 'day');
}
function continuesAfter(start, end, last) {
  var singleDayDuration = eq(start, end, 'minutes');
  return singleDayDuration ? gte(end, last, 'minutes') : gt(end, last, 'minutes');
}

// These two are used by eventLevels
function sortEvents$1(_ref) {
  var _ref$evtA = _ref.evtA,
    aStart = _ref$evtA.start,
    aEnd = _ref$evtA.end,
    aAllDay = _ref$evtA.allDay,
    _ref$evtB = _ref.evtB,
    bStart = _ref$evtB.start,
    bEnd = _ref$evtB.end,
    bAllDay = _ref$evtB.allDay;
  var startSort = +startOf(aStart, 'day') - +startOf(bStart, 'day');
  var durA = react_big_calendar_esm_diff(aStart, ceil(aEnd, 'day'), 'day');
  var durB = react_big_calendar_esm_diff(bStart, ceil(bEnd, 'day'), 'day');
  return startSort ||
  // sort by start Day first
  Math.max(durB, 1) - Math.max(durA, 1) ||
  // events spanning multiple days go first
  !!bAllDay - !!aAllDay ||
  // then allDay single day events
  +aStart - +bStart ||
  // then sort by start time
  +aEnd - +bEnd // then sort by end time
  ;
}

function inEventRange(_ref2) {
  var _ref2$event = _ref2.event,
    start = _ref2$event.start,
    end = _ref2$event.end,
    _ref2$range = _ref2.range,
    rangeStart = _ref2$range.start,
    rangeEnd = _ref2$range.end;
  var eStart = startOf(start, 'day');
  var startsBeforeEnd = lte(eStart, rangeEnd, 'day');
  // when the event is zero duration we need to handle a bit differently
  var sameMin = neq(eStart, end, 'minutes');
  var endsAfterStart = sameMin ? gt(end, rangeStart, 'minutes') : gte(end, rangeStart, 'minutes');
  return startsBeforeEnd && endsAfterStart;
}

// other localizers treats 'day' and 'date' equality very differently, so we
// abstract the change the 'localizer.eq(date1, date2, 'day') into this
// new method, where they can be treated correctly by the localizer overrides
function isSameDate(date1, date2) {
  return eq(date1, date2, 'day');
}
function startAndEndAreDateOnly(start, end) {
  return isJustDate(start) && isJustDate(end);
}
var DateLocalizer = /*#__PURE__*/(0,createClass/* default */.A)(function DateLocalizer(spec) {
  var _this = this;
  (0,classCallCheck/* default */.A)(this, DateLocalizer);
  browser_default()(typeof spec.format === 'function', 'date localizer `format(..)` must be a function');
  browser_default()(typeof spec.firstOfWeek === 'function', 'date localizer `firstOfWeek(..)` must be a function');
  this.propType = spec.propType || localePropType;
  this.formats = spec.formats;
  this.format = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _format.apply(void 0, [_this, spec.format].concat(args));
  };
  // These date arithmetic methods can be overriden by the localizer
  this.startOfWeek = spec.firstOfWeek;
  this.merge = spec.merge || merge;
  this.inRange = spec.inRange || inRange;
  this.lt = spec.lt || lt;
  this.lte = spec.lte || lte;
  this.gt = spec.gt || gt;
  this.gte = spec.gte || gte;
  this.eq = spec.eq || eq;
  this.neq = spec.neq || neq;
  this.startOf = spec.startOf || startOf;
  this.endOf = spec.endOf || endOf;
  this.add = spec.add || add;
  this.range = spec.range || react_big_calendar_esm_range;
  this.diff = spec.diff || react_big_calendar_esm_diff;
  this.ceil = spec.ceil || ceil;
  this.min = spec.min || min;
  this.max = spec.max || max;
  this.minutes = spec.minutes || minutes;
  this.firstVisibleDay = spec.firstVisibleDay || firstVisibleDay;
  this.lastVisibleDay = spec.lastVisibleDay || lastVisibleDay;
  this.visibleDays = spec.visibleDays || visibleDays;
  this.getSlotDate = spec.getSlotDate || getSlotDate;
  this.getTimezoneOffset = spec.getTimezoneOffset || function (value) {
    return value.getTimezoneOffset();
  };
  this.getDstOffset = spec.getDstOffset || getDstOffset;
  this.getTotalMin = spec.getTotalMin || getTotalMin;
  this.getMinutesFromMidnight = spec.getMinutesFromMidnight || getMinutesFromMidnight;
  this.continuesPrior = spec.continuesPrior || continuesPrior;
  this.continuesAfter = spec.continuesAfter || continuesAfter;
  this.sortEvents = spec.sortEvents || sortEvents$1;
  this.inEventRange = spec.inEventRange || inEventRange;
  this.isSameDate = spec.isSameDate || isSameDate;
  this.startAndEndAreDateOnly = spec.startAndEndAreDateOnly || startAndEndAreDateOnly;
  this.segmentOffset = spec.browserTZOffset ? spec.browserTZOffset() : 0;
});
function mergeWithDefaults(localizer, culture, formatOverrides, messages) {
  var formats = (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, localizer.formats), formatOverrides);
  return (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, localizer), {}, {
    messages: messages,
    startOfWeek: function startOfWeek() {
      return localizer.startOfWeek(culture);
    },
    format: function format(value, _format2) {
      return localizer.format(value, formats[_format2] || _format2, culture);
    }
  });
}
var defaultMessages = {
  date: 'Date',
  time: 'Time',
  event: 'Event',
  allDay: 'All Day',
  week: 'Week',
  work_week: 'Work Week',
  day: 'Day',
  month: 'Month',
  previous: 'Back',
  next: 'Next',
  yesterday: 'Yesterday',
  tomorrow: 'Tomorrow',
  today: 'Today',
  agenda: 'Agenda',
  noEventsInRange: 'There are no events in this range.',
  showMore: function showMore(total) {
    return "+".concat(total, " more");
  }
};
function messages(msgs) {
  return (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, defaultMessages), msgs);
}
function useClickOutside(_ref) {
  var ref = _ref.ref,
    callback = _ref.callback;
  (0,react.useEffect)(function () {
    var handleClickOutside = function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return function () {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
}
var _excluded$7 = ["style", "className", "event", "selected", "isAllDay", "onSelect", "onDoubleClick", "onKeyPress", "localizer", "continuesPrior", "continuesAfter", "accessors", "getters", "children", "components", "slotStart", "slotEnd"];
var EventCell = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.A)(EventCell, _React$Component);
  var _super = (0,createSuper/* default */.A)(EventCell);
  function EventCell() {
    (0,classCallCheck/* default */.A)(this, EventCell);
    return _super.apply(this, arguments);
  }
  (0,createClass/* default */.A)(EventCell, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        style = _this$props.style,
        className = _this$props.className,
        event = _this$props.event,
        selected = _this$props.selected,
        isAllDay = _this$props.isAllDay,
        onSelect = _this$props.onSelect,
        _onDoubleClick = _this$props.onDoubleClick,
        _onKeyPress = _this$props.onKeyPress,
        localizer = _this$props.localizer,
        continuesPrior = _this$props.continuesPrior,
        continuesAfter = _this$props.continuesAfter,
        accessors = _this$props.accessors,
        getters = _this$props.getters,
        children = _this$props.children,
        _this$props$component = _this$props.components,
        Event = _this$props$component.event,
        EventWrapper = _this$props$component.eventWrapper,
        slotStart = _this$props.slotStart,
        slotEnd = _this$props.slotEnd,
        props = (0,objectWithoutProperties/* default */.A)(_this$props, _excluded$7);
      delete props.resizable;
      var title = accessors.title(event);
      var tooltip = accessors.tooltip(event);
      var end = accessors.end(event);
      var start = accessors.start(event);
      var allDay = accessors.allDay(event);
      var showAsAllDay = isAllDay || allDay || localizer.diff(start, localizer.ceil(end, 'day'), 'day') > 1;
      var userProps = getters.eventProp(event, start, end, selected);
      var content = /*#__PURE__*/react.createElement("div", {
        className: "rbc-event-content",
        title: tooltip || undefined
      }, Event ? /*#__PURE__*/react.createElement(Event, {
        event: event,
        continuesPrior: continuesPrior,
        continuesAfter: continuesAfter,
        title: title,
        isAllDay: allDay,
        localizer: localizer,
        slotStart: slotStart,
        slotEnd: slotEnd
      }) : title);
      return /*#__PURE__*/react.createElement(EventWrapper, Object.assign({}, this.props, {
        type: "date"
      }), /*#__PURE__*/react.createElement("div", Object.assign({}, props, {
        tabIndex: 0,
        style: (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, userProps.style), style),
        className: clsx_m('rbc-event', className, userProps.className, {
          'rbc-selected': selected,
          'rbc-event-allday': showAsAllDay,
          'rbc-event-continues-prior': continuesPrior,
          'rbc-event-continues-after': continuesAfter
        }),
        onClick: function onClick(e) {
          return onSelect && onSelect(event, e);
        },
        onDoubleClick: function onDoubleClick(e) {
          return _onDoubleClick && _onDoubleClick(event, e);
        },
        onKeyPress: function onKeyPress(e) {
          return _onKeyPress && _onKeyPress(event, e);
        }
      }), typeof children === 'function' ? children(content) : content));
    }
  }]);
  return EventCell;
}(react.Component);
function isSelected(event, selected) {
  if (!event || selected == null) return false;
  return lodash_es_isEqual(event, selected);
}
function slotWidth(rowBox, slots) {
  var rowWidth = rowBox.right - rowBox.left;
  var cellWidth = rowWidth / slots;
  return cellWidth;
}
function getSlotAtX(rowBox, x, rtl, slots) {
  var cellWidth = slotWidth(rowBox, slots);
  return rtl ? slots - 1 - Math.floor((x - rowBox.left) / cellWidth) : Math.floor((x - rowBox.left) / cellWidth);
}
function pointInBox(box, _ref) {
  var x = _ref.x,
    y = _ref.y;
  return y >= box.top && y <= box.bottom && x >= box.left && x <= box.right;
}
function dateCellSelection(start, rowBox, box, slots, rtl) {
  var startIdx = -1;
  var endIdx = -1;
  var lastSlotIdx = slots - 1;
  var cellWidth = slotWidth(rowBox, slots);

  // cell under the mouse
  var currentSlot = getSlotAtX(rowBox, box.x, rtl, slots);

  // Identify row as either the initial row
  // or the row under the current mouse point
  var isCurrentRow = rowBox.top < box.y && rowBox.bottom > box.y;
  var isStartRow = rowBox.top < start.y && rowBox.bottom > start.y;

  // this row's position relative to the start point
  var isAboveStart = start.y > rowBox.bottom;
  var isBelowStart = rowBox.top > start.y;
  var isBetween = box.top < rowBox.top && box.bottom > rowBox.bottom;

  // this row is between the current and start rows, so entirely selected
  if (isBetween) {
    startIdx = 0;
    endIdx = lastSlotIdx;
  }
  if (isCurrentRow) {
    if (isBelowStart) {
      startIdx = 0;
      endIdx = currentSlot;
    } else if (isAboveStart) {
      startIdx = currentSlot;
      endIdx = lastSlotIdx;
    }
  }
  if (isStartRow) {
    // select the cell under the initial point
    startIdx = endIdx = rtl ? lastSlotIdx - Math.floor((start.x - rowBox.left) / cellWidth) : Math.floor((start.x - rowBox.left) / cellWidth);
    if (isCurrentRow) {
      if (currentSlot < startIdx) startIdx = currentSlot;else endIdx = currentSlot; //select current range
    } else if (start.y < box.y) {
      // the current row is below start row
      // select cells to the right of the start cell
      endIdx = lastSlotIdx;
    } else {
      // select cells to the left of the start cell
      startIdx = 0;
    }
  }
  return {
    startIdx: startIdx,
    endIdx: endIdx
  };
}

/**
 * Changes to react-overlays cause issue with auto positioning,
 * so we need to manually calculate the position of the popper,
 * and constrain it to the Month container.
 */
function getPosition(_ref) {
  var target = _ref.target,
    offset = _ref.offset,
    container = _ref.container,
    box = _ref.box;
  var _getOffset = offset_offset(target),
    top = _getOffset.top,
    left = _getOffset.left,
    width = _getOffset.width,
    height = _getOffset.height;
  var _getOffset2 = offset_offset(container),
    cTop = _getOffset2.top,
    cLeft = _getOffset2.left,
    cWidth = _getOffset2.width,
    cHeight = _getOffset2.height;
  var _getOffset3 = offset_offset(box),
    bWidth = _getOffset3.width,
    bHeight = _getOffset3.height;
  var viewBottom = cTop + cHeight;
  var viewRight = cLeft + cWidth;
  var bottom = top + bHeight;
  var right = left + bWidth;
  var x = offset.x,
    y = offset.y;
  var topOffset = bottom > viewBottom ? top - bHeight - y : top + y + height;
  var leftOffset = right > viewRight ? left + x - bWidth + width : left + x;
  return {
    topOffset: topOffset,
    leftOffset: leftOffset
  };
}
function Pop(_ref2) {
  var containerRef = _ref2.containerRef,
    accessors = _ref2.accessors,
    getters = _ref2.getters,
    selected = _ref2.selected,
    components = _ref2.components,
    localizer = _ref2.localizer,
    position = _ref2.position,
    show = _ref2.show,
    events = _ref2.events,
    slotStart = _ref2.slotStart,
    slotEnd = _ref2.slotEnd,
    onSelect = _ref2.onSelect,
    onDoubleClick = _ref2.onDoubleClick,
    onKeyPress = _ref2.onKeyPress,
    handleDragStart = _ref2.handleDragStart,
    popperRef = _ref2.popperRef,
    target = _ref2.target,
    offset = _ref2.offset;
  useClickOutside({
    ref: popperRef,
    callback: show
  });
  (0,react.useLayoutEffect)(function () {
    var _getPosition = getPosition({
        target: target,
        offset: offset,
        container: containerRef.current,
        box: popperRef.current
      }),
      topOffset = _getPosition.topOffset,
      leftOffset = _getPosition.leftOffset;
    popperRef.current.style.top = "".concat(topOffset, "px");
    popperRef.current.style.left = "".concat(leftOffset, "px");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset.x, offset.y, target]);
  var width = position.width;
  var style = {
    minWidth: width + width / 2
  };
  return /*#__PURE__*/react.createElement("div", {
    style: style,
    className: "rbc-overlay",
    ref: popperRef
  }, /*#__PURE__*/react.createElement("div", {
    className: "rbc-overlay-header"
  }, localizer.format(slotStart, 'dayHeaderFormat')), events.map(function (event, idx) {
    return /*#__PURE__*/react.createElement(EventCell, {
      key: idx,
      type: "popup",
      localizer: localizer,
      event: event,
      getters: getters,
      onSelect: onSelect,
      accessors: accessors,
      components: components,
      onDoubleClick: onDoubleClick,
      onKeyPress: onKeyPress,
      continuesPrior: localizer.lt(accessors.end(event), slotStart, 'day'),
      continuesAfter: localizer.gte(accessors.start(event), slotEnd, 'day'),
      slotStart: slotStart,
      slotEnd: slotEnd,
      selected: isSelected(event, selected),
      draggable: true,
      onDragStart: function onDragStart() {
        return handleDragStart(event);
      },
      onDragEnd: function onDragEnd() {
        return show();
      }
    });
  }));
}
var Popup = /*#__PURE__*/react.forwardRef(function (props, ref) {
  return /*#__PURE__*/react.createElement(Pop, Object.assign({}, props, {
    popperRef: ref
  }));
});
Popup.propTypes = {
  accessors: (prop_types_default()).object.isRequired,
  getters: (prop_types_default()).object.isRequired,
  selected: (prop_types_default()).object,
  components: (prop_types_default()).object.isRequired,
  localizer: (prop_types_default()).object.isRequired,
  position: (prop_types_default()).object.isRequired,
  show: (prop_types_default()).func.isRequired,
  events: (prop_types_default()).array.isRequired,
  slotStart: prop_types_default().instanceOf(Date).isRequired,
  slotEnd: prop_types_default().instanceOf(Date),
  onSelect: (prop_types_default()).func,
  onDoubleClick: (prop_types_default()).func,
  onKeyPress: (prop_types_default()).func,
  handleDragStart: (prop_types_default()).func,
  style: (prop_types_default()).object,
  offset: prop_types_default().shape({
    x: (prop_types_default()).number,
    y: (prop_types_default()).number
  })
};
function CalOverlay(_ref) {
  var containerRef = _ref.containerRef,
    _ref$popupOffset = _ref.popupOffset,
    popupOffset = _ref$popupOffset === void 0 ? 5 : _ref$popupOffset,
    overlay = _ref.overlay,
    accessors = _ref.accessors,
    localizer = _ref.localizer,
    components = _ref.components,
    getters = _ref.getters,
    selected = _ref.selected,
    handleSelectEvent = _ref.handleSelectEvent,
    handleDoubleClickEvent = _ref.handleDoubleClickEvent,
    handleKeyPressEvent = _ref.handleKeyPressEvent,
    handleDragStart = _ref.handleDragStart,
    onHide = _ref.onHide,
    overlayDisplay = _ref.overlayDisplay;
  var popperRef = (0,react.useRef)(null);
  if (!overlay.position) return null;
  var offset = popupOffset;
  if (!isNaN(popupOffset)) {
    offset = {
      x: popupOffset,
      y: popupOffset
    };
  }
  var position = overlay.position,
    events = overlay.events,
    date = overlay.date,
    end = overlay.end;
  return /*#__PURE__*/react.createElement(esm_Overlay, {
    rootClose: true,
    flip: true,
    show: true,
    placement: "bottom",
    onHide: onHide,
    target: overlay.target
  }, function (_ref2) {
    var props = _ref2.props;
    return /*#__PURE__*/react.createElement(Popup, Object.assign({}, props, {
      containerRef: containerRef,
      ref: popperRef,
      target: overlay.target,
      offset: offset,
      accessors: accessors,
      getters: getters,
      selected: selected,
      components: components,
      localizer: localizer,
      position: position,
      show: overlayDisplay,
      events: events,
      slotStart: date,
      slotEnd: end,
      onSelect: handleSelectEvent,
      onDoubleClick: handleDoubleClickEvent,
      onKeyPress: handleKeyPressEvent,
      handleDragStart: handleDragStart
    }));
  });
}
var PopOverlay = /*#__PURE__*/react.forwardRef(function (props, ref) {
  return /*#__PURE__*/react.createElement(CalOverlay, Object.assign({}, props, {
    containerRef: ref
  }));
});
PopOverlay.propTypes = {
  popupOffset: prop_types_default().oneOfType([(prop_types_default()).number, prop_types_default().shape({
    x: (prop_types_default()).number,
    y: (prop_types_default()).number
  })]),
  overlay: prop_types_default().shape({
    position: (prop_types_default()).object,
    events: (prop_types_default()).array,
    date: prop_types_default().instanceOf(Date),
    end: prop_types_default().instanceOf(Date)
  }),
  accessors: (prop_types_default()).object.isRequired,
  localizer: (prop_types_default()).object.isRequired,
  components: (prop_types_default()).object.isRequired,
  getters: (prop_types_default()).object.isRequired,
  selected: (prop_types_default()).object,
  handleSelectEvent: (prop_types_default()).func,
  handleDoubleClickEvent: (prop_types_default()).func,
  handleKeyPressEvent: (prop_types_default()).func,
  handleDragStart: (prop_types_default()).func,
  onHide: (prop_types_default()).func,
  overlayDisplay: (prop_types_default()).func
};
function react_big_calendar_esm_addEventListener(type, handler) {
  var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;
  return esm_listen(target, type, handler, {
    passive: false
  });
}
function isOverContainer(container, x, y) {
  return !container || contains(container, document.elementFromPoint(x, y));
}
function getEventNodeFromPoint(node, _ref) {
  var clientX = _ref.clientX,
    clientY = _ref.clientY;
  var target = document.elementFromPoint(clientX, clientY);
  return closest(target, '.rbc-event', node);
}
function getShowMoreNodeFromPoint(node, _ref2) {
  var clientX = _ref2.clientX,
    clientY = _ref2.clientY;
  var target = document.elementFromPoint(clientX, clientY);
  return closest(target, '.rbc-show-more', node);
}
function isEvent(node, bounds) {
  return !!getEventNodeFromPoint(node, bounds);
}
function isShowMore(node, bounds) {
  return !!getShowMoreNodeFromPoint(node, bounds);
}
function getEventCoordinates(e) {
  var target = e;
  if (e.touches && e.touches.length) {
    target = e.touches[0];
  }
  return {
    clientX: target.clientX,
    clientY: target.clientY,
    pageX: target.pageX,
    pageY: target.pageY
  };
}
var clickTolerance = 5;
var clickInterval = 250;
var Selection = /*#__PURE__*/function () {
  function Selection(node) {
    var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref3$global = _ref3.global,
      global = _ref3$global === void 0 ? false : _ref3$global,
      _ref3$longPressThresh = _ref3.longPressThreshold,
      longPressThreshold = _ref3$longPressThresh === void 0 ? 250 : _ref3$longPressThresh,
      _ref3$validContainers = _ref3.validContainers,
      validContainers = _ref3$validContainers === void 0 ? [] : _ref3$validContainers;
    (0,classCallCheck/* default */.A)(this, Selection);
    this.isDetached = false;
    this.container = node;
    this.globalMouse = !node || global;
    this.longPressThreshold = longPressThreshold;
    this.validContainers = validContainers;
    this._listeners = Object.create(null);
    this._handleInitialEvent = this._handleInitialEvent.bind(this);
    this._handleMoveEvent = this._handleMoveEvent.bind(this);
    this._handleTerminatingEvent = this._handleTerminatingEvent.bind(this);
    this._keyListener = this._keyListener.bind(this);
    this._dropFromOutsideListener = this._dropFromOutsideListener.bind(this);
    this._dragOverFromOutsideListener = this._dragOverFromOutsideListener.bind(this);

    // Fixes an iOS 10 bug where scrolling could not be prevented on the window.
    // https://github.com/metafizzy/flickity/issues/457#issuecomment-254501356
    this._removeTouchMoveWindowListener = react_big_calendar_esm_addEventListener('touchmove', function () {}, window);
    this._removeKeyDownListener = react_big_calendar_esm_addEventListener('keydown', this._keyListener);
    this._removeKeyUpListener = react_big_calendar_esm_addEventListener('keyup', this._keyListener);
    this._removeDropFromOutsideListener = react_big_calendar_esm_addEventListener('drop', this._dropFromOutsideListener);
    this._removeDragOverFromOutsideListener = react_big_calendar_esm_addEventListener('dragover', this._dragOverFromOutsideListener);
    this._addInitialEventListener();
  }
  (0,createClass/* default */.A)(Selection, [{
    key: "on",
    value: function on(type, handler) {
      var handlers = this._listeners[type] || (this._listeners[type] = []);
      handlers.push(handler);
      return {
        remove: function remove() {
          var idx = handlers.indexOf(handler);
          if (idx !== -1) handlers.splice(idx, 1);
        }
      };
    }
  }, {
    key: "emit",
    value: function emit(type) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      var result;
      var handlers = this._listeners[type] || [];
      handlers.forEach(function (fn) {
        if (result === undefined) result = fn.apply(void 0, args);
      });
      return result;
    }
  }, {
    key: "teardown",
    value: function teardown() {
      this.isDetached = true;
      this._listeners = Object.create(null);
      this._removeTouchMoveWindowListener && this._removeTouchMoveWindowListener();
      this._removeInitialEventListener && this._removeInitialEventListener();
      this._removeEndListener && this._removeEndListener();
      this._onEscListener && this._onEscListener();
      this._removeMoveListener && this._removeMoveListener();
      this._removeKeyUpListener && this._removeKeyUpListener();
      this._removeKeyDownListener && this._removeKeyDownListener();
      this._removeDropFromOutsideListener && this._removeDropFromOutsideListener();
      this._removeDragOverFromOutsideListener && this._removeDragOverFromOutsideListener();
    }
  }, {
    key: "isSelected",
    value: function isSelected(node) {
      var box = this._selectRect;
      if (!box || !this.selecting) return false;
      return objectsCollide(box, getBoundsForNode(node));
    }
  }, {
    key: "filter",
    value: function filter(items) {
      var box = this._selectRect;

      //not selecting
      if (!box || !this.selecting) return [];
      return items.filter(this.isSelected, this);
    }

    // Adds a listener that will call the handler only after the user has pressed on the screen
    // without moving their finger for 250ms.
  }, {
    key: "_addLongPressListener",
    value: function _addLongPressListener(handler, initialEvent) {
      var _this = this;
      var timer = null;
      var removeTouchMoveListener = null;
      var removeTouchEndListener = null;
      var handleTouchStart = function handleTouchStart(initialEvent) {
        timer = setTimeout(function () {
          cleanup();
          handler(initialEvent);
        }, _this.longPressThreshold);
        removeTouchMoveListener = react_big_calendar_esm_addEventListener('touchmove', function () {
          return cleanup();
        });
        removeTouchEndListener = react_big_calendar_esm_addEventListener('touchend', function () {
          return cleanup();
        });
      };
      var removeTouchStartListener = react_big_calendar_esm_addEventListener('touchstart', handleTouchStart);
      var cleanup = function cleanup() {
        if (timer) {
          clearTimeout(timer);
        }
        if (removeTouchMoveListener) {
          removeTouchMoveListener();
        }
        if (removeTouchEndListener) {
          removeTouchEndListener();
        }
        timer = null;
        removeTouchMoveListener = null;
        removeTouchEndListener = null;
      };
      if (initialEvent) {
        handleTouchStart(initialEvent);
      }
      return function () {
        cleanup();
        removeTouchStartListener();
      };
    }

    // Listen for mousedown and touchstart events. When one is received, disable the other and setup
    // future event handling based on the type of event.
  }, {
    key: "_addInitialEventListener",
    value: function _addInitialEventListener() {
      var _this2 = this;
      var removeMouseDownListener = react_big_calendar_esm_addEventListener('mousedown', function (e) {
        _this2._removeInitialEventListener();
        _this2._handleInitialEvent(e);
        _this2._removeInitialEventListener = react_big_calendar_esm_addEventListener('mousedown', _this2._handleInitialEvent);
      });
      var removeTouchStartListener = react_big_calendar_esm_addEventListener('touchstart', function (e) {
        _this2._removeInitialEventListener();
        _this2._removeInitialEventListener = _this2._addLongPressListener(_this2._handleInitialEvent, e);
      });
      this._removeInitialEventListener = function () {
        removeMouseDownListener();
        removeTouchStartListener();
      };
    }
  }, {
    key: "_dropFromOutsideListener",
    value: function _dropFromOutsideListener(e) {
      var _getEventCoordinates = getEventCoordinates(e),
        pageX = _getEventCoordinates.pageX,
        pageY = _getEventCoordinates.pageY,
        clientX = _getEventCoordinates.clientX,
        clientY = _getEventCoordinates.clientY;
      this.emit('dropFromOutside', {
        x: pageX,
        y: pageY,
        clientX: clientX,
        clientY: clientY
      });
      e.preventDefault();
    }
  }, {
    key: "_dragOverFromOutsideListener",
    value: function _dragOverFromOutsideListener(e) {
      var _getEventCoordinates2 = getEventCoordinates(e),
        pageX = _getEventCoordinates2.pageX,
        pageY = _getEventCoordinates2.pageY,
        clientX = _getEventCoordinates2.clientX,
        clientY = _getEventCoordinates2.clientY;
      this.emit('dragOverFromOutside', {
        x: pageX,
        y: pageY,
        clientX: clientX,
        clientY: clientY
      });
      e.preventDefault();
    }
  }, {
    key: "_handleInitialEvent",
    value: function _handleInitialEvent(e) {
      if (this.isDetached) {
        return;
      }
      var _getEventCoordinates3 = getEventCoordinates(e),
        clientX = _getEventCoordinates3.clientX,
        clientY = _getEventCoordinates3.clientY,
        pageX = _getEventCoordinates3.pageX,
        pageY = _getEventCoordinates3.pageY;
      var node = this.container(),
        collides,
        offsetData;

      // Right clicks
      if (e.which === 3 || e.button === 2 || !isOverContainer(node, clientX, clientY)) return;
      if (!this.globalMouse && node && !contains(node, e.target)) {
        var _normalizeDistance = normalizeDistance(0),
          top = _normalizeDistance.top,
          left = _normalizeDistance.left,
          bottom = _normalizeDistance.bottom,
          right = _normalizeDistance.right;
        offsetData = getBoundsForNode(node);
        collides = objectsCollide({
          top: offsetData.top - top,
          left: offsetData.left - left,
          bottom: offsetData.bottom + bottom,
          right: offsetData.right + right
        }, {
          top: pageY,
          left: pageX
        });
        if (!collides) return;
      }
      var result = this.emit('beforeSelect', this._initialEventData = {
        isTouch: /^touch/.test(e.type),
        x: pageX,
        y: pageY,
        clientX: clientX,
        clientY: clientY
      });
      if (result === false) return;
      switch (e.type) {
        case 'mousedown':
          this._removeEndListener = react_big_calendar_esm_addEventListener('mouseup', this._handleTerminatingEvent);
          this._onEscListener = react_big_calendar_esm_addEventListener('keydown', this._handleTerminatingEvent);
          this._removeMoveListener = react_big_calendar_esm_addEventListener('mousemove', this._handleMoveEvent);
          break;
        case 'touchstart':
          this._handleMoveEvent(e);
          this._removeEndListener = react_big_calendar_esm_addEventListener('touchend', this._handleTerminatingEvent);
          this._removeMoveListener = react_big_calendar_esm_addEventListener('touchmove', this._handleMoveEvent);
          break;
      }
    }

    // Check whether provided event target element
    // - is contained within a valid container
  }, {
    key: "_isWithinValidContainer",
    value: function _isWithinValidContainer(e) {
      var eventTarget = e.target;
      var containers = this.validContainers;
      if (!containers || !containers.length || !eventTarget) {
        return true;
      }
      return containers.some(function (target) {
        return !!eventTarget.closest(target);
      });
    }
  }, {
    key: "_handleTerminatingEvent",
    value: function _handleTerminatingEvent(e) {
      var _getEventCoordinates4 = getEventCoordinates(e),
        pageX = _getEventCoordinates4.pageX,
        pageY = _getEventCoordinates4.pageY;
      this.selecting = false;
      this._removeEndListener && this._removeEndListener();
      this._removeMoveListener && this._removeMoveListener();
      if (!this._initialEventData) return;
      var inRoot = !this.container || contains(this.container(), e.target);
      var isWithinValidContainer = this._isWithinValidContainer(e);
      var bounds = this._selectRect;
      var click = this.isClick(pageX, pageY);
      this._initialEventData = null;
      if (e.key === 'Escape' || !isWithinValidContainer) {
        return this.emit('reset');
      }
      if (click && inRoot) {
        return this._handleClickEvent(e);
      }

      // User drag-clicked in the Selectable area
      if (!click) return this.emit('select', bounds);
      return this.emit('reset');
    }
  }, {
    key: "_handleClickEvent",
    value: function _handleClickEvent(e) {
      var _getEventCoordinates5 = getEventCoordinates(e),
        pageX = _getEventCoordinates5.pageX,
        pageY = _getEventCoordinates5.pageY,
        clientX = _getEventCoordinates5.clientX,
        clientY = _getEventCoordinates5.clientY;
      var now = new Date().getTime();
      if (this._lastClickData && now - this._lastClickData.timestamp < clickInterval) {
        // Double click event
        this._lastClickData = null;
        return this.emit('doubleClick', {
          x: pageX,
          y: pageY,
          clientX: clientX,
          clientY: clientY
        });
      }

      // Click event
      this._lastClickData = {
        timestamp: now
      };
      return this.emit('click', {
        x: pageX,
        y: pageY,
        clientX: clientX,
        clientY: clientY
      });
    }
  }, {
    key: "_handleMoveEvent",
    value: function _handleMoveEvent(e) {
      if (this._initialEventData === null || this.isDetached) {
        return;
      }
      var _this$_initialEventDa = this._initialEventData,
        x = _this$_initialEventDa.x,
        y = _this$_initialEventDa.y;
      var _getEventCoordinates6 = getEventCoordinates(e),
        pageX = _getEventCoordinates6.pageX,
        pageY = _getEventCoordinates6.pageY;
      var w = Math.abs(x - pageX);
      var h = Math.abs(y - pageY);
      var left = Math.min(pageX, x),
        top = Math.min(pageY, y),
        old = this.selecting;

      // Prevent emitting selectStart event until mouse is moved.
      // in Chrome on Windows, mouseMove event may be fired just after mouseDown event.
      if (this.isClick(pageX, pageY) && !old && !(w || h)) {
        return;
      }
      this.selecting = true;
      this._selectRect = {
        top: top,
        left: left,
        x: pageX,
        y: pageY,
        right: left + w,
        bottom: top + h
      };
      if (!old) {
        this.emit('selectStart', this._initialEventData);
      }
      if (!this.isClick(pageX, pageY)) this.emit('selecting', this._selectRect);
      e.preventDefault();
    }
  }, {
    key: "_keyListener",
    value: function _keyListener(e) {
      this.ctrl = e.metaKey || e.ctrlKey;
    }
  }, {
    key: "isClick",
    value: function isClick(pageX, pageY) {
      var _this$_initialEventDa2 = this._initialEventData,
        x = _this$_initialEventDa2.x,
        y = _this$_initialEventDa2.y,
        isTouch = _this$_initialEventDa2.isTouch;
      return !isTouch && Math.abs(pageX - x) <= clickTolerance && Math.abs(pageY - y) <= clickTolerance;
    }
  }]);
  return Selection;
}();
/**
 * Resolve the disance prop from either an Int or an Object
 * @return {Object}
 */
function normalizeDistance() {
  var distance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  if ((0,esm_typeof/* default */.A)(distance) !== 'object') distance = {
    top: distance,
    left: distance,
    right: distance,
    bottom: distance
  };
  return distance;
}

/**
 * Given two objects containing "top", "left", "offsetWidth" and "offsetHeight"
 * properties, determine if they collide.
 * @param  {Object|HTMLElement} a
 * @param  {Object|HTMLElement} b
 * @return {bool}
 */
function objectsCollide(nodeA, nodeB) {
  var tolerance = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var _getBoundsForNode = getBoundsForNode(nodeA),
    aTop = _getBoundsForNode.top,
    aLeft = _getBoundsForNode.left,
    _getBoundsForNode$rig = _getBoundsForNode.right,
    aRight = _getBoundsForNode$rig === void 0 ? aLeft : _getBoundsForNode$rig,
    _getBoundsForNode$bot = _getBoundsForNode.bottom,
    aBottom = _getBoundsForNode$bot === void 0 ? aTop : _getBoundsForNode$bot;
  var _getBoundsForNode2 = getBoundsForNode(nodeB),
    bTop = _getBoundsForNode2.top,
    bLeft = _getBoundsForNode2.left,
    _getBoundsForNode2$ri = _getBoundsForNode2.right,
    bRight = _getBoundsForNode2$ri === void 0 ? bLeft : _getBoundsForNode2$ri,
    _getBoundsForNode2$bo = _getBoundsForNode2.bottom,
    bBottom = _getBoundsForNode2$bo === void 0 ? bTop : _getBoundsForNode2$bo;
  return !(
  // 'a' bottom doesn't touch 'b' top

  aBottom - tolerance < bTop ||
  // 'a' top doesn't touch 'b' bottom
  aTop + tolerance > bBottom ||
  // 'a' right doesn't touch 'b' left
  aRight - tolerance < bLeft ||
  // 'a' left doesn't touch 'b' right
  aLeft + tolerance > bRight);
}

/**
 * Given a node, get everything needed to calculate its boundaries
 * @param  {HTMLElement} node
 * @return {Object}
 */
function getBoundsForNode(node) {
  if (!node.getBoundingClientRect) return node;
  var rect = node.getBoundingClientRect(),
    left = rect.left + pageOffset('left'),
    top = rect.top + pageOffset('top');
  return {
    top: top,
    left: left,
    right: (node.offsetWidth || 0) + left,
    bottom: (node.offsetHeight || 0) + top
  };
}
function pageOffset(dir) {
  if (dir === 'left') return window.pageXOffset || document.body.scrollLeft || 0;
  if (dir === 'top') return window.pageYOffset || document.body.scrollTop || 0;
}
var BackgroundCells = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.A)(BackgroundCells, _React$Component);
  var _super = (0,createSuper/* default */.A)(BackgroundCells);
  function BackgroundCells(props, context) {
    var _this;
    (0,classCallCheck/* default */.A)(this, BackgroundCells);
    _this = _super.call(this, props, context);
    _this.state = {
      selecting: false
    };
    _this.containerRef = /*#__PURE__*/(0,react.createRef)();
    return _this;
  }
  (0,createClass/* default */.A)(BackgroundCells, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.selectable && this._selectable();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._teardownSelectable();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.selectable && this.props.selectable) this._selectable();
      if (prevProps.selectable && !this.props.selectable) this._teardownSelectable();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        range = _this$props.range,
        getNow = _this$props.getNow,
        getters = _this$props.getters,
        currentDate = _this$props.date,
        Wrapper = _this$props.components.dateCellWrapper,
        localizer = _this$props.localizer;
      var _this$state = this.state,
        selecting = _this$state.selecting,
        startIdx = _this$state.startIdx,
        endIdx = _this$state.endIdx;
      var current = getNow();
      return /*#__PURE__*/react.createElement("div", {
        className: "rbc-row-bg",
        ref: this.containerRef
      }, range.map(function (date, index) {
        var selected = selecting && index >= startIdx && index <= endIdx;
        var _getters$dayProp = getters.dayProp(date),
          className = _getters$dayProp.className,
          style = _getters$dayProp.style;
        return /*#__PURE__*/react.createElement(Wrapper, {
          key: index,
          value: date,
          range: range
        }, /*#__PURE__*/react.createElement("div", {
          style: style,
          className: clsx_m('rbc-day-bg', className, selected && 'rbc-selected-cell', localizer.isSameDate(date, current) && 'rbc-today', currentDate && localizer.neq(currentDate, date, 'month') && 'rbc-off-range-bg')
        }));
      }));
    }
  }, {
    key: "_selectable",
    value: function _selectable() {
      var _this2 = this;
      var node = this.containerRef.current;
      var selector = this._selector = new Selection(this.props.container, {
        longPressThreshold: this.props.longPressThreshold
      });
      var selectorClicksHandler = function selectorClicksHandler(point, actionType) {
        if (!isEvent(node, point) && !isShowMore(node, point)) {
          var rowBox = getBoundsForNode(node);
          var _this2$props = _this2.props,
            range = _this2$props.range,
            rtl = _this2$props.rtl;
          if (pointInBox(rowBox, point)) {
            var currentCell = getSlotAtX(rowBox, point.x, rtl, range.length);
            _this2._selectSlot({
              startIdx: currentCell,
              endIdx: currentCell,
              action: actionType,
              box: point
            });
          }
        }
        _this2._initial = {};
        _this2.setState({
          selecting: false
        });
      };
      selector.on('selecting', function (box) {
        var _this2$props2 = _this2.props,
          range = _this2$props2.range,
          rtl = _this2$props2.rtl;
        var startIdx = -1;
        var endIdx = -1;
        if (!_this2.state.selecting) {
          notify(_this2.props.onSelectStart, [box]);
          _this2._initial = {
            x: box.x,
            y: box.y
          };
        }
        if (selector.isSelected(node)) {
          var nodeBox = getBoundsForNode(node);
          var _dateCellSelection = dateCellSelection(_this2._initial, nodeBox, box, range.length, rtl);
          startIdx = _dateCellSelection.startIdx;
          endIdx = _dateCellSelection.endIdx;
        }
        _this2.setState({
          selecting: true,
          startIdx: startIdx,
          endIdx: endIdx
        });
      });
      selector.on('beforeSelect', function (box) {
        if (_this2.props.selectable !== 'ignoreEvents') return;
        return !isEvent(_this2.containerRef.current, box);
      });
      selector.on('click', function (point) {
        return selectorClicksHandler(point, 'click');
      });
      selector.on('doubleClick', function (point) {
        return selectorClicksHandler(point, 'doubleClick');
      });
      selector.on('select', function (bounds) {
        _this2._selectSlot((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, _this2.state), {}, {
          action: 'select',
          bounds: bounds
        }));
        _this2._initial = {};
        _this2.setState({
          selecting: false
        });
        notify(_this2.props.onSelectEnd, [_this2.state]);
      });
    }
  }, {
    key: "_teardownSelectable",
    value: function _teardownSelectable() {
      if (!this._selector) return;
      this._selector.teardown();
      this._selector = null;
    }
  }, {
    key: "_selectSlot",
    value: function _selectSlot(_ref) {
      var endIdx = _ref.endIdx,
        startIdx = _ref.startIdx,
        action = _ref.action,
        bounds = _ref.bounds,
        box = _ref.box;
      if (endIdx !== -1 && startIdx !== -1) this.props.onSelectSlot && this.props.onSelectSlot({
        start: startIdx,
        end: endIdx,
        action: action,
        bounds: bounds,
        box: box,
        resourceId: this.props.resourceId
      });
    }
  }]);
  return BackgroundCells;
}(react.Component);

/* eslint-disable react/prop-types */
var EventRowMixin = {
  propTypes: {
    slotMetrics: (prop_types_default()).object.isRequired,
    selected: (prop_types_default()).object,
    isAllDay: (prop_types_default()).bool,
    accessors: (prop_types_default()).object.isRequired,
    localizer: (prop_types_default()).object.isRequired,
    components: (prop_types_default()).object.isRequired,
    getters: (prop_types_default()).object.isRequired,
    onSelect: (prop_types_default()).func,
    onDoubleClick: (prop_types_default()).func,
    onKeyPress: (prop_types_default()).func
  },
  defaultProps: {
    segments: [],
    selected: {}
  },
  renderEvent: function renderEvent(props, event) {
    var selected = props.selected;
    props.isAllDay;
    var accessors = props.accessors,
      getters = props.getters,
      onSelect = props.onSelect,
      onDoubleClick = props.onDoubleClick,
      onKeyPress = props.onKeyPress,
      localizer = props.localizer,
      slotMetrics = props.slotMetrics,
      components = props.components,
      resizable = props.resizable;
    var continuesPrior = slotMetrics.continuesPrior(event);
    var continuesAfter = slotMetrics.continuesAfter(event);
    return /*#__PURE__*/react.createElement(EventCell, {
      event: event,
      getters: getters,
      localizer: localizer,
      accessors: accessors,
      components: components,
      onSelect: onSelect,
      onDoubleClick: onDoubleClick,
      onKeyPress: onKeyPress,
      continuesPrior: continuesPrior,
      continuesAfter: continuesAfter,
      slotStart: slotMetrics.first,
      slotEnd: slotMetrics.last,
      selected: isSelected(event, selected),
      resizable: resizable
    });
  },
  renderSpan: function renderSpan(slots, len, key) {
    var content = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ' ';
    var per = Math.abs(len) / slots * 100 + '%';
    return /*#__PURE__*/react.createElement("div", {
      key: key,
      className: "rbc-row-segment"
      // IE10/11 need max-width. flex-basis doesn't respect box-sizing
      ,

      style: {
        WebkitFlexBasis: per,
        flexBasis: per,
        maxWidth: per
      }
    }, content);
  }
};
var EventRow = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.A)(EventRow, _React$Component);
  var _super = (0,createSuper/* default */.A)(EventRow);
  function EventRow() {
    (0,classCallCheck/* default */.A)(this, EventRow);
    return _super.apply(this, arguments);
  }
  (0,createClass/* default */.A)(EventRow, [{
    key: "render",
    value: function render() {
      var _this = this;
      var _this$props = this.props,
        segments = _this$props.segments,
        slots = _this$props.slotMetrics.slots,
        className = _this$props.className;
      var lastEnd = 1;
      return /*#__PURE__*/react.createElement("div", {
        className: clsx_m(className, 'rbc-row')
      }, segments.reduce(function (row, _ref, li) {
        var event = _ref.event,
          left = _ref.left,
          right = _ref.right,
          span = _ref.span;
        var key = '_lvl_' + li;
        var gap = left - lastEnd;
        var content = EventRowMixin.renderEvent(_this.props, event);
        if (gap) row.push(EventRowMixin.renderSpan(slots, gap, "".concat(key, "_gap")));
        row.push(EventRowMixin.renderSpan(slots, span, key, content));
        lastEnd = right + 1;
        return row;
      }, []));
    }
  }]);
  return EventRow;
}(react.Component);
EventRow.defaultProps = (0,objectSpread2/* default */.A)({}, EventRowMixin.defaultProps);
function endOfRange(_ref) {
  var dateRange = _ref.dateRange,
    _ref$unit = _ref.unit,
    unit = _ref$unit === void 0 ? 'day' : _ref$unit,
    localizer = _ref.localizer;
  return {
    first: dateRange[0],
    last: localizer.add(dateRange[dateRange.length - 1], 1, unit)
  };
}

// properly calculating segments requires working with dates in
// the timezone we're working with, so we use the localizer
function eventSegments(event, range, accessors, localizer) {
  var _endOfRange = endOfRange({
      dateRange: range,
      localizer: localizer
    }),
    first = _endOfRange.first,
    last = _endOfRange.last;
  var slots = localizer.diff(first, last, 'day');
  var start = localizer.max(localizer.startOf(accessors.start(event), 'day'), first);
  var end = localizer.min(localizer.ceil(accessors.end(event), 'day'), last);
  var padding = lodash_es_findIndex(range, function (x) {
    return localizer.isSameDate(x, start);
  });
  var span = localizer.diff(start, end, 'day');
  span = Math.min(span, slots);
  // The segmentOffset is necessary when adjusting for timezones
  // ahead of the browser timezone
  span = Math.max(span - localizer.segmentOffset, 1);
  return {
    event: event,
    span: span,
    left: padding + 1,
    right: Math.max(padding + span, 1)
  };
}
function eventLevels(rowSegments) {
  var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;
  var i,
    j,
    seg,
    levels = [],
    extra = [];
  for (i = 0; i < rowSegments.length; i++) {
    seg = rowSegments[i];
    for (j = 0; j < levels.length; j++) if (!segsOverlap(seg, levels[j])) break;
    if (j >= limit) {
      extra.push(seg);
    } else {
      (levels[j] || (levels[j] = [])).push(seg);
    }
  }
  for (i = 0; i < levels.length; i++) {
    levels[i].sort(function (a, b) {
      return a.left - b.left;
    }); //eslint-disable-line
  }

  return {
    levels: levels,
    extra: extra
  };
}
function react_big_calendar_esm_inRange(e, start, end, accessors, localizer) {
  var event = {
    start: accessors.start(e),
    end: accessors.end(e)
  };
  var range = {
    start: start,
    end: end
  };
  return localizer.inEventRange({
    event: event,
    range: range
  });
}
function segsOverlap(seg, otherSegs) {
  return otherSegs.some(function (otherSeg) {
    return otherSeg.left <= seg.right && otherSeg.right >= seg.left;
  });
}
function sortEvents(eventA, eventB, accessors, localizer) {
  var evtA = {
    start: accessors.start(eventA),
    end: accessors.end(eventA),
    allDay: accessors.allDay(eventA)
  };
  var evtB = {
    start: accessors.start(eventB),
    end: accessors.end(eventB),
    allDay: accessors.allDay(eventB)
  };
  return localizer.sortEvents({
    evtA: evtA,
    evtB: evtB
  });
}
var isSegmentInSlot$1 = function isSegmentInSlot(seg, slot) {
  return seg.left <= slot && seg.right >= slot;
};
var eventsInSlot = function eventsInSlot(segments, slot) {
  return segments.filter(function (seg) {
    return isSegmentInSlot$1(seg, slot);
  }).length;
};
var EventEndingRow = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.A)(EventEndingRow, _React$Component);
  var _super = (0,createSuper/* default */.A)(EventEndingRow);
  function EventEndingRow() {
    (0,classCallCheck/* default */.A)(this, EventEndingRow);
    return _super.apply(this, arguments);
  }
  (0,createClass/* default */.A)(EventEndingRow, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        segments = _this$props.segments,
        slots = _this$props.slotMetrics.slots;
      var rowSegments = eventLevels(segments).levels[0];
      var current = 1,
        lastEnd = 1,
        row = [];
      while (current <= slots) {
        var key = '_lvl_' + current;
        var _ref = rowSegments.filter(function (seg) {
            return isSegmentInSlot$1(seg, current);
          })[0] || {},
          event = _ref.event,
          left = _ref.left,
          right = _ref.right,
          span = _ref.span; //eslint-disable-line

        if (!event) {
          current++;
          continue;
        }
        var gap = Math.max(0, left - lastEnd);
        if (this.canRenderSlotEvent(left, span)) {
          var content = EventRowMixin.renderEvent(this.props, event);
          if (gap) {
            row.push(EventRowMixin.renderSpan(slots, gap, key + '_gap'));
          }
          row.push(EventRowMixin.renderSpan(slots, span, key, content));
          lastEnd = current = right + 1;
        } else {
          if (gap) {
            row.push(EventRowMixin.renderSpan(slots, gap, key + '_gap'));
          }
          row.push(EventRowMixin.renderSpan(slots, 1, key, this.renderShowMore(segments, current)));
          lastEnd = current = current + 1;
        }
      }
      return /*#__PURE__*/react.createElement("div", {
        className: "rbc-row"
      }, row);
    }
  }, {
    key: "canRenderSlotEvent",
    value: function canRenderSlotEvent(slot, span) {
      var segments = this.props.segments;
      return lodash_es_range(slot, slot + span).every(function (s) {
        var count = eventsInSlot(segments, s);
        return count === 1;
      });
    }
  }, {
    key: "renderShowMore",
    value: function renderShowMore(segments, slot) {
      var _this = this;
      var localizer = this.props.localizer;
      var count = eventsInSlot(segments, slot);
      return count ? /*#__PURE__*/react.createElement("button", {
        type: "button",
        key: 'sm_' + slot,
        className: clsx_m('rbc-button-link', 'rbc-show-more'),
        onClick: function onClick(e) {
          return _this.showMore(slot, e);
        }
      }, localizer.messages.showMore(count)) : false;
    }
  }, {
    key: "showMore",
    value: function showMore(slot, e) {
      e.preventDefault();
      e.stopPropagation();
      this.props.onShowMore(slot, e.target);
    }
  }]);
  return EventEndingRow;
}(react.Component);
EventEndingRow.defaultProps = (0,objectSpread2/* default */.A)({}, EventRowMixin.defaultProps);
var ScrollableWeekWrapper = function ScrollableWeekWrapper(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react.createElement("div", {
    className: "rbc-row-content-scroll-container"
  }, children);
};
var isSegmentInSlot = function isSegmentInSlot(seg, slot) {
  return seg.left <= slot && seg.right >= slot;
};
var react_big_calendar_esm_isEqual = function isEqual(a, b) {
  return a[0].range === b[0].range && a[0].events === b[0].events;
};
function getSlotMetrics$1() {
  return memoizeOne(function (options) {
    var range = options.range,
      events = options.events,
      maxRows = options.maxRows,
      minRows = options.minRows,
      accessors = options.accessors,
      localizer = options.localizer;
    var _endOfRange = endOfRange({
        dateRange: range,
        localizer: localizer
      }),
      first = _endOfRange.first,
      last = _endOfRange.last;
    var segments = events.map(function (evt) {
      return eventSegments(evt, range, accessors, localizer);
    });
    var _eventLevels = eventLevels(segments, Math.max(maxRows - 1, 1)),
      levels = _eventLevels.levels,
      extra = _eventLevels.extra;
    // Subtract 1 from minRows to not include showMore button row when
    // it would be rendered
    var minEventRows = extra.length > 0 ? minRows - 1 : minRows;
    while (levels.length < minEventRows) levels.push([]);
    return {
      first: first,
      last: last,
      levels: levels,
      extra: extra,
      range: range,
      slots: range.length,
      clone: function clone(args) {
        var metrics = getSlotMetrics$1();
        return metrics((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, options), args));
      },
      getDateForSlot: function getDateForSlot(slotNumber) {
        return range[slotNumber];
      },
      getSlotForDate: function getSlotForDate(date) {
        return range.find(function (r) {
          return localizer.isSameDate(r, date);
        });
      },
      getEventsForSlot: function getEventsForSlot(slot) {
        return segments.filter(function (seg) {
          return isSegmentInSlot(seg, slot);
        }).map(function (seg) {
          return seg.event;
        });
      },
      continuesPrior: function continuesPrior(event) {
        return localizer.continuesPrior(accessors.start(event), first);
      },
      continuesAfter: function continuesAfter(event) {
        var start = accessors.start(event);
        var end = accessors.end(event);
        return localizer.continuesAfter(start, end, last);
      }
    };
  }, react_big_calendar_esm_isEqual);
}
var DateContentRow = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.A)(DateContentRow, _React$Component);
  var _super = (0,createSuper/* default */.A)(DateContentRow);
  function DateContentRow() {
    var _this;
    (0,classCallCheck/* default */.A)(this, DateContentRow);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.handleSelectSlot = function (slot) {
      var _this$props = _this.props,
        range = _this$props.range,
        onSelectSlot = _this$props.onSelectSlot;
      onSelectSlot(range.slice(slot.start, slot.end + 1), slot);
    };
    _this.handleShowMore = function (slot, target) {
      var _this$props2 = _this.props,
        range = _this$props2.range,
        onShowMore = _this$props2.onShowMore;
      var metrics = _this.slotMetrics(_this.props);
      var row = qsa(_this.containerRef.current, '.rbc-row-bg')[0];
      var cell;
      if (row) cell = row.children[slot - 1];
      var events = metrics.getEventsForSlot(slot);
      onShowMore(events, range[slot - 1], cell, slot, target);
    };
    _this.getContainer = function () {
      var container = _this.props.container;
      return container ? container() : _this.containerRef.current;
    };
    _this.renderHeadingCell = function (date, index) {
      var _this$props3 = _this.props,
        renderHeader = _this$props3.renderHeader,
        getNow = _this$props3.getNow,
        localizer = _this$props3.localizer;
      return renderHeader({
        date: date,
        key: "header_".concat(index),
        className: clsx_m('rbc-date-cell', localizer.isSameDate(date, getNow()) && 'rbc-now')
      });
    };
    _this.renderDummy = function () {
      var _this$props4 = _this.props,
        className = _this$props4.className,
        range = _this$props4.range,
        renderHeader = _this$props4.renderHeader,
        showAllEvents = _this$props4.showAllEvents;
      return /*#__PURE__*/react.createElement("div", {
        className: className,
        ref: _this.containerRef
      }, /*#__PURE__*/react.createElement("div", {
        className: clsx_m('rbc-row-content', showAllEvents && 'rbc-row-content-scrollable')
      }, renderHeader && /*#__PURE__*/react.createElement("div", {
        className: "rbc-row",
        ref: _this.headingRowRef
      }, range.map(_this.renderHeadingCell)), /*#__PURE__*/react.createElement("div", {
        className: "rbc-row",
        ref: _this.eventRowRef
      }, /*#__PURE__*/react.createElement("div", {
        className: "rbc-row-segment"
      }, /*#__PURE__*/react.createElement("div", {
        className: "rbc-event"
      }, /*#__PURE__*/react.createElement("div", {
        className: "rbc-event-content"
      }, "\xA0"))))));
    };
    _this.containerRef = /*#__PURE__*/(0,react.createRef)();
    _this.headingRowRef = /*#__PURE__*/(0,react.createRef)();
    _this.eventRowRef = /*#__PURE__*/(0,react.createRef)();
    _this.slotMetrics = getSlotMetrics$1();
    return _this;
  }
  (0,createClass/* default */.A)(DateContentRow, [{
    key: "getRowLimit",
    value: function getRowLimit() {
      var _this$headingRowRef;
      /* Guessing this only gets called on the dummyRow */
      var eventHeight = height(this.eventRowRef.current);
      var headingHeight = (_this$headingRowRef = this.headingRowRef) !== null && _this$headingRowRef !== void 0 && _this$headingRowRef.current ? height(this.headingRowRef.current) : 0;
      var eventSpace = height(this.containerRef.current) - headingHeight;
      return Math.max(Math.floor(eventSpace / eventHeight), 1);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
        date = _this$props5.date,
        rtl = _this$props5.rtl,
        range = _this$props5.range,
        className = _this$props5.className,
        selected = _this$props5.selected,
        selectable = _this$props5.selectable,
        renderForMeasure = _this$props5.renderForMeasure,
        accessors = _this$props5.accessors,
        getters = _this$props5.getters,
        components = _this$props5.components,
        getNow = _this$props5.getNow,
        renderHeader = _this$props5.renderHeader,
        onSelect = _this$props5.onSelect,
        localizer = _this$props5.localizer,
        onSelectStart = _this$props5.onSelectStart,
        onSelectEnd = _this$props5.onSelectEnd,
        onDoubleClick = _this$props5.onDoubleClick,
        onKeyPress = _this$props5.onKeyPress,
        resourceId = _this$props5.resourceId,
        longPressThreshold = _this$props5.longPressThreshold,
        isAllDay = _this$props5.isAllDay,
        resizable = _this$props5.resizable,
        showAllEvents = _this$props5.showAllEvents;
      if (renderForMeasure) return this.renderDummy();
      var metrics = this.slotMetrics(this.props);
      var levels = metrics.levels,
        extra = metrics.extra;
      var ScrollableWeekComponent = showAllEvents ? ScrollableWeekWrapper : NoopWrapper;
      var WeekWrapper = components.weekWrapper;
      var eventRowProps = {
        selected: selected,
        accessors: accessors,
        getters: getters,
        localizer: localizer,
        components: components,
        onSelect: onSelect,
        onDoubleClick: onDoubleClick,
        onKeyPress: onKeyPress,
        resourceId: resourceId,
        slotMetrics: metrics,
        resizable: resizable
      };
      return /*#__PURE__*/react.createElement("div", {
        className: className,
        role: "rowgroup",
        ref: this.containerRef
      }, /*#__PURE__*/react.createElement(BackgroundCells, {
        localizer: localizer,
        date: date,
        getNow: getNow,
        rtl: rtl,
        range: range,
        selectable: selectable,
        container: this.getContainer,
        getters: getters,
        onSelectStart: onSelectStart,
        onSelectEnd: onSelectEnd,
        onSelectSlot: this.handleSelectSlot,
        components: components,
        longPressThreshold: longPressThreshold,
        resourceId: resourceId
      }), /*#__PURE__*/react.createElement("div", {
        className: clsx_m('rbc-row-content', showAllEvents && 'rbc-row-content-scrollable'),
        role: "row"
      }, renderHeader && /*#__PURE__*/react.createElement("div", {
        className: "rbc-row ",
        ref: this.headingRowRef
      }, range.map(this.renderHeadingCell)), /*#__PURE__*/react.createElement(ScrollableWeekComponent, null, /*#__PURE__*/react.createElement(WeekWrapper, Object.assign({
        isAllDay: isAllDay
      }, eventRowProps, {
        rtl: this.props.rtl
      }), levels.map(function (segs, idx) {
        return /*#__PURE__*/react.createElement(EventRow, Object.assign({
          key: idx,
          segments: segs
        }, eventRowProps));
      }), !!extra.length && /*#__PURE__*/react.createElement(EventEndingRow, Object.assign({
        segments: extra,
        onShowMore: this.handleShowMore
      }, eventRowProps))))));
    }
  }]);
  return DateContentRow;
}(react.Component);
DateContentRow.defaultProps = {
  minRows: 0,
  maxRows: Infinity
};
var Header = function Header(_ref) {
  var label = _ref.label;
  return /*#__PURE__*/react.createElement("span", {
    role: "columnheader",
    "aria-sort": "none"
  }, label);
};
var DateHeader = function DateHeader(_ref) {
  var label = _ref.label,
    drilldownView = _ref.drilldownView,
    onDrillDown = _ref.onDrillDown;
  if (!drilldownView) {
    return /*#__PURE__*/react.createElement("span", null, label);
  }
  return /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "rbc-button-link",
    onClick: onDrillDown,
    role: "cell"
  }, label);
};
var _excluded$6 = ["date", "className"];
var eventsForWeek = function eventsForWeek(evts, start, end, accessors, localizer) {
  return evts.filter(function (e) {
    return react_big_calendar_esm_inRange(e, start, end, accessors, localizer);
  });
};
var MonthView = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.A)(MonthView, _React$Component);
  var _super = (0,createSuper/* default */.A)(MonthView);
  function MonthView() {
    var _this;
    (0,classCallCheck/* default */.A)(this, MonthView);
    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(_args));
    _this.getContainer = function () {
      return _this.containerRef.current;
    };
    _this.renderWeek = function (week, weekIdx) {
      var _this$props = _this.props,
        events = _this$props.events,
        components = _this$props.components,
        selectable = _this$props.selectable,
        getNow = _this$props.getNow,
        selected = _this$props.selected,
        date = _this$props.date,
        localizer = _this$props.localizer,
        longPressThreshold = _this$props.longPressThreshold,
        accessors = _this$props.accessors,
        getters = _this$props.getters,
        showAllEvents = _this$props.showAllEvents;
      var _this$state = _this.state,
        needLimitMeasure = _this$state.needLimitMeasure,
        rowLimit = _this$state.rowLimit;

      // let's not mutate props
      var weeksEvents = eventsForWeek((0,toConsumableArray/* default */.A)(events), week[0], week[week.length - 1], accessors, localizer);
      weeksEvents.sort(function (a, b) {
        return sortEvents(a, b, accessors, localizer);
      });
      return /*#__PURE__*/react.createElement(DateContentRow, {
        key: weekIdx,
        ref: weekIdx === 0 ? _this.slotRowRef : undefined,
        container: _this.getContainer,
        className: "rbc-month-row",
        getNow: getNow,
        date: date,
        range: week,
        events: weeksEvents,
        maxRows: showAllEvents ? Infinity : rowLimit,
        selected: selected,
        selectable: selectable,
        components: components,
        accessors: accessors,
        getters: getters,
        localizer: localizer,
        renderHeader: _this.readerDateHeading,
        renderForMeasure: needLimitMeasure,
        onShowMore: _this.handleShowMore,
        onSelect: _this.handleSelectEvent,
        onDoubleClick: _this.handleDoubleClickEvent,
        onKeyPress: _this.handleKeyPressEvent,
        onSelectSlot: _this.handleSelectSlot,
        longPressThreshold: longPressThreshold,
        rtl: _this.props.rtl,
        resizable: _this.props.resizable,
        showAllEvents: showAllEvents
      });
    };
    _this.readerDateHeading = function (_ref) {
      var date = _ref.date,
        className = _ref.className,
        props = (0,objectWithoutProperties/* default */.A)(_ref, _excluded$6);
      var _this$props2 = _this.props,
        currentDate = _this$props2.date,
        getDrilldownView = _this$props2.getDrilldownView,
        localizer = _this$props2.localizer;
      var isOffRange = localizer.neq(date, currentDate, 'month');
      var isCurrent = localizer.isSameDate(date, currentDate);
      var drilldownView = getDrilldownView(date);
      var label = localizer.format(date, 'dateFormat');
      var DateHeaderComponent = _this.props.components.dateHeader || DateHeader;
      return /*#__PURE__*/react.createElement("div", Object.assign({}, props, {
        className: clsx_m(className, isOffRange && 'rbc-off-range', isCurrent && 'rbc-current'),
        role: "cell"
      }), /*#__PURE__*/react.createElement(DateHeaderComponent, {
        label: label,
        date: date,
        drilldownView: drilldownView,
        isOffRange: isOffRange,
        onDrillDown: function onDrillDown(e) {
          return _this.handleHeadingClick(date, drilldownView, e);
        }
      }));
    };
    _this.handleSelectSlot = function (range, slotInfo) {
      _this._pendingSelection = _this._pendingSelection.concat(range);
      clearTimeout(_this._selectTimer);
      _this._selectTimer = setTimeout(function () {
        return _this.selectDates(slotInfo);
      });
    };
    _this.handleHeadingClick = function (date, view, e) {
      e.preventDefault();
      _this.clearSelection();
      notify(_this.props.onDrillDown, [date, view]);
    };
    _this.handleSelectEvent = function () {
      _this.clearSelection();
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      notify(_this.props.onSelectEvent, args);
    };
    _this.handleDoubleClickEvent = function () {
      _this.clearSelection();
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      notify(_this.props.onDoubleClickEvent, args);
    };
    _this.handleKeyPressEvent = function () {
      _this.clearSelection();
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      notify(_this.props.onKeyPressEvent, args);
    };
    _this.handleShowMore = function (events, date, cell, slot, target) {
      var _this$props3 = _this.props,
        popup = _this$props3.popup,
        onDrillDown = _this$props3.onDrillDown,
        onShowMore = _this$props3.onShowMore,
        getDrilldownView = _this$props3.getDrilldownView,
        doShowMoreDrillDown = _this$props3.doShowMoreDrillDown;
      //cancel any pending selections so only the event click goes through.
      _this.clearSelection();
      if (popup) {
        var position = position_position(cell, _this.containerRef.current);
        _this.setState({
          overlay: {
            date: date,
            events: events,
            position: position,
            target: target
          }
        });
      } else if (doShowMoreDrillDown) {
        notify(onDrillDown, [date, getDrilldownView(date) || views.DAY]);
      }
      notify(onShowMore, [events, date, slot]);
    };
    _this.overlayDisplay = function () {
      _this.setState({
        overlay: null
      });
    };
    _this.state = {
      rowLimit: 5,
      needLimitMeasure: true,
      date: null
    };
    _this.containerRef = /*#__PURE__*/(0,react.createRef)();
    _this.slotRowRef = /*#__PURE__*/(0,react.createRef)();
    _this._bgRows = [];
    _this._pendingSelection = [];
    return _this;
  }
  (0,createClass/* default */.A)(MonthView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      var running;
      if (this.state.needLimitMeasure) this.measureRowLimit(this.props);
      window.addEventListener('resize', this._resizeListener = function () {
        if (!running) {
          request(function () {
            running = false;
            _this2.setState({
              needLimitMeasure: true
            }); //eslint-disable-line
          });
        }
      }, false);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.state.needLimitMeasure) this.measureRowLimit(this.props);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this._resizeListener, false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
        date = _this$props4.date,
        localizer = _this$props4.localizer,
        className = _this$props4.className,
        month = localizer.visibleDays(date, localizer),
        weeks = lodash_es_chunk(month, 7);
      this._weekCount = weeks.length;
      return /*#__PURE__*/react.createElement("div", {
        className: clsx_m('rbc-month-view', className),
        role: "table",
        "aria-label": "Month View",
        ref: this.containerRef
      }, /*#__PURE__*/react.createElement("div", {
        className: "rbc-row rbc-month-header",
        role: "row"
      }, this.renderHeaders(weeks[0])), weeks.map(this.renderWeek), this.props.popup && this.renderOverlay());
    }
  }, {
    key: "renderHeaders",
    value: function renderHeaders(row) {
      var _this$props5 = this.props,
        localizer = _this$props5.localizer,
        components = _this$props5.components;
      var first = row[0];
      var last = row[row.length - 1];
      var HeaderComponent = components.header || Header;
      return localizer.range(first, last, 'day').map(function (day, idx) {
        return /*#__PURE__*/react.createElement("div", {
          key: 'header_' + idx,
          className: "rbc-header"
        }, /*#__PURE__*/react.createElement(HeaderComponent, {
          date: day,
          localizer: localizer,
          label: localizer.format(day, 'weekdayFormat')
        }));
      });
    }
  }, {
    key: "renderOverlay",
    value: function renderOverlay() {
      var _this$state$overlay,
        _this$state2,
        _this3 = this;
      var overlay = (_this$state$overlay = (_this$state2 = this.state) === null || _this$state2 === void 0 ? void 0 : _this$state2.overlay) !== null && _this$state$overlay !== void 0 ? _this$state$overlay : {};
      var _this$props6 = this.props,
        accessors = _this$props6.accessors,
        localizer = _this$props6.localizer,
        components = _this$props6.components,
        getters = _this$props6.getters,
        selected = _this$props6.selected,
        popupOffset = _this$props6.popupOffset,
        handleDragStart = _this$props6.handleDragStart;
      var onHide = function onHide() {
        return _this3.setState({
          overlay: null
        });
      };
      return /*#__PURE__*/react.createElement(PopOverlay, {
        overlay: overlay,
        accessors: accessors,
        localizer: localizer,
        components: components,
        getters: getters,
        selected: selected,
        popupOffset: popupOffset,
        ref: this.containerRef,
        handleKeyPressEvent: this.handleKeyPressEvent,
        handleSelectEvent: this.handleSelectEvent,
        handleDoubleClickEvent: this.handleDoubleClickEvent,
        handleDragStart: handleDragStart,
        show: !!overlay.position,
        overlayDisplay: this.overlayDisplay,
        onHide: onHide
      });

      /* return (
        <Overlay
          rootClose
          placement="bottom"
          show={!!overlay.position}
          onHide={() => this.setState({ overlay: null })}
          target={() => overlay.target}
        >
          {({ props }) => (
            <Popup
              {...props}
              popupOffset={popupOffset}
              accessors={accessors}
              getters={getters}
              selected={selected}
              components={components}
              localizer={localizer}
              position={overlay.position}
              show={this.overlayDisplay}
              events={overlay.events}
              slotStart={overlay.date}
              slotEnd={overlay.end}
              onSelect={this.handleSelectEvent}
              onDoubleClick={this.handleDoubleClickEvent}
              onKeyPress={this.handleKeyPressEvent}
              handleDragStart={this.props.handleDragStart}
            />
          )}
        </Overlay>
      ) */
    }
  }, {
    key: "measureRowLimit",
    value: function measureRowLimit() {
      this.setState({
        needLimitMeasure: false,
        rowLimit: this.slotRowRef.current.getRowLimit()
      });
    }
  }, {
    key: "selectDates",
    value: function selectDates(slotInfo) {
      var slots = this._pendingSelection.slice();
      this._pendingSelection = [];
      slots.sort(function (a, b) {
        return +a - +b;
      });
      var start = new Date(slots[0]);
      var end = new Date(slots[slots.length - 1]);
      end.setDate(slots[slots.length - 1].getDate() + 1);
      notify(this.props.onSelectSlot, {
        slots: slots,
        start: start,
        end: end,
        action: slotInfo.action,
        bounds: slotInfo.bounds,
        box: slotInfo.box
      });
    }
  }, {
    key: "clearSelection",
    value: function clearSelection() {
      clearTimeout(this._selectTimer);
      this._pendingSelection = [];
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref2, state) {
      var date = _ref2.date,
        localizer = _ref2.localizer;
      return {
        date: date,
        needLimitMeasure: localizer.neq(date, state.date, 'month')
      };
    }
  }]);
  return MonthView;
}(react.Component);
MonthView.range = function (date, _ref3) {
  var localizer = _ref3.localizer;
  var start = localizer.firstVisibleDay(date, localizer);
  var end = localizer.lastVisibleDay(date, localizer);
  return {
    start: start,
    end: end
  };
};
MonthView.navigate = function (date, action, _ref4) {
  var localizer = _ref4.localizer;
  switch (action) {
    case react_big_calendar_esm_navigate.PREVIOUS:
      return localizer.add(date, -1, 'month');
    case react_big_calendar_esm_navigate.NEXT:
      return localizer.add(date, 1, 'month');
    default:
      return date;
  }
};
MonthView.title = function (date, _ref5) {
  var localizer = _ref5.localizer;
  return localizer.format(date, 'monthHeaderFormat');
};
var react_big_calendar_esm_getKey = function getKey(_ref) {
  var min = _ref.min,
    max = _ref.max,
    step = _ref.step,
    slots = _ref.slots,
    localizer = _ref.localizer;
  return "".concat(+localizer.startOf(min, 'minutes')) + "".concat(+localizer.startOf(max, 'minutes')) + "".concat(step, "-").concat(slots);
};
function getSlotMetrics(_ref2) {
  var start = _ref2.min,
    end = _ref2.max,
    step = _ref2.step,
    timeslots = _ref2.timeslots,
    localizer = _ref2.localizer;
  var key = react_big_calendar_esm_getKey({
    start: start,
    end: end,
    step: step,
    timeslots: timeslots,
    localizer: localizer
  });

  // DST differences are handled inside the localizer
  var totalMin = 1 + localizer.getTotalMin(start, end);
  var minutesFromMidnight = localizer.getMinutesFromMidnight(start);
  var numGroups = Math.ceil((totalMin - 1) / (step * timeslots));
  var numSlots = numGroups * timeslots;
  var groups = new Array(numGroups);
  var slots = new Array(numSlots);
  // Each slot date is created from "zero", instead of adding `step` to
  // the previous one, in order to avoid DST oddities
  for (var grp = 0; grp < numGroups; grp++) {
    groups[grp] = new Array(timeslots);
    for (var slot = 0; slot < timeslots; slot++) {
      var slotIdx = grp * timeslots + slot;
      var minFromStart = slotIdx * step;
      // A date with total minutes calculated from the start of the day
      slots[slotIdx] = groups[grp][slot] = localizer.getSlotDate(start, minutesFromMidnight, minFromStart);
    }
  }

  // Necessary to be able to select up until the last timeslot in a day
  var lastSlotMinFromStart = slots.length * step;
  slots.push(localizer.getSlotDate(start, minutesFromMidnight, lastSlotMinFromStart));
  function positionFromDate(date) {
    var diff = localizer.diff(start, date, 'minutes') + localizer.getDstOffset(start, date);
    return Math.min(diff, totalMin);
  }
  return {
    groups: groups,
    update: function update(args) {
      if (react_big_calendar_esm_getKey(args) !== key) return getSlotMetrics(args);
      return this;
    },
    dateIsInGroup: function dateIsInGroup(date, groupIndex) {
      var nextGroup = groups[groupIndex + 1];
      return localizer.inRange(date, groups[groupIndex][0], nextGroup ? nextGroup[0] : end, 'minutes');
    },
    nextSlot: function nextSlot(slot) {
      var next = slots[Math.min(slots.indexOf(slot) + 1, slots.length - 1)];
      // in the case of the last slot we won't a long enough range so manually get it
      if (next === slot) next = localizer.add(slot, step, 'minutes');
      return next;
    },
    closestSlotToPosition: function closestSlotToPosition(percent) {
      var slot = Math.min(slots.length - 1, Math.max(0, Math.floor(percent * numSlots)));
      return slots[slot];
    },
    closestSlotFromPoint: function closestSlotFromPoint(point, boundaryRect) {
      var range = Math.abs(boundaryRect.top - boundaryRect.bottom);
      return this.closestSlotToPosition((point.y - boundaryRect.top) / range);
    },
    closestSlotFromDate: function closestSlotFromDate(date) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      if (localizer.lt(date, start, 'minutes')) return slots[0];
      if (localizer.gt(date, end, 'minutes')) return slots[slots.length - 1];
      var diffMins = localizer.diff(start, date, 'minutes');
      return slots[(diffMins - diffMins % step) / step + offset];
    },
    startsBeforeDay: function startsBeforeDay(date) {
      return localizer.lt(date, start, 'day');
    },
    startsAfterDay: function startsAfterDay(date) {
      return localizer.gt(date, end, 'day');
    },
    startsBefore: function startsBefore(date) {
      return localizer.lt(localizer.merge(start, date), start, 'minutes');
    },
    startsAfter: function startsAfter(date) {
      return localizer.gt(localizer.merge(end, date), end, 'minutes');
    },
    getRange: function getRange(rangeStart, rangeEnd, ignoreMin, ignoreMax) {
      if (!ignoreMin) rangeStart = localizer.min(end, localizer.max(start, rangeStart));
      if (!ignoreMax) rangeEnd = localizer.min(end, localizer.max(start, rangeEnd));
      var rangeStartMin = positionFromDate(rangeStart);
      var rangeEndMin = positionFromDate(rangeEnd);
      var top = rangeEndMin > step * numSlots && !localizer.eq(end, rangeEnd) ? (rangeStartMin - step) / (step * numSlots) * 100 : rangeStartMin / (step * numSlots) * 100;
      return {
        top: top,
        height: rangeEndMin / (step * numSlots) * 100 - top,
        start: positionFromDate(rangeStart),
        startDate: rangeStart,
        end: positionFromDate(rangeEnd),
        endDate: rangeEnd
      };
    },
    getCurrentTimePosition: function getCurrentTimePosition(rangeStart) {
      var rangeStartMin = positionFromDate(rangeStart);
      var top = rangeStartMin / (step * numSlots) * 100;
      return top;
    }
  };
}
var Event = /*#__PURE__*/function () {
  function Event(data, _ref) {
    var accessors = _ref.accessors,
      slotMetrics = _ref.slotMetrics;
    (0,classCallCheck/* default */.A)(this, Event);
    var _slotMetrics$getRange = slotMetrics.getRange(accessors.start(data), accessors.end(data)),
      start = _slotMetrics$getRange.start,
      startDate = _slotMetrics$getRange.startDate,
      end = _slotMetrics$getRange.end,
      endDate = _slotMetrics$getRange.endDate,
      top = _slotMetrics$getRange.top,
      height = _slotMetrics$getRange.height;
    this.start = start;
    this.end = end;
    this.startMs = +startDate;
    this.endMs = +endDate;
    this.top = top;
    this.height = height;
    this.data = data;
  }

  /**
   * The event's width without any overlap.
   */
  (0,createClass/* default */.A)(Event, [{
    key: "_width",
    get: function get() {
      // The container event's width is determined by the maximum number of
      // events in any of its rows.
      if (this.rows) {
        var columns = this.rows.reduce(function (max, row) {
          return Math.max(max, row.leaves.length + 1);
        },
        // add itself
        0) + 1; // add the container

        return 100 / columns;
      }

      // The row event's width is the space left by the container, divided
      // among itself and its leaves.
      if (this.leaves) {
        var availableWidth = 100 - this.container._width;
        return availableWidth / (this.leaves.length + 1);
      }

      // The leaf event's width is determined by its row's width
      return this.row._width;
    }

    /**
     * The event's calculated width, possibly with extra width added for
     * overlapping effect.
     */
  }, {
    key: "width",
    get: function get() {
      var noOverlap = this._width;
      var overlap = Math.min(100, this._width * 1.7);

      // Containers can always grow.
      if (this.rows) {
        return overlap;
      }

      // Rows can grow if they have leaves.
      if (this.leaves) {
        return this.leaves.length > 0 ? overlap : noOverlap;
      }

      // Leaves can grow unless they're the last item in a row.
      var leaves = this.row.leaves;
      var index = leaves.indexOf(this);
      return index === leaves.length - 1 ? noOverlap : overlap;
    }
  }, {
    key: "xOffset",
    get: function get() {
      // Containers have no offset.
      if (this.rows) return 0;

      // Rows always start where their container ends.
      if (this.leaves) return this.container._width;

      // Leaves are spread out evenly on the space left by its row.
      var _this$row = this.row,
        leaves = _this$row.leaves,
        xOffset = _this$row.xOffset,
        _width = _this$row._width;
      var index = leaves.indexOf(this) + 1;
      return xOffset + index * _width;
    }
  }]);
  return Event;
}();
/**
 * Return true if event a and b is considered to be on the same row.
 */
function onSameRow(a, b, minimumStartDifference) {
  return (
    // Occupies the same start slot.
    Math.abs(b.start - a.start) < minimumStartDifference ||
    // A's start slot overlaps with b's end slot.
    b.start > a.start && b.start < a.end
  );
}
function sortByRender(events) {
  var sortedByTime = lodash_es_sortBy(events, ['startMs', function (e) {
    return -e.endMs;
  }]);
  var sorted = [];
  while (sortedByTime.length > 0) {
    var event = sortedByTime.shift();
    sorted.push(event);
    for (var i = 0; i < sortedByTime.length; i++) {
      var test = sortedByTime[i];

      // Still inside this event, look for next.
      if (event.endMs > test.startMs) continue;

      // We've found the first event of the next event group.
      // If that event is not right next to our current event, we have to
      // move it here.
      if (i > 0) {
        var _event = sortedByTime.splice(i, 1)[0];
        sorted.push(_event);
      }

      // We've already found the next event group, so stop looking.
      break;
    }
  }
  return sorted;
}
function getStyledEvents$1(_ref2) {
  var events = _ref2.events,
    minimumStartDifference = _ref2.minimumStartDifference,
    slotMetrics = _ref2.slotMetrics,
    accessors = _ref2.accessors;
  // Create proxy events and order them so that we don't have
  // to fiddle with z-indexes.
  var proxies = events.map(function (event) {
    return new Event(event, {
      slotMetrics: slotMetrics,
      accessors: accessors
    });
  });
  var eventsInRenderOrder = sortByRender(proxies);

  // Group overlapping events, while keeping order.
  // Every event is always one of: container, row or leaf.
  // Containers can contain rows, and rows can contain leaves.
  var containerEvents = [];
  var _loop = function _loop() {
    var event = eventsInRenderOrder[i];

    // Check if this event can go into a container event.
    var container = containerEvents.find(function (c) {
      return c.end > event.start || Math.abs(event.start - c.start) < minimumStartDifference;
    });

    // Couldn't find a container — that means this event is a container.
    if (!container) {
      event.rows = [];
      containerEvents.push(event);
      return "continue";
    }

    // Found a container for the event.
    event.container = container;

    // Check if the event can be placed in an existing row.
    // Start looking from behind.
    var row = null;
    for (var j = container.rows.length - 1; !row && j >= 0; j--) {
      if (onSameRow(container.rows[j], event, minimumStartDifference)) {
        row = container.rows[j];
      }
    }
    if (row) {
      // Found a row, so add it.
      row.leaves.push(event);
      event.row = row;
    } else {
      // Couldn't find a row – that means this event is a row.
      event.leaves = [];
      container.rows.push(event);
    }
  };
  for (var i = 0; i < eventsInRenderOrder.length; i++) {
    var _ret = _loop();
    if (_ret === "continue") continue;
  }

  // Return the original events, along with their styles.
  return eventsInRenderOrder.map(function (event) {
    return {
      event: event.data,
      style: {
        top: event.top,
        height: event.height,
        width: event.width,
        xOffset: Math.max(0, event.xOffset)
      }
    };
  });
}
function getMaxIdxDFS(node, maxIdx, visited) {
  for (var i = 0; i < node.friends.length; ++i) {
    if (visited.indexOf(node.friends[i]) > -1) continue;
    maxIdx = maxIdx > node.friends[i].idx ? maxIdx : node.friends[i].idx;
    // TODO : trace it by not object but kinda index or something for performance
    visited.push(node.friends[i]);
    var newIdx = getMaxIdxDFS(node.friends[i], maxIdx, visited);
    maxIdx = maxIdx > newIdx ? maxIdx : newIdx;
  }
  return maxIdx;
}
function noOverlap(_ref) {
  var events = _ref.events,
    minimumStartDifference = _ref.minimumStartDifference,
    slotMetrics = _ref.slotMetrics,
    accessors = _ref.accessors;
  var styledEvents = getStyledEvents$1({
    events: events,
    minimumStartDifference: minimumStartDifference,
    slotMetrics: slotMetrics,
    accessors: accessors
  });
  styledEvents.sort(function (a, b) {
    a = a.style;
    b = b.style;
    if (a.top !== b.top) return a.top > b.top ? 1 : -1;else return a.top + a.height < b.top + b.height ? 1 : -1;
  });
  for (var i = 0; i < styledEvents.length; ++i) {
    styledEvents[i].friends = [];
    delete styledEvents[i].style.left;
    delete styledEvents[i].style.left;
    delete styledEvents[i].idx;
    delete styledEvents[i].size;
  }
  for (var _i2 = 0; _i2 < styledEvents.length - 1; ++_i2) {
    var se1 = styledEvents[_i2];
    var y1 = se1.style.top;
    var y2 = se1.style.top + se1.style.height;
    for (var j = _i2 + 1; j < styledEvents.length; ++j) {
      var se2 = styledEvents[j];
      var y3 = se2.style.top;
      var y4 = se2.style.top + se2.style.height;
      if (y3 >= y1 && y4 <= y2 || y4 > y1 && y4 <= y2 || y3 >= y1 && y3 < y2) {
        // TODO : hashmap would be effective for performance
        se1.friends.push(se2);
        se2.friends.push(se1);
      }
    }
  }
  for (var _i4 = 0; _i4 < styledEvents.length; ++_i4) {
    var se = styledEvents[_i4];
    var bitmap = [];
    for (var _j2 = 0; _j2 < 100; ++_j2) bitmap.push(1); // 1 means available

    for (var _j4 = 0; _j4 < se.friends.length; ++_j4) if (se.friends[_j4].idx !== undefined) bitmap[se.friends[_j4].idx] = 0; // 0 means reserved

    se.idx = bitmap.indexOf(1);
  }
  for (var _i6 = 0; _i6 < styledEvents.length; ++_i6) {
    var size = 0;
    if (styledEvents[_i6].size) continue;
    var allFriends = [];
    var maxIdx = getMaxIdxDFS(styledEvents[_i6], 0, allFriends);
    size = 100 / (maxIdx + 1);
    styledEvents[_i6].size = size;
    for (var _j6 = 0; _j6 < allFriends.length; ++_j6) allFriends[_j6].size = size;
  }
  for (var _i8 = 0; _i8 < styledEvents.length; ++_i8) {
    var e = styledEvents[_i8];
    e.style.left = e.idx * e.size;

    // stretch to maximum
    var _maxIdx = 0;
    for (var _j8 = 0; _j8 < e.friends.length; ++_j8) {
      var idx = e.friends[_j8].idx;
      _maxIdx = _maxIdx > idx ? _maxIdx : idx;
    }
    if (_maxIdx <= e.idx) e.size = 100 - e.idx * e.size;

    // padding between events
    // for this feature, `width` is not percentage based unit anymore
    // it will be used with calc()
    var padding = e.idx === 0 ? 0 : 3;
    e.style.width = "calc(".concat(e.size, "% - ").concat(padding, "px)");
    e.style.height = "calc(".concat(e.style.height, "% - 2px)");
    e.style.xOffset = "calc(".concat(e.style.left, "% + ").concat(padding, "px)");
  }
  return styledEvents;
}

/*eslint no-unused-vars: "off"*/
var DefaultAlgorithms = {
  overlap: getStyledEvents$1,
  'no-overlap': noOverlap
};
function react_big_calendar_esm_isFunction(a) {
  return !!(a && a.constructor && a.call && a.apply);
}

//
function getStyledEvents(_ref) {
  _ref.events;
  _ref.minimumStartDifference;
  _ref.slotMetrics;
  _ref.accessors;
  var dayLayoutAlgorithm = _ref.dayLayoutAlgorithm;
  var algorithm = dayLayoutAlgorithm;
  if (dayLayoutAlgorithm in DefaultAlgorithms) algorithm = DefaultAlgorithms[dayLayoutAlgorithm];
  if (!react_big_calendar_esm_isFunction(algorithm)) {
    // invalid algorithm
    return [];
  }
  return algorithm.apply(this, arguments);
}
var TimeSlotGroup = /*#__PURE__*/function (_Component) {
  (0,inherits/* default */.A)(TimeSlotGroup, _Component);
  var _super = (0,createSuper/* default */.A)(TimeSlotGroup);
  function TimeSlotGroup() {
    (0,classCallCheck/* default */.A)(this, TimeSlotGroup);
    return _super.apply(this, arguments);
  }
  (0,createClass/* default */.A)(TimeSlotGroup, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        renderSlot = _this$props.renderSlot,
        resource = _this$props.resource,
        group = _this$props.group,
        getters = _this$props.getters,
        _this$props$component = _this$props.components,
        _this$props$component2 = _this$props$component === void 0 ? {} : _this$props$component,
        _this$props$component3 = _this$props$component2.timeSlotWrapper,
        Wrapper = _this$props$component3 === void 0 ? NoopWrapper : _this$props$component3;
      var groupProps = getters ? getters.slotGroupProp(group) : {};
      return /*#__PURE__*/react.createElement("div", Object.assign({
        className: "rbc-timeslot-group"
      }, groupProps), group.map(function (value, idx) {
        var slotProps = getters ? getters.slotProp(value, resource) : {};
        return /*#__PURE__*/react.createElement(Wrapper, {
          key: idx,
          value: value,
          resource: resource
        }, /*#__PURE__*/react.createElement("div", Object.assign({}, slotProps, {
          className: clsx_m('rbc-time-slot', slotProps.className)
        }), renderSlot && renderSlot(value, idx)));
      }));
    }
  }]);
  return TimeSlotGroup;
}(react.Component);
function stringifyPercent(v) {
  return typeof v === 'string' ? v : v + '%';
}

/* eslint-disable react/prop-types */
function TimeGridEvent(props) {
  var style = props.style,
    className = props.className,
    event = props.event,
    accessors = props.accessors,
    rtl = props.rtl,
    selected = props.selected,
    label = props.label,
    continuesPrior = props.continuesPrior,
    continuesAfter = props.continuesAfter,
    getters = props.getters,
    onClick = props.onClick,
    onDoubleClick = props.onDoubleClick,
    isBackgroundEvent = props.isBackgroundEvent,
    onKeyPress = props.onKeyPress,
    _props$components = props.components,
    Event = _props$components.event,
    EventWrapper = _props$components.eventWrapper;
  var title = accessors.title(event);
  var tooltip = accessors.tooltip(event);
  var end = accessors.end(event);
  var start = accessors.start(event);
  var userProps = getters.eventProp(event, start, end, selected);
  var height = style.height,
    top = style.top,
    width = style.width,
    xOffset = style.xOffset;
  var inner = [/*#__PURE__*/react.createElement("div", {
    key: "1",
    className: "rbc-event-label"
  }, label), /*#__PURE__*/react.createElement("div", {
    key: "2",
    className: "rbc-event-content"
  }, Event ? /*#__PURE__*/react.createElement(Event, {
    event: event,
    title: title
  }) : title)];
  var eventStyle = isBackgroundEvent ? (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, userProps.style), {}, (0,defineProperty/* default */.A)({
    top: stringifyPercent(top),
    height: stringifyPercent(height),
    // Adding 10px to take events container right margin into account
    width: "calc(".concat(width, " + 10px)")
  }, rtl ? 'right' : 'left', stringifyPercent(Math.max(0, xOffset)))) : (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, userProps.style), {}, (0,defineProperty/* default */.A)({
    top: stringifyPercent(top),
    width: stringifyPercent(width),
    height: stringifyPercent(height)
  }, rtl ? 'right' : 'left', stringifyPercent(xOffset)));
  return /*#__PURE__*/react.createElement(EventWrapper, Object.assign({
    type: "time"
  }, props), /*#__PURE__*/react.createElement("div", {
    onClick: onClick,
    onDoubleClick: onDoubleClick,
    style: eventStyle,
    onKeyPress: onKeyPress,
    title: tooltip ? (typeof label === 'string' ? label + ': ' : '') + tooltip : undefined,
    className: clsx_m(isBackgroundEvent ? 'rbc-background-event' : 'rbc-event', className, userProps.className, {
      'rbc-selected': selected,
      'rbc-event-continues-earlier': continuesPrior,
      'rbc-event-continues-later': continuesAfter
    })
  }, inner));
}
var DayColumnWrapper = function DayColumnWrapper(_ref) {
  var children = _ref.children,
    className = _ref.className,
    style = _ref.style,
    innerRef = _ref.innerRef;
  return /*#__PURE__*/react.createElement("div", {
    className: className,
    style: style,
    ref: innerRef
  }, children);
};
var DayColumnWrapper$1 = /*#__PURE__*/react.forwardRef(function (props, ref) {
  return /*#__PURE__*/react.createElement(DayColumnWrapper, Object.assign({}, props, {
    innerRef: ref
  }));
});
var _excluded$5 = ["dayProp"],
  _excluded2$1 = ["eventContainerWrapper"];
var DayColumn = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.A)(DayColumn, _React$Component);
  var _super = (0,createSuper/* default */.A)(DayColumn);
  function DayColumn() {
    var _this;
    (0,classCallCheck/* default */.A)(this, DayColumn);
    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(_args));
    _this.state = {
      selecting: false,
      timeIndicatorPosition: null
    };
    _this.intervalTriggered = false;
    _this.renderEvents = function (_ref) {
      var events = _ref.events,
        isBackgroundEvent = _ref.isBackgroundEvent;
      var _this$props = _this.props,
        rtl = _this$props.rtl,
        selected = _this$props.selected,
        accessors = _this$props.accessors,
        localizer = _this$props.localizer,
        getters = _this$props.getters,
        components = _this$props.components,
        step = _this$props.step,
        timeslots = _this$props.timeslots,
        dayLayoutAlgorithm = _this$props.dayLayoutAlgorithm,
        resizable = _this$props.resizable;
      var _assertThisInitialize = (0,assertThisInitialized/* default */.A)(_this),
        slotMetrics = _assertThisInitialize.slotMetrics;
      var messages = localizer.messages;
      var styledEvents = getStyledEvents({
        events: events,
        accessors: accessors,
        slotMetrics: slotMetrics,
        minimumStartDifference: Math.ceil(step * timeslots / 2),
        dayLayoutAlgorithm: dayLayoutAlgorithm
      });
      return styledEvents.map(function (_ref2, idx) {
        var event = _ref2.event,
          style = _ref2.style;
        var end = accessors.end(event);
        var start = accessors.start(event);
        var format = 'eventTimeRangeFormat';
        var label;
        var startsBeforeDay = slotMetrics.startsBeforeDay(start);
        var startsAfterDay = slotMetrics.startsAfterDay(end);
        if (startsBeforeDay) format = 'eventTimeRangeEndFormat';else if (startsAfterDay) format = 'eventTimeRangeStartFormat';
        if (startsBeforeDay && startsAfterDay) label = messages.allDay;else label = localizer.format({
          start: start,
          end: end
        }, format);
        var continuesPrior = startsBeforeDay || slotMetrics.startsBefore(start);
        var continuesAfter = startsAfterDay || slotMetrics.startsAfter(end);
        return /*#__PURE__*/react.createElement(TimeGridEvent, {
          style: style,
          event: event,
          label: label,
          key: 'evt_' + idx,
          getters: getters,
          rtl: rtl,
          components: components,
          continuesPrior: continuesPrior,
          continuesAfter: continuesAfter,
          accessors: accessors,
          resource: _this.props.resource,
          selected: isSelected(event, selected),
          onClick: function onClick(e) {
            return _this._select((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, event), {}, {
              sourceResource: _this.props.resource
            }), e);
          },
          onDoubleClick: function onDoubleClick(e) {
            return _this._doubleClick(event, e);
          },
          isBackgroundEvent: isBackgroundEvent,
          onKeyPress: function onKeyPress(e) {
            return _this._keyPress(event, e);
          },
          resizable: resizable
        });
      });
    };
    _this._selectable = function () {
      var node = _this.containerRef.current;
      var _this$props2 = _this.props,
        longPressThreshold = _this$props2.longPressThreshold,
        localizer = _this$props2.localizer;
      var selector = _this._selector = new Selection(function () {
        return node;
      }, {
        longPressThreshold: longPressThreshold
      });
      var maybeSelect = function maybeSelect(box) {
        var onSelecting = _this.props.onSelecting;
        var current = _this.state || {};
        var state = selectionState(box);
        var start = state.startDate,
          end = state.endDate;
        if (onSelecting) {
          if (localizer.eq(current.startDate, start, 'minutes') && localizer.eq(current.endDate, end, 'minutes') || onSelecting({
            start: start,
            end: end,
            resourceId: _this.props.resource
          }) === false) return;
        }
        if (_this.state.start !== state.start || _this.state.end !== state.end || _this.state.selecting !== state.selecting) {
          _this.setState(state);
        }
      };
      var selectionState = function selectionState(point) {
        var currentSlot = _this.slotMetrics.closestSlotFromPoint(point, getBoundsForNode(node));
        if (!_this.state.selecting) {
          _this._initialSlot = currentSlot;
        }
        var initialSlot = _this._initialSlot;
        if (localizer.lte(initialSlot, currentSlot)) {
          currentSlot = _this.slotMetrics.nextSlot(currentSlot);
        } else if (localizer.gt(initialSlot, currentSlot)) {
          initialSlot = _this.slotMetrics.nextSlot(initialSlot);
        }
        var selectRange = _this.slotMetrics.getRange(localizer.min(initialSlot, currentSlot), localizer.max(initialSlot, currentSlot));
        return (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, selectRange), {}, {
          selecting: true,
          top: "".concat(selectRange.top, "%"),
          height: "".concat(selectRange.height, "%")
        });
      };
      var selectorClicksHandler = function selectorClicksHandler(box, actionType) {
        if (!isEvent(_this.containerRef.current, box)) {
          var _selectionState = selectionState(box),
            startDate = _selectionState.startDate,
            endDate = _selectionState.endDate;
          _this._selectSlot({
            startDate: startDate,
            endDate: endDate,
            action: actionType,
            box: box
          });
        }
        _this.setState({
          selecting: false
        });
      };
      selector.on('selecting', maybeSelect);
      selector.on('selectStart', maybeSelect);
      selector.on('beforeSelect', function (box) {
        if (_this.props.selectable !== 'ignoreEvents') return;
        return !isEvent(_this.containerRef.current, box);
      });
      selector.on('click', function (box) {
        return selectorClicksHandler(box, 'click');
      });
      selector.on('doubleClick', function (box) {
        return selectorClicksHandler(box, 'doubleClick');
      });
      selector.on('select', function (bounds) {
        if (_this.state.selecting) {
          _this._selectSlot((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, _this.state), {}, {
            action: 'select',
            bounds: bounds
          }));
          _this.setState({
            selecting: false
          });
        }
      });
      selector.on('reset', function () {
        if (_this.state.selecting) {
          _this.setState({
            selecting: false
          });
        }
      });
    };
    _this._teardownSelectable = function () {
      if (!_this._selector) return;
      _this._selector.teardown();
      _this._selector = null;
    };
    _this._selectSlot = function (_ref3) {
      var startDate = _ref3.startDate,
        endDate = _ref3.endDate,
        action = _ref3.action,
        bounds = _ref3.bounds,
        box = _ref3.box;
      var current = startDate,
        slots = [];
      while (_this.props.localizer.lte(current, endDate)) {
        slots.push(current);
        current = new Date(+current + _this.props.step * 60 * 1000); // using Date ensures not to create an endless loop the day DST begins
      }

      notify(_this.props.onSelectSlot, {
        slots: slots,
        start: startDate,
        end: endDate,
        resourceId: _this.props.resource,
        action: action,
        bounds: bounds,
        box: box
      });
    };
    _this._select = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      notify(_this.props.onSelectEvent, args);
    };
    _this._doubleClick = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      notify(_this.props.onDoubleClickEvent, args);
    };
    _this._keyPress = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      notify(_this.props.onKeyPressEvent, args);
    };
    _this.slotMetrics = getSlotMetrics(_this.props);
    _this.containerRef = /*#__PURE__*/(0,react.createRef)();
    return _this;
  }
  (0,createClass/* default */.A)(DayColumn, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.selectable && this._selectable();
      if (this.props.isNow) {
        this.setTimeIndicatorPositionUpdateInterval();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._teardownSelectable();
      this.clearTimeIndicatorInterval();
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.selectable && !this.props.selectable) this._selectable();
      if (!nextProps.selectable && this.props.selectable) this._teardownSelectable();
      this.slotMetrics = this.slotMetrics.update(nextProps);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props3 = this.props,
        getNow = _this$props3.getNow,
        isNow = _this$props3.isNow,
        localizer = _this$props3.localizer,
        date = _this$props3.date,
        min = _this$props3.min,
        max = _this$props3.max;
      var getNowChanged = localizer.neq(prevProps.getNow(), getNow(), 'minutes');
      if (prevProps.isNow !== isNow || getNowChanged) {
        this.clearTimeIndicatorInterval();
        if (isNow) {
          var tail = !getNowChanged && localizer.eq(prevProps.date, date, 'minutes') && prevState.timeIndicatorPosition === this.state.timeIndicatorPosition;
          this.setTimeIndicatorPositionUpdateInterval(tail);
        }
      } else if (isNow && (localizer.neq(prevProps.min, min, 'minutes') || localizer.neq(prevProps.max, max, 'minutes'))) {
        this.positionTimeIndicator();
      }
    }

    /**
     * @param tail {Boolean} - whether `positionTimeIndicator` call should be
     *   deferred or called upon setting interval (`true` - if deferred);
     */
  }, {
    key: "setTimeIndicatorPositionUpdateInterval",
    value: function setTimeIndicatorPositionUpdateInterval() {
      var _this2 = this;
      var tail = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (!this.intervalTriggered && !tail) {
        this.positionTimeIndicator();
      }
      this._timeIndicatorTimeout = window.setTimeout(function () {
        _this2.intervalTriggered = true;
        _this2.positionTimeIndicator();
        _this2.setTimeIndicatorPositionUpdateInterval();
      }, 60000);
    }
  }, {
    key: "clearTimeIndicatorInterval",
    value: function clearTimeIndicatorInterval() {
      this.intervalTriggered = false;
      window.clearTimeout(this._timeIndicatorTimeout);
    }
  }, {
    key: "positionTimeIndicator",
    value: function positionTimeIndicator() {
      var _this$props4 = this.props,
        min = _this$props4.min,
        max = _this$props4.max,
        getNow = _this$props4.getNow;
      var current = getNow();
      if (current >= min && current <= max) {
        var top = this.slotMetrics.getCurrentTimePosition(current);
        this.intervalTriggered = true;
        this.setState({
          timeIndicatorPosition: top
        });
      } else {
        this.clearTimeIndicatorInterval();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
        date = _this$props5.date,
        max = _this$props5.max,
        rtl = _this$props5.rtl,
        isNow = _this$props5.isNow,
        resource = _this$props5.resource,
        accessors = _this$props5.accessors,
        localizer = _this$props5.localizer,
        _this$props5$getters = _this$props5.getters,
        dayProp = _this$props5$getters.dayProp,
        getters = (0,objectWithoutProperties/* default */.A)(_this$props5$getters, _excluded$5),
        _this$props5$componen = _this$props5.components,
        EventContainer = _this$props5$componen.eventContainerWrapper,
        components = (0,objectWithoutProperties/* default */.A)(_this$props5$componen, _excluded2$1);
      var slotMetrics = this.slotMetrics;
      var _this$state = this.state,
        selecting = _this$state.selecting,
        top = _this$state.top,
        height = _this$state.height,
        startDate = _this$state.startDate,
        endDate = _this$state.endDate;
      var selectDates = {
        start: startDate,
        end: endDate
      };
      var _dayProp = dayProp(max),
        className = _dayProp.className,
        style = _dayProp.style;
      var DayColumnWrapperComponent = components.dayColumnWrapper || DayColumnWrapper$1;
      return /*#__PURE__*/react.createElement(DayColumnWrapperComponent, {
        ref: this.containerRef,
        date: date,
        style: style,
        className: clsx_m(className, 'rbc-day-slot', 'rbc-time-column', isNow && 'rbc-now', isNow && 'rbc-today',
        // WHY
        selecting && 'rbc-slot-selecting'),
        slotMetrics: slotMetrics
      }, slotMetrics.groups.map(function (grp, idx) {
        return /*#__PURE__*/react.createElement(TimeSlotGroup, {
          key: idx,
          group: grp,
          resource: resource,
          getters: getters,
          components: components
        });
      }), /*#__PURE__*/react.createElement(EventContainer, {
        localizer: localizer,
        resource: resource,
        accessors: accessors,
        getters: getters,
        components: components,
        slotMetrics: slotMetrics
      }, /*#__PURE__*/react.createElement("div", {
        className: clsx_m('rbc-events-container', rtl && 'rtl')
      }, this.renderEvents({
        events: this.props.backgroundEvents,
        isBackgroundEvent: true
      }), this.renderEvents({
        events: this.props.events
      }))), selecting && /*#__PURE__*/react.createElement("div", {
        className: "rbc-slot-selection",
        style: {
          top: top,
          height: height
        }
      }, /*#__PURE__*/react.createElement("span", null, localizer.format(selectDates, 'selectRangeFormat'))), isNow && this.intervalTriggered && /*#__PURE__*/react.createElement("div", {
        className: "rbc-current-time-indicator",
        style: {
          top: "".concat(this.state.timeIndicatorPosition, "%")
        }
      }));
    }
  }]);
  return DayColumn;
}(react.Component);
DayColumn.defaultProps = {
  dragThroughEvents: true,
  timeslots: 2
};

/**
 * Since the TimeGutter only displays the 'times' of slots in a day, and is separate
 * from the Day Columns themselves, we check to see if the range contains an offset difference
 * and, if so, change the beginning and end 'date' by a day to properly display the slots times
 * used.
 */
function adjustForDST(_ref) {
  var min = _ref.min,
    max = _ref.max,
    localizer = _ref.localizer;
  if (localizer.getTimezoneOffset(min) !== localizer.getTimezoneOffset(max)) {
    return {
      start: localizer.add(min, -1, 'day'),
      end: localizer.add(max, -1, 'day')
    };
  }
  return {
    start: min,
    end: max
  };
}
var TimeGutter = function TimeGutter(_ref2) {
  var min = _ref2.min,
    max = _ref2.max,
    timeslots = _ref2.timeslots,
    step = _ref2.step,
    localizer = _ref2.localizer,
    getNow = _ref2.getNow,
    resource = _ref2.resource,
    components = _ref2.components,
    getters = _ref2.getters,
    gutterRef = _ref2.gutterRef;
  var TimeGutterWrapper = components.timeGutterWrapper;
  var _useMemo = (0,react.useMemo)(function () {
      return adjustForDST({
        min: min,
        max: max,
        localizer: localizer
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [min === null || min === void 0 ? void 0 : min.toISOString(), max === null || max === void 0 ? void 0 : max.toISOString(), localizer]),
    start = _useMemo.start,
    end = _useMemo.end;
  var _useState = (0,react.useState)(getSlotMetrics({
      min: start,
      max: end,
      timeslots: timeslots,
      step: step,
      localizer: localizer
    })),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    slotMetrics = _useState2[0],
    setSlotMetrics = _useState2[1];
  (0,react.useEffect)(function () {
    if (slotMetrics) {
      setSlotMetrics(slotMetrics.update({
        min: start,
        max: end,
        timeslots: timeslots,
        step: step,
        localizer: localizer
      }));
    }
    /**
     * We don't want this to fire when slotMetrics is updated as it would recursively bomb
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start === null || start === void 0 ? void 0 : start.toISOString(), end === null || end === void 0 ? void 0 : end.toISOString(), timeslots, step]);
  var renderSlot = (0,react.useCallback)(function (value, idx) {
    if (idx) return null; // don't return the first (0) idx

    var isNow = slotMetrics.dateIsInGroup(getNow(), idx);
    return /*#__PURE__*/react.createElement("span", {
      className: clsx_m('rbc-label', isNow && 'rbc-now')
    }, localizer.format(value, 'timeGutterFormat'));
  }, [slotMetrics, localizer, getNow]);
  return /*#__PURE__*/react.createElement(TimeGutterWrapper, {
    slotMetrics: slotMetrics
  }, /*#__PURE__*/react.createElement("div", {
    className: "rbc-time-gutter rbc-time-column",
    ref: gutterRef
  }, slotMetrics.groups.map(function (grp, idx) {
    return /*#__PURE__*/react.createElement(TimeSlotGroup, {
      key: idx,
      group: grp,
      resource: resource,
      components: components,
      renderSlot: renderSlot,
      getters: getters
    });
  })));
};
var TimeGutter$1 = /*#__PURE__*/react.forwardRef(function (props, ref) {
  return /*#__PURE__*/react.createElement(TimeGutter, Object.assign({
    gutterRef: ref
  }, props));
});
var ResourceHeader = function ResourceHeader(_ref) {
  var label = _ref.label;
  return /*#__PURE__*/react.createElement(react.Fragment, null, label);
};
var TimeGridHeader = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.A)(TimeGridHeader, _React$Component);
  var _super = (0,createSuper/* default */.A)(TimeGridHeader);
  function TimeGridHeader() {
    var _this;
    (0,classCallCheck/* default */.A)(this, TimeGridHeader);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.handleHeaderClick = function (date, view, e) {
      e.preventDefault();
      notify(_this.props.onDrillDown, [date, view]);
    };
    _this.renderRow = function (resource) {
      var _this$props = _this.props,
        events = _this$props.events,
        rtl = _this$props.rtl,
        selectable = _this$props.selectable,
        getNow = _this$props.getNow,
        range = _this$props.range,
        getters = _this$props.getters,
        localizer = _this$props.localizer,
        accessors = _this$props.accessors,
        components = _this$props.components,
        resizable = _this$props.resizable;
      var resourceId = accessors.resourceId(resource);
      var eventsToDisplay = resource ? events.filter(function (event) {
        return accessors.resource(event) === resourceId;
      }) : events;
      return /*#__PURE__*/react.createElement(DateContentRow, {
        isAllDay: true,
        rtl: rtl,
        getNow: getNow,
        minRows: 2
        // Add +1 to include showMore button row in the row limit
        ,

        maxRows: _this.props.allDayMaxRows + 1,
        range: range,
        events: eventsToDisplay,
        resourceId: resourceId,
        className: "rbc-allday-cell",
        selectable: selectable,
        selected: _this.props.selected,
        components: components,
        accessors: accessors,
        getters: getters,
        localizer: localizer,
        onSelect: _this.props.onSelectEvent,
        onShowMore: _this.props.onShowMore,
        onDoubleClick: _this.props.onDoubleClickEvent,
        onKeyPress: _this.props.onKeyPressEvent,
        onSelectSlot: _this.props.onSelectSlot,
        longPressThreshold: _this.props.longPressThreshold,
        resizable: resizable
      });
    };
    return _this;
  }
  (0,createClass/* default */.A)(TimeGridHeader, [{
    key: "renderHeaderCells",
    value: function renderHeaderCells(range) {
      var _this2 = this;
      var _this$props2 = this.props,
        localizer = _this$props2.localizer,
        getDrilldownView = _this$props2.getDrilldownView,
        getNow = _this$props2.getNow,
        dayProp = _this$props2.getters.dayProp,
        _this$props2$componen = _this$props2.components.header,
        HeaderComponent = _this$props2$componen === void 0 ? Header : _this$props2$componen;
      var today = getNow();
      return range.map(function (date, i) {
        var drilldownView = getDrilldownView(date);
        var label = localizer.format(date, 'dayFormat');
        var _dayProp = dayProp(date),
          className = _dayProp.className,
          style = _dayProp.style;
        var header = /*#__PURE__*/react.createElement(HeaderComponent, {
          date: date,
          label: label,
          localizer: localizer
        });
        return /*#__PURE__*/react.createElement("div", {
          key: i,
          style: style,
          className: clsx_m('rbc-header', className, localizer.isSameDate(date, today) && 'rbc-today')
        }, drilldownView ? /*#__PURE__*/react.createElement("button", {
          type: "button",
          className: "rbc-button-link",
          onClick: function onClick(e) {
            return _this2.handleHeaderClick(date, drilldownView, e);
          }
        }, header) : /*#__PURE__*/react.createElement("span", null, header));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$props3 = this.props,
        width = _this$props3.width,
        rtl = _this$props3.rtl,
        resources = _this$props3.resources,
        range = _this$props3.range,
        events = _this$props3.events,
        getNow = _this$props3.getNow,
        accessors = _this$props3.accessors,
        selectable = _this$props3.selectable,
        components = _this$props3.components,
        getters = _this$props3.getters,
        scrollRef = _this$props3.scrollRef,
        localizer = _this$props3.localizer,
        isOverflowing = _this$props3.isOverflowing,
        _this$props3$componen = _this$props3.components,
        TimeGutterHeader = _this$props3$componen.timeGutterHeader,
        _this$props3$componen2 = _this$props3$componen.resourceHeader,
        ResourceHeaderComponent = _this$props3$componen2 === void 0 ? ResourceHeader : _this$props3$componen2,
        resizable = _this$props3.resizable;
      var style = {};
      if (isOverflowing) {
        style[rtl ? 'marginLeft' : 'marginRight'] = "".concat(scrollbarSize() - 1, "px");
      }
      var groupedEvents = resources.groupEvents(events);
      return /*#__PURE__*/react.createElement("div", {
        style: style,
        ref: scrollRef,
        className: clsx_m('rbc-time-header', isOverflowing && 'rbc-overflowing')
      }, /*#__PURE__*/react.createElement("div", {
        className: "rbc-label rbc-time-header-gutter",
        style: {
          width: width,
          minWidth: width,
          maxWidth: width
        }
      }, TimeGutterHeader && /*#__PURE__*/react.createElement(TimeGutterHeader, null)), resources.map(function (_ref, idx) {
        var _ref2 = (0,slicedToArray/* default */.A)(_ref, 2),
          id = _ref2[0],
          resource = _ref2[1];
        return /*#__PURE__*/react.createElement("div", {
          className: "rbc-time-header-content",
          key: id || idx
        }, resource && /*#__PURE__*/react.createElement("div", {
          className: "rbc-row rbc-row-resource",
          key: "resource_".concat(idx)
        }, /*#__PURE__*/react.createElement("div", {
          className: "rbc-header"
        }, /*#__PURE__*/react.createElement(ResourceHeaderComponent, {
          index: idx,
          label: accessors.resourceTitle(resource),
          resource: resource
        }))), /*#__PURE__*/react.createElement("div", {
          className: "rbc-row rbc-time-header-cell".concat(range.length <= 1 ? ' rbc-time-header-cell-single-day' : '')
        }, _this3.renderHeaderCells(range)), /*#__PURE__*/react.createElement(DateContentRow, {
          isAllDay: true,
          rtl: rtl,
          getNow: getNow,
          minRows: 2
          // Add +1 to include showMore button row in the row limit
          ,

          maxRows: _this3.props.allDayMaxRows + 1,
          range: range,
          events: groupedEvents.get(id) || [],
          resourceId: resource && id,
          className: "rbc-allday-cell",
          selectable: selectable,
          selected: _this3.props.selected,
          components: components,
          accessors: accessors,
          getters: getters,
          localizer: localizer,
          onSelect: _this3.props.onSelectEvent,
          onShowMore: _this3.props.onShowMore,
          onDoubleClick: _this3.props.onDoubleClickEvent,
          onKeyPress: _this3.props.onKeyPressEvent,
          onSelectSlot: _this3.props.onSelectSlot,
          longPressThreshold: _this3.props.longPressThreshold,
          resizable: resizable
        }));
      }));
    }
  }]);
  return TimeGridHeader;
}(react.Component);
var NONE = {};
function Resources(resources, accessors) {
  return {
    map: function map(fn) {
      if (!resources) return [fn([NONE, null], 0)];
      return resources.map(function (resource, idx) {
        return fn([accessors.resourceId(resource), resource], idx);
      });
    },
    groupEvents: function groupEvents(events) {
      var eventsByResource = new Map();
      if (!resources) {
        // Return all events if resources are not provided
        eventsByResource.set(NONE, events);
        return eventsByResource;
      }
      events.forEach(function (event) {
        var id = accessors.resource(event) || NONE;
        if (Array.isArray(id)) {
          id.forEach(function (item) {
            var resourceEvents = eventsByResource.get(item) || [];
            resourceEvents.push(event);
            eventsByResource.set(item, resourceEvents);
          });
        } else {
          var resourceEvents = eventsByResource.get(id) || [];
          resourceEvents.push(event);
          eventsByResource.set(id, resourceEvents);
        }
      });
      return eventsByResource;
    }
  };
}
var TimeGrid = /*#__PURE__*/function (_Component) {
  (0,inherits/* default */.A)(TimeGrid, _Component);
  var _super = (0,createSuper/* default */.A)(TimeGrid);
  function TimeGrid(props) {
    var _this;
    (0,classCallCheck/* default */.A)(this, TimeGrid);
    _this = _super.call(this, props);
    _this.handleScroll = function (e) {
      if (_this.scrollRef.current) {
        _this.scrollRef.current.scrollLeft = e.target.scrollLeft;
      }
    };
    _this.handleResize = function () {
      cancel(_this.rafHandle);
      _this.rafHandle = request(_this.checkOverflow);
    };
    _this.handleKeyPressEvent = function () {
      _this.clearSelection();
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      notify(_this.props.onKeyPressEvent, args);
    };
    _this.handleSelectEvent = function () {
      //cancel any pending selections so only the event click goes through.
      _this.clearSelection();
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      notify(_this.props.onSelectEvent, args);
    };
    _this.handleDoubleClickEvent = function () {
      _this.clearSelection();
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      notify(_this.props.onDoubleClickEvent, args);
    };
    _this.handleShowMore = function (events, date, cell, slot, target) {
      var _this$props = _this.props,
        popup = _this$props.popup,
        onDrillDown = _this$props.onDrillDown,
        onShowMore = _this$props.onShowMore,
        getDrilldownView = _this$props.getDrilldownView,
        doShowMoreDrillDown = _this$props.doShowMoreDrillDown;
      _this.clearSelection();
      if (popup) {
        var position = position_position(cell, _this.containerRef.current);
        _this.setState({
          overlay: {
            date: date,
            events: events,
            position: (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, position), {}, {
              width: '200px'
            }),
            target: target
          }
        });
      } else if (doShowMoreDrillDown) {
        notify(onDrillDown, [date, getDrilldownView(date) || views.DAY]);
      }
      notify(onShowMore, [events, date, slot]);
    };
    _this.handleSelectAllDaySlot = function (slots, slotInfo) {
      var onSelectSlot = _this.props.onSelectSlot;
      var start = new Date(slots[0]);
      var end = new Date(slots[slots.length - 1]);
      end.setDate(slots[slots.length - 1].getDate() + 1);
      notify(onSelectSlot, {
        slots: slots,
        start: start,
        end: end,
        action: slotInfo.action,
        resourceId: slotInfo.resourceId
      });
    };
    _this.overlayDisplay = function () {
      _this.setState({
        overlay: null
      });
    };
    _this.checkOverflow = function () {
      if (_this._updatingOverflow) return;
      var content = _this.contentRef.current;
      var isOverflowing = content.scrollHeight > content.clientHeight;
      if (_this.state.isOverflowing !== isOverflowing) {
        _this._updatingOverflow = true;
        _this.setState({
          isOverflowing: isOverflowing
        }, function () {
          _this._updatingOverflow = false;
        });
      }
    };
    _this.memoizedResources = memoizeOne(function (resources, accessors) {
      return Resources(resources, accessors);
    });
    _this.state = {
      gutterWidth: undefined,
      isOverflowing: null
    };
    _this.scrollRef = /*#__PURE__*/react.createRef();
    _this.contentRef = /*#__PURE__*/react.createRef();
    _this.containerRef = /*#__PURE__*/react.createRef();
    _this._scrollRatio = null;
    _this.gutterRef = /*#__PURE__*/(0,react.createRef)();
    return _this;
  }
  (0,createClass/* default */.A)(TimeGrid, [{
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate() {
      this.checkOverflow();
      return null;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.width == null) {
        this.measureGutter();
      }
      this.calculateScroll();
      this.applyScroll();
      window.addEventListener('resize', this.handleResize);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
      cancel(this.rafHandle);
      if (this.measureGutterAnimationFrameRequest) {
        window.cancelAnimationFrame(this.measureGutterAnimationFrameRequest);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.applyScroll();
    }
  }, {
    key: "renderEvents",
    value: function renderEvents(range, events, backgroundEvents, now) {
      var _this2 = this;
      var _this$props2 = this.props,
        min = _this$props2.min,
        max = _this$props2.max,
        components = _this$props2.components,
        accessors = _this$props2.accessors,
        localizer = _this$props2.localizer,
        dayLayoutAlgorithm = _this$props2.dayLayoutAlgorithm;
      var resources = this.memoizedResources(this.props.resources, accessors);
      var groupedEvents = resources.groupEvents(events);
      var groupedBackgroundEvents = resources.groupEvents(backgroundEvents);
      return resources.map(function (_ref, i) {
        var _ref2 = (0,slicedToArray/* default */.A)(_ref, 2),
          id = _ref2[0],
          resource = _ref2[1];
        return range.map(function (date, jj) {
          var daysEvents = (groupedEvents.get(id) || []).filter(function (event) {
            return localizer.inRange(date, accessors.start(event), accessors.end(event), 'day');
          });
          var daysBackgroundEvents = (groupedBackgroundEvents.get(id) || []).filter(function (event) {
            return localizer.inRange(date, accessors.start(event), accessors.end(event), 'day');
          });
          return /*#__PURE__*/react.createElement(DayColumn, Object.assign({}, _this2.props, {
            localizer: localizer,
            min: localizer.merge(date, min),
            max: localizer.merge(date, max),
            resource: resource && id,
            components: components,
            isNow: localizer.isSameDate(date, now),
            key: i + '-' + jj,
            date: date,
            events: daysEvents,
            backgroundEvents: daysBackgroundEvents,
            dayLayoutAlgorithm: dayLayoutAlgorithm
          }));
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$allDayMax;
      var _this$props3 = this.props,
        events = _this$props3.events,
        backgroundEvents = _this$props3.backgroundEvents,
        range = _this$props3.range,
        width = _this$props3.width,
        rtl = _this$props3.rtl,
        selected = _this$props3.selected,
        getNow = _this$props3.getNow,
        resources = _this$props3.resources,
        components = _this$props3.components,
        accessors = _this$props3.accessors,
        getters = _this$props3.getters,
        localizer = _this$props3.localizer,
        min = _this$props3.min,
        max = _this$props3.max,
        showMultiDayTimes = _this$props3.showMultiDayTimes,
        longPressThreshold = _this$props3.longPressThreshold,
        resizable = _this$props3.resizable;
      width = width || this.state.gutterWidth;
      var start = range[0],
        end = range[range.length - 1];
      this.slots = range.length;
      var allDayEvents = [],
        rangeEvents = [],
        rangeBackgroundEvents = [];
      events.forEach(function (event) {
        if (react_big_calendar_esm_inRange(event, start, end, accessors, localizer)) {
          var eStart = accessors.start(event),
            eEnd = accessors.end(event);
          if (accessors.allDay(event) || localizer.startAndEndAreDateOnly(eStart, eEnd) || !showMultiDayTimes && !localizer.isSameDate(eStart, eEnd)) {
            allDayEvents.push(event);
          } else {
            rangeEvents.push(event);
          }
        }
      });
      backgroundEvents.forEach(function (event) {
        if (react_big_calendar_esm_inRange(event, start, end, accessors, localizer)) {
          rangeBackgroundEvents.push(event);
        }
      });
      allDayEvents.sort(function (a, b) {
        return sortEvents(a, b, accessors, localizer);
      });
      return /*#__PURE__*/react.createElement("div", {
        className: clsx_m('rbc-time-view', resources && 'rbc-time-view-resources'),
        ref: this.containerRef
      }, /*#__PURE__*/react.createElement(TimeGridHeader, {
        range: range,
        events: allDayEvents,
        width: width,
        rtl: rtl,
        getNow: getNow,
        localizer: localizer,
        selected: selected,
        allDayMaxRows: this.props.showAllEvents ? Infinity : (_this$props$allDayMax = this.props.allDayMaxRows) !== null && _this$props$allDayMax !== void 0 ? _this$props$allDayMax : Infinity,
        resources: this.memoizedResources(resources, accessors),
        selectable: this.props.selectable,
        accessors: accessors,
        getters: getters,
        components: components,
        scrollRef: this.scrollRef,
        isOverflowing: this.state.isOverflowing,
        longPressThreshold: longPressThreshold,
        onSelectSlot: this.handleSelectAllDaySlot,
        onSelectEvent: this.handleSelectEvent,
        onShowMore: this.handleShowMore,
        onDoubleClickEvent: this.props.onDoubleClickEvent,
        onKeyPressEvent: this.props.onKeyPressEvent,
        onDrillDown: this.props.onDrillDown,
        getDrilldownView: this.props.getDrilldownView,
        resizable: resizable
      }), this.props.popup && this.renderOverlay(), /*#__PURE__*/react.createElement("div", {
        ref: this.contentRef,
        className: "rbc-time-content",
        onScroll: this.handleScroll
      }, /*#__PURE__*/react.createElement(TimeGutter$1, {
        date: start,
        ref: this.gutterRef,
        localizer: localizer,
        min: localizer.merge(start, min),
        max: localizer.merge(start, max),
        step: this.props.step,
        getNow: this.props.getNow,
        timeslots: this.props.timeslots,
        components: components,
        className: "rbc-time-gutter",
        getters: getters
      }), this.renderEvents(range, rangeEvents, rangeBackgroundEvents, getNow())));
    }
  }, {
    key: "renderOverlay",
    value: function renderOverlay() {
      var _this$state$overlay,
        _this$state,
        _this3 = this;
      var overlay = (_this$state$overlay = (_this$state = this.state) === null || _this$state === void 0 ? void 0 : _this$state.overlay) !== null && _this$state$overlay !== void 0 ? _this$state$overlay : {};
      var _this$props4 = this.props,
        accessors = _this$props4.accessors,
        localizer = _this$props4.localizer,
        components = _this$props4.components,
        getters = _this$props4.getters,
        selected = _this$props4.selected,
        popupOffset = _this$props4.popupOffset,
        handleDragStart = _this$props4.handleDragStart;
      var onHide = function onHide() {
        return _this3.setState({
          overlay: null
        });
      };
      return /*#__PURE__*/react.createElement(PopOverlay, {
        overlay: overlay,
        accessors: accessors,
        localizer: localizer,
        components: components,
        getters: getters,
        selected: selected,
        popupOffset: popupOffset,
        ref: this.containerRef,
        handleKeyPressEvent: this.handleKeyPressEvent,
        handleSelectEvent: this.handleSelectEvent,
        handleDoubleClickEvent: this.handleDoubleClickEvent,
        handleDragStart: handleDragStart,
        show: !!overlay.position,
        overlayDisplay: this.overlayDisplay,
        onHide: onHide
      });
    }
  }, {
    key: "clearSelection",
    value: function clearSelection() {
      clearTimeout(this._selectTimer);
      this._pendingSelection = [];
    }
  }, {
    key: "measureGutter",
    value: function measureGutter() {
      var _this4 = this;
      if (this.measureGutterAnimationFrameRequest) {
        window.cancelAnimationFrame(this.measureGutterAnimationFrameRequest);
      }
      this.measureGutterAnimationFrameRequest = window.requestAnimationFrame(function () {
        var _this4$gutterRef;
        var width = (_this4$gutterRef = _this4.gutterRef) !== null && _this4$gutterRef !== void 0 && _this4$gutterRef.current ? getWidth(_this4.gutterRef.current) : undefined;
        if (width && _this4.state.gutterWidth !== width) {
          _this4.setState({
            gutterWidth: width
          });
        }
      });
    }
  }, {
    key: "applyScroll",
    value: function applyScroll() {
      // If auto-scroll is disabled, we don't actually apply the scroll
      if (this._scrollRatio != null && this.props.enableAutoScroll === true) {
        var content = this.contentRef.current;
        content.scrollTop = content.scrollHeight * this._scrollRatio;
        // Only do this once
        this._scrollRatio = null;
      }
    }
  }, {
    key: "calculateScroll",
    value: function calculateScroll() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var min = props.min,
        max = props.max,
        scrollToTime = props.scrollToTime,
        localizer = props.localizer;
      var diffMillis = localizer.diff(localizer.merge(scrollToTime, min), scrollToTime, 'milliseconds');
      var totalMillis = localizer.diff(min, max, 'milliseconds');
      this._scrollRatio = diffMillis / totalMillis;
    }
  }]);
  return TimeGrid;
}(react.Component);
TimeGrid.defaultProps = {
  step: 30,
  timeslots: 2
};
var _excluded$4 = ["date", "localizer", "min", "max", "scrollToTime", "enableAutoScroll"];
var Day = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.A)(Day, _React$Component);
  var _super = (0,createSuper/* default */.A)(Day);
  function Day() {
    (0,classCallCheck/* default */.A)(this, Day);
    return _super.apply(this, arguments);
  }
  (0,createClass/* default */.A)(Day, [{
    key: "render",
    value: function render() {
      /**
       * This allows us to default min, max, and scrollToTime
       * using our localizer. This is necessary until such time
       * as TODO: TimeGrid is converted to a functional component.
       */
      var _this$props = this.props,
        date = _this$props.date,
        localizer = _this$props.localizer,
        _this$props$min = _this$props.min,
        min = _this$props$min === void 0 ? localizer.startOf(new Date(), 'day') : _this$props$min,
        _this$props$max = _this$props.max,
        max = _this$props$max === void 0 ? localizer.endOf(new Date(), 'day') : _this$props$max,
        _this$props$scrollToT = _this$props.scrollToTime,
        scrollToTime = _this$props$scrollToT === void 0 ? localizer.startOf(new Date(), 'day') : _this$props$scrollToT,
        _this$props$enableAut = _this$props.enableAutoScroll,
        enableAutoScroll = _this$props$enableAut === void 0 ? true : _this$props$enableAut,
        props = (0,objectWithoutProperties/* default */.A)(_this$props, _excluded$4);
      var range = Day.range(date, {
        localizer: localizer
      });
      return /*#__PURE__*/react.createElement(TimeGrid, Object.assign({}, props, {
        range: range,
        eventOffset: 10,
        localizer: localizer,
        min: min,
        max: max,
        scrollToTime: scrollToTime,
        enableAutoScroll: enableAutoScroll
      }));
    }
  }]);
  return Day;
}(react.Component);
Day.range = function (date, _ref) {
  var localizer = _ref.localizer;
  return [localizer.startOf(date, 'day')];
};
Day.navigate = function (date, action, _ref2) {
  var localizer = _ref2.localizer;
  switch (action) {
    case react_big_calendar_esm_navigate.PREVIOUS:
      return localizer.add(date, -1, 'day');
    case react_big_calendar_esm_navigate.NEXT:
      return localizer.add(date, 1, 'day');
    default:
      return date;
  }
};
Day.title = function (date, _ref3) {
  var localizer = _ref3.localizer;
  return localizer.format(date, 'dayHeaderFormat');
};
var _excluded$3 = ["date", "localizer", "min", "max", "scrollToTime", "enableAutoScroll"];
var Week = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.A)(Week, _React$Component);
  var _super = (0,createSuper/* default */.A)(Week);
  function Week() {
    (0,classCallCheck/* default */.A)(this, Week);
    return _super.apply(this, arguments);
  }
  (0,createClass/* default */.A)(Week, [{
    key: "render",
    value: function render() {
      /**
       * This allows us to default min, max, and scrollToTime
       * using our localizer. This is necessary until such time
       * as TimeGrid is converted to a functional component.
       */
      var _this$props = this.props,
        date = _this$props.date,
        localizer = _this$props.localizer,
        _this$props$min = _this$props.min,
        min = _this$props$min === void 0 ? localizer.startOf(new Date(), 'day') : _this$props$min,
        _this$props$max = _this$props.max,
        max = _this$props$max === void 0 ? localizer.endOf(new Date(), 'day') : _this$props$max,
        _this$props$scrollToT = _this$props.scrollToTime,
        scrollToTime = _this$props$scrollToT === void 0 ? localizer.startOf(new Date(), 'day') : _this$props$scrollToT,
        _this$props$enableAut = _this$props.enableAutoScroll,
        enableAutoScroll = _this$props$enableAut === void 0 ? true : _this$props$enableAut,
        props = (0,objectWithoutProperties/* default */.A)(_this$props, _excluded$3);
      var range = Week.range(date, this.props);
      return /*#__PURE__*/react.createElement(TimeGrid, Object.assign({}, props, {
        range: range,
        eventOffset: 15,
        localizer: localizer,
        min: min,
        max: max,
        scrollToTime: scrollToTime,
        enableAutoScroll: enableAutoScroll
      }));
    }
  }]);
  return Week;
}(react.Component);
Week.defaultProps = TimeGrid.defaultProps;
Week.navigate = function (date, action, _ref) {
  var localizer = _ref.localizer;
  switch (action) {
    case react_big_calendar_esm_navigate.PREVIOUS:
      return localizer.add(date, -1, 'week');
    case react_big_calendar_esm_navigate.NEXT:
      return localizer.add(date, 1, 'week');
    default:
      return date;
  }
};
Week.range = function (date, _ref2) {
  var localizer = _ref2.localizer;
  var firstOfWeek = localizer.startOfWeek();
  var start = localizer.startOf(date, 'week', firstOfWeek);
  var end = localizer.endOf(date, 'week', firstOfWeek);
  return localizer.range(start, end);
};
Week.title = function (date, _ref3) {
  var localizer = _ref3.localizer;
  var _Week$range = Week.range(date, {
      localizer: localizer
    }),
    _Week$range2 = (0,esm_toArray/* default */.A)(_Week$range),
    start = _Week$range2[0],
    rest = _Week$range2.slice(1);
  return localizer.format({
    start: start,
    end: rest.pop()
  }, 'dayRangeHeaderFormat');
};
var _excluded$2 = ["date", "localizer", "min", "max", "scrollToTime", "enableAutoScroll"];
function workWeekRange(date, options) {
  return Week.range(date, options).filter(function (d) {
    return [6, 0].indexOf(d.getDay()) === -1;
  });
}
var WorkWeek = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.A)(WorkWeek, _React$Component);
  var _super = (0,createSuper/* default */.A)(WorkWeek);
  function WorkWeek() {
    (0,classCallCheck/* default */.A)(this, WorkWeek);
    return _super.apply(this, arguments);
  }
  (0,createClass/* default */.A)(WorkWeek, [{
    key: "render",
    value: function render() {
      /**
       * This allows us to default min, max, and scrollToTime
       * using our localizer. This is necessary until such time
       * as TimeGrid is converted to a functional component.
       */
      var _this$props = this.props,
        date = _this$props.date,
        localizer = _this$props.localizer,
        _this$props$min = _this$props.min,
        min = _this$props$min === void 0 ? localizer.startOf(new Date(), 'day') : _this$props$min,
        _this$props$max = _this$props.max,
        max = _this$props$max === void 0 ? localizer.endOf(new Date(), 'day') : _this$props$max,
        _this$props$scrollToT = _this$props.scrollToTime,
        scrollToTime = _this$props$scrollToT === void 0 ? localizer.startOf(new Date(), 'day') : _this$props$scrollToT,
        _this$props$enableAut = _this$props.enableAutoScroll,
        enableAutoScroll = _this$props$enableAut === void 0 ? true : _this$props$enableAut,
        props = (0,objectWithoutProperties/* default */.A)(_this$props, _excluded$2);
      var range = workWeekRange(date, this.props);
      return /*#__PURE__*/react.createElement(TimeGrid, Object.assign({}, props, {
        range: range,
        eventOffset: 15,
        localizer: localizer,
        min: min,
        max: max,
        scrollToTime: scrollToTime,
        enableAutoScroll: enableAutoScroll
      }));
    }
  }]);
  return WorkWeek;
}(react.Component);
WorkWeek.defaultProps = TimeGrid.defaultProps;
WorkWeek.range = workWeekRange;
WorkWeek.navigate = Week.navigate;
WorkWeek.title = function (date, _ref) {
  var localizer = _ref.localizer;
  var _workWeekRange = workWeekRange(date, {
      localizer: localizer
    }),
    _workWeekRange2 = (0,esm_toArray/* default */.A)(_workWeekRange),
    start = _workWeekRange2[0],
    rest = _workWeekRange2.slice(1);
  return localizer.format({
    start: start,
    end: rest.pop()
  }, 'dayRangeHeaderFormat');
};
function Agenda(_ref) {
  var accessors = _ref.accessors,
    components = _ref.components,
    date = _ref.date,
    events = _ref.events,
    getters = _ref.getters,
    length = _ref.length,
    localizer = _ref.localizer,
    onDoubleClickEvent = _ref.onDoubleClickEvent,
    onSelectEvent = _ref.onSelectEvent,
    selected = _ref.selected;
  var headerRef = (0,react.useRef)(null);
  var dateColRef = (0,react.useRef)(null);
  var timeColRef = (0,react.useRef)(null);
  var contentRef = (0,react.useRef)(null);
  var tbodyRef = (0,react.useRef)(null);
  (0,react.useEffect)(function () {
    _adjustHeader();
  });
  var renderDay = function renderDay(day, events, dayKey) {
    var Event = components.event,
      AgendaDate = components.date;
    events = events.filter(function (e) {
      return react_big_calendar_esm_inRange(e, localizer.startOf(day, 'day'), localizer.endOf(day, 'day'), accessors, localizer);
    });
    return events.map(function (event, idx) {
      var title = accessors.title(event);
      var end = accessors.end(event);
      var start = accessors.start(event);
      var userProps = getters.eventProp(event, start, end, isSelected(event, selected));
      var dateLabel = idx === 0 && localizer.format(day, 'agendaDateFormat');
      var first = idx === 0 ? /*#__PURE__*/react.createElement("td", {
        rowSpan: events.length,
        className: "rbc-agenda-date-cell"
      }, AgendaDate ? /*#__PURE__*/react.createElement(AgendaDate, {
        day: day,
        label: dateLabel
      }) : dateLabel) : false;
      return /*#__PURE__*/react.createElement("tr", {
        key: dayKey + '_' + idx,
        className: userProps.className,
        style: userProps.style
      }, first, /*#__PURE__*/react.createElement("td", {
        className: "rbc-agenda-time-cell"
      }, timeRangeLabel(day, event)), /*#__PURE__*/react.createElement("td", {
        className: "rbc-agenda-event-cell",
        onClick: function onClick(e) {
          return onSelectEvent && onSelectEvent(event, e);
        },
        onDoubleClick: function onDoubleClick(e) {
          return onDoubleClickEvent && onDoubleClickEvent(event, e);
        }
      }, Event ? /*#__PURE__*/react.createElement(Event, {
        event: event,
        title: title
      }) : title));
    }, []);
  };
  var timeRangeLabel = function timeRangeLabel(day, event) {
    var labelClass = '',
      TimeComponent = components.time,
      label = localizer.messages.allDay;
    var end = accessors.end(event);
    var start = accessors.start(event);
    if (!accessors.allDay(event)) {
      if (localizer.eq(start, end)) {
        label = localizer.format(start, 'agendaTimeFormat');
      } else if (localizer.isSameDate(start, end)) {
        label = localizer.format({
          start: start,
          end: end
        }, 'agendaTimeRangeFormat');
      } else if (localizer.isSameDate(day, start)) {
        label = localizer.format(start, 'agendaTimeFormat');
      } else if (localizer.isSameDate(day, end)) {
        label = localizer.format(end, 'agendaTimeFormat');
      }
    }
    if (localizer.gt(day, start, 'day')) labelClass = 'rbc-continues-prior';
    if (localizer.lt(day, end, 'day')) labelClass += ' rbc-continues-after';
    return /*#__PURE__*/react.createElement("span", {
      className: labelClass.trim()
    }, TimeComponent ? /*#__PURE__*/react.createElement(TimeComponent, {
      event: event,
      day: day,
      label: label
    }) : label);
  };
  var _adjustHeader = function _adjustHeader() {
    if (!tbodyRef.current) return;
    var header = headerRef.current;
    var firstRow = tbodyRef.current.firstChild;
    if (!firstRow) return;
    var isOverflowing = contentRef.current.scrollHeight > contentRef.current.clientHeight;
    var _widths = [];
    var widths = _widths;
    _widths = [getWidth(firstRow.children[0]), getWidth(firstRow.children[1])];
    if (widths[0] !== _widths[0] || widths[1] !== _widths[1]) {
      dateColRef.current.style.width = _widths[0] + 'px';
      timeColRef.current.style.width = _widths[1] + 'px';
    }
    if (isOverflowing) {
      addClass(header, 'rbc-header-overflowing');
      header.style.marginRight = scrollbarSize() + 'px';
    } else {
      removeClass(header, 'rbc-header-overflowing');
    }
  };
  var messages = localizer.messages;
  var end = localizer.add(date, length, 'day');
  var range = localizer.range(date, end, 'day');
  events = events.filter(function (event) {
    return react_big_calendar_esm_inRange(event, localizer.startOf(date, 'day'), localizer.endOf(end, 'day'), accessors, localizer);
  });
  events.sort(function (a, b) {
    return +accessors.start(a) - +accessors.start(b);
  });
  return /*#__PURE__*/react.createElement("div", {
    className: "rbc-agenda-view"
  }, events.length !== 0 ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("table", {
    ref: headerRef,
    className: "rbc-agenda-table"
  }, /*#__PURE__*/react.createElement("thead", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
    className: "rbc-header",
    ref: dateColRef
  }, messages.date), /*#__PURE__*/react.createElement("th", {
    className: "rbc-header",
    ref: timeColRef
  }, messages.time), /*#__PURE__*/react.createElement("th", {
    className: "rbc-header"
  }, messages.event)))), /*#__PURE__*/react.createElement("div", {
    className: "rbc-agenda-content",
    ref: contentRef
  }, /*#__PURE__*/react.createElement("table", {
    className: "rbc-agenda-table"
  }, /*#__PURE__*/react.createElement("tbody", {
    ref: tbodyRef
  }, range.map(function (day, idx) {
    return renderDay(day, events, idx);
  }))))) : /*#__PURE__*/react.createElement("span", {
    className: "rbc-agenda-empty"
  }, messages.noEventsInRange));
}
Agenda.defaultProps = {
  length: 30
};
Agenda.range = function (start, _ref2) {
  var _ref2$length = _ref2.length,
    length = _ref2$length === void 0 ? Agenda.defaultProps.length : _ref2$length,
    localizer = _ref2.localizer;
  var end = localizer.add(start, length, 'day');
  return {
    start: start,
    end: end
  };
};
Agenda.navigate = function (date, action, _ref3) {
  var _ref3$length = _ref3.length,
    length = _ref3$length === void 0 ? Agenda.defaultProps.length : _ref3$length,
    localizer = _ref3.localizer;
  switch (action) {
    case react_big_calendar_esm_navigate.PREVIOUS:
      return localizer.add(date, -length, 'day');
    case react_big_calendar_esm_navigate.NEXT:
      return localizer.add(date, length, 'day');
    default:
      return date;
  }
};
Agenda.title = function (start, _ref4) {
  var _ref4$length = _ref4.length,
    length = _ref4$length === void 0 ? Agenda.defaultProps.length : _ref4$length,
    localizer = _ref4.localizer;
  var end = localizer.add(start, length, 'day');
  return localizer.format({
    start: start,
    end: end
  }, 'agendaHeaderFormat');
};
var _VIEWS;
var VIEWS = (_VIEWS = {}, (0,defineProperty/* default */.A)(_VIEWS, views.MONTH, MonthView), (0,defineProperty/* default */.A)(_VIEWS, views.WEEK, Week), (0,defineProperty/* default */.A)(_VIEWS, views.WORK_WEEK, WorkWeek), (0,defineProperty/* default */.A)(_VIEWS, views.DAY, Day), (0,defineProperty/* default */.A)(_VIEWS, views.AGENDA, Agenda), _VIEWS);
var _excluded$1 = ["action", "date", "today"];
function moveDate(View, _ref) {
  var action = _ref.action,
    date = _ref.date,
    today = _ref.today,
    props = (0,objectWithoutProperties/* default */.A)(_ref, _excluded$1);
  View = typeof View === 'string' ? VIEWS[View] : View;
  switch (action) {
    case react_big_calendar_esm_navigate.TODAY:
      date = today || new Date();
      break;
    case react_big_calendar_esm_navigate.DATE:
      break;
    default:
      browser_default()(View && typeof View.navigate === 'function', 'Calendar View components must implement a static `.navigate(date, action)` method.s');
      date = View.navigate(date, action, props);
  }
  return date;
}
var Toolbar = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.A)(Toolbar, _React$Component);
  var _super = (0,createSuper/* default */.A)(Toolbar);
  function Toolbar() {
    var _this;
    (0,classCallCheck/* default */.A)(this, Toolbar);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.navigate = function (action) {
      _this.props.onNavigate(action);
    };
    _this.view = function (view) {
      _this.props.onView(view);
    };
    return _this;
  }
  (0,createClass/* default */.A)(Toolbar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        messages = _this$props.localizer.messages,
        label = _this$props.label;
      return /*#__PURE__*/react.createElement("div", {
        className: "rbc-toolbar"
      }, /*#__PURE__*/react.createElement("span", {
        className: "rbc-btn-group"
      }, /*#__PURE__*/react.createElement("button", {
        type: "button",
        onClick: this.navigate.bind(null, react_big_calendar_esm_navigate.TODAY)
      }, messages.today), /*#__PURE__*/react.createElement("button", {
        type: "button",
        onClick: this.navigate.bind(null, react_big_calendar_esm_navigate.PREVIOUS)
      }, messages.previous), /*#__PURE__*/react.createElement("button", {
        type: "button",
        onClick: this.navigate.bind(null, react_big_calendar_esm_navigate.NEXT)
      }, messages.next)), /*#__PURE__*/react.createElement("span", {
        className: "rbc-toolbar-label"
      }, label), /*#__PURE__*/react.createElement("span", {
        className: "rbc-btn-group"
      }, this.viewNamesGroup(messages)));
    }
  }, {
    key: "viewNamesGroup",
    value: function viewNamesGroup(messages) {
      var _this2 = this;
      var viewNames = this.props.views;
      var view = this.props.view;
      if (viewNames.length > 1) {
        return viewNames.map(function (name) {
          return /*#__PURE__*/react.createElement("button", {
            type: "button",
            key: name,
            className: clsx_m({
              'rbc-active': view === name
            }),
            onClick: _this2.view.bind(null, name)
          }, messages[name]);
        });
      }
    }
  }]);
  return Toolbar;
}(react.Component);

/**
 * Retrieve via an accessor-like property
 *
 *    accessor(obj, 'name')   // => retrieves obj['name']
 *    accessor(data, func)    // => retrieves func(data)
 *    ... otherwise null
 */
function accessor(data, field) {
  var value = null;
  if (typeof field === 'function') value = field(data);else if (typeof field === 'string' && (0,esm_typeof/* default */.A)(data) === 'object' && data != null && field in data) value = data[field];
  return value;
}
var wrapAccessor = function wrapAccessor(acc) {
  return function (data) {
    return accessor(data, acc);
  };
};
var _excluded = ["view", "date", "getNow", "onNavigate"],
  _excluded2 = ["view", "toolbar", "events", "backgroundEvents", "style", "className", "elementProps", "date", "getNow", "length", "showMultiDayTimes", "onShowMore", "doShowMoreDrillDown", "components", "formats", "messages", "culture"];
function viewNames(_views) {
  if (Array.isArray(_views)) {
    return _views;
  }
  var views = [];
  for (var _i = 0, _Object$entries = Object.entries(_views); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = (0,slicedToArray/* default */.A)(_Object$entries[_i], 2),
      key = _Object$entries$_i[0],
      value = _Object$entries$_i[1];
    if (value) {
      views.push(key);
    }
  }
  return views;
}
function isValidView(view, _ref) {
  var _views = _ref.views;
  var names = viewNames(_views);
  return names.indexOf(view) !== -1;
}
var Calendar = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.A)(Calendar, _React$Component);
  var _super = (0,createSuper/* default */.A)(Calendar);
  function Calendar() {
    var _this;
    (0,classCallCheck/* default */.A)(this, Calendar);
    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(_args));
    _this.getViews = function () {
      var views = _this.props.views;
      if (Array.isArray(views)) {
        return lodash_es_transform(views, function (obj, name) {
          return obj[name] = VIEWS[name];
        }, {});
      }
      if ((0,esm_typeof/* default */.A)(views) === 'object') {
        return lodash_es_mapValues(views, function (value, key) {
          if (value === true) {
            return VIEWS[key];
          }
          return value;
        });
      }
      return VIEWS;
    };
    _this.getView = function () {
      var views = _this.getViews();
      return views[_this.props.view];
    };
    _this.getDrilldownView = function (date) {
      var _this$props = _this.props,
        view = _this$props.view,
        drilldownView = _this$props.drilldownView,
        getDrilldownView = _this$props.getDrilldownView;
      if (!getDrilldownView) return drilldownView;
      return getDrilldownView(date, view, Object.keys(_this.getViews()));
    };
    _this.handleRangeChange = function (date, viewComponent, view) {
      var _this$props2 = _this.props,
        onRangeChange = _this$props2.onRangeChange,
        localizer = _this$props2.localizer;
      if (onRangeChange) {
        if (viewComponent.range) {
          onRangeChange(viewComponent.range(date, {
            localizer: localizer
          }), view);
        } else {
          if (false) {}
        }
      }
    };
    _this.handleNavigate = function (action, newDate) {
      var _this$props3 = _this.props,
        view = _this$props3.view,
        date = _this$props3.date,
        getNow = _this$props3.getNow,
        onNavigate = _this$props3.onNavigate,
        props = (0,objectWithoutProperties/* default */.A)(_this$props3, _excluded);
      var ViewComponent = _this.getView();
      var today = getNow();
      date = moveDate(ViewComponent, (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, props), {}, {
        action: action,
        date: newDate || date || today,
        today: today
      }));
      onNavigate(date, view, action);
      _this.handleRangeChange(date, ViewComponent);
    };
    _this.handleViewChange = function (view) {
      if (view !== _this.props.view && isValidView(view, _this.props)) {
        _this.props.onView(view);
      }
      var views = _this.getViews();
      _this.handleRangeChange(_this.props.date || _this.props.getNow(), views[view], view);
    };
    _this.handleSelectEvent = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      notify(_this.props.onSelectEvent, args);
    };
    _this.handleDoubleClickEvent = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      notify(_this.props.onDoubleClickEvent, args);
    };
    _this.handleKeyPressEvent = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      notify(_this.props.onKeyPressEvent, args);
    };
    _this.handleSelectSlot = function (slotInfo) {
      notify(_this.props.onSelectSlot, slotInfo);
    };
    _this.handleDrillDown = function (date, view) {
      var onDrillDown = _this.props.onDrillDown;
      if (onDrillDown) {
        onDrillDown(date, view, _this.drilldownView);
        return;
      }
      if (view) _this.handleViewChange(view);
      _this.handleNavigate(react_big_calendar_esm_navigate.DATE, date);
    };
    _this.state = {
      context: Calendar.getContext(_this.props)
    };
    return _this;
  }
  (0,createClass/* default */.A)(Calendar, [{
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
        view = _this$props4.view,
        toolbar = _this$props4.toolbar,
        events = _this$props4.events,
        backgroundEvents = _this$props4.backgroundEvents,
        style = _this$props4.style,
        className = _this$props4.className,
        elementProps = _this$props4.elementProps,
        current = _this$props4.date,
        getNow = _this$props4.getNow,
        length = _this$props4.length,
        showMultiDayTimes = _this$props4.showMultiDayTimes,
        onShowMore = _this$props4.onShowMore,
        doShowMoreDrillDown = _this$props4.doShowMoreDrillDown;
      _this$props4.components;
      _this$props4.formats;
      _this$props4.messages;
      _this$props4.culture;
      var props = (0,objectWithoutProperties/* default */.A)(_this$props4, _excluded2);
      current = current || getNow();
      var View = this.getView();
      var _this$state$context = this.state.context,
        accessors = _this$state$context.accessors,
        components = _this$state$context.components,
        getters = _this$state$context.getters,
        localizer = _this$state$context.localizer,
        viewNames = _this$state$context.viewNames;
      var CalToolbar = components.toolbar || Toolbar;
      var label = View.title(current, {
        localizer: localizer,
        length: length
      });
      return /*#__PURE__*/react.createElement("div", Object.assign({}, elementProps, {
        className: clsx_m(className, 'rbc-calendar', props.rtl && 'rbc-rtl'),
        style: style
      }), toolbar && /*#__PURE__*/react.createElement(CalToolbar, {
        date: current,
        view: view,
        views: viewNames,
        label: label,
        onView: this.handleViewChange,
        onNavigate: this.handleNavigate,
        localizer: localizer
      }), /*#__PURE__*/react.createElement(View, Object.assign({}, props, {
        events: events,
        backgroundEvents: backgroundEvents,
        date: current,
        getNow: getNow,
        length: length,
        localizer: localizer,
        getters: getters,
        components: components,
        accessors: accessors,
        showMultiDayTimes: showMultiDayTimes,
        getDrilldownView: this.getDrilldownView,
        onNavigate: this.handleNavigate,
        onDrillDown: this.handleDrillDown,
        onSelectEvent: this.handleSelectEvent,
        onDoubleClickEvent: this.handleDoubleClickEvent,
        onKeyPressEvent: this.handleKeyPressEvent,
        onSelectSlot: this.handleSelectSlot,
        onShowMore: onShowMore,
        doShowMoreDrillDown: doShowMoreDrillDown
      })));
    }

    /**
     *
     * @param date
     * @param viewComponent
     * @param {'month'|'week'|'work_week'|'day'|'agenda'} [view] - optional
     * parameter. It appears when range change on view changing. It could be handy
     * when you need to have both: range and view type at once, i.e. for manage rbc
     * state via url
     */
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      return {
        context: Calendar.getContext(nextProps)
      };
    }
  }, {
    key: "getContext",
    value: function getContext(_ref2) {
      var startAccessor = _ref2.startAccessor,
        endAccessor = _ref2.endAccessor,
        allDayAccessor = _ref2.allDayAccessor,
        tooltipAccessor = _ref2.tooltipAccessor,
        titleAccessor = _ref2.titleAccessor,
        resourceAccessor = _ref2.resourceAccessor,
        resourceIdAccessor = _ref2.resourceIdAccessor,
        resourceTitleAccessor = _ref2.resourceTitleAccessor,
        eventPropGetter = _ref2.eventPropGetter,
        backgroundEventPropGetter = _ref2.backgroundEventPropGetter,
        slotPropGetter = _ref2.slotPropGetter,
        slotGroupPropGetter = _ref2.slotGroupPropGetter,
        dayPropGetter = _ref2.dayPropGetter,
        view = _ref2.view,
        views = _ref2.views,
        localizer = _ref2.localizer,
        culture = _ref2.culture,
        _ref2$messages = _ref2.messages,
        messages$1 = _ref2$messages === void 0 ? {} : _ref2$messages,
        _ref2$components = _ref2.components,
        components = _ref2$components === void 0 ? {} : _ref2$components,
        _ref2$formats = _ref2.formats,
        formats = _ref2$formats === void 0 ? {} : _ref2$formats;
      var names = viewNames(views);
      var msgs = messages(messages$1);
      return {
        viewNames: names,
        localizer: mergeWithDefaults(localizer, culture, formats, msgs),
        getters: {
          eventProp: function eventProp() {
            return eventPropGetter && eventPropGetter.apply(void 0, arguments) || {};
          },
          backgroundEventProp: function backgroundEventProp() {
            return backgroundEventPropGetter && backgroundEventPropGetter.apply(void 0, arguments) || {};
          },
          slotProp: function slotProp() {
            return slotPropGetter && slotPropGetter.apply(void 0, arguments) || {};
          },
          slotGroupProp: function slotGroupProp() {
            return slotGroupPropGetter && slotGroupPropGetter.apply(void 0, arguments) || {};
          },
          dayProp: function dayProp() {
            return dayPropGetter && dayPropGetter.apply(void 0, arguments) || {};
          }
        },
        components: lodash_es_defaults(components[view] || {}, lodash_es_omit(components, names), {
          eventWrapper: NoopWrapper,
          backgroundEventWrapper: NoopWrapper,
          eventContainerWrapper: NoopWrapper,
          dateCellWrapper: NoopWrapper,
          weekWrapper: NoopWrapper,
          timeSlotWrapper: NoopWrapper,
          timeGutterWrapper: NoopWrapper
        }),
        accessors: {
          start: wrapAccessor(startAccessor),
          end: wrapAccessor(endAccessor),
          allDay: wrapAccessor(allDayAccessor),
          tooltip: wrapAccessor(tooltipAccessor),
          title: wrapAccessor(titleAccessor),
          resource: wrapAccessor(resourceAccessor),
          resourceId: wrapAccessor(resourceIdAccessor),
          resourceTitle: wrapAccessor(resourceTitleAccessor)
        }
      };
    }
  }]);
  return Calendar;
}(react.Component);
Calendar.defaultProps = {
  events: [],
  backgroundEvents: [],
  elementProps: {},
  popup: false,
  toolbar: true,
  view: views.MONTH,
  views: [views.MONTH, views.WEEK, views.DAY, views.AGENDA],
  step: 30,
  length: 30,
  allDayMaxRows: Infinity,
  doShowMoreDrillDown: true,
  drilldownView: views.DAY,
  titleAccessor: 'title',
  tooltipAccessor: 'title',
  allDayAccessor: 'allDay',
  startAccessor: 'start',
  endAccessor: 'end',
  resourceAccessor: 'resourceId',
  resourceIdAccessor: 'id',
  resourceTitleAccessor: 'title',
  longPressThreshold: 250,
  getNow: function getNow() {
    return new Date();
  },
  dayLayoutAlgorithm: 'overlap'
};
var Calendar$1 = uncontrollable(Calendar, {
  view: 'onView',
  date: 'onNavigate',
  selected: 'onSelectEvent'
});
var weekRangeFormat$5 = function weekRangeFormat(_ref, culture, local) {
  var start = _ref.start,
    end = _ref.end;
  return local.format(start, 'MMMM DD', culture) + ' – ' +
  // updated to use this localizer 'eq()' method
  local.format(end, local.eq(start, end, 'month') ? 'DD' : 'MMMM DD', culture);
};
var dateRangeFormat$5 = function dateRangeFormat(_ref2, culture, local) {
  var start = _ref2.start,
    end = _ref2.end;
  return local.format(start, 'L', culture) + ' – ' + local.format(end, 'L', culture);
};
var timeRangeFormat$5 = function timeRangeFormat(_ref3, culture, local) {
  var start = _ref3.start,
    end = _ref3.end;
  return local.format(start, 'LT', culture) + ' – ' + local.format(end, 'LT', culture);
};
var timeRangeStartFormat$5 = function timeRangeStartFormat(_ref4, culture, local) {
  var start = _ref4.start;
  return local.format(start, 'LT', culture) + ' – ';
};
var timeRangeEndFormat$5 = function timeRangeEndFormat(_ref5, culture, local) {
  var end = _ref5.end;
  return ' – ' + local.format(end, 'LT', culture);
};
var formats$5 = {
  dateFormat: 'DD',
  dayFormat: 'DD ddd',
  weekdayFormat: 'ddd',
  selectRangeFormat: timeRangeFormat$5,
  eventTimeRangeFormat: timeRangeFormat$5,
  eventTimeRangeStartFormat: timeRangeStartFormat$5,
  eventTimeRangeEndFormat: timeRangeEndFormat$5,
  timeGutterFormat: 'LT',
  monthHeaderFormat: 'MMMM YYYY',
  dayHeaderFormat: 'dddd MMM DD',
  dayRangeHeaderFormat: weekRangeFormat$5,
  agendaHeaderFormat: dateRangeFormat$5,
  agendaDateFormat: 'ddd MMM DD',
  agendaTimeFormat: 'LT',
  agendaTimeRangeFormat: timeRangeFormat$5
};
function fixUnit$2(unit) {
  var datePart = unit ? unit.toLowerCase() : unit;
  if (datePart === 'FullYear') {
    datePart = 'year';
  } else if (!datePart) {
    datePart = undefined;
  }
  return datePart;
}
function moment(moment) {
  var locale = function locale(m, c) {
    return c ? m.locale(c) : m;
  };
  function getTimezoneOffset(date) {
    // ensures this gets cast to timezone
    return moment(date).toDate().getTimezoneOffset();
  }
  function getDstOffset(start, end) {
    var _st$_z$name, _st$_z;
    // convert to moment, in case
    // Calculate the offset in the timezone of the Events (local)
    // not in the timezone of the calendar (moment.tz)
    var st = moment(start).local();
    var ed = moment(end).local();
    // if not using moment timezone
    if (!moment.tz) {
      return st.toDate().getTimezoneOffset() - ed.toDate().getTimezoneOffset();
    }
    /**
     * If using moment-timezone, and a timezone has been applied, then
     * use this to get the proper timezone offset, otherwise default
     * the timezone to the browser local
     */
    var tzName = (_st$_z$name = st === null || st === void 0 ? void 0 : (_st$_z = st._z) === null || _st$_z === void 0 ? void 0 : _st$_z.name) !== null && _st$_z$name !== void 0 ? _st$_z$name : moment.tz.guess();
    var startOffset = moment.tz.zone(tzName).utcOffset(+st);
    var endOffset = moment.tz.zone(tzName).utcOffset(+ed);
    return startOffset - endOffset;
  }
  function getDayStartDstOffset(start) {
    var dayStart = moment(start).startOf('day');
    return getDstOffset(dayStart, start);
  }

  /*** BEGIN localized date arithmetic methods with moment ***/
  function defineComparators(a, b, unit) {
    var datePart = fixUnit$2(unit);
    var dtA = datePart ? moment(a).startOf(datePart) : moment(a);
    var dtB = datePart ? moment(b).startOf(datePart) : moment(b);
    return [dtA, dtB, datePart];
  }
  function startOf() {
    var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var unit = arguments.length > 1 ? arguments[1] : undefined;
    var datePart = fixUnit$2(unit);
    if (datePart) {
      return moment(date).startOf(datePart).toDate();
    }
    return moment(date).toDate();
  }
  function endOf() {
    var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var unit = arguments.length > 1 ? arguments[1] : undefined;
    var datePart = fixUnit$2(unit);
    if (datePart) {
      return moment(date).endOf(datePart).toDate();
    }
    return moment(date).toDate();
  }

  // moment comparison operations *always* convert both sides to moment objects
  // prior to running the comparisons
  function eq(a, b, unit) {
    var _defineComparators = defineComparators(a, b, unit),
      _defineComparators2 = (0,slicedToArray/* default */.A)(_defineComparators, 3),
      dtA = _defineComparators2[0],
      dtB = _defineComparators2[1],
      datePart = _defineComparators2[2];
    return dtA.isSame(dtB, datePart);
  }
  function neq(a, b, unit) {
    return !eq(a, b, unit);
  }
  function gt(a, b, unit) {
    var _defineComparators3 = defineComparators(a, b, unit),
      _defineComparators4 = (0,slicedToArray/* default */.A)(_defineComparators3, 3),
      dtA = _defineComparators4[0],
      dtB = _defineComparators4[1],
      datePart = _defineComparators4[2];
    return dtA.isAfter(dtB, datePart);
  }
  function lt(a, b, unit) {
    var _defineComparators5 = defineComparators(a, b, unit),
      _defineComparators6 = (0,slicedToArray/* default */.A)(_defineComparators5, 3),
      dtA = _defineComparators6[0],
      dtB = _defineComparators6[1],
      datePart = _defineComparators6[2];
    return dtA.isBefore(dtB, datePart);
  }
  function gte(a, b, unit) {
    var _defineComparators7 = defineComparators(a, b, unit),
      _defineComparators8 = (0,slicedToArray/* default */.A)(_defineComparators7, 3),
      dtA = _defineComparators8[0],
      dtB = _defineComparators8[1],
      datePart = _defineComparators8[2];
    return dtA.isSameOrBefore(dtB, datePart);
  }
  function lte(a, b, unit) {
    var _defineComparators9 = defineComparators(a, b, unit),
      _defineComparators10 = (0,slicedToArray/* default */.A)(_defineComparators9, 3),
      dtA = _defineComparators10[0],
      dtB = _defineComparators10[1],
      datePart = _defineComparators10[2];
    return dtA.isSameOrBefore(dtB, datePart);
  }
  function inRange(day, min, max) {
    var unit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'day';
    var datePart = fixUnit$2(unit);
    var mDay = moment(day);
    var mMin = moment(min);
    var mMax = moment(max);
    return mDay.isBetween(mMin, mMax, datePart, '[]');
  }
  function min(dateA, dateB) {
    var dtA = moment(dateA);
    var dtB = moment(dateB);
    var minDt = moment.min(dtA, dtB);
    return minDt.toDate();
  }
  function max(dateA, dateB) {
    var dtA = moment(dateA);
    var dtB = moment(dateB);
    var maxDt = moment.max(dtA, dtB);
    return maxDt.toDate();
  }
  function merge(date, time) {
    if (!date && !time) return null;
    var tm = moment(time).format('HH:mm:ss');
    var dt = moment(date).startOf('day').format('MM/DD/YYYY');
    // We do it this way to avoid issues when timezone switching
    return moment("".concat(dt, " ").concat(tm), 'MM/DD/YYYY HH:mm:ss').toDate();
  }
  function add(date, adder, unit) {
    var datePart = fixUnit$2(unit);
    return moment(date).add(adder, datePart).toDate();
  }
  function range(start, end) {
    var unit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'day';
    var datePart = fixUnit$2(unit);
    // because the add method will put these in tz, we have to start that way
    var current = moment(start).toDate();
    var days = [];
    while (lte(current, end)) {
      days.push(current);
      current = add(current, 1, datePart);
    }
    return days;
  }
  function ceil(date, unit) {
    var datePart = fixUnit$2(unit);
    var floor = startOf(date, datePart);
    return eq(floor, date) ? floor : add(floor, 1, datePart);
  }
  function diff(a, b) {
    var unit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'day';
    var datePart = fixUnit$2(unit);
    // don't use 'defineComparators' here, as we don't want to mutate the values
    var dtA = moment(a);
    var dtB = moment(b);
    return dtB.diff(dtA, datePart);
  }
  function minutes(date) {
    var dt = moment(date);
    return dt.minutes();
  }
  function firstOfWeek(culture) {
    var data = culture ? moment.localeData(culture) : moment.localeData();
    return data ? data.firstDayOfWeek() : 0;
  }
  function firstVisibleDay(date) {
    return moment(date).startOf('month').startOf('week').toDate();
  }
  function lastVisibleDay(date) {
    return moment(date).endOf('month').endOf('week').toDate();
  }
  function visibleDays(date) {
    var current = firstVisibleDay(date);
    var last = lastVisibleDay(date);
    var days = [];
    while (lte(current, last)) {
      days.push(current);
      current = add(current, 1, 'd');
    }
    return days;
  }
  /*** END localized date arithmetic methods with moment ***/

  /**
   * Moved from TimeSlots.js, this method overrides the method of the same name
   * in the localizer.js, using moment to construct the js Date
   * @param {Date} dt - date to start with
   * @param {Number} minutesFromMidnight
   * @param {Number} offset
   * @returns {Date}
   */
  function getSlotDate(dt, minutesFromMidnight, offset) {
    return moment(dt).startOf('day').minute(minutesFromMidnight + offset).toDate();
  }

  // moment will automatically handle DST differences in it's calculations
  function getTotalMin(start, end) {
    return diff(start, end, 'minutes');
  }
  function getMinutesFromMidnight(start) {
    var dayStart = moment(start).startOf('day');
    var day = moment(start);
    return day.diff(dayStart, 'minutes') + getDayStartDstOffset(start);
  }

  // These two are used by DateSlotMetrics
  function continuesPrior(start, first) {
    var mStart = moment(start);
    var mFirst = moment(first);
    return mStart.isBefore(mFirst, 'day');
  }
  function continuesAfter(start, end, last) {
    var mEnd = moment(end);
    var mLast = moment(last);
    return mEnd.isSameOrAfter(mLast, 'minutes');
  }

  // These two are used by eventLevels
  function sortEvents(_ref6) {
    var _ref6$evtA = _ref6.evtA,
      aStart = _ref6$evtA.start,
      aEnd = _ref6$evtA.end,
      aAllDay = _ref6$evtA.allDay,
      _ref6$evtB = _ref6.evtB,
      bStart = _ref6$evtB.start,
      bEnd = _ref6$evtB.end,
      bAllDay = _ref6$evtB.allDay;
    var startSort = +startOf(aStart, 'day') - +startOf(bStart, 'day');
    var durA = diff(aStart, ceil(aEnd, 'day'), 'day');
    var durB = diff(bStart, ceil(bEnd, 'day'), 'day');
    return startSort ||
    // sort by start Day first
    Math.max(durB, 1) - Math.max(durA, 1) ||
    // events spanning multiple days go first
    !!bAllDay - !!aAllDay ||
    // then allDay single day events
    +aStart - +bStart ||
    // then sort by start time *don't need moment conversion here
    +aEnd - +bEnd // then sort by end time *don't need moment conversion here either
    ;
  }

  function inEventRange(_ref7) {
    var _ref7$event = _ref7.event,
      start = _ref7$event.start,
      end = _ref7$event.end,
      _ref7$range = _ref7.range,
      rangeStart = _ref7$range.start,
      rangeEnd = _ref7$range.end;
    var startOfDay = moment(start).startOf('day');
    var eEnd = moment(end);
    var rStart = moment(rangeStart);
    var rEnd = moment(rangeEnd);
    var startsBeforeEnd = startOfDay.isSameOrBefore(rEnd, 'day');
    // when the event is zero duration we need to handle a bit differently
    var sameMin = !startOfDay.isSame(eEnd, 'minutes');
    var endsAfterStart = sameMin ? eEnd.isAfter(rStart, 'minutes') : eEnd.isSameOrAfter(rStart, 'minutes');
    return startsBeforeEnd && endsAfterStart;
  }
  function isSameDate(date1, date2) {
    var dt = moment(date1);
    var dt2 = moment(date2);
    return dt.isSame(dt2, 'day');
  }

  /**
   * This method, called once in the localizer constructor, is used by eventLevels
   * 'eventSegments()' to assist in determining the 'span' of the event in the display,
   * specifically when using a timezone that is greater than the browser native timezone.
   * @returns number
   */
  function browserTZOffset() {
    /**
     * Date.prototype.getTimezoneOffset horrifically flips the positive/negative from
     * what you see in it's string, so we have to jump through some hoops to get a value
     * we can actually compare.
     */
    var dt = new Date();
    var neg = /-/.test(dt.toString()) ? '-' : '';
    var dtOffset = dt.getTimezoneOffset();
    var comparator = Number("".concat(neg).concat(Math.abs(dtOffset)));
    // moment correctly provides positive/negative offset, as expected
    var mtOffset = moment().utcOffset();
    return mtOffset > comparator ? 1 : 0;
  }
  return new DateLocalizer({
    formats: formats$5,
    firstOfWeek: firstOfWeek,
    firstVisibleDay: firstVisibleDay,
    lastVisibleDay: lastVisibleDay,
    visibleDays: visibleDays,
    format: function format(value, _format, culture) {
      return locale(moment(value), culture).format(_format);
    },
    lt: lt,
    lte: lte,
    gt: gt,
    gte: gte,
    eq: eq,
    neq: neq,
    merge: merge,
    inRange: inRange,
    startOf: startOf,
    endOf: endOf,
    range: range,
    add: add,
    diff: diff,
    ceil: ceil,
    min: min,
    max: max,
    minutes: minutes,
    getSlotDate: getSlotDate,
    getTimezoneOffset: getTimezoneOffset,
    getDstOffset: getDstOffset,
    getTotalMin: getTotalMin,
    getMinutesFromMidnight: getMinutesFromMidnight,
    continuesPrior: continuesPrior,
    continuesAfter: continuesAfter,
    sortEvents: sortEvents,
    inEventRange: inEventRange,
    isSameDate: isSameDate,
    browserTZOffset: browserTZOffset
  });
}
function pluralizeUnit(unit) {
  return /s$/.test(unit) ? unit : unit + 's';
}
var weekRangeFormat$4 = function weekRangeFormat(_ref, culture, local) {
  var start = _ref.start,
    end = _ref.end;
  return local.format(start, 'MMMM dd', culture) + ' – ' +
  // updated to use this localizer 'eq()' method
  local.format(end, local.eq(start, end, 'month') ? 'dd' : 'MMMM dd', culture);
};
var dateRangeFormat$4 = function dateRangeFormat(_ref2, culture, local) {
  var start = _ref2.start,
    end = _ref2.end;
  return local.format(start, 'D', culture) + ' – ' + local.format(end, 'D', culture);
};
var timeRangeFormat$4 = function timeRangeFormat(_ref3, culture, local) {
  var start = _ref3.start,
    end = _ref3.end;
  return local.format(start, 't', culture) + ' – ' + local.format(end, 't', culture);
};
var timeRangeStartFormat$4 = function timeRangeStartFormat(_ref4, culture, local) {
  var start = _ref4.start;
  return local.format(start, 't', culture) + ' – ';
};
var timeRangeEndFormat$4 = function timeRangeEndFormat(_ref5, culture, local) {
  var end = _ref5.end;
  return ' – ' + local.format(end, 't', culture);
};
var formats$4 = {
  dateFormat: 'dd',
  dayFormat: 'dd EEE',
  weekdayFormat: 'EEE',
  selectRangeFormat: timeRangeFormat$4,
  eventTimeRangeFormat: timeRangeFormat$4,
  eventTimeRangeStartFormat: timeRangeStartFormat$4,
  eventTimeRangeEndFormat: timeRangeEndFormat$4,
  timeGutterFormat: 't',
  monthHeaderFormat: 'MMMM yyyy',
  dayHeaderFormat: 'EEEE MMM dd',
  dayRangeHeaderFormat: weekRangeFormat$4,
  agendaHeaderFormat: dateRangeFormat$4,
  agendaDateFormat: 'EEE MMM dd',
  agendaTimeFormat: 't',
  agendaTimeRangeFormat: timeRangeFormat$4
};
function fixUnit$1(unit) {
  var datePart = unit ? pluralizeUnit(unit.toLowerCase()) : unit;
  if (datePart === 'FullYear') {
    datePart = 'year';
  } else if (!datePart) {
    datePart = undefined;
  }
  return datePart;
}

// Luxon does not currently have weekInfo by culture
// Luxon uses 1 based values for month and weekday
// So we default to Sunday (7)
function luxon(DateTime) {
  var _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref6$firstDayOfWeek = _ref6.firstDayOfWeek,
    firstDayOfWeek = _ref6$firstDayOfWeek === void 0 ? 7 : _ref6$firstDayOfWeek;
  function formatDate(value, format) {
    return DateTime.fromJSDate(value).toFormat(format);
  }
  function formatDateWithCulture(value, culture, format) {
    return DateTime.fromJSDate(value).setLocale(culture).toFormat(format);
  }

  /*** BEGIN localized date arithmetic methods with Luxon ***/
  function defineComparators(a, b, unit) {
    var datePart = fixUnit$1(unit);
    var dtA = datePart ? DateTime.fromJSDate(a).startOf(datePart) : DateTime.fromJSDate(a);
    var dtB = datePart ? DateTime.fromJSDate(b).startOf(datePart) : DateTime.fromJSDate(b);
    return [dtA, dtB, datePart];
  }

  // Since Luxon (and current Intl API) has no support
  // for culture based weekInfo, we need to handle
  // the start of the week differently
  // depending on locale, the firstDayOfWeek could also be Saturday, Sunday or Monday
  function startOfDTWeek(dtObj) {
    var weekday = dtObj.weekday;
    if (weekday === firstDayOfWeek) {
      return dtObj.startOf('day'); // already beginning of week
    } else if (firstDayOfWeek === 1) {
      return dtObj.startOf('week'); // fow is Monday, which is Luxon default
    }

    var diff = firstDayOfWeek === 7 ? weekday : weekday + (7 - firstDayOfWeek);
    return dtObj.minus({
      day: diff
    }).startOf('day');
  }
  function endOfDTWeek(dtObj) {
    var weekday = dtObj.weekday;
    var eow = firstDayOfWeek === 1 ? 7 : firstDayOfWeek - 1;
    if (weekday === eow) {
      return dtObj.endOf('day'); // already last day of the week
    } else if (firstDayOfWeek === 1) {
      return dtObj.endOf('week'); // use Luxon default (Sunday)
    }

    var fromDate = firstDayOfWeek > eow ? dtObj.plus({
      day: firstDayOfWeek - eow
    }) : dtObj;
    return fromDate.set({
      weekday: eow
    }).endOf('day');
  }

  // This returns a DateTime instance
  function startOfDT() {
    var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
    var unit = arguments.length > 1 ? arguments[1] : undefined;
    var datePart = fixUnit$1(unit);
    if (datePart) {
      var dt = DateTime.fromJSDate(date);
      return datePart.includes('week') ? startOfDTWeek(dt) : dt.startOf(datePart);
    }
    return DateTime.fromJSDate(date);
  }
  function firstOfWeek() {
    return firstDayOfWeek;
  }

  // This returns a JS Date from a DateTime instance
  function startOf() {
    var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
    var unit = arguments.length > 1 ? arguments[1] : undefined;
    return startOfDT(date, unit).toJSDate();
  }

  // This returns a DateTime instance
  function endOfDT() {
    var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
    var unit = arguments.length > 1 ? arguments[1] : undefined;
    var datePart = fixUnit$1(unit);
    if (datePart) {
      var dt = DateTime.fromJSDate(date);
      return datePart.includes('week') ? endOfDTWeek(dt) : dt.endOf(datePart);
    }
    return DateTime.fromJSDate(date);
  }
  function endOf() {
    var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
    var unit = arguments.length > 1 ? arguments[1] : undefined;
    return endOfDT(date, unit).toJSDate();
  }
  function eq(a, b, unit) {
    var _defineComparators = defineComparators(a, b, unit),
      _defineComparators2 = _slicedToArray(_defineComparators, 2),
      dtA = _defineComparators2[0],
      dtB = _defineComparators2[1];
    return +dtA == +dtB;
  }
  function neq(a, b, unit) {
    return !eq(a, b, unit);
  }
  function gt(a, b, unit) {
    var _defineComparators3 = defineComparators(a, b, unit),
      _defineComparators4 = _slicedToArray(_defineComparators3, 2),
      dtA = _defineComparators4[0],
      dtB = _defineComparators4[1];
    return +dtA > +dtB;
  }
  function lt(a, b, unit) {
    var _defineComparators5 = defineComparators(a, b, unit),
      _defineComparators6 = _slicedToArray(_defineComparators5, 2),
      dtA = _defineComparators6[0],
      dtB = _defineComparators6[1];
    return +dtA < +dtB;
  }
  function gte(a, b, unit) {
    var _defineComparators7 = defineComparators(a, b, unit),
      _defineComparators8 = _slicedToArray(_defineComparators7, 2),
      dtA = _defineComparators8[0],
      dtB = _defineComparators8[1];
    return +dtA >= +dtB;
  }
  function lte(a, b, unit) {
    var _defineComparators9 = defineComparators(a, b, unit),
      _defineComparators10 = _slicedToArray(_defineComparators9, 2),
      dtA = _defineComparators10[0],
      dtB = _defineComparators10[1];
    return +dtA <= +dtB;
  }
  function inRange(day, min, max) {
    var unit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'day';
    var datePart = fixUnit$1(unit);
    var mDay = startOfDT(day, datePart);
    var mMin = startOfDT(min, datePart);
    var mMax = startOfDT(max, datePart);
    return +mDay >= +mMin && +mDay <= +mMax;
  }
  function min(dateA, dateB) {
    var dtA = DateTime.fromJSDate(dateA);
    var dtB = DateTime.fromJSDate(dateB);
    var minDt = DateTime.min(dtA, dtB);
    return minDt.toJSDate();
  }
  function max(dateA, dateB) {
    var dtA = DateTime.fromJSDate(dateA);
    var dtB = DateTime.fromJSDate(dateB);
    var maxDt = DateTime.max(dtA, dtB);
    return maxDt.toJSDate();
  }
  function merge(date, time) {
    if (!date && !time) return null;
    var tm = DateTime.fromJSDate(time);
    var dt = startOfDT(date, 'day');
    return dt.set({
      hour: tm.hour,
      minute: tm.minute,
      second: tm.second,
      millisecond: tm.millisecond
    }).toJSDate();
  }
  function add(date, adder, unit) {
    var datePart = fixUnit$1(unit);
    return DateTime.fromJSDate(date).plus(_defineProperty({}, datePart, adder)).toJSDate();
  }
  function range(start, end) {
    var unit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'day';
    var datePart = fixUnit$1(unit);
    var current = DateTime.fromJSDate(start).toJSDate(); // this is to get it to tz
    var days = [];
    while (lte(current, end)) {
      days.push(current);
      current = add(current, 1, datePart);
    }
    return days;
  }
  function ceil(date, unit) {
    var datePart = fixUnit$1(unit);
    var floor = startOf(date, datePart);
    return eq(floor, date) ? floor : add(floor, 1, datePart);
  }
  function diff(a, b) {
    var unit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'day';
    var datePart = fixUnit$1(unit);
    // don't use 'defineComparators' here, as we don't want to mutate the values
    var dtA = DateTime.fromJSDate(a);
    var dtB = DateTime.fromJSDate(b);
    return Math.floor(dtB.diff(dtA, datePart, {
      conversionAccuracy: 'longterm'
    }).toObject()[datePart]);
  }
  function firstVisibleDay(date) {
    var startOfMonth = startOfDT(date, 'month');
    return startOfDTWeek(startOfMonth).toJSDate();
  }
  function lastVisibleDay(date) {
    var endOfMonth = endOfDT(date, 'month');
    return endOfDTWeek(endOfMonth).toJSDate();
  }
  function visibleDays(date) {
    var current = firstVisibleDay(date);
    var last = lastVisibleDay(date);
    var days = [];
    while (lte(current, last)) {
      days.push(current);
      current = add(current, 1, 'day');
    }
    return days;
  }
  /*** END localized date arithmetic methods with moment ***/

  /**
   * Moved from TimeSlots.js, this method overrides the method of the same name
   * in the localizer.js, using moment to construct the js Date
   * @param {Date} dt - date to start with
   * @param {Number} minutesFromMidnight
   * @param {Number} offset
   * @returns {Date}
   */
  function getSlotDate(dt, minutesFromMidnight, offset) {
    return startOfDT(dt, 'day').set({
      minutes: minutesFromMidnight + offset
    }).toJSDate();
  }

  // Luxon will automatically handle DST differences in it's calculations
  function getTotalMin(start, end) {
    return diff(start, end, 'minutes');
  }
  function getMinutesFromMidnight(start) {
    var dayStart = startOfDT(start, 'day');
    var day = DateTime.fromJSDate(start);
    return Math.round(day.diff(dayStart, 'minutes', {
      conversionAccuracy: 'longterm'
    }).toObject().minutes);
  }

  // These two are used by DateSlotMetrics
  function continuesPrior(start, first) {
    return lt(start, first);
  }
  function continuesAfter(start, end, last) {
    return gte(end, last);
  }

  // These two are used by eventLevels
  function sortEvents(_ref7) {
    var _ref7$evtA = _ref7.evtA,
      aStart = _ref7$evtA.start,
      aEnd = _ref7$evtA.end,
      aAllDay = _ref7$evtA.allDay,
      _ref7$evtB = _ref7.evtB,
      bStart = _ref7$evtB.start,
      bEnd = _ref7$evtB.end,
      bAllDay = _ref7$evtB.allDay;
    var startSort = +startOf(aStart, 'day') - +startOf(bStart, 'day');
    var durA = diff(aStart, ceil(aEnd, 'day'), 'day');
    var durB = diff(bStart, ceil(bEnd, 'day'), 'day');
    return startSort ||
    // sort by start Day first
    Math.max(durB, 1) - Math.max(durA, 1) ||
    // events spanning multiple days go first
    !!bAllDay - !!aAllDay ||
    // then allDay single day events
    +aStart - +bStart ||
    // then sort by start time *don't need moment conversion here
    +aEnd - +bEnd // then sort by end time *don't need moment conversion here either
    ;
  }

  function inEventRange(_ref8) {
    var _ref8$event = _ref8.event,
      start = _ref8$event.start,
      end = _ref8$event.end,
      _ref8$range = _ref8.range,
      rangeStart = _ref8$range.start,
      rangeEnd = _ref8$range.end;
    var eStart = startOf(start, 'day');
    var startsBeforeEnd = lte(eStart, rangeEnd, 'day');
    // when the event is zero duration we need to handle a bit differently
    var sameMin = neq(eStart, end, 'minutes');
    var endsAfterStart = sameMin ? gt(end, rangeStart, 'minutes') : gte(end, rangeStart, 'minutes');
    return startsBeforeEnd && endsAfterStart;
  }

  // moment treats 'day' and 'date' equality very different
  // moment(date1).isSame(date2, 'day') would test that they were both the same day of the week
  // moment(date1).isSame(date2, 'date') would test that they were both the same date of the month of the year
  function isSameDate(date1, date2) {
    var dt = DateTime.fromJSDate(date1);
    var dt2 = DateTime.fromJSDate(date2);
    return dt.hasSame(dt2, 'day');
  }

  /**
   * This method, called once in the localizer constructor, is used by eventLevels
   * 'eventSegments()' to assist in determining the 'span' of the event in the display,
   * specifically when using a timezone that is greater than the browser native timezone.
   * @returns number
   */
  function browserTZOffset() {
    /**
     * Date.prototype.getTimezoneOffset horrifically flips the positive/negative from
     * what you see in it's string, so we have to jump through some hoops to get a value
     * we can actually compare.
     */
    var dt = new Date();
    var neg = /-/.test(dt.toString()) ? '-' : '';
    var dtOffset = dt.getTimezoneOffset();
    var comparator = Number("".concat(neg).concat(Math.abs(dtOffset)));
    // moment correctly provides positive/negative offset, as expected
    var mtOffset = DateTime.local().offset;
    return mtOffset > comparator ? 1 : 0;
  }
  return new DateLocalizer({
    format: function format(value, _format, culture) {
      if (culture) {
        return formatDateWithCulture(value, culture, _format);
      }
      return formatDate(value, _format);
    },
    formats: formats$4,
    firstOfWeek: firstOfWeek,
    firstVisibleDay: firstVisibleDay,
    lastVisibleDay: lastVisibleDay,
    visibleDays: visibleDays,
    lt: lt,
    lte: lte,
    gt: gt,
    gte: gte,
    eq: eq,
    neq: neq,
    merge: merge,
    inRange: inRange,
    startOf: startOf,
    endOf: endOf,
    range: range,
    add: add,
    diff: diff,
    ceil: ceil,
    min: min,
    max: max,
    getSlotDate: getSlotDate,
    getTotalMin: getTotalMin,
    getMinutesFromMidnight: getMinutesFromMidnight,
    continuesPrior: continuesPrior,
    continuesAfter: continuesAfter,
    sortEvents: sortEvents,
    inEventRange: inEventRange,
    isSameDate: isSameDate,
    browserTZOffset: browserTZOffset
  });
}
var dateRangeFormat$3 = function dateRangeFormat(_ref, culture, local) {
  var start = _ref.start,
    end = _ref.end;
  return local.format(start, 'd', culture) + ' – ' + local.format(end, 'd', culture);
};
var timeRangeFormat$3 = function timeRangeFormat(_ref2, culture, local) {
  var start = _ref2.start,
    end = _ref2.end;
  return local.format(start, 't', culture) + ' – ' + local.format(end, 't', culture);
};
var timeRangeStartFormat$3 = function timeRangeStartFormat(_ref3, culture, local) {
  var start = _ref3.start;
  return local.format(start, 't', culture) + ' – ';
};
var timeRangeEndFormat$3 = function timeRangeEndFormat(_ref4, culture, local) {
  var end = _ref4.end;
  return ' – ' + local.format(end, 't', culture);
};
var weekRangeFormat$3 = function weekRangeFormat(_ref5, culture, local) {
  var start = _ref5.start,
    end = _ref5.end;
  return local.format(start, 'MMM dd', culture) + ' – ' + local.format(end, eq(start, end, 'month') ? 'dd' : 'MMM dd', culture);
};
var formats$3 = {
  dateFormat: 'dd',
  dayFormat: 'ddd dd/MM',
  weekdayFormat: 'ddd',
  selectRangeFormat: timeRangeFormat$3,
  eventTimeRangeFormat: timeRangeFormat$3,
  eventTimeRangeStartFormat: timeRangeStartFormat$3,
  eventTimeRangeEndFormat: timeRangeEndFormat$3,
  timeGutterFormat: 't',
  monthHeaderFormat: 'Y',
  dayHeaderFormat: 'dddd MMM dd',
  dayRangeHeaderFormat: weekRangeFormat$3,
  agendaHeaderFormat: dateRangeFormat$3,
  agendaDateFormat: 'ddd MMM dd',
  agendaTimeFormat: 't',
  agendaTimeRangeFormat: timeRangeFormat$3
};
function oldGlobalize(globalize) {
  function getCulture(culture) {
    return culture ? globalize.findClosestCulture(culture) : globalize.culture();
  }
  function firstOfWeek(culture) {
    culture = getCulture(culture);
    return culture && culture.calendar.firstDay || 0;
  }
  return new DateLocalizer({
    firstOfWeek: firstOfWeek,
    formats: formats$3,
    format: function format(value, _format, culture) {
      return globalize.format(value, _format, culture);
    }
  });
}
var dateRangeFormat$2 = function dateRangeFormat(_ref, culture, local) {
  var start = _ref.start,
    end = _ref.end;
  return local.format(start, {
    date: 'short'
  }, culture) + ' – ' + local.format(end, {
    date: 'short'
  }, culture);
};
var timeRangeFormat$2 = function timeRangeFormat(_ref2, culture, local) {
  var start = _ref2.start,
    end = _ref2.end;
  return local.format(start, {
    time: 'short'
  }, culture) + ' – ' + local.format(end, {
    time: 'short'
  }, culture);
};
var timeRangeStartFormat$2 = function timeRangeStartFormat(_ref3, culture, local) {
  var start = _ref3.start;
  return local.format(start, {
    time: 'short'
  }, culture) + ' – ';
};
var timeRangeEndFormat$2 = function timeRangeEndFormat(_ref4, culture, local) {
  var end = _ref4.end;
  return ' – ' + local.format(end, {
    time: 'short'
  }, culture);
};
var weekRangeFormat$2 = function weekRangeFormat(_ref5, culture, local) {
  var start = _ref5.start,
    end = _ref5.end;
  return local.format(start, 'MMM dd', culture) + ' – ' + local.format(end, eq(start, end, 'month') ? 'dd' : 'MMM dd', culture);
};
var formats$2 = {
  dateFormat: 'dd',
  dayFormat: 'eee dd/MM',
  weekdayFormat: 'eee',
  selectRangeFormat: timeRangeFormat$2,
  eventTimeRangeFormat: timeRangeFormat$2,
  eventTimeRangeStartFormat: timeRangeStartFormat$2,
  eventTimeRangeEndFormat: timeRangeEndFormat$2,
  timeGutterFormat: {
    time: 'short'
  },
  monthHeaderFormat: 'MMMM yyyy',
  dayHeaderFormat: 'eeee MMM dd',
  dayRangeHeaderFormat: weekRangeFormat$2,
  agendaHeaderFormat: dateRangeFormat$2,
  agendaDateFormat: 'eee MMM dd',
  agendaTimeFormat: {
    time: 'short'
  },
  agendaTimeRangeFormat: timeRangeFormat$2
};
function globalize(globalize) {
  var locale = function locale(culture) {
    return culture ? globalize(culture) : globalize;
  };

  // return the first day of the week from the locale data. Defaults to 'world'
  // territory if no territory is derivable from CLDR.
  // Failing to use CLDR supplemental (not loaded?), revert to the original
  // method of getting first day of week.
  function firstOfWeek(culture) {
    try {
      var days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
      var cldr = locale(culture).cldr;
      var territory = cldr.attributes.territory;
      var weekData = cldr.get('supplemental').weekData;
      var firstDay = weekData.firstDay[territory || '001'];
      return days.indexOf(firstDay);
    } catch (e) {
      if (false) {}
      // maybe cldr supplemental is not loaded? revert to original method
      var date = new Date();
      //cldr-data doesn't seem to be zero based
      var localeDay = Math.max(parseInt(locale(culture).formatDate(date, {
        raw: 'e'
      }), 10) - 1, 0);
      return Math.abs(date.getDay() - localeDay);
    }
  }
  if (!globalize.load) return oldGlobalize(globalize);
  return new DateLocalizer({
    firstOfWeek: firstOfWeek,
    formats: formats$2,
    format: function format(value, _format, culture) {
      _format = typeof _format === 'string' ? {
        raw: _format
      } : _format;
      return locale(culture).formatDate(value, _format);
    }
  });
}
var dateRangeFormat$1 = function dateRangeFormat(_ref, culture, local) {
  var start = _ref.start,
    end = _ref.end;
  return "".concat(local.format(start, 'P', culture), " \u2013 ").concat(local.format(end, 'P', culture));
};
var timeRangeFormat$1 = function timeRangeFormat(_ref2, culture, local) {
  var start = _ref2.start,
    end = _ref2.end;
  return "".concat(local.format(start, 'p', culture), " \u2013 ").concat(local.format(end, 'p', culture));
};
var timeRangeStartFormat$1 = function timeRangeStartFormat(_ref3, culture, local) {
  var start = _ref3.start;
  return "".concat(local.format(start, 'h:mma', culture), " \u2013 ");
};
var timeRangeEndFormat$1 = function timeRangeEndFormat(_ref4, culture, local) {
  var end = _ref4.end;
  return " \u2013 ".concat(local.format(end, 'h:mma', culture));
};
var weekRangeFormat$1 = function weekRangeFormat(_ref5, culture, local) {
  var start = _ref5.start,
    end = _ref5.end;
  return "".concat(local.format(start, 'MMMM dd', culture), " \u2013 ").concat(local.format(end, eq(start, end, 'month') ? 'dd' : 'MMMM dd', culture));
};
var formats$1 = {
  dateFormat: 'dd',
  dayFormat: 'dd eee',
  weekdayFormat: 'cccc',
  selectRangeFormat: timeRangeFormat$1,
  eventTimeRangeFormat: timeRangeFormat$1,
  eventTimeRangeStartFormat: timeRangeStartFormat$1,
  eventTimeRangeEndFormat: timeRangeEndFormat$1,
  timeGutterFormat: 'p',
  monthHeaderFormat: 'MMMM yyyy',
  dayHeaderFormat: 'cccc MMM dd',
  dayRangeHeaderFormat: weekRangeFormat$1,
  agendaHeaderFormat: dateRangeFormat$1,
  agendaDateFormat: 'ccc MMM dd',
  agendaTimeFormat: 'p',
  agendaTimeRangeFormat: timeRangeFormat$1
};
var dateFnsLocalizer = function dateFnsLocalizer(_ref6) {
  var startOfWeek = _ref6.startOfWeek,
    getDay = _ref6.getDay,
    _format = _ref6.format,
    locales = _ref6.locales;
  return new DateLocalizer({
    formats: formats$1,
    firstOfWeek: function firstOfWeek(culture) {
      return getDay(startOfWeek(new Date(), {
        locale: locales[culture]
      }));
    },
    format: function format(value, formatString, culture) {
      return _format(new Date(value), formatString, {
        locale: locales[culture]
      });
    }
  });
};
var weekRangeFormat = function weekRangeFormat(_ref, culture, local) {
  var start = _ref.start,
    end = _ref.end;
  return local.format(start, 'MMMM DD', culture) + ' – ' +
  // updated to use this localizer 'eq()' method
  local.format(end, local.eq(start, end, 'month') ? 'DD' : 'MMMM DD', culture);
};
var dateRangeFormat = function dateRangeFormat(_ref2, culture, local) {
  var start = _ref2.start,
    end = _ref2.end;
  return local.format(start, 'L', culture) + ' – ' + local.format(end, 'L', culture);
};
var timeRangeFormat = function timeRangeFormat(_ref3, culture, local) {
  var start = _ref3.start,
    end = _ref3.end;
  return local.format(start, 'LT', culture) + ' – ' + local.format(end, 'LT', culture);
};
var timeRangeStartFormat = function timeRangeStartFormat(_ref4, culture, local) {
  var start = _ref4.start;
  return local.format(start, 'LT', culture) + ' – ';
};
var timeRangeEndFormat = function timeRangeEndFormat(_ref5, culture, local) {
  var end = _ref5.end;
  return ' – ' + local.format(end, 'LT', culture);
};
var formats = {
  dateFormat: 'DD',
  dayFormat: 'DD ddd',
  weekdayFormat: 'ddd',
  selectRangeFormat: timeRangeFormat,
  eventTimeRangeFormat: timeRangeFormat,
  eventTimeRangeStartFormat: timeRangeStartFormat,
  eventTimeRangeEndFormat: timeRangeEndFormat,
  timeGutterFormat: 'LT',
  monthHeaderFormat: 'MMMM YYYY',
  dayHeaderFormat: 'dddd MMM DD',
  dayRangeHeaderFormat: weekRangeFormat,
  agendaHeaderFormat: dateRangeFormat,
  agendaDateFormat: 'ddd MMM DD',
  agendaTimeFormat: 'LT',
  agendaTimeRangeFormat: timeRangeFormat
};
function fixUnit(unit) {
  var datePart = unit ? unit.toLowerCase() : unit;
  if (datePart === 'FullYear') {
    datePart = 'year';
  } else if (!datePart) {
    datePart = undefined;
  }
  return datePart;
}
function dayjs(dayjsLib) {
  // load dayjs plugins
  dayjsLib.extend(isBetween);
  dayjsLib.extend(isSameOrAfter);
  dayjsLib.extend(isSameOrBefore);
  dayjsLib.extend(localeData);
  dayjsLib.extend(localizedFormat);
  dayjsLib.extend(minMax);
  dayjsLib.extend(utc);
  var locale = function locale(dj, c) {
    return c ? dj.locale(c) : dj;
  };

  // if the timezone plugin is loaded,
  // then use the timezone aware version
  var dayjs = dayjsLib.tz ? dayjsLib.tz : dayjsLib;
  function getTimezoneOffset(date) {
    // ensures this gets cast to timezone
    return dayjs(date).toDate().getTimezoneOffset();
  }
  function getDstOffset(start, end) {
    var _st$tz$$x$$timezone;
    // convert to dayjs, in case
    var st = dayjs(start);
    var ed = dayjs(end);
    // if not using the dayjs timezone plugin
    if (!dayjs.tz) {
      return st.toDate().getTimezoneOffset() - ed.toDate().getTimezoneOffset();
    }
    /**
     * If a default timezone has been applied, then
     * use this to get the proper timezone offset, otherwise default
     * the timezone to the browser local
     */
    var tzName = (_st$tz$$x$$timezone = st.tz().$x.$timezone) !== null && _st$tz$$x$$timezone !== void 0 ? _st$tz$$x$$timezone : dayjsLib.tz.guess();
    // invert offsets to be inline with moment.js
    var startOffset = -dayjs.tz(+st, tzName).utcOffset();
    var endOffset = -dayjs.tz(+ed, tzName).utcOffset();
    return startOffset - endOffset;
  }
  function getDayStartDstOffset(start) {
    var dayStart = dayjs(start).startOf('day');
    return getDstOffset(dayStart, start);
  }

  /*** BEGIN localized date arithmetic methods with dayjs ***/
  function defineComparators(a, b, unit) {
    var datePart = fixUnit(unit);
    var dtA = datePart ? dayjs(a).startOf(datePart) : dayjs(a);
    var dtB = datePart ? dayjs(b).startOf(datePart) : dayjs(b);
    return [dtA, dtB, datePart];
  }
  function startOf() {
    var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var unit = arguments.length > 1 ? arguments[1] : undefined;
    var datePart = fixUnit(unit);
    if (datePart) {
      return dayjs(date).startOf(datePart).toDate();
    }
    return dayjs(date).toDate();
  }
  function endOf() {
    var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var unit = arguments.length > 1 ? arguments[1] : undefined;
    var datePart = fixUnit(unit);
    if (datePart) {
      return dayjs(date).endOf(datePart).toDate();
    }
    return dayjs(date).toDate();
  }

  // dayjs comparison operations *always* convert both sides to dayjs objects
  // prior to running the comparisons
  function eq(a, b, unit) {
    var _defineComparators = defineComparators(a, b, unit),
      _defineComparators2 = _slicedToArray(_defineComparators, 3),
      dtA = _defineComparators2[0],
      dtB = _defineComparators2[1],
      datePart = _defineComparators2[2];
    return dtA.isSame(dtB, datePart);
  }
  function neq(a, b, unit) {
    return !eq(a, b, unit);
  }
  function gt(a, b, unit) {
    var _defineComparators3 = defineComparators(a, b, unit),
      _defineComparators4 = _slicedToArray(_defineComparators3, 3),
      dtA = _defineComparators4[0],
      dtB = _defineComparators4[1],
      datePart = _defineComparators4[2];
    return dtA.isAfter(dtB, datePart);
  }
  function lt(a, b, unit) {
    var _defineComparators5 = defineComparators(a, b, unit),
      _defineComparators6 = _slicedToArray(_defineComparators5, 3),
      dtA = _defineComparators6[0],
      dtB = _defineComparators6[1],
      datePart = _defineComparators6[2];
    return dtA.isBefore(dtB, datePart);
  }
  function gte(a, b, unit) {
    var _defineComparators7 = defineComparators(a, b, unit),
      _defineComparators8 = _slicedToArray(_defineComparators7, 3),
      dtA = _defineComparators8[0],
      dtB = _defineComparators8[1],
      datePart = _defineComparators8[2];
    return dtA.isSameOrBefore(dtB, datePart);
  }
  function lte(a, b, unit) {
    var _defineComparators9 = defineComparators(a, b, unit),
      _defineComparators10 = _slicedToArray(_defineComparators9, 3),
      dtA = _defineComparators10[0],
      dtB = _defineComparators10[1],
      datePart = _defineComparators10[2];
    return dtA.isSameOrBefore(dtB, datePart);
  }
  function inRange(day, min, max) {
    var unit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'day';
    var datePart = fixUnit(unit);
    var djDay = dayjs(day);
    var djMin = dayjs(min);
    var djMax = dayjs(max);
    return djDay.isBetween(djMin, djMax, datePart, '[]');
  }
  function min(dateA, dateB) {
    var dtA = dayjs(dateA);
    var dtB = dayjs(dateB);
    var minDt = dayjsLib.min(dtA, dtB);
    return minDt.toDate();
  }
  function max(dateA, dateB) {
    var dtA = dayjs(dateA);
    var dtB = dayjs(dateB);
    var maxDt = dayjsLib.max(dtA, dtB);
    return maxDt.toDate();
  }
  function merge(date, time) {
    if (!date && !time) return null;
    var tm = dayjs(time).format('HH:mm:ss');
    var dt = dayjs(date).startOf('day').format('MM/DD/YYYY');
    // We do it this way to avoid issues when timezone switching
    return dayjsLib("".concat(dt, " ").concat(tm), 'MM/DD/YYYY HH:mm:ss').toDate();
  }
  function add(date, adder, unit) {
    var datePart = fixUnit(unit);
    return dayjs(date).add(adder, datePart).toDate();
  }
  function range(start, end) {
    var unit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'day';
    var datePart = fixUnit(unit);
    // because the add method will put these in tz, we have to start that way
    var current = dayjs(start).toDate();
    var days = [];
    while (lte(current, end)) {
      days.push(current);
      current = add(current, 1, datePart);
    }
    return days;
  }
  function ceil(date, unit) {
    var datePart = fixUnit(unit);
    var floor = startOf(date, datePart);
    return eq(floor, date) ? floor : add(floor, 1, datePart);
  }
  function diff(a, b) {
    var unit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'day';
    var datePart = fixUnit(unit);
    // don't use 'defineComparators' here, as we don't want to mutate the values
    var dtA = dayjs(a);
    var dtB = dayjs(b);
    return dtB.diff(dtA, datePart);
  }
  function minutes(date) {
    var dt = dayjs(date);
    return dt.minutes();
  }
  function firstOfWeek(culture) {
    var data = culture ? dayjsLib.localeData(culture) : dayjsLib.localeData();
    return data ? data.firstDayOfWeek() : 0;
  }
  function firstVisibleDay(date) {
    return dayjs(date).startOf('month').startOf('week').toDate();
  }
  function lastVisibleDay(date) {
    return dayjs(date).endOf('month').endOf('week').toDate();
  }
  function visibleDays(date) {
    var current = firstVisibleDay(date);
    var last = lastVisibleDay(date);
    var days = [];
    while (lte(current, last)) {
      days.push(current);
      current = add(current, 1, 'd');
    }
    return days;
  }
  /*** END localized date arithmetic methods with dayjs ***/

  /**
   * Moved from TimeSlots.js, this method overrides the method of the same name
   * in the localizer.js, using dayjs to construct the js Date
   * @param {Date} dt - date to start with
   * @param {Number} minutesFromMidnight
   * @param {Number} offset
   * @returns {Date}
   */
  function getSlotDate(dt, minutesFromMidnight, offset) {
    return dayjs(dt).startOf('day').minute(minutesFromMidnight + offset).toDate();
  }

  // dayjs will automatically handle DST differences in it's calculations
  function getTotalMin(start, end) {
    return diff(start, end, 'minutes');
  }
  function getMinutesFromMidnight(start) {
    var dayStart = dayjs(start).startOf('day');
    var day = dayjs(start);
    return day.diff(dayStart, 'minutes') + getDayStartDstOffset(start);
  }

  // These two are used by DateSlotMetrics
  function continuesPrior(start, first) {
    var djStart = dayjs(start);
    var djFirst = dayjs(first);
    return djStart.isBefore(djFirst, 'day');
  }
  function continuesAfter(start, end, last) {
    var djEnd = dayjs(end);
    var djLast = dayjs(last);
    return djEnd.isSameOrAfter(djLast, 'minutes');
  }

  // These two are used by eventLevels
  function sortEvents(_ref6) {
    var _ref6$evtA = _ref6.evtA,
      aStart = _ref6$evtA.start,
      aEnd = _ref6$evtA.end,
      aAllDay = _ref6$evtA.allDay,
      _ref6$evtB = _ref6.evtB,
      bStart = _ref6$evtB.start,
      bEnd = _ref6$evtB.end,
      bAllDay = _ref6$evtB.allDay;
    var startSort = +startOf(aStart, 'day') - +startOf(bStart, 'day');
    var durA = diff(aStart, ceil(aEnd, 'day'), 'day');
    var durB = diff(bStart, ceil(bEnd, 'day'), 'day');
    return startSort ||
    // sort by start Day first
    Math.max(durB, 1) - Math.max(durA, 1) ||
    // events spanning multiple days go first
    !!bAllDay - !!aAllDay ||
    // then allDay single day events
    +aStart - +bStart ||
    // then sort by start time *don't need dayjs conversion here
    +aEnd - +bEnd // then sort by end time *don't need dayjs conversion here either
    ;
  }

  function inEventRange(_ref7) {
    var _ref7$event = _ref7.event,
      start = _ref7$event.start,
      end = _ref7$event.end,
      _ref7$range = _ref7.range,
      rangeStart = _ref7$range.start,
      rangeEnd = _ref7$range.end;
    var startOfDay = dayjs(start).startOf('day');
    var eEnd = dayjs(end);
    var rStart = dayjs(rangeStart);
    var rEnd = dayjs(rangeEnd);
    var startsBeforeEnd = startOfDay.isSameOrBefore(rEnd, 'day');
    // when the event is zero duration we need to handle a bit differently
    var sameMin = !startOfDay.isSame(eEnd, 'minutes');
    var endsAfterStart = sameMin ? eEnd.isAfter(rStart, 'minutes') : eEnd.isSameOrAfter(rStart, 'minutes');
    return startsBeforeEnd && endsAfterStart;
  }
  function isSameDate(date1, date2) {
    var dt = dayjs(date1);
    var dt2 = dayjs(date2);
    return dt.isSame(dt2, 'day');
  }

  /**
   * This method, called once in the localizer constructor, is used by eventLevels
   * 'eventSegments()' to assist in determining the 'span' of the event in the display,
   * specifically when using a timezone that is greater than the browser native timezone.
   * @returns number
   */
  function browserTZOffset() {
    /**
     * Date.prototype.getTimezoneOffset horrifically flips the positive/negative from
     * what you see in it's string, so we have to jump through some hoops to get a value
     * we can actually compare.
     */
    var dt = new Date();
    var neg = /-/.test(dt.toString()) ? '-' : '';
    var dtOffset = dt.getTimezoneOffset();
    var comparator = Number("".concat(neg).concat(Math.abs(dtOffset)));
    // dayjs correctly provides positive/negative offset, as expected
    var mtOffset = dayjs().utcOffset();
    return mtOffset > comparator ? 1 : 0;
  }
  return new DateLocalizer({
    formats: formats,
    firstOfWeek: firstOfWeek,
    firstVisibleDay: firstVisibleDay,
    lastVisibleDay: lastVisibleDay,
    visibleDays: visibleDays,
    format: function format(value, _format, culture) {
      return locale(dayjs(value), culture).format(_format);
    },
    lt: lt,
    lte: lte,
    gt: gt,
    gte: gte,
    eq: eq,
    neq: neq,
    merge: merge,
    inRange: inRange,
    startOf: startOf,
    endOf: endOf,
    range: range,
    add: add,
    diff: diff,
    ceil: ceil,
    min: min,
    max: max,
    minutes: minutes,
    getSlotDate: getSlotDate,
    getTimezoneOffset: getTimezoneOffset,
    getDstOffset: getDstOffset,
    getTotalMin: getTotalMin,
    getMinutesFromMidnight: getMinutesFromMidnight,
    continuesPrior: continuesPrior,
    continuesAfter: continuesAfter,
    sortEvents: sortEvents,
    inEventRange: inEventRange,
    isSameDate: isSameDate,
    browserTZOffset: browserTZOffset
  });
}
var components = {
  eventWrapper: NoopWrapper,
  timeSlotWrapper: NoopWrapper,
  dateCellWrapper: NoopWrapper
};


/***/ }),

/***/ 2241:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var __DEV__ = "production" !== 'production';
var warning = function () {};
if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
  warning = function (condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}
module.exports = warning;

/***/ }),

/***/ 66379:
/***/ (() => {

"use strict";
// extracted by mini-css-extract-plugin
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ 77387:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63662);

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(t, o);
}


/***/ }),

/***/ 36140:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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