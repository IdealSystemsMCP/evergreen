import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["isHighlighted", "isSelected", "style", "children"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Option from '../../select-menu/src/Option';

var AutocompleteItem = /*#__PURE__*/function (_PureComponent) {
  _inherits(AutocompleteItem, _PureComponent);

  var _super = _createSuper(AutocompleteItem);

  function AutocompleteItem() {
    _classCallCheck(this, AutocompleteItem);

    return _super.apply(this, arguments);
  }

  _createClass(AutocompleteItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isHighlighted = _this$props.isHighlighted,
          isSelected = _this$props.isSelected,
          style = _this$props.style,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, _excluded);

      return /*#__PURE__*/React.createElement(Option, _extends({
        isHighlighted: isHighlighted,
        isSelected: isSelected,
        label: children,
        style: style
      }, props));
    }
  }]);

  return AutocompleteItem;
}(PureComponent);

AutocompleteItem.displayName = "AutocompleteItem";

_defineProperty(AutocompleteItem, "propTypes", {
  children: PropTypes.node,
  style: PropTypes.object,
  isSelected: PropTypes.bool,
  isHighlighted: PropTypes.bool
});

export { AutocompleteItem as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJPcHRpb24iLCJBdXRvY29tcGxldGVJdGVtIiwicHJvcHMiLCJpc0hpZ2hsaWdodGVkIiwiaXNTZWxlY3RlZCIsInN0eWxlIiwiY2hpbGRyZW4iLCJub2RlIiwib2JqZWN0IiwiYm9vbCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRvY29tcGxldGUvc3JjL0F1dG9jb21wbGV0ZUl0ZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBPcHRpb24gZnJvbSAnLi4vLi4vc2VsZWN0LW1lbnUvc3JjL09wdGlvbidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b2NvbXBsZXRlSXRlbSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBpc1NlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc0hpZ2hsaWdodGVkOiBQcm9wVHlwZXMuYm9vbFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaXNIaWdobGlnaHRlZCwgaXNTZWxlY3RlZCwgc3R5bGUsIGNoaWxkcmVuLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxPcHRpb25cbiAgICAgICAgaXNIaWdobGlnaHRlZD17aXNIaWdobGlnaHRlZH1cbiAgICAgICAgaXNTZWxlY3RlZD17aXNTZWxlY3RlZH1cbiAgICAgICAgbGFiZWw9e2NoaWxkcmVufVxuICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQiw4QkFBbkI7O0lBRXFCQyxnQjs7Ozs7Ozs7Ozs7OztXQVFuQixrQkFBUztNQUNQLGtCQUFpRSxLQUFLQyxLQUF0RTtNQUFBLElBQVFDLGFBQVIsZUFBUUEsYUFBUjtNQUFBLElBQXVCQyxVQUF2QixlQUF1QkEsVUFBdkI7TUFBQSxJQUFtQ0MsS0FBbkMsZUFBbUNBLEtBQW5DO01BQUEsSUFBMENDLFFBQTFDLGVBQTBDQSxRQUExQztNQUFBLElBQXVESixLQUF2RDs7TUFFQSxvQkFDRSxvQkFBQyxNQUFEO1FBQ0UsYUFBYSxFQUFFQyxhQURqQjtRQUVFLFVBQVUsRUFBRUMsVUFGZDtRQUdFLEtBQUssRUFBRUUsUUFIVDtRQUlFLEtBQUssRUFBRUQ7TUFKVCxHQUtNSCxLQUxOLEVBREY7SUFTRDs7OztFQXBCMkNKLGE7O0FBQXpCRyxnQjs7Z0JBQUFBLGdCLGVBQ0E7RUFDakJLLFFBQVEsRUFBRVAsU0FBUyxDQUFDUSxJQURIO0VBRWpCRixLQUFLLEVBQUVOLFNBQVMsQ0FBQ1MsTUFGQTtFQUdqQkosVUFBVSxFQUFFTCxTQUFTLENBQUNVLElBSEw7RUFJakJOLGFBQWEsRUFBRUosU0FBUyxDQUFDVTtBQUpSLEM7O1NBREFSLGdCIn0=