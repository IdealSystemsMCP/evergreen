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

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = require("../../typography");

var _theme = require("../../theme");

var _excluded = ["theme", "className", "color", "isInteractive", "isSolid"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Badge = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Badge, _PureComponent);

  var _super = _createSuper(Badge);

  function Badge() {
    (0, _classCallCheck2["default"])(this, Badge);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Badge, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          className = _this$props.className,
          propsColor = _this$props.color,
          isInteractive = _this$props.isInteractive,
          isSolid = _this$props.isSolid,
          props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);

      var _theme$getBadgeProps = theme.getBadgeProps({
        color: propsColor,
        isSolid: isSolid
      }),
          color = _theme$getBadgeProps.color,
          backgroundColor = _theme$getBadgeProps.backgroundColor;

      var appearance = isInteractive ? 'interactive' : 'default';
      var classNames = (0, _classnames["default"])(className, theme.getBadgeClassName(appearance));
      return /*#__PURE__*/_react["default"].createElement(_typography.Strong, (0, _extends2["default"])({
        size: 300
      }, Badge.styles, {
        color: color,
        backgroundColor: backgroundColor
      }, props, {
        className: classNames
      }));
    }
  }]);
  return Badge;
}(_react.PureComponent);

Badge.displayName = "Badge";
(0, _defineProperty2["default"])(Badge, "propTypes", _objectSpread(_objectSpread({}, _typography.Strong.propTypes), {}, {
  /**
   * The color used for the badge.
   */
  color: _propTypes["default"].string.isRequired,

  /**
   * Whether or not to apply hover/focus/active styles
   */
  isInteractive: _propTypes["default"].bool,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes["default"].object.isRequired
}));
(0, _defineProperty2["default"])(Badge, "defaultProps", {
  color: 'neutral',
  isInteractive: false,
  isSolid: false
});
(0, _defineProperty2["default"])(Badge, "styles", {
  display: 'inline-block',
  boxSizing: 'border-box',
  height: 16,
  paddingTop: 0,
  paddingRight: 6,
  paddingBottom: 0,
  paddingLeft: 6,
  borderRadius: 2,
  textAlign: 'center',
  textDecoration: 'none',
  textTransform: 'uppercase'
});

var _default = (0, _theme.withTheme)(Badge);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJCYWRnZSIsInByb3BzIiwidGhlbWUiLCJjbGFzc05hbWUiLCJwcm9wc0NvbG9yIiwiY29sb3IiLCJpc0ludGVyYWN0aXZlIiwiaXNTb2xpZCIsImdldEJhZGdlUHJvcHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJhcHBlYXJhbmNlIiwiY2xhc3NOYW1lcyIsImN4IiwiZ2V0QmFkZ2VDbGFzc05hbWUiLCJzdHlsZXMiLCJQdXJlQ29tcG9uZW50IiwiU3Ryb25nIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImJvb2wiLCJvYmplY3QiLCJkaXNwbGF5IiwiYm94U2l6aW5nIiwiaGVpZ2h0IiwicGFkZGluZ1RvcCIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nTGVmdCIsImJvcmRlclJhZGl1cyIsInRleHRBbGlnbiIsInRleHREZWNvcmF0aW9uIiwidGV4dFRyYW5zZm9ybSIsIndpdGhUaGVtZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iYWRnZXMvc3JjL0JhZGdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFN0cm9uZyB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcblxuY2xhc3MgQmFkZ2UgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAuLi5TdHJvbmcucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbG9yIHVzZWQgZm9yIHRoZSBiYWRnZS5cbiAgICAgKi9cbiAgICBjb2xvcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBvciBub3QgdG8gYXBwbHkgaG92ZXIvZm9jdXMvYWN0aXZlIHN0eWxlc1xuICAgICAqL1xuICAgIGlzSW50ZXJhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbG9yOiAnbmV1dHJhbCcsXG4gICAgaXNJbnRlcmFjdGl2ZTogZmFsc2UsXG4gICAgaXNTb2xpZDogZmFsc2VcbiAgfVxuXG4gIHN0YXRpYyBzdHlsZXMgPSB7XG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgaGVpZ2h0OiAxNixcbiAgICBwYWRkaW5nVG9wOiAwLFxuICAgIHBhZGRpbmdSaWdodDogNixcbiAgICBwYWRkaW5nQm90dG9tOiAwLFxuICAgIHBhZGRpbmdMZWZ0OiA2LFxuICAgIGJvcmRlclJhZGl1czogMixcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZSdcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0aGVtZSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGNvbG9yOiBwcm9wc0NvbG9yLFxuICAgICAgaXNJbnRlcmFjdGl2ZSxcbiAgICAgIGlzU29saWQsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB7IGNvbG9yLCBiYWNrZ3JvdW5kQ29sb3IgfSA9IHRoZW1lLmdldEJhZGdlUHJvcHMoe1xuICAgICAgY29sb3I6IHByb3BzQ29sb3IsXG4gICAgICBpc1NvbGlkXG4gICAgfSlcblxuICAgIGNvbnN0IGFwcGVhcmFuY2UgPSBpc0ludGVyYWN0aXZlID8gJ2ludGVyYWN0aXZlJyA6ICdkZWZhdWx0J1xuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBjeChjbGFzc05hbWUsIHRoZW1lLmdldEJhZGdlQ2xhc3NOYW1lKGFwcGVhcmFuY2UpKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHJvbmdcbiAgICAgICAgc2l6ZT17MzAwfVxuICAgICAgICB7Li4uQmFkZ2Uuc3R5bGVzfVxuICAgICAgICBjb2xvcj17Y29sb3J9XG4gICAgICAgIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lc31cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShCYWRnZSlcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsSzs7Ozs7Ozs7Ozs7O1dBd0NKLGtCQUFTO01BQ1Asa0JBT0ksS0FBS0MsS0FQVDtNQUFBLElBQ0VDLEtBREYsZUFDRUEsS0FERjtNQUFBLElBRUVDLFNBRkYsZUFFRUEsU0FGRjtNQUFBLElBR1NDLFVBSFQsZUFHRUMsS0FIRjtNQUFBLElBSUVDLGFBSkYsZUFJRUEsYUFKRjtNQUFBLElBS0VDLE9BTEYsZUFLRUEsT0FMRjtNQUFBLElBTUtOLEtBTkw7O01BU0EsMkJBQW1DQyxLQUFLLENBQUNNLGFBQU4sQ0FBb0I7UUFDckRILEtBQUssRUFBRUQsVUFEOEM7UUFFckRHLE9BQU8sRUFBUEE7TUFGcUQsQ0FBcEIsQ0FBbkM7TUFBQSxJQUFRRixLQUFSLHdCQUFRQSxLQUFSO01BQUEsSUFBZUksZUFBZix3QkFBZUEsZUFBZjs7TUFLQSxJQUFNQyxVQUFVLEdBQUdKLGFBQWEsR0FBRyxhQUFILEdBQW1CLFNBQW5EO01BQ0EsSUFBTUssVUFBVSxHQUFHLElBQUFDLHNCQUFBLEVBQUdULFNBQUgsRUFBY0QsS0FBSyxDQUFDVyxpQkFBTixDQUF3QkgsVUFBeEIsQ0FBZCxDQUFuQjtNQUVBLG9CQUNFLGdDQUFDLGtCQUFEO1FBQ0UsSUFBSSxFQUFFO01BRFIsR0FFTVYsS0FBSyxDQUFDYyxNQUZaO1FBR0UsS0FBSyxFQUFFVCxLQUhUO1FBSUUsZUFBZSxFQUFFSTtNQUpuQixHQUtNUixLQUxOO1FBTUUsU0FBUyxFQUFFVTtNQU5iLEdBREY7SUFVRDs7O0VBcEVpQkksb0I7O0FBQWRmLEs7aUNBQUFBLEssK0NBRUNnQixrQkFBQSxDQUFPQyxTO0VBRVY7QUFDSjtBQUNBO0VBQ0laLEtBQUssRUFBRWEscUJBQUEsQ0FBVUMsTUFBVixDQUFpQkMsVTs7RUFFeEI7QUFDSjtBQUNBO0VBQ0lkLGFBQWEsRUFBRVkscUJBQUEsQ0FBVUcsSTs7RUFFekI7QUFDSjtBQUNBO0VBQ0luQixLQUFLLEVBQUVnQixxQkFBQSxDQUFVSSxNQUFWLENBQWlCRjs7aUNBakJ0QnBCLEssa0JBb0JrQjtFQUNwQkssS0FBSyxFQUFFLFNBRGE7RUFFcEJDLGFBQWEsRUFBRSxLQUZLO0VBR3BCQyxPQUFPLEVBQUU7QUFIVyxDO2lDQXBCbEJQLEssWUEwQlk7RUFDZHVCLE9BQU8sRUFBRSxjQURLO0VBRWRDLFNBQVMsRUFBRSxZQUZHO0VBR2RDLE1BQU0sRUFBRSxFQUhNO0VBSWRDLFVBQVUsRUFBRSxDQUpFO0VBS2RDLFlBQVksRUFBRSxDQUxBO0VBTWRDLGFBQWEsRUFBRSxDQU5EO0VBT2RDLFdBQVcsRUFBRSxDQVBDO0VBUWRDLFlBQVksRUFBRSxDQVJBO0VBU2RDLFNBQVMsRUFBRSxRQVRHO0VBVWRDLGNBQWMsRUFBRSxNQVZGO0VBV2RDLGFBQWEsRUFBRTtBQVhELEM7O2VBNkNILElBQUFDLGdCQUFBLEVBQVVsQyxLQUFWLEMifQ==