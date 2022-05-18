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

var _excluded = ["theme", "className", "width", "height", "disabled", "required", "isInvalid", "appearance", "placeholder", "spellCheck"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var TextInput = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(TextInput, _PureComponent);

  var _super = _createSuper(TextInput);

  function TextInput() {
    (0, _classCallCheck2["default"])(this, TextInput);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(TextInput, [{
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
          props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      var themedClassName = theme.getTextInputClassName(appearance);
      var textSize = theme.getTextSizeForControlHeight(height);
      var borderRadius = theme.getBorderRadiusForControlHeight(height);
      return /*#__PURE__*/_react["default"].createElement(_typography.Text, (0, _extends2["default"])({
        is: "input",
        className: (0, _classnames["default"])(themedClassName, className),
        type: "text",
        size: textSize,
        width: width,
        height: height,
        required: required,
        disabled: disabled,
        placeholder: placeholder,
        paddingLeft: Math.round(height / 3.2),
        paddingRight: Math.round(height / 3.2),
        borderRadius: borderRadius,
        spellCheck: spellCheck,
        "aria-invalid": isInvalid
      }, disabled ? {
        color: 'muted'
      } : {}, props));
    }
  }]);
  return TextInput;
}(_react.PureComponent);

TextInput.displayName = "TextInput";
(0, _defineProperty2["default"])(TextInput, "propTypes", _objectSpread(_objectSpread({}, _typography.Text.propTypes), {}, {
  /**
   * Makes the input element required.
   */
  required: _propTypes["default"].bool,

  /**
   * Makes the input element disabled.
   */
  disabled: _propTypes["default"].bool,

  /**
   * Sets visual styling of _only_ the text input to be "invalid".
   * Note that this does not effect any `validationMessage`.
   */
  isInvalid: _propTypes["default"].bool,

  /**
   * Use the native spell check functionality of the browser.
   */
  spellCheck: _propTypes["default"].bool,

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
(0, _defineProperty2["default"])(TextInput, "defaultProps", {
  appearance: 'default',
  height: 32,
  width: 280,
  disabled: false,
  isInvalid: false,
  spellCheck: true
});

var _default = (0, _theme.withTheme)(TextInput);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJUZXh0SW5wdXQiLCJwcm9wcyIsInRoZW1lIiwiY2xhc3NOYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJkaXNhYmxlZCIsInJlcXVpcmVkIiwiaXNJbnZhbGlkIiwiYXBwZWFyYW5jZSIsInBsYWNlaG9sZGVyIiwic3BlbGxDaGVjayIsInRoZW1lZENsYXNzTmFtZSIsImdldFRleHRJbnB1dENsYXNzTmFtZSIsInRleHRTaXplIiwiZ2V0VGV4dFNpemVGb3JDb250cm9sSGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiZ2V0Qm9yZGVyUmFkaXVzRm9yQ29udHJvbEhlaWdodCIsImN4IiwiTWF0aCIsInJvdW5kIiwiY29sb3IiLCJQdXJlQ29tcG9uZW50IiwiVGV4dCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJzdHJpbmciLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwid2l0aFRoZW1lIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3RleHQtaW5wdXQvc3JjL1RleHRJbnB1dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuXG5jbGFzcyBUZXh0SW5wdXQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgVGV4dCBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAgICovXG4gICAgLi4uVGV4dC5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBNYWtlcyB0aGUgaW5wdXQgZWxlbWVudCByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBNYWtlcyB0aGUgaW5wdXQgZWxlbWVudCBkaXNhYmxlZC5cbiAgICAgKi9cbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHZpc3VhbCBzdHlsaW5nIG9mIF9vbmx5XyB0aGUgdGV4dCBpbnB1dCB0byBiZSBcImludmFsaWRcIi5cbiAgICAgKiBOb3RlIHRoYXQgdGhpcyBkb2VzIG5vdCBlZmZlY3QgYW55IGB2YWxpZGF0aW9uTWVzc2FnZWAuXG4gICAgICovXG4gICAgaXNJbnZhbGlkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFVzZSB0aGUgbmF0aXZlIHNwZWxsIGNoZWNrIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIGJyb3dzZXIuXG4gICAgICovXG4gICAgc3BlbGxDaGVjazogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgcGxhY2Vob2xkZXIgdGV4dCB3aGVuIHRoZXJlIGlzIG5vIHZhbHVlIHByZXNlbnQuXG4gICAgICovXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYXBwZWFyYW5jZSBvZiB0aGUgVGV4dElucHV0LlxuICAgICAqL1xuICAgIGFwcGVhcmFuY2U6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgd2lkdGggb2YgdGhlIFRleHRJbnB1dC5cbiAgICAgKi9cbiAgICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogQ2xhc3MgbmFtZSBwYXNzZWQgdG8gdGhlIGJ1dHRvbi5cbiAgICAgKiBPbmx5IHVzZSBpZiB5b3Uga25vdyB3aGF0IHlvdSBhcmUgZG9pbmcuXG4gICAgICovXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGFwcGVhcmFuY2U6ICdkZWZhdWx0JyxcbiAgICBoZWlnaHQ6IDMyLFxuICAgIHdpZHRoOiAyODAsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGlzSW52YWxpZDogZmFsc2UsXG4gICAgc3BlbGxDaGVjazogdHJ1ZVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRoZW1lLFxuICAgICAgY2xhc3NOYW1lLFxuXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgcmVxdWlyZWQsXG4gICAgICBpc0ludmFsaWQsXG4gICAgICBhcHBlYXJhbmNlLFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICBzcGVsbENoZWNrLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHRoZW1lZENsYXNzTmFtZSA9IHRoZW1lLmdldFRleHRJbnB1dENsYXNzTmFtZShhcHBlYXJhbmNlKVxuICAgIGNvbnN0IHRleHRTaXplID0gdGhlbWUuZ2V0VGV4dFNpemVGb3JDb250cm9sSGVpZ2h0KGhlaWdodClcbiAgICBjb25zdCBib3JkZXJSYWRpdXMgPSB0aGVtZS5nZXRCb3JkZXJSYWRpdXNGb3JDb250cm9sSGVpZ2h0KGhlaWdodClcblxuICAgIHJldHVybiAoXG4gICAgICA8VGV4dFxuICAgICAgICBpcz1cImlucHV0XCJcbiAgICAgICAgY2xhc3NOYW1lPXtjeCh0aGVtZWRDbGFzc05hbWUsIGNsYXNzTmFtZSl9XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgc2l6ZT17dGV4dFNpemV9XG4gICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgIHBhZGRpbmdMZWZ0PXtNYXRoLnJvdW5kKGhlaWdodCAvIDMuMil9XG4gICAgICAgIHBhZGRpbmdSaWdodD17TWF0aC5yb3VuZChoZWlnaHQgLyAzLjIpfVxuICAgICAgICBib3JkZXJSYWRpdXM9e2JvcmRlclJhZGl1c31cbiAgICAgICAgc3BlbGxDaGVjaz17c3BlbGxDaGVja31cbiAgICAgICAgYXJpYS1pbnZhbGlkPXtpc0ludmFsaWR9XG4gICAgICAgIHsuLi4oZGlzYWJsZWQgPyB7IGNvbG9yOiAnbXV0ZWQnIH0gOiB7fSl9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShUZXh0SW5wdXQpXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFM7Ozs7Ozs7Ozs7OztXQWdFSixrQkFBUztNQUNQLGtCQWFJLEtBQUtDLEtBYlQ7TUFBQSxJQUNFQyxLQURGLGVBQ0VBLEtBREY7TUFBQSxJQUVFQyxTQUZGLGVBRUVBLFNBRkY7TUFBQSxJQUlFQyxLQUpGLGVBSUVBLEtBSkY7TUFBQSxJQUtFQyxNQUxGLGVBS0VBLE1BTEY7TUFBQSxJQU1FQyxRQU5GLGVBTUVBLFFBTkY7TUFBQSxJQU9FQyxRQVBGLGVBT0VBLFFBUEY7TUFBQSxJQVFFQyxTQVJGLGVBUUVBLFNBUkY7TUFBQSxJQVNFQyxVQVRGLGVBU0VBLFVBVEY7TUFBQSxJQVVFQyxXQVZGLGVBVUVBLFdBVkY7TUFBQSxJQVdFQyxVQVhGLGVBV0VBLFVBWEY7TUFBQSxJQVlLVixLQVpMO01BY0EsSUFBTVcsZUFBZSxHQUFHVixLQUFLLENBQUNXLHFCQUFOLENBQTRCSixVQUE1QixDQUF4QjtNQUNBLElBQU1LLFFBQVEsR0FBR1osS0FBSyxDQUFDYSwyQkFBTixDQUFrQ1YsTUFBbEMsQ0FBakI7TUFDQSxJQUFNVyxZQUFZLEdBQUdkLEtBQUssQ0FBQ2UsK0JBQU4sQ0FBc0NaLE1BQXRDLENBQXJCO01BRUEsb0JBQ0UsZ0NBQUMsZ0JBQUQ7UUFDRSxFQUFFLEVBQUMsT0FETDtRQUVFLFNBQVMsRUFBRSxJQUFBYSxzQkFBQSxFQUFHTixlQUFILEVBQW9CVCxTQUFwQixDQUZiO1FBR0UsSUFBSSxFQUFDLE1BSFA7UUFJRSxJQUFJLEVBQUVXLFFBSlI7UUFLRSxLQUFLLEVBQUVWLEtBTFQ7UUFNRSxNQUFNLEVBQUVDLE1BTlY7UUFPRSxRQUFRLEVBQUVFLFFBUFo7UUFRRSxRQUFRLEVBQUVELFFBUlo7UUFTRSxXQUFXLEVBQUVJLFdBVGY7UUFVRSxXQUFXLEVBQUVTLElBQUksQ0FBQ0MsS0FBTCxDQUFXZixNQUFNLEdBQUcsR0FBcEIsQ0FWZjtRQVdFLFlBQVksRUFBRWMsSUFBSSxDQUFDQyxLQUFMLENBQVdmLE1BQU0sR0FBRyxHQUFwQixDQVhoQjtRQVlFLFlBQVksRUFBRVcsWUFaaEI7UUFhRSxVQUFVLEVBQUVMLFVBYmQ7UUFjRSxnQkFBY0g7TUFkaEIsR0FlT0YsUUFBUSxHQUFHO1FBQUVlLEtBQUssRUFBRTtNQUFULENBQUgsR0FBd0IsRUFmdkMsRUFnQk1wQixLQWhCTixFQURGO0lBb0JEOzs7RUF2R3FCcUIsb0I7O0FBQWxCdEIsUztpQ0FBQUEsUywrQ0FLQ3VCLGdCQUFBLENBQUtDLFM7RUFFUjtBQUNKO0FBQ0E7RUFDSWpCLFFBQVEsRUFBRWtCLHFCQUFBLENBQVVDLEk7O0VBRXBCO0FBQ0o7QUFDQTtFQUNJcEIsUUFBUSxFQUFFbUIscUJBQUEsQ0FBVUMsSTs7RUFFcEI7QUFDSjtBQUNBO0FBQ0E7RUFDSWxCLFNBQVMsRUFBRWlCLHFCQUFBLENBQVVDLEk7O0VBRXJCO0FBQ0o7QUFDQTtFQUNJZixVQUFVLEVBQUVjLHFCQUFBLENBQVVDLEk7O0VBRXRCO0FBQ0o7QUFDQTtFQUNJaEIsV0FBVyxFQUFFZSxxQkFBQSxDQUFVRSxNOztFQUV2QjtBQUNKO0FBQ0E7RUFDSWxCLFVBQVUsRUFBRWdCLHFCQUFBLENBQVVFLE07O0VBRXRCO0FBQ0o7QUFDQTtFQUNJdkIsS0FBSyxFQUFFcUIscUJBQUEsQ0FBVUcsU0FBVixDQUFvQixDQUFDSCxxQkFBQSxDQUFVRSxNQUFYLEVBQW1CRixxQkFBQSxDQUFVSSxNQUE3QixDQUFwQixDOztFQUVQO0FBQ0o7QUFDQTtFQUNJM0IsS0FBSyxFQUFFdUIscUJBQUEsQ0FBVUssTUFBVixDQUFpQkMsVTs7RUFFeEI7QUFDSjtBQUNBO0FBQ0E7RUFDSTVCLFNBQVMsRUFBRXNCLHFCQUFBLENBQVVFOztpQ0FwRG5CM0IsUyxrQkF1RGtCO0VBQ3BCUyxVQUFVLEVBQUUsU0FEUTtFQUVwQkosTUFBTSxFQUFFLEVBRlk7RUFHcEJELEtBQUssRUFBRSxHQUhhO0VBSXBCRSxRQUFRLEVBQUUsS0FKVTtFQUtwQkUsU0FBUyxFQUFFLEtBTFM7RUFNcEJHLFVBQVUsRUFBRTtBQU5RLEM7O2VBbURULElBQUFxQixnQkFBQSxFQUFVaEMsU0FBVixDIn0=