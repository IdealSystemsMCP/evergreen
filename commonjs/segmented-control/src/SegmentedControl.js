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

var _uiBox = _interopRequireWildcard(require("ui-box"));

var _safeInvoke = _interopRequireDefault(require("../../lib/safe-invoke"));

var _SegmentedControlRadio = _interopRequireDefault(require("./SegmentedControlRadio"));

var _excluded = ["value", "name", "height", "options", "onChange", "defaultValue", "disabled"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var radioCount = 1; // Used for generating unique input names

var SegmentedControl = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(SegmentedControl, _PureComponent);

  var _super = _createSuper(SegmentedControl);

  function SegmentedControl(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, SegmentedControl);
    _this = _super.call(this, props, context);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "isControlled", function () {
      return typeof _this.props.value !== 'undefined' && _this.props.value !== null;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleChange", function (value) {
      // Save a render cycle when it's a controlled input
      if (!_this.isControlled()) {
        _this.setState({
          value: value
        });
      }

      (0, _safeInvoke["default"])(_this.props.onChange, value);
    });
    var _value = props.defaultValue;

    if (typeof _value === 'undefined' || _value === null) {
      _value = props.options[0].value;
    }

    _this.state = {
      value: _value
    };
    _this.name = "SegmentedControl-".concat(radioCount);
    radioCount += 1;
    return _this;
  }

  (0, _createClass2["default"])(SegmentedControl, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          filterOutValue = _this$props.value,
          name = _this$props.name,
          height = _this$props.height,
          options = _this$props.options,
          onChange = _this$props.onChange,
          defaultValue = _this$props.defaultValue,
          disabled = _this$props.disabled,
          props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded); // Allows it to behave like a controlled input

      var value = this.state.value;

      if (this.isControlled()) {
        value = this.props.value;
      }

      return /*#__PURE__*/_react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
        display: "flex",
        marginRight: -1,
        height: height
      }, props), options.map(function (option, index) {
        return /*#__PURE__*/_react["default"].createElement(_SegmentedControlRadio["default"], {
          key: option.value,
          id: _this2.name + index,
          name: name || _this2.name,
          label: option.label,
          value: String(option.value),
          height: height,
          checked: value === option.value,
          onChange: _this2.handleChange.bind(null, option.value),
          appearance: "default",
          isFirstItem: index === 0,
          isLastItem: index === options.length - 1,
          disabled: disabled
        });
      }));
    }
  }]);
  return SegmentedControl;
}(_react.PureComponent);

exports["default"] = SegmentedControl;
SegmentedControl.displayName = "SegmentedControl";
(0, _defineProperty2["default"])(SegmentedControl, "propTypes", _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _uiBox.spacing.propTypes), _uiBox.position.propTypes), _uiBox.layout.propTypes), _uiBox.dimensions.propTypes), {}, {
  /**
   * The options for the radios of the Segmented Control.
   */
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    label: _propTypes["default"].node.isRequired,
    value: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].bool]).isRequired
  })).isRequired,

  /**
   * The current value of the Segmented Control when controlled.
   */
  value: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].bool]),

  /**
   * The default value of the Segmented Control when uncontrolled.
   */
  defaultValue: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].bool]),

  /**
   * Function called when the value changes.
   */
  onChange: _propTypes["default"].func,

  /**
   * The name of the radio group.
   */
  name: _propTypes["default"].string,

  /**
   * The height of the Segmented Control.
   */
  height: _propTypes["default"].number,

  /**
   * When true, the Segmented Control is disabled.
   */
  disabled: _propTypes["default"].bool
}));
(0, _defineProperty2["default"])(SegmentedControl, "defaultProps", {
  height: 32
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyYWRpb0NvdW50IiwiU2VnbWVudGVkQ29udHJvbCIsInByb3BzIiwiY29udGV4dCIsInZhbHVlIiwiaXNDb250cm9sbGVkIiwic2V0U3RhdGUiLCJzYWZlSW52b2tlIiwib25DaGFuZ2UiLCJkZWZhdWx0VmFsdWUiLCJvcHRpb25zIiwic3RhdGUiLCJuYW1lIiwiZmlsdGVyT3V0VmFsdWUiLCJoZWlnaHQiLCJkaXNhYmxlZCIsIm1hcCIsIm9wdGlvbiIsImluZGV4IiwibGFiZWwiLCJTdHJpbmciLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwibGVuZ3RoIiwiUHVyZUNvbXBvbmVudCIsInNwYWNpbmciLCJwcm9wVHlwZXMiLCJwb3NpdGlvbiIsImxheW91dCIsImRpbWVuc2lvbnMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwic2hhcGUiLCJub2RlIiwiaXNSZXF1aXJlZCIsIm9uZU9mVHlwZSIsIm51bWJlciIsInN0cmluZyIsImJvb2wiLCJmdW5jIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NlZ21lbnRlZC1jb250cm9sL3NyYy9TZWdtZW50ZWRDb250cm9sLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94LCB7IHNwYWNpbmcsIHBvc2l0aW9uLCBsYXlvdXQsIGRpbWVuc2lvbnMgfSBmcm9tICd1aS1ib3gnXG5pbXBvcnQgc2FmZUludm9rZSBmcm9tICcuLi8uLi9saWIvc2FmZS1pbnZva2UnXG5pbXBvcnQgU2VnbWVudGVkQ29udHJvbFJhZGlvIGZyb20gJy4vU2VnbWVudGVkQ29udHJvbFJhZGlvJ1xuXG5sZXQgcmFkaW9Db3VudCA9IDEgLy8gVXNlZCBmb3IgZ2VuZXJhdGluZyB1bmlxdWUgaW5wdXQgbmFtZXNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VnbWVudGVkQ29udHJvbCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHNvbWUgQm94IEFQSXMuXG4gICAgICovXG4gICAgLi4uc3BhY2luZy5wcm9wVHlwZXMsXG4gICAgLi4ucG9zaXRpb24ucHJvcFR5cGVzLFxuICAgIC4uLmxheW91dC5wcm9wVHlwZXMsXG4gICAgLi4uZGltZW5zaW9ucy5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9ucyBmb3IgdGhlIHJhZGlvcyBvZiB0aGUgU2VnbWVudGVkIENvbnRyb2wuXG4gICAgICovXG4gICAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBsYWJlbDogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICAgICAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgICBQcm9wVHlwZXMuYm9vbFxuICAgICAgICBdKS5pc1JlcXVpcmVkXG4gICAgICB9KVxuICAgICkuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBTZWdtZW50ZWQgQ29udHJvbCB3aGVuIGNvbnRyb2xsZWQuXG4gICAgICovXG4gICAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBQcm9wVHlwZXMuYm9vbFxuICAgIF0pLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhlIFNlZ21lbnRlZCBDb250cm9sIHdoZW4gdW5jb250cm9sbGVkLlxuICAgICAqL1xuICAgIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIFByb3BUeXBlcy5ib29sXG4gICAgXSksXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiBjYWxsZWQgd2hlbiB0aGUgdmFsdWUgY2hhbmdlcy5cbiAgICAgKi9cbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgcmFkaW8gZ3JvdXAuXG4gICAgICovXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBoZWlnaHQgb2YgdGhlIFNlZ21lbnRlZCBDb250cm9sLlxuICAgICAqL1xuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIFNlZ21lbnRlZCBDb250cm9sIGlzIGRpc2FibGVkLlxuICAgICAqL1xuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBoZWlnaHQ6IDMyXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KVxuXG4gICAgbGV0IHZhbHVlID0gcHJvcHMuZGVmYXVsdFZhbHVlXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gcHJvcHMub3B0aW9uc1swXS52YWx1ZVxuICAgIH1cblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZVxuICAgIH1cblxuICAgIHRoaXMubmFtZSA9IGBTZWdtZW50ZWRDb250cm9sLSR7cmFkaW9Db3VudH1gXG4gICAgcmFkaW9Db3VudCArPSAxXG4gIH1cblxuICBpc0NvbnRyb2xsZWQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLnByb3BzLnZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLnByb3BzLnZhbHVlICE9PSBudWxsXG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSB2YWx1ZSA9PiB7XG4gICAgLy8gU2F2ZSBhIHJlbmRlciBjeWNsZSB3aGVuIGl0J3MgYSBjb250cm9sbGVkIGlucHV0XG4gICAgaWYgKCF0aGlzLmlzQ29udHJvbGxlZCgpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWUgfSlcbiAgICB9XG5cbiAgICBzYWZlSW52b2tlKHRoaXMucHJvcHMub25DaGFuZ2UsIHZhbHVlKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHZhbHVlOiBmaWx0ZXJPdXRWYWx1ZSwgLy8gRmlsdGVyIG91dC5cbiAgICAgIG5hbWUsXG4gICAgICBoZWlnaHQsXG4gICAgICBvcHRpb25zLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBkZWZhdWx0VmFsdWUsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIC8vIEFsbG93cyBpdCB0byBiZWhhdmUgbGlrZSBhIGNvbnRyb2xsZWQgaW5wdXRcbiAgICBsZXQgeyB2YWx1ZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmICh0aGlzLmlzQ29udHJvbGxlZCgpKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMucHJvcHMudmFsdWVcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIG1hcmdpblJpZ2h0PXstMX0gaGVpZ2h0PXtoZWlnaHR9IHsuLi5wcm9wc30+XG4gICAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxTZWdtZW50ZWRDb250cm9sUmFkaW9cbiAgICAgICAgICAgIGtleT17b3B0aW9uLnZhbHVlfVxuICAgICAgICAgICAgaWQ9e3RoaXMubmFtZSArIGluZGV4fVxuICAgICAgICAgICAgbmFtZT17bmFtZSB8fCB0aGlzLm5hbWV9XG4gICAgICAgICAgICBsYWJlbD17b3B0aW9uLmxhYmVsfVxuICAgICAgICAgICAgdmFsdWU9e1N0cmluZyhvcHRpb24udmFsdWUpfVxuICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgICBjaGVja2VkPXt2YWx1ZSA9PT0gb3B0aW9uLnZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQobnVsbCwgb3B0aW9uLnZhbHVlKX1cbiAgICAgICAgICAgIGFwcGVhcmFuY2U9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgIGlzRmlyc3RJdGVtPXtpbmRleCA9PT0gMH1cbiAgICAgICAgICAgIGlzTGFzdEl0ZW09e2luZGV4ID09PSBvcHRpb25zLmxlbmd0aCAtIDF9XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLFVBQVUsR0FBRyxDQUFqQixDLENBQW1COztJQUVFQyxnQjs7Ozs7RUFtRW5CLDBCQUFZQyxLQUFaLEVBQW1CQyxPQUFuQixFQUE0QjtJQUFBOztJQUFBO0lBQzFCLDBCQUFNRCxLQUFOLEVBQWFDLE9BQWI7SUFEMEIsaUdBZ0JiLFlBQU07TUFDbkIsT0FBTyxPQUFPLE1BQUtELEtBQUwsQ0FBV0UsS0FBbEIsS0FBNEIsV0FBNUIsSUFBMkMsTUFBS0YsS0FBTCxDQUFXRSxLQUFYLEtBQXFCLElBQXZFO0lBQ0QsQ0FsQjJCO0lBQUEsaUdBb0JiLFVBQUFBLEtBQUssRUFBSTtNQUN0QjtNQUNBLElBQUksQ0FBQyxNQUFLQyxZQUFMLEVBQUwsRUFBMEI7UUFDeEIsTUFBS0MsUUFBTCxDQUFjO1VBQUVGLEtBQUssRUFBTEE7UUFBRixDQUFkO01B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