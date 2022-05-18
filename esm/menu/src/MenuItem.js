import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["is", "children", "theme", "appearance", "secondaryText", "intent", "icon"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import PropTypes from 'prop-types';
import Box from 'ui-box';
import { Pane } from '../../layers';
import { Text } from '../../typography';
import { Icon } from '../../icon';
import { withTheme } from '../../theme';
import safeInvoke from '../../lib/safe-invoke';
import warning from '../../lib/warning';

var MenuItem = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(MenuItem, _React$PureComponent);

  var _super = _createSuper(MenuItem);

  function MenuItem() {
    var _this;

    _classCallCheck(this, MenuItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (event) {
      _this.props.onSelect(event);
      /* eslint-disable react/prop-types */


      safeInvoke(_this.props.onClick, event);
      /* eslint-enable react/prop-types */
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyPress", function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        _this.props.onSelect(event);

        event.preventDefault();
      }
      /* eslint-disable react/prop-types */


      safeInvoke(_this.props.onKeyPress, event);
      /* eslint-enable react/prop-types */
    });

    return _this;
  }

  _createClass(MenuItem, [{
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
          passthroughProps = _objectWithoutProperties(_this$props, _excluded);

      if (process.env.NODE_ENV !== 'production') {
        warning('onClick' in this.props, '<Menu.Item> expects `onSelect` prop, but you passed `onClick`.');
      }

      var themedClassName = theme.getMenuItemClassName(appearance, 'none');
      return /*#__PURE__*/React.createElement(Pane, _extends({
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
      }, passthroughProps), icon && /*#__PURE__*/React.createElement(Icon, {
        color: intent === 'none' ? 'default' : intent,
        icon: icon,
        marginLeft: 16,
        marginRight: -4,
        size: 16,
        flexShrink: 0
      }), /*#__PURE__*/React.createElement(Text, {
        color: intent,
        marginLeft: 16,
        marginRight: 16,
        flex: 1
      }, children), secondaryText && /*#__PURE__*/React.createElement(Text, {
        marginRight: 16,
        color: "muted"
      }, secondaryText));
    }
  }]);

  return MenuItem;
}(React.PureComponent);

MenuItem.displayName = "MenuItem";

_defineProperty(MenuItem, "propTypes", {
  /**
   * Element type to use for the menu item.
   * For example: `<MenuItem is={ReactRouterLink}>...</MenuItem>`
   */
  is: Box.propTypes.is,

  /**
   * Function that is called on click and enter/space keypress.
   */
  onSelect: PropTypes.func,

  /**
   * The icon before the label.
   */
  icon: PropTypes.node,

  /**
   * The children of the component.
   */
  children: PropTypes.node,

  /**
   * Secondary text shown on the right.
   */
  secondaryText: PropTypes.node,

  /**
   * The default theme only supports one default appearance.
   */
  appearance: PropTypes.string.isRequired,

  /**
   * The intent of the menu item.
   */
  intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger']).isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired
});

_defineProperty(MenuItem, "defaultProps", {
  is: 'div',
  intent: 'none',
  appearance: 'default',
  onSelect: function onSelect() {}
});

export default withTheme(MenuItem);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkJveCIsIlBhbmUiLCJUZXh0IiwiSWNvbiIsIndpdGhUaGVtZSIsInNhZmVJbnZva2UiLCJ3YXJuaW5nIiwiTWVudUl0ZW0iLCJldmVudCIsInByb3BzIiwib25TZWxlY3QiLCJvbkNsaWNrIiwia2V5IiwicHJldmVudERlZmF1bHQiLCJvbktleVByZXNzIiwiaXMiLCJjaGlsZHJlbiIsInRoZW1lIiwiYXBwZWFyYW5jZSIsInNlY29uZGFyeVRleHQiLCJpbnRlbnQiLCJpY29uIiwicGFzc3Rocm91Z2hQcm9wcyIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsInRoZW1lZENsYXNzTmFtZSIsImdldE1lbnVJdGVtQ2xhc3NOYW1lIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVLZXlQcmVzcyIsIlB1cmVDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJmdW5jIiwibm9kZSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJvbmVPZiIsIm9iamVjdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tZW51L3NyYy9NZW51SXRlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCB7IEljb24gfSBmcm9tICcuLi8uLi9pY29uJ1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5pbXBvcnQgc2FmZUludm9rZSBmcm9tICcuLi8uLi9saWIvc2FmZS1pbnZva2UnXG5pbXBvcnQgd2FybmluZyBmcm9tICcuLi8uLi9saWIvd2FybmluZydcblxuY2xhc3MgTWVudUl0ZW0gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBFbGVtZW50IHR5cGUgdG8gdXNlIGZvciB0aGUgbWVudSBpdGVtLlxuICAgICAqIEZvciBleGFtcGxlOiBgPE1lbnVJdGVtIGlzPXtSZWFjdFJvdXRlckxpbmt9Pi4uLjwvTWVudUl0ZW0+YFxuICAgICAqL1xuICAgIGlzOiBCb3gucHJvcFR5cGVzLmlzLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgb24gY2xpY2sgYW5kIGVudGVyL3NwYWNlIGtleXByZXNzLlxuICAgICAqL1xuICAgIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBpY29uIGJlZm9yZSB0aGUgbGFiZWwuXG4gICAgICovXG4gICAgaWNvbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY2hpbGRyZW4gb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBTZWNvbmRhcnkgdGV4dCBzaG93biBvbiB0aGUgcmlnaHQuXG4gICAgICovXG4gICAgc2Vjb25kYXJ5VGV4dDogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCB0aGVtZSBvbmx5IHN1cHBvcnRzIG9uZSBkZWZhdWx0IGFwcGVhcmFuY2UuXG4gICAgICovXG4gICAgYXBwZWFyYW5jZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGludGVudCBvZiB0aGUgbWVudSBpdGVtLlxuICAgICAqL1xuICAgIGludGVudDogUHJvcFR5cGVzLm9uZU9mKFsnbm9uZScsICdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJ10pXG4gICAgICAuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIHByb3ZpZGVkIGJ5IFRoZW1lUHJvdmlkZXIuXG4gICAgICovXG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBpczogJ2RpdicsXG4gICAgaW50ZW50OiAnbm9uZScsXG4gICAgYXBwZWFyYW5jZTogJ2RlZmF1bHQnLFxuICAgIG9uU2VsZWN0OiAoKSA9PiB7fVxuICB9XG5cbiAgaGFuZGxlQ2xpY2sgPSBldmVudCA9PiB7XG4gICAgdGhpcy5wcm9wcy5vblNlbGVjdChldmVudClcblxuICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cbiAgICBzYWZlSW52b2tlKHRoaXMucHJvcHMub25DbGljaywgZXZlbnQpXG4gICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXG4gIH1cblxuICBoYW5kbGVLZXlQcmVzcyA9IGV2ZW50ID0+IHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInIHx8IGV2ZW50LmtleSA9PT0gJyAnKSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KGV2ZW50KVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cbiAgICBzYWZlSW52b2tlKHRoaXMucHJvcHMub25LZXlQcmVzcywgZXZlbnQpXG4gICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaXMsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIHRoZW1lLFxuICAgICAgYXBwZWFyYW5jZSxcbiAgICAgIHNlY29uZGFyeVRleHQsXG4gICAgICBpbnRlbnQsXG4gICAgICBpY29uLFxuICAgICAgLi4ucGFzc3Rocm91Z2hQcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgd2FybmluZyhcbiAgICAgICAgJ29uQ2xpY2snIGluIHRoaXMucHJvcHMsXG4gICAgICAgICc8TWVudS5JdGVtPiBleHBlY3RzIGBvblNlbGVjdGAgcHJvcCwgYnV0IHlvdSBwYXNzZWQgYG9uQ2xpY2tgLidcbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCB0aGVtZWRDbGFzc05hbWUgPSB0aGVtZS5nZXRNZW51SXRlbUNsYXNzTmFtZShhcHBlYXJhbmNlLCAnbm9uZScpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhbmVcbiAgICAgICAgaXM9e2lzfVxuICAgICAgICByb2xlPVwibWVudWl0ZW1cIlxuICAgICAgICBjbGFzc05hbWU9e3RoZW1lZENsYXNzTmFtZX1cbiAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgICAgb25LZXlQcmVzcz17dGhpcy5oYW5kbGVLZXlQcmVzc31cbiAgICAgICAgaGVpZ2h0PXtpY29uID8gNDAgOiAzMn1cbiAgICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICAgIGRhdGEtaXNzZWxlY3RhYmxlPVwidHJ1ZVwiXG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgIHsuLi5wYXNzdGhyb3VnaFByb3BzfVxuICAgICAgPlxuICAgICAgICB7aWNvbiAmJiAoXG4gICAgICAgICAgPEljb25cbiAgICAgICAgICAgIGNvbG9yPXtpbnRlbnQgPT09ICdub25lJyA/ICdkZWZhdWx0JyA6IGludGVudH1cbiAgICAgICAgICAgIGljb249e2ljb259XG4gICAgICAgICAgICBtYXJnaW5MZWZ0PXsxNn1cbiAgICAgICAgICAgIG1hcmdpblJpZ2h0PXstNH1cbiAgICAgICAgICAgIHNpemU9ezE2fVxuICAgICAgICAgICAgZmxleFNocmluaz17MH1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8VGV4dCBjb2xvcj17aW50ZW50fSBtYXJnaW5MZWZ0PXsxNn0gbWFyZ2luUmlnaHQ9ezE2fSBmbGV4PXsxfT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAge3NlY29uZGFyeVRleHQgJiYgKFxuICAgICAgICAgIDxUZXh0IG1hcmdpblJpZ2h0PXsxNn0gY29sb3I9XCJtdXRlZFwiPlxuICAgICAgICAgICAge3NlY29uZGFyeVRleHR9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICApfVxuICAgICAgPC9QYW5lPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoTWVudUl0ZW0pXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsR0FBUCxNQUFnQixRQUFoQjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsY0FBckI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGtCQUFyQjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsWUFBckI7QUFDQSxTQUFTQyxTQUFULFFBQTBCLGFBQTFCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1Qix1QkFBdkI7QUFDQSxPQUFPQyxPQUFQLE1BQW9CLG1CQUFwQjs7SUFFTUMsUTs7Ozs7Ozs7Ozs7Ozs7OztrRUFvRFUsVUFBQUMsS0FBSyxFQUFJO01BQ3JCLE1BQUtDLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkYsS0FBcEI7TUFFQTs7O01BQ0FILFVBQVUsQ0FBQyxNQUFLSSxLQUFMLENBQVdFLE9BQVosRUFBcUJILEtBQXJCLENBQVY7TUFDQTtJQUNELEM7O3FFQUVnQixVQUFBQSxLQUFLLEVBQUk7TUFDeEIsSUFBSUEsS0FBSyxDQUFDSSxHQUFOLEtBQWMsT0FBZCxJQUF5QkosS0FBSyxDQUFDSSxHQUFOLEtBQWMsR0FBM0MsRUFBZ0Q7UUFDOUMsTUFBS0gsS0FBTCxDQUFXQyxRQUFYLENBQW9CRixLQUFwQjs7UUFDQUEsS0FBSyxDQUFDSyxj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