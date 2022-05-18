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

var _theme = require("../../theme");

var _excluded = ["theme", "marginTop", "size"],
    _excluded2 = ["marginTop"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Heading = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Heading, _PureComponent);

  var _super = _createSuper(Heading);

  function Heading() {
    (0, _classCallCheck2["default"])(this, Heading);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Heading, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          marginTop = _this$props.marginTop,
          size = _this$props.size,
          props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);

      var _theme$getHeadingStyl = theme.getHeadingStyle(size),
          defaultMarginTop = _theme$getHeadingStyl.marginTop,
          headingStyle = (0, _objectWithoutProperties2["default"])(_theme$getHeadingStyl, _excluded2);

      var finalMarginTop = marginTop;

      if (marginTop === 'default') {
        finalMarginTop = defaultMarginTop;
      }

      return /*#__PURE__*/_react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
        is: "h2",
        marginTop: finalMarginTop || 0,
        marginBottom: 0
      }, headingStyle, props));
    }
  }]);
  return Heading;
}(_react.PureComponent);

Heading.displayName = "Heading";
(0, _defineProperty2["default"])(Heading, "propTypes", _objectSpread(_objectSpread({}, _uiBox["default"].propTypes), {}, {
  /**
   * The size of the heading.
   */
  size: _propTypes["default"].oneOf([100, 200, 300, 400, 500, 600, 700, 800, 900]).isRequired,

  /**
   * Pass `default` to use the default margin top for that size.
   */
  marginTop: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].number, _propTypes["default"].string]),

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes["default"].object.isRequired
}));
(0, _defineProperty2["default"])(Heading, "defaultProps", {
  size: 500
});

var _default = (0, _theme.withTheme)(Heading);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJIZWFkaW5nIiwicHJvcHMiLCJ0aGVtZSIsIm1hcmdpblRvcCIsInNpemUiLCJnZXRIZWFkaW5nU3R5bGUiLCJkZWZhdWx0TWFyZ2luVG9wIiwiaGVhZGluZ1N0eWxlIiwiZmluYWxNYXJnaW5Ub3AiLCJQdXJlQ29tcG9uZW50IiwiQm94IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib25lT2YiLCJpc1JlcXVpcmVkIiwib25lT2ZUeXBlIiwiYm9vbCIsIm51bWJlciIsInN0cmluZyIsIm9iamVjdCIsIndpdGhUaGVtZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9IZWFkaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuXG5jbGFzcyBIZWFkaW5nIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogSGVhZGluZyBjb21wb3NlcyBCb3ggYXMgdGhlIGJhc2UuXG4gICAgICovXG4gICAgLi4uQm94LnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBzaXplIG9mIHRoZSBoZWFkaW5nLlxuICAgICAqL1xuICAgIHNpemU6IFByb3BUeXBlcy5vbmVPZihbMTAwLCAyMDAsIDMwMCwgNDAwLCA1MDAsIDYwMCwgNzAwLCA4MDAsIDkwMF0pXG4gICAgICAuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFBhc3MgYGRlZmF1bHRgIHRvIHVzZSB0aGUgZGVmYXVsdCBtYXJnaW4gdG9wIGZvciB0aGF0IHNpemUuXG4gICAgICovXG4gICAgbWFyZ2luVG9wOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5ib29sLFxuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5zdHJpbmdcbiAgICBdKSxcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIHByb3ZpZGVkIGJ5IFRoZW1lUHJvdmlkZXIuXG4gICAgICovXG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBzaXplOiA1MDBcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRoZW1lLCBtYXJnaW5Ub3AsIHNpemUsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qge1xuICAgICAgbWFyZ2luVG9wOiBkZWZhdWx0TWFyZ2luVG9wLFxuICAgICAgLi4uaGVhZGluZ1N0eWxlXG4gICAgfSA9IHRoZW1lLmdldEhlYWRpbmdTdHlsZShzaXplKVxuXG4gICAgbGV0IGZpbmFsTWFyZ2luVG9wID0gbWFyZ2luVG9wXG4gICAgaWYgKG1hcmdpblRvcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICBmaW5hbE1hcmdpblRvcCA9IGRlZmF1bHRNYXJnaW5Ub3BcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICBpcz1cImgyXCJcbiAgICAgICAgbWFyZ2luVG9wPXtmaW5hbE1hcmdpblRvcCB8fCAwfVxuICAgICAgICBtYXJnaW5Cb3R0b209ezB9XG4gICAgICAgIHsuLi5oZWFkaW5nU3R5bGV9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShIZWFkaW5nKVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsTzs7Ozs7Ozs7Ozs7O1dBZ0NKLGtCQUFTO01BQ1Asa0JBQTZDLEtBQUtDLEtBQWxEO01BQUEsSUFBUUMsS0FBUixlQUFRQSxLQUFSO01BQUEsSUFBZUMsU0FBZixlQUFlQSxTQUFmO01BQUEsSUFBMEJDLElBQTFCLGVBQTBCQSxJQUExQjtNQUFBLElBQW1DSCxLQUFuQzs7TUFDQSw0QkFHSUMsS0FBSyxDQUFDRyxlQUFOLENBQXNCRCxJQUF0QixDQUhKO01BQUEsSUFDYUUsZ0JBRGIseUJBQ0VILFNBREY7TUFBQSxJQUVLSSxZQUZMOztNQUtBLElBQUlDLGNBQWMsR0FBR0wsU0FBckI7O01BQ0EsSUFBSUEsU0FBUyxLQUFLLFNBQWxCLEVBQTZCO1FBQzNCSyxjQUFjLEdBQUdGLGdCQUFqQjtNQUNEOztNQUVELG9CQUNFLGdDQUFDLGlCQUFEO1FBQ0UsRUFBRSxFQUFDLElBREw7UUFFRSxTQUFTLEVBQUVFLGNBQWMsSUFBSSxDQUYvQjtRQUdFLFlBQVksRUFBRTtNQUhoQixHQUlNRCxZQUpOLEVBS01OLEtBTE4sRUFERjtJQVNEOzs7RUFyRG1CUSxvQjs7QUFBaEJULE87aUNBQUFBLE8sK0NBS0NVLGlCQUFBLENBQUlDLFM7RUFFUDtBQUNKO0FBQ0E7RUFDSVAsSUFBSSxFQUFFUSxxQkFBQSxDQUFVQyxLQUFWLENBQWdCLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLEVBQTBCLEdBQTFCLEVBQStCLEdBQS9CLEVBQW9DLEdBQXBDLEVBQXlDLEdBQXpDLENBQWhCLEVBQ0hDLFU7O0VBRUg7QUFDSjtBQUNBO0VBQ0lYLFNBQVMsRUFBRVMscUJBQUEsQ0FBVUcsU0FBVixDQUFvQixDQUM3QkgscUJBQUEsQ0FBVUksSUFEbUIsRUFFN0JKLHFCQUFBLENBQVVLLE1BRm1CLEVBRzdCTCxxQkFBQSxDQUFVTSxNQUhtQixDQUFwQixDOztFQU1YO0FBQ0o7QUFDQTtFQUNJaEIsS0FBSyxFQUFFVSxxQkFBQSxDQUFVTyxNQUFWLENBQWlCTDs7aUNBekJ0QmQsTyxrQkE0QmtCO0VBQ3BCSSxJQUFJLEVBQUU7QUFEYyxDOztlQTRCVCxJQUFBZ0IsZ0JBQUEsRUFBVXBCLE9BQVYsQyJ9