import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import { Pane } from '../../layers';
import TableBody from './TableBody';
import TableVirtualBody from './TableVirtualBody';
import TableCell from './TableCell';
import TableHead from './TableHead';
import TableHeaderCell from './TableHeaderCell';
import TableRow from './TableRow';
import TextTableCell from './TextTableCell';
import TextTableHeaderCell from './TextTableHeaderCell';
import SearchTableHeaderCell from './SearchTableHeaderCell';
import EditableCell from './EditableCell';
import SelectMenuCell from './SelectMenuCell';

var Table = /*#__PURE__*/function (_PureComponent) {
  _inherits(Table, _PureComponent);

  var _super = _createSuper(Table);

  function Table() {
    _classCallCheck(this, Table);

    return _super.apply(this, arguments);
  }

  _createClass(Table, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, _excluded);

      return /*#__PURE__*/React.createElement(Pane, props, children);
    }
  }]);

  return Table;
}(PureComponent);

Table.displayName = "Table";

_defineProperty(Table, "Body", TableBody);

_defineProperty(Table, "VirtualBody", TableVirtualBody);

_defineProperty(Table, "Head", TableHead);

_defineProperty(Table, "HeaderCell", TableHeaderCell);

_defineProperty(Table, "TextHeaderCell", TextTableHeaderCell);

_defineProperty(Table, "SearchHeaderCell", SearchTableHeaderCell);

_defineProperty(Table, "Row", TableRow);

_defineProperty(Table, "Cell", TableCell);

_defineProperty(Table, "TextCell", TextTableCell);

_defineProperty(Table, "EditableCell", EditableCell);

_defineProperty(Table, "SelectMenuCell", SelectMenuCell);

_defineProperty(Table, "propTypes", _objectSpread({}, Pane.propTypes));

export { Table as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQYW5lIiwiVGFibGVCb2R5IiwiVGFibGVWaXJ0dWFsQm9keSIsIlRhYmxlQ2VsbCIsIlRhYmxlSGVhZCIsIlRhYmxlSGVhZGVyQ2VsbCIsIlRhYmxlUm93IiwiVGV4dFRhYmxlQ2VsbCIsIlRleHRUYWJsZUhlYWRlckNlbGwiLCJTZWFyY2hUYWJsZUhlYWRlckNlbGwiLCJFZGl0YWJsZUNlbGwiLCJTZWxlY3RNZW51Q2VsbCIsIlRhYmxlIiwicHJvcHMiLCJjaGlsZHJlbiIsInByb3BUeXBlcyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvVGFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJy4vVGFibGVCb2R5J1xuaW1wb3J0IFRhYmxlVmlydHVhbEJvZHkgZnJvbSAnLi9UYWJsZVZpcnR1YWxCb2R5J1xuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICcuL1RhYmxlQ2VsbCdcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnLi9UYWJsZUhlYWQnXG5pbXBvcnQgVGFibGVIZWFkZXJDZWxsIGZyb20gJy4vVGFibGVIZWFkZXJDZWxsJ1xuaW1wb3J0IFRhYmxlUm93IGZyb20gJy4vVGFibGVSb3cnXG5pbXBvcnQgVGV4dFRhYmxlQ2VsbCBmcm9tICcuL1RleHRUYWJsZUNlbGwnXG5pbXBvcnQgVGV4dFRhYmxlSGVhZGVyQ2VsbCBmcm9tICcuL1RleHRUYWJsZUhlYWRlckNlbGwnXG5pbXBvcnQgU2VhcmNoVGFibGVIZWFkZXJDZWxsIGZyb20gJy4vU2VhcmNoVGFibGVIZWFkZXJDZWxsJ1xuaW1wb3J0IEVkaXRhYmxlQ2VsbCBmcm9tICcuL0VkaXRhYmxlQ2VsbCdcbmltcG9ydCBTZWxlY3RNZW51Q2VsbCBmcm9tICcuL1NlbGVjdE1lbnVDZWxsJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJsZSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgQm9keSA9IFRhYmxlQm9keVxuXG4gIHN0YXRpYyBWaXJ0dWFsQm9keSA9IFRhYmxlVmlydHVhbEJvZHlcblxuICBzdGF0aWMgSGVhZCA9IFRhYmxlSGVhZFxuXG4gIHN0YXRpYyBIZWFkZXJDZWxsID0gVGFibGVIZWFkZXJDZWxsXG5cbiAgc3RhdGljIFRleHRIZWFkZXJDZWxsID0gVGV4dFRhYmxlSGVhZGVyQ2VsbFxuXG4gIHN0YXRpYyBTZWFyY2hIZWFkZXJDZWxsID0gU2VhcmNoVGFibGVIZWFkZXJDZWxsXG5cbiAgc3RhdGljIFJvdyA9IFRhYmxlUm93XG5cbiAgc3RhdGljIENlbGwgPSBUYWJsZUNlbGxcblxuICBzdGF0aWMgVGV4dENlbGwgPSBUZXh0VGFibGVDZWxsXG5cbiAgc3RhdGljIEVkaXRhYmxlQ2VsbCA9IEVkaXRhYmxlQ2VsbFxuXG4gIHN0YXRpYyBTZWxlY3RNZW51Q2VsbCA9IFNlbGVjdE1lbnVDZWxsXG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgUGFuZSBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAgICovXG4gICAgLi4uUGFuZS5wcm9wVHlwZXNcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiA8UGFuZSB7Li4ucHJvcHN9PntjaGlsZHJlbn08L1BhbmU+XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLFNBQVNDLElBQVQsUUFBcUIsY0FBckI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLGFBQXRCO0FBQ0EsT0FBT0MsZ0JBQVAsTUFBNkIsb0JBQTdCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixhQUF0QjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsYUFBdEI7QUFDQSxPQUFPQyxlQUFQLE1BQTRCLG1CQUE1QjtBQUNBLE9BQU9DLFFBQVAsTUFBcUIsWUFBckI7QUFDQSxPQUFPQyxhQUFQLE1BQTBCLGlCQUExQjtBQUNBLE9BQU9DLG1CQUFQLE1BQWdDLHVCQUFoQztBQUNBLE9BQU9DLHFCQUFQLE1BQWtDLHlCQUFsQztBQUNBLE9BQU9DLFlBQVAsTUFBeUIsZ0JBQXpCO0FBQ0EsT0FBT0MsY0FBUCxNQUEyQixrQkFBM0I7O0lBRXFCQyxLOzs7Ozs7Ozs7Ozs7O1dBOEJuQixrQkFBUztNQUNQLGtCQUErQixLQUFLQyxLQUFwQztNQUFBLElBQVFDLFFBQVIsZUFBUUEsUUFBUjtNQUFBLElBQXFCRCxLQUFyQjs7TUFDQSxvQkFBTyxvQkFBQyxJQUFELEVBQVVBLEtBQVYsRUFBa0JDLFFBQWxCLENBQVA7SUFDRDs7OztFQWpDZ0NmLGE7O0FBQWRhLEs7O2dCQUFBQSxLLFVBQ0xYLFM7O2dCQURLVyxLLGlCQUdFVixnQjs7Z0JBSEZVLEssVUFLTFIsUzs7Z0JBTEtRLEssZ0JBT0NQLGU7O2dCQVBETyxLLG9CQVNLSixtQjs7Z0JBVExJLEssc0JBV09ILHFCOztnQkFYUEcsSyxTQWFOTixROztnQkFiTU0sSyxVQWVMVCxTOztnQkFmS1MsSyxjQWlCREwsYTs7Z0JBakJDSyxLLGtCQW1CR0YsWTs7Z0JBbkJIRSxLLG9CQXFCS0QsYzs7Z0JBckJMQyxLLGlDQTJCZFosSUFBSSxDQUFDZSxTOztTQTNCU0gsSyJ9