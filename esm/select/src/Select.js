import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["theme", "id", "name", "height", "children", "defaultValue", "disabled", "onChange", "value", "required", "autoFocus", "isInvalid", "appearance"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box, { dimensions, spacing, position, layout } from 'ui-box';
import { Text } from '../../typography';
import { Icon } from '../../icon';
import { withTheme } from '../../theme';

var Select = /*#__PURE__*/function (_PureComponent) {
  _inherits(Select, _PureComponent);

  var _super = _createSuper(Select);

  function Select() {
    _classCallCheck(this, Select);

    return _super.apply(this, arguments);
  }

  _createClass(Select, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          id = _this$props.id,
          name = _this$props.name,
          height = _this$props.height,
          children = _this$props.children,
          defaultValue = _this$props.defaultValue,
          disabled = _this$props.disabled,
          onChange = _this$props.onChange,
          value = _this$props.value,
          required = _this$props.required,
          autoFocus = _this$props.autoFocus,
          isInvalid = _this$props.isInvalid,
          appearance = _this$props.appearance,
          props = _objectWithoutProperties(_this$props, _excluded);

      var themedClassName = theme.getSelectClassName(appearance);
      var textSize = theme.getTextSizeForControlHeight(height);
      var borderRadius = theme.getBorderRadiusForControlHeight(height);
      var iconSize = theme.getIconSizeForSelect(height);
      var iconMargin = height >= 36 ? 12 : 8;
      return /*#__PURE__*/React.createElement(Box, _extends({
        display: "inline-flex",
        flex: 1,
        position: "relative",
        width: "auto",
        height: height
      }, props), /*#__PURE__*/React.createElement(Text, {
        is: "select",
        className: themedClassName,
        id: id,
        name: name,
        onChange: onChange,
        defaultValue: defaultValue,
        value: value,
        required: required,
        autoFocus: autoFocus,
        disabled: disabled,
        "aria-invalid": String(isInvalid),
        size: textSize,
        borderRadius: borderRadius,
        textTransform: "default",
        paddingLeft: Math.round(height / 3.2) // Provide enough space for auto-sizing select including the icon
        ,
        paddingRight: iconMargin * 2 + iconSize
      }, children), /*#__PURE__*/React.createElement(Icon, {
        icon: "caret-down",
        color: "default",
        size: iconSize,
        position: "absolute",
        top: "50%",
        marginTop: -iconSize / 2,
        right: iconMargin,
        pointerEvents: "none"
      }));
    }
  }]);

  return Select;
}(PureComponent);

Select.displayName = "Select";

_defineProperty(Select, "propTypes", _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, dimensions.propTypes), spacing.propTypes), position.propTypes), layout.propTypes), {}, {
  /**
   * The id attribute for the select.
   */
  id: PropTypes.string,

  /**
   * The name attribute for the select.
   */
  name: PropTypes.string,

  /**
   * The options that are passed to the select.
   */
  children: PropTypes.node,

  /**
   * The initial value of an uncontrolled select
   */
  defaultValue: PropTypes.any,

  /**
   * Function called when value changes.
   */
  onChange: PropTypes.func,

  /**
   * The value of the select.
   */
  value: PropTypes.any,

  /**
   * When true, the select is required.
   */
  required: PropTypes.bool,

  /**
   * When true, the select should auto focus.
   */
  autoFocus: PropTypes.bool,

  /**
   * When true, the select is invalid.
   */
  isInvalid: PropTypes.bool,

  /**
   * The appearance of the select. The default theme only supports default.
   */
  appearance: PropTypes.string.isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired
}));

_defineProperty(Select, "defaultProps", {
  appearance: 'default',
  height: 32,
  isInvalid: false
});

export default withTheme(Select);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJCb3giLCJkaW1lbnNpb25zIiwic3BhY2luZyIsInBvc2l0aW9uIiwibGF5b3V0IiwiVGV4dCIsIkljb24iLCJ3aXRoVGhlbWUiLCJTZWxlY3QiLCJwcm9wcyIsInRoZW1lIiwiaWQiLCJuYW1lIiwiaGVpZ2h0IiwiY2hpbGRyZW4iLCJkZWZhdWx0VmFsdWUiLCJkaXNhYmxlZCIsIm9uQ2hhbmdlIiwidmFsdWUiLCJyZXF1aXJlZCIsImF1dG9Gb2N1cyIsImlzSW52YWxpZCIsImFwcGVhcmFuY2UiLCJ0aGVtZWRDbGFzc05hbWUiLCJnZXRTZWxlY3RDbGFzc05hbWUiLCJ0ZXh0U2l6ZSIsImdldFRleHRTaXplRm9yQ29udHJvbEhlaWdodCIsImJvcmRlclJhZGl1cyIsImdldEJvcmRlclJhZGl1c0ZvckNvbnRyb2xIZWlnaHQiLCJpY29uU2l6ZSIsImdldEljb25TaXplRm9yU2VsZWN0IiwiaWNvbk1hcmdpbiIsIlN0cmluZyIsIk1hdGgiLCJyb3VuZCIsInByb3BUeXBlcyIsInN0cmluZyIsIm5vZGUiLCJhbnkiLCJmdW5jIiwiYm9vbCIsImlzUmVxdWlyZWQiLCJvYmplY3QiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2VsZWN0L3NyYy9TZWxlY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3gsIHsgZGltZW5zaW9ucywgc3BhY2luZywgcG9zaXRpb24sIGxheW91dCB9IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJy4uLy4uL2ljb24nXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcblxuY2xhc3MgU2VsZWN0IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIGRpbWVuc2lvbnMgc3BlYyBmcm9tIHRoZSBCb3ggcHJpbWl0aXZlLlxuICAgICAqL1xuICAgIC4uLmRpbWVuc2lvbnMucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIHNwYWNpbmcgc3BlYyBmcm9tIHRoZSBCb3ggcHJpbWl0aXZlLlxuICAgICAqL1xuICAgIC4uLnNwYWNpbmcucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIHBvc2l0aW9uIHNwZWMgZnJvbSB0aGUgQm94IHByaW1pdGl2ZS5cbiAgICAgKi9cbiAgICAuLi5wb3NpdGlvbi5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgbGF5b3V0IHNwZWMgZnJvbSB0aGUgQm94IHByaW1pdGl2ZS5cbiAgICAgKi9cbiAgICAuLi5sYXlvdXQucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGlkIGF0dHJpYnV0ZSBmb3IgdGhlIHNlbGVjdC5cbiAgICAgKi9cbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIGF0dHJpYnV0ZSBmb3IgdGhlIHNlbGVjdC5cbiAgICAgKi9cbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIG9wdGlvbnMgdGhhdCBhcmUgcGFzc2VkIHRvIHRoZSBzZWxlY3QuXG4gICAgICovXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGluaXRpYWwgdmFsdWUgb2YgYW4gdW5jb250cm9sbGVkIHNlbGVjdFxuICAgICAqL1xuICAgIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLmFueSxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIHZhbHVlIGNoYW5nZXMuXG4gICAgICovXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHZhbHVlIG9mIHRoZSBzZWxlY3QuXG4gICAgICovXG4gICAgdmFsdWU6IFByb3BUeXBlcy5hbnksXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBzZWxlY3QgaXMgcmVxdWlyZWQuXG4gICAgICovXG4gICAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgc2VsZWN0IHNob3VsZCBhdXRvIGZvY3VzLlxuICAgICAqL1xuICAgIGF1dG9Gb2N1czogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBzZWxlY3QgaXMgaW52YWxpZC5cbiAgICAgKi9cbiAgICBpc0ludmFsaWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIHNlbGVjdC4gVGhlIGRlZmF1bHQgdGhlbWUgb25seSBzdXBwb3J0cyBkZWZhdWx0LlxuICAgICAqL1xuICAgIGFwcGVhcmFuY2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIHByb3ZpZGVkIGJ5IFRoZW1lUHJvdmlkZXIuXG4gICAgICovXG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBhcHBlYXJhbmNlOiAnZGVmYXVsdCcsXG4gICAgaGVpZ2h0OiAzMixcbiAgICBpc0ludmFsaWQ6IGZhbHNlXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdGhlbWUsXG5cbiAgICAgIGlkLFxuICAgICAgbmFtZSxcbiAgICAgIGhlaWdodCxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgZGVmYXVsdFZhbHVlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIHZhbHVlLFxuICAgICAgcmVxdWlyZWQsXG4gICAgICBhdXRvRm9jdXMsXG4gICAgICBpc0ludmFsaWQsXG4gICAgICBhcHBlYXJhbmNlLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgdGhlbWVkQ2xhc3NOYW1lID0gdGhlbWUuZ2V0U2VsZWN0Q2xhc3NOYW1lKGFwcGVhcmFuY2UpXG4gICAgY29uc3QgdGV4dFNpemUgPSB0aGVtZS5nZXRUZXh0U2l6ZUZvckNvbnRyb2xIZWlnaHQoaGVpZ2h0KVxuICAgIGNvbnN0IGJvcmRlclJhZGl1cyA9IHRoZW1lLmdldEJvcmRlclJhZGl1c0ZvckNvbnRyb2xIZWlnaHQoaGVpZ2h0KVxuICAgIGNvbnN0IGljb25TaXplID0gdGhlbWUuZ2V0SWNvblNpemVGb3JTZWxlY3QoaGVpZ2h0KVxuICAgIGNvbnN0IGljb25NYXJnaW4gPSBoZWlnaHQgPj0gMzYgPyAxMiA6IDhcblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94XG4gICAgICAgIGRpc3BsYXk9XCJpbmxpbmUtZmxleFwiXG4gICAgICAgIGZsZXg9ezF9XG4gICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgICB3aWR0aD1cImF1dG9cIlxuICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgPlxuICAgICAgICA8VGV4dFxuICAgICAgICAgIGlzPVwic2VsZWN0XCJcbiAgICAgICAgICBjbGFzc05hbWU9e3RoZW1lZENsYXNzTmFtZX1cbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgICAgICBhdXRvRm9jdXM9e2F1dG9Gb2N1c31cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgYXJpYS1pbnZhbGlkPXtTdHJpbmcoaXNJbnZhbGlkKX1cbiAgICAgICAgICBzaXplPXt0ZXh0U2l6ZX1cbiAgICAgICAgICBib3JkZXJSYWRpdXM9e2JvcmRlclJhZGl1c31cbiAgICAgICAgICB0ZXh0VHJhbnNmb3JtPVwiZGVmYXVsdFwiXG4gICAgICAgICAgcGFkZGluZ0xlZnQ9e01hdGgucm91bmQoaGVpZ2h0IC8gMy4yKX1cbiAgICAgICAgICAvLyBQcm92aWRlIGVub3VnaCBzcGFjZSBmb3IgYXV0by1zaXppbmcgc2VsZWN0IGluY2x1ZGluZyB0aGUgaWNvblxuICAgICAgICAgIHBhZGRpbmdSaWdodD17aWNvbk1hcmdpbiAqIDIgKyBpY29uU2l6ZX1cbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8SWNvblxuICAgICAgICAgIGljb249XCJjYXJldC1kb3duXCJcbiAgICAgICAgICBjb2xvcj1cImRlZmF1bHRcIlxuICAgICAgICAgIHNpemU9e2ljb25TaXplfVxuICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICAgIHRvcD1cIjUwJVwiXG4gICAgICAgICAgbWFyZ2luVG9wPXstaWNvblNpemUgLyAyfVxuICAgICAgICAgIHJpZ2h0PXtpY29uTWFyZ2lufVxuICAgICAgICAgIHBvaW50ZXJFdmVudHM9XCJub25lXCJcbiAgICAgICAgLz5cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoU2VsZWN0KVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxHQUFQLElBQWND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