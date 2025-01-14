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

var _react = _interopRequireWildcard(require("react"));

var _uiBox = _interopRequireDefault(require("ui-box"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Small can only be used inside of Text or Paragraph.
 */
var Small = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Small, _PureComponent);

  var _super = _createSuper(Small);

  function Small() {
    (0, _classCallCheck2["default"])(this, Small);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Small, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
        is: "small",
        fontSize: "85%"
      }, this.props));
    }
  }]);
  return Small;
}(_react.PureComponent);

exports["default"] = Small;
Small.displayName = "Small";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTbWFsbCIsInByb3BzIiwiUHVyZUNvbXBvbmVudCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9TbWFsbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJveCBmcm9tICd1aS1ib3gnXG5cbi8qKlxuICogU21hbGwgY2FuIG9ubHkgYmUgdXNlZCBpbnNpZGUgb2YgVGV4dCBvciBQYXJhZ3JhcGguXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNtYWxsIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPEJveCBpcz1cInNtYWxsXCIgZm9udFNpemU9XCI4NSVcIiB7Li4udGhpcy5wcm9wc30gLz5cbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7V0FDbkIsa0JBQVM7TUFDUCxvQkFBTyxnQ0FBQyxpQkFBRDtRQUFLLEVBQUUsRUFBQyxPQUFSO1FBQWdCLFFBQVEsRUFBQztNQUF6QixHQUFtQyxLQUFLQyxLQUF4QyxFQUFQO0lBQ0Q7OztFQUhnQ0Msb0I7OztBQUFkRixLIn0=