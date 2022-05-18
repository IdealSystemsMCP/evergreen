import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["hint", "label", "labelFor", "children", "isRequired", "labelProps", "description", "validationMessage"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box, { dimensions, spacing, position, layout } from 'ui-box';
import FormFieldLabel from './FormFieldLabel';
import FormFieldDescription from './FormFieldDescription';
import FormFieldValidationMessage from './FormFieldValidationMessage';
import FormFieldHint from './FormFieldHint';

var FormField = /*#__PURE__*/function (_PureComponent) {
  _inherits(FormField, _PureComponent);

  var _super = _createSuper(FormField);

  function FormField() {
    _classCallCheck(this, FormField);

    return _super.apply(this, arguments);
  }

  _createClass(FormField, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          hint = _this$props.hint,
          label = _this$props.label,
          labelFor = _this$props.labelFor,
          children = _this$props.children,
          isRequired = _this$props.isRequired,
          labelProps = _this$props.labelProps,
          description = _this$props.description,
          validationMessage = _this$props.validationMessage,
          props = _objectWithoutProperties(_this$props, _excluded);

      return /*#__PURE__*/React.createElement(Box, props, /*#__PURE__*/React.createElement(FormFieldLabel, _extends({
        htmlFor: labelFor,
        isAstrixShown: isRequired,
        marginBottom: description ? 0 : 4
      }, labelProps), label), typeof description === 'string' ? /*#__PURE__*/React.createElement(FormFieldDescription, {
        marginBottom: 4
      }, description) : description, children, typeof validationMessage === 'string' ? /*#__PURE__*/React.createElement(FormFieldValidationMessage, {
        marginTop: 8
      }, validationMessage) : validationMessage, typeof hint === 'string' ? /*#__PURE__*/React.createElement(FormFieldHint, {
        marginTop: 6
      }, hint) : hint);
    }
  }]);

  return FormField;
}(PureComponent);

FormField.displayName = "FormField";

_defineProperty(FormField, "propTypes", _objectSpread(_objectSpread(_objectSpread(_objectSpread({
  /**
   * The label used above the input element.
   */
  label: PropTypes.node.isRequired,

  /**
   * Passed on the label as a htmlFor prop.
   */
  labelFor: PropTypes.string,

  /**
   * Whether or not show an asterix after the label.
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
  validationMessage: PropTypes.node
}, dimensions.propTypes), spacing.propTypes), position.propTypes), layout.propTypes));

_defineProperty(FormField, "defaultProps", {
  labelProps: {
    size: 400
  }
});

export { FormField as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJCb3giLCJkaW1lbnNpb25zIiwic3BhY2luZyIsInBvc2l0aW9uIiwibGF5b3V0IiwiRm9ybUZpZWxkTGFiZWwiLCJGb3JtRmllbGREZXNjcmlwdGlvbiIsIkZvcm1GaWVsZFZhbGlkYXRpb25NZXNzYWdlIiwiRm9ybUZpZWxkSGludCIsIkZvcm1GaWVsZCIsInByb3BzIiwiaGludCIsImxhYmVsIiwibGFiZWxGb3IiLCJjaGlsZHJlbiIsImlzUmVxdWlyZWQiLCJsYWJlbFByb3BzIiwiZGVzY3JpcHRpb24iLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIm5vZGUiLCJzdHJpbmciLCJib29sIiwicHJvcFR5cGVzIiwic2l6ZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mb3JtLWZpZWxkL3NyYy9Gb3JtRmllbGQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3gsIHsgZGltZW5zaW9ucywgc3BhY2luZywgcG9zaXRpb24sIGxheW91dCB9IGZyb20gJ3VpLWJveCdcbmltcG9ydCBGb3JtRmllbGRMYWJlbCBmcm9tICcuL0Zvcm1GaWVsZExhYmVsJ1xuaW1wb3J0IEZvcm1GaWVsZERlc2NyaXB0aW9uIGZyb20gJy4vRm9ybUZpZWxkRGVzY3JpcHRpb24nXG5pbXBvcnQgRm9ybUZpZWxkVmFsaWRhdGlvbk1lc3NhZ2UgZnJvbSAnLi9Gb3JtRmllbGRWYWxpZGF0aW9uTWVzc2FnZSdcbmltcG9ydCBGb3JtRmllbGRIaW50IGZyb20gJy4vRm9ybUZpZWxkSGludCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybUZpZWxkIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIHVzZWQgYWJvdmUgdGhlIGlucHV0IGVsZW1lbnQuXG4gICAgICovXG4gICAgbGFiZWw6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBQYXNzZWQgb24gdGhlIGxhYmVsIGFzIGEgaHRtbEZvciBwcm9wLlxuICAgICAqL1xuICAgIGxhYmVsRm9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBvciBub3Qgc2hvdyBhbiBhc3Rlcml4IGFmdGVyIHRoZSBsYWJlbC5cbiAgICAgKi9cbiAgICBpc1JlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIEFuIG9wdGlvbmFsIGRlc2NyaXB0aW9uIG9mIHRoZSBmaWVsZCB1bmRlciB0aGUgbGFiZWwsIGFib3ZlIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgICAqL1xuICAgIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIEFuIG9wdGlvbmFsIGhpbnQgdW5kZXIgdGhlIGlucHV0IGVsZW1lbnQuXG4gICAgICovXG4gICAgaGludDogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBJZiBhIHZhbGlkYXRpb24gbWVzc2FnZSBpcyBwYXNzZWQgaXQgaXMgc2hvd24gdW5kZXIgdGhlIGlucHV0IGVsZW1lbnRcbiAgICAgKiBhbmQgYWJvdmUgdGhlIGhpbnQuIFRoaXMgaXMgdW5hZmZlY3RlZCBieSBgaXNJbnZhbGlkYC5cbiAgICAgKi9cbiAgICB2YWxpZGF0aW9uTWVzc2FnZTogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgZGltZW5zaW9ucyBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmUuXG4gICAgICovXG4gICAgLi4uZGltZW5zaW9ucy5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgc3BhY2luZyBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmUuXG4gICAgICovXG4gICAgLi4uc3BhY2luZy5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgcG9zaXRpb24gc3BlYyBmcm9tIHRoZSBCb3ggcHJpbWl0aXZlLlxuICAgICAqL1xuICAgIC4uLnBvc2l0aW9uLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBsYXlvdXQgc3BlYyBmcm9tIHRoZSBCb3ggcHJpbWl0aXZlLlxuICAgICAqL1xuICAgIC4uLmxheW91dC5wcm9wVHlwZXNcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbGFiZWxQcm9wczoge1xuICAgICAgc2l6ZTogNDAwXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGhpbnQsXG4gICAgICBsYWJlbCxcbiAgICAgIGxhYmVsRm9yLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBpc1JlcXVpcmVkLFxuICAgICAgbGFiZWxQcm9wcyxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveCB7Li4ucHJvcHN9PlxuICAgICAgICA8Rm9ybUZpZWxkTGFiZWxcbiAgICAgICAgICBodG1sRm9yPXtsYWJlbEZvcn1cbiAgICAgICAgICBpc0FzdHJpeFNob3duPXtpc1JlcXVpcmVkfVxuICAgICAgICAgIG1hcmdpbkJvdHRvbT17ZGVzY3JpcHRpb24gPyAwIDogNH1cbiAgICAgICAgICB7Li4ubGFiZWxQcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgPC9Gb3JtRmllbGRMYWJlbD5cbiAgICAgICAge3R5cGVvZiBkZXNjcmlwdGlvbiA9PT0gJ3N0cmluZycgPyAoXG4gICAgICAgICAgPEZvcm1GaWVsZERlc2NyaXB0aW9uIG1hcmdpbkJvdHRvbT17NH0+XG4gICAgICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICAgICAgPC9Gb3JtRmllbGREZXNjcmlwdGlvbj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICApfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIHt0eXBlb2YgdmFsaWRhdGlvbk1lc3NhZ2UgPT09ICdzdHJpbmcnID8gKFxuICAgICAgICAgIDxGb3JtRmllbGRWYWxpZGF0aW9uTWVzc2FnZSBtYXJnaW5Ub3A9ezh9PlxuICAgICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlfVxuICAgICAgICAgIDwvRm9ybUZpZWxkVmFsaWRhdGlvbk1lc3NhZ2U+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2VcbiAgICAgICAgKX1cbiAgICAgICAge3R5cGVvZiBoaW50ID09PSAnc3RyaW5nJyA/IChcbiAgICAgICAgICA8Rm9ybUZpZWxkSGludCBtYXJnaW5Ub3A9ezZ9PntoaW50fTwvRm9ybUZpZWxkSGludD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICBoaW50XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsR0FBUCxJQUFjQyxVQUFkLEVBQTBCQyxPQUExQixFQUFtQ0MsUUFBbkMsRUFBNkNDLE1BQTdDLFFBQTJELFFBQTNEO0FBQ0EsT0FBT0MsY0FBUCxNQUEyQixrQkFBM0I7QUFDQSxPQUFPQyxvQkFBUCxNQUFpQyx3QkFBakM7QUFDQSxPQUFPQywwQkFBUCxNQUF1Qyw4QkFBdkM7QUFDQSxPQUFPQyxhQUFQLE1BQTBCLGlCQUExQjs7SUFFcUJDLFM7Ozs7Ozs7Ozs7Ozs7V0E0RG5CLGtCQUFTO01BQ1Asa0JBVUksS0FBS0MsS0FWVDtNQUFBLElBQ0VDLElBREYsZUFDRUEsSUFERjtNQUFBLElBRUVDLEtBRkYsZUFFRUEsS0FGRjtNQUFBLElBR0VDLFFBSEYsZUFHRUEsUUFIRjtNQUFBLElBSUVDLFFBSkYsZUFJRUEsUUFKRjtNQUFBLElBS0VDLFVBTEYsZUFLRUEsVUFMRjtNQUFBLElBTUVDLFVBTkYsZUFNRUEsVUFORjtNQUFBLElBT0VDLFdBUEYsZUFPRUEsV0FQRjtNQUFBLElBUUVDLGlCQVJGLGVBUUVBLGlCQVJGO01BQUEsSUFTS1IsS0FUTDs7TUFZQSxvQkFDRSxvQkFBQyxHQUFELEVBQVNBLEtBQVQsZUFDRSxvQkFBQyxjQUFEO1FBQ0UsT0FBTyxFQUFFRyxRQURYO1FBRUUsYUFBYSxFQUFFRSxVQUZqQjtRQUdFLFlBQVksRUFBRUUsV0FBVyxHQUFHLENBQUgsR0FBTztNQUhsQyxHQUlNRCxVQUpOLEdBTUdKLEtBTkgsQ0FERixFQVNHLE9BQU9LLFdBQVAsS0FBdUIsUUFBdkIsZ0JBQ0Msb0JBQUMsb0JBQUQ7UUFBc0IsWUFBWSxFQUFFO01BQXBDLEdBQ0dBLFdBREgsQ0FERCxHQUtDQSxXQWRKLEVBZ0JHSCxRQWhCSCxFQWlCRyxPQUFPSSxpQkFBUCxLQUE2QixRQUE3QixnQkFDQyxvQkFBQywwQkFBRDtRQUE0QixTQUFTLEVBQUU7TUFBdkMsR0FDR0EsaUJBREgsQ0FERCxHQUtDQSxpQkF0QkosRUF3QkcsT0FBT1AsSUFBUCxLQUFnQixRQUFoQixnQkFDQyxvQkFBQyxhQUFEO1FBQWUsU0FBUyxFQUFFO01BQTFCLEdBQThCQSxJQUE5QixDQURELEdBR0NBLElBM0JKLENBREY7SUFnQ0Q7Ozs7RUF6R29DYixhOztBQUFsQlcsUzs7Z0JBQUFBLFM7RUFFakI7QUFDSjtBQUNBO0VBQ0lHLEtBQUssRUFBRWIsU0FBUyxDQUFDb0IsSUFBVixDQUFlSixVOztFQUV0QjtBQUNKO0FBQ0E7RUFDSUYsUUFBUSxFQUFFZCxTQUFTLENBQUNxQixNOztFQUVwQjtBQUNKO0FBQ0E7RUFDSUwsVUFBVSxFQUFFaEIsU0FBUyxDQUFDc0IsSTs7RUFFdEI7QUFDSjtBQUNBO0VBQ0lKLFdBQVcsRUFBRWxCLFNBQVMsQ0FBQ29CLEk7O0VBRXZCO0FBQ0o7QUFDQTtFQUNJUixJQUFJLEVBQUVaLFNBQVMsQ0FBQ29CLEk7O0VBRWhCO0FBQ0o7QUFDQTtBQUNBO0VBQ0lELGlCQUFpQixFQUFFbkIsU0FBUyxDQUFDb0I7R0FLMUJsQixVQUFVLENBQUNxQixTLEdBS1hwQixPQUFPLENBQUNvQixTLEdBS1JuQixRQUFRLENBQUNtQixTLEdBS1RsQixNQUFNLENBQUNrQixTOztnQkFuRE9iLFMsa0JBc0RHO0VBQ3BCTyxVQUFVLEVBQUU7SUFDVk8sSUFBSSxFQUFFO0VBREk7QUFEUSxDOztTQXRESGQsUyJ9