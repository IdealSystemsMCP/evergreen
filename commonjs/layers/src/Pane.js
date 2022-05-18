"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

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

var _excluded = ["theme", "background", "elevation", "hoverElevation", "activeElevation", "border", "borderTop", "borderRight", "borderBottom", "borderLeft", "css"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var StringAndBoolPropType = _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].bool]);

var Pane = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Pane, _PureComponent);

  var _super = _createSuper(Pane);

  function Pane() {
    var _this;

    (0, _classCallCheck2["default"])(this, Pane);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getHoverElevationStyle", function (hoverElevation, css) {
      var theme = _this.props.theme;
      if (!Number.isInteger(hoverElevation)) return {};
      return {
        transitionDuration: '150ms',
        transitionProperty: 'box-shadow, transform',
        transitionTimingFunction: "cubic-bezier(0.0, 0.0, 0.2, 1)",
        ':hover': _objectSpread(_objectSpread({}, css[':hover'] || {}), {}, {
          transform: 'translateY(-2px)',
          boxShadow: theme.getElevation(hoverElevation)
        })
      };
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getActiveElevationStyle", function (activeElevation, css) {
      var theme = _this.props.theme;
      if (!Number.isInteger(activeElevation)) return {};
      return {
        ':active': _objectSpread(_objectSpread({}, css[':active'] || {}), {}, {
          transform: 'translateY(-1px)',
          boxShadow: theme.getElevation(activeElevation)
        })
      };
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getBorderSideProperty", function (_ref) {
      var borderSideProperty = _ref.borderSideProperty,
          border = _ref.border;
      var theme = _this.props.theme;

      if (Object.prototype.hasOwnProperty.call(theme.colors.border, borderSideProperty)) {
        return "1px solid ".concat(theme.colors.border[borderSideProperty]);
      }

      if (borderSideProperty === true) {
        return "1px solid ".concat(theme.colors.border["default"]);
      }

      if (borderSideProperty === false) {
        return null;
      }

      if (Object.prototype.hasOwnProperty.call(theme.colors.border, border)) {
        return "1px solid ".concat(theme.colors.border[border]);
      }

      if (border === true) {
        return "1px solid ".concat(theme.colors.border["default"]);
      }

      return borderSideProperty;
    });
    return _this;
  }

  (0, _createClass2["default"])(Pane, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          theme = _this$props.theme,
          background = _this$props.background,
          elevation = _this$props.elevation,
          hoverElevation = _this$props.hoverElevation,
          activeElevation = _this$props.activeElevation,
          border = _this$props.border,
          borderTop = _this$props.borderTop,
          borderRight = _this$props.borderRight,
          borderBottom = _this$props.borderBottom,
          borderLeft = _this$props.borderLeft,
          _this$props$css = _this$props.css,
          css = _this$props$css === void 0 ? {} : _this$props$css,
          props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      var elevationStyle = theme.getElevation(elevation);
      var hoverElevationStyle = this.getHoverElevationStyle(hoverElevation, css);
      var activeElevationStyle = this.getActiveElevationStyle(activeElevation, css);

      var _map = [borderTop, borderRight, borderBottom, borderLeft].map(function (borderSideProperty) {
        return _this2.getBorderSideProperty({
          borderSideProperty: borderSideProperty,
          border: border
        });
      }),
          _map2 = (0, _slicedToArray2["default"])(_map, 4),
          _borderTop = _map2[0],
          _borderRight = _map2[1],
          _borderBottom = _map2[2],
          _borderLeft = _map2[3];

      var className = (0, _classnames["default"])(props.className, (0, _glamor.css)(_objectSpread(_objectSpread(_objectSpread({}, css), hoverElevationStyle), activeElevationStyle)).toString());
      return /*#__PURE__*/_react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
        borderTop: _borderTop,
        borderRight: _borderRight,
        borderBottom: _borderBottom,
        borderLeft: _borderLeft,
        boxShadow: elevationStyle,
        background: theme.getBackground(background)
      }, props, {
        className: className
      }));
    }
  }]);
  return Pane;
}(_react.PureComponent);

Pane.displayName = "Pane";
(0, _defineProperty2["default"])(Pane, "propTypes", _objectSpread(_objectSpread({}, _uiBox["default"].propTypes), {}, {
  /**
   * Background property.
   * `tint1`, `tint2` etc. from `theme.colors.background` are available.
   */
  background: _propTypes["default"].string,

  /**
   * Elevation of the Pane.
   * Values: 0, 1, 2, 3, 4.
   */
  elevation: _propTypes["default"].oneOf([0, 1, 2, 3, 4]),

  /**
   * Elevation of the Pane on hover. Might get deprecated.
   * Values: 0, 1, 2, 3, 4.
   */
  hoverElevation: _propTypes["default"].oneOf([0, 1, 2, 3, 4]),

  /**
   * Elevation of the Pane on click. Might get deprecated.
   * Values: 0, 1, 2, 3, 4.
   */
  activeElevation: _propTypes["default"].oneOf([0, 1, 2, 3, 4]),

  /**
   * Can be a explicit border value or a boolean.
   * Values: true, muted, default.
   */
  border: StringAndBoolPropType,

  /**
   * Can be a explicit border value or a boolean.
   * Values: true, extraMuted, muted, default.
   */
  borderTop: StringAndBoolPropType,

  /**
   * Can be a explicit border value or a boolean.
   * Values: true, extraMuted, muted, default.
   */
  borderRight: StringAndBoolPropType,

  /**
   * Can be a explicit border value or a boolean.
   * Values: true, extraMuted, muted, default.
   */
  borderBottom: StringAndBoolPropType,

  /**
   * Can be a explicit border value or a boolean.
   * Values: true, extraMuted, muted, default.
   */
  borderLeft: StringAndBoolPropType,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes["default"].object.isRequired
}));

var _default = (0, _theme.withTheme)(Pane);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTdHJpbmdBbmRCb29sUHJvcFR5cGUiLCJQcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJib29sIiwiUGFuZSIsImhvdmVyRWxldmF0aW9uIiwiY3NzIiwidGhlbWUiLCJwcm9wcyIsIk51bWJlciIsImlzSW50ZWdlciIsInRyYW5zaXRpb25EdXJhdGlvbiIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsInRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbiIsInRyYW5zZm9ybSIsImJveFNoYWRvdyIsImdldEVsZXZhdGlvbiIsImFjdGl2ZUVsZXZhdGlvbiIsImJvcmRlclNpZGVQcm9wZXJ0eSIsImJvcmRlciIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImNvbG9ycyIsImJhY2tncm91bmQiLCJlbGV2YXRpb24iLCJib3JkZXJUb3AiLCJib3JkZXJSaWdodCIsImJvcmRlckJvdHRvbSIsImJvcmRlckxlZnQiLCJlbGV2YXRpb25TdHlsZSIsImhvdmVyRWxldmF0aW9uU3R5bGUiLCJnZXRIb3ZlckVsZXZhdGlvblN0eWxlIiwiYWN0aXZlRWxldmF0aW9uU3R5bGUiLCJnZXRBY3RpdmVFbGV2YXRpb25TdHlsZSIsIm1hcCIsImdldEJvcmRlclNpZGVQcm9wZXJ0eSIsIl9ib3JkZXJUb3AiLCJfYm9yZGVyUmlnaHQiLCJfYm9yZGVyQm90dG9tIiwiX2JvcmRlckxlZnQiLCJjbGFzc05hbWUiLCJjeCIsImdsYW1vckNzcyIsInRvU3RyaW5nIiwiZ2V0QmFja2dyb3VuZCIsIlB1cmVDb21wb25lbnQiLCJCb3giLCJwcm9wVHlwZXMiLCJvbmVPZiIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJ3aXRoVGhlbWUiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGF5ZXJzL3NyYy9QYW5lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHsgY3NzIGFzIGdsYW1vckNzcyB9IGZyb20gJ2dsYW1vcidcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuXG5jb25zdCBTdHJpbmdBbmRCb29sUHJvcFR5cGUgPSBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgUHJvcFR5cGVzLnN0cmluZyxcbiAgUHJvcFR5cGVzLmJvb2xcbl0pXG5cbmNsYXNzIFBhbmUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgQm94IGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICAgKi9cbiAgICAuLi5Cb3gucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogQmFja2dyb3VuZCBwcm9wZXJ0eS5cbiAgICAgKiBgdGludDFgLCBgdGludDJgIGV0Yy4gZnJvbSBgdGhlbWUuY29sb3JzLmJhY2tncm91bmRgIGFyZSBhdmFpbGFibGUuXG4gICAgICovXG4gICAgYmFja2dyb3VuZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIEVsZXZhdGlvbiBvZiB0aGUgUGFuZS5cbiAgICAgKiBWYWx1ZXM6IDAsIDEsIDIsIDMsIDQuXG4gICAgICovXG4gICAgZWxldmF0aW9uOiBQcm9wVHlwZXMub25lT2YoWzAsIDEsIDIsIDMsIDRdKSxcblxuICAgIC8qKlxuICAgICAqIEVsZXZhdGlvbiBvZiB0aGUgUGFuZSBvbiBob3Zlci4gTWlnaHQgZ2V0IGRlcHJlY2F0ZWQuXG4gICAgICogVmFsdWVzOiAwLCAxLCAyLCAzLCA0LlxuICAgICAqL1xuICAgIGhvdmVyRWxldmF0aW9uOiBQcm9wVHlwZXMub25lT2YoWzAsIDEsIDIsIDMsIDRdKSxcblxuICAgIC8qKlxuICAgICAqIEVsZXZhdGlvbiBvZiB0aGUgUGFuZSBvbiBjbGljay4gTWlnaHQgZ2V0IGRlcHJlY2F0ZWQuXG4gICAgICogVmFsdWVzOiAwLCAxLCAyLCAzLCA0LlxuICAgICAqL1xuICAgIGFjdGl2ZUVsZXZhdGlvbjogUHJvcFR5cGVzLm9uZU9mKFswLCAxLCAyLCAzLCA0XSksXG5cbiAgICAvKipcbiAgICAgKiBDYW4gYmUgYSBleHBsaWNpdCBib3JkZXIgdmFsdWUgb3IgYSBib29sZWFuLlxuICAgICAqIFZhbHVlczogdHJ1ZSwgbXV0ZWQsIGRlZmF1bHQuXG4gICAgICovXG4gICAgYm9yZGVyOiBTdHJpbmdBbmRCb29sUHJvcFR5cGUsXG5cbiAgICAvKipcbiAgICAgKiBDYW4gYmUgYSBleHBsaWNpdCBib3JkZXIgdmFsdWUgb3IgYSBib29sZWFuLlxuICAgICAqIFZhbHVlczogdHJ1ZSwgZXh0cmFNdXRlZCwgbXV0ZWQsIGRlZmF1bHQuXG4gICAgICovXG4gICAgYm9yZGVyVG9wOiBTdHJpbmdBbmRCb29sUHJvcFR5cGUsXG5cbiAgICAvKipcbiAgICAgKiBDYW4gYmUgYSBleHBsaWNpdCBib3JkZXIgdmFsdWUgb3IgYSBib29sZWFuLlxuICAgICAqIFZhbHVlczogdHJ1ZSwgZXh0cmFNdXRlZCwgbXV0ZWQsIGRlZmF1bHQuXG4gICAgICovXG4gICAgYm9yZGVyUmlnaHQ6IFN0cmluZ0FuZEJvb2xQcm9wVHlwZSxcblxuICAgIC8qKlxuICAgICAqIENhbiBiZSBhIGV4cGxpY2l0IGJvcmRlciB2YWx1ZSBvciBhIGJvb2xlYW4uXG4gICAgICogVmFsdWVzOiB0cnVlLCBleHRyYU11dGVkLCBtdXRlZCwgZGVmYXVsdC5cbiAgICAgKi9cbiAgICBib3JkZXJCb3R0b206IFN0cmluZ0FuZEJvb2xQcm9wVHlwZSxcblxuICAgIC8qKlxuICAgICAqIENhbiBiZSBhIGV4cGxpY2l0IGJvcmRlciB2YWx1ZSBvciBhIGJvb2xlYW4uXG4gICAgICogVmFsdWVzOiB0cnVlLCBleHRyYU11dGVkLCBtdXRlZCwgZGVmYXVsdC5cbiAgICAgKi9cbiAgICBib3JkZXJMZWZ0OiBTdHJpbmdBbmRCb29sUHJvcFR5cGUsXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBwcm92aWRlZCBieSBUaGVtZVByb3ZpZGVyLlxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfVxuXG4gIGdldEhvdmVyRWxldmF0aW9uU3R5bGUgPSAoaG92ZXJFbGV2YXRpb24sIGNzcykgPT4ge1xuICAgIGNvbnN0IHsgdGhlbWUgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoIU51bWJlci5pc0ludGVnZXIoaG92ZXJFbGV2YXRpb24pKSByZXR1cm4ge31cblxuICAgIHJldHVybiB7XG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb246ICcxNTBtcycsXG4gICAgICB0cmFuc2l0aW9uUHJvcGVydHk6ICdib3gtc2hhZG93LCB0cmFuc2Zvcm0nLFxuICAgICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiBgY3ViaWMtYmV6aWVyKDAuMCwgMC4wLCAwLjIsIDEpYCxcbiAgICAgICc6aG92ZXInOiB7XG4gICAgICAgIC4uLihjc3NbJzpob3ZlciddIHx8IHt9KSxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMnB4KScsXG4gICAgICAgIGJveFNoYWRvdzogdGhlbWUuZ2V0RWxldmF0aW9uKGhvdmVyRWxldmF0aW9uKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldEFjdGl2ZUVsZXZhdGlvblN0eWxlID0gKGFjdGl2ZUVsZXZhdGlvbiwgY3NzKSA9PiB7XG4gICAgY29uc3QgeyB0aGVtZSB9ID0gdGhpcy5wcm9wc1xuICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihhY3RpdmVFbGV2YXRpb24pKSByZXR1cm4ge31cblxuICAgIHJldHVybiB7XG4gICAgICAnOmFjdGl2ZSc6IHtcbiAgICAgICAgLi4uKGNzc1snOmFjdGl2ZSddIHx8IHt9KSxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMXB4KScsXG4gICAgICAgIGJveFNoYWRvdzogdGhlbWUuZ2V0RWxldmF0aW9uKGFjdGl2ZUVsZXZhdGlvbilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRCb3JkZXJTaWRlUHJvcGVydHkgPSAoeyBib3JkZXJTaWRlUHJvcGVydHksIGJvcmRlciB9KSA9PiB7XG4gICAgY29uc3QgeyB0aGVtZSB9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChcbiAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChcbiAgICAgICAgdGhlbWUuY29sb3JzLmJvcmRlcixcbiAgICAgICAgYm9yZGVyU2lkZVByb3BlcnR5XG4gICAgICApXG4gICAgKSB7XG4gICAgICByZXR1cm4gYDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ib3JkZXJbYm9yZGVyU2lkZVByb3BlcnR5XX1gXG4gICAgfVxuXG4gICAgaWYgKGJvcmRlclNpZGVQcm9wZXJ0eSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuYm9yZGVyLmRlZmF1bHR9YFxuICAgIH1cblxuICAgIGlmIChib3JkZXJTaWRlUHJvcGVydHkgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhlbWUuY29sb3JzLmJvcmRlciwgYm9yZGVyKSkge1xuICAgICAgcmV0dXJuIGAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuYm9yZGVyW2JvcmRlcl19YFxuICAgIH1cblxuICAgIGlmIChib3JkZXIgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBgMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmJvcmRlci5kZWZhdWx0fWBcbiAgICB9XG5cbiAgICByZXR1cm4gYm9yZGVyU2lkZVByb3BlcnR5XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdGhlbWUsXG5cbiAgICAgIGJhY2tncm91bmQsXG5cbiAgICAgIGVsZXZhdGlvbixcbiAgICAgIGhvdmVyRWxldmF0aW9uLFxuICAgICAgYWN0aXZlRWxldmF0aW9uLFxuXG4gICAgICBib3JkZXIsXG4gICAgICBib3JkZXJUb3AsXG4gICAgICBib3JkZXJSaWdodCxcbiAgICAgIGJvcmRlckJvdHRvbSxcbiAgICAgIGJvcmRlckxlZnQsXG5cbiAgICAgIGNzcyA9IHt9LFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgZWxldmF0aW9uU3R5bGUgPSB0aGVtZS5nZXRFbGV2YXRpb24oZWxldmF0aW9uKVxuICAgIGNvbnN0IGhvdmVyRWxldmF0aW9uU3R5bGUgPSB0aGlzLmdldEhvdmVyRWxldmF0aW9uU3R5bGUoaG92ZXJFbGV2YXRpb24sIGNzcylcbiAgICBjb25zdCBhY3RpdmVFbGV2YXRpb25TdHlsZSA9IHRoaXMuZ2V0QWN0aXZlRWxldmF0aW9uU3R5bGUoXG4gICAgICBhY3RpdmVFbGV2YXRpb24sXG4gICAgICBjc3NcbiAgICApXG5cbiAgICBjb25zdCBbX2JvcmRlclRvcCwgX2JvcmRlclJpZ2h0LCBfYm9yZGVyQm90dG9tLCBfYm9yZGVyTGVmdF0gPSBbXG4gICAgICBib3JkZXJUb3AsXG4gICAgICBib3JkZXJSaWdodCxcbiAgICAgIGJvcmRlckJvdHRvbSxcbiAgICAgIGJvcmRlckxlZnRcbiAgICBdLm1hcChib3JkZXJTaWRlUHJvcGVydHkgPT5cbiAgICAgIHRoaXMuZ2V0Qm9yZGVyU2lkZVByb3BlcnR5KHsgYm9yZGVyU2lkZVByb3BlcnR5LCBib3JkZXIgfSlcbiAgICApXG5cbiAgICBjb25zdCBjbGFzc05hbWUgPSBjeChcbiAgICAgIHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGdsYW1vckNzcyh7XG4gICAgICAgIC4uLmNzcyxcbiAgICAgICAgLi4uaG92ZXJFbGV2YXRpb25TdHlsZSxcbiAgICAgICAgLi4uYWN0aXZlRWxldmF0aW9uU3R5bGVcbiAgICAgIH0pLnRvU3RyaW5nKClcbiAgICApXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICBib3JkZXJUb3A9e19ib3JkZXJUb3B9XG4gICAgICAgIGJvcmRlclJpZ2h0PXtfYm9yZGVyUmlnaHR9XG4gICAgICAgIGJvcmRlckJvdHRvbT17X2JvcmRlckJvdHRvbX1cbiAgICAgICAgYm9yZGVyTGVmdD17X2JvcmRlckxlZnR9XG4gICAgICAgIGJveFNoYWRvdz17ZWxldmF0aW9uU3R5bGV9XG4gICAgICAgIGJhY2tncm91bmQ9e3RoZW1lLmdldEJhY2tncm91bmQoYmFja2dyb3VuZCl9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoUGFuZSlcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEscUJBQXFCLEdBQUdDLHFCQUFBLENBQVVDLFNBQVYsQ0FBb0IsQ0FDaERELHFCQUFBLENBQVVFLE1BRHNDLEVBRWhERixxQkFBQSxDQUFVRyxJQUZzQyxDQUFwQixDQUE5Qjs7SUFLTUMsSTs7Ozs7Ozs7Ozs7Ozs7OytHQW1FcUIsVUFBQ0MsY0FBRCxFQUFpQkMsR0FBakIsRUFBeUI7TUFDaEQsSUFBUUMsS0FBUixHQUFrQixNQUFLQyxLQUF2QixDQUFRRCxLQUFSO01BQ0EsSUFBSSxDQUFDRSxNQUFNLENBQUNDLFNBQVAsQ0FBaUJMLGNBQWpCLENBQUwsRUFBdUMsT0FBTyxFQUFQO01BRXZDLE9BQU87UUFDTE0sa0JBQWtCLEVBQUUsT0FEZjtRQUVMQyxrQkFBa0IsRUFBRSx1QkFGZjtRQUdMQyx3QkFBd0Isa0NBSG5CO1FBSUwsMENBQ01QLEdBQUcsQ0FBQyxRQUFELENBQUgsSUFBaUIsRUFEdkI7VUFFRVEsU0FBUyxFQUFFLGtCQUZiO1VBR0VDLFNBQVMsRUFB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