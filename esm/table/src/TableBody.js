import _extends from "@babel/runtime/helpers/esm/extends";
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

var TableBody = /*#__PURE__*/function (_PureComponent) {
  _inherits(TableBody, _PureComponent);

  var _super = _createSuper(TableBody);

  function TableBody() {
    _classCallCheck(this, TableBody);

    return _super.apply(this, arguments);
  }

  _createClass(TableBody, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, _excluded);

      return /*#__PURE__*/React.createElement(Pane, _extends({
        "data-evergreen-table-body": true,
        flex: "1",
        overflowY: "auto"
      }, props), children);
    }
  }]);

  return TableBody;
}(PureComponent);

TableBody.displayName = "TableBody";

_defineProperty(TableBody, "propTypes", _objectSpread({}, Pane.propTypes));

export { TableBody as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQYW5lIiwiVGFibGVCb2R5IiwicHJvcHMiLCJjaGlsZHJlbiIsInByb3BUeXBlcyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvVGFibGVCb2R5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJsZUJvZHkgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgUGFuZSBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAgICovXG4gICAgLi4uUGFuZS5wcm9wVHlwZXNcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8UGFuZSBkYXRhLWV2ZXJncmVlbi10YWJsZS1ib2R5IGZsZXg9XCIxXCIgb3ZlcmZsb3dZPVwiYXV0b1wiIHsuLi5wcm9wc30+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvUGFuZT5cbiAgICApXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGNBQXJCOztJQUVxQkMsUzs7Ozs7Ozs7Ozs7OztXQVFuQixrQkFBUztNQUNQLGtCQUErQixLQUFLQyxLQUFwQztNQUFBLElBQVFDLFFBQVIsZUFBUUEsUUFBUjtNQUFBLElBQXFCRCxLQUFyQjs7TUFDQSxvQkFDRSxvQkFBQyxJQUFEO1FBQU0saUNBQU47UUFBZ0MsSUFBSSxFQUFDLEdBQXJDO1FBQXlDLFNBQVMsRUFBQztNQUFuRCxHQUE4REEsS0FBOUQsR0FDR0MsUUFESCxDQURGO0lBS0Q7Ozs7RUFmb0NKLGE7O0FBQWxCRSxTOztnQkFBQUEsUyxpQ0FLZEQsSUFBSSxDQUFDSSxTOztTQUxTSCxTIn0=