import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

var _css;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from 'ui-box';
import { css } from 'glamor';
import cx from 'classnames';
import { Text } from '../../typography';
import { withTheme } from '../../theme';
var labelClass = css({
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative'
});
var wrapperClass = css((_css = {
  position: 'relative',
  display: 'flex',
  flex: 1,
  cursor: 'pointer',
  marginLeft: '-1px'
}, _defineProperty(_css, ":first-child .".concat(labelClass), {
  borderTopLeftRadius: 3,
  borderBottomLeftRadius: 3
}), _defineProperty(_css, ":last-child .".concat(labelClass), {
  borderTopRightRadius: 3,
  borderBottomRightRadius: 3
}), _css));
var offscreenCss = css({
  overflow: 'hidden',
  position: 'absolute',
  height: '1px',
  width: '1px',
  padding: 0,
  margin: '-1px',
  border: 0,
  clip: 'rect(0 0 0 0)'
});

var SegmentedControlRadio = /*#__PURE__*/function (_PureComponent) {
  _inherits(SegmentedControlRadio, _PureComponent);

  var _super = _createSuper(SegmentedControlRadio);

  function SegmentedControlRadio() {
    _classCallCheck(this, SegmentedControlRadio);

    return _super.apply(this, arguments);
  }

  _createClass(SegmentedControlRadio, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          id = _this$props.id,
          name = _this$props.name,
          label = _this$props.label,
          value = _this$props.value,
          height = _this$props.height,
          checked = _this$props.checked,
          _onChange = _this$props.onChange,
          appearance = _this$props.appearance,
          isFirstItem = _this$props.isFirstItem,
          isLastItem = _this$props.isLastItem,
          disabled = _this$props.disabled;
      var themedClassName = theme.getSegmentedControlRadioClassName(appearance);
      var textSize = theme.getTextSizeForControlHeight(height);
      var borderRadius = theme.getBorderRadiusForControlHeight(height);
      return /*#__PURE__*/React.createElement(Box, _extends({
        className: cx(wrapperClass.toString(), themedClassName),
        "data-active": checked
      }, isFirstItem ? {
        borderTopLeftRadius: borderRadius,
        borderBottomLeftRadius: borderRadius
      } : {}, isLastItem ? {
        borderTopRightRadius: borderRadius,
        borderBottomRightRadius: borderRadius
      } : {}), /*#__PURE__*/React.createElement("input", {
        type: "radio",
        id: id,
        className: "".concat(offscreenCss),
        name: name,
        value: value,
        checked: checked,
        onChange: function onChange(e) {
          return _onChange(e.target.value);
        },
        disabled: disabled
      }), /*#__PURE__*/React.createElement(Text, {
        is: "label",
        cursor: "pointer",
        htmlFor: id,
        fontWeight: 500,
        size: textSize,
        className: "".concat(labelClass),
        disabled: disabled
      }, label));
    }
  }]);

  return SegmentedControlRadio;
}(PureComponent);

SegmentedControlRadio.displayName = "SegmentedControlRadio";

_defineProperty(SegmentedControlRadio, "propTypes", {
  /**
   * The name attribute of the radio input.
   */
  name: PropTypes.string.isRequired,

  /**
   * The label used for the radio.
   */
  label: PropTypes.node.isRequired,

  /**
   * The value attribute of the radio input.
   */
  value: PropTypes.string.isRequired,

  /**
   * The height of the control.
   */
  height: PropTypes.number.isRequired,

  /**
   * When true, the radio input is checked.
   */
  checked: PropTypes.bool.isRequired,

  /**
   * Function called when the state changes.
   */
  onChange: PropTypes.func.isRequired,

  /**
   * The appearance of the control. Currently only `default` is possible.
   */
  appearance: PropTypes.string.isRequired,

  /**
   * When true, this item is the first item.
   */
  isFirstItem: PropTypes.bool,

  /**
   * When true, this item is the last item.
   */
  isLastItem: PropTypes.bool,

  /**
   * The unique id of the radio option.
   */
  id: PropTypes.string,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired,

  /**
   * When true, the input is disabled.
   */
  disabled: PropTypes.bool
});

export default withTheme(SegmentedControlRadio);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJCb3giLCJjc3MiLCJjeCIsIlRleHQiLCJ3aXRoVGhlbWUiLCJsYWJlbENsYXNzIiwiZGlzcGxheSIsImZsZXgiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJwb3NpdGlvbiIsIndyYXBwZXJDbGFzcyIsImN1cnNvciIsIm1hcmdpbkxlZnQiLCJib3JkZXJUb3BMZWZ0UmFkaXVzIiwiYm9yZGVyQm90dG9tTGVmdFJhZGl1cyIsImJvcmRlclRvcFJpZ2h0UmFkaXVzIiwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMiLCJvZmZzY3JlZW5Dc3MiLCJvdmVyZmxvdyIsImhlaWdodCIsIndpZHRoIiwicGFkZGluZyIsIm1hcmdpbiIsImJvcmRlciIsImNsaXAiLCJTZWdtZW50ZWRDb250cm9sUmFkaW8iLCJwcm9wcyIsInRoZW1lIiwiaWQiLCJuYW1lIiwibGFiZWwiLCJ2YWx1ZSIsImNoZWNrZWQiLCJvbkNoYW5nZSIsImFwcGVhcmFuY2UiLCJpc0ZpcnN0SXRlbSIsImlzTGFzdEl0ZW0iLCJkaXNhYmxlZCIsInRoZW1lZENsYXNzTmFtZSIsImdldFNlZ21lbnRlZENvbnRyb2xSYWRpb0NsYXNzTmFtZSIsInRleHRTaXplIiwiZ2V0VGV4dFNpemVGb3JDb250cm9sSGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiZ2V0Qm9yZGVyUmFkaXVzRm9yQ29udHJvbEhlaWdodCIsInRvU3RyaW5nIiwiZSIsInRhcmdldCIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJub2RlIiwibnVtYmVyIiwiYm9vbCIsImZ1bmMiLCJvYmplY3QiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2VnbWVudGVkLWNvbnRyb2wvc3JjL1NlZ21lbnRlZENvbnRyb2xSYWRpby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJveCBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5cbmNvbnN0IGxhYmVsQ2xhc3MgPSBjc3Moe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXg6IDEsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnXG59KVxuXG5jb25zdCB3cmFwcGVyQ2xhc3MgPSBjc3Moe1xuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4OiAxLFxuICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgbWFyZ2luTGVmdDogJy0xcHgnLFxuICBbYDpmaXJzdC1jaGlsZCAuJHtsYWJlbENsYXNzfWBdOiB7XG4gICAgYm9yZGVyVG9wTGVmdFJhZGl1czogMyxcbiAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiAzXG4gIH0sXG4gIFtgOmxhc3QtY2hpbGQgLiR7bGFiZWxDbGFzc31gXToge1xuICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiAzLFxuICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiAzXG4gIH1cbn0pXG5cbmNvbnN0IG9mZnNjcmVlbkNzcyA9IGNzcyh7XG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIGhlaWdodDogJzFweCcsXG4gIHdpZHRoOiAnMXB4JyxcbiAgcGFkZGluZzogMCxcbiAgbWFyZ2luOiAnLTFweCcsXG4gIGJvcmRlcjogMCxcbiAgY2xpcDogJ3JlY3QoMCAwIDAgMCknXG59KVxuXG5jbGFzcyBTZWdtZW50ZWRDb250cm9sUmFkaW8gZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBhdHRyaWJ1dGUgb2YgdGhlIHJhZGlvIGlucHV0LlxuICAgICAqL1xuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYWJlbCB1c2VkIGZvciB0aGUgcmFkaW8uXG4gICAgICovXG4gICAgbGFiZWw6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmFsdWUgYXR0cmlidXRlIG9mIHRoZSByYWRpbyBpbnB1dC5cbiAgICAgKi9cbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGhlaWdodCBvZiB0aGUgY29udHJvbC5cbiAgICAgKi9cbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIHJhZGlvIGlucHV0IGlzIGNoZWNrZWQuXG4gICAgICovXG4gICAgY2hlY2tlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIHRoZSBzdGF0ZSBjaGFuZ2VzLlxuICAgICAqL1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIGNvbnRyb2wuIEN1cnJlbnRseSBvbmx5IGBkZWZhdWx0YCBpcyBwb3NzaWJsZS5cbiAgICAgKi9cbiAgICBhcHBlYXJhbmNlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoaXMgaXRlbSBpcyB0aGUgZmlyc3QgaXRlbS5cbiAgICAgKi9cbiAgICBpc0ZpcnN0SXRlbTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoaXMgaXRlbSBpcyB0aGUgbGFzdCBpdGVtLlxuICAgICAqL1xuICAgIGlzTGFzdEl0ZW06IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHVuaXF1ZSBpZCBvZiB0aGUgcmFkaW8gb3B0aW9uLlxuICAgICAqL1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgaW5wdXQgaXMgZGlzYWJsZWQuXG4gICAgICovXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdGhlbWUsXG5cbiAgICAgIGlkLFxuICAgICAgbmFtZSxcbiAgICAgIGxhYmVsLFxuICAgICAgdmFsdWUsXG4gICAgICBoZWlnaHQsXG4gICAgICBjaGVja2VkLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBhcHBlYXJhbmNlLFxuICAgICAgaXNGaXJzdEl0ZW0sXG4gICAgICBpc0xhc3RJdGVtLFxuICAgICAgZGlzYWJsZWRcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgdGhlbWVkQ2xhc3NOYW1lID0gdGhlbWUuZ2V0U2VnbWVudGVkQ29udHJvbFJhZGlvQ2xhc3NOYW1lKGFwcGVhcmFuY2UpXG4gICAgY29uc3QgdGV4dFNpemUgPSB0aGVtZS5nZXRUZXh0U2l6ZUZvckNvbnRyb2xIZWlnaHQoaGVpZ2h0KVxuICAgIGNvbnN0IGJvcmRlclJhZGl1cyA9IHRoZW1lLmdldEJvcmRlclJhZGl1c0ZvckNvbnRyb2xIZWlnaHQoaGVpZ2h0KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3hcbiAgICAgICAgY2xhc3NOYW1lPXtjeCh3cmFwcGVyQ2xhc3MudG9TdHJpbmcoKSwgdGhlbWVkQ2xhc3NOYW1lKX1cbiAgICAgICAgZGF0YS1hY3RpdmU9e2NoZWNrZWR9XG4gICAgICAgIHsuLi4oaXNGaXJzdEl0ZW1cbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogYm9yZGVyUmFkaXVzLFxuICAgICAgICAgICAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiBib3JkZXJSYWRpdXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA6IHt9KX1cbiAgICAgICAgey4uLihpc0xhc3RJdGVtXG4gICAgICAgICAgPyB7XG4gICAgICAgICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiBib3JkZXJSYWRpdXMsXG4gICAgICAgICAgICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiBib3JkZXJSYWRpdXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA6IHt9KX1cbiAgICAgID5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtvZmZzY3JlZW5Dc3N9YH1cbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIC8+XG4gICAgICAgIDxUZXh0XG4gICAgICAgICAgaXM9XCJsYWJlbFwiXG4gICAgICAgICAgY3Vyc29yPVwicG9pbnRlclwiXG4gICAgICAgICAgaHRtbEZvcj17aWR9XG4gICAgICAgICAgZm9udFdlaWdodD17NTAwfVxuICAgICAgICAgIHNpemU9e3RleHRTaXplfVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7bGFiZWxDbGFzc31gfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgPlxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShTZWdtZW50ZWRDb250cm9sUmFkaW8pXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsR0FBUCxNQUFnQixRQUFoQjtBQUNBLFNBQVNDLEdBQVQsUUFBb0IsUUFBcEI7QUFDQSxPQUFPQyxFQUFQLE1BQWUsWUFBZjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsa0JBQXJCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixhQUExQjtBQUVBLElBQU1DLFVBQVUsR0FBR0osR0FBRyxDQUFDO0VBQ3JCSyxPQUFPLEVBQUUsTUFEWTtFQUVyQkMsSUFBSSxFQUFFLENBRmU7RUFHckJDLFVBQVUsRUFBRSxRQUhTO0VBSXJCQyxjQUFjLEVBQUUsUUFKSztFQUtyQkMsUUFBUSxFQUFFO0FBTFcsQ0FBRCxDQUF0QjtBQVFBLElBQU1DLFlBQVksR0FBR1YsR0FBRztFQUN0QlMsUUFBUSxFQUFFLFVBRFk7RUFFdEJKLE9BQU8sRUFBRSxNQUZhO0VBR3RCQyxJQUFJLEVBQUUsQ0FIZ0I7RUFJdEJLLE1BQU0sRUFBRSxTQUpjO0VBS3RCQyxVQUFVLEVBQUU7QUFMVSxpREFNSlIsVUFOSSxHQU1XO0VBQy9CUyxtQkFBbUIsRUFBRSxDQURVO0VBRS9CQyxzQkFBc0IsRUFBRTtBQUZPLENBTlgsZ0RBVUxWLFVBVkssR0FVVTtFQUM5Qlcsb0JBQW9CLEVBQUUsQ0FEUTtFQUU5QkMsdUJBQXVCLEVBQUU7QUFGSyxDQVZWLFNBQXhCO0FBZ0JBLElBQU1DLFlBQVksR0FBR2pCLEdBQUcsQ0FBQztFQUN2QmtCLFFBQVEsRUFBRSxRQURhO0VB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