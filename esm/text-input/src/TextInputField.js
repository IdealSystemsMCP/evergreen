import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["id", "hint", "label", "description", "validationMessage", "inputHeight", "inputWidth", "disabled", "required", "isInvalid", "appearance", "placeholder", "spellCheck"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { splitBoxProps } from 'ui-box';
import { FormField } from '../../form-field';
import TextInput from './TextInput';
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
          placeholder = _this$props.placeholder,
          spellCheck = _this$props.spellCheck,
          props = _objectWithoutProperties(_this$props, _excluded);

      var id = "TextInputField-".concat(this.state.id);
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
      }, matchedProps), /*#__PURE__*/React.createElement(TextInput, _extends({
        id: id,
        width: inputWidth,
        height: inputHeight,
        disabled: disabled,
        required: required,
        isInvalid: isInvalid,
        appearance: appearance,
        placeholder: placeholder,
        spellCheck: spellCheck
      }, remainingProps)));
    }
  }]);

  return TextInputField;
}(PureComponent);

TextInputField.displayName = "TextInputField";

_defineProperty(TextInputField, "propTypes", _objectSpread(_objectSpread(_objectSpread({}, TextInput.propTypes), FormField.propTypes), {}, {
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
  required: PropTypes.bool,

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJzcGxpdEJveFByb3BzIiwiRm9ybUZpZWxkIiwiVGV4dElucHV0IiwiaWRDb3VudGVyIiwiVGV4dElucHV0RmllbGQiLCJpZCIsInByb3BzIiwidG9TdHJpbmciLCJ1bnVzZWRJZCIsImhpbnQiLCJsYWJlbCIsImRlc2NyaXB0aW9uIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJpbnB1dEhlaWdodCIsImlucHV0V2lkdGgiLCJkaXNhYmxlZCIsInJlcXVpcmVkIiwiaXNJbnZhbGlkIiwiYXBwZWFyYW5jZSIsInBsYWNlaG9sZGVyIiwic3BlbGxDaGVjayIsInN0YXRlIiwibWF0Y2hlZFByb3BzIiwicmVtYWluaW5nUHJvcHMiLCJwcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCIsImxhYmVsRm9yIiwic3RyaW5nIiwiYm9vbCIsIm51bWJlciIsIm9uZU9mVHlwZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXh0LWlucHV0L3NyYy9UZXh0SW5wdXRGaWVsZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgc3BsaXRCb3hQcm9wcyB9IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IEZvcm1GaWVsZCB9IGZyb20gJy4uLy4uL2Zvcm0tZmllbGQnXG5pbXBvcnQgVGV4dElucHV0IGZyb20gJy4vVGV4dElucHV0J1xuXG5sZXQgaWRDb3VudGVyID0gMFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0SW5wdXRGaWVsZCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBUZXh0SW5wdXQgY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgICAqL1xuICAgIC4uLlRleHRJbnB1dC5wcm9wVHlwZXMsXG4gICAgLi4uRm9ybUZpZWxkLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYWJlbCB1c2VkIGFib3ZlIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgICAqL1xuICAgIGxhYmVsOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogUGFzc2VkIG9uIHRoZSBsYWJlbCBhcyBhIGh0bWxGb3IgcHJvcC5cbiAgICAgKi9cbiAgICBsYWJlbEZvcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgb3Igbm90IHRvIHNob3cgYW4gYXN0ZXJpeCBhZnRlciB0aGUgbGFiZWwuXG4gICAgICovXG4gICAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogQW4gb3B0aW9uYWwgZGVzY3JpcHRpb24gb2YgdGhlIGZpZWxkIHVuZGVyIHRoZSBsYWJlbCwgYWJvdmUgdGhlIGlucHV0IGVsZW1lbnQuXG4gICAgICovXG4gICAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5ub2RlLFxuXG4gICAgLyoqXG4gICAgICogQW4gb3B0aW9uYWwgaGludCB1bmRlciB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICAgKi9cbiAgICBoaW50OiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIElmIGEgdmFsaWRhdGlvbiBtZXNzYWdlIGlzIHBhc3NlZCBpdCBpcyBzaG93biB1bmRlciB0aGUgaW5wdXQgZWxlbWVudFxuICAgICAqIGFuZCBhYm92ZSB0aGUgaGludC4gVGhpcyBpcyB1bmFmZmVjdGVkIGJ5IGBpc0ludmFsaWRgLlxuICAgICAqL1xuICAgIHZhbGlkYXRpb25NZXNzYWdlOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBoZWlnaHQgb2YgdGhlIGlucHV0IGVsZW1lbnQuXG4gICAgICovXG4gICAgaW5wdXRIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgd2lkdGggb2YgdGhlIGlucHV0IHdpZHRoLlxuICAgICAqL1xuICAgIGlucHV0V2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKVxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAvKipcbiAgICAgKiBUaGUgaW5wdXQgd2lkdGggc2hvdWxkIGJlIGFzIHdpZGUgYXMgdGhlIGZvcm0gZmllbGQuXG4gICAgICovXG4gICAgaW5wdXRXaWR0aDogJzEwMCUnLFxuICAgIGlucHV0SGVpZ2h0OiAzMlxuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgaWQ6ICh0aGlzLnByb3BzLmlkIHx8IGlkQ291bnRlcisrKS50b1N0cmluZygpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgLy8gV2UgYXJlIHVzaW5nIHRoZSBpZCBmcm9tIHRoZSBzdGF0ZVxuICAgICAgaWQ6IHVudXNlZElkLFxuXG4gICAgICAvLyBGb3JtRmllbGQgcHJvcHNcbiAgICAgIGhpbnQsXG4gICAgICBsYWJlbCxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UsXG5cbiAgICAgIC8vIFRleHRJbnB1dCBwcm9wc1xuICAgICAgaW5wdXRIZWlnaHQsXG4gICAgICBpbnB1dFdpZHRoLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICByZXF1aXJlZCxcbiAgICAgIGlzSW52YWxpZCxcbiAgICAgIGFwcGVhcmFuY2UsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIHNwZWxsQ2hlY2ssXG5cbiAgICAgIC8vIFJlc3QgcHJvcHMgYXJlIHNwcmVhZCBvbiB0aGUgRm9ybUZpZWxkXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCBpZCA9IGBUZXh0SW5wdXRGaWVsZC0ke3RoaXMuc3RhdGUuaWR9YFxuXG4gICAgLyoqXG4gICAgICogU3BsaXQgdGhlIHdyYXBwZXIgcHJvcHMgZnJvbSB0aGUgaW5wdXQgcHJvcHMuXG4gICAgICovXG4gICAgY29uc3QgeyBtYXRjaGVkUHJvcHMsIHJlbWFpbmluZ1Byb3BzIH0gPSBzcGxpdEJveFByb3BzKHByb3BzKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgbWFyZ2luQm90dG9tPXsyNH1cbiAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgICBpc1JlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgICAgaGludD17aGludH1cbiAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxuICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZT17dmFsaWRhdGlvbk1lc3NhZ2V9XG4gICAgICAgIGxhYmVsRm9yPXtpZH1cbiAgICAgICAgey4uLm1hdGNoZWRQcm9wc31cbiAgICAgID5cbiAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICB3aWR0aD17aW5wdXRXaWR0aH1cbiAgICAgICAgICBoZWlnaHQ9e2lucHV0SGVpZ2h0fVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAgICAgaXNJbnZhbGlkPXtpc0ludmFsaWR9XG4gICAgICAgICAgYXBwZWFyYW5jZT17YXBwZWFyYW5jZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgc3BlbGxDaGVjaz17c3BlbGxDaGVja31cbiAgICAgICAgICB7Li4ucmVtYWluaW5nUHJvcHN9XG4gICAgICAgIC8+XG4gICAgICA8L0Zvcm1GaWVsZD5cbiAgICApXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVND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