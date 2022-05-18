"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * This component is a utility component to manage state in stories and examples.
 */
var Manager = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Manager, _React$Component);

  var _super = _createSuper(Manager);

  function Manager(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Manager);
    _this = _super.call(this, props);
    _this.state = _objectSpread({}, props);
    return _this;
  }

  (0, _createClass2["default"])(Manager, [{
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
}(_react["default"].Component);

exports["default"] = Manager;
Manager.displayName = "Manager";
(0, _defineProperty2["default"])(Manager, "propTypes", {
  children: _propTypes["default"].func
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJNYW5hZ2VyIiwicHJvcHMiLCJzdGF0ZSIsImNoaWxkcmVuIiwic2V0U3RhdGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImZ1bmMiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbWFuYWdlci9zcmMvTWFuYWdlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgaXMgYSB1dGlsaXR5IGNvbXBvbmVudCB0byBtYW5hZ2Ugc3RhdGUgaW4gc3RvcmllcyBhbmQgZXhhbXBsZXMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hbmFnZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuZnVuY1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgLi4ucHJvcHNcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4oe1xuICAgICAgc2V0U3RhdGU6ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoLi4uYXJncylcbiAgICAgIH0sXG4gICAgICBzdGF0ZTogdGhpcy5zdGF0ZVxuICAgIH0pXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7SUFDcUJBLE87Ozs7O0VBS25CLGlCQUFZQyxLQUFaLEVBQW1CO0lBQUE7O0lBQUE7SUFDakIsMEJBQU1BLEtBQU47SUFDQSxNQUFLQyxLQUFMLHFCQUNLRCxLQURMO0lBRmlCO0VBS2xCOzs7O1dBRUQsa0JBQVM7TUFBQTs7TUFDUCxPQUFPLEtBQUtBLEtBQUwsQ0FBV0UsUUFBWCxDQUFvQjtRQUN6QkMsUUFBUSxFQUFFLG9CQUFhO1VBQ3JCLE1BQUksQ0FBQ0EsUUFBTCxhQUFJLFlBQUo7UUFDRCxDQUh3QjtRQUl6QkYsS0FBSyxFQUFFLEtBQUtBO01BSmEsQ0FBcEIsQ0FBUDtJQU1EOzs7RUFuQmtDRyxpQkFBQSxDQUFNQyxTOzs7QUFBdEJOLE87aUNBQUFBLE8sZUFDQTtFQUNqQkcsUUFBUSxFQUFFSSxxQkFBQSxDQUFVQztBQURILEMifQ==