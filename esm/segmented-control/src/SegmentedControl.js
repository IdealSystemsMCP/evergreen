import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["value", "name", "height", "options", "onChange", "defaultValue", "disabled"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box, { spacing, position, layout, dimensions } from 'ui-box';
import safeInvoke from '../../lib/safe-invoke';
import SegmentedControlRadio from './SegmentedControlRadio';
var radioCount = 1; // Used for generating unique input names

var SegmentedControl = /*#__PURE__*/function (_PureComponent) {
  _inherits(SegmentedControl, _PureComponent);

  var _super = _createSuper(SegmentedControl);

  function SegmentedControl(props, context) {
    var _this;

    _classCallCheck(this, SegmentedControl);

    _this = _super.call(this, props, context);

    _defineProperty(_assertThisInitialized(_this), "isControlled", function () {
      return typeof _this.props.value !== 'undefined' && _this.props.value !== null;
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (value) {
      // Save a render cycle when it's a controlled input
      if (!_this.isControlled()) {
        _this.setState({
          value: value
        });
      }

      safeInvoke(_this.props.onChange, value);
    });

    var _value = props.defaultValue;

    if (typeof _value === 'undefined' || _value === null) {
      _value = props.options[0].value;
    }

    _this.state = {
      value: _value
    };
    _this.name = "SegmentedControl-".concat(radioCount);
    radioCount += 1;
    return _this;
  }

  _createClass(SegmentedControl, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          filterOutValue = _this$props.value,
          name = _this$props.name,
          height = _this$props.height,
          options = _this$props.options,
          onChange = _this$props.onChange,
          defaultValue = _this$props.defaultValue,
          disabled = _this$props.disabled,
          props = _objectWithoutProperties(_this$props, _excluded); // Allows it to behave like a controlled input


      var value = this.state.value;

      if (this.isControlled()) {
        value = this.props.value;
      }

      return /*#__PURE__*/React.createElement(Box, _extends({
        display: "flex",
        marginRight: -1,
        height: height
      }, props), options.map(function (option, index) {
        return /*#__PURE__*/React.createElement(SegmentedControlRadio, {
          key: option.value,
          id: _this2.name + index,
          name: name || _this2.name,
          label: option.label,
          value: String(option.value),
          height: height,
          checked: value === option.value,
          onChange: _this2.handleChange.bind(null, option.value),
          appearance: "default",
          isFirstItem: index === 0,
          isLastItem: index === options.length - 1,
          disabled: disabled
        });
      }));
    }
  }]);

  return SegmentedControl;
}(PureComponent);

SegmentedControl.displayName = "SegmentedControl";

_defineProperty(SegmentedControl, "propTypes", _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, spacing.propTypes), position.propTypes), layout.propTypes), dimensions.propTypes), {}, {
  /**
   * The options for the radios of the Segmented Control.
   */
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.node.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]).isRequired
  })).isRequired,

  /**
   * The current value of the Segmented Control when controlled.
   */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),

  /**
   * The default value of the Segmented Control when uncontrolled.
   */
  defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),

  /**
   * Function called when the value changes.
   */
  onChange: PropTypes.func,

  /**
   * The name of the radio group.
   */
  name: PropTypes.string,

  /**
   * The height of the Segmented Control.
   */
  height: PropTypes.number,

  /**
   * When true, the Segmented Control is disabled.
   */
  disabled: PropTypes.bool
}));

_defineProperty(SegmentedControl, "defaultProps", {
  height: 32
});

export { SegmentedControl as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJCb3giLCJzcGFjaW5nIiwicG9zaXRpb24iLCJsYXlvdXQiLCJkaW1lbnNpb25zIiwic2FmZUludm9rZSIsIlNlZ21lbnRlZENvbnRyb2xSYWRpbyIsInJhZGlvQ291bnQiLCJTZWdtZW50ZWRDb250cm9sIiwicHJvcHMiLCJjb250ZXh0IiwidmFsdWUiLCJpc0NvbnRyb2xsZWQiLCJzZXRTdGF0ZSIsIm9uQ2hhbmdlIiwiZGVmYXVsdFZhbHVlIiwib3B0aW9ucyIsInN0YXRlIiwibmFtZSIsImZpbHRlck91dFZhbHVlIiwiaGVpZ2h0IiwiZGlzYWJsZWQiLCJtYXAiLCJvcHRpb24iLCJpbmRleCIsImxhYmVsIiwiU3RyaW5nIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsImxlbmd0aCIsInByb3BUeXBlcyIsImFycmF5T2YiLCJzaGFwZSIsIm5vZGUiLCJpc1JlcXVpcmVkIiwib25lT2ZUeXBlIiwibnVtYmVyIiwic3RyaW5nIiwiYm9vbCIsImZ1bmMiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2VnbWVudGVkLWNvbnRyb2wvc3JjL1NlZ21lbnRlZENvbnRyb2wuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3gsIHsgc3BhY2luZywgcG9zaXRpb24sIGxheW91dCwgZGltZW5zaW9ucyB9IGZyb20gJ3VpLWJveCdcbmltcG9ydCBzYWZlSW52b2tlIGZyb20gJy4uLy4uL2xpYi9zYWZlLWludm9rZSdcbmltcG9ydCBTZWdtZW50ZWRDb250cm9sUmFkaW8gZnJvbSAnLi9TZWdtZW50ZWRDb250cm9sUmFkaW8nXG5cbmxldCByYWRpb0NvdW50ID0gMSAvLyBVc2VkIGZvciBnZW5lcmF0aW5nIHVuaXF1ZSBpbnB1dCBuYW1lc1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWdtZW50ZWRDb250cm9sIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgc29tZSBCb3ggQVBJcy5cbiAgICAgKi9cbiAgICAuLi5zcGFjaW5nLnByb3BUeXBlcyxcbiAgICAuLi5wb3NpdGlvbi5wcm9wVHlwZXMsXG4gICAgLi4ubGF5b3V0LnByb3BUeXBlcyxcbiAgICAuLi5kaW1lbnNpb25zLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcHRpb25zIGZvciB0aGUgcmFkaW9zIG9mIHRoZSBTZWdtZW50ZWQgQ29udHJvbC5cbiAgICAgKi9cbiAgICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIGxhYmVsOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgICAgICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAgIFByb3BUeXBlcy5ib29sXG4gICAgICAgIF0pLmlzUmVxdWlyZWRcbiAgICAgIH0pXG4gICAgKS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIFNlZ21lbnRlZCBDb250cm9sIHdoZW4gY29udHJvbGxlZC5cbiAgICAgKi9cbiAgICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIFByb3BUeXBlcy5ib29sXG4gICAgXSksXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBvZiB0aGUgU2VnbWVudGVkIENvbnRyb2wgd2hlbiB1bmNvbnRyb2xsZWQuXG4gICAgICovXG4gICAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgUHJvcFR5cGVzLmJvb2xcbiAgICBdKSxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzLlxuICAgICAqL1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSByYWRpbyBncm91cC5cbiAgICAgKi9cbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGhlaWdodCBvZiB0aGUgU2VnbWVudGVkIENvbnRyb2wuXG4gICAgICovXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgU2VnbWVudGVkIENvbnRyb2wgaXMgZGlzYWJsZWQuXG4gICAgICovXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGhlaWdodDogMzJcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgc3VwZXIocHJvcHMsIGNvbnRleHQpXG5cbiAgICBsZXQgdmFsdWUgPSBwcm9wcy5kZWZhdWx0VmFsdWVcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSBwcm9wcy5vcHRpb25zWzBdLnZhbHVlXG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlXG4gICAgfVxuXG4gICAgdGhpcy5uYW1lID0gYFNlZ21lbnRlZENvbnRyb2wtJHtyYWRpb0NvdW50fWBcbiAgICByYWRpb0NvdW50ICs9IDFcbiAgfVxuXG4gIGlzQ29udHJvbGxlZCA9ICgpID0+IHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMucHJvcHMudmFsdWUgIT09ICd1bmRlZmluZWQnICYmIHRoaXMucHJvcHMudmFsdWUgIT09IG51bGxcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IHZhbHVlID0+IHtcbiAgICAvLyBTYXZlIGEgcmVuZGVyIGN5Y2xlIHdoZW4gaXQncyBhIGNvbnRyb2xsZWQgaW5wdXRcbiAgICBpZiAoIXRoaXMuaXNDb250cm9sbGVkKCkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZSB9KVxuICAgIH1cblxuICAgIHNhZmVJbnZva2UodGhpcy5wcm9wcy5vbkNoYW5nZSwgdmFsdWUpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdmFsdWU6IGZpbHRlck91dFZhbHVlLCAvLyBGaWx0ZXIgb3V0LlxuICAgICAgbmFtZSxcbiAgICAgIGhlaWdodCxcbiAgICAgIG9wdGlvbnMsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIGRlZmF1bHRWYWx1ZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgLy8gQWxsb3dzIGl0IHRvIGJlaGF2ZSBsaWtlIGEgY29udHJvbGxlZCBpbnB1dFxuICAgIGxldCB7IHZhbHVlIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKHRoaXMuaXNDb250cm9sbGVkKCkpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgbWFyZ2luUmlnaHQ9ey0xfSBoZWlnaHQ9e2hlaWdodH0gey4uLnByb3BzfT5cbiAgICAgICAge29wdGlvbnMubWFwKChvcHRpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPFNlZ21lbnRlZENvbnRyb2xSYWRpb1xuICAgICAgICAgICAga2V5PXtvcHRpb24udmFsdWV9XG4gICAgICAgICAgICBpZD17dGhpcy5uYW1lICsgaW5kZXh9XG4gICAgICAgICAgICBuYW1lPXtuYW1lIHx8IHRoaXMubmFtZX1cbiAgICAgICAgICAgIGxhYmVsPXtvcHRpb24ubGFiZWx9XG4gICAgICAgICAgICB2YWx1ZT17U3RyaW5nKG9wdGlvbi52YWx1ZSl9XG4gICAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICAgIGNoZWNrZWQ9e3ZhbHVlID09PSBvcHRpb24udmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZChudWxsLCBvcHRpb24udmFsdWUpfVxuICAgICAgICAgICAgYXBwZWFyYW5jZT1cImRlZmF1bHRcIlxuICAgICAgICAgICAgaXNGaXJzdEl0ZW09e2luZGV4ID09PSAwfVxuICAgICAgICAgICAgaXNMYXN0SXRlbT17aW5kZXggPT09IG9wdGlvbnMubGVuZ3RoIC0gMX1cbiAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsR0FBUCxJQUFjQyxPQUFkLEVBQXVCQyxRQUF2QixFQUFpQ0MsTUFBakMsRUFBeUNDLFVBQXpDLFFBQTJELFFBQTNEO0FBQ0EsT0FBT0MsVUFBUCxNQUF1Qix1QkFBdkI7QUFDQSxPQUFPQyxxQkFBUCxNQUFrQyx5QkFBbEM7QUFFQSxJQUFJQyxVQUFVLEdBQUcsQ0FBakIsQyxDQUFtQjs7SUFFRUMsZ0I7Ozs7O0VBbUVuQiwwQkFBWUMsS0FBWixFQUFtQkMsT0FBbkIsRUFBNEI7SUFBQTs7SUFBQTs7SUFDMUIsMEJBQU1ELEtBQU4sRUFBYUMsT0FBYjs7SUFEMEIsK0RBZ0JiLFlBQU07TUFDbkIsT0FBTyxPQUFPLE1BQUtELEtBQUwsQ0FBV0Us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