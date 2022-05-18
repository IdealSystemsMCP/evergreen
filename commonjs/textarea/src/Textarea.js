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

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _typography = require("../../typography");

var _theme = require("../../theme");

var _excluded = ["theme", "className", "width", "height", "disabled", "required", "isInvalid", "appearance", "placeholder", "spellCheck", "grammarly"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Textarea = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Textarea, _PureComponent);

  var _super = _createSuper(Textarea);

  function Textarea() {
    (0, _classCallCheck2["default"])(this, Textarea);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Textarea, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          className = _this$props.className,
          width = _this$props.width,
          height = _this$props.height,
          disabled = _this$props.disabled,
          required = _this$props.required,
          isInvalid = _this$props.isInvalid,
          appearance = _this$props.appearance,
          placeholder = _this$props.placeholder,
          spellCheck = _this$props.spellCheck,
          grammarly = _this$props.grammarly,
          props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      var themedClassName = theme.getTextareaClassName(appearance);
      return /*#__PURE__*/_react["default"].createElement(_typography.Text, (0, _extends2["default"])({
        is: "textarea",
        className: (0, _classnames["default"])(themedClassName, className),
        size: 400,
        width: width,
        height: height,
        required: required,
        disabled: disabled,
        placeholder: placeholder,
        paddingLeft: Math.round(height / 3.2),
        paddingRight: Math.round(height / 3.2),
        borderRadius: 3,
        spellCheck: spellCheck,
        "aria-invalid": isInvalid,
        "data-gramm_editor": grammarly
      }, disabled ? {
        color: 'muted'
      } : {}, Textarea.styles, props));
    }
  }]);
  return Textarea;
}(_react.PureComponent);

Textarea.displayName = "Textarea";
(0, _defineProperty2["default"])(Textarea, "propTypes", _objectSpread(_objectSpread({}, _typography.Text.propTypes), {}, {
  /**
   * Makes the textarea element required.
   */
  required: _propTypes["default"].bool,

  /**
   * Makes the textarea element disabled.
   */
  disabled: _propTypes["default"].bool,

  /**
   * Sets visual styling of _only_ the text area to be "invalid".
   * Note that this does not effect any `validationMessage`.
   */
  isInvalid: _propTypes["default"].bool,

  /**
   * Use the native spell check functionality of the browser.
   */
  spellCheck: _propTypes["default"].bool,

  /**
   * Allow the Grammarly browser extension to attach to the backing textarea.
   */
  grammarly: _propTypes["default"].bool,

  /**
   * The placeholder text when there is no value present.
   */
  placeholder: _propTypes["default"].string,

  /**
   * The appearance of the TextInput.
   */
  appearance: _propTypes["default"].string,

  /**
   * The width of the TextInput.
   */
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes["default"].object.isRequired,

  /**
   * Class name passed to the button.
   * Only use if you know what you are doing.
   */
  className: _propTypes["default"].string
}));
(0, _defineProperty2["default"])(Textarea, "defaultProps", {
  appearance: 'default',
  width: '100%',
  disabled: false,
  isInvalid: false,
  spellCheck: true,
  grammarly: false
});
(0, _defineProperty2["default"])(Textarea, "styles", {
  minHeight: 80,
  paddingX: 10,
  paddingY: 8
});

var _default = (0, _theme.withTheme)(Textarea);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJUZXh0YXJlYSIsInByb3BzIiwidGhlbWUiLCJjbGFzc05hbWUiLCJ3aWR0aCIsImhlaWdodCIsImRpc2FibGVkIiwicmVxdWlyZWQiLCJpc0ludmFsaWQiLCJhcHBlYXJhbmNlIiwicGxhY2Vob2xkZXIiLCJzcGVsbENoZWNrIiwiZ3JhbW1hcmx5IiwidGhlbWVkQ2xhc3NOYW1lIiwiZ2V0VGV4dGFyZWFDbGFzc05hbWUiLCJjeCIsIk1hdGgiLCJyb3VuZCIsImNvbG9yIiwic3R5bGVzIiwiUHVyZUNvbXBvbmVudCIsIlRleHQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIiwib25lT2ZUeXBlIiwibnVtYmVyIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIm1pbkhlaWdodCIsInBhZGRpbmdYIiwicGFkZGluZ1kiLCJ3aXRoVGhlbWUiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdGV4dGFyZWEvc3JjL1RleHRhcmVhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5cbmNsYXNzIFRleHRhcmVhIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIFRleHQgY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgICAqL1xuICAgIC4uLlRleHQucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogTWFrZXMgdGhlIHRleHRhcmVhIGVsZW1lbnQgcmVxdWlyZWQuXG4gICAgICovXG4gICAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogTWFrZXMgdGhlIHRleHRhcmVhIGVsZW1lbnQgZGlzYWJsZWQuXG4gICAgICovXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB2aXN1YWwgc3R5bGluZyBvZiBfb25seV8gdGhlIHRleHQgYXJlYSB0byBiZSBcImludmFsaWRcIi5cbiAgICAgKiBOb3RlIHRoYXQgdGhpcyBkb2VzIG5vdCBlZmZlY3QgYW55IGB2YWxpZGF0aW9uTWVzc2FnZWAuXG4gICAgICovXG4gICAgaXNJbnZhbGlkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFVzZSB0aGUgbmF0aXZlIHNwZWxsIGNoZWNrIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIGJyb3dzZXIuXG4gICAgICovXG4gICAgc3BlbGxDaGVjazogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBBbGxvdyB0aGUgR3JhbW1hcmx5IGJyb3dzZXIgZXh0ZW5zaW9uIHRvIGF0dGFjaCB0byB0aGUgYmFja2luZyB0ZXh0YXJlYS5cbiAgICAgKi9cbiAgICBncmFtbWFybHk6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHBsYWNlaG9sZGVyIHRleHQgd2hlbiB0aGVyZSBpcyBubyB2YWx1ZSBwcmVzZW50LlxuICAgICAqL1xuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIFRleHRJbnB1dC5cbiAgICAgKi9cbiAgICBhcHBlYXJhbmNlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHdpZHRoIG9mIHRoZSBUZXh0SW5wdXQuXG4gICAgICovXG4gICAgd2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIHByb3ZpZGVkIGJ5IFRoZW1lUHJvdmlkZXIuXG4gICAgICovXG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIENsYXNzIG5hbWUgcGFzc2VkIHRvIHRoZSBidXR0b24uXG4gICAgICogT25seSB1c2UgaWYgeW91IGtub3cgd2hhdCB5b3UgYXJlIGRvaW5nLlxuICAgICAqL1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBhcHBlYXJhbmNlOiAnZGVmYXVsdCcsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgaXNJbnZhbGlkOiBmYWxzZSxcbiAgICBzcGVsbENoZWNrOiB0cnVlLFxuICAgIGdyYW1tYXJseTogZmFsc2VcbiAgfVxuXG4gIHN0YXRpYyBzdHlsZXMgPSB7XG4gICAgbWluSGVpZ2h0OiA4MCxcbiAgICBwYWRkaW5nWDogMTAsXG4gICAgcGFkZGluZ1k6IDhcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0aGVtZSxcbiAgICAgIGNsYXNzTmFtZSxcblxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIHJlcXVpcmVkLFxuICAgICAgaXNJbnZhbGlkLFxuICAgICAgYXBwZWFyYW5jZSxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgc3BlbGxDaGVjayxcbiAgICAgIGdyYW1tYXJseSxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB0aGVtZWRDbGFzc05hbWUgPSB0aGVtZS5nZXRUZXh0YXJlYUNsYXNzTmFtZShhcHBlYXJhbmNlKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUZXh0XG4gICAgICAgIGlzPVwidGV4dGFyZWFcIlxuICAgICAgICBjbGFzc05hbWU9e2N4KHRoZW1lZENsYXNzTmFtZSwgY2xhc3NOYW1lKX1cbiAgICAgICAgc2l6ZT17NDAwfVxuICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICBwYWRkaW5nTGVmdD17TWF0aC5yb3VuZChoZWlnaHQgLyAzLjIpfVxuICAgICAgICBwYWRkaW5nUmlnaHQ9e01hdGgucm91bmQoaGVpZ2h0IC8gMy4yKX1cbiAgICAgICAgYm9yZGVyUmFkaXVzPXszfVxuICAgICAgICBzcGVsbENoZWNrPXtzcGVsbENoZWNrfVxuICAgICAgICBhcmlhLWludmFsaWQ9e2lzSW52YWxpZH1cbiAgICAgICAgZGF0YS1ncmFtbV9lZGl0b3I9e2dyYW1tYXJseX1cbiAgICAgICAgey4uLihkaXNhYmxlZCA/IHsgY29sb3I6ICdtdXRlZCcgfSA6IHt9KX1cbiAgICAgICAgey4uLlRleHRhcmVhLnN0eWxlc31cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKFRleHRhcmVhKVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxROzs7Ozs7Ozs7Ozs7V0EyRUosa0JBQVM7TUFDUCxrQkFjSSxLQUFLQyxLQWRUO01BQUEsSUFDRUMsS0FERixlQUNFQSxLQURGO01BQUEsSUFFRUMsU0FGRixlQUVFQSxTQUZGO01BQUEsSUFJRUMsS0FKRixlQUlFQSxLQUpGO01BQUEsSUFLRUMsTUFMRixlQUtFQSxNQUxGO01BQUEsSUFNRUMsUUFORixlQU1FQSxRQU5GO01BQUEsSUFPRUMsUUFQRixlQU9FQSxRQVBGO01BQUEsSUFRRUMsU0FSRixlQVFFQSxT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