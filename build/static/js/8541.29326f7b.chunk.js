"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[8541],{

/***/ 56272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58168);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9950);
/* harmony import */ var _ant_design_icons_svg_es_asn_FileOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62259);
/* harmony import */ var _components_AntdIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61187);

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var FileOutlined = function FileOutlined(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_AntdIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({}, props, {
    ref: ref,
    icon: _ant_design_icons_svg_es_asn_FileOutlined__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A
  }));
};
if (false) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(FileOutlined));

/***/ }),

/***/ 80134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ slider)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(82284);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(64467);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(5544);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(48383);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(60436);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./node_modules/shallowequal/index.js
var shallowequal = __webpack_require__(40403);
var shallowequal_default = /*#__PURE__*/__webpack_require__.n(shallowequal);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useMergedState.js
var useMergedState = __webpack_require__(71207);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(80045);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/rc-util/es/KeyCode.js
var KeyCode = __webpack_require__(91478);
;// ./node_modules/rc-slider/es/context.js

var SliderContext = /*#__PURE__*/react.createContext({
  min: 0,
  max: 0,
  direction: 'ltr',
  step: 1,
  includedStart: 0,
  includedEnd: 0,
  tabIndex: 0
});
/* harmony default export */ const es_context = (SliderContext);
;// ./node_modules/rc-slider/es/util.js
function getOffset(value, min, max) {
  return (value - min) / (max - min);
}
function getDirectionStyle(direction, value, min, max) {
  var offset = getOffset(value, min, max);
  var positionStyle = {};
  switch (direction) {
    case 'rtl':
      positionStyle.right = "".concat(offset * 100, "%");
      positionStyle.transform = 'translateX(50%)';
      break;
    case 'btt':
      positionStyle.bottom = "".concat(offset * 100, "%");
      positionStyle.transform = 'translateY(50%)';
      break;
    case 'ttb':
      positionStyle.top = "".concat(offset * 100, "%");
      positionStyle.transform = 'translateY(-50%)';
      break;
    default:
      positionStyle.left = "".concat(offset * 100, "%");
      positionStyle.transform = 'translateX(-50%)';
      break;
  }
  return positionStyle;
}
/** Return index value if is list or return value directly */

function getIndex(value, index) {
  return Array.isArray(value) ? value[index] : value;
}
;// ./node_modules/rc-slider/es/Handles/Handle.js




var _excluded = ["prefixCls", "value", "valueIndex", "onStartMove", "style", "render", "dragging", "onOffsetChange"];





var Handle = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _classNames, _getIndex;
  var prefixCls = props.prefixCls,
    value = props.value,
    valueIndex = props.valueIndex,
    onStartMove = props.onStartMove,
    style = props.style,
    render = props.render,
    dragging = props.dragging,
    onOffsetChange = props.onOffsetChange,
    restProps = (0,objectWithoutProperties/* default */.A)(props, _excluded);
  var _React$useContext = react.useContext(es_context),
    min = _React$useContext.min,
    max = _React$useContext.max,
    direction = _React$useContext.direction,
    disabled = _React$useContext.disabled,
    range = _React$useContext.range,
    tabIndex = _React$useContext.tabIndex,
    ariaLabelForHandle = _React$useContext.ariaLabelForHandle,
    ariaLabelledByForHandle = _React$useContext.ariaLabelledByForHandle,
    ariaValueTextFormatterForHandle = _React$useContext.ariaValueTextFormatterForHandle;
  var handlePrefixCls = "".concat(prefixCls, "-handle"); // ============================ Events ============================

  var onInternalStartMove = function onInternalStartMove(e) {
    if (!disabled) {
      onStartMove(e, valueIndex);
    }
  }; // =========================== Keyboard ===========================

  var onKeyDown = function onKeyDown(e) {
    if (!disabled) {
      var offset = null; // Change the value

      switch (e.which || e.keyCode) {
        case KeyCode/* default */.A.LEFT:
          offset = direction === 'ltr' || direction === 'btt' ? -1 : 1;
          break;
        case KeyCode/* default */.A.RIGHT:
          offset = direction === 'ltr' || direction === 'btt' ? 1 : -1;
          break;
        // Up is plus

        case KeyCode/* default */.A.UP:
          offset = direction !== 'ttb' ? 1 : -1;
          break;
        // Down is minus

        case KeyCode/* default */.A.DOWN:
          offset = direction !== 'ttb' ? -1 : 1;
          break;
        case KeyCode/* default */.A.HOME:
          offset = 'min';
          break;
        case KeyCode/* default */.A.END:
          offset = 'max';
          break;
        case KeyCode/* default */.A.PAGE_UP:
          offset = 2;
          break;
        case KeyCode/* default */.A.PAGE_DOWN:
          offset = -2;
          break;
      }
      if (offset !== null) {
        e.preventDefault();
        onOffsetChange(offset, valueIndex);
      }
    }
  }; // ============================ Offset ============================

  var positionStyle = getDirectionStyle(direction, value, min, max); // ============================ Render ============================

  var handleNode = /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.A)({
    ref: ref,
    className: classnames_default()(handlePrefixCls, (_classNames = {}, (0,defineProperty/* default */.A)(_classNames, "".concat(handlePrefixCls, "-").concat(valueIndex + 1), range), (0,defineProperty/* default */.A)(_classNames, "".concat(handlePrefixCls, "-dragging"), dragging), _classNames)),
    style: (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, positionStyle), style),
    onMouseDown: onInternalStartMove,
    onTouchStart: onInternalStartMove,
    onKeyDown: onKeyDown,
    tabIndex: disabled ? null : getIndex(tabIndex, valueIndex),
    role: "slider",
    "aria-valuemin": min,
    "aria-valuemax": max,
    "aria-valuenow": value,
    "aria-disabled": disabled,
    "aria-label": getIndex(ariaLabelForHandle, valueIndex),
    "aria-labelledby": getIndex(ariaLabelledByForHandle, valueIndex),
    "aria-valuetext": (_getIndex = getIndex(ariaValueTextFormatterForHandle, valueIndex)) === null || _getIndex === void 0 ? void 0 : _getIndex(value)
  }, restProps)); // Customize

  if (render) {
    handleNode = render(handleNode, {
      index: valueIndex,
      prefixCls: prefixCls,
      value: value,
      dragging: dragging
    });
  }
  return handleNode;
});
if (false) {}
/* harmony default export */ const Handles_Handle = (Handle);
;// ./node_modules/rc-slider/es/Handles/index.js


var Handles_excluded = ["prefixCls", "style", "onStartMove", "onOffsetChange", "values", "handleRender", "draggingIndex"];



var Handles = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var prefixCls = props.prefixCls,
    style = props.style,
    onStartMove = props.onStartMove,
    onOffsetChange = props.onOffsetChange,
    values = props.values,
    handleRender = props.handleRender,
    draggingIndex = props.draggingIndex,
    restProps = (0,objectWithoutProperties/* default */.A)(props, Handles_excluded);
  var handlesRef = react.useRef({});
  react.useImperativeHandle(ref, function () {
    return {
      focus: function focus(index) {
        var _handlesRef$current$i;
        (_handlesRef$current$i = handlesRef.current[index]) === null || _handlesRef$current$i === void 0 ? void 0 : _handlesRef$current$i.focus();
      }
    };
  });
  return /*#__PURE__*/react.createElement(react.Fragment, null, values.map(function (value, index) {
    return /*#__PURE__*/react.createElement(Handles_Handle, (0,esm_extends/* default */.A)({
      ref: function ref(node) {
        if (!node) {
          delete handlesRef.current[index];
        } else {
          handlesRef.current[index] = node;
        }
      },
      dragging: draggingIndex === index,
      prefixCls: prefixCls,
      style: getIndex(style, index),
      key: index,
      value: value,
      valueIndex: index,
      onStartMove: onStartMove,
      onOffsetChange: onOffsetChange,
      render: handleRender
    }, restProps));
  }));
});
if (false) {}
/* harmony default export */ const es_Handles = (Handles);
;// ./node_modules/rc-slider/es/hooks/useDrag.js



function getPosition(e) {
  var obj = 'touches' in e ? e.touches[0] : e;
  return {
    pageX: obj.pageX,
    pageY: obj.pageY
  };
}
function useDrag(containerRef, direction, rawValues, min, max, formatValue, triggerChange, finishChange, offsetValues) {
  var _React$useState = react.useState(null),
    _React$useState2 = (0,slicedToArray/* default */.A)(_React$useState, 2),
    draggingValue = _React$useState2[0],
    setDraggingValue = _React$useState2[1];
  var _React$useState3 = react.useState(-1),
    _React$useState4 = (0,slicedToArray/* default */.A)(_React$useState3, 2),
    draggingIndex = _React$useState4[0],
    setDraggingIndex = _React$useState4[1];
  var _React$useState5 = react.useState(rawValues),
    _React$useState6 = (0,slicedToArray/* default */.A)(_React$useState5, 2),
    cacheValues = _React$useState6[0],
    setCacheValues = _React$useState6[1];
  var _React$useState7 = react.useState(rawValues),
    _React$useState8 = (0,slicedToArray/* default */.A)(_React$useState7, 2),
    originValues = _React$useState8[0],
    setOriginValues = _React$useState8[1];
  var mouseMoveEventRef = react.useRef(null);
  var mouseUpEventRef = react.useRef(null);
  react.useEffect(function () {
    if (draggingIndex === -1) {
      setCacheValues(rawValues);
    }
  }, [rawValues, draggingIndex]); // Clean up event

  react.useEffect(function () {
    return function () {
      document.removeEventListener('mousemove', mouseMoveEventRef.current);
      document.removeEventListener('mouseup', mouseUpEventRef.current);
      document.removeEventListener('touchmove', mouseMoveEventRef.current);
      document.removeEventListener('touchend', mouseUpEventRef.current);
    };
  }, []);
  var flushValues = function flushValues(nextValues, nextValue) {
    // Perf: Only update state when value changed
    if (cacheValues.some(function (val, i) {
      return val !== nextValues[i];
    })) {
      if (nextValue !== undefined) {
        setDraggingValue(nextValue);
      }
      setCacheValues(nextValues);
      triggerChange(nextValues);
    }
  };
  var updateCacheValue = function updateCacheValue(valueIndex, offsetPercent) {
    // Basic point offset
    if (valueIndex === -1) {
      // >>>> Dragging on the track
      var startValue = originValues[0];
      var endValue = originValues[originValues.length - 1];
      var maxStartOffset = min - startValue;
      var maxEndOffset = max - endValue; // Get valid offset

      var offset = offsetPercent * (max - min);
      offset = Math.max(offset, maxStartOffset);
      offset = Math.min(offset, maxEndOffset); // Use first value to revert back of valid offset (like steps marks)

      var formatStartValue = formatValue(startValue + offset);
      offset = formatStartValue - startValue;
      var cloneCacheValues = originValues.map(function (val) {
        return val + offset;
      });
      flushValues(cloneCacheValues);
    } else {
      // >>>> Dragging on the handle
      var offsetDist = (max - min) * offsetPercent; // Always start with the valueIndex origin value

      var cloneValues = (0,toConsumableArray/* default */.A)(cacheValues);
      cloneValues[valueIndex] = originValues[valueIndex];
      var next = offsetValues(cloneValues, offsetDist, valueIndex, 'dist');
      flushValues(next.values, next.value);
    }
  }; // Resolve closure

  var updateCacheValueRef = react.useRef(updateCacheValue);
  updateCacheValueRef.current = updateCacheValue;
  var onStartMove = function onStartMove(e, valueIndex) {
    e.stopPropagation();
    var originValue = rawValues[valueIndex];
    setDraggingIndex(valueIndex);
    setDraggingValue(originValue);
    setOriginValues(rawValues);
    var _getPosition = getPosition(e),
      startX = _getPosition.pageX,
      startY = _getPosition.pageY; // Moving

    var onMouseMove = function onMouseMove(event) {
      event.preventDefault();
      var _getPosition2 = getPosition(event),
        moveX = _getPosition2.pageX,
        moveY = _getPosition2.pageY;
      var offsetX = moveX - startX;
      var offsetY = moveY - startY;
      var _containerRef$current = containerRef.current.getBoundingClientRect(),
        width = _containerRef$current.width,
        height = _containerRef$current.height;
      var offSetPercent;
      switch (direction) {
        case 'btt':
          offSetPercent = -offsetY / height;
          break;
        case 'ttb':
          offSetPercent = offsetY / height;
          break;
        case 'rtl':
          offSetPercent = -offsetX / width;
          break;
        default:
          offSetPercent = offsetX / width;
      }
      updateCacheValueRef.current(valueIndex, offSetPercent);
    }; // End

    var onMouseUp = function onMouseUp(event) {
      event.preventDefault();
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('touchend', onMouseUp);
      document.removeEventListener('touchmove', onMouseMove);
      mouseMoveEventRef.current = null;
      mouseUpEventRef.current = null;
      setDraggingIndex(-1);
      finishChange();
    };
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('touchend', onMouseUp);
    document.addEventListener('touchmove', onMouseMove);
    mouseMoveEventRef.current = onMouseMove;
    mouseUpEventRef.current = onMouseUp;
  }; // Only return cache value when it mapping with rawValues

  var returnValues = react.useMemo(function () {
    var sourceValues = (0,toConsumableArray/* default */.A)(rawValues).sort(function (a, b) {
      return a - b;
    });
    var targetValues = (0,toConsumableArray/* default */.A)(cacheValues).sort(function (a, b) {
      return a - b;
    });
    return sourceValues.every(function (val, index) {
      return val === targetValues[index];
    }) ? cacheValues : rawValues;
  }, [rawValues, cacheValues]);
  return [draggingIndex, draggingValue, returnValues, onStartMove];
}
;// ./node_modules/rc-slider/es/Tracks/Track.js





function Track(props) {
  var prefixCls = props.prefixCls,
    style = props.style,
    start = props.start,
    end = props.end,
    index = props.index,
    onStartMove = props.onStartMove;
  var _React$useContext = react.useContext(es_context),
    direction = _React$useContext.direction,
    min = _React$useContext.min,
    max = _React$useContext.max,
    disabled = _React$useContext.disabled,
    range = _React$useContext.range;
  var trackPrefixCls = "".concat(prefixCls, "-track");
  var offsetStart = getOffset(start, min, max);
  var offsetEnd = getOffset(end, min, max); // ============================ Events ============================

  var onInternalStartMove = function onInternalStartMove(e) {
    if (!disabled && onStartMove) {
      onStartMove(e, -1);
    }
  }; // ============================ Render ============================

  var positionStyle = {};
  switch (direction) {
    case 'rtl':
      positionStyle.right = "".concat(offsetStart * 100, "%");
      positionStyle.width = "".concat(offsetEnd * 100 - offsetStart * 100, "%");
      break;
    case 'btt':
      positionStyle.bottom = "".concat(offsetStart * 100, "%");
      positionStyle.height = "".concat(offsetEnd * 100 - offsetStart * 100, "%");
      break;
    case 'ttb':
      positionStyle.top = "".concat(offsetStart * 100, "%");
      positionStyle.height = "".concat(offsetEnd * 100 - offsetStart * 100, "%");
      break;
    default:
      positionStyle.left = "".concat(offsetStart * 100, "%");
      positionStyle.width = "".concat(offsetEnd * 100 - offsetStart * 100, "%");
  }
  return /*#__PURE__*/react.createElement("div", {
    className: classnames_default()(trackPrefixCls, range && "".concat(trackPrefixCls, "-").concat(index + 1)),
    style: (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, positionStyle), style),
    onMouseDown: onInternalStartMove,
    onTouchStart: onInternalStartMove
  });
}
;// ./node_modules/rc-slider/es/Tracks/index.js




function Tracks(props) {
  var prefixCls = props.prefixCls,
    style = props.style,
    values = props.values,
    startPoint = props.startPoint,
    onStartMove = props.onStartMove;
  var _React$useContext = react.useContext(es_context),
    included = _React$useContext.included,
    range = _React$useContext.range,
    min = _React$useContext.min;
  var trackList = react.useMemo(function () {
    if (!range) {
      // null value do not have track
      if (values.length === 0) {
        return [];
      }
      var startValue = startPoint !== null && startPoint !== void 0 ? startPoint : min;
      var endValue = values[0];
      return [{
        start: Math.min(startValue, endValue),
        end: Math.max(startValue, endValue)
      }];
    } // Multiple

    var list = [];
    for (var i = 0; i < values.length - 1; i += 1) {
      list.push({
        start: values[i],
        end: values[i + 1]
      });
    }
    return list;
  }, [values, range, startPoint, min]);
  return included ? trackList.map(function (_ref, index) {
    var start = _ref.start,
      end = _ref.end;
    return /*#__PURE__*/react.createElement(Track, {
      index: index,
      prefixCls: prefixCls,
      style: getIndex(style, index),
      start: start,
      end: end,
      key: index,
      onStartMove: onStartMove
    });
  }) : null;
}
;// ./node_modules/rc-slider/es/Marks/Mark.js






function Mark(props) {
  var prefixCls = props.prefixCls,
    style = props.style,
    children = props.children,
    value = props.value,
    _onClick = props.onClick;
  var _React$useContext = react.useContext(es_context),
    min = _React$useContext.min,
    max = _React$useContext.max,
    direction = _React$useContext.direction,
    includedStart = _React$useContext.includedStart,
    includedEnd = _React$useContext.includedEnd,
    included = _React$useContext.included;
  var textCls = "".concat(prefixCls, "-text"); // ============================ Offset ============================

  var positionStyle = getDirectionStyle(direction, value, min, max);
  return /*#__PURE__*/react.createElement("span", {
    className: classnames_default()(textCls, (0,defineProperty/* default */.A)({}, "".concat(textCls, "-active"), included && includedStart <= value && value <= includedEnd)),
    style: (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, positionStyle), style),
    onMouseDown: function onMouseDown(e) {
      e.stopPropagation();
    },
    onClick: function onClick() {
      _onClick(value);
    }
  }, children);
}
;// ./node_modules/rc-slider/es/Marks/index.js


function Marks(props) {
  var prefixCls = props.prefixCls,
    marks = props.marks,
    onClick = props.onClick;
  var markPrefixCls = "".concat(prefixCls, "-mark"); // Not render mark if empty

  if (!marks.length) {
    return null;
  }
  return /*#__PURE__*/react.createElement("div", {
    className: markPrefixCls
  }, marks.map(function (_ref) {
    var value = _ref.value,
      style = _ref.style,
      label = _ref.label;
    return /*#__PURE__*/react.createElement(Mark, {
      key: value,
      prefixCls: markPrefixCls,
      style: style,
      value: value,
      onClick: onClick
    }, label);
  }));
}
;// ./node_modules/rc-slider/es/Steps/Dot.js






function Dot(props) {
  var prefixCls = props.prefixCls,
    value = props.value,
    style = props.style,
    activeStyle = props.activeStyle;
  var _React$useContext = react.useContext(es_context),
    min = _React$useContext.min,
    max = _React$useContext.max,
    direction = _React$useContext.direction,
    included = _React$useContext.included,
    includedStart = _React$useContext.includedStart,
    includedEnd = _React$useContext.includedEnd;
  var dotClassName = "".concat(prefixCls, "-dot");
  var active = included && includedStart <= value && value <= includedEnd; // ============================ Offset ============================

  var mergedStyle = (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, getDirectionStyle(direction, value, min, max)), typeof style === 'function' ? style(value) : style);
  if (active) {
    mergedStyle = (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, mergedStyle), typeof activeStyle === 'function' ? activeStyle(value) : activeStyle);
  }
  return /*#__PURE__*/react.createElement("span", {
    className: classnames_default()(dotClassName, (0,defineProperty/* default */.A)({}, "".concat(dotClassName, "-active"), active)),
    style: mergedStyle
  });
}
;// ./node_modules/rc-slider/es/Steps/index.js



function Steps(props) {
  var prefixCls = props.prefixCls,
    marks = props.marks,
    dots = props.dots,
    style = props.style,
    activeStyle = props.activeStyle;
  var _React$useContext = react.useContext(es_context),
    min = _React$useContext.min,
    max = _React$useContext.max,
    step = _React$useContext.step;
  var stepDots = react.useMemo(function () {
    var dotSet = new Set(); // Add marks

    marks.forEach(function (mark) {
      dotSet.add(mark.value);
    }); // Fill dots

    if (dots && step !== null) {
      var current = min;
      while (current <= max) {
        dotSet.add(current);
        current += step;
      }
    }
    return Array.from(dotSet);
  }, [min, max, step, dots, marks]);
  return /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-step")
  }, stepDots.map(function (dotValue) {
    return /*#__PURE__*/react.createElement(Dot, {
      prefixCls: prefixCls,
      key: dotValue,
      value: dotValue,
      style: style,
      activeStyle: activeStyle
    });
  }));
}
;// ./node_modules/rc-slider/es/hooks/useOffset.js


function useOffset(min, max, step, markList, allowCross, pushable) {
  var formatRangeValue = react.useCallback(function (val) {
    var formatNextValue = isFinite(val) ? val : min;
    formatNextValue = Math.min(max, val);
    formatNextValue = Math.max(min, formatNextValue);
    return formatNextValue;
  }, [min, max]);
  var formatStepValue = react.useCallback(function (val) {
    if (step !== null) {
      var stepValue = min + Math.round((formatRangeValue(val) - min) / step) * step; // Cut number in case to be like 0.30000000000000004

      var getDecimal = function getDecimal(num) {
        return (String(num).split('.')[1] || '').length;
      };
      var maxDecimal = Math.max(getDecimal(step), getDecimal(max), getDecimal(min));
      var fixedValue = Number(stepValue.toFixed(maxDecimal));
      return min <= fixedValue && fixedValue <= max ? fixedValue : null;
    }
    return null;
  }, [step, min, max, formatRangeValue]);
  var formatValue = react.useCallback(function (val) {
    var formatNextValue = formatRangeValue(val); // List align values

    var alignValues = markList.map(function (mark) {
      return mark.value;
    });
    if (step !== null) {
      alignValues.push(formatStepValue(val));
    } // min & max

    alignValues.push(min, max); // Align with marks

    var closeValue = alignValues[0];
    var closeDist = max - min;
    alignValues.forEach(function (alignValue) {
      var dist = Math.abs(formatNextValue - alignValue);
      if (dist <= closeDist) {
        closeValue = alignValue;
        closeDist = dist;
      }
    });
    return closeValue;
  }, [min, max, markList, step, formatRangeValue, formatStepValue]); // ========================== Offset ==========================
  // Single Value

  var offsetValue = function offsetValue(values, offset, valueIndex) {
    var mode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'unit';
    if (typeof offset === 'number') {
      var nextValue;
      var originValue = values[valueIndex]; // Only used for `dist` mode

      var targetDistValue = originValue + offset; // Compare next step value & mark value which is best match

      var potentialValues = [];
      markList.forEach(function (mark) {
        potentialValues.push(mark.value);
      }); // Min & Max

      potentialValues.push(min, max); // In case origin value is align with mark but not with step

      potentialValues.push(formatStepValue(originValue)); // Put offset step value also

      var sign = offset > 0 ? 1 : -1;
      if (mode === 'unit') {
        potentialValues.push(formatStepValue(originValue + sign * step));
      } else {
        potentialValues.push(formatStepValue(targetDistValue));
      } // Find close one

      potentialValues = potentialValues.filter(function (val) {
        return val !== null;
      }) // Remove reverse value
      .filter(function (val) {
        return offset < 0 ? val <= originValue : val >= originValue;
      });
      if (mode === 'unit') {
        // `unit` mode can not contain itself
        potentialValues = potentialValues.filter(function (val) {
          return val !== originValue;
        });
      }
      var compareValue = mode === 'unit' ? originValue : targetDistValue;
      nextValue = potentialValues[0];
      var valueDist = Math.abs(nextValue - compareValue);
      potentialValues.forEach(function (potentialValue) {
        var dist = Math.abs(potentialValue - compareValue);
        if (dist < valueDist) {
          nextValue = potentialValue;
          valueDist = dist;
        }
      }); // Out of range will back to range

      if (nextValue === undefined) {
        return offset < 0 ? min : max;
      } // `dist` mode

      if (mode === 'dist') {
        return nextValue;
      } // `unit` mode may need another round

      if (Math.abs(offset) > 1) {
        var cloneValues = (0,toConsumableArray/* default */.A)(values);
        cloneValues[valueIndex] = nextValue;
        return offsetValue(cloneValues, offset - sign, valueIndex, mode);
      }
      return nextValue;
    } else if (offset === 'min') {
      return min;
    } else if (offset === 'max') {
      return max;
    }
  };
  /** Same as `offsetValue` but return `changed` mark to tell value changed */

  var offsetChangedValue = function offsetChangedValue(values, offset, valueIndex) {
    var mode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'unit';
    var originValue = values[valueIndex];
    var nextValue = offsetValue(values, offset, valueIndex, mode);
    return {
      value: nextValue,
      changed: nextValue !== originValue
    };
  };
  var needPush = function needPush(dist) {
    return pushable === null && dist === 0 || typeof pushable === 'number' && dist < pushable;
  }; // Values

  var offsetValues = function offsetValues(values, offset, valueIndex) {
    var mode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'unit';
    var nextValues = values.map(formatValue);
    var originValue = nextValues[valueIndex];
    var nextValue = offsetValue(nextValues, offset, valueIndex, mode);
    nextValues[valueIndex] = nextValue;
    if (allowCross === false) {
      // >>>>> Allow Cross
      var pushNum = pushable || 0; // ============ AllowCross ===============

      if (valueIndex > 0 && nextValues[valueIndex - 1] !== originValue) {
        nextValues[valueIndex] = Math.max(nextValues[valueIndex], nextValues[valueIndex - 1] + pushNum);
      }
      if (valueIndex < nextValues.length - 1 && nextValues[valueIndex + 1] !== originValue) {
        nextValues[valueIndex] = Math.min(nextValues[valueIndex], nextValues[valueIndex + 1] - pushNum);
      }
    } else if (typeof pushable === 'number' || pushable === null) {
      // >>>>> Pushable
      // =============== Push ==================
      // >>>>>> Basic push
      // End values
      for (var i = valueIndex + 1; i < nextValues.length; i += 1) {
        var changed = true;
        while (needPush(nextValues[i] - nextValues[i - 1]) && changed) {
          var _offsetChangedValue = offsetChangedValue(nextValues, 1, i);
          nextValues[i] = _offsetChangedValue.value;
          changed = _offsetChangedValue.changed;
        }
      } // Start values

      for (var _i = valueIndex; _i > 0; _i -= 1) {
        var _changed = true;
        while (needPush(nextValues[_i] - nextValues[_i - 1]) && _changed) {
          var _offsetChangedValue2 = offsetChangedValue(nextValues, -1, _i - 1);
          nextValues[_i - 1] = _offsetChangedValue2.value;
          _changed = _offsetChangedValue2.changed;
        }
      } // >>>>> Revert back to safe push range
      // End to Start

      for (var _i2 = nextValues.length - 1; _i2 > 0; _i2 -= 1) {
        var _changed2 = true;
        while (needPush(nextValues[_i2] - nextValues[_i2 - 1]) && _changed2) {
          var _offsetChangedValue3 = offsetChangedValue(nextValues, -1, _i2 - 1);
          nextValues[_i2 - 1] = _offsetChangedValue3.value;
          _changed2 = _offsetChangedValue3.changed;
        }
      } // Start to End

      for (var _i3 = 0; _i3 < nextValues.length - 1; _i3 += 1) {
        var _changed3 = true;
        while (needPush(nextValues[_i3 + 1] - nextValues[_i3]) && _changed3) {
          var _offsetChangedValue4 = offsetChangedValue(nextValues, 1, _i3 + 1);
          nextValues[_i3 + 1] = _offsetChangedValue4.value;
          _changed3 = _offsetChangedValue4.changed;
        }
      }
    }
    return {
      value: nextValues[valueIndex],
      values: nextValues
    };
  };
  return [formatValue, offsetValues];
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/warning.js
var warning = __webpack_require__(99424);
;// ./node_modules/rc-slider/es/Slider.js
















var Slider = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _classNames;
  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-slider' : _props$prefixCls,
    className = props.className,
    style = props.style,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    autoFocus = props.autoFocus,
    onFocus = props.onFocus,
    onBlur = props.onBlur,
    _props$min = props.min,
    min = _props$min === void 0 ? 0 : _props$min,
    _props$max = props.max,
    max = _props$max === void 0 ? 100 : _props$max,
    _props$step = props.step,
    step = _props$step === void 0 ? 1 : _props$step,
    value = props.value,
    defaultValue = props.defaultValue,
    range = props.range,
    count = props.count,
    onChange = props.onChange,
    onBeforeChange = props.onBeforeChange,
    onAfterChange = props.onAfterChange,
    _props$allowCross = props.allowCross,
    allowCross = _props$allowCross === void 0 ? true : _props$allowCross,
    _props$pushable = props.pushable,
    pushable = _props$pushable === void 0 ? false : _props$pushable,
    draggableTrack = props.draggableTrack,
    reverse = props.reverse,
    vertical = props.vertical,
    _props$included = props.included,
    included = _props$included === void 0 ? true : _props$included,
    startPoint = props.startPoint,
    trackStyle = props.trackStyle,
    handleStyle = props.handleStyle,
    railStyle = props.railStyle,
    dotStyle = props.dotStyle,
    activeDotStyle = props.activeDotStyle,
    marks = props.marks,
    dots = props.dots,
    handleRender = props.handleRender,
    _props$tabIndex = props.tabIndex,
    tabIndex = _props$tabIndex === void 0 ? 0 : _props$tabIndex,
    ariaLabelForHandle = props.ariaLabelForHandle,
    ariaLabelledByForHandle = props.ariaLabelledByForHandle,
    ariaValueTextFormatterForHandle = props.ariaValueTextFormatterForHandle;
  var handlesRef = react.useRef();
  var containerRef = react.useRef();
  var direction = react.useMemo(function () {
    if (vertical) {
      return reverse ? 'ttb' : 'btt';
    }
    return reverse ? 'rtl' : 'ltr';
  }, [reverse, vertical]); // ============================ Range =============================

  var mergedMin = react.useMemo(function () {
    return isFinite(min) ? min : 0;
  }, [min]);
  var mergedMax = react.useMemo(function () {
    return isFinite(max) ? max : 100;
  }, [max]); // ============================= Step =============================

  var mergedStep = react.useMemo(function () {
    return step !== null && step <= 0 ? 1 : step;
  }, [step]); // ============================= Push =============================

  var mergedPush = react.useMemo(function () {
    if (pushable === true) {
      return mergedStep;
    }
    return pushable >= 0 ? pushable : false;
  }, [pushable, mergedStep]); // ============================ Marks =============================

  var markList = react.useMemo(function () {
    var keys = Object.keys(marks || {});
    return keys.map(function (key) {
      var mark = marks[key];
      var markObj = {
        value: Number(key)
      };
      if (mark && (0,esm_typeof/* default */.A)(mark) === 'object' && ! /*#__PURE__*/react.isValidElement(mark) && ('label' in mark || 'style' in mark)) {
        markObj.style = mark.style;
        markObj.label = mark.label;
      } else {
        markObj.label = mark;
      }
      return markObj;
    }).filter(function (_ref) {
      var label = _ref.label;
      return label || typeof label === 'number';
    }).sort(function (a, b) {
      return a.value - b.value;
    });
  }, [marks]); // ============================ Format ============================

  var _useOffset = useOffset(mergedMin, mergedMax, mergedStep, markList, allowCross, mergedPush),
    _useOffset2 = (0,slicedToArray/* default */.A)(_useOffset, 2),
    formatValue = _useOffset2[0],
    offsetValues = _useOffset2[1]; // ============================ Values ============================

  var _useMergedState = (0,useMergedState/* default */.A)(defaultValue, {
      value: value
    }),
    _useMergedState2 = (0,slicedToArray/* default */.A)(_useMergedState, 2),
    mergedValue = _useMergedState2[0],
    setValue = _useMergedState2[1];
  var rawValues = react.useMemo(function () {
    var valueList = mergedValue === null || mergedValue === undefined ? [] : Array.isArray(mergedValue) ? mergedValue : [mergedValue];
    var _valueList = (0,slicedToArray/* default */.A)(valueList, 1),
      _valueList$ = _valueList[0],
      val0 = _valueList$ === void 0 ? mergedMin : _valueList$;
    var returnValues = mergedValue === null ? [] : [val0]; // Format as range

    if (range) {
      returnValues = (0,toConsumableArray/* default */.A)(valueList); // When count provided or value is `undefined`, we fill values

      if (count || mergedValue === undefined) {
        var pointCount = count >= 0 ? count + 1 : 2;
        returnValues = returnValues.slice(0, pointCount); // Fill with count

        while (returnValues.length < pointCount) {
          var _returnValues;
          returnValues.push((_returnValues = returnValues[returnValues.length - 1]) !== null && _returnValues !== void 0 ? _returnValues : mergedMin);
        }
      }
      returnValues.sort(function (a, b) {
        return a - b;
      });
    } // Align in range

    returnValues.forEach(function (val, index) {
      returnValues[index] = formatValue(val);
    });
    return returnValues;
  }, [mergedValue, range, mergedMin, count, formatValue]); // =========================== onChange ===========================

  var rawValuesRef = react.useRef(rawValues);
  rawValuesRef.current = rawValues;
  var getTriggerValue = function getTriggerValue(triggerValues) {
    return range ? triggerValues : triggerValues[0];
  };
  var triggerChange = function triggerChange(nextValues) {
    // Order first
    var cloneNextValues = (0,toConsumableArray/* default */.A)(nextValues).sort(function (a, b) {
      return a - b;
    }); // Trigger event if needed

    if (onChange && !shallowequal_default()(cloneNextValues, rawValuesRef.current)) {
      onChange(getTriggerValue(cloneNextValues));
    } // We set this later since it will re-render component immediately

    setValue(cloneNextValues);
  };
  var changeToCloseValue = function changeToCloseValue(newValue) {
    if (!disabled) {
      var valueIndex = 0;
      var valueDist = mergedMax - mergedMin;
      rawValues.forEach(function (val, index) {
        var dist = Math.abs(newValue - val);
        if (dist <= valueDist) {
          valueDist = dist;
          valueIndex = index;
        }
      }); // Create new values

      var cloneNextValues = (0,toConsumableArray/* default */.A)(rawValues);
      cloneNextValues[valueIndex] = newValue; // Fill value to match default 2

      if (range && !rawValues.length && count === undefined) {
        cloneNextValues.push(newValue);
      }
      onBeforeChange === null || onBeforeChange === void 0 ? void 0 : onBeforeChange(getTriggerValue(cloneNextValues));
      triggerChange(cloneNextValues);
      onAfterChange === null || onAfterChange === void 0 ? void 0 : onAfterChange(getTriggerValue(cloneNextValues));
    }
  }; // ============================ Click =============================

  var onSliderMouseDown = function onSliderMouseDown(e) {
    e.preventDefault();
    var _containerRef$current = containerRef.current.getBoundingClientRect(),
      width = _containerRef$current.width,
      height = _containerRef$current.height,
      left = _containerRef$current.left,
      top = _containerRef$current.top,
      bottom = _containerRef$current.bottom,
      right = _containerRef$current.right;
    var clientX = e.clientX,
      clientY = e.clientY;
    var percent;
    switch (direction) {
      case 'btt':
        percent = (bottom - clientY) / height;
        break;
      case 'ttb':
        percent = (clientY - top) / height;
        break;
      case 'rtl':
        percent = (right - clientX) / width;
        break;
      default:
        percent = (clientX - left) / width;
    }
    var nextValue = mergedMin + percent * (mergedMax - mergedMin);
    changeToCloseValue(formatValue(nextValue));
  }; // =========================== Keyboard ===========================

  var _React$useState = react.useState(null),
    _React$useState2 = (0,slicedToArray/* default */.A)(_React$useState, 2),
    keyboardValue = _React$useState2[0],
    setKeyboardValue = _React$useState2[1];
  var onHandleOffsetChange = function onHandleOffsetChange(offset, valueIndex) {
    if (!disabled) {
      var next = offsetValues(rawValues, offset, valueIndex);
      onBeforeChange === null || onBeforeChange === void 0 ? void 0 : onBeforeChange(getTriggerValue(rawValues));
      triggerChange(next.values);
      onAfterChange === null || onAfterChange === void 0 ? void 0 : onAfterChange(getTriggerValue(next.values));
      setKeyboardValue(next.value);
    }
  };
  react.useEffect(function () {
    if (keyboardValue !== null) {
      var valueIndex = rawValues.indexOf(keyboardValue);
      if (valueIndex >= 0) {
        handlesRef.current.focus(valueIndex);
      }
    }
    setKeyboardValue(null);
  }, [keyboardValue]); // ============================= Drag =============================

  var mergedDraggableTrack = react.useMemo(function () {
    if (draggableTrack && mergedStep === null) {
      if (false) {}
      return false;
    }
    return draggableTrack;
  }, [draggableTrack, mergedStep]);
  var finishChange = function finishChange() {
    onAfterChange === null || onAfterChange === void 0 ? void 0 : onAfterChange(getTriggerValue(rawValuesRef.current));
  };
  var _useDrag = useDrag(containerRef, direction, rawValues, mergedMin, mergedMax, formatValue, triggerChange, finishChange, offsetValues),
    _useDrag2 = (0,slicedToArray/* default */.A)(_useDrag, 4),
    draggingIndex = _useDrag2[0],
    draggingValue = _useDrag2[1],
    cacheValues = _useDrag2[2],
    onStartDrag = _useDrag2[3];
  var onStartMove = function onStartMove(e, valueIndex) {
    onStartDrag(e, valueIndex);
    onBeforeChange === null || onBeforeChange === void 0 ? void 0 : onBeforeChange(getTriggerValue(rawValuesRef.current));
  }; // Auto focus for updated handle

  var dragging = draggingIndex !== -1;
  react.useEffect(function () {
    if (!dragging) {
      var valueIndex = rawValues.lastIndexOf(draggingValue);
      handlesRef.current.focus(valueIndex);
    }
  }, [dragging]); // =========================== Included ===========================

  var sortedCacheValues = react.useMemo(function () {
    return (0,toConsumableArray/* default */.A)(cacheValues).sort(function (a, b) {
      return a - b;
    });
  }, [cacheValues]); // Provide a range values with included [min, max]
  // Used for Track, Mark & Dot

  var _React$useMemo = react.useMemo(function () {
      if (!range) {
        return [mergedMin, sortedCacheValues[0]];
      }
      return [sortedCacheValues[0], sortedCacheValues[sortedCacheValues.length - 1]];
    }, [sortedCacheValues, range, mergedMin]),
    _React$useMemo2 = (0,slicedToArray/* default */.A)(_React$useMemo, 2),
    includedStart = _React$useMemo2[0],
    includedEnd = _React$useMemo2[1]; // ============================= Refs =============================

  react.useImperativeHandle(ref, function () {
    return {
      focus: function focus() {
        handlesRef.current.focus(0);
      },
      blur: function blur() {
        var _document = document,
          activeElement = _document.activeElement;
        if (containerRef.current.contains(activeElement)) {
          activeElement === null || activeElement === void 0 ? void 0 : activeElement.blur();
        }
      }
    };
  }); // ========================== Auto Focus ==========================

  react.useEffect(function () {
    if (autoFocus) {
      handlesRef.current.focus(0);
    }
  }, []); // =========================== Context ============================

  var context = react.useMemo(function () {
    return {
      min: mergedMin,
      max: mergedMax,
      direction: direction,
      disabled: disabled,
      step: mergedStep,
      included: included,
      includedStart: includedStart,
      includedEnd: includedEnd,
      range: range,
      tabIndex: tabIndex,
      ariaLabelForHandle: ariaLabelForHandle,
      ariaLabelledByForHandle: ariaLabelledByForHandle,
      ariaValueTextFormatterForHandle: ariaValueTextFormatterForHandle
    };
  }, [mergedMin, mergedMax, direction, disabled, mergedStep, included, includedStart, includedEnd, range, tabIndex, ariaLabelForHandle, ariaLabelledByForHandle, ariaValueTextFormatterForHandle]); // ============================ Render ============================

  return /*#__PURE__*/react.createElement(es_context.Provider, {
    value: context
  }, /*#__PURE__*/react.createElement("div", {
    ref: containerRef,
    className: classnames_default()(prefixCls, className, (_classNames = {}, (0,defineProperty/* default */.A)(_classNames, "".concat(prefixCls, "-disabled"), disabled), (0,defineProperty/* default */.A)(_classNames, "".concat(prefixCls, "-vertical"), vertical), (0,defineProperty/* default */.A)(_classNames, "".concat(prefixCls, "-horizontal"), !vertical), (0,defineProperty/* default */.A)(_classNames, "".concat(prefixCls, "-with-marks"), markList.length), _classNames)),
    style: style,
    onMouseDown: onSliderMouseDown
  }, /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-rail"),
    style: railStyle
  }), /*#__PURE__*/react.createElement(Tracks, {
    prefixCls: prefixCls,
    style: trackStyle,
    values: sortedCacheValues,
    startPoint: startPoint,
    onStartMove: mergedDraggableTrack ? onStartMove : null
  }), /*#__PURE__*/react.createElement(Steps, {
    prefixCls: prefixCls,
    marks: markList,
    dots: dots,
    style: dotStyle,
    activeStyle: activeDotStyle
  }), /*#__PURE__*/react.createElement(es_Handles, {
    ref: handlesRef,
    prefixCls: prefixCls,
    style: handleStyle,
    values: cacheValues,
    draggingIndex: draggingIndex,
    onStartMove: onStartMove,
    onOffsetChange: onHandleOffsetChange,
    onFocus: onFocus,
    onBlur: onBlur,
    handleRender: handleRender
  }), /*#__PURE__*/react.createElement(Marks, {
    prefixCls: prefixCls,
    marks: markList,
    onClick: changeToCloseValue
  })));
});
if (false) {}
/* harmony default export */ const es_Slider = (Slider);
;// ./node_modules/rc-slider/es/index.js

/* harmony default export */ const es = (es_Slider);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(5741);
// EXTERNAL MODULE: ./node_modules/rc-util/es/raf.js
var raf = __webpack_require__(7261);
// EXTERNAL MODULE: ./node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(41929);
// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js
var tooltip = __webpack_require__(81541);
;// ./node_modules/antd/es/slider/SliderTooltip.js






var SliderTooltip = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var open = props.open;
  var innerRef = (0,react.useRef)(null);
  var rafRef = (0,react.useRef)(null);
  function cancelKeepAlign() {
    raf/* default */.A.cancel(rafRef.current);
    rafRef.current = null;
  }
  function keepAlign() {
    rafRef.current = (0,raf/* default */.A)(function () {
      var _a;
      (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.forcePopupAlign();
      rafRef.current = null;
    });
  }
  react.useEffect(function () {
    if (open) {
      keepAlign();
    } else {
      cancelKeepAlign();
    }
    return cancelKeepAlign;
  }, [open, props.title]);
  return /*#__PURE__*/react.createElement(tooltip/* default */.A, (0,esm_extends/* default */.A)({
    ref: (0,es_ref/* composeRef */.K4)(innerRef, ref)
  }, props));
});
/* harmony default export */ const slider_SliderTooltip = (SliderTooltip);
;// ./node_modules/antd/es/slider/index.js




var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};






var slider_Slider = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _React$useContext = react.useContext(context/* ConfigContext */.QO),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction,
    getPopupContainer = _React$useContext.getPopupContainer;
  var _React$useState = react.useState({}),
    _React$useState2 = (0,slicedToArray/* default */.A)(_React$useState, 2),
    opens = _React$useState2[0],
    setOpens = _React$useState2[1];
  var toggleTooltipOpen = function toggleTooltipOpen(index, open) {
    setOpens(function (prev) {
      return (0,esm_extends/* default */.A)((0,esm_extends/* default */.A)({}, prev), (0,defineProperty/* default */.A)({}, index, open));
    });
  };
  var getTooltipPlacement = function getTooltipPlacement(tooltipPlacement, vertical) {
    if (tooltipPlacement) {
      return tooltipPlacement;
    }
    if (!vertical) {
      return 'top';
    }
    return direction === 'rtl' ? 'left' : 'right';
  };
  var customizePrefixCls = props.prefixCls,
    range = props.range,
    className = props.className,
    restProps = __rest(props, ["prefixCls", "range", "className"]);
  var prefixCls = getPrefixCls('slider', customizePrefixCls);
  var cls = classnames_default()(className, (0,defineProperty/* default */.A)({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'));
  // make reverse default on rtl direction
  if (direction === 'rtl' && !restProps.vertical) {
    restProps.reverse = !restProps.reverse;
  }
  // Range config
  var _React$useMemo = react.useMemo(function () {
      if (!range) {
        return [false];
      }
      return (0,esm_typeof/* default */.A)(range) === 'object' ? [true, range.draggableTrack] : [true, false];
    }, [range]),
    _React$useMemo2 = (0,slicedToArray/* default */.A)(_React$useMemo, 2),
    mergedRange = _React$useMemo2[0],
    draggableTrack = _React$useMemo2[1];
  // Warning for deprecated usage
  if (false) {}
  var handleRender = function handleRender(node, info) {
    var _a;
    var index = info.index,
      dragging = info.dragging;
    var rootPrefixCls = getPrefixCls();
    var _props$tooltip = props.tooltip,
      tooltip = _props$tooltip === void 0 ? {} : _props$tooltip,
      vertical = props.vertical;
    var tooltipProps = (0,esm_extends/* default */.A)({
      formatter: (_a = props.tipFormatter) !== null && _a !== void 0 ? _a :
      // eslint-disable-next-line func-names
      function (value) {
        return typeof value === 'number' ? value.toString() : '';
      },
      open: props.tooltipVisible,
      placement: props.tooltipPlacement,
      getPopupContainer: props.getTooltipPopupContainer
    }, tooltip);
    var tooltipOpen = tooltipProps.open,
      tooltipPlacement = tooltipProps.placement,
      getTooltipPopupContainer = tooltipProps.getPopupContainer,
      customizeTooltipPrefixCls = tooltipProps.prefixCls,
      tipFormatter = tooltipProps.formatter;
    var isTipFormatter = tipFormatter ? opens[index] || dragging : false;
    var open = tooltipOpen || tooltipOpen === undefined && isTipFormatter;
    var passedProps = (0,esm_extends/* default */.A)((0,esm_extends/* default */.A)({}, node.props), {
      onMouseEnter: function onMouseEnter() {
        return toggleTooltipOpen(index, true);
      },
      onMouseLeave: function onMouseLeave() {
        return toggleTooltipOpen(index, false);
      }
    });
    var tooltipPrefixCls = getPrefixCls('tooltip', customizeTooltipPrefixCls);
    return /*#__PURE__*/react.createElement(slider_SliderTooltip, {
      prefixCls: tooltipPrefixCls,
      title: tipFormatter ? tipFormatter(info.value) : '',
      open: open,
      placement: getTooltipPlacement(tooltipPlacement, vertical),
      transitionName: "".concat(rootPrefixCls, "-zoom-down"),
      key: index,
      overlayClassName: "".concat(prefixCls, "-tooltip"),
      getPopupContainer: getTooltipPopupContainer || getPopupContainer
    }, /*#__PURE__*/react.cloneElement(node, passedProps));
  };
  return /*#__PURE__*/react.createElement(es, (0,esm_extends/* default */.A)({}, restProps, {
    step: restProps.step,
    range: mergedRange,
    draggableTrack: draggableTrack,
    className: cls,
    ref: ref,
    prefixCls: prefixCls,
    handleRender: handleRender
  }));
});
if (false) {}
/* harmony default export */ const slider = (slider_Slider);

/***/ })

}]);