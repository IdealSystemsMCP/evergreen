import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["label", "onSelect", "onDeselect", "isHighlighted", "isSelected", "isSelectable", "disabled", "style", "height", "icon"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Pane } from '../../layers';
import { Icon } from '../../icon';
import { Image } from '../../image';
import { TableRow, TextTableCell } from '../../table';

var Option = /*#__PURE__*/function (_PureComponent) {
  _inherits(Option, _PureComponent);

  var _super = _createSuper(Option);

  function Option() {
    _classCallCheck(this, Option);

    return _super.apply(this, arguments);
  }

  _createClass(Option, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          onSelect = _this$props.onSelect,
          onDeselect = _this$props.onDeselect,
          isHighlighted = _this$props.isHighlighted,
          isSelected = _this$props.isSelected,
          isSelectable = _this$props.isSelectable,
          disabled = _this$props.disabled,
          style = _this$props.style,
          height = _this$props.height,
          icon = _this$props.icon,
          props = _objectWithoutProperties(_this$props, _excluded);

      var textProps = {};

      if (disabled) {
        textProps.color = 'muted';
      }

      if (isSelected) {
        textProps.color = 'selected';
      }

      return /*#__PURE__*/React.createElement(TableRow, _extends({
        isSelectable: isSelectable && !disabled,
        isHighlighted: isHighlighted,
        onSelect: onSelect,
        onDeselect: onDeselect,
        isSelected: isSelected,
        style: style,
        display: "flex",
        alignItems: "center",
        borderBottom: false
      }, props), /*#__PURE__*/React.createElement(Pane, {
        paddingLeft: 12,
        paddingRight: 8,
        opacity: isSelected ? 1 : 0,
        flexGrow: 0,
        paddingTop: 4
      }, /*#__PURE__*/React.createElement(Icon, {
        color: "selected",
        icon: "tick",
        size: 14
      })), /*#__PURE__*/React.createElement(TextTableCell, {
        height: height,
        borderBottom: "muted",
        textProps: textProps,
        paddingLeft: 0,
        borderRight: null,
        flex: 1,
        alignSelf: "stretch",
        cursor: disabled ? 'default' : 'pointer'
      }, /*#__PURE__*/React.createElement(Pane, {
        alignItems: "center",
        display: "flex"
      }, icon && /*#__PURE__*/React.createElement(Image, {
        src: icon,
        width: 24,
        marginRight: 8
      }), label)));
    }
  }]);

  return Option;
}(PureComponent);

Option.displayName = "Option";

_defineProperty(Option, "propTypes", {
  label: PropTypes.string,
  icon: PropTypes.string,
  style: PropTypes.any,
  height: PropTypes.number,
  onSelect: PropTypes.func,
  onDeselect: PropTypes.func,
  isHighlighted: PropTypes.bool,
  isSelected: PropTypes.bool,
  isSelectable: PropTypes.bool,
  disabled: PropTypes.bool
});

export { Option as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJQYW5lIiwiSWNvbiIsIkltYWdlIiwiVGFibGVSb3ciLCJUZXh0VGFibGVDZWxsIiwiT3B0aW9uIiwicHJvcHMiLCJsYWJlbCIsIm9uU2VsZWN0Iiwib25EZXNlbGVjdCIsImlzSGlnaGxpZ2h0ZWQiLCJpc1NlbGVjdGVkIiwiaXNTZWxlY3RhYmxlIiwiZGlzYWJsZWQiLCJzdHlsZSIsImhlaWdodCIsImljb24iLCJ0ZXh0UHJvcHMiLCJjb2xvciIsInN0cmluZyIsImFueSIsIm51bWJlciIsImZ1bmMiLCJib29sIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NlbGVjdC1tZW51L3NyYy9PcHRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi4vLi4vaWNvbidcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAnLi4vLi4vaW1hZ2UnXG5pbXBvcnQgeyBUYWJsZVJvdywgVGV4dFRhYmxlQ2VsbCB9IGZyb20gJy4uLy4uL3RhYmxlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcHRpb24gZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN0eWxlOiBQcm9wVHlwZXMuYW55LFxuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25EZXNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaXNIaWdobGlnaHRlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNTZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNTZWxlY3RhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2xcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBsYWJlbCxcbiAgICAgIG9uU2VsZWN0LFxuICAgICAgb25EZXNlbGVjdCxcbiAgICAgIGlzSGlnaGxpZ2h0ZWQsXG4gICAgICBpc1NlbGVjdGVkLFxuICAgICAgaXNTZWxlY3RhYmxlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBzdHlsZSxcbiAgICAgIGhlaWdodCxcbiAgICAgIGljb24sXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB0ZXh0UHJvcHMgPSB7fVxuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgdGV4dFByb3BzLmNvbG9yID0gJ211dGVkJ1xuICAgIH1cblxuICAgIGlmIChpc1NlbGVjdGVkKSB7XG4gICAgICB0ZXh0UHJvcHMuY29sb3IgPSAnc2VsZWN0ZWQnXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUYWJsZVJvd1xuICAgICAgICBpc1NlbGVjdGFibGU9e2lzU2VsZWN0YWJsZSAmJiAhZGlzYWJsZWR9XG4gICAgICAgIGlzSGlnaGxpZ2h0ZWQ9e2lzSGlnaGxpZ2h0ZWR9XG4gICAgICAgIG9uU2VsZWN0PXtvblNlbGVjdH1cbiAgICAgICAgb25EZXNlbGVjdD17b25EZXNlbGVjdH1cbiAgICAgICAgaXNTZWxlY3RlZD17aXNTZWxlY3RlZH1cbiAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICBib3JkZXJCb3R0b209e2ZhbHNlfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIDxQYW5lXG4gICAgICAgICAgcGFkZGluZ0xlZnQ9ezEyfVxuICAgICAgICAgIHBhZGRpbmdSaWdodD17OH1cbiAgICAgICAgICBvcGFjaXR5PXtpc1NlbGVjdGVkID8gMSA6IDB9XG4gICAgICAgICAgZmxleEdyb3c9ezB9XG4gICAgICAgICAgcGFkZGluZ1RvcD17NH1cbiAgICAgICAgPlxuICAgICAgICAgIDxJY29uIGNvbG9yPVwic2VsZWN0ZWRcIiBpY29uPVwidGlja1wiIHNpemU9ezE0fSAvPlxuICAgICAgICA8L1BhbmU+XG4gICAgICAgIDxUZXh0VGFibGVDZWxsXG4gICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgYm9yZGVyQm90dG9tPVwibXV0ZWRcIlxuICAgICAgICAgIHRleHRQcm9wcz17dGV4dFByb3BzfVxuICAgICAgICAgIHBhZGRpbmdMZWZ0PXswfVxuICAgICAgICAgIGJvcmRlclJpZ2h0PXtudWxsfVxuICAgICAgICAgIGZsZXg9ezF9XG4gICAgICAgICAgYWxpZ25TZWxmPVwic3RyZXRjaFwiXG4gICAgICAgICAgY3Vyc29yPXtkaXNhYmxlZCA/ICdkZWZhdWx0JyA6ICdwb2ludGVyJ31cbiAgICAgICAgPlxuICAgICAgICAgIDxQYW5lIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBkaXNwbGF5PVwiZmxleFwiPlxuICAgICAgICAgICAge2ljb24gJiYgPEltYWdlIHNyYz17aWNvbn0gd2lkdGg9ezI0fSBtYXJnaW5SaWdodD17OH0gLz59XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgPC9QYW5lPlxuICAgICAgICA8L1RleHRUYWJsZUNlbGw+XG4gICAgICA8L1RhYmxlUm93PlxuICAgIClcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsY0FBckI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLFlBQXJCO0FBQ0EsU0FBU0MsS0FB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