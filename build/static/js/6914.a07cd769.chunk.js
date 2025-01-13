(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[6914],{

/***/ 73114:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _classStaticPrivateMethodGet = (__webpack_require__(8443)["default"]);
var _objectSpread = (__webpack_require__(12897)["default"]);
var _defineProperty = (__webpack_require__(43693)["default"]);
var _classPrivateMethodInitSpec = (__webpack_require__(93312)["default"]);
var _classPrivateMethodGet = (__webpack_require__(70137)["default"]);
var _classStaticPrivateFieldSpecSet = (__webpack_require__(31399)["default"]);
var _classStaticPrivateFieldSpecGet = (__webpack_require__(82435)["default"]);
var _classPrivateFieldInitSpec = (__webpack_require__(42459)["default"]);
var _classPrivateFieldGet = (__webpack_require__(44972)["default"]);
var _classPrivateFieldSet = (__webpack_require__(32808)["default"]);
/**
 * @licstart The following is the entire license notice for the
 * JavaScript code in this page
 *
 * Copyright 2023 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @licend The above is the entire license notice for the
 * JavaScript code in this page
 */

(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory();else {}
})(globalThis, () => {
  return (/******/(() => {
      // webpackBootstrap
      /******/
      "use strict";

      /******/
      var __webpack_modules__ = [
        /* 0 */
      , /* 1 */
      /***/(__unused_webpack_module, exports) => {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.VerbosityLevel = exports.Util = exports.UnknownErrorException = exports.UnexpectedResponseException = exports.TextRenderingMode = exports.RenderingIntentFlag = exports.PromiseCapability = exports.PermissionFlag = exports.PasswordResponses = exports.PasswordException = exports.PageActionEventType = exports.OPS = exports.MissingPDFException = exports.MAX_IMAGE_SIZE_TO_CACHE = exports.LINE_FACTOR = exports.LINE_DESCENT_FACTOR = exports.InvalidPDFException = exports.ImageKind = exports.IDENTITY_MATRIX = exports.FormatError = exports.FeatureTest = exports.FONT_IDENTITY_MATRIX = exports.DocumentActionEventType = exports.CMapCompressionType = exports.BaseException = exports.BASELINE_FACTOR = exports.AnnotationType = exports.AnnotationStateModelType = exports.AnnotationReviewState = exports.AnnotationReplyType = exports.AnnotationMode = exports.AnnotationMarkedState = exports.AnnotationFlag = exports.AnnotationFieldFlag = exports.AnnotationEditorType = exports.AnnotationEditorPrefix = exports.AnnotationEditorParamsType = exports.AnnotationBorderStyleType = exports.AnnotationActionEventType = exports.AbortException = void 0;
        exports.assert = assert;
        exports.bytesToString = bytesToString;
        exports.createValidAbsoluteUrl = createValidAbsoluteUrl;
        exports.getModificationDate = getModificationDate;
        exports.getVerbosityLevel = getVerbosityLevel;
        exports.info = info;
        exports.isArrayBuffer = isArrayBuffer;
        exports.isArrayEqual = isArrayEqual;
        exports.normalizeUnicode = normalizeUnicode;
        exports.objectFromMap = objectFromMap;
        exports.objectSize = objectSize;
        exports.setVerbosityLevel = setVerbosityLevel;
        exports.shadow = shadow;
        exports.string32 = string32;
        exports.stringToBytes = stringToBytes;
        exports.stringToPDFString = stringToPDFString;
        exports.stringToUTF8String = stringToUTF8String;
        exports.unreachable = unreachable;
        exports.utf8StringToString = utf8StringToString;
        exports.warn = warn;
        ;
        const IDENTITY_MATRIX = [1, 0, 0, 1, 0, 0];
        exports.IDENTITY_MATRIX = IDENTITY_MATRIX;
        const FONT_IDENTITY_MATRIX = [0.001, 0, 0, 0.001, 0, 0];
        exports.FONT_IDENTITY_MATRIX = FONT_IDENTITY_MATRIX;
        const MAX_IMAGE_SIZE_TO_CACHE = 10e6;
        exports.MAX_IMAGE_SIZE_TO_CACHE = MAX_IMAGE_SIZE_TO_CACHE;
        const LINE_FACTOR = 1.35;
        exports.LINE_FACTOR = LINE_FACTOR;
        const LINE_DESCENT_FACTOR = 0.35;
        exports.LINE_DESCENT_FACTOR = LINE_DESCENT_FACTOR;
        const BASELINE_FACTOR = LINE_DESCENT_FACTOR / LINE_FACTOR;
        exports.BASELINE_FACTOR = BASELINE_FACTOR;
        const RenderingIntentFlag = {
          ANY: 0x01,
          DISPLAY: 0x02,
          PRINT: 0x04,
          SAVE: 0x08,
          ANNOTATIONS_FORMS: 0x10,
          ANNOTATIONS_STORAGE: 0x20,
          ANNOTATIONS_DISABLE: 0x40,
          OPLIST: 0x100
        };
        exports.RenderingIntentFlag = RenderingIntentFlag;
        const AnnotationMode = {
          DISABLE: 0,
          ENABLE: 1,
          ENABLE_FORMS: 2,
          ENABLE_STORAGE: 3
        };
        exports.AnnotationMode = AnnotationMode;
        const AnnotationEditorPrefix = "pdfjs_internal_editor_";
        exports.AnnotationEditorPrefix = AnnotationEditorPrefix;
        const AnnotationEditorType = {
          DISABLE: -1,
          NONE: 0,
          FREETEXT: 3,
          INK: 15
        };
        exports.AnnotationEditorType = AnnotationEditorType;
        const AnnotationEditorParamsType = {
          FREETEXT_SIZE: 1,
          FREETEXT_COLOR: 2,
          FREETEXT_OPACITY: 3,
          INK_COLOR: 11,
          INK_THICKNESS: 12,
          INK_OPACITY: 13
        };
        exports.AnnotationEditorParamsType = AnnotationEditorParamsType;
        const PermissionFlag = {
          PRINT: 0x04,
          MODIFY_CONTENTS: 0x08,
          COPY: 0x10,
          MODIFY_ANNOTATIONS: 0x20,
          FILL_INTERACTIVE_FORMS: 0x100,
          COPY_FOR_ACCESSIBILITY: 0x200,
          ASSEMBLE: 0x400,
          PRINT_HIGH_QUALITY: 0x800
        };
        exports.PermissionFlag = PermissionFlag;
        const TextRenderingMode = {
          FILL: 0,
          STROKE: 1,
          FILL_STROKE: 2,
          INVISIBLE: 3,
          FILL_ADD_TO_PATH: 4,
          STROKE_ADD_TO_PATH: 5,
          FILL_STROKE_ADD_TO_PATH: 6,
          ADD_TO_PATH: 7,
          FILL_STROKE_MASK: 3,
          ADD_TO_PATH_FLAG: 4
        };
        exports.TextRenderingMode = TextRenderingMode;
        const ImageKind = {
          GRAYSCALE_1BPP: 1,
          RGB_24BPP: 2,
          RGBA_32BPP: 3
        };
        exports.ImageKind = ImageKind;
        const AnnotationType = {
          TEXT: 1,
          LINK: 2,
          FREETEXT: 3,
          LINE: 4,
          SQUARE: 5,
          CIRCLE: 6,
          POLYGON: 7,
          POLYLINE: 8,
          HIGHLIGHT: 9,
          UNDERLINE: 10,
          SQUIGGLY: 11,
          STRIKEOUT: 12,
          STAMP: 13,
          CARET: 14,
          INK: 15,
          POPUP: 16,
          FILEATTACHMENT: 17,
          SOUND: 18,
          MOVIE: 19,
          WIDGET: 20,
          SCREEN: 21,
          PRINTERMARK: 22,
          TRAPNET: 23,
          WATERMARK: 24,
          THREED: 25,
          REDACT: 26
        };
        exports.AnnotationType = AnnotationType;
        const AnnotationStateModelType = {
          MARKED: "Marked",
          REVIEW: "Review"
        };
        exports.AnnotationStateModelType = AnnotationStateModelType;
        const AnnotationMarkedState = {
          MARKED: "Marked",
          UNMARKED: "Unmarked"
        };
        exports.AnnotationMarkedState = AnnotationMarkedState;
        const AnnotationReviewState = {
          ACCEPTED: "Accepted",
          REJECTED: "Rejected",
          CANCELLED: "Cancelled",
          COMPLETED: "Completed",
          NONE: "None"
        };
        exports.AnnotationReviewState = AnnotationReviewState;
        const AnnotationReplyType = {
          GROUP: "Group",
          REPLY: "R"
        };
        exports.AnnotationReplyType = AnnotationReplyType;
        const AnnotationFlag = {
          INVISIBLE: 0x01,
          HIDDEN: 0x02,
          PRINT: 0x04,
          NOZOOM: 0x08,
          NOROTATE: 0x10,
          NOVIEW: 0x20,
          READONLY: 0x40,
          LOCKED: 0x80,
          TOGGLENOVIEW: 0x100,
          LOCKEDCONTENTS: 0x200
        };
        exports.AnnotationFlag = AnnotationFlag;
        const AnnotationFieldFlag = {
          READONLY: 0x0000001,
          REQUIRED: 0x0000002,
          NOEXPORT: 0x0000004,
          MULTILINE: 0x0001000,
          PASSWORD: 0x0002000,
          NOTOGGLETOOFF: 0x0004000,
          RADIO: 0x0008000,
          PUSHBUTTON: 0x0010000,
          COMBO: 0x0020000,
          EDIT: 0x0040000,
          SORT: 0x0080000,
          FILESELECT: 0x0100000,
          MULTISELECT: 0x0200000,
          DONOTSPELLCHECK: 0x0400000,
          DONOTSCROLL: 0x0800000,
          COMB: 0x1000000,
          RICHTEXT: 0x2000000,
          RADIOSINUNISON: 0x2000000,
          COMMITONSELCHANGE: 0x4000000
        };
        exports.AnnotationFieldFlag = AnnotationFieldFlag;
        const AnnotationBorderStyleType = {
          SOLID: 1,
          DASHED: 2,
          BEVELED: 3,
          INSET: 4,
          UNDERLINE: 5
        };
        exports.AnnotationBorderStyleType = AnnotationBorderStyleType;
        const AnnotationActionEventType = {
          E: "Mouse Enter",
          X: "Mouse Exit",
          D: "Mouse Down",
          U: "Mouse Up",
          Fo: "Focus",
          Bl: "Blur",
          PO: "PageOpen",
          PC: "PageClose",
          PV: "PageVisible",
          PI: "PageInvisible",
          K: "Keystroke",
          F: "Format",
          V: "Validate",
          C: "Calculate"
        };
        exports.AnnotationActionEventType = AnnotationActionEventType;
        const DocumentActionEventType = {
          WC: "WillClose",
          WS: "WillSave",
          DS: "DidSave",
          WP: "WillPrint",
          DP: "DidPrint"
        };
        exports.DocumentActionEventType = DocumentActionEventType;
        const PageActionEventType = {
          O: "PageOpen",
          C: "PageClose"
        };
        exports.PageActionEventType = PageActionEventType;
        const VerbosityLevel = {
          ERRORS: 0,
          WARNINGS: 1,
          INFOS: 5
        };
        exports.VerbosityLevel = VerbosityLevel;
        const CMapCompressionType = {
          NONE: 0,
          BINARY: 1
        };
        exports.CMapCompressionType = CMapCompressionType;
        const OPS = {
          dependency: 1,
          setLineWidth: 2,
          setLineCap: 3,
          setLineJoin: 4,
          setMiterLimit: 5,
          setDash: 6,
          setRenderingIntent: 7,
          setFlatness: 8,
          setGState: 9,
          save: 10,
          restore: 11,
          transform: 12,
          moveTo: 13,
          lineTo: 14,
          curveTo: 15,
          curveTo2: 16,
          curveTo3: 17,
          closePath: 18,
          rectangle: 19,
          stroke: 20,
          closeStroke: 21,
          fill: 22,
          eoFill: 23,
          fillStroke: 24,
          eoFillStroke: 25,
          closeFillStroke: 26,
          closeEOFillStroke: 27,
          endPath: 28,
          clip: 29,
          eoClip: 30,
          beginText: 31,
          endText: 32,
          setCharSpacing: 33,
          setWordSpacing: 34,
          setHScale: 35,
          setLeading: 36,
          setFont: 37,
          setTextRenderingMode: 38,
          setTextRise: 39,
          moveText: 40,
          setLeadingMoveText: 41,
          setTextMatrix: 42,
          nextLine: 43,
          showText: 44,
          showSpacedText: 45,
          nextLineShowText: 46,
          nextLineSetSpacingShowText: 47,
          setCharWidth: 48,
          setCharWidthAndBounds: 49,
          setStrokeColorSpace: 50,
          setFillColorSpace: 51,
          setStrokeColor: 52,
          setStrokeColorN: 53,
          setFillColor: 54,
          setFillColorN: 55,
          setStrokeGray: 56,
          setFillGray: 57,
          setStrokeRGBColor: 58,
          setFillRGBColor: 59,
          setStrokeCMYKColor: 60,
          setFillCMYKColor: 61,
          shadingFill: 62,
          beginInlineImage: 63,
          beginImageData: 64,
          endInlineImage: 65,
          paintXObject: 66,
          markPoint: 67,
          markPointProps: 68,
          beginMarkedContent: 69,
          beginMarkedContentProps: 70,
          endMarkedContent: 71,
          beginCompat: 72,
          endCompat: 73,
          paintFormXObjectBegin: 74,
          paintFormXObjectEnd: 75,
          beginGroup: 76,
          endGroup: 77,
          beginAnnotation: 80,
          endAnnotation: 81,
          paintImageMaskXObject: 83,
          paintImageMaskXObjectGroup: 84,
          paintImageXObject: 85,
          paintInlineImageXObject: 86,
          paintInlineImageXObjectGroup: 87,
          paintImageXObjectRepeat: 88,
          paintImageMaskXObjectRepeat: 89,
          paintSolidColorImageMask: 90,
          constructPath: 91
        };
        exports.OPS = OPS;
        const PasswordResponses = {
          NEED_PASSWORD: 1,
          INCORRECT_PASSWORD: 2
        };
        exports.PasswordResponses = PasswordResponses;
        let verbosity = VerbosityLevel.WARNINGS;
        function setVerbosityLevel(level) {
          if (Number.isInteger(level)) {
            verbosity = level;
          }
        }
        function getVerbosityLevel() {
          return verbosity;
        }
        function info(msg) {
          if (verbosity >= VerbosityLevel.INFOS) {
            console.log("Info: ".concat(msg));
          }
        }
        function warn(msg) {
          if (verbosity >= VerbosityLevel.WARNINGS) {
            console.log("Warning: ".concat(msg));
          }
        }
        function unreachable(msg) {
          throw new Error(msg);
        }
        function assert(cond, msg) {
          if (!cond) {
            unreachable(msg);
          }
        }
        function _isValidProtocol(url) {
          switch (url === null || url === void 0 ? void 0 : url.protocol) {
            case "http:":
            case "https:":
            case "ftp:":
            case "mailto:":
            case "tel:":
              return true;
            default:
              return false;
          }
        }
        function createValidAbsoluteUrl(url) {
          let baseUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          if (!url) {
            return null;
          }
          try {
            if (options && typeof url === "string") {
              if (options.addDefaultProtocol && url.startsWith("www.")) {
                const dots = url.match(/\./g);
                if ((dots === null || dots === void 0 ? void 0 : dots.length) >= 2) {
                  url = "http://".concat(url);
                }
              }
              if (options.tryConvertEncoding) {
                try {
                  url = stringToUTF8String(url);
                } catch (ex) {}
              }
            }
            const absoluteUrl = baseUrl ? new URL(url, baseUrl) : new URL(url);
            if (_isValidProtocol(absoluteUrl)) {
              return absoluteUrl;
            }
          } catch (ex) {}
          return null;
        }
        function shadow(obj, prop, value) {
          let nonSerializable = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
          Object.defineProperty(obj, prop, {
            value,
            enumerable: !nonSerializable,
            configurable: true,
            writable: false
          });
          return value;
        }
        const BaseException = function BaseExceptionClosure() {
          function BaseException(message, name) {
            if (this.constructor === BaseException) {
              unreachable("Cannot initialize BaseException.");
            }
            this.message = message;
            this.name = name;
          }
          BaseException.prototype = new Error();
          BaseException.constructor = BaseException;
          return BaseException;
        }();
        exports.BaseException = BaseException;
        class PasswordException extends BaseException {
          constructor(msg, code) {
            super(msg, "PasswordException");
            this.code = code;
          }
        }
        exports.PasswordException = PasswordException;
        class UnknownErrorException extends BaseException {
          constructor(msg, details) {
            super(msg, "UnknownErrorException");
            this.details = details;
          }
        }
        exports.UnknownErrorException = UnknownErrorException;
        class InvalidPDFException extends BaseException {
          constructor(msg) {
            super(msg, "InvalidPDFException");
          }
        }
        exports.InvalidPDFException = InvalidPDFException;
        class MissingPDFException extends BaseException {
          constructor(msg) {
            super(msg, "MissingPDFException");
          }
        }
        exports.MissingPDFException = MissingPDFException;
        class UnexpectedResponseException extends BaseException {
          constructor(msg, status) {
            super(msg, "UnexpectedResponseException");
            this.status = status;
          }
        }
        exports.UnexpectedResponseException = UnexpectedResponseException;
        class FormatError extends BaseException {
          constructor(msg) {
            super(msg, "FormatError");
          }
        }
        exports.FormatError = FormatError;
        class AbortException extends BaseException {
          constructor(msg) {
            super(msg, "AbortException");
          }
        }
        exports.AbortException = AbortException;
        function bytesToString(bytes) {
          if (typeof bytes !== "object" || (bytes === null || bytes === void 0 ? void 0 : bytes.length) === undefined) {
            unreachable("Invalid argument for bytesToString");
          }
          const length = bytes.length;
          const MAX_ARGUMENT_COUNT = 8192;
          if (length < MAX_ARGUMENT_COUNT) {
            return String.fromCharCode.apply(null, bytes);
          }
          const strBuf = [];
          for (let i = 0; i < length; i += MAX_ARGUMENT_COUNT) {
            const chunkEnd = Math.min(i + MAX_ARGUMENT_COUNT, length);
            const chunk = bytes.subarray(i, chunkEnd);
            strBuf.push(String.fromCharCode.apply(null, chunk));
          }
          return strBuf.join("");
        }
        function stringToBytes(str) {
          if (typeof str !== "string") {
            unreachable("Invalid argument for stringToBytes");
          }
          const length = str.length;
          const bytes = new Uint8Array(length);
          for (let i = 0; i < length; ++i) {
            bytes[i] = str.charCodeAt(i) & 0xff;
          }
          return bytes;
        }
        function string32(value) {
          return String.fromCharCode(value >> 24 & 0xff, value >> 16 & 0xff, value >> 8 & 0xff, value & 0xff);
        }
        function objectSize(obj) {
          return Object.keys(obj).length;
        }
        function objectFromMap(map) {
          const obj = Object.create(null);
          for (const [key, value] of map) {
            obj[key] = value;
          }
          return obj;
        }
        function isLittleEndian() {
          const buffer8 = new Uint8Array(4);
          buffer8[0] = 1;
          const view32 = new Uint32Array(buffer8.buffer, 0, 1);
          return view32[0] === 1;
        }
        function isEvalSupported() {
          try {
            new Function("");
            return true;
          } catch (e) {
            return false;
          }
        }
        class FeatureTest {
          static get isLittleEndian() {
            return shadow(this, "isLittleEndian", isLittleEndian());
          }
          static get isEvalSupported() {
            return shadow(this, "isEvalSupported", isEvalSupported());
          }
          static get isOffscreenCanvasSupported() {
            return shadow(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas !== "undefined");
          }
          static get platform() {
            if (typeof navigator === "undefined") {
              return shadow(this, "platform", {
                isWin: false,
                isMac: false
              });
            }
            return shadow(this, "platform", {
              isWin: navigator.platform.includes("Win"),
              isMac: navigator.platform.includes("Mac")
            });
          }
        }
        exports.FeatureTest = FeatureTest;
        const hexNumbers = [...Array(256).keys()].map(n => n.toString(16).padStart(2, "0"));
        class Util {
          static makeHexColor(r, g, b) {
            return "#".concat(hexNumbers[r]).concat(hexNumbers[g]).concat(hexNumbers[b]);
          }
          static scaleMinMax(transform, minMax) {
            let temp;
            if (transform[0]) {
              if (transform[0] < 0) {
                temp = minMax[0];
                minMax[0] = minMax[1];
                minMax[1] = temp;
              }
              minMax[0] *= transform[0];
              minMax[1] *= transform[0];
              if (transform[3] < 0) {
                temp = minMax[2];
                minMax[2] = minMax[3];
                minMax[3] = temp;
              }
              minMax[2] *= transform[3];
              minMax[3] *= transform[3];
            } else {
              temp = minMax[0];
              minMax[0] = minMax[2];
              minMax[2] = temp;
              temp = minMax[1];
              minMax[1] = minMax[3];
              minMax[3] = temp;
              if (transform[1] < 0) {
                temp = minMax[2];
                minMax[2] = minMax[3];
                minMax[3] = temp;
              }
              minMax[2] *= transform[1];
              minMax[3] *= transform[1];
              if (transform[2] < 0) {
                temp = minMax[0];
                minMax[0] = minMax[1];
                minMax[1] = temp;
              }
              minMax[0] *= transform[2];
              minMax[1] *= transform[2];
            }
            minMax[0] += transform[4];
            minMax[1] += transform[4];
            minMax[2] += transform[5];
            minMax[3] += transform[5];
          }
          static transform(m1, m2) {
            return [m1[0] * m2[0] + m1[2] * m2[1], m1[1] * m2[0] + m1[3] * m2[1], m1[0] * m2[2] + m1[2] * m2[3], m1[1] * m2[2] + m1[3] * m2[3], m1[0] * m2[4] + m1[2] * m2[5] + m1[4], m1[1] * m2[4] + m1[3] * m2[5] + m1[5]];
          }
          static applyTransform(p, m) {
            const xt = p[0] * m[0] + p[1] * m[2] + m[4];
            const yt = p[0] * m[1] + p[1] * m[3] + m[5];
            return [xt, yt];
          }
          static applyInverseTransform(p, m) {
            const d = m[0] * m[3] - m[1] * m[2];
            const xt = (p[0] * m[3] - p[1] * m[2] + m[2] * m[5] - m[4] * m[3]) / d;
            const yt = (-p[0] * m[1] + p[1] * m[0] + m[4] * m[1] - m[5] * m[0]) / d;
            return [xt, yt];
          }
          static getAxialAlignedBoundingBox(r, m) {
            const p1 = Util.applyTransform(r, m);
            const p2 = Util.applyTransform(r.slice(2, 4), m);
            const p3 = Util.applyTransform([r[0], r[3]], m);
            const p4 = Util.applyTransform([r[2], r[1]], m);
            return [Math.min(p1[0], p2[0], p3[0], p4[0]), Math.min(p1[1], p2[1], p3[1], p4[1]), Math.max(p1[0], p2[0], p3[0], p4[0]), Math.max(p1[1], p2[1], p3[1], p4[1])];
          }
          static inverseTransform(m) {
            const d = m[0] * m[3] - m[1] * m[2];
            return [m[3] / d, -m[1] / d, -m[2] / d, m[0] / d, (m[2] * m[5] - m[4] * m[3]) / d, (m[4] * m[1] - m[5] * m[0]) / d];
          }
          static singularValueDecompose2dScale(m) {
            const transpose = [m[0], m[2], m[1], m[3]];
            const a = m[0] * transpose[0] + m[1] * transpose[2];
            const b = m[0] * transpose[1] + m[1] * transpose[3];
            const c = m[2] * transpose[0] + m[3] * transpose[2];
            const d = m[2] * transpose[1] + m[3] * transpose[3];
            const first = (a + d) / 2;
            const second = Math.sqrt((a + d) ** 2 - 4 * (a * d - c * b)) / 2;
            const sx = first + second || 1;
            const sy = first - second || 1;
            return [Math.sqrt(sx), Math.sqrt(sy)];
          }
          static normalizeRect(rect) {
            const r = rect.slice(0);
            if (rect[0] > rect[2]) {
              r[0] = rect[2];
              r[2] = rect[0];
            }
            if (rect[1] > rect[3]) {
              r[1] = rect[3];
              r[3] = rect[1];
            }
            return r;
          }
          static intersect(rect1, rect2) {
            const xLow = Math.max(Math.min(rect1[0], rect1[2]), Math.min(rect2[0], rect2[2]));
            const xHigh = Math.min(Math.max(rect1[0], rect1[2]), Math.max(rect2[0], rect2[2]));
            if (xLow > xHigh) {
              return null;
            }
            const yLow = Math.max(Math.min(rect1[1], rect1[3]), Math.min(rect2[1], rect2[3]));
            const yHigh = Math.min(Math.max(rect1[1], rect1[3]), Math.max(rect2[1], rect2[3]));
            if (yLow > yHigh) {
              return null;
            }
            return [xLow, yLow, xHigh, yHigh];
          }
          static bezierBoundingBox(x0, y0, x1, y1, x2, y2, x3, y3) {
            const tvalues = [],
              bounds = [[], []];
            let a, b, c, t, t1, t2, b2ac, sqrtb2ac;
            for (let i = 0; i < 2; ++i) {
              if (i === 0) {
                b = 6 * x0 - 12 * x1 + 6 * x2;
                a = -3 * x0 + 9 * x1 - 9 * x2 + 3 * x3;
                c = 3 * x1 - 3 * x0;
              } else {
                b = 6 * y0 - 12 * y1 + 6 * y2;
                a = -3 * y0 + 9 * y1 - 9 * y2 + 3 * y3;
                c = 3 * y1 - 3 * y0;
              }
              if (Math.abs(a) < 1e-12) {
                if (Math.abs(b) < 1e-12) {
                  continue;
                }
                t = -c / b;
                if (0 < t && t < 1) {
                  tvalues.push(t);
                }
                continue;
              }
              b2ac = b * b - 4 * c * a;
              sqrtb2ac = Math.sqrt(b2ac);
              if (b2ac < 0) {
                continue;
              }
              t1 = (-b + sqrtb2ac) / (2 * a);
              if (0 < t1 && t1 < 1) {
                tvalues.push(t1);
              }
              t2 = (-b - sqrtb2ac) / (2 * a);
              if (0 < t2 && t2 < 1) {
                tvalues.push(t2);
              }
            }
            let j = tvalues.length,
              mt;
            const jlen = j;
            while (j--) {
              t = tvalues[j];
              mt = 1 - t;
              bounds[0][j] = mt * mt * mt * x0 + 3 * mt * mt * t * x1 + 3 * mt * t * t * x2 + t * t * t * x3;
              bounds[1][j] = mt * mt * mt * y0 + 3 * mt * mt * t * y1 + 3 * mt * t * t * y2 + t * t * t * y3;
            }
            bounds[0][jlen] = x0;
            bounds[1][jlen] = y0;
            bounds[0][jlen + 1] = x3;
            bounds[1][jlen + 1] = y3;
            bounds[0].length = bounds[1].length = jlen + 2;
            return [Math.min(...bounds[0]), Math.min(...bounds[1]), Math.max(...bounds[0]), Math.max(...bounds[1])];
          }
        }
        exports.Util = Util;
        const PDFStringTranslateTable = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x2d8, 0x2c7, 0x2c6, 0x2d9, 0x2dd, 0x2db, 0x2da, 0x2dc, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x2022, 0x2020, 0x2021, 0x2026, 0x2014, 0x2013, 0x192, 0x2044, 0x2039, 0x203a, 0x2212, 0x2030, 0x201e, 0x201c, 0x201d, 0x2018, 0x2019, 0x201a, 0x2122, 0xfb01, 0xfb02, 0x141, 0x152, 0x160, 0x178, 0x17d, 0x131, 0x142, 0x153, 0x161, 0x17e, 0, 0x20ac];
        function stringToPDFString(str) {
          if (str[0] >= "\xEF") {
            let encoding;
            if (str[0] === "\xFE" && str[1] === "\xFF") {
              encoding = "utf-16be";
            } else if (str[0] === "\xFF" && str[1] === "\xFE") {
              encoding = "utf-16le";
            } else if (str[0] === "\xEF" && str[1] === "\xBB" && str[2] === "\xBF") {
              encoding = "utf-8";
            }
            if (encoding) {
              try {
                const decoder = new TextDecoder(encoding, {
                  fatal: true
                });
                const buffer = stringToBytes(str);
                return decoder.decode(buffer);
              } catch (ex) {
                warn("stringToPDFString: \"".concat(ex, "\"."));
              }
            }
          }
          const strBuf = [];
          for (let i = 0, ii = str.length; i < ii; i++) {
            const code = PDFStringTranslateTable[str.charCodeAt(i)];
            strBuf.push(code ? String.fromCharCode(code) : str.charAt(i));
          }
          return strBuf.join("");
        }
        function stringToUTF8String(str) {
          return decodeURIComponent(escape(str));
        }
        function utf8StringToString(str) {
          return unescape(encodeURIComponent(str));
        }
        function isArrayBuffer(v) {
          return typeof v === "object" && (v === null || v === void 0 ? void 0 : v.byteLength) !== undefined;
        }
        function isArrayEqual(arr1, arr2) {
          if (arr1.length !== arr2.length) {
            return false;
          }
          for (let i = 0, ii = arr1.length; i < ii; i++) {
            if (arr1[i] !== arr2[i]) {
              return false;
            }
          }
          return true;
        }
        function getModificationDate() {
          let date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
          const buffer = [date.getUTCFullYear().toString(), (date.getUTCMonth() + 1).toString().padStart(2, "0"), date.getUTCDate().toString().padStart(2, "0"), date.getUTCHours().toString().padStart(2, "0"), date.getUTCMinutes().toString().padStart(2, "0"), date.getUTCSeconds().toString().padStart(2, "0")];
          return buffer.join("");
        }
        var _settled = /*#__PURE__*/new WeakMap();
        class PromiseCapability {
          constructor() {
            _classPrivateFieldInitSpec(this, _settled, {
              writable: true,
              value: false
            });
            this.promise = new Promise((resolve, reject) => {
              this.resolve = data => {
                _classPrivateFieldSet(this, _settled, true);
                resolve(data);
              };
              this.reject = reason => {
                _classPrivateFieldSet(this, _settled, true);
                reject(reason);
              };
            });
          }
          get settled() {
            return _classPrivateFieldGet(this, _settled);
          }
        }
        exports.PromiseCapability = PromiseCapability;
        let NormalizeRegex = null;
        let NormalizationMap = null;
        function normalizeUnicode(str) {
          if (!NormalizeRegex) {
            NormalizeRegex = /([\xA0\xB5\u037E\u0EB3\u2000-\u200A\u202F\u2126\uFB00-\uFB04\uFB06\uFB20-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBA1\uFBA4-\uFBA9\uFBAE-\uFBB1\uFBD3-\uFBDC\uFBDE-\uFBE7\uFBEA-\uFBF8\uFBFC\uFBFD\uFC00-\uFC5D\uFC64-\uFCF1\uFCF5-\uFD3D\uFD88\uFDF4\uFDFA\uFDFB\uFE71\uFE77\uFE79\uFE7B\uFE7D]+)|(\uFB05+)/g;
            NormalizationMap = new Map([["ﬅ", "ſt"]]);
          }
          return str.replaceAll(NormalizeRegex, (_, p1, p2) => {
            return p1 ? p1.normalize("NFKC") : NormalizationMap.get(p2);
          });
        }

        /***/
      }, /* 2 */
      /***/(__unused_webpack_module, exports, __w_pdfjs_require__) => {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.build = exports.RenderTask = exports.PDFWorkerUtil = exports.PDFWorker = exports.PDFPageProxy = exports.PDFDocumentProxy = exports.PDFDocumentLoadingTask = exports.PDFDataRangeTransport = exports.LoopbackPort = exports.DefaultStandardFontDataFactory = exports.DefaultFilterFactory = exports.DefaultCanvasFactory = exports.DefaultCMapReaderFactory = void 0;
        exports.getDocument = getDocument;
        exports.version = void 0;
        var _util = __w_pdfjs_require__(1);
        var _annotation_storage = __w_pdfjs_require__(3);
        var _display_utils = __w_pdfjs_require__(6);
        var _font_loader = __w_pdfjs_require__(9);
        var _canvas = __w_pdfjs_require__(11);
        var _worker_options = __w_pdfjs_require__(14);
        var _is_node = __w_pdfjs_require__(10);
        var _message_handler = __w_pdfjs_require__(15);
        var _metadata = __w_pdfjs_require__(16);
        var _optional_content_config = __w_pdfjs_require__(17);
        var _transport_stream = __w_pdfjs_require__(18);
        var _xfa_text = __w_pdfjs_require__(19);
        const DEFAULT_RANGE_CHUNK_SIZE = 65536;
        const RENDERING_CANCELLED_TIMEOUT = 100;
        const DELAYED_CLEANUP_TIMEOUT = 5000;
        let DefaultCanvasFactory = _display_utils.DOMCanvasFactory;
        exports.DefaultCanvasFactory = DefaultCanvasFactory;
        let DefaultCMapReaderFactory = _display_utils.DOMCMapReaderFactory;
        exports.DefaultCMapReaderFactory = DefaultCMapReaderFactory;
        let DefaultFilterFactory = _display_utils.DOMFilterFactory;
        exports.DefaultFilterFactory = DefaultFilterFactory;
        let DefaultStandardFontDataFactory = _display_utils.DOMStandardFontDataFactory;
        exports.DefaultStandardFontDataFactory = DefaultStandardFontDataFactory;
        if (_is_node.isNodeJS) {
          const {
            NodeCanvasFactory,
            NodeCMapReaderFactory,
            NodeFilterFactory,
            NodeStandardFontDataFactory
          } = __w_pdfjs_require__(20);
          exports.DefaultCanvasFactory = DefaultCanvasFactory = NodeCanvasFactory;
          exports.DefaultCMapReaderFactory = DefaultCMapReaderFactory = NodeCMapReaderFactory;
          exports.DefaultFilterFactory = DefaultFilterFactory = NodeFilterFactory;
          exports.DefaultStandardFontDataFactory = DefaultStandardFontDataFactory = NodeStandardFontDataFactory;
        }
        let createPDFNetworkStream;
        {
          if (_is_node.isNodeJS) {
            const {
              PDFNodeStream
            } = __w_pdfjs_require__(21);
            createPDFNetworkStream = params => {
              return new PDFNodeStream(params);
            };
          } else {
            const {
              PDFNetworkStream
            } = __w_pdfjs_require__(24);
            const {
              PDFFetchStream
            } = __w_pdfjs_require__(25);
            createPDFNetworkStream = params => {
              return (0, _display_utils.isValidFetchUrl)(params.url) ? new PDFFetchStream(params) : new PDFNetworkStream(params);
            };
          }
        }
        function getDocument(src) {
          var _src$password, _src$length;
          if (typeof src === "string" || src instanceof URL) {
            src = {
              url: src
            };
          } else if ((0, _util.isArrayBuffer)(src)) {
            src = {
              data: src
            };
          }
          if (typeof src !== "object") {
            throw new Error("Invalid parameter in getDocument, need parameter object.");
          }
          if (!src.url && !src.data && !src.range) {
            throw new Error("Invalid parameter object: need either .data, .range or .url");
          }
          const task = new PDFDocumentLoadingTask();
          const {
            docId
          } = task;
          const url = src.url ? getUrlProp(src.url) : null;
          const data = src.data ? getDataProp(src.data) : null;
          const httpHeaders = src.httpHeaders || null;
          const withCredentials = src.withCredentials === true;
          const password = (_src$password = src.password) !== null && _src$password !== void 0 ? _src$password : null;
          const rangeTransport = src.range instanceof PDFDataRangeTransport ? src.range : null;
          const rangeChunkSize = Number.isInteger(src.rangeChunkSize) && src.rangeChunkSize > 0 ? src.rangeChunkSize : DEFAULT_RANGE_CHUNK_SIZE;
          let worker = src.worker instanceof PDFWorker ? src.worker : null;
          const verbosity = src.verbosity;
          const docBaseUrl = typeof src.docBaseUrl === "string" && !(0, _display_utils.isDataScheme)(src.docBaseUrl) ? src.docBaseUrl : null;
          const cMapUrl = typeof src.cMapUrl === "string" ? src.cMapUrl : null;
          const cMapPacked = src.cMapPacked !== false;
          const CMapReaderFactory = src.CMapReaderFactory || DefaultCMapReaderFactory;
          const standardFontDataUrl = typeof src.standardFontDataUrl === "string" ? src.standardFontDataUrl : null;
          const StandardFontDataFactory = src.StandardFontDataFactory || DefaultStandardFontDataFactory;
          const ignoreErrors = src.stopAtErrors !== true;
          const maxImageSize = Number.isInteger(src.maxImageSize) && src.maxImageSize > -1 ? src.maxImageSize : -1;
          const isEvalSupported = src.isEvalSupported !== false;
          const isOffscreenCanvasSupported = typeof src.isOffscreenCanvasSupported === "boolean" ? src.isOffscreenCanvasSupported : !_is_node.isNodeJS;
          const canvasMaxAreaInBytes = Number.isInteger(src.canvasMaxAreaInBytes) ? src.canvasMaxAreaInBytes : -1;
          const disableFontFace = typeof src.disableFontFace === "boolean" ? src.disableFontFace : _is_node.isNodeJS;
          const fontExtraProperties = src.fontExtraProperties === true;
          const enableXfa = src.enableXfa === true;
          const ownerDocument = src.ownerDocument || globalThis.document;
          const disableRange = src.disableRange === true;
          const disableStream = src.disableStream === true;
          const disableAutoFetch = src.disableAutoFetch === true;
          const pdfBug = src.pdfBug === true;
          const length = rangeTransport ? rangeTransport.length : (_src$length = src.length) !== null && _src$length !== void 0 ? _src$length : NaN;
          const useSystemFonts = typeof src.useSystemFonts === "boolean" ? src.useSystemFonts : !_is_node.isNodeJS && !disableFontFace;
          const useWorkerFetch = typeof src.useWorkerFetch === "boolean" ? src.useWorkerFetch : CMapReaderFactory === _display_utils.DOMCMapReaderFactory && StandardFontDataFactory === _display_utils.DOMStandardFontDataFactory && (0, _display_utils.isValidFetchUrl)(cMapUrl, document.baseURI) && (0, _display_utils.isValidFetchUrl)(standardFontDataUrl, document.baseURI);
          const canvasFactory = src.canvasFactory || new DefaultCanvasFactory({
            ownerDocument
          });
          const filterFactory = src.filterFactory || new DefaultFilterFactory({
            docId,
            ownerDocument
          });
          const styleElement = null;
          (0, _util.setVerbosityLevel)(verbosity);
          const transportFactory = {
            canvasFactory,
            filterFactory
          };
          if (!useWorkerFetch) {
            transportFactory.cMapReaderFactory = new CMapReaderFactory({
              baseUrl: cMapUrl,
              isCompressed: cMapPacked
            });
            transportFactory.standardFontDataFactory = new StandardFontDataFactory({
              baseUrl: standardFontDataUrl
            });
          }
          if (!worker) {
            const workerParams = {
              verbosity,
              port: _worker_options.GlobalWorkerOptions.workerPort
            };
            worker = workerParams.port ? PDFWorker.fromPort(workerParams) : new PDFWorker(workerParams);
            task._worker = worker;
          }
          const fetchDocParams = {
            docId,
            apiVersion: '3.6.172',
            data,
            password,
            disableAutoFetch,
            rangeChunkSize,
            length,
            docBaseUrl,
            enableXfa,
            evaluatorOptions: {
              maxImageSize,
              disableFontFace,
              ignoreErrors,
              isEvalSupported,
              isOffscreenCanvasSupported,
              canvasMaxAreaInBytes,
              fontExtraProperties,
              useSystemFonts,
              cMapUrl: useWorkerFetch ? cMapUrl : null,
              standardFontDataUrl: useWorkerFetch ? standardFontDataUrl : null
            }
          };
          const transportParams = {
            ignoreErrors,
            isEvalSupported,
            disableFontFace,
            fontExtraProperties,
            enableXfa,
            ownerDocument,
            disableAutoFetch,
            pdfBug,
            styleElement
          };
          worker.promise.then(function () {
            if (task.destroyed) {
              throw new Error("Loading aborted");
            }
            const workerIdPromise = _fetchDocument(worker, fetchDocParams);
            const networkStreamPromise = new Promise(function (resolve) {
              let networkStream;
              if (rangeTransport) {
                networkStream = new _transport_stream.PDFDataTransportStream({
                  length,
                  initialData: rangeTransport.initialData,
                  progressiveDone: rangeTransport.progressiveDone,
                  contentDispositionFilename: rangeTransport.contentDispositionFilename,
                  disableRange,
                  disableStream
                }, rangeTransport);
              } else if (!data) {
                networkStream = createPDFNetworkStream({
                  url,
                  length,
                  httpHeaders,
                  withCredentials,
                  rangeChunkSize,
                  disableRange,
                  disableStream
                });
              }
              resolve(networkStream);
            });
            return Promise.all([workerIdPromise, networkStreamPromise]).then(function (_ref) {
              let [workerId, networkStream] = _ref;
              if (task.destroyed) {
                throw new Error("Loading aborted");
              }
              const messageHandler = new _message_handler.MessageHandler(docId, workerId, worker.port);
              const transport = new WorkerTransport(messageHandler, task, networkStream, transportParams, transportFactory);
              task._transport = transport;
              messageHandler.send("Ready", null);
            });
          }).catch(task._capability.reject);
          return task;
        }
        async function _fetchDocument(worker, source) {
          if (worker.destroyed) {
            throw new Error("Worker was destroyed");
          }
          const workerId = await worker.messageHandler.sendWithPromise("GetDocRequest", source, source.data ? [source.data.buffer] : null);
          if (worker.destroyed) {
            throw new Error("Worker was destroyed");
          }
          return workerId;
        }
        function getUrlProp(val) {
          if (val instanceof URL) {
            return val.href;
          }
          try {
            return new URL(val, window.location).href;
          } catch (ex) {
            if (_is_node.isNodeJS && typeof val === "string") {
              return val;
            }
          }
          throw new Error("Invalid PDF url data: " + "either string or URL-object is expected in the url property.");
        }
        function getDataProp(val) {
          if (_is_node.isNodeJS && typeof Buffer !== "undefined" && val instanceof Buffer) {
            (0, _display_utils.deprecated)("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
            return new Uint8Array(val);
          }
          if (val instanceof Uint8Array && val.byteLength === val.buffer.byteLength) {
            return val;
          }
          if (typeof val === "string") {
            return (0, _util.stringToBytes)(val);
          }
          if (typeof val === "object" && !isNaN(val === null || val === void 0 ? void 0 : val.length) || (0, _util.isArrayBuffer)(val)) {
            return new Uint8Array(val);
          }
          throw new Error("Invalid PDF binary data: either TypedArray, " + "string, or array-like object is expected in the data property.");
        }
        class PDFDocumentLoadingTask {
          constructor() {
            var _PDFDocumentLoadingTa, _PDFDocumentLoadingTa2;
            this._capability = new _util.PromiseCapability();
            this._transport = null;
            this._worker = null;
            this.docId = "d".concat((_classStaticPrivateFieldSpecSet(PDFDocumentLoadingTask, PDFDocumentLoadingTask, _docId, (_PDFDocumentLoadingTa = _classStaticPrivateFieldSpecGet(PDFDocumentLoadingTask, PDFDocumentLoadingTask, _docId), _PDFDocumentLoadingTa2 = _PDFDocumentLoadingTa++, _PDFDocumentLoadingTa)), _PDFDocumentLoadingTa2));
            this.destroyed = false;
            this.onPassword = null;
            this.onProgress = null;
          }
          get promise() {
            return this._capability.promise;
          }
          async destroy() {
            var _this$_transport;
            this.destroyed = true;
            await ((_this$_transport = this._transport) === null || _this$_transport === void 0 ? void 0 : _this$_transport.destroy());
            this._transport = null;
            if (this._worker) {
              this._worker.destroy();
              this._worker = null;
            }
          }
        }
        var _docId = {
          writable: true,
          value: 0
        };
        exports.PDFDocumentLoadingTask = PDFDocumentLoadingTask;
        class PDFDataRangeTransport {
          constructor(length, initialData) {
            let progressiveDone = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            let contentDispositionFilename = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            this.length = length;
            this.initialData = initialData;
            this.progressiveDone = progressiveDone;
            this.contentDispositionFilename = contentDispositionFilename;
            this._rangeListeners = [];
            this._progressListeners = [];
            this._progressiveReadListeners = [];
            this._progressiveDoneListeners = [];
            this._readyCapability = new _util.PromiseCapability();
          }
          addRangeListener(listener) {
            this._rangeListeners.push(listener);
          }
          addProgressListener(listener) {
            this._progressListeners.push(listener);
          }
          addProgressiveReadListener(listener) {
            this._progressiveReadListeners.push(listener);
          }
          addProgressiveDoneListener(listener) {
            this._progressiveDoneListeners.push(listener);
          }
          onDataRange(begin, chunk) {
            for (const listener of this._rangeListeners) {
              listener(begin, chunk);
            }
          }
          onDataProgress(loaded, total) {
            this._readyCapability.promise.then(() => {
              for (const listener of this._progressListeners) {
                listener(loaded, total);
              }
            });
          }
          onDataProgressiveRead(chunk) {
            this._readyCapability.promise.then(() => {
              for (const listener of this._progressiveReadListeners) {
                listener(chunk);
              }
            });
          }
          onDataProgressiveDone() {
            this._readyCapability.promise.then(() => {
              for (const listener of this._progressiveDoneListeners) {
                listener();
              }
            });
          }
          transportReady() {
            this._readyCapability.resolve();
          }
          requestDataRange(begin, end) {
            (0, _util.unreachable)("Abstract method PDFDataRangeTransport.requestDataRange");
          }
          abort() {}
        }
        exports.PDFDataRangeTransport = PDFDataRangeTransport;
        class PDFDocumentProxy {
          constructor(pdfInfo, transport) {
            this._pdfInfo = pdfInfo;
            this._transport = transport;
          }
          get annotationStorage() {
            return this._transport.annotationStorage;
          }
          get filterFactory() {
            return this._transport.filterFactory;
          }
          get numPages() {
            return this._pdfInfo.numPages;
          }
          get fingerprints() {
            return this._pdfInfo.fingerprints;
          }
          get isPureXfa() {
            return (0, _util.shadow)(this, "isPureXfa", !!this._transport._htmlForXfa);
          }
          get allXfaHtml() {
            return this._transport._htmlForXfa;
          }
          getPage(pageNumber) {
            return this._transport.getPage(pageNumber);
          }
          getPageIndex(ref) {
            return this._transport.getPageIndex(ref);
          }
          getDestinations() {
            return this._transport.getDestinations();
          }
          getDestination(id) {
            return this._transport.getDestination(id);
          }
          getPageLabels() {
            return this._transport.getPageLabels();
          }
          getPageLayout() {
            return this._transport.getPageLayout();
          }
          getPageMode() {
            return this._transport.getPageMode();
          }
          getViewerPreferences() {
            return this._transport.getViewerPreferences();
          }
          getOpenAction() {
            return this._transport.getOpenAction();
          }
          getAttachments() {
            return this._transport.getAttachments();
          }
          getJavaScript() {
            return this._transport.getJavaScript();
          }
          getJSActions() {
            return this._transport.getDocJSActions();
          }
          getOutline() {
            return this._transport.getOutline();
          }
          getOptionalContentConfig() {
            return this._transport.getOptionalContentConfig();
          }
          getPermissions() {
            return this._transport.getPermissions();
          }
          getMetadata() {
            return this._transport.getMetadata();
          }
          getMarkInfo() {
            return this._transport.getMarkInfo();
          }
          getData() {
            return this._transport.getData();
          }
          saveDocument() {
            return this._transport.saveDocument();
          }
          getDownloadInfo() {
            return this._transport.downloadInfoCapability.promise;
          }
          cleanup() {
            let keepLoadedFonts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            return this._transport.startCleanup(keepLoadedFonts || this.isPureXfa);
          }
          destroy() {
            return this.loadingTask.destroy();
          }
          get loadingParams() {
            return this._transport.loadingParams;
          }
          get loadingTask() {
            return this._transport.loadingTask;
          }
          getFieldObjects() {
            return this._transport.getFieldObjects();
          }
          hasJSActions() {
            return this._transport.hasJSActions();
          }
          getCalculationOrderIds() {
            return this._transport.getCalculationOrderIds();
          }
        }
        exports.PDFDocumentProxy = PDFDocumentProxy;
        var _delayedCleanupTimeout = /*#__PURE__*/new WeakMap();
        var _pendingCleanup = /*#__PURE__*/new WeakMap();
        var _tryCleanup = /*#__PURE__*/new WeakSet();
        var _abortDelayedCleanup = /*#__PURE__*/new WeakSet();
        class PDFPageProxy {
          constructor(pageIndex, pageInfo, transport) {
            let pdfBug = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
            _classPrivateMethodInitSpec(this, _abortDelayedCleanup);
            _classPrivateMethodInitSpec(this, _tryCleanup);
            _classPrivateFieldInitSpec(this, _delayedCleanupTimeout, {
              writable: true,
              value: null
            });
            _classPrivateFieldInitSpec(this, _pendingCleanup, {
              writable: true,
              value: false
            });
            this._pageIndex = pageIndex;
            this._pageInfo = pageInfo;
            this._transport = transport;
            this._stats = pdfBug ? new _display_utils.StatTimer() : null;
            this._pdfBug = pdfBug;
            this.commonObjs = transport.commonObjs;
            this.objs = new PDFObjects();
            this._maybeCleanupAfterRender = false;
            this._intentStates = new Map();
            this.destroyed = false;
          }
          get pageNumber() {
            return this._pageIndex + 1;
          }
          get rotate() {
            return this._pageInfo.rotate;
          }
          get ref() {
            return this._pageInfo.ref;
          }
          get userUnit() {
            return this._pageInfo.userUnit;
          }
          get view() {
            return this._pageInfo.view;
          }
          getViewport() {
            let {
              scale,
              rotation = this.rotate,
              offsetX = 0,
              offsetY = 0,
              dontFlip = false
            } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return new _display_utils.PageViewport({
              viewBox: this.view,
              scale,
              rotation,
              offsetX,
              offsetY,
              dontFlip
            });
          }
          getAnnotations() {
            let {
              intent = "display"
            } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            const intentArgs = this._transport.getRenderingIntent(intent);
            return this._transport.getAnnotations(this._pageIndex, intentArgs.renderingIntent);
          }
          getJSActions() {
            return this._transport.getPageJSActions(this._pageIndex);
          }
          get isPureXfa() {
            return (0, _util.shadow)(this, "isPureXfa", !!this._transport._htmlForXfa);
          }
          async getXfa() {
            var _this$_transport$_htm;
            return ((_this$_transport$_htm = this._transport._htmlForXfa) === null || _this$_transport$_htm === void 0 ? void 0 : _this$_transport$_htm.children[this._pageIndex]) || null;
          }
          render(_ref2) {
            var _arguments$, _this$_stats, _intentState;
            let {
              canvasContext,
              viewport,
              intent = "display",
              annotationMode = _util.AnnotationMode.ENABLE,
              transform = null,
              background = null,
              optionalContentConfigPromise = null,
              annotationCanvasMap = null,
              pageColors = null,
              printAnnotationStorage = null
            } = _ref2;
            if ((_arguments$ = arguments[0]) !== null && _arguments$ !== void 0 && _arguments$.canvasFactory) {
              throw new Error("render no longer accepts the `canvasFactory`-option, " + "please pass it to the `getDocument`-function instead.");
            }
            (_this$_stats = this._stats) === null || _this$_stats === void 0 || _this$_stats.time("Overall");
            const intentArgs = this._transport.getRenderingIntent(intent, annotationMode, printAnnotationStorage);
            _classPrivateFieldSet(this, _pendingCleanup, false);
            _classPrivateMethodGet(this, _abortDelayedCleanup, _abortDelayedCleanup2).call(this);
            if (!optionalContentConfigPromise) {
              optionalContentConfigPromise = this._transport.getOptionalContentConfig();
            }
            let intentState = this._intentStates.get(intentArgs.cacheKey);
            if (!intentState) {
              intentState = Object.create(null);
              this._intentStates.set(intentArgs.cacheKey, intentState);
            }
            if (intentState.streamReaderCancelTimeout) {
              clearTimeout(intentState.streamReaderCancelTimeout);
              intentState.streamReaderCancelTimeout = null;
            }
            const intentPrint = !!(intentArgs.renderingIntent & _util.RenderingIntentFlag.PRINT);
            if (!intentState.displayReadyCapability) {
              var _this$_stats2;
              intentState.displayReadyCapability = new _util.PromiseCapability();
              intentState.operatorList = {
                fnArray: [],
                argsArray: [],
                lastChunk: false,
                separateAnnots: null
              };
              (_this$_stats2 = this._stats) === null || _this$_stats2 === void 0 || _this$_stats2.time("Page Request");
              this._pumpOperatorList(intentArgs);
            }
            const complete = error => {
              var _this$_stats3, _this$_stats4;
              intentState.renderTasks.delete(internalRenderTask);
              if (this._maybeCleanupAfterRender || intentPrint) {
                _classPrivateFieldSet(this, _pendingCleanup, true);
              }
              _classPrivateMethodGet(this, _tryCleanup, _tryCleanup2).call(this, !intentPrint);
              if (error) {
                internalRenderTask.capability.reject(error);
                this._abortOperatorList({
                  intentState,
                  reason: error instanceof Error ? error : new Error(error)
                });
              } else {
                internalRenderTask.capability.resolve();
              }
              (_this$_stats3 = this._stats) === null || _this$_stats3 === void 0 || _this$_stats3.timeEnd("Rendering");
              (_this$_stats4 = this._stats) === null || _this$_stats4 === void 0 || _this$_stats4.timeEnd("Overall");
            };
            const internalRenderTask = new InternalRenderTask({
              callback: complete,
              params: {
                canvasContext,
                viewport,
                transform,
                background
              },
              objs: this.objs,
              commonObjs: this.commonObjs,
              annotationCanvasMap,
              operatorList: intentState.operatorList,
              pageIndex: this._pageIndex,
              canvasFactory: this._transport.canvasFactory,
              filterFactory: this._transport.filterFactory,
              useRequestAnimationFrame: !intentPrint,
              pdfBug: this._pdfBug,
              pageColors
            });
            ((_intentState = intentState).renderTasks || (_intentState.renderTasks = new Set())).add(internalRenderTask);
            const renderTask = internalRenderTask.task;
            Promise.all([intentState.displayReadyCapability.promise, optionalContentConfigPromise]).then(_ref3 => {
              var _this$_stats5;
              let [transparency, optionalContentConfig] = _ref3;
              if (_classPrivateFieldGet(this, _pendingCleanup)) {
                complete();
                return;
              }
              (_this$_stats5 = this._stats) === null || _this$_stats5 === void 0 || _this$_stats5.time("Rendering");
              internalRenderTask.initializeGraphics({
                transparency,
                optionalContentConfig
              });
              internalRenderTask.operatorListChanged();
            }).catch(complete);
            return renderTask;
          }
          getOperatorList() {
            let {
              intent = "display",
              annotationMode = _util.AnnotationMode.ENABLE,
              printAnnotationStorage = null
            } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            function operatorListChanged() {
              if (intentState.operatorList.lastChunk) {
                intentState.opListReadCapability.resolve(intentState.operatorList);
                intentState.renderTasks.delete(opListTask);
              }
            }
            const intentArgs = this._transport.getRenderingIntent(intent, annotationMode, printAnnotationStorage, true);
            let intentState = this._intentStates.get(intentArgs.cacheKey);
            if (!intentState) {
              intentState = Object.create(null);
              this._intentStates.set(intentArgs.cacheKey, intentState);
            }
            let opListTask;
            if (!intentState.opListReadCapability) {
              var _intentState2, _this$_stats6;
              opListTask = Object.create(null);
              opListTask.operatorListChanged = operatorListChanged;
              intentState.opListReadCapability = new _util.PromiseCapability();
              ((_intentState2 = intentState).renderTasks || (_intentState2.renderTasks = new Set())).add(opListTask);
              intentState.operatorList = {
                fnArray: [],
                argsArray: [],
                lastChunk: false,
                separateAnnots: null
              };
              (_this$_stats6 = this._stats) === null || _this$_stats6 === void 0 || _this$_stats6.time("Page Request");
              this._pumpOperatorList(intentArgs);
            }
            return intentState.opListReadCapability.promise;
          }
          streamTextContent() {
            let {
              includeMarkedContent = false,
              disableNormalization = false
            } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            const TEXT_CONTENT_CHUNK_SIZE = 100;
            return this._transport.messageHandler.sendWithStream("GetTextContent", {
              pageIndex: this._pageIndex,
              includeMarkedContent: includeMarkedContent === true,
              disableNormalization: disableNormalization === true
            }, {
              highWaterMark: TEXT_CONTENT_CHUNK_SIZE,
              size(textContent) {
                return textContent.items.length;
              }
            });
          }
          getTextContent() {
            let params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            if (this._transport._htmlForXfa) {
              return this.getXfa().then(xfa => {
                return _xfa_text.XfaText.textContent(xfa);
              });
            }
            const readableStream = this.streamTextContent(params);
            return new Promise(function (resolve, reject) {
              function pump() {
                reader.read().then(function (_ref4) {
                  let {
                    value,
                    done
                  } = _ref4;
                  if (done) {
                    resolve(textContent);
                    return;
                  }
                  Object.assign(textContent.styles, value.styles);
                  textContent.items.push(...value.items);
                  pump();
                }, reject);
              }
              const reader = readableStream.getReader();
              const textContent = {
                items: [],
                styles: Object.create(null)
              };
              pump();
            });
          }
          getStructTree() {
            return this._transport.getStructTree(this._pageIndex);
          }
          _destroy() {
            this.destroyed = true;
            const waitOn = [];
            for (const intentState of this._intentStates.values()) {
              this._abortOperatorList({
                intentState,
                reason: new Error("Page was destroyed."),
                force: true
              });
              if (intentState.opListReadCapability) {
                continue;
              }
              for (const internalRenderTask of intentState.renderTasks) {
                waitOn.push(internalRenderTask.completed);
                internalRenderTask.cancel();
              }
            }
            this.objs.clear();
            _classPrivateFieldSet(this, _pendingCleanup, false);
            _classPrivateMethodGet(this, _abortDelayedCleanup, _abortDelayedCleanup2).call(this);
            return Promise.all(waitOn);
          }
          cleanup() {
            let resetStats = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            _classPrivateFieldSet(this, _pendingCleanup, true);
            const success = _classPrivateMethodGet(this, _tryCleanup, _tryCleanup2).call(this, false);
            if (resetStats && success) {
              this._stats && (this._stats = new _display_utils.StatTimer());
            }
            return success;
          }
          _startRenderPage(transparency, cacheKey) {
            var _this$_stats7, _intentState$displayR;
            const intentState = this._intentStates.get(cacheKey);
            if (!intentState) {
              return;
            }
            (_this$_stats7 = this._stats) === null || _this$_stats7 === void 0 || _this$_stats7.timeEnd("Page Request");
            (_intentState$displayR = intentState.displayReadyCapability) === null || _intentState$displayR === void 0 || _intentState$displayR.resolve(transparency);
          }
          _renderPageChunk(operatorListChunk, intentState) {
            for (let i = 0, ii = operatorListChunk.length; i < ii; i++) {
              intentState.operatorList.fnArray.push(operatorListChunk.fnArray[i]);
              intentState.operatorList.argsArray.push(operatorListChunk.argsArray[i]);
            }
            intentState.operatorList.lastChunk = operatorListChunk.lastChunk;
            intentState.operatorList.separateAnnots = operatorListChunk.separateAnnots;
            for (const internalRenderTask of intentState.renderTasks) {
              internalRenderTask.operatorListChanged();
            }
            if (operatorListChunk.lastChunk) {
              _classPrivateMethodGet(this, _tryCleanup, _tryCleanup2).call(this, true);
            }
          }
          _pumpOperatorList(_ref5) {
            let {
              renderingIntent,
              cacheKey,
              annotationStorageMap
            } = _ref5;
            const readableStream = this._transport.messageHandler.sendWithStream("GetOperatorList", {
              pageIndex: this._pageIndex,
              intent: renderingIntent,
              cacheKey,
              annotationStorage: annotationStorageMap
            });
            const reader = readableStream.getReader();
            const intentState = this._intentStates.get(cacheKey);
            intentState.streamReader = reader;
            const pump = () => {
              reader.read().then(_ref6 => {
                let {
                  value,
                  done
                } = _ref6;
                if (done) {
                  intentState.streamReader = null;
                  return;
                }
                if (this._transport.destroyed) {
                  return;
                }
                this._renderPageChunk(value, intentState);
                pump();
              }, reason => {
                intentState.streamReader = null;
                if (this._transport.destroyed) {
                  return;
                }
                if (intentState.operatorList) {
                  intentState.operatorList.lastChunk = true;
                  for (const internalRenderTask of intentState.renderTasks) {
                    internalRenderTask.operatorListChanged();
                  }
                  _classPrivateMethodGet(this, _tryCleanup, _tryCleanup2).call(this, true);
                }
                if (intentState.displayReadyCapability) {
                  intentState.displayReadyCapability.reject(reason);
                } else if (intentState.opListReadCapability) {
                  intentState.opListReadCapability.reject(reason);
                } else {
                  throw reason;
                }
              });
            };
            pump();
          }
          _abortOperatorList(_ref7) {
            let {
              intentState,
              reason,
              force = false
            } = _ref7;
            if (!intentState.streamReader) {
              return;
            }
            if (intentState.streamReaderCancelTimeout) {
              clearTimeout(intentState.streamReaderCancelTimeout);
              intentState.streamReaderCancelTimeout = null;
            }
            if (!force) {
              if (intentState.renderTasks.size > 0) {
                return;
              }
              if (reason instanceof _display_utils.RenderingCancelledException) {
                let delay = RENDERING_CANCELLED_TIMEOUT;
                if (reason.extraDelay > 0 && reason.extraDelay < 1000) {
                  delay += reason.extraDelay;
                }
                intentState.streamReaderCancelTimeout = setTimeout(() => {
                  intentState.streamReaderCancelTimeout = null;
                  this._abortOperatorList({
                    intentState,
                    reason,
                    force: true
                  });
                }, delay);
                return;
              }
            }
            intentState.streamReader.cancel(new _util.AbortException(reason.message)).catch(() => {});
            intentState.streamReader = null;
            if (this._transport.destroyed) {
              return;
            }
            for (const [curCacheKey, curIntentState] of this._intentStates) {
              if (curIntentState === intentState) {
                this._intentStates.delete(curCacheKey);
                break;
              }
            }
            this.cleanup();
          }
          get stats() {
            return this._stats;
          }
        }
        function _tryCleanup2() {
          let delayed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          _classPrivateMethodGet(this, _abortDelayedCleanup, _abortDelayedCleanup2).call(this);
          if (!_classPrivateFieldGet(this, _pendingCleanup)) {
            return false;
          }
          if (delayed) {
            _classPrivateFieldSet(this, _delayedCleanupTimeout, setTimeout(() => {
              _classPrivateFieldSet(this, _delayedCleanupTimeout, null);
              _classPrivateMethodGet(this, _tryCleanup, _tryCleanup2).call(this, false);
            }, DELAYED_CLEANUP_TIMEOUT));
            return false;
          }
          for (const {
            renderTasks,
            operatorList
          } of this._intentStates.values()) {
            if (renderTasks.size > 0 || !operatorList.lastChunk) {
              return false;
            }
          }
          this._intentStates.clear();
          this.objs.clear();
          _classPrivateFieldSet(this, _pendingCleanup, false);
          return true;
        }
        function _abortDelayedCleanup2() {
          if (_classPrivateFieldGet(this, _delayedCleanupTimeout)) {
            clearTimeout(_classPrivateFieldGet(this, _delayedCleanupTimeout));
            _classPrivateFieldSet(this, _delayedCleanupTimeout, null);
          }
        }
        exports.PDFPageProxy = PDFPageProxy;
        var _listeners = /*#__PURE__*/new WeakMap();
        var _deferred = /*#__PURE__*/new WeakMap();
        class LoopbackPort {
          constructor() {
            _classPrivateFieldInitSpec(this, _listeners, {
              writable: true,
              value: new Set()
            });
            _classPrivateFieldInitSpec(this, _deferred, {
              writable: true,
              value: Promise.resolve()
            });
          }
          postMessage(obj, transfer) {
            const event = {
              data: structuredClone(obj, transfer ? {
                transfer
              } : null)
            };
            _classPrivateFieldGet(this, _deferred).then(() => {
              for (const listener of _classPrivateFieldGet(this, _listeners)) {
                listener.call(this, event);
              }
            });
          }
          addEventListener(name, listener) {
            _classPrivateFieldGet(this, _listeners).add(listener);
          }
          removeEventListener(name, listener) {
            _classPrivateFieldGet(this, _listeners).delete(listener);
          }
          terminate() {
            _classPrivateFieldGet(this, _listeners).clear();
          }
        }
        exports.LoopbackPort = LoopbackPort;
        const PDFWorkerUtil = {
          isWorkerDisabled: false,
          fallbackWorkerSrc: null,
          fakeWorkerId: 0
        };
        exports.PDFWorkerUtil = PDFWorkerUtil;
        {
          if (_is_node.isNodeJS && "function" === "function") {
            PDFWorkerUtil.isWorkerDisabled = true;
            PDFWorkerUtil.fallbackWorkerSrc = "./pdf.worker.js";
          } else if (typeof document === "object") {
            var _document;
            const pdfjsFilePath = (_document = document) === null || _document === void 0 || (_document = _document.currentScript) === null || _document === void 0 ? void 0 : _document.src;
            if (pdfjsFilePath) {
              PDFWorkerUtil.fallbackWorkerSrc = pdfjsFilePath.replace(/(\.(?:min\.)?js)(\?.*)?$/i, ".worker$1$2");
            }
          }
          PDFWorkerUtil.isSameOrigin = function (baseUrl, otherUrl) {
            let base;
            try {
              base = new URL(baseUrl);
              if (!base.origin || base.origin === "null") {
                return false;
              }
            } catch (e) {
              return false;
            }
            const other = new URL(otherUrl, base);
            return base.origin === other.origin;
          };
          PDFWorkerUtil.createCDNWrapper = function (url) {
            const wrapper = "importScripts(\"".concat(url, "\");");
            return URL.createObjectURL(new Blob([wrapper]));
          };
        }
        class PDFWorker {
          constructor() {
            let {
              name = null,
              port = null,
              verbosity = (0, _util.getVerbosityLevel)()
            } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            if (port && _classStaticPrivateFieldSpecGet(PDFWorker, PDFWorker, _workerPorts).has(port)) {
              throw new Error("Cannot use more than one PDFWorker per port.");
            }
            this.name = name;
            this.destroyed = false;
            this.verbosity = verbosity;
            this._readyCapability = new _util.PromiseCapability();
            this._port = null;
            this._webWorker = null;
            this._messageHandler = null;
            if (port) {
              _classStaticPrivateFieldSpecGet(PDFWorker, PDFWorker, _workerPorts).set(port, this);
              this._initializeFromPort(port);
              return;
            }
            this._initialize();
          }
          get promise() {
            return this._readyCapability.promise;
          }
          get port() {
            return this._port;
          }
          get messageHandler() {
            return this._messageHandler;
          }
          _initializeFromPort(port) {
            this._port = port;
            this._messageHandler = new _message_handler.MessageHandler("main", "worker", port);
            this._messageHandler.on("ready", function () {});
            this._readyCapability.resolve();
            this._messageHandler.send("configure", {
              verbosity: this.verbosity
            });
          }
          _initialize() {
            if (!PDFWorkerUtil.isWorkerDisabled && !PDFWorker._mainThreadWorkerMessageHandler) {
              let {
                workerSrc
              } = PDFWorker;
              try {
                if (!PDFWorkerUtil.isSameOrigin(window.location.href, workerSrc)) {
                  workerSrc = PDFWorkerUtil.createCDNWrapper(new URL(workerSrc, window.location).href);
                }
                const worker = new Worker(workerSrc);
                const messageHandler = new _message_handler.MessageHandler("main", "worker", worker);
                const terminateEarly = () => {
                  worker.removeEventListener("error", onWorkerError);
                  messageHandler.destroy();
                  worker.terminate();
                  if (this.destroyed) {
                    this._readyCapability.reject(new Error("Worker was destroyed"));
                  } else {
                    this._setupFakeWorker();
                  }
                };
                const onWorkerError = () => {
                  if (!this._webWorker) {
                    terminateEarly();
                  }
                };
                worker.addEventListener("error", onWorkerError);
                messageHandler.on("test", data => {
                  worker.removeEventListener("error", onWorkerError);
                  if (this.destroyed) {
                    terminateEarly();
                    return;
                  }
                  if (data) {
                    this._messageHandler = messageHandler;
                    this._port = worker;
                    this._webWorker = worker;
                    this._readyCapability.resolve();
                    messageHandler.send("configure", {
                      verbosity: this.verbosity
                    });
                  } else {
                    this._setupFakeWorker();
                    messageHandler.destroy();
                    worker.terminate();
                  }
                });
                messageHandler.on("ready", data => {
                  worker.removeEventListener("error", onWorkerError);
                  if (this.destroyed) {
                    terminateEarly();
                    return;
                  }
                  try {
                    sendTest();
                  } catch (e) {
                    this._setupFakeWorker();
                  }
                });
                const sendTest = () => {
                  const testObj = new Uint8Array();
                  messageHandler.send("test", testObj, [testObj.buffer]);
                };
                sendTest();
                return;
              } catch (e) {
                (0, _util.info)("The worker has been disabled.");
              }
            }
            this._setupFakeWorker();
          }
          _setupFakeWorker() {
            if (!PDFWorkerUtil.isWorkerDisabled) {
              (0, _util.warn)("Setting up fake worker.");
              PDFWorkerUtil.isWorkerDisabled = true;
            }
            PDFWorker._setupFakeWorkerGlobal.then(WorkerMessageHandler => {
              if (this.destroyed) {
                this._readyCapability.reject(new Error("Worker was destroyed"));
                return;
              }
              const port = new LoopbackPort();
              this._port = port;
              const id = "fake".concat(PDFWorkerUtil.fakeWorkerId++);
              const workerHandler = new _message_handler.MessageHandler(id + "_worker", id, port);
              WorkerMessageHandler.setup(workerHandler, port);
              const messageHandler = new _message_handler.MessageHandler(id, id + "_worker", port);
              this._messageHandler = messageHandler;
              this._readyCapability.resolve();
              messageHandler.send("configure", {
                verbosity: this.verbosity
              });
            }).catch(reason => {
              this._readyCapability.reject(new Error("Setting up fake worker failed: \"".concat(reason.message, "\".")));
            });
          }
          destroy() {
            this.destroyed = true;
            if (this._webWorker) {
              this._webWorker.terminate();
              this._webWorker = null;
            }
            _classStaticPrivateFieldSpecGet(PDFWorker, PDFWorker, _workerPorts).delete(this._port);
            this._port = null;
            if (this._messageHandler) {
              this._messageHandler.destroy();
              this._messageHandler = null;
            }
          }
          static fromPort(params) {
            if (!(params !== null && params !== void 0 && params.port)) {
              throw new Error("PDFWorker.fromPort - invalid method signature.");
            }
            if (_classStaticPrivateFieldSpecGet(this, PDFWorker, _workerPorts).has(params.port)) {
              return _classStaticPrivateFieldSpecGet(this, PDFWorker, _workerPorts).get(params.port);
            }
            return new PDFWorker(params);
          }
          static get workerSrc() {
            if (_worker_options.GlobalWorkerOptions.workerSrc) {
              return _worker_options.GlobalWorkerOptions.workerSrc;
            }
            if (PDFWorkerUtil.fallbackWorkerSrc !== null) {
              if (!_is_node.isNodeJS) {
                (0, _display_utils.deprecated)('No "GlobalWorkerOptions.workerSrc" specified.');
              }
              return PDFWorkerUtil.fallbackWorkerSrc;
            }
            throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
          }
          static get _mainThreadWorkerMessageHandler() {
            try {
              var _globalThis$pdfjsWork;
              return ((_globalThis$pdfjsWork = globalThis.pdfjsWorker) === null || _globalThis$pdfjsWork === void 0 ? void 0 : _globalThis$pdfjsWork.WorkerMessageHandler) || null;
            } catch (ex) {
              return null;
            }
          }
          static get _setupFakeWorkerGlobal() {
            const loader = async () => {
              const mainWorkerMessageHandler = this._mainThreadWorkerMessageHandler;
              if (mainWorkerMessageHandler) {
                return mainWorkerMessageHandler;
              }
              if (_is_node.isNodeJS && "function" === "function") {
                const worker = eval("require")(this.workerSrc);
                return worker.WorkerMessageHandler;
              }
              await (0, _display_utils.loadScript)(this.workerSrc);
              return window.pdfjsWorker.WorkerMessageHandler;
            };
            return (0, _util.shadow)(this, "_setupFakeWorkerGlobal", loader());
          }
        }
        var _workerPorts = {
          writable: true,
          value: new WeakMap()
        };
        exports.PDFWorker = PDFWorker;
        var _methodPromises = /*#__PURE__*/new WeakMap();
        var _pageCache = /*#__PURE__*/new WeakMap();
        var _pagePromises = /*#__PURE__*/new WeakMap();
        var _cacheSimpleMethod = /*#__PURE__*/new WeakSet();
        class WorkerTransport {
          constructor(messageHandler, loadingTask, networkStream, params, factory) {
            _classPrivateMethodInitSpec(this, _cacheSimpleMethod);
            _classPrivateFieldInitSpec(this, _methodPromises, {
              writable: true,
              value: new Map()
            });
            _classPrivateFieldInitSpec(this, _pageCache, {
              writable: true,
              value: new Map()
            });
            _classPrivateFieldInitSpec(this, _pagePromises, {
              writable: true,
              value: new Map()
            });
            this.messageHandler = messageHandler;
            this.loadingTask = loadingTask;
            this.commonObjs = new PDFObjects();
            this.fontLoader = new _font_loader.FontLoader({
              ownerDocument: params.ownerDocument,
              styleElement: params.styleElement
            });
            this._params = params;
            this.canvasFactory = factory.canvasFactory;
            this.filterFactory = factory.filterFactory;
            this.cMapReaderFactory = factory.cMapReaderFactory;
            this.standardFontDataFactory = factory.standardFontDataFactory;
            this.destroyed = false;
            this.destroyCapability = null;
            this._passwordCapability = null;
            this._networkStream = networkStream;
            this._fullReader = null;
            this._lastProgress = null;
            this.downloadInfoCapability = new _util.PromiseCapability();
            this.setupMessageHandler();
          }
          get annotationStorage() {
            return (0, _util.shadow)(this, "annotationStorage", new _annotation_storage.AnnotationStorage());
          }
          getRenderingIntent(intent) {
            let annotationMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _util.AnnotationMode.ENABLE;
            let printAnnotationStorage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            let isOpList = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
            let renderingIntent = _util.RenderingIntentFlag.DISPLAY;
            let annotationMap = null;
            switch (intent) {
              case "any":
                renderingIntent = _util.RenderingIntentFlag.ANY;
                break;
              case "display":
                break;
              case "print":
                renderingIntent = _util.RenderingIntentFlag.PRINT;
                break;
              default:
                (0, _util.warn)("getRenderingIntent - invalid intent: ".concat(intent));
            }
            switch (annotationMode) {
              case _util.AnnotationMode.DISABLE:
                renderingIntent += _util.RenderingIntentFlag.ANNOTATIONS_DISABLE;
                break;
              case _util.AnnotationMode.ENABLE:
                break;
              case _util.AnnotationMode.ENABLE_FORMS:
                renderingIntent += _util.RenderingIntentFlag.ANNOTATIONS_FORMS;
                break;
              case _util.AnnotationMode.ENABLE_STORAGE:
                renderingIntent += _util.RenderingIntentFlag.ANNOTATIONS_STORAGE;
                const annotationStorage = renderingIntent & _util.RenderingIntentFlag.PRINT && printAnnotationStorage instanceof _annotation_storage.PrintAnnotationStorage ? printAnnotationStorage : this.annotationStorage;
                annotationMap = annotationStorage.serializable;
                break;
              default:
                (0, _util.warn)("getRenderingIntent - invalid annotationMode: ".concat(annotationMode));
            }
            if (isOpList) {
              renderingIntent += _util.RenderingIntentFlag.OPLIST;
            }
            return {
              renderingIntent,
              cacheKey: "".concat(renderingIntent, "_").concat(_annotation_storage.AnnotationStorage.getHash(annotationMap)),
              annotationStorageMap: annotationMap
            };
          }
          destroy() {
            if (this.destroyCapability) {
              return this.destroyCapability.promise;
            }
            this.destroyed = true;
            this.destroyCapability = new _util.PromiseCapability();
            if (this._passwordCapability) {
              this._passwordCapability.reject(new Error("Worker was destroyed during onPassword callback"));
            }
            const waitOn = [];
            for (const page of _classPrivateFieldGet(this, _pageCache).values()) {
              waitOn.push(page._destroy());
            }
            _classPrivateFieldGet(this, _pageCache).clear();
            _classPrivateFieldGet(this, _pagePromises).clear();
            if (this.hasOwnProperty("annotationStorage")) {
              this.annotationStorage.resetModified();
            }
            const terminated = this.messageHandler.sendWithPromise("Terminate", null);
            waitOn.push(terminated);
            Promise.all(waitOn).then(() => {
              this.commonObjs.clear();
              this.fontLoader.clear();
              _classPrivateFieldGet(this, _methodPromises).clear();
              this.filterFactory.destroy();
              if (this._networkStream) {
                this._networkStream.cancelAllRequests(new _util.AbortException("Worker was terminated."));
              }
              if (this.messageHandler) {
                this.messageHandler.destroy();
                this.messageHandler = null;
              }
              this.destroyCapability.resolve();
            }, this.destroyCapability.reject);
            return this.destroyCapability.promise;
          }
          setupMessageHandler() {
            const {
              messageHandler,
              loadingTask
            } = this;
            messageHandler.on("GetReader", (data, sink) => {
              (0, _util.assert)(this._networkStream, "GetReader - no `IPDFStream` instance available.");
              this._fullReader = this._networkStream.getFullReader();
              this._fullReader.onProgress = evt => {
                this._lastProgress = {
                  loaded: evt.loaded,
                  total: evt.total
                };
              };
              sink.onPull = () => {
                this._fullReader.read().then(function (_ref8) {
                  let {
                    value,
                    done
                  } = _ref8;
                  if (done) {
                    sink.close();
                    return;
                  }
                  (0, _util.assert)(value instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer.");
                  sink.enqueue(new Uint8Array(value), 1, [value]);
                }).catch(reason => {
                  sink.error(reason);
                });
              };
              sink.onCancel = reason => {
                this._fullReader.cancel(reason);
                sink.ready.catch(readyReason => {
                  if (this.destroyed) {
                    return;
                  }
                  throw readyReason;
                });
              };
            });
            messageHandler.on("ReaderHeadersReady", data => {
              const headersCapability = new _util.PromiseCapability();
              const fullReader = this._fullReader;
              fullReader.headersReady.then(() => {
                if (!fullReader.isStreamingSupported || !fullReader.isRangeSupported) {
                  if (this._lastProgress) {
                    var _loadingTask$onProgre;
                    (_loadingTask$onProgre = loadingTask.onProgress) === null || _loadingTask$onProgre === void 0 || _loadingTask$onProgre.call(loadingTask, this._lastProgress);
                  }
                  fullReader.onProgress = evt => {
                    var _loadingTask$onProgre2;
                    (_loadingTask$onProgre2 = loadingTask.onProgress) === null || _loadingTask$onProgre2 === void 0 || _loadingTask$onProgre2.call(loadingTask, {
                      loaded: evt.loaded,
                      total: evt.total
                    });
                  };
                }
                headersCapability.resolve({
                  isStreamingSupported: fullReader.isStreamingSupported,
                  isRangeSupported: fullReader.isRangeSupported,
                  contentLength: fullReader.contentLength
                });
              }, headersCapability.reject);
              return headersCapability.promise;
            });
            messageHandler.on("GetRangeReader", (data, sink) => {
              (0, _util.assert)(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
              const rangeReader = this._networkStream.getRangeReader(data.begin, data.end);
              if (!rangeReader) {
                sink.close();
                return;
              }
              sink.onPull = () => {
                rangeReader.read().then(function (_ref9) {
                  let {
                    value,
                    done
                  } = _ref9;
                  if (done) {
                    sink.close();
                    return;
                  }
                  (0, _util.assert)(value instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer.");
                  sink.enqueue(new Uint8Array(value), 1, [value]);
                }).catch(reason => {
                  sink.error(reason);
                });
              };
              sink.onCancel = reason => {
                rangeReader.cancel(reason);
                sink.ready.catch(readyReason => {
                  if (this.destroyed) {
                    return;
                  }
                  throw readyReason;
                });
              };
            });
            messageHandler.on("GetDoc", _ref10 => {
              let {
                pdfInfo
              } = _ref10;
              this._numPages = pdfInfo.numPages;
              this._htmlForXfa = pdfInfo.htmlForXfa;
              delete pdfInfo.htmlForXfa;
              loadingTask._capability.resolve(new PDFDocumentProxy(pdfInfo, this));
            });
            messageHandler.on("DocException", function (ex) {
              let reason;
              switch (ex.name) {
                case "PasswordException":
                  reason = new _util.PasswordException(ex.message, ex.code);
                  break;
                case "InvalidPDFException":
                  reason = new _util.InvalidPDFException(ex.message);
                  break;
                case "MissingPDFException":
                  reason = new _util.MissingPDFException(ex.message);
                  break;
                case "UnexpectedResponseException":
                  reason = new _util.UnexpectedResponseException(ex.message, ex.status);
                  break;
                case "UnknownErrorException":
                  reason = new _util.UnknownErrorException(ex.message, ex.details);
                  break;
                default:
                  (0, _util.unreachable)("DocException - expected a valid Error.");
              }
              loadingTask._capability.reject(reason);
            });
            messageHandler.on("PasswordRequest", exception => {
              this._passwordCapability = new _util.PromiseCapability();
              if (loadingTask.onPassword) {
                const updatePassword = password => {
                  if (password instanceof Error) {
                    this._passwordCapability.reject(password);
                  } else {
                    this._passwordCapability.resolve({
                      password
                    });
                  }
                };
                try {
                  loadingTask.onPassword(updatePassword, exception.code);
                } catch (ex) {
                  this._passwordCapability.reject(ex);
                }
              } else {
                this._passwordCapability.reject(new _util.PasswordException(exception.message, exception.code));
              }
              return this._passwordCapability.promise;
            });
            messageHandler.on("DataLoaded", data => {
              var _loadingTask$onProgre3;
              (_loadingTask$onProgre3 = loadingTask.onProgress) === null || _loadingTask$onProgre3 === void 0 || _loadingTask$onProgre3.call(loadingTask, {
                loaded: data.length,
                total: data.length
              });
              this.downloadInfoCapability.resolve(data);
            });
            messageHandler.on("StartRenderPage", data => {
              if (this.destroyed) {
                return;
              }
              const page = _classPrivateFieldGet(this, _pageCache).get(data.pageIndex);
              page._startRenderPage(data.transparency, data.cacheKey);
            });
            messageHandler.on("commonobj", _ref11 => {
              var _globalThis$FontInspe;
              let [id, type, exportedData] = _ref11;
              if (this.destroyed) {
                return;
              }
              if (this.commonObjs.has(id)) {
                return;
              }
              switch (type) {
                case "Font":
                  const params = this._params;
                  if ("error" in exportedData) {
                    const exportedError = exportedData.error;
                    (0, _util.warn)("Error during font loading: ".concat(exportedError));
                    this.commonObjs.resolve(id, exportedError);
                    break;
                  }
                  const inspectFont = params.pdfBug && (_globalThis$FontInspe = globalThis.FontInspector) !== null && _globalThis$FontInspe !== void 0 && _globalThis$FontInspe.enabled ? (font, url) => globalThis.FontInspector.fontAdded(font, url) : null;
                  const font = new _font_loader.FontFaceObject(exportedData, {
                    isEvalSupported: params.isEvalSupported,
                    disableFontFace: params.disableFontFace,
                    ignoreErrors: params.ignoreErrors,
                    inspectFont
                  });
                  this.fontLoader.bind(font).catch(reason => {
                    return messageHandler.sendWithPromise("FontFallback", {
                      id
                    });
                  }).finally(() => {
                    if (!params.fontExtraProperties && font.data) {
                      font.data = null;
                    }
                    this.commonObjs.resolve(id, font);
                  });
                  break;
                case "FontPath":
                case "Image":
                case "Pattern":
                  this.commonObjs.resolve(id, exportedData);
                  break;
                default:
                  throw new Error("Got unknown common object type ".concat(type));
              }
            });
            messageHandler.on("obj", _ref12 => {
              let [id, pageIndex, type, imageData] = _ref12;
              if (this.destroyed) {
                return;
              }
              const pageProxy = _classPrivateFieldGet(this, _pageCache).get(pageIndex);
              if (pageProxy.objs.has(id)) {
                return;
              }
              switch (type) {
                case "Image":
                  pageProxy.objs.resolve(id, imageData);
                  if (imageData) {
                    let length;
                    if (imageData.bitmap) {
                      const {
                        width,
                        height
                      } = imageData;
                      length = width * height * 4;
                    } else {
                      var _imageData$data;
                      length = ((_imageData$data = imageData.data) === null || _imageData$data === void 0 ? void 0 : _imageData$data.length) || 0;
                    }
                    if (length > _util.MAX_IMAGE_SIZE_TO_CACHE) {
                      pageProxy._maybeCleanupAfterRender = true;
                    }
                  }
                  break;
                case "Pattern":
                  pageProxy.objs.resolve(id, imageData);
                  break;
                default:
                  throw new Error("Got unknown object type ".concat(type));
              }
            });
            messageHandler.on("DocProgress", data => {
              var _loadingTask$onProgre4;
              if (this.destroyed) {
                return;
              }
              (_loadingTask$onProgre4 = loadingTask.onProgress) === null || _loadingTask$onProgre4 === void 0 || _loadingTask$onProgre4.call(loadingTask, {
                loaded: data.loaded,
                total: data.total
              });
            });
            messageHandler.on("FetchBuiltInCMap", data => {
              if (this.destroyed) {
                return Promise.reject(new Error("Worker was destroyed."));
              }
              if (!this.cMapReaderFactory) {
                return Promise.reject(new Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter."));
              }
              return this.cMapReaderFactory.fetch(data);
            });
            messageHandler.on("FetchStandardFontData", data => {
              if (this.destroyed) {
                return Promise.reject(new Error("Worker was destroyed."));
              }
              if (!this.standardFontDataFactory) {
                return Promise.reject(new Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter."));
              }
              return this.standardFontDataFactory.fetch(data);
            });
          }
          getData() {
            return this.messageHandler.sendWithPromise("GetData", null);
          }
          saveDocument() {
            var _this$_fullReader$fil, _this$_fullReader;
            if (this.annotationStorage.size <= 0) {
              (0, _util.warn)("saveDocument called while `annotationStorage` is empty, " + "please use the getData-method instead.");
            }
            return this.messageHandler.sendWithPromise("SaveDocument", {
              isPureXfa: !!this._htmlForXfa,
              numPages: this._numPages,
              annotationStorage: this.annotationStorage.serializable,
              filename: (_this$_fullReader$fil = (_this$_fullReader = this._fullReader) === null || _this$_fullReader === void 0 ? void 0 : _this$_fullReader.filename) !== null && _this$_fullReader$fil !== void 0 ? _this$_fullReader$fil : null
            }).finally(() => {
              this.annotationStorage.resetModified();
            });
          }
          getPage(pageNumber) {
            if (!Number.isInteger(pageNumber) || pageNumber <= 0 || pageNumber > this._numPages) {
              return Promise.reject(new Error("Invalid page request."));
            }
            const pageIndex = pageNumber - 1,
              cachedPromise = _classPrivateFieldGet(this, _pagePromises).get(pageIndex);
            if (cachedPromise) {
              return cachedPromise;
            }
            const promise = this.messageHandler.sendWithPromise("GetPage", {
              pageIndex
            }).then(pageInfo => {
              if (this.destroyed) {
                throw new Error("Transport destroyed");
              }
              const page = new PDFPageProxy(pageIndex, pageInfo, this, this._params.pdfBug);
              _classPrivateFieldGet(this, _pageCache).set(pageIndex, page);
              return page;
            });
            _classPrivateFieldGet(this, _pagePromises).set(pageIndex, promise);
            return promise;
          }
          getPageIndex(ref) {
            if (typeof ref !== "object" || ref === null || !Number.isInteger(ref.num) || ref.num < 0 || !Number.isInteger(ref.gen) || ref.gen < 0) {
              return Promise.reject(new Error("Invalid pageIndex request."));
            }
            return this.messageHandler.sendWithPromise("GetPageIndex", {
              num: ref.num,
              gen: ref.gen
            });
          }
          getAnnotations(pageIndex, intent) {
            return this.messageHandler.sendWithPromise("GetAnnotations", {
              pageIndex,
              intent
            });
          }
          getFieldObjects() {
            return _classPrivateMethodGet(this, _cacheSimpleMethod, _cacheSimpleMethod2).call(this, "GetFieldObjects");
          }
          hasJSActions() {
            return _classPrivateMethodGet(this, _cacheSimpleMethod, _cacheSimpleMethod2).call(this, "HasJSActions");
          }
          getCalculationOrderIds() {
            return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
          }
          getDestinations() {
            return this.messageHandler.sendWithPromise("GetDestinations", null);
          }
          getDestination(id) {
            if (typeof id !== "string") {
              return Promise.reject(new Error("Invalid destination request."));
            }
            return this.messageHandler.sendWithPromise("GetDestination", {
              id
            });
          }
          getPageLabels() {
            return this.messageHandler.sendWithPromise("GetPageLabels", null);
          }
          getPageLayout() {
            return this.messageHandler.sendWithPromise("GetPageLayout", null);
          }
          getPageMode() {
            return this.messageHandler.sendWithPromise("GetPageMode", null);
          }
          getViewerPreferences() {
            return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
          }
          getOpenAction() {
            return this.messageHandler.sendWithPromise("GetOpenAction", null);
          }
          getAttachments() {
            return this.messageHandler.sendWithPromise("GetAttachments", null);
          }
          getJavaScript() {
            return this.messageHandler.sendWithPromise("GetJavaScript", null);
          }
          getDocJSActions() {
            return this.messageHandler.sendWithPromise("GetDocJSActions", null);
          }
          getPageJSActions(pageIndex) {
            return this.messageHandler.sendWithPromise("GetPageJSActions", {
              pageIndex
            });
          }
          getStructTree(pageIndex) {
            return this.messageHandler.sendWithPromise("GetStructTree", {
              pageIndex
            });
          }
          getOutline() {
            return this.messageHandler.sendWithPromise("GetOutline", null);
          }
          getOptionalContentConfig() {
            return this.messageHandler.sendWithPromise("GetOptionalContentConfig", null).then(results => {
              return new _optional_content_config.OptionalContentConfig(results);
            });
          }
          getPermissions() {
            return this.messageHandler.sendWithPromise("GetPermissions", null);
          }
          getMetadata() {
            const name = "GetMetadata",
              cachedPromise = _classPrivateFieldGet(this, _methodPromises).get(name);
            if (cachedPromise) {
              return cachedPromise;
            }
            const promise = this.messageHandler.sendWithPromise(name, null).then(results => {
              var _this$_fullReader$fil2, _this$_fullReader2, _this$_fullReader$con, _this$_fullReader3;
              return {
                info: results[0],
                metadata: results[1] ? new _metadata.Metadata(results[1]) : null,
                contentDispositionFilename: (_this$_fullReader$fil2 = (_this$_fullReader2 = this._fullReader) === null || _this$_fullReader2 === void 0 ? void 0 : _this$_fullReader2.filename) !== null && _this$_fullReader$fil2 !== void 0 ? _this$_fullReader$fil2 : null,
                contentLength: (_this$_fullReader$con = (_this$_fullReader3 = this._fullReader) === null || _this$_fullReader3 === void 0 ? void 0 : _this$_fullReader3.contentLength) !== null && _this$_fullReader$con !== void 0 ? _this$_fullReader$con : null
              };
            });
            _classPrivateFieldGet(this, _methodPromises).set(name, promise);
            return promise;
          }
          getMarkInfo() {
            return this.messageHandler.sendWithPromise("GetMarkInfo", null);
          }
          async startCleanup() {
            let keepLoadedFonts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            if (this.destroyed) {
              return;
            }
            await this.messageHandler.sendWithPromise("Cleanup", null);
            for (const page of _classPrivateFieldGet(this, _pageCache).values()) {
              const cleanupSuccessful = page.cleanup();
              if (!cleanupSuccessful) {
                throw new Error("startCleanup: Page ".concat(page.pageNumber, " is currently rendering."));
              }
            }
            this.commonObjs.clear();
            if (!keepLoadedFonts) {
              this.fontLoader.clear();
            }
            _classPrivateFieldGet(this, _methodPromises).clear();
            this.filterFactory.destroy(true);
          }
          get loadingParams() {
            const {
              disableAutoFetch,
              enableXfa
            } = this._params;
            return (0, _util.shadow)(this, "loadingParams", {
              disableAutoFetch,
              enableXfa
            });
          }
        }
        function _cacheSimpleMethod2(name) {
          let data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          const cachedPromise = _classPrivateFieldGet(this, _methodPromises).get(name);
          if (cachedPromise) {
            return cachedPromise;
          }
          const promise = this.messageHandler.sendWithPromise(name, data);
          _classPrivateFieldGet(this, _methodPromises).set(name, promise);
          return promise;
        }
        var _objs = /*#__PURE__*/new WeakMap();
        var _ensureObj = /*#__PURE__*/new WeakSet();
        class PDFObjects {
          constructor() {
            _classPrivateMethodInitSpec(this, _ensureObj);
            _classPrivateFieldInitSpec(this, _objs, {
              writable: true,
              value: Object.create(null)
            });
          }
          get(objId) {
            let callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            if (callback) {
              const obj = _classPrivateMethodGet(this, _ensureObj, _ensureObj2).call(this, objId);
              obj.capability.promise.then(() => callback(obj.data));
              return null;
            }
            const obj = _classPrivateFieldGet(this, _objs)[objId];
            if (!(obj !== null && obj !== void 0 && obj.capability.settled)) {
              throw new Error("Requesting object that isn't resolved yet ".concat(objId, "."));
            }
            return obj.data;
          }
          has(objId) {
            const obj = _classPrivateFieldGet(this, _objs)[objId];
            return (obj === null || obj === void 0 ? void 0 : obj.capability.settled) || false;
          }
          resolve(objId) {
            let data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            const obj = _classPrivateMethodGet(this, _ensureObj, _ensureObj2).call(this, objId);
            obj.data = data;
            obj.capability.resolve();
          }
          clear() {
            for (const objId in _classPrivateFieldGet(this, _objs)) {
              var _data$bitmap;
              const {
                data
              } = _classPrivateFieldGet(this, _objs)[objId];
              data === null || data === void 0 || (_data$bitmap = data.bitmap) === null || _data$bitmap === void 0 || _data$bitmap.close();
            }
            _classPrivateFieldSet(this, _objs, Object.create(null));
          }
        }
        function _ensureObj2(objId) {
          const obj = _classPrivateFieldGet(this, _objs)[objId];
          if (obj) {
            return obj;
          }
          return _classPrivateFieldGet(this, _objs)[objId] = {
            capability: new _util.PromiseCapability(),
            data: null
          };
        }
        var _internalRenderTask = /*#__PURE__*/new WeakMap();
        class RenderTask {
          constructor(internalRenderTask) {
            _classPrivateFieldInitSpec(this, _internalRenderTask, {
              writable: true,
              value: null
            });
            _classPrivateFieldSet(this, _internalRenderTask, internalRenderTask);
            this.onContinue = null;
          }
          get promise() {
            return _classPrivateFieldGet(this, _internalRenderTask).capability.promise;
          }
          cancel() {
            let extraDelay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            _classPrivateFieldGet(this, _internalRenderTask).cancel(null, extraDelay);
          }
          get separateAnnots() {
            const {
              separateAnnots
            } = _classPrivateFieldGet(this, _internalRenderTask).operatorList;
            if (!separateAnnots) {
              return false;
            }
            const {
              annotationCanvasMap
            } = _classPrivateFieldGet(this, _internalRenderTask);
            return separateAnnots.form || separateAnnots.canvas && (annotationCanvasMap === null || annotationCanvasMap === void 0 ? void 0 : annotationCanvasMap.size) > 0;
          }
        }
        exports.RenderTask = RenderTask;
        class InternalRenderTask {
          constructor(_ref13) {
            let {
              callback,
              params,
              objs,
              commonObjs,
              annotationCanvasMap,
              operatorList,
              pageIndex,
              canvasFactory,
              filterFactory,
              useRequestAnimationFrame = false,
              pdfBug = false,
              pageColors = null
            } = _ref13;
            this.callback = callback;
            this.params = params;
            this.objs = objs;
            this.commonObjs = commonObjs;
            this.annotationCanvasMap = annotationCanvasMap;
            this.operatorListIdx = null;
            this.operatorList = operatorList;
            this._pageIndex = pageIndex;
            this.canvasFactory = canvasFactory;
            this.filterFactory = filterFactory;
            this._pdfBug = pdfBug;
            this.pageColors = pageColors;
            this.running = false;
            this.graphicsReadyCallback = null;
            this.graphicsReady = false;
            this._useRequestAnimationFrame = useRequestAnimationFrame === true && typeof window !== "undefined";
            this.cancelled = false;
            this.capability = new _util.PromiseCapability();
            this.task = new RenderTask(this);
            this._cancelBound = this.cancel.bind(this);
            this._continueBound = this._continue.bind(this);
            this._scheduleNextBound = this._scheduleNext.bind(this);
            this._nextBound = this._next.bind(this);
            this._canvas = params.canvasContext.canvas;
          }
          get completed() {
            return this.capability.promise.catch(function () {});
          }
          initializeGraphics(_ref14) {
            var _globalThis$StepperMa, _this$graphicsReadyCa;
            let {
              transparency = false,
              optionalContentConfig
            } = _ref14;
            if (this.cancelled) {
              return;
            }
            if (this._canvas) {
              if (_classStaticPrivateFieldSpecGet(InternalRenderTask, InternalRenderTask, _canvasInUse).has(this._canvas)) {
                throw new Error("Cannot use the same canvas during multiple render() operations. " + "Use different canvas or ensure previous operations were " + "cancelled or completed.");
              }
              _classStaticPrivateFieldSpecGet(InternalRenderTask, InternalRenderTask, _canvasInUse).add(this._canvas);
            }
            if (this._pdfBug && (_globalThis$StepperMa = globalThis.StepperManager) !== null && _globalThis$StepperMa !== void 0 && _globalThis$StepperMa.enabled) {
              this.stepper = globalThis.StepperManager.create(this._pageIndex);
              this.stepper.init(this.operatorList);
              this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint();
            }
            const {
              canvasContext,
              viewport,
              transform,
              background
            } = this.params;
            this.gfx = new _canvas.CanvasGraphics(canvasContext, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
              optionalContentConfig
            }, this.annotationCanvasMap, this.pageColors);
            this.gfx.beginDrawing({
              transform,
              viewport,
              transparency,
              background
            });
            this.operatorListIdx = 0;
            this.graphicsReady = true;
            (_this$graphicsReadyCa = this.graphicsReadyCallback) === null || _this$graphicsReadyCa === void 0 || _this$graphicsReadyCa.call(this);
          }
          cancel() {
            var _this$gfx;
            let error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            let extraDelay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            this.running = false;
            this.cancelled = true;
            (_this$gfx = this.gfx) === null || _this$gfx === void 0 || _this$gfx.endDrawing();
            if (this._canvas) {
              _classStaticPrivateFieldSpecGet(InternalRenderTask, InternalRenderTask, _canvasInUse).delete(this._canvas);
            }
            this.callback(error || new _display_utils.RenderingCancelledException("Rendering cancelled, page ".concat(this._pageIndex + 1), "canvas", extraDelay));
          }
          operatorListChanged() {
            var _this$stepper;
            if (!this.graphicsReady) {
              this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound);
              return;
            }
            (_this$stepper = this.stepper) === null || _this$stepper === void 0 || _this$stepper.updateOperatorList(this.operatorList);
            if (this.running) {
              return;
            }
            this._continue();
          }
          _continue() {
            this.running = true;
            if (this.cancelled) {
              return;
            }
            if (this.task.onContinue) {
              this.task.onContinue(this._scheduleNextBound);
            } else {
              this._scheduleNext();
            }
          }
          _scheduleNext() {
            if (this._useRequestAnimationFrame) {
              window.requestAnimationFrame(() => {
                this._nextBound().catch(this._cancelBound);
              });
            } else {
              Promise.resolve().then(this._nextBound).catch(this._cancelBound);
            }
          }
          async _next() {
            if (this.cancelled) {
              return;
            }
            this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper);
            if (this.operatorListIdx === this.operatorList.argsArray.length) {
              this.running = false;
              if (this.operatorList.lastChunk) {
                this.gfx.endDrawing(this.pageColors);
                if (this._canvas) {
                  _classStaticPrivateFieldSpecGet(InternalRenderTask, InternalRenderTask, _canvasInUse).delete(this._canvas);
                }
                this.callback();
              }
            }
          }
        }
        var _canvasInUse = {
          writable: true,
          value: new WeakSet()
        };
        const version = '3.6.172';
        exports.version = version;
        const build = '4d3dfe254';
        exports.build = build;

        /***/
      }, /* 3 */
      /***/(__unused_webpack_module, exports, __w_pdfjs_require__) => {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.PrintAnnotationStorage = exports.AnnotationStorage = void 0;
        var _util = __w_pdfjs_require__(1);
        var _editor = __w_pdfjs_require__(4);
        var _murmurhash = __w_pdfjs_require__(8);
        var _modified = /*#__PURE__*/new WeakMap();
        var _storage = /*#__PURE__*/new WeakMap();
        var _setModified = /*#__PURE__*/new WeakSet();
        class AnnotationStorage {
          constructor() {
            _classPrivateMethodInitSpec(this, _setModified);
            _classPrivateFieldInitSpec(this, _modified, {
              writable: true,
              value: false
            });
            _classPrivateFieldInitSpec(this, _storage, {
              writable: true,
              value: new Map()
            });
            this.onSetModified = null;
            this.onResetModified = null;
            this.onAnnotationEditor = null;
          }
          getValue(key, defaultValue) {
            const value = _classPrivateFieldGet(this, _storage).get(key);
            if (value === undefined) {
              return defaultValue;
            }
            return Object.assign(defaultValue, value);
          }
          getRawValue(key) {
            return _classPrivateFieldGet(this, _storage).get(key);
          }
          remove(key) {
            _classPrivateFieldGet(this, _storage).delete(key);
            if (_classPrivateFieldGet(this, _storage).size === 0) {
              this.resetModified();
            }
            if (typeof this.onAnnotationEditor === "function") {
              for (const value of _classPrivateFieldGet(this, _storage).values()) {
                if (value instanceof _editor.AnnotationEditor) {
                  return;
                }
              }
              this.onAnnotationEditor(null);
            }
          }
          setValue(key, value) {
            const obj = _classPrivateFieldGet(this, _storage).get(key);
            let modified = false;
            if (obj !== undefined) {
              for (const [entry, val] of Object.entries(value)) {
                if (obj[entry] !== val) {
                  modified = true;
                  obj[entry] = val;
                }
              }
            } else {
              modified = true;
              _classPrivateFieldGet(this, _storage).set(key, value);
            }
            if (modified) {
              _classPrivateMethodGet(this, _setModified, _setModified2).call(this);
            }
            if (value instanceof _editor.AnnotationEditor && typeof this.onAnnotationEditor === "function") {
              this.onAnnotationEditor(value.constructor._type);
            }
          }
          has(key) {
            return _classPrivateFieldGet(this, _storage).has(key);
          }
          getAll() {
            return _classPrivateFieldGet(this, _storage).size > 0 ? (0, _util.objectFromMap)(_classPrivateFieldGet(this, _storage)) : null;
          }
          setAll(obj) {
            for (const [key, val] of Object.entries(obj)) {
              this.setValue(key, val);
            }
          }
          get size() {
            return _classPrivateFieldGet(this, _storage).size;
          }
          resetModified() {
            if (_classPrivateFieldGet(this, _modified)) {
              _classPrivateFieldSet(this, _modified, false);
              if (typeof this.onResetModified === "function") {
                this.onResetModified();
              }
            }
          }
          get print() {
            return new PrintAnnotationStorage(this);
          }
          get serializable() {
            if (_classPrivateFieldGet(this, _storage).size === 0) {
              return null;
            }
            const clone = new Map();
            for (const [key, val] of _classPrivateFieldGet(this, _storage)) {
              const serialized = val instanceof _editor.AnnotationEditor ? val.serialize() : val;
              if (serialized) {
                clone.set(key, serialized);
              }
            }
            return clone;
          }
          static getHash(map) {
            if (!map) {
              return "";
            }
            const hash = new _murmurhash.MurmurHash3_64();
            for (const [key, val] of map) {
              hash.update("".concat(key, ":").concat(JSON.stringify(val)));
            }
            return hash.hexdigest();
          }
        }
        function _setModified2() {
          if (!_classPrivateFieldGet(this, _modified)) {
            _classPrivateFieldSet(this, _modified, true);
            if (typeof this.onSetModified === "function") {
              this.onSetModified();
            }
          }
        }
        exports.AnnotationStorage = AnnotationStorage;
        var _serializable = /*#__PURE__*/new WeakMap();
        class PrintAnnotationStorage extends AnnotationStorage {
          constructor(parent) {
            super();
            _classPrivateFieldInitSpec(this, _serializable, {
              writable: true,
              value: null
            });
            _classPrivateFieldSet(this, _serializable, structuredClone(parent.serializable));
          }
          get print() {
            (0, _util.unreachable)("Should not call PrintAnnotationStorage.print");
          }
          get serializable() {
            return _classPrivateFieldGet(this, _serializable);
          }
        }
        exports.PrintAnnotationStorage = PrintAnnotationStorage;

        /***/
      }, /* 4 */
      /***/(__unused_webpack_module, exports, __w_pdfjs_require__) => {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.AnnotationEditor = void 0;
        var _tools = __w_pdfjs_require__(5);
        var _util = __w_pdfjs_require__(1);
        var _boundFocusin = /*#__PURE__*/new WeakMap();
        var _boundFocusout = /*#__PURE__*/new WeakMap();
        var _hasBeenSelected = /*#__PURE__*/new WeakMap();
        var _isEditing = /*#__PURE__*/new WeakMap();
        var _isInEditMode = /*#__PURE__*/new WeakMap();
        var _zIndex = /*#__PURE__*/new WeakMap();
        class AnnotationEditor {
          constructor(parameters) {
            _classPrivateFieldInitSpec(this, _boundFocusin, {
              writable: true,
              value: this.focusin.bind(this)
            });
            _classPrivateFieldInitSpec(this, _boundFocusout, {
              writable: true,
              value: this.focusout.bind(this)
            });
            _classPrivateFieldInitSpec(this, _hasBeenSelected, {
              writable: true,
              value: false
            });
            _classPrivateFieldInitSpec(this, _isEditing, {
              writable: true,
              value: false
            });
            _classPrivateFieldInitSpec(this, _isInEditMode, {
              writable: true,
              value: false
            });
            _defineProperty(this, "_uiManager", null);
            _classPrivateFieldInitSpec(this, _zIndex, {
              writable: true,
              value: AnnotationEditor._zIndex++
            });
            if (this.constructor === AnnotationEditor) {
              (0, _util.unreachable)("Cannot initialize AnnotationEditor.");
            }
            this.parent = parameters.parent;
            this.id = parameters.id;
            this.width = this.height = null;
            this.pageIndex = parameters.parent.pageIndex;
            this.name = parameters.name;
            this.div = null;
            this._uiManager = parameters.uiManager;
            const {
              rotation,
              rawDims: {
                pageWidth,
                pageHeight,
                pageX,
                pageY
              }
            } = this.parent.viewport;
            this.rotation = rotation;
            this.pageRotation = (360 + rotation - this._uiManager.viewParameters.rotation) % 360;
            this.pageDimensions = [pageWidth, pageHeight];
            this.pageTranslation = [pageX, pageY];
            const [width, height] = this.parentDimensions;
            this.x = parameters.x / width;
            this.y = parameters.y / height;
            this.isAttachedToDOM = false;
          }
          static get _defaultLineColor() {
            return (0, _util.shadow)(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
          }
          addCommands(params) {
            this._uiManager.addCommands(params);
          }
          get currentLayer() {
            return this._uiManager.currentLayer;
          }
          setInBackground() {
            this.div.style.zIndex = 0;
          }
          setInForeground() {
            this.div.style.zIndex = _classPrivateFieldGet(this, _zIndex);
          }
          setParent(parent) {
            if (parent !== null) {
              this.pageIndex = parent.pageIndex;
              this.pageDimensions = parent.pageDimensions;
            }
            this.parent = parent;
          }
          focusin(event) {
            if (!_classPrivateFieldGet(this, _hasBeenSelected)) {
              this.parent.setSelected(this);
            } else {
              _classPrivateFieldSet(this, _hasBeenSelected, false);
            }
          }
          focusout(event) {
            var _this$parent;
            if (!this.isAttachedToDOM) {
              return;
            }
            const target = event.relatedTarget;
            if (target !== null && target !== void 0 && target.closest("#".concat(this.id))) {
              return;
            }
            event.preventDefault();
            if (!((_this$parent = this.parent) !== null && _this$parent !== void 0 && _this$parent.isMultipleSelection)) {
              this.commitOrRemove();
            }
          }
          commitOrRemove() {
            if (this.isEmpty()) {
              this.remove();
            } else {
              this.commit();
            }
          }
          commit() {
            this.addToAnnotationStorage();
          }
          addToAnnotationStorage() {
            this._uiManager.addToAnnotationStorage(this);
          }
          dragstart(event) {
            const rect = this.parent.div.getBoundingClientRect();
            this.startX = event.clientX - rect.x;
            this.startY = event.clientY - rect.y;
            event.dataTransfer.setData("text/plain", this.id);
            event.dataTransfer.effectAllowed = "move";
          }
          setAt(x, y, tx, ty) {
            const [width, height] = this.parentDimensions;
            [tx, ty] = this.screenToPageTranslation(tx, ty);
            this.x = (x + tx) / width;
            this.y = (y + ty) / height;
            this.div.style.left = "".concat(100 * this.x, "%");
            this.div.style.top = "".concat(100 * this.y, "%");
          }
          translate(x, y) {
            const [width, height] = this.parentDimensions;
            [x, y] = this.screenToPageTranslation(x, y);
            this.x += x / width;
            this.y += y / height;
            this.div.style.left = "".concat(100 * this.x, "%");
            this.div.style.top = "".concat(100 * this.y, "%");
          }
          screenToPageTranslation(x, y) {
            switch (this.parentRotation) {
              case 90:
                return [y, -x];
              case 180:
                return [-x, -y];
              case 270:
                return [-y, x];
              default:
                return [x, y];
            }
          }
          get parentScale() {
            return this._uiManager.viewParameters.realScale;
          }
          get parentRotation() {
            return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
          }
          get parentDimensions() {
            const {
              realScale
            } = this._uiManager.viewParameters;
            const [pageWidth, pageHeight] = this.pageDimensions;
            return [pageWidth * realScale, pageHeight * realScale];
          }
          setDims(width, height) {
            const [parentWidth, parentHeight] = this.parentDimensions;
            this.div.style.width = "".concat(100 * width / parentWidth, "%");
            this.div.style.height = "".concat(100 * height / parentHeight, "%");
          }
          fixDims() {
            const {
              style
            } = this.div;
            const {
              height,
              width
            } = style;
            const widthPercent = width.endsWith("%");
            const heightPercent = height.endsWith("%");
            if (widthPercent && heightPercent) {
              return;
            }
            const [parentWidth, parentHeight] = this.parentDimensions;
            if (!widthPercent) {
              style.width = "".concat(100 * parseFloat(width) / parentWidth, "%");
            }
            if (!heightPercent) {
              style.height = "".concat(100 * parseFloat(height) / parentHeight, "%");
            }
          }
          getInitialTranslation() {
            return [0, 0];
          }
          render() {
            this.div = document.createElement("div");
            this.div.setAttribute("data-editor-rotation", (360 - this.rotation) % 360);
            this.div.className = this.name;
            this.div.setAttribute("id", this.id);
            this.div.setAttribute("tabIndex", 0);
            this.setInForeground();
            this.div.addEventListener("focusin", _classPrivateFieldGet(this, _boundFocusin));
            this.div.addEventListener("focusout", _classPrivateFieldGet(this, _boundFocusout));
            const [tx, ty] = this.getInitialTranslation();
            this.translate(tx, ty);
            (0, _tools.bindEvents)(this, this.div, ["dragstart", "pointerdown"]);
            return this.div;
          }
          pointerdown(event) {
            const {
              isMac
            } = _util.FeatureTest.platform;
            if (event.button !== 0 || event.ctrlKey && isMac) {
              event.preventDefault();
              return;
            }
            if (event.ctrlKey && !isMac || event.shiftKey || event.metaKey && isMac) {
              this.parent.toggleSelected(this);
            } else {
              this.parent.setSelected(this);
            }
            _classPrivateFieldSet(this, _hasBeenSelected, true);
          }
          getRect(tx, ty) {
            const scale = this.parentScale;
            const [pageWidth, pageHeight] = this.pageDimensions;
            const [pageX, pageY] = this.pageTranslation;
            const shiftX = tx / scale;
            const shiftY = ty / scale;
            const x = this.x * pageWidth;
            const y = this.y * pageHeight;
            const width = this.width * pageWidth;
            const height = this.height * pageHeight;
            switch (this.rotation) {
              case 0:
                return [x + shiftX + pageX, pageHeight - y - shiftY - height + pageY, x + shiftX + width + pageX, pageHeight - y - shiftY + pageY];
              case 90:
                return [x + shiftY + pageX, pageHeight - y + shiftX + pageY, x + shiftY + height + pageX, pageHeight - y + shiftX + width + pageY];
              case 180:
                return [x - shiftX - width + pageX, pageHeight - y + shiftY + pageY, x - shiftX + pageX, pageHeight - y + shiftY + height + pageY];
              case 270:
                return [x - shiftY - height + pageX, pageHeight - y - shiftX - width + pageY, x - shiftY + pageX, pageHeight - y - shiftX + pageY];
              default:
                throw new Error("Invalid rotation");
            }
          }
          getRectInCurrentCoords(rect, pageHeight) {
            const [x1, y1, x2, y2] = rect;
            const width = x2 - x1;
            const height = y2 - y1;
            switch (this.rotation) {
              case 0:
                return [x1, pageHeight - y2, width, height];
              case 90:
                return [x1, pageHeight - y1, height, width];
              case 180:
                return [x2, pageHeight - y1, width, height];
              case 270:
                return [x2, pageHeight - y2, height, width];
              default:
                throw new Error("Invalid rotation");
            }
          }
          onceAdded() {}
          isEmpty() {
            return false;
          }
          enableEditMode() {
            _classPrivateFieldSet(this, _isInEditMode, true);
          }
          disableEditMode() {
            _classPrivateFieldSet(this, _isInEditMode, false);
          }
          isInEditMode() {
            return _classPrivateFieldGet(this, _isInEditMode);
          }
          shouldGetKeyboardEvents() {
            return false;
          }
          needsToBeRebuilt() {
            return this.div && !this.isAttachedToDOM;
          }
          rebuild() {
            var _this$div;
            (_this$div = this.div) === null || _this$div === void 0 || _this$div.addEventListener("focusin", _classPrivateFieldGet(this, _boundFocusin));
          }
          serialize() {
            (0, _util.unreachable)("An editor must be serializable");
          }
          static deserialize(data, parent, uiManager) {
            const editor = new this.prototype.constructor({
              parent,
              id: parent.getNextId(),
              uiManager
            });
            editor.rotation = data.rotation;
            const [pageWidth, pageHeight] = editor.pageDimensions;
            const [x, y, width, height] = editor.getRectInCurrentCoords(data.rect, pageHeight);
            editor.x = x / pageWidth;
            editor.y = y / pageHeight;
            editor.width = width / pageWidth;
            editor.height = height / pageHeight;
            return editor;
          }
          remove() {
            this.div.removeEventListener("focusin", _classPrivateFieldGet(this, _boundFocusin));
            this.div.removeEventListener("focusout", _classPrivateFieldGet(this, _boundFocusout));
            if (!this.isEmpty()) {
              this.commit();
            }
            this.parent.remove(this);
          }
          select() {
            var _this$div2;
            (_this$div2 = this.div) === null || _this$div2 === void 0 || _this$div2.classList.add("selectedEditor");
          }
          unselect() {
            var _this$div3;
            (_this$div3 = this.div) === null || _this$div3 === void 0 || _this$div3.classList.remove("selectedEditor");
          }
          updateParams(type, value) {}
          disableEditing() {}
          enableEditing() {}
          get propertiesToUpdate() {
            return {};
          }
          get contentDiv() {
            return this.div;
          }
          get isEditing() {
            return _classPrivateFieldGet(this, _isEditing);
          }
          set isEditing(value) {
            _classPrivateFieldSet(this, _isEditing, value);
            if (value) {
              this.parent.setSelected(this);
              this.parent.setActiveEditor(this);
            } else {
              this.parent.setActiveEditor(null);
            }
          }
        }
        _defineProperty(AnnotationEditor, "_colorManager", new _tools.ColorManager());
        _defineProperty(AnnotationEditor, "_zIndex", 1);
        exports.AnnotationEditor = AnnotationEditor;

        /***/
      }, /* 5 */
      /***/(__unused_webpack_module, exports, __w_pdfjs_require__) => {
        var _class17;
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.KeyboardManager = exports.CommandManager = exports.ColorManager = exports.AnnotationEditorUIManager = void 0;
        exports.bindEvents = bindEvents;
        exports.opacityToHex = opacityToHex;
        var _util = __w_pdfjs_require__(1);
        var _display_utils = __w_pdfjs_require__(6);
        function bindEvents(obj, element, names) {
          for (const name of names) {
            element.addEventListener(name, obj[name].bind(obj));
          }
        }
        function opacityToHex(opacity) {
          return Math.round(Math.min(255, Math.max(1, 255 * opacity))).toString(16).padStart(2, "0");
        }
        var _id = /*#__PURE__*/new WeakMap();
        class IdManager {
          constructor() {
            _classPrivateFieldInitSpec(this, _id, {
              writable: true,
              value: 0
            });
          }
          getId() {
            var _this$id, _this$id2;
            return "".concat(_util.AnnotationEditorPrefix).concat((_classPrivateFieldSet(this, _id, (_this$id = _classPrivateFieldGet(this, _id), _this$id2 = _this$id++, _this$id)), _this$id2));
          }
        }
        var _commands = /*#__PURE__*/new WeakMap();
        var _locked = /*#__PURE__*/new WeakMap();
        var _maxSize = /*#__PURE__*/new WeakMap();
        var _position = /*#__PURE__*/new WeakMap();
        class CommandManager {
          constructor() {
            let maxSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 128;
            _classPrivateFieldInitSpec(this, _commands, {
              writable: true,
              value: []
            });
            _classPrivateFieldInitSpec(this, _locked, {
              writable: true,
              value: false
            });
            _classPrivateFieldInitSpec(this, _maxSize, {
              writable: true,
              value: void 0
            });
            _classPrivateFieldInitSpec(this, _position, {
              writable: true,
              value: -1
            });
            _classPrivateFieldSet(this, _maxSize, maxSize);
          }
          add(_ref15) {
            let {
              cmd,
              undo,
              mustExec,
              type = NaN,
              overwriteIfSameType = false,
              keepUndo = false
            } = _ref15;
            if (mustExec) {
              cmd();
            }
            if (_classPrivateFieldGet(this, _locked)) {
              return;
            }
            const save = {
              cmd,
              undo,
              type
            };
            if (_classPrivateFieldGet(this, _position) === -1) {
              if (_classPrivateFieldGet(this, _commands).length > 0) {
                _classPrivateFieldGet(this, _commands).length = 0;
              }
              _classPrivateFieldSet(this, _position, 0);
              _classPrivateFieldGet(this, _commands).push(save);
              return;
            }
            if (overwriteIfSameType && _classPrivateFieldGet(this, _commands)[_classPrivateFieldGet(this, _position)].type === type) {
              if (keepUndo) {
                save.undo = _classPrivateFieldGet(this, _commands)[_classPrivateFieldGet(this, _position)].undo;
              }
              _classPrivateFieldGet(this, _commands)[_classPrivateFieldGet(this, _position)] = save;
              return;
            }
            const next = _classPrivateFieldGet(this, _position) + 1;
            if (next === _classPrivateFieldGet(this, _maxSize)) {
              _classPrivateFieldGet(this, _commands).splice(0, 1);
            } else {
              _classPrivateFieldSet(this, _position, next);
              if (next < _classPrivateFieldGet(this, _commands).length) {
                _classPrivateFieldGet(this, _commands).splice(next);
              }
            }
            _classPrivateFieldGet(this, _commands).push(save);
          }
          undo() {
            if (_classPrivateFieldGet(this, _position) === -1) {
              return;
            }
            _classPrivateFieldSet(this, _locked, true);
            _classPrivateFieldGet(this, _commands)[_classPrivateFieldGet(this, _position)].undo();
            _classPrivateFieldSet(this, _locked, false);
            _classPrivateFieldSet(this, _position, _classPrivateFieldGet(this, _position) - 1);
          }
          redo() {
            if (_classPrivateFieldGet(this, _position) < _classPrivateFieldGet(this, _commands).length - 1) {
              _classPrivateFieldSet(this, _position, _classPrivateFieldGet(this, _position) + 1);
              _classPrivateFieldSet(this, _locked, true);
              _classPrivateFieldGet(this, _commands)[_classPrivateFieldGet(this, _position)].cmd();
              _classPrivateFieldSet(this, _locked, false);
            }
          }
          hasSomethingToUndo() {
            return _classPrivateFieldGet(this, _position) !== -1;
          }
          hasSomethingToRedo() {
            return _classPrivateFieldGet(this, _position) < _classPrivateFieldGet(this, _commands).length - 1;
          }
          destroy() {
            _classPrivateFieldSet(this, _commands, null);
          }
        }
        exports.CommandManager = CommandManager;
        var _serialize = /*#__PURE__*/new WeakSet();
        class KeyboardManager {
          constructor(callbacks) {
            _classPrivateMethodInitSpec(this, _serialize);
            this.buffer = [];
            this.callbacks = new Map();
            this.allKeys = new Set();
            const {
              isMac
            } = _util.FeatureTest.platform;
            for (const [keys, callback] of callbacks) {
              for (const key of keys) {
                const isMacKey = key.startsWith("mac+");
                if (isMac && isMacKey) {
                  this.callbacks.set(key.slice(4), callback);
                  this.allKeys.add(key.split("+").at(-1));
                } else if (!isMac && !isMacKey) {
                  this.callbacks.set(key, callback);
                  this.allKeys.add(key.split("+").at(-1));
                }
              }
            }
          }
          exec(self, event) {
            if (!this.allKeys.has(event.key)) {
              return;
            }
            const callback = this.callbacks.get(_classPrivateMethodGet(this, _serialize, _serialize2).call(this, event));
            if (!callback) {
              return;
            }
            callback.bind(self)();
            event.stopPropagation();
            event.preventDefault();
          }
        }
        function _serialize2(event) {
          if (event.altKey) {
            this.buffer.push("alt");
          }
          if (event.ctrlKey) {
            this.buffer.push("ctrl");
          }
          if (event.metaKey) {
            this.buffer.push("meta");
          }
          if (event.shiftKey) {
            this.buffer.push("shift");
          }
          this.buffer.push(event.key);
          const str = this.buffer.join("+");
          this.buffer.length = 0;
          return str;
        }
        exports.KeyboardManager = KeyboardManager;
        class ColorManager {
          get _colors() {
            const colors = new Map([["CanvasText", null], ["Canvas", null]]);
            (0, _display_utils.getColorValues)(colors);
            return (0, _util.shadow)(this, "_colors", colors);
          }
          convert(color) {
            const rgb = (0, _display_utils.getRGB)(color);
            if (!window.matchMedia("(forced-colors: active)").matches) {
              return rgb;
            }
            for (const [name, RGB] of this._colors) {
              if (RGB.every((x, i) => x === rgb[i])) {
                return ColorManager._colorsMapping.get(name);
              }
            }
            return rgb;
          }
          getHexCode(name) {
            const rgb = this._colors.get(name);
            if (!rgb) {
              return name;
            }
            return _util.Util.makeHexColor(...rgb);
          }
        }
        _defineProperty(ColorManager, "_colorsMapping", new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]));
        exports.ColorManager = ColorManager;
        var _activeEditor = /*#__PURE__*/new WeakMap();
        var _allEditors = /*#__PURE__*/new WeakMap();
        var _allLayers = /*#__PURE__*/new WeakMap();
        var _annotationStorage = /*#__PURE__*/new WeakMap();
        var _commandManager = /*#__PURE__*/new WeakMap();
        var _currentPageIndex = /*#__PURE__*/new WeakMap();
        var _editorTypes = /*#__PURE__*/new WeakMap();
        var _editorsToRescale = /*#__PURE__*/new WeakMap();
        var _eventBus = /*#__PURE__*/new WeakMap();
        var _idManager = /*#__PURE__*/new WeakMap();
        var _isEnabled = /*#__PURE__*/new WeakMap();
        var _mode = /*#__PURE__*/new WeakMap();
        var _selectedEditors = /*#__PURE__*/new WeakMap();
        var _boundCopy = /*#__PURE__*/new WeakMap();
        var _boundCut = /*#__PURE__*/new WeakMap();
        var _boundPaste = /*#__PURE__*/new WeakMap();
        var _boundKeydown = /*#__PURE__*/new WeakMap();
        var _boundOnEditingAction = /*#__PURE__*/new WeakMap();
        var _boundOnPageChanging = /*#__PURE__*/new WeakMap();
        var _boundOnScaleChanging = /*#__PURE__*/new WeakMap();
        var _boundOnRotationChanging = /*#__PURE__*/new WeakMap();
        var _previousStates = /*#__PURE__*/new WeakMap();
        var _container = /*#__PURE__*/new WeakMap();
        var _addKeyboardManager = /*#__PURE__*/new WeakSet();
        var _removeKeyboardManager = /*#__PURE__*/new WeakSet();
        var _addCopyPasteListeners = /*#__PURE__*/new WeakSet();
        var _removeCopyPasteListeners = /*#__PURE__*/new WeakSet();
        var _dispatchUpdateStates = /*#__PURE__*/new WeakSet();
        var _dispatchUpdateUI = /*#__PURE__*/new WeakSet();
        var _enableAll = /*#__PURE__*/new WeakSet();
        var _disableAll = /*#__PURE__*/new WeakSet();
        var _addEditorToLayer = /*#__PURE__*/new WeakSet();
        var _isEmpty = /*#__PURE__*/new WeakSet();
        var _selectEditors = /*#__PURE__*/new WeakSet();
        class AnnotationEditorUIManager {
          constructor(container, eventBus, annotationStorage) {
            _classPrivateMethodInitSpec(this, _selectEditors);
            _classPrivateMethodInitSpec(this, _isEmpty);
            _classPrivateMethodInitSpec(this, _addEditorToLayer);
            _classPrivateMethodInitSpec(this, _disableAll);
            _classPrivateMethodInitSpec(this, _enableAll);
            _classPrivateMethodInitSpec(this, _dispatchUpdateUI);
            _classPrivateMethodInitSpec(this, _dispatchUpdateStates);
            _classPrivateMethodInitSpec(this, _removeCopyPasteListeners);
            _classPrivateMethodInitSpec(this, _addCopyPasteListeners);
            _classPrivateMethodInitSpec(this, _removeKeyboardManager);
            _classPrivateMethodInitSpec(this, _addKeyboardManager);
            _classPrivateFieldInitSpec(this, _activeEditor, {
              writable: true,
              value: null
            });
            _classPrivateFieldInitSpec(this, _allEditors, {
              writable: true,
              value: new Map()
            });
            _classPrivateFieldInitSpec(this, _allLayers, {
              writable: true,
              value: new Map()
            });
            _classPrivateFieldInitSpec(this, _annotationStorage, {
              writable: true,
              value: null
            });
            _classPrivateFieldInitSpec(this, _commandManager, {
              writable: true,
              value: new CommandManager()
            });
            _classPrivateFieldInitSpec(this, _currentPageIndex, {
              writable: true,
              value: 0
            });
            _classPrivateFieldInitSpec(this, _editorTypes, {
              writable: true,
              value: null
            });
            _classPrivateFieldInitSpec(this, _editorsToRescale, {
              writable: true,
              value: new Set()
            });
            _classPrivateFieldInitSpec(this, _eventBus, {
              writable: true,
              value: null
            });
            _classPrivateFieldInitSpec(this, _idManager, {
              writable: true,
              value: new IdManager()
            });
            _classPrivateFieldInitSpec(this, _isEnabled, {
              writable: true,
              value: false
            });
            _classPrivateFieldInitSpec(this, _mode, {
              writable: true,
              value: _util.AnnotationEditorType.NONE
            });
            _classPrivateFieldInitSpec(this, _selectedEditors, {
              writable: true,
              value: new Set()
            });
            _classPrivateFieldInitSpec(this, _boundCopy, {
              writable: true,
              value: this.copy.bind(this)
            });
            _classPrivateFieldInitSpec(this, _boundCut, {
              writable: true,
              value: this.cut.bind(this)
            });
            _classPrivateFieldInitSpec(this, _boundPaste, {
              writable: true,
              value: this.paste.bind(this)
            });
            _classPrivateFieldInitSpec(this, _boundKeydown, {
              writable: true,
              value: this.keydown.bind(this)
            });
            _classPrivateFieldInitSpec(this, _boundOnEditingAction, {
              writable: true,
              value: this.onEditingAction.bind(this)
            });
            _classPrivateFieldInitSpec(this, _boundOnPageChanging, {
              writable: true,
              value: this.onPageChanging.bind(this)
            });
            _classPrivateFieldInitSpec(this, _boundOnScaleChanging, {
              writable: true,
              value: this.onScaleChanging.bind(this)
            });
            _classPrivateFieldInitSpec(this, _boundOnRotationChanging, {
              writable: true,
              value: this.onRotationChanging.bind(this)
            });
            _classPrivateFieldInitSpec(this, _previousStates, {
              writable: true,
              value: {
                isEditing: false,
                isEmpty: true,
                hasSomethingToUndo: false,
                hasSomethingToRedo: false,
                hasSelectedEditor: false
              }
            });
            _classPrivateFieldInitSpec(this, _container, {
              writable: true,
              value: null
            });
            _classPrivateFieldSet(this, _container, container);
            _classPrivateFieldSet(this, _eventBus, eventBus);
            _classPrivateFieldGet(this, _eventBus)._on("editingaction", _classPrivateFieldGet(this, _boundOnEditingAction));
            _classPrivateFieldGet(this, _eventBus)._on("pagechanging", _classPrivateFieldGet(this, _boundOnPageChanging));
            _classPrivateFieldGet(this, _eventBus)._on("scalechanging", _classPrivateFieldGet(this, _boundOnScaleChanging));
            _classPrivateFieldGet(this, _eventBus)._on("rotationchanging", _classPrivateFieldGet(this, _boundOnRotationChanging));
            _classPrivateFieldSet(this, _annotationStorage, annotationStorage);
            this.viewParameters = {
              realScale: _display_utils.PixelsPerInch.PDF_TO_CSS_UNITS,
              rotation: 0
            };
          }
          destroy() {
            _classPrivateMethodGet(this, _removeKeyboardManager, _removeKeyboardManager2).call(this);
            _classPrivateFieldGet(this, _eventBus)._off("editingaction", _classPrivateFieldGet(this, _boundOnEditingAction));
            _classPrivateFieldGet(this, _eventBus)._off("pagechanging", _classPrivateFieldGet(this, _boundOnPageChanging));
            _classPrivateFieldGet(this, _eventBus)._off("scalechanging", _classPrivateFieldGet(this, _boundOnScaleChanging));
            _classPrivateFieldGet(this, _eventBus)._off("rotationchanging", _classPrivateFieldGet(this, _boundOnRotationChanging));
            for (const layer of _classPrivateFieldGet(this, _allLayers).values()) {
              layer.destroy();
            }
            _classPrivateFieldGet(this, _allLayers).clear();
            _classPrivateFieldGet(this, _allEditors).clear();
            _classPrivateFieldGet(this, _editorsToRescale).clear();
            _classPrivateFieldSet(this, _activeEditor, null);
            _classPrivateFieldGet(this, _selectedEditors).clear();
            _classPrivateFieldGet(this, _commandManager).destroy();
          }
          onPageChanging(_ref16) {
            let {
              pageNumber
            } = _ref16;
            _classPrivateFieldSet(this, _currentPageIndex, pageNumber - 1);
          }
          focusMainContainer() {
            _classPrivateFieldGet(this, _container).focus();
          }
          addShouldRescale(editor) {
            _classPrivateFieldGet(this, _editorsToRescale).add(editor);
          }
          removeShouldRescale(editor) {
            _classPrivateFieldGet(this, _editorsToRescale).delete(editor);
          }
          onScaleChanging(_ref17) {
            let {
              scale
            } = _ref17;
            this.commitOrRemove();
            this.viewParameters.realScale = scale * _display_utils.PixelsPerInch.PDF_TO_CSS_UNITS;
            for (const editor of _classPrivateFieldGet(this, _editorsToRescale)) {
              editor.onScaleChanging();
            }
          }
          onRotationChanging(_ref18) {
            let {
              pagesRotation
            } = _ref18;
            this.commitOrRemove();
            this.viewParameters.rotation = pagesRotation;
          }
          addToAnnotationStorage(editor) {
            if (!editor.isEmpty() && _classPrivateFieldGet(this, _annotationStorage) && !_classPrivateFieldGet(this, _annotationStorage).has(editor.id)) {
              _classPrivateFieldGet(this, _annotationStorage).setValue(editor.id, editor);
            }
          }
          copy(event) {
            event.preventDefault();
            if (_classPrivateFieldGet(this, _activeEditor)) {
              _classPrivateFieldGet(this, _activeEditor).commitOrRemove();
            }
            if (!this.hasSelection) {
              return;
            }
            const editors = [];
            for (const editor of _classPrivateFieldGet(this, _selectedEditors)) {
              if (!editor.isEmpty()) {
                editors.push(editor.serialize());
              }
            }
            if (editors.length === 0) {
              return;
            }
            event.clipboardData.setData("application/pdfjs", JSON.stringify(editors));
          }
          cut(event) {
            this.copy(event);
            this.delete();
          }
          paste(event) {
            event.preventDefault();
            let data = event.clipboardData.getData("application/pdfjs");
            if (!data) {
              return;
            }
            try {
              data = JSON.parse(data);
            } catch (ex) {
              (0, _util.warn)("paste: \"".concat(ex.message, "\"."));
              return;
            }
            if (!Array.isArray(data)) {
              return;
            }
            this.unselectAll();
            const layer = _classPrivateFieldGet(this, _allLayers).get(_classPrivateFieldGet(this, _currentPageIndex));
            try {
              const newEditors = [];
              for (const editor of data) {
                const deserializedEditor = layer.deserialize(editor);
                if (!deserializedEditor) {
                  return;
                }
                newEditors.push(deserializedEditor);
              }
              const cmd = () => {
                for (const editor of newEditors) {
                  _classPrivateMethodGet(this, _addEditorToLayer, _addEditorToLayer2).call(this, editor);
                }
                _classPrivateMethodGet(this, _selectEditors, _selectEditors2).call(this, newEditors);
              };
              const undo = () => {
                for (const editor of newEditors) {
                  editor.remove();
                }
              };
              this.addCommands({
                cmd,
                undo,
                mustExec: true
              });
            } catch (ex) {
              (0, _util.warn)("paste: \"".concat(ex.message, "\"."));
            }
          }
          keydown(event) {
            var _this$getActive;
            if (!((_this$getActive = this.getActive()) !== null && _this$getActive !== void 0 && _this$getActive.shouldGetKeyboardEvents())) {
              AnnotationEditorUIManager._keyboardManager.exec(this, event);
            }
          }
          onEditingAction(details) {
            if (["undo", "redo", "delete", "selectAll"].includes(details.name)) {
              this[details.name]();
            }
          }
          setEditingState(isEditing) {
            if (isEditing) {
              _classPrivateMethodGet(this, _addKeyboardManager, _addKeyboardManager2).call(this);
              _classPrivateMethodGet(this, _addCopyPasteListeners, _addCopyPasteListeners2).call(this);
              _classPrivateMethodGet(this, _dispatchUpdateStates, _dispatchUpdateStates2).call(this, {
                isEditing: _classPrivateFieldGet(this, _mode) !== _util.AnnotationEditorType.NONE,
                isEmpty: _classPrivateMethodGet(this, _isEmpty, _isEmpty2).call(this),
                hasSomethingToUndo: _classPrivateFieldGet(this, _commandManager).hasSomethingToUndo(),
                hasSomethingToRedo: _classPrivateFieldGet(this, _commandManager).hasSomethingToRedo(),
                hasSelectedEditor: false
              });
            } else {
              _classPrivateMethodGet(this, _removeKeyboardManager, _removeKeyboardManager2).call(this);
              _classPrivateMethodGet(this, _removeCopyPasteListeners, _removeCopyPasteListeners2).call(this);
              _classPrivateMethodGet(this, _dispatchUpdateStates, _dispatchUpdateStates2).call(this, {
                isEditing: false
              });
            }
          }
          registerEditorTypes(types) {
            if (_classPrivateFieldGet(this, _editorTypes)) {
              return;
            }
            _classPrivateFieldSet(this, _editorTypes, types);
            for (const editorType of _classPrivateFieldGet(this, _editorTypes)) {
              _classPrivateMethodGet(this, _dispatchUpdateUI, _dispatchUpdateUI2).call(this, editorType.defaultPropertiesToUpdate);
            }
          }
          getId() {
            return _classPrivateFieldGet(this, _idManager).getId();
          }
          get currentLayer() {
            return _classPrivateFieldGet(this, _allLayers).get(_classPrivateFieldGet(this, _currentPageIndex));
          }
          get currentPageIndex() {
            return _classPrivateFieldGet(this, _currentPageIndex);
          }
          addLayer(layer) {
            _classPrivateFieldGet(this, _allLayers).set(layer.pageIndex, layer);
            if (_classPrivateFieldGet(this, _isEnabled)) {
              layer.enable();
            } else {
              layer.disable();
            }
          }
          removeLayer(layer) {
            _classPrivateFieldGet(this, _allLayers).delete(layer.pageIndex);
          }
          updateMode(mode) {
            _classPrivateFieldSet(this, _mode, mode);
            if (mode === _util.AnnotationEditorType.NONE) {
              this.setEditingState(false);
              _classPrivateMethodGet(this, _disableAll, _disableAll2).call(this);
            } else {
              this.setEditingState(true);
              _classPrivateMethodGet(this, _enableAll, _enableAll2).call(this);
              for (const layer of _classPrivateFieldGet(this, _allLayers).values()) {
                layer.updateMode(mode);
              }
            }
          }
          updateToolbar(mode) {
            if (mode === _classPrivateFieldGet(this, _mode)) {
              return;
            }
            _classPrivateFieldGet(this, _eventBus).dispatch("switchannotationeditormode", {
              source: this,
              mode
            });
          }
          updateParams(type, value) {
            if (!_classPrivateFieldGet(this, _editorTypes)) {
              return;
            }
            for (const editor of _classPrivateFieldGet(this, _selectedEditors)) {
              editor.updateParams(type, value);
            }
            for (const editorType of _classPrivateFieldGet(this, _editorTypes)) {
              editorType.updateDefaultParams(type, value);
            }
          }
          getEditors(pageIndex) {
            const editors = [];
            for (const editor of _classPrivateFieldGet(this, _allEditors).values()) {
              if (editor.pageIndex === pageIndex) {
                editors.push(editor);
              }
            }
            return editors;
          }
          getEditor(id) {
            return _classPrivateFieldGet(this, _allEditors).get(id);
          }
          addEditor(editor) {
            _classPrivateFieldGet(this, _allEditors).set(editor.id, editor);
          }
          removeEditor(editor) {
            var _classPrivateFieldGet2;
            _classPrivateFieldGet(this, _allEditors).delete(editor.id);
            this.unselect(editor);
            (_classPrivateFieldGet2 = _classPrivateFieldGet(this, _annotationStorage)) === null || _classPrivateFieldGet2 === void 0 || _classPrivateFieldGet2.remove(editor.id);
          }
          setActiveEditor(editor) {
            if (_classPrivateFieldGet(this, _activeEditor) === editor) {
              return;
            }
            _classPrivateFieldSet(this, _activeEditor, editor);
            if (editor) {
              _classPrivateMethodGet(this, _dispatchUpdateUI, _dispatchUpdateUI2).call(this, editor.propertiesToUpdate);
            }
          }
          toggleSelected(editor) {
            if (_classPrivateFieldGet(this, _selectedEditors).has(editor)) {
              _classPrivateFieldGet(this, _selectedEditors).delete(editor);
              editor.unselect();
              _classPrivateMethodGet(this, _dispatchUpdateStates, _dispatchUpdateStates2).call(this, {
                hasSelectedEditor: this.hasSelection
              });
              return;
            }
            _classPrivateFieldGet(this, _selectedEditors).add(editor);
            editor.select();
            _classPrivateMethodGet(this, _dispatchUpdateUI, _dispatchUpdateUI2).call(this, editor.propertiesToUpdate);
            _classPrivateMethodGet(this, _dispatchUpdateStates, _dispatchUpdateStates2).call(this, {
              hasSelectedEditor: true
            });
          }
          setSelected(editor) {
            for (const ed of _classPrivateFieldGet(this, _selectedEditors)) {
              if (ed !== editor) {
                ed.unselect();
              }
            }
            _classPrivateFieldGet(this, _selectedEditors).clear();
            _classPrivateFieldGet(this, _selectedEditors).add(editor);
            editor.select();
            _classPrivateMethodGet(this, _dispatchUpdateUI, _dispatchUpdateUI2).call(this, editor.propertiesToUpdate);
            _classPrivateMethodGet(this, _dispatchUpdateStates, _dispatchUpdateStates2).call(this, {
              hasSelectedEditor: true
            });
          }
          isSelected(editor) {
            return _classPrivateFieldGet(this, _selectedEditors).has(editor);
          }
          unselect(editor) {
            editor.unselect();
            _classPrivateFieldGet(this, _selectedEditors).delete(editor);
            _classPrivateMethodGet(this, _dispatchUpdateStates, _dispatchUpdateStates2).call(this, {
              hasSelectedEditor: this.hasSelection
            });
          }
          get hasSelection() {
            return _classPrivateFieldGet(this, _selectedEditors).size !== 0;
          }
          undo() {
            _classPrivateFieldGet(this, _commandManager).undo();
            _classPrivateMethodGet(this, _dispatchUpdateStates, _dispatchUpdateStates2).call(this, {
              hasSomethingToUndo: _classPrivateFieldGet(this, _commandManager).hasSomethingToUndo(),
              hasSomethingToRedo: true,
              isEmpty: _classPrivateMethodGet(this, _isEmpty, _isEmpty2).call(this)
            });
          }
          redo() {
            _classPrivateFieldGet(this, _commandManager).redo();
            _classPrivateMethodGet(this, _dispatchUpdateStates, _dispatchUpdateStates2).call(this, {
              hasSomethingToUndo: true,
              hasSomethingToRedo: _classPrivateFieldGet(this, _commandManager).hasSomethingToRedo(),
              isEmpty: _classPrivateMethodGet(this, _isEmpty, _isEmpty2).call(this)
            });
          }
          addCommands(params) {
            _classPrivateFieldGet(this, _commandManager).add(params);
            _classPrivateMethodGet(this, _dispatchUpdateStates, _dispatchUpdateStates2).call(this, {
              hasSomethingToUndo: true,
              hasSomethingToRedo: false,
              isEmpty: _classPrivateMethodGet(this, _isEmpty, _isEmpty2).call(this)
            });
          }
          delete() {
            this.commitOrRemove();
            if (!this.hasSelection) {
              return;
            }
            const editors = [..._classPrivateFieldGet(this, _selectedEditors)];
            const cmd = () => {
              for (const editor of editors) {
                editor.remove();
              }
            };
            const undo = () => {
              for (const editor of editors) {
                _classPrivateMethodGet(this, _addEditorToLayer, _addEditorToLayer2).call(this, editor);
              }
            };
            this.addCommands({
              cmd,
              undo,
              mustExec: true
            });
          }
          commitOrRemove() {
            var _classPrivateFieldGet3;
            (_classPrivateFieldGet3 = _classPrivateFieldGet(this, _activeEditor)) === null || _classPrivateFieldGet3 === void 0 || _classPrivateFieldGet3.commitOrRemove();
          }
          selectAll() {
            for (const editor of _classPrivateFieldGet(this, _selectedEditors)) {
              editor.commit();
            }
            _classPrivateMethodGet(this, _selectEditors, _selectEditors2).call(this, _classPrivateFieldGet(this, _allEditors).values());
          }
          unselectAll() {
            if (_classPrivateFieldGet(this, _activeEditor)) {
              _classPrivateFieldGet(this, _activeEditor).commitOrRemove();
              return;
            }
            if (_classPrivateFieldGet(this, _selectedEditors).size === 0) {
              return;
            }
            for (const editor of _classPrivateFieldGet(this, _selectedEditors)) {
              editor.unselect();
            }
            _classPrivateFieldGet(this, _selectedEditors).clear();
            _classPrivateMethodGet(this, _dispatchUpdateStates, _dispatchUpdateStates2).call(this, {
              hasSelectedEditor: false
            });
          }
          isActive(editor) {
            return _classPrivateFieldGet(this, _activeEditor) === editor;
          }
          getActive() {
            return _classPrivateFieldGet(this, _activeEditor);
          }
          getMode() {
            return _classPrivateFieldGet(this, _mode);
          }
        }
        _class17 = AnnotationEditorUIManager;
        function _addKeyboardManager2() {
          _classPrivateFieldGet(this, _container).addEventListener("keydown", _classPrivateFieldGet(this, _boundKeydown));
        }
        function _removeKeyboardManager2() {
          _classPrivateFieldGet(this, _container).removeEventListener("keydown", _classPrivateFieldGet(this, _boundKeydown));
        }
        function _addCopyPasteListeners2() {
          document.addEventListener("copy", _classPrivateFieldGet(this, _boundCopy));
          document.addEventListener("cut", _classPrivateFieldGet(this, _boundCut));
          document.addEventListener("paste", _classPrivateFieldGet(this, _boundPaste));
        }
        function _removeCopyPasteListeners2() {
          document.removeEventListener("copy", _classPrivateFieldGet(this, _boundCopy));
          document.removeEventListener("cut", _classPrivateFieldGet(this, _boundCut));
          document.removeEventListener("paste", _classPrivateFieldGet(this, _boundPaste));
        }
        function _dispatchUpdateStates2(details) {
          const hasChanged = Object.entries(details).some(_ref19 => {
            let [key, value] = _ref19;
            return _classPrivateFieldGet(this, _previousStates)[key] !== value;
          });
          if (hasChanged) {
            _classPrivateFieldGet(this, _eventBus).dispatch("annotationeditorstateschanged", {
              source: this,
              details: Object.assign(_classPrivateFieldGet(this, _previousStates), details)
            });
          }
        }
        function _dispatchUpdateUI2(details) {
          _classPrivateFieldGet(this, _eventBus).dispatch("annotationeditorparamschanged", {
            source: this,
            details
          });
        }
        function _enableAll2() {
          if (!_classPrivateFieldGet(this, _isEnabled)) {
            _classPrivateFieldSet(this, _isEnabled, true);
            for (const layer of _classPrivateFieldGet(this, _allLayers).values()) {
              layer.enable();
            }
          }
        }
        function _disableAll2() {
          this.unselectAll();
          if (_classPrivateFieldGet(this, _isEnabled)) {
            _classPrivateFieldSet(this, _isEnabled, false);
            for (const layer of _classPrivateFieldGet(this, _allLayers).values()) {
              layer.disable();
            }
          }
        }
        function _addEditorToLayer2(editor) {
          const layer = _classPrivateFieldGet(this, _allLayers).get(editor.pageIndex);
          if (layer) {
            layer.addOrRebuild(editor);
          } else {
            this.addEditor(editor);
          }
        }
        function _isEmpty2() {
          if (_classPrivateFieldGet(this, _allEditors).size === 0) {
            return true;
          }
          if (_classPrivateFieldGet(this, _allEditors).size === 1) {
            for (const editor of _classPrivateFieldGet(this, _allEditors).values()) {
              return editor.isEmpty();
            }
          }
          return false;
        }
        function _selectEditors2(editors) {
          _classPrivateFieldGet(this, _selectedEditors).clear();
          for (const editor of editors) {
            if (editor.isEmpty()) {
              continue;
            }
            _classPrivateFieldGet(this, _selectedEditors).add(editor);
            editor.select();
          }
          _classPrivateMethodGet(this, _dispatchUpdateStates, _dispatchUpdateStates2).call(this, {
            hasSelectedEditor: true
          });
        }
        _defineProperty(AnnotationEditorUIManager, "_keyboardManager", new KeyboardManager([[["ctrl+a", "mac+meta+a"], _class17.prototype.selectAll], [["ctrl+z", "mac+meta+z"], _class17.prototype.undo], [["ctrl+y", "ctrl+shift+Z", "mac+meta+shift+Z"], _class17.prototype.redo], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete"], _class17.prototype.delete], [["Escape", "mac+Escape"], _class17.prototype.unselectAll]]));
        exports.AnnotationEditorUIManager = AnnotationEditorUIManager;

        /***/
      }, /* 6 */
      /***/(__unused_webpack_module, exports, __w_pdfjs_require__) => {
        var _class18;
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.StatTimer = exports.RenderingCancelledException = exports.PixelsPerInch = exports.PageViewport = exports.PDFDateString = exports.DOMStandardFontDataFactory = exports.DOMSVGFactory = exports.DOMFilterFactory = exports.DOMCanvasFactory = exports.DOMCMapReaderFactory = exports.AnnotationPrefix = void 0;
        exports.deprecated = deprecated;
        exports.getColorValues = getColorValues;
        exports.getCurrentTransform = getCurrentTransform;
        exports.getCurrentTransformInverse = getCurrentTransformInverse;
        exports.getFilenameFromUrl = getFilenameFromUrl;
        exports.getPdfFilenameFromUrl = getPdfFilenameFromUrl;
        exports.getRGB = getRGB;
        exports.getXfaPageViewport = getXfaPageViewport;
        exports.isDataScheme = isDataScheme;
        exports.isPdfFile = isPdfFile;
        exports.isValidFetchUrl = isValidFetchUrl;
        exports.loadScript = loadScript;
        exports.setLayerDimensions = setLayerDimensions;
        var _base_factory = __w_pdfjs_require__(7);
        var _util = __w_pdfjs_require__(1);
        const SVG_NS = "http://www.w3.org/2000/svg";
        const AnnotationPrefix = "pdfjs_internal_id_";
        exports.AnnotationPrefix = AnnotationPrefix;
        class PixelsPerInch {}
        _class18 = PixelsPerInch;
        _defineProperty(PixelsPerInch, "CSS", 96.0);
        _defineProperty(PixelsPerInch, "PDF", 72.0);
        _defineProperty(PixelsPerInch, "PDF_TO_CSS_UNITS", _class18.CSS / _class18.PDF);
        exports.PixelsPerInch = PixelsPerInch;
        var _cache = /*#__PURE__*/new WeakMap();
        var _defs = /*#__PURE__*/new WeakMap();
        var _docId2 = /*#__PURE__*/new WeakMap();
        var _document2 = /*#__PURE__*/new WeakMap();
        var _hcmFilter = /*#__PURE__*/new WeakMap();
        var _hcmKey = /*#__PURE__*/new WeakMap();
        var _hcmUrl = /*#__PURE__*/new WeakMap();
        var _id2 = /*#__PURE__*/new WeakMap();
        var _cache2 = /*#__PURE__*/new WeakMap();
        var _defs2 = /*#__PURE__*/new WeakMap();
        var _appendFeFunc = /*#__PURE__*/new WeakSet();
        class DOMFilterFactory extends _base_factory.BaseFilterFactory {
          constructor() {
            let {
              docId,
              ownerDocument = globalThis.document
            } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            super();
            _classPrivateMethodInitSpec(this, _appendFeFunc);
            _classPrivateFieldInitSpec(this, _defs2, {
              get: _get_defs,
              set: void 0
            });
            _classPrivateFieldInitSpec(this, _cache2, {
              get: _get_cache,
              set: void 0
            });
            _classPrivateFieldInitSpec(this, _cache, {
              writable: true,
              value: void 0
            });
            _classPrivateFieldInitSpec(this, _defs, {
              writable: true,
              value: void 0
            });
            _classPrivateFieldInitSpec(this, _docId2, {
              writable: true,
              value: void 0
            });
            _classPrivateFieldInitSpec(this, _document2, {
              writable: true,
              value: void 0
            });
            _classPrivateFieldInitSpec(this, _hcmFilter, {
              writable: true,
              value: void 0
            });
            _classPrivateFieldInitSpec(this, _hcmKey, {
              writable: true,
              value: void 0
            });
            _classPrivateFieldInitSpec(this, _hcmUrl, {
              writable: true,
              value: void 0
            });
            _classPrivateFieldInitSpec(this, _id2, {
              writable: true,
              value: 0
            });
            _classPrivateFieldSet(this, _docId2, docId);
            _classPrivateFieldSet(this, _document2, ownerDocument);
          }
          addFilter(maps) {
            var _this$id3, _this$id4;
            if (!maps) {
              return "none";
            }
            let value = _classPrivateFieldGet(this, _cache2).get(maps);
            if (value) {
              return value;
            }
            let tableR, tableG, tableB, key;
            if (maps.length === 1) {
              const mapR = maps[0];
              const buffer = new Array(256);
              for (let i = 0; i < 256; i++) {
                buffer[i] = mapR[i] / 255;
              }
              key = tableR = tableG = tableB = buffer.join(",");
            } else {
              const [mapR, mapG, mapB] = maps;
              const bufferR = new Array(256);
              const bufferG = new Array(256);
              const bufferB = new Array(256);
              for (let i = 0; i < 256; i++) {
                bufferR[i] = mapR[i] / 255;
                bufferG[i] = mapG[i] / 255;
                bufferB[i] = mapB[i] / 255;
              }
              tableR = bufferR.join(",");
              tableG = bufferG.join(",");
              tableB = bufferB.join(",");
              key = "".concat(tableR).concat(tableG).concat(tableB);
            }
            value = _classPrivateFieldGet(this, _cache2).get(key);
            if (value) {
              _classPrivateFieldGet(this, _cache2).set(maps, value);
              return value;
            }
            const id = "g_".concat(_classPrivateFieldGet(this, _docId2), "_transfer_map_").concat((_classPrivateFieldSet(this, _id2, (_this$id3 = _classPrivateFieldGet(this, _id2), _this$id4 = _this$id3++, _this$id3)), _this$id4));
            const url = "url(#".concat(id, ")");
            _classPrivateFieldGet(this, _cache2).set(maps, url);
            _classPrivateFieldGet(this, _cache2).set(key, url);
            const filter = _classPrivateFieldGet(this, _document2).createElementNS(SVG_NS, "filter", SVG_NS);
            filter.setAttribute("id", id);
            filter.setAttribute("color-interpolation-filters", "sRGB");
            const feComponentTransfer = _classPrivateFieldGet(this, _document2).createElementNS(SVG_NS, "feComponentTransfer");
            filter.append(feComponentTransfer);
            _classPrivateMethodGet(this, _appendFeFunc, _appendFeFunc2).call(this, feComponentTransfer, "feFuncR", tableR);
            _classPrivateMethodGet(this, _appendFeFunc, _appendFeFunc2).call(this, feComponentTransfer, "feFuncG", tableG);
            _classPrivateMethodGet(this, _appendFeFunc, _appendFeFunc2).call(this, feComponentTransfer, "feFuncB", tableB);
            _classPrivateFieldGet(this, _defs2).append(filter);
            return url;
          }
          addHCMFilter(fgColor, bgColor) {
            var _classPrivateFieldGet4;
            const key = "".concat(fgColor, "-").concat(bgColor);
            if (_classPrivateFieldGet(this, _hcmKey) === key) {
              return _classPrivateFieldGet(this, _hcmUrl);
            }
            _classPrivateFieldSet(this, _hcmKey, key);
            _classPrivateFieldSet(this, _hcmUrl, "none");
            (_classPrivateFieldGet4 = _classPrivateFieldGet(this, _hcmFilter)) === null || _classPrivateFieldGet4 === void 0 || _classPrivateFieldGet4.remove();
            if (!fgColor || !bgColor) {
              return _classPrivateFieldGet(this, _hcmUrl);
            }
            _classPrivateFieldGet(this, _defs2).style.color = fgColor;
            fgColor = getComputedStyle(_classPrivateFieldGet(this, _defs2)).getPropertyValue("color");
            const fgRGB = getRGB(fgColor);
            fgColor = _util.Util.makeHexColor(...fgRGB);
            _classPrivateFieldGet(this, _defs2).style.color = bgColor;
            bgColor = getComputedStyle(_classPrivateFieldGet(this, _defs2)).getPropertyValue("color");
            const bgRGB = getRGB(bgColor);
            bgColor = _util.Util.makeHexColor(...bgRGB);
            _classPrivateFieldGet(this, _defs2).style.color = "";
            if (fgColor === "#000000" && bgColor === "#ffffff" || fgColor === bgColor) {
              return _classPrivateFieldGet(this, _hcmUrl);
            }
            const map = new Array(256);
            for (let i = 0; i <= 255; i++) {
              const x = i / 255;
              map[i] = x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4;
            }
            const table = map.join(",");
            const id = "g_".concat(_classPrivateFieldGet(this, _docId2), "_hcm_filter");
            const filter = _classPrivateFieldSet(this, _hcmFilter, _classPrivateFieldGet(this, _document2).createElementNS(SVG_NS, "filter", SVG_NS));
            filter.setAttribute("id", id);
            filter.setAttribute("color-interpolation-filters", "sRGB");
            let feComponentTransfer = _classPrivateFieldGet(this, _document2).createElementNS(SVG_NS, "feComponentTransfer");
            filter.append(feComponentTransfer);
            _classPrivateMethodGet(this, _appendFeFunc, _appendFeFunc2).call(this, feComponentTransfer, "feFuncR", table);
            _classPrivateMethodGet(this, _appendFeFunc, _appendFeFunc2).call(this, feComponentTransfer, "feFuncG", table);
            _classPrivateMethodGet(this, _appendFeFunc, _appendFeFunc2).call(this, feComponentTransfer, "feFuncB", table);
            const feColorMatrix = _classPrivateFieldGet(this, _document2).createElementNS(SVG_NS, "feColorMatrix");
            feColorMatrix.setAttribute("type", "matrix");
            feColorMatrix.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0");
            filter.append(feColorMatrix);
            feComponentTransfer = _classPrivateFieldGet(this, _document2).createElementNS(SVG_NS, "feComponentTransfer");
            filter.append(feComponentTransfer);
            const getSteps = (c, n) => {
              const start = fgRGB[c] / 255;
              const end = bgRGB[c] / 255;
              const arr = new Array(n + 1);
              for (let i = 0; i <= n; i++) {
                arr[i] = start + i / n * (end - start);
              }
              return arr.join(",");
            };
            _classPrivateMethodGet(this, _appendFeFunc, _appendFeFunc2).call(this, feComponentTransfer, "feFuncR", getSteps(0, 5));
            _classPrivateMethodGet(this, _appendFeFunc, _appendFeFunc2).call(this, feComponentTransfer, "feFuncG", getSteps(1, 5));
            _classPrivateMethodGet(this, _appendFeFunc, _appendFeFunc2).call(this, feComponentTransfer, "feFuncB", getSteps(2, 5));
            _classPrivateFieldGet(this, _defs2).append(filter);
            _classPrivateFieldSet(this, _hcmUrl, "url(#".concat(id, ")"));
            return _classPrivateFieldGet(this, _hcmUrl);
          }
          destroy() {
            let keepHCM = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            if (keepHCM && _classPrivateFieldGet(this, _hcmUrl)) {
              return;
            }
            if (_classPrivateFieldGet(this, _defs)) {
              _classPrivateFieldGet(this, _defs).parentNode.parentNode.remove();
              _classPrivateFieldSet(this, _defs, null);
            }
            if (_classPrivateFieldGet(this, _cache)) {
              _classPrivateFieldGet(this, _cache).clear();
              _classPrivateFieldSet(this, _cache, null);
            }
            _classPrivateFieldSet(this, _id2, 0);
          }
        }
        function _get_cache() {
          return _classPrivateFieldGet(this, _cache) || _classPrivateFieldSet(this, _cache, new Map());
        }
        function _get_defs() {
          if (!_classPrivateFieldGet(this, _defs)) {
            const div = _classPrivateFieldGet(this, _document2).createElement("div");
            const {
              style
            } = div;
            style.visibility = "hidden";
            style.contain = "strict";
            style.width = style.height = 0;
            style.position = "absolute";
            style.top = style.left = 0;
            style.zIndex = -1;
            const svg = _classPrivateFieldGet(this, _document2).createElementNS(SVG_NS, "svg");
            svg.setAttribute("width", 0);
            svg.setAttribute("height", 0);
            _classPrivateFieldSet(this, _defs, _classPrivateFieldGet(this, _document2).createElementNS(SVG_NS, "defs"));
            div.append(svg);
            svg.append(_classPrivateFieldGet(this, _defs));
            _classPrivateFieldGet(this, _document2).body.append(div);
          }
          return _classPrivateFieldGet(this, _defs);
        }
        function _appendFeFunc2(feComponentTransfer, func, table) {
          const feFunc = _classPrivateFieldGet(this, _document2).createElementNS(SVG_NS, func);
          feFunc.setAttribute("type", "discrete");
          feFunc.setAttribute("tableValues", table);
          feComponentTransfer.append(feFunc);
        }
        exports.DOMFilterFactory = DOMFilterFactory;
        class DOMCanvasFactory extends _base_factory.BaseCanvasFactory {
          constructor() {
            let {
              ownerDocument = globalThis.document
            } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            super();
            this._document = ownerDocument;
          }
          _createCanvas(width, height) {
            const canvas = this._document.createElement("canvas");
            canvas.width = width;
            canvas.height = height;
            return canvas;
          }
        }
        exports.DOMCanvasFactory = DOMCanvasFactory;
        async function fetchData(url) {
          let asTypedArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          if (isValidFetchUrl(url, document.baseURI)) {
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return asTypedArray ? new Uint8Array(await response.arrayBuffer()) : (0, _util.stringToBytes)(await response.text());
          }
          return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();
            request.open("GET", url, true);
            if (asTypedArray) {
              request.responseType = "arraybuffer";
            }
            request.onreadystatechange = () => {
              if (request.readyState !== XMLHttpRequest.DONE) {
                return;
              }
              if (request.status === 200 || request.status === 0) {
                let data;
                if (asTypedArray && request.response) {
                  data = new Uint8Array(request.response);
                } else if (!asTypedArray && request.responseText) {
                  data = (0, _util.stringToBytes)(request.responseText);
                }
                if (data) {
                  resolve(data);
                  return;
                }
              }
              reject(new Error(request.statusText));
            };
            request.send(null);
          });
        }
        class DOMCMapReaderFactory extends _base_factory.BaseCMapReaderFactory {
          _fetchData(url, compressionType) {
            return fetchData(url, this.isCompressed).then(data => {
              return {
                cMapData: data,
                compressionType
              };
            });
          }
        }
        exports.DOMCMapReaderFactory = DOMCMapReaderFactory;
        class DOMStandardFontDataFactory extends _base_factory.BaseStandardFontDataFactory {
          _fetchData(url) {
            return fetchData(url, true);
          }
        }
        exports.DOMStandardFontDataFactory = DOMStandardFontDataFactory;
        class DOMSVGFactory extends _base_factory.BaseSVGFactory {
          _createSVG(type) {
            return document.createElementNS(SVG_NS, type);
          }
        }
        exports.DOMSVGFactory = DOMSVGFactory;
        class PageViewport {
          constructor(_ref20) {
            let {
              viewBox,
              scale,
              rotation,
              offsetX = 0,
              offsetY = 0,
              dontFlip = false
            } = _ref20;
            this.viewBox = viewBox;
            this.scale = scale;
            this.rotation = rotation;
            this.offsetX = offsetX;
            this.offsetY = offsetY;
            const centerX = (viewBox[2] + viewBox[0]) / 2;
            const centerY = (viewBox[3] + viewBox[1]) / 2;
            let rotateA, rotateB, rotateC, rotateD;
            rotation %= 360;
            if (rotation < 0) {
              rotation += 360;
            }
            switch (rotation) {
              case 180:
                rotateA = -1;
                rotateB = 0;
                rotateC = 0;
                rotateD = 1;
                break;
              case 90:
                rotateA = 0;
                rotateB = 1;
                rotateC = 1;
                rotateD = 0;
                break;
              case 270:
                rotateA = 0;
                rotateB = -1;
                rotateC = -1;
                rotateD = 0;
                break;
              case 0:
                rotateA = 1;
                rotateB = 0;
                rotateC = 0;
                rotateD = -1;
                break;
              default:
                throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
            }
            if (dontFlip) {
              rotateC = -rotateC;
              rotateD = -rotateD;
            }
            let offsetCanvasX, offsetCanvasY;
            let width, height;
            if (rotateA === 0) {
              offsetCanvasX = Math.abs(centerY - viewBox[1]) * scale + offsetX;
              offsetCanvasY = Math.abs(centerX - viewBox[0]) * scale + offsetY;
              width = (viewBox[3] - viewBox[1]) * scale;
              height = (viewBox[2] - viewBox[0]) * scale;
            } else {
              offsetCanvasX = Math.abs(centerX - viewBox[0]) * scale + offsetX;
              offsetCanvasY = Math.abs(centerY - viewBox[1]) * scale + offsetY;
              width = (viewBox[2] - viewBox[0]) * scale;
              height = (viewBox[3] - viewBox[1]) * scale;
            }
            this.transform = [rotateA * scale, rotateB * scale, rotateC * scale, rotateD * scale, offsetCanvasX - rotateA * scale * centerX - rotateC * scale * centerY, offsetCanvasY - rotateB * scale * centerX - rotateD * scale * centerY];
            this.width = width;
            this.height = height;
          }
          get rawDims() {
            const {
              viewBox
            } = this;
            return (0, _util.shadow)(this, "rawDims", {
              pageWidth: viewBox[2] - viewBox[0],
              pageHeight: viewBox[3] - viewBox[1],
              pageX: viewBox[0],
              pageY: viewBox[1]
            });
          }
          clone() {
            let {
              scale = this.scale,
              rotation = this.rotation,
              offsetX = this.offsetX,
              offsetY = this.offsetY,
              dontFlip = false
            } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return new PageViewport({
              viewBox: this.viewBox.slice(),
              scale,
              rotation,
              offsetX,
              offsetY,
              dontFlip
            });
          }
          convertToViewportPoint(x, y) {
            return _util.Util.applyTransform([x, y], this.transform);
          }
          convertToViewportRectangle(rect) {
            const topLeft = _util.Util.applyTransform([rect[0], rect[1]], this.transform);
            const bottomRight = _util.Util.applyTransform([rect[2], rect[3]], this.transform);
            return [topLeft[0], topLeft[1], bottomRight[0], bottomRight[1]];
          }
          convertToPdfPoint(x, y) {
            return _util.Util.applyInverseTransform([x, y], this.transform);
          }
        }
        exports.PageViewport = PageViewport;
        class RenderingCancelledException extends _util.BaseException {
          constructor(msg, type) {
            let extraDelay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            super(msg, "RenderingCancelledException");
            this.type = type;
            this.extraDelay = extraDelay;
          }
        }
        exports.RenderingCancelledException = RenderingCancelledException;
        function isDataScheme(url) {
          const ii = url.length;
          let i = 0;
          while (i < ii && url[i].trim() === "") {
            i++;
          }
          return url.substring(i, i + 5).toLowerCase() === "data:";
        }
        function isPdfFile(filename) {
          return typeof filename === "string" && /\.pdf$/i.test(filename);
        }
        function getFilenameFromUrl(url) {
          let onlyStripPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          if (!onlyStripPath) {
            [url] = url.split(/[#?]/, 1);
          }
          return url.substring(url.lastIndexOf("/") + 1);
        }
        function getPdfFilenameFromUrl(url) {
          let defaultFilename = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "document.pdf";
          if (typeof url !== "string") {
            return defaultFilename;
          }
          if (isDataScheme(url)) {
            (0, _util.warn)('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.');
            return defaultFilename;
          }
          const reURI = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/;
          const reFilename = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i;
          const splitURI = reURI.exec(url);
          let suggestedFilename = reFilename.exec(splitURI[1]) || reFilename.exec(splitURI[2]) || reFilename.exec(splitURI[3]);
          if (suggestedFilename) {
            suggestedFilename = suggestedFilename[0];
            if (suggestedFilename.includes("%")) {
              try {
                suggestedFilename = reFilename.exec(decodeURIComponent(suggestedFilename))[0];
              } catch (ex) {}
            }
          }
          return suggestedFilename || defaultFilename;
        }
        class StatTimer {
          constructor() {
            _defineProperty(this, "started", Object.create(null));
            _defineProperty(this, "times", []);
          }
          time(name) {
            if (name in this.started) {
              (0, _util.warn)("Timer is already running for ".concat(name));
            }
            this.started[name] = Date.now();
          }
          timeEnd(name) {
            if (!(name in this.started)) {
              (0, _util.warn)("Timer has not been started for ".concat(name));
            }
            this.times.push({
              name,
              start: this.started[name],
              end: Date.now()
            });
            delete this.started[name];
          }
          toString() {
            const outBuf = [];
            let longest = 0;
            for (const {
              name
            } of this.times) {
              longest = Math.max(name.length, longest);
            }
            for (const {
              name,
              start,
              end
            } of this.times) {
              outBuf.push("".concat(name.padEnd(longest), " ").concat(end - start, "ms\n"));
            }
            return outBuf.join("");
          }
        }
        exports.StatTimer = StatTimer;
        function isValidFetchUrl(url, baseUrl) {
          try {
            const {
              protocol
            } = baseUrl ? new URL(url, baseUrl) : new URL(url);
            return protocol === "http:" || protocol === "https:";
          } catch (ex) {
            return false;
          }
        }
        function loadScript(src) {
          let removeScriptElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          return new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = function (evt) {
              if (removeScriptElement) {
                script.remove();
              }
              resolve(evt);
            };
            script.onerror = function () {
              reject(new Error("Cannot load script at: ".concat(script.src)));
            };
            (document.head || document.documentElement).append(script);
          });
        }
        function deprecated(details) {
          console.log("Deprecated API usage: " + details);
        }
        let pdfDateStringRegex;
        class PDFDateString {
          static toDateObject(input) {
            if (!input || typeof input !== "string") {
              return null;
            }
            if (!pdfDateStringRegex) {
              pdfDateStringRegex = new RegExp("^D:" + "(\\d{4})" + "(\\d{2})?" + "(\\d{2})?" + "(\\d{2})?" + "(\\d{2})?" + "(\\d{2})?" + "([Z|+|-])?" + "(\\d{2})?" + "'?" + "(\\d{2})?" + "'?");
            }
            const matches = pdfDateStringRegex.exec(input);
            if (!matches) {
              return null;
            }
            const year = parseInt(matches[1], 10);
            let month = parseInt(matches[2], 10);
            month = month >= 1 && month <= 12 ? month - 1 : 0;
            let day = parseInt(matches[3], 10);
            day = day >= 1 && day <= 31 ? day : 1;
            let hour = parseInt(matches[4], 10);
            hour = hour >= 0 && hour <= 23 ? hour : 0;
            let minute = parseInt(matches[5], 10);
            minute = minute >= 0 && minute <= 59 ? minute : 0;
            let second = parseInt(matches[6], 10);
            second = second >= 0 && second <= 59 ? second : 0;
            const universalTimeRelation = matches[7] || "Z";
            let offsetHour = parseInt(matches[8], 10);
            offsetHour = offsetHour >= 0 && offsetHour <= 23 ? offsetHour : 0;
            let offsetMinute = parseInt(matches[9], 10) || 0;
            offsetMinute = offsetMinute >= 0 && offsetMinute <= 59 ? offsetMinute : 0;
            if (universalTimeRelation === "-") {
              hour += offsetHour;
              minute += offsetMinute;
            } else if (universalTimeRelation === "+") {
              hour -= offsetHour;
              minute -= offsetMinute;
            }
            return new Date(Date.UTC(year, month, day, hour, minute, second));
          }
        }
        exports.PDFDateString = PDFDateString;
        function getXfaPageViewport(xfaPage, _ref21) {
          let {
            scale = 1,
            rotation = 0
          } = _ref21;
          const {
            width,
            height
          } = xfaPage.attributes.style;
          const viewBox = [0, 0, parseInt(width), parseInt(height)];
          return new PageViewport({
            viewBox,
            scale,
            rotation
          });
        }
        function getRGB(color) {
          if (color.startsWith("#")) {
            const colorRGB = parseInt(color.slice(1), 16);
            return [(colorRGB & 0xff0000) >> 16, (colorRGB & 0x00ff00) >> 8, colorRGB & 0x0000ff];
          }
          if (color.startsWith("rgb(")) {
            return color.slice(4, -1).split(",").map(x => parseInt(x));
          }
          if (color.startsWith("rgba(")) {
            return color.slice(5, -1).split(",").map(x => parseInt(x)).slice(0, 3);
          }
          (0, _util.warn)("Not a valid color format: \"".concat(color, "\""));
          return [0, 0, 0];
        }
        function getColorValues(colors) {
          const span = document.createElement("span");
          span.style.visibility = "hidden";
          document.body.append(span);
          for (const name of colors.keys()) {
            span.style.color = name;
            const computedColor = window.getComputedStyle(span).color;
            colors.set(name, getRGB(computedColor));
          }
          span.remove();
        }
        function getCurrentTransform(ctx) {
          const {
            a,
            b,
            c,
            d,
            e,
            f
          } = ctx.getTransform();
          return [a, b, c, d, e, f];
        }
        function getCurrentTransformInverse(ctx) {
          const {
            a,
            b,
            c,
            d,
            e,
            f
          } = ctx.getTransform().invertSelf();
          return [a, b, c, d, e, f];
        }
        function setLayerDimensions(div, viewport) {
          let mustFlip = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          let mustRotate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
          if (viewport instanceof PageViewport) {
            const {
              pageWidth,
              pageHeight
            } = viewport.rawDims;
            const {
              style
            } = div;
            const widthStr = "calc(var(--scale-factor) * ".concat(pageWidth, "px)");
            const heightStr = "calc(var(--scale-factor) * ".concat(pageHeight, "px)");
            if (!mustFlip || viewport.rotation % 180 === 0) {
              style.width = widthStr;
              style.height = heightStr;
            } else {
              style.width = heightStr;
              style.height = widthStr;
            }
          }
          if (mustRotate) {
            div.setAttribute("data-main-rotation", viewport.rotation);
          }
        }

        /***/
      }, /* 7 */
      /***/(__unused_webpack_module, exports, __w_pdfjs_require__) => {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.BaseStandardFontDataFactory = exports.BaseSVGFactory = exports.BaseFilterFactory = exports.BaseCanvasFactory = exports.BaseCMapReaderFactory = void 0;
        var _util = __w_pdfjs_require__(1);
        class BaseFilterFactory {
          constructor() {
            if (this.constructor === BaseFilterFactory) {
              (0, _util.unreachable)("Cannot initialize BaseFilterFactory.");
            }
          }
          addFilter(maps) {
            return "none";
          }
          addHCMFilter(fgColor, bgColor) {
            return "none";
          }
          destroy() {
            let keepHCM = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          }
        }
        exports.BaseFilterFactory = BaseFilterFactory;
        class BaseCanvasFactory {
          constructor() {
            if (this.constructor === BaseCanvasFactory) {
              (0, _util.unreachable)("Cannot initialize BaseCanvasFactory.");
            }
          }
          create(width, height) {
            if (width <= 0 || height <= 0) {
              throw new Error("Invalid canvas size");
            }
            const canvas = this._createCanvas(width, height);
            return {
              canvas,
              context: canvas.getContext("2d")
            };
          }
          reset(canvasAndContext, width, height) {
            if (!canvasAndContext.canvas) {
              throw new Error("Canvas is not specified");
            }
            if (width <= 0 || height <= 0) {
              throw new Error("Invalid canvas size");
            }
            canvasAndContext.canvas.width = width;
            canvasAndContext.canvas.height = height;
          }
          destroy(canvasAndContext) {
            if (!canvasAndContext.canvas) {
              throw new Error("Canvas is not specified");
            }
            canvasAndContext.canvas.width = 0;
            canvasAndContext.canvas.height = 0;
            canvasAndContext.canvas = null;
            canvasAndContext.context = null;
          }
          _createCanvas(width, height) {
            (0, _util.unreachable)("Abstract method `_createCanvas` called.");
          }
        }
        exports.BaseCanvasFactory = BaseCanvasFactory;
        class BaseCMapReaderFactory {
          constructor(_ref22) {
            let {
              baseUrl = null,
              isCompressed = true
            } = _ref22;
            if (this.constructor === BaseCMapReaderFactory) {
              (0, _util.unreachable)("Cannot initialize BaseCMapReaderFactory.");
            }
            this.baseUrl = baseUrl;
            this.isCompressed = isCompressed;
          }
          async fetch(_ref23) {
            let {
              name
            } = _ref23;
            if (!this.baseUrl) {
              throw new Error('The CMap "baseUrl" parameter must be specified, ensure that ' + 'the "cMapUrl" and "cMapPacked" API parameters are provided.');
            }
            if (!name) {
              throw new Error("CMap name must be specified.");
            }
            const url = this.baseUrl + name + (this.isCompressed ? ".bcmap" : "");
            const compressionType = this.isCompressed ? _util.CMapCompressionType.BINARY : _util.CMapCompressionType.NONE;
            return this._fetchData(url, compressionType).catch(reason => {
              throw new Error("Unable to load ".concat(this.isCompressed ? "binary " : "", "CMap at: ").concat(url));
            });
          }
          _fetchData(url, compressionType) {
            (0, _util.unreachable)("Abstract method `_fetchData` called.");
          }
        }
        exports.BaseCMapReaderFactory = BaseCMapReaderFactory;
        class BaseStandardFontDataFactory {
          constructor(_ref24) {
            let {
              baseUrl = null
            } = _ref24;
            if (this.constructor === BaseStandardFontDataFactory) {
              (0, _util.unreachable)("Cannot initialize BaseStandardFontDataFactory.");
            }
            this.baseUrl = baseUrl;
          }
          async fetch(_ref25) {
            let {
              filename
            } = _ref25;
            if (!this.baseUrl) {
              throw new Error('The standard font "baseUrl" parameter must be specified, ensure that ' + 'the "standardFontDataUrl" API parameter is provided.');
            }
            if (!filename) {
              throw new Error("Font filename must be specified.");
            }
            const url = "".concat(this.baseUrl).concat(filename);
            return this._fetchData(url).catch(reason => {
              throw new Error("Unable to load font data at: ".concat(url));
            });
          }
          _fetchData(url) {
            (0, _util.unreachable)("Abstract method `_fetchData` called.");
          }
        }
        exports.BaseStandardFontDataFactory = BaseStandardFontDataFactory;
        class BaseSVGFactory {
          constructor() {
            if (this.constructor === BaseSVGFactory) {
              (0, _util.unreachable)("Cannot initialize BaseSVGFactory.");
            }
          }
          create(width, height) {
            let skipDimensions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            if (width <= 0 || height <= 0) {
              throw new Error("Invalid SVG dimensions");
            }
            const svg = this._createSVG("svg:svg");
            svg.setAttribute("version", "1.1");
            if (!skipDimensions) {
              svg.setAttribute("width", "".concat(width, "px"));
              svg.setAttribute("height", "".concat(height, "px"));
            }
            svg.setAttribute("preserveAspectRatio", "none");
            svg.setAttribute("viewBox", "0 0 ".concat(width, " ").concat(height));
            return svg;
          }
          createElement(type) {
            if (typeof type !== "string") {
              throw new Error("Invalid SVG element type");
            }
            return this._createSVG(type);
          }
          _createSVG(type) {
            (0, _util.unreachable)("Abstract method `_createSVG` called.");
          }
        }
        exports.BaseSVGFactory = BaseSVGFactory;

        /***/
      }, /* 8 */
      /***/(__unused_webpack_module, exports, __w_pdfjs_require__) => {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.MurmurHash3_64 = void 0;
        var _util = __w_pdfjs_require__(1);
        const SEED = 0xc3d2e1f0;
        const MASK_HIGH = 0xffff0000;
        const MASK_LOW = 0xffff;
        class MurmurHash3_64 {
          constructor(seed) {
            this.h1 = seed ? seed & 0xffffffff : SEED;
            this.h2 = seed ? seed & 0xffffffff : SEED;
          }
          update(input) {
            let data, length;
            if (typeof input === "string") {
              data = new Uint8Array(input.length * 2);
              length = 0;
              for (let i = 0, ii = input.length; i < ii; i++) {
                const code = input.charCodeAt(i);
                if (code <= 0xff) {
                  data[length++] = code;
                } else {
                  data[length++] = code >>> 8;
                  data[length++] = code & 0xff;
                }
              }
            } else if ((0, _util.isArrayBuffer)(input)) {
              data = input.slice();
              length = data.byteLength;
            } else {
              throw new Error("Wrong data format in MurmurHash3_64_update. " + "Input must be a string or array.");
            }
            const blockCounts = length >> 2;
            const tailLength = length - blockCounts * 4;
            const dataUint32 = new Uint32Array(data.buffer, 0, blockCounts);
            let k1 = 0,
              k2 = 0;
            let h1 = this.h1,
              h2 = this.h2;
            const C1 = 0xcc9e2d51,
              C2 = 0x1b873593;
            const C1_LOW = C1 & MASK_LOW,
              C2_LOW = C2 & MASK_LOW;
            for (let i = 0; i < blockCounts; i++) {
              if (i & 1) {
                k1 = dataUint32[i];
                k1 = k1 * C1 & MASK_HIGH | k1 * C1_LOW & MASK_LOW;
                k1 = k1 << 15 | k1 >>> 17;
                k1 = k1 * C2 & MASK_HIGH | k1 * C2_LOW & MASK_LOW;
                h1 ^= k1;
                h1 = h1 << 13 | h1 >>> 19;
                h1 = h1 * 5 + 0xe6546b64;
              } else {
                k2 = dataUint32[i];
                k2 = k2 * C1 & MASK_HIGH | k2 * C1_LOW & MASK_LOW;
                k2 = k2 << 15 | k2 >>> 17;
                k2 = k2 * C2 & MASK_HIGH | k2 * C2_LOW & MASK_LOW;
                h2 ^= k2;
                h2 = h2 << 13 | h2 >>> 19;
                h2 = h2 * 5 + 0xe6546b64;
              }
            }
            k1 = 0;
            switch (tailLength) {
              case 3:
                k1 ^= data[blockCounts * 4 + 2] << 16;
              case 2:
                k1 ^= data[blockCounts * 4 + 1] << 8;
              case 1:
                k1 ^= data[blockCounts * 4];
                k1 = k1 * C1 & MASK_HIGH | k1 * C1_LOW & MASK_LOW;
                k1 = k1 << 15 | k1 >>> 17;
                k1 = k1 * C2 & MASK_HIGH | k1 * C2_LOW & MASK_LOW;
                if (blockCounts & 1) {
                  h1 ^= k1;
                } else {
                  h2 ^= k1;
                }
            }
            this.h1 = h1;
            this.h2 = h2;
          }
          hexdigest() {
            let h1 = this.h1,
              h2 = this.h2;
            h1 ^= h2 >>> 1;
            h1 = h1 * 0xed558ccd & MASK_HIGH | h1 * 0x8ccd & MASK_LOW;
            h2 = h2 * 0xff51afd7 & MASK_HIGH | ((h2 << 16 | h1 >>> 16) * 0xafd7ed55 & MASK_HIGH) >>> 16;
            h1 ^= h2 >>> 1;
            h1 = h1 * 0x1a85ec53 & MASK_HIGH | h1 * 0xec53 & MASK_LOW;
            h2 = h2 * 0xc4ceb9fe & MASK_HIGH | ((h2 << 16 | h1 >>> 16) * 0xb9fe1a85 & MASK_HIGH) >>> 16;
            h1 ^= h2 >>> 1;
            return (h1 >>> 0).toString(16).padStart(8, "0") + (h2 >>> 0).toString(16).padStart(8, "0");
          }
        }
        exports.MurmurHash3_64 = MurmurHash3_64;

        /***/
      }, /* 9 */
      /***/(__unused_webpack_module, exports, __w_pdfjs_require__) => {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.FontLoader = exports.FontFaceObject = void 0;
        var _util = __w_pdfjs_require__(1);
        var _is_node = __w_pdfjs_require__(10);
        class FontLoader {
          constructor(_ref26) {
            let {
              ownerDocument = globalThis.document,
              styleElement = null
            } = _ref26;
            this._document = ownerDocument;
            this.nativeFontFaces = [];
            this.styleElement = null;
            this.loadingRequests = [];
            this.loadTestFontId = 0;
          }
          addNativeFontFace(nativeFontFace) {
            this.nativeFontFaces.push(nativeFontFace);
            this._document.fonts.add(nativeFontFace);
          }
          insertRule(rule) {
            if (!this.styleElement) {
              this.styleElement = this._document.createElement("style");
              this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement);
            }
            const styleSheet = this.styleElement.sheet;
            styleSheet.insertRule(rule, styleSheet.cssRules.length);
          }
          clear() {
            for (const nativeFontFace of this.nativeFontFaces) {
              this._document.fonts.delete(nativeFontFace);
            }
            this.nativeFontFaces.length = 0;
            if (this.styleElement) {
              this.styleElement.remove();
              this.styleElement = null;
            }
          }
          async bind(font) {
            if (font.attached || font.missingFile) {
              return;
            }
            font.attached = true;
            if (this.isFontLoadingAPISupported) {
              const nativeFontFace = font.createNativeFontFace();
              if (nativeFontFace) {
                this.addNativeFontFace(nativeFontFace);
                try {
                  await nativeFontFace.loaded;
                } catch (ex) {
                  (0, _util.warn)("Failed to load font '".concat(nativeFontFace.family, "': '").concat(ex, "'."));
                  font.disableFontFace = true;
                  throw ex;
                }
              }
              return;
            }
            const rule = font.createFontFaceRule();
            if (rule) {
              this.insertRule(rule);
              if (this.isSyncFontLoadingSupported) {
                return;
              }
              await new Promise(resolve => {
                const request = this._queueLoadingCallback(resolve);
                this._prepareFontLoadEvent(font, request);
              });
            }
          }
          get isFontLoadingAPISupported() {
            var _this$_document;
            const hasFonts = !!((_this$_document = this._document) !== null && _this$_document !== void 0 && _this$_document.fonts);
            return (0, _util.shadow)(this, "isFontLoadingAPISupported", hasFonts);
          }
          get isSyncFontLoadingSupported() {
            let supported = false;
            if (_is_node.isNodeJS) {
              supported = true;
            } else if (typeof navigator !== "undefined" && /Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(navigator.userAgent)) {
              supported = true;
            }
            return (0, _util.shadow)(this, "isSyncFontLoadingSupported", supported);
          }
          _queueLoadingCallback(callback) {
            function completeRequest() {
              (0, _util.assert)(!request.done, "completeRequest() cannot be called twice.");
              request.done = true;
              while (loadingRequests.length > 0 && loadingRequests[0].done) {
                const otherRequest = loadingRequests.shift();
                setTimeout(otherRequest.callback, 0);
              }
            }
            const {
              loadingRequests
            } = this;
            const request = {
              done: false,
              complete: completeRequest,
              callback
            };
            loadingRequests.push(request);
            return request;
          }
          get _loadTestFont() {
            const testFont = atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQA" + "FQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAA" + "ALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgA" + "AAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1" + "AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD" + "6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACM" + "AooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4D" + "IP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAA" + "AAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUA" + "AQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgAB" + "AAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABY" + "AAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAA" + "AC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAA" + "AAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQAC" + "AQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3" + "Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTj" + "FQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
            return (0, _util.shadow)(this, "_loadTestFont", testFont);
          }
          _prepareFontLoadEvent(font, request) {
            function int32(data, offset) {
              return data.charCodeAt(offset) << 24 | data.charCodeAt(offset + 1) << 16 | data.charCodeAt(offset + 2) << 8 | data.charCodeAt(offset + 3) & 0xff;
            }
            function spliceString(s, offset, remove, insert) {
              const chunk1 = s.substring(0, offset);
              const chunk2 = s.substring(offset + remove);
              return chunk1 + insert + chunk2;
            }
            let i, ii;
            const canvas = this._document.createElement("canvas");
            canvas.width = 1;
            canvas.height = 1;
            const ctx = canvas.getContext("2d");
            let called = 0;
            function isFontReady(name, callback) {
              if (++called > 30) {
                (0, _util.warn)("Load test font never loaded.");
                callback();
                return;
              }
              ctx.font = "30px " + name;
              ctx.fillText(".", 0, 20);
              const imageData = ctx.getImageData(0, 0, 1, 1);
              if (imageData.data[3] > 0) {
                callback();
                return;
              }
              setTimeout(isFontReady.bind(null, name, callback));
            }
            const loadTestFontId = "lt".concat(Date.now()).concat(this.loadTestFontId++);
            let data = this._loadTestFont;
            const COMMENT_OFFSET = 976;
            data = spliceString(data, COMMENT_OFFSET, loadTestFontId.length, loadTestFontId);
            const CFF_CHECKSUM_OFFSET = 16;
            const XXXX_VALUE = 0x58585858;
            let checksum = int32(data, CFF_CHECKSUM_OFFSET);
            for (i = 0, ii = loadTestFontId.length - 3; i < ii; i += 4) {
              checksum = checksum - XXXX_VALUE + int32(loadTestFontId, i) | 0;
            }
            if (i < loadTestFontId.length) {
              checksum = checksum - XXXX_VALUE + int32(loadTestFontId + "XXX", i) | 0;
            }
            data = spliceString(data, CFF_CHECKSUM_OFFSET, 4, (0, _util.string32)(checksum));
            const url = "url(data:font/opentype;base64,".concat(btoa(data), ");");
            const rule = "@font-face {font-family:\"".concat(loadTestFontId, "\";src:").concat(url, "}");
            this.insertRule(rule);
            const div = this._document.createElement("div");
            div.style.visibility = "hidden";
            div.style.width = div.style.height = "10px";
            div.style.position = "absolute";
            div.style.top = div.style.left = "0px";
            for (const name of [font.loadedName, loadTestFontId]) {
              const span = this._document.createElement("span");
              span.textContent = "Hi";
              span.style.fontFamily = name;
              div.append(span);
            }
            this._document.body.append(div);
            isFontReady(loadTestFontId, () => {
              div.remove();
              request.complete();
            });
          }
        }
        exports.FontLoader = FontLoader;
        class FontFaceObject {
          constructor(translatedData, _ref27) {
            let {
              isEvalSupported = true,
              disableFontFace = false,
              ignoreErrors = false,
              inspectFont = null
            } = _ref27;
            this.compiledGlyphs = Object.create(null);
            for (const i in translatedData) {
              this[i] = translatedData[i];
            }
            this.isEvalSupported = isEvalSupported !== false;
            this.disableFontFace = disableFontFace === true;
            this.ignoreErrors = ignoreErrors === true;
            this._inspectFont = inspectFont;
          }
          createNativeFontFace() {
            var _this$_inspectFont;
            if (!this.data || this.disableFontFace) {
              return null;
            }
            let nativeFontFace;
            if (!this.cssFontInfo) {
              nativeFontFace = new FontFace(this.loadedName, this.data, {});
            } else {
              const css = {
                weight: this.cssFontInfo.fontWeight
              };
              if (this.cssFontInfo.italicAngle) {
                css.style = "oblique ".concat(this.cssFontInfo.italicAngle, "deg");
              }
              nativeFontFace = new FontFace(this.cssFontInfo.fontFamily, this.data, css);
            }
            (_this$_inspectFont = this._inspectFont) === null || _this$_inspectFont === void 0 || _this$_inspectFont.call(this, this);
            return nativeFontFace;
          }
          createFontFaceRule() {
            var _this$_inspectFont2;
            if (!this.data || this.disableFontFace) {
              return null;
            }
            const data = (0, _util.bytesToString)(this.data);
            const url = "url(data:".concat(this.mimetype, ";base64,").concat(btoa(data), ");");
            let rule;
            if (!this.cssFontInfo) {
              rule = "@font-face {font-family:\"".concat(this.loadedName, "\";src:").concat(url, "}");
            } else {
              let css = "font-weight: ".concat(this.cssFontInfo.fontWeight, ";");
              if (this.cssFontInfo.italicAngle) {
                css += "font-style: oblique ".concat(this.cssFontInfo.italicAngle, "deg;");
              }
              rule = "@font-face {font-family:\"".concat(this.cssFontInfo.fontFamily, "\";").concat(css, "src:").concat(url, "}");
            }
            (_this$_inspectFont2 = this._inspectFont) === null || _this$_inspectFont2 === void 0 || _this$_inspectFont2.call(this, this, url);
            return rule;
          }
          getPathGenerator(objs, character) {
            if (this.compiledGlyphs[character] !== undefined) {
              return this.compiledGlyphs[character];
            }
            let cmds;
            try {
              cmds = objs.get(this.loadedName + "_path_" + character);
            } catch (ex) {
              if (!this.ignoreErrors) {
                throw ex;
              }
              (0, _util.warn)("getPathGenerator - ignoring character: \"".concat(ex, "\"."));
              return this.compiledGlyphs[character] = function (c, size) {};
            }
            if (this.isEvalSupported && _util.FeatureTest.isEvalSupported) {
              const jsBuf = [];
              for (const current of cmds) {
                const args = current.args !== undefined ? current.args.join(",") : "";
                jsBuf.push("c.", current.cmd, "(", args, ");\n");
              }
              return this.compiledGlyphs[character] = new Function("c", "size", jsBuf.join(""));
            }
            return this.compiledGlyphs[character] = function (c, size) {
              for (const current of cmds) {
                if (current.cmd === "scale") {
                  current.args = [size, -size];
                }
                c[current.cmd].apply(c, current.args);
              }
            };
          }
        }
        exports.FontFaceObject = FontFaceObject;

        /***/
      }, /* 10 */
      /***/(__unused_webpack_module, exports) => {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.isNodeJS = void 0;
        const isNodeJS = typeof process === "object" && process + "" === "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser");
        exports.isNodeJS = isNodeJS;

        /***/
      }, /* 11 */
      /***/(__unused_webpack_module, exports, __w_pdfjs_require__) => {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.CanvasGraphics = void 0;
        var _util = __w_pdfjs_require__(1);
        var _display_utils = __w_pdfjs_require__(6);
        var _pattern_helper = __w_pdfjs_require__(12);
        var _image_utils = __w_pdfjs_require__(13);
        var _is_node = __w_pdfjs_require__(10);
        const MIN_FONT_SIZE = 16;
        const MAX_FONT_SIZE = 100;
        const MAX_GROUP_SIZE = 4096;
        const EXECUTION_TIME = 15;
        const EXECUTION_STEPS = 10;
        const MAX_SIZE_TO_COMPILE = 1000;
        const FULL_CHUNK_HEIGHT = 16;
        function mirrorContextOperations(ctx, destCtx) {
          if (ctx._removeMirroring) {
            throw new Error("Context is already forwarding operations.");
          }
          ctx.__originalSave = ctx.save;
          ctx.__originalRestore = ctx.restore;
          ctx.__originalRotate = ctx.rotate;
          ctx.__originalScale = ctx.scale;
          ctx.__originalTranslate = ctx.translate;
          ctx.__originalTransform = ctx.transform;
          ctx.__originalSetTransform = ctx.setTransform;
          ctx.__originalResetTransform = ctx.resetTransform;
          ctx.__originalClip = ctx.clip;
          ctx.__originalMoveTo = ctx.moveTo;
          ctx.__originalLineTo = ctx.lineTo;
          ctx.__originalBezierCurveTo = ctx.bezierCurveTo;
          ctx.__originalRect = ctx.rect;
          ctx.__originalClosePath = ctx.closePath;
          ctx.__originalBeginPath = ctx.beginPath;
          ctx._removeMirroring = () => {
            ctx.save = ctx.__originalSave;
            ctx.restore = ctx.__originalRestore;
            ctx.rotate = ctx.__originalRotate;
            ctx.scale = ctx.__originalScale;
            ctx.translate = ctx.__originalTranslate;
            ctx.transform = ctx.__originalTransform;
            ctx.setTransform = ctx.__originalSetTransform;
            ctx.resetTransform = ctx.__originalResetTransform;
            ctx.clip = ctx.__originalClip;
            ctx.moveTo = ctx.__originalMoveTo;
            ctx.lineTo = ctx.__originalLineTo;
            ctx.bezierCurveTo = ctx.__originalBezierCurveTo;
            ctx.rect = ctx.__originalRect;
            ctx.closePath = ctx.__originalClosePath;
            ctx.beginPath = ctx.__originalBeginPath;
            delete ctx._removeMirroring;
          };
          ctx.save = function ctxSave() {
            destCtx.save();
            this.__originalSave();
          };
          ctx.restore = function ctxRestore() {
            destCtx.restore();
            this.__originalRestore();
          };
          ctx.translate = function ctxTranslate(x, y) {
            destCtx.translate(x, y);
            this.__originalTranslate(x, y);
          };
          ctx.scale = function ctxScale(x, y) {
            destCtx.scale(x, y);
            this.__originalScale(x, y);
          };
          ctx.transform = function ctxTransform(a, b, c, d, e, f) {
            destCtx.transform(a, b, c, d, e, f);
            this.__originalTransform(a, b, c, d, e, f);
          };
          ctx.setTransform = function ctxSetTransform(a, b, c, d, e, f) {
            destCtx.setTransform(a, b, c, d, e, f);
            this.__originalSetTransform(a, b, c, d, e, f);
          };
          ctx.resetTransform = function ctxResetTransform() {
            destCtx.resetTransform();
            this.__originalResetTransform();
          };
          ctx.rotate = function ctxRotate(angle) {
            destCtx.rotate(angle);
            this.__originalRotate(angle);
          };
          ctx.clip = function ctxRotate(rule) {
            destCtx.clip(rule);
            this.__originalClip(rule);
          };
          ctx.moveTo = function (x, y) {
            destCtx.moveTo(x, y);
            this.__originalMoveTo(x, y);
          };
          ctx.lineTo = function (x, y) {
            destCtx.lineTo(x, y);
            this.__originalLineTo(x, y);
          };
          ctx.bezierCurveTo = function (cp1x, cp1y, cp2x, cp2y, x, y) {
            destCtx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
            this.__originalBezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
          };
          ctx.rect = function (x, y, width, height) {
            destCtx.rect(x, y, width, height);
            this.__originalRect(x, y, width, height);
          };
          ctx.closePath = function () {
            destCtx.closePath();
            this.__originalClosePath();
          };
          ctx.beginPath = function () {
            destCtx.beginPath();
            this.__originalBeginPath();
          };
        }
        class CachedCanvases {
          constructor(canvasFactory) {
            this.canvasFactory = canvasFactory;
            this.cache = Object.create(null);
          }
          getCanvas(id, width, height) {
            let canvasEntry;
            if (this.cache[id] !== undefined) {
              canvasEntry = this.cache[id];
              this.canvasFactory.reset(canvasEntry, width, height);
            } else {
              canvasEntry = this.canvasFactory.create(width, height);
              this.cache[id] = canvasEntry;
            }
            return canvasEntry;
          }
          delete(id) {
            delete this.cache[id];
          }
          clear() {
            for (const id in this.cache) {
              const canvasEntry = this.cache[id];
              this.canvasFactory.destroy(canvasEntry);
              delete this.cache[id];
            }
          }
        }
        function drawImageAtIntegerCoords(ctx, srcImg, srcX, srcY, srcW, srcH, destX, destY, destW, destH) {
          const [a, b, c, d, tx, ty] = (0, _display_utils.getCurrentTransform)(ctx);
          if (b === 0 && c === 0) {
            const tlX = destX * a + tx;
            const rTlX = Math.round(tlX);
            const tlY = destY * d + ty;
            const rTlY = Math.round(tlY);
            const brX = (destX + destW) * a + tx;
            const rWidth = Math.abs(Math.round(brX) - rTlX) || 1;
            const brY = (destY + destH) * d + ty;
            const rHeight = Math.abs(Math.round(brY) - rTlY) || 1;
            ctx.setTransform(Math.sign(a), 0, 0, Math.sign(d), rTlX, rTlY);
            ctx.drawImage(srcImg, srcX, srcY, srcW, srcH, 0, 0, rWidth, rHeight);
            ctx.setTransform(a, b, c, d, tx, ty);
            return [rWidth, rHeight];
          }
          if (a === 0 && d === 0) {
            const tlX = destY * c + tx;
            const rTlX = Math.round(tlX);
            const tlY = destX * b + ty;
            const rTlY = Math.round(tlY);
            const brX = (destY + destH) * c + tx;
            const rWidth = Math.abs(Math.round(brX) - rTlX) || 1;
            const brY = (destX + destW) * b + ty;
            const rHeight = Math.abs(Math.round(brY) - rTlY) || 1;
            ctx.setTransform(0, Math.sign(b), Math.sign(c), 0, rTlX, rTlY);
            ctx.drawImage(srcImg, srcX, srcY, srcW, srcH, 0, 0, rHeight, rWidth);
            ctx.setTransform(a, b, c, d, tx, ty);
            return [rHeight, rWidth];
          }
          ctx.drawImage(srcImg, srcX, srcY, srcW, srcH, destX, destY, destW, destH);
          const scaleX = Math.hypot(a, b);
          const scaleY = Math.hypot(c, d);
          return [scaleX * destW, scaleY * destH];
        }
        function compileType3Glyph(imgData) {
          const {
            width,
            height
          } = imgData;
          if (width > MAX_SIZE_TO_COMPILE || height > MAX_SIZE_TO_COMPILE) {
            return null;
          }
          const POINT_TO_PROCESS_LIMIT = 1000;
          const POINT_TYPES = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]);
          const width1 = width + 1;
          let points = new Uint8Array(width1 * (height + 1));
          let i, j, j0;
          const lineSize = width + 7 & ~7;
          let data = new Uint8Array(lineSize * height),
            pos = 0;
          for (const elem of imgData.data) {
            let mask = 128;
            while (mask > 0) {
              data[pos++] = elem & mask ? 0 : 255;
              mask >>= 1;
            }
          }
          let count = 0;
          pos = 0;
          if (data[pos] !== 0) {
            points[0] = 1;
            ++count;
          }
          for (j = 1; j < width; j++) {
            if (data[pos] !== data[pos + 1]) {
              points[j] = data[pos] ? 2 : 1;
              ++count;
            }
            pos++;
          }
          if (data[pos] !== 0) {
            points[j] = 2;
            ++count;
          }
          for (i = 1; i < height; i++) {
            pos = i * lineSize;
            j0 = i * width1;
            if (data[pos - lineSize] !== data[pos]) {
              points[j0] = data[pos] ? 1 : 8;
              ++count;
            }
            let sum = (data[pos] ? 4 : 0) + (data[pos - lineSize] ? 8 : 0);
            for (j = 1; j < width; j++) {
              sum = (sum >> 2) + (data[pos + 1] ? 4 : 0) + (data[pos - lineSize + 1] ? 8 : 0);
              if (POINT_TYPES[sum]) {
                points[j0 + j] = POINT_TYPES[sum];
                ++count;
              }
              pos++;
            }
            if (data[pos - lineSize] !== data[pos]) {
              points[j0 + j] = data[pos] ? 2 : 4;
              ++count;
            }
            if (count > POINT_TO_PROCESS_LIMIT) {
              return null;
            }
          }
          pos = lineSize * (height - 1);
          j0 = i * width1;
          if (data[pos] !== 0) {
            points[j0] = 8;
            ++count;
          }
          for (j = 1; j < width; j++) {
            if (data[pos] !== data[pos + 1]) {
              points[j0 + j] = data[pos] ? 4 : 8;
              ++count;
            }
            pos++;
          }
          if (data[pos] !== 0) {
            points[j0 + j] = 4;
            ++count;
          }
          if (count > POINT_TO_PROCESS_LIMIT) {
            return null;
          }
          const steps = new Int32Array([0, width1, -1, 0, -width1, 0, 0, 0, 1]);
          const path = new Path2D();
          for (i = 0; count && i <= height; i++) {
            let p = i * width1;
            const end = p + width;
            while (p < end && !points[p]) {
              p++;
            }
            if (p === end) {
              continue;
            }
            path.moveTo(p % width1, i);
            const p0 = p;
            let type = points[p];
            do {
              const step = steps[type];
              do {
                p += step;
              } while (!points[p]);
              const pp = points[p];
              if (pp !== 5 && pp !== 10) {
                type = pp;
                points[p] = 0;
              } else {
                type = pp & 0x33 * type >> 4;
                points[p] &= type >> 2 | type << 2;
              }
              path.lineTo(p % width1, p / width1 | 0);
              if (!points[p]) {
                --count;
              }
            } while (p0 !== p);
            --i;
          }
          data = null;
          points = null;
          const drawOutline = function (c) {
            c.save();
            c.scale(1 / width, -1 / height);
            c.translate(0, -height);
            c.fill(path);
            c.beginPath();
            c.restore();
          };
          return drawOutline;
        }
        class CanvasExtraState {
          constructor(width, height) {
            this.alphaIsShape = false;
            this.fontSize = 0;
            this.fontSizeScale = 1;
            this.textMatrix = _util.IDENTITY_MATRIX;
            this.textMatrixScale = 1;
            this.fontMatrix = _util.FONT_IDENTITY_MATRIX;
            this.leading = 0;
            this.x = 0;
            this.y = 0;
            this.lineX = 0;
            this.lineY = 0;
            this.charSpacing = 0;
            this.wordSpacing = 0;
            this.textHScale = 1;
            this.textRenderingMode = _util.TextRenderingMode.FILL;
            this.textRise = 0;
            this.fillColor = "#000000";
            this.strokeColor = "#000000";
            this.patternFill = false;
            this.fillAlpha = 1;
            this.strokeAlpha = 1;
            this.lineWidth = 1;
            this.activeSMask = null;
            this.transferMaps = "none";
            this.startNewPathAndClipBox([0, 0, width, height]);
          }
          clone() {
            const clone = Object.create(this);
            clone.clipBox = this.clipBox.slice();
            return clone;
          }
          setCurrentPoint(x, y) {
            this.x = x;
            this.y = y;
          }
          updatePathMinMax(transform, x, y) {
            [x, y] = _util.Util.applyTransform([x, y], transform);
            this.minX = Math.min(this.minX, x);
            this.minY = Math.min(this.minY, y);
            this.maxX = Math.max(this.maxX, x);
            this.maxY = Math.max(this.maxY, y);
          }
          updateRectMinMax(transform, rect) {
            const p1 = _util.Util.applyTransform(rect, transform);
            const p2 = _util.Util.applyTransform(rect.slice(2), transform);
            this.minX = Math.min(this.minX, p1[0], p2[0]);
            this.minY = Math.min(this.minY, p1[1], p2[1]);
            this.maxX = Math.max(this.maxX, p1[0], p2[0]);
            this.maxY = Math.max(this.maxY, p1[1], p2[1]);
          }
          updateScalingPathMinMax(transform, minMax) {
            _util.Util.scaleMinMax(transform, minMax);
            this.minX = Math.min(this.minX, minMax[0]);
            this.maxX = Math.max(this.maxX, minMax[1]);
            this.minY = Math.min(this.minY, minMax[2]);
            this.maxY = Math.max(this.maxY, minMax[3]);
          }
          updateCurvePathMinMax(transform, x0, y0, x1, y1, x2, y2, x3, y3, minMax) {
            const box = _util.Util.bezierBoundingBox(x0, y0, x1, y1, x2, y2, x3, y3);
            if (minMax) {
              minMax[0] = Math.min(minMax[0], box[0], box[2]);
              minMax[1] = Math.max(minMax[1], box[0], box[2]);
              minMax[2] = Math.min(minMax[2], box[1], box[3]);
              minMax[3] = Math.max(minMax[3], box[1], box[3]);
              return;
            }
            this.updateRectMinMax(transform, box);
          }
          getPathBoundingBox() {
            let pathType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _pattern_helper.PathType.FILL;
            let transform = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            const box = [this.minX, this.minY, this.maxX, this.maxY];
            if (pathType === _pattern_helper.PathType.STROKE) {
              if (!transform) {
                (0, _util.unreachable)("Stroke bounding box must include transform.");
              }
              const scale = _util.Util.singularValueDecompose2dScale(transform);
              const xStrokePad = scale[0] * this.lineWidth / 2;
              const yStrokePad = scale[1] * this.lineWidth / 2;
              box[0] -= xStrokePad;
              box[1] -= yStrokePad;
              box[2] += xStrokePad;
              box[3] += yStrokePad;
            }
            return box;
          }
          updateClipFromPath() {
            const intersect = _util.Util.intersect(this.clipBox, this.getPathBoundingBox());
            this.startNewPathAndClipBox(intersect || [0, 0, 0, 0]);
          }
          isEmptyClip() {
            return this.minX === Infinity;
          }
          startNewPathAndClipBox(box) {
            this.clipBox = box;
            this.minX = Infinity;
            this.minY = Infinity;
            this.maxX = 0;
            this.maxY = 0;
          }
          getClippedPathBoundingBox() {
            let pathType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _pattern_helper.PathType.FILL;
            let transform = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            return _util.Util.intersect(this.clipBox, this.getPathBoundingBox(pathType, transform));
          }
        }
        function putBinaryImageData(ctx, imgData) {
          if (typeof ImageData !== "undefined" && imgData instanceof ImageData) {
            ctx.putImageData(imgData, 0, 0);
            return;
          }
          const height = imgData.height,
            width = imgData.width;
          const partialChunkHeight = height % FULL_CHUNK_HEIGHT;
          const fullChunks = (height - partialChunkHeight) / FULL_CHUNK_HEIGHT;
          const totalChunks = partialChunkHeight === 0 ? fullChunks : fullChunks + 1;
          const chunkImgData = ctx.createImageData(width, FULL_CHUNK_HEIGHT);
          let srcPos = 0,
            destPos;
          const src = imgData.data;
          const dest = chunkImgData.data;
          let i, j, thisChunkHeight, elemsInThisChunk;
          if (imgData.kind === _util.ImageKind.GRAYSCALE_1BPP) {
            const srcLength = src.byteLength;
            const dest32 = new Uint32Array(dest.buffer, 0, dest.byteLength >> 2);
            const dest32DataLength = dest32.length;
            const fullSrcDiff = width + 7 >> 3;
            const white = 0xffffffff;
            const black = _util.FeatureTest.isLittleEndian ? 0xff000000 : 0x000000ff;
            for (i = 0; i < totalChunks; i++) {
              thisChunkHeight = i < fullChunks ? FULL_CHUNK_HEIGHT : partialChunkHeight;
              destPos = 0;
              for (j = 0; j < thisChunkHeight; j++) {
                const srcDiff = srcLength - srcPos;
                let k = 0;
                const kEnd = srcDiff > fullSrcDiff ? width : srcDiff * 8 - 7;
                const kEndUnrolled = kEnd & ~7;
                let mask = 0;
                let srcByte = 0;
                for (; k < kEndUnrolled; k += 8) {
                  srcByte = src[srcPos++];
                  dest32[destPos++] = srcByte & 128 ? white : black;
                  dest32[destPos++] = srcByte & 64 ? white : black;
                  dest32[destPos++] = srcByte & 32 ? white : black;
                  dest32[destPos++] = srcByte & 16 ? white : black;
                  dest32[destPos++] = srcByte & 8 ? white : black;
                  dest32[destPos++] = srcByte & 4 ? white : black;
                  dest32[destPos++] = srcByte & 2 ? white : black;
                  dest32[destPos++] = srcByte & 1 ? white : black;
                }
                for (; k < kEnd; k++) {
                  if (mask === 0) {
                    srcByte = src[srcPos++];
                    mask = 128;
                  }
                  dest32[destPos++] = srcByte & mask ? white : black;
                  mask >>= 1;
                }
              }
              while (destPos < dest32DataLength) {
                dest32[destPos++] = 0;
              }
              ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
            }
          } else if (imgData.kind === _util.ImageKind.RGBA_32BPP) {
            j = 0;
            elemsInThisChunk = width * FULL_CHUNK_HEIGHT * 4;
            for (i = 0; i < fullChunks; i++) {
              dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
              srcPos += elemsInThisChunk;
              ctx.putImageData(chunkImgData, 0, j);
              j += FULL_CHUNK_HEIGHT;
            }
            if (i < totalChunks) {
              elemsInThisChunk = width * partialChunkHeight * 4;
              dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
              ctx.putImageData(chunkImgData, 0, j);
            }
          } else if (imgData.kind === _util.ImageKind.RGB_24BPP) {
            thisChunkHeight = FULL_CHUNK_HEIGHT;
            elemsInThisChunk = width * thisChunkHeight;
            for (i = 0; i < totalChunks; i++) {
              if (i >= fullChunks) {
                thisChunkHeight = partialChunkHeight;
                elemsInThisChunk = width * thisChunkHeight;
              }
              destPos = 0;
              for (j = elemsInThisChunk; j--;) {
                dest[destPos++] = src[srcPos++];
                dest[destPos++] = src[srcPos++];
                dest[destPos++] = src[srcPos++];
                dest[destPos++] = 255;
              }
              ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
            }
          } else {
            throw new Error("bad image kind: ".concat(imgData.kind));
          }
        }
        function putBinaryImageMask(ctx, imgData) {
          if (imgData.bitmap) {
            ctx.drawImage(imgData.bitmap, 0, 0);
            return;
          }
          const height = imgData.height,
            width = imgData.width;
          const partialChunkHeight = height % FULL_CHUNK_HEIGHT;
          const fullChunks = (height - partialChunkHeight) / FULL_CHUNK_HEIGHT;
          const totalChunks = partialChunkHeight === 0 ? fullChunks : fullChunks + 1;
          const chunkImgData = ctx.createImageData(width, FULL_CHUNK_HEIGHT);
          let srcPos = 0;
          const src = imgData.data;
          const dest = chunkImgData.data;
          for (let i = 0; i < totalChunks; i++) {
            const thisChunkHeight = i < fullChunks ? FULL_CHUNK_HEIGHT : partialChunkHeight;
            ({
              srcPos
            } = (0, _image_utils.convertBlackAndWhiteToRGBA)({
              src,
              srcPos,
              dest,
              width,
              height: thisChunkHeight,
              nonBlackColor: 0
            }));
            ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
          }
        }
        function copyCtxState(sourceCtx, destCtx) {
          const properties = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
          for (const property of properties) {
            if (sourceCtx[property] !== undefined) {
              destCtx[property] = sourceCtx[property];
            }
          }
          if (sourceCtx.setLineDash !== undefined) {
            destCtx.setLineDash(sourceCtx.getLineDash());
            destCtx.lineDashOffset = sourceCtx.lineDashOffset;
          }
        }
        function resetCtxToDefault(ctx) {
          ctx.strokeStyle = ctx.fillStyle = "#000000";
          ctx.fillRule = "nonzero";
          ctx.globalAlpha = 1;
          ctx.lineWidth = 1;
          ctx.lineCap = "butt";
          ctx.lineJoin = "miter";
          ctx.miterLimit = 10;
          ctx.globalCompositeOperation = "source-over";
          ctx.font = "10px sans-serif";
          if (ctx.setLineDash !== undefined) {
            ctx.setLineDash([]);
            ctx.lineDashOffset = 0;
          }
          if (!_is_node.isNodeJS) {
            ctx.filter = "none";
          }
        }
        function composeSMaskBackdrop(bytes, r0, g0, b0) {
          const length = bytes.length;
          for (let i = 3; i < length; i += 4) {
            const alpha = bytes[i];
            if (alpha === 0) {
              bytes[i - 3] = r0;
              bytes[i - 2] = g0;
              bytes[i - 1] = b0;
            } else if (alpha < 255) {
              const alpha_ = 255 - alpha;
              bytes[i - 3] = bytes[i - 3] * alpha + r0 * alpha_ >> 8;
              bytes[i - 2] = bytes[i - 2] * alpha + g0 * alpha_ >> 8;
              bytes[i - 1] = bytes[i - 1] * alpha + b0 * alpha_ >> 8;
            }
          }
        }
        function composeSMaskAlpha(maskData, layerData, transferMap) {
          const length = maskData.length;
          const scale = 1 / 255;
          for (let i = 3; i < length; i += 4) {
            const alpha = transferMap ? transferMap[maskData[i]] : maskData[i];
            layerData[i] = layerData[i] * alpha * scale | 0;
          }
        }
        function composeSMaskLuminosity(maskData, layerData, transferMap) {
          const length = maskData.length;
          for (let i = 3; i < length; i += 4) {
            const y = maskData[i - 3] * 77 + maskData[i - 2] * 152 + maskData[i - 1] * 28;
            layerData[i] = transferMap ? layerData[i] * transferMap[y >> 8] >> 8 : layerData[i] * y >> 16;
          }
        }
        function genericComposeSMask(maskCtx, layerCtx, width, height, subtype, backdrop, transferMap, layerOffsetX, layerOffsetY, maskOffsetX, maskOffsetY) {
          const hasBackdrop = !!backdrop;
          const r0 = hasBackdrop ? backdrop[0] : 0;
          const g0 = hasBackdrop ? backdrop[1] : 0;
          const b0 = hasBackdrop ? backdrop[2] : 0;
          let composeFn;
          if (subtype === "Luminosity") {
            composeFn = composeSMaskLuminosity;
          } else {
            composeFn = composeSMaskAlpha;
          }
          const PIXELS_TO_PROCESS = 1048576;
          const chunkSize = Math.min(height, Math.ceil(PIXELS_TO_PROCESS / width));
          for (let row = 0; row < height; row += chunkSize) {
            const chunkHeight = Math.min(chunkSize, height - row);
            const maskData = maskCtx.getImageData(layerOffsetX - maskOffsetX, row + (layerOffsetY - maskOffsetY), width, chunkHeight);
            const layerData = layerCtx.getImageData(layerOffsetX, row + layerOffsetY, width, chunkHeight);
            if (hasBackdrop) {
              composeSMaskBackdrop(maskData.data, r0, g0, b0);
            }
            composeFn(maskData.data, layerData.data, transferMap);
            layerCtx.putImageData(layerData, layerOffsetX, row + layerOffsetY);
          }
        }
        function composeSMask(ctx, smask, layerCtx, layerBox) {
          const layerOffsetX = layerBox[0];
          const layerOffsetY = layerBox[1];
          const layerWidth = layerBox[2] - layerOffsetX;
          const layerHeight = layerBox[3] - layerOffsetY;
          if (layerWidth === 0 || layerHeight === 0) {
            return;
          }
          genericComposeSMask(smask.context, layerCtx, layerWidth, layerHeight, smask.subtype, smask.backdrop, smask.transferMap, layerOffsetX, layerOffsetY, smask.offsetX, smask.offsetY);
          ctx.save();
          ctx.globalAlpha = 1;
          ctx.globalCompositeOperation = "source-over";
          ctx.setTransform(1, 0, 0, 1, 0, 0);
          ctx.drawImage(layerCtx.canvas, 0, 0);
          ctx.restore();
        }
        function getImageSmoothingEnabled(transform, interpolate) {
          const scale = _util.Util.singularValueDecompose2dScale(transform);
          scale[0] = Math.fround(scale[0]);
          scale[1] = Math.fround(scale[1]);
          const actualScale = Math.fround((globalThis.devicePixelRatio || 1) * _display_utils.PixelsPerInch.PDF_TO_CSS_UNITS);
          if (interpolate !== undefined) {
            return interpolate;
          } else if (scale[0] <= actualScale || scale[1] <= actualScale) {
            return true;
          }
          return false;
        }
        const LINE_CAP_STYLES = ["butt", "round", "square"];
        const LINE_JOIN_STYLES = ["miter", "round", "bevel"];
        const NORMAL_CLIP = {};
        const EO_CLIP = {};
        var _restoreInitialState = /*#__PURE__*/new WeakSet();
        var _drawFilter = /*#__PURE__*/new WeakSet();
        class CanvasGraphics {
          constructor(canvasCtx, commonObjs, objs, canvasFactory, filterFactory, _ref28, annotationCanvasMap, pageColors) {
            let {
              optionalContentConfig,
              markedContentStack = null
            } = _ref28;
            _classPrivateMethodInitSpec(this, _drawFilter);
            _classPrivateMethodInitSpec(this, _restoreInitialState);
            this.ctx = canvasCtx;
            this.current = new CanvasExtraState(this.ctx.canvas.width, this.ctx.canvas.height);
            this.stateStack = [];
            this.pendingClip = null;
            this.pendingEOFill = false;
            this.res = null;
            this.xobjs = null;
            this.commonObjs = commonObjs;
            this.objs = objs;
            this.canvasFactory = canvasFactory;
            this.filterFactory = filterFactory;
            this.groupStack = [];
            this.processingType3 = null;
            this.baseTransform = null;
            this.baseTransformStack = [];
            this.groupLevel = 0;
            this.smaskStack = [];
            this.smaskCounter = 0;
            this.tempSMask = null;
            this.suspendedCtx = null;
            this.contentVisible = true;
            this.markedContentStack = markedContentStack || [];
            this.optionalContentConfig = optionalContentConfig;
            this.cachedCanvases = new CachedCanvases(this.canvasFactory);
            this.cachedPatterns = new Map();
            this.annotationCanvasMap = annotationCanvasMap;
            this.viewportScale = 1;
            this.outputScaleX = 1;
            this.outputScaleY = 1;
            this.pageColors = pageColors;
            this._cachedScaleForStroking = null;
            this._cachedGetSinglePixelWidth = null;
            this._cachedBitmapsMap = new Map();
          }
          getObject(data) {
            let fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            if (typeof data === "string") {
              return data.startsWith("g_") ? this.commonObjs.get(data) : this.objs.get(data);
            }
            return fallback;
          }
          beginDrawing(_ref29) {
            let {
              transform,
              viewport,
              transparency = false,
              background = null
            } = _ref29;
            const width = this.ctx.canvas.width;
            const height = this.ctx.canvas.height;
            const savedFillStyle = this.ctx.fillStyle;
            this.ctx.fillStyle = background || "#ffffff";
            this.ctx.fillRect(0, 0, width, height);
            this.ctx.fillStyle = savedFillStyle;
            if (transparency) {
              const transparentCanvas = this.cachedCanvases.getCanvas("transparent", width, height);
              this.compositeCtx = this.ctx;
              this.transparentCanvas = transparentCanvas.canvas;
              this.ctx = transparentCanvas.context;
              this.ctx.save();
              this.ctx.transform(...(0, _display_utils.getCurrentTransform)(this.compositeCtx));
            }
            this.ctx.save();
            resetCtxToDefault(this.ctx);
            if (transform) {
              this.ctx.transform(...transform);
              this.outputScaleX = transform[0];
              this.outputScaleY = transform[0];
            }
            this.ctx.transform(...viewport.transform);
            this.viewportScale = viewport.scale;
            this.baseTransform = (0, _display_utils.getCurrentTransform)(this.ctx);
          }
          executeOperatorList(operatorList, executionStartIdx, continueCallback, stepper) {
            const argsArray = operatorList.argsArray;
            const fnArray = operatorList.fnArray;
            let i = executionStartIdx || 0;
            const argsArrayLen = argsArray.length;
            if (argsArrayLen === i) {
              return i;
            }
            const chunkOperations = argsArrayLen - i > EXECUTION_STEPS && typeof continueCallback === "function";
            const endTime = chunkOperations ? Date.now() + EXECUTION_TIME : 0;
            let steps = 0;
            const commonObjs = this.commonObjs;
            const objs = this.objs;
            let fnId;
            while (true) {
              if (stepper !== undefined && i === stepper.nextBreakPoint) {
                stepper.breakIt(i, continueCallback);
                return i;
              }
              fnId = fnArray[i];
              if (fnId !== _util.OPS.dependency) {
                this[fnId].apply(this, argsArray[i]);
              } else {
                for (const depObjId of argsArray[i]) {
                  const objsPool = depObjId.startsWith("g_") ? commonObjs : objs;
                  if (!objsPool.has(depObjId)) {
                    objsPool.get(depObjId, continueCallback);
                    return i;
                  }
                }
              }
              i++;
              if (i === argsArrayLen) {
                return i;
              }
              if (chunkOperations && ++steps > EXECUTION_STEPS) {
                if (Date.now() > endTime) {
                  continueCallback();
                  return i;
                }
                steps = 0;
              }
            }
          }
          endDrawing() {
            _classPrivateMethodGet(this, _restoreInitialState, _restoreInitialState2).call(this);
            this.cachedCanvases.clear();
            this.cachedPatterns.clear();
            for (const cache of this._cachedBitmapsMap.values()) {
              for (const canvas of cache.values()) {
                if (typeof HTMLCanvasElement !== "undefined" && canvas instanceof HTMLCanvasElement) {
                  canvas.width = canvas.height = 0;
                }
              }
              cache.clear();
            }
            this._cachedBitmapsMap.clear();
            _classPrivateMethodGet(this, _drawFilter, _drawFilter2).call(this);
          }
          _scaleImage(img, inverseTransform) {
            const width = img.width;
            const height = img.height;
            let widthScale = Math.max(Math.hypot(inverseTransform[0], inverseTransform[1]), 1);
            let heightScale = Math.max(Math.hypot(inverseTransform[2], inverseTransform[3]), 1);
            let paintWidth = width,
              paintHeight = height;
            let tmpCanvasId = "prescale1";
            let tmpCanvas, tmpCtx;
            while (widthScale > 2 && paintWidth > 1 || heightScale > 2 && paintHeight > 1) {
              let newWidth = paintWidth,
                newHeight = paintHeight;
              if (widthScale > 2 && paintWidth > 1) {
                newWidth = paintWidth >= 16384 ? Math.floor(paintWidth / 2) - 1 || 1 : Math.ceil(paintWidth / 2);
                widthScale /= paintWidth / newWidth;
              }
              if (heightScale > 2 && paintHeight > 1) {
                newHeight = paintHeight >= 16384 ? Math.floor(paintHeight / 2) - 1 || 1 : Math.ceil(paintHeight) / 2;
                heightScale /= paintHeight / newHeight;
              }
              tmpCanvas = this.cachedCanvases.getCanvas(tmpCanvasId, newWidth, newHeight);
              tmpCtx = tmpCanvas.context;
              tmpCtx.clearRect(0, 0, newWidth, newHeight);
              tmpCtx.drawImage(img, 0, 0, paintWidth, paintHeight, 0, 0, newWidth, newHeight);
              img = tmpCanvas.canvas;
              paintWidth = newWidth;
              paintHeight = newHeight;
              tmpCanvasId = tmpCanvasId === "prescale1" ? "prescale2" : "prescale1";
            }
            return {
              img,
              paintWidth,
              paintHeight
            };
          }
          _createMaskCanvas(img) {
            const ctx = this.ctx;
            const {
              width,
              height
            } = img;
            const fillColor = this.current.fillColor;
            const isPatternFill = this.current.patternFill;
            const currentTransform = (0, _display_utils.getCurrentTransform)(ctx);
            let cache, cacheKey, scaled, maskCanvas;
            if ((img.bitmap || img.data) && img.count > 1) {
              const mainKey = img.bitmap || img.data.buffer;
              cacheKey = JSON.stringify(isPatternFill ? currentTransform : [currentTransform.slice(0, 4), fillColor]);
              cache = this._cachedBitmapsMap.get(mainKey);
              if (!cache) {
                cache = new Map();
                this._cachedBitmapsMap.set(mainKey, cache);
              }
              const cachedImage = cache.get(cacheKey);
              if (cachedImage && !isPatternFill) {
                const offsetX = Math.round(Math.min(currentTransform[0], currentTransform[2]) + currentTransform[4]);
                const offsetY = Math.round(Math.min(currentTransform[1], currentTransform[3]) + currentTransform[5]);
                return {
                  canvas: cachedImage,
                  offsetX,
                  offsetY
                };
              }
              scaled = cachedImage;
            }
            if (!scaled) {
              maskCanvas = this.cachedCanvases.getCanvas("maskCanvas", width, height);
              putBinaryImageMask(maskCanvas.context, img);
            }
            let maskToCanvas = _util.Util.transform(currentTransform, [1 / width, 0, 0, -1 / height, 0, 0]);
            maskToCanvas = _util.Util.transform(maskToCanvas, [1, 0, 0, 1, 0, -height]);
            const cord1 = _util.Util.applyTransform([0, 0], maskToCanvas);
            const cord2 = _util.Util.applyTransform([width, height], maskToCanvas);
            const rect = _util.Util.normalizeRect([cord1[0], cord1[1], cord2[0], cord2[1]]);
            const drawnWidth = Math.round(rect[2] - rect[0]) || 1;
            const drawnHeight = Math.round(rect[3] - rect[1]) || 1;
            const fillCanvas = this.cachedCanvases.getCanvas("fillCanvas", drawnWidth, drawnHeight);
            const fillCtx = fillCanvas.context;
            const offsetX = Math.min(cord1[0], cord2[0]);
            const offsetY = Math.min(cord1[1], cord2[1]);
            fillCtx.translate(-offsetX, -offsetY);
            fillCtx.transform(...maskToCanvas);
            if (!scaled) {
              scaled = this._scaleImage(maskCanvas.canvas, (0, _display_utils.getCurrentTransformInverse)(fillCtx));
              scaled = scaled.img;
              if (cache && isPatternFill) {
                cache.set(cacheKey, scaled);
              }
            }
            fillCtx.imageSmoothingEnabled = getImageSmoothingEnabled((0, _display_utils.getCurrentTransform)(fillCtx), img.interpolate);
            drawImageAtIntegerCoords(fillCtx, scaled, 0, 0, scaled.width, scaled.height, 0, 0, width, height);
            fillCtx.globalCompositeOperation = "source-in";
            const inverse = _util.Util.transform((0, _display_utils.getCurrentTransformInverse)(fillCtx), [1, 0, 0, 1, -offsetX, -offsetY]);
            fillCtx.fillStyle = isPatternFill ? fillColor.getPattern(ctx, this, inverse, _pattern_helper.PathType.FILL) : fillColor;
            fillCtx.fillRect(0, 0, width, height);
            if (cache && !isPatternFill) {
              this.cachedCanvases.delete("fillCanvas");
              cache.set(cacheKey, fillCanvas.canvas);
            }
            return {
              canvas: fillCanvas.canvas,
              offsetX: Math.round(offsetX),
              offsetY: Math.round(offsetY)
            };
          }
          setLineWidth(width) {
            if (width !== this.current.lineWidth) {
              this._cachedScaleForStroking = null;
            }
            this.current.lineWidth = width;
            this.ctx.lineWidth = width;
          }
          setLineCap(style) {
            this.ctx.lineCap = LINE_CAP_STYLES[style];
          }
          setLineJoin(style) {
            this.ctx.lineJoin = LINE_JOIN_STYLES[style];
          }
          setMiterLimit(limit) {
            this.ctx.miterLimit = limit;
          }
          setDash(dashArray, dashPhase) {
            const ctx = this.ctx;
            if (ctx.setLineDash !== undefined) {
              ctx.setLineDash(dashArray);
              ctx.lineDashOffset = dashPhase;
            }
          }
          setRenderingIntent(intent) {}
          setFlatness(flatness) {}
          setGState(states) {
            for (const [key, value] of states) {
              switch (key) {
                case "LW":
                  this.setLineWidth(value);
                  break;
                case "LC":
                  this.setLineCap(value);
                  break;
                case "LJ":
                  this.setLineJoin(value);
                  break;
                case "ML":
                  this.setMiterLimit(value);
                  break;
                case "D":
                  this.setDash(value[0], value[1]);
                  break;
                case "RI":
                  this.setRenderingIntent(value);
                  break;
                case "FL":
                  this.setFlatness(value);
                  break;
                case "Font":
                  this.setFont(value[0], value[1]);
                  break;
                case "CA":
                  this.current.strokeAlpha = value;
                  break;
                case "ca":
                  this.current.fillAlpha = value;
                  this.ctx.globalAlpha = value;
                  break;
                case "BM":
                  this.ctx.globalCompositeOperation = value;
                  break;
                case "SMask":
                  this.current.activeSMask = value ? this.tempSMask : null;
                  this.tempSMask = null;
                  this.checkSMaskState();
                  break;
                case "TR":
                  this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(value);
                  break;
              }
            }
          }
          get inSMaskMode() {
            return !!this.suspendedCtx;
          }
          checkSMaskState() {
            const inSMaskMode = this.inSMaskMode;
            if (this.current.activeSMask && !inSMaskMode) {
              this.beginSMaskMode();
            } else if (!this.current.activeSMask && inSMaskMode) {
              this.endSMaskMode();
            }
          }
          beginSMaskMode() {
            if (this.inSMaskMode) {
              throw new Error("beginSMaskMode called while already in smask mode");
            }
            const drawnWidth = this.ctx.canvas.width;
            const drawnHeight = this.ctx.canvas.height;
            const cacheId = "smaskGroupAt" + this.groupLevel;
            const scratchCanvas = this.cachedCanvases.getCanvas(cacheId, drawnWidth, drawnHeight);
            this.suspendedCtx = this.ctx;
            this.ctx = scratchCanvas.context;
            const ctx = this.ctx;
            ctx.setTransform(...(0, _display_utils.getCurrentTransform)(this.suspendedCtx));
            copyCtxState(this.suspendedCtx, ctx);
            mirrorContextOperations(ctx, this.suspendedCtx);
            this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
          }
          endSMaskMode() {
            if (!this.inSMaskMode) {
              throw new Error("endSMaskMode called while not in smask mode");
            }
            this.ctx._removeMirroring();
            copyCtxState(this.ctx, this.suspendedCtx);
            this.ctx = this.suspendedCtx;
            this.suspendedCtx = null;
          }
          compose(dirtyBox) {
            if (!this.current.activeSMask) {
              return;
            }
            if (!dirtyBox) {
              dirtyBox = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
            } else {
              dirtyBox[0] = Math.floor(dirtyBox[0]);
              dirtyBox[1] = Math.floor(dirtyBox[1]);
              dirtyBox[2] = Math.ceil(dirtyBox[2]);
              dirtyBox[3] = Math.ceil(dirtyBox[3]);
            }
            const smask = this.current.activeSMask;
            const suspendedCtx = this.suspendedCtx;
            composeSMask(suspendedCtx, smask, this.ctx, dirtyBox);
            this.ctx.save();
            this.ctx.setTransform(1, 0, 0, 1, 0, 0);
            this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
            this.ctx.restore();
          }
          save() {
            if (this.inSMaskMode) {
              copyCtxState(this.ctx, this.suspendedCtx);
              this.suspendedCtx.save();
            } else {
              this.ctx.save();
            }
            const old = this.current;
            this.stateStack.push(old);
            this.current = old.clone();
          }
          restore() {
            if (this.stateStack.length === 0 && this.inSMaskMode) {
              this.endSMaskMode();
            }
            if (this.stateStack.length !== 0) {
              this.current = this.stateStack.pop();
              if (this.inSMaskMode) {
                this.suspendedCtx.restore();
                copyCtxState(this.suspendedCtx, this.ctx);
              } else {
                this.ctx.restore();
              }
              this.checkSMaskState();
              this.pendingClip = null;
              this._cachedScaleForStroking = null;
              this._cachedGetSinglePixelWidth = null;
            }
          }
          transform(a, b, c, d, e, f) {
            this.ctx.transform(a, b, c, d, e, f);
            this._cachedScaleForStroking = null;
            this._cachedGetSinglePixelWidth = null;
          }
          constructPath(ops, args, minMax) {
            const ctx = this.ctx;
            const current = this.current;
            let x = current.x,
              y = current.y;
            let startX, startY;
            const currentTransform = (0, _display_utils.getCurrentTransform)(ctx);
            const isScalingMatrix = currentTransform[0] === 0 && currentTransform[3] === 0 || currentTransform[1] === 0 && currentTransform[2] === 0;
            const minMaxForBezier = isScalingMatrix ? minMax.slice(0) : null;
            for (let i = 0, j = 0, ii = ops.length; i < ii; i++) {
              switch (ops[i] | 0) {
                case _util.OPS.rectangle:
                  x = args[j++];
                  y = args[j++];
                  const width = args[j++];
                  const height = args[j++];
                  const xw = x + width;
                  const yh = y + height;
                  ctx.moveTo(x, y);
                  if (width === 0 || height === 0) {
                    ctx.lineTo(xw, yh);
                  } else {
                    ctx.lineTo(xw, y);
                    ctx.lineTo(xw, yh);
                    ctx.lineTo(x, yh);
                  }
                  if (!isScalingMatrix) {
                    current.updateRectMinMax(currentTransform, [x, y, xw, yh]);
                  }
                  ctx.closePath();
                  break;
                case _util.OPS.moveTo:
                  x = args[j++];
                  y = args[j++];
                  ctx.moveTo(x, y);
                  if (!isScalingMatrix) {
                    current.updatePathMinMax(currentTransform, x, y);
                  }
                  break;
                case _util.OPS.lineTo:
                  x = args[j++];
                  y = args[j++];
                  ctx.lineTo(x, y);
                  if (!isScalingMatrix) {
                    current.updatePathMinMax(currentTransform, x, y);
                  }
                  break;
                case _util.OPS.curveTo:
                  startX = x;
                  startY = y;
                  x = args[j + 4];
                  y = args[j + 5];
                  ctx.bezierCurveTo(args[j], args[j + 1], args[j + 2], args[j + 3], x, y);
                  current.updateCurvePathMinMax(currentTransform, startX, startY, args[j], args[j + 1], args[j + 2], args[j + 3], x, y, minMaxForBezier);
                  j += 6;
                  break;
                case _util.OPS.curveTo2:
                  startX = x;
                  startY = y;
                  ctx.bezierCurveTo(x, y, args[j], args[j + 1], args[j + 2], args[j + 3]);
                  current.updateCurvePathMinMax(currentTransform, startX, startY, x, y, args[j], args[j + 1], args[j + 2], args[j + 3], minMaxForBezier);
                  x = args[j + 2];
                  y = args[j + 3];
                  j += 4;
                  break;
                case _util.OPS.curveTo3:
                  startX = x;
                  startY = y;
                  x = args[j + 2];
                  y = args[j + 3];
                  ctx.bezierCurveTo(args[j], args[j + 1], x, y, x, y);
                  current.updateCurvePathMinMax(currentTransform, startX, startY, args[j], args[j + 1], x, y, x, y, minMaxForBezier);
                  j += 4;
                  break;
                case _util.OPS.closePath:
                  ctx.closePath();
                  break;
              }
            }
            if (isScalingMatrix) {
              current.updateScalingPathMinMax(currentTransform, minMaxForBezier);
            }
            current.setCurrentPoint(x, y);
          }
          closePath() {
            this.ctx.closePath();
          }
          stroke() {
            let consumePath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            const ctx = this.ctx;
            const strokeColor = this.current.strokeColor;
            ctx.globalAlpha = this.current.strokeAlpha;
            if (this.contentVisible) {
              if (typeof strokeColor === "object" && strokeColor !== null && strokeColor !== void 0 && strokeColor.getPattern) {
                ctx.save();
                ctx.strokeStyle = strokeColor.getPattern(ctx, this, (0, _display_utils.getCurrentTransformInverse)(ctx), _pattern_helper.PathType.STROKE);
                this.rescaleAndStroke(false);
                ctx.restore();
              } else {
                this.rescaleAndStroke(true);
              }
            }
            if (consumePath) {
              this.consumePath(this.current.getClippedPathBoundingBox());
            }
            ctx.globalAlpha = this.current.fillAlpha;
          }
          closeStroke() {
            this.closePath();
            this.stroke();
          }
          fill() {
            let consumePath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            const ctx = this.ctx;
            const fillColor = this.current.fillColor;
            const isPatternFill = this.current.patternFill;
            let needRestore = false;
            if (isPatternFill) {
              ctx.save();
              ctx.fillStyle = fillColor.getPattern(ctx, this, (0, _display_utils.getCurrentTransformInverse)(ctx), _pattern_helper.PathType.FILL);
              needRestore = true;
            }
            const intersect = this.current.getClippedPathBoundingBox();
            if (this.contentVisible && intersect !== null) {
              if (this.pendingEOFill) {
                ctx.fill("evenodd");
                this.pendingEOFill = false;
              } else {
                ctx.fill();
              }
            }
            if (needRestore) {
              ctx.restore();
            }
            if (consumePath) {
              this.consumePath(intersect);
            }
          }
          eoFill() {
            this.pendingEOFill = true;
            this.fill();
          }
          fillStroke() {
            this.fill(false);
            this.stroke(false);
            this.consumePath();
          }
          eoFillStroke() {
            this.pendingEOFill = true;
            this.fillStroke();
          }
          closeFillStroke() {
            this.closePath();
            this.fillStroke();
          }
          closeEOFillStroke() {
            this.pendingEOFill = true;
            this.closePath();
            this.fillStroke();
          }
          endPath() {
            this.consumePath();
          }
          clip() {
            this.pendingClip = NORMAL_CLIP;
          }
          eoClip() {
            this.pendingClip = EO_CLIP;
          }
          beginText() {
            this.current.textMatrix = _util.IDENTITY_MATRIX;
            this.current.textMatrixScale = 1;
            this.current.x = this.current.lineX = 0;
            this.current.y = this.current.lineY = 0;
          }
          endText() {
            const paths = this.pendingTextPaths;
            const ctx = this.ctx;
            if (paths === undefined) {
              ctx.beginPath();
              return;
            }
            ctx.save();
            ctx.beginPath();
            for (const path of paths) {
              ctx.setTransform(...path.transform);
              ctx.translate(path.x, path.y);
              path.addToPath(ctx, path.fontSize);
            }
            ctx.restore();
            ctx.clip();
            ctx.beginPath();
            delete this.pendingTextPaths;
          }
          setCharSpacing(spacing) {
            this.current.charSpacing = spacing;
          }
          setWordSpacing(spacing) {
            this.current.wordSpacing = spacing;
          }
          setHScale(scale) {
            this.current.textHScale = scale / 100;
          }
          setLeading(leading) {
            this.current.leading = -leading;
          }
          setFont(fontRefName, size) {
            const fontObj = this.commonObjs.get(fontRefName);
            const current = this.current;
            if (!fontObj) {
              throw new Error("Can't find font for ".concat(fontRefName));
            }
            current.fontMatrix = fontObj.fontMatrix || _util.FONT_IDENTITY_MATRIX;
            if (current.fontMatrix[0] === 0 || current.fontMatrix[3] === 0) {
              (0, _util.warn)("Invalid font matrix for font " + fontRefName);
            }
            if (size < 0) {
              size = -size;
              current.fontDirection = -1;
            } else {
              current.fontDirection = 1;
            }
            this.current.font = fontObj;
            this.current.fontSize = size;
            if (fontObj.isType3Font) {
              return;
            }
            const name = fontObj.loadedName || "sans-serif";
            let bold = "normal";
            if (fontObj.black) {
              bold = "900";
            } else if (fontObj.bold) {
              bold = "bold";
            }
            const italic = fontObj.italic ? "italic" : "normal";
            const typeface = "\"".concat(name, "\", ").concat(fontObj.fallbackName);
            let browserFontSize = size;
            if (size < MIN_FONT_SIZE) {
              browserFontSize = MIN_FONT_SIZE;
            } else if (size > MAX_FONT_SIZE) {
              browserFontSize = MAX_FONT_SIZE;
            }
            this.current.fontSizeScale = size / browserFontSize;
            this.ctx.font = "".concat(italic, " ").concat(bold, " ").concat(browserFontSize, "px ").concat(typeface);
          }
          setTextRenderingMode(mode) {
            this.current.textRenderingMode = mode;
          }
          setTextRise(rise) {
            this.current.textRise = rise;
          }
          moveText(x, y) {
            this.current.x = this.current.lineX += x;
            this.current.y = this.current.lineY += y;
          }
          setLeadingMoveText(x, y) {
            this.setLeading(-y);
            this.moveText(x, y);
          }
          setTextMatrix(a, b, c, d, e, f) {
            this.current.textMatrix = [a, b, c, d, e, f];
            this.current.textMatrixScale = Math.hypot(a, b);
            this.current.x = this.current.lineX = 0;
            this.current.y = this.current.lineY = 0;
          }
          nextLine() {
            this.moveText(0, this.current.leading);
          }
          paintChar(character, x, y, patternTransform) {
            const ctx = this.ctx;
            const current = this.current;
            const font = current.font;
            const textRenderingMode = current.textRenderingMode;
            const fontSize = current.fontSize / current.fontSizeScale;
            const fillStrokeMode = textRenderingMode & _util.TextRenderingMode.FILL_STROKE_MASK;
            const isAddToPathSet = !!(textRenderingMode & _util.TextRenderingMode.ADD_TO_PATH_FLAG);
            const patternFill = current.patternFill && !font.missingFile;
            let addToPath;
            if (font.disableFontFace || isAddToPathSet || patternFill) {
              addToPath = font.getPathGenerator(this.commonObjs, character);
            }
            if (font.disableFontFace || patternFill) {
              ctx.save();
              ctx.translate(x, y);
              ctx.beginPath();
              addToPath(ctx, fontSize);
              if (patternTransform) {
                ctx.setTransform(...patternTransform);
              }
              if (fillStrokeMode === _util.TextRenderingMode.FILL || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
                ctx.fill();
              }
              if (fillStrokeMode === _util.TextRenderingMode.STROKE || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
                ctx.stroke();
              }
              ctx.restore();
            } else {
              if (fillStrokeMode === _util.TextRenderingMode.FILL || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
                ctx.fillText(character, x, y);
              }
              if (fillStrokeMode === _util.TextRenderingMode.STROKE || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
                ctx.strokeText(character, x, y);
              }
            }
            if (isAddToPathSet) {
              const paths = this.pendingTextPaths || (this.pendingTextPaths = []);
              paths.push({
                transform: (0, _display_utils.getCurrentTransform)(ctx),
                x,
                y,
                fontSize,
                addToPath
              });
            }
          }
          get isFontSubpixelAAEnabled() {
            const {
              context: ctx
            } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
            ctx.scale(1.5, 1);
            ctx.fillText("I", 0, 10);
            const data = ctx.getImageData(0, 0, 10, 10).data;
            let enabled = false;
            for (let i = 3; i < data.length; i += 4) {
              if (data[i] > 0 && data[i] < 255) {
                enabled = true;
                break;
              }
            }
            return (0, _util.shadow)(this, "isFontSubpixelAAEnabled", enabled);
          }
          showText(glyphs) {
            const current = this.current;
            const font = current.font;
            if (font.isType3Font) {
              return this.showType3Text(glyphs);
            }
            const fontSize = current.fontSize;
            if (fontSize === 0) {
              return undefined;
            }
            const ctx = this.ctx;
            const fontSizeScale = current.fontSizeScale;
            const charSpacing = current.charSpacing;
            const wordSpacing = current.wordSpacing;
            const fontDirection = current.fontDirection;
            const textHScale = current.textHScale * fontDirection;
            const glyphsLength = glyphs.length;
            const vertical = font.vertical;
            const spacingDir = vertical ? 1 : -1;
            const defaultVMetrics = font.defaultVMetrics;
            const widthAdvanceScale = fontSize * current.fontMatrix[0];
            const simpleFillText = current.textRenderingMode === _util.TextRenderingMode.FILL && !font.disableFontFace && !current.patternFill;
            ctx.save();
            ctx.transform(...current.textMatrix);
            ctx.translate(current.x, current.y + current.textRise);
            if (fontDirection > 0) {
              ctx.scale(textHScale, -1);
            } else {
              ctx.scale(textHScale, 1);
            }
            let patternTransform;
            if (current.patternFill) {
              ctx.save();
              const pattern = current.fillColor.getPattern(ctx, this, (0, _display_utils.getCurrentTransformInverse)(ctx), _pattern_helper.PathType.FILL);
              patternTransform = (0, _display_utils.getCurrentTransform)(ctx);
              ctx.restore();
              ctx.fillStyle = pattern;
            }
            let lineWidth = current.lineWidth;
            const scale = current.textMatrixScale;
            if (scale === 0 || lineWidth === 0) {
              const fillStrokeMode = current.textRenderingMode & _util.TextRenderingMode.FILL_STROKE_MASK;
              if (fillStrokeMode === _util.TextRenderingMode.STROKE || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
                lineWidth = this.getSinglePixelWidth();
              }
            } else {
              lineWidth /= scale;
            }
            if (fontSizeScale !== 1.0) {
              ctx.scale(fontSizeScale, fontSizeScale);
              lineWidth /= fontSizeScale;
            }
            ctx.lineWidth = lineWidth;
            if (font.isInvalidPDFjsFont) {
              const chars = [];
              let width = 0;
              for (const glyph of glyphs) {
                chars.push(glyph.unicode);
                width += glyph.width;
              }
              ctx.fillText(chars.join(""), 0, 0);
              current.x += width * widthAdvanceScale * textHScale;
              ctx.restore();
              this.compose();
              return undefined;
            }
            let x = 0,
              i;
            for (i = 0; i < glyphsLength; ++i) {
              const glyph = glyphs[i];
              if (typeof glyph === "number") {
                x += spacingDir * glyph * fontSize / 1000;
                continue;
              }
              let restoreNeeded = false;
              const spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
              const character = glyph.fontChar;
              const accent = glyph.accent;
              let scaledX, scaledY;
              let width = glyph.width;
              if (vertical) {
                const vmetric = glyph.vmetric || defaultVMetrics;
                const vx = -(glyph.vmetric ? vmetric[1] : width * 0.5) * widthAdvanceScale;
                const vy = vmetric[2] * widthAdvanceScale;
                width = vmetric ? -vmetric[0] : width;
                scaledX = vx / fontSizeScale;
                scaledY = (x + vy) / fontSizeScale;
              } else {
                scaledX = x / fontSizeScale;
                scaledY = 0;
              }
              if (font.remeasure && width > 0) {
                const measuredWidth = ctx.measureText(character).width * 1000 / fontSize * fontSizeScale;
                if (width < measuredWidth && this.isFontSubpixelAAEnabled) {
                  const characterScaleX = width / measuredWidth;
                  restoreNeeded = true;
                  ctx.save();
                  ctx.scale(characterScaleX, 1);
                  scaledX /= characterScaleX;
                } else if (width !== measuredWidth) {
                  scaledX += (width - measuredWidth) / 2000 * fontSize / fontSizeScale;
                }
              }
              if (this.contentVisible && (glyph.isInFont || font.missingFile)) {
                if (simpleFillText && !accent) {
                  ctx.fillText(character, scaledX, scaledY);
                } else {
                  this.paintChar(character, scaledX, scaledY, patternTransform);
                  if (accent) {
                    const scaledAccentX = scaledX + fontSize * accent.offset.x / fontSizeScale;
                    const scaledAccentY = scaledY - fontSize * accent.offset.y / fontSizeScale;
                    this.paintChar(accent.fontChar, scaledAccentX, scaledAccentY, patternTransform);
                  }
                }
              }
              let charWidth;
              if (vertical) {
                charWidth = width * widthAdvanceScale - spacing * fontDirection;
              } else {
                charWidth = width * widthAdvanceScale + spacing * fontDirection;
              }
              x += charWidth;
              if (restoreNeeded) {
                ctx.restore();
              }
            }
            if (vertical) {
              current.y -= x;
            } else {
              current.x += x * textHScale;
            }
            ctx.restore();
            this.compose();
            return undefined;
          }
          showType3Text(glyphs) {
            const ctx = this.ctx;
            const current = this.current;
            const font = current.font;
            const fontSize = current.fontSize;
            const fontDirection = current.fontDirection;
            const spacingDir = font.vertical ? 1 : -1;
            const charSpacing = current.charSpacing;
            const wordSpacing = current.wordSpacing;
            const textHScale = current.textHScale * fontDirection;
            const fontMatrix = current.fontMatrix || _util.FONT_IDENTITY_MATRIX;
            const glyphsLength = glyphs.length;
            const isTextInvisible = current.textRenderingMode === _util.TextRenderingMode.INVISIBLE;
            let i, glyph, width, spacingLength;
            if (isTextInvisible || fontSize === 0) {
              return;
            }
            this._cachedScaleForStroking = null;
            this._cachedGetSinglePixelWidth = null;
            ctx.save();
            ctx.transform(...current.textMatrix);
            ctx.translate(current.x, current.y);
            ctx.scale(textHScale, fontDirection);
            for (i = 0; i < glyphsLength; ++i) {
              glyph = glyphs[i];
              if (typeof glyph === "number") {
                spacingLength = spacingDir * glyph * fontSize / 1000;
                this.ctx.translate(spacingLength, 0);
                current.x += spacingLength * textHScale;
                continue;
              }
              const spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
              const operatorList = font.charProcOperatorList[glyph.operatorListId];
              if (!operatorList) {
                (0, _util.warn)("Type3 character \"".concat(glyph.operatorListId, "\" is not available."));
                continue;
              }
              if (this.contentVisible) {
                this.processingType3 = glyph;
                this.save();
                ctx.scale(fontSize, fontSize);
                ctx.transform(...fontMatrix);
                this.executeOperatorList(operatorList);
                this.restore();
              }
              const transformed = _util.Util.applyTransform([glyph.width, 0], fontMatrix);
              width = transformed[0] * fontSize + spacing;
              ctx.translate(width, 0);
              current.x += width * textHScale;
            }
            ctx.restore();
            this.processingType3 = null;
          }
          setCharWidth(xWidth, yWidth) {}
          setCharWidthAndBounds(xWidth, yWidth, llx, lly, urx, ury) {
            this.ctx.rect(llx, lly, urx - llx, ury - lly);
            this.ctx.clip();
            this.endPath();
          }
          getColorN_Pattern(IR) {
            let pattern;
            if (IR[0] === "TilingPattern") {
              const color = IR[1];
              const baseTransform = this.baseTransform || (0, _display_utils.getCurrentTransform)(this.ctx);
              const canvasGraphicsFactory = {
                createCanvasGraphics: ctx => {
                  return new CanvasGraphics(ctx, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
                    optionalContentConfig: this.optionalContentConfig,
                    markedContentStack: this.markedContentStack
                  });
                }
              };
              pattern = new _pattern_helper.TilingPattern(IR, color, this.ctx, canvasGraphicsFactory, baseTransform);
            } else {
              pattern = this._getPattern(IR[1], IR[2]);
            }
            return pattern;
          }
          setStrokeColorN() {
            this.current.strokeColor = this.getColorN_Pattern(arguments);
          }
          setFillColorN() {
            this.current.fillColor = this.getColorN_Pattern(arguments);
            this.current.patternFill = true;
          }
          setStrokeRGBColor(r, g, b) {
            const color = _util.Util.makeHexColor(r, g, b);
            this.ctx.strokeStyle = color;
            this.current.strokeColor = color;
          }
          setFillRGBColor(r, g, b) {
            const color = _util.Util.makeHexColor(r, g, b);
            this.ctx.fillStyle = color;
            this.current.fillColor = color;
            this.current.patternFill = false;
          }
          _getPattern(objId) {
            let matrix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            let pattern;
            if (this.cachedPatterns.has(objId)) {
              pattern = this.cachedPatterns.get(objId);
            } else {
              pattern = (0, _pattern_helper.getShadingPattern)(this.getObject(objId));
              this.cachedPatterns.set(objId, pattern);
            }
            if (matrix) {
              pattern.matrix = matrix;
            }
            return pattern;
          }
          shadingFill(objId) {
            if (!this.contentVisible) {
              return;
            }
            const ctx = this.ctx;
            this.save();
            const pattern = this._getPattern(objId);
            ctx.fillStyle = pattern.getPattern(ctx, this, (0, _display_utils.getCurrentTransformInverse)(ctx), _pattern_helper.PathType.SHADING);
            const inv = (0, _display_utils.getCurrentTransformInverse)(ctx);
            if (inv) {
              const canvas = ctx.canvas;
              const width = canvas.width;
              const height = canvas.height;
              const bl = _util.Util.applyTransform([0, 0], inv);
              const br = _util.Util.applyTransform([0, height], inv);
              const ul = _util.Util.applyTransform([width, 0], inv);
              const ur = _util.Util.applyTransform([width, height], inv);
              const x0 = Math.min(bl[0], br[0], ul[0], ur[0]);
              const y0 = Math.min(bl[1], br[1], ul[1], ur[1]);
              const x1 = Math.max(bl[0], br[0], ul[0], ur[0]);
              const y1 = Math.max(bl[1], br[1], ul[1], ur[1]);
              this.ctx.fillRect(x0, y0, x1 - x0, y1 - y0);
            } else {
              this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
            }
            this.compose(this.current.getClippedPathBoundingBox());
            this.restore();
          }
          beginInlineImage() {
            (0, _util.unreachable)("Should not call beginInlineImage");
          }
          beginImageData() {
            (0, _util.unreachable)("Should not call beginImageData");
          }
          paintFormXObjectBegin(matrix, bbox) {
            if (!this.contentVisible) {
              return;
            }
            this.save();
            this.baseTransformStack.push(this.baseTransform);
            if (Array.isArray(matrix) && matrix.length === 6) {
              this.transform(...matrix);
            }
            this.baseTransform = (0, _display_utils.getCurrentTransform)(this.ctx);
            if (bbox) {
              const width = bbox[2] - bbox[0];
              const height = bbox[3] - bbox[1];
              this.ctx.rect(bbox[0], bbox[1], width, height);
              this.current.updateRectMinMax((0, _display_utils.getCurrentTransform)(this.ctx), bbox);
              this.clip();
              this.endPath();
            }
          }
          paintFormXObjectEnd() {
            if (!this.contentVisible) {
              return;
            }
            this.restore();
            this.baseTransform = this.baseTransformStack.pop();
          }
          beginGroup(group) {
            if (!this.contentVisible) {
              return;
            }
            this.save();
            if (this.inSMaskMode) {
              this.endSMaskMode();
              this.current.activeSMask = null;
            }
            const currentCtx = this.ctx;
            if (!group.isolated) {
              (0, _util.info)("TODO: Support non-isolated groups.");
            }
            if (group.knockout) {
              (0, _util.warn)("Knockout groups not supported.");
            }
            const currentTransform = (0, _display_utils.getCurrentTransform)(currentCtx);
            if (group.matrix) {
              currentCtx.transform(...group.matrix);
            }
            if (!group.bbox) {
              throw new Error("Bounding box is required.");
            }
            let bounds = _util.Util.getAxialAlignedBoundingBox(group.bbox, (0, _display_utils.getCurrentTransform)(currentCtx));
            const canvasBounds = [0, 0, currentCtx.canvas.width, currentCtx.canvas.height];
            bounds = _util.Util.intersect(bounds, canvasBounds) || [0, 0, 0, 0];
            const offsetX = Math.floor(bounds[0]);
            const offsetY = Math.floor(bounds[1]);
            let drawnWidth = Math.max(Math.ceil(bounds[2]) - offsetX, 1);
            let drawnHeight = Math.max(Math.ceil(bounds[3]) - offsetY, 1);
            let scaleX = 1,
              scaleY = 1;
            if (drawnWidth > MAX_GROUP_SIZE) {
              scaleX = drawnWidth / MAX_GROUP_SIZE;
              drawnWidth = MAX_GROUP_SIZE;
            }
            if (drawnHeight > MAX_GROUP_SIZE) {
              scaleY = drawnHeight / MAX_GROUP_SIZE;
              drawnHeight = MAX_GROUP_SIZE;
            }
            this.current.startNewPathAndClipBox([0, 0, drawnWidth, drawnHeight]);
            let cacheId = "groupAt" + this.groupLevel;
            if (group.smask) {
              cacheId += "_smask_" + this.smaskCounter++ % 2;
            }
            const scratchCanvas = this.cachedCanvases.getCanvas(cacheId, drawnWidth, drawnHeight);
            const groupCtx = scratchCanvas.context;
            groupCtx.scale(1 / scaleX, 1 / scaleY);
            groupCtx.translate(-offsetX, -offsetY);
            groupCtx.transform(...currentTransform);
            if (group.smask) {
              this.smaskStack.push({
                canvas: scratchCanvas.canvas,
                context: groupCtx,
                offsetX,
                offsetY,
                scaleX,
                scaleY,
                subtype: group.smask.subtype,
                backdrop: group.smask.backdrop,
                transferMap: group.smask.transferMap || null,
                startTransformInverse: null
              });
            } else {
              currentCtx.setTransform(1, 0, 0, 1, 0, 0);
              currentCtx.translate(offsetX, offsetY);
              currentCtx.scale(scaleX, scaleY);
              currentCtx.save();
            }
            copyCtxState(currentCtx, groupCtx);
            this.ctx = groupCtx;
            this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
            this.groupStack.push(currentCtx);
            this.groupLevel++;
          }
          endGroup(group) {
            if (!this.contentVisible) {
              return;
            }
            this.groupLevel--;
            const groupCtx = this.ctx;
            const ctx = this.groupStack.pop();
            this.ctx = ctx;
            this.ctx.imageSmoothingEnabled = false;
            if (group.smask) {
              this.tempSMask = this.smaskStack.pop();
              this.restore();
            } else {
              this.ctx.restore();
              const currentMtx = (0, _display_utils.getCurrentTransform)(this.ctx);
              this.restore();
              this.ctx.save();
              this.ctx.setTransform(...currentMtx);
              const dirtyBox = _util.Util.getAxialAlignedBoundingBox([0, 0, groupCtx.canvas.width, groupCtx.canvas.height], currentMtx);
              this.ctx.drawImage(groupCtx.canvas, 0, 0);
              this.ctx.restore();
              this.compose(dirtyBox);
            }
          }
          beginAnnotation(id, rect, transform, matrix, hasOwnCanvas) {
            _classPrivateMethodGet(this, _restoreInitialState, _restoreInitialState2).call(this);
            resetCtxToDefault(this.ctx);
            this.ctx.save();
            this.save();
            if (this.baseTransform) {
              this.ctx.setTransform(...this.baseTransform);
            }
            if (Array.isArray(rect) && rect.length === 4) {
              const width = rect[2] - rect[0];
              const height = rect[3] - rect[1];
              if (hasOwnCanvas && this.annotationCanvasMap) {
                transform = transform.slice();
                transform[4] -= rect[0];
                transform[5] -= rect[1];
                rect = rect.slice();
                rect[0] = rect[1] = 0;
                rect[2] = width;
                rect[3] = height;
                const [scaleX, scaleY] = _util.Util.singularValueDecompose2dScale((0, _display_utils.getCurrentTransform)(this.ctx));
                const {
                  viewportScale
                } = this;
                const canvasWidth = Math.ceil(width * this.outputScaleX * viewportScale);
                const canvasHeight = Math.ceil(height * this.outputScaleY * viewportScale);
                this.annotationCanvas = this.canvasFactory.create(canvasWidth, canvasHeight);
                const {
                  canvas,
                  context
                } = this.annotationCanvas;
                this.annotationCanvasMap.set(id, canvas);
                this.annotationCanvas.savedCtx = this.ctx;
                this.ctx = context;
                this.ctx.save();
                this.ctx.setTransform(scaleX, 0, 0, -scaleY, 0, height * scaleY);
                resetCtxToDefault(this.ctx);
              } else {
                resetCtxToDefault(this.ctx);
                this.ctx.rect(rect[0], rect[1], width, height);
                this.ctx.clip();
                this.endPath();
              }
            }
            this.current = new CanvasExtraState(this.ctx.canvas.width, this.ctx.canvas.height);
            this.transform(...transform);
            this.transform(...matrix);
          }
          endAnnotation() {
            if (this.annotationCanvas) {
              this.ctx.restore();
              _classPrivateMethodGet(this, _drawFilter, _drawFilter2).call(this);
              this.ctx = this.annotationCanvas.savedCtx;
              delete this.annotationCanvas.savedCtx;
              delete this.annotationCanvas;
            }
          }
          paintImageMaskXObject(img) {
            if (!this.contentVisible) {
              return;
            }
            const count = img.count;
            img = this.getObject(img.data, img);
            img.count = count;
            const ctx = this.ctx;
            const glyph = this.processingType3;
            if (glyph) {
              if (glyph.compiled === undefined) {
                glyph.compiled = compileType3Glyph(img);
              }
              if (glyph.compiled) {
                glyph.compiled(ctx);
                return;
              }
            }
            const mask = this._createMaskCanvas(img);
            const maskCanvas = mask.canvas;
            ctx.save();
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.drawImage(maskCanvas, mask.offsetX, mask.offsetY);
            ctx.restore();
            this.compose();
          }
          paintImageMaskXObjectRepeat(img, scaleX) {
            let skewX = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            let skewY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
            let scaleY = arguments.length > 4 ? arguments[4] : undefined;
            let positions = arguments.length > 5 ? arguments[5] : undefined;
            if (!this.contentVisible) {
              return;
            }
            img = this.getObject(img.data, img);
            const ctx = this.ctx;
            ctx.save();
            const currentTransform = (0, _display_utils.getCurrentTransform)(ctx);
            ctx.transform(scaleX, skewX, skewY, scaleY, 0, 0);
            const mask = this._createMaskCanvas(img);
            ctx.setTransform(1, 0, 0, 1, mask.offsetX - currentTransform[4], mask.offsetY - currentTransform[5]);
            for (let i = 0, ii = positions.length; i < ii; i += 2) {
              const trans = _util.Util.transform(currentTransform, [scaleX, skewX, skewY, scaleY, positions[i], positions[i + 1]]);
              const [x, y] = _util.Util.applyTransform([0, 0], trans);
              ctx.drawImage(mask.canvas, x, y);
            }
            ctx.restore();
            this.compose();
          }
          paintImageMaskXObjectGroup(images) {
            if (!this.contentVisible) {
              return;
            }
            const ctx = this.ctx;
            const fillColor = this.current.fillColor;
            const isPatternFill = this.current.patternFill;
            for (const image of images) {
              const {
                data,
                width,
                height,
                transform
              } = image;
              const maskCanvas = this.cachedCanvases.getCanvas("maskCanvas", width, height);
              const maskCtx = maskCanvas.context;
              maskCtx.save();
              const img = this.getObject(data, image);
              putBinaryImageMask(maskCtx, img);
              maskCtx.globalCompositeOperation = "source-in";
              maskCtx.fillStyle = isPatternFill ? fillColor.getPattern(maskCtx, this, (0, _display_utils.getCurrentTransformInverse)(ctx), _pattern_helper.PathType.FILL) : fillColor;
              maskCtx.fillRect(0, 0, width, height);
              maskCtx.restore();
              ctx.save();
              ctx.transform(...transform);
              ctx.scale(1, -1);
              drawImageAtIntegerCoords(ctx, maskCanvas.canvas, 0, 0, width, height, 0, -1, 1, 1);
              ctx.restore();
            }
            this.compose();
          }
          paintImageXObject(objId) {
            if (!this.contentVisible) {
              return;
            }
            const imgData = this.getObject(objId);
            if (!imgData) {
              (0, _util.warn)("Dependent image isn't ready yet");
              return;
            }
            this.paintInlineImageXObject(imgData);
          }
          paintImageXObjectRepeat(objId, scaleX, scaleY, positions) {
            if (!this.contentVisible) {
              return;
            }
            const imgData = this.getObject(objId);
            if (!imgData) {
              (0, _util.warn)("Dependent image isn't ready yet");
              return;
            }
            const width = imgData.width;
            const height = imgData.height;
            const map = [];
            for (let i = 0, ii = positions.length; i < ii; i += 2) {
              map.push({
                transform: [scaleX, 0, 0, scaleY, positions[i], positions[i + 1]],
                x: 0,
                y: 0,
                w: width,
                h: height
              });
            }
            this.paintInlineImageXObjectGroup(imgData, map);
          }
          applyTransferMapsToCanvas(ctx) {
            if (this.current.transferMaps !== "none") {
              ctx.filter = this.current.transferMaps;
              ctx.drawImage(ctx.canvas, 0, 0);
              ctx.filter = "none";
            }
            return ctx.canvas;
          }
          applyTransferMapsToBitmap(imgData) {
            if (this.current.transferMaps === "none") {
              return imgData.bitmap;
            }
            const {
              bitmap,
              width,
              height
            } = imgData;
            const tmpCanvas = this.cachedCanvases.getCanvas("inlineImage", width, height);
            const tmpCtx = tmpCanvas.context;
            tmpCtx.filter = this.current.transferMaps;
            tmpCtx.drawImage(bitmap, 0, 0);
            tmpCtx.filter = "none";
            return tmpCanvas.canvas;
          }
          paintInlineImageXObject(imgData) {
            if (!this.contentVisible) {
              return;
            }
            const width = imgData.width;
            const height = imgData.height;
            const ctx = this.ctx;
            this.save();
            if (!_is_node.isNodeJS) {
              ctx.filter = "none";
            }
            ctx.scale(1 / width, -1 / height);
            let imgToPaint;
            if (imgData.bitmap) {
              imgToPaint = this.applyTransferMapsToBitmap(imgData);
            } else if (typeof HTMLElement === "function" && imgData instanceof HTMLElement || !imgData.data) {
              imgToPaint = imgData;
            } else {
              const tmpCanvas = this.cachedCanvases.getCanvas("inlineImage", width, height);
              const tmpCtx = tmpCanvas.context;
              putBinaryImageData(tmpCtx, imgData);
              imgToPaint = this.applyTransferMapsToCanvas(tmpCtx);
            }
            const scaled = this._scaleImage(imgToPaint, (0, _display_utils.getCurrentTransformInverse)(ctx));
            ctx.imageSmoothingEnabled = getImageSmoothingEnabled((0, _display_utils.getCurrentTransform)(ctx), imgData.interpolate);
            drawImageAtIntegerCoords(ctx, scaled.img, 0, 0, scaled.paintWidth, scaled.paintHeight, 0, -height, width, height);
            this.compose();
            this.restore();
          }
          paintInlineImageXObjectGroup(imgData, map) {
            if (!this.contentVisible) {
              return;
            }
            const ctx = this.ctx;
            let imgToPaint;
            if (imgData.bitmap) {
              imgToPaint = imgData.bitmap;
            } else {
              const w = imgData.width;
              const h = imgData.height;
              const tmpCanvas = this.cachedCanvases.getCanvas("inlineImage", w, h);
              const tmpCtx = tmpCanvas.context;
              putBinaryImageData(tmpCtx, imgData);
              imgToPaint = this.applyTransferMapsToCanvas(tmpCtx);
            }
            for (const entry of map) {
              ctx.save();
              ctx.transform(...entry.transform);
              ctx.scale(1, -1);
              drawImageAtIntegerCoords(ctx, imgToPaint, entry.x, entry.y, entry.w, entry.h, 0, -1, 1, 1);
              ctx.restore();
            }
            this.compose();
          }
          paintSolidColorImageMask() {
            if (!this.contentVisible) {
              return;
            }
            this.ctx.fillRect(0, 0, 1, 1);
            this.compose();
          }
          markPoint(tag) {}
          markPointProps(tag, properties) {}
          beginMarkedContent(tag) {
            this.markedContentStack.push({
              visible: true
            });
          }
          beginMarkedContentProps(tag, properties) {
            if (tag === "OC") {
              this.markedContentStack.push({
                visible: this.optionalContentConfig.isVisible(properties)
              });
            } else {
              this.markedContentStack.push({
                visible: true
              });
            }
            this.contentVisible = this.isContentVisible();
          }
          endMarkedContent() {
            this.markedContentStack.pop();
            this.contentVisible = this.isContentVisible();
          }
          beginCompat() {}
          endCompat() {}
          consumePath(clipBox) {
            const isEmpty = this.current.isEmptyClip();
            if (this.pendingClip) {
              this.current.updateClipFromPath();
            }
            if (!this.pendingClip) {
              this.compose(clipBox);
            }
            const ctx = this.ctx;
            if (this.pendingClip) {
              if (!isEmpty) {
                if (this.pendingClip === EO_CLIP) {
                  ctx.clip("evenodd");
                } else {
                  ctx.clip();
                }
              }
              this.pendingClip = null;
            }
            this.current.startNewPathAndClipBox(this.current.clipBox);
            ctx.beginPath();
          }
          getSinglePixelWidth() {
            if (!this._cachedGetSinglePixelWidth) {
              const m = (0, _display_utils.getCurrentTransform)(this.ctx);
              if (m[1] === 0 && m[2] === 0) {
                this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(m[0]), Math.abs(m[3]));
              } else {
                const absDet = Math.abs(m[0] * m[3] - m[2] * m[1]);
                const normX = Math.hypot(m[0], m[2]);
                const normY = Math.hypot(m[1], m[3]);
                this._cachedGetSinglePixelWidth = Math.max(normX, normY) / absDet;
              }
            }
            return this._cachedGetSinglePixelWidth;
          }
          getScaleForStroking() {
            if (!this._cachedScaleForStroking) {
              const {
                lineWidth
              } = this.current;
              const m = (0, _display_utils.getCurrentTransform)(this.ctx);
              let scaleX, scaleY;
              if (m[1] === 0 && m[2] === 0) {
                const normX = Math.abs(m[0]);
                const normY = Math.abs(m[3]);
                if (lineWidth === 0) {
                  scaleX = 1 / normX;
                  scaleY = 1 / normY;
                } else {
                  const scaledXLineWidth = normX * lineWidth;
                  const scaledYLineWidth = normY * lineWidth;
                  scaleX = scaledXLineWidth < 1 ? 1 / scaledXLineWidth : 1;
                  scaleY = scaledYLineWidth < 1 ? 1 / scaledYLineWidth : 1;
                }
              } else {
                const absDet = Math.abs(m[0] * m[3] - m[2] * m[1]);
                const normX = Math.hypot(m[0], m[1]);
                const normY = Math.hypot(m[2], m[3]);
                if (lineWidth === 0) {
                  scaleX = normY / absDet;
                  scaleY = normX / absDet;
                } else {
                  const baseArea = lineWidth * absDet;
                  scaleX = normY > baseArea ? normY / baseArea : 1;
                  scaleY = normX > baseArea ? normX / baseArea : 1;
                }
              }
              this._cachedScaleForStroking = [scaleX, scaleY];
            }
            return this._cachedScaleForStroking;
          }
          rescaleAndStroke(saveRestore) {
            const {
              ctx
            } = this;
            const {
              lineWidth
            } = this.current;
            const [scaleX, scaleY] = this.getScaleForStroking();
            ctx.lineWidth = lineWidth || 1;
            if (scaleX === 1 && scaleY === 1) {
              ctx.stroke();
              return;
            }
            let savedMatrix, savedDashes, savedDashOffset;
            if (saveRestore) {
              savedMatrix = (0, _display_utils.getCurrentTransform)(ctx);
              savedDashes = ctx.getLineDash().slice();
              savedDashOffset = ctx.lineDashOffset;
            }
            ctx.scale(scaleX, scaleY);
            const scale = Math.max(scaleX, scaleY);
            ctx.setLineDash(ctx.getLineDash().map(x => x / scale));
            ctx.lineDashOffset /= scale;
            ctx.stroke();
            if (saveRestore) {
              ctx.setTransform(...savedMatrix);
              ctx.setLineDash(savedDashes);
              ctx.lineDashOffset = savedDashOffset;
            }
          }
          isContentVisible() {
            for (let i = this.markedContentStack.length - 1; i >= 0; i--) {
              if (!this.markedContentStack[i].visible) {
                return false;
              }
            }
            return true;
          }
        }
        function _restoreInitialState2() {
          while (this.stateStack.length || this.inSMaskMode) {
            this.restore();
          }
          this.ctx.restore();
          if (this.transparentCanvas) {
            this.ctx = this.compositeCtx;
            this.ctx.save();
            this.ctx.setTransform(1, 0, 0, 1, 0, 0);
            this.ctx.drawImage(this.transparentCanvas, 0, 0);
            this.ctx.restore();
            this.transparentCanvas = null;
          }
        }
        function _drawFilter2() {
          if (this.pageColors) {
            const hcmFilterId = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
            if (hcmFilterId !== "none") {
              const savedFilter = this.ctx.filter;
              this.ctx.filter = hcmFilterId;
              this.ctx.drawImage(this.ctx.canvas, 0, 0);
              this.ctx.filter = savedFilter;
            }
          }
        }
        exports.CanvasGraphics = CanvasGraphics;
        for (const op in _util.OPS) {
          if (CanvasGraphics.prototype[op] !== undefined) {
            CanvasGraphics.prototype[_util.OPS[op]] = CanvasGraphics.prototype[op];
          }
        }

        /***/
      }, /* 12 */
      /***/(__unused_webpack_module, exports, __w_pdfjs_require__) => {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.TilingPattern = exports.PathType = void 0;
        exports.getShadingPattern = getShadingPattern;
        var _util = __w_pdfjs_require__(1);
        var _display_utils = __w_pdfjs_require__(6);
        const PathType = {
          FILL: "Fill",
          STROKE: "Stroke",
          SHADING: "Shading"
        };
        exports.PathType = PathType;
        function applyBoundingBox(ctx, bbox) {
          if (!bbox) {
            return;
          }
          const width = bbox[2] - bbox[0];
          const height = bbox[3] - bbox[1];
          const region = new Path2D();
          region.rect(bbox[0], bbox[1], width, height);
          ctx.clip(region);
        }
        class BaseShadingPattern {
          constructor() {
            if (this.constructor === BaseShadingPattern) {
              (0, _util.unreachable)("Cannot initialize BaseShadingPattern.");
            }
          }
          getPattern() {
            (0, _util.unreachable)("Abstract method `getPattern` called.");
          }
        }
        class RadialAxialShadingPattern extends BaseShadingPattern {
          constructor(IR) {
            super();
            this._type = IR[1];
            this._bbox = IR[2];
            this._colorStops = IR[3];
            this._p0 = IR[4];
            this._p1 = IR[5];
            this._r0 = IR[6];
            this._r1 = IR[7];
            this.matrix = null;
          }
          _createGradient(ctx) {
            let grad;
            if (this._type === "axial") {
              grad = ctx.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]);
            } else if (this._type === "radial") {
              grad = ctx.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1);
            }
            for (const colorStop of this._colorStops) {
              grad.addColorStop(colorStop[0], colorStop[1]);
            }
            return grad;
          }
          getPattern(ctx, owner, inverse, pathType) {
            let pattern;
            if (pathType === PathType.STROKE || pathType === PathType.FILL) {
              const ownerBBox = owner.current.getClippedPathBoundingBox(pathType, (0, _display_utils.getCurrentTransform)(ctx)) || [0, 0, 0, 0];
              const width = Math.ceil(ownerBBox[2] - ownerBBox[0]) || 1;
              const height = Math.ceil(ownerBBox[3] - ownerBBox[1]) || 1;
              const tmpCanvas = owner.cachedCanvases.getCanvas("pattern", width, height, true);
              const tmpCtx = tmpCanvas.context;
              tmpCtx.clearRect(0, 0, tmpCtx.canvas.width, tmpCtx.canvas.height);
              tmpCtx.beginPath();
              tmpCtx.rect(0, 0, tmpCtx.canvas.width, tmpCtx.canvas.height);
              tmpCtx.translate(-ownerBBox[0], -ownerBBox[1]);
              inverse = _util.Util.transform(inverse, [1, 0, 0, 1, ownerBBox[0], ownerBBox[1]]);
              tmpCtx.transform(...owner.baseTransform);
              if (this.matrix) {
                tmpCtx.transform(...this.matrix);
              }
              applyBoundingBox(tmpCtx, this._bbox);
              tmpCtx.fillStyle = this._createGradient(tmpCtx);
              tmpCtx.fill();
              pattern = ctx.createPattern(tmpCanvas.canvas, "no-repeat");
              const domMatrix = new DOMMatrix(inverse);
              pattern.setTransform(domMatrix);
            } else {
              applyBoundingBox(ctx, this._bbox);
              pattern = this._createGradient(ctx);
            }
            return pattern;
          }
        }
        function drawTriangle(data, context, p1, p2, p3, c1, c2, c3) {
          const coords = context.coords,
            colors = context.colors;
          const bytes = data.data,
            rowSize = data.width * 4;
          let tmp;
          if (coords[p1 + 1] > coords[p2 + 1]) {
            tmp = p1;
            p1 = p2;
            p2 = tmp;
            tmp = c1;
            c1 = c2;
            c2 = tmp;
          }
          if (coords[p2 + 1] > coords[p3 + 1]) {
            tmp = p2;
            p2 = p3;
            p3 = tmp;
            tmp = c2;
            c2 = c3;
            c3 = tmp;
          }
          if (coords[p1 + 1] > coords[p2 + 1]) {
            tmp = p1;
            p1 = p2;
            p2 = tmp;
            tmp = c1;
            c1 = c2;
            c2 = tmp;
          }
          const x1 = (coords[p1] + context.offsetX) * context.scaleX;
          const y1 = (coords[p1 + 1] + context.offsetY) * context.scaleY;
          const x2 = (coords[p2] + context.offsetX) * context.scaleX;
          const y2 = (coords[p2 + 1] + context.offsetY) * context.scaleY;
          const x3 = (coords[p3] + context.offsetX) * context.scaleX;
          const y3 = (coords[p3 + 1] + context.offsetY) * context.scaleY;
          if (y1 >= y3) {
            return;
          }
          const c1r = colors[c1],
            c1g = colors[c1 + 1],
            c1b = colors[c1 + 2];
          const c2r = colors[c2],
            c2g = colors[c2 + 1],
            c2b = colors[c2 + 2];
          const c3r = colors[c3],
            c3g = colors[c3 + 1],
            c3b = colors[c3 + 2];
          const minY = Math.round(y1),
            maxY = Math.round(y3);
          let xa, car, cag, cab;
          let xb, cbr, cbg, cbb;
          for (let y = minY; y <= maxY; y++) {
            if (y < y2) {
              let k;
              if (y < y1) {
                k = 0;
              } else {
                k = (y1 - y) / (y1 - y2);
              }
              xa = x1 - (x1 - x2) * k;
              car = c1r - (c1r - c2r) * k;
              cag = c1g - (c1g - c2g) * k;
              cab = c1b - (c1b - c2b) * k;
            } else {
              let k;
              if (y > y3) {
                k = 1;
              } else if (y2 === y3) {
                k = 0;
              } else {
                k = (y2 - y) / (y2 - y3);
              }
              xa = x2 - (x2 - x3) * k;
              car = c2r - (c2r - c3r) * k;
              cag = c2g - (c2g - c3g) * k;
              cab = c2b - (c2b - c3b) * k;
            }
            let k;
            if (y < y1) {
              k = 0;
            } else if (y > y3) {
              k = 1;
            } else {
              k = (y1 - y) / (y1 - y3);
            }
            xb = x1 - (x1 - x3) * k;
            cbr = c1r - (c1r - c3r) * k;
            cbg = c1g - (c1g - c3g) * k;
            cbb = c1b - (c1b - c3b) * k;
            const x1_ = Math.round(Math.min(xa, xb));
            const x2_ = Math.round(Math.max(xa, xb));
            let j = rowSize * y + x1_ * 4;
            for (let x = x1_; x <= x2_; x++) {
              k = (xa - x) / (xa - xb);
              if (k < 0) {
                k = 0;
              } else if (k > 1) {
                k = 1;
              }
              bytes[j++] = car - (car - cbr) * k | 0;
              bytes[j++] = cag - (cag - cbg) * k | 0;
              bytes[j++] = cab - (cab - cbb) * k | 0;
              bytes[j++] = 255;
            }
          }
        }
        function drawFigure(data, figure, context) {
          const ps = figure.coords;
          const cs = figure.colors;
          let i, ii;
          switch (figure.type) {
            case "lattice":
              const verticesPerRow = figure.verticesPerRow;
              const rows = Math.floor(ps.length / verticesPerRow) - 1;
              const cols = verticesPerRow - 1;
              for (i = 0; i < rows; i++) {
                let q = i * verticesPerRow;
                for (let j = 0; j < cols; j++, q++) {
                  drawTriangle(data, context, ps[q], ps[q + 1], ps[q + verticesPerRow], cs[q], cs[q + 1], cs[q + verticesPerRow]);
                  drawTriangle(data, context, ps[q + verticesPerRow + 1], ps[q + 1], ps[q + verticesPerRow], cs[q + verticesPerRow + 1], cs[q + 1], cs[q + verticesPerRow]);
                }
              }
              break;
            case "triangles":
              for (i = 0, ii = ps.length; i < ii; i += 3) {
                drawTriangle(data, context, ps[i], ps[i + 1], ps[i + 2], cs[i], cs[i + 1], cs[i + 2]);
              }
              break;
            default:
              throw new Error("illegal figure");
          }
        }
        class MeshShadingPattern extends BaseShadingPattern {
          constructor(IR) {
            super();
            this._coords = IR[2];
            this._colors = IR[3];
            this._figures = IR[4];
            this._bounds = IR[5];
            this._bbox = IR[7];
            this._background = IR[8];
            this.matrix = null;
          }
          _createMeshCanvas(combinedScale, backgroundColor, cachedCanvases) {
            const EXPECTED_SCALE = 1.1;
            const MAX_PATTERN_SIZE = 3000;
            const BORDER_SIZE = 2;
            const offsetX = Math.floor(this._bounds[0]);
            const offsetY = Math.floor(this._bounds[1]);
            const boundsWidth = Math.ceil(this._bounds[2]) - offsetX;
            const boundsHeight = Math.ceil(this._bounds[3]) - offsetY;
            const width = Math.min(Math.ceil(Math.abs(boundsWidth * combinedScale[0] * EXPECTED_SCALE)), MAX_PATTERN_SIZE);
            const height = Math.min(Math.ceil(Math.abs(boundsHeight * combinedScale[1] * EXPECTED_SCALE)), MAX_PATTERN_SIZE);
            const scaleX = boundsWidth / width;
            const scaleY = boundsHeight / height;
            const context = {
              coords: this._coords,
              colors: this._colors,
              offsetX: -offsetX,
              offsetY: -offsetY,
              scaleX: 1 / scaleX,
              scaleY: 1 / scaleY
            };
            const paddedWidth = width + BORDER_SIZE * 2;
            const paddedHeight = height + BORDER_SIZE * 2;
            const tmpCanvas = cachedCanvases.getCanvas("mesh", paddedWidth, paddedHeight, false);
            const tmpCtx = tmpCanvas.context;
            const data = tmpCtx.createImageData(width, height);
            if (backgroundColor) {
              const bytes = data.data;
              for (let i = 0, ii = bytes.length; i < ii; i += 4) {
                bytes[i] = backgroundColor[0];
                bytes[i + 1] = backgroundColor[1];
                bytes[i + 2] = backgroundColor[2];
                bytes[i + 3] = 255;
              }
            }
            for (const figure of this._figures) {
              drawFigure(data, figure, context);
            }
            tmpCtx.putImageData(data, BORDER_SIZE, BORDER_SIZE);
            const canvas = tmpCanvas.canvas;
            return {
              canvas,
              offsetX: offsetX - BORDER_SIZE * scaleX,
              offsetY: offsetY - BORDER_SIZE * scaleY,
              scaleX,
              scaleY
            };
          }
          getPattern(ctx, owner, inverse, pathType) {
            applyBoundingBox(ctx, this._bbox);
            let scale;
            if (pathType === PathType.SHADING) {
              scale = _util.Util.singularValueDecompose2dScale((0, _display_utils.getCurrentTransform)(ctx));
            } else {
              scale = _util.Util.singularValueDecompose2dScale(owner.baseTransform);
              if (this.matrix) {
                const matrixScale = _util.Util.singularValueDecompose2dScale(this.matrix);
                scale = [scale[0] * matrixScale[0], scale[1] * matrixScale[1]];
              }
            }
            const temporaryPatternCanvas = this._createMeshCanvas(scale, pathType === PathType.SHADING ? null : this._background, owner.cachedCanvases);
            if (pathType !== PathType.SHADING) {
              ctx.setTransform(...owner.baseTransform);
              if (this.matrix) {
                ctx.transform(...this.matrix);
              }
            }
            ctx.translate(temporaryPatternCanvas.offsetX, temporaryPatternCanvas.offsetY);
            ctx.scale(temporaryPatternCanvas.scaleX, temporaryPatternCanvas.scaleY);
            return ctx.createPattern(temporaryPatternCanvas.canvas, "no-repeat");
          }
        }
        class DummyShadingPattern extends BaseShadingPattern {
          getPattern() {
            return "hotpink";
          }
        }
        function getShadingPattern(IR) {
          switch (IR[0]) {
            case "RadialAxial":
              return new RadialAxialShadingPattern(IR);
            case "Mesh":
              return new MeshShadingPattern(IR);
            case "Dummy":
              return new DummyShadingPattern();
          }
          throw new Error("Unknown IR type: ".concat(IR[0]));
        }
        const PaintType = {
          COLORED: 1,
          UNCOLORED: 2
        };
        class TilingPattern {
          constructor(IR, color, ctx, canvasGraphicsFactory, baseTransform) {
            this.operatorList = IR[2];
            this.matrix = IR[3] || [1, 0, 0, 1, 0, 0];
            this.bbox = IR[4];
            this.xstep = IR[5];
            this.ystep = IR[6];
            this.paintType = IR[7];
            this.tilingType = IR[8];
            this.color = color;
            this.ctx = ctx;
            this.canvasGraphicsFactory = canvasGraphicsFactory;
            this.baseTransform = baseTransform;
          }
          createPatternCanvas(owner) {
            const operatorList = this.operatorList;
            const bbox = this.bbox;
            const xstep = this.xstep;
            const ystep = this.ystep;
            const paintType = this.paintType;
            const tilingType = this.tilingType;
            const color = this.color;
            const canvasGraphicsFactory = this.canvasGraphicsFactory;
            (0, _util.info)("TilingType: " + tilingType);
            const x0 = bbox[0],
              y0 = bbox[1],
              x1 = bbox[2],
              y1 = bbox[3];
            const matrixScale = _util.Util.singularValueDecompose2dScale(this.matrix);
            const curMatrixScale = _util.Util.singularValueDecompose2dScale(this.baseTransform);
            const combinedScale = [matrixScale[0] * curMatrixScale[0], matrixScale[1] * curMatrixScale[1]];
            const dimx = this.getSizeAndScale(xstep, this.ctx.canvas.width, combinedScale[0]);
            const dimy = this.getSizeAndScale(ystep, this.ctx.canvas.height, combinedScale[1]);
            const tmpCanvas = owner.cachedCanvases.getCanvas("pattern", dimx.size, dimy.size, true);
            const tmpCtx = tmpCanvas.context;
            const graphics = canvasGraphicsFactory.createCanvasGraphics(tmpCtx);
            graphics.groupLevel = owner.groupLevel;
            this.setFillAndStrokeStyleToContext(graphics, paintType, color);
            let adjustedX0 = x0;
            let adjustedY0 = y0;
            let adjustedX1 = x1;
            let adjustedY1 = y1;
            if (x0 < 0) {
              adjustedX0 = 0;
              adjustedX1 += Math.abs(x0);
            }
            if (y0 < 0) {
              adjustedY0 = 0;
              adjustedY1 += Math.abs(y0);
            }
            tmpCtx.translate(-(dimx.scale * adjustedX0), -(dimy.scale * adjustedY0));
            graphics.transform(dimx.scale, 0, 0, dimy.scale, 0, 0);
            tmpCtx.save();
            this.clipBbox(graphics, adjustedX0, adjustedY0, adjustedX1, adjustedY1);
            graphics.baseTransform = (0, _display_utils.getCurrentTransform)(graphics.ctx);
            graphics.executeOperatorList(operatorList);
            graphics.endDrawing();
            return {
              canvas: tmpCanvas.canvas,
              scaleX: dimx.scale,
              scaleY: dimy.scale,
              offsetX: adjustedX0,
              offsetY: adjustedY0
            };
          }
          getSizeAndScale(step, realOutputSize, scale) {
            step = Math.abs(step);
            const maxSize = Math.max(TilingPattern.MAX_PATTERN_SIZE, realOutputSize);
            let size = Math.ceil(step * scale);
            if (size >= maxSize) {
              size = maxSize;
            } else {
              scale = size / step;
            }
            return {
              scale,
              size
            };
          }
          clipBbox(graphics, x0, y0, x1, y1) {
            const bboxWidth = x1 - x0;
            const bboxHeight = y1 - y0;
            graphics.ctx.rect(x0, y0, bboxWidth, bboxHeight);
            graphics.current.updateRectMinMax((0, _display_utils.getCurrentTransform)(graphics.ctx), [x0, y0, x1, y1]);
            graphics.clip();
            graphics.endPath();
          }
          setFillAndStrokeStyleToContext(graphics, paintType, color) {
            const context = graphics.ctx,
              current = graphics.current;
            switch (paintType) {
              case PaintType.COLORED:
                const ctx = this.ctx;
                context.fillStyle = ctx.fillStyle;
                context.strokeStyle = ctx.strokeStyle;
                current.fillColor = ctx.fillStyle;
                current.strokeColor = ctx.strokeStyle;
                break;
              case PaintType.UNCOLORED:
                const cssColor = _util.Util.makeHexColor(color[0], color[1], color[2]);
                context.fillStyle = cssColor;
                context.strokeStyle = cssColor;
                current.fillColor = cssColor;
                current.strokeColor = cssColor;
                break;
              default:
                throw new _util.FormatError("Unsupported paint type: ".concat(paintType));
            }
          }
          getPattern(ctx, owner, inverse, pathType) {
            let matrix = inverse;
            if (pathType !== PathType.SHADING) {
              matrix = _util.Util.transform(matrix, owner.baseTransform);
              if (this.matrix) {
                matrix = _util.Util.transform(matrix, this.matrix);
              }
            }
            const temporaryPatternCanvas = this.createPatternCanvas(owner);
            let domMatrix = new DOMMatrix(matrix);
            domMatrix = domMatrix.translate(temporaryPatternCanvas.offsetX, temporaryPatternCanvas.offsetY);
            domMatrix = domMatrix.scale(1 / temporaryPatternCanvas.scaleX, 1 / temporaryPatternCanvas.scaleY);
            const pattern = ctx.createPattern(temporaryPatternCanvas.canvas, "repeat");
            pattern.setTransform(domMatrix);
            return pattern;
          }
        }
        _defineProperty(TilingPattern, "MAX_PATTERN_SIZE", 3000);
        exports.TilingPattern = TilingPattern;

        /***/
      }, /* 13 */
      /***/(__unused_webpack_module, exports, __w_pdfjs_require__) => {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.convertBlackAndWhiteToRGBA = convertBlackAndWhiteToRGBA;
        exports.convertToRGBA = convertToRGBA;
        exports.grayToRGBA = grayToRGBA;
        var _util = __w_pdfjs_require__(1);
        function convertToRGBA(params) {
          switch (params.kind) {
            case _util.ImageKind.GRAYSCALE_1BPP:
              return convertBlackAndWhiteToRGBA(params);
            case _util.ImageKind.RGB_24BPP:
              return convertRGBToRGBA(params);
          }
          return null;
        }
        function convertBlackAndWhiteToRGBA(_ref30) {
          let {
            src,
            srcPos = 0,
            dest,
            width,
            height,
            nonBlackColor = 0xffffffff,
            inverseDecode = false
          } = _ref30;
          const black = _util.FeatureTest.isLittleEndian ? 0xff000000 : 0x000000ff;
          const [zeroMapping, oneMapping] = inverseDecode ? [nonBlackColor, black] : [black, nonBlackColor];
          const widthInSource = width >> 3;
          const widthRemainder = width & 7;
          const srcLength = src.length;
          dest = new Uint32Array(dest.buffer);
          let destPos = 0;
          for (let i = 0; i < height; i++) {
            for (const max = srcPos + widthInSource; srcPos < max; srcPos++) {
              const elem = srcPos < srcLength ? src[srcPos] : 255;
              dest[destPos++] = elem & 0b10000000 ? oneMapping : zeroMapping;
              dest[destPos++] = elem & 0b1000000 ? oneMapping : zeroMapping;
              dest[destPos++] = elem & 0b100000 ? oneMapping : zeroMapping;
              dest[destPos++] = elem & 0b10000 ? oneMapping : zeroMapping;
              dest[destPos++] = elem & 0b1000 ? oneMapping : zeroMapping;
              dest[destPos++] = elem & 0b100 ? oneMapping : zeroMapping;
              dest[destPos++] = elem & 0b10 ? oneMapping : zeroMapping;
              dest[destPos++] = elem & 0b1 ? oneMapping : zeroMapping;
            }
            if (widthRemainder === 0) {
              continue;
            }
            const elem = srcPos < srcLength ? src[srcPos++] : 255;
            for (let j = 0; j < widthRemainder; j++) {
              dest[destPos++] = elem & 1 << 7 - j ? oneMapping : zeroMapping;
            }
          }
          return {
            srcPos,
            destPos
          };
        }
        function convertRGBToRGBA(_ref31) {
          let {
            src,
            srcPos = 0,
            dest,
            destPos = 0,
            width,
            height
          } = _ref31;
          let i = 0;
          const len32 = src.length >> 2;
          const src32 = new Uint32Array(src.buffer, srcPos, len32);
          if (_util.FeatureTest.isLittleEndian) {
            for (; i < len32 - 2; i += 3, destPos += 4) {
              const s1 = src32[i];
              const s2 = src32[i + 1];
              const s3 = src32[i + 2];
              dest[destPos] = s1 | 0xff000000;
              dest[destPos + 1] = s1 >>> 24 | s2 << 8 | 0xff000000;
              dest[destPos + 2] = s2 >>> 16 | s3 << 16 | 0xff000000;
              dest[destPos + 3] = s3 >>> 8 | 0xff000000;
            }
            for (let j = i * 4, jj = src.length; j < jj; j += 3) {
              dest[destPos++] = src[j] | src[j + 1] << 8 | src[j + 2] << 16 | 0xff000000;
            }
          } else {
            for (; i < len32 - 2; i += 3, destPos += 4) {
              const s1 = src32[i];
              const s2 = src32[i + 1];
              const s3 = src32[i + 2];
              dest[destPos] = s1 | 0xff;
              dest[destPos + 1] = s1 << 24 | s2 >>> 8 | 0xff;
              dest[destPos + 2] = s2 << 16 | s3 >>> 16 | 0xff;
              dest[destPos + 3] = s3 << 8 | 0xff;
            }
            for (let j = i * 4, jj = src.length; j < jj; j += 3) {
              dest[destPos++] = src[j] << 24 | src[j + 1] << 16 | src[j + 2] << 8 | 0xff;
            }
          }
          return {
            srcPos,
            destPos
          };
        }
        function grayToRGBA(src, dest) {
          if (_util.FeatureTest.isLittleEndian) {
            for (let i = 0, ii = src.length; i < ii; i++) {
              dest[i] = src[i] * 0x10101 | 0xff000000;
            }
          } else {
            for (let i = 0, ii = src.length; i < ii; i++) {
              dest[i] = src[i] * 0x1010100 | 0x000000ff;
            }
          }
        }

        /***/
      }, /* 14 */
      /***/(__unused_webpack_module, exports) => {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.GlobalWorkerOptions = void 0;
        const GlobalWorkerOptions = Object.create(null);
        exports.GlobalWorkerOptions = GlobalWorkerOptions;
        GlobalWorkerOptions.workerPort = null;
        GlobalWorkerOptions.workerSrc = "";

        /***/
      }, /* 15 */
      /***/(__unused_webpack_module, exports, __w_pdfjs_require__) => {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.MessageHandler = void 0;
        var _util = __w_pdfjs_require__(1);
        const CallbackKind = {
          UNKNOWN: 0,
          DATA: 1,
          ERROR: 2
        };
        const StreamKind = {
          UNKNOWN: 0,
          CANCEL: 1,
          CANCEL_COMPLETE: 2,
          CLOSE: 3,
          ENQUEUE: 4,
          ERROR: 5,
          PULL: 6,
          PULL_COMPLETE: 7,
          START_COMPLETE: 8
        };
        function wrapReason(reason) {
          if (!(reason instanceof Error || typeof reason === "object" && reason !== null)) {
            (0, _util.unreachable)('wrapReason: Expected "reason" to be a (possibly cloned) Error.');
          }
          switch (reason.name) {
            case "AbortException":
              return new _util.AbortException(reason.message);
            case "MissingPDFException":
              return new _util.MissingPDFException(reason.message);
            case "PasswordException":
              return new _util.PasswordException(reason.message, reason.code);
            case "UnexpectedResponseException":
              return new _util.UnexpectedResponseException(reason.message, reason.status);
            case "UnknownErrorException":
              return new _util.UnknownErrorException(reason.message, reason.details);
            default:
              return new _util.UnknownErrorException(reason.message, reason.toString());
          }
        }
        var _createStreamSink = /*#__PURE__*/new WeakSet();
        var _processStreamMessage = /*#__PURE__*/new WeakSet();
        var _deleteStreamController = /*#__PURE__*/new WeakSet();
        class MessageHandler {
          constructor(_sourceName, _targetName, _comObj) {
            _classPrivateMethodInitSpec(this, _deleteStreamController);
            _classPrivateMethodInitSpec(this, _processStreamMessage);
            _classPrivateMethodInitSpec(this, _createStreamSink);
            this.sourceName = _sourceName;
            this.targetName = _targetName;
            this.comObj = _comObj;
            this.callbackId = 1;
            this.streamId = 1;
            this.streamSinks = Object.create(null);
            this.streamControllers = Object.create(null);
            this.callbackCapabilities = Object.create(null);
            this.actionHandler = Object.create(null);
            this._onComObjOnMessage = event => {
              const data = event.data;
              if (data.targetName !== this.sourceName) {
                return;
              }
              if (data.stream) {
                _classPrivateMethodGet(this, _processStreamMessage, _processStreamMessage2).call(this, data);
                return;
              }
              if (data.callback) {
                const callbackId = data.callbackId;
                const capability = this.callbackCapabilities[callbackId];
                if (!capability) {
                  throw new Error("Cannot resolve callback ".concat(callbackId));
                }
                delete this.callbackCapabilities[callbackId];
                if (data.callback === CallbackKind.DATA) {
                  capability.resolve(data.data);
                } else if (data.callback === CallbackKind.ERROR) {
                  capability.reject(wrapReason(data.reason));
                } else {
                  throw new Error("Unexpected callback case");
                }
                return;
              }
              const action = this.actionHandler[data.action];
              if (!action) {
                throw new Error("Unknown action from worker: ".concat(data.action));
              }
              if (data.callbackId) {
                const cbSourceName = this.sourceName;
                const cbTargetName = data.sourceName;
                new Promise(function (resolve) {
                  resolve(action(data.data));
                }).then(function (result) {
                  _comObj.postMessage({
                    sourceName: cbSourceName,
                    targetName: cbTargetName,
                    callback: CallbackKind.DATA,
                    callbackId: data.callbackId,
                    data: result
                  });
                }, function (reason) {
                  _comObj.postMessage({
                    sourceName: cbSourceName,
                    targetName: cbTargetName,
                    callback: CallbackKind.ERROR,
                    callbackId: data.callbackId,
                    reason: wrapReason(reason)
                  });
                });
                return;
              }
              if (data.streamId) {
                _classPrivateMethodGet(this, _createStreamSink, _createStreamSink2).call(this, data);
                return;
              }
              action(data.data);
            };
            _comObj.addEventListener("message", this._onComObjOnMessage);
          }
          on(actionName, handler) {
            const ah = this.actionHandler;
            if (ah[actionName]) {
              throw new Error("There is already an actionName called \"".concat(actionName, "\""));
            }
            ah[actionName] = handler;
          }
          send(actionName, data, transfers) {
            this.comObj.postMessage({
              sourceName: this.sourceName,
              targetName: this.targetName,
              action: actionName,
              data
            }, transfers);
          }
          sendWithPromise(actionName, data, transfers) {
            const callbackId = this.callbackId++;
            const capability = new _util.PromiseCapability();
            this.callbackCapabilities[callbackId] = capability;
            try {
              this.comObj.postMessage({
                sourceName: this.sourceName,
                targetName: this.targetName,
                action: actionName,
                callbackId,
                data
              }, transfers);
            } catch (ex) {
              capability.reject(ex);
            }
            return capability.promise;
          }
          sendWithStream(actionName, data, queueingStrategy, transfers) {
            const streamId = this.streamId++,
              sourceName = this.sourceName,
              targetName = this.targetName,
              comObj = this.comObj;
            return new ReadableStream({
              start: controller => {
                const startCapability = new _util.PromiseCapability();
                this.streamControllers[streamId] = {
                  controller,
                  startCall: startCapability,
                  pullCall: null,
                  cancelCall: null,
                  isClosed: false
                };
                comObj.postMessage({
                  sourceName,
                  targetName,
                  action: actionName,
                  streamId,
                  data,
                  desiredSize: controller.desiredSize
                }, transfers);
                return startCapability.promise;
              },
              pull: controller => {
                const pullCapability = new _util.PromiseCapability();
                this.streamControllers[streamId].pullCall = pullCapability;
                comObj.postMessage({
                  sourceName,
                  targetName,
                  stream: StreamKind.PULL,
                  streamId,
                  desiredSize: controller.desiredSize
                });
                return pullCapability.promise;
              },
              cancel: reason => {
                (0, _util.assert)(reason instanceof Error, "cancel must have a valid reason");
                const cancelCapability = new _util.PromiseCapability();
                this.streamControllers[streamId].cancelCall = cancelCapability;
                this.streamControllers[streamId].isClosed = true;
                comObj.postMessage({
                  sourceName,
                  targetName,
                  stream: StreamKind.CANCEL,
                  streamId,
                  reason: wrapReason(reason)
                });
                return cancelCapability.promise;
              }
            }, queueingStrategy);
          }
          destroy() {
            this.comObj.removeEventListener("message", this._onComObjOnMessage);
          }
        }
        function _createStreamSink2(data) {
          const streamId = data.streamId,
            sourceName = this.sourceName,
            targetName = data.sourceName,
            comObj = this.comObj;
          const self = this,
            action = this.actionHandler[data.action];
          const streamSink = {
            enqueue(chunk) {
              let size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
              let transfers = arguments.length > 2 ? arguments[2] : undefined;
              if (this.isCancelled) {
                return;
              }
              const lastDesiredSize = this.desiredSize;
              this.desiredSize -= size;
              if (lastDesiredSize > 0 && this.desiredSize <= 0) {
                this.sinkCapability = new _util.PromiseCapability();
                this.ready = this.sinkCapability.promise;
              }
              comObj.postMessage({
                sourceName,
                targetName,
                stream: StreamKind.ENQUEUE,
                streamId,
                chunk
              }, transfers);
            },
            close() {
              if (this.isCancelled) {
                return;
              }
              this.isCancelled = true;
              comObj.postMessage({
                sourceName,
                targetName,
                stream: StreamKind.CLOSE,
                streamId
              });
              delete self.streamSinks[streamId];
            },
            error(reason) {
              (0, _util.assert)(reason instanceof Error, "error must have a valid reason");
              if (this.isCancelled) {
                return;
              }
              this.isCancelled = true;
              comObj.postMessage({
                sourceName,
                targetName,
                stream: StreamKind.ERROR,
                streamId,
                reason: wrapReason(reason)
              });
            },
            sinkCapability: new _util.PromiseCapability(),
            onPull: null,
            onCancel: null,
            isCancelled: false,
            desiredSize: data.desiredSize,
            ready: null
          };
          streamSink.sinkCapability.resolve();
          streamSink.ready = streamSink.sinkCapability.promise;
          this.streamSinks[streamId] = streamSink;
          new Promise(function (resolve) {
            resolve(action(data.data, streamSink));
          }).then(function () {
            comObj.postMessage({
              sourceName,
              targetName,
              stream: StreamKind.START_COMPLETE,
              streamId,
              success: true
            });
          }, function (reason) {
            comObj.postMessage({
              sourceName,
              targetName,
              stream: StreamKind.START_COMPLETE,
              streamId,
              reason: wrapReason(reason)
            });
          });
        }
        function _processStreamMessage2(data) {
          const streamId = data.streamId,
            sourceName = this.sourceName,
            targetName = data.sourceName,
            comObj = this.comObj;
          const streamController = this.streamControllers[streamId],
            streamSink = this.streamSinks[streamId];
          switch (data.stream) {
            case StreamKind.START_COMPLETE:
              if (data.success) {
                streamController.startCall.resolve();
              } else {
                streamController.startCall.reject(wrapReason(data.reason));
              }
              break;
            case StreamKind.PULL_COMPLETE:
              if (data.success) {
                streamController.pullCall.resolve();
              } else {
                streamController.pullCall.reject(wrapReason(data.reason));
              }
              break;
            case StreamKind.PULL:
              if (!streamSink) {
                comObj.postMessage({
                  sourceName,
                  targetName,
                  stream: StreamKind.PULL_COMPLETE,
                  streamId,
                  success: true
                });
                break;
              }
              if (streamSink.desiredSize <= 0 && data.desiredSize > 0) {
                streamSink.sinkCapability.resolve();
              }
              streamSink.desiredSize = data.desiredSize;
              new Promise(function (resolve) {
                var _streamSink$onPull;
                resolve((_streamSink$onPull = streamSink.onPull) === null || _streamSink$onPull === void 0 ? void 0 : _streamSink$onPull.call(streamSink));
              }).then(function () {
                comObj.postMessage({
                  sourceName,
                  targetName,
                  stream: StreamKind.PULL_COMPLETE,
                  streamId,
                  success: true
                });
              }, function (reason) {
                comObj.postMessage({
                  sourceName,
                  targetName,
                  stream: StreamKind.PULL_COMPLETE,
                  streamId,
                  reason: wrapReason(reason)
                });
              });
              break;
            case StreamKind.ENQUEUE:
              (0, _util.assert)(streamController, "enqueue should have stream controller");
              if (streamController.isClosed) {
                break;
              }
              streamController.controller.enqueue(data.chunk);
              break;
            case StreamKind.CLOSE:
              (0, _util.assert)(streamController, "close should have stream controller");
              if (streamController.isClosed) {
                break;
              }
              streamController.isClosed = true;
              streamController.controller.close();
              _classPrivateMethodGet(this, _deleteStreamController, _deleteStreamController2).call(this, streamController, streamId);
              break;
            case StreamKind.ERROR:
              (0, _util.assert)(streamController, "error should have stream controller");
              streamController.controller.error(wrapReason(data.reason));
              _classPrivateMethodGet(this, _deleteStreamController, _deleteStreamController2).call(this, streamController, streamId);
              break;
            case StreamKind.CANCEL_COMPLETE:
              if (data.success) {
                streamController.cancelCall.resolve();
              } else {
                streamController.cancelCall.reject(wrapReason(data.reason));
              }
              _classPrivateMethodGet(this, _deleteStreamController, _deleteStreamController2).call(this, streamController, streamId);
              break;
            case StreamKind.CANCEL:
              if (!streamSink) {
                break;
              }
              new Promise(function (resolve) {
                var _streamSink$onCancel;
                resolve((_streamSink$onCancel = streamSink.onCancel) === null || _streamSink$onCancel === void 0 ? void 0 : _streamSink$onCancel.call(streamSink, wrapReason(data.reason)));
              }).then(function () {
                comObj.postMessage({
                  sourceName,
                  targetName,
                  stream: StreamKind.CANCEL_COMPLETE,
                  streamId,
                  success: true
                });
              }, function (reason) {
                comObj.postMessage({
                  sourceName,
                  targetName,
                  stream: StreamKind.CANCEL_COMPLETE,
                  streamId,
                  reason: wrapReason(reason)
                });
              });
              streamSink.sinkCapability.reject(wrapReason(data.reason));
              streamSink.isCancelled = true;
              delete this.streamSinks[streamId];
              break;
            default:
              throw new Error("Unexpected stream case");
          }
        }
        async function _deleteStreamController2(streamController, streamId) {
          var _streamController$sta, _streamController$pul, _streamController$can;
          await Promise.allSettled([(_streamController$sta = streamController.startCall) === null || _streamController$sta === void 0 ? void 0 : _streamController$sta.promise, (_streamController$pul = streamController.pullCall) === null || _streamController$pul === void 0 ? void 0 : _streamController$pul.promise, (_streamController$can = streamController.cancelCall) === null || _streamController$can === void 0 ? void 0 : _streamController$can.promise]);
          delete this.streamControllers[streamId];
        }
        exports.MessageHandler = MessageHandler;

        /***/
      }, /* 16 */
      /***/(__unused_webpack_module, exports, __w_pdfjs_require__) => {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.Metadata = void 0;
        var _util = __w_pdfjs_require__(1);
        var _metadataMap = /*#__PURE__*/new WeakMap();
        var _data = /*#__PURE__*/new WeakMap();
        class Metadata {
          constructor(_ref32) {
            let {
              parsedData,
              rawData
            } = _ref32;
            _classPrivateFieldInitSpec(this, _metadataMap, {
              writable: true,
              value: void 0
            });
            _classPrivateFieldInitSpec(this, _data, {
              writable: true,
              value: void 0
            });
            _classPrivateFieldSet(this, _metadataMap, parsedData);
            _classPrivateFieldSet(this, _data, rawData);
          }
          getRaw() {
            return _classPrivateFieldGet(this, _data);
          }
          get(name) {
            var _classPrivateFieldGet5;
            return (_classPrivateFieldGet5 = _classPrivateFieldGet(this, _metadataMap).get(name)) !== null && _classPrivateFieldGet5 !== void 0 ? _classPrivateFieldGet5 : null;
          }
          getAll() {
            return (0, _util.objectFromMap)(_classPrivateFieldGet(this, _metadataMap));
          }
          has(name) {
            return _classPrivateFieldGet(this, _metadataMap).has(name);
          }
        }
        exports.Metadata = Metadata;

        /***/
      }, /* 17 */
      /***/(__unused_webpack_module, exports, __w_pdfjs_require__) => {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.OptionalContentConfig = void 0;
        var _util = __w_pdfjs_require__(1);
        var _murmurhash = __w_pdfjs_require__(8);
        const INTERNAL = Symbol("INTERNAL");
        var _visible = /*#__PURE__*/new WeakMap();
        class OptionalContentGroup {
          constructor(name, intent) {
            _classPrivateFieldInitSpec(this, _visible, {
              writable: true,
              value: true
            });
            this.name = name;
            this.intent = intent;
          }
          get visible() {
            return _classPrivateFieldGet(this, _visible);
          }
          _setVisible(internal, visible) {
            if (internal !== INTERNAL) {
              (0, _util.unreachable)("Internal method `_setVisible` called.");
            }
            _classPrivateFieldSet(this, _visible, visible);
          }
        }
        var _cachedGetHash = /*#__PURE__*/new WeakMap();
        var _groups = /*#__PURE__*/new WeakMap();
        var _initialHash = /*#__PURE__*/new WeakMap();
        var _order = /*#__PURE__*/new WeakMap();
        var _evaluateVisibilityExpression = /*#__PURE__*/new WeakSet();
        class OptionalContentConfig {
          constructor(data) {
            _classPrivateMethodInitSpec(this, _evaluateVisibilityExpression);
            _classPrivateFieldInitSpec(this, _cachedGetHash, {
              writable: true,
              value: null
            });
            _classPrivateFieldInitSpec(this, _groups, {
              writable: true,
              value: new Map()
            });
            _classPrivateFieldInitSpec(this, _initialHash, {
              writable: true,
              value: null
            });
            _classPrivateFieldInitSpec(this, _order, {
              writable: true,
              value: null
            });
            this.name = null;
            this.creator = null;
            if (data === null) {
              return;
            }
            this.name = data.name;
            this.creator = data.creator;
            _classPrivateFieldSet(this, _order, data.order);
            for (const group of data.groups) {
              _classPrivateFieldGet(this, _groups).set(group.id, new OptionalContentGroup(group.name, group.intent));
            }
            if (data.baseState === "OFF") {
              for (const group of _classPrivateFieldGet(this, _groups).values()) {
                group._setVisible(INTERNAL, false);
              }
            }
            for (const on of data.on) {
              _classPrivateFieldGet(this, _groups).get(on)._setVisible(INTERNAL, true);
            }
            for (const off of data.off) {
              _classPrivateFieldGet(this, _groups).get(off)._setVisible(INTERNAL, false);
            }
            _classPrivateFieldSet(this, _initialHash, this.getHash());
          }
          isVisible(group) {
            if (_classPrivateFieldGet(this, _groups).size === 0) {
              return true;
            }
            if (!group) {
              (0, _util.warn)("Optional content group not defined.");
              return true;
            }
            if (group.type === "OCG") {
              if (!_classPrivateFieldGet(this, _groups).has(group.id)) {
                (0, _util.warn)("Optional content group not found: ".concat(group.id));
                return true;
              }
              return _classPrivateFieldGet(this, _groups).get(group.id).visible;
            } else if (group.type === "OCMD") {
              if (group.expression) {
                return _classPrivateMethodGet(this, _evaluateVisibilityExpression, _evaluateVisibilityExpression2).call(this, group.expression);
              }
              if (!group.policy || group.policy === "AnyOn") {
                for (const id of group.ids) {
                  if (!_classPrivateFieldGet(this, _groups).has(id)) {
                    (0, _util.warn)("Optional content group not found: ".concat(id));
                    return true;
                  }
                  if (_classPrivateFieldGet(this, _groups).get(id).visible) {
                    return true;
                  }
                }
                return false;
              } else if (group.policy === "AllOn") {
                for (const id of group.ids) {
                  if (!_classPrivateFieldGet(this, _groups).has(id)) {
                    (0, _util.warn)("Optional content group not found: ".concat(id));
                    return true;
                  }
                  if (!_classPrivateFieldGet(this, _groups).get(id).visible) {
                    return false;
                  }
                }
                return true;
              } else if (group.policy === "AnyOff") {
                for (const id of group.ids) {
                  if (!_classPrivateFieldGet(this, _groups).has(id)) {
                    (0, _util.warn)("Optional content group not found: ".concat(id));
                    return true;
                  }
                  if (!_classPrivateFieldGet(this, _groups).get(id).visible) {
                    return true;
                  }
                }
                return false;
              } else if (group.policy === "AllOff") {
                for (const id of group.ids) {
                  if (!_classPrivateFieldGet(this, _groups).has(id)) {
                    (0, _util.warn)("Optional content group not found: ".concat(id));
                    return true;
                  }
                  if (_classPrivateFieldGet(this, _groups).get(id).visible) {
                    return false;
                  }
                }
                return true;
              }
              (0, _util.warn)("Unknown optional content policy ".concat(group.policy, "."));
              return true;
            }
            (0, _util.warn)("Unknown group type ".concat(group.type, "."));
            return true;
          }
          setVisibility(id) {
            let visible = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            if (!_classPrivateFieldGet(this, _groups).has(id)) {
              (0, _util.warn)("Optional content group not found: ".concat(id));
              return;
            }
            _classPrivateFieldGet(this, _groups).get(id)._setVisible(INTERNAL, !!visible);
            _classPrivateFieldSet(this, _cachedGetHash, null);
          }
          get hasInitialVisibility() {
            return this.getHash() === _classPrivateFieldGet(this, _initialHash);
          }
          getOrder() {
            if (!_classPrivateFieldGet(this, _groups).size) {
              return null;
            }
            if (_classPrivateFieldGet(this, _order)) {
              return _classPrivateFieldGet(this, _order).slice();
            }
            return [..._classPrivateFieldGet(this, _groups).keys()];
          }
          getGroups() {
            return _classPrivateFieldGet(this, _groups).size > 0 ? (0, _util.objectFromMap)(_classPrivateFieldGet(this, _groups)) : null;
          }
          getGroup(id) {
            return _classPrivateFieldGet(this, _groups).get(id) || null;
          }
          getHash() {
            if (_classPrivateFieldGet(this, _cachedGetHash) !== null) {
              return _classPrivateFieldGet(this, _cachedGetHash);
            }
            const hash = new _murmurhash.MurmurHash3_64();
            for (const [id, group] of _classPrivateFieldGet(this, _groups)) {
              hash.update("".concat(id, ":").concat(group.visible));
            }
            return _classPrivateFieldSet(this, _cachedGetHash, hash.hexdigest());
          }
        }
        function _evaluateVisibilityExpression2(array) {
          const length = array.length;
          if (length < 2) {
            return true;
          }
          const operator = array[0];
          for (let i = 1; i < length; i++) {
            const element = array[i];
            let state;
            if (Array.isArray(element)) {
              state = _classPrivateMethodGet(this, _evaluateVisibilityExpression, _evaluateVisibilityExpression2).call(this, element);
            } else if (_classPrivateFieldGet(this, _groups).has(element)) {
              state = _classPrivateFieldGet(this, _groups).get(element).visible;
            } else {
              (0, _util.warn)("Optional content group not found: ".concat(element));
              return true;
            }
            switch (operator) {
              case "And":
                if (!state) {
                  return false;
                }
                break;
              case "Or":
                if (state) {
                  return true;
                }
                break;
              case "Not":
                return !state;
              default:
                return true;
            }
          }
          return operator === "And";
        }
        exports.OptionalContentConfig = OptionalContentConfig;

        /***/
      }, /* 18 */
      /***/(__unused_webpack_module, exports, __w_pdfjs_require__) => {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.PDFDataTransportStream = void 0;
        var _util = __w_pdfjs_require__(1);
        var _display_utils = __w_pdfjs_require__(6);
        class PDFDataTransportStream {
          constructor(_ref33, pdfDataRangeTransport) {
            let {
              length,
              initialData,
              progressiveDone = false,
              contentDispositionFilename = null,
              disableRange = false,
              disableStream = false
            } = _ref33;
            (0, _util.assert)(pdfDataRangeTransport, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
            this._queuedChunks = [];
            this._progressiveDone = progressiveDone;
            this._contentDispositionFilename = contentDispositionFilename;
            if ((initialData === null || initialData === void 0 ? void 0 : initialData.length) > 0) {
              const buffer = initialData instanceof Uint8Array && initialData.byteLength === initialData.buffer.byteLength ? initialData.buffer : new Uint8Array(initialData).buffer;
              this._queuedChunks.push(buffer);
            }
            this._pdfDataRangeTransport = pdfDataRangeTransport;
            this._isStreamingSupported = !disableStream;
            this._isRangeSupported = !disableRange;
            this._contentLength = length;
            this._fullRequestReader = null;
            this._rangeReaders = [];
            this._pdfDataRangeTransport.addRangeListener((begin, chunk) => {
              this._onReceiveData({
                begin,
                chunk
              });
            });
            this._pdfDataRangeTransport.addProgressListener((loaded, total) => {
              this._onProgress({
                loaded,
                total
              });
            });
            this._pdfDataRangeTransport.addProgressiveReadListener(chunk => {
              this._onReceiveData({
                chunk
              });
            });
            this._pdfDataRangeTransport.addProgressiveDoneListener(() => {
              this._onProgressiveDone();
            });
            this._pdfDataRangeTransport.transportReady();
          }
          _onReceiveData(_ref34) {
            let {
              begin,
              chunk
            } = _ref34;
            const buffer = chunk instanceof Uint8Array && chunk.byteLength === chunk.buffer.byteLength ? chunk.buffer : new Uint8Array(chunk).buffer;
            if (begin === undefined) {
              if (this._fullRequestReader) {
                this._fullRequestReader._enqueue(buffer);
              } else {
                this._queuedChunks.push(buffer);
              }
            } else {
              const found = this._rangeReaders.some(function (rangeReader) {
                if (rangeReader._begin !== begin) {
                  return false;
                }
                rangeReader._enqueue(buffer);
                return true;
              });
              (0, _util.assert)(found, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
            }
          }
          get _progressiveDataLength() {
            var _this$_fullRequestRea, _this$_fullRequestRea2;
            return (_this$_fullRequestRea = (_this$_fullRequestRea2 = this._fullRequestReader) === null || _this$_fullRequestRea2 === void 0 ? void 0 : _this$_fullRequestRea2._loaded) !== null && _this$_fullRequestRea !== void 0 ? _this$_fullRequestRea : 0;
          }
          _onProgress(evt) {
            if (evt.total === undefined) {
              var _this$_rangeReaders$, _this$_rangeReaders$$;
              (_this$_rangeReaders$ = this._rangeReaders[0]) === null || _this$_rangeReaders$ === void 0 || (_this$_rangeReaders$$ = _this$_rangeReaders$.onProgress) === null || _this$_rangeReaders$$ === void 0 || _this$_rangeReaders$$.call(_this$_rangeReaders$, {
                loaded: evt.loaded
              });
            } else {
              var _this$_fullRequestRea3, _this$_fullRequestRea4;
              (_this$_fullRequestRea3 = this._fullRequestReader) === null || _this$_fullRequestRea3 === void 0 || (_this$_fullRequestRea4 = _this$_fullRequestRea3.onProgress) === null || _this$_fullRequestRea4 === void 0 || _this$_fullRequestRea4.call(_this$_fullRequestRea3, {
                loaded: evt.loaded,
                total: evt.total
              });
            }
          }
          _onProgressiveDone() {
            var _this$_fullRequestRea5;
            (_this$_fullRequestRea5 = this._fullRequestReader) === null || _this$_fullRequestRea5 === void 0 || _this$_fullRequestRea5.progressiveDone();
            this._progressiveDone = true;
          }
          _removeRangeReader(reader) {
            const i = this._rangeReaders.indexOf(reader);
            if (i >= 0) {
              this._rangeReaders.splice(i, 1);
            }
          }
          getFullReader() {
            (0, _util.assert)(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
            const queuedChunks = this._queuedChunks;
            this._queuedChunks = null;
            return new PDFDataTransportStreamReader(this, queuedChunks, this._progressiveDone, this._contentDispositionFilename);
          }
          getRangeReader(begin, end) {
            if (end <= this._progressiveDataLength) {
              return null;
            }
            const reader = new PDFDataTransportStreamRangeReader(this, begin, end);
            this._pdfDataRangeTransport.requestDataRange(begin, end);
            this._rangeReaders.push(reader);
            return reader;
          }
          cancelAllRequests(reason) {
            var _this$_fullRequestRea6;
            (_this$_fullRequestRea6 = this._fullRequestReader) === null || _this$_fullRequestRea6 === void 0 || _this$_fullRequestRea6.cancel(reason);
            for (const reader of this._rangeReaders.slice(0)) {
              reader.cancel(reason);
            }
            this._pdfDataRangeTransport.abort();
          }
        }
        exports.PDFDataTransportStream = PDFDataTransportStream;
        class PDFDataTransportStreamReader {
          constructor(stream, queuedChunks) {
            let progressiveDone = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            let contentDispositionFilename = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            this._stream = stream;
            this._done = progressiveDone || false;
            this._filename = (0, _display_utils.isPdfFile)(contentDispositionFilename) ? contentDispositionFilename : null;
            this._queuedChunks = queuedChunks || [];
            this._loaded = 0;
            for (const chunk of this._queuedChunks) {
              this._loaded += chunk.byteLength;
            }
            this._requests = [];
            this._headersReady = Promise.resolve();
            stream._fullRequestReader = this;
            this.onProgress = null;
          }
          _enqueue(chunk) {
            if (this._done) {
              return;
            }
            if (this._requests.length > 0) {
              const requestCapability = this._requests.shift();
              requestCapability.resolve({
                value: chunk,
                done: false
              });
            } else {
              this._queuedChunks.push(chunk);
            }
            this._loaded += chunk.byteLength;
          }
          get headersReady() {
            return this._headersReady;
          }
          get filename() {
            return this._filename;
          }
          get isRangeSupported() {
            return this._stream._isRangeSupported;
          }
          get isStreamingSupported() {
            return this._stream._isStreamingSupported;
          }
          get contentLength() {
            return this._stream._contentLength;
          }
          async read() {
            if (this._queuedChunks.length > 0) {
              const chunk = this._queuedChunks.shift();
              return {
                value: chunk,
                done: false
              };
            }
            if (this._done) {
              return {
                value: undefined,
                done: true
              };
            }
            const requestCapability = new _util.PromiseCapability();
            this._requests.push(requestCapability);
            return requestCapability.promise;
          }
          cancel(reason) {
            this._done = true;
            for (const requestCapability of this._requests) {
              requestCapability.resolve({
                value: undefined,
                done: true
              });
            }
            this._requests.length = 0;
          }
          progressiveDone() {
            if (this._done) {
              return;
            }
            this._done = true;
          }
        }
        class PDFDataTransportStreamRangeReader {
          constructor(stream, begin, end) {
            this._stream = stream;
            this._begin = begin;
            this._end = end;
            this._queuedChunk = null;
            this._requests = [];
            this._done = false;
            this.onProgress = null;
          }
          _enqueue(chunk) {
            if (this._done) {
              return;
            }
            if (this._requests.length === 0) {
              this._queuedChunk = chunk;
            } else {
              const requestsCapability = this._requests.shift();
              requestsCapability.resolve({
                value: chunk,
                done: false
              });
              for (const requestCapability of this._requests) {
                requestCapability.resolve({
                  value: undefined,
                  done: true
                });
              }
              this._requests.length = 0;
            }
            this._done = true;
            this._stream._removeRangeReader(this);
          }
          get isStreamingSupported() {
            return false;
          }
          async read() {
            if (this._queuedChunk) {
              const chunk = this._queuedChunk;
              this._queuedChunk = null;
              return {
                value: chunk,
                done: false
              };
            }
            if (this._done) {
              return {
                value: undefined,
                done: true
              };
            }
            const requestCapability = new _util.PromiseCapability();
            this._requests.push(requestCapability);
            return requestCapability.promise;
          }
          cancel(reason) {
            this._done = true;
            for (const requestCapability of this._requests) {
              requestCapability.resolve({
                value: undefined,
                done: true
              });
            }
            this._requests.length = 0;
            this._stream._removeRangeReader(this);
          }
        }

        /***/
      }, /* 19 */
      /***/(__unused_webpack_module, exports) => {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.XfaText = void 0;
        class XfaText {
          static textContent(xfa) {
            const items = [];
            const output = {
              items,
              styles: Object.create(null)
            };
            function walk(node) {
              var _node$attributes;
              if (!node) {
                return;
              }
              let str = null;
              const name = node.name;
              if (name === "#text") {
                str = node.value;
              } else if (!XfaText.shouldBuildText(name)) {
                return;
              } else if (node !== null && node !== void 0 && (_node$attributes = node.attributes) !== null && _node$attributes !== void 0 && _node$attributes.textContent) {
                str = node.attributes.textContent;
              } else if (node.value) {
                str = node.value;
              }
              if (str !== null) {
                items.push({
                  str
                });
              }
              if (!node.children) {
                return;
              }
              for (const child of node.children) {
                walk(child);
              }
            }
            walk(xfa);
            return output;
          }
          static shouldBuildText(name) {
            return !(name === "textarea" || name === "input" || name === "option" || name === "select");
          }
        }
        exports.XfaText = XfaText;

        /***/
      }, /* 20 */
      /***/(__unused_webpack_module, exports, __w_pdfjs_require__) => {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.NodeStandardFontDataFactory = exports.NodeFilterFactory = exports.NodeCanvasFactory = exports.NodeCMapReaderFactory = void 0;
        var _base_factory = __w_pdfjs_require__(7);
        ;
        const fetchData = function (url) {
          return new Promise((resolve, reject) => {
            const fs = __webpack_require__(45618);
            fs.readFile(url, (error, data) => {
              if (error || !data) {
                reject(new Error(error));
                return;
              }
              resolve(new Uint8Array(data));
            });
          });
        };
        class NodeFilterFactory extends _base_factory.BaseFilterFactory {}
        exports.NodeFilterFactory = NodeFilterFactory;
        class NodeCanvasFactory extends _base_factory.BaseCanvasFactory {
          _createCanvas(width, height) {
            const Canvas = __webpack_require__(17640);
            return Canvas.createCanvas(width, height);
          }
        }
        exports.NodeCanvasFactory = NodeCanvasFactory;
        class NodeCMapReaderFactory extends _base_factory.BaseCMapReaderFactory {
          _fetchData(url, compressionType) {
            return fetchData(url).then(data => {
              return {
                cMapData: data,
                compressionType
              };
            });
          }
        }
        exports.NodeCMapReaderFactory = NodeCMapReaderFactory;
        class NodeStandardFontDataFactory extends _base_factory.BaseStandardFontDataFactory {
          _fetchData(url) {
            return fetchData(url);
          }
        }
        exports.NodeStandardFontDataFactory = NodeStandardFontDataFactory;

        /***/
      }, /* 21 */
      /***/(__unused_webpack_module, exports, __w_pdfjs_require__) => {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.PDFNodeStream = void 0;
        var _util = __w_pdfjs_require__(1);
        var _network_utils = __w_pdfjs_require__(22);
        ;
        const fs = __webpack_require__(45618);
        const http = __webpack_require__(97492);
        const https = __webpack_require__(31815);
        const url = __webpack_require__(89052);
        const fileUriRegex = /^file:\/\/\/[a-zA-Z]:\//;
        function parseUrl(sourceUrl) {
          const parsedUrl = url.parse(sourceUrl);
          if (parsedUrl.protocol === "file:" || parsedUrl.host) {
            return parsedUrl;
          }
          if (/^[a-z]:[/\\]/i.test(sourceUrl)) {
            return url.parse("file:///".concat(sourceUrl));
          }
          if (!parsedUrl.host) {
            parsedUrl.protocol = "file:";
          }
          return parsedUrl;
        }
        class PDFNodeStream {
          constructor(source) {
            this.source = source;
            this.url = parseUrl(source.url);
            this.isHttp = this.url.protocol === "http:" || this.url.protocol === "https:";
            this.isFsUrl = this.url.protocol === "file:";
            this.httpHeaders = this.isHttp && source.httpHeaders || {};
            this._fullRequestReader = null;
            this._rangeRequestReaders = [];
          }
          get _progressiveDataLength() {
            var _this$_fullRequestRea7, _this$_fullRequestRea8;
            return (_this$_fullRequestRea7 = (_this$_fullRequestRea8 = this._fullRequestReader) === null || _this$_fullRequestRea8 === void 0 ? void 0 : _this$_fullRequestRea8._loaded) !== null && _this$_fullRequestRea7 !== void 0 ? _this$_fullRequestRea7 : 0;
          }
          getFullReader() {
            (0, _util.assert)(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once.");
            this._fullRequestReader = this.isFsUrl ? new PDFNodeStreamFsFullReader(this) : new PDFNodeStreamFullReader(this);
            return this._fullRequestReader;
          }
          getRangeReader(start, end) {
            if (end <= this._progressiveDataLength) {
              return null;
            }
            const rangeReader = this.isFsUrl ? new PDFNodeStreamFsRangeReader(this, start, end) : new PDFNodeStreamRangeReader(this, start, end);
            this._rangeRequestReaders.push(rangeReader);
            return rangeReader;
          }
          cancelAllRequests(reason) {
            var _this$_fullRequestRea9;
            (_this$_fullRequestRea9 = this._fullRequestReader) === null || _this$_fullRequestRea9 === void 0 || _this$_fullRequestRea9.cancel(reason);
            for (const reader of this._rangeRequestReaders.slice(0)) {
              reader.cancel(reason);
            }
          }
        }
        exports.PDFNodeStream = PDFNodeStream;
        class BaseFullReader {
          constructor(stream) {
            this._url = stream.url;
            this._done = false;
            this._storedError = null;
            this.onProgress = null;
            const source = stream.source;
            this._contentLength = source.length;
            this._loaded = 0;
            this._filename = null;
            this._disableRange = source.disableRange || false;
            this._rangeChunkSize = source.rangeChunkSize;
            if (!this._rangeChunkSize && !this._disableRange) {
              this._disableRange = true;
            }
            this._isStreamingSupported = !source.disableStream;
            this._isRangeSupported = !source.disableRange;
            this._readableStream = null;
            this._readCapability = new _util.PromiseCapability();
            this._headersCapability = new _util.PromiseCapability();
          }
          get headersReady() {
            return this._headersCapability.promise;
          }
          get filename() {
            return this._filename;
          }
          get contentLength() {
            return this._contentLength;
          }
          get isRangeSupported() {
            return this._isRangeSupported;
          }
          get isStreamingSupported() {
            return this._isStreamingSupported;
          }
          async read() {
            var _this$onProgress;
            await this._readCapability.promise;
            if (this._done) {
              return {
                value: undefined,
                done: true
              };
            }
            if (this._storedError) {
              throw this._storedError;
            }
            const chunk = this._readableStream.read();
            if (chunk === null) {
              this._readCapability = new _util.PromiseCapability();
              return this.read();
            }
            this._loaded += chunk.length;
            (_this$onProgress = this.onProgress) === null || _this$onProgress === void 0 || _this$onProgress.call(this, {
              loaded: this._loaded,
              total: this._contentLength
            });
            const buffer = new Uint8Array(chunk).buffer;
            return {
              value: buffer,
              done: false
            };
          }
          cancel(reason) {
            if (!this._readableStream) {
              this._error(reason);
              return;
            }
            this._readableStream.destroy(reason);
          }
          _error(reason) {
            this._storedError = reason;
            this._readCapability.resolve();
          }
          _setReadableStream(readableStream) {
            this._readableStream = readableStream;
            readableStream.on("readable", () => {
              this._readCapability.resolve();
            });
            readableStream.on("end", () => {
              readableStream.destroy();
              this._done = true;
              this._readCapability.resolve();
            });
            readableStream.on("error", reason => {
              this._error(reason);
            });
            if (!this._isStreamingSupported && this._isRangeSupported) {
              this._error(new _util.AbortException("streaming is disabled"));
            }
            if (this._storedError) {
              this._readableStream.destroy(this._storedError);
            }
          }
        }
        class BaseRangeReader {
          constructor(stream) {
            this._url = stream.url;
            this._done = false;
            this._storedError = null;
            this.onProgress = null;
            this._loaded = 0;
            this._readableStream = null;
            this._readCapability = new _util.PromiseCapability();
            const source = stream.source;
            this._isStreamingSupported = !source.disableStream;
          }
          get isStreamingSupported() {
            return this._isStreamingSupported;
          }
          async read() {
            var _this$onProgress2;
            await this._readCapability.promise;
            if (this._done) {
              return {
                value: undefined,
                done: true
              };
            }
            if (this._storedError) {
              throw this._storedError;
            }
            const chunk = this._readableStream.read();
            if (chunk === null) {
              this._readCapability = new _util.PromiseCapability();
              return this.read();
            }
            this._loaded += chunk.length;
            (_this$onProgress2 = this.onProgress) === null || _this$onProgress2 === void 0 || _this$onProgress2.call(this, {
              loaded: this._loaded
            });
            const buffer = new Uint8Array(chunk).buffer;
            return {
              value: buffer,
              done: false
            };
          }
          cancel(reason) {
            if (!this._readableStream) {
              this._error(reason);
              return;
            }
            this._readableStream.destroy(reason);
          }
          _error(reason) {
            this._storedError = reason;
            this._readCapability.resolve();
          }
          _setReadableStream(readableStream) {
            this._readableStream = readableStream;
            readableStream.on("readable", () => {
              this._readCapability.resolve();
            });
            readableStream.on("end", () => {
              readableStream.destroy();
              this._done = true;
              this._readCapability.resolve();
            });
            readableStream.on("error", reason => {
              this._error(reason);
            });
            if (this._storedError) {
              this._readableStream.destroy(this._storedError);
            }
          }
        }
        function createRequestOptions(parsedUrl, headers) {
          return {
            protocol: parsedUrl.protocol,
            auth: parsedUrl.auth,
            host: parsedUrl.hostname,
            port: parsedUrl.port,
            path: parsedUrl.path,
            method: "GET",
            headers
          };
        }
        class PDFNodeStreamFullReader extends BaseFullReader {
          constructor(stream) {
            super(stream);
            const handleResponse = response => {
              if (response.statusCode === 404) {
                const error = new _util.MissingPDFException("Missing PDF \"".concat(this._url, "\"."));
                this._storedError = error;
                this._headersCapability.reject(error);
                return;
              }
              this._headersCapability.resolve();
              this._setReadableStream(response);
              const getResponseHeader = name => {
                return this._readableStream.headers[name.toLowerCase()];
              };
              const {
                allowRangeRequests,
                suggestedLength
              } = (0, _network_utils.validateRangeRequestCapabilities)({
                getResponseHeader,
                isHttp: stream.isHttp,
                rangeChunkSize: this._rangeChunkSize,
                disableRange: this._disableRange
              });
              this._isRangeSupported = allowRangeRequests;
              this._contentLength = suggestedLength || this._contentLength;
              this._filename = (0, _network_utils.extractFilenameFromHeader)(getResponseHeader);
            };
            this._request = null;
            if (this._url.protocol === "http:") {
              this._request = http.request(createRequestOptions(this._url, stream.httpHeaders), handleResponse);
            } else {
              this._request = https.request(createRequestOptions(this._url, stream.httpHeaders), handleResponse);
            }
            this._request.on("error", reason => {
              this._storedError = reason;
              this._headersCapability.reject(reason);
            });
            this._request.end();
          }
        }
        class PDFNodeStreamRangeReader extends BaseRangeReader {
          constructor(stream, start, end) {
            super(stream);
            this._httpHeaders = {};
            for (const property in stream.httpHeaders) {
              const value = stream.httpHeaders[property];
              if (value === undefined) {
                continue;
              }
              this._httpHeaders[property] = value;
            }
            this._httpHeaders.Range = "bytes=".concat(start, "-").concat(end - 1);
            const handleResponse = response => {
              if (response.statusCode === 404) {
                const error = new _util.MissingPDFException("Missing PDF \"".concat(this._url, "\"."));
                this._storedError = error;
                return;
              }
              this._setReadableStream(response);
            };
            this._request = null;
            if (this._url.protocol === "http:") {
              this._request = http.request(createRequestOptions(this._url, this._httpHeaders), handleResponse);
            } else {
              this._request = https.request(createRequestOptions(this._url, this._httpHeaders), handleResponse);
            }
            this._request.on("error", reason => {
              this._storedError = reason;
            });
            this._request.end();
          }
        }
        class PDFNodeStreamFsFullReader extends BaseFullReader {
          constructor(stream) {
            super(stream);
            let path = decodeURIComponent(this._url.path);
            if (fileUriRegex.test(this._url.href)) {
              path = path.replace(/^\//, "");
            }
            fs.lstat(path, (error, stat) => {
              if (error) {
                if (error.code === "ENOENT") {
                  error = new _util.MissingPDFException("Missing PDF \"".concat(path, "\"."));
                }
                this._storedError = error;
                this._headersCapability.reject(error);
                return;
              }
              this._contentLength = stat.size;
              this._setReadableStream(fs.createReadStream(path));
              this._headersCapability.resolve();
            });
          }
        }
        class PDFNodeStreamFsRangeReader extends BaseRangeReader {
          constructor(stream, start, end) {
            super(stream);
            let path = decodeURIComponent(this._url.path);
            if (fileUriRegex.test(this._url.href)) {
              path = path.replace(/^\//, "");
            }
            this._setReadableStream(fs.createReadStream(path, {
              start,
              end: end - 1
            }));
          }
        }

        /***/
      }, /* 22 */
      /***/(__unused_webpack_module, exports, __w_pdfjs_require__) => {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.createResponseStatusError = createResponseStatusError;
        exports.extractFilenameFromHeader = extractFilenameFromHeader;
        exports.validateRangeRequestCapabilities = validateRangeRequestCapabilities;
        exports.validateResponseStatus = validateResponseStatus;
        var _util = __w_pdfjs_require__(1);
        var _content_disposition = __w_pdfjs_require__(23);
        var _display_utils = __w_pdfjs_require__(6);
        function validateRangeRequestCapabilities(_ref35) {
          let {
            getResponseHeader,
            isHttp,
            rangeChunkSize,
            disableRange
          } = _ref35;
          const returnValues = {
            allowRangeRequests: false,
            suggestedLength: undefined
          };
          const length = parseInt(getResponseHeader("Content-Length"), 10);
          if (!Number.isInteger(length)) {
            return returnValues;
          }
          returnValues.suggestedLength = length;
          if (length <= 2 * rangeChunkSize) {
            return returnValues;
          }
          if (disableRange || !isHttp) {
            return returnValues;
          }
          if (getResponseHeader("Accept-Ranges") !== "bytes") {
            return returnValues;
          }
          const contentEncoding = getResponseHeader("Content-Encoding") || "identity";
          if (contentEncoding !== "identity") {
            return returnValues;
          }
          returnValues.allowRangeRequests = true;
          return returnValues;
        }
        function extractFilenameFromHeader(getResponseHeader) {
          const contentDisposition = getResponseHeader("Content-Disposition");
          if (contentDisposition) {
            let filename = (0, _content_disposition.getFilenameFromContentDispositionHeader)(contentDisposition);
            if (filename.includes("%")) {
              try {
                filename = decodeURIComponent(filename);
              } catch (ex) {}
            }
            if ((0, _display_utils.isPdfFile)(filename)) {
              return filename;
            }
          }
          return null;
        }
        function createResponseStatusError(status, url) {
          if (status === 404 || status === 0 && url.startsWith("file:")) {
            return new _util.MissingPDFException('Missing PDF "' + url + '".');
          }
          return new _util.UnexpectedResponseException("Unexpected server response (".concat(status, ") while retrieving PDF \"").concat(url, "\"."), status);
        }
        function validateResponseStatus(status) {
          return status === 200 || status === 206;
        }

        /***/
      }, /* 23 */
      /***/(__unused_webpack_module, exports, __w_pdfjs_require__) => {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.getFilenameFromContentDispositionHeader = getFilenameFromContentDispositionHeader;
        var _util = __w_pdfjs_require__(1);
        function getFilenameFromContentDispositionHeader(contentDisposition) {
          let needsEncodingFixup = true;
          let tmp = toParamRegExp("filename\\*", "i").exec(contentDisposition);
          if (tmp) {
            tmp = tmp[1];
            let filename = rfc2616unquote(tmp);
            filename = unescape(filename);
            filename = rfc5987decode(filename);
            filename = rfc2047decode(filename);
            return fixupEncoding(filename);
          }
          tmp = rfc2231getparam(contentDisposition);
          if (tmp) {
            const filename = rfc2047decode(tmp);
            return fixupEncoding(filename);
          }
          tmp = toParamRegExp("filename", "i").exec(contentDisposition);
          if (tmp) {
            tmp = tmp[1];
            let filename = rfc2616unquote(tmp);
            filename = rfc2047decode(filename);
            return fixupEncoding(filename);
          }
          function toParamRegExp(attributePattern, flags) {
            return new RegExp("(?:^|;)\\s*" + attributePattern + "\\s*=\\s*" + "(" + '[^";\\s][^;\\s]*' + "|" + '"(?:[^"\\\\]|\\\\"?)+"?' + ")", flags);
          }
          function textdecode(encoding, value) {
            if (encoding) {
              if (!/^[\x00-\xFF]+$/.test(value)) {
                return value;
              }
              try {
                const decoder = new TextDecoder(encoding, {
                  fatal: true
                });
                const buffer = (0, _util.stringToBytes)(value);
                value = decoder.decode(buffer);
                needsEncodingFixup = false;
              } catch (e) {}
            }
            return value;
          }
          function fixupEncoding(value) {
            if (needsEncodingFixup && /[\x80-\xff]/.test(value)) {
              value = textdecode("utf-8", value);
              if (needsEncodingFixup) {
                value = textdecode("iso-8859-1", value);
              }
            }
            return value;
          }
          function rfc2231getparam(contentDispositionStr) {
            const matches = [];
            let match;
            const iter = toParamRegExp("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
            while ((match = iter.exec(contentDispositionStr)) !== null) {
              let [, n, quot, part] = match;
              n = parseInt(n, 10);
              if (n in matches) {
                if (n === 0) {
                  break;
                }
                continue;
              }
              matches[n] = [quot, part];
            }
            const parts = [];
            for (let n = 0; n < matches.length; ++n) {
              if (!(n in matches)) {
                break;
              }
              let [quot, part] = matches[n];
              part = rfc2616unquote(part);
              if (quot) {
                part = unescape(part);
                if (n === 0) {
                  part = rfc5987decode(part);
                }
              }
              parts.push(part);
            }
            return parts.join("");
          }
          function rfc2616unquote(value) {
            if (value.startsWith('"')) {
              const parts = value.slice(1).split('\\"');
              for (let i = 0; i < parts.length; ++i) {
                const quotindex = parts[i].indexOf('"');
                if (quotindex !== -1) {
                  parts[i] = parts[i].slice(0, quotindex);
                  parts.length = i + 1;
                }
                parts[i] = parts[i].replaceAll(/\\(.)/g, "$1");
              }
              value = parts.join('"');
            }
            return value;
          }
          function rfc5987decode(extvalue) {
            const encodingend = extvalue.indexOf("'");
            if (encodingend === -1) {
              return extvalue;
            }
            const encoding = extvalue.slice(0, encodingend);
            const langvalue = extvalue.slice(encodingend + 1);
            const value = langvalue.replace(/^[^']*'/, "");
            return textdecode(encoding, value);
          }
          function rfc2047decode(value) {
            if (!value.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(value)) {
              return value;
            }
            return value.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function (matches, charset, encoding, text) {
              if (encoding === "q" || encoding === "Q") {
                text = text.replaceAll("_", " ");
                text = text.replaceAll(/=([0-9a-fA-F]{2})/g, function (match, hex) {
                  return String.fromCharCode(parseInt(hex, 16));
                });
                return textdecode(charset, text);
              }
              try {
                text = atob(text);
              } catch (e) {}
              return textdecode(charset, text);
            });
          }
          return "";
        }

        /***/
      }, /* 24 */
      /***/(__unused_webpack_module, exports, __w_pdfjs_require__) => {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.PDFNetworkStream = void 0;
        var _util = __w_pdfjs_require__(1);
        var _network_utils = __w_pdfjs_require__(22);
        ;
        const OK_RESPONSE = 200;
        const PARTIAL_CONTENT_RESPONSE = 206;
        function getArrayBuffer(xhr) {
          const data = xhr.response;
          if (typeof data !== "string") {
            return data;
          }
          return (0, _util.stringToBytes)(data).buffer;
        }
        class NetworkManager {
          constructor(url) {
            let args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            this.url = url;
            this.isHttp = /^https?:/i.test(url);
            this.httpHeaders = this.isHttp && args.httpHeaders || Object.create(null);
            this.withCredentials = args.withCredentials || false;
            this.currXhrId = 0;
            this.pendingRequests = Object.create(null);
          }
          requestRange(begin, end, listeners) {
            const args = {
              begin,
              end
            };
            for (const prop in listeners) {
              args[prop] = listeners[prop];
            }
            return this.request(args);
          }
          requestFull(listeners) {
            return this.request(listeners);
          }
          request(args) {
            const xhr = new XMLHttpRequest();
            const xhrId = this.currXhrId++;
            const pendingRequest = this.pendingRequests[xhrId] = {
              xhr
            };
            xhr.open("GET", this.url);
            xhr.withCredentials = this.withCredentials;
            for (const property in this.httpHeaders) {
              const value = this.httpHeaders[property];
              if (value === undefined) {
                continue;
              }
              xhr.setRequestHeader(property, value);
            }
            if (this.isHttp && "begin" in args && "end" in args) {
              xhr.setRequestHeader("Range", "bytes=".concat(args.begin, "-").concat(args.end - 1));
              pendingRequest.expectedStatus = PARTIAL_CONTENT_RESPONSE;
            } else {
              pendingRequest.expectedStatus = OK_RESPONSE;
            }
            xhr.responseType = "arraybuffer";
            if (args.onError) {
              xhr.onerror = function (evt) {
                args.onError(xhr.status);
              };
            }
            xhr.onreadystatechange = this.onStateChange.bind(this, xhrId);
            xhr.onprogress = this.onProgress.bind(this, xhrId);
            pendingRequest.onHeadersReceived = args.onHeadersReceived;
            pendingRequest.onDone = args.onDone;
            pendingRequest.onError = args.onError;
            pendingRequest.onProgress = args.onProgress;
            xhr.send(null);
            return xhrId;
          }
          onProgress(xhrId, evt) {
            var _pendingRequest$onPro;
            const pendingRequest = this.pendingRequests[xhrId];
            if (!pendingRequest) {
              return;
            }
            (_pendingRequest$onPro = pendingRequest.onProgress) === null || _pendingRequest$onPro === void 0 || _pendingRequest$onPro.call(pendingRequest, evt);
          }
          onStateChange(xhrId, evt) {
            const pendingRequest = this.pendingRequests[xhrId];
            if (!pendingRequest) {
              return;
            }
            const xhr = pendingRequest.xhr;
            if (xhr.readyState >= 2 && pendingRequest.onHeadersReceived) {
              pendingRequest.onHeadersReceived();
              delete pendingRequest.onHeadersReceived;
            }
            if (xhr.readyState !== 4) {
              return;
            }
            if (!(xhrId in this.pendingRequests)) {
              return;
            }
            delete this.pendingRequests[xhrId];
            if (xhr.status === 0 && this.isHttp) {
              var _pendingRequest$onErr;
              (_pendingRequest$onErr = pendingRequest.onError) === null || _pendingRequest$onErr === void 0 || _pendingRequest$onErr.call(pendingRequest, xhr.status);
              return;
            }
            const xhrStatus = xhr.status || OK_RESPONSE;
            const ok_response_on_range_request = xhrStatus === OK_RESPONSE && pendingRequest.expectedStatus === PARTIAL_CONTENT_RESPONSE;
            if (!ok_response_on_range_request && xhrStatus !== pendingRequest.expectedStatus) {
              var _pendingRequest$onErr2;
              (_pendingRequest$onErr2 = pendingRequest.onError) === null || _pendingRequest$onErr2 === void 0 || _pendingRequest$onErr2.call(pendingRequest, xhr.status);
              return;
            }
            const chunk = getArrayBuffer(xhr);
            if (xhrStatus === PARTIAL_CONTENT_RESPONSE) {
              const rangeHeader = xhr.getResponseHeader("Content-Range");
              const matches = /bytes (\d+)-(\d+)\/(\d+)/.exec(rangeHeader);
              pendingRequest.onDone({
                begin: parseInt(matches[1], 10),
                chunk
              });
            } else if (chunk) {
              pendingRequest.onDone({
                begin: 0,
                chunk
              });
            } else {
              var _pendingRequest$onErr3;
              (_pendingRequest$onErr3 = pendingRequest.onError) === null || _pendingRequest$onErr3 === void 0 || _pendingRequest$onErr3.call(pendingRequest, xhr.status);
            }
          }
          getRequestXhr(xhrId) {
            return this.pendingRequests[xhrId].xhr;
          }
          isPendingRequest(xhrId) {
            return xhrId in this.pendingRequests;
          }
          abortRequest(xhrId) {
            const xhr = this.pendingRequests[xhrId].xhr;
            delete this.pendingRequests[xhrId];
            xhr.abort();
          }
        }
        class PDFNetworkStream {
          constructor(source) {
            this._source = source;
            this._manager = new NetworkManager(source.url, {
              httpHeaders: source.httpHeaders,
              withCredentials: source.withCredentials
            });
            this._rangeChunkSize = source.rangeChunkSize;
            this._fullRequestReader = null;
            this._rangeRequestReaders = [];
          }
          _onRangeRequestReaderClosed(reader) {
            const i = this._rangeRequestReaders.indexOf(reader);
            if (i >= 0) {
              this._rangeRequestReaders.splice(i, 1);
            }
          }
          getFullReader() {
            (0, _util.assert)(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once.");
            this._fullRequestReader = new PDFNetworkStreamFullRequestReader(this._manager, this._source);
            return this._fullRequestReader;
          }
          getRangeReader(begin, end) {
            const reader = new PDFNetworkStreamRangeRequestReader(this._manager, begin, end);
            reader.onClosed = this._onRangeRequestReaderClosed.bind(this);
            this._rangeRequestReaders.push(reader);
            return reader;
          }
          cancelAllRequests(reason) {
            var _this$_fullRequestRea10;
            (_this$_fullRequestRea10 = this._fullRequestReader) === null || _this$_fullRequestRea10 === void 0 || _this$_fullRequestRea10.cancel(reason);
            for (const reader of this._rangeRequestReaders.slice(0)) {
              reader.cancel(reason);
            }
          }
        }
        exports.PDFNetworkStream = PDFNetworkStream;
        class PDFNetworkStreamFullRequestReader {
          constructor(manager, source) {
            this._manager = manager;
            const args = {
              onHeadersReceived: this._onHeadersReceived.bind(this),
              onDone: this._onDone.bind(this),
              onError: this._onError.bind(this),
              onProgress: this._onProgress.bind(this)
            };
            this._url = source.url;
            this._fullRequestId = manager.requestFull(args);
            this._headersReceivedCapability = new _util.PromiseCapability();
            this._disableRange = source.disableRange || false;
            this._contentLength = source.length;
            this._rangeChunkSize = source.rangeChunkSize;
            if (!this._rangeChunkSize && !this._disableRange) {
              this._disableRange = true;
            }
            this._isStreamingSupported = false;
            this._isRangeSupported = false;
            this._cachedChunks = [];
            this._requests = [];
            this._done = false;
            this._storedError = undefined;
            this._filename = null;
            this.onProgress = null;
          }
          _onHeadersReceived() {
            const fullRequestXhrId = this._fullRequestId;
            const fullRequestXhr = this._manager.getRequestXhr(fullRequestXhrId);
            const getResponseHeader = name => {
              return fullRequestXhr.getResponseHeader(name);
            };
            const {
              allowRangeRequests,
              suggestedLength
            } = (0, _network_utils.validateRangeRequestCapabilities)({
              getResponseHeader,
              isHttp: this._manager.isHttp,
              rangeChunkSize: this._rangeChunkSize,
              disableRange: this._disableRange
            });
            if (allowRangeRequests) {
              this._isRangeSupported = true;
            }
            this._contentLength = suggestedLength || this._contentLength;
            this._filename = (0, _network_utils.extractFilenameFromHeader)(getResponseHeader);
            if (this._isRangeSupported) {
              this._manager.abortRequest(fullRequestXhrId);
            }
            this._headersReceivedCapability.resolve();
          }
          _onDone(data) {
            if (data) {
              if (this._requests.length > 0) {
                const requestCapability = this._requests.shift();
                requestCapability.resolve({
                  value: data.chunk,
                  done: false
                });
              } else {
                this._cachedChunks.push(data.chunk);
              }
            }
            this._done = true;
            if (this._cachedChunks.length > 0) {
              return;
            }
            for (const requestCapability of this._requests) {
              requestCapability.resolve({
                value: undefined,
                done: true
              });
            }
            this._requests.length = 0;
          }
          _onError(status) {
            this._storedError = (0, _network_utils.createResponseStatusError)(status, this._url);
            this._headersReceivedCapability.reject(this._storedError);
            for (const requestCapability of this._requests) {
              requestCapability.reject(this._storedError);
            }
            this._requests.length = 0;
            this._cachedChunks.length = 0;
          }
          _onProgress(evt) {
            var _this$onProgress3;
            (_this$onProgress3 = this.onProgress) === null || _this$onProgress3 === void 0 || _this$onProgress3.call(this, {
              loaded: evt.loaded,
              total: evt.lengthComputable ? evt.total : this._contentLength
            });
          }
          get filename() {
            return this._filename;
          }
          get isRangeSupported() {
            return this._isRangeSupported;
          }
          get isStreamingSupported() {
            return this._isStreamingSupported;
          }
          get contentLength() {
            return this._contentLength;
          }
          get headersReady() {
            return this._headersReceivedCapability.promise;
          }
          async read() {
            if (this._storedError) {
              throw this._storedError;
            }
            if (this._cachedChunks.length > 0) {
              const chunk = this._cachedChunks.shift();
              return {
                value: chunk,
                done: false
              };
            }
            if (this._done) {
              return {
                value: undefined,
                done: true
              };
            }
            const requestCapability = new _util.PromiseCapability();
            this._requests.push(requestCapability);
            return requestCapability.promise;
          }
          cancel(reason) {
            this._done = true;
            this._headersReceivedCapability.reject(reason);
            for (const requestCapability of this._requests) {
              requestCapability.resolve({
                value: undefined,
                done: true
              });
            }
            this._requests.length = 0;
            if (this._manager.isPendingRequest(this._fullRequestId)) {
              this._manager.abortRequest(this._fullRequestId);
            }
            this._fullRequestReader = null;
          }
        }
        class PDFNetworkStreamRangeRequestReader {
          constructor(manager, begin, end) {
            this._manager = manager;
            const args = {
              onDone: this._onDone.bind(this),
              onError: this._onError.bind(this),
              onProgress: this._onProgress.bind(this)
            };
            this._url = manager.url;
            this._requestId = manager.requestRange(begin, end, args);
            this._requests = [];
            this._queuedChunk = null;
            this._done = false;
            this._storedError = undefined;
            this.onProgress = null;
            this.onClosed = null;
          }
          _close() {
            var _this$onClosed;
            (_this$onClosed = this.onClosed) === null || _this$onClosed === void 0 || _this$onClosed.call(this, this);
          }
          _onDone(data) {
            const chunk = data.chunk;
            if (this._requests.length > 0) {
              const requestCapability = this._requests.shift();
              requestCapability.resolve({
                value: chunk,
                done: false
              });
            } else {
              this._queuedChunk = chunk;
            }
            this._done = true;
            for (const requestCapability of this._requests) {
              requestCapability.resolve({
                value: undefined,
                done: true
              });
            }
            this._requests.length = 0;
            this._close();
          }
          _onError(status) {
            this._storedError = (0, _network_utils.createResponseStatusError)(status, this._url);
            for (const requestCapability of this._requests) {
              requestCapability.reject(this._storedError);
            }
            this._requests.length = 0;
            this._queuedChunk = null;
          }
          _onProgress(evt) {
            if (!this.isStreamingSupported) {
              var _this$onProgress4;
              (_this$onProgress4 = this.onProgress) === null || _this$onProgress4 === void 0 || _this$onProgress4.call(this, {
                loaded: evt.loaded
              });
            }
          }
          get isStreamingSupported() {
            return false;
          }
          async read() {
            if (this._storedError) {
              throw this._storedError;
            }
            if (this._queuedChunk !== null) {
              const chunk = this._queuedChunk;
              this._queuedChunk = null;
              return {
                value: chunk,
                done: false
              };
            }
            if (this._done) {
              return {
                value: undefined,
                done: true
              };
            }
            const requestCapability = new _util.PromiseCapability();
            this._requests.push(requestCapability);
            return requestCapability.promise;
          }
          cancel(reason) {
            this._done = true;
            for (const requestCapability of this._requests) {
              requestCapability.resolve({
                value: undefined,
                done: true
              });
            }
            this._requests.length = 0;
            if (this._manager.isPendingRequest(this._requestId)) {
              this._manager.abortRequest(this._requestId);
            }
            this._close();
          }
        }

        /***/
      }, /* 25 */
      /***/(__unused_webpack_module, exports, __w_pdfjs_require__) => {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.PDFFetchStream = void 0;
        var _util = __w_pdfjs_require__(1);
        var _network_utils = __w_pdfjs_require__(22);
        ;
        function createFetchOptions(headers, withCredentials, abortController) {
          return {
            method: "GET",
            headers,
            signal: abortController.signal,
            mode: "cors",
            credentials: withCredentials ? "include" : "same-origin",
            redirect: "follow"
          };
        }
        function createHeaders(httpHeaders) {
          const headers = new Headers();
          for (const property in httpHeaders) {
            const value = httpHeaders[property];
            if (value === undefined) {
              continue;
            }
            headers.append(property, value);
          }
          return headers;
        }
        function getArrayBuffer(val) {
          if (val instanceof Uint8Array) {
            return val.buffer;
          }
          if (val instanceof ArrayBuffer) {
            return val;
          }
          (0, _util.warn)("getArrayBuffer - unexpected data format: ".concat(val));
          return new Uint8Array(val).buffer;
        }
        class PDFFetchStream {
          constructor(source) {
            this.source = source;
            this.isHttp = /^https?:/i.test(source.url);
            this.httpHeaders = this.isHttp && source.httpHeaders || {};
            this._fullRequestReader = null;
            this._rangeRequestReaders = [];
          }
          get _progressiveDataLength() {
            var _this$_fullRequestRea11, _this$_fullRequestRea12;
            return (_this$_fullRequestRea11 = (_this$_fullRequestRea12 = this._fullRequestReader) === null || _this$_fullRequestRea12 === void 0 ? void 0 : _this$_fullRequestRea12._loaded) !== null && _this$_fullRequestRea11 !== void 0 ? _this$_fullRequestRea11 : 0;
          }
          getFullReader() {
            (0, _util.assert)(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once.");
            this._fullRequestReader = new PDFFetchStreamReader(this);
            return this._fullRequestReader;
          }
          getRangeReader(begin, end) {
            if (end <= this._progressiveDataLength) {
              return null;
            }
            const reader = new PDFFetchStreamRangeReader(this, begin, end);
            this._rangeRequestReaders.push(reader);
            return reader;
          }
          cancelAllRequests(reason) {
            var _this$_fullRequestRea13;
            (_this$_fullRequestRea13 = this._fullRequestReader) === null || _this$_fullRequestRea13 === void 0 || _this$_fullRequestRea13.cancel(reason);
            for (const reader of this._rangeRequestReaders.slice(0)) {
              reader.cancel(reason);
            }
          }
        }
        exports.PDFFetchStream = PDFFetchStream;
        class PDFFetchStreamReader {
          constructor(stream) {
            this._stream = stream;
            this._reader = null;
            this._loaded = 0;
            this._filename = null;
            const source = stream.source;
            this._withCredentials = source.withCredentials || false;
            this._contentLength = source.length;
            this._headersCapability = new _util.PromiseCapability();
            this._disableRange = source.disableRange || false;
            this._rangeChunkSize = source.rangeChunkSize;
            if (!this._rangeChunkSize && !this._disableRange) {
              this._disableRange = true;
            }
            this._abortController = new AbortController();
            this._isStreamingSupported = !source.disableStream;
            this._isRangeSupported = !source.disableRange;
            this._headers = createHeaders(this._stream.httpHeaders);
            const url = source.url;
            fetch(url, createFetchOptions(this._headers, this._withCredentials, this._abortController)).then(response => {
              if (!(0, _network_utils.validateResponseStatus)(response.status)) {
                throw (0, _network_utils.createResponseStatusError)(response.status, url);
              }
              this._reader = response.body.getReader();
              this._headersCapability.resolve();
              const getResponseHeader = name => {
                return response.headers.get(name);
              };
              const {
                allowRangeRequests,
                suggestedLength
              } = (0, _network_utils.validateRangeRequestCapabilities)({
                getResponseHeader,
                isHttp: this._stream.isHttp,
                rangeChunkSize: this._rangeChunkSize,
                disableRange: this._disableRange
              });
              this._isRangeSupported = allowRangeRequests;
              this._contentLength = suggestedLength || this._contentLength;
              this._filename = (0, _network_utils.extractFilenameFromHeader)(getResponseHeader);
              if (!this._isStreamingSupported && this._isRangeSupported) {
                this.cancel(new _util.AbortException("Streaming is disabled."));
              }
            }).catch(this._headersCapability.reject);
            this.onProgress = null;
          }
          get headersReady() {
            return this._headersCapability.promise;
          }
          get filename() {
            return this._filename;
          }
          get contentLength() {
            return this._contentLength;
          }
          get isRangeSupported() {
            return this._isRangeSupported;
          }
          get isStreamingSupported() {
            return this._isStreamingSupported;
          }
          async read() {
            var _this$onProgress5;
            await this._headersCapability.promise;
            const {
              value,
              done
            } = await this._reader.read();
            if (done) {
              return {
                value,
                done
              };
            }
            this._loaded += value.byteLength;
            (_this$onProgress5 = this.onProgress) === null || _this$onProgress5 === void 0 || _this$onProgress5.call(this, {
              loaded: this._loaded,
              total: this._contentLength
            });
            return {
              value: getArrayBuffer(value),
              done: false
            };
          }
          cancel(reason) {
            var _this$_reader;
            (_this$_reader = this._reader) === null || _this$_reader === void 0 || _this$_reader.cancel(reason);
            this._abortController.abort();
          }
        }
        class PDFFetchStreamRangeReader {
          constructor(stream, begin, end) {
            this._stream = stream;
            this._reader = null;
            this._loaded = 0;
            const source = stream.source;
            this._withCredentials = source.withCredentials || false;
            this._readCapability = new _util.PromiseCapability();
            this._isStreamingSupported = !source.disableStream;
            this._abortController = new AbortController();
            this._headers = createHeaders(this._stream.httpHeaders);
            this._headers.append("Range", "bytes=".concat(begin, "-").concat(end - 1));
            const url = source.url;
            fetch(url, createFetchOptions(this._headers, this._withCredentials, this._abortController)).then(response => {
              if (!(0, _network_utils.validateResponseStatus)(response.status)) {
                throw (0, _network_utils.createResponseStatusError)(response.status, url);
              }
              this._readCapability.resolve();
              this._reader = response.body.getReader();
            }).catch(this._readCapability.reject);
            this.onProgress = null;
          }
          get isStreamingSupported() {
            return this._isStreamingSupported;
          }
          async read() {
            var _this$onProgress6;
            await this._readCapability.promise;
            const {
              value,
              done
            } = await this._reader.read();
            if (done) {
              return {
                value,
                done
              };
            }
            this._loaded += value.byteLength;
            (_this$onProgress6 = this.onProgress) === null || _this$onProgress6 === void 0 || _this$onProgress6.call(this, {
              loaded: this._loaded
            });
            return {
              value: getArrayBuffer(value),
              done: false
            };
          }
          cancel(reason) {
            var _this$_reader2;
            (_this$_reader2 = this._reader) === null || _this$_reader2 === void 0 || _this$_reader2.cancel(reason);
            this._abortController.abort();
          }
        }

        /***/
      }, /* 26 */
      /***/(__unused_webpack_module, exports, __w_pdfjs_require__) => {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.TextLayerRenderTask = void 0;
        exports.renderTextLayer = renderTextLayer;
        exports.updateTextLayer = updateTextLayer;
        var _util = __w_pdfjs_require__(1);
        var _display_utils = __w_pdfjs_require__(6);
        const MAX_TEXT_DIVS_TO_RENDER = 100000;
        const DEFAULT_FONT_SIZE = 30;
        const DEFAULT_FONT_ASCENT = 0.8;
        const ascentCache = new Map();
        function getCtx(size, isOffscreenCanvasSupported) {
          let ctx;
          if (isOffscreenCanvasSupported && _util.FeatureTest.isOffscreenCanvasSupported) {
            ctx = new OffscreenCanvas(size, size).getContext("2d", {
              alpha: false
            });
          } else {
            const canvas = document.createElement("canvas");
            canvas.width = canvas.height = size;
            ctx = canvas.getContext("2d", {
              alpha: false
            });
          }
          return ctx;
        }
        function getAscent(fontFamily, isOffscreenCanvasSupported) {
          const cachedAscent = ascentCache.get(fontFamily);
          if (cachedAscent) {
            return cachedAscent;
          }
          const ctx = getCtx(DEFAULT_FONT_SIZE, isOffscreenCanvasSupported);
          ctx.font = "".concat(DEFAULT_FONT_SIZE, "px ").concat(fontFamily);
          const metrics = ctx.measureText("");
          let ascent = metrics.fontBoundingBoxAscent;
          let descent = Math.abs(metrics.fontBoundingBoxDescent);
          if (ascent) {
            const ratio = ascent / (ascent + descent);
            ascentCache.set(fontFamily, ratio);
            ctx.canvas.width = ctx.canvas.height = 0;
            return ratio;
          }
          ctx.strokeStyle = "red";
          ctx.clearRect(0, 0, DEFAULT_FONT_SIZE, DEFAULT_FONT_SIZE);
          ctx.strokeText("g", 0, 0);
          let pixels = ctx.getImageData(0, 0, DEFAULT_FONT_SIZE, DEFAULT_FONT_SIZE).data;
          descent = 0;
          for (let i = pixels.length - 1 - 3; i >= 0; i -= 4) {
            if (pixels[i] > 0) {
              descent = Math.ceil(i / 4 / DEFAULT_FONT_SIZE);
              break;
            }
          }
          ctx.clearRect(0, 0, DEFAULT_FONT_SIZE, DEFAULT_FONT_SIZE);
          ctx.strokeText("A", 0, DEFAULT_FONT_SIZE);
          pixels = ctx.getImageData(0, 0, DEFAULT_FONT_SIZE, DEFAULT_FONT_SIZE).data;
          ascent = 0;
          for (let i = 0, ii = pixels.length; i < ii; i += 4) {
            if (pixels[i] > 0) {
              ascent = DEFAULT_FONT_SIZE - Math.floor(i / 4 / DEFAULT_FONT_SIZE);
              break;
            }
          }
          ctx.canvas.width = ctx.canvas.height = 0;
          if (ascent) {
            const ratio = ascent / (ascent + descent);
            ascentCache.set(fontFamily, ratio);
            return ratio;
          }
          ascentCache.set(fontFamily, DEFAULT_FONT_ASCENT);
          return DEFAULT_FONT_ASCENT;
        }
        function appendText(task, geom, styles) {
          const textDiv = document.createElement("span");
          const textDivProperties = {
            angle: 0,
            canvasWidth: 0,
            hasText: geom.str !== "",
            hasEOL: geom.hasEOL,
            fontSize: 0
          };
          task._textDivs.push(textDiv);
          const tx = _util.Util.transform(task._transform, geom.transform);
          let angle = Math.atan2(tx[1], tx[0]);
          const style = styles[geom.fontName];
          if (style.vertical) {
            angle += Math.PI / 2;
          }
          const fontHeight = Math.hypot(tx[2], tx[3]);
          const fontAscent = fontHeight * getAscent(style.fontFamily, task._isOffscreenCanvasSupported);
          let left, top;
          if (angle === 0) {
            left = tx[4];
            top = tx[5] - fontAscent;
          } else {
            left = tx[4] + fontAscent * Math.sin(angle);
            top = tx[5] - fontAscent * Math.cos(angle);
          }
          const scaleFactorStr = "calc(var(--scale-factor)*";
          const divStyle = textDiv.style;
          if (task._container === task._rootContainer) {
            divStyle.left = "".concat((100 * left / task._pageWidth).toFixed(2), "%");
            divStyle.top = "".concat((100 * top / task._pageHeight).toFixed(2), "%");
          } else {
            divStyle.left = "".concat(scaleFactorStr).concat(left.toFixed(2), "px)");
            divStyle.top = "".concat(scaleFactorStr).concat(top.toFixed(2), "px)");
          }
          divStyle.fontSize = "".concat(scaleFactorStr).concat(fontHeight.toFixed(2), "px)");
          divStyle.fontFamily = style.fontFamily;
          textDivProperties.fontSize = fontHeight;
          textDiv.setAttribute("role", "presentation");
          textDiv.textContent = geom.str;
          textDiv.dir = geom.dir;
          if (task._fontInspectorEnabled) {
            textDiv.dataset.fontName = geom.fontName;
          }
          if (angle !== 0) {
            textDivProperties.angle = angle * (180 / Math.PI);
          }
          let shouldScaleText = false;
          if (geom.str.length > 1) {
            shouldScaleText = true;
          } else if (geom.str !== " " && geom.transform[0] !== geom.transform[3]) {
            const absScaleX = Math.abs(geom.transform[0]),
              absScaleY = Math.abs(geom.transform[3]);
            if (absScaleX !== absScaleY && Math.max(absScaleX, absScaleY) / Math.min(absScaleX, absScaleY) > 1.5) {
              shouldScaleText = true;
            }
          }
          if (shouldScaleText) {
            textDivProperties.canvasWidth = style.vertical ? geom.height : geom.width;
          }
          task._textDivProperties.set(textDiv, textDivProperties);
          if (task._isReadableStream) {
            task._layoutText(textDiv);
          }
        }
        function layout(params) {
          const {
            div,
            scale,
            properties,
            ctx,
            prevFontSize,
            prevFontFamily
          } = params;
          const {
            style
          } = div;
          let transform = "";
          if (properties.canvasWidth !== 0 && properties.hasText) {
            const {
              fontFamily
            } = style;
            const {
              canvasWidth,
              fontSize
            } = properties;
            if (prevFontSize !== fontSize || prevFontFamily !== fontFamily) {
              ctx.font = "".concat(fontSize * scale, "px ").concat(fontFamily);
              params.prevFontSize = fontSize;
              params.prevFontFamily = fontFamily;
            }
            const {
              width
            } = ctx.measureText(div.textContent);
            if (width > 0) {
              transform = "scaleX(".concat(canvasWidth * scale / width, ")");
            }
          }
          if (properties.angle !== 0) {
            transform = "rotate(".concat(properties.angle, "deg) ").concat(transform);
          }
          if (transform.length > 0) {
            style.transform = transform;
          }
        }
        function render(task) {
          if (task._canceled) {
            return;
          }
          const textDivs = task._textDivs;
          const capability = task._capability;
          const textDivsLength = textDivs.length;
          if (textDivsLength > MAX_TEXT_DIVS_TO_RENDER) {
            capability.resolve();
            return;
          }
          if (!task._isReadableStream) {
            for (const textDiv of textDivs) {
              task._layoutText(textDiv);
            }
          }
          capability.resolve();
        }
        class TextLayerRenderTask {
          constructor(_ref36) {
            var _globalThis$FontInspe2;
            let {
              textContentSource,
              container,
              viewport,
              textDivs,
              textDivProperties,
              textContentItemsStr,
              isOffscreenCanvasSupported
            } = _ref36;
            this._textContentSource = textContentSource;
            this._isReadableStream = textContentSource instanceof ReadableStream;
            this._container = this._rootContainer = container;
            this._textDivs = textDivs || [];
            this._textContentItemsStr = textContentItemsStr || [];
            this._isOffscreenCanvasSupported = isOffscreenCanvasSupported;
            this._fontInspectorEnabled = !!((_globalThis$FontInspe2 = globalThis.FontInspector) !== null && _globalThis$FontInspe2 !== void 0 && _globalThis$FontInspe2.enabled);
            this._reader = null;
            this._textDivProperties = textDivProperties || new WeakMap();
            this._canceled = false;
            this._capability = new _util.PromiseCapability();
            this._layoutTextParams = {
              prevFontSize: null,
              prevFontFamily: null,
              div: null,
              scale: viewport.scale * (globalThis.devicePixelRatio || 1),
              properties: null,
              ctx: getCtx(0, isOffscreenCanvasSupported)
            };
            const {
              pageWidth,
              pageHeight,
              pageX,
              pageY
            } = viewport.rawDims;
            this._transform = [1, 0, 0, -1, -pageX, pageY + pageHeight];
            this._pageWidth = pageWidth;
            this._pageHeight = pageHeight;
            (0, _display_utils.setLayerDimensions)(container, viewport);
            this._capability.promise.finally(() => {
              this._layoutTextParams = null;
            }).catch(() => {});
          }
          get promise() {
            return this._capability.promise;
          }
          cancel() {
            this._canceled = true;
            if (this._reader) {
              this._reader.cancel(new _util.AbortException("TextLayer task cancelled.")).catch(() => {});
              this._reader = null;
            }
            this._capability.reject(new _util.AbortException("TextLayer task cancelled."));
          }
          _processItems(items, styleCache) {
            for (const item of items) {
              if (item.str === undefined) {
                if (item.type === "beginMarkedContentProps" || item.type === "beginMarkedContent") {
                  const parent = this._container;
                  this._container = document.createElement("span");
                  this._container.classList.add("markedContent");
                  if (item.id !== null) {
                    this._container.setAttribute("id", "".concat(item.id));
                  }
                  parent.append(this._container);
                } else if (item.type === "endMarkedContent") {
                  this._container = this._container.parentNode;
                }
                continue;
              }
              this._textContentItemsStr.push(item.str);
              appendText(this, item, styleCache);
            }
          }
          _layoutText(textDiv) {
            const textDivProperties = this._layoutTextParams.properties = this._textDivProperties.get(textDiv);
            this._layoutTextParams.div = textDiv;
            layout(this._layoutTextParams);
            if (textDivProperties.hasText) {
              this._container.append(textDiv);
            }
            if (textDivProperties.hasEOL) {
              const br = document.createElement("br");
              br.setAttribute("role", "presentation");
              this._container.append(br);
            }
          }
          _render() {
            const capability = new _util.PromiseCapability();
            let styleCache = Object.create(null);
            if (this._isReadableStream) {
              const pump = () => {
                this._reader.read().then(_ref37 => {
                  let {
                    value,
                    done
                  } = _ref37;
                  if (done) {
                    capability.resolve();
                    return;
                  }
                  Object.assign(styleCache, value.styles);
                  this._processItems(value.items, styleCache);
                  pump();
                }, capability.reject);
              };
              this._reader = this._textContentSource.getReader();
              pump();
            } else if (this._textContentSource) {
              const {
                items,
                styles
              } = this._textContentSource;
              this._processItems(items, styles);
              capability.resolve();
            } else {
              throw new Error('No "textContentSource" parameter specified.');
            }
            capability.promise.then(() => {
              styleCache = null;
              render(this);
            }, this._capability.reject);
          }
        }
        exports.TextLayerRenderTask = TextLayerRenderTask;
        function renderTextLayer(params) {
          if (!params.textContentSource && (params.textContent || params.textContentStream)) {
            (0, _display_utils.deprecated)("The TextLayerRender `textContent`/`textContentStream` parameters " + "will be removed in the future, please use `textContentSource` instead.");
            params.textContentSource = params.textContent || params.textContentStream;
          }
          const {
            container,
            viewport
          } = params;
          const style = getComputedStyle(container);
          const visibility = style.getPropertyValue("visibility");
          const scaleFactor = parseFloat(style.getPropertyValue("--scale-factor"));
          if (visibility === "visible" && (!scaleFactor || Math.abs(scaleFactor - viewport.scale) > 1e-5)) {
            console.error("The `--scale-factor` CSS-variable must be set, " + "to the same value as `viewport.scale`, " + "either on the `container`-element itself or higher up in the DOM.");
          }
          const task = new TextLayerRenderTask(params);
          task._render();
          return task;
        }
        function updateTextLayer(_ref38) {
          let {
            container,
            viewport,
            textDivs,
            textDivProperties,
            isOffscreenCanvasSupported,
            mustRotate = true,
            mustRescale = true
          } = _ref38;
          if (mustRotate) {
            (0, _display_utils.setLayerDimensions)(container, {
              rotation: viewport.rotation
            });
          }
          if (mustRescale) {
            const ctx = getCtx(0, isOffscreenCanvasSupported);
            const scale = viewport.scale * (globalThis.devicePixelRatio || 1);
            const params = {
              prevFontSize: null,
              prevFontFamily: null,
              div: null,
              scale,
              properties: null,
              ctx
            };
            for (const div of textDivs) {
              params.properties = textDivProperties.get(div);
              params.div = div;
              layout(params);
            }
          }
        }

        /***/
      }, /* 27 */
      /***/(__unused_webpack_module, exports, __w_pdfjs_require__) => {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.AnnotationEditorLayer = void 0;
        var _util = __w_pdfjs_require__(1);
        var _tools = __w_pdfjs_require__(5);
        var _freetext = __w_pdfjs_require__(28);
        var _ink = __w_pdfjs_require__(29);
        var _display_utils = __w_pdfjs_require__(6);
        var _accessibilityManager = /*#__PURE__*/new WeakMap();
        var _allowClick = /*#__PURE__*/new WeakMap();
        var _boundPointerup = /*#__PURE__*/new WeakMap();
        var _boundPointerdown = /*#__PURE__*/new WeakMap();
        var _editors = /*#__PURE__*/new WeakMap();
        var _hadPointerDown = /*#__PURE__*/new WeakMap();
        var _isCleaningUp = /*#__PURE__*/new WeakMap();
        var _uiManager = /*#__PURE__*/new WeakMap();
        var _changeParent = /*#__PURE__*/new WeakSet();
        var _createNewEditor = /*#__PURE__*/new WeakSet();
        var _createAndAddNewEditor = /*#__PURE__*/new WeakSet();
        var _cleanup = /*#__PURE__*/new WeakSet();
        class AnnotationEditorLayer {
          constructor(options) {
            _classPrivateMethodInitSpec(this, _cleanup);
            _classPrivateMethodInitSpec(this, _createAndAddNewEditor);
            _classPrivateMethodInitSpec(this, _createNewEditor);
            _classPrivateMethodInitSpec(this, _changeParent);
            _classPrivateFieldInitSpec(this, _accessibilityManager, {
              writable: true,
              value: void 0
            });
            _classPrivateFieldInitSpec(this, _allowClick, {
              writable: true,
              value: false
            });
            _classPrivateFieldInitSpec(this, _boundPointerup, {
              writable: true,
              value: this.pointerup.bind(this)
            });
            _classPrivateFieldInitSpec(this, _boundPointerdown, {
              writable: true,
              value: this.pointerdown.bind(this)
            });
            _classPrivateFieldInitSpec(this, _editors, {
              writable: true,
              value: new Map()
            });
            _classPrivateFieldInitSpec(this, _hadPointerDown, {
              writable: true,
              value: false
            });
            _classPrivateFieldInitSpec(this, _isCleaningUp, {
              writable: true,
              value: false
            });
            _classPrivateFieldInitSpec(this, _uiManager, {
              writable: true,
              value: void 0
            });
            if (!AnnotationEditorLayer._initialized) {
              AnnotationEditorLayer._initialized = true;
              _freetext.FreeTextEditor.initialize(options.l10n);
              _ink.InkEditor.initialize(options.l10n);
            }
            options.uiManager.registerEditorTypes([_freetext.FreeTextEditor, _ink.InkEditor]);
            _classPrivateFieldSet(this, _uiManager, options.uiManager);
            this.pageIndex = options.pageIndex;
            this.div = options.div;
            _classPrivateFieldSet(this, _accessibilityManager, options.accessibilityManager);
            _classPrivateFieldGet(this, _uiManager).addLayer(this);
          }
          get isEmpty() {
            return _classPrivateFieldGet(this, _editors).size === 0;
          }
          updateToolbar(mode) {
            _classPrivateFieldGet(this, _uiManager).updateToolbar(mode);
          }
          updateMode() {
            let mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _classPrivateFieldGet(this, _uiManager).getMode();
            _classPrivateMethodGet(this, _cleanup, _cleanup2).call(this);
            if (mode === _util.AnnotationEditorType.INK) {
              this.addInkEditorIfNeeded(false);
              this.disableClick();
            } else {
              this.enableClick();
            }
            _classPrivateFieldGet(this, _uiManager).unselectAll();
            if (mode !== _util.AnnotationEditorType.NONE) {
              this.div.classList.toggle("freeTextEditing", mode === _util.AnnotationEditorType.FREETEXT);
              this.div.classList.toggle("inkEditing", mode === _util.AnnotationEditorType.INK);
              this.div.hidden = false;
            }
          }
          addInkEditorIfNeeded(isCommitting) {
            if (!isCommitting && _classPrivateFieldGet(this, _uiManager).getMode() !== _util.AnnotationEditorType.INK) {
              return;
            }
            if (!isCommitting) {
              for (const editor of _classPrivateFieldGet(this, _editors).values()) {
                if (editor.isEmpty()) {
                  editor.setInBackground();
                  return;
                }
              }
            }
            const editor = _classPrivateMethodGet(this, _createAndAddNewEditor, _createAndAddNewEditor2).call(this, {
              offsetX: 0,
              offsetY: 0
            });
            editor.setInBackground();
          }
          setEditingState(isEditing) {
            _classPrivateFieldGet(this, _uiManager).setEditingState(isEditing);
          }
          addCommands(params) {
            _classPrivateFieldGet(this, _uiManager).addCommands(params);
          }
          enable() {
            this.div.style.pointerEvents = "auto";
            for (const editor of _classPrivateFieldGet(this, _editors).values()) {
              editor.enableEditing();
            }
          }
          disable() {
            this.div.style.pointerEvents = "none";
            for (const editor of _classPrivateFieldGet(this, _editors).values()) {
              editor.disableEditing();
            }
            _classPrivateMethodGet(this, _cleanup, _cleanup2).call(this);
            if (this.isEmpty) {
              this.div.hidden = true;
            }
          }
          setActiveEditor(editor) {
            const currentActive = _classPrivateFieldGet(this, _uiManager).getActive();
            if (currentActive === editor) {
              return;
            }
            _classPrivateFieldGet(this, _uiManager).setActiveEditor(editor);
          }
          enableClick() {
            this.div.addEventListener("pointerdown", _classPrivateFieldGet(this, _boundPointerdown));
            this.div.addEventListener("pointerup", _classPrivateFieldGet(this, _boundPointerup));
          }
          disableClick() {
            this.div.removeEventListener("pointerdown", _classPrivateFieldGet(this, _boundPointerdown));
            this.div.removeEventListener("pointerup", _classPrivateFieldGet(this, _boundPointerup));
          }
          attach(editor) {
            _classPrivateFieldGet(this, _editors).set(editor.id, editor);
          }
          detach(editor) {
            var _classPrivateFieldGet6;
            _classPrivateFieldGet(this, _editors).delete(editor.id);
            (_classPrivateFieldGet6 = _classPrivateFieldGet(this, _accessibilityManager)) === null || _classPrivateFieldGet6 === void 0 || _classPrivateFieldGet6.removePointerInTextLayer(editor.contentDiv);
          }
          remove(editor) {
            _classPrivateFieldGet(this, _uiManager).removeEditor(editor);
            this.detach(editor);
            editor.div.style.display = "none";
            setTimeout(() => {
              editor.div.style.display = "";
              editor.div.remove();
              editor.isAttachedToDOM = false;
              if (document.activeElement === document.body) {
                _classPrivateFieldGet(this, _uiManager).focusMainContainer();
              }
            }, 0);
            if (!_classPrivateFieldGet(this, _isCleaningUp)) {
              this.addInkEditorIfNeeded(false);
            }
          }
          add(editor) {
            _classPrivateMethodGet(this, _changeParent, _changeParent2).call(this, editor);
            _classPrivateFieldGet(this, _uiManager).addEditor(editor);
            this.attach(editor);
            if (!editor.isAttachedToDOM) {
              const div = editor.render();
              this.div.append(div);
              editor.isAttachedToDOM = true;
            }
            this.moveEditorInDOM(editor);
            editor.onceAdded();
            _classPrivateFieldGet(this, _uiManager).addToAnnotationStorage(editor);
          }
          moveEditorInDOM(editor) {
            var _classPrivateFieldGet7;
            (_classPrivateFieldGet7 = _classPrivateFieldGet(this, _accessibilityManager)) === null || _classPrivateFieldGet7 === void 0 || _classPrivateFieldGet7.moveElementInDOM(this.div, editor.div, editor.contentDiv, true);
          }
          addOrRebuild(editor) {
            if (editor.needsToBeRebuilt()) {
              editor.rebuild();
            } else {
              this.add(editor);
            }
          }
          addANewEditor(editor) {
            const cmd = () => {
              this.addOrRebuild(editor);
            };
            const undo = () => {
              editor.remove();
            };
            this.addCommands({
              cmd,
              undo,
              mustExec: true
            });
          }
          addUndoableEditor(editor) {
            const cmd = () => {
              this.addOrRebuild(editor);
            };
            const undo = () => {
              editor.remove();
            };
            this.addCommands({
              cmd,
              undo,
              mustExec: false
            });
          }
          getNextId() {
            return _classPrivateFieldGet(this, _uiManager).getId();
          }
          deserialize(data) {
            switch (data.annotationType) {
              case _util.AnnotationEditorType.FREETEXT:
                return _freetext.FreeTextEditor.deserialize(data, this, _classPrivateFieldGet(this, _uiManager));
              case _util.AnnotationEditorType.INK:
                return _ink.InkEditor.deserialize(data, this, _classPrivateFieldGet(this, _uiManager));
            }
            return null;
          }
          setSelected(editor) {
            _classPrivateFieldGet(this, _uiManager).setSelected(editor);
          }
          toggleSelected(editor) {
            _classPrivateFieldGet(this, _uiManager).toggleSelected(editor);
          }
          isSelected(editor) {
            return _classPrivateFieldGet(this, _uiManager).isSelected(editor);
          }
          unselect(editor) {
            _classPrivateFieldGet(this, _uiManager).unselect(editor);
          }
          pointerup(event) {
            const {
              isMac
            } = _util.FeatureTest.platform;
            if (event.button !== 0 || event.ctrlKey && isMac) {
              return;
            }
            if (event.target !== this.div) {
              return;
            }
            if (!_classPrivateFieldGet(this, _hadPointerDown)) {
              return;
            }
            _classPrivateFieldSet(this, _hadPointerDown, false);
            if (!_classPrivateFieldGet(this, _allowClick)) {
              _classPrivateFieldSet(this, _allowClick, true);
              return;
            }
            _classPrivateMethodGet(this, _createAndAddNewEditor, _createAndAddNewEditor2).call(this, event);
          }
          pointerdown(event) {
            const {
              isMac
            } = _util.FeatureTest.platform;
            if (event.button !== 0 || event.ctrlKey && isMac) {
              return;
            }
            if (event.target !== this.div) {
              return;
            }
            _classPrivateFieldSet(this, _hadPointerDown, true);
            const editor = _classPrivateFieldGet(this, _uiManager).getActive();
            _classPrivateFieldSet(this, _allowClick, !editor || editor.isEmpty());
          }
          drop(event) {
            const id = event.dataTransfer.getData("text/plain");
            const editor = _classPrivateFieldGet(this, _uiManager).getEditor(id);
            if (!editor) {
              return;
            }
            event.preventDefault();
            event.dataTransfer.dropEffect = "move";
            _classPrivateMethodGet(this, _changeParent, _changeParent2).call(this, editor);
            const rect = this.div.getBoundingClientRect();
            const endX = event.clientX - rect.x;
            const endY = event.clientY - rect.y;
            editor.translate(endX - editor.startX, endY - editor.startY);
            this.moveEditorInDOM(editor);
            editor.div.focus();
          }
          dragover(event) {
            event.preventDefault();
          }
          destroy() {
            var _classPrivateFieldGet8;
            if (((_classPrivateFieldGet8 = _classPrivateFieldGet(this, _uiManager).getActive()) === null || _classPrivateFieldGet8 === void 0 ? void 0 : _classPrivateFieldGet8.parent) === this) {
              _classPrivateFieldGet(this, _uiManager).setActiveEditor(null);
            }
            for (const editor of _classPrivateFieldGet(this, _editors).values()) {
              var _classPrivateFieldGet9;
              (_classPrivateFieldGet9 = _classPrivateFieldGet(this, _accessibilityManager)) === null || _classPrivateFieldGet9 === void 0 || _classPrivateFieldGet9.removePointerInTextLayer(editor.contentDiv);
              editor.setParent(null);
              editor.isAttachedToDOM = false;
              editor.div.remove();
            }
            this.div = null;
            _classPrivateFieldGet(this, _editors).clear();
            _classPrivateFieldGet(this, _uiManager).removeLayer(this);
          }
          render(_ref39) {
            let {
              viewport
            } = _ref39;
            this.viewport = viewport;
            (0, _display_utils.setLayerDimensions)(this.div, viewport);
            (0, _tools.bindEvents)(this, this.div, ["dragover", "drop"]);
            for (const editor of _classPrivateFieldGet(this, _uiManager).getEditors(this.pageIndex)) {
              this.add(editor);
            }
            this.updateMode();
          }
          update(_ref40) {
            let {
              viewport
            } = _ref40;
            _classPrivateFieldGet(this, _uiManager).commitOrRemove();
            this.viewport = viewport;
            (0, _display_utils.setLayerDimensions)(this.div, {
              rotation: viewport.rotation
            });
            this.updateMode();
          }
          get pageDimensions() {
            const {
              pageWidth,
              pageHeight
            } = this.viewport.rawDims;
            return [pageWidth, pageHeight];
          }
        }
        function _changeParent2(editor) {
          var _editor$parent;
          if (editor.parent === this) {
            return;
          }
          this.attach(editor);
          (_editor$parent = editor.parent) === null || _editor$parent === void 0 || _editor$parent.detach(editor);
          editor.setParent(this);
          if (editor.div && editor.isAttachedToDOM) {
            editor.div.remove();
            this.div.append(editor.div);
          }
        }
        function _createNewEditor2(params) {
          switch (_classPrivateFieldGet(this, _uiManager).getMode()) {
            case _util.AnnotationEditorType.FREETEXT:
              return new _freetext.FreeTextEditor(params);
            case _util.AnnotationEditorType.INK:
              return new _ink.InkEditor(params);
          }
          return null;
        }
        function _createAndAddNewEditor2(event) {
          const id = this.getNextId();
          const editor = _classPrivateMethodGet(this, _createNewEditor, _createNewEditor2).call(this, {
            parent: this,
            id,
            x: event.offsetX,
            y: event.offsetY,
            uiManager: _classPrivateFieldGet(this, _uiManager)
          });
          if (editor) {
            this.add(editor);
          }
          return editor;
        }
        function _cleanup2() {
          _classPrivateFieldSet(this, _isCleaningUp, true);
          for (const editor of _classPrivateFieldGet(this, _editors).values()) {
            if (editor.isEmpty()) {
              editor.remove();
            }
          }
          _classPrivateFieldSet(this, _isCleaningUp, false);
        }
        _defineProperty(AnnotationEditorLayer, "_initialized", false);
        exports.AnnotationEditorLayer = AnnotationEditorLayer;

        /***/
      }, /* 28 */
      /***/(__unused_webpack_module, exports, __w_pdfjs_require__) => {
        var _class28;
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.FreeTextEditor = void 0;
        var _util = __w_pdfjs_require__(1);
        var _tools = __w_pdfjs_require__(5);
        var _editor = __w_pdfjs_require__(4);
        var _boundEditorDivBlur = /*#__PURE__*/new WeakMap();
        var _boundEditorDivFocus = /*#__PURE__*/new WeakMap();
        var _boundEditorDivInput = /*#__PURE__*/new WeakMap();
        var _boundEditorDivKeydown = /*#__PURE__*/new WeakMap();
        var _color = /*#__PURE__*/new WeakMap();
        var _content = /*#__PURE__*/new WeakMap();
        var _editorDivId = /*#__PURE__*/new WeakMap();
        var _hasAlreadyBeenCommitted = /*#__PURE__*/new WeakMap();
        var _fontSize = /*#__PURE__*/new WeakMap();
        var _updateFontSize = /*#__PURE__*/new WeakSet();
        var _updateColor = /*#__PURE__*/new WeakSet();
        var _extractText = /*#__PURE__*/new WeakSet();
        var _setEditorDimensions = /*#__PURE__*/new WeakSet();
        class FreeTextEditor extends _editor.AnnotationEditor {
          constructor(params) {
            super(_objectSpread(_objectSpread({}, params), {}, {
              name: "freeTextEditor"
            }));
            _classPrivateMethodInitSpec(this, _setEditorDimensions);
            _classPrivateMethodInitSpec(this, _extractText);
            _classPrivateMethodInitSpec(this, _updateColor);
            _classPrivateMethodInitSpec(this, _updateFontSize);
            _classPrivateFieldInitSpec(this, _boundEditorDivBlur, {
              writable: true,
              value: this.editorDivBlur.bind(this)
            });
            _classPrivateFieldInitSpec(this, _boundEditorDivFocus, {
              writable: true,
              value: this.editorDivFocus.bind(this)
            });
            _classPrivateFieldInitSpec(this, _boundEditorDivInput, {
              writable: true,
              value: this.editorDivInput.bind(this)
            });
            _classPrivateFieldInitSpec(this, _boundEditorDivKeydown, {
              writable: true,
              value: this.editorDivKeydown.bind(this)
            });
            _classPrivateFieldInitSpec(this, _color, {
              writable: true,
              value: void 0
            });
            _classPrivateFieldInitSpec(this, _content, {
              writable: true,
              value: ""
            });
            _classPrivateFieldInitSpec(this, _editorDivId, {
              writable: true,
              value: "".concat(this.id, "-editor")
            });
            _classPrivateFieldInitSpec(this, _hasAlreadyBeenCommitted, {
              writable: true,
              value: false
            });
            _classPrivateFieldInitSpec(this, _fontSize, {
              writable: true,
              value: void 0
            });
            _classPrivateFieldSet(this, _color, params.color || FreeTextEditor._defaultColor || _editor.AnnotationEditor._defaultLineColor);
            _classPrivateFieldSet(this, _fontSize, params.fontSize || FreeTextEditor._defaultFontSize);
          }
          static initialize(l10n) {
            this._l10nPromise = new Map(["free_text2_default_content", "editor_free_text2_aria_label"].map(str => [str, l10n.get(str)]));
            const style = getComputedStyle(document.documentElement);
            this._internalPadding = parseFloat(style.getPropertyValue("--freetext-padding"));
          }
          static updateDefaultParams(type, value) {
            switch (type) {
              case _util.AnnotationEditorParamsType.FREETEXT_SIZE:
                FreeTextEditor._defaultFontSize = value;
                break;
              case _util.AnnotationEditorParamsType.FREETEXT_COLOR:
                FreeTextEditor._defaultColor = value;
                break;
            }
          }
          updateParams(type, value) {
            switch (type) {
              case _util.AnnotationEditorParamsType.FREETEXT_SIZE:
                _classPrivateMethodGet(this, _updateFontSize, _updateFontSize2).call(this, value);
                break;
              case _util.AnnotationEditorParamsType.FREETEXT_COLOR:
                _classPrivateMethodGet(this, _updateColor, _updateColor2).call(this, value);
                break;
            }
          }
          static get defaultPropertiesToUpdate() {
            return [[_util.AnnotationEditorParamsType.FREETEXT_SIZE, FreeTextEditor._defaultFontSize], [_util.AnnotationEditorParamsType.FREETEXT_COLOR, FreeTextEditor._defaultColor || _editor.AnnotationEditor._defaultLineColor]];
          }
          get propertiesToUpdate() {
            return [[_util.AnnotationEditorParamsType.FREETEXT_SIZE, _classPrivateFieldGet(this, _fontSize)], [_util.AnnotationEditorParamsType.FREETEXT_COLOR, _classPrivateFieldGet(this, _color)]];
          }
          getInitialTranslation() {
            const scale = this.parentScale;
            return [-FreeTextEditor._internalPadding * scale, -(FreeTextEditor._internalPadding + _classPrivateFieldGet(this, _fontSize)) * scale];
          }
          rebuild() {
            super.rebuild();
            if (this.div === null) {
              return;
            }
            if (!this.isAttachedToDOM) {
              this.parent.add(this);
            }
          }
          enableEditMode() {
            if (this.isInEditMode()) {
              return;
            }
            this.parent.setEditingState(false);
            this.parent.updateToolbar(_util.AnnotationEditorType.FREETEXT);
            super.enableEditMode();
            this.overlayDiv.classList.remove("enabled");
            this.editorDiv.contentEditable = true;
            this.div.draggable = false;
            this.div.removeAttribute("aria-activedescendant");
            this.editorDiv.addEventListener("keydown", _classPrivateFieldGet(this, _boundEditorDivKeydown));
            this.editorDiv.addEventListener("focus", _classPrivateFieldGet(this, _boundEditorDivFocus));
            this.editorDiv.addEventListener("blur", _classPrivateFieldGet(this, _boundEditorDivBlur));
            this.editorDiv.addEventListener("input", _classPrivateFieldGet(this, _boundEditorDivInput));
          }
          disableEditMode() {
            if (!this.isInEditMode()) {
              return;
            }
            this.parent.setEditingState(true);
            super.disableEditMode();
            this.overlayDiv.classList.add("enabled");
            this.editorDiv.contentEditable = false;
            this.div.setAttribute("aria-activedescendant", _classPrivateFieldGet(this, _editorDivId));
            this.div.draggable = true;
            this.editorDiv.removeEventListener("keydown", _classPrivateFieldGet(this, _boundEditorDivKeydown));
            this.editorDiv.removeEventListener("focus", _classPrivateFieldGet(this, _boundEditorDivFocus));
            this.editorDiv.removeEventListener("blur", _classPrivateFieldGet(this, _boundEditorDivBlur));
            this.editorDiv.removeEventListener("input", _classPrivateFieldGet(this, _boundEditorDivInput));
            this.div.focus({
              preventScroll: true
            });
            this.isEditing = false;
            this.parent.div.classList.add("freeTextEditing");
          }
          focusin(event) {
            super.focusin(event);
            if (event.target !== this.editorDiv) {
              this.editorDiv.focus();
            }
          }
          onceAdded() {
            if (this.width) {
              return;
            }
            this.enableEditMode();
            this.editorDiv.focus();
          }
          isEmpty() {
            return !this.editorDiv || this.editorDiv.innerText.trim() === "";
          }
          remove() {
            this.isEditing = false;
            this.parent.setEditingState(true);
            this.parent.div.classList.add("freeTextEditing");
            super.remove();
          }
          commit() {
            if (!this.isInEditMode()) {
              return;
            }
            super.commit();
            if (!_classPrivateFieldGet(this, _hasAlreadyBeenCommitted)) {
              _classPrivateFieldSet(this, _hasAlreadyBeenCommitted, true);
              this.parent.addUndoableEditor(this);
            }
            this.disableEditMode();
            _classPrivateFieldSet(this, _content, _classPrivateMethodGet(this, _extractText, _extractText2).call(this).trimEnd());
            _classPrivateMethodGet(this, _setEditorDimensions, _setEditorDimensions2).call(this);
          }
          shouldGetKeyboardEvents() {
            return this.isInEditMode();
          }
          dblclick(event) {
            this.enableEditMode();
            this.editorDiv.focus();
          }
          keydown(event) {
            if (event.target === this.div && event.key === "Enter") {
              this.enableEditMode();
              this.editorDiv.focus();
            }
          }
          editorDivKeydown(event) {
            FreeTextEditor._keyboardManager.exec(this, event);
          }
          editorDivFocus(event) {
            this.isEditing = true;
          }
          editorDivBlur(event) {
            this.isEditing = false;
          }
          editorDivInput(event) {
            this.parent.div.classList.toggle("freeTextEditing", this.isEmpty());
          }
          disableEditing() {
            this.editorDiv.setAttribute("role", "comment");
            this.editorDiv.removeAttribute("aria-multiline");
          }
          enableEditing() {
            this.editorDiv.setAttribute("role", "textbox");
            this.editorDiv.setAttribute("aria-multiline", true);
          }
          render() {
            if (this.div) {
              return this.div;
            }
            let baseX, baseY;
            if (this.width) {
              baseX = this.x;
              baseY = this.y;
            }
            super.render();
            this.editorDiv = document.createElement("div");
            this.editorDiv.className = "internal";
            this.editorDiv.setAttribute("id", _classPrivateFieldGet(this, _editorDivId));
            this.enableEditing();
            FreeTextEditor._l10nPromise.get("editor_free_text2_aria_label").then(msg => {
              var _this$editorDiv;
              return (_this$editorDiv = this.editorDiv) === null || _this$editorDiv === void 0 ? void 0 : _this$editorDiv.setAttribute("aria-label", msg);
            });
            FreeTextEditor._l10nPromise.get("free_text2_default_content").then(msg => {
              var _this$editorDiv2;
              return (_this$editorDiv2 = this.editorDiv) === null || _this$editorDiv2 === void 0 ? void 0 : _this$editorDiv2.setAttribute("default-content", msg);
            });
            this.editorDiv.contentEditable = true;
            const {
              style
            } = this.editorDiv;
            style.fontSize = "calc(".concat(_classPrivateFieldGet(this, _fontSize), "px * var(--scale-factor))");
            style.color = _classPrivateFieldGet(this, _color);
            this.div.append(this.editorDiv);
            this.overlayDiv = document.createElement("div");
            this.overlayDiv.classList.add("overlay", "enabled");
            this.div.append(this.overlayDiv);
            (0, _tools.bindEvents)(this, this.div, ["dblclick", "keydown"]);
            if (this.width) {
              const [parentWidth, parentHeight] = this.parentDimensions;
              this.setAt(baseX * parentWidth, baseY * parentHeight, this.width * parentWidth, this.height * parentHeight);
              for (const line of _classPrivateFieldGet(this, _content).split("\n")) {
                const div = document.createElement("div");
                div.append(line ? document.createTextNode(line) : document.createElement("br"));
                this.editorDiv.append(div);
              }
              this.div.draggable = true;
              this.editorDiv.contentEditable = false;
            } else {
              this.div.draggable = false;
              this.editorDiv.contentEditable = true;
            }
            return this.div;
          }
          get contentDiv() {
            return this.editorDiv;
          }
          static deserialize(data, parent, uiManager) {
            const editor = super.deserialize(data, parent, uiManager);
            _classPrivateFieldSet(editor, _fontSize, data.fontSize);
            _classPrivateFieldSet(editor, _color, _util.Util.makeHexColor(...data.color));
            _classPrivateFieldSet(editor, _content, data.value);
            return editor;
          }
          serialize() {
            if (this.isEmpty()) {
              return null;
            }
            const padding = FreeTextEditor._internalPadding * this.parentScale;
            const rect = this.getRect(padding, padding);
            const color = _editor.AnnotationEditor._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : _classPrivateFieldGet(this, _color));
            return {
              annotationType: _util.AnnotationEditorType.FREETEXT,
              color,
              fontSize: _classPrivateFieldGet(this, _fontSize),
              value: _classPrivateFieldGet(this, _content),
              pageIndex: this.pageIndex,
              rect,
              rotation: this.rotation
            };
          }
        }
        _class28 = FreeTextEditor;
        function _updateFontSize2(fontSize) {
          const setFontsize = size => {
            this.editorDiv.style.fontSize = "calc(".concat(size, "px * var(--scale-factor))");
            this.translate(0, -(size - _classPrivateFieldGet(this, _fontSize)) * this.parentScale);
            _classPrivateFieldSet(this, _fontSize, size);
            _classPrivateMethodGet(this, _setEditorDimensions, _setEditorDimensions2).call(this);
          };
          const savedFontsize = _classPrivateFieldGet(this, _fontSize);
          this.addCommands({
            cmd: () => {
              setFontsize(fontSize);
            },
            undo: () => {
              setFontsize(savedFontsize);
            },
            mustExec: true,
            type: _util.AnnotationEditorParamsType.FREETEXT_SIZE,
            overwriteIfSameType: true,
            keepUndo: true
          });
        }
        function _updateColor2(color) {
          const savedColor = _classPrivateFieldGet(this, _color);
          this.addCommands({
            cmd: () => {
              _classPrivateFieldSet(this, _color, this.editorDiv.style.color = color);
            },
            undo: () => {
              _classPrivateFieldSet(this, _color, this.editorDiv.style.color = savedColor);
            },
            mustExec: true,
            type: _util.AnnotationEditorParamsType.FREETEXT_COLOR,
            overwriteIfSameType: true,
            keepUndo: true
          });
        }
        function _extractText2() {
          const divs = this.editorDiv.getElementsByTagName("div");
          if (divs.length === 0) {
            return this.editorDiv.innerText;
          }
          const buffer = [];
          for (const div of divs) {
            buffer.push(div.innerText.replace(/\r\n?|\n/, ""));
          }
          return buffer.join("\n");
        }
        function _setEditorDimensions2() {
          const [parentWidth, parentHeight] = this.parentDimensions;
          let rect;
          if (this.isAttachedToDOM) {
            rect = this.div.getBoundingClientRect();
          } else {
            const {
              currentLayer,
              div
            } = this;
            const savedDisplay = div.style.display;
            div.style.display = "hidden";
            currentLayer.div.append(this.div);
            rect = div.getBoundingClientRect();
            div.remove();
            div.style.display = savedDisplay;
          }
          this.width = rect.width / parentWidth;
          this.height = rect.height / parentHeight;
        }
        _defineProperty(FreeTextEditor, "_freeTextDefaultContent", "");
        _defineProperty(FreeTextEditor, "_l10nPromise", void 0);
        _defineProperty(FreeTextEditor, "_internalPadding", 0);
        _defineProperty(FreeTextEditor, "_defaultColor", null);
        _defineProperty(FreeTextEditor, "_defaultFontSize", 10);
        _defineProperty(FreeTextEditor, "_keyboardManager", new _tools.KeyboardManager([[["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], _class28.prototype.commitOrRemove]]));
        _defineProperty(FreeTextEditor, "_type", "freetext");
        exports.FreeTextEditor = FreeTextEditor;

        /***/
      }, /* 29 */
      /***/(__unused_webpack_module, exports, __w_pdfjs_require__) => {
        var _class29;
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.InkEditor = void 0;
        Object.defineProperty(exports, "fitCurve", {
          enumerable: true,
          get: function () {
            return _pdfjsFitCurve.fitCurve;
          }
        });
        var _util = __w_pdfjs_require__(1);
        var _editor = __w_pdfjs_require__(4);
        var _pdfjsFitCurve = __w_pdfjs_require__(30);
        var _tools = __w_pdfjs_require__(5);
        const RESIZER_SIZE = 16;
        var _aspectRatio = /*#__PURE__*/new WeakMap();
        var _baseHeight = /*#__PURE__*/new WeakMap();
        var _baseWidth = /*#__PURE__*/new WeakMap();
        var _boundCanvasPointermove = /*#__PURE__*/new WeakMap();
        var _boundCanvasPointerleave = /*#__PURE__*/new WeakMap();
        var _boundCanvasPointerup = /*#__PURE__*/new WeakMap();
        var _boundCanvasPointerdown = /*#__PURE__*/new WeakMap();
        var _disableEditing = /*#__PURE__*/new WeakMap();
        var _isCanvasInitialized = /*#__PURE__*/new WeakMap();
        var _lastPoint = /*#__PURE__*/new WeakMap();
        var _observer = /*#__PURE__*/new WeakMap();
        var _realWidth = /*#__PURE__*/new WeakMap();
        var _realHeight = /*#__PURE__*/new WeakMap();
        var _requestFrameCallback = /*#__PURE__*/new WeakMap();
        var _updateThickness = /*#__PURE__*/new WeakSet();
        var _updateColor3 = /*#__PURE__*/new WeakSet();
        var _updateOpacity = /*#__PURE__*/new WeakSet();
        var _getInitialBBox = /*#__PURE__*/new WeakSet();
        var _setStroke = /*#__PURE__*/new WeakSet();
        var _startDrawing = /*#__PURE__*/new WeakSet();
        var _draw = /*#__PURE__*/new WeakSet();
        var _stopDrawing = /*#__PURE__*/new WeakSet();
        var _redraw = /*#__PURE__*/new WeakSet();
        var _endDrawing = /*#__PURE__*/new WeakSet();
        var _createCanvas = /*#__PURE__*/new WeakSet();
        var _createObserver = /*#__PURE__*/new WeakSet();
        var _setCanvasDims = /*#__PURE__*/new WeakSet();
        var _setScaleFactor = /*#__PURE__*/new WeakSet();
        var _updateTransform = /*#__PURE__*/new WeakSet();
        var _serializePaths = /*#__PURE__*/new WeakSet();
        var _extractPointsOnBezier = /*#__PURE__*/new WeakSet();
        var _isAlmostFlat = /*#__PURE__*/new WeakSet();
        var _getBbox = /*#__PURE__*/new WeakSet();
        var _getPadding = /*#__PURE__*/new WeakSet();
        var _fitToContent = /*#__PURE__*/new WeakSet();
        var _setMinDims = /*#__PURE__*/new WeakSet();
        class InkEditor extends _editor.AnnotationEditor {
          constructor(params) {
            super(_objectSpread(_objectSpread({}, params), {}, {
              name: "inkEditor"
            }));
            _classPrivateMethodInitSpec(this, _setMinDims);
            _classPrivateMethodInitSpec(this, _fitToContent);
            _classPrivateMethodInitSpec(this, _getPadding);
            _classPrivateMethodInitSpec(this, _getBbox);
            _classPrivateMethodInitSpec(this, _isAlmostFlat);
            _classPrivateMethodInitSpec(this, _extractPointsOnBezier);
            _classPrivateMethodInitSpec(this, _serializePaths);
            _classPrivateMethodInitSpec(this, _updateTransform);
            _classPrivateMethodInitSpec(this, _setScaleFactor);
            _classPrivateMethodInitSpec(this, _setCanvasDims);
            _classPrivateMethodInitSpec(this, _createObserver);
            _classPrivateMethodInitSpec(this, _createCanvas);
            _classPrivateMethodInitSpec(this, _endDrawing);
            _classPrivateMethodInitSpec(this, _redraw);
            _classPrivateMethodInitSpec(this, _stopDrawing);
            _classPrivateMethodInitSpec(this, _draw);
            _classPrivateMethodInitSpec(this, _startDrawing);
            _classPrivateMethodInitSpec(this, _setStroke);
            _classPrivateMethodInitSpec(this, _getInitialBBox);
            _classPrivateMethodInitSpec(this, _updateOpacity);
            _classPrivateMethodInitSpec(this, _updateColor3);
            _classPrivateMethodInitSpec(this, _updateThickness);
            _classPrivateFieldInitSpec(this, _aspectRatio, {
              writable: true,
              value: 0
            });
            _classPrivateFieldInitSpec(this, _baseHeight, {
              writable: true,
              value: 0
            });
            _classPrivateFieldInitSpec(this, _baseWidth, {
              writable: true,
              value: 0
            });
            _classPrivateFieldInitSpec(this, _boundCanvasPointermove, {
              writable: true,
              value: this.canvasPointermove.bind(this)
            });
            _classPrivateFieldInitSpec(this, _boundCanvasPointerleave, {
              writable: true,
              value: this.canvasPointerleave.bind(this)
            });
            _classPrivateFieldInitSpec(this, _boundCanvasPointerup, {
              writable: true,
              value: this.canvasPointerup.bind(this)
            });
            _classPrivateFieldInitSpec(this, _boundCanvasPointerdown, {
              writable: true,
              value: this.canvasPointerdown.bind(this)
            });
            _classPrivateFieldInitSpec(this, _disableEditing, {
              writable: true,
              value: false
            });
            _classPrivateFieldInitSpec(this, _isCanvasInitialized, {
              writable: true,
              value: false
            });
            _classPrivateFieldInitSpec(this, _lastPoint, {
              writable: true,
              value: null
            });
            _classPrivateFieldInitSpec(this, _observer, {
              writable: true,
              value: null
            });
            _classPrivateFieldInitSpec(this, _realWidth, {
              writable: true,
              value: 0
            });
            _classPrivateFieldInitSpec(this, _realHeight, {
              writable: true,
              value: 0
            });
            _classPrivateFieldInitSpec(this, _requestFrameCallback, {
              writable: true,
              value: null
            });
            this.color = params.color || null;
            this.thickness = params.thickness || null;
            this.opacity = params.opacity || null;
            this.paths = [];
            this.bezierPath2D = [];
            this.currentPath = [];
            this.scaleFactor = 1;
            this.translationX = this.translationY = 0;
            this.x = 0;
            this.y = 0;
          }
          static initialize(l10n) {
            this._l10nPromise = new Map(["editor_ink_canvas_aria_label", "editor_ink2_aria_label"].map(str => [str, l10n.get(str)]));
          }
          static updateDefaultParams(type, value) {
            switch (type) {
              case _util.AnnotationEditorParamsType.INK_THICKNESS:
                InkEditor._defaultThickness = value;
                break;
              case _util.AnnotationEditorParamsType.INK_COLOR:
                InkEditor._defaultColor = value;
                break;
              case _util.AnnotationEditorParamsType.INK_OPACITY:
                InkEditor._defaultOpacity = value / 100;
                break;
            }
          }
          updateParams(type, value) {
            switch (type) {
              case _util.AnnotationEditorParamsType.INK_THICKNESS:
                _classPrivateMethodGet(this, _updateThickness, _updateThickness2).call(this, value);
                break;
              case _util.AnnotationEditorParamsType.INK_COLOR:
                _classPrivateMethodGet(this, _updateColor3, _updateColor4).call(this, value);
                break;
              case _util.AnnotationEditorParamsType.INK_OPACITY:
                _classPrivateMethodGet(this, _updateOpacity, _updateOpacity2).call(this, value);
                break;
            }
          }
          static get defaultPropertiesToUpdate() {
            return [[_util.AnnotationEditorParamsType.INK_THICKNESS, InkEditor._defaultThickness], [_util.AnnotationEditorParamsType.INK_COLOR, InkEditor._defaultColor || _editor.AnnotationEditor._defaultLineColor], [_util.AnnotationEditorParamsType.INK_OPACITY, Math.round(InkEditor._defaultOpacity * 100)]];
          }
          get propertiesToUpdate() {
            var _this$opacity;
            return [[_util.AnnotationEditorParamsType.INK_THICKNESS, this.thickness || InkEditor._defaultThickness], [_util.AnnotationEditorParamsType.INK_COLOR, this.color || InkEditor._defaultColor || _editor.AnnotationEditor._defaultLineColor], [_util.AnnotationEditorParamsType.INK_OPACITY, Math.round(100 * ((_this$opacity = this.opacity) !== null && _this$opacity !== void 0 ? _this$opacity : InkEditor._defaultOpacity))]];
          }
          rebuild() {
            super.rebuild();
            if (this.div === null) {
              return;
            }
            if (!this.canvas) {
              _classPrivateMethodGet(this, _createCanvas, _createCanvas2).call(this);
              _classPrivateMethodGet(this, _createObserver, _createObserver2).call(this);
            }
            if (!this.isAttachedToDOM) {
              this.parent.add(this);
              _classPrivateMethodGet(this, _setCanvasDims, _setCanvasDims2).call(this);
            }
            _classPrivateMethodGet(this, _fitToContent, _fitToContent2).call(this);
          }
          remove() {
            if (this.canvas === null) {
              return;
            }
            if (!this.isEmpty()) {
              this.commit();
            }
            this.canvas.width = this.canvas.height = 0;
            this.canvas.remove();
            this.canvas = null;
            _classPrivateFieldGet(this, _observer).disconnect();
            _classPrivateFieldSet(this, _observer, null);
            super.remove();
          }
          setParent(parent) {
            if (!this.parent && parent) {
              this._uiManager.removeShouldRescale(this);
            } else if (this.parent && parent === null) {
              this._uiManager.addShouldRescale(this);
            }
            super.setParent(parent);
          }
          onScaleChanging() {
            const [parentWidth, parentHeight] = this.parentDimensions;
            const width = this.width * parentWidth;
            const height = this.height * parentHeight;
            this.setDimensions(width, height);
          }
          enableEditMode() {
            if (_classPrivateFieldGet(this, _disableEditing) || this.canvas === null) {
              return;
            }
            super.enableEditMode();
            this.div.draggable = false;
            this.canvas.addEventListener("pointerdown", _classPrivateFieldGet(this, _boundCanvasPointerdown));
            this.canvas.addEventListener("pointerup", _classPrivateFieldGet(this, _boundCanvasPointerup));
          }
          disableEditMode() {
            if (!this.isInEditMode() || this.canvas === null) {
              return;
            }
            super.disableEditMode();
            this.div.draggable = !this.isEmpty();
            this.div.classList.remove("editing");
            this.canvas.removeEventListener("pointerdown", _classPrivateFieldGet(this, _boundCanvasPointerdown));
            this.canvas.removeEventListener("pointerup", _classPrivateFieldGet(this, _boundCanvasPointerup));
          }
          onceAdded() {
            this.div.draggable = !this.isEmpty();
          }
          isEmpty() {
            return this.paths.length === 0 || this.paths.length === 1 && this.paths[0].length === 0;
          }
          commit() {
            if (_classPrivateFieldGet(this, _disableEditing)) {
              return;
            }
            super.commit();
            this.isEditing = false;
            this.disableEditMode();
            this.setInForeground();
            _classPrivateFieldSet(this, _disableEditing, true);
            this.div.classList.add("disabled");
            _classPrivateMethodGet(this, _fitToContent, _fitToContent2).call(this, true);
            this.parent.addInkEditorIfNeeded(true);
            this.parent.moveEditorInDOM(this);
            this.div.focus({
              preventScroll: true
            });
          }
          focusin(event) {
            super.focusin(event);
            this.enableEditMode();
          }
          canvasPointerdown(event) {
            if (event.button !== 0 || !this.isInEditMode() || _classPrivateFieldGet(this, _disableEditing)) {
              return;
            }
            this.setInForeground();
            if (event.type !== "mouse") {
              this.div.focus();
            }
            event.stopPropagation();
            this.canvas.addEventListener("pointerleave", _classPrivateFieldGet(this, _boundCanvasPointerleave));
            this.canvas.addEventListener("pointermove", _classPrivateFieldGet(this, _boundCanvasPointermove));
            _classPrivateMethodGet(this, _startDrawing, _startDrawing2).call(this, event.offsetX, event.offsetY);
          }
          canvasPointermove(event) {
            event.stopPropagation();
            _classPrivateMethodGet(this, _draw, _draw2).call(this, event.offsetX, event.offsetY);
          }
          canvasPointerup(event) {
            if (event.button !== 0) {
              return;
            }
            if (this.isInEditMode() && this.currentPath.length !== 0) {
              event.stopPropagation();
              _classPrivateMethodGet(this, _endDrawing, _endDrawing2).call(this, event);
              this.setInBackground();
            }
          }
          canvasPointerleave(event) {
            _classPrivateMethodGet(this, _endDrawing, _endDrawing2).call(this, event);
            this.setInBackground();
          }
          render() {
            if (this.div) {
              return this.div;
            }
            let baseX, baseY;
            if (this.width) {
              baseX = this.x;
              baseY = this.y;
            }
            super.render();
            InkEditor._l10nPromise.get("editor_ink2_aria_label").then(msg => {
              var _this$div4;
              return (_this$div4 = this.div) === null || _this$div4 === void 0 ? void 0 : _this$div4.setAttribute("aria-label", msg);
            });
            const [x, y, w, h] = _classPrivateMethodGet(this, _getInitialBBox, _getInitialBBox2).call(this);
            this.setAt(x, y, 0, 0);
            this.setDims(w, h);
            _classPrivateMethodGet(this, _createCanvas, _createCanvas2).call(this);
            if (this.width) {
              const [parentWidth, parentHeight] = this.parentDimensions;
              this.setAt(baseX * parentWidth, baseY * parentHeight, this.width * parentWidth, this.height * parentHeight);
              _classPrivateFieldSet(this, _isCanvasInitialized, true);
              _classPrivateMethodGet(this, _setCanvasDims, _setCanvasDims2).call(this);
              this.setDims(this.width * parentWidth, this.height * parentHeight);
              _classPrivateMethodGet(this, _redraw, _redraw2).call(this);
              _classPrivateMethodGet(this, _setMinDims, _setMinDims2).call(this);
              this.div.classList.add("disabled");
            } else {
              this.div.classList.add("editing");
              this.enableEditMode();
            }
            _classPrivateMethodGet(this, _createObserver, _createObserver2).call(this);
            return this.div;
          }
          setDimensions(width, height) {
            const roundedWidth = Math.round(width);
            const roundedHeight = Math.round(height);
            if (_classPrivateFieldGet(this, _realWidth) === roundedWidth && _classPrivateFieldGet(this, _realHeight) === roundedHeight) {
              return;
            }
            _classPrivateFieldSet(this, _realWidth, roundedWidth);
            _classPrivateFieldSet(this, _realHeight, roundedHeight);
            this.canvas.style.visibility = "hidden";
            if (_classPrivateFieldGet(this, _aspectRatio) && Math.abs(_classPrivateFieldGet(this, _aspectRatio) - width / height) > 1e-2) {
              height = Math.ceil(width / _classPrivateFieldGet(this, _aspectRatio));
              this.setDims(width, height);
            }
            const [parentWidth, parentHeight] = this.parentDimensions;
            this.width = width / parentWidth;
            this.height = height / parentHeight;
            if (_classPrivateFieldGet(this, _disableEditing)) {
              _classPrivateMethodGet(this, _setScaleFactor, _setScaleFactor2).call(this, width, height);
            }
            _classPrivateMethodGet(this, _setCanvasDims, _setCanvasDims2).call(this);
            _classPrivateMethodGet(this, _redraw, _redraw2).call(this);
            this.canvas.style.visibility = "visible";
            this.fixDims();
          }
          static deserialize(data, parent, uiManager) {
            const editor = super.deserialize(data, parent, uiManager);
            editor.thickness = data.thickness;
            editor.color = _util.Util.makeHexColor(...data.color);
            editor.opacity = data.opacity;
            const [pageWidth, pageHeight] = editor.pageDimensions;
            const width = editor.width * pageWidth;
            const height = editor.height * pageHeight;
            const scaleFactor = editor.parentScale;
            const padding = data.thickness / 2;
            _classPrivateFieldSet(editor, _aspectRatio, width / height);
            _classPrivateFieldSet(editor, _disableEditing, true);
            _classPrivateFieldSet(editor, _realWidth, Math.round(width));
            _classPrivateFieldSet(editor, _realHeight, Math.round(height));
            for (const {
              bezier
            } of data.paths) {
              const path = [];
              editor.paths.push(path);
              let p0 = scaleFactor * (bezier[0] - padding);
              let p1 = scaleFactor * (height - bezier[1] - padding);
              for (let i = 2, ii = bezier.length; i < ii; i += 6) {
                const p10 = scaleFactor * (bezier[i] - padding);
                const p11 = scaleFactor * (height - bezier[i + 1] - padding);
                const p20 = scaleFactor * (bezier[i + 2] - padding);
                const p21 = scaleFactor * (height - bezier[i + 3] - padding);
                const p30 = scaleFactor * (bezier[i + 4] - padding);
                const p31 = scaleFactor * (height - bezier[i + 5] - padding);
                path.push([[p0, p1], [p10, p11], [p20, p21], [p30, p31]]);
                p0 = p30;
                p1 = p31;
              }
              const path2D = _classStaticPrivateMethodGet(this, InkEditor, _buildPath2D).call(this, path);
              editor.bezierPath2D.push(path2D);
            }
            const bbox = _classPrivateMethodGet(editor, _getBbox, _getBbox2).call(editor);
            _classPrivateFieldSet(editor, _baseWidth, Math.max(RESIZER_SIZE, bbox[2] - bbox[0]));
            _classPrivateFieldSet(editor, _baseHeight, Math.max(RESIZER_SIZE, bbox[3] - bbox[1]));
            _classPrivateMethodGet(editor, _setScaleFactor, _setScaleFactor2).call(editor, width, height);
            return editor;
          }
          serialize() {
            if (this.isEmpty()) {
              return null;
            }
            const rect = this.getRect(0, 0);
            const height = this.rotation % 180 === 0 ? rect[3] - rect[1] : rect[2] - rect[0];
            const color = _editor.AnnotationEditor._colorManager.convert(this.ctx.strokeStyle);
            return {
              annotationType: _util.AnnotationEditorType.INK,
              color,
              thickness: this.thickness,
              opacity: this.opacity,
              paths: _classPrivateMethodGet(this, _serializePaths, _serializePaths2).call(this, this.scaleFactor / this.parentScale, this.translationX, this.translationY, height),
              pageIndex: this.pageIndex,
              rect,
              rotation: this.rotation
            };
          }
        }
        _class29 = InkEditor;
        function _updateThickness2(thickness) {
          const savedThickness = this.thickness;
          this.addCommands({
            cmd: () => {
              this.thickness = thickness;
              _classPrivateMethodGet(this, _fitToContent, _fitToContent2).call(this);
            },
            undo: () => {
              this.thickness = savedThickness;
              _classPrivateMethodGet(this, _fitToContent, _fitToContent2).call(this);
            },
            mustExec: true,
            type: _util.AnnotationEditorParamsType.INK_THICKNESS,
            overwriteIfSameType: true,
            keepUndo: true
          });
        }
        function _updateColor4(color) {
          const savedColor = this.color;
          this.addCommands({
            cmd: () => {
              this.color = color;
              _classPrivateMethodGet(this, _redraw, _redraw2).call(this);
            },
            undo: () => {
              this.color = savedColor;
              _classPrivateMethodGet(this, _redraw, _redraw2).call(this);
            },
            mustExec: true,
            type: _util.AnnotationEditorParamsType.INK_COLOR,
            overwriteIfSameType: true,
            keepUndo: true
          });
        }
        function _updateOpacity2(opacity) {
          opacity /= 100;
          const savedOpacity = this.opacity;
          this.addCommands({
            cmd: () => {
              this.opacity = opacity;
              _classPrivateMethodGet(this, _redraw, _redraw2).call(this);
            },
            undo: () => {
              this.opacity = savedOpacity;
              _classPrivateMethodGet(this, _redraw, _redraw2).call(this);
            },
            mustExec: true,
            type: _util.AnnotationEditorParamsType.INK_OPACITY,
            overwriteIfSameType: true,
            keepUndo: true
          });
        }
        function _getInitialBBox2() {
          const {
            parentRotation,
            parentDimensions: [width, height]
          } = this;
          switch (parentRotation) {
            case 90:
              return [0, height, height, width];
            case 180:
              return [width, height, width, height];
            case 270:
              return [width, 0, height, width];
            default:
              return [0, 0, width, height];
          }
        }
        function _setStroke2() {
          const {
            ctx,
            color,
            opacity,
            thickness,
            parentScale,
            scaleFactor
          } = this;
          ctx.lineWidth = thickness * parentScale / scaleFactor;
          ctx.lineCap = "round";
          ctx.lineJoin = "round";
          ctx.miterLimit = 10;
          ctx.strokeStyle = "".concat(color).concat((0, _tools.opacityToHex)(opacity));
        }
        function _startDrawing2(x, y) {
          this.isEditing = true;
          if (!_classPrivateFieldGet(this, _isCanvasInitialized)) {
            var _this$opacity2;
            _classPrivateFieldSet(this, _isCanvasInitialized, true);
            _classPrivateMethodGet(this, _setCanvasDims, _setCanvasDims2).call(this);
            this.thickness || (this.thickness = _class29._defaultThickness);
            this.color || (this.color = _class29._defaultColor || _editor.AnnotationEditor._defaultLineColor);
            (_this$opacity2 = this.opacity) !== null && _this$opacity2 !== void 0 ? _this$opacity2 : this.opacity = _class29._defaultOpacity;
          }
          this.currentPath.push([x, y]);
          _classPrivateFieldSet(this, _lastPoint, null);
          _classPrivateMethodGet(this, _setStroke, _setStroke2).call(this);
          this.ctx.beginPath();
          this.ctx.moveTo(x, y);
          _classPrivateFieldSet(this, _requestFrameCallback, () => {
            if (!_classPrivateFieldGet(this, _requestFrameCallback)) {
              return;
            }
            if (_classPrivateFieldGet(this, _lastPoint)) {
              if (this.isEmpty()) {
                this.ctx.setTransform(1, 0, 0, 1, 0, 0);
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
              } else {
                _classPrivateMethodGet(this, _redraw, _redraw2).call(this);
              }
              this.ctx.lineTo(..._classPrivateFieldGet(this, _lastPoint));
              _classPrivateFieldSet(this, _lastPoint, null);
              this.ctx.stroke();
            }
            window.requestAnimationFrame(_classPrivateFieldGet(this, _requestFrameCallback));
          });
          window.requestAnimationFrame(_classPrivateFieldGet(this, _requestFrameCallback));
        }
        function _draw2(x, y) {
          const [lastX, lastY] = this.currentPath.at(-1);
          if (x === lastX && y === lastY) {
            return;
          }
          this.currentPath.push([x, y]);
          _classPrivateFieldSet(this, _lastPoint, [x, y]);
        }
        function _stopDrawing2(x, y) {
          this.ctx.closePath();
          _classPrivateFieldSet(this, _requestFrameCallback, null);
          x = Math.min(Math.max(x, 0), this.canvas.width);
          y = Math.min(Math.max(y, 0), this.canvas.height);
          const [lastX, lastY] = this.currentPath.at(-1);
          if (x !== lastX || y !== lastY) {
            this.currentPath.push([x, y]);
          }
          let bezier;
          if (this.currentPath.length !== 1) {
            bezier = (0, _pdfjsFitCurve.fitCurve)(this.currentPath, 30, null);
          } else {
            const xy = [x, y];
            bezier = [[xy, xy.slice(), xy.slice(), xy]];
          }
          const path2D = _classStaticPrivateMethodGet(_class29, _class29, _buildPath2D).call(_class29, bezier);
          this.currentPath.length = 0;
          const cmd = () => {
            this.paths.push(bezier);
            this.bezierPath2D.push(path2D);
            this.rebuild();
          };
          const undo = () => {
            this.paths.pop();
            this.bezierPath2D.pop();
            if (this.paths.length === 0) {
              this.remove();
            } else {
              if (!this.canvas) {
                _classPrivateMethodGet(this, _createCanvas, _createCanvas2).call(this);
                _classPrivateMethodGet(this, _createObserver, _createObserver2).call(this);
              }
              _classPrivateMethodGet(this, _fitToContent, _fitToContent2).call(this);
            }
          };
          this.addCommands({
            cmd,
            undo,
            mustExec: true
          });
        }
        function _redraw2() {
          if (this.isEmpty()) {
            _classPrivateMethodGet(this, _updateTransform, _updateTransform2).call(this);
            return;
          }
          _classPrivateMethodGet(this, _setStroke, _setStroke2).call(this);
          const {
            canvas,
            ctx
          } = this;
          ctx.setTransform(1, 0, 0, 1, 0, 0);
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          _classPrivateMethodGet(this, _updateTransform, _updateTransform2).call(this);
          for (const path of this.bezierPath2D) {
            ctx.stroke(path);
          }
        }
        function _endDrawing2(event) {
          _classPrivateMethodGet(this, _stopDrawing, _stopDrawing2).call(this, event.offsetX, event.offsetY);
          this.canvas.removeEventListener("pointerleave", _classPrivateFieldGet(this, _boundCanvasPointerleave));
          this.canvas.removeEventListener("pointermove", _classPrivateFieldGet(this, _boundCanvasPointermove));
          this.addToAnnotationStorage();
        }
        function _createCanvas2() {
          this.canvas = document.createElement("canvas");
          this.canvas.width = this.canvas.height = 0;
          this.canvas.className = "inkEditorCanvas";
          _class29._l10nPromise.get("editor_ink_canvas_aria_label").then(msg => {
            var _this$canvas;
            return (_this$canvas = this.canvas) === null || _this$canvas === void 0 ? void 0 : _this$canvas.setAttribute("aria-label", msg);
          });
          this.div.append(this.canvas);
          this.ctx = this.canvas.getContext("2d");
        }
        function _createObserver2() {
          _classPrivateFieldSet(this, _observer, new ResizeObserver(entries => {
            const rect = entries[0].contentRect;
            if (rect.width && rect.height) {
              this.setDimensions(rect.width, rect.height);
            }
          }));
          _classPrivateFieldGet(this, _observer).observe(this.div);
        }
        function _setCanvasDims2() {
          if (!_classPrivateFieldGet(this, _isCanvasInitialized)) {
            return;
          }
          const [parentWidth, parentHeight] = this.parentDimensions;
          this.canvas.width = Math.ceil(this.width * parentWidth);
          this.canvas.height = Math.ceil(this.height * parentHeight);
          _classPrivateMethodGet(this, _updateTransform, _updateTransform2).call(this);
        }
        function _setScaleFactor2(width, height) {
          const padding = _classPrivateMethodGet(this, _getPadding, _getPadding2).call(this);
          const scaleFactorW = (width - padding) / _classPrivateFieldGet(this, _baseWidth);
          const scaleFactorH = (height - padding) / _classPrivateFieldGet(this, _baseHeight);
          this.scaleFactor = Math.min(scaleFactorW, scaleFactorH);
        }
        function _updateTransform2() {
          const padding = _classPrivateMethodGet(this, _getPadding, _getPadding2).call(this) / 2;
          this.ctx.setTransform(this.scaleFactor, 0, 0, this.scaleFactor, this.translationX * this.scaleFactor + padding, this.translationY * this.scaleFactor + padding);
        }
        function _buildPath2D(bezier) {
          const path2D = new Path2D();
          for (let i = 0, ii = bezier.length; i < ii; i++) {
            const [first, control1, control2, second] = bezier[i];
            if (i === 0) {
              path2D.moveTo(...first);
            }
            path2D.bezierCurveTo(control1[0], control1[1], control2[0], control2[1], second[0], second[1]);
          }
          return path2D;
        }
        function _serializePaths2(s, tx, ty, h) {
          const NUMBER_OF_POINTS_ON_BEZIER_CURVE = 4;
          const paths = [];
          const padding = this.thickness / 2;
          let buffer, points;
          for (const bezier of this.paths) {
            buffer = [];
            points = [];
            for (let i = 0, ii = bezier.length; i < ii; i++) {
              const [first, control1, control2, second] = bezier[i];
              const p10 = s * (first[0] + tx) + padding;
              const p11 = h - s * (first[1] + ty) - padding;
              const p20 = s * (control1[0] + tx) + padding;
              const p21 = h - s * (control1[1] + ty) - padding;
              const p30 = s * (control2[0] + tx) + padding;
              const p31 = h - s * (control2[1] + ty) - padding;
              const p40 = s * (second[0] + tx) + padding;
              const p41 = h - s * (second[1] + ty) - padding;
              if (i === 0) {
                buffer.push(p10, p11);
                points.push(p10, p11);
              }
              buffer.push(p20, p21, p30, p31, p40, p41);
              _classPrivateMethodGet(this, _extractPointsOnBezier, _extractPointsOnBezier2).call(this, p10, p11, p20, p21, p30, p31, p40, p41, NUMBER_OF_POINTS_ON_BEZIER_CURVE, points);
            }
            paths.push({
              bezier: buffer,
              points
            });
          }
          return paths;
        }
        function _extractPointsOnBezier2(p10, p11, p20, p21, p30, p31, p40, p41, n, points) {
          if (_classPrivateMethodGet(this, _isAlmostFlat, _isAlmostFlat2).call(this, p10, p11, p20, p21, p30, p31, p40, p41)) {
            points.push(p40, p41);
            return;
          }
          for (let i = 1; i < n - 1; i++) {
            const t = i / n;
            const mt = 1 - t;
            let q10 = t * p10 + mt * p20;
            let q11 = t * p11 + mt * p21;
            let q20 = t * p20 + mt * p30;
            let q21 = t * p21 + mt * p31;
            const q30 = t * p30 + mt * p40;
            const q31 = t * p31 + mt * p41;
            q10 = t * q10 + mt * q20;
            q11 = t * q11 + mt * q21;
            q20 = t * q20 + mt * q30;
            q21 = t * q21 + mt * q31;
            q10 = t * q10 + mt * q20;
            q11 = t * q11 + mt * q21;
            points.push(q10, q11);
          }
          points.push(p40, p41);
        }
        function _isAlmostFlat2(p10, p11, p20, p21, p30, p31, p40, p41) {
          const tol = 10;
          const ax = (3 * p20 - 2 * p10 - p40) ** 2;
          const ay = (3 * p21 - 2 * p11 - p41) ** 2;
          const bx = (3 * p30 - p10 - 2 * p40) ** 2;
          const by = (3 * p31 - p11 - 2 * p41) ** 2;
          return Math.max(ax, bx) + Math.max(ay, by) <= tol;
        }
        function _getBbox2() {
          let xMin = Infinity;
          let xMax = -Infinity;
          let yMin = Infinity;
          let yMax = -Infinity;
          for (const path of this.paths) {
            for (const [first, control1, control2, second] of path) {
              const bbox = _util.Util.bezierBoundingBox(...first, ...control1, ...control2, ...second);
              xMin = Math.min(xMin, bbox[0]);
              yMin = Math.min(yMin, bbox[1]);
              xMax = Math.max(xMax, bbox[2]);
              yMax = Math.max(yMax, bbox[3]);
            }
          }
          return [xMin, yMin, xMax, yMax];
        }
        function _getPadding2() {
          return _classPrivateFieldGet(this, _disableEditing) ? Math.ceil(this.thickness * this.parentScale) : 0;
        }
        function _fitToContent2() {
          let firstTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          if (this.isEmpty()) {
            return;
          }
          if (!_classPrivateFieldGet(this, _disableEditing)) {
            _classPrivateMethodGet(this, _redraw, _redraw2).call(this);
            return;
          }
          const bbox = _classPrivateMethodGet(this, _getBbox, _getBbox2).call(this);
          const padding = _classPrivateMethodGet(this, _getPadding, _getPadding2).call(this);
          _classPrivateFieldSet(this, _baseWidth, Math.max(RESIZER_SIZE, bbox[2] - bbox[0]));
          _classPrivateFieldSet(this, _baseHeight, Math.max(RESIZER_SIZE, bbox[3] - bbox[1]));
          const width = Math.ceil(padding + _classPrivateFieldGet(this, _baseWidth) * this.scaleFactor);
          const height = Math.ceil(padding + _classPrivateFieldGet(this, _baseHeight) * this.scaleFactor);
          const [parentWidth, parentHeight] = this.parentDimensions;
          this.width = width / parentWidth;
          this.height = height / parentHeight;
          _classPrivateFieldSet(this, _aspectRatio, width / height);
          _classPrivateMethodGet(this, _setMinDims, _setMinDims2).call(this);
          const prevTranslationX = this.translationX;
          const prevTranslationY = this.translationY;
          this.translationX = -bbox[0];
          this.translationY = -bbox[1];
          _classPrivateMethodGet(this, _setCanvasDims, _setCanvasDims2).call(this);
          _classPrivateMethodGet(this, _redraw, _redraw2).call(this);
          _classPrivateFieldSet(this, _realWidth, width);
          _classPrivateFieldSet(this, _realHeight, height);
          this.setDims(width, height);
          const unscaledPadding = firstTime ? padding / this.scaleFactor / 2 : 0;
          this.translate(prevTranslationX - this.translationX - unscaledPadding, prevTranslationY - this.translationY - unscaledPadding);
        }
        function _setMinDims2() {
          const {
            style
          } = this.div;
          if (_classPrivateFieldGet(this, _aspectRatio) >= 1) {
            style.minHeight = "".concat(RESIZER_SIZE, "px");
            style.minWidth = "".concat(Math.round(_classPrivateFieldGet(this, _aspectRatio) * RESIZER_SIZE), "px");
          } else {
            style.minWidth = "".concat(RESIZER_SIZE, "px");
            style.minHeight = "".concat(Math.round(RESIZER_SIZE / _classPrivateFieldGet(this, _aspectRatio)), "px");
          }
        }
        _defineProperty(InkEditor, "_defaultColor", null);
        _defineProperty(InkEditor, "_defaultOpacity", 1);
        _defineProperty(InkEditor, "_defaultThickness", 1);
        _defineProperty(InkEditor, "_l10nPromise", void 0);
        _defineProperty(InkEditor, "_type", "ink");
        exports.InkEditor = InkEditor;

        /***/
      }, /* 30 */
      /***/(__unused_webpack_module, exports, __w_pdfjs_require__) => {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.fitCurve = void 0;
        const fitCurve = __w_pdfjs_require__(31);
        exports.fitCurve = fitCurve;

        /***/
      }, /* 31 */
      /***/module => {
        function fitCurve(points, maxError, progressCallback) {
          if (!Array.isArray(points)) {
            throw new TypeError("First argument should be an array");
          }
          points.forEach(point => {
            if (!Array.isArray(point) || point.some(item => typeof item !== 'number') || point.length !== points[0].length) {
              throw Error("Each point should be an array of numbers. Each point should have the same amount of numbers.");
            }
          });
          points = points.filter((point, i) => i === 0 || !point.every((val, j) => val === points[i - 1][j]));
          if (points.length < 2) {
            return [];
          }
          const len = points.length;
          const leftTangent = createTangent(points[1], points[0]);
          const rightTangent = createTangent(points[len - 2], points[len - 1]);
          return fitCubic(points, leftTangent, rightTangent, maxError, progressCallback);
        }
        function fitCubic(points, leftTangent, rightTangent, error, progressCallback) {
          const MaxIterations = 20;
          var bezCurve, u, uPrime, maxError, prevErr, splitPoint, prevSplit, centerVector, toCenterTangent, fromCenterTangent, beziers, dist, i;
          if (points.length === 2) {
            dist = maths.vectorLen(maths.subtract(points[0], points[1])) / 3.0;
            bezCurve = [points[0], maths.addArrays(points[0], maths.mulItems(leftTangent, dist)), maths.addArrays(points[1], maths.mulItems(rightTangent, dist)), points[1]];
            return [bezCurve];
          }
          u = chordLengthParameterize(points);
          [bezCurve, maxError, splitPoint] = generateAndReport(points, u, u, leftTangent, rightTangent, progressCallback);
          if (maxError === 0 || maxError < error) {
            return [bezCurve];
          }
          if (maxError < error * error) {
            uPrime = u;
            prevErr = maxError;
            prevSplit = splitPoint;
            for (i = 0; i < MaxIterations; i++) {
              uPrime = reparameterize(bezCurve, points, uPrime);
              [bezCurve, maxError, splitPoint] = generateAndReport(points, u, uPrime, leftTangent, rightTangent, progressCallback);
              if (maxError < error) {
                return [bezCurve];
              } else if (splitPoint === prevSplit) {
                let errChange = maxError / prevErr;
                if (errChange > .9999 && errChange < 1.0001) {
                  break;
                }
              }
              prevErr = maxError;
              prevSplit = splitPoint;
            }
          }
          beziers = [];
          centerVector = maths.subtract(points[splitPoint - 1], points[splitPoint + 1]);
          if (centerVector.every(val => val === 0)) {
            centerVector = maths.subtract(points[splitPoint - 1], points[splitPoint]);
            [centerVector[0], centerVector[1]] = [-centerVector[1], centerVector[0]];
          }
          toCenterTangent = maths.normalize(centerVector);
          fromCenterTangent = maths.mulItems(toCenterTangent, -1);
          beziers = beziers.concat(fitCubic(points.slice(0, splitPoint + 1), leftTangent, toCenterTangent, error, progressCallback));
          beziers = beziers.concat(fitCubic(points.slice(splitPoint), fromCenterTangent, rightTangent, error, progressCallback));
          return beziers;
        }
        ;
        function generateAndReport(points, paramsOrig, paramsPrime, leftTangent, rightTangent, progressCallback) {
          var bezCurve, maxError, splitPoint;
          bezCurve = generateBezier(points, paramsPrime, leftTangent, rightTangent, progressCallback);
          [maxError, splitPoint] = computeMaxError(points, bezCurve, paramsOrig);
          if (progressCallback) {
            progressCallback({
              bez: bezCurve,
              points: points,
              params: paramsOrig,
              maxErr: maxError,
              maxPoint: splitPoint
            });
          }
          return [bezCurve, maxError, splitPoint];
        }
        function generateBezier(points, parameters, leftTangent, rightTangent) {
          var bezCurve,
            A,
            a,
            C,
            X,
            det_C0_C1,
            det_C0_X,
            det_X_C1,
            alpha_l,
            alpha_r,
            epsilon,
            segLength,
            i,
            len,
            tmp,
            u,
            ux,
            firstPoint = points[0],
            lastPoint = points[points.length - 1];
          bezCurve = [firstPoint, null, null, lastPoint];
          A = maths.zeros_Xx2x2(parameters.length);
          for (i = 0, len = parameters.length; i < len; i++) {
            u = parameters[i];
            ux = 1 - u;
            a = A[i];
            a[0] = maths.mulItems(leftTangent, 3 * u * (ux * ux));
            a[1] = maths.mulItems(rightTangent, 3 * ux * (u * u));
          }
          C = [[0, 0], [0, 0]];
          X = [0, 0];
          for (i = 0, len = points.length; i < len; i++) {
            u = parameters[i];
            a = A[i];
            C[0][0] += maths.dot(a[0], a[0]);
            C[0][1] += maths.dot(a[0], a[1]);
            C[1][0] += maths.dot(a[0], a[1]);
            C[1][1] += maths.dot(a[1], a[1]);
            tmp = maths.subtract(points[i], bezier.q([firstPoint, firstPoint, lastPoint, lastPoint], u));
            X[0] += maths.dot(a[0], tmp);
            X[1] += maths.dot(a[1], tmp);
          }
          det_C0_C1 = C[0][0] * C[1][1] - C[1][0] * C[0][1];
          det_C0_X = C[0][0] * X[1] - C[1][0] * X[0];
          det_X_C1 = X[0] * C[1][1] - X[1] * C[0][1];
          alpha_l = det_C0_C1 === 0 ? 0 : det_X_C1 / det_C0_C1;
          alpha_r = det_C0_C1 === 0 ? 0 : det_C0_X / det_C0_C1;
          segLength = maths.vectorLen(maths.subtract(firstPoint, lastPoint));
          epsilon = 1.0e-6 * segLength;
          if (alpha_l < epsilon || alpha_r < epsilon) {
            bezCurve[1] = maths.addArrays(firstPoint, maths.mulItems(leftTangent, segLength / 3.0));
            bezCurve[2] = maths.addArrays(lastPoint, maths.mulItems(rightTangent, segLength / 3.0));
          } else {
            bezCurve[1] = maths.addArrays(firstPoint, maths.mulItems(leftTangent, alpha_l));
            bezCurve[2] = maths.addArrays(lastPoint, maths.mulItems(rightTangent, alpha_r));
          }
          return bezCurve;
        }
        ;
        function reparameterize(bezier, points, parameters) {
          return parameters.map((p, i) => newtonRaphsonRootFind(bezier, points[i], p));
        }
        ;
        function newtonRaphsonRootFind(bez, point, u) {
          var d = maths.subtract(bezier.q(bez, u), point),
            qprime = bezier.qprime(bez, u),
            numerator = maths.mulMatrix(d, qprime),
            denominator = maths.sum(maths.squareItems(qprime)) + 2 * maths.mulMatrix(d, bezier.qprimeprime(bez, u));
          if (denominator === 0) {
            return u;
          } else {
            return u - numerator / denominator;
          }
        }
        ;
        function chordLengthParameterize(points) {
          var u = [],
            currU,
            prevU,
            prevP;
          points.forEach((p, i) => {
            currU = i ? prevU + maths.vectorLen(maths.subtract(p, prevP)) : 0;
            u.push(currU);
            prevU = currU;
            prevP = p;
          });
          u = u.map(x => x / prevU);
          return u;
        }
        ;
        function computeMaxError(points, bez, parameters) {
          var dist, maxDist, splitPoint, v, i, count, point, t;
          maxDist = 0;
          splitPoint = Math.floor(points.length / 2);
          const t_distMap = mapTtoRelativeDistances(bez, 10);
          for (i = 0, count = points.length; i < count; i++) {
            point = points[i];
            t = find_t(bez, parameters[i], t_distMap, 10);
            v = maths.subtract(bezier.q(bez, t), point);
            dist = v[0] * v[0] + v[1] * v[1];
            if (dist > maxDist) {
              maxDist = dist;
              splitPoint = i;
            }
          }
          return [maxDist, splitPoint];
        }
        ;
        var mapTtoRelativeDistances = function (bez, B_parts) {
          var B_t_curr;
          var B_t_dist = [0];
          var B_t_prev = bez[0];
          var sumLen = 0;
          for (var i = 1; i <= B_parts; i++) {
            B_t_curr = bezier.q(bez, i / B_parts);
            sumLen += maths.vectorLen(maths.subtract(B_t_curr, B_t_prev));
            B_t_dist.push(sumLen);
            B_t_prev = B_t_curr;
          }
          B_t_dist = B_t_dist.map(x => x / sumLen);
          return B_t_dist;
        };
        function find_t(bez, param, t_distMap, B_parts) {
          if (param < 0) {
            return 0;
          }
          if (param > 1) {
            return 1;
          }
          var lenMax, lenMin, tMax, tMin, t;
          for (var i = 1; i <= B_parts; i++) {
            if (param <= t_distMap[i]) {
              tMin = (i - 1) / B_parts;
              tMax = i / B_parts;
              lenMin = t_distMap[i - 1];
              lenMax = t_distMap[i];
              t = (param - lenMin) / (lenMax - lenMin) * (tMax - tMin) + tMin;
              break;
            }
          }
          return t;
        }
        function createTangent(pointA, pointB) {
          return maths.normalize(maths.subtract(pointA, pointB));
        }
        class maths {
          static zeros_Xx2x2(x) {
            var zs = [];
            while (x--) {
              zs.push([0, 0]);
            }
            return zs;
          }
          static mulItems(items, multiplier) {
            return items.map(x => x * multiplier);
          }
          static mulMatrix(m1, m2) {
            return m1.reduce((sum, x1, i) => sum + x1 * m2[i], 0);
          }
          static subtract(arr1, arr2) {
            return arr1.map((x1, i) => x1 - arr2[i]);
          }
          static addArrays(arr1, arr2) {
            return arr1.map((x1, i) => x1 + arr2[i]);
          }
          static addItems(items, addition) {
            return items.map(x => x + addition);
          }
          static sum(items) {
            return items.reduce((sum, x) => sum + x);
          }
          static dot(m1, m2) {
            return maths.mulMatrix(m1, m2);
          }
          static vectorLen(v) {
            return Math.hypot(...v);
          }
          static divItems(items, divisor) {
            return items.map(x => x / divisor);
          }
          static squareItems(items) {
            return items.map(x => x * x);
          }
          static normalize(v) {
            return this.divItems(v, this.vectorLen(v));
          }
        }
        class bezier {
          static q(ctrlPoly, t) {
            var tx = 1.0 - t;
            var pA = maths.mulItems(ctrlPoly[0], tx * tx * tx),
              pB = maths.mulItems(ctrlPoly[1], 3 * tx * tx * t),
              pC = maths.mulItems(ctrlPoly[2], 3 * tx * t * t),
              pD = maths.mulItems(ctrlPoly[3], t * t * t);
            return maths.addArrays(maths.addArrays(pA, pB), maths.addArrays(pC, pD));
          }
          static qprime(ctrlPoly, t) {
            var tx = 1.0 - t;
            var pA = maths.mulItems(maths.subtract(ctrlPoly[1], ctrlPoly[0]), 3 * tx * tx),
              pB = maths.mulItems(maths.subtract(ctrlPoly[2], ctrlPoly[1]), 6 * tx * t),
              pC = maths.mulItems(maths.subtract(ctrlPoly[3], ctrlPoly[2]), 3 * t * t);
            return maths.addArrays(maths.addArrays(pA, pB), pC);
          }
          static qprimeprime(ctrlPoly, t) {
            return maths.addArrays(maths.mulItems(maths.addArrays(maths.subtract(ctrlPoly[2], maths.mulItems(ctrlPoly[1], 2)), ctrlPoly[0]), 6 * (1.0 - t)), maths.mulItems(maths.addArrays(maths.subtract(ctrlPoly[3], maths.mulItems(ctrlPoly[2], 2)), ctrlPoly[1]), 6 * t));
          }
        }
        module.exports = fitCurve;
        module.exports.fitCubic = fitCubic;
        module.exports.createTangent = createTangent;

        /***/
      }, /* 32 */
      /***/(__unused_webpack_module, exports, __w_pdfjs_require__) => {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.AnnotationLayer = void 0;
        var _util = __w_pdfjs_require__(1);
        var _display_utils = __w_pdfjs_require__(6);
        var _annotation_storage = __w_pdfjs_require__(3);
        var _scripting_utils = __w_pdfjs_require__(33);
        var _xfa_layer = __w_pdfjs_require__(34);
        const DEFAULT_TAB_INDEX = 1000;
        const DEFAULT_FONT_SIZE = 9;
        const GetElementsByNameSet = new WeakSet();
        function getRectDims(rect) {
          return {
            width: rect[2] - rect[0],
            height: rect[3] - rect[1]
          };
        }
        class AnnotationElementFactory {
          static create(parameters) {
            const subtype = parameters.data.annotationType;
            switch (subtype) {
              case _util.AnnotationType.LINK:
                return new LinkAnnotationElement(parameters);
              case _util.AnnotationType.TEXT:
                return new TextAnnotationElement(parameters);
              case _util.AnnotationType.WIDGET:
                const fieldType = parameters.data.fieldType;
                switch (fieldType) {
                  case "Tx":
                    return new TextWidgetAnnotationElement(parameters);
                  case "Btn":
                    if (parameters.data.radioButton) {
                      return new RadioButtonWidgetAnnotationElement(parameters);
                    } else if (parameters.data.checkBox) {
                      return new CheckboxWidgetAnnotationElement(parameters);
                    }
                    return new PushButtonWidgetAnnotationElement(parameters);
                  case "Ch":
                    return new ChoiceWidgetAnnotationElement(parameters);
                }
                return new WidgetAnnotationElement(parameters);
              case _util.AnnotationType.POPUP:
                return new PopupAnnotationElement(parameters);
              case _util.AnnotationType.FREETEXT:
                return new FreeTextAnnotationElement(parameters);
              case _util.AnnotationType.LINE:
                return new LineAnnotationElement(parameters);
              case _util.AnnotationType.SQUARE:
                return new SquareAnnotationElement(parameters);
              case _util.AnnotationType.CIRCLE:
                return new CircleAnnotationElement(parameters);
              case _util.AnnotationType.POLYLINE:
                return new PolylineAnnotationElement(parameters);
              case _util.AnnotationType.CARET:
                return new CaretAnnotationElement(parameters);
              case _util.AnnotationType.INK:
                return new InkAnnotationElement(parameters);
              case _util.AnnotationType.POLYGON:
                return new PolygonAnnotationElement(parameters);
              case _util.AnnotationType.HIGHLIGHT:
                return new HighlightAnnotationElement(parameters);
              case _util.AnnotationType.UNDERLINE:
                return new UnderlineAnnotationElement(parameters);
              case _util.AnnotationType.SQUIGGLY:
                return new SquigglyAnnotationElement(parameters);
              case _util.AnnotationType.STRIKEOUT:
                return new StrikeOutAnnotationElement(parameters);
              case _util.AnnotationType.STAMP:
                return new StampAnnotationElement(parameters);
              case _util.AnnotationType.FILEATTACHMENT:
                return new FileAttachmentAnnotationElement(parameters);
              default:
                return new AnnotationElement(parameters);
            }
          }
        }
        class AnnotationElement {
          constructor(parameters) {
            let {
              isRenderable = false,
              ignoreBorder = false,
              createQuadrilaterals = false
            } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            this.isRenderable = isRenderable;
            this.data = parameters.data;
            this.layer = parameters.layer;
            this.page = parameters.page;
            this.viewport = parameters.viewport;
            this.linkService = parameters.linkService;
            this.downloadManager = parameters.downloadManager;
            this.imageResourcesPath = parameters.imageResourcesPath;
            this.renderForms = parameters.renderForms;
            this.svgFactory = parameters.svgFactory;
            this.annotationStorage = parameters.annotationStorage;
            this.enableScripting = parameters.enableScripting;
            this.hasJSActions = parameters.hasJSActions;
            this._fieldObjects = parameters.fieldObjects;
            if (isRenderable) {
              this.container = this._createContainer(ignoreBorder);
            }
            if (createQuadrilaterals) {
              this.quadrilaterals = this._createQuadrilaterals(ignoreBorder);
            }
          }
          _createContainer() {
            let ignoreBorder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            const {
              data,
              page,
              viewport
            } = this;
            const container = document.createElement("section");
            container.setAttribute("data-annotation-id", data.id);
            if (data.noRotate) {
              container.classList.add("norotate");
            }
            const {
              pageWidth,
              pageHeight,
              pageX,
              pageY
            } = viewport.rawDims;
            const {
              width,
              height
            } = getRectDims(data.rect);
            const rect = _util.Util.normalizeRect([data.rect[0], page.view[3] - data.rect[1] + page.view[1], data.rect[2], page.view[3] - data.rect[3] + page.view[1]]);
            if (!ignoreBorder && data.borderStyle.width > 0) {
              container.style.borderWidth = "".concat(data.borderStyle.width, "px");
              const horizontalRadius = data.borderStyle.horizontalCornerRadius;
              const verticalRadius = data.borderStyle.verticalCornerRadius;
              if (horizontalRadius > 0 || verticalRadius > 0) {
                const radius = "calc(".concat(horizontalRadius, "px * var(--scale-factor)) / calc(").concat(verticalRadius, "px * var(--scale-factor))");
                container.style.borderRadius = radius;
              } else if (this instanceof RadioButtonWidgetAnnotationElement) {
                const radius = "calc(".concat(width, "px * var(--scale-factor)) / calc(").concat(height, "px * var(--scale-factor))");
                container.style.borderRadius = radius;
              }
              switch (data.borderStyle.style) {
                case _util.AnnotationBorderStyleType.SOLID:
                  container.style.borderStyle = "solid";
                  break;
                case _util.AnnotationBorderStyleType.DASHED:
                  container.style.borderStyle = "dashed";
                  break;
                case _util.AnnotationBorderStyleType.BEVELED:
                  (0, _util.warn)("Unimplemented border style: beveled");
                  break;
                case _util.AnnotationBorderStyleType.INSET:
                  (0, _util.warn)("Unimplemented border style: inset");
                  break;
                case _util.AnnotationBorderStyleType.UNDERLINE:
                  container.style.borderBottomStyle = "solid";
                  break;
                default:
                  break;
              }
              const borderColor = data.borderColor || null;
              if (borderColor) {
                container.style.borderColor = _util.Util.makeHexColor(borderColor[0] | 0, borderColor[1] | 0, borderColor[2] | 0);
              } else {
                container.style.borderWidth = 0;
              }
            }
            container.style.left = "".concat(100 * (rect[0] - pageX) / pageWidth, "%");
            container.style.top = "".concat(100 * (rect[1] - pageY) / pageHeight, "%");
            const {
              rotation
            } = data;
            if (data.hasOwnCanvas || rotation === 0) {
              container.style.width = "".concat(100 * width / pageWidth, "%");
              container.style.height = "".concat(100 * height / pageHeight, "%");
            } else {
              this.setRotation(rotation, container);
            }
            return container;
          }
          setRotation(angle) {
            let container = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.container;
            const {
              pageWidth,
              pageHeight
            } = this.viewport.rawDims;
            const {
              width,
              height
            } = getRectDims(this.data.rect);
            let elementWidth, elementHeight;
            if (angle % 180 === 0) {
              elementWidth = 100 * width / pageWidth;
              elementHeight = 100 * height / pageHeight;
            } else {
              elementWidth = 100 * height / pageWidth;
              elementHeight = 100 * width / pageHeight;
            }
            container.style.width = "".concat(elementWidth, "%");
            container.style.height = "".concat(elementHeight, "%");
            container.setAttribute("data-main-rotation", (360 - angle) % 360);
          }
          get _commonActions() {
            const setColor = (jsName, styleName, event) => {
              const color = event.detail[jsName];
              event.target.style[styleName] = _scripting_utils.ColorConverters["".concat(color[0], "_HTML")](color.slice(1));
            };
            return (0, _util.shadow)(this, "_commonActions", {
              display: event => {
                const hidden = event.detail.display % 2 === 1;
                this.container.style.visibility = hidden ? "hidden" : "visible";
                this.annotationStorage.setValue(this.data.id, {
                  hidden,
                  print: event.detail.display === 0 || event.detail.display === 3
                });
              },
              print: event => {
                this.annotationStorage.setValue(this.data.id, {
                  print: event.detail.print
                });
              },
              hidden: event => {
                this.container.style.visibility = event.detail.hidden ? "hidden" : "visible";
                this.annotationStorage.setValue(this.data.id, {
                  hidden: event.detail.hidden
                });
              },
              focus: event => {
                setTimeout(() => event.target.focus({
                  preventScroll: false
                }), 0);
              },
              userName: event => {
                event.target.title = event.detail.userName;
              },
              readonly: event => {
                if (event.detail.readonly) {
                  event.target.setAttribute("readonly", "");
                } else {
                  event.target.removeAttribute("readonly");
                }
              },
              required: event => {
                this._setRequired(event.target, event.detail.required);
              },
              bgColor: event => {
                setColor("bgColor", "backgroundColor", event);
              },
              fillColor: event => {
                setColor("fillColor", "backgroundColor", event);
              },
              fgColor: event => {
                setColor("fgColor", "color", event);
              },
              textColor: event => {
                setColor("textColor", "color", event);
              },
              borderColor: event => {
                setColor("borderColor", "borderColor", event);
              },
              strokeColor: event => {
                setColor("strokeColor", "borderColor", event);
              },
              rotation: event => {
                const angle = event.detail.rotation;
                this.setRotation(angle);
                this.annotationStorage.setValue(this.data.id, {
                  rotation: angle
                });
              }
            });
          }
          _dispatchEventFromSandbox(actions, jsEvent) {
            const commonActions = this._commonActions;
            for (const name of Object.keys(jsEvent.detail)) {
              const action = actions[name] || commonActions[name];
              action === null || action === void 0 || action(jsEvent);
            }
          }
          _setDefaultPropertiesFromJS(element) {
            if (!this.enableScripting) {
              return;
            }
            const storedData = this.annotationStorage.getRawValue(this.data.id);
            if (!storedData) {
              return;
            }
            const commonActions = this._commonActions;
            for (const [actionName, detail] of Object.entries(storedData)) {
              const action = commonActions[actionName];
              if (action) {
                const eventProxy = {
                  detail: {
                    [actionName]: detail
                  },
                  target: element
                };
                action(eventProxy);
                delete storedData[actionName];
              }
            }
          }
          _createQuadrilaterals() {
            let ignoreBorder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            if (!this.data.quadPoints) {
              return null;
            }
            const quadrilaterals = [];
            const savedRect = this.data.rect;
            for (const quadPoint of this.data.quadPoints) {
              this.data.rect = [quadPoint[2].x, quadPoint[2].y, quadPoint[1].x, quadPoint[1].y];
              quadrilaterals.push(this._createContainer(ignoreBorder));
            }
            this.data.rect = savedRect;
            return quadrilaterals;
          }
          _createPopup(trigger, data) {
            let container = this.container;
            if (this.quadrilaterals) {
              trigger || (trigger = this.quadrilaterals);
              container = this.quadrilaterals[0];
            }
            if (!trigger) {
              trigger = document.createElement("div");
              trigger.classList.add("popupTriggerArea");
              container.append(trigger);
            }
            const popupElement = new PopupElement({
              container,
              trigger,
              color: data.color,
              titleObj: data.titleObj,
              modificationDate: data.modificationDate,
              contentsObj: data.contentsObj,
              richText: data.richText,
              hideWrapper: true
            });
            const popup = popupElement.render();
            popup.style.left = "100%";
            container.append(popup);
          }
          _renderQuadrilaterals(className) {
            for (const quadrilateral of this.quadrilaterals) {
              quadrilateral.classList.add(className);
            }
            return this.quadrilaterals;
          }
          render() {
            (0, _util.unreachable)("Abstract method `AnnotationElement.render` called");
          }
          _getElementsByName(name) {
            let skipId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            const fields = [];
            if (this._fieldObjects) {
              const fieldObj = this._fieldObjects[name];
              if (fieldObj) {
                for (const {
                  page,
                  id,
                  exportValues
                } of fieldObj) {
                  if (page === -1) {
                    continue;
                  }
                  if (id === skipId) {
                    continue;
                  }
                  const exportValue = typeof exportValues === "string" ? exportValues : null;
                  const domElement = document.querySelector("[data-element-id=\"".concat(id, "\"]"));
                  if (domElement && !GetElementsByNameSet.has(domElement)) {
                    (0, _util.warn)("_getElementsByName - element not allowed: ".concat(id));
                    continue;
                  }
                  fields.push({
                    id,
                    exportValue,
                    domElement
                  });
                }
              }
              return fields;
            }
            for (const domElement of document.getElementsByName(name)) {
              const {
                exportValue
              } = domElement;
              const id = domElement.getAttribute("data-element-id");
              if (id === skipId) {
                continue;
              }
              if (!GetElementsByNameSet.has(domElement)) {
                continue;
              }
              fields.push({
                id,
                exportValue,
                domElement
              });
            }
            return fields;
          }
        }
        var _setInternalLink = /*#__PURE__*/new WeakSet();
        var _bindSetOCGState = /*#__PURE__*/new WeakSet();
        class LinkAnnotationElement extends AnnotationElement {
          constructor(parameters) {
            let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            super(parameters, {
              isRenderable: true,
              ignoreBorder: !!(options !== null && options !== void 0 && options.ignoreBorder),
              createQuadrilaterals: true
            });
            _classPrivateMethodInitSpec(this, _bindSetOCGState);
            _classPrivateMethodInitSpec(this, _setInternalLink);
            this.isTooltipOnly = parameters.data.isTooltipOnly;
          }
          render() {
            const {
              data,
              linkService
            } = this;
            const link = document.createElement("a");
            link.setAttribute("data-element-id", data.id);
            let isBound = false;
            if (data.url) {
              linkService.addLinkAttributes(link, data.url, data.newWindow);
              isBound = true;
            } else if (data.action) {
              this._bindNamedAction(link, data.action);
              isBound = true;
            } else if (data.attachment) {
              this._bindAttachment(link, data.attachment);
              isBound = true;
            } else if (data.setOCGState) {
              _classPrivateMethodGet(this, _bindSetOCGState, _bindSetOCGState2).call(this, link, data.setOCGState);
              isBound = true;
            } else if (data.dest) {
              this._bindLink(link, data.dest);
              isBound = true;
            } else {
              if (data.actions && (data.actions.Action || data.actions["Mouse Up"] || data.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions) {
                this._bindJSAction(link, data);
                isBound = true;
              }
              if (data.resetForm) {
                this._bindResetFormAction(link, data.resetForm);
                isBound = true;
              } else if (this.isTooltipOnly && !isBound) {
                this._bindLink(link, "");
                isBound = true;
              }
            }
            if (this.quadrilaterals) {
              return this._renderQuadrilaterals("linkAnnotation").map((quadrilateral, index) => {
                const linkElement = index === 0 ? link : link.cloneNode();
                quadrilateral.append(linkElement);
                return quadrilateral;
              });
            }
            this.container.classList.add("linkAnnotation");
            if (isBound) {
              this.container.append(link);
            }
            return this.container;
          }
          _bindLink(link, destination) {
            link.href = this.linkService.getDestinationHash(destination);
            link.onclick = () => {
              if (destination) {
                this.linkService.goToDestination(destination);
              }
              return false;
            };
            if (destination || destination === "") {
              _classPrivateMethodGet(this, _setInternalLink, _setInternalLink2).call(this);
            }
          }
          _bindNamedAction(link, action) {
            link.href = this.linkService.getAnchorUrl("");
            link.onclick = () => {
              this.linkService.executeNamedAction(action);
              return false;
            };
            _classPrivateMethodGet(this, _setInternalLink, _setInternalLink2).call(this);
          }
          _bindAttachment(link, attachment) {
            link.href = this.linkService.getAnchorUrl("");
            link.onclick = () => {
              var _this$downloadManager;
              (_this$downloadManager = this.downloadManager) === null || _this$downloadManager === void 0 || _this$downloadManager.openOrDownloadData(this.container, attachment.content, attachment.filename);
              return false;
            };
            _classPrivateMethodGet(this, _setInternalLink, _setInternalLink2).call(this);
          }
          _bindJSAction(link, data) {
            link.href = this.linkService.getAnchorUrl("");
            const map = new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
            for (const name of Object.keys(data.actions)) {
              const jsName = map.get(name);
              if (!jsName) {
                continue;
              }
              link[jsName] = () => {
                var _this$linkService$eve;
                (_this$linkService$eve = this.linkService.eventBus) === null || _this$linkService$eve === void 0 || _this$linkService$eve.dispatch("dispatcheventinsandbox", {
                  source: this,
                  detail: {
                    id: data.id,
                    name
                  }
                });
                return false;
              };
            }
            if (!link.onclick) {
              link.onclick = () => false;
            }
            _classPrivateMethodGet(this, _setInternalLink, _setInternalLink2).call(this);
          }
          _bindResetFormAction(link, resetForm) {
            const otherClickAction = link.onclick;
            if (!otherClickAction) {
              link.href = this.linkService.getAnchorUrl("");
            }
            _classPrivateMethodGet(this, _setInternalLink, _setInternalLink2).call(this);
            if (!this._fieldObjects) {
              (0, _util.warn)("_bindResetFormAction - \"resetForm\" action not supported, " + "ensure that the `fieldObjects` parameter is provided.");
              if (!otherClickAction) {
                link.onclick = () => false;
              }
              return;
            }
            link.onclick = () => {
              otherClickAction === null || otherClickAction === void 0 || otherClickAction();
              const {
                fields: resetFormFields,
                refs: resetFormRefs,
                include
              } = resetForm;
              const allFields = [];
              if (resetFormFields.length !== 0 || resetFormRefs.length !== 0) {
                const fieldIds = new Set(resetFormRefs);
                for (const fieldName of resetFormFields) {
                  const fields = this._fieldObjects[fieldName] || [];
                  for (const {
                    id
                  } of fields) {
                    fieldIds.add(id);
                  }
                }
                for (const fields of Object.values(this._fieldObjects)) {
                  for (const field of fields) {
                    if (fieldIds.has(field.id) === include) {
                      allFields.push(field);
                    }
                  }
                }
              } else {
                for (const fields of Object.values(this._fieldObjects)) {
                  allFields.push(...fields);
                }
              }
              const storage = this.annotationStorage;
              const allIds = [];
              for (const field of allFields) {
                const {
                  id
                } = field;
                allIds.push(id);
                switch (field.type) {
                  case "text":
                    {
                      const value = field.defaultValue || "";
                      storage.setValue(id, {
                        value
                      });
                      break;
                    }
                  case "checkbox":
                  case "radiobutton":
                    {
                      const value = field.defaultValue === field.exportValues;
                      storage.setValue(id, {
                        value
                      });
                      break;
                    }
                  case "combobox":
                  case "listbox":
                    {
                      const value = field.defaultValue || "";
                      storage.setValue(id, {
                        value
                      });
                      break;
                    }
                  default:
                    continue;
                }
                const domElement = document.querySelector("[data-element-id=\"".concat(id, "\"]"));
                if (!domElement) {
                  continue;
                } else if (!GetElementsByNameSet.has(domElement)) {
                  (0, _util.warn)("_bindResetFormAction - element not allowed: ".concat(id));
                  continue;
                }
                domElement.dispatchEvent(new Event("resetform"));
              }
              if (this.enableScripting) {
                var _this$linkService$eve2;
                (_this$linkService$eve2 = this.linkService.eventBus) === null || _this$linkService$eve2 === void 0 || _this$linkService$eve2.dispatch("dispatcheventinsandbox", {
                  source: this,
                  detail: {
                    id: "app",
                    ids: allIds,
                    name: "ResetForm"
                  }
                });
              }
              return false;
            };
          }
        }
        function _setInternalLink2() {
          this.container.setAttribute("data-internal-link", "");
        }
        function _bindSetOCGState2(link, action) {
          link.href = this.linkService.getAnchorUrl("");
          link.onclick = () => {
            this.linkService.executeSetOCGState(action);
            return false;
          };
          _classPrivateMethodGet(this, _setInternalLink, _setInternalLink2).call(this);
        }
        class TextAnnotationElement extends AnnotationElement {
          constructor(parameters) {
            var _parameters$data$titl, _parameters$data$cont, _parameters$data$rich;
            const isRenderable = !!(parameters.data.hasPopup || (_parameters$data$titl = parameters.data.titleObj) !== null && _parameters$data$titl !== void 0 && _parameters$data$titl.str || (_parameters$data$cont = parameters.data.contentsObj) !== null && _parameters$data$cont !== void 0 && _parameters$data$cont.str || (_parameters$data$rich = parameters.data.richText) !== null && _parameters$data$rich !== void 0 && _parameters$data$rich.str);
            super(parameters, {
              isRenderable
            });
          }
          render() {
            this.container.classList.add("textAnnotation");
            const image = document.createElement("img");
            image.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg";
            image.alt = "[{{type}} Annotation]";
            image.dataset.l10nId = "text_annotation_type";
            image.dataset.l10nArgs = JSON.stringify({
              type: this.data.name
            });
            if (!this.data.hasPopup) {
              this._createPopup(image, this.data);
            }
            this.container.append(image);
            return this.container;
          }
        }
        class WidgetAnnotationElement extends AnnotationElement {
          render() {
            if (this.data.alternativeText) {
              this.container.title = this.data.alternativeText;
            }
            return this.container;
          }
          showElementAndHideCanvas(element) {
            if (this.data.hasOwnCanvas) {
              var _element$previousSibl;
              if (((_element$previousSibl = element.previousSibling) === null || _element$previousSibl === void 0 ? void 0 : _element$previousSibl.nodeName) === "CANVAS") {
                element.previousSibling.hidden = true;
              }
              element.hidden = false;
            }
          }
          _getKeyModifier(event) {
            const {
              isWin,
              isMac
            } = _util.FeatureTest.platform;
            return isWin && event.ctrlKey || isMac && event.metaKey;
          }
          _setEventListener(element, baseName, eventName, valueGetter) {
            if (baseName.includes("mouse")) {
              element.addEventListener(baseName, event => {
                var _this$linkService$eve3;
                (_this$linkService$eve3 = this.linkService.eventBus) === null || _this$linkService$eve3 === void 0 || _this$linkService$eve3.dispatch("dispatcheventinsandbox", {
                  source: this,
                  detail: {
                    id: this.data.id,
                    name: eventName,
                    value: valueGetter(event),
                    shift: event.shiftKey,
                    modifier: this._getKeyModifier(event)
                  }
                });
              });
            } else {
              element.addEventListener(baseName, event => {
                var _this$linkService$eve4;
                (_this$linkService$eve4 = this.linkService.eventBus) === null || _this$linkService$eve4 === void 0 || _this$linkService$eve4.dispatch("dispatcheventinsandbox", {
                  source: this,
                  detail: {
                    id: this.data.id,
                    name: eventName,
                    value: valueGetter(event)
                  }
                });
              });
            }
          }
          _setEventListeners(element, names, getter) {
            for (const [baseName, eventName] of names) {
              var _this$data$actions;
              if (eventName === "Action" || (_this$data$actions = this.data.actions) !== null && _this$data$actions !== void 0 && _this$data$actions[eventName]) {
                this._setEventListener(element, baseName, eventName, getter);
              }
            }
          }
          _setBackgroundColor(element) {
            const color = this.data.backgroundColor || null;
            element.style.backgroundColor = color === null ? "transparent" : _util.Util.makeHexColor(color[0], color[1], color[2]);
          }
          _setTextStyle(element) {
            const TEXT_ALIGNMENT = ["left", "center", "right"];
            const {
              fontColor
            } = this.data.defaultAppearanceData;
            const fontSize = this.data.defaultAppearanceData.fontSize || DEFAULT_FONT_SIZE;
            const style = element.style;
            let computedFontSize;
            const BORDER_SIZE = 2;
            const roundToOneDecimal = x => Math.round(10 * x) / 10;
            if (this.data.multiLine) {
              const height = Math.abs(this.data.rect[3] - this.data.rect[1] - BORDER_SIZE);
              const numberOfLines = Math.round(height / (_util.LINE_FACTOR * fontSize)) || 1;
              const lineHeight = height / numberOfLines;
              computedFontSize = Math.min(fontSize, roundToOneDecimal(lineHeight / _util.LINE_FACTOR));
            } else {
              const height = Math.abs(this.data.rect[3] - this.data.rect[1] - BORDER_SIZE);
              computedFontSize = Math.min(fontSize, roundToOneDecimal(height / _util.LINE_FACTOR));
            }
            style.fontSize = "calc(".concat(computedFontSize, "px * var(--scale-factor))");
            style.color = _util.Util.makeHexColor(fontColor[0], fontColor[1], fontColor[2]);
            if (this.data.textAlignment !== null) {
              style.textAlign = TEXT_ALIGNMENT[this.data.textAlignment];
            }
          }
          _setRequired(element, isRequired) {
            if (isRequired) {
              element.setAttribute("required", true);
            } else {
              element.removeAttribute("required");
            }
            element.setAttribute("aria-required", isRequired);
          }
        }
        class TextWidgetAnnotationElement extends WidgetAnnotationElement {
          constructor(parameters) {
            const isRenderable = parameters.renderForms || !parameters.data.hasAppearance && !!parameters.data.fieldValue;
            super(parameters, {
              isRenderable
            });
          }
          setPropertyOnSiblings(base, key, value, keyInStorage) {
            const storage = this.annotationStorage;
            for (const element of this._getElementsByName(base.name, base.id)) {
              if (element.domElement) {
                element.domElement[key] = value;
              }
              storage.setValue(element.id, {
                [keyInStorage]: value
              });
            }
          }
          render() {
            const storage = this.annotationStorage;
            const id = this.data.id;
            this.container.classList.add("textWidgetAnnotation");
            let element = null;
            if (this.renderForms) {
              const storedData = storage.getValue(id, {
                value: this.data.fieldValue
              });
              let textContent = storedData.formattedValue || storedData.value || "";
              const maxLen = storage.getValue(id, {
                charLimit: this.data.maxLen
              }).charLimit;
              if (maxLen && textContent.length > maxLen) {
                textContent = textContent.slice(0, maxLen);
              }
              const elementData = {
                userValue: textContent,
                formattedValue: null,
                lastCommittedValue: null,
                commitKey: 1
              };
              if (this.data.multiLine) {
                element = document.createElement("textarea");
                element.textContent = textContent;
                if (this.data.doNotScroll) {
                  element.style.overflowY = "hidden";
                }
              } else {
                element = document.createElement("input");
                element.type = "text";
                element.setAttribute("value", textContent);
                if (this.data.doNotScroll) {
                  element.style.overflowX = "hidden";
                }
              }
              if (this.data.hasOwnCanvas) {
                element.hidden = true;
              }
              GetElementsByNameSet.add(element);
              element.setAttribute("data-element-id", id);
              element.disabled = this.data.readOnly;
              element.name = this.data.fieldName;
              element.tabIndex = DEFAULT_TAB_INDEX;
              this._setRequired(element, this.data.required);
              if (maxLen) {
                element.maxLength = maxLen;
              }
              element.addEventListener("input", event => {
                storage.setValue(id, {
                  value: event.target.value
                });
                this.setPropertyOnSiblings(element, "value", event.target.value, "value");
              });
              element.addEventListener("resetform", event => {
                var _this$data$defaultFie;
                const defaultValue = (_this$data$defaultFie = this.data.defaultFieldValue) !== null && _this$data$defaultFie !== void 0 ? _this$data$defaultFie : "";
                element.value = elementData.userValue = defaultValue;
                elementData.formattedValue = null;
              });
              let blurListener = event => {
                const {
                  formattedValue
                } = elementData;
                if (formattedValue !== null && formattedValue !== undefined) {
                  event.target.value = formattedValue;
                }
                event.target.scrollLeft = 0;
              };
              if (this.enableScripting && this.hasJSActions) {
                var _this$data$actions2;
                element.addEventListener("focus", event => {
                  const {
                    target
                  } = event;
                  if (elementData.userValue) {
                    target.value = elementData.userValue;
                  }
                  elementData.lastCommittedValue = target.value;
                  elementData.commitKey = 1;
                });
                element.addEventListener("updatefromsandbox", jsEvent => {
                  this.showElementAndHideCanvas(jsEvent.target);
                  const actions = {
                    value(event) {
                      var _event$detail$value;
                      elementData.userValue = (_event$detail$value = event.detail.value) !== null && _event$detail$value !== void 0 ? _event$detail$value : "";
                      storage.setValue(id, {
                        value: elementData.userValue.toString()
                      });
                      event.target.value = elementData.userValue;
                    },
                    formattedValue(event) {
                      const {
                        formattedValue
                      } = event.detail;
                      elementData.formattedValue = formattedValue;
                      if (formattedValue !== null && formattedValue !== undefined && event.target !== document.activeElement) {
                        event.target.value = formattedValue;
                      }
                      storage.setValue(id, {
                        formattedValue
                      });
                    },
                    selRange(event) {
                      event.target.setSelectionRange(...event.detail.selRange);
                    },
                    charLimit: event => {
                      var _this$linkService$eve5;
                      const {
                        charLimit
                      } = event.detail;
                      const {
                        target
                      } = event;
                      if (charLimit === 0) {
                        target.removeAttribute("maxLength");
                        return;
                      }
                      target.setAttribute("maxLength", charLimit);
                      let value = elementData.userValue;
                      if (!value || value.length <= charLimit) {
                        return;
                      }
                      value = value.slice(0, charLimit);
                      target.value = elementData.userValue = value;
                      storage.setValue(id, {
                        value
                      });
                      (_this$linkService$eve5 = this.linkService.eventBus) === null || _this$linkService$eve5 === void 0 || _this$linkService$eve5.dispatch("dispatcheventinsandbox", {
                        source: this,
                        detail: {
                          id,
                          name: "Keystroke",
                          value,
                          willCommit: true,
                          commitKey: 1,
                          selStart: target.selectionStart,
                          selEnd: target.selectionEnd
                        }
                      });
                    }
                  };
                  this._dispatchEventFromSandbox(actions, jsEvent);
                });
                element.addEventListener("keydown", event => {
                  var _this$linkService$eve6;
                  elementData.commitKey = 1;
                  let commitKey = -1;
                  if (event.key === "Escape") {
                    commitKey = 0;
                  } else if (event.key === "Enter" && !this.data.multiLine) {
                    commitKey = 2;
                  } else if (event.key === "Tab") {
                    elementData.commitKey = 3;
                  }
                  if (commitKey === -1) {
                    return;
                  }
                  const {
                    value
                  } = event.target;
                  if (elementData.lastCommittedValue === value) {
                    return;
                  }
                  elementData.lastCommittedValue = value;
                  elementData.userValue = value;
                  (_this$linkService$eve6 = this.linkService.eventBus) === null || _this$linkService$eve6 === void 0 || _this$linkService$eve6.dispatch("dispatcheventinsandbox", {
                    source: this,
                    detail: {
                      id,
                      name: "Keystroke",
                      value,
                      willCommit: true,
                      commitKey,
                      selStart: event.target.selectionStart,
                      selEnd: event.target.selectionEnd
                    }
                  });
                });
                const _blurListener = blurListener;
                blurListener = null;
                element.addEventListener("blur", event => {
                  if (!event.relatedTarget) {
                    return;
                  }
                  const {
                    value
                  } = event.target;
                  elementData.userValue = value;
                  if (elementData.lastCommittedValue !== value) {
                    var _this$linkService$eve7;
                    (_this$linkService$eve7 = this.linkService.eventBus) === null || _this$linkService$eve7 === void 0 || _this$linkService$eve7.dispatch("dispatcheventinsandbox", {
                      source: this,
                      detail: {
                        id,
                        name: "Keystroke",
                        value,
                        willCommit: true,
                        commitKey: elementData.commitKey,
                        selStart: event.target.selectionStart,
                        selEnd: event.target.selectionEnd
                      }
                    });
                  }
                  _blurListener(event);
                });
                if ((_this$data$actions2 = this.data.actions) !== null && _this$data$actions2 !== void 0 && _this$data$actions2.Keystroke) {
                  element.addEventListener("beforeinput", event => {
                    var _this$linkService$eve8;
                    elementData.lastCommittedValue = null;
                    const {
                      data,
                      target
                    } = event;
                    const {
                      value,
                      selectionStart,
                      selectionEnd
                    } = target;
                    let selStart = selectionStart,
                      selEnd = selectionEnd;
                    switch (event.inputType) {
                      case "deleteWordBackward":
                        {
                          const match = value.substring(0, selectionStart).match(/\w*[^\w]*$/);
                          if (match) {
                            selStart -= match[0].length;
                          }
                          break;
                        }
                      case "deleteWordForward":
                        {
                          const match = value.substring(selectionStart).match(/^[^\w]*\w*/);
                          if (match) {
                            selEnd += match[0].length;
                          }
                          break;
                        }
                      case "deleteContentBackward":
                        if (selectionStart === selectionEnd) {
                          selStart -= 1;
                        }
                        break;
                      case "deleteContentForward":
                        if (selectionStart === selectionEnd) {
                          selEnd += 1;
                        }
                        break;
                    }
                    event.preventDefault();
                    (_this$linkService$eve8 = this.linkService.eventBus) === null || _this$linkService$eve8 === void 0 || _this$linkService$eve8.dispatch("dispatcheventinsandbox", {
                      source: this,
                      detail: {
                        id,
                        name: "Keystroke",
                        value,
                        change: data || "",
                        willCommit: false,
                        selStart,
                        selEnd
                      }
                    });
                  });
                }
                this._setEventListeners(element, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], event => event.target.value);
              }
              if (blurListener) {
                element.addEventListener("blur", blurListener);
              }
              if (this.data.comb) {
                const fieldWidth = this.data.rect[2] - this.data.rect[0];
                const combWidth = fieldWidth / maxLen;
                element.classList.add("comb");
                element.style.letterSpacing = "calc(".concat(combWidth, "px * var(--scale-factor) - 1ch)");
              }
            } else {
              element = document.createElement("div");
              element.textContent = this.data.fieldValue;
              element.style.verticalAlign = "middle";
              element.style.display = "table-cell";
            }
            this._setTextStyle(element);
            this._setBackgroundColor(element);
            this._setDefaultPropertiesFromJS(element);
            this.container.append(element);
            return this.container;
          }
        }
        class CheckboxWidgetAnnotationElement extends WidgetAnnotationElement {
          constructor(parameters) {
            super(parameters, {
              isRenderable: parameters.renderForms
            });
          }
          render() {
            const storage = this.annotationStorage;
            const data = this.data;
            const id = data.id;
            let value = storage.getValue(id, {
              value: data.exportValue === data.fieldValue
            }).value;
            if (typeof value === "string") {
              value = value !== "Off";
              storage.setValue(id, {
                value
              });
            }
            this.container.classList.add("buttonWidgetAnnotation", "checkBox");
            const element = document.createElement("input");
            GetElementsByNameSet.add(element);
            element.setAttribute("data-element-id", id);
            element.disabled = data.readOnly;
            this._setRequired(element, this.data.required);
            element.type = "checkbox";
            element.name = data.fieldName;
            if (value) {
              element.setAttribute("checked", true);
            }
            element.setAttribute("exportValue", data.exportValue);
            element.tabIndex = DEFAULT_TAB_INDEX;
            element.addEventListener("change", event => {
              const {
                name,
                checked
              } = event.target;
              for (const checkbox of this._getElementsByName(name, id)) {
                const curChecked = checked && checkbox.exportValue === data.exportValue;
                if (checkbox.domElement) {
                  checkbox.domElement.checked = curChecked;
                }
                storage.setValue(checkbox.id, {
                  value: curChecked
                });
              }
              storage.setValue(id, {
                value: checked
              });
            });
            element.addEventListener("resetform", event => {
              const defaultValue = data.defaultFieldValue || "Off";
              event.target.checked = defaultValue === data.exportValue;
            });
            if (this.enableScripting && this.hasJSActions) {
              element.addEventListener("updatefromsandbox", jsEvent => {
                const actions = {
                  value(event) {
                    event.target.checked = event.detail.value !== "Off";
                    storage.setValue(id, {
                      value: event.target.checked
                    });
                  }
                };
                this._dispatchEventFromSandbox(actions, jsEvent);
              });
              this._setEventListeners(element, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], event => event.target.checked);
            }
            this._setBackgroundColor(element);
            this._setDefaultPropertiesFromJS(element);
            this.container.append(element);
            return this.container;
          }
        }
        class RadioButtonWidgetAnnotationElement extends WidgetAnnotationElement {
          constructor(parameters) {
            super(parameters, {
              isRenderable: parameters.renderForms
            });
          }
          render() {
            this.container.classList.add("buttonWidgetAnnotation", "radioButton");
            const storage = this.annotationStorage;
            const data = this.data;
            const id = data.id;
            let value = storage.getValue(id, {
              value: data.fieldValue === data.buttonValue
            }).value;
            if (typeof value === "string") {
              value = value !== data.buttonValue;
              storage.setValue(id, {
                value
              });
            }
            const element = document.createElement("input");
            GetElementsByNameSet.add(element);
            element.setAttribute("data-element-id", id);
            element.disabled = data.readOnly;
            this._setRequired(element, this.data.required);
            element.type = "radio";
            element.name = data.fieldName;
            if (value) {
              element.setAttribute("checked", true);
            }
            element.tabIndex = DEFAULT_TAB_INDEX;
            element.addEventListener("change", event => {
              const {
                name,
                checked
              } = event.target;
              for (const radio of this._getElementsByName(name, id)) {
                storage.setValue(radio.id, {
                  value: false
                });
              }
              storage.setValue(id, {
                value: checked
              });
            });
            element.addEventListener("resetform", event => {
              const defaultValue = data.defaultFieldValue;
              event.target.checked = defaultValue !== null && defaultValue !== undefined && defaultValue === data.buttonValue;
            });
            if (this.enableScripting && this.hasJSActions) {
              const pdfButtonValue = data.buttonValue;
              element.addEventListener("updatefromsandbox", jsEvent => {
                const actions = {
                  value: event => {
                    const checked = pdfButtonValue === event.detail.value;
                    for (const radio of this._getElementsByName(event.target.name)) {
                      const curChecked = checked && radio.id === id;
                      if (radio.domElement) {
                        radio.domElement.checked = curChecked;
                      }
                      storage.setValue(radio.id, {
                        value: curChecked
                      });
                    }
                  }
                };
                this._dispatchEventFromSandbox(actions, jsEvent);
              });
              this._setEventListeners(element, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], event => event.target.checked);
            }
            this._setBackgroundColor(element);
            this._setDefaultPropertiesFromJS(element);
            this.container.append(element);
            return this.container;
          }
        }
        class PushButtonWidgetAnnotationElement extends LinkAnnotationElement {
          constructor(parameters) {
            super(parameters, {
              ignoreBorder: parameters.data.hasAppearance
            });
          }
          render() {
            const container = super.render();
            container.classList.add("buttonWidgetAnnotation", "pushButton");
            if (this.data.alternativeText) {
              container.title = this.data.alternativeText;
            }
            const linkElement = container.lastChild;
            if (this.enableScripting && this.hasJSActions && linkElement) {
              this._setDefaultPropertiesFromJS(linkElement);
              linkElement.addEventListener("updatefromsandbox", jsEvent => {
                this._dispatchEventFromSandbox({}, jsEvent);
              });
            }
            return container;
          }
        }
        class ChoiceWidgetAnnotationElement extends WidgetAnnotationElement {
          constructor(parameters) {
            super(parameters, {
              isRenderable: parameters.renderForms
            });
          }
          render() {
            this.container.classList.add("choiceWidgetAnnotation");
            const storage = this.annotationStorage;
            const id = this.data.id;
            const storedData = storage.getValue(id, {
              value: this.data.fieldValue
            });
            const selectElement = document.createElement("select");
            GetElementsByNameSet.add(selectElement);
            selectElement.setAttribute("data-element-id", id);
            selectElement.disabled = this.data.readOnly;
            this._setRequired(selectElement, this.data.required);
            selectElement.name = this.data.fieldName;
            selectElement.tabIndex = DEFAULT_TAB_INDEX;
            let addAnEmptyEntry = this.data.combo && this.data.options.length > 0;
            if (!this.data.combo) {
              selectElement.size = this.data.options.length;
              if (this.data.multiSelect) {
                selectElement.multiple = true;
              }
            }
            selectElement.addEventListener("resetform", event => {
              const defaultValue = this.data.defaultFieldValue;
              for (const option of selectElement.options) {
                option.selected = option.value === defaultValue;
              }
            });
            for (const option of this.data.options) {
              const optionElement = document.createElement("option");
              optionElement.textContent = option.displayValue;
              optionElement.value = option.exportValue;
              if (storedData.value.includes(option.exportValue)) {
                optionElement.setAttribute("selected", true);
                addAnEmptyEntry = false;
              }
              selectElement.append(optionElement);
            }
            let removeEmptyEntry = null;
            if (addAnEmptyEntry) {
              const noneOptionElement = document.createElement("option");
              noneOptionElement.value = " ";
              noneOptionElement.setAttribute("hidden", true);
              noneOptionElement.setAttribute("selected", true);
              selectElement.prepend(noneOptionElement);
              removeEmptyEntry = () => {
                noneOptionElement.remove();
                selectElement.removeEventListener("input", removeEmptyEntry);
                removeEmptyEntry = null;
              };
              selectElement.addEventListener("input", removeEmptyEntry);
            }
            const getValue = isExport => {
              const name = isExport ? "value" : "textContent";
              const {
                options,
                multiple
              } = selectElement;
              if (!multiple) {
                return options.selectedIndex === -1 ? null : options[options.selectedIndex][name];
              }
              return Array.prototype.filter.call(options, option => option.selected).map(option => option[name]);
            };
            let selectedValues = getValue(false);
            const getItems = event => {
              const options = event.target.options;
              return Array.prototype.map.call(options, option => {
                return {
                  displayValue: option.textContent,
                  exportValue: option.value
                };
              });
            };
            if (this.enableScripting && this.hasJSActions) {
              selectElement.addEventListener("updatefromsandbox", jsEvent => {
                const actions = {
                  value(event) {
                    var _removeEmptyEntry;
                    (_removeEmptyEntry = removeEmptyEntry) === null || _removeEmptyEntry === void 0 || _removeEmptyEntry();
                    const value = event.detail.value;
                    const values = new Set(Array.isArray(value) ? value : [value]);
                    for (const option of selectElement.options) {
                      option.selected = values.has(option.value);
                    }
                    storage.setValue(id, {
                      value: getValue(true)
                    });
                    selectedValues = getValue(false);
                  },
                  multipleSelection(event) {
                    selectElement.multiple = true;
                  },
                  remove(event) {
                    const options = selectElement.options;
                    const index = event.detail.remove;
                    options[index].selected = false;
                    selectElement.remove(index);
                    if (options.length > 0) {
                      const i = Array.prototype.findIndex.call(options, option => option.selected);
                      if (i === -1) {
                        options[0].selected = true;
                      }
                    }
                    storage.setValue(id, {
                      value: getValue(true),
                      items: getItems(event)
                    });
                    selectedValues = getValue(false);
                  },
                  clear(event) {
                    while (selectElement.length !== 0) {
                      selectElement.remove(0);
                    }
                    storage.setValue(id, {
                      value: null,
                      items: []
                    });
                    selectedValues = getValue(false);
                  },
                  insert(event) {
                    const {
                      index,
                      displayValue,
                      exportValue
                    } = event.detail.insert;
                    const selectChild = selectElement.children[index];
                    const optionElement = document.createElement("option");
                    optionElement.textContent = displayValue;
                    optionElement.value = exportValue;
                    if (selectChild) {
                      selectChild.before(optionElement);
                    } else {
                      selectElement.append(optionElement);
                    }
                    storage.setValue(id, {
                      value: getValue(true),
                      items: getItems(event)
                    });
                    selectedValues = getValue(false);
                  },
                  items(event) {
                    const {
                      items
                    } = event.detail;
                    while (selectElement.length !== 0) {
                      selectElement.remove(0);
                    }
                    for (const item of items) {
                      const {
                        displayValue,
                        exportValue
                      } = item;
                      const optionElement = document.createElement("option");
                      optionElement.textContent = displayValue;
                      optionElement.value = exportValue;
                      selectElement.append(optionElement);
                    }
                    if (selectElement.options.length > 0) {
                      selectElement.options[0].selected = true;
                    }
                    storage.setValue(id, {
                      value: getValue(true),
                      items: getItems(event)
                    });
                    selectedValues = getValue(false);
                  },
                  indices(event) {
                    const indices = new Set(event.detail.indices);
                    for (const option of event.target.options) {
                      option.selected = indices.has(option.index);
                    }
                    storage.setValue(id, {
                      value: getValue(true)
                    });
                    selectedValues = getValue(false);
                  },
                  editable(event) {
                    event.target.disabled = !event.detail.editable;
                  }
                };
                this._dispatchEventFromSandbox(actions, jsEvent);
              });
              selectElement.addEventListener("input", event => {
                var _this$linkService$eve9;
                const exportValue = getValue(true);
                storage.setValue(id, {
                  value: exportValue
                });
                event.preventDefault();
                (_this$linkService$eve9 = this.linkService.eventBus) === null || _this$linkService$eve9 === void 0 || _this$linkService$eve9.dispatch("dispatcheventinsandbox", {
                  source: this,
                  detail: {
                    id,
                    name: "Keystroke",
                    value: selectedValues,
                    changeEx: exportValue,
                    willCommit: false,
                    commitKey: 1,
                    keyDown: false
                  }
                });
              });
              this._setEventListeners(selectElement, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"], ["input", "Validate"]], event => event.target.value);
            } else {
              selectElement.addEventListener("input", function (event) {
                storage.setValue(id, {
                  value: getValue(true)
                });
              });
            }
            if (this.data.combo) {
              this._setTextStyle(selectElement);
            } else {}
            this._setBackgroundColor(selectElement);
            this._setDefaultPropertiesFromJS(selectElement);
            this.container.append(selectElement);
            return this.container;
          }
        }
        class PopupAnnotationElement extends AnnotationElement {
          constructor(parameters) {
            var _data$titleObj, _data$contentsObj, _data$richText;
            const {
              data
            } = parameters;
            const isRenderable = !PopupAnnotationElement.IGNORE_TYPES.has(data.parentType) && !!((_data$titleObj = data.titleObj) !== null && _data$titleObj !== void 0 && _data$titleObj.str || (_data$contentsObj = data.contentsObj) !== null && _data$contentsObj !== void 0 && _data$contentsObj.str || (_data$richText = data.richText) !== null && _data$richText !== void 0 && _data$richText.str);
            super(parameters, {
              isRenderable
            });
          }
          render() {
            this.container.classList.add("popupAnnotation");
            const parentElements = this.layer.querySelectorAll("[data-annotation-id=\"".concat(this.data.parentId, "\"]"));
            if (parentElements.length === 0) {
              return this.container;
            }
            const popup = new PopupElement({
              container: this.container,
              trigger: Array.from(parentElements),
              color: this.data.color,
              titleObj: this.data.titleObj,
              modificationDate: this.data.modificationDate,
              contentsObj: this.data.contentsObj,
              richText: this.data.richText
            });
            const page = this.page;
            const rect = _util.Util.normalizeRect([this.data.parentRect[0], page.view[3] - this.data.parentRect[1] + page.view[1], this.data.parentRect[2], page.view[3] - this.data.parentRect[3] + page.view[1]]);
            const popupLeft = rect[0] + this.data.parentRect[2] - this.data.parentRect[0];
            const popupTop = rect[1];
            const {
              pageWidth,
              pageHeight,
              pageX,
              pageY
            } = this.viewport.rawDims;
            this.container.style.left = "".concat(100 * (popupLeft - pageX) / pageWidth, "%");
            this.container.style.top = "".concat(100 * (popupTop - pageY) / pageHeight, "%");
            this.container.append(popup.render());
            return this.container;
          }
        }
        _defineProperty(PopupAnnotationElement, "IGNORE_TYPES", new Set(["Line", "Square", "Circle", "PolyLine", "Polygon", "Ink"]));
        class PopupElement {
          constructor(parameters) {
            this.container = parameters.container;
            this.trigger = parameters.trigger;
            this.color = parameters.color;
            this.titleObj = parameters.titleObj;
            this.modificationDate = parameters.modificationDate;
            this.contentsObj = parameters.contentsObj;
            this.richText = parameters.richText;
            this.hideWrapper = parameters.hideWrapper || false;
            this.pinned = false;
          }
          render() {
            var _this$richText, _this$contentsObj;
            const BACKGROUND_ENLIGHT = 0.7;
            const wrapper = document.createElement("div");
            wrapper.classList.add("popupWrapper");
            this.hideElement = this.hideWrapper ? wrapper : this.container;
            this.hideElement.hidden = true;
            const popup = document.createElement("div");
            popup.classList.add("popup");
            const color = this.color;
            if (color) {
              const r = BACKGROUND_ENLIGHT * (255 - color[0]) + color[0];
              const g = BACKGROUND_ENLIGHT * (255 - color[1]) + color[1];
              const b = BACKGROUND_ENLIGHT * (255 - color[2]) + color[2];
              popup.style.backgroundColor = _util.Util.makeHexColor(r | 0, g | 0, b | 0);
            }
            const title = document.createElement("h1");
            title.dir = this.titleObj.dir;
            title.textContent = this.titleObj.str;
            popup.append(title);
            const dateObject = _display_utils.PDFDateString.toDateObject(this.modificationDate);
            if (dateObject) {
              const modificationDate = document.createElement("span");
              modificationDate.classList.add("popupDate");
              modificationDate.textContent = "{{date}}, {{time}}";
              modificationDate.dataset.l10nId = "annotation_date_string";
              modificationDate.dataset.l10nArgs = JSON.stringify({
                date: dateObject.toLocaleDateString(),
                time: dateObject.toLocaleTimeString()
              });
              popup.append(modificationDate);
            }
            if ((_this$richText = this.richText) !== null && _this$richText !== void 0 && _this$richText.str && (!((_this$contentsObj = this.contentsObj) !== null && _this$contentsObj !== void 0 && _this$contentsObj.str) || this.contentsObj.str === this.richText.str)) {
              _xfa_layer.XfaLayer.render({
                xfaHtml: this.richText.html,
                intent: "richText",
                div: popup
              });
              popup.lastChild.classList.add("richText", "popupContent");
            } else {
              const contents = this._formatContents(this.contentsObj);
              popup.append(contents);
            }
            if (!Array.isArray(this.trigger)) {
              this.trigger = [this.trigger];
            }
            for (const element of this.trigger) {
              element.addEventListener("click", this._toggle.bind(this));
              element.addEventListener("mouseover", this._show.bind(this, false));
              element.addEventListener("mouseout", this._hide.bind(this, false));
            }
            popup.addEventListener("click", this._hide.bind(this, true));
            wrapper.append(popup);
            return wrapper;
          }
          _formatContents(_ref41) {
            let {
              str,
              dir
            } = _ref41;
            const p = document.createElement("p");
            p.classList.add("popupContent");
            p.dir = dir;
            const lines = str.split(/(?:\r\n?|\n)/);
            for (let i = 0, ii = lines.length; i < ii; ++i) {
              const line = lines[i];
              p.append(document.createTextNode(line));
              if (i < ii - 1) {
                p.append(document.createElement("br"));
              }
            }
            return p;
          }
          _toggle() {
            if (this.pinned) {
              this._hide(true);
            } else {
              this._show(true);
            }
          }
          _show() {
            let pin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            if (pin) {
              this.pinned = true;
            }
            if (this.hideElement.hidden) {
              this.hideElement.hidden = false;
              this.container.style.zIndex = parseInt(this.container.style.zIndex) + 1000;
            }
          }
          _hide() {
            let unpin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            if (unpin) {
              this.pinned = false;
            }
            if (!this.hideElement.hidden && !this.pinned) {
              this.hideElement.hidden = true;
              this.container.style.zIndex = parseInt(this.container.style.zIndex) - 1000;
            }
          }
        }
        class FreeTextAnnotationElement extends AnnotationElement {
          constructor(parameters) {
            var _parameters$data$titl2, _parameters$data$cont2, _parameters$data$rich2;
            const isRenderable = !!(parameters.data.hasPopup || (_parameters$data$titl2 = parameters.data.titleObj) !== null && _parameters$data$titl2 !== void 0 && _parameters$data$titl2.str || (_parameters$data$cont2 = parameters.data.contentsObj) !== null && _parameters$data$cont2 !== void 0 && _parameters$data$cont2.str || (_parameters$data$rich2 = parameters.data.richText) !== null && _parameters$data$rich2 !== void 0 && _parameters$data$rich2.str);
            super(parameters, {
              isRenderable,
              ignoreBorder: true
            });
            this.textContent = parameters.data.textContent;
          }
          render() {
            this.container.classList.add("freeTextAnnotation");
            if (this.textContent) {
              const content = document.createElement("div");
              content.classList.add("annotationTextContent");
              content.setAttribute("role", "comment");
              for (const line of this.textContent) {
                const lineSpan = document.createElement("span");
                lineSpan.textContent = line;
                content.append(lineSpan);
              }
              this.container.append(content);
            }
            if (!this.data.hasPopup) {
              this._createPopup(null, this.data);
            }
            return this.container;
          }
        }
        class LineAnnotationElement extends AnnotationElement {
          constructor(parameters) {
            var _parameters$data$titl3, _parameters$data$cont3, _parameters$data$rich3;
            const isRenderable = !!(parameters.data.hasPopup || (_parameters$data$titl3 = parameters.data.titleObj) !== null && _parameters$data$titl3 !== void 0 && _parameters$data$titl3.str || (_parameters$data$cont3 = parameters.data.contentsObj) !== null && _parameters$data$cont3 !== void 0 && _parameters$data$cont3.str || (_parameters$data$rich3 = parameters.data.richText) !== null && _parameters$data$rich3 !== void 0 && _parameters$data$rich3.str);
            super(parameters, {
              isRenderable,
              ignoreBorder: true
            });
          }
          render() {
            this.container.classList.add("lineAnnotation");
            const data = this.data;
            const {
              width,
              height
            } = getRectDims(data.rect);
            const svg = this.svgFactory.create(width, height, true);
            const line = this.svgFactory.createElement("svg:line");
            line.setAttribute("x1", data.rect[2] - data.lineCoordinates[0]);
            line.setAttribute("y1", data.rect[3] - data.lineCoordinates[1]);
            line.setAttribute("x2", data.rect[2] - data.lineCoordinates[2]);
            line.setAttribute("y2", data.rect[3] - data.lineCoordinates[3]);
            line.setAttribute("stroke-width", data.borderStyle.width || 1);
            line.setAttribute("stroke", "transparent");
            line.setAttribute("fill", "transparent");
            svg.append(line);
            this.container.append(svg);
            this._createPopup(line, data);
            return this.container;
          }
        }
        class SquareAnnotationElement extends AnnotationElement {
          constructor(parameters) {
            var _parameters$data$titl4, _parameters$data$cont4, _parameters$data$rich4;
            const isRenderable = !!(parameters.data.hasPopup || (_parameters$data$titl4 = parameters.data.titleObj) !== null && _parameters$data$titl4 !== void 0 && _parameters$data$titl4.str || (_parameters$data$cont4 = parameters.data.contentsObj) !== null && _parameters$data$cont4 !== void 0 && _parameters$data$cont4.str || (_parameters$data$rich4 = parameters.data.richText) !== null && _parameters$data$rich4 !== void 0 && _parameters$data$rich4.str);
            super(parameters, {
              isRenderable,
              ignoreBorder: true
            });
          }
          render() {
            this.container.classList.add("squareAnnotation");
            const data = this.data;
            const {
              width,
              height
            } = getRectDims(data.rect);
            const svg = this.svgFactory.create(width, height, true);
            const borderWidth = data.borderStyle.width;
            const square = this.svgFactory.createElement("svg:rect");
            square.setAttribute("x", borderWidth / 2);
            square.setAttribute("y", borderWidth / 2);
            square.setAttribute("width", width - borderWidth);
            square.setAttribute("height", height - borderWidth);
            square.setAttribute("stroke-width", borderWidth || 1);
            square.setAttribute("stroke", "transparent");
            square.setAttribute("fill", "transparent");
            svg.append(square);
            this.container.append(svg);
            this._createPopup(square, data);
            return this.container;
          }
        }
        class CircleAnnotationElement extends AnnotationElement {
          constructor(parameters) {
            var _parameters$data$titl5, _parameters$data$cont5, _parameters$data$rich5;
            const isRenderable = !!(parameters.data.hasPopup || (_parameters$data$titl5 = parameters.data.titleObj) !== null && _parameters$data$titl5 !== void 0 && _parameters$data$titl5.str || (_parameters$data$cont5 = parameters.data.contentsObj) !== null && _parameters$data$cont5 !== void 0 && _parameters$data$cont5.str || (_parameters$data$rich5 = parameters.data.richText) !== null && _parameters$data$rich5 !== void 0 && _parameters$data$rich5.str);
            super(parameters, {
              isRenderable,
              ignoreBorder: true
            });
          }
          render() {
            this.container.classList.add("circleAnnotation");
            const data = this.data;
            const {
              width,
              height
            } = getRectDims(data.rect);
            const svg = this.svgFactory.create(width, height, true);
            const borderWidth = data.borderStyle.width;
            const circle = this.svgFactory.createElement("svg:ellipse");
            circle.setAttribute("cx", width / 2);
            circle.setAttribute("cy", height / 2);
            circle.setAttribute("rx", width / 2 - borderWidth / 2);
            circle.setAttribute("ry", height / 2 - borderWidth / 2);
            circle.setAttribute("stroke-width", borderWidth || 1);
            circle.setAttribute("stroke", "transparent");
            circle.setAttribute("fill", "transparent");
            svg.append(circle);
            this.container.append(svg);
            this._createPopup(circle, data);
            return this.container;
          }
        }
        class PolylineAnnotationElement extends AnnotationElement {
          constructor(parameters) {
            var _parameters$data$titl6, _parameters$data$cont6, _parameters$data$rich6;
            const isRenderable = !!(parameters.data.hasPopup || (_parameters$data$titl6 = parameters.data.titleObj) !== null && _parameters$data$titl6 !== void 0 && _parameters$data$titl6.str || (_parameters$data$cont6 = parameters.data.contentsObj) !== null && _parameters$data$cont6 !== void 0 && _parameters$data$cont6.str || (_parameters$data$rich6 = parameters.data.richText) !== null && _parameters$data$rich6 !== void 0 && _parameters$data$rich6.str);
            super(parameters, {
              isRenderable,
              ignoreBorder: true
            });
            this.containerClassName = "polylineAnnotation";
            this.svgElementName = "svg:polyline";
          }
          render() {
            this.container.classList.add(this.containerClassName);
            const data = this.data;
            const {
              width,
              height
            } = getRectDims(data.rect);
            const svg = this.svgFactory.create(width, height, true);
            let points = [];
            for (const coordinate of data.vertices) {
              const x = coordinate.x - data.rect[0];
              const y = data.rect[3] - coordinate.y;
              points.push(x + "," + y);
            }
            points = points.join(" ");
            const polyline = this.svgFactory.createElement(this.svgElementName);
            polyline.setAttribute("points", points);
            polyline.setAttribute("stroke-width", data.borderStyle.width || 1);
            polyline.setAttribute("stroke", "transparent");
            polyline.setAttribute("fill", "transparent");
            svg.append(polyline);
            this.container.append(svg);
            this._createPopup(polyline, data);
            return this.container;
          }
        }
        class PolygonAnnotationElement extends PolylineAnnotationElement {
          constructor(parameters) {
            super(parameters);
            this.containerClassName = "polygonAnnotation";
            this.svgElementName = "svg:polygon";
          }
        }
        class CaretAnnotationElement extends AnnotationElement {
          constructor(parameters) {
            var _parameters$data$titl7, _parameters$data$cont7, _parameters$data$rich7;
            const isRenderable = !!(parameters.data.hasPopup || (_parameters$data$titl7 = parameters.data.titleObj) !== null && _parameters$data$titl7 !== void 0 && _parameters$data$titl7.str || (_parameters$data$cont7 = parameters.data.contentsObj) !== null && _parameters$data$cont7 !== void 0 && _parameters$data$cont7.str || (_parameters$data$rich7 = parameters.data.richText) !== null && _parameters$data$rich7 !== void 0 && _parameters$data$rich7.str);
            super(parameters, {
              isRenderable,
              ignoreBorder: true
            });
          }
          render() {
            this.container.classList.add("caretAnnotation");
            if (!this.data.hasPopup) {
              this._createPopup(null, this.data);
            }
            return this.container;
          }
        }
        class InkAnnotationElement extends AnnotationElement {
          constructor(parameters) {
            var _parameters$data$titl8, _parameters$data$cont8, _parameters$data$rich8;
            const isRenderable = !!(parameters.data.hasPopup || (_parameters$data$titl8 = parameters.data.titleObj) !== null && _parameters$data$titl8 !== void 0 && _parameters$data$titl8.str || (_parameters$data$cont8 = parameters.data.contentsObj) !== null && _parameters$data$cont8 !== void 0 && _parameters$data$cont8.str || (_parameters$data$rich8 = parameters.data.richText) !== null && _parameters$data$rich8 !== void 0 && _parameters$data$rich8.str);
            super(parameters, {
              isRenderable,
              ignoreBorder: true
            });
            this.containerClassName = "inkAnnotation";
            this.svgElementName = "svg:polyline";
          }
          render() {
            this.container.classList.add(this.containerClassName);
            const data = this.data;
            const {
              width,
              height
            } = getRectDims(data.rect);
            const svg = this.svgFactory.create(width, height, true);
            for (const inkList of data.inkLists) {
              let points = [];
              for (const coordinate of inkList) {
                const x = coordinate.x - data.rect[0];
                const y = data.rect[3] - coordinate.y;
                points.push("".concat(x, ",").concat(y));
              }
              points = points.join(" ");
              const polyline = this.svgFactory.createElement(this.svgElementName);
              polyline.setAttribute("points", points);
              polyline.setAttribute("stroke-width", data.borderStyle.width || 1);
              polyline.setAttribute("stroke", "transparent");
              polyline.setAttribute("fill", "transparent");
              this._createPopup(polyline, data);
              svg.append(polyline);
            }
            this.container.append(svg);
            return this.container;
          }
        }
        class HighlightAnnotationElement extends AnnotationElement {
          constructor(parameters) {
            var _parameters$data$titl9, _parameters$data$cont9, _parameters$data$rich9;
            const isRenderable = !!(parameters.data.hasPopup || (_parameters$data$titl9 = parameters.data.titleObj) !== null && _parameters$data$titl9 !== void 0 && _parameters$data$titl9.str || (_parameters$data$cont9 = parameters.data.contentsObj) !== null && _parameters$data$cont9 !== void 0 && _parameters$data$cont9.str || (_parameters$data$rich9 = parameters.data.richText) !== null && _parameters$data$rich9 !== void 0 && _parameters$data$rich9.str);
            super(parameters, {
              isRenderable,
              ignoreBorder: true,
              createQuadrilaterals: true
            });
          }
          render() {
            if (!this.data.hasPopup) {
              this._createPopup(null, this.data);
            }
            if (this.quadrilaterals) {
              return this._renderQuadrilaterals("highlightAnnotation");
            }
            this.container.classList.add("highlightAnnotation");
            return this.container;
          }
        }
        class UnderlineAnnotationElement extends AnnotationElement {
          constructor(parameters) {
            var _parameters$data$titl10, _parameters$data$cont10, _parameters$data$rich10;
            const isRenderable = !!(parameters.data.hasPopup || (_parameters$data$titl10 = parameters.data.titleObj) !== null && _parameters$data$titl10 !== void 0 && _parameters$data$titl10.str || (_parameters$data$cont10 = parameters.data.contentsObj) !== null && _parameters$data$cont10 !== void 0 && _parameters$data$cont10.str || (_parameters$data$rich10 = parameters.data.richText) !== null && _parameters$data$rich10 !== void 0 && _parameters$data$rich10.str);
            super(parameters, {
              isRenderable,
              ignoreBorder: true,
              createQuadrilaterals: true
            });
          }
          render() {
            if (!this.data.hasPopup) {
              this._createPopup(null, this.data);
            }
            if (this.quadrilaterals) {
              return this._renderQuadrilaterals("underlineAnnotation");
            }
            this.container.classList.add("underlineAnnotation");
            return this.container;
          }
        }
        class SquigglyAnnotationElement extends AnnotationElement {
          constructor(parameters) {
            var _parameters$data$titl11, _parameters$data$cont11, _parameters$data$rich11;
            const isRenderable = !!(parameters.data.hasPopup || (_parameters$data$titl11 = parameters.data.titleObj) !== null && _parameters$data$titl11 !== void 0 && _parameters$data$titl11.str || (_parameters$data$cont11 = parameters.data.contentsObj) !== null && _parameters$data$cont11 !== void 0 && _parameters$data$cont11.str || (_parameters$data$rich11 = parameters.data.richText) !== null && _parameters$data$rich11 !== void 0 && _parameters$data$rich11.str);
            super(parameters, {
              isRenderable,
              ignoreBorder: true,
              createQuadrilaterals: true
            });
          }
          render() {
            if (!this.data.hasPopup) {
              this._createPopup(null, this.data);
            }
            if (this.quadrilaterals) {
              return this._renderQuadrilaterals("squigglyAnnotation");
            }
            this.container.classList.add("squigglyAnnotation");
            return this.container;
          }
        }
        class StrikeOutAnnotationElement extends AnnotationElement {
          constructor(parameters) {
            var _parameters$data$titl12, _parameters$data$cont12, _parameters$data$rich12;
            const isRenderable = !!(parameters.data.hasPopup || (_parameters$data$titl12 = parameters.data.titleObj) !== null && _parameters$data$titl12 !== void 0 && _parameters$data$titl12.str || (_parameters$data$cont12 = parameters.data.contentsObj) !== null && _parameters$data$cont12 !== void 0 && _parameters$data$cont12.str || (_parameters$data$rich12 = parameters.data.richText) !== null && _parameters$data$rich12 !== void 0 && _parameters$data$rich12.str);
            super(parameters, {
              isRenderable,
              ignoreBorder: true,
              createQuadrilaterals: true
            });
          }
          render() {
            if (!this.data.hasPopup) {
              this._createPopup(null, this.data);
            }
            if (this.quadrilaterals) {
              return this._renderQuadrilaterals("strikeoutAnnotation");
            }
            this.container.classList.add("strikeoutAnnotation");
            return this.container;
          }
        }
        class StampAnnotationElement extends AnnotationElement {
          constructor(parameters) {
            var _parameters$data$titl13, _parameters$data$cont13, _parameters$data$rich13;
            const isRenderable = !!(parameters.data.hasPopup || (_parameters$data$titl13 = parameters.data.titleObj) !== null && _parameters$data$titl13 !== void 0 && _parameters$data$titl13.str || (_parameters$data$cont13 = parameters.data.contentsObj) !== null && _parameters$data$cont13 !== void 0 && _parameters$data$cont13.str || (_parameters$data$rich13 = parameters.data.richText) !== null && _parameters$data$rich13 !== void 0 && _parameters$data$rich13.str);
            super(parameters, {
              isRenderable,
              ignoreBorder: true
            });
          }
          render() {
            this.container.classList.add("stampAnnotation");
            if (!this.data.hasPopup) {
              this._createPopup(null, this.data);
            }
            return this.container;
          }
        }
        class FileAttachmentAnnotationElement extends AnnotationElement {
          constructor(parameters) {
            var _this$linkService$eve10;
            super(parameters, {
              isRenderable: true
            });
            const {
              filename,
              content
            } = this.data.file;
            this.filename = (0, _display_utils.getFilenameFromUrl)(filename, true);
            this.content = content;
            (_this$linkService$eve10 = this.linkService.eventBus) === null || _this$linkService$eve10 === void 0 || _this$linkService$eve10.dispatch("fileattachmentannotation", {
              source: this,
              filename,
              content
            });
          }
          render() {
            var _this$data$titleObj, _this$data$contentsOb;
            this.container.classList.add("fileAttachmentAnnotation");
            let trigger;
            if (this.data.hasAppearance) {
              trigger = document.createElement("div");
            } else {
              trigger = document.createElement("img");
              trigger.src = "".concat(this.imageResourcesPath, "annotation-").concat(/paperclip/i.test(this.data.name) ? "paperclip" : "pushpin", ".svg");
            }
            trigger.classList.add("popupTriggerArea");
            trigger.addEventListener("dblclick", this._download.bind(this));
            if (!this.data.hasPopup && ((_this$data$titleObj = this.data.titleObj) !== null && _this$data$titleObj !== void 0 && _this$data$titleObj.str || (_this$data$contentsOb = this.data.contentsObj) !== null && _this$data$contentsOb !== void 0 && _this$data$contentsOb.str || this.data.richText)) {
              this._createPopup(trigger, this.data);
            }
            this.container.append(trigger);
            return this.container;
          }
          _download() {
            var _this$downloadManager2;
            (_this$downloadManager2 = this.downloadManager) === null || _this$downloadManager2 === void 0 || _this$downloadManager2.openOrDownloadData(this.container, this.content, this.filename);
          }
        }
        class AnnotationLayer {
          static render(params) {
            const {
              annotations,
              div,
              viewport,
              accessibilityManager
            } = params;
            (0, _display_utils.setLayerDimensions)(div, viewport);
            const elementParams = {
              data: null,
              layer: div,
              page: params.page,
              viewport,
              linkService: params.linkService,
              downloadManager: params.downloadManager,
              imageResourcesPath: params.imageResourcesPath || "",
              renderForms: params.renderForms !== false,
              svgFactory: new _display_utils.DOMSVGFactory(),
              annotationStorage: params.annotationStorage || new _annotation_storage.AnnotationStorage(),
              enableScripting: params.enableScripting === true,
              hasJSActions: params.hasJSActions,
              fieldObjects: params.fieldObjects
            };
            let zIndex = 0;
            for (const data of annotations) {
              if (data.noHTML) {
                continue;
              }
              if (data.annotationType !== _util.AnnotationType.POPUP) {
                const {
                  width,
                  height
                } = getRectDims(data.rect);
                if (width <= 0 || height <= 0) {
                  continue;
                }
              }
              elementParams.data = data;
              const element = AnnotationElementFactory.create(elementParams);
              if (!element.isRenderable) {
                continue;
              }
              const rendered = element.render();
              if (data.hidden) {
                rendered.style.visibility = "hidden";
              }
              if (Array.isArray(rendered)) {
                for (const renderedElement of rendered) {
                  renderedElement.style.zIndex = zIndex++;
                  _classStaticPrivateMethodGet(AnnotationLayer, AnnotationLayer, _appendElement).call(AnnotationLayer, renderedElement, data.id, div, accessibilityManager);
                }
              } else {
                rendered.style.zIndex = zIndex++;
                if (element instanceof PopupAnnotationElement) {
                  div.prepend(rendered);
                } else {
                  _classStaticPrivateMethodGet(AnnotationLayer, AnnotationLayer, _appendElement).call(AnnotationLayer, rendered, data.id, div, accessibilityManager);
                }
              }
            }
            _classStaticPrivateMethodGet(this, AnnotationLayer, _setAnnotationCanvasMap).call(this, div, params.annotationCanvasMap);
          }
          static update(params) {
            const {
              annotationCanvasMap,
              div,
              viewport
            } = params;
            (0, _display_utils.setLayerDimensions)(div, {
              rotation: viewport.rotation
            });
            _classStaticPrivateMethodGet(this, AnnotationLayer, _setAnnotationCanvasMap).call(this, div, annotationCanvasMap);
            div.hidden = false;
          }
        }
        function _appendElement(element, id, div, accessibilityManager) {
          const contentElement = element.firstChild || element;
          contentElement.id = "".concat(_display_utils.AnnotationPrefix).concat(id);
          div.append(element);
          accessibilityManager === null || accessibilityManager === void 0 || accessibilityManager.moveElementInDOM(div, element, contentElement, false);
        }
        function _setAnnotationCanvasMap(div, annotationCanvasMap) {
          if (!annotationCanvasMap) {
            return;
          }
          for (const [id, canvas] of annotationCanvasMap) {
            const element = div.querySelector("[data-annotation-id=\"".concat(id, "\"]"));
            if (!element) {
              continue;
            }
            const {
              firstChild
            } = element;
            if (!firstChild) {
              element.append(canvas);
            } else if (firstChild.nodeName === "CANVAS") {
              firstChild.replaceWith(canvas);
            } else {
              firstChild.before(canvas);
            }
          }
          annotationCanvasMap.clear();
        }
        exports.AnnotationLayer = AnnotationLayer;

        /***/
      }, /* 33 */
      /***/(__unused_webpack_module, exports) => {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.ColorConverters = void 0;
        function makeColorComp(n) {
          return Math.floor(Math.max(0, Math.min(1, n)) * 255).toString(16).padStart(2, "0");
        }
        class ColorConverters {
          static CMYK_G(_ref42) {
            let [c, y, m, k] = _ref42;
            return ["G", 1 - Math.min(1, 0.3 * c + 0.59 * m + 0.11 * y + k)];
          }
          static G_CMYK(_ref43) {
            let [g] = _ref43;
            return ["CMYK", 0, 0, 0, 1 - g];
          }
          static G_RGB(_ref44) {
            let [g] = _ref44;
            return ["RGB", g, g, g];
          }
          static G_HTML(_ref45) {
            let [g] = _ref45;
            const G = makeColorComp(g);
            return "#".concat(G).concat(G).concat(G);
          }
          static RGB_G(_ref46) {
            let [r, g, b] = _ref46;
            return ["G", 0.3 * r + 0.59 * g + 0.11 * b];
          }
          static RGB_HTML(_ref47) {
            let [r, g, b] = _ref47;
            const R = makeColorComp(r);
            const G = makeColorComp(g);
            const B = makeColorComp(b);
            return "#".concat(R).concat(G).concat(B);
          }
          static T_HTML() {
            return "#00000000";
          }
          static CMYK_RGB(_ref48) {
            let [c, y, m, k] = _ref48;
            return ["RGB", 1 - Math.min(1, c + k), 1 - Math.min(1, m + k), 1 - Math.min(1, y + k)];
          }
          static CMYK_HTML(components) {
            const rgb = this.CMYK_RGB(components).slice(1);
            return this.RGB_HTML(rgb);
          }
          static RGB_CMYK(_ref49) {
            let [r, g, b] = _ref49;
            const c = 1 - r;
            const m = 1 - g;
            const y = 1 - b;
            const k = Math.min(c, m, y);
            return ["CMYK", c, m, y, k];
          }
        }
        exports.ColorConverters = ColorConverters;

        /***/
      }, /* 34 */
      /***/(__unused_webpack_module, exports, __w_pdfjs_require__) => {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.XfaLayer = void 0;
        var _xfa_text = __w_pdfjs_require__(19);
        class XfaLayer {
          static setupStorage(html, id, element, storage, intent) {
            const storedData = storage.getValue(id, {
              value: null
            });
            switch (element.name) {
              case "textarea":
                if (storedData.value !== null) {
                  html.textContent = storedData.value;
                }
                if (intent === "print") {
                  break;
                }
                html.addEventListener("input", event => {
                  storage.setValue(id, {
                    value: event.target.value
                  });
                });
                break;
              case "input":
                if (element.attributes.type === "radio" || element.attributes.type === "checkbox") {
                  if (storedData.value === element.attributes.xfaOn) {
                    html.setAttribute("checked", true);
                  } else if (storedData.value === element.attributes.xfaOff) {
                    html.removeAttribute("checked");
                  }
                  if (intent === "print") {
                    break;
                  }
                  html.addEventListener("change", event => {
                    storage.setValue(id, {
                      value: event.target.checked ? event.target.getAttribute("xfaOn") : event.target.getAttribute("xfaOff")
                    });
                  });
                } else {
                  if (storedData.value !== null) {
                    html.setAttribute("value", storedData.value);
                  }
                  if (intent === "print") {
                    break;
                  }
                  html.addEventListener("input", event => {
                    storage.setValue(id, {
                      value: event.target.value
                    });
                  });
                }
                break;
              case "select":
                if (storedData.value !== null) {
                  for (const option of element.children) {
                    if (option.attributes.value === storedData.value) {
                      option.attributes.selected = true;
                    }
                  }
                }
                html.addEventListener("input", event => {
                  const options = event.target.options;
                  const value = options.selectedIndex === -1 ? "" : options[options.selectedIndex].value;
                  storage.setValue(id, {
                    value
                  });
                });
                break;
            }
          }
          static setAttributes(_ref50) {
            let {
              html,
              element,
              storage = null,
              intent,
              linkService
            } = _ref50;
            const {
              attributes
            } = element;
            const isHTMLAnchorElement = html instanceof HTMLAnchorElement;
            if (attributes.type === "radio") {
              attributes.name = "".concat(attributes.name, "-").concat(intent);
            }
            for (const [key, value] of Object.entries(attributes)) {
              if (value === null || value === undefined) {
                continue;
              }
              switch (key) {
                case "class":
                  if (value.length) {
                    html.setAttribute(key, value.join(" "));
                  }
                  break;
                case "dataId":
                  break;
                case "id":
                  html.setAttribute("data-element-id", value);
                  break;
                case "style":
                  Object.assign(html.style, value);
                  break;
                case "textContent":
                  html.textContent = value;
                  break;
                default:
                  if (!isHTMLAnchorElement || key !== "href" && key !== "newWindow") {
                    html.setAttribute(key, value);
                  }
              }
            }
            if (isHTMLAnchorElement) {
              linkService.addLinkAttributes(html, attributes.href, attributes.newWindow);
            }
            if (storage && attributes.dataId) {
              this.setupStorage(html, attributes.dataId, element, storage);
            }
          }
          static render(parameters) {
            const storage = parameters.annotationStorage;
            const linkService = parameters.linkService;
            const root = parameters.xfaHtml;
            const intent = parameters.intent || "display";
            const rootHtml = document.createElement(root.name);
            if (root.attributes) {
              this.setAttributes({
                html: rootHtml,
                element: root,
                intent,
                linkService
              });
            }
            const stack = [[root, -1, rootHtml]];
            const rootDiv = parameters.div;
            rootDiv.append(rootHtml);
            if (parameters.viewport) {
              const transform = "matrix(".concat(parameters.viewport.transform.join(","), ")");
              rootDiv.style.transform = transform;
            }
            if (intent !== "richText") {
              rootDiv.setAttribute("class", "xfaLayer xfaFont");
            }
            const textDivs = [];
            while (stack.length > 0) {
              var _child$attributes;
              const [parent, i, html] = stack.at(-1);
              if (i + 1 === parent.children.length) {
                stack.pop();
                continue;
              }
              const child = parent.children[++stack.at(-1)[1]];
              if (child === null) {
                continue;
              }
              const {
                name
              } = child;
              if (name === "#text") {
                const node = document.createTextNode(child.value);
                textDivs.push(node);
                html.append(node);
                continue;
              }
              let childHtml;
              if (child !== null && child !== void 0 && (_child$attributes = child.attributes) !== null && _child$attributes !== void 0 && _child$attributes.xmlns) {
                childHtml = document.createElementNS(child.attributes.xmlns, name);
              } else {
                childHtml = document.createElement(name);
              }
              html.append(childHtml);
              if (child.attributes) {
                this.setAttributes({
                  html: childHtml,
                  element: child,
                  storage,
                  intent,
                  linkService
                });
              }
              if (child.children && child.children.length > 0) {
                stack.push([child, -1, childHtml]);
              } else if (child.value) {
                const node = document.createTextNode(child.value);
                if (_xfa_text.XfaText.shouldBuildText(name)) {
                  textDivs.push(node);
                }
                childHtml.append(node);
              }
            }
            for (const el of rootDiv.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea")) {
              el.setAttribute("readOnly", true);
            }
            return {
              textDivs
            };
          }
          static update(parameters) {
            const transform = "matrix(".concat(parameters.viewport.transform.join(","), ")");
            parameters.div.style.transform = transform;
            parameters.div.hidden = false;
          }
        }
        exports.XfaLayer = XfaLayer;

        /***/
      }, /* 35 */
      /***/(__unused_webpack_module, exports, __w_pdfjs_require__) => {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.SVGGraphics = void 0;
        var _display_utils = __w_pdfjs_require__(6);
        var _util = __w_pdfjs_require__(1);
        var _is_node = __w_pdfjs_require__(10);
        let SVGGraphics = class {
          constructor() {
            (0, _util.unreachable)("Not implemented: SVGGraphics");
          }
        };
        exports.SVGGraphics = SVGGraphics;
        {
          const SVG_DEFAULTS = {
            fontStyle: "normal",
            fontWeight: "normal",
            fillColor: "#000000"
          };
          const XML_NS = "http://www.w3.org/XML/1998/namespace";
          const XLINK_NS = "http://www.w3.org/1999/xlink";
          const LINE_CAP_STYLES = ["butt", "round", "square"];
          const LINE_JOIN_STYLES = ["miter", "round", "bevel"];
          const createObjectURL = function (data) {
            let contentType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
            let forceDataSchema = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            if (URL.createObjectURL && typeof Blob !== "undefined" && !forceDataSchema) {
              return URL.createObjectURL(new Blob([data], {
                type: contentType
              }));
            }
            const digits = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            let buffer = "data:".concat(contentType, ";base64,");
            for (let i = 0, ii = data.length; i < ii; i += 3) {
              const b1 = data[i] & 0xff;
              const b2 = data[i + 1] & 0xff;
              const b3 = data[i + 2] & 0xff;
              const d1 = b1 >> 2,
                d2 = (b1 & 3) << 4 | b2 >> 4;
              const d3 = i + 1 < ii ? (b2 & 0xf) << 2 | b3 >> 6 : 64;
              const d4 = i + 2 < ii ? b3 & 0x3f : 64;
              buffer += digits[d1] + digits[d2] + digits[d3] + digits[d4];
            }
            return buffer;
          };
          const convertImgDataToPng = function () {
            const PNG_HEADER = new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
            const CHUNK_WRAPPER_SIZE = 12;
            const crcTable = new Int32Array(256);
            for (let i = 0; i < 256; i++) {
              let c = i;
              for (let h = 0; h < 8; h++) {
                if (c & 1) {
                  c = 0xedb88320 ^ c >> 1 & 0x7fffffff;
                } else {
                  c = c >> 1 & 0x7fffffff;
                }
              }
              crcTable[i] = c;
            }
            function crc32(data, start, end) {
              let crc = -1;
              for (let i = start; i < end; i++) {
                const a = (crc ^ data[i]) & 0xff;
                const b = crcTable[a];
                crc = crc >>> 8 ^ b;
              }
              return crc ^ -1;
            }
            function writePngChunk(type, body, data, offset) {
              let p = offset;
              const len = body.length;
              data[p] = len >> 24 & 0xff;
              data[p + 1] = len >> 16 & 0xff;
              data[p + 2] = len >> 8 & 0xff;
              data[p + 3] = len & 0xff;
              p += 4;
              data[p] = type.charCodeAt(0) & 0xff;
              data[p + 1] = type.charCodeAt(1) & 0xff;
              data[p + 2] = type.charCodeAt(2) & 0xff;
              data[p + 3] = type.charCodeAt(3) & 0xff;
              p += 4;
              data.set(body, p);
              p += body.length;
              const crc = crc32(data, offset + 4, p);
              data[p] = crc >> 24 & 0xff;
              data[p + 1] = crc >> 16 & 0xff;
              data[p + 2] = crc >> 8 & 0xff;
              data[p + 3] = crc & 0xff;
            }
            function adler32(data, start, end) {
              let a = 1;
              let b = 0;
              for (let i = start; i < end; ++i) {
                a = (a + (data[i] & 0xff)) % 65521;
                b = (b + a) % 65521;
              }
              return b << 16 | a;
            }
            function deflateSync(literals) {
              if (!_is_node.isNodeJS) {
                return deflateSyncUncompressed(literals);
              }
              try {
                let input;
                if (parseInt(process.versions.node) >= 8) {
                  input = literals;
                } else {
                  input = Buffer.from(literals);
                }
                const output = (__webpack_require__(82787).deflateSync)(input, {
                  level: 9
                });
                return output instanceof Uint8Array ? output : new Uint8Array(output);
              } catch (e) {
                (0, _util.warn)("Not compressing PNG because zlib.deflateSync is unavailable: " + e);
              }
              return deflateSyncUncompressed(literals);
            }
            function deflateSyncUncompressed(literals) {
              let len = literals.length;
              const maxBlockLength = 0xffff;
              const deflateBlocks = Math.ceil(len / maxBlockLength);
              const idat = new Uint8Array(2 + len + deflateBlocks * 5 + 4);
              let pi = 0;
              idat[pi++] = 0x78;
              idat[pi++] = 0x9c;
              let pos = 0;
              while (len > maxBlockLength) {
                idat[pi++] = 0x00;
                idat[pi++] = 0xff;
                idat[pi++] = 0xff;
                idat[pi++] = 0x00;
                idat[pi++] = 0x00;
                idat.set(literals.subarray(pos, pos + maxBlockLength), pi);
                pi += maxBlockLength;
                pos += maxBlockLength;
                len -= maxBlockLength;
              }
              idat[pi++] = 0x01;
              idat[pi++] = len & 0xff;
              idat[pi++] = len >> 8 & 0xff;
              idat[pi++] = ~len & 0xffff & 0xff;
              idat[pi++] = (~len & 0xffff) >> 8 & 0xff;
              idat.set(literals.subarray(pos), pi);
              pi += literals.length - pos;
              const adler = adler32(literals, 0, literals.length);
              idat[pi++] = adler >> 24 & 0xff;
              idat[pi++] = adler >> 16 & 0xff;
              idat[pi++] = adler >> 8 & 0xff;
              idat[pi++] = adler & 0xff;
              return idat;
            }
            function encode(imgData, kind, forceDataSchema, isMask) {
              const width = imgData.width;
              const height = imgData.height;
              let bitDepth, colorType, lineSize;
              const bytes = imgData.data;
              switch (kind) {
                case _util.ImageKind.GRAYSCALE_1BPP:
                  colorType = 0;
                  bitDepth = 1;
                  lineSize = width + 7 >> 3;
                  break;
                case _util.ImageKind.RGB_24BPP:
                  colorType = 2;
                  bitDepth = 8;
                  lineSize = width * 3;
                  break;
                case _util.ImageKind.RGBA_32BPP:
                  colorType = 6;
                  bitDepth = 8;
                  lineSize = width * 4;
                  break;
                default:
                  throw new Error("invalid format");
              }
              const literals = new Uint8Array((1 + lineSize) * height);
              let offsetLiterals = 0,
                offsetBytes = 0;
              for (let y = 0; y < height; ++y) {
                literals[offsetLiterals++] = 0;
                literals.set(bytes.subarray(offsetBytes, offsetBytes + lineSize), offsetLiterals);
                offsetBytes += lineSize;
                offsetLiterals += lineSize;
              }
              if (kind === _util.ImageKind.GRAYSCALE_1BPP && isMask) {
                offsetLiterals = 0;
                for (let y = 0; y < height; y++) {
                  offsetLiterals++;
                  for (let i = 0; i < lineSize; i++) {
                    literals[offsetLiterals++] ^= 0xff;
                  }
                }
              }
              const ihdr = new Uint8Array([width >> 24 & 0xff, width >> 16 & 0xff, width >> 8 & 0xff, width & 0xff, height >> 24 & 0xff, height >> 16 & 0xff, height >> 8 & 0xff, height & 0xff, bitDepth, colorType, 0x00, 0x00, 0x00]);
              const idat = deflateSync(literals);
              const pngLength = PNG_HEADER.length + CHUNK_WRAPPER_SIZE * 3 + ihdr.length + idat.length;
              const data = new Uint8Array(pngLength);
              let offset = 0;
              data.set(PNG_HEADER, offset);
              offset += PNG_HEADER.length;
              writePngChunk("IHDR", ihdr, data, offset);
              offset += CHUNK_WRAPPER_SIZE + ihdr.length;
              writePngChunk("IDATA", idat, data, offset);
              offset += CHUNK_WRAPPER_SIZE + idat.length;
              writePngChunk("IEND", new Uint8Array(0), data, offset);
              return createObjectURL(data, "image/png", forceDataSchema);
            }
            return function convertImgDataToPng(imgData, forceDataSchema, isMask) {
              const kind = imgData.kind === undefined ? _util.ImageKind.GRAYSCALE_1BPP : imgData.kind;
              return encode(imgData, kind, forceDataSchema, isMask);
            };
          }();
          class SVGExtraState {
            constructor() {
              this.fontSizeScale = 1;
              this.fontWeight = SVG_DEFAULTS.fontWeight;
              this.fontSize = 0;
              this.textMatrix = _util.IDENTITY_MATRIX;
              this.fontMatrix = _util.FONT_IDENTITY_MATRIX;
              this.leading = 0;
              this.textRenderingMode = _util.TextRenderingMode.FILL;
              this.textMatrixScale = 1;
              this.x = 0;
              this.y = 0;
              this.lineX = 0;
              this.lineY = 0;
              this.charSpacing = 0;
              this.wordSpacing = 0;
              this.textHScale = 1;
              this.textRise = 0;
              this.fillColor = SVG_DEFAULTS.fillColor;
              this.strokeColor = "#000000";
              this.fillAlpha = 1;
              this.strokeAlpha = 1;
              this.lineWidth = 1;
              this.lineJoin = "";
              this.lineCap = "";
              this.miterLimit = 0;
              this.dashArray = [];
              this.dashPhase = 0;
              this.dependencies = [];
              this.activeClipUrl = null;
              this.clipGroup = null;
              this.maskId = "";
            }
            clone() {
              return Object.create(this);
            }
            setCurrentPoint(x, y) {
              this.x = x;
              this.y = y;
            }
          }
          function opListToTree(opList) {
            let opTree = [];
            const tmp = [];
            for (const opListElement of opList) {
              if (opListElement.fn === "save") {
                opTree.push({
                  fnId: 92,
                  fn: "group",
                  items: []
                });
                tmp.push(opTree);
                opTree = opTree.at(-1).items;
                continue;
              }
              if (opListElement.fn === "restore") {
                opTree = tmp.pop();
              } else {
                opTree.push(opListElement);
              }
            }
            return opTree;
          }
          function pf(value) {
            if (Number.isInteger(value)) {
              return value.toString();
            }
            const s = value.toFixed(10);
            let i = s.length - 1;
            if (s[i] !== "0") {
              return s;
            }
            do {
              i--;
            } while (s[i] === "0");
            return s.substring(0, s[i] === "." ? i : i + 1);
          }
          function pm(m) {
            if (m[4] === 0 && m[5] === 0) {
              if (m[1] === 0 && m[2] === 0) {
                if (m[0] === 1 && m[3] === 1) {
                  return "";
                }
                return "scale(".concat(pf(m[0]), " ").concat(pf(m[3]), ")");
              }
              if (m[0] === m[3] && m[1] === -m[2]) {
                const a = Math.acos(m[0]) * 180 / Math.PI;
                return "rotate(".concat(pf(a), ")");
              }
            } else {
              if (m[0] === 1 && m[1] === 0 && m[2] === 0 && m[3] === 1) {
                return "translate(".concat(pf(m[4]), " ").concat(pf(m[5]), ")");
              }
            }
            return "matrix(".concat(pf(m[0]), " ").concat(pf(m[1]), " ").concat(pf(m[2]), " ").concat(pf(m[3]), " ").concat(pf(m[4]), " ") + "".concat(pf(m[5]), ")");
          }
          let clipCount = 0;
          let maskCount = 0;
          let shadingCount = 0;
          exports.SVGGraphics = SVGGraphics = class {
            constructor(commonObjs, objs) {
              let forceDataSchema = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
              (0, _display_utils.deprecated)("The SVG back-end is no longer maintained and *may* be removed in the future.");
              this.svgFactory = new _display_utils.DOMSVGFactory();
              this.current = new SVGExtraState();
              this.transformMatrix = _util.IDENTITY_MATRIX;
              this.transformStack = [];
              this.extraStack = [];
              this.commonObjs = commonObjs;
              this.objs = objs;
              this.pendingClip = null;
              this.pendingEOFill = false;
              this.embedFonts = false;
              this.embeddedFonts = Object.create(null);
              this.cssStyle = null;
              this.forceDataSchema = !!forceDataSchema;
              this._operatorIdMapping = [];
              for (const op in _util.OPS) {
                this._operatorIdMapping[_util.OPS[op]] = op;
              }
            }
            getObject(data) {
              let fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
              if (typeof data === "string") {
                return data.startsWith("g_") ? this.commonObjs.get(data) : this.objs.get(data);
              }
              return fallback;
            }
            save() {
              this.transformStack.push(this.transformMatrix);
              const old = this.current;
              this.extraStack.push(old);
              this.current = old.clone();
            }
            restore() {
              this.transformMatrix = this.transformStack.pop();
              this.current = this.extraStack.pop();
              this.pendingClip = null;
              this.tgrp = null;
            }
            group(items) {
              this.save();
              this.executeOpTree(items);
              this.restore();
            }
            loadDependencies(operatorList) {
              const fnArray = operatorList.fnArray;
              const argsArray = operatorList.argsArray;
              for (let i = 0, ii = fnArray.length; i < ii; i++) {
                if (fnArray[i] !== _util.OPS.dependency) {
                  continue;
                }
                for (const obj of argsArray[i]) {
                  const objsPool = obj.startsWith("g_") ? this.commonObjs : this.objs;
                  const promise = new Promise(resolve => {
                    objsPool.get(obj, resolve);
                  });
                  this.current.dependencies.push(promise);
                }
              }
              return Promise.all(this.current.dependencies);
            }
            transform(a, b, c, d, e, f) {
              const transformMatrix = [a, b, c, d, e, f];
              this.transformMatrix = _util.Util.transform(this.transformMatrix, transformMatrix);
              this.tgrp = null;
            }
            getSVG(operatorList, viewport) {
              this.viewport = viewport;
              const svgElement = this._initialize(viewport);
              return this.loadDependencies(operatorList).then(() => {
                this.transformMatrix = _util.IDENTITY_MATRIX;
                this.executeOpTree(this.convertOpList(operatorList));
                return svgElement;
              });
            }
            convertOpList(operatorList) {
              const operatorIdMapping = this._operatorIdMapping;
              const argsArray = operatorList.argsArray;
              const fnArray = operatorList.fnArray;
              const opList = [];
              for (let i = 0, ii = fnArray.length; i < ii; i++) {
                const fnId = fnArray[i];
                opList.push({
                  fnId,
                  fn: operatorIdMapping[fnId],
                  args: argsArray[i]
                });
              }
              return opListToTree(opList);
            }
            executeOpTree(opTree) {
              for (const opTreeElement of opTree) {
                const fn = opTreeElement.fn;
                const fnId = opTreeElement.fnId;
                const args = opTreeElement.args;
                switch (fnId | 0) {
                  case _util.OPS.beginText:
                    this.beginText();
                    break;
                  case _util.OPS.dependency:
                    break;
                  case _util.OPS.setLeading:
                    this.setLeading(args);
                    break;
                  case _util.OPS.setLeadingMoveText:
                    this.setLeadingMoveText(args[0], args[1]);
                    break;
                  case _util.OPS.setFont:
                    this.setFont(args);
                    break;
                  case _util.OPS.showText:
                    this.showText(args[0]);
                    break;
                  case _util.OPS.showSpacedText:
                    this.showText(args[0]);
                    break;
                  case _util.OPS.endText:
                    this.endText();
                    break;
                  case _util.OPS.moveText:
                    this.moveText(args[0], args[1]);
                    break;
                  case _util.OPS.setCharSpacing:
                    this.setCharSpacing(args[0]);
                    break;
                  case _util.OPS.setWordSpacing:
                    this.setWordSpacing(args[0]);
                    break;
                  case _util.OPS.setHScale:
                    this.setHScale(args[0]);
                    break;
                  case _util.OPS.setTextMatrix:
                    this.setTextMatrix(args[0], args[1], args[2], args[3], args[4], args[5]);
                    break;
                  case _util.OPS.setTextRise:
                    this.setTextRise(args[0]);
                    break;
                  case _util.OPS.setTextRenderingMode:
                    this.setTextRenderingMode(args[0]);
                    break;
                  case _util.OPS.setLineWidth:
                    this.setLineWidth(args[0]);
                    break;
                  case _util.OPS.setLineJoin:
                    this.setLineJoin(args[0]);
                    break;
                  case _util.OPS.setLineCap:
                    this.setLineCap(args[0]);
                    break;
                  case _util.OPS.setMiterLimit:
                    this.setMiterLimit(args[0]);
                    break;
                  case _util.OPS.setFillRGBColor:
                    this.setFillRGBColor(args[0], args[1], args[2]);
                    break;
                  case _util.OPS.setStrokeRGBColor:
                    this.setStrokeRGBColor(args[0], args[1], args[2]);
                    break;
                  case _util.OPS.setStrokeColorN:
                    this.setStrokeColorN(args);
                    break;
                  case _util.OPS.setFillColorN:
                    this.setFillColorN(args);
                    break;
                  case _util.OPS.shadingFill:
                    this.shadingFill(args[0]);
                    break;
                  case _util.OPS.setDash:
                    this.setDash(args[0], args[1]);
                    break;
                  case _util.OPS.setRenderingIntent:
                    this.setRenderingIntent(args[0]);
                    break;
                  case _util.OPS.setFlatness:
                    this.setFlatness(args[0]);
                    break;
                  case _util.OPS.setGState:
                    this.setGState(args[0]);
                    break;
                  case _util.OPS.fill:
                    this.fill();
                    break;
                  case _util.OPS.eoFill:
                    this.eoFill();
                    break;
                  case _util.OPS.stroke:
                    this.stroke();
                    break;
                  case _util.OPS.fillStroke:
                    this.fillStroke();
                    break;
                  case _util.OPS.eoFillStroke:
                    this.eoFillStroke();
                    break;
                  case _util.OPS.clip:
                    this.clip("nonzero");
                    break;
                  case _util.OPS.eoClip:
                    this.clip("evenodd");
                    break;
                  case _util.OPS.paintSolidColorImageMask:
                    this.paintSolidColorImageMask();
                    break;
                  case _util.OPS.paintImageXObject:
                    this.paintImageXObject(args[0]);
                    break;
                  case _util.OPS.paintInlineImageXObject:
                    this.paintInlineImageXObject(args[0]);
                    break;
                  case _util.OPS.paintImageMaskXObject:
                    this.paintImageMaskXObject(args[0]);
                    break;
                  case _util.OPS.paintFormXObjectBegin:
                    this.paintFormXObjectBegin(args[0], args[1]);
                    break;
                  case _util.OPS.paintFormXObjectEnd:
                    this.paintFormXObjectEnd();
                    break;
                  case _util.OPS.closePath:
                    this.closePath();
                    break;
                  case _util.OPS.closeStroke:
                    this.closeStroke();
                    break;
                  case _util.OPS.closeFillStroke:
                    this.closeFillStroke();
                    break;
                  case _util.OPS.closeEOFillStroke:
                    this.closeEOFillStroke();
                    break;
                  case _util.OPS.nextLine:
                    this.nextLine();
                    break;
                  case _util.OPS.transform:
                    this.transform(args[0], args[1], args[2], args[3], args[4], args[5]);
                    break;
                  case _util.OPS.constructPath:
                    this.constructPath(args[0], args[1]);
                    break;
                  case _util.OPS.endPath:
                    this.endPath();
                    break;
                  case 92:
                    this.group(opTreeElement.items);
                    break;
                  default:
                    (0, _util.warn)("Unimplemented operator ".concat(fn));
                    break;
                }
              }
            }
            setWordSpacing(wordSpacing) {
              this.current.wordSpacing = wordSpacing;
            }
            setCharSpacing(charSpacing) {
              this.current.charSpacing = charSpacing;
            }
            nextLine() {
              this.moveText(0, this.current.leading);
            }
            setTextMatrix(a, b, c, d, e, f) {
              const current = this.current;
              current.textMatrix = current.lineMatrix = [a, b, c, d, e, f];
              current.textMatrixScale = Math.hypot(a, b);
              current.x = current.lineX = 0;
              current.y = current.lineY = 0;
              current.xcoords = [];
              current.ycoords = [];
              current.tspan = this.svgFactory.createElement("svg:tspan");
              current.tspan.setAttributeNS(null, "font-family", current.fontFamily);
              current.tspan.setAttributeNS(null, "font-size", "".concat(pf(current.fontSize), "px"));
              current.tspan.setAttributeNS(null, "y", pf(-current.y));
              current.txtElement = this.svgFactory.createElement("svg:text");
              current.txtElement.append(current.tspan);
            }
            beginText() {
              const current = this.current;
              current.x = current.lineX = 0;
              current.y = current.lineY = 0;
              current.textMatrix = _util.IDENTITY_MATRIX;
              current.lineMatrix = _util.IDENTITY_MATRIX;
              current.textMatrixScale = 1;
              current.tspan = this.svgFactory.createElement("svg:tspan");
              current.txtElement = this.svgFactory.createElement("svg:text");
              current.txtgrp = this.svgFactory.createElement("svg:g");
              current.xcoords = [];
              current.ycoords = [];
            }
            moveText(x, y) {
              const current = this.current;
              current.x = current.lineX += x;
              current.y = current.lineY += y;
              current.xcoords = [];
              current.ycoords = [];
              current.tspan = this.svgFactory.createElement("svg:tspan");
              current.tspan.setAttributeNS(null, "font-family", current.fontFamily);
              current.tspan.setAttributeNS(null, "font-size", "".concat(pf(current.fontSize), "px"));
              current.tspan.setAttributeNS(null, "y", pf(-current.y));
            }
            showText(glyphs) {
              const current = this.current;
              const font = current.font;
              const fontSize = current.fontSize;
              if (fontSize === 0) {
                return;
              }
              const fontSizeScale = current.fontSizeScale;
              const charSpacing = current.charSpacing;
              const wordSpacing = current.wordSpacing;
              const fontDirection = current.fontDirection;
              const textHScale = current.textHScale * fontDirection;
              const vertical = font.vertical;
              const spacingDir = vertical ? 1 : -1;
              const defaultVMetrics = font.defaultVMetrics;
              const widthAdvanceScale = fontSize * current.fontMatrix[0];
              let x = 0;
              for (const glyph of glyphs) {
                if (glyph === null) {
                  x += fontDirection * wordSpacing;
                  continue;
                } else if (typeof glyph === "number") {
                  x += spacingDir * glyph * fontSize / 1000;
                  continue;
                }
                const spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
                const character = glyph.fontChar;
                let scaledX, scaledY;
                let width = glyph.width;
                if (vertical) {
                  let vx;
                  const vmetric = glyph.vmetric || defaultVMetrics;
                  vx = glyph.vmetric ? vmetric[1] : width * 0.5;
                  vx = -vx * widthAdvanceScale;
                  const vy = vmetric[2] * widthAdvanceScale;
                  width = vmetric ? -vmetric[0] : width;
                  scaledX = vx / fontSizeScale;
                  scaledY = (x + vy) / fontSizeScale;
                } else {
                  scaledX = x / fontSizeScale;
                  scaledY = 0;
                }
                if (glyph.isInFont || font.missingFile) {
                  current.xcoords.push(current.x + scaledX);
                  if (vertical) {
                    current.ycoords.push(-current.y + scaledY);
                  }
                  current.tspan.textContent += character;
                } else {}
                let charWidth;
                if (vertical) {
                  charWidth = width * widthAdvanceScale - spacing * fontDirection;
                } else {
                  charWidth = width * widthAdvanceScale + spacing * fontDirection;
                }
                x += charWidth;
              }
              current.tspan.setAttributeNS(null, "x", current.xcoords.map(pf).join(" "));
              if (vertical) {
                current.tspan.setAttributeNS(null, "y", current.ycoords.map(pf).join(" "));
              } else {
                current.tspan.setAttributeNS(null, "y", pf(-current.y));
              }
              if (vertical) {
                current.y -= x;
              } else {
                current.x += x * textHScale;
              }
              current.tspan.setAttributeNS(null, "font-family", current.fontFamily);
              current.tspan.setAttributeNS(null, "font-size", "".concat(pf(current.fontSize), "px"));
              if (current.fontStyle !== SVG_DEFAULTS.fontStyle) {
                current.tspan.setAttributeNS(null, "font-style", current.fontStyle);
              }
              if (current.fontWeight !== SVG_DEFAULTS.fontWeight) {
                current.tspan.setAttributeNS(null, "font-weight", current.fontWeight);
              }
              const fillStrokeMode = current.textRenderingMode & _util.TextRenderingMode.FILL_STROKE_MASK;
              if (fillStrokeMode === _util.TextRenderingMode.FILL || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
                if (current.fillColor !== SVG_DEFAULTS.fillColor) {
                  current.tspan.setAttributeNS(null, "fill", current.fillColor);
                }
                if (current.fillAlpha < 1) {
                  current.tspan.setAttributeNS(null, "fill-opacity", current.fillAlpha);
                }
              } else if (current.textRenderingMode === _util.TextRenderingMode.ADD_TO_PATH) {
                current.tspan.setAttributeNS(null, "fill", "transparent");
              } else {
                current.tspan.setAttributeNS(null, "fill", "none");
              }
              if (fillStrokeMode === _util.TextRenderingMode.STROKE || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
                const lineWidthScale = 1 / (current.textMatrixScale || 1);
                this._setStrokeAttributes(current.tspan, lineWidthScale);
              }
              let textMatrix = current.textMatrix;
              if (current.textRise !== 0) {
                textMatrix = textMatrix.slice();
                textMatrix[5] += current.textRise;
              }
              current.txtElement.setAttributeNS(null, "transform", "".concat(pm(textMatrix), " scale(").concat(pf(textHScale), ", -1)"));
              current.txtElement.setAttributeNS(XML_NS, "xml:space", "preserve");
              current.txtElement.append(current.tspan);
              current.txtgrp.append(current.txtElement);
              this._ensureTransformGroup().append(current.txtElement);
            }
            setLeadingMoveText(x, y) {
              this.setLeading(-y);
              this.moveText(x, y);
            }
            addFontStyle(fontObj) {
              if (!fontObj.data) {
                throw new Error("addFontStyle: No font data available, " + 'ensure that the "fontExtraProperties" API parameter is set.');
              }
              if (!this.cssStyle) {
                this.cssStyle = this.svgFactory.createElement("svg:style");
                this.cssStyle.setAttributeNS(null, "type", "text/css");
                this.defs.append(this.cssStyle);
              }
              const url = createObjectURL(fontObj.data, fontObj.mimetype, this.forceDataSchema);
              this.cssStyle.textContent += "@font-face { font-family: \"".concat(fontObj.loadedName, "\";") + " src: url(".concat(url, "); }\n");
            }
            setFont(details) {
              const current = this.current;
              const fontObj = this.commonObjs.get(details[0]);
              let size = details[1];
              current.font = fontObj;
              if (this.embedFonts && !fontObj.missingFile && !this.embeddedFonts[fontObj.loadedName]) {
                this.addFontStyle(fontObj);
                this.embeddedFonts[fontObj.loadedName] = fontObj;
              }
              current.fontMatrix = fontObj.fontMatrix || _util.FONT_IDENTITY_MATRIX;
              let bold = "normal";
              if (fontObj.black) {
                bold = "900";
              } else if (fontObj.bold) {
                bold = "bold";
              }
              const italic = fontObj.italic ? "italic" : "normal";
              if (size < 0) {
                size = -size;
                current.fontDirection = -1;
              } else {
                current.fontDirection = 1;
              }
              current.fontSize = size;
              current.fontFamily = fontObj.loadedName;
              current.fontWeight = bold;
              current.fontStyle = italic;
              current.tspan = this.svgFactory.createElement("svg:tspan");
              current.tspan.setAttributeNS(null, "y", pf(-current.y));
              current.xcoords = [];
              current.ycoords = [];
            }
            endText() {
              var _current$txtElement;
              const current = this.current;
              if (current.textRenderingMode & _util.TextRenderingMode.ADD_TO_PATH_FLAG && (_current$txtElement = current.txtElement) !== null && _current$txtElement !== void 0 && _current$txtElement.hasChildNodes()) {
                current.element = current.txtElement;
                this.clip("nonzero");
                this.endPath();
              }
            }
            setLineWidth(width) {
              if (width > 0) {
                this.current.lineWidth = width;
              }
            }
            setLineCap(style) {
              this.current.lineCap = LINE_CAP_STYLES[style];
            }
            setLineJoin(style) {
              this.current.lineJoin = LINE_JOIN_STYLES[style];
            }
            setMiterLimit(limit) {
              this.current.miterLimit = limit;
            }
            setStrokeAlpha(strokeAlpha) {
              this.current.strokeAlpha = strokeAlpha;
            }
            setStrokeRGBColor(r, g, b) {
              this.current.strokeColor = _util.Util.makeHexColor(r, g, b);
            }
            setFillAlpha(fillAlpha) {
              this.current.fillAlpha = fillAlpha;
            }
            setFillRGBColor(r, g, b) {
              this.current.fillColor = _util.Util.makeHexColor(r, g, b);
              this.current.tspan = this.svgFactory.createElement("svg:tspan");
              this.current.xcoords = [];
              this.current.ycoords = [];
            }
            setStrokeColorN(args) {
              this.current.strokeColor = this._makeColorN_Pattern(args);
            }
            setFillColorN(args) {
              this.current.fillColor = this._makeColorN_Pattern(args);
            }
            shadingFill(args) {
              const width = this.viewport.width;
              const height = this.viewport.height;
              const inv = _util.Util.inverseTransform(this.transformMatrix);
              const bl = _util.Util.applyTransform([0, 0], inv);
              const br = _util.Util.applyTransform([0, height], inv);
              const ul = _util.Util.applyTransform([width, 0], inv);
              const ur = _util.Util.applyTransform([width, height], inv);
              const x0 = Math.min(bl[0], br[0], ul[0], ur[0]);
              const y0 = Math.min(bl[1], br[1], ul[1], ur[1]);
              const x1 = Math.max(bl[0], br[0], ul[0], ur[0]);
              const y1 = Math.max(bl[1], br[1], ul[1], ur[1]);
              const rect = this.svgFactory.createElement("svg:rect");
              rect.setAttributeNS(null, "x", x0);
              rect.setAttributeNS(null, "y", y0);
              rect.setAttributeNS(null, "width", x1 - x0);
              rect.setAttributeNS(null, "height", y1 - y0);
              rect.setAttributeNS(null, "fill", this._makeShadingPattern(args));
              if (this.current.fillAlpha < 1) {
                rect.setAttributeNS(null, "fill-opacity", this.current.fillAlpha);
              }
              this._ensureTransformGroup().append(rect);
            }
            _makeColorN_Pattern(args) {
              if (args[0] === "TilingPattern") {
                return this._makeTilingPattern(args);
              }
              return this._makeShadingPattern(args);
            }
            _makeTilingPattern(args) {
              const color = args[1];
              const operatorList = args[2];
              const matrix = args[3] || _util.IDENTITY_MATRIX;
              const [x0, y0, x1, y1] = args[4];
              const xstep = args[5];
              const ystep = args[6];
              const paintType = args[7];
              const tilingId = "shading".concat(shadingCount++);
              const [tx0, ty0, tx1, ty1] = _util.Util.normalizeRect([..._util.Util.applyTransform([x0, y0], matrix), ..._util.Util.applyTransform([x1, y1], matrix)]);
              const [xscale, yscale] = _util.Util.singularValueDecompose2dScale(matrix);
              const txstep = xstep * xscale;
              const tystep = ystep * yscale;
              const tiling = this.svgFactory.createElement("svg:pattern");
              tiling.setAttributeNS(null, "id", tilingId);
              tiling.setAttributeNS(null, "patternUnits", "userSpaceOnUse");
              tiling.setAttributeNS(null, "width", txstep);
              tiling.setAttributeNS(null, "height", tystep);
              tiling.setAttributeNS(null, "x", "".concat(tx0));
              tiling.setAttributeNS(null, "y", "".concat(ty0));
              const svg = this.svg;
              const transformMatrix = this.transformMatrix;
              const fillColor = this.current.fillColor;
              const strokeColor = this.current.strokeColor;
              const bbox = this.svgFactory.create(tx1 - tx0, ty1 - ty0);
              this.svg = bbox;
              this.transformMatrix = matrix;
              if (paintType === 2) {
                const cssColor = _util.Util.makeHexColor(...color);
                this.current.fillColor = cssColor;
                this.current.strokeColor = cssColor;
              }
              this.executeOpTree(this.convertOpList(operatorList));
              this.svg = svg;
              this.transformMatrix = transformMatrix;
              this.current.fillColor = fillColor;
              this.current.strokeColor = strokeColor;
              tiling.append(bbox.childNodes[0]);
              this.defs.append(tiling);
              return "url(#".concat(tilingId, ")");
            }
            _makeShadingPattern(args) {
              if (typeof args === "string") {
                args = this.objs.get(args);
              }
              switch (args[0]) {
                case "RadialAxial":
                  const shadingId = "shading".concat(shadingCount++);
                  const colorStops = args[3];
                  let gradient;
                  switch (args[1]) {
                    case "axial":
                      const point0 = args[4];
                      const point1 = args[5];
                      gradient = this.svgFactory.createElement("svg:linearGradient");
                      gradient.setAttributeNS(null, "id", shadingId);
                      gradient.setAttributeNS(null, "gradientUnits", "userSpaceOnUse");
                      gradient.setAttributeNS(null, "x1", point0[0]);
                      gradient.setAttributeNS(null, "y1", point0[1]);
                      gradient.setAttributeNS(null, "x2", point1[0]);
                      gradient.setAttributeNS(null, "y2", point1[1]);
                      break;
                    case "radial":
                      const focalPoint = args[4];
                      const circlePoint = args[5];
                      const focalRadius = args[6];
                      const circleRadius = args[7];
                      gradient = this.svgFactory.createElement("svg:radialGradient");
                      gradient.setAttributeNS(null, "id", shadingId);
                      gradient.setAttributeNS(null, "gradientUnits", "userSpaceOnUse");
                      gradient.setAttributeNS(null, "cx", circlePoint[0]);
                      gradient.setAttributeNS(null, "cy", circlePoint[1]);
                      gradient.setAttributeNS(null, "r", circleRadius);
                      gradient.setAttributeNS(null, "fx", focalPoint[0]);
                      gradient.setAttributeNS(null, "fy", focalPoint[1]);
                      gradient.setAttributeNS(null, "fr", focalRadius);
                      break;
                    default:
                      throw new Error("Unknown RadialAxial type: ".concat(args[1]));
                  }
                  for (const colorStop of colorStops) {
                    const stop = this.svgFactory.createElement("svg:stop");
                    stop.setAttributeNS(null, "offset", colorStop[0]);
                    stop.setAttributeNS(null, "stop-color", colorStop[1]);
                    gradient.append(stop);
                  }
                  this.defs.append(gradient);
                  return "url(#".concat(shadingId, ")");
                case "Mesh":
                  (0, _util.warn)("Unimplemented pattern Mesh");
                  return null;
                case "Dummy":
                  return "hotpink";
                default:
                  throw new Error("Unknown IR type: ".concat(args[0]));
              }
            }
            setDash(dashArray, dashPhase) {
              this.current.dashArray = dashArray;
              this.current.dashPhase = dashPhase;
            }
            constructPath(ops, args) {
              const current = this.current;
              let x = current.x,
                y = current.y;
              let d = [];
              let j = 0;
              for (const op of ops) {
                switch (op | 0) {
                  case _util.OPS.rectangle:
                    x = args[j++];
                    y = args[j++];
                    const width = args[j++];
                    const height = args[j++];
                    const xw = x + width;
                    const yh = y + height;
                    d.push("M", pf(x), pf(y), "L", pf(xw), pf(y), "L", pf(xw), pf(yh), "L", pf(x), pf(yh), "Z");
                    break;
                  case _util.OPS.moveTo:
                    x = args[j++];
                    y = args[j++];
                    d.push("M", pf(x), pf(y));
                    break;
                  case _util.OPS.lineTo:
                    x = args[j++];
                    y = args[j++];
                    d.push("L", pf(x), pf(y));
                    break;
                  case _util.OPS.curveTo:
                    x = args[j + 4];
                    y = args[j + 5];
                    d.push("C", pf(args[j]), pf(args[j + 1]), pf(args[j + 2]), pf(args[j + 3]), pf(x), pf(y));
                    j += 6;
                    break;
                  case _util.OPS.curveTo2:
                    d.push("C", pf(x), pf(y), pf(args[j]), pf(args[j + 1]), pf(args[j + 2]), pf(args[j + 3]));
                    x = args[j + 2];
                    y = args[j + 3];
                    j += 4;
                    break;
                  case _util.OPS.curveTo3:
                    x = args[j + 2];
                    y = args[j + 3];
                    d.push("C", pf(args[j]), pf(args[j + 1]), pf(x), pf(y), pf(x), pf(y));
                    j += 4;
                    break;
                  case _util.OPS.closePath:
                    d.push("Z");
                    break;
                }
              }
              d = d.join(" ");
              if (current.path && ops.length > 0 && ops[0] !== _util.OPS.rectangle && ops[0] !== _util.OPS.moveTo) {
                d = current.path.getAttributeNS(null, "d") + d;
              } else {
                current.path = this.svgFactory.createElement("svg:path");
                this._ensureTransformGroup().append(current.path);
              }
              current.path.setAttributeNS(null, "d", d);
              current.path.setAttributeNS(null, "fill", "none");
              current.element = current.path;
              current.setCurrentPoint(x, y);
            }
            endPath() {
              const current = this.current;
              current.path = null;
              if (!this.pendingClip) {
                return;
              }
              if (!current.element) {
                this.pendingClip = null;
                return;
              }
              const clipId = "clippath".concat(clipCount++);
              const clipPath = this.svgFactory.createElement("svg:clipPath");
              clipPath.setAttributeNS(null, "id", clipId);
              clipPath.setAttributeNS(null, "transform", pm(this.transformMatrix));
              const clipElement = current.element.cloneNode(true);
              if (this.pendingClip === "evenodd") {
                clipElement.setAttributeNS(null, "clip-rule", "evenodd");
              } else {
                clipElement.setAttributeNS(null, "clip-rule", "nonzero");
              }
              this.pendingClip = null;
              clipPath.append(clipElement);
              this.defs.append(clipPath);
              if (current.activeClipUrl) {
                current.clipGroup = null;
                for (const prev of this.extraStack) {
                  prev.clipGroup = null;
                }
                clipPath.setAttributeNS(null, "clip-path", current.activeClipUrl);
              }
              current.activeClipUrl = "url(#".concat(clipId, ")");
              this.tgrp = null;
            }
            clip(type) {
              this.pendingClip = type;
            }
            closePath() {
              const current = this.current;
              if (current.path) {
                const d = "".concat(current.path.getAttributeNS(null, "d"), "Z");
                current.path.setAttributeNS(null, "d", d);
              }
            }
            setLeading(leading) {
              this.current.leading = -leading;
            }
            setTextRise(textRise) {
              this.current.textRise = textRise;
            }
            setTextRenderingMode(textRenderingMode) {
              this.current.textRenderingMode = textRenderingMode;
            }
            setHScale(scale) {
              this.current.textHScale = scale / 100;
            }
            setRenderingIntent(intent) {}
            setFlatness(flatness) {}
            setGState(states) {
              for (const [key, value] of states) {
                switch (key) {
                  case "LW":
                    this.setLineWidth(value);
                    break;
                  case "LC":
                    this.setLineCap(value);
                    break;
                  case "LJ":
                    this.setLineJoin(value);
                    break;
                  case "ML":
                    this.setMiterLimit(value);
                    break;
                  case "D":
                    this.setDash(value[0], value[1]);
                    break;
                  case "RI":
                    this.setRenderingIntent(value);
                    break;
                  case "FL":
                    this.setFlatness(value);
                    break;
                  case "Font":
                    this.setFont(value);
                    break;
                  case "CA":
                    this.setStrokeAlpha(value);
                    break;
                  case "ca":
                    this.setFillAlpha(value);
                    break;
                  default:
                    (0, _util.warn)("Unimplemented graphic state operator ".concat(key));
                    break;
                }
              }
            }
            fill() {
              const current = this.current;
              if (current.element) {
                current.element.setAttributeNS(null, "fill", current.fillColor);
                current.element.setAttributeNS(null, "fill-opacity", current.fillAlpha);
                this.endPath();
              }
            }
            stroke() {
              const current = this.current;
              if (current.element) {
                this._setStrokeAttributes(current.element);
                current.element.setAttributeNS(null, "fill", "none");
                this.endPath();
              }
            }
            _setStrokeAttributes(element) {
              let lineWidthScale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
              const current = this.current;
              let dashArray = current.dashArray;
              if (lineWidthScale !== 1 && dashArray.length > 0) {
                dashArray = dashArray.map(function (value) {
                  return lineWidthScale * value;
                });
              }
              element.setAttributeNS(null, "stroke", current.strokeColor);
              element.setAttributeNS(null, "stroke-opacity", current.strokeAlpha);
              element.setAttributeNS(null, "stroke-miterlimit", pf(current.miterLimit));
              element.setAttributeNS(null, "stroke-linecap", current.lineCap);
              element.setAttributeNS(null, "stroke-linejoin", current.lineJoin);
              element.setAttributeNS(null, "stroke-width", pf(lineWidthScale * current.lineWidth) + "px");
              element.setAttributeNS(null, "stroke-dasharray", dashArray.map(pf).join(" "));
              element.setAttributeNS(null, "stroke-dashoffset", pf(lineWidthScale * current.dashPhase) + "px");
            }
            eoFill() {
              var _this$current$element;
              (_this$current$element = this.current.element) === null || _this$current$element === void 0 || _this$current$element.setAttributeNS(null, "fill-rule", "evenodd");
              this.fill();
            }
            fillStroke() {
              this.stroke();
              this.fill();
            }
            eoFillStroke() {
              var _this$current$element2;
              (_this$current$element2 = this.current.element) === null || _this$current$element2 === void 0 || _this$current$element2.setAttributeNS(null, "fill-rule", "evenodd");
              this.fillStroke();
            }
            closeStroke() {
              this.closePath();
              this.stroke();
            }
            closeFillStroke() {
              this.closePath();
              this.fillStroke();
            }
            closeEOFillStroke() {
              this.closePath();
              this.eoFillStroke();
            }
            paintSolidColorImageMask() {
              const rect = this.svgFactory.createElement("svg:rect");
              rect.setAttributeNS(null, "x", "0");
              rect.setAttributeNS(null, "y", "0");
              rect.setAttributeNS(null, "width", "1px");
              rect.setAttributeNS(null, "height", "1px");
              rect.setAttributeNS(null, "fill", this.current.fillColor);
              this._ensureTransformGroup().append(rect);
            }
            paintImageXObject(objId) {
              const imgData = this.getObject(objId);
              if (!imgData) {
                (0, _util.warn)("Dependent image with object ID ".concat(objId, " is not ready yet"));
                return;
              }
              this.paintInlineImageXObject(imgData);
            }
            paintInlineImageXObject(imgData, mask) {
              const width = imgData.width;
              const height = imgData.height;
              const imgSrc = convertImgDataToPng(imgData, this.forceDataSchema, !!mask);
              const cliprect = this.svgFactory.createElement("svg:rect");
              cliprect.setAttributeNS(null, "x", "0");
              cliprect.setAttributeNS(null, "y", "0");
              cliprect.setAttributeNS(null, "width", pf(width));
              cliprect.setAttributeNS(null, "height", pf(height));
              this.current.element = cliprect;
              this.clip("nonzero");
              const imgEl = this.svgFactory.createElement("svg:image");
              imgEl.setAttributeNS(XLINK_NS, "xlink:href", imgSrc);
              imgEl.setAttributeNS(null, "x", "0");
              imgEl.setAttributeNS(null, "y", pf(-height));
              imgEl.setAttributeNS(null, "width", pf(width) + "px");
              imgEl.setAttributeNS(null, "height", pf(height) + "px");
              imgEl.setAttributeNS(null, "transform", "scale(".concat(pf(1 / width), " ").concat(pf(-1 / height), ")"));
              if (mask) {
                mask.append(imgEl);
              } else {
                this._ensureTransformGroup().append(imgEl);
              }
            }
            paintImageMaskXObject(img) {
              const imgData = this.getObject(img.data, img);
              if (imgData.bitmap) {
                (0, _util.warn)("paintImageMaskXObject: ImageBitmap support is not implemented, " + "ensure that the `isOffscreenCanvasSupported` API parameter is disabled.");
                return;
              }
              const current = this.current;
              const width = imgData.width;
              const height = imgData.height;
              const fillColor = current.fillColor;
              current.maskId = "mask".concat(maskCount++);
              const mask = this.svgFactory.createElement("svg:mask");
              mask.setAttributeNS(null, "id", current.maskId);
              const rect = this.svgFactory.createElement("svg:rect");
              rect.setAttributeNS(null, "x", "0");
              rect.setAttributeNS(null, "y", "0");
              rect.setAttributeNS(null, "width", pf(width));
              rect.setAttributeNS(null, "height", pf(height));
              rect.setAttributeNS(null, "fill", fillColor);
              rect.setAttributeNS(null, "mask", "url(#".concat(current.maskId, ")"));
              this.defs.append(mask);
              this._ensureTransformGroup().append(rect);
              this.paintInlineImageXObject(imgData, mask);
            }
            paintFormXObjectBegin(matrix, bbox) {
              if (Array.isArray(matrix) && matrix.length === 6) {
                this.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
              }
              if (bbox) {
                const width = bbox[2] - bbox[0];
                const height = bbox[3] - bbox[1];
                const cliprect = this.svgFactory.createElement("svg:rect");
                cliprect.setAttributeNS(null, "x", bbox[0]);
                cliprect.setAttributeNS(null, "y", bbox[1]);
                cliprect.setAttributeNS(null, "width", pf(width));
                cliprect.setAttributeNS(null, "height", pf(height));
                this.current.element = cliprect;
                this.clip("nonzero");
                this.endPath();
              }
            }
            paintFormXObjectEnd() {}
            _initialize(viewport) {
              const svg = this.svgFactory.create(viewport.width, viewport.height);
              const definitions = this.svgFactory.createElement("svg:defs");
              svg.append(definitions);
              this.defs = definitions;
              const rootGroup = this.svgFactory.createElement("svg:g");
              rootGroup.setAttributeNS(null, "transform", pm(viewport.transform));
              svg.append(rootGroup);
              this.svg = rootGroup;
              return svg;
            }
            _ensureClipGroup() {
              if (!this.current.clipGroup) {
                const clipGroup = this.svgFactory.createElement("svg:g");
                clipGroup.setAttributeNS(null, "clip-path", this.current.activeClipUrl);
                this.svg.append(clipGroup);
                this.current.clipGroup = clipGroup;
              }
              return this.current.clipGroup;
            }
            _ensureTransformGroup() {
              if (!this.tgrp) {
                this.tgrp = this.svgFactory.createElement("svg:g");
                this.tgrp.setAttributeNS(null, "transform", pm(this.transformMatrix));
                if (this.current.activeClipUrl) {
                  this._ensureClipGroup().append(this.tgrp);
                } else {
                  this.svg.append(this.tgrp);
                }
              }
              return this.tgrp;
            }
          };
        }

        /***/
      }
      /******/];
      /************************************************************************/
      /******/ // The module cache
      /******/
      var __webpack_module_cache__ = {};
      /******/
      /******/ // The require function
      /******/
      function __w_pdfjs_require__(moduleId) {
        /******/ // Check if module is in cache
        /******/var cachedModule = __webpack_module_cache__[moduleId];
        /******/
        if (cachedModule !== undefined) {
          /******/return cachedModule.exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = __webpack_module_cache__[moduleId] = {
          /******/ // no module.id needed
          /******/ // no module.loaded needed
          /******/exports: {}
          /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        __webpack_modules__[moduleId](module, module.exports, __w_pdfjs_require__);
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
      }
      /******/
      /************************************************************************/
      var __nested_webpack_exports__ = {};
      // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
      (() => {
        var exports = __nested_webpack_exports__;
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        Object.defineProperty(exports, "AbortException", {
          enumerable: true,
          get: function () {
            return _util.AbortException;
          }
        });
        Object.defineProperty(exports, "AnnotationEditorLayer", {
          enumerable: true,
          get: function () {
            return _annotation_editor_layer.AnnotationEditorLayer;
          }
        });
        Object.defineProperty(exports, "AnnotationEditorParamsType", {
          enumerable: true,
          get: function () {
            return _util.AnnotationEditorParamsType;
          }
        });
        Object.defineProperty(exports, "AnnotationEditorType", {
          enumerable: true,
          get: function () {
            return _util.AnnotationEditorType;
          }
        });
        Object.defineProperty(exports, "AnnotationEditorUIManager", {
          enumerable: true,
          get: function () {
            return _tools.AnnotationEditorUIManager;
          }
        });
        Object.defineProperty(exports, "AnnotationLayer", {
          enumerable: true,
          get: function () {
            return _annotation_layer.AnnotationLayer;
          }
        });
        Object.defineProperty(exports, "AnnotationMode", {
          enumerable: true,
          get: function () {
            return _util.AnnotationMode;
          }
        });
        Object.defineProperty(exports, "CMapCompressionType", {
          enumerable: true,
          get: function () {
            return _util.CMapCompressionType;
          }
        });
        Object.defineProperty(exports, "FeatureTest", {
          enumerable: true,
          get: function () {
            return _util.FeatureTest;
          }
        });
        Object.defineProperty(exports, "GlobalWorkerOptions", {
          enumerable: true,
          get: function () {
            return _worker_options.GlobalWorkerOptions;
          }
        });
        Object.defineProperty(exports, "InvalidPDFException", {
          enumerable: true,
          get: function () {
            return _util.InvalidPDFException;
          }
        });
        Object.defineProperty(exports, "MissingPDFException", {
          enumerable: true,
          get: function () {
            return _util.MissingPDFException;
          }
        });
        Object.defineProperty(exports, "OPS", {
          enumerable: true,
          get: function () {
            return _util.OPS;
          }
        });
        Object.defineProperty(exports, "PDFDataRangeTransport", {
          enumerable: true,
          get: function () {
            return _api.PDFDataRangeTransport;
          }
        });
        Object.defineProperty(exports, "PDFDateString", {
          enumerable: true,
          get: function () {
            return _display_utils.PDFDateString;
          }
        });
        Object.defineProperty(exports, "PDFWorker", {
          enumerable: true,
          get: function () {
            return _api.PDFWorker;
          }
        });
        Object.defineProperty(exports, "PasswordResponses", {
          enumerable: true,
          get: function () {
            return _util.PasswordResponses;
          }
        });
        Object.defineProperty(exports, "PermissionFlag", {
          enumerable: true,
          get: function () {
            return _util.PermissionFlag;
          }
        });
        Object.defineProperty(exports, "PixelsPerInch", {
          enumerable: true,
          get: function () {
            return _display_utils.PixelsPerInch;
          }
        });
        Object.defineProperty(exports, "PromiseCapability", {
          enumerable: true,
          get: function () {
            return _util.PromiseCapability;
          }
        });
        Object.defineProperty(exports, "RenderingCancelledException", {
          enumerable: true,
          get: function () {
            return _display_utils.RenderingCancelledException;
          }
        });
        Object.defineProperty(exports, "SVGGraphics", {
          enumerable: true,
          get: function () {
            return _svg.SVGGraphics;
          }
        });
        Object.defineProperty(exports, "UnexpectedResponseException", {
          enumerable: true,
          get: function () {
            return _util.UnexpectedResponseException;
          }
        });
        Object.defineProperty(exports, "Util", {
          enumerable: true,
          get: function () {
            return _util.Util;
          }
        });
        Object.defineProperty(exports, "VerbosityLevel", {
          enumerable: true,
          get: function () {
            return _util.VerbosityLevel;
          }
        });
        Object.defineProperty(exports, "XfaLayer", {
          enumerable: true,
          get: function () {
            return _xfa_layer.XfaLayer;
          }
        });
        Object.defineProperty(exports, "build", {
          enumerable: true,
          get: function () {
            return _api.build;
          }
        });
        Object.defineProperty(exports, "createValidAbsoluteUrl", {
          enumerable: true,
          get: function () {
            return _util.createValidAbsoluteUrl;
          }
        });
        Object.defineProperty(exports, "getDocument", {
          enumerable: true,
          get: function () {
            return _api.getDocument;
          }
        });
        Object.defineProperty(exports, "getFilenameFromUrl", {
          enumerable: true,
          get: function () {
            return _display_utils.getFilenameFromUrl;
          }
        });
        Object.defineProperty(exports, "getPdfFilenameFromUrl", {
          enumerable: true,
          get: function () {
            return _display_utils.getPdfFilenameFromUrl;
          }
        });
        Object.defineProperty(exports, "getXfaPageViewport", {
          enumerable: true,
          get: function () {
            return _display_utils.getXfaPageViewport;
          }
        });
        Object.defineProperty(exports, "isDataScheme", {
          enumerable: true,
          get: function () {
            return _display_utils.isDataScheme;
          }
        });
        Object.defineProperty(exports, "isPdfFile", {
          enumerable: true,
          get: function () {
            return _display_utils.isPdfFile;
          }
        });
        Object.defineProperty(exports, "loadScript", {
          enumerable: true,
          get: function () {
            return _display_utils.loadScript;
          }
        });
        Object.defineProperty(exports, "normalizeUnicode", {
          enumerable: true,
          get: function () {
            return _util.normalizeUnicode;
          }
        });
        Object.defineProperty(exports, "renderTextLayer", {
          enumerable: true,
          get: function () {
            return _text_layer.renderTextLayer;
          }
        });
        Object.defineProperty(exports, "setLayerDimensions", {
          enumerable: true,
          get: function () {
            return _display_utils.setLayerDimensions;
          }
        });
        Object.defineProperty(exports, "shadow", {
          enumerable: true,
          get: function () {
            return _util.shadow;
          }
        });
        Object.defineProperty(exports, "updateTextLayer", {
          enumerable: true,
          get: function () {
            return _text_layer.updateTextLayer;
          }
        });
        Object.defineProperty(exports, "version", {
          enumerable: true,
          get: function () {
            return _api.version;
          }
        });
        var _util = __w_pdfjs_require__(1);
        var _api = __w_pdfjs_require__(2);
        var _display_utils = __w_pdfjs_require__(6);
        var _text_layer = __w_pdfjs_require__(26);
        var _annotation_editor_layer = __w_pdfjs_require__(27);
        var _tools = __w_pdfjs_require__(5);
        var _annotation_layer = __w_pdfjs_require__(32);
        var _worker_options = __w_pdfjs_require__(14);
        var _svg = __w_pdfjs_require__(35);
        var _xfa_layer = __w_pdfjs_require__(34);
        const pdfjsVersion = '3.6.172';
        const pdfjsBuild = '4d3dfe254';
      })();

      /******/
      return __nested_webpack_exports__;
      /******/
    })()
  );
});
//# sourceMappingURL=pdf.js.map

/***/ }),

/***/ 39087:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ esm_Document)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(11942);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/make-event-props/dist/esm/index.js
var esm = __webpack_require__(14673);
// EXTERNAL MODULE: ./node_modules/make-cancellable-promise/dist/esm/index.js
var dist_esm = __webpack_require__(58238);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(72004);
// EXTERNAL MODULE: ./node_modules/tiny-invariant/dist/esm/tiny-invariant.js
var tiny_invariant = __webpack_require__(67033);
// EXTERNAL MODULE: ./node_modules/tiny-warning/dist/tiny-warning.esm.js
var tiny_warning_esm = __webpack_require__(14783);
// EXTERNAL MODULE: ./node_modules/pdfjs-dist/build/pdf.js
var build_pdf = __webpack_require__(73114);
// EXTERNAL MODULE: ./node_modules/react-pdf/dist/esm/DocumentContext.js
var DocumentContext = __webpack_require__(58946);
// EXTERNAL MODULE: ./node_modules/react-pdf/dist/esm/Message.js
var Message = __webpack_require__(56181);
// EXTERNAL MODULE: ./node_modules/react-pdf/dist/esm/LinkService.js
var LinkService = __webpack_require__(79117);
;// ./node_modules/react-pdf/dist/esm/PasswordResponses.js
// As defined in https://github.com/mozilla/pdf.js/blob/d9fac3459609a807be6506fb3441b5da4b154d14/src/shared/util.js#L371-L374
const PasswordResponses = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
/* harmony default export */ const esm_PasswordResponses = (PasswordResponses);
// EXTERNAL MODULE: ./node_modules/react-pdf/dist/esm/shared/utils.js
var utils = __webpack_require__(92983);
// EXTERNAL MODULE: ./node_modules/react-pdf/dist/esm/shared/hooks/useResolver.js
var useResolver = __webpack_require__(21912);
// EXTERNAL MODULE: ./node_modules/react-pdf/dist/esm/shared/propTypes.js
var propTypes = __webpack_require__(4664);
;// ./node_modules/react-pdf/dist/esm/Document.js
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/**
 * Loads a PDF document. Passes it to all children.
 */















const {
  PDFDataRangeTransport
} = build_pdf;
const defaultOnPassword = (callback, reason) => {
  switch (reason) {
    case esm_PasswordResponses.NEED_PASSWORD:
      {
        // eslint-disable-next-line no-alert
        const password = prompt('Enter the password to open this PDF file.');
        callback(password);
        break;
      }
    case esm_PasswordResponses.INCORRECT_PASSWORD:
      {
        // eslint-disable-next-line no-alert
        const password = prompt('Invalid password. Please try again.');
        callback(password);
        break;
      }
    default:
  }
};
const Document = (0,react.forwardRef)(function Document(_a, ref) {
  var {
      children,
      className,
      error = 'Failed to load PDF file.',
      externalLinkRel,
      externalLinkTarget,
      file,
      inputRef,
      imageResourcesPath,
      loading = 'Loading PDF…',
      noData = 'No PDF file specified.',
      onItemClick,
      onLoadError: onLoadErrorProps,
      onLoadProgress,
      onLoadSuccess: onLoadSuccessProps,
      onPassword = defaultOnPassword,
      onSourceError: onSourceErrorProps,
      onSourceSuccess: onSourceSuccessProps,
      options,
      renderMode,
      rotate
    } = _a,
    otherProps = __rest(_a, ["children", "className", "error", "externalLinkRel", "externalLinkTarget", "file", "inputRef", "imageResourcesPath", "loading", "noData", "onItemClick", "onLoadError", "onLoadProgress", "onLoadSuccess", "onPassword", "onSourceError", "onSourceSuccess", "options", "renderMode", "rotate"]);
  const [sourceState, sourceDispatch] = (0,useResolver/* default */.A)();
  const {
    value: source,
    error: sourceError
  } = sourceState;
  const [pdfState, pdfDispatch] = (0,useResolver/* default */.A)();
  const {
    value: pdf,
    error: pdfError
  } = pdfState;
  const linkService = (0,react.useRef)(new LinkService/* default */.A());
  const pages = (0,react.useRef)([]);
  const viewer = (0,react.useRef)({
    // Handling jumping to internal links target
    scrollPageIntoView: args => {
      const {
        dest,
        pageNumber,
        pageIndex = pageNumber - 1
      } = args;
      // First, check if custom handling of onItemClick was provided
      if (onItemClick) {
        onItemClick({
          dest,
          pageIndex,
          pageNumber
        });
        return;
      }
      // If not, try to look for target page within the <Document>.
      const page = pages.current[pageIndex];
      if (page) {
        // Scroll to the page automatically
        page.scrollIntoView();
        return;
      }
      (0,tiny_warning_esm/* default */.A)(false, "An internal link leading to page ".concat(pageNumber, " was clicked, but neither <Document> was provided with onItemClick nor it was able to find the page within itself. Either provide onItemClick to <Document> and handle navigating by yourself or ensure that all pages are rendered within <Document>."));
    }
  });
  (0,react.useImperativeHandle)(ref, () => ({
    linkService,
    pages,
    viewer
  }), []);
  /**
   * Called when a document source is resolved correctly
   */
  function onSourceSuccess() {
    if (onSourceSuccessProps) {
      onSourceSuccessProps();
    }
  }
  /**
   * Called when a document source failed to be resolved correctly
   */
  function onSourceError() {
    if (!sourceError) {
      // Impossible, but TypeScript doesn't know that
      return;
    }
    (0,tiny_warning_esm/* default */.A)(false, sourceError.toString());
    if (onSourceErrorProps) {
      onSourceErrorProps(sourceError);
    }
  }
  function resetSource() {
    sourceDispatch({
      type: 'RESET'
    });
  }
  (0,react.useEffect)(resetSource, [file, sourceDispatch]);
  const findDocumentSource = (0,react.useCallback)(() => __awaiter(this, void 0, void 0, function* () {
    if (!file) {
      return null;
    }
    // File is a string
    if (typeof file === 'string') {
      if ((0,utils/* isDataURI */.zL)(file)) {
        const fileByteString = (0,utils/* dataURItoByteString */.jA)(file);
        return {
          data: fileByteString
        };
      }
      (0,utils/* displayCORSWarning */.qC)();
      return {
        url: file
      };
    }
    // File is PDFDataRangeTransport
    if (file instanceof PDFDataRangeTransport) {
      return {
        range: file
      };
    }
    // File is an ArrayBuffer
    if ((0,utils/* isArrayBuffer */.mw)(file)) {
      return {
        data: file
      };
    }
    /**
     * The cases below are browser-only.
     * If you're running on a non-browser environment, these cases will be of no use.
     */
    if (utils/* isBrowser */.Bd) {
      // File is a Blob
      if ((0,utils/* isBlob */.qf)(file)) {
        const data = yield (0,utils/* loadFromFile */.h1)(file);
        return {
          data
        };
      }
    }
    // At this point, file must be an object
    (0,tiny_invariant/* default */.A)(typeof file === 'object', 'Invalid parameter in file, need either Uint8Array, string or a parameter object');
    (0,tiny_invariant/* default */.A)('data' in file || 'range' in file || 'url' in file, 'Invalid parameter object: need either .data, .range or .url');
    // File .url is a string
    if ('url' in file && typeof file.url === 'string') {
      if ((0,utils/* isDataURI */.zL)(file.url)) {
        const {
            url
          } = file,
          otherParams = __rest(file, ["url"]);
        const fileByteString = (0,utils/* dataURItoByteString */.jA)(url);
        return Object.assign({
          data: fileByteString
        }, otherParams);
      }
      (0,utils/* displayCORSWarning */.qC)();
    }
    return file;
  }), [file]);
  (0,react.useEffect)(() => {
    const cancellable = (0,dist_esm/* default */.A)(findDocumentSource());
    cancellable.promise.then(nextSource => {
      sourceDispatch({
        type: 'RESOLVE',
        value: nextSource
      });
    }).catch(error => {
      sourceDispatch({
        type: 'REJECT',
        error
      });
    });
    return () => {
      (0,utils/* cancelRunningTask */.xL)(cancellable);
    };
  }, [findDocumentSource, sourceDispatch]);
  (0,react.useEffect)(() => {
    if (typeof source === 'undefined') {
      return;
    }
    if (source === false) {
      onSourceError();
      return;
    }
    onSourceSuccess();
  },
  // Ommitted callbacks so they are not called every time they change
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [source]);
  /**
   * Called when a document is read successfully
   */
  function onLoadSuccess() {
    if (!pdf) {
      // Impossible, but TypeScript doesn't know that
      return;
    }
    if (onLoadSuccessProps) {
      onLoadSuccessProps(pdf);
    }
    pages.current = new Array(pdf.numPages);
    linkService.current.setDocument(pdf);
  }
  /**
   * Called when a document failed to read successfully
   */
  function onLoadError() {
    if (!pdfError) {
      // Impossible, but TypeScript doesn't know that
      return;
    }
    (0,tiny_warning_esm/* default */.A)(false, pdfError.toString());
    if (onLoadErrorProps) {
      onLoadErrorProps(pdfError);
    }
  }
  function resetDocument() {
    pdfDispatch({
      type: 'RESET'
    });
  }
  (0,react.useEffect)(resetDocument, [pdfDispatch, source]);
  function loadDocument() {
    if (!source) {
      return;
    }
    const documentInitParams = options ? Object.assign(Object.assign({}, source), options) : source;
    const destroyable = build_pdf.getDocument(documentInitParams);
    if (onLoadProgress) {
      destroyable.onProgress = onLoadProgress;
    }
    if (onPassword) {
      destroyable.onPassword = onPassword;
    }
    const loadingTask = destroyable;
    loadingTask.promise.then(nextPdf => {
      pdfDispatch({
        type: 'RESOLVE',
        value: nextPdf
      });
    }).catch(error => {
      if (loadingTask.destroyed) {
        return;
      }
      pdfDispatch({
        type: 'REJECT',
        error
      });
    });
    return () => {
      loadingTask.destroy();
    };
  }
  (0,react.useEffect)(loadDocument,
  // Ommitted callbacks so they are not called every time they change
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [options, pdfDispatch, source]);
  (0,react.useEffect)(() => {
    if (typeof pdf === 'undefined') {
      return;
    }
    if (pdf === false) {
      onLoadError();
      return;
    }
    onLoadSuccess();
  },
  // Ommitted callbacks so they are not called every time they change
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [pdf]);
  function setupLinkService() {
    linkService.current.setViewer(viewer.current);
    linkService.current.setExternalLinkRel(externalLinkRel);
    linkService.current.setExternalLinkTarget(externalLinkTarget);
  }
  (0,react.useEffect)(setupLinkService, [externalLinkRel, externalLinkTarget]);
  function registerPage(pageIndex, ref) {
    pages.current[pageIndex] = ref;
  }
  function unregisterPage(pageIndex) {
    delete pages.current[pageIndex];
  }
  const childContext = (0,react.useMemo)(() => ({
    imageResourcesPath,
    linkService: linkService.current,
    onItemClick,
    pdf,
    registerPage,
    renderMode,
    rotate,
    unregisterPage
  }), [imageResourcesPath, onItemClick, pdf, renderMode, rotate]);
  const eventProps = (0,react.useMemo)(() => (0,esm/* default */.Ay)(otherProps, () => pdf), [otherProps, pdf]);
  function renderChildren() {
    return react.createElement(DocumentContext/* default */.A.Provider, {
      value: childContext
    }, children);
  }
  function renderContent() {
    if (!file) {
      return react.createElement(Message/* default */.A, {
        type: "no-data"
      }, typeof noData === 'function' ? noData() : noData);
    }
    if (pdf === undefined || pdf === null) {
      return react.createElement(Message/* default */.A, {
        type: "loading"
      }, typeof loading === 'function' ? loading() : loading);
    }
    if (pdf === false) {
      return react.createElement(Message/* default */.A, {
        type: "error"
      }, typeof error === 'function' ? error() : error);
    }
    return renderChildren();
  }
  return react.createElement("div", Object.assign({
    className: (0,clsx/* default */.A)('react-pdf__Document', className),
    ref: inputRef,
    style: {
      ['--scale-factor']: '1'
    }
  }, eventProps), renderContent());
});
const isFunctionOrNode = prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).node]);
Document.propTypes = Object.assign(Object.assign({}, propTypes/* eventProps */.zq), {
  children: (prop_types_default()).node,
  className: propTypes/* isClassName */.uG,
  error: isFunctionOrNode,
  externalLinkRel: (prop_types_default()).string,
  externalLinkTarget: prop_types_default().oneOf(['_self', '_blank', '_parent', '_top']),
  file: propTypes/* isFile */.fo,
  imageResourcesPath: (prop_types_default()).string,
  inputRef: propTypes/* isRef */.i9,
  loading: isFunctionOrNode,
  noData: isFunctionOrNode,
  onItemClick: (prop_types_default()).func,
  onLoadError: (prop_types_default()).func,
  onLoadProgress: (prop_types_default()).func,
  onLoadSuccess: (prop_types_default()).func,
  onPassword: (prop_types_default()).func,
  onSourceError: (prop_types_default()).func,
  onSourceSuccess: (prop_types_default()).func,
  options: prop_types_default().shape({
    canvasFactory: (prop_types_default()).any,
    canvasMaxAreaInBytes: (prop_types_default()).number,
    cMapPacked: (prop_types_default()).bool,
    CMapReaderFactory: (prop_types_default()).any,
    cMapUrl: (prop_types_default()).string,
    disableAutoFetch: (prop_types_default()).bool,
    disableFontFace: (prop_types_default()).bool,
    disableRange: (prop_types_default()).bool,
    disableStream: (prop_types_default()).bool,
    docBaseUrl: (prop_types_default()).string,
    enableXfa: (prop_types_default()).bool,
    filterFactory: (prop_types_default()).any,
    fontExtraProperties: (prop_types_default()).bool,
    httpHeaders: (prop_types_default()).object,
    isEvalSupported: (prop_types_default()).bool,
    isOffscreenCanvasSupported: (prop_types_default()).bool,
    length: (prop_types_default()).number,
    maxImageSize: (prop_types_default()).number,
    ownerDocument: (prop_types_default()).any,
    password: (prop_types_default()).string,
    pdfBug: (prop_types_default()).bool,
    rangeChunkSize: (prop_types_default()).number,
    StandardFontDataFactory: (prop_types_default()).any,
    standardFontDataUrl: (prop_types_default()).string,
    stopAtErrors: (prop_types_default()).bool,
    useSystemFonts: (prop_types_default()).bool,
    useWorkerFetch: (prop_types_default()).bool,
    verbosity: (prop_types_default()).number,
    withCredentials: (prop_types_default()).bool,
    worker: (prop_types_default()).any
  }),
  rotate: (prop_types_default()).number
});
/* harmony default export */ const esm_Document = (Document);

/***/ }),

/***/ 58946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9950);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null));

/***/ }),

/***/ 79117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ LinkService)
/* harmony export */ });
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67033);
/* Copyright 2015 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const DEFAULT_LINK_REL = 'noopener noreferrer nofollow';
class LinkService {
  constructor() {
    this.externalLinkEnabled = true;
    this.externalLinkRel = undefined;
    this.externalLinkTarget = undefined;
    this.isInPresentationMode = false;
    this.pdfDocument = undefined;
    this.pdfViewer = undefined;
  }
  setDocument(pdfDocument) {
    this.pdfDocument = pdfDocument;
  }
  setViewer(pdfViewer) {
    this.pdfViewer = pdfViewer;
  }
  setExternalLinkRel(externalLinkRel) {
    this.externalLinkRel = externalLinkRel;
  }
  setExternalLinkTarget(externalLinkTarget) {
    this.externalLinkTarget = externalLinkTarget;
  }
  setHistory() {
    // Intentionally empty
  }
  get pagesCount() {
    return this.pdfDocument ? this.pdfDocument.numPages : 0;
  }
  get page() {
    (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this.pdfViewer, 'PDF viewer is not initialized.');
    return this.pdfViewer.currentPageNumber || 0;
  }
  set page(value) {
    (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this.pdfViewer, 'PDF viewer is not initialized.');
    this.pdfViewer.currentPageNumber = value;
  }
  // eslint-disable-next-line @typescript-eslint/class-literal-property-style
  get rotation() {
    return 0;
  }
  set rotation(value) {
    // Intentionally empty
  }
  goToDestination(dest) {
    return new Promise(resolve => {
      (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this.pdfDocument, 'PDF document not loaded.');
      (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(dest, 'Destination is not specified.');
      if (typeof dest === 'string') {
        this.pdfDocument.getDestination(dest).then(resolve);
      } else if (Array.isArray(dest)) {
        resolve(dest);
      } else {
        dest.then(resolve);
      }
    }).then(explicitDest => {
      (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(Array.isArray(explicitDest), "\"".concat(explicitDest, "\" is not a valid destination array."));
      const destRef = explicitDest[0];
      new Promise(resolve => {
        (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this.pdfDocument, 'PDF document not loaded.');
        if (destRef instanceof Object) {
          this.pdfDocument.getPageIndex(destRef).then(pageIndex => {
            resolve(pageIndex);
          }).catch(() => {
            (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(false, "\"".concat(destRef, "\" is not a valid page reference."));
          });
        } else if (typeof destRef === 'number') {
          resolve(destRef);
        } else {
          (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(false, "\"".concat(destRef, "\" is not a valid destination reference."));
        }
      }).then(pageIndex => {
        const pageNumber = pageIndex + 1;
        (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this.pdfViewer, 'PDF viewer is not initialized.');
        (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(pageNumber >= 1 && pageNumber <= this.pagesCount, "\"".concat(pageNumber, "\" is not a valid page number."));
        this.pdfViewer.scrollPageIntoView({
          dest: explicitDest,
          pageIndex,
          pageNumber
        });
      });
    });
  }
  navigateTo(dest) {
    this.goToDestination(dest);
  }
  goToPage(pageNumber) {
    const pageIndex = pageNumber - 1;
    (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this.pdfViewer, 'PDF viewer is not initialized.');
    (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(pageNumber >= 1 && pageNumber <= this.pagesCount, "\"".concat(pageNumber, "\" is not a valid page number."));
    this.pdfViewer.scrollPageIntoView({
      pageIndex,
      pageNumber
    });
  }
  addLinkAttributes(link, url, newWindow) {
    link.href = url;
    link.rel = this.externalLinkRel || DEFAULT_LINK_REL;
    link.target = newWindow ? '_blank' : this.externalLinkTarget || '';
  }
  getDestinationHash() {
    return '#';
  }
  getAnchorUrl() {
    return '#';
  }
  setHash() {
    // Intentionally empty
  }
  executeNamedAction() {
    // Intentionally empty
  }
  cachePageRef() {
    // Intentionally empty
  }
  isPageVisible() {
    return true;
  }
  isPageCached() {
    return true;
  }
  executeSetOCGState() {
    // Intentionally empty
  }
}

/***/ }),

/***/ 56181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Message)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9950);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11942);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


function Message(_ref) {
  let {
    children,
    type
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "react-pdf__message react-pdf__message--".concat(type)
  }, children);
}
Message.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(['error', 'loading', 'no-data']).isRequired
};

/***/ }),

/***/ 93852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Page)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(11942);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/make-cancellable-promise/dist/esm/index.js
var esm = __webpack_require__(58238);
// EXTERNAL MODULE: ./node_modules/make-event-props/dist/esm/index.js
var dist_esm = __webpack_require__(14673);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(72004);
;// ./node_modules/merge-refs/dist/esm/index.js
/**
 * A function that merges React refs into one.
 * Supports both functions and ref objects created using createRef() and useRef().
 *
 * Usage:
 * ```jsx
 * <div ref={mergeRefs(ref1, ref2, ref3)} />
 * ```
 *
 * @param {(React.Ref<T> | undefined)[]} inputRefs Array of refs
 * @returns {React.Ref<T> | React.RefCallback<T>} Merged refs
 */
function mergeRefs() {
  var inputRefs = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    inputRefs[_i] = arguments[_i];
  }
  var filteredInputRefs = inputRefs.filter(Boolean);
  if (filteredInputRefs.length <= 1) {
    var firstRef = filteredInputRefs[0];
    return firstRef || null;
  }
  return function mergedRefs(ref) {
    filteredInputRefs.forEach(function (inputRef) {
      if (typeof inputRef === 'function') {
        inputRef(ref);
      } else if (inputRef) {
        inputRef.current = ref;
      }
    });
  };
}
// EXTERNAL MODULE: ./node_modules/tiny-invariant/dist/esm/tiny-invariant.js
var tiny_invariant = __webpack_require__(67033);
// EXTERNAL MODULE: ./node_modules/tiny-warning/dist/tiny-warning.esm.js
var tiny_warning_esm = __webpack_require__(14783);
;// ./node_modules/react-pdf/dist/esm/PageContext.js

/* harmony default export */ const PageContext = ((0,react.createContext)(null));
// EXTERNAL MODULE: ./node_modules/react-pdf/dist/esm/Message.js
var Message = __webpack_require__(56181);
// EXTERNAL MODULE: ./node_modules/pdfjs-dist/build/pdf.js
var build_pdf = __webpack_require__(73114);
;// ./node_modules/react-pdf/dist/esm/shared/constants.js
// From pdfjs-dist/lib/web/struct_tree_layer_builder.js
const PDF_ROLE_TO_HTML_ROLE = {
  // Document level structure types
  Document: null,
  DocumentFragment: null,
  // Grouping level structure types
  Part: 'group',
  Sect: 'group',
  Div: 'group',
  Aside: 'note',
  NonStruct: 'none',
  // Block level structure types
  P: null,
  // H<n>,
  H: 'heading',
  Title: null,
  FENote: 'note',
  // Sub-block level structure type
  Sub: 'group',
  // General inline level structure types
  Lbl: null,
  Span: null,
  Em: null,
  Strong: null,
  Link: 'link',
  Annot: 'note',
  Form: 'form',
  // Ruby and Warichu structure types
  Ruby: null,
  RB: null,
  RT: null,
  RP: null,
  Warichu: null,
  WT: null,
  WP: null,
  // List standard structure types
  L: 'list',
  LI: 'listitem',
  LBody: null,
  // Table standard structure types
  Table: 'table',
  TR: 'row',
  TH: 'columnheader',
  TD: 'cell',
  THead: 'columnheader',
  TBody: null,
  TFoot: null,
  // Standard structure type Caption
  Caption: null,
  // Standard structure type Figure
  Figure: 'figure',
  // Standard structure type Formula
  Formula: null,
  // standard structure type Artifact
  Artifact: null
};
const HEADING_PATTERN = /^H(\d+)$/;
;// ./node_modules/react-pdf/dist/esm/shared/structTreeUtils.js

function isPdfRole(role) {
  return role in PDF_ROLE_TO_HTML_ROLE;
}
function isStructTreeNode(node) {
  return 'children' in node;
}
function isStructTreeNodeWithOnlyContentChild(node) {
  if (!isStructTreeNode(node)) {
    return false;
  }
  return node.children.length === 1 && 0 in node.children && 'id' in node.children[0];
}
function getRoleAttributes(node) {
  const attributes = {};
  if (isStructTreeNode(node)) {
    const {
      role
    } = node;
    const matches = role.match(HEADING_PATTERN);
    if (matches) {
      attributes.role = 'heading';
      attributes['aria-level'] = Number(matches[1]);
    } else if (isPdfRole(role)) {
      const htmlRole = PDF_ROLE_TO_HTML_ROLE[role];
      if (htmlRole) {
        attributes.role = htmlRole;
      }
    }
  }
  return attributes;
}
function getBaseAttributes(node) {
  const attributes = {};
  if (isStructTreeNode(node)) {
    if (node.alt !== undefined) {
      attributes['aria-label'] = node.alt;
    }
    if (node.lang !== undefined) {
      attributes.lang = node.lang;
    }
    if (isStructTreeNodeWithOnlyContentChild(node)) {
      const [child] = node.children;
      if (child) {
        const childAttributes = getBaseAttributes(child);
        return Object.assign(Object.assign({}, attributes), childAttributes);
      }
    }
  } else {
    if ('id' in node) {
      attributes['aria-owns'] = node.id;
    }
  }
  return attributes;
}
function getAttributes(node) {
  if (!node) {
    return null;
  }
  return Object.assign(Object.assign({}, getRoleAttributes(node)), getBaseAttributes(node));
}
;// ./node_modules/react-pdf/dist/esm/StructTreeItem.js



function StructTreeItem(_ref) {
  let {
    className,
    node
  } = _ref;
  const attributes = (0,react.useMemo)(() => getAttributes(node), [node]);
  const children = (0,react.useMemo)(() => {
    if (!isStructTreeNode(node)) {
      return null;
    }
    if (isStructTreeNodeWithOnlyContentChild(node)) {
      return null;
    }
    return node.children.map((child, index) => {
      return (
        // eslint-disable-next-line react/no-array-index-key
        react.createElement(StructTreeItem, {
          key: index,
          node: child
        })
      );
    });
  }, [node]);
  return react.createElement("span", Object.assign({
    className: className
  }, attributes), children);
}
StructTreeItem.propTypes = {
  node: prop_types_default().oneOfType([prop_types_default().shape({
    children: (prop_types_default()).object,
    role: (prop_types_default()).string
  }), prop_types_default().shape({
    id: (prop_types_default()).string,
    type: (prop_types_default()).string
  })]).isRequired
};
;// ./node_modules/react-pdf/dist/esm/shared/hooks/usePageContext.js


function usePageContext() {
  return (0,react.useContext)(PageContext);
}
// EXTERNAL MODULE: ./node_modules/react-pdf/dist/esm/shared/hooks/useResolver.js
var useResolver = __webpack_require__(21912);
// EXTERNAL MODULE: ./node_modules/react-pdf/dist/esm/shared/utils.js
var utils = __webpack_require__(92983);
;// ./node_modules/react-pdf/dist/esm/StructTree.js








function StructTree() {
  const pageContext = usePageContext();
  (0,tiny_invariant/* default */.A)(pageContext, 'Unable to find Page context.');
  const {
    onGetStructTreeError: onGetStructTreeErrorProps,
    onGetStructTreeSuccess: onGetStructTreeSuccessProps
  } = pageContext;
  const [structTreeState, structTreeDispatch] = (0,useResolver/* default */.A)();
  const {
    value: structTree,
    error: structTreeError
  } = structTreeState;
  const {
    customTextRenderer,
    page
  } = pageContext;
  function onLoadSuccess() {
    if (!structTree) {
      // Impossible, but TypeScript doesn't know that
      return;
    }
    if (onGetStructTreeSuccessProps) {
      onGetStructTreeSuccessProps(structTree);
    }
  }
  function onLoadError() {
    if (!structTreeError) {
      // Impossible, but TypeScript doesn't know that
      return;
    }
    (0,tiny_warning_esm/* default */.A)(false, structTreeError.toString());
    if (onGetStructTreeErrorProps) {
      onGetStructTreeErrorProps(structTreeError);
    }
  }
  function resetAnnotations() {
    structTreeDispatch({
      type: 'RESET'
    });
  }
  (0,react.useEffect)(resetAnnotations, [structTreeDispatch, page]);
  function loadStructTree() {
    if (customTextRenderer) {
      // TODO: Document why this is necessary
      return;
    }
    if (!page) {
      return;
    }
    const cancellable = (0,esm/* default */.A)(page.getStructTree());
    const runningTask = cancellable;
    cancellable.promise.then(nextStructTree => {
      structTreeDispatch({
        type: 'RESOLVE',
        value: nextStructTree
      });
    }).catch(error => {
      structTreeDispatch({
        type: 'REJECT',
        error
      });
    });
    return () => (0,utils/* cancelRunningTask */.xL)(runningTask);
  }
  (0,react.useEffect)(loadStructTree, [customTextRenderer, page, structTreeDispatch]);
  (0,react.useEffect)(() => {
    if (structTree === undefined) {
      return;
    }
    if (structTree === false) {
      onLoadError();
      return;
    }
    onLoadSuccess();
  },
  // Ommitted callbacks so they are not called every time they change
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [structTree]);
  if (!structTree) {
    return null;
  }
  return react.createElement(StructTreeItem, {
    className: "react-pdf__Page__structTree structTree",
    node: structTree
  });
}
// EXTERNAL MODULE: ./node_modules/react-pdf/dist/esm/shared/propTypes.js
var propTypes = __webpack_require__(4664);
;// ./node_modules/react-pdf/dist/esm/Page/PageCanvas.js









const ANNOTATION_MODE = build_pdf.AnnotationMode;
function PageCanvas(props) {
  const pageContext = usePageContext();
  (0,tiny_invariant/* default */.A)(pageContext, 'Unable to find Page context.');
  const mergedProps = Object.assign(Object.assign({}, pageContext), props);
  const {
    _className,
    canvasBackground,
    devicePixelRatio: devicePixelRatioProps,
    onRenderError: onRenderErrorProps,
    onRenderSuccess: onRenderSuccessProps,
    page,
    renderForms,
    renderTextLayer,
    rotate,
    scale
  } = mergedProps;
  const {
    canvasRef
  } = props;
  const canvasElement = (0,react.useRef)(null);
  (0,tiny_invariant/* default */.A)(page, 'Attempted to render page canvas, but no page was specified.');
  const devicePixelRatio = devicePixelRatioProps || (0,utils/* getDevicePixelRatio */.mZ)();
  /**
   * Called when a page is rendered successfully.
   */
  function onRenderSuccess() {
    if (!page) {
      // Impossible, but TypeScript doesn't know that
      return;
    }
    if (onRenderSuccessProps) {
      onRenderSuccessProps((0,utils/* makePageCallback */.vS)(page, scale));
    }
  }
  /**
   * Called when a page fails to render.
   */
  function onRenderError(error) {
    if ((0,utils/* isCancelException */.UT)(error)) {
      return;
    }
    (0,tiny_warning_esm/* default */.A)(false, error.toString());
    if (onRenderErrorProps) {
      onRenderErrorProps(error);
    }
  }
  const renderViewport = (0,react.useMemo)(() => page.getViewport({
    scale: scale * devicePixelRatio,
    rotation: rotate
  }), [devicePixelRatio, page, rotate, scale]);
  const viewport = (0,react.useMemo)(() => page.getViewport({
    scale,
    rotation: rotate
  }), [page, rotate, scale]);
  function drawPageOnCanvas() {
    if (!page) {
      return;
    }
    // Ensures the canvas will be re-rendered from scratch. Otherwise all form data will stay.
    page.cleanup();
    const {
      current: canvas
    } = canvasElement;
    if (!canvas) {
      return;
    }
    canvas.width = renderViewport.width;
    canvas.height = renderViewport.height;
    canvas.style.width = "".concat(Math.floor(viewport.width), "px");
    canvas.style.height = "".concat(Math.floor(viewport.height), "px");
    canvas.style.visibility = 'hidden';
    const renderContext = {
      annotationMode: renderForms ? ANNOTATION_MODE.ENABLE_FORMS : ANNOTATION_MODE.ENABLE,
      canvasContext: canvas.getContext('2d', {
        alpha: false
      }),
      viewport: renderViewport
    };
    if (canvasBackground) {
      renderContext.background = canvasBackground;
    }
    const cancellable = page.render(renderContext);
    const runningTask = cancellable;
    cancellable.promise.then(() => {
      canvas.style.visibility = '';
      onRenderSuccess();
    }).catch(onRenderError);
    return () => (0,utils/* cancelRunningTask */.xL)(runningTask);
  }
  (0,react.useEffect)(drawPageOnCanvas,
  // Ommitted callbacks so they are not called every time they change
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [canvasBackground, canvasElement, devicePixelRatio, page, renderForms, renderViewport, viewport]);
  const cleanup = (0,react.useCallback)(() => {
    const {
      current: canvas
    } = canvasElement;
    /**
     * Zeroing the width and height cause most browsers to release graphics
     * resources immediately, which can greatly reduce memory consumption.
     */
    if (canvas) {
      canvas.width = 0;
      canvas.height = 0;
    }
  }, [canvasElement]);
  (0,react.useEffect)(() => cleanup, [cleanup]);
  return react.createElement("canvas", {
    className: "".concat(_className, "__canvas"),
    dir: "ltr",
    ref: mergeRefs(canvasRef, canvasElement),
    style: {
      display: 'block',
      userSelect: 'none'
    }
  }, renderTextLayer ? react.createElement(StructTree, null) : null);
}
PageCanvas.propTypes = {
  canvasRef: propTypes/* isRef */.i9
};
;// ./node_modules/react-pdf/dist/esm/Page/PageSVG.js








function PageSVG() {
  const pageContext = usePageContext();
  (0,tiny_invariant/* default */.A)(pageContext, 'Unable to find Page context.');
  const {
    _className,
    onRenderSuccess: onRenderSuccessProps,
    onRenderError: onRenderErrorProps,
    page,
    rotate,
    scale
  } = pageContext;
  const [svgState, svgDispatch] = (0,useResolver/* default */.A)();
  const {
    value: svg,
    error: svgError
  } = svgState;
  (0,tiny_invariant/* default */.A)(page, 'Attempted to render page SVG, but no page was specified.');
  /**
   * Called when a page is rendered successfully
   */
  function onRenderSuccess() {
    if (!page) {
      // Impossible, but TypeScript doesn't know that
      return;
    }
    if (onRenderSuccessProps) {
      onRenderSuccessProps((0,utils/* makePageCallback */.vS)(page, scale));
    }
  }
  /**
   * Called when a page fails to render
   */
  function onRenderError() {
    if (!svgError) {
      // Impossible, but TypeScript doesn't know that
      return;
    }
    if ((0,utils/* isCancelException */.UT)(svgError)) {
      return;
    }
    (0,tiny_warning_esm/* default */.A)(false, svgError.toString());
    if (onRenderErrorProps) {
      onRenderErrorProps(svgError);
    }
  }
  const viewport = (0,react.useMemo)(() => page.getViewport({
    scale,
    rotation: rotate
  }), [page, rotate, scale]);
  function resetSVG() {
    svgDispatch({
      type: 'RESET'
    });
  }
  (0,react.useEffect)(resetSVG, [page, svgDispatch, viewport]);
  function renderSVG() {
    if (!page) {
      return;
    }
    const cancellable = (0,esm/* default */.A)(page.getOperatorList());
    cancellable.promise.then(operatorList => {
      const svgGfx = new build_pdf.SVGGraphics(page.commonObjs, page.objs);
      svgGfx.getSVG(operatorList, viewport).then(nextSvg => {
        svgDispatch({
          type: 'RESOLVE',
          value: nextSvg
        });
      }).catch(error => {
        svgDispatch({
          type: 'REJECT',
          error
        });
      });
    }).catch(error => {
      svgDispatch({
        type: 'REJECT',
        error
      });
    });
    return () => (0,utils/* cancelRunningTask */.xL)(cancellable);
  }
  (0,react.useEffect)(renderSVG, [page, svgDispatch, viewport]);
  (0,react.useEffect)(() => {
    if (svg === undefined) {
      return;
    }
    if (svg === false) {
      onRenderError();
      return;
    }
    onRenderSuccess();
  },
  // Ommitted callbacks so they are not called every time they change
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [svg]);
  function drawPageOnContainer(element) {
    if (!element || !svg) {
      return;
    }
    // Append SVG element to the main container, if this hasn't been done already
    if (!element.firstElementChild) {
      element.appendChild(svg);
    }
    const {
      width,
      height
    } = viewport;
    svg.setAttribute('width', "".concat(width));
    svg.setAttribute('height', "".concat(height));
  }
  const {
    width,
    height
  } = viewport;
  return react.createElement("div", {
    className: "".concat(_className, "__svg"),
    // Note: This cannot be shortened, as we need this function to be called with each render.
    ref: ref => drawPageOnContainer(ref),
    style: {
      display: 'block',
      backgroundColor: 'white',
      overflow: 'hidden',
      width,
      height,
      userSelect: 'none'
    }
  });
}
;// ./node_modules/react-pdf/dist/esm/Page/TextLayer.js









function isTextItem(item) {
  return 'str' in item;
}
function TextLayer() {
  const pageContext = usePageContext();
  (0,tiny_invariant/* default */.A)(pageContext, 'Unable to find Page context.');
  const {
    customTextRenderer,
    onGetTextError,
    onGetTextSuccess,
    onRenderTextLayerError,
    onRenderTextLayerSuccess,
    page,
    pageIndex,
    pageNumber,
    rotate,
    scale
  } = pageContext;
  const [textContentState, textContentDispatch] = (0,useResolver/* default */.A)();
  const {
    value: textContent,
    error: textContentError
  } = textContentState;
  const layerElement = (0,react.useRef)(null);
  const endElement = (0,react.useRef)();
  (0,tiny_invariant/* default */.A)(page, 'Attempted to load page text content, but no page was specified.');
  (0,tiny_warning_esm/* default */.A)(parseInt(window.getComputedStyle(document.body).getPropertyValue('--react-pdf-text-layer'), 10) === 1, 'TextLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-text-layer');
  /**
   * Called when a page text content is read successfully
   */
  function onLoadSuccess() {
    if (!textContent) {
      // Impossible, but TypeScript doesn't know that
      return;
    }
    if (onGetTextSuccess) {
      onGetTextSuccess(textContent);
    }
  }
  /**
   * Called when a page text content failed to read successfully
   */
  function onLoadError() {
    if (!textContentError) {
      // Impossible, but TypeScript doesn't know that
      return;
    }
    (0,tiny_warning_esm/* default */.A)(false, textContentError.toString());
    if (onGetTextError) {
      onGetTextError(textContentError);
    }
  }
  function resetTextContent() {
    textContentDispatch({
      type: 'RESET'
    });
  }
  (0,react.useEffect)(resetTextContent, [page, textContentDispatch]);
  function loadTextContent() {
    if (!page) {
      return;
    }
    const cancellable = (0,esm/* default */.A)(page.getTextContent());
    const runningTask = cancellable;
    cancellable.promise.then(nextTextContent => {
      textContentDispatch({
        type: 'RESOLVE',
        value: nextTextContent
      });
    }).catch(error => {
      textContentDispatch({
        type: 'REJECT',
        error
      });
    });
    return () => (0,utils/* cancelRunningTask */.xL)(runningTask);
  }
  (0,react.useEffect)(loadTextContent, [page, textContentDispatch]);
  (0,react.useEffect)(() => {
    if (textContent === undefined) {
      return;
    }
    if (textContent === false) {
      onLoadError();
      return;
    }
    onLoadSuccess();
  },
  // Ommitted callbacks so they are not called every time they change
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [textContent]);
  /**
   * Called when a text layer is rendered successfully
   */
  const onRenderSuccess = (0,react.useCallback)(() => {
    if (onRenderTextLayerSuccess) {
      onRenderTextLayerSuccess();
    }
  }, [onRenderTextLayerSuccess]);
  /**
   * Called when a text layer failed to render successfully
   */
  const onRenderError = (0,react.useCallback)(error => {
    (0,tiny_warning_esm/* default */.A)(false, error.toString());
    if (onRenderTextLayerError) {
      onRenderTextLayerError(error);
    }
  }, [onRenderTextLayerError]);
  function onMouseDown() {
    const end = endElement.current;
    if (!end) {
      return;
    }
    end.classList.add('active');
  }
  function onMouseUp() {
    const end = endElement.current;
    if (!end) {
      return;
    }
    end.classList.remove('active');
  }
  const viewport = (0,react.useMemo)(() => page.getViewport({
    scale,
    rotation: rotate
  }), [page, rotate, scale]);
  function renderTextLayer() {
    if (!page || !textContent) {
      return;
    }
    const {
      current: layer
    } = layerElement;
    if (!layer) {
      return;
    }
    layer.innerHTML = '';
    const textContentSource = page.streamTextContent({
      includeMarkedContent: true
    });
    const parameters = {
      container: layer,
      textContentSource,
      viewport
    };
    const cancellable = build_pdf.renderTextLayer(parameters);
    const runningTask = cancellable;
    cancellable.promise.then(() => {
      const end = document.createElement('div');
      end.className = 'endOfContent';
      layer.append(end);
      endElement.current = end;
      const hasMarkedContent = Boolean(layer.querySelector('.markedContent'));
      const layerChildren = hasMarkedContent ? layer.querySelectorAll('.markedContent > *:not(.markedContent') : layer.children;
      if (customTextRenderer) {
        let index = 0;
        textContent.items.forEach((item, itemIndex) => {
          if (!isTextItem(item)) {
            return;
          }
          const child = layerChildren[index];
          if (!child) {
            return;
          }
          const content = customTextRenderer(Object.assign({
            pageIndex,
            pageNumber,
            itemIndex
          }, item));
          child.innerHTML = content;
          index += item.str && item.hasEOL ? 2 : 1;
        });
      }
      // Intentional immediate callback
      onRenderSuccess();
    }).catch(onRenderError);
    return () => (0,utils/* cancelRunningTask */.xL)(runningTask);
  }
  (0,react.useLayoutEffect)(renderTextLayer, [customTextRenderer, onRenderError, onRenderSuccess, page, pageIndex, pageNumber, textContent, viewport]);
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    react.createElement("div", {
      className: (0,clsx/* default */.A)('react-pdf__Page__textContent', 'textLayer'),
      onMouseUp: onMouseUp,
      onMouseDown: onMouseDown,
      ref: layerElement
    })
  );
}
// EXTERNAL MODULE: ./node_modules/react-pdf/dist/esm/DocumentContext.js
var DocumentContext = __webpack_require__(58946);
;// ./node_modules/react-pdf/dist/esm/shared/hooks/useDocumentContext.js


function useDocumentContext() {
  return (0,react.useContext)(DocumentContext/* default */.A);
}
;// ./node_modules/react-pdf/dist/esm/Page/AnnotationLayer.js










function AnnotationLayer() {
  const documentContext = useDocumentContext();
  (0,tiny_invariant/* default */.A)(documentContext, 'Unable to find Document context. Did you wrap <Page /> in <Document />?');
  const pageContext = usePageContext();
  (0,tiny_invariant/* default */.A)(pageContext, 'Unable to find Page context.');
  const mergedProps = Object.assign(Object.assign({}, documentContext), pageContext);
  const {
    imageResourcesPath,
    linkService,
    onGetAnnotationsError: onGetAnnotationsErrorProps,
    onGetAnnotationsSuccess: onGetAnnotationsSuccessProps,
    onRenderAnnotationLayerError: onRenderAnnotationLayerErrorProps,
    onRenderAnnotationLayerSuccess: onRenderAnnotationLayerSuccessProps,
    page,
    pdf,
    renderForms,
    rotate,
    scale = 1
  } = mergedProps;
  const [annotationsState, annotationsDispatch] = (0,useResolver/* default */.A)();
  const {
    value: annotations,
    error: annotationsError
  } = annotationsState;
  const layerElement = (0,react.useRef)(null);
  (0,tiny_invariant/* default */.A)(page, 'Attempted to load page annotations, but no page was specified.');
  (0,tiny_warning_esm/* default */.A)(parseInt(window.getComputedStyle(document.body).getPropertyValue('--react-pdf-annotation-layer'), 10) === 1, 'AnnotationLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-annotations');
  function onLoadSuccess() {
    if (!annotations) {
      // Impossible, but TypeScript doesn't know that
      return;
    }
    if (onGetAnnotationsSuccessProps) {
      onGetAnnotationsSuccessProps(annotations);
    }
  }
  function onLoadError() {
    if (!annotationsError) {
      // Impossible, but TypeScript doesn't know that
      return;
    }
    (0,tiny_warning_esm/* default */.A)(false, annotationsError.toString());
    if (onGetAnnotationsErrorProps) {
      onGetAnnotationsErrorProps(annotationsError);
    }
  }
  function resetAnnotations() {
    annotationsDispatch({
      type: 'RESET'
    });
  }
  (0,react.useEffect)(resetAnnotations, [annotationsDispatch, page]);
  function loadAnnotations() {
    if (!page) {
      return;
    }
    const cancellable = (0,esm/* default */.A)(page.getAnnotations());
    const runningTask = cancellable;
    cancellable.promise.then(nextAnnotations => {
      annotationsDispatch({
        type: 'RESOLVE',
        value: nextAnnotations
      });
    }).catch(error => {
      annotationsDispatch({
        type: 'REJECT',
        error
      });
    });
    return () => {
      (0,utils/* cancelRunningTask */.xL)(runningTask);
    };
  }
  (0,react.useEffect)(loadAnnotations, [annotationsDispatch, page, renderForms]);
  (0,react.useEffect)(() => {
    if (annotations === undefined) {
      return;
    }
    if (annotations === false) {
      onLoadError();
      return;
    }
    onLoadSuccess();
  },
  // Ommitted callbacks so they are not called every time they change
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [annotations]);
  function onRenderSuccess() {
    if (onRenderAnnotationLayerSuccessProps) {
      onRenderAnnotationLayerSuccessProps();
    }
  }
  function onRenderError(error) {
    (0,tiny_warning_esm/* default */.A)(false, "".concat(error));
    if (onRenderAnnotationLayerErrorProps) {
      onRenderAnnotationLayerErrorProps(error);
    }
  }
  const viewport = (0,react.useMemo)(() => page.getViewport({
    scale,
    rotation: rotate
  }), [page, rotate, scale]);
  function renderAnnotationLayer() {
    if (!pdf || !page || !annotations) {
      return;
    }
    const {
      current: layer
    } = layerElement;
    if (!layer) {
      return;
    }
    const clonedViewport = viewport.clone({
      dontFlip: true
    });
    const parameters = {
      annotations,
      annotationStorage: pdf.annotationStorage,
      div: layer,
      downloadManager: null,
      imageResourcesPath,
      linkService,
      page,
      renderForms,
      viewport: clonedViewport
    };
    layer.innerHTML = '';
    try {
      build_pdf.AnnotationLayer.render(parameters);
      // Intentional immediate callback
      onRenderSuccess();
    } catch (error) {
      onRenderError(error);
    }
    return () => {
      // TODO: Cancel running task?
    };
  }
  (0,react.useEffect)(renderAnnotationLayer,
  // Ommitted callbacks so they are not called every time they change
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [annotations, imageResourcesPath, linkService, page, renderForms, viewport]);
  return react.createElement("div", {
    className: (0,clsx/* default */.A)('react-pdf__Page__annotations', 'annotationLayer'),
    ref: layerElement
  });
}
;// ./node_modules/react-pdf/dist/esm/Page.js
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};


















const defaultScale = 1;
function Page(props) {
  const documentContext = useDocumentContext();
  (0,tiny_invariant/* default */.A)(documentContext, 'Unable to find Document context. Did you wrap <Page /> in <Document />?');
  const mergedProps = Object.assign(Object.assign({}, documentContext), props);
  const {
      _className = 'react-pdf__Page',
      _enableRegisterUnregisterPage = true,
      canvasBackground,
      canvasRef,
      children,
      className,
      customTextRenderer,
      devicePixelRatio,
      error = 'Failed to load the page.',
      height,
      inputRef,
      loading = 'Loading page…',
      noData = 'No page specified.',
      onGetAnnotationsError: onGetAnnotationsErrorProps,
      onGetAnnotationsSuccess: onGetAnnotationsSuccessProps,
      onGetStructTreeError: onGetStructTreeErrorProps,
      onGetStructTreeSuccess: onGetStructTreeSuccessProps,
      onGetTextError: onGetTextErrorProps,
      onGetTextSuccess: onGetTextSuccessProps,
      onLoadError: onLoadErrorProps,
      onLoadSuccess: onLoadSuccessProps,
      onRenderAnnotationLayerError: onRenderAnnotationLayerErrorProps,
      onRenderAnnotationLayerSuccess: onRenderAnnotationLayerSuccessProps,
      onRenderError: onRenderErrorProps,
      onRenderSuccess: onRenderSuccessProps,
      onRenderTextLayerError: onRenderTextLayerErrorProps,
      onRenderTextLayerSuccess: onRenderTextLayerSuccessProps,
      pageIndex: pageIndexProps,
      pageNumber: pageNumberProps,
      pdf,
      registerPage,
      renderAnnotationLayer: renderAnnotationLayerProps = true,
      renderForms = false,
      renderMode = 'canvas',
      renderTextLayer: renderTextLayerProps = true,
      rotate: rotateProps,
      scale: scaleProps = defaultScale,
      unregisterPage,
      width
    } = mergedProps,
    otherProps = __rest(mergedProps, ["_className", "_enableRegisterUnregisterPage", "canvasBackground", "canvasRef", "children", "className", "customTextRenderer", "devicePixelRatio", "error", "height", "inputRef", "loading", "noData", "onGetAnnotationsError", "onGetAnnotationsSuccess", "onGetStructTreeError", "onGetStructTreeSuccess", "onGetTextError", "onGetTextSuccess", "onLoadError", "onLoadSuccess", "onRenderAnnotationLayerError", "onRenderAnnotationLayerSuccess", "onRenderError", "onRenderSuccess", "onRenderTextLayerError", "onRenderTextLayerSuccess", "pageIndex", "pageNumber", "pdf", "registerPage", "renderAnnotationLayer", "renderForms", "renderMode", "renderTextLayer", "rotate", "scale", "unregisterPage", "width"]);
  const [pageState, pageDispatch] = (0,useResolver/* default */.A)();
  const {
    value: page,
    error: pageError
  } = pageState;
  const pageElement = (0,react.useRef)(null);
  (0,tiny_invariant/* default */.A)(pdf, 'Attempted to load a page, but no document was specified.');
  const pageIndex = (0,utils/* isProvided */.ci)(pageNumberProps) ? pageNumberProps - 1 : pageIndexProps !== null && pageIndexProps !== void 0 ? pageIndexProps : null;
  const pageNumber = pageNumberProps !== null && pageNumberProps !== void 0 ? pageNumberProps : (0,utils/* isProvided */.ci)(pageIndexProps) ? pageIndexProps + 1 : null;
  const rotate = rotateProps !== null && rotateProps !== void 0 ? rotateProps : page ? page.rotate : null;
  const scale = (0,react.useMemo)(() => {
    if (!page) {
      return null;
    }
    // Be default, we'll render page at 100% * scale width.
    let pageScale = 1;
    // Passing scale explicitly null would cause the page not to render
    const scaleWithDefault = scaleProps !== null && scaleProps !== void 0 ? scaleProps : defaultScale;
    // If width/height is defined, calculate the scale of the page so it could be of desired width.
    if (width || height) {
      const viewport = page.getViewport({
        scale: 1,
        rotation: rotate
      });
      if (width) {
        pageScale = width / viewport.width;
      } else if (height) {
        pageScale = height / viewport.height;
      }
    }
    return scaleWithDefault * pageScale;
  }, [height, page, rotate, scaleProps, width]);
  function hook() {
    return () => {
      if (!(0,utils/* isProvided */.ci)(pageIndex)) {
        // Impossible, but TypeScript doesn't know that
        return;
      }
      if (_enableRegisterUnregisterPage && unregisterPage) {
        unregisterPage(pageIndex);
      }
    };
  }
  (0,react.useEffect)(hook, [_enableRegisterUnregisterPage, pdf, pageIndex, unregisterPage]);
  /**
   * Called when a page is loaded successfully
   */
  function onLoadSuccess() {
    if (onLoadSuccessProps) {
      if (!page || !scale) {
        // Impossible, but TypeScript doesn't know that
        return;
      }
      onLoadSuccessProps((0,utils/* makePageCallback */.vS)(page, scale));
    }
    if (_enableRegisterUnregisterPage && registerPage) {
      if (!(0,utils/* isProvided */.ci)(pageIndex) || !pageElement.current) {
        // Impossible, but TypeScript doesn't know that
        return;
      }
      registerPage(pageIndex, pageElement.current);
    }
  }
  /**
   * Called when a page failed to load
   */
  function onLoadError() {
    if (!pageError) {
      // Impossible, but TypeScript doesn't know that
      return;
    }
    (0,tiny_warning_esm/* default */.A)(false, pageError.toString());
    if (onLoadErrorProps) {
      onLoadErrorProps(pageError);
    }
  }
  function resetPage() {
    pageDispatch({
      type: 'RESET'
    });
  }
  (0,react.useEffect)(resetPage, [pageDispatch, pdf, pageIndex]);
  function loadPage() {
    if (!pdf || !pageNumber) {
      return;
    }
    const cancellable = (0,esm/* default */.A)(pdf.getPage(pageNumber));
    const runningTask = cancellable;
    cancellable.promise.then(nextPage => {
      pageDispatch({
        type: 'RESOLVE',
        value: nextPage
      });
    }).catch(error => {
      pageDispatch({
        type: 'REJECT',
        error
      });
    });
    return () => (0,utils/* cancelRunningTask */.xL)(runningTask);
  }
  (0,react.useEffect)(loadPage, [pageDispatch, pdf, pageIndex, pageNumber, registerPage]);
  (0,react.useEffect)(() => {
    if (page === undefined) {
      return;
    }
    if (page === false) {
      onLoadError();
      return;
    }
    onLoadSuccess();
  },
  // Ommitted callbacks so they are not called every time they change
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [page, scale]);
  const childContext = (0,react.useMemo)(() =>
  // Technically there cannot be page without pageIndex, pageNumber, rotate and scale, but TypeScript doesn't know that
  page && (0,utils/* isProvided */.ci)(pageIndex) && pageNumber && (0,utils/* isProvided */.ci)(rotate) && (0,utils/* isProvided */.ci)(scale) ? {
    _className,
    canvasBackground,
    customTextRenderer,
    devicePixelRatio,
    onGetAnnotationsError: onGetAnnotationsErrorProps,
    onGetAnnotationsSuccess: onGetAnnotationsSuccessProps,
    onGetStructTreeError: onGetStructTreeErrorProps,
    onGetStructTreeSuccess: onGetStructTreeSuccessProps,
    onGetTextError: onGetTextErrorProps,
    onGetTextSuccess: onGetTextSuccessProps,
    onRenderAnnotationLayerError: onRenderAnnotationLayerErrorProps,
    onRenderAnnotationLayerSuccess: onRenderAnnotationLayerSuccessProps,
    onRenderError: onRenderErrorProps,
    onRenderSuccess: onRenderSuccessProps,
    onRenderTextLayerError: onRenderTextLayerErrorProps,
    onRenderTextLayerSuccess: onRenderTextLayerSuccessProps,
    page,
    pageIndex,
    pageNumber,
    renderForms,
    renderTextLayer: renderTextLayerProps,
    rotate,
    scale
  } : null, [_className, canvasBackground, customTextRenderer, devicePixelRatio, onGetAnnotationsErrorProps, onGetAnnotationsSuccessProps, onGetStructTreeErrorProps, onGetStructTreeSuccessProps, onGetTextErrorProps, onGetTextSuccessProps, onRenderAnnotationLayerErrorProps, onRenderAnnotationLayerSuccessProps, onRenderErrorProps, onRenderSuccessProps, onRenderTextLayerErrorProps, onRenderTextLayerSuccessProps, page, pageIndex, pageNumber, renderForms, renderTextLayerProps, rotate, scale]);
  const eventProps = (0,react.useMemo)(() => (0,dist_esm/* default */.Ay)(otherProps, () => page ? scale ? (0,utils/* makePageCallback */.vS)(page, scale) : undefined : page), [otherProps, page, scale]);
  const pageKey = "".concat(pageIndex, "@").concat(scale, "/").concat(rotate);
  const pageKeyNoScale = "".concat(pageIndex, "/").concat(rotate);
  function renderMainLayer() {
    switch (renderMode) {
      case 'none':
        return null;
      case 'svg':
        return react.createElement(PageSVG, {
          key: "".concat(pageKeyNoScale, "_svg")
        });
      case 'canvas':
      default:
        return react.createElement(PageCanvas, {
          key: "".concat(pageKey, "_canvas"),
          canvasRef: canvasRef
        });
    }
  }
  function renderTextLayer() {
    if (!renderTextLayerProps) {
      return null;
    }
    return react.createElement(TextLayer, {
      key: "".concat(pageKey, "_text")
    });
  }
  function renderAnnotationLayer() {
    if (!renderAnnotationLayerProps) {
      return null;
    }
    /**
     * As of now, PDF.js 2.0.943 returns warnings on unimplemented annotations in SVG mode.
     * Therefore, as a fallback, we render "traditional" AnnotationLayer component.
     */
    return react.createElement(AnnotationLayer, {
      key: "".concat(pageKey, "_annotations")
    });
  }
  function renderChildren() {
    return react.createElement(PageContext.Provider, {
      value: childContext
    }, renderMainLayer(), renderTextLayer(), renderAnnotationLayer(), children);
  }
  function renderContent() {
    if (!pageNumber) {
      return react.createElement(Message/* default */.A, {
        type: "no-data"
      }, typeof noData === 'function' ? noData() : noData);
    }
    if (pdf === null || page === undefined || page === null) {
      return react.createElement(Message/* default */.A, {
        type: "loading"
      }, typeof loading === 'function' ? loading() : loading);
    }
    if (pdf === false || page === false) {
      return react.createElement(Message/* default */.A, {
        type: "error"
      }, typeof error === 'function' ? error() : error);
    }
    return renderChildren();
  }
  return react.createElement("div", Object.assign({
    className: (0,clsx/* default */.A)(_className, className),
    "data-page-number": pageNumber,
    ref: mergeRefs(inputRef, pageElement),
    style: {
      ['--scale-factor']: "".concat(scale),
      backgroundColor: canvasBackground || 'white',
      position: 'relative',
      minWidth: 'min-content',
      minHeight: 'min-content'
    }
  }, eventProps), renderContent());
}
const isFunctionOrNode = prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).node]);
Page.propTypes = Object.assign(Object.assign({}, propTypes/* eventProps */.zq), {
  canvasBackground: (prop_types_default()).string,
  canvasRef: propTypes/* isRef */.i9,
  children: (prop_types_default()).node,
  className: propTypes/* isClassName */.uG,
  customTextRenderer: (prop_types_default()).func,
  devicePixelRatio: (prop_types_default()).number,
  error: isFunctionOrNode,
  height: (prop_types_default()).number,
  imageResourcesPath: (prop_types_default()).string,
  inputRef: propTypes/* isRef */.i9,
  loading: isFunctionOrNode,
  noData: isFunctionOrNode,
  onGetTextError: (prop_types_default()).func,
  onGetTextSuccess: (prop_types_default()).func,
  onLoadError: (prop_types_default()).func,
  onLoadSuccess: (prop_types_default()).func,
  onRenderError: (prop_types_default()).func,
  onRenderSuccess: (prop_types_default()).func,
  onRenderTextLayerError: (prop_types_default()).func,
  onRenderTextLayerSuccess: (prop_types_default()).func,
  pageIndex: propTypes/* isPageIndex */.kg,
  pageNumber: propTypes/* isPageNumber */.X8,
  pdf: propTypes/* isPdf */.tk,
  renderAnnotationLayer: (prop_types_default()).bool,
  renderForms: (prop_types_default()).bool,
  renderMode: propTypes/* isRenderMode */.Ao,
  renderTextLayer: (prop_types_default()).bool,
  rotate: propTypes/* isRotate */.KN,
  scale: (prop_types_default()).number,
  width: (prop_types_default()).number
});

/***/ }),

/***/ 21912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useResolver)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9950);

function reducer(state, action) {
  switch (action.type) {
    case 'RESOLVE':
      return {
        value: action.value,
        error: undefined
      };
    case 'REJECT':
      return {
        value: false,
        error: action.error
      };
    case 'RESET':
      return {
        value: undefined,
        error: undefined
      };
    default:
      return state;
  }
}
function useResolver() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(reducer, {
    value: undefined,
    error: undefined
  });
}

/***/ }),

/***/ 4664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ao: () => (/* binding */ isRenderMode),
/* harmony export */   KN: () => (/* binding */ isRotate),
/* harmony export */   X8: () => (/* binding */ isPageNumber),
/* harmony export */   fo: () => (/* binding */ isFile),
/* harmony export */   i9: () => (/* binding */ isRef),
/* harmony export */   kg: () => (/* binding */ isPageIndex),
/* harmony export */   tk: () => (/* binding */ isPdf),
/* harmony export */   uG: () => (/* binding */ isClassName),
/* harmony export */   zq: () => (/* binding */ eventProps)
/* harmony export */ });
/* unused harmony exports isLinkService, isLinkTarget, isPage */
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11942);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var make_event_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14673);
/* harmony import */ var pdfjs_dist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73114);
/* harmony import */ var pdfjs_dist__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pdfjs_dist__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92983);
/* harmony import */ var _LinkService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79117);





const eventProps = (() => {
  const result = {};
  make_event_props__WEBPACK_IMPORTED_MODULE_1__/* .allEvents */ .Xz.forEach(eventName => {
    result[eventName] = (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func);
  });
  return result;
})();
const isTypedArray = prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().instanceOf(Int8Array), prop_types__WEBPACK_IMPORTED_MODULE_2___default().instanceOf(Uint8Array), prop_types__WEBPACK_IMPORTED_MODULE_2___default().instanceOf(Uint8ClampedArray), prop_types__WEBPACK_IMPORTED_MODULE_2___default().instanceOf(Int16Array), prop_types__WEBPACK_IMPORTED_MODULE_2___default().instanceOf(Uint16Array), prop_types__WEBPACK_IMPORTED_MODULE_2___default().instanceOf(Int32Array), prop_types__WEBPACK_IMPORTED_MODULE_2___default().instanceOf(Uint32Array), prop_types__WEBPACK_IMPORTED_MODULE_2___default().instanceOf(Float32Array), prop_types__WEBPACK_IMPORTED_MODULE_2___default().instanceOf(Float64Array)]);
const fileTypes = [(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string), prop_types__WEBPACK_IMPORTED_MODULE_2___default().instanceOf(ArrayBuffer), prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string), prop_types__WEBPACK_IMPORTED_MODULE_2___default().instanceOf(ArrayBuffer), prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired), isTypedArray]).isRequired
}), prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
  range: prop_types__WEBPACK_IMPORTED_MODULE_2___default().instanceOf(pdfjs_dist__WEBPACK_IMPORTED_MODULE_0__.PDFDataRangeTransport).isRequired
}), prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
  url: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired
})];
if (typeof Blob !== 'undefined') {
  fileTypes.push(prop_types__WEBPACK_IMPORTED_MODULE_2___default().instanceOf(Blob));
}
const isClassName = prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string), prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().string))]);
const isFile = prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType(fileTypes);
const isLinkService = prop_types__WEBPACK_IMPORTED_MODULE_2___default().instanceOf(_LinkService__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A);
const isLinkTarget = prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(['_self', '_blank', '_parent', '_top']);
const isPage = prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
  commonObjs: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({}).isRequired,
  getAnnotations: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  getTextContent: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  getViewport: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  render: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired
});
const isPageIndex = function isPageIndex(props, propName, componentName) {
  const {
    [propName]: pageIndex,
    pageNumber,
    pdf
  } = props;
  if (!(0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .isDefined */ .O9)(pdf)) {
    return null;
  }
  if ((0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .isDefined */ .O9)(pageIndex)) {
    if (typeof pageIndex !== 'number') {
      return new Error("`".concat(propName, "` of type `").concat(typeof pageIndex, "` supplied to `").concat(componentName, "`, expected `number`."));
    }
    if (pageIndex < 0) {
      return new Error("Expected `".concat(propName, "` to be greater or equal to 0."));
    }
    const {
      numPages
    } = pdf;
    if (pageIndex + 1 > numPages) {
      return new Error("Expected `".concat(propName, "` to be less or equal to ").concat(numPages - 1, "."));
    }
  } else if (!(0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .isDefined */ .O9)(pageNumber)) {
    return new Error("`".concat(propName, "` not supplied. Either pageIndex or pageNumber must be supplied to `").concat(componentName, "`."));
  }
  // Everything is fine
  return null;
};
const isPageNumber = function isPageNumber(props, propName, componentName) {
  const {
    [propName]: pageNumber,
    pageIndex,
    pdf
  } = props;
  if (!(0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .isDefined */ .O9)(pdf)) {
    return null;
  }
  if ((0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .isDefined */ .O9)(pageNumber)) {
    if (typeof pageNumber !== 'number') {
      return new Error("`".concat(propName, "` of type `").concat(typeof pageNumber, "` supplied to `").concat(componentName, "`, expected `number`."));
    }
    if (pageNumber < 1) {
      return new Error("Expected `".concat(propName, "` to be greater or equal to 1."));
    }
    const {
      numPages
    } = pdf;
    if (pageNumber > numPages) {
      return new Error("Expected `".concat(propName, "` to be less or equal to ").concat(numPages, "."));
    }
  } else if (!(0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .isDefined */ .O9)(pageIndex)) {
    return new Error("`".concat(propName, "` not supplied. Either pageIndex or pageNumber must be supplied to `").concat(componentName, "`."));
  }
  // Everything is fine
  return null;
};
const isPdf = prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
  getDestination: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  getOutline: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  getPage: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  numPages: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired
}), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)]);
const isRef = prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().func), prop_types__WEBPACK_IMPORTED_MODULE_2___default().exact({
  current: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().any)
})]);
const isRenderMode = prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(['canvas', 'none', 'svg']);
const isRotate = prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf([0, 90, 180, 270]);

/***/ }),

/***/ 92983:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bd: () => (/* binding */ isBrowser),
/* harmony export */   O9: () => (/* binding */ isDefined),
/* harmony export */   UT: () => (/* binding */ isCancelException),
/* harmony export */   ci: () => (/* binding */ isProvided),
/* harmony export */   h1: () => (/* binding */ loadFromFile),
/* harmony export */   jA: () => (/* binding */ dataURItoByteString),
/* harmony export */   mZ: () => (/* binding */ getDevicePixelRatio),
/* harmony export */   mw: () => (/* binding */ isArrayBuffer),
/* harmony export */   qC: () => (/* binding */ displayCORSWarning),
/* harmony export */   qf: () => (/* binding */ isBlob),
/* harmony export */   vS: () => (/* binding */ makePageCallback),
/* harmony export */   xL: () => (/* binding */ cancelRunningTask),
/* harmony export */   zL: () => (/* binding */ isDataURI)
/* harmony export */ });
/* unused harmony exports isLocalFileSystem, isString, displayWorkerWarning */
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67033);
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14783);


/**
 * Checks if we're running in a browser environment.
 */
const isBrowser = typeof document !== 'undefined';
/**
 * Checks whether we're running from a local file system.
 */
const isLocalFileSystem = isBrowser && window.location.protocol === 'file:';
/**
 * Checks whether a variable is defined.
 *
 * @param {*} variable Variable to check
 */
function isDefined(variable) {
  return typeof variable !== 'undefined';
}
/**
 * Checks whether a variable is defined and not null.
 *
 * @param {*} variable Variable to check
 */
function isProvided(variable) {
  return isDefined(variable) && variable !== null;
}
/**
 * Checks whether a variable provided is a string.
 *
 * @param {*} variable Variable to check
 */
function isString(variable) {
  return typeof variable === 'string';
}
/**
 * Checks whether a variable provided is an ArrayBuffer.
 *
 * @param {*} variable Variable to check
 */
function isArrayBuffer(variable) {
  return variable instanceof ArrayBuffer;
}
/**
 * Checks whether a variable provided is a Blob.
 *
 * @param {*} variable Variable to check
 */
function isBlob(variable) {
  (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(isBrowser, 'isBlob can only be used in a browser environment');
  return variable instanceof Blob;
}
/**
 * Checks whether a variable provided is a data URI.
 *
 * @param {*} variable String to check
 */
function isDataURI(variable) {
  return isString(variable) && /^data:/.test(variable);
}
function dataURItoByteString(dataURI) {
  (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(isDataURI(dataURI), 'Invalid data URI.');
  const [headersString = '', dataString = ''] = dataURI.split(',');
  const headers = headersString.split(';');
  if (headers.indexOf('base64') !== -1) {
    return atob(dataString);
  }
  return unescape(dataString);
}
function getDevicePixelRatio() {
  return isBrowser && window.devicePixelRatio || 1;
}
const allowFileAccessFromFilesTip = 'On Chromium based browsers, you can use --allow-file-access-from-files flag for debugging purposes.';
function displayCORSWarning() {
  (0,tiny_warning__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(!isLocalFileSystem, "Loading PDF as base64 strings/URLs may not work on protocols other than HTTP/HTTPS. ".concat(allowFileAccessFromFilesTip));
}
function displayWorkerWarning() {
  warning(!isLocalFileSystem, "Loading PDF.js worker may not work on protocols other than HTTP/HTTPS. ".concat(allowFileAccessFromFilesTip));
}
function cancelRunningTask(runningTask) {
  if (runningTask && runningTask.cancel) runningTask.cancel();
}
function makePageCallback(page, scale) {
  Object.defineProperty(page, 'width', {
    get() {
      return this.view[2] * scale;
    },
    configurable: true
  });
  Object.defineProperty(page, 'height', {
    get() {
      return this.view[3] * scale;
    },
    configurable: true
  });
  Object.defineProperty(page, 'originalWidth', {
    get() {
      return this.view[2];
    },
    configurable: true
  });
  Object.defineProperty(page, 'originalHeight', {
    get() {
      return this.view[3];
    },
    configurable: true
  });
  return page;
}
function isCancelException(error) {
  return error.name === 'RenderingCancelledException';
}
function loadFromFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (!reader.result) {
        return reject(new Error('Error while reading a file.'));
      }
      resolve(reader.result);
    };
    reader.onerror = event => {
      if (!event.target) {
        return reject(new Error('Error while reading a file.'));
      }
      const {
        error
      } = event.target;
      if (!error) {
        return reject(new Error('Error while reading a file.'));
      }
      switch (error.code) {
        case error.NOT_FOUND_ERR:
          return reject(new Error('Error while reading a file: File not found.'));
        case error.SECURITY_ERR:
          return reject(new Error('Error while reading a file: Security error.'));
        case error.ABORT_ERR:
          return reject(new Error('Error while reading a file: Aborted.'));
        default:
          return reject(new Error('Error while reading a file.'));
      }
    };
    reader.readAsArrayBuffer(file);
  });
}

/***/ }),

/***/ 14783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var isProduction = "production" === 'production';
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }
    var text = "Warning: " + message;
    if (typeof console !== 'undefined') {
      console.warn(text);
    }
    try {
      throw Error(text);
    } catch (x) {}
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (warning);

/***/ }),

/***/ 81756:
/***/ ((module) => {

function _assertClassBrand(e, t, n) {
  if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
module.exports = _assertClassBrand, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 97101:
/***/ ((module) => {

function _checkPrivateRedeclaration(e, t) {
  if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
module.exports = _checkPrivateRedeclaration, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 85764:
/***/ ((module) => {

function _classApplyDescriptorGet(e, t) {
  return t.get ? t.get.call(e) : t.value;
}
module.exports = _classApplyDescriptorGet, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 69056:
/***/ ((module) => {

function _classApplyDescriptorSet(e, t, l) {
  if (t.set) t.set.call(e, l);else {
    if (!t.writable) throw new TypeError("attempted to set read only private field");
    t.value = l;
  }
}
module.exports = _classApplyDescriptorSet, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 54829:
/***/ ((module) => {

function _classCheckPrivateStaticFieldDescriptor(t, e) {
  if (void 0 === t) throw new TypeError("attempted to " + e + " private static field before its declaration");
}
module.exports = _classCheckPrivateStaticFieldDescriptor, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 44972:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classApplyDescriptorGet = __webpack_require__(85764);
var classPrivateFieldGet2 = __webpack_require__(16668);
function _classPrivateFieldGet(e, t) {
  var r = classPrivateFieldGet2(t, e);
  return classApplyDescriptorGet(e, r);
}
module.exports = _classPrivateFieldGet, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 16668:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assertClassBrand = __webpack_require__(81756);
function _classPrivateFieldGet2(s, a) {
  return s.get(assertClassBrand(s, a));
}
module.exports = _classPrivateFieldGet2, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 42459:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var checkPrivateRedeclaration = __webpack_require__(97101);
function _classPrivateFieldInitSpec(e, t, a) {
  checkPrivateRedeclaration(e, t), t.set(e, a);
}
module.exports = _classPrivateFieldInitSpec, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 32808:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classApplyDescriptorSet = __webpack_require__(69056);
var classPrivateFieldGet2 = __webpack_require__(16668);
function _classPrivateFieldSet(e, t, r) {
  var s = classPrivateFieldGet2(t, e);
  return classApplyDescriptorSet(e, s, r), r;
}
module.exports = _classPrivateFieldSet, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 70137:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assertClassBrand = __webpack_require__(81756);
function _classPrivateMethodGet(s, a, r) {
  return assertClassBrand(a, s), r;
}
module.exports = _classPrivateMethodGet, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 93312:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var checkPrivateRedeclaration = __webpack_require__(97101);
function _classPrivateMethodInitSpec(e, a) {
  checkPrivateRedeclaration(e, a), a.add(e);
}
module.exports = _classPrivateMethodInitSpec, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 82435:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classApplyDescriptorGet = __webpack_require__(85764);
var assertClassBrand = __webpack_require__(81756);
var classCheckPrivateStaticFieldDescriptor = __webpack_require__(54829);
function _classStaticPrivateFieldSpecGet(t, s, r) {
  return assertClassBrand(s, t), classCheckPrivateStaticFieldDescriptor(r, "get"), classApplyDescriptorGet(t, r);
}
module.exports = _classStaticPrivateFieldSpecGet, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 31399:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classApplyDescriptorSet = __webpack_require__(69056);
var assertClassBrand = __webpack_require__(81756);
var classCheckPrivateStaticFieldDescriptor = __webpack_require__(54829);
function _classStaticPrivateFieldSpecSet(s, t, r, e) {
  return assertClassBrand(t, s), classCheckPrivateStaticFieldDescriptor(r, "set"), classApplyDescriptorSet(s, r, e), e;
}
module.exports = _classStaticPrivateFieldSpecSet, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 8443:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assertClassBrand = __webpack_require__(81756);
function _classStaticPrivateMethodGet(s, a, t) {
  return assertClassBrand(a, s), t;
}
module.exports = _classStaticPrivateMethodGet, module.exports.__esModule = true, module.exports["default"] = module.exports;

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

/***/ 72004:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 58238:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ makeCancellablePromise)
/* harmony export */ });
function makeCancellablePromise(promise) {
  var isCancelled = false;
  var wrappedPromise = new Promise(function (resolve, reject) {
    promise.then(function (value) {
      return !isCancelled && resolve(value);
    }).catch(function (error) {
      return !isCancelled && reject(error);
    });
  });
  return {
    promise: wrappedPromise,
    cancel: function () {
      isCancelled = true;
    }
  };
}

/***/ }),

/***/ 14673:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (/* binding */ makeEventProps),
/* harmony export */   Xz: () => (/* binding */ allEvents)
/* harmony export */ });
/* unused harmony exports clipboardEvents, compositionEvents, focusEvents, formEvents, imageEvents, keyboardEvents, mediaEvents, mouseEvents, dragEvents, selectionEvents, touchEvents, pointerEvents, uiEvents, wheelEvents, animationEvents, transitionEvents, otherEvents, changeEvents */
var __spreadArray = undefined && undefined.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
// As defined on the list of supported events: https://reactjs.org/docs/events.html
var clipboardEvents = ['onCopy', 'onCut', 'onPaste'];
var compositionEvents = ['onCompositionEnd', 'onCompositionStart', 'onCompositionUpdate'];
var focusEvents = ['onFocus', 'onBlur'];
var formEvents = ['onInput', 'onInvalid', 'onReset', 'onSubmit'];
var imageEvents = ['onLoad', 'onError'];
var keyboardEvents = ['onKeyDown', 'onKeyPress', 'onKeyUp'];
var mediaEvents = ['onAbort', 'onCanPlay', 'onCanPlayThrough', 'onDurationChange', 'onEmptied', 'onEncrypted', 'onEnded', 'onError', 'onLoadedData', 'onLoadedMetadata', 'onLoadStart', 'onPause', 'onPlay', 'onPlaying', 'onProgress', 'onRateChange', 'onSeeked', 'onSeeking', 'onStalled', 'onSuspend', 'onTimeUpdate', 'onVolumeChange', 'onWaiting'];
var mouseEvents = ['onClick', 'onContextMenu', 'onDoubleClick', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp'];
var dragEvents = ['onDrag', 'onDragEnd', 'onDragEnter', 'onDragExit', 'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop'];
var selectionEvents = ['onSelect'];
var touchEvents = ['onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart'];
var pointerEvents = ['onPointerDown', 'onPointerMove', 'onPointerUp', 'onPointerCancel', 'onGotPointerCapture', 'onLostPointerCapture', 'onPointerEnter', 'onPointerLeave', 'onPointerOver', 'onPointerOut'];
var uiEvents = ['onScroll'];
var wheelEvents = ['onWheel'];
var animationEvents = ['onAnimationStart', 'onAnimationEnd', 'onAnimationIteration'];
var transitionEvents = ['onTransitionEnd'];
var otherEvents = ['onToggle'];
var changeEvents = ['onChange'];
var allEvents = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], clipboardEvents, true), compositionEvents, true), focusEvents, true), formEvents, true), imageEvents, true), keyboardEvents, true), mediaEvents, true), mouseEvents, true), dragEvents, true), selectionEvents, true), touchEvents, true), pointerEvents, true), uiEvents, true), wheelEvents, true), animationEvents, true), transitionEvents, true), changeEvents, true), otherEvents, true);
/**
 * Returns an object with on-event callback props curried with provided args.
 * @param {Object} props Props passed to a component.
 * @param {Function=} getArgs A function that returns argument(s) on-event callbacks
 *   shall be curried with.
 */
function makeEventProps(props, getArgs) {
  var eventProps = {};
  allEvents.forEach(function (eventName) {
    var eventHandler = props[eventName];
    if (!eventHandler) {
      return;
    }
    if (getArgs) {
      eventProps[eventName] = function (event) {
        return eventHandler(event, getArgs(eventName));
      };
    } else {
      eventProps[eventName] = eventHandler;
    }
  });
  return eventProps;
}

/***/ }),

/***/ 67033:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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