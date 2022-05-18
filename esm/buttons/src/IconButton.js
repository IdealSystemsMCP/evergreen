import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["theme", "iconAim", "icon", "iconSize", "height", "intent"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { dimensions, spacing, position, layout } from 'ui-box';
import { Icon } from '../../icon';
import { withTheme } from '../../theme';
import Button from './Button';

var IconButton = /*#__PURE__*/function (_PureComponent) {
  _inherits(IconButton, _PureComponent);

  var _super = _createSuper(IconButton);

  function IconButton() {
    _classCallCheck(this, IconButton);

    return _super.apply(this, arguments);
  }

  _createClass(IconButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          iconAim = _this$props.iconAim,
          icon = _this$props.icon,
          iconSize = _this$props.iconSize,
          height = _this$props.height,
          intent = _this$props.intent,
          props = _objectWithoutProperties(_this$props, _excluded);

      var size = iconSize || theme.getIconSizeForIconButton(height);
      return /*#__PURE__*/React.createElement(Button, _extends({
        intent: intent,
        height: height,
        width: height,
        paddingLeft: 0,
        paddingRight: 0,
        display: "flex",
        justifyContent: "center"
      }, props), /*#__PURE__*/React.createElement(Icon, {
        icon: icon,
        size: size,
        color: intent === 'none' ? 'default' : 'currentColor'
      }));
    }
  }]);

  return IconButton;
}(PureComponent);

IconButton.displayName = "IconButton";

_defineProperty(IconButton, "propTypes", _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, dimensions.propTypes), spacing.propTypes), position.propTypes), layout.propTypes), {}, {
  /**
   * Name of a Blueprint UI icon, or an icon element, to render.
   * This prop is required because it determines the content of the component, but it can
   * be explicitly set to falsy values to render nothing.
   *
   * - If `null` or `undefined` or `false`, this component will render nothing.
   * - If given an `IconName` (a string literal union of all icon names),
   *   that icon will be rendered as an `<svg>` with `<path>` tags.
   * - If given a `JSX.Element`, that element will be rendered and _all other props on this component are ignored._
   *   This type is supported to simplify usage of this component in other Blueprint components.
   *   As a consumer, you should never use `<Icon icon={<element />}` directly; simply render `<element />` instead.
   */
  icon: PropTypes.string,

  /**
   * Specifies an explicit icon size instead of the default value
   */
  iconSize: PropTypes.number,

  /**
   * The intent of the button.
   */
  intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger']).isRequired,

  /**
   * The appearance of the button.
   */
  appearance: PropTypes.oneOf(['default', 'minimal', 'primary']).isRequired,

  /**
   * Forcefully set the active state of a button.
   * Useful in conjuction with a Popover.
   */
  isActive: PropTypes.bool,

  /**
   * When true, the button is disabled.
   * isLoading also sets the button to disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired,

  /**
   * Class name passed to the button.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string
}));

_defineProperty(IconButton, "defaultProps", {
  intent: 'none',
  appearance: 'default',
  height: 32
});

export default withTheme(IconButton);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJkaW1lbnNpb25zIiwic3BhY2luZyIsInBvc2l0aW9uIiwibGF5b3V0IiwiSWNvbiIsIndpdGhUaGVtZSIsIkJ1dHRvbiIsIkljb25CdXR0b24iLCJwcm9wcyIsInRoZW1lIiwiaWNvbkFpbSIsImljb24iLCJpY29uU2l6ZSIsImhlaWdodCIsImludGVudCIsInNpemUiLCJnZXRJY29uU2l6ZUZvckljb25CdXR0b24iLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJudW1iZXIiLCJvbmVPZiIsImlzUmVxdWlyZWQiLCJhcHBlYXJhbmNlIiwiaXNBY3RpdmUiLCJib29sIiwiZGlzYWJsZWQiLCJvYmplY3QiLCJjbGFzc05hbWUiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYnV0dG9ucy9zcmMvSWNvbkJ1dHRvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgZGltZW5zaW9ucywgc3BhY2luZywgcG9zaXRpb24sIGxheW91dCB9IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IEljb24gfSBmcm9tICcuLi8uLi9pY29uJ1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xuXG5jbGFzcyBJY29uQnV0dG9uIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIGRpbWVuc2lvbnMgc3BlYyBmcm9tIHRoZSBCb3ggcHJpbWl0aXZlLlxuICAgICAqL1xuICAgIC4uLmRpbWVuc2lvbnMucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIHNwYWNpbmcgc3BlYyBmcm9tIHRoZSBCb3ggcHJpbWl0aXZlLlxuICAgICAqL1xuICAgIC4uLnNwYWNpbmcucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIHBvc2l0aW9uIHNwZWMgZnJvbSB0aGUgQm94IHByaW1pdGl2ZS5cbiAgICAgKi9cbiAgICAuLi5wb3NpdGlvbi5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgbGF5b3V0IHNwZWMgZnJvbSB0aGUgQm94IHByaW1pdGl2ZS5cbiAgICAgKi9cbiAgICAuLi5sYXlvdXQucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogTmFtZSBvZiBhIEJsdWVwcmludCBVSSBpY29uLCBvciBhbiBpY29uIGVsZW1lbnQsIHRvIHJlbmRlci5cbiAgICAgKiBUaGlzIHByb3AgaXMgcmVxdWlyZWQgYmVjYXVzZSBpdCBkZXRlcm1pbmVzIHRoZSBjb250ZW50IG9mIHRoZSBjb21wb25lbnQsIGJ1dCBpdCBjYW5cbiAgICAgKiBiZSBleHBsaWNpdGx5IHNldCB0byBmYWxzeSB2YWx1ZXMgdG8gcmVuZGVyIG5vdGhpbmcuXG4gICAgICpcbiAgICAgKiAtIElmIGBudWxsYCBvciBgdW5kZWZpbmVkYCBvciBgZmFsc2VgLCB0aGlzIGNvbXBvbmVudCB3aWxsIHJlbmRlciBub3RoaW5nLlxuICAgICAqIC0gSWYgZ2l2ZW4gYW4gYEljb25OYW1lYCAoYSBzdHJpbmcgbGl0ZXJhbCB1bmlvbiBvZiBhbGwgaWNvbiBuYW1lcyksXG4gICAgICogICB0aGF0IGljb24gd2lsbCBiZSByZW5kZXJlZCBhcyBhbiBgPHN2Zz5gIHdpdGggYDxwYXRoPmAgdGFncy5cbiAgICAgKiAtIElmIGdpdmVuIGEgYEpTWC5FbGVtZW50YCwgdGhhdCBlbGVtZW50IHdpbGwgYmUgcmVuZGVyZWQgYW5kIF9hbGwgb3RoZXIgcHJvcHMgb24gdGhpcyBjb21wb25lbnQgYXJlIGlnbm9yZWQuX1xuICAgICAqICAgVGhpcyB0eXBlIGlzIHN1cHBvcnRlZCB0byBzaW1wbGlmeSB1c2FnZSBvZiB0aGlzIGNvbXBvbmVudCBpbiBvdGhlciBCbHVlcHJpbnQgY29tcG9uZW50cy5cbiAgICAgKiAgIEFzIGEgY29uc3VtZXIsIHlvdSBzaG91bGQgbmV2ZXIgdXNlIGA8SWNvbiBpY29uPXs8ZWxlbWVudCAvPn1gIGRpcmVjdGx5OyBzaW1wbHkgcmVuZGVyIGA8ZWxlbWVudCAvPmAgaW5zdGVhZC5cbiAgICAgKi9cbiAgICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogU3BlY2lmaWVzIGFuIGV4cGxpY2l0IGljb24gc2l6ZSBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IHZhbHVlXG4gICAgICovXG4gICAgaWNvblNpemU6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW50ZW50IG9mIHRoZSBidXR0b24uXG4gICAgICovXG4gICAgaW50ZW50OiBQcm9wVHlwZXMub25lT2YoWydub25lJywgJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdkYW5nZXInXSlcbiAgICAgIC5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIGJ1dHRvbi5cbiAgICAgKi9cbiAgICBhcHBlYXJhbmNlOiBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ21pbmltYWwnLCAncHJpbWFyeSddKS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogRm9yY2VmdWxseSBzZXQgdGhlIGFjdGl2ZSBzdGF0ZSBvZiBhIGJ1dHRvbi5cbiAgICAgKiBVc2VmdWwgaW4gY29uanVjdGlvbiB3aXRoIGEgUG9wb3Zlci5cbiAgICAgKi9cbiAgICBpc0FjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBidXR0b24gaXMgZGlzYWJsZWQuXG4gICAgICogaXNMb2FkaW5nIGFsc28gc2V0cyB0aGUgYnV0dG9uIHRvIGRpc2FibGVkLlxuICAgICAqL1xuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIHByb3ZpZGVkIGJ5IFRoZW1lUHJvdmlkZXIuXG4gICAgICovXG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIENsYXNzIG5hbWUgcGFzc2VkIHRvIHRoZSBidXR0b24uXG4gICAgICogT25seSB1c2UgaWYgeW91IGtub3cgd2hhdCB5b3UgYXJlIGRvaW5nLlxuICAgICAqL1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBpbnRlbnQ6ICdub25lJyxcbiAgICBhcHBlYXJhbmNlOiAnZGVmYXVsdCcsXG4gICAgaGVpZ2h0OiAzMlxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRoZW1lLFxuICAgICAgaWNvbkFpbSxcbiAgICAgIGljb24sXG4gICAgICBpY29uU2l6ZSxcbiAgICAgIGhlaWdodCxcbiAgICAgIGludGVudCxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBzaXplID0gaWNvblNpemUgfHwgdGhlbWUuZ2V0SWNvblNpemVGb3JJY29uQnV0dG9uKGhlaWdodClcblxuICAgIHJldHVybiAoXG4gICAgICA8QnV0dG9uXG4gICAgICAgIGludGVudD17aW50ZW50fVxuICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgd2lkdGg9e2hlaWdodH1cbiAgICAgICAgcGFkZGluZ0xlZnQ9ezB9XG4gICAgICAgIHBhZGRpbmdSaWdodD17MH1cbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgID5cbiAgICAgICAgPEljb25cbiAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgICAgY29sb3I9e2ludGVudCA9PT0gJ25vbmUnID8gJ2RlZmF1bHQnIDogJ2N1cnJlbnRDb2xvcid9XG4gICAgICAgIC8+XG4gICAgICA8L0J1dHRvbj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKEljb25CdXR0b24pXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLFVBQVQsRUFBcUJDLE9BQXJCLEVBQThCQyxRQUE5QixFQUF3Q0MsTUFBeEMsUUFBc0QsUUFBdEQ7QUFDQSxTQUFTQyxJQUFULFFBQXFCLFlBQXJCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixhQUExQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsVUFBbkI7O0lBRU1DLFU7Ozs7Ozs7Ozs7Ozs7V0FrRkosa0JBQVM7TUFDUCxrQkFRSSxLQUFLQyxLQVJUO01BQUEsSUFDRUMsS0FERixlQUNFQSxLQURGO01BQUEsSUFFRUMsT0FGRixlQUVFQSxPQUZGO01BQUEsSUFHRUMsSUFIRixlQUdFQSxJQUhGO01BQUEsSUFJRUMsUUFKRixlQUlFQSxRQUpGO01BQUEsSUFLRUMsTUFMRixlQUtFQSxNQUxGO01BQUEsSUFNRUMsTUFORixlQU1FQSxNQU5GO01BQUEsSUFPS04sS0FQTDs7TUFTQSxJQUFNTyxJQUFJLEdBQUdILFFBQVEsSUFBSUgsS0FBSyxDQUFDTyx3QkFBTixDQUErQkgsTUFBL0IsQ0FBekI7TUFFQSxvQkFDRSxvQkFBQyxNQUFEO1FBQ0UsTUFBTSxFQUFFQyxNQURWO1FBRUUsTUFBTSxFQUFFRCxNQUZWO1FBR0UsS0FBSyxFQUFFQSxNQUhUO1FBSUUsV0FBVyxFQUFFLENBSmY7UUFLRSxZQUFZLEVBQUUsQ0FMaEI7UUFNRSxPQUFPLEVBQUMsTUFOVjtRQU9FLGNBQWMsRUFBQztNQVBqQixHQVFNTCxLQVJOLGdCQVVFLG9CQUFDLElBQUQ7UUFDRSxJQUFJLEVBQUVHLElBRFI7UUFFRSxJQUFJLEVBQUVJLElBRlI7UUFHRSxLQUFLLEVBQUVELE1BQU0sS0FBSyxNQUFYLEdBQW9CLFNBQXBCLEdBQWdDO01BSHpDLEVBVkYsQ0FERjtJQWtCRDs7OztFQWhIc0JoQixhOztBQUFuQlMsVTs7Z0JBQUFBLFUseUZBS0NQLFVBQVUsQ0FBQ2lCLFMsR0FLWGhCLE9BQU8sQ0FBQ2dCLFMsR0FLUmYsUUFBUSxDQUFDZSxTLEdBS1RkLE1BQU0sQ0FBQ2MsUztFQUVWO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJTixJQUFJLEVBQUVaLFNBQVMsQ0FBQ21CLE07O0VBRWhCO0FBQ0o7QUFDQTtFQUNJTixRQUFRLEVBQUViLFNBQVMsQ0FBQ29CLE07O0VBRXBCO0FBQ0o7QUFDQTtFQUNJTCxNQUFNLEVBQUVmLFNBQVMsQ0FBQ3FCLEtBQVYsQ0FBZ0IsQ0FBQyxNQUFELEVBQVMsU0FBVCxFQUFvQixTQUFwQixFQUErQixRQUEvQixDQUFoQixFQUNMQyxVOztFQUVIO0FBQ0o7QUFDQTtFQUNJQyxVQUFVLEVBQUV2QixTQUFTLENBQUNxQixLQUFWLENBQWdCLENBQUMsU0FBRCxFQUFZLFNBQVosRUFBdUIsU0FBdkIsQ0FBaEIsRUFBbURDLFU7O0VBRS9EO0FBQ0o7QUFDQTtBQUNBO0VBQ0lFLFFBQVEsRUFBRXhCLFNBQVMsQ0FBQ3lCLEk7O0VBRXBCO0FBQ0o7QUFDQTtBQUNBO0VBQ0lDLFFBQVEsRUFBRTFCLFNBQVMsQ0FBQ3lCLEk7O0VBRXBCO0FBQ0o7QUFDQTtFQUNJZixLQUFLLEVBQUVWLFNBQVMsQ0FBQzJCLE1BQVYsQ0FBaUJMLFU7O0VBRXhCO0FBQ0o7QUFDQTtBQUNBO0VBQ0lNLFNBQVMsRUFBRTVCLFNBQVMsQ0FBQ21COzs7Z0JBekVuQlgsVSxrQkE0RWtCO0VBQ3BCTyxNQUFNLEVBQUUsTUFEWTtFQUVwQlEsVUFBVSxFQUFFLFNBRlE7RUFHcEJULE1BQU0sRUFBRTtBQUhZLEM7O0FBdUN4QixlQUFlUixTQUFTLENBQUNFLFVBQUQsQ0FBeEIifQ==