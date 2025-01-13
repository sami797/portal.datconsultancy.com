"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[1692],{

/***/ 91692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ es_ProCard)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(64467);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(82284);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(5544);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(80045);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons-svg/es/asn/RightOutlined.js
var asn_RightOutlined = __webpack_require__(24719);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 5 modules
var AntdIcon = __webpack_require__(61187);
;// ./node_modules/@ant-design/icons/es/icons/RightOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var RightOutlined = function RightOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.A, (0,esm_extends/* default */.A)({}, props, {
    ref: ref,
    icon: asn_RightOutlined/* default */.A
  }));
};
if (false) {}
/* harmony default export */ const icons_RightOutlined = (/*#__PURE__*/react.forwardRef(RightOutlined));
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/InfoCircleOutlined.js
var InfoCircleOutlined = __webpack_require__(9494);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/index.js + 2 modules
var config_provider = __webpack_require__(98022);
// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js
var es_tooltip = __webpack_require__(81541);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(48383);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/@ant-design/pro-provider/es/useStyle/index.js + 33 modules
var useStyle = __webpack_require__(60359);
;// ./node_modules/@ant-design/pro-utils/es/components/LabelIconTip/style.js



var genProStyle = function genProStyle(token) {
  return (0,defineProperty/* default */.A)({}, token.componentCls, {
    display: 'inline-flex',
    alignItems: 'center',
    maxWidth: '100%',
    '&-icon': {
      display: 'block',
      marginInlineStart: '4px',
      cursor: 'pointer',
      '&:hover': {
        color: token.colorPrimary
      }
    },
    '&-title': {
      display: 'inline-flex',
      flex: '1'
    },
    '&-subtitle ': {
      marginInlineStart: 8,
      color: token.colorTextSecondary,
      fontWeight: 'normal',
      fontSize: token.fontSize,
      whiteSpace: 'nowrap'
    },
    '&-title-ellipsis': {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      wordBreak: 'keep-all'
    }
  });
};
function style_useStyle(prefixCls) {
  return (0,useStyle/* useStyle */.X3)('LabelIconTip', function (token) {
    var proToken = (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProStyle(proToken)];
  });
}
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./node_modules/@ant-design/pro-utils/es/components/LabelIconTip/index.js








/**
 * 在 form 的 label 后面增加一个 tips 来展示一些说明文案
 *
 * @param props
 */



var LabelIconTip = /*#__PURE__*/react.memo(function (props) {
  var label = props.label,
    tooltip = props.tooltip,
    ellipsis = props.ellipsis,
    subTitle = props.subTitle;
  var _useContext = (0,react.useContext)(config_provider/* default.ConfigContext */.Ay.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var className = getPrefixCls('pro-core-label-tip');
  var _useStyle = style_useStyle(className),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  if (!tooltip && !subTitle) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
      children: label
    });
  }
  var tooltipProps = typeof tooltip === 'string' || /*#__PURE__*/react.isValidElement(tooltip) ? {
    title: tooltip
  } : tooltip;
  var icon = (tooltipProps === null || tooltipProps === void 0 ? void 0 : tooltipProps.icon) || /*#__PURE__*/(0,jsx_runtime.jsx)(InfoCircleOutlined/* default */.A, {});
  return wrapSSR( /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: classnames_default()(className, hashId),
    onMouseDown: function onMouseDown(e) {
      return e.stopPropagation();
    },
    onMouseLeave: function onMouseLeave(e) {
      return e.stopPropagation();
    },
    onMouseMove: function onMouseMove(e) {
      return e.stopPropagation();
    },
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: classnames_default()("".concat(className, "-title"), hashId, (0,defineProperty/* default */.A)({}, "".concat(className, "-title-ellipsis"), ellipsis)),
      children: label
    }), subTitle && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "".concat(className, "-subtitle ").concat(hashId).trim(),
      children: subTitle
    }), tooltip && /*#__PURE__*/(0,jsx_runtime.jsx)(es_tooltip/* default */.A, (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, tooltipProps), {}, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: "".concat(className, "-icon ").concat(hashId).trim(),
        children: icon
      })
    }))]
  }));
});
// EXTERNAL MODULE: ./node_modules/antd/es/grid/hooks/useBreakpoint.js
var useBreakpoint = __webpack_require__(16661);
;// ./node_modules/antd/es/grid/index.js



// Do not export params
function grid_useBreakpoint() {
  return (0,useBreakpoint/* default */.A)();
}

/* harmony default export */ const grid = ({
  useBreakpoint: grid_useBreakpoint
});
// EXTERNAL MODULE: ./node_modules/antd/es/tabs/index.js + 22 modules
var es_tabs = __webpack_require__(92555);
;// ./node_modules/omit.js/es/index.js
function omit(obj, fields) {
  // eslint-disable-next-line prefer-object-spread
  var shallowCopy = Object.assign({}, obj);
  for (var i = 0; i < fields.length; i += 1) {
    var key = fields[i];
    delete shallowCopy[key];
  }
  return shallowCopy;
}
/* harmony default export */ const es = (omit);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useMergedState.js
var useMergedState = __webpack_require__(71207);
;// ./node_modules/@ant-design/pro-card/es/components/Actions/style.js



var genActionsStyle = function genActionsStyle(token) {
  var _div, _$concat;
  var componentCls = token.componentCls,
    antCls = token.antCls;
  return (0,defineProperty/* default */.A)({}, "".concat(componentCls, "-actions"), (_$concat = {
    marginBlock: 0,
    marginInline: 0,
    paddingBlock: 0,
    paddingInline: 0,
    listStyle: 'none',
    display: 'flex',
    gap: token.marginXS,
    background: token.colorBgContainer,
    borderBlockStart: "".concat(token.lineWidth, "px ").concat(token.lineType, " ").concat(token.colorSplit),
    minHeight: 42
  }, (0,defineProperty/* default */.A)(_$concat, "& > *", {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    display: 'flex',
    cursor: 'pointer',
    color: token.colorTextSecondary,
    transition: 'color 0.3s',
    '&:hover': {
      color: token.colorPrimaryHover
    }
  }), (0,defineProperty/* default */.A)(_$concat, "& > li > div", {
    flex: 1,
    width: '100%',
    marginBlock: token.marginSM,
    marginInline: 0,
    color: token.colorTextSecondary,
    textAlign: 'center',
    a: {
      color: token.colorTextSecondary,
      transition: 'color 0.3s',
      '&:hover': {
        color: token.colorPrimaryHover
      }
    },
    div: (_div = {
      position: 'relative',
      display: 'block',
      minWidth: 32,
      fontSize: token.fontSize,
      lineHeight: token.lineHeight,
      cursor: 'pointer',
      '&:hover': {
        color: token.colorPrimaryHover,
        transition: 'color 0.3s'
      }
    }, (0,defineProperty/* default */.A)(_div, "a:not(".concat(antCls, "-btn),\n            > .anticon"), {
      display: 'inline-block',
      width: '100%',
      color: token.colorTextSecondary,
      lineHeight: '22px',
      transition: 'color 0.3s',
      '&:hover': {
        color: token.colorPrimaryHover
      }
    }), (0,defineProperty/* default */.A)(_div, '.anticon', {
      fontSize: token.cardActionIconSize,
      lineHeight: '22px'
    }), _div),
    '&:not(:last-child)': {
      borderInlineEnd: "".concat(token.lineWidth, "px ").concat(token.lineType, " ").concat(token.colorSplit)
    }
  }), _$concat));
};
function Actions_style_useStyle(prefixCls) {
  return (0,useStyle/* useStyle */.X3)('ProCardActions', function (token) {
    var proCardActionsToken = (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, token), {}, {
      componentCls: ".".concat(prefixCls),
      cardActionIconSize: 16
    });
    return [genActionsStyle(proCardActionsToken)];
  });
}
;// ./node_modules/@ant-design/pro-card/es/components/Actions/index.js




var ProCardActions = function ProCardActions(props) {
  var actions = props.actions,
    prefixCls = props.prefixCls;
  var _useStyle = Actions_style_useStyle(prefixCls),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  if (Array.isArray(actions) && actions !== null && actions !== void 0 && actions.length) {
    return wrapSSR( /*#__PURE__*/(0,jsx_runtime.jsx)("ul", {
      className: classnames_default()("".concat(prefixCls, "-actions"), hashId),
      children: actions.map(function (action, index) {
        return /*#__PURE__*/(
          // eslint-disable-next-line react/no-array-index-key
          (0,jsx_runtime.jsx)("li", {
            style: {
              width: "".concat(100 / actions.length, "%"),
              padding: 0,
              margin: 0
            },
            className: classnames_default()("".concat(prefixCls, "-actions-item"), hashId),
            children: action
          }, "action-".concat(index))
        );
      })
    }));
  }
  return wrapSSR( /*#__PURE__*/(0,jsx_runtime.jsx)("ul", {
    className: classnames_default()("".concat(prefixCls, "-actions"), hashId),
    children: actions
  }));
};
/* harmony default export */ const Actions = (ProCardActions);
// EXTERNAL MODULE: ./node_modules/antd/es/row/index.js
var row = __webpack_require__(87094);
// EXTERNAL MODULE: ./node_modules/antd/es/col/index.js
var col = __webpack_require__(41988);
// EXTERNAL MODULE: ./node_modules/@ant-design/cssinjs/es/index.js + 28 modules
var cssinjs_es = __webpack_require__(78205);
;// ./node_modules/@ant-design/pro-card/es/components/Loading/style.js




var cardLoading = new cssinjs_es/* Keyframes */.Mo('card-loading', {
  '0%': {
    backgroundPosition: '0 50%'
  },
  '50%': {
    backgroundPosition: '100% 50%'
  },
  '100%': {
    backgroundPosition: '0 50%'
  }
});
var style_genProStyle = function genProStyle(token) {
  var _token$componentCls;
  return (0,defineProperty/* default */.A)({}, token.componentCls, (_token$componentCls = {
    '&-loading': {
      overflow: 'hidden'
    },
    '&-loading &-body': {
      userSelect: 'none'
    }
  }, (0,defineProperty/* default */.A)(_token$componentCls, "".concat(token.componentCls, "-loading-content"), {
    width: '100%',
    p: {
      marginBlock: 0,
      marginInline: 0
    }
  }), (0,defineProperty/* default */.A)(_token$componentCls, "".concat(token.componentCls, "-loading-block"), {
    height: '14px',
    marginBlock: '4px',
    background: "linear-gradient(90deg, rgba(54, 61, 64, 0.2), rgba(54, 61, 64, 0.4), rgba(54, 61, 64, 0.2))",
    backgroundSize: '600% 600%',
    borderRadius: token.borderRadius,
    animationName: cardLoading,
    animationDuration: '1.4s',
    animationTimingFunction: 'ease',
    animationIterationCount: 'infinite'
  }), _token$componentCls));
};
function Loading_style_useStyle(prefixCls) {
  return (0,useStyle/* useStyle */.X3)('ProCardLoading', function (token) {
    var proToken = (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [style_genProStyle(proToken)];
  });
}
;// ./node_modules/@ant-design/pro-card/es/components/Loading/index.js





var Loading = function Loading(props) {
  var style = props.style,
    prefix = props.prefix;
  var _useStyle = Loading_style_useStyle(prefix || 'ant-pro-card'),
    wrapSSR = _useStyle.wrapSSR;
  return wrapSSR( /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "".concat(prefix, "-loading-content"),
    style: style,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(row/* default */.A, {
      gutter: 8,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.A, {
        span: 22,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "".concat(prefix, "-loading-block")
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.A, {
      gutter: 8,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.A, {
        span: 8,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "".concat(prefix, "-loading-block")
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.A, {
        span: 15,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "".concat(prefix, "-loading-block")
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.A, {
      gutter: 8,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.A, {
        span: 6,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "".concat(prefix, "-loading-block")
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.A, {
        span: 18,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "".concat(prefix, "-loading-block")
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.A, {
      gutter: 8,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.A, {
        span: 13,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "".concat(prefix, "-loading-block")
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.A, {
        span: 9,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "".concat(prefix, "-loading-block")
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.A, {
      gutter: 8,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.A, {
        span: 4,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "".concat(prefix, "-loading-block")
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.A, {
        span: 3,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "".concat(prefix, "-loading-block")
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.A, {
        span: 16,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "".concat(prefix, "-loading-block")
        })
      })]
    })]
  }));
};
/* harmony default export */ const components_Loading = (Loading);
;// ./node_modules/antd/es/version/index.js
/* harmony default export */ const version = ('4.24.10');
// EXTERNAL MODULE: ./node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__(50604);
// EXTERNAL MODULE: ./node_modules/rc-util/es/warning.js
var warning = __webpack_require__(99424);
;// ./node_modules/@ant-design/pro-card/es/components/TabPane/index.js


var _excluded = ["tab", "children"],
  _excluded2 = ["key", "tab", "tabKey", "disabled", "destroyInactiveTabPane", "children", "className", "style", "cardProps"];








function filter(items) {
  return items.filter(function (item) {
    return item;
  });
}
function useLegacyItems(items, children, tabs) {
  if (items) {
    return items.map(function (item) {
      return (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, item), {}, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_Card, (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, tabs === null || tabs === void 0 ? void 0 : tabs.cardProps), {}, {
          children: item.children
        }))
      });
    });
  }
  (0,warning/* noteOnce */.g9)(!tabs, 'Tabs.TabPane is deprecated. Please use `items` directly.');
  var childrenItems = (0,toArray/* default */.A)(children).map(function (node) {
    if ( /*#__PURE__*/react.isValidElement(node)) {
      var key = node.key,
        props = node.props;
      var _ref = props || {},
        tab = _ref.tab,
        tempChild = _ref.children,
        restProps = (0,objectWithoutProperties/* default */.A)(_ref, _excluded);
      var item = (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({
        key: String(key)
      }, restProps), {}, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_Card, (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, tabs === null || tabs === void 0 ? void 0 : tabs.cardProps), {}, {
          children: tempChild
        })),
        label: tab
      });
      return item;
    }
    return null;
  });
  return filter(childrenItems);
}
/**
 * @deprecated ProComponets 3.0
 */
var TabPane = function TabPane(props) {
  var _useContext = (0,react.useContext)(config_provider/* default.ConfigContext */.Ay.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  // 如果是antd v5 则返回为空
  if (version.startsWith('5')) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
  } else {
    var key = props.key,
      tab = props.tab,
      tabKey = props.tabKey,
      disabled = props.disabled,
      destroyInactiveTabPane = props.destroyInactiveTabPane,
      children = props.children,
      className = props.className,
      style = props.style,
      cardProps = props.cardProps,
      rest = (0,objectWithoutProperties/* default */.A)(props, _excluded2);
    var prefixCls = getPrefixCls('pro-card-tabpane');
    var tabPaneClassName = classnames_default()(prefixCls, className);
    return /*#__PURE__*/(0,jsx_runtime.jsx)(es_tabs/* default */.A.TabPane, (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({
      tabKey: tabKey,
      tab: tab,
      className: tabPaneClassName,
      style: style,
      disabled: disabled,
      destroyInactiveTabPane: destroyInactiveTabPane
    }, rest), {}, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_Card, (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, cardProps), {}, {
        children: children
      }))
    }), key);
  }
};
if (typeof process !== 'undefined' && "production" !== 'production') {}
/* harmony default export */ const components_TabPane = (TabPane);
;// ./node_modules/@ant-design/pro-card/es/components/Card/style.js



var genActiveStyle = function genActiveStyle(token) {
  return {
    backgroundColor: token.controlItemBgActive,
    borderColor: token.controlOutline
  };
};
var genProCardStyle = function genProCardStyle(token) {
  var _sizeSmall, _objectSpread2, _$concat2, _$concat9, _ref;
  var componentCls = token.componentCls;
  return _ref = {}, (0,defineProperty/* default */.A)(_ref, componentCls, (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    width: '100%',
    marginBlock: 0,
    marginInline: 0,
    paddingBlock: 0,
    paddingInline: 0,
    backgroundColor: token.colorBgContainer,
    borderRadius: token.borderRadius
  }, useStyle/* resetComponent */.dF === null || useStyle/* resetComponent */.dF === void 0 ? void 0 : (0,useStyle/* resetComponent */.dF)(token)), {}, (_objectSpread2 = {
    '&-box-shadow': {
      boxShadow: '0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017',
      borderColor: 'transparent'
    },
    '&-col': {
      width: '100%'
    },
    '&-border': {
      border: "".concat(token.lineWidth, "px ").concat(token.lineType, " ").concat(token.colorSplit)
    },
    '&-hoverable': (0,defineProperty/* default */.A)({
      cursor: 'pointer',
      transition: 'box-shadow 0.3s, border-color 0.3s',
      '&:hover': {
        borderColor: 'transparent',
        boxShadow: '0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017'
      }
    }, "&".concat(componentCls, "-checked:hover"), {
      borderColor: token.controlOutline
    }),
    '&-checked': (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, genActiveStyle(token)), {}, {
      '&::after': {
        position: 'absolute',
        insetBlockStart: 2,
        insetInlineEnd: 2,
        width: 0,
        height: 0,
        border: "6px solid ".concat(token.colorPrimary),
        borderBlockEnd: '6px solid transparent',
        borderInlineStart: '6px solid transparent',
        borderStartEndRadius: 2,
        content: '""'
      }
    }),
    '&:focus': (0,objectSpread2/* default */.A)({}, genActiveStyle(token)),
    '&&-ghost': (0,defineProperty/* default */.A)({
      backgroundColor: 'transparent'
    }, "> ".concat(componentCls), {
      '&-header': {
        paddingInlineEnd: 0,
        paddingBlockEnd: token.padding,
        paddingInlineStart: 0
      },
      '&-body': {
        paddingBlock: 0,
        paddingInline: 0,
        backgroundColor: 'transparent'
      }
    }),
    '&&-split > &-body': {
      paddingBlock: 0,
      paddingInline: 0
    },
    '&&-contain-card > &-body': {
      display: 'flex'
    }
  }, (0,defineProperty/* default */.A)(_objectSpread2, "".concat(componentCls, "-body-direction-column"), {
    flexDirection: 'column'
  }), (0,defineProperty/* default */.A)(_objectSpread2, "".concat(componentCls, "-body-wrap"), {
    flexWrap: 'wrap'
  }), (0,defineProperty/* default */.A)(_objectSpread2, '&&-collapse', (0,defineProperty/* default */.A)({}, "> ".concat(componentCls), {
    '&-header': {
      paddingBlockEnd: token.padding,
      borderBlockEnd: 0
    },
    '&-body': {
      display: 'none'
    }
  })), (0,defineProperty/* default */.A)(_objectSpread2, "".concat(componentCls, "-header"), {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingInline: token.paddingLG,
    paddingBlock: token.padding,
    paddingBlockEnd: 0,
    '&-border': {
      '&': {
        paddingBlockEnd: token.padding
      },
      borderBlockEnd: "".concat(token.lineWidth, "px ").concat(token.lineType, " ").concat(token.colorSplit)
    },
    '&-collapsible': {
      cursor: 'pointer'
    }
  }), (0,defineProperty/* default */.A)(_objectSpread2, "".concat(componentCls, "-title"), {
    color: token.colorText,
    fontWeight: 500,
    fontSize: token.fontSizeLG,
    lineHeight: token.lineHeight
  }), (0,defineProperty/* default */.A)(_objectSpread2, "".concat(componentCls, "-extra"), {
    color: token.colorText
  }), (0,defineProperty/* default */.A)(_objectSpread2, "".concat(componentCls, "-type-inner"), (0,defineProperty/* default */.A)({}, "".concat(componentCls, "-header"), {
    backgroundColor: token.colorFillAlter
  })), (0,defineProperty/* default */.A)(_objectSpread2, "".concat(componentCls, "-collapsible-icon"), {
    marginInlineEnd: token.marginXS,
    color: token.colorIconHover,
    ':hover': {
      color: token.colorPrimaryHover
    },
    '& svg': {
      transition: "transform ".concat(token.motionDurationMid)
    }
  }), (0,defineProperty/* default */.A)(_objectSpread2, "".concat(componentCls, "-body"), {
    display: 'block',
    boxSizing: 'border-box',
    height: '100%',
    paddingInline: token.paddingLG,
    paddingBlock: token.padding,
    '&-center': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }), (0,defineProperty/* default */.A)(_objectSpread2, '&&-size-small', (_sizeSmall = {}, (0,defineProperty/* default */.A)(_sizeSmall, componentCls, {
    '&-header': {
      paddingInline: token.paddingSM,
      paddingBlock: token.paddingXS,
      paddingBlockEnd: 0,
      '&-border': {
        paddingBlockEnd: token.paddingXS
      }
    },
    '&-title': {
      fontSize: token.fontSize
    },
    '&-body': {
      paddingInline: token.paddingSM,
      paddingBlock: token.paddingSM
    }
  }), (0,defineProperty/* default */.A)(_sizeSmall, "".concat(componentCls, "-header").concat(componentCls, "-header-collapsible"), {
    paddingBlock: token.paddingXS
  }), _sizeSmall)), _objectSpread2))), (0,defineProperty/* default */.A)(_ref, "".concat(componentCls, "-col"), (_$concat2 = {}, (0,defineProperty/* default */.A)(_$concat2, "&".concat(componentCls, "-split-vertical"), {
    borderInlineEnd: "".concat(token.lineWidth, "px ").concat(token.lineType, " ").concat(token.colorSplit)
  }), (0,defineProperty/* default */.A)(_$concat2, "&".concat(componentCls, "-split-horizontal"), {
    borderBlockEnd: "".concat(token.lineWidth, "px ").concat(token.lineType, " ").concat(token.colorSplit)
  }), _$concat2)), (0,defineProperty/* default */.A)(_ref, "".concat(componentCls, "-tabs"), (_$concat9 = {}, (0,defineProperty/* default */.A)(_$concat9, "".concat(token.antCls, "-tabs-top > ").concat(token.antCls, "-tabs-nav"), (0,defineProperty/* default */.A)({
    marginBlockEnd: 0
  }, "".concat(token.antCls, "-tabs-nav-list"), {
    marginBlockStart: token.marginXS,
    paddingInlineStart: token.padding
  })), (0,defineProperty/* default */.A)(_$concat9, "".concat(token.antCls, "-tabs-bottom > ").concat(token.antCls, "-tabs-nav"), (0,defineProperty/* default */.A)({
    marginBlockEnd: 0
  }, "".concat(token.antCls, "-tabs-nav-list"), {
    paddingInlineStart: token.padding
  })), (0,defineProperty/* default */.A)(_$concat9, "".concat(token.antCls, "-tabs-left"), (0,defineProperty/* default */.A)({}, "".concat(token.antCls, "-tabs-content-holder"), (0,defineProperty/* default */.A)({}, "".concat(token.antCls, "-tabs-content"), (0,defineProperty/* default */.A)({}, "".concat(token.antCls, "-tabs-tabpane"), {
    paddingInlineStart: 0
  })))), (0,defineProperty/* default */.A)(_$concat9, "".concat(token.antCls, "-tabs-left > ").concat(token.antCls, "-tabs-nav"), (0,defineProperty/* default */.A)({
    marginInlineEnd: 0
  }, "".concat(token.antCls, "-tabs-nav-list"), {
    paddingBlockStart: token.padding
  })), (0,defineProperty/* default */.A)(_$concat9, "".concat(token.antCls, "-tabs-right"), (0,defineProperty/* default */.A)({}, "".concat(token.antCls, "-tabs-content-holder"), (0,defineProperty/* default */.A)({}, "".concat(token.antCls, "-tabs-content"), (0,defineProperty/* default */.A)({}, "".concat(token.antCls, "-tabs-tabpane"), {
    paddingInlineStart: 0
  })))), (0,defineProperty/* default */.A)(_$concat9, "".concat(token.antCls, "-tabs-right > ").concat(token.antCls, "-tabs-nav"), (0,defineProperty/* default */.A)({}, "".concat(token.antCls, "-tabs-nav-list"), {
    paddingBlockStart: token.padding
  })), _$concat9)), _ref;
};
var GRID_COLUMNS = 24;
var genColStyle = function genColStyle(index, token) {
  var componentCls = token.componentCls;
  if (index === 0) {
    return (0,defineProperty/* default */.A)({}, "".concat(componentCls, "-col-0"), {
      display: 'none'
    });
  }
  return (0,defineProperty/* default */.A)({}, "".concat(componentCls, "-col-").concat(index), {
    flexShrink: 0,
    width: "".concat(index / GRID_COLUMNS * 100, "%")
  });
};
var genGridStyle = function genGridStyle(token) {
  return Array(GRID_COLUMNS + 1).fill(1).map(function (_, index) {
    return genColStyle(index, token);
  });
};
function Card_style_useStyle(prefixCls) {
  return (0,useStyle/* useStyle */.X3)('ProCard', function (token) {
    var proCardToken = (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProCardStyle(proCardToken), genGridStyle(proCardToken)];
  });
}
;// ./node_modules/@ant-design/pro-card/es/components/Card/index.js





var Card_excluded = ["className", "style", "bodyStyle", "headStyle", "title", "subTitle", "extra", "tip", "wrap", "layout", "loading", "gutter", "tooltip", "split", "headerBordered", "bordered", "boxShadow", "children", "size", "actions", "ghost", "hoverable", "direction", "collapsed", "collapsible", "collapsibleIconRender", "defaultCollapsed", "onCollapse", "checked", "onChecked", "tabs", "type"];













var Card_useBreakpoint = grid.useBreakpoint;
var Card = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _classNames2, _classNames3, _classNames4;
  var className = props.className,
    style = props.style,
    _props$bodyStyle = props.bodyStyle,
    bodyStyle = _props$bodyStyle === void 0 ? {} : _props$bodyStyle,
    _props$headStyle = props.headStyle,
    headStyle = _props$headStyle === void 0 ? {} : _props$headStyle,
    title = props.title,
    subTitle = props.subTitle,
    extra = props.extra,
    tip = props.tip,
    _props$wrap = props.wrap,
    wrap = _props$wrap === void 0 ? false : _props$wrap,
    layout = props.layout,
    loading = props.loading,
    _props$gutter = props.gutter,
    gutter = _props$gutter === void 0 ? 0 : _props$gutter,
    tooltip = props.tooltip,
    split = props.split,
    _props$headerBordered = props.headerBordered,
    headerBordered = _props$headerBordered === void 0 ? false : _props$headerBordered,
    _props$bordered = props.bordered,
    bordered = _props$bordered === void 0 ? false : _props$bordered,
    _props$boxShadow = props.boxShadow,
    boxShadow = _props$boxShadow === void 0 ? false : _props$boxShadow,
    children = props.children,
    size = props.size,
    actions = props.actions,
    _props$ghost = props.ghost,
    ghost = _props$ghost === void 0 ? false : _props$ghost,
    _props$hoverable = props.hoverable,
    hoverable = _props$hoverable === void 0 ? false : _props$hoverable,
    direction = props.direction,
    controlCollapsed = props.collapsed,
    _props$collapsible = props.collapsible,
    collapsible = _props$collapsible === void 0 ? false : _props$collapsible,
    collapsibleIconRender = props.collapsibleIconRender,
    _props$defaultCollaps = props.defaultCollapsed,
    defaultCollapsed = _props$defaultCollaps === void 0 ? false : _props$defaultCollaps,
    onCollapse = props.onCollapse,
    checked = props.checked,
    onChecked = props.onChecked,
    tabs = props.tabs,
    type = props.type,
    rest = (0,objectWithoutProperties/* default */.A)(props, Card_excluded);
  var _useContext = (0,react.useContext)(config_provider/* default.ConfigContext */.Ay.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var screens = Card_useBreakpoint();
  var _useMergedState = (0,useMergedState/* default */.A)(defaultCollapsed, {
      value: controlCollapsed,
      onChange: onCollapse
    }),
    _useMergedState2 = (0,slicedToArray/* default */.A)(_useMergedState, 2),
    collapsed = _useMergedState2[0],
    setCollapsed = _useMergedState2[1];

  // 顺序决定如何进行响应式取值，按最大响应值依次取值，请勿修改。
  var responsiveArray = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
  // 修改组合传给antd tabs的参数
  // @ts-ignore
  var ModifyTabItemsContant = useLegacyItems(tabs === null || tabs === void 0 ? void 0 : tabs.items, children, tabs);

  /**
   * 根据响应式获取 gutter, 参考 antd 实现
   *
   * @param gutter Gutter
   */
  var getNormalizedGutter = function getNormalizedGutter(gut) {
    var results = [0, 0];
    var normalizedGutter = Array.isArray(gut) ? gut : [gut, 0];
    normalizedGutter.forEach(function (g, index) {
      if ((0,esm_typeof/* default */.A)(g) === 'object') {
        for (var i = 0; i < responsiveArray.length; i += 1) {
          var breakpoint = responsiveArray[i];
          if (screens[breakpoint] && g[breakpoint] !== undefined) {
            results[index] = g[breakpoint];
            break;
          }
        }
      } else {
        results[index] = g || 0;
      }
    });
    return results;
  };

  /**
   * 根据条件返回 style，负责返回空对象
   *
   * @param withStyle 是否符合条件
   * @param appendStyle 如果符合条件要返回的 style 属性
   */
  var getStyle = function getStyle(withStyle, appendStyle) {
    return withStyle ? appendStyle : {};
  };
  var getColSpanStyle = function getColSpanStyle(colSpan) {
    var span = colSpan;

    // colSpan 响应式
    if ((0,esm_typeof/* default */.A)(colSpan) === 'object') {
      for (var i = 0; i < responsiveArray.length; i += 1) {
        var breakpoint = responsiveArray[i];
        if (screens[breakpoint] && colSpan[breakpoint] !== undefined) {
          span = colSpan[breakpoint];
          break;
        }
      }
    }

    // 当 colSpan 为 30% 或 300px 时
    var colSpanStyle = getStyle(typeof span === 'string' && /\d%|\dpx/i.test(span), {
      width: span,
      flexShrink: 0
    });
    return {
      span: span,
      colSpanStyle: colSpanStyle
    };
  };
  var prefixCls = getPrefixCls('pro-card');
  var _useStyle = Card_style_useStyle(prefixCls),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var _getNormalizedGutter = getNormalizedGutter(gutter),
    _getNormalizedGutter2 = (0,slicedToArray/* default */.A)(_getNormalizedGutter, 2),
    horizontalGutter = _getNormalizedGutter2[0],
    verticalGutter = _getNormalizedGutter2[1];

  // 判断是否套了卡片，如果套了的话将自身卡片内部内容的 padding 设置为0
  var containProCard = false;
  var childrenArray = react.Children.toArray(children);
  var childrenModified = childrenArray.map(function (element, index) {
    var _element$type;
    if (element !== null && element !== void 0 && (_element$type = element.type) !== null && _element$type !== void 0 && _element$type.isProCard) {
      var _classNames;
      containProCard = true;

      // 宽度
      var colSpan = element.props.colSpan;
      var _getColSpanStyle = getColSpanStyle(colSpan),
        span = _getColSpanStyle.span,
        colSpanStyle = _getColSpanStyle.colSpanStyle;
      var columnClassName = classnames_default()(["".concat(prefixCls, "-col")], hashId, (_classNames = {}, (0,defineProperty/* default */.A)(_classNames, "".concat(prefixCls, "-split-vertical"), split === 'vertical' && index !== childrenArray.length - 1), (0,defineProperty/* default */.A)(_classNames, "".concat(prefixCls, "-split-horizontal"), split === 'horizontal' && index !== childrenArray.length - 1), (0,defineProperty/* default */.A)(_classNames, "".concat(prefixCls, "-col-").concat(span), typeof span === 'number' && span >= 0 && span <= 24), _classNames));
      var wrappedElement = wrapSSR( /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        style: (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, colSpanStyle), getStyle(horizontalGutter > 0, {
          paddingInlineEnd: horizontalGutter / 2,
          paddingInlineStart: horizontalGutter / 2
        })), getStyle(verticalGutter > 0, {
          paddingBlockStart: verticalGutter / 2,
          paddingBlockEnd: verticalGutter / 2
        })),
        className: columnClassName,
        children: /*#__PURE__*/react.cloneElement(element)
      }));
      return /*#__PURE__*/react.cloneElement(wrappedElement, {
        key: "pro-card-col-".concat((element === null || element === void 0 ? void 0 : element.key) || index)
      });
    }
    return element;
  });
  var cardCls = classnames_default()("".concat(prefixCls), className, hashId, (_classNames2 = {}, (0,defineProperty/* default */.A)(_classNames2, "".concat(prefixCls, "-border"), bordered), (0,defineProperty/* default */.A)(_classNames2, "".concat(prefixCls, "-box-shadow"), boxShadow), (0,defineProperty/* default */.A)(_classNames2, "".concat(prefixCls, "-contain-card"), containProCard), (0,defineProperty/* default */.A)(_classNames2, "".concat(prefixCls, "-loading"), loading), (0,defineProperty/* default */.A)(_classNames2, "".concat(prefixCls, "-split"), split === 'vertical' || split === 'horizontal'), (0,defineProperty/* default */.A)(_classNames2, "".concat(prefixCls, "-ghost"), ghost), (0,defineProperty/* default */.A)(_classNames2, "".concat(prefixCls, "-hoverable"), hoverable), (0,defineProperty/* default */.A)(_classNames2, "".concat(prefixCls, "-size-").concat(size), size), (0,defineProperty/* default */.A)(_classNames2, "".concat(prefixCls, "-type-").concat(type), type), (0,defineProperty/* default */.A)(_classNames2, "".concat(prefixCls, "-collapse"), collapsed), (0,defineProperty/* default */.A)(_classNames2, "".concat(prefixCls, "-checked"), checked), _classNames2));
  var bodyCls = classnames_default()("".concat(prefixCls, "-body"), hashId, (_classNames3 = {}, (0,defineProperty/* default */.A)(_classNames3, "".concat(prefixCls, "-body-center"), layout === 'center'), (0,defineProperty/* default */.A)(_classNames3, "".concat(prefixCls, "-body-direction-column"), split === 'horizontal' || direction === 'column'), (0,defineProperty/* default */.A)(_classNames3, "".concat(prefixCls, "-body-wrap"), wrap && containProCard), _classNames3));
  var cardBodyStyle = bodyStyle;
  var loadingDOM = /*#__PURE__*/react.isValidElement(loading) ? loading : /*#__PURE__*/(0,jsx_runtime.jsx)(components_Loading, {
    prefix: prefixCls,
    style: bodyStyle.padding === 0 || bodyStyle.padding === '0px' ? {
      padding: 24
    } : undefined
  });
  // 非受控情况下展示
  var collapsibleButton = collapsible && controlCollapsed === undefined && (collapsibleIconRender ? collapsibleIconRender({
    collapsed: collapsed
  }) : /*#__PURE__*/(0,jsx_runtime.jsx)(icons_RightOutlined, {
    rotate: !collapsed ? 90 : undefined,
    className: "".concat(prefixCls, "-collapsible-icon ").concat(hashId).trim()
  }));
  return wrapSSR( /*#__PURE__*/(0,jsx_runtime.jsxs)("div", (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({
    className: cardCls,
    style: style,
    ref: ref,
    onClick: function onClick(e) {
      var _rest$onClick;
      onChecked === null || onChecked === void 0 ? void 0 : onChecked(e);
      rest === null || rest === void 0 ? void 0 : (_rest$onClick = rest.onClick) === null || _rest$onClick === void 0 ? void 0 : _rest$onClick.call(rest, e);
    }
  }, es(rest, ['prefixCls', 'colSpan'])), {}, {
    children: [(title || extra || collapsibleButton) && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: classnames_default()("".concat(prefixCls, "-header"), hashId, (_classNames4 = {}, (0,defineProperty/* default */.A)(_classNames4, "".concat(prefixCls, "-header-border"), headerBordered || type === 'inner'), (0,defineProperty/* default */.A)(_classNames4, "".concat(prefixCls, "-header-collapsible"), collapsibleButton), _classNames4)),
      style: headStyle,
      onClick: function onClick() {
        if (collapsibleButton) setCollapsed(!collapsed);
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "".concat(prefixCls, "-title ").concat(hashId).trim(),
        children: [collapsibleButton, /*#__PURE__*/(0,jsx_runtime.jsx)(LabelIconTip, {
          label: title,
          tooltip: tooltip || tip,
          subTitle: subTitle
        })]
      }), extra && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "".concat(prefixCls, "-extra ").concat(hashId).trim(),
        children: extra
      })]
    }), tabs ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "".concat(prefixCls, "-tabs ").concat(hashId).trim(),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_tabs/* default */.A, (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({
        onChange: tabs.onChange
      }, tabs), {}, {
        // @ts-ignore
        items: ModifyTabItemsContant,
        children: loading ? loadingDOM : children
      }))
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: bodyCls,
      style: cardBodyStyle,
      children: loading ? loadingDOM : childrenModified
    }), actions ? /*#__PURE__*/(0,jsx_runtime.jsx)(Actions, {
      actions: actions,
      prefixCls: prefixCls
    }) : null]
  })));
});
/* harmony default export */ const components_Card = (Card);
;// ./node_modules/@ant-design/pro-card/es/components/Divider/style.js



var genDividerStyle = function genDividerStyle(token) {
  var componentCls = token.componentCls;
  return (0,defineProperty/* default */.A)({}, componentCls, {
    '&-divider': {
      flex: 'none',
      width: token.lineWidth,
      marginInline: token.marginXS,
      marginBlock: token.marginLG,
      backgroundColor: token.colorSplit,
      '&-horizontal': {
        width: 'initial',
        height: token.lineWidth,
        marginInline: token.marginLG,
        marginBlock: token.marginXS
      }
    },
    '&&-size-small &-divider': {
      marginBlock: token.marginLG,
      marginInline: token.marginXS,
      '&-horizontal': {
        marginBlock: token.marginXS,
        marginInline: token.marginLG
      }
    }
  });
};
function Divider_style_useStyle(prefixCls) {
  return (0,useStyle/* useStyle */.X3)('ProCardDivider', function (token) {
    var proCardDividerToken = (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genDividerStyle(proCardDividerToken)];
  });
}
;// ./node_modules/@ant-design/pro-card/es/components/Divider/index.js






var ProCardDivider = function ProCardDivider(props) {
  var _useContext = (0,react.useContext)(config_provider/* default.ConfigContext */.Ay.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var proCardPrefixCls = getPrefixCls('pro-card');
  var prefixCls = "".concat(proCardPrefixCls, "-divider");
  var _useStyle = Divider_style_useStyle(proCardPrefixCls),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var className = props.className,
    _props$style = props.style,
    style = _props$style === void 0 ? {} : _props$style,
    type = props.type;
  var classString = classnames_default()(prefixCls, className, hashId, (0,defineProperty/* default */.A)({}, "".concat(prefixCls, "-").concat(type), type));
  return wrapSSR( /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: classString,
    style: style
  }));
};
/* harmony default export */ const Divider = (ProCardDivider);
;// ./node_modules/@ant-design/pro-card/es/ProCard.js





var Group = function Group(props) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(components_Card, (0,objectSpread2/* default */.A)({
    bodyStyle: {
      padding: 0
    }
  }, props));
};

// 当前不对底层 Card 做封装，仅挂载子组件，直接导出
// @ts-ignore
var ProCard = components_Card;
ProCard.isProCard = true;
ProCard.Divider = Divider;
ProCard.TabPane = components_TabPane;
ProCard.Group = Group;
/* harmony default export */ const es_ProCard = (ProCard);

/***/ })

}]);