"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[359],{

/***/ 78205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Mo: () => (/* reexport */ Keyframes),
  an: () => (/* reexport */ createTheme),
  IV: () => (/* reexport */ useStyleRegister)
});

// UNUSED EXPORTS: StyleProvider, Theme, createCache, extractStyle, getComputedToken, legacyLogicalPropertiesTransformer, legacyNotSelectorLinter, logicalPropertiesLinter, parentSelectorLinter, px2remTransformer, useCacheToken

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useMemo.js
var hooks_useMemo = __webpack_require__(86910);
// EXTERNAL MODULE: ./node_modules/rc-util/es/isEqual.js
var es_isEqual = __webpack_require__(41216);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(23029);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(92901);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(64467);
;// ./node_modules/@ant-design/cssinjs/es/Cache.js



// [times, realValue]
var Entity = /*#__PURE__*/function () {
  function Entity(instanceId) {
    (0,classCallCheck/* default */.A)(this, Entity);
    (0,defineProperty/* default */.A)(this, "instanceId", void 0);
    (0,defineProperty/* default */.A)(this, "cache", new Map());
    this.instanceId = instanceId;
  }

  /** @private Internal cache map. Do not access this directly */
  (0,createClass/* default */.A)(Entity, [{
    key: "get",
    value: function get(keys) {
      return this.cache.get(keys.join('%')) || null;
    }
  }, {
    key: "update",
    value: function update(keys, valueFn) {
      var path = keys.join('%');
      var prevValue = this.cache.get(path);
      var nextValue = valueFn(prevValue);
      if (nextValue === null) {
        this.cache.delete(path);
      } else {
        this.cache.set(path, nextValue);
      }
    }
  }]);
  return Entity;
}();
/* harmony default export */ const Cache = (Entity);
;// ./node_modules/@ant-design/cssinjs/es/StyleContext.js


var _excluded = (/* unused pure expression or super */ null && (["children"]));




var StyleContext_ATTR_TOKEN = 'data-token-hash';
var StyleContext_ATTR_MARK = 'data-css-hash';
var ATTR_DEV_CACHE_PATH = 'data-dev-cache-path';

// Mark css-in-js instance in style element
var StyleContext_CSS_IN_JS_INSTANCE = '__cssinjs_instance__';
function createCache() {
  var cssinjsInstanceId = Math.random().toString(12).slice(2);
  if (typeof document !== 'undefined' && document.head && document.body) {
    var styles = document.body.querySelectorAll("style[".concat(StyleContext_ATTR_MARK, "]")) || [];
    var firstChild = document.head.firstChild;
    Array.from(styles).forEach(function (style) {
      style[StyleContext_CSS_IN_JS_INSTANCE] = style[StyleContext_CSS_IN_JS_INSTANCE] || cssinjsInstanceId;

      // Not force move if no head
      if (style[StyleContext_CSS_IN_JS_INSTANCE] === cssinjsInstanceId) {
        document.head.insertBefore(style, firstChild);
      }
    });

    // Deduplicate of moved styles
    var styleHash = {};
    Array.from(document.querySelectorAll("style[".concat(StyleContext_ATTR_MARK, "]"))).forEach(function (style) {
      var hash = style.getAttribute(StyleContext_ATTR_MARK);
      if (styleHash[hash]) {
        if (style[StyleContext_CSS_IN_JS_INSTANCE] === cssinjsInstanceId) {
          var _style$parentNode;
          (_style$parentNode = style.parentNode) === null || _style$parentNode === void 0 ? void 0 : _style$parentNode.removeChild(style);
        }
      } else {
        styleHash[hash] = true;
      }
    });
  }
  return new Cache(cssinjsInstanceId);
}
var StyleContext_StyleContext = /*#__PURE__*/react.createContext({
  hashPriority: 'low',
  cache: createCache(),
  defaultCache: true
});
var StyleProvider = function StyleProvider(props) {
  var children = props.children,
    restProps = _objectWithoutProperties(props, _excluded);
  var parentContext = React.useContext(StyleContext_StyleContext);
  var context = useMemo(function () {
    var mergedContext = _objectSpread({}, parentContext);
    Object.keys(restProps).forEach(function (key) {
      var value = restProps[key];
      if (restProps[key] !== undefined) {
        mergedContext[key] = value;
      }
    });
    var cache = restProps.cache;
    mergedContext.cache = mergedContext.cache || createCache();
    mergedContext.defaultCache = !cache && parentContext.defaultCache;
    return mergedContext;
  }, [parentContext, restProps], function (prev, next) {
    return !isEqual(prev[0], next[0], true) || !isEqual(prev[1], next[1], true);
  });
  return /*#__PURE__*/React.createElement(StyleContext_StyleContext.Provider, {
    value: context
  }, children);
};
/* harmony default export */ const es_StyleContext = (StyleContext_StyleContext);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/canUseDom.js
var canUseDom = __webpack_require__(3888);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/dynamicCSS.js
var dynamicCSS = __webpack_require__(28619);
;// ./node_modules/@ant-design/cssinjs/es/util.js




function util_flattenToken(token) {
  var str = '';
  Object.keys(token).forEach(function (key) {
    var value = token[key];
    str += key;
    if (value && _typeof(value) === 'object') {
      str += util_flattenToken(value);
    } else {
      str += value;
    }
  });
  return str;
}

/**
 * Convert derivative token to key string
 */
function util_token2key(token, salt) {
  return hash("".concat(salt, "_").concat(util_flattenToken(token)));
}
var layerKey = "layer-".concat(Date.now(), "-").concat(Math.random()).replace(/\./g, '');
var layerWidth = '903px';
function supportSelector(styleStr, handleElement) {
  if ((0,canUseDom/* default */.A)()) {
    var _ele$parentNode;
    (0,dynamicCSS/* updateCSS */.BD)(styleStr, layerKey);
    var _ele = document.createElement('div');
    _ele.style.position = 'fixed';
    _ele.style.left = '0';
    _ele.style.top = '0';
    handleElement === null || handleElement === void 0 ? void 0 : handleElement(_ele);
    document.body.appendChild(_ele);
    if (false) {}
    var support = getComputedStyle(_ele).width === layerWidth;
    (_ele$parentNode = _ele.parentNode) === null || _ele$parentNode === void 0 ? void 0 : _ele$parentNode.removeChild(_ele);
    (0,dynamicCSS/* removeCSS */.m6)(layerKey);
    return support;
  }
  return false;
}
var canLayer = undefined;
function supportLayer() {
  if (canLayer === undefined) {
    canLayer = supportSelector("@layer ".concat(layerKey, " { .").concat(layerKey, " { width: ").concat(layerWidth, "!important; } }"), function (ele) {
      ele.className = layerKey;
    });
  }
  return canLayer;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(5544);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(60436);
;// ./node_modules/@ant-design/cssinjs/es/hooks/useHMR.js
function useProdHMR() {
  return false;
}
var webpackHMR = false;
function useDevHMR() {
  return webpackHMR;
}
/* harmony default export */ const useHMR = ( true ? useProdHMR : 0);

// Webpack `module.hot.accept` do not support any deps update trigger
// We have to hack handler to force mark as HRM
if (false) { var originWebpackHotUpdate, win; }
;// ./node_modules/@ant-design/cssinjs/es/hooks/useGlobalCache.js





function useClientCache(prefix, keyPath, cacheFn, onCacheRemove) {
  var _React$useContext = react.useContext(es_StyleContext),
    globalCache = _React$useContext.cache;
  var fullPath = [prefix].concat((0,toConsumableArray/* default */.A)(keyPath));
  var HMRUpdate = useHMR();

  // Create cache
  react.useMemo(function () {
    globalCache.update(fullPath, function (prevCache) {
      var _ref = prevCache || [],
        _ref2 = (0,slicedToArray/* default */.A)(_ref, 2),
        _ref2$ = _ref2[0],
        times = _ref2$ === void 0 ? 0 : _ref2$,
        cache = _ref2[1];

      // HMR should always ignore cache since developer may change it
      var tmpCache = cache;
      if (false) {}
      var mergedCache = tmpCache || cacheFn();
      return [times + 1, mergedCache];
    });
  }, /* eslint-disable react-hooks/exhaustive-deps */
  [fullPath.join('_')]
  /* eslint-enable */);

  // Remove if no need anymore
  react.useEffect(function () {
    return function () {
      globalCache.update(fullPath, function (prevCache) {
        var _ref3 = prevCache || [],
          _ref4 = (0,slicedToArray/* default */.A)(_ref3, 2),
          _ref4$ = _ref4[0],
          times = _ref4$ === void 0 ? 0 : _ref4$,
          cache = _ref4[1];
        var nextCount = times - 1;
        if (nextCount === 0) {
          onCacheRemove === null || onCacheRemove === void 0 ? void 0 : onCacheRemove(cache, false);
          return null;
        }
        return [times - 1, cache];
      });
    };
  }, fullPath);
  return globalCache.get(fullPath)[1];
}
;// ./node_modules/@ant-design/cssinjs/es/hooks/useCacheToken.js








var EMPTY_OVERRIDE = {};

// Generate different prefix to make user selector break in production env.
// This helps developer not to do style override directly on the hash id.
var hashPrefix = (/* unused pure expression or super */ null && ( false ? 0 : 'css'));
var tokenKeys = new Map();
function recordCleanToken(tokenKey) {
  tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) + 1);
}
function removeStyleTags(key, instanceId) {
  if (typeof document !== 'undefined') {
    var styles = document.querySelectorAll("style[".concat(ATTR_TOKEN, "=\"").concat(key, "\"]"));
    styles.forEach(function (style) {
      if (style[CSS_IN_JS_INSTANCE] === instanceId) {
        var _style$parentNode;
        (_style$parentNode = style.parentNode) === null || _style$parentNode === void 0 ? void 0 : _style$parentNode.removeChild(style);
      }
    });
  }
}

// Remove will check current keys first
function cleanTokenStyle(tokenKey, instanceId) {
  tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) - 1);
  var tokenKeyList = Array.from(tokenKeys.keys());
  var cleanableKeyList = tokenKeyList.filter(function (key) {
    var count = tokenKeys.get(key) || 0;
    return count <= 0;
  });
  if (cleanableKeyList.length < tokenKeyList.length) {
    cleanableKeyList.forEach(function (key) {
      removeStyleTags(key, instanceId);
      tokenKeys.delete(key);
    });
  }
}
var getComputedToken = function getComputedToken(originToken, overrideToken, theme, format) {
  var derivativeToken = theme.getDerivativeToken(originToken);

  // Merge with override
  var mergedDerivativeToken = _objectSpread(_objectSpread({}, derivativeToken), overrideToken);

  // Format if needed
  if (format) {
    mergedDerivativeToken = format(mergedDerivativeToken);
  }
  return mergedDerivativeToken;
};

/**
 * Cache theme derivative token as global shared one
 * @param theme Theme entity
 * @param tokens List of tokens, used for cache. Please do not dynamic generate object directly
 * @param option Additional config
 * @returns Call Theme.getDerivativeToken(tokenObject) to get token
 */
function useCacheToken(theme, tokens) {
  var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _useContext = useContext(StyleContext),
    instanceId = _useContext.cache.instanceId;
  var _option$salt = option.salt,
    salt = _option$salt === void 0 ? '' : _option$salt,
    _option$override = option.override,
    override = _option$override === void 0 ? EMPTY_OVERRIDE : _option$override,
    formatToken = option.formatToken;

  // Basic - We do basic cache here
  var mergedToken = React.useMemo(function () {
    return Object.assign.apply(Object, [{}].concat(_toConsumableArray(tokens)));
  }, [tokens]);
  var tokenStr = React.useMemo(function () {
    return flattenToken(mergedToken);
  }, [mergedToken]);
  var overrideTokenStr = React.useMemo(function () {
    return flattenToken(override);
  }, [override]);
  var cachedToken = useGlobalCache('token', [salt, theme.id, tokenStr, overrideTokenStr], function () {
    var mergedDerivativeToken = getComputedToken(mergedToken, override, theme, formatToken);

    // Optimize for `useStyleRegister` performance
    var tokenKey = token2key(mergedDerivativeToken, salt);
    mergedDerivativeToken._tokenKey = tokenKey;
    recordCleanToken(tokenKey);
    var hashId = "".concat(hashPrefix, "-").concat(hash(tokenKey));
    mergedDerivativeToken._hashId = hashId; // Not used

    return [mergedDerivativeToken, hashId];
  }, function (cache) {
    // Remove token will remove all related style
    cleanTokenStyle(cache[0]._tokenKey, instanceId);
  });
  return cachedToken;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(82284);
;// ./node_modules/@emotion/hash/dist/hash.browser.esm.js
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
    i = 0,
    len = str.length;
  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k = /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^= /* k >>> r: */
    k >>> 24;
    h = /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^ /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array

  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.

  h ^= h >>> 13;
  h = /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}
/* harmony default export */ const hash_browser_esm = (murmur2);
;// ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
/* harmony default export */ const unitless_browser_esm = (unitlessKeys);
;// ./node_modules/stylis/src/Enum.js
var MS = '-ms-';
var MOZ = '-moz-';
var WEBKIT = '-webkit-';
var COMMENT = 'comm';
var RULESET = 'rule';
var DECLARATION = 'decl';
var PAGE = '@page';
var MEDIA = '@media';
var IMPORT = '@import';
var CHARSET = '@charset';
var VIEWPORT = '@viewport';
var SUPPORTS = '@supports';
var DOCUMENT = '@document';
var NAMESPACE = '@namespace';
var KEYFRAMES = '@keyframes';
var FONT_FACE = '@font-face';
var COUNTER_STYLE = '@counter-style';
var FONT_FEATURE_VALUES = '@font-feature-values';
var LAYER = '@layer';
;// ./node_modules/stylis/src/Utility.js
/**
 * @param {number}
 * @return {number}
 */
var abs = Math.abs;

/**
 * @param {number}
 * @return {string}
 */
var Utility_from = String.fromCharCode;

/**
 * @param {object}
 * @return {object}
 */
var Utility_assign = Object.assign;

/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */
function Utility_hash(value, length) {
  return charat(value, 0) ^ 45 ? (((length << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}

/**
 * @param {string} value
 * @return {string}
 */
function trim(value) {
  return value.trim();
}

/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */
function match(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}

/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}

/**
 * @param {string} value
 * @param {string} search
 * @return {number}
 */
function indexof(value, search) {
  return value.indexOf(search);
}

/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */
function charat(value, index) {
  return value.charCodeAt(index) | 0;
}

/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function substr(value, begin, end) {
  return value.slice(begin, end);
}

/**
 * @param {string} value
 * @return {number}
 */
function strlen(value) {
  return value.length;
}

/**
 * @param {any[]} value
 * @return {number}
 */
function sizeof(value) {
  return value.length;
}

/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */
function Utility_append(value, array) {
  return array.push(value), value;
}

/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */
function combine(array, callback) {
  return array.map(callback).join('');
}

/**
 * @param {string[]} array
 * @param {RegExp} pattern
 * @return {string[]}
 */
function filter(array, pattern) {
  return array.filter(function (value) {
    return !match(value, pattern);
  });
}
;// ./node_modules/stylis/src/Serializer.js



/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function serialize(children, callback) {
  var output = '';
  for (var i = 0; i < children.length; i++) output += callback(children[i], i, children, callback) || '';
  return output;
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function stringify(element, index, children, callback) {
  switch (element.type) {
    case LAYER:
      if (element.children.length) break;
    case IMPORT:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return '';
    case KEYFRAMES:
      return element.return = element.value + '{' + serialize(element.children, callback) + '}';
    case RULESET:
      if (!strlen(element.value = element.props.join(','))) return '';
  }
  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : '';
}
;// ./node_modules/stylis/src/Tokenizer.js

var line = 1;
var column = 1;
var Tokenizer_length = 0;
var position = 0;
var character = 0;
var characters = '';

/**
 * @param {string} value
 * @param {object | null} root
 * @param {object | null} parent
 * @param {string} type
 * @param {string[] | string} props
 * @param {object[] | string} children
 * @param {object[]} siblings
 * @param {number} length
 */
function node(value, root, parent, type, props, children, length, siblings) {
  return {
    value: value,
    root: root,
    parent: parent,
    type: type,
    props: props,
    children: children,
    line: line,
    column: column,
    length: length,
    return: '',
    siblings: siblings
  };
}

/**
 * @param {object} root
 * @param {object} props
 * @return {object}
 */
function copy(root, props) {
  return assign(node('', null, null, '', null, null, 0, root.siblings), root, {
    length: -root.length
  }, props);
}

/**
 * @param {object} root
 */
function lift(root) {
  while (root.root) root = copy(root.root, {
    children: [root]
  });
  append(root, root.siblings);
}

/**
 * @return {number}
 */
function Tokenizer_char() {
  return character;
}

/**
 * @return {number}
 */
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if (column--, character === 10) column = 1, line--;
  return character;
}

/**
 * @return {number}
 */
function next() {
  character = position < Tokenizer_length ? charat(characters, position++) : 0;
  if (column++, character === 10) column = 1, line++;
  return character;
}

/**
 * @return {number}
 */
function peek() {
  return charat(characters, position);
}

/**
 * @return {number}
 */
function caret() {
  return position;
}

/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function slice(begin, end) {
  return substr(characters, begin, end);
}

/**
 * @param {number} type
 * @return {number}
 */
function token(type) {
  switch (type) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}

/**
 * @param {string} value
 * @return {any[]}
 */
function alloc(value) {
  return line = column = 1, Tokenizer_length = strlen(characters = value), position = 0, [];
}

/**
 * @param {any} value
 * @return {any}
 */
function dealloc(value) {
  return characters = '', value;
}

/**
 * @param {number} type
 * @return {string}
 */
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}

/**
 * @param {string} value
 * @return {string[]}
 */
function tokenize(value) {
  return dealloc(tokenizer(alloc(value)));
}

/**
 * @param {number} type
 * @return {string}
 */
function whitespace(type) {
  while (character = peek()) if (character < 33) next();else break;
  return token(type) > 2 || token(character) > 3 ? '' : ' ';
}

/**
 * @param {string[]} children
 * @return {string[]}
 */
function tokenizer(children) {
  while (next()) switch (token(character)) {
    case 0:
      append(identifier(position - 1), children);
      break;
    case 2:
      append(delimit(character), children);
      break;
    default:
      append(from(character), children);
  }
  return children;
}

/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */
function escaping(index, count) {
  while (--count && next())
  // not 0-9 A-F a-f
  if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97) break;
  return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}

/**
 * @param {number} type
 * @return {number}
 */
function delimiter(type) {
  while (next()) switch (character) {
    // ] ) " '
    case type:
      return position;
    // " '
    case 34:
    case 39:
      if (type !== 34 && type !== 39) delimiter(character);
      break;
    // (
    case 40:
      if (type === 41) delimiter(type);
      break;
    // \
    case 92:
      next();
      break;
  }
  return position;
}

/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */
function commenter(type, index) {
  while (next())
  // //
  if (type + character === 47 + 10) break;
  // /*
  else if (type + character === 42 + 42 && peek() === 47) break;
  return '/*' + slice(index, position - 1) + '*' + Utility_from(type === 47 ? type : next());
}

/**
 * @param {number} index
 * @return {string}
 */
function identifier(index) {
  while (!token(peek())) next();
  return slice(index, position);
}
;// ./node_modules/stylis/src/Parser.js




/**
 * @param {string} value
 * @return {object[]}
 */
function compile(value) {
  return dealloc(parse('', null, null, null, [''], value = alloc(value), 0, [0], value));
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index = 0;
  var offset = 0;
  var length = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character = 0;
  var type = '';
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters = type;
  while (scanning) switch (previous = character, character = next()) {
    // (
    case 40:
      if (previous != 108 && charat(characters, length - 1) == 58) {
        if (indexof(characters += replace(delimit(character), '&', '&\f'), '&\f') != -1) ampersand = -1;
        break;
      }
    // " ' [
    case 34:
    case 39:
    case 91:
      characters += delimit(character);
      break;
    // \t \n \r \s
    case 9:
    case 10:
    case 13:
    case 32:
      characters += whitespace(previous);
      break;
    // \
    case 92:
      characters += escaping(caret() - 1, 7);
      continue;
    // /
    case 47:
      switch (peek()) {
        case 42:
        case 47:
          Utility_append(comment(commenter(next(), caret()), root, parent, declarations), declarations);
          break;
        default:
          characters += '/';
      }
      break;
    // {
    case 123 * variable:
      points[index++] = strlen(characters) * ampersand;
    // } ; \0
    case 125 * variable:
    case 59:
    case 0:
      switch (character) {
        // \0 }
        case 0:
        case 125:
          scanning = 0;
        // ;
        case 59 + offset:
          if (ampersand == -1) characters = replace(characters, /\f/g, '');
          if (property > 0 && strlen(characters) - length) Utility_append(property > 32 ? declaration(characters + ';', rule, parent, length - 1, declarations) : declaration(replace(characters, ' ', '') + ';', rule, parent, length - 2, declarations), declarations);
          break;
        // @ ;
        case 59:
          characters += ';';
        // { rule/at-rule
        default:
          Utility_append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length, rulesets), rulesets);
          if (character === 123) if (offset === 0) parse(characters, root, reference, reference, props, rulesets, length, points, children);else switch (atrule === 99 && charat(characters, 3) === 110 ? 100 : atrule) {
            // d l m s
            case 100:
            case 108:
            case 109:
            case 115:
              parse(value, reference, reference, rule && Utility_append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length, children), children), rules, children, length, points, rule ? props : children);
              break;
            default:
              parse(characters, reference, reference, reference, [''], children, 0, points, children);
          }
      }
      index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo;
      break;
    // :
    case 58:
      length = 1 + strlen(characters), property = previous;
    default:
      if (variable < 1) if (character == 123) --variable;else if (character == 125 && variable++ == 0 && prev() == 125) continue;
      switch (characters += Utility_from(character), character * variable) {
        // &
        case 38:
          ampersand = offset > 0 ? 1 : (characters += '\f', -1);
          break;
        // ,
        case 44:
          points[index++] = (strlen(characters) - 1) * ampersand, ampersand = 1;
          break;
        // @
        case 64:
          // -
          if (peek() === 45) characters += delimit(next());
          atrule = peek(), offset = length = strlen(type = characters += identifier(caret())), character++;
          break;
        // -
        case 45:
          if (previous === 45 && strlen(characters) == 2) variable = 0;
      }
  }
  return rulesets;
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @param {object[]} siblings
 * @return {object}
 */
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length, siblings) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [''];
  var size = sizeof(rule);
  for (var i = 0, j = 0, k = 0; i < index; ++i) for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x) if (z = trim(j > 0 ? rule[x] + ' ' + y : replace(y, /&\f/g, rule[x]))) props[k++] = z;
  return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length, siblings);
}

/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @param {object[]} siblings
 * @return {object}
 */
function comment(value, root, parent, siblings) {
  return node(value, root, parent, COMMENT, Utility_from(Tokenizer_char()), substr(value, 2, -2), 0, siblings);
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @param {object[]} siblings
 * @return {object}
 */
function declaration(value, root, parent, length, siblings) {
  return node(value, root, parent, DECLARATION, substr(value, 0, length), substr(value, length + 1, -1), length, siblings);
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/warning.js
var warning = __webpack_require__(99424);
;// ./node_modules/@ant-design/cssinjs/es/linters/utils.js

function utils_lintWarning(message, info) {
  var path = info.path,
    parentSelectors = info.parentSelectors;
  devWarning(false, "[Ant Design CSS-in-JS] ".concat(path ? "Error in ".concat(path, ": ") : '').concat(message).concat(parentSelectors.length ? " Selector: ".concat(parentSelectors.join(' | ')) : ''));
}
;// ./node_modules/@ant-design/cssinjs/es/linters/contentQuotesLinter.js

var linter = function linter(key, value, info) {
  if (key === 'content') {
    // From emotion: https://github.com/emotion-js/emotion/blob/main/packages/serialize/src/index.js#L63
    var contentValuePattern = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
    var contentValues = ['normal', 'none', 'initial', 'inherit', 'unset'];
    if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
      lintWarning("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(value, "\"'`."), info);
    }
  }
};
/* harmony default export */ const contentQuotesLinter = ((/* unused pure expression or super */ null && (linter)));
;// ./node_modules/@ant-design/cssinjs/es/linters/hashedAnimationLinter.js

var hashedAnimationLinter_linter = function linter(key, value, info) {
  if (key === 'animation') {
    if (info.hashId && value !== 'none') {
      lintWarning("You seem to be using hashed animation '".concat(value, "', in which case 'animationName' with Keyframe as value is recommended."), info);
    }
  }
};
/* harmony default export */ const hashedAnimationLinter = ((/* unused pure expression or super */ null && (hashedAnimationLinter_linter)));
;// ./node_modules/@ant-design/cssinjs/es/linters/legacyNotSelectorLinter.js

function isConcatSelector(selector) {
  var _selector$match;
  var notContent = ((_selector$match = selector.match(/:not\(([^)]*)\)/)) === null || _selector$match === void 0 ? void 0 : _selector$match[1]) || '';

  // split selector. e.g.
  // `h1#a.b` => ['h1', #a', '.b']
  var splitCells = notContent.split(/(\[[^[]*])|(?=[.#])/).filter(function (str) {
    return str;
  });
  return splitCells.length > 1;
}
function parsePath(info) {
  return info.parentSelectors.reduce(function (prev, cur) {
    if (!prev) {
      return cur;
    }
    return cur.includes('&') ? cur.replace(/&/g, prev) : "".concat(prev, " ").concat(cur);
  }, '');
}
var legacyNotSelectorLinter_linter = function linter(key, value, info) {
  var parentSelectorPath = parsePath(info);
  var notList = parentSelectorPath.match(/:not\([^)]*\)/g) || [];
  if (notList.length > 0 && notList.some(isConcatSelector)) {
    lintWarning("Concat ':not' selector not support in legacy browsers.", info);
  }
};
/* harmony default export */ const legacyNotSelectorLinter = ((/* unused pure expression or super */ null && (legacyNotSelectorLinter_linter)));
;// ./node_modules/@ant-design/cssinjs/es/linters/logicalPropertiesLinter.js

var logicalPropertiesLinter_linter = function linter(key, value, info) {
  switch (key) {
    case 'marginLeft':
    case 'marginRight':
    case 'paddingLeft':
    case 'paddingRight':
    case 'left':
    case 'right':
    case 'borderLeft':
    case 'borderLeftWidth':
    case 'borderLeftStyle':
    case 'borderLeftColor':
    case 'borderRight':
    case 'borderRightWidth':
    case 'borderRightStyle':
    case 'borderRightColor':
    case 'borderTopLeftRadius':
    case 'borderTopRightRadius':
    case 'borderBottomLeftRadius':
    case 'borderBottomRightRadius':
      lintWarning("You seem to be using non-logical property '".concat(key, "' which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties."), info);
      return;
    case 'margin':
    case 'padding':
    case 'borderWidth':
    case 'borderStyle':
      // case 'borderColor':
      if (typeof value === 'string') {
        var valueArr = value.split(' ').map(function (item) {
          return item.trim();
        });
        if (valueArr.length === 4 && valueArr[1] !== valueArr[3]) {
          lintWarning("You seem to be using '".concat(key, "' property with different left ").concat(key, " and right ").concat(key, ", which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties."), info);
        }
      }
      return;
    case 'clear':
    case 'textAlign':
      if (value === 'left' || value === 'right') {
        lintWarning("You seem to be using non-logical value '".concat(value, "' of ").concat(key, ", which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties."), info);
      }
      return;
    case 'borderRadius':
      if (typeof value === 'string') {
        var radiusGroups = value.split('/').map(function (item) {
          return item.trim();
        });
        var invalid = radiusGroups.reduce(function (result, group) {
          if (result) {
            return result;
          }
          var radiusArr = group.split(' ').map(function (item) {
            return item.trim();
          });
          // borderRadius: '2px 4px'
          if (radiusArr.length >= 2 && radiusArr[0] !== radiusArr[1]) {
            return true;
          }
          // borderRadius: '4px 4px 2px'
          if (radiusArr.length === 3 && radiusArr[1] !== radiusArr[2]) {
            return true;
          }
          // borderRadius: '4px 4px 2px 4px'
          if (radiusArr.length === 4 && radiusArr[2] !== radiusArr[3]) {
            return true;
          }
          return result;
        }, false);
        if (invalid) {
          lintWarning("You seem to be using non-logical value '".concat(value, "' of ").concat(key, ", which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties."), info);
        }
      }
      return;
    default:
  }
};
/* harmony default export */ const logicalPropertiesLinter = ((/* unused pure expression or super */ null && (logicalPropertiesLinter_linter)));
;// ./node_modules/@ant-design/cssinjs/es/linters/parentSelectorLinter.js

var parentSelectorLinter_linter = function linter(key, value, info) {
  if (info.parentSelectors.some(function (selector) {
    var selectors = selector.split(',');
    return selectors.some(function (item) {
      return item.split('&').length > 2;
    });
  })) {
    lintWarning('Should not use more than one `&` in a selector.', info);
  }
};
/* harmony default export */ const parentSelectorLinter = ((/* unused pure expression or super */ null && (parentSelectorLinter_linter)));
;// ./node_modules/@ant-design/cssinjs/es/linters/index.js





;// ./node_modules/@ant-design/cssinjs/es/hooks/useStyleRegister.js










// @ts-ignore






var isClientSide = (0,canUseDom/* default */.A)();
var SKIP_CHECK = '_skip_check_';
var MULTI_VALUE = '_multi_value_';
// ============================================================================
// ==                                 Parser                                 ==
// ============================================================================
// Preprocessor style content to browser support one
function normalizeStyle(styleStr) {
  var serialized = serialize(compile(styleStr), stringify);
  return serialized.replace(/\{%%%\:[^;];}/g, ';');
}
function isCompoundCSSProperty(value) {
  return (0,esm_typeof/* default */.A)(value) === 'object' && value && (SKIP_CHECK in value || MULTI_VALUE in value);
}

// 注入 hash 值
function injectSelectorHash(key, hashId, hashPriority) {
  if (!hashId) {
    return key;
  }
  var hashClassName = ".".concat(hashId);
  var hashSelector = hashPriority === 'low' ? ":where(".concat(hashClassName, ")") : hashClassName;

  // 注入 hashId
  var keys = key.split(',').map(function (k) {
    var _firstPath$match;
    var fullPath = k.trim().split(/\s+/);

    // 如果 Selector 第一个是 HTML Element，那我们就插到它的后面。反之，就插到最前面。
    var firstPath = fullPath[0] || '';
    var htmlElement = ((_firstPath$match = firstPath.match(/^\w+/)) === null || _firstPath$match === void 0 ? void 0 : _firstPath$match[0]) || '';
    firstPath = "".concat(htmlElement).concat(hashSelector).concat(firstPath.slice(htmlElement.length));
    return [firstPath].concat((0,toConsumableArray/* default */.A)(fullPath.slice(1))).join(' ');
  });
  return keys.join(',');
}
// Parse CSSObject to style content
var parseStyle = function parseStyle(interpolation) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      root: true,
      parentSelectors: []
    },
    root = _ref.root,
    injectHash = _ref.injectHash,
    parentSelectors = _ref.parentSelectors;
  var hashId = config.hashId,
    layer = config.layer,
    path = config.path,
    hashPriority = config.hashPriority,
    _config$transformers = config.transformers,
    transformers = _config$transformers === void 0 ? [] : _config$transformers,
    _config$linters = config.linters,
    linters = _config$linters === void 0 ? [] : _config$linters;
  var styleStr = '';
  var effectStyle = {};
  function parseKeyframes(keyframes) {
    var animationName = keyframes.getName(hashId);
    if (!effectStyle[animationName]) {
      var _parseStyle = parseStyle(keyframes.style, config, {
          root: false,
          parentSelectors: parentSelectors
        }),
        _parseStyle2 = (0,slicedToArray/* default */.A)(_parseStyle, 1),
        _parsedStr = _parseStyle2[0];
      effectStyle[animationName] = "@keyframes ".concat(keyframes.getName(hashId)).concat(_parsedStr);
    }
  }
  function flattenList(list) {
    var fullList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    list.forEach(function (item) {
      if (Array.isArray(item)) {
        flattenList(item, fullList);
      } else if (item) {
        fullList.push(item);
      }
    });
    return fullList;
  }
  var flattenStyleList = flattenList(Array.isArray(interpolation) ? interpolation : [interpolation]);
  flattenStyleList.forEach(function (originStyle) {
    // Only root level can use raw string
    var style = typeof originStyle === 'string' && !root ? {} : originStyle;
    if (typeof style === 'string') {
      styleStr += "".concat(style, "\n");
    } else if (style._keyframe) {
      // Keyframe
      parseKeyframes(style);
    } else {
      var mergedStyle = transformers.reduce(function (prev, trans) {
        var _trans$visit;
        return (trans === null || trans === void 0 ? void 0 : (_trans$visit = trans.visit) === null || _trans$visit === void 0 ? void 0 : _trans$visit.call(trans, prev)) || prev;
      }, style);

      // Normal CSSObject
      Object.keys(mergedStyle).forEach(function (key) {
        var value = mergedStyle[key];
        if ((0,esm_typeof/* default */.A)(value) === 'object' && value && (key !== 'animationName' || !value._keyframe) && !isCompoundCSSProperty(value)) {
          var subInjectHash = false;

          // 当成嵌套对象来处理
          var mergedKey = key.trim();
          // Whether treat child as root. In most case it is false.
          var nextRoot = false;

          // 拆分多个选择器
          if ((root || injectHash) && hashId) {
            if (mergedKey.startsWith('@')) {
              // 略过媒体查询，交给子节点继续插入 hashId
              subInjectHash = true;
            } else {
              // 注入 hashId
              mergedKey = injectSelectorHash(key, hashId, hashPriority);
            }
          } else if (root && !hashId && (mergedKey === '&' || mergedKey === '')) {
            // In case of `{ '&': { a: { color: 'red' } } }` or `{ '': { a: { color: 'red' } } }` without hashId,
            // we will get `&{a:{color:red;}}` or `{a:{color:red;}}` string for stylis to compile.
            // But it does not conform to stylis syntax,
            // and finally we will get `{color:red;}` as css, which is wrong.
            // So we need to remove key in root, and treat child `{ a: { color: 'red' } }` as root.
            mergedKey = '';
            nextRoot = true;
          }
          var _parseStyle3 = parseStyle(value, config, {
              root: nextRoot,
              injectHash: subInjectHash,
              parentSelectors: [].concat((0,toConsumableArray/* default */.A)(parentSelectors), [mergedKey])
            }),
            _parseStyle4 = (0,slicedToArray/* default */.A)(_parseStyle3, 2),
            _parsedStr2 = _parseStyle4[0],
            childEffectStyle = _parseStyle4[1];
          effectStyle = (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, effectStyle), childEffectStyle);
          styleStr += "".concat(mergedKey).concat(_parsedStr2);
        } else {
          var _value;
          function appendStyle(cssKey, cssValue) {
            if (false) {}

            // 如果是样式则直接插入
            var styleName = cssKey.replace(/[A-Z]/g, function (match) {
              return "-".concat(match.toLowerCase());
            });

            // Auto suffix with px
            var formatValue = cssValue;
            if (!unitless_browser_esm[cssKey] && typeof formatValue === 'number' && formatValue !== 0) {
              formatValue = "".concat(formatValue, "px");
            }

            // handle animationName & Keyframe value
            if (cssKey === 'animationName' && cssValue !== null && cssValue !== void 0 && cssValue._keyframe) {
              parseKeyframes(cssValue);
              formatValue = cssValue.getName(hashId);
            }
            styleStr += "".concat(styleName, ":").concat(formatValue, ";");
          }
          var actualValue = (_value = value === null || value === void 0 ? void 0 : value.value) !== null && _value !== void 0 ? _value : value;
          if ((0,esm_typeof/* default */.A)(value) === 'object' && value !== null && value !== void 0 && value[MULTI_VALUE] && Array.isArray(actualValue)) {
            actualValue.forEach(function (item) {
              appendStyle(key, item);
            });
          } else {
            appendStyle(key, actualValue);
          }
        }
      });
    }
  });
  if (!root) {
    styleStr = "{".concat(styleStr, "}");
  } else if (layer && supportLayer()) {
    var layerCells = layer.split(',');
    var layerName = layerCells[layerCells.length - 1].trim();
    styleStr = "@layer ".concat(layerName, " {").concat(styleStr, "}");

    // Order of layer if needed
    if (layerCells.length > 1) {
      // zombieJ: stylis do not support layer order, so we need to handle it manually.
      styleStr = "@layer ".concat(layer, "{%%%:%}").concat(styleStr);
    }
  }
  return [styleStr, effectStyle];
};

// ============================================================================
// ==                                Register                                ==
// ============================================================================
function uniqueHash(path, styleStr) {
  return hash_browser_esm("".concat(path.join('%')).concat(styleStr));
}
function Empty() {
  return null;
}

/**
 * Register a style to the global style sheet.
 */
function useStyleRegister(info, styleFn) {
  var token = info.token,
    path = info.path,
    hashId = info.hashId,
    layer = info.layer,
    nonce = info.nonce;
  var _React$useContext = react.useContext(es_StyleContext),
    autoClear = _React$useContext.autoClear,
    mock = _React$useContext.mock,
    defaultCache = _React$useContext.defaultCache,
    hashPriority = _React$useContext.hashPriority,
    container = _React$useContext.container,
    ssrInline = _React$useContext.ssrInline,
    transformers = _React$useContext.transformers,
    linters = _React$useContext.linters,
    cache = _React$useContext.cache;
  var tokenKey = token._tokenKey;
  var fullPath = [tokenKey].concat((0,toConsumableArray/* default */.A)(path));

  // Check if need insert style
  var isMergedClientSide = isClientSide;
  if (false) {}
  var _useGlobalCache = useClientCache('style', fullPath,
    // Create cache if needed
    function () {
      var styleObj = styleFn();
      var _parseStyle5 = parseStyle(styleObj, {
          hashId: hashId,
          hashPriority: hashPriority,
          layer: layer,
          path: path.join('-'),
          transformers: transformers,
          linters: linters
        }),
        _parseStyle6 = (0,slicedToArray/* default */.A)(_parseStyle5, 2),
        parsedStyle = _parseStyle6[0],
        effectStyle = _parseStyle6[1];
      var styleStr = normalizeStyle(parsedStyle);
      var styleId = uniqueHash(fullPath, styleStr);
      if (isMergedClientSide) {
        var mergedCSSConfig = {
          mark: StyleContext_ATTR_MARK,
          prepend: 'queue',
          attachTo: container
        };
        var nonceStr = typeof nonce === 'function' ? nonce() : nonce;
        if (nonceStr) {
          mergedCSSConfig.csp = {
            nonce: nonceStr
          };
        }
        var style = (0,dynamicCSS/* updateCSS */.BD)(styleStr, styleId, mergedCSSConfig);
        style[StyleContext_CSS_IN_JS_INSTANCE] = cache.instanceId;

        // Used for `useCacheToken` to remove on batch when token removed
        style.setAttribute(StyleContext_ATTR_TOKEN, tokenKey);

        // Dev usage to find which cache path made this easily
        if (false) {}

        // Inject client side effect style
        Object.keys(effectStyle).forEach(function (effectKey) {
          (0,dynamicCSS/* updateCSS */.BD)(normalizeStyle(effectStyle[effectKey]), "_effect-".concat(effectKey), mergedCSSConfig);
        });
      }
      return [styleStr, tokenKey, styleId];
    },
    // Remove cache if no need
    function (_ref2, fromHMR) {
      var _ref3 = (0,slicedToArray/* default */.A)(_ref2, 3),
        styleId = _ref3[2];
      if ((fromHMR || autoClear) && isClientSide) {
        (0,dynamicCSS/* removeCSS */.m6)(styleId, {
          mark: StyleContext_ATTR_MARK
        });
      }
    }),
    _useGlobalCache2 = (0,slicedToArray/* default */.A)(_useGlobalCache, 3),
    cachedStyleStr = _useGlobalCache2[0],
    cachedTokenKey = _useGlobalCache2[1],
    cachedStyleId = _useGlobalCache2[2];
  return function (node) {
    var styleNode;
    if (!ssrInline || isMergedClientSide || !defaultCache) {
      styleNode = /*#__PURE__*/react.createElement(Empty, null);
    } else {
      var _ref4;
      styleNode = /*#__PURE__*/react.createElement("style", (0,esm_extends/* default */.A)({}, (_ref4 = {}, (0,defineProperty/* default */.A)(_ref4, StyleContext_ATTR_TOKEN, cachedTokenKey), (0,defineProperty/* default */.A)(_ref4, StyleContext_ATTR_MARK, cachedStyleId), _ref4), {
        dangerouslySetInnerHTML: {
          __html: cachedStyleStr
        }
      }));
    }
    return /*#__PURE__*/react.createElement(react.Fragment, null, styleNode, node);
  };
}

// ============================================================================
// ==                                  SSR                                   ==
// ============================================================================
function extractStyle(cache) {
  var plain = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  // prefix with `style` is used for `useStyleRegister` to cache style context
  var styleKeys = Array.from(cache.cache.keys()).filter(function (key) {
    return key.startsWith('style%');
  });

  // const tokenStyles: Record<string, string[]> = {};

  var styleText = '';
  styleKeys.forEach(function (key) {
    var _ = _slicedToArray(cache.cache.get(key)[1], 3),
      styleStr = _[0],
      tokenKey = _[1],
      styleId = _[2];
    styleText += plain ? styleStr : "<style ".concat(ATTR_TOKEN, "=\"").concat(tokenKey, "\" ").concat(ATTR_MARK, "=\"").concat(styleId, "\">").concat(styleStr, "</style>");
  });
  return styleText;
}
;// ./node_modules/@ant-design/cssinjs/es/Keyframes.js



var Keyframe = /*#__PURE__*/function () {
  function Keyframe(name, style) {
    (0,classCallCheck/* default */.A)(this, Keyframe);
    (0,defineProperty/* default */.A)(this, "name", void 0);
    (0,defineProperty/* default */.A)(this, "style", void 0);
    (0,defineProperty/* default */.A)(this, "_keyframe", true);
    this.name = name;
    this.style = style;
  }
  (0,createClass/* default */.A)(Keyframe, [{
    key: "getName",
    value: function getName() {
      var hashId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return hashId ? "".concat(hashId, "-").concat(this.name) : this.name;
    }
  }]);
  return Keyframe;
}();
/* harmony default export */ const Keyframes = (Keyframe);
;// ./node_modules/@ant-design/cssinjs/es/theme/ThemeCache.js




// ================================== Cache ==================================

function sameDerivativeOption(left, right) {
  if (left.length !== right.length) {
    return false;
  }
  for (var i = 0; i < left.length; i++) {
    if (left[i] !== right[i]) {
      return false;
    }
  }
  return true;
}
var ThemeCache = /*#__PURE__*/function () {
  function ThemeCache() {
    (0,classCallCheck/* default */.A)(this, ThemeCache);
    (0,defineProperty/* default */.A)(this, "cache", void 0);
    (0,defineProperty/* default */.A)(this, "keys", void 0);
    (0,defineProperty/* default */.A)(this, "cacheCallTimes", void 0);
    this.cache = new Map();
    this.keys = [];
    this.cacheCallTimes = 0;
  }
  (0,createClass/* default */.A)(ThemeCache, [{
    key: "size",
    value: function size() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function internalGet(derivativeOption) {
      var _cache2, _cache3;
      var updateCallTimes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var cache = {
        map: this.cache
      };
      derivativeOption.forEach(function (derivative) {
        if (!cache) {
          cache = undefined;
        } else {
          var _cache, _cache$map;
          cache = (_cache = cache) === null || _cache === void 0 ? void 0 : (_cache$map = _cache.map) === null || _cache$map === void 0 ? void 0 : _cache$map.get(derivative);
        }
      });
      if ((_cache2 = cache) !== null && _cache2 !== void 0 && _cache2.value && updateCallTimes) {
        cache.value[1] = this.cacheCallTimes++;
      }
      return (_cache3 = cache) === null || _cache3 === void 0 ? void 0 : _cache3.value;
    }
  }, {
    key: "get",
    value: function get(derivativeOption) {
      var _this$internalGet;
      return (_this$internalGet = this.internalGet(derivativeOption, true)) === null || _this$internalGet === void 0 ? void 0 : _this$internalGet[0];
    }
  }, {
    key: "has",
    value: function has(derivativeOption) {
      return !!this.internalGet(derivativeOption);
    }
  }, {
    key: "set",
    value: function set(derivativeOption, value) {
      var _this = this;
      // New cache
      if (!this.has(derivativeOption)) {
        if (this.size() + 1 > ThemeCache.MAX_CACHE_SIZE + ThemeCache.MAX_CACHE_OFFSET) {
          var _this$keys$reduce = this.keys.reduce(function (result, key) {
              var _result = (0,slicedToArray/* default */.A)(result, 2),
                callTimes = _result[1];
              if (_this.internalGet(key)[1] < callTimes) {
                return [key, _this.internalGet(key)[1]];
              }
              return result;
            }, [this.keys[0], this.cacheCallTimes]),
            _this$keys$reduce2 = (0,slicedToArray/* default */.A)(_this$keys$reduce, 1),
            targetKey = _this$keys$reduce2[0];
          this.delete(targetKey);
        }
        this.keys.push(derivativeOption);
      }
      var cache = this.cache;
      derivativeOption.forEach(function (derivative, index) {
        if (index === derivativeOption.length - 1) {
          cache.set(derivative, {
            value: [value, _this.cacheCallTimes++]
          });
        } else {
          var cacheValue = cache.get(derivative);
          if (!cacheValue) {
            cache.set(derivative, {
              map: new Map()
            });
          } else if (!cacheValue.map) {
            cacheValue.map = new Map();
          }
          cache = cache.get(derivative).map;
        }
      });
    }
  }, {
    key: "deleteByPath",
    value: function deleteByPath(currentCache, derivatives) {
      var cache = currentCache.get(derivatives[0]);
      if (derivatives.length === 1) {
        var _cache$value;
        if (!cache.map) {
          currentCache.delete(derivatives[0]);
        } else {
          currentCache.set(derivatives[0], {
            map: cache.map
          });
        }
        return (_cache$value = cache.value) === null || _cache$value === void 0 ? void 0 : _cache$value[0];
      }
      var result = this.deleteByPath(cache.map, derivatives.slice(1));
      if ((!cache.map || cache.map.size === 0) && !cache.value) {
        currentCache.delete(derivatives[0]);
      }
      return result;
    }
  }, {
    key: "delete",
    value: function _delete(derivativeOption) {
      // If cache exists
      if (this.has(derivativeOption)) {
        this.keys = this.keys.filter(function (item) {
          return !sameDerivativeOption(item, derivativeOption);
        });
        return this.deleteByPath(this.cache, derivativeOption);
      }
      return undefined;
    }
  }]);
  return ThemeCache;
}();
(0,defineProperty/* default */.A)(ThemeCache, "MAX_CACHE_SIZE", 20);
(0,defineProperty/* default */.A)(ThemeCache, "MAX_CACHE_OFFSET", 5);

;// ./node_modules/@ant-design/cssinjs/es/theme/Theme.js




var uuid = 0;

/**
 * Theme with algorithms to derive tokens from design tokens.
 * Use `createTheme` first which will help to manage the theme instance cache.
 */
var Theme = /*#__PURE__*/function () {
  function Theme(derivatives) {
    (0,classCallCheck/* default */.A)(this, Theme);
    (0,defineProperty/* default */.A)(this, "derivatives", void 0);
    (0,defineProperty/* default */.A)(this, "id", void 0);
    this.derivatives = Array.isArray(derivatives) ? derivatives : [derivatives];
    this.id = uuid;
    if (derivatives.length === 0) {
      (0,warning/* warning */.$e)(derivatives.length > 0, '[Ant Design CSS-in-JS] Theme should have at least one derivative function.');
    }
    uuid += 1;
  }
  (0,createClass/* default */.A)(Theme, [{
    key: "getDerivativeToken",
    value: function getDerivativeToken(token) {
      return this.derivatives.reduce(function (result, derivative) {
        return derivative(token, result);
      }, undefined);
    }
  }]);
  return Theme;
}();

;// ./node_modules/@ant-design/cssinjs/es/theme/createTheme.js


var cacheThemes = new ThemeCache();

/**
 * Same as new Theme, but will always return same one if `derivative` not changed.
 */
function createTheme(derivatives) {
  var derivativeArr = Array.isArray(derivatives) ? derivatives : [derivatives];
  // Create new theme if not exist
  if (!cacheThemes.has(derivativeArr)) {
    cacheThemes.set(derivativeArr, new Theme(derivativeArr));
  }

  // Get theme from cache and return
  return cacheThemes.get(derivativeArr);
}
;// ./node_modules/@ant-design/cssinjs/es/theme/index.js



;// ./node_modules/@ant-design/cssinjs/es/transformers/legacyLogicalProperties.js

function splitValues(value) {
  if (typeof value === 'number') {
    return [[value], false];
  }
  var rawStyle = String(value).trim();
  var importantCells = rawStyle.match(/(.*)(!important)/);
  var splitStyle = (importantCells ? importantCells[1] : rawStyle).trim().split(/\s+/);

  // Combine styles split in brackets, like `calc(1px + 2px)`
  var temp = '';
  var brackets = 0;
  return [splitStyle.reduce(function (list, item) {
    if (item.includes('(')) {
      temp += item;
      brackets += item.split('(').length - 1;
    } else if (item.includes(')')) {
      temp += item;
      brackets -= item.split(')').length - 1;
      if (brackets === 0) {
        list.push(temp);
        temp = '';
      }
    } else if (brackets > 0) {
      temp += item;
    } else {
      list.push(item);
    }
    return list;
  }, []), !!importantCells];
}
function noSplit(list) {
  list.notSplit = true;
  return list;
}
var keyMap = {
  // Inset
  inset: ['top', 'right', 'bottom', 'left'],
  insetBlock: ['top', 'bottom'],
  insetBlockStart: ['top'],
  insetBlockEnd: ['bottom'],
  insetInline: ['left', 'right'],
  insetInlineStart: ['left'],
  insetInlineEnd: ['right'],
  // Margin
  marginBlock: ['marginTop', 'marginBottom'],
  marginBlockStart: ['marginTop'],
  marginBlockEnd: ['marginBottom'],
  marginInline: ['marginLeft', 'marginRight'],
  marginInlineStart: ['marginLeft'],
  marginInlineEnd: ['marginRight'],
  // Padding
  paddingBlock: ['paddingTop', 'paddingBottom'],
  paddingBlockStart: ['paddingTop'],
  paddingBlockEnd: ['paddingBottom'],
  paddingInline: ['paddingLeft', 'paddingRight'],
  paddingInlineStart: ['paddingLeft'],
  paddingInlineEnd: ['paddingRight'],
  // Border
  borderBlock: noSplit(['borderTop', 'borderBottom']),
  borderBlockStart: noSplit(['borderTop']),
  borderBlockEnd: noSplit(['borderBottom']),
  borderInline: noSplit(['borderLeft', 'borderRight']),
  borderInlineStart: noSplit(['borderLeft']),
  borderInlineEnd: noSplit(['borderRight']),
  // Border width
  borderBlockWidth: ['borderTopWidth', 'borderBottomWidth'],
  borderBlockStartWidth: ['borderTopWidth'],
  borderBlockEndWidth: ['borderBottomWidth'],
  borderInlineWidth: ['borderLeftWidth', 'borderRightWidth'],
  borderInlineStartWidth: ['borderLeftWidth'],
  borderInlineEndWidth: ['borderRightWidth'],
  // Border style
  borderBlockStyle: ['borderTopStyle', 'borderBottomStyle'],
  borderBlockStartStyle: ['borderTopStyle'],
  borderBlockEndStyle: ['borderBottomStyle'],
  borderInlineStyle: ['borderLeftStyle', 'borderRightStyle'],
  borderInlineStartStyle: ['borderLeftStyle'],
  borderInlineEndStyle: ['borderRightStyle'],
  // Border color
  borderBlockColor: ['borderTopColor', 'borderBottomColor'],
  borderBlockStartColor: ['borderTopColor'],
  borderBlockEndColor: ['borderBottomColor'],
  borderInlineColor: ['borderLeftColor', 'borderRightColor'],
  borderInlineStartColor: ['borderLeftColor'],
  borderInlineEndColor: ['borderRightColor'],
  // Border radius
  borderStartStartRadius: ['borderTopLeftRadius'],
  borderStartEndRadius: ['borderTopRightRadius'],
  borderEndStartRadius: ['borderBottomLeftRadius'],
  borderEndEndRadius: ['borderBottomRightRadius']
};
function wrapImportantAndSkipCheck(value, important) {
  var parsedValue = value;
  if (important) {
    parsedValue = "".concat(parsedValue, " !important");
  }
  return {
    _skip_check_: true,
    value: parsedValue
  };
}

/**
 * Convert css logical properties to legacy properties.
 * Such as: `margin-block-start` to `margin-top`.
 * Transform list:
 * - inset
 * - margin
 * - padding
 * - border
 */
var transform = {
  visit: function visit(cssObj) {
    var clone = {};
    Object.keys(cssObj).forEach(function (key) {
      var value = cssObj[key];
      var matchValue = keyMap[key];
      if (matchValue && (typeof value === 'number' || typeof value === 'string')) {
        var _splitValues = splitValues(value),
          _splitValues2 = (0,slicedToArray/* default */.A)(_splitValues, 2),
          _values = _splitValues2[0],
          _important = _splitValues2[1];
        if (matchValue.length && matchValue.notSplit) {
          // not split means always give same value like border
          matchValue.forEach(function (matchKey) {
            clone[matchKey] = wrapImportantAndSkipCheck(value, _important);
          });
        } else if (matchValue.length === 1) {
          // Handle like `marginBlockStart` => `marginTop`
          clone[matchValue[0]] = wrapImportantAndSkipCheck(value, _important);
        } else if (matchValue.length === 2) {
          // Handle like `marginBlock` => `marginTop` & `marginBottom`
          matchValue.forEach(function (matchKey, index) {
            var _values$index;
            clone[matchKey] = wrapImportantAndSkipCheck((_values$index = _values[index]) !== null && _values$index !== void 0 ? _values$index : _values[0], _important);
          });
        } else if (matchValue.length === 4) {
          // Handle like `inset` => `top` & `right` & `bottom` & `left`
          matchValue.forEach(function (matchKey, index) {
            var _ref, _values$index2;
            clone[matchKey] = wrapImportantAndSkipCheck((_ref = (_values$index2 = _values[index]) !== null && _values$index2 !== void 0 ? _values$index2 : _values[index - 2]) !== null && _ref !== void 0 ? _ref : _values[0], _important);
          });
        } else {
          clone[key] = value;
        }
      } else {
        clone[key] = value;
      }
    });
    return clone;
  }
};
/* harmony default export */ const legacyLogicalProperties = ((/* unused pure expression or super */ null && (transform)));
;// ./node_modules/@ant-design/cssinjs/es/transformers/px2rem.js


/**
 * respect https://github.com/cuth/postcss-pxtorem
 */

var pxRegex = /url\([^)]+\)|var\([^)]+\)|(\d*\.?\d+)px/g;
function toFixed(number, precision) {
  var multiplier = Math.pow(10, precision + 1),
    wholeNumber = Math.floor(number * multiplier);
  return Math.round(wholeNumber / 10) * 10 / multiplier;
}
var px2rem_transform = function transform() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$rootValue = options.rootValue,
    rootValue = _options$rootValue === void 0 ? 16 : _options$rootValue,
    _options$precision = options.precision,
    precision = _options$precision === void 0 ? 5 : _options$precision,
    _options$mediaQuery = options.mediaQuery,
    mediaQuery = _options$mediaQuery === void 0 ? false : _options$mediaQuery;
  var pxReplace = function pxReplace(m, $1) {
    if (!$1) return m;
    var pixels = parseFloat($1);
    // covenant: pixels <= 1, not transform to rem @zombieJ
    if (pixels <= 1) return m;
    var fixedVal = toFixed(pixels / rootValue, precision);
    return "".concat(fixedVal, "rem");
  };
  var visit = function visit(cssObj) {
    var clone = _objectSpread({}, cssObj);
    Object.entries(cssObj).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];
      if (typeof value === 'string' && value.includes('px')) {
        var newValue = value.replace(pxRegex, pxReplace);
        clone[key] = newValue;
      }

      // no unit
      if (!unitless[key] && typeof value === 'number' && value !== 0) {
        clone[key] = "".concat(value, "px").replace(pxRegex, pxReplace);
      }

      // Media queries
      var mergedKey = key.trim();
      if (mergedKey.startsWith('@') && mergedKey.includes('px') && mediaQuery) {
        var newKey = key.replace(pxRegex, pxReplace);
        clone[newKey] = clone[key];
        delete clone[key];
      }
    });
    return clone;
  };
  return {
    visit: visit
  };
};
/* harmony default export */ const px2rem = ((/* unused pure expression or super */ null && (px2rem_transform)));
;// ./node_modules/@ant-design/cssinjs/es/index.js










/***/ }),

/***/ 60359:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Y1: () => (/* binding */ operationUnit),
  dF: () => (/* binding */ resetComponent),
  X3: () => (/* binding */ useStyle)
});

// UNUSED EXPORTS: lighten, proTheme, setAlpha, useToken

// NAMESPACE OBJECT: ./node_modules/@ant-design/pro-provider/es/useStyle/token.js
var token_namespaceObject = {};
__webpack_require__.r(token_namespaceObject);
__webpack_require__.d(token_namespaceObject, {
  defaultToken: () => (token_defaultToken),
  emptyTheme: () => (emptyTheme),
  hashCode: () => (hashCode),
  token: () => (token),
  useToken: () => (useToken)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/@ant-design/cssinjs/es/index.js + 28 modules
var es = __webpack_require__(78205);
;// ./node_modules/antd/es/index.js
// Fix vite build error
var theme = null;


































































// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/index.js + 2 modules
var config_provider = __webpack_require__(98022);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./node_modules/use-sync-external-store/shim/index.js
var shim = __webpack_require__(6538);
;// ./node_modules/swr/_internal/dist/index.mjs



// Shared state between server components and client components
const noop = () => {};
// Using noop() as the undefined value as undefined can be replaced
// by something else. Prettier ignore and extra parentheses are necessary here
// to ensure that tsc doesn't remove the __NOINLINE__ comment.
// prettier-ignore
const UNDEFINED = /*#__NOINLINE__*/noop();
const OBJECT = Object;
const isUndefined = v => v === UNDEFINED;
const isFunction = v => typeof v == 'function';
const mergeObjects = (a, b) => (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, a), b);
const isPromiseLike = x => isFunction(x.then);

// use WeakMap to store the object->key mapping
// so the objects can be garbage collected.
// WeakMap uses a hashtable under the hood, so the lookup
// complexity is almost O(1).
const table = new WeakMap();
// counter of the key
let counter = 0;
// A stable hash implementation that supports:
// - Fast and ensures unique hash properties
// - Handles unserializable values
// - Handles object key ordering
// - Generates short results
//
// This is not a serialization function, and the result is not guaranteed to be
// parsable.
const stableHash = arg => {
  const type = typeof arg;
  const constructor = arg && arg.constructor;
  const isDate = constructor == Date;
  let result;
  let index;
  if (OBJECT(arg) === arg && !isDate && constructor != RegExp) {
    // Object/function, not null/date/regexp. Use WeakMap to store the id first.
    // If it's already hashed, directly return the result.
    result = table.get(arg);
    if (result) return result;
    // Store the hash first for circular reference detection before entering the
    // recursive `stableHash` calls.
    // For other objects like set and map, we use this id directly as the hash.
    result = ++counter + '~';
    table.set(arg, result);
    if (constructor == Array) {
      // Array.
      result = '@';
      for (index = 0; index < arg.length; index++) {
        result += stableHash(arg[index]) + ',';
      }
      table.set(arg, result);
    }
    if (constructor == OBJECT) {
      // Object, sort keys.
      result = '#';
      const keys = OBJECT.keys(arg).sort();
      while (!isUndefined(index = keys.pop())) {
        if (!isUndefined(arg[index])) {
          result += index + ':' + stableHash(arg[index]) + ',';
        }
      }
      table.set(arg, result);
    }
  } else {
    result = isDate ? arg.toJSON() : type == 'symbol' ? arg.toString() : type == 'string' ? JSON.stringify(arg) : '' + arg;
  }
  return result;
};

// Global state used to deduplicate requests and store listeners
const SWRGlobalState = new WeakMap();
const EMPTY_CACHE = {};
const INITIAL_CACHE = {};
const STR_UNDEFINED = 'undefined';
// NOTE: Use the function to guarantee it's re-evaluated between jsdom and node runtime for tests.
const isWindowDefined = typeof window != STR_UNDEFINED;
const isDocumentDefined = typeof document != STR_UNDEFINED;
const hasRequestAnimationFrame = () => isWindowDefined && typeof window['requestAnimationFrame'] != STR_UNDEFINED;
const createCacheHelper = (cache, key) => {
  const state = SWRGlobalState.get(cache);
  return [
  // Getter
  () => !isUndefined(key) && cache.get(key) || EMPTY_CACHE,
  // Setter
  info => {
    if (!isUndefined(key)) {
      const prev = cache.get(key);
      // Before writing to the store, we keep the value in the initial cache
      // if it's not there yet.
      if (!(key in INITIAL_CACHE)) {
        INITIAL_CACHE[key] = prev;
      }
      state[5](key, mergeObjects(prev, info), prev || EMPTY_CACHE);
    }
  },
  // Subscriber
  state[6],
  // Get server cache snapshot
  () => {
    if (!isUndefined(key)) {
      // If the cache was updated on the client, we return the stored initial value.
      if (key in INITIAL_CACHE) return INITIAL_CACHE[key];
    }
    // If we haven't done any client-side updates, we return the current value.
    return !isUndefined(key) && cache.get(key) || EMPTY_CACHE;
  }];
} // export { UNDEFINED, OBJECT, isUndefined, isFunction, mergeObjects, isPromiseLike }
;

/**
 * Due to the bug https://bugs.chromium.org/p/chromium/issues/detail?id=678075,
 * it's not reliable to detect if the browser is currently online or offline
 * based on `navigator.onLine`.
 * As a workaround, we always assume it's online on the first load, and change
 * the status upon `online` or `offline` events.
 */
let online = true;
const isOnline = () => online;
// For node and React Native, `add/removeEventListener` doesn't exist on window.
const [onWindowEvent, offWindowEvent] = isWindowDefined && window.addEventListener ? [window.addEventListener.bind(window), window.removeEventListener.bind(window)] : [noop, noop];
const isVisible = () => {
  const visibilityState = isDocumentDefined && document.visibilityState;
  return isUndefined(visibilityState) || visibilityState !== 'hidden';
};
const initFocus = callback => {
  // focus revalidate
  if (isDocumentDefined) {
    document.addEventListener('visibilitychange', callback);
  }
  onWindowEvent('focus', callback);
  return () => {
    if (isDocumentDefined) {
      document.removeEventListener('visibilitychange', callback);
    }
    offWindowEvent('focus', callback);
  };
};
const initReconnect = callback => {
  // revalidate on reconnected
  const onOnline = () => {
    online = true;
    callback();
  };
  // nothing to revalidate, just update the status
  const onOffline = () => {
    online = false;
  };
  onWindowEvent('online', onOnline);
  onWindowEvent('offline', onOffline);
  return () => {
    offWindowEvent('online', onOnline);
    offWindowEvent('offline', onOffline);
  };
};
const preset = {
  isOnline,
  isVisible
};
const defaultConfigOptions = {
  initFocus,
  initReconnect
};
const IS_REACT_LEGACY = !react.useId;
const IS_SERVER = !isWindowDefined || 'Deno' in window;
// Polyfill requestAnimationFrame
const rAF = f => hasRequestAnimationFrame() ? window['requestAnimationFrame'](f) : setTimeout(f, 1);
// React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser.
const useIsomorphicLayoutEffect = IS_SERVER ? react.useEffect : react.useLayoutEffect;
// This assignment is to extend the Navigator type to use effectiveType.
const navigatorConnection = typeof navigator !== 'undefined' && navigator.connection;
// Adjust the config based on slow connection status (<= 70Kbps).
const slowConnection = !IS_SERVER && navigatorConnection && (['slow-2g', '2g'].includes(navigatorConnection.effectiveType) || navigatorConnection.saveData);
const dist_serialize = key => {
  if (isFunction(key)) {
    try {
      key = key();
    } catch (err) {
      // dependencies not ready
      key = '';
    }
  }
  // Use the original key as the argument of fetcher. This can be a string or an
  // array of values.
  const args = key;
  // If key is not falsy, or not an empty array, hash it.
  key = typeof key == 'string' ? key : (Array.isArray(key) ? key.length : key) ? stableHash(key) : '';
  return [key, args];
};

// Global timestamp.
let __timestamp = 0;
const getTimestamp = () => ++__timestamp;
const FOCUS_EVENT = 0;
const RECONNECT_EVENT = 1;
const MUTATE_EVENT = 2;
const ERROR_REVALIDATE_EVENT = 3;
var constants = {
  __proto__: null,
  ERROR_REVALIDATE_EVENT: ERROR_REVALIDATE_EVENT,
  FOCUS_EVENT: FOCUS_EVENT,
  MUTATE_EVENT: MUTATE_EVENT,
  RECONNECT_EVENT: RECONNECT_EVENT
};
async function internalMutate() {
  for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
    args[_key2] = arguments[_key2];
  }
  const [cache, _key, _data, _opts] = args;
  // When passing as a boolean, it's explicitly used to disable/enable
  // revalidation.
  const options = mergeObjects({
    populateCache: true,
    throwOnError: true
  }, typeof _opts === 'boolean' ? {
    revalidate: _opts
  } : _opts || {});
  let populateCache = options.populateCache;
  const rollbackOnErrorOption = options.rollbackOnError;
  let optimisticData = options.optimisticData;
  const revalidate = options.revalidate !== false;
  const rollbackOnError = error => {
    return typeof rollbackOnErrorOption === 'function' ? rollbackOnErrorOption(error) : rollbackOnErrorOption !== false;
  };
  const throwOnError = options.throwOnError;
  // If the second argument is a key filter, return the mutation results for all
  // filtered keys.
  if (isFunction(_key)) {
    const keyFilter = _key;
    const matchedKeys = [];
    const it = cache.keys();
    for (const key of it) {
      if (
      // Skip the special useSWRInfinite and useSWRSubscription keys.
      !/^\$(inf|sub)\$/.test(key) && keyFilter(cache.get(key)._k)) {
        matchedKeys.push(key);
      }
    }
    return Promise.all(matchedKeys.map(mutateByKey));
  }
  return mutateByKey(_key);
  async function mutateByKey(_k) {
    // Serialize key
    const [key] = dist_serialize(_k);
    if (!key) return;
    const [get, set] = createCacheHelper(cache, key);
    const [EVENT_REVALIDATORS, MUTATION, FETCH, PRELOAD] = SWRGlobalState.get(cache);
    const revalidators = EVENT_REVALIDATORS[key];
    const startRevalidate = () => {
      if (revalidate) {
        // Invalidate the key by deleting the concurrent request markers so new
        // requests will not be deduped.
        delete FETCH[key];
        delete PRELOAD[key];
        if (revalidators && revalidators[0]) {
          return revalidators[0](MUTATE_EVENT).then(() => get().data);
        }
      }
      return get().data;
    };
    // If there is no new data provided, revalidate the key with current state.
    if (args.length < 3) {
      // Revalidate and broadcast state.
      return startRevalidate();
    }
    let data = _data;
    let error;
    // Update global timestamps.
    const beforeMutationTs = getTimestamp();
    MUTATION[key] = [beforeMutationTs, 0];
    const hasOptimisticData = !isUndefined(optimisticData);
    const state = get();
    // `displayedData` is the current value on screen. It could be the optimistic value
    // that is going to be overridden by a `committedData`, or get reverted back.
    // `committedData` is the validated value that comes from a fetch or mutation.
    const displayedData = state.data;
    const currentData = state._c;
    const committedData = isUndefined(currentData) ? displayedData : currentData;
    // Do optimistic data update.
    if (hasOptimisticData) {
      optimisticData = isFunction(optimisticData) ? optimisticData(committedData, displayedData) : optimisticData;
      // When we set optimistic data, backup the current committedData data in `_c`.
      set({
        data: optimisticData,
        _c: committedData
      });
    }
    if (isFunction(data)) {
      // `data` is a function, call it passing current cache value.
      try {
        data = data(committedData);
      } catch (err) {
        // If it throws an error synchronously, we shouldn't update the cache.
        error = err;
      }
    }
    // `data` is a promise/thenable, resolve the final data first.
    if (data && isPromiseLike(data)) {
      // This means that the mutation is async, we need to check timestamps to
      // avoid race conditions.
      data = await data.catch(err => {
        error = err;
      });
      // Check if other mutations have occurred since we've started this mutation.
      // If there's a race we don't update cache or broadcast the change,
      // just return the data.
      if (beforeMutationTs !== MUTATION[key][0]) {
        if (error) throw error;
        return data;
      } else if (error && hasOptimisticData && rollbackOnError(error)) {
        // Rollback. Always populate the cache in this case but without
        // transforming the data.
        populateCache = true;
        data = committedData;
        // Reset data to be the latest committed data, and clear the `_c` value.
        set({
          data,
          _c: UNDEFINED
        });
      }
    }
    // If we should write back the cache after request.
    if (populateCache) {
      if (!error) {
        // Transform the result into data.
        if (isFunction(populateCache)) {
          data = populateCache(data, committedData);
        }
        // Only update cached data and reset the error if there's no error. Data can be `undefined` here.
        set({
          data,
          error: UNDEFINED,
          _c: UNDEFINED
        });
      }
    }
    // Reset the timestamp to mark the mutation has ended.
    MUTATION[key][1] = getTimestamp();
    // Update existing SWR Hooks' internal states:
    const res = await startRevalidate();
    // The mutation and revalidation are ended, we can clear it since the data is
    // not an optimistic value anymore.
    set({
      _c: UNDEFINED
    });
    // Throw error or return data
    if (error) {
      if (throwOnError) throw error;
      return;
    }
    return populateCache ? res : data;
  }
}
const revalidateAllKeys = (revalidators, type) => {
  for (const key in revalidators) {
    if (revalidators[key][0]) revalidators[key][0](type);
  }
};
const initCache = (provider, options) => {
  // The global state for a specific provider will be used to deduplicate
  // requests and store listeners. As well as a mutate function that is bound to
  // the cache.
  // The provider's global state might be already initialized. Let's try to get the
  // global state associated with the provider first.
  if (!SWRGlobalState.has(provider)) {
    const opts = mergeObjects(defaultConfigOptions, options);
    // If there's no global state bound to the provider, create a new one with the
    // new mutate function.
    const EVENT_REVALIDATORS = {};
    const mutate = internalMutate.bind(UNDEFINED, provider);
    let unmount = noop;
    const subscriptions = {};
    const subscribe = (key, callback) => {
      const subs = subscriptions[key] || [];
      subscriptions[key] = subs;
      subs.push(callback);
      return () => subs.splice(subs.indexOf(callback), 1);
    };
    const setter = (key, value, prev) => {
      provider.set(key, value);
      const subs = subscriptions[key];
      if (subs) {
        for (const fn of subs) {
          fn(value, prev);
        }
      }
    };
    const initProvider = () => {
      if (!SWRGlobalState.has(provider)) {
        // Update the state if it's new, or if the provider has been extended.
        SWRGlobalState.set(provider, [EVENT_REVALIDATORS, {}, {}, {}, mutate, setter, subscribe]);
        if (!IS_SERVER) {
          // When listening to the native events for auto revalidations,
          // we intentionally put a delay (setTimeout) here to make sure they are
          // fired after immediate JavaScript executions, which can be
          // React's state updates.
          // This avoids some unnecessary revalidations such as
          // https://github.com/vercel/swr/issues/1680.
          const releaseFocus = opts.initFocus(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, FOCUS_EVENT)));
          const releaseReconnect = opts.initReconnect(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, RECONNECT_EVENT)));
          unmount = () => {
            releaseFocus && releaseFocus();
            releaseReconnect && releaseReconnect();
            // When un-mounting, we need to remove the cache provider from the state
            // storage too because it's a side-effect. Otherwise, when re-mounting we
            // will not re-register those event listeners.
            SWRGlobalState.delete(provider);
          };
        }
      }
    };
    initProvider();
    // This is a new provider, we need to initialize it and setup DOM events
    // listeners for `focus` and `reconnect` actions.
    // We might want to inject an extra layer on top of `provider` in the future,
    // such as key serialization, auto GC, etc.
    // For now, it's just a `Map` interface without any modifications.
    return [provider, mutate, initProvider, unmount];
  }
  return [provider, SWRGlobalState.get(provider)[4]];
};

// error retry
const onErrorRetry = (_, __, config, revalidate, opts) => {
  const maxRetryCount = config.errorRetryCount;
  const currentRetryCount = opts.retryCount;
  // Exponential backoff
  const timeout = ~~((Math.random() + 0.5) * (1 << (currentRetryCount < 8 ? currentRetryCount : 8))) * config.errorRetryInterval;
  if (!isUndefined(maxRetryCount) && currentRetryCount > maxRetryCount) {
    return;
  }
  setTimeout(revalidate, timeout, opts);
};
const compare = (currentData, newData) => stableHash(currentData) == stableHash(newData);
// Default cache provider
const [cache, mutate] = initCache(new Map());
// Default config
const defaultConfig = mergeObjects({
  // events
  onLoadingSlow: noop,
  onSuccess: noop,
  onError: noop,
  onErrorRetry,
  onDiscarded: noop,
  // switches
  revalidateOnFocus: true,
  revalidateOnReconnect: true,
  revalidateIfStale: true,
  shouldRetryOnError: true,
  // timeouts
  errorRetryInterval: slowConnection ? 10000 : 5000,
  focusThrottleInterval: 5 * 1000,
  dedupingInterval: 2 * 1000,
  loadingTimeout: slowConnection ? 5000 : 3000,
  // providers
  compare,
  isPaused: () => false,
  cache,
  mutate,
  fallback: {}
},
// use web preset by default
preset);
const mergeConfigs = (a, b) => {
  // Need to create a new object to avoid mutating the original here.
  const v = mergeObjects(a, b);
  // If two configs are provided, merge their `use` and `fallback` options.
  if (b) {
    const {
      use: u1,
      fallback: f1
    } = a;
    const {
      use: u2,
      fallback: f2
    } = b;
    if (u1 && u2) {
      v.use = u1.concat(u2);
    }
    if (f1 && f2) {
      v.fallback = mergeObjects(f1, f2);
    }
  }
  return v;
};
const SWRConfigContext = (0,react.createContext)({});
const dist_SWRConfig = props => {
  const {
    value
  } = props;
  const parentConfig = (0,react.useContext)(SWRConfigContext);
  const isFunctionalConfig = isFunction(value);
  const config = (0,react.useMemo)(() => isFunctionalConfig ? value(parentConfig) : value, [isFunctionalConfig, parentConfig, value]);
  // Extend parent context values and middleware.
  const extendedConfig = (0,react.useMemo)(() => isFunctionalConfig ? config : mergeConfigs(parentConfig, config), [isFunctionalConfig, parentConfig, config]);
  // Should not use the inherited provider.
  const provider = config && config.provider;
  // initialize the cache only on first access.
  const cacheContextRef = (0,react.useRef)(UNDEFINED);
  if (provider && !cacheContextRef.current) {
    cacheContextRef.current = initCache(provider(extendedConfig.cache || cache), config);
  }
  const cacheContext = cacheContextRef.current;
  // Override the cache if a new provider is given.
  if (cacheContext) {
    extendedConfig.cache = cacheContext[0];
    extendedConfig.mutate = cacheContext[1];
  }
  // Unsubscribe events.
  useIsomorphicLayoutEffect(() => {
    if (cacheContext) {
      cacheContext[2] && cacheContext[2]();
      return cacheContext[3];
    }
  }, []);
  return (0,react.createElement)(SWRConfigContext.Provider, mergeObjects(props, {
    value: extendedConfig
  }));
};

// @ts-expect-error
const enableDevtools = isWindowDefined && window.__SWR_DEVTOOLS_USE__;
const use = enableDevtools ? window.__SWR_DEVTOOLS_USE__ : [];
const setupDevTools = () => {
  if (enableDevtools) {
    // @ts-expect-error
    window.__SWR_DEVTOOLS_REACT__ = react;
  }
};
const normalize = args => {
  return isFunction(args[1]) ? [args[0], args[1], args[2] || {}] : [args[0], null, (args[1] === null ? args[2] : args[1]) || {}];
};
const dist_useSWRConfig = () => {
  return mergeObjects(defaultConfig, (0,react.useContext)(SWRConfigContext));
};
const preload = (key_, fetcher) => {
  const [key, fnArg] = dist_serialize(key_);
  const [,,, PRELOAD] = SWRGlobalState.get(cache);
  // Prevent preload to be called multiple times before used.
  if (PRELOAD[key]) return PRELOAD[key];
  const req = fetcher(fnArg);
  PRELOAD[key] = req;
  return req;
};
const middleware = useSWRNext => (key_, fetcher_, config) => {
  // fetcher might be a sync function, so this should not be an async function
  const fetcher = fetcher_ && function () {
    const [key] = dist_serialize(key_);
    const [,,, PRELOAD] = SWRGlobalState.get(cache);
    const req = PRELOAD[key];
    if (isUndefined(req)) return fetcher_(...arguments);
    delete PRELOAD[key];
    return req;
  };
  return useSWRNext(key_, fetcher, config);
};
const BUILT_IN_MIDDLEWARE = use.concat(middleware);

// It's tricky to pass generic types as parameters, so we just directly override
// the types here.
const withArgs = hook => {
  return function useSWRArgs() {
    // Get the default and inherited configuration.
    const fallbackConfig = dist_useSWRConfig();
    // Normalize arguments.
    for (var _len2 = arguments.length, args = new Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
      args[_key3] = arguments[_key3];
    }
    const [key, fn, _config] = normalize(args);
    // Merge configurations.
    const config = mergeConfigs(fallbackConfig, _config);
    // Apply middleware
    let next = hook;
    const {
      use
    } = config;
    const middleware = (use || []).concat(BUILT_IN_MIDDLEWARE);
    for (let i = middleware.length; i--;) {
      next = middleware[i](next);
    }
    return next(key, fn || config.fetcher || null, config);
  };
};

/**
 * An implementation of state with dependency-tracking.
 */
const useStateWithDeps = state => {
  const rerender = useState({})[1];
  const unmountedRef = useRef(false);
  const stateRef = useRef(state);
  // If a state property (data, error, or isValidating) is accessed by the render
  // function, we mark the property as a dependency so if it is updated again
  // in the future, we trigger a rerender.
  // This is also known as dependency-tracking.
  const stateDependenciesRef = useRef({
    data: false,
    error: false,
    isValidating: false
  });
  /**
  * @param payload To change stateRef, pass the values explicitly to setState:
  * @example
  * ```js
  * setState({
  *   isValidating: false
  *   data: newData // set data to newData
  *   error: undefined // set error to undefined
  * })
  *
  * setState({
  *   isValidating: false
  *   data: undefined // set data to undefined
  *   error: err // set error to err
  * })
  * ```
  */
  const setState = useCallback(payload => {
    let shouldRerender = false;
    const currentState = stateRef.current;
    for (const _ in payload) {
      const k = _;
      // If the property has changed, update the state and mark rerender as
      // needed.
      if (currentState[k] !== payload[k]) {
        currentState[k] = payload[k];
        // If the property is accessed by the component, a rerender should be
        // triggered.
        if (stateDependenciesRef.current[k]) {
          shouldRerender = true;
        }
      }
    }
    if (shouldRerender && !unmountedRef.current) {
      if (IS_REACT_LEGACY) {
        rerender({});
      } else {
        React.startTransition(() => rerender({}));
      }
    }
  }, [rerender]);
  useIsomorphicLayoutEffect(() => {
    unmountedRef.current = false;
    return () => {
      unmountedRef.current = true;
    };
  });
  return [stateRef, stateDependenciesRef.current, setState];
};

// Add a callback function to a list of keyed callback functions and return
// the unsubscribe function.
const subscribeCallback = (key, callbacks, callback) => {
  const keyedRevalidators = callbacks[key] || (callbacks[key] = []);
  keyedRevalidators.push(callback);
  return () => {
    const index = keyedRevalidators.indexOf(callback);
    if (index >= 0) {
      // O(1): faster than splice
      keyedRevalidators[index] = keyedRevalidators[keyedRevalidators.length - 1];
      keyedRevalidators.pop();
    }
  };
};

// Create a custom hook with a middleware
const withMiddleware = (useSWR, middleware) => {
  return function () {
    for (var _len3 = arguments.length, args = new Array(_len3), _key4 = 0; _key4 < _len3; _key4++) {
      args[_key4] = arguments[_key4];
    }
    const [key, fn, config] = normalize(args);
    const uses = (config.use || []).concat(middleware);
    return useSWR(key, fn, _objectSpread(_objectSpread({}, config), {}, {
      use: uses
    }));
  };
};
setupDevTools();

;// ./node_modules/swr/core/dist/index.mjs





const unstable_serialize = key => serialize(key)[0];

/// <reference types="react/experimental" />
const dist_use = react.use || (promise => {
  if (promise.status === 'pending') {
    throw promise;
  } else if (promise.status === 'fulfilled') {
    return promise.value;
  } else if (promise.status === 'rejected') {
    throw promise.reason;
  } else {
    promise.status = 'pending';
    promise.then(v => {
      promise.status = 'fulfilled';
      promise.value = v;
    }, e => {
      promise.status = 'rejected';
      promise.reason = e;
    });
    throw promise;
  }
});
const WITH_DEDUPE = {
  dedupe: true
};
const useSWRHandler = (_key, fetcher, config) => {
  const {
    cache,
    compare,
    suspense,
    fallbackData,
    revalidateOnMount,
    revalidateIfStale,
    refreshInterval,
    refreshWhenHidden,
    refreshWhenOffline,
    keepPreviousData
  } = config;
  const [EVENT_REVALIDATORS, MUTATION, FETCH, PRELOAD] = SWRGlobalState.get(cache);
  // `key` is the identifier of the SWR internal state,
  // `fnArg` is the argument/arguments parsed from the key, which will be passed
  // to the fetcher.
  // All of them are derived from `_key`.
  const [key, fnArg] = dist_serialize(_key);
  // If it's the initial render of this hook.
  const initialMountedRef = (0,react.useRef)(false);
  // If the hook is unmounted already. This will be used to prevent some effects
  // to be called after unmounting.
  const unmountedRef = (0,react.useRef)(false);
  // Refs to keep the key and config.
  const keyRef = (0,react.useRef)(key);
  const fetcherRef = (0,react.useRef)(fetcher);
  const configRef = (0,react.useRef)(config);
  const getConfig = () => configRef.current;
  const isActive = () => getConfig().isVisible() && getConfig().isOnline();
  const [getCache, setCache, subscribeCache, getInitialCache] = createCacheHelper(cache, key);
  const stateDependencies = (0,react.useRef)({}).current;
  const fallback = isUndefined(fallbackData) ? config.fallback[key] : fallbackData;
  const isEqual = (prev, current) => {
    for (const _ in stateDependencies) {
      const t = _;
      if (t === 'data') {
        if (!compare(prev[t], current[t])) {
          if (!isUndefined(prev[t])) {
            return false;
          }
          if (!compare(returnedData, current[t])) {
            return false;
          }
        }
      } else {
        if (current[t] !== prev[t]) {
          return false;
        }
      }
    }
    return true;
  };
  const getSnapshot = (0,react.useMemo)(() => {
    const shouldStartRequest = (() => {
      if (!key) return false;
      if (!fetcher) return false;
      // If `revalidateOnMount` is set, we take the value directly.
      if (!isUndefined(revalidateOnMount)) return revalidateOnMount;
      // If it's paused, we skip revalidation.
      if (getConfig().isPaused()) return false;
      if (suspense) return false;
      if (!isUndefined(revalidateIfStale)) return revalidateIfStale;
      return true;
    })();
    // Get the cache and merge it with expected states.
    const getSelectedCache = state => {
      // We only select the needed fields from the state.
      const snapshot = mergeObjects(state);
      delete snapshot._k;
      if (!shouldStartRequest) {
        return snapshot;
      }
      return (0,objectSpread2/* default */.A)({
        isValidating: true,
        isLoading: true
      }, snapshot);
    };
    const cachedData = getCache();
    const initialData = getInitialCache();
    const clientSnapshot = getSelectedCache(cachedData);
    const serverSnapshot = cachedData === initialData ? clientSnapshot : getSelectedCache(initialData);
    // To make sure that we are returning the same object reference to avoid
    // unnecessary re-renders, we keep the previous snapshot and use deep
    // comparison to check if we need to return a new one.
    let memorizedSnapshot = clientSnapshot;
    return [() => {
      const newSnapshot = getSelectedCache(getCache());
      const compareResult = isEqual(newSnapshot, memorizedSnapshot);
      if (compareResult) {
        // Mentally, we should always return the `memorizedSnapshot` here
        // as there's no change between the new and old snapshots.
        // However, since the `isEqual` function only compares selected fields,
        // the values of the unselected fields might be changed. That's
        // simply because we didn't track them.
        // To support the case in https://github.com/vercel/swr/pull/2576,
        // we need to update these fields in the `memorizedSnapshot` too
        // with direct mutations to ensure the snapshot is always up-to-date
        // even for the unselected fields, but only trigger re-renders when
        // the selected fields are changed.
        memorizedSnapshot.data = newSnapshot.data;
        memorizedSnapshot.isLoading = newSnapshot.isLoading;
        memorizedSnapshot.isValidating = newSnapshot.isValidating;
        memorizedSnapshot.error = newSnapshot.error;
        return memorizedSnapshot;
      } else {
        memorizedSnapshot = newSnapshot;
        return newSnapshot;
      }
    }, () => serverSnapshot];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cache, key]);
  // Get the current state that SWR should return.
  const cached = (0,shim.useSyncExternalStore)((0,react.useCallback)(callback => subscribeCache(key, (current, prev) => {
    if (!isEqual(prev, current)) callback();
  }),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [cache, key]), getSnapshot[0], getSnapshot[1]);
  const isInitialMount = !initialMountedRef.current;
  const hasRevalidator = EVENT_REVALIDATORS[key] && EVENT_REVALIDATORS[key].length > 0;
  const cachedData = cached.data;
  const data = isUndefined(cachedData) ? fallback : cachedData;
  const error = cached.error;
  // Use a ref to store previously returned data. Use the initial data as its initial value.
  const laggyDataRef = (0,react.useRef)(data);
  const returnedData = keepPreviousData ? isUndefined(cachedData) ? laggyDataRef.current : cachedData : data;
  // - Suspense mode and there's stale data for the initial render.
  // - Not suspense mode and there is no fallback data and `revalidateIfStale` is enabled.
  // - `revalidateIfStale` is enabled but `data` is not defined.
  const shouldDoInitialRevalidation = (() => {
    // if a key already has revalidators and also has error, we should not trigger revalidation
    if (hasRevalidator && !isUndefined(error)) return false;
    // If `revalidateOnMount` is set, we take the value directly.
    if (isInitialMount && !isUndefined(revalidateOnMount)) return revalidateOnMount;
    // If it's paused, we skip revalidation.
    if (getConfig().isPaused()) return false;
    // Under suspense mode, it will always fetch on render if there is no
    // stale data so no need to revalidate immediately mount it again.
    // If data exists, only revalidate if `revalidateIfStale` is true.
    if (suspense) return isUndefined(data) ? false : revalidateIfStale;
    // If there is no stale data, we need to revalidate when mount;
    // If `revalidateIfStale` is set to true, we will always revalidate.
    return isUndefined(data) || revalidateIfStale;
  })();
  // Resolve the default validating state:
  // If it's able to validate, and it should revalidate when mount, this will be true.
  const defaultValidatingState = !!(key && fetcher && isInitialMount && shouldDoInitialRevalidation);
  const isValidating = isUndefined(cached.isValidating) ? defaultValidatingState : cached.isValidating;
  const isLoading = isUndefined(cached.isLoading) ? defaultValidatingState : cached.isLoading;
  // The revalidation function is a carefully crafted wrapper of the original
  // `fetcher`, to correctly handle the many edge cases.
  const revalidate = (0,react.useCallback)(async revalidateOpts => {
    const currentFetcher = fetcherRef.current;
    if (!key || !currentFetcher || unmountedRef.current || getConfig().isPaused()) {
      return false;
    }
    let newData;
    let startAt;
    let loading = true;
    const opts = revalidateOpts || {};
    // If there is no ongoing concurrent request, or `dedupe` is not set, a
    // new request should be initiated.
    const shouldStartNewRequest = !FETCH[key] || !opts.dedupe;
    /*
     For React 17
     Do unmount check for calls:
     If key has changed during the revalidation, or the component has been
     unmounted, old dispatch and old event callbacks should not take any
     effect
     For React 18
    only check if key has changed
    https://github.com/reactwg/react-18/discussions/82
    */
    const callbackSafeguard = () => {
      if (IS_REACT_LEGACY) {
        return !unmountedRef.current && key === keyRef.current && initialMountedRef.current;
      }
      return key === keyRef.current;
    };
    // The final state object when the request finishes.
    const finalState = {
      isValidating: false,
      isLoading: false
    };
    const finishRequestAndUpdateState = () => {
      setCache(finalState);
    };
    const cleanupState = () => {
      // Check if it's still the same request before deleting it.
      const requestInfo = FETCH[key];
      if (requestInfo && requestInfo[1] === startAt) {
        delete FETCH[key];
      }
    };
    // Start fetching. Change the `isValidating` state, update the cache.
    const initialState = {
      isValidating: true
    };
    // It is in the `isLoading` state, if and only if there is no cached data.
    // This bypasses fallback data and laggy data.
    if (isUndefined(getCache().data)) {
      initialState.isLoading = true;
    }
    try {
      if (shouldStartNewRequest) {
        setCache(initialState);
        // If no cache is being rendered currently (it shows a blank page),
        // we trigger the loading slow event.
        if (config.loadingTimeout && isUndefined(getCache().data)) {
          setTimeout(() => {
            if (loading && callbackSafeguard()) {
              getConfig().onLoadingSlow(key, config);
            }
          }, config.loadingTimeout);
        }
        // Start the request and save the timestamp.
        // Key must be truthy if entering here.
        FETCH[key] = [currentFetcher(fnArg), getTimestamp()];
      }
      [newData, startAt] = FETCH[key];
      newData = await newData;
      if (shouldStartNewRequest) {
        // If the request isn't interrupted, clean it up after the
        // deduplication interval.
        setTimeout(cleanupState, config.dedupingInterval);
      }
      // If there're other ongoing request(s), started after the current one,
      // we need to ignore the current one to avoid possible race conditions:
      //   req1------------------>res1        (current one)
      //        req2---------------->res2
      // the request that fired later will always be kept.
      // The timestamp maybe be `undefined` or a number
      if (!FETCH[key] || FETCH[key][1] !== startAt) {
        if (shouldStartNewRequest) {
          if (callbackSafeguard()) {
            getConfig().onDiscarded(key);
          }
        }
        return false;
      }
      // Clear error.
      finalState.error = UNDEFINED;
      // If there're other mutations(s), that overlapped with the current revalidation:
      // case 1:
      //   req------------------>res
      //       mutate------>end
      // case 2:
      //         req------------>res
      //   mutate------>end
      // case 3:
      //   req------------------>res
      //       mutate-------...---------->
      // we have to ignore the revalidation result (res) because it's no longer fresh.
      // meanwhile, a new revalidation should be triggered when the mutation ends.
      const mutationInfo = MUTATION[key];
      if (!isUndefined(mutationInfo) && (
      // case 1
      startAt <= mutationInfo[0] ||
      // case 2
      startAt <= mutationInfo[1] ||
      // case 3
      mutationInfo[1] === 0)) {
        finishRequestAndUpdateState();
        if (shouldStartNewRequest) {
          if (callbackSafeguard()) {
            getConfig().onDiscarded(key);
          }
        }
        return false;
      }
      // Deep compare with the latest state to avoid extra re-renders.
      // For local state, compare and assign.
      const cacheData = getCache().data;
      // Since the compare fn could be custom fn
      // cacheData might be different from newData even when compare fn returns True
      finalState.data = compare(cacheData, newData) ? cacheData : newData;
      // Trigger the successful callback if it's the original request.
      if (shouldStartNewRequest) {
        if (callbackSafeguard()) {
          getConfig().onSuccess(newData, key, config);
        }
      }
    } catch (err) {
      cleanupState();
      const currentConfig = getConfig();
      const {
        shouldRetryOnError
      } = currentConfig;
      // Not paused, we continue handling the error. Otherwise, discard it.
      if (!currentConfig.isPaused()) {
        // Get a new error, don't use deep comparison for errors.
        finalState.error = err;
        // Error event and retry logic. Only for the actual request, not
        // deduped ones.
        if (shouldStartNewRequest && callbackSafeguard()) {
          currentConfig.onError(err, key, currentConfig);
          if (shouldRetryOnError === true || isFunction(shouldRetryOnError) && shouldRetryOnError(err)) {
            if (isActive()) {
              // If it's inactive, stop. It will auto-revalidate when
              // refocusing or reconnecting.
              // When retrying, deduplication is always enabled.
              currentConfig.onErrorRetry(err, key, currentConfig, _opts => {
                const revalidators = EVENT_REVALIDATORS[key];
                if (revalidators && revalidators[0]) {
                  revalidators[0](constants.ERROR_REVALIDATE_EVENT, _opts);
                }
              }, {
                retryCount: (opts.retryCount || 0) + 1,
                dedupe: true
              });
            }
          }
        }
      }
    }
    // Mark loading as stopped.
    loading = false;
    // Update the current hook's state.
    finishRequestAndUpdateState();
    return true;
  },
  // `setState` is immutable, and `eventsCallback`, `fnArg`, and
  // `keyValidating` are depending on `key`, so we can exclude them from
  // the deps array.
  //
  // FIXME:
  // `fn` and `config` might be changed during the lifecycle,
  // but they might be changed every render like this.
  // `useSWR('key', () => fetch('/api/'), { suspense: true })`
  // So we omit the values from the deps array
  // even though it might cause unexpected behaviors.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [key, cache]);
  // Similar to the global mutate but bound to the current cache and key.
  // `cache` isn't allowed to change during the lifecycle.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const boundMutate = (0,react.useCallback)(
  // Use callback to make sure `keyRef.current` returns latest result every time
  function () {
    for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return internalMutate(cache, keyRef.current, ...args);
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);
  // The logic for updating refs.
  useIsomorphicLayoutEffect(() => {
    fetcherRef.current = fetcher;
    configRef.current = config;
    // Handle laggy data updates. If there's cached data of the current key,
    // it'll be the correct reference.
    if (!isUndefined(cachedData)) {
      laggyDataRef.current = cachedData;
    }
  });
  // After mounted or key changed.
  useIsomorphicLayoutEffect(() => {
    if (!key) return;
    const softRevalidate = revalidate.bind(UNDEFINED, WITH_DEDUPE);
    // Expose revalidators to global event listeners. So we can trigger
    // revalidation from the outside.
    let nextFocusRevalidatedAt = 0;
    const onRevalidate = function (type) {
      let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (type == constants.FOCUS_EVENT) {
        const now = Date.now();
        if (getConfig().revalidateOnFocus && now > nextFocusRevalidatedAt && isActive()) {
          nextFocusRevalidatedAt = now + getConfig().focusThrottleInterval;
          softRevalidate();
        }
      } else if (type == constants.RECONNECT_EVENT) {
        if (getConfig().revalidateOnReconnect && isActive()) {
          softRevalidate();
        }
      } else if (type == constants.MUTATE_EVENT) {
        return revalidate();
      } else if (type == constants.ERROR_REVALIDATE_EVENT) {
        return revalidate(opts);
      }
      return;
    };
    const unsubEvents = subscribeCallback(key, EVENT_REVALIDATORS, onRevalidate);
    // Mark the component as mounted and update corresponding refs.
    unmountedRef.current = false;
    keyRef.current = key;
    initialMountedRef.current = true;
    // Keep the original key in the cache.
    setCache({
      _k: fnArg
    });
    // Trigger a revalidation
    if (shouldDoInitialRevalidation) {
      if (isUndefined(data) || IS_SERVER) {
        // Revalidate immediately.
        softRevalidate();
      } else {
        // Delay the revalidate if we have data to return so we won't block
        // rendering.
        rAF(softRevalidate);
      }
    }
    return () => {
      // Mark it as unmounted.
      unmountedRef.current = true;
      unsubEvents();
    };
  }, [key]);
  // Polling
  useIsomorphicLayoutEffect(() => {
    let timer;
    function next() {
      // Use the passed interval
      // ...or invoke the function with the updated data to get the interval
      const interval = isFunction(refreshInterval) ? refreshInterval(getCache().data) : refreshInterval;
      // We only start the next interval if `refreshInterval` is not 0, and:
      // - `force` is true, which is the start of polling
      // - or `timer` is not 0, which means the effect wasn't canceled
      if (interval && timer !== -1) {
        timer = setTimeout(execute, interval);
      }
    }
    function execute() {
      // Check if it's OK to execute:
      // Only revalidate when the page is visible, online, and not errored.
      if (!getCache().error && (refreshWhenHidden || getConfig().isVisible()) && (refreshWhenOffline || getConfig().isOnline())) {
        revalidate(WITH_DEDUPE).then(next);
      } else {
        // Schedule the next interval to check again.
        next();
      }
    }
    next();
    return () => {
      if (timer) {
        clearTimeout(timer);
        timer = -1;
      }
    };
  }, [refreshInterval, refreshWhenHidden, refreshWhenOffline, key]);
  // Display debug info in React DevTools.
  (0,react.useDebugValue)(returnedData);
  // In Suspense mode, we can't return the empty `data` state.
  // If there is an `error`, the `error` needs to be thrown to the error boundary.
  // If there is no `error`, the `revalidation` promise needs to be thrown to
  // the suspense boundary.
  if (suspense && isUndefined(data) && key) {
    // SWR should throw when trying to use Suspense on the server with React 18,
    // without providing any initial data. See:
    // https://github.com/vercel/swr/issues/1832
    if (!IS_REACT_LEGACY && IS_SERVER) {
      throw new Error('Fallback data is required when using suspense in SSR.');
    }
    // Always update fetcher and config refs even with the Suspense mode.
    fetcherRef.current = fetcher;
    configRef.current = config;
    unmountedRef.current = false;
    const req = PRELOAD[key];
    if (!isUndefined(req)) {
      const promise = boundMutate(req);
      dist_use(promise);
    }
    if (isUndefined(error)) {
      const promise = revalidate(WITH_DEDUPE);
      if (!isUndefined(returnedData)) {
        promise.status = 'fulfilled';
        promise.value = true;
      }
      dist_use(promise);
    } else {
      throw error;
    }
  }
  return {
    mutate: boundMutate,
    get data() {
      stateDependencies.data = true;
      return returnedData;
    },
    get error() {
      stateDependencies.error = true;
      return error;
    },
    get isValidating() {
      stateDependencies.isValidating = true;
      return isValidating;
    },
    get isLoading() {
      stateDependencies.isLoading = true;
      return isLoading;
    }
  };
};
const core_dist_SWRConfig = OBJECT.defineProperty(dist_SWRConfig, 'defaultValue', {
  value: defaultConfig
});
/**
 * A hook to fetch data.
 *
 * @link https://swr.vercel.app
 * @example
 * ```jsx
 * import useSWR from 'swr'
 * function Profile() {
 *   const { data, error } = useSWR('/api/user', fetcher)
 *   if (error) return <div>failed to load</div>
 *   if (!data) return <div>loading...</div>
 *   return <div>hello {data.name}!</div>
 * }
 * ```
 */
const useSWR = withArgs(useSWRHandler);

// useSWR


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(27800);
;// ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js

function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = (0,unsupportedIterableToArray/* default */.A)(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var _n = 0,
        F = function F() {};
      return {
        s: F,
        n: function n() {
          return _n >= r.length ? {
            done: !0
          } : {
            done: !1,
            value: r[_n++]
          };
        },
        e: function e(r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = !0,
    u = !1;
  return {
    s: function s() {
      t = t.call(r);
    },
    n: function n() {
      var r = t.next();
      return a = r.done, r;
    },
    e: function e(r) {
      u = !0, o = r;
    },
    f: function f() {
      try {
        a || null == t["return"] || t["return"]();
      } finally {
        if (u) throw o;
      }
    }
  };
}

;// ./node_modules/@ant-design/pro-provider/es/locale/ar_EG.js
/* harmony default export */ const ar_EG = ({
  moneySymbol: '$',
  form: {
    lightFilter: {
      more: 'المزيد',
      clear: 'نظف',
      confirm: 'تأكيد',
      itemUnit: 'عناصر'
    }
  },
  tableForm: {
    search: 'ابحث',
    reset: 'إعادة تعيين',
    submit: 'ارسال',
    collapsed: 'مُقلص',
    expand: 'مُوسع',
    inputPlaceholder: 'الرجاء الإدخال',
    selectPlaceholder: 'الرجاء الإختيار'
  },
  alert: {
    clear: 'نظف',
    selected: 'محدد',
    item: 'عنصر'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'من',
      item: 'عناصر'
    }
  },
  tableToolBar: {
    leftPin: 'ثبت على اليسار',
    rightPin: 'ثبت على اليمين',
    noPin: 'الغاء التثبيت',
    leftFixedTitle: 'لصق على اليسار',
    rightFixedTitle: 'لصق على اليمين',
    noFixedTitle: 'إلغاء الإلصاق',
    reset: 'إعادة تعيين',
    columnDisplay: 'الأعمدة المعروضة',
    columnSetting: 'الإعدادات',
    fullScreen: 'وضع كامل الشاشة',
    exitFullScreen: 'الخروج من وضع كامل الشاشة',
    reload: 'تحديث',
    density: 'الكثافة',
    densityDefault: 'افتراضي',
    densityLarger: 'أكبر',
    densityMiddle: 'وسط',
    densitySmall: 'مدمج'
  },
  stepsForm: {
    next: 'التالي',
    prev: 'السابق',
    submit: 'أنهى'
  },
  loginForm: {
    submitText: 'تسجيل الدخول'
  },
  editableTable: {
    action: {
      save: 'أنقذ',
      cancel: 'إلغاء الأمر',
      delete: 'حذف',
      add: 'إضافة صف من البيانات'
    }
  },
  switch: {
    open: 'مفتوح',
    close: 'غلق'
  }
});
;// ./node_modules/@ant-design/pro-provider/es/locale/ca_ES.js
/* harmony default export */ const ca_ES = ({
  moneySymbol: '€',
  form: {
    lightFilter: {
      more: 'Més',
      clear: 'Netejar',
      confirm: 'Confirmar',
      itemUnit: 'Elements'
    }
  },
  tableForm: {
    search: 'Cercar',
    reset: 'Netejar',
    submit: 'Enviar',
    collapsed: 'Expandir',
    expand: 'Col·lapsar',
    inputPlaceholder: 'Introduïu valor',
    selectPlaceholder: 'Seleccioneu valor'
  },
  alert: {
    clear: 'Netejar',
    selected: 'Seleccionat',
    item: 'Article'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'de',
      item: 'articles'
    }
  },
  tableToolBar: {
    leftPin: "Pin a l'esquerra",
    rightPin: 'Pin a la dreta',
    noPin: 'Sense Pin',
    leftFixedTitle: "Fixat a l'esquerra",
    rightFixedTitle: 'Fixat a la dreta',
    noFixedTitle: 'Sense fixar',
    reset: 'Reiniciar',
    columnDisplay: 'Mostrar Columna',
    columnSetting: 'Configuració',
    fullScreen: 'Pantalla Completa',
    exitFullScreen: 'Sortir Pantalla Completa',
    reload: 'Refrescar',
    density: 'Densitat',
    densityDefault: 'Per Defecte',
    densityLarger: 'Llarg',
    densityMiddle: 'Mitjà',
    densitySmall: 'Compacte'
  },
  stepsForm: {
    next: 'Següent',
    prev: 'Anterior',
    submit: 'Finalizar'
  },
  loginForm: {
    submitText: 'Entrar'
  },
  editableTable: {
    action: {
      save: 'Guardar',
      cancel: 'Cancel·lar',
      delete: 'Eliminar',
      add: 'afegir una fila de dades'
    }
  },
  switch: {
    open: 'obert',
    close: 'tancat'
  }
});
;// ./node_modules/@ant-design/pro-provider/es/locale/cs_CZ.js
/* harmony default export */ const cs_CZ = ({
  moneySymbol: 'Kč',
  deleteThisLine: 'Smazat tento řádek',
  copyThisLine: 'Kopírovat tento řádek',
  form: {
    lightFilter: {
      more: 'Víc',
      clear: 'Vymazat',
      confirm: 'Potvrdit',
      itemUnit: 'Položky'
    }
  },
  tableForm: {
    search: 'Dotaz',
    reset: 'Resetovat',
    submit: 'Odeslat',
    collapsed: 'Zvětšit',
    expand: 'Zmenšit',
    inputPlaceholder: 'Zadejte prosím',
    selectPlaceholder: 'Vyberte prosím'
  },
  alert: {
    clear: 'Vymazat',
    selected: 'Vybraný',
    item: 'Položka'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'z',
      item: 'položek'
    }
  },
  tableToolBar: {
    leftPin: 'Připnout doleva',
    rightPin: 'Připnout doprava',
    noPin: 'Odepnuto',
    leftFixedTitle: 'Fixováno nalevo',
    rightFixedTitle: 'Fixováno napravo',
    noFixedTitle: 'Neopraveno',
    reset: 'Resetovat',
    columnDisplay: 'Zobrazení sloupců',
    columnSetting: 'Nastavení',
    fullScreen: 'Celá obrazovka',
    exitFullScreen: 'Ukončete celou obrazovku',
    reload: 'Obnovit',
    density: 'Hustota',
    densityDefault: 'Výchozí',
    densityLarger: 'Větší',
    densityMiddle: 'Střední',
    densitySmall: 'Kompaktní'
  },
  stepsForm: {
    next: 'Další',
    prev: 'Předchozí',
    submit: 'Dokončit'
  },
  loginForm: {
    submitText: 'Přihlásit se'
  },
  editableTable: {
    onlyOneLineEditor: 'Upravit lze pouze jeden řádek',
    action: {
      save: 'Uložit',
      cancel: 'Zrušit',
      delete: 'Vymazat',
      add: 'přidat řádek dat'
    }
  },
  switch: {
    open: 'otevřít',
    close: 'zavřít'
  }
});
;// ./node_modules/@ant-design/pro-provider/es/locale/de_DE.js
/* harmony default export */ const de_DE = ({
  moneySymbol: '€',
  form: {
    lightFilter: {
      more: 'Mehr',
      clear: 'Zurücksetzen',
      confirm: 'Bestätigen',
      itemUnit: 'Einträge'
    }
  },
  tableForm: {
    search: 'Suchen',
    reset: 'Zurücksetzen',
    submit: 'Absenden',
    collapsed: 'Zeige mehr',
    expand: 'Zeige weniger',
    inputPlaceholder: 'Bitte eingeben',
    selectPlaceholder: 'Bitte auswählen'
  },
  alert: {
    clear: 'Zurücksetzen',
    selected: 'Ausgewählt',
    item: 'Eintrag'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'von',
      item: 'Einträgen'
    }
  },
  tableToolBar: {
    leftPin: 'Links anheften',
    rightPin: 'Rechts anheften',
    noPin: 'Nicht angeheftet',
    leftFixedTitle: 'Links fixiert',
    rightFixedTitle: 'Rechts fixiert',
    noFixedTitle: 'Nicht fixiert',
    reset: 'Zurücksetzen',
    columnDisplay: 'Angezeigte Reihen',
    columnSetting: 'Einstellungen',
    fullScreen: 'Vollbild',
    exitFullScreen: 'Vollbild verlassen',
    reload: 'Aktualisieren',
    density: 'Abstand',
    densityDefault: 'Standard',
    densityLarger: 'Größer',
    densityMiddle: 'Mittel',
    densitySmall: 'Kompakt'
  },
  stepsForm: {
    next: 'Weiter',
    prev: 'Zurück',
    submit: 'Abschließen'
  },
  loginForm: {
    submitText: 'Anmelden'
  },
  editableTable: {
    action: {
      save: 'Retten',
      cancel: 'Abbrechen',
      delete: 'Löschen',
      add: 'Hinzufügen einer Datenzeile'
    }
  },
  switch: {
    open: 'offen',
    close: 'schließen'
  }
});
;// ./node_modules/@ant-design/pro-provider/es/locale/en_GB.js
/* harmony default export */ const en_GB = ({
  moneySymbol: '£',
  form: {
    lightFilter: {
      more: 'More',
      clear: 'Clear',
      confirm: 'Confirm',
      itemUnit: 'Items'
    }
  },
  tableForm: {
    search: 'Query',
    reset: 'Reset',
    submit: 'Submit',
    collapsed: 'Expand',
    expand: 'Collapse',
    inputPlaceholder: 'Please enter',
    selectPlaceholder: 'Please select'
  },
  alert: {
    clear: 'Clear',
    selected: 'Selected',
    item: 'Item'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'of',
      item: 'items'
    }
  },
  tableToolBar: {
    leftPin: 'Pin to left',
    rightPin: 'Pin to right',
    noPin: 'Unpinned',
    leftFixedTitle: 'Fixed the left',
    rightFixedTitle: 'Fixed the right',
    noFixedTitle: 'Not Fixed',
    reset: 'Reset',
    columnDisplay: 'Column Display',
    columnSetting: 'Settings',
    fullScreen: 'Full Screen',
    exitFullScreen: 'Exit Full Screen',
    reload: 'Refresh',
    density: 'Density',
    densityDefault: 'Default',
    densityLarger: 'Larger',
    densityMiddle: 'Middle',
    densitySmall: 'Compact'
  },
  stepsForm: {
    next: 'Next',
    prev: 'Previous',
    submit: 'Finish'
  },
  loginForm: {
    submitText: 'Login'
  },
  editableTable: {
    action: {
      save: 'Save',
      cancel: 'Cancel',
      delete: 'Delete',
      add: 'add a row of data'
    }
  },
  switch: {
    open: 'open',
    close: 'close'
  }
});
;// ./node_modules/@ant-design/pro-provider/es/locale/en_US.js
/* harmony default export */ const en_US = ({
  moneySymbol: '$',
  deleteThisLine: 'Delete this line',
  copyThisLine: 'Copy this line',
  form: {
    lightFilter: {
      more: 'More',
      clear: 'Clear',
      confirm: 'Confirm',
      itemUnit: 'Items'
    }
  },
  tableForm: {
    search: 'Query',
    reset: 'Reset',
    submit: 'Submit',
    collapsed: 'Expand',
    expand: 'Collapse',
    inputPlaceholder: 'Please enter',
    selectPlaceholder: 'Please select'
  },
  alert: {
    clear: 'Clear',
    selected: 'Selected',
    item: 'Item'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'of',
      item: 'items'
    }
  },
  tableToolBar: {
    leftPin: 'Pin to left',
    rightPin: 'Pin to right',
    noPin: 'Unpinned',
    leftFixedTitle: 'Fixed the left',
    rightFixedTitle: 'Fixed the right',
    noFixedTitle: 'Not Fixed',
    reset: 'Reset',
    columnDisplay: 'Column Display',
    columnSetting: 'Settings',
    fullScreen: 'Full Screen',
    exitFullScreen: 'Exit Full Screen',
    reload: 'Refresh',
    density: 'Density',
    densityDefault: 'Default',
    densityLarger: 'Larger',
    densityMiddle: 'Middle',
    densitySmall: 'Compact'
  },
  stepsForm: {
    next: 'Next',
    prev: 'Previous',
    submit: 'Finish'
  },
  loginForm: {
    submitText: 'Login'
  },
  editableTable: {
    onlyOneLineEditor: 'Only one line can be edited',
    action: {
      save: 'Save',
      cancel: 'Cancel',
      delete: 'Delete',
      add: 'add a row of data'
    }
  },
  switch: {
    open: 'open',
    close: 'close'
  }
});
;// ./node_modules/@ant-design/pro-provider/es/locale/es_ES.js
/* harmony default export */ const es_ES = ({
  moneySymbol: '€',
  form: {
    lightFilter: {
      more: 'Más',
      clear: 'Limpiar',
      confirm: 'Confirmar',
      itemUnit: 'artículos'
    }
  },
  tableForm: {
    search: 'Buscar',
    reset: 'Limpiar',
    submit: 'Submit',
    collapsed: 'Expandir',
    expand: 'Colapsar',
    inputPlaceholder: 'Ingrese valor',
    selectPlaceholder: 'Seleccione valor'
  },
  alert: {
    clear: 'Limpiar',
    selected: 'Seleccionado',
    item: 'Articulo'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'de',
      item: 'artículos'
    }
  },
  tableToolBar: {
    leftPin: 'Pin a la izquierda',
    rightPin: 'Pin a la derecha',
    noPin: 'Sin Pin',
    leftFixedTitle: 'Fijado a la izquierda',
    rightFixedTitle: 'Fijado a la derecha',
    noFixedTitle: 'Sin Fijar',
    reset: 'Reiniciar',
    columnDisplay: 'Mostrar Columna',
    columnSetting: 'Configuración',
    fullScreen: 'Pantalla Completa',
    exitFullScreen: 'Salir Pantalla Completa',
    reload: 'Refrescar',
    density: 'Densidad',
    densityDefault: 'Por Defecto',
    densityLarger: 'Largo',
    densityMiddle: 'Medio',
    densitySmall: 'Compacto'
  },
  stepsForm: {
    next: 'Siguiente',
    prev: 'Anterior',
    submit: 'Finalizar'
  },
  loginForm: {
    submitText: 'Entrar'
  },
  editableTable: {
    action: {
      save: 'Guardar',
      cancel: 'Descartar',
      delete: 'Borrar',
      add: 'añadir una fila de datos'
    }
  },
  switch: {
    open: 'abrir',
    close: 'cerrar'
  }
});
;// ./node_modules/@ant-design/pro-provider/es/locale/fa_IR.js
/* harmony default export */ const fa_IR = ({
  moneySymbol: 'تومان',
  form: {
    lightFilter: {
      more: 'بیشتر',
      clear: 'پاک کردن',
      confirm: 'تایید',
      itemUnit: 'مورد'
    }
  },
  tableForm: {
    search: 'جستجو',
    reset: 'بازنشانی',
    submit: 'تایید',
    collapsed: 'نمایش بیشتر',
    expand: 'نمایش کمتر',
    inputPlaceholder: 'پیدا کنید',
    selectPlaceholder: 'انتخاب کنید'
  },
  alert: {
    clear: 'پاک سازی',
    selected: 'انتخاب',
    item: 'مورد'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'از',
      item: 'مورد'
    }
  },
  tableToolBar: {
    leftPin: 'سنجاق به چپ',
    rightPin: 'سنجاق به راست',
    noPin: 'سنجاق نشده',
    leftFixedTitle: 'ثابت شده در چپ',
    rightFixedTitle: 'ثابت شده در راست',
    noFixedTitle: 'شناور',
    reset: 'بازنشانی',
    columnDisplay: 'نمایش همه',
    columnSetting: 'تنظیمات',
    fullScreen: 'تمام صفحه',
    exitFullScreen: 'خروج از حالت تمام صفحه',
    reload: 'تازه سازی',
    density: 'تراکم',
    densityDefault: 'پیش فرض',
    densityLarger: 'بزرگ',
    densityMiddle: 'متوسط',
    densitySmall: 'کوچک'
  },
  stepsForm: {
    next: 'بعدی',
    prev: 'قبلی',
    submit: 'اتمام'
  },
  loginForm: {
    submitText: 'ورود'
  },
  editableTable: {
    action: {
      save: 'ذخیره',
      cancel: 'لغو',
      delete: 'حذف',
      add: 'یک ردیف داده اضافه کنید'
    }
  },
  switch: {
    open: 'باز',
    close: 'نزدیک'
  }
});
;// ./node_modules/@ant-design/pro-provider/es/locale/fr_FR.js
/* harmony default export */ const fr_FR = ({
  moneySymbol: '€',
  form: {
    lightFilter: {
      more: 'Plus',
      clear: 'Effacer',
      confirm: 'Confirmer',
      itemUnit: 'Items'
    }
  },
  tableForm: {
    search: 'Rechercher',
    reset: 'Réinitialiser',
    submit: 'Envoyer',
    collapsed: 'Agrandir',
    expand: 'Réduire',
    inputPlaceholder: 'Entrer une valeur',
    selectPlaceholder: 'Sélectionner une valeur'
  },
  alert: {
    clear: 'Réinitialiser',
    selected: 'Sélectionné',
    item: 'Item'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'sur',
      item: 'éléments'
    }
  },
  tableToolBar: {
    leftPin: 'Épingler à gauche',
    rightPin: 'Épingler à gauche',
    noPin: 'Sans épingle',
    leftFixedTitle: 'Fixer à gauche',
    rightFixedTitle: 'Fixer à droite',
    noFixedTitle: 'Non fixé',
    reset: 'Réinitialiser',
    columnDisplay: 'Affichage colonne',
    columnSetting: 'Réglages',
    fullScreen: 'Plein écran',
    exitFullScreen: 'Quitter Plein écran',
    reload: 'Rafraichir',
    density: 'Densité',
    densityDefault: 'Par défaut',
    densityLarger: 'Larger',
    densityMiddle: 'Moyenne',
    densitySmall: 'Compacte'
  },
  stepsForm: {
    next: 'Suivante',
    prev: 'Précédente',
    submit: 'Finaliser'
  },
  loginForm: {
    submitText: 'Se connecter'
  },
  editableTable: {
    action: {
      save: 'Sauvegarder',
      cancel: 'Annuler',
      delete: 'Supprimer',
      add: 'ajouter une ligne de données'
    }
  },
  switch: {
    open: 'ouvert',
    close: 'près'
  }
});
;// ./node_modules/@ant-design/pro-provider/es/locale/hr_HR.js
/* harmony default export */ const hr_HR = ({
  moneySymbol: 'kn',
  form: {
    lightFilter: {
      more: 'Više',
      clear: 'Očisti',
      confirm: 'Potvrdi',
      itemUnit: 'Stavke'
    }
  },
  tableForm: {
    search: 'Pretraži',
    reset: 'Poništi',
    submit: 'Potvrdi',
    collapsed: 'Raširi',
    expand: 'Skupi',
    inputPlaceholder: 'Unesite',
    selectPlaceholder: 'Odaberite'
  },
  alert: {
    clear: 'Očisti',
    selected: 'Odaberi',
    item: 'stavke'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'od',
      item: 'stavke'
    }
  },
  tableToolBar: {
    leftPin: 'Prikači lijevo',
    rightPin: 'Prikači desno',
    noPin: 'Bez prikačenja',
    leftFixedTitle: 'Fiksiraj lijevo',
    rightFixedTitle: 'Fiksiraj desno',
    noFixedTitle: 'Bez fiksiranja',
    reset: 'Resetiraj',
    columnDisplay: 'Prikaz stupaca',
    columnSetting: 'Postavke',
    fullScreen: 'Puni zaslon',
    exitFullScreen: 'Izađi iz punog zaslona',
    reload: 'Ponovno učitaj',
    density: 'Veličina',
    densityDefault: 'Zadano',
    densityLarger: 'Veliko',
    densityMiddle: 'Srednje',
    densitySmall: 'Malo'
  },
  stepsForm: {
    next: 'Sljedeći',
    prev: 'Prethodni',
    submit: 'Kraj'
  },
  loginForm: {
    submitText: 'Prijava'
  },
  editableTable: {
    action: {
      save: 'Spremi',
      cancel: 'Odustani',
      delete: 'Obriši',
      add: 'dodajte red podataka'
    }
  },
  switch: {
    open: 'otvori',
    close: 'zatvori'
  }
});
;// ./node_modules/@ant-design/pro-provider/es/locale/id_ID.js
/* harmony default export */ const id_ID = ({
  moneySymbol: 'RP',
  form: {
    lightFilter: {
      more: 'Lebih',
      clear: 'Hapus',
      confirm: 'Konfirmasi',
      itemUnit: 'Unit'
    }
  },
  tableForm: {
    search: 'Cari',
    reset: 'Atur ulang',
    submit: 'Kirim',
    collapsed: 'Lebih sedikit',
    expand: 'Lebih banyak',
    inputPlaceholder: 'Masukkan pencarian',
    selectPlaceholder: 'Pilih'
  },
  alert: {
    clear: 'Hapus',
    selected: 'Dipilih',
    item: 'Butir'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'Dari',
      item: 'Butir'
    }
  },
  tableToolBar: {
    leftPin: 'Pin kiri',
    rightPin: 'Pin kanan',
    noPin: 'Tidak ada pin',
    leftFixedTitle: 'Rata kiri',
    rightFixedTitle: 'Rata kanan',
    noFixedTitle: 'Tidak tetap',
    reset: 'Atur ulang',
    columnDisplay: 'Tampilan kolom',
    columnSetting: 'Pengaturan',
    fullScreen: 'Layar penuh',
    exitFullScreen: 'Keluar layar penuh',
    reload: 'Atur ulang',
    density: 'Kerapatan',
    densityDefault: 'Standar',
    densityLarger: 'Lebih besar',
    densityMiddle: 'Sedang',
    densitySmall: 'Rapat'
  },
  stepsForm: {
    next: 'Selanjutnya',
    prev: 'Sebelumnya',
    submit: 'Selesai'
  },
  loginForm: {
    submitText: 'Login'
  },
  editableTable: {
    action: {
      save: 'simpan',
      cancel: 'batal',
      delete: 'hapus',
      add: 'Tambahkan baris data'
    }
  },
  switch: {
    open: 'buka',
    close: 'tutup'
  }
});
;// ./node_modules/@ant-design/pro-provider/es/locale/it_IT.js
/* harmony default export */ const it_IT = ({
  moneySymbol: '€',
  form: {
    lightFilter: {
      more: 'più',
      clear: 'pulisci',
      confirm: 'conferma',
      itemUnit: 'elementi'
    }
  },
  tableForm: {
    search: 'Filtra',
    reset: 'Pulisci',
    submit: 'Invia',
    collapsed: 'Espandi',
    expand: 'Contrai',
    inputPlaceholder: 'Digita',
    selectPlaceholder: 'Seleziona'
  },
  alert: {
    clear: 'Rimuovi',
    selected: 'Selezionati',
    item: 'elementi'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'di',
      item: 'elementi'
    }
  },
  tableToolBar: {
    leftPin: 'Fissa a sinistra',
    rightPin: 'Fissa a destra',
    noPin: 'Ripristina posizione',
    leftFixedTitle: 'Fissato a sinistra',
    rightFixedTitle: 'Fissato a destra',
    noFixedTitle: 'Non fissato',
    reset: 'Ripristina',
    columnDisplay: 'Disposizione colonne',
    columnSetting: 'Impostazioni',
    fullScreen: 'Modalità schermo intero',
    exitFullScreen: 'Esci da modalità schermo intero',
    reload: 'Ricarica',
    density: 'Grandezza tabella',
    densityDefault: 'predefinito',
    densityLarger: 'Grande',
    densityMiddle: 'Media',
    densitySmall: 'Compatta'
  },
  stepsForm: {
    next: 'successivo',
    prev: 'precedente',
    submit: 'finisci'
  },
  loginForm: {
    submitText: 'Accedi'
  },
  editableTable: {
    action: {
      save: 'salva',
      cancel: 'annulla',
      delete: 'Delete',
      add: 'add a row of data'
    }
  },
  switch: {
    open: 'open',
    close: 'chiudi'
  }
});
;// ./node_modules/@ant-design/pro-provider/es/locale/ja_JP.js
/* harmony default export */ const ja_JP = ({
  moneySymbol: '¥',
  form: {
    lightFilter: {
      more: '更に',
      clear: 'クリア',
      confirm: '確認',
      itemUnit: 'アイテム'
    }
  },
  tableForm: {
    search: '検索',
    reset: 'リセット',
    submit: '送信',
    collapsed: '拡大',
    expand: '折畳',
    inputPlaceholder: '入力してください',
    selectPlaceholder: '選択してください'
  },
  alert: {
    clear: 'クリア',
    selected: '選択した',
    item: 'アイテム'
  },
  pagination: {
    total: {
      range: 'レコード',
      total: '/合計',
      item: ' '
    }
  },
  tableToolBar: {
    leftPin: '左に固定',
    rightPin: '右に固定',
    noPin: 'キャンセル',
    leftFixedTitle: '左に固定された項目',
    rightFixedTitle: '右に固定された項目',
    noFixedTitle: '固定されてない項目',
    reset: 'リセット',
    columnDisplay: '表示列',
    columnSetting: '列表示設定',
    fullScreen: 'フルスクリーン',
    exitFullScreen: '終了',
    reload: '更新',
    density: '行高',
    densityDefault: 'デフォルト',
    densityLarger: '大',
    densityMiddle: '中',
    densitySmall: '小'
  },
  stepsForm: {
    next: '次へ',
    prev: '前へ',
    submit: '送信'
  },
  loginForm: {
    submitText: 'ログイン'
  },
  editableTable: {
    action: {
      save: '保存',
      cancel: 'キャンセル',
      delete: '削除',
      add: '追加'
    }
  },
  switch: {
    open: '開く',
    close: '閉じる'
  }
});
;// ./node_modules/@ant-design/pro-provider/es/locale/ko_KR.js
/* harmony default export */ const ko_KR = ({
  moneySymbol: '₩',
  form: {
    lightFilter: {
      more: '더보기',
      clear: '초기화',
      confirm: '확인',
      itemUnit: '건수'
    }
  },
  tableForm: {
    search: '조회',
    reset: '초기화',
    submit: '제출',
    collapsed: '확장',
    expand: '닫기',
    inputPlaceholder: '입력해 주세요',
    selectPlaceholder: '선택해 주세요'
  },
  alert: {
    clear: '취소',
    selected: '선택',
    item: '건'
  },
  pagination: {
    total: {
      range: ' ',
      total: '/ 총',
      item: '건'
    }
  },
  tableToolBar: {
    leftPin: '왼쪽으로 핀',
    rightPin: '오른쪽으로 핀',
    noPin: '핀 제거',
    leftFixedTitle: '왼쪽으로 고정',
    rightFixedTitle: '오른쪽으로 고정',
    noFixedTitle: '비고정',
    reset: '초기화',
    columnDisplay: '컬럼 표시',
    columnSetting: '설정',
    fullScreen: '전체 화면',
    exitFullScreen: '전체 화면 취소',
    reload: '새로 고침',
    density: '여백',
    densityDefault: '기본',
    densityLarger: '많은 여백',
    densityMiddle: '중간 여백',
    densitySmall: '좁은 여백'
  },
  stepsForm: {
    next: '다음',
    prev: '이전',
    submit: '종료'
  },
  loginForm: {
    submitText: '로그인'
  },
  editableTable: {
    action: {
      save: '저장',
      cancel: '취소',
      delete: '삭제',
      add: '데이터 행 추가'
    }
  },
  switch: {
    open: '열',
    close: '가까 운'
  }
});
;// ./node_modules/@ant-design/pro-provider/es/locale/mn_MN.js
/* harmony default export */ const mn_MN = ({
  moneySymbol: '₮',
  form: {
    lightFilter: {
      more: 'Илүү',
      clear: 'Цэвэрлэх',
      confirm: 'Баталгаажуулах',
      itemUnit: 'Нэгжүүд'
    }
  },
  tableForm: {
    search: 'Хайх',
    reset: 'Шинэчлэх',
    submit: 'Илгээх',
    collapsed: 'Өргөтгөх',
    expand: 'Хураах',
    inputPlaceholder: 'Утга оруулна уу',
    selectPlaceholder: 'Утга сонгоно уу'
  },
  alert: {
    clear: 'Цэвэрлэх',
    selected: 'Сонгогдсон',
    item: 'Нэгж'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'Нийт',
      item: 'мөр'
    }
  },
  tableToolBar: {
    leftPin: 'Зүүн тийш бэхлэх',
    rightPin: 'Баруун тийш бэхлэх',
    noPin: 'Бэхлэхгүй',
    leftFixedTitle: 'Зүүн зэрэгцүүлэх',
    rightFixedTitle: 'Баруун зэрэгцүүлэх',
    noFixedTitle: 'Зэрэгцүүлэхгүй',
    reset: 'Шинэчлэх',
    columnDisplay: 'Баганаар харуулах',
    columnSetting: 'Тохиргоо',
    fullScreen: 'Бүтэн дэлгэцээр',
    exitFullScreen: 'Бүтэн дэлгэц цуцлах',
    reload: 'Шинэчлэх',
    density: 'Хэмжээ',
    densityDefault: 'Хэвийн',
    densityLarger: 'Том',
    densityMiddle: 'Дунд',
    densitySmall: 'Жижиг'
  },
  stepsForm: {
    next: 'Дараах',
    prev: 'Өмнөх',
    submit: 'Дуусгах'
  },
  loginForm: {
    submitText: 'Нэвтрэх'
  },
  editableTable: {
    action: {
      save: 'Хадгалах',
      cancel: 'Цуцлах',
      delete: 'Устгах',
      add: 'Мөр нэмэх'
    }
  },
  switch: {
    open: 'Нээх',
    close: 'Хаах'
  }
});
;// ./node_modules/@ant-design/pro-provider/es/locale/ms_MY.js
/* harmony default export */ const ms_MY = ({
  moneySymbol: 'RM',
  form: {
    lightFilter: {
      more: 'Lebih banyak',
      clear: 'Jelas',
      confirm: 'Mengesahkan',
      itemUnit: 'Item'
    }
  },
  tableForm: {
    search: 'Cari',
    reset: 'Menetapkan semula',
    submit: 'Hantar',
    collapsed: 'Kembang',
    expand: 'Kuncup',
    inputPlaceholder: 'Sila masuk',
    selectPlaceholder: 'Sila pilih'
  },
  alert: {
    clear: 'Padam',
    selected: 'Dipilih',
    item: 'Item'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'daripada',
      item: 'item'
    }
  },
  tableToolBar: {
    leftPin: 'Pin ke kiri',
    rightPin: 'Pin ke kanan',
    noPin: 'Tidak pin',
    leftFixedTitle: 'Tetap ke kiri',
    rightFixedTitle: 'Tetap ke kanan',
    noFixedTitle: 'Tidak Tetap',
    reset: 'Menetapkan semula',
    columnDisplay: 'Lajur',
    columnSetting: 'Settings',
    fullScreen: 'Full Screen',
    exitFullScreen: 'Keluar Full Screen',
    reload: 'Muat Semula',
    density: 'Densiti',
    densityDefault: 'Biasa',
    densityLarger: 'Besar',
    densityMiddle: 'Tengah',
    densitySmall: 'Kecil'
  },
  stepsForm: {
    next: 'Seterusnya',
    prev: 'Sebelumnya',
    submit: 'Selesai'
  },
  loginForm: {
    submitText: 'Log Masuk'
  },
  editableTable: {
    action: {
      save: 'Simpan',
      cancel: 'Membatalkan',
      delete: 'Menghapuskan',
      add: 'tambah baris data'
    }
  },
  switch: {
    open: 'Terbuka',
    close: 'Tutup'
  }
});
;// ./node_modules/@ant-design/pro-provider/es/locale/pl_PL.js
/* harmony default export */ const pl_PL = ({
  moneySymbol: 'zł',
  form: {
    lightFilter: {
      more: 'Więcej',
      clear: 'Wyczyść',
      confirm: 'Potwierdź',
      itemUnit: 'Ilość'
    }
  },
  tableForm: {
    search: 'Szukaj',
    reset: 'Reset',
    submit: 'Zatwierdź',
    collapsed: 'Pokaż wiecej',
    expand: 'Pokaż mniej',
    inputPlaceholder: 'Proszę podać',
    selectPlaceholder: 'Proszę wybrać'
  },
  alert: {
    clear: 'Wyczyść',
    selected: 'Wybrane',
    item: 'Wpis'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'z',
      item: 'Wpisów'
    }
  },
  tableToolBar: {
    leftPin: 'Przypnij do lewej',
    rightPin: 'Przypnij do prawej',
    noPin: 'Odepnij',
    leftFixedTitle: 'Przypięte do lewej',
    rightFixedTitle: 'Przypięte do prawej',
    noFixedTitle: 'Nieprzypięte',
    reset: 'Reset',
    columnDisplay: 'Wyświetlane wiersze',
    columnSetting: 'Ustawienia',
    fullScreen: 'Pełen ekran',
    exitFullScreen: 'Zamknij pełen ekran',
    reload: 'Odśwież',
    density: 'Odstęp',
    densityDefault: 'Standard',
    densityLarger: 'Wiekszy',
    densityMiddle: 'Sredni',
    densitySmall: 'Kompaktowy'
  },
  stepsForm: {
    next: 'Weiter',
    prev: 'Zurück',
    submit: 'Abschließen'
  },
  loginForm: {
    submitText: 'Zaloguj się'
  },
  editableTable: {
    action: {
      save: 'Zapisać',
      cancel: 'Anuluj',
      delete: 'Usunąć',
      add: 'dodawanie wiersza danych'
    }
  },
  switch: {
    open: 'otwierać',
    close: 'zamykać'
  }
});
;// ./node_modules/@ant-design/pro-provider/es/locale/pt_BR.js
/* harmony default export */ const pt_BR = ({
  moneySymbol: 'R$',
  form: {
    lightFilter: {
      more: 'Mais',
      clear: 'Limpar',
      confirm: 'Confirmar',
      itemUnit: 'Itens'
    }
  },
  tableForm: {
    search: 'Filtrar',
    reset: 'Limpar',
    submit: 'Confirmar',
    collapsed: 'Expandir',
    expand: 'Colapsar',
    inputPlaceholder: 'Por favor insira',
    selectPlaceholder: 'Por favor selecione'
  },
  alert: {
    clear: 'Limpar',
    selected: 'Selecionado(s)',
    item: 'Item(s)'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'de',
      item: 'itens'
    }
  },
  tableToolBar: {
    leftPin: 'Fixar à esquerda',
    rightPin: 'Fixar à direita',
    noPin: 'Desfixado',
    leftFixedTitle: 'Fixado à esquerda',
    rightFixedTitle: 'Fixado à direita',
    noFixedTitle: 'Não fixado',
    reset: 'Limpar',
    columnDisplay: 'Mostrar Coluna',
    columnSetting: 'Configurações',
    fullScreen: 'Tela Cheia',
    exitFullScreen: 'Sair da Tela Cheia',
    reload: 'Atualizar',
    density: 'Densidade',
    densityDefault: 'Padrão',
    densityLarger: 'Largo',
    densityMiddle: 'Médio',
    densitySmall: 'Compacto'
  },
  stepsForm: {
    next: 'Próximo',
    prev: 'Anterior',
    submit: 'Enviar'
  },
  loginForm: {
    submitText: 'Entrar'
  },
  editableTable: {
    action: {
      save: 'Salvar',
      cancel: 'Cancelar',
      delete: 'Apagar',
      add: 'adicionar uma linha de dados'
    }
  },
  switch: {
    open: 'abrir',
    close: 'fechar'
  }
});
;// ./node_modules/@ant-design/pro-provider/es/locale/ru_RU.js
/* harmony default export */ const ru_RU = ({
  moneySymbol: '₽',
  form: {
    lightFilter: {
      more: 'Еще',
      clear: 'Очистить',
      confirm: 'ОК',
      itemUnit: 'Позиции'
    }
  },
  tableForm: {
    search: 'Найти',
    reset: 'Сброс',
    submit: 'Отправить',
    collapsed: 'Развернуть',
    expand: 'Свернуть',
    inputPlaceholder: 'Введите значение',
    selectPlaceholder: 'Выберите значение'
  },
  alert: {
    clear: 'Очистить',
    selected: 'Выбрано',
    item: 'элементов'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'из',
      item: 'элементов'
    }
  },
  tableToolBar: {
    leftPin: 'Закрепить слева',
    rightPin: 'Закрепить справа',
    noPin: 'Открепить',
    leftFixedTitle: 'Закреплено слева',
    rightFixedTitle: 'Закреплено справа',
    noFixedTitle: 'Не закреплено',
    reset: 'Сброс',
    columnDisplay: 'Отображение столбца',
    columnSetting: 'Настройки',
    fullScreen: 'Полный экран',
    exitFullScreen: 'Выйти из полноэкранного режима',
    reload: 'Обновить',
    density: 'Размер',
    densityDefault: 'По умолчанию',
    densityLarger: 'Большой',
    densityMiddle: 'Средний',
    densitySmall: 'Сжатый'
  },
  stepsForm: {
    next: 'Следующий',
    prev: 'Предыдущий',
    submit: 'Завершить'
  },
  loginForm: {
    submitText: 'Вход'
  },
  editableTable: {
    action: {
      save: 'Сохранить',
      cancel: 'Отменить',
      delete: 'Удалить',
      add: 'добавить ряд данных'
    }
  },
  switch: {
    open: 'Открытый чемпионат мира по теннису',
    close: 'По адресу:'
  }
});
;// ./node_modules/@ant-design/pro-provider/es/locale/sk_SK.js
/* harmony default export */ const sk_SK = ({
  moneySymbol: '€',
  deleteThisLine: 'Odstrániť tento riadok',
  copyThisLine: 'Skopírujte tento riadok',
  form: {
    lightFilter: {
      more: 'Viac',
      clear: 'Vyčistiť',
      confirm: 'Potvrďte',
      itemUnit: 'Položky'
    }
  },
  tableForm: {
    search: 'Vyhladať',
    reset: 'Resetovať',
    submit: 'Odoslať',
    collapsed: 'Rozbaliť',
    expand: 'Zbaliť',
    inputPlaceholder: 'Prosím, zadajte',
    selectPlaceholder: 'Prosím, vyberte'
  },
  alert: {
    clear: 'Vyčistiť',
    selected: 'Vybraný',
    item: 'Položka'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'z',
      item: 'položiek'
    }
  },
  tableToolBar: {
    leftPin: 'Pripnúť vľavo',
    rightPin: 'Pripnúť vpravo',
    noPin: 'Odopnuté',
    leftFixedTitle: 'Fixované na ľavo',
    rightFixedTitle: 'Fixované na pravo',
    noFixedTitle: 'Nefixované',
    reset: 'Resetovať',
    columnDisplay: 'Zobrazenie stĺpcov',
    columnSetting: 'Nastavenia',
    fullScreen: 'Celá obrazovka',
    exitFullScreen: 'Ukončiť celú obrazovku',
    reload: 'Obnoviť',
    density: 'Hustota',
    densityDefault: 'Predvolené',
    densityLarger: 'Väčšie',
    densityMiddle: 'Stredné',
    densitySmall: 'Kompaktné'
  },
  stepsForm: {
    next: 'Ďalšie',
    prev: 'Predchádzajúce',
    submit: 'Potvrdiť'
  },
  loginForm: {
    submitText: 'Prihlásiť sa'
  },
  editableTable: {
    onlyOneLineEditor: 'Upravovať možno iba jeden riadok',
    action: {
      save: 'Uložiť',
      cancel: 'Zrušiť',
      delete: 'Odstrániť',
      add: 'pridať riadok údajov'
    }
  },
  switch: {
    open: 'otvoriť',
    close: 'zavrieť'
  }
});
;// ./node_modules/@ant-design/pro-provider/es/locale/sr_RS.js
/* harmony default export */ const sr_RS = ({
  moneySymbol: 'RSD',
  form: {
    lightFilter: {
      more: 'Više',
      clear: 'Očisti',
      confirm: 'Potvrdi',
      itemUnit: 'Stavke'
    }
  },
  tableForm: {
    search: 'Pronađi',
    reset: 'Resetuj',
    submit: 'Pošalji',
    collapsed: 'Proširi',
    expand: 'Skupi',
    inputPlaceholder: 'Molimo unesite',
    selectPlaceholder: 'Molimo odaberite'
  },
  alert: {
    clear: 'Očisti',
    selected: 'Odabrano',
    item: 'Stavka'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'od',
      item: 'stavki'
    }
  },
  tableToolBar: {
    leftPin: 'Zakači levo',
    rightPin: 'Zakači desno',
    noPin: 'Nije zakačeno',
    leftFixedTitle: 'Fiksirano levo',
    rightFixedTitle: 'Fiksirano desno',
    noFixedTitle: 'Nije fiksirano',
    reset: 'Resetuj',
    columnDisplay: 'Prikaz kolona',
    columnSetting: 'Podešavanja',
    fullScreen: 'Pun ekran',
    exitFullScreen: 'Zatvori pun ekran',
    reload: 'Osveži',
    density: 'Veličina',
    densityDefault: 'Podrazumevana',
    densityLarger: 'Veća',
    densityMiddle: 'Srednja',
    densitySmall: 'Kompaktna'
  },
  stepsForm: {
    next: 'Dalje',
    prev: 'Nazad',
    submit: 'Gotovo'
  },
  loginForm: {
    submitText: 'Prijavi se'
  },
  editableTable: {
    action: {
      save: 'Sačuvaj',
      cancel: 'Poništi',
      delete: 'Obriši',
      add: 'dodajte red podataka'
    }
  },
  switch: {
    open: 'Отворите',
    close: 'Затворите'
  }
});
;// ./node_modules/@ant-design/pro-provider/es/locale/th_TH.js
/* harmony default export */ const th_TH = ({
  moneySymbol: '฿',
  deleteThisLine: 'ลบบรรทัดนี้',
  copyThisLine: 'คัดลอกบรรทัดนี้',
  form: {
    lightFilter: {
      more: 'มากกว่า',
      clear: 'ชัดเจน',
      confirm: 'ยืนยัน',
      itemUnit: 'รายการ'
    }
  },
  tableForm: {
    search: 'สอบถาม',
    reset: 'รีเซ็ต',
    submit: 'ส่ง',
    collapsed: 'ขยาย',
    expand: 'ทรุด',
    inputPlaceholder: 'กรุณาป้อน',
    selectPlaceholder: 'โปรดเลือก'
  },
  alert: {
    clear: 'ชัดเจน',
    selected: 'เลือกแล้ว',
    item: 'รายการ'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'ของ',
      item: 'รายการ'
    }
  },
  tableToolBar: {
    leftPin: 'ปักหมุดไปทางซ้าย',
    rightPin: 'ปักหมุดไปทางขวา',
    noPin: 'เลิกตรึงแล้ว',
    leftFixedTitle: 'แก้ไขด้านซ้าย',
    rightFixedTitle: 'แก้ไขด้านขวา',
    noFixedTitle: 'ไม่คงที่',
    reset: 'รีเซ็ต',
    columnDisplay: 'การแสดงคอลัมน์',
    columnSetting: 'การตั้งค่า',
    fullScreen: 'เต็มจอ',
    exitFullScreen: 'ออกจากโหมดเต็มหน้าจอ',
    reload: 'รีเฟรช',
    density: 'ความหนาแน่น',
    densityDefault: 'ค่าเริ่มต้น',
    densityLarger: 'ขนาดใหญ่ขึ้น',
    densityMiddle: 'กลาง',
    densitySmall: 'กะทัดรัด'
  },
  stepsForm: {
    next: 'ถัดไป',
    prev: 'ก่อนหน้า',
    submit: 'เสร็จ'
  },
  loginForm: {
    submitText: 'เข้าสู่ระบบ'
  },
  editableTable: {
    onlyOneLineEditor: 'แก้ไขได้เพียงบรรทัดเดียวเท่านั้น',
    action: {
      save: 'บันทึก',
      cancel: 'ยกเลิก',
      delete: 'ลบ',
      add: 'เพิ่มแถวของข้อมูล'
    }
  },
  switch: {
    open: 'เปิด',
    close: 'ปิด'
  }
});
;// ./node_modules/@ant-design/pro-provider/es/locale/tr_TR.js
/* harmony default export */ const tr_TR = ({
  moneySymbol: '₺',
  form: {
    lightFilter: {
      more: 'Daha Fazla',
      clear: 'Temizle',
      confirm: 'Onayla',
      itemUnit: 'Öğeler'
    }
  },
  tableForm: {
    search: 'Filtrele',
    reset: 'Sıfırla',
    submit: 'Gönder',
    collapsed: 'Daha fazla',
    expand: 'Daha az',
    inputPlaceholder: 'Filtrelemek için bir değer girin',
    selectPlaceholder: 'Filtrelemek için bir değer seçin'
  },
  alert: {
    clear: 'Temizle',
    selected: 'Seçili',
    item: 'Öğe'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'Toplam',
      item: 'Öğe'
    }
  },
  tableToolBar: {
    leftPin: 'Sola sabitle',
    rightPin: 'Sağa sabitle',
    noPin: 'Sabitlemeyi kaldır',
    leftFixedTitle: 'Sola sabitlendi',
    rightFixedTitle: 'Sağa sabitlendi',
    noFixedTitle: 'Sabitlenmedi',
    reset: 'Sıfırla',
    columnDisplay: 'Kolon Görünümü',
    columnSetting: 'Ayarlar',
    fullScreen: 'Tam Ekran',
    exitFullScreen: 'Tam Ekrandan Çık',
    reload: 'Yenile',
    density: 'Kalınlık',
    densityDefault: 'Varsayılan',
    densityLarger: 'Büyük',
    densityMiddle: 'Orta',
    densitySmall: 'Küçük'
  },
  stepsForm: {
    next: 'Sıradaki',
    prev: 'Önceki',
    submit: 'Gönder'
  },
  loginForm: {
    submitText: 'Giriş Yap'
  },
  editableTable: {
    action: {
      save: 'Kaydet',
      cancel: 'Vazgeç',
      delete: 'Sil',
      add: 'foegje in rige gegevens ta'
    }
  },
  switch: {
    open: 'açık',
    close: 'kapatmak'
  }
});
;// ./node_modules/@ant-design/pro-provider/es/locale/vi_VN.js
/* harmony default export */ const vi_VN = ({
  moneySymbol: '₫',
  form: {
    lightFilter: {
      more: 'Nhiều hơn',
      clear: 'Trong',
      confirm: 'Xác nhận',
      itemUnit: 'Mục'
    }
  },
  tableForm: {
    search: 'Tìm kiếm',
    reset: 'Làm lại',
    submit: 'Gửi đi',
    collapsed: 'Mở rộng',
    expand: 'Thu gọn',
    inputPlaceholder: 'nhập dữ liệu',
    selectPlaceholder: 'Vui lòng chọn'
  },
  alert: {
    clear: 'Xóa',
    selected: 'đã chọn',
    item: 'mục'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'trên',
      item: 'mặt hàng'
    }
  },
  tableToolBar: {
    leftPin: 'Ghim trái',
    rightPin: 'Ghim phải',
    noPin: 'Bỏ ghim',
    leftFixedTitle: 'Cố định trái',
    rightFixedTitle: 'Cố định phải',
    noFixedTitle: 'Chưa cố định',
    reset: 'Làm lại',
    columnDisplay: 'Cột hiển thị',
    columnSetting: 'Cấu hình',
    fullScreen: 'Chế độ toàn màn hình',
    exitFullScreen: 'Thoát chế độ toàn màn hình',
    reload: 'Làm mới',
    density: 'Mật độ hiển thị',
    densityDefault: 'Mặc định',
    densityLarger: 'Mặc định',
    densityMiddle: 'Trung bình',
    densitySmall: 'Chật'
  },
  stepsForm: {
    next: 'Sau',
    prev: 'Trước',
    submit: 'Kết thúc'
  },
  loginForm: {
    submitText: 'Đăng nhập'
  },
  editableTable: {
    action: {
      save: 'Cứu',
      cancel: 'Hủy',
      delete: 'Xóa',
      add: 'thêm một hàng dữ liệu'
    }
  },
  switch: {
    open: 'mở',
    close: 'đóng'
  }
});
;// ./node_modules/@ant-design/pro-provider/es/locale/zh_CN.js
/* harmony default export */ const locale_zh_CN = ({
  moneySymbol: '￥',
  deleteThisLine: '删除此行',
  copyThisLine: '复制此行',
  form: {
    lightFilter: {
      more: '更多筛选',
      clear: '清除',
      confirm: '确认',
      itemUnit: '项'
    }
  },
  tableForm: {
    search: '查询',
    reset: '重置',
    submit: '提交',
    collapsed: '展开',
    expand: '收起',
    inputPlaceholder: '请输入',
    selectPlaceholder: '请选择'
  },
  alert: {
    clear: '取消选择',
    selected: '已选择',
    item: '项'
  },
  pagination: {
    total: {
      range: '第',
      total: '条/总共',
      item: '条'
    }
  },
  tableToolBar: {
    leftPin: '固定在列首',
    rightPin: '固定在列尾',
    noPin: '不固定',
    leftFixedTitle: '固定在左侧',
    rightFixedTitle: '固定在右侧',
    noFixedTitle: '不固定',
    reset: '重置',
    columnDisplay: '列展示',
    columnSetting: '列设置',
    fullScreen: '全屏',
    exitFullScreen: '退出全屏',
    reload: '刷新',
    density: '密度',
    densityDefault: '正常',
    densityLarger: '默认',
    densityMiddle: '中等',
    densitySmall: '紧凑'
  },
  stepsForm: {
    next: '下一步',
    prev: '上一步',
    submit: '提交'
  },
  loginForm: {
    submitText: '登录'
  },
  editableTable: {
    onlyOneLineEditor: '只能同时编辑一行',
    action: {
      save: '保存',
      cancel: '取消',
      delete: '删除',
      add: '添加一行数据'
    }
  },
  switch: {
    open: '打开',
    close: '关闭'
  }
});
;// ./node_modules/@ant-design/pro-provider/es/locale/zh_TW.js
/* harmony default export */ const zh_TW = ({
  moneySymbol: 'NT$',
  deleteThisLine: '刪除此行',
  copyThisLine: '複製此行',
  form: {
    lightFilter: {
      more: '更多篩選',
      clear: '清除',
      confirm: '確認',
      itemUnit: '項'
    }
  },
  tableForm: {
    search: '查詢',
    reset: '重置',
    submit: '提交',
    collapsed: '展開',
    expand: '收起',
    inputPlaceholder: '請輸入',
    selectPlaceholder: '請選擇'
  },
  alert: {
    clear: '取消選擇',
    selected: '已選擇',
    item: '項'
  },
  pagination: {
    total: {
      range: '第',
      total: '條/總共',
      item: '條'
    }
  },
  tableToolBar: {
    leftPin: '固定到左邊',
    rightPin: '固定到右邊',
    noPin: '不固定',
    leftFixedTitle: '固定在左側',
    rightFixedTitle: '固定在右側',
    noFixedTitle: '不固定',
    reset: '重置',
    columnDisplay: '列展示',
    columnSetting: '列設置',
    fullScreen: '全屏',
    exitFullScreen: '退出全屏',
    reload: '刷新',
    density: '密度',
    densityDefault: '正常',
    densityLarger: '默認',
    densityMiddle: '中等',
    densitySmall: '緊湊'
  },
  stepsForm: {
    next: '下一步',
    prev: '上一步',
    submit: '完成'
  },
  loginForm: {
    submitText: '登入'
  },
  editableTable: {
    onlyOneLineEditor: '只能同時編輯一行',
    action: {
      save: '保存',
      cancel: '取消',
      delete: '刪除',
      add: '新增一行資料'
    }
  },
  switch: {
    open: '打開',
    close: '關閉'
  }
});
;// ./node_modules/@ant-design/pro-provider/es/intl.js




























/**
 * 安全的从一个对象中读取相应的值
 * @param source
 * @param path
 * @param defaultValue
 * @returns
 */
function get(source, path, defaultValue) {
  // a[3].b -> a.3.b
  var paths = path.replace(/\[(\d+)\]/g, '.$1').split('.');
  var result = source;
  var message = defaultValue;
  // eslint-disable-next-line no-restricted-syntax
  var _iterator = _createForOfIteratorHelper(paths),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var p = _step.value;
      message = Object(result)[p];
      result = Object(result)[p];
      if (message === undefined) {
        return defaultValue;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return message;
}
/**
 * 创建一个国际化的操作函数
 *
 * @param locale
 * @param localeMap
 */
var createIntl = function createIntl(locale, localeMap) {
  return {
    getMessage: function getMessage(id, defaultMessage) {
      return get(localeMap, id, defaultMessage) || defaultMessage;
    },
    locale: locale
  };
};
var mnMNIntl = createIntl('mn_MN', mn_MN);
var arEGIntl = createIntl('ar_EG', ar_EG);
var intl_zhCNIntl = createIntl('zh_CN', locale_zh_CN);
var enUSIntl = createIntl('en_US', en_US);
var enGBIntl = createIntl('en_GB', en_GB);
var viVNIntl = createIntl('vi_VN', vi_VN);
var itITIntl = createIntl('it_IT', it_IT);
var jaJPIntl = createIntl('ja_JP', ja_JP);
var esESIntl = createIntl('es_ES', es_ES);
var caESIntl = createIntl('ca_ES', ca_ES);
var ruRUIntl = createIntl('ru_RU', ru_RU);
var srRSIntl = createIntl('sr_RS', sr_RS);
var msMYIntl = createIntl('ms_MY', ms_MY);
var zhTWIntl = createIntl('zh_TW', zh_TW);
var frFRIntl = createIntl('fr_FR', fr_FR);
var ptBRIntl = createIntl('pt_BR', pt_BR);
var koKRIntl = createIntl('ko_KR', ko_KR);
var idIDIntl = createIntl('id_ID', id_ID);
var deDEIntl = createIntl('de_DE', de_DE);
var faIRIntl = createIntl('fa_IR', fa_IR);
var trTRIntl = createIntl('tr_TR', tr_TR);
var plPLIntl = createIntl('pl_PL', pl_PL);
var hrHRIntl = createIntl('hr_', hr_HR);
var thTHIntl = createIntl('th_TH', th_TH);
var csCZIntl = createIntl('cs_cz', cs_CZ);
var skSKIntl = createIntl('sk_SK', sk_SK);
var intl_intlMap = {
  'mn-MN': mnMNIntl,
  'ar-EG': arEGIntl,
  'zh-CN': intl_zhCNIntl,
  'en-US': enUSIntl,
  'en-GB': enGBIntl,
  'vi-VN': viVNIntl,
  'it-IT': itITIntl,
  'ja-JP': jaJPIntl,
  'es-ES': esESIntl,
  'ca-ES': caESIntl,
  'ru-RU': ruRUIntl,
  'sr-RS': srRSIntl,
  'ms-MY': msMYIntl,
  'zh-TW': zhTWIntl,
  'fr-FR': frFRIntl,
  'pt-BR': ptBRIntl,
  'ko-KR': koKRIntl,
  'id-ID': idIDIntl,
  'de-DE': deDEIntl,
  'fa-IR': faIRIntl,
  'tr-TR': trTRIntl,
  'pl-PL': plPLIntl,
  'hr-HR': hrHRIntl,
  'th-TH': thTHIntl,
  'cs-CZ': csCZIntl,
  'sk-SK': skSKIntl
};
var intlMapKeys = Object.keys(intl_intlMap);

/**
 * 根据 antd 的 key 来找到的 locale 插件的 key
 *
 * @param localeKey
 */
var intl_findIntlKeyByAntdLocaleKey = function findIntlKeyByAntdLocaleKey(localeKey) {
  var localeName = (localeKey || 'zh-CN').toLocaleLowerCase();
  return intlMapKeys.find(function (intlKey) {
    var LowerCaseKey = intlKey.toLocaleLowerCase();
    return LowerCaseKey.includes(localeName);
  });
};

;// ./node_modules/@ant-design/pro-provider/es/useStyle/token.js

var _theme$defaultAlgorit;


var token_defaultToken = {
  blue: '#1677ff',
  purple: '#722ED1',
  cyan: '#13C2C2',
  green: '#52C41A',
  magenta: '#EB2F96',
  pink: '#eb2f96',
  red: '#F5222D',
  orange: '#FA8C16',
  yellow: '#FADB14',
  volcano: '#FA541C',
  geekblue: '#2F54EB',
  gold: '#FAAD14',
  lime: '#A0D911',
  colorPrimary: '#1677ff',
  colorSuccess: '#52c41a',
  colorWarning: '#faad14',
  colorError: '#ff7875',
  colorInfo: '#1677ff',
  colorTextBase: '#000',
  colorBgBase: '#fff',
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
  fontSize: 14,
  lineWidth: 1,
  lineType: 'solid',
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: 'cubic-bezier(0.08, 0.82, 0.17, 1)',
  motionEaseInOutCirc: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
  motionEaseOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  motionEaseInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  motionEaseOutBack: 'cubic-bezier(0.12, 0.4, 0.29, 1.46)',
  motionEaseInQuint: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  motionEaseOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
  borderRadius: 4,
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  controlHeight: 32,
  zIndexBase: 0,
  zIndexPopupBase: 1000,
  opacityImage: 1,
  wireframe: false,
  'blue-1': '#e6f4ff',
  'blue-2': '#bae0ff',
  'blue-3': '#91caff',
  'blue-4': '#69b1ff',
  'blue-5': '#4096ff',
  'blue-6': '#1677ff',
  'blue-7': '#0958d9',
  'blue-8': '#003eb3',
  'blue-9': '#002c8c',
  'blue-10': '#001d66',
  'purple-1': '#f9f0ff',
  'purple-2': '#efdbff',
  'purple-3': '#d3adf7',
  'purple-4': '#b37feb',
  'purple-5': '#9254de',
  'purple-6': '#722ed1',
  'purple-7': '#531dab',
  'purple-8': '#391085',
  'purple-9': '#22075e',
  'purple-10': '#120338',
  'cyan-1': '#e6fffb',
  'cyan-2': '#b5f5ec',
  'cyan-3': '#87e8de',
  'cyan-4': '#5cdbd3',
  'cyan-5': '#36cfc9',
  'cyan-6': '#13c2c2',
  'cyan-7': '#08979c',
  'cyan-8': '#006d75',
  'cyan-9': '#00474f',
  'cyan-10': '#002329',
  'green-1': '#f6ffed',
  'green-2': '#d9f7be',
  'green-3': '#b7eb8f',
  'green-4': '#95de64',
  'green-5': '#73d13d',
  'green-6': '#52c41a',
  'green-7': '#389e0d',
  'green-8': '#237804',
  'green-9': '#135200',
  'green-10': '#092b00',
  'magenta-1': '#fff0f6',
  'magenta-2': '#ffd6e7',
  'magenta-3': '#ffadd2',
  'magenta-4': '#ff85c0',
  'magenta-5': '#f759ab',
  'magenta-6': '#eb2f96',
  'magenta-7': '#c41d7f',
  'magenta-8': '#9e1068',
  'magenta-9': '#780650',
  'magenta-10': '#520339',
  'pink-1': '#fff0f6',
  'pink-2': '#ffd6e7',
  'pink-3': '#ffadd2',
  'pink-4': '#ff85c0',
  'pink-5': '#f759ab',
  'pink-6': '#eb2f96',
  'pink-7': '#c41d7f',
  'pink-8': '#9e1068',
  'pink-9': '#780650',
  'pink-10': '#520339',
  'red-1': '#fff1f0',
  'red-2': '#ffccc7',
  'red-3': '#ffa39e',
  'red-4': '#ff7875',
  'red-5': '#ff4d4f',
  'red-6': '#f5222d',
  'red-7': '#cf1322',
  'red-8': '#a8071a',
  'red-9': '#820014',
  'red-10': '#5c0011',
  'orange-1': '#fff7e6',
  'orange-2': '#ffe7ba',
  'orange-3': '#ffd591',
  'orange-4': '#ffc069',
  'orange-5': '#ffa940',
  'orange-6': '#fa8c16',
  'orange-7': '#d46b08',
  'orange-8': '#ad4e00',
  'orange-9': '#873800',
  'orange-10': '#612500',
  'yellow-1': '#feffe6',
  'yellow-2': '#ffffb8',
  'yellow-3': '#fffb8f',
  'yellow-4': '#fff566',
  'yellow-5': '#ffec3d',
  'yellow-6': '#fadb14',
  'yellow-7': '#d4b106',
  'yellow-8': '#ad8b00',
  'yellow-9': '#876800',
  'yellow-10': '#614700',
  'volcano-1': '#fff2e8',
  'volcano-2': '#ffd8bf',
  'volcano-3': '#ffbb96',
  'volcano-4': '#ff9c6e',
  'volcano-5': '#ff7a45',
  'volcano-6': '#fa541c',
  'volcano-7': '#d4380d',
  'volcano-8': '#ad2102',
  'volcano-9': '#871400',
  'volcano-10': '#610b00',
  'geekblue-1': '#f0f5ff',
  'geekblue-2': '#d6e4ff',
  'geekblue-3': '#adc6ff',
  'geekblue-4': '#85a5ff',
  'geekblue-5': '#597ef7',
  'geekblue-6': '#2f54eb',
  'geekblue-7': '#1d39c4',
  'geekblue-8': '#10239e',
  'geekblue-9': '#061178',
  'geekblue-10': '#030852',
  'gold-1': '#fffbe6',
  'gold-2': '#fff1b8',
  'gold-3': '#ffe58f',
  'gold-4': '#ffd666',
  'gold-5': '#ffc53d',
  'gold-6': '#faad14',
  'gold-7': '#d48806',
  'gold-8': '#ad6800',
  'gold-9': '#874d00',
  'gold-10': '#613400',
  'lime-1': '#fcffe6',
  'lime-2': '#f4ffb8',
  'lime-3': '#eaff8f',
  'lime-4': '#d3f261',
  'lime-5': '#bae637',
  'lime-6': '#a0d911',
  'lime-7': '#7cb305',
  'lime-8': '#5b8c00',
  'lime-9': '#3f6600',
  'lime-10': '#254000',
  colorText: 'rgba(0, 0, 0, 0.88)',
  colorTextSecondary: 'rgba(0, 0, 0, 0.65)',
  colorTextTertiary: 'rgba(0, 0, 0, 0.45)',
  colorTextQuaternary: 'rgba(0, 0, 0, 0.25)',
  colorFill: 'rgba(0, 0, 0, 0.15)',
  colorFillSecondary: 'rgba(0, 0, 0, 0.06)',
  colorFillTertiary: 'rgba(0, 0, 0, 0.04)',
  colorFillQuaternary: 'rgba(0, 0, 0, 0.02)',
  colorBgLayout: 'hsl(220,23%,97%)',
  colorBgContainer: '#ffffff',
  colorBgElevated: '#ffffff',
  colorBgSpotlight: 'rgba(0, 0, 0, 0.85)',
  colorBorder: '#d9d9d9',
  colorBorderSecondary: '#f0f0f0',
  colorPrimaryBg: '#e6f4ff',
  colorPrimaryBgHover: '#bae0ff',
  colorPrimaryBorder: '#91caff',
  colorPrimaryBorderHover: '#69b1ff',
  colorPrimaryHover: '#4096ff',
  colorPrimaryActive: '#0958d9',
  colorPrimaryTextHover: '#4096ff',
  colorPrimaryText: '#1677ff',
  colorPrimaryTextActive: '#0958d9',
  colorSuccessBg: '#f6ffed',
  colorSuccessBgHover: '#d9f7be',
  colorSuccessBorder: '#b7eb8f',
  colorSuccessBorderHover: '#95de64',
  colorSuccessHover: '#95de64',
  colorSuccessActive: '#389e0d',
  colorSuccessTextHover: '#73d13d',
  colorSuccessText: '#52c41a',
  colorSuccessTextActive: '#389e0d',
  colorErrorBg: '#fff2f0',
  colorErrorBgHover: '#fff1f0',
  colorErrorBorder: '#ffccc7',
  colorErrorBorderHover: '#ffa39e',
  colorErrorHover: '#ffa39e',
  colorErrorActive: '#d9363e',
  colorErrorTextHover: '#ff7875',
  colorErrorText: '#ff4d4f',
  colorErrorTextActive: '#d9363e',
  colorWarningBg: '#fffbe6',
  colorWarningBgHover: '#fff1b8',
  colorWarningBorder: '#ffe58f',
  colorWarningBorderHover: '#ffd666',
  colorWarningHover: '#ffd666',
  colorWarningActive: '#d48806',
  colorWarningTextHover: '#ffc53d',
  colorWarningText: '#faad14',
  colorWarningTextActive: '#d48806',
  colorInfoBg: '#e6f4ff',
  colorInfoBgHover: '#bae0ff',
  colorInfoBorder: '#91caff',
  colorInfoBorderHover: '#69b1ff',
  colorInfoHover: '#69b1ff',
  colorInfoActive: '#0958d9',
  colorInfoTextHover: '#4096ff',
  colorInfoText: '#1677ff',
  colorInfoTextActive: '#0958d9',
  colorBgMask: 'rgba(0, 0, 0, 0.45)',
  colorWhite: '#fff',
  sizeXXL: 48,
  sizeXL: 32,
  sizeLG: 24,
  sizeMD: 20,
  sizeMS: 16,
  size: 16,
  sizeSM: 12,
  sizeXS: 8,
  sizeXXS: 4,
  controlHeightSM: 24,
  controlHeightXS: 16,
  controlHeightLG: 40,
  motionDurationFast: '0.1s',
  motionDurationMid: '0.2s',
  motionDurationSlow: '0.3s',
  fontSizes: [12, 14, 16, 20, 24, 30, 38, 46, 56, 68],
  lineHeights: [1.6666666666666667, 1.5714285714285714, 1.5, 1.4, 1.3333333333333333, 1.2666666666666666, 1.2105263157894737, 1.173913043478261, 1.1428571428571428, 1.1176470588235294],
  lineWidthBold: 2,
  borderRadiusXS: 1,
  borderRadiusSM: 4,
  borderRadiusLG: 8,
  borderRadiusOuter: 4,
  colorLink: '#1677ff',
  colorLinkHover: '#69b1ff',
  colorLinkActive: '#0958d9',
  colorFillContent: 'rgba(0, 0, 0, 0.06)',
  colorFillContentHover: 'rgba(0, 0, 0, 0.15)',
  colorFillAlter: 'rgba(0, 0, 0, 0.02)',
  colorBgContainerDisabled: 'rgba(0, 0, 0, 0.04)',
  colorBorderBg: '#ffffff',
  colorSplit: 'rgba(5, 5, 5, 0.06)',
  colorTextPlaceholder: 'rgba(0, 0, 0, 0.25)',
  colorTextDisabled: 'rgba(0, 0, 0, 0.25)',
  colorTextHeading: 'rgba(0, 0, 0, 0.88)',
  colorTextLabel: 'rgba(0, 0, 0, 0.65)',
  colorTextDescription: 'rgba(0, 0, 0, 0.45)',
  colorTextLightSolid: '#fff',
  colorHighlight: '#ff7875',
  colorBgTextHover: 'rgba(0, 0, 0, 0.06)',
  colorBgTextActive: 'rgba(0, 0, 0, 0.15)',
  colorIcon: 'rgba(0, 0, 0, 0.45)',
  colorIconHover: 'rgba(0, 0, 0, 0.88)',
  colorErrorOutline: 'rgba(255, 38, 5, 0.06)',
  colorWarningOutline: 'rgba(255, 215, 5, 0.1)',
  fontSizeSM: 12,
  fontSizeLG: 16,
  fontSizeXL: 20,
  fontSizeHeading1: 38,
  fontSizeHeading2: 30,
  fontSizeHeading3: 24,
  fontSizeHeading4: 20,
  fontSizeHeading5: 16,
  fontSizeIcon: 12,
  lineHeight: 1.5714285714285714,
  lineHeightLG: 1.5,
  lineHeightSM: 1.6666666666666667,
  lineHeightHeading1: 1.2105263157894737,
  lineHeightHeading2: 1.2666666666666666,
  lineHeightHeading3: 1.3333333333333333,
  lineHeightHeading4: 1.4,
  lineHeightHeading5: 1.5,
  controlOutlineWidth: 2,
  controlInteractiveSize: 16,
  controlItemBgHover: 'rgba(0, 0, 0, 0.04)',
  controlItemBgActive: '#e6f4ff',
  controlItemBgActiveHover: '#bae0ff',
  controlItemBgActiveDisabled: 'rgba(0, 0, 0, 0.15)',
  controlTmpOutline: 'rgba(0, 0, 0, 0.02)',
  controlOutline: 'rgba(5, 145, 255, 0.1)',
  fontWeightStrong: 600,
  opacityLoading: 0.65,
  linkDecoration: 'none',
  linkHoverDecoration: 'none',
  linkFocusDecoration: 'none',
  controlPaddingHorizontal: 12,
  controlPaddingHorizontalSM: 8,
  paddingXXS: 4,
  paddingXS: 8,
  paddingSM: 12,
  padding: 16,
  paddingMD: 20,
  paddingLG: 24,
  paddingXL: 32,
  paddingContentHorizontalLG: 24,
  paddingContentVerticalLG: 16,
  paddingContentHorizontal: 16,
  paddingContentVertical: 12,
  paddingContentHorizontalSM: 16,
  paddingContentVerticalSM: 8,
  marginXXS: 4,
  marginXS: 8,
  marginSM: 12,
  margin: 16,
  marginMD: 20,
  marginLG: 24,
  marginXL: 32,
  marginXXL: 48,
  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.03),0 1px 6px -1px rgba(0, 0, 0, 0.02),0 2px 4px 0 rgba(0, 0, 0, 0.02)',
  boxShadowSecondary: '0 6px 16px 0 rgba(0, 0, 0, 0.08),0 3px 6px -4px rgba(0, 0, 0, 0.12),0 9px 28px 8px rgba(0, 0, 0, 0.05)',
  screenXS: 480,
  screenXSMin: 480,
  screenXSMax: 479,
  screenSM: 576,
  screenSMMin: 576,
  screenSMMax: 575,
  screenMD: 768,
  screenMDMin: 768,
  screenMDMax: 767,
  screenLG: 992,
  screenLGMin: 992,
  screenLGMax: 991,
  screenXL: 1200,
  screenXLMin: 1200,
  screenXLMax: 1199,
  screenXXL: 1600,
  screenXXLMin: 1600,
  screenXXLMax: 1599,
  boxShadowPopoverArrow: '3px 3px 7px rgba(0, 0, 0, 0.1)',
  boxShadowCard: '0 1px 2px -2px rgba(0, 0, 0, 0.16),0 3px 6px 0 rgba(0, 0, 0, 0.12),0 5px 12px 4px rgba(0, 0, 0, 0.09)',
  boxShadowDrawerRight: '-6px 0 16px 0 rgba(0, 0, 0, 0.08),-3px 0 6px -4px rgba(0, 0, 0, 0.12),-9px 0 28px 8px rgba(0, 0, 0, 0.05)',
  boxShadowDrawerLeft: '6px 0 16px 0 rgba(0, 0, 0, 0.08),3px 0 6px -4px rgba(0, 0, 0, 0.12),9px 0 28px 8px rgba(0, 0, 0, 0.05)',
  boxShadowDrawerUp: '0 6px 16px 0 rgba(0, 0, 0, 0.08),0 3px 6px -4px rgba(0, 0, 0, 0.12),0 9px 28px 8px rgba(0, 0, 0, 0.05)',
  boxShadowDrawerDown: '0 -6px 16px 0 rgba(0, 0, 0, 0.08),0 -3px 6px -4px rgba(0, 0, 0, 0.12),0 -9px 28px 8px rgba(0, 0, 0, 0.05)',
  boxShadowTabsOverflowLeft: 'inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)',
  boxShadowTabsOverflowRight: 'inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)',
  boxShadowTabsOverflowTop: 'inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)',
  boxShadowTabsOverflowBottom: 'inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)',
  _tokenKey: '19w80ff',
  _hashId: 'css-dev-only-do-not-override-i2zu9q'
};
var hashCode = function hashCode(str) {
  var seed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var h1 = 0xdeadbeef ^ seed,
    h2 = 0x41c6ce57 ^ seed;
  for (var i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ h1 >>> 16, 2246822507) ^ Math.imul(h2 ^ h2 >>> 13, 3266489909);
  h2 = Math.imul(h2 ^ h2 >>> 16, 2246822507) ^ Math.imul(h1 ^ h1 >>> 13, 3266489909);
  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};

// @ts-ignore
var emptyTheme = (0,es/* createTheme */.an)(function (token) {
  return token;
});
var token = {
  theme: emptyTheme,
  token: (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, token_defaultToken), theme === null || theme === void 0 ? void 0 : (_theme$defaultAlgorit = theme.defaultAlgorithm) === null || _theme$defaultAlgorit === void 0 ? void 0 : _theme$defaultAlgorit.call(theme, theme === null || theme === void 0 ? void 0 : theme.defaultSeed)),
  hashId: "pro-".concat(hashCode(JSON.stringify(token_defaultToken)))
};
var useToken = function useToken() {
  return token;
};
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./node_modules/@ant-design/pro-provider/es/index.js




var _excluded = (/* unused pure expression or super */ null && (["locale", "getPrefixCls"])),
  _excluded2 = (/* unused pure expression or super */ null && (["locale", "theme"]));
















/**
 * 用于判断当前是否需要开启哈希（Hash）模式。
 * 首先也会判断当前是否处于测试环境中（通过 process.env.NODE_ENV === 'TEST' 判断），
 * 如果是，则返回 false。否则，直接返回 true 表示需要打开。
 * @returns
 */
var isNeedOpenHash = function isNeedOpenHash() {
  var _process$env$NODE_ENV, _process$env$NODE_ENV2;
  if (typeof process !== 'undefined' && (((_process$env$NODE_ENV = "production") === null || _process$env$NODE_ENV === void 0 ? void 0 : _process$env$NODE_ENV.toUpperCase()) === 'TEST' || ((_process$env$NODE_ENV2 = "production") === null || _process$env$NODE_ENV2 === void 0 ? void 0 : _process$env$NODE_ENV2.toUpperCase()) === 'DEV')) {
    return false;
  }
  return true;
};

/**
 * 用于配置 ValueEnum 的通用配置
 */

/* Creating a context object with the default values. */
var ProConfigContext = /*#__PURE__*/react.createContext({
  intl: (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, intl_zhCNIntl), {}, {
    locale: 'default'
  }),
  valueTypeMap: {},
  theme: emptyTheme,
  hashed: true,
  dark: false,
  token: token_defaultToken
});
var ConfigConsumer = ProConfigContext.Consumer;

/**
 * 组件解除挂载后清空一下 cache
 * @date 2022-11-28
 * @returns null
 */

var CacheClean = function CacheClean() {
  var _useSWRConfig = useSWRConfig(),
    cache = _useSWRConfig.cache;
  useEffect(function () {
    return function () {
      // is a map
      // @ts-ignore
      cache.clear();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
};

/**
 * 用于配置 Pro 的组件,分装之后会简单一些
 * @param props
 * @returns
 */
var ConfigProviderContainer = function ConfigProviderContainer(props) {
  var _proTheme$useToken;
  var children = props.children,
    dark = props.dark,
    valueTypeMap = props.valueTypeMap,
    _props$autoClearCache = props.autoClearCache,
    autoClearCache = _props$autoClearCache === void 0 ? false : _props$autoClearCache,
    propsToken = props.token,
    prefixCls = props.prefixCls;
  var _useContext = useContext(AntdConfigProvider.ConfigContext),
    locale = _useContext.locale,
    getPrefixCls = _useContext.getPrefixCls,
    restConfig = _objectWithoutProperties(_useContext, _excluded);
  var tokenContext = (_proTheme$useToken = proTheme.useToken) === null || _proTheme$useToken === void 0 ? void 0 : _proTheme$useToken.call(proTheme);
  var proProvide = useContext(ProConfigContext);

  /**
   * pro 的 类
   * @type {string}
   * @example .ant-pro
   */

  var proComponentsCls = prefixCls ? ".".concat(prefixCls) : ".".concat(getPrefixCls(), "-pro");
  var antCls = '.' + getPrefixCls();
  var salt = "".concat(proComponentsCls);
  /**
   * 合并一下token，不然导致嵌套 token 失效
   */
  var proLayoutTokenMerge = useMemo(function () {
    return getLayoutDesignToken(propsToken || {}, tokenContext.token || defaultToken);
  }, [propsToken, tokenContext.token]);
  var proProvideValue = useMemo(function () {
    var _proProvide$intl;
    var localeName = locale === null || locale === void 0 ? void 0 : locale.locale;
    var key = findIntlKeyByAntdLocaleKey(localeName);
    // antd 的 key 存在的时候以 antd 的为主
    var intl = localeName && ((_proProvide$intl = proProvide.intl) === null || _proProvide$intl === void 0 ? void 0 : _proProvide$intl.locale) === 'default' ? intlMap[key] : proProvide.intl || intlMap[key];
    return _objectSpread(_objectSpread({}, proProvide), {}, {
      dark: dark !== null && dark !== void 0 ? dark : proProvide.dark,
      token: merge(proProvide.token, tokenContext.token, {
        proComponentsCls: proComponentsCls,
        antCls: antCls,
        themeId: tokenContext.theme.id,
        layout: proLayoutTokenMerge
      }),
      intl: intl || zhCNIntl
    });
  }, [locale === null || locale === void 0 ? void 0 : locale.locale, proProvide, dark, tokenContext.token, tokenContext.theme.id, proComponentsCls, antCls, proLayoutTokenMerge]);
  var finalToken = _objectSpread(_objectSpread({}, proProvideValue.token || {}), {}, {
    proComponentsCls: proComponentsCls
  });
  var _useCacheToken = useCacheToken(tokenContext.theme, [tokenContext.token, finalToken !== null && finalToken !== void 0 ? finalToken : {}], {
      salt: salt,
      override: finalToken
    }),
    _useCacheToken2 = _slicedToArray(_useCacheToken, 2),
    token = _useCacheToken2[0],
    nativeHashId = _useCacheToken2[1];
  var hashId = useMemo(function () {
    if (props.hashed === false) {
      return '';
    }
    if (proProvide.hashed === false) return '';
    //Fix issue with hashId code
    if (isNeedOpenHash() === false) {
      return '';
    } else {
      // 生产环境或其他环境
      return nativeHashId;
    }
  }, [nativeHashId, proProvide.hashed, props.hashed]);
  var configProviderDom = useMemo(function () {
    var themeConfig = _objectSpread(_objectSpread({}, restConfig.theme), {}, {
      hashId: hashId,
      hashed: props.hashed !== false && proProvide.hashed !== false && isNeedOpenHash()
    });
    return /*#__PURE__*/_jsx(AntdConfigProvider, _objectSpread(_objectSpread({}, restConfig), {}, {
      theme: _objectSpread({}, themeConfig),
      children: /*#__PURE__*/_jsx(ProConfigContext.Provider, {
        value: _objectSpread(_objectSpread({}, proProvideValue), {}, {
          valueTypeMap: valueTypeMap || (proProvideValue === null || proProvideValue === void 0 ? void 0 : proProvideValue.valueTypeMap),
          token: token,
          theme: tokenContext.theme,
          hashed: props.hashed,
          hashId: hashId
        }),
        children: /*#__PURE__*/_jsxs(_Fragment, {
          children: [autoClearCache && /*#__PURE__*/_jsx(CacheClean, {}), children]
        })
      })
    }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoClearCache, children, getPrefixCls, hashId, locale, proProvideValue, token]);
  if (!autoClearCache) return configProviderDom;
  return /*#__PURE__*/_jsx(SWRConfig, {
    value: {
      provider: function provider() {
        return new Map();
      }
    },
    children: configProviderDom
  });
};

/**
 * 用于配置 Pro 的一些全局性的东西
 * @param props
 * @returns
 */
var ProConfigProvider = function ProConfigProvider(props) {
  var needDeps = props.needDeps,
    dark = props.dark,
    token = props.token;
  var proProvide = useContext(ProConfigContext);
  var _useContext2 = useContext(AntdConfigProvider.ConfigContext),
    locale = _useContext2.locale,
    theme = _useContext2.theme,
    rest = _objectWithoutProperties(_useContext2, _excluded2);

  // 是不是不需要渲染 provide
  var isNullProvide = needDeps && proProvide.hashId !== undefined && Object.keys(props).sort().join('-') === 'children-needDeps';
  if (isNullProvide) return /*#__PURE__*/_jsx(_Fragment, {
    children: props.children
  });
  var mergeAlgorithm = function mergeAlgorithm() {
    var isDark = dark !== null && dark !== void 0 ? dark : proProvide.dark;
    if (isDark && !Array.isArray(theme === null || theme === void 0 ? void 0 : theme.algorithm)) {
      return [proTheme.darkAlgorithm, theme === null || theme === void 0 ? void 0 : theme.algorithm].filter(Boolean);
    }
    if (isDark && Array.isArray(theme === null || theme === void 0 ? void 0 : theme.algorithm)) {
      return [proTheme.darkAlgorithm].concat(_toConsumableArray((theme === null || theme === void 0 ? void 0 : theme.algorithm) || [])).filter(Boolean);
    }
    return theme === null || theme === void 0 ? void 0 : theme.algorithm;
  };
  // 自动注入 antd 的配置
  var configProvider = _objectSpread(_objectSpread({}, rest), {}, {
    locale: locale || zh_CN,
    theme: omitUndefined(_objectSpread(_objectSpread({}, theme), {}, {
      algorithm: mergeAlgorithm()
    }))
  });
  return /*#__PURE__*/_jsx(AntdConfigProvider, _objectSpread(_objectSpread({}, configProvider), {}, {
    children: /*#__PURE__*/_jsx(ConfigProviderContainer, _objectSpread(_objectSpread({}, props), {}, {
      token: token
    }))
  }));
};

/**
 * It returns the intl object from the context if it exists, otherwise it returns the intl object for
 * 获取国际化的方法
 * @param locale
 * @param localeMap
 * the current locale
 * @returns The return value of the function is the intl object.
 */
function useIntl() {
  var _useContext3 = useContext(AntdConfigProvider.ConfigContext),
    locale = _useContext3.locale;
  var _useContext4 = useContext(ProConfigContext),
    intl = _useContext4.intl;
  if (intl && intl.locale !== 'default') {
    return intl || zhCNIntl;
  }
  if (locale !== null && locale !== void 0 && locale.locale) {
    return intlMap[findIntlKeyByAntdLocaleKey(locale.locale)] || zhCNIntl;
  }
  return zhCNIntl;
}
ProConfigContext.displayName = 'ProProvider';
var ProProvider = ProConfigContext;
/* harmony default export */ const pro_provider_es = ((/* unused pure expression or super */ null && (ProConfigContext)));
;// ./node_modules/@ant-design/pro-provider/es/useStyle/index.js








/**
 * 把一个颜色设置一下透明度
 * @example (#fff, 0.5) => rgba(255, 255, 255, 0.5)
 * @param baseColor {string}
 * @param alpha {0-1}
 * @returns rgba {string}
 */
var setAlpha = function setAlpha(baseColor, alpha) {
  return new TinyColor(baseColor).setAlpha(alpha).toRgbString();
};

/**
 * 把一个颜色修改一些明度
 * @example (#000, 50) => #808080
 * @param baseColor {string}
 * @param brightness {0-100}
 * @returns hexColor {string}
 */
var lighten = function lighten(baseColor, brightness) {
  var instance = new TinyColor(baseColor);
  return instance.lighten(brightness).toHexString();
};
var genTheme = function genTheme() {
  if (typeof theme === 'undefined' || !theme) return token_namespaceObject;
  return theme;
};
var useStyle_proTheme = genTheme();
var useStyle_useToken = useStyle_proTheme.useToken;
var resetComponent = function resetComponent(token) {
  return {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    color: token.colorText,
    fontSize: token.fontSize,
    lineHeight: token.lineHeight,
    listStyle: 'none'
  };
};
var operationUnit = function operationUnit(token) {
  return {
    // FIXME: This use link but is a operation unit. Seems should be a colorPrimary.
    // And Typography use this to generate link style which should not do this.
    color: token.colorLink,
    outline: 'none',
    cursor: 'pointer',
    transition: "color ".concat(token.motionDurationSlow),
    '&:focus, &:hover': {
      color: token.colorLinkHover
    },
    '&:active': {
      color: token.colorLinkActive
    }
  };
};

/**
 * 封装了一下 antd 的 useStyle，支持了一下antd@4
 * @param componentName {string} 组件的名字
 * @param styleFn {GenerateStyle} 生成样式的函数
 * @returns UseStyleResult
 */
function useStyle(componentName, styleFn) {
  var _token$proComponentsC;
  var _useContext = (0,react.useContext)(ProProvider),
    _useContext$token = _useContext.token,
    token = _useContext$token === void 0 ? {} : _useContext$token;
  var _useContext2 = (0,react.useContext)(ProProvider),
    _useContext2$hashId = _useContext2.hashId,
    hashId = _useContext2$hashId === void 0 ? '' : _useContext2$hashId,
    provideTheme = _useContext2.theme;
  var _useToken = useStyle_useToken(),
    antdToken = _useToken.token;
  var _useContext3 = (0,react.useContext)(config_provider/* default.ConfigContext */.Ay.ConfigContext),
    getPrefixCls = _useContext3.getPrefixCls;

  // 如果不在 ProProvider 里面，就用 antd 的
  if (!token.layout) {
    token = (0,objectSpread2/* default */.A)({}, antdToken);
  }
  token.proComponentsCls = (_token$proComponentsC = token.proComponentsCls) !== null && _token$proComponentsC !== void 0 ? _token$proComponentsC : ".".concat(getPrefixCls('pro'));
  token.antCls = ".".concat(getPrefixCls());
  return {
    wrapSSR: (0,es/* useStyleRegister */.IV)({
      theme: provideTheme,
      token: token,
      hashId: hashId,
      path: [componentName]
    }, function () {
      return styleFn(token);
    }),
    hashId: hashId
  };
}

/***/ })

}]);