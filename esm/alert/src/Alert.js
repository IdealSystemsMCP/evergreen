import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["theme", "title", "intent", "hasTrim", "hasIcon", "children", "appearance", "isRemoveable", "onRemove"],
    _excluded2 = ["className"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { spacing, dimensions, position, layout } from 'ui-box';
import { withTheme } from '../../theme';
import { Pane } from '../../layers';
import { Heading, Paragraph } from '../../typography';
import { IconButton } from '../../buttons';
import { Icon } from '../../icon';

var Alert = /*#__PURE__*/function (_PureComponent) {
  _inherits(Alert, _PureComponent);

  var _super = _createSuper(Alert);

  function Alert() {
    var _this;

    _classCallCheck(this, Alert);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "getIconForIntent", function (intent) {
      var theme = _this.props.theme;
      return /*#__PURE__*/React.createElement(Icon, _extends({
        size: 14
      }, theme.getIconForIntent(intent)));
    });

    return _this;
  }

  _createClass(Alert, [{
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
          props = _objectWithoutProperties(_this$props, _excluded);
      /**
       * Note that Alert return a className and additional properties.
       */


      var _theme$getAlertProps = theme.getAlertProps({
        appearance: appearance,
        intent: intent,
        hasTrim: hasTrim
      }),
          className = _theme$getAlertProps.className,
          themeProps = _objectWithoutProperties(_theme$getAlertProps, _excluded2);

      return /*#__PURE__*/React.createElement(Pane, _extends({
        className: className,
        role: "alert",
        backgroundColor: "white",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        paddingY: 12,
        paddingX: 16
      }, themeProps, props), hasIcon && /*#__PURE__*/React.createElement(Pane, {
        marginRight: 10,
        marginLeft: 2,
        height: 20,
        display: "flex",
        alignItems: "center"
      }, this.getIconForIntent(intent)), /*#__PURE__*/React.createElement(Pane, {
        display: "flex",
        width: "100%"
      }, /*#__PURE__*/React.createElement(Pane, {
        flex: 1
      }, /*#__PURE__*/React.createElement(Heading, {
        is: "h4",
        fontWeight: 600,
        size: 400,
        marginTop: 0,
        marginBottom: 0
      }, title), typeof children === 'string' ? /*#__PURE__*/React.createElement(Paragraph, {
        size: 400,
        color: "muted"
      }, children) : children), isRemoveable && /*#__PURE__*/React.createElement(Pane, {
        marginLeft: 24,
        flexShrink: 0,
        marginBottom: -2,
        marginTop: -2,
        marginRight: -2
      }, /*#__PURE__*/React.createElement(IconButton, {
        icon: "cross",
        appearance: "minimal",
        height: 24,
        onClick: onRemove
      }))));
    }
  }]);

  return Alert;
}(PureComponent);

Alert.displayName = "Alert";

_defineProperty(Alert, "propTypes", _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, spacing.propTypes), position.propTypes), layout.propTypes), dimensions.propTypes), {}, {
  /**
   * The content of the alert. When a string is passed it is wrapped in a `<Text size={400} />` component.
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /**
   * The intent of the alert.
   */
  intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger']).isRequired,

  /**
   * The title of the alert.
   */
  title: PropTypes.node,

  /**
   * When true, show a border on the left matching the type.
   */
  hasTrim: PropTypes.bool,

  /**
   * When true, show a icon on the left matching the type,
   */
  hasIcon: PropTypes.bool,

  /**
   * When true, show a remove icon button.
   */
  isRemoveable: PropTypes.bool,

  /**
   * Function called when the remove button is clicked.
   */
  onRemove: PropTypes.func,

  /**
   * The appearance of the alert.
   */
  appearance: PropTypes.oneOf(['default', 'card']),

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired
}));

_defineProperty(Alert, "defaultProps", {
  intent: 'none',
  hasTrim: true,
  hasIcon: true,
  isRemoveable: false,
  appearance: 'default'
});

export default withTheme(Alert);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJzcGFjaW5nIiwiZGltZW5zaW9ucyIsInBvc2l0aW9uIiwibGF5b3V0Iiwid2l0aFRoZW1lIiwiUGFuZSIsIkhlYWRpbmciLCJQYXJhZ3JhcGgiLCJJY29uQnV0dG9uIiwiSWNvbiIsIkFsZXJ0IiwiaW50ZW50IiwidGhlbWUiLCJwcm9wcyIsImdldEljb25Gb3JJbnRlbnQiLCJ0aXRsZSIsImhhc1RyaW0iLCJoYXNJY29uIiwiY2hpbGRyZW4iLCJhcHBlYXJhbmNlIiwiaXNSZW1vdmVhYmxlIiwib25SZW1vdmUiLCJnZXRBbGVydFByb3BzIiwiY2xhc3NOYW1lIiwidGhlbWVQcm9wcyIsInByb3BUeXBlcyIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm5vZGUiLCJvbmVPZiIsImlzUmVxdWlyZWQiLCJib29sIiwiZnVuYyIsIm9iamVjdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbGVydC9zcmMvQWxlcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IHNwYWNpbmcsIGRpbWVuc2lvbnMsIHBvc2l0aW9uLCBsYXlvdXQgfSBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5pbXBvcnQgeyBIZWFkaW5nLCBQYXJhZ3JhcGggfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgSWNvbkJ1dHRvbiB9IGZyb20gJy4uLy4uL2J1dHRvbnMnXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi4vLi4vaWNvbidcblxuY2xhc3MgQWxlcnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyBzb21lIEJveCBBUElzLlxuICAgICAqL1xuICAgIC4uLnNwYWNpbmcucHJvcFR5cGVzLFxuICAgIC4uLnBvc2l0aW9uLnByb3BUeXBlcyxcbiAgICAuLi5sYXlvdXQucHJvcFR5cGVzLFxuICAgIC4uLmRpbWVuc2lvbnMucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGFsZXJ0LiBXaGVuIGEgc3RyaW5nIGlzIHBhc3NlZCBpdCBpcyB3cmFwcGVkIGluIGEgYDxUZXh0IHNpemU9ezQwMH0gLz5gIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm5vZGVdKSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbnRlbnQgb2YgdGhlIGFsZXJ0LlxuICAgICAqL1xuICAgIGludGVudDogUHJvcFR5cGVzLm9uZU9mKFsnbm9uZScsICdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJ10pXG4gICAgICAuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSBvZiB0aGUgYWxlcnQuXG4gICAgICovXG4gICAgdGl0bGU6IFByb3BUeXBlcy5ub2RlLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCBzaG93IGEgYm9yZGVyIG9uIHRoZSBsZWZ0IG1hdGNoaW5nIHRoZSB0eXBlLlxuICAgICAqL1xuICAgIGhhc1RyaW06IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCBzaG93IGEgaWNvbiBvbiB0aGUgbGVmdCBtYXRjaGluZyB0aGUgdHlwZSxcbiAgICAgKi9cbiAgICBoYXNJY29uOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgc2hvdyBhIHJlbW92ZSBpY29uIGJ1dHRvbi5cbiAgICAgKi9cbiAgICBpc1JlbW92ZWFibGU6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gY2FsbGVkIHdoZW4gdGhlIHJlbW92ZSBidXR0b24gaXMgY2xpY2tlZC5cbiAgICAgKi9cbiAgICBvblJlbW92ZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYXBwZWFyYW5jZSBvZiB0aGUgYWxlcnQuXG4gICAgICovXG4gICAgYXBwZWFyYW5jZTogUHJvcFR5cGVzLm9uZU9mKFsnZGVmYXVsdCcsICdjYXJkJ10pLFxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGludGVudDogJ25vbmUnLFxuICAgIGhhc1RyaW06IHRydWUsXG4gICAgaGFzSWNvbjogdHJ1ZSxcbiAgICBpc1JlbW92ZWFibGU6IGZhbHNlLFxuICAgIGFwcGVhcmFuY2U6ICdkZWZhdWx0J1xuICB9XG5cbiAgZ2V0SWNvbkZvckludGVudCA9IGludGVudCA9PiB7XG4gICAgY29uc3QgeyB0aGVtZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIDxJY29uIHNpemU9ezE0fSB7Li4udGhlbWUuZ2V0SWNvbkZvckludGVudChpbnRlbnQpfSAvPlxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRoZW1lLFxuXG4gICAgICB0aXRsZSxcbiAgICAgIGludGVudCxcbiAgICAgIGhhc1RyaW0sXG4gICAgICBoYXNJY29uLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBhcHBlYXJhbmNlLFxuICAgICAgaXNSZW1vdmVhYmxlLFxuICAgICAgb25SZW1vdmUsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICAvKipcbiAgICAgKiBOb3RlIHRoYXQgQWxlcnQgcmV0dXJuIGEgY2xhc3NOYW1lIGFuZCBhZGRpdGlvbmFsIHByb3BlcnRpZXMuXG4gICAgICovXG4gICAgY29uc3QgeyBjbGFzc05hbWUsIC4uLnRoZW1lUHJvcHMgfSA9IHRoZW1lLmdldEFsZXJ0UHJvcHMoe1xuICAgICAgYXBwZWFyYW5jZSxcbiAgICAgIGludGVudCxcbiAgICAgIGhhc1RyaW1cbiAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYW5lXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICByb2xlPVwiYWxlcnRcIlxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgIG92ZXJmbG93PVwiaGlkZGVuXCJcbiAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgcGFkZGluZ1k9ezEyfVxuICAgICAgICBwYWRkaW5nWD17MTZ9XG4gICAgICAgIHsuLi50aGVtZVByb3BzfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIHtoYXNJY29uICYmIChcbiAgICAgICAgICA8UGFuZVxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ9ezEwfVxuICAgICAgICAgICAgbWFyZ2luTGVmdD17Mn1cbiAgICAgICAgICAgIGhlaWdodD17MjB9XG4gICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dGhpcy5nZXRJY29uRm9ySW50ZW50KGludGVudCl9XG4gICAgICAgICAgPC9QYW5lPlxuICAgICAgICApfVxuICAgICAgICA8UGFuZSBkaXNwbGF5PVwiZmxleFwiIHdpZHRoPVwiMTAwJVwiPlxuICAgICAgICAgIDxQYW5lIGZsZXg9ezF9PlxuICAgICAgICAgICAgPEhlYWRpbmdcbiAgICAgICAgICAgICAgaXM9XCJoNFwiXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ9ezYwMH1cbiAgICAgICAgICAgICAgc2l6ZT17NDAwfVxuICAgICAgICAgICAgICBtYXJnaW5Ub3A9ezB9XG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbT17MH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAge3R5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycgPyAoXG4gICAgICAgICAgICAgIDxQYXJhZ3JhcGggc2l6ZT17NDAwfSBjb2xvcj1cIm11dGVkXCI+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICB7aXNSZW1vdmVhYmxlICYmIChcbiAgICAgICAgICAgIDxQYW5lXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQ9ezI0fVxuICAgICAgICAgICAgICBmbGV4U2hyaW5rPXswfVxuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b209ey0yfVxuICAgICAgICAgICAgICBtYXJnaW5Ub3A9ey0yfVxuICAgICAgICAgICAgICBtYXJnaW5SaWdodD17LTJ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgaWNvbj1cImNyb3NzXCJcbiAgICAgICAgICAgICAgICBhcHBlYXJhbmNlPVwibWluaW1hbFwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsyNH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblJlbW92ZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICApfVxuICAgICAgICA8L1BhbmU+XG4gICAgICA8L1BhbmU+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShBbGVy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