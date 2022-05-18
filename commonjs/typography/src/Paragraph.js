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

var _excluded = ["theme", "size", "color", "fontFamily", "marginTop"],
    _excluded2 = ["marginTop"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Paragraph = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Paragraph, _PureComponent);

  var _super = _createSuper(Paragraph);

  function Paragraph() {
    (0, _classCallCheck2["default"])(this, Paragraph);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Paragraph, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          size = _this$props.size,
          color = _this$props.color,
          fontFamily = _this$props.fontFamily,
          marginTop = _this$props.marginTop,
          props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);

      var _theme$getParagraphSt = theme.getParagraphStyle(size),
          defaultMarginTop = _theme$getParagraphSt.marginTop,
          textStyle = (0, _objectWithoutProperties2["default"])(_theme$getParagraphSt, _excluded2);

      var finalMarginTop = marginTop === 'default' ? defaultMarginTop : marginTop;
      return /*#__PURE__*/_react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
        is: "p",
        color: theme.getTextColor(color),
        fontFamily: theme.getFontFamily(fontFamily),
        marginTop: finalMarginTop || 0,
        marginBottom: 0
      }, textStyle, props));
    }
  }]);
  return Paragraph;
}(_react.PureComponent);

Paragraph.displayName = "Paragraph";
(0, _defineProperty2["default"])(Paragraph, "propTypes", _objectSpread(_objectSpread({}, _uiBox["default"].propTypes), {}, {
  /**
   * Size of the text style.
   * Can be: 300, 400, 500.
   */
  size: _propTypes["default"].oneOf([300, 400, 500]).isRequired,

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
(0, _defineProperty2["default"])(Paragraph, "defaultProps", {
  size: 400,
  color: 'default',
  fontFamily: 'ui'
});

var _default = (0, _theme.withTheme)(Paragraph);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJQYXJhZ3JhcGgiLCJwcm9wcyIsInRoZW1lIiwic2l6ZSIsImNvbG9yIiwiZm9udEZhbWlseSIsIm1hcmdpblRvcCIsImdldFBhcmFncmFwaFN0eWxlIiwiZGVmYXVsdE1hcmdpblRvcCIsInRleHRTdHlsZSIsImZpbmFsTWFyZ2luVG9wIiwiZ2V0VGV4dENvbG9yIiwiZ2V0Rm9udEZhbWlseSIsIlB1cmVDb21wb25lbnQiLCJCb3giLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZiIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJvYmplY3QiLCJ3aXRoVGhlbWUiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdHlwb2dyYXBoeS9zcmMvUGFyYWdyYXBoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuXG5jbGFzcyBQYXJhZ3JhcGggZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgQm94IGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICAgKi9cbiAgICAuLi5Cb3gucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogU2l6ZSBvZiB0aGUgdGV4dCBzdHlsZS5cbiAgICAgKiBDYW4gYmU6IDMwMCwgNDAwLCA1MDAuXG4gICAgICovXG4gICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFszMDAsIDQwMCwgNTAwXSkuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIEZvbnQgZmFtaWx5LlxuICAgICAqIENhbiBiZTogYHVpYCwgYGRpc3BsYXlgIG9yIGBtb25vYCBvciBhIGN1c3RvbSBmb250IGZhbWlseS5cbiAgICAgKi9cbiAgICBmb250RmFtaWx5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBwcm92aWRlZCBieSBUaGVtZVByb3ZpZGVyLlxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc2l6ZTogNDAwLFxuICAgIGNvbG9yOiAnZGVmYXVsdCcsXG4gICAgZm9udEZhbWlseTogJ3VpJ1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGhlbWUsIHNpemUsIGNvbG9yLCBmb250RmFtaWx5LCBtYXJnaW5Ub3AsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB7XG4gICAgICBtYXJnaW5Ub3A6IGRlZmF1bHRNYXJnaW5Ub3AsXG4gICAgICAuLi50ZXh0U3R5bGVcbiAgICB9ID0gdGhlbWUuZ2V0UGFyYWdyYXBoU3R5bGUoc2l6ZSlcblxuICAgIGNvbnN0IGZpbmFsTWFyZ2luVG9wID1cbiAgICAgIG1hcmdpblRvcCA9PT0gJ2RlZmF1bHQnID8gZGVmYXVsdE1hcmdpblRvcCA6IG1hcmdpblRvcFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3hcbiAgICAgICAgaXM9XCJwXCJcbiAgICAgICAgY29sb3I9e3RoZW1lLmdldFRleHRDb2xvcihjb2xvcil9XG4gICAgICAgIGZvbnRGYW1pbHk9e3RoZW1lLmdldEZvbnRGYW1pbHkoZm9udEZhbWlseSl9XG4gICAgICAgIG1hcmdpblRvcD17ZmluYWxNYXJnaW5Ub3AgfHwgMH1cbiAgICAgICAgbWFyZ2luQm90dG9tPXswfVxuICAgICAgICB7Li4udGV4dFN0eWxlfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoUGFyYWdyYXBoKVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsUzs7Ozs7Ozs7Ozs7O1dBK0JKLGtCQUFTO01BQ1Asa0JBQWdFLEtBQUtDLEtBQXJFO01BQUEsSUFBUUMsS0FBUixlQUFRQSxLQUFSO01BQUEsSUFBZUMsSUFBZixlQUFlQSxJQUFmO01BQUEsSUFBcUJDLEtBQXJCLGVBQXFCQSxLQUFyQjtNQUFBLElBQTRCQyxVQUE1QixlQUE0QkEsVUFBNUI7TUFBQSxJQUF3Q0MsU0FBeEMsZUFBd0NBLFNBQXhDO01BQUEsSUFBc0RMLEtBQXREOztNQUVBLDRCQUdJQyxLQUFLLENBQUNLLGlCQUFOLENBQXdCSixJQUF4QixDQUhKO01BQUEsSUFDYUssZ0JBRGIseUJBQ0VGLFNBREY7TUFBQSxJQUVLRyxTQUZMOztNQUtBLElBQU1DLGNBQWMsR0FDbEJKLFNBQVMsS0FBSyxTQUFkLEdBQTBCRSxnQkFBMUIsR0FBNkNGLFNBRC9DO01BR0Esb0JBQ0UsZ0NBQUMsaUJBQUQ7UUFDRSxFQUFFLEVBQUMsR0FETDtRQUVFLEtBQUssRUFBRUosS0FBSyxDQUFDUyxZQUFOLENBQW1CUCxLQUFuQixDQUZUO1FBR0UsVUFBVSxFQUFFRixLQUFLLENBQUNVLGFBQU4sQ0FBb0JQLFVBQXBCLENBSGQ7UUFJRSxTQUFTLEVBQUVLLGNBQWMsSUFBSSxDQUovQjtRQUtFLFlBQVksRUFBRTtNQUxoQixHQU1NRCxTQU5OLEVBT01SLEtBUE4sRUFERjtJQVdEOzs7RUFyRHFCWSxvQjs7QUFBbEJiLFM7aUNBQUFBLFMsK0NBS0NjLGlCQUFBLENBQUlDLFM7RUFFUDtBQUNKO0FBQ0E7QUFDQTtFQUNJWixJQUFJLEVBQUVhLHFCQUFBLENBQVVDLEtBQVYsQ0FBZ0IsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0FBaEIsRUFBaUNDLFU7O0VBRXZDO0FBQ0o7QUFDQTtBQUNBO0VBQ0liLFVBQVUsRUFBRVcscUJBQUEsQ0FBVUcsTUFBVixDQUFpQkQsVTs7RUFFN0I7QUFDSjtBQUNBO0VBQ0loQixLQUFLLEVBQUVjLHFCQUFBLENBQVVJLE1BQVYsQ0FBaUJGOztpQ0F0QnRCbEIsUyxrQkF5QmtCO0VBQ3BCRyxJQUFJLEVBQUUsR0FEYztFQUVwQkMsS0FBSyxFQUFFLFNBRmE7RUFHcEJDLFVBQVUsRUFBRTtBQUhRLEM7O2VBK0JULElBQUFnQixnQkFBQSxFQUFVckIsU0FBVixDIn0=