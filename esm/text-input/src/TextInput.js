import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["theme", "className", "width", "height", "disabled", "required", "isInvalid", "appearance", "placeholder", "spellCheck"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Text } from '../../typography';
import { withTheme } from '../../theme';

var TextInput = /*#__PURE__*/function (_PureComponent) {
  _inherits(TextInput, _PureComponent);

  var _super = _createSuper(TextInput);

  function TextInput() {
    _classCallCheck(this, TextInput);

    return _super.apply(this, arguments);
  }

  _createClass(TextInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          className = _this$props.className,
          width = _this$props.width,
          height = _this$props.height,
          disabled = _this$props.disabled,
          required = _this$props.required,
          isInvalid = _this$props.isInvalid,
          appearance = _this$props.appearance,
          placeholder = _this$props.placeholder,
          spellCheck = _this$props.spellCheck,
          props = _objectWithoutProperties(_this$props, _excluded);

      var themedClassName = theme.getTextInputClassName(appearance);
      var textSize = theme.getTextSizeForControlHeight(height);
      var borderRadius = theme.getBorderRadiusForControlHeight(height);
      return /*#__PURE__*/React.createElement(Text, _extends({
        is: "input",
        className: cx(themedClassName, className),
        type: "text",
        size: textSize,
        width: width,
        height: height,
        required: required,
        disabled: disabled,
        placeholder: placeholder,
        paddingLeft: Math.round(height / 3.2),
        paddingRight: Math.round(height / 3.2),
        borderRadius: borderRadius,
        spellCheck: spellCheck,
        "aria-invalid": isInvalid
      }, disabled ? {
        color: 'muted'
      } : {}, props));
    }
  }]);

  return TextInput;
}(PureComponent);

TextInput.displayName = "TextInput";

_defineProperty(TextInput, "propTypes", _objectSpread(_objectSpread({}, Text.propTypes), {}, {
  /**
   * Makes the input element required.
   */
  required: PropTypes.bool,

  /**
   * Makes the input element disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Sets visual styling of _only_ the text input to be "invalid".
   * Note that this does not effect any `validationMessage`.
   */
  isInvalid: PropTypes.bool,

  /**
   * Use the native spell check functionality of the browser.
   */
  spellCheck: PropTypes.bool,

  /**
   * The placeholder text when there is no value present.
   */
  placeholder: PropTypes.string,

  /**
   * The appearance of the TextInput.
   */
  appearance: PropTypes.string,

  /**
   * The width of the TextInput.
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

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

_defineProperty(TextInput, "defaultProps", {
  appearance: 'default',
  height: 32,
  width: 280,
  disabled: false,
  isInvalid: false,
  spellCheck: true
});

export default withTheme(TextInput);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJjeCIsIlRleHQiLCJ3aXRoVGhlbWUiLCJUZXh0SW5wdXQiLCJwcm9wcyIsInRoZW1lIiwiY2xhc3NOYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJkaXNhYmxlZCIsInJlcXVpcmVkIiwiaXNJbnZhbGlkIiwiYXBwZWFyYW5jZSIsInBsYWNlaG9sZGVyIiwic3BlbGxDaGVjayIsInRoZW1lZENsYXNzTmFtZSIsImdldFRleHRJbnB1dENsYXNzTmFtZSIsInRleHRTaXplIiwiZ2V0VGV4dFNpemVGb3JDb250cm9sSGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiZ2V0Qm9yZGVyUmFkaXVzRm9yQ29udHJvbEhlaWdodCIsIk1hdGgiLCJyb3VuZCIsImNvbG9yIiwicHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsIm9uZU9mVHlwZSIsIm51bWJlciIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdGV4dC1pbnB1dC9zcmMvVGV4dElucHV0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5cbmNsYXNzIFRleHRJbnB1dCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBUZXh0IGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICAgKi9cbiAgICAuLi5UZXh0LnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIE1ha2VzIHRoZSBpbnB1dCBlbGVtZW50IHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIE1ha2VzIHRoZSBpbnB1dCBlbGVtZW50IGRpc2FibGVkLlxuICAgICAqL1xuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdmlzdWFsIHN0eWxpbmcgb2YgX29ubHlfIHRoZSB0ZXh0IGlucHV0IHRvIGJlIFwiaW52YWxpZFwiLlxuICAgICAqIE5vdGUgdGhhdCB0aGlzIGRvZXMgbm90IGVmZmVjdCBhbnkgYHZhbGlkYXRpb25NZXNzYWdlYC5cbiAgICAgKi9cbiAgICBpc0ludmFsaWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVXNlIHRoZSBuYXRpdmUgc3BlbGwgY2hlY2sgZnVuY3Rpb25hbGl0eSBvZiB0aGUgYnJvd3Nlci5cbiAgICAgKi9cbiAgICBzcGVsbENoZWNrOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBwbGFjZWhvbGRlciB0ZXh0IHdoZW4gdGhlcmUgaXMgbm8gdmFsdWUgcHJlc2VudC5cbiAgICAgKi9cbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBhcHBlYXJhbmNlIG9mIHRoZSBUZXh0SW5wdXQuXG4gICAgICovXG4gICAgYXBwZWFyYW5jZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSB3aWR0aCBvZiB0aGUgVGV4dElucHV0LlxuICAgICAqL1xuICAgIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBwcm92aWRlZCBieSBUaGVtZVByb3ZpZGVyLlxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBDbGFzcyBuYW1lIHBhc3NlZCB0byB0aGUgYnV0dG9uLlxuICAgICAqIE9ubHkgdXNlIGlmIHlvdSBrbm93IHdoYXQgeW91IGFyZSBkb2luZy5cbiAgICAgKi9cbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYXBwZWFyYW5jZTogJ2RlZmF1bHQnLFxuICAgIGhlaWdodDogMzIsXG4gICAgd2lkdGg6IDI4MCxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgaXNJbnZhbGlkOiBmYWxzZSxcbiAgICBzcGVsbENoZWNrOiB0cnVlXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdGhlbWUsXG4gICAgICBjbGFzc05hbWUsXG5cbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgZGlzYWJsZWQsXG4gICAgICByZXF1aXJlZCxcbiAgICAgIGlzSW52YWxpZCxcbiAgICAgIGFwcGVhcmFuY2UsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIHNwZWxsQ2hlY2ssXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgdGhlbWVkQ2xhc3NOYW1lID0gdGhlbWUuZ2V0VGV4dElucHV0Q2xhc3NOYW1lKGFwcGVhcmFuY2UpXG4gICAgY29uc3QgdGV4dFNpemUgPSB0aGVtZS5nZXRUZXh0U2l6ZUZvckNvbnRyb2xIZWlnaHQoaGVpZ2h0KVxuICAgIGNvbnN0IGJvcmRlclJhZGl1cyA9IHRoZW1lLmdldEJvcmRlclJhZGl1c0ZvckNvbnRyb2xIZWlnaHQoaGVpZ2h0KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUZXh0XG4gICAgICAgIGlzPVwiaW5wdXRcIlxuICAgICAgICBjbGFzc05hbWU9e2N4KHRoZW1lZENsYXNzTmFtZSwgY2xhc3NOYW1lKX1cbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBzaXplPXt0ZXh0U2l6ZX1cbiAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgcGFkZGluZ0xlZnQ9e01hdGgucm91bmQoaGVpZ2h0IC8gMy4yKX1cbiAgICAgICAgcGFkZGluZ1JpZ2h0PXtNYXRoLnJvdW5kKGhlaWdodCAvIDMuMil9XG4gICAgICAgIGJvcmRlclJhZGl1cz17Ym9yZGVyUmFkaXVzfVxuICAgICAgICBzcGVsbENoZWNrPXtzcGVsbENoZWNrfVxuICAgICAgICBhcmlhLWludmFsaWQ9e2lzSW52YWxpZH1cbiAgICAgICAgey4uLihkaXNhYmxlZCA/IHsgY29sb3I6ICdtdXRlZCcgfSA6IHt9KX1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKFRleHRJbnB1dClcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsRUFBUCxNQUFlLFlBQWY7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGtCQUFyQjtBQUNBLFNBQVNDLFNBQVQsUUFBMEIsYUFBMUI7O0lBRU1DLFM7Ozs7Ozs7Ozs7Ozs7V0FnRUosa0JBQVM7TUFDUCxrQkFhSSxLQUFLQyxLQWJUO01BQUEsSUFDRUMsS0FERixlQUNFQSxLQURGO01BQUEsSUFFRUMsU0FGRixlQUVFQSxTQUZGO01BQUEsSUFJRUMsS0FKRixlQUlFQSxLQUpGO01BQUEsSUFLRUMsTUFMRixlQUtFQSxNQUxGO01BQUEsSUFNRUMsUUFORixlQU1FQSxRQU5GO01BQUEsSUFPRUMsUUFQRixlQU9FQSxRQVBGO01BQUEsSUFRRUMsU0FSRixl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