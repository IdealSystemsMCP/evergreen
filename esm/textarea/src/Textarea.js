import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["theme", "className", "width", "height", "disabled", "required", "isInvalid", "appearance", "placeholder", "spellCheck", "grammarly"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Text } from '../../typography';
import { withTheme } from '../../theme';

var Textarea = /*#__PURE__*/function (_PureComponent) {
  _inherits(Textarea, _PureComponent);

  var _super = _createSuper(Textarea);

  function Textarea() {
    _classCallCheck(this, Textarea);

    return _super.apply(this, arguments);
  }

  _createClass(Textarea, [{
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
          grammarly = _this$props.grammarly,
          props = _objectWithoutProperties(_this$props, _excluded);

      var themedClassName = theme.getTextareaClassName(appearance);
      return /*#__PURE__*/React.createElement(Text, _extends({
        is: "textarea",
        className: cx(themedClassName, className),
        size: 400,
        width: width,
        height: height,
        required: required,
        disabled: disabled,
        placeholder: placeholder,
        paddingLeft: Math.round(height / 3.2),
        paddingRight: Math.round(height / 3.2),
        borderRadius: 3,
        spellCheck: spellCheck,
        "aria-invalid": isInvalid,
        "data-gramm_editor": grammarly
      }, disabled ? {
        color: 'muted'
      } : {}, Textarea.styles, props));
    }
  }]);

  return Textarea;
}(PureComponent);

Textarea.displayName = "Textarea";

_defineProperty(Textarea, "propTypes", _objectSpread(_objectSpread({}, Text.propTypes), {}, {
  /**
   * Makes the textarea element required.
   */
  required: PropTypes.bool,

  /**
   * Makes the textarea element disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Sets visual styling of _only_ the text area to be "invalid".
   * Note that this does not effect any `validationMessage`.
   */
  isInvalid: PropTypes.bool,

  /**
   * Use the native spell check functionality of the browser.
   */
  spellCheck: PropTypes.bool,

  /**
   * Allow the Grammarly browser extension to attach to the backing textarea.
   */
  grammarly: PropTypes.bool,

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

_defineProperty(Textarea, "defaultProps", {
  appearance: 'default',
  width: '100%',
  disabled: false,
  isInvalid: false,
  spellCheck: true,
  grammarly: false
});

_defineProperty(Textarea, "styles", {
  minHeight: 80,
  paddingX: 10,
  paddingY: 8
});

export default withTheme(Textarea);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJjeCIsIlRleHQiLCJ3aXRoVGhlbWUiLCJUZXh0YXJlYSIsInByb3BzIiwidGhlbWUiLCJjbGFzc05hbWUiLCJ3aWR0aCIsImhlaWdodCIsImRpc2FibGVkIiwicmVxdWlyZWQiLCJpc0ludmFsaWQiLCJhcHBlYXJhbmNlIiwicGxhY2Vob2xkZXIiLCJzcGVsbENoZWNrIiwiZ3JhbW1hcmx5IiwidGhlbWVkQ2xhc3NOYW1lIiwiZ2V0VGV4dGFyZWFDbGFzc05hbWUiLCJNYXRoIiwicm91bmQiLCJjb2xvciIsInN0eWxlcyIsInByb3BUeXBlcyIsImJvb2wiLCJzdHJpbmciLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwibWluSGVpZ2h0IiwicGFkZGluZ1giLCJwYWRkaW5nWSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXh0YXJlYS9zcmMvVGV4dGFyZWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcblxuY2xhc3MgVGV4dGFyZWEgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgVGV4dCBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAgICovXG4gICAgLi4uVGV4dC5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBNYWtlcyB0aGUgdGV4dGFyZWEgZWxlbWVudCByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBNYWtlcyB0aGUgdGV4dGFyZWEgZWxlbWVudCBkaXNhYmxlZC5cbiAgICAgKi9cbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHZpc3VhbCBzdHlsaW5nIG9mIF9vbmx5XyB0aGUgdGV4dCBhcmVhIHRvIGJlIFwiaW52YWxpZFwiLlxuICAgICAqIE5vdGUgdGhhdCB0aGlzIGRvZXMgbm90IGVmZmVjdCBhbnkgYHZhbGlkYXRpb25NZXNzYWdlYC5cbiAgICAgKi9cbiAgICBpc0ludmFsaWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVXNlIHRoZSBuYXRpdmUgc3BlbGwgY2hlY2sgZnVuY3Rpb25hbGl0eSBvZiB0aGUgYnJvd3Nlci5cbiAgICAgKi9cbiAgICBzcGVsbENoZWNrOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIEFsbG93IHRoZSBHcmFtbWFybHkgYnJvd3NlciBleHRlbnNpb24gdG8gYXR0YWNoIHRvIHRoZSBiYWNraW5nIHRleHRhcmVhLlxuICAgICAqL1xuICAgIGdyYW1tYXJseTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgcGxhY2Vob2xkZXIgdGV4dCB3aGVuIHRoZXJlIGlzIG5vIHZhbHVlIHByZXNlbnQuXG4gICAgICovXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYXBwZWFyYW5jZSBvZiB0aGUgVGV4dElucHV0LlxuICAgICAqL1xuICAgIGFwcGVhcmFuY2U6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgd2lkdGggb2YgdGhlIFRleHRJbnB1dC5cbiAgICAgKi9cbiAgICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogQ2xhc3MgbmFtZSBwYXNzZWQgdG8gdGhlIGJ1dHRvbi5cbiAgICAgKiBPbmx5IHVzZSBpZiB5b3Uga25vdyB3aGF0IHlvdSBhcmUgZG9pbmcuXG4gICAgICovXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGFwcGVhcmFuY2U6ICdkZWZhdWx0JyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBpc0ludmFsaWQ6IGZhbHNlLFxuICAgIHNwZWxsQ2hlY2s6IHRydWUsXG4gICAgZ3JhbW1hcmx5OiBmYWxzZVxuICB9XG5cbiAgc3RhdGljIHN0eWxlcyA9IHtcbiAgICBtaW5IZWlnaHQ6IDgwLFxuICAgIHBhZGRpbmdYOiAxMCxcbiAgICBwYWRkaW5nWTogOFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRoZW1lLFxuICAgICAgY2xhc3NOYW1lLFxuXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgcmVxdWlyZWQsXG4gICAgICBpc0ludmFsaWQsXG4gICAgICBhcHBlYXJhbmNlLFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICBzcGVsbENoZWNrLFxuICAgICAgZ3JhbW1hcmx5LFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHRoZW1lZENsYXNzTmFtZSA9IHRoZW1lLmdldFRleHRhcmVhQ2xhc3NOYW1lKGFwcGVhcmFuY2UpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRleHRcbiAgICAgICAgaXM9XCJ0ZXh0YXJlYVwiXG4gICAgICAgIGNsYXNzTmFtZT17Y3godGhlbWVkQ2xhc3NOYW1lLCBjbGFzc05hbWUpfVxuICAgICAgICBzaXplPXs0MDB9XG4gICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgIHBhZGRpbmdMZWZ0PXtNYXRoLnJvdW5kKGhlaWdodCAvIDMuMil9XG4gICAgICAgIHBhZGRpbmdSaWdodD17TWF0aC5yb3VuZChoZWlnaHQgLyAzLjIpfVxuICAgICAgICBib3JkZXJSYWRpdXM9ezN9XG4gICAgICAgIHNwZWxsQ2hlY2s9e3NwZWxsQ2hlY2t9XG4gICAgICAgIGFyaWEtaW52YWxpZD17aXNJbnZhbGlkfVxuICAgICAgICBkYXRhLWdyYW1tX2VkaXRvcj17Z3JhbW1hcmx5fVxuICAgICAgICB7Li4uKGRpc2FibGVkID8geyBjb2xvcjogJ211dGVkJyB9IDoge30pfVxuICAgICAgICB7Li4uVGV4dGFyZWEuc3R5bGVzfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoVGV4dGFyZWEpXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLEVBQVAsTUFBZSxZQUFmO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixrQkFBckI7QUFDQSxTQUFTQyxTQUFULFFBQTBCLGFBQTFCOztJQUVNQyxROzs7Ozs7Ozs7Ozs7O1dBMkVKLGtCQUFTO01BQ1Asa0JBY0ksS0FBS0MsS0FkVDtNQUFBLElBQ0VDLEtBREYsZUFDRUEsS0FERjtNQUFBLElBRUVDLFNBRkYsZUFFRUEsU0FGRjtNQUFBLElBSUVDLEtBSkYsZUFJRUEs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