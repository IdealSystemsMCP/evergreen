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
import Button from './Button';

var BackButton = /*#__PURE__*/function (_PureComponent) {
  _inherits(BackButton, _PureComponent);

  var _super = _createSuper(BackButton);

  function BackButton() {
    _classCallCheck(this, BackButton);

    return _super.apply(this, arguments);
  }

  _createClass(BackButton, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(Button, _extends({
        iconBefore: "arrow-left"
      }, this.props));
    }
  }]);

  return BackButton;
}(PureComponent);

BackButton.displayName = "BackButton";

_defineProperty(BackButton, "propTypes", _objectSpread({}, Button.propTypes));

_defineProperty(BackButton, "defaultProps", _objectSpread(_objectSpread({}, Button.defaultProps), {}, {
  children: 'Back'
}));

export { BackButton as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJCdXR0b24iLCJCYWNrQnV0dG9uIiwicHJvcHMiLCJwcm9wVHlwZXMiLCJkZWZhdWx0UHJvcHMiLCJjaGlsZHJlbiJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9idXR0b25zL3NyYy9CYWNrQnV0dG9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWNrQnV0dG9uIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIEJ1dHRvbiBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAgICovXG4gICAgLi4uQnV0dG9uLnByb3BUeXBlc1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgQnV0dG9uIGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICAgKi9cbiAgICAuLi5CdXR0b24uZGVmYXVsdFByb3BzLFxuXG4gICAgY2hpbGRyZW46ICdCYWNrJ1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8QnV0dG9uIGljb25CZWZvcmU9XCJhcnJvdy1sZWZ0XCIgey4uLnRoaXMucHJvcHN9IC8+XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixVQUFuQjs7SUFFcUJDLFU7Ozs7Ozs7Ozs7Ozs7V0FpQm5CLGtCQUFTO01BQ1Asb0JBQU8sb0JBQUMsTUFBRDtRQUFRLFVBQVUsRUFBQztNQUFuQixHQUFvQyxLQUFLQyxLQUF6QyxFQUFQO0lBQ0Q7Ozs7RUFuQnFDSCxhOztBQUFuQkUsVTs7Z0JBQUFBLFUsaUNBS2RELE1BQU0sQ0FBQ0csUzs7Z0JBTE9GLFUsa0RBWWRELE1BQU0sQ0FBQ0ksWTtFQUVWQyxRQUFRLEVBQUU7OztTQWRPSixVIn0=