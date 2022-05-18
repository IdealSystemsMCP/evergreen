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

var _Select = _interopRequireDefault(require("./Select"));

var _excluded = ["id", "hint", "label", "description", "validationMessage", "inputHeight", "inputWidth", "disabled", "required", "isInvalid", "appearance"];

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
          props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      var id = "SelectField-".concat(this.state.id);
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
      }, matchedProps), /*#__PURE__*/_react["default"].createElement(_Select["default"], (0, _extends2["default"])({
        id: id,
        width: inputWidth,
        height: inputHeight,
        disabled: disabled,
        required: required,
        isInvalid: isInvalid,
        appearance: appearance
      }, remainingProps)));
    }
  }]);
  return TextInputField;
}(_react.PureComponent);

exports["default"] = TextInputField;
TextInputField.displayName = "TextInputField";
(0, _defineProperty2["default"])(TextInputField, "propTypes", _objectSpread(_objectSpread(_objectSpread({}, _Select["default"].propTypes), _formField.FormField.propTypes), {}, {
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
  isRequired: _propTypes["default"].bool,

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJpZENvdW50ZXIiLCJUZXh0SW5wdXRGaWVsZCIsImlkIiwicHJvcHMiLCJ0b1N0cmluZyIsInVudXNlZElkIiwiaGludCIsImxhYmVsIiwiZGVzY3JpcHRpb24iLCJ2YWxpZGF0aW9uTWVzc2FnZSIsImlucHV0SGVpZ2h0IiwiaW5wdXRXaWR0aCIsImRpc2FibGVkIiwicmVxdWlyZWQiLCJpc0ludmFsaWQiLCJhcHBlYXJhbmNlIiwic3RhdGUiLCJzcGxpdEJveFByb3BzIiwibWF0Y2hlZFByb3BzIiwicmVtYWluaW5nUHJvcHMiLCJQdXJlQ29tcG9uZW50IiwiU2VsZWN0IiwicHJvcFR5cGVzIiwiRm9ybUZpZWxkIiwiUHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiLCJsYWJlbEZvciIsInN0cmluZyIsImJvb2wiLCJudW1iZXIiLCJvbmVPZlR5cGUiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2VsZWN0L3NyYy9TZWxlY3RGaWVsZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgc3BsaXRCb3hQcm9wcyB9IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IEZvcm1GaWVsZCB9IGZyb20gJy4uLy4uL2Zvcm0tZmllbGQnXG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vU2VsZWN0J1xuXG5sZXQgaWRDb3VudGVyID0gMFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0SW5wdXRGaWVsZCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBTZWxlY3QgY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgICAqL1xuICAgIC4uLlNlbGVjdC5wcm9wVHlwZXMsXG4gICAgLi4uRm9ybUZpZWxkLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYWJlbCB1c2VkIGFib3ZlIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgICAqL1xuICAgIGxhYmVsOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogUGFzc2VkIG9uIHRoZSBsYWJlbCBhcyBhIGh0bWxGb3IgcHJvcC5cbiAgICAgKi9cbiAgICBsYWJlbEZvcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgb3Igbm90IHRvIHNob3cgYW4gYXN0ZXJpeCBhZnRlciB0aGUgbGFiZWwuXG4gICAgICovXG4gICAgaXNSZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBBbiBvcHRpb25hbCBkZXNjcmlwdGlvbiBvZiB0aGUgZmllbGQgdW5kZXIgdGhlIGxhYmVsLCBhYm92ZSB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICAgKi9cbiAgICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBBbiBvcHRpb25hbCBoaW50IHVuZGVyIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgICAqL1xuICAgIGhpbnQ6IFByb3BUeXBlcy5ub2RlLFxuXG4gICAgLyoqXG4gICAgICogSWYgYSB2YWxpZGF0aW9uIG1lc3NhZ2UgaXMgcGFzc2VkIGl0IGlzIHNob3duIHVuZGVyIHRoZSBpbnB1dCBlbGVtZW50XG4gICAgICogYW5kIGFib3ZlIHRoZSBoaW50LiBUaGlzIGlzIHVuYWZmZWN0ZWQgYnkgYGlzSW52YWxpZGAuXG4gICAgICovXG4gICAgdmFsaWRhdGlvbk1lc3NhZ2U6IFByb3BUeXBlcy5ub2RlLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGhlaWdodCBvZiB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICAgKi9cbiAgICBpbnB1dEhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIFRoZSB3aWR0aCBvZiB0aGUgaW5wdXQgd2lkdGguXG4gICAgICovXG4gICAgaW5wdXRXaWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIC8qKlxuICAgICAqIFRoZSBpbnB1dCB3aWR0aCBzaG91bGQgYmUgYXMgd2lkZSBhcyB0aGUgZm9ybSBmaWVsZC5cbiAgICAgKi9cbiAgICBpbnB1dFdpZHRoOiAnMTAwJScsXG4gICAgaW5wdXRIZWlnaHQ6IDMyXG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICBpZDogKHRoaXMucHJvcHMuaWQgfHwgaWRDb3VudGVyKyspLnRvU3RyaW5nKClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICAvLyBXZSBhcmUgdXNpbmcgdGhlIGlkIGZyb20gdGhlIHN0YXRlXG4gICAgICBpZDogdW51c2VkSWQsXG5cbiAgICAgIC8vIEZvcm1GaWVsZCBwcm9wc1xuICAgICAgaGludCxcbiAgICAgIGxhYmVsLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICB2YWxpZGF0aW9uTWVzc2FnZSxcblxuICAgICAgLy8gVGV4dElucHV0IHByb3BzXG4gICAgICBpbnB1dEhlaWdodCxcbiAgICAgIGlucHV0V2lkdGgsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIHJlcXVpcmVkLFxuICAgICAgaXNJbnZhbGlkLFxuICAgICAgYXBwZWFyYW5jZSxcblxuICAgICAgLy8gUmVzdCBwcm9wcyBhcmUgc3ByZWFkIG9uIHRoZSBGb3JtRmllbGRcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IGlkID0gYFNlbGVjdEZpZWxkLSR7dGhpcy5zdGF0ZS5pZH1gXG5cbiAgICAvKipcbiAgICAgKiBTcGxpdCB0aGUgd3JhcHBlciBwcm9wcyBmcm9tIHRoZSBpbnB1dCBwcm9wcy5cbiAgICAgKi9cbiAgICBjb25zdCB7IG1hdGNoZWRQcm9wcywgcmVtYWluaW5nUHJvcHMgfSA9IHNwbGl0Qm94UHJvcHMocHJvcHMpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm1GaWVsZFxuICAgICAgICBtYXJnaW5Cb3R0b209ezI0fVxuICAgICAgICBsYWJlbD17bGFiZWx9XG4gICAgICAgIGlzUmVxdWlyZWQ9e3JlcXVpcmVkfVxuICAgICAgICBoaW50PXtoaW50fVxuICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICAgIHZhbGlkYXRpb25NZXNzYWdlPXt2YWxpZGF0aW9uTWVzc2FnZX1cbiAgICAgICAgbGFiZWxGb3I9e2lkfVxuICAgICAgICB7Li4ubWF0Y2hlZFByb3BzfVxuICAgICAgPlxuICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIHdpZHRoPXtpbnB1dFdpZHRofVxuICAgICAgICAgIGhlaWdodD17aW5wdXRIZWlnaHR9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgICAgICBpc0ludmFsaWQ9e2lzSW52YWxpZH1cbiAgICAgICAgICBhcHBlYXJhbmNlPXthcHBlYXJhbmNlfVxuICAgICAgICAgIHsuLi5yZW1haW5pbmdQcm9wc31cbiAgICAgICAgLz5cbiAgICAgIDwvRm9ybUZpZWxkPlxuICAgIClcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsU0FBUyxHQUFHLENBQWhCOztJQUVxQkMsYzs7Ozs7Ozs7Ozs7Ozs7OzhGQTBEWDtNQUNOQyxFQUFFLEVBQUUsQ0FBQyxNQUFLQyxLQUFMLENBQVdELEVBQVgsSUFBaUJGLFNBQVMsRUFBM0IsRUFBK0JJLFFBQS9CO0lBREUsQzs7Ozs7O1dBSVIsa0JBQVM7TUFDUCxrQkFvQkksS0FBS0QsS0FwQlQ7TUFBQSxJQUVNRSxRQUZOLGVBRUVILEVBRkY7TUFBQSxJQUtFSSxJQUxGLGVBS0VBLElBTEY7TUFBQSxJQU1FQyxLQU5GLGVBTUVBLEtBTkY7TUFBQSxJQU9FQyxXQVBGLGVBT0VBLFdBUEY7TUFBQSxJQVFFQyxpQkFSRixlQVFFQSxpQkFSRjtNQUFBLElBV0VDLFdBWEYsZUFXRUEsV0FYRjtNQUFBLElBWUVDLFVBWkYsZUFZRUEsVUFaRjtNQUFBLElBYUVDLFFBYkYsZUFhRUEsUUFiRjtNQUFBLElBY0VDLFFBZEYsZUFjRUEsUUFkRjtNQUFBLElBZUVDLFNBZkYsZUFlRUEsU0FmRjtNQUFBLElBZ0JFQyxVQWhCRixlQWdCRUEsVUFoQkY7TUFBQSxJQW1CS1osS0FuQkw7TUFzQkEsSUFBTUQsRUFBRSx5QkFBa0IsS0FBS2MsS0FBTCxDQUFXZCxFQUE3QixDQUFSO01BRUE7QUFDSjtBQUNBOztNQUNJLHFCQUF5QyxJQUFBZSxvQkFBQSxFQUFjZCxLQUFkLENBQXpDO01BQUEsSUFBUWUsWUFBUixrQkFBUUEsWUFBUjtNQUFBLElBQXNCQyxjQUF0QixrQkFBc0JBLGNBQXRCOztNQUVBLG9CQUNFLGdDQUFDLG9CQUFEO1FBQ0UsWUFBWSxFQUFFLEVBRGhCO1FBRUUsS0FBSyxFQUFFWixLQUZUO1FBR0UsVUFBVSxFQUFFTSxRQUhkO1FBSUUsSUFBSSxFQUFFUCxJQUpSO1FBS0UsV0FBVyxFQUFFRSxXQUxmO1FBTUUsaUJBQWlCLEVBQUVDLGlCQU5yQjtRQU9FLFFBQVEsRUFBRVA7TUFQWixHQVFNZ0IsWUFSTixnQkFVRSxnQ0FBQyxrQkFBRDtRQUNFLEVBQUUsRUFBRWhCLEVBRE47UUFFRSxLQUFLLEVBQUVTLFVBRlQ7UUFHRSxNQUFNLEVBQUVELFdBSFY7UUFJRSxRQUFRLEVBQUVFLFFBSlo7UUFLRSxRQUFRLEVBQUVDLFFBTFo7UUFNRSxTQUFTLEVBQUVDLFNBTmI7UUFPRSxVQUFVLEVBQUVDO01BUGQsR0FRTUksY0FSTixFQVZGLENBREY7SUF1QkQ7OztFQW5IeUNDLG9COzs7QUFBdkJuQixjO2lDQUFBQSxjLDZEQUtkb0Isa0JBQUEsQ0FBT0MsUyxHQUNQQyxvQkFBQSxDQUFVRCxTO0VBRWI7QUFDSjtBQUNBO0VBQ0lmLEtBQUssRUFBRWlCLHFCQUFBLENBQVVDLElBQVYsQ0FBZUMsVTs7RUFFdEI7QUFDSjtBQUNBO0VBQ0lDLFFBQVEsRUFBRUgscUJBQUEsQ0FBVUksTTs7RUFFcEI7QUFDSjtBQUNBO0VBQ0lGLFVBQVUsRUFBRUYscUJBQUEsQ0FBVUssSTs7RUFFdEI7QUFDSjtBQUNBO0VBQ0lyQixXQUFXLEVBQUVnQixxQkFBQSxDQUFVQyxJOztFQUV2QjtBQUNKO0FBQ0E7RUFDSW5CLElBQUksRUFBRWtCLHFCQUFBLENBQVVDLEk7O0VBRWhCO0FBQ0o7QUFDQTtBQUNBO0VBQ0loQixpQkFBaUIsRUFBRWUscUJBQUEsQ0FBVUMsSTs7RUFFN0I7QUFDSjtBQUNBO0VBQ0lmLFdBQVcsRUFBRWMscUJBQUEsQ0FBVU0sTTs7RUFFdkI7QUFDSjtBQUNBO0VBQ0luQixVQUFVLEVBQUVhLHFCQUFBLENBQVVPLFNBQVYsQ0FBb0IsQ0FBQ1AscUJBQUEsQ0FBVU0sTUFBWCxFQUFtQk4scUJBQUEsQ0FBVUksTUFBN0IsQ0FBcEI7O2lDQS9DSzNCLGMsa0JBa0RHO0VBQ3BCO0FBQ0o7QUFDQTtFQUNJVSxVQUFVLEVBQUUsTUFKUTtFQUtwQkQsV0FBVyxFQUFFO0FBTE8sQyJ9