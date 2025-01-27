"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[6841],{

/***/ 16841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ rc_mentions_es)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(5544);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(80045);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(48383);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useMergedState.js
var useMergedState = __webpack_require__(71207);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__(50604);
// EXTERNAL MODULE: ./node_modules/rc-util/es/KeyCode.js
var KeyCode = __webpack_require__(91478);
// EXTERNAL MODULE: ./node_modules/rc-util/es/warning.js
var warning = __webpack_require__(99424);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./node_modules/rc-textarea/es/index.js + 2 modules
var es = __webpack_require__(22850);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(23029);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(92901);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(85501);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__(52962);
// EXTERNAL MODULE: ./node_modules/rc-trigger/es/index.js + 15 modules
var rc_trigger_es = __webpack_require__(56073);
// EXTERNAL MODULE: ./node_modules/rc-menu/es/index.js + 24 modules
var rc_menu_es = __webpack_require__(14444);
;// ./node_modules/rc-mentions/es/MentionsContext.js
/* tslint:disable: no-object-literal-type-assertion */

// We will never use default, here only to fix TypeScript warning
var MentionsContext = /*#__PURE__*/react.createContext(null);
/* harmony default export */ const es_MentionsContext = (MentionsContext);
;// ./node_modules/rc-mentions/es/DropdownMenu.js



/**
 * We only use Menu to display the candidate.
 * The focus is controlled by textarea to make accessibility easy.
 */
function DropdownMenu(props) {
  var _React$useContext = react.useContext(es_MentionsContext),
    notFoundContent = _React$useContext.notFoundContent,
    activeIndex = _React$useContext.activeIndex,
    setActiveIndex = _React$useContext.setActiveIndex,
    selectOption = _React$useContext.selectOption,
    onFocus = _React$useContext.onFocus,
    onBlur = _React$useContext.onBlur;
  var prefixCls = props.prefixCls,
    options = props.options;
  var activeOption = options[activeIndex] || {};
  return /*#__PURE__*/react.createElement(rc_menu_es/* default */.Ay, {
    prefixCls: "".concat(prefixCls, "-menu"),
    activeKey: activeOption.key,
    onSelect: function onSelect(_ref) {
      var key = _ref.key;
      var option = options.find(function (_ref2) {
        var optionKey = _ref2.key;
        return optionKey === key;
      });
      selectOption(option);
    },
    onFocus: onFocus,
    onBlur: onBlur
  }, options.map(function (option, index) {
    var key = option.key,
      disabled = option.disabled,
      className = option.className,
      style = option.style,
      label = option.label;
    return /*#__PURE__*/react.createElement(rc_menu_es/* MenuItem */.Dr, {
      key: key,
      disabled: disabled,
      className: className,
      style: style,
      onMouseEnter: function onMouseEnter() {
        setActiveIndex(index);
      }
    }, label);
  }), !options.length && /*#__PURE__*/react.createElement(rc_menu_es/* MenuItem */.Dr, {
    disabled: true
  }, notFoundContent));
}
/* harmony default export */ const es_DropdownMenu = (DropdownMenu);
;// ./node_modules/rc-mentions/es/KeywordTrigger.js







var BUILT_IN_PLACEMENTS = {
  bottomRight: {
    points: ['tl', 'br'],
    offset: [0, 4],
    overflow: {
      adjustX: 1,
      adjustY: 1
    }
  },
  bottomLeft: {
    points: ['tr', 'bl'],
    offset: [0, 4],
    overflow: {
      adjustX: 1,
      adjustY: 1
    }
  },
  topRight: {
    points: ['bl', 'tr'],
    offset: [0, -4],
    overflow: {
      adjustX: 1,
      adjustY: 1
    }
  },
  topLeft: {
    points: ['br', 'tl'],
    offset: [0, -4],
    overflow: {
      adjustX: 1,
      adjustY: 1
    }
  }
};
var KeywordTrigger = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.A)(KeywordTrigger, _React$Component);
  var _super = (0,createSuper/* default */.A)(KeywordTrigger);
  function KeywordTrigger() {
    var _this;
    (0,classCallCheck/* default */.A)(this, KeywordTrigger);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.getDropdownPrefix = function () {
      return "".concat(_this.props.prefixCls, "-dropdown");
    };
    _this.getDropdownElement = function () {
      var options = _this.props.options;
      return /*#__PURE__*/react.createElement(es_DropdownMenu, {
        prefixCls: _this.getDropdownPrefix(),
        options: options
      });
    };
    _this.getDropDownPlacement = function () {
      var _this$props = _this.props,
        placement = _this$props.placement,
        direction = _this$props.direction;
      var popupPlacement;
      if (direction === 'rtl') {
        popupPlacement = placement === 'top' ? 'topLeft' : 'bottomLeft';
      } else {
        popupPlacement = placement === 'top' ? 'topRight' : 'bottomRight';
      }
      return popupPlacement;
    };
    return _this;
  }
  (0,createClass/* default */.A)(KeywordTrigger, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        children = _this$props2.children,
        visible = _this$props2.visible,
        transitionName = _this$props2.transitionName,
        getPopupContainer = _this$props2.getPopupContainer;
      var popupElement = this.getDropdownElement();
      return /*#__PURE__*/react.createElement(rc_trigger_es/* default */.A, {
        prefixCls: this.getDropdownPrefix(),
        popupVisible: visible,
        popup: popupElement,
        popupPlacement: this.getDropDownPlacement(),
        popupTransitionName: transitionName,
        builtinPlacements: BUILT_IN_PLACEMENTS,
        getPopupContainer: getPopupContainer,
        popupClassName: this.props.dropdownClassName
      }, children);
    }
  }]);
  return KeywordTrigger;
}(react.Component);
/* harmony default export */ const es_KeywordTrigger = (KeywordTrigger);
;// ./node_modules/rc-mentions/es/Option.js
var Option = function Option() {
  return null;
};
/* harmony default export */ const es_Option = (Option);
;// ./node_modules/rc-mentions/es/util.js
/**
 * Cut input selection into 2 part and return text before selection start
 */
function getBeforeSelectionText(input) {
  var selectionStart = input.selectionStart;
  return input.value.slice(0, selectionStart);
}
/**
 * Find the last match prefix index
 */
function getLastMeasureIndex(text, prefix) {
  return prefix.reduce(function (lastMatch, prefixStr) {
    var lastIndex = text.lastIndexOf(prefixStr);
    if (lastIndex > lastMatch.location) {
      return {
        location: lastIndex,
        prefix: prefixStr
      };
    }
    return lastMatch;
  }, {
    location: -1,
    prefix: ''
  });
}
function lower(char) {
  return (char || '').toLowerCase();
}
function reduceText(text, targetText, split) {
  var firstChar = text[0];
  if (!firstChar || firstChar === split) {
    return text;
  }
  // Reuse rest text as it can
  var restText = text;
  var targetTextLen = targetText.length;
  for (var i = 0; i < targetTextLen; i += 1) {
    if (lower(restText[i]) !== lower(targetText[i])) {
      restText = restText.slice(i);
      break;
    } else if (i === targetTextLen - 1) {
      restText = restText.slice(targetTextLen);
    }
  }
  return restText;
}
/**
 * Paint targetText into current text:
 *  text: little@litest
 *  targetText: light
 *  => little @light test
 */
function replaceWithMeasure(text, measureConfig) {
  var measureLocation = measureConfig.measureLocation,
    prefix = measureConfig.prefix,
    targetText = measureConfig.targetText,
    selectionStart = measureConfig.selectionStart,
    split = measureConfig.split;
  // Before text will append one space if have other text
  var beforeMeasureText = text.slice(0, measureLocation);
  if (beforeMeasureText[beforeMeasureText.length - split.length] === split) {
    beforeMeasureText = beforeMeasureText.slice(0, beforeMeasureText.length - split.length);
  }
  if (beforeMeasureText) {
    beforeMeasureText = "".concat(beforeMeasureText).concat(split);
  }
  // Cut duplicate string with current targetText
  var restText = reduceText(text.slice(selectionStart), targetText.slice(selectionStart - measureLocation - prefix.length), split);
  if (restText.slice(0, split.length) === split) {
    restText = restText.slice(split.length);
  }
  var connectedStartText = "".concat(beforeMeasureText).concat(prefix).concat(targetText).concat(split);
  return {
    text: "".concat(connectedStartText).concat(restText),
    selectionLocation: connectedStartText.length
  };
}
function setInputSelection(input, location) {
  input.setSelectionRange(location, location);
  /**
   * Reset caret into view.
   * Since this function always called by user control, it's safe to focus element.
   */
  input.blur();
  input.focus();
}
function validateSearch(text, props) {
  var split = props.split;
  return !split || text.indexOf(split) === -1;
}
function filterOption(input, _ref) {
  var _ref$value = _ref.value,
    value = _ref$value === void 0 ? '' : _ref$value;
  var lowerCase = input.toLowerCase();
  return value.toLowerCase().indexOf(lowerCase) !== -1;
}
;// ./node_modules/rc-mentions/es/hooks/useEffectState.js


/**
 * Trigger a callback on state change
 */
function useEffectState() {
  var _useState = (0,react.useState)({
      id: 0,
      callback: null
    }),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    effectId = _useState2[0],
    setEffectId = _useState2[1];
  var update = (0,react.useCallback)(function (callback) {
    setEffectId(function (_ref) {
      var id = _ref.id;
      return {
        id: id + 1,
        callback: callback
      };
    });
  }, []);
  (0,react.useEffect)(function () {
    var _effectId$callback;
    (_effectId$callback = effectId.callback) === null || _effectId$callback === void 0 ? void 0 : _effectId$callback.call(effectId);
  }, [effectId]);
  return update;
}
;// ./node_modules/rc-mentions/es/Mentions.js




var _excluded = ["prefixCls", "className", "style", "prefix", "split", "notFoundContent", "value", "defaultValue", "children", "options", "open", "validateSearch", "filterOption", "onChange", "onKeyDown", "onKeyUp", "onPressEnter", "onSearch", "onSelect", "onFocus", "onBlur", "transitionName", "placement", "direction", "getPopupContainer", "dropdownClassName"];












var Mentions = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var prefixCls = props.prefixCls,
    className = props.className,
    style = props.style,
    prefix = props.prefix,
    split = props.split,
    notFoundContent = props.notFoundContent,
    value = props.value,
    defaultValue = props.defaultValue,
    children = props.children,
    options = props.options,
    open = props.open,
    validateSearch = props.validateSearch,
    filterOption = props.filterOption,
    onChange = props.onChange,
    onKeyDown = props.onKeyDown,
    onKeyUp = props.onKeyUp,
    onPressEnter = props.onPressEnter,
    onSearch = props.onSearch,
    onSelect = props.onSelect,
    onFocus = props.onFocus,
    onBlur = props.onBlur,
    transitionName = props.transitionName,
    placement = props.placement,
    direction = props.direction,
    getPopupContainer = props.getPopupContainer,
    dropdownClassName = props.dropdownClassName,
    restProps = (0,objectWithoutProperties/* default */.A)(props, _excluded);
  var mergedPrefix = Array.isArray(prefix) ? prefix : [prefix];
  var mergedProps = (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, props), {}, {
    prefix: mergedPrefix
  });
  // =============================== Refs ===============================
  var textareaRef = (0,react.useRef)(null);
  var measureRef = (0,react.useRef)(null);
  var getTextArea = function getTextArea() {
    var _textareaRef$current, _textareaRef$current$;
    return (_textareaRef$current = textareaRef.current) === null || _textareaRef$current === void 0 ? void 0 : (_textareaRef$current$ = _textareaRef$current.resizableTextArea) === null || _textareaRef$current$ === void 0 ? void 0 : _textareaRef$current$.textArea;
  };
  react.useImperativeHandle(ref, function () {
    var _textareaRef$current4, _textareaRef$current5;
    return {
      focus: function focus() {
        var _textareaRef$current2;
        return (_textareaRef$current2 = textareaRef.current) === null || _textareaRef$current2 === void 0 ? void 0 : _textareaRef$current2.focus();
      },
      blur: function blur() {
        var _textareaRef$current3;
        return (_textareaRef$current3 = textareaRef.current) === null || _textareaRef$current3 === void 0 ? void 0 : _textareaRef$current3.blur();
      },
      textarea: (_textareaRef$current4 = textareaRef.current) === null || _textareaRef$current4 === void 0 ? void 0 : (_textareaRef$current5 = _textareaRef$current4.resizableTextArea) === null || _textareaRef$current5 === void 0 ? void 0 : _textareaRef$current5.textArea
    };
  });
  // ============================== State ===============================
  var _useState = (0,react.useState)(false),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    measuring = _useState2[0],
    setMeasuring = _useState2[1];
  var _useState3 = (0,react.useState)(''),
    _useState4 = (0,slicedToArray/* default */.A)(_useState3, 2),
    measureText = _useState4[0],
    setMeasureText = _useState4[1];
  var _useState5 = (0,react.useState)(''),
    _useState6 = (0,slicedToArray/* default */.A)(_useState5, 2),
    measurePrefix = _useState6[0],
    setMeasurePrefix = _useState6[1];
  var _useState7 = (0,react.useState)(0),
    _useState8 = (0,slicedToArray/* default */.A)(_useState7, 2),
    measureLocation = _useState8[0],
    setMeasureLocation = _useState8[1];
  var _useState9 = (0,react.useState)(0),
    _useState10 = (0,slicedToArray/* default */.A)(_useState9, 2),
    activeIndex = _useState10[0],
    setActiveIndex = _useState10[1];
  var _useState11 = (0,react.useState)(false),
    _useState12 = (0,slicedToArray/* default */.A)(_useState11, 2),
    isFocus = _useState12[0],
    setIsFocus = _useState12[1];
  // ============================== Value ===============================
  var _useMergedState = (0,useMergedState/* default */.A)('', {
      defaultValue: defaultValue,
      value: value
    }),
    _useMergedState2 = (0,slicedToArray/* default */.A)(_useMergedState, 2),
    mergedValue = _useMergedState2[0],
    setMergedValue = _useMergedState2[1];
  // =============================== Open ===============================
  (0,react.useEffect)(function () {
    // Sync measure div top with textarea for rc-trigger usage
    if (measuring && measureRef.current) {
      measureRef.current.scrollTop = getTextArea().scrollTop;
    }
  }, [measuring]);
  var _React$useMemo = react.useMemo(function () {
      if (open) {
        if (false) {}
        for (var i = 0; i < mergedPrefix.length; i += 1) {
          var curPrefix = mergedPrefix[i];
          var index = mergedValue.lastIndexOf(curPrefix);
          if (index >= 0) {
            return [true, '', curPrefix, index];
          }
        }
      }
      return [measuring, measureText, measurePrefix, measureLocation];
    }, [open, measuring, mergedPrefix, mergedValue, measureText, measurePrefix, measureLocation]),
    _React$useMemo2 = (0,slicedToArray/* default */.A)(_React$useMemo, 4),
    mergedMeasuring = _React$useMemo2[0],
    mergedMeasureText = _React$useMemo2[1],
    mergedMeasurePrefix = _React$useMemo2[2],
    mergedMeasureLocation = _React$useMemo2[3];
  // ============================== Option ==============================
  var getOptions = react.useCallback(function (targetMeasureText) {
    var list;
    if (options && options.length > 0) {
      list = options.map(function (item) {
        var _item$key;
        return (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, item), {}, {
          key: (_item$key = item === null || item === void 0 ? void 0 : item.key) !== null && _item$key !== void 0 ? _item$key : item.value
        });
      });
    } else {
      list = (0,toArray/* default */.A)(children).map(function (_ref) {
        var optionProps = _ref.props,
          key = _ref.key;
        return (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, optionProps), {}, {
          label: optionProps.children,
          key: key || optionProps.value
        });
      });
    }
    return list.filter(function (option) {
      /** Return all result if `filterOption` is false. */
      if (filterOption === false) {
        return true;
      }
      return filterOption(targetMeasureText, option);
    });
  }, [children, options, filterOption]);
  var mergedOptions = react.useMemo(function () {
    return getOptions(mergedMeasureText);
  }, [getOptions, mergedMeasureText]);
  // ============================= Measure ==============================
  // Mark that we will reset input selection to target position when user select option
  var onSelectionEffect = useEffectState();
  var startMeasure = function startMeasure(nextMeasureText, nextMeasurePrefix, nextMeasureLocation) {
    setMeasuring(true);
    setMeasureText(nextMeasureText);
    setMeasurePrefix(nextMeasurePrefix);
    setMeasureLocation(nextMeasureLocation);
    setActiveIndex(0);
  };
  var stopMeasure = function stopMeasure(callback) {
    setMeasuring(false);
    setMeasureLocation(0);
    setMeasureText('');
    onSelectionEffect(callback);
  };
  // ============================== Change ==============================
  var triggerChange = function triggerChange(nextValue) {
    setMergedValue(nextValue);
    onChange === null || onChange === void 0 ? void 0 : onChange(nextValue);
  };
  var onInternalChange = function onInternalChange(_ref2) {
    var nextValue = _ref2.target.value;
    triggerChange(nextValue);
  };
  var selectOption = function selectOption(option) {
    var _getTextArea;
    var _option$value = option.value,
      mentionValue = _option$value === void 0 ? '' : _option$value;
    var _replaceWithMeasure = replaceWithMeasure(mergedValue, {
        measureLocation: mergedMeasureLocation,
        targetText: mentionValue,
        prefix: mergedMeasurePrefix,
        selectionStart: (_getTextArea = getTextArea()) === null || _getTextArea === void 0 ? void 0 : _getTextArea.selectionStart,
        split: split
      }),
      text = _replaceWithMeasure.text,
      selectionLocation = _replaceWithMeasure.selectionLocation;
    triggerChange(text);
    stopMeasure(function () {
      // We need restore the selection position
      setInputSelection(getTextArea(), selectionLocation);
    });
    onSelect === null || onSelect === void 0 ? void 0 : onSelect(option, mergedMeasurePrefix);
  };
  // ============================= KeyEvent =============================
  // Check if hit the measure keyword
  var onInternalKeyDown = function onInternalKeyDown(event) {
    var which = event.which;
    onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(event);
    // Skip if not measuring
    if (!mergedMeasuring) {
      return;
    }
    if (which === KeyCode/* default */.A.UP || which === KeyCode/* default */.A.DOWN) {
      // Control arrow function
      var optionLen = mergedOptions.length;
      var offset = which === KeyCode/* default */.A.UP ? -1 : 1;
      var newActiveIndex = (activeIndex + offset + optionLen) % optionLen;
      setActiveIndex(newActiveIndex);
      event.preventDefault();
    } else if (which === KeyCode/* default */.A.ESC) {
      stopMeasure();
    } else if (which === KeyCode/* default */.A.ENTER) {
      // Measure hit
      event.preventDefault();
      if (!mergedOptions.length) {
        stopMeasure();
        return;
      }
      var option = mergedOptions[activeIndex];
      selectOption(option);
    }
  };
  /**
   * When to start measure:
   * 1. When user press `prefix`
   * 2. When measureText !== prevMeasureText
   *  - If measure hit
   *  - If measuring
   *
   * When to stop measure:
   * 1. Selection is out of range
   * 2. Contains `space`
   * 3. ESC or select one
   */
  var onInternalKeyUp = function onInternalKeyUp(event) {
    var key = event.key,
      which = event.which;
    var target = event.target;
    var selectionStartText = getBeforeSelectionText(target);
    var _getLastMeasureIndex = getLastMeasureIndex(selectionStartText, mergedPrefix),
      measureIndex = _getLastMeasureIndex.location,
      nextMeasurePrefix = _getLastMeasureIndex.prefix;
    // If the client implements an onKeyUp handler, call it
    onKeyUp === null || onKeyUp === void 0 ? void 0 : onKeyUp(event);
    // Skip if match the white key list
    if ([KeyCode/* default */.A.ESC, KeyCode/* default */.A.UP, KeyCode/* default */.A.DOWN, KeyCode/* default */.A.ENTER].indexOf(which) !== -1) {
      return;
    }
    if (measureIndex !== -1) {
      var nextMeasureText = selectionStartText.slice(measureIndex + nextMeasurePrefix.length);
      var validateMeasure = validateSearch(nextMeasureText, mergedProps);
      var matchOption = !!getOptions(nextMeasureText).length;
      if (validateMeasure) {
        if (key === nextMeasurePrefix || key === 'Shift' || mergedMeasuring || nextMeasureText !== mergedMeasureText && matchOption) {
          startMeasure(nextMeasureText, nextMeasurePrefix, measureIndex);
        }
      } else if (mergedMeasuring) {
        // Stop if measureText is invalidate
        stopMeasure();
      }
      /**
       * We will trigger `onSearch` to developer since they may use for async update.
       * If met `space` means user finished searching.
       */
      if (onSearch && validateMeasure) {
        onSearch(nextMeasureText, nextMeasurePrefix);
      }
    } else if (mergedMeasuring) {
      stopMeasure();
    }
  };
  var onInternalPressEnter = function onInternalPressEnter(event) {
    if (!mergedMeasuring && onPressEnter) {
      onPressEnter(event);
    }
  };
  // ============================ Focus Blur ============================
  var focusRef = (0,react.useRef)();
  var onInternalFocus = function onInternalFocus(event) {
    window.clearTimeout(focusRef.current);
    if (!isFocus && event && onFocus) {
      onFocus(event);
    }
    setIsFocus(true);
  };
  var onInternalBlur = function onInternalBlur(event) {
    focusRef.current = window.setTimeout(function () {
      setIsFocus(false);
      stopMeasure();
      onBlur === null || onBlur === void 0 ? void 0 : onBlur(event);
    }, 0);
  };
  var onDropdownFocus = function onDropdownFocus() {
    onInternalFocus();
  };
  var onDropdownBlur = function onDropdownBlur() {
    onInternalBlur();
  };
  // ============================== Render ==============================
  return /*#__PURE__*/react.createElement("div", {
    className: classnames_default()(prefixCls, className),
    style: style
  }, /*#__PURE__*/react.createElement(es["default"], (0,esm_extends/* default */.A)({
    ref: textareaRef,
    value: mergedValue
  }, restProps, {
    onChange: onInternalChange,
    onKeyDown: onInternalKeyDown,
    onKeyUp: onInternalKeyUp,
    onPressEnter: onInternalPressEnter,
    onFocus: onInternalFocus,
    onBlur: onInternalBlur
  })), mergedMeasuring && /*#__PURE__*/react.createElement("div", {
    ref: measureRef,
    className: "".concat(prefixCls, "-measure")
  }, mergedValue.slice(0, mergedMeasureLocation), /*#__PURE__*/react.createElement(es_MentionsContext.Provider, {
    value: {
      notFoundContent: notFoundContent,
      activeIndex: activeIndex,
      setActiveIndex: setActiveIndex,
      selectOption: selectOption,
      onFocus: onDropdownFocus,
      onBlur: onDropdownBlur
    }
  }, /*#__PURE__*/react.createElement(es_KeywordTrigger, {
    prefixCls: prefixCls,
    transitionName: transitionName,
    placement: placement,
    direction: direction,
    options: mergedOptions,
    visible: true,
    getPopupContainer: getPopupContainer,
    dropdownClassName: dropdownClassName
  }, /*#__PURE__*/react.createElement("span", null, mergedMeasurePrefix))), mergedValue.slice(mergedMeasureLocation + mergedMeasurePrefix.length)));
});
Mentions.defaultProps = {
  prefixCls: 'rc-mentions',
  prefix: '@',
  split: ' ',
  validateSearch: validateSearch,
  filterOption: filterOption,
  notFoundContent: 'Not Found',
  rows: 1
};
Mentions.Option = es_Option;
/* harmony default export */ const es_Mentions = (Mentions);
;// ./node_modules/rc-mentions/es/index.js

/* harmony default export */ const rc_mentions_es = (es_Mentions);

/***/ })

}]);