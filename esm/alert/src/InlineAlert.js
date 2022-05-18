import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["theme", "children", "intent", "hasIcon", "size"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { spacing, dimensions, position, layout } from 'ui-box';
import { withTheme } from '../../theme';
import { Pane } from '../../layers';
import { Text } from '../../typography';
import { Icon } from '../../icon';

var InlineAlert = /*#__PURE__*/function (_PureComponent) {
  _inherits(InlineAlert, _PureComponent);

  var _super = _createSuper(InlineAlert);

  function InlineAlert() {
    var _this;

    _classCallCheck(this, InlineAlert);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "getIconForIntent", function (intent) {
      var theme = _this.props.theme;
      return /*#__PURE__*/React.createElement(Icon, _extends({
        size: 14,
        marginTop: 2
      }, theme.getIconForIntent(intent)));
    });

    return _this;
  }

  _createClass(InlineAlert, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          children = _this$props.children,
          intent = _this$props.intent,
          hasIcon = _this$props.hasIcon,
          size = _this$props.size,
          props = _objectWithoutProperties(_this$props, _excluded);

      return /*#__PURE__*/React.createElement(Pane, _extends({
        alignItems: "center",
        display: "flex"
      }, props), hasIcon && /*#__PURE__*/React.createElement(Pane, {
        display: "inline",
        marginRight: 8
      }, this.getIconForIntent(intent)), /*#__PURE__*/React.createElement(Text, {
        size: size,
        fontWeight: 500
      }, children));
    }
  }]);

  return InlineAlert;
}(PureComponent);

InlineAlert.displayName = "InlineAlert";

_defineProperty(InlineAlert, "propTypes", _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, spacing.propTypes), position.propTypes), layout.propTypes), dimensions.propTypes), {}, {
  /**
   * The content of the alert.
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /**
   * The intent of the alert. This should always be set explicitly.
   */
  intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger']).isRequired,

  /**
   * When true, show a icon on the left matching the type.
   * There is no point not showing this.
   */
  hasIcon: PropTypes.bool,

  /**
   * The size of the Text.
   */
  size: PropTypes.number,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired
}));

_defineProperty(InlineAlert, "defaultProps", {
  intent: 'none',
  hasIcon: true,
  size: 400
});

export default withTheme(InlineAlert);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJzcGFjaW5nIiwiZGltZW5zaW9ucyIsInBvc2l0aW9uIiwibGF5b3V0Iiwid2l0aFRoZW1lIiwiUGFuZSIsIlRleHQiLCJJY29uIiwiSW5saW5lQWxlcnQiLCJpbnRlbnQiLCJ0aGVtZSIsInByb3BzIiwiZ2V0SWNvbkZvckludGVudCIsImNoaWxkcmVuIiwiaGFzSWNvbiIsInNpemUiLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJub2RlIiwib25lT2YiLCJpc1JlcXVpcmVkIiwiYm9vbCIsIm51bWJlciIsIm9iamVjdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbGVydC9zcmMvSW5saW5lQWxlcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IHNwYWNpbmcsIGRpbWVuc2lvbnMsIHBvc2l0aW9uLCBsYXlvdXQgfSBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCB7IEljb24gfSBmcm9tICcuLi8uLi9pY29uJ1xuXG5jbGFzcyBJbmxpbmVBbGVydCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHNvbWUgQm94IEFQSXMuXG4gICAgICovXG4gICAgLi4uc3BhY2luZy5wcm9wVHlwZXMsXG4gICAgLi4ucG9zaXRpb24ucHJvcFR5cGVzLFxuICAgIC4uLmxheW91dC5wcm9wVHlwZXMsXG4gICAgLi4uZGltZW5zaW9ucy5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29udGVudCBvZiB0aGUgYWxlcnQuXG4gICAgICovXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ub2RlXSksXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW50ZW50IG9mIHRoZSBhbGVydC4gVGhpcyBzaG91bGQgYWx3YXlzIGJlIHNldCBleHBsaWNpdGx5LlxuICAgICAqL1xuICAgIGludGVudDogUHJvcFR5cGVzLm9uZU9mKFsnbm9uZScsICdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJ10pXG4gICAgICAuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgc2hvdyBhIGljb24gb24gdGhlIGxlZnQgbWF0Y2hpbmcgdGhlIHR5cGUuXG4gICAgICogVGhlcmUgaXMgbm8gcG9pbnQgbm90IHNob3dpbmcgdGhpcy5cbiAgICAgKi9cbiAgICBoYXNJY29uOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBzaXplIG9mIHRoZSBUZXh0LlxuICAgICAqL1xuICAgIHNpemU6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBwcm92aWRlZCBieSBUaGVtZVByb3ZpZGVyLlxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaW50ZW50OiAnbm9uZScsXG4gICAgaGFzSWNvbjogdHJ1ZSxcbiAgICBzaXplOiA0MDBcbiAgfVxuXG4gIGdldEljb25Gb3JJbnRlbnQgPSBpbnRlbnQgPT4ge1xuICAgIGNvbnN0IHsgdGhlbWUgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiA8SWNvbiBzaXplPXsxNH0gbWFyZ2luVG9wPXsyfSB7Li4udGhlbWUuZ2V0SWNvbkZvckludGVudChpbnRlbnQpfSAvPlxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGhlbWUsIGNoaWxkcmVuLCBpbnRlbnQsIGhhc0ljb24sIHNpemUsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhbmUgYWxpZ25JdGVtcz1cImNlbnRlclwiIGRpc3BsYXk9XCJmbGV4XCIgey4uLnByb3BzfT5cbiAgICAgICAge2hhc0ljb24gJiYgKFxuICAgICAgICAgIDxQYW5lIGRpc3BsYXk9XCJpbmxpbmVcIiBtYXJnaW5SaWdodD17OH0+XG4gICAgICAgICAgICB7dGhpcy5nZXRJY29uRm9ySW50ZW50KGludGVudCl9XG4gICAgICAgICAgPC9QYW5lPlxuICAgICAgICApfVxuICAgICAgICA8VGV4dCBzaXplPXtzaXplfSBmb250V2VpZ2h0PXs1MDB9PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9QYW5lPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoSW5saW5lQWxlcnQpXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxPQUFULEVBQWtCQyxVQUFsQixFQUE4QkMsUUFBOUIsRUFBd0NDLE1BQXhDLFFBQXNELFFBQXREO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixhQUExQjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsY0FBckI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGtCQUFyQjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsWUFBckI7O0lBRU1DLFc7Ozs7Ozs7Ozs7Ozs7Ozs7dUVBNENlLFVBQUFDLE1BQU0sRUFBSTtNQUMzQixJQUFRQyxLQUFSLEdBQWtCLE1BQUtDLEtBQXZCLENBQVFELEtBQVI7TUFFQSxvQkFBTyxvQkFBQyxJQUFEO1FBQU0sSUFBSSxFQUFFLEVBQVo7UUFBZ0IsU0FBUyxFQUFFO01BQTNCLEdBQWtDQSxLQUFLLENBQUNFLGdCQUFOLENBQXVCSCxNQUF2QixDQUFsQyxFQUFQO0lBQ0QsQzs7Ozs7OztXQUVELGtCQUFTO01BQ1Asa0JBQTZELEtBQUtFLEtBQWxFO01BQUEsSUFBUUQsS0FBUixlQUFRQSxLQUFSO01BQUEsSUFBZUcsUUFBZixlQUFlQSxRQUFmO01BQUEsSUFBeUJKLE1BQXpCLGVBQXlCQSxNQUF6QjtNQUFBLElBQWlDSyxPQUFqQyxlQUFpQ0EsT0FBakM7TUFBQSxJQUEwQ0MsSUFBMUMsZUFBMENBLElBQTFDO01BQUEsSUFBbURKLEtBQW5EOztNQUVBLG9CQUNFLG9CQUFDLElBQUQ7UUFBTSxVQUFVLEVBQUMsUUFBakI7UUFBMEIsT0FBTyxFQUFDO01BQWxDLEdBQTZDQSxLQUE3QyxHQUNHRyxPQUFPLGlCQUNOLG9CQUFDLElBQUQ7UUFBTSxPQUFPLEVBQUMsUUFBZDtRQUF1QixXQUFXLEVBQUU7TUFBcEMsR0FDRyxLQUFLRixnQkFBTCxDQUFzQkgsTUFBdEIsQ0FESCxDQUZKLGVBTUUsb0JBQUMsSUFBRDtRQUFNLElBQUksRUFBRU0sSUFBWjtRQUFrQixVQUFVLEVBQUU7TUFBOUIsR0FDR0YsUUFESCxDQU5GLENBREY7SUFZRDs7OztFQWpFdUJmLGE7O0FBQXBCVSxXOztnQkFBQUEsVyx5RkFLQ1IsT0FBTyxDQUFDZ0IsUyxHQUNSZCxRQUFRLENBQUNjLFMsR0FDVGIsTUFBTSxDQUFDYSxTLEdBQ1BmLFVBQVUsQ0FBQ2UsUztFQUVkO0FBQ0o7QUFDQTtFQUNJSCxRQUFRLEVBQUVkLFNBQVMsQ0FBQ2tCLFNBQVYsQ0FBb0IsQ0FBQ2xCLFNBQVMsQ0FBQ21CLE1BQVgsRUFBbUJuQixTQUFTLENBQUNvQixJQUE3QixDQUFwQixDOztFQUVWO0FBQ0o7QUFDQTtFQUNJVixNQUFNLEVBQUVWLFNBQVMsQ0FBQ3FCLEtBQVYsQ0FBZ0IsQ0FBQyxNQUFELEVBQVMsU0FBVCxFQUFvQixTQUFwQixFQUErQixRQUEvQixDQUFoQixFQUNMQyxVOztFQUVIO0FBQ0o7QUFDQTtBQUNBO0VBQ0lQLE9BQU8sRUFBRWYsU0FBUyxDQUFDdUIsSTs7RUFFbkI7QUFDSjtBQUNBO0VBQ0lQLElBQUksRUFBRWhCLFNBQVMsQ0FBQ3dCLE07O0VBRWhCO0FBQ0o7QUFDQTtFQUNJYixLQUFLLEVBQUVYLFNBQVMsQ0FBQ3lCLE1BQVYsQ0FBaUJIOzs7Z0JBbkN0QmIsVyxrQkFzQ2tCO0VBQ3BCQyxNQUFNLEVBQUUsTUFEWTtFQUVwQkssT0FBTyxFQUFFLElBRlc7RUFHcEJDLElBQUksRUFBRTtBQUhjLEM7O0FBOEJ4QixlQUFlWCxTQUFTLENBQUNJLFdBQUQsQ0FBeEIifQ==