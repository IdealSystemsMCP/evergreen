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

var _uiBox = _interopRequireDefault(require("ui-box"));

var _excluded = ["children", "size"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var OrderedList = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(OrderedList, _PureComponent);

  var _super = _createSuper(OrderedList);

  function OrderedList() {
    (0, _classCallCheck2["default"])(this, OrderedList);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(OrderedList, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          size = _this$props.size,
          props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);

      var finalChildren = _react["default"].Children.map(children, function (child) {
        if (! /*#__PURE__*/_react["default"].isValidElement(child)) {
          return child;
        }

        return /*#__PURE__*/_react["default"].cloneElement(child, {
          // Prefer more granularly defined icon if present
          size: child.props.size || size
        });
      });

      return /*#__PURE__*/_react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({}, OrderedList.styles, props), finalChildren);
    }
  }]);
  return OrderedList;
}(_react.PureComponent);

exports["default"] = OrderedList;
OrderedList.displayName = "OrderedList";
(0, _defineProperty2["default"])(OrderedList, "propTypes", _objectSpread(_objectSpread({}, _uiBox["default"].propTypes), {}, {
  /**
   * Size of the text used in a list item.
   * Can be: 300, 400, 500, 600.
   */
  size: _propTypes["default"].oneOf([300, 400, 500, 600]).isRequired
}));
(0, _defineProperty2["default"])(OrderedList, "defaultProps", {
  size: 400
});
(0, _defineProperty2["default"])(OrderedList, "styles", {
  is: 'ol',
  margin: 0,
  marginLeft: '1.1em',
  padding: 0,
  listStyle: 'decimal'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPcmRlcmVkTGlzdCIsInByb3BzIiwiY2hpbGRyZW4iLCJzaXplIiwiZmluYWxDaGlsZHJlbiIsIlJlYWN0IiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsImlzVmFsaWRFbGVtZW50IiwiY2xvbmVFbGVtZW50Iiwic3R5bGVzIiwiUHVyZUNvbXBvbmVudCIsIkJveCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9uZU9mIiwiaXNSZXF1aXJlZCIsImlzIiwibWFyZ2luIiwibWFyZ2luTGVmdCIsInBhZGRpbmciLCJsaXN0U3R5bGUiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdHlwb2dyYXBoeS9zcmMvT3JkZXJlZExpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3ggZnJvbSAndWktYm94J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlcmVkTGlzdCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC4uLkJveC5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBTaXplIG9mIHRoZSB0ZXh0IHVzZWQgaW4gYSBsaXN0IGl0ZW0uXG4gICAgICogQ2FuIGJlOiAzMDAsIDQwMCwgNTAwLCA2MDAuXG4gICAgICovXG4gICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFszMDAsIDQwMCwgNTAwLCA2MDBdKS5pc1JlcXVpcmVkXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHNpemU6IDQwMFxuICB9XG5cbiAgc3RhdGljIHN0eWxlcyA9IHtcbiAgICBpczogJ29sJyxcbiAgICBtYXJnaW46IDAsXG4gICAgbWFyZ2luTGVmdDogJzEuMWVtJyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIGxpc3RTdHlsZTogJ2RlY2ltYWwnXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgc2l6ZSwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IGZpbmFsQ2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGNoaWxkID0+IHtcbiAgICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHJldHVybiBjaGlsZFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgIC8vIFByZWZlciBtb3JlIGdyYW51bGFybHkgZGVmaW5lZCBpY29uIGlmIHByZXNlbnRcbiAgICAgICAgc2l6ZTogY2hpbGQucHJvcHMuc2l6ZSB8fCBzaXplXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveCB7Li4uT3JkZXJlZExpc3Quc3R5bGVzfSB7Li4ucHJvcHN9PlxuICAgICAgICB7ZmluYWxDaGlsZHJlbn1cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsVzs7Ozs7Ozs7Ozs7O1dBdUJuQixrQkFBUztNQUNQLGtCQUFxQyxLQUFLQyxLQUExQztNQUFBLElBQVFDLFFBQVIsZUFBUUEsUUFBUjtNQUFBLElBQWtCQyxJQUFsQixlQUFrQkEsSUFBbEI7TUFBQSxJQUEyQkYsS0FBM0I7O01BRUEsSUFBTUcsYUFBYSxHQUFHQyxpQkFBQSxDQUFNQyxRQUFOLENBQWVDLEdBQWYsQ0FBbUJMLFFBQW5CLEVBQTZCLFVBQUFNLEtBQUssRUFBSTtRQUMxRCxJQUFJLGVBQUNILGlCQUFBLENBQU1JLGNBQU4sQ0FBcUJELEtBQXJCLENBQUwsRUFBa0M7VUFDaEMsT0FBT0EsS0FBUDtRQUNEOztRQUVELG9CQUFPSCxpQkFBQSxDQUFNSyxZQUFOLENBQW1CRixLQUFuQixFQUEwQjtVQUMvQjtVQUNBTCxJQUFJLEVBQUVLLEtBQUssQ0FBQ1AsS0FBTixDQUFZRSxJQUFaLElBQW9CQTtRQUZLLENBQTFCLENBQVA7TUFJRCxDQVRxQixDQUF0Qjs7TUFXQSxvQkFDRSxnQ0FBQyxpQkFBRCxnQ0FBU0gsV0FBVyxDQUFDVyxNQUFyQixFQUFpQ1YsS0FBakMsR0FDR0csYUFESCxDQURGO0lBS0Q7OztFQTFDc0NRLG9COzs7QUFBcEJaLFc7aUNBQUFBLFcsK0NBRWRhLGlCQUFBLENBQUlDLFM7RUFFUDtBQUNKO0FBQ0E7QUFDQTtFQUNJWCxJQUFJLEVBQUVZLHFCQUFBLENBQVVDLEtBQVYsQ0FBZ0IsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsQ0FBaEIsRUFBc0NDOztpQ0FSM0JqQixXLGtCQVdHO0VBQ3BCRyxJQUFJLEVBQUU7QUFEYyxDO2lDQVhISCxXLFlBZUg7RUFDZGtCLEVBQUUsRUFBRSxJQURVO0VBRWRDLE1BQU0sRUFBRSxDQUZNO0VBR2RDLFVBQVUsRUFBRSxPQUhFO0VBSWRDLE9BQU8sRUFBRSxDQUpLO0VBS2RDLFNBQVMsRUFBRTtBQUxHLEMifQ==