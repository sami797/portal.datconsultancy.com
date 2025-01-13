"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[3094],{

/***/ 45355:
/***/ ((module) => {



// do not edit .js files directly - edit src/index.jst
module.exports = function equal(a, b) {
  if (a === b) return true;
  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;
    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;) if (!equal(a[i], b[i])) return false;
      return true;
    }
    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;
    for (i = length; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    for (i = length; i-- !== 0;) {
      var key = keys[i];
      if (!equal(a[key], b[key])) return false;
    }
    return true;
  }

  // true if both NaN, false otherwise
  return a !== a && b !== b;
};

/***/ }),

/***/ 53268:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ invariant)
/* harmony export */ });
/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */function invariant(condition, format) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  if (isProduction()) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }
  if (!condition) {
    let error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      let argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }
    error.framesToPop = 1 // we don't care about invariant's own frame
    ;

    throw error;
  }
}
function isProduction() {
  return typeof process !== 'undefined' && "production" === 'production';
}

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 70246:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ shallowEqual)
/* harmony export */ });
function shallowEqual(objA, objB, compare, compareContext) {
  let compareResult = compare ? compare.call(compareContext, objA, objB) : void 0;
  if (compareResult !== void 0) {
    return !!compareResult;
  }
  if (objA === objB) {
    return true;
  }
  if (typeof objA !== 'object' || !objA || typeof objB !== 'object' || !objB) {
    return false;
  }
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  }
  const bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
  // Test for A's keys different from B.
  for (let idx = 0; idx < keysA.length; idx++) {
    const key = keysA[idx];
    if (!bHasOwnProperty(key)) {
      return false;
    }
    const valueA = objA[key];
    const valueB = objB[key];
    compareResult = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
    if (compareResult === false || compareResult === void 0 && valueA !== valueB) {
      return false;
    }
  }
  return true;
}

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 72500:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  t2: () => (/* binding */ HTML5Backend)
});

// UNUSED EXPORTS: NativeTypes, getEmptyImage

// NAMESPACE OBJECT: ./node_modules/react-dnd-html5-backend/dist/NativeTypes.js
var NativeTypes_namespaceObject = {};
__webpack_require__.r(NativeTypes_namespaceObject);
__webpack_require__.d(NativeTypes_namespaceObject, {
  FILE: () => (FILE),
  HTML: () => (HTML),
  TEXT: () => (TEXT),
  URL: () => (URL)
});

;// ./node_modules/react-dnd-html5-backend/dist/utils/js_utils.js
// cheap lodash replacements
function memoize(fn) {
  let result = null;
  const memoized = () => {
    if (result == null) {
      result = fn();
    }
    return result;
  };
  return memoized;
}
/**
 * drop-in replacement for _.without
 */
function without(items, item) {
  return items.filter(i => i !== item);
}
function union(itemsA, itemsB) {
  const set = new Set();
  const insertItem = item => set.add(item);
  itemsA.forEach(insertItem);
  itemsB.forEach(insertItem);
  const result = [];
  set.forEach(key => result.push(key));
  return result;
}

//# sourceMappingURL=js_utils.js.map
;// ./node_modules/react-dnd-html5-backend/dist/EnterLeaveCounter.js

class EnterLeaveCounter {
  enter(enteringNode) {
    const previousLength = this.entered.length;
    const isNodeEntered = node => this.isNodeInDocument(node) && (!node.contains || node.contains(enteringNode));
    this.entered = union(this.entered.filter(isNodeEntered), [enteringNode]);
    return previousLength === 0 && this.entered.length > 0;
  }
  leave(leavingNode) {
    const previousLength = this.entered.length;
    this.entered = without(this.entered.filter(this.isNodeInDocument), leavingNode);
    return previousLength > 0 && this.entered.length === 0;
  }
  reset() {
    this.entered = [];
  }
  constructor(isNodeInDocument) {
    this.entered = [];
    this.isNodeInDocument = isNodeInDocument;
  }
}

//# sourceMappingURL=EnterLeaveCounter.js.map
;// ./node_modules/react-dnd-html5-backend/dist/NativeDragSources/NativeDragSource.js
class NativeDragSource {
  initializeExposedProperties() {
    Object.keys(this.config.exposeProperties).forEach(property => {
      Object.defineProperty(this.item, property, {
        configurable: true,
        enumerable: true,
        get() {
          // eslint-disable-next-line no-console
          console.warn("Browser doesn't allow reading \"".concat(property, "\" until the drop event."));
          return null;
        }
      });
    });
  }
  loadDataTransfer(dataTransfer) {
    if (dataTransfer) {
      const newProperties = {};
      Object.keys(this.config.exposeProperties).forEach(property => {
        const propertyFn = this.config.exposeProperties[property];
        if (propertyFn != null) {
          newProperties[property] = {
            value: propertyFn(dataTransfer, this.config.matchesTypes),
            configurable: true,
            enumerable: true
          };
        }
      });
      Object.defineProperties(this.item, newProperties);
    }
  }
  canDrag() {
    return true;
  }
  beginDrag() {
    return this.item;
  }
  isDragging(monitor, handle) {
    return handle === monitor.getSourceId();
  }
  endDrag() {
    // empty
  }
  constructor(config) {
    this.config = config;
    this.item = {};
    this.initializeExposedProperties();
  }
}

//# sourceMappingURL=NativeDragSource.js.map
;// ./node_modules/react-dnd-html5-backend/dist/NativeTypes.js
const FILE = '__NATIVE_FILE__';
const URL = '__NATIVE_URL__';
const TEXT = '__NATIVE_TEXT__';
const HTML = '__NATIVE_HTML__';

//# sourceMappingURL=NativeTypes.js.map
;// ./node_modules/react-dnd-html5-backend/dist/NativeDragSources/getDataFromDataTransfer.js
function getDataFromDataTransfer(dataTransfer, typesToTry, defaultValue) {
  const result = typesToTry.reduce((resultSoFar, typeToTry) => resultSoFar || dataTransfer.getData(typeToTry), '');
  return result != null ? result : defaultValue;
}

//# sourceMappingURL=getDataFromDataTransfer.js.map
;// ./node_modules/react-dnd-html5-backend/dist/NativeDragSources/nativeTypesConfig.js


const nativeTypesConfig = {
  [FILE]: {
    exposeProperties: {
      files: dataTransfer => Array.prototype.slice.call(dataTransfer.files),
      items: dataTransfer => dataTransfer.items,
      dataTransfer: dataTransfer => dataTransfer
    },
    matchesTypes: ['Files']
  },
  [HTML]: {
    exposeProperties: {
      html: (dataTransfer, matchesTypes) => getDataFromDataTransfer(dataTransfer, matchesTypes, ''),
      dataTransfer: dataTransfer => dataTransfer
    },
    matchesTypes: ['Html', 'text/html']
  },
  [URL]: {
    exposeProperties: {
      urls: (dataTransfer, matchesTypes) => getDataFromDataTransfer(dataTransfer, matchesTypes, '').split('\n'),
      dataTransfer: dataTransfer => dataTransfer
    },
    matchesTypes: ['Url', 'text/uri-list']
  },
  [TEXT]: {
    exposeProperties: {
      text: (dataTransfer, matchesTypes) => getDataFromDataTransfer(dataTransfer, matchesTypes, ''),
      dataTransfer: dataTransfer => dataTransfer
    },
    matchesTypes: ['Text', 'text/plain']
  }
};

//# sourceMappingURL=nativeTypesConfig.js.map
;// ./node_modules/react-dnd-html5-backend/dist/NativeDragSources/index.js


function createNativeDragSource(type, dataTransfer) {
  const config = nativeTypesConfig[type];
  if (!config) {
    throw new Error("native type ".concat(type, " has no configuration"));
  }
  const result = new NativeDragSource(config);
  result.loadDataTransfer(dataTransfer);
  return result;
}
function matchNativeItemType(dataTransfer) {
  if (!dataTransfer) {
    return null;
  }
  const dataTransferTypes = Array.prototype.slice.call(dataTransfer.types || []);
  return Object.keys(nativeTypesConfig).filter(nativeItemType => {
    const typeConfig = nativeTypesConfig[nativeItemType];
    if (!(typeConfig === null || typeConfig === void 0 ? void 0 : typeConfig.matchesTypes)) {
      return false;
    }
    return typeConfig.matchesTypes.some(t => dataTransferTypes.indexOf(t) > -1);
  })[0] || null;
}

//# sourceMappingURL=index.js.map
;// ./node_modules/react-dnd-html5-backend/dist/BrowserDetector.js

const isFirefox = memoize(() => /firefox/i.test(navigator.userAgent));
const isSafari = memoize(() => Boolean(window.safari));

//# sourceMappingURL=BrowserDetector.js.map
;// ./node_modules/react-dnd-html5-backend/dist/MonotonicInterpolant.js
class MonotonicInterpolant {
  interpolate(x) {
    const {
      xs,
      ys,
      c1s,
      c2s,
      c3s
    } = this;
    // The rightmost point in the dataset should give an exact result
    let i = xs.length - 1;
    if (x === xs[i]) {
      return ys[i];
    }
    // Search for the interval x is in, returning the corresponding y if x is one of the original xs
    let low = 0;
    let high = c3s.length - 1;
    let mid;
    while (low <= high) {
      mid = Math.floor(0.5 * (low + high));
      const xHere = xs[mid];
      if (xHere < x) {
        low = mid + 1;
      } else if (xHere > x) {
        high = mid - 1;
      } else {
        return ys[mid];
      }
    }
    i = Math.max(0, high);
    // Interpolate
    const diff = x - xs[i];
    const diffSq = diff * diff;
    return ys[i] + c1s[i] * diff + c2s[i] * diffSq + c3s[i] * diff * diffSq;
  }
  constructor(xs, ys) {
    const {
      length
    } = xs;
    // Rearrange xs and ys so that xs is sorted
    const indexes = [];
    for (let i = 0; i < length; i++) {
      indexes.push(i);
    }
    indexes.sort((a, b) => xs[a] < xs[b] ? -1 : 1);
    // Get consecutive differences and slopes
    const dys = [];
    const dxs = [];
    const ms = [];
    let dx;
    let dy;
    for (let i1 = 0; i1 < length - 1; i1++) {
      dx = xs[i1 + 1] - xs[i1];
      dy = ys[i1 + 1] - ys[i1];
      dxs.push(dx);
      dys.push(dy);
      ms.push(dy / dx);
    }
    // Get degree-1 coefficients
    const c1s = [ms[0]];
    for (let i2 = 0; i2 < dxs.length - 1; i2++) {
      const m2 = ms[i2];
      const mNext = ms[i2 + 1];
      if (m2 * mNext <= 0) {
        c1s.push(0);
      } else {
        dx = dxs[i2];
        const dxNext = dxs[i2 + 1];
        const common = dx + dxNext;
        c1s.push(3 * common / ((common + dxNext) / m2 + (common + dx) / mNext));
      }
    }
    c1s.push(ms[ms.length - 1]);
    // Get degree-2 and degree-3 coefficients
    const c2s = [];
    const c3s = [];
    let m;
    for (let i3 = 0; i3 < c1s.length - 1; i3++) {
      m = ms[i3];
      const c1 = c1s[i3];
      const invDx = 1 / dxs[i3];
      const common = c1 + c1s[i3 + 1] - m - m;
      c2s.push((m - c1 - common) * invDx);
      c3s.push(common * invDx * invDx);
    }
    this.xs = xs;
    this.ys = ys;
    this.c1s = c1s;
    this.c2s = c2s;
    this.c3s = c3s;
  }
}

//# sourceMappingURL=MonotonicInterpolant.js.map
;// ./node_modules/react-dnd-html5-backend/dist/OffsetUtils.js


const ELEMENT_NODE = 1;
function getNodeClientOffset(node) {
  const el = node.nodeType === ELEMENT_NODE ? node : node.parentElement;
  if (!el) {
    return null;
  }
  const {
    top,
    left
  } = el.getBoundingClientRect();
  return {
    x: left,
    y: top
  };
}
function getEventClientOffset(e) {
  return {
    x: e.clientX,
    y: e.clientY
  };
}
function isImageNode(node) {
  var ref;
  return node.nodeName === 'IMG' && (isFirefox() || !((ref = document.documentElement) === null || ref === void 0 ? void 0 : ref.contains(node)));
}
function getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight) {
  let dragPreviewWidth = isImage ? dragPreview.width : sourceWidth;
  let dragPreviewHeight = isImage ? dragPreview.height : sourceHeight;
  // Work around @2x coordinate discrepancies in browsers
  if (isSafari() && isImage) {
    dragPreviewHeight /= window.devicePixelRatio;
    dragPreviewWidth /= window.devicePixelRatio;
  }
  return {
    dragPreviewWidth,
    dragPreviewHeight
  };
}
function getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint) {
  // The browsers will use the image intrinsic size under different conditions.
  // Firefox only cares if it's an image, but WebKit also wants it to be detached.
  const isImage = isImageNode(dragPreview);
  const dragPreviewNode = isImage ? sourceNode : dragPreview;
  const dragPreviewNodeOffsetFromClient = getNodeClientOffset(dragPreviewNode);
  const offsetFromDragPreview = {
    x: clientOffset.x - dragPreviewNodeOffsetFromClient.x,
    y: clientOffset.y - dragPreviewNodeOffsetFromClient.y
  };
  const {
    offsetWidth: sourceWidth,
    offsetHeight: sourceHeight
  } = sourceNode;
  const {
    anchorX,
    anchorY
  } = anchorPoint;
  const {
    dragPreviewWidth,
    dragPreviewHeight
  } = getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight);
  const calculateYOffset = () => {
    const interpolantY = new MonotonicInterpolant([0, 0.5, 1], [
    // Dock to the top
    offsetFromDragPreview.y,
    // Align at the center
    offsetFromDragPreview.y / sourceHeight * dragPreviewHeight,
    // Dock to the bottom
    offsetFromDragPreview.y + dragPreviewHeight - sourceHeight]);
    let y = interpolantY.interpolate(anchorY);
    // Work around Safari 8 positioning bug
    if (isSafari() && isImage) {
      // We'll have to wait for @3x to see if this is entirely correct
      y += (window.devicePixelRatio - 1) * dragPreviewHeight;
    }
    return y;
  };
  const calculateXOffset = () => {
    // Interpolate coordinates depending on anchor point
    // If you know a simpler way to do this, let me know
    const interpolantX = new MonotonicInterpolant([0, 0.5, 1], [
    // Dock to the left
    offsetFromDragPreview.x,
    // Align at the center
    offsetFromDragPreview.x / sourceWidth * dragPreviewWidth,
    // Dock to the right
    offsetFromDragPreview.x + dragPreviewWidth - sourceWidth]);
    return interpolantX.interpolate(anchorX);
  };
  // Force offsets if specified in the options.
  const {
    offsetX,
    offsetY
  } = offsetPoint;
  const isManualOffsetX = offsetX === 0 || offsetX;
  const isManualOffsetY = offsetY === 0 || offsetY;
  return {
    x: isManualOffsetX ? offsetX : calculateXOffset(),
    y: isManualOffsetY ? offsetY : calculateYOffset()
  };
}

//# sourceMappingURL=OffsetUtils.js.map
;// ./node_modules/react-dnd-html5-backend/dist/OptionsReader.js
class OptionsReader {
  get window() {
    if (this.globalContext) {
      return this.globalContext;
    } else if (typeof window !== 'undefined') {
      return window;
    }
    return undefined;
  }
  get document() {
    var ref;
    if ((ref = this.globalContext) === null || ref === void 0 ? void 0 : ref.document) {
      return this.globalContext.document;
    } else if (this.window) {
      return this.window.document;
    } else {
      return undefined;
    }
  }
  get rootElement() {
    var ref;
    return ((ref = this.optionsArgs) === null || ref === void 0 ? void 0 : ref.rootElement) || this.window;
  }
  constructor(globalContext, options) {
    this.ownerDocument = null;
    this.globalContext = globalContext;
    this.optionsArgs = options;
  }
}

//# sourceMappingURL=OptionsReader.js.map
;// ./node_modules/react-dnd-html5-backend/dist/HTML5BackendImpl.js
function _defineProperty(obj, key, value) {
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
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }
  return target;
}





class HTML5BackendImpl {
  /**
  * Generate profiling statistics for the HTML5Backend.
  */
  profile() {
    var ref, ref1;
    return {
      sourcePreviewNodes: this.sourcePreviewNodes.size,
      sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
      sourceNodeOptions: this.sourceNodeOptions.size,
      sourceNodes: this.sourceNodes.size,
      dragStartSourceIds: ((ref = this.dragStartSourceIds) === null || ref === void 0 ? void 0 : ref.length) || 0,
      dropTargetIds: this.dropTargetIds.length,
      dragEnterTargetIds: this.dragEnterTargetIds.length,
      dragOverTargetIds: ((ref1 = this.dragOverTargetIds) === null || ref1 === void 0 ? void 0 : ref1.length) || 0
    };
  }
  // public for test
  get window() {
    return this.options.window;
  }
  get document() {
    return this.options.document;
  }
  /**
  * Get the root element to use for event subscriptions
  */
  get rootElement() {
    return this.options.rootElement;
  }
  setup() {
    const root = this.rootElement;
    if (root === undefined) {
      return;
    }
    if (root.__isReactDndBackendSetUp) {
      throw new Error('Cannot have two HTML5 backends at the same time.');
    }
    root.__isReactDndBackendSetUp = true;
    this.addEventListeners(root);
  }
  teardown() {
    const root = this.rootElement;
    if (root === undefined) {
      return;
    }
    root.__isReactDndBackendSetUp = false;
    this.removeEventListeners(this.rootElement);
    this.clearCurrentDragSourceNode();
    if (this.asyncEndDragFrameId) {
      var ref;
      (ref = this.window) === null || ref === void 0 ? void 0 : ref.cancelAnimationFrame(this.asyncEndDragFrameId);
    }
  }
  connectDragPreview(sourceId, node, options) {
    this.sourcePreviewNodeOptions.set(sourceId, options);
    this.sourcePreviewNodes.set(sourceId, node);
    return () => {
      this.sourcePreviewNodes.delete(sourceId);
      this.sourcePreviewNodeOptions.delete(sourceId);
    };
  }
  connectDragSource(sourceId, node, options) {
    this.sourceNodes.set(sourceId, node);
    this.sourceNodeOptions.set(sourceId, options);
    const handleDragStart = e => this.handleDragStart(e, sourceId);
    const handleSelectStart = e => this.handleSelectStart(e);
    node.setAttribute('draggable', 'true');
    node.addEventListener('dragstart', handleDragStart);
    node.addEventListener('selectstart', handleSelectStart);
    return () => {
      this.sourceNodes.delete(sourceId);
      this.sourceNodeOptions.delete(sourceId);
      node.removeEventListener('dragstart', handleDragStart);
      node.removeEventListener('selectstart', handleSelectStart);
      node.setAttribute('draggable', 'false');
    };
  }
  connectDropTarget(targetId, node) {
    const handleDragEnter = e => this.handleDragEnter(e, targetId);
    const handleDragOver = e => this.handleDragOver(e, targetId);
    const handleDrop = e => this.handleDrop(e, targetId);
    node.addEventListener('dragenter', handleDragEnter);
    node.addEventListener('dragover', handleDragOver);
    node.addEventListener('drop', handleDrop);
    return () => {
      node.removeEventListener('dragenter', handleDragEnter);
      node.removeEventListener('dragover', handleDragOver);
      node.removeEventListener('drop', handleDrop);
    };
  }
  addEventListeners(target) {
    // SSR Fix (https://github.com/react-dnd/react-dnd/pull/813
    if (!target.addEventListener) {
      return;
    }
    target.addEventListener('dragstart', this.handleTopDragStart);
    target.addEventListener('dragstart', this.handleTopDragStartCapture, true);
    target.addEventListener('dragend', this.handleTopDragEndCapture, true);
    target.addEventListener('dragenter', this.handleTopDragEnter);
    target.addEventListener('dragenter', this.handleTopDragEnterCapture, true);
    target.addEventListener('dragleave', this.handleTopDragLeaveCapture, true);
    target.addEventListener('dragover', this.handleTopDragOver);
    target.addEventListener('dragover', this.handleTopDragOverCapture, true);
    target.addEventListener('drop', this.handleTopDrop);
    target.addEventListener('drop', this.handleTopDropCapture, true);
  }
  removeEventListeners(target) {
    // SSR Fix (https://github.com/react-dnd/react-dnd/pull/813
    if (!target.removeEventListener) {
      return;
    }
    target.removeEventListener('dragstart', this.handleTopDragStart);
    target.removeEventListener('dragstart', this.handleTopDragStartCapture, true);
    target.removeEventListener('dragend', this.handleTopDragEndCapture, true);
    target.removeEventListener('dragenter', this.handleTopDragEnter);
    target.removeEventListener('dragenter', this.handleTopDragEnterCapture, true);
    target.removeEventListener('dragleave', this.handleTopDragLeaveCapture, true);
    target.removeEventListener('dragover', this.handleTopDragOver);
    target.removeEventListener('dragover', this.handleTopDragOverCapture, true);
    target.removeEventListener('drop', this.handleTopDrop);
    target.removeEventListener('drop', this.handleTopDropCapture, true);
  }
  getCurrentSourceNodeOptions() {
    const sourceId = this.monitor.getSourceId();
    const sourceNodeOptions = this.sourceNodeOptions.get(sourceId);
    return _objectSpread({
      dropEffect: this.altKeyPressed ? 'copy' : 'move'
    }, sourceNodeOptions || {});
  }
  getCurrentDropEffect() {
    if (this.isDraggingNativeItem()) {
      // It makes more sense to default to 'copy' for native resources
      return 'copy';
    }
    return this.getCurrentSourceNodeOptions().dropEffect;
  }
  getCurrentSourcePreviewNodeOptions() {
    const sourceId = this.monitor.getSourceId();
    const sourcePreviewNodeOptions = this.sourcePreviewNodeOptions.get(sourceId);
    return _objectSpread({
      anchorX: 0.5,
      anchorY: 0.5,
      captureDraggingState: false
    }, sourcePreviewNodeOptions || {});
  }
  isDraggingNativeItem() {
    const itemType = this.monitor.getItemType();
    return Object.keys(NativeTypes_namespaceObject).some(key => NativeTypes_namespaceObject[key] === itemType);
  }
  beginDragNativeItem(type, dataTransfer) {
    this.clearCurrentDragSourceNode();
    this.currentNativeSource = createNativeDragSource(type, dataTransfer);
    this.currentNativeHandle = this.registry.addSource(type, this.currentNativeSource);
    this.actions.beginDrag([this.currentNativeHandle]);
  }
  setCurrentDragSourceNode(node) {
    this.clearCurrentDragSourceNode();
    this.currentDragSourceNode = node;
    // A timeout of > 0 is necessary to resolve Firefox issue referenced
    // See:
    //   * https://github.com/react-dnd/react-dnd/pull/928
    //   * https://github.com/react-dnd/react-dnd/issues/869
    const MOUSE_MOVE_TIMEOUT = 1000;
    // Receiving a mouse event in the middle of a dragging operation
    // means it has ended and the drag source node disappeared from DOM,
    // so the browser didn't dispatch the dragend event.
    //
    // We need to wait before we start listening for mousemove events.
    // This is needed because the drag preview needs to be drawn or else it fires an 'mousemove' event
    // immediately in some browsers.
    //
    // See:
    //   * https://github.com/react-dnd/react-dnd/pull/928
    //   * https://github.com/react-dnd/react-dnd/issues/869
    //
    this.mouseMoveTimeoutTimer = setTimeout(() => {
      var ref;
      return (ref = this.rootElement) === null || ref === void 0 ? void 0 : ref.addEventListener('mousemove', this.endDragIfSourceWasRemovedFromDOM, true);
    }, MOUSE_MOVE_TIMEOUT);
  }
  clearCurrentDragSourceNode() {
    if (this.currentDragSourceNode) {
      this.currentDragSourceNode = null;
      if (this.rootElement) {
        var ref;
        (ref = this.window) === null || ref === void 0 ? void 0 : ref.clearTimeout(this.mouseMoveTimeoutTimer || undefined);
        this.rootElement.removeEventListener('mousemove', this.endDragIfSourceWasRemovedFromDOM, true);
      }
      this.mouseMoveTimeoutTimer = null;
      return true;
    }
    return false;
  }
  handleDragStart(e, sourceId) {
    if (e.defaultPrevented) {
      return;
    }
    if (!this.dragStartSourceIds) {
      this.dragStartSourceIds = [];
    }
    this.dragStartSourceIds.unshift(sourceId);
  }
  handleDragEnter(_e, targetId) {
    this.dragEnterTargetIds.unshift(targetId);
  }
  handleDragOver(_e, targetId) {
    if (this.dragOverTargetIds === null) {
      this.dragOverTargetIds = [];
    }
    this.dragOverTargetIds.unshift(targetId);
  }
  handleDrop(_e, targetId) {
    this.dropTargetIds.unshift(targetId);
  }
  constructor(manager, globalContext, options) {
    this.sourcePreviewNodes = new Map();
    this.sourcePreviewNodeOptions = new Map();
    this.sourceNodes = new Map();
    this.sourceNodeOptions = new Map();
    this.dragStartSourceIds = null;
    this.dropTargetIds = [];
    this.dragEnterTargetIds = [];
    this.currentNativeSource = null;
    this.currentNativeHandle = null;
    this.currentDragSourceNode = null;
    this.altKeyPressed = false;
    this.mouseMoveTimeoutTimer = null;
    this.asyncEndDragFrameId = null;
    this.dragOverTargetIds = null;
    this.lastClientOffset = null;
    this.hoverRafId = null;
    this.getSourceClientOffset = sourceId => {
      const source = this.sourceNodes.get(sourceId);
      return source && getNodeClientOffset(source) || null;
    };
    this.endDragNativeItem = () => {
      if (!this.isDraggingNativeItem()) {
        return;
      }
      this.actions.endDrag();
      if (this.currentNativeHandle) {
        this.registry.removeSource(this.currentNativeHandle);
      }
      this.currentNativeHandle = null;
      this.currentNativeSource = null;
    };
    this.isNodeInDocument = node => {
      // Check the node either in the main document or in the current context
      return Boolean(node && this.document && this.document.body && this.document.body.contains(node));
    };
    this.endDragIfSourceWasRemovedFromDOM = () => {
      const node = this.currentDragSourceNode;
      if (node == null || this.isNodeInDocument(node)) {
        return;
      }
      if (this.clearCurrentDragSourceNode() && this.monitor.isDragging()) {
        this.actions.endDrag();
      }
      this.cancelHover();
    };
    this.scheduleHover = dragOverTargetIds => {
      if (this.hoverRafId === null && typeof requestAnimationFrame !== 'undefined') {
        this.hoverRafId = requestAnimationFrame(() => {
          if (this.monitor.isDragging()) {
            this.actions.hover(dragOverTargetIds || [], {
              clientOffset: this.lastClientOffset
            });
          }
          this.hoverRafId = null;
        });
      }
    };
    this.cancelHover = () => {
      if (this.hoverRafId !== null && typeof cancelAnimationFrame !== 'undefined') {
        cancelAnimationFrame(this.hoverRafId);
        this.hoverRafId = null;
      }
    };
    this.handleTopDragStartCapture = () => {
      this.clearCurrentDragSourceNode();
      this.dragStartSourceIds = [];
    };
    this.handleTopDragStart = e => {
      if (e.defaultPrevented) {
        return;
      }
      const {
        dragStartSourceIds
      } = this;
      this.dragStartSourceIds = null;
      const clientOffset = getEventClientOffset(e);
      // Avoid crashing if we missed a drop event or our previous drag died
      if (this.monitor.isDragging()) {
        this.actions.endDrag();
        this.cancelHover();
      }
      // Don't publish the source just yet (see why below)
      this.actions.beginDrag(dragStartSourceIds || [], {
        publishSource: false,
        getSourceClientOffset: this.getSourceClientOffset,
        clientOffset
      });
      const {
        dataTransfer
      } = e;
      const nativeType = matchNativeItemType(dataTransfer);
      if (this.monitor.isDragging()) {
        if (dataTransfer && typeof dataTransfer.setDragImage === 'function') {
          // Use custom drag image if user specifies it.
          // If child drag source refuses drag but parent agrees,
          // use parent's node as drag image. Neither works in IE though.
          const sourceId = this.monitor.getSourceId();
          const sourceNode = this.sourceNodes.get(sourceId);
          const dragPreview = this.sourcePreviewNodes.get(sourceId) || sourceNode;
          if (dragPreview) {
            const {
              anchorX,
              anchorY,
              offsetX,
              offsetY
            } = this.getCurrentSourcePreviewNodeOptions();
            const anchorPoint = {
              anchorX,
              anchorY
            };
            const offsetPoint = {
              offsetX,
              offsetY
            };
            const dragPreviewOffset = getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint);
            dataTransfer.setDragImage(dragPreview, dragPreviewOffset.x, dragPreviewOffset.y);
          }
        }
        try {
          // Firefox won't drag without setting data
          dataTransfer === null || dataTransfer === void 0 ? void 0 : dataTransfer.setData('application/json', {});
        } catch (err) {
          // IE doesn't support MIME types in setData
        }
        // Store drag source node so we can check whether
        // it is removed from DOM and trigger endDrag manually.
        this.setCurrentDragSourceNode(e.target);
        // Now we are ready to publish the drag source.. or are we not?
        const {
          captureDraggingState
        } = this.getCurrentSourcePreviewNodeOptions();
        if (!captureDraggingState) {
          // Usually we want to publish it in the next tick so that browser
          // is able to screenshot the current (not yet dragging) state.
          //
          // It also neatly avoids a situation where render() returns null
          // in the same tick for the source element, and browser freaks out.
          setTimeout(() => this.actions.publishDragSource(), 0);
        } else {
          // In some cases the user may want to override this behavior, e.g.
          // to work around IE not supporting custom drag previews.
          //
          // When using a custom drag layer, the only way to prevent
          // the default drag preview from drawing in IE is to screenshot
          // the dragging state in which the node itself has zero opacity
          // and height. In this case, though, returning null from render()
          // will abruptly end the dragging, which is not obvious.
          //
          // This is the reason such behavior is strictly opt-in.
          this.actions.publishDragSource();
        }
      } else if (nativeType) {
        // A native item (such as URL) dragged from inside the document
        this.beginDragNativeItem(nativeType);
      } else if (dataTransfer && !dataTransfer.types && (e.target && !e.target.hasAttribute || !e.target.hasAttribute('draggable'))) {
        // Looks like a Safari bug: dataTransfer.types is null, but there was no draggable.
        // Just let it drag. It's a native type (URL or text) and will be picked up in
        // dragenter handler.
        return;
      } else {
        // If by this time no drag source reacted, tell browser not to drag.
        e.preventDefault();
      }
    };
    this.handleTopDragEndCapture = () => {
      if (this.clearCurrentDragSourceNode() && this.monitor.isDragging()) {
        // Firefox can dispatch this event in an infinite loop
        // if dragend handler does something like showing an alert.
        // Only proceed if we have not handled it already.
        this.actions.endDrag();
      }
      this.cancelHover();
    };
    this.handleTopDragEnterCapture = e => {
      this.dragEnterTargetIds = [];
      if (this.isDraggingNativeItem()) {
        var ref;
        (ref = this.currentNativeSource) === null || ref === void 0 ? void 0 : ref.loadDataTransfer(e.dataTransfer);
      }
      const isFirstEnter = this.enterLeaveCounter.enter(e.target);
      if (!isFirstEnter || this.monitor.isDragging()) {
        return;
      }
      const {
        dataTransfer
      } = e;
      const nativeType = matchNativeItemType(dataTransfer);
      if (nativeType) {
        // A native item (such as file or URL) dragged from outside the document
        this.beginDragNativeItem(nativeType, dataTransfer);
      }
    };
    this.handleTopDragEnter = e => {
      const {
        dragEnterTargetIds
      } = this;
      this.dragEnterTargetIds = [];
      if (!this.monitor.isDragging()) {
        // This is probably a native item type we don't understand.
        return;
      }
      this.altKeyPressed = e.altKey;
      // If the target changes position as the result of `dragenter`, `dragover` might still
      // get dispatched despite target being no longer there. The easy solution is to check
      // whether there actually is a target before firing `hover`.
      if (dragEnterTargetIds.length > 0) {
        this.actions.hover(dragEnterTargetIds, {
          clientOffset: getEventClientOffset(e)
        });
      }
      const canDrop = dragEnterTargetIds.some(targetId => this.monitor.canDropOnTarget(targetId));
      if (canDrop) {
        // IE requires this to fire dragover events
        e.preventDefault();
        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = this.getCurrentDropEffect();
        }
      }
    };
    this.handleTopDragOverCapture = e => {
      this.dragOverTargetIds = [];
      if (this.isDraggingNativeItem()) {
        var ref;
        (ref = this.currentNativeSource) === null || ref === void 0 ? void 0 : ref.loadDataTransfer(e.dataTransfer);
      }
    };
    this.handleTopDragOver = e => {
      const {
        dragOverTargetIds
      } = this;
      this.dragOverTargetIds = [];
      if (!this.monitor.isDragging()) {
        // This is probably a native item type we don't understand.
        // Prevent default "drop and blow away the whole document" action.
        e.preventDefault();
        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = 'none';
        }
        return;
      }
      this.altKeyPressed = e.altKey;
      this.lastClientOffset = getEventClientOffset(e);
      this.scheduleHover(dragOverTargetIds);
      const canDrop = (dragOverTargetIds || []).some(targetId => this.monitor.canDropOnTarget(targetId));
      if (canDrop) {
        // Show user-specified drop effect.
        e.preventDefault();
        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = this.getCurrentDropEffect();
        }
      } else if (this.isDraggingNativeItem()) {
        // Don't show a nice cursor but still prevent default
        // "drop and blow away the whole document" action.
        e.preventDefault();
      } else {
        e.preventDefault();
        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = 'none';
        }
      }
    };
    this.handleTopDragLeaveCapture = e => {
      if (this.isDraggingNativeItem()) {
        e.preventDefault();
      }
      const isLastLeave = this.enterLeaveCounter.leave(e.target);
      if (!isLastLeave) {
        return;
      }
      if (this.isDraggingNativeItem()) {
        setTimeout(() => this.endDragNativeItem(), 0);
      }
      this.cancelHover();
    };
    this.handleTopDropCapture = e => {
      this.dropTargetIds = [];
      if (this.isDraggingNativeItem()) {
        var ref;
        e.preventDefault();
        (ref = this.currentNativeSource) === null || ref === void 0 ? void 0 : ref.loadDataTransfer(e.dataTransfer);
      } else if (matchNativeItemType(e.dataTransfer)) {
        // Dragging some elements, like <a> and <img> may still behave like a native drag event,
        // even if the current drag event matches a user-defined type.
        // Stop the default behavior when we're not expecting a native item to be dropped.
        e.preventDefault();
      }
      this.enterLeaveCounter.reset();
    };
    this.handleTopDrop = e => {
      const {
        dropTargetIds
      } = this;
      this.dropTargetIds = [];
      this.actions.hover(dropTargetIds, {
        clientOffset: getEventClientOffset(e)
      });
      this.actions.drop({
        dropEffect: this.getCurrentDropEffect()
      });
      if (this.isDraggingNativeItem()) {
        this.endDragNativeItem();
      } else if (this.monitor.isDragging()) {
        this.actions.endDrag();
      }
      this.cancelHover();
    };
    this.handleSelectStart = e => {
      const target = e.target;
      // Only IE requires us to explicitly say
      // we want drag drop operation to start
      if (typeof target.dragDrop !== 'function') {
        return;
      }
      // Inputs and textareas should be selectable
      if (target.tagName === 'INPUT' || target.tagName === 'SELECT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
        return;
      }
      // For other targets, ask IE
      // to enable drag and drop
      e.preventDefault();
      target.dragDrop();
    };
    this.options = new OptionsReader(globalContext, options);
    this.actions = manager.getActions();
    this.monitor = manager.getMonitor();
    this.registry = manager.getRegistry();
    this.enterLeaveCounter = new EnterLeaveCounter(this.isNodeInDocument);
  }
}

//# sourceMappingURL=HTML5BackendImpl.js.map
;// ./node_modules/react-dnd-html5-backend/dist/index.js




const HTML5Backend = function createBackend(manager, context, options) {
  return new HTML5BackendImpl(manager, context, options);
};

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 7376:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ DndContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9950);

/**
 * Create the React Context
 */
const DndContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  dragDropManager: undefined
});

//# sourceMappingURL=DndContext.js.map

/***/ }),

/***/ 59767:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Q: () => (/* binding */ DndProvider)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(58522);
// EXTERNAL MODULE: ./node_modules/@react-dnd/invariant/dist/index.js
var dist = __webpack_require__(53268);
;// ./node_modules/dnd-core/dist/utils/js_utils.js
// cheap lodash replacements
/**
 * drop-in replacement for _.get
 * @param obj
 * @param path
 * @param defaultValue
 */function get(obj, path, defaultValue) {
  return path.split('.').reduce((a, c) => a && a[c] ? a[c] : defaultValue || null, obj);
}
/**
 * drop-in replacement for _.without
 */
function without(items, item) {
  return items.filter(i => i !== item);
}
/**
 * drop-in replacement for _.isString
 * @param input
 */
function isString(input) {
  return typeof input === 'string';
}
/**
 * drop-in replacement for _.isString
 * @param input
 */
function isObject(input) {
  return typeof input === 'object';
}
/**
 * replacement for _.xor
 * @param itemsA
 * @param itemsB
 */
function xor(itemsA, itemsB) {
  const map = new Map();
  const insertItem = item => {
    map.set(item, map.has(item) ? map.get(item) + 1 : 1);
  };
  itemsA.forEach(insertItem);
  itemsB.forEach(insertItem);
  const result = [];
  map.forEach((count, key) => {
    if (count === 1) {
      result.push(key);
    }
  });
  return result;
}
/**
 * replacement for _.intersection
 * @param itemsA
 * @param itemsB
 */
function intersection(itemsA, itemsB) {
  return itemsA.filter(t => itemsB.indexOf(t) > -1);
}

//# sourceMappingURL=js_utils.js.map
;// ./node_modules/dnd-core/dist/actions/dragDrop/types.js
const INIT_COORDS = 'dnd-core/INIT_COORDS';
const BEGIN_DRAG = 'dnd-core/BEGIN_DRAG';
const PUBLISH_DRAG_SOURCE = 'dnd-core/PUBLISH_DRAG_SOURCE';
const HOVER = 'dnd-core/HOVER';
const DROP = 'dnd-core/DROP';
const END_DRAG = 'dnd-core/END_DRAG';

//# sourceMappingURL=types.js.map
;// ./node_modules/dnd-core/dist/actions/dragDrop/local/setClientOffset.js

function setClientOffset(clientOffset, sourceClientOffset) {
  return {
    type: INIT_COORDS,
    payload: {
      sourceClientOffset: sourceClientOffset || null,
      clientOffset: clientOffset || null
    }
  };
}

//# sourceMappingURL=setClientOffset.js.map
;// ./node_modules/dnd-core/dist/actions/dragDrop/beginDrag.js




const ResetCoordinatesAction = {
  type: INIT_COORDS,
  payload: {
    clientOffset: null,
    sourceClientOffset: null
  }
};
function createBeginDrag(manager) {
  return function beginDrag() {
    let sourceIds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      publishSource: true
    };
    const {
      publishSource = true,
      clientOffset,
      getSourceClientOffset
    } = options;
    const monitor = manager.getMonitor();
    const registry = manager.getRegistry();
    // Initialize the coordinates using the client offset
    manager.dispatch(setClientOffset(clientOffset));
    verifyInvariants(sourceIds, monitor, registry);
    // Get the draggable source
    const sourceId = getDraggableSource(sourceIds, monitor);
    if (sourceId == null) {
      manager.dispatch(ResetCoordinatesAction);
      return;
    }
    // Get the source client offset
    let sourceClientOffset = null;
    if (clientOffset) {
      if (!getSourceClientOffset) {
        throw new Error('getSourceClientOffset must be defined');
      }
      verifyGetSourceClientOffsetIsFunction(getSourceClientOffset);
      sourceClientOffset = getSourceClientOffset(sourceId);
    }
    // Initialize the full coordinates
    manager.dispatch(setClientOffset(clientOffset, sourceClientOffset));
    const source = registry.getSource(sourceId);
    const item = source.beginDrag(monitor, sourceId);
    // If source.beginDrag returns null, this is an indicator to cancel the drag
    if (item == null) {
      return undefined;
    }
    verifyItemIsObject(item);
    registry.pinSource(sourceId);
    const itemType = registry.getSourceType(sourceId);
    return {
      type: BEGIN_DRAG,
      payload: {
        itemType,
        item,
        sourceId,
        clientOffset: clientOffset || null,
        sourceClientOffset: sourceClientOffset || null,
        isSourcePublic: !!publishSource
      }
    };
  };
}
function verifyInvariants(sourceIds, monitor, registry) {
  (0,dist/* invariant */.V)(!monitor.isDragging(), 'Cannot call beginDrag while dragging.');
  sourceIds.forEach(function (sourceId) {
    (0,dist/* invariant */.V)(registry.getSource(sourceId), 'Expected sourceIds to be registered.');
  });
}
function verifyGetSourceClientOffsetIsFunction(getSourceClientOffset) {
  (0,dist/* invariant */.V)(typeof getSourceClientOffset === 'function', 'When clientOffset is provided, getSourceClientOffset must be a function.');
}
function verifyItemIsObject(item) {
  (0,dist/* invariant */.V)(isObject(item), 'Item must be an object.');
}
function getDraggableSource(sourceIds, monitor) {
  let sourceId = null;
  for (let i = sourceIds.length - 1; i >= 0; i--) {
    if (monitor.canDragSource(sourceIds[i])) {
      sourceId = sourceIds[i];
      break;
    }
  }
  return sourceId;
}

//# sourceMappingURL=beginDrag.js.map
;// ./node_modules/dnd-core/dist/actions/dragDrop/drop.js
function _defineProperty(obj, key, value) {
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
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }
  return target;
}



function createDrop(manager) {
  return function drop() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const monitor = manager.getMonitor();
    const registry = manager.getRegistry();
    drop_verifyInvariants(monitor);
    const targetIds = getDroppableTargets(monitor);
    // Multiple actions are dispatched here, which is why this doesn't return an action
    targetIds.forEach((targetId, index) => {
      const dropResult = determineDropResult(targetId, index, registry, monitor);
      const action = {
        type: DROP,
        payload: {
          dropResult: _objectSpread({}, options, dropResult)
        }
      };
      manager.dispatch(action);
    });
  };
}
function drop_verifyInvariants(monitor) {
  (0,dist/* invariant */.V)(monitor.isDragging(), 'Cannot call drop while not dragging.');
  (0,dist/* invariant */.V)(!monitor.didDrop(), 'Cannot call drop twice during one drag operation.');
}
function determineDropResult(targetId, index, registry, monitor) {
  const target = registry.getTarget(targetId);
  let dropResult = target ? target.drop(monitor, targetId) : undefined;
  verifyDropResultType(dropResult);
  if (typeof dropResult === 'undefined') {
    dropResult = index === 0 ? {} : monitor.getDropResult();
  }
  return dropResult;
}
function verifyDropResultType(dropResult) {
  (0,dist/* invariant */.V)(typeof dropResult === 'undefined' || isObject(dropResult), 'Drop result must either be an object or undefined.');
}
function getDroppableTargets(monitor) {
  const targetIds = monitor.getTargetIds().filter(monitor.canDropOnTarget, monitor);
  targetIds.reverse();
  return targetIds;
}

//# sourceMappingURL=drop.js.map
;// ./node_modules/dnd-core/dist/actions/dragDrop/endDrag.js


function createEndDrag(manager) {
  return function endDrag() {
    const monitor = manager.getMonitor();
    const registry = manager.getRegistry();
    verifyIsDragging(monitor);
    const sourceId = monitor.getSourceId();
    if (sourceId != null) {
      const source = registry.getSource(sourceId, true);
      source.endDrag(monitor, sourceId);
      registry.unpinSource();
    }
    return {
      type: END_DRAG
    };
  };
}
function verifyIsDragging(monitor) {
  (0,dist/* invariant */.V)(monitor.isDragging(), 'Cannot call endDrag while not dragging.');
}

//# sourceMappingURL=endDrag.js.map
;// ./node_modules/dnd-core/dist/utils/matchesType.js
function matchesType(targetType, draggedItemType) {
  if (draggedItemType === null) {
    return targetType === null;
  }
  return Array.isArray(targetType) ? targetType.some(t => t === draggedItemType) : targetType === draggedItemType;
}

//# sourceMappingURL=matchesType.js.map
;// ./node_modules/dnd-core/dist/actions/dragDrop/hover.js



function createHover(manager) {
  return function hover(targetIdsArg) {
    let {
      clientOffset
    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    verifyTargetIdsIsArray(targetIdsArg);
    const targetIds = targetIdsArg.slice(0);
    const monitor = manager.getMonitor();
    const registry = manager.getRegistry();
    const draggedItemType = monitor.getItemType();
    removeNonMatchingTargetIds(targetIds, registry, draggedItemType);
    checkInvariants(targetIds, monitor, registry);
    hoverAllTargets(targetIds, monitor, registry);
    return {
      type: HOVER,
      payload: {
        targetIds,
        clientOffset: clientOffset || null
      }
    };
  };
}
function verifyTargetIdsIsArray(targetIdsArg) {
  (0,dist/* invariant */.V)(Array.isArray(targetIdsArg), 'Expected targetIds to be an array.');
}
function checkInvariants(targetIds, monitor, registry) {
  (0,dist/* invariant */.V)(monitor.isDragging(), 'Cannot call hover while not dragging.');
  (0,dist/* invariant */.V)(!monitor.didDrop(), 'Cannot call hover after drop.');
  for (let i = 0; i < targetIds.length; i++) {
    const targetId = targetIds[i];
    (0,dist/* invariant */.V)(targetIds.lastIndexOf(targetId) === i, 'Expected targetIds to be unique in the passed array.');
    const target = registry.getTarget(targetId);
    (0,dist/* invariant */.V)(target, 'Expected targetIds to be registered.');
  }
}
function removeNonMatchingTargetIds(targetIds, registry, draggedItemType) {
  // Remove those targetIds that don't match the targetType.  This
  // fixes shallow isOver which would only be non-shallow because of
  // non-matching targets.
  for (let i = targetIds.length - 1; i >= 0; i--) {
    const targetId = targetIds[i];
    const targetType = registry.getTargetType(targetId);
    if (!matchesType(targetType, draggedItemType)) {
      targetIds.splice(i, 1);
    }
  }
}
function hoverAllTargets(targetIds, monitor, registry) {
  // Finally call hover on all matching targets.
  targetIds.forEach(function (targetId) {
    const target = registry.getTarget(targetId);
    target.hover(monitor, targetId);
  });
}

//# sourceMappingURL=hover.js.map
;// ./node_modules/dnd-core/dist/actions/dragDrop/publishDragSource.js

function createPublishDragSource(manager) {
  return function publishDragSource() {
    const monitor = manager.getMonitor();
    if (monitor.isDragging()) {
      return {
        type: PUBLISH_DRAG_SOURCE
      };
    }
    return;
  };
}

//# sourceMappingURL=publishDragSource.js.map
;// ./node_modules/dnd-core/dist/actions/dragDrop/index.js






function createDragDropActions(manager) {
  return {
    beginDrag: createBeginDrag(manager),
    publishDragSource: createPublishDragSource(manager),
    hover: createHover(manager),
    drop: createDrop(manager),
    endDrag: createEndDrag(manager)
  };
}

//# sourceMappingURL=index.js.map
;// ./node_modules/dnd-core/dist/classes/DragDropManagerImpl.js

class DragDropManagerImpl {
  receiveBackend(backend) {
    this.backend = backend;
  }
  getMonitor() {
    return this.monitor;
  }
  getBackend() {
    return this.backend;
  }
  getRegistry() {
    return this.monitor.registry;
  }
  getActions() {
    /* eslint-disable-next-line @typescript-eslint/no-this-alias */const manager = this;
    const {
      dispatch
    } = this.store;
    function bindActionCreator(actionCreator) {
      return function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        const action = actionCreator.apply(manager, args);
        if (typeof action !== 'undefined') {
          dispatch(action);
        }
      };
    }
    const actions = createDragDropActions(this);
    return Object.keys(actions).reduce((boundActions, key) => {
      const action = actions[key];
      boundActions[key] = bindActionCreator(action);
      return boundActions;
    }, {});
  }
  dispatch(action) {
    this.store.dispatch(action);
  }
  constructor(store, monitor) {
    this.isSetUp = false;
    this.handleRefCountChange = () => {
      const shouldSetUp = this.store.getState().refCount > 0;
      if (this.backend) {
        if (shouldSetUp && !this.isSetUp) {
          this.backend.setup();
          this.isSetUp = true;
        } else if (!shouldSetUp && this.isSetUp) {
          this.backend.teardown();
          this.isSetUp = false;
        }
      }
    };
    this.store = store;
    this.monitor = monitor;
    store.subscribe(this.handleRefCountChange);
  }
}

//# sourceMappingURL=DragDropManagerImpl.js.map
;// ./node_modules/dnd-core/dist/utils/coords.js
/**
 * Coordinate addition
 * @param a The first coordinate
 * @param b The second coordinate
 */function add(a, b) {
  return {
    x: a.x + b.x,
    y: a.y + b.y
  };
}
/**
 * Coordinate subtraction
 * @param a The first coordinate
 * @param b The second coordinate
 */
function subtract(a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  };
}
/**
 * Returns the cartesian distance of the drag source component's position, based on its position
 * at the time when the current drag operation has started, and the movement difference.
 *
 * Returns null if no item is being dragged.
 *
 * @param state The offset state to compute from
 */
function getSourceClientOffset(state) {
  const {
    clientOffset,
    initialClientOffset,
    initialSourceClientOffset
  } = state;
  if (!clientOffset || !initialClientOffset || !initialSourceClientOffset) {
    return null;
  }
  return subtract(add(clientOffset, initialSourceClientOffset), initialClientOffset);
}
/**
 * Determines the x,y offset between the client offset and the initial client offset
 *
 * @param state The offset state to compute from
 */
function getDifferenceFromInitialOffset(state) {
  const {
    clientOffset,
    initialClientOffset
  } = state;
  if (!clientOffset || !initialClientOffset) {
    return null;
  }
  return subtract(clientOffset, initialClientOffset);
}

//# sourceMappingURL=coords.js.map
;// ./node_modules/dnd-core/dist/utils/dirtiness.js

const NONE = [];
const ALL = [];
NONE.__IS_NONE__ = true;
ALL.__IS_ALL__ = true;
/**
 * Determines if the given handler IDs are dirty or not.
 *
 * @param dirtyIds The set of dirty handler ids
 * @param handlerIds The set of handler ids to check
 */
function areDirty(dirtyIds, handlerIds) {
  if (dirtyIds === NONE) {
    return false;
  }
  if (dirtyIds === ALL || typeof handlerIds === 'undefined') {
    return true;
  }
  const commonIds = intersection(handlerIds, dirtyIds);
  return commonIds.length > 0;
}

//# sourceMappingURL=dirtiness.js.map
;// ./node_modules/dnd-core/dist/classes/DragDropMonitorImpl.js




class DragDropMonitorImpl {
  subscribeToStateChange(listener) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const {
      handlerIds
    } = options;
    (0,dist/* invariant */.V)(typeof listener === 'function', 'listener must be a function.');
    (0,dist/* invariant */.V)(typeof handlerIds === 'undefined' || Array.isArray(handlerIds), 'handlerIds, when specified, must be an array of strings.');
    let prevStateId = this.store.getState().stateId;
    const handleChange = () => {
      const state = this.store.getState();
      const currentStateId = state.stateId;
      try {
        const canSkipListener = currentStateId === prevStateId || currentStateId === prevStateId + 1 && !areDirty(state.dirtyHandlerIds, handlerIds);
        if (!canSkipListener) {
          listener();
        }
      } finally {
        prevStateId = currentStateId;
      }
    };
    return this.store.subscribe(handleChange);
  }
  subscribeToOffsetChange(listener) {
    (0,dist/* invariant */.V)(typeof listener === 'function', 'listener must be a function.');
    let previousState = this.store.getState().dragOffset;
    const handleChange = () => {
      const nextState = this.store.getState().dragOffset;
      if (nextState === previousState) {
        return;
      }
      previousState = nextState;
      listener();
    };
    return this.store.subscribe(handleChange);
  }
  canDragSource(sourceId) {
    if (!sourceId) {
      return false;
    }
    const source = this.registry.getSource(sourceId);
    (0,dist/* invariant */.V)(source, "Expected to find a valid source. sourceId=".concat(sourceId));
    if (this.isDragging()) {
      return false;
    }
    return source.canDrag(this, sourceId);
  }
  canDropOnTarget(targetId) {
    // undefined on initial render
    if (!targetId) {
      return false;
    }
    const target = this.registry.getTarget(targetId);
    (0,dist/* invariant */.V)(target, "Expected to find a valid target. targetId=".concat(targetId));
    if (!this.isDragging() || this.didDrop()) {
      return false;
    }
    const targetType = this.registry.getTargetType(targetId);
    const draggedItemType = this.getItemType();
    return matchesType(targetType, draggedItemType) && target.canDrop(this, targetId);
  }
  isDragging() {
    return Boolean(this.getItemType());
  }
  isDraggingSource(sourceId) {
    // undefined on initial render
    if (!sourceId) {
      return false;
    }
    const source = this.registry.getSource(sourceId, true);
    (0,dist/* invariant */.V)(source, "Expected to find a valid source. sourceId=".concat(sourceId));
    if (!this.isDragging() || !this.isSourcePublic()) {
      return false;
    }
    const sourceType = this.registry.getSourceType(sourceId);
    const draggedItemType = this.getItemType();
    if (sourceType !== draggedItemType) {
      return false;
    }
    return source.isDragging(this, sourceId);
  }
  isOverTarget(targetId) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      shallow: false
    };
    // undefined on initial render
    if (!targetId) {
      return false;
    }
    const {
      shallow
    } = options;
    if (!this.isDragging()) {
      return false;
    }
    const targetType = this.registry.getTargetType(targetId);
    const draggedItemType = this.getItemType();
    if (draggedItemType && !matchesType(targetType, draggedItemType)) {
      return false;
    }
    const targetIds = this.getTargetIds();
    if (!targetIds.length) {
      return false;
    }
    const index = targetIds.indexOf(targetId);
    if (shallow) {
      return index === targetIds.length - 1;
    } else {
      return index > -1;
    }
  }
  getItemType() {
    return this.store.getState().dragOperation.itemType;
  }
  getItem() {
    return this.store.getState().dragOperation.item;
  }
  getSourceId() {
    return this.store.getState().dragOperation.sourceId;
  }
  getTargetIds() {
    return this.store.getState().dragOperation.targetIds;
  }
  getDropResult() {
    return this.store.getState().dragOperation.dropResult;
  }
  didDrop() {
    return this.store.getState().dragOperation.didDrop;
  }
  isSourcePublic() {
    return Boolean(this.store.getState().dragOperation.isSourcePublic);
  }
  getInitialClientOffset() {
    return this.store.getState().dragOffset.initialClientOffset;
  }
  getInitialSourceClientOffset() {
    return this.store.getState().dragOffset.initialSourceClientOffset;
  }
  getClientOffset() {
    return this.store.getState().dragOffset.clientOffset;
  }
  getSourceClientOffset() {
    return getSourceClientOffset(this.store.getState().dragOffset);
  }
  getDifferenceFromInitialOffset() {
    return getDifferenceFromInitialOffset(this.store.getState().dragOffset);
  }
  constructor(store, registry) {
    this.store = store;
    this.registry = registry;
  }
}

//# sourceMappingURL=DragDropMonitorImpl.js.map
;// ./node_modules/@react-dnd/asap/dist/makeRequestCall.js
// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
// have WebKitMutationObserver but not un-prefixed MutationObserver.
// Must use `global` or `self` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.
/* globals self */const scope = typeof global !== 'undefined' ? global : self;
const BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;
function makeRequestCallFromTimer(callback) {
  return function requestCall() {
    // We dispatch a timeout with a specified delay of 0 for engines that
    // can reliably accommodate that request. This will usually be snapped
    // to a 4 milisecond delay, but once we're flushing, there's no delay
    // between events.
    const timeoutHandle = setTimeout(handleTimer, 0);
    // However, since this timer gets frequently dropped in Firefox
    // workers, we enlist an interval handle that will try to fire
    // an event 20 times per second until it succeeds.
    const intervalHandle = setInterval(handleTimer, 50);
    function handleTimer() {
      // Whichever timer succeeds will cancel both timers and
      // execute the callback.
      clearTimeout(timeoutHandle);
      clearInterval(intervalHandle);
      callback();
    }
  };
}
// To request a high priority event, we induce a mutation observer by toggling
// the text of a text node between "1" and "-1".
function makeRequestCallFromMutationObserver(callback) {
  let toggle = 1;
  const observer = new BrowserMutationObserver(callback);
  const node = document.createTextNode('');
  observer.observe(node, {
    characterData: true
  });
  return function requestCall() {
    toggle = -toggle;
    node.data = toggle;
  };
}
const makeRequestCall = typeof BrowserMutationObserver === 'function' ?
// reliably everywhere they are implemented.
// They are implemented in all modern browsers.
//
// - Android 4-4.3
// - Chrome 26-34
// - Firefox 14-29
// - Internet Explorer 11
// - iPad Safari 6-7.1
// - iPhone Safari 7-7.1
// - Safari 6-7
makeRequestCallFromMutationObserver :
// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
// 11-12, and in web workers in many engines.
// Although message channels yield to any queued rendering and IO tasks, they
// would be better than imposing the 4ms delay of timers.
// However, they do not work reliably in Internet Explorer or Safari.
// Internet Explorer 10 is the only browser that has setImmediate but does
// not have MutationObservers.
// Although setImmediate yields to the browser's renderer, it would be
// preferrable to falling back to setTimeout since it does not have
// the minimum 4ms penalty.
// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
// Desktop to a lesser extent) that renders both setImmediate and
// MessageChannel useless for the purposes of ASAP.
// https://github.com/kriskowal/q/issues/396
// Timers are implemented universally.
// We fall back to timers in workers in most engines, and in foreground
// contexts in the following browsers.
// However, note that even this simple case requires nuances to operate in a
// broad spectrum of browsers.
//
// - Firefox 3-13
// - Internet Explorer 6-9
// - iPad Safari 4.3
// - Lynx 2.8.7
makeRequestCallFromTimer;

//# sourceMappingURL=makeRequestCall.js.map
;// ./node_modules/@react-dnd/asap/dist/AsapQueue.js
/* eslint-disable no-restricted-globals, @typescript-eslint/ban-ts-comment, @typescript-eslint/no-unused-vars, @typescript-eslint/no-non-null-assertion */
class AsapQueue {
  // Use the fastest means possible to execute a task in its own turn, with
  // priority over other events including IO, animation, reflow, and redraw
  // events in browsers.
  //
  // An exception thrown by a task will permanently interrupt the processing of
  // subsequent tasks. The higher level `asap` function ensures that if an
  // exception is thrown by a task, that the task queue will continue flushing as
  // soon as possible, but if you use `rawAsap` directly, you are responsible to
  // either ensure that no exceptions are thrown from your task, or to manually
  // call `rawAsap.requestFlush` if an exception is thrown.
  enqueueTask(task) {
    const {
      queue: q,
      requestFlush
    } = this;
    if (!q.length) {
      requestFlush();
      this.flushing = true;
    }
    // Equivalent to push, but avoids a function call.
    q[q.length] = task;
  }
  constructor() {
    this.queue = [];
    // We queue errors to ensure they are thrown in right order (FIFO).
    // Array-as-queue is good enough here, since we are just dealing with exceptions.
    this.pendingErrors = [];
    // Once a flush has been requested, no further calls to `requestFlush` are
    // necessary until the next `flush` completes.
    // @ts-ignore
    this.flushing = false;
    // The position of the next task to execute in the task queue. This is
    // preserved between calls to `flush` so that it can be resumed if
    // a task throws an exception.
    this.index = 0;
    // If a task schedules additional tasks recursively, the task queue can grow
    // unbounded. To prevent memory exhaustion, the task queue will periodically
    // truncate already-completed tasks.
    this.capacity = 1024;
    // The flush function processes all tasks that have been scheduled with
    // `rawAsap` unless and until one of those tasks throws an exception.
    // If a task throws an exception, `flush` ensures that its state will remain
    // consistent and will resume where it left off when called again.
    // However, `flush` does not make any arrangements to be called again if an
    // exception is thrown.
    this.flush = () => {
      const {
        queue: q
      } = this;
      while (this.index < q.length) {
        const currentIndex = this.index;
        // Advance the index before calling the task. This ensures that we will
        // begin flushing on the next task the task throws an error.
        this.index++;
        q[currentIndex].call();
        // Prevent leaking memory for long chains of recursive calls to `asap`.
        // If we call `asap` within tasks scheduled by `asap`, the queue will
        // grow, but to avoid an O(n) walk for every task we execute, we don't
        // shift tasks off the queue after they have been executed.
        // Instead, we periodically shift 1024 tasks off the queue.
        if (this.index > this.capacity) {
          // Manually shift all values starting at the index back to the
          // beginning of the queue.
          for (let scan = 0, newLength = q.length - this.index; scan < newLength; scan++) {
            q[scan] = q[scan + this.index];
          }
          q.length -= this.index;
          this.index = 0;
        }
      }
      q.length = 0;
      this.index = 0;
      this.flushing = false;
    };
    // In a web browser, exceptions are not fatal. However, to avoid
    // slowing down the queue of pending tasks, we rethrow the error in a
    // lower priority turn.
    this.registerPendingError = err => {
      this.pendingErrors.push(err);
      this.requestErrorThrow();
    };
    // `requestFlush` requests that the high priority event queue be flushed as
    // soon as possible.
    // This is useful to prevent an error thrown in a task from stalling the event
    // queue if the exception handled by Node.js’s
    // `process.on("uncaughtException")` or by a domain.
    // `requestFlush` is implemented using a strategy based on data collected from
    // every available SauceLabs Selenium web driver worker at time of writing.
    // https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593
    this.requestFlush = makeRequestCall(this.flush);
    this.requestErrorThrow = makeRequestCallFromTimer(() => {
      // Throw first error
      if (this.pendingErrors.length) {
        throw this.pendingErrors.shift();
      }
    });
  }
} // The message channel technique was discovered by Malte Ubl and was the
// original foundation for this library.
// http://www.nonblocking.io/2011/06/windownexttick.html
// Safari 6.0.5 (at least) intermittently fails to create message ports on a
// page's first load. Thankfully, this version of Safari supports
// MutationObservers, so we don't need to fall back in that case.
// function makeRequestCallFromMessageChannel(callback) {
//     var channel = new MessageChannel();
//     channel.port1.onmessage = callback;
//     return function requestCall() {
//         channel.port2.postMessage(0);
//     };
// }
// For reasons explained above, we are also unable to use `setImmediate`
// under any circumstances.
// Even if we were, there is another bug in Internet Explorer 10.
// It is not sufficient to assign `setImmediate` to `requestFlush` because
// `setImmediate` must be called *by name* and therefore must be wrapped in a
// closure.
// Never forget.
// function makeRequestCallFromSetImmediate(callback) {
//     return function requestCall() {
//         setImmediate(callback);
//     };
// }
// Safari 6.0 has a problem where timers will get lost while the user is
// scrolling. This problem does not impact ASAP because Safari 6.0 supports
// mutation observers, so that implementation is used instead.
// However, if we ever elect to use timers in Safari, the prevalent work-around
// is to add a scroll event listener that calls for a flush.
// `setTimeout` does not call the passed callback if the delay is less than
// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
// even then.
// This is for `asap.js` only.
// Its name will be periodically randomized to break any code that depends on
// // its existence.
// rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer
// ASAP was originally a nextTick shim included in Q. This was factored out
// into this ASAP package. It was later adapted to RSVP which made further
// amendments. These decisions, particularly to marginalize MessageChannel and
// to capture the MutationObserver implementation in a closure, were integrated
// back into ASAP proper.
// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

//# sourceMappingURL=AsapQueue.js.map
;// ./node_modules/@react-dnd/asap/dist/RawTask.js
// `call`, just like a function.
class RawTask {
  call() {
    try {
      this.task && this.task();
    } catch (error) {
      this.onError(error);
    } finally {
      this.task = null;
      this.release(this);
    }
  }
  constructor(onError, release) {
    this.onError = onError;
    this.release = release;
    this.task = null;
  }
}

//# sourceMappingURL=RawTask.js.map
;// ./node_modules/@react-dnd/asap/dist/TaskFactory.js

class TaskFactory {
  create(task) {
    const tasks = this.freeTasks;
    const t1 = tasks.length ? tasks.pop() : new RawTask(this.onError, t => tasks[tasks.length] = t);
    t1.task = task;
    return t1;
  }
  constructor(onError) {
    this.onError = onError;
    this.freeTasks = [];
  }
}

//# sourceMappingURL=TaskFactory.js.map
;// ./node_modules/@react-dnd/asap/dist/asap.js


const asapQueue = new AsapQueue();
const taskFactory = new TaskFactory(asapQueue.registerPendingError);
/**
 * Calls a task as soon as possible after returning, in its own event, with priority
 * over other events like animation, reflow, and repaint. An error thrown from an
 * event will not interrupt, nor even substantially slow down the processing of
 * other events, but will be rather postponed to a lower priority event.
 * @param {{call}} task A callable object, typically a function that takes no
 * arguments.
 */
function asap(task) {
  asapQueue.enqueueTask(taskFactory.create(task));
}

//# sourceMappingURL=asap.js.map
;// ./node_modules/@react-dnd/asap/dist/index.js





//# sourceMappingURL=index.js.map
;// ./node_modules/dnd-core/dist/actions/registry.js
const ADD_SOURCE = 'dnd-core/ADD_SOURCE';
const ADD_TARGET = 'dnd-core/ADD_TARGET';
const REMOVE_SOURCE = 'dnd-core/REMOVE_SOURCE';
const REMOVE_TARGET = 'dnd-core/REMOVE_TARGET';
function addSource(sourceId) {
  return {
    type: ADD_SOURCE,
    payload: {
      sourceId
    }
  };
}
function addTarget(targetId) {
  return {
    type: ADD_TARGET,
    payload: {
      targetId
    }
  };
}
function removeSource(sourceId) {
  return {
    type: REMOVE_SOURCE,
    payload: {
      sourceId
    }
  };
}
function removeTarget(targetId) {
  return {
    type: REMOVE_TARGET,
    payload: {
      targetId
    }
  };
}

//# sourceMappingURL=registry.js.map
;// ./node_modules/dnd-core/dist/contracts.js

function validateSourceContract(source) {
  (0,dist/* invariant */.V)(typeof source.canDrag === 'function', 'Expected canDrag to be a function.');
  (0,dist/* invariant */.V)(typeof source.beginDrag === 'function', 'Expected beginDrag to be a function.');
  (0,dist/* invariant */.V)(typeof source.endDrag === 'function', 'Expected endDrag to be a function.');
}
function validateTargetContract(target) {
  (0,dist/* invariant */.V)(typeof target.canDrop === 'function', 'Expected canDrop to be a function.');
  (0,dist/* invariant */.V)(typeof target.hover === 'function', 'Expected hover to be a function.');
  (0,dist/* invariant */.V)(typeof target.drop === 'function', 'Expected beginDrag to be a function.');
}
function validateType(type, allowArray) {
  if (allowArray && Array.isArray(type)) {
    type.forEach(t => validateType(t, false));
    return;
  }
  (0,dist/* invariant */.V)(typeof type === 'string' || typeof type === 'symbol', allowArray ? 'Type can only be a string, a symbol, or an array of either.' : 'Type can only be a string or a symbol.');
}

//# sourceMappingURL=contracts.js.map
;// ./node_modules/dnd-core/dist/interfaces.js
var HandlerRole;
(function (HandlerRole) {
  HandlerRole["SOURCE"] = "SOURCE";
  HandlerRole["TARGET"] = "TARGET";
})(HandlerRole || (HandlerRole = {}));

//# sourceMappingURL=interfaces.js.map
;// ./node_modules/dnd-core/dist/utils/getNextUniqueId.js
let nextUniqueId = 0;
function getNextUniqueId() {
  return nextUniqueId++;
}

//# sourceMappingURL=getNextUniqueId.js.map
;// ./node_modules/dnd-core/dist/classes/HandlerRegistryImpl.js






function getNextHandlerId(role) {
  const id = getNextUniqueId().toString();
  switch (role) {
    case HandlerRole.SOURCE:
      return "S".concat(id);
    case HandlerRole.TARGET:
      return "T".concat(id);
    default:
      throw new Error("Unknown Handler Role: ".concat(role));
  }
}
function parseRoleFromHandlerId(handlerId) {
  switch (handlerId[0]) {
    case 'S':
      return HandlerRole.SOURCE;
    case 'T':
      return HandlerRole.TARGET;
    default:
      throw new Error("Cannot parse handler ID: ".concat(handlerId));
  }
}
function mapContainsValue(map, searchValue) {
  const entries = map.entries();
  let isDone = false;
  do {
    const {
      done,
      value: [, value]
    } = entries.next();
    if (value === searchValue) {
      return true;
    }
    isDone = !!done;
  } while (!isDone);
  return false;
}
class HandlerRegistryImpl {
  addSource(type, source) {
    validateType(type);
    validateSourceContract(source);
    const sourceId = this.addHandler(HandlerRole.SOURCE, type, source);
    this.store.dispatch(addSource(sourceId));
    return sourceId;
  }
  addTarget(type, target) {
    validateType(type, true);
    validateTargetContract(target);
    const targetId = this.addHandler(HandlerRole.TARGET, type, target);
    this.store.dispatch(addTarget(targetId));
    return targetId;
  }
  containsHandler(handler) {
    return mapContainsValue(this.dragSources, handler) || mapContainsValue(this.dropTargets, handler);
  }
  getSource(sourceId) {
    let includePinned = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    (0,dist/* invariant */.V)(this.isSourceId(sourceId), 'Expected a valid source ID.');
    const isPinned = includePinned && sourceId === this.pinnedSourceId;
    const source = isPinned ? this.pinnedSource : this.dragSources.get(sourceId);
    return source;
  }
  getTarget(targetId) {
    (0,dist/* invariant */.V)(this.isTargetId(targetId), 'Expected a valid target ID.');
    return this.dropTargets.get(targetId);
  }
  getSourceType(sourceId) {
    (0,dist/* invariant */.V)(this.isSourceId(sourceId), 'Expected a valid source ID.');
    return this.types.get(sourceId);
  }
  getTargetType(targetId) {
    (0,dist/* invariant */.V)(this.isTargetId(targetId), 'Expected a valid target ID.');
    return this.types.get(targetId);
  }
  isSourceId(handlerId) {
    const role = parseRoleFromHandlerId(handlerId);
    return role === HandlerRole.SOURCE;
  }
  isTargetId(handlerId) {
    const role = parseRoleFromHandlerId(handlerId);
    return role === HandlerRole.TARGET;
  }
  removeSource(sourceId) {
    (0,dist/* invariant */.V)(this.getSource(sourceId), 'Expected an existing source.');
    this.store.dispatch(removeSource(sourceId));
    asap(() => {
      this.dragSources.delete(sourceId);
      this.types.delete(sourceId);
    });
  }
  removeTarget(targetId) {
    (0,dist/* invariant */.V)(this.getTarget(targetId), 'Expected an existing target.');
    this.store.dispatch(removeTarget(targetId));
    this.dropTargets.delete(targetId);
    this.types.delete(targetId);
  }
  pinSource(sourceId) {
    const source = this.getSource(sourceId);
    (0,dist/* invariant */.V)(source, 'Expected an existing source.');
    this.pinnedSourceId = sourceId;
    this.pinnedSource = source;
  }
  unpinSource() {
    (0,dist/* invariant */.V)(this.pinnedSource, 'No source is pinned at the time.');
    this.pinnedSourceId = null;
    this.pinnedSource = null;
  }
  addHandler(role, type, handler) {
    const id = getNextHandlerId(role);
    this.types.set(id, type);
    if (role === HandlerRole.SOURCE) {
      this.dragSources.set(id, handler);
    } else if (role === HandlerRole.TARGET) {
      this.dropTargets.set(id, handler);
    }
    return id;
  }
  constructor(store) {
    this.types = new Map();
    this.dragSources = new Map();
    this.dropTargets = new Map();
    this.pinnedSourceId = null;
    this.pinnedSource = null;
    this.store = store;
  }
}

//# sourceMappingURL=HandlerRegistryImpl.js.map
;// ./node_modules/dnd-core/dist/utils/equality.js
const strictEquality = (a, b) => a === b;
/**
 * Determine if two cartesian coordinate offsets are equal
 * @param offsetA
 * @param offsetB
 */
function areCoordsEqual(offsetA, offsetB) {
  if (!offsetA && !offsetB) {
    return true;
  } else if (!offsetA || !offsetB) {
    return false;
  } else {
    return offsetA.x === offsetB.x && offsetA.y === offsetB.y;
  }
}
/**
 * Determines if two arrays of items are equal
 * @param a The first array of items
 * @param b The second array of items
 */
function areArraysEqual(a, b) {
  let isEqual = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : strictEquality;
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; ++i) {
    if (!isEqual(a[i], b[i])) {
      return false;
    }
  }
  return true;
}

//# sourceMappingURL=equality.js.map
;// ./node_modules/dnd-core/dist/reducers/dirtyHandlerIds.js





function reduce() {
  let _state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : NONE;
  let action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case HOVER:
      break;
    case ADD_SOURCE:
    case ADD_TARGET:
    case REMOVE_TARGET:
    case REMOVE_SOURCE:
      return NONE;
    case BEGIN_DRAG:
    case PUBLISH_DRAG_SOURCE:
    case END_DRAG:
    case DROP:
    default:
      return ALL;
  }
  const {
    targetIds = [],
    prevTargetIds = []
  } = action.payload;
  const result = xor(targetIds, prevTargetIds);
  const didChange = result.length > 0 || !areArraysEqual(targetIds, prevTargetIds);
  if (!didChange) {
    return NONE;
  }
  // Check the target ids at the innermost position. If they are valid, add them
  // to the result
  const prevInnermostTargetId = prevTargetIds[prevTargetIds.length - 1];
  const innermostTargetId = targetIds[targetIds.length - 1];
  if (prevInnermostTargetId !== innermostTargetId) {
    if (prevInnermostTargetId) {
      result.push(prevInnermostTargetId);
    }
    if (innermostTargetId) {
      result.push(innermostTargetId);
    }
  }
  return result;
}

//# sourceMappingURL=dirtyHandlerIds.js.map
;// ./node_modules/dnd-core/dist/reducers/dragOffset.js
function dragOffset_defineProperty(obj, key, value) {
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
function dragOffset_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function (key) {
      dragOffset_defineProperty(target, key, source[key]);
    });
  }
  return target;
}


const initialState = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null
};
function dragOffset_reduce() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  let action = arguments.length > 1 ? arguments[1] : undefined;
  const {
    payload
  } = action;
  switch (action.type) {
    case INIT_COORDS:
    case BEGIN_DRAG:
      return {
        initialSourceClientOffset: payload.sourceClientOffset,
        initialClientOffset: payload.clientOffset,
        clientOffset: payload.clientOffset
      };
    case HOVER:
      if (areCoordsEqual(state.clientOffset, payload.clientOffset)) {
        return state;
      }
      return dragOffset_objectSpread({}, state, {
        clientOffset: payload.clientOffset
      });
    case END_DRAG:
    case DROP:
      return initialState;
    default:
      return state;
  }
}

//# sourceMappingURL=dragOffset.js.map
;// ./node_modules/dnd-core/dist/reducers/dragOperation.js
function dragOperation_defineProperty(obj, key, value) {
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
function dragOperation_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function (key) {
      dragOperation_defineProperty(target, key, source[key]);
    });
  }
  return target;
}



const dragOperation_initialState = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: false,
  isSourcePublic: null
};
function dragOperation_reduce() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : dragOperation_initialState;
  let action = arguments.length > 1 ? arguments[1] : undefined;
  const {
    payload
  } = action;
  switch (action.type) {
    case BEGIN_DRAG:
      return dragOperation_objectSpread({}, state, {
        itemType: payload.itemType,
        item: payload.item,
        sourceId: payload.sourceId,
        isSourcePublic: payload.isSourcePublic,
        dropResult: null,
        didDrop: false
      });
    case PUBLISH_DRAG_SOURCE:
      return dragOperation_objectSpread({}, state, {
        isSourcePublic: true
      });
    case HOVER:
      return dragOperation_objectSpread({}, state, {
        targetIds: payload.targetIds
      });
    case REMOVE_TARGET:
      if (state.targetIds.indexOf(payload.targetId) === -1) {
        return state;
      }
      return dragOperation_objectSpread({}, state, {
        targetIds: without(state.targetIds, payload.targetId)
      });
    case DROP:
      return dragOperation_objectSpread({}, state, {
        dropResult: payload.dropResult,
        didDrop: true,
        targetIds: []
      });
    case END_DRAG:
      return dragOperation_objectSpread({}, state, {
        itemType: null,
        item: null,
        sourceId: null,
        dropResult: null,
        didDrop: false,
        isSourcePublic: null,
        targetIds: []
      });
    default:
      return state;
  }
}

//# sourceMappingURL=dragOperation.js.map
;// ./node_modules/dnd-core/dist/reducers/refCount.js

function refCount_reduce() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  let action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case ADD_SOURCE:
    case ADD_TARGET:
      return state + 1;
    case REMOVE_SOURCE:
    case REMOVE_TARGET:
      return state - 1;
    default:
      return state;
  }
}

//# sourceMappingURL=refCount.js.map
;// ./node_modules/dnd-core/dist/reducers/stateId.js
function stateId_reduce() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return state + 1;
}

//# sourceMappingURL=stateId.js.map
;// ./node_modules/dnd-core/dist/reducers/index.js
function reducers_defineProperty(obj, key, value) {
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
function reducers_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function (key) {
      reducers_defineProperty(target, key, source[key]);
    });
  }
  return target;
}






function reducers_reduce() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let action = arguments.length > 1 ? arguments[1] : undefined;
  return {
    dirtyHandlerIds: reduce(state.dirtyHandlerIds, {
      type: action.type,
      payload: reducers_objectSpread({}, action.payload, {
        prevTargetIds: get(state, 'dragOperation.targetIds', [])
      })
    }),
    dragOffset: dragOffset_reduce(state.dragOffset, action),
    refCount: refCount_reduce(state.refCount, action),
    dragOperation: dragOperation_reduce(state.dragOperation, action),
    stateId: stateId_reduce(state.stateId)
  };
}

//# sourceMappingURL=index.js.map
;// ./node_modules/dnd-core/dist/createDragDropManager.js





function createDragDropManager(backendFactory) {
  let globalContext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  let backendOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  let debugMode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  const store = makeStoreInstance(debugMode);
  const monitor = new DragDropMonitorImpl(store, new HandlerRegistryImpl(store));
  const manager = new DragDropManagerImpl(store, monitor);
  const backend = backendFactory(manager, globalContext, backendOptions);
  manager.receiveBackend(backend);
  return manager;
}
function makeStoreInstance(debugMode) {
  // TODO: if we ever make a react-native version of this,
  // we'll need to consider how to pull off dev-tooling
  const reduxDevTools = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__;
  return (0,redux/* createStore */.y$)(reducers_reduce, debugMode && reduxDevTools && reduxDevTools({
    name: 'dnd-core',
    instanceId: 'dnd-core'
  }));
}

//# sourceMappingURL=createDragDropManager.js.map
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/core/DndContext.js
var DndContext = __webpack_require__(7376);
;// ./node_modules/react-dnd/dist/core/DndProvider.js
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




let refCount = 0;
const INSTANCE_SYM = Symbol.for('__REACT_DND_CONTEXT_INSTANCE__');
var DndProvider = /*#__PURE__*/(0,react.memo)(function DndProvider(_param) {
  var {
      children
    } = _param,
    props = _objectWithoutProperties(_param, ["children"]);
  const [manager, isGlobalInstance] = getDndContextValue(props) // memoized from props
  ;
  /**
  * If the global context was used to store the DND context
  * then where theres no more references to it we should
  * clean it up to avoid memory leaks
  */
  (0,react.useEffect)(() => {
    if (isGlobalInstance) {
      const context = getGlobalContext();
      ++refCount;
      return () => {
        if (--refCount === 0) {
          context[INSTANCE_SYM] = null;
        }
      };
    }
    return;
  }, []);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(DndContext/* DndContext */.M.Provider, {
    value: manager,
    children: children
  });
});
/**
 * A React component that provides the React-DnD context
 */

function getDndContextValue(props) {
  if ('manager' in props) {
    const manager = {
      dragDropManager: props.manager
    };
    return [manager, false];
  }
  const manager = createSingletonDndContext(props.backend, props.context, props.options, props.debugMode);
  const isGlobalInstance = !props.context;
  return [manager, isGlobalInstance];
}
function createSingletonDndContext(backend) {
  let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getGlobalContext();
  let options = arguments.length > 2 ? arguments[2] : undefined;
  let debugMode = arguments.length > 3 ? arguments[3] : undefined;
  const ctx = context;
  if (!ctx[INSTANCE_SYM]) {
    ctx[INSTANCE_SYM] = {
      dragDropManager: createDragDropManager(backend, context, options, debugMode)
    };
  }
  return ctx[INSTANCE_SYM];
}
function getGlobalContext() {
  return typeof global !== 'undefined' ? global : window;
}

//# sourceMappingURL=DndProvider.js.map

/***/ }),

/***/ 9713:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  j: () => (/* binding */ useCollectedProps)
});

// EXTERNAL MODULE: ./node_modules/fast-deep-equal/index.js
var fast_deep_equal = __webpack_require__(45355);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/hooks/useIsomorphicLayoutEffect.js
var useIsomorphicLayoutEffect = __webpack_require__(32639);
;// ./node_modules/react-dnd/dist/hooks/useCollector.js



/**
 *
 * @param monitor The monitor to collect state from
 * @param collect The collecting function
 * @param onUpdate A method to invoke when updates occur
 */
function useCollector(monitor, collect, onUpdate) {
  const [collected, setCollected] = (0,react.useState)(() => collect(monitor));
  const updateCollected = (0,react.useCallback)(() => {
    const nextValue = collect(monitor);
    // This needs to be a deep-equality check because some monitor-collected values
    // include XYCoord objects that may be equivalent, but do not have instance equality.
    if (!fast_deep_equal(collected, nextValue)) {
      setCollected(nextValue);
      if (onUpdate) {
        onUpdate();
      }
    }
  }, [collected, monitor, onUpdate]);
  // update the collected properties after react renders.
  // Note that the "Dustbin Stress Test" fails if this is not
  // done when the component updates
  (0,useIsomorphicLayoutEffect/* useIsomorphicLayoutEffect */.E)(updateCollected);
  return [collected, updateCollected];
}

//# sourceMappingURL=useCollector.js.map
;// ./node_modules/react-dnd/dist/hooks/useMonitorOutput.js


function useMonitorOutput(monitor, collect, onCollect) {
  const [collected, updateCollected] = useCollector(monitor, collect, onCollect);
  (0,useIsomorphicLayoutEffect/* useIsomorphicLayoutEffect */.E)(function subscribeToMonitorStateChange() {
    const handlerId = monitor.getHandlerId();
    if (handlerId == null) {
      return;
    }
    return monitor.subscribeToStateChange(updateCollected, {
      handlerIds: [handlerId]
    });
  }, [monitor, updateCollected]);
  return collected;
}

//# sourceMappingURL=useMonitorOutput.js.map
;// ./node_modules/react-dnd/dist/hooks/useCollectedProps.js

function useCollectedProps(collector, monitor, connector) {
  return useMonitorOutput(monitor, collector || (() => ({})), () => connector.reconnect());
}

//# sourceMappingURL=useCollectedProps.js.map

/***/ }),

/***/ 76735:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ useDragDropManager)
/* harmony export */ });
/* harmony import */ var _react_dnd_invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53268);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9950);
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7376);



/**
 * A hook to retrieve the DragDropManager from Context
 */
function useDragDropManager() {
  const {
    dragDropManager
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_core_index_js__WEBPACK_IMPORTED_MODULE_1__/* .DndContext */ .M);
  (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_2__/* .invariant */ .V)(dragDropManager != null, 'Expected drag drop context');
  return dragDropManager;
}

//# sourceMappingURL=useDragDropManager.js.map

/***/ }),

/***/ 65325:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  i: () => (/* binding */ useDrag)
});

// EXTERNAL MODULE: ./node_modules/@react-dnd/invariant/dist/index.js
var dist = __webpack_require__(53268);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/hooks/useCollectedProps.js + 2 modules
var useCollectedProps = __webpack_require__(9713);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/hooks/useOptionalFactory.js
var useOptionalFactory = __webpack_require__(17195);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
;// ./node_modules/react-dnd/dist/hooks/useDrag/connectors.js

function useConnectDragSource(connector) {
  return (0,react.useMemo)(() => connector.hooks.dragSource(), [connector]);
}
function useConnectDragPreview(connector) {
  return (0,react.useMemo)(() => connector.hooks.dragPreview(), [connector]);
}

//# sourceMappingURL=connectors.js.map
// EXTERNAL MODULE: ./node_modules/@react-dnd/shallowequal/dist/index.js
var shallowequal_dist = __webpack_require__(70246);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/internals/isRef.js
var isRef = __webpack_require__(32021);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/internals/wrapConnectorHooks.js
var wrapConnectorHooks = __webpack_require__(26827);
;// ./node_modules/react-dnd/dist/internals/SourceConnector.js



class SourceConnector {
  receiveHandlerId(newHandlerId) {
    if (this.handlerId === newHandlerId) {
      return;
    }
    this.handlerId = newHandlerId;
    this.reconnect();
  }
  get connectTarget() {
    return this.dragSource;
  }
  get dragSourceOptions() {
    return this.dragSourceOptionsInternal;
  }
  set dragSourceOptions(options) {
    this.dragSourceOptionsInternal = options;
  }
  get dragPreviewOptions() {
    return this.dragPreviewOptionsInternal;
  }
  set dragPreviewOptions(options) {
    this.dragPreviewOptionsInternal = options;
  }
  reconnect() {
    const didChange = this.reconnectDragSource();
    this.reconnectDragPreview(didChange);
  }
  reconnectDragSource() {
    const dragSource = this.dragSource;
    // if nothing has changed then don't resubscribe
    const didChange = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
    if (didChange) {
      this.disconnectDragSource();
    }
    if (!this.handlerId) {
      return didChange;
    }
    if (!dragSource) {
      this.lastConnectedDragSource = dragSource;
      return didChange;
    }
    if (didChange) {
      this.lastConnectedHandlerId = this.handlerId;
      this.lastConnectedDragSource = dragSource;
      this.lastConnectedDragSourceOptions = this.dragSourceOptions;
      this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, dragSource, this.dragSourceOptions);
    }
    return didChange;
  }
  reconnectDragPreview() {
    let forceDidChange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    const dragPreview = this.dragPreview;
    // if nothing has changed then don't resubscribe
    const didChange = forceDidChange || this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
    if (didChange) {
      this.disconnectDragPreview();
    }
    if (!this.handlerId) {
      return;
    }
    if (!dragPreview) {
      this.lastConnectedDragPreview = dragPreview;
      return;
    }
    if (didChange) {
      this.lastConnectedHandlerId = this.handlerId;
      this.lastConnectedDragPreview = dragPreview;
      this.lastConnectedDragPreviewOptions = this.dragPreviewOptions;
      this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, dragPreview, this.dragPreviewOptions);
    }
  }
  didHandlerIdChange() {
    return this.lastConnectedHandlerId !== this.handlerId;
  }
  didConnectedDragSourceChange() {
    return this.lastConnectedDragSource !== this.dragSource;
  }
  didConnectedDragPreviewChange() {
    return this.lastConnectedDragPreview !== this.dragPreview;
  }
  didDragSourceOptionsChange() {
    return !(0,shallowequal_dist/* shallowEqual */.b)(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
  }
  didDragPreviewOptionsChange() {
    return !(0,shallowequal_dist/* shallowEqual */.b)(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
  }
  disconnectDragSource() {
    if (this.dragSourceUnsubscribe) {
      this.dragSourceUnsubscribe();
      this.dragSourceUnsubscribe = undefined;
    }
  }
  disconnectDragPreview() {
    if (this.dragPreviewUnsubscribe) {
      this.dragPreviewUnsubscribe();
      this.dragPreviewUnsubscribe = undefined;
      this.dragPreviewNode = null;
      this.dragPreviewRef = null;
    }
  }
  get dragSource() {
    return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current;
  }
  get dragPreview() {
    return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current;
  }
  clearDragSource() {
    this.dragSourceNode = null;
    this.dragSourceRef = null;
  }
  clearDragPreview() {
    this.dragPreviewNode = null;
    this.dragPreviewRef = null;
  }
  constructor(backend) {
    this.hooks = (0,wrapConnectorHooks/* wrapConnectorHooks */.i)({
      dragSource: (node, options) => {
        this.clearDragSource();
        this.dragSourceOptions = options || null;
        if ((0,isRef/* isRef */.i)(node)) {
          this.dragSourceRef = node;
        } else {
          this.dragSourceNode = node;
        }
        this.reconnectDragSource();
      },
      dragPreview: (node, options) => {
        this.clearDragPreview();
        this.dragPreviewOptions = options || null;
        if ((0,isRef/* isRef */.i)(node)) {
          this.dragPreviewRef = node;
        } else {
          this.dragPreviewNode = node;
        }
        this.reconnectDragPreview();
      }
    });
    this.handlerId = null;
    // The drop target may either be attached via ref or connect function
    this.dragSourceRef = null;
    this.dragSourceOptionsInternal = null;
    // The drag preview may either be attached via ref or connect function
    this.dragPreviewRef = null;
    this.dragPreviewOptionsInternal = null;
    this.lastConnectedHandlerId = null;
    this.lastConnectedDragSource = null;
    this.lastConnectedDragSourceOptions = null;
    this.lastConnectedDragPreview = null;
    this.lastConnectedDragPreviewOptions = null;
    this.backend = backend;
  }
}

//# sourceMappingURL=SourceConnector.js.map
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/hooks/useDragDropManager.js
var useDragDropManager = __webpack_require__(76735);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/hooks/useIsomorphicLayoutEffect.js
var useIsomorphicLayoutEffect = __webpack_require__(32639);
;// ./node_modules/react-dnd/dist/hooks/useDrag/useDragSourceConnector.js




function useDragSourceConnector(dragSourceOptions, dragPreviewOptions) {
  const manager = (0,useDragDropManager/* useDragDropManager */.u)();
  const connector = (0,react.useMemo)(() => new SourceConnector(manager.getBackend()), [manager]);
  (0,useIsomorphicLayoutEffect/* useIsomorphicLayoutEffect */.E)(() => {
    connector.dragSourceOptions = dragSourceOptions || null;
    connector.reconnect();
    return () => connector.disconnectDragSource();
  }, [connector, dragSourceOptions]);
  (0,useIsomorphicLayoutEffect/* useIsomorphicLayoutEffect */.E)(() => {
    connector.dragPreviewOptions = dragPreviewOptions || null;
    connector.reconnect();
    return () => connector.disconnectDragPreview();
  }, [connector, dragPreviewOptions]);
  return connector;
}

//# sourceMappingURL=useDragSourceConnector.js.map
;// ./node_modules/react-dnd/dist/internals/DragSourceMonitorImpl.js

let isCallingCanDrag = false;
let isCallingIsDragging = false;
class DragSourceMonitorImpl {
  receiveHandlerId(sourceId) {
    this.sourceId = sourceId;
  }
  getHandlerId() {
    return this.sourceId;
  }
  canDrag() {
    (0,dist/* invariant */.V)(!isCallingCanDrag, 'You may not call monitor.canDrag() inside your canDrag() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor');
    try {
      isCallingCanDrag = true;
      return this.internalMonitor.canDragSource(this.sourceId);
    } finally {
      isCallingCanDrag = false;
    }
  }
  isDragging() {
    if (!this.sourceId) {
      return false;
    }
    (0,dist/* invariant */.V)(!isCallingIsDragging, 'You may not call monitor.isDragging() inside your isDragging() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor');
    try {
      isCallingIsDragging = true;
      return this.internalMonitor.isDraggingSource(this.sourceId);
    } finally {
      isCallingIsDragging = false;
    }
  }
  subscribeToStateChange(listener, options) {
    return this.internalMonitor.subscribeToStateChange(listener, options);
  }
  isDraggingSource(sourceId) {
    return this.internalMonitor.isDraggingSource(sourceId);
  }
  isOverTarget(targetId, options) {
    return this.internalMonitor.isOverTarget(targetId, options);
  }
  getTargetIds() {
    return this.internalMonitor.getTargetIds();
  }
  isSourcePublic() {
    return this.internalMonitor.isSourcePublic();
  }
  getSourceId() {
    return this.internalMonitor.getSourceId();
  }
  subscribeToOffsetChange(listener) {
    return this.internalMonitor.subscribeToOffsetChange(listener);
  }
  canDragSource(sourceId) {
    return this.internalMonitor.canDragSource(sourceId);
  }
  canDropOnTarget(targetId) {
    return this.internalMonitor.canDropOnTarget(targetId);
  }
  getItemType() {
    return this.internalMonitor.getItemType();
  }
  getItem() {
    return this.internalMonitor.getItem();
  }
  getDropResult() {
    return this.internalMonitor.getDropResult();
  }
  didDrop() {
    return this.internalMonitor.didDrop();
  }
  getInitialClientOffset() {
    return this.internalMonitor.getInitialClientOffset();
  }
  getInitialSourceClientOffset() {
    return this.internalMonitor.getInitialSourceClientOffset();
  }
  getSourceClientOffset() {
    return this.internalMonitor.getSourceClientOffset();
  }
  getClientOffset() {
    return this.internalMonitor.getClientOffset();
  }
  getDifferenceFromInitialOffset() {
    return this.internalMonitor.getDifferenceFromInitialOffset();
  }
  constructor(manager) {
    this.sourceId = null;
    this.internalMonitor = manager.getMonitor();
  }
}

//# sourceMappingURL=DragSourceMonitorImpl.js.map
;// ./node_modules/react-dnd/dist/hooks/useDrag/useDragSourceMonitor.js



function useDragSourceMonitor() {
  const manager = (0,useDragDropManager/* useDragDropManager */.u)();
  return (0,react.useMemo)(() => new DragSourceMonitorImpl(manager), [manager]);
}

//# sourceMappingURL=useDragSourceMonitor.js.map
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/internals/registration.js
var registration = __webpack_require__(57151);
;// ./node_modules/react-dnd/dist/hooks/useDrag/DragSourceImpl.js
class DragSourceImpl {
  beginDrag() {
    const spec = this.spec;
    const monitor = this.monitor;
    let result = null;
    if (typeof spec.item === 'object') {
      result = spec.item;
    } else if (typeof spec.item === 'function') {
      result = spec.item(monitor);
    } else {
      result = {};
    }
    return result !== null && result !== void 0 ? result : null;
  }
  canDrag() {
    const spec = this.spec;
    const monitor = this.monitor;
    if (typeof spec.canDrag === 'boolean') {
      return spec.canDrag;
    } else if (typeof spec.canDrag === 'function') {
      return spec.canDrag(monitor);
    } else {
      return true;
    }
  }
  isDragging(globalMonitor, target) {
    const spec = this.spec;
    const monitor = this.monitor;
    const {
      isDragging
    } = spec;
    return isDragging ? isDragging(monitor) : target === globalMonitor.getSourceId();
  }
  endDrag() {
    const spec = this.spec;
    const monitor = this.monitor;
    const connector = this.connector;
    const {
      end
    } = spec;
    if (end) {
      end(monitor.getItem(), monitor);
    }
    connector.reconnect();
  }
  constructor(spec, monitor, connector) {
    this.spec = spec;
    this.monitor = monitor;
    this.connector = connector;
  }
}

//# sourceMappingURL=DragSourceImpl.js.map
;// ./node_modules/react-dnd/dist/hooks/useDrag/useDragSource.js


function useDragSource(spec, monitor, connector) {
  const handler = (0,react.useMemo)(() => new DragSourceImpl(spec, monitor, connector), [monitor, connector]);
  (0,react.useEffect)(() => {
    handler.spec = spec;
  }, [spec]);
  return handler;
}

//# sourceMappingURL=useDragSource.js.map
;// ./node_modules/react-dnd/dist/hooks/useDrag/useDragType.js


function useDragType(spec) {
  return (0,react.useMemo)(() => {
    const result = spec.type;
    (0,dist/* invariant */.V)(result != null, 'spec.type must be defined');
    return result;
  }, [spec]);
}

//# sourceMappingURL=useDragType.js.map
;// ./node_modules/react-dnd/dist/hooks/useDrag/useRegisteredDragSource.js





function useRegisteredDragSource(spec, monitor, connector) {
  const manager = (0,useDragDropManager/* useDragDropManager */.u)();
  const handler = useDragSource(spec, monitor, connector);
  const itemType = useDragType(spec);
  (0,useIsomorphicLayoutEffect/* useIsomorphicLayoutEffect */.E)(function registerDragSource() {
    if (itemType != null) {
      const [handlerId, unregister] = (0,registration/* registerSource */.V)(itemType, handler, manager);
      monitor.receiveHandlerId(handlerId);
      connector.receiveHandlerId(handlerId);
      return unregister;
    }
    return;
  }, [manager, monitor, connector, handler, itemType]);
}

//# sourceMappingURL=useRegisteredDragSource.js.map
;// ./node_modules/react-dnd/dist/hooks/useDrag/useDrag.js







/**
 * useDragSource hook
 * @param sourceSpec The drag source specification (object or function, function preferred)
 * @param deps The memoization deps array to use when evaluating spec changes
 */
function useDrag(specArg, deps) {
  const spec = (0,useOptionalFactory/* useOptionalFactory */.I)(specArg, deps);
  (0,dist/* invariant */.V)(!spec.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");
  const monitor = useDragSourceMonitor();
  const connector = useDragSourceConnector(spec.options, spec.previewOptions);
  useRegisteredDragSource(spec, monitor, connector);
  return [(0,useCollectedProps/* useCollectedProps */.j)(spec.collect, monitor, connector), useConnectDragSource(connector), useConnectDragPreview(connector)];
}

//# sourceMappingURL=useDrag.js.map

/***/ }),

/***/ 89135:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  H: () => (/* binding */ useDrop)
});

// EXTERNAL MODULE: ./node_modules/react-dnd/dist/hooks/useCollectedProps.js + 2 modules
var useCollectedProps = __webpack_require__(9713);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/hooks/useOptionalFactory.js
var useOptionalFactory = __webpack_require__(17195);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
;// ./node_modules/react-dnd/dist/hooks/useDrop/connectors.js

function useConnectDropTarget(connector) {
  return (0,react.useMemo)(() => connector.hooks.dropTarget(), [connector]);
}

//# sourceMappingURL=connectors.js.map
// EXTERNAL MODULE: ./node_modules/@react-dnd/shallowequal/dist/index.js
var dist = __webpack_require__(70246);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/internals/isRef.js
var isRef = __webpack_require__(32021);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/internals/wrapConnectorHooks.js
var wrapConnectorHooks = __webpack_require__(26827);
;// ./node_modules/react-dnd/dist/internals/TargetConnector.js



class TargetConnector {
  get connectTarget() {
    return this.dropTarget;
  }
  reconnect() {
    // if nothing has changed then don't resubscribe
    const didChange = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
    if (didChange) {
      this.disconnectDropTarget();
    }
    const dropTarget = this.dropTarget;
    if (!this.handlerId) {
      return;
    }
    if (!dropTarget) {
      this.lastConnectedDropTarget = dropTarget;
      return;
    }
    if (didChange) {
      this.lastConnectedHandlerId = this.handlerId;
      this.lastConnectedDropTarget = dropTarget;
      this.lastConnectedDropTargetOptions = this.dropTargetOptions;
      this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, dropTarget, this.dropTargetOptions);
    }
  }
  receiveHandlerId(newHandlerId) {
    if (newHandlerId === this.handlerId) {
      return;
    }
    this.handlerId = newHandlerId;
    this.reconnect();
  }
  get dropTargetOptions() {
    return this.dropTargetOptionsInternal;
  }
  set dropTargetOptions(options) {
    this.dropTargetOptionsInternal = options;
  }
  didHandlerIdChange() {
    return this.lastConnectedHandlerId !== this.handlerId;
  }
  didDropTargetChange() {
    return this.lastConnectedDropTarget !== this.dropTarget;
  }
  didOptionsChange() {
    return !(0,dist/* shallowEqual */.b)(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
  }
  disconnectDropTarget() {
    if (this.unsubscribeDropTarget) {
      this.unsubscribeDropTarget();
      this.unsubscribeDropTarget = undefined;
    }
  }
  get dropTarget() {
    return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
  }
  clearDropTarget() {
    this.dropTargetRef = null;
    this.dropTargetNode = null;
  }
  constructor(backend) {
    this.hooks = (0,wrapConnectorHooks/* wrapConnectorHooks */.i)({
      dropTarget: (node, options) => {
        this.clearDropTarget();
        this.dropTargetOptions = options;
        if ((0,isRef/* isRef */.i)(node)) {
          this.dropTargetRef = node;
        } else {
          this.dropTargetNode = node;
        }
        this.reconnect();
      }
    });
    this.handlerId = null;
    // The drop target may either be attached via ref or connect function
    this.dropTargetRef = null;
    this.dropTargetOptionsInternal = null;
    this.lastConnectedHandlerId = null;
    this.lastConnectedDropTarget = null;
    this.lastConnectedDropTargetOptions = null;
    this.backend = backend;
  }
}

//# sourceMappingURL=TargetConnector.js.map
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/hooks/useDragDropManager.js
var useDragDropManager = __webpack_require__(76735);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/hooks/useIsomorphicLayoutEffect.js
var useIsomorphicLayoutEffect = __webpack_require__(32639);
;// ./node_modules/react-dnd/dist/hooks/useDrop/useDropTargetConnector.js




function useDropTargetConnector(options) {
  const manager = (0,useDragDropManager/* useDragDropManager */.u)();
  const connector = (0,react.useMemo)(() => new TargetConnector(manager.getBackend()), [manager]);
  (0,useIsomorphicLayoutEffect/* useIsomorphicLayoutEffect */.E)(() => {
    connector.dropTargetOptions = options || null;
    connector.reconnect();
    return () => connector.disconnectDropTarget();
  }, [options]);
  return connector;
}

//# sourceMappingURL=useDropTargetConnector.js.map
// EXTERNAL MODULE: ./node_modules/@react-dnd/invariant/dist/index.js
var invariant_dist = __webpack_require__(53268);
;// ./node_modules/react-dnd/dist/internals/DropTargetMonitorImpl.js

let isCallingCanDrop = false;
class DropTargetMonitorImpl {
  receiveHandlerId(targetId) {
    this.targetId = targetId;
  }
  getHandlerId() {
    return this.targetId;
  }
  subscribeToStateChange(listener, options) {
    return this.internalMonitor.subscribeToStateChange(listener, options);
  }
  canDrop() {
    // Cut out early if the target id has not been set. This should prevent errors
    // where the user has an older version of dnd-core like in
    // https://github.com/react-dnd/react-dnd/issues/1310
    if (!this.targetId) {
      return false;
    }
    (0,invariant_dist/* invariant */.V)(!isCallingCanDrop, 'You may not call monitor.canDrop() inside your canDrop() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor');
    try {
      isCallingCanDrop = true;
      return this.internalMonitor.canDropOnTarget(this.targetId);
    } finally {
      isCallingCanDrop = false;
    }
  }
  isOver(options) {
    if (!this.targetId) {
      return false;
    }
    return this.internalMonitor.isOverTarget(this.targetId, options);
  }
  getItemType() {
    return this.internalMonitor.getItemType();
  }
  getItem() {
    return this.internalMonitor.getItem();
  }
  getDropResult() {
    return this.internalMonitor.getDropResult();
  }
  didDrop() {
    return this.internalMonitor.didDrop();
  }
  getInitialClientOffset() {
    return this.internalMonitor.getInitialClientOffset();
  }
  getInitialSourceClientOffset() {
    return this.internalMonitor.getInitialSourceClientOffset();
  }
  getSourceClientOffset() {
    return this.internalMonitor.getSourceClientOffset();
  }
  getClientOffset() {
    return this.internalMonitor.getClientOffset();
  }
  getDifferenceFromInitialOffset() {
    return this.internalMonitor.getDifferenceFromInitialOffset();
  }
  constructor(manager) {
    this.targetId = null;
    this.internalMonitor = manager.getMonitor();
  }
}

//# sourceMappingURL=DropTargetMonitorImpl.js.map
;// ./node_modules/react-dnd/dist/hooks/useDrop/useDropTargetMonitor.js



function useDropTargetMonitor() {
  const manager = (0,useDragDropManager/* useDragDropManager */.u)();
  return (0,react.useMemo)(() => new DropTargetMonitorImpl(manager), [manager]);
}

//# sourceMappingURL=useDropTargetMonitor.js.map
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/internals/registration.js
var registration = __webpack_require__(57151);
;// ./node_modules/react-dnd/dist/hooks/useDrop/useAccept.js


/**
 * Internal utility hook to get an array-version of spec.accept.
 * The main utility here is that we aren't creating a new array on every render if a non-array spec.accept is passed in.
 * @param spec
 */
function useAccept(spec) {
  const {
    accept
  } = spec;
  return (0,react.useMemo)(() => {
    (0,invariant_dist/* invariant */.V)(spec.accept != null, 'accept must be defined');
    return Array.isArray(accept) ? accept : [accept];
  }, [accept]);
}

//# sourceMappingURL=useAccept.js.map
;// ./node_modules/react-dnd/dist/hooks/useDrop/DropTargetImpl.js
class DropTargetImpl {
  canDrop() {
    const spec = this.spec;
    const monitor = this.monitor;
    return spec.canDrop ? spec.canDrop(monitor.getItem(), monitor) : true;
  }
  hover() {
    const spec = this.spec;
    const monitor = this.monitor;
    if (spec.hover) {
      spec.hover(monitor.getItem(), monitor);
    }
  }
  drop() {
    const spec = this.spec;
    const monitor = this.monitor;
    if (spec.drop) {
      return spec.drop(monitor.getItem(), monitor);
    }
    return;
  }
  constructor(spec, monitor) {
    this.spec = spec;
    this.monitor = monitor;
  }
}

//# sourceMappingURL=DropTargetImpl.js.map
;// ./node_modules/react-dnd/dist/hooks/useDrop/useDropTarget.js


function useDropTarget(spec, monitor) {
  const dropTarget = (0,react.useMemo)(() => new DropTargetImpl(spec, monitor), [monitor]);
  (0,react.useEffect)(() => {
    dropTarget.spec = spec;
  }, [spec]);
  return dropTarget;
}

//# sourceMappingURL=useDropTarget.js.map
;// ./node_modules/react-dnd/dist/hooks/useDrop/useRegisteredDropTarget.js





function useRegisteredDropTarget(spec, monitor, connector) {
  const manager = (0,useDragDropManager/* useDragDropManager */.u)();
  const dropTarget = useDropTarget(spec, monitor);
  const accept = useAccept(spec);
  (0,useIsomorphicLayoutEffect/* useIsomorphicLayoutEffect */.E)(function registerDropTarget() {
    const [handlerId, unregister] = (0,registration/* registerTarget */.l)(accept, dropTarget, manager);
    monitor.receiveHandlerId(handlerId);
    connector.receiveHandlerId(handlerId);
    return unregister;
  }, [manager, monitor, dropTarget, connector, accept.map(a => a.toString()).join('|')]);
}

//# sourceMappingURL=useRegisteredDropTarget.js.map
;// ./node_modules/react-dnd/dist/hooks/useDrop/useDrop.js






/**
 * useDropTarget Hook
 * @param spec The drop target specification (object or function, function preferred)
 * @param deps The memoization deps array to use when evaluating spec changes
 */
function useDrop(specArg, deps) {
  const spec = (0,useOptionalFactory/* useOptionalFactory */.I)(specArg, deps);
  const monitor = useDropTargetMonitor();
  const connector = useDropTargetConnector(spec.options);
  useRegisteredDropTarget(spec, monitor, connector);
  return [(0,useCollectedProps/* useCollectedProps */.j)(spec.collect, monitor, connector), useConnectDropTarget(connector)];
}

//# sourceMappingURL=useDrop.js.map

/***/ }),

/***/ 32639:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ useIsomorphicLayoutEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9950);

// suppress the useLayoutEffect warning on server side.
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;

//# sourceMappingURL=useIsomorphicLayoutEffect.js.map

/***/ }),

/***/ 17195:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ useOptionalFactory)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9950);

function useOptionalFactory(arg, deps) {
  const memoDeps = [...(deps || [])];
  if (deps == null && typeof arg !== 'function') {
    memoDeps.push(arg);
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return typeof arg === 'function' ? arg() : arg;
  }, memoDeps);
}

//# sourceMappingURL=useOptionalFactory.js.map

/***/ }),

/***/ 32021:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ isRef)
/* harmony export */ });
function isRef(obj) {
  return (
    // eslint-disable-next-line no-prototype-builtins
    obj !== null && typeof obj === 'object' && Object.prototype.hasOwnProperty.call(obj, 'current')
  );
}

//# sourceMappingURL=isRef.js.map

/***/ }),

/***/ 57151:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ registerSource),
/* harmony export */   l: () => (/* binding */ registerTarget)
/* harmony export */ });
function registerTarget(type, target, manager) {
  const registry = manager.getRegistry();
  const targetId = registry.addTarget(type, target);
  return [targetId, () => registry.removeTarget(targetId)];
}
function registerSource(type, source, manager) {
  const registry = manager.getRegistry();
  const sourceId = registry.addSource(type, source);
  return [sourceId, () => registry.removeSource(sourceId)];
}

//# sourceMappingURL=registration.js.map

/***/ }),

/***/ 26827:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ wrapConnectorHooks)
/* harmony export */ });
/* harmony import */ var _react_dnd_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53268);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9950);


function throwIfCompositeComponentElement(element) {
  // Custom components can no longer be wrapped directly in React DnD 2.0
  // so that we don't need to depend on findDOMNode() from react-dom.
  if (typeof element.type === 'string') {
    return;
  }
  const displayName = element.type.displayName || element.type.name || 'the component';
  throw new Error('Only native element nodes can now be passed to React DnD connectors.' + "You can either wrap ".concat(displayName, " into a <div>, or turn it into a ") + 'drag source or a drop target itself.');
}
function wrapHookToRecognizeElement(hook) {
  return function () {
    let elementOrNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    // When passed a node, call the hook straight away.
    if (!(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(elementOrNode)) {
      const node = elementOrNode;
      hook(node, options);
      // return the node so it can be chained (e.g. when within callback refs
      // <div ref={node => connectDragSource(connectDropTarget(node))}/>
      return node;
    }
    // If passed a ReactElement, clone it and attach this function as a ref.
    // This helps us achieve a neat API where user doesn't even know that refs
    // are being used under the hood.
    const element = elementOrNode;
    throwIfCompositeComponentElement(element);
    // When no options are passed, use the hook directly
    const ref = options ? node => hook(node, options) : hook;
    return cloneWithRef(element, ref);
  };
}
function wrapConnectorHooks(hooks) {
  const wrappedHooks = {};
  Object.keys(hooks).forEach(key => {
    const hook = hooks[key];
    // ref objects should be passed straight through without wrapping
    if (key.endsWith('Ref')) {
      wrappedHooks[key] = hooks[key];
    } else {
      const wrappedHook = wrapHookToRecognizeElement(hook);
      wrappedHooks[key] = () => wrappedHook;
    }
  });
  return wrappedHooks;
}
function setRef(ref, node) {
  if (typeof ref === 'function') {
    ref(node);
  } else {
    ref.current = node;
  }
}
function cloneWithRef(element, newRef) {
  const previousRef = element.ref;
  (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .V)(typeof previousRef !== 'string', 'Cannot connect React DnD to an element with an existing string ref. ' + 'Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. ' + 'Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs');
  if (!previousRef) {
    // When there is no ref on the element, use the new ref directly
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(element, {
      ref: newRef
    });
  } else {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(element, {
      ref: node => {
        setRef(previousRef, node);
        setRef(newRef, node);
      }
    });
  }
}

//# sourceMappingURL=wrapConnectorHooks.js.map

/***/ })

}]);