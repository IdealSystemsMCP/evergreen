"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = require("ui-box");

var _formField = require("../../form-field");

var _TextInput = _interopRequireDefault(require("./TextInput"));

var _excluded = ["id", "hint", "label", "description", "validationMessage", "inputHeight", "inputWidth", "disabled", "required", "isInvalid", "appearance", "placeholder", "spellCheck"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var idCounter = 0;

var TextInputField = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(TextInputField, _PureComponent);

  var _super = _createSuper(TextInputField);

  function TextInputField() {
    var _this;

    (0, _classCallCheck2["default"])(this, TextInputField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      id: (_this.props.id || idCounter++).toString()
    });
    return _this;
  }

  (0, _createClass2["default"])(TextInputField, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          unusedId = _this$props.id,
          hint = _this$props.hint,
          label = _this$props.label,
          description = _this$props.description,
          validationMessage = _this$props.validationMessage,
          inputHeight = _this$props.inputHeight,
          inputWidth = _this$props.inputWidth,
          disabled = _this$props.disabled,
          required = _this$props.required,
          isInvalid = _this$props.isInvalid,
          appearance = _this$props.appearance,
          placeholder = _this$props.placeholder,
          spellCheck = _this$props.spellCheck,
          props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      var id = "TextInputField-".concat(this.state.id);
      /**
       * Split the wrapper props from the input props.
       */

      var _splitBoxProps = (0, _uiBox.splitBoxProps)(props),
          matchedProps = _splitBoxProps.matchedProps,
          remainingProps = _splitBoxProps.remainingProps;

      return /*#__PURE__*/_react["default"].createElement(_formField.FormField, (0, _extends2["default"])({
        marginBottom: 24,
        label: label,
        isRequired: required,
        hint: hint,
        description: description,
        validationMessage: validationMessage,
        labelFor: id
      }, matchedProps), /*#__PURE__*/_react["default"].createElement(_TextInput["default"], (0, _extends2["default"])({
        id: id,
        width: inputWidth,
        height: inputHeight,
        disabled: disabled,
        required: required,
        isInvalid: isInvalid,
        appearance: appearance,
        placeholder: placeholder,
        spellCheck: spellCheck
      }, remainingProps)));
    }
  }]);
  return TextInputField;
}(_react.PureComponent);

exports["default"] = TextInputField;
TextInputField.displayName = "TextInputField";
(0, _defineProperty2["default"])(TextInputField, "propTypes", _objectSpread(_objectSpread(_objectSpread({}, _TextInput["default"].propTypes), _formField.FormField.propTypes), {}, {
  /**
   * The label used above the input element.
   */
  label: _propTypes["default"].node.isRequired,

  /**
   * Passed on the label as a htmlFor prop.
   */
  labelFor: _propTypes["default"].string,

  /**
   * Whether or not to show an asterix after the label.
   */
  required: _propTypes["default"].bool,

  /**
   * An optional description of the field under the label, above the input element.
   */
  description: _propTypes["default"].node,

  /**
   * An optional hint under the input element.
   */
  hint: _propTypes["default"].node,

  /**
   * If a validation message is passed it is shown under the input element
   * and above the hint. This is unaffected by `isInvalid`.
   */
  validationMessage: _propTypes["default"].node,

  /**
   * The height of the input element.
   */
  inputHeight: _propTypes["default"].number,

  /**
   * The width of the input width.
   */
  inputWidth: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string])
}));
(0, _defineProperty2["default"])(TextInputField, "defaultProps", {
  /**
   * The input width should be as wide as the form field.
   */
  inputWidth: '100%',
  inputHeight: 32
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJpZENvdW50ZXIiLCJUZXh0SW5wdXRGaWVsZCIsImlkIiwicHJvcHMiLCJ0b1N0cmluZyIsInVudXNlZElkIiwiaGludCIsImxhYmVsIiwiZGVzY3JpcHRpb24iLCJ2YWxpZGF0aW9uTWVzc2FnZSIsImlucHV0SGVpZ2h0IiwiaW5wdXRXaWR0aCIsImRpc2FibGVkIiwicmVxdWlyZWQiLCJpc0ludmFsaWQiLCJhcHBlYXJhbmNlIiwicGxhY2Vob2xkZXIiLCJzcGVsbENoZWNrIiwic3RhdGUiLCJzcGxpdEJveFByb3BzIiwibWF0Y2hlZFByb3BzIiwicmVtYWluaW5nUHJvcHMiLCJQdXJlQ29tcG9uZW50IiwiVGV4dElucHV0IiwicHJvcFR5cGVzIiwiRm9ybUZpZWxkIiwiUHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiLCJsYWJlbEZvciIsInN0cmluZyIsImJvb2wiLCJudW1iZXIiLCJvbmVPZlR5cGUiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdGV4dC1pbnB1dC9zcmMvVGV4dElucHV0RmllbGQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IHNwbGl0Qm94UHJvcHMgfSBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyBGb3JtRmllbGQgfSBmcm9tICcuLi8uLi9mb3JtLWZpZWxkJ1xuaW1wb3J0IFRleHRJbnB1dCBmcm9tICcuL1RleHRJbnB1dCdcblxubGV0IGlkQ291bnRlciA9IDBcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dElucHV0RmllbGQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgVGV4dElucHV0IGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICAgKi9cbiAgICAuLi5UZXh0SW5wdXQucHJvcFR5cGVzLFxuICAgIC4uLkZvcm1GaWVsZC5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgdXNlZCBhYm92ZSB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICAgKi9cbiAgICBsYWJlbDogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFBhc3NlZCBvbiB0aGUgbGFiZWwgYXMgYSBodG1sRm9yIHByb3AuXG4gICAgICovXG4gICAgbGFiZWxGb3I6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIG9yIG5vdCB0byBzaG93IGFuIGFzdGVyaXggYWZ0ZXIgdGhlIGxhYmVsLlxuICAgICAqL1xuICAgIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIEFuIG9wdGlvbmFsIGRlc2NyaXB0aW9uIG9mIHRoZSBmaWVsZCB1bmRlciB0aGUgbGFiZWwsIGFib3ZlIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgICAqL1xuICAgIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIEFuIG9wdGlvbmFsIGhpbnQgdW5kZXIgdGhlIGlucHV0IGVsZW1lbnQuXG4gICAgICovXG4gICAgaGludDogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBJZiBhIHZhbGlkYXRpb24gbWVzc2FnZSBpcyBwYXNzZWQgaXQgaXMgc2hvd24gdW5kZXIgdGhlIGlucHV0IGVsZW1lbnRcbiAgICAgKiBhbmQgYWJvdmUgdGhlIGhpbnQuIFRoaXMgaXMgdW5hZmZlY3RlZCBieSBgaXNJbnZhbGlkYC5cbiAgICAgKi9cbiAgICB2YWxpZGF0aW9uTWVzc2FnZTogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgICAqL1xuICAgIGlucHV0SGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHdpZHRoIG9mIHRoZSBpbnB1dCB3aWR0aC5cbiAgICAgKi9cbiAgICBpbnB1dFdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSlcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgLyoqXG4gICAgICogVGhlIGlucHV0IHdpZHRoIHNob3VsZCBiZSBhcyB3aWRlIGFzIHRoZSBmb3JtIGZpZWxkLlxuICAgICAqL1xuICAgIGlucHV0V2lkdGg6ICcxMDAlJyxcbiAgICBpbnB1dEhlaWdodDogMzJcbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIGlkOiAodGhpcy5wcm9wcy5pZCB8fCBpZENvdW50ZXIrKykudG9TdHJpbmcoKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIC8vIFdlIGFyZSB1c2luZyB0aGUgaWQgZnJvbSB0aGUgc3RhdGVcbiAgICAgIGlkOiB1bnVzZWRJZCxcblxuICAgICAgLy8gRm9ybUZpZWxkIHByb3BzXG4gICAgICBoaW50LFxuICAgICAgbGFiZWwsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIHZhbGlkYXRpb25NZXNzYWdlLFxuXG4gICAgICAvLyBUZXh0SW5wdXQgcHJvcHNcbiAgICAgIGlucHV0SGVpZ2h0LFxuICAgICAgaW5wdXRXaWR0aCxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgcmVxdWlyZWQsXG4gICAgICBpc0ludmFsaWQsXG4gICAgICBhcHBlYXJhbmNlLFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICBzcGVsbENoZWNrLFxuXG4gICAgICAvLyBSZXN0IHByb3BzIGFyZSBzcHJlYWQgb24gdGhlIEZvcm1GaWVsZFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgaWQgPSBgVGV4dElucHV0RmllbGQtJHt0aGlzLnN0YXRlLmlkfWBcblxuICAgIC8qKlxuICAgICAqIFNwbGl0IHRoZSB3cmFwcGVyIHByb3BzIGZyb20gdGhlIGlucHV0IHByb3BzLlxuICAgICAqL1xuICAgIGNvbnN0IHsgbWF0Y2hlZFByb3BzLCByZW1haW5pbmdQcm9wcyB9ID0gc3BsaXRCb3hQcm9wcyhwcm9wcylcblxuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybUZpZWxkXG4gICAgICAgIG1hcmdpbkJvdHRvbT17MjR9XG4gICAgICAgIGxhYmVsPXtsYWJlbH1cbiAgICAgICAgaXNSZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAgIGhpbnQ9e2hpbnR9XG4gICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2U9e3ZhbGlkYXRpb25NZXNzYWdlfVxuICAgICAgICBsYWJlbEZvcj17aWR9XG4gICAgICAgIHsuLi5tYXRjaGVkUHJvcHN9XG4gICAgICA+XG4gICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgd2lkdGg9e2lucHV0V2lkdGh9XG4gICAgICAgICAgaGVpZ2h0PXtpbnB1dEhlaWdodH1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxuICAgICAgICAgIGlzSW52YWxpZD17aXNJbnZhbGlkfVxuICAgICAgICAgIGFwcGVhcmFuY2U9e2FwcGVhcmFuY2V9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgIHNwZWxsQ2hlY2s9e3NwZWxsQ2hlY2t9XG4gICAgICAgICAgey4uLnJlbWFpbmluZ1Byb3BzfVxuICAgICAgICAvPlxuICAgICAgPC9Gb3JtRmllbGQ+XG4gICAgKVxuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxTQUFTLEdBQUcsQ0FBaEI7O0lBRXFC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