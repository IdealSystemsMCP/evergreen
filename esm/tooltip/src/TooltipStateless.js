import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["theme", "children", "appearance"],
    _excluded2 = ["color"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Pane } from '../../layers';
import { Paragraph } from '../../typography';
import { withTheme } from '../../theme';

var TooltipStateless = /*#__PURE__*/function (_PureComponent) {
  _inherits(TooltipStateless, _PureComponent);

  var _super = _createSuper(TooltipStateless);

  function TooltipStateless() {
    _classCallCheck(this, TooltipStateless);

    return _super.apply(this, arguments);
  }

  _createClass(TooltipStateless, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          children = _this$props.children,
          appearance = _this$props.appearance,
          props = _objectWithoutProperties(_this$props, _excluded);

      var _theme$getTooltipProp = theme.getTooltipProps(appearance),
          color = _theme$getTooltipProp.color,
          themedProps = _objectWithoutProperties(_theme$getTooltipProp, _excluded2);

      var child;

      if (typeof children === 'string') {
        child = /*#__PURE__*/React.createElement(Paragraph, {
          color: color,
          size: 400
        }, children);
      } else {
        child = children;
      }

      return /*#__PURE__*/React.createElement(Pane, _extends({
        borderRadius: 3,
        paddingX: 8,
        paddingY: 4,
        maxWidth: 240
      }, themedProps, props), child);
    }
  }]);

  return TooltipStateless;
}(PureComponent);

TooltipStateless.displayName = "TooltipStateless";

_defineProperty(TooltipStateless, "propTypes", {
  children: PropTypes.node,

  /**
   * The appearance of the tooltip.
   */
  appearance: PropTypes.oneOf(['default', 'card']).isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired
});

export default withTheme(TooltipStateless);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJQYW5lIiwiUGFyYWdyYXBoIiwid2l0aFRoZW1lIiwiVG9vbHRpcFN0YXRlbGVzcyIsInByb3BzIiwidGhlbWUiLCJjaGlsZHJlbiIsImFwcGVhcmFuY2UiLCJnZXRUb29sdGlwUHJvcHMiLCJjb2xvciIsInRoZW1lZFByb3BzIiwiY2hpbGQiLCJub2RlIiwib25lT2YiLCJpc1JlcXVpcmVkIiwib2JqZWN0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3Rvb2x0aXAvc3JjL1Rvb2x0aXBTdGF0ZWxlc3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5pbXBvcnQgeyBQYXJhZ3JhcGggfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5cbmNsYXNzIFRvb2x0aXBTdGF0ZWxlc3MgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYXBwZWFyYW5jZSBvZiB0aGUgdG9vbHRpcC5cbiAgICAgKi9cbiAgICBhcHBlYXJhbmNlOiBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ2NhcmQnXSkuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIHByb3ZpZGVkIGJ5IFRoZW1lUHJvdmlkZXIuXG4gICAgICovXG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGhlbWUsIGNoaWxkcmVuLCBhcHBlYXJhbmNlLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgY29sb3IsIC4uLnRoZW1lZFByb3BzIH0gPSB0aGVtZS5nZXRUb29sdGlwUHJvcHMoYXBwZWFyYW5jZSlcblxuICAgIGxldCBjaGlsZFxuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICBjaGlsZCA9IChcbiAgICAgICAgPFBhcmFncmFwaCBjb2xvcj17Y29sb3J9IHNpemU9ezQwMH0+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgY2hpbGQgPSBjaGlsZHJlblxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8UGFuZVxuICAgICAgICBib3JkZXJSYWRpdXM9ezN9XG4gICAgICAgIHBhZGRpbmdYPXs4fVxuICAgICAgICBwYWRkaW5nWT17NH1cbiAgICAgICAgbWF4V2lkdGg9ezI0MH1cbiAgICAgICAgey4uLnRoZW1lZFByb3BzfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZH1cbiAgICAgIDwvUGFuZT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKFRvb2x0aXBTdGF0ZWxlc3MpXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsY0FBckI7QUFDQSxTQUFTQyxTQUFULFFBQTBCLGtCQUExQjtBQUNBLFNBQVNDLFNBQVQsUUFBMEIsYUFBMUI7O0lBRU1DLGdCOzs7Ozs7Ozs7Ozs7O1dBZUosa0JBQVM7TUFDUCxrQkFBa0QsS0FBS0MsS0FBdkQ7TUFBQSxJQUFRQyxLQUFSLGVBQVFBLEtBQVI7TUFBQSxJQUFlQyxRQUFmLGVBQWVBLFFBQWY7TUFBQSxJQUF5QkMsVUFBekIsZUFBeUJBLFVBQXpCO01BQUEsSUFBd0NILEtBQXhDOztNQUNBLDRCQUFrQ0MsS0FBSyxDQUFDRyxlQUFOLENBQXNCRCxVQUF0QixDQUFsQztNQUFBLElBQVFFLEtBQVIseUJBQVFBLEtBQVI7TUFBQSxJQUFrQkMsV0FBbEI7O01BRUEsSUFBSUMsS0FBSjs7TUFDQSxJQUFJLE9BQU9MLFFBQVAsS0FBb0IsUUFBeEIsRUFBa0M7UUFDaENLLEtBQUssZ0JBQ0gsb0JBQUMsU0FBRDtVQUFXLEtBQUssRUFBRUYsS0FBbEI7VUFBeUIsSUFBSSxFQUFFO1FBQS9CLEdBQ0dILFFBREgsQ0FERjtNQUtELENBTkQsTUFNTztRQUNMSyxLQUFLLEdBQUdMLFFBQVI7TUFDRDs7TUFFRCxvQkFDRSxvQkFBQyxJQUFEO1FBQ0UsWUFBWSxFQUFFLENBRGhCO1FBRUUsUUFBUSxFQUFFLENBRlo7UUFHRSxRQUFRLEVBQUUsQ0FIWjtRQUlFLFFBQVEsRUFBRTtNQUpaLEdBS01JLFdBTE4sRUFNTU4sS0FOTixHQVFHTyxLQVJILENBREY7SUFZRDs7OztFQTFDNEJiLGE7O0FBQXpCSyxnQjs7Z0JBQUFBLGdCLGVBQ2U7RUFDakJHLFFBQVEsRUFBRVAsU0FBUyxDQUFDYSxJQURIOztFQUdqQjtBQUNKO0FBQ0E7RUFDSUwsVUFBVSxFQUFFUixTQUFTLENBQUNjLEtBQVYsQ0FBZ0IsQ0FBQyxTQUFELEVBQVksTUFBWixDQUFoQixFQUFxQ0MsVUFOaEM7O0VBUWpCO0FBQ0o7QUFDQTtFQUNJVCxLQUFLLEVBQUVOLFNBQVMsQ0FBQ2dCLE1BQVYsQ0FBaUJEO0FBWFAsQzs7QUE0Q3JCLGVBQWVaLFNBQVMsQ0FBQ0MsZ0JBQUQsQ0FBeEIifQ==