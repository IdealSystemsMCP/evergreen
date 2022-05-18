import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["theme", "className", "intent", "height", "isActive", "children", "disabled", "appearance", "isLoading", "paddingRight", "paddingLeft", "paddingTop", "paddingBottom", "iconBefore", "iconAfter"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { dimensions, spacing, position, layout } from 'ui-box';
import { Text } from '../../typography';
import { Icon } from '../../icon';
import { Spinner } from '../../spinner';
import { withTheme } from '../../theme';

var Button = /*#__PURE__*/function (_PureComponent) {
  _inherits(Button, _PureComponent);

  var _super = _createSuper(Button);

  function Button() {
    _classCallCheck(this, Button);

    return _super.apply(this, arguments);
  }

  _createClass(Button, [{
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
          props = _objectWithoutProperties(_this$props, _excluded);

      var themedClassName = theme.getButtonClassName(appearance, intent);
      var textSize = theme.getTextSizeForControlHeight(height);
      var borderRadius = theme.getBorderRadiusForControlHeight(height);
      var iconSize = theme.getIconSizeForButton(height);
      var pr = paddingRight !== undefined ? paddingRight : Math.round(height / 2); // eslint-disable-line no-negated-condition

      var pl = paddingLeft !== undefined ? paddingLeft : Math.round(height / 2); // eslint-disable-line no-negated-condition

      var iconBefore;

      if (iconBeforeKey) {
        iconBefore = /*#__PURE__*/React.createElement(Icon, {
          icon: iconBeforeKey,
          size: iconSize,
          marginLeft: -Math.round(pl * 0.2),
          marginRight: Math.round(iconSize * 0.7)
        });
      }

      var iconAfter;

      if (iconAfterKey) {
        iconAfter = /*#__PURE__*/React.createElement(Icon, {
          icon: iconAfterKey,
          size: iconSize,
          marginRight: -Math.round(pl * 0.2),
          marginLeft: Math.round(iconSize * 0.7)
        });
      }

      return /*#__PURE__*/React.createElement(Text, _extends({
        is: "button",
        className: cx(themedClassName, className),
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
      }), isLoading && /*#__PURE__*/React.createElement(Spinner, {
        marginLeft: -Math.round(height / 8),
        marginRight: Math.round(height / 4),
        size: Math.round(height / 2)
      }), iconBefore || null, children, iconAfter || null);
    }
  }]);

  return Button;
}(PureComponent);

Button.displayName = "Button";

_defineProperty(Button, "propTypes", _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, dimensions.propTypes), spacing.propTypes), position.propTypes), layout.propTypes), {}, {
  /**
   * The intent of the button.
   */
  intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger']),

  /**
   * The appearance of the button.
   */
  appearance: PropTypes.oneOf(['default', 'minimal', 'primary']).isRequired,

  /**
   * When true, show a loading spinner before the children.
   * This also disables the button.
   */
  isLoading: PropTypes.bool,

  /**
   * Forcefully set the active state of a button.
   * Useful in conjuction with a Popover.
   */
  isActive: PropTypes.bool,

  /**
   * Sets an icon before the text. Can be any icon from Evergreen or a custom element.
   */
  iconBefore: PropTypes.node,

  /**
   * Sets an icon after the text. Can be any icon from Evergreen or a custom element.
   */
  iconAfter: PropTypes.node,

  /**
   * When true, the button is disabled.
   * isLoading also sets the button to disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired,

  /**
   * Class name passed to the button.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string
}));

_defineProperty(Button, "defaultProps", {
  appearance: 'default',
  height: 32,
  intent: 'none',
  isActive: false,
  paddingBottom: 0,
  paddingTop: 0
});

_defineProperty(Button, "styles", {
  position: 'relative',
  fontFamily: 'ui',
  fontWeight: 500,
  display: 'inline-flex',
  alignItems: 'center',
  flexWrap: 'nowrap'
});

export default withTheme(Button);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJjeCIsImRpbWVuc2lvbnMiLCJzcGFjaW5nIiwicG9zaXRpb24iLCJsYXlvdXQiLCJUZXh0IiwiSWNvbiIsIlNwaW5uZXIiLCJ3aXRoVGhlbWUiLCJCdXR0b24iLCJwcm9wcyIsInRoZW1lIiwiY2xhc3NOYW1lIiwiaW50ZW50IiwiaGVpZ2h0IiwiaXNBY3RpdmUiLCJjaGlsZHJlbiIsImRpc2FibGVkIiwiYXBwZWFyYW5jZSIsImlzTG9hZGluZyIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJpY29uQmVmb3JlS2V5IiwiaWNvbkJlZm9yZSIsImljb25BZnRlcktleSIsImljb25BZnRlciIsInRoZW1lZENsYXNzTmFtZSIsImdldEJ1dHRvbkNsYXNzTmFtZSIsInRleHRTaXplIiwiZ2V0VGV4dFNpemVGb3JDb250cm9sSGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiZ2V0Qm9yZGVyUmFkaXVzRm9yQ29udHJvbEhlaWdodCIsImljb25TaXplIiwiZ2V0SWNvblNpemVGb3JCdXR0b24iLCJwciIsInVuZGVmaW5lZCIsIk1hdGgiLCJyb3VuZCIsInBsIiwic3R5bGVzIiwicHJvcFR5cGVzIiwib25lT2YiLCJpc1JlcXVpcmVkIiwiYm9vbCIsIm5vZGUiLCJvYmplY3QiLCJzdHJpbmciLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiZmxleFdyYXAiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYnV0dG9ucy9zcmMvQnV0dG9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IGRpbWVuc2lvbnMsIHNwYWNpbmcsIHBvc2l0aW9uLCBsYXlvdXQgfSBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCB7IEljb24gfSBmcm9tICcuLi8uLi9pY29uJ1xuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gJy4uLy4uL3NwaW5uZXInXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcblxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIGRpbWVuc2lvbnMgc3BlYyBmcm9tIHRoZSBCb3ggcHJpbWl0aXZlLlxuICAgICAqL1xuICAgIC4uLmRpbWVuc2lvbnMucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIHNwYWNpbmcgc3BlYyBmcm9tIHRoZSBCb3ggcHJpbWl0aXZlLlxuICAgICAqL1xuICAgIC4uLnNwYWNpbmcucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIHBvc2l0aW9uIHNwZWMgZnJvbSB0aGUgQm94IHByaW1pdGl2ZS5cbiAgICAgKi9cbiAgICAuLi5wb3NpdGlvbi5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgbGF5b3V0IHNwZWMgZnJvbSB0aGUgQm94IHByaW1pdGl2ZS5cbiAgICAgKi9cbiAgICAuLi5sYXlvdXQucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGludGVudCBvZiB0aGUgYnV0dG9uLlxuICAgICAqL1xuICAgIGludGVudDogUHJvcFR5cGVzLm9uZU9mKFsnbm9uZScsICdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJ10pLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIGJ1dHRvbi5cbiAgICAgKi9cbiAgICBhcHBlYXJhbmNlOiBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ21pbmltYWwnLCAncHJpbWFyeSddKS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCBzaG93IGEgbG9hZGluZyBzcGlubmVyIGJlZm9yZSB0aGUgY2hpbGRyZW4uXG4gICAgICogVGhpcyBhbHNvIGRpc2FibGVzIHRoZSBidXR0b24uXG4gICAgICovXG4gICAgaXNMb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIEZvcmNlZnVsbHkgc2V0IHRoZSBhY3RpdmUgc3RhdGUgb2YgYSBidXR0b24uXG4gICAgICogVXNlZnVsIGluIGNvbmp1Y3Rpb24gd2l0aCBhIFBvcG92ZXIuXG4gICAgICovXG4gICAgaXNBY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogU2V0cyBhbiBpY29uIGJlZm9yZSB0aGUgdGV4dC4gQ2FuIGJlIGFueSBpY29uIGZyb20gRXZlcmdyZWVuIG9yIGEgY3VzdG9tIGVsZW1lbnQuXG4gICAgICovXG4gICAgaWNvbkJlZm9yZTogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGFuIGljb24gYWZ0ZXIgdGhlIHRleHQuIENhbiBiZSBhbnkgaWNvbiBmcm9tIEV2ZXJncmVlbiBvciBhIGN1c3RvbSBlbGVtZW50LlxuICAgICAqL1xuICAgIGljb25BZnRlcjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBidXR0b24gaXMgZGlzYWJsZWQuXG4gICAgICogaXNMb2FkaW5nIGFsc28gc2V0cyB0aGUgYnV0dG9uIHRvIGRpc2FibGVkLlxuICAgICAqL1xuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIHByb3ZpZGVkIGJ5IFRoZW1lUHJvdmlkZXIuXG4gICAgICovXG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIENsYXNzIG5hbWUgcGFzc2VkIHRvIHRoZSBidXR0b24uXG4gICAgICogT25seSB1c2UgaWYgeW91IGtub3cgd2hhdCB5b3UgYXJlIGRvaW5nLlxuICAgICAqL1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBhcHBlYXJhbmNlOiAnZGVmYXVsdCcsXG4gICAgaGVpZ2h0OiAzMixcbiAgICBpbnRlbnQ6ICdub25lJyxcbiAgICBpc0FjdGl2ZTogZmFsc2UsXG4gICAgcGFkZGluZ0JvdHRvbTogMCxcbiAgICBwYWRkaW5nVG9wOiAwXG4gIH1cblxuICBzdGF0aWMgc3R5bGVzID0ge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGZvbnRGYW1pbHk6ICd1aScsXG4gICAgZm9udFdlaWdodDogNTAwLFxuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgZmxleFdyYXA6ICdub3dyYXAnXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdGhlbWUsXG4gICAgICBjbGFzc05hbWUsXG5cbiAgICAgIGludGVudCxcbiAgICAgIGhlaWdodCxcbiAgICAgIGlzQWN0aXZlLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGFwcGVhcmFuY2UsXG4gICAgICBpc0xvYWRpbmcsXG5cbiAgICAgIC8vIFBhZGRpbmdzXG4gICAgICBwYWRkaW5nUmlnaHQsXG4gICAgICBwYWRkaW5nTGVmdCxcbiAgICAgIHBhZGRpbmdUb3AsXG4gICAgICBwYWRkaW5nQm90dG9tLFxuXG4gICAgICAvLyBJY29uc1xuICAgICAgaWNvbkJlZm9yZTogaWNvbkJlZm9yZUtleSxcbiAgICAgIGljb25BZnRlcjogaWNvbkFmdGVyS2V5LFxuXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB0aGVtZWRDbGFzc05hbWUgPSB0aGVtZS5nZXRCdXR0b25DbGFzc05hbWUoYXBwZWFyYW5jZSwgaW50ZW50KVxuICAgIGNvbnN0IHRleHRTaXplID0gdGhlbWUuZ2V0VGV4dFNpemVGb3JDb250cm9sSGVpZ2h0KGhlaWdodClcblxuICAgIGNvbnN0IGJvcmRlclJhZGl1cyA9IHRoZW1lLmdldEJvcmRlclJhZGl1c0ZvckNvbnRyb2xIZWlnaHQoaGVpZ2h0KVxuICAgIGNvbnN0IGljb25TaXplID0gdGhlbWUuZ2V0SWNvblNpemVGb3JCdXR0b24oaGVpZ2h0KVxuXG4gICAgY29uc3QgcHIgPVxuICAgICAgcGFkZGluZ1JpZ2h0ICE9PSB1bmRlZmluZWQgPyBwYWRkaW5nUmlnaHQgOiBNYXRoLnJvdW5kKGhlaWdodCAvIDIpIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmVnYXRlZC1jb25kaXRpb25cbiAgICBjb25zdCBwbCA9IHBhZGRpbmdMZWZ0ICE9PSB1bmRlZmluZWQgPyBwYWRkaW5nTGVmdCA6IE1hdGgucm91bmQoaGVpZ2h0IC8gMikgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZWdhdGVkLWNvbmRpdGlvblxuXG4gICAgbGV0IGljb25CZWZvcmVcbiAgICBpZiAoaWNvbkJlZm9yZUtleSkge1xuICAgICAgaWNvbkJlZm9yZSA9IChcbiAgICAgICAgPEljb25cbiAgICAgICAgICBpY29uPXtpY29uQmVmb3JlS2V5fVxuICAgICAgICAgIHNpemU9e2ljb25TaXplfVxuICAgICAgICAgIG1hcmdpbkxlZnQ9ey1NYXRoLnJvdW5kKHBsICogMC4yKX1cbiAgICAgICAgICBtYXJnaW5SaWdodD17TWF0aC5yb3VuZChpY29uU2l6ZSAqIDAuNyl9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfVxuXG4gICAgbGV0IGljb25BZnRlclxuICAgIGlmIChpY29uQWZ0ZXJLZXkpIHtcbiAgICAgIGljb25BZnRlciA9IChcbiAgICAgICAgPEljb25cbiAgICAgICAgICBpY29uPXtpY29uQWZ0ZXJLZXl9XG4gICAgICAgICAgc2l6ZT17aWNvblNpemV9XG4gICAgICAgICAgbWFyZ2luUmlnaHQ9ey1NYXRoLnJvdW5kKHBsICogMC4yKX1cbiAgICAgICAgICBtYXJnaW5MZWZ0PXtNYXRoLnJvdW5kKGljb25TaXplICogMC43KX1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRleHRcbiAgICAgICAgaXM9XCJidXR0b25cIlxuICAgICAgICBjbGFzc05hbWU9e2N4KHRoZW1lZENsYXNzTmFtZSwgY2xhc3NOYW1lKX1cbiAgICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM9e2JvcmRlclJhZGl1c31cbiAgICAgICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM9e2JvcmRlclJhZGl1c31cbiAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1cz17Ym9yZGVyUmFkaXVzfVxuICAgICAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzPXtib3JkZXJSYWRpdXN9XG4gICAgICAgIHBhZGRpbmdUb3A9e3BhZGRpbmdUb3B9XG4gICAgICAgIHBhZGRpbmdCb3R0b209e3BhZGRpbmdCb3R0b219XG4gICAgICAgIHBhZGRpbmdSaWdodD17cHJ9XG4gICAgICAgIHBhZGRpbmdMZWZ0PXtwbH1cbiAgICAgICAgbWFyZ2luTGVmdD17MH0gLy8gUmVtb3ZlcyB3ZWlyZCBtYXJnaW5zIGluIFNhZmFyaVxuICAgICAgICBtYXJnaW5SaWdodD17MH0gLy8gUmVtb3ZlcyB3ZWlyZCBtYXJnaW5zIGluIFNhZmFyaVxuICAgICAgICBtYXJnaW5Ub3A9ezB9IC8vIFJlbW92ZXMgd2VpcmQgbWFyZ2lucyBpbiBTYWZhcmlcbiAgICAgICAgbWFyZ2luQm90dG9tPXswfSAvLyBSZW1vdmVzIHdlaXJkIG1hcmdpbnMgaW4gU2FmYXJpXG4gICAgICAgIHNpemU9e3RleHRTaXplfVxuICAgICAgICBjb2xvcj17bnVsbH0gLy8gUHJldmVudCB0aGUgVGV4dCBjb2xvciBvdmVycmlkaW5nIHRoZSBnbGFtb3IgYXBwZWFyYW5jZVN0eWxlIGNvbG9yXG4gICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICBsaW5lSGVpZ2h0PXtgJHtoZWlnaHR9cHhgfVxuICAgICAgICB7Li4uKGlzQWN0aXZlID8geyAnZGF0YS1hY3RpdmUnOiB0cnVlIH0gOiB7fSl9XG4gICAgICAgIHsuLi5CdXR0b24uc3R5bGVzfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZCB8fCBpc0xvYWRpbmd9XG4gICAgICA+XG4gICAgICAgIHtpc0xvYWRpbmcgJiYgKFxuICAgICAgICAgIDxTcGlubmVyXG4gICAgICAgICAgICBtYXJnaW5MZWZ0PXstTWF0aC5yb3VuZChoZWlnaHQgLyA4KX1cbiAgICAgICAgICAgIG1hcmdpblJpZ2h0PXtNYXRoLnJvdW5kKGhlaWdodCAvIDQpfVxuICAgICAgICAgICAgc2l6ZT17TWF0aC5yb3VuZChoZWlnaHQgLyAyKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7aWNvbkJlZm9yZSB8fCBudWxsfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIHtpY29uQWZ0ZXIgfHwgbnVsbH1cbiAgICAgIDwvVGV4dD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKEJ1dHRvbilcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsRUFBUCxNQUFlLFlBQWY7QUFDQSxTQUFTQyxVQUFULEVBQXFCQyxPQUFyQixFQUE4QkMsUUFBOUIsRUFBd0NDLE1BQXhDLFFBQXNELFFBQXREO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixrQkFBckI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLFlBQXJCO0FBQ0EsU0FBU0MsT0FBVCxRQUF3QixlQUF4QjtBQUNBLFNBQVNDLFNBQVQsUUFB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