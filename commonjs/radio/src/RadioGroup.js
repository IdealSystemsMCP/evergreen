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

var _layers = require("../../layers");

var _typography = require("../../typography");

var _Radio = _interopRequireDefault(require("./Radio"));

var _excluded = ["size", "label", "defaultValue", "value", "options", "onChange", "isRequired"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var radioCount = 1; // Used for generating unique input names

var RadioGroup = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(RadioGroup, _PureComponent);

  var _super = _createSuper(RadioGroup);

  function RadioGroup(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, RadioGroup);
    _this = _super.call(this, props, context);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleChange", function (event) {
      var value = event.target.value; // Save a render cycle when it's a controlled input

      if (!_this.props.value) {
        _this.setState({
          value: value
        });
      }

      if (_this.props.onChange) {
        _this.props.onChange(value);
      }
    });
    _this.state = {
      value: props.defaultValue || props.options[0].value
    };
    _this.name = "RadioGroup-".concat(radioCount);
    radioCount += 1;
    return _this;
  }

  (0, _createClass2["default"])(RadioGroup, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          size = _this$props.size,
          label = _this$props.label,
          defaultValue = _this$props.defaultValue,
          value = _this$props.value,
          options = _this$props.options,
          onChange = _this$props.onChange,
          isRequired = _this$props.isRequired,
          props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded); // Allows it to behave like a controlled input

      var selected = value || this.state.value;
      return /*#__PURE__*/_react["default"].createElement(_layers.Pane, (0, _extends2["default"])({
        role: "group",
        "aria-label": label
      }, props), label && /*#__PURE__*/_react["default"].createElement(_typography.Text, {
        color: "muted",
        fontWeight: 500
      }, label), options.map(function (item) {
        return /*#__PURE__*/_react["default"].createElement(_Radio["default"], {
          key: item.value,
          size: size,
          name: _this2.name,
          value: item.value,
          label: item.label,
          checked: selected === item.value,
          disabled: item.isDisabled,
          onChange: _this2.handleChange,
          isRequired: isRequired
        });
      }));
    }
  }]);
  return RadioGroup;
}(_react.PureComponent);

exports["default"] = RadioGroup;
RadioGroup.displayName = "RadioGroup";
(0, _defineProperty2["default"])(RadioGroup, "propTypes", _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _uiBox.spacing.propTypes), _uiBox.position.propTypes), _uiBox.layout.propTypes), _uiBox.dimensions.propTypes), {}, {
  /**
   * The options for the radios of the Radio Group.
   */
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    label: _propTypes["default"].node.isRequired,
    value: _propTypes["default"].string.isRequired,
    isDisabled: _propTypes["default"].bool
  })).isRequired,

  /**
   * The selected item value when controlled.
   */
  value: _propTypes["default"].string,

  /**
   * The default value of the Radio Group when uncontrolled.
   */
  defaultValue: _propTypes["default"].string,

  /**
   * Function called when state changes.
   */
  onChange: _propTypes["default"].func.isRequired,

  /**
   * Label to display above the radio button options.
   */
  label: _propTypes["default"].string,

  /**
   * The size of the radio circle. This also informs the text size and spacing.
   */
  size: _propTypes["default"].oneOf([12, 16]).isRequired,

  /**
   * When true, the radio get the required attribute.
   */
  isRequired: _propTypes["default"].bool.isRequired
}));
(0, _defineProperty2["default"])(RadioGroup, "defaultProps", {
  options: [],
  onChange: function onChange() {},
  size: 12,
  isRequired: false
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyYWRpb0NvdW50IiwiUmFkaW9Hcm91cCIsInByb3BzIiwiY29udGV4dCIsImV2ZW50IiwidmFsdWUiLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsIm9uQ2hhbmdlIiwic3RhdGUiLCJkZWZhdWx0VmFsdWUiLCJvcHRpb25zIiwibmFtZSIsInNpemUiLCJsYWJlbCIsImlzUmVxdWlyZWQiLCJzZWxlY3RlZCIsIm1hcCIsIml0ZW0iLCJpc0Rpc2FibGVkIiwiaGFuZGxlQ2hhbmdlIiwiUHVyZUNvbXBvbmVudCIsInNwYWNpbmciLCJwcm9wVHlwZXMiLCJwb3NpdGlvbiIsImxheW91dCIsImRpbWVuc2lvbnMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwic2hhcGUiLCJub2RlIiwic3RyaW5nIiwiYm9vbCIsImZ1bmMiLCJvbmVPZiJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yYWRpby9zcmMvUmFkaW9Hcm91cC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgc3BhY2luZywgcG9zaXRpb24sIGxheW91dCwgZGltZW5zaW9ucyB9IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCBSYWRpbyBmcm9tICcuL1JhZGlvJ1xuXG5sZXQgcmFkaW9Db3VudCA9IDEgLy8gVXNlZCBmb3IgZ2VuZXJhdGluZyB1bmlxdWUgaW5wdXQgbmFtZXNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFkaW9Hcm91cCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHNvbWUgQm94IEFQSXMuXG4gICAgICovXG4gICAgLi4uc3BhY2luZy5wcm9wVHlwZXMsXG4gICAgLi4ucG9zaXRpb24ucHJvcFR5cGVzLFxuICAgIC4uLmxheW91dC5wcm9wVHlwZXMsXG4gICAgLi4uZGltZW5zaW9ucy5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9ucyBmb3IgdGhlIHJhZGlvcyBvZiB0aGUgUmFkaW8gR3JvdXAuXG4gICAgICovXG4gICAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBsYWJlbDogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICAgICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgaXNEaXNhYmxlZDogUHJvcFR5cGVzLmJvb2xcbiAgICAgIH0pXG4gICAgKS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHNlbGVjdGVkIGl0ZW0gdmFsdWUgd2hlbiBjb250cm9sbGVkLlxuICAgICAqL1xuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhlIFJhZGlvIEdyb3VwIHdoZW4gdW5jb250cm9sbGVkLlxuICAgICAqL1xuICAgIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIHN0YXRlIGNoYW5nZXMuXG4gICAgICovXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBMYWJlbCB0byBkaXNwbGF5IGFib3ZlIHRoZSByYWRpbyBidXR0b24gb3B0aW9ucy5cbiAgICAgKi9cbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBzaXplIG9mIHRoZSByYWRpbyBjaXJjbGUuIFRoaXMgYWxzbyBpbmZvcm1zIHRoZSB0ZXh0IHNpemUgYW5kIHNwYWNpbmcuXG4gICAgICovXG4gICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsxMiwgMTZdKS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgcmFkaW8gZ2V0IHRoZSByZXF1aXJlZCBhdHRyaWJ1dGUuXG4gICAgICovXG4gICAgaXNSZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBvcHRpb25zOiBbXSxcbiAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gICAgc2l6ZTogMTIsXG4gICAgaXNSZXF1aXJlZDogZmFsc2VcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgc3VwZXIocHJvcHMsIGNvbnRleHQpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6IHByb3BzLmRlZmF1bHRWYWx1ZSB8fCBwcm9wcy5vcHRpb25zWzBdLnZhbHVlXG4gICAgfVxuXG4gICAgdGhpcy5uYW1lID0gYFJhZGlvR3JvdXAtJHtyYWRpb0NvdW50fWBcbiAgICByYWRpb0NvdW50ICs9IDFcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBldmVudC50YXJnZXRcblxuICAgIC8vIFNhdmUgYSByZW5kZXIgY3ljbGUgd2hlbiBpdCdzIGEgY29udHJvbGxlZCBpbnB1dFxuICAgIGlmICghdGhpcy5wcm9wcy52YWx1ZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlIH0pXG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHNpemUsXG4gICAgICBsYWJlbCxcbiAgICAgIGRlZmF1bHRWYWx1ZSxcbiAgICAgIHZhbHVlLFxuICAgICAgb3B0aW9ucyxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgaXNSZXF1aXJlZCxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIC8vIEFsbG93cyBpdCB0byBiZWhhdmUgbGlrZSBhIGNvbnRyb2xsZWQgaW5wdXRcbiAgICBjb25zdCBzZWxlY3RlZCA9IHZhbHVlIHx8IHRoaXMuc3RhdGUudmFsdWVcblxuICAgIHJldHVybiAoXG4gICAgICA8UGFuZSByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPXtsYWJlbH0gey4uLnByb3BzfT5cbiAgICAgICAge2xhYmVsICYmIChcbiAgICAgICAgICA8VGV4dCBjb2xvcj1cIm11dGVkXCIgZm9udFdlaWdodD17NTAwfT5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICl9XG4gICAgICAgIHtvcHRpb25zLm1hcChpdGVtID0+IChcbiAgICAgICAgICA8UmFkaW9cbiAgICAgICAgICAgIGtleT17aXRlbS52YWx1ZX1cbiAgICAgICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgICAgICBuYW1lPXt0aGlzLm5hbWV9XG4gICAgICAgICAgICB2YWx1ZT17aXRlbS52YWx1ZX1cbiAgICAgICAgICAgIGxhYmVsPXtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgY2hlY2tlZD17c2VsZWN0ZWQgPT09IGl0ZW0udmFsdWV9XG4gICAgICAgICAgICBkaXNhYmxlZD17aXRlbS5pc0Rpc2FibGVkfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgaXNSZXF1aXJlZD17aXNSZXF1aXJlZH1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvUGFuZT5cbiAgICApXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7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