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

import React from 'react';
import PropTypes from 'prop-types';
/**
 * This component is a utility component to manage state in stories and examples.
 */

var Manager = /*#__PURE__*/function (_React$Component) {
  _inherits(Manager, _React$Component);

  var _super = _createSuper(Manager);

  function Manager(props) {
    var _this;

    _classCallCheck(this, Manager);

    _this = _super.call(this, props);
    _this.state = _objectSpread({}, props);
    return _this;
  }

  _createClass(Manager, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return this.props.children({
        setState: function setState() {
          _this2.setState.apply(_this2, arguments);
        },
        state: this.state
      });
    }
  }]);

  return Manager;
}(React.Component);

Manager.displayName = "Manager";

_defineProperty(Manager, "propTypes", {
  children: PropTypes.func
});

export { Manager as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIk1hbmFnZXIiLCJwcm9wcyIsInN0YXRlIiwiY2hpbGRyZW4iLCJzZXRTdGF0ZSIsIkNvbXBvbmVudCIsImZ1bmMiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbWFuYWdlci9zcmMvTWFuYWdlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgaXMgYSB1dGlsaXR5IGNvbXBvbmVudCB0byBtYW5hZ2Ugc3RhdGUgaW4gc3RvcmllcyBhbmQgZXhhbXBsZXMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hbmFnZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuZnVuY1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgLi4ucHJvcHNcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4oe1xuICAgICAgc2V0U3RhdGU6ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoLi4uYXJncylcbiAgICAgIH0sXG4gICAgICBzdGF0ZTogdGhpcy5zdGF0ZVxuICAgIH0pXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFFQTtBQUNBO0FBQ0E7O0lBQ3FCQyxPOzs7OztFQUtuQixpQkFBWUMsS0FBWixFQUFtQjtJQUFBOztJQUFBOztJQUNqQiwwQkFBTUEsS0FBTjtJQUNBLE1BQUtDLEtBQUwscUJBQ0tELEtBREw7SUFGaUI7RUFLbEI7Ozs7V0FFRCxrQkFBUztNQUFBOztNQUNQLE9BQU8sS0FBS0EsS0FBTCxDQUFXRSxRQUFYLENBQW9CO1FBQ3pCQyxRQUFRLEVBQUUsb0JBQWE7VUFDckIsTUFBSSxDQUFDQSxRQUFMLGFBQUksWUFBSjtRQUNELENBSHdCO1FBSXpCRixLQUFLLEVBQUUsS0FBS0E7TUFKYSxDQUFwQixDQUFQO0lBTUQ7Ozs7RUFuQmtDSixLQUFLLENBQUNPLFM7O0FBQXRCTCxPOztnQkFBQUEsTyxlQUNBO0VBQ2pCRyxRQUFRLEVBQUVKLFNBQVMsQ0FBQ087QUFESCxDOztTQURBTixPIn0=