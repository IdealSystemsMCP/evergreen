"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

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

var _theme = require("../../theme");

var _layers = require("../../layers");

var _typography = require("../../typography");

var _buttons = require("../../buttons");

var _icon = require("../../icon");

var _excluded = ["theme", "title", "intent", "hasTrim", "hasIcon", "children", "appearance", "isRemoveable", "onRemove"],
    _excluded2 = ["className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Alert = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Alert, _PureComponent);

  var _super = _createSuper(Alert);

  function Alert() {
    var _this;

    (0, _classCallCheck2["default"])(this, Alert);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getIconForIntent", function (intent) {
      var theme = _this.props.theme;
      return /*#__PURE__*/_react["default"].createElement(_icon.Icon, (0, _extends2["default"])({
        size: 14
      }, theme.getIconForIntent(intent)));
    });
    return _this;
  }

  (0, _createClass2["default"])(Alert, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          title = _this$props.title,
          intent = _this$props.intent,
          hasTrim = _this$props.hasTrim,
          hasIcon = _this$props.hasIcon,
          children = _this$props.children,
          appearance = _this$props.appearance,
          isRemoveable = _this$props.isRemoveable,
          onRemove = _this$props.onRemove,
          props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      /**
       * Note that Alert return a className and additional properties.
       */

      var _theme$getAlertProps = theme.getAlertProps({
        appearance: appearance,
        intent: intent,
        hasTrim: hasTrim
      }),
          className = _theme$getAlertProps.className,
          themeProps = (0, _objectWithoutProperties2["default"])(_theme$getAlertProps, _excluded2);

      return /*#__PURE__*/_react["default"].createElement(_layers.Pane, (0, _extends2["default"])({
        className: className,
        role: "alert",
        backgroundColor: "white",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        paddingY: 12,
        paddingX: 16
      }, themeProps, props), hasIcon && /*#__PURE__*/_react["default"].createElement(_layers.Pane, {
        marginRight: 10,
        marginLeft: 2,
        height: 20,
        display: "flex",
        alignItems: "center"
      }, this.getIconForIntent(intent)), /*#__PURE__*/_react["default"].createElement(_layers.Pane, {
        display: "flex",
        width: "100%"
      }, /*#__PURE__*/_react["default"].createElement(_layers.Pane, {
        flex: 1
      }, /*#__PURE__*/_react["default"].createElement(_typography.Heading, {
        is: "h4",
        fontWeight: 600,
        size: 400,
        marginTop: 0,
        marginBottom: 0
      }, title), typeof children === 'string' ? /*#__PURE__*/_react["default"].createElement(_typography.Paragraph, {
        size: 400,
        color: "muted"
      }, children) : children), isRemoveable && /*#__PURE__*/_react["default"].createElement(_layers.Pane, {
        marginLeft: 24,
        flexShrink: 0,
        marginBottom: -2,
        marginTop: -2,
        marginRight: -2
      }, /*#__PURE__*/_react["default"].createElement(_buttons.IconButton, {
        icon: "cross",
        appearance: "minimal",
        height: 24,
        onClick: onRemove
      }))));
    }
  }]);
  return Alert;
}(_react.PureComponent);

Alert.displayName = "Alert";
(0, _defineProperty2["default"])(Alert, "propTypes", _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _uiBox.spacing.propTypes), _uiBox.position.propTypes), _uiBox.layout.propTypes), _uiBox.dimensions.propTypes), {}, {
  /**
   * The content of the alert. When a string is passed it is wrapped in a `<Text size={400} />` component.
   */
  children: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),

  /**
   * The intent of the alert.
   */
  intent: _propTypes["default"].oneOf(['none', 'success', 'warning', 'danger']).isRequired,

  /**
   * The title of the alert.
   */
  title: _propTypes["default"].node,

  /**
   * When true, show a border on the left matching the type.
   */
  hasTrim: _propTypes["default"].bool,

  /**
   * When true, show a icon on the left matching the type,
   */
  hasIcon: _propTypes["default"].bool,

  /**
   * When true, show a remove icon button.
   */
  isRemoveable: _propTypes["default"].bool,

  /**
   * Function called when the remove button is clicked.
   */
  onRemove: _propTypes["default"].func,

  /**
   * The appearance of the alert.
   */
  appearance: _propTypes["default"].oneOf(['default', 'card']),

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes["default"].object.isRequired
}));
(0, _defineProperty2["default"])(Alert, "defaultProps", {
  intent: 'none',
  hasTrim: true,
  hasIcon: true,
  isRemoveable: false,
  appearance: 'default'
});

var _default = (0, _theme.withTheme)(Alert);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBbGVydCIsImludGVudCIsInRoZW1lIiwicHJvcHMiLCJnZXRJY29uRm9ySW50ZW50IiwidGl0bGUiLCJoYXNUcmltIiwiaGFzSWNvbiIsImNoaWxkcmVuIiwiYXBwZWFyYW5jZSIsImlzUmVtb3ZlYWJsZSIsIm9uUmVtb3ZlIiwiZ2V0QWxlcnRQcm9wcyIsImNsYXNzTmFtZSIsInRoZW1lUHJvcHMiLCJQdXJlQ29tcG9uZW50Iiwic3BhY2luZyIsInByb3BUeXBlcyIsInBvc2l0aW9uIiwibGF5b3V0IiwiZGltZW5zaW9ucyIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm5vZGUiLCJvbmVPZiIsImlzUmVxdWlyZWQiLCJib29sIiwiZnVuYyIsIm9iamVjdCIsIndpdGhUaGVtZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbGVydC9zcmMvQWxlcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IHNwYWNpbmcsIGRpbWVuc2lvbnMsIHBvc2l0aW9uLCBsYXlvdXQgfSBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5pbXBvcnQgeyBIZWFkaW5nLCBQYXJhZ3JhcGggfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgSWNvbkJ1dHRvbiB9IGZyb20gJy4uLy4uL2J1dHRvbnMnXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi4vLi4vaWNvbidcblxuY2xhc3MgQWxlcnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyBzb21lIEJveCBBUElzLlxuICAgICAqL1xuICAgIC4uLnNwYWNpbmcucHJvcFR5cGVzLFxuICAgIC4uLnBvc2l0aW9uLnByb3BUeXBlcyxcbiAgICAuLi5sYXlvdXQucHJvcFR5cGVzLFxuICAgIC4uLmRpbWVuc2lvbnMucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGFsZXJ0LiBXaGVuIGEgc3RyaW5nIGlzIHBhc3NlZCBpdCBpcyB3cmFwcGVkIGluIGEgYDxUZXh0IHNpemU9ezQwMH0gLz5gIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm5vZGVdKSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbnRlbnQgb2YgdGhlIGFsZXJ0LlxuICAgICAqL1xuICAgIGludGVudDogUHJvcFR5cGVzLm9uZU9mKFsnbm9uZScsICdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJ10pXG4gICAgICAuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSBvZiB0aGUgYWxlcnQuXG4gICAgICovXG4gICAgdGl0bGU6IFByb3BUeXBlcy5ub2RlLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCBzaG93IGEgYm9yZGVyIG9uIHRoZSBsZWZ0IG1hdGNoaW5nIHRoZSB0eXBlLlxuICAgICAqL1xuICAgIGhhc1RyaW06IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCBzaG93IGEgaWNvbiBvbiB0aGUgbGVmdCBtYXRjaGluZyB0aGUgdHlwZSxcbiAgICAgKi9cbiAgICBoYXNJY29uOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgc2hvdyBhIHJlbW92ZSBpY29uIGJ1dHRvbi5cbiAgICAgKi9cbiAgICBpc1JlbW92ZWFibGU6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gY2FsbGVkIHdoZW4gdGhlIHJlbW92ZSBidXR0b24gaXMgY2xpY2tlZC5cbiAgICAgKi9cbiAgICBvblJlbW92ZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYXBwZWFyYW5jZSBvZiB0aGUgYWxlcnQuXG4gICAgICovXG4gICAgYXBwZWFyYW5jZTogUHJvcFR5cGVzLm9uZU9mKFsnZGVmYXVsdCcsICdjYXJkJ10pLFxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGludGVudDogJ25vbmUnLFxuICAgIGhhc1RyaW06IHRydWUsXG4gICAgaGFzSWNvbjogdHJ1ZSxcbiAgICBpc1JlbW92ZWFibGU6IGZhbHNlLFxuICAgIGFwcGVhcmFuY2U6ICdkZWZhdWx0J1xuICB9XG5cbiAgZ2V0SWNvbkZvckludGVudCA9IGludGVudCA9PiB7XG4gICAgY29uc3QgeyB0aGVtZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIDxJY29uIHNpemU9ezE0fSB7Li4udGhlbWUuZ2V0SWNvbkZvckludGVudChpbnRlbnQpfSAvPlxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRoZW1lLFxuXG4gICAgICB0aXRsZSxcbiAgICAgIGludGVudCxcbiAgICAgIGhhc1RyaW0sXG4gICAgICBoYXNJY29uLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBhcHBlYXJhbmNlLFxuICAgICAgaXNSZW1vdmVhYmxlLFxuICAgICAgb25SZW1vdmUsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICAvKipcbiAgICAgKiBOb3RlIHRoYXQgQWxlcnQgcmV0dXJuIGEgY2xhc3NOYW1lIGFuZCBhZGRpdGlvbmFsIHByb3BlcnRpZXMuXG4gICAgICovXG4gICAgY29uc3QgeyBjbGFzc05hbWUsIC4uLnRoZW1lUHJvcHMgfSA9IHRoZW1lLmdldEFsZXJ0UHJvcHMoe1xuICAgICAgYXBwZWFyYW5jZSxcbiAgICAgIGludGVudCxcbiAgICAgIGhhc1RyaW1cbiAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYW5lXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICByb2xlPVwiYWxlcnRcIlxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgIG92ZXJmbG93PVwiaGlkZGVuXCJcbiAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgcGFkZGluZ1k9ezEyfVxuICAgICAgICBwYWRkaW5nWD17MTZ9XG4gICAgICAgIHsuLi50aGVtZVByb3BzfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIHtoYXNJY29uICYmIChcbiAgICAgICAgICA8UGFuZVxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ9ezEwfVxuICAgICAgICAgICAgbWFyZ2luTGVmdD17Mn1cbiAgICAgICAgICAgIGhlaWdodD17MjB9XG4gICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dGhpcy5nZXRJY29uRm9ySW50ZW50KGludGVudCl9XG4gICAgICAgICAgPC9QYW5lPlxuICAgICAgICApfVxuICAgICAgICA8UGFuZSBkaXNwbGF5PVwiZmxleFwiIHdpZHRoPVwiMTAwJVwiPlxuICAgICAgICAgIDxQYW5lIGZsZXg9ezF9PlxuICAgICAgICAgICAgPEhlYWRpbmdcbiAgICAgICAgICAgICAgaXM9XCJoNFwiXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ9ezYwMH1cbiAgICAgICAgICAgICAgc2l6ZT17NDAwfVxuICAgICAgICAgICAgICBtYXJnaW5Ub3A9ezB9XG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbT17MH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAge3R5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycgPyAoXG4gICAgICAgICAgICAgIDxQYXJhZ3JhcGggc2l6ZT17NDAwfSBjb2xvcj1cIm11dGVkXCI+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICB7aXNSZW1vdmVhYmxlICYmIChcbiAgICAgICAgICAgIDxQYW5lXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQ9ezI0fVxuICAgICAgICAgICAgICBmbGV4U2hyaW5rPXswfVxuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b209ey0yfVxuICAgICAgICAgICAgICBtYXJnaW5Ub3A9ey0yfVxuICAgICAgICAgICAgICBtYXJnaW5SaWdodD17LTJ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgaWNvbj1cImNyb3NzXCJcbiAgICAgICAgICAgICAgICBhcHBlYXJhbmNlPVwibWluaW1hbFwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsyNH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblJlbW92ZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICApfVxuICAgICAgICA8L1BhbmU+XG4gICAgICA8L1BhbmU+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShBbGVydClcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFD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