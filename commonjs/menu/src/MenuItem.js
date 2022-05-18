"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

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

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = _interopRequireDefault(require("ui-box"));

var _layers = require("../../layers");

var _typography = require("../../typography");

var _icon = require("../../icon");

var _theme = require("../../theme");

var _safeInvoke = _interopRequireDefault(require("../../lib/safe-invoke"));

var _warning = _interopRequireDefault(require("../../lib/warning"));

var _excluded = ["is", "children", "theme", "appearance", "secondaryText", "intent", "icon"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var MenuItem = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(MenuItem, _React$PureComponent);

  var _super = _createSuper(MenuItem);

  function MenuItem() {
    var _this;

    (0, _classCallCheck2["default"])(this, MenuItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClick", function (event) {
      _this.props.onSelect(event);
      /* eslint-disable react/prop-types */


      (0, _safeInvoke["default"])(_this.props.onClick, event);
      /* eslint-enable react/prop-types */
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleKeyPress", function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        _this.props.onSelect(event);

        event.preventDefault();
      }
      /* eslint-disable react/prop-types */


      (0, _safeInvoke["default"])(_this.props.onKeyPress, event);
      /* eslint-enable react/prop-types */
    });
    return _this;
  }

  (0, _createClass2["default"])(MenuItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          is = _this$props.is,
          children = _this$props.children,
          theme = _this$props.theme,
          appearance = _this$props.appearance,
          secondaryText = _this$props.secondaryText,
          intent = _this$props.intent,
          icon = _this$props.icon,
          passthroughProps = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);

      if (process.env.NODE_ENV !== 'production') {
        (0, _warning["default"])('onClick' in this.props, '<Menu.Item> expects `onSelect` prop, but you passed `onClick`.');
      }

      var themedClassName = theme.getMenuItemClassName(appearance, 'none');
      return /*#__PURE__*/_react["default"].createElement(_layers.Pane, (0, _extends2["default"])({
        is: is,
        role: "menuitem",
        className: themedClassName,
        onClick: this.handleClick,
        onKeyPress: this.handleKeyPress,
        height: icon ? 40 : 32,
        tabIndex: 0,
        "data-isselectable": "true",
        display: "flex",
        alignItems: "center"
      }, passthroughProps), icon && /*#__PURE__*/_react["default"].createElement(_icon.Icon, {
        color: intent === 'none' ? 'default' : intent,
        icon: icon,
        marginLeft: 16,
        marginRight: -4,
        size: 16,
        flexShrink: 0
      }), /*#__PURE__*/_react["default"].createElement(_typography.Text, {
        color: intent,
        marginLeft: 16,
        marginRight: 16,
        flex: 1
      }, children), secondaryText && /*#__PURE__*/_react["default"].createElement(_typography.Text, {
        marginRight: 16,
        color: "muted"
      }, secondaryText));
    }
  }]);
  return MenuItem;
}(_react["default"].PureComponent);

MenuItem.displayName = "MenuItem";
(0, _defineProperty2["default"])(MenuItem, "propTypes", {
  /**
   * Element type to use for the menu item.
   * For example: `<MenuItem is={ReactRouterLink}>...</MenuItem>`
   */
  is: _uiBox["default"].propTypes.is,

  /**
   * Function that is called on click and enter/space keypress.
   */
  onSelect: _propTypes["default"].func,

  /**
   * The icon before the label.
   */
  icon: _propTypes["default"].node,

  /**
   * The children of the component.
   */
  children: _propTypes["default"].node,

  /**
   * Secondary text shown on the right.
   */
  secondaryText: _propTypes["default"].node,

  /**
   * The default theme only supports one default appearance.
   */
  appearance: _propTypes["default"].string.isRequired,

  /**
   * The intent of the menu item.
   */
  intent: _propTypes["default"].oneOf(['none', 'success', 'warning', 'danger']).isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes["default"].object.isRequired
});
(0, _defineProperty2["default"])(MenuItem, "defaultProps", {
  is: 'div',
  intent: 'none',
  appearance: 'default',
  onSelect: function onSelect() {}
});

var _default = (0, _theme.withTheme)(MenuItem);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJNZW51SXRlbSIsImV2ZW50IiwicHJvcHMiLCJvblNlbGVjdCIsInNhZmVJbnZva2UiLCJvbkNsaWNrIiwia2V5IiwicHJldmVudERlZmF1bHQiLCJvbktleVByZXNzIiwiaXMiLCJjaGlsZHJlbiIsInRoZW1lIiwiYXBwZWFyYW5jZSIsInNlY29uZGFyeVRleHQiLCJpbnRlbnQiLCJpY29uIiwicGFzc3Rocm91Z2hQcm9wcyIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsIndhcm5pbmciLCJ0aGVtZWRDbGFzc05hbWUiLCJnZXRNZW51SXRlbUNsYXNzTmFtZSIsImhhbmRsZUNsaWNrIiwiaGFuZGxlS2V5UHJlc3MiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJCb3giLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwibm9kZSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJvbmVPZiIsIm9iamVjdCIsIndpdGhUaGVtZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tZW51L3NyYy9NZW51SXRlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCB7IEljb24gfSBmcm9tICcuLi8uLi9pY29uJ1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5pbXBvcnQgc2FmZUludm9rZSBmcm9tICcuLi8uLi9saWIvc2FmZS1pbnZva2UnXG5pbXBvcnQgd2FybmluZyBmcm9tICcuLi8uLi9saWIvd2FybmluZydcblxuY2xhc3MgTWVudUl0ZW0gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBFbGVtZW50IHR5cGUgdG8gdXNlIGZvciB0aGUgbWVudSBpdGVtLlxuICAgICAqIEZvciBleGFtcGxlOiBgPE1lbnVJdGVtIGlzPXtSZWFjdFJvdXRlckxpbmt9Pi4uLjwvTWVudUl0ZW0+YFxuICAgICAqL1xuICAgIGlzOiBCb3gucHJvcFR5cGVzLmlzLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgb24gY2xpY2sgYW5kIGVudGVyL3NwYWNlIGtleXByZXNzLlxuICAgICAqL1xuICAgIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBpY29uIGJlZm9yZSB0aGUgbGFiZWwuXG4gICAgICovXG4gICAgaWNvbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY2hpbGRyZW4gb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBTZWNvbmRhcnkgdGV4dCBzaG93biBvbiB0aGUgcmlnaHQuXG4gICAgICovXG4gICAgc2Vjb25kYXJ5VGV4dDogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCB0aGVtZSBvbmx5IHN1cHBvcnRzIG9uZSBkZWZhdWx0IGFwcGVhcmFuY2UuXG4gICAgICovXG4gICAgYXBwZWFyYW5jZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGludGVudCBvZiB0aGUgbWVudSBpdGVtLlxuICAgICAqL1xuICAgIGludGVudDogUHJvcFR5cGVzLm9uZU9mKFsnbm9uZScsICdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJ10pXG4gICAgICAuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIHByb3ZpZGVkIGJ5IFRoZW1lUHJvdmlkZXIuXG4gICAgICovXG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBpczogJ2RpdicsXG4gICAgaW50ZW50OiAnbm9uZScsXG4gICAgYXBwZWFyYW5jZTogJ2RlZmF1bHQnLFxuICAgIG9uU2VsZWN0OiAoKSA9PiB7fVxuICB9XG5cbiAgaGFuZGxlQ2xpY2sgPSBldmVudCA9PiB7XG4gICAgdGhpcy5wcm9wcy5vblNlbGVjdChldmVudClcblxuICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cbiAgICBzYWZlSW52b2tlKHRoaXMucHJvcHMub25DbGljaywgZXZlbnQpXG4gICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXG4gIH1cblxuICBoYW5kbGVLZXlQcmVzcyA9IGV2ZW50ID0+IHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInIHx8IGV2ZW50LmtleSA9PT0gJyAnKSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KGV2ZW50KVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cbiAgICBzYWZlSW52b2tlKHRoaXMucHJvcHMub25LZXlQcmVzcywgZXZlbnQpXG4gICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaXMsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIHRoZW1lLFxuICAgICAgYXBwZWFyYW5jZSxcbiAgICAgIHNlY29uZGFyeVRleHQsXG4gICAgICBpbnRlbnQsXG4gICAgICBpY29uLFxuICAgICAgLi4ucGFzc3Rocm91Z2hQcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgd2FybmluZyhcbiAgICAgICAgJ29uQ2xpY2snIGluIHRoaXMucHJvcHMsXG4gICAgICAgICc8TWVudS5JdGVtPiBleHBlY3RzIGBvblNlbGVjdGAgcHJvcCwgYnV0IHlvdSBwYXNzZWQgYG9uQ2xpY2tgLidcbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCB0aGVtZWRDbGFzc05hbWUgPSB0aGVtZS5nZXRNZW51SXRlbUNsYXNzTmFtZShhcHBlYXJhbmNlLCAnbm9uZScpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhbmVcbiAgICAgICAgaXM9e2lzfVxuICAgICAgICByb2xlPVwibWVudWl0ZW1cIlxuICAgICAgICBjbGFzc05hbWU9e3RoZW1lZENsYXNzTmFtZX1cbiAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgICAgb25LZXlQcmVzcz17dGhpcy5oYW5kbGVLZXlQcmVzc31cbiAgICAgICAgaGVpZ2h0PXtpY29uID8gNDAgOiAzMn1cbiAgICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICAgIGRhdGEtaXNzZWxlY3RhYmxlPVwidHJ1ZVwiXG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgIHsuLi5wYXNzdGhyb3VnaFByb3BzfVxuICAgICAgPlxuICAgICAgICB7aWNvbiAmJiAoXG4gICAgICAgICAgPEljb25cbiAgICAgICAgICAgIGNvbG9yPXtpbnRlbnQgPT09ICdub25lJyA/ICdkZWZhdWx0JyA6IGludGVudH1cbiAgICAgICAgICAgIGljb249e2ljb259XG4gICAgICAgICAgICBtYXJnaW5MZWZ0PXsxNn1cbiAgICAgICAgICAgIG1hcmdpblJpZ2h0PXstNH1cbiAgICAgICAgICAgIHNpemU9ezE2fVxuICAgICAgICAgICAgZmxleFNocmluaz17MH1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8VGV4dCBjb2xvcj17aW50ZW50fSBtYXJnaW5MZWZ0PXsxNn0gbWFyZ2luUmlnaHQ9ezE2fSBmbGV4PXsxfT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAge3NlY29uZGFyeVRleHQgJiYgKFxuICAgICAgICAgIDxUZXh0IG1hcmdpblJpZ2h0PXsxNn0gY29sb3I9XCJtdXRlZFwiPlxuICAgICAgICAgICAge3NlY29uZGFyeVRleHR9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICApfVxuICAgICAgPC9QYW5lPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoTWVudUl0ZW0pXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztJQUVNQSxROzs7Ozs7Ozs7Ozs7Ozs7b0dBb0RVLFVBQUFDLEtBQUssRUFBSTtNQUNyQixNQUFLQyxLQUFMLENBQVdDLFFBQVgsQ0FBb0JGLEtBQXBCO01BRUE7OztNQUNBLElBQUFHLHNCQUFBLEVBQVcsTUFBS0YsS0FBTCxDQUFXRyxPQUF0QixFQUErQkosS0FBL0I7TUFDQTtJQUNELEM7dUdBRWdCLFVBQUFBLEtBQUssRUFBSTtNQUN4QixJQUFJQSxLQUFLLENBQUNLLEdBQU4sS0FBYyxPQUFkLElBQXlCTCxLQUFLLENBQUNLLEdBQU4sS0FBYyxHQUEzQyxFQUFnRDtRQUM5QyxNQUFLSixLQUFMLENBQVdDLFFBQVgsQ0FBb0JGLEtBQXBCOztRQUNBQSxLQUFLLENBQUNNLGNBQU47TUFDRDtNQUVEOzs7TUFDQSxJQUFBSCxzQkFBQSxFQUFXLE1BQUtGLEtBQUwsQ0FBV00sVUFBdEIsRUFBa0NQLEtBQWxDO01BQ0E7SUFDRCxDOzs7Ozs7V0FFRCxrQkFBUztNQUNQLGtCQVNJLEtBQUtDLEtBVFQ7TUFBQSxJQUNFTyxFQURGLGVBQ0VBLEVBREY7TUFBQSxJQUVFQyxRQUZGLGVBRUVBLFFBRkY7TUFBQSxJQUdFQyxLQUhGLGVBR0VBLEtBSEY7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