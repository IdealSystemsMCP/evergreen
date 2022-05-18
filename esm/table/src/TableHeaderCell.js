import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import TableCell from './TableCell';

var TableHeaderCell = /*#__PURE__*/function (_PureComponent) {
  _inherits(TableHeaderCell, _PureComponent);

  var _super = _createSuper(TableHeaderCell);

  function TableHeaderCell() {
    _classCallCheck(this, TableHeaderCell);

    return _super.apply(this, arguments);
  }

  _createClass(TableHeaderCell, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(TableCell, _extends({
        overflow: "visible",
        borderBottom: null
      }, this.props));
    }
  }]);

  return TableHeaderCell;
}(PureComponent);

TableHeaderCell.displayName = "TableHeaderCell";

_defineProperty(TableHeaderCell, "propTypes", _objectSpread({}, TableCell.propTypes));

export { TableHeaderCell as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJUYWJsZUNlbGwiLCJUYWJsZUhlYWRlckNlbGwiLCJwcm9wcyIsInByb3BUeXBlcyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvVGFibGVIZWFkZXJDZWxsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJy4vVGFibGVDZWxsJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJsZUhlYWRlckNlbGwgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgVGFibGVDZWxsIGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICAgKi9cbiAgICAuLi5UYWJsZUNlbGwucHJvcFR5cGVzXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxUYWJsZUNlbGwgb3ZlcmZsb3c9XCJ2aXNpYmxlXCIgYm9yZGVyQm90dG9tPXtudWxsfSB7Li4udGhpcy5wcm9wc30gLz5cbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLGFBQXRCOztJQUVxQkMsZTs7Ozs7Ozs7Ozs7OztXQVFuQixrQkFBUztNQUNQLG9CQUFPLG9CQUFDLFNBQUQ7UUFBVyxRQUFRLEVBQUMsU0FBcEI7UUFBOEIsWUFBWSxFQUFFO01BQTVDLEdBQXNELEtBQUtDLEtBQTNELEVBQVA7SUFDRDs7OztFQVYwQ0gsYTs7QUFBeEJFLGU7O2dCQUFBQSxlLGlDQUtkRCxTQUFTLENBQUNHLFM7O1NBTElGLGUifQ==