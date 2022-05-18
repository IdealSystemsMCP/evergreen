"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _layers = require("../../layers");

var _TableBody = _interopRequireDefault(require("./TableBody"));

var _TableVirtualBody = _interopRequireDefault(require("./TableVirtualBody"));

var _TableCell = _interopRequireDefault(require("./TableCell"));

var _TableHead = _interopRequireDefault(require("./TableHead"));

var _TableHeaderCell = _interopRequireDefault(require("./TableHeaderCell"));

var _TableRow = _interopRequireDefault(require("./TableRow"));

var _TextTableCell = _interopRequireDefault(require("./TextTableCell"));

var _TextTableHeaderCell = _interopRequireDefault(require("./TextTableHeaderCell"));

var _SearchTableHeaderCell = _interopRequireDefault(require("./SearchTableHeaderCell"));

var _EditableCell = _interopRequireDefault(require("./EditableCell"));

var _SelectMenuCell = _interopRequireDefault(require("./SelectMenuCell"));

var _excluded = ["children"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Table = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Table, _PureComponent);

  var _super = _createSuper(Table);

  function Table() {
    (0, _classCallCheck2["default"])(this, Table);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Table, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      return /*#__PURE__*/_react["default"].createElement(_layers.Pane, props, children);
    }
  }]);
  return Table;
}(_react.PureComponent);

exports["default"] = Table;
Table.displayName = "Table";
(0, _defineProperty2["default"])(Table, "Body", _TableBody["default"]);
(0, _defineProperty2["default"])(Table, "VirtualBody", _TableVirtualBody["default"]);
(0, _defineProperty2["default"])(Table, "Head", _TableHead["default"]);
(0, _defineProperty2["default"])(Table, "HeaderCell", _TableHeaderCell["default"]);
(0, _defineProperty2["default"])(Table, "TextHeaderCell", _TextTableHeaderCell["default"]);
(0, _defineProperty2["default"])(Table, "SearchHeaderCell", _SearchTableHeaderCell["default"]);
(0, _defineProperty2["default"])(Table, "Row", _TableRow["default"]);
(0, _defineProperty2["default"])(Table, "Cell", _TableCell["default"]);
(0, _defineProperty2["default"])(Table, "TextCell", _TextTableCell["default"]);
(0, _defineProperty2["default"])(Table, "EditableCell", _EditableCell["default"]);
(0, _defineProperty2["default"])(Table, "SelectMenuCell", _SelectMenuCell["default"]);
(0, _defineProperty2["default"])(Table, "propTypes", _objectSpread({}, _layers.Pane.propTypes));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJUYWJsZSIsInByb3BzIiwiY2hpbGRyZW4iLCJQdXJlQ29tcG9uZW50IiwiVGFibGVCb2R5IiwiVGFibGVWaXJ0dWFsQm9keSIsIlRhYmxlSGVhZCIsIlRhYmxlSGVhZGVyQ2VsbCIsIlRleHRUYWJsZUhlYWRlckNlbGwiLCJTZWFyY2hUYWJsZUhlYWRlckNlbGwiLCJUYWJsZVJvdyIsIlRhYmxlQ2VsbCIsIlRleHRUYWJsZUNlbGwiLCJFZGl0YWJsZUNlbGwiLCJTZWxlY3RNZW51Q2VsbCIsIlBhbmUiLCJwcm9wVHlwZXMiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdGFibGUvc3JjL1RhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuaW1wb3J0IFRhYmxlQm9keSBmcm9tICcuL1RhYmxlQm9keSdcbmltcG9ydCBUYWJsZVZpcnR1YWxCb2R5IGZyb20gJy4vVGFibGVWaXJ0dWFsQm9keSdcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnLi9UYWJsZUNlbGwnXG5pbXBvcnQgVGFibGVIZWFkIGZyb20gJy4vVGFibGVIZWFkJ1xuaW1wb3J0IFRhYmxlSGVhZGVyQ2VsbCBmcm9tICcuL1RhYmxlSGVhZGVyQ2VsbCdcbmltcG9ydCBUYWJsZVJvdyBmcm9tICcuL1RhYmxlUm93J1xuaW1wb3J0IFRleHRUYWJsZUNlbGwgZnJvbSAnLi9UZXh0VGFibGVDZWxsJ1xuaW1wb3J0IFRleHRUYWJsZUhlYWRlckNlbGwgZnJvbSAnLi9UZXh0VGFibGVIZWFkZXJDZWxsJ1xuaW1wb3J0IFNlYXJjaFRhYmxlSGVhZGVyQ2VsbCBmcm9tICcuL1NlYXJjaFRhYmxlSGVhZGVyQ2VsbCdcbmltcG9ydCBFZGl0YWJsZUNlbGwgZnJvbSAnLi9FZGl0YWJsZUNlbGwnXG5pbXBvcnQgU2VsZWN0TWVudUNlbGwgZnJvbSAnLi9TZWxlY3RNZW51Q2VsbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIEJvZHkgPSBUYWJsZUJvZHlcblxuICBzdGF0aWMgVmlydHVhbEJvZHkgPSBUYWJsZVZpcnR1YWxCb2R5XG5cbiAgc3RhdGljIEhlYWQgPSBUYWJsZUhlYWRcblxuICBzdGF0aWMgSGVhZGVyQ2VsbCA9IFRhYmxlSGVhZGVyQ2VsbFxuXG4gIHN0YXRpYyBUZXh0SGVhZGVyQ2VsbCA9IFRleHRUYWJsZUhlYWRlckNlbGxcblxuICBzdGF0aWMgU2VhcmNoSGVhZGVyQ2VsbCA9IFNlYXJjaFRhYmxlSGVhZGVyQ2VsbFxuXG4gIHN0YXRpYyBSb3cgPSBUYWJsZVJvd1xuXG4gIHN0YXRpYyBDZWxsID0gVGFibGVDZWxsXG5cbiAgc3RhdGljIFRleHRDZWxsID0gVGV4dFRhYmxlQ2VsbFxuXG4gIHN0YXRpYyBFZGl0YWJsZUNlbGwgPSBFZGl0YWJsZUNlbGxcblxuICBzdGF0aWMgU2VsZWN0TWVudUNlbGwgPSBTZWxlY3RNZW51Q2VsbFxuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIFBhbmUgY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgICAqL1xuICAgIC4uLlBhbmUucHJvcFR5cGVzXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gPFBhbmUgey4uLnByb3BzfT57Y2hpbGRyZW59PC9QYW5lPlxuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7O1dBOEJuQixrQkFBUztNQUNQLGtCQUErQixLQUFLQyxLQUFwQztNQUFBLElBQVFDLFFBQVIsZUFBUUEsUUFBUjtNQUFBLElBQXFCRCxLQUFyQjtNQUNBLG9CQUFPLGdDQUFDLFlBQUQsRUFBVUEsS0FBVixFQUFrQkMsUUFBbEIsQ0FBUDtJQUNEOzs7RUFqQ2dDQyxvQjs7O0FBQWRILEs7aUNBQUFBLEssVUFDTEkscUI7aUNBREtKLEssaUJBR0VLLDRCO2lDQUhGTCxLLFVBS0xNLHFCO2lDQUxLTixLLGdCQU9DTywyQjtpQ0FQRFAsSyxvQkFTS1EsK0I7aUNBVExSLEssc0JBV09TLGlDO2lDQVhQVCxLLFNBYU5VLG9CO2lDQWJNVixLLFVBZUxXLHFCO2lDQWZLWCxLLGNBaUJEWSx5QjtpQ0FqQkNaLEssa0JBbUJHYSx3QjtpQ0FuQkhiLEssb0JBcUJLYywwQjtpQ0FyQkxkLEssaUNBMkJkZSxZQUFBLENBQUtDLFMifQ==