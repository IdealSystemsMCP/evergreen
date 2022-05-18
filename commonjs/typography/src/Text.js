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

var _classnames = _interopRequireDefault(require("classnames"));

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = _interopRequireDefault(require("ui-box"));

var _theme = require("../../theme");

var _excluded = ["className", "css", "theme", "size", "color", "fontFamily", "marginTop"],
    _excluded2 = ["marginTop"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Text = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Text, _PureComponent);

  var _super = _createSuper(Text);

  function Text() {
    (0, _classCallCheck2["default"])(this, Text);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Text, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          css = _this$props.css,
          theme = _this$props.theme,
          size = _this$props.size,
          color = _this$props.color,
          fontFamily = _this$props.fontFamily,
          marginTop = _this$props.marginTop,
          props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);

      var _theme$getTextStyle = theme.getTextStyle(size),
          defaultMarginTop = _theme$getTextStyle.marginTop,
          textStyle = (0, _objectWithoutProperties2["default"])(_theme$getTextStyle, _excluded2);

      var finalMarginTop = marginTop === 'default' ? defaultMarginTop : marginTop;
      return /*#__PURE__*/_react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
        is: "span",
        color: theme.getTextColor(color),
        fontFamily: theme.getFontFamily(fontFamily),
        marginTop: finalMarginTop
      }, textStyle, {
        className: (0, _classnames["default"])(className, css ? (0, _glamor.css)(css).toString() : undefined)
      }, props));
    }
  }]);
  return Text;
}(_react.PureComponent);

Text.displayName = "Text";
(0, _defineProperty2["default"])(Text, "propTypes", _objectSpread(_objectSpread({}, _uiBox["default"].propTypes), {}, {
  /**
   * Size of the text style.
   * Can be: 300, 400, 500, 600.
   */
  size: _propTypes["default"].oneOf([300, 400, 500, 600]).isRequired,

  /**
   * Font family.
   * Can be: `ui`, `display` or `mono` or a custom font family.
   */
  fontFamily: _propTypes["default"].string.isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes["default"].object.isRequired
}));
(0, _defineProperty2["default"])(Text, "defaultProps", {
  size: 400,
  color: 'default',
  fontFamily: 'ui'
});

var _default = (0, _theme.withTheme)(Text);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJUZXh0IiwicHJvcHMiLCJjbGFzc05hbWUiLCJjc3MiLCJ0aGVtZSIsInNpemUiLCJjb2xvciIsImZvbnRGYW1pbHkiLCJtYXJnaW5Ub3AiLCJnZXRUZXh0U3R5bGUiLCJkZWZhdWx0TWFyZ2luVG9wIiwidGV4dFN0eWxlIiwiZmluYWxNYXJnaW5Ub3AiLCJnZXRUZXh0Q29sb3IiLCJnZXRGb250RmFtaWx5IiwiY3giLCJnbGFtb3JDc3MiLCJ0b1N0cmluZyIsInVuZGVmaW5lZCIsIlB1cmVDb21wb25lbnQiLCJCb3giLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZiIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJvYmplY3QiLCJ3aXRoVGhlbWUiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdHlwb2dyYXBoeS9zcmMvVGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IGNzcyBhcyBnbGFtb3JDc3MgfSBmcm9tICdnbGFtb3InXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJveCBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcblxuY2xhc3MgVGV4dCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBCb3ggY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgICAqL1xuICAgIC4uLkJveC5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBTaXplIG9mIHRoZSB0ZXh0IHN0eWxlLlxuICAgICAqIENhbiBiZTogMzAwLCA0MDAsIDUwMCwgNjAwLlxuICAgICAqL1xuICAgIHNpemU6IFByb3BUeXBlcy5vbmVPZihbMzAwLCA0MDAsIDUwMCwgNjAwXSkuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIEZvbnQgZmFtaWx5LlxuICAgICAqIENhbiBiZTogYHVpYCwgYGRpc3BsYXlgIG9yIGBtb25vYCBvciBhIGN1c3RvbSBmb250IGZhbWlseS5cbiAgICAgKi9cbiAgICBmb250RmFtaWx5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBwcm92aWRlZCBieSBUaGVtZVByb3ZpZGVyLlxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc2l6ZTogNDAwLFxuICAgIGNvbG9yOiAnZGVmYXVsdCcsXG4gICAgZm9udEZhbWlseTogJ3VpJ1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGNzcyxcbiAgICAgIHRoZW1lLFxuICAgICAgc2l6ZSxcbiAgICAgIGNvbG9yLFxuICAgICAgZm9udEZhbWlseSxcbiAgICAgIG1hcmdpblRvcCxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHsgbWFyZ2luVG9wOiBkZWZhdWx0TWFyZ2luVG9wLCAuLi50ZXh0U3R5bGUgfSA9IHRoZW1lLmdldFRleHRTdHlsZShcbiAgICAgIHNpemVcbiAgICApXG5cbiAgICBjb25zdCBmaW5hbE1hcmdpblRvcCA9XG4gICAgICBtYXJnaW5Ub3AgPT09ICdkZWZhdWx0JyA/IGRlZmF1bHRNYXJnaW5Ub3AgOiBtYXJnaW5Ub3BcblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94XG4gICAgICAgIGlzPVwic3BhblwiXG4gICAgICAgIGNvbG9yPXt0aGVtZS5nZXRUZXh0Q29sb3IoY29sb3IpfVxuICAgICAgICBmb250RmFtaWx5PXt0aGVtZS5nZXRGb250RmFtaWx5KGZvbnRGYW1pbHkpfVxuICAgICAgICBtYXJnaW5Ub3A9e2ZpbmFsTWFyZ2luVG9wfVxuICAgICAgICB7Li4udGV4dFN0eWxlfVxuICAgICAgICBjbGFzc05hbWU9e2N4KGNsYXNzTmFtZSwgY3NzID8gZ2xhbW9yQ3NzKGNzcykudG9TdHJpbmcoKSA6IHVuZGVmaW5lZCl9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShUZXh0KVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsSTs7Ozs7Ozs7Ozs7O1dBK0JKLGtCQUFTO01BQ1Asa0JBU0ksS0FBS0MsS0FUVDtNQUFBLElBQ0VDLFNBREYsZUFDRUEsU0FERjtNQUFBLElBRUVDLEdBRkYsZUFFRUEsR0FGRjtNQUFBLElBR0VDLEtBSEYsZUFHRUEsS0FIRjtNQUFBLElBSUVDLElBSkYsZUFJRUEsSUFKRjtNQUFBLElBS0VDLEtBTEYsZUFLRUEsS0FMRjtNQUFBLElBTUVDLFVBTkYsZUFNRUEsVUFORjtNQUFBLElBT0VDLFNBUEYsZUFPRUEsU0FQRjtNQUFBLElBUUtQLEtBUkw7O01BV0EsMEJBQXNERyxLQUFLLENBQUNLLFlBQU4sQ0FDcERKLElBRG9ELENBQXREO01BQUEsSUFBbUJLLGdCQUFuQix1QkFBUUYsU0FBUjtNQUFBLElBQXdDRyxTQUF4Qzs7TUFJQSxJQUFNQyxjQUFjLEdBQ2xCSixTQUFTLEtBQUssU0FBZCxHQUEwQkUsZ0JBQTFCLEdBQTZDRixTQUQvQztNQUdBLG9CQUNFLGdDQUFDLGlCQUFEO1FBQ0UsRUFBRSxFQUFDLE1BREw7UUFFRSxLQUFLLEVBQUVKLEtBQUssQ0FBQ1MsWUFBTixDQUFtQlAsS0FBbkIsQ0FGVDtRQUdFLFVBQVUsRUFBRUYsS0FBSyxDQUFDVSxhQUFOLENBQW9CUCxVQUFwQixDQUhkO1FBSUUsU0FBUyxFQUFFSztNQUpiLEdBS01ELFNBTE47UUFNRSxTQUFTLEVBQUUsSUFBQUksc0JBQUEsRUFBR2IsU0FBSCxFQUFjQyxHQUFHLEdBQUcsSUFBQWEsV0FBQSxFQUFVYixHQUFWLEVBQWVjLFFBQWYsRUFBSCxHQUErQkMsU0FBaEQ7TUFOYixHQU9NakIsS0FQTixFQURGO0lBV0Q7OztFQTdEZ0JrQixvQjs7QUFBYm5CLEk7aUNBQUFBLEksK0NBS0NvQixpQkFBQSxDQUFJQyxTO0VBRVA7QUFDSjtBQUNBO0FBQ0E7RUFDSWhCLElBQUksRUFBRWlCLHFCQUFBLENBQVVDLEtBQVYsQ0FBZ0IsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsQ0FBaEIsRUFBc0NDLFU7O0VBRTVDO0FBQ0o7QUFDQTtBQUNBO0VBQ0lqQixVQUFVLEVBQUVlLHFCQUFBLENBQVVHLE1BQVYsQ0FBaUJELFU7O0VBRTdCO0FBQ0o7QUFDQTtFQUNJcEIsS0FBSyxFQUFFa0IscUJBQUEsQ0FBVUksTUFBVixDQUFpQkY7O2lDQXRCdEJ4QixJLGtCQXlCa0I7RUFDcEJLLElBQUksRUFBRSxHQURjO0VBRXBCQyxLQUFLLEVBQUUsU0FGYTtFQUdwQkMsVUFBVSxFQUFFO0FBSFEsQzs7ZUF1Q1QsSUFBQW9CLGdCQUFBLEVBQVUzQixJQUFWLEMifQ==