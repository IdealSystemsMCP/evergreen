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
import Badge from './Badge';

var Pill = /*#__PURE__*/function (_PureComponent) {
  _inherits(Pill, _PureComponent);

  var _super = _createSuper(Pill);

  function Pill() {
    _classCallCheck(this, Pill);

    return _super.apply(this, arguments);
  }

  _createClass(Pill, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(Badge, _extends({
        borderRadius: 999
      }, this.props));
    }
  }]);

  return Pill;
}(PureComponent);

Pill.displayName = "Pill";

_defineProperty(Pill, "propTypes", _objectSpread({}, Badge.propTypes));

export { Pill as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJCYWRnZSIsIlBpbGwiLCJwcm9wcyIsInByb3BUeXBlcyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iYWRnZXMvc3JjL1BpbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBCYWRnZSBmcm9tICcuL0JhZGdlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaWxsIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLi4uQmFkZ2UucHJvcFR5cGVzXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxCYWRnZSBib3JkZXJSYWRpdXM9ezk5OX0gey4uLnRoaXMucHJvcHN9IC8+XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsS0FBUCxNQUFrQixTQUFsQjs7SUFFcUJDLEk7Ozs7Ozs7Ozs7Ozs7V0FLbkIsa0JBQVM7TUFDUCxvQkFBTyxvQkFBQyxLQUFEO1FBQU8sWUFBWSxFQUFFO01BQXJCLEdBQThCLEtBQUtDLEtBQW5DLEVBQVA7SUFDRDs7OztFQVArQkgsYTs7QUFBYkUsSTs7Z0JBQUFBLEksaUNBRWRELEtBQUssQ0FBQ0csUzs7U0FGUUYsSSJ9