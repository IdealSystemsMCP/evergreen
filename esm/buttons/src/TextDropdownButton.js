import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["theme", "className", "intent", "height", "isActive", "children", "disabled", "appearance", "isLoading", "paddingRight", "paddingLeft", "paddingTop", "paddingBottom", "icon"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { dimensions, spacing, position, layout } from 'ui-box';
import { Text } from '../../typography';
import { Icon } from '../../icon';
import { Spinner } from '../../spinner';
import { withTheme } from '../../theme';

var TextDropdownButton = /*#__PURE__*/function (_PureComponent) {
  _inherits(TextDropdownButton, _PureComponent);

  var _super = _createSuper(TextDropdownButton);

  function TextDropdownButton() {
    _classCallCheck(this, TextDropdownButton);

    return _super.apply(this, arguments);
  }

  _createClass(TextDropdownButton, [{
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
          icon = _this$props.icon,
          props = _objectWithoutProperties(_this$props, _excluded);

      var themedClassName = theme.getTextDropdownButtonClassName();
      return /*#__PURE__*/React.createElement(Text, _extends({
        is: "button",
        className: themedClassName,
        paddingX: 4,
        marginX: -4,
        paddingY: 2,
        marginY: -2,
        size: 300,
        "data-active": isActive
      }, TextDropdownButton.styles, props, {
        disabled: disabled
      }), isLoading && /*#__PURE__*/React.createElement(Spinner, {
        marginLeft: -Math.round(height / 8),
        marginRight: Math.round(height / 4),
        size: Math.round(height / 2)
      }), children, /*#__PURE__*/React.createElement(Icon, {
        color: "default",
        icon: icon,
        size: 12,
        marginLeft: 2
      }));
    }
  }]);

  return TextDropdownButton;
}(PureComponent);

TextDropdownButton.displayName = "TextDropdownButton";

_defineProperty(TextDropdownButton, "propTypes", _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, dimensions.propTypes), spacing.propTypes), position.propTypes), layout.propTypes), {}, {
  /**
   * Forcefully set the active state of a button.
   * Useful in conjuction with a Popover.
   */
  isActive: PropTypes.bool,

  /**
   * When true, the button is disabled.
   * isLoading also sets the button to disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Name of a Blueprint UI icon, or an icon element, to render.
   * This prop is required because it determines the content of the component, but it can
   * be explicitly set to falsy values to render nothing.
   *
   * - If `null` or `undefined` or `false`, this component will render nothing.
   * - If given an `IconName` (a string literal union of all icon names),
   *   that icon will be rendered as an `<svg>` with `<path>` tags.
   * - If given a `JSX.Element`, that element will be rendered and _all other props on this component are ignored._
   *   This type is supported to simplify usage of this component in other Blueprint components.
   *   As a consumer, you should never use `<Icon icon={<element />}` directly; simply render `<element />` instead.
   */
  icon: PropTypes.string.isRequired,

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

_defineProperty(TextDropdownButton, "defaultProps", {
  isActive: false,
  icon: 'caret-down'
});

_defineProperty(TextDropdownButton, "styles", {
  position: 'relative',
  fontFamily: 'ui',
  fontWeight: 500,
  display: 'inline-flex',
  alignItems: 'center',
  flexWrap: 'nowrap'
});

export default withTheme(TextDropdownButton);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJkaW1lbnNpb25zIiwic3BhY2luZyIsInBvc2l0aW9uIiwibGF5b3V0IiwiVGV4dCIsIkljb24iLCJTcGlubmVyIiwid2l0aFRoZW1lIiwiVGV4dERyb3Bkb3duQnV0dG9uIiwicHJvcHMiLCJ0aGVtZSIsImNsYXNzTmFtZSIsImludGVudCIsImhlaWdodCIsImlzQWN0aXZlIiwiY2hpbGRyZW4iLCJkaXNhYmxlZCIsImFwcGVhcmFuY2UiLCJpc0xvYWRpbmciLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwiaWNvbiIsInRoZW1lZENsYXNzTmFtZSIsImdldFRleHREcm9wZG93bkJ1dHRvbkNsYXNzTmFtZSIsInN0eWxlcyIsIk1hdGgiLCJyb3VuZCIsInByb3BUeXBlcyIsImJvb2wiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwib2JqZWN0IiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImZsZXhXcmFwIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2J1dHRvbnMvc3JjL1RleHREcm9wZG93bkJ1dHRvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgZGltZW5zaW9ucywgc3BhY2luZywgcG9zaXRpb24sIGxheW91dCB9IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJy4uLy4uL2ljb24nXG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSAnLi4vLi4vc3Bpbm5lcidcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuXG5jbGFzcyBUZXh0RHJvcGRvd25CdXR0b24gZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgZGltZW5zaW9ucyBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmUuXG4gICAgICovXG4gICAgLi4uZGltZW5zaW9ucy5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgc3BhY2luZyBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmUuXG4gICAgICovXG4gICAgLi4uc3BhY2luZy5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgcG9zaXRpb24gc3BlYyBmcm9tIHRoZSBCb3ggcHJpbWl0aXZlLlxuICAgICAqL1xuICAgIC4uLnBvc2l0aW9uLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBsYXlvdXQgc3BlYyBmcm9tIHRoZSBCb3ggcHJpbWl0aXZlLlxuICAgICAqL1xuICAgIC4uLmxheW91dC5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBGb3JjZWZ1bGx5IHNldCB0aGUgYWN0aXZlIHN0YXRlIG9mIGEgYnV0dG9uLlxuICAgICAqIFVzZWZ1bCBpbiBjb25qdWN0aW9uIHdpdGggYSBQb3BvdmVyLlxuICAgICAqL1xuICAgIGlzQWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIGJ1dHRvbiBpcyBkaXNhYmxlZC5cbiAgICAgKiBpc0xvYWRpbmcgYWxzbyBzZXRzIHRoZSBidXR0b24gdG8gZGlzYWJsZWQuXG4gICAgICovXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogTmFtZSBvZiBhIEJsdWVwcmludCBVSSBpY29uLCBvciBhbiBpY29uIGVsZW1lbnQsIHRvIHJlbmRlci5cbiAgICAgKiBUaGlzIHByb3AgaXMgcmVxdWlyZWQgYmVjYXVzZSBpdCBkZXRlcm1pbmVzIHRoZSBjb250ZW50IG9mIHRoZSBjb21wb25lbnQsIGJ1dCBpdCBjYW5cbiAgICAgKiBiZSBleHBsaWNpdGx5IHNldCB0byBmYWxzeSB2YWx1ZXMgdG8gcmVuZGVyIG5vdGhpbmcuXG4gICAgICpcbiAgICAgKiAtIElmIGBudWxsYCBvciBgdW5kZWZpbmVkYCBvciBgZmFsc2VgLCB0aGlzIGNvbXBvbmVudCB3aWxsIHJlbmRlciBub3RoaW5nLlxuICAgICAqIC0gSWYgZ2l2ZW4gYW4gYEljb25OYW1lYCAoYSBzdHJpbmcgbGl0ZXJhbCB1bmlvbiBvZiBhbGwgaWNvbiBuYW1lcyksXG4gICAgICogICB0aGF0IGljb24gd2lsbCBiZSByZW5kZXJlZCBhcyBhbiBgPHN2Zz5gIHdpdGggYDxwYXRoPmAgdGFncy5cbiAgICAgKiAtIElmIGdpdmVuIGEgYEpTWC5FbGVtZW50YCwgdGhhdCBlbGVtZW50IHdpbGwgYmUgcmVuZGVyZWQgYW5kIF9hbGwgb3RoZXIgcHJvcHMgb24gdGhpcyBjb21wb25lbnQgYXJlIGlnbm9yZWQuX1xuICAgICAqICAgVGhpcyB0eXBlIGlzIHN1cHBvcnRlZCB0byBzaW1wbGlmeSB1c2FnZSBvZiB0aGlzIGNvbXBvbmVudCBpbiBvdGhlciBCbHVlcHJpbnQgY29tcG9uZW50cy5cbiAgICAgKiAgIEFzIGEgY29uc3VtZXIsIHlvdSBzaG91bGQgbmV2ZXIgdXNlIGA8SWNvbiBpY29uPXs8ZWxlbWVudCAvPn1gIGRpcmVjdGx5OyBzaW1wbHkgcmVuZGVyIGA8ZWxlbWVudCAvPmAgaW5zdGVhZC5cbiAgICAgKi9cbiAgICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBwcm92aWRlZCBieSBUaGVtZVByb3ZpZGVyLlxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBDbGFzcyBuYW1lIHBhc3NlZCB0byB0aGUgYnV0dG9uLlxuICAgICAqIE9ubHkgdXNlIGlmIHlvdSBrbm93IHdoYXQgeW91IGFyZSBkb2luZy5cbiAgICAgKi9cbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaXNBY3RpdmU6IGZhbHNlLFxuICAgIGljb246ICdjYXJldC1kb3duJ1xuICB9XG5cbiAgc3RhdGljIHN0eWxlcyA9IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBmb250RmFtaWx5OiAndWknLFxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGZsZXhXcmFwOiAnbm93cmFwJ1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRoZW1lLFxuICAgICAgY2xhc3NOYW1lLFxuXG4gICAgICBpbnRlbnQsXG4gICAgICBoZWlnaHQsXG4gICAgICBpc0FjdGl2ZSxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBhcHBlYXJhbmNlLFxuICAgICAgaXNMb2FkaW5nLFxuXG4gICAgICAvLyBQYWRkaW5nc1xuICAgICAgcGFkZGluZ1JpZ2h0LFxuICAgICAgcGFkZGluZ0xlZnQsXG4gICAgICBwYWRkaW5nVG9wLFxuICAgICAgcGFkZGluZ0JvdHRvbSxcblxuICAgICAgLy8gSWNvbnNcbiAgICAgIGljb24sXG5cbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHRoZW1lZENsYXNzTmFtZSA9IHRoZW1lLmdldFRleHREcm9wZG93bkJ1dHRvbkNsYXNzTmFtZSgpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRleHRcbiAgICAgICAgaXM9XCJidXR0b25cIlxuICAgICAgICBjbGFzc05hbWU9e3RoZW1lZENsYXNzTmFtZX1cbiAgICAgICAgcGFkZGluZ1g9ezR9XG4gICAgICAgIG1hcmdpblg9ey00fVxuICAgICAgICBwYWRkaW5nWT17Mn1cbiAgICAgICAgbWFyZ2luWT17LTJ9XG4gICAgICAgIHNpemU9ezMwMH1cbiAgICAgICAgZGF0YS1hY3RpdmU9e2lzQWN0aXZlfVxuICAgICAgICB7Li4uVGV4dERyb3Bkb3duQnV0dG9uLnN0eWxlc31cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICA+XG4gICAgICAgIHtpc0xvYWRpbmcgJiYgKFxuICAgICAgICAgIDxTcGlubmVyXG4gICAgICAgICAgICBtYXJnaW5MZWZ0PXstTWF0aC5yb3VuZChoZWlnaHQgLyA4KX1cbiAgICAgICAgICAgIG1hcmdpblJpZ2h0PXtNYXRoLnJvdW5kKGhlaWdodCAvIDQpfVxuICAgICAgICAgICAgc2l6ZT17TWF0aC5yb3VuZChoZWlnaHQgLyAyKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDxJY29uIGNvbG9yPVwiZGVmYXVsdFwiIGljb249e2ljb259IHNpemU9ezEyfSBtYXJnaW5MZWZ0PXsyfSAvPlxuICAgICAgPC9UZXh0PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoVGV4dERyb3Bkb3duQnV0dG9uKVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxVQUFULEVBQXFCQyxPQUFyQixFQUE4QkMsUUFBOUIsRUFBd0NDLE1BQXhDLFFBQXNELFFBQXREO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixrQkFBckI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLFlBQXJCO0FBQ0EsU0FBU0MsT0FBVCxRQUF3QixlQUF4QjtBQUNBLFNBQVNDLFNBQVQsUUFBMEIsYUFBMUI7O0lBRU1DLGtCOzs7Ozs7Ozs7Ozs7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