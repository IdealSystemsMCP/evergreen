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

var _layers = require("../../layers");

var _typography = require("../../typography");

var _theme = require("../../theme");

var _excluded = ["theme", "children", "appearance"],
    _excluded2 = ["color"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var TooltipStateless = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(TooltipStateless, _PureComponent);

  var _super = _createSuper(TooltipStateless);

  function TooltipStateless() {
    (0, _classCallCheck2["default"])(this, TooltipStateless);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(TooltipStateless, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          children = _this$props.children,
          appearance = _this$props.appearance,
          props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);

      var _theme$getTooltipProp = theme.getTooltipProps(appearance),
          color = _theme$getTooltipProp.color,
          themedProps = (0, _objectWithoutProperties2["default"])(_theme$getTooltipProp, _excluded2);

      var child;

      if (typeof children === 'string') {
        child = /*#__PURE__*/_react["default"].createElement(_typography.Paragraph, {
          color: color,
          size: 400
        }, children);
      } else {
        child = children;
      }

      return /*#__PURE__*/_react["default"].createElement(_layers.Pane, (0, _extends2["default"])({
        borderRadius: 3,
        paddingX: 8,
        paddingY: 4,
        maxWidth: 240
      }, themedProps, props), child);
    }
  }]);
  return TooltipStateless;
}(_react.PureComponent);

TooltipStateless.displayName = "TooltipStateless";
(0, _defineProperty2["default"])(TooltipStateless, "propTypes", {
  children: _propTypes["default"].node,

  /**
   * The appearance of the tooltip.
   */
  appearance: _propTypes["default"].oneOf(['default', 'card']).isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes["default"].object.isRequired
});

var _default = (0, _theme.withTheme)(TooltipStateless);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJUb29sdGlwU3RhdGVsZXNzIiwicHJvcHMiLCJ0aGVtZSIsImNoaWxkcmVuIiwiYXBwZWFyYW5jZSIsImdldFRvb2x0aXBQcm9wcyIsImNvbG9yIiwidGhlbWVkUHJvcHMiLCJjaGlsZCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJub2RlIiwib25lT2YiLCJpc1JlcXVpcmVkIiwib2JqZWN0Iiwid2l0aFRoZW1lIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3Rvb2x0aXAvc3JjL1Rvb2x0aXBTdGF0ZWxlc3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5pbXBvcnQgeyBQYXJhZ3JhcGggfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5cbmNsYXNzIFRvb2x0aXBTdGF0ZWxlc3MgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYXBwZWFyYW5jZSBvZiB0aGUgdG9vbHRpcC5cbiAgICAgKi9cbiAgICBhcHBlYXJhbmNlOiBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ2NhcmQnXSkuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIHByb3ZpZGVkIGJ5IFRoZW1lUHJvdmlkZXIuXG4gICAgICovXG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGhlbWUsIGNoaWxkcmVuLCBhcHBlYXJhbmNlLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgY29sb3IsIC4uLnRoZW1lZFByb3BzIH0gPSB0aGVtZS5nZXRUb29sdGlwUHJvcHMoYXBwZWFyYW5jZSlcblxuICAgIGxldCBjaGlsZFxuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICBjaGlsZCA9IChcbiAgICAgICAgPFBhcmFncmFwaCBjb2xvcj17Y29sb3J9IHNpemU9ezQwMH0+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgY2hpbGQgPSBjaGlsZHJlblxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8UGFuZVxuICAgICAgICBib3JkZXJSYWRpdXM9ezN9XG4gICAgICAgIHBhZGRpbmdYPXs4fVxuICAgICAgICBwYWRkaW5nWT17NH1cbiAgICAgICAgbWF4V2lkdGg9ezI0MH1cbiAgICAgICAgey4uLnRoZW1lZFByb3BzfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZH1cbiAgICAgIDwvUGFuZT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKFRvb2x0aXBTdGF0ZWxlc3MpXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7O0lBRU1BLGdCOzs7Ozs7Ozs7Ozs7V0FlSixrQkFBUztNQUNQLGtCQUFrRCxLQUFLQyxLQUF2RDtNQUFBLElBQVFDLEtBQVIsZUFBUUEsS0FBUjtNQUFBLElBQWVDLFFBQWYsZUFBZUEsUUFBZjtNQUFBLElBQXlCQyxVQUF6QixlQUF5QkEsVUFBekI7TUFBQSxJQUF3Q0gsS0FBeEM7O01BQ0EsNEJBQWtDQyxLQUFLLENBQUNHLGVBQU4sQ0FBc0JELFVBQXRCLENBQWxDO01BQUEsSUFBUUUsS0FBUix5QkFBUUEsS0FBUjtNQUFBLElBQWtCQyxXQUFsQjs7TUFFQSxJQUFJQyxLQUFKOztNQUNBLElBQUksT0FBT0wsUUFBUCxLQUFvQixRQUF4QixFQUFrQztRQUNoQ0ssS0FBSyxnQkFDSCxnQ0FBQyxxQkFBRDtVQUFXLEtBQUssRUFBRUYsS0FBbEI7VUFBeUIsSUFBSSxFQUFFO1FBQS9CLEdBQ0dILFFBREgsQ0FERjtNQUtELENBTkQsTUFNTztRQUNMSyxLQUFLLEdBQUdMLFFBQVI7TUFDRDs7TUFFRCxvQkFDRSxnQ0FBQyxZQUFEO1FBQ0UsWUFBWSxFQUFFLENBRGhCO1FBRUUsUUFBUSxFQUFFLENBRlo7UUFHRSxRQUFRLEVBQUUsQ0FIWjtRQUlFLFFBQVEsRUFBRTtNQUpaLEdBS01JLFdBTE4sRUFNTU4sS0FOTixHQVFHTyxLQVJILENBREY7SUFZRDs7O0VBMUM0QkMsb0I7O0FBQXpCVCxnQjtpQ0FBQUEsZ0IsZUFDZTtFQUNqQkcsUUFBUSxFQUFFTyxxQkFBQSxDQUFVQyxJQURIOztFQUdqQjtBQUNKO0FBQ0E7RUFDSVAsVUFBVSxFQUFFTSxxQkFBQSxDQUFVRSxLQUFWLENBQWdCLENBQUMsU0FBRCxFQUFZLE1BQVosQ0FBaEIsRUFBcUNDLFVBTmhDOztFQVFqQjtBQUNKO0FBQ0E7RUFDSVgsS0FBSyxFQUFFUSxxQkFBQSxDQUFVSSxNQUFWLENBQWlCRDtBQVhQLEM7O2VBNENOLElBQUFFLGdCQUFBLEVBQVVmLGdCQUFWLEMifQ==