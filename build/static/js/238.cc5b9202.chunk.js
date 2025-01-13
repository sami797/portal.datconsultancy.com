"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[238],{

/***/ 80238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ViewSavedSearches)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./src/Components/Atoms/index.tsx + 12 modules
var Atoms = __webpack_require__(9394);
// EXTERNAL MODULE: ./src/Components/Templates/Layout/index.tsx + 28 modules
var Layout = __webpack_require__(81168);
// EXTERNAL MODULE: ./node_modules/antd/es/popconfirm/index.js + 1 modules
var popconfirm = __webpack_require__(56231);
// EXTERNAL MODULE: ./node_modules/antd/es/list/index.js + 1 modules
var list = __webpack_require__(63611);
// EXTERNAL MODULE: ./node_modules/antd/es/divider/index.js
var divider = __webpack_require__(40895);
// EXTERNAL MODULE: ./node_modules/antd/es/table/index.js + 96 modules
var table = __webpack_require__(41821);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DeleteOutlined.js
var DeleteOutlined = __webpack_require__(78433);
// EXTERNAL MODULE: ./src/helpers/dateHandler.ts
var dateHandler = __webpack_require__(98933);
// EXTERNAL MODULE: ./src/Components/Organisms/Common/styles.module.scss
var styles_module = __webpack_require__(96019);
// EXTERNAL MODULE: ./src/services/axiosInstance.ts
var axiosInstance = __webpack_require__(83365);
;// ./src/Modules/SaveSearches/index.ts
class SaveSearchesModule{constructor(){this.endPoint="saved-searches";/** Get Admin Panel Saved Searches */this.getAllRecords=queryData=>{return axiosInstance/* default */.A.get(this.endPoint+"/findAdminPanelFilters",{params:queryData});};this.getRecordById=id=>{return axiosInstance/* default */.A.get("".concat(this.endPoint,"/").concat(id));};this.deleteRecord=id=>{return axiosInstance/* default */.A.delete("".concat(this.endPoint,"/").concat(id));};/** Create Admin Panel Saved Searches */this.createRecord=data=>{return axiosInstance/* default */.A.post(this.endPoint+"/admin",data);};this.updateRecord=(data,id)=>{return axiosInstance/* default */.A.patch("".concat(this.endPoint,"/").concat(id),data);};}}
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/Dashboard/ViewSavedSearches/table-columns.tsx
const ActionComponent=props=>{const{record,reloadTableData}=props;const[actionState,setActionState]=(0,react.useState)({confirmLoading:false,openPopConfirm:false});const module=(0,react.useMemo)(()=>new SaveSearchesModule(),[]);const handleDelete=()=>{setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{confirmLoading:true}));module.deleteRecord(record.id).then(res=>{setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{openPopConfirm:false,confirmLoading:false}));reloadTableData();}).catch(err=>{setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{confirmLoading:false}));});};const showPopconfirm=()=>{setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{openPopConfirm:true}));};return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module/* default */.A.actions,children:/*#__PURE__*/(0,jsx_runtime.jsx)(popconfirm/* default */.A,{open:actionState.openPopConfirm,placement:"top",title:"Are you sure?",onConfirm:handleDelete,onCancel:()=>setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{openPopConfirm:false})),okButtonProps:{loading:actionState.confirmLoading},okText:"Yes",cancelText:"No",onOpenChange:visible=>{if(!visible){setActionState((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},actionState),{},{openPopConfirm:false}));}},children:/*#__PURE__*/(0,jsx_runtime.jsx)(DeleteOutlined/* default */.A,{className:styles_module/* default */.A.bg__red,onClick:showPopconfirm})})});};function TableComponent(props){const{tableData,tableLoading,reloadTableData}=props;const columns=[{title:"S.No",dataIndex:"index",key:"index",render:(text,record,index)=>index+1,width:"60px"},{title:'Title',dataIndex:"title",key:"title",render:(title,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",weight:"bold",children:title})},{title:'Filters',dataIndex:"filters",key:"filters",render:(filters,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:Object.keys(record.filters).map((key,index)=>{return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(list/* default */.Ay,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(list/* default */.Ay.Item,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",weight:"bold",children:key}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",weight:"bold",className:"ml-10",children:filters[key]})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(divider/* default */.A,{className:"my-0"})]},index);})})},{title:'Date Added',className:'text-center',dataIndex:"addedDate",key:"addedDate",render:(addedDate,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",weight:"bold",children:(0,dateHandler/* convertDate */.ic)(addedDate,"dd-mm-yy")})},{title:"Actions",dataIndex:"actions",key:"actions",render:(text,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)(ActionComponent,{record:record,reloadTableData:reloadTableData})}];return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(table/* default */.A,{sticky:true,dataSource:tableData,columns:columns,pagination:false,scroll:{x:991},loading:tableLoading,rowKey:record=>"saved-searches-view-".concat(record.id)})});}
;// ./src/Components/Organisms/Dashboard/ViewSavedSearches/index.tsx
const breadCrumbsData=[{text:"Home",isLink:true,path:"/"},{isLink:false,text:"Saved Searches"}];const AgentSavedSearches=()=>{const[moduleData,setModuleData]=(0,react.useState)({loading:false,data:[]});const saveSearchesModule=(0,react.useMemo)(()=>new SaveSearchesModule(),[]);const getModuleData=(0,react.useCallback)(async()=>{setModuleData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},moduleData),{},{loading:true}));saveSearchesModule.getAllRecords().then(res=>{var _res$data;setModuleData({data:(_res$data=res.data)===null||_res$data===void 0?void 0:_res$data.data,loading:false});}).catch(err=>{setModuleData({loading:false});});},[saveSearchesModule]);(0,react.useEffect)(()=>{getModuleData();},[]);return/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* PageHeader */.zY,{heading:"Saved Searches",breadCrumbData:breadCrumbsData}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"d-flex overflow-hidden",children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"d-flex flex-column w-100",children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"overflow-auto",children:/*#__PURE__*/(0,jsx_runtime.jsx)(TableComponent,{tableData:moduleData===null||moduleData===void 0?void 0:moduleData.data,tableLoading:moduleData.loading,reloadTableData:getModuleData})})})})]});};/* harmony default export */ const ViewSavedSearches = (AgentSavedSearches);

/***/ }),

/***/ 63611:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  EF: () => (/* binding */ ListContext),
  Ay: () => (/* binding */ list)
});

// UNUSED EXPORTS: ListConsumer

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(60436);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(64467);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(5544);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(82284);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(48383);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(5741);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/defaultRenderEmpty.js
var defaultRenderEmpty = __webpack_require__(45534);
// EXTERNAL MODULE: ./node_modules/antd/es/grid/row.js
var row = __webpack_require__(78786);
// EXTERNAL MODULE: ./node_modules/antd/es/grid/hooks/useBreakpoint.js
var useBreakpoint = __webpack_require__(16661);
// EXTERNAL MODULE: ./node_modules/antd/es/pagination/index.js + 12 modules
var es_pagination = __webpack_require__(24575);
// EXTERNAL MODULE: ./node_modules/antd/es/spin/index.js
var spin = __webpack_require__(90650);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/responsiveObserve.js
var responsiveObserve = __webpack_require__(86557);
// EXTERNAL MODULE: ./node_modules/antd/es/grid/col.js
var col = __webpack_require__(55352);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(39156);
;// ./node_modules/antd/es/list/Item.js


var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};






var Meta = function Meta(_a) {
  var customizePrefixCls = _a.prefixCls,
    className = _a.className,
    avatar = _a.avatar,
    title = _a.title,
    description = _a.description,
    others = __rest(_a, ["prefixCls", "className", "avatar", "title", "description"]);
  var _useContext = (0,react.useContext)(context/* ConfigContext */.QO),
    getPrefixCls = _useContext.getPrefixCls;
  var prefixCls = getPrefixCls('list', customizePrefixCls);
  var classString = classnames_default()("".concat(prefixCls, "-item-meta"), className);
  var content = /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-item-meta-content")
  }, title && /*#__PURE__*/react.createElement("h4", {
    className: "".concat(prefixCls, "-item-meta-title")
  }, title), description && /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-item-meta-description")
  }, description));
  return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.A)({}, others, {
    className: classString
  }), avatar && /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-item-meta-avatar")
  }, avatar), (title || description) && content);
};
var InternalItem = function InternalItem(_a, ref) {
  var customizePrefixCls = _a.prefixCls,
    children = _a.children,
    actions = _a.actions,
    extra = _a.extra,
    className = _a.className,
    colStyle = _a.colStyle,
    others = __rest(_a, ["prefixCls", "children", "actions", "extra", "className", "colStyle"]);
  var _useContext2 = (0,react.useContext)(ListContext),
    grid = _useContext2.grid,
    itemLayout = _useContext2.itemLayout;
  var _useContext3 = (0,react.useContext)(context/* ConfigContext */.QO),
    getPrefixCls = _useContext3.getPrefixCls;
  var isItemContainsTextNodeAndNotSingular = function isItemContainsTextNodeAndNotSingular() {
    var result;
    react.Children.forEach(children, function (element) {
      if (typeof element === 'string') {
        result = true;
      }
    });
    return result && react.Children.count(children) > 1;
  };
  var isFlexMode = function isFlexMode() {
    if (itemLayout === 'vertical') {
      return !!extra;
    }
    return !isItemContainsTextNodeAndNotSingular();
  };
  var prefixCls = getPrefixCls('list', customizePrefixCls);
  var actionsContent = actions && actions.length > 0 && /*#__PURE__*/react.createElement("ul", {
    className: "".concat(prefixCls, "-item-action"),
    key: "actions"
  }, actions.map(function (action, i) {
    return /*#__PURE__*/(
      // eslint-disable-next-line react/no-array-index-key
      react.createElement("li", {
        key: "".concat(prefixCls, "-item-action-").concat(i)
      }, action, i !== actions.length - 1 && /*#__PURE__*/react.createElement("em", {
        className: "".concat(prefixCls, "-item-action-split")
      }))
    );
  }));
  var Element = grid ? 'div' : 'li';
  var itemChildren = /*#__PURE__*/react.createElement(Element, (0,esm_extends/* default */.A)({}, others, !grid ? {
    ref: ref
  } : {}, {
    className: classnames_default()("".concat(prefixCls, "-item"), (0,defineProperty/* default */.A)({}, "".concat(prefixCls, "-item-no-flex"), !isFlexMode()), className)
  }), itemLayout === 'vertical' && extra ? [/*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-item-main"),
    key: "content"
  }, children, actionsContent), /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-item-extra"),
    key: "extra"
  }, extra)] : [children, actionsContent, (0,reactNode/* cloneElement */.Ob)(extra, {
    key: 'extra'
  })]);
  return grid ? /*#__PURE__*/react.createElement(col/* default */.A, {
    ref: ref,
    flex: 1,
    style: colStyle
  }, itemChildren) : itemChildren;
};
var Item = /*#__PURE__*/(0,react.forwardRef)(InternalItem);
Item.Meta = Meta;
/* harmony default export */ const list_Item = (Item);
;// ./node_modules/antd/es/list/index.js





var list_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};










var ListContext = /*#__PURE__*/react.createContext({});
var ListConsumer = ListContext.Consumer;
function List(_a) {
  var _classNames;
  var _a$pagination = _a.pagination,
    pagination = _a$pagination === void 0 ? false : _a$pagination,
    customizePrefixCls = _a.prefixCls,
    _a$bordered = _a.bordered,
    bordered = _a$bordered === void 0 ? false : _a$bordered,
    _a$split = _a.split,
    split = _a$split === void 0 ? true : _a$split,
    className = _a.className,
    children = _a.children,
    itemLayout = _a.itemLayout,
    loadMore = _a.loadMore,
    grid = _a.grid,
    _a$dataSource = _a.dataSource,
    dataSource = _a$dataSource === void 0 ? [] : _a$dataSource,
    size = _a.size,
    header = _a.header,
    footer = _a.footer,
    _a$loading = _a.loading,
    loading = _a$loading === void 0 ? false : _a$loading,
    rowKey = _a.rowKey,
    renderItem = _a.renderItem,
    locale = _a.locale,
    rest = list_rest(_a, ["pagination", "prefixCls", "bordered", "split", "className", "children", "itemLayout", "loadMore", "grid", "dataSource", "size", "header", "footer", "loading", "rowKey", "renderItem", "locale"]);
  var paginationObj = pagination && (0,esm_typeof/* default */.A)(pagination) === 'object' ? pagination : {};
  var _React$useState = react.useState(paginationObj.defaultCurrent || 1),
    _React$useState2 = (0,slicedToArray/* default */.A)(_React$useState, 2),
    paginationCurrent = _React$useState2[0],
    setPaginationCurrent = _React$useState2[1];
  var _React$useState3 = react.useState(paginationObj.defaultPageSize || 10),
    _React$useState4 = (0,slicedToArray/* default */.A)(_React$useState3, 2),
    paginationSize = _React$useState4[0],
    setPaginationSize = _React$useState4[1];
  var _React$useContext = react.useContext(context/* ConfigContext */.QO),
    getPrefixCls = _React$useContext.getPrefixCls,
    renderEmpty = _React$useContext.renderEmpty,
    direction = _React$useContext.direction;
  var defaultPaginationProps = {
    current: 1,
    total: 0
  };
  var triggerPaginationEvent = function triggerPaginationEvent(eventName) {
    return function (page, pageSize) {
      setPaginationCurrent(page);
      setPaginationSize(pageSize);
      if (pagination && pagination[eventName]) {
        pagination[eventName](page, pageSize);
      }
    };
  };
  var onPaginationChange = triggerPaginationEvent('onChange');
  var onPaginationShowSizeChange = triggerPaginationEvent('onShowSizeChange');
  var renderInnerItem = function renderInnerItem(item, index) {
    if (!renderItem) return null;
    var key;
    if (typeof rowKey === 'function') {
      key = rowKey(item);
    } else if (rowKey) {
      key = item[rowKey];
    } else {
      key = item.key;
    }
    if (!key) {
      key = "list-item-".concat(index);
    }
    return /*#__PURE__*/react.createElement(react.Fragment, {
      key: key
    }, renderItem(item, index));
  };
  var isSomethingAfterLastItem = function isSomethingAfterLastItem() {
    return !!(loadMore || pagination || footer);
  };
  var renderEmptyFunc = function renderEmptyFunc(prefixCls, renderEmptyHandler) {
    return /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-empty-text")
    }, locale && locale.emptyText || renderEmptyHandler('List'));
  };
  var prefixCls = getPrefixCls('list', customizePrefixCls);
  var loadingProp = loading;
  if (typeof loadingProp === 'boolean') {
    loadingProp = {
      spinning: loadingProp
    };
  }
  var isLoading = loadingProp && loadingProp.spinning;
  // large => lg
  // small => sm
  var sizeCls = '';
  switch (size) {
    case 'large':
      sizeCls = 'lg';
      break;
    case 'small':
      sizeCls = 'sm';
      break;
    default:
      break;
  }
  var classString = classnames_default()(prefixCls, (_classNames = {}, (0,defineProperty/* default */.A)(_classNames, "".concat(prefixCls, "-vertical"), itemLayout === 'vertical'), (0,defineProperty/* default */.A)(_classNames, "".concat(prefixCls, "-").concat(sizeCls), sizeCls), (0,defineProperty/* default */.A)(_classNames, "".concat(prefixCls, "-split"), split), (0,defineProperty/* default */.A)(_classNames, "".concat(prefixCls, "-bordered"), bordered), (0,defineProperty/* default */.A)(_classNames, "".concat(prefixCls, "-loading"), isLoading), (0,defineProperty/* default */.A)(_classNames, "".concat(prefixCls, "-grid"), !!grid), (0,defineProperty/* default */.A)(_classNames, "".concat(prefixCls, "-something-after-last-item"), isSomethingAfterLastItem()), (0,defineProperty/* default */.A)(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
  var paginationProps = (0,esm_extends/* default */.A)((0,esm_extends/* default */.A)((0,esm_extends/* default */.A)({}, defaultPaginationProps), {
    total: dataSource.length,
    current: paginationCurrent,
    pageSize: paginationSize
  }), pagination || {});
  var largestPage = Math.ceil(paginationProps.total / paginationProps.pageSize);
  if (paginationProps.current > largestPage) {
    paginationProps.current = largestPage;
  }
  var paginationContent = pagination ? /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-pagination")
  }, /*#__PURE__*/react.createElement(es_pagination/* default */.A, (0,esm_extends/* default */.A)({}, paginationProps, {
    onChange: onPaginationChange,
    onShowSizeChange: onPaginationShowSizeChange
  }))) : null;
  var splitDataSource = (0,toConsumableArray/* default */.A)(dataSource);
  if (pagination) {
    if (dataSource.length > (paginationProps.current - 1) * paginationProps.pageSize) {
      splitDataSource = (0,toConsumableArray/* default */.A)(dataSource).splice((paginationProps.current - 1) * paginationProps.pageSize, paginationProps.pageSize);
    }
  }
  var needResponsive = Object.keys(grid || {}).some(function (key) {
    return ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].includes(key);
  });
  var screens = (0,useBreakpoint/* default */.A)(needResponsive);
  var currentBreakpoint = react.useMemo(function () {
    for (var i = 0; i < responsiveObserve/* responsiveArray */.ye.length; i += 1) {
      var breakpoint = responsiveObserve/* responsiveArray */.ye[i];
      if (screens[breakpoint]) {
        return breakpoint;
      }
    }
    return undefined;
  }, [screens]);
  var colStyle = react.useMemo(function () {
    if (!grid) {
      return undefined;
    }
    var columnCount = currentBreakpoint && grid[currentBreakpoint] ? grid[currentBreakpoint] : grid.column;
    if (columnCount) {
      return {
        width: "".concat(100 / columnCount, "%"),
        maxWidth: "".concat(100 / columnCount, "%")
      };
    }
  }, [grid === null || grid === void 0 ? void 0 : grid.column, currentBreakpoint]);
  var childrenContent = isLoading && /*#__PURE__*/react.createElement("div", {
    style: {
      minHeight: 53
    }
  });
  if (splitDataSource.length > 0) {
    var items = splitDataSource.map(function (item, index) {
      return renderInnerItem(item, index);
    });
    childrenContent = grid ? /*#__PURE__*/react.createElement(row/* default */.A, {
      gutter: grid.gutter
    }, react.Children.map(items, function (child) {
      return /*#__PURE__*/react.createElement("div", {
        key: child === null || child === void 0 ? void 0 : child.key,
        style: colStyle
      }, child);
    })) : /*#__PURE__*/react.createElement("ul", {
      className: "".concat(prefixCls, "-items")
    }, items);
  } else if (!children && !isLoading) {
    childrenContent = renderEmptyFunc(prefixCls, renderEmpty || defaultRenderEmpty/* default */.A);
  }
  var paginationPosition = paginationProps.position || 'bottom';
  var contextValue = react.useMemo(function () {
    return {
      grid: grid,
      itemLayout: itemLayout
    };
  }, [JSON.stringify(grid), itemLayout]);
  return /*#__PURE__*/react.createElement(ListContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.A)({
    className: classString
  }, rest), (paginationPosition === 'top' || paginationPosition === 'both') && paginationContent, header && /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-header")
  }, header), /*#__PURE__*/react.createElement(spin/* default */.A, (0,esm_extends/* default */.A)({}, loadingProp), childrenContent, children), footer && /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-footer")
  }, footer), loadMore || (paginationPosition === 'bottom' || paginationPosition === 'both') && paginationContent));
}
List.Item = list_Item;
/* harmony default export */ const list = (List);

/***/ })

}]);