"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _layers = require("../../layers");

var _excluded = ["children"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var PopoverStateless = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(PopoverStateless, _PureComponent);

  var _super = _createSuper(PopoverStateless);

  function PopoverStateless() {
    (0, _classCallCheck2["default"])(this, PopoverStateless);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(PopoverStateless, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      return /*#__PURE__*/_react["default"].createElement(_layers.Card, (0, _extends2["default"])({
        role: "dialog",
        elevation: 3,
        overflow: "hidden",
        minWidth: 200,
        backgroundColor: "white"
      }, props), children);
    }
  }]);
  return PopoverStateless;
}(_react.PureComponent);

exports["default"] = PopoverStateless;
PopoverStateless.displayName = "PopoverStateless";
(0, _defineProperty2["default"])(PopoverStateless, "propTypes", _objectSpread(_objectSpread({}, _layers.Card.propTypes), {}, {
  /**
   * The content of the Popover.
   */
  children: _propTypes["default"].node
}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJQb3BvdmVyU3RhdGVsZXNzIiwicHJvcHMiLCJjaGlsZHJlbiIsIlB1cmVDb21wb25lbnQiLCJDYXJkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3BvdmVyL3NyYy9Qb3BvdmVyU3RhdGVsZXNzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3BvdmVyU3RhdGVsZXNzIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIENhcmQgYXMgdGhlIGJhc2UuXG4gICAgICovXG4gICAgLi4uQ2FyZC5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29udGVudCBvZiB0aGUgUG9wb3Zlci5cbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGVcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDYXJkXG4gICAgICAgIHJvbGU9XCJkaWFsb2dcIlxuICAgICAgICBlbGV2YXRpb249ezN9XG4gICAgICAgIG92ZXJmbG93PVwiaGlkZGVuXCJcbiAgICAgICAgbWluV2lkdGg9ezIwMH1cbiAgICAgICAgYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIlxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvQ2FyZD5cbiAgICApXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGdCOzs7Ozs7Ozs7Ozs7V0FhbkIsa0JBQVM7TUFDUCxrQkFBK0IsS0FBS0MsS0FBcEM7TUFBQSxJQUFRQyxRQUFSLGVBQVFBLFFBQVI7TUFBQSxJQUFxQkQsS0FBckI7TUFFQSxvQkFDRSxnQ0FBQyxZQUFEO1FBQ0UsSUFBSSxFQUFDLFFBRFA7UUFFRSxTQUFTLEVBQUUsQ0FGYjtRQUdFLFFBQVEsRUFBQyxRQUhYO1FBSUUsUUFBUSxFQUFFLEdBSlo7UUFLRSxlQUFlLEVBQUM7TUFMbEIsR0FNTUEsS0FOTixHQVFHQyxRQVJILENBREY7SUFZRDs7O0VBNUIyQ0Msb0I7OztBQUF6QkgsZ0I7aUNBQUFBLGdCLCtDQUtkSSxZQUFBLENBQUtDLFM7RUFFUjtBQUNKO0FBQ0E7RUFDSUgsUUFBUSxFQUFFSSxxQkFBQSxDQUFVQyJ9