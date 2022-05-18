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

var _uiBox = _interopRequireWildcard(require("ui-box"));

var _typography = require("../../typography");

var _icon = require("../../icon");

var _theme = require("../../theme");

var _excluded = ["theme", "id", "name", "height", "children", "defaultValue", "disabled", "onChange", "value", "required", "autoFocus", "isInvalid", "appearance"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Select = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Select, _PureComponent);

  var _super = _createSuper(Select);

  function Select() {
    (0, _classCallCheck2["default"])(this, Select);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Select, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          id = _this$props.id,
          name = _this$props.name,
          height = _this$props.height,
          children = _this$props.children,
          defaultValue = _this$props.defaultValue,
          disabled = _this$props.disabled,
          onChange = _this$props.onChange,
          value = _this$props.value,
          required = _this$props.required,
          autoFocus = _this$props.autoFocus,
          isInvalid = _this$props.isInvalid,
          appearance = _this$props.appearance,
          props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      var themedClassName = theme.getSelectClassName(appearance);
      var textSize = theme.getTextSizeForControlHeight(height);
      var borderRadius = theme.getBorderRadiusForControlHeight(height);
      var iconSize = theme.getIconSizeForSelect(height);
      var iconMargin = height >= 36 ? 12 : 8;
      return /*#__PURE__*/_react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
        display: "inline-flex",
        flex: 1,
        position: "relative",
        width: "auto",
        height: height
      }, props), /*#__PURE__*/_react["default"].createElement(_typography.Text, {
        is: "select",
        className: themedClassName,
        id: id,
        name: name,
        onChange: onChange,
        defaultValue: defaultValue,
        value: value,
        required: required,
        autoFocus: autoFocus,
        disabled: disabled,
        "aria-invalid": String(isInvalid),
        size: textSize,
        borderRadius: borderRadius,
        textTransform: "default",
        paddingLeft: Math.round(height / 3.2) // Provide enough space for auto-sizing select including the icon
        ,
        paddingRight: iconMargin * 2 + iconSize
      }, children), /*#__PURE__*/_react["default"].createElement(_icon.Icon, {
        icon: "caret-down",
        color: "default",
        size: iconSize,
        position: "absolute",
        top: "50%",
        marginTop: -iconSize / 2,
        right: iconMargin,
        pointerEvents: "none"
      }));
    }
  }]);
  return Select;
}(_react.PureComponent);

Select.displayName = "Select";
(0, _defineProperty2["default"])(Select, "propTypes", _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _uiBox.dimensions.propTypes), _uiBox.spacing.propTypes), _uiBox.position.propTypes), _uiBox.layout.propTypes), {}, {
  /**
   * The id attribute for the select.
   */
  id: _propTypes["default"].string,

  /**
   * The name attribute for the select.
   */
  name: _propTypes["default"].string,

  /**
   * The options that are passed to the select.
   */
  children: _propTypes["default"].node,

  /**
   * The initial value of an uncontrolled select
   */
  defaultValue: _propTypes["default"].any,

  /**
   * Function called when value changes.
   */
  onChange: _propTypes["default"].func,

  /**
   * The value of the select.
   */
  value: _propTypes["default"].any,

  /**
   * When true, the select is required.
   */
  required: _propTypes["default"].bool,

  /**
   * When true, the select should auto focus.
   */
  autoFocus: _propTypes["default"].bool,

  /**
   * When true, the select is invalid.
   */
  isInvalid: _propTypes["default"].bool,

  /**
   * The appearance of the select. The default theme only supports default.
   */
  appearance: _propTypes["default"].string.isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes["default"].object.isRequired
}));
(0, _defineProperty2["default"])(Select, "defaultProps", {
  appearance: 'default',
  height: 32,
  isInvalid: false
});

var _default = (0, _theme.withTheme)(Select);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTZWxlY3QiLCJwcm9wcyIsInRoZW1lIiwiaWQiLCJuYW1lIiwiaGVpZ2h0IiwiY2hpbGRyZW4iLCJkZWZhdWx0VmFsdWUiLCJkaXNhYmxlZCIsIm9uQ2hhbmdlIiwidmFsdWUiLCJyZXF1aXJlZCIsImF1dG9Gb2N1cyIsImlzSW52YWxpZCIsImFwcGVhcmFuY2UiLCJ0aGVtZWRDbGFzc05hbWUiLCJnZXRTZWxlY3RDbGFzc05hbWUiLCJ0ZXh0U2l6ZSIsImdldFRleHRTaXplRm9yQ29udHJvbEhlaWdodCIsImJvcmRlclJhZGl1cyIsImdldEJvcmRlclJhZGl1c0ZvckNvbnRyb2xIZWlnaHQiLCJpY29uU2l6ZSIsImdldEljb25TaXplRm9yU2VsZWN0IiwiaWNvbk1hcmdpbiIsIlN0cmluZyIsIk1hdGgiLCJyb3VuZCIsIlB1cmVDb21wb25lbnQiLCJkaW1lbnNpb25zIiwicHJvcFR5cGVzIiwic3BhY2luZyIsInBvc2l0aW9uIiwibGF5b3V0IiwiUHJvcFR5cGVzIiwic3RyaW5nIiwibm9kZSIsImFueSIsImZ1bmMiLCJib29sIiwiaXNSZXF1aXJlZCIsIm9iamVjdCIsIndpdGhUaGVtZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWxlY3Qvc3JjL1NlbGVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJveCwgeyBkaW1lbnNpb25zLCBzcGFjaW5nLCBwb3NpdGlvbiwgbGF5b3V0IH0gZnJvbSAndWktYm94J1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi4vLi4vaWNvbidcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuXG5jbGFzcyBTZWxlY3QgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgZGltZW5zaW9ucyBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmUuXG4gICAgICovXG4gICAgLi4uZGltZW5zaW9ucy5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgc3BhY2luZyBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmUuXG4gICAgICovXG4gICAgLi4uc3BhY2luZy5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgcG9zaXRpb24gc3BlYyBmcm9tIHRoZSBCb3ggcHJpbWl0aXZlLlxuICAgICAqL1xuICAgIC4uLnBvc2l0aW9uLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBsYXlvdXQgc3BlYyBmcm9tIHRoZSBCb3ggcHJpbWl0aXZlLlxuICAgICAqL1xuICAgIC4uLmxheW91dC5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaWQgYXR0cmlidXRlIGZvciB0aGUgc2VsZWN0LlxuICAgICAqL1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIG5hbWUgYXR0cmlidXRlIGZvciB0aGUgc2VsZWN0LlxuICAgICAqL1xuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9ucyB0aGF0IGFyZSBwYXNzZWQgdG8gdGhlIHNlbGVjdC5cbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5pdGlhbCB2YWx1ZSBvZiBhbiB1bmNvbnRyb2xsZWQgc2VsZWN0XG4gICAgICovXG4gICAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuYW55LFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gY2FsbGVkIHdoZW4gdmFsdWUgY2hhbmdlcy5cbiAgICAgKi9cbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmFsdWUgb2YgdGhlIHNlbGVjdC5cbiAgICAgKi9cbiAgICB2YWx1ZTogUHJvcFR5cGVzLmFueSxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIHNlbGVjdCBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBzZWxlY3Qgc2hvdWxkIGF1dG8gZm9jdXMuXG4gICAgICovXG4gICAgYXV0b0ZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIHNlbGVjdCBpcyBpbnZhbGlkLlxuICAgICAqL1xuICAgIGlzSW52YWxpZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYXBwZWFyYW5jZSBvZiB0aGUgc2VsZWN0LiBUaGUgZGVmYXVsdCB0aGVtZSBvbmx5IHN1cHBvcnRzIGRlZmF1bHQuXG4gICAgICovXG4gICAgYXBwZWFyYW5jZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGFwcGVhcmFuY2U6ICdkZWZhdWx0JyxcbiAgICBoZWlnaHQ6IDMyLFxuICAgIGlzSW52YWxpZDogZmFsc2VcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0aGVtZSxcblxuICAgICAgaWQsXG4gICAgICBuYW1lLFxuICAgICAgaGVpZ2h0LFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBkZWZhdWx0VmFsdWUsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgdmFsdWUsXG4gICAgICByZXF1aXJlZCxcbiAgICAgIGF1dG9Gb2N1cyxcbiAgICAgIGlzSW52YWxpZCxcbiAgICAgIGFwcGVhcmFuY2UsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB0aGVtZWRDbGFzc05hbWUgPSB0aGVtZS5nZXRTZWxlY3RDbGFzc05hbWUoYXBwZWFyYW5jZSlcbiAgICBjb25zdCB0ZXh0U2l6ZSA9IHRoZW1lLmdldFRleHRTaXplRm9yQ29udHJvbEhlaWdodChoZWlnaHQpXG4gICAgY29uc3QgYm9yZGVyUmFkaXVzID0gdGhlbWUuZ2V0Qm9yZGVyUmFkaXVzRm9yQ29udHJvbEhlaWdodChoZWlnaHQpXG4gICAgY29uc3QgaWNvblNpemUgPSB0aGVtZS5nZXRJY29uU2l6ZUZvclNlbGVjdChoZWlnaHQpXG4gICAgY29uc3QgaWNvbk1hcmdpbiA9IGhlaWdodCA+PSAzNiA/IDEyIDogOFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3hcbiAgICAgICAgZGlzcGxheT1cImlubGluZS1mbGV4XCJcbiAgICAgICAgZmxleD17MX1cbiAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICAgIHdpZHRoPVwiYXV0b1wiXG4gICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIDxUZXh0XG4gICAgICAgICAgaXM9XCJzZWxlY3RcIlxuICAgICAgICAgIGNsYXNzTmFtZT17dGhlbWVkQ2xhc3NOYW1lfVxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RlZmF1bHRWYWx1ZX1cbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxuICAgICAgICAgIGF1dG9Gb2N1cz17YXV0b0ZvY3VzfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBhcmlhLWludmFsaWQ9e1N0cmluZyhpc0ludmFsaWQpfVxuICAgICAgICAgIHNpemU9e3RleHRTaXplfVxuICAgICAgICAgIGJvcmRlclJhZGl1cz17Ym9yZGVyUmFkaXVzfVxuICAgICAgICAgIHRleHRUcmFuc2Zvcm09XCJkZWZhdWx0XCJcbiAgICAgICAgICBwYWRkaW5nTGVmdD17TWF0aC5yb3VuZChoZWlnaHQgLyAzLjIpfVxuICAgICAgICAgIC8vIFByb3ZpZGUgZW5vdWdoIHNwYWNlIGZvciBhdXRvLXNpemluZyBzZWxlY3QgaW5jbHVkaW5nIHRoZSBpY29uXG4gICAgICAgICAgcGFkZGluZ1JpZ2h0PXtpY29uTWFyZ2luICogMiArIGljb25TaXplfVxuICAgICAgICA+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxJY29uXG4gICAgICAgICAgaWNvbj1cImNhcmV0LWRvd25cIlxuICAgICAgICAgIGNvbG9yPVwiZGVmYXVsdFwiXG4gICAgICAgICAgc2l6ZT17aWNvblNpemV9XG4gICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICAgICAgdG9wPVwiNTAlXCJcbiAgICAgICAgICBtYXJnaW5Ub3A9ey1pY29uU2l6ZSAvIDJ9XG4gICAgICAgICAgcmlnaHQ9e2ljb25NYXJnaW59XG4gICAgICAgICAgcG9pbnRlckV2ZW50cz1cIm5vbmVcIlxuICAgICAgICAvPlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShTZWxlY3QpXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLE07Ozs7Ozs7Ozs7OztXQW9GSixrQkFBUztNQUNQLGtCQWdCSSxLQUFLQyxLQWhCVDtNQUFBLElBQ0VDLEtBREYsZUFDRUEsS0FERjtNQUFBLElBR0VDLEVBSEYsZUFHRUEsRUFIRjtNQUFBLElBSUVDLElBSkYsZUFJRUEsSUFKRjtNQUFBLElBS0VDLE1BTEYsZUFLRUEsTUFMRjtNQUFBLElBTUVDLFFBTkYsZUFNRUEsUUFORjtNQUFBLElBT0VDLFlBUEYsZUFPRUEsWUFQRjtNQUFBLElBUUVDLFFBUkYsZUFRRUEsUUFSRjtNQUFBLElBU0VDLFFBVEYsZUFTRUEsUUFURjtNQUFBLElBVUVDLEtBVkYsZUFVRUEsS0FWRjtNQUFBLElBV0VDLFFBWEYsZUFXRUEsUUFYRjtNQUFBLElBWUVDLFNBWkYsZUFZRUEsU0FaRjtNQUFBLElBYUVDLFNBYkYsZUFhRUEsU0FiRjtNQUFBLElBY0VDLFVBZEYsZUFjRUEsVUFkRjtNQUFBLElBZUtiLEtBZkw7TUFrQkEsSUFBTWMsZUFBZSxHQUFHYixLQUFLLENBQUNjLGtCQUFOLENBQXlCRixVQUF6QixDQUF4QjtNQUNBLElBQU1HLFFBQVEsR0FBR2YsS0FBSyxDQUFDZ0IsMkJBQU4sQ0FBa0NiLE1BQWxDLENBQWpCO01BQ0EsSUFBTWMsWUFBWSxHQUFHakIsS0FBSyxDQUFDa0IsK0JBQU4sQ0FBc0NmLE1BQXRDLENBQXJCO01BQ0EsSUFBTWdCLFFBQVEsR0FBR25CLEtBQUssQ0FBQ29CLG9CQUFOLENBQTJCakIsTUFBM0IsQ0FBakI7TUFDQSxJQUFNa0IsVUFBVSxHQUFHbEIsTUFBTSxJQUFJLEVBQVYsR0FBZSxFQUFmLEdBQW9CLENBQXZDO01BRUEsb0JBQ0UsZ0NBQUMsaUJBQUQ7UUFDRSxPQUFPLEVBQUMsYUFEVjtRQUVFLElBQUksRUFBRSxDQUZSO1FBR0UsUUFBUSxFQUFDLFVBSFg7UUFJRSxLQUFLLEVBQUMsTUFKUjtRQUtFLE1BQU0sRUFBRUE7TUFMVixHQU1NSixLQU5OLGdCQVFFLGdDQUFDLGdCQUFEO1FBQ0UsRUFBRSxFQUFDLFFBREw7UUFFRSxTQUFTLEVBQUVjLGVBRmI7UUFHRSxFQUFFLEVBQUVaLEVBSE47UUFJRSxJQUFJLEVBQUVDLElBSlI7UUFLRSxRQUFRLEVBQUVLLFFBTFo7UUFNRSxZQUFZLEVBQUVGLFlBTmhCO1FBT0UsS0FBSyxFQUFFRyxLQVBUO1FBUUUsUUFBUSxFQUFFQyxRQVJaO1FBU0UsU0FBUyxFQUFFQyxTQVRiO1FBVUUsUUFBUSxFQUFFSixRQVZaO1FBV0UsZ0JBQWNnQixNQUFNLENBQUNYLFNBQUQsQ0FYdEI7UUFZRSxJQUFJLEVBQUVJLFFBWlI7UUFhRSxZQUFZLEVBQUVFLFlBYmhCO1FBY0UsYUFBYSxFQUFDLFNBZGhCO1FBZUUsV0FBVyxFQUFFTSxJQUFJLENBQUNDLEtBQUwsQ0FBV3JCLE1BQU0sR0FBRyxHQUFwQixDQWZmLENBZ0JFO1FBaEJGO1FBaUJFLFlBQVksRUFBRWtCLFVBQVUsR0FBRyxDQUFiLEdBQWlCRjtNQWpCakMsR0FtQkdmLFFBbkJILENBUkYsZUE2QkUsZ0NBQUMsVUFBRDtRQUNFLElBQUksRUFBQyxZQURQO1FBRUUsS0FBSyxFQUFDLFNBRlI7UUFHRSxJQUFJLEVBQUVlLFFBSFI7UUFJRSxRQUFRLEVBQUMsVUFKWDtRQUtFLEdBQUcsRUFBQyxLQUxOO1FBTUUsU0FBUyxFQUFFLENBQUNBLFFBQUQsR0FBWSxDQU56QjtRQU9FLEtBQUssRUFBRUUsVUFQVDtRQVFFLGFBQWEsRUFBQztNQVJoQixFQTdCRixDQURGO0lBMENEOzs7RUF2SmtCSSxvQjs7QUFBZjNCLE07aUNBQUFBLE0seUZBS0M0QixpQkFBQSxDQUFXQyxTLEdBS1hDLGNBQUEsQ0FBUUQsUyxHQUtSRSxlQUFBLENBQVNGLFMsR0FLVEcsYUFBQSxDQUFPSCxTO0VBRVY7QUFDSjtBQUNBO0VBQ0kxQixFQUFFLEVBQUU4QixxQkFBQSxDQUFVQyxNOztFQUVkO0FBQ0o7QUFDQTtFQUNJOUIsSUFBSSxFQUFFNkIscUJBQUEsQ0FBVUMsTTs7RUFFaEI7QUFDSjtBQUNBO0VBQ0k1QixRQUFRLEVBQUUyQixxQkFBQSxDQUFVRSxJOztFQUVwQjtBQUNKO0FBQ0E7RUFDSTVCLFlBQVksRUFBRTBCLHFCQUFBLENBQVVHLEc7O0VBRXhCO0FBQ0o7QUFDQTtFQUNJM0IsUUFBUSxFQUFFd0IscUJBQUEsQ0FBVUksSTs7RUFFcEI7QUFDSjtBQUNBO0VBQ0kzQixLQUFLLEVBQUV1QixxQkFBQSxDQUFVRyxHOztFQUVqQjtBQUNKO0FBQ0E7RUFDSXpCLFFBQVEsRUFBRXNCLHFCQUFBLENBQVVLLEk7O0VBRXBCO0FBQ0o7QUFDQTtFQUNJMUIsU0FBUyxFQUFFcUIscUJBQUEsQ0FBVUssSTs7RUFFckI7QUFDSjtBQUNBO0VBQ0l6QixTQUFTLEVBQUVvQixxQkFBQSxDQUFVSyxJOztFQUVyQjtBQUNKO0FBQ0E7RUFDSXhCLFVBQVUsRUFBRW1CLHFCQUFBLENBQVVDLE1BQVYsQ0FBaUJLLFU7O0VBRTdCO0FBQ0o7QUFDQTtFQUNJckMsS0FBSyxFQUFFK0IscUJBQUEsQ0FBVU8sTUFBVixDQUFpQkQ7O2lDQTNFdEJ2QyxNLGtCQThFa0I7RUFDcEJjLFVBQVUsRUFBRSxTQURRO0VBRXBCVCxNQUFNLEVBQUUsRUFGWTtFQUdwQlEsU0FBUyxFQUFFO0FBSFMsQzs7ZUE0RVQsSUFBQTRCLGdCQUFBLEVBQVV6QyxNQUFWLEMifQ==