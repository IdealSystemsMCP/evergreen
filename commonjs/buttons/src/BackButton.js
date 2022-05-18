"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("./Button"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var BackButton = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(BackButton, _PureComponent);

  var _super = _createSuper(BackButton);

  function BackButton() {
    (0, _classCallCheck2["default"])(this, BackButton);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(BackButton, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_Button["default"], (0, _extends2["default"])({
        iconBefore: "arrow-left"
      }, this.props));
    }
  }]);
  return BackButton;
}(_react.PureComponent);

exports["default"] = BackButton;
BackButton.displayName = "BackButton";
(0, _defineProperty2["default"])(BackButton, "propTypes", _objectSpread({}, _Button["default"].propTypes));
(0, _defineProperty2["default"])(BackButton, "defaultProps", _objectSpread(_objectSpread({}, _Button["default"].defaultProps), {}, {
  children: 'Back'
}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJCYWNrQnV0dG9uIiwicHJvcHMiLCJQdXJlQ29tcG9uZW50IiwiQnV0dG9uIiwicHJvcFR5cGVzIiwiZGVmYXVsdFByb3BzIiwiY2hpbGRyZW4iXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYnV0dG9ucy9zcmMvQmFja0J1dHRvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFja0J1dHRvbiBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBCdXR0b24gY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgICAqL1xuICAgIC4uLkJ1dHRvbi5wcm9wVHlwZXNcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIEJ1dHRvbiBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAgICovXG4gICAgLi4uQnV0dG9uLmRlZmF1bHRQcm9wcyxcblxuICAgIGNoaWxkcmVuOiAnQmFjaydcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPEJ1dHRvbiBpY29uQmVmb3JlPVwiYXJyb3ctbGVmdFwiIHsuLi50aGlzLnByb3BzfSAvPlxuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFU7Ozs7Ozs7Ozs7OztXQWlCbkIsa0JBQVM7TUFDUCxvQkFBTyxnQ0FBQyxrQkFBRDtRQUFRLFVBQVUsRUFBQztNQUFuQixHQUFvQyxLQUFLQyxLQUF6QyxFQUFQO0lBQ0Q7OztFQW5CcUNDLG9COzs7QUFBbkJGLFU7aUNBQUFBLFUsaUNBS2RHLGtCQUFBLENBQU9DLFM7aUNBTE9KLFUsa0RBWWRHLGtCQUFBLENBQU9FLFk7RUFFVkMsUUFBUSxFQUFFIn0=