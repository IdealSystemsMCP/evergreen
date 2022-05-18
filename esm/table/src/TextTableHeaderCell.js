import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["children", "textProps", "isSortable", "sortOrder"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text } from '../../typography';
import TableHeaderCell from './TableHeaderCell';

var TextTableHeaderCell = /*#__PURE__*/function (_PureComponent) {
  _inherits(TextTableHeaderCell, _PureComponent);

  var _super = _createSuper(TextTableHeaderCell);

  function TextTableHeaderCell() {
    _classCallCheck(this, TextTableHeaderCell);

    return _super.apply(this, arguments);
  }

  _createClass(TextTableHeaderCell, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          textProps = _this$props.textProps,
          isSortable = _this$props.isSortable,
          sortOrder = _this$props.sortOrder,
          props = _objectWithoutProperties(_this$props, _excluded);

      return /*#__PURE__*/React.createElement(TableHeaderCell, props, /*#__PURE__*/React.createElement(Text, _extends({
        fontWeight: 500,
        size: 300,
        flex: "1"
      }, textProps), children, ' '));
    }
  }]);

  return TextTableHeaderCell;
}(PureComponent);

TextTableHeaderCell.displayName = "TextTableHeaderCell";

_defineProperty(TextTableHeaderCell, "propTypes", _objectSpread(_objectSpread({}, TableHeaderCell.propTypes), {}, {
  /**
   * Pass additional props to the Text component.
   */
  textProps: PropTypes.objectOf(PropTypes.string)
}));

export { TextTableHeaderCell as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJUZXh0IiwiVGFibGVIZWFkZXJDZWxsIiwiVGV4dFRhYmxlSGVhZGVyQ2VsbCIsInByb3BzIiwiY2hpbGRyZW4iLCJ0ZXh0UHJvcHMiLCJpc1NvcnRhYmxlIiwic29ydE9yZGVyIiwicHJvcFR5cGVzIiwib2JqZWN0T2YiLCJzdHJpbmciXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdGFibGUvc3JjL1RleHRUYWJsZUhlYWRlckNlbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IFRhYmxlSGVhZGVyQ2VsbCBmcm9tICcuL1RhYmxlSGVhZGVyQ2VsbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dFRhYmxlSGVhZGVyQ2VsbCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBUYWJsZUhlYWRlckNlbGwgY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgICAqL1xuICAgIC4uLlRhYmxlSGVhZGVyQ2VsbC5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBQYXNzIGFkZGl0aW9uYWwgcHJvcHMgdG8gdGhlIFRleHQgY29tcG9uZW50LlxuICAgICAqL1xuICAgIHRleHRQcm9wczogUHJvcFR5cGVzLm9iamVjdE9mKFByb3BUeXBlcy5zdHJpbmcpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgdGV4dFByb3BzLCBpc1NvcnRhYmxlLCBzb3J0T3JkZXIsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxUYWJsZUhlYWRlckNlbGwgey4uLnByb3BzfT5cbiAgICAgICAgPFRleHQgZm9udFdlaWdodD17NTAwfSBzaXplPXszMDB9IGZsZXg9XCIxXCIgey4uLnRleHRQcm9wc30+XG4gICAgICAgICAge2NoaWxkcmVufXsnICd9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvVGFibGVIZWFkZXJDZWxsPlxuICAgIClcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGtCQUFyQjtBQUNBLE9BQU9DLGVBQVAsTUFBNEIsbUJBQTVCOztJQUVxQkMsbUI7Ozs7Ozs7Ozs7Ozs7V0FhbkIsa0JBQVM7TUFDUCxrQkFBaUUsS0FBS0MsS0FBdEU7TUFBQSxJQUFRQyxRQUFSLGVBQVFBLFFBQVI7TUFBQSxJQUFrQkMsU0FBbEIsZUFBa0JBLFNBQWxCO01BQUEsSUFBNkJDLFVBQTdCLGVBQTZCQSxVQUE3QjtNQUFBLElBQXlDQyxTQUF6QyxlQUF5Q0EsU0FBekM7TUFBQSxJQUF1REosS0FBdkQ7O01BQ0Esb0JBQ0Usb0JBQUMsZUFBRCxFQUFxQkEsS0FBckIsZUFDRSxvQkFBQyxJQUFEO1FBQU0sVUFBVSxFQUFFLEdBQWxCO1FBQXVCLElBQUksRUFBRSxHQUE3QjtRQUFrQyxJQUFJLEVBQUM7TUFBdkMsR0FBK0NFLFNBQS9DLEdBQ0dELFFBREgsRUFDYSxHQURiLENBREYsQ0FERjtJQU9EOzs7O0VBdEI4Q04sYTs7QUFBNUJJLG1COztnQkFBQUEsbUIsK0NBS2RELGVBQWUsQ0FBQ08sUztFQUVuQjtBQUNKO0FBQ0E7RUFDSUgsU0FBUyxFQUFFTixTQUFTLENBQUNVLFFBQVYsQ0FBbUJWLFNBQVMsQ0FBQ1csTUFBN0I7OztTQVZNUixtQiJ9