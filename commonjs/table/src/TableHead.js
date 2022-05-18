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

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _layers = require("../../layers");

var _ScrollbarSize = _interopRequireDefault(require("./ScrollbarSize"));

var _excluded = ["children", "height", "accountForScrollbar"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var TableHead = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(TableHead, _PureComponent);

  var _super = _createSuper(TableHead);

  function TableHead() {
    var _this;

    (0, _classCallCheck2["default"])(this, TableHead);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      scrollbarWidth: 0
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleScrollbarSize", function (width) {
      _this.setState({
        scrollbarWidth: width
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(TableHead, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          height = _this$props.height,
          accountForScrollbar = _this$props.accountForScrollbar,
          props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      var scrollbarWidth = this.state.scrollbarWidth;
      return /*#__PURE__*/_react["default"].createElement(_layers.Pane, (0, _extends2["default"])({
        display: "flex",
        flexShrink: 0,
        paddingRight: scrollbarWidth,
        borderBottom: "default",
        background: "tint2",
        height: height
      }, props), children, ' ', accountForScrollbar && /*#__PURE__*/_react["default"].createElement(_ScrollbarSize["default"], {
        handleScrollbarSize: this.handleScrollbarSize
      }));
    }
  }]);
  return TableHead;
}(_react.PureComponent);

exports["default"] = TableHead;
TableHead.displayName = "TableHead";
(0, _defineProperty2["default"])(TableHead, "propTypes", _objectSpread(_objectSpread({}, _layers.Pane.propTypes), {}, {
  /**
   * The height of the table head.
   */
  height: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]).isRequired,

  /**
   * This should always be true if you are using TableHead together with a TableBody.
   * Because TableBody has `overflowY: scroll` by default.
   */
  accountForScrollbar: _propTypes["default"].bool
}));
(0, _defineProperty2["default"])(TableHead, "defaultProps", {
  height: 32,
  accountForScrollbar: true
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJUYWJsZUhlYWQiLCJzY3JvbGxiYXJXaWR0aCIsIndpZHRoIiwic2V0U3RhdGUiLCJwcm9wcyIsImNoaWxkcmVuIiwiaGVpZ2h0IiwiYWNjb3VudEZvclNjcm9sbGJhciIsInN0YXRlIiwiaGFuZGxlU2Nyb2xsYmFyU2l6ZSIsIlB1cmVDb21wb25lbnQiLCJQYW5lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib25lT2ZUeXBlIiwibnVtYmVyIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImJvb2wiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdGFibGUvc3JjL1RhYmxlSGVhZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcbmltcG9ydCBTY3JvbGxiYXJTaXplIGZyb20gJy4vU2Nyb2xsYmFyU2l6ZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGVIZWFkIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIFBhbmUgY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgICAqL1xuICAgIC4uLlBhbmUucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGhlaWdodCBvZiB0aGUgdGFibGUgaGVhZC5cbiAgICAgKi9cbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhpcyBzaG91bGQgYWx3YXlzIGJlIHRydWUgaWYgeW91IGFyZSB1c2luZyBUYWJsZUhlYWQgdG9nZXRoZXIgd2l0aCBhIFRhYmxlQm9keS5cbiAgICAgKiBCZWNhdXNlIFRhYmxlQm9keSBoYXMgYG92ZXJmbG93WTogc2Nyb2xsYCBieSBkZWZhdWx0LlxuICAgICAqL1xuICAgIGFjY291bnRGb3JTY3JvbGxiYXI6IFByb3BUeXBlcy5ib29sXG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICBzY3JvbGxiYXJXaWR0aDogMFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBoZWlnaHQ6IDMyLFxuICAgIGFjY291bnRGb3JTY3JvbGxiYXI6IHRydWVcbiAgfVxuXG4gIGhhbmRsZVNjcm9sbGJhclNpemUgPSB3aWR0aCA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzY3JvbGxiYXJXaWR0aDogd2lkdGhcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGhlaWdodCwgYWNjb3VudEZvclNjcm9sbGJhciwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHNjcm9sbGJhcldpZHRoIH0gPSB0aGlzLnN0YXRlXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhbmVcbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICBmbGV4U2hyaW5rPXswfVxuICAgICAgICBwYWRkaW5nUmlnaHQ9e3Njcm9sbGJhcldpZHRofVxuICAgICAgICBib3JkZXJCb3R0b209XCJkZWZhdWx0XCJcbiAgICAgICAgYmFja2dyb3VuZD1cInRpbnQyXCJcbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufXsnICd9XG4gICAgICAgIHthY2NvdW50Rm9yU2Nyb2xsYmFyICYmIChcbiAgICAgICAgICA8U2Nyb2xsYmFyU2l6ZSBoYW5kbGVTY3JvbGxiYXJTaXplPXt0aGlzLmhhbmRsZVNjcm9sbGJhclNpemV9IC8+XG4gICAgICAgICl9XG4gICAgICA8L1BhbmU+XG4gICAgKVxuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7Ozs7Ozs4RkFtQlg7TUFDTkMsY0FBYyxFQUFFO0lBRFYsQzs0R0FTYyxVQUFBQyxLQUFLLEVBQUk7TUFDN0IsTUFBS0MsUUFBTCxDQUFjO1FBQ1pGLGNBQWMsRUFBRUM7TUFESixDQUFkO0lBR0QsQzs7Ozs7O1dBRUQsa0JBQVM7TUFDUCxrQkFBNEQsS0FBS0UsS0FBakU7TUFBQSxJQUFRQyxRQUFSLGVBQVFBLFFBQVI7TUFBQSxJQUFrQkMsTUFBbEIsZUFBa0JBLE1BQWxCO01BQUEsSUFBMEJDLG1CQUExQixlQUEwQkEsbUJBQTFCO01BQUEsSUFBa0RILEtBQWxEO01BQ0EsSUFBUUgsY0FBUixHQUEyQixLQUFLTyxLQUFoQyxDQUFRUCxjQUFSO01BRUEsb0JBQ0UsZ0NBQUMsWUFBRDtRQUNFLE9BQU8sRUFBQyxNQURWO1FBRUUsVUFBVSxFQUFFLENBRmQ7UUFHRSxZQUFZLEVBQUVBLGNBSGhCO1FBSUUsWUFBWSxFQUFDLFNBSmY7UUFLRSxVQUFVLEVBQUMsT0FMYjtRQU1FLE1BQU0sRUFBRUs7TUFOVixHQU9NRixLQVBOLEdBU0dDLFFBVEgsRUFTYSxHQVRiLEVBVUdFLG1CQUFtQixpQkFDbEIsZ0NBQUMseUJBQUQ7UUFBZSxtQkFBbUIsRUFBRSxLQUFLRTtNQUF6QyxFQVhKLENBREY7SUFnQkQ7OztFQXREb0NDLG9COzs7QUFBbEJWLFM7aUNBQUFBLFMsK0NBS2RXLFlBQUEsQ0FBS0MsUztFQUVSO0FBQ0o7QUFDQTtFQUNJTixNQUFNLEVBQUVPLHFCQUFBLENBQVVDLFNBQVYsQ0FBb0IsQ0FBQ0QscUJBQUEsQ0FBVUUsTUFBWCxFQUFtQkYscUJBQUEsQ0FBVUcsTUFBN0IsQ0FBcEIsRUFBMERDLFU7O0VBRWxFO0FBQ0o7QUFDQTtBQUNBO0VBQ0lWLG1CQUFtQixFQUFFTSxxQkFBQSxDQUFVSzs7aUNBaEJkbEIsUyxrQkF1Qkc7RUFDcEJNLE1BQU0sRUFBRSxFQURZO0VBRXBCQyxtQkFBbUIsRUFBRTtBQUZELEMifQ==