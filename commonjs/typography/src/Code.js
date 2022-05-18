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

var _classnames = _interopRequireDefault(require("classnames"));

var _theme = require("../../theme");

var _Text = _interopRequireDefault(require("./Text"));

var _excluded = ["theme", "className", "appearance"],
    _excluded2 = ["className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Code = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Code, _PureComponent);

  var _super = _createSuper(Code);

  function Code() {
    (0, _classCallCheck2["default"])(this, Code);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Code, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          className = _this$props.className,
          appearance = _this$props.appearance,
          props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);

      var _theme$getCodeProps = theme.getCodeProps(appearance),
          _theme$getCodeProps$c = _theme$getCodeProps.className,
          themedClassName = _theme$getCodeProps$c === void 0 ? '' : _theme$getCodeProps$c,
          themeProps = (0, _objectWithoutProperties2["default"])(_theme$getCodeProps, _excluded2);

      return /*#__PURE__*/_react["default"].createElement(_Text["default"], (0, _extends2["default"])({
        is: "code",
        className: (0, _classnames["default"])(className, themedClassName),
        fontFamily: "mono"
      }, themeProps, props));
    }
  }]);
  return Code;
}(_react.PureComponent);

Code.displayName = "Code";
(0, _defineProperty2["default"])(Code, "propTypes", _objectSpread(_objectSpread({}, _Text["default"].propTypes), {}, {
  /**
   * The appearance of the code.
   */
  appearance: _propTypes["default"].oneOf(['default', 'minimal']).isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes["default"].object.isRequired,

  /**
   * Class name passed to the button.
   * Only use if you know what you are doing.
   */
  className: _propTypes["default"].string
}));
(0, _defineProperty2["default"])(Code, "defaultProps", {
  appearance: 'default'
});

var _default = (0, _theme.withTheme)(Code);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDb2RlIiwicHJvcHMiLCJ0aGVtZSIsImNsYXNzTmFtZSIsImFwcGVhcmFuY2UiLCJnZXRDb2RlUHJvcHMiLCJ0aGVtZWRDbGFzc05hbWUiLCJ0aGVtZVByb3BzIiwiY3giLCJQdXJlQ29tcG9uZW50IiwiVGV4dCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9uZU9mIiwiaXNSZXF1aXJlZCIsIm9iamVjdCIsInN0cmluZyIsIndpdGhUaGVtZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9Db2RlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0J1xuXG5jbGFzcyBDb2RlIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLi4uVGV4dC5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYXBwZWFyYW5jZSBvZiB0aGUgY29kZS5cbiAgICAgKi9cbiAgICBhcHBlYXJhbmNlOiBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ21pbmltYWwnXSkuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIHByb3ZpZGVkIGJ5IFRoZW1lUHJvdmlkZXIuXG4gICAgICovXG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIENsYXNzIG5hbWUgcGFzc2VkIHRvIHRoZSBidXR0b24uXG4gICAgICogT25seSB1c2UgaWYgeW91IGtub3cgd2hhdCB5b3UgYXJlIGRvaW5nLlxuICAgICAqL1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBhcHBlYXJhbmNlOiAnZGVmYXVsdCdcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRoZW1lLCBjbGFzc05hbWUsIGFwcGVhcmFuY2UsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWU6IHRoZW1lZENsYXNzTmFtZSA9ICcnLFxuICAgICAgLi4udGhlbWVQcm9wc1xuICAgIH0gPSB0aGVtZS5nZXRDb2RlUHJvcHMoYXBwZWFyYW5jZSlcblxuICAgIHJldHVybiAoXG4gICAgICA8VGV4dFxuICAgICAgICBpcz1cImNvZGVcIlxuICAgICAgICBjbGFzc05hbWU9e2N4KGNsYXNzTmFtZSwgdGhlbWVkQ2xhc3NOYW1lKX1cbiAgICAgICAgZm9udEZhbWlseT1cIm1vbm9cIlxuICAgICAgICB7Li4udGhlbWVQcm9wc31cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKENvZGUpXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxJOzs7Ozs7Ozs7Ozs7V0F5Qkosa0JBQVM7TUFDUCxrQkFBbUQsS0FBS0MsS0FBeEQ7TUFBQSxJQUFRQyxLQUFSLGVBQVFBLEtBQVI7TUFBQSxJQUFlQyxTQUFmLGVBQWVBLFNBQWY7TUFBQSxJQUEwQkMsVUFBMUIsZUFBMEJBLFVBQTFCO01BQUEsSUFBeUNILEtBQXpDOztNQUVBLDBCQUdJQyxLQUFLLENBQUNHLFlBQU4sQ0FBbUJELFVBQW5CLENBSEo7TUFBQSxnREFDRUQsU0FERjtNQUFBLElBQ2FHLGVBRGIsc0NBQytCLEVBRC9CO01BQUEsSUFFS0MsVUFGTDs7TUFLQSxvQkFDRSxnQ0FBQyxnQkFBRDtRQUNFLEVBQUUsRUFBQyxNQURMO1FBRUUsU0FBUyxFQUFFLElBQUFDLHNCQUFBLEVBQUdMLFNBQUgsRUFBY0csZUFBZCxDQUZiO1FBR0UsVUFBVSxFQUFDO01BSGIsR0FJTUMsVUFKTixFQUtNTixLQUxOLEVBREY7SUFTRDs7O0VBMUNnQlEsb0I7O0FBQWJULEk7aUNBQUFBLEksK0NBRUNVLGdCQUFBLENBQUtDLFM7RUFFUjtBQUNKO0FBQ0E7RUFDSVAsVUFBVSxFQUFFUSxxQkFBQSxDQUFVQyxLQUFWLENBQWdCLENBQUMsU0FBRCxFQUFZLFNBQVosQ0FBaEIsRUFBd0NDLFU7O0VBRXBEO0FBQ0o7QUFDQTtFQUNJWixLQUFLLEVBQUVVLHFCQUFBLENBQVVHLE1BQVYsQ0FBaUJELFU7O0VBRXhCO0FBQ0o7QUFDQTtBQUNBO0VBQ0lYLFNBQVMsRUFBRVMscUJBQUEsQ0FBVUk7O2lDQWxCbkJoQixJLGtCQXFCa0I7RUFDcEJJLFVBQVUsRUFBRTtBQURRLEM7O2VBd0JULElBQUFhLGdCQUFBLEVBQVVqQixJQUFWLEMifQ==