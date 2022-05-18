import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["theme", "marginTop", "size"],
    _excluded2 = ["marginTop"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from 'ui-box';
import { withTheme } from '../../theme';

var Heading = /*#__PURE__*/function (_PureComponent) {
  _inherits(Heading, _PureComponent);

  var _super = _createSuper(Heading);

  function Heading() {
    _classCallCheck(this, Heading);

    return _super.apply(this, arguments);
  }

  _createClass(Heading, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          marginTop = _this$props.marginTop,
          size = _this$props.size,
          props = _objectWithoutProperties(_this$props, _excluded);

      var _theme$getHeadingStyl = theme.getHeadingStyle(size),
          defaultMarginTop = _theme$getHeadingStyl.marginTop,
          headingStyle = _objectWithoutProperties(_theme$getHeadingStyl, _excluded2);

      var finalMarginTop = marginTop;

      if (marginTop === 'default') {
        finalMarginTop = defaultMarginTop;
      }

      return /*#__PURE__*/React.createElement(Box, _extends({
        is: "h2",
        marginTop: finalMarginTop || 0,
        marginBottom: 0
      }, headingStyle, props));
    }
  }]);

  return Heading;
}(PureComponent);

Heading.displayName = "Heading";

_defineProperty(Heading, "propTypes", _objectSpread(_objectSpread({}, Box.propTypes), {}, {
  /**
   * The size of the heading.
   */
  size: PropTypes.oneOf([100, 200, 300, 400, 500, 600, 700, 800, 900]).isRequired,

  /**
   * Pass `default` to use the default margin top for that size.
   */
  marginTop: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired
}));

_defineProperty(Heading, "defaultProps", {
  size: 500
});

export default withTheme(Heading);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJCb3giLCJ3aXRoVGhlbWUiLCJIZWFkaW5nIiwicHJvcHMiLCJ0aGVtZSIsIm1hcmdpblRvcCIsInNpemUiLCJnZXRIZWFkaW5nU3R5bGUiLCJkZWZhdWx0TWFyZ2luVG9wIiwiaGVhZGluZ1N0eWxlIiwiZmluYWxNYXJnaW5Ub3AiLCJwcm9wVHlwZXMiLCJvbmVPZiIsImlzUmVxdWlyZWQiLCJvbmVPZlR5cGUiLCJib29sIiwibnVtYmVyIiwic3RyaW5nIiwib2JqZWN0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3R5cG9ncmFwaHkvc3JjL0hlYWRpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3ggZnJvbSAndWktYm94J1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5cbmNsYXNzIEhlYWRpbmcgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBIZWFkaW5nIGNvbXBvc2VzIEJveCBhcyB0aGUgYmFzZS5cbiAgICAgKi9cbiAgICAuLi5Cb3gucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHNpemUgb2YgdGhlIGhlYWRpbmcuXG4gICAgICovXG4gICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsxMDAsIDIwMCwgMzAwLCA0MDAsIDUwMCwgNjAwLCA3MDAsIDgwMCwgOTAwXSlcbiAgICAgIC5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogUGFzcyBgZGVmYXVsdGAgdG8gdXNlIHRoZSBkZWZhdWx0IG1hcmdpbiB0b3AgZm9yIHRoYXQgc2l6ZS5cbiAgICAgKi9cbiAgICBtYXJnaW5Ub3A6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmJvb2wsXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUHJvcFR5cGVzLnN0cmluZ1xuICAgIF0pLFxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHNpemU6IDUwMFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGhlbWUsIG1hcmdpblRvcCwgc2l6ZSwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7XG4gICAgICBtYXJnaW5Ub3A6IGRlZmF1bHRNYXJnaW5Ub3AsXG4gICAgICAuLi5oZWFkaW5nU3R5bGVcbiAgICB9ID0gdGhlbWUuZ2V0SGVhZGluZ1N0eWxlKHNpemUpXG5cbiAgICBsZXQgZmluYWxNYXJnaW5Ub3AgPSBtYXJnaW5Ub3BcbiAgICBpZiAobWFyZ2luVG9wID09PSAnZGVmYXVsdCcpIHtcbiAgICAgIGZpbmFsTWFyZ2luVG9wID0gZGVmYXVsdE1hcmdpblRvcFxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94XG4gICAgICAgIGlzPVwiaDJcIlxuICAgICAgICBtYXJnaW5Ub3A9e2ZpbmFsTWFyZ2luVG9wIHx8IDB9XG4gICAgICAgIG1hcmdpbkJvdHRvbT17MH1cbiAgICAgICAgey4uLmhlYWRpbmdTdHlsZX1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKEhlYWRpbmcpXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxHQUFQLE1BQWdCLFFBQWhCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixhQUExQjs7SUFFTUMsTzs7Ozs7Ozs7Ozs7OztXQWdDSixrQkFBUztNQUNQLGtCQUE2QyxLQUFLQyxLQUFsRDtNQUFBLElBQVFDLEtBQVIsZUFBUUEsS0FBUjtNQUFBLElBQWVDLFNBQWYsZUFBZUEsU0FBZjtNQUFBLElBQTBCQyxJQUExQixlQUEwQkEsSUFBMUI7TUFBQSxJQUFtQ0gsS0FBbkM7O01BQ0EsNEJBR0lDLEtBQUssQ0FBQ0csZUFBTixDQUFzQkQsSUFBdEIsQ0FISjtNQUFBLElBQ2FFLGdCQURiLHlCQUNFSCxTQURGO01BQUEsSUFFS0ksWUFGTDs7TUFLQSxJQUFJQyxjQUFjLEdBQUdMLFNBQXJCOztNQUNBLElBQUlBLFNBQVMsS0FBSyxTQUFsQixFQUE2QjtRQUMzQkssY0FBYyxHQUFHRixnQkFBakI7TUFDRDs7TUFFRCxvQkFDRSxvQkFBQyxHQUFEO1FBQ0UsRUFBRSxFQUFDLElBREw7UUFFRSxTQUFTLEVBQUVFLGNBQWMsSUFBSSxDQUYvQjtRQUdFLFlBQVksRUFBRTtNQUhoQixHQUlNRCxZQUpOLEVBS01OLEtBTE4sRUFERjtJQVNEOzs7O0VBckRtQkwsYTs7QUFBaEJJLE87O2dCQUFBQSxPLCtDQUtDRixHQUFHLENBQUNXLFM7RUFFUDtBQUNKO0FBQ0E7RUFDSUwsSUFBSSxFQUFFUCxTQUFTLENBQUNhLEtBQVYsQ0FBZ0IsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsRUFBK0IsR0FBL0IsRUFBb0MsR0FBcEMsRUFBeUMsR0FBekMsQ0FBaEIsRUFDSEMsVTs7RUFFSDtBQUNKO0FBQ0E7RUFDSVIsU0FBUyxFQUFFTixTQUFTLENBQUNlLFNBQVYsQ0FBb0IsQ0FDN0JmLFNBQVMsQ0FBQ2dCLElBRG1CLEVBRTdCaEIsU0FBUyxDQUFDaUIsTUFGbUIsRUFHN0JqQixTQUFTLENBQUNrQixNQUhtQixDQUFwQixDOztFQU1YO0FBQ0o7QUFDQTtFQUNJYixLQUFLLEVBQUVMLFNBQVMsQ0FBQ21CLE1BQVYsQ0FBaUJMOzs7Z0JBekJ0QlgsTyxrQkE0QmtCO0VBQ3BCSSxJQUFJLEVBQUU7QUFEYyxDOztBQTRCeEIsZUFBZUwsU0FBUyxDQUFDQyxPQUFELENBQXhCIn0=