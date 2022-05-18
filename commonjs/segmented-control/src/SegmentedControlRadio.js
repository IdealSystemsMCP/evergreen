"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = _interopRequireDefault(require("ui-box"));

var _glamor = require("glamor");

var _classnames = _interopRequireDefault(require("classnames"));

var _typography = require("../../typography");

var _theme = require("../../theme");

var _css;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var labelClass = (0, _glamor.css)({
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative'
});
var wrapperClass = (0, _glamor.css)((_css = {
  position: 'relative',
  display: 'flex',
  flex: 1,
  cursor: 'pointer',
  marginLeft: '-1px'
}, (0, _defineProperty2["default"])(_css, ":first-child .".concat(labelClass), {
  borderTopLeftRadius: 3,
  borderBottomLeftRadius: 3
}), (0, _defineProperty2["default"])(_css, ":last-child .".concat(labelClass), {
  borderTopRightRadius: 3,
  borderBottomRightRadius: 3
}), _css));
var offscreenCss = (0, _glamor.css)({
  overflow: 'hidden',
  position: 'absolute',
  height: '1px',
  width: '1px',
  padding: 0,
  margin: '-1px',
  border: 0,
  clip: 'rect(0 0 0 0)'
});

var SegmentedControlRadio = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(SegmentedControlRadio, _PureComponent);

  var _super = _createSuper(SegmentedControlRadio);

  function SegmentedControlRadio() {
    (0, _classCallCheck2["default"])(this, SegmentedControlRadio);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(SegmentedControlRadio, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          id = _this$props.id,
          name = _this$props.name,
          label = _this$props.label,
          value = _this$props.value,
          height = _this$props.height,
          checked = _this$props.checked,
          _onChange = _this$props.onChange,
          appearance = _this$props.appearance,
          isFirstItem = _this$props.isFirstItem,
          isLastItem = _this$props.isLastItem,
          disabled = _this$props.disabled;
      var themedClassName = theme.getSegmentedControlRadioClassName(appearance);
      var textSize = theme.getTextSizeForControlHeight(height);
      var borderRadius = theme.getBorderRadiusForControlHeight(height);
      return /*#__PURE__*/_react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
        className: (0, _classnames["default"])(wrapperClass.toString(), themedClassName),
        "data-active": checked
      }, isFirstItem ? {
        borderTopLeftRadius: borderRadius,
        borderBottomLeftRadius: borderRadius
      } : {}, isLastItem ? {
        borderTopRightRadius: borderRadius,
        borderBottomRightRadius: borderRadius
      } : {}), /*#__PURE__*/_react["default"].createElement("input", {
        type: "radio",
        id: id,
        className: "".concat(offscreenCss),
        name: name,
        value: value,
        checked: checked,
        onChange: function onChange(e) {
          return _onChange(e.target.value);
        },
        disabled: disabled
      }), /*#__PURE__*/_react["default"].createElement(_typography.Text, {
        is: "label",
        cursor: "pointer",
        htmlFor: id,
        fontWeight: 500,
        size: textSize,
        className: "".concat(labelClass),
        disabled: disabled
      }, label));
    }
  }]);
  return SegmentedControlRadio;
}(_react.PureComponent);

SegmentedControlRadio.displayName = "SegmentedControlRadio";
(0, _defineProperty2["default"])(SegmentedControlRadio, "propTypes", {
  /**
   * The name attribute of the radio input.
   */
  name: _propTypes["default"].string.isRequired,

  /**
   * The label used for the radio.
   */
  label: _propTypes["default"].node.isRequired,

  /**
   * The value attribute of the radio input.
   */
  value: _propTypes["default"].string.isRequired,

  /**
   * The height of the control.
   */
  height: _propTypes["default"].number.isRequired,

  /**
   * When true, the radio input is checked.
   */
  checked: _propTypes["default"].bool.isRequired,

  /**
   * Function called when the state changes.
   */
  onChange: _propTypes["default"].func.isRequired,

  /**
   * The appearance of the control. Currently only `default` is possible.
   */
  appearance: _propTypes["default"].string.isRequired,

  /**
   * When true, this item is the first item.
   */
  isFirstItem: _propTypes["default"].bool,

  /**
   * When true, this item is the last item.
   */
  isLastItem: _propTypes["default"].bool,

  /**
   * The unique id of the radio option.
   */
  id: _propTypes["default"].string,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes["default"].object.isRequired,

  /**
   * When true, the input is disabled.
   */
  disabled: _propTypes["default"].bool
});

var _default = (0, _theme.withTheme)(SegmentedControlRadio);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJsYWJlbENsYXNzIiwiY3NzIiwiZGlzcGxheSIsImZsZXgiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJwb3NpdGlvbiIsIndyYXBwZXJDbGFzcyIsImN1cnNvciIsIm1hcmdpbkxlZnQiLCJib3JkZXJUb3BMZWZ0UmFkaXVzIiwiYm9yZGVyQm90dG9tTGVmdFJhZGl1cyIsImJvcmRlclRvcFJpZ2h0UmFkaXVzIiwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMiLCJvZmZzY3JlZW5Dc3MiLCJvdmVyZmxvdyIsImhlaWdodCIsIndpZHRoIiwicGFkZGluZyIsIm1hcmdpbiIsImJvcmRlciIsImNsaXAiLCJTZWdtZW50ZWRDb250cm9sUmFkaW8iLCJwcm9wcyIsInRoZW1lIiwiaWQiLCJuYW1lIiwibGFiZWwiLCJ2YWx1ZSIsImNoZWNrZWQiLCJvbkNoYW5nZSIsImFwcGVhcmFuY2UiLCJpc0ZpcnN0SXRlbSIsImlzTGFzdEl0ZW0iLCJkaXNhYmxlZCIsInRoZW1lZENsYXNzTmFtZSIsImdldFNlZ21lbnRlZENvbnRyb2xSYWRpb0NsYXNzTmFtZSIsInRleHRTaXplIiwiZ2V0VGV4dFNpemVGb3JDb250cm9sSGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiZ2V0Qm9yZGVyUmFkaXVzRm9yQ29udHJvbEhlaWdodCIsImN4IiwidG9TdHJpbmciLCJlIiwidGFyZ2V0IiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJub2RlIiwibnVtYmVyIiwiYm9vbCIsImZ1bmMiLCJvYmplY3QiLCJ3aXRoVGhlbWUiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2VnbWVudGVkLWNvbnRyb2wvc3JjL1NlZ21lbnRlZENvbnRyb2xSYWRpby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJveCBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5cbmNvbnN0IGxhYmVsQ2xhc3MgPSBjc3Moe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXg6IDEsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnXG59KVxuXG5jb25zdCB3cmFwcGVyQ2xhc3MgPSBjc3Moe1xuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4OiAxLFxuICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgbWFyZ2luTGVmdDogJy0xcHgnLFxuICBbYDpmaXJzdC1jaGlsZCAuJHtsYWJlbENsYXNzfWBdOiB7XG4gICAgYm9yZGVyVG9wTGVmdFJhZGl1czogMyxcbiAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiAzXG4gIH0sXG4gIFtgOmxhc3QtY2hpbGQgLiR7bGFiZWxDbGFzc31gXToge1xuICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiAzLFxuICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiAzXG4gIH1cbn0pXG5cbmNvbnN0IG9mZnNjcmVlbkNzcyA9IGNzcyh7XG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIGhlaWdodDogJzFweCcsXG4gIHdpZHRoOiAnMXB4JyxcbiAgcGFkZGluZzogMCxcbiAgbWFyZ2luOiAnLTFweCcsXG4gIGJvcmRlcjogMCxcbiAgY2xpcDogJ3JlY3QoMCAwIDAgMCknXG59KVxuXG5jbGFzcyBTZWdtZW50ZWRDb250cm9sUmFkaW8gZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBhdHRyaWJ1dGUgb2YgdGhlIHJhZGlvIGlucHV0LlxuICAgICAqL1xuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYWJlbCB1c2VkIGZvciB0aGUgcmFkaW8uXG4gICAgICovXG4gICAgbGFiZWw6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmFsdWUgYXR0cmlidXRlIG9mIHRoZSByYWRpbyBpbnB1dC5cbiAgICAgKi9cbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGhlaWdodCBvZiB0aGUgY29udHJvbC5cbiAgICAgKi9cbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIHJhZGlvIGlucHV0IGlzIGNoZWNrZWQuXG4gICAgICovXG4gICAgY2hlY2tlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIHRoZSBzdGF0ZSBjaGFuZ2VzLlxuICAgICAqL1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIGNvbnRyb2wuIEN1cnJlbnRseSBvbmx5IGBkZWZhdWx0YCBpcyBwb3NzaWJsZS5cbiAgICAgKi9cbiAgICBhcHBlYXJhbmNlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoaXMgaXRlbSBpcyB0aGUgZmlyc3QgaXRlbS5cbiAgICAgKi9cbiAgICBpc0ZpcnN0SXRlbTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoaXMgaXRlbSBpcyB0aGUgbGFzdCBpdGVtLlxuICAgICAqL1xuICAgIGlzTGFzdEl0ZW06IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHVuaXF1ZSBpZCBvZiB0aGUgcmFkaW8gb3B0aW9uLlxuICAgICAqL1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgaW5wdXQgaXMgZGlzYWJsZWQuXG4gICAgICovXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdGhlbWUsXG5cbiAgICAgIGlkLFxuICAgICAgbmFtZSxcbiAgICAgIGxhYmVsLFxuICAgICAgdmFsdWUsXG4gICAgICBoZWlnaHQsXG4gICAgICBjaGVja2VkLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBhcHBlYXJhbmNlLFxuICAgICAgaXNGaXJzdEl0ZW0sXG4gICAgICBpc0xhc3RJdGVtLFxuICAgICAgZGlzYWJsZWRcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgdGhlbWVkQ2xhc3NOYW1lID0gdGhlbWUuZ2V0U2VnbWVudGVkQ29udHJvbFJhZGlvQ2xhc3NOYW1lKGFwcGVhcmFuY2UpXG4gICAgY29uc3QgdGV4dFNpemUgPSB0aGVtZS5nZXRUZXh0U2l6ZUZvckNvbnRyb2xIZWlnaHQoaGVpZ2h0KVxuICAgIGNvbnN0IGJvcmRlclJhZGl1cyA9IHRoZW1lLmdldEJvcmRlclJhZGl1c0ZvckNvbnRyb2xIZWlnaHQoaGVpZ2h0KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3hcbiAgICAgICAgY2xhc3NOYW1lPXtjeCh3cmFwcGVyQ2xhc3MudG9TdHJpbmcoKSwgdGhlbWVkQ2xhc3NOYW1lKX1cbiAgICAgICAgZGF0YS1hY3RpdmU9e2NoZWNrZWR9XG4gICAgICAgIHsuLi4oaXNGaXJzdEl0ZW1cbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogYm9yZGVyUmFkaXVzLFxuICAgICAgICAgICAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiBib3JkZXJSYWRpdXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA6IHt9KX1cbiAgICAgICAgey4uLihpc0xhc3RJdGVtXG4gICAgICAgICAgPyB7XG4gICAgICAgICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiBib3JkZXJSYWRpdXMsXG4gICAgICAgICAgICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiBib3JkZXJSYWRpdXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA6IHt9KX1cbiAgICAgID5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtvZmZzY3JlZW5Dc3N9YH1cbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIC8+XG4gICAgICAgIDxUZXh0XG4gICAgICAgICAgaXM9XCJsYWJlbFwiXG4gICAgICAgICAgY3Vyc29yPVwicG9pbnRlclwiXG4gICAgICAgICAgaHRtbEZvcj17aWR9XG4gICAgICAgICAgZm9udFdlaWdodD17NTAwfVxuICAgICAgICAgIHNpemU9e3RleHRTaXplfVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7bGFiZWxDbGFzc31gfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgPlxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShTZWdtZW50ZWRDb250cm9sUmFkaW8pXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLElBQUFDLFdBQUEsRUFBSTtFQUNyQkMsT0FBTyxFQUFFLE1BRFk7RUFFckJDLElBQUksRUFBRSxDQUZlO0VBR3JCQyxVQUFVLEVBQUUsUUFIUztFQUlyQkMsY0FBYyxFQUFFLFFBSks7RUFLckJDLFFBQVEsRUFBRTtBQUxXLENBQUosQ0FBbkI7QUFRQSxJQUFNQyxZQUFZLEdBQUcsSUFBQU4sV0FBQTtFQUNuQkssUUFBUSxFQUFFLFVBRFM7RUFFbkJKLE9BQU8sRUFBRSxNQUZVO0VBR25CQyxJQUFJLEVBQUUsQ0FIYTtFQUluQkssTUFBTSxFQUFFLFNBSlc7RUFLbkJDLFVBQVUsRUFBRTtBQUxPLGtFQU1EVCxVQU5DLEdBTWM7RUFDL0JVLG1CQUFtQixFQUFFLENBRFU7RUFFL0JDLHNCQUFzQixFQUFFO0FBRk8sQ0FOZCxpRUFVRlgsVUFWRSxHQVVhO0VBQzlCWSxvQkFBb0IsRUFBRSxDQURRO0VBRTlCQyx1QkFBdUIsRUFBRTtBQUZLLENBVmIsU0FBckI7QUFnQkEsSUFBTUMsWUFBWSxHQUFHLElBQUFiLFdBQUEsRUFBSTtFQUN2QmMsUUFBUSxFQUFFLFFBRGE7RUFFdkJULFFBQVEsRUFBRSxVQUZhO0VBR3ZCVSxNQUFNLEVBQUUsS0FIZTtFQUl2QkMsS0FBSyxFQUFFLEtBSmdCO0VBS3ZCQyxPQUFPLEVBQUUsQ0FMYztFQU12QkMsTUFBTSxFQUFFLE1BTmU7RUFPdkJDLE1BQU0sRUFBRSxDQVBlO0VBUXZCQyxJQUFJLEVBQUU7QUFSaUIs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