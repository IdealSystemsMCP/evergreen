"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CLASS_PREFIX = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = _interopRequireDefault(require("ui-box"));

var _buttons = require("../../buttons");

var _textInput = require("../../text-input");

var _safeInvoke = _interopRequireDefault(require("../../lib/safe-invoke"));

var _excluded = ["name", "accept", "required", "multiple", "disabled", "capture", "height", "onChange", "placeholder"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var CLASS_PREFIX = 'evergreen-file-picker';
exports.CLASS_PREFIX = CLASS_PREFIX;

var FilePicker = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(FilePicker, _PureComponent);

  var _super = _createSuper(FilePicker);

  function FilePicker() {
    var _this;

    (0, _classCallCheck2["default"])(this, FilePicker);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fileInputRef", function (node) {
      _this.fileInput = node;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleFileChange", function (e) {
      // Firefox returns the same array instance each time for some reason
      var files = (0, _toConsumableArray2["default"])(e.target.files);

      _this.setState({
        files: files
      });

      (0, _safeInvoke["default"])(_this.props.onChange, files);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleButtonClick", function () {
      _this.fileInput.click();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleBlur", function (e) {
      // Setting e.target.files to an array fails. It must be a FileList
      if (e && e.target) e.target.files = _this.fileInput && _this.fileInput.files;
      (0, _safeInvoke["default"])(_this.props.onBlur, e);
    });
    _this.state = {
      files: []
    };
    return _this;
  }

  (0, _createClass2["default"])(FilePicker, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          name = _this$props.name,
          accept = _this$props.accept,
          required = _this$props.required,
          multiple = _this$props.multiple,
          disabled = _this$props.disabled,
          capture = _this$props.capture,
          height = _this$props.height,
          onChange = _this$props.onChange,
          placeholder = _this$props.placeholder,
          props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      var files = this.state.files;
      var inputValue;

      if (files.length === 0) {
        inputValue = '';
      } else if (files.length === 1) {
        inputValue = files[0].name;
      } else {
        inputValue = "".concat(files.length, " files");
      }

      var buttonText;

      if (files.length === 0) {
        buttonText = 'Select file';
      } else if (files.length === 1) {
        buttonText = 'Replace file';
      } else {
        buttonText = 'Replace files';
      }

      return /*#__PURE__*/_react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
        display: "flex",
        className: "".concat(CLASS_PREFIX, "-root")
      }, props), /*#__PURE__*/_react["default"].createElement(_uiBox["default"], {
        innerRef: this.fileInputRef,
        className: "".concat(CLASS_PREFIX, "-file-input"),
        is: "input",
        type: "file",
        name: name,
        accept: accept,
        required: required,
        multiple: multiple,
        disabled: disabled,
        capture: capture,
        onChange: this.handleFileChange,
        display: "none"
      }), /*#__PURE__*/_react["default"].createElement(_textInput.TextInput, {
        className: "".concat(CLASS_PREFIX, "-text-input"),
        readOnly: true,
        value: inputValue,
        placeholder: placeholder // There's a weird specifity issue when there's two differently sized inputs on the page
        ,
        borderTopRightRadius: "0 !important",
        borderBottomRightRadius: "0 !important",
        height: height,
        flex: 1,
        textOverflow: "ellipsis",
        onBlur: this.handleBlur
      }), /*#__PURE__*/_react["default"].createElement(_buttons.Button, {
        className: "".concat(CLASS_PREFIX, "-button"),
        onClick: this.handleButtonClick,
        disabled: disabled,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        height: height,
        flexShrink: 0,
        type: "button",
        onBlur: this.handleBlur
      }, buttonText));
    }
  }]);
  return FilePicker;
}(_react.PureComponent);

exports["default"] = FilePicker;
FilePicker.displayName = "FilePicker";
(0, _defineProperty2["default"])(FilePicker, "propTypes", {
  /**
   * Name attribute of the input.
   */
  name: _propTypes["default"].string,

  /**
   * The accept attribute of the input.
   */
  accept: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),

  /**
   * When true, the file picker is required.
   */
  required: _propTypes["default"].bool,

  /**
   * When true, accept multiple files.
   */
  multiple: _propTypes["default"].bool,

  /**
   * When true, the filepicker is disabled.
   */
  disabled: _propTypes["default"].bool,

  /**
   * The capture attribute of the input.
   */
  capture: _propTypes["default"].bool,

  /**
   * The height of the file picker.
   */
  height: _propTypes["default"].number,

  /**
   * Function called when onChange is fired
   */
  onChange: _propTypes["default"].func,

  /**
   * Function called when onBlur is fired
   */
  onBlur: _propTypes["default"].func,

  /**
   * Placeholder of the text input
   */
  placeholder: _propTypes["default"].string
});
(0, _defineProperty2["default"])(FilePicker, "defaultProps", {
  placeholder: 'Select a file to upload…'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDTEFTU19QUkVGSVgiLCJGaWxlUGlja2VyIiwibm9kZSIsImZpbGVJbnB1dCIsImUiLCJmaWxlcyIsInRhcmdldCIsInNldFN0YXRlIiwic2FmZUludm9rZSIsInByb3BzIiwib25DaGFuZ2UiLCJjbGljayIsIm9uQmx1ciIsInN0YXRlIiwibmFtZSIsImFjY2VwdCIsInJlcXVpcmVkIiwibXVsdGlwbGUiLCJkaXNhYmxlZCIsImNhcHR1cmUiLCJoZWlnaHQiLCJwbGFjZWhvbGRlciIsImlucHV0VmFsdWUiLCJsZW5ndGgiLCJidXR0b25UZXh0IiwiZmlsZUlucHV0UmVmIiwiaGFuZGxlRmlsZUNoYW5nZSIsImhhbmRsZUJsdXIiLCJoYW5kbGVCdXR0b25DbGljayIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJvbmVPZlR5cGUiLCJhcnJheU9mIiwiYm9vbCIsIm51bWJlciIsImZ1bmMiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZmlsZS1waWNrZXIvc3JjL0ZpbGVQaWNrZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3ggZnJvbSAndWktYm94J1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vYnV0dG9ucydcbmltcG9ydCB7IFRleHRJbnB1dCB9IGZyb20gJy4uLy4uL3RleHQtaW5wdXQnXG5pbXBvcnQgc2FmZUludm9rZSBmcm9tICcuLi8uLi9saWIvc2FmZS1pbnZva2UnXG5cbmV4cG9ydCBjb25zdCBDTEFTU19QUkVGSVggPSAnZXZlcmdyZWVuLWZpbGUtcGlja2VyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlUGlja2VyIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogTmFtZSBhdHRyaWJ1dGUgb2YgdGhlIGlucHV0LlxuICAgICAqL1xuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYWNjZXB0IGF0dHJpYnV0ZSBvZiB0aGUgaW5wdXQuXG4gICAgICovXG4gICAgYWNjZXB0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKVxuICAgIF0pLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgZmlsZSBwaWNrZXIgaXMgcmVxdWlyZWQuXG4gICAgICovXG4gICAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCBhY2NlcHQgbXVsdGlwbGUgZmlsZXMuXG4gICAgICovXG4gICAgbXVsdGlwbGU6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgZmlsZXBpY2tlciBpcyBkaXNhYmxlZC5cbiAgICAgKi9cbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY2FwdHVyZSBhdHRyaWJ1dGUgb2YgdGhlIGlucHV0LlxuICAgICAqL1xuICAgIGNhcHR1cmU6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGhlaWdodCBvZiB0aGUgZmlsZSBwaWNrZXIuXG4gICAgICovXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gY2FsbGVkIHdoZW4gb25DaGFuZ2UgaXMgZmlyZWRcbiAgICAgKi9cbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiBjYWxsZWQgd2hlbiBvbkJsdXIgaXMgZmlyZWRcbiAgICAgKi9cbiAgICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogUGxhY2Vob2xkZXIgb2YgdGhlIHRleHQgaW5wdXRcbiAgICAgKi9cbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZ1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBwbGFjZWhvbGRlcjogJ1NlbGVjdCBhIGZpbGUgdG8gdXBsb2Fk4oCmJ1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZpbGVzOiBbXVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBuYW1lLFxuICAgICAgYWNjZXB0LFxuICAgICAgcmVxdWlyZWQsXG4gICAgICBtdWx0aXBsZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgY2FwdHVyZSxcbiAgICAgIGhlaWdodCxcbiAgICAgIG9uQ2hhbmdlLCAvLyBSZW1vdmUgb25DaGFuZ2UgZnJvbSBwcm9wc1xuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBmaWxlcyB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgbGV0IGlucHV0VmFsdWVcbiAgICBpZiAoZmlsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBpbnB1dFZhbHVlID0gJydcbiAgICB9IGVsc2UgaWYgKGZpbGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgaW5wdXRWYWx1ZSA9IGZpbGVzWzBdLm5hbWVcbiAgICB9IGVsc2Uge1xuICAgICAgaW5wdXRWYWx1ZSA9IGAke2ZpbGVzLmxlbmd0aH0gZmlsZXNgXG4gICAgfVxuXG4gICAgbGV0IGJ1dHRvblRleHRcbiAgICBpZiAoZmlsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBidXR0b25UZXh0ID0gJ1NlbGVjdCBmaWxlJ1xuICAgIH0gZWxzZSBpZiAoZmlsZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICBidXR0b25UZXh0ID0gJ1JlcGxhY2UgZmlsZSdcbiAgICB9IGVsc2Uge1xuICAgICAgYnV0dG9uVGV4dCA9ICdSZXBsYWNlIGZpbGVzJ1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgY2xhc3NOYW1lPXtgJHtDTEFTU19QUkVGSVh9LXJvb3RgfSB7Li4ucHJvcHN9PlxuICAgICAgICA8Qm94XG4gICAgICAgICAgaW5uZXJSZWY9e3RoaXMuZmlsZUlucHV0UmVmfVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7Q0xBU1NfUFJFRklYfS1maWxlLWlucHV0YH1cbiAgICAgICAgICBpcz1cImlucHV0XCJcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICBhY2NlcHQ9e2FjY2VwdH1cbiAgICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAgICAgbXVsdGlwbGU9e211bHRpcGxlfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBjYXB0dXJlPXtjYXB0dXJlfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUZpbGVDaGFuZ2V9XG4gICAgICAgICAgZGlzcGxheT1cIm5vbmVcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake0NMQVNTX1BSRUZJWH0tdGV4dC1pbnB1dGB9XG4gICAgICAgICAgcmVhZE9ubHlcbiAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgLy8gVGhlcmUncyBhIHdlaXJkIHNwZWNpZml0eSBpc3N1ZSB3aGVuIHRoZXJlJ3MgdHdvIGRpZmZlcmVudGx5IHNpemVkIGlucHV0cyBvbiB0aGUgcGFnZVxuICAgICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzPVwiMCAhaW1wb3J0YW50XCJcbiAgICAgICAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1cz1cIjAgIWltcG9ydGFudFwiXG4gICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgZmxleD17MX1cbiAgICAgICAgICB0ZXh0T3ZlcmZsb3c9XCJlbGxpcHNpc1wiXG4gICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZUJsdXJ9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7Q0xBU1NfUFJFRklYfS1idXR0b25gfVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQnV0dG9uQ2xpY2t9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM9ezB9XG4gICAgICAgICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1cz17MH1cbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICBmbGV4U2hyaW5rPXswfVxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIG9uQmx1cj17dGhpcy5oYW5kbGVCbHVyfVxuICAgICAgICA+XG4gICAgICAgICAge2J1dHRvblRleHR9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG5cbiAgZmlsZUlucHV0UmVmID0gbm9kZSA9PiB7XG4gICAgdGhpcy5maWxlSW5wdXQgPSBub2RlXG4gIH1cblxuICBoYW5kbGVGaWxlQ2hhbmdlID0gZSA9PiB7XG4gICAgLy8gRmlyZWZveCByZXR1cm5zIHRoZSBzYW1lIGFycmF5IGluc3RhbmNlIGVhY2ggdGltZSBmb3Igc29tZSByZWFzb25cbiAgICBjb25zdCBmaWxlcyA9IFsuLi5lLnRhcmdldC5maWxlc11cblxuICAgIHRoaXMuc2V0U3RhdGUoeyBmaWxlcyB9KVxuXG4gICAgc2FmZUludm9rZSh0aGlzLnByb3BzLm9uQ2hhbmdlLCBmaWxlcylcbiAgfVxuXG4gIGhhbmRsZUJ1dHRvbkNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMuZmlsZUlucHV0LmNsaWNrKClcbiAgfVxuXG4gIGhhbmRsZUJsdXIgPSBlID0+IHtcbiAgICAvLyBTZXR0aW5nIGUudGFyZ2V0LmZpbGVzIHRvIGFuIGFycmF5IGZhaWxzLiBJdCBtdXN0IGJlIGEgRmlsZUxpc3RcbiAgICBpZiAoZSAmJiBlLnRhcmdldCkgZS50YXJnZXQuZmlsZXMgPSB0aGlzLmZpbGVJbnB1dCAmJiB0aGlzLmZpbGVJbnB1dC5maWxlc1xuXG4gICAgc2FmZUludm9rZSh0aGlzLnByb3BzLm9uQmx1ciwgZSlcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVPLElBQU1BLFlBQVksR0FBRyx1QkFBckI7OztJQUVjQyxVOzs7OztFQTREbkIsc0JBQWM7SUFBQTs7SUFBQTtJQUNaO0lBRFksaUdBeUZDLFVBQUFDLElBQUksRUFBSTtNQUNyQixNQUFLQyxTQUFMLEdBQWlCRCxJQUFqQjtJQUNELENBM0ZhO0lBQUEscUdBNkZLLFVBQUFFLENBQUMsRUFBSTtNQUN0QjtNQUNBLElBQU1DLEtBQUssdUNBQU9ELENBQUMsQ0FBQ0UsTUFBRixDQUFTRCxLQUFoQixDQUFYOztNQUVBLE1BQUtFLFFBQUwsQ0FBYztRQUFFRixLQUFLLEVBQUxBO01BQUYsQ0FBZDs7TUFFQSxJQUFBRyxzQkFBQSxFQUFXLE1BQUtDLEtBQUwsQ0FBV0MsUUFBdEIsRUFBZ0NMLEtBQWhDO0lBQ0QsQ0FwR2E7SUFBQSxzR0FzR00sWUFBTTtNQUN4QixNQUFLRixTQUFMLENBQWVRLEtBQWY7SUFDRCxDQXhHYTtJQUFBLCtGQTBHRCxVQUFBUCxDQUFDLEVBQUk7TUFDaEI7TUFDQSxJQUFJQSxDQUFDLElBQUlBLENBQUMsQ0FBQ0UsTUFBWCxFQUFtQkYsQ0FBQyxDQUFDRSxNQUFGLENBQVNELEtBQVQsR0FBaUIsTUFBS0YsU0FBTCxJQUFrQixNQUFLQSxTQUFM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