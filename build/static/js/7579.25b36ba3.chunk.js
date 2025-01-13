"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[7579],{

/***/ 97579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ transfer)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(64467);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(60436);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(23029);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(92901);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(85501);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__(52962);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(48383);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(5741);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/defaultRenderEmpty.js
var defaultRenderEmpty = __webpack_require__(45534);
// EXTERNAL MODULE: ./node_modules/antd/es/form/context.js
var form_context = __webpack_require__(77643);
// EXTERNAL MODULE: ./node_modules/antd/es/locale-provider/LocaleReceiver.js + 1 modules
var LocaleReceiver = __webpack_require__(66075);
// EXTERNAL MODULE: ./node_modules/antd/es/locale/default.js + 1 modules
var locale_default = __webpack_require__(19307);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/statusUtils.js
var statusUtils = __webpack_require__(91396);
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/DownOutlined.js
var DownOutlined = __webpack_require__(50947);
// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__(15207);
// EXTERNAL MODULE: ./node_modules/antd/es/checkbox/index.js + 2 modules
var es_checkbox = __webpack_require__(52765);
// EXTERNAL MODULE: ./node_modules/antd/es/dropdown/index.js
var es_dropdown = __webpack_require__(57811);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(39156);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(82284);
// EXTERNAL MODULE: ./node_modules/antd/es/pagination/index.js + 12 modules
var es_pagination = __webpack_require__(24575);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/type.js
var type = __webpack_require__(27895);
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/DeleteOutlined.js
var DeleteOutlined = __webpack_require__(27980);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/transButton.js
var transButton = __webpack_require__(82725);
;// ./node_modules/antd/es/transfer/ListItem.js









var ListItem = function ListItem(props) {
  var _classNames;
  var renderedText = props.renderedText,
    renderedEl = props.renderedEl,
    item = props.item,
    checked = props.checked,
    disabled = props.disabled,
    prefixCls = props.prefixCls,
    onClick = props.onClick,
    onRemove = props.onRemove,
    showRemove = props.showRemove;
  var className = classnames_default()((_classNames = {}, (0,defineProperty/* default */.A)(_classNames, "".concat(prefixCls, "-content-item"), true), (0,defineProperty/* default */.A)(_classNames, "".concat(prefixCls, "-content-item-disabled"), disabled || item.disabled), (0,defineProperty/* default */.A)(_classNames, "".concat(prefixCls, "-content-item-checked"), checked), _classNames));
  var title;
  if (typeof renderedText === 'string' || typeof renderedText === 'number') {
    title = String(renderedText);
  }
  return /*#__PURE__*/react.createElement(LocaleReceiver/* default */.A, {
    componentName: "Transfer",
    defaultLocale: locale_default/* default */.A.Transfer
  }, function (contextLocale) {
    var liProps = {
      className: className,
      title: title
    };
    var labelNode = /*#__PURE__*/react.createElement("span", {
      className: "".concat(prefixCls, "-content-item-text")
    }, renderedEl);
    // Show remove
    if (showRemove) {
      return /*#__PURE__*/react.createElement("li", (0,esm_extends/* default */.A)({}, liProps), labelNode, /*#__PURE__*/react.createElement(transButton/* default */.A, {
        disabled: disabled || item.disabled,
        className: "".concat(prefixCls, "-content-item-remove"),
        "aria-label": contextLocale.remove,
        onClick: function onClick() {
          onRemove === null || onRemove === void 0 ? void 0 : onRemove(item);
        }
      }, /*#__PURE__*/react.createElement(DeleteOutlined/* default */.A, null)));
    }
    // Default click to select
    liProps.onClick = disabled || item.disabled ? undefined : function () {
      return onClick(item);
    };
    return /*#__PURE__*/react.createElement("li", (0,esm_extends/* default */.A)({}, liProps), /*#__PURE__*/react.createElement(es_checkbox/* default */.A, {
      className: "".concat(prefixCls, "-checkbox"),
      checked: checked,
      disabled: disabled || item.disabled
    }), labelNode);
  });
};
/* harmony default export */ const transfer_ListItem = (/*#__PURE__*/react.memo(ListItem));
;// ./node_modules/antd/es/transfer/ListBody.js












var OmitProps = (0,type/* tuple */.P)('handleFilter', 'handleClear', 'checkedKeys');
function parsePagination(pagination) {
  if (!pagination) {
    return null;
  }
  var defaultPagination = {
    pageSize: 10,
    simple: true,
    showSizeChanger: false,
    showLessItems: false
  };
  if ((0,esm_typeof/* default */.A)(pagination) === 'object') {
    return (0,esm_extends/* default */.A)((0,esm_extends/* default */.A)({}, defaultPagination), pagination);
  }
  return defaultPagination;
}
var ListBody = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.A)(ListBody, _React$Component);
  var _super = (0,createSuper/* default */.A)(ListBody);
  function ListBody() {
    var _this;
    (0,classCallCheck/* default */.A)(this, ListBody);
    _this = _super.apply(this, arguments);
    _this.state = {
      current: 1
    };
    _this.onItemSelect = function (item) {
      var _this$props = _this.props,
        onItemSelect = _this$props.onItemSelect,
        selectedKeys = _this$props.selectedKeys;
      var checked = selectedKeys.includes(item.key);
      onItemSelect(item.key, !checked);
    };
    _this.onItemRemove = function (item) {
      var onItemRemove = _this.props.onItemRemove;
      onItemRemove === null || onItemRemove === void 0 ? void 0 : onItemRemove([item.key]);
    };
    _this.onPageChange = function (current) {
      _this.setState({
        current: current
      });
    };
    _this.getItems = function () {
      var current = _this.state.current;
      var _this$props2 = _this.props,
        pagination = _this$props2.pagination,
        filteredRenderItems = _this$props2.filteredRenderItems;
      var mergedPagination = parsePagination(pagination);
      var displayItems = filteredRenderItems;
      if (mergedPagination) {
        displayItems = filteredRenderItems.slice((current - 1) * mergedPagination.pageSize, current * mergedPagination.pageSize);
      }
      return displayItems;
    };
    return _this;
  }
  (0,createClass/* default */.A)(ListBody, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var current = this.state.current;
      var _this$props3 = this.props,
        prefixCls = _this$props3.prefixCls,
        onScroll = _this$props3.onScroll,
        filteredRenderItems = _this$props3.filteredRenderItems,
        selectedKeys = _this$props3.selectedKeys,
        globalDisabled = _this$props3.disabled,
        showRemove = _this$props3.showRemove,
        pagination = _this$props3.pagination;
      var mergedPagination = parsePagination(pagination);
      var paginationNode = null;
      if (mergedPagination) {
        paginationNode = /*#__PURE__*/react.createElement(es_pagination/* default */.A, {
          simple: mergedPagination.simple,
          showSizeChanger: mergedPagination.showSizeChanger,
          showLessItems: mergedPagination.showLessItems,
          size: "small",
          disabled: globalDisabled,
          className: "".concat(prefixCls, "-pagination"),
          total: filteredRenderItems.length,
          pageSize: mergedPagination.pageSize,
          current: current,
          onChange: this.onPageChange
        });
      }
      return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("ul", {
        className: classnames_default()("".concat(prefixCls, "-content"), (0,defineProperty/* default */.A)({}, "".concat(prefixCls, "-content-show-remove"), showRemove)),
        onScroll: onScroll
      }, this.getItems().map(function (_ref) {
        var renderedEl = _ref.renderedEl,
          renderedText = _ref.renderedText,
          item = _ref.item;
        var disabled = item.disabled;
        var checked = selectedKeys.includes(item.key);
        return /*#__PURE__*/react.createElement(transfer_ListItem, {
          disabled: globalDisabled || disabled,
          key: item.key,
          item: item,
          renderedText: renderedText,
          renderedEl: renderedEl,
          checked: checked,
          prefixCls: prefixCls,
          onClick: _this2.onItemSelect,
          onRemove: _this2.onItemRemove,
          showRemove: showRemove
        });
      })), paginationNode);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref2, _ref3) {
      var filteredRenderItems = _ref2.filteredRenderItems,
        pagination = _ref2.pagination;
      var current = _ref3.current;
      var mergedPagination = parsePagination(pagination);
      if (mergedPagination) {
        // Calculate the page number
        var maxPageCount = Math.ceil(filteredRenderItems.length / mergedPagination.pageSize);
        if (current > maxPageCount) {
          return {
            current: maxPageCount
          };
        }
      }
      return null;
    }
  }]);
  return ListBody;
}(react.Component);
/* harmony default export */ const transfer_ListBody = (ListBody);
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/SearchOutlined.js
var SearchOutlined = __webpack_require__(11299);
// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 5 modules
var input = __webpack_require__(16330);
;// ./node_modules/antd/es/transfer/search.js



function Search(props) {
  var _props$placeholder = props.placeholder,
    placeholder = _props$placeholder === void 0 ? '' : _props$placeholder,
    value = props.value,
    prefixCls = props.prefixCls,
    disabled = props.disabled,
    onChange = props.onChange,
    handleClear = props.handleClear;
  var handleChange = react.useCallback(function (e) {
    onChange === null || onChange === void 0 ? void 0 : onChange(e);
    if (e.target.value === '') {
      handleClear === null || handleClear === void 0 ? void 0 : handleClear();
    }
  }, [onChange]);
  return /*#__PURE__*/react.createElement(input/* default */.A, {
    placeholder: placeholder,
    className: prefixCls,
    value: value,
    onChange: handleChange,
    disabled: disabled,
    allowClear: true,
    prefix: /*#__PURE__*/react.createElement(SearchOutlined/* default */.A, null)
  });
}
;// ./node_modules/antd/es/transfer/list.js















var defaultRender = function defaultRender() {
  return null;
};
function isRenderResultPlainObject(result) {
  return !!(result && !(0,reactNode/* isValidElement */.zO)(result) && Object.prototype.toString.call(result) === '[object Object]');
}
function getEnabledItemKeys(items) {
  return items.filter(function (data) {
    return !data.disabled;
  }).map(function (data) {
    return data.key;
  });
}
var TransferList = /*#__PURE__*/function (_React$PureComponent) {
  (0,inherits/* default */.A)(TransferList, _React$PureComponent);
  var _super = (0,createSuper/* default */.A)(TransferList);
  function TransferList(props) {
    var _this;
    (0,classCallCheck/* default */.A)(this, TransferList);
    _this = _super.call(this, props);
    _this.defaultListBodyRef = /*#__PURE__*/react.createRef();
    // =============================== Filter ===============================
    _this.handleFilter = function (e) {
      var handleFilter = _this.props.handleFilter;
      var filterValue = e.target.value;
      _this.setState({
        filterValue: filterValue
      });
      handleFilter(e);
    };
    _this.handleClear = function () {
      var handleClear = _this.props.handleClear;
      _this.setState({
        filterValue: ''
      });
      handleClear();
    };
    _this.matchFilter = function (text, item) {
      var filterValue = _this.state.filterValue;
      var filterOption = _this.props.filterOption;
      if (filterOption) {
        return filterOption(filterValue, item);
      }
      return text.includes(filterValue);
    };
    // =============================== Render ===============================
    _this.renderListBody = function (renderList, props) {
      var bodyContent = renderList ? renderList(props) : null;
      var customize = !!bodyContent;
      if (!customize) {
        bodyContent = /*#__PURE__*/react.createElement(transfer_ListBody, (0,esm_extends/* default */.A)({
          ref: _this.defaultListBodyRef
        }, props));
      }
      return {
        customize: customize,
        bodyContent: bodyContent
      };
    };
    _this.renderItem = function (item) {
      var _this$props$render = _this.props.render,
        render = _this$props$render === void 0 ? defaultRender : _this$props$render;
      var renderResult = render(item);
      var isRenderResultPlain = isRenderResultPlainObject(renderResult);
      return {
        renderedText: isRenderResultPlain ? renderResult.value : renderResult,
        renderedEl: isRenderResultPlain ? renderResult.label : renderResult,
        item: item
      };
    };
    _this.getSelectAllLabel = function (selectedCount, totalCount) {
      var _this$props = _this.props,
        itemsUnit = _this$props.itemsUnit,
        itemUnit = _this$props.itemUnit,
        selectAllLabel = _this$props.selectAllLabel;
      if (selectAllLabel) {
        return typeof selectAllLabel === 'function' ? selectAllLabel({
          selectedCount: selectedCount,
          totalCount: totalCount
        }) : selectAllLabel;
      }
      var unit = totalCount > 1 ? itemsUnit : itemUnit;
      return /*#__PURE__*/react.createElement(react.Fragment, null, (selectedCount > 0 ? "".concat(selectedCount, "/") : '') + totalCount, " ", unit);
    };
    _this.state = {
      filterValue: ''
    };
    return _this;
  }
  (0,createClass/* default */.A)(TransferList, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.triggerScrollTimer);
    }
  }, {
    key: "getCheckStatus",
    value: function getCheckStatus(filteredItems) {
      var checkedKeys = this.props.checkedKeys;
      if (checkedKeys.length === 0) {
        return 'none';
      }
      if (filteredItems.every(function (item) {
        return checkedKeys.includes(item.key) || !!item.disabled;
      })) {
        return 'all';
      }
      return 'part';
    }
    // ================================ Item ================================
  }, {
    key: "getFilteredItems",
    value: function getFilteredItems(dataSource, filterValue) {
      var _this2 = this;
      var filteredItems = [];
      var filteredRenderItems = [];
      dataSource.forEach(function (item) {
        var renderedItem = _this2.renderItem(item);
        var renderedText = renderedItem.renderedText;
        // Filter skip
        if (filterValue && !_this2.matchFilter(renderedText, item)) {
          return null;
        }
        filteredItems.push(item);
        filteredRenderItems.push(renderedItem);
      });
      return {
        filteredItems: filteredItems,
        filteredRenderItems: filteredRenderItems
      };
    }
  }, {
    key: "getListBody",
    value: function getListBody(prefixCls, searchPlaceholder, filterValue, filteredItems, notFoundContent, filteredRenderItems, checkedKeys, renderList, showSearch, disabled) {
      var _this3 = this;
      var search = showSearch ? /*#__PURE__*/react.createElement("div", {
        className: "".concat(prefixCls, "-body-search-wrapper")
      }, /*#__PURE__*/react.createElement(Search, {
        prefixCls: "".concat(prefixCls, "-search"),
        onChange: this.handleFilter,
        handleClear: this.handleClear,
        placeholder: searchPlaceholder,
        value: filterValue,
        disabled: disabled
      })) : null;
      var _this$renderListBody = this.renderListBody(renderList, (0,esm_extends/* default */.A)((0,esm_extends/* default */.A)({}, (0,omit/* default */.A)(this.props, OmitProps)), {
          filteredItems: filteredItems,
          filteredRenderItems: filteredRenderItems,
          selectedKeys: checkedKeys
        })),
        bodyContent = _this$renderListBody.bodyContent,
        customize = _this$renderListBody.customize;
      var getNotFoundContent = function getNotFoundContent() {
        var contentIndex = _this3.props.direction === 'left' ? 0 : 1;
        return Array.isArray(notFoundContent) ? notFoundContent[contentIndex] : notFoundContent;
      };
      var bodyNode;
      // We should wrap customize list body in a classNamed div to use flex layout.
      if (customize) {
        bodyNode = /*#__PURE__*/react.createElement("div", {
          className: "".concat(prefixCls, "-body-customize-wrapper")
        }, bodyContent);
      } else {
        bodyNode = filteredItems.length ? bodyContent : /*#__PURE__*/react.createElement("div", {
          className: "".concat(prefixCls, "-body-not-found")
        }, getNotFoundContent());
      }
      return /*#__PURE__*/react.createElement("div", {
        className: classnames_default()(showSearch ? "".concat(prefixCls, "-body ").concat(prefixCls, "-body-with-search") : "".concat(prefixCls, "-body"))
      }, search, bodyNode);
    }
  }, {
    key: "getCheckBox",
    value: function getCheckBox(_ref) {
      var filteredItems = _ref.filteredItems,
        onItemSelectAll = _ref.onItemSelectAll,
        disabled = _ref.disabled,
        prefixCls = _ref.prefixCls;
      var checkStatus = this.getCheckStatus(filteredItems);
      var checkedAll = checkStatus === 'all';
      var checkAllCheckbox = /*#__PURE__*/react.createElement(es_checkbox/* default */.A, {
        disabled: disabled,
        checked: checkedAll,
        indeterminate: checkStatus === 'part',
        className: "".concat(prefixCls, "-checkbox"),
        onChange: function onChange() {
          // Only select enabled items
          onItemSelectAll(filteredItems.filter(function (item) {
            return !item.disabled;
          }).map(function (_ref2) {
            var key = _ref2.key;
            return key;
          }), !checkedAll);
        }
      });
      return checkAllCheckbox;
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames,
        _this4 = this;
      var filterValue = this.state.filterValue;
      var _this$props2 = this.props,
        prefixCls = _this$props2.prefixCls,
        _this$props2$dataSour = _this$props2.dataSource,
        dataSource = _this$props2$dataSour === void 0 ? [] : _this$props2$dataSour,
        _this$props2$titleTex = _this$props2.titleText,
        titleText = _this$props2$titleTex === void 0 ? '' : _this$props2$titleTex,
        checkedKeys = _this$props2.checkedKeys,
        disabled = _this$props2.disabled,
        footer = _this$props2.footer,
        _this$props2$showSear = _this$props2.showSearch,
        showSearch = _this$props2$showSear === void 0 ? false : _this$props2$showSear,
        style = _this$props2.style,
        searchPlaceholder = _this$props2.searchPlaceholder,
        notFoundContent = _this$props2.notFoundContent,
        selectAll = _this$props2.selectAll,
        selectCurrent = _this$props2.selectCurrent,
        selectInvert = _this$props2.selectInvert,
        removeAll = _this$props2.removeAll,
        removeCurrent = _this$props2.removeCurrent,
        renderList = _this$props2.renderList,
        onItemSelectAll = _this$props2.onItemSelectAll,
        onItemRemove = _this$props2.onItemRemove,
        _this$props2$showSele = _this$props2.showSelectAll,
        showSelectAll = _this$props2$showSele === void 0 ? true : _this$props2$showSele,
        showRemove = _this$props2.showRemove,
        pagination = _this$props2.pagination,
        direction = _this$props2.direction;
      // Custom Layout
      var footerDom = footer && (footer.length < 2 ? footer(this.props) : footer(this.props, {
        direction: direction
      }));
      var listCls = classnames_default()(prefixCls, (_classNames = {}, (0,defineProperty/* default */.A)(_classNames, "".concat(prefixCls, "-with-pagination"), !!pagination), (0,defineProperty/* default */.A)(_classNames, "".concat(prefixCls, "-with-footer"), !!footerDom), _classNames));
      // ====================== Get filtered, checked item list ======================
      var _this$getFilteredItem = this.getFilteredItems(dataSource, filterValue),
        filteredItems = _this$getFilteredItem.filteredItems,
        filteredRenderItems = _this$getFilteredItem.filteredRenderItems;
      // ================================= List Body =================================
      var listBody = this.getListBody(prefixCls, searchPlaceholder, filterValue, filteredItems, notFoundContent, filteredRenderItems, checkedKeys, renderList, showSearch, disabled);
      // ================================ List Footer ================================
      var listFooter = footerDom ? /*#__PURE__*/react.createElement("div", {
        className: "".concat(prefixCls, "-footer")
      }, footerDom) : null;
      var checkAllCheckbox = !showRemove && !pagination && this.getCheckBox({
        filteredItems: filteredItems,
        onItemSelectAll: onItemSelectAll,
        disabled: disabled,
        prefixCls: prefixCls
      });
      var items;
      if (showRemove) {
        items = [/* Remove Current Page */
        pagination ? {
          key: 'removeCurrent',
          onClick: function onClick() {
            var _a;
            var pageKeys = getEnabledItemKeys((((_a = _this4.defaultListBodyRef.current) === null || _a === void 0 ? void 0 : _a.getItems()) || []).map(function (entity) {
              return entity.item;
            }));
            onItemRemove === null || onItemRemove === void 0 ? void 0 : onItemRemove(pageKeys);
          },
          label: removeCurrent
        } : null, /* Remove All */
        {
          key: 'removeAll',
          onClick: function onClick() {
            onItemRemove === null || onItemRemove === void 0 ? void 0 : onItemRemove(getEnabledItemKeys(filteredItems));
          },
          label: removeAll
        }].filter(function (item) {
          return item;
        });
      } else {
        items = [{
          key: 'selectAll',
          onClick: function onClick() {
            var keys = getEnabledItemKeys(filteredItems);
            onItemSelectAll(keys, keys.length !== checkedKeys.length);
          },
          label: selectAll
        }, pagination ? {
          key: 'selectCurrent',
          onClick: function onClick() {
            var _a;
            var pageItems = ((_a = _this4.defaultListBodyRef.current) === null || _a === void 0 ? void 0 : _a.getItems()) || [];
            onItemSelectAll(getEnabledItemKeys(pageItems.map(function (entity) {
              return entity.item;
            })), true);
          },
          label: selectCurrent
        } : null, {
          key: 'selectInvert',
          onClick: function onClick() {
            var _a;
            var availableKeys;
            if (pagination) {
              availableKeys = getEnabledItemKeys((((_a = _this4.defaultListBodyRef.current) === null || _a === void 0 ? void 0 : _a.getItems()) || []).map(function (entity) {
                return entity.item;
              }));
            } else {
              availableKeys = getEnabledItemKeys(filteredItems);
            }
            var checkedKeySet = new Set(checkedKeys);
            var newCheckedKeys = [];
            var newUnCheckedKeys = [];
            availableKeys.forEach(function (key) {
              if (checkedKeySet.has(key)) {
                newUnCheckedKeys.push(key);
              } else {
                newCheckedKeys.push(key);
              }
            });
            onItemSelectAll(newCheckedKeys, true);
            onItemSelectAll(newUnCheckedKeys, false);
          },
          label: selectInvert
        }];
      }
      var dropdown = /*#__PURE__*/react.createElement(es_dropdown/* default */.A, {
        className: "".concat(prefixCls, "-header-dropdown"),
        menu: {
          items: items
        },
        disabled: disabled
      }, /*#__PURE__*/react.createElement(DownOutlined/* default */.A, null));
      // ================================== Render ===================================
      return /*#__PURE__*/react.createElement("div", {
        className: listCls,
        style: style
      }, /*#__PURE__*/react.createElement("div", {
        className: "".concat(prefixCls, "-header")
      }, showSelectAll ? /*#__PURE__*/react.createElement(react.Fragment, null, checkAllCheckbox, dropdown) : null, /*#__PURE__*/react.createElement("span", {
        className: "".concat(prefixCls, "-header-selected")
      }, this.getSelectAllLabel(checkedKeys.length, filteredItems.length)), /*#__PURE__*/react.createElement("span", {
        className: "".concat(prefixCls, "-header-title")
      }, titleText)), listBody, listFooter);
    }
  }]);
  return TransferList;
}(react.PureComponent);

// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/LeftOutlined.js + 1 modules
var LeftOutlined = __webpack_require__(32383);
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/RightOutlined.js
var RightOutlined = __webpack_require__(23237);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(48538);
;// ./node_modules/antd/es/transfer/operation.js




var Operation = function Operation(_ref) {
  var disabled = _ref.disabled,
    moveToLeft = _ref.moveToLeft,
    moveToRight = _ref.moveToRight,
    _ref$leftArrowText = _ref.leftArrowText,
    leftArrowText = _ref$leftArrowText === void 0 ? '' : _ref$leftArrowText,
    _ref$rightArrowText = _ref.rightArrowText,
    rightArrowText = _ref$rightArrowText === void 0 ? '' : _ref$rightArrowText,
    leftActive = _ref.leftActive,
    rightActive = _ref.rightActive,
    className = _ref.className,
    style = _ref.style,
    direction = _ref.direction,
    oneWay = _ref.oneWay;
  return /*#__PURE__*/react.createElement("div", {
    className: className,
    style: style
  }, /*#__PURE__*/react.createElement(es_button/* default */.A, {
    type: "primary",
    size: "small",
    disabled: disabled || !rightActive,
    onClick: moveToRight,
    icon: direction !== 'rtl' ? /*#__PURE__*/react.createElement(RightOutlined/* default */.A, null) : /*#__PURE__*/react.createElement(LeftOutlined/* default */.A, null)
  }, rightArrowText), !oneWay && /*#__PURE__*/react.createElement(es_button/* default */.A, {
    type: "primary",
    size: "small",
    disabled: disabled || !leftActive,
    onClick: moveToLeft,
    icon: direction !== 'rtl' ? /*#__PURE__*/react.createElement(LeftOutlined/* default */.A, null) : /*#__PURE__*/react.createElement(RightOutlined/* default */.A, null)
  }, leftArrowText));
};
/* harmony default export */ const operation = (Operation);
;// ./node_modules/antd/es/transfer/index.js



















var Transfer = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.A)(Transfer, _React$Component);
  var _super = (0,createSuper/* default */.A)(Transfer);
  function Transfer(props) {
    var _this;
    (0,classCallCheck/* default */.A)(this, Transfer);
    _this = _super.call(this, props);
    _this.separatedDataSource = null;
    _this.setStateKeys = function (direction, keys) {
      if (direction === 'left') {
        _this.setState(function (_ref) {
          var sourceSelectedKeys = _ref.sourceSelectedKeys;
          return {
            sourceSelectedKeys: typeof keys === 'function' ? keys(sourceSelectedKeys || []) : keys
          };
        });
      } else {
        _this.setState(function (_ref2) {
          var targetSelectedKeys = _ref2.targetSelectedKeys;
          return {
            targetSelectedKeys: typeof keys === 'function' ? keys(targetSelectedKeys || []) : keys
          };
        });
      }
    };
    _this.getLocale = function (transferLocale, renderEmpty) {
      var _this$props$locale = _this.props.locale,
        locale = _this$props$locale === void 0 ? {} : _this$props$locale;
      return (0,esm_extends/* default */.A)((0,esm_extends/* default */.A)((0,esm_extends/* default */.A)({}, transferLocale), {
        notFoundContent: renderEmpty('Transfer')
      }), locale);
    };
    _this.moveTo = function (direction) {
      var _this$props = _this.props,
        _this$props$targetKey = _this$props.targetKeys,
        targetKeys = _this$props$targetKey === void 0 ? [] : _this$props$targetKey,
        _this$props$dataSourc = _this$props.dataSource,
        dataSource = _this$props$dataSourc === void 0 ? [] : _this$props$dataSourc,
        onChange = _this$props.onChange;
      var _this$state = _this.state,
        sourceSelectedKeys = _this$state.sourceSelectedKeys,
        targetSelectedKeys = _this$state.targetSelectedKeys;
      var moveKeys = direction === 'right' ? sourceSelectedKeys : targetSelectedKeys;
      // filter the disabled options
      var newMoveKeys = moveKeys.filter(function (key) {
        return !dataSource.some(function (data) {
          return !!(key === data.key && data.disabled);
        });
      });
      // move items to target box
      var newTargetKeys = direction === 'right' ? newMoveKeys.concat(targetKeys) : targetKeys.filter(function (targetKey) {
        return !newMoveKeys.includes(targetKey);
      });
      // empty checked keys
      var oppositeDirection = direction === 'right' ? 'left' : 'right';
      _this.setStateKeys(oppositeDirection, []);
      _this.handleSelectChange(oppositeDirection, []);
      onChange === null || onChange === void 0 ? void 0 : onChange(newTargetKeys, direction, newMoveKeys);
    };
    _this.moveToLeft = function () {
      return _this.moveTo('left');
    };
    _this.moveToRight = function () {
      return _this.moveTo('right');
    };
    _this.onItemSelectAll = function (direction, selectedKeys, checkAll) {
      _this.setStateKeys(direction, function (prevKeys) {
        var mergedCheckedKeys = [];
        if (checkAll) {
          // Merge current keys with origin key
          mergedCheckedKeys = Array.from(new Set([].concat((0,toConsumableArray/* default */.A)(prevKeys), (0,toConsumableArray/* default */.A)(selectedKeys))));
        } else {
          // Remove current keys from origin keys
          mergedCheckedKeys = prevKeys.filter(function (key) {
            return !selectedKeys.includes(key);
          });
        }
        _this.handleSelectChange(direction, mergedCheckedKeys);
        return mergedCheckedKeys;
      });
    };
    _this.onLeftItemSelectAll = function (selectedKeys, checkAll) {
      return _this.onItemSelectAll('left', selectedKeys, checkAll);
    };
    _this.onRightItemSelectAll = function (selectedKeys, checkAll) {
      return _this.onItemSelectAll('right', selectedKeys, checkAll);
    };
    _this.handleFilter = function (direction, e) {
      var onSearch = _this.props.onSearch;
      var value = e.target.value;
      onSearch === null || onSearch === void 0 ? void 0 : onSearch(direction, value);
    };
    _this.handleLeftFilter = function (e) {
      return _this.handleFilter('left', e);
    };
    _this.handleRightFilter = function (e) {
      return _this.handleFilter('right', e);
    };
    _this.handleClear = function (direction) {
      var onSearch = _this.props.onSearch;
      onSearch === null || onSearch === void 0 ? void 0 : onSearch(direction, '');
    };
    _this.handleLeftClear = function () {
      return _this.handleClear('left');
    };
    _this.handleRightClear = function () {
      return _this.handleClear('right');
    };
    _this.onItemSelect = function (direction, selectedKey, checked) {
      var _this$state2 = _this.state,
        sourceSelectedKeys = _this$state2.sourceSelectedKeys,
        targetSelectedKeys = _this$state2.targetSelectedKeys;
      var holder = direction === 'left' ? (0,toConsumableArray/* default */.A)(sourceSelectedKeys) : (0,toConsumableArray/* default */.A)(targetSelectedKeys);
      var index = holder.indexOf(selectedKey);
      if (index > -1) {
        holder.splice(index, 1);
      }
      if (checked) {
        holder.push(selectedKey);
      }
      _this.handleSelectChange(direction, holder);
      if (!_this.props.selectedKeys) {
        _this.setStateKeys(direction, holder);
      }
    };
    _this.onLeftItemSelect = function (selectedKey, checked) {
      return _this.onItemSelect('left', selectedKey, checked);
    };
    _this.onRightItemSelect = function (selectedKey, checked) {
      return _this.onItemSelect('right', selectedKey, checked);
    };
    _this.onRightItemRemove = function (selectedKeys) {
      var _this$props2 = _this.props,
        _this$props2$targetKe = _this$props2.targetKeys,
        targetKeys = _this$props2$targetKe === void 0 ? [] : _this$props2$targetKe,
        onChange = _this$props2.onChange;
      _this.setStateKeys('right', []);
      onChange === null || onChange === void 0 ? void 0 : onChange(targetKeys.filter(function (key) {
        return !selectedKeys.includes(key);
      }), 'left', (0,toConsumableArray/* default */.A)(selectedKeys));
    };
    _this.handleScroll = function (direction, e) {
      var onScroll = _this.props.onScroll;
      onScroll === null || onScroll === void 0 ? void 0 : onScroll(direction, e);
    };
    _this.handleLeftScroll = function (e) {
      return _this.handleScroll('left', e);
    };
    _this.handleRightScroll = function (e) {
      return _this.handleScroll('right', e);
    };
    // eslint-disable-next-line class-methods-use-this
    _this.handleListStyle = function (listStyle, direction) {
      if (typeof listStyle === 'function') {
        return listStyle({
          direction: direction
        });
      }
      return listStyle;
    };
    var _props$selectedKeys = props.selectedKeys,
      selectedKeys = _props$selectedKeys === void 0 ? [] : _props$selectedKeys,
      _props$targetKeys = props.targetKeys,
      targetKeys = _props$targetKeys === void 0 ? [] : _props$targetKeys;
    _this.state = {
      sourceSelectedKeys: selectedKeys.filter(function (key) {
        return !targetKeys.includes(key);
      }),
      targetSelectedKeys: selectedKeys.filter(function (key) {
        return targetKeys.includes(key);
      })
    };
    return _this;
  }
  (0,createClass/* default */.A)(Transfer, [{
    key: "getTitles",
    value: function getTitles(transferLocale) {
      var _a, _b;
      return (_b = (_a = this.props.titles) !== null && _a !== void 0 ? _a : transferLocale.titles) !== null && _b !== void 0 ? _b : [];
    }
  }, {
    key: "handleSelectChange",
    value: function handleSelectChange(direction, holder) {
      var _this$state3 = this.state,
        sourceSelectedKeys = _this$state3.sourceSelectedKeys,
        targetSelectedKeys = _this$state3.targetSelectedKeys;
      var onSelectChange = this.props.onSelectChange;
      if (!onSelectChange) {
        return;
      }
      if (direction === 'left') {
        onSelectChange(holder, targetSelectedKeys);
      } else {
        onSelectChange(sourceSelectedKeys, holder);
      }
    }
  }, {
    key: "separateDataSource",
    value: function separateDataSource() {
      var _this$props3 = this.props,
        _this$props3$dataSour = _this$props3.dataSource,
        dataSource = _this$props3$dataSour === void 0 ? [] : _this$props3$dataSour,
        rowKey = _this$props3.rowKey,
        _this$props3$targetKe = _this$props3.targetKeys,
        targetKeys = _this$props3$targetKe === void 0 ? [] : _this$props3$targetKe;
      var leftDataSource = [];
      var rightDataSource = new Array(targetKeys.length);
      dataSource.forEach(function (record) {
        if (rowKey) {
          record = (0,esm_extends/* default */.A)((0,esm_extends/* default */.A)({}, record), {
            key: rowKey(record)
          });
        }
        // rightDataSource should be ordered by targetKeys
        // leftDataSource should be ordered by dataSource
        var indexOfKey = targetKeys.indexOf(record.key);
        if (indexOfKey !== -1) {
          rightDataSource[indexOfKey] = record;
        } else {
          leftDataSource.push(record);
        }
      });
      return {
        leftDataSource: leftDataSource,
        rightDataSource: rightDataSource
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/react.createElement(LocaleReceiver/* default */.A, {
        componentName: "Transfer",
        defaultLocale: locale_default/* default */.A.Transfer
      }, function (contextLocale) {
        return /*#__PURE__*/react.createElement(context/* ConfigConsumer */.TG, null, function (_ref3) {
          var getPrefixCls = _ref3.getPrefixCls,
            renderEmpty = _ref3.renderEmpty,
            direction = _ref3.direction;
          return /*#__PURE__*/react.createElement(form_context/* FormItemInputContext */.$W.Consumer, null, function (_ref4) {
            var _classNames;
            var hasFeedback = _ref4.hasFeedback,
              contextStatus = _ref4.status;
            var _this2$props = _this2.props,
              customizePrefixCls = _this2$props.prefixCls,
              className = _this2$props.className,
              disabled = _this2$props.disabled,
              _this2$props$operatio = _this2$props.operations,
              operations = _this2$props$operatio === void 0 ? [] : _this2$props$operatio,
              _this2$props$showSear = _this2$props.showSearch,
              showSearch = _this2$props$showSear === void 0 ? false : _this2$props$showSear,
              footer = _this2$props.footer,
              style = _this2$props.style,
              _this2$props$listStyl = _this2$props.listStyle,
              listStyle = _this2$props$listStyl === void 0 ? {} : _this2$props$listStyl,
              operationStyle = _this2$props.operationStyle,
              filterOption = _this2$props.filterOption,
              render = _this2$props.render,
              children = _this2$props.children,
              showSelectAll = _this2$props.showSelectAll,
              oneWay = _this2$props.oneWay,
              pagination = _this2$props.pagination,
              customStatus = _this2$props.status;
            var prefixCls = getPrefixCls('transfer', customizePrefixCls);
            var locale = _this2.getLocale(contextLocale, renderEmpty || defaultRenderEmpty/* default */.A);
            var _this2$state = _this2.state,
              sourceSelectedKeys = _this2$state.sourceSelectedKeys,
              targetSelectedKeys = _this2$state.targetSelectedKeys;
            var mergedStatus = (0,statusUtils/* getMergedStatus */.v)(contextStatus, customStatus);
            var mergedPagination = !children && pagination;
            var _this2$separateDataSo = _this2.separateDataSource(),
              leftDataSource = _this2$separateDataSo.leftDataSource,
              rightDataSource = _this2$separateDataSo.rightDataSource;
            var leftActive = targetSelectedKeys.length > 0;
            var rightActive = sourceSelectedKeys.length > 0;
            var cls = classnames_default()(prefixCls, (_classNames = {}, (0,defineProperty/* default */.A)(_classNames, "".concat(prefixCls, "-disabled"), disabled), (0,defineProperty/* default */.A)(_classNames, "".concat(prefixCls, "-customize-list"), !!children), (0,defineProperty/* default */.A)(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), (0,statusUtils/* getStatusClassNames */.L)(prefixCls, mergedStatus, hasFeedback), className);
            var titles = _this2.getTitles(locale);
            var selectAllLabels = _this2.props.selectAllLabels || [];
            return /*#__PURE__*/react.createElement("div", {
              className: cls,
              style: style
            }, /*#__PURE__*/react.createElement(TransferList, (0,esm_extends/* default */.A)({
              prefixCls: "".concat(prefixCls, "-list"),
              titleText: titles === null || titles === void 0 ? void 0 : titles[0],
              dataSource: leftDataSource,
              filterOption: filterOption,
              style: _this2.handleListStyle(listStyle, 'left'),
              checkedKeys: sourceSelectedKeys,
              handleFilter: _this2.handleLeftFilter,
              handleClear: _this2.handleLeftClear,
              onItemSelect: _this2.onLeftItemSelect,
              onItemSelectAll: _this2.onLeftItemSelectAll,
              render: render,
              showSearch: showSearch,
              renderList: children,
              footer: footer,
              onScroll: _this2.handleLeftScroll,
              disabled: disabled,
              direction: direction === 'rtl' ? 'right' : 'left',
              showSelectAll: showSelectAll,
              selectAllLabel: selectAllLabels[0],
              pagination: mergedPagination
            }, locale)), /*#__PURE__*/react.createElement(operation, {
              className: "".concat(prefixCls, "-operation"),
              rightActive: rightActive,
              rightArrowText: operations[0],
              moveToRight: _this2.moveToRight,
              leftActive: leftActive,
              leftArrowText: operations[1],
              moveToLeft: _this2.moveToLeft,
              style: operationStyle,
              disabled: disabled,
              direction: direction,
              oneWay: oneWay
            }), /*#__PURE__*/react.createElement(TransferList, (0,esm_extends/* default */.A)({
              prefixCls: "".concat(prefixCls, "-list"),
              titleText: titles === null || titles === void 0 ? void 0 : titles[1],
              dataSource: rightDataSource,
              filterOption: filterOption,
              style: _this2.handleListStyle(listStyle, 'right'),
              checkedKeys: targetSelectedKeys,
              handleFilter: _this2.handleRightFilter,
              handleClear: _this2.handleRightClear,
              onItemSelect: _this2.onRightItemSelect,
              onItemSelectAll: _this2.onRightItemSelectAll,
              onItemRemove: _this2.onRightItemRemove,
              render: render,
              showSearch: showSearch,
              renderList: children,
              footer: footer,
              onScroll: _this2.handleRightScroll,
              disabled: disabled,
              direction: direction === 'rtl' ? 'left' : 'right',
              showSelectAll: showSelectAll,
              selectAllLabel: selectAllLabels[1],
              showRemove: oneWay,
              pagination: mergedPagination
            }, locale)));
          });
        });
      });
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref5) {
      var selectedKeys = _ref5.selectedKeys,
        targetKeys = _ref5.targetKeys,
        pagination = _ref5.pagination,
        children = _ref5.children;
      if (selectedKeys) {
        var mergedTargetKeys = targetKeys || [];
        return {
          sourceSelectedKeys: selectedKeys.filter(function (key) {
            return !mergedTargetKeys.includes(key);
          }),
          targetSelectedKeys: selectedKeys.filter(function (key) {
            return mergedTargetKeys.includes(key);
          })
        };
      }
       false ? 0 : void 0;
      return null;
    }
  }]);
  return Transfer;
}(react.Component); // For high-level customized Transfer @dqaria
Transfer.List = TransferList;
Transfer.Operation = operation;
Transfer.Search = Search;
/* harmony default export */ const transfer = (Transfer);

/***/ })

}]);