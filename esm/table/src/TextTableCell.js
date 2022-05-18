import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["children", "textProps", "isNumber", "placeholder"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text } from '../../typography';
import TableCell from './TableCell';
var ellipsis = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
};

var TextTableCell = /*#__PURE__*/function (_PureComponent) {
  _inherits(TextTableCell, _PureComponent);

  var _super = _createSuper(TextTableCell);

  function TextTableCell() {
    _classCallCheck(this, TextTableCell);

    return _super.apply(this, arguments);
  }

  _createClass(TextTableCell, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          textProps = _this$props.textProps,
          isNumber = _this$props.isNumber,
          placeholder = _this$props.placeholder,
          props = _objectWithoutProperties(_this$props, _excluded);

      return /*#__PURE__*/React.createElement(TableCell, props, /*#__PURE__*/React.createElement(Text, _extends({
        size: 300,
        flex: "1"
      }, ellipsis, isNumber ? {
        fontFamily: 'mono'
      } : {}, textProps), children));
    }
  }]);

  return TextTableCell;
}(PureComponent);

TextTableCell.displayName = "TextTableCell";

_defineProperty(TextTableCell, "propTypes", _objectSpread(_objectSpread({}, TableCell.propTypes), {}, {
  /**
   * Adds fontFamily: mono.
   */
  isNumber: PropTypes.bool.isRequired,

  /**
   * Pass additional props to the Text component.
   */
  textProps: PropTypes.object
}));

_defineProperty(TextTableCell, "defaultProps", {
  isNumber: false
});

export { TextTableCell as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJUZXh0IiwiVGFibGVDZWxsIiwiZWxsaXBzaXMiLCJvdmVyZmxvdyIsInRleHRPdmVyZmxvdyIsIndoaXRlU3BhY2UiLCJUZXh0VGFibGVDZWxsIiwicHJvcHMiLCJjaGlsZHJlbiIsInRleHRQcm9wcyIsImlzTnVtYmVyIiwicGxhY2Vob2xkZXIiLCJmb250RmFtaWx5IiwicHJvcFR5cGVzIiwiYm9vbCIsImlzUmVxdWlyZWQiLCJvYmplY3QiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdGFibGUvc3JjL1RleHRUYWJsZUNlbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICcuL1RhYmxlQ2VsbCdcblxuY29uc3QgZWxsaXBzaXMgPSB7XG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICB3aGl0ZVNwYWNlOiAnbm93cmFwJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0VGFibGVDZWxsIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIFRhYmxlQ2VsbCBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAgICovXG4gICAgLi4uVGFibGVDZWxsLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIEFkZHMgZm9udEZhbWlseTogbW9uby5cbiAgICAgKi9cbiAgICBpc051bWJlcjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFBhc3MgYWRkaXRpb25hbCBwcm9wcyB0byB0aGUgVGV4dCBjb21wb25lbnQuXG4gICAgICovXG4gICAgdGV4dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGlzTnVtYmVyOiBmYWxzZVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIHRleHRQcm9wcywgaXNOdW1iZXIsIHBsYWNlaG9sZGVyLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUYWJsZUNlbGwgey4uLnByb3BzfT5cbiAgICAgICAgPFRleHRcbiAgICAgICAgICBzaXplPXszMDB9XG4gICAgICAgICAgZmxleD1cIjFcIlxuICAgICAgICAgIHsuLi5lbGxpcHNpc31cbiAgICAgICAgICB7Li4uKGlzTnVtYmVyID8geyBmb250RmFtaWx5OiAnbW9ubycgfSA6IHt9KX1cbiAgICAgICAgICB7Li4udGV4dFByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L1RhYmxlQ2VsbD5cbiAgICApXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixrQkFBckI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLGFBQXRCO0FBRUEsSUFBTUMsUUFBUSxHQUFHO0VBQ2ZDLFFBQVEsRUFBRSxRQURLO0VBRWZDLFlBQVksRUFBRSxVQUZDO0VBR2ZDLFVBQVUsRUFBRTtBQUhHLENBQWpCOztJQU1xQkMsYTs7Ozs7Ozs7Ozs7OztXQXNCbkIsa0JBQVM7TUFDUCxrQkFBaUUsS0FBS0MsS0FBdEU7TUFBQSxJQUFRQyxRQUFSLGVBQVFBLFFBQVI7TUFBQSxJQUFrQkMsU0FBbEIsZUFBa0JBLFNBQWxCO01BQUEsSUFBNkJDLFFBQTdCLGVBQTZCQSxRQUE3QjtNQUFBLElBQXVDQyxXQUF2QyxlQUF1Q0EsV0FBdkM7TUFBQSxJQUF1REosS0FBdkQ7O01BRUEsb0JBQ0Usb0JBQUMsU0FBRCxFQUFlQSxLQUFmLGVBQ0Usb0JBQUMsSUFBRDtRQUNFLElBQUksRUFBRSxHQURSO1FBRUUsSUFBSSxFQUFDO01BRlAsR0FHTUwsUUFITixFQUlPUSxRQUFRLEdBQUc7UUFBRUUsVUFBVSxFQUFFO01BQWQsQ0FBSCxHQUE0QixFQUozQyxFQUtNSCxTQUxOLEdBT0dELFFBUEgsQ0FERixDQURGO0lBYUQ7Ozs7RUF0Q3dDVixhOztBQUF0QlEsYTs7Z0JBQUFBLGEsK0NBS2RMLFNBQVMsQ0FBQ1ksUztFQUViO0FBQ0o7QUFDQTtFQUNJSCxRQUFRLEVBQUVYLFNBQVMsQ0FBQ2UsSUFBVixDQUFlQyxVOztFQUV6QjtBQUNKO0FBQ0E7RUFDSU4sU0FBUyxFQUFFVixTQUFTLENBQUNpQjs7O2dCQWZKVixhLGtCQWtCRztFQUNwQkksUUFBUSxFQUFFO0FBRFUsQzs7U0FsQkhKLGEifQ==