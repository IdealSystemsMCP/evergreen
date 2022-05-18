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

var _typography = require("../../typography");

var _TableHeaderCell = _interopRequireDefault(require("./TableHeaderCell"));

var _excluded = ["children", "textProps", "isSortable", "sortOrder"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var TextTableHeaderCell = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(TextTableHeaderCell, _PureComponent);

  var _super = _createSuper(TextTableHeaderCell);

  function TextTableHeaderCell() {
    (0, _classCallCheck2["default"])(this, TextTableHeaderCell);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(TextTableHeaderCell, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          textProps = _this$props.textProps,
          isSortable = _this$props.isSortable,
          sortOrder = _this$props.sortOrder,
          props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      return /*#__PURE__*/_react["default"].createElement(_TableHeaderCell["default"], props, /*#__PURE__*/_react["default"].createElement(_typography.Text, (0, _extends2["default"])({
        fontWeight: 500,
        size: 300,
        flex: "1"
      }, textProps), children, ' '));
    }
  }]);
  return TextTableHeaderCell;
}(_react.PureComponent);

exports["default"] = TextTableHeaderCell;
TextTableHeaderCell.displayName = "TextTableHeaderCell";
(0, _defineProperty2["default"])(TextTableHeaderCell, "propTypes", _objectSpread(_objectSpread({}, _TableHeaderCell["default"].propTypes), {}, {
  /**
   * Pass additional props to the Text component.
   */
  textProps: _propTypes["default"].objectOf(_propTypes["default"].string)
}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJUZXh0VGFibGVIZWFkZXJDZWxsIiwicHJvcHMiLCJjaGlsZHJlbiIsInRleHRQcm9wcyIsImlzU29ydGFibGUiLCJzb3J0T3JkZXIiLCJQdXJlQ29tcG9uZW50IiwiVGFibGVIZWFkZXJDZWxsIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0T2YiLCJzdHJpbmciXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdGFibGUvc3JjL1RleHRUYWJsZUhlYWRlckNlbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IFRhYmxlSGVhZGVyQ2VsbCBmcm9tICcuL1RhYmxlSGVhZGVyQ2VsbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dFRhYmxlSGVhZGVyQ2VsbCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBUYWJsZUhlYWRlckNlbGwgY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgICAqL1xuICAgIC4uLlRhYmxlSGVhZGVyQ2VsbC5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBQYXNzIGFkZGl0aW9uYWwgcHJvcHMgdG8gdGhlIFRleHQgY29tcG9uZW50LlxuICAgICAqL1xuICAgIHRleHRQcm9wczogUHJvcFR5cGVzLm9iamVjdE9mKFByb3BUeXBlcy5zdHJpbmcpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgdGV4dFByb3BzLCBpc1NvcnRhYmxlLCBzb3J0T3JkZXIsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxUYWJsZUhlYWRlckNlbGwgey4uLnByb3BzfT5cbiAgICAgICAgPFRleHQgZm9udFdlaWdodD17NTAwfSBzaXplPXszMDB9IGZsZXg9XCIxXCIgey4uLnRleHRQcm9wc30+XG4gICAgICAgICAge2NoaWxkcmVufXsnICd9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvVGFibGVIZWFkZXJDZWxsPlxuICAgIClcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsbUI7Ozs7Ozs7Ozs7OztXQWFuQixrQkFBUztNQUNQLGtCQUFpRSxLQUFLQyxLQUF0RTtNQUFBLElBQVFDLFFBQVIsZUFBUUEsUUFBUjtNQUFBLElBQWtCQyxTQUFsQixlQUFrQkEsU0FBbEI7TUFBQSxJQUE2QkMsVUFBN0IsZUFBNkJBLFVBQTdCO01BQUEsSUFBeUNDLFNBQXpDLGVBQXlDQSxTQUF6QztNQUFBLElBQXVESixLQUF2RDtNQUNBLG9CQUNFLGdDQUFDLDJCQUFELEVBQXFCQSxLQUFyQixlQUNFLGdDQUFDLGdCQUFEO1FBQU0sVUFBVSxFQUFFLEdBQWxCO1FBQXVCLElBQUksRUFBRSxHQUE3QjtRQUFrQyxJQUFJLEVBQUM7TUFBdkMsR0FBK0NFLFNBQS9DLEdBQ0dELFFBREgsRUFDYSxHQURiLENBREYsQ0FERjtJQU9EOzs7RUF0QjhDSSxvQjs7O0FBQTVCTixtQjtpQ0FBQUEsbUIsK0NBS2RPLDJCQUFBLENBQWdCQyxTO0VBRW5CO0FBQ0o7QUFDQTtFQUNJTCxTQUFTLEVBQUVNLHFCQUFBLENBQVVDLFFBQVYsQ0FBbUJELHFCQUFBLENBQVVFLE1BQTdCIn0=