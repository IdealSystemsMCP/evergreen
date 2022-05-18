import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["id", "hint", "label", "description", "validationMessage", "inputHeight", "inputWidth", "disabled", "required", "isInvalid", "appearance"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { splitBoxProps } from 'ui-box';
import { FormField } from '../../form-field';
import Select from './Select';
var idCounter = 0;

var TextInputField = /*#__PURE__*/function (_PureComponent) {
  _inherits(TextInputField, _PureComponent);

  var _super = _createSuper(TextInputField);

  function TextInputField() {
    var _this;

    _classCallCheck(this, TextInputField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      id: (_this.props.id || idCounter++).toString()
    });

    return _this;
  }

  _createClass(TextInputField, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          unusedId = _this$props.id,
          hint = _this$props.hint,
          label = _this$props.label,
          description = _this$props.description,
          validationMessage = _this$props.validationMessage,
          inputHeight = _this$props.inputHeight,
          inputWidth = _this$props.inputWidth,
          disabled = _this$props.disabled,
          required = _this$props.required,
          isInvalid = _this$props.isInvalid,
          appearance = _this$props.appearance,
          props = _objectWithoutProperties(_this$props, _excluded);

      var id = "SelectField-".concat(this.state.id);
      /**
       * Split the wrapper props from the input props.
       */

      var _splitBoxProps = splitBoxProps(props),
          matchedProps = _splitBoxProps.matchedProps,
          remainingProps = _splitBoxProps.remainingProps;

      return /*#__PURE__*/React.createElement(FormField, _extends({
        marginBottom: 24,
        label: label,
        isRequired: required,
        hint: hint,
        description: description,
        validationMessage: validationMessage,
        labelFor: id
      }, matchedProps), /*#__PURE__*/React.createElement(Select, _extends({
        id: id,
        width: inputWidth,
        height: inputHeight,
        disabled: disabled,
        required: required,
        isInvalid: isInvalid,
        appearance: appearance
      }, remainingProps)));
    }
  }]);

  return TextInputField;
}(PureComponent);

TextInputField.displayName = "TextInputField";

_defineProperty(TextInputField, "propTypes", _objectSpread(_objectSpread(_objectSpread({}, Select.propTypes), FormField.propTypes), {}, {
  /**
   * The label used above the input element.
   */
  label: PropTypes.node.isRequired,

  /**
   * Passed on the label as a htmlFor prop.
   */
  labelFor: PropTypes.string,

  /**
   * Whether or not to show an asterix after the label.
   */
  isRequired: PropTypes.bool,

  /**
   * An optional description of the field under the label, above the input element.
   */
  description: PropTypes.node,

  /**
   * An optional hint under the input element.
   */
  hint: PropTypes.node,

  /**
   * If a validation message is passed it is shown under the input element
   * and above the hint. This is unaffected by `isInvalid`.
   */
  validationMessage: PropTypes.node,

  /**
   * The height of the input element.
   */
  inputHeight: PropTypes.number,

  /**
   * The width of the input width.
   */
  inputWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}));

_defineProperty(TextInputField, "defaultProps", {
  /**
   * The input width should be as wide as the form field.
   */
  inputWidth: '100%',
  inputHeight: 32
});

export { TextInputField as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJzcGxpdEJveFByb3BzIiwiRm9ybUZpZWxkIiwiU2VsZWN0IiwiaWRDb3VudGVyIiwiVGV4dElucHV0RmllbGQiLCJpZCIsInByb3BzIiwidG9TdHJpbmciLCJ1bnVzZWRJZCIsImhpbnQiLCJsYWJlbCIsImRlc2NyaXB0aW9uIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJpbnB1dEhlaWdodCIsImlucHV0V2lkdGgiLCJkaXNhYmxlZCIsInJlcXVpcmVkIiwiaXNJbnZhbGlkIiwiYXBwZWFyYW5jZSIsInN0YXRlIiwibWF0Y2hlZFByb3BzIiwicmVtYWluaW5nUHJvcHMiLCJwcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCIsImxhYmVsRm9yIiwic3RyaW5nIiwiYm9vbCIsIm51bWJlciIsIm9uZU9mVHlwZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWxlY3Qvc3JjL1NlbGVjdEZpZWxkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBzcGxpdEJveFByb3BzIH0gZnJvbSAndWktYm94J1xuaW1wb3J0IHsgRm9ybUZpZWxkIH0gZnJvbSAnLi4vLi4vZm9ybS1maWVsZCdcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9TZWxlY3QnXG5cbmxldCBpZENvdW50ZXIgPSAwXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRJbnB1dEZpZWxkIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIFNlbGVjdCBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAgICovXG4gICAgLi4uU2VsZWN0LnByb3BUeXBlcyxcbiAgICAuLi5Gb3JtRmllbGQucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIHVzZWQgYWJvdmUgdGhlIGlucHV0IGVsZW1lbnQuXG4gICAgICovXG4gICAgbGFiZWw6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBQYXNzZWQgb24gdGhlIGxhYmVsIGFzIGEgaHRtbEZvciBwcm9wLlxuICAgICAqL1xuICAgIGxhYmVsRm9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBvciBub3QgdG8gc2hvdyBhbiBhc3Rlcml4IGFmdGVyIHRoZSBsYWJlbC5cbiAgICAgKi9cbiAgICBpc1JlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIEFuIG9wdGlvbmFsIGRlc2NyaXB0aW9uIG9mIHRoZSBmaWVsZCB1bmRlciB0aGUgbGFiZWwsIGFib3ZlIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgICAqL1xuICAgIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIEFuIG9wdGlvbmFsIGhpbnQgdW5kZXIgdGhlIGlucHV0IGVsZW1lbnQuXG4gICAgICovXG4gICAgaGludDogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBJZiBhIHZhbGlkYXRpb24gbWVzc2FnZSBpcyBwYXNzZWQgaXQgaXMgc2hvd24gdW5kZXIgdGhlIGlucHV0IGVsZW1lbnRcbiAgICAgKiBhbmQgYWJvdmUgdGhlIGhpbnQuIFRoaXMgaXMgdW5hZmZlY3RlZCBieSBgaXNJbnZhbGlkYC5cbiAgICAgKi9cbiAgICB2YWxpZGF0aW9uTWVzc2FnZTogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgICAqL1xuICAgIGlucHV0SGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHdpZHRoIG9mIHRoZSBpbnB1dCB3aWR0aC5cbiAgICAgKi9cbiAgICBpbnB1dFdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSlcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgLyoqXG4gICAgICogVGhlIGlucHV0IHdpZHRoIHNob3VsZCBiZSBhcyB3aWRlIGFzIHRoZSBmb3JtIGZpZWxkLlxuICAgICAqL1xuICAgIGlucHV0V2lkdGg6ICcxMDAlJyxcbiAgICBpbnB1dEhlaWdodDogMzJcbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIGlkOiAodGhpcy5wcm9wcy5pZCB8fCBpZENvdW50ZXIrKykudG9TdHJpbmcoKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIC8vIFdlIGFyZSB1c2luZyB0aGUgaWQgZnJvbSB0aGUgc3RhdGVcbiAgICAgIGlkOiB1bnVzZWRJZCxcblxuICAgICAgLy8gRm9ybUZpZWxkIHByb3BzXG4gICAgICBoaW50LFxuICAgICAgbGFiZWwsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIHZhbGlkYXRpb25NZXNzYWdlLFxuXG4gICAgICAvLyBUZXh0SW5wdXQgcHJvcHNcbiAgICAgIGlucHV0SGVpZ2h0LFxuICAgICAgaW5wdXRXaWR0aCxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgcmVxdWlyZWQsXG4gICAgICBpc0ludmFsaWQsXG4gICAgICBhcHBlYXJhbmNlLFxuXG4gICAgICAvLyBSZXN0IHByb3BzIGFyZSBzcHJlYWQgb24gdGhlIEZvcm1GaWVsZFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgaWQgPSBgU2VsZWN0RmllbGQtJHt0aGlzLnN0YXRlLmlkfWBcblxuICAgIC8qKlxuICAgICAqIFNwbGl0IHRoZSB3cmFwcGVyIHByb3BzIGZyb20gdGhlIGlucHV0IHByb3BzLlxuICAgICAqL1xuICAgIGNvbnN0IHsgbWF0Y2hlZFByb3BzLCByZW1haW5pbmdQcm9wcyB9ID0gc3BsaXRCb3hQcm9wcyhwcm9wcylcblxuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybUZpZWxkXG4gICAgICAgIG1hcmdpbkJvdHRvbT17MjR9XG4gICAgICAgIGxhYmVsPXtsYWJlbH1cbiAgICAgICAgaXNSZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAgIGhpbnQ9e2hpbnR9XG4gICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2U9e3ZhbGlkYXRpb25NZXNzYWdlfVxuICAgICAgICBsYWJlbEZvcj17aWR9XG4gICAgICAgIHsuLi5tYXRjaGVkUHJvcHN9XG4gICAgICA+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgd2lkdGg9e2lucHV0V2lkdGh9XG4gICAgICAgICAgaGVpZ2h0PXtpbnB1dEhlaWdodH1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxuICAgICAgICAgIGlzSW52YWxpZD17aXNJbnZhbGlkfVxuICAgICAgICAgIGFwcGVhcmFuY2U9e2FwcGVhcmFuY2V9XG4gICAgICAgICAgey4uLnJlbWFpbmluZ1Byb3BzfVxuICAgICAgICAvPlxuICAgICAgPC9Gb3JtRmllbGQ+XG4gICAgKVxuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxhQUFULFFBQThCLFFBQTlCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixrQkFBMUI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLFVBQW5CO0FBRUEsSUFBSUMsU0FBUyxHQUFHLENBQWhCOztJQUVxQkMsYzs7Ozs7Ozs7Ozs7Ozs7Ozs0REEwRFg7TUFDTkMsRUFBRSxFQUFFLENBQUMsTUFBS0MsS0FB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