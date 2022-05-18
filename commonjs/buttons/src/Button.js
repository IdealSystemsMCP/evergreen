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

var _uiBox = require("ui-box");

var _typography = require("../../typography");

var _icon = require("../../icon");

var _spinner = require("../../spinner");

var _theme = require("../../theme");

var _excluded = ["theme", "className", "intent", "height", "isActive", "children", "disabled", "appearance", "isLoading", "paddingRight", "paddingLeft", "paddingTop", "paddingBottom", "iconBefore", "iconAfter"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Button = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Button, _PureComponent);

  var _super = _createSuper(Button);

  function Button() {
    (0, _classCallCheck2["default"])(this, Button);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Button, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          className = _this$props.className,
          intent = _this$props.intent,
          height = _this$props.height,
          isActive = _this$props.isActive,
          children = _this$props.children,
          disabled = _this$props.disabled,
          appearance = _this$props.appearance,
          isLoading = _this$props.isLoading,
          paddingRight = _this$props.paddingRight,
          paddingLeft = _this$props.paddingLeft,
          paddingTop = _this$props.paddingTop,
          paddingBottom = _this$props.paddingBottom,
          iconBeforeKey = _this$props.iconBefore,
          iconAfterKey = _this$props.iconAfter,
          props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      var themedClassName = theme.getButtonClassName(appearance, intent);
      var textSize = theme.getTextSizeForControlHeight(height);
      var borderRadius = theme.getBorderRadiusForControlHeight(height);
      var iconSize = theme.getIconSizeForButton(height);
      var pr = paddingRight !== undefined ? paddingRight : Math.round(height / 2); // eslint-disable-line no-negated-condition

      var pl = paddingLeft !== undefined ? paddingLeft : Math.round(height / 2); // eslint-disable-line no-negated-condition

      var iconBefore;

      if (iconBeforeKey) {
        iconBefore = /*#__PURE__*/_react["default"].createElement(_icon.Icon, {
          icon: iconBeforeKey,
          size: iconSize,
          marginLeft: -Math.round(pl * 0.2),
          marginRight: Math.round(iconSize * 0.7)
        });
      }

      var iconAfter;

      if (iconAfterKey) {
        iconAfter = /*#__PURE__*/_react["default"].createElement(_icon.Icon, {
          icon: iconAfterKey,
          size: iconSize,
          marginRight: -Math.round(pl * 0.2),
          marginLeft: Math.round(iconSize * 0.7)
        });
      }

      return /*#__PURE__*/_react["default"].createElement(_typography.Text, (0, _extends2["default"])({
        is: "button",
        className: (0, _classnames["default"])(themedClassName, className),
        borderTopRightRadius: borderRadius,
        borderBottomRightRadius: borderRadius,
        borderTopLeftRadius: borderRadius,
        borderBottomLeftRadius: borderRadius,
        paddingTop: paddingTop,
        paddingBottom: paddingBottom,
        paddingRight: pr,
        paddingLeft: pl,
        marginLeft: 0 // Removes weird margins in Safari
        ,
        marginRight: 0 // Removes weird margins in Safari
        ,
        marginTop: 0 // Removes weird margins in Safari
        ,
        marginBottom: 0 // Removes weird margins in Safari
        ,
        size: textSize,
        color: null // Prevent the Text color overriding the glamor appearanceStyle color
        ,
        height: height,
        lineHeight: "".concat(height, "px")
      }, isActive ? {
        'data-active': true
      } : {}, Button.styles, props, {
        disabled: disabled || isLoading
      }), isLoading && /*#__PURE__*/_react["default"].createElement(_spinner.Spinner, {
        marginLeft: -Math.round(height / 8),
        marginRight: Math.round(height / 4),
        size: Math.round(height / 2)
      }), iconBefore || null, children, iconAfter || null);
    }
  }]);
  return Button;
}(_react.PureComponent);

Button.displayName = "Button";
(0, _defineProperty2["default"])(Button, "propTypes", _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _uiBox.dimensions.propTypes), _uiBox.spacing.propTypes), _uiBox.position.propTypes), _uiBox.layout.propTypes), {}, {
  /**
   * The intent of the button.
   */
  intent: _propTypes["default"].oneOf(['none', 'success', 'warning', 'danger']),

  /**
   * The appearance of the button.
   */
  appearance: _propTypes["default"].oneOf(['default', 'minimal', 'primary']).isRequired,

  /**
   * When true, show a loading spinner before the children.
   * This also disables the button.
   */
  isLoading: _propTypes["default"].bool,

  /**
   * Forcefully set the active state of a button.
   * Useful in conjuction with a Popover.
   */
  isActive: _propTypes["default"].bool,

  /**
   * Sets an icon before the text. Can be any icon from Evergreen or a custom element.
   */
  iconBefore: _propTypes["default"].node,

  /**
   * Sets an icon after the text. Can be any icon from Evergreen or a custom element.
   */
  iconAfter: _propTypes["default"].node,

  /**
   * When true, the button is disabled.
   * isLoading also sets the button to disabled.
   */
  disabled: _propTypes["default"].bool,

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
(0, _defineProperty2["default"])(Button, "defaultProps", {
  appearance: 'default',
  height: 32,
  intent: 'none',
  isActive: false,
  paddingBottom: 0,
  paddingTop: 0
});
(0, _defineProperty2["default"])(Button, "styles", {
  position: 'relative',
  fontFamily: 'ui',
  fontWeight: 500,
  display: 'inline-flex',
  alignItems: 'center',
  flexWrap: 'nowrap'
});

var _default = (0, _theme.withTheme)(Button);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJCdXR0b24iLCJwcm9wcyIsInRoZW1lIiwiY2xhc3NOYW1lIiwiaW50ZW50IiwiaGVpZ2h0IiwiaXNBY3RpdmUiLCJjaGlsZHJlbiIsImRpc2FibGVkIiwiYXBwZWFyYW5jZSIsImlzTG9hZGluZyIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJpY29uQmVmb3JlS2V5IiwiaWNvbkJlZm9yZSIsImljb25BZnRlcktleSIsImljb25BZnRlciIsInRoZW1lZENsYXNzTmFtZSIsImdldEJ1dHRvbkNsYXNzTmFtZSIsInRleHRTaXplIiwiZ2V0VGV4dFNpemVGb3JDb250cm9sSGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiZ2V0Qm9yZGVyUmFkaXVzRm9yQ29udHJvbEhlaWdodCIsImljb25TaXplIiwiZ2V0SWNvblNpemVGb3JCdXR0b24iLCJwciIsInVuZGVmaW5lZCIsIk1hdGgiLCJyb3VuZCIsInBsIiwiY3giLCJzdHlsZXMiLCJQdXJlQ29tcG9uZW50IiwiZGltZW5zaW9ucyIsInByb3BUeXBlcyIsInNwYWNpbmciLCJwb3NpdGlvbiIsImxheW91dCIsIlByb3BUeXBlcyIsIm9uZU9mIiwiaXNSZXF1aXJlZCIsImJvb2wiLCJub2RlIiwib2JqZWN0Iiwic3RyaW5nIiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImZsZXhXcmFwIiwid2l0aFRoZW1lIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2J1dHRvbnMvc3JjL0J1dHRvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyBkaW1lbnNpb25zLCBzcGFjaW5nLCBwb3NpdGlvbiwgbGF5b3V0IH0gZnJvbSAndWktYm94J1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi4vLi4vaWNvbidcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tICcuLi8uLi9zcGlubmVyJ1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5cbmNsYXNzIEJ1dHRvbiBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBkaW1lbnNpb25zIHNwZWMgZnJvbSB0aGUgQm94IHByaW1pdGl2ZS5cbiAgICAgKi9cbiAgICAuLi5kaW1lbnNpb25zLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBzcGFjaW5nIHNwZWMgZnJvbSB0aGUgQm94IHByaW1pdGl2ZS5cbiAgICAgKi9cbiAgICAuLi5zcGFjaW5nLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBwb3NpdGlvbiBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmUuXG4gICAgICovXG4gICAgLi4ucG9zaXRpb24ucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIGxheW91dCBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmUuXG4gICAgICovXG4gICAgLi4ubGF5b3V0LnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbnRlbnQgb2YgdGhlIGJ1dHRvbi5cbiAgICAgKi9cbiAgICBpbnRlbnQ6IFByb3BUeXBlcy5vbmVPZihbJ25vbmUnLCAnc3VjY2VzcycsICd3YXJuaW5nJywgJ2RhbmdlciddKSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBhcHBlYXJhbmNlIG9mIHRoZSBidXR0b24uXG4gICAgICovXG4gICAgYXBwZWFyYW5jZTogUHJvcFR5cGVzLm9uZU9mKFsnZGVmYXVsdCcsICdtaW5pbWFsJywgJ3ByaW1hcnknXSkuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgc2hvdyBhIGxvYWRpbmcgc3Bpbm5lciBiZWZvcmUgdGhlIGNoaWxkcmVuLlxuICAgICAqIFRoaXMgYWxzbyBkaXNhYmxlcyB0aGUgYnV0dG9uLlxuICAgICAqL1xuICAgIGlzTG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBGb3JjZWZ1bGx5IHNldCB0aGUgYWN0aXZlIHN0YXRlIG9mIGEgYnV0dG9uLlxuICAgICAqIFVzZWZ1bCBpbiBjb25qdWN0aW9uIHdpdGggYSBQb3BvdmVyLlxuICAgICAqL1xuICAgIGlzQWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFNldHMgYW4gaWNvbiBiZWZvcmUgdGhlIHRleHQuIENhbiBiZSBhbnkgaWNvbiBmcm9tIEV2ZXJncmVlbiBvciBhIGN1c3RvbSBlbGVtZW50LlxuICAgICAqL1xuICAgIGljb25CZWZvcmU6IFByb3BUeXBlcy5ub2RlLFxuXG4gICAgLyoqXG4gICAgICogU2V0cyBhbiBpY29uIGFmdGVyIHRoZSB0ZXh0LiBDYW4gYmUgYW55IGljb24gZnJvbSBFdmVyZ3JlZW4gb3IgYSBjdXN0b20gZWxlbWVudC5cbiAgICAgKi9cbiAgICBpY29uQWZ0ZXI6IFByb3BUeXBlcy5ub2RlLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgYnV0dG9uIGlzIGRpc2FibGVkLlxuICAgICAqIGlzTG9hZGluZyBhbHNvIHNldHMgdGhlIGJ1dHRvbiB0byBkaXNhYmxlZC5cbiAgICAgKi9cbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBwcm92aWRlZCBieSBUaGVtZVByb3ZpZGVyLlxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBDbGFzcyBuYW1lIHBhc3NlZCB0byB0aGUgYnV0dG9uLlxuICAgICAqIE9ubHkgdXNlIGlmIHlvdSBrbm93IHdoYXQgeW91IGFyZSBkb2luZy5cbiAgICAgKi9cbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYXBwZWFyYW5jZTogJ2RlZmF1bHQnLFxuICAgIGhlaWdodDogMzIsXG4gICAgaW50ZW50OiAnbm9uZScsXG4gICAgaXNBY3RpdmU6IGZhbHNlLFxuICAgIHBhZGRpbmdCb3R0b206IDAsXG4gICAgcGFkZGluZ1RvcDogMFxuICB9XG5cbiAgc3RhdGljIHN0eWxlcyA9IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBmb250RmFtaWx5OiAndWknLFxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGZsZXhXcmFwOiAnbm93cmFwJ1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRoZW1lLFxuICAgICAgY2xhc3NOYW1lLFxuXG4gICAgICBpbnRlbnQsXG4gICAgICBoZWlnaHQsXG4gICAgICBpc0FjdGl2ZSxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBhcHBlYXJhbmNlLFxuICAgICAgaXNMb2FkaW5nLFxuXG4gICAgICAvLyBQYWRkaW5nc1xuICAgICAgcGFkZGluZ1JpZ2h0LFxuICAgICAgcGFkZGluZ0xlZnQsXG4gICAgICBwYWRkaW5nVG9wLFxuICAgICAgcGFkZGluZ0JvdHRvbSxcblxuICAgICAgLy8gSWNvbnNcbiAgICAgIGljb25CZWZvcmU6IGljb25CZWZvcmVLZXksXG4gICAgICBpY29uQWZ0ZXI6IGljb25BZnRlcktleSxcblxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgdGhlbWVkQ2xhc3NOYW1lID0gdGhlbWUuZ2V0QnV0dG9uQ2xhc3NOYW1lKGFwcGVhcmFuY2UsIGludGVudClcbiAgICBjb25zdCB0ZXh0U2l6ZSA9IHRoZW1lLmdldFRleHRTaXplRm9yQ29udHJvbEhlaWdodChoZWlnaHQpXG5cbiAgICBjb25zdCBib3JkZXJSYWRpdXMgPSB0aGVtZS5nZXRCb3JkZXJSYWRpdXNGb3JDb250cm9sSGVpZ2h0KGhlaWdodClcbiAgICBjb25zdCBpY29uU2l6ZSA9IHRoZW1lLmdldEljb25TaXplRm9yQnV0dG9uKGhlaWdodClcblxuICAgIGNvbnN0IHByID1cbiAgICAgIHBhZGRpbmdSaWdodCAhPT0gdW5kZWZpbmVkID8gcGFkZGluZ1JpZ2h0IDogTWF0aC5yb3VuZChoZWlnaHQgLyAyKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5lZ2F0ZWQtY29uZGl0aW9uXG4gICAgY29uc3QgcGwgPSBwYWRkaW5nTGVmdCAhPT0gdW5kZWZpbmVkID8gcGFkZGluZ0xlZnQgOiBNYXRoLnJvdW5kKGhlaWdodCAvIDIpIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmVnYXRlZC1jb25kaXRpb25cblxuICAgIGxldCBpY29uQmVmb3JlXG4gICAgaWYgKGljb25CZWZvcmVLZXkpIHtcbiAgICAgIGljb25CZWZvcmUgPSAoXG4gICAgICAgIDxJY29uXG4gICAgICAgICAgaWNvbj17aWNvbkJlZm9yZUtleX1cbiAgICAgICAgICBzaXplPXtpY29uU2l6ZX1cbiAgICAgICAgICBtYXJnaW5MZWZ0PXstTWF0aC5yb3VuZChwbCAqIDAuMil9XG4gICAgICAgICAgbWFyZ2luUmlnaHQ9e01hdGgucm91bmQoaWNvblNpemUgKiAwLjcpfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH1cblxuICAgIGxldCBpY29uQWZ0ZXJcbiAgICBpZiAoaWNvbkFmdGVyS2V5KSB7XG4gICAgICBpY29uQWZ0ZXIgPSAoXG4gICAgICAgIDxJY29uXG4gICAgICAgICAgaWNvbj17aWNvbkFmdGVyS2V5fVxuICAgICAgICAgIHNpemU9e2ljb25TaXplfVxuICAgICAgICAgIG1hcmdpblJpZ2h0PXstTWF0aC5yb3VuZChwbCAqIDAuMil9XG4gICAgICAgICAgbWFyZ2luTGVmdD17TWF0aC5yb3VuZChpY29uU2l6ZSAqIDAuNyl9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUZXh0XG4gICAgICAgIGlzPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjeCh0aGVtZWRDbGFzc05hbWUsIGNsYXNzTmFtZSl9XG4gICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzPXtib3JkZXJSYWRpdXN9XG4gICAgICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzPXtib3JkZXJSYWRpdXN9XG4gICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM9e2JvcmRlclJhZGl1c31cbiAgICAgICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1cz17Ym9yZGVyUmFkaXVzfVxuICAgICAgICBwYWRkaW5nVG9wPXtwYWRkaW5nVG9wfVxuICAgICAgICBwYWRkaW5nQm90dG9tPXtwYWRkaW5nQm90dG9tfVxuICAgICAgICBwYWRkaW5nUmlnaHQ9e3ByfVxuICAgICAgICBwYWRkaW5nTGVmdD17cGx9XG4gICAgICAgIG1hcmdpbkxlZnQ9ezB9IC8vIFJlbW92ZXMgd2VpcmQgbWFyZ2lucyBpbiBTYWZhcmlcbiAgICAgICAgbWFyZ2luUmlnaHQ9ezB9IC8vIFJlbW92ZXMgd2VpcmQgbWFyZ2lucyBpbiBTYWZhcmlcbiAgICAgICAgbWFyZ2luVG9wPXswfSAvLyBSZW1vdmVzIHdlaXJkIG1hcmdpbnMgaW4gU2FmYXJpXG4gICAgICAgIG1hcmdpbkJvdHRvbT17MH0gLy8gUmVtb3ZlcyB3ZWlyZCBtYXJnaW5zIGluIFNhZmFyaVxuICAgICAgICBzaXplPXt0ZXh0U2l6ZX1cbiAgICAgICAgY29sb3I9e251bGx9IC8vIFByZXZlbnQgdGhlIFRleHQgY29sb3Igb3ZlcnJpZGluZyB0aGUgZ2xhbW9yIGFwcGVhcmFuY2VTdHlsZSBjb2xvclxuICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgbGluZUhlaWdodD17YCR7aGVpZ2h0fXB4YH1cbiAgICAgICAgey4uLihpc0FjdGl2ZSA/IHsgJ2RhdGEtYWN0aXZlJzogdHJ1ZSB9IDoge30pfVxuICAgICAgICB7Li4uQnV0dG9uLnN0eWxlc31cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWQgfHwgaXNMb2FkaW5nfVxuICAgICAgPlxuICAgICAgICB7aXNMb2FkaW5nICYmIChcbiAgICAgICAgICA8U3Bpbm5lclxuICAgICAgICAgICAgbWFyZ2luTGVmdD17LU1hdGgucm91bmQoaGVpZ2h0IC8gOCl9XG4gICAgICAgICAgICBtYXJnaW5SaWdodD17TWF0aC5yb3VuZChoZWlnaHQgLyA0KX1cbiAgICAgICAgICAgIHNpemU9e01hdGgucm91bmQoaGVpZ2h0IC8gMil9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge2ljb25CZWZvcmUgfHwgbnVsbH1cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICB7aWNvbkFmdGVyIHx8IG51bGx9XG4gICAgICA8L1RleHQ+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShCdXR0b24pXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLE07Ozs7Ozs7Ozs7OztXQTBGSixrQkFBUztNQUNQLGtCQXVCSSxLQUFLQyxLQXZCVDtNQUFBLElBQ0VDLEtBREYsZUFDRUEsS0FERjtNQUFBLElBRUVDLFNBRkYsZUFFRUEsU0FGRjtNQUFBLElBSUVDLE1BSkYsZUFJRUEsTUFKRjtNQUFBLElBS0VDLE1BTEYsZUFLRUEsTUFMRjtNQUFBLElBTUVDLFFBTkYsZUFNRUEsUUFORjtNQUFBLElBT0VDLFFBUEYsZUFPRUEsUUFQRjtNQUFBLElBUUVD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